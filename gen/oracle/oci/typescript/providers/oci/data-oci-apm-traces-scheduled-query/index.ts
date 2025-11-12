// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/apm_traces_scheduled_query
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciApmTracesScheduledQueryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/apm_traces_scheduled_query#apm_domain_id DataOciApmTracesScheduledQuery#apm_domain_id}
  */
  readonly apmDomainId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/apm_traces_scheduled_query#scheduled_query_id DataOciApmTracesScheduledQuery#scheduled_query_id}
  */
  readonly scheduledQueryId: string;
}
export interface DataOciApmTracesScheduledQueryScheduledQueryProcessingConfigurationCustomMetric {
}

export function dataOciApmTracesScheduledQueryScheduledQueryProcessingConfigurationCustomMetricToTerraform(struct?: DataOciApmTracesScheduledQueryScheduledQueryProcessingConfigurationCustomMetric): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApmTracesScheduledQueryScheduledQueryProcessingConfigurationCustomMetricToHclTerraform(struct?: DataOciApmTracesScheduledQueryScheduledQueryProcessingConfigurationCustomMetric): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApmTracesScheduledQueryScheduledQueryProcessingConfigurationCustomMetricOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApmTracesScheduledQueryScheduledQueryProcessingConfigurationCustomMetric | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApmTracesScheduledQueryScheduledQueryProcessingConfigurationCustomMetric | undefined) {
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

export class DataOciApmTracesScheduledQueryScheduledQueryProcessingConfigurationCustomMetricList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApmTracesScheduledQueryScheduledQueryProcessingConfigurationCustomMetricOutputReference {
    return new DataOciApmTracesScheduledQueryScheduledQueryProcessingConfigurationCustomMetricOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApmTracesScheduledQueryScheduledQueryProcessingConfigurationObjectStorage {
}

export function dataOciApmTracesScheduledQueryScheduledQueryProcessingConfigurationObjectStorageToTerraform(struct?: DataOciApmTracesScheduledQueryScheduledQueryProcessingConfigurationObjectStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApmTracesScheduledQueryScheduledQueryProcessingConfigurationObjectStorageToHclTerraform(struct?: DataOciApmTracesScheduledQueryScheduledQueryProcessingConfigurationObjectStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApmTracesScheduledQueryScheduledQueryProcessingConfigurationObjectStorageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApmTracesScheduledQueryScheduledQueryProcessingConfigurationObjectStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApmTracesScheduledQueryScheduledQueryProcessingConfigurationObjectStorage | undefined) {
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

export class DataOciApmTracesScheduledQueryScheduledQueryProcessingConfigurationObjectStorageList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApmTracesScheduledQueryScheduledQueryProcessingConfigurationObjectStorageOutputReference {
    return new DataOciApmTracesScheduledQueryScheduledQueryProcessingConfigurationObjectStorageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApmTracesScheduledQueryScheduledQueryProcessingConfigurationStreaming {
}

export function dataOciApmTracesScheduledQueryScheduledQueryProcessingConfigurationStreamingToTerraform(struct?: DataOciApmTracesScheduledQueryScheduledQueryProcessingConfigurationStreaming): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApmTracesScheduledQueryScheduledQueryProcessingConfigurationStreamingToHclTerraform(struct?: DataOciApmTracesScheduledQueryScheduledQueryProcessingConfigurationStreaming): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApmTracesScheduledQueryScheduledQueryProcessingConfigurationStreamingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApmTracesScheduledQueryScheduledQueryProcessingConfigurationStreaming | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApmTracesScheduledQueryScheduledQueryProcessingConfigurationStreaming | undefined) {
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

export class DataOciApmTracesScheduledQueryScheduledQueryProcessingConfigurationStreamingList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApmTracesScheduledQueryScheduledQueryProcessingConfigurationStreamingOutputReference {
    return new DataOciApmTracesScheduledQueryScheduledQueryProcessingConfigurationStreamingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApmTracesScheduledQueryScheduledQueryProcessingConfiguration {
}

export function dataOciApmTracesScheduledQueryScheduledQueryProcessingConfigurationToTerraform(struct?: DataOciApmTracesScheduledQueryScheduledQueryProcessingConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApmTracesScheduledQueryScheduledQueryProcessingConfigurationToHclTerraform(struct?: DataOciApmTracesScheduledQueryScheduledQueryProcessingConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApmTracesScheduledQueryScheduledQueryProcessingConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApmTracesScheduledQueryScheduledQueryProcessingConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApmTracesScheduledQueryScheduledQueryProcessingConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // custom_metric - computed: true, optional: false, required: false
  private _customMetric = new DataOciApmTracesScheduledQueryScheduledQueryProcessingConfigurationCustomMetricList(this, "custom_metric", false);
  public get customMetric() {
    return this._customMetric;
  }

  // object_storage - computed: true, optional: false, required: false
  private _objectStorage = new DataOciApmTracesScheduledQueryScheduledQueryProcessingConfigurationObjectStorageList(this, "object_storage", false);
  public get objectStorage() {
    return this._objectStorage;
  }

  // streaming - computed: true, optional: false, required: false
  private _streaming = new DataOciApmTracesScheduledQueryScheduledQueryProcessingConfigurationStreamingList(this, "streaming", false);
  public get streaming() {
    return this._streaming;
  }
}

export class DataOciApmTracesScheduledQueryScheduledQueryProcessingConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApmTracesScheduledQueryScheduledQueryProcessingConfigurationOutputReference {
    return new DataOciApmTracesScheduledQueryScheduledQueryProcessingConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/apm_traces_scheduled_query oci_apm_traces_scheduled_query}
*/
export class DataOciApmTracesScheduledQuery extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_apm_traces_scheduled_query";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciApmTracesScheduledQuery resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciApmTracesScheduledQuery to import
  * @param importFromId The id of the existing DataOciApmTracesScheduledQuery that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/apm_traces_scheduled_query#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciApmTracesScheduledQuery to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_apm_traces_scheduled_query", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/apm_traces_scheduled_query oci_apm_traces_scheduled_query} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciApmTracesScheduledQueryConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciApmTracesScheduledQueryConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_apm_traces_scheduled_query',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.25.0',
        providerVersionConstraint: '7.25.0'
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
    this._scheduledQueryId = config.scheduledQueryId;
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

  // scheduled_query_id - computed: false, optional: false, required: true
  private _scheduledQueryId?: string; 
  public get scheduledQueryId() {
    return this.getStringAttribute('scheduled_query_id');
  }
  public set scheduledQueryId(value: string) {
    this._scheduledQueryId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduledQueryIdInput() {
    return this._scheduledQueryId;
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
  private _scheduledQueryProcessingConfiguration = new DataOciApmTracesScheduledQueryScheduledQueryProcessingConfigurationList(this, "scheduled_query_processing_configuration", false);
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      apm_domain_id: cdktf.stringToTerraform(this._apmDomainId),
      scheduled_query_id: cdktf.stringToTerraform(this._scheduledQueryId),
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
      scheduled_query_id: {
        value: cdktf.stringToHclTerraform(this._scheduledQueryId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
