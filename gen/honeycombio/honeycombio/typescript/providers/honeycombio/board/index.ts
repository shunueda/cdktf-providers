// https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/resources/board
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BoardConfig extends cdktf.TerraformMetaArguments {
  /**
  * The number of columns to layout on the Board.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/resources/board#column_layout Board#column_layout}
  */
  readonly columnLayout?: string;
  /**
  * The description of the Board. Supports Markdown.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/resources/board#description Board#description}
  */
  readonly description?: string;
  /**
  * The name of the Board.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/resources/board#name Board#name}
  */
  readonly name: string;
  /**
  * How the Board should be displayed in the UI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/resources/board#style Board#style}
  */
  readonly style?: string;
  /**
  * query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/resources/board#query Board#query}
  */
  readonly query?: BoardQuery[] | cdktf.IResolvable;
  /**
  * slo block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/resources/board#slo Board#slo}
  */
  readonly slo?: BoardSlo[] | cdktf.IResolvable;
}
export interface BoardQueryGraphSettings {
  /**
  * Disable the overlay of Markers on the graph.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/resources/board#hide_markers Board#hide_markers}
  */
  readonly hideMarkers?: boolean | cdktf.IResolvable;
  /**
  * Set the graph's Y-axis to a logarithmic scale.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/resources/board#log_scale Board#log_scale}
  */
  readonly logScale?: boolean | cdktf.IResolvable;
  /**
  * Enable interpolatation between datapoints when the intervening time buckets have no matching events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/resources/board#omit_missing_values Board#omit_missing_values}
  */
  readonly omitMissingValues?: boolean | cdktf.IResolvable;
  /**
  * Allow charts to be overlaid when using supported Visualize operators.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/resources/board#overlaid_charts Board#overlaid_charts}
  */
  readonly overlaidCharts?: boolean | cdktf.IResolvable;
  /**
  * Enable the display of groups as stacked colored area under their line graphs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/resources/board#stacked_graphs Board#stacked_graphs}
  */
  readonly stackedGraphs?: boolean | cdktf.IResolvable;
  /**
  * Set the graph's X-axis to UTC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/resources/board#utc_xaxis Board#utc_xaxis}
  */
  readonly utcXaxis?: boolean | cdktf.IResolvable;
}

export function boardQueryGraphSettingsToTerraform(struct?: BoardQueryGraphSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hide_markers: cdktf.booleanToTerraform(struct!.hideMarkers),
    log_scale: cdktf.booleanToTerraform(struct!.logScale),
    omit_missing_values: cdktf.booleanToTerraform(struct!.omitMissingValues),
    overlaid_charts: cdktf.booleanToTerraform(struct!.overlaidCharts),
    stacked_graphs: cdktf.booleanToTerraform(struct!.stackedGraphs),
    utc_xaxis: cdktf.booleanToTerraform(struct!.utcXaxis),
  }
}


