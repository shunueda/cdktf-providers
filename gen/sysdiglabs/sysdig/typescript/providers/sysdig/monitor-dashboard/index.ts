// https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/resources/monitor_dashboard
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MonitorDashboardConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/resources/monitor_dashboard#description MonitorDashboard#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/resources/monitor_dashboard#id MonitorDashboard#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/resources/monitor_dashboard#min_interval MonitorDashboard#min_interval}
  */
  readonly minInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/resources/monitor_dashboard#name MonitorDashboard#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/resources/monitor_dashboard#public MonitorDashboard#public}
  */
  readonly public?: boolean | cdktf.IResolvable;
  /**
  * panel block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/resources/monitor_dashboard#panel MonitorDashboard#panel}
  */
  readonly panel: MonitorDashboardPanel[] | cdktf.IResolvable;
  /**
  * scope block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/resources/monitor_dashboard#scope MonitorDashboard#scope}
  */
  readonly scope?: MonitorDashboardScope[] | cdktf.IResolvable;
  /**
  * share block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/resources/monitor_dashboard#share MonitorDashboard#share}
  */
  readonly share?: MonitorDashboardShare[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/resources/monitor_dashboard#timeouts MonitorDashboard#timeouts}
  */
  readonly timeouts?: MonitorDashboardTimeouts;
}
export interface MonitorDashboardPanelLegend {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/resources/monitor_dashboard#enabled MonitorDashboard#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/resources/monitor_dashboard#layout MonitorDashboard#layout}
  */
  readonly layout: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/resources/monitor_dashboard#position MonitorDashboard#position}
  */
  readonly position: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/resources/monitor_dashboard#show_current MonitorDashboard#show_current}
  */
  readonly showCurrent: boolean | cdktf.IResolvable;
}

export function monitorDashboardPanelLegendToTerraform(struct?: MonitorDashboardPanelLegendOutputReference | MonitorDashboardPanelLegend): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    layout: cdktf.stringToTerraform(struct!.layout),
    position: cdktf.stringToTerraform(struct!.position),
    show_current: cdktf.booleanToTerraform(struct!.showCurrent),
  }
}


