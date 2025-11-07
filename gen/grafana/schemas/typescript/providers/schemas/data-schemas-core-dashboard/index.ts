// https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/core_dashboard
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSchemasCoreDashboardConfig extends cdktf.TerraformMetaArguments {
  /**
  * Contains the list of annotations that are associated with the dashboard.
  * Annotations are used to overlay event markers and overlay event tags on graphs.
  * Grafana comes with a native annotation store and the ability to add annotation events directly from the graph panel or via the HTTP API.
  * See https://grafana.com/docs/grafana/latest/dashboards/build-dashboards/annotate-visualizations/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/core_dashboard#annotations DataSchemasCoreDashboard#annotations}
  */
  readonly annotations?: DataSchemasCoreDashboardAnnotations;
  /**
  * Description of dashboard.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/core_dashboard#description DataSchemasCoreDashboard#description}
  */
  readonly description?: string;
  /**
  * Whether a dashboard is editable or not. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/core_dashboard#editable DataSchemasCoreDashboard#editable}
  */
  readonly editable?: boolean | cdktf.IResolvable;
  /**
  * The month that the fiscal year starts on.  0 = January, 11 = December. Defaults to 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/core_dashboard#fiscal_year_start_month DataSchemasCoreDashboard#fiscal_year_start_month}
  */
  readonly fiscalYearStartMonth?: number;
  /**
  * ID of a dashboard imported from the https://grafana.com/grafana/dashboards/ portal
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/core_dashboard#gnet_id DataSchemasCoreDashboard#gnet_id}
  */
  readonly gnetId?: string;
  /**
  * Configuration of dashboard cursor sync behavior.
  * Accepted values are 0 (sync turned off), 1 (shared crosshair), 2 (shared crosshair and tooltip). Defaults to 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/core_dashboard#graph_tooltip DataSchemasCoreDashboard#graph_tooltip}
  */
  readonly graphTooltip?: number;
  /**
  * Links with references to other dashboards or external websites.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/core_dashboard#links DataSchemasCoreDashboard#links}
  */
  readonly links?: DataSchemasCoreDashboardLinks[] | cdktf.IResolvable;
  /**
  * When set to true, the dashboard will redraw panels at an interval matching the pixel width.
  * This will keep data "moving left" regardless of the query refresh rate. This setting helps
  * avoid dashboards presenting stale live data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/core_dashboard#live_now DataSchemasCoreDashboard#live_now}
  */
  readonly liveNow?: boolean | cdktf.IResolvable;
  /**
  * List of dashboard panels
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/core_dashboard#panels DataSchemasCoreDashboard#panels}
  */
  readonly panels?: string[];
  /**
  * Refresh rate of dashboard. Represented via interval string, e.g. "5s", "1m", "1h", "1d".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/core_dashboard#refresh DataSchemasCoreDashboard#refresh}
  */
  readonly refresh?: string;
  /**
  * This property should only be used in dashboards defined by plugins.  It is a quick check
  * to see if the version has changed since the last time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/core_dashboard#revision DataSchemasCoreDashboard#revision}
  */
  readonly revision?: number;
  /**
  * Version of the JSON schema, incremented each time a Grafana update brings
  * changes to said schema. Defaults to 36.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/core_dashboard#schema_version DataSchemasCoreDashboard#schema_version}
  */
  readonly schemaVersion?: number;
  /**
  * Snapshot options. They are present only if the dashboard is a snapshot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/core_dashboard#snapshot DataSchemasCoreDashboard#snapshot}
  */
  readonly snapshot?: DataSchemasCoreDashboardSnapshot;
  /**
  * Theme of dashboard.
  * Default value: dark. Defaults to "dark".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/core_dashboard#style DataSchemasCoreDashboard#style}
  */
  readonly style?: string;
  /**
  * Tags associated with dashboard.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/core_dashboard#tags DataSchemasCoreDashboard#tags}
  */
  readonly tags?: string[];
  /**
  * Configured template variables
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/core_dashboard#templating DataSchemasCoreDashboard#templating}
  */
  readonly templating?: DataSchemasCoreDashboardTemplating;
  /**
  * Time range for dashboard.
  * Accepted values are relative time strings like {from: 'now-6h', to: 'now'} or absolute time strings like {from: '2020-07-10T08:00:00.000Z', to: '2020-07-10T14:00:00.000Z'}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/core_dashboard#time DataSchemasCoreDashboard#time}
  */
  readonly time?: DataSchemasCoreDashboardTime;
  /**
  * Configuration of the time picker shown at the top of a dashboard.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/core_dashboard#timepicker DataSchemasCoreDashboard#timepicker}
  */
  readonly timepicker?: DataSchemasCoreDashboardTimepicker;
  /**
  * Timezone of dashboard. Accepted values are IANA TZDB zone ID or "browser" or "utc". Defaults to "browser".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/core_dashboard#timezone DataSchemasCoreDashboard#timezone}
  */
  readonly timezone?: string;
  /**
  * Title of dashboard.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/core_dashboard#title DataSchemasCoreDashboard#title}
  */
  readonly title?: string;
  /**
  * Unique dashboard identifier that can be generated by anyone. string (8-40)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/core_dashboard#uid DataSchemasCoreDashboard#uid}
  */
  readonly uid?: string;
  /**
  * Version of the dashboard, incremented each time the dashboard is updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/core_dashboard#version DataSchemasCoreDashboard#version}
  */
  readonly version?: number;
  /**
  * Day when the week starts. Expressed by the name of the day in lowercase, e.g. "monday".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/core_dashboard#week_start DataSchemasCoreDashboard#week_start}
  */
  readonly weekStart?: string;
}
export interface DataSchemasCoreDashboardAnnotationsListDatasource {
  /**
  * The plugin type-id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/core_dashboard#type DataSchemasCoreDashboard#type}
  */
  readonly type?: string;
  /**
  * Specific datasource instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/core_dashboard#uid DataSchemasCoreDashboard#uid}
  */
  readonly uid?: string;
}

export function dataSchemasCoreDashboardAnnotationsListDatasourceToTerraform(struct?: DataSchemasCoreDashboardAnnotationsListDatasource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    uid: cdktf.stringToTerraform(struct!.uid),
  }
}


export function dataSchemasCoreDashboardAnnotationsListDatasourceToHclTerraform(struct?: DataSchemasCoreDashboardAnnotationsListDatasource | cdktf.IResolvable): any {
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

export class DataSchemasCoreDashboardAnnotationsListDatasourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasCoreDashboardAnnotationsListDatasource | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataSchemasCoreDashboardAnnotationsListDatasource | cdktf.IResolvable | undefined) {
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
export interface DataSchemasCoreDashboardAnnotationsListFilter {
  /**
  * Should the specified panels be included or excluded. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/core_dashboard#exclude DataSchemasCoreDashboard#exclude}
  */
  readonly exclude?: boolean | cdktf.IResolvable;
  /**
  * Panel IDs that should be included or excluded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/core_dashboard#ids DataSchemasCoreDashboard#ids}
  */
  readonly ids?: number[];
}

export function dataSchemasCoreDashboardAnnotationsListFilterToTerraform(struct?: DataSchemasCoreDashboardAnnotationsListFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude: cdktf.booleanToTerraform(struct!.exclude),
    ids: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.ids),
  }
}


