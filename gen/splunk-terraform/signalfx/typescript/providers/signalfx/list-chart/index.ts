// https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/list_chart
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ListChartConfig extends cdktf.TerraformMetaArguments {
  /**
  * (Metric by default) Must be "Scale", "Metric" or "Dimension"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/list_chart#color_by ListChart#color_by}
  */
  readonly colorBy?: string;
  /**
  * Description of the chart (Optional)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/list_chart#description ListChart#description}
  */
  readonly description?: string;
  /**
  * (false by default) If false, samples a subset of the output MTS, which improves UI performance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/list_chart#disable_sampling ListChart#disable_sampling}
  */
  readonly disableSampling?: boolean | cdktf.IResolvable;
  /**
  * Seconds since epoch to end the visualization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/list_chart#end_time ListChart#end_time}
  */
  readonly endTime?: number;
  /**
  * (false by default) If `true`, missing data points in the chart would be hidden
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/list_chart#hide_missing_values ListChart#hide_missing_values}
  */
  readonly hideMissingValues?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/list_chart#id ListChart#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * List of properties that shouldn't be displayed in the chart legend (i.e. dimension names)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/list_chart#legend_fields_to_hide ListChart#legend_fields_to_hide}
  */
  readonly legendFieldsToHide?: string[];
  /**
  * How long (in seconds) to wait for late datapoints
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/list_chart#max_delay ListChart#max_delay}
  */
  readonly maxDelay?: number;
  /**
  * Maximum number of digits to display when rounding values up or down
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/list_chart#max_precision ListChart#max_precision}
  */
  readonly maxPrecision?: number;
  /**
  * Name of the chart
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/list_chart#name ListChart#name}
  */
  readonly name: string;
  /**
  * Signalflow program text for the chart. More info at "https://developers.signalfx.com/docs/signalflow-overview"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/list_chart#program_text ListChart#program_text}
  */
  readonly programText: string;
  /**
  * How often (in seconds) to refresh the values of the list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/list_chart#refresh_interval ListChart#refresh_interval}
  */
  readonly refreshInterval?: number;
  /**
  * (false by default) What kind of secondary visualization to show (None, Radial, Linear, Sparkline)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/list_chart#secondary_visualization ListChart#secondary_visualization}
  */
  readonly secondaryVisualization?: string;
  /**
  * The property to use when sorting the elements. Use 'value' if you want to sort by value. Must be prepended with + for ascending or - for descending (e.g. -foo)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/list_chart#sort_by ListChart#sort_by}
  */
  readonly sortBy?: string;
  /**
  * Seconds since epoch to start the visualization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/list_chart#start_time ListChart#start_time}
  */
  readonly startTime?: number;
  /**
  * Tags associated with the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/list_chart#tags ListChart#tags}
  */
  readonly tags?: string[];
  /**
  * Seconds to display in the visualization. This is a rolling range from the current time. Example: 3600 = `-1h`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/list_chart#time_range ListChart#time_range}
  */
  readonly timeRange?: number;
  /**
  * The property value is a string that denotes the geographic region associated with the time zone, (e.g. Australia/Sydney)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/list_chart#timezone ListChart#timezone}
  */
  readonly timezone?: string;
  /**
  * (Metric by default) Must be "Metric" or "Binary"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/list_chart#unit_prefix ListChart#unit_prefix}
  */
  readonly unitPrefix?: string;
  /**
  * color_scale block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/list_chart#color_scale ListChart#color_scale}
  */
  readonly colorScale?: ListChartColorScale[] | cdktf.IResolvable;
  /**
  * legend_options_fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/list_chart#legend_options_fields ListChart#legend_options_fields}
  */
  readonly legendOptionsFields?: ListChartLegendOptionsFields[] | cdktf.IResolvable;
  /**
  * viz_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/list_chart#viz_options ListChart#viz_options}
  */
  readonly vizOptions?: ListChartVizOptions[] | cdktf.IResolvable;
}
export interface ListChartColorScale {
  /**
  * The color to use. Must be one of gray, blue, azure, navy, brown, orange, yellow, magenta, cerise, pink, violet, purple, lilac, emerald, chartreuse, yellowgreen, red, gold, iris, green, jade, aquamarine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/list_chart#color ListChart#color}
  */
  readonly color: string;
  /**
  * Indicates the lower threshold non-inclusive value for this range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/list_chart#gt ListChart#gt}
  */
  readonly gt?: number;
  /**
  * Indicates the lower threshold inclusive value for this range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/list_chart#gte ListChart#gte}
  */
  readonly gte?: number;
  /**
  * Indicates the upper threshold non-inculsive value for this range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/list_chart#lt ListChart#lt}
  */
  readonly lt?: number;
  /**
  * Indicates the upper threshold inclusive value for this range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/list_chart#lte ListChart#lte}
  */
  readonly lte?: number;
}

