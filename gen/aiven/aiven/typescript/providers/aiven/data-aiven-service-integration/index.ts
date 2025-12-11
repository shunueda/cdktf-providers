// https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/data-sources/service_integration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAivenServiceIntegrationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Destination service for the integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/data-sources/service_integration#destination_service_name DataAivenServiceIntegration#destination_service_name}
  */
  readonly destinationServiceName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/data-sources/service_integration#id DataAivenServiceIntegration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Type of the service integration. The possible values are `alertmanager`, `autoscaler`, `caching`, `cassandra_cross_service_cluster`, `clickhouse_credentials`, `clickhouse_kafka`, `clickhouse_postgresql`, `dashboard`, `datadog`, `datasource`, `disaster_recovery`, `external_aws_cloudwatch_logs`, `external_aws_cloudwatch_metrics`, `external_elasticsearch_logs`, `external_google_cloud_logging`, `external_opensearch_logs`, `flink`, `flink_external_bigquery`, `flink_external_kafka`, `flink_external_postgresql`, `internal_connectivity`, `jolokia`, `kafka_connect`, `kafka_connect_postgresql`, `kafka_logs`, `kafka_mirrormaker`, `logs`, `m3aggregator`, `m3coordinator`, `metrics`, `opensearch_cross_cluster_replication`, `opensearch_cross_cluster_search`, `prometheus`, `read_replica`, `rsyslog`, `schema_registry_proxy`, `stresstester`, `thanos_distributed_query`, `thanos_migrate`, `thanoscompactor`, `thanosquery`, `thanosruler`, `thanosstore`, `vector` and `vmalert`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/data-sources/service_integration#integration_type DataAivenServiceIntegration#integration_type}
  */
  readonly integrationType: string;
  /**
  * Project the integration belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/data-sources/service_integration#project DataAivenServiceIntegration#project}
  */
  readonly project: string;
  /**
  * Source service for the integration (if any)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/data-sources/service_integration#source_service_name DataAivenServiceIntegration#source_service_name}
  */
  readonly sourceServiceName: string;
}
export interface DataAivenServiceIntegrationClickhouseCredentialsUserConfigGrants {
}

export function dataAivenServiceIntegrationClickhouseCredentialsUserConfigGrantsToTerraform(struct?: DataAivenServiceIntegrationClickhouseCredentialsUserConfigGrants): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenServiceIntegrationClickhouseCredentialsUserConfigGrantsToHclTerraform(struct?: DataAivenServiceIntegrationClickhouseCredentialsUserConfigGrants): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenServiceIntegrationClickhouseCredentialsUserConfigGrantsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAivenServiceIntegrationClickhouseCredentialsUserConfigGrants | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenServiceIntegrationClickhouseCredentialsUserConfigGrants | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // user - computed: true, optional: false, required: false
  public get user() {
    return this.getStringAttribute('user');
  }
}

