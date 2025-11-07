// https://registry.terraform.io/providers/splunk-terraform/signalfx/9.22.3/docs/resources/single_value_chart
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SingleValueChartConfig extends cdktf.TerraformMetaArguments {
  /**
  * (Metric by default) Must be "Metric", "Dimension", or "Scale". "Scale" maps to Color by Value in the UI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.22.3/docs/resources/single_value_chart#color_by SingleValueChart#color_by}
  */
  readonly colorBy?: string;
  /**
  * Description of the chart (Optional)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.22.3/docs/resources/single_value_chart#description SingleValueChart#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.22.3/docs/resources/single_value_chart#id SingleValueChart#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * (false by default) Whether to hide the timestamp in the chart
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.22.3/docs/resources/single_value_chart#is_timestamp_hidden SingleValueChart#is_timestamp_hidden}
  */
  readonly isTimestampHidden?: boolean | cdktf.IResolvable;
  /**
  * How long (in seconds) to wait for late datapoints
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.22.3/docs/resources/single_value_chart#max_delay SingleValueChart#max_delay}
  */
  readonly maxDelay?: number;
  /**
  * The maximum precision to for values displayed in the list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.22.3/docs/resources/single_value_chart#max_precision SingleValueChart#max_precision}
  */
  readonly maxPrecision?: number;
  /**
  * Name of the chart
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.22.3/docs/resources/single_value_chart#name SingleValueChart#name}
  */
  readonly name: string;
  /**
  * Signalflow program text for the chart. More info at "https://developers.signalfx.com/docs/signalflow-overview"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.22.3/docs/resources/single_value_chart#program_text SingleValueChart#program_text}
  */
  readonly programText: string;
  /**
  * How often (in seconds) to refresh the values of the list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.22.3/docs/resources/single_value_chart#refresh_interval SingleValueChart#refresh_interval}
  */
  readonly refreshInterval?: number;
  /**
  * (false by default) What kind of secondary visualization to show (None, Radial, Linear, Sparkline)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.22.3/docs/resources/single_value_chart#secondary_visualization SingleValueChart#secondary_visualization}
  */
  readonly secondaryVisualization?: string;
  /**
  * (false by default) Whether to show a trend line below the current value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.22.3/docs/resources/single_value_chart#show_spark_line SingleValueChart#show_spark_line}
  */
  readonly showSparkLine?: boolean | cdktf.IResolvable;
  /**
  * Tags associated with the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.22.3/docs/resources/single_value_chart#tags SingleValueChart#tags}
  */
  readonly tags?: string[];
  /**
  * The property value is a string that denotes the geographic region associated with the time zone, (e.g. Australia/Sydney)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.22.3/docs/resources/single_value_chart#timezone SingleValueChart#timezone}
  */
  readonly timezone?: string;
  /**
  * (Metric by default) Must be "Metric" or "Binary"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.22.3/docs/resources/single_value_chart#unit_prefix SingleValueChart#unit_prefix}
  */
  readonly unitPrefix?: string;
  /**
  * color_scale block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.22.3/docs/resources/single_value_chart#color_scale SingleValueChart#color_scale}
  */
  readonly colorScale?: SingleValueChartColorScale[] | cdktf.IResolvable;
  /**
  * viz_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.22.3/docs/resources/single_value_chart#viz_options SingleValueChart#viz_options}
  */
  readonly vizOptions?: SingleValueChartVizOptions[] | cdktf.IResolvable;
}
export interface SingleValueChartColorScale {
  /**
  * The color to use. Must be one of gray, blue, azure, navy, brown, orange, yellow, magenta, cerise, pink, violet, purple, lilac, emerald, chartreuse, yellowgreen, red, gold, iris, green, jade, aquamarine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.22.3/docs/resources/single_value_chart#color SingleValueChart#color}
  */
  readonly color: string;
  /**
  * Indicates the lower threshold non-inclusive value for this range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.22.3/docs/resources/single_value_chart#gt SingleValueChart#gt}
  */
  readonly gt?: number;
  /**
  * Indicates the lower threshold inclusive value for this range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.22.3/docs/resources/single_value_chart#gte SingleValueChart#gte}
  */
  readonly gte?: number;
  /**
  * Indicates the upper threshold non-inculsive value for this range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.22.3/docs/resources/single_value_chart#lt SingleValueChart#lt}
  */
  readonly lt?: number;
  /**
  * Indicates the upper threshold inclusive value for this range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.22.3/docs/resources/single_value_chart#lte SingleValueChart#lte}
  */
  readonly lte?: number;
}

