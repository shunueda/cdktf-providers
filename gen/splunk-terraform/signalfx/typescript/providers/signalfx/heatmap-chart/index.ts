// https://registry.terraform.io/providers/splunk-terraform/signalfx/9.22.3/docs/resources/heatmap_chart
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HeatmapChartConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of the chart (Optional)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.22.3/docs/resources/heatmap_chart#description HeatmapChart#description}
  */
  readonly description?: string;
  /**
  * (false by default) If false, samples a subset of the output MTS, which improves UI performance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.22.3/docs/resources/heatmap_chart#disable_sampling HeatmapChart#disable_sampling}
  */
  readonly disableSampling?: boolean | cdktf.IResolvable;
  /**
  * Properties to group by in the heatmap (in nesting order)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.22.3/docs/resources/heatmap_chart#group_by HeatmapChart#group_by}
  */
  readonly groupBy?: string[];
  /**
  * (false by default) Whether to show the timestamp in the chart
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.22.3/docs/resources/heatmap_chart#hide_timestamp HeatmapChart#hide_timestamp}
  */
  readonly hideTimestamp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.22.3/docs/resources/heatmap_chart#id HeatmapChart#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * How long (in seconds) to wait for late datapoints
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.22.3/docs/resources/heatmap_chart#max_delay HeatmapChart#max_delay}
  */
  readonly maxDelay?: number;
  /**
  * The minimum resolution (in seconds) to use for computing the underlying program
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.22.3/docs/resources/heatmap_chart#minimum_resolution HeatmapChart#minimum_resolution}
  */
  readonly minimumResolution?: number;
  /**
  * Name of the chart
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.22.3/docs/resources/heatmap_chart#name HeatmapChart#name}
  */
  readonly name: string;
  /**
  * Signalflow program text for the chart. More info at "https://developers.signalfx.com/docs/signalflow-overview"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.22.3/docs/resources/heatmap_chart#program_text HeatmapChart#program_text}
  */
  readonly programText: string;
  /**
  * How often (in seconds) to refresh the values of the heatmap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.22.3/docs/resources/heatmap_chart#refresh_interval HeatmapChart#refresh_interval}
  */
  readonly refreshInterval?: number;
  /**
  * The property to use when sorting the elements. Must be prepended with + for ascending or - for descending (e.g. -foo)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.22.3/docs/resources/heatmap_chart#sort_by HeatmapChart#sort_by}
  */
  readonly sortBy?: string;
  /**
  * Tags associated with the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.22.3/docs/resources/heatmap_chart#tags HeatmapChart#tags}
  */
  readonly tags?: string[];
  /**
  * The property value is a string that denotes the geographic region associated with the time zone, (e.g. Australia/Sydney)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.22.3/docs/resources/heatmap_chart#timezone HeatmapChart#timezone}
  */
  readonly timezone?: string;
  /**
  * (Metric by default) Must be "Metric" or "Binary"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.22.3/docs/resources/heatmap_chart#unit_prefix HeatmapChart#unit_prefix}
  */
  readonly unitPrefix?: string;
  /**
  * color_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.22.3/docs/resources/heatmap_chart#color_range HeatmapChart#color_range}
  */
  readonly colorRange?: HeatmapChartColorRange;
  /**
  * color_scale block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.22.3/docs/resources/heatmap_chart#color_scale HeatmapChart#color_scale}
  */
  readonly colorScale?: HeatmapChartColorScale[] | cdktf.IResolvable;
}
export interface HeatmapChartColorRange {
  /**
  * The color range to use. The starting hex color value for data values in a heatmap chart. Specify the value as a 6-character hexadecimal value preceded by the '#' character, for example "#ea1849" (grass green).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.22.3/docs/resources/heatmap_chart#color HeatmapChart#color}
  */
  readonly color: string;
  /**
  * The maximum value within the coloring range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.22.3/docs/resources/heatmap_chart#max_value HeatmapChart#max_value}
  */
  readonly maxValue?: number;
  /**
  * The minimum value within the coloring range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.22.3/docs/resources/heatmap_chart#min_value HeatmapChart#min_value}
  */
  readonly minValue?: number;
}

export function heatmapChartColorRangeToTerraform(struct?: HeatmapChartColorRangeOutputReference | HeatmapChartColorRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktf.stringToTerraform(struct!.color),
    max_value: cdktf.numberToTerraform(struct!.maxValue),
    min_value: cdktf.numberToTerraform(struct!.minValue),
  }
}


export function heatmapChartColorRangeToHclTerraform(struct?: HeatmapChartColorRangeOutputReference | HeatmapChartColorRange): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HeatmapChartColorRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HeatmapChartColorRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._maxValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxValue = this._maxValue;
    }
    if (this._minValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.minValue = this._minValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HeatmapChartColorRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._color = undefined;
      this._maxValue = undefined;
      this._minValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._color = value.color;
      this._maxValue = value.maxValue;
      this._minValue = value.minValue;
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
}
export interface HeatmapChartColorScale {
  /**
  * The color to use. Must be one of gray, blue, azure, navy, brown, orange, yellow, magenta, cerise, pink, violet, purple, lilac, emerald, chartreuse, yellowgreen, red, gold, iris, green, jade, aquamarine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.22.3/docs/resources/heatmap_chart#color HeatmapChart#color}
  */
  readonly color: string;
  /**
  * Indicates the lower threshold non-inclusive value for this range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.22.3/docs/resources/heatmap_chart#gt HeatmapChart#gt}
  */
  readonly gt?: number;
  /**
  * Indicates the lower threshold inclusive value for this range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.22.3/docs/resources/heatmap_chart#gte HeatmapChart#gte}
  */
  readonly gte?: number;
  /**
  * Indicates the upper threshold non-inculsive value for this range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.22.3/docs/resources/heatmap_chart#lt HeatmapChart#lt}
  */
  readonly lt?: number;
  /**
  * Indicates the upper threshold inclusive value for this range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.22.3/docs/resources/heatmap_chart#lte HeatmapChart#lte}
  */
  readonly lte?: number;
}