export function dataSchemasCoreDashboardAnnotationsListFilterToHclTerraform(struct?: DataSchemasCoreDashboardAnnotationsListFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude: {
      value: cdktf.booleanToHclTerraform(struct!.exclude),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ids: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.ids),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSchemasCoreDashboardAnnotationsListFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasCoreDashboardAnnotationsListFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exclude !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclude = this._exclude;
    }
    if (this._ids !== undefined) {
      hasAnyValues = true;
      internalValueResult.ids = this._ids;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSchemasCoreDashboardAnnotationsListFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exclude = undefined;
      this._ids = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exclude = value.exclude;
      this._ids = value.ids;
    }
  }

  // exclude - computed: true, optional: true, required: false
  private _exclude?: boolean | cdktf.IResolvable; 
  public get exclude() {
    return this.getBooleanAttribute('exclude');
  }
  public set exclude(value: boolean | cdktf.IResolvable) {
    this._exclude = value;
  }
  public resetExclude() {
    this._exclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeInput() {
    return this._exclude;
  }

  // ids - computed: true, optional: true, required: false
  private _ids?: number[]; 
  public get ids() {
    return this.getNumberListAttribute('ids');
  }
  public set ids(value: number[]) {
    this._ids = value;
  }
  public resetIds() {
    this._ids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idsInput() {
    return this._ids;
  }
}
export interface DataSchemasCoreDashboardAnnotationsListTarget {
  /**
  * Only required/valid for the grafana datasource...
  * but code+tests is already depending on it so hard to change
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/core_dashboard#limit DataSchemasCoreDashboard#limit}
  */
  readonly limit: number;
  /**
  * Only required/valid for the grafana datasource...
  * but code+tests is already depending on it so hard to change
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/core_dashboard#match_any DataSchemasCoreDashboard#match_any}
  */
  readonly matchAny: boolean | cdktf.IResolvable;
  /**
  * Only required/valid for the grafana datasource...
  * but code+tests is already depending on it so hard to change
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/core_dashboard#tags DataSchemasCoreDashboard#tags}
  */
  readonly tags?: string[];
  /**
  * Only required/valid for the grafana datasource...
  * but code+tests is already depending on it so hard to change
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/core_dashboard#type DataSchemasCoreDashboard#type}
  */
  readonly type: string;
}

export function dataSchemasCoreDashboardAnnotationsListTargetToTerraform(struct?: DataSchemasCoreDashboardAnnotationsListTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limit: cdktf.numberToTerraform(struct!.limit),
    match_any: cdktf.booleanToTerraform(struct!.matchAny),
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataSchemasCoreDashboardAnnotationsListTargetToHclTerraform(struct?: DataSchemasCoreDashboardAnnotationsListTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    limit: {
      value: cdktf.numberToHclTerraform(struct!.limit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    match_any: {
      value: cdktf.booleanToHclTerraform(struct!.matchAny),
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

export class DataSchemasCoreDashboardAnnotationsListTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasCoreDashboardAnnotationsListTarget | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    if (this._matchAny !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchAny = this._matchAny;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSchemasCoreDashboardAnnotationsListTarget | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._limit = undefined;
      this._matchAny = undefined;
      this._tags = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._limit = value.limit;
      this._matchAny = value.matchAny;
      this._tags = value.tags;
      this._type = value.type;
    }
  }

  // limit - computed: true, optional: false, required: true
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // match_any - computed: true, optional: false, required: true
  private _matchAny?: boolean | cdktf.IResolvable; 
  public get matchAny() {
    return this.getBooleanAttribute('match_any');
  }
  public set matchAny(value: boolean | cdktf.IResolvable) {
    this._matchAny = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchAnyInput() {
    return this._matchAny;
  }

  // tags - computed: true, optional: true, required: false
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
export interface DataSchemasCoreDashboardAnnotationsListStruct {
  /**
  * Datasource where the annotations data is
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/core_dashboard#datasource DataSchemasCoreDashboard#datasource}
  */
  readonly datasource?: DataSchemasCoreDashboardAnnotationsListDatasource;
  /**
  * When enabled the annotation query is issued with every dashboard refresh. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/core_dashboard#enable DataSchemasCoreDashboard#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Filters to apply when fetching annotations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/core_dashboard#filter DataSchemasCoreDashboard#filter}
  */
  readonly filter?: DataSchemasCoreDashboardAnnotationsListFilter;
  /**
  * Annotation queries can be toggled on or off at the top of the dashboard.
  * When hide is true, the toggle is not shown in the dashboard. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/core_dashboard#hide DataSchemasCoreDashboard#hide}
  */
  readonly hide?: boolean | cdktf.IResolvable;
  /**
  * Color to use for the annotation event markers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/core_dashboard#icon_color DataSchemasCoreDashboard#icon_color}
  */
  readonly iconColor: string;
  /**
  * Name of annotation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/core_dashboard#name DataSchemasCoreDashboard#name}
  */
  readonly name: string;
  /**
  * TODO.. this should just be a normal query target
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/core_dashboard#target DataSchemasCoreDashboard#target}
  */
  readonly target?: DataSchemasCoreDashboardAnnotationsListTarget;
  /**
  * TODO -- this should not exist here, it is based on the --grafana-- datasource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/core_dashboard#type DataSchemasCoreDashboard#type}
  */
  readonly type?: string;
}

export function dataSchemasCoreDashboardAnnotationsListStructToTerraform(struct?: DataSchemasCoreDashboardAnnotationsListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    datasource: dataSchemasCoreDashboardAnnotationsListDatasourceToTerraform(struct!.datasource),
    enable: cdktf.booleanToTerraform(struct!.enable),
    filter: dataSchemasCoreDashboardAnnotationsListFilterToTerraform(struct!.filter),
    hide: cdktf.booleanToTerraform(struct!.hide),
    icon_color: cdktf.stringToTerraform(struct!.iconColor),
    name: cdktf.stringToTerraform(struct!.name),
    target: dataSchemasCoreDashboardAnnotationsListTargetToTerraform(struct!.target),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataSchemasCoreDashboardAnnotationsListStructToHclTerraform(struct?: DataSchemasCoreDashboardAnnotationsListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    datasource: {
      value: dataSchemasCoreDashboardAnnotationsListDatasourceToHclTerraform(struct!.datasource),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasCoreDashboardAnnotationsListDatasource",
    },
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    filter: {
      value: dataSchemasCoreDashboardAnnotationsListFilterToHclTerraform(struct!.filter),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasCoreDashboardAnnotationsListFilter",
    },
    hide: {
      value: cdktf.booleanToHclTerraform(struct!.hide),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    icon_color: {
      value: cdktf.stringToHclTerraform(struct!.iconColor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target: {
      value: dataSchemasCoreDashboardAnnotationsListTargetToHclTerraform(struct!.target),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasCoreDashboardAnnotationsListTarget",
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

export class DataSchemasCoreDashboardAnnotationsListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSchemasCoreDashboardAnnotationsListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datasource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasource = this._datasource?.internalValue;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._filter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter?.internalValue;
    }
    if (this._hide !== undefined) {
      hasAnyValues = true;
      internalValueResult.hide = this._hide;
    }
    if (this._iconColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.iconColor = this._iconColor;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._target?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSchemasCoreDashboardAnnotationsListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._datasource.internalValue = undefined;
      this._enable = undefined;
      this._filter.internalValue = undefined;
      this._hide = undefined;
      this._iconColor = undefined;
      this._name = undefined;
      this._target.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._datasource.internalValue = value.datasource;
      this._enable = value.enable;
      this._filter.internalValue = value.filter;
      this._hide = value.hide;
      this._iconColor = value.iconColor;
      this._name = value.name;
      this._target.internalValue = value.target;
      this._type = value.type;
    }
  }

  // datasource - computed: true, optional: true, required: false
  private _datasource = new DataSchemasCoreDashboardAnnotationsListDatasourceOutputReference(this, "datasource");
  public get datasource() {
    return this._datasource;
  }
  public putDatasource(value: DataSchemasCoreDashboardAnnotationsListDatasource) {
    this._datasource.internalValue = value;
  }
  public resetDatasource() {
    this._datasource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasourceInput() {
    return this._datasource.internalValue;
  }

  // enable - computed: true, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // filter - computed: true, optional: true, required: false
  private _filter = new DataSchemasCoreDashboardAnnotationsListFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataSchemasCoreDashboardAnnotationsListFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // hide - computed: true, optional: true, required: false
  private _hide?: boolean | cdktf.IResolvable; 
  public get hide() {
    return this.getBooleanAttribute('hide');
  }
  public set hide(value: boolean | cdktf.IResolvable) {
    this._hide = value;
  }
  public resetHide() {
    this._hide = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hideInput() {
    return this._hide;
  }

  // icon_color - computed: true, optional: false, required: true
  private _iconColor?: string; 
  public get iconColor() {
    return this.getStringAttribute('icon_color');
  }
  public set iconColor(value: string) {
    this._iconColor = value;
  }
  // Temporarily expose input value. Use with caution.
  public get iconColorInput() {
    return this._iconColor;
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

  // target - computed: true, optional: true, required: false
  private _target = new DataSchemasCoreDashboardAnnotationsListTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: DataSchemasCoreDashboardAnnotationsListTarget) {
    this._target.internalValue = value;
  }
  public resetTarget() {
    this._target.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
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
}

export class DataSchemasCoreDashboardAnnotationsListStructList extends cdktf.ComplexList {
  public internalValue? : DataSchemasCoreDashboardAnnotationsListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataSchemasCoreDashboardAnnotationsListStructOutputReference {
    return new DataSchemasCoreDashboardAnnotationsListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSchemasCoreDashboardAnnotations {
  /**
  * List of annotations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/core_dashboard#list DataSchemasCoreDashboard#list}
  */
  readonly list?: DataSchemasCoreDashboardAnnotationsListStruct[] | cdktf.IResolvable;
}

export function dataSchemasCoreDashboardAnnotationsToTerraform(struct?: DataSchemasCoreDashboardAnnotations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    list: cdktf.listMapper(dataSchemasCoreDashboardAnnotationsListStructToTerraform, false)(struct!.list),
  }
}


export function dataSchemasCoreDashboardAnnotationsToHclTerraform(struct?: DataSchemasCoreDashboardAnnotations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    list: {
      value: cdktf.listMapperHcl(dataSchemasCoreDashboardAnnotationsListStructToHclTerraform, false)(struct!.list),
      isBlock: true,
      type: "list",
      storageClassType: "DataSchemasCoreDashboardAnnotationsListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSchemasCoreDashboardAnnotationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasCoreDashboardAnnotations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._list?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.list = this._list?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSchemasCoreDashboardAnnotations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._list.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._list.internalValue = value.list;
    }
  }

  // list - computed: true, optional: true, required: false
  private _list = new DataSchemasCoreDashboardAnnotationsListStructList(this, "list", false);
  public get list() {
    return this._list;
  }
  public putList(value: DataSchemasCoreDashboardAnnotationsListStruct[] | cdktf.IResolvable) {
    this._list.internalValue = value;
  }
  public resetList() {
    this._list.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listInput() {
    return this._list.internalValue;
  }
}
export interface DataSchemasCoreDashboardLinks {
  /**
  * If true, all dashboards links will be displayed in a dropdown. If false, all dashboards links will be displayed side by side. Only valid if the type is dashboards. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/core_dashboard#as_dropdown DataSchemasCoreDashboard#as_dropdown}
  */
  readonly asDropdown?: boolean | cdktf.IResolvable;
  /**
  * Icon name to be displayed with the link
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/core_dashboard#icon DataSchemasCoreDashboard#icon}
  */
  readonly icon: string;
  /**
  * If true, includes current template variables values in the link as query params. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/core_dashboard#include_vars DataSchemasCoreDashboard#include_vars}
  */
  readonly includeVars?: boolean | cdktf.IResolvable;
  /**
  * If true, includes current time range in the link as query params. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/core_dashboard#keep_time DataSchemasCoreDashboard#keep_time}
  */
  readonly keepTime?: boolean | cdktf.IResolvable;
  /**
  * List of tags to limit the linked dashboards. If empty, all dashboards will be displayed. Only valid if the type is dashboards
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/core_dashboard#tags DataSchemasCoreDashboard#tags}
  */
  readonly tags?: string[];
  /**
  * If true, the link will be opened in a new tab. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/core_dashboard#target_blank DataSchemasCoreDashboard#target_blank}
  */
  readonly targetBlank?: boolean | cdktf.IResolvable;
  /**
  * Title to display with the link
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/core_dashboard#title DataSchemasCoreDashboard#title}
  */
  readonly title: string;
  /**
  * Tooltip to display when the user hovers their mouse over it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/core_dashboard#tooltip DataSchemasCoreDashboard#tooltip}
  */
  readonly tooltip: string;
  /**
  * Link type. Accepted values are dashboards (to refer to another dashboard) and link (to refer to an external resource)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/core_dashboard#type DataSchemasCoreDashboard#type}
  */
  readonly type: string;
  /**
  * Link URL. Only required/valid if the type is link
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/core_dashboard#url DataSchemasCoreDashboard#url}
  */
  readonly url: string;
}

export function dataSchemasCoreDashboardLinksToTerraform(struct?: DataSchemasCoreDashboardLinks | cdktf.IResolvable): any {
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


export function dataSchemasCoreDashboardLinksToHclTerraform(struct?: DataSchemasCoreDashboardLinks | cdktf.IResolvable): any {
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

export class DataSchemasCoreDashboardLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSchemasCoreDashboardLinks | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataSchemasCoreDashboardLinks | cdktf.IResolvable | undefined) {
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

export class DataSchemasCoreDashboardLinksList extends cdktf.ComplexList {
  public internalValue? : DataSchemasCoreDashboardLinks[] | cdktf.IResolvable

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
  public get(index: number): DataSchemasCoreDashboardLinksOutputReference {
    return new DataSchemasCoreDashboardLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSchemasCoreDashboardSnapshot {
  /**
  * Time when the snapshot was created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/core_dashboard#created DataSchemasCoreDashboard#created}
  */
  readonly created: string;
  /**
  * Time when the snapshot expires, default is never to expire
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/core_dashboard#expires DataSchemasCoreDashboard#expires}
  */
  readonly expires: string;
  /**
  * Is the snapshot saved in an external grafana instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/core_dashboard#external DataSchemasCoreDashboard#external}
  */
  readonly external: boolean | cdktf.IResolvable;
  /**
  * external url, if snapshot was shared in external grafana instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/core_dashboard#external_url DataSchemasCoreDashboard#external_url}
  */
  readonly externalUrl: string;
  /**
  * Optional, defined the unique key of the snapshot, required if external is true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/core_dashboard#key DataSchemasCoreDashboard#key}
  */
  readonly key: string;
  /**
  * Optional, name of the snapshot
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/core_dashboard#name DataSchemasCoreDashboard#name}
  */
  readonly name: string;
  /**
  * org id of the snapshot
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/core_dashboard#org_id DataSchemasCoreDashboard#org_id}
  */
  readonly orgId: number;
  /**
  * last time when the snapshot was updated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/core_dashboard#updated DataSchemasCoreDashboard#updated}
  */
  readonly updated: string;
  /**
  * url of the snapshot, if snapshot was shared internally
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/core_dashboard#url DataSchemasCoreDashboard#url}
  */
  readonly url?: string;
  /**
  * user id of the snapshot creator
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/core_dashboard#user_id DataSchemasCoreDashboard#user_id}
  */
  readonly userId: number;
}

export function dataSchemasCoreDashboardSnapshotToTerraform(struct?: DataSchemasCoreDashboardSnapshot | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    created: cdktf.stringToTerraform(struct!.created),
    expires: cdktf.stringToTerraform(struct!.expires),
    external: cdktf.booleanToTerraform(struct!.external),
    external_url: cdktf.stringToTerraform(struct!.externalUrl),
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    org_id: cdktf.numberToTerraform(struct!.orgId),
    updated: cdktf.stringToTerraform(struct!.updated),
    url: cdktf.stringToTerraform(struct!.url),
    user_id: cdktf.numberToTerraform(struct!.userId),
  }
}


export function dataSchemasCoreDashboardSnapshotToHclTerraform(struct?: DataSchemasCoreDashboardSnapshot | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    created: {
      value: cdktf.stringToHclTerraform(struct!.created),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expires: {
      value: cdktf.stringToHclTerraform(struct!.expires),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external: {
      value: cdktf.booleanToHclTerraform(struct!.external),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    external_url: {
      value: cdktf.stringToHclTerraform(struct!.externalUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    org_id: {
      value: cdktf.numberToHclTerraform(struct!.orgId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    updated: {
      value: cdktf.stringToHclTerraform(struct!.updated),
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
    user_id: {
      value: cdktf.numberToHclTerraform(struct!.userId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSchemasCoreDashboardSnapshotOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasCoreDashboardSnapshot | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._created !== undefined) {
      hasAnyValues = true;
      internalValueResult.created = this._created;
    }
    if (this._expires !== undefined) {
      hasAnyValues = true;
      internalValueResult.expires = this._expires;
    }
    if (this._external !== undefined) {
      hasAnyValues = true;
      internalValueResult.external = this._external;
    }
    if (this._externalUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalUrl = this._externalUrl;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._orgId !== undefined) {
      hasAnyValues = true;
      internalValueResult.orgId = this._orgId;
    }
    if (this._updated !== undefined) {
      hasAnyValues = true;
      internalValueResult.updated = this._updated;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._userId !== undefined) {
      hasAnyValues = true;
      internalValueResult.userId = this._userId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSchemasCoreDashboardSnapshot | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._created = undefined;
      this._expires = undefined;
      this._external = undefined;
      this._externalUrl = undefined;
      this._key = undefined;
      this._name = undefined;
      this._orgId = undefined;
      this._updated = undefined;
      this._url = undefined;
      this._userId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._created = value.created;
      this._expires = value.expires;
      this._external = value.external;
      this._externalUrl = value.externalUrl;
      this._key = value.key;
      this._name = value.name;
      this._orgId = value.orgId;
      this._updated = value.updated;
      this._url = value.url;
      this._userId = value.userId;
    }
  }

  // created - computed: true, optional: false, required: true
  private _created?: string; 
  public get created() {
    return this.getStringAttribute('created');
  }
  public set created(value: string) {
    this._created = value;
  }
  // Temporarily expose input value. Use with caution.
  public get createdInput() {
    return this._created;
  }

  // expires - computed: true, optional: false, required: true
  private _expires?: string; 
  public get expires() {
    return this.getStringAttribute('expires');
  }
  public set expires(value: string) {
    this._expires = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expiresInput() {
    return this._expires;
  }

  // external - computed: true, optional: false, required: true
  private _external?: boolean | cdktf.IResolvable; 
  public get external() {
    return this.getBooleanAttribute('external');
  }
  public set external(value: boolean | cdktf.IResolvable) {
    this._external = value;
  }
  // Temporarily expose input value. Use with caution.
  public get externalInput() {
    return this._external;
  }

  // external_url - computed: true, optional: false, required: true
  private _externalUrl?: string; 
  public get externalUrl() {
    return this.getStringAttribute('external_url');
  }
  public set externalUrl(value: string) {
    this._externalUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get externalUrlInput() {
    return this._externalUrl;
  }

  // key - computed: true, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // org_id - computed: true, optional: false, required: true
  private _orgId?: number; 
  public get orgId() {
    return this.getNumberAttribute('org_id');
  }
  public set orgId(value: number) {
    this._orgId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }

  // updated - computed: true, optional: false, required: true
  private _updated?: string; 
  public get updated() {
    return this.getStringAttribute('updated');
  }
  public set updated(value: string) {
    this._updated = value;
  }
  // Temporarily expose input value. Use with caution.
  public get updatedInput() {
    return this._updated;
  }

  // url - computed: true, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // user_id - computed: true, optional: false, required: true
  private _userId?: number; 
  public get userId() {
    return this.getNumberAttribute('user_id');
  }
  public set userId(value: number) {
    this._userId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId;
  }
}
export interface DataSchemasCoreDashboardTemplatingListCurrent {
  /**
  * Whether the option is selected or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/core_dashboard#selected DataSchemasCoreDashboard#selected}
  */
  readonly selected?: boolean | cdktf.IResolvable;
  /**
  * JSON-encoded string. Text to be displayed for the option
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/core_dashboard#text DataSchemasCoreDashboard#text}
  */
  readonly text: string;
  /**
  * JSON-encoded string. Value of the option
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/core_dashboard#value DataSchemasCoreDashboard#value}
  */
  readonly value: string;
}

export function dataSchemasCoreDashboardTemplatingListCurrentToTerraform(struct?: DataSchemasCoreDashboardTemplatingListCurrent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    selected: cdktf.booleanToTerraform(struct!.selected),
    text: cdktf.stringToTerraform(struct!.text),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataSchemasCoreDashboardTemplatingListCurrentToHclTerraform(struct?: DataSchemasCoreDashboardTemplatingListCurrent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    selected: {
      value: cdktf.booleanToHclTerraform(struct!.selected),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    text: {
      value: cdktf.stringToHclTerraform(struct!.text),
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

export class DataSchemasCoreDashboardTemplatingListCurrentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasCoreDashboardTemplatingListCurrent | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._selected !== undefined) {
      hasAnyValues = true;
      internalValueResult.selected = this._selected;
    }
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSchemasCoreDashboardTemplatingListCurrent | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._selected = undefined;
      this._text = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._selected = value.selected;
      this._text = value.text;
      this._value = value.value;
    }
  }

  // selected - computed: true, optional: true, required: false
  private _selected?: boolean | cdktf.IResolvable; 
  public get selected() {
    return this.getBooleanAttribute('selected');
  }
  public set selected(value: boolean | cdktf.IResolvable) {
    this._selected = value;
  }
  public resetSelected() {
    this._selected = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectedInput() {
    return this._selected;
  }

  // text - computed: true, optional: false, required: true
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
export interface DataSchemasCoreDashboardTemplatingListDatasource {
  /**
  * The plugin type-id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/core_dashboard#type DataSchemasCoreDashboard#type}
  */
  readonly type?: string;
  /**
  * Specific datasource instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/core_dashboard#uid DataSchemasCoreDashboard#uid}
  */
  readonly uid?: string;
}

export function dataSchemasCoreDashboardTemplatingListDatasourceToTerraform(struct?: DataSchemasCoreDashboardTemplatingListDatasource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    uid: cdktf.stringToTerraform(struct!.uid),
  }
}


export function dataSchemasCoreDashboardTemplatingListDatasourceToHclTerraform(struct?: DataSchemasCoreDashboardTemplatingListDatasource | cdktf.IResolvable): any {
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

export class DataSchemasCoreDashboardTemplatingListDatasourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasCoreDashboardTemplatingListDatasource | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataSchemasCoreDashboardTemplatingListDatasource | cdktf.IResolvable | undefined) {
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
export interface DataSchemasCoreDashboardTemplatingListOptions {
  /**
  * Whether the option is selected or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/core_dashboard#selected DataSchemasCoreDashboard#selected}
  */
  readonly selected?: boolean | cdktf.IResolvable;
  /**
  * JSON-encoded string. Text to be displayed for the option
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/core_dashboard#text DataSchemasCoreDashboard#text}
  */
  readonly text: string;
  /**
  * JSON-encoded string. Value of the option
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/core_dashboard#value DataSchemasCoreDashboard#value}
  */
  readonly value: string;
}

export function dataSchemasCoreDashboardTemplatingListOptionsToTerraform(struct?: DataSchemasCoreDashboardTemplatingListOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    selected: cdktf.booleanToTerraform(struct!.selected),
    text: cdktf.stringToTerraform(struct!.text),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataSchemasCoreDashboardTemplatingListOptionsToHclTerraform(struct?: DataSchemasCoreDashboardTemplatingListOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    selected: {
      value: cdktf.booleanToHclTerraform(struct!.selected),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    text: {
      value: cdktf.stringToHclTerraform(struct!.text),
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

export class DataSchemasCoreDashboardTemplatingListOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSchemasCoreDashboardTemplatingListOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._selected !== undefined) {
      hasAnyValues = true;
      internalValueResult.selected = this._selected;
    }
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSchemasCoreDashboardTemplatingListOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._selected = undefined;
      this._text = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._selected = value.selected;
      this._text = value.text;
      this._value = value.value;
    }
  }

  // selected - computed: true, optional: true, required: false
  private _selected?: boolean | cdktf.IResolvable; 
  public get selected() {
    return this.getBooleanAttribute('selected');
  }
  public set selected(value: boolean | cdktf.IResolvable) {
    this._selected = value;
  }
  public resetSelected() {
    this._selected = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectedInput() {
    return this._selected;
  }

  // text - computed: true, optional: false, required: true
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

export class DataSchemasCoreDashboardTemplatingListOptionsList extends cdktf.ComplexList {
  public internalValue? : DataSchemasCoreDashboardTemplatingListOptions[] | cdktf.IResolvable

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
  public get(index: number): DataSchemasCoreDashboardTemplatingListOptionsOutputReference {
    return new DataSchemasCoreDashboardTemplatingListOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSchemasCoreDashboardTemplatingListStruct {
  /**
  * Format to use while fetching all values from data source, eg: wildcard, glob, regex, pipe, etc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/core_dashboard#all_format DataSchemasCoreDashboard#all_format}
  */
  readonly allFormat?: string;
  /**
  * Shows current selected variable text/value on the dashboard
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/core_dashboard#current DataSchemasCoreDashboard#current}
  */
  readonly current?: DataSchemasCoreDashboardTemplatingListCurrent;
  /**
  * Data source used to fetch values for a variable. It can be defined but null.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/core_dashboard#datasource DataSchemasCoreDashboard#datasource}
  */
  readonly datasource?: DataSchemasCoreDashboardTemplatingListDatasource;
  /**
  * Description of variable. It can be defined but null.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/core_dashboard#description DataSchemasCoreDashboard#description}
  */
  readonly description?: string;
  /**
  * Visibility configuration for the variable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/core_dashboard#hide DataSchemasCoreDashboard#hide}
  */
  readonly hide: number;
  /**
  * Optional display name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/core_dashboard#label DataSchemasCoreDashboard#label}
  */
  readonly label?: string;
  /**
  * Whether multiple values can be selected or not from variable value list. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/core_dashboard#multi DataSchemasCoreDashboard#multi}
  */
  readonly multi?: boolean | cdktf.IResolvable;
  /**
  * Name of variable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/core_dashboard#name DataSchemasCoreDashboard#name}
  */
  readonly name: string;
  /**
  * Options that can be selected for a variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/core_dashboard#options DataSchemasCoreDashboard#options}
  */
  readonly options?: DataSchemasCoreDashboardTemplatingListOptions[] | cdktf.IResolvable;
  /**
  * JSON-encoded string. Query used to fetch values for a variable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/core_dashboard#query DataSchemasCoreDashboard#query}
  */
  readonly query?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/core_dashboard#refresh DataSchemasCoreDashboard#refresh}
  */
  readonly refresh?: number;
  /**
  * Whether the variable value should be managed by URL query params or not. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/core_dashboard#skip_url_sync DataSchemasCoreDashboard#skip_url_sync}
  */
  readonly skipUrlSync?: boolean | cdktf.IResolvable;
  /**
  * Type of variable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/core_dashboard#type DataSchemasCoreDashboard#type}
  */
  readonly type: string;
}

export function dataSchemasCoreDashboardTemplatingListStructToTerraform(struct?: DataSchemasCoreDashboardTemplatingListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_format: cdktf.stringToTerraform(struct!.allFormat),
    current: dataSchemasCoreDashboardTemplatingListCurrentToTerraform(struct!.current),
    datasource: dataSchemasCoreDashboardTemplatingListDatasourceToTerraform(struct!.datasource),
    description: cdktf.stringToTerraform(struct!.description),
    hide: cdktf.numberToTerraform(struct!.hide),
    label: cdktf.stringToTerraform(struct!.label),
    multi: cdktf.booleanToTerraform(struct!.multi),
    name: cdktf.stringToTerraform(struct!.name),
    options: cdktf.listMapper(dataSchemasCoreDashboardTemplatingListOptionsToTerraform, false)(struct!.options),
    query: cdktf.stringToTerraform(struct!.query),
    refresh: cdktf.numberToTerraform(struct!.refresh),
    skip_url_sync: cdktf.booleanToTerraform(struct!.skipUrlSync),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataSchemasCoreDashboardTemplatingListStructToHclTerraform(struct?: DataSchemasCoreDashboardTemplatingListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_format: {
      value: cdktf.stringToHclTerraform(struct!.allFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    current: {
      value: dataSchemasCoreDashboardTemplatingListCurrentToHclTerraform(struct!.current),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasCoreDashboardTemplatingListCurrent",
    },
    datasource: {
      value: dataSchemasCoreDashboardTemplatingListDatasourceToHclTerraform(struct!.datasource),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasCoreDashboardTemplatingListDatasource",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hide: {
      value: cdktf.numberToHclTerraform(struct!.hide),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    multi: {
      value: cdktf.booleanToHclTerraform(struct!.multi),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    options: {
      value: cdktf.listMapperHcl(dataSchemasCoreDashboardTemplatingListOptionsToHclTerraform, false)(struct!.options),
      isBlock: true,
      type: "list",
      storageClassType: "DataSchemasCoreDashboardTemplatingListOptionsList",
    },
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    refresh: {
      value: cdktf.numberToHclTerraform(struct!.refresh),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    skip_url_sync: {
      value: cdktf.booleanToHclTerraform(struct!.skipUrlSync),
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

export class DataSchemasCoreDashboardTemplatingListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSchemasCoreDashboardTemplatingListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.allFormat = this._allFormat;
    }
    if (this._current?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.current = this._current?.internalValue;
    }
    if (this._datasource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasource = this._datasource?.internalValue;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._hide !== undefined) {
      hasAnyValues = true;
      internalValueResult.hide = this._hide;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._multi !== undefined) {
      hasAnyValues = true;
      internalValueResult.multi = this._multi;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._options?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options?.internalValue;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    if (this._refresh !== undefined) {
      hasAnyValues = true;
      internalValueResult.refresh = this._refresh;
    }
    if (this._skipUrlSync !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipUrlSync = this._skipUrlSync;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSchemasCoreDashboardTemplatingListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allFormat = undefined;
      this._current.internalValue = undefined;
      this._datasource.internalValue = undefined;
      this._description = undefined;
      this._hide = undefined;
      this._label = undefined;
      this._multi = undefined;
      this._name = undefined;
      this._options.internalValue = undefined;
      this._query = undefined;
      this._refresh = undefined;
      this._skipUrlSync = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allFormat = value.allFormat;
      this._current.internalValue = value.current;
      this._datasource.internalValue = value.datasource;
      this._description = value.description;
      this._hide = value.hide;
      this._label = value.label;
      this._multi = value.multi;
      this._name = value.name;
      this._options.internalValue = value.options;
      this._query = value.query;
      this._refresh = value.refresh;
      this._skipUrlSync = value.skipUrlSync;
      this._type = value.type;
    }
  }

  // all_format - computed: true, optional: true, required: false
  private _allFormat?: string; 
  public get allFormat() {
    return this.getStringAttribute('all_format');
  }
  public set allFormat(value: string) {
    this._allFormat = value;
  }
  public resetAllFormat() {
    this._allFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allFormatInput() {
    return this._allFormat;
  }

  // current - computed: true, optional: true, required: false
  private _current = new DataSchemasCoreDashboardTemplatingListCurrentOutputReference(this, "current");
  public get current() {
    return this._current;
  }
  public putCurrent(value: DataSchemasCoreDashboardTemplatingListCurrent) {
    this._current.internalValue = value;
  }
  public resetCurrent() {
    this._current.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentInput() {
    return this._current.internalValue;
  }

  // datasource - computed: true, optional: true, required: false
  private _datasource = new DataSchemasCoreDashboardTemplatingListDatasourceOutputReference(this, "datasource");
  public get datasource() {
    return this._datasource;
  }
  public putDatasource(value: DataSchemasCoreDashboardTemplatingListDatasource) {
    this._datasource.internalValue = value;
  }
  public resetDatasource() {
    this._datasource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasourceInput() {
    return this._datasource.internalValue;
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

  // hide - computed: true, optional: false, required: true
  private _hide?: number; 
  public get hide() {
    return this.getNumberAttribute('hide');
  }
  public set hide(value: number) {
    this._hide = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hideInput() {
    return this._hide;
  }

  // label - computed: true, optional: true, required: false
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

  // multi - computed: true, optional: true, required: false
  private _multi?: boolean | cdktf.IResolvable; 
  public get multi() {
    return this.getBooleanAttribute('multi');
  }
  public set multi(value: boolean | cdktf.IResolvable) {
    this._multi = value;
  }
  public resetMulti() {
    this._multi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiInput() {
    return this._multi;
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

  // options - computed: true, optional: true, required: false
  private _options = new DataSchemasCoreDashboardTemplatingListOptionsList(this, "options", false);
  public get options() {
    return this._options;
  }
  public putOptions(value: DataSchemasCoreDashboardTemplatingListOptions[] | cdktf.IResolvable) {
    this._options.internalValue = value;
  }
  public resetOptions() {
    this._options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }

  // query - computed: true, optional: true, required: false
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  public resetQuery() {
    this._query = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }

  // refresh - computed: true, optional: true, required: false
  private _refresh?: number; 
  public get refresh() {
    return this.getNumberAttribute('refresh');
  }
  public set refresh(value: number) {
    this._refresh = value;
  }
  public resetRefresh() {
    this._refresh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshInput() {
    return this._refresh;
  }

  // skip_url_sync - computed: true, optional: true, required: false
  private _skipUrlSync?: boolean | cdktf.IResolvable; 
  public get skipUrlSync() {
    return this.getBooleanAttribute('skip_url_sync');
  }
  public set skipUrlSync(value: boolean | cdktf.IResolvable) {
    this._skipUrlSync = value;
  }
  public resetSkipUrlSync() {
    this._skipUrlSync = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipUrlSyncInput() {
    return this._skipUrlSync;
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

export class DataSchemasCoreDashboardTemplatingListStructList extends cdktf.ComplexList {
  public internalValue? : DataSchemasCoreDashboardTemplatingListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataSchemasCoreDashboardTemplatingListStructOutputReference {
    return new DataSchemasCoreDashboardTemplatingListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSchemasCoreDashboardTemplating {
  /**
  * List of configured template variables with their saved values along with some other metadata
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/core_dashboard#list DataSchemasCoreDashboard#list}
  */
  readonly list?: DataSchemasCoreDashboardTemplatingListStruct[] | cdktf.IResolvable;
}

export function dataSchemasCoreDashboardTemplatingToTerraform(struct?: DataSchemasCoreDashboardTemplating | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    list: cdktf.listMapper(dataSchemasCoreDashboardTemplatingListStructToTerraform, false)(struct!.list),
  }
}


export function dataSchemasCoreDashboardTemplatingToHclTerraform(struct?: DataSchemasCoreDashboardTemplating | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    list: {
      value: cdktf.listMapperHcl(dataSchemasCoreDashboardTemplatingListStructToHclTerraform, false)(struct!.list),
      isBlock: true,
      type: "list",
      storageClassType: "DataSchemasCoreDashboardTemplatingListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSchemasCoreDashboardTemplatingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasCoreDashboardTemplating | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._list?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.list = this._list?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSchemasCoreDashboardTemplating | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._list.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._list.internalValue = value.list;
    }
  }

  // list - computed: true, optional: true, required: false
  private _list = new DataSchemasCoreDashboardTemplatingListStructList(this, "list", false);
  public get list() {
    return this._list;
  }
  public putList(value: DataSchemasCoreDashboardTemplatingListStruct[] | cdktf.IResolvable) {
    this._list.internalValue = value;
  }
  public resetList() {
    this._list.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listInput() {
    return this._list.internalValue;
  }
}
export interface DataSchemasCoreDashboardTime {
  /**
  *  Defaults to "now-6h".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/core_dashboard#from DataSchemasCoreDashboard#from}
  */
  readonly from?: string;
  /**
  *  Defaults to "now".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/core_dashboard#to DataSchemasCoreDashboard#to}
  */
  readonly to?: string;
}

export function dataSchemasCoreDashboardTimeToTerraform(struct?: DataSchemasCoreDashboardTime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: cdktf.stringToTerraform(struct!.from),
    to: cdktf.stringToTerraform(struct!.to),
  }
}


export function dataSchemasCoreDashboardTimeToHclTerraform(struct?: DataSchemasCoreDashboardTime | cdktf.IResolvable): any {
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

export class DataSchemasCoreDashboardTimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasCoreDashboardTime | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._from !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from;
    }
    if (this._to !== undefined) {
      hasAnyValues = true;
      internalValueResult.to = this._to;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSchemasCoreDashboardTime | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._from = undefined;
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
      this._to = value.to;
    }
  }

  // from - computed: true, optional: true, required: false
  private _from?: string; 
  public get from() {
    return this.getStringAttribute('from');
  }
  public set from(value: string) {
    this._from = value;
  }
  public resetFrom() {
    this._from = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from;
  }

  // to - computed: true, optional: true, required: false
  private _to?: string; 
  public get to() {
    return this.getStringAttribute('to');
  }
  public set to(value: string) {
    this._to = value;
  }
  public resetTo() {
    this._to = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toInput() {
    return this._to;
  }
}
export interface DataSchemasCoreDashboardTimepicker {
  /**
  * Whether timepicker is collapsed or not. Has no effect on provisioned dashboard. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/core_dashboard#collapse DataSchemasCoreDashboard#collapse}
  */
  readonly collapse?: boolean | cdktf.IResolvable;
  /**
  * Whether timepicker is enabled or not. Has no effect on provisioned dashboard. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/core_dashboard#enable DataSchemasCoreDashboard#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Whether timepicker is visible or not. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/core_dashboard#hidden DataSchemasCoreDashboard#hidden}
  */
  readonly hidden?: boolean | cdktf.IResolvable;
  /**
  * Interval options available in the refresh picker dropdown.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/core_dashboard#refresh_intervals DataSchemasCoreDashboard#refresh_intervals}
  */
  readonly refreshIntervals?: string[];
  /**
  * Selectable options available in the time picker dropdown. Has no effect on provisioned dashboard.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/core_dashboard#time_options DataSchemasCoreDashboard#time_options}
  */
  readonly timeOptions?: string[];
}

export function dataSchemasCoreDashboardTimepickerToTerraform(struct?: DataSchemasCoreDashboardTimepicker | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    collapse: cdktf.booleanToTerraform(struct!.collapse),
    enable: cdktf.booleanToTerraform(struct!.enable),
    hidden: cdktf.booleanToTerraform(struct!.hidden),
    refresh_intervals: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.refreshIntervals),
    time_options: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.timeOptions),
  }
}


export function dataSchemasCoreDashboardTimepickerToHclTerraform(struct?: DataSchemasCoreDashboardTimepicker | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    collapse: {
      value: cdktf.booleanToHclTerraform(struct!.collapse),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    hidden: {
      value: cdktf.booleanToHclTerraform(struct!.hidden),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    refresh_intervals: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.refreshIntervals),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    time_options: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.timeOptions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSchemasCoreDashboardTimepickerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasCoreDashboardTimepicker | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._collapse !== undefined) {
      hasAnyValues = true;
      internalValueResult.collapse = this._collapse;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._hidden !== undefined) {
      hasAnyValues = true;
      internalValueResult.hidden = this._hidden;
    }
    if (this._refreshIntervals !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshIntervals = this._refreshIntervals;
    }
    if (this._timeOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeOptions = this._timeOptions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSchemasCoreDashboardTimepicker | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._collapse = undefined;
      this._enable = undefined;
      this._hidden = undefined;
      this._refreshIntervals = undefined;
      this._timeOptions = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._collapse = value.collapse;
      this._enable = value.enable;
      this._hidden = value.hidden;
      this._refreshIntervals = value.refreshIntervals;
      this._timeOptions = value.timeOptions;
    }
  }

  // collapse - computed: true, optional: true, required: false
  private _collapse?: boolean | cdktf.IResolvable; 
  public get collapse() {
    return this.getBooleanAttribute('collapse');
  }
  public set collapse(value: boolean | cdktf.IResolvable) {
    this._collapse = value;
  }
  public resetCollapse() {
    this._collapse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collapseInput() {
    return this._collapse;
  }

  // enable - computed: true, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // hidden - computed: true, optional: true, required: false
  private _hidden?: boolean | cdktf.IResolvable; 
  public get hidden() {
    return this.getBooleanAttribute('hidden');
  }
  public set hidden(value: boolean | cdktf.IResolvable) {
    this._hidden = value;
  }
  public resetHidden() {
    this._hidden = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hiddenInput() {
    return this._hidden;
  }

  // refresh_intervals - computed: true, optional: true, required: false
  private _refreshIntervals?: string[]; 
  public get refreshIntervals() {
    return this.getListAttribute('refresh_intervals');
  }
  public set refreshIntervals(value: string[]) {
    this._refreshIntervals = value;
  }
  public resetRefreshIntervals() {
    this._refreshIntervals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshIntervalsInput() {
    return this._refreshIntervals;
  }

  // time_options - computed: true, optional: true, required: false
  private _timeOptions?: string[]; 
  public get timeOptions() {
    return this.getListAttribute('time_options');
  }
  public set timeOptions(value: string[]) {
    this._timeOptions = value;
  }
  public resetTimeOptions() {
    this._timeOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeOptionsInput() {
    return this._timeOptions;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/core_dashboard schemas_core_dashboard}
*/
export class DataSchemasCoreDashboard extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "schemas_core_dashboard";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSchemasCoreDashboard resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSchemasCoreDashboard to import
  * @param importFromId The id of the existing DataSchemasCoreDashboard that should be imported. Refer to the {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/core_dashboard#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSchemasCoreDashboard to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "schemas_core_dashboard", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/core_dashboard schemas_core_dashboard} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSchemasCoreDashboardConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataSchemasCoreDashboardConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'schemas_core_dashboard',
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
    this._annotations.internalValue = config.annotations;
    this._description = config.description;
    this._editable = config.editable;
    this._fiscalYearStartMonth = config.fiscalYearStartMonth;
    this._gnetId = config.gnetId;
    this._graphTooltip = config.graphTooltip;
    this._links.internalValue = config.links;
    this._liveNow = config.liveNow;
    this._panels = config.panels;
    this._refresh = config.refresh;
    this._revision = config.revision;
    this._schemaVersion = config.schemaVersion;
    this._snapshot.internalValue = config.snapshot;
    this._style = config.style;
    this._tags = config.tags;
    this._templating.internalValue = config.templating;
    this._time.internalValue = config.time;
    this._timepicker.internalValue = config.timepicker;
    this._timezone = config.timezone;
    this._title = config.title;
    this._uid = config.uid;
    this._version = config.version;
    this._weekStart = config.weekStart;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // annotations - computed: true, optional: true, required: false
  private _annotations = new DataSchemasCoreDashboardAnnotationsOutputReference(this, "annotations");
  public get annotations() {
    return this._annotations;
  }
  public putAnnotations(value: DataSchemasCoreDashboardAnnotations) {
    this._annotations.internalValue = value;
  }
  public resetAnnotations() {
    this._annotations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations.internalValue;
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

  // editable - computed: true, optional: true, required: false
  private _editable?: boolean | cdktf.IResolvable; 
  public get editable() {
    return this.getBooleanAttribute('editable');
  }
  public set editable(value: boolean | cdktf.IResolvable) {
    this._editable = value;
  }
  public resetEditable() {
    this._editable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get editableInput() {
    return this._editable;
  }

  // fiscal_year_start_month - computed: true, optional: true, required: false
  private _fiscalYearStartMonth?: number; 
  public get fiscalYearStartMonth() {
    return this.getNumberAttribute('fiscal_year_start_month');
  }
  public set fiscalYearStartMonth(value: number) {
    this._fiscalYearStartMonth = value;
  }
  public resetFiscalYearStartMonth() {
    this._fiscalYearStartMonth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fiscalYearStartMonthInput() {
    return this._fiscalYearStartMonth;
  }

  // gnet_id - computed: false, optional: true, required: false
  private _gnetId?: string; 
  public get gnetId() {
    return this.getStringAttribute('gnet_id');
  }
  public set gnetId(value: string) {
    this._gnetId = value;
  }
  public resetGnetId() {
    this._gnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gnetIdInput() {
    return this._gnetId;
  }

  // graph_tooltip - computed: true, optional: true, required: false
  private _graphTooltip?: number; 
  public get graphTooltip() {
    return this.getNumberAttribute('graph_tooltip');
  }
  public set graphTooltip(value: number) {
    this._graphTooltip = value;
  }
  public resetGraphTooltip() {
    this._graphTooltip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get graphTooltipInput() {
    return this._graphTooltip;
  }

  // links - computed: false, optional: true, required: false
  private _links = new DataSchemasCoreDashboardLinksList(this, "links", false);
  public get links() {
    return this._links;
  }
  public putLinks(value: DataSchemasCoreDashboardLinks[] | cdktf.IResolvable) {
    this._links.internalValue = value;
  }
  public resetLinks() {
    this._links.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linksInput() {
    return this._links.internalValue;
  }

  // live_now - computed: false, optional: true, required: false
  private _liveNow?: boolean | cdktf.IResolvable; 
  public get liveNow() {
    return this.getBooleanAttribute('live_now');
  }
  public set liveNow(value: boolean | cdktf.IResolvable) {
    this._liveNow = value;
  }
  public resetLiveNow() {
    this._liveNow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get liveNowInput() {
    return this._liveNow;
  }

  // panels - computed: false, optional: true, required: false
  private _panels?: string[]; 
  public get panels() {
    return this.getListAttribute('panels');
  }
  public set panels(value: string[]) {
    this._panels = value;
  }
  public resetPanels() {
    this._panels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get panelsInput() {
    return this._panels;
  }

  // refresh - computed: false, optional: true, required: false
  private _refresh?: string; 
  public get refresh() {
    return this.getStringAttribute('refresh');
  }
  public set refresh(value: string) {
    this._refresh = value;
  }
  public resetRefresh() {
    this._refresh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshInput() {
    return this._refresh;
  }

  // rendered_json - computed: true, optional: false, required: false
  public get renderedJson() {
    return this.getStringAttribute('rendered_json');
  }

  // revision - computed: false, optional: true, required: false
  private _revision?: number; 
  public get revision() {
    return this.getNumberAttribute('revision');
  }
  public set revision(value: number) {
    this._revision = value;
  }
  public resetRevision() {
    this._revision = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revisionInput() {
    return this._revision;
  }

  // schema_version - computed: true, optional: true, required: false
  private _schemaVersion?: number; 
  public get schemaVersion() {
    return this.getNumberAttribute('schema_version');
  }
  public set schemaVersion(value: number) {
    this._schemaVersion = value;
  }
  public resetSchemaVersion() {
    this._schemaVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaVersionInput() {
    return this._schemaVersion;
  }

  // snapshot - computed: true, optional: true, required: false
  private _snapshot = new DataSchemasCoreDashboardSnapshotOutputReference(this, "snapshot");
  public get snapshot() {
    return this._snapshot;
  }
  public putSnapshot(value: DataSchemasCoreDashboardSnapshot) {
    this._snapshot.internalValue = value;
  }
  public resetSnapshot() {
    this._snapshot.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotInput() {
    return this._snapshot.internalValue;
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

  // templating - computed: true, optional: true, required: false
  private _templating = new DataSchemasCoreDashboardTemplatingOutputReference(this, "templating");
  public get templating() {
    return this._templating;
  }
  public putTemplating(value: DataSchemasCoreDashboardTemplating) {
    this._templating.internalValue = value;
  }
  public resetTemplating() {
    this._templating.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templatingInput() {
    return this._templating.internalValue;
  }

  // time - computed: true, optional: true, required: false
  private _time = new DataSchemasCoreDashboardTimeOutputReference(this, "time");
  public get time() {
    return this._time;
  }
  public putTime(value: DataSchemasCoreDashboardTime) {
    this._time.internalValue = value;
  }
  public resetTime() {
    this._time.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeInput() {
    return this._time.internalValue;
  }

  // timepicker - computed: true, optional: true, required: false
  private _timepicker = new DataSchemasCoreDashboardTimepickerOutputReference(this, "timepicker");
  public get timepicker() {
    return this._timepicker;
  }
  public putTimepicker(value: DataSchemasCoreDashboardTimepicker) {
    this._timepicker.internalValue = value;
  }
  public resetTimepicker() {
    this._timepicker.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timepickerInput() {
    return this._timepicker.internalValue;
  }

  // timezone - computed: true, optional: true, required: false
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

  // uid - computed: false, optional: true, required: false
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

  // version - computed: false, optional: true, required: false
  private _version?: number; 
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // week_start - computed: false, optional: true, required: false
  private _weekStart?: string; 
  public get weekStart() {
    return this.getStringAttribute('week_start');
  }
  public set weekStart(value: string) {
    this._weekStart = value;
  }
  public resetWeekStart() {
    this._weekStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weekStartInput() {
    return this._weekStart;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotations: dataSchemasCoreDashboardAnnotationsToTerraform(this._annotations.internalValue),
      description: cdktf.stringToTerraform(this._description),
      editable: cdktf.booleanToTerraform(this._editable),
      fiscal_year_start_month: cdktf.numberToTerraform(this._fiscalYearStartMonth),
      gnet_id: cdktf.stringToTerraform(this._gnetId),
      graph_tooltip: cdktf.numberToTerraform(this._graphTooltip),
      links: cdktf.listMapper(dataSchemasCoreDashboardLinksToTerraform, false)(this._links.internalValue),
      live_now: cdktf.booleanToTerraform(this._liveNow),
      panels: cdktf.listMapper(cdktf.stringToTerraform, false)(this._panels),
      refresh: cdktf.stringToTerraform(this._refresh),
      revision: cdktf.numberToTerraform(this._revision),
      schema_version: cdktf.numberToTerraform(this._schemaVersion),
      snapshot: dataSchemasCoreDashboardSnapshotToTerraform(this._snapshot.internalValue),
      style: cdktf.stringToTerraform(this._style),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      templating: dataSchemasCoreDashboardTemplatingToTerraform(this._templating.internalValue),
      time: dataSchemasCoreDashboardTimeToTerraform(this._time.internalValue),
      timepicker: dataSchemasCoreDashboardTimepickerToTerraform(this._timepicker.internalValue),
      timezone: cdktf.stringToTerraform(this._timezone),
      title: cdktf.stringToTerraform(this._title),
      uid: cdktf.stringToTerraform(this._uid),
      version: cdktf.numberToTerraform(this._version),
      week_start: cdktf.stringToTerraform(this._weekStart),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      annotations: {
        value: dataSchemasCoreDashboardAnnotationsToHclTerraform(this._annotations.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataSchemasCoreDashboardAnnotations",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      editable: {
        value: cdktf.booleanToHclTerraform(this._editable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      fiscal_year_start_month: {
        value: cdktf.numberToHclTerraform(this._fiscalYearStartMonth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gnet_id: {
        value: cdktf.stringToHclTerraform(this._gnetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      graph_tooltip: {
        value: cdktf.numberToHclTerraform(this._graphTooltip),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      links: {
        value: cdktf.listMapperHcl(dataSchemasCoreDashboardLinksToHclTerraform, false)(this._links.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataSchemasCoreDashboardLinksList",
      },
      live_now: {
        value: cdktf.booleanToHclTerraform(this._liveNow),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      panels: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._panels),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      refresh: {
        value: cdktf.stringToHclTerraform(this._refresh),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      revision: {
        value: cdktf.numberToHclTerraform(this._revision),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      schema_version: {
        value: cdktf.numberToHclTerraform(this._schemaVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      snapshot: {
        value: dataSchemasCoreDashboardSnapshotToHclTerraform(this._snapshot.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataSchemasCoreDashboardSnapshot",
      },
      style: {
        value: cdktf.stringToHclTerraform(this._style),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      templating: {
        value: dataSchemasCoreDashboardTemplatingToHclTerraform(this._templating.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataSchemasCoreDashboardTemplating",
      },
      time: {
        value: dataSchemasCoreDashboardTimeToHclTerraform(this._time.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataSchemasCoreDashboardTime",
      },
      timepicker: {
        value: dataSchemasCoreDashboardTimepickerToHclTerraform(this._timepicker.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataSchemasCoreDashboardTimepicker",
      },
      timezone: {
        value: cdktf.stringToHclTerraform(this._timezone),
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
      uid: {
        value: cdktf.stringToHclTerraform(this._uid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version: {
        value: cdktf.numberToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      week_start: {
        value: cdktf.stringToHclTerraform(this._weekStart),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
