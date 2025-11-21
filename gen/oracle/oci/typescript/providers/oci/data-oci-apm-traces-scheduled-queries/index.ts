// https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/apm_traces_scheduled_queries
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciApmTracesScheduledQueriesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/apm_traces_scheduled_queries#apm_domain_id DataOciApmTracesScheduledQueries#apm_domain_id}
  */
  readonly apmDomainId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/apm_traces_scheduled_queries#display_name DataOciApmTracesScheduledQueries#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/apm_traces_scheduled_queries#id DataOciApmTracesScheduledQueries#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/apm_traces_scheduled_queries#filter DataOciApmTracesScheduledQueries#filter}
  */
  readonly filter?: DataOciApmTracesScheduledQueriesFilter[] | cdktf.IResolvable;
}
export interface DataOciApmTracesScheduledQueriesScheduledQueryCollectionItemsScheduledQueryProcessingConfigurationCustomMetric {
}

export function dataOciApmTracesScheduledQueriesScheduledQueryCollectionItemsScheduledQueryProcessingConfigurationCustomMetricToTerraform(struct?: DataOciApmTracesScheduledQueriesScheduledQueryCollectionItemsScheduledQueryProcessingConfigurationCustomMetric): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApmTracesScheduledQueriesScheduledQueryCollectionItemsScheduledQueryProcessingConfigurationCustomMetricToHclTerraform(struct?: DataOciApmTracesScheduledQueriesScheduledQueryCollectionItemsScheduledQueryProcessingConfigurationCustomMetric): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApmTracesScheduledQueriesScheduledQueryCollectionItemsScheduledQueryProcessingConfigurationCustomMetricOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApmTracesScheduledQueriesScheduledQueryCollectionItemsScheduledQueryProcessingConfigurationCustomMetric | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApmTracesScheduledQueriesScheduledQueryCollectionItemsScheduledQueryProcessingConfigurationCustomMetric | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // compartment - computed: true, optional: false, required: false
  public get compartment() {
    return this.getStringAttribute('compartment');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // is_anomaly_detection_enabled - computed: true, optional: false, required: false
  public get isAnomalyDetectionEnabled() {
    return this.getBooleanAttribute('is_anomaly_detection_enabled');
  }

  // is_metric_published - computed: true, optional: false, required: false
  public get isMetricPublished() {
    return this.getBooleanAttribute('is_metric_published');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // resource_group - computed: true, optional: false, required: false
  public get resourceGroup() {
    return this.getStringAttribute('resource_group');
  }

  // unit - computed: true, optional: false, required: false
  public get unit() {
    return this.getStringAttribute('unit');
  }
}

export class DataOciApmTracesScheduledQueriesScheduledQueryCollectionItemsScheduledQueryProcessingConfigurationCustomMetricList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApmTracesScheduledQueriesScheduledQueryCollectionItemsScheduledQueryProcessingConfigurationCustomMetricOutputReference {
    return new DataOciApmTracesScheduledQueriesScheduledQueryCollectionItemsScheduledQueryProcessingConfigurationCustomMetricOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApmTracesScheduledQueriesScheduledQueryCollectionItemsScheduledQueryProcessingConfigurationObjectStorage {
}

export function dataOciApmTracesScheduledQueriesScheduledQueryCollectionItemsScheduledQueryProcessingConfigurationObjectStorageToTerraform(struct?: DataOciApmTracesScheduledQueriesScheduledQueryCollectionItemsScheduledQueryProcessingConfigurationObjectStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApmTracesScheduledQueriesScheduledQueryCollectionItemsScheduledQueryProcessingConfigurationObjectStorageToHclTerraform(struct?: DataOciApmTracesScheduledQueriesScheduledQueryCollectionItemsScheduledQueryProcessingConfigurationObjectStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApmTracesScheduledQueriesScheduledQueryCollectionItemsScheduledQueryProcessingConfigurationObjectStorageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApmTracesScheduledQueriesScheduledQueryCollectionItemsScheduledQueryProcessingConfigurationObjectStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApmTracesScheduledQueriesScheduledQueryCollectionItemsScheduledQueryProcessingConfigurationObjectStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bucket - computed: true, optional: false, required: false
  public get bucket() {
    return this.getStringAttribute('bucket');
  }

  // name_space - computed: true, optional: false, required: false
  public get nameSpace() {
    return this.getStringAttribute('name_space');
  }

  // object_name_prefix - computed: true, optional: false, required: false
  public get objectNamePrefix() {
    return this.getStringAttribute('object_name_prefix');
  }
}

export class DataOciApmTracesScheduledQueriesScheduledQueryCollectionItemsScheduledQueryProcessingConfigurationObjectStorageList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApmTracesScheduledQueriesScheduledQueryCollectionItemsScheduledQueryProcessingConfigurationObjectStorageOutputReference {
    return new DataOciApmTracesScheduledQueriesScheduledQueryCollectionItemsScheduledQueryProcessingConfigurationObjectStorageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApmTracesScheduledQueriesScheduledQueryCollectionItemsScheduledQueryProcessingConfigurationStreaming {
}

export function dataOciApmTracesScheduledQueriesScheduledQueryCollectionItemsScheduledQueryProcessingConfigurationStreamingToTerraform(struct?: DataOciApmTracesScheduledQueriesScheduledQueryCollectionItemsScheduledQueryProcessingConfigurationStreaming): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApmTracesScheduledQueriesScheduledQueryCollectionItemsScheduledQueryProcessingConfigurationStreamingToHclTerraform(struct?: DataOciApmTracesScheduledQueriesScheduledQueryCollectionItemsScheduledQueryProcessingConfigurationStreaming): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApmTracesScheduledQueriesScheduledQueryCollectionItemsScheduledQueryProcessingConfigurationStreamingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApmTracesScheduledQueriesScheduledQueryCollectionItemsScheduledQueryProcessingConfigurationStreaming | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApmTracesScheduledQueriesScheduledQueryCollectionItemsScheduledQueryProcessingConfigurationStreaming | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // stream_id - computed: true, optional: false, required: false
  public get streamId() {
    return this.getStringAttribute('stream_id');
  }
}

export class DataOciApmTracesScheduledQueriesScheduledQueryCollectionItemsScheduledQueryProcessingConfigurationStreamingList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApmTracesScheduledQueriesScheduledQueryCollectionItemsScheduledQueryProcessingConfigurationStreamingOutputReference {
    return new DataOciApmTracesScheduledQueriesScheduledQueryCollectionItemsScheduledQueryProcessingConfigurationStreamingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApmTracesScheduledQueriesScheduledQueryCollectionItemsScheduledQueryProcessingConfiguration {
}

export function dataOciApmTracesScheduledQueriesScheduledQueryCollectionItemsScheduledQueryProcessingConfigurationToTerraform(struct?: DataOciApmTracesScheduledQueriesScheduledQueryCollectionItemsScheduledQueryProcessingConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApmTracesScheduledQueriesScheduledQueryCollectionItemsScheduledQueryProcessingConfigurationToHclTerraform(struct?: DataOciApmTracesScheduledQueriesScheduledQueryCollectionItemsScheduledQueryProcessingConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApmTracesScheduledQueriesScheduledQueryCollectionItemsScheduledQueryProcessingConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApmTracesScheduledQueriesScheduledQueryCollectionItemsScheduledQueryProcessingConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApmTracesScheduledQueriesScheduledQueryCollectionItemsScheduledQueryProcessingConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // custom_metric - computed: true, optional: false, required: false
  private _customMetric = new DataOciApmTracesScheduledQueriesScheduledQueryCollectionItemsScheduledQueryProcessingConfigurationCustomMetricList(this, "custom_metric", false);
  public get customMetric() {
    return this._customMetric;
  }

  // object_storage - computed: true, optional: false, required: false
  private _objectStorage = new DataOciApmTracesScheduledQueriesScheduledQueryCollectionItemsScheduledQueryProcessingConfigurationObjectStorageList(this, "object_storage", false);
  public get objectStorage() {
    return this._objectStorage;
  }

  // streaming - computed: true, optional: false, required: false
  private _streaming = new DataOciApmTracesScheduledQueriesScheduledQueryCollectionItemsScheduledQueryProcessingConfigurationStreamingList(this, "streaming", false);
  public get streaming() {
    return this._streaming;
  }
}

export class DataOciApmTracesScheduledQueriesScheduledQueryCollectionItemsScheduledQueryProcessingConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApmTracesScheduledQueriesScheduledQueryCollectionItemsScheduledQueryProcessingConfigurationOutputReference {
    return new DataOciApmTracesScheduledQueriesScheduledQueryCollectionItemsScheduledQueryProcessingConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApmTracesScheduledQueriesScheduledQueryCollectionItems {
}

export function dataOciApmTracesScheduledQueriesScheduledQueryCollectionItemsToTerraform(struct?: DataOciApmTracesScheduledQueriesScheduledQueryCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApmTracesScheduledQueriesScheduledQueryCollectionItemsToHclTerraform(struct?: DataOciApmTracesScheduledQueriesScheduledQueryCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApmTracesScheduledQueriesScheduledQueryCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApmTracesScheduledQueriesScheduledQueryCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApmTracesScheduledQueriesScheduledQueryCollectionItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // apm_domain_id - computed: true, optional: false, required: false
  public get apmDomainId() {
    return this.getStringAttribute('apm_domain_id');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // opc_dry_run - computed: true, optional: false, required: false
  public get opcDryRun() {
    return this.getStringAttribute('opc_dry_run');
  }

  // scheduled_query_description - computed: true, optional: false, required: false
  public get scheduledQueryDescription() {
    return this.getStringAttribute('scheduled_query_description');
  }

  // scheduled_query_instances - computed: true, optional: false, required: false
  public get scheduledQueryInstances() {
    return this.getStringAttribute('scheduled_query_instances');
  }

  // scheduled_query_maximum_runtime_in_seconds - computed: true, optional: false, required: false
  public get scheduledQueryMaximumRuntimeInSeconds() {
    return this.getStringAttribute('scheduled_query_maximum_runtime_in_seconds');
  }

  // scheduled_query_name - computed: true, optional: false, required: false
  public get scheduledQueryName() {
    return this.getStringAttribute('scheduled_query_name');
  }

  // scheduled_query_next_run_in_ms - computed: true, optional: false, required: false
  public get scheduledQueryNextRunInMs() {
    return this.getStringAttribute('scheduled_query_next_run_in_ms');
  }

  // scheduled_query_processing_configuration - computed: true, optional: false, required: false
  private _scheduledQueryProcessingConfiguration = new DataOciApmTracesScheduledQueriesScheduledQueryCollectionItemsScheduledQueryProcessingConfigurationList(this, "scheduled_query_processing_configuration", false);
  public get scheduledQueryProcessingConfiguration() {
    return this._scheduledQueryProcessingConfiguration;
  }

  // scheduled_query_processing_sub_type - computed: true, optional: false, required: false
  public get scheduledQueryProcessingSubType() {
    return this.getStringAttribute('scheduled_query_processing_sub_type');
  }

  // scheduled_query_processing_type - computed: true, optional: false, required: false
  public get scheduledQueryProcessingType() {
    return this.getStringAttribute('scheduled_query_processing_type');
  }

  // scheduled_query_retention_criteria - computed: true, optional: false, required: false
  public get scheduledQueryRetentionCriteria() {
    return this.getStringAttribute('scheduled_query_retention_criteria');
  }

  // scheduled_query_retention_period_in_ms - computed: true, optional: false, required: false
  public get scheduledQueryRetentionPeriodInMs() {
    return this.getStringAttribute('scheduled_query_retention_period_in_ms');
  }

  // scheduled_query_schedule - computed: true, optional: false, required: false
  public get scheduledQuerySchedule() {
    return this.getStringAttribute('scheduled_query_schedule');
  }

  // scheduled_query_text - computed: true, optional: false, required: false
  public get scheduledQueryText() {
    return this.getStringAttribute('scheduled_query_text');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }
}

export class DataOciApmTracesScheduledQueriesScheduledQueryCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApmTracesScheduledQueriesScheduledQueryCollectionItemsOutputReference {
    return new DataOciApmTracesScheduledQueriesScheduledQueryCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApmTracesScheduledQueriesScheduledQueryCollection {
}

export function dataOciApmTracesScheduledQueriesScheduledQueryCollectionToTerraform(struct?: DataOciApmTracesScheduledQueriesScheduledQueryCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApmTracesScheduledQueriesScheduledQueryCollectionToHclTerraform(struct?: DataOciApmTracesScheduledQueriesScheduledQueryCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApmTracesScheduledQueriesScheduledQueryCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApmTracesScheduledQueriesScheduledQueryCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApmTracesScheduledQueriesScheduledQueryCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciApmTracesScheduledQueriesScheduledQueryCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciApmTracesScheduledQueriesScheduledQueryCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApmTracesScheduledQueriesScheduledQueryCollectionOutputReference {
    return new DataOciApmTracesScheduledQueriesScheduledQueryCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApmTracesScheduledQueriesFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/apm_traces_scheduled_queries#name DataOciApmTracesScheduledQueries#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/apm_traces_scheduled_queries#regex DataOciApmTracesScheduledQueries#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/apm_traces_scheduled_queries#values DataOciApmTracesScheduledQueries#values}
  */
  readonly values: string[];
}

export function dataOciApmTracesScheduledQueriesFilterToTerraform(struct?: DataOciApmTracesScheduledQueriesFilter | cdktf.IResolvable): any {
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


export function dataOciApmTracesScheduledQueriesFilterToHclTerraform(struct?: DataOciApmTracesScheduledQueriesFilter | cdktf.IResolvable): any {
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

export class DataOciApmTracesScheduledQueriesFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApmTracesScheduledQueriesFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataOciApmTracesScheduledQueriesFilter | cdktf.IResolvable | undefined) {
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

export class DataOciApmTracesScheduledQueriesFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciApmTracesScheduledQueriesFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciApmTracesScheduledQueriesFilterOutputReference {
    return new DataOciApmTracesScheduledQueriesFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/apm_traces_scheduled_queries oci_apm_traces_scheduled_queries}
*/
export class DataOciApmTracesScheduledQueries extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_apm_traces_scheduled_queries";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciApmTracesScheduledQueries resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciApmTracesScheduledQueries to import
  * @param importFromId The id of the existing DataOciApmTracesScheduledQueries that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/apm_traces_scheduled_queries#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciApmTracesScheduledQueries to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_apm_traces_scheduled_queries", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/apm_traces_scheduled_queries oci_apm_traces_scheduled_queries} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciApmTracesScheduledQueriesConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciApmTracesScheduledQueriesConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_apm_traces_scheduled_queries',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.27.0',
        providerVersionConstraint: '7.27.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._apmDomainId = config.apmDomainId;
    this._displayName = config.displayName;
    this._id = config.id;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // apm_domain_id - computed: false, optional: false, required: true
  private _apmDomainId?: string; 
  public get apmDomainId() {
    return this.getStringAttribute('apm_domain_id');
  }
  public set apmDomainId(value: string) {
    this._apmDomainId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apmDomainIdInput() {
    return this._apmDomainId;
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

  // scheduled_query_collection - computed: true, optional: false, required: false
  private _scheduledQueryCollection = new DataOciApmTracesScheduledQueriesScheduledQueryCollectionList(this, "scheduled_query_collection", false);
  public get scheduledQueryCollection() {
    return this._scheduledQueryCollection;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciApmTracesScheduledQueriesFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciApmTracesScheduledQueriesFilter[] | cdktf.IResolvable) {
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
      apm_domain_id: cdktf.stringToTerraform(this._apmDomainId),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      filter: cdktf.listMapper(dataOciApmTracesScheduledQueriesFilterToTerraform, true)(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      apm_domain_id: {
        value: cdktf.stringToHclTerraform(this._apmDomainId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
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
        value: cdktf.listMapperHcl(dataOciApmTracesScheduledQueriesFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciApmTracesScheduledQueriesFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
