// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/metering_computation_usage_carbon_emissions_queries
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciMeteringComputationUsageCarbonEmissionsQueriesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/metering_computation_usage_carbon_emissions_queries#compartment_id DataOciMeteringComputationUsageCarbonEmissionsQueries#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/metering_computation_usage_carbon_emissions_queries#id DataOciMeteringComputationUsageCarbonEmissionsQueries#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/metering_computation_usage_carbon_emissions_queries#filter DataOciMeteringComputationUsageCarbonEmissionsQueries#filter}
  */
  readonly filter?: DataOciMeteringComputationUsageCarbonEmissionsQueriesFilter[] | cdktf.IResolvable;
}
export interface DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionCostAnalysisUi {
}

export function dataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionCostAnalysisUiToTerraform(struct?: DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionCostAnalysisUi): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionCostAnalysisUiToHclTerraform(struct?: DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionCostAnalysisUi): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionCostAnalysisUiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionCostAnalysisUi | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionCostAnalysisUi | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // graph - computed: true, optional: false, required: false
  public get graph() {
    return this.getStringAttribute('graph');
  }

  // is_cumulative_graph - computed: true, optional: false, required: false
  public get isCumulativeGraph() {
    return this.getBooleanAttribute('is_cumulative_graph');
  }
}

