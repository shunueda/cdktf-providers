// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/metering_computation_query
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MeteringComputationQueryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/metering_computation_query#compartment_id MeteringComputationQuery#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/metering_computation_query#id MeteringComputationQuery#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * query_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/metering_computation_query#query_definition MeteringComputationQuery#query_definition}
  */
  readonly queryDefinition: MeteringComputationQueryQueryDefinition;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/metering_computation_query#timeouts MeteringComputationQuery#timeouts}
  */
  readonly timeouts?: MeteringComputationQueryTimeouts;
}
export interface MeteringComputationQueryQueryDefinitionCostAnalysisUi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/metering_computation_query#graph MeteringComputationQuery#graph}
  */
  readonly graph?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/metering_computation_query#is_cumulative_graph MeteringComputationQuery#is_cumulative_graph}
  */
  readonly isCumulativeGraph?: boolean | cdktf.IResolvable;
}

export function meteringComputationQueryQueryDefinitionCostAnalysisUiToTerraform(struct?: MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference | MeteringComputationQueryQueryDefinitionCostAnalysisUi): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    graph: cdktf.stringToTerraform(struct!.graph),
    is_cumulative_graph: cdktf.booleanToTerraform(struct!.isCumulativeGraph),
  }
}


export function meteringComputationQueryQueryDefinitionCostAnalysisUiToHclTerraform(struct?: MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference | MeteringComputationQueryQueryDefinitionCostAnalysisUi): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    graph: {
      value: cdktf.stringToHclTerraform(struct!.graph),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_cumulative_graph: {
      value: cdktf.booleanToHclTerraform(struct!.isCumulativeGraph),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MeteringComputationQueryQueryDefinitionCostAnalysisUi | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._graph !== undefined) {
      hasAnyValues = true;
      internalValueResult.graph = this._graph;
    }
    if (this._isCumulativeGraph !== undefined) {
      hasAnyValues = true;
      internalValueResult.isCumulativeGraph = this._isCumulativeGraph;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MeteringComputationQueryQueryDefinitionCostAnalysisUi | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._graph = undefined;
      this._isCumulativeGraph = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._graph = value.graph;
      this._isCumulativeGraph = value.isCumulativeGraph;
    }
  }

  // graph - computed: true, optional: true, required: false
  private _graph?: string; 
  public get graph() {
    return this.getStringAttribute('graph');
  }
  public set graph(value: string) {
    this._graph = value;
  }
  public resetGraph() {
    this._graph = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get graphInput() {
    return this._graph;
  }

  // is_cumulative_graph - computed: true, optional: true, required: false
  private _isCumulativeGraph?: boolean | cdktf.IResolvable; 
  public get isCumulativeGraph() {
    return this.getBooleanAttribute('is_cumulative_graph');
  }
  public set isCumulativeGraph(value: boolean | cdktf.IResolvable) {
    this._isCumulativeGraph = value;
  }
  public resetIsCumulativeGraph() {
    this._isCumulativeGraph = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isCumulativeGraphInput() {
    return this._isCumulativeGraph;
  }
}
export interface MeteringComputationQueryQueryDefinitionReportQueryForecast {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/metering_computation_query#forecast_type MeteringComputationQuery#forecast_type}
  */
  readonly forecastType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/metering_computation_query#time_forecast_ended MeteringComputationQuery#time_forecast_ended}
  */
  readonly timeForecastEnded: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/metering_computation_query#time_forecast_started MeteringComputationQuery#time_forecast_started}
  */
  readonly timeForecastStarted?: string;
}

export function meteringComputationQueryQueryDefinitionReportQueryForecastToTerraform(struct?: MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference | MeteringComputationQueryQueryDefinitionReportQueryForecast): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    forecast_type: cdktf.stringToTerraform(struct!.forecastType),
    time_forecast_ended: cdktf.stringToTerraform(struct!.timeForecastEnded),
    time_forecast_started: cdktf.stringToTerraform(struct!.timeForecastStarted),
  }
}


