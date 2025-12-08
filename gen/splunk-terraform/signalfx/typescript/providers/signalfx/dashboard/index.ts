// https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/dashboard
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DashboardConfig extends cdktf.TerraformMetaArguments {
  /**
  * Team IDs that have write access to this dashboard
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/dashboard#authorized_writer_teams Dashboard#authorized_writer_teams}
  */
  readonly authorizedWriterTeams?: string[];
  /**
  * User IDs that have write access to this dashboard
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/dashboard#authorized_writer_users Dashboard#authorized_writer_users}
  */
  readonly authorizedWriterUsers?: string[];
  /**
  * Specifies the chart data display resolution for charts in this dashboard. Value can be one of "default", "low", "high", or "highest". default by default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/dashboard#charts_resolution Dashboard#charts_resolution}
  */
  readonly chartsResolution?: string;
  /**
  * The ID of the dashboard group that contains the dashboard. If an ID is not provided during creation, the dashboard will be placed in a newly created dashboard group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/dashboard#dashboard_group Dashboard#dashboard_group}
  */
  readonly dashboardGroup: string;
  /**
  * Description of the dashboard (Optional)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/dashboard#description Dashboard#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/dashboard#discovery_options_query Dashboard#discovery_options_query}
  */
  readonly discoveryOptionsQuery?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/dashboard#discovery_options_selectors Dashboard#discovery_options_selectors}
  */
  readonly discoveryOptionsSelectors?: string[];
  /**
  * Seconds since epoch to end the visualization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/dashboard#end_time Dashboard#end_time}
  */
  readonly endTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/dashboard#id Dashboard#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the dashboard
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/dashboard#name Dashboard#name}
  */
  readonly name: string;
  /**
  * Seconds since epoch to start the visualization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/dashboard#start_time Dashboard#start_time}
  */
  readonly startTime?: number;
  /**
  * Tags of the dashboard
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/dashboard#tags Dashboard#tags}
  */
  readonly tags?: string[];
  /**
  * From when to display data. Splunk Observability Cloud time syntax (e.g. -5m, -1h)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/dashboard#time_range Dashboard#time_range}
  */
  readonly timeRange?: string;
  /**
  * chart block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/dashboard#chart Dashboard#chart}
  */
  readonly chart?: DashboardChart[] | cdktf.IResolvable;
  /**
  * column block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/dashboard#column Dashboard#column}
  */
  readonly column?: DashboardColumn[] | cdktf.IResolvable;
  /**
  * event_overlay block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/dashboard#event_overlay Dashboard#event_overlay}
  */
  readonly eventOverlay?: DashboardEventOverlay[] | cdktf.IResolvable;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/dashboard#filter Dashboard#filter}
  */
  readonly filter?: DashboardFilter[] | cdktf.IResolvable;
  /**
  * grid block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/dashboard#grid Dashboard#grid}
  */
  readonly grid?: DashboardGrid[] | cdktf.IResolvable;
  /**
  * permissions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/dashboard#permissions Dashboard#permissions}
  */
  readonly permissions?: DashboardPermissions;
  /**
  * selected_event_overlay block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/dashboard#selected_event_overlay Dashboard#selected_event_overlay}
  */
  readonly selectedEventOverlay?: DashboardSelectedEventOverlay[] | cdktf.IResolvable;
  /**
  * variable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/dashboard#variable Dashboard#variable}
  */
  readonly variable?: DashboardVariable[] | cdktf.IResolvable;
}
export interface DashboardChart {
  /**
  * ID of the chart to display
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/dashboard#chart_id Dashboard#chart_id}
  */
  readonly chartId: string;
  /**
  * The column to show the chart in (zero-based); this value always represents the leftmost column of the chart. (between 0 and 11)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/dashboard#column Dashboard#column}
  */
  readonly column?: number;
  /**
  * How many rows the chart should take up. (greater than or equal to 1)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/dashboard#height Dashboard#height}
  */
  readonly height?: number;
  /**
  * The row to show the chart in (zero-based); if height > 1, this value represents the topmost row of the chart. (greater than or equal to 0)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/dashboard#row Dashboard#row}
  */
  readonly row?: number;
  /**
  * How many columns (out of a total of 12, one-based) the chart should take up. (between 1 and 12)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/dashboard#width Dashboard#width}
  */
  readonly width?: number;
}

export function dashboardChartToTerraform(struct?: DashboardChart | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    chart_id: cdktf.stringToTerraform(struct!.chartId),
    column: cdktf.numberToTerraform(struct!.column),
    height: cdktf.numberToTerraform(struct!.height),
    row: cdktf.numberToTerraform(struct!.row),
    width: cdktf.numberToTerraform(struct!.width),
  }
}