export function monitorDashboardPanelLegendToHclTerraform(struct?: MonitorDashboardPanelLegendOutputReference | MonitorDashboardPanelLegend): any {
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
    layout: {
      value: cdktf.stringToHclTerraform(struct!.layout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    position: {
      value: cdktf.stringToHclTerraform(struct!.position),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    show_current: {
      value: cdktf.booleanToHclTerraform(struct!.showCurrent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorDashboardPanelLegendOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitorDashboardPanelLegend | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._layout !== undefined) {
      hasAnyValues = true;
      internalValueResult.layout = this._layout;
    }
    if (this._position !== undefined) {
      hasAnyValues = true;
      internalValueResult.position = this._position;
    }
    if (this._showCurrent !== undefined) {
      hasAnyValues = true;
      internalValueResult.showCurrent = this._showCurrent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorDashboardPanelLegend | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._layout = undefined;
      this._position = undefined;
      this._showCurrent = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._layout = value.layout;
      this._position = value.position;
      this._showCurrent = value.showCurrent;
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

  // layout - computed: false, optional: false, required: true
  private _layout?: string; 
  public get layout() {
    return this.getStringAttribute('layout');
  }
  public set layout(value: string) {
    this._layout = value;
  }
  // Temporarily expose input value. Use with caution.
  public get layoutInput() {
    return this._layout;
  }

  // position - computed: false, optional: false, required: true
  private _position?: string; 
  public get position() {
    return this.getStringAttribute('position');
  }
  public set position(value: string) {
    this._position = value;
  }
  // Temporarily expose input value. Use with caution.
  public get positionInput() {
    return this._position;
  }

  // show_current - computed: false, optional: false, required: true
  private _showCurrent?: boolean | cdktf.IResolvable; 
  public get showCurrent() {
    return this.getBooleanAttribute('show_current');
  }
  public set showCurrent(value: boolean | cdktf.IResolvable) {
    this._showCurrent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get showCurrentInput() {
    return this._showCurrent;
  }
}
export interface MonitorDashboardPanelQueryDisplayInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/resources/monitor_dashboard#display_name MonitorDashboard#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/resources/monitor_dashboard#time_series_display_name_template MonitorDashboard#time_series_display_name_template}
  */
  readonly timeSeriesDisplayNameTemplate: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/resources/monitor_dashboard#type MonitorDashboard#type}
  */
  readonly type: string;
}

export function monitorDashboardPanelQueryDisplayInfoToTerraform(struct?: MonitorDashboardPanelQueryDisplayInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_name: cdktf.stringToTerraform(struct!.displayName),
    time_series_display_name_template: cdktf.stringToTerraform(struct!.timeSeriesDisplayNameTemplate),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function monitorDashboardPanelQueryDisplayInfoToHclTerraform(struct?: MonitorDashboardPanelQueryDisplayInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_series_display_name_template: {
      value: cdktf.stringToHclTerraform(struct!.timeSeriesDisplayNameTemplate),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorDashboardPanelQueryDisplayInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MonitorDashboardPanelQueryDisplayInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._timeSeriesDisplayNameTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeSeriesDisplayNameTemplate = this._timeSeriesDisplayNameTemplate;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorDashboardPanelQueryDisplayInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._displayName = undefined;
      this._timeSeriesDisplayNameTemplate = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._displayName = value.displayName;
      this._timeSeriesDisplayNameTemplate = value.timeSeriesDisplayNameTemplate;
      this._type = value.type;
    }
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

  // time_series_display_name_template - computed: false, optional: false, required: true
  private _timeSeriesDisplayNameTemplate?: string; 
  public get timeSeriesDisplayNameTemplate() {
    return this.getStringAttribute('time_series_display_name_template');
  }
  public set timeSeriesDisplayNameTemplate(value: string) {
    this._timeSeriesDisplayNameTemplate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeSeriesDisplayNameTemplateInput() {
    return this._timeSeriesDisplayNameTemplate;
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
}

export class MonitorDashboardPanelQueryDisplayInfoList extends cdktf.ComplexList {
  public internalValue? : MonitorDashboardPanelQueryDisplayInfo[] | cdktf.IResolvable

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
  public get(index: number): MonitorDashboardPanelQueryDisplayInfoOutputReference {
    return new MonitorDashboardPanelQueryDisplayInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitorDashboardPanelQueryFormat {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/resources/monitor_dashboard#decimals MonitorDashboard#decimals}
  */
  readonly decimals?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/resources/monitor_dashboard#display_format MonitorDashboard#display_format}
  */
  readonly displayFormat: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/resources/monitor_dashboard#input_format MonitorDashboard#input_format}
  */
  readonly inputFormat: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/resources/monitor_dashboard#min_interval MonitorDashboard#min_interval}
  */
  readonly minInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/resources/monitor_dashboard#null_value_display_mode MonitorDashboard#null_value_display_mode}
  */
  readonly nullValueDisplayMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/resources/monitor_dashboard#y_axis MonitorDashboard#y_axis}
  */
  readonly yAxis: string;
}

export function monitorDashboardPanelQueryFormatToTerraform(struct?: MonitorDashboardPanelQueryFormatOutputReference | MonitorDashboardPanelQueryFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decimals: cdktf.numberToTerraform(struct!.decimals),
    display_format: cdktf.stringToTerraform(struct!.displayFormat),
    input_format: cdktf.stringToTerraform(struct!.inputFormat),
    min_interval: cdktf.stringToTerraform(struct!.minInterval),
    null_value_display_mode: cdktf.stringToTerraform(struct!.nullValueDisplayMode),
    y_axis: cdktf.stringToTerraform(struct!.yAxis),
  }
}


export function monitorDashboardPanelQueryFormatToHclTerraform(struct?: MonitorDashboardPanelQueryFormatOutputReference | MonitorDashboardPanelQueryFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    decimals: {
      value: cdktf.numberToHclTerraform(struct!.decimals),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    display_format: {
      value: cdktf.stringToHclTerraform(struct!.displayFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    input_format: {
      value: cdktf.stringToHclTerraform(struct!.inputFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_interval: {
      value: cdktf.stringToHclTerraform(struct!.minInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    null_value_display_mode: {
      value: cdktf.stringToHclTerraform(struct!.nullValueDisplayMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    y_axis: {
      value: cdktf.stringToHclTerraform(struct!.yAxis),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorDashboardPanelQueryFormatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitorDashboardPanelQueryFormat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decimals !== undefined) {
      hasAnyValues = true;
      internalValueResult.decimals = this._decimals;
    }
    if (this._displayFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayFormat = this._displayFormat;
    }
    if (this._inputFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputFormat = this._inputFormat;
    }
    if (this._minInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.minInterval = this._minInterval;
    }
    if (this._nullValueDisplayMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullValueDisplayMode = this._nullValueDisplayMode;
    }
    if (this._yAxis !== undefined) {
      hasAnyValues = true;
      internalValueResult.yAxis = this._yAxis;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorDashboardPanelQueryFormat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._decimals = undefined;
      this._displayFormat = undefined;
      this._inputFormat = undefined;
      this._minInterval = undefined;
      this._nullValueDisplayMode = undefined;
      this._yAxis = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._decimals = value.decimals;
      this._displayFormat = value.displayFormat;
      this._inputFormat = value.inputFormat;
      this._minInterval = value.minInterval;
      this._nullValueDisplayMode = value.nullValueDisplayMode;
      this._yAxis = value.yAxis;
    }
  }

  // decimals - computed: false, optional: true, required: false
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

  // display_format - computed: false, optional: false, required: true
  private _displayFormat?: string; 
  public get displayFormat() {
    return this.getStringAttribute('display_format');
  }
  public set displayFormat(value: string) {
    this._displayFormat = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayFormatInput() {
    return this._displayFormat;
  }

  // input_format - computed: false, optional: false, required: true
  private _inputFormat?: string; 
  public get inputFormat() {
    return this.getStringAttribute('input_format');
  }
  public set inputFormat(value: string) {
    this._inputFormat = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputFormatInput() {
    return this._inputFormat;
  }

  // min_interval - computed: false, optional: true, required: false
  private _minInterval?: string; 
  public get minInterval() {
    return this.getStringAttribute('min_interval');
  }
  public set minInterval(value: string) {
    this._minInterval = value;
  }
  public resetMinInterval() {
    this._minInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minIntervalInput() {
    return this._minInterval;
  }

  // null_value_display_mode - computed: false, optional: true, required: false
  private _nullValueDisplayMode?: string; 
  public get nullValueDisplayMode() {
    return this.getStringAttribute('null_value_display_mode');
  }
  public set nullValueDisplayMode(value: string) {
    this._nullValueDisplayMode = value;
  }
  public resetNullValueDisplayMode() {
    this._nullValueDisplayMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nullValueDisplayModeInput() {
    return this._nullValueDisplayMode;
  }

  // y_axis - computed: false, optional: false, required: true
  private _yAxis?: string; 
  public get yAxis() {
    return this.getStringAttribute('y_axis');
  }
  public set yAxis(value: string) {
    this._yAxis = value;
  }
  // Temporarily expose input value. Use with caution.
  public get yAxisInput() {
    return this._yAxis;
  }
}
export interface MonitorDashboardPanelQuery {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/resources/monitor_dashboard#promql MonitorDashboard#promql}
  */
  readonly promql: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/resources/monitor_dashboard#unit MonitorDashboard#unit}
  */
  readonly unit: string;
  /**
  * display_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/resources/monitor_dashboard#display_info MonitorDashboard#display_info}
  */
  readonly displayInfo?: MonitorDashboardPanelQueryDisplayInfo[] | cdktf.IResolvable;
  /**
  * format block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/resources/monitor_dashboard#format MonitorDashboard#format}
  */
  readonly format?: MonitorDashboardPanelQueryFormat;
}

export function monitorDashboardPanelQueryToTerraform(struct?: MonitorDashboardPanelQuery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    promql: cdktf.stringToTerraform(struct!.promql),
    unit: cdktf.stringToTerraform(struct!.unit),
    display_info: cdktf.listMapper(monitorDashboardPanelQueryDisplayInfoToTerraform, true)(struct!.displayInfo),
    format: monitorDashboardPanelQueryFormatToTerraform(struct!.format),
  }
}


export function monitorDashboardPanelQueryToHclTerraform(struct?: MonitorDashboardPanelQuery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    promql: {
      value: cdktf.stringToHclTerraform(struct!.promql),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display_info: {
      value: cdktf.listMapperHcl(monitorDashboardPanelQueryDisplayInfoToHclTerraform, true)(struct!.displayInfo),
      isBlock: true,
      type: "set",
      storageClassType: "MonitorDashboardPanelQueryDisplayInfoList",
    },
    format: {
      value: monitorDashboardPanelQueryFormatToHclTerraform(struct!.format),
      isBlock: true,
      type: "set",
      storageClassType: "MonitorDashboardPanelQueryFormatList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorDashboardPanelQueryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MonitorDashboardPanelQuery | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._promql !== undefined) {
      hasAnyValues = true;
      internalValueResult.promql = this._promql;
    }
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._displayInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayInfo = this._displayInfo?.internalValue;
    }
    if (this._format?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorDashboardPanelQuery | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._promql = undefined;
      this._unit = undefined;
      this._displayInfo.internalValue = undefined;
      this._format.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._promql = value.promql;
      this._unit = value.unit;
      this._displayInfo.internalValue = value.displayInfo;
      this._format.internalValue = value.format;
    }
  }

  // promql - computed: false, optional: false, required: true
  private _promql?: string; 
  public get promql() {
    return this.getStringAttribute('promql');
  }
  public set promql(value: string) {
    this._promql = value;
  }
  // Temporarily expose input value. Use with caution.
  public get promqlInput() {
    return this._promql;
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // display_info - computed: false, optional: true, required: false
  private _displayInfo = new MonitorDashboardPanelQueryDisplayInfoList(this, "display_info", true);
  public get displayInfo() {
    return this._displayInfo;
  }
  public putDisplayInfo(value: MonitorDashboardPanelQueryDisplayInfo[] | cdktf.IResolvable) {
    this._displayInfo.internalValue = value;
  }
  public resetDisplayInfo() {
    this._displayInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayInfoInput() {
    return this._displayInfo.internalValue;
  }

  // format - computed: false, optional: true, required: false
  private _format = new MonitorDashboardPanelQueryFormatOutputReference(this, "format");
  public get format() {
    return this._format;
  }
  public putFormat(value: MonitorDashboardPanelQueryFormat) {
    this._format.internalValue = value;
  }
  public resetFormat() {
    this._format.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format.internalValue;
  }
}

export class MonitorDashboardPanelQueryList extends cdktf.ComplexList {
  public internalValue? : MonitorDashboardPanelQuery[] | cdktf.IResolvable

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
  public get(index: number): MonitorDashboardPanelQueryOutputReference {
    return new MonitorDashboardPanelQueryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitorDashboardPanel {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/resources/monitor_dashboard#autosize_text MonitorDashboard#autosize_text}
  */
  readonly autosizeText?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/resources/monitor_dashboard#content MonitorDashboard#content}
  */
  readonly content?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/resources/monitor_dashboard#description MonitorDashboard#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/resources/monitor_dashboard#height MonitorDashboard#height}
  */
  readonly height: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/resources/monitor_dashboard#name MonitorDashboard#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/resources/monitor_dashboard#pos_x MonitorDashboard#pos_x}
  */
  readonly posX: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/resources/monitor_dashboard#pos_y MonitorDashboard#pos_y}
  */
  readonly posY: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/resources/monitor_dashboard#transparent_background MonitorDashboard#transparent_background}
  */
  readonly transparentBackground?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/resources/monitor_dashboard#type MonitorDashboard#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/resources/monitor_dashboard#visible_title MonitorDashboard#visible_title}
  */
  readonly visibleTitle?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/resources/monitor_dashboard#width MonitorDashboard#width}
  */
  readonly width: number;
  /**
  * legend block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/resources/monitor_dashboard#legend MonitorDashboard#legend}
  */
  readonly legend?: MonitorDashboardPanelLegend;
  /**
  * query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/resources/monitor_dashboard#query MonitorDashboard#query}
  */
  readonly query?: MonitorDashboardPanelQuery[] | cdktf.IResolvable;
}

export function monitorDashboardPanelToTerraform(struct?: MonitorDashboardPanel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    autosize_text: cdktf.booleanToTerraform(struct!.autosizeText),
    content: cdktf.stringToTerraform(struct!.content),
    description: cdktf.stringToTerraform(struct!.description),
    height: cdktf.numberToTerraform(struct!.height),
    name: cdktf.stringToTerraform(struct!.name),
    pos_x: cdktf.numberToTerraform(struct!.posX),
    pos_y: cdktf.numberToTerraform(struct!.posY),
    transparent_background: cdktf.booleanToTerraform(struct!.transparentBackground),
    type: cdktf.stringToTerraform(struct!.type),
    visible_title: cdktf.booleanToTerraform(struct!.visibleTitle),
    width: cdktf.numberToTerraform(struct!.width),
    legend: monitorDashboardPanelLegendToTerraform(struct!.legend),
    query: cdktf.listMapper(monitorDashboardPanelQueryToTerraform, true)(struct!.query),
  }
}


export function monitorDashboardPanelToHclTerraform(struct?: MonitorDashboardPanel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    autosize_text: {
      value: cdktf.booleanToHclTerraform(struct!.autosizeText),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    content: {
      value: cdktf.stringToHclTerraform(struct!.content),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    height: {
      value: cdktf.numberToHclTerraform(struct!.height),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pos_x: {
      value: cdktf.numberToHclTerraform(struct!.posX),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pos_y: {
      value: cdktf.numberToHclTerraform(struct!.posY),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    transparent_background: {
      value: cdktf.booleanToHclTerraform(struct!.transparentBackground),
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
    visible_title: {
      value: cdktf.booleanToHclTerraform(struct!.visibleTitle),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    width: {
      value: cdktf.numberToHclTerraform(struct!.width),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    legend: {
      value: monitorDashboardPanelLegendToHclTerraform(struct!.legend),
      isBlock: true,
      type: "set",
      storageClassType: "MonitorDashboardPanelLegendList",
    },
    query: {
      value: cdktf.listMapperHcl(monitorDashboardPanelQueryToHclTerraform, true)(struct!.query),
      isBlock: true,
      type: "set",
      storageClassType: "MonitorDashboardPanelQueryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorDashboardPanelOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MonitorDashboardPanel | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autosizeText !== undefined) {
      hasAnyValues = true;
      internalValueResult.autosizeText = this._autosizeText;
    }
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._height !== undefined) {
      hasAnyValues = true;
      internalValueResult.height = this._height;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._posX !== undefined) {
      hasAnyValues = true;
      internalValueResult.posX = this._posX;
    }
    if (this._posY !== undefined) {
      hasAnyValues = true;
      internalValueResult.posY = this._posY;
    }
    if (this._transparentBackground !== undefined) {
      hasAnyValues = true;
      internalValueResult.transparentBackground = this._transparentBackground;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._visibleTitle !== undefined) {
      hasAnyValues = true;
      internalValueResult.visibleTitle = this._visibleTitle;
    }
    if (this._width !== undefined) {
      hasAnyValues = true;
      internalValueResult.width = this._width;
    }
    if (this._legend?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.legend = this._legend?.internalValue;
    }
    if (this._query?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorDashboardPanel | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autosizeText = undefined;
      this._content = undefined;
      this._description = undefined;
      this._height = undefined;
      this._name = undefined;
      this._posX = undefined;
      this._posY = undefined;
      this._transparentBackground = undefined;
      this._type = undefined;
      this._visibleTitle = undefined;
      this._width = undefined;
      this._legend.internalValue = undefined;
      this._query.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autosizeText = value.autosizeText;
      this._content = value.content;
      this._description = value.description;
      this._height = value.height;
      this._name = value.name;
      this._posX = value.posX;
      this._posY = value.posY;
      this._transparentBackground = value.transparentBackground;
      this._type = value.type;
      this._visibleTitle = value.visibleTitle;
      this._width = value.width;
      this._legend.internalValue = value.legend;
      this._query.internalValue = value.query;
    }
  }

  // autosize_text - computed: false, optional: true, required: false
  private _autosizeText?: boolean | cdktf.IResolvable; 
  public get autosizeText() {
    return this.getBooleanAttribute('autosize_text');
  }
  public set autosizeText(value: boolean | cdktf.IResolvable) {
    this._autosizeText = value;
  }
  public resetAutosizeText() {
    this._autosizeText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autosizeTextInput() {
    return this._autosizeText;
  }

  // content - computed: false, optional: true, required: false
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

  // height - computed: false, optional: false, required: true
  private _height?: number; 
  public get height() {
    return this.getNumberAttribute('height');
  }
  public set height(value: number) {
    this._height = value;
  }
  // Temporarily expose input value. Use with caution.
  public get heightInput() {
    return this._height;
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

  // pos_x - computed: false, optional: false, required: true
  private _posX?: number; 
  public get posX() {
    return this.getNumberAttribute('pos_x');
  }
  public set posX(value: number) {
    this._posX = value;
  }
  // Temporarily expose input value. Use with caution.
  public get posXInput() {
    return this._posX;
  }

  // pos_y - computed: false, optional: false, required: true
  private _posY?: number; 
  public get posY() {
    return this.getNumberAttribute('pos_y');
  }
  public set posY(value: number) {
    this._posY = value;
  }
  // Temporarily expose input value. Use with caution.
  public get posYInput() {
    return this._posY;
  }

  // transparent_background - computed: false, optional: true, required: false
  private _transparentBackground?: boolean | cdktf.IResolvable; 
  public get transparentBackground() {
    return this.getBooleanAttribute('transparent_background');
  }
  public set transparentBackground(value: boolean | cdktf.IResolvable) {
    this._transparentBackground = value;
  }
  public resetTransparentBackground() {
    this._transparentBackground = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transparentBackgroundInput() {
    return this._transparentBackground;
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

  // visible_title - computed: false, optional: true, required: false
  private _visibleTitle?: boolean | cdktf.IResolvable; 
  public get visibleTitle() {
    return this.getBooleanAttribute('visible_title');
  }
  public set visibleTitle(value: boolean | cdktf.IResolvable) {
    this._visibleTitle = value;
  }
  public resetVisibleTitle() {
    this._visibleTitle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibleTitleInput() {
    return this._visibleTitle;
  }

  // width - computed: false, optional: false, required: true
  private _width?: number; 
  public get width() {
    return this.getNumberAttribute('width');
  }
  public set width(value: number) {
    this._width = value;
  }
  // Temporarily expose input value. Use with caution.
  public get widthInput() {
    return this._width;
  }

  // legend - computed: false, optional: true, required: false
  private _legend = new MonitorDashboardPanelLegendOutputReference(this, "legend");
  public get legend() {
    return this._legend;
  }
  public putLegend(value: MonitorDashboardPanelLegend) {
    this._legend.internalValue = value;
  }
  public resetLegend() {
    this._legend.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get legendInput() {
    return this._legend.internalValue;
  }

  // query - computed: false, optional: true, required: false
  private _query = new MonitorDashboardPanelQueryList(this, "query", true);
  public get query() {
    return this._query;
  }
  public putQuery(value: MonitorDashboardPanelQuery[] | cdktf.IResolvable) {
    this._query.internalValue = value;
  }
  public resetQuery() {
    this._query.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query.internalValue;
  }
}

export class MonitorDashboardPanelList extends cdktf.ComplexList {
  public internalValue? : MonitorDashboardPanel[] | cdktf.IResolvable

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
  public get(index: number): MonitorDashboardPanelOutputReference {
    return new MonitorDashboardPanelOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitorDashboardScope {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/resources/monitor_dashboard#comparator MonitorDashboard#comparator}
  */
  readonly comparator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/resources/monitor_dashboard#metric MonitorDashboard#metric}
  */
  readonly metric: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/resources/monitor_dashboard#value MonitorDashboard#value}
  */
  readonly value?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/resources/monitor_dashboard#variable MonitorDashboard#variable}
  */
  readonly variable?: string;
}

export function monitorDashboardScopeToTerraform(struct?: MonitorDashboardScope | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparator: cdktf.stringToTerraform(struct!.comparator),
    metric: cdktf.stringToTerraform(struct!.metric),
    value: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.value),
    variable: cdktf.stringToTerraform(struct!.variable),
  }
}


export function monitorDashboardScopeToHclTerraform(struct?: MonitorDashboardScope | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comparator: {
      value: cdktf.stringToHclTerraform(struct!.comparator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric: {
      value: cdktf.stringToHclTerraform(struct!.metric),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.value),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    variable: {
      value: cdktf.stringToHclTerraform(struct!.variable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorDashboardScopeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MonitorDashboardScope | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparator !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparator = this._comparator;
    }
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._variable !== undefined) {
      hasAnyValues = true;
      internalValueResult.variable = this._variable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorDashboardScope | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparator = undefined;
      this._metric = undefined;
      this._value = undefined;
      this._variable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparator = value.comparator;
      this._metric = value.metric;
      this._value = value.value;
      this._variable = value.variable;
    }
  }

  // comparator - computed: false, optional: true, required: false
  private _comparator?: string; 
  public get comparator() {
    return this.getStringAttribute('comparator');
  }
  public set comparator(value: string) {
    this._comparator = value;
  }
  public resetComparator() {
    this._comparator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get comparatorInput() {
    return this._comparator;
  }

  // metric - computed: false, optional: false, required: true
  private _metric?: string; 
  public get metric() {
    return this.getStringAttribute('metric');
  }
  public set metric(value: string) {
    this._metric = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string[]; 
  public get value() {
    return this.getListAttribute('value');
  }
  public set value(value: string[]) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // variable - computed: false, optional: true, required: false
  private _variable?: string; 
  public get variable() {
    return this.getStringAttribute('variable');
  }
  public set variable(value: string) {
    this._variable = value;
  }
  public resetVariable() {
    this._variable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variableInput() {
    return this._variable;
  }
}

export class MonitorDashboardScopeList extends cdktf.ComplexList {
  public internalValue? : MonitorDashboardScope[] | cdktf.IResolvable

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
  public get(index: number): MonitorDashboardScopeOutputReference {
    return new MonitorDashboardScopeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitorDashboardShareMember {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/resources/monitor_dashboard#id MonitorDashboard#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/resources/monitor_dashboard#type MonitorDashboard#type}
  */
  readonly type: string;
}

export function monitorDashboardShareMemberToTerraform(struct?: MonitorDashboardShareMemberOutputReference | MonitorDashboardShareMember): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function monitorDashboardShareMemberToHclTerraform(struct?: MonitorDashboardShareMemberOutputReference | MonitorDashboardShareMember): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
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

export class MonitorDashboardShareMemberOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitorDashboardShareMember | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorDashboardShareMember | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._type = value.type;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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
}
export interface MonitorDashboardShare {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/resources/monitor_dashboard#role MonitorDashboard#role}
  */
  readonly role: string;
  /**
  * member block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/resources/monitor_dashboard#member MonitorDashboard#member}
  */
  readonly member: MonitorDashboardShareMember;
}

export function monitorDashboardShareToTerraform(struct?: MonitorDashboardShare | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    role: cdktf.stringToTerraform(struct!.role),
    member: monitorDashboardShareMemberToTerraform(struct!.member),
  }
}


export function monitorDashboardShareToHclTerraform(struct?: MonitorDashboardShare | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    member: {
      value: monitorDashboardShareMemberToHclTerraform(struct!.member),
      isBlock: true,
      type: "set",
      storageClassType: "MonitorDashboardShareMemberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorDashboardShareOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MonitorDashboardShare | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    if (this._member?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.member = this._member?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorDashboardShare | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._role = undefined;
      this._member.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._role = value.role;
      this._member.internalValue = value.member;
    }
  }

  // role - computed: false, optional: false, required: true
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // member - computed: false, optional: false, required: true
  private _member = new MonitorDashboardShareMemberOutputReference(this, "member");
  public get member() {
    return this._member;
  }
  public putMember(value: MonitorDashboardShareMember) {
    this._member.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memberInput() {
    return this._member.internalValue;
  }
}

export class MonitorDashboardShareList extends cdktf.ComplexList {
  public internalValue? : MonitorDashboardShare[] | cdktf.IResolvable

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
  public get(index: number): MonitorDashboardShareOutputReference {
    return new MonitorDashboardShareOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitorDashboardTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/resources/monitor_dashboard#create MonitorDashboard#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/resources/monitor_dashboard#delete MonitorDashboard#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/resources/monitor_dashboard#read MonitorDashboard#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/resources/monitor_dashboard#update MonitorDashboard#update}
  */
  readonly update?: string;
}

export function monitorDashboardTimeoutsToTerraform(struct?: MonitorDashboardTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function monitorDashboardTimeoutsToHclTerraform(struct?: MonitorDashboardTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorDashboardTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MonitorDashboardTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorDashboardTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/resources/monitor_dashboard sysdig_monitor_dashboard}
*/
export class MonitorDashboard extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sysdig_monitor_dashboard";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MonitorDashboard resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MonitorDashboard to import
  * @param importFromId The id of the existing MonitorDashboard that should be imported. Refer to the {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/resources/monitor_dashboard#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MonitorDashboard to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sysdig_monitor_dashboard", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/resources/monitor_dashboard sysdig_monitor_dashboard} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MonitorDashboardConfig
  */
  public constructor(scope: Construct, id: string, config: MonitorDashboardConfig) {
    super(scope, id, {
      terraformResourceType: 'sysdig_monitor_dashboard',
      terraformGeneratorMetadata: {
        providerName: 'sysdig',
        providerVersion: '3.3.1',
        providerVersionConstraint: '3.3.1'
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
    this._id = config.id;
    this._minInterval = config.minInterval;
    this._name = config.name;
    this._public = config.public;
    this._panel.internalValue = config.panel;
    this._scope.internalValue = config.scope;
    this._share.internalValue = config.share;
    this._timeouts.internalValue = config.timeouts;
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

  // min_interval - computed: false, optional: true, required: false
  private _minInterval?: string; 
  public get minInterval() {
    return this.getStringAttribute('min_interval');
  }
  public set minInterval(value: string) {
    this._minInterval = value;
  }
  public resetMinInterval() {
    this._minInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minIntervalInput() {
    return this._minInterval;
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

  // public - computed: false, optional: true, required: false
  private _public?: boolean | cdktf.IResolvable; 
  public get public() {
    return this.getBooleanAttribute('public');
  }
  public set public(value: boolean | cdktf.IResolvable) {
    this._public = value;
  }
  public resetPublic() {
    this._public = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicInput() {
    return this._public;
  }

  // public_token - computed: true, optional: false, required: false
  public get publicToken() {
    return this.getStringAttribute('public_token');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // panel - computed: false, optional: false, required: true
  private _panel = new MonitorDashboardPanelList(this, "panel", true);
  public get panel() {
    return this._panel;
  }
  public putPanel(value: MonitorDashboardPanel[] | cdktf.IResolvable) {
    this._panel.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get panelInput() {
    return this._panel.internalValue;
  }

  // scope - computed: false, optional: true, required: false
  private _scope = new MonitorDashboardScopeList(this, "scope", true);
  public get scope() {
    return this._scope;
  }
  public putScope(value: MonitorDashboardScope[] | cdktf.IResolvable) {
    this._scope.internalValue = value;
  }
  public resetScope() {
    this._scope.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope.internalValue;
  }

  // share - computed: false, optional: true, required: false
  private _share = new MonitorDashboardShareList(this, "share", true);
  public get share() {
    return this._share;
  }
  public putShare(value: MonitorDashboardShare[] | cdktf.IResolvable) {
    this._share.internalValue = value;
  }
  public resetShare() {
    this._share.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shareInput() {
    return this._share.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MonitorDashboardTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MonitorDashboardTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      min_interval: cdktf.stringToTerraform(this._minInterval),
      name: cdktf.stringToTerraform(this._name),
      public: cdktf.booleanToTerraform(this._public),
      panel: cdktf.listMapper(monitorDashboardPanelToTerraform, true)(this._panel.internalValue),
      scope: cdktf.listMapper(monitorDashboardScopeToTerraform, true)(this._scope.internalValue),
      share: cdktf.listMapper(monitorDashboardShareToTerraform, true)(this._share.internalValue),
      timeouts: monitorDashboardTimeoutsToTerraform(this._timeouts.internalValue),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      min_interval: {
        value: cdktf.stringToHclTerraform(this._minInterval),
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
      public: {
        value: cdktf.booleanToHclTerraform(this._public),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      panel: {
        value: cdktf.listMapperHcl(monitorDashboardPanelToHclTerraform, true)(this._panel.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "MonitorDashboardPanelList",
      },
      scope: {
        value: cdktf.listMapperHcl(monitorDashboardScopeToHclTerraform, true)(this._scope.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "MonitorDashboardScopeList",
      },
      share: {
        value: cdktf.listMapperHcl(monitorDashboardShareToHclTerraform, true)(this._share.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "MonitorDashboardShareList",
      },
      timeouts: {
        value: monitorDashboardTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MonitorDashboardTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
