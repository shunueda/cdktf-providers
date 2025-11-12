// https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_table
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSchemasPanelTableConfig extends cdktf.TerraformMetaArguments {
  /**
  * The datasource used in all targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_table#datasource DataSchemasPanelTable#datasource}
  */
  readonly datasource?: DataSchemasPanelTableDatasource;
  /**
  * Panel description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_table#description DataSchemasPanelTable#description}
  */
  readonly description?: string;
  /**
  * Field options allow you to change how the data is displayed in your visualizations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_table#field_config DataSchemasPanelTable#field_config}
  */
  readonly fieldConfig?: DataSchemasPanelTableFieldConfig;
  /**
  * Grid position.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_table#grid_pos DataSchemasPanelTable#grid_pos}
  */
  readonly gridPos?: DataSchemasPanelTableGridPos;
  /**
  * The min time interval setting defines a lower limit for the $__interval and $__interval_ms variables.
  * This value must be formatted as a number followed by a valid time
  * identifier like: "40s", "3d", etc.
  * See: https://grafana.com/docs/grafana/latest/panels-visualizations/query-transform-data/#query-options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_table#interval DataSchemasPanelTable#interval}
  */
  readonly interval?: string;
  /**
  * Dynamically load the panel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_table#library_panel DataSchemasPanelTable#library_panel}
  */
  readonly libraryPanel?: DataSchemasPanelTableLibraryPanel;
  /**
  * Panel links.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_table#links DataSchemasPanelTable#links}
  */
  readonly links?: DataSchemasPanelTableLinks[] | cdktf.IResolvable;
  /**
  * The maximum number of data points that the panel queries are retrieving.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_table#max_data_points DataSchemasPanelTable#max_data_points}
  */
  readonly maxDataPoints?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_table#options DataSchemasPanelTable#options}
  */
  readonly options?: DataSchemasPanelTableOptions;
  /**
  * The version of the plugin that is used for this panel. This is used to find the plugin to display the panel and to migrate old panel configs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_table#plugin_version DataSchemasPanelTable#plugin_version}
  */
  readonly pluginVersion?: string;
  /**
  * Name of template variable to repeat for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_table#repeat DataSchemasPanelTable#repeat}
  */
  readonly repeat?: string;
  /**
  * Direction to repeat in if 'repeat' is set.
  * h for horizontal, v for vertical. Defaults to "h".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_table#repeat_direction DataSchemasPanelTable#repeat_direction}
  */
  readonly repeatDirection?: string;
  /**
  * Id of the repeating panel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_table#repeat_panel_id DataSchemasPanelTable#repeat_panel_id}
  */
  readonly repeatPanelId?: number;
  /**
  * Tags for the panel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_table#tags DataSchemasPanelTable#tags}
  */
  readonly tags?: string[];
  /**
  * Depends on the panel plugin. See the plugin documentation for details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_table#targets DataSchemasPanelTable#targets}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_table#time_from DataSchemasPanelTable#time_from}
  */
  readonly timeFrom?: string;
  /**
  * Overrides the time range for individual panels by shifting its start and end relative to the time picker.
  * For example, you can shift the time range for the panel to be two hours earlier than the dashboard time picker setting 2h.
  * Note: Panel time overrides have no effect when the dashboard’s time range is absolute.
  * See: https://grafana.com/docs/grafana/latest/panels-visualizations/query-transform-data/#query-options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_table#time_shift DataSchemasPanelTable#time_shift}
  */
  readonly timeShift?: string;
  /**
  * Panel title.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_table#title DataSchemasPanelTable#title}
  */
  readonly title?: string;
  /**
  * List of transformations that are applied to the panel data before rendering.
  * When there are multiple transformations, Grafana applies them in the order they are listed.
  * Each transformation creates a result set that then passes on to the next transformation in the processing pipeline.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_table#transformations DataSchemasPanelTable#transformations}
  */
  readonly transformations?: DataSchemasPanelTableTransformations[] | cdktf.IResolvable;
  /**
  * Whether to display the panel without a background. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_table#transparent DataSchemasPanelTable#transparent}
  */
  readonly transparent?: boolean | cdktf.IResolvable;
  /**
  * The panel plugin type id. This is used to find the plugin to display the panel. Defaults to "table".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_table#type DataSchemasPanelTable#type}
  */
  readonly type?: string;
}
export interface DataSchemasPanelTableDatasource {
  /**
  * The plugin type-id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_table#type DataSchemasPanelTable#type}
  */
  readonly type?: string;
  /**
  * Specific datasource instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_table#uid DataSchemasPanelTable#uid}
  */
  readonly uid?: string;
}

export function dataSchemasPanelTableDatasourceToTerraform(struct?: DataSchemasPanelTableDatasource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    uid: cdktf.stringToTerraform(struct!.uid),
  }
}


