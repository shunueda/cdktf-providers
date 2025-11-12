// https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSchemasPanelDebugConfig extends cdktf.TerraformMetaArguments {
  /**
  * The datasource used in all targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug#datasource DataSchemasPanelDebug#datasource}
  */
  readonly datasource?: DataSchemasPanelDebugDatasource;
  /**
  * Panel description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug#description DataSchemasPanelDebug#description}
  */
  readonly description?: string;
  /**
  * Field options allow you to change how the data is displayed in your visualizations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug#field_config DataSchemasPanelDebug#field_config}
  */
  readonly fieldConfig?: DataSchemasPanelDebugFieldConfig;
  /**
  * Grid position.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug#grid_pos DataSchemasPanelDebug#grid_pos}
  */
  readonly gridPos?: DataSchemasPanelDebugGridPos;
  /**
  * The min time interval setting defines a lower limit for the $__interval and $__interval_ms variables.
  * This value must be formatted as a number followed by a valid time
  * identifier like: "40s", "3d", etc.
  * See: https://grafana.com/docs/grafana/latest/panels-visualizations/query-transform-data/#query-options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug#interval DataSchemasPanelDebug#interval}
  */
  readonly interval?: string;
  /**
  * Dynamically load the panel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug#library_panel DataSchemasPanelDebug#library_panel}
  */
  readonly libraryPanel?: DataSchemasPanelDebugLibraryPanel;
  /**
  * Panel links.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug#links DataSchemasPanelDebug#links}
  */
  readonly links?: DataSchemasPanelDebugLinks[] | cdktf.IResolvable;
  /**
  * The maximum number of data points that the panel queries are retrieving.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug#max_data_points DataSchemasPanelDebug#max_data_points}
  */
  readonly maxDataPoints?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug#options DataSchemasPanelDebug#options}
  */
  readonly options?: DataSchemasPanelDebugOptions;
  /**
  * The version of the plugin that is used for this panel. This is used to find the plugin to display the panel and to migrate old panel configs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug#plugin_version DataSchemasPanelDebug#plugin_version}
  */
  readonly pluginVersion?: string;
  /**
  * Name of template variable to repeat for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug#repeat DataSchemasPanelDebug#repeat}
  */
  readonly repeat?: string;
  /**
  * Direction to repeat in if 'repeat' is set.
  * h for horizontal, v for vertical. Defaults to "h".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug#repeat_direction DataSchemasPanelDebug#repeat_direction}
  */
  readonly repeatDirection?: string;
  /**
  * Id of the repeating panel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug#repeat_panel_id DataSchemasPanelDebug#repeat_panel_id}
  */
  readonly repeatPanelId?: number;
  /**
  * Tags for the panel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug#tags DataSchemasPanelDebug#tags}
  */
  readonly tags?: string[];
  /**
  * Depends on the panel plugin. See the plugin documentation for details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug#targets DataSchemasPanelDebug#targets}
  */
  readonly targets?: string[];
  /**
  * Overrides the relative time range for individual panels,
  * which causes them to be different than what is selected in
  * the dashboard time picker in the top-right corner of the dashboard. You can use this to show metrics from different
  * time periods or days on the same dashboard.
  * The value is formatted as time operation like: now-5m (Last 5 minutes), now/d (the day so far),
  * now-5d/d(Last 5 days), now/w (This week so far), now-2y/y (Last 2 years).
  * Note: Panel time overrides have no effect when the dashboard’s time range is absolute.
  * See: https://grafana.com/docs/grafana/latest/panels-visualizations/query-transform-data/#query-options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug#time_from DataSchemasPanelDebug#time_from}
  */
  readonly timeFrom?: string;
  /**
  * Overrides the time range for individual panels by shifting its start and end relative to the time picker.
  * For example, you can shift the time range for the panel to be two hours earlier than the dashboard time picker setting 2h.
  * Note: Panel time overrides have no effect when the dashboard’s time range is absolute.
  * See: https://grafana.com/docs/grafana/latest/panels-visualizations/query-transform-data/#query-options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug#time_shift DataSchemasPanelDebug#time_shift}
  */
  readonly timeShift?: string;
  /**
  * Panel title.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug#title DataSchemasPanelDebug#title}
  */
  readonly title?: string;
  /**
  * List of transformations that are applied to the panel data before rendering.
  * When there are multiple transformations, Grafana applies them in the order they are listed.
  * Each transformation creates a result set that then passes on to the next transformation in the processing pipeline.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug#transformations DataSchemasPanelDebug#transformations}
  */
  readonly transformations?: DataSchemasPanelDebugTransformations[] | cdktf.IResolvable;
  /**
  * Whether to display the panel without a background. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug#transparent DataSchemasPanelDebug#transparent}
  */
  readonly transparent?: boolean | cdktf.IResolvable;
  /**
  * The panel plugin type id. This is used to find the plugin to display the panel. Defaults to "debug".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug#type DataSchemasPanelDebug#type}
  */
  readonly type?: string;
}
export interface DataSchemasPanelDebugDatasource {
  /**
  * The plugin type-id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug#type DataSchemasPanelDebug#type}
  */
  readonly type?: string;
  /**
  * Specific datasource instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug#uid DataSchemasPanelDebug#uid}
  */
  readonly uid?: string;
}

export function dataSchemasPanelDebugDatasourceToTerraform(struct?: DataSchemasPanelDebugDatasource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    uid: cdktf.stringToTerraform(struct!.uid),
  }
}