export function listChartColorScaleToTerraform(struct?: ListChartColorScale | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktf.stringToTerraform(struct!.color),
    gt: cdktf.numberToTerraform(struct!.gt),
    gte: cdktf.numberToTerraform(struct!.gte),
    lt: cdktf.numberToTerraform(struct!.lt),
    lte: cdktf.numberToTerraform(struct!.lte),
  }
}


export function listChartColorScaleToHclTerraform(struct?: ListChartColorScale | cdktf.IResolvable): any {
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
    gt: {
      value: cdktf.numberToHclTerraform(struct!.gt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gte: {
      value: cdktf.numberToHclTerraform(struct!.gte),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lt: {
      value: cdktf.numberToHclTerraform(struct!.lt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lte: {
      value: cdktf.numberToHclTerraform(struct!.lte),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ListChartColorScaleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ListChartColorScale | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._gt !== undefined) {
      hasAnyValues = true;
      internalValueResult.gt = this._gt;
    }
    if (this._gte !== undefined) {
      hasAnyValues = true;
      internalValueResult.gte = this._gte;
    }
    if (this._lt !== undefined) {
      hasAnyValues = true;
      internalValueResult.lt = this._lt;
    }
    if (this._lte !== undefined) {
      hasAnyValues = true;
      internalValueResult.lte = this._lte;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ListChartColorScale | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._color = undefined;
      this._gt = undefined;
      this._gte = undefined;
      this._lt = undefined;
      this._lte = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._color = value.color;
      this._gt = value.gt;
      this._gte = value.gte;
      this._lt = value.lt;
      this._lte = value.lte;
    }
  }

  // color - computed: false, optional: false, required: true
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // gt - computed: false, optional: true, required: false
  private _gt?: number; 
  public get gt() {
    return this.getNumberAttribute('gt');
  }
  public set gt(value: number) {
    this._gt = value;
  }
  public resetGt() {
    this._gt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtInput() {
    return this._gt;
  }

  // gte - computed: false, optional: true, required: false
  private _gte?: number; 
  public get gte() {
    return this.getNumberAttribute('gte');
  }
  public set gte(value: number) {
    this._gte = value;
  }
  public resetGte() {
    this._gte = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gteInput() {
    return this._gte;
  }

  // lt - computed: false, optional: true, required: false
  private _lt?: number; 
  public get lt() {
    return this.getNumberAttribute('lt');
  }
  public set lt(value: number) {
    this._lt = value;
  }
  public resetLt() {
    this._lt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ltInput() {
    return this._lt;
  }

  // lte - computed: false, optional: true, required: false
  private _lte?: number; 
  public get lte() {
    return this.getNumberAttribute('lte');
  }
  public set lte(value: number) {
    this._lte = value;
  }
  public resetLte() {
    this._lte = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lteInput() {
    return this._lte;
  }
}

export class ListChartColorScaleList extends cdktf.ComplexList {
  public internalValue? : ListChartColorScale[] | cdktf.IResolvable

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
  public get(index: number): ListChartColorScaleOutputReference {
    return new ListChartColorScaleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ListChartLegendOptionsFields {
  /**
  * (true by default) Determines if this property is displayed in the data table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/list_chart#enabled ListChart#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The name of a property to hide or show in the data table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/list_chart#property ListChart#property}
  */
  readonly property: string;
}

export function listChartLegendOptionsFieldsToTerraform(struct?: ListChartLegendOptionsFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    property: cdktf.stringToTerraform(struct!.property),
  }
}


export function listChartLegendOptionsFieldsToHclTerraform(struct?: ListChartLegendOptionsFields | cdktf.IResolvable): any {
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

export class ListChartLegendOptionsFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ListChartLegendOptionsFields | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ListChartLegendOptionsFields | cdktf.IResolvable | undefined) {
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

export class ListChartLegendOptionsFieldsList extends cdktf.ComplexList {
  public internalValue? : ListChartLegendOptionsFields[] | cdktf.IResolvable

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
  public get(index: number): ListChartLegendOptionsFieldsOutputReference {
    return new ListChartLegendOptionsFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ListChartVizOptions {
  /**
  * Color to use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/list_chart#color ListChart#color}
  */
  readonly color?: string;
  /**
  * Specifies an alternate value for the Plot Name column of the Data Table associated with the chart.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/list_chart#display_name ListChart#display_name}
  */
  readonly displayName?: string;
  /**
  * The label used in the publish statement that displays the plot (metric time series data) you want to customize
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/list_chart#label ListChart#label}
  */
  readonly label: string;
  /**
  * An arbitrary prefix to display with the value of this plot
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/list_chart#value_prefix ListChart#value_prefix}
  */
  readonly valuePrefix?: string;
  /**
  * An arbitrary suffix to display with the value of this plot
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/list_chart#value_suffix ListChart#value_suffix}
  */
  readonly valueSuffix?: string;
  /**
  * A unit to attach to this plot. Units support automatic scaling (eg thousands of bytes will be displayed as kilobytes)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/list_chart#value_unit ListChart#value_unit}
  */
  readonly valueUnit?: string;
}

export function listChartVizOptionsToTerraform(struct?: ListChartVizOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktf.stringToTerraform(struct!.color),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    label: cdktf.stringToTerraform(struct!.label),
    value_prefix: cdktf.stringToTerraform(struct!.valuePrefix),
    value_suffix: cdktf.stringToTerraform(struct!.valueSuffix),
    value_unit: cdktf.stringToTerraform(struct!.valueUnit),
  }
}


export function listChartVizOptionsToHclTerraform(struct?: ListChartVizOptions | cdktf.IResolvable): any {
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

export class ListChartVizOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ListChartVizOptions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ListChartVizOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._color = undefined;
      this._displayName = undefined;
      this._label = undefined;
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
      this._color = value.color;
      this._displayName = value.displayName;
      this._label = value.label;
      this._valuePrefix = value.valuePrefix;
      this._valueSuffix = value.valueSuffix;
      this._valueUnit = value.valueUnit;
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

export class ListChartVizOptionsList extends cdktf.ComplexList {
  public internalValue? : ListChartVizOptions[] | cdktf.IResolvable

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
  public get(index: number): ListChartVizOptionsOutputReference {
    return new ListChartVizOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/list_chart signalfx_list_chart}
*/
export class ListChart extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "signalfx_list_chart";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ListChart resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ListChart to import
  * @param importFromId The id of the existing ListChart that should be imported. Refer to the {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/list_chart#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ListChart to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "signalfx_list_chart", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/list_chart signalfx_list_chart} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ListChartConfig
  */
  public constructor(scope: Construct, id: string, config: ListChartConfig) {
    super(scope, id, {
      terraformResourceType: 'signalfx_list_chart',
      terraformGeneratorMetadata: {
        providerName: 'signalfx',
        providerVersion: '9.23.0',
        providerVersionConstraint: '9.23.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._colorBy = config.colorBy;
    this._description = config.description;
    this._disableSampling = config.disableSampling;
    this._endTime = config.endTime;
    this._hideMissingValues = config.hideMissingValues;
    this._id = config.id;
    this._legendFieldsToHide = config.legendFieldsToHide;
    this._maxDelay = config.maxDelay;
    this._maxPrecision = config.maxPrecision;
    this._name = config.name;
    this._programText = config.programText;
    this._refreshInterval = config.refreshInterval;
    this._secondaryVisualization = config.secondaryVisualization;
    this._sortBy = config.sortBy;
    this._startTime = config.startTime;
    this._tags = config.tags;
    this._timeRange = config.timeRange;
    this._timezone = config.timezone;
    this._unitPrefix = config.unitPrefix;
    this._colorScale.internalValue = config.colorScale;
    this._legendOptionsFields.internalValue = config.legendOptionsFields;
    this._vizOptions.internalValue = config.vizOptions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // hide_missing_values - computed: false, optional: true, required: false
  private _hideMissingValues?: boolean | cdktf.IResolvable; 
  public get hideMissingValues() {
    return this.getBooleanAttribute('hide_missing_values');
  }
  public set hideMissingValues(value: boolean | cdktf.IResolvable) {
    this._hideMissingValues = value;
  }
  public resetHideMissingValues() {
    this._hideMissingValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hideMissingValuesInput() {
    return this._hideMissingValues;
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

  // max_precision - computed: false, optional: true, required: false
  private _maxPrecision?: number; 
  public get maxPrecision() {
    return this.getNumberAttribute('max_precision');
  }
  public set maxPrecision(value: number) {
    this._maxPrecision = value;
  }
  public resetMaxPrecision() {
    this._maxPrecision = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPrecisionInput() {
    return this._maxPrecision;
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

  // refresh_interval - computed: false, optional: true, required: false
  private _refreshInterval?: number; 
  public get refreshInterval() {
    return this.getNumberAttribute('refresh_interval');
  }
  public set refreshInterval(value: number) {
    this._refreshInterval = value;
  }
  public resetRefreshInterval() {
    this._refreshInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshIntervalInput() {
    return this._refreshInterval;
  }

  // secondary_visualization - computed: false, optional: true, required: false
  private _secondaryVisualization?: string; 
  public get secondaryVisualization() {
    return this.getStringAttribute('secondary_visualization');
  }
  public set secondaryVisualization(value: string) {
    this._secondaryVisualization = value;
  }
  public resetSecondaryVisualization() {
    this._secondaryVisualization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryVisualizationInput() {
    return this._secondaryVisualization;
  }

  // sort_by - computed: false, optional: true, required: false
  private _sortBy?: string; 
  public get sortBy() {
    return this.getStringAttribute('sort_by');
  }
  public set sortBy(value: string) {
    this._sortBy = value;
  }
  public resetSortBy() {
    this._sortBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortByInput() {
    return this._sortBy;
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
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
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

  // color_scale - computed: false, optional: true, required: false
  private _colorScale = new ListChartColorScaleList(this, "color_scale", true);
  public get colorScale() {
    return this._colorScale;
  }
  public putColorScale(value: ListChartColorScale[] | cdktf.IResolvable) {
    this._colorScale.internalValue = value;
  }
  public resetColorScale() {
    this._colorScale.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorScaleInput() {
    return this._colorScale.internalValue;
  }

  // legend_options_fields - computed: false, optional: true, required: false
  private _legendOptionsFields = new ListChartLegendOptionsFieldsList(this, "legend_options_fields", false);
  public get legendOptionsFields() {
    return this._legendOptionsFields;
  }
  public putLegendOptionsFields(value: ListChartLegendOptionsFields[] | cdktf.IResolvable) {
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
  private _vizOptions = new ListChartVizOptionsList(this, "viz_options", true);
  public get vizOptions() {
    return this._vizOptions;
  }
  public putVizOptions(value: ListChartVizOptions[] | cdktf.IResolvable) {
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
      color_by: cdktf.stringToTerraform(this._colorBy),
      description: cdktf.stringToTerraform(this._description),
      disable_sampling: cdktf.booleanToTerraform(this._disableSampling),
      end_time: cdktf.numberToTerraform(this._endTime),
      hide_missing_values: cdktf.booleanToTerraform(this._hideMissingValues),
      id: cdktf.stringToTerraform(this._id),
      legend_fields_to_hide: cdktf.listMapper(cdktf.stringToTerraform, false)(this._legendFieldsToHide),
      max_delay: cdktf.numberToTerraform(this._maxDelay),
      max_precision: cdktf.numberToTerraform(this._maxPrecision),
      name: cdktf.stringToTerraform(this._name),
      program_text: cdktf.stringToTerraform(this._programText),
      refresh_interval: cdktf.numberToTerraform(this._refreshInterval),
      secondary_visualization: cdktf.stringToTerraform(this._secondaryVisualization),
      sort_by: cdktf.stringToTerraform(this._sortBy),
      start_time: cdktf.numberToTerraform(this._startTime),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      time_range: cdktf.numberToTerraform(this._timeRange),
      timezone: cdktf.stringToTerraform(this._timezone),
      unit_prefix: cdktf.stringToTerraform(this._unitPrefix),
      color_scale: cdktf.listMapper(listChartColorScaleToTerraform, true)(this._colorScale.internalValue),
      legend_options_fields: cdktf.listMapper(listChartLegendOptionsFieldsToTerraform, true)(this._legendOptionsFields.internalValue),
      viz_options: cdktf.listMapper(listChartVizOptionsToTerraform, true)(this._vizOptions.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      hide_missing_values: {
        value: cdktf.booleanToHclTerraform(this._hideMissingValues),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      max_precision: {
        value: cdktf.numberToHclTerraform(this._maxPrecision),
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
      program_text: {
        value: cdktf.stringToHclTerraform(this._programText),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      refresh_interval: {
        value: cdktf.numberToHclTerraform(this._refreshInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      secondary_visualization: {
        value: cdktf.stringToHclTerraform(this._secondaryVisualization),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sort_by: {
        value: cdktf.stringToHclTerraform(this._sortBy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
        type: "set",
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
      color_scale: {
        value: cdktf.listMapperHcl(listChartColorScaleToHclTerraform, true)(this._colorScale.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ListChartColorScaleList",
      },
      legend_options_fields: {
        value: cdktf.listMapperHcl(listChartLegendOptionsFieldsToHclTerraform, true)(this._legendOptionsFields.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ListChartLegendOptionsFieldsList",
      },
      viz_options: {
        value: cdktf.listMapperHcl(listChartVizOptionsToHclTerraform, true)(this._vizOptions.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ListChartVizOptionsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