export function boardQueryGraphSettingsToHclTerraform(struct?: BoardQueryGraphSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hide_markers: {
      value: cdktf.booleanToHclTerraform(struct!.hideMarkers),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    log_scale: {
      value: cdktf.booleanToHclTerraform(struct!.logScale),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    omit_missing_values: {
      value: cdktf.booleanToHclTerraform(struct!.omitMissingValues),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    overlaid_charts: {
      value: cdktf.booleanToHclTerraform(struct!.overlaidCharts),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    stacked_graphs: {
      value: cdktf.booleanToHclTerraform(struct!.stackedGraphs),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    utc_xaxis: {
      value: cdktf.booleanToHclTerraform(struct!.utcXaxis),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BoardQueryGraphSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BoardQueryGraphSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hideMarkers !== undefined) {
      hasAnyValues = true;
      internalValueResult.hideMarkers = this._hideMarkers;
    }
    if (this._logScale !== undefined) {
      hasAnyValues = true;
      internalValueResult.logScale = this._logScale;
    }
    if (this._omitMissingValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.omitMissingValues = this._omitMissingValues;
    }
    if (this._overlaidCharts !== undefined) {
      hasAnyValues = true;
      internalValueResult.overlaidCharts = this._overlaidCharts;
    }
    if (this._stackedGraphs !== undefined) {
      hasAnyValues = true;
      internalValueResult.stackedGraphs = this._stackedGraphs;
    }
    if (this._utcXaxis !== undefined) {
      hasAnyValues = true;
      internalValueResult.utcXaxis = this._utcXaxis;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BoardQueryGraphSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hideMarkers = undefined;
      this._logScale = undefined;
      this._omitMissingValues = undefined;
      this._overlaidCharts = undefined;
      this._stackedGraphs = undefined;
      this._utcXaxis = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hideMarkers = value.hideMarkers;
      this._logScale = value.logScale;
      this._omitMissingValues = value.omitMissingValues;
      this._overlaidCharts = value.overlaidCharts;
      this._stackedGraphs = value.stackedGraphs;
      this._utcXaxis = value.utcXaxis;
    }
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

  // log_scale - computed: true, optional: true, required: false
  private _logScale?: boolean | cdktf.IResolvable; 
  public get logScale() {
    return this.getBooleanAttribute('log_scale');
  }
  public set logScale(value: boolean | cdktf.IResolvable) {
    this._logScale = value;
  }
  public resetLogScale() {
    this._logScale = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logScaleInput() {
    return this._logScale;
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

  // overlaid_charts - computed: true, optional: true, required: false
  private _overlaidCharts?: boolean | cdktf.IResolvable; 
  public get overlaidCharts() {
    return this.getBooleanAttribute('overlaid_charts');
  }
  public set overlaidCharts(value: boolean | cdktf.IResolvable) {
    this._overlaidCharts = value;
  }
  public resetOverlaidCharts() {
    this._overlaidCharts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overlaidChartsInput() {
    return this._overlaidCharts;
  }

  // stacked_graphs - computed: true, optional: true, required: false
  private _stackedGraphs?: boolean | cdktf.IResolvable; 
  public get stackedGraphs() {
    return this.getBooleanAttribute('stacked_graphs');
  }
  public set stackedGraphs(value: boolean | cdktf.IResolvable) {
    this._stackedGraphs = value;
  }
  public resetStackedGraphs() {
    this._stackedGraphs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stackedGraphsInput() {
    return this._stackedGraphs;
  }

  // utc_xaxis - computed: true, optional: true, required: false
  private _utcXaxis?: boolean | cdktf.IResolvable; 
  public get utcXaxis() {
    return this.getBooleanAttribute('utc_xaxis');
  }
  public set utcXaxis(value: boolean | cdktf.IResolvable) {
    this._utcXaxis = value;
  }
  public resetUtcXaxis() {
    this._utcXaxis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get utcXaxisInput() {
    return this._utcXaxis;
  }
}

export class BoardQueryGraphSettingsList extends cdktf.ComplexList {
  public internalValue? : BoardQueryGraphSettings[] | cdktf.IResolvable

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
  public get(index: number): BoardQueryGraphSettingsOutputReference {
    return new BoardQueryGraphSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BoardQuery {
  /**
  * Descriptive text to contextualize the Query within the Board. Supports Markdown.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/resources/board#caption Board#caption}
  */
  readonly caption?: string;
  /**
  * The Dataset this Query is associated with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/resources/board#dataset Board#dataset}
  */
  readonly dataset?: string;
  /**
  * The ID of the Query Annotation to associate with this Query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/resources/board#query_annotation_id Board#query_annotation_id}
  */
  readonly queryAnnotationId?: string;
  /**
  * The ID of the Query to run.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/resources/board#query_id Board#query_id}
  */
  readonly queryId: string;
  /**
  * How the query should be displayed within the Board.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/resources/board#query_style Board#query_style}
  */
  readonly queryStyle?: string;
  /**
  * graph_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/resources/board#graph_settings Board#graph_settings}
  */
  readonly graphSettings?: BoardQueryGraphSettings[] | cdktf.IResolvable;
}

export function boardQueryToTerraform(struct?: BoardQuery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    caption: cdktf.stringToTerraform(struct!.caption),
    dataset: cdktf.stringToTerraform(struct!.dataset),
    query_annotation_id: cdktf.stringToTerraform(struct!.queryAnnotationId),
    query_id: cdktf.stringToTerraform(struct!.queryId),
    query_style: cdktf.stringToTerraform(struct!.queryStyle),
    graph_settings: cdktf.listMapper(boardQueryGraphSettingsToTerraform, true)(struct!.graphSettings),
  }
}


export function boardQueryToHclTerraform(struct?: BoardQuery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    caption: {
      value: cdktf.stringToHclTerraform(struct!.caption),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dataset: {
      value: cdktf.stringToHclTerraform(struct!.dataset),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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
    graph_settings: {
      value: cdktf.listMapperHcl(boardQueryGraphSettingsToHclTerraform, true)(struct!.graphSettings),
      isBlock: true,
      type: "list",
      storageClassType: "BoardQueryGraphSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BoardQueryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BoardQuery | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caption !== undefined) {
      hasAnyValues = true;
      internalValueResult.caption = this._caption;
    }
    if (this._dataset !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataset = this._dataset;
    }
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
    if (this._graphSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.graphSettings = this._graphSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BoardQuery | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caption = undefined;
      this._dataset = undefined;
      this._queryAnnotationId = undefined;
      this._queryId = undefined;
      this._queryStyle = undefined;
      this._graphSettings.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caption = value.caption;
      this._dataset = value.dataset;
      this._queryAnnotationId = value.queryAnnotationId;
      this._queryId = value.queryId;
      this._queryStyle = value.queryStyle;
      this._graphSettings.internalValue = value.graphSettings;
    }
  }

  // caption - computed: true, optional: true, required: false
  private _caption?: string; 
  public get caption() {
    return this.getStringAttribute('caption');
  }
  public set caption(value: string) {
    this._caption = value;
  }
  public resetCaption() {
    this._caption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captionInput() {
    return this._caption;
  }

  // dataset - computed: true, optional: true, required: false
  private _dataset?: string; 
  public get dataset() {
    return this.getStringAttribute('dataset');
  }
  public set dataset(value: string) {
    this._dataset = value;
  }
  public resetDataset() {
    this._dataset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetInput() {
    return this._dataset;
  }

  // query_annotation_id - computed: false, optional: true, required: false
  private _queryAnnotationId?: string; 
  public get queryAnnotationId() {
    return this.getStringAttribute('query_annotation_id');
  }
  public set queryAnnotationId(value: string) {
    this._queryAnnotationId = value;
  }
  public resetQueryAnnotationId() {
    this._queryAnnotationId = undefined;
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

  // graph_settings - computed: false, optional: true, required: false
  private _graphSettings = new BoardQueryGraphSettingsList(this, "graph_settings", false);
  public get graphSettings() {
    return this._graphSettings;
  }
  public putGraphSettings(value: BoardQueryGraphSettings[] | cdktf.IResolvable) {
    this._graphSettings.internalValue = value;
  }
  public resetGraphSettings() {
    this._graphSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get graphSettingsInput() {
    return this._graphSettings.internalValue;
  }
}

export class BoardQueryList extends cdktf.ComplexList {
  public internalValue? : BoardQuery[] | cdktf.IResolvable

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
  public get(index: number): BoardQueryOutputReference {
    return new BoardQueryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BoardSlo {
  /**
  * The ID of the SLO.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/resources/board#id Board#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function boardSloToTerraform(struct?: BoardSlo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function boardSloToHclTerraform(struct?: BoardSlo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BoardSloOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BoardSlo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BoardSlo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

export class BoardSloList extends cdktf.ComplexList {
  public internalValue? : BoardSlo[] | cdktf.IResolvable

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
  public get(index: number): BoardSloOutputReference {
    return new BoardSloOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/resources/board honeycombio_board}
*/
export class Board extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "honeycombio_board";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Board resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Board to import
  * @param importFromId The id of the existing Board that should be imported. Refer to the {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/resources/board#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Board to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "honeycombio_board", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/resources/board honeycombio_board} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BoardConfig
  */
  public constructor(scope: Construct, id: string, config: BoardConfig) {
    super(scope, id, {
      terraformResourceType: 'honeycombio_board',
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
    this._columnLayout = config.columnLayout;
    this._description = config.description;
    this._name = config.name;
    this._style = config.style;
    this._query.internalValue = config.query;
    this._slo.internalValue = config.slo;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // board_url - computed: true, optional: false, required: false
  public get boardUrl() {
    return this.getStringAttribute('board_url');
  }

  // column_layout - computed: true, optional: true, required: false
  private _columnLayout?: string; 
  public get columnLayout() {
    return this.getStringAttribute('column_layout');
  }
  public set columnLayout(value: string) {
    this._columnLayout = value;
  }
  public resetColumnLayout() {
    this._columnLayout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnLayoutInput() {
    return this._columnLayout;
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

  // style - computed: true, optional: true, required: false
  private _style?: string; 
  public get style() {
    return this.getStringAttribute('style');
  }
  public set style(value: string) {
    this._style = value;
  }
  public resetStyle() {
    this._style = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get styleInput() {
    return this._style;
  }

  // query - computed: false, optional: true, required: false
  private _query = new BoardQueryList(this, "query", false);
  public get query() {
    return this._query;
  }
  public putQuery(value: BoardQuery[] | cdktf.IResolvable) {
    this._query.internalValue = value;
  }
  public resetQuery() {
    this._query.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query.internalValue;
  }

  // slo - computed: false, optional: true, required: false
  private _slo = new BoardSloList(this, "slo", true);
  public get slo() {
    return this._slo;
  }
  public putSlo(value: BoardSlo[] | cdktf.IResolvable) {
    this._slo.internalValue = value;
  }
  public resetSlo() {
    this._slo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sloInput() {
    return this._slo.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      column_layout: cdktf.stringToTerraform(this._columnLayout),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      style: cdktf.stringToTerraform(this._style),
      query: cdktf.listMapper(boardQueryToTerraform, true)(this._query.internalValue),
      slo: cdktf.listMapper(boardSloToTerraform, true)(this._slo.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      column_layout: {
        value: cdktf.stringToHclTerraform(this._columnLayout),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      style: {
        value: cdktf.stringToHclTerraform(this._style),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      query: {
        value: cdktf.listMapperHcl(boardQueryToHclTerraform, true)(this._query.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BoardQueryList",
      },
      slo: {
        value: cdktf.listMapperHcl(boardSloToHclTerraform, true)(this._slo.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "BoardSloList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
