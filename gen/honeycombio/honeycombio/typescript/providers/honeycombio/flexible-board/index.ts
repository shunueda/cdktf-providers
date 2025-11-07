// https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/resources/flexible_board
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FlexibleBoardConfig extends cdktf.TerraformMetaArguments {
  /**
  * The description of the Board. Supports Markdown.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/resources/flexible_board#description FlexibleBoard#description}
  */
  readonly description?: string;
  /**
  * The name of the Board.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/resources/flexible_board#name FlexibleBoard#name}
  */
  readonly name: string;
  /**
  * A map of tags to assign to the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/resources/flexible_board#tags FlexibleBoard#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * panel block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/resources/flexible_board#panel FlexibleBoard#panel}
  */
  readonly panel?: FlexibleBoardPanel[] | cdktf.IResolvable;
}
export interface FlexibleBoardPanelPosition {
  /**
  * The height of the panel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/resources/flexible_board#height FlexibleBoard#height}
  */
  readonly height?: number;
  /**
  * The width of the panel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/resources/flexible_board#width FlexibleBoard#width}
  */
  readonly width?: number;
  /**
  * The X coordinate of the panel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/resources/flexible_board#x_coordinate FlexibleBoard#x_coordinate}
  */
  readonly xCoordinate?: number;
  /**
  * The Y coordinate of the panel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/resources/flexible_board#y_coordinate FlexibleBoard#y_coordinate}
  */
  readonly yCoordinate?: number;
}

export function flexibleBoardPanelPositionToTerraform(struct?: FlexibleBoardPanelPosition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    height: cdktf.numberToTerraform(struct!.height),
    width: cdktf.numberToTerraform(struct!.width),
    x_coordinate: cdktf.numberToTerraform(struct!.xCoordinate),
    y_coordinate: cdktf.numberToTerraform(struct!.yCoordinate),
  }
}