export class DataAivenServiceIntegrationClickhouseCredentialsUserConfigGrantsList extends cdktf.ComplexList {

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
  public get(index: number): DataAivenServiceIntegrationClickhouseCredentialsUserConfigGrantsOutputReference {
    return new DataAivenServiceIntegrationClickhouseCredentialsUserConfigGrantsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAivenServiceIntegrationClickhouseCredentialsUserConfig {
}

export function dataAivenServiceIntegrationClickhouseCredentialsUserConfigToTerraform(struct?: DataAivenServiceIntegrationClickhouseCredentialsUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenServiceIntegrationClickhouseCredentialsUserConfigToHclTerraform(struct?: DataAivenServiceIntegrationClickhouseCredentialsUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenServiceIntegrationClickhouseCredentialsUserConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAivenServiceIntegrationClickhouseCredentialsUserConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenServiceIntegrationClickhouseCredentialsUserConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // grants - computed: true, optional: false, required: false
  private _grants = new DataAivenServiceIntegrationClickhouseCredentialsUserConfigGrantsList(this, "grants", false);
  public get grants() {
    return this._grants;
  }
}

export class DataAivenServiceIntegrationClickhouseCredentialsUserConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataAivenServiceIntegrationClickhouseCredentialsUserConfigOutputReference {
    return new DataAivenServiceIntegrationClickhouseCredentialsUserConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAivenServiceIntegrationClickhouseKafkaUserConfigTablesColumns {
}

export function dataAivenServiceIntegrationClickhouseKafkaUserConfigTablesColumnsToTerraform(struct?: DataAivenServiceIntegrationClickhouseKafkaUserConfigTablesColumns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenServiceIntegrationClickhouseKafkaUserConfigTablesColumnsToHclTerraform(struct?: DataAivenServiceIntegrationClickhouseKafkaUserConfigTablesColumns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenServiceIntegrationClickhouseKafkaUserConfigTablesColumnsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAivenServiceIntegrationClickhouseKafkaUserConfigTablesColumns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenServiceIntegrationClickhouseKafkaUserConfigTablesColumns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAivenServiceIntegrationClickhouseKafkaUserConfigTablesColumnsList extends cdktf.ComplexList {

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
  public get(index: number): DataAivenServiceIntegrationClickhouseKafkaUserConfigTablesColumnsOutputReference {
    return new DataAivenServiceIntegrationClickhouseKafkaUserConfigTablesColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAivenServiceIntegrationClickhouseKafkaUserConfigTablesTopics {
}

export function dataAivenServiceIntegrationClickhouseKafkaUserConfigTablesTopicsToTerraform(struct?: DataAivenServiceIntegrationClickhouseKafkaUserConfigTablesTopics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenServiceIntegrationClickhouseKafkaUserConfigTablesTopicsToHclTerraform(struct?: DataAivenServiceIntegrationClickhouseKafkaUserConfigTablesTopics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenServiceIntegrationClickhouseKafkaUserConfigTablesTopicsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAivenServiceIntegrationClickhouseKafkaUserConfigTablesTopics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenServiceIntegrationClickhouseKafkaUserConfigTablesTopics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataAivenServiceIntegrationClickhouseKafkaUserConfigTablesTopicsList extends cdktf.ComplexList {

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
  public get(index: number): DataAivenServiceIntegrationClickhouseKafkaUserConfigTablesTopicsOutputReference {
    return new DataAivenServiceIntegrationClickhouseKafkaUserConfigTablesTopicsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAivenServiceIntegrationClickhouseKafkaUserConfigTables {
}

export function dataAivenServiceIntegrationClickhouseKafkaUserConfigTablesToTerraform(struct?: DataAivenServiceIntegrationClickhouseKafkaUserConfigTables): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenServiceIntegrationClickhouseKafkaUserConfigTablesToHclTerraform(struct?: DataAivenServiceIntegrationClickhouseKafkaUserConfigTables): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenServiceIntegrationClickhouseKafkaUserConfigTablesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAivenServiceIntegrationClickhouseKafkaUserConfigTables | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenServiceIntegrationClickhouseKafkaUserConfigTables | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auto_offset_reset - computed: true, optional: false, required: false
  public get autoOffsetReset() {
    return this.getStringAttribute('auto_offset_reset');
  }

  // columns - computed: true, optional: false, required: false
  private _columns = new DataAivenServiceIntegrationClickhouseKafkaUserConfigTablesColumnsList(this, "columns", false);
  public get columns() {
    return this._columns;
  }

  // data_format - computed: true, optional: false, required: false
  public get dataFormat() {
    return this.getStringAttribute('data_format');
  }

  // date_time_input_format - computed: true, optional: false, required: false
  public get dateTimeInputFormat() {
    return this.getStringAttribute('date_time_input_format');
  }

  // group_name - computed: true, optional: false, required: false
  public get groupName() {
    return this.getStringAttribute('group_name');
  }

  // handle_error_mode - computed: true, optional: false, required: false
  public get handleErrorMode() {
    return this.getStringAttribute('handle_error_mode');
  }

  // max_block_size - computed: true, optional: false, required: false
  public get maxBlockSize() {
    return this.getNumberAttribute('max_block_size');
  }

  // max_rows_per_message - computed: true, optional: false, required: false
  public get maxRowsPerMessage() {
    return this.getNumberAttribute('max_rows_per_message');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // num_consumers - computed: true, optional: false, required: false
  public get numConsumers() {
    return this.getNumberAttribute('num_consumers');
  }

  // poll_max_batch_size - computed: true, optional: false, required: false
  public get pollMaxBatchSize() {
    return this.getNumberAttribute('poll_max_batch_size');
  }

  // poll_max_timeout_ms - computed: true, optional: false, required: false
  public get pollMaxTimeoutMs() {
    return this.getNumberAttribute('poll_max_timeout_ms');
  }

  // producer_batch_num_messages - computed: true, optional: false, required: false
  public get producerBatchNumMessages() {
    return this.getNumberAttribute('producer_batch_num_messages');
  }

  // producer_batch_size - computed: true, optional: false, required: false
  public get producerBatchSize() {
    return this.getNumberAttribute('producer_batch_size');
  }

  // producer_compression_codec - computed: true, optional: false, required: false
  public get producerCompressionCodec() {
    return this.getStringAttribute('producer_compression_codec');
  }

  // producer_compression_level - computed: true, optional: false, required: false
  public get producerCompressionLevel() {
    return this.getNumberAttribute('producer_compression_level');
  }

  // producer_linger_ms - computed: true, optional: false, required: false
  public get producerLingerMs() {
    return this.getNumberAttribute('producer_linger_ms');
  }

  // producer_queue_buffering_max_kbytes - computed: true, optional: false, required: false
  public get producerQueueBufferingMaxKbytes() {
    return this.getNumberAttribute('producer_queue_buffering_max_kbytes');
  }

  // producer_queue_buffering_max_messages - computed: true, optional: false, required: false
  public get producerQueueBufferingMaxMessages() {
    return this.getNumberAttribute('producer_queue_buffering_max_messages');
  }

  // producer_request_required_acks - computed: true, optional: false, required: false
  public get producerRequestRequiredAcks() {
    return this.getNumberAttribute('producer_request_required_acks');
  }

  // skip_broken_messages - computed: true, optional: false, required: false
  public get skipBrokenMessages() {
    return this.getNumberAttribute('skip_broken_messages');
  }

  // thread_per_consumer - computed: true, optional: false, required: false
  public get threadPerConsumer() {
    return this.getBooleanAttribute('thread_per_consumer');
  }

  // topics - computed: true, optional: false, required: false
  private _topics = new DataAivenServiceIntegrationClickhouseKafkaUserConfigTablesTopicsList(this, "topics", false);
  public get topics() {
    return this._topics;
  }
}

export class DataAivenServiceIntegrationClickhouseKafkaUserConfigTablesList extends cdktf.ComplexList {

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
  public get(index: number): DataAivenServiceIntegrationClickhouseKafkaUserConfigTablesOutputReference {
    return new DataAivenServiceIntegrationClickhouseKafkaUserConfigTablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAivenServiceIntegrationClickhouseKafkaUserConfig {
}

export function dataAivenServiceIntegrationClickhouseKafkaUserConfigToTerraform(struct?: DataAivenServiceIntegrationClickhouseKafkaUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenServiceIntegrationClickhouseKafkaUserConfigToHclTerraform(struct?: DataAivenServiceIntegrationClickhouseKafkaUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenServiceIntegrationClickhouseKafkaUserConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAivenServiceIntegrationClickhouseKafkaUserConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenServiceIntegrationClickhouseKafkaUserConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // tables - computed: true, optional: false, required: false
  private _tables = new DataAivenServiceIntegrationClickhouseKafkaUserConfigTablesList(this, "tables", false);
  public get tables() {
    return this._tables;
  }
}

export class DataAivenServiceIntegrationClickhouseKafkaUserConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataAivenServiceIntegrationClickhouseKafkaUserConfigOutputReference {
    return new DataAivenServiceIntegrationClickhouseKafkaUserConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAivenServiceIntegrationClickhousePostgresqlUserConfigDatabases {
}

export function dataAivenServiceIntegrationClickhousePostgresqlUserConfigDatabasesToTerraform(struct?: DataAivenServiceIntegrationClickhousePostgresqlUserConfigDatabases): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenServiceIntegrationClickhousePostgresqlUserConfigDatabasesToHclTerraform(struct?: DataAivenServiceIntegrationClickhousePostgresqlUserConfigDatabases): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenServiceIntegrationClickhousePostgresqlUserConfigDatabasesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAivenServiceIntegrationClickhousePostgresqlUserConfigDatabases | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenServiceIntegrationClickhousePostgresqlUserConfigDatabases | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // database - computed: true, optional: false, required: false
  public get database() {
    return this.getStringAttribute('database');
  }

  // schema - computed: true, optional: false, required: false
  public get schema() {
    return this.getStringAttribute('schema');
  }
}

export class DataAivenServiceIntegrationClickhousePostgresqlUserConfigDatabasesList extends cdktf.ComplexList {

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
  public get(index: number): DataAivenServiceIntegrationClickhousePostgresqlUserConfigDatabasesOutputReference {
    return new DataAivenServiceIntegrationClickhousePostgresqlUserConfigDatabasesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAivenServiceIntegrationClickhousePostgresqlUserConfig {
}

export function dataAivenServiceIntegrationClickhousePostgresqlUserConfigToTerraform(struct?: DataAivenServiceIntegrationClickhousePostgresqlUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenServiceIntegrationClickhousePostgresqlUserConfigToHclTerraform(struct?: DataAivenServiceIntegrationClickhousePostgresqlUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenServiceIntegrationClickhousePostgresqlUserConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAivenServiceIntegrationClickhousePostgresqlUserConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenServiceIntegrationClickhousePostgresqlUserConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // databases - computed: true, optional: false, required: false
  private _databases = new DataAivenServiceIntegrationClickhousePostgresqlUserConfigDatabasesList(this, "databases", false);
  public get databases() {
    return this._databases;
  }
}

export class DataAivenServiceIntegrationClickhousePostgresqlUserConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataAivenServiceIntegrationClickhousePostgresqlUserConfigOutputReference {
    return new DataAivenServiceIntegrationClickhousePostgresqlUserConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAivenServiceIntegrationDatadogUserConfigDatadogTags {
}

export function dataAivenServiceIntegrationDatadogUserConfigDatadogTagsToTerraform(struct?: DataAivenServiceIntegrationDatadogUserConfigDatadogTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenServiceIntegrationDatadogUserConfigDatadogTagsToHclTerraform(struct?: DataAivenServiceIntegrationDatadogUserConfigDatadogTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenServiceIntegrationDatadogUserConfigDatadogTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAivenServiceIntegrationDatadogUserConfigDatadogTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenServiceIntegrationDatadogUserConfigDatadogTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // tag - computed: true, optional: false, required: false
  public get tag() {
    return this.getStringAttribute('tag');
  }
}

export class DataAivenServiceIntegrationDatadogUserConfigDatadogTagsList extends cdktf.ComplexList {

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
  public get(index: number): DataAivenServiceIntegrationDatadogUserConfigDatadogTagsOutputReference {
    return new DataAivenServiceIntegrationDatadogUserConfigDatadogTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAivenServiceIntegrationDatadogUserConfigOpensearch {
}

export function dataAivenServiceIntegrationDatadogUserConfigOpensearchToTerraform(struct?: DataAivenServiceIntegrationDatadogUserConfigOpensearch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenServiceIntegrationDatadogUserConfigOpensearchToHclTerraform(struct?: DataAivenServiceIntegrationDatadogUserConfigOpensearch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenServiceIntegrationDatadogUserConfigOpensearchOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAivenServiceIntegrationDatadogUserConfigOpensearch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenServiceIntegrationDatadogUserConfigOpensearch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cluster_stats_enabled - computed: true, optional: false, required: false
  public get clusterStatsEnabled() {
    return this.getBooleanAttribute('cluster_stats_enabled');
  }

  // index_stats_enabled - computed: true, optional: false, required: false
  public get indexStatsEnabled() {
    return this.getBooleanAttribute('index_stats_enabled');
  }

  // pending_task_stats_enabled - computed: true, optional: false, required: false
  public get pendingTaskStatsEnabled() {
    return this.getBooleanAttribute('pending_task_stats_enabled');
  }

  // pshard_stats_enabled - computed: true, optional: false, required: false
  public get pshardStatsEnabled() {
    return this.getBooleanAttribute('pshard_stats_enabled');
  }
}

export class DataAivenServiceIntegrationDatadogUserConfigOpensearchList extends cdktf.ComplexList {

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
  public get(index: number): DataAivenServiceIntegrationDatadogUserConfigOpensearchOutputReference {
    return new DataAivenServiceIntegrationDatadogUserConfigOpensearchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAivenServiceIntegrationDatadogUserConfigRedis {
}

export function dataAivenServiceIntegrationDatadogUserConfigRedisToTerraform(struct?: DataAivenServiceIntegrationDatadogUserConfigRedis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenServiceIntegrationDatadogUserConfigRedisToHclTerraform(struct?: DataAivenServiceIntegrationDatadogUserConfigRedis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenServiceIntegrationDatadogUserConfigRedisOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAivenServiceIntegrationDatadogUserConfigRedis | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenServiceIntegrationDatadogUserConfigRedis | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // command_stats_enabled - computed: true, optional: false, required: false
  public get commandStatsEnabled() {
    return this.getBooleanAttribute('command_stats_enabled');
  }
}

export class DataAivenServiceIntegrationDatadogUserConfigRedisList extends cdktf.ComplexList {

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
  public get(index: number): DataAivenServiceIntegrationDatadogUserConfigRedisOutputReference {
    return new DataAivenServiceIntegrationDatadogUserConfigRedisOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAivenServiceIntegrationDatadogUserConfig {
}

export function dataAivenServiceIntegrationDatadogUserConfigToTerraform(struct?: DataAivenServiceIntegrationDatadogUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenServiceIntegrationDatadogUserConfigToHclTerraform(struct?: DataAivenServiceIntegrationDatadogUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenServiceIntegrationDatadogUserConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAivenServiceIntegrationDatadogUserConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenServiceIntegrationDatadogUserConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // datadog_dbm_enabled - computed: true, optional: false, required: false
  public get datadogDbmEnabled() {
    return this.getBooleanAttribute('datadog_dbm_enabled');
  }

  // datadog_pgbouncer_enabled - computed: true, optional: false, required: false
  public get datadogPgbouncerEnabled() {
    return this.getBooleanAttribute('datadog_pgbouncer_enabled');
  }

  // datadog_tags - computed: true, optional: false, required: false
  private _datadogTags = new DataAivenServiceIntegrationDatadogUserConfigDatadogTagsList(this, "datadog_tags", false);
  public get datadogTags() {
    return this._datadogTags;
  }

  // exclude_consumer_groups - computed: true, optional: false, required: false
  public get excludeConsumerGroups() {
    return this.getListAttribute('exclude_consumer_groups');
  }

  // exclude_topics - computed: true, optional: false, required: false
  public get excludeTopics() {
    return this.getListAttribute('exclude_topics');
  }

  // include_consumer_groups - computed: true, optional: false, required: false
  public get includeConsumerGroups() {
    return this.getListAttribute('include_consumer_groups');
  }

  // include_topics - computed: true, optional: false, required: false
  public get includeTopics() {
    return this.getListAttribute('include_topics');
  }

  // kafka_custom_metrics - computed: true, optional: false, required: false
  public get kafkaCustomMetrics() {
    return this.getListAttribute('kafka_custom_metrics');
  }

  // max_jmx_metrics - computed: true, optional: false, required: false
  public get maxJmxMetrics() {
    return this.getNumberAttribute('max_jmx_metrics');
  }

  // mirrormaker_custom_metrics - computed: true, optional: false, required: false
  public get mirrormakerCustomMetrics() {
    return this.getListAttribute('mirrormaker_custom_metrics');
  }

  // opensearch - computed: true, optional: false, required: false
  private _opensearch = new DataAivenServiceIntegrationDatadogUserConfigOpensearchList(this, "opensearch", false);
  public get opensearch() {
    return this._opensearch;
  }

  // redis - computed: true, optional: false, required: false
  private _redis = new DataAivenServiceIntegrationDatadogUserConfigRedisList(this, "redis", false);
  public get redis() {
    return this._redis;
  }
}

export class DataAivenServiceIntegrationDatadogUserConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataAivenServiceIntegrationDatadogUserConfigOutputReference {
    return new DataAivenServiceIntegrationDatadogUserConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAivenServiceIntegrationExternalAwsCloudwatchLogsUserConfig {
}

export function dataAivenServiceIntegrationExternalAwsCloudwatchLogsUserConfigToTerraform(struct?: DataAivenServiceIntegrationExternalAwsCloudwatchLogsUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenServiceIntegrationExternalAwsCloudwatchLogsUserConfigToHclTerraform(struct?: DataAivenServiceIntegrationExternalAwsCloudwatchLogsUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenServiceIntegrationExternalAwsCloudwatchLogsUserConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAivenServiceIntegrationExternalAwsCloudwatchLogsUserConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenServiceIntegrationExternalAwsCloudwatchLogsUserConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // selected_log_fields - computed: true, optional: false, required: false
  public get selectedLogFields() {
    return this.getListAttribute('selected_log_fields');
  }
}

export class DataAivenServiceIntegrationExternalAwsCloudwatchLogsUserConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataAivenServiceIntegrationExternalAwsCloudwatchLogsUserConfigOutputReference {
    return new DataAivenServiceIntegrationExternalAwsCloudwatchLogsUserConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAivenServiceIntegrationExternalAwsCloudwatchMetricsUserConfigDroppedMetrics {
}

export function dataAivenServiceIntegrationExternalAwsCloudwatchMetricsUserConfigDroppedMetricsToTerraform(struct?: DataAivenServiceIntegrationExternalAwsCloudwatchMetricsUserConfigDroppedMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenServiceIntegrationExternalAwsCloudwatchMetricsUserConfigDroppedMetricsToHclTerraform(struct?: DataAivenServiceIntegrationExternalAwsCloudwatchMetricsUserConfigDroppedMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenServiceIntegrationExternalAwsCloudwatchMetricsUserConfigDroppedMetricsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAivenServiceIntegrationExternalAwsCloudwatchMetricsUserConfigDroppedMetrics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenServiceIntegrationExternalAwsCloudwatchMetricsUserConfigDroppedMetrics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // field - computed: true, optional: false, required: false
  public get field() {
    return this.getStringAttribute('field');
  }

  // metric - computed: true, optional: false, required: false
  public get metric() {
    return this.getStringAttribute('metric');
  }
}

export class DataAivenServiceIntegrationExternalAwsCloudwatchMetricsUserConfigDroppedMetricsList extends cdktf.ComplexList {

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
  public get(index: number): DataAivenServiceIntegrationExternalAwsCloudwatchMetricsUserConfigDroppedMetricsOutputReference {
    return new DataAivenServiceIntegrationExternalAwsCloudwatchMetricsUserConfigDroppedMetricsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAivenServiceIntegrationExternalAwsCloudwatchMetricsUserConfigExtraMetrics {
}

export function dataAivenServiceIntegrationExternalAwsCloudwatchMetricsUserConfigExtraMetricsToTerraform(struct?: DataAivenServiceIntegrationExternalAwsCloudwatchMetricsUserConfigExtraMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenServiceIntegrationExternalAwsCloudwatchMetricsUserConfigExtraMetricsToHclTerraform(struct?: DataAivenServiceIntegrationExternalAwsCloudwatchMetricsUserConfigExtraMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenServiceIntegrationExternalAwsCloudwatchMetricsUserConfigExtraMetricsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAivenServiceIntegrationExternalAwsCloudwatchMetricsUserConfigExtraMetrics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenServiceIntegrationExternalAwsCloudwatchMetricsUserConfigExtraMetrics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // field - computed: true, optional: false, required: false
  public get field() {
    return this.getStringAttribute('field');
  }

  // metric - computed: true, optional: false, required: false
  public get metric() {
    return this.getStringAttribute('metric');
  }
}

export class DataAivenServiceIntegrationExternalAwsCloudwatchMetricsUserConfigExtraMetricsList extends cdktf.ComplexList {

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
  public get(index: number): DataAivenServiceIntegrationExternalAwsCloudwatchMetricsUserConfigExtraMetricsOutputReference {
    return new DataAivenServiceIntegrationExternalAwsCloudwatchMetricsUserConfigExtraMetricsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAivenServiceIntegrationExternalAwsCloudwatchMetricsUserConfig {
}

export function dataAivenServiceIntegrationExternalAwsCloudwatchMetricsUserConfigToTerraform(struct?: DataAivenServiceIntegrationExternalAwsCloudwatchMetricsUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenServiceIntegrationExternalAwsCloudwatchMetricsUserConfigToHclTerraform(struct?: DataAivenServiceIntegrationExternalAwsCloudwatchMetricsUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenServiceIntegrationExternalAwsCloudwatchMetricsUserConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAivenServiceIntegrationExternalAwsCloudwatchMetricsUserConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenServiceIntegrationExternalAwsCloudwatchMetricsUserConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dropped_metrics - computed: true, optional: false, required: false
  private _droppedMetrics = new DataAivenServiceIntegrationExternalAwsCloudwatchMetricsUserConfigDroppedMetricsList(this, "dropped_metrics", false);
  public get droppedMetrics() {
    return this._droppedMetrics;
  }

  // extra_metrics - computed: true, optional: false, required: false
  private _extraMetrics = new DataAivenServiceIntegrationExternalAwsCloudwatchMetricsUserConfigExtraMetricsList(this, "extra_metrics", false);
  public get extraMetrics() {
    return this._extraMetrics;
  }
}

export class DataAivenServiceIntegrationExternalAwsCloudwatchMetricsUserConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataAivenServiceIntegrationExternalAwsCloudwatchMetricsUserConfigOutputReference {
    return new DataAivenServiceIntegrationExternalAwsCloudwatchMetricsUserConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAivenServiceIntegrationExternalElasticsearchLogsUserConfig {
}

export function dataAivenServiceIntegrationExternalElasticsearchLogsUserConfigToTerraform(struct?: DataAivenServiceIntegrationExternalElasticsearchLogsUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenServiceIntegrationExternalElasticsearchLogsUserConfigToHclTerraform(struct?: DataAivenServiceIntegrationExternalElasticsearchLogsUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenServiceIntegrationExternalElasticsearchLogsUserConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAivenServiceIntegrationExternalElasticsearchLogsUserConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenServiceIntegrationExternalElasticsearchLogsUserConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // selected_log_fields - computed: true, optional: false, required: false
  public get selectedLogFields() {
    return this.getListAttribute('selected_log_fields');
  }
}

export class DataAivenServiceIntegrationExternalElasticsearchLogsUserConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataAivenServiceIntegrationExternalElasticsearchLogsUserConfigOutputReference {
    return new DataAivenServiceIntegrationExternalElasticsearchLogsUserConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAivenServiceIntegrationExternalOpensearchLogsUserConfig {
}

export function dataAivenServiceIntegrationExternalOpensearchLogsUserConfigToTerraform(struct?: DataAivenServiceIntegrationExternalOpensearchLogsUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenServiceIntegrationExternalOpensearchLogsUserConfigToHclTerraform(struct?: DataAivenServiceIntegrationExternalOpensearchLogsUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenServiceIntegrationExternalOpensearchLogsUserConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAivenServiceIntegrationExternalOpensearchLogsUserConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenServiceIntegrationExternalOpensearchLogsUserConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // selected_log_fields - computed: true, optional: false, required: false
  public get selectedLogFields() {
    return this.getListAttribute('selected_log_fields');
  }
}

export class DataAivenServiceIntegrationExternalOpensearchLogsUserConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataAivenServiceIntegrationExternalOpensearchLogsUserConfigOutputReference {
    return new DataAivenServiceIntegrationExternalOpensearchLogsUserConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAivenServiceIntegrationFlinkExternalPostgresqlUserConfig {
}

export function dataAivenServiceIntegrationFlinkExternalPostgresqlUserConfigToTerraform(struct?: DataAivenServiceIntegrationFlinkExternalPostgresqlUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenServiceIntegrationFlinkExternalPostgresqlUserConfigToHclTerraform(struct?: DataAivenServiceIntegrationFlinkExternalPostgresqlUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenServiceIntegrationFlinkExternalPostgresqlUserConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAivenServiceIntegrationFlinkExternalPostgresqlUserConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenServiceIntegrationFlinkExternalPostgresqlUserConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // stringtype - computed: true, optional: false, required: false
  public get stringtype() {
    return this.getStringAttribute('stringtype');
  }
}

export class DataAivenServiceIntegrationFlinkExternalPostgresqlUserConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataAivenServiceIntegrationFlinkExternalPostgresqlUserConfigOutputReference {
    return new DataAivenServiceIntegrationFlinkExternalPostgresqlUserConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAivenServiceIntegrationKafkaConnectUserConfigKafkaConnect {
}

export function dataAivenServiceIntegrationKafkaConnectUserConfigKafkaConnectToTerraform(struct?: DataAivenServiceIntegrationKafkaConnectUserConfigKafkaConnect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenServiceIntegrationKafkaConnectUserConfigKafkaConnectToHclTerraform(struct?: DataAivenServiceIntegrationKafkaConnectUserConfigKafkaConnect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenServiceIntegrationKafkaConnectUserConfigKafkaConnectOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAivenServiceIntegrationKafkaConnectUserConfigKafkaConnect | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenServiceIntegrationKafkaConnectUserConfigKafkaConnect | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // config_storage_topic - computed: true, optional: false, required: false
  public get configStorageTopic() {
    return this.getStringAttribute('config_storage_topic');
  }

  // group_id - computed: true, optional: false, required: false
  public get groupId() {
    return this.getStringAttribute('group_id');
  }

  // offset_storage_topic - computed: true, optional: false, required: false
  public get offsetStorageTopic() {
    return this.getStringAttribute('offset_storage_topic');
  }

  // status_storage_topic - computed: true, optional: false, required: false
  public get statusStorageTopic() {
    return this.getStringAttribute('status_storage_topic');
  }
}

export class DataAivenServiceIntegrationKafkaConnectUserConfigKafkaConnectList extends cdktf.ComplexList {

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
  public get(index: number): DataAivenServiceIntegrationKafkaConnectUserConfigKafkaConnectOutputReference {
    return new DataAivenServiceIntegrationKafkaConnectUserConfigKafkaConnectOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAivenServiceIntegrationKafkaConnectUserConfig {
}

export function dataAivenServiceIntegrationKafkaConnectUserConfigToTerraform(struct?: DataAivenServiceIntegrationKafkaConnectUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenServiceIntegrationKafkaConnectUserConfigToHclTerraform(struct?: DataAivenServiceIntegrationKafkaConnectUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenServiceIntegrationKafkaConnectUserConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAivenServiceIntegrationKafkaConnectUserConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenServiceIntegrationKafkaConnectUserConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // kafka_connect - computed: true, optional: false, required: false
  private _kafkaConnect = new DataAivenServiceIntegrationKafkaConnectUserConfigKafkaConnectList(this, "kafka_connect", false);
  public get kafkaConnect() {
    return this._kafkaConnect;
  }
}

export class DataAivenServiceIntegrationKafkaConnectUserConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataAivenServiceIntegrationKafkaConnectUserConfigOutputReference {
    return new DataAivenServiceIntegrationKafkaConnectUserConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAivenServiceIntegrationKafkaLogsUserConfig {
}

export function dataAivenServiceIntegrationKafkaLogsUserConfigToTerraform(struct?: DataAivenServiceIntegrationKafkaLogsUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenServiceIntegrationKafkaLogsUserConfigToHclTerraform(struct?: DataAivenServiceIntegrationKafkaLogsUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenServiceIntegrationKafkaLogsUserConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAivenServiceIntegrationKafkaLogsUserConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenServiceIntegrationKafkaLogsUserConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // kafka_topic - computed: true, optional: false, required: false
  public get kafkaTopic() {
    return this.getStringAttribute('kafka_topic');
  }

  // selected_log_fields - computed: true, optional: false, required: false
  public get selectedLogFields() {
    return this.getListAttribute('selected_log_fields');
  }
}

export class DataAivenServiceIntegrationKafkaLogsUserConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataAivenServiceIntegrationKafkaLogsUserConfigOutputReference {
    return new DataAivenServiceIntegrationKafkaLogsUserConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAivenServiceIntegrationKafkaMirrormakerUserConfigKafkaMirrormaker {
}

export function dataAivenServiceIntegrationKafkaMirrormakerUserConfigKafkaMirrormakerToTerraform(struct?: DataAivenServiceIntegrationKafkaMirrormakerUserConfigKafkaMirrormaker): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenServiceIntegrationKafkaMirrormakerUserConfigKafkaMirrormakerToHclTerraform(struct?: DataAivenServiceIntegrationKafkaMirrormakerUserConfigKafkaMirrormaker): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenServiceIntegrationKafkaMirrormakerUserConfigKafkaMirrormakerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAivenServiceIntegrationKafkaMirrormakerUserConfigKafkaMirrormaker | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenServiceIntegrationKafkaMirrormakerUserConfigKafkaMirrormaker | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // consumer_auto_offset_reset - computed: true, optional: false, required: false
  public get consumerAutoOffsetReset() {
    return this.getStringAttribute('consumer_auto_offset_reset');
  }

  // consumer_fetch_min_bytes - computed: true, optional: false, required: false
  public get consumerFetchMinBytes() {
    return this.getNumberAttribute('consumer_fetch_min_bytes');
  }

  // consumer_max_poll_records - computed: true, optional: false, required: false
  public get consumerMaxPollRecords() {
    return this.getNumberAttribute('consumer_max_poll_records');
  }

  // producer_batch_size - computed: true, optional: false, required: false
  public get producerBatchSize() {
    return this.getNumberAttribute('producer_batch_size');
  }

  // producer_buffer_memory - computed: true, optional: false, required: false
  public get producerBufferMemory() {
    return this.getNumberAttribute('producer_buffer_memory');
  }

  // producer_compression_type - computed: true, optional: false, required: false
  public get producerCompressionType() {
    return this.getStringAttribute('producer_compression_type');
  }

  // producer_linger_ms - computed: true, optional: false, required: false
  public get producerLingerMs() {
    return this.getNumberAttribute('producer_linger_ms');
  }

  // producer_max_request_size - computed: true, optional: false, required: false
  public get producerMaxRequestSize() {
    return this.getNumberAttribute('producer_max_request_size');
  }
}

export class DataAivenServiceIntegrationKafkaMirrormakerUserConfigKafkaMirrormakerList extends cdktf.ComplexList {

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
  public get(index: number): DataAivenServiceIntegrationKafkaMirrormakerUserConfigKafkaMirrormakerOutputReference {
    return new DataAivenServiceIntegrationKafkaMirrormakerUserConfigKafkaMirrormakerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAivenServiceIntegrationKafkaMirrormakerUserConfig {
}

export function dataAivenServiceIntegrationKafkaMirrormakerUserConfigToTerraform(struct?: DataAivenServiceIntegrationKafkaMirrormakerUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenServiceIntegrationKafkaMirrormakerUserConfigToHclTerraform(struct?: DataAivenServiceIntegrationKafkaMirrormakerUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenServiceIntegrationKafkaMirrormakerUserConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAivenServiceIntegrationKafkaMirrormakerUserConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenServiceIntegrationKafkaMirrormakerUserConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cluster_alias - computed: true, optional: false, required: false
  public get clusterAlias() {
    return this.getStringAttribute('cluster_alias');
  }

  // kafka_mirrormaker - computed: true, optional: false, required: false
  private _kafkaMirrormaker = new DataAivenServiceIntegrationKafkaMirrormakerUserConfigKafkaMirrormakerList(this, "kafka_mirrormaker", false);
  public get kafkaMirrormaker() {
    return this._kafkaMirrormaker;
  }
}

export class DataAivenServiceIntegrationKafkaMirrormakerUserConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataAivenServiceIntegrationKafkaMirrormakerUserConfigOutputReference {
    return new DataAivenServiceIntegrationKafkaMirrormakerUserConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAivenServiceIntegrationLogsUserConfig {
}

export function dataAivenServiceIntegrationLogsUserConfigToTerraform(struct?: DataAivenServiceIntegrationLogsUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenServiceIntegrationLogsUserConfigToHclTerraform(struct?: DataAivenServiceIntegrationLogsUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenServiceIntegrationLogsUserConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAivenServiceIntegrationLogsUserConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenServiceIntegrationLogsUserConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // elasticsearch_index_days_max - computed: true, optional: false, required: false
  public get elasticsearchIndexDaysMax() {
    return this.getNumberAttribute('elasticsearch_index_days_max');
  }

  // elasticsearch_index_prefix - computed: true, optional: false, required: false
  public get elasticsearchIndexPrefix() {
    return this.getStringAttribute('elasticsearch_index_prefix');
  }

  // selected_log_fields - computed: true, optional: false, required: false
  public get selectedLogFields() {
    return this.getListAttribute('selected_log_fields');
  }
}

export class DataAivenServiceIntegrationLogsUserConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataAivenServiceIntegrationLogsUserConfigOutputReference {
    return new DataAivenServiceIntegrationLogsUserConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAivenServiceIntegrationMetricsUserConfigSourceMysqlTelegraf {
}

export function dataAivenServiceIntegrationMetricsUserConfigSourceMysqlTelegrafToTerraform(struct?: DataAivenServiceIntegrationMetricsUserConfigSourceMysqlTelegraf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenServiceIntegrationMetricsUserConfigSourceMysqlTelegrafToHclTerraform(struct?: DataAivenServiceIntegrationMetricsUserConfigSourceMysqlTelegraf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenServiceIntegrationMetricsUserConfigSourceMysqlTelegrafOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAivenServiceIntegrationMetricsUserConfigSourceMysqlTelegraf | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenServiceIntegrationMetricsUserConfigSourceMysqlTelegraf | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // gather_event_waits - computed: true, optional: false, required: false
  public get gatherEventWaits() {
    return this.getBooleanAttribute('gather_event_waits');
  }

  // gather_file_events_stats - computed: true, optional: false, required: false
  public get gatherFileEventsStats() {
    return this.getBooleanAttribute('gather_file_events_stats');
  }

  // gather_index_io_waits - computed: true, optional: false, required: false
  public get gatherIndexIoWaits() {
    return this.getBooleanAttribute('gather_index_io_waits');
  }

  // gather_info_schema_auto_inc - computed: true, optional: false, required: false
  public get gatherInfoSchemaAutoInc() {
    return this.getBooleanAttribute('gather_info_schema_auto_inc');
  }

  // gather_innodb_metrics - computed: true, optional: false, required: false
  public get gatherInnodbMetrics() {
    return this.getBooleanAttribute('gather_innodb_metrics');
  }

  // gather_perf_events_statements - computed: true, optional: false, required: false
  public get gatherPerfEventsStatements() {
    return this.getBooleanAttribute('gather_perf_events_statements');
  }

  // gather_process_list - computed: true, optional: false, required: false
  public get gatherProcessList() {
    return this.getBooleanAttribute('gather_process_list');
  }

  // gather_slave_status - computed: true, optional: false, required: false
  public get gatherSlaveStatus() {
    return this.getBooleanAttribute('gather_slave_status');
  }

  // gather_table_io_waits - computed: true, optional: false, required: false
  public get gatherTableIoWaits() {
    return this.getBooleanAttribute('gather_table_io_waits');
  }

  // gather_table_lock_waits - computed: true, optional: false, required: false
  public get gatherTableLockWaits() {
    return this.getBooleanAttribute('gather_table_lock_waits');
  }

  // gather_table_schema - computed: true, optional: false, required: false
  public get gatherTableSchema() {
    return this.getBooleanAttribute('gather_table_schema');
  }

  // perf_events_statements_digest_text_limit - computed: true, optional: false, required: false
  public get perfEventsStatementsDigestTextLimit() {
    return this.getNumberAttribute('perf_events_statements_digest_text_limit');
  }

  // perf_events_statements_limit - computed: true, optional: false, required: false
  public get perfEventsStatementsLimit() {
    return this.getNumberAttribute('perf_events_statements_limit');
  }

  // perf_events_statements_time_limit - computed: true, optional: false, required: false
  public get perfEventsStatementsTimeLimit() {
    return this.getNumberAttribute('perf_events_statements_time_limit');
  }
}

export class DataAivenServiceIntegrationMetricsUserConfigSourceMysqlTelegrafList extends cdktf.ComplexList {

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
  public get(index: number): DataAivenServiceIntegrationMetricsUserConfigSourceMysqlTelegrafOutputReference {
    return new DataAivenServiceIntegrationMetricsUserConfigSourceMysqlTelegrafOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAivenServiceIntegrationMetricsUserConfigSourceMysql {
}

export function dataAivenServiceIntegrationMetricsUserConfigSourceMysqlToTerraform(struct?: DataAivenServiceIntegrationMetricsUserConfigSourceMysql): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenServiceIntegrationMetricsUserConfigSourceMysqlToHclTerraform(struct?: DataAivenServiceIntegrationMetricsUserConfigSourceMysql): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenServiceIntegrationMetricsUserConfigSourceMysqlOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAivenServiceIntegrationMetricsUserConfigSourceMysql | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenServiceIntegrationMetricsUserConfigSourceMysql | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // telegraf - computed: true, optional: false, required: false
  private _telegraf = new DataAivenServiceIntegrationMetricsUserConfigSourceMysqlTelegrafList(this, "telegraf", false);
  public get telegraf() {
    return this._telegraf;
  }
}

export class DataAivenServiceIntegrationMetricsUserConfigSourceMysqlList extends cdktf.ComplexList {

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
  public get(index: number): DataAivenServiceIntegrationMetricsUserConfigSourceMysqlOutputReference {
    return new DataAivenServiceIntegrationMetricsUserConfigSourceMysqlOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAivenServiceIntegrationMetricsUserConfig {
}

export function dataAivenServiceIntegrationMetricsUserConfigToTerraform(struct?: DataAivenServiceIntegrationMetricsUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenServiceIntegrationMetricsUserConfigToHclTerraform(struct?: DataAivenServiceIntegrationMetricsUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenServiceIntegrationMetricsUserConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAivenServiceIntegrationMetricsUserConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenServiceIntegrationMetricsUserConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // database - computed: true, optional: false, required: false
  public get database() {
    return this.getStringAttribute('database');
  }

  // retention_days - computed: true, optional: false, required: false
  public get retentionDays() {
    return this.getNumberAttribute('retention_days');
  }

  // ro_username - computed: true, optional: false, required: false
  public get roUsername() {
    return this.getStringAttribute('ro_username');
  }

  // source_mysql - computed: true, optional: false, required: false
  private _sourceMysql = new DataAivenServiceIntegrationMetricsUserConfigSourceMysqlList(this, "source_mysql", false);
  public get sourceMysql() {
    return this._sourceMysql;
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}

export class DataAivenServiceIntegrationMetricsUserConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataAivenServiceIntegrationMetricsUserConfigOutputReference {
    return new DataAivenServiceIntegrationMetricsUserConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAivenServiceIntegrationPrometheusUserConfigSourceMysqlTelegraf {
}

export function dataAivenServiceIntegrationPrometheusUserConfigSourceMysqlTelegrafToTerraform(struct?: DataAivenServiceIntegrationPrometheusUserConfigSourceMysqlTelegraf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenServiceIntegrationPrometheusUserConfigSourceMysqlTelegrafToHclTerraform(struct?: DataAivenServiceIntegrationPrometheusUserConfigSourceMysqlTelegraf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenServiceIntegrationPrometheusUserConfigSourceMysqlTelegrafOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAivenServiceIntegrationPrometheusUserConfigSourceMysqlTelegraf | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenServiceIntegrationPrometheusUserConfigSourceMysqlTelegraf | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // gather_event_waits - computed: true, optional: false, required: false
  public get gatherEventWaits() {
    return this.getBooleanAttribute('gather_event_waits');
  }

  // gather_file_events_stats - computed: true, optional: false, required: false
  public get gatherFileEventsStats() {
    return this.getBooleanAttribute('gather_file_events_stats');
  }

  // gather_index_io_waits - computed: true, optional: false, required: false
  public get gatherIndexIoWaits() {
    return this.getBooleanAttribute('gather_index_io_waits');
  }

  // gather_info_schema_auto_inc - computed: true, optional: false, required: false
  public get gatherInfoSchemaAutoInc() {
    return this.getBooleanAttribute('gather_info_schema_auto_inc');
  }

  // gather_innodb_metrics - computed: true, optional: false, required: false
  public get gatherInnodbMetrics() {
    return this.getBooleanAttribute('gather_innodb_metrics');
  }

  // gather_perf_events_statements - computed: true, optional: false, required: false
  public get gatherPerfEventsStatements() {
    return this.getBooleanAttribute('gather_perf_events_statements');
  }

  // gather_process_list - computed: true, optional: false, required: false
  public get gatherProcessList() {
    return this.getBooleanAttribute('gather_process_list');
  }

  // gather_slave_status - computed: true, optional: false, required: false
  public get gatherSlaveStatus() {
    return this.getBooleanAttribute('gather_slave_status');
  }

  // gather_table_io_waits - computed: true, optional: false, required: false
  public get gatherTableIoWaits() {
    return this.getBooleanAttribute('gather_table_io_waits');
  }

  // gather_table_lock_waits - computed: true, optional: false, required: false
  public get gatherTableLockWaits() {
    return this.getBooleanAttribute('gather_table_lock_waits');
  }

  // gather_table_schema - computed: true, optional: false, required: false
  public get gatherTableSchema() {
    return this.getBooleanAttribute('gather_table_schema');
  }

  // perf_events_statements_digest_text_limit - computed: true, optional: false, required: false
  public get perfEventsStatementsDigestTextLimit() {
    return this.getNumberAttribute('perf_events_statements_digest_text_limit');
  }

  // perf_events_statements_limit - computed: true, optional: false, required: false
  public get perfEventsStatementsLimit() {
    return this.getNumberAttribute('perf_events_statements_limit');
  }

  // perf_events_statements_time_limit - computed: true, optional: false, required: false
  public get perfEventsStatementsTimeLimit() {
    return this.getNumberAttribute('perf_events_statements_time_limit');
  }
}

export class DataAivenServiceIntegrationPrometheusUserConfigSourceMysqlTelegrafList extends cdktf.ComplexList {

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
  public get(index: number): DataAivenServiceIntegrationPrometheusUserConfigSourceMysqlTelegrafOutputReference {
    return new DataAivenServiceIntegrationPrometheusUserConfigSourceMysqlTelegrafOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAivenServiceIntegrationPrometheusUserConfigSourceMysql {
}

export function dataAivenServiceIntegrationPrometheusUserConfigSourceMysqlToTerraform(struct?: DataAivenServiceIntegrationPrometheusUserConfigSourceMysql): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenServiceIntegrationPrometheusUserConfigSourceMysqlToHclTerraform(struct?: DataAivenServiceIntegrationPrometheusUserConfigSourceMysql): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenServiceIntegrationPrometheusUserConfigSourceMysqlOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAivenServiceIntegrationPrometheusUserConfigSourceMysql | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenServiceIntegrationPrometheusUserConfigSourceMysql | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // telegraf - computed: true, optional: false, required: false
  private _telegraf = new DataAivenServiceIntegrationPrometheusUserConfigSourceMysqlTelegrafList(this, "telegraf", false);
  public get telegraf() {
    return this._telegraf;
  }
}

export class DataAivenServiceIntegrationPrometheusUserConfigSourceMysqlList extends cdktf.ComplexList {

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
  public get(index: number): DataAivenServiceIntegrationPrometheusUserConfigSourceMysqlOutputReference {
    return new DataAivenServiceIntegrationPrometheusUserConfigSourceMysqlOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAivenServiceIntegrationPrometheusUserConfig {
}

export function dataAivenServiceIntegrationPrometheusUserConfigToTerraform(struct?: DataAivenServiceIntegrationPrometheusUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenServiceIntegrationPrometheusUserConfigToHclTerraform(struct?: DataAivenServiceIntegrationPrometheusUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenServiceIntegrationPrometheusUserConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAivenServiceIntegrationPrometheusUserConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenServiceIntegrationPrometheusUserConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // source_mysql - computed: true, optional: false, required: false
  private _sourceMysql = new DataAivenServiceIntegrationPrometheusUserConfigSourceMysqlList(this, "source_mysql", false);
  public get sourceMysql() {
    return this._sourceMysql;
  }
}

export class DataAivenServiceIntegrationPrometheusUserConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataAivenServiceIntegrationPrometheusUserConfigOutputReference {
    return new DataAivenServiceIntegrationPrometheusUserConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/data-sources/service_integration aiven_service_integration}
*/
export class DataAivenServiceIntegration extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aiven_service_integration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAivenServiceIntegration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAivenServiceIntegration to import
  * @param importFromId The id of the existing DataAivenServiceIntegration that should be imported. Refer to the {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/data-sources/service_integration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAivenServiceIntegration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aiven_service_integration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/data-sources/service_integration aiven_service_integration} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAivenServiceIntegrationConfig
  */
  public constructor(scope: Construct, id: string, config: DataAivenServiceIntegrationConfig) {
    super(scope, id, {
      terraformResourceType: 'aiven_service_integration',
      terraformGeneratorMetadata: {
        providerName: 'aiven',
        providerVersion: '4.48.0',
        providerVersionConstraint: '4.48.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._destinationServiceName = config.destinationServiceName;
    this._id = config.id;
    this._integrationType = config.integrationType;
    this._project = config.project;
    this._sourceServiceName = config.sourceServiceName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // clickhouse_credentials_user_config - computed: true, optional: false, required: false
  private _clickhouseCredentialsUserConfig = new DataAivenServiceIntegrationClickhouseCredentialsUserConfigList(this, "clickhouse_credentials_user_config", false);
  public get clickhouseCredentialsUserConfig() {
    return this._clickhouseCredentialsUserConfig;
  }

  // clickhouse_kafka_user_config - computed: true, optional: false, required: false
  private _clickhouseKafkaUserConfig = new DataAivenServiceIntegrationClickhouseKafkaUserConfigList(this, "clickhouse_kafka_user_config", false);
  public get clickhouseKafkaUserConfig() {
    return this._clickhouseKafkaUserConfig;
  }

  // clickhouse_postgresql_user_config - computed: true, optional: false, required: false
  private _clickhousePostgresqlUserConfig = new DataAivenServiceIntegrationClickhousePostgresqlUserConfigList(this, "clickhouse_postgresql_user_config", false);
  public get clickhousePostgresqlUserConfig() {
    return this._clickhousePostgresqlUserConfig;
  }

  // datadog_user_config - computed: true, optional: false, required: false
  private _datadogUserConfig = new DataAivenServiceIntegrationDatadogUserConfigList(this, "datadog_user_config", false);
  public get datadogUserConfig() {
    return this._datadogUserConfig;
  }

  // destination_endpoint_id - computed: true, optional: false, required: false
  public get destinationEndpointId() {
    return this.getStringAttribute('destination_endpoint_id');
  }

  // destination_service_name - computed: false, optional: false, required: true
  private _destinationServiceName?: string; 
  public get destinationServiceName() {
    return this.getStringAttribute('destination_service_name');
  }
  public set destinationServiceName(value: string) {
    this._destinationServiceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationServiceNameInput() {
    return this._destinationServiceName;
  }

  // destination_service_project - computed: true, optional: false, required: false
  public get destinationServiceProject() {
    return this.getStringAttribute('destination_service_project');
  }

  // external_aws_cloudwatch_logs_user_config - computed: true, optional: false, required: false
  private _externalAwsCloudwatchLogsUserConfig = new DataAivenServiceIntegrationExternalAwsCloudwatchLogsUserConfigList(this, "external_aws_cloudwatch_logs_user_config", false);
  public get externalAwsCloudwatchLogsUserConfig() {
    return this._externalAwsCloudwatchLogsUserConfig;
  }

  // external_aws_cloudwatch_metrics_user_config - computed: true, optional: false, required: false
  private _externalAwsCloudwatchMetricsUserConfig = new DataAivenServiceIntegrationExternalAwsCloudwatchMetricsUserConfigList(this, "external_aws_cloudwatch_metrics_user_config", false);
  public get externalAwsCloudwatchMetricsUserConfig() {
    return this._externalAwsCloudwatchMetricsUserConfig;
  }

  // external_elasticsearch_logs_user_config - computed: true, optional: false, required: false
  private _externalElasticsearchLogsUserConfig = new DataAivenServiceIntegrationExternalElasticsearchLogsUserConfigList(this, "external_elasticsearch_logs_user_config", false);
  public get externalElasticsearchLogsUserConfig() {
    return this._externalElasticsearchLogsUserConfig;
  }

  // external_opensearch_logs_user_config - computed: true, optional: false, required: false
  private _externalOpensearchLogsUserConfig = new DataAivenServiceIntegrationExternalOpensearchLogsUserConfigList(this, "external_opensearch_logs_user_config", false);
  public get externalOpensearchLogsUserConfig() {
    return this._externalOpensearchLogsUserConfig;
  }

  // flink_external_postgresql_user_config - computed: true, optional: false, required: false
  private _flinkExternalPostgresqlUserConfig = new DataAivenServiceIntegrationFlinkExternalPostgresqlUserConfigList(this, "flink_external_postgresql_user_config", false);
  public get flinkExternalPostgresqlUserConfig() {
    return this._flinkExternalPostgresqlUserConfig;
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

  // integration_id - computed: true, optional: false, required: false
  public get integrationId() {
    return this.getStringAttribute('integration_id');
  }

  // integration_type - computed: false, optional: false, required: true
  private _integrationType?: string; 
  public get integrationType() {
    return this.getStringAttribute('integration_type');
  }
  public set integrationType(value: string) {
    this._integrationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationTypeInput() {
    return this._integrationType;
  }

  // kafka_connect_user_config - computed: true, optional: false, required: false
  private _kafkaConnectUserConfig = new DataAivenServiceIntegrationKafkaConnectUserConfigList(this, "kafka_connect_user_config", false);
  public get kafkaConnectUserConfig() {
    return this._kafkaConnectUserConfig;
  }

  // kafka_logs_user_config - computed: true, optional: false, required: false
  private _kafkaLogsUserConfig = new DataAivenServiceIntegrationKafkaLogsUserConfigList(this, "kafka_logs_user_config", false);
  public get kafkaLogsUserConfig() {
    return this._kafkaLogsUserConfig;
  }

  // kafka_mirrormaker_user_config - computed: true, optional: false, required: false
  private _kafkaMirrormakerUserConfig = new DataAivenServiceIntegrationKafkaMirrormakerUserConfigList(this, "kafka_mirrormaker_user_config", false);
  public get kafkaMirrormakerUserConfig() {
    return this._kafkaMirrormakerUserConfig;
  }

  // logs_user_config - computed: true, optional: false, required: false
  private _logsUserConfig = new DataAivenServiceIntegrationLogsUserConfigList(this, "logs_user_config", false);
  public get logsUserConfig() {
    return this._logsUserConfig;
  }

  // metrics_user_config - computed: true, optional: false, required: false
  private _metricsUserConfig = new DataAivenServiceIntegrationMetricsUserConfigList(this, "metrics_user_config", false);
  public get metricsUserConfig() {
    return this._metricsUserConfig;
  }

  // project - computed: false, optional: false, required: true
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // prometheus_user_config - computed: true, optional: false, required: false
  private _prometheusUserConfig = new DataAivenServiceIntegrationPrometheusUserConfigList(this, "prometheus_user_config", false);
  public get prometheusUserConfig() {
    return this._prometheusUserConfig;
  }

  // source_endpoint_id - computed: true, optional: false, required: false
  public get sourceEndpointId() {
    return this.getStringAttribute('source_endpoint_id');
  }

  // source_service_name - computed: false, optional: false, required: true
  private _sourceServiceName?: string; 
  public get sourceServiceName() {
    return this.getStringAttribute('source_service_name');
  }
  public set sourceServiceName(value: string) {
    this._sourceServiceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceServiceNameInput() {
    return this._sourceServiceName;
  }

  // source_service_project - computed: true, optional: false, required: false
  public get sourceServiceProject() {
    return this.getStringAttribute('source_service_project');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      destination_service_name: cdktf.stringToTerraform(this._destinationServiceName),
      id: cdktf.stringToTerraform(this._id),
      integration_type: cdktf.stringToTerraform(this._integrationType),
      project: cdktf.stringToTerraform(this._project),
      source_service_name: cdktf.stringToTerraform(this._sourceServiceName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      destination_service_name: {
        value: cdktf.stringToHclTerraform(this._destinationServiceName),
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
      integration_type: {
        value: cdktf.stringToHclTerraform(this._integrationType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_service_name: {
        value: cdktf.stringToHclTerraform(this._sourceServiceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
