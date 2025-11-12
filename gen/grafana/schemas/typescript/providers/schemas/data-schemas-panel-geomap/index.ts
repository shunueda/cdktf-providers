// https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSchemasPanelGeomapConfig extends cdktf.TerraformMetaArguments {
  /**
  * The datasource used in all targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#datasource DataSchemasPanelGeomap#datasource}
  */
  readonly datasource?: DataSchemasPanelGeomapDatasource;
  /**
  * Panel description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#description DataSchemasPanelGeomap#description}
  */
  readonly description?: string;
  /**
  * Field options allow you to change how the data is displayed in your visualizations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#field_config DataSchemasPanelGeomap#field_config}
  */
  readonly fieldConfig?: DataSchemasPanelGeomapFieldConfig;
  /**
  * Grid position.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#grid_pos DataSchemasPanelGeomap#grid_pos}
  */
  readonly gridPos?: DataSchemasPanelGeomapGridPos;
  /**
  * The min time interval setting defines a lower limit for the $__interval and $__interval_ms variables.
  * This value must be formatted as a number followed by a valid time
  * identifier like: "40s", "3d", etc.
  * See: https://grafana.com/docs/grafana/latest/panels-visualizations/query-transform-data/#query-options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#interval DataSchemasPanelGeomap#interval}
  */
  readonly interval?: string;
  /**
  * Dynamically load the panel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#library_panel DataSchemasPanelGeomap#library_panel}
  */
  readonly libraryPanel?: DataSchemasPanelGeomapLibraryPanel;
  /**
  * Panel links.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#links DataSchemasPanelGeomap#links}
  */
  readonly links?: DataSchemasPanelGeomapLinks[] | cdktf.IResolvable;
  /**
  * The maximum number of data points that the panel queries are retrieving.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#max_data_points DataSchemasPanelGeomap#max_data_points}
  */
  readonly maxDataPoints?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#options DataSchemasPanelGeomap#options}
  */
  readonly options?: DataSchemasPanelGeomapOptions;
  /**
  * The version of the plugin that is used for this panel. This is used to find the plugin to display the panel and to migrate old panel configs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#plugin_version DataSchemasPanelGeomap#plugin_version}
  */
  readonly pluginVersion?: string;
  /**
  * Name of template variable to repeat for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#repeat DataSchemasPanelGeomap#repeat}
  */
  readonly repeat?: string;
  /**
  * Direction to repeat in if 'repeat' is set.
  * h for horizontal, v for vertical. Defaults to "h".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#repeat_direction DataSchemasPanelGeomap#repeat_direction}
  */
  readonly repeatDirection?: string;
  /**
  * Id of the repeating panel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#repeat_panel_id DataSchemasPanelGeomap#repeat_panel_id}
  */
  readonly repeatPanelId?: number;
  /**
  * Tags for the panel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#tags DataSchemasPanelGeomap#tags}
  */
  readonly tags?: string[];
  /**
  * Depends on the panel plugin. See the plugin documentation for details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#targets DataSchemasPanelGeomap#targets}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#time_from DataSchemasPanelGeomap#time_from}
  */
  readonly timeFrom?: string;
  /**
  * Overrides the time range for individual panels by shifting its start and end relative to the time picker.
  * For example, you can shift the time range for the panel to be two hours earlier than the dashboard time picker setting 2h.
  * Note: Panel time overrides have no effect when the dashboard’s time range is absolute.
  * See: https://grafana.com/docs/grafana/latest/panels-visualizations/query-transform-data/#query-options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#time_shift DataSchemasPanelGeomap#time_shift}
  */
  readonly timeShift?: string;
  /**
  * Panel title.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#title DataSchemasPanelGeomap#title}
  */
  readonly title?: string;
  /**
  * List of transformations that are applied to the panel data before rendering.
  * When there are multiple transformations, Grafana applies them in the order they are listed.
  * Each transformation creates a result set that then passes on to the next transformation in the processing pipeline.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#transformations DataSchemasPanelGeomap#transformations}
  */
  readonly transformations?: DataSchemasPanelGeomapTransformations[] | cdktf.IResolvable;
  /**
  * Whether to display the panel without a background. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#transparent DataSchemasPanelGeomap#transparent}
  */
  readonly transparent?: boolean | cdktf.IResolvable;
  /**
  * The panel plugin type id. This is used to find the plugin to display the panel. Defaults to "geomap".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#type DataSchemasPanelGeomap#type}
  */
  readonly type?: string;
}
export interface DataSchemasPanelGeomapDatasource {
  /**
  * The plugin type-id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#type DataSchemasPanelGeomap#type}
  */
  readonly type?: string;
  /**
  * Specific datasource instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#uid DataSchemasPanelGeomap#uid}
  */
  readonly uid?: string;
}

export function dataSchemasPanelGeomapDatasourceToTerraform(struct?: DataSchemasPanelGeomapDatasource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    uid: cdktf.stringToTerraform(struct!.uid),
  }
}


