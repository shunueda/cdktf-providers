// https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/dashboard
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DashboardConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/dashboard#dashboard_description Dashboard#dashboard_description}
  */
  readonly dashboardDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/dashboard#dashboard_name Dashboard#dashboard_name}
  */
  readonly dashboardName: string;
  /**
  * IDs of the event queries to display on this dashboard
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/dashboard#event_query_ids Dashboard#event_query_ids}
  */
  readonly eventQueryIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/dashboard#id Dashboard#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/dashboard#project_name Dashboard#project_name}
  */
  readonly projectName: string;
  /**
  * chart block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/dashboard#chart Dashboard#chart}
  */
  readonly chart?: DashboardChart[] | cdktf.IResolvable;
  /**
  * group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/dashboard#group Dashboard#group}
  */
  readonly group?: DashboardGroup[] | cdktf.IResolvable;
  /**
  * label block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/dashboard#label Dashboard#label}
  */
  readonly label?: DashboardLabel[] | cdktf.IResolvable;
  /**
  * template_variable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/dashboard#template_variable Dashboard#template_variable}
  */
  readonly templateVariable?: DashboardTemplateVariable[] | cdktf.IResolvable;
  /**
  * workflow_link block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/dashboard#workflow_link Dashboard#workflow_link}
  */
  readonly workflowLink?: DashboardWorkflowLink[] | cdktf.IResolvable;
}
export interface DashboardChartQueryDependencyMapOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/dashboard#map_type Dashboard#map_type}
  */
  readonly mapType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/dashboard#scope Dashboard#scope}
  */
  readonly scope?: string;
}

export function dashboardChartQueryDependencyMapOptionsToTerraform(struct?: DashboardChartQueryDependencyMapOptionsOutputReference | DashboardChartQueryDependencyMapOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    map_type: cdktf.stringToTerraform(struct!.mapType),
    scope: cdktf.stringToTerraform(struct!.scope),
  }
}


export function dashboardChartQueryDependencyMapOptionsToHclTerraform(struct?: DashboardChartQueryDependencyMapOptionsOutputReference | DashboardChartQueryDependencyMapOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    map_type: {
      value: cdktf.stringToHclTerraform(struct!.mapType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scope: {
      value: cdktf.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardChartQueryDependencyMapOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardChartQueryDependencyMapOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mapType !== undefined) {
      hasAnyValues = true;
      internalValueResult.mapType = this._mapType;
    }
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardChartQueryDependencyMapOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mapType = undefined;
      this._scope = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mapType = value.mapType;
      this._scope = value.scope;
    }
  }

  // map_type - computed: false, optional: true, required: false
  private _mapType?: string; 
  public get mapType() {
    return this.getStringAttribute('map_type');
  }
  public set mapType(value: string) {
    this._mapType = value;
  }
  public resetMapType() {
    this._mapType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mapTypeInput() {
    return this._mapType;
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }
}
export interface DashboardChartQueryDisplayTypeOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/dashboard#comparison_window_ms Dashboard#comparison_window_ms}
  */
  readonly comparisonWindowMs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/dashboard#display_type Dashboard#display_type}
  */
  readonly displayType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/dashboard#is_donut Dashboard#is_donut}
  */
  readonly isDonut?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/dashboard#max Dashboard#max}
  */
  readonly max?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/dashboard#min Dashboard#min}
  */
  readonly min?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/dashboard#sort_by Dashboard#sort_by}
  */
  readonly sortBy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/dashboard#sort_direction Dashboard#sort_direction}
  */
  readonly sortDirection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/dashboard#y_axis_log_base Dashboard#y_axis_log_base}
  */
  readonly yAxisLogBase?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/dashboard#y_axis_max Dashboard#y_axis_max}
  */
  readonly yAxisMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/dashboard#y_axis_min Dashboard#y_axis_min}
  */
  readonly yAxisMin?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/dashboard#y_axis_scale Dashboard#y_axis_scale}
  */
  readonly yAxisScale?: string;
}

export function dashboardChartQueryDisplayTypeOptionsToTerraform(struct?: DashboardChartQueryDisplayTypeOptionsOutputReference | DashboardChartQueryDisplayTypeOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison_window_ms: cdktf.numberToTerraform(struct!.comparisonWindowMs),
    display_type: cdktf.stringToTerraform(struct!.displayType),
    is_donut: cdktf.booleanToTerraform(struct!.isDonut),
    max: cdktf.stringToTerraform(struct!.max),
    min: cdktf.stringToTerraform(struct!.min),
    sort_by: cdktf.stringToTerraform(struct!.sortBy),
    sort_direction: cdktf.stringToTerraform(struct!.sortDirection),
    y_axis_log_base: cdktf.numberToTerraform(struct!.yAxisLogBase),
    y_axis_max: cdktf.numberToTerraform(struct!.yAxisMax),
    y_axis_min: cdktf.numberToTerraform(struct!.yAxisMin),
    y_axis_scale: cdktf.stringToTerraform(struct!.yAxisScale),
  }
}


