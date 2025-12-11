// https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/data-sources/kafka
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAivenKafkaConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/data-sources/kafka#id DataAivenKafka#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the project this resource belongs to. To set up proper dependencies please refer to this variable as a reference. Changing this property forces recreation of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/data-sources/kafka#project DataAivenKafka#project}
  */
  readonly project: string;
  /**
  * Specifies the actual name of the service. The name cannot be changed later without destroying and re-creating the service so name should be picked based on intended service usage rather than current attributes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/data-sources/kafka#service_name DataAivenKafka#service_name}
  */
  readonly serviceName: string;
}
export interface DataAivenKafkaComponents {
}

export function dataAivenKafkaComponentsToTerraform(struct?: DataAivenKafkaComponents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenKafkaComponentsToHclTerraform(struct?: DataAivenKafkaComponents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenKafkaComponentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAivenKafkaComponents | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenKafkaComponents | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // component - computed: true, optional: false, required: false
  public get component() {
    return this.getStringAttribute('component');
  }

  // connection_uri - computed: true, optional: false, required: false
  public get connectionUri() {
    return this.getStringAttribute('connection_uri');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // kafka_authentication_method - computed: true, optional: false, required: false
  public get kafkaAuthenticationMethod() {
    return this.getStringAttribute('kafka_authentication_method');
  }

  // kafka_ssl_ca - computed: true, optional: false, required: false
  public get kafkaSslCa() {
    return this.getStringAttribute('kafka_ssl_ca');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // route - computed: true, optional: false, required: false
  public get route() {
    return this.getStringAttribute('route');
  }

  // ssl - computed: true, optional: false, required: false
  public get ssl() {
    return this.getBooleanAttribute('ssl');
  }

  // usage - computed: true, optional: false, required: false
  public get usage() {
    return this.getStringAttribute('usage');
  }
}

export class DataAivenKafkaComponentsList extends cdktf.ComplexList {

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
  public get(index: number): DataAivenKafkaComponentsOutputReference {
    return new DataAivenKafkaComponentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAivenKafkaKafka {
}

export function dataAivenKafkaKafkaToTerraform(struct?: DataAivenKafkaKafka): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenKafkaKafkaToHclTerraform(struct?: DataAivenKafkaKafka): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenKafkaKafkaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAivenKafkaKafka | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenKafkaKafka | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_cert - computed: true, optional: false, required: false
  public get accessCert() {
    return this.getStringAttribute('access_cert');
  }

  // access_key - computed: true, optional: false, required: false
  public get accessKey() {
    return this.getStringAttribute('access_key');
  }

  // connect_uri - computed: true, optional: false, required: false
  public get connectUri() {
    return this.getStringAttribute('connect_uri');
  }

  // rest_uri - computed: true, optional: false, required: false
  public get restUri() {
    return this.getStringAttribute('rest_uri');
  }

  // schema_registry_uri - computed: true, optional: false, required: false
  public get schemaRegistryUri() {
    return this.getStringAttribute('schema_registry_uri');
  }

  // uris - computed: true, optional: false, required: false
  public get uris() {
    return this.getListAttribute('uris');
  }
}

export class DataAivenKafkaKafkaList extends cdktf.ComplexList {

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
  public get(index: number): DataAivenKafkaKafkaOutputReference {
    return new DataAivenKafkaKafkaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAivenKafkaKafkaUserConfigFollowerFetching {
}

export function dataAivenKafkaKafkaUserConfigFollowerFetchingToTerraform(struct?: DataAivenKafkaKafkaUserConfigFollowerFetching): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenKafkaKafkaUserConfigFollowerFetchingToHclTerraform(struct?: DataAivenKafkaKafkaUserConfigFollowerFetching): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenKafkaKafkaUserConfigFollowerFetchingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAivenKafkaKafkaUserConfigFollowerFetching | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenKafkaKafkaUserConfigFollowerFetching | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}

export class DataAivenKafkaKafkaUserConfigFollowerFetchingList extends cdktf.ComplexList {

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
  public get(index: number): DataAivenKafkaKafkaUserConfigFollowerFetchingOutputReference {
    return new DataAivenKafkaKafkaUserConfigFollowerFetchingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAivenKafkaKafkaUserConfigIpFilterObject {
}

export function dataAivenKafkaKafkaUserConfigIpFilterObjectToTerraform(struct?: DataAivenKafkaKafkaUserConfigIpFilterObject): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenKafkaKafkaUserConfigIpFilterObjectToHclTerraform(struct?: DataAivenKafkaKafkaUserConfigIpFilterObject): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenKafkaKafkaUserConfigIpFilterObjectOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAivenKafkaKafkaUserConfigIpFilterObject | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenKafkaKafkaUserConfigIpFilterObject | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // network - computed: true, optional: false, required: false
  public get network() {
    return this.getStringAttribute('network');
  }
}

export class DataAivenKafkaKafkaUserConfigIpFilterObjectList extends cdktf.ComplexList {

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
  public get(index: number): DataAivenKafkaKafkaUserConfigIpFilterObjectOutputReference {
    return new DataAivenKafkaKafkaUserConfigIpFilterObjectOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAivenKafkaKafkaUserConfigKafka {
}

export function dataAivenKafkaKafkaUserConfigKafkaToTerraform(struct?: DataAivenKafkaKafkaUserConfigKafka): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenKafkaKafkaUserConfigKafkaToHclTerraform(struct?: DataAivenKafkaKafkaUserConfigKafka): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenKafkaKafkaUserConfigKafkaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAivenKafkaKafkaUserConfigKafka | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenKafkaKafkaUserConfigKafka | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auto_create_topics_enable - computed: true, optional: false, required: false
  public get autoCreateTopicsEnable() {
    return this.getBooleanAttribute('auto_create_topics_enable');
  }

  // compression_type - computed: true, optional: false, required: false
  public get compressionType() {
    return this.getStringAttribute('compression_type');
  }

  // connections_max_idle_ms - computed: true, optional: false, required: false
  public get connectionsMaxIdleMs() {
    return this.getNumberAttribute('connections_max_idle_ms');
  }

  // default_replication_factor - computed: true, optional: false, required: false
  public get defaultReplicationFactor() {
    return this.getNumberAttribute('default_replication_factor');
  }

  // group_initial_rebalance_delay_ms - computed: true, optional: false, required: false
  public get groupInitialRebalanceDelayMs() {
    return this.getNumberAttribute('group_initial_rebalance_delay_ms');
  }

  // group_max_session_timeout_ms - computed: true, optional: false, required: false
  public get groupMaxSessionTimeoutMs() {
    return this.getNumberAttribute('group_max_session_timeout_ms');
  }

  // group_min_session_timeout_ms - computed: true, optional: false, required: false
  public get groupMinSessionTimeoutMs() {
    return this.getNumberAttribute('group_min_session_timeout_ms');
  }

  // log_cleaner_delete_retention_ms - computed: true, optional: false, required: false
  public get logCleanerDeleteRetentionMs() {
    return this.getNumberAttribute('log_cleaner_delete_retention_ms');
  }

  // log_cleaner_max_compaction_lag_ms - computed: true, optional: false, required: false
  public get logCleanerMaxCompactionLagMs() {
    return this.getNumberAttribute('log_cleaner_max_compaction_lag_ms');
  }

  // log_cleaner_min_cleanable_ratio - computed: true, optional: false, required: false
  public get logCleanerMinCleanableRatio() {
    return this.getNumberAttribute('log_cleaner_min_cleanable_ratio');
  }

  // log_cleaner_min_compaction_lag_ms - computed: true, optional: false, required: false
  public get logCleanerMinCompactionLagMs() {
    return this.getNumberAttribute('log_cleaner_min_compaction_lag_ms');
  }

  // log_cleanup_policy - computed: true, optional: false, required: false
  public get logCleanupPolicy() {
    return this.getStringAttribute('log_cleanup_policy');
  }

  // log_flush_interval_messages - computed: true, optional: false, required: false
  public get logFlushIntervalMessages() {
    return this.getNumberAttribute('log_flush_interval_messages');
  }

  // log_flush_interval_ms - computed: true, optional: false, required: false
  public get logFlushIntervalMs() {
    return this.getNumberAttribute('log_flush_interval_ms');
  }

  // log_index_interval_bytes - computed: true, optional: false, required: false
  public get logIndexIntervalBytes() {
    return this.getNumberAttribute('log_index_interval_bytes');
  }

  // log_index_size_max_bytes - computed: true, optional: false, required: false
  public get logIndexSizeMaxBytes() {
    return this.getNumberAttribute('log_index_size_max_bytes');
  }

  // log_local_retention_bytes - computed: true, optional: false, required: false
  public get logLocalRetentionBytes() {
    return this.getNumberAttribute('log_local_retention_bytes');
  }

  // log_local_retention_ms - computed: true, optional: false, required: false
  public get logLocalRetentionMs() {
    return this.getNumberAttribute('log_local_retention_ms');
  }

  // log_message_downconversion_enable - computed: true, optional: false, required: false
  public get logMessageDownconversionEnable() {
    return this.getBooleanAttribute('log_message_downconversion_enable');
  }

  // log_message_timestamp_after_max_ms - computed: true, optional: false, required: false
  public get logMessageTimestampAfterMaxMs() {
    return this.getNumberAttribute('log_message_timestamp_after_max_ms');
  }

  // log_message_timestamp_before_max_ms - computed: true, optional: false, required: false
  public get logMessageTimestampBeforeMaxMs() {
    return this.getNumberAttribute('log_message_timestamp_before_max_ms');
  }

  // log_message_timestamp_difference_max_ms - computed: true, optional: false, required: false
  public get logMessageTimestampDifferenceMaxMs() {
    return this.getNumberAttribute('log_message_timestamp_difference_max_ms');
  }

  // log_message_timestamp_type - computed: true, optional: false, required: false
  public get logMessageTimestampType() {
    return this.getStringAttribute('log_message_timestamp_type');
  }

  // log_preallocate - computed: true, optional: false, required: false
  public get logPreallocate() {
    return this.getBooleanAttribute('log_preallocate');
  }

  // log_retention_bytes - computed: true, optional: false, required: false
  public get logRetentionBytes() {
    return this.getNumberAttribute('log_retention_bytes');
  }

  // log_retention_hours - computed: true, optional: false, required: false
  public get logRetentionHours() {
    return this.getNumberAttribute('log_retention_hours');
  }

  // log_retention_ms - computed: true, optional: false, required: false
  public get logRetentionMs() {
    return this.getNumberAttribute('log_retention_ms');
  }

  // log_roll_jitter_ms - computed: true, optional: false, required: false
  public get logRollJitterMs() {
    return this.getNumberAttribute('log_roll_jitter_ms');
  }

  // log_roll_ms - computed: true, optional: false, required: false
  public get logRollMs() {
    return this.getNumberAttribute('log_roll_ms');
  }

  // log_segment_bytes - computed: true, optional: false, required: false
  public get logSegmentBytes() {
    return this.getNumberAttribute('log_segment_bytes');
  }

  // log_segment_delete_delay_ms - computed: true, optional: false, required: false
  public get logSegmentDeleteDelayMs() {
    return this.getNumberAttribute('log_segment_delete_delay_ms');
  }

  // max_connections_per_ip - computed: true, optional: false, required: false
  public get maxConnectionsPerIp() {
    return this.getNumberAttribute('max_connections_per_ip');
  }

  // max_incremental_fetch_session_cache_slots - computed: true, optional: false, required: false
  public get maxIncrementalFetchSessionCacheSlots() {
    return this.getNumberAttribute('max_incremental_fetch_session_cache_slots');
  }

  // message_max_bytes - computed: true, optional: false, required: false
  public get messageMaxBytes() {
    return this.getNumberAttribute('message_max_bytes');
  }

  // min_insync_replicas - computed: true, optional: false, required: false
  public get minInsyncReplicas() {
    return this.getNumberAttribute('min_insync_replicas');
  }

  // num_partitions - computed: true, optional: false, required: false
  public get numPartitions() {
    return this.getNumberAttribute('num_partitions');
  }

  // offsets_retention_minutes - computed: true, optional: false, required: false
  public get offsetsRetentionMinutes() {
    return this.getNumberAttribute('offsets_retention_minutes');
  }

  // producer_purgatory_purge_interval_requests - computed: true, optional: false, required: false
  public get producerPurgatoryPurgeIntervalRequests() {
    return this.getNumberAttribute('producer_purgatory_purge_interval_requests');
  }

  // replica_fetch_max_bytes - computed: true, optional: false, required: false
  public get replicaFetchMaxBytes() {
    return this.getNumberAttribute('replica_fetch_max_bytes');
  }

  // replica_fetch_response_max_bytes - computed: true, optional: false, required: false
  public get replicaFetchResponseMaxBytes() {
    return this.getNumberAttribute('replica_fetch_response_max_bytes');
  }

  // sasl_oauthbearer_expected_audience - computed: true, optional: false, required: false
  public get saslOauthbearerExpectedAudience() {
    return this.getStringAttribute('sasl_oauthbearer_expected_audience');
  }

  // sasl_oauthbearer_expected_issuer - computed: true, optional: false, required: false
  public get saslOauthbearerExpectedIssuer() {
    return this.getStringAttribute('sasl_oauthbearer_expected_issuer');
  }

  // sasl_oauthbearer_jwks_endpoint_url - computed: true, optional: false, required: false
  public get saslOauthbearerJwksEndpointUrl() {
    return this.getStringAttribute('sasl_oauthbearer_jwks_endpoint_url');
  }

  // sasl_oauthbearer_sub_claim_name - computed: true, optional: false, required: false
  public get saslOauthbearerSubClaimName() {
    return this.getStringAttribute('sasl_oauthbearer_sub_claim_name');
  }

  // socket_request_max_bytes - computed: true, optional: false, required: false
  public get socketRequestMaxBytes() {
    return this.getNumberAttribute('socket_request_max_bytes');
  }

  // transaction_partition_verification_enable - computed: true, optional: false, required: false
  public get transactionPartitionVerificationEnable() {
    return this.getBooleanAttribute('transaction_partition_verification_enable');
  }

  // transaction_remove_expired_transaction_cleanup_interval_ms - computed: true, optional: false, required: false
  public get transactionRemoveExpiredTransactionCleanupIntervalMs() {
    return this.getNumberAttribute('transaction_remove_expired_transaction_cleanup_interval_ms');
  }

  // transaction_state_log_segment_bytes - computed: true, optional: false, required: false
  public get transactionStateLogSegmentBytes() {
    return this.getNumberAttribute('transaction_state_log_segment_bytes');
  }
}

export class DataAivenKafkaKafkaUserConfigKafkaList extends cdktf.ComplexList {

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
  public get(index: number): DataAivenKafkaKafkaUserConfigKafkaOutputReference {
    return new DataAivenKafkaKafkaUserConfigKafkaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAivenKafkaKafkaUserConfigKafkaAuthenticationMethods {
}

export function dataAivenKafkaKafkaUserConfigKafkaAuthenticationMethodsToTerraform(struct?: DataAivenKafkaKafkaUserConfigKafkaAuthenticationMethods): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenKafkaKafkaUserConfigKafkaAuthenticationMethodsToHclTerraform(struct?: DataAivenKafkaKafkaUserConfigKafkaAuthenticationMethods): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenKafkaKafkaUserConfigKafkaAuthenticationMethodsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAivenKafkaKafkaUserConfigKafkaAuthenticationMethods | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenKafkaKafkaUserConfigKafkaAuthenticationMethods | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // certificate - computed: true, optional: false, required: false
  public get certificate() {
    return this.getBooleanAttribute('certificate');
  }

  // sasl - computed: true, optional: false, required: false
  public get sasl() {
    return this.getBooleanAttribute('sasl');
  }
}

export class DataAivenKafkaKafkaUserConfigKafkaAuthenticationMethodsList extends cdktf.ComplexList {

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
  public get(index: number): DataAivenKafkaKafkaUserConfigKafkaAuthenticationMethodsOutputReference {
    return new DataAivenKafkaKafkaUserConfigKafkaAuthenticationMethodsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAivenKafkaKafkaUserConfigKafkaConnectConfig {
}

export function dataAivenKafkaKafkaUserConfigKafkaConnectConfigToTerraform(struct?: DataAivenKafkaKafkaUserConfigKafkaConnectConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenKafkaKafkaUserConfigKafkaConnectConfigToHclTerraform(struct?: DataAivenKafkaKafkaUserConfigKafkaConnectConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenKafkaKafkaUserConfigKafkaConnectConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAivenKafkaKafkaUserConfigKafkaConnectConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenKafkaKafkaUserConfigKafkaConnectConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // connector_client_config_override_policy - computed: true, optional: false, required: false
  public get connectorClientConfigOverridePolicy() {
    return this.getStringAttribute('connector_client_config_override_policy');
  }

  // consumer_auto_offset_reset - computed: true, optional: false, required: false
  public get consumerAutoOffsetReset() {
    return this.getStringAttribute('consumer_auto_offset_reset');
  }

  // consumer_fetch_max_bytes - computed: true, optional: false, required: false
  public get consumerFetchMaxBytes() {
    return this.getNumberAttribute('consumer_fetch_max_bytes');
  }

  // consumer_isolation_level - computed: true, optional: false, required: false
  public get consumerIsolationLevel() {
    return this.getStringAttribute('consumer_isolation_level');
  }

  // consumer_max_partition_fetch_bytes - computed: true, optional: false, required: false
  public get consumerMaxPartitionFetchBytes() {
    return this.getNumberAttribute('consumer_max_partition_fetch_bytes');
  }

  // consumer_max_poll_interval_ms - computed: true, optional: false, required: false
  public get consumerMaxPollIntervalMs() {
    return this.getNumberAttribute('consumer_max_poll_interval_ms');
  }

  // consumer_max_poll_records - computed: true, optional: false, required: false
  public get consumerMaxPollRecords() {
    return this.getNumberAttribute('consumer_max_poll_records');
  }

  // offset_flush_interval_ms - computed: true, optional: false, required: false
  public get offsetFlushIntervalMs() {
    return this.getNumberAttribute('offset_flush_interval_ms');
  }

  // offset_flush_timeout_ms - computed: true, optional: false, required: false
  public get offsetFlushTimeoutMs() {
    return this.getNumberAttribute('offset_flush_timeout_ms');
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

  // scheduled_rebalance_max_delay_ms - computed: true, optional: false, required: false
  public get scheduledRebalanceMaxDelayMs() {
    return this.getNumberAttribute('scheduled_rebalance_max_delay_ms');
  }

  // session_timeout_ms - computed: true, optional: false, required: false
  public get sessionTimeoutMs() {
    return this.getNumberAttribute('session_timeout_ms');
  }
}

export class DataAivenKafkaKafkaUserConfigKafkaConnectConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataAivenKafkaKafkaUserConfigKafkaConnectConfigOutputReference {
    return new DataAivenKafkaKafkaUserConfigKafkaConnectConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAivenKafkaKafkaUserConfigKafkaConnectPluginVersions {
}

export function dataAivenKafkaKafkaUserConfigKafkaConnectPluginVersionsToTerraform(struct?: DataAivenKafkaKafkaUserConfigKafkaConnectPluginVersions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenKafkaKafkaUserConfigKafkaConnectPluginVersionsToHclTerraform(struct?: DataAivenKafkaKafkaUserConfigKafkaConnectPluginVersions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenKafkaKafkaUserConfigKafkaConnectPluginVersionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAivenKafkaKafkaUserConfigKafkaConnectPluginVersions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenKafkaKafkaUserConfigKafkaConnectPluginVersions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // plugin_name - computed: true, optional: false, required: false
  public get pluginName() {
    return this.getStringAttribute('plugin_name');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class DataAivenKafkaKafkaUserConfigKafkaConnectPluginVersionsList extends cdktf.ComplexList {

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
  public get(index: number): DataAivenKafkaKafkaUserConfigKafkaConnectPluginVersionsOutputReference {
    return new DataAivenKafkaKafkaUserConfigKafkaConnectPluginVersionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAivenKafkaKafkaUserConfigKafkaConnectSecretProvidersAws {
}

export function dataAivenKafkaKafkaUserConfigKafkaConnectSecretProvidersAwsToTerraform(struct?: DataAivenKafkaKafkaUserConfigKafkaConnectSecretProvidersAws): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenKafkaKafkaUserConfigKafkaConnectSecretProvidersAwsToHclTerraform(struct?: DataAivenKafkaKafkaUserConfigKafkaConnectSecretProvidersAws): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenKafkaKafkaUserConfigKafkaConnectSecretProvidersAwsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAivenKafkaKafkaUserConfigKafkaConnectSecretProvidersAws | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenKafkaKafkaUserConfigKafkaConnectSecretProvidersAws | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_key - computed: true, optional: false, required: false
  public get accessKey() {
    return this.getStringAttribute('access_key');
  }

  // auth_method - computed: true, optional: false, required: false
  public get authMethod() {
    return this.getStringAttribute('auth_method');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // secret_key - computed: true, optional: false, required: false
  public get secretKey() {
    return this.getStringAttribute('secret_key');
  }
}

export class DataAivenKafkaKafkaUserConfigKafkaConnectSecretProvidersAwsList extends cdktf.ComplexList {

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
  public get(index: number): DataAivenKafkaKafkaUserConfigKafkaConnectSecretProvidersAwsOutputReference {
    return new DataAivenKafkaKafkaUserConfigKafkaConnectSecretProvidersAwsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAivenKafkaKafkaUserConfigKafkaConnectSecretProvidersVault {
}

export function dataAivenKafkaKafkaUserConfigKafkaConnectSecretProvidersVaultToTerraform(struct?: DataAivenKafkaKafkaUserConfigKafkaConnectSecretProvidersVault): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenKafkaKafkaUserConfigKafkaConnectSecretProvidersVaultToHclTerraform(struct?: DataAivenKafkaKafkaUserConfigKafkaConnectSecretProvidersVault): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenKafkaKafkaUserConfigKafkaConnectSecretProvidersVaultOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAivenKafkaKafkaUserConfigKafkaConnectSecretProvidersVault | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenKafkaKafkaUserConfigKafkaConnectSecretProvidersVault | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // auth_method - computed: true, optional: false, required: false
  public get authMethod() {
    return this.getStringAttribute('auth_method');
  }

  // engine_version - computed: true, optional: false, required: false
  public get engineVersion() {
    return this.getNumberAttribute('engine_version');
  }

  // prefix_path_depth - computed: true, optional: false, required: false
  public get prefixPathDepth() {
    return this.getNumberAttribute('prefix_path_depth');
  }

  // token - computed: true, optional: false, required: false
  public get token() {
    return this.getStringAttribute('token');
  }
}

export class DataAivenKafkaKafkaUserConfigKafkaConnectSecretProvidersVaultList extends cdktf.ComplexList {

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
  public get(index: number): DataAivenKafkaKafkaUserConfigKafkaConnectSecretProvidersVaultOutputReference {
    return new DataAivenKafkaKafkaUserConfigKafkaConnectSecretProvidersVaultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAivenKafkaKafkaUserConfigKafkaConnectSecretProviders {
}

export function dataAivenKafkaKafkaUserConfigKafkaConnectSecretProvidersToTerraform(struct?: DataAivenKafkaKafkaUserConfigKafkaConnectSecretProviders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenKafkaKafkaUserConfigKafkaConnectSecretProvidersToHclTerraform(struct?: DataAivenKafkaKafkaUserConfigKafkaConnectSecretProviders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenKafkaKafkaUserConfigKafkaConnectSecretProvidersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAivenKafkaKafkaUserConfigKafkaConnectSecretProviders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenKafkaKafkaUserConfigKafkaConnectSecretProviders | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aws - computed: true, optional: false, required: false
  private _aws = new DataAivenKafkaKafkaUserConfigKafkaConnectSecretProvidersAwsList(this, "aws", false);
  public get aws() {
    return this._aws;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // vault - computed: true, optional: false, required: false
  private _vault = new DataAivenKafkaKafkaUserConfigKafkaConnectSecretProvidersVaultList(this, "vault", false);
  public get vault() {
    return this._vault;
  }
}

export class DataAivenKafkaKafkaUserConfigKafkaConnectSecretProvidersList extends cdktf.ComplexList {

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
  public get(index: number): DataAivenKafkaKafkaUserConfigKafkaConnectSecretProvidersOutputReference {
    return new DataAivenKafkaKafkaUserConfigKafkaConnectSecretProvidersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAivenKafkaKafkaUserConfigKafkaDiskless {
}

export function dataAivenKafkaKafkaUserConfigKafkaDisklessToTerraform(struct?: DataAivenKafkaKafkaUserConfigKafkaDiskless): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenKafkaKafkaUserConfigKafkaDisklessToHclTerraform(struct?: DataAivenKafkaKafkaUserConfigKafkaDiskless): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenKafkaKafkaUserConfigKafkaDisklessOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAivenKafkaKafkaUserConfigKafkaDiskless | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenKafkaKafkaUserConfigKafkaDiskless | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}

export class DataAivenKafkaKafkaUserConfigKafkaDisklessList extends cdktf.ComplexList {

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
  public get(index: number): DataAivenKafkaKafkaUserConfigKafkaDisklessOutputReference {
    return new DataAivenKafkaKafkaUserConfigKafkaDisklessOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAivenKafkaKafkaUserConfigKafkaRestConfig {
}

export function dataAivenKafkaKafkaUserConfigKafkaRestConfigToTerraform(struct?: DataAivenKafkaKafkaUserConfigKafkaRestConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenKafkaKafkaUserConfigKafkaRestConfigToHclTerraform(struct?: DataAivenKafkaKafkaUserConfigKafkaRestConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenKafkaKafkaUserConfigKafkaRestConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAivenKafkaKafkaUserConfigKafkaRestConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenKafkaKafkaUserConfigKafkaRestConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // consumer_enable_auto_commit - computed: true, optional: false, required: false
  public get consumerEnableAutoCommit() {
    return this.getBooleanAttribute('consumer_enable_auto_commit');
  }

  // consumer_idle_disconnect_timeout - computed: true, optional: false, required: false
  public get consumerIdleDisconnectTimeout() {
    return this.getNumberAttribute('consumer_idle_disconnect_timeout');
  }

  // consumer_request_max_bytes - computed: true, optional: false, required: false
  public get consumerRequestMaxBytes() {
    return this.getNumberAttribute('consumer_request_max_bytes');
  }

  // consumer_request_timeout_ms - computed: true, optional: false, required: false
  public get consumerRequestTimeoutMs() {
    return this.getNumberAttribute('consumer_request_timeout_ms');
  }

  // name_strategy - computed: true, optional: false, required: false
  public get nameStrategy() {
    return this.getStringAttribute('name_strategy');
  }

  // name_strategy_validation - computed: true, optional: false, required: false
  public get nameStrategyValidation() {
    return this.getBooleanAttribute('name_strategy_validation');
  }

  // producer_acks - computed: true, optional: false, required: false
  public get producerAcks() {
    return this.getStringAttribute('producer_acks');
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

  // simpleconsumer_pool_size_max - computed: true, optional: false, required: false
  public get simpleconsumerPoolSizeMax() {
    return this.getNumberAttribute('simpleconsumer_pool_size_max');
  }
}

export class DataAivenKafkaKafkaUserConfigKafkaRestConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataAivenKafkaKafkaUserConfigKafkaRestConfigOutputReference {
    return new DataAivenKafkaKafkaUserConfigKafkaRestConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAivenKafkaKafkaUserConfigKafkaSaslMechanisms {
}

export function dataAivenKafkaKafkaUserConfigKafkaSaslMechanismsToTerraform(struct?: DataAivenKafkaKafkaUserConfigKafkaSaslMechanisms): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenKafkaKafkaUserConfigKafkaSaslMechanismsToHclTerraform(struct?: DataAivenKafkaKafkaUserConfigKafkaSaslMechanisms): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenKafkaKafkaUserConfigKafkaSaslMechanismsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAivenKafkaKafkaUserConfigKafkaSaslMechanisms | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenKafkaKafkaUserConfigKafkaSaslMechanisms | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // plain - computed: true, optional: false, required: false
  public get plain() {
    return this.getBooleanAttribute('plain');
  }

  // scram_sha_256 - computed: true, optional: false, required: false
  public get scramSha256() {
    return this.getBooleanAttribute('scram_sha_256');
  }

  // scram_sha_512 - computed: true, optional: false, required: false
  public get scramSha512() {
    return this.getBooleanAttribute('scram_sha_512');
  }
}

export class DataAivenKafkaKafkaUserConfigKafkaSaslMechanismsList extends cdktf.ComplexList {

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
  public get(index: number): DataAivenKafkaKafkaUserConfigKafkaSaslMechanismsOutputReference {
    return new DataAivenKafkaKafkaUserConfigKafkaSaslMechanismsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAivenKafkaKafkaUserConfigPrivateAccess {
}

export function dataAivenKafkaKafkaUserConfigPrivateAccessToTerraform(struct?: DataAivenKafkaKafkaUserConfigPrivateAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenKafkaKafkaUserConfigPrivateAccessToHclTerraform(struct?: DataAivenKafkaKafkaUserConfigPrivateAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenKafkaKafkaUserConfigPrivateAccessOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAivenKafkaKafkaUserConfigPrivateAccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenKafkaKafkaUserConfigPrivateAccess | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // kafka - computed: true, optional: false, required: false
  public get kafka() {
    return this.getBooleanAttribute('kafka');
  }

  // kafka_connect - computed: true, optional: false, required: false
  public get kafkaConnect() {
    return this.getBooleanAttribute('kafka_connect');
  }

  // kafka_rest - computed: true, optional: false, required: false
  public get kafkaRest() {
    return this.getBooleanAttribute('kafka_rest');
  }

  // prometheus - computed: true, optional: false, required: false
  public get prometheus() {
    return this.getBooleanAttribute('prometheus');
  }

  // schema_registry - computed: true, optional: false, required: false
  public get schemaRegistry() {
    return this.getBooleanAttribute('schema_registry');
  }
}

export class DataAivenKafkaKafkaUserConfigPrivateAccessList extends cdktf.ComplexList {

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
  public get(index: number): DataAivenKafkaKafkaUserConfigPrivateAccessOutputReference {
    return new DataAivenKafkaKafkaUserConfigPrivateAccessOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAivenKafkaKafkaUserConfigPrivatelinkAccess {
}

export function dataAivenKafkaKafkaUserConfigPrivatelinkAccessToTerraform(struct?: DataAivenKafkaKafkaUserConfigPrivatelinkAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenKafkaKafkaUserConfigPrivatelinkAccessToHclTerraform(struct?: DataAivenKafkaKafkaUserConfigPrivatelinkAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenKafkaKafkaUserConfigPrivatelinkAccessOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAivenKafkaKafkaUserConfigPrivatelinkAccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenKafkaKafkaUserConfigPrivatelinkAccess | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // jolokia - computed: true, optional: false, required: false
  public get jolokia() {
    return this.getBooleanAttribute('jolokia');
  }

  // kafka - computed: true, optional: false, required: false
  public get kafka() {
    return this.getBooleanAttribute('kafka');
  }

  // kafka_connect - computed: true, optional: false, required: false
  public get kafkaConnect() {
    return this.getBooleanAttribute('kafka_connect');
  }

  // kafka_rest - computed: true, optional: false, required: false
  public get kafkaRest() {
    return this.getBooleanAttribute('kafka_rest');
  }

  // prometheus - computed: true, optional: false, required: false
  public get prometheus() {
    return this.getBooleanAttribute('prometheus');
  }

  // schema_registry - computed: true, optional: false, required: false
  public get schemaRegistry() {
    return this.getBooleanAttribute('schema_registry');
  }
}

export class DataAivenKafkaKafkaUserConfigPrivatelinkAccessList extends cdktf.ComplexList {

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
  public get(index: number): DataAivenKafkaKafkaUserConfigPrivatelinkAccessOutputReference {
    return new DataAivenKafkaKafkaUserConfigPrivatelinkAccessOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAivenKafkaKafkaUserConfigPublicAccess {
}

export function dataAivenKafkaKafkaUserConfigPublicAccessToTerraform(struct?: DataAivenKafkaKafkaUserConfigPublicAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenKafkaKafkaUserConfigPublicAccessToHclTerraform(struct?: DataAivenKafkaKafkaUserConfigPublicAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenKafkaKafkaUserConfigPublicAccessOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAivenKafkaKafkaUserConfigPublicAccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenKafkaKafkaUserConfigPublicAccess | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // kafka - computed: true, optional: false, required: false
  public get kafka() {
    return this.getBooleanAttribute('kafka');
  }

  // kafka_connect - computed: true, optional: false, required: false
  public get kafkaConnect() {
    return this.getBooleanAttribute('kafka_connect');
  }

  // kafka_rest - computed: true, optional: false, required: false
  public get kafkaRest() {
    return this.getBooleanAttribute('kafka_rest');
  }

  // prometheus - computed: true, optional: false, required: false
  public get prometheus() {
    return this.getBooleanAttribute('prometheus');
  }

  // schema_registry - computed: true, optional: false, required: false
  public get schemaRegistry() {
    return this.getBooleanAttribute('schema_registry');
  }
}

export class DataAivenKafkaKafkaUserConfigPublicAccessList extends cdktf.ComplexList {

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
  public get(index: number): DataAivenKafkaKafkaUserConfigPublicAccessOutputReference {
    return new DataAivenKafkaKafkaUserConfigPublicAccessOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAivenKafkaKafkaUserConfigSchemaRegistryConfig {
}

export function dataAivenKafkaKafkaUserConfigSchemaRegistryConfigToTerraform(struct?: DataAivenKafkaKafkaUserConfigSchemaRegistryConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenKafkaKafkaUserConfigSchemaRegistryConfigToHclTerraform(struct?: DataAivenKafkaKafkaUserConfigSchemaRegistryConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenKafkaKafkaUserConfigSchemaRegistryConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAivenKafkaKafkaUserConfigSchemaRegistryConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenKafkaKafkaUserConfigSchemaRegistryConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // leader_eligibility - computed: true, optional: false, required: false
  public get leaderEligibility() {
    return this.getBooleanAttribute('leader_eligibility');
  }

  // retriable_errors_silenced - computed: true, optional: false, required: false
  public get retriableErrorsSilenced() {
    return this.getBooleanAttribute('retriable_errors_silenced');
  }

  // schema_reader_strict_mode - computed: true, optional: false, required: false
  public get schemaReaderStrictMode() {
    return this.getBooleanAttribute('schema_reader_strict_mode');
  }

  // topic_name - computed: true, optional: false, required: false
  public get topicName() {
    return this.getStringAttribute('topic_name');
  }
}

export class DataAivenKafkaKafkaUserConfigSchemaRegistryConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataAivenKafkaKafkaUserConfigSchemaRegistryConfigOutputReference {
    return new DataAivenKafkaKafkaUserConfigSchemaRegistryConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAivenKafkaKafkaUserConfigSingleZone {
}

export function dataAivenKafkaKafkaUserConfigSingleZoneToTerraform(struct?: DataAivenKafkaKafkaUserConfigSingleZone): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenKafkaKafkaUserConfigSingleZoneToHclTerraform(struct?: DataAivenKafkaKafkaUserConfigSingleZone): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenKafkaKafkaUserConfigSingleZoneOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAivenKafkaKafkaUserConfigSingleZone | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenKafkaKafkaUserConfigSingleZone | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // availability_zone - computed: true, optional: false, required: false
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}

export class DataAivenKafkaKafkaUserConfigSingleZoneList extends cdktf.ComplexList {

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
  public get(index: number): DataAivenKafkaKafkaUserConfigSingleZoneOutputReference {
    return new DataAivenKafkaKafkaUserConfigSingleZoneOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAivenKafkaKafkaUserConfigTieredStorageLocalCache {
}

export function dataAivenKafkaKafkaUserConfigTieredStorageLocalCacheToTerraform(struct?: DataAivenKafkaKafkaUserConfigTieredStorageLocalCache): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenKafkaKafkaUserConfigTieredStorageLocalCacheToHclTerraform(struct?: DataAivenKafkaKafkaUserConfigTieredStorageLocalCache): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenKafkaKafkaUserConfigTieredStorageLocalCacheOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAivenKafkaKafkaUserConfigTieredStorageLocalCache | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenKafkaKafkaUserConfigTieredStorageLocalCache | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getNumberAttribute('size');
  }
}

export class DataAivenKafkaKafkaUserConfigTieredStorageLocalCacheList extends cdktf.ComplexList {

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
  public get(index: number): DataAivenKafkaKafkaUserConfigTieredStorageLocalCacheOutputReference {
    return new DataAivenKafkaKafkaUserConfigTieredStorageLocalCacheOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAivenKafkaKafkaUserConfigTieredStorage {
}

export function dataAivenKafkaKafkaUserConfigTieredStorageToTerraform(struct?: DataAivenKafkaKafkaUserConfigTieredStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenKafkaKafkaUserConfigTieredStorageToHclTerraform(struct?: DataAivenKafkaKafkaUserConfigTieredStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenKafkaKafkaUserConfigTieredStorageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAivenKafkaKafkaUserConfigTieredStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenKafkaKafkaUserConfigTieredStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // local_cache - computed: true, optional: false, required: false
  private _localCache = new DataAivenKafkaKafkaUserConfigTieredStorageLocalCacheList(this, "local_cache", false);
  public get localCache() {
    return this._localCache;
  }
}

export class DataAivenKafkaKafkaUserConfigTieredStorageList extends cdktf.ComplexList {

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
  public get(index: number): DataAivenKafkaKafkaUserConfigTieredStorageOutputReference {
    return new DataAivenKafkaKafkaUserConfigTieredStorageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAivenKafkaKafkaUserConfig {
}

export function dataAivenKafkaKafkaUserConfigToTerraform(struct?: DataAivenKafkaKafkaUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenKafkaKafkaUserConfigToHclTerraform(struct?: DataAivenKafkaKafkaUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenKafkaKafkaUserConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAivenKafkaKafkaUserConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenKafkaKafkaUserConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_backup_regions - computed: true, optional: false, required: false
  public get additionalBackupRegions() {
    return this.getListAttribute('additional_backup_regions');
  }

  // aiven_kafka_topic_messages - computed: true, optional: false, required: false
  public get aivenKafkaTopicMessages() {
    return this.getBooleanAttribute('aiven_kafka_topic_messages');
  }

  // custom_domain - computed: true, optional: false, required: false
  public get customDomain() {
    return this.getStringAttribute('custom_domain');
  }

  // follower_fetching - computed: true, optional: false, required: false
  private _followerFetching = new DataAivenKafkaKafkaUserConfigFollowerFetchingList(this, "follower_fetching", false);
  public get followerFetching() {
    return this._followerFetching;
  }

  // ip_filter - computed: true, optional: false, required: false
  public get ipFilter() {
    return cdktf.Fn.tolist(this.getListAttribute('ip_filter'));
  }

  // ip_filter_object - computed: true, optional: false, required: false
  private _ipFilterObject = new DataAivenKafkaKafkaUserConfigIpFilterObjectList(this, "ip_filter_object", true);
  public get ipFilterObject() {
    return this._ipFilterObject;
  }

  // ip_filter_string - computed: true, optional: false, required: false
  public get ipFilterString() {
    return cdktf.Fn.tolist(this.getListAttribute('ip_filter_string'));
  }

  // kafka - computed: true, optional: false, required: false
  private _kafka = new DataAivenKafkaKafkaUserConfigKafkaList(this, "kafka", false);
  public get kafka() {
    return this._kafka;
  }

  // kafka_authentication_methods - computed: true, optional: false, required: false
  private _kafkaAuthenticationMethods = new DataAivenKafkaKafkaUserConfigKafkaAuthenticationMethodsList(this, "kafka_authentication_methods", false);
  public get kafkaAuthenticationMethods() {
    return this._kafkaAuthenticationMethods;
  }

  // kafka_connect - computed: true, optional: false, required: false
  public get kafkaConnect() {
    return this.getBooleanAttribute('kafka_connect');
  }

  // kafka_connect_config - computed: true, optional: false, required: false
  private _kafkaConnectConfig = new DataAivenKafkaKafkaUserConfigKafkaConnectConfigList(this, "kafka_connect_config", false);
  public get kafkaConnectConfig() {
    return this._kafkaConnectConfig;
  }

  // kafka_connect_plugin_versions - computed: true, optional: false, required: false
  private _kafkaConnectPluginVersions = new DataAivenKafkaKafkaUserConfigKafkaConnectPluginVersionsList(this, "kafka_connect_plugin_versions", false);
  public get kafkaConnectPluginVersions() {
    return this._kafkaConnectPluginVersions;
  }

  // kafka_connect_secret_providers - computed: true, optional: false, required: false
  private _kafkaConnectSecretProviders = new DataAivenKafkaKafkaUserConfigKafkaConnectSecretProvidersList(this, "kafka_connect_secret_providers", false);
  public get kafkaConnectSecretProviders() {
    return this._kafkaConnectSecretProviders;
  }

  // kafka_diskless - computed: true, optional: false, required: false
  private _kafkaDiskless = new DataAivenKafkaKafkaUserConfigKafkaDisklessList(this, "kafka_diskless", false);
  public get kafkaDiskless() {
    return this._kafkaDiskless;
  }

  // kafka_rest - computed: true, optional: false, required: false
  public get kafkaRest() {
    return this.getBooleanAttribute('kafka_rest');
  }

  // kafka_rest_authorization - computed: true, optional: false, required: false
  public get kafkaRestAuthorization() {
    return this.getBooleanAttribute('kafka_rest_authorization');
  }

  // kafka_rest_config - computed: true, optional: false, required: false
  private _kafkaRestConfig = new DataAivenKafkaKafkaUserConfigKafkaRestConfigList(this, "kafka_rest_config", false);
  public get kafkaRestConfig() {
    return this._kafkaRestConfig;
  }

  // kafka_sasl_mechanisms - computed: true, optional: false, required: false
  private _kafkaSaslMechanisms = new DataAivenKafkaKafkaUserConfigKafkaSaslMechanismsList(this, "kafka_sasl_mechanisms", false);
  public get kafkaSaslMechanisms() {
    return this._kafkaSaslMechanisms;
  }

  // kafka_version - computed: true, optional: false, required: false
  public get kafkaVersion() {
    return this.getStringAttribute('kafka_version');
  }

  // letsencrypt_sasl - computed: true, optional: false, required: false
  public get letsencryptSasl() {
    return this.getBooleanAttribute('letsencrypt_sasl');
  }

  // letsencrypt_sasl_privatelink - computed: true, optional: false, required: false
  public get letsencryptSaslPrivatelink() {
    return this.getBooleanAttribute('letsencrypt_sasl_privatelink');
  }

  // private_access - computed: true, optional: false, required: false
  private _privateAccess = new DataAivenKafkaKafkaUserConfigPrivateAccessList(this, "private_access", false);
  public get privateAccess() {
    return this._privateAccess;
  }

  // privatelink_access - computed: true, optional: false, required: false
  private _privatelinkAccess = new DataAivenKafkaKafkaUserConfigPrivatelinkAccessList(this, "privatelink_access", false);
  public get privatelinkAccess() {
    return this._privatelinkAccess;
  }

  // public_access - computed: true, optional: false, required: false
  private _publicAccess = new DataAivenKafkaKafkaUserConfigPublicAccessList(this, "public_access", false);
  public get publicAccess() {
    return this._publicAccess;
  }

  // sasl_oauthbearer_allowed_urls - computed: true, optional: false, required: false
  public get saslOauthbearerAllowedUrls() {
    return this.getListAttribute('sasl_oauthbearer_allowed_urls');
  }

  // schema_registry - computed: true, optional: false, required: false
  public get schemaRegistry() {
    return this.getBooleanAttribute('schema_registry');
  }

  // schema_registry_config - computed: true, optional: false, required: false
  private _schemaRegistryConfig = new DataAivenKafkaKafkaUserConfigSchemaRegistryConfigList(this, "schema_registry_config", false);
  public get schemaRegistryConfig() {
    return this._schemaRegistryConfig;
  }

  // service_log - computed: true, optional: false, required: false
  public get serviceLog() {
    return this.getBooleanAttribute('service_log');
  }

  // single_zone - computed: true, optional: false, required: false
  private _singleZone = new DataAivenKafkaKafkaUserConfigSingleZoneList(this, "single_zone", false);
  public get singleZone() {
    return this._singleZone;
  }

  // static_ips - computed: true, optional: false, required: false
  public get staticIps() {
    return this.getBooleanAttribute('static_ips');
  }

  // tiered_storage - computed: true, optional: false, required: false
  private _tieredStorage = new DataAivenKafkaKafkaUserConfigTieredStorageList(this, "tiered_storage", false);
  public get tieredStorage() {
    return this._tieredStorage;
  }
}

export class DataAivenKafkaKafkaUserConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataAivenKafkaKafkaUserConfigOutputReference {
    return new DataAivenKafkaKafkaUserConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAivenKafkaServiceIntegrations {
}

export function dataAivenKafkaServiceIntegrationsToTerraform(struct?: DataAivenKafkaServiceIntegrations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenKafkaServiceIntegrationsToHclTerraform(struct?: DataAivenKafkaServiceIntegrations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenKafkaServiceIntegrationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAivenKafkaServiceIntegrations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenKafkaServiceIntegrations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // integration_type - computed: true, optional: false, required: false
  public get integrationType() {
    return this.getStringAttribute('integration_type');
  }

  // source_service_name - computed: true, optional: false, required: false
  public get sourceServiceName() {
    return this.getStringAttribute('source_service_name');
  }
}

export class DataAivenKafkaServiceIntegrationsList extends cdktf.ComplexList {

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
  public get(index: number): DataAivenKafkaServiceIntegrationsOutputReference {
    return new DataAivenKafkaServiceIntegrationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAivenKafkaTag {
}

export function dataAivenKafkaTagToTerraform(struct?: DataAivenKafkaTag): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenKafkaTagToHclTerraform(struct?: DataAivenKafkaTag): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenKafkaTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAivenKafkaTag | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenKafkaTag | undefined) {
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

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAivenKafkaTagList extends cdktf.ComplexList {

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
  public get(index: number): DataAivenKafkaTagOutputReference {
    return new DataAivenKafkaTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAivenKafkaTechEmails {
}

export function dataAivenKafkaTechEmailsToTerraform(struct?: DataAivenKafkaTechEmails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenKafkaTechEmailsToHclTerraform(struct?: DataAivenKafkaTechEmails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenKafkaTechEmailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAivenKafkaTechEmails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenKafkaTechEmails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // email - computed: true, optional: false, required: false
  public get email() {
    return this.getStringAttribute('email');
  }
}

export class DataAivenKafkaTechEmailsList extends cdktf.ComplexList {

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
  public get(index: number): DataAivenKafkaTechEmailsOutputReference {
    return new DataAivenKafkaTechEmailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/data-sources/kafka aiven_kafka}
*/
export class DataAivenKafka extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aiven_kafka";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAivenKafka resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAivenKafka to import
  * @param importFromId The id of the existing DataAivenKafka that should be imported. Refer to the {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/data-sources/kafka#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAivenKafka to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aiven_kafka", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/data-sources/kafka aiven_kafka} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAivenKafkaConfig
  */
  public constructor(scope: Construct, id: string, config: DataAivenKafkaConfig) {
    super(scope, id, {
      terraformResourceType: 'aiven_kafka',
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
    this._id = config.id;
    this._project = config.project;
    this._serviceName = config.serviceName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_disk_space - computed: true, optional: false, required: false
  public get additionalDiskSpace() {
    return this.getStringAttribute('additional_disk_space');
  }

  // cloud_name - computed: true, optional: false, required: false
  public get cloudName() {
    return this.getStringAttribute('cloud_name');
  }

  // components - computed: true, optional: false, required: false
  private _components = new DataAivenKafkaComponentsList(this, "components", false);
  public get components() {
    return this._components;
  }

  // default_acl - computed: true, optional: false, required: false
  public get defaultAcl() {
    return this.getBooleanAttribute('default_acl');
  }

  // disk_space - computed: true, optional: false, required: false
  public get diskSpace() {
    return this.getStringAttribute('disk_space');
  }

  // disk_space_cap - computed: true, optional: false, required: false
  public get diskSpaceCap() {
    return this.getStringAttribute('disk_space_cap');
  }

  // disk_space_default - computed: true, optional: false, required: false
  public get diskSpaceDefault() {
    return this.getStringAttribute('disk_space_default');
  }

  // disk_space_step - computed: true, optional: false, required: false
  public get diskSpaceStep() {
    return this.getStringAttribute('disk_space_step');
  }

  // disk_space_used - computed: true, optional: false, required: false
  public get diskSpaceUsed() {
    return this.getStringAttribute('disk_space_used');
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

  // kafka - computed: true, optional: false, required: false
  private _kafka = new DataAivenKafkaKafkaList(this, "kafka", false);
  public get kafka() {
    return this._kafka;
  }

  // kafka_user_config - computed: true, optional: false, required: false
  private _kafkaUserConfig = new DataAivenKafkaKafkaUserConfigList(this, "kafka_user_config", false);
  public get kafkaUserConfig() {
    return this._kafkaUserConfig;
  }

  // karapace - computed: true, optional: false, required: false
  public get karapace() {
    return this.getBooleanAttribute('karapace');
  }

  // maintenance_window_dow - computed: true, optional: false, required: false
  public get maintenanceWindowDow() {
    return this.getStringAttribute('maintenance_window_dow');
  }

  // maintenance_window_enabled - computed: true, optional: false, required: false
  public get maintenanceWindowEnabled() {
    return this.getBooleanAttribute('maintenance_window_enabled');
  }

  // maintenance_window_time - computed: true, optional: false, required: false
  public get maintenanceWindowTime() {
    return this.getStringAttribute('maintenance_window_time');
  }

  // plan - computed: true, optional: false, required: false
  public get plan() {
    return this.getStringAttribute('plan');
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

  // project_vpc_id - computed: true, optional: false, required: false
  public get projectVpcId() {
    return this.getStringAttribute('project_vpc_id');
  }

  // service_host - computed: true, optional: false, required: false
  public get serviceHost() {
    return this.getStringAttribute('service_host');
  }

  // service_integrations - computed: true, optional: false, required: false
  private _serviceIntegrations = new DataAivenKafkaServiceIntegrationsList(this, "service_integrations", true);
  public get serviceIntegrations() {
    return this._serviceIntegrations;
  }

  // service_name - computed: false, optional: false, required: true
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }

  // service_password - computed: true, optional: false, required: false
  public get servicePassword() {
    return this.getStringAttribute('service_password');
  }

  // service_port - computed: true, optional: false, required: false
  public get servicePort() {
    return this.getNumberAttribute('service_port');
  }

  // service_type - computed: true, optional: false, required: false
  public get serviceType() {
    return this.getStringAttribute('service_type');
  }

  // service_uri - computed: true, optional: false, required: false
  public get serviceUri() {
    return this.getStringAttribute('service_uri');
  }

  // service_username - computed: true, optional: false, required: false
  public get serviceUsername() {
    return this.getStringAttribute('service_username');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // static_ips - computed: true, optional: false, required: false
  public get staticIps() {
    return cdktf.Fn.tolist(this.getListAttribute('static_ips'));
  }

  // tag - computed: true, optional: false, required: false
  private _tag = new DataAivenKafkaTagList(this, "tag", true);
  public get tag() {
    return this._tag;
  }

  // tech_emails - computed: true, optional: false, required: false
  private _techEmails = new DataAivenKafkaTechEmailsList(this, "tech_emails", true);
  public get techEmails() {
    return this._techEmails;
  }

  // termination_protection - computed: true, optional: false, required: false
  public get terminationProtection() {
    return this.getBooleanAttribute('termination_protection');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      project: cdktf.stringToTerraform(this._project),
      service_name: cdktf.stringToTerraform(this._serviceName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      service_name: {
        value: cdktf.stringToHclTerraform(this._serviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