export function flexibleBoardPanelPositionToHclTerraform(struct?: FlexibleBoardPanelPosition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    height: {
      value: cdktf.numberToHclTerraform(struct!.height),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    width: {
      value: cdktf.numberToHclTerraform(struct!.width),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    x_coordinate: {
      value: cdktf.numberToHclTerraform(struct!.xCoordinate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    y_coordinate: {
      value: cdktf.numberToHclTerraform(struct!.yCoordinate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FlexibleBoardPanelPositionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FlexibleBoardPanelPosition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._height !== undefined) {
      hasAnyValues = true;
      internalValueResult.height = this._height;
    }
    if (this._width !== undefined) {
      hasAnyValues = true;
      internalValueResult.width = this._width;
    }
    if (this._xCoordinate !== undefined) {
      hasAnyValues = true;
      internalValueResult.xCoordinate = this._xCoordinate;
    }
    if (this._yCoordinate !== undefined) {
      hasAnyValues = true;
      internalValueResult.yCoordinate = this._yCoordinate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FlexibleBoardPanelPosition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._height = undefined;
      this._width = undefined;
      this._xCoordinate = undefined;
      this._yCoordinate = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._height = value.height;
      this._width = value.width;
      this._xCoordinate = value.xCoordinate;
      this._yCoordinate = value.yCoordinate;
    }
  }

  // height - computed: true, optional: true, required: false
  private _height?: number; 
  public get height() {
    return this.getNumberAttribute('height');
  }
  public set height(value: number) {
    this._height = value;
  }
  public resetHeight() {
    this._height = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get heightInput() {
    return this._height;
  }

  // width - computed: true, optional: true, required: false
  private _width?: number; 
  public get width() {
    return this.getNumberAttribute('width');
  }
  public set width(value: number) {
    this._width = value;
  }
  public resetWidth() {
    this._width = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get widthInput() {
    return this._width;
  }

  // x_coordinate - computed: true, optional: true, required: false
  private _xCoordinate?: number; 
  public get xCoordinate() {
    return this.getNumberAttribute('x_coordinate');
  }
  public set xCoordinate(value: number) {
    this._xCoordinate = value;
  }
  public resetXCoordinate() {
    this._xCoordinate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xCoordinateInput() {
    return this._xCoordinate;
  }

  // y_coordinate - computed: true, optional: true, required: false
  private _yCoordinate?: number; 
  public get yCoordinate() {
    return this.getNumberAttribute('y_coordinate');
  }
  public set yCoordinate(value: number) {
    this._yCoordinate = value;
  }
  public resetYCoordinate() {
    this._yCoordinate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yCoordinateInput() {
    return this._yCoordinate;
  }
}
export interface FlexibleBoardPanelQueryPanelVisualizationSettingsChart {
  /**
  * Index of the chart this configuration controls.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/resources/flexible_board#chart_index FlexibleBoard#chart_index}
  */
  readonly chartIndex?: number;
  /**
  * Type of chart (e.g., 'line', 'bar').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/resources/flexible_board#chart_type FlexibleBoard#chart_type}
  */
  readonly chartType?: string;
  /**
  * Omit missing values from the visualization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/resources/flexible_board#omit_missing_values FlexibleBoard#omit_missing_values}
  */
  readonly omitMissingValues?: boolean | cdktf.IResolvable;
  /**
  * Use logarithmic scale on Y axis.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/resources/flexible_board#use_log_scale FlexibleBoard#use_log_scale}
  */
  readonly useLogScale?: boolean | cdktf.IResolvable;
}

export function flexibleBoardPanelQueryPanelVisualizationSettingsChartToTerraform(struct?: FlexibleBoardPanelQueryPanelVisualizationSettingsChart | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    chart_index: cdktf.numberToTerraform(struct!.chartIndex),
    chart_type: cdktf.stringToTerraform(struct!.chartType),
    omit_missing_values: cdktf.booleanToTerraform(struct!.omitMissingValues),
    use_log_scale: cdktf.booleanToTerraform(struct!.useLogScale),
  }
}


export function flexibleBoardPanelQueryPanelVisualizationSettingsChartToHclTerraform(struct?: FlexibleBoardPanelQueryPanelVisualizationSettingsChart | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    chart_index: {
      value: cdktf.numberToHclTerraform(struct!.chartIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    chart_type: {
      value: cdktf.stringToHclTerraform(struct!.chartType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    omit_missing_values: {
      value: cdktf.booleanToHclTerraform(struct!.omitMissingValues),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_log_scale: {
      value: cdktf.booleanToHclTerraform(struct!.useLogScale),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FlexibleBoardPanelQueryPanelVisualizationSettingsChartOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FlexibleBoardPanelQueryPanelVisualizationSettingsChart | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._chartIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.chartIndex = this._chartIndex;
    }
    if (this._chartType !== undefined) {
      hasAnyValues = true;
      internalValueResult.chartType = this._chartType;
    }
    if (this._omitMissingValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.omitMissingValues = this._omitMissingValues;
    }
    if (this._useLogScale !== undefined) {
      hasAnyValues = true;
      internalValueResult.useLogScale = this._useLogScale;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FlexibleBoardPanelQueryPanelVisualizationSettingsChart | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._chartIndex = undefined;
      this._chartType = undefined;
      this._omitMissingValues = undefined;
      this._useLogScale = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._chartIndex = value.chartIndex;
      this._chartType = value.chartType;
      this._omitMissingValues = value.omitMissingValues;
      this._useLogScale = value.useLogScale;
    }
  }

  // chart_index - computed: true, optional: true, required: false
  private _chartIndex?: number; 
  public get chartIndex() {
    return this.getNumberAttribute('chart_index');
  }
  public set chartIndex(value: number) {
    this._chartIndex = value;
  }
  public resetChartIndex() {
    this._chartIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chartIndexInput() {
    return this._chartIndex;
  }

  // chart_type - computed: true, optional: true, required: false
  private _chartType?: string; 
  public get chartType() {
    return this.getStringAttribute('chart_type');
  }
  public set chartType(value: string) {
    this._chartType = value;
  }
  public resetChartType() {
    this._chartType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chartTypeInput() {
    return this._chartType;
  }

  // omit_missing_values - computed: true, optional: true, required: false
  private _omitMissingValues?: boolean | cdktf.IResolvable; 
  public get omitMissingValues() {
    return this.getBooleanAttribute('omit_missing_values');
  }
  public set omitMissingValues(value: boolean | cdktf.IResolvable) {
    this._omitMissingValues = value;
  }
  public resetOmitMissingValues() {
    this._omitMissingValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get omitMissingValuesInput() {
    return this._omitMissingValues;
  }

  // use_log_scale - computed: true, optional: true, required: false
  private _useLogScale?: boolean | cdktf.IResolvable; 
  public get useLogScale() {
    return this.getBooleanAttribute('use_log_scale');
  }
  public set useLogScale(value: boolean | cdktf.IResolvable) {
    this._useLogScale = value;
  }
  public resetUseLogScale() {
    this._useLogScale = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useLogScaleInput() {
    return this._useLogScale;
  }
}

export class FlexibleBoardPanelQueryPanelVisualizationSettingsChartList extends cdktf.ComplexList {
  public internalValue? : FlexibleBoardPanelQueryPanelVisualizationSettingsChart[] | cdktf.IResolvable

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
  public get(index: number): FlexibleBoardPanelQueryPanelVisualizationSettingsChartOutputReference {
    return new FlexibleBoardPanelQueryPanelVisualizationSettingsChartOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FlexibleBoardPanelQueryPanelVisualizationSettings {
  /**
  * Hide comparison values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/resources/flexible_board#hide_compare FlexibleBoard#hide_compare}
  */
  readonly hideCompare?: boolean | cdktf.IResolvable;
  /**
  * Disable Graph tooltips in the results display when hovering over a graph.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/resources/flexible_board#hide_hovers FlexibleBoard#hide_hovers}
  */
  readonly hideHovers?: boolean | cdktf.IResolvable;
  /**
  * Hide markers from appearing on graph.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/resources/flexible_board#hide_markers FlexibleBoard#hide_markers}
  */
  readonly hideMarkers?: boolean | cdktf.IResolvable;
  /**
  * Combine any visualized AVG, MIN, MAX, and PERCENTILE clauses into a single chart.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/resources/flexible_board#prefer_overlaid_charts FlexibleBoard#prefer_overlaid_charts}
  */
  readonly preferOverlaidCharts?: boolean | cdktf.IResolvable;
  /**
  * Display UTC Time X-Axis or Localtime X-Axis.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/resources/flexible_board#use_utc_xaxis FlexibleBoard#use_utc_xaxis}
  */
  readonly useUtcXaxis?: boolean | cdktf.IResolvable;
  /**
  * chart block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/resources/flexible_board#chart FlexibleBoard#chart}
  */
  readonly chart?: FlexibleBoardPanelQueryPanelVisualizationSettingsChart[] | cdktf.IResolvable;
}

export function flexibleBoardPanelQueryPanelVisualizationSettingsToTerraform(struct?: FlexibleBoardPanelQueryPanelVisualizationSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hide_compare: cdktf.booleanToTerraform(struct!.hideCompare),
    hide_hovers: cdktf.booleanToTerraform(struct!.hideHovers),
    hide_markers: cdktf.booleanToTerraform(struct!.hideMarkers),
    prefer_overlaid_charts: cdktf.booleanToTerraform(struct!.preferOverlaidCharts),
    use_utc_xaxis: cdktf.booleanToTerraform(struct!.useUtcXaxis),
    chart: cdktf.listMapper(flexibleBoardPanelQueryPanelVisualizationSettingsChartToTerraform, true)(struct!.chart),
  }
}


export function flexibleBoardPanelQueryPanelVisualizationSettingsToHclTerraform(struct?: FlexibleBoardPanelQueryPanelVisualizationSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hide_compare: {
      value: cdktf.booleanToHclTerraform(struct!.hideCompare),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    hide_hovers: {
      value: cdktf.booleanToHclTerraform(struct!.hideHovers),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    hide_markers: {
      value: cdktf.booleanToHclTerraform(struct!.hideMarkers),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prefer_overlaid_charts: {
      value: cdktf.booleanToHclTerraform(struct!.preferOverlaidCharts),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_utc_xaxis: {
      value: cdktf.booleanToHclTerraform(struct!.useUtcXaxis),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    chart: {
      value: cdktf.listMapperHcl(flexibleBoardPanelQueryPanelVisualizationSettingsChartToHclTerraform, true)(struct!.chart),
      isBlock: true,
      type: "list",
      storageClassType: "FlexibleBoardPanelQueryPanelVisualizationSettingsChartList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FlexibleBoardPanelQueryPanelVisualizationSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FlexibleBoardPanelQueryPanelVisualizationSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hideCompare !== undefined) {
      hasAnyValues = true;
      internalValueResult.hideCompare = this._hideCompare;
    }
    if (this._hideHovers !== undefined) {
      hasAnyValues = true;
      internalValueResult.hideHovers = this._hideHovers;
    }
    if (this._hideMarkers !== undefined) {
      hasAnyValues = true;
      internalValueResult.hideMarkers = this._hideMarkers;
    }
    if (this._preferOverlaidCharts !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferOverlaidCharts = this._preferOverlaidCharts;
    }
    if (this._useUtcXaxis !== undefined) {
      hasAnyValues = true;
      internalValueResult.useUtcXaxis = this._useUtcXaxis;
    }
    if (this._chart?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.chart = this._chart?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FlexibleBoardPanelQueryPanelVisualizationSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hideCompare = undefined;
      this._hideHovers = undefined;
      this._hideMarkers = undefined;
      this._preferOverlaidCharts = undefined;
      this._useUtcXaxis = undefined;
      this._chart.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hideCompare = value.hideCompare;
      this._hideHovers = value.hideHovers;
      this._hideMarkers = value.hideMarkers;
      this._preferOverlaidCharts = value.preferOverlaidCharts;
      this._useUtcXaxis = value.useUtcXaxis;
      this._chart.internalValue = value.chart;
    }
  }

  // hide_compare - computed: true, optional: true, required: false
  private _hideCompare?: boolean | cdktf.IResolvable; 
  public get hideCompare() {
    return this.getBooleanAttribute('hide_compare');
  }
  public set hideCompare(value: boolean | cdktf.IResolvable) {
    this._hideCompare = value;
  }
  public resetHideCompare() {
    this._hideCompare = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hideCompareInput() {
    return this._hideCompare;
  }

  // hide_hovers - computed: true, optional: true, required: false
  private _hideHovers?: boolean | cdktf.IResolvable; 
  public get hideHovers() {
    return this.getBooleanAttribute('hide_hovers');
  }
  public set hideHovers(value: boolean | cdktf.IResolvable) {
    this._hideHovers = value;
  }
  public resetHideHovers() {
    this._hideHovers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hideHoversInput() {
    return this._hideHovers;
  }

  // hide_markers - computed: true, optional: true, required: false
  private _hideMarkers?: boolean | cdktf.IResolvable; 
  public get hideMarkers() {
    return this.getBooleanAttribute('hide_markers');
  }
  public set hideMarkers(value: boolean | cdktf.IResolvable) {
    this._hideMarkers = value;
  }
  public resetHideMarkers() {
    this._hideMarkers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hideMarkersInput() {
    return this._hideMarkers;
  }

  // prefer_overlaid_charts - computed: true, optional: true, required: false
  private _preferOverlaidCharts?: boolean | cdktf.IResolvable; 
  public get preferOverlaidCharts() {
    return this.getBooleanAttribute('prefer_overlaid_charts');
  }
  public set preferOverlaidCharts(value: boolean | cdktf.IResolvable) {
    this._preferOverlaidCharts = value;
  }
  public resetPreferOverlaidCharts() {
    this._preferOverlaidCharts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferOverlaidChartsInput() {
    return this._preferOverlaidCharts;
  }

  // use_utc_xaxis - computed: true, optional: true, required: false
  private _useUtcXaxis?: boolean | cdktf.IResolvable; 
  public get useUtcXaxis() {
    return this.getBooleanAttribute('use_utc_xaxis');
  }
  public set useUtcXaxis(value: boolean | cdktf.IResolvable) {
    this._useUtcXaxis = value;
  }
  public resetUseUtcXaxis() {
    this._useUtcXaxis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useUtcXaxisInput() {
    return this._useUtcXaxis;
  }

  // chart - computed: false, optional: true, required: false
  private _chart = new FlexibleBoardPanelQueryPanelVisualizationSettingsChartList(this, "chart", false);
  public get chart() {
    return this._chart;
  }
  public putChart(value: FlexibleBoardPanelQueryPanelVisualizationSettingsChart[] | cdktf.IResolvable) {
    this._chart.internalValue = value;
  }
  public resetChart() {
    this._chart.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chartInput() {
    return this._chart.internalValue;
  }
}

export class FlexibleBoardPanelQueryPanelVisualizationSettingsList extends cdktf.ComplexList {
  public internalValue? : FlexibleBoardPanelQueryPanelVisualizationSettings[] | cdktf.IResolvable

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
  public get(index: number): FlexibleBoardPanelQueryPanelVisualizationSettingsOutputReference {
    return new FlexibleBoardPanelQueryPanelVisualizationSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FlexibleBoardPanelQueryPanel {
  /**
  * Query annotation ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/resources/flexible_board#query_annotation_id FlexibleBoard#query_annotation_id}
  */
  readonly queryAnnotationId: string;
  /**
  * Query ID to be rendered in the panel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/resources/flexible_board#query_id FlexibleBoard#query_id}
  */
  readonly queryId: string;
  /**
  * The visual style of the query (e.g., 'graph', 'combo').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/resources/flexible_board#query_style FlexibleBoard#query_style}
  */
  readonly queryStyle?: string;
  /**
  * visualization_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/resources/flexible_board#visualization_settings FlexibleBoard#visualization_settings}
  */
  readonly visualizationSettings?: FlexibleBoardPanelQueryPanelVisualizationSettings[] | cdktf.IResolvable;
}

export function flexibleBoardPanelQueryPanelToTerraform(struct?: FlexibleBoardPanelQueryPanel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    query_annotation_id: cdktf.stringToTerraform(struct!.queryAnnotationId),
    query_id: cdktf.stringToTerraform(struct!.queryId),
    query_style: cdktf.stringToTerraform(struct!.queryStyle),
    visualization_settings: cdktf.listMapper(flexibleBoardPanelQueryPanelVisualizationSettingsToTerraform, true)(struct!.visualizationSettings),
  }
}


export function flexibleBoardPanelQueryPanelToHclTerraform(struct?: FlexibleBoardPanelQueryPanel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    query_annotation_id: {
      value: cdktf.stringToHclTerraform(struct!.queryAnnotationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query_id: {
      value: cdktf.stringToHclTerraform(struct!.queryId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query_style: {
      value: cdktf.stringToHclTerraform(struct!.queryStyle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    visualization_settings: {
      value: cdktf.listMapperHcl(flexibleBoardPanelQueryPanelVisualizationSettingsToHclTerraform, true)(struct!.visualizationSettings),
      isBlock: true,
      type: "list",
      storageClassType: "FlexibleBoardPanelQueryPanelVisualizationSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FlexibleBoardPanelQueryPanelOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FlexibleBoardPanelQueryPanel | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._queryAnnotationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryAnnotationId = this._queryAnnotationId;
    }
    if (this._queryId !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryId = this._queryId;
    }
    if (this._queryStyle !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryStyle = this._queryStyle;
    }
    if (this._visualizationSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.visualizationSettings = this._visualizationSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FlexibleBoardPanelQueryPanel | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._queryAnnotationId = undefined;
      this._queryId = undefined;
      this._queryStyle = undefined;
      this._visualizationSettings.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._queryAnnotationId = value.queryAnnotationId;
      this._queryId = value.queryId;
      this._queryStyle = value.queryStyle;
      this._visualizationSettings.internalValue = value.visualizationSettings;
    }
  }

  // query_annotation_id - computed: false, optional: false, required: true
  private _queryAnnotationId?: string; 
  public get queryAnnotationId() {
    return this.getStringAttribute('query_annotation_id');
  }
  public set queryAnnotationId(value: string) {
    this._queryAnnotationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryAnnotationIdInput() {
    return this._queryAnnotationId;
  }

  // query_id - computed: false, optional: false, required: true
  private _queryId?: string; 
  public get queryId() {
    return this.getStringAttribute('query_id');
  }
  public set queryId(value: string) {
    this._queryId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryIdInput() {
    return this._queryId;
  }

  // query_style - computed: true, optional: true, required: false
  private _queryStyle?: string; 
  public get queryStyle() {
    return this.getStringAttribute('query_style');
  }
  public set queryStyle(value: string) {
    this._queryStyle = value;
  }
  public resetQueryStyle() {
    this._queryStyle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryStyleInput() {
    return this._queryStyle;
  }

  // visualization_settings - computed: false, optional: true, required: false
  private _visualizationSettings = new FlexibleBoardPanelQueryPanelVisualizationSettingsList(this, "visualization_settings", false);
  public get visualizationSettings() {
    return this._visualizationSettings;
  }
  public putVisualizationSettings(value: FlexibleBoardPanelQueryPanelVisualizationSettings[] | cdktf.IResolvable) {
    this._visualizationSettings.internalValue = value;
  }
  public resetVisualizationSettings() {
    this._visualizationSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visualizationSettingsInput() {
    return this._visualizationSettings.internalValue;
  }
}

export class FlexibleBoardPanelQueryPanelList extends cdktf.ComplexList {
  public internalValue? : FlexibleBoardPanelQueryPanel[] | cdktf.IResolvable

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
  public get(index: number): FlexibleBoardPanelQueryPanelOutputReference {
    return new FlexibleBoardPanelQueryPanelOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FlexibleBoardPanelSloPanel {
  /**
  * SLO ID to display in this panel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/resources/flexible_board#slo_id FlexibleBoard#slo_id}
  */
  readonly sloId: string;
}

export function flexibleBoardPanelSloPanelToTerraform(struct?: FlexibleBoardPanelSloPanel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    slo_id: cdktf.stringToTerraform(struct!.sloId),
  }
}


export function flexibleBoardPanelSloPanelToHclTerraform(struct?: FlexibleBoardPanelSloPanel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    slo_id: {
      value: cdktf.stringToHclTerraform(struct!.sloId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FlexibleBoardPanelSloPanelOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FlexibleBoardPanelSloPanel | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sloId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sloId = this._sloId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FlexibleBoardPanelSloPanel | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sloId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sloId = value.sloId;
    }
  }

  // slo_id - computed: false, optional: false, required: true
  private _sloId?: string; 
  public get sloId() {
    return this.getStringAttribute('slo_id');
  }
  public set sloId(value: string) {
    this._sloId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sloIdInput() {
    return this._sloId;
  }
}

export class FlexibleBoardPanelSloPanelList extends cdktf.ComplexList {
  public internalValue? : FlexibleBoardPanelSloPanel[] | cdktf.IResolvable

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
  public get(index: number): FlexibleBoardPanelSloPanelOutputReference {
    return new FlexibleBoardPanelSloPanelOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FlexibleBoardPanelTextPanel {
  /**
  * The content of the text panel. Supports Markdown.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/resources/flexible_board#content FlexibleBoard#content}
  */
  readonly content: string;
}

export function flexibleBoardPanelTextPanelToTerraform(struct?: FlexibleBoardPanelTextPanel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content: cdktf.stringToTerraform(struct!.content),
  }
}


export function flexibleBoardPanelTextPanelToHclTerraform(struct?: FlexibleBoardPanelTextPanel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content: {
      value: cdktf.stringToHclTerraform(struct!.content),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FlexibleBoardPanelTextPanelOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FlexibleBoardPanelTextPanel | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FlexibleBoardPanelTextPanel | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._content = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._content = value.content;
    }
  }

  // content - computed: false, optional: false, required: true
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }
}

export class FlexibleBoardPanelTextPanelList extends cdktf.ComplexList {
  public internalValue? : FlexibleBoardPanelTextPanel[] | cdktf.IResolvable

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
  public get(index: number): FlexibleBoardPanelTextPanelOutputReference {
    return new FlexibleBoardPanelTextPanelOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FlexibleBoardPanel {
  /**
  * The panel type, either "query", "slo", or "text".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/resources/flexible_board#type FlexibleBoard#type}
  */
  readonly type: string;
  /**
  * position block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/resources/flexible_board#position FlexibleBoard#position}
  */
  readonly position?: FlexibleBoardPanelPosition;
  /**
  * query_panel block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/resources/flexible_board#query_panel FlexibleBoard#query_panel}
  */
  readonly queryPanel?: FlexibleBoardPanelQueryPanel[] | cdktf.IResolvable;
  /**
  * slo_panel block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/resources/flexible_board#slo_panel FlexibleBoard#slo_panel}
  */
  readonly sloPanel?: FlexibleBoardPanelSloPanel[] | cdktf.IResolvable;
  /**
  * text_panel block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/resources/flexible_board#text_panel FlexibleBoard#text_panel}
  */
  readonly textPanel?: FlexibleBoardPanelTextPanel[] | cdktf.IResolvable;
}

export function flexibleBoardPanelToTerraform(struct?: FlexibleBoardPanel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    position: flexibleBoardPanelPositionToTerraform(struct!.position),
    query_panel: cdktf.listMapper(flexibleBoardPanelQueryPanelToTerraform, true)(struct!.queryPanel),
    slo_panel: cdktf.listMapper(flexibleBoardPanelSloPanelToTerraform, true)(struct!.sloPanel),
    text_panel: cdktf.listMapper(flexibleBoardPanelTextPanelToTerraform, true)(struct!.textPanel),
  }
}


export function flexibleBoardPanelToHclTerraform(struct?: FlexibleBoardPanel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    position: {
      value: flexibleBoardPanelPositionToHclTerraform(struct!.position),
      isBlock: true,
      type: "struct",
      storageClassType: "FlexibleBoardPanelPosition",
    },
    query_panel: {
      value: cdktf.listMapperHcl(flexibleBoardPanelQueryPanelToHclTerraform, true)(struct!.queryPanel),
      isBlock: true,
      type: "list",
      storageClassType: "FlexibleBoardPanelQueryPanelList",
    },
    slo_panel: {
      value: cdktf.listMapperHcl(flexibleBoardPanelSloPanelToHclTerraform, true)(struct!.sloPanel),
      isBlock: true,
      type: "list",
      storageClassType: "FlexibleBoardPanelSloPanelList",
    },
    text_panel: {
      value: cdktf.listMapperHcl(flexibleBoardPanelTextPanelToHclTerraform, true)(struct!.textPanel),
      isBlock: true,
      type: "list",
      storageClassType: "FlexibleBoardPanelTextPanelList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FlexibleBoardPanelOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FlexibleBoardPanel | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._position?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.position = this._position?.internalValue;
    }
    if (this._queryPanel?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryPanel = this._queryPanel?.internalValue;
    }
    if (this._sloPanel?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sloPanel = this._sloPanel?.internalValue;
    }
    if (this._textPanel?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.textPanel = this._textPanel?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FlexibleBoardPanel | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._position.internalValue = undefined;
      this._queryPanel.internalValue = undefined;
      this._sloPanel.internalValue = undefined;
      this._textPanel.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._position.internalValue = value.position;
      this._queryPanel.internalValue = value.queryPanel;
      this._sloPanel.internalValue = value.sloPanel;
      this._textPanel.internalValue = value.textPanel;
    }
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

  // position - computed: false, optional: true, required: false
  private _position = new FlexibleBoardPanelPositionOutputReference(this, "position");
  public get position() {
    return this._position;
  }
  public putPosition(value: FlexibleBoardPanelPosition) {
    this._position.internalValue = value;
  }
  public resetPosition() {
    this._position.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get positionInput() {
    return this._position.internalValue;
  }

  // query_panel - computed: false, optional: true, required: false
  private _queryPanel = new FlexibleBoardPanelQueryPanelList(this, "query_panel", false);
  public get queryPanel() {
    return this._queryPanel;
  }
  public putQueryPanel(value: FlexibleBoardPanelQueryPanel[] | cdktf.IResolvable) {
    this._queryPanel.internalValue = value;
  }
  public resetQueryPanel() {
    this._queryPanel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryPanelInput() {
    return this._queryPanel.internalValue;
  }

  // slo_panel - computed: false, optional: true, required: false
  private _sloPanel = new FlexibleBoardPanelSloPanelList(this, "slo_panel", false);
  public get sloPanel() {
    return this._sloPanel;
  }
  public putSloPanel(value: FlexibleBoardPanelSloPanel[] | cdktf.IResolvable) {
    this._sloPanel.internalValue = value;
  }
  public resetSloPanel() {
    this._sloPanel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sloPanelInput() {
    return this._sloPanel.internalValue;
  }

  // text_panel - computed: false, optional: true, required: false
  private _textPanel = new FlexibleBoardPanelTextPanelList(this, "text_panel", false);
  public get textPanel() {
    return this._textPanel;
  }
  public putTextPanel(value: FlexibleBoardPanelTextPanel[] | cdktf.IResolvable) {
    this._textPanel.internalValue = value;
  }
  public resetTextPanel() {
    this._textPanel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textPanelInput() {
    return this._textPanel.internalValue;
  }
}

export class FlexibleBoardPanelList extends cdktf.ComplexList {
  public internalValue? : FlexibleBoardPanel[] | cdktf.IResolvable

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
  public get(index: number): FlexibleBoardPanelOutputReference {
    return new FlexibleBoardPanelOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/resources/flexible_board honeycombio_flexible_board}
*/
export class FlexibleBoard extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "honeycombio_flexible_board";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FlexibleBoard resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FlexibleBoard to import
  * @param importFromId The id of the existing FlexibleBoard that should be imported. Refer to the {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/resources/flexible_board#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FlexibleBoard to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "honeycombio_flexible_board", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/resources/flexible_board honeycombio_flexible_board} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FlexibleBoardConfig
  */
  public constructor(scope: Construct, id: string, config: FlexibleBoardConfig) {
    super(scope, id, {
      terraformResourceType: 'honeycombio_flexible_board',
      terraformGeneratorMetadata: {
        providerName: 'honeycombio',
        providerVersion: '0.42.0'
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
    this._name = config.name;
    this._tags = config.tags;
    this._panel.internalValue = config.panel;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // board_url - computed: true, optional: false, required: false
  public get boardUrl() {
    return this.getStringAttribute('board_url');
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

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // panel - computed: false, optional: true, required: false
  private _panel = new FlexibleBoardPanelList(this, "panel", false);
  public get panel() {
    return this._panel;
  }
  public putPanel(value: FlexibleBoardPanel[] | cdktf.IResolvable) {
    this._panel.internalValue = value;
  }
  public resetPanel() {
    this._panel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get panelInput() {
    return this._panel.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      panel: cdktf.listMapper(flexibleBoardPanelToTerraform, true)(this._panel.internalValue),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      panel: {
        value: cdktf.listMapperHcl(flexibleBoardPanelToHclTerraform, true)(this._panel.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FlexibleBoardPanelList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