export function dashboardChartQueryDisplayTypeOptionsToHclTerraform(struct?: DashboardChartQueryDisplayTypeOptionsOutputReference | DashboardChartQueryDisplayTypeOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comparison_window_ms: {
      value: cdktf.numberToHclTerraform(struct!.comparisonWindowMs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    display_type: {
      value: cdktf.stringToHclTerraform(struct!.displayType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_donut: {
      value: cdktf.booleanToHclTerraform(struct!.isDonut),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max: {
      value: cdktf.stringToHclTerraform(struct!.max),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min: {
      value: cdktf.stringToHclTerraform(struct!.min),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sort_by: {
      value: cdktf.stringToHclTerraform(struct!.sortBy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sort_direction: {
      value: cdktf.stringToHclTerraform(struct!.sortDirection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    y_axis_log_base: {
      value: cdktf.numberToHclTerraform(struct!.yAxisLogBase),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    y_axis_max: {
      value: cdktf.numberToHclTerraform(struct!.yAxisMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    y_axis_min: {
      value: cdktf.numberToHclTerraform(struct!.yAxisMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    y_axis_scale: {
      value: cdktf.stringToHclTerraform(struct!.yAxisScale),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardChartQueryDisplayTypeOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardChartQueryDisplayTypeOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparisonWindowMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparisonWindowMs = this._comparisonWindowMs;
    }
    if (this._displayType !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayType = this._displayType;
    }
    if (this._isDonut !== undefined) {
      hasAnyValues = true;
      internalValueResult.isDonut = this._isDonut;
    }
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    if (this._sortBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.sortBy = this._sortBy;
    }
    if (this._sortDirection !== undefined) {
      hasAnyValues = true;
      internalValueResult.sortDirection = this._sortDirection;
    }
    if (this._yAxisLogBase !== undefined) {
      hasAnyValues = true;
      internalValueResult.yAxisLogBase = this._yAxisLogBase;
    }
    if (this._yAxisMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.yAxisMax = this._yAxisMax;
    }
    if (this._yAxisMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.yAxisMin = this._yAxisMin;
    }
    if (this._yAxisScale !== undefined) {
      hasAnyValues = true;
      internalValueResult.yAxisScale = this._yAxisScale;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardChartQueryDisplayTypeOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._comparisonWindowMs = undefined;
      this._displayType = undefined;
      this._isDonut = undefined;
      this._max = undefined;
      this._min = undefined;
      this._sortBy = undefined;
      this._sortDirection = undefined;
      this._yAxisLogBase = undefined;
      this._yAxisMax = undefined;
      this._yAxisMin = undefined;
      this._yAxisScale = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._comparisonWindowMs = value.comparisonWindowMs;
      this._displayType = value.displayType;
      this._isDonut = value.isDonut;
      this._max = value.max;
      this._min = value.min;
      this._sortBy = value.sortBy;
      this._sortDirection = value.sortDirection;
      this._yAxisLogBase = value.yAxisLogBase;
      this._yAxisMax = value.yAxisMax;
      this._yAxisMin = value.yAxisMin;
      this._yAxisScale = value.yAxisScale;
    }
  }

  // comparison_window_ms - computed: false, optional: true, required: false
  private _comparisonWindowMs?: number; 
  public get comparisonWindowMs() {
    return this.getNumberAttribute('comparison_window_ms');
  }
  public set comparisonWindowMs(value: number) {
    this._comparisonWindowMs = value;
  }
  public resetComparisonWindowMs() {
    this._comparisonWindowMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonWindowMsInput() {
    return this._comparisonWindowMs;
  }

  // display_type - computed: false, optional: true, required: false
  private _displayType?: string; 
  public get displayType() {
    return this.getStringAttribute('display_type');
  }
  public set displayType(value: string) {
    this._displayType = value;
  }
  public resetDisplayType() {
    this._displayType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayTypeInput() {
    return this._displayType;
  }

  // is_donut - computed: false, optional: true, required: false
  private _isDonut?: boolean | cdktf.IResolvable; 
  public get isDonut() {
    return this.getBooleanAttribute('is_donut');
  }
  public set isDonut(value: boolean | cdktf.IResolvable) {
    this._isDonut = value;
  }
  public resetIsDonut() {
    this._isDonut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDonutInput() {
    return this._isDonut;
  }

  // max - computed: false, optional: true, required: false
  private _max?: string; 
  public get max() {
    return this.getStringAttribute('max');
  }
  public set max(value: string) {
    this._max = value;
  }
  public resetMax() {
    this._max = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // min - computed: false, optional: true, required: false
  private _min?: string; 
  public get min() {
    return this.getStringAttribute('min');
  }
  public set min(value: string) {
    this._min = value;
  }
  public resetMin() {
    this._min = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
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

  // sort_direction - computed: false, optional: true, required: false
  private _sortDirection?: string; 
  public get sortDirection() {
    return this.getStringAttribute('sort_direction');
  }
  public set sortDirection(value: string) {
    this._sortDirection = value;
  }
  public resetSortDirection() {
    this._sortDirection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortDirectionInput() {
    return this._sortDirection;
  }

  // y_axis_log_base - computed: false, optional: true, required: false
  private _yAxisLogBase?: number; 
  public get yAxisLogBase() {
    return this.getNumberAttribute('y_axis_log_base');
  }
  public set yAxisLogBase(value: number) {
    this._yAxisLogBase = value;
  }
  public resetYAxisLogBase() {
    this._yAxisLogBase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yAxisLogBaseInput() {
    return this._yAxisLogBase;
  }

  // y_axis_max - computed: false, optional: true, required: false
  private _yAxisMax?: number; 
  public get yAxisMax() {
    return this.getNumberAttribute('y_axis_max');
  }
  public set yAxisMax(value: number) {
    this._yAxisMax = value;
  }
  public resetYAxisMax() {
    this._yAxisMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yAxisMaxInput() {
    return this._yAxisMax;
  }

  // y_axis_min - computed: false, optional: true, required: false
  private _yAxisMin?: number; 
  public get yAxisMin() {
    return this.getNumberAttribute('y_axis_min');
  }
  public set yAxisMin(value: number) {
    this._yAxisMin = value;
  }
  public resetYAxisMin() {
    this._yAxisMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yAxisMinInput() {
    return this._yAxisMin;
  }

  // y_axis_scale - computed: false, optional: true, required: false
  private _yAxisScale?: string; 
  public get yAxisScale() {
    return this.getStringAttribute('y_axis_scale');
  }
  public set yAxisScale(value: string) {
    this._yAxisScale = value;
  }
  public resetYAxisScale() {
    this._yAxisScale = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yAxisScaleInput() {
    return this._yAxisScale;
  }
}
export interface DashboardChartQuery {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/dashboard#display Dashboard#display}
  */
  readonly display?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/dashboard#hidden Dashboard#hidden}
  */
  readonly hidden: boolean | cdktf.IResolvable;
  /**
  * An optional map of sub-query names in the query_string to a boolean string to hide/show that query. If specified, the map must have an entry for all named sub-queries in the query_string. A value of "true" indicates the query should be hidden. Example: `hidden_queries = {  "a" = "true",  "b" = "false" }`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/dashboard#hidden_queries Dashboard#hidden_queries}
  */
  readonly hiddenQueries?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/dashboard#query_name Dashboard#query_name}
  */
  readonly queryName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/dashboard#query_string Dashboard#query_string}
  */
  readonly queryString: string;
  /**
  * dependency_map_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/dashboard#dependency_map_options Dashboard#dependency_map_options}
  */
  readonly dependencyMapOptions?: DashboardChartQueryDependencyMapOptions;
  /**
  * display_type_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/dashboard#display_type_options Dashboard#display_type_options}
  */
  readonly displayTypeOptions?: DashboardChartQueryDisplayTypeOptions;
}

export function dashboardChartQueryToTerraform(struct?: DashboardChartQuery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display: cdktf.stringToTerraform(struct!.display),
    hidden: cdktf.booleanToTerraform(struct!.hidden),
    hidden_queries: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.hiddenQueries),
    query_name: cdktf.stringToTerraform(struct!.queryName),
    query_string: cdktf.stringToTerraform(struct!.queryString),
    dependency_map_options: dashboardChartQueryDependencyMapOptionsToTerraform(struct!.dependencyMapOptions),
    display_type_options: dashboardChartQueryDisplayTypeOptionsToTerraform(struct!.displayTypeOptions),
  }
}


export function dashboardChartQueryToHclTerraform(struct?: DashboardChartQuery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    display: {
      value: cdktf.stringToHclTerraform(struct!.display),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hidden: {
      value: cdktf.booleanToHclTerraform(struct!.hidden),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    hidden_queries: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.hiddenQueries),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    query_name: {
      value: cdktf.stringToHclTerraform(struct!.queryName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query_string: {
      value: cdktf.stringToHclTerraform(struct!.queryString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dependency_map_options: {
      value: dashboardChartQueryDependencyMapOptionsToHclTerraform(struct!.dependencyMapOptions),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardChartQueryDependencyMapOptionsList",
    },
    display_type_options: {
      value: dashboardChartQueryDisplayTypeOptionsToHclTerraform(struct!.displayTypeOptions),
      isBlock: true,
      type: "set",
      storageClassType: "DashboardChartQueryDisplayTypeOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardChartQueryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardChartQuery | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._display !== undefined) {
      hasAnyValues = true;
      internalValueResult.display = this._display;
    }
    if (this._hidden !== undefined) {
      hasAnyValues = true;
      internalValueResult.hidden = this._hidden;
    }
    if (this._hiddenQueries !== undefined) {
      hasAnyValues = true;
      internalValueResult.hiddenQueries = this._hiddenQueries;
    }
    if (this._queryName !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryName = this._queryName;
    }
    if (this._queryString !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryString = this._queryString;
    }
    if (this._dependencyMapOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dependencyMapOptions = this._dependencyMapOptions?.internalValue;
    }
    if (this._displayTypeOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayTypeOptions = this._displayTypeOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardChartQuery | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._display = undefined;
      this._hidden = undefined;
      this._hiddenQueries = undefined;
      this._queryName = undefined;
      this._queryString = undefined;
      this._dependencyMapOptions.internalValue = undefined;
      this._displayTypeOptions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._display = value.display;
      this._hidden = value.hidden;
      this._hiddenQueries = value.hiddenQueries;
      this._queryName = value.queryName;
      this._queryString = value.queryString;
      this._dependencyMapOptions.internalValue = value.dependencyMapOptions;
      this._displayTypeOptions.internalValue = value.displayTypeOptions;
    }
  }

  // display - computed: false, optional: true, required: false
  private _display?: string; 
  public get display() {
    return this.getStringAttribute('display');
  }
  public set display(value: string) {
    this._display = value;
  }
  public resetDisplay() {
    this._display = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayInput() {
    return this._display;
  }

  // hidden - computed: false, optional: false, required: true
  private _hidden?: boolean | cdktf.IResolvable; 
  public get hidden() {
    return this.getBooleanAttribute('hidden');
  }
  public set hidden(value: boolean | cdktf.IResolvable) {
    this._hidden = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hiddenInput() {
    return this._hidden;
  }

  // hidden_queries - computed: false, optional: true, required: false
  private _hiddenQueries?: { [key: string]: string }; 
  public get hiddenQueries() {
    return this.getStringMapAttribute('hidden_queries');
  }
  public set hiddenQueries(value: { [key: string]: string }) {
    this._hiddenQueries = value;
  }
  public resetHiddenQueries() {
    this._hiddenQueries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hiddenQueriesInput() {
    return this._hiddenQueries;
  }

  // query_name - computed: false, optional: false, required: true
  private _queryName?: string; 
  public get queryName() {
    return this.getStringAttribute('query_name');
  }
  public set queryName(value: string) {
    this._queryName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryNameInput() {
    return this._queryName;
  }

  // query_string - computed: false, optional: false, required: true
  private _queryString?: string; 
  public get queryString() {
    return this.getStringAttribute('query_string');
  }
  public set queryString(value: string) {
    this._queryString = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryStringInput() {
    return this._queryString;
  }

  // dependency_map_options - computed: false, optional: true, required: false
  private _dependencyMapOptions = new DashboardChartQueryDependencyMapOptionsOutputReference(this, "dependency_map_options");
  public get dependencyMapOptions() {
    return this._dependencyMapOptions;
  }
  public putDependencyMapOptions(value: DashboardChartQueryDependencyMapOptions) {
    this._dependencyMapOptions.internalValue = value;
  }
  public resetDependencyMapOptions() {
    this._dependencyMapOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dependencyMapOptionsInput() {
    return this._dependencyMapOptions.internalValue;
  }

  // display_type_options - computed: false, optional: true, required: false
  private _displayTypeOptions = new DashboardChartQueryDisplayTypeOptionsOutputReference(this, "display_type_options");
  public get displayTypeOptions() {
    return this._displayTypeOptions;
  }
  public putDisplayTypeOptions(value: DashboardChartQueryDisplayTypeOptions) {
    this._displayTypeOptions.internalValue = value;
  }
  public resetDisplayTypeOptions() {
    this._displayTypeOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayTypeOptionsInput() {
    return this._displayTypeOptions.internalValue;
  }
}

export class DashboardChartQueryList extends cdktf.ComplexList {
  public internalValue? : DashboardChartQuery[] | cdktf.IResolvable

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
  public get(index: number): DashboardChartQueryOutputReference {
    return new DashboardChartQueryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardChartThreshold {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/dashboard#color Dashboard#color}
  */
  readonly color: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/dashboard#label Dashboard#label}
  */
  readonly label?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/dashboard#operator Dashboard#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/dashboard#value Dashboard#value}
  */
  readonly value: number;
}

export function dashboardChartThresholdToTerraform(struct?: DashboardChartThreshold | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktf.stringToTerraform(struct!.color),
    label: cdktf.stringToTerraform(struct!.label),
    operator: cdktf.stringToTerraform(struct!.operator),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function dashboardChartThresholdToHclTerraform(struct?: DashboardChartThreshold | cdktf.IResolvable): any {
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
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardChartThresholdOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardChartThreshold | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardChartThreshold | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._color = undefined;
      this._label = undefined;
      this._operator = undefined;
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
      this._label = value.label;
      this._operator = value.operator;
      this._value = value.value;
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

  // label - computed: false, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DashboardChartThresholdList extends cdktf.ComplexList {
  public internalValue? : DashboardChartThreshold[] | cdktf.IResolvable

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
  public get(index: number): DashboardChartThresholdOutputReference {
    return new DashboardChartThresholdOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardChartWorkflowLink {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/dashboard#name Dashboard#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/dashboard#url Dashboard#url}
  */
  readonly url: string;
}

export function dashboardChartWorkflowLinkToTerraform(struct?: DashboardChartWorkflowLink | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function dashboardChartWorkflowLinkToHclTerraform(struct?: DashboardChartWorkflowLink | cdktf.IResolvable): any {
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

export class DashboardChartWorkflowLinkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardChartWorkflowLink | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardChartWorkflowLink | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._url = value.url;
    }
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

export class DashboardChartWorkflowLinkList extends cdktf.ComplexList {
  public internalValue? : DashboardChartWorkflowLink[] | cdktf.IResolvable

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
  public get(index: number): DashboardChartWorkflowLinkOutputReference {
    return new DashboardChartWorkflowLinkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardChartYAxis {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/dashboard#max Dashboard#max}
  */
  readonly max: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/dashboard#min Dashboard#min}
  */
  readonly min: number;
}

export function dashboardChartYAxisToTerraform(struct?: DashboardChartYAxisOutputReference | DashboardChartYAxis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max: cdktf.numberToTerraform(struct!.max),
    min: cdktf.numberToTerraform(struct!.min),
  }
}


export function dashboardChartYAxisToHclTerraform(struct?: DashboardChartYAxisOutputReference | DashboardChartYAxis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardChartYAxisOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardChartYAxis | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardChartYAxis | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._max = undefined;
      this._min = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._max = value.max;
      this._min = value.min;
    }
  }

  // max - computed: false, optional: false, required: true
  private _max?: number; 
  public get max() {
    return this.getNumberAttribute('max');
  }
  public set max(value: number) {
    this._max = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // min - computed: false, optional: false, required: true
  private _min?: number; 
  public get min() {
    return this.getNumberAttribute('min');
  }
  public set min(value: number) {
    this._min = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
  }
}
export interface DashboardChart {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/dashboard#description Dashboard#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/dashboard#height Dashboard#height}
  */
  readonly height?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/dashboard#name Dashboard#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/dashboard#rank Dashboard#rank}
  */
  readonly rank: number;
  /**
  * Subtitle to show beneath big number, unused in other chart types
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/dashboard#subtitle Dashboard#subtitle}
  */
  readonly subtitle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/dashboard#type Dashboard#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/dashboard#width Dashboard#width}
  */
  readonly width?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/dashboard#x_pos Dashboard#x_pos}
  */
  readonly xPos?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/dashboard#y_pos Dashboard#y_pos}
  */
  readonly yPos?: number;
  /**
  * query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/dashboard#query Dashboard#query}
  */
  readonly query: DashboardChartQuery[] | cdktf.IResolvable;
  /**
  * threshold block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/dashboard#threshold Dashboard#threshold}
  */
  readonly threshold?: DashboardChartThreshold[] | cdktf.IResolvable;
  /**
  * workflow_link block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/dashboard#workflow_link Dashboard#workflow_link}
  */
  readonly workflowLink?: DashboardChartWorkflowLink[] | cdktf.IResolvable;
  /**
  * y_axis block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/dashboard#y_axis Dashboard#y_axis}
  */
  readonly yAxis?: DashboardChartYAxis;
}

export function dashboardChartToTerraform(struct?: DashboardChart | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    height: cdktf.numberToTerraform(struct!.height),
    name: cdktf.stringToTerraform(struct!.name),
    rank: cdktf.numberToTerraform(struct!.rank),
    subtitle: cdktf.stringToTerraform(struct!.subtitle),
    type: cdktf.stringToTerraform(struct!.type),
    width: cdktf.numberToTerraform(struct!.width),
    x_pos: cdktf.numberToTerraform(struct!.xPos),
    y_pos: cdktf.numberToTerraform(struct!.yPos),
    query: cdktf.listMapper(dashboardChartQueryToTerraform, true)(struct!.query),
    threshold: cdktf.listMapper(dashboardChartThresholdToTerraform, true)(struct!.threshold),
    workflow_link: cdktf.listMapper(dashboardChartWorkflowLinkToTerraform, true)(struct!.workflowLink),
    y_axis: dashboardChartYAxisToTerraform(struct!.yAxis),
  }
}


export function dashboardChartToHclTerraform(struct?: DashboardChart | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
    rank: {
      value: cdktf.numberToHclTerraform(struct!.rank),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    subtitle: {
      value: cdktf.stringToHclTerraform(struct!.subtitle),
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
    width: {
      value: cdktf.numberToHclTerraform(struct!.width),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    x_pos: {
      value: cdktf.numberToHclTerraform(struct!.xPos),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    y_pos: {
      value: cdktf.numberToHclTerraform(struct!.yPos),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    query: {
      value: cdktf.listMapperHcl(dashboardChartQueryToHclTerraform, true)(struct!.query),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardChartQueryList",
    },
    threshold: {
      value: cdktf.listMapperHcl(dashboardChartThresholdToHclTerraform, true)(struct!.threshold),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardChartThresholdList",
    },
    workflow_link: {
      value: cdktf.listMapperHcl(dashboardChartWorkflowLinkToHclTerraform, true)(struct!.workflowLink),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardChartWorkflowLinkList",
    },
    y_axis: {
      value: dashboardChartYAxisToHclTerraform(struct!.yAxis),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardChartYAxisList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardChartOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardChart | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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
    if (this._rank !== undefined) {
      hasAnyValues = true;
      internalValueResult.rank = this._rank;
    }
    if (this._subtitle !== undefined) {
      hasAnyValues = true;
      internalValueResult.subtitle = this._subtitle;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._width !== undefined) {
      hasAnyValues = true;
      internalValueResult.width = this._width;
    }
    if (this._xPos !== undefined) {
      hasAnyValues = true;
      internalValueResult.xPos = this._xPos;
    }
    if (this._yPos !== undefined) {
      hasAnyValues = true;
      internalValueResult.yPos = this._yPos;
    }
    if (this._query?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query?.internalValue;
    }
    if (this._threshold?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold?.internalValue;
    }
    if (this._workflowLink?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workflowLink = this._workflowLink?.internalValue;
    }
    if (this._yAxis?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.yAxis = this._yAxis?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardChart | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._height = undefined;
      this._name = undefined;
      this._rank = undefined;
      this._subtitle = undefined;
      this._type = undefined;
      this._width = undefined;
      this._xPos = undefined;
      this._yPos = undefined;
      this._query.internalValue = undefined;
      this._threshold.internalValue = undefined;
      this._workflowLink.internalValue = undefined;
      this._yAxis.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._height = value.height;
      this._name = value.name;
      this._rank = value.rank;
      this._subtitle = value.subtitle;
      this._type = value.type;
      this._width = value.width;
      this._xPos = value.xPos;
      this._yPos = value.yPos;
      this._query.internalValue = value.query;
      this._threshold.internalValue = value.threshold;
      this._workflowLink.internalValue = value.workflowLink;
      this._yAxis.internalValue = value.yAxis;
    }
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

  // height - computed: false, optional: true, required: false
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

  // rank - computed: false, optional: false, required: true
  private _rank?: number; 
  public get rank() {
    return this.getNumberAttribute('rank');
  }
  public set rank(value: number) {
    this._rank = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rankInput() {
    return this._rank;
  }

  // subtitle - computed: false, optional: true, required: false
  private _subtitle?: string; 
  public get subtitle() {
    return this.getStringAttribute('subtitle');
  }
  public set subtitle(value: string) {
    this._subtitle = value;
  }
  public resetSubtitle() {
    this._subtitle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subtitleInput() {
    return this._subtitle;
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

  // width - computed: false, optional: true, required: false
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

  // x_pos - computed: false, optional: true, required: false
  private _xPos?: number; 
  public get xPos() {
    return this.getNumberAttribute('x_pos');
  }
  public set xPos(value: number) {
    this._xPos = value;
  }
  public resetXPos() {
    this._xPos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xPosInput() {
    return this._xPos;
  }

  // y_pos - computed: false, optional: true, required: false
  private _yPos?: number; 
  public get yPos() {
    return this.getNumberAttribute('y_pos');
  }
  public set yPos(value: number) {
    this._yPos = value;
  }
  public resetYPos() {
    this._yPos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yPosInput() {
    return this._yPos;
  }

  // query - computed: false, optional: false, required: true
  private _query = new DashboardChartQueryList(this, "query", false);
  public get query() {
    return this._query;
  }
  public putQuery(value: DashboardChartQuery[] | cdktf.IResolvable) {
    this._query.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query.internalValue;
  }

  // threshold - computed: false, optional: true, required: false
  private _threshold = new DashboardChartThresholdList(this, "threshold", false);
  public get threshold() {
    return this._threshold;
  }
  public putThreshold(value: DashboardChartThreshold[] | cdktf.IResolvable) {
    this._threshold.internalValue = value;
  }
  public resetThreshold() {
    this._threshold.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold.internalValue;
  }

  // workflow_link - computed: false, optional: true, required: false
  private _workflowLink = new DashboardChartWorkflowLinkList(this, "workflow_link", false);
  public get workflowLink() {
    return this._workflowLink;
  }
  public putWorkflowLink(value: DashboardChartWorkflowLink[] | cdktf.IResolvable) {
    this._workflowLink.internalValue = value;
  }
  public resetWorkflowLink() {
    this._workflowLink.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workflowLinkInput() {
    return this._workflowLink.internalValue;
  }

  // y_axis - computed: false, optional: true, required: false
  private _yAxis = new DashboardChartYAxisOutputReference(this, "y_axis");
  public get yAxis() {
    return this._yAxis;
  }
  public putYAxis(value: DashboardChartYAxis) {
    this._yAxis.internalValue = value;
  }
  public resetYAxis() {
    this._yAxis.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yAxisInput() {
    return this._yAxis.internalValue;
  }
}

export class DashboardChartList extends cdktf.ComplexList {
  public internalValue? : DashboardChart[] | cdktf.IResolvable

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
  public get(index: number): DashboardChartOutputReference {
    return new DashboardChartOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardGroupAlertsListPanelFilterByPredicateLabel {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/dashboard#key Dashboard#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/dashboard#value Dashboard#value}
  */
  readonly value: string;
}

export function dashboardGroupAlertsListPanelFilterByPredicateLabelToTerraform(struct?: DashboardGroupAlertsListPanelFilterByPredicateLabel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dashboardGroupAlertsListPanelFilterByPredicateLabelToHclTerraform(struct?: DashboardGroupAlertsListPanelFilterByPredicateLabel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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

export class DashboardGroupAlertsListPanelFilterByPredicateLabelOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardGroupAlertsListPanelFilterByPredicateLabel | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardGroupAlertsListPanelFilterByPredicateLabel | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: false, required: true
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

export class DashboardGroupAlertsListPanelFilterByPredicateLabelList extends cdktf.ComplexList {
  public internalValue? : DashboardGroupAlertsListPanelFilterByPredicateLabel[] | cdktf.IResolvable

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
  public get(index: number): DashboardGroupAlertsListPanelFilterByPredicateLabelOutputReference {
    return new DashboardGroupAlertsListPanelFilterByPredicateLabelOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardGroupAlertsListPanelFilterByPredicate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/dashboard#operator Dashboard#operator}
  */
  readonly operator?: string;
  /**
  * label block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/dashboard#label Dashboard#label}
  */
  readonly label?: DashboardGroupAlertsListPanelFilterByPredicateLabel[] | cdktf.IResolvable;
}

export function dashboardGroupAlertsListPanelFilterByPredicateToTerraform(struct?: DashboardGroupAlertsListPanelFilterByPredicate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    label: cdktf.listMapper(dashboardGroupAlertsListPanelFilterByPredicateLabelToTerraform, true)(struct!.label),
  }
}


export function dashboardGroupAlertsListPanelFilterByPredicateToHclTerraform(struct?: DashboardGroupAlertsListPanelFilterByPredicate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    label: {
      value: cdktf.listMapperHcl(dashboardGroupAlertsListPanelFilterByPredicateLabelToHclTerraform, true)(struct!.label),
      isBlock: true,
      type: "set",
      storageClassType: "DashboardGroupAlertsListPanelFilterByPredicateLabelList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardGroupAlertsListPanelFilterByPredicateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardGroupAlertsListPanelFilterByPredicate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._label?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardGroupAlertsListPanelFilterByPredicate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operator = undefined;
      this._label.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operator = value.operator;
      this._label.internalValue = value.label;
    }
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // label - computed: false, optional: true, required: false
  private _label = new DashboardGroupAlertsListPanelFilterByPredicateLabelList(this, "label", true);
  public get label() {
    return this._label;
  }
  public putLabel(value: DashboardGroupAlertsListPanelFilterByPredicateLabel[] | cdktf.IResolvable) {
    this._label.internalValue = value;
  }
  public resetLabel() {
    this._label.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label.internalValue;
  }
}

export class DashboardGroupAlertsListPanelFilterByPredicateList extends cdktf.ComplexList {
  public internalValue? : DashboardGroupAlertsListPanelFilterByPredicate[] | cdktf.IResolvable

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
  public get(index: number): DashboardGroupAlertsListPanelFilterByPredicateOutputReference {
    return new DashboardGroupAlertsListPanelFilterByPredicateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardGroupAlertsListPanelFilterBy {
  /**
  * predicate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/dashboard#predicate Dashboard#predicate}
  */
  readonly predicate?: DashboardGroupAlertsListPanelFilterByPredicate[] | cdktf.IResolvable;
}

export function dashboardGroupAlertsListPanelFilterByToTerraform(struct?: DashboardGroupAlertsListPanelFilterByOutputReference | DashboardGroupAlertsListPanelFilterBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    predicate: cdktf.listMapper(dashboardGroupAlertsListPanelFilterByPredicateToTerraform, true)(struct!.predicate),
  }
}


export function dashboardGroupAlertsListPanelFilterByToHclTerraform(struct?: DashboardGroupAlertsListPanelFilterByOutputReference | DashboardGroupAlertsListPanelFilterBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    predicate: {
      value: cdktf.listMapperHcl(dashboardGroupAlertsListPanelFilterByPredicateToHclTerraform, true)(struct!.predicate),
      isBlock: true,
      type: "set",
      storageClassType: "DashboardGroupAlertsListPanelFilterByPredicateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardGroupAlertsListPanelFilterByOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardGroupAlertsListPanelFilterBy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._predicate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.predicate = this._predicate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardGroupAlertsListPanelFilterBy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._predicate.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._predicate.internalValue = value.predicate;
    }
  }

  // predicate - computed: false, optional: true, required: false
  private _predicate = new DashboardGroupAlertsListPanelFilterByPredicateList(this, "predicate", true);
  public get predicate() {
    return this._predicate;
  }
  public putPredicate(value: DashboardGroupAlertsListPanelFilterByPredicate[] | cdktf.IResolvable) {
    this._predicate.internalValue = value;
  }
  public resetPredicate() {
    this._predicate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get predicateInput() {
    return this._predicate.internalValue;
  }
}
export interface DashboardGroupAlertsListPanelPanelOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/dashboard#sort_by Dashboard#sort_by}
  */
  readonly sortBy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/dashboard#sort_direction Dashboard#sort_direction}
  */
  readonly sortDirection?: string;
}

export function dashboardGroupAlertsListPanelPanelOptionsToTerraform(struct?: DashboardGroupAlertsListPanelPanelOptionsOutputReference | DashboardGroupAlertsListPanelPanelOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sort_by: cdktf.stringToTerraform(struct!.sortBy),
    sort_direction: cdktf.stringToTerraform(struct!.sortDirection),
  }
}


export function dashboardGroupAlertsListPanelPanelOptionsToHclTerraform(struct?: DashboardGroupAlertsListPanelPanelOptionsOutputReference | DashboardGroupAlertsListPanelPanelOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sort_by: {
      value: cdktf.stringToHclTerraform(struct!.sortBy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sort_direction: {
      value: cdktf.stringToHclTerraform(struct!.sortDirection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardGroupAlertsListPanelPanelOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardGroupAlertsListPanelPanelOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sortBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.sortBy = this._sortBy;
    }
    if (this._sortDirection !== undefined) {
      hasAnyValues = true;
      internalValueResult.sortDirection = this._sortDirection;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardGroupAlertsListPanelPanelOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sortBy = undefined;
      this._sortDirection = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sortBy = value.sortBy;
      this._sortDirection = value.sortDirection;
    }
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

  // sort_direction - computed: false, optional: true, required: false
  private _sortDirection?: string; 
  public get sortDirection() {
    return this.getStringAttribute('sort_direction');
  }
  public set sortDirection(value: string) {
    this._sortDirection = value;
  }
  public resetSortDirection() {
    this._sortDirection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortDirectionInput() {
    return this._sortDirection;
  }
}
export interface DashboardGroupAlertsListPanel {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/dashboard#height Dashboard#height}
  */
  readonly height?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/dashboard#name Dashboard#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/dashboard#width Dashboard#width}
  */
  readonly width?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/dashboard#x_pos Dashboard#x_pos}
  */
  readonly xPos?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/dashboard#y_pos Dashboard#y_pos}
  */
  readonly yPos?: number;
  /**
  * filter_by block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/dashboard#filter_by Dashboard#filter_by}
  */
  readonly filterBy?: DashboardGroupAlertsListPanelFilterBy;
  /**
  * panel_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/dashboard#panel_options Dashboard#panel_options}
  */
  readonly panelOptions?: DashboardGroupAlertsListPanelPanelOptions;
}

export function dashboardGroupAlertsListPanelToTerraform(struct?: DashboardGroupAlertsListPanel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    height: cdktf.numberToTerraform(struct!.height),
    name: cdktf.stringToTerraform(struct!.name),
    width: cdktf.numberToTerraform(struct!.width),
    x_pos: cdktf.numberToTerraform(struct!.xPos),
    y_pos: cdktf.numberToTerraform(struct!.yPos),
    filter_by: dashboardGroupAlertsListPanelFilterByToTerraform(struct!.filterBy),
    panel_options: dashboardGroupAlertsListPanelPanelOptionsToTerraform(struct!.panelOptions),
  }
}


export function dashboardGroupAlertsListPanelToHclTerraform(struct?: DashboardGroupAlertsListPanel | cdktf.IResolvable): any {
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    width: {
      value: cdktf.numberToHclTerraform(struct!.width),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    x_pos: {
      value: cdktf.numberToHclTerraform(struct!.xPos),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    y_pos: {
      value: cdktf.numberToHclTerraform(struct!.yPos),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    filter_by: {
      value: dashboardGroupAlertsListPanelFilterByToHclTerraform(struct!.filterBy),
      isBlock: true,
      type: "set",
      storageClassType: "DashboardGroupAlertsListPanelFilterByList",
    },
    panel_options: {
      value: dashboardGroupAlertsListPanelPanelOptionsToHclTerraform(struct!.panelOptions),
      isBlock: true,
      type: "set",
      storageClassType: "DashboardGroupAlertsListPanelPanelOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardGroupAlertsListPanelOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardGroupAlertsListPanel | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._height !== undefined) {
      hasAnyValues = true;
      internalValueResult.height = this._height;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._width !== undefined) {
      hasAnyValues = true;
      internalValueResult.width = this._width;
    }
    if (this._xPos !== undefined) {
      hasAnyValues = true;
      internalValueResult.xPos = this._xPos;
    }
    if (this._yPos !== undefined) {
      hasAnyValues = true;
      internalValueResult.yPos = this._yPos;
    }
    if (this._filterBy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterBy = this._filterBy?.internalValue;
    }
    if (this._panelOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.panelOptions = this._panelOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardGroupAlertsListPanel | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._height = undefined;
      this._name = undefined;
      this._width = undefined;
      this._xPos = undefined;
      this._yPos = undefined;
      this._filterBy.internalValue = undefined;
      this._panelOptions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._height = value.height;
      this._name = value.name;
      this._width = value.width;
      this._xPos = value.xPos;
      this._yPos = value.yPos;
      this._filterBy.internalValue = value.filterBy;
      this._panelOptions.internalValue = value.panelOptions;
    }
  }

  // height - computed: false, optional: true, required: false
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // width - computed: false, optional: true, required: false
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

  // x_pos - computed: false, optional: true, required: false
  private _xPos?: number; 
  public get xPos() {
    return this.getNumberAttribute('x_pos');
  }
  public set xPos(value: number) {
    this._xPos = value;
  }
  public resetXPos() {
    this._xPos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xPosInput() {
    return this._xPos;
  }

  // y_pos - computed: false, optional: true, required: false
  private _yPos?: number; 
  public get yPos() {
    return this.getNumberAttribute('y_pos');
  }
  public set yPos(value: number) {
    this._yPos = value;
  }
  public resetYPos() {
    this._yPos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yPosInput() {
    return this._yPos;
  }

  // filter_by - computed: false, optional: true, required: false
  private _filterBy = new DashboardGroupAlertsListPanelFilterByOutputReference(this, "filter_by");
  public get filterBy() {
    return this._filterBy;
  }
  public putFilterBy(value: DashboardGroupAlertsListPanelFilterBy) {
    this._filterBy.internalValue = value;
  }
  public resetFilterBy() {
    this._filterBy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterByInput() {
    return this._filterBy.internalValue;
  }

  // panel_options - computed: false, optional: true, required: false
  private _panelOptions = new DashboardGroupAlertsListPanelPanelOptionsOutputReference(this, "panel_options");
  public get panelOptions() {
    return this._panelOptions;
  }
  public putPanelOptions(value: DashboardGroupAlertsListPanelPanelOptions) {
    this._panelOptions.internalValue = value;
  }
  public resetPanelOptions() {
    this._panelOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get panelOptionsInput() {
    return this._panelOptions.internalValue;
  }
}

export class DashboardGroupAlertsListPanelList extends cdktf.ComplexList {
  public internalValue? : DashboardGroupAlertsListPanel[] | cdktf.IResolvable

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
  public get(index: number): DashboardGroupAlertsListPanelOutputReference {
    return new DashboardGroupAlertsListPanelOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardGroupChartQueryDependencyMapOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/dashboard#map_type Dashboard#map_type}
  */
  readonly mapType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/dashboard#scope Dashboard#scope}
  */
  readonly scope?: string;
}

export function dashboardGroupChartQueryDependencyMapOptionsToTerraform(struct?: DashboardGroupChartQueryDependencyMapOptionsOutputReference | DashboardGroupChartQueryDependencyMapOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    map_type: cdktf.stringToTerraform(struct!.mapType),
    scope: cdktf.stringToTerraform(struct!.scope),
  }
}


export function dashboardGroupChartQueryDependencyMapOptionsToHclTerraform(struct?: DashboardGroupChartQueryDependencyMapOptionsOutputReference | DashboardGroupChartQueryDependencyMapOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    map_type: {
      value: cdktf.stringToHclTerraform(struct!.mapType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scope: {
      value: cdktf.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardGroupChartQueryDependencyMapOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardGroupChartQueryDependencyMapOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mapType !== undefined) {
      hasAnyValues = true;
      internalValueResult.mapType = this._mapType;
    }
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardGroupChartQueryDependencyMapOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mapType = undefined;
      this._scope = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mapType = value.mapType;
      this._scope = value.scope;
    }
  }

  // map_type - computed: false, optional: true, required: false
  private _mapType?: string; 
  public get mapType() {
    return this.getStringAttribute('map_type');
  }
  public set mapType(value: string) {
    this._mapType = value;
  }
  public resetMapType() {
    this._mapType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mapTypeInput() {
    return this._mapType;
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }
}
export interface DashboardGroupChartQueryDisplayTypeOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/dashboard#comparison_window_ms Dashboard#comparison_window_ms}
  */
  readonly comparisonWindowMs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/dashboard#display_type Dashboard#display_type}
  */
  readonly displayType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/dashboard#is_donut Dashboard#is_donut}
  */
  readonly isDonut?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/dashboard#max Dashboard#max}
  */
  readonly max?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/dashboard#min Dashboard#min}
  */
  readonly min?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/dashboard#sort_by Dashboard#sort_by}
  */
  readonly sortBy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/dashboard#sort_direction Dashboard#sort_direction}
  */
  readonly sortDirection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/dashboard#y_axis_log_base Dashboard#y_axis_log_base}
  */
  readonly yAxisLogBase?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/dashboard#y_axis_max Dashboard#y_axis_max}
  */
  readonly yAxisMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/dashboard#y_axis_min Dashboard#y_axis_min}
  */
  readonly yAxisMin?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/dashboard#y_axis_scale Dashboard#y_axis_scale}
  */
  readonly yAxisScale?: string;
}

export function dashboardGroupChartQueryDisplayTypeOptionsToTerraform(struct?: DashboardGroupChartQueryDisplayTypeOptionsOutputReference | DashboardGroupChartQueryDisplayTypeOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison_window_ms: cdktf.numberToTerraform(struct!.comparisonWindowMs),
    display_type: cdktf.stringToTerraform(struct!.displayType),
    is_donut: cdktf.booleanToTerraform(struct!.isDonut),
    max: cdktf.stringToTerraform(struct!.max),
    min: cdktf.stringToTerraform(struct!.min),
    sort_by: cdktf.stringToTerraform(struct!.sortBy),
    sort_direction: cdktf.stringToTerraform(struct!.sortDirection),
    y_axis_log_base: cdktf.numberToTerraform(struct!.yAxisLogBase),
    y_axis_max: cdktf.numberToTerraform(struct!.yAxisMax),
    y_axis_min: cdktf.numberToTerraform(struct!.yAxisMin),
    y_axis_scale: cdktf.stringToTerraform(struct!.yAxisScale),
  }
}


export function dashboardGroupChartQueryDisplayTypeOptionsToHclTerraform(struct?: DashboardGroupChartQueryDisplayTypeOptionsOutputReference | DashboardGroupChartQueryDisplayTypeOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comparison_window_ms: {
      value: cdktf.numberToHclTerraform(struct!.comparisonWindowMs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    display_type: {
      value: cdktf.stringToHclTerraform(struct!.displayType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_donut: {
      value: cdktf.booleanToHclTerraform(struct!.isDonut),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max: {
      value: cdktf.stringToHclTerraform(struct!.max),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min: {
      value: cdktf.stringToHclTerraform(struct!.min),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sort_by: {
      value: cdktf.stringToHclTerraform(struct!.sortBy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sort_direction: {
      value: cdktf.stringToHclTerraform(struct!.sortDirection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    y_axis_log_base: {
      value: cdktf.numberToHclTerraform(struct!.yAxisLogBase),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    y_axis_max: {
      value: cdktf.numberToHclTerraform(struct!.yAxisMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    y_axis_min: {
      value: cdktf.numberToHclTerraform(struct!.yAxisMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    y_axis_scale: {
      value: cdktf.stringToHclTerraform(struct!.yAxisScale),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardGroupChartQueryDisplayTypeOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardGroupChartQueryDisplayTypeOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparisonWindowMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparisonWindowMs = this._comparisonWindowMs;
    }
    if (this._displayType !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayType = this._displayType;
    }
    if (this._isDonut !== undefined) {
      hasAnyValues = true;
      internalValueResult.isDonut = this._isDonut;
    }
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    if (this._sortBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.sortBy = this._sortBy;
    }
    if (this._sortDirection !== undefined) {
      hasAnyValues = true;
      internalValueResult.sortDirection = this._sortDirection;
    }
    if (this._yAxisLogBase !== undefined) {
      hasAnyValues = true;
      internalValueResult.yAxisLogBase = this._yAxisLogBase;
    }
    if (this._yAxisMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.yAxisMax = this._yAxisMax;
    }
    if (this._yAxisMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.yAxisMin = this._yAxisMin;
    }
    if (this._yAxisScale !== undefined) {
      hasAnyValues = true;
      internalValueResult.yAxisScale = this._yAxisScale;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardGroupChartQueryDisplayTypeOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._comparisonWindowMs = undefined;
      this._displayType = undefined;
      this._isDonut = undefined;
      this._max = undefined;
      this._min = undefined;
      this._sortBy = undefined;
      this._sortDirection = undefined;
      this._yAxisLogBase = undefined;
      this._yAxisMax = undefined;
      this._yAxisMin = undefined;
      this._yAxisScale = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._comparisonWindowMs = value.comparisonWindowMs;
      this._displayType = value.displayType;
      this._isDonut = value.isDonut;
      this._max = value.max;
      this._min = value.min;
      this._sortBy = value.sortBy;
      this._sortDirection = value.sortDirection;
      this._yAxisLogBase = value.yAxisLogBase;
      this._yAxisMax = value.yAxisMax;
      this._yAxisMin = value.yAxisMin;
      this._yAxisScale = value.yAxisScale;
    }
  }

  // comparison_window_ms - computed: false, optional: true, required: false
  private _comparisonWindowMs?: number; 
  public get comparisonWindowMs() {
    return this.getNumberAttribute('comparison_window_ms');
  }
  public set comparisonWindowMs(value: number) {
    this._comparisonWindowMs = value;
  }
  public resetComparisonWindowMs() {
    this._comparisonWindowMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonWindowMsInput() {
    return this._comparisonWindowMs;
  }

  // display_type - computed: false, optional: true, required: false
  private _displayType?: string; 
  public get displayType() {
    return this.getStringAttribute('display_type');
  }
  public set displayType(value: string) {
    this._displayType = value;
  }
  public resetDisplayType() {
    this._displayType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayTypeInput() {
    return this._displayType;
  }

  // is_donut - computed: false, optional: true, required: false
  private _isDonut?: boolean | cdktf.IResolvable; 
  public get isDonut() {
    return this.getBooleanAttribute('is_donut');
  }
  public set isDonut(value: boolean | cdktf.IResolvable) {
    this._isDonut = value;
  }
  public resetIsDonut() {
    this._isDonut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDonutInput() {
    return this._isDonut;
  }

  // max - computed: false, optional: true, required: false
  private _max?: string; 
  public get max() {
    return this.getStringAttribute('max');
  }
  public set max(value: string) {
    this._max = value;
  }
  public resetMax() {
    this._max = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // min - computed: false, optional: true, required: false
  private _min?: string; 
  public get min() {
    return this.getStringAttribute('min');
  }
  public set min(value: string) {
    this._min = value;
  }
  public resetMin() {
    this._min = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
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

  // sort_direction - computed: false, optional: true, required: false
  private _sortDirection?: string; 
  public get sortDirection() {
    return this.getStringAttribute('sort_direction');
  }
  public set sortDirection(value: string) {
    this._sortDirection = value;
  }
  public resetSortDirection() {
    this._sortDirection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortDirectionInput() {
    return this._sortDirection;
  }

  // y_axis_log_base - computed: false, optional: true, required: false
  private _yAxisLogBase?: number; 
  public get yAxisLogBase() {
    return this.getNumberAttribute('y_axis_log_base');
  }
  public set yAxisLogBase(value: number) {
    this._yAxisLogBase = value;
  }
  public resetYAxisLogBase() {
    this._yAxisLogBase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yAxisLogBaseInput() {
    return this._yAxisLogBase;
  }

  // y_axis_max - computed: false, optional: true, required: false
  private _yAxisMax?: number; 
  public get yAxisMax() {
    return this.getNumberAttribute('y_axis_max');
  }
  public set yAxisMax(value: number) {
    this._yAxisMax = value;
  }
  public resetYAxisMax() {
    this._yAxisMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yAxisMaxInput() {
    return this._yAxisMax;
  }

  // y_axis_min - computed: false, optional: true, required: false
  private _yAxisMin?: number; 
  public get yAxisMin() {
    return this.getNumberAttribute('y_axis_min');
  }
  public set yAxisMin(value: number) {
    this._yAxisMin = value;
  }
  public resetYAxisMin() {
    this._yAxisMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yAxisMinInput() {
    return this._yAxisMin;
  }

  // y_axis_scale - computed: false, optional: true, required: false
  private _yAxisScale?: string; 
  public get yAxisScale() {
    return this.getStringAttribute('y_axis_scale');
  }
  public set yAxisScale(value: string) {
    this._yAxisScale = value;
  }
  public resetYAxisScale() {
    this._yAxisScale = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yAxisScaleInput() {
    return this._yAxisScale;
  }
}
export interface DashboardGroupChartQuery {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/dashboard#display Dashboard#display}
  */
  readonly display?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/dashboard#hidden Dashboard#hidden}
  */
  readonly hidden: boolean | cdktf.IResolvable;
  /**
  * An optional map of sub-query names in the query_string to a boolean string to hide/show that query. If specified, the map must have an entry for all named sub-queries in the query_string. A value of "true" indicates the query should be hidden. Example: `hidden_queries = {  "a" = "true",  "b" = "false" }`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/dashboard#hidden_queries Dashboard#hidden_queries}
  */
  readonly hiddenQueries?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/dashboard#query_name Dashboard#query_name}
  */
  readonly queryName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/dashboard#query_string Dashboard#query_string}
  */
  readonly queryString: string;
  /**
  * dependency_map_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/dashboard#dependency_map_options Dashboard#dependency_map_options}
  */
  readonly dependencyMapOptions?: DashboardGroupChartQueryDependencyMapOptions;
  /**
  * display_type_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/dashboard#display_type_options Dashboard#display_type_options}
  */
  readonly displayTypeOptions?: DashboardGroupChartQueryDisplayTypeOptions;
}

export function dashboardGroupChartQueryToTerraform(struct?: DashboardGroupChartQuery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display: cdktf.stringToTerraform(struct!.display),
    hidden: cdktf.booleanToTerraform(struct!.hidden),
    hidden_queries: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.hiddenQueries),
    query_name: cdktf.stringToTerraform(struct!.queryName),
    query_string: cdktf.stringToTerraform(struct!.queryString),
    dependency_map_options: dashboardGroupChartQueryDependencyMapOptionsToTerraform(struct!.dependencyMapOptions),
    display_type_options: dashboardGroupChartQueryDisplayTypeOptionsToTerraform(struct!.displayTypeOptions),
  }
}


export function dashboardGroupChartQueryToHclTerraform(struct?: DashboardGroupChartQuery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    display: {
      value: cdktf.stringToHclTerraform(struct!.display),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hidden: {
      value: cdktf.booleanToHclTerraform(struct!.hidden),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    hidden_queries: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.hiddenQueries),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    query_name: {
      value: cdktf.stringToHclTerraform(struct!.queryName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query_string: {
      value: cdktf.stringToHclTerraform(struct!.queryString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dependency_map_options: {
      value: dashboardGroupChartQueryDependencyMapOptionsToHclTerraform(struct!.dependencyMapOptions),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardGroupChartQueryDependencyMapOptionsList",
    },
    display_type_options: {
      value: dashboardGroupChartQueryDisplayTypeOptionsToHclTerraform(struct!.displayTypeOptions),
      isBlock: true,
      type: "set",
      storageClassType: "DashboardGroupChartQueryDisplayTypeOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardGroupChartQueryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardGroupChartQuery | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._display !== undefined) {
      hasAnyValues = true;
      internalValueResult.display = this._display;
    }
    if (this._hidden !== undefined) {
      hasAnyValues = true;
      internalValueResult.hidden = this._hidden;
    }
    if (this._hiddenQueries !== undefined) {
      hasAnyValues = true;
      internalValueResult.hiddenQueries = this._hiddenQueries;
    }
    if (this._queryName !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryName = this._queryName;
    }
    if (this._queryString !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryString = this._queryString;
    }
    if (this._dependencyMapOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dependencyMapOptions = this._dependencyMapOptions?.internalValue;
    }
    if (this._displayTypeOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayTypeOptions = this._displayTypeOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardGroupChartQuery | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._display = undefined;
      this._hidden = undefined;
      this._hiddenQueries = undefined;
      this._queryName = undefined;
      this._queryString = undefined;
      this._dependencyMapOptions.internalValue = undefined;
      this._displayTypeOptions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._display = value.display;
      this._hidden = value.hidden;
      this._hiddenQueries = value.hiddenQueries;
      this._queryName = value.queryName;
      this._queryString = value.queryString;
      this._dependencyMapOptions.internalValue = value.dependencyMapOptions;
      this._displayTypeOptions.internalValue = value.displayTypeOptions;
    }
  }

  // display - computed: false, optional: true, required: false
  private _display?: string; 
  public get display() {
    return this.getStringAttribute('display');
  }
  public set display(value: string) {
    this._display = value;
  }
  public resetDisplay() {
    this._display = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayInput() {
    return this._display;
  }

  // hidden - computed: false, optional: false, required: true
  private _hidden?: boolean | cdktf.IResolvable; 
  public get hidden() {
    return this.getBooleanAttribute('hidden');
  }
  public set hidden(value: boolean | cdktf.IResolvable) {
    this._hidden = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hiddenInput() {
    return this._hidden;
  }

  // hidden_queries - computed: false, optional: true, required: false
  private _hiddenQueries?: { [key: string]: string }; 
  public get hiddenQueries() {
    return this.getStringMapAttribute('hidden_queries');
  }
  public set hiddenQueries(value: { [key: string]: string }) {
    this._hiddenQueries = value;
  }
  public resetHiddenQueries() {
    this._hiddenQueries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hiddenQueriesInput() {
    return this._hiddenQueries;
  }

  // query_name - computed: false, optional: false, required: true
  private _queryName?: string; 
  public get queryName() {
    return this.getStringAttribute('query_name');
  }
  public set queryName(value: string) {
    this._queryName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryNameInput() {
    return this._queryName;
  }

  // query_string - computed: false, optional: false, required: true
  private _queryString?: string; 
  public get queryString() {
    return this.getStringAttribute('query_string');
  }
  public set queryString(value: string) {
    this._queryString = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryStringInput() {
    return this._queryString;
  }

  // dependency_map_options - computed: false, optional: true, required: false
  private _dependencyMapOptions = new DashboardGroupChartQueryDependencyMapOptionsOutputReference(this, "dependency_map_options");
  public get dependencyMapOptions() {
    return this._dependencyMapOptions;
  }
  public putDependencyMapOptions(value: DashboardGroupChartQueryDependencyMapOptions) {
    this._dependencyMapOptions.internalValue = value;
  }
  public resetDependencyMapOptions() {
    this._dependencyMapOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dependencyMapOptionsInput() {
    return this._dependencyMapOptions.internalValue;
  }

  // display_type_options - computed: false, optional: true, required: false
  private _displayTypeOptions = new DashboardGroupChartQueryDisplayTypeOptionsOutputReference(this, "display_type_options");
  public get displayTypeOptions() {
    return this._displayTypeOptions;
  }
  public putDisplayTypeOptions(value: DashboardGroupChartQueryDisplayTypeOptions) {
    this._displayTypeOptions.internalValue = value;
  }
  public resetDisplayTypeOptions() {
    this._displayTypeOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayTypeOptionsInput() {
    return this._displayTypeOptions.internalValue;
  }
}

export class DashboardGroupChartQueryList extends cdktf.ComplexList {
  public internalValue? : DashboardGroupChartQuery[] | cdktf.IResolvable

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
  public get(index: number): DashboardGroupChartQueryOutputReference {
    return new DashboardGroupChartQueryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardGroupChartThreshold {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/dashboard#color Dashboard#color}
  */
  readonly color: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/dashboard#label Dashboard#label}
  */
  readonly label?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/dashboard#operator Dashboard#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/dashboard#value Dashboard#value}
  */
  readonly value: number;
}

export function dashboardGroupChartThresholdToTerraform(struct?: DashboardGroupChartThreshold | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktf.stringToTerraform(struct!.color),
    label: cdktf.stringToTerraform(struct!.label),
    operator: cdktf.stringToTerraform(struct!.operator),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function dashboardGroupChartThresholdToHclTerraform(struct?: DashboardGroupChartThreshold | cdktf.IResolvable): any {
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
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardGroupChartThresholdOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardGroupChartThreshold | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardGroupChartThreshold | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._color = undefined;
      this._label = undefined;
      this._operator = undefined;
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
      this._label = value.label;
      this._operator = value.operator;
      this._value = value.value;
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

  // label - computed: false, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DashboardGroupChartThresholdList extends cdktf.ComplexList {
  public internalValue? : DashboardGroupChartThreshold[] | cdktf.IResolvable

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
  public get(index: number): DashboardGroupChartThresholdOutputReference {
    return new DashboardGroupChartThresholdOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardGroupChartWorkflowLink {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/dashboard#name Dashboard#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/dashboard#url Dashboard#url}
  */
  readonly url: string;
}

export function dashboardGroupChartWorkflowLinkToTerraform(struct?: DashboardGroupChartWorkflowLink | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function dashboardGroupChartWorkflowLinkToHclTerraform(struct?: DashboardGroupChartWorkflowLink | cdktf.IResolvable): any {
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

export class DashboardGroupChartWorkflowLinkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardGroupChartWorkflowLink | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardGroupChartWorkflowLink | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._url = value.url;
    }
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

export class DashboardGroupChartWorkflowLinkList extends cdktf.ComplexList {
  public internalValue? : DashboardGroupChartWorkflowLink[] | cdktf.IResolvable

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
  public get(index: number): DashboardGroupChartWorkflowLinkOutputReference {
    return new DashboardGroupChartWorkflowLinkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardGroupChartYAxis {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/dashboard#max Dashboard#max}
  */
  readonly max: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/dashboard#min Dashboard#min}
  */
  readonly min: number;
}

export function dashboardGroupChartYAxisToTerraform(struct?: DashboardGroupChartYAxisOutputReference | DashboardGroupChartYAxis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max: cdktf.numberToTerraform(struct!.max),
    min: cdktf.numberToTerraform(struct!.min),
  }
}


export function dashboardGroupChartYAxisToHclTerraform(struct?: DashboardGroupChartYAxisOutputReference | DashboardGroupChartYAxis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardGroupChartYAxisOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardGroupChartYAxis | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardGroupChartYAxis | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._max = undefined;
      this._min = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._max = value.max;
      this._min = value.min;
    }
  }

  // max - computed: false, optional: false, required: true
  private _max?: number; 
  public get max() {
    return this.getNumberAttribute('max');
  }
  public set max(value: number) {
    this._max = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // min - computed: false, optional: false, required: true
  private _min?: number; 
  public get min() {
    return this.getNumberAttribute('min');
  }
  public set min(value: number) {
    this._min = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
  }
}
export interface DashboardGroupChart {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/dashboard#description Dashboard#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/dashboard#height Dashboard#height}
  */
  readonly height?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/dashboard#name Dashboard#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/dashboard#rank Dashboard#rank}
  */
  readonly rank: number;
  /**
  * Subtitle to show beneath big number, unused in other chart types
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/dashboard#subtitle Dashboard#subtitle}
  */
  readonly subtitle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/dashboard#type Dashboard#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/dashboard#width Dashboard#width}
  */
  readonly width?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/dashboard#x_pos Dashboard#x_pos}
  */
  readonly xPos?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/dashboard#y_pos Dashboard#y_pos}
  */
  readonly yPos?: number;
  /**
  * query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/dashboard#query Dashboard#query}
  */
  readonly query: DashboardGroupChartQuery[] | cdktf.IResolvable;
  /**
  * threshold block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/dashboard#threshold Dashboard#threshold}
  */
  readonly threshold?: DashboardGroupChartThreshold[] | cdktf.IResolvable;
  /**
  * workflow_link block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/dashboard#workflow_link Dashboard#workflow_link}
  */
  readonly workflowLink?: DashboardGroupChartWorkflowLink[] | cdktf.IResolvable;
  /**
  * y_axis block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/dashboard#y_axis Dashboard#y_axis}
  */
  readonly yAxis?: DashboardGroupChartYAxis;
}

export function dashboardGroupChartToTerraform(struct?: DashboardGroupChart | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    height: cdktf.numberToTerraform(struct!.height),
    name: cdktf.stringToTerraform(struct!.name),
    rank: cdktf.numberToTerraform(struct!.rank),
    subtitle: cdktf.stringToTerraform(struct!.subtitle),
    type: cdktf.stringToTerraform(struct!.type),
    width: cdktf.numberToTerraform(struct!.width),
    x_pos: cdktf.numberToTerraform(struct!.xPos),
    y_pos: cdktf.numberToTerraform(struct!.yPos),
    query: cdktf.listMapper(dashboardGroupChartQueryToTerraform, true)(struct!.query),
    threshold: cdktf.listMapper(dashboardGroupChartThresholdToTerraform, true)(struct!.threshold),
    workflow_link: cdktf.listMapper(dashboardGroupChartWorkflowLinkToTerraform, true)(struct!.workflowLink),
    y_axis: dashboardGroupChartYAxisToTerraform(struct!.yAxis),
  }
}


export function dashboardGroupChartToHclTerraform(struct?: DashboardGroupChart | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
    rank: {
      value: cdktf.numberToHclTerraform(struct!.rank),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    subtitle: {
      value: cdktf.stringToHclTerraform(struct!.subtitle),
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
    width: {
      value: cdktf.numberToHclTerraform(struct!.width),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    x_pos: {
      value: cdktf.numberToHclTerraform(struct!.xPos),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    y_pos: {
      value: cdktf.numberToHclTerraform(struct!.yPos),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    query: {
      value: cdktf.listMapperHcl(dashboardGroupChartQueryToHclTerraform, true)(struct!.query),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardGroupChartQueryList",
    },
    threshold: {
      value: cdktf.listMapperHcl(dashboardGroupChartThresholdToHclTerraform, true)(struct!.threshold),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardGroupChartThresholdList",
    },
    workflow_link: {
      value: cdktf.listMapperHcl(dashboardGroupChartWorkflowLinkToHclTerraform, true)(struct!.workflowLink),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardGroupChartWorkflowLinkList",
    },
    y_axis: {
      value: dashboardGroupChartYAxisToHclTerraform(struct!.yAxis),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardGroupChartYAxisList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardGroupChartOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardGroupChart | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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
    if (this._rank !== undefined) {
      hasAnyValues = true;
      internalValueResult.rank = this._rank;
    }
    if (this._subtitle !== undefined) {
      hasAnyValues = true;
      internalValueResult.subtitle = this._subtitle;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._width !== undefined) {
      hasAnyValues = true;
      internalValueResult.width = this._width;
    }
    if (this._xPos !== undefined) {
      hasAnyValues = true;
      internalValueResult.xPos = this._xPos;
    }
    if (this._yPos !== undefined) {
      hasAnyValues = true;
      internalValueResult.yPos = this._yPos;
    }
    if (this._query?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query?.internalValue;
    }
    if (this._threshold?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold?.internalValue;
    }
    if (this._workflowLink?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workflowLink = this._workflowLink?.internalValue;
    }
    if (this._yAxis?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.yAxis = this._yAxis?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardGroupChart | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._height = undefined;
      this._name = undefined;
      this._rank = undefined;
      this._subtitle = undefined;
      this._type = undefined;
      this._width = undefined;
      this._xPos = undefined;
      this._yPos = undefined;
      this._query.internalValue = undefined;
      this._threshold.internalValue = undefined;
      this._workflowLink.internalValue = undefined;
      this._yAxis.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._height = value.height;
      this._name = value.name;
      this._rank = value.rank;
      this._subtitle = value.subtitle;
      this._type = value.type;
      this._width = value.width;
      this._xPos = value.xPos;
      this._yPos = value.yPos;
      this._query.internalValue = value.query;
      this._threshold.internalValue = value.threshold;
      this._workflowLink.internalValue = value.workflowLink;
      this._yAxis.internalValue = value.yAxis;
    }
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

  // height - computed: false, optional: true, required: false
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

  // rank - computed: false, optional: false, required: true
  private _rank?: number; 
  public get rank() {
    return this.getNumberAttribute('rank');
  }
  public set rank(value: number) {
    this._rank = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rankInput() {
    return this._rank;
  }

  // subtitle - computed: false, optional: true, required: false
  private _subtitle?: string; 
  public get subtitle() {
    return this.getStringAttribute('subtitle');
  }
  public set subtitle(value: string) {
    this._subtitle = value;
  }
  public resetSubtitle() {
    this._subtitle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subtitleInput() {
    return this._subtitle;
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

  // width - computed: false, optional: true, required: false
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

  // x_pos - computed: false, optional: true, required: false
  private _xPos?: number; 
  public get xPos() {
    return this.getNumberAttribute('x_pos');
  }
  public set xPos(value: number) {
    this._xPos = value;
  }
  public resetXPos() {
    this._xPos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xPosInput() {
    return this._xPos;
  }

  // y_pos - computed: false, optional: true, required: false
  private _yPos?: number; 
  public get yPos() {
    return this.getNumberAttribute('y_pos');
  }
  public set yPos(value: number) {
    this._yPos = value;
  }
  public resetYPos() {
    this._yPos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yPosInput() {
    return this._yPos;
  }

  // query - computed: false, optional: false, required: true
  private _query = new DashboardGroupChartQueryList(this, "query", false);
  public get query() {
    return this._query;
  }
  public putQuery(value: DashboardGroupChartQuery[] | cdktf.IResolvable) {
    this._query.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query.internalValue;
  }

  // threshold - computed: false, optional: true, required: false
  private _threshold = new DashboardGroupChartThresholdList(this, "threshold", false);
  public get threshold() {
    return this._threshold;
  }
  public putThreshold(value: DashboardGroupChartThreshold[] | cdktf.IResolvable) {
    this._threshold.internalValue = value;
  }
  public resetThreshold() {
    this._threshold.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold.internalValue;
  }

  // workflow_link - computed: false, optional: true, required: false
  private _workflowLink = new DashboardGroupChartWorkflowLinkList(this, "workflow_link", false);
  public get workflowLink() {
    return this._workflowLink;
  }
  public putWorkflowLink(value: DashboardGroupChartWorkflowLink[] | cdktf.IResolvable) {
    this._workflowLink.internalValue = value;
  }
  public resetWorkflowLink() {
    this._workflowLink.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workflowLinkInput() {
    return this._workflowLink.internalValue;
  }

  // y_axis - computed: false, optional: true, required: false
  private _yAxis = new DashboardGroupChartYAxisOutputReference(this, "y_axis");
  public get yAxis() {
    return this._yAxis;
  }
  public putYAxis(value: DashboardGroupChartYAxis) {
    this._yAxis.internalValue = value;
  }
  public resetYAxis() {
    this._yAxis.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yAxisInput() {
    return this._yAxis.internalValue;
  }
}

export class DashboardGroupChartList extends cdktf.ComplexList {
  public internalValue? : DashboardGroupChart[] | cdktf.IResolvable

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
  public get(index: number): DashboardGroupChartOutputReference {
    return new DashboardGroupChartOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardGroupServiceHealthPanelPanelOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/dashboard#change_since Dashboard#change_since}
  */
  readonly changeSince?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/dashboard#percentile Dashboard#percentile}
  */
  readonly percentile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/dashboard#sort_by Dashboard#sort_by}
  */
  readonly sortBy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/dashboard#sort_direction Dashboard#sort_direction}
  */
  readonly sortDirection?: string;
}

export function dashboardGroupServiceHealthPanelPanelOptionsToTerraform(struct?: DashboardGroupServiceHealthPanelPanelOptionsOutputReference | DashboardGroupServiceHealthPanelPanelOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    change_since: cdktf.stringToTerraform(struct!.changeSince),
    percentile: cdktf.stringToTerraform(struct!.percentile),
    sort_by: cdktf.stringToTerraform(struct!.sortBy),
    sort_direction: cdktf.stringToTerraform(struct!.sortDirection),
  }
}


export function dashboardGroupServiceHealthPanelPanelOptionsToHclTerraform(struct?: DashboardGroupServiceHealthPanelPanelOptionsOutputReference | DashboardGroupServiceHealthPanelPanelOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    change_since: {
      value: cdktf.stringToHclTerraform(struct!.changeSince),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    percentile: {
      value: cdktf.stringToHclTerraform(struct!.percentile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sort_by: {
      value: cdktf.stringToHclTerraform(struct!.sortBy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sort_direction: {
      value: cdktf.stringToHclTerraform(struct!.sortDirection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardGroupServiceHealthPanelPanelOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardGroupServiceHealthPanelPanelOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._changeSince !== undefined) {
      hasAnyValues = true;
      internalValueResult.changeSince = this._changeSince;
    }
    if (this._percentile !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentile = this._percentile;
    }
    if (this._sortBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.sortBy = this._sortBy;
    }
    if (this._sortDirection !== undefined) {
      hasAnyValues = true;
      internalValueResult.sortDirection = this._sortDirection;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardGroupServiceHealthPanelPanelOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._changeSince = undefined;
      this._percentile = undefined;
      this._sortBy = undefined;
      this._sortDirection = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._changeSince = value.changeSince;
      this._percentile = value.percentile;
      this._sortBy = value.sortBy;
      this._sortDirection = value.sortDirection;
    }
  }

  // change_since - computed: false, optional: true, required: false
  private _changeSince?: string; 
  public get changeSince() {
    return this.getStringAttribute('change_since');
  }
  public set changeSince(value: string) {
    this._changeSince = value;
  }
  public resetChangeSince() {
    this._changeSince = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get changeSinceInput() {
    return this._changeSince;
  }

  // percentile - computed: false, optional: true, required: false
  private _percentile?: string; 
  public get percentile() {
    return this.getStringAttribute('percentile');
  }
  public set percentile(value: string) {
    this._percentile = value;
  }
  public resetPercentile() {
    this._percentile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentileInput() {
    return this._percentile;
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

  // sort_direction - computed: false, optional: true, required: false
  private _sortDirection?: string; 
  public get sortDirection() {
    return this.getStringAttribute('sort_direction');
  }
  public set sortDirection(value: string) {
    this._sortDirection = value;
  }
  public resetSortDirection() {
    this._sortDirection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortDirectionInput() {
    return this._sortDirection;
  }
}
export interface DashboardGroupServiceHealthPanel {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/dashboard#height Dashboard#height}
  */
  readonly height?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/dashboard#name Dashboard#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/dashboard#width Dashboard#width}
  */
  readonly width?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/dashboard#x_pos Dashboard#x_pos}
  */
  readonly xPos?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/dashboard#y_pos Dashboard#y_pos}
  */
  readonly yPos?: number;
  /**
  * panel_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/dashboard#panel_options Dashboard#panel_options}
  */
  readonly panelOptions?: DashboardGroupServiceHealthPanelPanelOptions;
}

export function dashboardGroupServiceHealthPanelToTerraform(struct?: DashboardGroupServiceHealthPanel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    height: cdktf.numberToTerraform(struct!.height),
    name: cdktf.stringToTerraform(struct!.name),
    width: cdktf.numberToTerraform(struct!.width),
    x_pos: cdktf.numberToTerraform(struct!.xPos),
    y_pos: cdktf.numberToTerraform(struct!.yPos),
    panel_options: dashboardGroupServiceHealthPanelPanelOptionsToTerraform(struct!.panelOptions),
  }
}


export function dashboardGroupServiceHealthPanelToHclTerraform(struct?: DashboardGroupServiceHealthPanel | cdktf.IResolvable): any {
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    width: {
      value: cdktf.numberToHclTerraform(struct!.width),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    x_pos: {
      value: cdktf.numberToHclTerraform(struct!.xPos),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    y_pos: {
      value: cdktf.numberToHclTerraform(struct!.yPos),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    panel_options: {
      value: dashboardGroupServiceHealthPanelPanelOptionsToHclTerraform(struct!.panelOptions),
      isBlock: true,
      type: "set",
      storageClassType: "DashboardGroupServiceHealthPanelPanelOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardGroupServiceHealthPanelOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardGroupServiceHealthPanel | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._height !== undefined) {
      hasAnyValues = true;
      internalValueResult.height = this._height;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._width !== undefined) {
      hasAnyValues = true;
      internalValueResult.width = this._width;
    }
    if (this._xPos !== undefined) {
      hasAnyValues = true;
      internalValueResult.xPos = this._xPos;
    }
    if (this._yPos !== undefined) {
      hasAnyValues = true;
      internalValueResult.yPos = this._yPos;
    }
    if (this._panelOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.panelOptions = this._panelOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardGroupServiceHealthPanel | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._height = undefined;
      this._name = undefined;
      this._width = undefined;
      this._xPos = undefined;
      this._yPos = undefined;
      this._panelOptions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._height = value.height;
      this._name = value.name;
      this._width = value.width;
      this._xPos = value.xPos;
      this._yPos = value.yPos;
      this._panelOptions.internalValue = value.panelOptions;
    }
  }

  // height - computed: false, optional: true, required: false
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // width - computed: false, optional: true, required: false
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

  // x_pos - computed: false, optional: true, required: false
  private _xPos?: number; 
  public get xPos() {
    return this.getNumberAttribute('x_pos');
  }
  public set xPos(value: number) {
    this._xPos = value;
  }
  public resetXPos() {
    this._xPos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xPosInput() {
    return this._xPos;
  }

  // y_pos - computed: false, optional: true, required: false
  private _yPos?: number; 
  public get yPos() {
    return this.getNumberAttribute('y_pos');
  }
  public set yPos(value: number) {
    this._yPos = value;
  }
  public resetYPos() {
    this._yPos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yPosInput() {
    return this._yPos;
  }

  // panel_options - computed: false, optional: true, required: false
  private _panelOptions = new DashboardGroupServiceHealthPanelPanelOptionsOutputReference(this, "panel_options");
  public get panelOptions() {
    return this._panelOptions;
  }
  public putPanelOptions(value: DashboardGroupServiceHealthPanelPanelOptions) {
    this._panelOptions.internalValue = value;
  }
  public resetPanelOptions() {
    this._panelOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get panelOptionsInput() {
    return this._panelOptions.internalValue;
  }
}

export class DashboardGroupServiceHealthPanelList extends cdktf.ComplexList {
  public internalValue? : DashboardGroupServiceHealthPanel[] | cdktf.IResolvable

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
  public get(index: number): DashboardGroupServiceHealthPanelOutputReference {
    return new DashboardGroupServiceHealthPanelOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardGroupTextPanel {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/dashboard#description Dashboard#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/dashboard#height Dashboard#height}
  */
  readonly height?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/dashboard#name Dashboard#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/dashboard#text Dashboard#text}
  */
  readonly text: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/dashboard#width Dashboard#width}
  */
  readonly width?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/dashboard#x_pos Dashboard#x_pos}
  */
  readonly xPos?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/dashboard#y_pos Dashboard#y_pos}
  */
  readonly yPos?: number;
}

export function dashboardGroupTextPanelToTerraform(struct?: DashboardGroupTextPanel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    height: cdktf.numberToTerraform(struct!.height),
    name: cdktf.stringToTerraform(struct!.name),
    text: cdktf.stringToTerraform(struct!.text),
    width: cdktf.numberToTerraform(struct!.width),
    x_pos: cdktf.numberToTerraform(struct!.xPos),
    y_pos: cdktf.numberToTerraform(struct!.yPos),
  }
}


export function dashboardGroupTextPanelToHclTerraform(struct?: DashboardGroupTextPanel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
    text: {
      value: cdktf.stringToHclTerraform(struct!.text),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    width: {
      value: cdktf.numberToHclTerraform(struct!.width),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    x_pos: {
      value: cdktf.numberToHclTerraform(struct!.xPos),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    y_pos: {
      value: cdktf.numberToHclTerraform(struct!.yPos),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardGroupTextPanelOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardGroupTextPanel | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    if (this._width !== undefined) {
      hasAnyValues = true;
      internalValueResult.width = this._width;
    }
    if (this._xPos !== undefined) {
      hasAnyValues = true;
      internalValueResult.xPos = this._xPos;
    }
    if (this._yPos !== undefined) {
      hasAnyValues = true;
      internalValueResult.yPos = this._yPos;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardGroupTextPanel | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._height = undefined;
      this._name = undefined;
      this._text = undefined;
      this._width = undefined;
      this._xPos = undefined;
      this._yPos = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._height = value.height;
      this._name = value.name;
      this._text = value.text;
      this._width = value.width;
      this._xPos = value.xPos;
      this._yPos = value.yPos;
    }
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

  // height - computed: false, optional: true, required: false
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // text - computed: false, optional: false, required: true
  private _text?: string; 
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string) {
    this._text = value;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
  }

  // width - computed: false, optional: true, required: false
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

  // x_pos - computed: false, optional: true, required: false
  private _xPos?: number; 
  public get xPos() {
    return this.getNumberAttribute('x_pos');
  }
  public set xPos(value: number) {
    this._xPos = value;
  }
  public resetXPos() {
    this._xPos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xPosInput() {
    return this._xPos;
  }

  // y_pos - computed: false, optional: true, required: false
  private _yPos?: number; 
  public get yPos() {
    return this.getNumberAttribute('y_pos');
  }
  public set yPos(value: number) {
    this._yPos = value;
  }
  public resetYPos() {
    this._yPos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yPosInput() {
    return this._yPos;
  }
}

export class DashboardGroupTextPanelList extends cdktf.ComplexList {
  public internalValue? : DashboardGroupTextPanel[] | cdktf.IResolvable

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
  public get(index: number): DashboardGroupTextPanelOutputReference {
    return new DashboardGroupTextPanelOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardGroup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/dashboard#rank Dashboard#rank}
  */
  readonly rank: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/dashboard#title Dashboard#title}
  */
  readonly title?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/dashboard#visibility_type Dashboard#visibility_type}
  */
  readonly visibilityType: string;
  /**
  * alerts_list_panel block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/dashboard#alerts_list_panel Dashboard#alerts_list_panel}
  */
  readonly alertsListPanel?: DashboardGroupAlertsListPanel[] | cdktf.IResolvable;
  /**
  * chart block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/dashboard#chart Dashboard#chart}
  */
  readonly chart?: DashboardGroupChart[] | cdktf.IResolvable;
  /**
  * service_health_panel block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/dashboard#service_health_panel Dashboard#service_health_panel}
  */
  readonly serviceHealthPanel?: DashboardGroupServiceHealthPanel[] | cdktf.IResolvable;
  /**
  * text_panel block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/dashboard#text_panel Dashboard#text_panel}
  */
  readonly textPanel?: DashboardGroupTextPanel[] | cdktf.IResolvable;
}

export function dashboardGroupToTerraform(struct?: DashboardGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rank: cdktf.numberToTerraform(struct!.rank),
    title: cdktf.stringToTerraform(struct!.title),
    visibility_type: cdktf.stringToTerraform(struct!.visibilityType),
    alerts_list_panel: cdktf.listMapper(dashboardGroupAlertsListPanelToTerraform, true)(struct!.alertsListPanel),
    chart: cdktf.listMapper(dashboardGroupChartToTerraform, true)(struct!.chart),
    service_health_panel: cdktf.listMapper(dashboardGroupServiceHealthPanelToTerraform, true)(struct!.serviceHealthPanel),
    text_panel: cdktf.listMapper(dashboardGroupTextPanelToTerraform, true)(struct!.textPanel),
  }
}


export function dashboardGroupToHclTerraform(struct?: DashboardGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rank: {
      value: cdktf.numberToHclTerraform(struct!.rank),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    visibility_type: {
      value: cdktf.stringToHclTerraform(struct!.visibilityType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    alerts_list_panel: {
      value: cdktf.listMapperHcl(dashboardGroupAlertsListPanelToHclTerraform, true)(struct!.alertsListPanel),
      isBlock: true,
      type: "set",
      storageClassType: "DashboardGroupAlertsListPanelList",
    },
    chart: {
      value: cdktf.listMapperHcl(dashboardGroupChartToHclTerraform, true)(struct!.chart),
      isBlock: true,
      type: "set",
      storageClassType: "DashboardGroupChartList",
    },
    service_health_panel: {
      value: cdktf.listMapperHcl(dashboardGroupServiceHealthPanelToHclTerraform, true)(struct!.serviceHealthPanel),
      isBlock: true,
      type: "set",
      storageClassType: "DashboardGroupServiceHealthPanelList",
    },
    text_panel: {
      value: cdktf.listMapperHcl(dashboardGroupTextPanelToHclTerraform, true)(struct!.textPanel),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardGroupTextPanelList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rank !== undefined) {
      hasAnyValues = true;
      internalValueResult.rank = this._rank;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._visibilityType !== undefined) {
      hasAnyValues = true;
      internalValueResult.visibilityType = this._visibilityType;
    }
    if (this._alertsListPanel?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertsListPanel = this._alertsListPanel?.internalValue;
    }
    if (this._chart?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.chart = this._chart?.internalValue;
    }
    if (this._serviceHealthPanel?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceHealthPanel = this._serviceHealthPanel?.internalValue;
    }
    if (this._textPanel?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.textPanel = this._textPanel?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._rank = undefined;
      this._title = undefined;
      this._visibilityType = undefined;
      this._alertsListPanel.internalValue = undefined;
      this._chart.internalValue = undefined;
      this._serviceHealthPanel.internalValue = undefined;
      this._textPanel.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._rank = value.rank;
      this._title = value.title;
      this._visibilityType = value.visibilityType;
      this._alertsListPanel.internalValue = value.alertsListPanel;
      this._chart.internalValue = value.chart;
      this._serviceHealthPanel.internalValue = value.serviceHealthPanel;
      this._textPanel.internalValue = value.textPanel;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // rank - computed: false, optional: false, required: true
  private _rank?: number; 
  public get rank() {
    return this.getNumberAttribute('rank');
  }
  public set rank(value: number) {
    this._rank = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rankInput() {
    return this._rank;
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

  // visibility_type - computed: false, optional: false, required: true
  private _visibilityType?: string; 
  public get visibilityType() {
    return this.getStringAttribute('visibility_type');
  }
  public set visibilityType(value: string) {
    this._visibilityType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityTypeInput() {
    return this._visibilityType;
  }

  // alerts_list_panel - computed: false, optional: true, required: false
  private _alertsListPanel = new DashboardGroupAlertsListPanelList(this, "alerts_list_panel", true);
  public get alertsListPanel() {
    return this._alertsListPanel;
  }
  public putAlertsListPanel(value: DashboardGroupAlertsListPanel[] | cdktf.IResolvable) {
    this._alertsListPanel.internalValue = value;
  }
  public resetAlertsListPanel() {
    this._alertsListPanel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertsListPanelInput() {
    return this._alertsListPanel.internalValue;
  }

  // chart - computed: false, optional: true, required: false
  private _chart = new DashboardGroupChartList(this, "chart", true);
  public get chart() {
    return this._chart;
  }
  public putChart(value: DashboardGroupChart[] | cdktf.IResolvable) {
    this._chart.internalValue = value;
  }
  public resetChart() {
    this._chart.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chartInput() {
    return this._chart.internalValue;
  }

  // service_health_panel - computed: false, optional: true, required: false
  private _serviceHealthPanel = new DashboardGroupServiceHealthPanelList(this, "service_health_panel", true);
  public get serviceHealthPanel() {
    return this._serviceHealthPanel;
  }
  public putServiceHealthPanel(value: DashboardGroupServiceHealthPanel[] | cdktf.IResolvable) {
    this._serviceHealthPanel.internalValue = value;
  }
  public resetServiceHealthPanel() {
    this._serviceHealthPanel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceHealthPanelInput() {
    return this._serviceHealthPanel.internalValue;
  }

  // text_panel - computed: false, optional: true, required: false
  private _textPanel = new DashboardGroupTextPanelList(this, "text_panel", false);
  public get textPanel() {
    return this._textPanel;
  }
  public putTextPanel(value: DashboardGroupTextPanel[] | cdktf.IResolvable) {
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

export class DashboardGroupList extends cdktf.ComplexList {
  public internalValue? : DashboardGroup[] | cdktf.IResolvable

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
  public get(index: number): DashboardGroupOutputReference {
    return new DashboardGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardLabel {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/dashboard#key Dashboard#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/dashboard#value Dashboard#value}
  */
  readonly value: string;
}

export function dashboardLabelToTerraform(struct?: DashboardLabel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dashboardLabelToHclTerraform(struct?: DashboardLabel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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

export class DashboardLabelOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardLabel | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardLabel | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: false, required: true
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

export class DashboardLabelList extends cdktf.ComplexList {
  public internalValue? : DashboardLabel[] | cdktf.IResolvable

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
  public get(index: number): DashboardLabelOutputReference {
    return new DashboardLabelOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardTemplateVariable {
  /**
  * One or more values to set the template variable to by default (if none are provided, defaults to all possible values)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/dashboard#default_values Dashboard#default_values}
  */
  readonly defaultValues: string[];
  /**
  * Unique (per dashboard) name for template variable, beginning with a letter or underscore and only containing letters, numbers, and underscores
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/dashboard#name Dashboard#name}
  */
  readonly name: string;
  /**
  * Attribute key used as source for suggested template variable values appearing in Lightstep UI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/dashboard#suggestion_attribute_key Dashboard#suggestion_attribute_key}
  */
  readonly suggestionAttributeKey: string;
}

export function dashboardTemplateVariableToTerraform(struct?: DashboardTemplateVariable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.defaultValues),
    name: cdktf.stringToTerraform(struct!.name),
    suggestion_attribute_key: cdktf.stringToTerraform(struct!.suggestionAttributeKey),
  }
}


export function dashboardTemplateVariableToHclTerraform(struct?: DashboardTemplateVariable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.defaultValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    suggestion_attribute_key: {
      value: cdktf.stringToHclTerraform(struct!.suggestionAttributeKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardTemplateVariableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardTemplateVariable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValues = this._defaultValues;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._suggestionAttributeKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.suggestionAttributeKey = this._suggestionAttributeKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardTemplateVariable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultValues = undefined;
      this._name = undefined;
      this._suggestionAttributeKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultValues = value.defaultValues;
      this._name = value.name;
      this._suggestionAttributeKey = value.suggestionAttributeKey;
    }
  }

  // default_values - computed: false, optional: false, required: true
  private _defaultValues?: string[]; 
  public get defaultValues() {
    return this.getListAttribute('default_values');
  }
  public set defaultValues(value: string[]) {
    this._defaultValues = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValuesInput() {
    return this._defaultValues;
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

  // suggestion_attribute_key - computed: false, optional: false, required: true
  private _suggestionAttributeKey?: string; 
  public get suggestionAttributeKey() {
    return this.getStringAttribute('suggestion_attribute_key');
  }
  public set suggestionAttributeKey(value: string) {
    this._suggestionAttributeKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get suggestionAttributeKeyInput() {
    return this._suggestionAttributeKey;
  }
}

export class DashboardTemplateVariableList extends cdktf.ComplexList {
  public internalValue? : DashboardTemplateVariable[] | cdktf.IResolvable

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
  public get(index: number): DashboardTemplateVariableOutputReference {
    return new DashboardTemplateVariableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWorkflowLink {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/dashboard#name Dashboard#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/dashboard#url Dashboard#url}
  */
  readonly url: string;
}

export function dashboardWorkflowLinkToTerraform(struct?: DashboardWorkflowLink | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function dashboardWorkflowLinkToHclTerraform(struct?: DashboardWorkflowLink | cdktf.IResolvable): any {
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

export class DashboardWorkflowLinkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardWorkflowLink | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWorkflowLink | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._url = value.url;
    }
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

export class DashboardWorkflowLinkList extends cdktf.ComplexList {
  public internalValue? : DashboardWorkflowLink[] | cdktf.IResolvable

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
  public get(index: number): DashboardWorkflowLinkOutputReference {
    return new DashboardWorkflowLinkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/dashboard lightstep_dashboard}
*/
export class Dashboard extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "lightstep_dashboard";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Dashboard resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Dashboard to import
  * @param importFromId The id of the existing Dashboard that should be imported. Refer to the {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/dashboard#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Dashboard to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "lightstep_dashboard", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/dashboard lightstep_dashboard} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DashboardConfig
  */
  public constructor(scope: Construct, id: string, config: DashboardConfig) {
    super(scope, id, {
      terraformResourceType: 'lightstep_dashboard',
      terraformGeneratorMetadata: {
        providerName: 'lightstep',
        providerVersion: '1.98.2',
        providerVersionConstraint: '1.98.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dashboardDescription = config.dashboardDescription;
    this._dashboardName = config.dashboardName;
    this._eventQueryIds = config.eventQueryIds;
    this._id = config.id;
    this._projectName = config.projectName;
    this._chart.internalValue = config.chart;
    this._group.internalValue = config.group;
    this._label.internalValue = config.label;
    this._templateVariable.internalValue = config.templateVariable;
    this._workflowLink.internalValue = config.workflowLink;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dashboard_description - computed: false, optional: true, required: false
  private _dashboardDescription?: string; 
  public get dashboardDescription() {
    return this.getStringAttribute('dashboard_description');
  }
  public set dashboardDescription(value: string) {
    this._dashboardDescription = value;
  }
  public resetDashboardDescription() {
    this._dashboardDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dashboardDescriptionInput() {
    return this._dashboardDescription;
  }

  // dashboard_name - computed: false, optional: false, required: true
  private _dashboardName?: string; 
  public get dashboardName() {
    return this.getStringAttribute('dashboard_name');
  }
  public set dashboardName(value: string) {
    this._dashboardName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dashboardNameInput() {
    return this._dashboardName;
  }

  // event_query_ids - computed: false, optional: true, required: false
  private _eventQueryIds?: string[]; 
  public get eventQueryIds() {
    return cdktf.Fn.tolist(this.getListAttribute('event_query_ids'));
  }
  public set eventQueryIds(value: string[]) {
    this._eventQueryIds = value;
  }
  public resetEventQueryIds() {
    this._eventQueryIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventQueryIdsInput() {
    return this._eventQueryIds;
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

  // project_name - computed: false, optional: false, required: true
  private _projectName?: string; 
  public get projectName() {
    return this.getStringAttribute('project_name');
  }
  public set projectName(value: string) {
    this._projectName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectNameInput() {
    return this._projectName;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // chart - computed: false, optional: true, required: false
  private _chart = new DashboardChartList(this, "chart", true);
  public get chart() {
    return this._chart;
  }
  public putChart(value: DashboardChart[] | cdktf.IResolvable) {
    this._chart.internalValue = value;
  }
  public resetChart() {
    this._chart.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chartInput() {
    return this._chart.internalValue;
  }

  // group - computed: false, optional: true, required: false
  private _group = new DashboardGroupList(this, "group", true);
  public get group() {
    return this._group;
  }
  public putGroup(value: DashboardGroup[] | cdktf.IResolvable) {
    this._group.internalValue = value;
  }
  public resetGroup() {
    this._group.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group.internalValue;
  }

  // label - computed: false, optional: true, required: false
  private _label = new DashboardLabelList(this, "label", true);
  public get label() {
    return this._label;
  }
  public putLabel(value: DashboardLabel[] | cdktf.IResolvable) {
    this._label.internalValue = value;
  }
  public resetLabel() {
    this._label.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label.internalValue;
  }

  // template_variable - computed: false, optional: true, required: false
  private _templateVariable = new DashboardTemplateVariableList(this, "template_variable", true);
  public get templateVariable() {
    return this._templateVariable;
  }
  public putTemplateVariable(value: DashboardTemplateVariable[] | cdktf.IResolvable) {
    this._templateVariable.internalValue = value;
  }
  public resetTemplateVariable() {
    this._templateVariable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateVariableInput() {
    return this._templateVariable.internalValue;
  }

  // workflow_link - computed: false, optional: true, required: false
  private _workflowLink = new DashboardWorkflowLinkList(this, "workflow_link", false);
  public get workflowLink() {
    return this._workflowLink;
  }
  public putWorkflowLink(value: DashboardWorkflowLink[] | cdktf.IResolvable) {
    this._workflowLink.internalValue = value;
  }
  public resetWorkflowLink() {
    this._workflowLink.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workflowLinkInput() {
    return this._workflowLink.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dashboard_description: cdktf.stringToTerraform(this._dashboardDescription),
      dashboard_name: cdktf.stringToTerraform(this._dashboardName),
      event_query_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._eventQueryIds),
      id: cdktf.stringToTerraform(this._id),
      project_name: cdktf.stringToTerraform(this._projectName),
      chart: cdktf.listMapper(dashboardChartToTerraform, true)(this._chart.internalValue),
      group: cdktf.listMapper(dashboardGroupToTerraform, true)(this._group.internalValue),
      label: cdktf.listMapper(dashboardLabelToTerraform, true)(this._label.internalValue),
      template_variable: cdktf.listMapper(dashboardTemplateVariableToTerraform, true)(this._templateVariable.internalValue),
      workflow_link: cdktf.listMapper(dashboardWorkflowLinkToTerraform, true)(this._workflowLink.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dashboard_description: {
        value: cdktf.stringToHclTerraform(this._dashboardDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dashboard_name: {
        value: cdktf.stringToHclTerraform(this._dashboardName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      event_query_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._eventQueryIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_name: {
        value: cdktf.stringToHclTerraform(this._projectName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      chart: {
        value: cdktf.listMapperHcl(dashboardChartToHclTerraform, true)(this._chart.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DashboardChartList",
      },
      group: {
        value: cdktf.listMapperHcl(dashboardGroupToHclTerraform, true)(this._group.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DashboardGroupList",
      },
      label: {
        value: cdktf.listMapperHcl(dashboardLabelToHclTerraform, true)(this._label.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DashboardLabelList",
      },
      template_variable: {
        value: cdktf.listMapperHcl(dashboardTemplateVariableToHclTerraform, true)(this._templateVariable.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DashboardTemplateVariableList",
      },
      workflow_link: {
        value: cdktf.listMapperHcl(dashboardWorkflowLinkToHclTerraform, true)(this._workflowLink.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DashboardWorkflowLinkList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
