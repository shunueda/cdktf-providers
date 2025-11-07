// https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSchemasQueryElasticsearchConfig extends cdktf.TerraformMetaArguments {
  /**
  * Alias pattern
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#alias DataSchemasQueryElasticsearch#alias}
  */
  readonly alias?: string;
  /**
  * List of bucket aggregations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#bucket_aggs DataSchemasQueryElasticsearch#bucket_aggs}
  */
  readonly bucketAggs?: DataSchemasQueryElasticsearchBucketAggs[] | cdktf.IResolvable;
  /**
  * true if query is disabled (ie should not be returned to the dashboard)
  * Note this does not always imply that the query should not be executed since
  * the results from a hidden query may be used as the input to other queries (SSE etc)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#hide DataSchemasQueryElasticsearch#hide}
  */
  readonly hide?: boolean | cdktf.IResolvable;
  /**
  * List of metric aggregations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#metrics DataSchemasQueryElasticsearch#metrics}
  */
  readonly metrics?: DataSchemasQueryElasticsearchMetrics[] | cdktf.IResolvable;
  /**
  * Lucene query
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#query DataSchemasQueryElasticsearch#query}
  */
  readonly query?: string;
  /**
  * Specify the query flavor
  * TODO make this required and give it a default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#query_type DataSchemasQueryElasticsearch#query_type}
  */
  readonly queryType?: string;
  /**
  * A unique identifier for the query within the list of targets.
  * In server side expressions, the refId is used as a variable name to identify results.
  * By default, the UI will assign A->Z; however setting meaningful names may be useful.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#ref_id DataSchemasQueryElasticsearch#ref_id}
  */
  readonly refId: string;
  /**
  * Name of time field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#time_field DataSchemasQueryElasticsearch#time_field}
  */
  readonly timeField?: string;
}
export interface DataSchemasQueryElasticsearchBucketAggsDateHistogramSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#interval DataSchemasQueryElasticsearch#interval}
  */
  readonly interval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#min_doc_count DataSchemasQueryElasticsearch#min_doc_count}
  */
  readonly minDocCount?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#offset DataSchemasQueryElasticsearch#offset}
  */
  readonly offset?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#time_zone DataSchemasQueryElasticsearch#time_zone}
  */
  readonly timeZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#trim_edges DataSchemasQueryElasticsearch#trim_edges}
  */
  readonly trimEdges?: string;
}

export function dataSchemasQueryElasticsearchBucketAggsDateHistogramSettingsToTerraform(struct?: DataSchemasQueryElasticsearchBucketAggsDateHistogramSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interval: cdktf.stringToTerraform(struct!.interval),
    min_doc_count: cdktf.stringToTerraform(struct!.minDocCount),
    offset: cdktf.stringToTerraform(struct!.offset),
    time_zone: cdktf.stringToTerraform(struct!.timeZone),
    trim_edges: cdktf.stringToTerraform(struct!.trimEdges),
  }
}