export function singleValueChartColorScaleToTerraform(struct?: SingleValueChartColorScale | cdktf.IResolvable): any {
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


export function singleValueChartColorScaleToHclTerraform(struct?: SingleValueChartColorScale | cdktf.IResolvable): any {
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

export class SingleValueChartColorScaleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SingleValueChartColorScale | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SingleValueChartColorScale | cdktf.IResolvable | undefined) {
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

export class SingleValueChartColorScaleList extends cdktf.ComplexList {
  public internalValue? : SingleValueChartColorScale[] | cdktf.IResolvable

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
  public get(index: number): SingleValueChartColorScaleOutputReference {
    return new SingleValueChartColorScaleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SingleValueChartVizOptions {
  /**
  * The color to use. Must be one of gray, blue, azure, navy, brown, orange, yellow, magenta, red, pink, violet, purple, lilac, emerald, chartreuse, yellowgreen.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.22.3/docs/resources/single_value_chart#color SingleValueChart#color}
  */
  readonly color?: string;
  /**
  * Specifies an alternate value for the Plot Name column of the Data Table associated with the chart.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.22.3/docs/resources/single_value_chart#display_name SingleValueChart#display_name}
  */
  readonly displayName?: string;
  /**
  * The label used in the publish statement that displays the plot (metric time series data) you want to customize
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.22.3/docs/resources/single_value_chart#label SingleValueChart#label}
  */
  readonly label: string;
  /**
  * An arbitrary prefix to display with the value of this plot
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.22.3/docs/resources/single_value_chart#value_prefix SingleValueChart#value_prefix}
  */
  readonly valuePrefix?: string;
  /**
  * An arbitrary suffix to display with the value of this plot
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.22.3/docs/resources/single_value_chart#value_suffix SingleValueChart#value_suffix}
  */
  readonly valueSuffix?: string;
  /**
  * A unit to attach to this plot. Units support automatic scaling (eg thousands of bytes will be displayed as kilobytes)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.22.3/docs/resources/single_value_chart#value_unit SingleValueChart#value_unit}
  */
  readonly valueUnit?: string;
}

export function singleValueChartVizOptionsToTerraform(struct?: SingleValueChartVizOptions | cdktf.IResolvable): any {
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


export function singleValueChartVizOptionsToHclTerraform(struct?: SingleValueChartVizOptions | cdktf.IResolvable): any {
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

export class SingleValueChartVizOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SingleValueChartVizOptions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SingleValueChartVizOptions | cdktf.IResolvable | undefined) {
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

export class SingleValueChartVizOptionsList extends cdktf.ComplexList {
  public internalValue? : SingleValueChartVizOptions[] | cdktf.IResolvable

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
  public get(index: number): SingleValueChartVizOptionsOutputReference {
    return new SingleValueChartVizOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.22.3/docs/resources/single_value_chart signalfx_single_value_chart}
*/
export class SingleValueChart extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "signalfx_single_value_chart";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SingleValueChart resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SingleValueChart to import
  * @param importFromId The id of the existing SingleValueChart that should be imported. Refer to the {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.22.3/docs/resources/single_value_chart#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SingleValueChart to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "signalfx_single_value_chart", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.22.3/docs/resources/single_value_chart signalfx_single_value_chart} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SingleValueChartConfig
  */
  public constructor(scope: Construct, id: string, config: SingleValueChartConfig) {
    super(scope, id, {
      terraformResourceType: 'signalfx_single_value_chart',
      terraformGeneratorMetadata: {
        providerName: 'signalfx',
        providerVersion: '9.22.3'
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
    this._id = config.id;
    this._isTimestampHidden = config.isTimestampHidden;
    this._maxDelay = config.maxDelay;
    this._maxPrecision = config.maxPrecision;
    this._name = config.name;
    this._programText = config.programText;
    this._refreshInterval = config.refreshInterval;
    this._secondaryVisualization = config.secondaryVisualization;
    this._showSparkLine = config.showSparkLine;
    this._tags = config.tags;
    this._timezone = config.timezone;
    this._unitPrefix = config.unitPrefix;
    this._colorScale.internalValue = config.colorScale;
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

  // is_timestamp_hidden - computed: false, optional: true, required: false
  private _isTimestampHidden?: boolean | cdktf.IResolvable; 
  public get isTimestampHidden() {
    return this.getBooleanAttribute('is_timestamp_hidden');
  }
  public set isTimestampHidden(value: boolean | cdktf.IResolvable) {
    this._isTimestampHidden = value;
  }
  public resetIsTimestampHidden() {
    this._isTimestampHidden = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isTimestampHiddenInput() {
    return this._isTimestampHidden;
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

  // show_spark_line - computed: false, optional: true, required: false
  private _showSparkLine?: boolean | cdktf.IResolvable; 
  public get showSparkLine() {
    return this.getBooleanAttribute('show_spark_line');
  }
  public set showSparkLine(value: boolean | cdktf.IResolvable) {
    this._showSparkLine = value;
  }
  public resetShowSparkLine() {
    this._showSparkLine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showSparkLineInput() {
    return this._showSparkLine;
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
  private _colorScale = new SingleValueChartColorScaleList(this, "color_scale", true);
  public get colorScale() {
    return this._colorScale;
  }
  public putColorScale(value: SingleValueChartColorScale[] | cdktf.IResolvable) {
    this._colorScale.internalValue = value;
  }
  public resetColorScale() {
    this._colorScale.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorScaleInput() {
    return this._colorScale.internalValue;
  }

  // viz_options - computed: false, optional: true, required: false
  private _vizOptions = new SingleValueChartVizOptionsList(this, "viz_options", true);
  public get vizOptions() {
    return this._vizOptions;
  }
  public putVizOptions(value: SingleValueChartVizOptions[] | cdktf.IResolvable) {
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
      id: cdktf.stringToTerraform(this._id),
      is_timestamp_hidden: cdktf.booleanToTerraform(this._isTimestampHidden),
      max_delay: cdktf.numberToTerraform(this._maxDelay),
      max_precision: cdktf.numberToTerraform(this._maxPrecision),
      name: cdktf.stringToTerraform(this._name),
      program_text: cdktf.stringToTerraform(this._programText),
      refresh_interval: cdktf.numberToTerraform(this._refreshInterval),
      secondary_visualization: cdktf.stringToTerraform(this._secondaryVisualization),
      show_spark_line: cdktf.booleanToTerraform(this._showSparkLine),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      timezone: cdktf.stringToTerraform(this._timezone),
      unit_prefix: cdktf.stringToTerraform(this._unitPrefix),
      color_scale: cdktf.listMapper(singleValueChartColorScaleToTerraform, true)(this._colorScale.internalValue),
      viz_options: cdktf.listMapper(singleValueChartVizOptionsToTerraform, true)(this._vizOptions.internalValue),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_timestamp_hidden: {
        value: cdktf.booleanToHclTerraform(this._isTimestampHidden),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      show_spark_line: {
        value: cdktf.booleanToHclTerraform(this._showSparkLine),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
        value: cdktf.listMapperHcl(singleValueChartColorScaleToHclTerraform, true)(this._colorScale.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SingleValueChartColorScaleList",
      },
      viz_options: {
        value: cdktf.listMapperHcl(singleValueChartVizOptionsToHclTerraform, true)(this._vizOptions.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SingleValueChartVizOptionsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