export function meteringComputationQueryQueryDefinitionReportQueryForecastToHclTerraform(struct?: MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference | MeteringComputationQueryQueryDefinitionReportQueryForecast): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    forecast_type: {
      value: cdktf.stringToHclTerraform(struct!.forecastType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_forecast_ended: {
      value: cdktf.stringToHclTerraform(struct!.timeForecastEnded),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_forecast_started: {
      value: cdktf.stringToHclTerraform(struct!.timeForecastStarted),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MeteringComputationQueryQueryDefinitionReportQueryForecast | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._forecastType !== undefined) {
      hasAnyValues = true;
      internalValueResult.forecastType = this._forecastType;
    }
    if (this._timeForecastEnded !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeForecastEnded = this._timeForecastEnded;
    }
    if (this._timeForecastStarted !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeForecastStarted = this._timeForecastStarted;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MeteringComputationQueryQueryDefinitionReportQueryForecast | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._forecastType = undefined;
      this._timeForecastEnded = undefined;
      this._timeForecastStarted = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._forecastType = value.forecastType;
      this._timeForecastEnded = value.timeForecastEnded;
      this._timeForecastStarted = value.timeForecastStarted;
    }
  }

  // forecast_type - computed: true, optional: true, required: false
  private _forecastType?: string; 
  public get forecastType() {
    return this.getStringAttribute('forecast_type');
  }
  public set forecastType(value: string) {
    this._forecastType = value;
  }
  public resetForecastType() {
    this._forecastType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forecastTypeInput() {
    return this._forecastType;
  }

  // time_forecast_ended - computed: false, optional: false, required: true
  private _timeForecastEnded?: string; 
  public get timeForecastEnded() {
    return this.getStringAttribute('time_forecast_ended');
  }
  public set timeForecastEnded(value: string) {
    this._timeForecastEnded = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeForecastEndedInput() {
    return this._timeForecastEnded;
  }

  // time_forecast_started - computed: true, optional: true, required: false
  private _timeForecastStarted?: string; 
  public get timeForecastStarted() {
    return this.getStringAttribute('time_forecast_started');
  }
  public set timeForecastStarted(value: string) {
    this._timeForecastStarted = value;
  }
  public resetTimeForecastStarted() {
    this._timeForecastStarted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeForecastStartedInput() {
    return this._timeForecastStarted;
  }
}
export interface MeteringComputationQueryQueryDefinitionReportQueryGroupByTag {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/metering_computation_query#key MeteringComputationQuery#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/metering_computation_query#namespace MeteringComputationQuery#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/metering_computation_query#value MeteringComputationQuery#value}
  */
  readonly value?: string;
}

export function meteringComputationQueryQueryDefinitionReportQueryGroupByTagToTerraform(struct?: MeteringComputationQueryQueryDefinitionReportQueryGroupByTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function meteringComputationQueryQueryDefinitionReportQueryGroupByTagToHclTerraform(struct?: MeteringComputationQueryQueryDefinitionReportQueryGroupByTag | cdktf.IResolvable): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
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

export class MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MeteringComputationQueryQueryDefinitionReportQueryGroupByTag | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MeteringComputationQueryQueryDefinitionReportQueryGroupByTag | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._namespace = undefined;
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
      this._namespace = value.namespace;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: true, required: false
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

  // namespace - computed: true, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class MeteringComputationQueryQueryDefinitionReportQueryGroupByTagList extends cdktf.ComplexList {
  public internalValue? : MeteringComputationQueryQueryDefinitionReportQueryGroupByTag[] | cdktf.IResolvable

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
  public get(index: number): MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference {
    return new MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MeteringComputationQueryQueryDefinitionReportQuery {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/metering_computation_query#compartment_depth MeteringComputationQuery#compartment_depth}
  */
  readonly compartmentDepth?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/metering_computation_query#date_range_name MeteringComputationQuery#date_range_name}
  */
  readonly dateRangeName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/metering_computation_query#filter MeteringComputationQuery#filter}
  */
  readonly filter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/metering_computation_query#granularity MeteringComputationQuery#granularity}
  */
  readonly granularity: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/metering_computation_query#group_by MeteringComputationQuery#group_by}
  */
  readonly groupBy?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/metering_computation_query#is_aggregate_by_time MeteringComputationQuery#is_aggregate_by_time}
  */
  readonly isAggregateByTime?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/metering_computation_query#query_type MeteringComputationQuery#query_type}
  */
  readonly queryType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/metering_computation_query#tenant_id MeteringComputationQuery#tenant_id}
  */
  readonly tenantId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/metering_computation_query#time_usage_ended MeteringComputationQuery#time_usage_ended}
  */
  readonly timeUsageEnded?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/metering_computation_query#time_usage_started MeteringComputationQuery#time_usage_started}
  */
  readonly timeUsageStarted?: string;
  /**
  * forecast block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/metering_computation_query#forecast MeteringComputationQuery#forecast}
  */
  readonly forecast?: MeteringComputationQueryQueryDefinitionReportQueryForecast;
  /**
  * group_by_tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/metering_computation_query#group_by_tag MeteringComputationQuery#group_by_tag}
  */
  readonly groupByTag?: MeteringComputationQueryQueryDefinitionReportQueryGroupByTag[] | cdktf.IResolvable;
}

export function meteringComputationQueryQueryDefinitionReportQueryToTerraform(struct?: MeteringComputationQueryQueryDefinitionReportQueryOutputReference | MeteringComputationQueryQueryDefinitionReportQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compartment_depth: cdktf.numberToTerraform(struct!.compartmentDepth),
    date_range_name: cdktf.stringToTerraform(struct!.dateRangeName),
    filter: cdktf.stringToTerraform(struct!.filter),
    granularity: cdktf.stringToTerraform(struct!.granularity),
    group_by: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.groupBy),
    is_aggregate_by_time: cdktf.booleanToTerraform(struct!.isAggregateByTime),
    query_type: cdktf.stringToTerraform(struct!.queryType),
    tenant_id: cdktf.stringToTerraform(struct!.tenantId),
    time_usage_ended: cdktf.stringToTerraform(struct!.timeUsageEnded),
    time_usage_started: cdktf.stringToTerraform(struct!.timeUsageStarted),
    forecast: meteringComputationQueryQueryDefinitionReportQueryForecastToTerraform(struct!.forecast),
    group_by_tag: cdktf.listMapper(meteringComputationQueryQueryDefinitionReportQueryGroupByTagToTerraform, true)(struct!.groupByTag),
  }
}


export function meteringComputationQueryQueryDefinitionReportQueryToHclTerraform(struct?: MeteringComputationQueryQueryDefinitionReportQueryOutputReference | MeteringComputationQueryQueryDefinitionReportQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compartment_depth: {
      value: cdktf.numberToHclTerraform(struct!.compartmentDepth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    date_range_name: {
      value: cdktf.stringToHclTerraform(struct!.dateRangeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter: {
      value: cdktf.stringToHclTerraform(struct!.filter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    granularity: {
      value: cdktf.stringToHclTerraform(struct!.granularity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_by: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.groupBy),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    is_aggregate_by_time: {
      value: cdktf.booleanToHclTerraform(struct!.isAggregateByTime),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    query_type: {
      value: cdktf.stringToHclTerraform(struct!.queryType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant_id: {
      value: cdktf.stringToHclTerraform(struct!.tenantId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_usage_ended: {
      value: cdktf.stringToHclTerraform(struct!.timeUsageEnded),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_usage_started: {
      value: cdktf.stringToHclTerraform(struct!.timeUsageStarted),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    forecast: {
      value: meteringComputationQueryQueryDefinitionReportQueryForecastToHclTerraform(struct!.forecast),
      isBlock: true,
      type: "list",
      storageClassType: "MeteringComputationQueryQueryDefinitionReportQueryForecastList",
    },
    group_by_tag: {
      value: cdktf.listMapperHcl(meteringComputationQueryQueryDefinitionReportQueryGroupByTagToHclTerraform, true)(struct!.groupByTag),
      isBlock: true,
      type: "list",
      storageClassType: "MeteringComputationQueryQueryDefinitionReportQueryGroupByTagList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MeteringComputationQueryQueryDefinitionReportQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MeteringComputationQueryQueryDefinitionReportQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compartmentDepth !== undefined) {
      hasAnyValues = true;
      internalValueResult.compartmentDepth = this._compartmentDepth;
    }
    if (this._dateRangeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dateRangeName = this._dateRangeName;
    }
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    if (this._granularity !== undefined) {
      hasAnyValues = true;
      internalValueResult.granularity = this._granularity;
    }
    if (this._groupBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupBy = this._groupBy;
    }
    if (this._isAggregateByTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.isAggregateByTime = this._isAggregateByTime;
    }
    if (this._queryType !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryType = this._queryType;
    }
    if (this._tenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantId = this._tenantId;
    }
    if (this._timeUsageEnded !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeUsageEnded = this._timeUsageEnded;
    }
    if (this._timeUsageStarted !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeUsageStarted = this._timeUsageStarted;
    }
    if (this._forecast?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.forecast = this._forecast?.internalValue;
    }
    if (this._groupByTag?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupByTag = this._groupByTag?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MeteringComputationQueryQueryDefinitionReportQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._compartmentDepth = undefined;
      this._dateRangeName = undefined;
      this._filter = undefined;
      this._granularity = undefined;
      this._groupBy = undefined;
      this._isAggregateByTime = undefined;
      this._queryType = undefined;
      this._tenantId = undefined;
      this._timeUsageEnded = undefined;
      this._timeUsageStarted = undefined;
      this._forecast.internalValue = undefined;
      this._groupByTag.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._compartmentDepth = value.compartmentDepth;
      this._dateRangeName = value.dateRangeName;
      this._filter = value.filter;
      this._granularity = value.granularity;
      this._groupBy = value.groupBy;
      this._isAggregateByTime = value.isAggregateByTime;
      this._queryType = value.queryType;
      this._tenantId = value.tenantId;
      this._timeUsageEnded = value.timeUsageEnded;
      this._timeUsageStarted = value.timeUsageStarted;
      this._forecast.internalValue = value.forecast;
      this._groupByTag.internalValue = value.groupByTag;
    }
  }

  // compartment_depth - computed: true, optional: true, required: false
  private _compartmentDepth?: number; 
  public get compartmentDepth() {
    return this.getNumberAttribute('compartment_depth');
  }
  public set compartmentDepth(value: number) {
    this._compartmentDepth = value;
  }
  public resetCompartmentDepth() {
    this._compartmentDepth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentDepthInput() {
    return this._compartmentDepth;
  }

  // date_range_name - computed: true, optional: true, required: false
  private _dateRangeName?: string; 
  public get dateRangeName() {
    return this.getStringAttribute('date_range_name');
  }
  public set dateRangeName(value: string) {
    this._dateRangeName = value;
  }
  public resetDateRangeName() {
    this._dateRangeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateRangeNameInput() {
    return this._dateRangeName;
  }

  // filter - computed: true, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // granularity - computed: false, optional: false, required: true
  private _granularity?: string; 
  public get granularity() {
    return this.getStringAttribute('granularity');
  }
  public set granularity(value: string) {
    this._granularity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get granularityInput() {
    return this._granularity;
  }

  // group_by - computed: true, optional: true, required: false
  private _groupBy?: string[]; 
  public get groupBy() {
    return this.getListAttribute('group_by');
  }
  public set groupBy(value: string[]) {
    this._groupBy = value;
  }
  public resetGroupBy() {
    this._groupBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByInput() {
    return this._groupBy;
  }

  // is_aggregate_by_time - computed: true, optional: true, required: false
  private _isAggregateByTime?: boolean | cdktf.IResolvable; 
  public get isAggregateByTime() {
    return this.getBooleanAttribute('is_aggregate_by_time');
  }
  public set isAggregateByTime(value: boolean | cdktf.IResolvable) {
    this._isAggregateByTime = value;
  }
  public resetIsAggregateByTime() {
    this._isAggregateByTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAggregateByTimeInput() {
    return this._isAggregateByTime;
  }

  // query_type - computed: true, optional: true, required: false
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

  // tenant_id - computed: false, optional: false, required: true
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // time_usage_ended - computed: true, optional: true, required: false
  private _timeUsageEnded?: string; 
  public get timeUsageEnded() {
    return this.getStringAttribute('time_usage_ended');
  }
  public set timeUsageEnded(value: string) {
    this._timeUsageEnded = value;
  }
  public resetTimeUsageEnded() {
    this._timeUsageEnded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeUsageEndedInput() {
    return this._timeUsageEnded;
  }

  // time_usage_started - computed: true, optional: true, required: false
  private _timeUsageStarted?: string; 
  public get timeUsageStarted() {
    return this.getStringAttribute('time_usage_started');
  }
  public set timeUsageStarted(value: string) {
    this._timeUsageStarted = value;
  }
  public resetTimeUsageStarted() {
    this._timeUsageStarted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeUsageStartedInput() {
    return this._timeUsageStarted;
  }

  // forecast - computed: false, optional: true, required: false
  private _forecast = new MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference(this, "forecast");
  public get forecast() {
    return this._forecast;
  }
  public putForecast(value: MeteringComputationQueryQueryDefinitionReportQueryForecast) {
    this._forecast.internalValue = value;
  }
  public resetForecast() {
    this._forecast.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forecastInput() {
    return this._forecast.internalValue;
  }

  // group_by_tag - computed: false, optional: true, required: false
  private _groupByTag = new MeteringComputationQueryQueryDefinitionReportQueryGroupByTagList(this, "group_by_tag", false);
  public get groupByTag() {
    return this._groupByTag;
  }
  public putGroupByTag(value: MeteringComputationQueryQueryDefinitionReportQueryGroupByTag[] | cdktf.IResolvable) {
    this._groupByTag.internalValue = value;
  }
  public resetGroupByTag() {
    this._groupByTag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByTagInput() {
    return this._groupByTag.internalValue;
  }
}
export interface MeteringComputationQueryQueryDefinition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/metering_computation_query#display_name MeteringComputationQuery#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/metering_computation_query#version MeteringComputationQuery#version}
  */
  readonly version: number;
  /**
  * cost_analysis_ui block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/metering_computation_query#cost_analysis_ui MeteringComputationQuery#cost_analysis_ui}
  */
  readonly costAnalysisUi: MeteringComputationQueryQueryDefinitionCostAnalysisUi;
  /**
  * report_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/metering_computation_query#report_query MeteringComputationQuery#report_query}
  */
  readonly reportQuery: MeteringComputationQueryQueryDefinitionReportQuery;
}

export function meteringComputationQueryQueryDefinitionToTerraform(struct?: MeteringComputationQueryQueryDefinitionOutputReference | MeteringComputationQueryQueryDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_name: cdktf.stringToTerraform(struct!.displayName),
    version: cdktf.numberToTerraform(struct!.version),
    cost_analysis_ui: meteringComputationQueryQueryDefinitionCostAnalysisUiToTerraform(struct!.costAnalysisUi),
    report_query: meteringComputationQueryQueryDefinitionReportQueryToTerraform(struct!.reportQuery),
  }
}


export function meteringComputationQueryQueryDefinitionToHclTerraform(struct?: MeteringComputationQueryQueryDefinitionOutputReference | MeteringComputationQueryQueryDefinition): any {
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
    version: {
      value: cdktf.numberToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cost_analysis_ui: {
      value: meteringComputationQueryQueryDefinitionCostAnalysisUiToHclTerraform(struct!.costAnalysisUi),
      isBlock: true,
      type: "list",
      storageClassType: "MeteringComputationQueryQueryDefinitionCostAnalysisUiList",
    },
    report_query: {
      value: meteringComputationQueryQueryDefinitionReportQueryToHclTerraform(struct!.reportQuery),
      isBlock: true,
      type: "list",
      storageClassType: "MeteringComputationQueryQueryDefinitionReportQueryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MeteringComputationQueryQueryDefinitionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MeteringComputationQueryQueryDefinition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._costAnalysisUi?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.costAnalysisUi = this._costAnalysisUi?.internalValue;
    }
    if (this._reportQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.reportQuery = this._reportQuery?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MeteringComputationQueryQueryDefinition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._displayName = undefined;
      this._version = undefined;
      this._costAnalysisUi.internalValue = undefined;
      this._reportQuery.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._displayName = value.displayName;
      this._version = value.version;
      this._costAnalysisUi.internalValue = value.costAnalysisUi;
      this._reportQuery.internalValue = value.reportQuery;
    }
  }

  // display_name - computed: false, optional: false, required: true
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

  // version - computed: false, optional: false, required: true
  private _version?: number; 
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // cost_analysis_ui - computed: false, optional: false, required: true
  private _costAnalysisUi = new MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference(this, "cost_analysis_ui");
  public get costAnalysisUi() {
    return this._costAnalysisUi;
  }
  public putCostAnalysisUi(value: MeteringComputationQueryQueryDefinitionCostAnalysisUi) {
    this._costAnalysisUi.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get costAnalysisUiInput() {
    return this._costAnalysisUi.internalValue;
  }

  // report_query - computed: false, optional: false, required: true
  private _reportQuery = new MeteringComputationQueryQueryDefinitionReportQueryOutputReference(this, "report_query");
  public get reportQuery() {
    return this._reportQuery;
  }
  public putReportQuery(value: MeteringComputationQueryQueryDefinitionReportQuery) {
    this._reportQuery.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get reportQueryInput() {
    return this._reportQuery.internalValue;
  }
}
export interface MeteringComputationQueryTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/metering_computation_query#create MeteringComputationQuery#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/metering_computation_query#delete MeteringComputationQuery#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/metering_computation_query#update MeteringComputationQuery#update}
  */
  readonly update?: string;
}

export function meteringComputationQueryTimeoutsToTerraform(struct?: MeteringComputationQueryTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function meteringComputationQueryTimeoutsToHclTerraform(struct?: MeteringComputationQueryTimeouts | cdktf.IResolvable): any {
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

export class MeteringComputationQueryTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MeteringComputationQueryTimeouts | cdktf.IResolvable | undefined {
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
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MeteringComputationQueryTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/metering_computation_query oci_metering_computation_query}
*/
export class MeteringComputationQuery extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_metering_computation_query";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MeteringComputationQuery resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MeteringComputationQuery to import
  * @param importFromId The id of the existing MeteringComputationQuery that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/metering_computation_query#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MeteringComputationQuery to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_metering_computation_query", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/metering_computation_query oci_metering_computation_query} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MeteringComputationQueryConfig
  */
  public constructor(scope: Construct, id: string, config: MeteringComputationQueryConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_metering_computation_query',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.25.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._compartmentId = config.compartmentId;
    this._id = config.id;
    this._queryDefinition.internalValue = config.queryDefinition;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
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

  // query_definition - computed: false, optional: false, required: true
  private _queryDefinition = new MeteringComputationQueryQueryDefinitionOutputReference(this, "query_definition");
  public get queryDefinition() {
    return this._queryDefinition;
  }
  public putQueryDefinition(value: MeteringComputationQueryQueryDefinition) {
    this._queryDefinition.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryDefinitionInput() {
    return this._queryDefinition.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MeteringComputationQueryTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MeteringComputationQueryTimeouts) {
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
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      id: cdktf.stringToTerraform(this._id),
      query_definition: meteringComputationQueryQueryDefinitionToTerraform(this._queryDefinition.internalValue),
      timeouts: meteringComputationQueryTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
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
      query_definition: {
        value: meteringComputationQueryQueryDefinitionToHclTerraform(this._queryDefinition.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MeteringComputationQueryQueryDefinitionList",
      },
      timeouts: {
        value: meteringComputationQueryTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MeteringComputationQueryTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