export function dataSchemasQueryElasticsearchBucketAggsDateHistogramSettingsToHclTerraform(struct?: DataSchemasQueryElasticsearchBucketAggsDateHistogramSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interval: {
      value: cdktf.stringToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_doc_count: {
      value: cdktf.stringToHclTerraform(struct!.minDocCount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    offset: {
      value: cdktf.stringToHclTerraform(struct!.offset),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_zone: {
      value: cdktf.stringToHclTerraform(struct!.timeZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trim_edges: {
      value: cdktf.stringToHclTerraform(struct!.trimEdges),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSchemasQueryElasticsearchBucketAggsDateHistogramSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasQueryElasticsearchBucketAggsDateHistogramSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._minDocCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.minDocCount = this._minDocCount;
    }
    if (this._offset !== undefined) {
      hasAnyValues = true;
      internalValueResult.offset = this._offset;
    }
    if (this._timeZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeZone = this._timeZone;
    }
    if (this._trimEdges !== undefined) {
      hasAnyValues = true;
      internalValueResult.trimEdges = this._trimEdges;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSchemasQueryElasticsearchBucketAggsDateHistogramSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interval = undefined;
      this._minDocCount = undefined;
      this._offset = undefined;
      this._timeZone = undefined;
      this._trimEdges = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._interval = value.interval;
      this._minDocCount = value.minDocCount;
      this._offset = value.offset;
      this._timeZone = value.timeZone;
      this._trimEdges = value.trimEdges;
    }
  }

  // interval - computed: true, optional: true, required: false
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

  // min_doc_count - computed: true, optional: true, required: false
  private _minDocCount?: string; 
  public get minDocCount() {
    return this.getStringAttribute('min_doc_count');
  }
  public set minDocCount(value: string) {
    this._minDocCount = value;
  }
  public resetMinDocCount() {
    this._minDocCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minDocCountInput() {
    return this._minDocCount;
  }

  // offset - computed: true, optional: true, required: false
  private _offset?: string; 
  public get offset() {
    return this.getStringAttribute('offset');
  }
  public set offset(value: string) {
    this._offset = value;
  }
  public resetOffset() {
    this._offset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offsetInput() {
    return this._offset;
  }

  // time_zone - computed: true, optional: true, required: false
  private _timeZone?: string; 
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }
  public set timeZone(value: string) {
    this._timeZone = value;
  }
  public resetTimeZone() {
    this._timeZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneInput() {
    return this._timeZone;
  }

  // trim_edges - computed: true, optional: true, required: false
  private _trimEdges?: string; 
  public get trimEdges() {
    return this.getStringAttribute('trim_edges');
  }
  public set trimEdges(value: string) {
    this._trimEdges = value;
  }
  public resetTrimEdges() {
    this._trimEdges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trimEdgesInput() {
    return this._trimEdges;
  }
}
export interface DataSchemasQueryElasticsearchBucketAggsDateHistogram {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#field DataSchemasQueryElasticsearch#field}
  */
  readonly field?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#settings DataSchemasQueryElasticsearch#settings}
  */
  readonly settings?: DataSchemasQueryElasticsearchBucketAggsDateHistogramSettings;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#type DataSchemasQueryElasticsearch#type}
  */
  readonly type: string;
}

export function dataSchemasQueryElasticsearchBucketAggsDateHistogramToTerraform(struct?: DataSchemasQueryElasticsearchBucketAggsDateHistogram | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field: cdktf.stringToTerraform(struct!.field),
    settings: dataSchemasQueryElasticsearchBucketAggsDateHistogramSettingsToTerraform(struct!.settings),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataSchemasQueryElasticsearchBucketAggsDateHistogramToHclTerraform(struct?: DataSchemasQueryElasticsearchBucketAggsDateHistogram | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field: {
      value: cdktf.stringToHclTerraform(struct!.field),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    settings: {
      value: dataSchemasQueryElasticsearchBucketAggsDateHistogramSettingsToHclTerraform(struct!.settings),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasQueryElasticsearchBucketAggsDateHistogramSettings",
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

export class DataSchemasQueryElasticsearchBucketAggsDateHistogramOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasQueryElasticsearchBucketAggsDateHistogram | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    if (this._settings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.settings = this._settings?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSchemasQueryElasticsearchBucketAggsDateHistogram | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._field = undefined;
      this._settings.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._field = value.field;
      this._settings.internalValue = value.settings;
      this._type = value.type;
    }
  }

  // field - computed: true, optional: true, required: false
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  public resetField() {
    this._field = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
  }

  // settings - computed: true, optional: true, required: false
  private _settings = new DataSchemasQueryElasticsearchBucketAggsDateHistogramSettingsOutputReference(this, "settings");
  public get settings() {
    return this._settings;
  }
  public putSettings(value: DataSchemasQueryElasticsearchBucketAggsDateHistogramSettings) {
    this._settings.internalValue = value;
  }
  public resetSettings() {
    this._settings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings.internalValue;
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
export interface DataSchemasQueryElasticsearchBucketAggsFiltersSettingsFilters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#label DataSchemasQueryElasticsearch#label}
  */
  readonly label: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#query DataSchemasQueryElasticsearch#query}
  */
  readonly query: string;
}

export function dataSchemasQueryElasticsearchBucketAggsFiltersSettingsFiltersToTerraform(struct?: DataSchemasQueryElasticsearchBucketAggsFiltersSettingsFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label: cdktf.stringToTerraform(struct!.label),
    query: cdktf.stringToTerraform(struct!.query),
  }
}


export function dataSchemasQueryElasticsearchBucketAggsFiltersSettingsFiltersToHclTerraform(struct?: DataSchemasQueryElasticsearchBucketAggsFiltersSettingsFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSchemasQueryElasticsearchBucketAggsFiltersSettingsFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSchemasQueryElasticsearchBucketAggsFiltersSettingsFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSchemasQueryElasticsearchBucketAggsFiltersSettingsFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._label = undefined;
      this._query = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._label = value.label;
      this._query = value.query;
    }
  }

  // label - computed: true, optional: false, required: true
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // query - computed: true, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }
}

export class DataSchemasQueryElasticsearchBucketAggsFiltersSettingsFiltersList extends cdktf.ComplexList {
  public internalValue? : DataSchemasQueryElasticsearchBucketAggsFiltersSettingsFilters[] | cdktf.IResolvable

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
  public get(index: number): DataSchemasQueryElasticsearchBucketAggsFiltersSettingsFiltersOutputReference {
    return new DataSchemasQueryElasticsearchBucketAggsFiltersSettingsFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSchemasQueryElasticsearchBucketAggsFiltersSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#filters DataSchemasQueryElasticsearch#filters}
  */
  readonly filters?: DataSchemasQueryElasticsearchBucketAggsFiltersSettingsFilters[] | cdktf.IResolvable;
}

export function dataSchemasQueryElasticsearchBucketAggsFiltersSettingsToTerraform(struct?: DataSchemasQueryElasticsearchBucketAggsFiltersSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filters: cdktf.listMapper(dataSchemasQueryElasticsearchBucketAggsFiltersSettingsFiltersToTerraform, false)(struct!.filters),
  }
}


export function dataSchemasQueryElasticsearchBucketAggsFiltersSettingsToHclTerraform(struct?: DataSchemasQueryElasticsearchBucketAggsFiltersSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filters: {
      value: cdktf.listMapperHcl(dataSchemasQueryElasticsearchBucketAggsFiltersSettingsFiltersToHclTerraform, false)(struct!.filters),
      isBlock: true,
      type: "list",
      storageClassType: "DataSchemasQueryElasticsearchBucketAggsFiltersSettingsFiltersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSchemasQueryElasticsearchBucketAggsFiltersSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasQueryElasticsearchBucketAggsFiltersSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filters = this._filters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSchemasQueryElasticsearchBucketAggsFiltersSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filters.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filters.internalValue = value.filters;
    }
  }

  // filters - computed: true, optional: true, required: false
  private _filters = new DataSchemasQueryElasticsearchBucketAggsFiltersSettingsFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }
  public putFilters(value: DataSchemasQueryElasticsearchBucketAggsFiltersSettingsFilters[] | cdktf.IResolvable) {
    this._filters.internalValue = value;
  }
  public resetFilters() {
    this._filters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters.internalValue;
  }
}
export interface DataSchemasQueryElasticsearchBucketAggsFilters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#settings DataSchemasQueryElasticsearch#settings}
  */
  readonly settings?: DataSchemasQueryElasticsearchBucketAggsFiltersSettings;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#type DataSchemasQueryElasticsearch#type}
  */
  readonly type: string;
}

export function dataSchemasQueryElasticsearchBucketAggsFiltersToTerraform(struct?: DataSchemasQueryElasticsearchBucketAggsFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    settings: dataSchemasQueryElasticsearchBucketAggsFiltersSettingsToTerraform(struct!.settings),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataSchemasQueryElasticsearchBucketAggsFiltersToHclTerraform(struct?: DataSchemasQueryElasticsearchBucketAggsFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    settings: {
      value: dataSchemasQueryElasticsearchBucketAggsFiltersSettingsToHclTerraform(struct!.settings),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasQueryElasticsearchBucketAggsFiltersSettings",
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

export class DataSchemasQueryElasticsearchBucketAggsFiltersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasQueryElasticsearchBucketAggsFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._settings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.settings = this._settings?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSchemasQueryElasticsearchBucketAggsFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._settings.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._settings.internalValue = value.settings;
      this._type = value.type;
    }
  }

  // settings - computed: true, optional: true, required: false
  private _settings = new DataSchemasQueryElasticsearchBucketAggsFiltersSettingsOutputReference(this, "settings");
  public get settings() {
    return this._settings;
  }
  public putSettings(value: DataSchemasQueryElasticsearchBucketAggsFiltersSettings) {
    this._settings.internalValue = value;
  }
  public resetSettings() {
    this._settings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings.internalValue;
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
export interface DataSchemasQueryElasticsearchBucketAggsGeoHashGridSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#precision DataSchemasQueryElasticsearch#precision}
  */
  readonly precision?: string;
}

export function dataSchemasQueryElasticsearchBucketAggsGeoHashGridSettingsToTerraform(struct?: DataSchemasQueryElasticsearchBucketAggsGeoHashGridSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    precision: cdktf.stringToTerraform(struct!.precision),
  }
}


export function dataSchemasQueryElasticsearchBucketAggsGeoHashGridSettingsToHclTerraform(struct?: DataSchemasQueryElasticsearchBucketAggsGeoHashGridSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    precision: {
      value: cdktf.stringToHclTerraform(struct!.precision),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSchemasQueryElasticsearchBucketAggsGeoHashGridSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasQueryElasticsearchBucketAggsGeoHashGridSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._precision !== undefined) {
      hasAnyValues = true;
      internalValueResult.precision = this._precision;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSchemasQueryElasticsearchBucketAggsGeoHashGridSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._precision = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._precision = value.precision;
    }
  }

  // precision - computed: true, optional: true, required: false
  private _precision?: string; 
  public get precision() {
    return this.getStringAttribute('precision');
  }
  public set precision(value: string) {
    this._precision = value;
  }
  public resetPrecision() {
    this._precision = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get precisionInput() {
    return this._precision;
  }
}
export interface DataSchemasQueryElasticsearchBucketAggsGeoHashGrid {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#field DataSchemasQueryElasticsearch#field}
  */
  readonly field?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#settings DataSchemasQueryElasticsearch#settings}
  */
  readonly settings?: DataSchemasQueryElasticsearchBucketAggsGeoHashGridSettings;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#type DataSchemasQueryElasticsearch#type}
  */
  readonly type: string;
}

export function dataSchemasQueryElasticsearchBucketAggsGeoHashGridToTerraform(struct?: DataSchemasQueryElasticsearchBucketAggsGeoHashGrid | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field: cdktf.stringToTerraform(struct!.field),
    settings: dataSchemasQueryElasticsearchBucketAggsGeoHashGridSettingsToTerraform(struct!.settings),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataSchemasQueryElasticsearchBucketAggsGeoHashGridToHclTerraform(struct?: DataSchemasQueryElasticsearchBucketAggsGeoHashGrid | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field: {
      value: cdktf.stringToHclTerraform(struct!.field),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    settings: {
      value: dataSchemasQueryElasticsearchBucketAggsGeoHashGridSettingsToHclTerraform(struct!.settings),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasQueryElasticsearchBucketAggsGeoHashGridSettings",
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

export class DataSchemasQueryElasticsearchBucketAggsGeoHashGridOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasQueryElasticsearchBucketAggsGeoHashGrid | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    if (this._settings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.settings = this._settings?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSchemasQueryElasticsearchBucketAggsGeoHashGrid | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._field = undefined;
      this._settings.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._field = value.field;
      this._settings.internalValue = value.settings;
      this._type = value.type;
    }
  }

  // field - computed: true, optional: true, required: false
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  public resetField() {
    this._field = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
  }

  // settings - computed: true, optional: true, required: false
  private _settings = new DataSchemasQueryElasticsearchBucketAggsGeoHashGridSettingsOutputReference(this, "settings");
  public get settings() {
    return this._settings;
  }
  public putSettings(value: DataSchemasQueryElasticsearchBucketAggsGeoHashGridSettings) {
    this._settings.internalValue = value;
  }
  public resetSettings() {
    this._settings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings.internalValue;
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
export interface DataSchemasQueryElasticsearchBucketAggsHistogramSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#interval DataSchemasQueryElasticsearch#interval}
  */
  readonly interval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#min_doc_count DataSchemasQueryElasticsearch#min_doc_count}
  */
  readonly minDocCount?: string;
}

export function dataSchemasQueryElasticsearchBucketAggsHistogramSettingsToTerraform(struct?: DataSchemasQueryElasticsearchBucketAggsHistogramSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interval: cdktf.stringToTerraform(struct!.interval),
    min_doc_count: cdktf.stringToTerraform(struct!.minDocCount),
  }
}


export function dataSchemasQueryElasticsearchBucketAggsHistogramSettingsToHclTerraform(struct?: DataSchemasQueryElasticsearchBucketAggsHistogramSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interval: {
      value: cdktf.stringToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_doc_count: {
      value: cdktf.stringToHclTerraform(struct!.minDocCount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSchemasQueryElasticsearchBucketAggsHistogramSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasQueryElasticsearchBucketAggsHistogramSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._minDocCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.minDocCount = this._minDocCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSchemasQueryElasticsearchBucketAggsHistogramSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interval = undefined;
      this._minDocCount = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._interval = value.interval;
      this._minDocCount = value.minDocCount;
    }
  }

  // interval - computed: true, optional: true, required: false
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

  // min_doc_count - computed: true, optional: true, required: false
  private _minDocCount?: string; 
  public get minDocCount() {
    return this.getStringAttribute('min_doc_count');
  }
  public set minDocCount(value: string) {
    this._minDocCount = value;
  }
  public resetMinDocCount() {
    this._minDocCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minDocCountInput() {
    return this._minDocCount;
  }
}
export interface DataSchemasQueryElasticsearchBucketAggsHistogram {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#field DataSchemasQueryElasticsearch#field}
  */
  readonly field?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#settings DataSchemasQueryElasticsearch#settings}
  */
  readonly settings?: DataSchemasQueryElasticsearchBucketAggsHistogramSettings;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#type DataSchemasQueryElasticsearch#type}
  */
  readonly type: string;
}

export function dataSchemasQueryElasticsearchBucketAggsHistogramToTerraform(struct?: DataSchemasQueryElasticsearchBucketAggsHistogram | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field: cdktf.stringToTerraform(struct!.field),
    settings: dataSchemasQueryElasticsearchBucketAggsHistogramSettingsToTerraform(struct!.settings),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataSchemasQueryElasticsearchBucketAggsHistogramToHclTerraform(struct?: DataSchemasQueryElasticsearchBucketAggsHistogram | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field: {
      value: cdktf.stringToHclTerraform(struct!.field),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    settings: {
      value: dataSchemasQueryElasticsearchBucketAggsHistogramSettingsToHclTerraform(struct!.settings),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasQueryElasticsearchBucketAggsHistogramSettings",
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

export class DataSchemasQueryElasticsearchBucketAggsHistogramOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasQueryElasticsearchBucketAggsHistogram | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    if (this._settings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.settings = this._settings?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSchemasQueryElasticsearchBucketAggsHistogram | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._field = undefined;
      this._settings.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._field = value.field;
      this._settings.internalValue = value.settings;
      this._type = value.type;
    }
  }

  // field - computed: true, optional: true, required: false
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  public resetField() {
    this._field = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
  }

  // settings - computed: true, optional: true, required: false
  private _settings = new DataSchemasQueryElasticsearchBucketAggsHistogramSettingsOutputReference(this, "settings");
  public get settings() {
    return this._settings;
  }
  public putSettings(value: DataSchemasQueryElasticsearchBucketAggsHistogramSettings) {
    this._settings.internalValue = value;
  }
  public resetSettings() {
    this._settings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings.internalValue;
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
export interface DataSchemasQueryElasticsearchBucketAggsNestedSettings {
}

export function dataSchemasQueryElasticsearchBucketAggsNestedSettingsToTerraform(struct?: DataSchemasQueryElasticsearchBucketAggsNestedSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSchemasQueryElasticsearchBucketAggsNestedSettingsToHclTerraform(struct?: DataSchemasQueryElasticsearchBucketAggsNestedSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSchemasQueryElasticsearchBucketAggsNestedSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasQueryElasticsearchBucketAggsNestedSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSchemasQueryElasticsearchBucketAggsNestedSettings | cdktf.IResolvable | undefined) {
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
export interface DataSchemasQueryElasticsearchBucketAggsNested {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#field DataSchemasQueryElasticsearch#field}
  */
  readonly field?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#settings DataSchemasQueryElasticsearch#settings}
  */
  readonly settings?: DataSchemasQueryElasticsearchBucketAggsNestedSettings;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#type DataSchemasQueryElasticsearch#type}
  */
  readonly type: string;
}

export function dataSchemasQueryElasticsearchBucketAggsNestedToTerraform(struct?: DataSchemasQueryElasticsearchBucketAggsNested | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field: cdktf.stringToTerraform(struct!.field),
    settings: dataSchemasQueryElasticsearchBucketAggsNestedSettingsToTerraform(struct!.settings),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataSchemasQueryElasticsearchBucketAggsNestedToHclTerraform(struct?: DataSchemasQueryElasticsearchBucketAggsNested | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field: {
      value: cdktf.stringToHclTerraform(struct!.field),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    settings: {
      value: dataSchemasQueryElasticsearchBucketAggsNestedSettingsToHclTerraform(struct!.settings),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasQueryElasticsearchBucketAggsNestedSettings",
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

export class DataSchemasQueryElasticsearchBucketAggsNestedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasQueryElasticsearchBucketAggsNested | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    if (this._settings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.settings = this._settings?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSchemasQueryElasticsearchBucketAggsNested | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._field = undefined;
      this._settings.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._field = value.field;
      this._settings.internalValue = value.settings;
      this._type = value.type;
    }
  }

  // field - computed: true, optional: true, required: false
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  public resetField() {
    this._field = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
  }

  // settings - computed: true, optional: true, required: false
  private _settings = new DataSchemasQueryElasticsearchBucketAggsNestedSettingsOutputReference(this, "settings");
  public get settings() {
    return this._settings;
  }
  public putSettings(value: DataSchemasQueryElasticsearchBucketAggsNestedSettings) {
    this._settings.internalValue = value;
  }
  public resetSettings() {
    this._settings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings.internalValue;
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
export interface DataSchemasQueryElasticsearchBucketAggsTermsSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#min_doc_count DataSchemasQueryElasticsearch#min_doc_count}
  */
  readonly minDocCount?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#missing DataSchemasQueryElasticsearch#missing}
  */
  readonly missing?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#order DataSchemasQueryElasticsearch#order}
  */
  readonly order?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#order_by DataSchemasQueryElasticsearch#order_by}
  */
  readonly orderBy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#size DataSchemasQueryElasticsearch#size}
  */
  readonly size?: string;
}

export function dataSchemasQueryElasticsearchBucketAggsTermsSettingsToTerraform(struct?: DataSchemasQueryElasticsearchBucketAggsTermsSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    min_doc_count: cdktf.stringToTerraform(struct!.minDocCount),
    missing: cdktf.stringToTerraform(struct!.missing),
    order: cdktf.stringToTerraform(struct!.order),
    order_by: cdktf.stringToTerraform(struct!.orderBy),
    size: cdktf.stringToTerraform(struct!.size),
  }
}


export function dataSchemasQueryElasticsearchBucketAggsTermsSettingsToHclTerraform(struct?: DataSchemasQueryElasticsearchBucketAggsTermsSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    min_doc_count: {
      value: cdktf.stringToHclTerraform(struct!.minDocCount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    missing: {
      value: cdktf.stringToHclTerraform(struct!.missing),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    order: {
      value: cdktf.stringToHclTerraform(struct!.order),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    order_by: {
      value: cdktf.stringToHclTerraform(struct!.orderBy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    size: {
      value: cdktf.stringToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSchemasQueryElasticsearchBucketAggsTermsSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasQueryElasticsearchBucketAggsTermsSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._minDocCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.minDocCount = this._minDocCount;
    }
    if (this._missing !== undefined) {
      hasAnyValues = true;
      internalValueResult.missing = this._missing;
    }
    if (this._order !== undefined) {
      hasAnyValues = true;
      internalValueResult.order = this._order;
    }
    if (this._orderBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.orderBy = this._orderBy;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSchemasQueryElasticsearchBucketAggsTermsSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._minDocCount = undefined;
      this._missing = undefined;
      this._order = undefined;
      this._orderBy = undefined;
      this._size = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._minDocCount = value.minDocCount;
      this._missing = value.missing;
      this._order = value.order;
      this._orderBy = value.orderBy;
      this._size = value.size;
    }
  }

  // min_doc_count - computed: true, optional: true, required: false
  private _minDocCount?: string; 
  public get minDocCount() {
    return this.getStringAttribute('min_doc_count');
  }
  public set minDocCount(value: string) {
    this._minDocCount = value;
  }
  public resetMinDocCount() {
    this._minDocCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minDocCountInput() {
    return this._minDocCount;
  }

  // missing - computed: true, optional: true, required: false
  private _missing?: string; 
  public get missing() {
    return this.getStringAttribute('missing');
  }
  public set missing(value: string) {
    this._missing = value;
  }
  public resetMissing() {
    this._missing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get missingInput() {
    return this._missing;
  }

  // order - computed: true, optional: true, required: false
  private _order?: string; 
  public get order() {
    return this.getStringAttribute('order');
  }
  public set order(value: string) {
    this._order = value;
  }
  public resetOrder() {
    this._order = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }

  // order_by - computed: true, optional: true, required: false
  private _orderBy?: string; 
  public get orderBy() {
    return this.getStringAttribute('order_by');
  }
  public set orderBy(value: string) {
    this._orderBy = value;
  }
  public resetOrderBy() {
    this._orderBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderByInput() {
    return this._orderBy;
  }

  // size - computed: true, optional: true, required: false
  private _size?: string; 
  public get size() {
    return this.getStringAttribute('size');
  }
  public set size(value: string) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }
}
export interface DataSchemasQueryElasticsearchBucketAggsTerms {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#field DataSchemasQueryElasticsearch#field}
  */
  readonly field?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#settings DataSchemasQueryElasticsearch#settings}
  */
  readonly settings?: DataSchemasQueryElasticsearchBucketAggsTermsSettings;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#type DataSchemasQueryElasticsearch#type}
  */
  readonly type: string;
}

export function dataSchemasQueryElasticsearchBucketAggsTermsToTerraform(struct?: DataSchemasQueryElasticsearchBucketAggsTerms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field: cdktf.stringToTerraform(struct!.field),
    settings: dataSchemasQueryElasticsearchBucketAggsTermsSettingsToTerraform(struct!.settings),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataSchemasQueryElasticsearchBucketAggsTermsToHclTerraform(struct?: DataSchemasQueryElasticsearchBucketAggsTerms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field: {
      value: cdktf.stringToHclTerraform(struct!.field),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    settings: {
      value: dataSchemasQueryElasticsearchBucketAggsTermsSettingsToHclTerraform(struct!.settings),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasQueryElasticsearchBucketAggsTermsSettings",
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

export class DataSchemasQueryElasticsearchBucketAggsTermsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasQueryElasticsearchBucketAggsTerms | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    if (this._settings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.settings = this._settings?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSchemasQueryElasticsearchBucketAggsTerms | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._field = undefined;
      this._settings.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._field = value.field;
      this._settings.internalValue = value.settings;
      this._type = value.type;
    }
  }

  // field - computed: true, optional: true, required: false
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  public resetField() {
    this._field = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
  }

  // settings - computed: true, optional: true, required: false
  private _settings = new DataSchemasQueryElasticsearchBucketAggsTermsSettingsOutputReference(this, "settings");
  public get settings() {
    return this._settings;
  }
  public putSettings(value: DataSchemasQueryElasticsearchBucketAggsTermsSettings) {
    this._settings.internalValue = value;
  }
  public resetSettings() {
    this._settings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings.internalValue;
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
export interface DataSchemasQueryElasticsearchBucketAggs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#date_histogram DataSchemasQueryElasticsearch#date_histogram}
  */
  readonly dateHistogram?: DataSchemasQueryElasticsearchBucketAggsDateHistogram;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#filters DataSchemasQueryElasticsearch#filters}
  */
  readonly filters?: DataSchemasQueryElasticsearchBucketAggsFilters;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#geo_hash_grid DataSchemasQueryElasticsearch#geo_hash_grid}
  */
  readonly geoHashGrid?: DataSchemasQueryElasticsearchBucketAggsGeoHashGrid;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#histogram DataSchemasQueryElasticsearch#histogram}
  */
  readonly histogram?: DataSchemasQueryElasticsearchBucketAggsHistogram;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#nested DataSchemasQueryElasticsearch#nested}
  */
  readonly nested?: DataSchemasQueryElasticsearchBucketAggsNested;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#terms DataSchemasQueryElasticsearch#terms}
  */
  readonly terms?: DataSchemasQueryElasticsearchBucketAggsTerms;
}

export function dataSchemasQueryElasticsearchBucketAggsToTerraform(struct?: DataSchemasQueryElasticsearchBucketAggs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    date_histogram: dataSchemasQueryElasticsearchBucketAggsDateHistogramToTerraform(struct!.dateHistogram),
    filters: dataSchemasQueryElasticsearchBucketAggsFiltersToTerraform(struct!.filters),
    geo_hash_grid: dataSchemasQueryElasticsearchBucketAggsGeoHashGridToTerraform(struct!.geoHashGrid),
    histogram: dataSchemasQueryElasticsearchBucketAggsHistogramToTerraform(struct!.histogram),
    nested: dataSchemasQueryElasticsearchBucketAggsNestedToTerraform(struct!.nested),
    terms: dataSchemasQueryElasticsearchBucketAggsTermsToTerraform(struct!.terms),
  }
}


export function dataSchemasQueryElasticsearchBucketAggsToHclTerraform(struct?: DataSchemasQueryElasticsearchBucketAggs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    date_histogram: {
      value: dataSchemasQueryElasticsearchBucketAggsDateHistogramToHclTerraform(struct!.dateHistogram),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasQueryElasticsearchBucketAggsDateHistogram",
    },
    filters: {
      value: dataSchemasQueryElasticsearchBucketAggsFiltersToHclTerraform(struct!.filters),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasQueryElasticsearchBucketAggsFilters",
    },
    geo_hash_grid: {
      value: dataSchemasQueryElasticsearchBucketAggsGeoHashGridToHclTerraform(struct!.geoHashGrid),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasQueryElasticsearchBucketAggsGeoHashGrid",
    },
    histogram: {
      value: dataSchemasQueryElasticsearchBucketAggsHistogramToHclTerraform(struct!.histogram),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasQueryElasticsearchBucketAggsHistogram",
    },
    nested: {
      value: dataSchemasQueryElasticsearchBucketAggsNestedToHclTerraform(struct!.nested),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasQueryElasticsearchBucketAggsNested",
    },
    terms: {
      value: dataSchemasQueryElasticsearchBucketAggsTermsToHclTerraform(struct!.terms),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasQueryElasticsearchBucketAggsTerms",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSchemasQueryElasticsearchBucketAggsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSchemasQueryElasticsearchBucketAggs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dateHistogram?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dateHistogram = this._dateHistogram?.internalValue;
    }
    if (this._filters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filters = this._filters?.internalValue;
    }
    if (this._geoHashGrid?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.geoHashGrid = this._geoHashGrid?.internalValue;
    }
    if (this._histogram?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.histogram = this._histogram?.internalValue;
    }
    if (this._nested?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nested = this._nested?.internalValue;
    }
    if (this._terms?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.terms = this._terms?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSchemasQueryElasticsearchBucketAggs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dateHistogram.internalValue = undefined;
      this._filters.internalValue = undefined;
      this._geoHashGrid.internalValue = undefined;
      this._histogram.internalValue = undefined;
      this._nested.internalValue = undefined;
      this._terms.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dateHistogram.internalValue = value.dateHistogram;
      this._filters.internalValue = value.filters;
      this._geoHashGrid.internalValue = value.geoHashGrid;
      this._histogram.internalValue = value.histogram;
      this._nested.internalValue = value.nested;
      this._terms.internalValue = value.terms;
    }
  }

  // date_histogram - computed: true, optional: true, required: false
  private _dateHistogram = new DataSchemasQueryElasticsearchBucketAggsDateHistogramOutputReference(this, "date_histogram");
  public get dateHistogram() {
    return this._dateHistogram;
  }
  public putDateHistogram(value: DataSchemasQueryElasticsearchBucketAggsDateHistogram) {
    this._dateHistogram.internalValue = value;
  }
  public resetDateHistogram() {
    this._dateHistogram.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateHistogramInput() {
    return this._dateHistogram.internalValue;
  }

  // filters - computed: true, optional: true, required: false
  private _filters = new DataSchemasQueryElasticsearchBucketAggsFiltersOutputReference(this, "filters");
  public get filters() {
    return this._filters;
  }
  public putFilters(value: DataSchemasQueryElasticsearchBucketAggsFilters) {
    this._filters.internalValue = value;
  }
  public resetFilters() {
    this._filters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters.internalValue;
  }

  // geo_hash_grid - computed: true, optional: true, required: false
  private _geoHashGrid = new DataSchemasQueryElasticsearchBucketAggsGeoHashGridOutputReference(this, "geo_hash_grid");
  public get geoHashGrid() {
    return this._geoHashGrid;
  }
  public putGeoHashGrid(value: DataSchemasQueryElasticsearchBucketAggsGeoHashGrid) {
    this._geoHashGrid.internalValue = value;
  }
  public resetGeoHashGrid() {
    this._geoHashGrid.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoHashGridInput() {
    return this._geoHashGrid.internalValue;
  }

  // histogram - computed: true, optional: true, required: false
  private _histogram = new DataSchemasQueryElasticsearchBucketAggsHistogramOutputReference(this, "histogram");
  public get histogram() {
    return this._histogram;
  }
  public putHistogram(value: DataSchemasQueryElasticsearchBucketAggsHistogram) {
    this._histogram.internalValue = value;
  }
  public resetHistogram() {
    this._histogram.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get histogramInput() {
    return this._histogram.internalValue;
  }

  // nested - computed: true, optional: true, required: false
  private _nested = new DataSchemasQueryElasticsearchBucketAggsNestedOutputReference(this, "nested");
  public get nested() {
    return this._nested;
  }
  public putNested(value: DataSchemasQueryElasticsearchBucketAggsNested) {
    this._nested.internalValue = value;
  }
  public resetNested() {
    this._nested.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nestedInput() {
    return this._nested.internalValue;
  }

  // terms - computed: true, optional: true, required: false
  private _terms = new DataSchemasQueryElasticsearchBucketAggsTermsOutputReference(this, "terms");
  public get terms() {
    return this._terms;
  }
  public putTerms(value: DataSchemasQueryElasticsearchBucketAggsTerms) {
    this._terms.internalValue = value;
  }
  public resetTerms() {
    this._terms.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get termsInput() {
    return this._terms.internalValue;
  }
}

export class DataSchemasQueryElasticsearchBucketAggsList extends cdktf.ComplexList {
  public internalValue? : DataSchemasQueryElasticsearchBucketAggs[] | cdktf.IResolvable

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
  public get(index: number): DataSchemasQueryElasticsearchBucketAggsOutputReference {
    return new DataSchemasQueryElasticsearchBucketAggsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSchemasQueryElasticsearchMetricsCount {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#hide DataSchemasQueryElasticsearch#hide}
  */
  readonly hide?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#type DataSchemasQueryElasticsearch#type}
  */
  readonly type: string;
}

export function dataSchemasQueryElasticsearchMetricsCountToTerraform(struct?: DataSchemasQueryElasticsearchMetricsCount | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hide: cdktf.booleanToTerraform(struct!.hide),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataSchemasQueryElasticsearchMetricsCountToHclTerraform(struct?: DataSchemasQueryElasticsearchMetricsCount | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hide: {
      value: cdktf.booleanToHclTerraform(struct!.hide),
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

export class DataSchemasQueryElasticsearchMetricsCountOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasQueryElasticsearchMetricsCount | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hide !== undefined) {
      hasAnyValues = true;
      internalValueResult.hide = this._hide;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSchemasQueryElasticsearchMetricsCount | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hide = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hide = value.hide;
      this._type = value.type;
    }
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
export interface DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsAverageSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#missing DataSchemasQueryElasticsearch#missing}
  */
  readonly missing?: string;
}

export function dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsAverageSettingsToTerraform(struct?: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsAverageSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    missing: cdktf.stringToTerraform(struct!.missing),
  }
}


export function dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsAverageSettingsToHclTerraform(struct?: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsAverageSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    missing: {
      value: cdktf.stringToHclTerraform(struct!.missing),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsAverageSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsAverageSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._missing !== undefined) {
      hasAnyValues = true;
      internalValueResult.missing = this._missing;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsAverageSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._missing = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._missing = value.missing;
    }
  }

  // missing - computed: true, optional: true, required: false
  private _missing?: string; 
  public get missing() {
    return this.getStringAttribute('missing');
  }
  public set missing(value: string) {
    this._missing = value;
  }
  public resetMissing() {
    this._missing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get missingInput() {
    return this._missing;
  }
}
export interface DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsAverage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#field DataSchemasQueryElasticsearch#field}
  */
  readonly field?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#hide DataSchemasQueryElasticsearch#hide}
  */
  readonly hide?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#settings DataSchemasQueryElasticsearch#settings}
  */
  readonly settings?: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsAverageSettings;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#type DataSchemasQueryElasticsearch#type}
  */
  readonly type: string;
}

export function dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsAverageToTerraform(struct?: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsAverage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field: cdktf.stringToTerraform(struct!.field),
    hide: cdktf.booleanToTerraform(struct!.hide),
    settings: dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsAverageSettingsToTerraform(struct!.settings),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsAverageToHclTerraform(struct?: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsAverage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field: {
      value: cdktf.stringToHclTerraform(struct!.field),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hide: {
      value: cdktf.booleanToHclTerraform(struct!.hide),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    settings: {
      value: dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsAverageSettingsToHclTerraform(struct!.settings),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsAverageSettings",
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

export class DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsAverageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsAverage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    if (this._hide !== undefined) {
      hasAnyValues = true;
      internalValueResult.hide = this._hide;
    }
    if (this._settings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.settings = this._settings?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsAverage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._field = undefined;
      this._hide = undefined;
      this._settings.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._field = value.field;
      this._hide = value.hide;
      this._settings.internalValue = value.settings;
      this._type = value.type;
    }
  }

  // field - computed: true, optional: true, required: false
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  public resetField() {
    this._field = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
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

  // settings - computed: true, optional: true, required: false
  private _settings = new DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsAverageSettingsOutputReference(this, "settings");
  public get settings() {
    return this._settings;
  }
  public putSettings(value: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsAverageSettings) {
    this._settings.internalValue = value;
  }
  public resetSettings() {
    this._settings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings.internalValue;
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
export interface DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsBucketScriptPipelineVariables {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#name DataSchemasQueryElasticsearch#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#pipeline_agg DataSchemasQueryElasticsearch#pipeline_agg}
  */
  readonly pipelineAgg: string;
}

export function dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsBucketScriptPipelineVariablesToTerraform(struct?: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsBucketScriptPipelineVariables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    pipeline_agg: cdktf.stringToTerraform(struct!.pipelineAgg),
  }
}


export function dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsBucketScriptPipelineVariablesToHclTerraform(struct?: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsBucketScriptPipelineVariables | cdktf.IResolvable): any {
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
    pipeline_agg: {
      value: cdktf.stringToHclTerraform(struct!.pipelineAgg),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsBucketScriptPipelineVariablesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsBucketScriptPipelineVariables | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._pipelineAgg !== undefined) {
      hasAnyValues = true;
      internalValueResult.pipelineAgg = this._pipelineAgg;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsBucketScriptPipelineVariables | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._pipelineAgg = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._pipelineAgg = value.pipelineAgg;
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

  // pipeline_agg - computed: true, optional: false, required: true
  private _pipelineAgg?: string; 
  public get pipelineAgg() {
    return this.getStringAttribute('pipeline_agg');
  }
  public set pipelineAgg(value: string) {
    this._pipelineAgg = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineAggInput() {
    return this._pipelineAgg;
  }
}

export class DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsBucketScriptPipelineVariablesList extends cdktf.ComplexList {
  public internalValue? : DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsBucketScriptPipelineVariables[] | cdktf.IResolvable

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
  public get(index: number): DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsBucketScriptPipelineVariablesOutputReference {
    return new DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsBucketScriptPipelineVariablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsBucketScriptSettings {
  /**
  * JSON-encoded string. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#script DataSchemasQueryElasticsearch#script}
  */
  readonly script?: string;
}

export function dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsBucketScriptSettingsToTerraform(struct?: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsBucketScriptSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    script: cdktf.stringToTerraform(struct!.script),
  }
}


export function dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsBucketScriptSettingsToHclTerraform(struct?: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsBucketScriptSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    script: {
      value: cdktf.stringToHclTerraform(struct!.script),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsBucketScriptSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsBucketScriptSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._script !== undefined) {
      hasAnyValues = true;
      internalValueResult.script = this._script;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsBucketScriptSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._script = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._script = value.script;
    }
  }

  // script - computed: true, optional: true, required: false
  private _script?: string; 
  public get script() {
    return this.getStringAttribute('script');
  }
  public set script(value: string) {
    this._script = value;
  }
  public resetScript() {
    this._script = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptInput() {
    return this._script;
  }
}
export interface DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsBucketScript {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#hide DataSchemasQueryElasticsearch#hide}
  */
  readonly hide?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#pipeline_variables DataSchemasQueryElasticsearch#pipeline_variables}
  */
  readonly pipelineVariables?: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsBucketScriptPipelineVariables[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#settings DataSchemasQueryElasticsearch#settings}
  */
  readonly settings?: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsBucketScriptSettings;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#type DataSchemasQueryElasticsearch#type}
  */
  readonly type: string;
}

export function dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsBucketScriptToTerraform(struct?: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsBucketScript | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hide: cdktf.booleanToTerraform(struct!.hide),
    pipeline_variables: cdktf.listMapper(dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsBucketScriptPipelineVariablesToTerraform, false)(struct!.pipelineVariables),
    settings: dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsBucketScriptSettingsToTerraform(struct!.settings),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsBucketScriptToHclTerraform(struct?: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsBucketScript | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hide: {
      value: cdktf.booleanToHclTerraform(struct!.hide),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pipeline_variables: {
      value: cdktf.listMapperHcl(dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsBucketScriptPipelineVariablesToHclTerraform, false)(struct!.pipelineVariables),
      isBlock: true,
      type: "list",
      storageClassType: "DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsBucketScriptPipelineVariablesList",
    },
    settings: {
      value: dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsBucketScriptSettingsToHclTerraform(struct!.settings),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsBucketScriptSettings",
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

export class DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsBucketScriptOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsBucketScript | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hide !== undefined) {
      hasAnyValues = true;
      internalValueResult.hide = this._hide;
    }
    if (this._pipelineVariables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pipelineVariables = this._pipelineVariables?.internalValue;
    }
    if (this._settings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.settings = this._settings?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsBucketScript | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hide = undefined;
      this._pipelineVariables.internalValue = undefined;
      this._settings.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hide = value.hide;
      this._pipelineVariables.internalValue = value.pipelineVariables;
      this._settings.internalValue = value.settings;
      this._type = value.type;
    }
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

  // pipeline_variables - computed: true, optional: true, required: false
  private _pipelineVariables = new DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsBucketScriptPipelineVariablesList(this, "pipeline_variables", false);
  public get pipelineVariables() {
    return this._pipelineVariables;
  }
  public putPipelineVariables(value: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsBucketScriptPipelineVariables[] | cdktf.IResolvable) {
    this._pipelineVariables.internalValue = value;
  }
  public resetPipelineVariables() {
    this._pipelineVariables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineVariablesInput() {
    return this._pipelineVariables.internalValue;
  }

  // settings - computed: true, optional: true, required: false
  private _settings = new DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsBucketScriptSettingsOutputReference(this, "settings");
  public get settings() {
    return this._settings;
  }
  public putSettings(value: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsBucketScriptSettings) {
    this._settings.internalValue = value;
  }
  public resetSettings() {
    this._settings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings.internalValue;
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
export interface DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsCumulativeSumSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#format DataSchemasQueryElasticsearch#format}
  */
  readonly format?: string;
}

export function dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsCumulativeSumSettingsToTerraform(struct?: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsCumulativeSumSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    format: cdktf.stringToTerraform(struct!.format),
  }
}


export function dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsCumulativeSumSettingsToHclTerraform(struct?: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsCumulativeSumSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    format: {
      value: cdktf.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsCumulativeSumSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsCumulativeSumSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsCumulativeSumSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._format = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._format = value.format;
    }
  }

  // format - computed: true, optional: true, required: false
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  public resetFormat() {
    this._format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }
}
export interface DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsCumulativeSum {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#field DataSchemasQueryElasticsearch#field}
  */
  readonly field?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#hide DataSchemasQueryElasticsearch#hide}
  */
  readonly hide?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#pipeline_agg DataSchemasQueryElasticsearch#pipeline_agg}
  */
  readonly pipelineAgg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#settings DataSchemasQueryElasticsearch#settings}
  */
  readonly settings?: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsCumulativeSumSettings;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#type DataSchemasQueryElasticsearch#type}
  */
  readonly type: string;
}

export function dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsCumulativeSumToTerraform(struct?: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsCumulativeSum | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field: cdktf.stringToTerraform(struct!.field),
    hide: cdktf.booleanToTerraform(struct!.hide),
    pipeline_agg: cdktf.stringToTerraform(struct!.pipelineAgg),
    settings: dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsCumulativeSumSettingsToTerraform(struct!.settings),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsCumulativeSumToHclTerraform(struct?: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsCumulativeSum | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field: {
      value: cdktf.stringToHclTerraform(struct!.field),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hide: {
      value: cdktf.booleanToHclTerraform(struct!.hide),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pipeline_agg: {
      value: cdktf.stringToHclTerraform(struct!.pipelineAgg),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    settings: {
      value: dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsCumulativeSumSettingsToHclTerraform(struct!.settings),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsCumulativeSumSettings",
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

export class DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsCumulativeSumOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsCumulativeSum | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    if (this._hide !== undefined) {
      hasAnyValues = true;
      internalValueResult.hide = this._hide;
    }
    if (this._pipelineAgg !== undefined) {
      hasAnyValues = true;
      internalValueResult.pipelineAgg = this._pipelineAgg;
    }
    if (this._settings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.settings = this._settings?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsCumulativeSum | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._field = undefined;
      this._hide = undefined;
      this._pipelineAgg = undefined;
      this._settings.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._field = value.field;
      this._hide = value.hide;
      this._pipelineAgg = value.pipelineAgg;
      this._settings.internalValue = value.settings;
      this._type = value.type;
    }
  }

  // field - computed: true, optional: true, required: false
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  public resetField() {
    this._field = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
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

  // pipeline_agg - computed: true, optional: true, required: false
  private _pipelineAgg?: string; 
  public get pipelineAgg() {
    return this.getStringAttribute('pipeline_agg');
  }
  public set pipelineAgg(value: string) {
    this._pipelineAgg = value;
  }
  public resetPipelineAgg() {
    this._pipelineAgg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineAggInput() {
    return this._pipelineAgg;
  }

  // settings - computed: true, optional: true, required: false
  private _settings = new DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsCumulativeSumSettingsOutputReference(this, "settings");
  public get settings() {
    return this._settings;
  }
  public putSettings(value: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsCumulativeSumSettings) {
    this._settings.internalValue = value;
  }
  public resetSettings() {
    this._settings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings.internalValue;
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
export interface DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsDerivativeSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#unit DataSchemasQueryElasticsearch#unit}
  */
  readonly unit?: string;
}

export function dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsDerivativeSettingsToTerraform(struct?: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsDerivativeSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
  }
}


export function dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsDerivativeSettingsToHclTerraform(struct?: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsDerivativeSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsDerivativeSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsDerivativeSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsDerivativeSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._unit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._unit = value.unit;
    }
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
}
export interface DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsDerivative {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#field DataSchemasQueryElasticsearch#field}
  */
  readonly field?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#hide DataSchemasQueryElasticsearch#hide}
  */
  readonly hide?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#pipeline_agg DataSchemasQueryElasticsearch#pipeline_agg}
  */
  readonly pipelineAgg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#settings DataSchemasQueryElasticsearch#settings}
  */
  readonly settings?: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsDerivativeSettings;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#type DataSchemasQueryElasticsearch#type}
  */
  readonly type: string;
}

export function dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsDerivativeToTerraform(struct?: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsDerivative | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field: cdktf.stringToTerraform(struct!.field),
    hide: cdktf.booleanToTerraform(struct!.hide),
    pipeline_agg: cdktf.stringToTerraform(struct!.pipelineAgg),
    settings: dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsDerivativeSettingsToTerraform(struct!.settings),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsDerivativeToHclTerraform(struct?: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsDerivative | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field: {
      value: cdktf.stringToHclTerraform(struct!.field),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hide: {
      value: cdktf.booleanToHclTerraform(struct!.hide),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pipeline_agg: {
      value: cdktf.stringToHclTerraform(struct!.pipelineAgg),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    settings: {
      value: dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsDerivativeSettingsToHclTerraform(struct!.settings),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsDerivativeSettings",
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

export class DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsDerivativeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsDerivative | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    if (this._hide !== undefined) {
      hasAnyValues = true;
      internalValueResult.hide = this._hide;
    }
    if (this._pipelineAgg !== undefined) {
      hasAnyValues = true;
      internalValueResult.pipelineAgg = this._pipelineAgg;
    }
    if (this._settings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.settings = this._settings?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsDerivative | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._field = undefined;
      this._hide = undefined;
      this._pipelineAgg = undefined;
      this._settings.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._field = value.field;
      this._hide = value.hide;
      this._pipelineAgg = value.pipelineAgg;
      this._settings.internalValue = value.settings;
      this._type = value.type;
    }
  }

  // field - computed: true, optional: true, required: false
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  public resetField() {
    this._field = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
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

  // pipeline_agg - computed: true, optional: true, required: false
  private _pipelineAgg?: string; 
  public get pipelineAgg() {
    return this.getStringAttribute('pipeline_agg');
  }
  public set pipelineAgg(value: string) {
    this._pipelineAgg = value;
  }
  public resetPipelineAgg() {
    this._pipelineAgg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineAggInput() {
    return this._pipelineAgg;
  }

  // settings - computed: true, optional: true, required: false
  private _settings = new DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsDerivativeSettingsOutputReference(this, "settings");
  public get settings() {
    return this._settings;
  }
  public putSettings(value: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsDerivativeSettings) {
    this._settings.internalValue = value;
  }
  public resetSettings() {
    this._settings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings.internalValue;
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
export interface DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsExtendedStatsMeta {
}

export function dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsExtendedStatsMetaToTerraform(struct?: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsExtendedStatsMeta | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsExtendedStatsMetaToHclTerraform(struct?: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsExtendedStatsMeta | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsExtendedStatsMetaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsExtendedStatsMeta | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsExtendedStatsMeta | cdktf.IResolvable | undefined) {
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
export interface DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsExtendedStatsSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#missing DataSchemasQueryElasticsearch#missing}
  */
  readonly missing?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#sigma DataSchemasQueryElasticsearch#sigma}
  */
  readonly sigma?: string;
}

export function dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsExtendedStatsSettingsToTerraform(struct?: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsExtendedStatsSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    missing: cdktf.stringToTerraform(struct!.missing),
    sigma: cdktf.stringToTerraform(struct!.sigma),
  }
}


export function dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsExtendedStatsSettingsToHclTerraform(struct?: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsExtendedStatsSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    missing: {
      value: cdktf.stringToHclTerraform(struct!.missing),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sigma: {
      value: cdktf.stringToHclTerraform(struct!.sigma),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsExtendedStatsSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsExtendedStatsSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._missing !== undefined) {
      hasAnyValues = true;
      internalValueResult.missing = this._missing;
    }
    if (this._sigma !== undefined) {
      hasAnyValues = true;
      internalValueResult.sigma = this._sigma;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsExtendedStatsSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._missing = undefined;
      this._sigma = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._missing = value.missing;
      this._sigma = value.sigma;
    }
  }

  // missing - computed: true, optional: true, required: false
  private _missing?: string; 
  public get missing() {
    return this.getStringAttribute('missing');
  }
  public set missing(value: string) {
    this._missing = value;
  }
  public resetMissing() {
    this._missing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get missingInput() {
    return this._missing;
  }

  // sigma - computed: true, optional: true, required: false
  private _sigma?: string; 
  public get sigma() {
    return this.getStringAttribute('sigma');
  }
  public set sigma(value: string) {
    this._sigma = value;
  }
  public resetSigma() {
    this._sigma = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sigmaInput() {
    return this._sigma;
  }
}
export interface DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsExtendedStats {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#field DataSchemasQueryElasticsearch#field}
  */
  readonly field?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#hide DataSchemasQueryElasticsearch#hide}
  */
  readonly hide?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#meta DataSchemasQueryElasticsearch#meta}
  */
  readonly meta?: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsExtendedStatsMeta;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#settings DataSchemasQueryElasticsearch#settings}
  */
  readonly settings?: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsExtendedStatsSettings;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#type DataSchemasQueryElasticsearch#type}
  */
  readonly type: string;
}

export function dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsExtendedStatsToTerraform(struct?: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsExtendedStats | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field: cdktf.stringToTerraform(struct!.field),
    hide: cdktf.booleanToTerraform(struct!.hide),
    meta: dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsExtendedStatsMetaToTerraform(struct!.meta),
    settings: dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsExtendedStatsSettingsToTerraform(struct!.settings),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsExtendedStatsToHclTerraform(struct?: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsExtendedStats | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field: {
      value: cdktf.stringToHclTerraform(struct!.field),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hide: {
      value: cdktf.booleanToHclTerraform(struct!.hide),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    meta: {
      value: dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsExtendedStatsMetaToHclTerraform(struct!.meta),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsExtendedStatsMeta",
    },
    settings: {
      value: dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsExtendedStatsSettingsToHclTerraform(struct!.settings),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsExtendedStatsSettings",
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

export class DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsExtendedStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsExtendedStats | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    if (this._hide !== undefined) {
      hasAnyValues = true;
      internalValueResult.hide = this._hide;
    }
    if (this._meta?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.meta = this._meta?.internalValue;
    }
    if (this._settings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.settings = this._settings?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsExtendedStats | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._field = undefined;
      this._hide = undefined;
      this._meta.internalValue = undefined;
      this._settings.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._field = value.field;
      this._hide = value.hide;
      this._meta.internalValue = value.meta;
      this._settings.internalValue = value.settings;
      this._type = value.type;
    }
  }

  // field - computed: true, optional: true, required: false
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  public resetField() {
    this._field = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
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

  // meta - computed: true, optional: true, required: false
  private _meta = new DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsExtendedStatsMetaOutputReference(this, "meta");
  public get meta() {
    return this._meta;
  }
  public putMeta(value: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsExtendedStatsMeta) {
    this._meta.internalValue = value;
  }
  public resetMeta() {
    this._meta.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metaInput() {
    return this._meta.internalValue;
  }

  // settings - computed: true, optional: true, required: false
  private _settings = new DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsExtendedStatsSettingsOutputReference(this, "settings");
  public get settings() {
    return this._settings;
  }
  public putSettings(value: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsExtendedStatsSettings) {
    this._settings.internalValue = value;
  }
  public resetSettings() {
    this._settings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings.internalValue;
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
export interface DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsLogsSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#limit DataSchemasQueryElasticsearch#limit}
  */
  readonly limit?: string;
}

export function dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsLogsSettingsToTerraform(struct?: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsLogsSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limit: cdktf.stringToTerraform(struct!.limit),
  }
}


export function dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsLogsSettingsToHclTerraform(struct?: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsLogsSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    limit: {
      value: cdktf.stringToHclTerraform(struct!.limit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsLogsSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsLogsSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsLogsSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._limit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._limit = value.limit;
    }
  }

  // limit - computed: true, optional: true, required: false
  private _limit?: string; 
  public get limit() {
    return this.getStringAttribute('limit');
  }
  public set limit(value: string) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }
}
export interface DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsLogs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#hide DataSchemasQueryElasticsearch#hide}
  */
  readonly hide?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#settings DataSchemasQueryElasticsearch#settings}
  */
  readonly settings?: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsLogsSettings;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#type DataSchemasQueryElasticsearch#type}
  */
  readonly type: string;
}

export function dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsLogsToTerraform(struct?: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsLogs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hide: cdktf.booleanToTerraform(struct!.hide),
    settings: dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsLogsSettingsToTerraform(struct!.settings),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsLogsToHclTerraform(struct?: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsLogs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hide: {
      value: cdktf.booleanToHclTerraform(struct!.hide),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    settings: {
      value: dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsLogsSettingsToHclTerraform(struct!.settings),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsLogsSettings",
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

export class DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsLogsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsLogs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hide !== undefined) {
      hasAnyValues = true;
      internalValueResult.hide = this._hide;
    }
    if (this._settings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.settings = this._settings?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsLogs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hide = undefined;
      this._settings.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hide = value.hide;
      this._settings.internalValue = value.settings;
      this._type = value.type;
    }
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

  // settings - computed: true, optional: true, required: false
  private _settings = new DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsLogsSettingsOutputReference(this, "settings");
  public get settings() {
    return this._settings;
  }
  public putSettings(value: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsLogsSettings) {
    this._settings.internalValue = value;
  }
  public resetSettings() {
    this._settings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings.internalValue;
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
export interface DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsMaxSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#missing DataSchemasQueryElasticsearch#missing}
  */
  readonly missing?: string;
}

export function dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsMaxSettingsToTerraform(struct?: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsMaxSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    missing: cdktf.stringToTerraform(struct!.missing),
  }
}


export function dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsMaxSettingsToHclTerraform(struct?: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsMaxSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    missing: {
      value: cdktf.stringToHclTerraform(struct!.missing),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsMaxSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsMaxSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._missing !== undefined) {
      hasAnyValues = true;
      internalValueResult.missing = this._missing;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsMaxSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._missing = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._missing = value.missing;
    }
  }

  // missing - computed: true, optional: true, required: false
  private _missing?: string; 
  public get missing() {
    return this.getStringAttribute('missing');
  }
  public set missing(value: string) {
    this._missing = value;
  }
  public resetMissing() {
    this._missing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get missingInput() {
    return this._missing;
  }
}
export interface DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsMax {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#field DataSchemasQueryElasticsearch#field}
  */
  readonly field?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#hide DataSchemasQueryElasticsearch#hide}
  */
  readonly hide?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#settings DataSchemasQueryElasticsearch#settings}
  */
  readonly settings?: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsMaxSettings;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#type DataSchemasQueryElasticsearch#type}
  */
  readonly type: string;
}

export function dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsMaxToTerraform(struct?: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsMax | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field: cdktf.stringToTerraform(struct!.field),
    hide: cdktf.booleanToTerraform(struct!.hide),
    settings: dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsMaxSettingsToTerraform(struct!.settings),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsMaxToHclTerraform(struct?: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsMax | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field: {
      value: cdktf.stringToHclTerraform(struct!.field),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hide: {
      value: cdktf.booleanToHclTerraform(struct!.hide),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    settings: {
      value: dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsMaxSettingsToHclTerraform(struct!.settings),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsMaxSettings",
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

export class DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsMaxOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsMax | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    if (this._hide !== undefined) {
      hasAnyValues = true;
      internalValueResult.hide = this._hide;
    }
    if (this._settings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.settings = this._settings?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsMax | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._field = undefined;
      this._hide = undefined;
      this._settings.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._field = value.field;
      this._hide = value.hide;
      this._settings.internalValue = value.settings;
      this._type = value.type;
    }
  }

  // field - computed: true, optional: true, required: false
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  public resetField() {
    this._field = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
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

  // settings - computed: true, optional: true, required: false
  private _settings = new DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsMaxSettingsOutputReference(this, "settings");
  public get settings() {
    return this._settings;
  }
  public putSettings(value: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsMaxSettings) {
    this._settings.internalValue = value;
  }
  public resetSettings() {
    this._settings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings.internalValue;
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
export interface DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsMinSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#missing DataSchemasQueryElasticsearch#missing}
  */
  readonly missing?: string;
}

export function dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsMinSettingsToTerraform(struct?: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsMinSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    missing: cdktf.stringToTerraform(struct!.missing),
  }
}


export function dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsMinSettingsToHclTerraform(struct?: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsMinSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    missing: {
      value: cdktf.stringToHclTerraform(struct!.missing),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsMinSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsMinSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._missing !== undefined) {
      hasAnyValues = true;
      internalValueResult.missing = this._missing;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsMinSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._missing = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._missing = value.missing;
    }
  }

  // missing - computed: true, optional: true, required: false
  private _missing?: string; 
  public get missing() {
    return this.getStringAttribute('missing');
  }
  public set missing(value: string) {
    this._missing = value;
  }
  public resetMissing() {
    this._missing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get missingInput() {
    return this._missing;
  }
}
export interface DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsMin {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#field DataSchemasQueryElasticsearch#field}
  */
  readonly field?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#hide DataSchemasQueryElasticsearch#hide}
  */
  readonly hide?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#settings DataSchemasQueryElasticsearch#settings}
  */
  readonly settings?: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsMinSettings;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#type DataSchemasQueryElasticsearch#type}
  */
  readonly type: string;
}

export function dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsMinToTerraform(struct?: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsMin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field: cdktf.stringToTerraform(struct!.field),
    hide: cdktf.booleanToTerraform(struct!.hide),
    settings: dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsMinSettingsToTerraform(struct!.settings),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsMinToHclTerraform(struct?: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsMin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field: {
      value: cdktf.stringToHclTerraform(struct!.field),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hide: {
      value: cdktf.booleanToHclTerraform(struct!.hide),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    settings: {
      value: dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsMinSettingsToHclTerraform(struct!.settings),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsMinSettings",
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

export class DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsMinOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsMin | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    if (this._hide !== undefined) {
      hasAnyValues = true;
      internalValueResult.hide = this._hide;
    }
    if (this._settings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.settings = this._settings?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsMin | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._field = undefined;
      this._hide = undefined;
      this._settings.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._field = value.field;
      this._hide = value.hide;
      this._settings.internalValue = value.settings;
      this._type = value.type;
    }
  }

  // field - computed: true, optional: true, required: false
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  public resetField() {
    this._field = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
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

  // settings - computed: true, optional: true, required: false
  private _settings = new DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsMinSettingsOutputReference(this, "settings");
  public get settings() {
    return this._settings;
  }
  public putSettings(value: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsMinSettings) {
    this._settings.internalValue = value;
  }
  public resetSettings() {
    this._settings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings.internalValue;
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
export interface DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsMovingAverageSettings {
}

export function dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsMovingAverageSettingsToTerraform(struct?: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsMovingAverageSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsMovingAverageSettingsToHclTerraform(struct?: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsMovingAverageSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsMovingAverageSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsMovingAverageSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsMovingAverageSettings | cdktf.IResolvable | undefined) {
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
export interface DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsMovingAverage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#field DataSchemasQueryElasticsearch#field}
  */
  readonly field?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#hide DataSchemasQueryElasticsearch#hide}
  */
  readonly hide?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#pipeline_agg DataSchemasQueryElasticsearch#pipeline_agg}
  */
  readonly pipelineAgg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#settings DataSchemasQueryElasticsearch#settings}
  */
  readonly settings?: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsMovingAverageSettings;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#type DataSchemasQueryElasticsearch#type}
  */
  readonly type: string;
}

export function dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsMovingAverageToTerraform(struct?: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsMovingAverage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field: cdktf.stringToTerraform(struct!.field),
    hide: cdktf.booleanToTerraform(struct!.hide),
    pipeline_agg: cdktf.stringToTerraform(struct!.pipelineAgg),
    settings: dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsMovingAverageSettingsToTerraform(struct!.settings),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsMovingAverageToHclTerraform(struct?: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsMovingAverage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field: {
      value: cdktf.stringToHclTerraform(struct!.field),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hide: {
      value: cdktf.booleanToHclTerraform(struct!.hide),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pipeline_agg: {
      value: cdktf.stringToHclTerraform(struct!.pipelineAgg),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    settings: {
      value: dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsMovingAverageSettingsToHclTerraform(struct!.settings),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsMovingAverageSettings",
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

export class DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsMovingAverageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsMovingAverage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    if (this._hide !== undefined) {
      hasAnyValues = true;
      internalValueResult.hide = this._hide;
    }
    if (this._pipelineAgg !== undefined) {
      hasAnyValues = true;
      internalValueResult.pipelineAgg = this._pipelineAgg;
    }
    if (this._settings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.settings = this._settings?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsMovingAverage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._field = undefined;
      this._hide = undefined;
      this._pipelineAgg = undefined;
      this._settings.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._field = value.field;
      this._hide = value.hide;
      this._pipelineAgg = value.pipelineAgg;
      this._settings.internalValue = value.settings;
      this._type = value.type;
    }
  }

  // field - computed: true, optional: true, required: false
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  public resetField() {
    this._field = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
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

  // pipeline_agg - computed: true, optional: true, required: false
  private _pipelineAgg?: string; 
  public get pipelineAgg() {
    return this.getStringAttribute('pipeline_agg');
  }
  public set pipelineAgg(value: string) {
    this._pipelineAgg = value;
  }
  public resetPipelineAgg() {
    this._pipelineAgg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineAggInput() {
    return this._pipelineAgg;
  }

  // settings - computed: true, optional: true, required: false
  private _settings = new DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsMovingAverageSettingsOutputReference(this, "settings");
  public get settings() {
    return this._settings;
  }
  public putSettings(value: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsMovingAverageSettings) {
    this._settings.internalValue = value;
  }
  public resetSettings() {
    this._settings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings.internalValue;
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
export interface DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsMovingFunctionSettings {
  /**
  * JSON-encoded string. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#script DataSchemasQueryElasticsearch#script}
  */
  readonly script?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#shift DataSchemasQueryElasticsearch#shift}
  */
  readonly shift?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#window DataSchemasQueryElasticsearch#window}
  */
  readonly window?: string;
}

export function dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsMovingFunctionSettingsToTerraform(struct?: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsMovingFunctionSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    script: cdktf.stringToTerraform(struct!.script),
    shift: cdktf.stringToTerraform(struct!.shift),
    window: cdktf.stringToTerraform(struct!.window),
  }
}


export function dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsMovingFunctionSettingsToHclTerraform(struct?: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsMovingFunctionSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    script: {
      value: cdktf.stringToHclTerraform(struct!.script),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shift: {
      value: cdktf.stringToHclTerraform(struct!.shift),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    window: {
      value: cdktf.stringToHclTerraform(struct!.window),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsMovingFunctionSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsMovingFunctionSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._script !== undefined) {
      hasAnyValues = true;
      internalValueResult.script = this._script;
    }
    if (this._shift !== undefined) {
      hasAnyValues = true;
      internalValueResult.shift = this._shift;
    }
    if (this._window !== undefined) {
      hasAnyValues = true;
      internalValueResult.window = this._window;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsMovingFunctionSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._script = undefined;
      this._shift = undefined;
      this._window = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._script = value.script;
      this._shift = value.shift;
      this._window = value.window;
    }
  }

  // script - computed: true, optional: true, required: false
  private _script?: string; 
  public get script() {
    return this.getStringAttribute('script');
  }
  public set script(value: string) {
    this._script = value;
  }
  public resetScript() {
    this._script = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptInput() {
    return this._script;
  }

  // shift - computed: true, optional: true, required: false
  private _shift?: string; 
  public get shift() {
    return this.getStringAttribute('shift');
  }
  public set shift(value: string) {
    this._shift = value;
  }
  public resetShift() {
    this._shift = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shiftInput() {
    return this._shift;
  }

  // window - computed: true, optional: true, required: false
  private _window?: string; 
  public get window() {
    return this.getStringAttribute('window');
  }
  public set window(value: string) {
    this._window = value;
  }
  public resetWindow() {
    this._window = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowInput() {
    return this._window;
  }
}
export interface DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsMovingFunction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#field DataSchemasQueryElasticsearch#field}
  */
  readonly field?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#hide DataSchemasQueryElasticsearch#hide}
  */
  readonly hide?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#pipeline_agg DataSchemasQueryElasticsearch#pipeline_agg}
  */
  readonly pipelineAgg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#settings DataSchemasQueryElasticsearch#settings}
  */
  readonly settings?: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsMovingFunctionSettings;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#type DataSchemasQueryElasticsearch#type}
  */
  readonly type: string;
}

export function dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsMovingFunctionToTerraform(struct?: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsMovingFunction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field: cdktf.stringToTerraform(struct!.field),
    hide: cdktf.booleanToTerraform(struct!.hide),
    pipeline_agg: cdktf.stringToTerraform(struct!.pipelineAgg),
    settings: dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsMovingFunctionSettingsToTerraform(struct!.settings),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsMovingFunctionToHclTerraform(struct?: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsMovingFunction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field: {
      value: cdktf.stringToHclTerraform(struct!.field),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hide: {
      value: cdktf.booleanToHclTerraform(struct!.hide),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pipeline_agg: {
      value: cdktf.stringToHclTerraform(struct!.pipelineAgg),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    settings: {
      value: dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsMovingFunctionSettingsToHclTerraform(struct!.settings),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsMovingFunctionSettings",
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

export class DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsMovingFunctionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsMovingFunction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    if (this._hide !== undefined) {
      hasAnyValues = true;
      internalValueResult.hide = this._hide;
    }
    if (this._pipelineAgg !== undefined) {
      hasAnyValues = true;
      internalValueResult.pipelineAgg = this._pipelineAgg;
    }
    if (this._settings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.settings = this._settings?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsMovingFunction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._field = undefined;
      this._hide = undefined;
      this._pipelineAgg = undefined;
      this._settings.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._field = value.field;
      this._hide = value.hide;
      this._pipelineAgg = value.pipelineAgg;
      this._settings.internalValue = value.settings;
      this._type = value.type;
    }
  }

  // field - computed: true, optional: true, required: false
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  public resetField() {
    this._field = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
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

  // pipeline_agg - computed: true, optional: true, required: false
  private _pipelineAgg?: string; 
  public get pipelineAgg() {
    return this.getStringAttribute('pipeline_agg');
  }
  public set pipelineAgg(value: string) {
    this._pipelineAgg = value;
  }
  public resetPipelineAgg() {
    this._pipelineAgg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineAggInput() {
    return this._pipelineAgg;
  }

  // settings - computed: true, optional: true, required: false
  private _settings = new DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsMovingFunctionSettingsOutputReference(this, "settings");
  public get settings() {
    return this._settings;
  }
  public putSettings(value: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsMovingFunctionSettings) {
    this._settings.internalValue = value;
  }
  public resetSettings() {
    this._settings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings.internalValue;
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
export interface DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsPercentilesSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#missing DataSchemasQueryElasticsearch#missing}
  */
  readonly missing?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#percents DataSchemasQueryElasticsearch#percents}
  */
  readonly percents?: string[];
}

export function dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsPercentilesSettingsToTerraform(struct?: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsPercentilesSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    missing: cdktf.stringToTerraform(struct!.missing),
    percents: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.percents),
  }
}


export function dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsPercentilesSettingsToHclTerraform(struct?: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsPercentilesSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    missing: {
      value: cdktf.stringToHclTerraform(struct!.missing),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    percents: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.percents),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsPercentilesSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsPercentilesSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._missing !== undefined) {
      hasAnyValues = true;
      internalValueResult.missing = this._missing;
    }
    if (this._percents !== undefined) {
      hasAnyValues = true;
      internalValueResult.percents = this._percents;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsPercentilesSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._missing = undefined;
      this._percents = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._missing = value.missing;
      this._percents = value.percents;
    }
  }

  // missing - computed: true, optional: true, required: false
  private _missing?: string; 
  public get missing() {
    return this.getStringAttribute('missing');
  }
  public set missing(value: string) {
    this._missing = value;
  }
  public resetMissing() {
    this._missing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get missingInput() {
    return this._missing;
  }

  // percents - computed: true, optional: true, required: false
  private _percents?: string[]; 
  public get percents() {
    return this.getListAttribute('percents');
  }
  public set percents(value: string[]) {
    this._percents = value;
  }
  public resetPercents() {
    this._percents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentsInput() {
    return this._percents;
  }
}
export interface DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsPercentiles {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#field DataSchemasQueryElasticsearch#field}
  */
  readonly field?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#hide DataSchemasQueryElasticsearch#hide}
  */
  readonly hide?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#settings DataSchemasQueryElasticsearch#settings}
  */
  readonly settings?: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsPercentilesSettings;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#type DataSchemasQueryElasticsearch#type}
  */
  readonly type: string;
}

export function dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsPercentilesToTerraform(struct?: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsPercentiles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field: cdktf.stringToTerraform(struct!.field),
    hide: cdktf.booleanToTerraform(struct!.hide),
    settings: dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsPercentilesSettingsToTerraform(struct!.settings),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsPercentilesToHclTerraform(struct?: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsPercentiles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field: {
      value: cdktf.stringToHclTerraform(struct!.field),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hide: {
      value: cdktf.booleanToHclTerraform(struct!.hide),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    settings: {
      value: dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsPercentilesSettingsToHclTerraform(struct!.settings),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsPercentilesSettings",
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

export class DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsPercentilesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsPercentiles | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    if (this._hide !== undefined) {
      hasAnyValues = true;
      internalValueResult.hide = this._hide;
    }
    if (this._settings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.settings = this._settings?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsPercentiles | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._field = undefined;
      this._hide = undefined;
      this._settings.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._field = value.field;
      this._hide = value.hide;
      this._settings.internalValue = value.settings;
      this._type = value.type;
    }
  }

  // field - computed: true, optional: true, required: false
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  public resetField() {
    this._field = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
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

  // settings - computed: true, optional: true, required: false
  private _settings = new DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsPercentilesSettingsOutputReference(this, "settings");
  public get settings() {
    return this._settings;
  }
  public putSettings(value: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsPercentilesSettings) {
    this._settings.internalValue = value;
  }
  public resetSettings() {
    this._settings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings.internalValue;
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
export interface DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsRateSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#mode DataSchemasQueryElasticsearch#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#unit DataSchemasQueryElasticsearch#unit}
  */
  readonly unit?: string;
}

export function dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsRateSettingsToTerraform(struct?: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsRateSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
    unit: cdktf.stringToTerraform(struct!.unit),
  }
}


export function dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsRateSettingsToHclTerraform(struct?: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsRateSettings | cdktf.IResolvable): any {
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
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsRateSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsRateSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsRateSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mode = undefined;
      this._unit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mode = value.mode;
      this._unit = value.unit;
    }
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
}
export interface DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsRate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#field DataSchemasQueryElasticsearch#field}
  */
  readonly field?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#hide DataSchemasQueryElasticsearch#hide}
  */
  readonly hide?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#settings DataSchemasQueryElasticsearch#settings}
  */
  readonly settings?: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsRateSettings;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#type DataSchemasQueryElasticsearch#type}
  */
  readonly type: string;
}

export function dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsRateToTerraform(struct?: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsRate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field: cdktf.stringToTerraform(struct!.field),
    hide: cdktf.booleanToTerraform(struct!.hide),
    settings: dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsRateSettingsToTerraform(struct!.settings),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsRateToHclTerraform(struct?: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsRate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field: {
      value: cdktf.stringToHclTerraform(struct!.field),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hide: {
      value: cdktf.booleanToHclTerraform(struct!.hide),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    settings: {
      value: dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsRateSettingsToHclTerraform(struct!.settings),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsRateSettings",
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

export class DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsRateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsRate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    if (this._hide !== undefined) {
      hasAnyValues = true;
      internalValueResult.hide = this._hide;
    }
    if (this._settings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.settings = this._settings?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsRate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._field = undefined;
      this._hide = undefined;
      this._settings.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._field = value.field;
      this._hide = value.hide;
      this._settings.internalValue = value.settings;
      this._type = value.type;
    }
  }

  // field - computed: true, optional: true, required: false
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  public resetField() {
    this._field = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
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

  // settings - computed: true, optional: true, required: false
  private _settings = new DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsRateSettingsOutputReference(this, "settings");
  public get settings() {
    return this._settings;
  }
  public putSettings(value: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsRateSettings) {
    this._settings.internalValue = value;
  }
  public resetSettings() {
    this._settings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings.internalValue;
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
export interface DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsRawDataSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#size DataSchemasQueryElasticsearch#size}
  */
  readonly size?: string;
}

export function dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsRawDataSettingsToTerraform(struct?: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsRawDataSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    size: cdktf.stringToTerraform(struct!.size),
  }
}


export function dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsRawDataSettingsToHclTerraform(struct?: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsRawDataSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    size: {
      value: cdktf.stringToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsRawDataSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsRawDataSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsRawDataSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._size = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._size = value.size;
    }
  }

  // size - computed: true, optional: true, required: false
  private _size?: string; 
  public get size() {
    return this.getStringAttribute('size');
  }
  public set size(value: string) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }
}
export interface DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsRawData {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#hide DataSchemasQueryElasticsearch#hide}
  */
  readonly hide?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#settings DataSchemasQueryElasticsearch#settings}
  */
  readonly settings?: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsRawDataSettings;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#type DataSchemasQueryElasticsearch#type}
  */
  readonly type: string;
}

export function dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsRawDataToTerraform(struct?: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsRawData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hide: cdktf.booleanToTerraform(struct!.hide),
    settings: dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsRawDataSettingsToTerraform(struct!.settings),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsRawDataToHclTerraform(struct?: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsRawData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hide: {
      value: cdktf.booleanToHclTerraform(struct!.hide),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    settings: {
      value: dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsRawDataSettingsToHclTerraform(struct!.settings),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsRawDataSettings",
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

export class DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsRawDataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsRawData | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hide !== undefined) {
      hasAnyValues = true;
      internalValueResult.hide = this._hide;
    }
    if (this._settings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.settings = this._settings?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsRawData | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hide = undefined;
      this._settings.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hide = value.hide;
      this._settings.internalValue = value.settings;
      this._type = value.type;
    }
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

  // settings - computed: true, optional: true, required: false
  private _settings = new DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsRawDataSettingsOutputReference(this, "settings");
  public get settings() {
    return this._settings;
  }
  public putSettings(value: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsRawDataSettings) {
    this._settings.internalValue = value;
  }
  public resetSettings() {
    this._settings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings.internalValue;
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
export interface DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsRawDocumentSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#size DataSchemasQueryElasticsearch#size}
  */
  readonly size?: string;
}

export function dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsRawDocumentSettingsToTerraform(struct?: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsRawDocumentSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    size: cdktf.stringToTerraform(struct!.size),
  }
}


export function dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsRawDocumentSettingsToHclTerraform(struct?: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsRawDocumentSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    size: {
      value: cdktf.stringToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsRawDocumentSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsRawDocumentSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsRawDocumentSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._size = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._size = value.size;
    }
  }

  // size - computed: true, optional: true, required: false
  private _size?: string; 
  public get size() {
    return this.getStringAttribute('size');
  }
  public set size(value: string) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }
}
export interface DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsRawDocument {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#hide DataSchemasQueryElasticsearch#hide}
  */
  readonly hide?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#settings DataSchemasQueryElasticsearch#settings}
  */
  readonly settings?: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsRawDocumentSettings;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#type DataSchemasQueryElasticsearch#type}
  */
  readonly type: string;
}

export function dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsRawDocumentToTerraform(struct?: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsRawDocument | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hide: cdktf.booleanToTerraform(struct!.hide),
    settings: dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsRawDocumentSettingsToTerraform(struct!.settings),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsRawDocumentToHclTerraform(struct?: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsRawDocument | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hide: {
      value: cdktf.booleanToHclTerraform(struct!.hide),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    settings: {
      value: dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsRawDocumentSettingsToHclTerraform(struct!.settings),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsRawDocumentSettings",
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

export class DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsRawDocumentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsRawDocument | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hide !== undefined) {
      hasAnyValues = true;
      internalValueResult.hide = this._hide;
    }
    if (this._settings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.settings = this._settings?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsRawDocument | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hide = undefined;
      this._settings.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hide = value.hide;
      this._settings.internalValue = value.settings;
      this._type = value.type;
    }
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

  // settings - computed: true, optional: true, required: false
  private _settings = new DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsRawDocumentSettingsOutputReference(this, "settings");
  public get settings() {
    return this._settings;
  }
  public putSettings(value: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsRawDocumentSettings) {
    this._settings.internalValue = value;
  }
  public resetSettings() {
    this._settings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings.internalValue;
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
export interface DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsSerialDiffSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#lag DataSchemasQueryElasticsearch#lag}
  */
  readonly lag?: string;
}

export function dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsSerialDiffSettingsToTerraform(struct?: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsSerialDiffSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lag: cdktf.stringToTerraform(struct!.lag),
  }
}


export function dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsSerialDiffSettingsToHclTerraform(struct?: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsSerialDiffSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    lag: {
      value: cdktf.stringToHclTerraform(struct!.lag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsSerialDiffSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsSerialDiffSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lag !== undefined) {
      hasAnyValues = true;
      internalValueResult.lag = this._lag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsSerialDiffSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._lag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._lag = value.lag;
    }
  }

  // lag - computed: true, optional: true, required: false
  private _lag?: string; 
  public get lag() {
    return this.getStringAttribute('lag');
  }
  public set lag(value: string) {
    this._lag = value;
  }
  public resetLag() {
    this._lag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lagInput() {
    return this._lag;
  }
}
export interface DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsSerialDiff {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#field DataSchemasQueryElasticsearch#field}
  */
  readonly field?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#hide DataSchemasQueryElasticsearch#hide}
  */
  readonly hide?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#pipeline_agg DataSchemasQueryElasticsearch#pipeline_agg}
  */
  readonly pipelineAgg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#settings DataSchemasQueryElasticsearch#settings}
  */
  readonly settings?: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsSerialDiffSettings;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#type DataSchemasQueryElasticsearch#type}
  */
  readonly type: string;
}

export function dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsSerialDiffToTerraform(struct?: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsSerialDiff | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field: cdktf.stringToTerraform(struct!.field),
    hide: cdktf.booleanToTerraform(struct!.hide),
    pipeline_agg: cdktf.stringToTerraform(struct!.pipelineAgg),
    settings: dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsSerialDiffSettingsToTerraform(struct!.settings),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsSerialDiffToHclTerraform(struct?: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsSerialDiff | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field: {
      value: cdktf.stringToHclTerraform(struct!.field),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hide: {
      value: cdktf.booleanToHclTerraform(struct!.hide),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pipeline_agg: {
      value: cdktf.stringToHclTerraform(struct!.pipelineAgg),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    settings: {
      value: dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsSerialDiffSettingsToHclTerraform(struct!.settings),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsSerialDiffSettings",
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

export class DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsSerialDiffOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsSerialDiff | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    if (this._hide !== undefined) {
      hasAnyValues = true;
      internalValueResult.hide = this._hide;
    }
    if (this._pipelineAgg !== undefined) {
      hasAnyValues = true;
      internalValueResult.pipelineAgg = this._pipelineAgg;
    }
    if (this._settings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.settings = this._settings?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsSerialDiff | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._field = undefined;
      this._hide = undefined;
      this._pipelineAgg = undefined;
      this._settings.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._field = value.field;
      this._hide = value.hide;
      this._pipelineAgg = value.pipelineAgg;
      this._settings.internalValue = value.settings;
      this._type = value.type;
    }
  }

  // field - computed: true, optional: true, required: false
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  public resetField() {
    this._field = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
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

  // pipeline_agg - computed: true, optional: true, required: false
  private _pipelineAgg?: string; 
  public get pipelineAgg() {
    return this.getStringAttribute('pipeline_agg');
  }
  public set pipelineAgg(value: string) {
    this._pipelineAgg = value;
  }
  public resetPipelineAgg() {
    this._pipelineAgg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineAggInput() {
    return this._pipelineAgg;
  }

  // settings - computed: true, optional: true, required: false
  private _settings = new DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsSerialDiffSettingsOutputReference(this, "settings");
  public get settings() {
    return this._settings;
  }
  public putSettings(value: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsSerialDiffSettings) {
    this._settings.internalValue = value;
  }
  public resetSettings() {
    this._settings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings.internalValue;
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
export interface DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsSumSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#missing DataSchemasQueryElasticsearch#missing}
  */
  readonly missing?: string;
}

export function dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsSumSettingsToTerraform(struct?: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsSumSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    missing: cdktf.stringToTerraform(struct!.missing),
  }
}


export function dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsSumSettingsToHclTerraform(struct?: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsSumSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    missing: {
      value: cdktf.stringToHclTerraform(struct!.missing),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsSumSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsSumSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._missing !== undefined) {
      hasAnyValues = true;
      internalValueResult.missing = this._missing;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsSumSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._missing = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._missing = value.missing;
    }
  }

  // missing - computed: true, optional: true, required: false
  private _missing?: string; 
  public get missing() {
    return this.getStringAttribute('missing');
  }
  public set missing(value: string) {
    this._missing = value;
  }
  public resetMissing() {
    this._missing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get missingInput() {
    return this._missing;
  }
}
export interface DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsSum {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#field DataSchemasQueryElasticsearch#field}
  */
  readonly field?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#hide DataSchemasQueryElasticsearch#hide}
  */
  readonly hide?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#settings DataSchemasQueryElasticsearch#settings}
  */
  readonly settings?: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsSumSettings;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#type DataSchemasQueryElasticsearch#type}
  */
  readonly type: string;
}

export function dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsSumToTerraform(struct?: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsSum | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field: cdktf.stringToTerraform(struct!.field),
    hide: cdktf.booleanToTerraform(struct!.hide),
    settings: dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsSumSettingsToTerraform(struct!.settings),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsSumToHclTerraform(struct?: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsSum | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field: {
      value: cdktf.stringToHclTerraform(struct!.field),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hide: {
      value: cdktf.booleanToHclTerraform(struct!.hide),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    settings: {
      value: dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsSumSettingsToHclTerraform(struct!.settings),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsSumSettings",
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

export class DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsSumOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsSum | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    if (this._hide !== undefined) {
      hasAnyValues = true;
      internalValueResult.hide = this._hide;
    }
    if (this._settings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.settings = this._settings?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsSum | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._field = undefined;
      this._hide = undefined;
      this._settings.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._field = value.field;
      this._hide = value.hide;
      this._settings.internalValue = value.settings;
      this._type = value.type;
    }
  }

  // field - computed: true, optional: true, required: false
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  public resetField() {
    this._field = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
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

  // settings - computed: true, optional: true, required: false
  private _settings = new DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsSumSettingsOutputReference(this, "settings");
  public get settings() {
    return this._settings;
  }
  public putSettings(value: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsSumSettings) {
    this._settings.internalValue = value;
  }
  public resetSettings() {
    this._settings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings.internalValue;
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
export interface DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsTopMetricsSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#metrics DataSchemasQueryElasticsearch#metrics}
  */
  readonly metrics?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#order DataSchemasQueryElasticsearch#order}
  */
  readonly order?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#order_by DataSchemasQueryElasticsearch#order_by}
  */
  readonly orderBy?: string;
}

export function dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsTopMetricsSettingsToTerraform(struct?: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsTopMetricsSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metrics: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.metrics),
    order: cdktf.stringToTerraform(struct!.order),
    order_by: cdktf.stringToTerraform(struct!.orderBy),
  }
}


export function dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsTopMetricsSettingsToHclTerraform(struct?: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsTopMetricsSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metrics: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.metrics),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    order: {
      value: cdktf.stringToHclTerraform(struct!.order),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    order_by: {
      value: cdktf.stringToHclTerraform(struct!.orderBy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsTopMetricsSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsTopMetricsSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metrics !== undefined) {
      hasAnyValues = true;
      internalValueResult.metrics = this._metrics;
    }
    if (this._order !== undefined) {
      hasAnyValues = true;
      internalValueResult.order = this._order;
    }
    if (this._orderBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.orderBy = this._orderBy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsTopMetricsSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metrics = undefined;
      this._order = undefined;
      this._orderBy = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metrics = value.metrics;
      this._order = value.order;
      this._orderBy = value.orderBy;
    }
  }

  // metrics - computed: true, optional: true, required: false
  private _metrics?: string[]; 
  public get metrics() {
    return this.getListAttribute('metrics');
  }
  public set metrics(value: string[]) {
    this._metrics = value;
  }
  public resetMetrics() {
    this._metrics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsInput() {
    return this._metrics;
  }

  // order - computed: true, optional: true, required: false
  private _order?: string; 
  public get order() {
    return this.getStringAttribute('order');
  }
  public set order(value: string) {
    this._order = value;
  }
  public resetOrder() {
    this._order = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }

  // order_by - computed: true, optional: true, required: false
  private _orderBy?: string; 
  public get orderBy() {
    return this.getStringAttribute('order_by');
  }
  public set orderBy(value: string) {
    this._orderBy = value;
  }
  public resetOrderBy() {
    this._orderBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderByInput() {
    return this._orderBy;
  }
}
export interface DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsTopMetrics {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#hide DataSchemasQueryElasticsearch#hide}
  */
  readonly hide?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#settings DataSchemasQueryElasticsearch#settings}
  */
  readonly settings?: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsTopMetricsSettings;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#type DataSchemasQueryElasticsearch#type}
  */
  readonly type: string;
}

export function dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsTopMetricsToTerraform(struct?: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsTopMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hide: cdktf.booleanToTerraform(struct!.hide),
    settings: dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsTopMetricsSettingsToTerraform(struct!.settings),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsTopMetricsToHclTerraform(struct?: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsTopMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hide: {
      value: cdktf.booleanToHclTerraform(struct!.hide),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    settings: {
      value: dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsTopMetricsSettingsToHclTerraform(struct!.settings),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsTopMetricsSettings",
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

export class DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsTopMetricsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsTopMetrics | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hide !== undefined) {
      hasAnyValues = true;
      internalValueResult.hide = this._hide;
    }
    if (this._settings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.settings = this._settings?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsTopMetrics | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hide = undefined;
      this._settings.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hide = value.hide;
      this._settings.internalValue = value.settings;
      this._type = value.type;
    }
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

  // settings - computed: true, optional: true, required: false
  private _settings = new DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsTopMetricsSettingsOutputReference(this, "settings");
  public get settings() {
    return this._settings;
  }
  public putSettings(value: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsTopMetricsSettings) {
    this._settings.internalValue = value;
  }
  public resetSettings() {
    this._settings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings.internalValue;
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
export interface DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsUniqueCountSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#missing DataSchemasQueryElasticsearch#missing}
  */
  readonly missing?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#precision_threshold DataSchemasQueryElasticsearch#precision_threshold}
  */
  readonly precisionThreshold?: string;
}

export function dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsUniqueCountSettingsToTerraform(struct?: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsUniqueCountSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    missing: cdktf.stringToTerraform(struct!.missing),
    precision_threshold: cdktf.stringToTerraform(struct!.precisionThreshold),
  }
}


export function dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsUniqueCountSettingsToHclTerraform(struct?: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsUniqueCountSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    missing: {
      value: cdktf.stringToHclTerraform(struct!.missing),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    precision_threshold: {
      value: cdktf.stringToHclTerraform(struct!.precisionThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsUniqueCountSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsUniqueCountSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._missing !== undefined) {
      hasAnyValues = true;
      internalValueResult.missing = this._missing;
    }
    if (this._precisionThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.precisionThreshold = this._precisionThreshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsUniqueCountSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._missing = undefined;
      this._precisionThreshold = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._missing = value.missing;
      this._precisionThreshold = value.precisionThreshold;
    }
  }

  // missing - computed: true, optional: true, required: false
  private _missing?: string; 
  public get missing() {
    return this.getStringAttribute('missing');
  }
  public set missing(value: string) {
    this._missing = value;
  }
  public resetMissing() {
    this._missing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get missingInput() {
    return this._missing;
  }

  // precision_threshold - computed: true, optional: true, required: false
  private _precisionThreshold?: string; 
  public get precisionThreshold() {
    return this.getStringAttribute('precision_threshold');
  }
  public set precisionThreshold(value: string) {
    this._precisionThreshold = value;
  }
  public resetPrecisionThreshold() {
    this._precisionThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get precisionThresholdInput() {
    return this._precisionThreshold;
  }
}
export interface DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsUniqueCount {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#field DataSchemasQueryElasticsearch#field}
  */
  readonly field?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#hide DataSchemasQueryElasticsearch#hide}
  */
  readonly hide?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#settings DataSchemasQueryElasticsearch#settings}
  */
  readonly settings?: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsUniqueCountSettings;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#type DataSchemasQueryElasticsearch#type}
  */
  readonly type: string;
}

export function dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsUniqueCountToTerraform(struct?: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsUniqueCount | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field: cdktf.stringToTerraform(struct!.field),
    hide: cdktf.booleanToTerraform(struct!.hide),
    settings: dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsUniqueCountSettingsToTerraform(struct!.settings),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsUniqueCountToHclTerraform(struct?: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsUniqueCount | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field: {
      value: cdktf.stringToHclTerraform(struct!.field),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hide: {
      value: cdktf.booleanToHclTerraform(struct!.hide),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    settings: {
      value: dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsUniqueCountSettingsToHclTerraform(struct!.settings),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsUniqueCountSettings",
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

export class DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsUniqueCountOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsUniqueCount | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    if (this._hide !== undefined) {
      hasAnyValues = true;
      internalValueResult.hide = this._hide;
    }
    if (this._settings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.settings = this._settings?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsUniqueCount | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._field = undefined;
      this._hide = undefined;
      this._settings.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._field = value.field;
      this._hide = value.hide;
      this._settings.internalValue = value.settings;
      this._type = value.type;
    }
  }

  // field - computed: true, optional: true, required: false
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  public resetField() {
    this._field = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
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

  // settings - computed: true, optional: true, required: false
  private _settings = new DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsUniqueCountSettingsOutputReference(this, "settings");
  public get settings() {
    return this._settings;
  }
  public putSettings(value: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsUniqueCountSettings) {
    this._settings.internalValue = value;
  }
  public resetSettings() {
    this._settings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings.internalValue;
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
export interface DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#average DataSchemasQueryElasticsearch#average}
  */
  readonly average?: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsAverage;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#bucket_script DataSchemasQueryElasticsearch#bucket_script}
  */
  readonly bucketScript?: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsBucketScript;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#cumulative_sum DataSchemasQueryElasticsearch#cumulative_sum}
  */
  readonly cumulativeSum?: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsCumulativeSum;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#derivative DataSchemasQueryElasticsearch#derivative}
  */
  readonly derivative?: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsDerivative;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#extended_stats DataSchemasQueryElasticsearch#extended_stats}
  */
  readonly extendedStats?: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsExtendedStats;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#logs DataSchemasQueryElasticsearch#logs}
  */
  readonly logs?: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsLogs;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#max DataSchemasQueryElasticsearch#max}
  */
  readonly max?: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsMax;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#min DataSchemasQueryElasticsearch#min}
  */
  readonly min?: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsMin;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#moving_average DataSchemasQueryElasticsearch#moving_average}
  */
  readonly movingAverage?: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsMovingAverage;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#moving_function DataSchemasQueryElasticsearch#moving_function}
  */
  readonly movingFunction?: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsMovingFunction;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#percentiles DataSchemasQueryElasticsearch#percentiles}
  */
  readonly percentiles?: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsPercentiles;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#rate DataSchemasQueryElasticsearch#rate}
  */
  readonly rate?: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsRate;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#raw_data DataSchemasQueryElasticsearch#raw_data}
  */
  readonly rawData?: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsRawData;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#raw_document DataSchemasQueryElasticsearch#raw_document}
  */
  readonly rawDocument?: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsRawDocument;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#serial_diff DataSchemasQueryElasticsearch#serial_diff}
  */
  readonly serialDiff?: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsSerialDiff;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#sum DataSchemasQueryElasticsearch#sum}
  */
  readonly sum?: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsSum;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#top_metrics DataSchemasQueryElasticsearch#top_metrics}
  */
  readonly topMetrics?: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsTopMetrics;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#unique_count DataSchemasQueryElasticsearch#unique_count}
  */
  readonly uniqueCount?: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsUniqueCount;
}

export function dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsToTerraform(struct?: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    average: dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsAverageToTerraform(struct!.average),
    bucket_script: dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsBucketScriptToTerraform(struct!.bucketScript),
    cumulative_sum: dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsCumulativeSumToTerraform(struct!.cumulativeSum),
    derivative: dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsDerivativeToTerraform(struct!.derivative),
    extended_stats: dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsExtendedStatsToTerraform(struct!.extendedStats),
    logs: dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsLogsToTerraform(struct!.logs),
    max: dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsMaxToTerraform(struct!.max),
    min: dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsMinToTerraform(struct!.min),
    moving_average: dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsMovingAverageToTerraform(struct!.movingAverage),
    moving_function: dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsMovingFunctionToTerraform(struct!.movingFunction),
    percentiles: dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsPercentilesToTerraform(struct!.percentiles),
    rate: dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsRateToTerraform(struct!.rate),
    raw_data: dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsRawDataToTerraform(struct!.rawData),
    raw_document: dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsRawDocumentToTerraform(struct!.rawDocument),
    serial_diff: dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsSerialDiffToTerraform(struct!.serialDiff),
    sum: dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsSumToTerraform(struct!.sum),
    top_metrics: dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsTopMetricsToTerraform(struct!.topMetrics),
    unique_count: dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsUniqueCountToTerraform(struct!.uniqueCount),
  }
}


export function dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsToHclTerraform(struct?: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    average: {
      value: dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsAverageToHclTerraform(struct!.average),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsAverage",
    },
    bucket_script: {
      value: dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsBucketScriptToHclTerraform(struct!.bucketScript),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsBucketScript",
    },
    cumulative_sum: {
      value: dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsCumulativeSumToHclTerraform(struct!.cumulativeSum),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsCumulativeSum",
    },
    derivative: {
      value: dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsDerivativeToHclTerraform(struct!.derivative),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsDerivative",
    },
    extended_stats: {
      value: dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsExtendedStatsToHclTerraform(struct!.extendedStats),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsExtendedStats",
    },
    logs: {
      value: dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsLogsToHclTerraform(struct!.logs),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsLogs",
    },
    max: {
      value: dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsMaxToHclTerraform(struct!.max),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsMax",
    },
    min: {
      value: dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsMinToHclTerraform(struct!.min),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsMin",
    },
    moving_average: {
      value: dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsMovingAverageToHclTerraform(struct!.movingAverage),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsMovingAverage",
    },
    moving_function: {
      value: dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsMovingFunctionToHclTerraform(struct!.movingFunction),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsMovingFunction",
    },
    percentiles: {
      value: dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsPercentilesToHclTerraform(struct!.percentiles),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsPercentiles",
    },
    rate: {
      value: dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsRateToHclTerraform(struct!.rate),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsRate",
    },
    raw_data: {
      value: dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsRawDataToHclTerraform(struct!.rawData),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsRawData",
    },
    raw_document: {
      value: dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsRawDocumentToHclTerraform(struct!.rawDocument),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsRawDocument",
    },
    serial_diff: {
      value: dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsSerialDiffToHclTerraform(struct!.serialDiff),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsSerialDiff",
    },
    sum: {
      value: dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsSumToHclTerraform(struct!.sum),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsSum",
    },
    top_metrics: {
      value: dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsTopMetricsToHclTerraform(struct!.topMetrics),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsTopMetrics",
    },
    unique_count: {
      value: dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsUniqueCountToHclTerraform(struct!.uniqueCount),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsUniqueCount",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._average?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.average = this._average?.internalValue;
    }
    if (this._bucketScript?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketScript = this._bucketScript?.internalValue;
    }
    if (this._cumulativeSum?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cumulativeSum = this._cumulativeSum?.internalValue;
    }
    if (this._derivative?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.derivative = this._derivative?.internalValue;
    }
    if (this._extendedStats?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extendedStats = this._extendedStats?.internalValue;
    }
    if (this._logs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logs = this._logs?.internalValue;
    }
    if (this._max?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max?.internalValue;
    }
    if (this._min?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min?.internalValue;
    }
    if (this._movingAverage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.movingAverage = this._movingAverage?.internalValue;
    }
    if (this._movingFunction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.movingFunction = this._movingFunction?.internalValue;
    }
    if (this._percentiles?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentiles = this._percentiles?.internalValue;
    }
    if (this._rate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rate = this._rate?.internalValue;
    }
    if (this._rawData?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rawData = this._rawData?.internalValue;
    }
    if (this._rawDocument?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rawDocument = this._rawDocument?.internalValue;
    }
    if (this._serialDiff?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serialDiff = this._serialDiff?.internalValue;
    }
    if (this._sum?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sum = this._sum?.internalValue;
    }
    if (this._topMetrics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.topMetrics = this._topMetrics?.internalValue;
    }
    if (this._uniqueCount?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.uniqueCount = this._uniqueCount?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._average.internalValue = undefined;
      this._bucketScript.internalValue = undefined;
      this._cumulativeSum.internalValue = undefined;
      this._derivative.internalValue = undefined;
      this._extendedStats.internalValue = undefined;
      this._logs.internalValue = undefined;
      this._max.internalValue = undefined;
      this._min.internalValue = undefined;
      this._movingAverage.internalValue = undefined;
      this._movingFunction.internalValue = undefined;
      this._percentiles.internalValue = undefined;
      this._rate.internalValue = undefined;
      this._rawData.internalValue = undefined;
      this._rawDocument.internalValue = undefined;
      this._serialDiff.internalValue = undefined;
      this._sum.internalValue = undefined;
      this._topMetrics.internalValue = undefined;
      this._uniqueCount.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._average.internalValue = value.average;
      this._bucketScript.internalValue = value.bucketScript;
      this._cumulativeSum.internalValue = value.cumulativeSum;
      this._derivative.internalValue = value.derivative;
      this._extendedStats.internalValue = value.extendedStats;
      this._logs.internalValue = value.logs;
      this._max.internalValue = value.max;
      this._min.internalValue = value.min;
      this._movingAverage.internalValue = value.movingAverage;
      this._movingFunction.internalValue = value.movingFunction;
      this._percentiles.internalValue = value.percentiles;
      this._rate.internalValue = value.rate;
      this._rawData.internalValue = value.rawData;
      this._rawDocument.internalValue = value.rawDocument;
      this._serialDiff.internalValue = value.serialDiff;
      this._sum.internalValue = value.sum;
      this._topMetrics.internalValue = value.topMetrics;
      this._uniqueCount.internalValue = value.uniqueCount;
    }
  }

  // average - computed: true, optional: true, required: false
  private _average = new DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsAverageOutputReference(this, "average");
  public get average() {
    return this._average;
  }
  public putAverage(value: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsAverage) {
    this._average.internalValue = value;
  }
  public resetAverage() {
    this._average.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get averageInput() {
    return this._average.internalValue;
  }

  // bucket_script - computed: true, optional: true, required: false
  private _bucketScript = new DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsBucketScriptOutputReference(this, "bucket_script");
  public get bucketScript() {
    return this._bucketScript;
  }
  public putBucketScript(value: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsBucketScript) {
    this._bucketScript.internalValue = value;
  }
  public resetBucketScript() {
    this._bucketScript.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketScriptInput() {
    return this._bucketScript.internalValue;
  }

  // cumulative_sum - computed: true, optional: true, required: false
  private _cumulativeSum = new DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsCumulativeSumOutputReference(this, "cumulative_sum");
  public get cumulativeSum() {
    return this._cumulativeSum;
  }
  public putCumulativeSum(value: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsCumulativeSum) {
    this._cumulativeSum.internalValue = value;
  }
  public resetCumulativeSum() {
    this._cumulativeSum.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cumulativeSumInput() {
    return this._cumulativeSum.internalValue;
  }

  // derivative - computed: true, optional: true, required: false
  private _derivative = new DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsDerivativeOutputReference(this, "derivative");
  public get derivative() {
    return this._derivative;
  }
  public putDerivative(value: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsDerivative) {
    this._derivative.internalValue = value;
  }
  public resetDerivative() {
    this._derivative.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get derivativeInput() {
    return this._derivative.internalValue;
  }

  // extended_stats - computed: true, optional: true, required: false
  private _extendedStats = new DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsExtendedStatsOutputReference(this, "extended_stats");
  public get extendedStats() {
    return this._extendedStats;
  }
  public putExtendedStats(value: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsExtendedStats) {
    this._extendedStats.internalValue = value;
  }
  public resetExtendedStats() {
    this._extendedStats.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendedStatsInput() {
    return this._extendedStats.internalValue;
  }

  // logs - computed: true, optional: true, required: false
  private _logs = new DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsLogsOutputReference(this, "logs");
  public get logs() {
    return this._logs;
  }
  public putLogs(value: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsLogs) {
    this._logs.internalValue = value;
  }
  public resetLogs() {
    this._logs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logsInput() {
    return this._logs.internalValue;
  }

  // max - computed: true, optional: true, required: false
  private _max = new DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsMaxOutputReference(this, "max");
  public get max() {
    return this._max;
  }
  public putMax(value: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsMax) {
    this._max.internalValue = value;
  }
  public resetMax() {
    this._max.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max.internalValue;
  }

  // min - computed: true, optional: true, required: false
  private _min = new DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsMinOutputReference(this, "min");
  public get min() {
    return this._min;
  }
  public putMin(value: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsMin) {
    this._min.internalValue = value;
  }
  public resetMin() {
    this._min.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min.internalValue;
  }

  // moving_average - computed: true, optional: true, required: false
  private _movingAverage = new DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsMovingAverageOutputReference(this, "moving_average");
  public get movingAverage() {
    return this._movingAverage;
  }
  public putMovingAverage(value: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsMovingAverage) {
    this._movingAverage.internalValue = value;
  }
  public resetMovingAverage() {
    this._movingAverage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get movingAverageInput() {
    return this._movingAverage.internalValue;
  }

  // moving_function - computed: true, optional: true, required: false
  private _movingFunction = new DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsMovingFunctionOutputReference(this, "moving_function");
  public get movingFunction() {
    return this._movingFunction;
  }
  public putMovingFunction(value: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsMovingFunction) {
    this._movingFunction.internalValue = value;
  }
  public resetMovingFunction() {
    this._movingFunction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get movingFunctionInput() {
    return this._movingFunction.internalValue;
  }

  // percentiles - computed: true, optional: true, required: false
  private _percentiles = new DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsPercentilesOutputReference(this, "percentiles");
  public get percentiles() {
    return this._percentiles;
  }
  public putPercentiles(value: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsPercentiles) {
    this._percentiles.internalValue = value;
  }
  public resetPercentiles() {
    this._percentiles.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentilesInput() {
    return this._percentiles.internalValue;
  }

  // rate - computed: true, optional: true, required: false
  private _rate = new DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsRateOutputReference(this, "rate");
  public get rate() {
    return this._rate;
  }
  public putRate(value: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsRate) {
    this._rate.internalValue = value;
  }
  public resetRate() {
    this._rate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateInput() {
    return this._rate.internalValue;
  }

  // raw_data - computed: true, optional: true, required: false
  private _rawData = new DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsRawDataOutputReference(this, "raw_data");
  public get rawData() {
    return this._rawData;
  }
  public putRawData(value: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsRawData) {
    this._rawData.internalValue = value;
  }
  public resetRawData() {
    this._rawData.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rawDataInput() {
    return this._rawData.internalValue;
  }

  // raw_document - computed: true, optional: true, required: false
  private _rawDocument = new DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsRawDocumentOutputReference(this, "raw_document");
  public get rawDocument() {
    return this._rawDocument;
  }
  public putRawDocument(value: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsRawDocument) {
    this._rawDocument.internalValue = value;
  }
  public resetRawDocument() {
    this._rawDocument.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rawDocumentInput() {
    return this._rawDocument.internalValue;
  }

  // serial_diff - computed: true, optional: true, required: false
  private _serialDiff = new DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsSerialDiffOutputReference(this, "serial_diff");
  public get serialDiff() {
    return this._serialDiff;
  }
  public putSerialDiff(value: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsSerialDiff) {
    this._serialDiff.internalValue = value;
  }
  public resetSerialDiff() {
    this._serialDiff.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serialDiffInput() {
    return this._serialDiff.internalValue;
  }

  // sum - computed: true, optional: true, required: false
  private _sum = new DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsSumOutputReference(this, "sum");
  public get sum() {
    return this._sum;
  }
  public putSum(value: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsSum) {
    this._sum.internalValue = value;
  }
  public resetSum() {
    this._sum.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sumInput() {
    return this._sum.internalValue;
  }

  // top_metrics - computed: true, optional: true, required: false
  private _topMetrics = new DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsTopMetricsOutputReference(this, "top_metrics");
  public get topMetrics() {
    return this._topMetrics;
  }
  public putTopMetrics(value: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsTopMetrics) {
    this._topMetrics.internalValue = value;
  }
  public resetTopMetrics() {
    this._topMetrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topMetricsInput() {
    return this._topMetrics.internalValue;
  }

  // unique_count - computed: true, optional: true, required: false
  private _uniqueCount = new DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsUniqueCountOutputReference(this, "unique_count");
  public get uniqueCount() {
    return this._uniqueCount;
  }
  public putUniqueCount(value: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsUniqueCount) {
    this._uniqueCount.internalValue = value;
  }
  public resetUniqueCount() {
    this._uniqueCount.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uniqueCountInput() {
    return this._uniqueCount.internalValue;
  }
}
export interface DataSchemasQueryElasticsearchMetricsPipelineMetricAggregationBucketScriptPipelineVariables {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#name DataSchemasQueryElasticsearch#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#pipeline_agg DataSchemasQueryElasticsearch#pipeline_agg}
  */
  readonly pipelineAgg: string;
}

export function dataSchemasQueryElasticsearchMetricsPipelineMetricAggregationBucketScriptPipelineVariablesToTerraform(struct?: DataSchemasQueryElasticsearchMetricsPipelineMetricAggregationBucketScriptPipelineVariables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    pipeline_agg: cdktf.stringToTerraform(struct!.pipelineAgg),
  }
}


export function dataSchemasQueryElasticsearchMetricsPipelineMetricAggregationBucketScriptPipelineVariablesToHclTerraform(struct?: DataSchemasQueryElasticsearchMetricsPipelineMetricAggregationBucketScriptPipelineVariables | cdktf.IResolvable): any {
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
    pipeline_agg: {
      value: cdktf.stringToHclTerraform(struct!.pipelineAgg),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSchemasQueryElasticsearchMetricsPipelineMetricAggregationBucketScriptPipelineVariablesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSchemasQueryElasticsearchMetricsPipelineMetricAggregationBucketScriptPipelineVariables | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._pipelineAgg !== undefined) {
      hasAnyValues = true;
      internalValueResult.pipelineAgg = this._pipelineAgg;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSchemasQueryElasticsearchMetricsPipelineMetricAggregationBucketScriptPipelineVariables | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._pipelineAgg = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._pipelineAgg = value.pipelineAgg;
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

  // pipeline_agg - computed: true, optional: false, required: true
  private _pipelineAgg?: string; 
  public get pipelineAgg() {
    return this.getStringAttribute('pipeline_agg');
  }
  public set pipelineAgg(value: string) {
    this._pipelineAgg = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineAggInput() {
    return this._pipelineAgg;
  }
}

export class DataSchemasQueryElasticsearchMetricsPipelineMetricAggregationBucketScriptPipelineVariablesList extends cdktf.ComplexList {
  public internalValue? : DataSchemasQueryElasticsearchMetricsPipelineMetricAggregationBucketScriptPipelineVariables[] | cdktf.IResolvable

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
  public get(index: number): DataSchemasQueryElasticsearchMetricsPipelineMetricAggregationBucketScriptPipelineVariablesOutputReference {
    return new DataSchemasQueryElasticsearchMetricsPipelineMetricAggregationBucketScriptPipelineVariablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSchemasQueryElasticsearchMetricsPipelineMetricAggregationBucketScriptSettings {
  /**
  * JSON-encoded string. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#script DataSchemasQueryElasticsearch#script}
  */
  readonly script?: string;
}

export function dataSchemasQueryElasticsearchMetricsPipelineMetricAggregationBucketScriptSettingsToTerraform(struct?: DataSchemasQueryElasticsearchMetricsPipelineMetricAggregationBucketScriptSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    script: cdktf.stringToTerraform(struct!.script),
  }
}


export function dataSchemasQueryElasticsearchMetricsPipelineMetricAggregationBucketScriptSettingsToHclTerraform(struct?: DataSchemasQueryElasticsearchMetricsPipelineMetricAggregationBucketScriptSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    script: {
      value: cdktf.stringToHclTerraform(struct!.script),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSchemasQueryElasticsearchMetricsPipelineMetricAggregationBucketScriptSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasQueryElasticsearchMetricsPipelineMetricAggregationBucketScriptSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._script !== undefined) {
      hasAnyValues = true;
      internalValueResult.script = this._script;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSchemasQueryElasticsearchMetricsPipelineMetricAggregationBucketScriptSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._script = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._script = value.script;
    }
  }

  // script - computed: true, optional: true, required: false
  private _script?: string; 
  public get script() {
    return this.getStringAttribute('script');
  }
  public set script(value: string) {
    this._script = value;
  }
  public resetScript() {
    this._script = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptInput() {
    return this._script;
  }
}
export interface DataSchemasQueryElasticsearchMetricsPipelineMetricAggregationBucketScript {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#hide DataSchemasQueryElasticsearch#hide}
  */
  readonly hide?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#pipeline_variables DataSchemasQueryElasticsearch#pipeline_variables}
  */
  readonly pipelineVariables?: DataSchemasQueryElasticsearchMetricsPipelineMetricAggregationBucketScriptPipelineVariables[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#settings DataSchemasQueryElasticsearch#settings}
  */
  readonly settings?: DataSchemasQueryElasticsearchMetricsPipelineMetricAggregationBucketScriptSettings;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#type DataSchemasQueryElasticsearch#type}
  */
  readonly type: string;
}

export function dataSchemasQueryElasticsearchMetricsPipelineMetricAggregationBucketScriptToTerraform(struct?: DataSchemasQueryElasticsearchMetricsPipelineMetricAggregationBucketScript | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hide: cdktf.booleanToTerraform(struct!.hide),
    pipeline_variables: cdktf.listMapper(dataSchemasQueryElasticsearchMetricsPipelineMetricAggregationBucketScriptPipelineVariablesToTerraform, false)(struct!.pipelineVariables),
    settings: dataSchemasQueryElasticsearchMetricsPipelineMetricAggregationBucketScriptSettingsToTerraform(struct!.settings),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataSchemasQueryElasticsearchMetricsPipelineMetricAggregationBucketScriptToHclTerraform(struct?: DataSchemasQueryElasticsearchMetricsPipelineMetricAggregationBucketScript | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hide: {
      value: cdktf.booleanToHclTerraform(struct!.hide),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pipeline_variables: {
      value: cdktf.listMapperHcl(dataSchemasQueryElasticsearchMetricsPipelineMetricAggregationBucketScriptPipelineVariablesToHclTerraform, false)(struct!.pipelineVariables),
      isBlock: true,
      type: "list",
      storageClassType: "DataSchemasQueryElasticsearchMetricsPipelineMetricAggregationBucketScriptPipelineVariablesList",
    },
    settings: {
      value: dataSchemasQueryElasticsearchMetricsPipelineMetricAggregationBucketScriptSettingsToHclTerraform(struct!.settings),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasQueryElasticsearchMetricsPipelineMetricAggregationBucketScriptSettings",
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

export class DataSchemasQueryElasticsearchMetricsPipelineMetricAggregationBucketScriptOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasQueryElasticsearchMetricsPipelineMetricAggregationBucketScript | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hide !== undefined) {
      hasAnyValues = true;
      internalValueResult.hide = this._hide;
    }
    if (this._pipelineVariables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pipelineVariables = this._pipelineVariables?.internalValue;
    }
    if (this._settings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.settings = this._settings?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSchemasQueryElasticsearchMetricsPipelineMetricAggregationBucketScript | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hide = undefined;
      this._pipelineVariables.internalValue = undefined;
      this._settings.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hide = value.hide;
      this._pipelineVariables.internalValue = value.pipelineVariables;
      this._settings.internalValue = value.settings;
      this._type = value.type;
    }
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

  // pipeline_variables - computed: true, optional: true, required: false
  private _pipelineVariables = new DataSchemasQueryElasticsearchMetricsPipelineMetricAggregationBucketScriptPipelineVariablesList(this, "pipeline_variables", false);
  public get pipelineVariables() {
    return this._pipelineVariables;
  }
  public putPipelineVariables(value: DataSchemasQueryElasticsearchMetricsPipelineMetricAggregationBucketScriptPipelineVariables[] | cdktf.IResolvable) {
    this._pipelineVariables.internalValue = value;
  }
  public resetPipelineVariables() {
    this._pipelineVariables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineVariablesInput() {
    return this._pipelineVariables.internalValue;
  }

  // settings - computed: true, optional: true, required: false
  private _settings = new DataSchemasQueryElasticsearchMetricsPipelineMetricAggregationBucketScriptSettingsOutputReference(this, "settings");
  public get settings() {
    return this._settings;
  }
  public putSettings(value: DataSchemasQueryElasticsearchMetricsPipelineMetricAggregationBucketScriptSettings) {
    this._settings.internalValue = value;
  }
  public resetSettings() {
    this._settings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings.internalValue;
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
export interface DataSchemasQueryElasticsearchMetricsPipelineMetricAggregationCumulativeSumSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#format DataSchemasQueryElasticsearch#format}
  */
  readonly format?: string;
}

export function dataSchemasQueryElasticsearchMetricsPipelineMetricAggregationCumulativeSumSettingsToTerraform(struct?: DataSchemasQueryElasticsearchMetricsPipelineMetricAggregationCumulativeSumSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    format: cdktf.stringToTerraform(struct!.format),
  }
}


export function dataSchemasQueryElasticsearchMetricsPipelineMetricAggregationCumulativeSumSettingsToHclTerraform(struct?: DataSchemasQueryElasticsearchMetricsPipelineMetricAggregationCumulativeSumSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    format: {
      value: cdktf.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSchemasQueryElasticsearchMetricsPipelineMetricAggregationCumulativeSumSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasQueryElasticsearchMetricsPipelineMetricAggregationCumulativeSumSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSchemasQueryElasticsearchMetricsPipelineMetricAggregationCumulativeSumSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._format = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._format = value.format;
    }
  }

  // format - computed: true, optional: true, required: false
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  public resetFormat() {
    this._format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }
}
export interface DataSchemasQueryElasticsearchMetricsPipelineMetricAggregationCumulativeSum {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#field DataSchemasQueryElasticsearch#field}
  */
  readonly field?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#hide DataSchemasQueryElasticsearch#hide}
  */
  readonly hide?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#pipeline_agg DataSchemasQueryElasticsearch#pipeline_agg}
  */
  readonly pipelineAgg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#settings DataSchemasQueryElasticsearch#settings}
  */
  readonly settings?: DataSchemasQueryElasticsearchMetricsPipelineMetricAggregationCumulativeSumSettings;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#type DataSchemasQueryElasticsearch#type}
  */
  readonly type: string;
}

export function dataSchemasQueryElasticsearchMetricsPipelineMetricAggregationCumulativeSumToTerraform(struct?: DataSchemasQueryElasticsearchMetricsPipelineMetricAggregationCumulativeSum | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field: cdktf.stringToTerraform(struct!.field),
    hide: cdktf.booleanToTerraform(struct!.hide),
    pipeline_agg: cdktf.stringToTerraform(struct!.pipelineAgg),
    settings: dataSchemasQueryElasticsearchMetricsPipelineMetricAggregationCumulativeSumSettingsToTerraform(struct!.settings),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataSchemasQueryElasticsearchMetricsPipelineMetricAggregationCumulativeSumToHclTerraform(struct?: DataSchemasQueryElasticsearchMetricsPipelineMetricAggregationCumulativeSum | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field: {
      value: cdktf.stringToHclTerraform(struct!.field),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hide: {
      value: cdktf.booleanToHclTerraform(struct!.hide),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pipeline_agg: {
      value: cdktf.stringToHclTerraform(struct!.pipelineAgg),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    settings: {
      value: dataSchemasQueryElasticsearchMetricsPipelineMetricAggregationCumulativeSumSettingsToHclTerraform(struct!.settings),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasQueryElasticsearchMetricsPipelineMetricAggregationCumulativeSumSettings",
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

export class DataSchemasQueryElasticsearchMetricsPipelineMetricAggregationCumulativeSumOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasQueryElasticsearchMetricsPipelineMetricAggregationCumulativeSum | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    if (this._hide !== undefined) {
      hasAnyValues = true;
      internalValueResult.hide = this._hide;
    }
    if (this._pipelineAgg !== undefined) {
      hasAnyValues = true;
      internalValueResult.pipelineAgg = this._pipelineAgg;
    }
    if (this._settings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.settings = this._settings?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSchemasQueryElasticsearchMetricsPipelineMetricAggregationCumulativeSum | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._field = undefined;
      this._hide = undefined;
      this._pipelineAgg = undefined;
      this._settings.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._field = value.field;
      this._hide = value.hide;
      this._pipelineAgg = value.pipelineAgg;
      this._settings.internalValue = value.settings;
      this._type = value.type;
    }
  }

  // field - computed: true, optional: true, required: false
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  public resetField() {
    this._field = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
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

  // pipeline_agg - computed: true, optional: true, required: false
  private _pipelineAgg?: string; 
  public get pipelineAgg() {
    return this.getStringAttribute('pipeline_agg');
  }
  public set pipelineAgg(value: string) {
    this._pipelineAgg = value;
  }
  public resetPipelineAgg() {
    this._pipelineAgg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineAggInput() {
    return this._pipelineAgg;
  }

  // settings - computed: true, optional: true, required: false
  private _settings = new DataSchemasQueryElasticsearchMetricsPipelineMetricAggregationCumulativeSumSettingsOutputReference(this, "settings");
  public get settings() {
    return this._settings;
  }
  public putSettings(value: DataSchemasQueryElasticsearchMetricsPipelineMetricAggregationCumulativeSumSettings) {
    this._settings.internalValue = value;
  }
  public resetSettings() {
    this._settings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings.internalValue;
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
export interface DataSchemasQueryElasticsearchMetricsPipelineMetricAggregationDerivativeSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#unit DataSchemasQueryElasticsearch#unit}
  */
  readonly unit?: string;
}

export function dataSchemasQueryElasticsearchMetricsPipelineMetricAggregationDerivativeSettingsToTerraform(struct?: DataSchemasQueryElasticsearchMetricsPipelineMetricAggregationDerivativeSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
  }
}


export function dataSchemasQueryElasticsearchMetricsPipelineMetricAggregationDerivativeSettingsToHclTerraform(struct?: DataSchemasQueryElasticsearchMetricsPipelineMetricAggregationDerivativeSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSchemasQueryElasticsearchMetricsPipelineMetricAggregationDerivativeSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasQueryElasticsearchMetricsPipelineMetricAggregationDerivativeSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSchemasQueryElasticsearchMetricsPipelineMetricAggregationDerivativeSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._unit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._unit = value.unit;
    }
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
}
export interface DataSchemasQueryElasticsearchMetricsPipelineMetricAggregationDerivative {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#field DataSchemasQueryElasticsearch#field}
  */
  readonly field?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#hide DataSchemasQueryElasticsearch#hide}
  */
  readonly hide?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#pipeline_agg DataSchemasQueryElasticsearch#pipeline_agg}
  */
  readonly pipelineAgg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#settings DataSchemasQueryElasticsearch#settings}
  */
  readonly settings?: DataSchemasQueryElasticsearchMetricsPipelineMetricAggregationDerivativeSettings;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#type DataSchemasQueryElasticsearch#type}
  */
  readonly type: string;
}

export function dataSchemasQueryElasticsearchMetricsPipelineMetricAggregationDerivativeToTerraform(struct?: DataSchemasQueryElasticsearchMetricsPipelineMetricAggregationDerivative | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field: cdktf.stringToTerraform(struct!.field),
    hide: cdktf.booleanToTerraform(struct!.hide),
    pipeline_agg: cdktf.stringToTerraform(struct!.pipelineAgg),
    settings: dataSchemasQueryElasticsearchMetricsPipelineMetricAggregationDerivativeSettingsToTerraform(struct!.settings),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataSchemasQueryElasticsearchMetricsPipelineMetricAggregationDerivativeToHclTerraform(struct?: DataSchemasQueryElasticsearchMetricsPipelineMetricAggregationDerivative | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field: {
      value: cdktf.stringToHclTerraform(struct!.field),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hide: {
      value: cdktf.booleanToHclTerraform(struct!.hide),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pipeline_agg: {
      value: cdktf.stringToHclTerraform(struct!.pipelineAgg),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    settings: {
      value: dataSchemasQueryElasticsearchMetricsPipelineMetricAggregationDerivativeSettingsToHclTerraform(struct!.settings),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasQueryElasticsearchMetricsPipelineMetricAggregationDerivativeSettings",
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

export class DataSchemasQueryElasticsearchMetricsPipelineMetricAggregationDerivativeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasQueryElasticsearchMetricsPipelineMetricAggregationDerivative | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    if (this._hide !== undefined) {
      hasAnyValues = true;
      internalValueResult.hide = this._hide;
    }
    if (this._pipelineAgg !== undefined) {
      hasAnyValues = true;
      internalValueResult.pipelineAgg = this._pipelineAgg;
    }
    if (this._settings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.settings = this._settings?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSchemasQueryElasticsearchMetricsPipelineMetricAggregationDerivative | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._field = undefined;
      this._hide = undefined;
      this._pipelineAgg = undefined;
      this._settings.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._field = value.field;
      this._hide = value.hide;
      this._pipelineAgg = value.pipelineAgg;
      this._settings.internalValue = value.settings;
      this._type = value.type;
    }
  }

  // field - computed: true, optional: true, required: false
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  public resetField() {
    this._field = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
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

  // pipeline_agg - computed: true, optional: true, required: false
  private _pipelineAgg?: string; 
  public get pipelineAgg() {
    return this.getStringAttribute('pipeline_agg');
  }
  public set pipelineAgg(value: string) {
    this._pipelineAgg = value;
  }
  public resetPipelineAgg() {
    this._pipelineAgg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineAggInput() {
    return this._pipelineAgg;
  }

  // settings - computed: true, optional: true, required: false
  private _settings = new DataSchemasQueryElasticsearchMetricsPipelineMetricAggregationDerivativeSettingsOutputReference(this, "settings");
  public get settings() {
    return this._settings;
  }
  public putSettings(value: DataSchemasQueryElasticsearchMetricsPipelineMetricAggregationDerivativeSettings) {
    this._settings.internalValue = value;
  }
  public resetSettings() {
    this._settings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings.internalValue;
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
export interface DataSchemasQueryElasticsearchMetricsPipelineMetricAggregationMovingAverageSettings {
}

export function dataSchemasQueryElasticsearchMetricsPipelineMetricAggregationMovingAverageSettingsToTerraform(struct?: DataSchemasQueryElasticsearchMetricsPipelineMetricAggregationMovingAverageSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSchemasQueryElasticsearchMetricsPipelineMetricAggregationMovingAverageSettingsToHclTerraform(struct?: DataSchemasQueryElasticsearchMetricsPipelineMetricAggregationMovingAverageSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSchemasQueryElasticsearchMetricsPipelineMetricAggregationMovingAverageSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasQueryElasticsearchMetricsPipelineMetricAggregationMovingAverageSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSchemasQueryElasticsearchMetricsPipelineMetricAggregationMovingAverageSettings | cdktf.IResolvable | undefined) {
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
export interface DataSchemasQueryElasticsearchMetricsPipelineMetricAggregationMovingAverage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#field DataSchemasQueryElasticsearch#field}
  */
  readonly field?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#hide DataSchemasQueryElasticsearch#hide}
  */
  readonly hide?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#pipeline_agg DataSchemasQueryElasticsearch#pipeline_agg}
  */
  readonly pipelineAgg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#settings DataSchemasQueryElasticsearch#settings}
  */
  readonly settings?: DataSchemasQueryElasticsearchMetricsPipelineMetricAggregationMovingAverageSettings;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#type DataSchemasQueryElasticsearch#type}
  */
  readonly type: string;
}

export function dataSchemasQueryElasticsearchMetricsPipelineMetricAggregationMovingAverageToTerraform(struct?: DataSchemasQueryElasticsearchMetricsPipelineMetricAggregationMovingAverage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field: cdktf.stringToTerraform(struct!.field),
    hide: cdktf.booleanToTerraform(struct!.hide),
    pipeline_agg: cdktf.stringToTerraform(struct!.pipelineAgg),
    settings: dataSchemasQueryElasticsearchMetricsPipelineMetricAggregationMovingAverageSettingsToTerraform(struct!.settings),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataSchemasQueryElasticsearchMetricsPipelineMetricAggregationMovingAverageToHclTerraform(struct?: DataSchemasQueryElasticsearchMetricsPipelineMetricAggregationMovingAverage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field: {
      value: cdktf.stringToHclTerraform(struct!.field),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hide: {
      value: cdktf.booleanToHclTerraform(struct!.hide),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pipeline_agg: {
      value: cdktf.stringToHclTerraform(struct!.pipelineAgg),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    settings: {
      value: dataSchemasQueryElasticsearchMetricsPipelineMetricAggregationMovingAverageSettingsToHclTerraform(struct!.settings),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasQueryElasticsearchMetricsPipelineMetricAggregationMovingAverageSettings",
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

export class DataSchemasQueryElasticsearchMetricsPipelineMetricAggregationMovingAverageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasQueryElasticsearchMetricsPipelineMetricAggregationMovingAverage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    if (this._hide !== undefined) {
      hasAnyValues = true;
      internalValueResult.hide = this._hide;
    }
    if (this._pipelineAgg !== undefined) {
      hasAnyValues = true;
      internalValueResult.pipelineAgg = this._pipelineAgg;
    }
    if (this._settings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.settings = this._settings?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSchemasQueryElasticsearchMetricsPipelineMetricAggregationMovingAverage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._field = undefined;
      this._hide = undefined;
      this._pipelineAgg = undefined;
      this._settings.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._field = value.field;
      this._hide = value.hide;
      this._pipelineAgg = value.pipelineAgg;
      this._settings.internalValue = value.settings;
      this._type = value.type;
    }
  }

  // field - computed: true, optional: true, required: false
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  public resetField() {
    this._field = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
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

  // pipeline_agg - computed: true, optional: true, required: false
  private _pipelineAgg?: string; 
  public get pipelineAgg() {
    return this.getStringAttribute('pipeline_agg');
  }
  public set pipelineAgg(value: string) {
    this._pipelineAgg = value;
  }
  public resetPipelineAgg() {
    this._pipelineAgg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineAggInput() {
    return this._pipelineAgg;
  }

  // settings - computed: true, optional: true, required: false
  private _settings = new DataSchemasQueryElasticsearchMetricsPipelineMetricAggregationMovingAverageSettingsOutputReference(this, "settings");
  public get settings() {
    return this._settings;
  }
  public putSettings(value: DataSchemasQueryElasticsearchMetricsPipelineMetricAggregationMovingAverageSettings) {
    this._settings.internalValue = value;
  }
  public resetSettings() {
    this._settings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings.internalValue;
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
export interface DataSchemasQueryElasticsearchMetricsPipelineMetricAggregation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#bucket_script DataSchemasQueryElasticsearch#bucket_script}
  */
  readonly bucketScript?: DataSchemasQueryElasticsearchMetricsPipelineMetricAggregationBucketScript;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#cumulative_sum DataSchemasQueryElasticsearch#cumulative_sum}
  */
  readonly cumulativeSum?: DataSchemasQueryElasticsearchMetricsPipelineMetricAggregationCumulativeSum;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#derivative DataSchemasQueryElasticsearch#derivative}
  */
  readonly derivative?: DataSchemasQueryElasticsearchMetricsPipelineMetricAggregationDerivative;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#moving_average DataSchemasQueryElasticsearch#moving_average}
  */
  readonly movingAverage?: DataSchemasQueryElasticsearchMetricsPipelineMetricAggregationMovingAverage;
}

export function dataSchemasQueryElasticsearchMetricsPipelineMetricAggregationToTerraform(struct?: DataSchemasQueryElasticsearchMetricsPipelineMetricAggregation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket_script: dataSchemasQueryElasticsearchMetricsPipelineMetricAggregationBucketScriptToTerraform(struct!.bucketScript),
    cumulative_sum: dataSchemasQueryElasticsearchMetricsPipelineMetricAggregationCumulativeSumToTerraform(struct!.cumulativeSum),
    derivative: dataSchemasQueryElasticsearchMetricsPipelineMetricAggregationDerivativeToTerraform(struct!.derivative),
    moving_average: dataSchemasQueryElasticsearchMetricsPipelineMetricAggregationMovingAverageToTerraform(struct!.movingAverage),
  }
}


export function dataSchemasQueryElasticsearchMetricsPipelineMetricAggregationToHclTerraform(struct?: DataSchemasQueryElasticsearchMetricsPipelineMetricAggregation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket_script: {
      value: dataSchemasQueryElasticsearchMetricsPipelineMetricAggregationBucketScriptToHclTerraform(struct!.bucketScript),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasQueryElasticsearchMetricsPipelineMetricAggregationBucketScript",
    },
    cumulative_sum: {
      value: dataSchemasQueryElasticsearchMetricsPipelineMetricAggregationCumulativeSumToHclTerraform(struct!.cumulativeSum),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasQueryElasticsearchMetricsPipelineMetricAggregationCumulativeSum",
    },
    derivative: {
      value: dataSchemasQueryElasticsearchMetricsPipelineMetricAggregationDerivativeToHclTerraform(struct!.derivative),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasQueryElasticsearchMetricsPipelineMetricAggregationDerivative",
    },
    moving_average: {
      value: dataSchemasQueryElasticsearchMetricsPipelineMetricAggregationMovingAverageToHclTerraform(struct!.movingAverage),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasQueryElasticsearchMetricsPipelineMetricAggregationMovingAverage",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSchemasQueryElasticsearchMetricsPipelineMetricAggregationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSchemasQueryElasticsearchMetricsPipelineMetricAggregation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketScript?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketScript = this._bucketScript?.internalValue;
    }
    if (this._cumulativeSum?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cumulativeSum = this._cumulativeSum?.internalValue;
    }
    if (this._derivative?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.derivative = this._derivative?.internalValue;
    }
    if (this._movingAverage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.movingAverage = this._movingAverage?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSchemasQueryElasticsearchMetricsPipelineMetricAggregation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucketScript.internalValue = undefined;
      this._cumulativeSum.internalValue = undefined;
      this._derivative.internalValue = undefined;
      this._movingAverage.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucketScript.internalValue = value.bucketScript;
      this._cumulativeSum.internalValue = value.cumulativeSum;
      this._derivative.internalValue = value.derivative;
      this._movingAverage.internalValue = value.movingAverage;
    }
  }

  // bucket_script - computed: true, optional: true, required: false
  private _bucketScript = new DataSchemasQueryElasticsearchMetricsPipelineMetricAggregationBucketScriptOutputReference(this, "bucket_script");
  public get bucketScript() {
    return this._bucketScript;
  }
  public putBucketScript(value: DataSchemasQueryElasticsearchMetricsPipelineMetricAggregationBucketScript) {
    this._bucketScript.internalValue = value;
  }
  public resetBucketScript() {
    this._bucketScript.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketScriptInput() {
    return this._bucketScript.internalValue;
  }

  // cumulative_sum - computed: true, optional: true, required: false
  private _cumulativeSum = new DataSchemasQueryElasticsearchMetricsPipelineMetricAggregationCumulativeSumOutputReference(this, "cumulative_sum");
  public get cumulativeSum() {
    return this._cumulativeSum;
  }
  public putCumulativeSum(value: DataSchemasQueryElasticsearchMetricsPipelineMetricAggregationCumulativeSum) {
    this._cumulativeSum.internalValue = value;
  }
  public resetCumulativeSum() {
    this._cumulativeSum.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cumulativeSumInput() {
    return this._cumulativeSum.internalValue;
  }

  // derivative - computed: true, optional: true, required: false
  private _derivative = new DataSchemasQueryElasticsearchMetricsPipelineMetricAggregationDerivativeOutputReference(this, "derivative");
  public get derivative() {
    return this._derivative;
  }
  public putDerivative(value: DataSchemasQueryElasticsearchMetricsPipelineMetricAggregationDerivative) {
    this._derivative.internalValue = value;
  }
  public resetDerivative() {
    this._derivative.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get derivativeInput() {
    return this._derivative.internalValue;
  }

  // moving_average - computed: true, optional: true, required: false
  private _movingAverage = new DataSchemasQueryElasticsearchMetricsPipelineMetricAggregationMovingAverageOutputReference(this, "moving_average");
  public get movingAverage() {
    return this._movingAverage;
  }
  public putMovingAverage(value: DataSchemasQueryElasticsearchMetricsPipelineMetricAggregationMovingAverage) {
    this._movingAverage.internalValue = value;
  }
  public resetMovingAverage() {
    this._movingAverage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get movingAverageInput() {
    return this._movingAverage.internalValue;
  }
}
export interface DataSchemasQueryElasticsearchMetrics {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#count DataSchemasQueryElasticsearch#count}
  */
  readonly count?: DataSchemasQueryElasticsearchMetricsCount;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#metric_aggregation_with_settings DataSchemasQueryElasticsearch#metric_aggregation_with_settings}
  */
  readonly metricAggregationWithSettings?: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettings;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#pipeline_metric_aggregation DataSchemasQueryElasticsearch#pipeline_metric_aggregation}
  */
  readonly pipelineMetricAggregation?: DataSchemasQueryElasticsearchMetricsPipelineMetricAggregation;
}

export function dataSchemasQueryElasticsearchMetricsToTerraform(struct?: DataSchemasQueryElasticsearchMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: dataSchemasQueryElasticsearchMetricsCountToTerraform(struct!.count),
    metric_aggregation_with_settings: dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsToTerraform(struct!.metricAggregationWithSettings),
    pipeline_metric_aggregation: dataSchemasQueryElasticsearchMetricsPipelineMetricAggregationToTerraform(struct!.pipelineMetricAggregation),
  }
}


export function dataSchemasQueryElasticsearchMetricsToHclTerraform(struct?: DataSchemasQueryElasticsearchMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    count: {
      value: dataSchemasQueryElasticsearchMetricsCountToHclTerraform(struct!.count),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasQueryElasticsearchMetricsCount",
    },
    metric_aggregation_with_settings: {
      value: dataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsToHclTerraform(struct!.metricAggregationWithSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettings",
    },
    pipeline_metric_aggregation: {
      value: dataSchemasQueryElasticsearchMetricsPipelineMetricAggregationToHclTerraform(struct!.pipelineMetricAggregation),
      isBlock: true,
      type: "struct",
      storageClassType: "DataSchemasQueryElasticsearchMetricsPipelineMetricAggregation",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSchemasQueryElasticsearchMetricsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSchemasQueryElasticsearchMetrics | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count?.internalValue;
    }
    if (this._metricAggregationWithSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricAggregationWithSettings = this._metricAggregationWithSettings?.internalValue;
    }
    if (this._pipelineMetricAggregation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pipelineMetricAggregation = this._pipelineMetricAggregation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSchemasQueryElasticsearchMetrics | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._count.internalValue = undefined;
      this._metricAggregationWithSettings.internalValue = undefined;
      this._pipelineMetricAggregation.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._count.internalValue = value.count;
      this._metricAggregationWithSettings.internalValue = value.metricAggregationWithSettings;
      this._pipelineMetricAggregation.internalValue = value.pipelineMetricAggregation;
    }
  }

  // count - computed: true, optional: true, required: false
  private _count = new DataSchemasQueryElasticsearchMetricsCountOutputReference(this, "count");
  public get count() {
    return this._count;
  }
  public putCount(value: DataSchemasQueryElasticsearchMetricsCount) {
    this._count.internalValue = value;
  }
  public resetCount() {
    this._count.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count.internalValue;
  }

  // metric_aggregation_with_settings - computed: true, optional: true, required: false
  private _metricAggregationWithSettings = new DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettingsOutputReference(this, "metric_aggregation_with_settings");
  public get metricAggregationWithSettings() {
    return this._metricAggregationWithSettings;
  }
  public putMetricAggregationWithSettings(value: DataSchemasQueryElasticsearchMetricsMetricAggregationWithSettings) {
    this._metricAggregationWithSettings.internalValue = value;
  }
  public resetMetricAggregationWithSettings() {
    this._metricAggregationWithSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricAggregationWithSettingsInput() {
    return this._metricAggregationWithSettings.internalValue;
  }

  // pipeline_metric_aggregation - computed: true, optional: true, required: false
  private _pipelineMetricAggregation = new DataSchemasQueryElasticsearchMetricsPipelineMetricAggregationOutputReference(this, "pipeline_metric_aggregation");
  public get pipelineMetricAggregation() {
    return this._pipelineMetricAggregation;
  }
  public putPipelineMetricAggregation(value: DataSchemasQueryElasticsearchMetricsPipelineMetricAggregation) {
    this._pipelineMetricAggregation.internalValue = value;
  }
  public resetPipelineMetricAggregation() {
    this._pipelineMetricAggregation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineMetricAggregationInput() {
    return this._pipelineMetricAggregation.internalValue;
  }
}

export class DataSchemasQueryElasticsearchMetricsList extends cdktf.ComplexList {
  public internalValue? : DataSchemasQueryElasticsearchMetrics[] | cdktf.IResolvable

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
  public get(index: number): DataSchemasQueryElasticsearchMetricsOutputReference {
    return new DataSchemasQueryElasticsearchMetricsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch schemas_query_elasticsearch}
*/
export class DataSchemasQueryElasticsearch extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "schemas_query_elasticsearch";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSchemasQueryElasticsearch resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSchemasQueryElasticsearch to import
  * @param importFromId The id of the existing DataSchemasQueryElasticsearch that should be imported. Refer to the {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSchemasQueryElasticsearch to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "schemas_query_elasticsearch", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/grafana/schemas/0.2.0/docs/data-sources/query_elasticsearch schemas_query_elasticsearch} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSchemasQueryElasticsearchConfig
  */
  public constructor(scope: Construct, id: string, config: DataSchemasQueryElasticsearchConfig) {
    super(scope, id, {
      terraformResourceType: 'schemas_query_elasticsearch',
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
    this._alias = config.alias;
    this._bucketAggs.internalValue = config.bucketAggs;
    this._hide = config.hide;
    this._metrics.internalValue = config.metrics;
    this._query = config.query;
    this._queryType = config.queryType;
    this._refId = config.refId;
    this._timeField = config.timeField;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this.getStringAttribute('alias');
  }
  public set alias(value: string) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // bucket_aggs - computed: false, optional: true, required: false
  private _bucketAggs = new DataSchemasQueryElasticsearchBucketAggsList(this, "bucket_aggs", false);
  public get bucketAggs() {
    return this._bucketAggs;
  }
  public putBucketAggs(value: DataSchemasQueryElasticsearchBucketAggs[] | cdktf.IResolvable) {
    this._bucketAggs.internalValue = value;
  }
  public resetBucketAggs() {
    this._bucketAggs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketAggsInput() {
    return this._bucketAggs.internalValue;
  }

  // hide - computed: false, optional: true, required: false
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

  // metrics - computed: false, optional: true, required: false
  private _metrics = new DataSchemasQueryElasticsearchMetricsList(this, "metrics", false);
  public get metrics() {
    return this._metrics;
  }
  public putMetrics(value: DataSchemasQueryElasticsearchMetrics[] | cdktf.IResolvable) {
    this._metrics.internalValue = value;
  }
  public resetMetrics() {
    this._metrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsInput() {
    return this._metrics.internalValue;
  }

  // query - computed: false, optional: true, required: false
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

  // query_type - computed: false, optional: true, required: false
  private _queryType?: string; 
  public get queryType() {
    return this.getStringAttribute('query_type');
  }
  public set queryType(value: string) {
    this._queryType = value;
  }
  public resetQueryType() {
    this._queryType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryTypeInput() {
    return this._queryType;
  }

  // ref_id - computed: false, optional: false, required: true
  private _refId?: string; 
  public get refId() {
    return this.getStringAttribute('ref_id');
  }
  public set refId(value: string) {
    this._refId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get refIdInput() {
    return this._refId;
  }

  // rendered_json - computed: true, optional: false, required: false
  public get renderedJson() {
    return this.getStringAttribute('rendered_json');
  }

  // time_field - computed: false, optional: true, required: false
  private _timeField?: string; 
  public get timeField() {
    return this.getStringAttribute('time_field');
  }
  public set timeField(value: string) {
    this._timeField = value;
  }
  public resetTimeField() {
    this._timeField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeFieldInput() {
    return this._timeField;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alias: cdktf.stringToTerraform(this._alias),
      bucket_aggs: cdktf.listMapper(dataSchemasQueryElasticsearchBucketAggsToTerraform, false)(this._bucketAggs.internalValue),
      hide: cdktf.booleanToTerraform(this._hide),
      metrics: cdktf.listMapper(dataSchemasQueryElasticsearchMetricsToTerraform, false)(this._metrics.internalValue),
      query: cdktf.stringToTerraform(this._query),
      query_type: cdktf.stringToTerraform(this._queryType),
      ref_id: cdktf.stringToTerraform(this._refId),
      time_field: cdktf.stringToTerraform(this._timeField),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alias: {
        value: cdktf.stringToHclTerraform(this._alias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bucket_aggs: {
        value: cdktf.listMapperHcl(dataSchemasQueryElasticsearchBucketAggsToHclTerraform, false)(this._bucketAggs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataSchemasQueryElasticsearchBucketAggsList",
      },
      hide: {
        value: cdktf.booleanToHclTerraform(this._hide),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      metrics: {
        value: cdktf.listMapperHcl(dataSchemasQueryElasticsearchMetricsToHclTerraform, false)(this._metrics.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataSchemasQueryElasticsearchMetricsList",
      },
      query: {
        value: cdktf.stringToHclTerraform(this._query),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      query_type: {
        value: cdktf.stringToHclTerraform(this._queryType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ref_id: {
        value: cdktf.stringToHclTerraform(this._refId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_field: {
        value: cdktf.stringToHclTerraform(this._timeField),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