export function dataSchemasPanelTableDatasourceToHclTerraform(struct?: DataSchemasPanelTableDatasource | cdktf.IResolvable): any {
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

export class DataSchemasPanelTableDatasourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasPanelTableDatasource | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataSchemasPanelTableDatasource | cdktf.IResolvable | undefined) {
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
export interface DataSchemasPanelTableFieldConfigDefaultsColor {
  /**
  * The fixed color value for fixed or shades color modes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_table#fixed_color DataSchemasPanelTable#fixed_color}
  */
  readonly fixedColor?: string;
  /**
  * The main color scheme mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_table#mode DataSchemasPanelTable#mode}
  */
  readonly mode: string;
  /**
  * Some visualizations need to know how to assign a series color from by value color schemes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_table#series_by DataSchemasPanelTable#series_by}
  */
  readonly seriesBy?: string;
}

export function dataSchemasPanelTableFieldConfigDefaultsColorToTerraform(struct?: DataSchemasPanelTableFieldConfigDefaultsColor | cdktf.IResolvable): any {
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


export function dataSchemasPanelTableFieldConfigDefaultsColorToHclTerraform(struct?: DataSchemasPanelTableFieldConfigDefaultsColor | cdktf.IResolvable): any {
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

export class DataSchemasPanelTableFieldConfigDefaultsColorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasPanelTableFieldConfigDefaultsColor | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataSchemasPanelTableFieldConfigDefaultsColor | cdktf.IResolvable | undefined) {
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
export interface DataSchemasPanelTableFieldConfigDefaultsCustomHideFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_table#legend DataSchemasPanelTable#legend}
  */
  readonly legend: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_table#tooltip DataSchemasPanelTable#tooltip}
  */
  readonly tooltip: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_table#viz DataSchemasPanelTable#viz}
  */
  readonly viz: boolean | cdktf.IResolvable;
}

export function dataSchemasPanelTableFieldConfigDefaultsCustomHideFromToTerraform(struct?: DataSchemasPanelTableFieldConfigDefaultsCustomHideFrom | cdktf.IResolvable): any {
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


export function dataSchemasPanelTableFieldConfigDefaultsCustomHideFromToHclTerraform(struct?: DataSchemasPanelTableFieldConfigDefaultsCustomHideFrom | cdktf.IResolvable): any {
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

export class DataSchemasPanelTableFieldConfigDefaultsCustomHideFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasPanelTableFieldConfigDefaultsCustomHideFrom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataSchemasPanelTableFieldConfigDefaultsCustomHideFrom | cdktf.IResolvable | undefined) {
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
export interface DataSchemasPanelTableFieldConfigDefaultsCustom {
  /**
  *  Defaults to 70.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_table#fill_opacity DataSchemasPanelTable#fill_opacity}
  */
  readonly fillOpacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_table#hide_from DataSchemasPanelTable#hide_from}
  */
  readonly hideFrom?: DataSchemasPanelTableFieldConfigDefaultsCustomHideFrom;
  /**
  *  Defaults to 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_table#line_width DataSchemasPanelTable#line_width}
  */
  readonly lineWidth?: number;
}

export function dataSchemasPanelTableFieldConfigDefaultsCustomToTerraform(struct?: DataSchemasPanelTableFieldConfigDefaultsCustom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fill_opacity: cdktf.numberToTerraform(struct!.fillOpacity),
    hide_from: dataSchemasPanelTableFieldConfigDefaultsCustomHideFromToTerraform(struct!.hideFrom),
    line_width: cdktf.numberToTerraform(struct!.lineWidth),
  }
}


export function dataSchemasPanelTableFieldConfigDefaultsCustomToHclTerraform(struct?: DataSchemasPanelTableFieldConfigDefaultsCustom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fill_opacity: {
      value: cdktf.numberToHclTerraform(struct!.fillOpacity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hide_from: {
      value: dataSchemasPanelTableFieldConfigDefaultsCustomHideFromToHclTerraform(struct!.hideFrom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasPanelTableFieldConfigDefaultsCustomHideFrom",
    },
    line_width: {
      value: cdktf.numberToHclTerraform(struct!.lineWidth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSchemasPanelTableFieldConfigDefaultsCustomOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasPanelTableFieldConfigDefaultsCustom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fillOpacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.fillOpacity = this._fillOpacity;
    }
    if (this._hideFrom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hideFrom = this._hideFrom?.internalValue;
    }
    if (this._lineWidth !== undefined) {
      hasAnyValues = true;
      internalValueResult.lineWidth = this._lineWidth;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSchemasPanelTableFieldConfigDefaultsCustom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fillOpacity = undefined;
      this._hideFrom.internalValue = undefined;
      this._lineWidth = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fillOpacity = value.fillOpacity;
      this._hideFrom.internalValue = value.hideFrom;
      this._lineWidth = value.lineWidth;
    }
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

  // hide_from - computed: true, optional: true, required: false
  private _hideFrom = new DataSchemasPanelTableFieldConfigDefaultsCustomHideFromOutputReference(this, "hide_from");
  public get hideFrom() {
    return this._hideFrom;
  }
  public putHideFrom(value: DataSchemasPanelTableFieldConfigDefaultsCustomHideFrom) {
    this._hideFrom.internalValue = value;
  }
  public resetHideFrom() {
    this._hideFrom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hideFromInput() {
    return this._hideFrom.internalValue;
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
}
export interface DataSchemasPanelTableFieldConfigDefaultsMappingsRangeMapOptionsResult {
  /**
  * Text to use when the value matches
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_table#color DataSchemasPanelTable#color}
  */
  readonly color?: string;
  /**
  * Icon to display when the value matches. Only specific visualizations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_table#icon DataSchemasPanelTable#icon}
  */
  readonly icon?: string;
  /**
  * Position in the mapping array. Only used internally.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_table#index DataSchemasPanelTable#index}
  */
  readonly index?: number;
  /**
  * Text to display when the value matches
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_table#text DataSchemasPanelTable#text}
  */
  readonly text?: string;
}

export function dataSchemasPanelTableFieldConfigDefaultsMappingsRangeMapOptionsResultToTerraform(struct?: DataSchemasPanelTableFieldConfigDefaultsMappingsRangeMapOptionsResult | cdktf.IResolvable): any {
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


export function dataSchemasPanelTableFieldConfigDefaultsMappingsRangeMapOptionsResultToHclTerraform(struct?: DataSchemasPanelTableFieldConfigDefaultsMappingsRangeMapOptionsResult | cdktf.IResolvable): any {
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

export class DataSchemasPanelTableFieldConfigDefaultsMappingsRangeMapOptionsResultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasPanelTableFieldConfigDefaultsMappingsRangeMapOptionsResult | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataSchemasPanelTableFieldConfigDefaultsMappingsRangeMapOptionsResult | cdktf.IResolvable | undefined) {
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
export interface DataSchemasPanelTableFieldConfigDefaultsMappingsRangeMapOptions {
  /**
  * Min value of the range. It can be null which means -Infinity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_table#from DataSchemasPanelTable#from}
  */
  readonly from: string;
  /**
  * Config to apply when the value is within the range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_table#result DataSchemasPanelTable#result}
  */
  readonly result?: DataSchemasPanelTableFieldConfigDefaultsMappingsRangeMapOptionsResult;
  /**
  * Max value of the range. It can be null which means +Infinity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_table#to DataSchemasPanelTable#to}
  */
  readonly to: string;
}

export function dataSchemasPanelTableFieldConfigDefaultsMappingsRangeMapOptionsToTerraform(struct?: DataSchemasPanelTableFieldConfigDefaultsMappingsRangeMapOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: cdktf.stringToTerraform(struct!.from),
    result: dataSchemasPanelTableFieldConfigDefaultsMappingsRangeMapOptionsResultToTerraform(struct!.result),
    to: cdktf.stringToTerraform(struct!.to),
  }
}


export function dataSchemasPanelTableFieldConfigDefaultsMappingsRangeMapOptionsToHclTerraform(struct?: DataSchemasPanelTableFieldConfigDefaultsMappingsRangeMapOptions | cdktf.IResolvable): any {
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
      value: dataSchemasPanelTableFieldConfigDefaultsMappingsRangeMapOptionsResultToHclTerraform(struct!.result),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasPanelTableFieldConfigDefaultsMappingsRangeMapOptionsResult",
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

export class DataSchemasPanelTableFieldConfigDefaultsMappingsRangeMapOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasPanelTableFieldConfigDefaultsMappingsRangeMapOptions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataSchemasPanelTableFieldConfigDefaultsMappingsRangeMapOptions | cdktf.IResolvable | undefined) {
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
  private _result = new DataSchemasPanelTableFieldConfigDefaultsMappingsRangeMapOptionsResultOutputReference(this, "result");
  public get result() {
    return this._result;
  }
  public putResult(value: DataSchemasPanelTableFieldConfigDefaultsMappingsRangeMapOptionsResult) {
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
export interface DataSchemasPanelTableFieldConfigDefaultsMappingsRangeMap {
  /**
  * Range to match against and the result to apply when the value is within the range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_table#options DataSchemasPanelTable#options}
  */
  readonly options?: DataSchemasPanelTableFieldConfigDefaultsMappingsRangeMapOptions;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_table#type DataSchemasPanelTable#type}
  */
  readonly type: string;
}

export function dataSchemasPanelTableFieldConfigDefaultsMappingsRangeMapToTerraform(struct?: DataSchemasPanelTableFieldConfigDefaultsMappingsRangeMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    options: dataSchemasPanelTableFieldConfigDefaultsMappingsRangeMapOptionsToTerraform(struct!.options),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataSchemasPanelTableFieldConfigDefaultsMappingsRangeMapToHclTerraform(struct?: DataSchemasPanelTableFieldConfigDefaultsMappingsRangeMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    options: {
      value: dataSchemasPanelTableFieldConfigDefaultsMappingsRangeMapOptionsToHclTerraform(struct!.options),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasPanelTableFieldConfigDefaultsMappingsRangeMapOptions",
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

export class DataSchemasPanelTableFieldConfigDefaultsMappingsRangeMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasPanelTableFieldConfigDefaultsMappingsRangeMap | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataSchemasPanelTableFieldConfigDefaultsMappingsRangeMap | cdktf.IResolvable | undefined) {
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
  private _options = new DataSchemasPanelTableFieldConfigDefaultsMappingsRangeMapOptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: DataSchemasPanelTableFieldConfigDefaultsMappingsRangeMapOptions) {
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
export interface DataSchemasPanelTableFieldConfigDefaultsMappingsRegexMapOptionsResult {
  /**
  * Text to use when the value matches
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_table#color DataSchemasPanelTable#color}
  */
  readonly color?: string;
  /**
  * Icon to display when the value matches. Only specific visualizations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_table#icon DataSchemasPanelTable#icon}
  */
  readonly icon?: string;
  /**
  * Position in the mapping array. Only used internally.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_table#index DataSchemasPanelTable#index}
  */
  readonly index?: number;
  /**
  * Text to display when the value matches
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_table#text DataSchemasPanelTable#text}
  */
  readonly text?: string;
}

export function dataSchemasPanelTableFieldConfigDefaultsMappingsRegexMapOptionsResultToTerraform(struct?: DataSchemasPanelTableFieldConfigDefaultsMappingsRegexMapOptionsResult | cdktf.IResolvable): any {
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


export function dataSchemasPanelTableFieldConfigDefaultsMappingsRegexMapOptionsResultToHclTerraform(struct?: DataSchemasPanelTableFieldConfigDefaultsMappingsRegexMapOptionsResult | cdktf.IResolvable): any {
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

export class DataSchemasPanelTableFieldConfigDefaultsMappingsRegexMapOptionsResultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasPanelTableFieldConfigDefaultsMappingsRegexMapOptionsResult | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataSchemasPanelTableFieldConfigDefaultsMappingsRegexMapOptionsResult | cdktf.IResolvable | undefined) {
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
export interface DataSchemasPanelTableFieldConfigDefaultsMappingsRegexMapOptions {
  /**
  * Regular expression to match against
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_table#pattern DataSchemasPanelTable#pattern}
  */
  readonly pattern: string;
  /**
  * Config to apply when the value matches the regex
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_table#result DataSchemasPanelTable#result}
  */
  readonly result?: DataSchemasPanelTableFieldConfigDefaultsMappingsRegexMapOptionsResult;
}

export function dataSchemasPanelTableFieldConfigDefaultsMappingsRegexMapOptionsToTerraform(struct?: DataSchemasPanelTableFieldConfigDefaultsMappingsRegexMapOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pattern: cdktf.stringToTerraform(struct!.pattern),
    result: dataSchemasPanelTableFieldConfigDefaultsMappingsRegexMapOptionsResultToTerraform(struct!.result),
  }
}


export function dataSchemasPanelTableFieldConfigDefaultsMappingsRegexMapOptionsToHclTerraform(struct?: DataSchemasPanelTableFieldConfigDefaultsMappingsRegexMapOptions | cdktf.IResolvable): any {
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
      value: dataSchemasPanelTableFieldConfigDefaultsMappingsRegexMapOptionsResultToHclTerraform(struct!.result),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasPanelTableFieldConfigDefaultsMappingsRegexMapOptionsResult",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSchemasPanelTableFieldConfigDefaultsMappingsRegexMapOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasPanelTableFieldConfigDefaultsMappingsRegexMapOptions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataSchemasPanelTableFieldConfigDefaultsMappingsRegexMapOptions | cdktf.IResolvable | undefined) {
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
  private _result = new DataSchemasPanelTableFieldConfigDefaultsMappingsRegexMapOptionsResultOutputReference(this, "result");
  public get result() {
    return this._result;
  }
  public putResult(value: DataSchemasPanelTableFieldConfigDefaultsMappingsRegexMapOptionsResult) {
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
export interface DataSchemasPanelTableFieldConfigDefaultsMappingsRegexMap {
  /**
  * Regular expression to match against and the result to apply when the value matches the regex
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_table#options DataSchemasPanelTable#options}
  */
  readonly options?: DataSchemasPanelTableFieldConfigDefaultsMappingsRegexMapOptions;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_table#type DataSchemasPanelTable#type}
  */
  readonly type: string;
}

export function dataSchemasPanelTableFieldConfigDefaultsMappingsRegexMapToTerraform(struct?: DataSchemasPanelTableFieldConfigDefaultsMappingsRegexMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    options: dataSchemasPanelTableFieldConfigDefaultsMappingsRegexMapOptionsToTerraform(struct!.options),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataSchemasPanelTableFieldConfigDefaultsMappingsRegexMapToHclTerraform(struct?: DataSchemasPanelTableFieldConfigDefaultsMappingsRegexMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    options: {
      value: dataSchemasPanelTableFieldConfigDefaultsMappingsRegexMapOptionsToHclTerraform(struct!.options),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasPanelTableFieldConfigDefaultsMappingsRegexMapOptions",
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

export class DataSchemasPanelTableFieldConfigDefaultsMappingsRegexMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasPanelTableFieldConfigDefaultsMappingsRegexMap | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataSchemasPanelTableFieldConfigDefaultsMappingsRegexMap | cdktf.IResolvable | undefined) {
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
  private _options = new DataSchemasPanelTableFieldConfigDefaultsMappingsRegexMapOptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: DataSchemasPanelTableFieldConfigDefaultsMappingsRegexMapOptions) {
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
export interface DataSchemasPanelTableFieldConfigDefaultsMappingsSpecialValueMapOptionsResult {
  /**
  * Text to use when the value matches
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_table#color DataSchemasPanelTable#color}
  */
  readonly color?: string;
  /**
  * Icon to display when the value matches. Only specific visualizations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_table#icon DataSchemasPanelTable#icon}
  */
  readonly icon?: string;
  /**
  * Position in the mapping array. Only used internally.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_table#index DataSchemasPanelTable#index}
  */
  readonly index?: number;
  /**
  * Text to display when the value matches
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_table#text DataSchemasPanelTable#text}
  */
  readonly text?: string;
}

export function dataSchemasPanelTableFieldConfigDefaultsMappingsSpecialValueMapOptionsResultToTerraform(struct?: DataSchemasPanelTableFieldConfigDefaultsMappingsSpecialValueMapOptionsResult | cdktf.IResolvable): any {
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


export function dataSchemasPanelTableFieldConfigDefaultsMappingsSpecialValueMapOptionsResultToHclTerraform(struct?: DataSchemasPanelTableFieldConfigDefaultsMappingsSpecialValueMapOptionsResult | cdktf.IResolvable): any {
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

export class DataSchemasPanelTableFieldConfigDefaultsMappingsSpecialValueMapOptionsResultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasPanelTableFieldConfigDefaultsMappingsSpecialValueMapOptionsResult | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataSchemasPanelTableFieldConfigDefaultsMappingsSpecialValueMapOptionsResult | cdktf.IResolvable | undefined) {
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
export interface DataSchemasPanelTableFieldConfigDefaultsMappingsSpecialValueMapOptions {
  /**
  * Special value to match against
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_table#match DataSchemasPanelTable#match}
  */
  readonly match: string;
  /**
  * Config to apply when the value matches the special value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_table#result DataSchemasPanelTable#result}
  */
  readonly result?: DataSchemasPanelTableFieldConfigDefaultsMappingsSpecialValueMapOptionsResult;
}

export function dataSchemasPanelTableFieldConfigDefaultsMappingsSpecialValueMapOptionsToTerraform(struct?: DataSchemasPanelTableFieldConfigDefaultsMappingsSpecialValueMapOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match: cdktf.stringToTerraform(struct!.match),
    result: dataSchemasPanelTableFieldConfigDefaultsMappingsSpecialValueMapOptionsResultToTerraform(struct!.result),
  }
}


export function dataSchemasPanelTableFieldConfigDefaultsMappingsSpecialValueMapOptionsToHclTerraform(struct?: DataSchemasPanelTableFieldConfigDefaultsMappingsSpecialValueMapOptions | cdktf.IResolvable): any {
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
      value: dataSchemasPanelTableFieldConfigDefaultsMappingsSpecialValueMapOptionsResultToHclTerraform(struct!.result),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasPanelTableFieldConfigDefaultsMappingsSpecialValueMapOptionsResult",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSchemasPanelTableFieldConfigDefaultsMappingsSpecialValueMapOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasPanelTableFieldConfigDefaultsMappingsSpecialValueMapOptions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataSchemasPanelTableFieldConfigDefaultsMappingsSpecialValueMapOptions | cdktf.IResolvable | undefined) {
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
  private _result = new DataSchemasPanelTableFieldConfigDefaultsMappingsSpecialValueMapOptionsResultOutputReference(this, "result");
  public get result() {
    return this._result;
  }
  public putResult(value: DataSchemasPanelTableFieldConfigDefaultsMappingsSpecialValueMapOptionsResult) {
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
export interface DataSchemasPanelTableFieldConfigDefaultsMappingsSpecialValueMap {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_table#options DataSchemasPanelTable#options}
  */
  readonly options?: DataSchemasPanelTableFieldConfigDefaultsMappingsSpecialValueMapOptions;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_table#type DataSchemasPanelTable#type}
  */
  readonly type: string;
}

export function dataSchemasPanelTableFieldConfigDefaultsMappingsSpecialValueMapToTerraform(struct?: DataSchemasPanelTableFieldConfigDefaultsMappingsSpecialValueMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    options: dataSchemasPanelTableFieldConfigDefaultsMappingsSpecialValueMapOptionsToTerraform(struct!.options),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataSchemasPanelTableFieldConfigDefaultsMappingsSpecialValueMapToHclTerraform(struct?: DataSchemasPanelTableFieldConfigDefaultsMappingsSpecialValueMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    options: {
      value: dataSchemasPanelTableFieldConfigDefaultsMappingsSpecialValueMapOptionsToHclTerraform(struct!.options),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasPanelTableFieldConfigDefaultsMappingsSpecialValueMapOptions",
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

export class DataSchemasPanelTableFieldConfigDefaultsMappingsSpecialValueMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasPanelTableFieldConfigDefaultsMappingsSpecialValueMap | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataSchemasPanelTableFieldConfigDefaultsMappingsSpecialValueMap | cdktf.IResolvable | undefined) {
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
  private _options = new DataSchemasPanelTableFieldConfigDefaultsMappingsSpecialValueMapOptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: DataSchemasPanelTableFieldConfigDefaultsMappingsSpecialValueMapOptions) {
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
export interface DataSchemasPanelTableFieldConfigDefaultsMappingsValueMapOptions {
  /**
  * Text to use when the value matches
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_table#color DataSchemasPanelTable#color}
  */
  readonly color?: string;
  /**
  * Icon to display when the value matches. Only specific visualizations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_table#icon DataSchemasPanelTable#icon}
  */
  readonly icon?: string;
  /**
  * Position in the mapping array. Only used internally.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_table#index DataSchemasPanelTable#index}
  */
  readonly index?: number;
  /**
  * Text to display when the value matches
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_table#text DataSchemasPanelTable#text}
  */
  readonly text?: string;
}

export function dataSchemasPanelTableFieldConfigDefaultsMappingsValueMapOptionsToTerraform(struct?: DataSchemasPanelTableFieldConfigDefaultsMappingsValueMapOptions | cdktf.IResolvable): any {
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


export function dataSchemasPanelTableFieldConfigDefaultsMappingsValueMapOptionsToHclTerraform(struct?: DataSchemasPanelTableFieldConfigDefaultsMappingsValueMapOptions | cdktf.IResolvable): any {
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

export class DataSchemasPanelTableFieldConfigDefaultsMappingsValueMapOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSchemasPanelTableFieldConfigDefaultsMappingsValueMapOptions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataSchemasPanelTableFieldConfigDefaultsMappingsValueMapOptions | cdktf.IResolvable | undefined) {
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

export class DataSchemasPanelTableFieldConfigDefaultsMappingsValueMapOptionsMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: DataSchemasPanelTableFieldConfigDefaultsMappingsValueMapOptions } | cdktf.IResolvable

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
  public get(key: string): DataSchemasPanelTableFieldConfigDefaultsMappingsValueMapOptionsOutputReference {
    return new DataSchemasPanelTableFieldConfigDefaultsMappingsValueMapOptionsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataSchemasPanelTableFieldConfigDefaultsMappingsValueMap {
  /**
  * Map with <value_to_match>: ValueMappingResult. For example: { "10": { text: "Perfection!", color: "green" } }
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_table#options DataSchemasPanelTable#options}
  */
  readonly options?: { [key: string]: DataSchemasPanelTableFieldConfigDefaultsMappingsValueMapOptions } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_table#type DataSchemasPanelTable#type}
  */
  readonly type: string;
}

export function dataSchemasPanelTableFieldConfigDefaultsMappingsValueMapToTerraform(struct?: DataSchemasPanelTableFieldConfigDefaultsMappingsValueMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    options: cdktf.hashMapper(dataSchemasPanelTableFieldConfigDefaultsMappingsValueMapOptionsToTerraform)(struct!.options),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataSchemasPanelTableFieldConfigDefaultsMappingsValueMapToHclTerraform(struct?: DataSchemasPanelTableFieldConfigDefaultsMappingsValueMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    options: {
      value: cdktf.hashMapperHcl(dataSchemasPanelTableFieldConfigDefaultsMappingsValueMapOptionsToHclTerraform)(struct!.options),
      isBlock: true,
      type: "map",
      storageClassType: "DataSchemasPanelTableFieldConfigDefaultsMappingsValueMapOptionsMap",
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

export class DataSchemasPanelTableFieldConfigDefaultsMappingsValueMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasPanelTableFieldConfigDefaultsMappingsValueMap | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataSchemasPanelTableFieldConfigDefaultsMappingsValueMap | cdktf.IResolvable | undefined) {
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
  private _options = new DataSchemasPanelTableFieldConfigDefaultsMappingsValueMapOptionsMap(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: { [key: string]: DataSchemasPanelTableFieldConfigDefaultsMappingsValueMapOptions } | cdktf.IResolvable) {
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
export interface DataSchemasPanelTableFieldConfigDefaultsMappings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_table#range_map DataSchemasPanelTable#range_map}
  */
  readonly rangeMap?: DataSchemasPanelTableFieldConfigDefaultsMappingsRangeMap;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_table#regex_map DataSchemasPanelTable#regex_map}
  */
  readonly regexMap?: DataSchemasPanelTableFieldConfigDefaultsMappingsRegexMap;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_table#special_value_map DataSchemasPanelTable#special_value_map}
  */
  readonly specialValueMap?: DataSchemasPanelTableFieldConfigDefaultsMappingsSpecialValueMap;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_table#value_map DataSchemasPanelTable#value_map}
  */
  readonly valueMap?: DataSchemasPanelTableFieldConfigDefaultsMappingsValueMap;
}

export function dataSchemasPanelTableFieldConfigDefaultsMappingsToTerraform(struct?: DataSchemasPanelTableFieldConfigDefaultsMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    range_map: dataSchemasPanelTableFieldConfigDefaultsMappingsRangeMapToTerraform(struct!.rangeMap),
    regex_map: dataSchemasPanelTableFieldConfigDefaultsMappingsRegexMapToTerraform(struct!.regexMap),
    special_value_map: dataSchemasPanelTableFieldConfigDefaultsMappingsSpecialValueMapToTerraform(struct!.specialValueMap),
    value_map: dataSchemasPanelTableFieldConfigDefaultsMappingsValueMapToTerraform(struct!.valueMap),
  }
}


export function dataSchemasPanelTableFieldConfigDefaultsMappingsToHclTerraform(struct?: DataSchemasPanelTableFieldConfigDefaultsMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    range_map: {
      value: dataSchemasPanelTableFieldConfigDefaultsMappingsRangeMapToHclTerraform(struct!.rangeMap),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasPanelTableFieldConfigDefaultsMappingsRangeMap",
    },
    regex_map: {
      value: dataSchemasPanelTableFieldConfigDefaultsMappingsRegexMapToHclTerraform(struct!.regexMap),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasPanelTableFieldConfigDefaultsMappingsRegexMap",
    },
    special_value_map: {
      value: dataSchemasPanelTableFieldConfigDefaultsMappingsSpecialValueMapToHclTerraform(struct!.specialValueMap),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasPanelTableFieldConfigDefaultsMappingsSpecialValueMap",
    },
    value_map: {
      value: dataSchemasPanelTableFieldConfigDefaultsMappingsValueMapToHclTerraform(struct!.valueMap),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasPanelTableFieldConfigDefaultsMappingsValueMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSchemasPanelTableFieldConfigDefaultsMappingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSchemasPanelTableFieldConfigDefaultsMappings | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataSchemasPanelTableFieldConfigDefaultsMappings | cdktf.IResolvable | undefined) {
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
  private _rangeMap = new DataSchemasPanelTableFieldConfigDefaultsMappingsRangeMapOutputReference(this, "range_map");
  public get rangeMap() {
    return this._rangeMap;
  }
  public putRangeMap(value: DataSchemasPanelTableFieldConfigDefaultsMappingsRangeMap) {
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
  private _regexMap = new DataSchemasPanelTableFieldConfigDefaultsMappingsRegexMapOutputReference(this, "regex_map");
  public get regexMap() {
    return this._regexMap;
  }
  public putRegexMap(value: DataSchemasPanelTableFieldConfigDefaultsMappingsRegexMap) {
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
  private _specialValueMap = new DataSchemasPanelTableFieldConfigDefaultsMappingsSpecialValueMapOutputReference(this, "special_value_map");
  public get specialValueMap() {
    return this._specialValueMap;
  }
  public putSpecialValueMap(value: DataSchemasPanelTableFieldConfigDefaultsMappingsSpecialValueMap) {
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
  private _valueMap = new DataSchemasPanelTableFieldConfigDefaultsMappingsValueMapOutputReference(this, "value_map");
  public get valueMap() {
    return this._valueMap;
  }
  public putValueMap(value: DataSchemasPanelTableFieldConfigDefaultsMappingsValueMap) {
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

export class DataSchemasPanelTableFieldConfigDefaultsMappingsList extends cdktf.ComplexList {
  public internalValue? : DataSchemasPanelTableFieldConfigDefaultsMappings[] | cdktf.IResolvable

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
  public get(index: number): DataSchemasPanelTableFieldConfigDefaultsMappingsOutputReference {
    return new DataSchemasPanelTableFieldConfigDefaultsMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSchemasPanelTableFieldConfigDefaultsThresholdsSteps {
  /**
  * Color represents the color of the visual change that will occur in the dashboard when the threshold value is met or exceeded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_table#color DataSchemasPanelTable#color}
  */
  readonly color: string;
  /**
  * Value represents a specified metric for the threshold, which triggers a visual change in the dashboard when this value is met or exceeded.
  * Nulls currently appear here when serializing -Infinity to JSON.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_table#value DataSchemasPanelTable#value}
  */
  readonly value: string;
}

export function dataSchemasPanelTableFieldConfigDefaultsThresholdsStepsToTerraform(struct?: DataSchemasPanelTableFieldConfigDefaultsThresholdsSteps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktf.stringToTerraform(struct!.color),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataSchemasPanelTableFieldConfigDefaultsThresholdsStepsToHclTerraform(struct?: DataSchemasPanelTableFieldConfigDefaultsThresholdsSteps | cdktf.IResolvable): any {
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

export class DataSchemasPanelTableFieldConfigDefaultsThresholdsStepsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSchemasPanelTableFieldConfigDefaultsThresholdsSteps | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataSchemasPanelTableFieldConfigDefaultsThresholdsSteps | cdktf.IResolvable | undefined) {
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

export class DataSchemasPanelTableFieldConfigDefaultsThresholdsStepsList extends cdktf.ComplexList {
  public internalValue? : DataSchemasPanelTableFieldConfigDefaultsThresholdsSteps[] | cdktf.IResolvable

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
  public get(index: number): DataSchemasPanelTableFieldConfigDefaultsThresholdsStepsOutputReference {
    return new DataSchemasPanelTableFieldConfigDefaultsThresholdsStepsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSchemasPanelTableFieldConfigDefaultsThresholds {
  /**
  * Thresholds mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_table#mode DataSchemasPanelTable#mode}
  */
  readonly mode: string;
  /**
  * Must be sorted by 'value', first value is always -Infinity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_table#steps DataSchemasPanelTable#steps}
  */
  readonly steps?: DataSchemasPanelTableFieldConfigDefaultsThresholdsSteps[] | cdktf.IResolvable;
}

export function dataSchemasPanelTableFieldConfigDefaultsThresholdsToTerraform(struct?: DataSchemasPanelTableFieldConfigDefaultsThresholds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
    steps: cdktf.listMapper(dataSchemasPanelTableFieldConfigDefaultsThresholdsStepsToTerraform, false)(struct!.steps),
  }
}


export function dataSchemasPanelTableFieldConfigDefaultsThresholdsToHclTerraform(struct?: DataSchemasPanelTableFieldConfigDefaultsThresholds | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataSchemasPanelTableFieldConfigDefaultsThresholdsStepsToHclTerraform, false)(struct!.steps),
      isBlock: true,
      type: "list",
      storageClassType: "DataSchemasPanelTableFieldConfigDefaultsThresholdsStepsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSchemasPanelTableFieldConfigDefaultsThresholdsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasPanelTableFieldConfigDefaultsThresholds | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataSchemasPanelTableFieldConfigDefaultsThresholds | cdktf.IResolvable | undefined) {
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
  private _steps = new DataSchemasPanelTableFieldConfigDefaultsThresholdsStepsList(this, "steps", false);
  public get steps() {
    return this._steps;
  }
  public putSteps(value: DataSchemasPanelTableFieldConfigDefaultsThresholdsSteps[] | cdktf.IResolvable) {
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
export interface DataSchemasPanelTableFieldConfigDefaults {
  /**
  * Panel color configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_table#color DataSchemasPanelTable#color}
  */
  readonly color?: DataSchemasPanelTableFieldConfigDefaultsColor;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_table#custom DataSchemasPanelTable#custom}
  */
  readonly custom?: DataSchemasPanelTableFieldConfigDefaultsCustom;
  /**
  * Specify the number of decimals Grafana includes in the rendered value.
  * If you leave this field blank, Grafana automatically truncates the number of decimals based on the value.
  * For example 1.1234 will display as 1.12 and 100.456 will display as 100.
  * To display all decimals, set the unit to String.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_table#decimals DataSchemasPanelTable#decimals}
  */
  readonly decimals?: number;
  /**
  * Human readable field metadata
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_table#description DataSchemasPanelTable#description}
  */
  readonly description?: string;
  /**
  * The display value for this field.  This supports template variables blank is auto
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_table#display_name DataSchemasPanelTable#display_name}
  */
  readonly displayName?: string;
  /**
  * This can be used by data sources that return and explicit naming structure for values and labels
  * When this property is configured, this value is used rather than the default naming strategy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_table#display_name_from_ds DataSchemasPanelTable#display_name_from_ds}
  */
  readonly displayNameFromDs?: string;
  /**
  * True if data source field supports ad-hoc filters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_table#filterable DataSchemasPanelTable#filterable}
  */
  readonly filterable?: boolean | cdktf.IResolvable;
  /**
  * Convert input values into a display string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_table#mappings DataSchemasPanelTable#mappings}
  */
  readonly mappings?: DataSchemasPanelTableFieldConfigDefaultsMappings[] | cdktf.IResolvable;
  /**
  * The maximum value used in percentage threshold calculations. Leave blank for auto calculation based on all series and fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_table#max DataSchemasPanelTable#max}
  */
  readonly max?: number;
  /**
  * The minimum value used in percentage threshold calculations. Leave blank for auto calculation based on all series and fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_table#min DataSchemasPanelTable#min}
  */
  readonly min?: number;
  /**
  * Alternative to empty string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_table#no_value DataSchemasPanelTable#no_value}
  */
  readonly noValue?: string;
  /**
  * An explicit path to the field in the datasource.  When the frame meta includes a path,
  * This will default to ${frame.meta.path}/${field.name}
  * 
  * When defined, this value can be used as an identifier within the datasource scope, and
  * may be used to update the results
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_table#path DataSchemasPanelTable#path}
  */
  readonly path?: string;
  /**
  * Map numeric values to states
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_table#thresholds DataSchemasPanelTable#thresholds}
  */
  readonly thresholds?: DataSchemasPanelTableFieldConfigDefaultsThresholds;
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_table#unit DataSchemasPanelTable#unit}
  */
  readonly unit?: string;
  /**
  * True if data source can write a value to the path. Auth/authz are supported separately
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_table#writeable DataSchemasPanelTable#writeable}
  */
  readonly writeable?: boolean | cdktf.IResolvable;
}

export function dataSchemasPanelTableFieldConfigDefaultsToTerraform(struct?: DataSchemasPanelTableFieldConfigDefaults | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: dataSchemasPanelTableFieldConfigDefaultsColorToTerraform(struct!.color),
    custom: dataSchemasPanelTableFieldConfigDefaultsCustomToTerraform(struct!.custom),
    decimals: cdktf.numberToTerraform(struct!.decimals),
    description: cdktf.stringToTerraform(struct!.description),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    display_name_from_ds: cdktf.stringToTerraform(struct!.displayNameFromDs),
    filterable: cdktf.booleanToTerraform(struct!.filterable),
    mappings: cdktf.listMapper(dataSchemasPanelTableFieldConfigDefaultsMappingsToTerraform, false)(struct!.mappings),
    max: cdktf.numberToTerraform(struct!.max),
    min: cdktf.numberToTerraform(struct!.min),
    no_value: cdktf.stringToTerraform(struct!.noValue),
    path: cdktf.stringToTerraform(struct!.path),
    thresholds: dataSchemasPanelTableFieldConfigDefaultsThresholdsToTerraform(struct!.thresholds),
    unit: cdktf.stringToTerraform(struct!.unit),
    writeable: cdktf.booleanToTerraform(struct!.writeable),
  }
}


export function dataSchemasPanelTableFieldConfigDefaultsToHclTerraform(struct?: DataSchemasPanelTableFieldConfigDefaults | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    color: {
      value: dataSchemasPanelTableFieldConfigDefaultsColorToHclTerraform(struct!.color),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasPanelTableFieldConfigDefaultsColor",
    },
    custom: {
      value: dataSchemasPanelTableFieldConfigDefaultsCustomToHclTerraform(struct!.custom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasPanelTableFieldConfigDefaultsCustom",
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
      value: cdktf.listMapperHcl(dataSchemasPanelTableFieldConfigDefaultsMappingsToHclTerraform, false)(struct!.mappings),
      isBlock: true,
      type: "list",
      storageClassType: "DataSchemasPanelTableFieldConfigDefaultsMappingsList",
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
      value: dataSchemasPanelTableFieldConfigDefaultsThresholdsToHclTerraform(struct!.thresholds),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasPanelTableFieldConfigDefaultsThresholds",
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

export class DataSchemasPanelTableFieldConfigDefaultsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasPanelTableFieldConfigDefaults | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataSchemasPanelTableFieldConfigDefaults | cdktf.IResolvable | undefined) {
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
  private _color = new DataSchemasPanelTableFieldConfigDefaultsColorOutputReference(this, "color");
  public get color() {
    return this._color;
  }
  public putColor(value: DataSchemasPanelTableFieldConfigDefaultsColor) {
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
  private _custom = new DataSchemasPanelTableFieldConfigDefaultsCustomOutputReference(this, "custom");
  public get custom() {
    return this._custom;
  }
  public putCustom(value: DataSchemasPanelTableFieldConfigDefaultsCustom) {
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
  private _mappings = new DataSchemasPanelTableFieldConfigDefaultsMappingsList(this, "mappings", false);
  public get mappings() {
    return this._mappings;
  }
  public putMappings(value: DataSchemasPanelTableFieldConfigDefaultsMappings[] | cdktf.IResolvable) {
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
  private _thresholds = new DataSchemasPanelTableFieldConfigDefaultsThresholdsOutputReference(this, "thresholds");
  public get thresholds() {
    return this._thresholds;
  }
  public putThresholds(value: DataSchemasPanelTableFieldConfigDefaultsThresholds) {
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
export interface DataSchemasPanelTableFieldConfigOverridesMatcher {
}

export function dataSchemasPanelTableFieldConfigOverridesMatcherToTerraform(struct?: DataSchemasPanelTableFieldConfigOverridesMatcher | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSchemasPanelTableFieldConfigOverridesMatcherToHclTerraform(struct?: DataSchemasPanelTableFieldConfigOverridesMatcher | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSchemasPanelTableFieldConfigOverridesMatcherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasPanelTableFieldConfigOverridesMatcher | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSchemasPanelTableFieldConfigOverridesMatcher | cdktf.IResolvable | undefined) {
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
export interface DataSchemasPanelTableFieldConfigOverridesProperties {
}

export function dataSchemasPanelTableFieldConfigOverridesPropertiesToTerraform(struct?: DataSchemasPanelTableFieldConfigOverridesProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSchemasPanelTableFieldConfigOverridesPropertiesToHclTerraform(struct?: DataSchemasPanelTableFieldConfigOverridesProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSchemasPanelTableFieldConfigOverridesPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSchemasPanelTableFieldConfigOverridesProperties | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSchemasPanelTableFieldConfigOverridesProperties | cdktf.IResolvable | undefined) {
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

export class DataSchemasPanelTableFieldConfigOverridesPropertiesList extends cdktf.ComplexList {
  public internalValue? : DataSchemasPanelTableFieldConfigOverridesProperties[] | cdktf.IResolvable

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
  public get(index: number): DataSchemasPanelTableFieldConfigOverridesPropertiesOutputReference {
    return new DataSchemasPanelTableFieldConfigOverridesPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSchemasPanelTableFieldConfigOverrides {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_table#matcher DataSchemasPanelTable#matcher}
  */
  readonly matcher?: DataSchemasPanelTableFieldConfigOverridesMatcher;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_table#properties DataSchemasPanelTable#properties}
  */
  readonly properties?: DataSchemasPanelTableFieldConfigOverridesProperties[] | cdktf.IResolvable;
}

export function dataSchemasPanelTableFieldConfigOverridesToTerraform(struct?: DataSchemasPanelTableFieldConfigOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    matcher: dataSchemasPanelTableFieldConfigOverridesMatcherToTerraform(struct!.matcher),
    properties: cdktf.listMapper(dataSchemasPanelTableFieldConfigOverridesPropertiesToTerraform, false)(struct!.properties),
  }
}


export function dataSchemasPanelTableFieldConfigOverridesToHclTerraform(struct?: DataSchemasPanelTableFieldConfigOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    matcher: {
      value: dataSchemasPanelTableFieldConfigOverridesMatcherToHclTerraform(struct!.matcher),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasPanelTableFieldConfigOverridesMatcher",
    },
    properties: {
      value: cdktf.listMapperHcl(dataSchemasPanelTableFieldConfigOverridesPropertiesToHclTerraform, false)(struct!.properties),
      isBlock: true,
      type: "list",
      storageClassType: "DataSchemasPanelTableFieldConfigOverridesPropertiesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSchemasPanelTableFieldConfigOverridesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSchemasPanelTableFieldConfigOverrides | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataSchemasPanelTableFieldConfigOverrides | cdktf.IResolvable | undefined) {
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
  private _matcher = new DataSchemasPanelTableFieldConfigOverridesMatcherOutputReference(this, "matcher");
  public get matcher() {
    return this._matcher;
  }
  public putMatcher(value: DataSchemasPanelTableFieldConfigOverridesMatcher) {
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
  private _properties = new DataSchemasPanelTableFieldConfigOverridesPropertiesList(this, "properties", false);
  public get properties() {
    return this._properties;
  }
  public putProperties(value: DataSchemasPanelTableFieldConfigOverridesProperties[] | cdktf.IResolvable) {
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

export class DataSchemasPanelTableFieldConfigOverridesList extends cdktf.ComplexList {
  public internalValue? : DataSchemasPanelTableFieldConfigOverrides[] | cdktf.IResolvable

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
  public get(index: number): DataSchemasPanelTableFieldConfigOverridesOutputReference {
    return new DataSchemasPanelTableFieldConfigOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSchemasPanelTableFieldConfig {
  /**
  * Defaults are the options applied to all fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_table#defaults DataSchemasPanelTable#defaults}
  */
  readonly defaults?: DataSchemasPanelTableFieldConfigDefaults;
  /**
  * Overrides are the options applied to specific fields overriding the defaults.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_table#overrides DataSchemasPanelTable#overrides}
  */
  readonly overrides?: DataSchemasPanelTableFieldConfigOverrides[] | cdktf.IResolvable;
}

export function dataSchemasPanelTableFieldConfigToTerraform(struct?: DataSchemasPanelTableFieldConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    defaults: dataSchemasPanelTableFieldConfigDefaultsToTerraform(struct!.defaults),
    overrides: cdktf.listMapper(dataSchemasPanelTableFieldConfigOverridesToTerraform, false)(struct!.overrides),
  }
}


export function dataSchemasPanelTableFieldConfigToHclTerraform(struct?: DataSchemasPanelTableFieldConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    defaults: {
      value: dataSchemasPanelTableFieldConfigDefaultsToHclTerraform(struct!.defaults),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasPanelTableFieldConfigDefaults",
    },
    overrides: {
      value: cdktf.listMapperHcl(dataSchemasPanelTableFieldConfigOverridesToHclTerraform, false)(struct!.overrides),
      isBlock: true,
      type: "list",
      storageClassType: "DataSchemasPanelTableFieldConfigOverridesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSchemasPanelTableFieldConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasPanelTableFieldConfig | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataSchemasPanelTableFieldConfig | cdktf.IResolvable | undefined) {
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
  private _defaults = new DataSchemasPanelTableFieldConfigDefaultsOutputReference(this, "defaults");
  public get defaults() {
    return this._defaults;
  }
  public putDefaults(value: DataSchemasPanelTableFieldConfigDefaults) {
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
  private _overrides = new DataSchemasPanelTableFieldConfigOverridesList(this, "overrides", false);
  public get overrides() {
    return this._overrides;
  }
  public putOverrides(value: DataSchemasPanelTableFieldConfigOverrides[] | cdktf.IResolvable) {
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
export interface DataSchemasPanelTableGridPos {
  /**
  * Panel height. The height is the number of rows from the top edge of the panel. Defaults to 9.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_table#h DataSchemasPanelTable#h}
  */
  readonly h?: number;
  /**
  * Whether the panel is fixed within the grid. If true, the panel will not be affected by other panels' interactions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_table#static DataSchemasPanelTable#static}
  */
  readonly static?: boolean | cdktf.IResolvable;
  /**
  * Panel width. The width is the number of columns from the left edge of the panel. Defaults to 12.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_table#w DataSchemasPanelTable#w}
  */
  readonly w?: number;
  /**
  * Panel x. The x coordinate is the number of columns from the left edge of the grid. Defaults to 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_table#x DataSchemasPanelTable#x}
  */
  readonly x?: number;
  /**
  * Panel y. The y coordinate is the number of rows from the top edge of the grid. Defaults to 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_table#y DataSchemasPanelTable#y}
  */
  readonly y?: number;
}

export function dataSchemasPanelTableGridPosToTerraform(struct?: DataSchemasPanelTableGridPos | cdktf.IResolvable): any {
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


export function dataSchemasPanelTableGridPosToHclTerraform(struct?: DataSchemasPanelTableGridPos | cdktf.IResolvable): any {
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

export class DataSchemasPanelTableGridPosOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasPanelTableGridPos | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataSchemasPanelTableGridPos | cdktf.IResolvable | undefined) {
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
export interface DataSchemasPanelTableLibraryPanel {
  /**
  * Library panel name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_table#name DataSchemasPanelTable#name}
  */
  readonly name: string;
  /**
  * Library panel uid
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_table#uid DataSchemasPanelTable#uid}
  */
  readonly uid: string;
}

export function dataSchemasPanelTableLibraryPanelToTerraform(struct?: DataSchemasPanelTableLibraryPanel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    uid: cdktf.stringToTerraform(struct!.uid),
  }
}


export function dataSchemasPanelTableLibraryPanelToHclTerraform(struct?: DataSchemasPanelTableLibraryPanel | cdktf.IResolvable): any {
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

export class DataSchemasPanelTableLibraryPanelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasPanelTableLibraryPanel | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataSchemasPanelTableLibraryPanel | cdktf.IResolvable | undefined) {
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
export interface DataSchemasPanelTableLinks {
  /**
  * If true, all dashboards links will be displayed in a dropdown. If false, all dashboards links will be displayed side by side. Only valid if the type is dashboards. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_table#as_dropdown DataSchemasPanelTable#as_dropdown}
  */
  readonly asDropdown?: boolean | cdktf.IResolvable;
  /**
  * Icon name to be displayed with the link
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_table#icon DataSchemasPanelTable#icon}
  */
  readonly icon: string;
  /**
  * If true, includes current template variables values in the link as query params. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_table#include_vars DataSchemasPanelTable#include_vars}
  */
  readonly includeVars?: boolean | cdktf.IResolvable;
  /**
  * If true, includes current time range in the link as query params. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_table#keep_time DataSchemasPanelTable#keep_time}
  */
  readonly keepTime?: boolean | cdktf.IResolvable;
  /**
  * List of tags to limit the linked dashboards. If empty, all dashboards will be displayed. Only valid if the type is dashboards
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_table#tags DataSchemasPanelTable#tags}
  */
  readonly tags?: string[];
  /**
  * If true, the link will be opened in a new tab. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_table#target_blank DataSchemasPanelTable#target_blank}
  */
  readonly targetBlank?: boolean | cdktf.IResolvable;
  /**
  * Title to display with the link
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_table#title DataSchemasPanelTable#title}
  */
  readonly title: string;
  /**
  * Tooltip to display when the user hovers their mouse over it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_table#tooltip DataSchemasPanelTable#tooltip}
  */
  readonly tooltip: string;
  /**
  * Link type. Accepted values are dashboards (to refer to another dashboard) and link (to refer to an external resource)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_table#type DataSchemasPanelTable#type}
  */
  readonly type: string;
  /**
  * Link URL. Only required/valid if the type is link
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_table#url DataSchemasPanelTable#url}
  */
  readonly url: string;
}

export function dataSchemasPanelTableLinksToTerraform(struct?: DataSchemasPanelTableLinks | cdktf.IResolvable): any {
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


export function dataSchemasPanelTableLinksToHclTerraform(struct?: DataSchemasPanelTableLinks | cdktf.IResolvable): any {
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

export class DataSchemasPanelTableLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSchemasPanelTableLinks | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataSchemasPanelTableLinks | cdktf.IResolvable | undefined) {
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

export class DataSchemasPanelTableLinksList extends cdktf.ComplexList {
  public internalValue? : DataSchemasPanelTableLinks[] | cdktf.IResolvable

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
  public get(index: number): DataSchemasPanelTableLinksOutputReference {
    return new DataSchemasPanelTableLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSchemasPanelTableOptionsFooterTableFooterOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_table#count_rows DataSchemasPanelTable#count_rows}
  */
  readonly countRows?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_table#enable_pagination DataSchemasPanelTable#enable_pagination}
  */
  readonly enablePagination?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_table#fields DataSchemasPanelTable#fields}
  */
  readonly fields?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_table#show DataSchemasPanelTable#show}
  */
  readonly show: boolean | cdktf.IResolvable;
}

export function dataSchemasPanelTableOptionsFooterTableFooterOptionsToTerraform(struct?: DataSchemasPanelTableOptionsFooterTableFooterOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count_rows: cdktf.booleanToTerraform(struct!.countRows),
    enable_pagination: cdktf.booleanToTerraform(struct!.enablePagination),
    fields: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fields),
    show: cdktf.booleanToTerraform(struct!.show),
  }
}


export function dataSchemasPanelTableOptionsFooterTableFooterOptionsToHclTerraform(struct?: DataSchemasPanelTableOptionsFooterTableFooterOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    count_rows: {
      value: cdktf.booleanToHclTerraform(struct!.countRows),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_pagination: {
      value: cdktf.booleanToHclTerraform(struct!.enablePagination),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    fields: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.fields),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    show: {
      value: cdktf.booleanToHclTerraform(struct!.show),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSchemasPanelTableOptionsFooterTableFooterOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasPanelTableOptionsFooterTableFooterOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._countRows !== undefined) {
      hasAnyValues = true;
      internalValueResult.countRows = this._countRows;
    }
    if (this._enablePagination !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablePagination = this._enablePagination;
    }
    if (this._fields !== undefined) {
      hasAnyValues = true;
      internalValueResult.fields = this._fields;
    }
    if (this._show !== undefined) {
      hasAnyValues = true;
      internalValueResult.show = this._show;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSchemasPanelTableOptionsFooterTableFooterOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._countRows = undefined;
      this._enablePagination = undefined;
      this._fields = undefined;
      this._show = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._countRows = value.countRows;
      this._enablePagination = value.enablePagination;
      this._fields = value.fields;
      this._show = value.show;
    }
  }

  // count_rows - computed: true, optional: true, required: false
  private _countRows?: boolean | cdktf.IResolvable; 
  public get countRows() {
    return this.getBooleanAttribute('count_rows');
  }
  public set countRows(value: boolean | cdktf.IResolvable) {
    this._countRows = value;
  }
  public resetCountRows() {
    this._countRows = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countRowsInput() {
    return this._countRows;
  }

  // enable_pagination - computed: true, optional: true, required: false
  private _enablePagination?: boolean | cdktf.IResolvable; 
  public get enablePagination() {
    return this.getBooleanAttribute('enable_pagination');
  }
  public set enablePagination(value: boolean | cdktf.IResolvable) {
    this._enablePagination = value;
  }
  public resetEnablePagination() {
    this._enablePagination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePaginationInput() {
    return this._enablePagination;
  }

  // fields - computed: true, optional: true, required: false
  private _fields?: string[]; 
  public get fields() {
    return this.getListAttribute('fields');
  }
  public set fields(value: string[]) {
    this._fields = value;
  }
  public resetFields() {
    this._fields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields;
  }

  // show - computed: true, optional: false, required: true
  private _show?: boolean | cdktf.IResolvable; 
  public get show() {
    return this.getBooleanAttribute('show');
  }
  public set show(value: boolean | cdktf.IResolvable) {
    this._show = value;
  }
  // Temporarily expose input value. Use with caution.
  public get showInput() {
    return this._show;
  }
}
export interface DataSchemasPanelTableOptionsFooter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_table#table_footer_options DataSchemasPanelTable#table_footer_options}
  */
  readonly tableFooterOptions?: DataSchemasPanelTableOptionsFooterTableFooterOptions;
}

export function dataSchemasPanelTableOptionsFooterToTerraform(struct?: DataSchemasPanelTableOptionsFooter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    table_footer_options: dataSchemasPanelTableOptionsFooterTableFooterOptionsToTerraform(struct!.tableFooterOptions),
  }
}


export function dataSchemasPanelTableOptionsFooterToHclTerraform(struct?: DataSchemasPanelTableOptionsFooter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    table_footer_options: {
      value: dataSchemasPanelTableOptionsFooterTableFooterOptionsToHclTerraform(struct!.tableFooterOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasPanelTableOptionsFooterTableFooterOptions",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSchemasPanelTableOptionsFooterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasPanelTableOptionsFooter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tableFooterOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableFooterOptions = this._tableFooterOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSchemasPanelTableOptionsFooter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tableFooterOptions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tableFooterOptions.internalValue = value.tableFooterOptions;
    }
  }

  // table_footer_options - computed: true, optional: true, required: false
  private _tableFooterOptions = new DataSchemasPanelTableOptionsFooterTableFooterOptionsOutputReference(this, "table_footer_options");
  public get tableFooterOptions() {
    return this._tableFooterOptions;
  }
  public putTableFooterOptions(value: DataSchemasPanelTableOptionsFooterTableFooterOptions) {
    this._tableFooterOptions.internalValue = value;
  }
  public resetTableFooterOptions() {
    this._tableFooterOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableFooterOptionsInput() {
    return this._tableFooterOptions.internalValue;
  }
}
export interface DataSchemasPanelTableOptionsSortBy {
  /**
  * Flag used to indicate descending sort order
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_table#desc DataSchemasPanelTable#desc}
  */
  readonly desc?: boolean | cdktf.IResolvable;
  /**
  * Sets the display name of the field to sort by
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_table#display_name DataSchemasPanelTable#display_name}
  */
  readonly displayName: string;
}

export function dataSchemasPanelTableOptionsSortByToTerraform(struct?: DataSchemasPanelTableOptionsSortBy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    desc: cdktf.booleanToTerraform(struct!.desc),
    display_name: cdktf.stringToTerraform(struct!.displayName),
  }
}


export function dataSchemasPanelTableOptionsSortByToHclTerraform(struct?: DataSchemasPanelTableOptionsSortBy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    desc: {
      value: cdktf.booleanToHclTerraform(struct!.desc),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSchemasPanelTableOptionsSortByOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSchemasPanelTableOptionsSortBy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._desc !== undefined) {
      hasAnyValues = true;
      internalValueResult.desc = this._desc;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSchemasPanelTableOptionsSortBy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._desc = undefined;
      this._displayName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._desc = value.desc;
      this._displayName = value.displayName;
    }
  }

  // desc - computed: true, optional: true, required: false
  private _desc?: boolean | cdktf.IResolvable; 
  public get desc() {
    return this.getBooleanAttribute('desc');
  }
  public set desc(value: boolean | cdktf.IResolvable) {
    this._desc = value;
  }
  public resetDesc() {
    this._desc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descInput() {
    return this._desc;
  }

  // display_name - computed: true, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }
}

export class DataSchemasPanelTableOptionsSortByList extends cdktf.ComplexList {
  public internalValue? : DataSchemasPanelTableOptionsSortBy[] | cdktf.IResolvable

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
  public get(index: number): DataSchemasPanelTableOptionsSortByOutputReference {
    return new DataSchemasPanelTableOptionsSortByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSchemasPanelTableOptions {
  /**
  * Controls the height of the rows. Defaults to "sm".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_table#cell_height DataSchemasPanelTable#cell_height}
  */
  readonly cellHeight?: string;
  /**
  * Controls footer options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_table#footer DataSchemasPanelTable#footer}
  */
  readonly footer?: DataSchemasPanelTableOptionsFooter;
  /**
  * Represents the index of the selected frame
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_table#frame_index DataSchemasPanelTable#frame_index}
  */
  readonly frameIndex: number;
  /**
  * Controls whether the panel should show the header. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_table#show_header DataSchemasPanelTable#show_header}
  */
  readonly showHeader?: boolean | cdktf.IResolvable;
  /**
  * Controls whether the header should show icons for the column types. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_table#show_type_icons DataSchemasPanelTable#show_type_icons}
  */
  readonly showTypeIcons?: boolean | cdktf.IResolvable;
  /**
  * Used to control row sorting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_table#sort_by DataSchemasPanelTable#sort_by}
  */
  readonly sortBy?: DataSchemasPanelTableOptionsSortBy[] | cdktf.IResolvable;
}

export function dataSchemasPanelTableOptionsToTerraform(struct?: DataSchemasPanelTableOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cell_height: cdktf.stringToTerraform(struct!.cellHeight),
    footer: dataSchemasPanelTableOptionsFooterToTerraform(struct!.footer),
    frame_index: cdktf.numberToTerraform(struct!.frameIndex),
    show_header: cdktf.booleanToTerraform(struct!.showHeader),
    show_type_icons: cdktf.booleanToTerraform(struct!.showTypeIcons),
    sort_by: cdktf.listMapper(dataSchemasPanelTableOptionsSortByToTerraform, false)(struct!.sortBy),
  }
}


export function dataSchemasPanelTableOptionsToHclTerraform(struct?: DataSchemasPanelTableOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cell_height: {
      value: cdktf.stringToHclTerraform(struct!.cellHeight),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    footer: {
      value: dataSchemasPanelTableOptionsFooterToHclTerraform(struct!.footer),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasPanelTableOptionsFooter",
    },
    frame_index: {
      value: cdktf.numberToHclTerraform(struct!.frameIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    show_header: {
      value: cdktf.booleanToHclTerraform(struct!.showHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_type_icons: {
      value: cdktf.booleanToHclTerraform(struct!.showTypeIcons),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sort_by: {
      value: cdktf.listMapperHcl(dataSchemasPanelTableOptionsSortByToHclTerraform, false)(struct!.sortBy),
      isBlock: true,
      type: "list",
      storageClassType: "DataSchemasPanelTableOptionsSortByList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSchemasPanelTableOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasPanelTableOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cellHeight !== undefined) {
      hasAnyValues = true;
      internalValueResult.cellHeight = this._cellHeight;
    }
    if (this._footer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.footer = this._footer?.internalValue;
    }
    if (this._frameIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.frameIndex = this._frameIndex;
    }
    if (this._showHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.showHeader = this._showHeader;
    }
    if (this._showTypeIcons !== undefined) {
      hasAnyValues = true;
      internalValueResult.showTypeIcons = this._showTypeIcons;
    }
    if (this._sortBy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sortBy = this._sortBy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSchemasPanelTableOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cellHeight = undefined;
      this._footer.internalValue = undefined;
      this._frameIndex = undefined;
      this._showHeader = undefined;
      this._showTypeIcons = undefined;
      this._sortBy.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cellHeight = value.cellHeight;
      this._footer.internalValue = value.footer;
      this._frameIndex = value.frameIndex;
      this._showHeader = value.showHeader;
      this._showTypeIcons = value.showTypeIcons;
      this._sortBy.internalValue = value.sortBy;
    }
  }

  // cell_height - computed: true, optional: true, required: false
  private _cellHeight?: string; 
  public get cellHeight() {
    return this.getStringAttribute('cell_height');
  }
  public set cellHeight(value: string) {
    this._cellHeight = value;
  }
  public resetCellHeight() {
    this._cellHeight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cellHeightInput() {
    return this._cellHeight;
  }

  // footer - computed: true, optional: true, required: false
  private _footer = new DataSchemasPanelTableOptionsFooterOutputReference(this, "footer");
  public get footer() {
    return this._footer;
  }
  public putFooter(value: DataSchemasPanelTableOptionsFooter) {
    this._footer.internalValue = value;
  }
  public resetFooter() {
    this._footer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get footerInput() {
    return this._footer.internalValue;
  }

  // frame_index - computed: true, optional: false, required: true
  private _frameIndex?: number; 
  public get frameIndex() {
    return this.getNumberAttribute('frame_index');
  }
  public set frameIndex(value: number) {
    this._frameIndex = value;
  }
  // Temporarily expose input value. Use with caution.
  public get frameIndexInput() {
    return this._frameIndex;
  }

  // show_header - computed: true, optional: true, required: false
  private _showHeader?: boolean | cdktf.IResolvable; 
  public get showHeader() {
    return this.getBooleanAttribute('show_header');
  }
  public set showHeader(value: boolean | cdktf.IResolvable) {
    this._showHeader = value;
  }
  public resetShowHeader() {
    this._showHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showHeaderInput() {
    return this._showHeader;
  }

  // show_type_icons - computed: true, optional: true, required: false
  private _showTypeIcons?: boolean | cdktf.IResolvable; 
  public get showTypeIcons() {
    return this.getBooleanAttribute('show_type_icons');
  }
  public set showTypeIcons(value: boolean | cdktf.IResolvable) {
    this._showTypeIcons = value;
  }
  public resetShowTypeIcons() {
    this._showTypeIcons = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showTypeIconsInput() {
    return this._showTypeIcons;
  }

  // sort_by - computed: true, optional: true, required: false
  private _sortBy = new DataSchemasPanelTableOptionsSortByList(this, "sort_by", false);
  public get sortBy() {
    return this._sortBy;
  }
  public putSortBy(value: DataSchemasPanelTableOptionsSortBy[] | cdktf.IResolvable) {
    this._sortBy.internalValue = value;
  }
  public resetSortBy() {
    this._sortBy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortByInput() {
    return this._sortBy.internalValue;
  }
}
export interface DataSchemasPanelTableTransformationsFilter {
}

export function dataSchemasPanelTableTransformationsFilterToTerraform(struct?: DataSchemasPanelTableTransformationsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSchemasPanelTableTransformationsFilterToHclTerraform(struct?: DataSchemasPanelTableTransformationsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSchemasPanelTableTransformationsFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasPanelTableTransformationsFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSchemasPanelTableTransformationsFilter | cdktf.IResolvable | undefined) {
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
export interface DataSchemasPanelTableTransformations {
  /**
  * Disabled transformations are skipped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_table#disabled DataSchemasPanelTable#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Optional frame matcher. When missing it will be applied to all results
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_table#filter DataSchemasPanelTable#filter}
  */
  readonly filter?: DataSchemasPanelTableTransformationsFilter;
}

export function dataSchemasPanelTableTransformationsToTerraform(struct?: DataSchemasPanelTableTransformations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    filter: dataSchemasPanelTableTransformationsFilterToTerraform(struct!.filter),
  }
}


export function dataSchemasPanelTableTransformationsToHclTerraform(struct?: DataSchemasPanelTableTransformations | cdktf.IResolvable): any {
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
      value: dataSchemasPanelTableTransformationsFilterToHclTerraform(struct!.filter),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasPanelTableTransformationsFilter",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSchemasPanelTableTransformationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSchemasPanelTableTransformations | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataSchemasPanelTableTransformations | cdktf.IResolvable | undefined) {
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
  private _filter = new DataSchemasPanelTableTransformationsFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataSchemasPanelTableTransformationsFilter) {
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

export class DataSchemasPanelTableTransformationsList extends cdktf.ComplexList {
  public internalValue? : DataSchemasPanelTableTransformations[] | cdktf.IResolvable

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
  public get(index: number): DataSchemasPanelTableTransformationsOutputReference {
    return new DataSchemasPanelTableTransformationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_table schemas_panel_table}
*/
export class DataSchemasPanelTable extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "schemas_panel_table";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSchemasPanelTable resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSchemasPanelTable to import
  * @param importFromId The id of the existing DataSchemasPanelTable that should be imported. Refer to the {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_table#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSchemasPanelTable to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "schemas_panel_table", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_table schemas_panel_table} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSchemasPanelTableConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataSchemasPanelTableConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'schemas_panel_table',
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
  private _datasource = new DataSchemasPanelTableDatasourceOutputReference(this, "datasource");
  public get datasource() {
    return this._datasource;
  }
  public putDatasource(value: DataSchemasPanelTableDatasource) {
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
  private _fieldConfig = new DataSchemasPanelTableFieldConfigOutputReference(this, "field_config");
  public get fieldConfig() {
    return this._fieldConfig;
  }
  public putFieldConfig(value: DataSchemasPanelTableFieldConfig) {
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
  private _gridPos = new DataSchemasPanelTableGridPosOutputReference(this, "grid_pos");
  public get gridPos() {
    return this._gridPos;
  }
  public putGridPos(value: DataSchemasPanelTableGridPos) {
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
  private _libraryPanel = new DataSchemasPanelTableLibraryPanelOutputReference(this, "library_panel");
  public get libraryPanel() {
    return this._libraryPanel;
  }
  public putLibraryPanel(value: DataSchemasPanelTableLibraryPanel) {
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
  private _links = new DataSchemasPanelTableLinksList(this, "links", false);
  public get links() {
    return this._links;
  }
  public putLinks(value: DataSchemasPanelTableLinks[] | cdktf.IResolvable) {
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
  private _options = new DataSchemasPanelTableOptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: DataSchemasPanelTableOptions) {
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
  private _transformations = new DataSchemasPanelTableTransformationsList(this, "transformations", false);
  public get transformations() {
    return this._transformations;
  }
  public putTransformations(value: DataSchemasPanelTableTransformations[] | cdktf.IResolvable) {
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
      datasource: dataSchemasPanelTableDatasourceToTerraform(this._datasource.internalValue),
      description: cdktf.stringToTerraform(this._description),
      field_config: dataSchemasPanelTableFieldConfigToTerraform(this._fieldConfig.internalValue),
      grid_pos: dataSchemasPanelTableGridPosToTerraform(this._gridPos.internalValue),
      interval: cdktf.stringToTerraform(this._interval),
      library_panel: dataSchemasPanelTableLibraryPanelToTerraform(this._libraryPanel.internalValue),
      links: cdktf.listMapper(dataSchemasPanelTableLinksToTerraform, false)(this._links.internalValue),
      max_data_points: cdktf.numberToTerraform(this._maxDataPoints),
      options: dataSchemasPanelTableOptionsToTerraform(this._options.internalValue),
      plugin_version: cdktf.stringToTerraform(this._pluginVersion),
      repeat: cdktf.stringToTerraform(this._repeat),
      repeat_direction: cdktf.stringToTerraform(this._repeatDirection),
      repeat_panel_id: cdktf.numberToTerraform(this._repeatPanelId),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      targets: cdktf.listMapper(cdktf.stringToTerraform, false)(this._targets),
      time_from: cdktf.stringToTerraform(this._timeFrom),
      time_shift: cdktf.stringToTerraform(this._timeShift),
      title: cdktf.stringToTerraform(this._title),
      transformations: cdktf.listMapper(dataSchemasPanelTableTransformationsToTerraform, false)(this._transformations.internalValue),
      transparent: cdktf.booleanToTerraform(this._transparent),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      datasource: {
        value: dataSchemasPanelTableDatasourceToHclTerraform(this._datasource.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataSchemasPanelTableDatasource",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      field_config: {
        value: dataSchemasPanelTableFieldConfigToHclTerraform(this._fieldConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataSchemasPanelTableFieldConfig",
      },
      grid_pos: {
        value: dataSchemasPanelTableGridPosToHclTerraform(this._gridPos.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataSchemasPanelTableGridPos",
      },
      interval: {
        value: cdktf.stringToHclTerraform(this._interval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      library_panel: {
        value: dataSchemasPanelTableLibraryPanelToHclTerraform(this._libraryPanel.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataSchemasPanelTableLibraryPanel",
      },
      links: {
        value: cdktf.listMapperHcl(dataSchemasPanelTableLinksToHclTerraform, false)(this._links.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataSchemasPanelTableLinksList",
      },
      max_data_points: {
        value: cdktf.numberToHclTerraform(this._maxDataPoints),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      options: {
        value: dataSchemasPanelTableOptionsToHclTerraform(this._options.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataSchemasPanelTableOptions",
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
        value: cdktf.listMapperHcl(dataSchemasPanelTableTransformationsToHclTerraform, false)(this._transformations.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataSchemasPanelTableTransformationsList",
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