export function dashboardChartToHclTerraform(struct?: DashboardChart | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    chart_id: {
      value: cdktf.stringToHclTerraform(struct!.chartId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    column: {
      value: cdktf.numberToHclTerraform(struct!.column),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    height: {
      value: cdktf.numberToHclTerraform(struct!.height),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    row: {
      value: cdktf.numberToHclTerraform(struct!.row),
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
    if (this._chartId !== undefined) {
      hasAnyValues = true;
      internalValueResult.chartId = this._chartId;
    }
    if (this._column !== undefined) {
      hasAnyValues = true;
      internalValueResult.column = this._column;
    }
    if (this._height !== undefined) {
      hasAnyValues = true;
      internalValueResult.height = this._height;
    }
    if (this._row !== undefined) {
      hasAnyValues = true;
      internalValueResult.row = this._row;
    }
    if (this._width !== undefined) {
      hasAnyValues = true;
      internalValueResult.width = this._width;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardChart | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._chartId = undefined;
      this._column = undefined;
      this._height = undefined;
      this._row = undefined;
      this._width = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._chartId = value.chartId;
      this._column = value.column;
      this._height = value.height;
      this._row = value.row;
      this._width = value.width;
    }
  }

  // chart_id - computed: false, optional: false, required: true
  private _chartId?: string; 
  public get chartId() {
    return this.getStringAttribute('chart_id');
  }
  public set chartId(value: string) {
    this._chartId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get chartIdInput() {
    return this._chartId;
  }

  // column - computed: false, optional: true, required: false
  private _column?: number; 
  public get column() {
    return this.getNumberAttribute('column');
  }
  public set column(value: number) {
    this._column = value;
  }
  public resetColumn() {
    this._column = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column;
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

  // row - computed: false, optional: true, required: false
  private _row?: number; 
  public get row() {
    return this.getNumberAttribute('row');
  }
  public set row(value: number) {
    this._row = value;
  }
  public resetRow() {
    this._row = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rowInput() {
    return this._row;
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
export interface DashboardColumn {
  /**
  * Charts to use for the column
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/dashboard#chart_ids Dashboard#chart_ids}
  */
  readonly chartIds: string[];
  /**
  * The column to show the chart in (zero-based); this value always represents the leftmost column of the chart. (between 0 and 11)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/dashboard#column Dashboard#column}
  */
  readonly column?: number;
  /**
  * How many rows each chart should take up. (greater than or equal to 1)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/dashboard#height Dashboard#height}
  */
  readonly height?: number;
  /**
  * Number of columns (out of a total of 12) each chart should take up. (between 1 and 12)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/dashboard#width Dashboard#width}
  */
  readonly width?: number;
}

export function dashboardColumnToTerraform(struct?: DashboardColumn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    chart_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.chartIds),
    column: cdktf.numberToTerraform(struct!.column),
    height: cdktf.numberToTerraform(struct!.height),
    width: cdktf.numberToTerraform(struct!.width),
  }
}


export function dashboardColumnToHclTerraform(struct?: DashboardColumn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    chart_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.chartIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    column: {
      value: cdktf.numberToHclTerraform(struct!.column),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardColumnOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardColumn | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._chartIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.chartIds = this._chartIds;
    }
    if (this._column !== undefined) {
      hasAnyValues = true;
      internalValueResult.column = this._column;
    }
    if (this._height !== undefined) {
      hasAnyValues = true;
      internalValueResult.height = this._height;
    }
    if (this._width !== undefined) {
      hasAnyValues = true;
      internalValueResult.width = this._width;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardColumn | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._chartIds = undefined;
      this._column = undefined;
      this._height = undefined;
      this._width = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._chartIds = value.chartIds;
      this._column = value.column;
      this._height = value.height;
      this._width = value.width;
    }
  }

  // chart_ids - computed: false, optional: false, required: true
  private _chartIds?: string[]; 
  public get chartIds() {
    return this.getListAttribute('chart_ids');
  }
  public set chartIds(value: string[]) {
    this._chartIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get chartIdsInput() {
    return this._chartIds;
  }

  // column - computed: false, optional: true, required: false
  private _column?: number; 
  public get column() {
    return this.getNumberAttribute('column');
  }
  public set column(value: number) {
    this._column = value;
  }
  public resetColumn() {
    this._column = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column;
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
}

export class DashboardColumnList extends cdktf.ComplexList {
  public internalValue? : DashboardColumn[] | cdktf.IResolvable

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
  public get(index: number): DashboardColumnOutputReference {
    return new DashboardColumnOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardEventOverlaySource {
  /**
  * (false by default) Whether this filter should be a "not" filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/dashboard#negated Dashboard#negated}
  */
  readonly negated?: boolean | cdktf.IResolvable;
  /**
  * A metric time series dimension or property name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/dashboard#property Dashboard#property}
  */
  readonly property: string;
  /**
  * List of strings (which will be treated as an OR filter on the property)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/dashboard#values Dashboard#values}
  */
  readonly values: string[];
}

export function dashboardEventOverlaySourceToTerraform(struct?: DashboardEventOverlaySource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negated: cdktf.booleanToTerraform(struct!.negated),
    property: cdktf.stringToTerraform(struct!.property),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dashboardEventOverlaySourceToHclTerraform(struct?: DashboardEventOverlaySource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negated: {
      value: cdktf.booleanToHclTerraform(struct!.negated),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    property: {
      value: cdktf.stringToHclTerraform(struct!.property),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardEventOverlaySourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardEventOverlaySource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negated !== undefined) {
      hasAnyValues = true;
      internalValueResult.negated = this._negated;
    }
    if (this._property !== undefined) {
      hasAnyValues = true;
      internalValueResult.property = this._property;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardEventOverlaySource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negated = undefined;
      this._property = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negated = value.negated;
      this._property = value.property;
      this._values = value.values;
    }
  }

  // negated - computed: false, optional: true, required: false
  private _negated?: boolean | cdktf.IResolvable; 
  public get negated() {
    return this.getBooleanAttribute('negated');
  }
  public set negated(value: boolean | cdktf.IResolvable) {
    this._negated = value;
  }
  public resetNegated() {
    this._negated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negatedInput() {
    return this._negated;
  }

  // property - computed: false, optional: false, required: true
  private _property?: string; 
  public get property() {
    return this.getStringAttribute('property');
  }
  public set property(value: string) {
    this._property = value;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyInput() {
    return this._property;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DashboardEventOverlaySourceList extends cdktf.ComplexList {
  public internalValue? : DashboardEventOverlaySource[] | cdktf.IResolvable

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
  public get(index: number): DashboardEventOverlaySourceOutputReference {
    return new DashboardEventOverlaySourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardEventOverlay {
  /**
  * The color to use. Must be one of gray, blue, azure, navy, brown, orange, yellow, magenta, red, pink, violet, purple, lilac, emerald, chartreuse, yellowgreen.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/dashboard#color Dashboard#color}
  */
  readonly color?: string;
  /**
  * The text displaying in the dropdown menu used to select this event overlay as an active overlay for the dashboard.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/dashboard#label Dashboard#label}
  */
  readonly label?: string;
  /**
  * (false by default) Whether a vertical line should be displayed in the plot at the time the event occurs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/dashboard#line Dashboard#line}
  */
  readonly line?: boolean | cdktf.IResolvable;
  /**
  * Search term used to define events
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/dashboard#signal Dashboard#signal}
  */
  readonly signal: string;
  /**
  * Source for this event's data. Can be "eventTimeSeries" (default) or "detectorEvents".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/dashboard#type Dashboard#type}
  */
  readonly type?: string;
  /**
  * source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/dashboard#source Dashboard#source}
  */
  readonly source?: DashboardEventOverlaySource[] | cdktf.IResolvable;
}

export function dashboardEventOverlayToTerraform(struct?: DashboardEventOverlay | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktf.stringToTerraform(struct!.color),
    label: cdktf.stringToTerraform(struct!.label),
    line: cdktf.booleanToTerraform(struct!.line),
    signal: cdktf.stringToTerraform(struct!.signal),
    type: cdktf.stringToTerraform(struct!.type),
    source: cdktf.listMapper(dashboardEventOverlaySourceToTerraform, true)(struct!.source),
  }
}


export function dashboardEventOverlayToHclTerraform(struct?: DashboardEventOverlay | cdktf.IResolvable): any {
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
    line: {
      value: cdktf.booleanToHclTerraform(struct!.line),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    signal: {
      value: cdktf.stringToHclTerraform(struct!.signal),
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
    source: {
      value: cdktf.listMapperHcl(dashboardEventOverlaySourceToHclTerraform, true)(struct!.source),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardEventOverlaySourceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardEventOverlayOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardEventOverlay | cdktf.IResolvable | undefined {
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
    if (this._line !== undefined) {
      hasAnyValues = true;
      internalValueResult.line = this._line;
    }
    if (this._signal !== undefined) {
      hasAnyValues = true;
      internalValueResult.signal = this._signal;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._source?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardEventOverlay | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._color = undefined;
      this._label = undefined;
      this._line = undefined;
      this._signal = undefined;
      this._type = undefined;
      this._source.internalValue = undefined;
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
      this._line = value.line;
      this._signal = value.signal;
      this._type = value.type;
      this._source.internalValue = value.source;
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

  // line - computed: false, optional: true, required: false
  private _line?: boolean | cdktf.IResolvable; 
  public get line() {
    return this.getBooleanAttribute('line');
  }
  public set line(value: boolean | cdktf.IResolvable) {
    this._line = value;
  }
  public resetLine() {
    this._line = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lineInput() {
    return this._line;
  }

  // signal - computed: false, optional: false, required: true
  private _signal?: string; 
  public get signal() {
    return this.getStringAttribute('signal');
  }
  public set signal(value: string) {
    this._signal = value;
  }
  // Temporarily expose input value. Use with caution.
  public get signalInput() {
    return this._signal;
  }

  // type - computed: false, optional: true, required: false
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

  // source - computed: false, optional: true, required: false
  private _source = new DashboardEventOverlaySourceList(this, "source", false);
  public get source() {
    return this._source;
  }
  public putSource(value: DashboardEventOverlaySource[] | cdktf.IResolvable) {
    this._source.internalValue = value;
  }
  public resetSource() {
    this._source.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }
}

export class DashboardEventOverlayList extends cdktf.ComplexList {
  public internalValue? : DashboardEventOverlay[] | cdktf.IResolvable

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
  public get(index: number): DashboardEventOverlayOutputReference {
    return new DashboardEventOverlayOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardFilter {
  /**
  * If true, this filter will also match data that does not have the specified property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/dashboard#apply_if_exist Dashboard#apply_if_exist}
  */
  readonly applyIfExist?: boolean | cdktf.IResolvable;
  /**
  * (false by default) Whether this filter should be a "not" filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/dashboard#negated Dashboard#negated}
  */
  readonly negated?: boolean | cdktf.IResolvable;
  /**
  * A metric time series dimension or property name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/dashboard#property Dashboard#property}
  */
  readonly property: string;
  /**
  * List of strings (which will be treated as an OR filter on the property)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/dashboard#values Dashboard#values}
  */
  readonly values: string[];
}

export function dashboardFilterToTerraform(struct?: DashboardFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    apply_if_exist: cdktf.booleanToTerraform(struct!.applyIfExist),
    negated: cdktf.booleanToTerraform(struct!.negated),
    property: cdktf.stringToTerraform(struct!.property),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dashboardFilterToHclTerraform(struct?: DashboardFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    apply_if_exist: {
      value: cdktf.booleanToHclTerraform(struct!.applyIfExist),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    negated: {
      value: cdktf.booleanToHclTerraform(struct!.negated),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    property: {
      value: cdktf.stringToHclTerraform(struct!.property),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applyIfExist !== undefined) {
      hasAnyValues = true;
      internalValueResult.applyIfExist = this._applyIfExist;
    }
    if (this._negated !== undefined) {
      hasAnyValues = true;
      internalValueResult.negated = this._negated;
    }
    if (this._property !== undefined) {
      hasAnyValues = true;
      internalValueResult.property = this._property;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._applyIfExist = undefined;
      this._negated = undefined;
      this._property = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._applyIfExist = value.applyIfExist;
      this._negated = value.negated;
      this._property = value.property;
      this._values = value.values;
    }
  }

  // apply_if_exist - computed: false, optional: true, required: false
  private _applyIfExist?: boolean | cdktf.IResolvable; 
  public get applyIfExist() {
    return this.getBooleanAttribute('apply_if_exist');
  }
  public set applyIfExist(value: boolean | cdktf.IResolvable) {
    this._applyIfExist = value;
  }
  public resetApplyIfExist() {
    this._applyIfExist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applyIfExistInput() {
    return this._applyIfExist;
  }

  // negated - computed: false, optional: true, required: false
  private _negated?: boolean | cdktf.IResolvable; 
  public get negated() {
    return this.getBooleanAttribute('negated');
  }
  public set negated(value: boolean | cdktf.IResolvable) {
    this._negated = value;
  }
  public resetNegated() {
    this._negated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negatedInput() {
    return this._negated;
  }

  // property - computed: false, optional: false, required: true
  private _property?: string; 
  public get property() {
    return this.getStringAttribute('property');
  }
  public set property(value: string) {
    this._property = value;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyInput() {
    return this._property;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DashboardFilterList extends cdktf.ComplexList {
  public internalValue? : DashboardFilter[] | cdktf.IResolvable

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
  public get(index: number): DashboardFilterOutputReference {
    return new DashboardFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardGrid {
  /**
  * Charts to use for the grid
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/dashboard#chart_ids Dashboard#chart_ids}
  */
  readonly chartIds: string[];
  /**
  * How many rows each chart should take up. (greater than or equal to 1)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/dashboard#height Dashboard#height}
  */
  readonly height?: number;
  /**
  * Number of columns (out of a total of 12, one-based) each chart should take up. (between 1 and 12)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/dashboard#width Dashboard#width}
  */
  readonly width?: number;
}

export function dashboardGridToTerraform(struct?: DashboardGrid | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    chart_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.chartIds),
    height: cdktf.numberToTerraform(struct!.height),
    width: cdktf.numberToTerraform(struct!.width),
  }
}


export function dashboardGridToHclTerraform(struct?: DashboardGrid | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    chart_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.chartIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardGridOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardGrid | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._chartIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.chartIds = this._chartIds;
    }
    if (this._height !== undefined) {
      hasAnyValues = true;
      internalValueResult.height = this._height;
    }
    if (this._width !== undefined) {
      hasAnyValues = true;
      internalValueResult.width = this._width;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardGrid | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._chartIds = undefined;
      this._height = undefined;
      this._width = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._chartIds = value.chartIds;
      this._height = value.height;
      this._width = value.width;
    }
  }

  // chart_ids - computed: false, optional: false, required: true
  private _chartIds?: string[]; 
  public get chartIds() {
    return this.getListAttribute('chart_ids');
  }
  public set chartIds(value: string[]) {
    this._chartIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get chartIdsInput() {
    return this._chartIds;
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
}

export class DashboardGridList extends cdktf.ComplexList {
  public internalValue? : DashboardGrid[] | cdktf.IResolvable

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
  public get(index: number): DashboardGridOutputReference {
    return new DashboardGridOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardPermissionsAcl {
  /**
  * Actions level, possible values: READ, WRITE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/dashboard#actions Dashboard#actions}
  */
  readonly actions?: string[];
  /**
  * ID of the principal with access
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/dashboard#principal_id Dashboard#principal_id}
  */
  readonly principalId: string;
  /**
  * Type of principal, possible values: ORG, TEAM, USER
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/dashboard#principal_type Dashboard#principal_type}
  */
  readonly principalType: string;
}

export function dashboardPermissionsAclToTerraform(struct?: DashboardPermissionsAcl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    actions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.actions),
    principal_id: cdktf.stringToTerraform(struct!.principalId),
    principal_type: cdktf.stringToTerraform(struct!.principalType),
  }
}


export function dashboardPermissionsAclToHclTerraform(struct?: DashboardPermissionsAcl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    actions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.actions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    principal_id: {
      value: cdktf.stringToHclTerraform(struct!.principalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    principal_type: {
      value: cdktf.stringToHclTerraform(struct!.principalType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardPermissionsAclOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardPermissionsAcl | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actions !== undefined) {
      hasAnyValues = true;
      internalValueResult.actions = this._actions;
    }
    if (this._principalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.principalId = this._principalId;
    }
    if (this._principalType !== undefined) {
      hasAnyValues = true;
      internalValueResult.principalType = this._principalType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardPermissionsAcl | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actions = undefined;
      this._principalId = undefined;
      this._principalType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actions = value.actions;
      this._principalId = value.principalId;
      this._principalType = value.principalType;
    }
  }

  // actions - computed: false, optional: true, required: false
  private _actions?: string[]; 
  public get actions() {
    return cdktf.Fn.tolist(this.getListAttribute('actions'));
  }
  public set actions(value: string[]) {
    this._actions = value;
  }
  public resetActions() {
    this._actions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions;
  }

  // principal_id - computed: false, optional: false, required: true
  private _principalId?: string; 
  public get principalId() {
    return this.getStringAttribute('principal_id');
  }
  public set principalId(value: string) {
    this._principalId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get principalIdInput() {
    return this._principalId;
  }

  // principal_type - computed: false, optional: false, required: true
  private _principalType?: string; 
  public get principalType() {
    return this.getStringAttribute('principal_type');
  }
  public set principalType(value: string) {
    this._principalType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get principalTypeInput() {
    return this._principalType;
  }
}

export class DashboardPermissionsAclList extends cdktf.ComplexList {
  public internalValue? : DashboardPermissionsAcl[] | cdktf.IResolvable

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
  public get(index: number): DashboardPermissionsAclOutputReference {
    return new DashboardPermissionsAclOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardPermissions {
  /**
  * The ID of the dashboard group that this dashboard inherits permissions from
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/dashboard#parent Dashboard#parent}
  */
  readonly parent?: string;
  /**
  * acl block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/dashboard#acl Dashboard#acl}
  */
  readonly acl?: DashboardPermissionsAcl[] | cdktf.IResolvable;
}

export function dashboardPermissionsToTerraform(struct?: DashboardPermissionsOutputReference | DashboardPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    parent: cdktf.stringToTerraform(struct!.parent),
    acl: cdktf.listMapper(dashboardPermissionsAclToTerraform, true)(struct!.acl),
  }
}


export function dashboardPermissionsToHclTerraform(struct?: DashboardPermissionsOutputReference | DashboardPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    parent: {
      value: cdktf.stringToHclTerraform(struct!.parent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    acl: {
      value: cdktf.listMapperHcl(dashboardPermissionsAclToHclTerraform, true)(struct!.acl),
      isBlock: true,
      type: "set",
      storageClassType: "DashboardPermissionsAclList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardPermissionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardPermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parent !== undefined) {
      hasAnyValues = true;
      internalValueResult.parent = this._parent;
    }
    if (this._acl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.acl = this._acl?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardPermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._parent = undefined;
      this._acl.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._parent = value.parent;
      this._acl.internalValue = value.acl;
    }
  }

  // parent - computed: false, optional: true, required: false
  private _parent?: string; 
  public get parent() {
    return this.getStringAttribute('parent');
  }
  public set parent(value: string) {
    this._parent = value;
  }
  public resetParent() {
    this._parent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentInput() {
    return this._parent;
  }

  // acl - computed: false, optional: true, required: false
  private _acl = new DashboardPermissionsAclList(this, "acl", true);
  public get acl() {
    return this._acl;
  }
  public putAcl(value: DashboardPermissionsAcl[] | cdktf.IResolvable) {
    this._acl.internalValue = value;
  }
  public resetAcl() {
    this._acl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclInput() {
    return this._acl.internalValue;
  }
}
export interface DashboardSelectedEventOverlaySource {
  /**
  * (false by default) Whether this filter should be a "not" filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/dashboard#negated Dashboard#negated}
  */
  readonly negated?: boolean | cdktf.IResolvable;
  /**
  * A metric time series dimension or property name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/dashboard#property Dashboard#property}
  */
  readonly property: string;
  /**
  * List of strings (which will be treated as an OR filter on the property)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/dashboard#values Dashboard#values}
  */
  readonly values: string[];
}

export function dashboardSelectedEventOverlaySourceToTerraform(struct?: DashboardSelectedEventOverlaySource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negated: cdktf.booleanToTerraform(struct!.negated),
    property: cdktf.stringToTerraform(struct!.property),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dashboardSelectedEventOverlaySourceToHclTerraform(struct?: DashboardSelectedEventOverlaySource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negated: {
      value: cdktf.booleanToHclTerraform(struct!.negated),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    property: {
      value: cdktf.stringToHclTerraform(struct!.property),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardSelectedEventOverlaySourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardSelectedEventOverlaySource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negated !== undefined) {
      hasAnyValues = true;
      internalValueResult.negated = this._negated;
    }
    if (this._property !== undefined) {
      hasAnyValues = true;
      internalValueResult.property = this._property;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardSelectedEventOverlaySource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negated = undefined;
      this._property = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negated = value.negated;
      this._property = value.property;
      this._values = value.values;
    }
  }

  // negated - computed: false, optional: true, required: false
  private _negated?: boolean | cdktf.IResolvable; 
  public get negated() {
    return this.getBooleanAttribute('negated');
  }
  public set negated(value: boolean | cdktf.IResolvable) {
    this._negated = value;
  }
  public resetNegated() {
    this._negated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negatedInput() {
    return this._negated;
  }

  // property - computed: false, optional: false, required: true
  private _property?: string; 
  public get property() {
    return this.getStringAttribute('property');
  }
  public set property(value: string) {
    this._property = value;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyInput() {
    return this._property;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DashboardSelectedEventOverlaySourceList extends cdktf.ComplexList {
  public internalValue? : DashboardSelectedEventOverlaySource[] | cdktf.IResolvable

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
  public get(index: number): DashboardSelectedEventOverlaySourceOutputReference {
    return new DashboardSelectedEventOverlaySourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardSelectedEventOverlay {
  /**
  * Search term used to define events
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/dashboard#signal Dashboard#signal}
  */
  readonly signal: string;
  /**
  * Source for this event's data. Can be "eventTimeSeries" (default) or "detectorEvents".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/dashboard#type Dashboard#type}
  */
  readonly type?: string;
  /**
  * source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/dashboard#source Dashboard#source}
  */
  readonly source?: DashboardSelectedEventOverlaySource[] | cdktf.IResolvable;
}

export function dashboardSelectedEventOverlayToTerraform(struct?: DashboardSelectedEventOverlay | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    signal: cdktf.stringToTerraform(struct!.signal),
    type: cdktf.stringToTerraform(struct!.type),
    source: cdktf.listMapper(dashboardSelectedEventOverlaySourceToTerraform, true)(struct!.source),
  }
}


export function dashboardSelectedEventOverlayToHclTerraform(struct?: DashboardSelectedEventOverlay | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    signal: {
      value: cdktf.stringToHclTerraform(struct!.signal),
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
    source: {
      value: cdktf.listMapperHcl(dashboardSelectedEventOverlaySourceToHclTerraform, true)(struct!.source),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardSelectedEventOverlaySourceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardSelectedEventOverlayOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardSelectedEventOverlay | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._signal !== undefined) {
      hasAnyValues = true;
      internalValueResult.signal = this._signal;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._source?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardSelectedEventOverlay | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._signal = undefined;
      this._type = undefined;
      this._source.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._signal = value.signal;
      this._type = value.type;
      this._source.internalValue = value.source;
    }
  }

  // signal - computed: false, optional: false, required: true
  private _signal?: string; 
  public get signal() {
    return this.getStringAttribute('signal');
  }
  public set signal(value: string) {
    this._signal = value;
  }
  // Temporarily expose input value. Use with caution.
  public get signalInput() {
    return this._signal;
  }

  // type - computed: false, optional: true, required: false
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

  // source - computed: false, optional: true, required: false
  private _source = new DashboardSelectedEventOverlaySourceList(this, "source", false);
  public get source() {
    return this._source;
  }
  public putSource(value: DashboardSelectedEventOverlaySource[] | cdktf.IResolvable) {
    this._source.internalValue = value;
  }
  public resetSource() {
    this._source.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }
}

export class DashboardSelectedEventOverlayList extends cdktf.ComplexList {
  public internalValue? : DashboardSelectedEventOverlay[] | cdktf.IResolvable

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
  public get(index: number): DashboardSelectedEventOverlayOutputReference {
    return new DashboardSelectedEventOverlayOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardVariable {
  /**
  * An alias for the dashboard variable. This text will appear as the label for the dropdown field on the dashboard
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/dashboard#alias Dashboard#alias}
  */
  readonly alias: string;
  /**
  * If true, this variable will also match data that does not have the specified property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/dashboard#apply_if_exist Dashboard#apply_if_exist}
  */
  readonly applyIfExist?: boolean | cdktf.IResolvable;
  /**
  * Variable description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/dashboard#description Dashboard#description}
  */
  readonly description?: string;
  /**
  * A metric time series dimension or property name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/dashboard#property Dashboard#property}
  */
  readonly property: string;
  /**
  * If true, this variable will only apply to charts with a filter on the named property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/dashboard#replace_only Dashboard#replace_only}
  */
  readonly replaceOnly?: boolean | cdktf.IResolvable;
  /**
  * If true, this variable may only be set to the values listed in preferredSuggestions. and only these values will appear in autosuggestion menus. false by default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/dashboard#restricted_suggestions Dashboard#restricted_suggestions}
  */
  readonly restrictedSuggestions?: boolean | cdktf.IResolvable;
  /**
  * Determines whether a value is required for this variable (and therefore whether it will be possible to view this dashboard without this filter applied). false by default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/dashboard#value_required Dashboard#value_required}
  */
  readonly valueRequired?: boolean | cdktf.IResolvable;
  /**
  * List of strings (which will be treated as an OR filter on the property)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/dashboard#values Dashboard#values}
  */
  readonly values?: string[];
  /**
  * A list of strings of suggested values for this variable; these suggestions will receive priority when values are autosuggested for this variable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/dashboard#values_suggested Dashboard#values_suggested}
  */
  readonly valuesSuggested?: string[];
}

export function dashboardVariableToTerraform(struct?: DashboardVariable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alias: cdktf.stringToTerraform(struct!.alias),
    apply_if_exist: cdktf.booleanToTerraform(struct!.applyIfExist),
    description: cdktf.stringToTerraform(struct!.description),
    property: cdktf.stringToTerraform(struct!.property),
    replace_only: cdktf.booleanToTerraform(struct!.replaceOnly),
    restricted_suggestions: cdktf.booleanToTerraform(struct!.restrictedSuggestions),
    value_required: cdktf.booleanToTerraform(struct!.valueRequired),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
    values_suggested: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.valuesSuggested),
  }
}


export function dashboardVariableToHclTerraform(struct?: DashboardVariable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alias: {
      value: cdktf.stringToHclTerraform(struct!.alias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    apply_if_exist: {
      value: cdktf.booleanToHclTerraform(struct!.applyIfExist),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    property: {
      value: cdktf.stringToHclTerraform(struct!.property),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replace_only: {
      value: cdktf.booleanToHclTerraform(struct!.replaceOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    restricted_suggestions: {
      value: cdktf.booleanToHclTerraform(struct!.restrictedSuggestions),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    value_required: {
      value: cdktf.booleanToHclTerraform(struct!.valueRequired),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    values_suggested: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.valuesSuggested),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardVariableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardVariable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alias !== undefined) {
      hasAnyValues = true;
      internalValueResult.alias = this._alias;
    }
    if (this._applyIfExist !== undefined) {
      hasAnyValues = true;
      internalValueResult.applyIfExist = this._applyIfExist;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._property !== undefined) {
      hasAnyValues = true;
      internalValueResult.property = this._property;
    }
    if (this._replaceOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.replaceOnly = this._replaceOnly;
    }
    if (this._restrictedSuggestions !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictedSuggestions = this._restrictedSuggestions;
    }
    if (this._valueRequired !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueRequired = this._valueRequired;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    if (this._valuesSuggested !== undefined) {
      hasAnyValues = true;
      internalValueResult.valuesSuggested = this._valuesSuggested;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardVariable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alias = undefined;
      this._applyIfExist = undefined;
      this._description = undefined;
      this._property = undefined;
      this._replaceOnly = undefined;
      this._restrictedSuggestions = undefined;
      this._valueRequired = undefined;
      this._values = undefined;
      this._valuesSuggested = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alias = value.alias;
      this._applyIfExist = value.applyIfExist;
      this._description = value.description;
      this._property = value.property;
      this._replaceOnly = value.replaceOnly;
      this._restrictedSuggestions = value.restrictedSuggestions;
      this._valueRequired = value.valueRequired;
      this._values = value.values;
      this._valuesSuggested = value.valuesSuggested;
    }
  }

  // alias - computed: false, optional: false, required: true
  private _alias?: string; 
  public get alias() {
    return this.getStringAttribute('alias');
  }
  public set alias(value: string) {
    this._alias = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // apply_if_exist - computed: false, optional: true, required: false
  private _applyIfExist?: boolean | cdktf.IResolvable; 
  public get applyIfExist() {
    return this.getBooleanAttribute('apply_if_exist');
  }
  public set applyIfExist(value: boolean | cdktf.IResolvable) {
    this._applyIfExist = value;
  }
  public resetApplyIfExist() {
    this._applyIfExist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applyIfExistInput() {
    return this._applyIfExist;
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

  // property - computed: false, optional: false, required: true
  private _property?: string; 
  public get property() {
    return this.getStringAttribute('property');
  }
  public set property(value: string) {
    this._property = value;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyInput() {
    return this._property;
  }

  // replace_only - computed: false, optional: true, required: false
  private _replaceOnly?: boolean | cdktf.IResolvable; 
  public get replaceOnly() {
    return this.getBooleanAttribute('replace_only');
  }
  public set replaceOnly(value: boolean | cdktf.IResolvable) {
    this._replaceOnly = value;
  }
  public resetReplaceOnly() {
    this._replaceOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceOnlyInput() {
    return this._replaceOnly;
  }

  // restricted_suggestions - computed: false, optional: true, required: false
  private _restrictedSuggestions?: boolean | cdktf.IResolvable; 
  public get restrictedSuggestions() {
    return this.getBooleanAttribute('restricted_suggestions');
  }
  public set restrictedSuggestions(value: boolean | cdktf.IResolvable) {
    this._restrictedSuggestions = value;
  }
  public resetRestrictedSuggestions() {
    this._restrictedSuggestions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictedSuggestionsInput() {
    return this._restrictedSuggestions;
  }

  // value_required - computed: false, optional: true, required: false
  private _valueRequired?: boolean | cdktf.IResolvable; 
  public get valueRequired() {
    return this.getBooleanAttribute('value_required');
  }
  public set valueRequired(value: boolean | cdktf.IResolvable) {
    this._valueRequired = value;
  }
  public resetValueRequired() {
    this._valueRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueRequiredInput() {
    return this._valueRequired;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }

  // values_suggested - computed: false, optional: true, required: false
  private _valuesSuggested?: string[]; 
  public get valuesSuggested() {
    return cdktf.Fn.tolist(this.getListAttribute('values_suggested'));
  }
  public set valuesSuggested(value: string[]) {
    this._valuesSuggested = value;
  }
  public resetValuesSuggested() {
    this._valuesSuggested = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesSuggestedInput() {
    return this._valuesSuggested;
  }
}

export class DashboardVariableList extends cdktf.ComplexList {
  public internalValue? : DashboardVariable[] | cdktf.IResolvable

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
  public get(index: number): DashboardVariableOutputReference {
    return new DashboardVariableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/dashboard signalfx_dashboard}
*/
export class Dashboard extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "signalfx_dashboard";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Dashboard resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Dashboard to import
  * @param importFromId The id of the existing Dashboard that should be imported. Refer to the {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/dashboard#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Dashboard to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "signalfx_dashboard", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/dashboard signalfx_dashboard} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DashboardConfig
  */
  public constructor(scope: Construct, id: string, config: DashboardConfig) {
    super(scope, id, {
      terraformResourceType: 'signalfx_dashboard',
      terraformGeneratorMetadata: {
        providerName: 'signalfx',
        providerVersion: '9.23.0',
        providerVersionConstraint: '9.23.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authorizedWriterTeams = config.authorizedWriterTeams;
    this._authorizedWriterUsers = config.authorizedWriterUsers;
    this._chartsResolution = config.chartsResolution;
    this._dashboardGroup = config.dashboardGroup;
    this._description = config.description;
    this._discoveryOptionsQuery = config.discoveryOptionsQuery;
    this._discoveryOptionsSelectors = config.discoveryOptionsSelectors;
    this._endTime = config.endTime;
    this._id = config.id;
    this._name = config.name;
    this._startTime = config.startTime;
    this._tags = config.tags;
    this._timeRange = config.timeRange;
    this._chart.internalValue = config.chart;
    this._column.internalValue = config.column;
    this._eventOverlay.internalValue = config.eventOverlay;
    this._filter.internalValue = config.filter;
    this._grid.internalValue = config.grid;
    this._permissions.internalValue = config.permissions;
    this._selectedEventOverlay.internalValue = config.selectedEventOverlay;
    this._variable.internalValue = config.variable;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authorized_writer_teams - computed: false, optional: true, required: false
  private _authorizedWriterTeams?: string[]; 
  public get authorizedWriterTeams() {
    return cdktf.Fn.tolist(this.getListAttribute('authorized_writer_teams'));
  }
  public set authorizedWriterTeams(value: string[]) {
    this._authorizedWriterTeams = value;
  }
  public resetAuthorizedWriterTeams() {
    this._authorizedWriterTeams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizedWriterTeamsInput() {
    return this._authorizedWriterTeams;
  }

  // authorized_writer_users - computed: false, optional: true, required: false
  private _authorizedWriterUsers?: string[]; 
  public get authorizedWriterUsers() {
    return cdktf.Fn.tolist(this.getListAttribute('authorized_writer_users'));
  }
  public set authorizedWriterUsers(value: string[]) {
    this._authorizedWriterUsers = value;
  }
  public resetAuthorizedWriterUsers() {
    this._authorizedWriterUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizedWriterUsersInput() {
    return this._authorizedWriterUsers;
  }

  // charts_resolution - computed: false, optional: true, required: false
  private _chartsResolution?: string; 
  public get chartsResolution() {
    return this.getStringAttribute('charts_resolution');
  }
  public set chartsResolution(value: string) {
    this._chartsResolution = value;
  }
  public resetChartsResolution() {
    this._chartsResolution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chartsResolutionInput() {
    return this._chartsResolution;
  }

  // dashboard_group - computed: false, optional: false, required: true
  private _dashboardGroup?: string; 
  public get dashboardGroup() {
    return this.getStringAttribute('dashboard_group');
  }
  public set dashboardGroup(value: string) {
    this._dashboardGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dashboardGroupInput() {
    return this._dashboardGroup;
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

  // discovery_options_query - computed: false, optional: true, required: false
  private _discoveryOptionsQuery?: string; 
  public get discoveryOptionsQuery() {
    return this.getStringAttribute('discovery_options_query');
  }
  public set discoveryOptionsQuery(value: string) {
    this._discoveryOptionsQuery = value;
  }
  public resetDiscoveryOptionsQuery() {
    this._discoveryOptionsQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoveryOptionsQueryInput() {
    return this._discoveryOptionsQuery;
  }

  // discovery_options_selectors - computed: false, optional: true, required: false
  private _discoveryOptionsSelectors?: string[]; 
  public get discoveryOptionsSelectors() {
    return cdktf.Fn.tolist(this.getListAttribute('discovery_options_selectors'));
  }
  public set discoveryOptionsSelectors(value: string[]) {
    this._discoveryOptionsSelectors = value;
  }
  public resetDiscoveryOptionsSelectors() {
    this._discoveryOptionsSelectors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoveryOptionsSelectorsInput() {
    return this._discoveryOptionsSelectors;
  }

  // end_time - computed: false, optional: true, required: false
  private _endTime?: number; 
  public get endTime() {
    return this.getNumberAttribute('end_time');
  }
  public set endTime(value: number) {
    this._endTime = value;
  }
  public resetEndTime() {
    this._endTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
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

  // start_time - computed: false, optional: true, required: false
  private _startTime?: number; 
  public get startTime() {
    return this.getNumberAttribute('start_time');
  }
  public set startTime(value: number) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
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

  // time_range - computed: false, optional: true, required: false
  private _timeRange?: string; 
  public get timeRange() {
    return this.getStringAttribute('time_range');
  }
  public set timeRange(value: string) {
    this._timeRange = value;
  }
  public resetTimeRange() {
    this._timeRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeRangeInput() {
    return this._timeRange;
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
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

  // column - computed: false, optional: true, required: false
  private _column = new DashboardColumnList(this, "column", false);
  public get column() {
    return this._column;
  }
  public putColumn(value: DashboardColumn[] | cdktf.IResolvable) {
    this._column.internalValue = value;
  }
  public resetColumn() {
    this._column.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column.internalValue;
  }

  // event_overlay - computed: false, optional: true, required: false
  private _eventOverlay = new DashboardEventOverlayList(this, "event_overlay", false);
  public get eventOverlay() {
    return this._eventOverlay;
  }
  public putEventOverlay(value: DashboardEventOverlay[] | cdktf.IResolvable) {
    this._eventOverlay.internalValue = value;
  }
  public resetEventOverlay() {
    this._eventOverlay.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventOverlayInput() {
    return this._eventOverlay.internalValue;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DashboardFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DashboardFilter[] | cdktf.IResolvable) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // grid - computed: false, optional: true, required: false
  private _grid = new DashboardGridList(this, "grid", false);
  public get grid() {
    return this._grid;
  }
  public putGrid(value: DashboardGrid[] | cdktf.IResolvable) {
    this._grid.internalValue = value;
  }
  public resetGrid() {
    this._grid.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gridInput() {
    return this._grid.internalValue;
  }

  // permissions - computed: false, optional: true, required: false
  private _permissions = new DashboardPermissionsOutputReference(this, "permissions");
  public get permissions() {
    return this._permissions;
  }
  public putPermissions(value: DashboardPermissions) {
    this._permissions.internalValue = value;
  }
  public resetPermissions() {
    this._permissions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions.internalValue;
  }

  // selected_event_overlay - computed: false, optional: true, required: false
  private _selectedEventOverlay = new DashboardSelectedEventOverlayList(this, "selected_event_overlay", false);
  public get selectedEventOverlay() {
    return this._selectedEventOverlay;
  }
  public putSelectedEventOverlay(value: DashboardSelectedEventOverlay[] | cdktf.IResolvable) {
    this._selectedEventOverlay.internalValue = value;
  }
  public resetSelectedEventOverlay() {
    this._selectedEventOverlay.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectedEventOverlayInput() {
    return this._selectedEventOverlay.internalValue;
  }

  // variable - computed: false, optional: true, required: false
  private _variable = new DashboardVariableList(this, "variable", true);
  public get variable() {
    return this._variable;
  }
  public putVariable(value: DashboardVariable[] | cdktf.IResolvable) {
    this._variable.internalValue = value;
  }
  public resetVariable() {
    this._variable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variableInput() {
    return this._variable.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      authorized_writer_teams: cdktf.listMapper(cdktf.stringToTerraform, false)(this._authorizedWriterTeams),
      authorized_writer_users: cdktf.listMapper(cdktf.stringToTerraform, false)(this._authorizedWriterUsers),
      charts_resolution: cdktf.stringToTerraform(this._chartsResolution),
      dashboard_group: cdktf.stringToTerraform(this._dashboardGroup),
      description: cdktf.stringToTerraform(this._description),
      discovery_options_query: cdktf.stringToTerraform(this._discoveryOptionsQuery),
      discovery_options_selectors: cdktf.listMapper(cdktf.stringToTerraform, false)(this._discoveryOptionsSelectors),
      end_time: cdktf.numberToTerraform(this._endTime),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      start_time: cdktf.numberToTerraform(this._startTime),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      time_range: cdktf.stringToTerraform(this._timeRange),
      chart: cdktf.listMapper(dashboardChartToTerraform, true)(this._chart.internalValue),
      column: cdktf.listMapper(dashboardColumnToTerraform, true)(this._column.internalValue),
      event_overlay: cdktf.listMapper(dashboardEventOverlayToTerraform, true)(this._eventOverlay.internalValue),
      filter: cdktf.listMapper(dashboardFilterToTerraform, true)(this._filter.internalValue),
      grid: cdktf.listMapper(dashboardGridToTerraform, true)(this._grid.internalValue),
      permissions: dashboardPermissionsToTerraform(this._permissions.internalValue),
      selected_event_overlay: cdktf.listMapper(dashboardSelectedEventOverlayToTerraform, true)(this._selectedEventOverlay.internalValue),
      variable: cdktf.listMapper(dashboardVariableToTerraform, true)(this._variable.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authorized_writer_teams: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._authorizedWriterTeams),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      authorized_writer_users: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._authorizedWriterUsers),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      charts_resolution: {
        value: cdktf.stringToHclTerraform(this._chartsResolution),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dashboard_group: {
        value: cdktf.stringToHclTerraform(this._dashboardGroup),
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
      discovery_options_query: {
        value: cdktf.stringToHclTerraform(this._discoveryOptionsQuery),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      discovery_options_selectors: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._discoveryOptionsSelectors),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      end_time: {
        value: cdktf.numberToHclTerraform(this._endTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      start_time: {
        value: cdktf.numberToHclTerraform(this._startTime),
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
      time_range: {
        value: cdktf.stringToHclTerraform(this._timeRange),
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
      column: {
        value: cdktf.listMapperHcl(dashboardColumnToHclTerraform, true)(this._column.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DashboardColumnList",
      },
      event_overlay: {
        value: cdktf.listMapperHcl(dashboardEventOverlayToHclTerraform, true)(this._eventOverlay.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DashboardEventOverlayList",
      },
      filter: {
        value: cdktf.listMapperHcl(dashboardFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DashboardFilterList",
      },
      grid: {
        value: cdktf.listMapperHcl(dashboardGridToHclTerraform, true)(this._grid.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DashboardGridList",
      },
      permissions: {
        value: dashboardPermissionsToHclTerraform(this._permissions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DashboardPermissionsList",
      },
      selected_event_overlay: {
        value: cdktf.listMapperHcl(dashboardSelectedEventOverlayToHclTerraform, true)(this._selectedEventOverlay.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DashboardSelectedEventOverlayList",
      },
      variable: {
        value: cdktf.listMapperHcl(dashboardVariableToHclTerraform, true)(this._variable.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DashboardVariableList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
