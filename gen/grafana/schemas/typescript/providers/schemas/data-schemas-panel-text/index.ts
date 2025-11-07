// https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_text
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSchemasPanelTextConfig extends cdktf.TerraformMetaArguments {
  /**
  * The datasource used in all targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_text#datasource DataSchemasPanelText#datasource}
  */
  readonly datasource?: DataSchemasPanelTextDatasource;
  /**
  * Panel description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_text#description DataSchemasPanelText#description}
  */
  readonly description?: string;
  /**
  * Field options allow you to change how the data is displayed in your visualizations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_text#field_config DataSchemasPanelText#field_config}
  */
  readonly fieldConfig?: DataSchemasPanelTextFieldConfig;
  /**
  * Grid position.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_text#grid_pos DataSchemasPanelText#grid_pos}
  */
  readonly gridPos?: DataSchemasPanelTextGridPos;
  /**
  * The min time interval setting defines a lower limit for the $__interval and $__interval_ms variables.
  * This value must be formatted as a number followed by a valid time
  * identifier like: "40s", "3d", etc.
  * See: https://grafana.com/docs/grafana/latest/panels-visualizations/query-transform-data/#query-options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_text#interval DataSchemasPanelText#interval}
  */
  readonly interval?: string;
  /**
  * Dynamically load the panel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_text#library_panel DataSchemasPanelText#library_panel}
  */
  readonly libraryPanel?: DataSchemasPanelTextLibraryPanel;
  /**
  * Panel links.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_text#links DataSchemasPanelText#links}
  */
  readonly links?: DataSchemasPanelTextLinks[] | cdktf.IResolvable;
  /**
  * The maximum number of data points that the panel queries are retrieving.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_text#max_data_points DataSchemasPanelText#max_data_points}
  */
  readonly maxDataPoints?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_text#options DataSchemasPanelText#options}
  */
  readonly options?: DataSchemasPanelTextOptions;
  /**
  * The version of the plugin that is used for this panel. This is used to find the plugin to display the panel and to migrate old panel configs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_text#plugin_version DataSchemasPanelText#plugin_version}
  */
  readonly pluginVersion?: string;
  /**
  * Name of template variable to repeat for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_text#repeat DataSchemasPanelText#repeat}
  */
  readonly repeat?: string;
  /**
  * Direction to repeat in if 'repeat' is set.
  * h for horizontal, v for vertical. Defaults to "h".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_text#repeat_direction DataSchemasPanelText#repeat_direction}
  */
  readonly repeatDirection?: string;
  /**
  * Id of the repeating panel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_text#repeat_panel_id DataSchemasPanelText#repeat_panel_id}
  */
  readonly repeatPanelId?: number;
  /**
  * Tags for the panel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_text#tags DataSchemasPanelText#tags}
  */
  readonly tags?: string[];
  /**
  * Depends on the panel plugin. See the plugin documentation for details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_text#targets DataSchemasPanelText#targets}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_text#time_from DataSchemasPanelText#time_from}
  */
  readonly timeFrom?: string;
  /**
  * Overrides the time range for individual panels by shifting its start and end relative to the time picker.
  * For example, you can shift the time range for the panel to be two hours earlier than the dashboard time picker setting 2h.
  * Note: Panel time overrides have no effect when the dashboard’s time range is absolute.
  * See: https://grafana.com/docs/grafana/latest/panels-visualizations/query-transform-data/#query-options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_text#time_shift DataSchemasPanelText#time_shift}
  */
  readonly timeShift?: string;
  /**
  * Panel title.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_text#title DataSchemasPanelText#title}
  */
  readonly title?: string;
  /**
  * List of transformations that are applied to the panel data before rendering.
  * When there are multiple transformations, Grafana applies them in the order they are listed.
  * Each transformation creates a result set that then passes on to the next transformation in the processing pipeline.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_text#transformations DataSchemasPanelText#transformations}
  */
  readonly transformations?: DataSchemasPanelTextTransformations[] | cdktf.IResolvable;
  /**
  * Whether to display the panel without a background. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_text#transparent DataSchemasPanelText#transparent}
  */
  readonly transparent?: boolean | cdktf.IResolvable;
  /**
  * The panel plugin type id. This is used to find the plugin to display the panel. Defaults to "text".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_text#type DataSchemasPanelText#type}
  */
  readonly type?: string;
}
export interface DataSchemasPanelTextDatasource {
  /**
  * The plugin type-id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_text#type DataSchemasPanelText#type}
  */
  readonly type?: string;
  /**
  * Specific datasource instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_text#uid DataSchemasPanelText#uid}
  */
  readonly uid?: string;
}

export function dataSchemasPanelTextDatasourceToTerraform(struct?: DataSchemasPanelTextDatasource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    uid: cdktf.stringToTerraform(struct!.uid),
  }
}