export function dataSchemasPanelGeomapDatasourceToHclTerraform(struct?: DataSchemasPanelGeomapDatasource | cdktf.IResolvable): any {
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

export class DataSchemasPanelGeomapDatasourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasPanelGeomapDatasource | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataSchemasPanelGeomapDatasource | cdktf.IResolvable | undefined) {
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
export interface DataSchemasPanelGeomapFieldConfigDefaultsColor {
  /**
  * The fixed color value for fixed or shades color modes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#fixed_color DataSchemasPanelGeomap#fixed_color}
  */
  readonly fixedColor?: string;
  /**
  * The main color scheme mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#mode DataSchemasPanelGeomap#mode}
  */
  readonly mode: string;
  /**
  * Some visualizations need to know how to assign a series color from by value color schemes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#series_by DataSchemasPanelGeomap#series_by}
  */
  readonly seriesBy?: string;
}

export function dataSchemasPanelGeomapFieldConfigDefaultsColorToTerraform(struct?: DataSchemasPanelGeomapFieldConfigDefaultsColor | cdktf.IResolvable): any {
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


export function dataSchemasPanelGeomapFieldConfigDefaultsColorToHclTerraform(struct?: DataSchemasPanelGeomapFieldConfigDefaultsColor | cdktf.IResolvable): any {
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

export class DataSchemasPanelGeomapFieldConfigDefaultsColorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasPanelGeomapFieldConfigDefaultsColor | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataSchemasPanelGeomapFieldConfigDefaultsColor | cdktf.IResolvable | undefined) {
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
export interface DataSchemasPanelGeomapFieldConfigDefaultsCustomHideFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#legend DataSchemasPanelGeomap#legend}
  */
  readonly legend: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#tooltip DataSchemasPanelGeomap#tooltip}
  */
  readonly tooltip: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#viz DataSchemasPanelGeomap#viz}
  */
  readonly viz: boolean | cdktf.IResolvable;
}

export function dataSchemasPanelGeomapFieldConfigDefaultsCustomHideFromToTerraform(struct?: DataSchemasPanelGeomapFieldConfigDefaultsCustomHideFrom | cdktf.IResolvable): any {
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


export function dataSchemasPanelGeomapFieldConfigDefaultsCustomHideFromToHclTerraform(struct?: DataSchemasPanelGeomapFieldConfigDefaultsCustomHideFrom | cdktf.IResolvable): any {
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

export class DataSchemasPanelGeomapFieldConfigDefaultsCustomHideFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasPanelGeomapFieldConfigDefaultsCustomHideFrom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataSchemasPanelGeomapFieldConfigDefaultsCustomHideFrom | cdktf.IResolvable | undefined) {
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
export interface DataSchemasPanelGeomapFieldConfigDefaultsCustomLineStyle {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#dash DataSchemasPanelGeomap#dash}
  */
  readonly dash?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#fill DataSchemasPanelGeomap#fill}
  */
  readonly fill?: string;
}

export function dataSchemasPanelGeomapFieldConfigDefaultsCustomLineStyleToTerraform(struct?: DataSchemasPanelGeomapFieldConfigDefaultsCustomLineStyle | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dash: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.dash),
    fill: cdktf.stringToTerraform(struct!.fill),
  }
}


export function dataSchemasPanelGeomapFieldConfigDefaultsCustomLineStyleToHclTerraform(struct?: DataSchemasPanelGeomapFieldConfigDefaultsCustomLineStyle | cdktf.IResolvable): any {
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

export class DataSchemasPanelGeomapFieldConfigDefaultsCustomLineStyleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasPanelGeomapFieldConfigDefaultsCustomLineStyle | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataSchemasPanelGeomapFieldConfigDefaultsCustomLineStyle | cdktf.IResolvable | undefined) {
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
export interface DataSchemasPanelGeomapFieldConfigDefaultsCustomScaleDistribution {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#linear_threshold DataSchemasPanelGeomap#linear_threshold}
  */
  readonly linearThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#log DataSchemasPanelGeomap#log}
  */
  readonly log?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#type DataSchemasPanelGeomap#type}
  */
  readonly type: string;
}

export function dataSchemasPanelGeomapFieldConfigDefaultsCustomScaleDistributionToTerraform(struct?: DataSchemasPanelGeomapFieldConfigDefaultsCustomScaleDistribution | cdktf.IResolvable): any {
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


export function dataSchemasPanelGeomapFieldConfigDefaultsCustomScaleDistributionToHclTerraform(struct?: DataSchemasPanelGeomapFieldConfigDefaultsCustomScaleDistribution | cdktf.IResolvable): any {
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

export class DataSchemasPanelGeomapFieldConfigDefaultsCustomScaleDistributionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasPanelGeomapFieldConfigDefaultsCustomScaleDistribution | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataSchemasPanelGeomapFieldConfigDefaultsCustomScaleDistribution | cdktf.IResolvable | undefined) {
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
export interface DataSchemasPanelGeomapFieldConfigDefaultsCustomStacking {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#group DataSchemasPanelGeomap#group}
  */
  readonly group?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#mode DataSchemasPanelGeomap#mode}
  */
  readonly mode?: string;
}

export function dataSchemasPanelGeomapFieldConfigDefaultsCustomStackingToTerraform(struct?: DataSchemasPanelGeomapFieldConfigDefaultsCustomStacking | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group: cdktf.stringToTerraform(struct!.group),
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}


export function dataSchemasPanelGeomapFieldConfigDefaultsCustomStackingToHclTerraform(struct?: DataSchemasPanelGeomapFieldConfigDefaultsCustomStacking | cdktf.IResolvable): any {
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

export class DataSchemasPanelGeomapFieldConfigDefaultsCustomStackingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasPanelGeomapFieldConfigDefaultsCustomStacking | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataSchemasPanelGeomapFieldConfigDefaultsCustomStacking | cdktf.IResolvable | undefined) {
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
export interface DataSchemasPanelGeomapFieldConfigDefaultsCustomThresholdsStyle {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#mode DataSchemasPanelGeomap#mode}
  */
  readonly mode: string;
}

export function dataSchemasPanelGeomapFieldConfigDefaultsCustomThresholdsStyleToTerraform(struct?: DataSchemasPanelGeomapFieldConfigDefaultsCustomThresholdsStyle | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}


export function dataSchemasPanelGeomapFieldConfigDefaultsCustomThresholdsStyleToHclTerraform(struct?: DataSchemasPanelGeomapFieldConfigDefaultsCustomThresholdsStyle | cdktf.IResolvable): any {
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

export class DataSchemasPanelGeomapFieldConfigDefaultsCustomThresholdsStyleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasPanelGeomapFieldConfigDefaultsCustomThresholdsStyle | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataSchemasPanelGeomapFieldConfigDefaultsCustomThresholdsStyle | cdktf.IResolvable | undefined) {
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
export interface DataSchemasPanelGeomapFieldConfigDefaultsCustom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#axis_centered_zero DataSchemasPanelGeomap#axis_centered_zero}
  */
  readonly axisCenteredZero?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#axis_color_mode DataSchemasPanelGeomap#axis_color_mode}
  */
  readonly axisColorMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#axis_grid_show DataSchemasPanelGeomap#axis_grid_show}
  */
  readonly axisGridShow?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#axis_label DataSchemasPanelGeomap#axis_label}
  */
  readonly axisLabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#axis_placement DataSchemasPanelGeomap#axis_placement}
  */
  readonly axisPlacement?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#axis_soft_max DataSchemasPanelGeomap#axis_soft_max}
  */
  readonly axisSoftMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#axis_soft_min DataSchemasPanelGeomap#axis_soft_min}
  */
  readonly axisSoftMin?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#axis_width DataSchemasPanelGeomap#axis_width}
  */
  readonly axisWidth?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#bar_alignment DataSchemasPanelGeomap#bar_alignment}
  */
  readonly barAlignment?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#bar_max_width DataSchemasPanelGeomap#bar_max_width}
  */
  readonly barMaxWidth?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#bar_width_factor DataSchemasPanelGeomap#bar_width_factor}
  */
  readonly barWidthFactor?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#draw_style DataSchemasPanelGeomap#draw_style}
  */
  readonly drawStyle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#fill_below_to DataSchemasPanelGeomap#fill_below_to}
  */
  readonly fillBelowTo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#fill_color DataSchemasPanelGeomap#fill_color}
  */
  readonly fillColor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#fill_opacity DataSchemasPanelGeomap#fill_opacity}
  */
  readonly fillOpacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#gradient_mode DataSchemasPanelGeomap#gradient_mode}
  */
  readonly gradientMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#hide_from DataSchemasPanelGeomap#hide_from}
  */
  readonly hideFrom?: DataSchemasPanelGeomapFieldConfigDefaultsCustomHideFrom;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#line_color DataSchemasPanelGeomap#line_color}
  */
  readonly lineColor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#line_interpolation DataSchemasPanelGeomap#line_interpolation}
  */
  readonly lineInterpolation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#line_style DataSchemasPanelGeomap#line_style}
  */
  readonly lineStyle?: DataSchemasPanelGeomapFieldConfigDefaultsCustomLineStyle;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#line_width DataSchemasPanelGeomap#line_width}
  */
  readonly lineWidth?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#point_color DataSchemasPanelGeomap#point_color}
  */
  readonly pointColor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#point_size DataSchemasPanelGeomap#point_size}
  */
  readonly pointSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#point_symbol DataSchemasPanelGeomap#point_symbol}
  */
  readonly pointSymbol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#scale_distribution DataSchemasPanelGeomap#scale_distribution}
  */
  readonly scaleDistribution?: DataSchemasPanelGeomapFieldConfigDefaultsCustomScaleDistribution;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#show_points DataSchemasPanelGeomap#show_points}
  */
  readonly showPoints?: string;
  /**
  * Indicate if null values should be treated as gaps or connected.
  * When the value is a number, it represents the maximum delta in the
  * X axis that should be considered connected.  For timeseries, this is milliseconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#span_nulls DataSchemasPanelGeomap#span_nulls}
  */
  readonly spanNulls?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#stacking DataSchemasPanelGeomap#stacking}
  */
  readonly stacking?: DataSchemasPanelGeomapFieldConfigDefaultsCustomStacking;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#thresholds_style DataSchemasPanelGeomap#thresholds_style}
  */
  readonly thresholdsStyle?: DataSchemasPanelGeomapFieldConfigDefaultsCustomThresholdsStyle;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#transform DataSchemasPanelGeomap#transform}
  */
  readonly transform?: string;
}

export function dataSchemasPanelGeomapFieldConfigDefaultsCustomToTerraform(struct?: DataSchemasPanelGeomapFieldConfigDefaultsCustom | cdktf.IResolvable): any {
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
    hide_from: dataSchemasPanelGeomapFieldConfigDefaultsCustomHideFromToTerraform(struct!.hideFrom),
    line_color: cdktf.stringToTerraform(struct!.lineColor),
    line_interpolation: cdktf.stringToTerraform(struct!.lineInterpolation),
    line_style: dataSchemasPanelGeomapFieldConfigDefaultsCustomLineStyleToTerraform(struct!.lineStyle),
    line_width: cdktf.numberToTerraform(struct!.lineWidth),
    point_color: cdktf.stringToTerraform(struct!.pointColor),
    point_size: cdktf.numberToTerraform(struct!.pointSize),
    point_symbol: cdktf.stringToTerraform(struct!.pointSymbol),
    scale_distribution: dataSchemasPanelGeomapFieldConfigDefaultsCustomScaleDistributionToTerraform(struct!.scaleDistribution),
    show_points: cdktf.stringToTerraform(struct!.showPoints),
    span_nulls: cdktf.stringToTerraform(struct!.spanNulls),
    stacking: dataSchemasPanelGeomapFieldConfigDefaultsCustomStackingToTerraform(struct!.stacking),
    thresholds_style: dataSchemasPanelGeomapFieldConfigDefaultsCustomThresholdsStyleToTerraform(struct!.thresholdsStyle),
    transform: cdktf.stringToTerraform(struct!.transform),
  }
}


export function dataSchemasPanelGeomapFieldConfigDefaultsCustomToHclTerraform(struct?: DataSchemasPanelGeomapFieldConfigDefaultsCustom | cdktf.IResolvable): any {
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
      value: dataSchemasPanelGeomapFieldConfigDefaultsCustomHideFromToHclTerraform(struct!.hideFrom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasPanelGeomapFieldConfigDefaultsCustomHideFrom",
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
      value: dataSchemasPanelGeomapFieldConfigDefaultsCustomLineStyleToHclTerraform(struct!.lineStyle),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasPanelGeomapFieldConfigDefaultsCustomLineStyle",
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
      value: dataSchemasPanelGeomapFieldConfigDefaultsCustomScaleDistributionToHclTerraform(struct!.scaleDistribution),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasPanelGeomapFieldConfigDefaultsCustomScaleDistribution",
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
      value: dataSchemasPanelGeomapFieldConfigDefaultsCustomStackingToHclTerraform(struct!.stacking),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasPanelGeomapFieldConfigDefaultsCustomStacking",
    },
    thresholds_style: {
      value: dataSchemasPanelGeomapFieldConfigDefaultsCustomThresholdsStyleToHclTerraform(struct!.thresholdsStyle),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasPanelGeomapFieldConfigDefaultsCustomThresholdsStyle",
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

export class DataSchemasPanelGeomapFieldConfigDefaultsCustomOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasPanelGeomapFieldConfigDefaultsCustom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataSchemasPanelGeomapFieldConfigDefaultsCustom | cdktf.IResolvable | undefined) {
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
  private _hideFrom = new DataSchemasPanelGeomapFieldConfigDefaultsCustomHideFromOutputReference(this, "hide_from");
  public get hideFrom() {
    return this._hideFrom;
  }
  public putHideFrom(value: DataSchemasPanelGeomapFieldConfigDefaultsCustomHideFrom) {
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
  private _lineStyle = new DataSchemasPanelGeomapFieldConfigDefaultsCustomLineStyleOutputReference(this, "line_style");
  public get lineStyle() {
    return this._lineStyle;
  }
  public putLineStyle(value: DataSchemasPanelGeomapFieldConfigDefaultsCustomLineStyle) {
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
  private _scaleDistribution = new DataSchemasPanelGeomapFieldConfigDefaultsCustomScaleDistributionOutputReference(this, "scale_distribution");
  public get scaleDistribution() {
    return this._scaleDistribution;
  }
  public putScaleDistribution(value: DataSchemasPanelGeomapFieldConfigDefaultsCustomScaleDistribution) {
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
  private _stacking = new DataSchemasPanelGeomapFieldConfigDefaultsCustomStackingOutputReference(this, "stacking");
  public get stacking() {
    return this._stacking;
  }
  public putStacking(value: DataSchemasPanelGeomapFieldConfigDefaultsCustomStacking) {
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
  private _thresholdsStyle = new DataSchemasPanelGeomapFieldConfigDefaultsCustomThresholdsStyleOutputReference(this, "thresholds_style");
  public get thresholdsStyle() {
    return this._thresholdsStyle;
  }
  public putThresholdsStyle(value: DataSchemasPanelGeomapFieldConfigDefaultsCustomThresholdsStyle) {
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
export interface DataSchemasPanelGeomapFieldConfigDefaultsMappingsRangeMapOptionsResult {
  /**
  * Text to use when the value matches
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#color DataSchemasPanelGeomap#color}
  */
  readonly color?: string;
  /**
  * Icon to display when the value matches. Only specific visualizations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#icon DataSchemasPanelGeomap#icon}
  */
  readonly icon?: string;
  /**
  * Position in the mapping array. Only used internally.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#index DataSchemasPanelGeomap#index}
  */
  readonly index?: number;
  /**
  * Text to display when the value matches
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#text DataSchemasPanelGeomap#text}
  */
  readonly text?: string;
}

export function dataSchemasPanelGeomapFieldConfigDefaultsMappingsRangeMapOptionsResultToTerraform(struct?: DataSchemasPanelGeomapFieldConfigDefaultsMappingsRangeMapOptionsResult | cdktf.IResolvable): any {
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


export function dataSchemasPanelGeomapFieldConfigDefaultsMappingsRangeMapOptionsResultToHclTerraform(struct?: DataSchemasPanelGeomapFieldConfigDefaultsMappingsRangeMapOptionsResult | cdktf.IResolvable): any {
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

export class DataSchemasPanelGeomapFieldConfigDefaultsMappingsRangeMapOptionsResultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasPanelGeomapFieldConfigDefaultsMappingsRangeMapOptionsResult | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataSchemasPanelGeomapFieldConfigDefaultsMappingsRangeMapOptionsResult | cdktf.IResolvable | undefined) {
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
export interface DataSchemasPanelGeomapFieldConfigDefaultsMappingsRangeMapOptions {
  /**
  * Min value of the range. It can be null which means -Infinity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#from DataSchemasPanelGeomap#from}
  */
  readonly from: string;
  /**
  * Config to apply when the value is within the range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#result DataSchemasPanelGeomap#result}
  */
  readonly result?: DataSchemasPanelGeomapFieldConfigDefaultsMappingsRangeMapOptionsResult;
  /**
  * Max value of the range. It can be null which means +Infinity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#to DataSchemasPanelGeomap#to}
  */
  readonly to: string;
}

export function dataSchemasPanelGeomapFieldConfigDefaultsMappingsRangeMapOptionsToTerraform(struct?: DataSchemasPanelGeomapFieldConfigDefaultsMappingsRangeMapOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: cdktf.stringToTerraform(struct!.from),
    result: dataSchemasPanelGeomapFieldConfigDefaultsMappingsRangeMapOptionsResultToTerraform(struct!.result),
    to: cdktf.stringToTerraform(struct!.to),
  }
}


export function dataSchemasPanelGeomapFieldConfigDefaultsMappingsRangeMapOptionsToHclTerraform(struct?: DataSchemasPanelGeomapFieldConfigDefaultsMappingsRangeMapOptions | cdktf.IResolvable): any {
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
      value: dataSchemasPanelGeomapFieldConfigDefaultsMappingsRangeMapOptionsResultToHclTerraform(struct!.result),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasPanelGeomapFieldConfigDefaultsMappingsRangeMapOptionsResult",
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

export class DataSchemasPanelGeomapFieldConfigDefaultsMappingsRangeMapOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasPanelGeomapFieldConfigDefaultsMappingsRangeMapOptions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataSchemasPanelGeomapFieldConfigDefaultsMappingsRangeMapOptions | cdktf.IResolvable | undefined) {
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
  private _result = new DataSchemasPanelGeomapFieldConfigDefaultsMappingsRangeMapOptionsResultOutputReference(this, "result");
  public get result() {
    return this._result;
  }
  public putResult(value: DataSchemasPanelGeomapFieldConfigDefaultsMappingsRangeMapOptionsResult) {
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
export interface DataSchemasPanelGeomapFieldConfigDefaultsMappingsRangeMap {
  /**
  * Range to match against and the result to apply when the value is within the range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#options DataSchemasPanelGeomap#options}
  */
  readonly options?: DataSchemasPanelGeomapFieldConfigDefaultsMappingsRangeMapOptions;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#type DataSchemasPanelGeomap#type}
  */
  readonly type: string;
}

export function dataSchemasPanelGeomapFieldConfigDefaultsMappingsRangeMapToTerraform(struct?: DataSchemasPanelGeomapFieldConfigDefaultsMappingsRangeMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    options: dataSchemasPanelGeomapFieldConfigDefaultsMappingsRangeMapOptionsToTerraform(struct!.options),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataSchemasPanelGeomapFieldConfigDefaultsMappingsRangeMapToHclTerraform(struct?: DataSchemasPanelGeomapFieldConfigDefaultsMappingsRangeMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    options: {
      value: dataSchemasPanelGeomapFieldConfigDefaultsMappingsRangeMapOptionsToHclTerraform(struct!.options),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasPanelGeomapFieldConfigDefaultsMappingsRangeMapOptions",
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

export class DataSchemasPanelGeomapFieldConfigDefaultsMappingsRangeMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasPanelGeomapFieldConfigDefaultsMappingsRangeMap | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataSchemasPanelGeomapFieldConfigDefaultsMappingsRangeMap | cdktf.IResolvable | undefined) {
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
  private _options = new DataSchemasPanelGeomapFieldConfigDefaultsMappingsRangeMapOptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: DataSchemasPanelGeomapFieldConfigDefaultsMappingsRangeMapOptions) {
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
export interface DataSchemasPanelGeomapFieldConfigDefaultsMappingsRegexMapOptionsResult {
  /**
  * Text to use when the value matches
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#color DataSchemasPanelGeomap#color}
  */
  readonly color?: string;
  /**
  * Icon to display when the value matches. Only specific visualizations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#icon DataSchemasPanelGeomap#icon}
  */
  readonly icon?: string;
  /**
  * Position in the mapping array. Only used internally.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#index DataSchemasPanelGeomap#index}
  */
  readonly index?: number;
  /**
  * Text to display when the value matches
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#text DataSchemasPanelGeomap#text}
  */
  readonly text?: string;
}

export function dataSchemasPanelGeomapFieldConfigDefaultsMappingsRegexMapOptionsResultToTerraform(struct?: DataSchemasPanelGeomapFieldConfigDefaultsMappingsRegexMapOptionsResult | cdktf.IResolvable): any {
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


export function dataSchemasPanelGeomapFieldConfigDefaultsMappingsRegexMapOptionsResultToHclTerraform(struct?: DataSchemasPanelGeomapFieldConfigDefaultsMappingsRegexMapOptionsResult | cdktf.IResolvable): any {
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

export class DataSchemasPanelGeomapFieldConfigDefaultsMappingsRegexMapOptionsResultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasPanelGeomapFieldConfigDefaultsMappingsRegexMapOptionsResult | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataSchemasPanelGeomapFieldConfigDefaultsMappingsRegexMapOptionsResult | cdktf.IResolvable | undefined) {
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
export interface DataSchemasPanelGeomapFieldConfigDefaultsMappingsRegexMapOptions {
  /**
  * Regular expression to match against
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#pattern DataSchemasPanelGeomap#pattern}
  */
  readonly pattern: string;
  /**
  * Config to apply when the value matches the regex
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#result DataSchemasPanelGeomap#result}
  */
  readonly result?: DataSchemasPanelGeomapFieldConfigDefaultsMappingsRegexMapOptionsResult;
}

export function dataSchemasPanelGeomapFieldConfigDefaultsMappingsRegexMapOptionsToTerraform(struct?: DataSchemasPanelGeomapFieldConfigDefaultsMappingsRegexMapOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pattern: cdktf.stringToTerraform(struct!.pattern),
    result: dataSchemasPanelGeomapFieldConfigDefaultsMappingsRegexMapOptionsResultToTerraform(struct!.result),
  }
}


export function dataSchemasPanelGeomapFieldConfigDefaultsMappingsRegexMapOptionsToHclTerraform(struct?: DataSchemasPanelGeomapFieldConfigDefaultsMappingsRegexMapOptions | cdktf.IResolvable): any {
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
      value: dataSchemasPanelGeomapFieldConfigDefaultsMappingsRegexMapOptionsResultToHclTerraform(struct!.result),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasPanelGeomapFieldConfigDefaultsMappingsRegexMapOptionsResult",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSchemasPanelGeomapFieldConfigDefaultsMappingsRegexMapOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasPanelGeomapFieldConfigDefaultsMappingsRegexMapOptions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataSchemasPanelGeomapFieldConfigDefaultsMappingsRegexMapOptions | cdktf.IResolvable | undefined) {
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
  private _result = new DataSchemasPanelGeomapFieldConfigDefaultsMappingsRegexMapOptionsResultOutputReference(this, "result");
  public get result() {
    return this._result;
  }
  public putResult(value: DataSchemasPanelGeomapFieldConfigDefaultsMappingsRegexMapOptionsResult) {
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
export interface DataSchemasPanelGeomapFieldConfigDefaultsMappingsRegexMap {
  /**
  * Regular expression to match against and the result to apply when the value matches the regex
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#options DataSchemasPanelGeomap#options}
  */
  readonly options?: DataSchemasPanelGeomapFieldConfigDefaultsMappingsRegexMapOptions;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#type DataSchemasPanelGeomap#type}
  */
  readonly type: string;
}

export function dataSchemasPanelGeomapFieldConfigDefaultsMappingsRegexMapToTerraform(struct?: DataSchemasPanelGeomapFieldConfigDefaultsMappingsRegexMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    options: dataSchemasPanelGeomapFieldConfigDefaultsMappingsRegexMapOptionsToTerraform(struct!.options),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataSchemasPanelGeomapFieldConfigDefaultsMappingsRegexMapToHclTerraform(struct?: DataSchemasPanelGeomapFieldConfigDefaultsMappingsRegexMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    options: {
      value: dataSchemasPanelGeomapFieldConfigDefaultsMappingsRegexMapOptionsToHclTerraform(struct!.options),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasPanelGeomapFieldConfigDefaultsMappingsRegexMapOptions",
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

export class DataSchemasPanelGeomapFieldConfigDefaultsMappingsRegexMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasPanelGeomapFieldConfigDefaultsMappingsRegexMap | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataSchemasPanelGeomapFieldConfigDefaultsMappingsRegexMap | cdktf.IResolvable | undefined) {
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
  private _options = new DataSchemasPanelGeomapFieldConfigDefaultsMappingsRegexMapOptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: DataSchemasPanelGeomapFieldConfigDefaultsMappingsRegexMapOptions) {
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
export interface DataSchemasPanelGeomapFieldConfigDefaultsMappingsSpecialValueMapOptionsResult {
  /**
  * Text to use when the value matches
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#color DataSchemasPanelGeomap#color}
  */
  readonly color?: string;
  /**
  * Icon to display when the value matches. Only specific visualizations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#icon DataSchemasPanelGeomap#icon}
  */
  readonly icon?: string;
  /**
  * Position in the mapping array. Only used internally.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#index DataSchemasPanelGeomap#index}
  */
  readonly index?: number;
  /**
  * Text to display when the value matches
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#text DataSchemasPanelGeomap#text}
  */
  readonly text?: string;
}

export function dataSchemasPanelGeomapFieldConfigDefaultsMappingsSpecialValueMapOptionsResultToTerraform(struct?: DataSchemasPanelGeomapFieldConfigDefaultsMappingsSpecialValueMapOptionsResult | cdktf.IResolvable): any {
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


export function dataSchemasPanelGeomapFieldConfigDefaultsMappingsSpecialValueMapOptionsResultToHclTerraform(struct?: DataSchemasPanelGeomapFieldConfigDefaultsMappingsSpecialValueMapOptionsResult | cdktf.IResolvable): any {
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

export class DataSchemasPanelGeomapFieldConfigDefaultsMappingsSpecialValueMapOptionsResultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasPanelGeomapFieldConfigDefaultsMappingsSpecialValueMapOptionsResult | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataSchemasPanelGeomapFieldConfigDefaultsMappingsSpecialValueMapOptionsResult | cdktf.IResolvable | undefined) {
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
export interface DataSchemasPanelGeomapFieldConfigDefaultsMappingsSpecialValueMapOptions {
  /**
  * Special value to match against
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#match DataSchemasPanelGeomap#match}
  */
  readonly match: string;
  /**
  * Config to apply when the value matches the special value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#result DataSchemasPanelGeomap#result}
  */
  readonly result?: DataSchemasPanelGeomapFieldConfigDefaultsMappingsSpecialValueMapOptionsResult;
}

export function dataSchemasPanelGeomapFieldConfigDefaultsMappingsSpecialValueMapOptionsToTerraform(struct?: DataSchemasPanelGeomapFieldConfigDefaultsMappingsSpecialValueMapOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match: cdktf.stringToTerraform(struct!.match),
    result: dataSchemasPanelGeomapFieldConfigDefaultsMappingsSpecialValueMapOptionsResultToTerraform(struct!.result),
  }
}


export function dataSchemasPanelGeomapFieldConfigDefaultsMappingsSpecialValueMapOptionsToHclTerraform(struct?: DataSchemasPanelGeomapFieldConfigDefaultsMappingsSpecialValueMapOptions | cdktf.IResolvable): any {
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
      value: dataSchemasPanelGeomapFieldConfigDefaultsMappingsSpecialValueMapOptionsResultToHclTerraform(struct!.result),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasPanelGeomapFieldConfigDefaultsMappingsSpecialValueMapOptionsResult",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSchemasPanelGeomapFieldConfigDefaultsMappingsSpecialValueMapOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasPanelGeomapFieldConfigDefaultsMappingsSpecialValueMapOptions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataSchemasPanelGeomapFieldConfigDefaultsMappingsSpecialValueMapOptions | cdktf.IResolvable | undefined) {
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
  private _result = new DataSchemasPanelGeomapFieldConfigDefaultsMappingsSpecialValueMapOptionsResultOutputReference(this, "result");
  public get result() {
    return this._result;
  }
  public putResult(value: DataSchemasPanelGeomapFieldConfigDefaultsMappingsSpecialValueMapOptionsResult) {
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
export interface DataSchemasPanelGeomapFieldConfigDefaultsMappingsSpecialValueMap {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#options DataSchemasPanelGeomap#options}
  */
  readonly options?: DataSchemasPanelGeomapFieldConfigDefaultsMappingsSpecialValueMapOptions;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#type DataSchemasPanelGeomap#type}
  */
  readonly type: string;
}

export function dataSchemasPanelGeomapFieldConfigDefaultsMappingsSpecialValueMapToTerraform(struct?: DataSchemasPanelGeomapFieldConfigDefaultsMappingsSpecialValueMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    options: dataSchemasPanelGeomapFieldConfigDefaultsMappingsSpecialValueMapOptionsToTerraform(struct!.options),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataSchemasPanelGeomapFieldConfigDefaultsMappingsSpecialValueMapToHclTerraform(struct?: DataSchemasPanelGeomapFieldConfigDefaultsMappingsSpecialValueMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    options: {
      value: dataSchemasPanelGeomapFieldConfigDefaultsMappingsSpecialValueMapOptionsToHclTerraform(struct!.options),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasPanelGeomapFieldConfigDefaultsMappingsSpecialValueMapOptions",
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

export class DataSchemasPanelGeomapFieldConfigDefaultsMappingsSpecialValueMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasPanelGeomapFieldConfigDefaultsMappingsSpecialValueMap | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataSchemasPanelGeomapFieldConfigDefaultsMappingsSpecialValueMap | cdktf.IResolvable | undefined) {
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
  private _options = new DataSchemasPanelGeomapFieldConfigDefaultsMappingsSpecialValueMapOptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: DataSchemasPanelGeomapFieldConfigDefaultsMappingsSpecialValueMapOptions) {
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
export interface DataSchemasPanelGeomapFieldConfigDefaultsMappingsValueMapOptions {
  /**
  * Text to use when the value matches
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#color DataSchemasPanelGeomap#color}
  */
  readonly color?: string;
  /**
  * Icon to display when the value matches. Only specific visualizations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#icon DataSchemasPanelGeomap#icon}
  */
  readonly icon?: string;
  /**
  * Position in the mapping array. Only used internally.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#index DataSchemasPanelGeomap#index}
  */
  readonly index?: number;
  /**
  * Text to display when the value matches
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#text DataSchemasPanelGeomap#text}
  */
  readonly text?: string;
}

export function dataSchemasPanelGeomapFieldConfigDefaultsMappingsValueMapOptionsToTerraform(struct?: DataSchemasPanelGeomapFieldConfigDefaultsMappingsValueMapOptions | cdktf.IResolvable): any {
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


export function dataSchemasPanelGeomapFieldConfigDefaultsMappingsValueMapOptionsToHclTerraform(struct?: DataSchemasPanelGeomapFieldConfigDefaultsMappingsValueMapOptions | cdktf.IResolvable): any {
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

export class DataSchemasPanelGeomapFieldConfigDefaultsMappingsValueMapOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSchemasPanelGeomapFieldConfigDefaultsMappingsValueMapOptions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataSchemasPanelGeomapFieldConfigDefaultsMappingsValueMapOptions | cdktf.IResolvable | undefined) {
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

export class DataSchemasPanelGeomapFieldConfigDefaultsMappingsValueMapOptionsMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: DataSchemasPanelGeomapFieldConfigDefaultsMappingsValueMapOptions } | cdktf.IResolvable

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
  public get(key: string): DataSchemasPanelGeomapFieldConfigDefaultsMappingsValueMapOptionsOutputReference {
    return new DataSchemasPanelGeomapFieldConfigDefaultsMappingsValueMapOptionsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataSchemasPanelGeomapFieldConfigDefaultsMappingsValueMap {
  /**
  * Map with <value_to_match>: ValueMappingResult. For example: { "10": { text: "Perfection!", color: "green" } }
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#options DataSchemasPanelGeomap#options}
  */
  readonly options?: { [key: string]: DataSchemasPanelGeomapFieldConfigDefaultsMappingsValueMapOptions } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#type DataSchemasPanelGeomap#type}
  */
  readonly type: string;
}

export function dataSchemasPanelGeomapFieldConfigDefaultsMappingsValueMapToTerraform(struct?: DataSchemasPanelGeomapFieldConfigDefaultsMappingsValueMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    options: cdktf.hashMapper(dataSchemasPanelGeomapFieldConfigDefaultsMappingsValueMapOptionsToTerraform)(struct!.options),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataSchemasPanelGeomapFieldConfigDefaultsMappingsValueMapToHclTerraform(struct?: DataSchemasPanelGeomapFieldConfigDefaultsMappingsValueMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    options: {
      value: cdktf.hashMapperHcl(dataSchemasPanelGeomapFieldConfigDefaultsMappingsValueMapOptionsToHclTerraform)(struct!.options),
      isBlock: true,
      type: "map",
      storageClassType: "DataSchemasPanelGeomapFieldConfigDefaultsMappingsValueMapOptionsMap",
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

export class DataSchemasPanelGeomapFieldConfigDefaultsMappingsValueMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasPanelGeomapFieldConfigDefaultsMappingsValueMap | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataSchemasPanelGeomapFieldConfigDefaultsMappingsValueMap | cdktf.IResolvable | undefined) {
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
  private _options = new DataSchemasPanelGeomapFieldConfigDefaultsMappingsValueMapOptionsMap(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: { [key: string]: DataSchemasPanelGeomapFieldConfigDefaultsMappingsValueMapOptions } | cdktf.IResolvable) {
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
export interface DataSchemasPanelGeomapFieldConfigDefaultsMappings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#range_map DataSchemasPanelGeomap#range_map}
  */
  readonly rangeMap?: DataSchemasPanelGeomapFieldConfigDefaultsMappingsRangeMap;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#regex_map DataSchemasPanelGeomap#regex_map}
  */
  readonly regexMap?: DataSchemasPanelGeomapFieldConfigDefaultsMappingsRegexMap;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#special_value_map DataSchemasPanelGeomap#special_value_map}
  */
  readonly specialValueMap?: DataSchemasPanelGeomapFieldConfigDefaultsMappingsSpecialValueMap;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#value_map DataSchemasPanelGeomap#value_map}
  */
  readonly valueMap?: DataSchemasPanelGeomapFieldConfigDefaultsMappingsValueMap;
}

export function dataSchemasPanelGeomapFieldConfigDefaultsMappingsToTerraform(struct?: DataSchemasPanelGeomapFieldConfigDefaultsMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    range_map: dataSchemasPanelGeomapFieldConfigDefaultsMappingsRangeMapToTerraform(struct!.rangeMap),
    regex_map: dataSchemasPanelGeomapFieldConfigDefaultsMappingsRegexMapToTerraform(struct!.regexMap),
    special_value_map: dataSchemasPanelGeomapFieldConfigDefaultsMappingsSpecialValueMapToTerraform(struct!.specialValueMap),
    value_map: dataSchemasPanelGeomapFieldConfigDefaultsMappingsValueMapToTerraform(struct!.valueMap),
  }
}


export function dataSchemasPanelGeomapFieldConfigDefaultsMappingsToHclTerraform(struct?: DataSchemasPanelGeomapFieldConfigDefaultsMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    range_map: {
      value: dataSchemasPanelGeomapFieldConfigDefaultsMappingsRangeMapToHclTerraform(struct!.rangeMap),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasPanelGeomapFieldConfigDefaultsMappingsRangeMap",
    },
    regex_map: {
      value: dataSchemasPanelGeomapFieldConfigDefaultsMappingsRegexMapToHclTerraform(struct!.regexMap),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasPanelGeomapFieldConfigDefaultsMappingsRegexMap",
    },
    special_value_map: {
      value: dataSchemasPanelGeomapFieldConfigDefaultsMappingsSpecialValueMapToHclTerraform(struct!.specialValueMap),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasPanelGeomapFieldConfigDefaultsMappingsSpecialValueMap",
    },
    value_map: {
      value: dataSchemasPanelGeomapFieldConfigDefaultsMappingsValueMapToHclTerraform(struct!.valueMap),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasPanelGeomapFieldConfigDefaultsMappingsValueMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSchemasPanelGeomapFieldConfigDefaultsMappingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSchemasPanelGeomapFieldConfigDefaultsMappings | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataSchemasPanelGeomapFieldConfigDefaultsMappings | cdktf.IResolvable | undefined) {
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
  private _rangeMap = new DataSchemasPanelGeomapFieldConfigDefaultsMappingsRangeMapOutputReference(this, "range_map");
  public get rangeMap() {
    return this._rangeMap;
  }
  public putRangeMap(value: DataSchemasPanelGeomapFieldConfigDefaultsMappingsRangeMap) {
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
  private _regexMap = new DataSchemasPanelGeomapFieldConfigDefaultsMappingsRegexMapOutputReference(this, "regex_map");
  public get regexMap() {
    return this._regexMap;
  }
  public putRegexMap(value: DataSchemasPanelGeomapFieldConfigDefaultsMappingsRegexMap) {
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
  private _specialValueMap = new DataSchemasPanelGeomapFieldConfigDefaultsMappingsSpecialValueMapOutputReference(this, "special_value_map");
  public get specialValueMap() {
    return this._specialValueMap;
  }
  public putSpecialValueMap(value: DataSchemasPanelGeomapFieldConfigDefaultsMappingsSpecialValueMap) {
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
  private _valueMap = new DataSchemasPanelGeomapFieldConfigDefaultsMappingsValueMapOutputReference(this, "value_map");
  public get valueMap() {
    return this._valueMap;
  }
  public putValueMap(value: DataSchemasPanelGeomapFieldConfigDefaultsMappingsValueMap) {
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

export class DataSchemasPanelGeomapFieldConfigDefaultsMappingsList extends cdktf.ComplexList {
  public internalValue? : DataSchemasPanelGeomapFieldConfigDefaultsMappings[] | cdktf.IResolvable

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
  public get(index: number): DataSchemasPanelGeomapFieldConfigDefaultsMappingsOutputReference {
    return new DataSchemasPanelGeomapFieldConfigDefaultsMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSchemasPanelGeomapFieldConfigDefaultsThresholdsSteps {
  /**
  * Color represents the color of the visual change that will occur in the dashboard when the threshold value is met or exceeded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#color DataSchemasPanelGeomap#color}
  */
  readonly color: string;
  /**
  * Value represents a specified metric for the threshold, which triggers a visual change in the dashboard when this value is met or exceeded.
  * Nulls currently appear here when serializing -Infinity to JSON.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#value DataSchemasPanelGeomap#value}
  */
  readonly value: string;
}

export function dataSchemasPanelGeomapFieldConfigDefaultsThresholdsStepsToTerraform(struct?: DataSchemasPanelGeomapFieldConfigDefaultsThresholdsSteps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktf.stringToTerraform(struct!.color),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataSchemasPanelGeomapFieldConfigDefaultsThresholdsStepsToHclTerraform(struct?: DataSchemasPanelGeomapFieldConfigDefaultsThresholdsSteps | cdktf.IResolvable): any {
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

export class DataSchemasPanelGeomapFieldConfigDefaultsThresholdsStepsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSchemasPanelGeomapFieldConfigDefaultsThresholdsSteps | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataSchemasPanelGeomapFieldConfigDefaultsThresholdsSteps | cdktf.IResolvable | undefined) {
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

export class DataSchemasPanelGeomapFieldConfigDefaultsThresholdsStepsList extends cdktf.ComplexList {
  public internalValue? : DataSchemasPanelGeomapFieldConfigDefaultsThresholdsSteps[] | cdktf.IResolvable

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
  public get(index: number): DataSchemasPanelGeomapFieldConfigDefaultsThresholdsStepsOutputReference {
    return new DataSchemasPanelGeomapFieldConfigDefaultsThresholdsStepsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSchemasPanelGeomapFieldConfigDefaultsThresholds {
  /**
  * Thresholds mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#mode DataSchemasPanelGeomap#mode}
  */
  readonly mode: string;
  /**
  * Must be sorted by 'value', first value is always -Infinity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#steps DataSchemasPanelGeomap#steps}
  */
  readonly steps?: DataSchemasPanelGeomapFieldConfigDefaultsThresholdsSteps[] | cdktf.IResolvable;
}

export function dataSchemasPanelGeomapFieldConfigDefaultsThresholdsToTerraform(struct?: DataSchemasPanelGeomapFieldConfigDefaultsThresholds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
    steps: cdktf.listMapper(dataSchemasPanelGeomapFieldConfigDefaultsThresholdsStepsToTerraform, false)(struct!.steps),
  }
}


export function dataSchemasPanelGeomapFieldConfigDefaultsThresholdsToHclTerraform(struct?: DataSchemasPanelGeomapFieldConfigDefaultsThresholds | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataSchemasPanelGeomapFieldConfigDefaultsThresholdsStepsToHclTerraform, false)(struct!.steps),
      isBlock: true,
      type: "list",
      storageClassType: "DataSchemasPanelGeomapFieldConfigDefaultsThresholdsStepsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSchemasPanelGeomapFieldConfigDefaultsThresholdsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasPanelGeomapFieldConfigDefaultsThresholds | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataSchemasPanelGeomapFieldConfigDefaultsThresholds | cdktf.IResolvable | undefined) {
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
  private _steps = new DataSchemasPanelGeomapFieldConfigDefaultsThresholdsStepsList(this, "steps", false);
  public get steps() {
    return this._steps;
  }
  public putSteps(value: DataSchemasPanelGeomapFieldConfigDefaultsThresholdsSteps[] | cdktf.IResolvable) {
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
export interface DataSchemasPanelGeomapFieldConfigDefaults {
  /**
  * Panel color configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#color DataSchemasPanelGeomap#color}
  */
  readonly color?: DataSchemasPanelGeomapFieldConfigDefaultsColor;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#custom DataSchemasPanelGeomap#custom}
  */
  readonly custom?: DataSchemasPanelGeomapFieldConfigDefaultsCustom;
  /**
  * Specify the number of decimals Grafana includes in the rendered value.
  * If you leave this field blank, Grafana automatically truncates the number of decimals based on the value.
  * For example 1.1234 will display as 1.12 and 100.456 will display as 100.
  * To display all decimals, set the unit to String.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#decimals DataSchemasPanelGeomap#decimals}
  */
  readonly decimals?: number;
  /**
  * Human readable field metadata
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#description DataSchemasPanelGeomap#description}
  */
  readonly description?: string;
  /**
  * The display value for this field.  This supports template variables blank is auto
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#display_name DataSchemasPanelGeomap#display_name}
  */
  readonly displayName?: string;
  /**
  * This can be used by data sources that return and explicit naming structure for values and labels
  * When this property is configured, this value is used rather than the default naming strategy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#display_name_from_ds DataSchemasPanelGeomap#display_name_from_ds}
  */
  readonly displayNameFromDs?: string;
  /**
  * True if data source field supports ad-hoc filters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#filterable DataSchemasPanelGeomap#filterable}
  */
  readonly filterable?: boolean | cdktf.IResolvable;
  /**
  * Convert input values into a display string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#mappings DataSchemasPanelGeomap#mappings}
  */
  readonly mappings?: DataSchemasPanelGeomapFieldConfigDefaultsMappings[] | cdktf.IResolvable;
  /**
  * The maximum value used in percentage threshold calculations. Leave blank for auto calculation based on all series and fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#max DataSchemasPanelGeomap#max}
  */
  readonly max?: number;
  /**
  * The minimum value used in percentage threshold calculations. Leave blank for auto calculation based on all series and fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#min DataSchemasPanelGeomap#min}
  */
  readonly min?: number;
  /**
  * Alternative to empty string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#no_value DataSchemasPanelGeomap#no_value}
  */
  readonly noValue?: string;
  /**
  * An explicit path to the field in the datasource.  When the frame meta includes a path,
  * This will default to ${frame.meta.path}/${field.name}
  * 
  * When defined, this value can be used as an identifier within the datasource scope, and
  * may be used to update the results
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#path DataSchemasPanelGeomap#path}
  */
  readonly path?: string;
  /**
  * Map numeric values to states
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#thresholds DataSchemasPanelGeomap#thresholds}
  */
  readonly thresholds?: DataSchemasPanelGeomapFieldConfigDefaultsThresholds;
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#unit DataSchemasPanelGeomap#unit}
  */
  readonly unit?: string;
  /**
  * True if data source can write a value to the path. Auth/authz are supported separately
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#writeable DataSchemasPanelGeomap#writeable}
  */
  readonly writeable?: boolean | cdktf.IResolvable;
}

export function dataSchemasPanelGeomapFieldConfigDefaultsToTerraform(struct?: DataSchemasPanelGeomapFieldConfigDefaults | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: dataSchemasPanelGeomapFieldConfigDefaultsColorToTerraform(struct!.color),
    custom: dataSchemasPanelGeomapFieldConfigDefaultsCustomToTerraform(struct!.custom),
    decimals: cdktf.numberToTerraform(struct!.decimals),
    description: cdktf.stringToTerraform(struct!.description),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    display_name_from_ds: cdktf.stringToTerraform(struct!.displayNameFromDs),
    filterable: cdktf.booleanToTerraform(struct!.filterable),
    mappings: cdktf.listMapper(dataSchemasPanelGeomapFieldConfigDefaultsMappingsToTerraform, false)(struct!.mappings),
    max: cdktf.numberToTerraform(struct!.max),
    min: cdktf.numberToTerraform(struct!.min),
    no_value: cdktf.stringToTerraform(struct!.noValue),
    path: cdktf.stringToTerraform(struct!.path),
    thresholds: dataSchemasPanelGeomapFieldConfigDefaultsThresholdsToTerraform(struct!.thresholds),
    unit: cdktf.stringToTerraform(struct!.unit),
    writeable: cdktf.booleanToTerraform(struct!.writeable),
  }
}


export function dataSchemasPanelGeomapFieldConfigDefaultsToHclTerraform(struct?: DataSchemasPanelGeomapFieldConfigDefaults | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    color: {
      value: dataSchemasPanelGeomapFieldConfigDefaultsColorToHclTerraform(struct!.color),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasPanelGeomapFieldConfigDefaultsColor",
    },
    custom: {
      value: dataSchemasPanelGeomapFieldConfigDefaultsCustomToHclTerraform(struct!.custom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasPanelGeomapFieldConfigDefaultsCustom",
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
      value: cdktf.listMapperHcl(dataSchemasPanelGeomapFieldConfigDefaultsMappingsToHclTerraform, false)(struct!.mappings),
      isBlock: true,
      type: "list",
      storageClassType: "DataSchemasPanelGeomapFieldConfigDefaultsMappingsList",
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
      value: dataSchemasPanelGeomapFieldConfigDefaultsThresholdsToHclTerraform(struct!.thresholds),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasPanelGeomapFieldConfigDefaultsThresholds",
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

export class DataSchemasPanelGeomapFieldConfigDefaultsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasPanelGeomapFieldConfigDefaults | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataSchemasPanelGeomapFieldConfigDefaults | cdktf.IResolvable | undefined) {
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
  private _color = new DataSchemasPanelGeomapFieldConfigDefaultsColorOutputReference(this, "color");
  public get color() {
    return this._color;
  }
  public putColor(value: DataSchemasPanelGeomapFieldConfigDefaultsColor) {
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
  private _custom = new DataSchemasPanelGeomapFieldConfigDefaultsCustomOutputReference(this, "custom");
  public get custom() {
    return this._custom;
  }
  public putCustom(value: DataSchemasPanelGeomapFieldConfigDefaultsCustom) {
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
  private _mappings = new DataSchemasPanelGeomapFieldConfigDefaultsMappingsList(this, "mappings", false);
  public get mappings() {
    return this._mappings;
  }
  public putMappings(value: DataSchemasPanelGeomapFieldConfigDefaultsMappings[] | cdktf.IResolvable) {
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
  private _thresholds = new DataSchemasPanelGeomapFieldConfigDefaultsThresholdsOutputReference(this, "thresholds");
  public get thresholds() {
    return this._thresholds;
  }
  public putThresholds(value: DataSchemasPanelGeomapFieldConfigDefaultsThresholds) {
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
export interface DataSchemasPanelGeomapFieldConfigOverridesMatcher {
}

export function dataSchemasPanelGeomapFieldConfigOverridesMatcherToTerraform(struct?: DataSchemasPanelGeomapFieldConfigOverridesMatcher | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSchemasPanelGeomapFieldConfigOverridesMatcherToHclTerraform(struct?: DataSchemasPanelGeomapFieldConfigOverridesMatcher | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSchemasPanelGeomapFieldConfigOverridesMatcherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasPanelGeomapFieldConfigOverridesMatcher | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSchemasPanelGeomapFieldConfigOverridesMatcher | cdktf.IResolvable | undefined) {
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
export interface DataSchemasPanelGeomapFieldConfigOverridesProperties {
}

export function dataSchemasPanelGeomapFieldConfigOverridesPropertiesToTerraform(struct?: DataSchemasPanelGeomapFieldConfigOverridesProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSchemasPanelGeomapFieldConfigOverridesPropertiesToHclTerraform(struct?: DataSchemasPanelGeomapFieldConfigOverridesProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSchemasPanelGeomapFieldConfigOverridesPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSchemasPanelGeomapFieldConfigOverridesProperties | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSchemasPanelGeomapFieldConfigOverridesProperties | cdktf.IResolvable | undefined) {
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

export class DataSchemasPanelGeomapFieldConfigOverridesPropertiesList extends cdktf.ComplexList {
  public internalValue? : DataSchemasPanelGeomapFieldConfigOverridesProperties[] | cdktf.IResolvable

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
  public get(index: number): DataSchemasPanelGeomapFieldConfigOverridesPropertiesOutputReference {
    return new DataSchemasPanelGeomapFieldConfigOverridesPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSchemasPanelGeomapFieldConfigOverrides {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#matcher DataSchemasPanelGeomap#matcher}
  */
  readonly matcher?: DataSchemasPanelGeomapFieldConfigOverridesMatcher;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#properties DataSchemasPanelGeomap#properties}
  */
  readonly properties?: DataSchemasPanelGeomapFieldConfigOverridesProperties[] | cdktf.IResolvable;
}

export function dataSchemasPanelGeomapFieldConfigOverridesToTerraform(struct?: DataSchemasPanelGeomapFieldConfigOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    matcher: dataSchemasPanelGeomapFieldConfigOverridesMatcherToTerraform(struct!.matcher),
    properties: cdktf.listMapper(dataSchemasPanelGeomapFieldConfigOverridesPropertiesToTerraform, false)(struct!.properties),
  }
}


export function dataSchemasPanelGeomapFieldConfigOverridesToHclTerraform(struct?: DataSchemasPanelGeomapFieldConfigOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    matcher: {
      value: dataSchemasPanelGeomapFieldConfigOverridesMatcherToHclTerraform(struct!.matcher),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasPanelGeomapFieldConfigOverridesMatcher",
    },
    properties: {
      value: cdktf.listMapperHcl(dataSchemasPanelGeomapFieldConfigOverridesPropertiesToHclTerraform, false)(struct!.properties),
      isBlock: true,
      type: "list",
      storageClassType: "DataSchemasPanelGeomapFieldConfigOverridesPropertiesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSchemasPanelGeomapFieldConfigOverridesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSchemasPanelGeomapFieldConfigOverrides | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataSchemasPanelGeomapFieldConfigOverrides | cdktf.IResolvable | undefined) {
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
  private _matcher = new DataSchemasPanelGeomapFieldConfigOverridesMatcherOutputReference(this, "matcher");
  public get matcher() {
    return this._matcher;
  }
  public putMatcher(value: DataSchemasPanelGeomapFieldConfigOverridesMatcher) {
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
  private _properties = new DataSchemasPanelGeomapFieldConfigOverridesPropertiesList(this, "properties", false);
  public get properties() {
    return this._properties;
  }
  public putProperties(value: DataSchemasPanelGeomapFieldConfigOverridesProperties[] | cdktf.IResolvable) {
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

export class DataSchemasPanelGeomapFieldConfigOverridesList extends cdktf.ComplexList {
  public internalValue? : DataSchemasPanelGeomapFieldConfigOverrides[] | cdktf.IResolvable

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
  public get(index: number): DataSchemasPanelGeomapFieldConfigOverridesOutputReference {
    return new DataSchemasPanelGeomapFieldConfigOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSchemasPanelGeomapFieldConfig {
  /**
  * Defaults are the options applied to all fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#defaults DataSchemasPanelGeomap#defaults}
  */
  readonly defaults?: DataSchemasPanelGeomapFieldConfigDefaults;
  /**
  * Overrides are the options applied to specific fields overriding the defaults.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#overrides DataSchemasPanelGeomap#overrides}
  */
  readonly overrides?: DataSchemasPanelGeomapFieldConfigOverrides[] | cdktf.IResolvable;
}

export function dataSchemasPanelGeomapFieldConfigToTerraform(struct?: DataSchemasPanelGeomapFieldConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    defaults: dataSchemasPanelGeomapFieldConfigDefaultsToTerraform(struct!.defaults),
    overrides: cdktf.listMapper(dataSchemasPanelGeomapFieldConfigOverridesToTerraform, false)(struct!.overrides),
  }
}


export function dataSchemasPanelGeomapFieldConfigToHclTerraform(struct?: DataSchemasPanelGeomapFieldConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    defaults: {
      value: dataSchemasPanelGeomapFieldConfigDefaultsToHclTerraform(struct!.defaults),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasPanelGeomapFieldConfigDefaults",
    },
    overrides: {
      value: cdktf.listMapperHcl(dataSchemasPanelGeomapFieldConfigOverridesToHclTerraform, false)(struct!.overrides),
      isBlock: true,
      type: "list",
      storageClassType: "DataSchemasPanelGeomapFieldConfigOverridesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSchemasPanelGeomapFieldConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasPanelGeomapFieldConfig | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataSchemasPanelGeomapFieldConfig | cdktf.IResolvable | undefined) {
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
  private _defaults = new DataSchemasPanelGeomapFieldConfigDefaultsOutputReference(this, "defaults");
  public get defaults() {
    return this._defaults;
  }
  public putDefaults(value: DataSchemasPanelGeomapFieldConfigDefaults) {
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
  private _overrides = new DataSchemasPanelGeomapFieldConfigOverridesList(this, "overrides", false);
  public get overrides() {
    return this._overrides;
  }
  public putOverrides(value: DataSchemasPanelGeomapFieldConfigOverrides[] | cdktf.IResolvable) {
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
export interface DataSchemasPanelGeomapGridPos {
  /**
  * Panel height. The height is the number of rows from the top edge of the panel. Defaults to 9.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#h DataSchemasPanelGeomap#h}
  */
  readonly h?: number;
  /**
  * Whether the panel is fixed within the grid. If true, the panel will not be affected by other panels' interactions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#static DataSchemasPanelGeomap#static}
  */
  readonly static?: boolean | cdktf.IResolvable;
  /**
  * Panel width. The width is the number of columns from the left edge of the panel. Defaults to 12.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#w DataSchemasPanelGeomap#w}
  */
  readonly w?: number;
  /**
  * Panel x. The x coordinate is the number of columns from the left edge of the grid. Defaults to 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#x DataSchemasPanelGeomap#x}
  */
  readonly x?: number;
  /**
  * Panel y. The y coordinate is the number of rows from the top edge of the grid. Defaults to 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#y DataSchemasPanelGeomap#y}
  */
  readonly y?: number;
}

export function dataSchemasPanelGeomapGridPosToTerraform(struct?: DataSchemasPanelGeomapGridPos | cdktf.IResolvable): any {
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


export function dataSchemasPanelGeomapGridPosToHclTerraform(struct?: DataSchemasPanelGeomapGridPos | cdktf.IResolvable): any {
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

export class DataSchemasPanelGeomapGridPosOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasPanelGeomapGridPos | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataSchemasPanelGeomapGridPos | cdktf.IResolvable | undefined) {
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
export interface DataSchemasPanelGeomapLibraryPanel {
  /**
  * Library panel name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#name DataSchemasPanelGeomap#name}
  */
  readonly name: string;
  /**
  * Library panel uid
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#uid DataSchemasPanelGeomap#uid}
  */
  readonly uid: string;
}

export function dataSchemasPanelGeomapLibraryPanelToTerraform(struct?: DataSchemasPanelGeomapLibraryPanel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    uid: cdktf.stringToTerraform(struct!.uid),
  }
}


export function dataSchemasPanelGeomapLibraryPanelToHclTerraform(struct?: DataSchemasPanelGeomapLibraryPanel | cdktf.IResolvable): any {
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

export class DataSchemasPanelGeomapLibraryPanelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasPanelGeomapLibraryPanel | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataSchemasPanelGeomapLibraryPanel | cdktf.IResolvable | undefined) {
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
export interface DataSchemasPanelGeomapLinks {
  /**
  * If true, all dashboards links will be displayed in a dropdown. If false, all dashboards links will be displayed side by side. Only valid if the type is dashboards. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#as_dropdown DataSchemasPanelGeomap#as_dropdown}
  */
  readonly asDropdown?: boolean | cdktf.IResolvable;
  /**
  * Icon name to be displayed with the link
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#icon DataSchemasPanelGeomap#icon}
  */
  readonly icon: string;
  /**
  * If true, includes current template variables values in the link as query params. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#include_vars DataSchemasPanelGeomap#include_vars}
  */
  readonly includeVars?: boolean | cdktf.IResolvable;
  /**
  * If true, includes current time range in the link as query params. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#keep_time DataSchemasPanelGeomap#keep_time}
  */
  readonly keepTime?: boolean | cdktf.IResolvable;
  /**
  * List of tags to limit the linked dashboards. If empty, all dashboards will be displayed. Only valid if the type is dashboards
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#tags DataSchemasPanelGeomap#tags}
  */
  readonly tags?: string[];
  /**
  * If true, the link will be opened in a new tab. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#target_blank DataSchemasPanelGeomap#target_blank}
  */
  readonly targetBlank?: boolean | cdktf.IResolvable;
  /**
  * Title to display with the link
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#title DataSchemasPanelGeomap#title}
  */
  readonly title: string;
  /**
  * Tooltip to display when the user hovers their mouse over it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#tooltip DataSchemasPanelGeomap#tooltip}
  */
  readonly tooltip: string;
  /**
  * Link type. Accepted values are dashboards (to refer to another dashboard) and link (to refer to an external resource)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#type DataSchemasPanelGeomap#type}
  */
  readonly type: string;
  /**
  * Link URL. Only required/valid if the type is link
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#url DataSchemasPanelGeomap#url}
  */
  readonly url: string;
}

export function dataSchemasPanelGeomapLinksToTerraform(struct?: DataSchemasPanelGeomapLinks | cdktf.IResolvable): any {
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


export function dataSchemasPanelGeomapLinksToHclTerraform(struct?: DataSchemasPanelGeomapLinks | cdktf.IResolvable): any {
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

export class DataSchemasPanelGeomapLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSchemasPanelGeomapLinks | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataSchemasPanelGeomapLinks | cdktf.IResolvable | undefined) {
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

export class DataSchemasPanelGeomapLinksList extends cdktf.ComplexList {
  public internalValue? : DataSchemasPanelGeomapLinks[] | cdktf.IResolvable

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
  public get(index: number): DataSchemasPanelGeomapLinksOutputReference {
    return new DataSchemasPanelGeomapLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSchemasPanelGeomapOptionsBasemapLocation {
  /**
  * Path to Gazetteer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#gazetteer DataSchemasPanelGeomap#gazetteer}
  */
  readonly gazetteer?: string;
  /**
  * Field mappings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#geohash DataSchemasPanelGeomap#geohash}
  */
  readonly geohash?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#latitude DataSchemasPanelGeomap#latitude}
  */
  readonly latitude?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#longitude DataSchemasPanelGeomap#longitude}
  */
  readonly longitude?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#lookup DataSchemasPanelGeomap#lookup}
  */
  readonly lookup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#mode DataSchemasPanelGeomap#mode}
  */
  readonly mode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#wkt DataSchemasPanelGeomap#wkt}
  */
  readonly wkt?: string;
}

export function dataSchemasPanelGeomapOptionsBasemapLocationToTerraform(struct?: DataSchemasPanelGeomapOptionsBasemapLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gazetteer: cdktf.stringToTerraform(struct!.gazetteer),
    geohash: cdktf.stringToTerraform(struct!.geohash),
    latitude: cdktf.stringToTerraform(struct!.latitude),
    longitude: cdktf.stringToTerraform(struct!.longitude),
    lookup: cdktf.stringToTerraform(struct!.lookup),
    mode: cdktf.stringToTerraform(struct!.mode),
    wkt: cdktf.stringToTerraform(struct!.wkt),
  }
}


export function dataSchemasPanelGeomapOptionsBasemapLocationToHclTerraform(struct?: DataSchemasPanelGeomapOptionsBasemapLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gazetteer: {
      value: cdktf.stringToHclTerraform(struct!.gazetteer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    geohash: {
      value: cdktf.stringToHclTerraform(struct!.geohash),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    latitude: {
      value: cdktf.stringToHclTerraform(struct!.latitude),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    longitude: {
      value: cdktf.stringToHclTerraform(struct!.longitude),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lookup: {
      value: cdktf.stringToHclTerraform(struct!.lookup),
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
    wkt: {
      value: cdktf.stringToHclTerraform(struct!.wkt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSchemasPanelGeomapOptionsBasemapLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasPanelGeomapOptionsBasemapLocation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gazetteer !== undefined) {
      hasAnyValues = true;
      internalValueResult.gazetteer = this._gazetteer;
    }
    if (this._geohash !== undefined) {
      hasAnyValues = true;
      internalValueResult.geohash = this._geohash;
    }
    if (this._latitude !== undefined) {
      hasAnyValues = true;
      internalValueResult.latitude = this._latitude;
    }
    if (this._longitude !== undefined) {
      hasAnyValues = true;
      internalValueResult.longitude = this._longitude;
    }
    if (this._lookup !== undefined) {
      hasAnyValues = true;
      internalValueResult.lookup = this._lookup;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._wkt !== undefined) {
      hasAnyValues = true;
      internalValueResult.wkt = this._wkt;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSchemasPanelGeomapOptionsBasemapLocation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gazetteer = undefined;
      this._geohash = undefined;
      this._latitude = undefined;
      this._longitude = undefined;
      this._lookup = undefined;
      this._mode = undefined;
      this._wkt = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gazetteer = value.gazetteer;
      this._geohash = value.geohash;
      this._latitude = value.latitude;
      this._longitude = value.longitude;
      this._lookup = value.lookup;
      this._mode = value.mode;
      this._wkt = value.wkt;
    }
  }

  // gazetteer - computed: true, optional: true, required: false
  private _gazetteer?: string; 
  public get gazetteer() {
    return this.getStringAttribute('gazetteer');
  }
  public set gazetteer(value: string) {
    this._gazetteer = value;
  }
  public resetGazetteer() {
    this._gazetteer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gazetteerInput() {
    return this._gazetteer;
  }

  // geohash - computed: true, optional: true, required: false
  private _geohash?: string; 
  public get geohash() {
    return this.getStringAttribute('geohash');
  }
  public set geohash(value: string) {
    this._geohash = value;
  }
  public resetGeohash() {
    this._geohash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geohashInput() {
    return this._geohash;
  }

  // latitude - computed: true, optional: true, required: false
  private _latitude?: string; 
  public get latitude() {
    return this.getStringAttribute('latitude');
  }
  public set latitude(value: string) {
    this._latitude = value;
  }
  public resetLatitude() {
    this._latitude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latitudeInput() {
    return this._latitude;
  }

  // longitude - computed: true, optional: true, required: false
  private _longitude?: string; 
  public get longitude() {
    return this.getStringAttribute('longitude');
  }
  public set longitude(value: string) {
    this._longitude = value;
  }
  public resetLongitude() {
    this._longitude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get longitudeInput() {
    return this._longitude;
  }

  // lookup - computed: true, optional: true, required: false
  private _lookup?: string; 
  public get lookup() {
    return this.getStringAttribute('lookup');
  }
  public set lookup(value: string) {
    this._lookup = value;
  }
  public resetLookup() {
    this._lookup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lookupInput() {
    return this._lookup;
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

  // wkt - computed: true, optional: true, required: false
  private _wkt?: string; 
  public get wkt() {
    return this.getStringAttribute('wkt');
  }
  public set wkt(value: string) {
    this._wkt = value;
  }
  public resetWkt() {
    this._wkt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wktInput() {
    return this._wkt;
  }
}
export interface DataSchemasPanelGeomapOptionsBasemap {
  /**
  * Common method to define geometry fields
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#location DataSchemasPanelGeomap#location}
  */
  readonly location?: DataSchemasPanelGeomapOptionsBasemapLocation;
  /**
  * configured unique display name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#name DataSchemasPanelGeomap#name}
  */
  readonly name: string;
  /**
  * Common properties:
  * https://openlayers.org/en/latest/apidoc/module-ol_layer_Base-BaseLayer.html
  * Layer opacity (0-1)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#opacity DataSchemasPanelGeomap#opacity}
  */
  readonly opacity?: number;
  /**
  * Check tooltip (defaults to true)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#tooltip DataSchemasPanelGeomap#tooltip}
  */
  readonly tooltip?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#type DataSchemasPanelGeomap#type}
  */
  readonly type: string;
}

export function dataSchemasPanelGeomapOptionsBasemapToTerraform(struct?: DataSchemasPanelGeomapOptionsBasemap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    location: dataSchemasPanelGeomapOptionsBasemapLocationToTerraform(struct!.location),
    name: cdktf.stringToTerraform(struct!.name),
    opacity: cdktf.numberToTerraform(struct!.opacity),
    tooltip: cdktf.booleanToTerraform(struct!.tooltip),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataSchemasPanelGeomapOptionsBasemapToHclTerraform(struct?: DataSchemasPanelGeomapOptionsBasemap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    location: {
      value: dataSchemasPanelGeomapOptionsBasemapLocationToHclTerraform(struct!.location),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasPanelGeomapOptionsBasemapLocation",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    opacity: {
      value: cdktf.numberToHclTerraform(struct!.opacity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tooltip: {
      value: cdktf.booleanToHclTerraform(struct!.tooltip),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSchemasPanelGeomapOptionsBasemapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasPanelGeomapOptionsBasemap | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._location?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._opacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.opacity = this._opacity;
    }
    if (this._tooltip !== undefined) {
      hasAnyValues = true;
      internalValueResult.tooltip = this._tooltip;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSchemasPanelGeomapOptionsBasemap | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._location.internalValue = undefined;
      this._name = undefined;
      this._opacity = undefined;
      this._tooltip = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._location.internalValue = value.location;
      this._name = value.name;
      this._opacity = value.opacity;
      this._tooltip = value.tooltip;
      this._type = value.type;
    }
  }

  // location - computed: true, optional: true, required: false
  private _location = new DataSchemasPanelGeomapOptionsBasemapLocationOutputReference(this, "location");
  public get location() {
    return this._location;
  }
  public putLocation(value: DataSchemasPanelGeomapOptionsBasemapLocation) {
    this._location.internalValue = value;
  }
  public resetLocation() {
    this._location.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location.internalValue;
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

  // opacity - computed: true, optional: true, required: false
  private _opacity?: number; 
  public get opacity() {
    return this.getNumberAttribute('opacity');
  }
  public set opacity(value: number) {
    this._opacity = value;
  }
  public resetOpacity() {
    this._opacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opacityInput() {
    return this._opacity;
  }

  // tooltip - computed: true, optional: true, required: false
  private _tooltip?: boolean | cdktf.IResolvable; 
  public get tooltip() {
    return this.getBooleanAttribute('tooltip');
  }
  public set tooltip(value: boolean | cdktf.IResolvable) {
    this._tooltip = value;
  }
  public resetTooltip() {
    this._tooltip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tooltipInput() {
    return this._tooltip;
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
export interface DataSchemasPanelGeomapOptionsControls {
  /**
  * let the mouse wheel zoom
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#mouse_wheel_zoom DataSchemasPanelGeomap#mouse_wheel_zoom}
  */
  readonly mouseWheelZoom?: boolean | cdktf.IResolvable;
  /**
  * Lower right
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#show_attribution DataSchemasPanelGeomap#show_attribution}
  */
  readonly showAttribution?: boolean | cdktf.IResolvable;
  /**
  * Show debug
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#show_debug DataSchemasPanelGeomap#show_debug}
  */
  readonly showDebug?: boolean | cdktf.IResolvable;
  /**
  * Show measure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#show_measure DataSchemasPanelGeomap#show_measure}
  */
  readonly showMeasure?: boolean | cdktf.IResolvable;
  /**
  * Scale options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#show_scale DataSchemasPanelGeomap#show_scale}
  */
  readonly showScale?: boolean | cdktf.IResolvable;
  /**
  * Zoom (upper left)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#show_zoom DataSchemasPanelGeomap#show_zoom}
  */
  readonly showZoom?: boolean | cdktf.IResolvable;
}

export function dataSchemasPanelGeomapOptionsControlsToTerraform(struct?: DataSchemasPanelGeomapOptionsControls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mouse_wheel_zoom: cdktf.booleanToTerraform(struct!.mouseWheelZoom),
    show_attribution: cdktf.booleanToTerraform(struct!.showAttribution),
    show_debug: cdktf.booleanToTerraform(struct!.showDebug),
    show_measure: cdktf.booleanToTerraform(struct!.showMeasure),
    show_scale: cdktf.booleanToTerraform(struct!.showScale),
    show_zoom: cdktf.booleanToTerraform(struct!.showZoom),
  }
}


export function dataSchemasPanelGeomapOptionsControlsToHclTerraform(struct?: DataSchemasPanelGeomapOptionsControls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mouse_wheel_zoom: {
      value: cdktf.booleanToHclTerraform(struct!.mouseWheelZoom),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_attribution: {
      value: cdktf.booleanToHclTerraform(struct!.showAttribution),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_debug: {
      value: cdktf.booleanToHclTerraform(struct!.showDebug),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_measure: {
      value: cdktf.booleanToHclTerraform(struct!.showMeasure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_scale: {
      value: cdktf.booleanToHclTerraform(struct!.showScale),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_zoom: {
      value: cdktf.booleanToHclTerraform(struct!.showZoom),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSchemasPanelGeomapOptionsControlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasPanelGeomapOptionsControls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mouseWheelZoom !== undefined) {
      hasAnyValues = true;
      internalValueResult.mouseWheelZoom = this._mouseWheelZoom;
    }
    if (this._showAttribution !== undefined) {
      hasAnyValues = true;
      internalValueResult.showAttribution = this._showAttribution;
    }
    if (this._showDebug !== undefined) {
      hasAnyValues = true;
      internalValueResult.showDebug = this._showDebug;
    }
    if (this._showMeasure !== undefined) {
      hasAnyValues = true;
      internalValueResult.showMeasure = this._showMeasure;
    }
    if (this._showScale !== undefined) {
      hasAnyValues = true;
      internalValueResult.showScale = this._showScale;
    }
    if (this._showZoom !== undefined) {
      hasAnyValues = true;
      internalValueResult.showZoom = this._showZoom;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSchemasPanelGeomapOptionsControls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mouseWheelZoom = undefined;
      this._showAttribution = undefined;
      this._showDebug = undefined;
      this._showMeasure = undefined;
      this._showScale = undefined;
      this._showZoom = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mouseWheelZoom = value.mouseWheelZoom;
      this._showAttribution = value.showAttribution;
      this._showDebug = value.showDebug;
      this._showMeasure = value.showMeasure;
      this._showScale = value.showScale;
      this._showZoom = value.showZoom;
    }
  }

  // mouse_wheel_zoom - computed: true, optional: true, required: false
  private _mouseWheelZoom?: boolean | cdktf.IResolvable; 
  public get mouseWheelZoom() {
    return this.getBooleanAttribute('mouse_wheel_zoom');
  }
  public set mouseWheelZoom(value: boolean | cdktf.IResolvable) {
    this._mouseWheelZoom = value;
  }
  public resetMouseWheelZoom() {
    this._mouseWheelZoom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mouseWheelZoomInput() {
    return this._mouseWheelZoom;
  }

  // show_attribution - computed: true, optional: true, required: false
  private _showAttribution?: boolean | cdktf.IResolvable; 
  public get showAttribution() {
    return this.getBooleanAttribute('show_attribution');
  }
  public set showAttribution(value: boolean | cdktf.IResolvable) {
    this._showAttribution = value;
  }
  public resetShowAttribution() {
    this._showAttribution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showAttributionInput() {
    return this._showAttribution;
  }

  // show_debug - computed: true, optional: true, required: false
  private _showDebug?: boolean | cdktf.IResolvable; 
  public get showDebug() {
    return this.getBooleanAttribute('show_debug');
  }
  public set showDebug(value: boolean | cdktf.IResolvable) {
    this._showDebug = value;
  }
  public resetShowDebug() {
    this._showDebug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showDebugInput() {
    return this._showDebug;
  }

  // show_measure - computed: true, optional: true, required: false
  private _showMeasure?: boolean | cdktf.IResolvable; 
  public get showMeasure() {
    return this.getBooleanAttribute('show_measure');
  }
  public set showMeasure(value: boolean | cdktf.IResolvable) {
    this._showMeasure = value;
  }
  public resetShowMeasure() {
    this._showMeasure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showMeasureInput() {
    return this._showMeasure;
  }

  // show_scale - computed: true, optional: true, required: false
  private _showScale?: boolean | cdktf.IResolvable; 
  public get showScale() {
    return this.getBooleanAttribute('show_scale');
  }
  public set showScale(value: boolean | cdktf.IResolvable) {
    this._showScale = value;
  }
  public resetShowScale() {
    this._showScale = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showScaleInput() {
    return this._showScale;
  }

  // show_zoom - computed: true, optional: true, required: false
  private _showZoom?: boolean | cdktf.IResolvable; 
  public get showZoom() {
    return this.getBooleanAttribute('show_zoom');
  }
  public set showZoom(value: boolean | cdktf.IResolvable) {
    this._showZoom = value;
  }
  public resetShowZoom() {
    this._showZoom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showZoomInput() {
    return this._showZoom;
  }
}
export interface DataSchemasPanelGeomapOptionsLayersLocation {
  /**
  * Path to Gazetteer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#gazetteer DataSchemasPanelGeomap#gazetteer}
  */
  readonly gazetteer?: string;
  /**
  * Field mappings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#geohash DataSchemasPanelGeomap#geohash}
  */
  readonly geohash?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#latitude DataSchemasPanelGeomap#latitude}
  */
  readonly latitude?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#longitude DataSchemasPanelGeomap#longitude}
  */
  readonly longitude?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#lookup DataSchemasPanelGeomap#lookup}
  */
  readonly lookup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#mode DataSchemasPanelGeomap#mode}
  */
  readonly mode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#wkt DataSchemasPanelGeomap#wkt}
  */
  readonly wkt?: string;
}

export function dataSchemasPanelGeomapOptionsLayersLocationToTerraform(struct?: DataSchemasPanelGeomapOptionsLayersLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gazetteer: cdktf.stringToTerraform(struct!.gazetteer),
    geohash: cdktf.stringToTerraform(struct!.geohash),
    latitude: cdktf.stringToTerraform(struct!.latitude),
    longitude: cdktf.stringToTerraform(struct!.longitude),
    lookup: cdktf.stringToTerraform(struct!.lookup),
    mode: cdktf.stringToTerraform(struct!.mode),
    wkt: cdktf.stringToTerraform(struct!.wkt),
  }
}


export function dataSchemasPanelGeomapOptionsLayersLocationToHclTerraform(struct?: DataSchemasPanelGeomapOptionsLayersLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gazetteer: {
      value: cdktf.stringToHclTerraform(struct!.gazetteer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    geohash: {
      value: cdktf.stringToHclTerraform(struct!.geohash),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    latitude: {
      value: cdktf.stringToHclTerraform(struct!.latitude),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    longitude: {
      value: cdktf.stringToHclTerraform(struct!.longitude),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lookup: {
      value: cdktf.stringToHclTerraform(struct!.lookup),
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
    wkt: {
      value: cdktf.stringToHclTerraform(struct!.wkt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSchemasPanelGeomapOptionsLayersLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasPanelGeomapOptionsLayersLocation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gazetteer !== undefined) {
      hasAnyValues = true;
      internalValueResult.gazetteer = this._gazetteer;
    }
    if (this._geohash !== undefined) {
      hasAnyValues = true;
      internalValueResult.geohash = this._geohash;
    }
    if (this._latitude !== undefined) {
      hasAnyValues = true;
      internalValueResult.latitude = this._latitude;
    }
    if (this._longitude !== undefined) {
      hasAnyValues = true;
      internalValueResult.longitude = this._longitude;
    }
    if (this._lookup !== undefined) {
      hasAnyValues = true;
      internalValueResult.lookup = this._lookup;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._wkt !== undefined) {
      hasAnyValues = true;
      internalValueResult.wkt = this._wkt;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSchemasPanelGeomapOptionsLayersLocation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gazetteer = undefined;
      this._geohash = undefined;
      this._latitude = undefined;
      this._longitude = undefined;
      this._lookup = undefined;
      this._mode = undefined;
      this._wkt = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gazetteer = value.gazetteer;
      this._geohash = value.geohash;
      this._latitude = value.latitude;
      this._longitude = value.longitude;
      this._lookup = value.lookup;
      this._mode = value.mode;
      this._wkt = value.wkt;
    }
  }

  // gazetteer - computed: true, optional: true, required: false
  private _gazetteer?: string; 
  public get gazetteer() {
    return this.getStringAttribute('gazetteer');
  }
  public set gazetteer(value: string) {
    this._gazetteer = value;
  }
  public resetGazetteer() {
    this._gazetteer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gazetteerInput() {
    return this._gazetteer;
  }

  // geohash - computed: true, optional: true, required: false
  private _geohash?: string; 
  public get geohash() {
    return this.getStringAttribute('geohash');
  }
  public set geohash(value: string) {
    this._geohash = value;
  }
  public resetGeohash() {
    this._geohash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geohashInput() {
    return this._geohash;
  }

  // latitude - computed: true, optional: true, required: false
  private _latitude?: string; 
  public get latitude() {
    return this.getStringAttribute('latitude');
  }
  public set latitude(value: string) {
    this._latitude = value;
  }
  public resetLatitude() {
    this._latitude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latitudeInput() {
    return this._latitude;
  }

  // longitude - computed: true, optional: true, required: false
  private _longitude?: string; 
  public get longitude() {
    return this.getStringAttribute('longitude');
  }
  public set longitude(value: string) {
    this._longitude = value;
  }
  public resetLongitude() {
    this._longitude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get longitudeInput() {
    return this._longitude;
  }

  // lookup - computed: true, optional: true, required: false
  private _lookup?: string; 
  public get lookup() {
    return this.getStringAttribute('lookup');
  }
  public set lookup(value: string) {
    this._lookup = value;
  }
  public resetLookup() {
    this._lookup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lookupInput() {
    return this._lookup;
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

  // wkt - computed: true, optional: true, required: false
  private _wkt?: string; 
  public get wkt() {
    return this.getStringAttribute('wkt');
  }
  public set wkt(value: string) {
    this._wkt = value;
  }
  public resetWkt() {
    this._wkt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wktInput() {
    return this._wkt;
  }
}
export interface DataSchemasPanelGeomapOptionsLayers {
  /**
  * Common method to define geometry fields
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#location DataSchemasPanelGeomap#location}
  */
  readonly location?: DataSchemasPanelGeomapOptionsLayersLocation;
  /**
  * configured unique display name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#name DataSchemasPanelGeomap#name}
  */
  readonly name: string;
  /**
  * Common properties:
  * https://openlayers.org/en/latest/apidoc/module-ol_layer_Base-BaseLayer.html
  * Layer opacity (0-1)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#opacity DataSchemasPanelGeomap#opacity}
  */
  readonly opacity?: number;
  /**
  * Check tooltip (defaults to true)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#tooltip DataSchemasPanelGeomap#tooltip}
  */
  readonly tooltip?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#type DataSchemasPanelGeomap#type}
  */
  readonly type: string;
}

export function dataSchemasPanelGeomapOptionsLayersToTerraform(struct?: DataSchemasPanelGeomapOptionsLayers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    location: dataSchemasPanelGeomapOptionsLayersLocationToTerraform(struct!.location),
    name: cdktf.stringToTerraform(struct!.name),
    opacity: cdktf.numberToTerraform(struct!.opacity),
    tooltip: cdktf.booleanToTerraform(struct!.tooltip),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataSchemasPanelGeomapOptionsLayersToHclTerraform(struct?: DataSchemasPanelGeomapOptionsLayers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    location: {
      value: dataSchemasPanelGeomapOptionsLayersLocationToHclTerraform(struct!.location),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasPanelGeomapOptionsLayersLocation",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    opacity: {
      value: cdktf.numberToHclTerraform(struct!.opacity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tooltip: {
      value: cdktf.booleanToHclTerraform(struct!.tooltip),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSchemasPanelGeomapOptionsLayersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSchemasPanelGeomapOptionsLayers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._location?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._opacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.opacity = this._opacity;
    }
    if (this._tooltip !== undefined) {
      hasAnyValues = true;
      internalValueResult.tooltip = this._tooltip;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSchemasPanelGeomapOptionsLayers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._location.internalValue = undefined;
      this._name = undefined;
      this._opacity = undefined;
      this._tooltip = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._location.internalValue = value.location;
      this._name = value.name;
      this._opacity = value.opacity;
      this._tooltip = value.tooltip;
      this._type = value.type;
    }
  }

  // location - computed: true, optional: true, required: false
  private _location = new DataSchemasPanelGeomapOptionsLayersLocationOutputReference(this, "location");
  public get location() {
    return this._location;
  }
  public putLocation(value: DataSchemasPanelGeomapOptionsLayersLocation) {
    this._location.internalValue = value;
  }
  public resetLocation() {
    this._location.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location.internalValue;
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

  // opacity - computed: true, optional: true, required: false
  private _opacity?: number; 
  public get opacity() {
    return this.getNumberAttribute('opacity');
  }
  public set opacity(value: number) {
    this._opacity = value;
  }
  public resetOpacity() {
    this._opacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opacityInput() {
    return this._opacity;
  }

  // tooltip - computed: true, optional: true, required: false
  private _tooltip?: boolean | cdktf.IResolvable; 
  public get tooltip() {
    return this.getBooleanAttribute('tooltip');
  }
  public set tooltip(value: boolean | cdktf.IResolvable) {
    this._tooltip = value;
  }
  public resetTooltip() {
    this._tooltip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tooltipInput() {
    return this._tooltip;
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

export class DataSchemasPanelGeomapOptionsLayersList extends cdktf.ComplexList {
  public internalValue? : DataSchemasPanelGeomapOptionsLayers[] | cdktf.IResolvable

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
  public get(index: number): DataSchemasPanelGeomapOptionsLayersOutputReference {
    return new DataSchemasPanelGeomapOptionsLayersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSchemasPanelGeomapOptionsTooltip {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#mode DataSchemasPanelGeomap#mode}
  */
  readonly mode: string;
}

export function dataSchemasPanelGeomapOptionsTooltipToTerraform(struct?: DataSchemasPanelGeomapOptionsTooltip | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}


export function dataSchemasPanelGeomapOptionsTooltipToHclTerraform(struct?: DataSchemasPanelGeomapOptionsTooltip | cdktf.IResolvable): any {
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

export class DataSchemasPanelGeomapOptionsTooltipOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasPanelGeomapOptionsTooltip | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataSchemasPanelGeomapOptionsTooltip | cdktf.IResolvable | undefined) {
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
export interface DataSchemasPanelGeomapOptionsView {
  /**
  *  Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#all_layers DataSchemasPanelGeomap#all_layers}
  */
  readonly allLayers?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#last_only DataSchemasPanelGeomap#last_only}
  */
  readonly lastOnly?: boolean | cdktf.IResolvable;
  /**
  *  Defaults to 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#lat DataSchemasPanelGeomap#lat}
  */
  readonly lat?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#layer DataSchemasPanelGeomap#layer}
  */
  readonly layer?: string;
  /**
  *  Defaults to 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#lon DataSchemasPanelGeomap#lon}
  */
  readonly lon?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#max_zoom DataSchemasPanelGeomap#max_zoom}
  */
  readonly maxZoom?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#min_zoom DataSchemasPanelGeomap#min_zoom}
  */
  readonly minZoom?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#padding DataSchemasPanelGeomap#padding}
  */
  readonly padding?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#shared DataSchemasPanelGeomap#shared}
  */
  readonly shared?: boolean | cdktf.IResolvable;
  /**
  *  Defaults to 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#zoom DataSchemasPanelGeomap#zoom}
  */
  readonly zoom?: number;
}

export function dataSchemasPanelGeomapOptionsViewToTerraform(struct?: DataSchemasPanelGeomapOptionsView | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_layers: cdktf.booleanToTerraform(struct!.allLayers),
    last_only: cdktf.booleanToTerraform(struct!.lastOnly),
    lat: cdktf.numberToTerraform(struct!.lat),
    layer: cdktf.stringToTerraform(struct!.layer),
    lon: cdktf.numberToTerraform(struct!.lon),
    max_zoom: cdktf.numberToTerraform(struct!.maxZoom),
    min_zoom: cdktf.numberToTerraform(struct!.minZoom),
    padding: cdktf.numberToTerraform(struct!.padding),
    shared: cdktf.booleanToTerraform(struct!.shared),
    zoom: cdktf.numberToTerraform(struct!.zoom),
  }
}


export function dataSchemasPanelGeomapOptionsViewToHclTerraform(struct?: DataSchemasPanelGeomapOptionsView | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_layers: {
      value: cdktf.booleanToHclTerraform(struct!.allLayers),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    last_only: {
      value: cdktf.booleanToHclTerraform(struct!.lastOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    lat: {
      value: cdktf.numberToHclTerraform(struct!.lat),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    layer: {
      value: cdktf.stringToHclTerraform(struct!.layer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lon: {
      value: cdktf.numberToHclTerraform(struct!.lon),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_zoom: {
      value: cdktf.numberToHclTerraform(struct!.maxZoom),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_zoom: {
      value: cdktf.numberToHclTerraform(struct!.minZoom),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    padding: {
      value: cdktf.numberToHclTerraform(struct!.padding),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    shared: {
      value: cdktf.booleanToHclTerraform(struct!.shared),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    zoom: {
      value: cdktf.numberToHclTerraform(struct!.zoom),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSchemasPanelGeomapOptionsViewOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasPanelGeomapOptionsView | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allLayers !== undefined) {
      hasAnyValues = true;
      internalValueResult.allLayers = this._allLayers;
    }
    if (this._lastOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastOnly = this._lastOnly;
    }
    if (this._lat !== undefined) {
      hasAnyValues = true;
      internalValueResult.lat = this._lat;
    }
    if (this._layer !== undefined) {
      hasAnyValues = true;
      internalValueResult.layer = this._layer;
    }
    if (this._lon !== undefined) {
      hasAnyValues = true;
      internalValueResult.lon = this._lon;
    }
    if (this._maxZoom !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxZoom = this._maxZoom;
    }
    if (this._minZoom !== undefined) {
      hasAnyValues = true;
      internalValueResult.minZoom = this._minZoom;
    }
    if (this._padding !== undefined) {
      hasAnyValues = true;
      internalValueResult.padding = this._padding;
    }
    if (this._shared !== undefined) {
      hasAnyValues = true;
      internalValueResult.shared = this._shared;
    }
    if (this._zoom !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoom = this._zoom;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSchemasPanelGeomapOptionsView | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allLayers = undefined;
      this._lastOnly = undefined;
      this._lat = undefined;
      this._layer = undefined;
      this._lon = undefined;
      this._maxZoom = undefined;
      this._minZoom = undefined;
      this._padding = undefined;
      this._shared = undefined;
      this._zoom = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allLayers = value.allLayers;
      this._lastOnly = value.lastOnly;
      this._lat = value.lat;
      this._layer = value.layer;
      this._lon = value.lon;
      this._maxZoom = value.maxZoom;
      this._minZoom = value.minZoom;
      this._padding = value.padding;
      this._shared = value.shared;
      this._zoom = value.zoom;
    }
  }

  // all_layers - computed: true, optional: true, required: false
  private _allLayers?: boolean | cdktf.IResolvable; 
  public get allLayers() {
    return this.getBooleanAttribute('all_layers');
  }
  public set allLayers(value: boolean | cdktf.IResolvable) {
    this._allLayers = value;
  }
  public resetAllLayers() {
    this._allLayers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allLayersInput() {
    return this._allLayers;
  }

  // last_only - computed: true, optional: true, required: false
  private _lastOnly?: boolean | cdktf.IResolvable; 
  public get lastOnly() {
    return this.getBooleanAttribute('last_only');
  }
  public set lastOnly(value: boolean | cdktf.IResolvable) {
    this._lastOnly = value;
  }
  public resetLastOnly() {
    this._lastOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastOnlyInput() {
    return this._lastOnly;
  }

  // lat - computed: true, optional: true, required: false
  private _lat?: number; 
  public get lat() {
    return this.getNumberAttribute('lat');
  }
  public set lat(value: number) {
    this._lat = value;
  }
  public resetLat() {
    this._lat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latInput() {
    return this._lat;
  }

  // layer - computed: true, optional: true, required: false
  private _layer?: string; 
  public get layer() {
    return this.getStringAttribute('layer');
  }
  public set layer(value: string) {
    this._layer = value;
  }
  public resetLayer() {
    this._layer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get layerInput() {
    return this._layer;
  }

  // lon - computed: true, optional: true, required: false
  private _lon?: number; 
  public get lon() {
    return this.getNumberAttribute('lon');
  }
  public set lon(value: number) {
    this._lon = value;
  }
  public resetLon() {
    this._lon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lonInput() {
    return this._lon;
  }

  // max_zoom - computed: true, optional: true, required: false
  private _maxZoom?: number; 
  public get maxZoom() {
    return this.getNumberAttribute('max_zoom');
  }
  public set maxZoom(value: number) {
    this._maxZoom = value;
  }
  public resetMaxZoom() {
    this._maxZoom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxZoomInput() {
    return this._maxZoom;
  }

  // min_zoom - computed: true, optional: true, required: false
  private _minZoom?: number; 
  public get minZoom() {
    return this.getNumberAttribute('min_zoom');
  }
  public set minZoom(value: number) {
    this._minZoom = value;
  }
  public resetMinZoom() {
    this._minZoom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minZoomInput() {
    return this._minZoom;
  }

  // padding - computed: true, optional: true, required: false
  private _padding?: number; 
  public get padding() {
    return this.getNumberAttribute('padding');
  }
  public set padding(value: number) {
    this._padding = value;
  }
  public resetPadding() {
    this._padding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paddingInput() {
    return this._padding;
  }

  // shared - computed: true, optional: true, required: false
  private _shared?: boolean | cdktf.IResolvable; 
  public get shared() {
    return this.getBooleanAttribute('shared');
  }
  public set shared(value: boolean | cdktf.IResolvable) {
    this._shared = value;
  }
  public resetShared() {
    this._shared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedInput() {
    return this._shared;
  }

  // zoom - computed: true, optional: true, required: false
  private _zoom?: number; 
  public get zoom() {
    return this.getNumberAttribute('zoom');
  }
  public set zoom(value: number) {
    this._zoom = value;
  }
  public resetZoom() {
    this._zoom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoomInput() {
    return this._zoom;
  }
}
export interface DataSchemasPanelGeomapOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#basemap DataSchemasPanelGeomap#basemap}
  */
  readonly basemap?: DataSchemasPanelGeomapOptionsBasemap;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#controls DataSchemasPanelGeomap#controls}
  */
  readonly controls?: DataSchemasPanelGeomapOptionsControls;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#layers DataSchemasPanelGeomap#layers}
  */
  readonly layers?: DataSchemasPanelGeomapOptionsLayers[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#tooltip DataSchemasPanelGeomap#tooltip}
  */
  readonly tooltip?: DataSchemasPanelGeomapOptionsTooltip;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#view DataSchemasPanelGeomap#view}
  */
  readonly view?: DataSchemasPanelGeomapOptionsView;
}

export function dataSchemasPanelGeomapOptionsToTerraform(struct?: DataSchemasPanelGeomapOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    basemap: dataSchemasPanelGeomapOptionsBasemapToTerraform(struct!.basemap),
    controls: dataSchemasPanelGeomapOptionsControlsToTerraform(struct!.controls),
    layers: cdktf.listMapper(dataSchemasPanelGeomapOptionsLayersToTerraform, false)(struct!.layers),
    tooltip: dataSchemasPanelGeomapOptionsTooltipToTerraform(struct!.tooltip),
    view: dataSchemasPanelGeomapOptionsViewToTerraform(struct!.view),
  }
}


export function dataSchemasPanelGeomapOptionsToHclTerraform(struct?: DataSchemasPanelGeomapOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    basemap: {
      value: dataSchemasPanelGeomapOptionsBasemapToHclTerraform(struct!.basemap),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasPanelGeomapOptionsBasemap",
    },
    controls: {
      value: dataSchemasPanelGeomapOptionsControlsToHclTerraform(struct!.controls),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasPanelGeomapOptionsControls",
    },
    layers: {
      value: cdktf.listMapperHcl(dataSchemasPanelGeomapOptionsLayersToHclTerraform, false)(struct!.layers),
      isBlock: true,
      type: "list",
      storageClassType: "DataSchemasPanelGeomapOptionsLayersList",
    },
    tooltip: {
      value: dataSchemasPanelGeomapOptionsTooltipToHclTerraform(struct!.tooltip),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasPanelGeomapOptionsTooltip",
    },
    view: {
      value: dataSchemasPanelGeomapOptionsViewToHclTerraform(struct!.view),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasPanelGeomapOptionsView",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSchemasPanelGeomapOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasPanelGeomapOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._basemap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.basemap = this._basemap?.internalValue;
    }
    if (this._controls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.controls = this._controls?.internalValue;
    }
    if (this._layers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.layers = this._layers?.internalValue;
    }
    if (this._tooltip?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tooltip = this._tooltip?.internalValue;
    }
    if (this._view?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.view = this._view?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSchemasPanelGeomapOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._basemap.internalValue = undefined;
      this._controls.internalValue = undefined;
      this._layers.internalValue = undefined;
      this._tooltip.internalValue = undefined;
      this._view.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._basemap.internalValue = value.basemap;
      this._controls.internalValue = value.controls;
      this._layers.internalValue = value.layers;
      this._tooltip.internalValue = value.tooltip;
      this._view.internalValue = value.view;
    }
  }

  // basemap - computed: true, optional: true, required: false
  private _basemap = new DataSchemasPanelGeomapOptionsBasemapOutputReference(this, "basemap");
  public get basemap() {
    return this._basemap;
  }
  public putBasemap(value: DataSchemasPanelGeomapOptionsBasemap) {
    this._basemap.internalValue = value;
  }
  public resetBasemap() {
    this._basemap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basemapInput() {
    return this._basemap.internalValue;
  }

  // controls - computed: true, optional: true, required: false
  private _controls = new DataSchemasPanelGeomapOptionsControlsOutputReference(this, "controls");
  public get controls() {
    return this._controls;
  }
  public putControls(value: DataSchemasPanelGeomapOptionsControls) {
    this._controls.internalValue = value;
  }
  public resetControls() {
    this._controls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlsInput() {
    return this._controls.internalValue;
  }

  // layers - computed: true, optional: true, required: false
  private _layers = new DataSchemasPanelGeomapOptionsLayersList(this, "layers", false);
  public get layers() {
    return this._layers;
  }
  public putLayers(value: DataSchemasPanelGeomapOptionsLayers[] | cdktf.IResolvable) {
    this._layers.internalValue = value;
  }
  public resetLayers() {
    this._layers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get layersInput() {
    return this._layers.internalValue;
  }

  // tooltip - computed: true, optional: true, required: false
  private _tooltip = new DataSchemasPanelGeomapOptionsTooltipOutputReference(this, "tooltip");
  public get tooltip() {
    return this._tooltip;
  }
  public putTooltip(value: DataSchemasPanelGeomapOptionsTooltip) {
    this._tooltip.internalValue = value;
  }
  public resetTooltip() {
    this._tooltip.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tooltipInput() {
    return this._tooltip.internalValue;
  }

  // view - computed: true, optional: true, required: false
  private _view = new DataSchemasPanelGeomapOptionsViewOutputReference(this, "view");
  public get view() {
    return this._view;
  }
  public putView(value: DataSchemasPanelGeomapOptionsView) {
    this._view.internalValue = value;
  }
  public resetView() {
    this._view.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewInput() {
    return this._view.internalValue;
  }
}
export interface DataSchemasPanelGeomapTransformationsFilter {
}

export function dataSchemasPanelGeomapTransformationsFilterToTerraform(struct?: DataSchemasPanelGeomapTransformationsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSchemasPanelGeomapTransformationsFilterToHclTerraform(struct?: DataSchemasPanelGeomapTransformationsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSchemasPanelGeomapTransformationsFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasPanelGeomapTransformationsFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSchemasPanelGeomapTransformationsFilter | cdktf.IResolvable | undefined) {
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
export interface DataSchemasPanelGeomapTransformations {
  /**
  * Disabled transformations are skipped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#disabled DataSchemasPanelGeomap#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Optional frame matcher. When missing it will be applied to all results
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#filter DataSchemasPanelGeomap#filter}
  */
  readonly filter?: DataSchemasPanelGeomapTransformationsFilter;
}

export function dataSchemasPanelGeomapTransformationsToTerraform(struct?: DataSchemasPanelGeomapTransformations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    filter: dataSchemasPanelGeomapTransformationsFilterToTerraform(struct!.filter),
  }
}


export function dataSchemasPanelGeomapTransformationsToHclTerraform(struct?: DataSchemasPanelGeomapTransformations | cdktf.IResolvable): any {
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
      value: dataSchemasPanelGeomapTransformationsFilterToHclTerraform(struct!.filter),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasPanelGeomapTransformationsFilter",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSchemasPanelGeomapTransformationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSchemasPanelGeomapTransformations | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataSchemasPanelGeomapTransformations | cdktf.IResolvable | undefined) {
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
  private _filter = new DataSchemasPanelGeomapTransformationsFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataSchemasPanelGeomapTransformationsFilter) {
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

export class DataSchemasPanelGeomapTransformationsList extends cdktf.ComplexList {
  public internalValue? : DataSchemasPanelGeomapTransformations[] | cdktf.IResolvable

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
  public get(index: number): DataSchemasPanelGeomapTransformationsOutputReference {
    return new DataSchemasPanelGeomapTransformationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap schemas_panel_geomap}
*/
export class DataSchemasPanelGeomap extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "schemas_panel_geomap";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSchemasPanelGeomap resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSchemasPanelGeomap to import
  * @param importFromId The id of the existing DataSchemasPanelGeomap that should be imported. Refer to the {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSchemasPanelGeomap to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "schemas_panel_geomap", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/panel_geomap schemas_panel_geomap} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSchemasPanelGeomapConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataSchemasPanelGeomapConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'schemas_panel_geomap',
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
  private _datasource = new DataSchemasPanelGeomapDatasourceOutputReference(this, "datasource");
  public get datasource() {
    return this._datasource;
  }
  public putDatasource(value: DataSchemasPanelGeomapDatasource) {
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
  private _fieldConfig = new DataSchemasPanelGeomapFieldConfigOutputReference(this, "field_config");
  public get fieldConfig() {
    return this._fieldConfig;
  }
  public putFieldConfig(value: DataSchemasPanelGeomapFieldConfig) {
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
  private _gridPos = new DataSchemasPanelGeomapGridPosOutputReference(this, "grid_pos");
  public get gridPos() {
    return this._gridPos;
  }
  public putGridPos(value: DataSchemasPanelGeomapGridPos) {
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
  private _libraryPanel = new DataSchemasPanelGeomapLibraryPanelOutputReference(this, "library_panel");
  public get libraryPanel() {
    return this._libraryPanel;
  }
  public putLibraryPanel(value: DataSchemasPanelGeomapLibraryPanel) {
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
  private _links = new DataSchemasPanelGeomapLinksList(this, "links", false);
  public get links() {
    return this._links;
  }
  public putLinks(value: DataSchemasPanelGeomapLinks[] | cdktf.IResolvable) {
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
  private _options = new DataSchemasPanelGeomapOptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: DataSchemasPanelGeomapOptions) {
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
  private _transformations = new DataSchemasPanelGeomapTransformationsList(this, "transformations", false);
  public get transformations() {
    return this._transformations;
  }
  public putTransformations(value: DataSchemasPanelGeomapTransformations[] | cdktf.IResolvable) {
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
      datasource: dataSchemasPanelGeomapDatasourceToTerraform(this._datasource.internalValue),
      description: cdktf.stringToTerraform(this._description),
      field_config: dataSchemasPanelGeomapFieldConfigToTerraform(this._fieldConfig.internalValue),
      grid_pos: dataSchemasPanelGeomapGridPosToTerraform(this._gridPos.internalValue),
      interval: cdktf.stringToTerraform(this._interval),
      library_panel: dataSchemasPanelGeomapLibraryPanelToTerraform(this._libraryPanel.internalValue),
      links: cdktf.listMapper(dataSchemasPanelGeomapLinksToTerraform, false)(this._links.internalValue),
      max_data_points: cdktf.numberToTerraform(this._maxDataPoints),
      options: dataSchemasPanelGeomapOptionsToTerraform(this._options.internalValue),
      plugin_version: cdktf.stringToTerraform(this._pluginVersion),
      repeat: cdktf.stringToTerraform(this._repeat),
      repeat_direction: cdktf.stringToTerraform(this._repeatDirection),
      repeat_panel_id: cdktf.numberToTerraform(this._repeatPanelId),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      targets: cdktf.listMapper(cdktf.stringToTerraform, false)(this._targets),
      time_from: cdktf.stringToTerraform(this._timeFrom),
      time_shift: cdktf.stringToTerraform(this._timeShift),
      title: cdktf.stringToTerraform(this._title),
      transformations: cdktf.listMapper(dataSchemasPanelGeomapTransformationsToTerraform, false)(this._transformations.internalValue),
      transparent: cdktf.booleanToTerraform(this._transparent),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      datasource: {
        value: dataSchemasPanelGeomapDatasourceToHclTerraform(this._datasource.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataSchemasPanelGeomapDatasource",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      field_config: {
        value: dataSchemasPanelGeomapFieldConfigToHclTerraform(this._fieldConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataSchemasPanelGeomapFieldConfig",
      },
      grid_pos: {
        value: dataSchemasPanelGeomapGridPosToHclTerraform(this._gridPos.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataSchemasPanelGeomapGridPos",
      },
      interval: {
        value: cdktf.stringToHclTerraform(this._interval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      library_panel: {
        value: dataSchemasPanelGeomapLibraryPanelToHclTerraform(this._libraryPanel.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataSchemasPanelGeomapLibraryPanel",
      },
      links: {
        value: cdktf.listMapperHcl(dataSchemasPanelGeomapLinksToHclTerraform, false)(this._links.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataSchemasPanelGeomapLinksList",
      },
      max_data_points: {
        value: cdktf.numberToHclTerraform(this._maxDataPoints),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      options: {
        value: dataSchemasPanelGeomapOptionsToHclTerraform(this._options.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataSchemasPanelGeomapOptions",
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
        value: cdktf.listMapperHcl(dataSchemasPanelGeomapTransformationsToHclTerraform, false)(this._transformations.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataSchemasPanelGeomapTransformationsList",
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