export function heatmapChartColorScaleToTerraform(struct?: HeatmapChartColorScale | cdktf.IResolvable): any {
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


export function heatmapChartColorScaleToHclTerraform(struct?: HeatmapChartColorScale | cdktf.IResolvable): any {
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

export class HeatmapChartColorScaleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HeatmapChartColorScale | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HeatmapChartColorScale | cdktf.IResolvable | undefined) {
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

export class HeatmapChartColorScaleList extends cdktf.ComplexList {
  public internalValue? : HeatmapChartColorScale[] | cdktf.IResolvable

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
  public get(index: number): HeatmapChartColorScaleOutputReference {
    return new HeatmapChartColorScaleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.22.3/docs/resources/heatmap_chart signalfx_heatmap_chart}
*/
export class HeatmapChart extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "signalfx_heatmap_chart";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a HeatmapChart resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the HeatmapChart to import
  * @param importFromId The id of the existing HeatmapChart that should be imported. Refer to the {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.22.3/docs/resources/heatmap_chart#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the HeatmapChart to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "signalfx_heatmap_chart", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.22.3/docs/resources/heatmap_chart signalfx_heatmap_chart} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HeatmapChartConfig
  */
  public constructor(scope: Construct, id: string, config: HeatmapChartConfig) {
    super(scope, id, {
      terraformResourceType: 'signalfx_heatmap_chart',
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
    this._description = config.description;
    this._disableSampling = config.disableSampling;
    this._groupBy = config.groupBy;
    this._hideTimestamp = config.hideTimestamp;
    this._id = config.id;
    this._maxDelay = config.maxDelay;
    this._minimumResolution = config.minimumResolution;
    this._name = config.name;
    this._programText = config.programText;
    this._refreshInterval = config.refreshInterval;
    this._sortBy = config.sortBy;
    this._tags = config.tags;
    this._timezone = config.timezone;
    this._unitPrefix = config.unitPrefix;
    this._colorRange.internalValue = config.colorRange;
    this._colorScale.internalValue = config.colorScale;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // group_by - computed: false, optional: true, required: false
  private _groupBy?: string[]; 
  public get groupBy() {
    return this.getListAttribute('group_by');
  }
  public set groupBy(value: string[]) {
    this._groupBy = value;
  }
  public resetGroupBy() {
    this._groupBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByInput() {
    return this._groupBy;
  }

  // hide_timestamp - computed: false, optional: true, required: false
  private _hideTimestamp?: boolean | cdktf.IResolvable; 
  public get hideTimestamp() {
    return this.getBooleanAttribute('hide_timestamp');
  }
  public set hideTimestamp(value: boolean | cdktf.IResolvable) {
    this._hideTimestamp = value;
  }
  public resetHideTimestamp() {
    this._hideTimestamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hideTimestampInput() {
    return this._hideTimestamp;
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

  // color_range - computed: false, optional: true, required: false
  private _colorRange = new HeatmapChartColorRangeOutputReference(this, "color_range");
  public get colorRange() {
    return this._colorRange;
  }
  public putColorRange(value: HeatmapChartColorRange) {
    this._colorRange.internalValue = value;
  }
  public resetColorRange() {
    this._colorRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorRangeInput() {
    return this._colorRange.internalValue;
  }

  // color_scale - computed: false, optional: true, required: false
  private _colorScale = new HeatmapChartColorScaleList(this, "color_scale", true);
  public get colorScale() {
    return this._colorScale;
  }
  public putColorScale(value: HeatmapChartColorScale[] | cdktf.IResolvable) {
    this._colorScale.internalValue = value;
  }
  public resetColorScale() {
    this._colorScale.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorScaleInput() {
    return this._colorScale.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      disable_sampling: cdktf.booleanToTerraform(this._disableSampling),
      group_by: cdktf.listMapper(cdktf.stringToTerraform, false)(this._groupBy),
      hide_timestamp: cdktf.booleanToTerraform(this._hideTimestamp),
      id: cdktf.stringToTerraform(this._id),
      max_delay: cdktf.numberToTerraform(this._maxDelay),
      minimum_resolution: cdktf.numberToTerraform(this._minimumResolution),
      name: cdktf.stringToTerraform(this._name),
      program_text: cdktf.stringToTerraform(this._programText),
      refresh_interval: cdktf.numberToTerraform(this._refreshInterval),
      sort_by: cdktf.stringToTerraform(this._sortBy),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      timezone: cdktf.stringToTerraform(this._timezone),
      unit_prefix: cdktf.stringToTerraform(this._unitPrefix),
      color_range: heatmapChartColorRangeToTerraform(this._colorRange.internalValue),
      color_scale: cdktf.listMapper(heatmapChartColorScaleToTerraform, true)(this._colorScale.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      group_by: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._groupBy),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      hide_timestamp: {
        value: cdktf.booleanToHclTerraform(this._hideTimestamp),
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
      sort_by: {
        value: cdktf.stringToHclTerraform(this._sortBy),
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
      color_range: {
        value: heatmapChartColorRangeToHclTerraform(this._colorRange.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "HeatmapChartColorRangeList",
      },
      color_scale: {
        value: cdktf.listMapperHcl(heatmapChartColorScaleToHclTerraform, true)(this._colorScale.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "HeatmapChartColorScaleList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