export class DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionCostAnalysisUiList extends cdktf.ComplexList {

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
  public get(index: number): DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionCostAnalysisUiOutputReference {
    return new DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionCostAnalysisUiOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryGroupByTag {
}

export function dataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryGroupByTagToTerraform(struct?: DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryGroupByTag): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryGroupByTagToHclTerraform(struct?: DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryGroupByTag): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryGroupByTagOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryGroupByTag | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryGroupByTag | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryGroupByTagList extends cdktf.ComplexList {

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
  public get(index: number): DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryGroupByTagOutputReference {
    return new DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryGroupByTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQuery {
}

export function dataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryToTerraform(struct?: DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryToHclTerraform(struct?: DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // compartment_depth - computed: true, optional: false, required: false
  public get compartmentDepth() {
    return this.getNumberAttribute('compartment_depth');
  }

  // date_range_name - computed: true, optional: false, required: false
  public get dateRangeName() {
    return this.getStringAttribute('date_range_name');
  }

  // emission_calculation_method - computed: true, optional: false, required: false
  public get emissionCalculationMethod() {
    return this.getStringAttribute('emission_calculation_method');
  }

  // emission_type - computed: true, optional: false, required: false
  public get emissionType() {
    return this.getStringAttribute('emission_type');
  }

  // granularity - computed: true, optional: false, required: false
  public get granularity() {
    return this.getStringAttribute('granularity');
  }

  // group_by - computed: true, optional: false, required: false
  public get groupBy() {
    return this.getListAttribute('group_by');
  }

  // group_by_tag - computed: true, optional: false, required: false
  private _groupByTag = new DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryGroupByTagList(this, "group_by_tag", false);
  public get groupByTag() {
    return this._groupByTag;
  }

  // is_aggregate_by_time - computed: true, optional: false, required: false
  public get isAggregateByTime() {
    return this.getBooleanAttribute('is_aggregate_by_time');
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }

  // time_usage_ended - computed: true, optional: false, required: false
  public get timeUsageEnded() {
    return this.getStringAttribute('time_usage_ended');
  }

  // time_usage_started - computed: true, optional: false, required: false
  public get timeUsageStarted() {
    return this.getStringAttribute('time_usage_started');
  }

  // usage_carbon_emissions_query_filter - computed: true, optional: false, required: false
  public get usageCarbonEmissionsQueryFilter() {
    return this.getStringAttribute('usage_carbon_emissions_query_filter');
  }
}

export class DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryList extends cdktf.ComplexList {

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
  public get(index: number): DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryOutputReference {
    return new DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinition {
}

export function dataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionToTerraform(struct?: DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionToHclTerraform(struct?: DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cost_analysis_ui - computed: true, optional: false, required: false
  private _costAnalysisUi = new DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionCostAnalysisUiList(this, "cost_analysis_ui", false);
  public get costAnalysisUi() {
    return this._costAnalysisUi;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // report_query - computed: true, optional: false, required: false
  private _reportQuery = new DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryList(this, "report_query", false);
  public get reportQuery() {
    return this._reportQuery;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }
}

export class DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionOutputReference {
    return new DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItems {
}

export function dataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsToTerraform(struct?: DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsToHclTerraform(struct?: DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // query_definition - computed: true, optional: false, required: false
  private _queryDefinition = new DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionList(this, "query_definition", false);
  public get queryDefinition() {
    return this._queryDefinition;
  }
}

export class DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsOutputReference {
    return new DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollection {
}

export function dataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionToTerraform(struct?: DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionToHclTerraform(struct?: DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionOutputReference {
    return new DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciMeteringComputationUsageCarbonEmissionsQueriesFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/metering_computation_usage_carbon_emissions_queries#name DataOciMeteringComputationUsageCarbonEmissionsQueries#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/metering_computation_usage_carbon_emissions_queries#regex DataOciMeteringComputationUsageCarbonEmissionsQueries#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/metering_computation_usage_carbon_emissions_queries#values DataOciMeteringComputationUsageCarbonEmissionsQueries#values}
  */
  readonly values: string[];
}

export function dataOciMeteringComputationUsageCarbonEmissionsQueriesFilterToTerraform(struct?: DataOciMeteringComputationUsageCarbonEmissionsQueriesFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    regex: cdktf.booleanToTerraform(struct!.regex),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataOciMeteringComputationUsageCarbonEmissionsQueriesFilterToHclTerraform(struct?: DataOciMeteringComputationUsageCarbonEmissionsQueriesFilter | cdktf.IResolvable): any {
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
    regex: {
      value: cdktf.booleanToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataOciMeteringComputationUsageCarbonEmissionsQueriesFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciMeteringComputationUsageCarbonEmissionsQueriesFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciMeteringComputationUsageCarbonEmissionsQueriesFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._regex = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._regex = value.regex;
      this._values = value.values;
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

  // regex - computed: false, optional: true, required: false
  private _regex?: boolean | cdktf.IResolvable; 
  public get regex() {
    return this.getBooleanAttribute('regex');
  }
  public set regex(value: boolean | cdktf.IResolvable) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataOciMeteringComputationUsageCarbonEmissionsQueriesFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciMeteringComputationUsageCarbonEmissionsQueriesFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciMeteringComputationUsageCarbonEmissionsQueriesFilterOutputReference {
    return new DataOciMeteringComputationUsageCarbonEmissionsQueriesFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/metering_computation_usage_carbon_emissions_queries oci_metering_computation_usage_carbon_emissions_queries}
*/
export class DataOciMeteringComputationUsageCarbonEmissionsQueries extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_metering_computation_usage_carbon_emissions_queries";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciMeteringComputationUsageCarbonEmissionsQueries resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciMeteringComputationUsageCarbonEmissionsQueries to import
  * @param importFromId The id of the existing DataOciMeteringComputationUsageCarbonEmissionsQueries that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/metering_computation_usage_carbon_emissions_queries#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciMeteringComputationUsageCarbonEmissionsQueries to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_metering_computation_usage_carbon_emissions_queries", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/metering_computation_usage_carbon_emissions_queries oci_metering_computation_usage_carbon_emissions_queries} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciMeteringComputationUsageCarbonEmissionsQueriesConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciMeteringComputationUsageCarbonEmissionsQueriesConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_metering_computation_usage_carbon_emissions_queries',
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
    this._filter.internalValue = config.filter;
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

  // usage_carbon_emissions_query_collection - computed: true, optional: false, required: false
  private _usageCarbonEmissionsQueryCollection = new DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionList(this, "usage_carbon_emissions_query_collection", false);
  public get usageCarbonEmissionsQueryCollection() {
    return this._usageCarbonEmissionsQueryCollection;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciMeteringComputationUsageCarbonEmissionsQueriesFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciMeteringComputationUsageCarbonEmissionsQueriesFilter[] | cdktf.IResolvable) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      id: cdktf.stringToTerraform(this._id),
      filter: cdktf.listMapper(dataOciMeteringComputationUsageCarbonEmissionsQueriesFilterToTerraform, true)(this._filter.internalValue),
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
      filter: {
        value: cdktf.listMapperHcl(dataOciMeteringComputationUsageCarbonEmissionsQueriesFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciMeteringComputationUsageCarbonEmissionsQueriesFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