export function dataSchemasPanelDebugDatasourceToHclTerraform(struct?: DataSchemasPanelDebugDatasource | cdktf.IResolvable): any {
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
    uid: {
      value: cdktf.stringToHclTerraform(struct!.uid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSchemasPanelDebugDatasourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasPanelDebugDatasource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._uid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uid = this._uid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSchemasPanelDebugDatasource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._uid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._uid = value.uid;
    }
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // uid - computed: true, optional: true, required: false
  private _uid?: string; 
  public get uid() {
    return this.getStringAttribute('uid');
  }
  public set uid(value: string) {
    this._uid = value;
  }
  public resetUid() {
    this._uid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uidInput() {
    return this._uid;
  }
}
export interface DataSchemasPanelDebugFieldConfigDefaultsColor {
  /**
  * The fixed color value for fixed or shades color modes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug#fixed_color DataSchemasPanelDebug#fixed_color}
  */
  readonly fixedColor?: string;
  /**
  * The main color scheme mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug#mode DataSchemasPanelDebug#mode}
  */
  readonly mode: string;
  /**
  * Some visualizations need to know how to assign a series color from by value color schemes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug#series_by DataSchemasPanelDebug#series_by}
  */
  readonly seriesBy?: string;
}

export function dataSchemasPanelDebugFieldConfigDefaultsColorToTerraform(struct?: DataSchemasPanelDebugFieldConfigDefaultsColor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fixed_color: cdktf.stringToTerraform(struct!.fixedColor),
    mode: cdktf.stringToTerraform(struct!.mode),
    series_by: cdktf.stringToTerraform(struct!.seriesBy),
  }
}


export function dataSchemasPanelDebugFieldConfigDefaultsColorToHclTerraform(struct?: DataSchemasPanelDebugFieldConfigDefaultsColor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fixed_color: {
      value: cdktf.stringToHclTerraform(struct!.fixedColor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    series_by: {
      value: cdktf.stringToHclTerraform(struct!.seriesBy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSchemasPanelDebugFieldConfigDefaultsColorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasPanelDebugFieldConfigDefaultsColor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fixedColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixedColor = this._fixedColor;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._seriesBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.seriesBy = this._seriesBy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSchemasPanelDebugFieldConfigDefaultsColor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fixedColor = undefined;
      this._mode = undefined;
      this._seriesBy = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fixedColor = value.fixedColor;
      this._mode = value.mode;
      this._seriesBy = value.seriesBy;
    }
  }

  // fixed_color - computed: true, optional: true, required: false
  private _fixedColor?: string; 
  public get fixedColor() {
    return this.getStringAttribute('fixed_color');
  }
  public set fixedColor(value: string) {
    this._fixedColor = value;
  }
  public resetFixedColor() {
    this._fixedColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedColorInput() {
    return this._fixedColor;
  }

  // mode - computed: true, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // series_by - computed: true, optional: true, required: false
  private _seriesBy?: string; 
  public get seriesBy() {
    return this.getStringAttribute('series_by');
  }
  public set seriesBy(value: string) {
    this._seriesBy = value;
  }
  public resetSeriesBy() {
    this._seriesBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seriesByInput() {
    return this._seriesBy;
  }
}
export interface DataSchemasPanelDebugFieldConfigDefaultsCustomHideFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug#legend DataSchemasPanelDebug#legend}
  */
  readonly legend: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug#tooltip DataSchemasPanelDebug#tooltip}
  */
  readonly tooltip: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug#viz DataSchemasPanelDebug#viz}
  */
  readonly viz: boolean | cdktf.IResolvable;
}

export function dataSchemasPanelDebugFieldConfigDefaultsCustomHideFromToTerraform(struct?: DataSchemasPanelDebugFieldConfigDefaultsCustomHideFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    legend: cdktf.booleanToTerraform(struct!.legend),
    tooltip: cdktf.booleanToTerraform(struct!.tooltip),
    viz: cdktf.booleanToTerraform(struct!.viz),
  }
}


export function dataSchemasPanelDebugFieldConfigDefaultsCustomHideFromToHclTerraform(struct?: DataSchemasPanelDebugFieldConfigDefaultsCustomHideFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    legend: {
      value: cdktf.booleanToHclTerraform(struct!.legend),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tooltip: {
      value: cdktf.booleanToHclTerraform(struct!.tooltip),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    viz: {
      value: cdktf.booleanToHclTerraform(struct!.viz),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSchemasPanelDebugFieldConfigDefaultsCustomHideFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasPanelDebugFieldConfigDefaultsCustomHideFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._legend !== undefined) {
      hasAnyValues = true;
      internalValueResult.legend = this._legend;
    }
    if (this._tooltip !== undefined) {
      hasAnyValues = true;
      internalValueResult.tooltip = this._tooltip;
    }
    if (this._viz !== undefined) {
      hasAnyValues = true;
      internalValueResult.viz = this._viz;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSchemasPanelDebugFieldConfigDefaultsCustomHideFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._legend = undefined;
      this._tooltip = undefined;
      this._viz = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._legend = value.legend;
      this._tooltip = value.tooltip;
      this._viz = value.viz;
    }
  }

  // legend - computed: true, optional: false, required: true
  private _legend?: boolean | cdktf.IResolvable; 
  public get legend() {
    return this.getBooleanAttribute('legend');
  }
  public set legend(value: boolean | cdktf.IResolvable) {
    this._legend = value;
  }
  // Temporarily expose input value. Use with caution.
  public get legendInput() {
    return this._legend;
  }

  // tooltip - computed: true, optional: false, required: true
  private _tooltip?: boolean | cdktf.IResolvable; 
  public get tooltip() {
    return this.getBooleanAttribute('tooltip');
  }
  public set tooltip(value: boolean | cdktf.IResolvable) {
    this._tooltip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tooltipInput() {
    return this._tooltip;
  }

  // viz - computed: true, optional: false, required: true
  private _viz?: boolean | cdktf.IResolvable; 
  public get viz() {
    return this.getBooleanAttribute('viz');
  }
  public set viz(value: boolean | cdktf.IResolvable) {
    this._viz = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vizInput() {
    return this._viz;
  }
}
export interface DataSchemasPanelDebugFieldConfigDefaultsCustomLineStyle {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug#dash DataSchemasPanelDebug#dash}
  */
  readonly dash?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug#fill DataSchemasPanelDebug#fill}
  */
  readonly fill?: string;
}

export function dataSchemasPanelDebugFieldConfigDefaultsCustomLineStyleToTerraform(struct?: DataSchemasPanelDebugFieldConfigDefaultsCustomLineStyle | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dash: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.dash),
    fill: cdktf.stringToTerraform(struct!.fill),
  }
}


export function dataSchemasPanelDebugFieldConfigDefaultsCustomLineStyleToHclTerraform(struct?: DataSchemasPanelDebugFieldConfigDefaultsCustomLineStyle | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dash: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.dash),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    fill: {
      value: cdktf.stringToHclTerraform(struct!.fill),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSchemasPanelDebugFieldConfigDefaultsCustomLineStyleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasPanelDebugFieldConfigDefaultsCustomLineStyle | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dash !== undefined) {
      hasAnyValues = true;
      internalValueResult.dash = this._dash;
    }
    if (this._fill !== undefined) {
      hasAnyValues = true;
      internalValueResult.fill = this._fill;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSchemasPanelDebugFieldConfigDefaultsCustomLineStyle | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dash = undefined;
      this._fill = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dash = value.dash;
      this._fill = value.fill;
    }
  }

  // dash - computed: true, optional: true, required: false
  private _dash?: number[]; 
  public get dash() {
    return this.getNumberListAttribute('dash');
  }
  public set dash(value: number[]) {
    this._dash = value;
  }
  public resetDash() {
    this._dash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dashInput() {
    return this._dash;
  }

  // fill - computed: true, optional: true, required: false
  private _fill?: string; 
  public get fill() {
    return this.getStringAttribute('fill');
  }
  public set fill(value: string) {
    this._fill = value;
  }
  public resetFill() {
    this._fill = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fillInput() {
    return this._fill;
  }
}
export interface DataSchemasPanelDebugFieldConfigDefaultsCustomScaleDistribution {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug#linear_threshold DataSchemasPanelDebug#linear_threshold}
  */
  readonly linearThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug#log DataSchemasPanelDebug#log}
  */
  readonly log?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug#type DataSchemasPanelDebug#type}
  */
  readonly type: string;
}

export function dataSchemasPanelDebugFieldConfigDefaultsCustomScaleDistributionToTerraform(struct?: DataSchemasPanelDebugFieldConfigDefaultsCustomScaleDistribution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    linear_threshold: cdktf.numberToTerraform(struct!.linearThreshold),
    log: cdktf.numberToTerraform(struct!.log),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataSchemasPanelDebugFieldConfigDefaultsCustomScaleDistributionToHclTerraform(struct?: DataSchemasPanelDebugFieldConfigDefaultsCustomScaleDistribution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    linear_threshold: {
      value: cdktf.numberToHclTerraform(struct!.linearThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log: {
      value: cdktf.numberToHclTerraform(struct!.log),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSchemasPanelDebugFieldConfigDefaultsCustomScaleDistributionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasPanelDebugFieldConfigDefaultsCustomScaleDistribution | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._linearThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.linearThreshold = this._linearThreshold;
    }
    if (this._log !== undefined) {
      hasAnyValues = true;
      internalValueResult.log = this._log;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSchemasPanelDebugFieldConfigDefaultsCustomScaleDistribution | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._linearThreshold = undefined;
      this._log = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._linearThreshold = value.linearThreshold;
      this._log = value.log;
      this._type = value.type;
    }
  }

  // linear_threshold - computed: true, optional: true, required: false
  private _linearThreshold?: number; 
  public get linearThreshold() {
    return this.getNumberAttribute('linear_threshold');
  }
  public set linearThreshold(value: number) {
    this._linearThreshold = value;
  }
  public resetLinearThreshold() {
    this._linearThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linearThresholdInput() {
    return this._linearThreshold;
  }

  // log - computed: true, optional: true, required: false
  private _log?: number; 
  public get log() {
    return this.getNumberAttribute('log');
  }
  public set log(value: number) {
    this._log = value;
  }
  public resetLog() {
    this._log = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logInput() {
    return this._log;
  }

  // type - computed: true, optional: false, required: true
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
}
export interface DataSchemasPanelDebugFieldConfigDefaultsCustomStacking {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug#group DataSchemasPanelDebug#group}
  */
  readonly group?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug#mode DataSchemasPanelDebug#mode}
  */
  readonly mode?: string;
}

export function dataSchemasPanelDebugFieldConfigDefaultsCustomStackingToTerraform(struct?: DataSchemasPanelDebugFieldConfigDefaultsCustomStacking | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group: cdktf.stringToTerraform(struct!.group),
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}


export function dataSchemasPanelDebugFieldConfigDefaultsCustomStackingToHclTerraform(struct?: DataSchemasPanelDebugFieldConfigDefaultsCustomStacking | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group: {
      value: cdktf.stringToHclTerraform(struct!.group),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSchemasPanelDebugFieldConfigDefaultsCustomStackingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasPanelDebugFieldConfigDefaultsCustomStacking | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSchemasPanelDebugFieldConfigDefaultsCustomStacking | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._group = undefined;
      this._mode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._group = value.group;
      this._mode = value.mode;
    }
  }

  // group - computed: true, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }
}
export interface DataSchemasPanelDebugFieldConfigDefaultsCustomThresholdsStyle {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug#mode DataSchemasPanelDebug#mode}
  */
  readonly mode: string;
}

export function dataSchemasPanelDebugFieldConfigDefaultsCustomThresholdsStyleToTerraform(struct?: DataSchemasPanelDebugFieldConfigDefaultsCustomThresholdsStyle | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}


export function dataSchemasPanelDebugFieldConfigDefaultsCustomThresholdsStyleToHclTerraform(struct?: DataSchemasPanelDebugFieldConfigDefaultsCustomThresholdsStyle | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSchemasPanelDebugFieldConfigDefaultsCustomThresholdsStyleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasPanelDebugFieldConfigDefaultsCustomThresholdsStyle | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSchemasPanelDebugFieldConfigDefaultsCustomThresholdsStyle | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mode = value.mode;
    }
  }

  // mode - computed: true, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }
}
export interface DataSchemasPanelDebugFieldConfigDefaultsCustom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug#axis_centered_zero DataSchemasPanelDebug#axis_centered_zero}
  */
  readonly axisCenteredZero?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug#axis_color_mode DataSchemasPanelDebug#axis_color_mode}
  */
  readonly axisColorMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug#axis_grid_show DataSchemasPanelDebug#axis_grid_show}
  */
  readonly axisGridShow?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug#axis_label DataSchemasPanelDebug#axis_label}
  */
  readonly axisLabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug#axis_placement DataSchemasPanelDebug#axis_placement}
  */
  readonly axisPlacement?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug#axis_soft_max DataSchemasPanelDebug#axis_soft_max}
  */
  readonly axisSoftMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug#axis_soft_min DataSchemasPanelDebug#axis_soft_min}
  */
  readonly axisSoftMin?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug#axis_width DataSchemasPanelDebug#axis_width}
  */
  readonly axisWidth?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug#bar_alignment DataSchemasPanelDebug#bar_alignment}
  */
  readonly barAlignment?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug#bar_max_width DataSchemasPanelDebug#bar_max_width}
  */
  readonly barMaxWidth?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug#bar_width_factor DataSchemasPanelDebug#bar_width_factor}
  */
  readonly barWidthFactor?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug#draw_style DataSchemasPanelDebug#draw_style}
  */
  readonly drawStyle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug#fill_below_to DataSchemasPanelDebug#fill_below_to}
  */
  readonly fillBelowTo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug#fill_color DataSchemasPanelDebug#fill_color}
  */
  readonly fillColor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug#fill_opacity DataSchemasPanelDebug#fill_opacity}
  */
  readonly fillOpacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug#gradient_mode DataSchemasPanelDebug#gradient_mode}
  */
  readonly gradientMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug#hide_from DataSchemasPanelDebug#hide_from}
  */
  readonly hideFrom?: DataSchemasPanelDebugFieldConfigDefaultsCustomHideFrom;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug#line_color DataSchemasPanelDebug#line_color}
  */
  readonly lineColor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug#line_interpolation DataSchemasPanelDebug#line_interpolation}
  */
  readonly lineInterpolation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug#line_style DataSchemasPanelDebug#line_style}
  */
  readonly lineStyle?: DataSchemasPanelDebugFieldConfigDefaultsCustomLineStyle;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug#line_width DataSchemasPanelDebug#line_width}
  */
  readonly lineWidth?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug#point_color DataSchemasPanelDebug#point_color}
  */
  readonly pointColor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug#point_size DataSchemasPanelDebug#point_size}
  */
  readonly pointSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug#point_symbol DataSchemasPanelDebug#point_symbol}
  */
  readonly pointSymbol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug#scale_distribution DataSchemasPanelDebug#scale_distribution}
  */
  readonly scaleDistribution?: DataSchemasPanelDebugFieldConfigDefaultsCustomScaleDistribution;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug#show_points DataSchemasPanelDebug#show_points}
  */
  readonly showPoints?: string;
  /**
  * Indicate if null values should be treated as gaps or connected.
  * When the value is a number, it represents the maximum delta in the
  * X axis that should be considered connected.  For timeseries, this is milliseconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug#span_nulls DataSchemasPanelDebug#span_nulls}
  */
  readonly spanNulls?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug#stacking DataSchemasPanelDebug#stacking}
  */
  readonly stacking?: DataSchemasPanelDebugFieldConfigDefaultsCustomStacking;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug#thresholds_style DataSchemasPanelDebug#thresholds_style}
  */
  readonly thresholdsStyle?: DataSchemasPanelDebugFieldConfigDefaultsCustomThresholdsStyle;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug#transform DataSchemasPanelDebug#transform}
  */
  readonly transform?: string;
}

export function dataSchemasPanelDebugFieldConfigDefaultsCustomToTerraform(struct?: DataSchemasPanelDebugFieldConfigDefaultsCustom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    axis_centered_zero: cdktf.booleanToTerraform(struct!.axisCenteredZero),
    axis_color_mode: cdktf.stringToTerraform(struct!.axisColorMode),
    axis_grid_show: cdktf.booleanToTerraform(struct!.axisGridShow),
    axis_label: cdktf.stringToTerraform(struct!.axisLabel),
    axis_placement: cdktf.stringToTerraform(struct!.axisPlacement),
    axis_soft_max: cdktf.numberToTerraform(struct!.axisSoftMax),
    axis_soft_min: cdktf.numberToTerraform(struct!.axisSoftMin),
    axis_width: cdktf.numberToTerraform(struct!.axisWidth),
    bar_alignment: cdktf.numberToTerraform(struct!.barAlignment),
    bar_max_width: cdktf.numberToTerraform(struct!.barMaxWidth),
    bar_width_factor: cdktf.numberToTerraform(struct!.barWidthFactor),
    draw_style: cdktf.stringToTerraform(struct!.drawStyle),
    fill_below_to: cdktf.stringToTerraform(struct!.fillBelowTo),
    fill_color: cdktf.stringToTerraform(struct!.fillColor),
    fill_opacity: cdktf.numberToTerraform(struct!.fillOpacity),
    gradient_mode: cdktf.stringToTerraform(struct!.gradientMode),
    hide_from: dataSchemasPanelDebugFieldConfigDefaultsCustomHideFromToTerraform(struct!.hideFrom),
    line_color: cdktf.stringToTerraform(struct!.lineColor),
    line_interpolation: cdktf.stringToTerraform(struct!.lineInterpolation),
    line_style: dataSchemasPanelDebugFieldConfigDefaultsCustomLineStyleToTerraform(struct!.lineStyle),
    line_width: cdktf.numberToTerraform(struct!.lineWidth),
    point_color: cdktf.stringToTerraform(struct!.pointColor),
    point_size: cdktf.numberToTerraform(struct!.pointSize),
    point_symbol: cdktf.stringToTerraform(struct!.pointSymbol),
    scale_distribution: dataSchemasPanelDebugFieldConfigDefaultsCustomScaleDistributionToTerraform(struct!.scaleDistribution),
    show_points: cdktf.stringToTerraform(struct!.showPoints),
    span_nulls: cdktf.stringToTerraform(struct!.spanNulls),
    stacking: dataSchemasPanelDebugFieldConfigDefaultsCustomStackingToTerraform(struct!.stacking),
    thresholds_style: dataSchemasPanelDebugFieldConfigDefaultsCustomThresholdsStyleToTerraform(struct!.thresholdsStyle),
    transform: cdktf.stringToTerraform(struct!.transform),
  }
}


export function dataSchemasPanelDebugFieldConfigDefaultsCustomToHclTerraform(struct?: DataSchemasPanelDebugFieldConfigDefaultsCustom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    axis_centered_zero: {
      value: cdktf.booleanToHclTerraform(struct!.axisCenteredZero),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    axis_color_mode: {
      value: cdktf.stringToHclTerraform(struct!.axisColorMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    axis_grid_show: {
      value: cdktf.booleanToHclTerraform(struct!.axisGridShow),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    axis_label: {
      value: cdktf.stringToHclTerraform(struct!.axisLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    axis_placement: {
      value: cdktf.stringToHclTerraform(struct!.axisPlacement),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    axis_soft_max: {
      value: cdktf.numberToHclTerraform(struct!.axisSoftMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    axis_soft_min: {
      value: cdktf.numberToHclTerraform(struct!.axisSoftMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    axis_width: {
      value: cdktf.numberToHclTerraform(struct!.axisWidth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bar_alignment: {
      value: cdktf.numberToHclTerraform(struct!.barAlignment),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bar_max_width: {
      value: cdktf.numberToHclTerraform(struct!.barMaxWidth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bar_width_factor: {
      value: cdktf.numberToHclTerraform(struct!.barWidthFactor),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    draw_style: {
      value: cdktf.stringToHclTerraform(struct!.drawStyle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fill_below_to: {
      value: cdktf.stringToHclTerraform(struct!.fillBelowTo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fill_color: {
      value: cdktf.stringToHclTerraform(struct!.fillColor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fill_opacity: {
      value: cdktf.numberToHclTerraform(struct!.fillOpacity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gradient_mode: {
      value: cdktf.stringToHclTerraform(struct!.gradientMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hide_from: {
      value: dataSchemasPanelDebugFieldConfigDefaultsCustomHideFromToHclTerraform(struct!.hideFrom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasPanelDebugFieldConfigDefaultsCustomHideFrom",
    },
    line_color: {
      value: cdktf.stringToHclTerraform(struct!.lineColor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    line_interpolation: {
      value: cdktf.stringToHclTerraform(struct!.lineInterpolation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    line_style: {
      value: dataSchemasPanelDebugFieldConfigDefaultsCustomLineStyleToHclTerraform(struct!.lineStyle),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasPanelDebugFieldConfigDefaultsCustomLineStyle",
    },
    line_width: {
      value: cdktf.numberToHclTerraform(struct!.lineWidth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    point_color: {
      value: cdktf.stringToHclTerraform(struct!.pointColor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    point_size: {
      value: cdktf.numberToHclTerraform(struct!.pointSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    point_symbol: {
      value: cdktf.stringToHclTerraform(struct!.pointSymbol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scale_distribution: {
      value: dataSchemasPanelDebugFieldConfigDefaultsCustomScaleDistributionToHclTerraform(struct!.scaleDistribution),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasPanelDebugFieldConfigDefaultsCustomScaleDistribution",
    },
    show_points: {
      value: cdktf.stringToHclTerraform(struct!.showPoints),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    span_nulls: {
      value: cdktf.stringToHclTerraform(struct!.spanNulls),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stacking: {
      value: dataSchemasPanelDebugFieldConfigDefaultsCustomStackingToHclTerraform(struct!.stacking),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasPanelDebugFieldConfigDefaultsCustomStacking",
    },
    thresholds_style: {
      value: dataSchemasPanelDebugFieldConfigDefaultsCustomThresholdsStyleToHclTerraform(struct!.thresholdsStyle),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasPanelDebugFieldConfigDefaultsCustomThresholdsStyle",
    },
    transform: {
      value: cdktf.stringToHclTerraform(struct!.transform),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSchemasPanelDebugFieldConfigDefaultsCustomOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasPanelDebugFieldConfigDefaultsCustom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._axisCenteredZero !== undefined) {
      hasAnyValues = true;
      internalValueResult.axisCenteredZero = this._axisCenteredZero;
    }
    if (this._axisColorMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.axisColorMode = this._axisColorMode;
    }
    if (this._axisGridShow !== undefined) {
      hasAnyValues = true;
      internalValueResult.axisGridShow = this._axisGridShow;
    }
    if (this._axisLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.axisLabel = this._axisLabel;
    }
    if (this._axisPlacement !== undefined) {
      hasAnyValues = true;
      internalValueResult.axisPlacement = this._axisPlacement;
    }
    if (this._axisSoftMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.axisSoftMax = this._axisSoftMax;
    }
    if (this._axisSoftMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.axisSoftMin = this._axisSoftMin;
    }
    if (this._axisWidth !== undefined) {
      hasAnyValues = true;
      internalValueResult.axisWidth = this._axisWidth;
    }
    if (this._barAlignment !== undefined) {
      hasAnyValues = true;
      internalValueResult.barAlignment = this._barAlignment;
    }
    if (this._barMaxWidth !== undefined) {
      hasAnyValues = true;
      internalValueResult.barMaxWidth = this._barMaxWidth;
    }
    if (this._barWidthFactor !== undefined) {
      hasAnyValues = true;
      internalValueResult.barWidthFactor = this._barWidthFactor;
    }
    if (this._drawStyle !== undefined) {
      hasAnyValues = true;
      internalValueResult.drawStyle = this._drawStyle;
    }
    if (this._fillBelowTo !== undefined) {
      hasAnyValues = true;
      internalValueResult.fillBelowTo = this._fillBelowTo;
    }
    if (this._fillColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.fillColor = this._fillColor;
    }
    if (this._fillOpacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.fillOpacity = this._fillOpacity;
    }
    if (this._gradientMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.gradientMode = this._gradientMode;
    }
    if (this._hideFrom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hideFrom = this._hideFrom?.internalValue;
    }
    if (this._lineColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.lineColor = this._lineColor;
    }
    if (this._lineInterpolation !== undefined) {
      hasAnyValues = true;
      internalValueResult.lineInterpolation = this._lineInterpolation;
    }
    if (this._lineStyle?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lineStyle = this._lineStyle?.internalValue;
    }
    if (this._lineWidth !== undefined) {
      hasAnyValues = true;
      internalValueResult.lineWidth = this._lineWidth;
    }
    if (this._pointColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.pointColor = this._pointColor;
    }
    if (this._pointSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.pointSize = this._pointSize;
    }
    if (this._pointSymbol !== undefined) {
      hasAnyValues = true;
      internalValueResult.pointSymbol = this._pointSymbol;
    }
    if (this._scaleDistribution?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleDistribution = this._scaleDistribution?.internalValue;
    }
    if (this._showPoints !== undefined) {
      hasAnyValues = true;
      internalValueResult.showPoints = this._showPoints;
    }
    if (this._spanNulls !== undefined) {
      hasAnyValues = true;
      internalValueResult.spanNulls = this._spanNulls;
    }
    if (this._stacking?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stacking = this._stacking?.internalValue;
    }
    if (this._thresholdsStyle?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdsStyle = this._thresholdsStyle?.internalValue;
    }
    if (this._transform !== undefined) {
      hasAnyValues = true;
      internalValueResult.transform = this._transform;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSchemasPanelDebugFieldConfigDefaultsCustom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._axisCenteredZero = undefined;
      this._axisColorMode = undefined;
      this._axisGridShow = undefined;
      this._axisLabel = undefined;
      this._axisPlacement = undefined;
      this._axisSoftMax = undefined;
      this._axisSoftMin = undefined;
      this._axisWidth = undefined;
      this._barAlignment = undefined;
      this._barMaxWidth = undefined;
      this._barWidthFactor = undefined;
      this._drawStyle = undefined;
      this._fillBelowTo = undefined;
      this._fillColor = undefined;
      this._fillOpacity = undefined;
      this._gradientMode = undefined;
      this._hideFrom.internalValue = undefined;
      this._lineColor = undefined;
      this._lineInterpolation = undefined;
      this._lineStyle.internalValue = undefined;
      this._lineWidth = undefined;
      this._pointColor = undefined;
      this._pointSize = undefined;
      this._pointSymbol = undefined;
      this._scaleDistribution.internalValue = undefined;
      this._showPoints = undefined;
      this._spanNulls = undefined;
      this._stacking.internalValue = undefined;
      this._thresholdsStyle.internalValue = undefined;
      this._transform = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._axisCenteredZero = value.axisCenteredZero;
      this._axisColorMode = value.axisColorMode;
      this._axisGridShow = value.axisGridShow;
      this._axisLabel = value.axisLabel;
      this._axisPlacement = value.axisPlacement;
      this._axisSoftMax = value.axisSoftMax;
      this._axisSoftMin = value.axisSoftMin;
      this._axisWidth = value.axisWidth;
      this._barAlignment = value.barAlignment;
      this._barMaxWidth = value.barMaxWidth;
      this._barWidthFactor = value.barWidthFactor;
      this._drawStyle = value.drawStyle;
      this._fillBelowTo = value.fillBelowTo;
      this._fillColor = value.fillColor;
      this._fillOpacity = value.fillOpacity;
      this._gradientMode = value.gradientMode;
      this._hideFrom.internalValue = value.hideFrom;
      this._lineColor = value.lineColor;
      this._lineInterpolation = value.lineInterpolation;
      this._lineStyle.internalValue = value.lineStyle;
      this._lineWidth = value.lineWidth;
      this._pointColor = value.pointColor;
      this._pointSize = value.pointSize;
      this._pointSymbol = value.pointSymbol;
      this._scaleDistribution.internalValue = value.scaleDistribution;
      this._showPoints = value.showPoints;
      this._spanNulls = value.spanNulls;
      this._stacking.internalValue = value.stacking;
      this._thresholdsStyle.internalValue = value.thresholdsStyle;
      this._transform = value.transform;
    }
  }

  // axis_centered_zero - computed: true, optional: true, required: false
  private _axisCenteredZero?: boolean | cdktf.IResolvable; 
  public get axisCenteredZero() {
    return this.getBooleanAttribute('axis_centered_zero');
  }
  public set axisCenteredZero(value: boolean | cdktf.IResolvable) {
    this._axisCenteredZero = value;
  }
  public resetAxisCenteredZero() {
    this._axisCenteredZero = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get axisCenteredZeroInput() {
    return this._axisCenteredZero;
  }

  // axis_color_mode - computed: true, optional: true, required: false
  private _axisColorMode?: string; 
  public get axisColorMode() {
    return this.getStringAttribute('axis_color_mode');
  }
  public set axisColorMode(value: string) {
    this._axisColorMode = value;
  }
  public resetAxisColorMode() {
    this._axisColorMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get axisColorModeInput() {
    return this._axisColorMode;
  }

  // axis_grid_show - computed: true, optional: true, required: false
  private _axisGridShow?: boolean | cdktf.IResolvable; 
  public get axisGridShow() {
    return this.getBooleanAttribute('axis_grid_show');
  }
  public set axisGridShow(value: boolean | cdktf.IResolvable) {
    this._axisGridShow = value;
  }
  public resetAxisGridShow() {
    this._axisGridShow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get axisGridShowInput() {
    return this._axisGridShow;
  }

  // axis_label - computed: true, optional: true, required: false
  private _axisLabel?: string; 
  public get axisLabel() {
    return this.getStringAttribute('axis_label');
  }
  public set axisLabel(value: string) {
    this._axisLabel = value;
  }
  public resetAxisLabel() {
    this._axisLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get axisLabelInput() {
    return this._axisLabel;
  }

  // axis_placement - computed: true, optional: true, required: false
  private _axisPlacement?: string; 
  public get axisPlacement() {
    return this.getStringAttribute('axis_placement');
  }
  public set axisPlacement(value: string) {
    this._axisPlacement = value;
  }
  public resetAxisPlacement() {
    this._axisPlacement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get axisPlacementInput() {
    return this._axisPlacement;
  }

  // axis_soft_max - computed: true, optional: true, required: false
  private _axisSoftMax?: number; 
  public get axisSoftMax() {
    return this.getNumberAttribute('axis_soft_max');
  }
  public set axisSoftMax(value: number) {
    this._axisSoftMax = value;
  }
  public resetAxisSoftMax() {
    this._axisSoftMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get axisSoftMaxInput() {
    return this._axisSoftMax;
  }

  // axis_soft_min - computed: true, optional: true, required: false
  private _axisSoftMin?: number; 
  public get axisSoftMin() {
    return this.getNumberAttribute('axis_soft_min');
  }
  public set axisSoftMin(value: number) {
    this._axisSoftMin = value;
  }
  public resetAxisSoftMin() {
    this._axisSoftMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get axisSoftMinInput() {
    return this._axisSoftMin;
  }

  // axis_width - computed: true, optional: true, required: false
  private _axisWidth?: number; 
  public get axisWidth() {
    return this.getNumberAttribute('axis_width');
  }
  public set axisWidth(value: number) {
    this._axisWidth = value;
  }
  public resetAxisWidth() {
    this._axisWidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get axisWidthInput() {
    return this._axisWidth;
  }

  // bar_alignment - computed: true, optional: true, required: false
  private _barAlignment?: number; 
  public get barAlignment() {
    return this.getNumberAttribute('bar_alignment');
  }
  public set barAlignment(value: number) {
    this._barAlignment = value;
  }
  public resetBarAlignment() {
    this._barAlignment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get barAlignmentInput() {
    return this._barAlignment;
  }

  // bar_max_width - computed: true, optional: true, required: false
  private _barMaxWidth?: number; 
  public get barMaxWidth() {
    return this.getNumberAttribute('bar_max_width');
  }
  public set barMaxWidth(value: number) {
    this._barMaxWidth = value;
  }
  public resetBarMaxWidth() {
    this._barMaxWidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get barMaxWidthInput() {
    return this._barMaxWidth;
  }

  // bar_width_factor - computed: true, optional: true, required: false
  private _barWidthFactor?: number; 
  public get barWidthFactor() {
    return this.getNumberAttribute('bar_width_factor');
  }
  public set barWidthFactor(value: number) {
    this._barWidthFactor = value;
  }
  public resetBarWidthFactor() {
    this._barWidthFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get barWidthFactorInput() {
    return this._barWidthFactor;
  }

  // draw_style - computed: true, optional: true, required: false
  private _drawStyle?: string; 
  public get drawStyle() {
    return this.getStringAttribute('draw_style');
  }
  public set drawStyle(value: string) {
    this._drawStyle = value;
  }
  public resetDrawStyle() {
    this._drawStyle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drawStyleInput() {
    return this._drawStyle;
  }

  // fill_below_to - computed: true, optional: true, required: false
  private _fillBelowTo?: string; 
  public get fillBelowTo() {
    return this.getStringAttribute('fill_below_to');
  }
  public set fillBelowTo(value: string) {
    this._fillBelowTo = value;
  }
  public resetFillBelowTo() {
    this._fillBelowTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fillBelowToInput() {
    return this._fillBelowTo;
  }

  // fill_color - computed: true, optional: true, required: false
  private _fillColor?: string; 
  public get fillColor() {
    return this.getStringAttribute('fill_color');
  }
  public set fillColor(value: string) {
    this._fillColor = value;
  }
  public resetFillColor() {
    this._fillColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fillColorInput() {
    return this._fillColor;
  }

  // fill_opacity - computed: true, optional: true, required: false
  private _fillOpacity?: number; 
  public get fillOpacity() {
    return this.getNumberAttribute('fill_opacity');
  }
  public set fillOpacity(value: number) {
    this._fillOpacity = value;
  }
  public resetFillOpacity() {
    this._fillOpacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fillOpacityInput() {
    return this._fillOpacity;
  }

  // gradient_mode - computed: true, optional: true, required: false
  private _gradientMode?: string; 
  public get gradientMode() {
    return this.getStringAttribute('gradient_mode');
  }
  public set gradientMode(value: string) {
    this._gradientMode = value;
  }
  public resetGradientMode() {
    this._gradientMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gradientModeInput() {
    return this._gradientMode;
  }

  // hide_from - computed: true, optional: true, required: false
  private _hideFrom = new DataSchemasPanelDebugFieldConfigDefaultsCustomHideFromOutputReference(this, "hide_from");
  public get hideFrom() {
    return this._hideFrom;
  }
  public putHideFrom(value: DataSchemasPanelDebugFieldConfigDefaultsCustomHideFrom) {
    this._hideFrom.internalValue = value;
  }
  public resetHideFrom() {
    this._hideFrom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hideFromInput() {
    return this._hideFrom.internalValue;
  }

  // line_color - computed: true, optional: true, required: false
  private _lineColor?: string; 
  public get lineColor() {
    return this.getStringAttribute('line_color');
  }
  public set lineColor(value: string) {
    this._lineColor = value;
  }
  public resetLineColor() {
    this._lineColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lineColorInput() {
    return this._lineColor;
  }

  // line_interpolation - computed: true, optional: true, required: false
  private _lineInterpolation?: string; 
  public get lineInterpolation() {
    return this.getStringAttribute('line_interpolation');
  }
  public set lineInterpolation(value: string) {
    this._lineInterpolation = value;
  }
  public resetLineInterpolation() {
    this._lineInterpolation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lineInterpolationInput() {
    return this._lineInterpolation;
  }

  // line_style - computed: true, optional: true, required: false
  private _lineStyle = new DataSchemasPanelDebugFieldConfigDefaultsCustomLineStyleOutputReference(this, "line_style");
  public get lineStyle() {
    return this._lineStyle;
  }
  public putLineStyle(value: DataSchemasPanelDebugFieldConfigDefaultsCustomLineStyle) {
    this._lineStyle.internalValue = value;
  }
  public resetLineStyle() {
    this._lineStyle.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lineStyleInput() {
    return this._lineStyle.internalValue;
  }

  // line_width - computed: true, optional: true, required: false
  private _lineWidth?: number; 
  public get lineWidth() {
    return this.getNumberAttribute('line_width');
  }
  public set lineWidth(value: number) {
    this._lineWidth = value;
  }
  public resetLineWidth() {
    this._lineWidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lineWidthInput() {
    return this._lineWidth;
  }

  // point_color - computed: true, optional: true, required: false
  private _pointColor?: string; 
  public get pointColor() {
    return this.getStringAttribute('point_color');
  }
  public set pointColor(value: string) {
    this._pointColor = value;
  }
  public resetPointColor() {
    this._pointColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pointColorInput() {
    return this._pointColor;
  }

  // point_size - computed: true, optional: true, required: false
  private _pointSize?: number; 
  public get pointSize() {
    return this.getNumberAttribute('point_size');
  }
  public set pointSize(value: number) {
    this._pointSize = value;
  }
  public resetPointSize() {
    this._pointSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pointSizeInput() {
    return this._pointSize;
  }

  // point_symbol - computed: true, optional: true, required: false
  private _pointSymbol?: string; 
  public get pointSymbol() {
    return this.getStringAttribute('point_symbol');
  }
  public set pointSymbol(value: string) {
    this._pointSymbol = value;
  }
  public resetPointSymbol() {
    this._pointSymbol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pointSymbolInput() {
    return this._pointSymbol;
  }

  // scale_distribution - computed: true, optional: true, required: false
  private _scaleDistribution = new DataSchemasPanelDebugFieldConfigDefaultsCustomScaleDistributionOutputReference(this, "scale_distribution");
  public get scaleDistribution() {
    return this._scaleDistribution;
  }
  public putScaleDistribution(value: DataSchemasPanelDebugFieldConfigDefaultsCustomScaleDistribution) {
    this._scaleDistribution.internalValue = value;
  }
  public resetScaleDistribution() {
    this._scaleDistribution.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleDistributionInput() {
    return this._scaleDistribution.internalValue;
  }

  // show_points - computed: true, optional: true, required: false
  private _showPoints?: string; 
  public get showPoints() {
    return this.getStringAttribute('show_points');
  }
  public set showPoints(value: string) {
    this._showPoints = value;
  }
  public resetShowPoints() {
    this._showPoints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showPointsInput() {
    return this._showPoints;
  }

  // span_nulls - computed: true, optional: true, required: false
  private _spanNulls?: string; 
  public get spanNulls() {
    return this.getStringAttribute('span_nulls');
  }
  public set spanNulls(value: string) {
    this._spanNulls = value;
  }
  public resetSpanNulls() {
    this._spanNulls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spanNullsInput() {
    return this._spanNulls;
  }

  // stacking - computed: true, optional: true, required: false
  private _stacking = new DataSchemasPanelDebugFieldConfigDefaultsCustomStackingOutputReference(this, "stacking");
  public get stacking() {
    return this._stacking;
  }
  public putStacking(value: DataSchemasPanelDebugFieldConfigDefaultsCustomStacking) {
    this._stacking.internalValue = value;
  }
  public resetStacking() {
    this._stacking.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stackingInput() {
    return this._stacking.internalValue;
  }

  // thresholds_style - computed: true, optional: true, required: false
  private _thresholdsStyle = new DataSchemasPanelDebugFieldConfigDefaultsCustomThresholdsStyleOutputReference(this, "thresholds_style");
  public get thresholdsStyle() {
    return this._thresholdsStyle;
  }
  public putThresholdsStyle(value: DataSchemasPanelDebugFieldConfigDefaultsCustomThresholdsStyle) {
    this._thresholdsStyle.internalValue = value;
  }
  public resetThresholdsStyle() {
    this._thresholdsStyle.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdsStyleInput() {
    return this._thresholdsStyle.internalValue;
  }

  // transform - computed: true, optional: true, required: false
  private _transform?: string; 
  public get transform() {
    return this.getStringAttribute('transform');
  }
  public set transform(value: string) {
    this._transform = value;
  }
  public resetTransform() {
    this._transform = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformInput() {
    return this._transform;
  }
}
export interface DataSchemasPanelDebugFieldConfigDefaultsMappingsRangeMapOptionsResult {
  /**
  * Text to use when the value matches
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug#color DataSchemasPanelDebug#color}
  */
  readonly color?: string;
  /**
  * Icon to display when the value matches. Only specific visualizations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug#icon DataSchemasPanelDebug#icon}
  */
  readonly icon?: string;
  /**
  * Position in the mapping array. Only used internally.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug#index DataSchemasPanelDebug#index}
  */
  readonly index?: number;
  /**
  * Text to display when the value matches
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug#text DataSchemasPanelDebug#text}
  */
  readonly text?: string;
}

export function dataSchemasPanelDebugFieldConfigDefaultsMappingsRangeMapOptionsResultToTerraform(struct?: DataSchemasPanelDebugFieldConfigDefaultsMappingsRangeMapOptionsResult | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktf.stringToTerraform(struct!.color),
    icon: cdktf.stringToTerraform(struct!.icon),
    index: cdktf.numberToTerraform(struct!.index),
    text: cdktf.stringToTerraform(struct!.text),
  }
}


export function dataSchemasPanelDebugFieldConfigDefaultsMappingsRangeMapOptionsResultToHclTerraform(struct?: DataSchemasPanelDebugFieldConfigDefaultsMappingsRangeMapOptionsResult | cdktf.IResolvable): any {
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
    icon: {
      value: cdktf.stringToHclTerraform(struct!.icon),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    index: {
      value: cdktf.numberToHclTerraform(struct!.index),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    text: {
      value: cdktf.stringToHclTerraform(struct!.text),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSchemasPanelDebugFieldConfigDefaultsMappingsRangeMapOptionsResultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasPanelDebugFieldConfigDefaultsMappingsRangeMapOptionsResult | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._icon !== undefined) {
      hasAnyValues = true;
      internalValueResult.icon = this._icon;
    }
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSchemasPanelDebugFieldConfigDefaultsMappingsRangeMapOptionsResult | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._color = undefined;
      this._icon = undefined;
      this._index = undefined;
      this._text = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._color = value.color;
      this._icon = value.icon;
      this._index = value.index;
      this._text = value.text;
    }
  }

  // color - computed: true, optional: true, required: false
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

  // icon - computed: true, optional: true, required: false
  private _icon?: string; 
  public get icon() {
    return this.getStringAttribute('icon');
  }
  public set icon(value: string) {
    this._icon = value;
  }
  public resetIcon() {
    this._icon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iconInput() {
    return this._icon;
  }

  // index - computed: true, optional: true, required: false
  private _index?: number; 
  public get index() {
    return this.getNumberAttribute('index');
  }
  public set index(value: number) {
    this._index = value;
  }
  public resetIndex() {
    this._index = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
  }

  // text - computed: true, optional: true, required: false
  private _text?: string; 
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string) {
    this._text = value;
  }
  public resetText() {
    this._text = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
  }
}
export interface DataSchemasPanelDebugFieldConfigDefaultsMappingsRangeMapOptions {
  /**
  * Min value of the range. It can be null which means -Infinity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug#from DataSchemasPanelDebug#from}
  */
  readonly from: string;
  /**
  * Config to apply when the value is within the range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug#result DataSchemasPanelDebug#result}
  */
  readonly result?: DataSchemasPanelDebugFieldConfigDefaultsMappingsRangeMapOptionsResult;
  /**
  * Max value of the range. It can be null which means +Infinity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug#to DataSchemasPanelDebug#to}
  */
  readonly to: string;
}

export function dataSchemasPanelDebugFieldConfigDefaultsMappingsRangeMapOptionsToTerraform(struct?: DataSchemasPanelDebugFieldConfigDefaultsMappingsRangeMapOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: cdktf.stringToTerraform(struct!.from),
    result: dataSchemasPanelDebugFieldConfigDefaultsMappingsRangeMapOptionsResultToTerraform(struct!.result),
    to: cdktf.stringToTerraform(struct!.to),
  }
}


export function dataSchemasPanelDebugFieldConfigDefaultsMappingsRangeMapOptionsToHclTerraform(struct?: DataSchemasPanelDebugFieldConfigDefaultsMappingsRangeMapOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: cdktf.stringToHclTerraform(struct!.from),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    result: {
      value: dataSchemasPanelDebugFieldConfigDefaultsMappingsRangeMapOptionsResultToHclTerraform(struct!.result),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasPanelDebugFieldConfigDefaultsMappingsRangeMapOptionsResult",
    },
    to: {
      value: cdktf.stringToHclTerraform(struct!.to),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSchemasPanelDebugFieldConfigDefaultsMappingsRangeMapOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasPanelDebugFieldConfigDefaultsMappingsRangeMapOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._from !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from;
    }
    if (this._result?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.result = this._result?.internalValue;
    }
    if (this._to !== undefined) {
      hasAnyValues = true;
      internalValueResult.to = this._to;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSchemasPanelDebugFieldConfigDefaultsMappingsRangeMapOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._from = undefined;
      this._result.internalValue = undefined;
      this._to = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._from = value.from;
      this._result.internalValue = value.result;
      this._to = value.to;
    }
  }

  // from - computed: true, optional: false, required: true
  private _from?: string; 
  public get from() {
    return this.getStringAttribute('from');
  }
  public set from(value: string) {
    this._from = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from;
  }

  // result - computed: true, optional: true, required: false
  private _result = new DataSchemasPanelDebugFieldConfigDefaultsMappingsRangeMapOptionsResultOutputReference(this, "result");
  public get result() {
    return this._result;
  }
  public putResult(value: DataSchemasPanelDebugFieldConfigDefaultsMappingsRangeMapOptionsResult) {
    this._result.internalValue = value;
  }
  public resetResult() {
    this._result.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultInput() {
    return this._result.internalValue;
  }

  // to - computed: true, optional: false, required: true
  private _to?: string; 
  public get to() {
    return this.getStringAttribute('to');
  }
  public set to(value: string) {
    this._to = value;
  }
  // Temporarily expose input value. Use with caution.
  public get toInput() {
    return this._to;
  }
}
export interface DataSchemasPanelDebugFieldConfigDefaultsMappingsRangeMap {
  /**
  * Range to match against and the result to apply when the value is within the range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug#options DataSchemasPanelDebug#options}
  */
  readonly options?: DataSchemasPanelDebugFieldConfigDefaultsMappingsRangeMapOptions;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug#type DataSchemasPanelDebug#type}
  */
  readonly type: string;
}

export function dataSchemasPanelDebugFieldConfigDefaultsMappingsRangeMapToTerraform(struct?: DataSchemasPanelDebugFieldConfigDefaultsMappingsRangeMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    options: dataSchemasPanelDebugFieldConfigDefaultsMappingsRangeMapOptionsToTerraform(struct!.options),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataSchemasPanelDebugFieldConfigDefaultsMappingsRangeMapToHclTerraform(struct?: DataSchemasPanelDebugFieldConfigDefaultsMappingsRangeMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    options: {
      value: dataSchemasPanelDebugFieldConfigDefaultsMappingsRangeMapOptionsToHclTerraform(struct!.options),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasPanelDebugFieldConfigDefaultsMappingsRangeMapOptions",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSchemasPanelDebugFieldConfigDefaultsMappingsRangeMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasPanelDebugFieldConfigDefaultsMappingsRangeMap | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._options?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSchemasPanelDebugFieldConfigDefaultsMappingsRangeMap | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._options.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._options.internalValue = value.options;
      this._type = value.type;
    }
  }

  // options - computed: true, optional: true, required: false
  private _options = new DataSchemasPanelDebugFieldConfigDefaultsMappingsRangeMapOptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: DataSchemasPanelDebugFieldConfigDefaultsMappingsRangeMapOptions) {
    this._options.internalValue = value;
  }
  public resetOptions() {
    this._options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }

  // type - computed: true, optional: false, required: true
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
}
export interface DataSchemasPanelDebugFieldConfigDefaultsMappingsRegexMapOptionsResult {
  /**
  * Text to use when the value matches
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug#color DataSchemasPanelDebug#color}
  */
  readonly color?: string;
  /**
  * Icon to display when the value matches. Only specific visualizations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug#icon DataSchemasPanelDebug#icon}
  */
  readonly icon?: string;
  /**
  * Position in the mapping array. Only used internally.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug#index DataSchemasPanelDebug#index}
  */
  readonly index?: number;
  /**
  * Text to display when the value matches
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug#text DataSchemasPanelDebug#text}
  */
  readonly text?: string;
}

export function dataSchemasPanelDebugFieldConfigDefaultsMappingsRegexMapOptionsResultToTerraform(struct?: DataSchemasPanelDebugFieldConfigDefaultsMappingsRegexMapOptionsResult | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktf.stringToTerraform(struct!.color),
    icon: cdktf.stringToTerraform(struct!.icon),
    index: cdktf.numberToTerraform(struct!.index),
    text: cdktf.stringToTerraform(struct!.text),
  }
}


export function dataSchemasPanelDebugFieldConfigDefaultsMappingsRegexMapOptionsResultToHclTerraform(struct?: DataSchemasPanelDebugFieldConfigDefaultsMappingsRegexMapOptionsResult | cdktf.IResolvable): any {
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
    icon: {
      value: cdktf.stringToHclTerraform(struct!.icon),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    index: {
      value: cdktf.numberToHclTerraform(struct!.index),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    text: {
      value: cdktf.stringToHclTerraform(struct!.text),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSchemasPanelDebugFieldConfigDefaultsMappingsRegexMapOptionsResultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasPanelDebugFieldConfigDefaultsMappingsRegexMapOptionsResult | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._icon !== undefined) {
      hasAnyValues = true;
      internalValueResult.icon = this._icon;
    }
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSchemasPanelDebugFieldConfigDefaultsMappingsRegexMapOptionsResult | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._color = undefined;
      this._icon = undefined;
      this._index = undefined;
      this._text = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._color = value.color;
      this._icon = value.icon;
      this._index = value.index;
      this._text = value.text;
    }
  }

  // color - computed: true, optional: true, required: false
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

  // icon - computed: true, optional: true, required: false
  private _icon?: string; 
  public get icon() {
    return this.getStringAttribute('icon');
  }
  public set icon(value: string) {
    this._icon = value;
  }
  public resetIcon() {
    this._icon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iconInput() {
    return this._icon;
  }

  // index - computed: true, optional: true, required: false
  private _index?: number; 
  public get index() {
    return this.getNumberAttribute('index');
  }
  public set index(value: number) {
    this._index = value;
  }
  public resetIndex() {
    this._index = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
  }

  // text - computed: true, optional: true, required: false
  private _text?: string; 
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string) {
    this._text = value;
  }
  public resetText() {
    this._text = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
  }
}
export interface DataSchemasPanelDebugFieldConfigDefaultsMappingsRegexMapOptions {
  /**
  * Regular expression to match against
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug#pattern DataSchemasPanelDebug#pattern}
  */
  readonly pattern: string;
  /**
  * Config to apply when the value matches the regex
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug#result DataSchemasPanelDebug#result}
  */
  readonly result?: DataSchemasPanelDebugFieldConfigDefaultsMappingsRegexMapOptionsResult;
}

export function dataSchemasPanelDebugFieldConfigDefaultsMappingsRegexMapOptionsToTerraform(struct?: DataSchemasPanelDebugFieldConfigDefaultsMappingsRegexMapOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pattern: cdktf.stringToTerraform(struct!.pattern),
    result: dataSchemasPanelDebugFieldConfigDefaultsMappingsRegexMapOptionsResultToTerraform(struct!.result),
  }
}


export function dataSchemasPanelDebugFieldConfigDefaultsMappingsRegexMapOptionsToHclTerraform(struct?: DataSchemasPanelDebugFieldConfigDefaultsMappingsRegexMapOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pattern: {
      value: cdktf.stringToHclTerraform(struct!.pattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    result: {
      value: dataSchemasPanelDebugFieldConfigDefaultsMappingsRegexMapOptionsResultToHclTerraform(struct!.result),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasPanelDebugFieldConfigDefaultsMappingsRegexMapOptionsResult",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSchemasPanelDebugFieldConfigDefaultsMappingsRegexMapOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasPanelDebugFieldConfigDefaultsMappingsRegexMapOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    if (this._result?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.result = this._result?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSchemasPanelDebugFieldConfigDefaultsMappingsRegexMapOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pattern = undefined;
      this._result.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._pattern = value.pattern;
      this._result.internalValue = value.result;
    }
  }

  // pattern - computed: true, optional: false, required: true
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }

  // result - computed: true, optional: true, required: false
  private _result = new DataSchemasPanelDebugFieldConfigDefaultsMappingsRegexMapOptionsResultOutputReference(this, "result");
  public get result() {
    return this._result;
  }
  public putResult(value: DataSchemasPanelDebugFieldConfigDefaultsMappingsRegexMapOptionsResult) {
    this._result.internalValue = value;
  }
  public resetResult() {
    this._result.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultInput() {
    return this._result.internalValue;
  }
}
export interface DataSchemasPanelDebugFieldConfigDefaultsMappingsRegexMap {
  /**
  * Regular expression to match against and the result to apply when the value matches the regex
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug#options DataSchemasPanelDebug#options}
  */
  readonly options?: DataSchemasPanelDebugFieldConfigDefaultsMappingsRegexMapOptions;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug#type DataSchemasPanelDebug#type}
  */
  readonly type: string;
}

export function dataSchemasPanelDebugFieldConfigDefaultsMappingsRegexMapToTerraform(struct?: DataSchemasPanelDebugFieldConfigDefaultsMappingsRegexMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    options: dataSchemasPanelDebugFieldConfigDefaultsMappingsRegexMapOptionsToTerraform(struct!.options),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataSchemasPanelDebugFieldConfigDefaultsMappingsRegexMapToHclTerraform(struct?: DataSchemasPanelDebugFieldConfigDefaultsMappingsRegexMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    options: {
      value: dataSchemasPanelDebugFieldConfigDefaultsMappingsRegexMapOptionsToHclTerraform(struct!.options),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasPanelDebugFieldConfigDefaultsMappingsRegexMapOptions",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSchemasPanelDebugFieldConfigDefaultsMappingsRegexMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasPanelDebugFieldConfigDefaultsMappingsRegexMap | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._options?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSchemasPanelDebugFieldConfigDefaultsMappingsRegexMap | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._options.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._options.internalValue = value.options;
      this._type = value.type;
    }
  }

  // options - computed: true, optional: true, required: false
  private _options = new DataSchemasPanelDebugFieldConfigDefaultsMappingsRegexMapOptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: DataSchemasPanelDebugFieldConfigDefaultsMappingsRegexMapOptions) {
    this._options.internalValue = value;
  }
  public resetOptions() {
    this._options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }

  // type - computed: true, optional: false, required: true
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
}
export interface DataSchemasPanelDebugFieldConfigDefaultsMappingsSpecialValueMapOptionsResult {
  /**
  * Text to use when the value matches
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug#color DataSchemasPanelDebug#color}
  */
  readonly color?: string;
  /**
  * Icon to display when the value matches. Only specific visualizations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug#icon DataSchemasPanelDebug#icon}
  */
  readonly icon?: string;
  /**
  * Position in the mapping array. Only used internally.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug#index DataSchemasPanelDebug#index}
  */
  readonly index?: number;
  /**
  * Text to display when the value matches
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug#text DataSchemasPanelDebug#text}
  */
  readonly text?: string;
}

export function dataSchemasPanelDebugFieldConfigDefaultsMappingsSpecialValueMapOptionsResultToTerraform(struct?: DataSchemasPanelDebugFieldConfigDefaultsMappingsSpecialValueMapOptionsResult | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktf.stringToTerraform(struct!.color),
    icon: cdktf.stringToTerraform(struct!.icon),
    index: cdktf.numberToTerraform(struct!.index),
    text: cdktf.stringToTerraform(struct!.text),
  }
}


export function dataSchemasPanelDebugFieldConfigDefaultsMappingsSpecialValueMapOptionsResultToHclTerraform(struct?: DataSchemasPanelDebugFieldConfigDefaultsMappingsSpecialValueMapOptionsResult | cdktf.IResolvable): any {
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
    icon: {
      value: cdktf.stringToHclTerraform(struct!.icon),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    index: {
      value: cdktf.numberToHclTerraform(struct!.index),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    text: {
      value: cdktf.stringToHclTerraform(struct!.text),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSchemasPanelDebugFieldConfigDefaultsMappingsSpecialValueMapOptionsResultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasPanelDebugFieldConfigDefaultsMappingsSpecialValueMapOptionsResult | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._icon !== undefined) {
      hasAnyValues = true;
      internalValueResult.icon = this._icon;
    }
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSchemasPanelDebugFieldConfigDefaultsMappingsSpecialValueMapOptionsResult | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._color = undefined;
      this._icon = undefined;
      this._index = undefined;
      this._text = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._color = value.color;
      this._icon = value.icon;
      this._index = value.index;
      this._text = value.text;
    }
  }

  // color - computed: true, optional: true, required: false
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

  // icon - computed: true, optional: true, required: false
  private _icon?: string; 
  public get icon() {
    return this.getStringAttribute('icon');
  }
  public set icon(value: string) {
    this._icon = value;
  }
  public resetIcon() {
    this._icon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iconInput() {
    return this._icon;
  }

  // index - computed: true, optional: true, required: false
  private _index?: number; 
  public get index() {
    return this.getNumberAttribute('index');
  }
  public set index(value: number) {
    this._index = value;
  }
  public resetIndex() {
    this._index = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
  }

  // text - computed: true, optional: true, required: false
  private _text?: string; 
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string) {
    this._text = value;
  }
  public resetText() {
    this._text = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
  }
}
export interface DataSchemasPanelDebugFieldConfigDefaultsMappingsSpecialValueMapOptions {
  /**
  * Special value to match against
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug#match DataSchemasPanelDebug#match}
  */
  readonly match: string;
  /**
  * Config to apply when the value matches the special value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug#result DataSchemasPanelDebug#result}
  */
  readonly result?: DataSchemasPanelDebugFieldConfigDefaultsMappingsSpecialValueMapOptionsResult;
}

export function dataSchemasPanelDebugFieldConfigDefaultsMappingsSpecialValueMapOptionsToTerraform(struct?: DataSchemasPanelDebugFieldConfigDefaultsMappingsSpecialValueMapOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match: cdktf.stringToTerraform(struct!.match),
    result: dataSchemasPanelDebugFieldConfigDefaultsMappingsSpecialValueMapOptionsResultToTerraform(struct!.result),
  }
}


export function dataSchemasPanelDebugFieldConfigDefaultsMappingsSpecialValueMapOptionsToHclTerraform(struct?: DataSchemasPanelDebugFieldConfigDefaultsMappingsSpecialValueMapOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match: {
      value: cdktf.stringToHclTerraform(struct!.match),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    result: {
      value: dataSchemasPanelDebugFieldConfigDefaultsMappingsSpecialValueMapOptionsResultToHclTerraform(struct!.result),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasPanelDebugFieldConfigDefaultsMappingsSpecialValueMapOptionsResult",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSchemasPanelDebugFieldConfigDefaultsMappingsSpecialValueMapOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasPanelDebugFieldConfigDefaultsMappingsSpecialValueMapOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._match !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match;
    }
    if (this._result?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.result = this._result?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSchemasPanelDebugFieldConfigDefaultsMappingsSpecialValueMapOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._match = undefined;
      this._result.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._match = value.match;
      this._result.internalValue = value.result;
    }
  }

  // match - computed: true, optional: false, required: true
  private _match?: string; 
  public get match() {
    return this.getStringAttribute('match');
  }
  public set match(value: string) {
    this._match = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match;
  }

  // result - computed: true, optional: true, required: false
  private _result = new DataSchemasPanelDebugFieldConfigDefaultsMappingsSpecialValueMapOptionsResultOutputReference(this, "result");
  public get result() {
    return this._result;
  }
  public putResult(value: DataSchemasPanelDebugFieldConfigDefaultsMappingsSpecialValueMapOptionsResult) {
    this._result.internalValue = value;
  }
  public resetResult() {
    this._result.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultInput() {
    return this._result.internalValue;
  }
}
export interface DataSchemasPanelDebugFieldConfigDefaultsMappingsSpecialValueMap {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug#options DataSchemasPanelDebug#options}
  */
  readonly options?: DataSchemasPanelDebugFieldConfigDefaultsMappingsSpecialValueMapOptions;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug#type DataSchemasPanelDebug#type}
  */
  readonly type: string;
}

export function dataSchemasPanelDebugFieldConfigDefaultsMappingsSpecialValueMapToTerraform(struct?: DataSchemasPanelDebugFieldConfigDefaultsMappingsSpecialValueMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    options: dataSchemasPanelDebugFieldConfigDefaultsMappingsSpecialValueMapOptionsToTerraform(struct!.options),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataSchemasPanelDebugFieldConfigDefaultsMappingsSpecialValueMapToHclTerraform(struct?: DataSchemasPanelDebugFieldConfigDefaultsMappingsSpecialValueMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    options: {
      value: dataSchemasPanelDebugFieldConfigDefaultsMappingsSpecialValueMapOptionsToHclTerraform(struct!.options),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasPanelDebugFieldConfigDefaultsMappingsSpecialValueMapOptions",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSchemasPanelDebugFieldConfigDefaultsMappingsSpecialValueMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasPanelDebugFieldConfigDefaultsMappingsSpecialValueMap | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._options?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSchemasPanelDebugFieldConfigDefaultsMappingsSpecialValueMap | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._options.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._options.internalValue = value.options;
      this._type = value.type;
    }
  }

  // options - computed: true, optional: true, required: false
  private _options = new DataSchemasPanelDebugFieldConfigDefaultsMappingsSpecialValueMapOptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: DataSchemasPanelDebugFieldConfigDefaultsMappingsSpecialValueMapOptions) {
    this._options.internalValue = value;
  }
  public resetOptions() {
    this._options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }

  // type - computed: true, optional: false, required: true
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
}
export interface DataSchemasPanelDebugFieldConfigDefaultsMappingsValueMapOptions {
  /**
  * Text to use when the value matches
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug#color DataSchemasPanelDebug#color}
  */
  readonly color?: string;
  /**
  * Icon to display when the value matches. Only specific visualizations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug#icon DataSchemasPanelDebug#icon}
  */
  readonly icon?: string;
  /**
  * Position in the mapping array. Only used internally.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug#index DataSchemasPanelDebug#index}
  */
  readonly index?: number;
  /**
  * Text to display when the value matches
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug#text DataSchemasPanelDebug#text}
  */
  readonly text?: string;
}

export function dataSchemasPanelDebugFieldConfigDefaultsMappingsValueMapOptionsToTerraform(struct?: DataSchemasPanelDebugFieldConfigDefaultsMappingsValueMapOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktf.stringToTerraform(struct!.color),
    icon: cdktf.stringToTerraform(struct!.icon),
    index: cdktf.numberToTerraform(struct!.index),
    text: cdktf.stringToTerraform(struct!.text),
  }
}


export function dataSchemasPanelDebugFieldConfigDefaultsMappingsValueMapOptionsToHclTerraform(struct?: DataSchemasPanelDebugFieldConfigDefaultsMappingsValueMapOptions | cdktf.IResolvable): any {
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
    icon: {
      value: cdktf.stringToHclTerraform(struct!.icon),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    index: {
      value: cdktf.numberToHclTerraform(struct!.index),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    text: {
      value: cdktf.stringToHclTerraform(struct!.text),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSchemasPanelDebugFieldConfigDefaultsMappingsValueMapOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataSchemasPanelDebugFieldConfigDefaultsMappingsValueMapOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._icon !== undefined) {
      hasAnyValues = true;
      internalValueResult.icon = this._icon;
    }
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSchemasPanelDebugFieldConfigDefaultsMappingsValueMapOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._color = undefined;
      this._icon = undefined;
      this._index = undefined;
      this._text = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._color = value.color;
      this._icon = value.icon;
      this._index = value.index;
      this._text = value.text;
    }
  }

  // color - computed: true, optional: true, required: false
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

  // icon - computed: true, optional: true, required: false
  private _icon?: string; 
  public get icon() {
    return this.getStringAttribute('icon');
  }
  public set icon(value: string) {
    this._icon = value;
  }
  public resetIcon() {
    this._icon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iconInput() {
    return this._icon;
  }

  // index - computed: true, optional: true, required: false
  private _index?: number; 
  public get index() {
    return this.getNumberAttribute('index');
  }
  public set index(value: number) {
    this._index = value;
  }
  public resetIndex() {
    this._index = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
  }

  // text - computed: true, optional: true, required: false
  private _text?: string; 
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string) {
    this._text = value;
  }
  public resetText() {
    this._text = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
  }
}

export class DataSchemasPanelDebugFieldConfigDefaultsMappingsValueMapOptionsMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: DataSchemasPanelDebugFieldConfigDefaultsMappingsValueMapOptions } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DataSchemasPanelDebugFieldConfigDefaultsMappingsValueMapOptionsOutputReference {
    return new DataSchemasPanelDebugFieldConfigDefaultsMappingsValueMapOptionsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataSchemasPanelDebugFieldConfigDefaultsMappingsValueMap {
  /**
  * Map with <value_to_match>: ValueMappingResult. For example: { "10": { text: "Perfection!", color: "green" } }
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug#options DataSchemasPanelDebug#options}
  */
  readonly options?: { [key: string]: DataSchemasPanelDebugFieldConfigDefaultsMappingsValueMapOptions } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug#type DataSchemasPanelDebug#type}
  */
  readonly type: string;
}

export function dataSchemasPanelDebugFieldConfigDefaultsMappingsValueMapToTerraform(struct?: DataSchemasPanelDebugFieldConfigDefaultsMappingsValueMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    options: cdktf.hashMapper(dataSchemasPanelDebugFieldConfigDefaultsMappingsValueMapOptionsToTerraform)(struct!.options),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataSchemasPanelDebugFieldConfigDefaultsMappingsValueMapToHclTerraform(struct?: DataSchemasPanelDebugFieldConfigDefaultsMappingsValueMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    options: {
      value: cdktf.hashMapperHcl(dataSchemasPanelDebugFieldConfigDefaultsMappingsValueMapOptionsToHclTerraform)(struct!.options),
      isBlock: true,
      type: "map",
      storageClassType: "DataSchemasPanelDebugFieldConfigDefaultsMappingsValueMapOptionsMap",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSchemasPanelDebugFieldConfigDefaultsMappingsValueMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasPanelDebugFieldConfigDefaultsMappingsValueMap | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._options?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSchemasPanelDebugFieldConfigDefaultsMappingsValueMap | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._options.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._options.internalValue = value.options;
      this._type = value.type;
    }
  }

  // options - computed: true, optional: true, required: false
  private _options = new DataSchemasPanelDebugFieldConfigDefaultsMappingsValueMapOptionsMap(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: { [key: string]: DataSchemasPanelDebugFieldConfigDefaultsMappingsValueMapOptions } | cdktf.IResolvable) {
    this._options.internalValue = value;
  }
  public resetOptions() {
    this._options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }

  // type - computed: true, optional: false, required: true
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
}
export interface DataSchemasPanelDebugFieldConfigDefaultsMappings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug#range_map DataSchemasPanelDebug#range_map}
  */
  readonly rangeMap?: DataSchemasPanelDebugFieldConfigDefaultsMappingsRangeMap;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug#regex_map DataSchemasPanelDebug#regex_map}
  */
  readonly regexMap?: DataSchemasPanelDebugFieldConfigDefaultsMappingsRegexMap;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug#special_value_map DataSchemasPanelDebug#special_value_map}
  */
  readonly specialValueMap?: DataSchemasPanelDebugFieldConfigDefaultsMappingsSpecialValueMap;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug#value_map DataSchemasPanelDebug#value_map}
  */
  readonly valueMap?: DataSchemasPanelDebugFieldConfigDefaultsMappingsValueMap;
}

export function dataSchemasPanelDebugFieldConfigDefaultsMappingsToTerraform(struct?: DataSchemasPanelDebugFieldConfigDefaultsMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    range_map: dataSchemasPanelDebugFieldConfigDefaultsMappingsRangeMapToTerraform(struct!.rangeMap),
    regex_map: dataSchemasPanelDebugFieldConfigDefaultsMappingsRegexMapToTerraform(struct!.regexMap),
    special_value_map: dataSchemasPanelDebugFieldConfigDefaultsMappingsSpecialValueMapToTerraform(struct!.specialValueMap),
    value_map: dataSchemasPanelDebugFieldConfigDefaultsMappingsValueMapToTerraform(struct!.valueMap),
  }
}


export function dataSchemasPanelDebugFieldConfigDefaultsMappingsToHclTerraform(struct?: DataSchemasPanelDebugFieldConfigDefaultsMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    range_map: {
      value: dataSchemasPanelDebugFieldConfigDefaultsMappingsRangeMapToHclTerraform(struct!.rangeMap),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasPanelDebugFieldConfigDefaultsMappingsRangeMap",
    },
    regex_map: {
      value: dataSchemasPanelDebugFieldConfigDefaultsMappingsRegexMapToHclTerraform(struct!.regexMap),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasPanelDebugFieldConfigDefaultsMappingsRegexMap",
    },
    special_value_map: {
      value: dataSchemasPanelDebugFieldConfigDefaultsMappingsSpecialValueMapToHclTerraform(struct!.specialValueMap),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasPanelDebugFieldConfigDefaultsMappingsSpecialValueMap",
    },
    value_map: {
      value: dataSchemasPanelDebugFieldConfigDefaultsMappingsValueMapToHclTerraform(struct!.valueMap),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasPanelDebugFieldConfigDefaultsMappingsValueMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSchemasPanelDebugFieldConfigDefaultsMappingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSchemasPanelDebugFieldConfigDefaultsMappings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rangeMap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rangeMap = this._rangeMap?.internalValue;
    }
    if (this._regexMap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexMap = this._regexMap?.internalValue;
    }
    if (this._specialValueMap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.specialValueMap = this._specialValueMap?.internalValue;
    }
    if (this._valueMap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueMap = this._valueMap?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSchemasPanelDebugFieldConfigDefaultsMappings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._rangeMap.internalValue = undefined;
      this._regexMap.internalValue = undefined;
      this._specialValueMap.internalValue = undefined;
      this._valueMap.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._rangeMap.internalValue = value.rangeMap;
      this._regexMap.internalValue = value.regexMap;
      this._specialValueMap.internalValue = value.specialValueMap;
      this._valueMap.internalValue = value.valueMap;
    }
  }

  // range_map - computed: true, optional: true, required: false
  private _rangeMap = new DataSchemasPanelDebugFieldConfigDefaultsMappingsRangeMapOutputReference(this, "range_map");
  public get rangeMap() {
    return this._rangeMap;
  }
  public putRangeMap(value: DataSchemasPanelDebugFieldConfigDefaultsMappingsRangeMap) {
    this._rangeMap.internalValue = value;
  }
  public resetRangeMap() {
    this._rangeMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeMapInput() {
    return this._rangeMap.internalValue;
  }

  // regex_map - computed: true, optional: true, required: false
  private _regexMap = new DataSchemasPanelDebugFieldConfigDefaultsMappingsRegexMapOutputReference(this, "regex_map");
  public get regexMap() {
    return this._regexMap;
  }
  public putRegexMap(value: DataSchemasPanelDebugFieldConfigDefaultsMappingsRegexMap) {
    this._regexMap.internalValue = value;
  }
  public resetRegexMap() {
    this._regexMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexMapInput() {
    return this._regexMap.internalValue;
  }

  // special_value_map - computed: true, optional: true, required: false
  private _specialValueMap = new DataSchemasPanelDebugFieldConfigDefaultsMappingsSpecialValueMapOutputReference(this, "special_value_map");
  public get specialValueMap() {
    return this._specialValueMap;
  }
  public putSpecialValueMap(value: DataSchemasPanelDebugFieldConfigDefaultsMappingsSpecialValueMap) {
    this._specialValueMap.internalValue = value;
  }
  public resetSpecialValueMap() {
    this._specialValueMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specialValueMapInput() {
    return this._specialValueMap.internalValue;
  }

  // value_map - computed: true, optional: true, required: false
  private _valueMap = new DataSchemasPanelDebugFieldConfigDefaultsMappingsValueMapOutputReference(this, "value_map");
  public get valueMap() {
    return this._valueMap;
  }
  public putValueMap(value: DataSchemasPanelDebugFieldConfigDefaultsMappingsValueMap) {
    this._valueMap.internalValue = value;
  }
  public resetValueMap() {
    this._valueMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueMapInput() {
    return this._valueMap.internalValue;
  }
}

export class DataSchemasPanelDebugFieldConfigDefaultsMappingsList extends cdktf.ComplexList {
  public internalValue? : DataSchemasPanelDebugFieldConfigDefaultsMappings[] | cdktf.IResolvable

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
  public get(index: number): DataSchemasPanelDebugFieldConfigDefaultsMappingsOutputReference {
    return new DataSchemasPanelDebugFieldConfigDefaultsMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSchemasPanelDebugFieldConfigDefaultsThresholdsSteps {
  /**
  * Color represents the color of the visual change that will occur in the dashboard when the threshold value is met or exceeded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug#color DataSchemasPanelDebug#color}
  */
  readonly color: string;
  /**
  * Value represents a specified metric for the threshold, which triggers a visual change in the dashboard when this value is met or exceeded.
  * Nulls currently appear here when serializing -Infinity to JSON.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug#value DataSchemasPanelDebug#value}
  */
  readonly value: string;
}

export function dataSchemasPanelDebugFieldConfigDefaultsThresholdsStepsToTerraform(struct?: DataSchemasPanelDebugFieldConfigDefaultsThresholdsSteps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktf.stringToTerraform(struct!.color),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataSchemasPanelDebugFieldConfigDefaultsThresholdsStepsToHclTerraform(struct?: DataSchemasPanelDebugFieldConfigDefaultsThresholdsSteps | cdktf.IResolvable): any {
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSchemasPanelDebugFieldConfigDefaultsThresholdsStepsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSchemasPanelDebugFieldConfigDefaultsThresholdsSteps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSchemasPanelDebugFieldConfigDefaultsThresholdsSteps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._color = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._color = value.color;
      this._value = value.value;
    }
  }

  // color - computed: true, optional: false, required: true
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

  // value - computed: true, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataSchemasPanelDebugFieldConfigDefaultsThresholdsStepsList extends cdktf.ComplexList {
  public internalValue? : DataSchemasPanelDebugFieldConfigDefaultsThresholdsSteps[] | cdktf.IResolvable

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
  public get(index: number): DataSchemasPanelDebugFieldConfigDefaultsThresholdsStepsOutputReference {
    return new DataSchemasPanelDebugFieldConfigDefaultsThresholdsStepsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSchemasPanelDebugFieldConfigDefaultsThresholds {
  /**
  * Thresholds mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug#mode DataSchemasPanelDebug#mode}
  */
  readonly mode: string;
  /**
  * Must be sorted by 'value', first value is always -Infinity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug#steps DataSchemasPanelDebug#steps}
  */
  readonly steps?: DataSchemasPanelDebugFieldConfigDefaultsThresholdsSteps[] | cdktf.IResolvable;
}

export function dataSchemasPanelDebugFieldConfigDefaultsThresholdsToTerraform(struct?: DataSchemasPanelDebugFieldConfigDefaultsThresholds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
    steps: cdktf.listMapper(dataSchemasPanelDebugFieldConfigDefaultsThresholdsStepsToTerraform, false)(struct!.steps),
  }
}


export function dataSchemasPanelDebugFieldConfigDefaultsThresholdsToHclTerraform(struct?: DataSchemasPanelDebugFieldConfigDefaultsThresholds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    steps: {
      value: cdktf.listMapperHcl(dataSchemasPanelDebugFieldConfigDefaultsThresholdsStepsToHclTerraform, false)(struct!.steps),
      isBlock: true,
      type: "list",
      storageClassType: "DataSchemasPanelDebugFieldConfigDefaultsThresholdsStepsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSchemasPanelDebugFieldConfigDefaultsThresholdsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasPanelDebugFieldConfigDefaultsThresholds | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._steps?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.steps = this._steps?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSchemasPanelDebugFieldConfigDefaultsThresholds | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mode = undefined;
      this._steps.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mode = value.mode;
      this._steps.internalValue = value.steps;
    }
  }

  // mode - computed: true, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // steps - computed: true, optional: true, required: false
  private _steps = new DataSchemasPanelDebugFieldConfigDefaultsThresholdsStepsList(this, "steps", false);
  public get steps() {
    return this._steps;
  }
  public putSteps(value: DataSchemasPanelDebugFieldConfigDefaultsThresholdsSteps[] | cdktf.IResolvable) {
    this._steps.internalValue = value;
  }
  public resetSteps() {
    this._steps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stepsInput() {
    return this._steps.internalValue;
  }
}
export interface DataSchemasPanelDebugFieldConfigDefaults {
  /**
  * Panel color configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug#color DataSchemasPanelDebug#color}
  */
  readonly color?: DataSchemasPanelDebugFieldConfigDefaultsColor;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug#custom DataSchemasPanelDebug#custom}
  */
  readonly custom?: DataSchemasPanelDebugFieldConfigDefaultsCustom;
  /**
  * Specify the number of decimals Grafana includes in the rendered value.
  * If you leave this field blank, Grafana automatically truncates the number of decimals based on the value.
  * For example 1.1234 will display as 1.12 and 100.456 will display as 100.
  * To display all decimals, set the unit to String.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug#decimals DataSchemasPanelDebug#decimals}
  */
  readonly decimals?: number;
  /**
  * Human readable field metadata
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug#description DataSchemasPanelDebug#description}
  */
  readonly description?: string;
  /**
  * The display value for this field.  This supports template variables blank is auto
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug#display_name DataSchemasPanelDebug#display_name}
  */
  readonly displayName?: string;
  /**
  * This can be used by data sources that return and explicit naming structure for values and labels
  * When this property is configured, this value is used rather than the default naming strategy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug#display_name_from_ds DataSchemasPanelDebug#display_name_from_ds}
  */
  readonly displayNameFromDs?: string;
  /**
  * True if data source field supports ad-hoc filters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug#filterable DataSchemasPanelDebug#filterable}
  */
  readonly filterable?: boolean | cdktf.IResolvable;
  /**
  * Convert input values into a display string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug#mappings DataSchemasPanelDebug#mappings}
  */
  readonly mappings?: DataSchemasPanelDebugFieldConfigDefaultsMappings[] | cdktf.IResolvable;
  /**
  * The maximum value used in percentage threshold calculations. Leave blank for auto calculation based on all series and fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug#max DataSchemasPanelDebug#max}
  */
  readonly max?: number;
  /**
  * The minimum value used in percentage threshold calculations. Leave blank for auto calculation based on all series and fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug#min DataSchemasPanelDebug#min}
  */
  readonly min?: number;
  /**
  * Alternative to empty string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug#no_value DataSchemasPanelDebug#no_value}
  */
  readonly noValue?: string;
  /**
  * An explicit path to the field in the datasource.  When the frame meta includes a path,
  * This will default to ${frame.meta.path}/${field.name}
  * 
  * When defined, this value can be used as an identifier within the datasource scope, and
  * may be used to update the results
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug#path DataSchemasPanelDebug#path}
  */
  readonly path?: string;
  /**
  * Map numeric values to states
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug#thresholds DataSchemasPanelDebug#thresholds}
  */
  readonly thresholds?: DataSchemasPanelDebugFieldConfigDefaultsThresholds;
  /**
  * Unit a field should use. The unit you select is applied to all fields except time.
  * You can use the units ID availables in Grafana or a custom unit.
  * Available units in Grafana: https://github.com/grafana/grafana/blob/main/packages/grafana-data/src/valueFormats/categories.ts
  * As custom unit, you can use the following formats:
  * suffix:<suffix> for custom unit that should go after value.
  * prefix:<prefix> for custom unit that should go before value.
  * time:<format> For custom date time formats type for example time:YYYY-MM-DD.
  * si:<base scale><unit characters> for custom SI units. For example: si: mF. This one is a bit more advanced as you can specify both a unit and the source data scale. So if your source data is represented as milli (thousands of) something prefix the unit with that SI scale character.
  * count:<unit> for a custom count unit.
  * currency:<unit> for custom a currency unit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug#unit DataSchemasPanelDebug#unit}
  */
  readonly unit?: string;
  /**
  * True if data source can write a value to the path. Auth/authz are supported separately
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug#writeable DataSchemasPanelDebug#writeable}
  */
  readonly writeable?: boolean | cdktf.IResolvable;
}

export function dataSchemasPanelDebugFieldConfigDefaultsToTerraform(struct?: DataSchemasPanelDebugFieldConfigDefaults | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: dataSchemasPanelDebugFieldConfigDefaultsColorToTerraform(struct!.color),
    custom: dataSchemasPanelDebugFieldConfigDefaultsCustomToTerraform(struct!.custom),
    decimals: cdktf.numberToTerraform(struct!.decimals),
    description: cdktf.stringToTerraform(struct!.description),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    display_name_from_ds: cdktf.stringToTerraform(struct!.displayNameFromDs),
    filterable: cdktf.booleanToTerraform(struct!.filterable),
    mappings: cdktf.listMapper(dataSchemasPanelDebugFieldConfigDefaultsMappingsToTerraform, false)(struct!.mappings),
    max: cdktf.numberToTerraform(struct!.max),
    min: cdktf.numberToTerraform(struct!.min),
    no_value: cdktf.stringToTerraform(struct!.noValue),
    path: cdktf.stringToTerraform(struct!.path),
    thresholds: dataSchemasPanelDebugFieldConfigDefaultsThresholdsToTerraform(struct!.thresholds),
    unit: cdktf.stringToTerraform(struct!.unit),
    writeable: cdktf.booleanToTerraform(struct!.writeable),
  }
}


export function dataSchemasPanelDebugFieldConfigDefaultsToHclTerraform(struct?: DataSchemasPanelDebugFieldConfigDefaults | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    color: {
      value: dataSchemasPanelDebugFieldConfigDefaultsColorToHclTerraform(struct!.color),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasPanelDebugFieldConfigDefaultsColor",
    },
    custom: {
      value: dataSchemasPanelDebugFieldConfigDefaultsCustomToHclTerraform(struct!.custom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasPanelDebugFieldConfigDefaultsCustom",
    },
    decimals: {
      value: cdktf.numberToHclTerraform(struct!.decimals),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
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
    display_name_from_ds: {
      value: cdktf.stringToHclTerraform(struct!.displayNameFromDs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filterable: {
      value: cdktf.booleanToHclTerraform(struct!.filterable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mappings: {
      value: cdktf.listMapperHcl(dataSchemasPanelDebugFieldConfigDefaultsMappingsToHclTerraform, false)(struct!.mappings),
      isBlock: true,
      type: "list",
      storageClassType: "DataSchemasPanelDebugFieldConfigDefaultsMappingsList",
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
    no_value: {
      value: cdktf.stringToHclTerraform(struct!.noValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    thresholds: {
      value: dataSchemasPanelDebugFieldConfigDefaultsThresholdsToHclTerraform(struct!.thresholds),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasPanelDebugFieldConfigDefaultsThresholds",
    },
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    writeable: {
      value: cdktf.booleanToHclTerraform(struct!.writeable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSchemasPanelDebugFieldConfigDefaultsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasPanelDebugFieldConfigDefaults | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._color?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color?.internalValue;
    }
    if (this._custom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.custom = this._custom?.internalValue;
    }
    if (this._decimals !== undefined) {
      hasAnyValues = true;
      internalValueResult.decimals = this._decimals;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._displayNameFromDs !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayNameFromDs = this._displayNameFromDs;
    }
    if (this._filterable !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterable = this._filterable;
    }
    if (this._mappings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mappings = this._mappings?.internalValue;
    }
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    if (this._noValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.noValue = this._noValue;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._thresholds?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholds = this._thresholds?.internalValue;
    }
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._writeable !== undefined) {
      hasAnyValues = true;
      internalValueResult.writeable = this._writeable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSchemasPanelDebugFieldConfigDefaults | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._color.internalValue = undefined;
      this._custom.internalValue = undefined;
      this._decimals = undefined;
      this._description = undefined;
      this._displayName = undefined;
      this._displayNameFromDs = undefined;
      this._filterable = undefined;
      this._mappings.internalValue = undefined;
      this._max = undefined;
      this._min = undefined;
      this._noValue = undefined;
      this._path = undefined;
      this._thresholds.internalValue = undefined;
      this._unit = undefined;
      this._writeable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._color.internalValue = value.color;
      this._custom.internalValue = value.custom;
      this._decimals = value.decimals;
      this._description = value.description;
      this._displayName = value.displayName;
      this._displayNameFromDs = value.displayNameFromDs;
      this._filterable = value.filterable;
      this._mappings.internalValue = value.mappings;
      this._max = value.max;
      this._min = value.min;
      this._noValue = value.noValue;
      this._path = value.path;
      this._thresholds.internalValue = value.thresholds;
      this._unit = value.unit;
      this._writeable = value.writeable;
    }
  }

  // color - computed: true, optional: true, required: false
  private _color = new DataSchemasPanelDebugFieldConfigDefaultsColorOutputReference(this, "color");
  public get color() {
    return this._color;
  }
  public putColor(value: DataSchemasPanelDebugFieldConfigDefaultsColor) {
    this._color.internalValue = value;
  }
  public resetColor() {
    this._color.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color.internalValue;
  }

  // custom - computed: true, optional: true, required: false
  private _custom = new DataSchemasPanelDebugFieldConfigDefaultsCustomOutputReference(this, "custom");
  public get custom() {
    return this._custom;
  }
  public putCustom(value: DataSchemasPanelDebugFieldConfigDefaultsCustom) {
    this._custom.internalValue = value;
  }
  public resetCustom() {
    this._custom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customInput() {
    return this._custom.internalValue;
  }

  // decimals - computed: true, optional: true, required: false
  private _decimals?: number; 
  public get decimals() {
    return this.getNumberAttribute('decimals');
  }
  public set decimals(value: number) {
    this._decimals = value;
  }
  public resetDecimals() {
    this._decimals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decimalsInput() {
    return this._decimals;
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

  // display_name - computed: true, optional: true, required: false
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

  // display_name_from_ds - computed: true, optional: true, required: false
  private _displayNameFromDs?: string; 
  public get displayNameFromDs() {
    return this.getStringAttribute('display_name_from_ds');
  }
  public set displayNameFromDs(value: string) {
    this._displayNameFromDs = value;
  }
  public resetDisplayNameFromDs() {
    this._displayNameFromDs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameFromDsInput() {
    return this._displayNameFromDs;
  }

  // filterable - computed: true, optional: true, required: false
  private _filterable?: boolean | cdktf.IResolvable; 
  public get filterable() {
    return this.getBooleanAttribute('filterable');
  }
  public set filterable(value: boolean | cdktf.IResolvable) {
    this._filterable = value;
  }
  public resetFilterable() {
    this._filterable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterableInput() {
    return this._filterable;
  }

  // mappings - computed: true, optional: true, required: false
  private _mappings = new DataSchemasPanelDebugFieldConfigDefaultsMappingsList(this, "mappings", false);
  public get mappings() {
    return this._mappings;
  }
  public putMappings(value: DataSchemasPanelDebugFieldConfigDefaultsMappings[] | cdktf.IResolvable) {
    this._mappings.internalValue = value;
  }
  public resetMappings() {
    this._mappings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mappingsInput() {
    return this._mappings.internalValue;
  }

  // max - computed: true, optional: true, required: false
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

  // min - computed: true, optional: true, required: false
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

  // no_value - computed: true, optional: true, required: false
  private _noValue?: string; 
  public get noValue() {
    return this.getStringAttribute('no_value');
  }
  public set noValue(value: string) {
    this._noValue = value;
  }
  public resetNoValue() {
    this._noValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noValueInput() {
    return this._noValue;
  }

  // path - computed: true, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // thresholds - computed: true, optional: true, required: false
  private _thresholds = new DataSchemasPanelDebugFieldConfigDefaultsThresholdsOutputReference(this, "thresholds");
  public get thresholds() {
    return this._thresholds;
  }
  public putThresholds(value: DataSchemasPanelDebugFieldConfigDefaultsThresholds) {
    this._thresholds.internalValue = value;
  }
  public resetThresholds() {
    this._thresholds.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdsInput() {
    return this._thresholds.internalValue;
  }

  // unit - computed: true, optional: true, required: false
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  public resetUnit() {
    this._unit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // writeable - computed: true, optional: true, required: false
  private _writeable?: boolean | cdktf.IResolvable; 
  public get writeable() {
    return this.getBooleanAttribute('writeable');
  }
  public set writeable(value: boolean | cdktf.IResolvable) {
    this._writeable = value;
  }
  public resetWriteable() {
    this._writeable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeableInput() {
    return this._writeable;
  }
}
export interface DataSchemasPanelDebugFieldConfigOverridesMatcher {
}

export function dataSchemasPanelDebugFieldConfigOverridesMatcherToTerraform(struct?: DataSchemasPanelDebugFieldConfigOverridesMatcher | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSchemasPanelDebugFieldConfigOverridesMatcherToHclTerraform(struct?: DataSchemasPanelDebugFieldConfigOverridesMatcher | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSchemasPanelDebugFieldConfigOverridesMatcherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasPanelDebugFieldConfigOverridesMatcher | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSchemasPanelDebugFieldConfigOverridesMatcher | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface DataSchemasPanelDebugFieldConfigOverridesProperties {
}

export function dataSchemasPanelDebugFieldConfigOverridesPropertiesToTerraform(struct?: DataSchemasPanelDebugFieldConfigOverridesProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSchemasPanelDebugFieldConfigOverridesPropertiesToHclTerraform(struct?: DataSchemasPanelDebugFieldConfigOverridesProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSchemasPanelDebugFieldConfigOverridesPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSchemasPanelDebugFieldConfigOverridesProperties | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSchemasPanelDebugFieldConfigOverridesProperties | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}

export class DataSchemasPanelDebugFieldConfigOverridesPropertiesList extends cdktf.ComplexList {
  public internalValue? : DataSchemasPanelDebugFieldConfigOverridesProperties[] | cdktf.IResolvable

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
  public get(index: number): DataSchemasPanelDebugFieldConfigOverridesPropertiesOutputReference {
    return new DataSchemasPanelDebugFieldConfigOverridesPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSchemasPanelDebugFieldConfigOverrides {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug#matcher DataSchemasPanelDebug#matcher}
  */
  readonly matcher?: DataSchemasPanelDebugFieldConfigOverridesMatcher;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug#properties DataSchemasPanelDebug#properties}
  */
  readonly properties?: DataSchemasPanelDebugFieldConfigOverridesProperties[] | cdktf.IResolvable;
}

export function dataSchemasPanelDebugFieldConfigOverridesToTerraform(struct?: DataSchemasPanelDebugFieldConfigOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    matcher: dataSchemasPanelDebugFieldConfigOverridesMatcherToTerraform(struct!.matcher),
    properties: cdktf.listMapper(dataSchemasPanelDebugFieldConfigOverridesPropertiesToTerraform, false)(struct!.properties),
  }
}


export function dataSchemasPanelDebugFieldConfigOverridesToHclTerraform(struct?: DataSchemasPanelDebugFieldConfigOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    matcher: {
      value: dataSchemasPanelDebugFieldConfigOverridesMatcherToHclTerraform(struct!.matcher),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasPanelDebugFieldConfigOverridesMatcher",
    },
    properties: {
      value: cdktf.listMapperHcl(dataSchemasPanelDebugFieldConfigOverridesPropertiesToHclTerraform, false)(struct!.properties),
      isBlock: true,
      type: "list",
      storageClassType: "DataSchemasPanelDebugFieldConfigOverridesPropertiesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSchemasPanelDebugFieldConfigOverridesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSchemasPanelDebugFieldConfigOverrides | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matcher?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matcher = this._matcher?.internalValue;
    }
    if (this._properties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSchemasPanelDebugFieldConfigOverrides | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matcher.internalValue = undefined;
      this._properties.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matcher.internalValue = value.matcher;
      this._properties.internalValue = value.properties;
    }
  }

  // matcher - computed: true, optional: true, required: false
  private _matcher = new DataSchemasPanelDebugFieldConfigOverridesMatcherOutputReference(this, "matcher");
  public get matcher() {
    return this._matcher;
  }
  public putMatcher(value: DataSchemasPanelDebugFieldConfigOverridesMatcher) {
    this._matcher.internalValue = value;
  }
  public resetMatcher() {
    this._matcher.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matcherInput() {
    return this._matcher.internalValue;
  }

  // properties - computed: true, optional: true, required: false
  private _properties = new DataSchemasPanelDebugFieldConfigOverridesPropertiesList(this, "properties", false);
  public get properties() {
    return this._properties;
  }
  public putProperties(value: DataSchemasPanelDebugFieldConfigOverridesProperties[] | cdktf.IResolvable) {
    this._properties.internalValue = value;
  }
  public resetProperties() {
    this._properties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties.internalValue;
  }
}

export class DataSchemasPanelDebugFieldConfigOverridesList extends cdktf.ComplexList {
  public internalValue? : DataSchemasPanelDebugFieldConfigOverrides[] | cdktf.IResolvable

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
  public get(index: number): DataSchemasPanelDebugFieldConfigOverridesOutputReference {
    return new DataSchemasPanelDebugFieldConfigOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSchemasPanelDebugFieldConfig {
  /**
  * Defaults are the options applied to all fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug#defaults DataSchemasPanelDebug#defaults}
  */
  readonly defaults?: DataSchemasPanelDebugFieldConfigDefaults;
  /**
  * Overrides are the options applied to specific fields overriding the defaults.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug#overrides DataSchemasPanelDebug#overrides}
  */
  readonly overrides?: DataSchemasPanelDebugFieldConfigOverrides[] | cdktf.IResolvable;
}

export function dataSchemasPanelDebugFieldConfigToTerraform(struct?: DataSchemasPanelDebugFieldConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    defaults: dataSchemasPanelDebugFieldConfigDefaultsToTerraform(struct!.defaults),
    overrides: cdktf.listMapper(dataSchemasPanelDebugFieldConfigOverridesToTerraform, false)(struct!.overrides),
  }
}


export function dataSchemasPanelDebugFieldConfigToHclTerraform(struct?: DataSchemasPanelDebugFieldConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    defaults: {
      value: dataSchemasPanelDebugFieldConfigDefaultsToHclTerraform(struct!.defaults),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasPanelDebugFieldConfigDefaults",
    },
    overrides: {
      value: cdktf.listMapperHcl(dataSchemasPanelDebugFieldConfigOverridesToHclTerraform, false)(struct!.overrides),
      isBlock: true,
      type: "list",
      storageClassType: "DataSchemasPanelDebugFieldConfigOverridesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSchemasPanelDebugFieldConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasPanelDebugFieldConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaults?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaults = this._defaults?.internalValue;
    }
    if (this._overrides?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrides = this._overrides?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSchemasPanelDebugFieldConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaults.internalValue = undefined;
      this._overrides.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaults.internalValue = value.defaults;
      this._overrides.internalValue = value.overrides;
    }
  }

  // defaults - computed: true, optional: true, required: false
  private _defaults = new DataSchemasPanelDebugFieldConfigDefaultsOutputReference(this, "defaults");
  public get defaults() {
    return this._defaults;
  }
  public putDefaults(value: DataSchemasPanelDebugFieldConfigDefaults) {
    this._defaults.internalValue = value;
  }
  public resetDefaults() {
    this._defaults.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultsInput() {
    return this._defaults.internalValue;
  }

  // overrides - computed: true, optional: true, required: false
  private _overrides = new DataSchemasPanelDebugFieldConfigOverridesList(this, "overrides", false);
  public get overrides() {
    return this._overrides;
  }
  public putOverrides(value: DataSchemasPanelDebugFieldConfigOverrides[] | cdktf.IResolvable) {
    this._overrides.internalValue = value;
  }
  public resetOverrides() {
    this._overrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overridesInput() {
    return this._overrides.internalValue;
  }
}
export interface DataSchemasPanelDebugGridPos {
  /**
  * Panel height. The height is the number of rows from the top edge of the panel. Defaults to 9.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug#h DataSchemasPanelDebug#h}
  */
  readonly h?: number;
  /**
  * Whether the panel is fixed within the grid. If true, the panel will not be affected by other panels' interactions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug#static DataSchemasPanelDebug#static}
  */
  readonly static?: boolean | cdktf.IResolvable;
  /**
  * Panel width. The width is the number of columns from the left edge of the panel. Defaults to 12.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug#w DataSchemasPanelDebug#w}
  */
  readonly w?: number;
  /**
  * Panel x. The x coordinate is the number of columns from the left edge of the grid. Defaults to 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug#x DataSchemasPanelDebug#x}
  */
  readonly x?: number;
  /**
  * Panel y. The y coordinate is the number of rows from the top edge of the grid. Defaults to 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug#y DataSchemasPanelDebug#y}
  */
  readonly y?: number;
}

export function dataSchemasPanelDebugGridPosToTerraform(struct?: DataSchemasPanelDebugGridPos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    h: cdktf.numberToTerraform(struct!.h),
    static: cdktf.booleanToTerraform(struct!.static),
    w: cdktf.numberToTerraform(struct!.w),
    x: cdktf.numberToTerraform(struct!.x),
    y: cdktf.numberToTerraform(struct!.y),
  }
}


export function dataSchemasPanelDebugGridPosToHclTerraform(struct?: DataSchemasPanelDebugGridPos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    h: {
      value: cdktf.numberToHclTerraform(struct!.h),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    static: {
      value: cdktf.booleanToHclTerraform(struct!.static),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    w: {
      value: cdktf.numberToHclTerraform(struct!.w),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    x: {
      value: cdktf.numberToHclTerraform(struct!.x),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    y: {
      value: cdktf.numberToHclTerraform(struct!.y),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSchemasPanelDebugGridPosOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasPanelDebugGridPos | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._h !== undefined) {
      hasAnyValues = true;
      internalValueResult.h = this._h;
    }
    if (this._static !== undefined) {
      hasAnyValues = true;
      internalValueResult.static = this._static;
    }
    if (this._w !== undefined) {
      hasAnyValues = true;
      internalValueResult.w = this._w;
    }
    if (this._x !== undefined) {
      hasAnyValues = true;
      internalValueResult.x = this._x;
    }
    if (this._y !== undefined) {
      hasAnyValues = true;
      internalValueResult.y = this._y;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSchemasPanelDebugGridPos | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._h = undefined;
      this._static = undefined;
      this._w = undefined;
      this._x = undefined;
      this._y = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._h = value.h;
      this._static = value.static;
      this._w = value.w;
      this._x = value.x;
      this._y = value.y;
    }
  }

  // h - computed: true, optional: true, required: false
  private _h?: number; 
  public get h() {
    return this.getNumberAttribute('h');
  }
  public set h(value: number) {
    this._h = value;
  }
  public resetH() {
    this._h = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hInput() {
    return this._h;
  }

  // static - computed: true, optional: true, required: false
  private _static?: boolean | cdktf.IResolvable; 
  public get static() {
    return this.getBooleanAttribute('static');
  }
  public set static(value: boolean | cdktf.IResolvable) {
    this._static = value;
  }
  public resetStatic() {
    this._static = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticInput() {
    return this._static;
  }

  // w - computed: true, optional: true, required: false
  private _w?: number; 
  public get w() {
    return this.getNumberAttribute('w');
  }
  public set w(value: number) {
    this._w = value;
  }
  public resetW() {
    this._w = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wInput() {
    return this._w;
  }

  // x - computed: true, optional: true, required: false
  private _x?: number; 
  public get x() {
    return this.getNumberAttribute('x');
  }
  public set x(value: number) {
    this._x = value;
  }
  public resetX() {
    this._x = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xInput() {
    return this._x;
  }

  // y - computed: true, optional: true, required: false
  private _y?: number; 
  public get y() {
    return this.getNumberAttribute('y');
  }
  public set y(value: number) {
    this._y = value;
  }
  public resetY() {
    this._y = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yInput() {
    return this._y;
  }
}
export interface DataSchemasPanelDebugLibraryPanel {
  /**
  * Library panel name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug#name DataSchemasPanelDebug#name}
  */
  readonly name: string;
  /**
  * Library panel uid
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug#uid DataSchemasPanelDebug#uid}
  */
  readonly uid: string;
}

export function dataSchemasPanelDebugLibraryPanelToTerraform(struct?: DataSchemasPanelDebugLibraryPanel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    uid: cdktf.stringToTerraform(struct!.uid),
  }
}


export function dataSchemasPanelDebugLibraryPanelToHclTerraform(struct?: DataSchemasPanelDebugLibraryPanel | cdktf.IResolvable): any {
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
    uid: {
      value: cdktf.stringToHclTerraform(struct!.uid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSchemasPanelDebugLibraryPanelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasPanelDebugLibraryPanel | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._uid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uid = this._uid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSchemasPanelDebugLibraryPanel | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._uid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._uid = value.uid;
    }
  }

  // name - computed: true, optional: false, required: true
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

  // uid - computed: true, optional: false, required: true
  private _uid?: string; 
  public get uid() {
    return this.getStringAttribute('uid');
  }
  public set uid(value: string) {
    this._uid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uidInput() {
    return this._uid;
  }
}
export interface DataSchemasPanelDebugLinks {
  /**
  * If true, all dashboards links will be displayed in a dropdown. If false, all dashboards links will be displayed side by side. Only valid if the type is dashboards. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug#as_dropdown DataSchemasPanelDebug#as_dropdown}
  */
  readonly asDropdown?: boolean | cdktf.IResolvable;
  /**
  * Icon name to be displayed with the link
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug#icon DataSchemasPanelDebug#icon}
  */
  readonly icon: string;
  /**
  * If true, includes current template variables values in the link as query params. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug#include_vars DataSchemasPanelDebug#include_vars}
  */
  readonly includeVars?: boolean | cdktf.IResolvable;
  /**
  * If true, includes current time range in the link as query params. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug#keep_time DataSchemasPanelDebug#keep_time}
  */
  readonly keepTime?: boolean | cdktf.IResolvable;
  /**
  * List of tags to limit the linked dashboards. If empty, all dashboards will be displayed. Only valid if the type is dashboards
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug#tags DataSchemasPanelDebug#tags}
  */
  readonly tags?: string[];
  /**
  * If true, the link will be opened in a new tab. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug#target_blank DataSchemasPanelDebug#target_blank}
  */
  readonly targetBlank?: boolean | cdktf.IResolvable;
  /**
  * Title to display with the link
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug#title DataSchemasPanelDebug#title}
  */
  readonly title: string;
  /**
  * Tooltip to display when the user hovers their mouse over it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug#tooltip DataSchemasPanelDebug#tooltip}
  */
  readonly tooltip: string;
  /**
  * Link type. Accepted values are dashboards (to refer to another dashboard) and link (to refer to an external resource)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug#type DataSchemasPanelDebug#type}
  */
  readonly type: string;
  /**
  * Link URL. Only required/valid if the type is link
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug#url DataSchemasPanelDebug#url}
  */
  readonly url: string;
}

export function dataSchemasPanelDebugLinksToTerraform(struct?: DataSchemasPanelDebugLinks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    as_dropdown: cdktf.booleanToTerraform(struct!.asDropdown),
    icon: cdktf.stringToTerraform(struct!.icon),
    include_vars: cdktf.booleanToTerraform(struct!.includeVars),
    keep_time: cdktf.booleanToTerraform(struct!.keepTime),
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
    target_blank: cdktf.booleanToTerraform(struct!.targetBlank),
    title: cdktf.stringToTerraform(struct!.title),
    tooltip: cdktf.stringToTerraform(struct!.tooltip),
    type: cdktf.stringToTerraform(struct!.type),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function dataSchemasPanelDebugLinksToHclTerraform(struct?: DataSchemasPanelDebugLinks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    as_dropdown: {
      value: cdktf.booleanToHclTerraform(struct!.asDropdown),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    icon: {
      value: cdktf.stringToHclTerraform(struct!.icon),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    include_vars: {
      value: cdktf.booleanToHclTerraform(struct!.includeVars),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    keep_time: {
      value: cdktf.booleanToHclTerraform(struct!.keepTime),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    target_blank: {
      value: cdktf.booleanToHclTerraform(struct!.targetBlank),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tooltip: {
      value: cdktf.stringToHclTerraform(struct!.tooltip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSchemasPanelDebugLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSchemasPanelDebugLinks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asDropdown !== undefined) {
      hasAnyValues = true;
      internalValueResult.asDropdown = this._asDropdown;
    }
    if (this._icon !== undefined) {
      hasAnyValues = true;
      internalValueResult.icon = this._icon;
    }
    if (this._includeVars !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeVars = this._includeVars;
    }
    if (this._keepTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepTime = this._keepTime;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._targetBlank !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetBlank = this._targetBlank;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._tooltip !== undefined) {
      hasAnyValues = true;
      internalValueResult.tooltip = this._tooltip;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSchemasPanelDebugLinks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._asDropdown = undefined;
      this._icon = undefined;
      this._includeVars = undefined;
      this._keepTime = undefined;
      this._tags = undefined;
      this._targetBlank = undefined;
      this._title = undefined;
      this._tooltip = undefined;
      this._type = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._asDropdown = value.asDropdown;
      this._icon = value.icon;
      this._includeVars = value.includeVars;
      this._keepTime = value.keepTime;
      this._tags = value.tags;
      this._targetBlank = value.targetBlank;
      this._title = value.title;
      this._tooltip = value.tooltip;
      this._type = value.type;
      this._url = value.url;
    }
  }

  // as_dropdown - computed: true, optional: true, required: false
  private _asDropdown?: boolean | cdktf.IResolvable; 
  public get asDropdown() {
    return this.getBooleanAttribute('as_dropdown');
  }
  public set asDropdown(value: boolean | cdktf.IResolvable) {
    this._asDropdown = value;
  }
  public resetAsDropdown() {
    this._asDropdown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asDropdownInput() {
    return this._asDropdown;
  }

  // icon - computed: false, optional: false, required: true
  private _icon?: string; 
  public get icon() {
    return this.getStringAttribute('icon');
  }
  public set icon(value: string) {
    this._icon = value;
  }
  // Temporarily expose input value. Use with caution.
  public get iconInput() {
    return this._icon;
  }

  // include_vars - computed: true, optional: true, required: false
  private _includeVars?: boolean | cdktf.IResolvable; 
  public get includeVars() {
    return this.getBooleanAttribute('include_vars');
  }
  public set includeVars(value: boolean | cdktf.IResolvable) {
    this._includeVars = value;
  }
  public resetIncludeVars() {
    this._includeVars = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeVarsInput() {
    return this._includeVars;
  }

  // keep_time - computed: true, optional: true, required: false
  private _keepTime?: boolean | cdktf.IResolvable; 
  public get keepTime() {
    return this.getBooleanAttribute('keep_time');
  }
  public set keepTime(value: boolean | cdktf.IResolvable) {
    this._keepTime = value;
  }
  public resetKeepTime() {
    this._keepTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepTimeInput() {
    return this._keepTime;
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

  // target_blank - computed: true, optional: true, required: false
  private _targetBlank?: boolean | cdktf.IResolvable; 
  public get targetBlank() {
    return this.getBooleanAttribute('target_blank');
  }
  public set targetBlank(value: boolean | cdktf.IResolvable) {
    this._targetBlank = value;
  }
  public resetTargetBlank() {
    this._targetBlank = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetBlankInput() {
    return this._targetBlank;
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

  // tooltip - computed: false, optional: false, required: true
  private _tooltip?: string; 
  public get tooltip() {
    return this.getStringAttribute('tooltip');
  }
  public set tooltip(value: string) {
    this._tooltip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tooltipInput() {
    return this._tooltip;
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
}

export class DataSchemasPanelDebugLinksList extends cdktf.ComplexList {
  public internalValue? : DataSchemasPanelDebugLinks[] | cdktf.IResolvable

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
  public get(index: number): DataSchemasPanelDebugLinksOutputReference {
    return new DataSchemasPanelDebugLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSchemasPanelDebugOptionsCounters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug#data_changed DataSchemasPanelDebug#data_changed}
  */
  readonly dataChanged: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug#render DataSchemasPanelDebug#render}
  */
  readonly render: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug#schema_changed DataSchemasPanelDebug#schema_changed}
  */
  readonly schemaChanged: boolean | cdktf.IResolvable;
}

export function dataSchemasPanelDebugOptionsCountersToTerraform(struct?: DataSchemasPanelDebugOptionsCounters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_changed: cdktf.booleanToTerraform(struct!.dataChanged),
    render: cdktf.booleanToTerraform(struct!.render),
    schema_changed: cdktf.booleanToTerraform(struct!.schemaChanged),
  }
}


export function dataSchemasPanelDebugOptionsCountersToHclTerraform(struct?: DataSchemasPanelDebugOptionsCounters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_changed: {
      value: cdktf.booleanToHclTerraform(struct!.dataChanged),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    render: {
      value: cdktf.booleanToHclTerraform(struct!.render),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    schema_changed: {
      value: cdktf.booleanToHclTerraform(struct!.schemaChanged),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSchemasPanelDebugOptionsCountersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasPanelDebugOptionsCounters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataChanged !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataChanged = this._dataChanged;
    }
    if (this._render !== undefined) {
      hasAnyValues = true;
      internalValueResult.render = this._render;
    }
    if (this._schemaChanged !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaChanged = this._schemaChanged;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSchemasPanelDebugOptionsCounters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataChanged = undefined;
      this._render = undefined;
      this._schemaChanged = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataChanged = value.dataChanged;
      this._render = value.render;
      this._schemaChanged = value.schemaChanged;
    }
  }

  // data_changed - computed: true, optional: false, required: true
  private _dataChanged?: boolean | cdktf.IResolvable; 
  public get dataChanged() {
    return this.getBooleanAttribute('data_changed');
  }
  public set dataChanged(value: boolean | cdktf.IResolvable) {
    this._dataChanged = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataChangedInput() {
    return this._dataChanged;
  }

  // render - computed: true, optional: false, required: true
  private _render?: boolean | cdktf.IResolvable; 
  public get render() {
    return this.getBooleanAttribute('render');
  }
  public set render(value: boolean | cdktf.IResolvable) {
    this._render = value;
  }
  // Temporarily expose input value. Use with caution.
  public get renderInput() {
    return this._render;
  }

  // schema_changed - computed: true, optional: false, required: true
  private _schemaChanged?: boolean | cdktf.IResolvable; 
  public get schemaChanged() {
    return this.getBooleanAttribute('schema_changed');
  }
  public set schemaChanged(value: boolean | cdktf.IResolvable) {
    this._schemaChanged = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaChangedInput() {
    return this._schemaChanged;
  }
}
export interface DataSchemasPanelDebugOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug#counters DataSchemasPanelDebug#counters}
  */
  readonly counters?: DataSchemasPanelDebugOptionsCounters;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug#mode DataSchemasPanelDebug#mode}
  */
  readonly mode: string;
}

export function dataSchemasPanelDebugOptionsToTerraform(struct?: DataSchemasPanelDebugOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters: dataSchemasPanelDebugOptionsCountersToTerraform(struct!.counters),
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}


export function dataSchemasPanelDebugOptionsToHclTerraform(struct?: DataSchemasPanelDebugOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    counters: {
      value: dataSchemasPanelDebugOptionsCountersToHclTerraform(struct!.counters),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasPanelDebugOptionsCounters",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSchemasPanelDebugOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasPanelDebugOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters = this._counters?.internalValue;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSchemasPanelDebugOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counters.internalValue = undefined;
      this._mode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._counters.internalValue = value.counters;
      this._mode = value.mode;
    }
  }

  // counters - computed: true, optional: true, required: false
  private _counters = new DataSchemasPanelDebugOptionsCountersOutputReference(this, "counters");
  public get counters() {
    return this._counters;
  }
  public putCounters(value: DataSchemasPanelDebugOptionsCounters) {
    this._counters.internalValue = value;
  }
  public resetCounters() {
    this._counters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countersInput() {
    return this._counters.internalValue;
  }

  // mode - computed: true, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }
}
export interface DataSchemasPanelDebugTransformationsFilter {
}

export function dataSchemasPanelDebugTransformationsFilterToTerraform(struct?: DataSchemasPanelDebugTransformationsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSchemasPanelDebugTransformationsFilterToHclTerraform(struct?: DataSchemasPanelDebugTransformationsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSchemasPanelDebugTransformationsFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasPanelDebugTransformationsFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSchemasPanelDebugTransformationsFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface DataSchemasPanelDebugTransformations {
  /**
  * Disabled transformations are skipped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug#disabled DataSchemasPanelDebug#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Optional frame matcher. When missing it will be applied to all results
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug#filter DataSchemasPanelDebug#filter}
  */
  readonly filter?: DataSchemasPanelDebugTransformationsFilter;
}

export function dataSchemasPanelDebugTransformationsToTerraform(struct?: DataSchemasPanelDebugTransformations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    filter: dataSchemasPanelDebugTransformationsFilterToTerraform(struct!.filter),
  }
}


export function dataSchemasPanelDebugTransformationsToHclTerraform(struct?: DataSchemasPanelDebugTransformations | cdktf.IResolvable): any {
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
    filter: {
      value: dataSchemasPanelDebugTransformationsFilterToHclTerraform(struct!.filter),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasPanelDebugTransformationsFilter",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSchemasPanelDebugTransformationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSchemasPanelDebugTransformations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._filter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSchemasPanelDebugTransformations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disabled = undefined;
      this._filter.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disabled = value.disabled;
      this._filter.internalValue = value.filter;
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

  // filter - computed: true, optional: true, required: false
  private _filter = new DataSchemasPanelDebugTransformationsFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataSchemasPanelDebugTransformationsFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }
}

export class DataSchemasPanelDebugTransformationsList extends cdktf.ComplexList {
  public internalValue? : DataSchemasPanelDebugTransformations[] | cdktf.IResolvable

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
  public get(index: number): DataSchemasPanelDebugTransformationsOutputReference {
    return new DataSchemasPanelDebugTransformationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug schemas_panel_debug}
*/
export class DataSchemasPanelDebug extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "schemas_panel_debug";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSchemasPanelDebug resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSchemasPanelDebug to import
  * @param importFromId The id of the existing DataSchemasPanelDebug that should be imported. Refer to the {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSchemasPanelDebug to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "schemas_panel_debug", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_debug schemas_panel_debug} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSchemasPanelDebugConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataSchemasPanelDebugConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'schemas_panel_debug',
      terraformGeneratorMetadata: {
        providerName: 'schemas',
        providerVersion: '0.2.0',
        providerVersionConstraint: '0.2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._datasource.internalValue = config.datasource;
    this._description = config.description;
    this._fieldConfig.internalValue = config.fieldConfig;
    this._gridPos.internalValue = config.gridPos;
    this._interval = config.interval;
    this._libraryPanel.internalValue = config.libraryPanel;
    this._links.internalValue = config.links;
    this._maxDataPoints = config.maxDataPoints;
    this._options.internalValue = config.options;
    this._pluginVersion = config.pluginVersion;
    this._repeat = config.repeat;
    this._repeatDirection = config.repeatDirection;
    this._repeatPanelId = config.repeatPanelId;
    this._tags = config.tags;
    this._targets = config.targets;
    this._timeFrom = config.timeFrom;
    this._timeShift = config.timeShift;
    this._title = config.title;
    this._transformations.internalValue = config.transformations;
    this._transparent = config.transparent;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // datasource - computed: true, optional: true, required: false
  private _datasource = new DataSchemasPanelDebugDatasourceOutputReference(this, "datasource");
  public get datasource() {
    return this._datasource;
  }
  public putDatasource(value: DataSchemasPanelDebugDatasource) {
    this._datasource.internalValue = value;
  }
  public resetDatasource() {
    this._datasource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasourceInput() {
    return this._datasource.internalValue;
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

  // field_config - computed: true, optional: true, required: false
  private _fieldConfig = new DataSchemasPanelDebugFieldConfigOutputReference(this, "field_config");
  public get fieldConfig() {
    return this._fieldConfig;
  }
  public putFieldConfig(value: DataSchemasPanelDebugFieldConfig) {
    this._fieldConfig.internalValue = value;
  }
  public resetFieldConfig() {
    this._fieldConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldConfigInput() {
    return this._fieldConfig.internalValue;
  }

  // grid_pos - computed: true, optional: true, required: false
  private _gridPos = new DataSchemasPanelDebugGridPosOutputReference(this, "grid_pos");
  public get gridPos() {
    return this._gridPos;
  }
  public putGridPos(value: DataSchemasPanelDebugGridPos) {
    this._gridPos.internalValue = value;
  }
  public resetGridPos() {
    this._gridPos.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gridPosInput() {
    return this._gridPos.internalValue;
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: string; 
  public get interval() {
    return this.getStringAttribute('interval');
  }
  public set interval(value: string) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // library_panel - computed: true, optional: true, required: false
  private _libraryPanel = new DataSchemasPanelDebugLibraryPanelOutputReference(this, "library_panel");
  public get libraryPanel() {
    return this._libraryPanel;
  }
  public putLibraryPanel(value: DataSchemasPanelDebugLibraryPanel) {
    this._libraryPanel.internalValue = value;
  }
  public resetLibraryPanel() {
    this._libraryPanel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get libraryPanelInput() {
    return this._libraryPanel.internalValue;
  }

  // links - computed: false, optional: true, required: false
  private _links = new DataSchemasPanelDebugLinksList(this, "links", false);
  public get links() {
    return this._links;
  }
  public putLinks(value: DataSchemasPanelDebugLinks[] | cdktf.IResolvable) {
    this._links.internalValue = value;
  }
  public resetLinks() {
    this._links.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linksInput() {
    return this._links.internalValue;
  }

  // max_data_points - computed: false, optional: true, required: false
  private _maxDataPoints?: number; 
  public get maxDataPoints() {
    return this.getNumberAttribute('max_data_points');
  }
  public set maxDataPoints(value: number) {
    this._maxDataPoints = value;
  }
  public resetMaxDataPoints() {
    this._maxDataPoints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDataPointsInput() {
    return this._maxDataPoints;
  }

  // options - computed: true, optional: true, required: false
  private _options = new DataSchemasPanelDebugOptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: DataSchemasPanelDebugOptions) {
    this._options.internalValue = value;
  }
  public resetOptions() {
    this._options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }

  // plugin_version - computed: false, optional: true, required: false
  private _pluginVersion?: string; 
  public get pluginVersion() {
    return this.getStringAttribute('plugin_version');
  }
  public set pluginVersion(value: string) {
    this._pluginVersion = value;
  }
  public resetPluginVersion() {
    this._pluginVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginVersionInput() {
    return this._pluginVersion;
  }

  // rendered_json - computed: true, optional: false, required: false
  public get renderedJson() {
    return this.getStringAttribute('rendered_json');
  }

  // repeat - computed: false, optional: true, required: false
  private _repeat?: string; 
  public get repeat() {
    return this.getStringAttribute('repeat');
  }
  public set repeat(value: string) {
    this._repeat = value;
  }
  public resetRepeat() {
    this._repeat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repeatInput() {
    return this._repeat;
  }

  // repeat_direction - computed: true, optional: true, required: false
  private _repeatDirection?: string; 
  public get repeatDirection() {
    return this.getStringAttribute('repeat_direction');
  }
  public set repeatDirection(value: string) {
    this._repeatDirection = value;
  }
  public resetRepeatDirection() {
    this._repeatDirection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repeatDirectionInput() {
    return this._repeatDirection;
  }

  // repeat_panel_id - computed: false, optional: true, required: false
  private _repeatPanelId?: number; 
  public get repeatPanelId() {
    return this.getNumberAttribute('repeat_panel_id');
  }
  public set repeatPanelId(value: number) {
    this._repeatPanelId = value;
  }
  public resetRepeatPanelId() {
    this._repeatPanelId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repeatPanelIdInput() {
    return this._repeatPanelId;
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

  // targets - computed: false, optional: true, required: false
  private _targets?: string[]; 
  public get targets() {
    return this.getListAttribute('targets');
  }
  public set targets(value: string[]) {
    this._targets = value;
  }
  public resetTargets() {
    this._targets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetsInput() {
    return this._targets;
  }

  // time_from - computed: false, optional: true, required: false
  private _timeFrom?: string; 
  public get timeFrom() {
    return this.getStringAttribute('time_from');
  }
  public set timeFrom(value: string) {
    this._timeFrom = value;
  }
  public resetTimeFrom() {
    this._timeFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeFromInput() {
    return this._timeFrom;
  }

  // time_shift - computed: false, optional: true, required: false
  private _timeShift?: string; 
  public get timeShift() {
    return this.getStringAttribute('time_shift');
  }
  public set timeShift(value: string) {
    this._timeShift = value;
  }
  public resetTimeShift() {
    this._timeShift = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeShiftInput() {
    return this._timeShift;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // transformations - computed: false, optional: true, required: false
  private _transformations = new DataSchemasPanelDebugTransformationsList(this, "transformations", false);
  public get transformations() {
    return this._transformations;
  }
  public putTransformations(value: DataSchemasPanelDebugTransformations[] | cdktf.IResolvable) {
    this._transformations.internalValue = value;
  }
  public resetTransformations() {
    this._transformations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformationsInput() {
    return this._transformations.internalValue;
  }

  // transparent - computed: true, optional: true, required: false
  private _transparent?: boolean | cdktf.IResolvable; 
  public get transparent() {
    return this.getBooleanAttribute('transparent');
  }
  public set transparent(value: boolean | cdktf.IResolvable) {
    this._transparent = value;
  }
  public resetTransparent() {
    this._transparent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transparentInput() {
    return this._transparent;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      datasource: dataSchemasPanelDebugDatasourceToTerraform(this._datasource.internalValue),
      description: cdktf.stringToTerraform(this._description),
      field_config: dataSchemasPanelDebugFieldConfigToTerraform(this._fieldConfig.internalValue),
      grid_pos: dataSchemasPanelDebugGridPosToTerraform(this._gridPos.internalValue),
      interval: cdktf.stringToTerraform(this._interval),
      library_panel: dataSchemasPanelDebugLibraryPanelToTerraform(this._libraryPanel.internalValue),
      links: cdktf.listMapper(dataSchemasPanelDebugLinksToTerraform, false)(this._links.internalValue),
      max_data_points: cdktf.numberToTerraform(this._maxDataPoints),
      options: dataSchemasPanelDebugOptionsToTerraform(this._options.internalValue),
      plugin_version: cdktf.stringToTerraform(this._pluginVersion),
      repeat: cdktf.stringToTerraform(this._repeat),
      repeat_direction: cdktf.stringToTerraform(this._repeatDirection),
      repeat_panel_id: cdktf.numberToTerraform(this._repeatPanelId),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      targets: cdktf.listMapper(cdktf.stringToTerraform, false)(this._targets),
      time_from: cdktf.stringToTerraform(this._timeFrom),
      time_shift: cdktf.stringToTerraform(this._timeShift),
      title: cdktf.stringToTerraform(this._title),
      transformations: cdktf.listMapper(dataSchemasPanelDebugTransformationsToTerraform, false)(this._transformations.internalValue),
      transparent: cdktf.booleanToTerraform(this._transparent),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      datasource: {
        value: dataSchemasPanelDebugDatasourceToHclTerraform(this._datasource.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataSchemasPanelDebugDatasource",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      field_config: {
        value: dataSchemasPanelDebugFieldConfigToHclTerraform(this._fieldConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataSchemasPanelDebugFieldConfig",
      },
      grid_pos: {
        value: dataSchemasPanelDebugGridPosToHclTerraform(this._gridPos.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataSchemasPanelDebugGridPos",
      },
      interval: {
        value: cdktf.stringToHclTerraform(this._interval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      library_panel: {
        value: dataSchemasPanelDebugLibraryPanelToHclTerraform(this._libraryPanel.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataSchemasPanelDebugLibraryPanel",
      },
      links: {
        value: cdktf.listMapperHcl(dataSchemasPanelDebugLinksToHclTerraform, false)(this._links.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataSchemasPanelDebugLinksList",
      },
      max_data_points: {
        value: cdktf.numberToHclTerraform(this._maxDataPoints),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      options: {
        value: dataSchemasPanelDebugOptionsToHclTerraform(this._options.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataSchemasPanelDebugOptions",
      },
      plugin_version: {
        value: cdktf.stringToHclTerraform(this._pluginVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      repeat: {
        value: cdktf.stringToHclTerraform(this._repeat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      repeat_direction: {
        value: cdktf.stringToHclTerraform(this._repeatDirection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      repeat_panel_id: {
        value: cdktf.numberToHclTerraform(this._repeatPanelId),
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
      targets: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._targets),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      time_from: {
        value: cdktf.stringToHclTerraform(this._timeFrom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_shift: {
        value: cdktf.stringToHclTerraform(this._timeShift),
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
      transformations: {
        value: cdktf.listMapperHcl(dataSchemasPanelDebugTransformationsToHclTerraform, false)(this._transformations.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataSchemasPanelDebugTransformationsList",
      },
      transparent: {
        value: cdktf.booleanToHclTerraform(this._transparent),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