export function dataSchemasPanelTextDatasourceToHclTerraform(struct?: DataSchemasPanelTextDatasource | cdktf.IResolvable): any {
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

export class DataSchemasPanelTextDatasourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasPanelTextDatasource | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataSchemasPanelTextDatasource | cdktf.IResolvable | undefined) {
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
export interface DataSchemasPanelTextFieldConfigDefaultsColor {
  /**
  * The fixed color value for fixed or shades color modes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_text#fixed_color DataSchemasPanelText#fixed_color}
  */
  readonly fixedColor?: string;
  /**
  * The main color scheme mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_text#mode DataSchemasPanelText#mode}
  */
  readonly mode: string;
  /**
  * Some visualizations need to know how to assign a series color from by value color schemes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_text#series_by DataSchemasPanelText#series_by}
  */
  readonly seriesBy?: string;
}

export function dataSchemasPanelTextFieldConfigDefaultsColorToTerraform(struct?: DataSchemasPanelTextFieldConfigDefaultsColor | cdktf.IResolvable): any {
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


export function dataSchemasPanelTextFieldConfigDefaultsColorToHclTerraform(struct?: DataSchemasPanelTextFieldConfigDefaultsColor | cdktf.IResolvable): any {
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

export class DataSchemasPanelTextFieldConfigDefaultsColorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasPanelTextFieldConfigDefaultsColor | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataSchemasPanelTextFieldConfigDefaultsColor | cdktf.IResolvable | undefined) {
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
export interface DataSchemasPanelTextFieldConfigDefaultsCustomHideFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_text#legend DataSchemasPanelText#legend}
  */
  readonly legend: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_text#tooltip DataSchemasPanelText#tooltip}
  */
  readonly tooltip: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_text#viz DataSchemasPanelText#viz}
  */
  readonly viz: boolean | cdktf.IResolvable;
}

export function dataSchemasPanelTextFieldConfigDefaultsCustomHideFromToTerraform(struct?: DataSchemasPanelTextFieldConfigDefaultsCustomHideFrom | cdktf.IResolvable): any {
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


export function dataSchemasPanelTextFieldConfigDefaultsCustomHideFromToHclTerraform(struct?: DataSchemasPanelTextFieldConfigDefaultsCustomHideFrom | cdktf.IResolvable): any {
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

export class DataSchemasPanelTextFieldConfigDefaultsCustomHideFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasPanelTextFieldConfigDefaultsCustomHideFrom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataSchemasPanelTextFieldConfigDefaultsCustomHideFrom | cdktf.IResolvable | undefined) {
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
export interface DataSchemasPanelTextFieldConfigDefaultsCustom {
  /**
  *  Defaults to 70.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_text#fill_opacity DataSchemasPanelText#fill_opacity}
  */
  readonly fillOpacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_text#hide_from DataSchemasPanelText#hide_from}
  */
  readonly hideFrom?: DataSchemasPanelTextFieldConfigDefaultsCustomHideFrom;
  /**
  *  Defaults to 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_text#line_width DataSchemasPanelText#line_width}
  */
  readonly lineWidth?: number;
}

export function dataSchemasPanelTextFieldConfigDefaultsCustomToTerraform(struct?: DataSchemasPanelTextFieldConfigDefaultsCustom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fill_opacity: cdktf.numberToTerraform(struct!.fillOpacity),
    hide_from: dataSchemasPanelTextFieldConfigDefaultsCustomHideFromToTerraform(struct!.hideFrom),
    line_width: cdktf.numberToTerraform(struct!.lineWidth),
  }
}


export function dataSchemasPanelTextFieldConfigDefaultsCustomToHclTerraform(struct?: DataSchemasPanelTextFieldConfigDefaultsCustom | cdktf.IResolvable): any {
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
      value: dataSchemasPanelTextFieldConfigDefaultsCustomHideFromToHclTerraform(struct!.hideFrom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasPanelTextFieldConfigDefaultsCustomHideFrom",
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

export class DataSchemasPanelTextFieldConfigDefaultsCustomOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasPanelTextFieldConfigDefaultsCustom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataSchemasPanelTextFieldConfigDefaultsCustom | cdktf.IResolvable | undefined) {
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
  private _hideFrom = new DataSchemasPanelTextFieldConfigDefaultsCustomHideFromOutputReference(this, "hide_from");
  public get hideFrom() {
    return this._hideFrom;
  }
  public putHideFrom(value: DataSchemasPanelTextFieldConfigDefaultsCustomHideFrom) {
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
export interface DataSchemasPanelTextFieldConfigDefaultsMappingsRangeMapOptionsResult {
  /**
  * Text to use when the value matches
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_text#color DataSchemasPanelText#color}
  */
  readonly color?: string;
  /**
  * Icon to display when the value matches. Only specific visualizations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_text#icon DataSchemasPanelText#icon}
  */
  readonly icon?: string;
  /**
  * Position in the mapping array. Only used internally.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_text#index DataSchemasPanelText#index}
  */
  readonly index?: number;
  /**
  * Text to display when the value matches
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_text#text DataSchemasPanelText#text}
  */
  readonly text?: string;
}

export function dataSchemasPanelTextFieldConfigDefaultsMappingsRangeMapOptionsResultToTerraform(struct?: DataSchemasPanelTextFieldConfigDefaultsMappingsRangeMapOptionsResult | cdktf.IResolvable): any {
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


export function dataSchemasPanelTextFieldConfigDefaultsMappingsRangeMapOptionsResultToHclTerraform(struct?: DataSchemasPanelTextFieldConfigDefaultsMappingsRangeMapOptionsResult | cdktf.IResolvable): any {
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

export class DataSchemasPanelTextFieldConfigDefaultsMappingsRangeMapOptionsResultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasPanelTextFieldConfigDefaultsMappingsRangeMapOptionsResult | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataSchemasPanelTextFieldConfigDefaultsMappingsRangeMapOptionsResult | cdktf.IResolvable | undefined) {
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
export interface DataSchemasPanelTextFieldConfigDefaultsMappingsRangeMapOptions {
  /**
  * Min value of the range. It can be null which means -Infinity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_text#from DataSchemasPanelText#from}
  */
  readonly from: string;
  /**
  * Config to apply when the value is within the range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_text#result DataSchemasPanelText#result}
  */
  readonly result?: DataSchemasPanelTextFieldConfigDefaultsMappingsRangeMapOptionsResult;
  /**
  * Max value of the range. It can be null which means +Infinity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_text#to DataSchemasPanelText#to}
  */
  readonly to: string;
}

export function dataSchemasPanelTextFieldConfigDefaultsMappingsRangeMapOptionsToTerraform(struct?: DataSchemasPanelTextFieldConfigDefaultsMappingsRangeMapOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: cdktf.stringToTerraform(struct!.from),
    result: dataSchemasPanelTextFieldConfigDefaultsMappingsRangeMapOptionsResultToTerraform(struct!.result),
    to: cdktf.stringToTerraform(struct!.to),
  }
}


export function dataSchemasPanelTextFieldConfigDefaultsMappingsRangeMapOptionsToHclTerraform(struct?: DataSchemasPanelTextFieldConfigDefaultsMappingsRangeMapOptions | cdktf.IResolvable): any {
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
      value: dataSchemasPanelTextFieldConfigDefaultsMappingsRangeMapOptionsResultToHclTerraform(struct!.result),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasPanelTextFieldConfigDefaultsMappingsRangeMapOptionsResult",
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

export class DataSchemasPanelTextFieldConfigDefaultsMappingsRangeMapOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasPanelTextFieldConfigDefaultsMappingsRangeMapOptions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataSchemasPanelTextFieldConfigDefaultsMappingsRangeMapOptions | cdktf.IResolvable | undefined) {
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
  private _result = new DataSchemasPanelTextFieldConfigDefaultsMappingsRangeMapOptionsResultOutputReference(this, "result");
  public get result() {
    return this._result;
  }
  public putResult(value: DataSchemasPanelTextFieldConfigDefaultsMappingsRangeMapOptionsResult) {
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
export interface DataSchemasPanelTextFieldConfigDefaultsMappingsRangeMap {
  /**
  * Range to match against and the result to apply when the value is within the range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_text#options DataSchemasPanelText#options}
  */
  readonly options?: DataSchemasPanelTextFieldConfigDefaultsMappingsRangeMapOptions;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_text#type DataSchemasPanelText#type}
  */
  readonly type: string;
}

export function dataSchemasPanelTextFieldConfigDefaultsMappingsRangeMapToTerraform(struct?: DataSchemasPanelTextFieldConfigDefaultsMappingsRangeMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    options: dataSchemasPanelTextFieldConfigDefaultsMappingsRangeMapOptionsToTerraform(struct!.options),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataSchemasPanelTextFieldConfigDefaultsMappingsRangeMapToHclTerraform(struct?: DataSchemasPanelTextFieldConfigDefaultsMappingsRangeMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    options: {
      value: dataSchemasPanelTextFieldConfigDefaultsMappingsRangeMapOptionsToHclTerraform(struct!.options),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasPanelTextFieldConfigDefaultsMappingsRangeMapOptions",
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

export class DataSchemasPanelTextFieldConfigDefaultsMappingsRangeMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasPanelTextFieldConfigDefaultsMappingsRangeMap | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataSchemasPanelTextFieldConfigDefaultsMappingsRangeMap | cdktf.IResolvable | undefined) {
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
  private _options = new DataSchemasPanelTextFieldConfigDefaultsMappingsRangeMapOptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: DataSchemasPanelTextFieldConfigDefaultsMappingsRangeMapOptions) {
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
export interface DataSchemasPanelTextFieldConfigDefaultsMappingsRegexMapOptionsResult {
  /**
  * Text to use when the value matches
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_text#color DataSchemasPanelText#color}
  */
  readonly color?: string;
  /**
  * Icon to display when the value matches. Only specific visualizations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_text#icon DataSchemasPanelText#icon}
  */
  readonly icon?: string;
  /**
  * Position in the mapping array. Only used internally.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_text#index DataSchemasPanelText#index}
  */
  readonly index?: number;
  /**
  * Text to display when the value matches
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_text#text DataSchemasPanelText#text}
  */
  readonly text?: string;
}

export function dataSchemasPanelTextFieldConfigDefaultsMappingsRegexMapOptionsResultToTerraform(struct?: DataSchemasPanelTextFieldConfigDefaultsMappingsRegexMapOptionsResult | cdktf.IResolvable): any {
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


export function dataSchemasPanelTextFieldConfigDefaultsMappingsRegexMapOptionsResultToHclTerraform(struct?: DataSchemasPanelTextFieldConfigDefaultsMappingsRegexMapOptionsResult | cdktf.IResolvable): any {
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

export class DataSchemasPanelTextFieldConfigDefaultsMappingsRegexMapOptionsResultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasPanelTextFieldConfigDefaultsMappingsRegexMapOptionsResult | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataSchemasPanelTextFieldConfigDefaultsMappingsRegexMapOptionsResult | cdktf.IResolvable | undefined) {
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
export interface DataSchemasPanelTextFieldConfigDefaultsMappingsRegexMapOptions {
  /**
  * Regular expression to match against
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_text#pattern DataSchemasPanelText#pattern}
  */
  readonly pattern: string;
  /**
  * Config to apply when the value matches the regex
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_text#result DataSchemasPanelText#result}
  */
  readonly result?: DataSchemasPanelTextFieldConfigDefaultsMappingsRegexMapOptionsResult;
}

export function dataSchemasPanelTextFieldConfigDefaultsMappingsRegexMapOptionsToTerraform(struct?: DataSchemasPanelTextFieldConfigDefaultsMappingsRegexMapOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pattern: cdktf.stringToTerraform(struct!.pattern),
    result: dataSchemasPanelTextFieldConfigDefaultsMappingsRegexMapOptionsResultToTerraform(struct!.result),
  }
}


export function dataSchemasPanelTextFieldConfigDefaultsMappingsRegexMapOptionsToHclTerraform(struct?: DataSchemasPanelTextFieldConfigDefaultsMappingsRegexMapOptions | cdktf.IResolvable): any {
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
      value: dataSchemasPanelTextFieldConfigDefaultsMappingsRegexMapOptionsResultToHclTerraform(struct!.result),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasPanelTextFieldConfigDefaultsMappingsRegexMapOptionsResult",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSchemasPanelTextFieldConfigDefaultsMappingsRegexMapOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasPanelTextFieldConfigDefaultsMappingsRegexMapOptions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataSchemasPanelTextFieldConfigDefaultsMappingsRegexMapOptions | cdktf.IResolvable | undefined) {
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
  private _result = new DataSchemasPanelTextFieldConfigDefaultsMappingsRegexMapOptionsResultOutputReference(this, "result");
  public get result() {
    return this._result;
  }
  public putResult(value: DataSchemasPanelTextFieldConfigDefaultsMappingsRegexMapOptionsResult) {
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
export interface DataSchemasPanelTextFieldConfigDefaultsMappingsRegexMap {
  /**
  * Regular expression to match against and the result to apply when the value matches the regex
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_text#options DataSchemasPanelText#options}
  */
  readonly options?: DataSchemasPanelTextFieldConfigDefaultsMappingsRegexMapOptions;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_text#type DataSchemasPanelText#type}
  */
  readonly type: string;
}

export function dataSchemasPanelTextFieldConfigDefaultsMappingsRegexMapToTerraform(struct?: DataSchemasPanelTextFieldConfigDefaultsMappingsRegexMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    options: dataSchemasPanelTextFieldConfigDefaultsMappingsRegexMapOptionsToTerraform(struct!.options),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataSchemasPanelTextFieldConfigDefaultsMappingsRegexMapToHclTerraform(struct?: DataSchemasPanelTextFieldConfigDefaultsMappingsRegexMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    options: {
      value: dataSchemasPanelTextFieldConfigDefaultsMappingsRegexMapOptionsToHclTerraform(struct!.options),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasPanelTextFieldConfigDefaultsMappingsRegexMapOptions",
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

export class DataSchemasPanelTextFieldConfigDefaultsMappingsRegexMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasPanelTextFieldConfigDefaultsMappingsRegexMap | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataSchemasPanelTextFieldConfigDefaultsMappingsRegexMap | cdktf.IResolvable | undefined) {
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
  private _options = new DataSchemasPanelTextFieldConfigDefaultsMappingsRegexMapOptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: DataSchemasPanelTextFieldConfigDefaultsMappingsRegexMapOptions) {
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
export interface DataSchemasPanelTextFieldConfigDefaultsMappingsSpecialValueMapOptionsResult {
  /**
  * Text to use when the value matches
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_text#color DataSchemasPanelText#color}
  */
  readonly color?: string;
  /**
  * Icon to display when the value matches. Only specific visualizations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_text#icon DataSchemasPanelText#icon}
  */
  readonly icon?: string;
  /**
  * Position in the mapping array. Only used internally.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_text#index DataSchemasPanelText#index}
  */
  readonly index?: number;
  /**
  * Text to display when the value matches
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_text#text DataSchemasPanelText#text}
  */
  readonly text?: string;
}

export function dataSchemasPanelTextFieldConfigDefaultsMappingsSpecialValueMapOptionsResultToTerraform(struct?: DataSchemasPanelTextFieldConfigDefaultsMappingsSpecialValueMapOptionsResult | cdktf.IResolvable): any {
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


export function dataSchemasPanelTextFieldConfigDefaultsMappingsSpecialValueMapOptionsResultToHclTerraform(struct?: DataSchemasPanelTextFieldConfigDefaultsMappingsSpecialValueMapOptionsResult | cdktf.IResolvable): any {
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

export class DataSchemasPanelTextFieldConfigDefaultsMappingsSpecialValueMapOptionsResultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasPanelTextFieldConfigDefaultsMappingsSpecialValueMapOptionsResult | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataSchemasPanelTextFieldConfigDefaultsMappingsSpecialValueMapOptionsResult | cdktf.IResolvable | undefined) {
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
export interface DataSchemasPanelTextFieldConfigDefaultsMappingsSpecialValueMapOptions {
  /**
  * Special value to match against
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_text#match DataSchemasPanelText#match}
  */
  readonly match: string;
  /**
  * Config to apply when the value matches the special value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_text#result DataSchemasPanelText#result}
  */
  readonly result?: DataSchemasPanelTextFieldConfigDefaultsMappingsSpecialValueMapOptionsResult;
}

export function dataSchemasPanelTextFieldConfigDefaultsMappingsSpecialValueMapOptionsToTerraform(struct?: DataSchemasPanelTextFieldConfigDefaultsMappingsSpecialValueMapOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match: cdktf.stringToTerraform(struct!.match),
    result: dataSchemasPanelTextFieldConfigDefaultsMappingsSpecialValueMapOptionsResultToTerraform(struct!.result),
  }
}


export function dataSchemasPanelTextFieldConfigDefaultsMappingsSpecialValueMapOptionsToHclTerraform(struct?: DataSchemasPanelTextFieldConfigDefaultsMappingsSpecialValueMapOptions | cdktf.IResolvable): any {
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
      value: dataSchemasPanelTextFieldConfigDefaultsMappingsSpecialValueMapOptionsResultToHclTerraform(struct!.result),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasPanelTextFieldConfigDefaultsMappingsSpecialValueMapOptionsResult",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSchemasPanelTextFieldConfigDefaultsMappingsSpecialValueMapOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasPanelTextFieldConfigDefaultsMappingsSpecialValueMapOptions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataSchemasPanelTextFieldConfigDefaultsMappingsSpecialValueMapOptions | cdktf.IResolvable | undefined) {
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
  private _result = new DataSchemasPanelTextFieldConfigDefaultsMappingsSpecialValueMapOptionsResultOutputReference(this, "result");
  public get result() {
    return this._result;
  }
  public putResult(value: DataSchemasPanelTextFieldConfigDefaultsMappingsSpecialValueMapOptionsResult) {
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
export interface DataSchemasPanelTextFieldConfigDefaultsMappingsSpecialValueMap {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_text#options DataSchemasPanelText#options}
  */
  readonly options?: DataSchemasPanelTextFieldConfigDefaultsMappingsSpecialValueMapOptions;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_text#type DataSchemasPanelText#type}
  */
  readonly type: string;
}

export function dataSchemasPanelTextFieldConfigDefaultsMappingsSpecialValueMapToTerraform(struct?: DataSchemasPanelTextFieldConfigDefaultsMappingsSpecialValueMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    options: dataSchemasPanelTextFieldConfigDefaultsMappingsSpecialValueMapOptionsToTerraform(struct!.options),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataSchemasPanelTextFieldConfigDefaultsMappingsSpecialValueMapToHclTerraform(struct?: DataSchemasPanelTextFieldConfigDefaultsMappingsSpecialValueMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    options: {
      value: dataSchemasPanelTextFieldConfigDefaultsMappingsSpecialValueMapOptionsToHclTerraform(struct!.options),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasPanelTextFieldConfigDefaultsMappingsSpecialValueMapOptions",
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

export class DataSchemasPanelTextFieldConfigDefaultsMappingsSpecialValueMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasPanelTextFieldConfigDefaultsMappingsSpecialValueMap | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataSchemasPanelTextFieldConfigDefaultsMappingsSpecialValueMap | cdktf.IResolvable | undefined) {
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
  private _options = new DataSchemasPanelTextFieldConfigDefaultsMappingsSpecialValueMapOptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: DataSchemasPanelTextFieldConfigDefaultsMappingsSpecialValueMapOptions) {
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
export interface DataSchemasPanelTextFieldConfigDefaultsMappingsValueMapOptions {
  /**
  * Text to use when the value matches
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_text#color DataSchemasPanelText#color}
  */
  readonly color?: string;
  /**
  * Icon to display when the value matches. Only specific visualizations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_text#icon DataSchemasPanelText#icon}
  */
  readonly icon?: string;
  /**
  * Position in the mapping array. Only used internally.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_text#index DataSchemasPanelText#index}
  */
  readonly index?: number;
  /**
  * Text to display when the value matches
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_text#text DataSchemasPanelText#text}
  */
  readonly text?: string;
}

export function dataSchemasPanelTextFieldConfigDefaultsMappingsValueMapOptionsToTerraform(struct?: DataSchemasPanelTextFieldConfigDefaultsMappingsValueMapOptions | cdktf.IResolvable): any {
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


export function dataSchemasPanelTextFieldConfigDefaultsMappingsValueMapOptionsToHclTerraform(struct?: DataSchemasPanelTextFieldConfigDefaultsMappingsValueMapOptions | cdktf.IResolvable): any {
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

export class DataSchemasPanelTextFieldConfigDefaultsMappingsValueMapOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSchemasPanelTextFieldConfigDefaultsMappingsValueMapOptions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataSchemasPanelTextFieldConfigDefaultsMappingsValueMapOptions | cdktf.IResolvable | undefined) {
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

export class DataSchemasPanelTextFieldConfigDefaultsMappingsValueMapOptionsMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: DataSchemasPanelTextFieldConfigDefaultsMappingsValueMapOptions } | cdktf.IResolvable

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
  public get(key: string): DataSchemasPanelTextFieldConfigDefaultsMappingsValueMapOptionsOutputReference {
    return new DataSchemasPanelTextFieldConfigDefaultsMappingsValueMapOptionsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataSchemasPanelTextFieldConfigDefaultsMappingsValueMap {
  /**
  * Map with <value_to_match>: ValueMappingResult. For example: { "10": { text: "Perfection!", color: "green" } }
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_text#options DataSchemasPanelText#options}
  */
  readonly options?: { [key: string]: DataSchemasPanelTextFieldConfigDefaultsMappingsValueMapOptions } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_text#type DataSchemasPanelText#type}
  */
  readonly type: string;
}

export function dataSchemasPanelTextFieldConfigDefaultsMappingsValueMapToTerraform(struct?: DataSchemasPanelTextFieldConfigDefaultsMappingsValueMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    options: cdktf.hashMapper(dataSchemasPanelTextFieldConfigDefaultsMappingsValueMapOptionsToTerraform)(struct!.options),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataSchemasPanelTextFieldConfigDefaultsMappingsValueMapToHclTerraform(struct?: DataSchemasPanelTextFieldConfigDefaultsMappingsValueMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    options: {
      value: cdktf.hashMapperHcl(dataSchemasPanelTextFieldConfigDefaultsMappingsValueMapOptionsToHclTerraform)(struct!.options),
      isBlock: true,
      type: "map",
      storageClassType: "DataSchemasPanelTextFieldConfigDefaultsMappingsValueMapOptionsMap",
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

export class DataSchemasPanelTextFieldConfigDefaultsMappingsValueMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasPanelTextFieldConfigDefaultsMappingsValueMap | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataSchemasPanelTextFieldConfigDefaultsMappingsValueMap | cdktf.IResolvable | undefined) {
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
  private _options = new DataSchemasPanelTextFieldConfigDefaultsMappingsValueMapOptionsMap(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: { [key: string]: DataSchemasPanelTextFieldConfigDefaultsMappingsValueMapOptions } | cdktf.IResolvable) {
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
export interface DataSchemasPanelTextFieldConfigDefaultsMappings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_text#range_map DataSchemasPanelText#range_map}
  */
  readonly rangeMap?: DataSchemasPanelTextFieldConfigDefaultsMappingsRangeMap;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_text#regex_map DataSchemasPanelText#regex_map}
  */
  readonly regexMap?: DataSchemasPanelTextFieldConfigDefaultsMappingsRegexMap;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_text#special_value_map DataSchemasPanelText#special_value_map}
  */
  readonly specialValueMap?: DataSchemasPanelTextFieldConfigDefaultsMappingsSpecialValueMap;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_text#value_map DataSchemasPanelText#value_map}
  */
  readonly valueMap?: DataSchemasPanelTextFieldConfigDefaultsMappingsValueMap;
}

export function dataSchemasPanelTextFieldConfigDefaultsMappingsToTerraform(struct?: DataSchemasPanelTextFieldConfigDefaultsMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    range_map: dataSchemasPanelTextFieldConfigDefaultsMappingsRangeMapToTerraform(struct!.rangeMap),
    regex_map: dataSchemasPanelTextFieldConfigDefaultsMappingsRegexMapToTerraform(struct!.regexMap),
    special_value_map: dataSchemasPanelTextFieldConfigDefaultsMappingsSpecialValueMapToTerraform(struct!.specialValueMap),
    value_map: dataSchemasPanelTextFieldConfigDefaultsMappingsValueMapToTerraform(struct!.valueMap),
  }
}


export function dataSchemasPanelTextFieldConfigDefaultsMappingsToHclTerraform(struct?: DataSchemasPanelTextFieldConfigDefaultsMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    range_map: {
      value: dataSchemasPanelTextFieldConfigDefaultsMappingsRangeMapToHclTerraform(struct!.rangeMap),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasPanelTextFieldConfigDefaultsMappingsRangeMap",
    },
    regex_map: {
      value: dataSchemasPanelTextFieldConfigDefaultsMappingsRegexMapToHclTerraform(struct!.regexMap),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasPanelTextFieldConfigDefaultsMappingsRegexMap",
    },
    special_value_map: {
      value: dataSchemasPanelTextFieldConfigDefaultsMappingsSpecialValueMapToHclTerraform(struct!.specialValueMap),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasPanelTextFieldConfigDefaultsMappingsSpecialValueMap",
    },
    value_map: {
      value: dataSchemasPanelTextFieldConfigDefaultsMappingsValueMapToHclTerraform(struct!.valueMap),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasPanelTextFieldConfigDefaultsMappingsValueMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSchemasPanelTextFieldConfigDefaultsMappingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSchemasPanelTextFieldConfigDefaultsMappings | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataSchemasPanelTextFieldConfigDefaultsMappings | cdktf.IResolvable | undefined) {
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
  private _rangeMap = new DataSchemasPanelTextFieldConfigDefaultsMappingsRangeMapOutputReference(this, "range_map");
  public get rangeMap() {
    return this._rangeMap;
  }
  public putRangeMap(value: DataSchemasPanelTextFieldConfigDefaultsMappingsRangeMap) {
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
  private _regexMap = new DataSchemasPanelTextFieldConfigDefaultsMappingsRegexMapOutputReference(this, "regex_map");
  public get regexMap() {
    return this._regexMap;
  }
  public putRegexMap(value: DataSchemasPanelTextFieldConfigDefaultsMappingsRegexMap) {
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
  private _specialValueMap = new DataSchemasPanelTextFieldConfigDefaultsMappingsSpecialValueMapOutputReference(this, "special_value_map");
  public get specialValueMap() {
    return this._specialValueMap;
  }
  public putSpecialValueMap(value: DataSchemasPanelTextFieldConfigDefaultsMappingsSpecialValueMap) {
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
  private _valueMap = new DataSchemasPanelTextFieldConfigDefaultsMappingsValueMapOutputReference(this, "value_map");
  public get valueMap() {
    return this._valueMap;
  }
  public putValueMap(value: DataSchemasPanelTextFieldConfigDefaultsMappingsValueMap) {
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

export class DataSchemasPanelTextFieldConfigDefaultsMappingsList extends cdktf.ComplexList {
  public internalValue? : DataSchemasPanelTextFieldConfigDefaultsMappings[] | cdktf.IResolvable

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
  public get(index: number): DataSchemasPanelTextFieldConfigDefaultsMappingsOutputReference {
    return new DataSchemasPanelTextFieldConfigDefaultsMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSchemasPanelTextFieldConfigDefaultsThresholdsSteps {
  /**
  * Color represents the color of the visual change that will occur in the dashboard when the threshold value is met or exceeded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_text#color DataSchemasPanelText#color}
  */
  readonly color: string;
  /**
  * Value represents a specified metric for the threshold, which triggers a visual change in the dashboard when this value is met or exceeded.
  * Nulls currently appear here when serializing -Infinity to JSON.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_text#value DataSchemasPanelText#value}
  */
  readonly value: string;
}

export function dataSchemasPanelTextFieldConfigDefaultsThresholdsStepsToTerraform(struct?: DataSchemasPanelTextFieldConfigDefaultsThresholdsSteps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktf.stringToTerraform(struct!.color),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataSchemasPanelTextFieldConfigDefaultsThresholdsStepsToHclTerraform(struct?: DataSchemasPanelTextFieldConfigDefaultsThresholdsSteps | cdktf.IResolvable): any {
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

export class DataSchemasPanelTextFieldConfigDefaultsThresholdsStepsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSchemasPanelTextFieldConfigDefaultsThresholdsSteps | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataSchemasPanelTextFieldConfigDefaultsThresholdsSteps | cdktf.IResolvable | undefined) {
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

export class DataSchemasPanelTextFieldConfigDefaultsThresholdsStepsList extends cdktf.ComplexList {
  public internalValue? : DataSchemasPanelTextFieldConfigDefaultsThresholdsSteps[] | cdktf.IResolvable

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
  public get(index: number): DataSchemasPanelTextFieldConfigDefaultsThresholdsStepsOutputReference {
    return new DataSchemasPanelTextFieldConfigDefaultsThresholdsStepsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSchemasPanelTextFieldConfigDefaultsThresholds {
  /**
  * Thresholds mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_text#mode DataSchemasPanelText#mode}
  */
  readonly mode: string;
  /**
  * Must be sorted by 'value', first value is always -Infinity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_text#steps DataSchemasPanelText#steps}
  */
  readonly steps?: DataSchemasPanelTextFieldConfigDefaultsThresholdsSteps[] | cdktf.IResolvable;
}

export function dataSchemasPanelTextFieldConfigDefaultsThresholdsToTerraform(struct?: DataSchemasPanelTextFieldConfigDefaultsThresholds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
    steps: cdktf.listMapper(dataSchemasPanelTextFieldConfigDefaultsThresholdsStepsToTerraform, false)(struct!.steps),
  }
}


export function dataSchemasPanelTextFieldConfigDefaultsThresholdsToHclTerraform(struct?: DataSchemasPanelTextFieldConfigDefaultsThresholds | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataSchemasPanelTextFieldConfigDefaultsThresholdsStepsToHclTerraform, false)(struct!.steps),
      isBlock: true,
      type: "list",
      storageClassType: "DataSchemasPanelTextFieldConfigDefaultsThresholdsStepsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSchemasPanelTextFieldConfigDefaultsThresholdsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasPanelTextFieldConfigDefaultsThresholds | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataSchemasPanelTextFieldConfigDefaultsThresholds | cdktf.IResolvable | undefined) {
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
  private _steps = new DataSchemasPanelTextFieldConfigDefaultsThresholdsStepsList(this, "steps", false);
  public get steps() {
    return this._steps;
  }
  public putSteps(value: DataSchemasPanelTextFieldConfigDefaultsThresholdsSteps[] | cdktf.IResolvable) {
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
export interface DataSchemasPanelTextFieldConfigDefaults {
  /**
  * Panel color configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_text#color DataSchemasPanelText#color}
  */
  readonly color?: DataSchemasPanelTextFieldConfigDefaultsColor;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_text#custom DataSchemasPanelText#custom}
  */
  readonly custom?: DataSchemasPanelTextFieldConfigDefaultsCustom;
  /**
  * Specify the number of decimals Grafana includes in the rendered value.
  * If you leave this field blank, Grafana automatically truncates the number of decimals based on the value.
  * For example 1.1234 will display as 1.12 and 100.456 will display as 100.
  * To display all decimals, set the unit to String.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_text#decimals DataSchemasPanelText#decimals}
  */
  readonly decimals?: number;
  /**
  * Human readable field metadata
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_text#description DataSchemasPanelText#description}
  */
  readonly description?: string;
  /**
  * The display value for this field.  This supports template variables blank is auto
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_text#display_name DataSchemasPanelText#display_name}
  */
  readonly displayName?: string;
  /**
  * This can be used by data sources that return and explicit naming structure for values and labels
  * When this property is configured, this value is used rather than the default naming strategy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_text#display_name_from_ds DataSchemasPanelText#display_name_from_ds}
  */
  readonly displayNameFromDs?: string;
  /**
  * True if data source field supports ad-hoc filters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_text#filterable DataSchemasPanelText#filterable}
  */
  readonly filterable?: boolean | cdktf.IResolvable;
  /**
  * Convert input values into a display string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_text#mappings DataSchemasPanelText#mappings}
  */
  readonly mappings?: DataSchemasPanelTextFieldConfigDefaultsMappings[] | cdktf.IResolvable;
  /**
  * The maximum value used in percentage threshold calculations. Leave blank for auto calculation based on all series and fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_text#max DataSchemasPanelText#max}
  */
  readonly max?: number;
  /**
  * The minimum value used in percentage threshold calculations. Leave blank for auto calculation based on all series and fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_text#min DataSchemasPanelText#min}
  */
  readonly min?: number;
  /**
  * Alternative to empty string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_text#no_value DataSchemasPanelText#no_value}
  */
  readonly noValue?: string;
  /**
  * An explicit path to the field in the datasource.  When the frame meta includes a path,
  * This will default to ${frame.meta.path}/${field.name}
  * 
  * When defined, this value can be used as an identifier within the datasource scope, and
  * may be used to update the results
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_text#path DataSchemasPanelText#path}
  */
  readonly path?: string;
  /**
  * Map numeric values to states
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_text#thresholds DataSchemasPanelText#thresholds}
  */
  readonly thresholds?: DataSchemasPanelTextFieldConfigDefaultsThresholds;
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_text#unit DataSchemasPanelText#unit}
  */
  readonly unit?: string;
  /**
  * True if data source can write a value to the path. Auth/authz are supported separately
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_text#writeable DataSchemasPanelText#writeable}
  */
  readonly writeable?: boolean | cdktf.IResolvable;
}

export function dataSchemasPanelTextFieldConfigDefaultsToTerraform(struct?: DataSchemasPanelTextFieldConfigDefaults | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: dataSchemasPanelTextFieldConfigDefaultsColorToTerraform(struct!.color),
    custom: dataSchemasPanelTextFieldConfigDefaultsCustomToTerraform(struct!.custom),
    decimals: cdktf.numberToTerraform(struct!.decimals),
    description: cdktf.stringToTerraform(struct!.description),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    display_name_from_ds: cdktf.stringToTerraform(struct!.displayNameFromDs),
    filterable: cdktf.booleanToTerraform(struct!.filterable),
    mappings: cdktf.listMapper(dataSchemasPanelTextFieldConfigDefaultsMappingsToTerraform, false)(struct!.mappings),
    max: cdktf.numberToTerraform(struct!.max),
    min: cdktf.numberToTerraform(struct!.min),
    no_value: cdktf.stringToTerraform(struct!.noValue),
    path: cdktf.stringToTerraform(struct!.path),
    thresholds: dataSchemasPanelTextFieldConfigDefaultsThresholdsToTerraform(struct!.thresholds),
    unit: cdktf.stringToTerraform(struct!.unit),
    writeable: cdktf.booleanToTerraform(struct!.writeable),
  }
}


export function dataSchemasPanelTextFieldConfigDefaultsToHclTerraform(struct?: DataSchemasPanelTextFieldConfigDefaults | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    color: {
      value: dataSchemasPanelTextFieldConfigDefaultsColorToHclTerraform(struct!.color),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasPanelTextFieldConfigDefaultsColor",
    },
    custom: {
      value: dataSchemasPanelTextFieldConfigDefaultsCustomToHclTerraform(struct!.custom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasPanelTextFieldConfigDefaultsCustom",
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
      value: cdktf.listMapperHcl(dataSchemasPanelTextFieldConfigDefaultsMappingsToHclTerraform, false)(struct!.mappings),
      isBlock: true,
      type: "list",
      storageClassType: "DataSchemasPanelTextFieldConfigDefaultsMappingsList",
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
      value: dataSchemasPanelTextFieldConfigDefaultsThresholdsToHclTerraform(struct!.thresholds),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasPanelTextFieldConfigDefaultsThresholds",
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

export class DataSchemasPanelTextFieldConfigDefaultsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasPanelTextFieldConfigDefaults | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataSchemasPanelTextFieldConfigDefaults | cdktf.IResolvable | undefined) {
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
  private _color = new DataSchemasPanelTextFieldConfigDefaultsColorOutputReference(this, "color");
  public get color() {
    return this._color;
  }
  public putColor(value: DataSchemasPanelTextFieldConfigDefaultsColor) {
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
  private _custom = new DataSchemasPanelTextFieldConfigDefaultsCustomOutputReference(this, "custom");
  public get custom() {
    return this._custom;
  }
  public putCustom(value: DataSchemasPanelTextFieldConfigDefaultsCustom) {
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
  private _mappings = new DataSchemasPanelTextFieldConfigDefaultsMappingsList(this, "mappings", false);
  public get mappings() {
    return this._mappings;
  }
  public putMappings(value: DataSchemasPanelTextFieldConfigDefaultsMappings[] | cdktf.IResolvable) {
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
  private _thresholds = new DataSchemasPanelTextFieldConfigDefaultsThresholdsOutputReference(this, "thresholds");
  public get thresholds() {
    return this._thresholds;
  }
  public putThresholds(value: DataSchemasPanelTextFieldConfigDefaultsThresholds) {
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
export interface DataSchemasPanelTextFieldConfigOverridesMatcher {
}

export function dataSchemasPanelTextFieldConfigOverridesMatcherToTerraform(struct?: DataSchemasPanelTextFieldConfigOverridesMatcher | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSchemasPanelTextFieldConfigOverridesMatcherToHclTerraform(struct?: DataSchemasPanelTextFieldConfigOverridesMatcher | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSchemasPanelTextFieldConfigOverridesMatcherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasPanelTextFieldConfigOverridesMatcher | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSchemasPanelTextFieldConfigOverridesMatcher | cdktf.IResolvable | undefined) {
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
export interface DataSchemasPanelTextFieldConfigOverridesProperties {
}

export function dataSchemasPanelTextFieldConfigOverridesPropertiesToTerraform(struct?: DataSchemasPanelTextFieldConfigOverridesProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSchemasPanelTextFieldConfigOverridesPropertiesToHclTerraform(struct?: DataSchemasPanelTextFieldConfigOverridesProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSchemasPanelTextFieldConfigOverridesPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSchemasPanelTextFieldConfigOverridesProperties | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSchemasPanelTextFieldConfigOverridesProperties | cdktf.IResolvable | undefined) {
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

export class DataSchemasPanelTextFieldConfigOverridesPropertiesList extends cdktf.ComplexList {
  public internalValue? : DataSchemasPanelTextFieldConfigOverridesProperties[] | cdktf.IResolvable

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
  public get(index: number): DataSchemasPanelTextFieldConfigOverridesPropertiesOutputReference {
    return new DataSchemasPanelTextFieldConfigOverridesPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSchemasPanelTextFieldConfigOverrides {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_text#matcher DataSchemasPanelText#matcher}
  */
  readonly matcher?: DataSchemasPanelTextFieldConfigOverridesMatcher;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_text#properties DataSchemasPanelText#properties}
  */
  readonly properties?: DataSchemasPanelTextFieldConfigOverridesProperties[] | cdktf.IResolvable;
}

export function dataSchemasPanelTextFieldConfigOverridesToTerraform(struct?: DataSchemasPanelTextFieldConfigOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    matcher: dataSchemasPanelTextFieldConfigOverridesMatcherToTerraform(struct!.matcher),
    properties: cdktf.listMapper(dataSchemasPanelTextFieldConfigOverridesPropertiesToTerraform, false)(struct!.properties),
  }
}


export function dataSchemasPanelTextFieldConfigOverridesToHclTerraform(struct?: DataSchemasPanelTextFieldConfigOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    matcher: {
      value: dataSchemasPanelTextFieldConfigOverridesMatcherToHclTerraform(struct!.matcher),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasPanelTextFieldConfigOverridesMatcher",
    },
    properties: {
      value: cdktf.listMapperHcl(dataSchemasPanelTextFieldConfigOverridesPropertiesToHclTerraform, false)(struct!.properties),
      isBlock: true,
      type: "list",
      storageClassType: "DataSchemasPanelTextFieldConfigOverridesPropertiesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSchemasPanelTextFieldConfigOverridesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSchemasPanelTextFieldConfigOverrides | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataSchemasPanelTextFieldConfigOverrides | cdktf.IResolvable | undefined) {
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
  private _matcher = new DataSchemasPanelTextFieldConfigOverridesMatcherOutputReference(this, "matcher");
  public get matcher() {
    return this._matcher;
  }
  public putMatcher(value: DataSchemasPanelTextFieldConfigOverridesMatcher) {
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
  private _properties = new DataSchemasPanelTextFieldConfigOverridesPropertiesList(this, "properties", false);
  public get properties() {
    return this._properties;
  }
  public putProperties(value: DataSchemasPanelTextFieldConfigOverridesProperties[] | cdktf.IResolvable) {
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

export class DataSchemasPanelTextFieldConfigOverridesList extends cdktf.ComplexList {
  public internalValue? : DataSchemasPanelTextFieldConfigOverrides[] | cdktf.IResolvable

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
  public get(index: number): DataSchemasPanelTextFieldConfigOverridesOutputReference {
    return new DataSchemasPanelTextFieldConfigOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSchemasPanelTextFieldConfig {
  /**
  * Defaults are the options applied to all fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_text#defaults DataSchemasPanelText#defaults}
  */
  readonly defaults?: DataSchemasPanelTextFieldConfigDefaults;
  /**
  * Overrides are the options applied to specific fields overriding the defaults.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_text#overrides DataSchemasPanelText#overrides}
  */
  readonly overrides?: DataSchemasPanelTextFieldConfigOverrides[] | cdktf.IResolvable;
}

export function dataSchemasPanelTextFieldConfigToTerraform(struct?: DataSchemasPanelTextFieldConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    defaults: dataSchemasPanelTextFieldConfigDefaultsToTerraform(struct!.defaults),
    overrides: cdktf.listMapper(dataSchemasPanelTextFieldConfigOverridesToTerraform, false)(struct!.overrides),
  }
}


export function dataSchemasPanelTextFieldConfigToHclTerraform(struct?: DataSchemasPanelTextFieldConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    defaults: {
      value: dataSchemasPanelTextFieldConfigDefaultsToHclTerraform(struct!.defaults),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasPanelTextFieldConfigDefaults",
    },
    overrides: {
      value: cdktf.listMapperHcl(dataSchemasPanelTextFieldConfigOverridesToHclTerraform, false)(struct!.overrides),
      isBlock: true,
      type: "list",
      storageClassType: "DataSchemasPanelTextFieldConfigOverridesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSchemasPanelTextFieldConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasPanelTextFieldConfig | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataSchemasPanelTextFieldConfig | cdktf.IResolvable | undefined) {
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
  private _defaults = new DataSchemasPanelTextFieldConfigDefaultsOutputReference(this, "defaults");
  public get defaults() {
    return this._defaults;
  }
  public putDefaults(value: DataSchemasPanelTextFieldConfigDefaults) {
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
  private _overrides = new DataSchemasPanelTextFieldConfigOverridesList(this, "overrides", false);
  public get overrides() {
    return this._overrides;
  }
  public putOverrides(value: DataSchemasPanelTextFieldConfigOverrides[] | cdktf.IResolvable) {
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
export interface DataSchemasPanelTextGridPos {
  /**
  * Panel height. The height is the number of rows from the top edge of the panel. Defaults to 9.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_text#h DataSchemasPanelText#h}
  */
  readonly h?: number;
  /**
  * Whether the panel is fixed within the grid. If true, the panel will not be affected by other panels' interactions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_text#static DataSchemasPanelText#static}
  */
  readonly static?: boolean | cdktf.IResolvable;
  /**
  * Panel width. The width is the number of columns from the left edge of the panel. Defaults to 12.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_text#w DataSchemasPanelText#w}
  */
  readonly w?: number;
  /**
  * Panel x. The x coordinate is the number of columns from the left edge of the grid. Defaults to 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_text#x DataSchemasPanelText#x}
  */
  readonly x?: number;
  /**
  * Panel y. The y coordinate is the number of rows from the top edge of the grid. Defaults to 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_text#y DataSchemasPanelText#y}
  */
  readonly y?: number;
}

export function dataSchemasPanelTextGridPosToTerraform(struct?: DataSchemasPanelTextGridPos | cdktf.IResolvable): any {
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


export function dataSchemasPanelTextGridPosToHclTerraform(struct?: DataSchemasPanelTextGridPos | cdktf.IResolvable): any {
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

export class DataSchemasPanelTextGridPosOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasPanelTextGridPos | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataSchemasPanelTextGridPos | cdktf.IResolvable | undefined) {
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
export interface DataSchemasPanelTextLibraryPanel {
  /**
  * Library panel name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_text#name DataSchemasPanelText#name}
  */
  readonly name: string;
  /**
  * Library panel uid
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_text#uid DataSchemasPanelText#uid}
  */
  readonly uid: string;
}

export function dataSchemasPanelTextLibraryPanelToTerraform(struct?: DataSchemasPanelTextLibraryPanel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    uid: cdktf.stringToTerraform(struct!.uid),
  }
}


export function dataSchemasPanelTextLibraryPanelToHclTerraform(struct?: DataSchemasPanelTextLibraryPanel | cdktf.IResolvable): any {
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

export class DataSchemasPanelTextLibraryPanelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasPanelTextLibraryPanel | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataSchemasPanelTextLibraryPanel | cdktf.IResolvable | undefined) {
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
export interface DataSchemasPanelTextLinks {
  /**
  * If true, all dashboards links will be displayed in a dropdown. If false, all dashboards links will be displayed side by side. Only valid if the type is dashboards. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_text#as_dropdown DataSchemasPanelText#as_dropdown}
  */
  readonly asDropdown?: boolean | cdktf.IResolvable;
  /**
  * Icon name to be displayed with the link
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_text#icon DataSchemasPanelText#icon}
  */
  readonly icon: string;
  /**
  * If true, includes current template variables values in the link as query params. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_text#include_vars DataSchemasPanelText#include_vars}
  */
  readonly includeVars?: boolean | cdktf.IResolvable;
  /**
  * If true, includes current time range in the link as query params. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_text#keep_time DataSchemasPanelText#keep_time}
  */
  readonly keepTime?: boolean | cdktf.IResolvable;
  /**
  * List of tags to limit the linked dashboards. If empty, all dashboards will be displayed. Only valid if the type is dashboards
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_text#tags DataSchemasPanelText#tags}
  */
  readonly tags?: string[];
  /**
  * If true, the link will be opened in a new tab. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_text#target_blank DataSchemasPanelText#target_blank}
  */
  readonly targetBlank?: boolean | cdktf.IResolvable;
  /**
  * Title to display with the link
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_text#title DataSchemasPanelText#title}
  */
  readonly title: string;
  /**
  * Tooltip to display when the user hovers their mouse over it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_text#tooltip DataSchemasPanelText#tooltip}
  */
  readonly tooltip: string;
  /**
  * Link type. Accepted values are dashboards (to refer to another dashboard) and link (to refer to an external resource)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_text#type DataSchemasPanelText#type}
  */
  readonly type: string;
  /**
  * Link URL. Only required/valid if the type is link
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_text#url DataSchemasPanelText#url}
  */
  readonly url: string;
}

export function dataSchemasPanelTextLinksToTerraform(struct?: DataSchemasPanelTextLinks | cdktf.IResolvable): any {
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


export function dataSchemasPanelTextLinksToHclTerraform(struct?: DataSchemasPanelTextLinks | cdktf.IResolvable): any {
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

export class DataSchemasPanelTextLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSchemasPanelTextLinks | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataSchemasPanelTextLinks | cdktf.IResolvable | undefined) {
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

export class DataSchemasPanelTextLinksList extends cdktf.ComplexList {
  public internalValue? : DataSchemasPanelTextLinks[] | cdktf.IResolvable

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
  public get(index: number): DataSchemasPanelTextLinksOutputReference {
    return new DataSchemasPanelTextLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSchemasPanelTextOptionsCode {
  /**
  * The language passed to monaco code editor. Defaults to "plaintext".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_text#language DataSchemasPanelText#language}
  */
  readonly language?: string;
  /**
  *  Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_text#show_line_numbers DataSchemasPanelText#show_line_numbers}
  */
  readonly showLineNumbers?: boolean | cdktf.IResolvable;
  /**
  *  Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_text#show_mini_map DataSchemasPanelText#show_mini_map}
  */
  readonly showMiniMap?: boolean | cdktf.IResolvable;
}

export function dataSchemasPanelTextOptionsCodeToTerraform(struct?: DataSchemasPanelTextOptionsCode | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    language: cdktf.stringToTerraform(struct!.language),
    show_line_numbers: cdktf.booleanToTerraform(struct!.showLineNumbers),
    show_mini_map: cdktf.booleanToTerraform(struct!.showMiniMap),
  }
}


export function dataSchemasPanelTextOptionsCodeToHclTerraform(struct?: DataSchemasPanelTextOptionsCode | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    language: {
      value: cdktf.stringToHclTerraform(struct!.language),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    show_line_numbers: {
      value: cdktf.booleanToHclTerraform(struct!.showLineNumbers),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_mini_map: {
      value: cdktf.booleanToHclTerraform(struct!.showMiniMap),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSchemasPanelTextOptionsCodeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasPanelTextOptionsCode | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._language !== undefined) {
      hasAnyValues = true;
      internalValueResult.language = this._language;
    }
    if (this._showLineNumbers !== undefined) {
      hasAnyValues = true;
      internalValueResult.showLineNumbers = this._showLineNumbers;
    }
    if (this._showMiniMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.showMiniMap = this._showMiniMap;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSchemasPanelTextOptionsCode | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._language = undefined;
      this._showLineNumbers = undefined;
      this._showMiniMap = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._language = value.language;
      this._showLineNumbers = value.showLineNumbers;
      this._showMiniMap = value.showMiniMap;
    }
  }

  // language - computed: true, optional: true, required: false
  private _language?: string; 
  public get language() {
    return this.getStringAttribute('language');
  }
  public set language(value: string) {
    this._language = value;
  }
  public resetLanguage() {
    this._language = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get languageInput() {
    return this._language;
  }

  // show_line_numbers - computed: true, optional: true, required: false
  private _showLineNumbers?: boolean | cdktf.IResolvable; 
  public get showLineNumbers() {
    return this.getBooleanAttribute('show_line_numbers');
  }
  public set showLineNumbers(value: boolean | cdktf.IResolvable) {
    this._showLineNumbers = value;
  }
  public resetShowLineNumbers() {
    this._showLineNumbers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showLineNumbersInput() {
    return this._showLineNumbers;
  }

  // show_mini_map - computed: true, optional: true, required: false
  private _showMiniMap?: boolean | cdktf.IResolvable; 
  public get showMiniMap() {
    return this.getBooleanAttribute('show_mini_map');
  }
  public set showMiniMap(value: boolean | cdktf.IResolvable) {
    this._showMiniMap = value;
  }
  public resetShowMiniMap() {
    this._showMiniMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showMiniMapInput() {
    return this._showMiniMap;
  }
}
export interface DataSchemasPanelTextOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_text#code DataSchemasPanelText#code}
  */
  readonly code?: DataSchemasPanelTextOptionsCode;
  /**
  *  Defaults to "# Title
  * 
  * For markdown syntax help: [commonmark.org/help](https://commonmark.org/help/)".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_text#content DataSchemasPanelText#content}
  */
  readonly content?: string;
  /**
  *  Defaults to "markdown".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_text#mode DataSchemasPanelText#mode}
  */
  readonly mode?: string;
}

export function dataSchemasPanelTextOptionsToTerraform(struct?: DataSchemasPanelTextOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    code: dataSchemasPanelTextOptionsCodeToTerraform(struct!.code),
    content: cdktf.stringToTerraform(struct!.content),
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}


export function dataSchemasPanelTextOptionsToHclTerraform(struct?: DataSchemasPanelTextOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    code: {
      value: dataSchemasPanelTextOptionsCodeToHclTerraform(struct!.code),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasPanelTextOptionsCode",
    },
    content: {
      value: cdktf.stringToHclTerraform(struct!.content),
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

export class DataSchemasPanelTextOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasPanelTextOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._code?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.code = this._code?.internalValue;
    }
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSchemasPanelTextOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._code.internalValue = undefined;
      this._content = undefined;
      this._mode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._code.internalValue = value.code;
      this._content = value.content;
      this._mode = value.mode;
    }
  }

  // code - computed: true, optional: true, required: false
  private _code = new DataSchemasPanelTextOptionsCodeOutputReference(this, "code");
  public get code() {
    return this._code;
  }
  public putCode(value: DataSchemasPanelTextOptionsCode) {
    this._code.internalValue = value;
  }
  public resetCode() {
    this._code.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code.internalValue;
  }

  // content - computed: true, optional: true, required: false
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  public resetContent() {
    this._content = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
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
export interface DataSchemasPanelTextTransformationsFilter {
}

export function dataSchemasPanelTextTransformationsFilterToTerraform(struct?: DataSchemasPanelTextTransformationsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSchemasPanelTextTransformationsFilterToHclTerraform(struct?: DataSchemasPanelTextTransformationsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSchemasPanelTextTransformationsFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasPanelTextTransformationsFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSchemasPanelTextTransformationsFilter | cdktf.IResolvable | undefined) {
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
export interface DataSchemasPanelTextTransformations {
  /**
  * Disabled transformations are skipped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_text#disabled DataSchemasPanelText#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Optional frame matcher. When missing it will be applied to all results
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_text#filter DataSchemasPanelText#filter}
  */
  readonly filter?: DataSchemasPanelTextTransformationsFilter;
}

export function dataSchemasPanelTextTransformationsToTerraform(struct?: DataSchemasPanelTextTransformations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    filter: dataSchemasPanelTextTransformationsFilterToTerraform(struct!.filter),
  }
}


export function dataSchemasPanelTextTransformationsToHclTerraform(struct?: DataSchemasPanelTextTransformations | cdktf.IResolvable): any {
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
      value: dataSchemasPanelTextTransformationsFilterToHclTerraform(struct!.filter),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasPanelTextTransformationsFilter",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSchemasPanelTextTransformationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSchemasPanelTextTransformations | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataSchemasPanelTextTransformations | cdktf.IResolvable | undefined) {
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
  private _filter = new DataSchemasPanelTextTransformationsFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataSchemasPanelTextTransformationsFilter) {
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

export class DataSchemasPanelTextTransformationsList extends cdktf.ComplexList {
  public internalValue? : DataSchemasPanelTextTransformations[] | cdktf.IResolvable

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
  public get(index: number): DataSchemasPanelTextTransformationsOutputReference {
    return new DataSchemasPanelTextTransformationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_text schemas_panel_text}
*/
export class DataSchemasPanelText extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "schemas_panel_text";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSchemasPanelText resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSchemasPanelText to import
  * @param importFromId The id of the existing DataSchemasPanelText that should be imported. Refer to the {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_text#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSchemasPanelText to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "schemas_panel_text", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_text schemas_panel_text} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSchemasPanelTextConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataSchemasPanelTextConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'schemas_panel_text',
      terraformGeneratorMetadata: {
        providerName: 'schemas',
        providerVersion: '0.2.0'
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
  private _datasource = new DataSchemasPanelTextDatasourceOutputReference(this, "datasource");
  public get datasource() {
    return this._datasource;
  }
  public putDatasource(value: DataSchemasPanelTextDatasource) {
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
  private _fieldConfig = new DataSchemasPanelTextFieldConfigOutputReference(this, "field_config");
  public get fieldConfig() {
    return this._fieldConfig;
  }
  public putFieldConfig(value: DataSchemasPanelTextFieldConfig) {
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
  private _gridPos = new DataSchemasPanelTextGridPosOutputReference(this, "grid_pos");
  public get gridPos() {
    return this._gridPos;
  }
  public putGridPos(value: DataSchemasPanelTextGridPos) {
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
  private _libraryPanel = new DataSchemasPanelTextLibraryPanelOutputReference(this, "library_panel");
  public get libraryPanel() {
    return this._libraryPanel;
  }
  public putLibraryPanel(value: DataSchemasPanelTextLibraryPanel) {
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
  private _links = new DataSchemasPanelTextLinksList(this, "links", false);
  public get links() {
    return this._links;
  }
  public putLinks(value: DataSchemasPanelTextLinks[] | cdktf.IResolvable) {
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
  private _options = new DataSchemasPanelTextOptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: DataSchemasPanelTextOptions) {
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
  private _transformations = new DataSchemasPanelTextTransformationsList(this, "transformations", false);
  public get transformations() {
    return this._transformations;
  }
  public putTransformations(value: DataSchemasPanelTextTransformations[] | cdktf.IResolvable) {
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
      datasource: dataSchemasPanelTextDatasourceToTerraform(this._datasource.internalValue),
      description: cdktf.stringToTerraform(this._description),
      field_config: dataSchemasPanelTextFieldConfigToTerraform(this._fieldConfig.internalValue),
      grid_pos: dataSchemasPanelTextGridPosToTerraform(this._gridPos.internalValue),
      interval: cdktf.stringToTerraform(this._interval),
      library_panel: dataSchemasPanelTextLibraryPanelToTerraform(this._libraryPanel.internalValue),
      links: cdktf.listMapper(dataSchemasPanelTextLinksToTerraform, false)(this._links.internalValue),
      max_data_points: cdktf.numberToTerraform(this._maxDataPoints),
      options: dataSchemasPanelTextOptionsToTerraform(this._options.internalValue),
      plugin_version: cdktf.stringToTerraform(this._pluginVersion),
      repeat: cdktf.stringToTerraform(this._repeat),
      repeat_direction: cdktf.stringToTerraform(this._repeatDirection),
      repeat_panel_id: cdktf.numberToTerraform(this._repeatPanelId),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      targets: cdktf.listMapper(cdktf.stringToTerraform, false)(this._targets),
      time_from: cdktf.stringToTerraform(this._timeFrom),
      time_shift: cdktf.stringToTerraform(this._timeShift),
      title: cdktf.stringToTerraform(this._title),
      transformations: cdktf.listMapper(dataSchemasPanelTextTransformationsToTerraform, false)(this._transformations.internalValue),
      transparent: cdktf.booleanToTerraform(this._transparent),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      datasource: {
        value: dataSchemasPanelTextDatasourceToHclTerraform(this._datasource.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataSchemasPanelTextDatasource",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      field_config: {
        value: dataSchemasPanelTextFieldConfigToHclTerraform(this._fieldConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataSchemasPanelTextFieldConfig",
      },
      grid_pos: {
        value: dataSchemasPanelTextGridPosToHclTerraform(this._gridPos.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataSchemasPanelTextGridPos",
      },
      interval: {
        value: cdktf.stringToHclTerraform(this._interval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      library_panel: {
        value: dataSchemasPanelTextLibraryPanelToHclTerraform(this._libraryPanel.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataSchemasPanelTextLibraryPanel",
      },
      links: {
        value: cdktf.listMapperHcl(dataSchemasPanelTextLinksToHclTerraform, false)(this._links.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataSchemasPanelTextLinksList",
      },
      max_data_points: {
        value: cdktf.numberToHclTerraform(this._maxDataPoints),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      options: {
        value: dataSchemasPanelTextOptionsToHclTerraform(this._options.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataSchemasPanelTextOptions",
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
        value: cdktf.listMapperHcl(dataSchemasPanelTextTransformationsToHclTerraform, false)(this._transformations.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataSchemasPanelTextTransformationsList",
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
