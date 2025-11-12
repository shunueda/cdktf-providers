// https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_connect
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KafkaConnectConfig extends cdktf.TerraformMetaArguments {
  /**
  * Add [disk storage](https://aiven.io/docs/platform/howto/add-storage-space) in increments of 30  GiB to scale your service. The maximum value depends on the service type and cloud provider. Removing additional storage causes the service nodes to go through a rolling restart, and there might be a short downtime for services without an autoscaler integration or high availability capabilities. The field can be safely removed when autoscaler is enabled without causing any changes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_connect#additional_disk_space KafkaConnect#additional_disk_space}
  */
  readonly additionalDiskSpace?: string;
  /**
  * The cloud provider and region the service is hosted in. The format is `provider-region`, for example: `google-europe-west1`. The [available cloud regions](https://aiven.io/docs/platform/reference/list_of_clouds) can differ per project and service. Changing this value [migrates the service to another cloud provider or region](https://aiven.io/docs/platform/howto/migrate-services-cloud-region). The migration runs in the background and includes a DNS update to redirect traffic to the new region. Most services experience no downtime, but some databases may have a brief interruption during DNS propagation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_connect#cloud_name KafkaConnect#cloud_name}
  */
  readonly cloudName?: string;
  /**
  * Service disk space. Possible values depend on the service type, the cloud provider and the project. Therefore, reducing will result in the service rebalancing. Please use `additional_disk_space` to specify the space to be added to the default disk space defined by the plan.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_connect#disk_space KafkaConnect#disk_space}
  */
  readonly diskSpace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_connect#id KafkaConnect#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Day of week when maintenance operations should be performed. One monday, tuesday, wednesday, etc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_connect#maintenance_window_dow KafkaConnect#maintenance_window_dow}
  */
  readonly maintenanceWindowDow?: string;
  /**
  * Time of day when maintenance operations should be performed. UTC time in HH:mm:ss format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_connect#maintenance_window_time KafkaConnect#maintenance_window_time}
  */
  readonly maintenanceWindowTime?: string;
  /**
  * Defines what kind of computing resources are allocated for the service. It can be changed after creation, though there are some restrictions when going to a smaller plan such as the new plan must have sufficient amount of disk space to store all current data and switching to a plan with fewer nodes might not be supported. The basic plan names are `hobbyist`, `startup-x`, `business-x` and `premium-x` where `x` is (roughly) the amount of memory on each node (also other attributes like number of CPUs and amount of disk space varies but naming is based on memory). The available options can be seen from the [Aiven pricing page](https://aiven.io/pricing).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_connect#plan KafkaConnect#plan}
  */
  readonly plan: string;
  /**
  * The name of the project this resource belongs to. To set up proper dependencies please refer to this variable as a reference. Changing this property forces recreation of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_connect#project KafkaConnect#project}
  */
  readonly project: string;
  /**
  * Specifies the VPC the service should run in. If the value is not set, the service runs on the Public Internet. When set, the value should be given as a reference to set up dependencies correctly, and the VPC must be in the same cloud and region as the service itself. The service can be freely moved to and from VPC after creation, but doing so triggers migration to new servers, so the operation can take a significant amount of time to complete if the service has a lot of data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_connect#project_vpc_id KafkaConnect#project_vpc_id}
  */
  readonly projectVpcId?: string;
  /**
  * Specifies the actual name of the service. The name cannot be changed later without destroying and re-creating the service so name should be picked based on intended service usage rather than current attributes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_connect#service_name KafkaConnect#service_name}
  */
  readonly serviceName: string;
  /**
  * Static IPs that are going to be associated with this service. Please assign a value using the 'toset' function. Once a static ip resource is in the 'assigned' state it cannot be unbound from the node again
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_connect#static_ips KafkaConnect#static_ips}
  */
  readonly staticIps?: string[];
  /**
  * Prevents the service from being deleted. It is recommended to set this to `true` for all production services to prevent unintentional service deletion. This does not shield against deleting databases or topics but for services with backups much of the content can at least be restored from backup in case accidental deletion is done.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_connect#termination_protection KafkaConnect#termination_protection}
  */
  readonly terminationProtection?: boolean | cdktf.IResolvable;
  /**
  * kafka_connect_user_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_connect#kafka_connect_user_config KafkaConnect#kafka_connect_user_config}
  */
  readonly kafkaConnectUserConfig?: KafkaConnectKafkaConnectUserConfig;
  /**
  * service_integrations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_connect#service_integrations KafkaConnect#service_integrations}
  */
  readonly serviceIntegrations?: KafkaConnectServiceIntegrations[] | cdktf.IResolvable;
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_connect#tag KafkaConnect#tag}
  */
  readonly tag?: KafkaConnectTag[] | cdktf.IResolvable;
  /**
  * tech_emails block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_connect#tech_emails KafkaConnect#tech_emails}
  */
  readonly techEmails?: KafkaConnectTechEmails[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_connect#timeouts KafkaConnect#timeouts}
  */
  readonly timeouts?: KafkaConnectTimeouts;
}
export interface KafkaConnectComponents {
}

export function kafkaConnectComponentsToTerraform(struct?: KafkaConnectComponents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function kafkaConnectComponentsToHclTerraform(struct?: KafkaConnectComponents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class KafkaConnectComponentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KafkaConnectComponents | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KafkaConnectComponents | undefined) {
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

export class KafkaConnectComponentsList extends cdktf.ComplexList {

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
  public get(index: number): KafkaConnectComponentsOutputReference {
    return new KafkaConnectComponentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KafkaConnectKafkaConnectUserConfigIpFilterObject {
  /**
  * Description for IP filter list entry. Example: `Production service IP range`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_connect#description KafkaConnect#description}
  */
  readonly description?: string;
  /**
  * CIDR address block. Example: `10.20.0.0/16`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_connect#network KafkaConnect#network}
  */
  readonly network: string;
}

export function kafkaConnectKafkaConnectUserConfigIpFilterObjectToTerraform(struct?: KafkaConnectKafkaConnectUserConfigIpFilterObject | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    network: cdktf.stringToTerraform(struct!.network),
  }
}


export function kafkaConnectKafkaConnectUserConfigIpFilterObjectToHclTerraform(struct?: KafkaConnectKafkaConnectUserConfigIpFilterObject | cdktf.IResolvable): any {
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
    network: {
      value: cdktf.stringToHclTerraform(struct!.network),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KafkaConnectKafkaConnectUserConfigIpFilterObjectOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KafkaConnectKafkaConnectUserConfigIpFilterObject | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._network !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KafkaConnectKafkaConnectUserConfigIpFilterObject | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._network = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._network = value.network;
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

  // network - computed: false, optional: false, required: true
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }
}

export class KafkaConnectKafkaConnectUserConfigIpFilterObjectList extends cdktf.ComplexList {
  public internalValue? : KafkaConnectKafkaConnectUserConfigIpFilterObject[] | cdktf.IResolvable

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
  public get(index: number): KafkaConnectKafkaConnectUserConfigIpFilterObjectOutputReference {
    return new KafkaConnectKafkaConnectUserConfigIpFilterObjectOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KafkaConnectKafkaConnectUserConfigKafkaConnect {
  /**
  * Enum: `All`, `None`. Defines what client configurations can be overridden by the connector. Default is None.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_connect#connector_client_config_override_policy KafkaConnect#connector_client_config_override_policy}
  */
  readonly connectorClientConfigOverridePolicy?: string;
  /**
  * Enum: `earliest`, `latest`. What to do when there is no initial offset in Kafka or if the current offset does not exist any more on the server. Default is earliest.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_connect#consumer_auto_offset_reset KafkaConnect#consumer_auto_offset_reset}
  */
  readonly consumerAutoOffsetReset?: string;
  /**
  * Records are fetched in batches by the consumer, and if the first record batch in the first non-empty partition of the fetch is larger than this value, the record batch will still be returned to ensure that the consumer can make progress. As such, this is not a absolute maximum.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_connect#consumer_fetch_max_bytes KafkaConnect#consumer_fetch_max_bytes}
  */
  readonly consumerFetchMaxBytes?: number;
  /**
  * Enum: `read_committed`, `read_uncommitted`. Transaction read isolation level. read_uncommitted is the default, but read_committed can be used if consume-exactly-once behavior is desired.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_connect#consumer_isolation_level KafkaConnect#consumer_isolation_level}
  */
  readonly consumerIsolationLevel?: string;
  /**
  * Records are fetched in batches by the consumer.If the first record batch in the first non-empty partition of the fetch is larger than this limit, the batch will still be returned to ensure that the consumer can make progress.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_connect#consumer_max_partition_fetch_bytes KafkaConnect#consumer_max_partition_fetch_bytes}
  */
  readonly consumerMaxPartitionFetchBytes?: number;
  /**
  * The maximum delay in milliseconds between invocations of poll() when using consumer group management (defaults to 300000).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_connect#consumer_max_poll_interval_ms KafkaConnect#consumer_max_poll_interval_ms}
  */
  readonly consumerMaxPollIntervalMs?: number;
  /**
  * The maximum number of records returned in a single call to poll() (defaults to 500).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_connect#consumer_max_poll_records KafkaConnect#consumer_max_poll_records}
  */
  readonly consumerMaxPollRecords?: number;
  /**
  * The interval at which to try committing offsets for tasks (defaults to 60000).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_connect#offset_flush_interval_ms KafkaConnect#offset_flush_interval_ms}
  */
  readonly offsetFlushIntervalMs?: number;
  /**
  * Maximum number of milliseconds to wait for records to flush and partition offset data to be committed to offset storage before cancelling the process and restoring the offset data to be committed in a future attempt (defaults to 5000).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_connect#offset_flush_timeout_ms KafkaConnect#offset_flush_timeout_ms}
  */
  readonly offsetFlushTimeoutMs?: number;
  /**
  * This setting gives the upper bound of the batch size to be sent. If there are fewer than this many bytes accumulated for this partition, the producer will `linger` for the linger.ms time waiting for more records to show up. A batch size of zero will disable batching entirely (defaults to 16384).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_connect#producer_batch_size KafkaConnect#producer_batch_size}
  */
  readonly producerBatchSize?: number;
  /**
  * The total bytes of memory the producer can use to buffer records waiting to be sent to the broker (defaults to 33554432).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_connect#producer_buffer_memory KafkaConnect#producer_buffer_memory}
  */
  readonly producerBufferMemory?: number;
  /**
  * Enum: `gzip`, `lz4`, `none`, `snappy`, `zstd`. Specify the default compression type for producers. This configuration accepts the standard compression codecs (`gzip`, `snappy`, `lz4`, `zstd`). It additionally accepts `none` which is the default and equivalent to no compression.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_connect#producer_compression_type KafkaConnect#producer_compression_type}
  */
  readonly producerCompressionType?: string;
  /**
  * This setting gives the upper bound on the delay for batching: once there is batch.size worth of records for a partition it will be sent immediately regardless of this setting, however if there are fewer than this many bytes accumulated for this partition the producer will `linger` for the specified time waiting for more records to show up. Defaults to 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_connect#producer_linger_ms KafkaConnect#producer_linger_ms}
  */
  readonly producerLingerMs?: number;
  /**
  * This setting will limit the number of record batches the producer will send in a single request to avoid sending huge requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_connect#producer_max_request_size KafkaConnect#producer_max_request_size}
  */
  readonly producerMaxRequestSize?: number;
  /**
  * The maximum delay that is scheduled in order to wait for the return of one or more departed workers before rebalancing and reassigning their connectors and tasks to the group. During this period the connectors and tasks of the departed workers remain unassigned. Defaults to 5 minutes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_connect#scheduled_rebalance_max_delay_ms KafkaConnect#scheduled_rebalance_max_delay_ms}
  */
  readonly scheduledRebalanceMaxDelayMs?: number;
  /**
  * The timeout in milliseconds used to detect failures when using Kafka’s group management facilities (defaults to 10000).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_connect#session_timeout_ms KafkaConnect#session_timeout_ms}
  */
  readonly sessionTimeoutMs?: number;
}

export function kafkaConnectKafkaConnectUserConfigKafkaConnectToTerraform(struct?: KafkaConnectKafkaConnectUserConfigKafkaConnectOutputReference | KafkaConnectKafkaConnectUserConfigKafkaConnect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connector_client_config_override_policy: cdktf.stringToTerraform(struct!.connectorClientConfigOverridePolicy),
    consumer_auto_offset_reset: cdktf.stringToTerraform(struct!.consumerAutoOffsetReset),
    consumer_fetch_max_bytes: cdktf.numberToTerraform(struct!.consumerFetchMaxBytes),
    consumer_isolation_level: cdktf.stringToTerraform(struct!.consumerIsolationLevel),
    consumer_max_partition_fetch_bytes: cdktf.numberToTerraform(struct!.consumerMaxPartitionFetchBytes),
    consumer_max_poll_interval_ms: cdktf.numberToTerraform(struct!.consumerMaxPollIntervalMs),
    consumer_max_poll_records: cdktf.numberToTerraform(struct!.consumerMaxPollRecords),
    offset_flush_interval_ms: cdktf.numberToTerraform(struct!.offsetFlushIntervalMs),
    offset_flush_timeout_ms: cdktf.numberToTerraform(struct!.offsetFlushTimeoutMs),
    producer_batch_size: cdktf.numberToTerraform(struct!.producerBatchSize),
    producer_buffer_memory: cdktf.numberToTerraform(struct!.producerBufferMemory),
    producer_compression_type: cdktf.stringToTerraform(struct!.producerCompressionType),
    producer_linger_ms: cdktf.numberToTerraform(struct!.producerLingerMs),
    producer_max_request_size: cdktf.numberToTerraform(struct!.producerMaxRequestSize),
    scheduled_rebalance_max_delay_ms: cdktf.numberToTerraform(struct!.scheduledRebalanceMaxDelayMs),
    session_timeout_ms: cdktf.numberToTerraform(struct!.sessionTimeoutMs),
  }
}


export function kafkaConnectKafkaConnectUserConfigKafkaConnectToHclTerraform(struct?: KafkaConnectKafkaConnectUserConfigKafkaConnectOutputReference | KafkaConnectKafkaConnectUserConfigKafkaConnect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connector_client_config_override_policy: {
      value: cdktf.stringToHclTerraform(struct!.connectorClientConfigOverridePolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    consumer_auto_offset_reset: {
      value: cdktf.stringToHclTerraform(struct!.consumerAutoOffsetReset),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    consumer_fetch_max_bytes: {
      value: cdktf.numberToHclTerraform(struct!.consumerFetchMaxBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    consumer_isolation_level: {
      value: cdktf.stringToHclTerraform(struct!.consumerIsolationLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    consumer_max_partition_fetch_bytes: {
      value: cdktf.numberToHclTerraform(struct!.consumerMaxPartitionFetchBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    consumer_max_poll_interval_ms: {
      value: cdktf.numberToHclTerraform(struct!.consumerMaxPollIntervalMs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    consumer_max_poll_records: {
      value: cdktf.numberToHclTerraform(struct!.consumerMaxPollRecords),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    offset_flush_interval_ms: {
      value: cdktf.numberToHclTerraform(struct!.offsetFlushIntervalMs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    offset_flush_timeout_ms: {
      value: cdktf.numberToHclTerraform(struct!.offsetFlushTimeoutMs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    producer_batch_size: {
      value: cdktf.numberToHclTerraform(struct!.producerBatchSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    producer_buffer_memory: {
      value: cdktf.numberToHclTerraform(struct!.producerBufferMemory),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    producer_compression_type: {
      value: cdktf.stringToHclTerraform(struct!.producerCompressionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    producer_linger_ms: {
      value: cdktf.numberToHclTerraform(struct!.producerLingerMs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    producer_max_request_size: {
      value: cdktf.numberToHclTerraform(struct!.producerMaxRequestSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    scheduled_rebalance_max_delay_ms: {
      value: cdktf.numberToHclTerraform(struct!.scheduledRebalanceMaxDelayMs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    session_timeout_ms: {
      value: cdktf.numberToHclTerraform(struct!.sessionTimeoutMs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KafkaConnectKafkaConnectUserConfigKafkaConnectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KafkaConnectKafkaConnectUserConfigKafkaConnect | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectorClientConfigOverridePolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectorClientConfigOverridePolicy = this._connectorClientConfigOverridePolicy;
    }
    if (this._consumerAutoOffsetReset !== undefined) {
      hasAnyValues = true;
      internalValueResult.consumerAutoOffsetReset = this._consumerAutoOffsetReset;
    }
    if (this._consumerFetchMaxBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.consumerFetchMaxBytes = this._consumerFetchMaxBytes;
    }
    if (this._consumerIsolationLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.consumerIsolationLevel = this._consumerIsolationLevel;
    }
    if (this._consumerMaxPartitionFetchBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.consumerMaxPartitionFetchBytes = this._consumerMaxPartitionFetchBytes;
    }
    if (this._consumerMaxPollIntervalMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.consumerMaxPollIntervalMs = this._consumerMaxPollIntervalMs;
    }
    if (this._consumerMaxPollRecords !== undefined) {
      hasAnyValues = true;
      internalValueResult.consumerMaxPollRecords = this._consumerMaxPollRecords;
    }
    if (this._offsetFlushIntervalMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.offsetFlushIntervalMs = this._offsetFlushIntervalMs;
    }
    if (this._offsetFlushTimeoutMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.offsetFlushTimeoutMs = this._offsetFlushTimeoutMs;
    }
    if (this._producerBatchSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.producerBatchSize = this._producerBatchSize;
    }
    if (this._producerBufferMemory !== undefined) {
      hasAnyValues = true;
      internalValueResult.producerBufferMemory = this._producerBufferMemory;
    }
    if (this._producerCompressionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.producerCompressionType = this._producerCompressionType;
    }
    if (this._producerLingerMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.producerLingerMs = this._producerLingerMs;
    }
    if (this._producerMaxRequestSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.producerMaxRequestSize = this._producerMaxRequestSize;
    }
    if (this._scheduledRebalanceMaxDelayMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheduledRebalanceMaxDelayMs = this._scheduledRebalanceMaxDelayMs;
    }
    if (this._sessionTimeoutMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionTimeoutMs = this._sessionTimeoutMs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KafkaConnectKafkaConnectUserConfigKafkaConnect | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connectorClientConfigOverridePolicy = undefined;
      this._consumerAutoOffsetReset = undefined;
      this._consumerFetchMaxBytes = undefined;
      this._consumerIsolationLevel = undefined;
      this._consumerMaxPartitionFetchBytes = undefined;
      this._consumerMaxPollIntervalMs = undefined;
      this._consumerMaxPollRecords = undefined;
      this._offsetFlushIntervalMs = undefined;
      this._offsetFlushTimeoutMs = undefined;
      this._producerBatchSize = undefined;
      this._producerBufferMemory = undefined;
      this._producerCompressionType = undefined;
      this._producerLingerMs = undefined;
      this._producerMaxRequestSize = undefined;
      this._scheduledRebalanceMaxDelayMs = undefined;
      this._sessionTimeoutMs = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connectorClientConfigOverridePolicy = value.connectorClientConfigOverridePolicy;
      this._consumerAutoOffsetReset = value.consumerAutoOffsetReset;
      this._consumerFetchMaxBytes = value.consumerFetchMaxBytes;
      this._consumerIsolationLevel = value.consumerIsolationLevel;
      this._consumerMaxPartitionFetchBytes = value.consumerMaxPartitionFetchBytes;
      this._consumerMaxPollIntervalMs = value.consumerMaxPollIntervalMs;
      this._consumerMaxPollRecords = value.consumerMaxPollRecords;
      this._offsetFlushIntervalMs = value.offsetFlushIntervalMs;
      this._offsetFlushTimeoutMs = value.offsetFlushTimeoutMs;
      this._producerBatchSize = value.producerBatchSize;
      this._producerBufferMemory = value.producerBufferMemory;
      this._producerCompressionType = value.producerCompressionType;
      this._producerLingerMs = value.producerLingerMs;
      this._producerMaxRequestSize = value.producerMaxRequestSize;
      this._scheduledRebalanceMaxDelayMs = value.scheduledRebalanceMaxDelayMs;
      this._sessionTimeoutMs = value.sessionTimeoutMs;
    }
  }

  // connector_client_config_override_policy - computed: false, optional: true, required: false
  private _connectorClientConfigOverridePolicy?: string; 
  public get connectorClientConfigOverridePolicy() {
    return this.getStringAttribute('connector_client_config_override_policy');
  }
  public set connectorClientConfigOverridePolicy(value: string) {
    this._connectorClientConfigOverridePolicy = value;
  }
  public resetConnectorClientConfigOverridePolicy() {
    this._connectorClientConfigOverridePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorClientConfigOverridePolicyInput() {
    return this._connectorClientConfigOverridePolicy;
  }

  // consumer_auto_offset_reset - computed: false, optional: true, required: false
  private _consumerAutoOffsetReset?: string; 
  public get consumerAutoOffsetReset() {
    return this.getStringAttribute('consumer_auto_offset_reset');
  }
  public set consumerAutoOffsetReset(value: string) {
    this._consumerAutoOffsetReset = value;
  }
  public resetConsumerAutoOffsetReset() {
    this._consumerAutoOffsetReset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerAutoOffsetResetInput() {
    return this._consumerAutoOffsetReset;
  }

  // consumer_fetch_max_bytes - computed: false, optional: true, required: false
  private _consumerFetchMaxBytes?: number; 
  public get consumerFetchMaxBytes() {
    return this.getNumberAttribute('consumer_fetch_max_bytes');
  }
  public set consumerFetchMaxBytes(value: number) {
    this._consumerFetchMaxBytes = value;
  }
  public resetConsumerFetchMaxBytes() {
    this._consumerFetchMaxBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerFetchMaxBytesInput() {
    return this._consumerFetchMaxBytes;
  }

  // consumer_isolation_level - computed: false, optional: true, required: false
  private _consumerIsolationLevel?: string; 
  public get consumerIsolationLevel() {
    return this.getStringAttribute('consumer_isolation_level');
  }
  public set consumerIsolationLevel(value: string) {
    this._consumerIsolationLevel = value;
  }
  public resetConsumerIsolationLevel() {
    this._consumerIsolationLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerIsolationLevelInput() {
    return this._consumerIsolationLevel;
  }

  // consumer_max_partition_fetch_bytes - computed: false, optional: true, required: false
  private _consumerMaxPartitionFetchBytes?: number; 
  public get consumerMaxPartitionFetchBytes() {
    return this.getNumberAttribute('consumer_max_partition_fetch_bytes');
  }
  public set consumerMaxPartitionFetchBytes(value: number) {
    this._consumerMaxPartitionFetchBytes = value;
  }
  public resetConsumerMaxPartitionFetchBytes() {
    this._consumerMaxPartitionFetchBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerMaxPartitionFetchBytesInput() {
    return this._consumerMaxPartitionFetchBytes;
  }

  // consumer_max_poll_interval_ms - computed: false, optional: true, required: false
  private _consumerMaxPollIntervalMs?: number; 
  public get consumerMaxPollIntervalMs() {
    return this.getNumberAttribute('consumer_max_poll_interval_ms');
  }
  public set consumerMaxPollIntervalMs(value: number) {
    this._consumerMaxPollIntervalMs = value;
  }
  public resetConsumerMaxPollIntervalMs() {
    this._consumerMaxPollIntervalMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerMaxPollIntervalMsInput() {
    return this._consumerMaxPollIntervalMs;
  }

  // consumer_max_poll_records - computed: false, optional: true, required: false
  private _consumerMaxPollRecords?: number; 
  public get consumerMaxPollRecords() {
    return this.getNumberAttribute('consumer_max_poll_records');
  }
  public set consumerMaxPollRecords(value: number) {
    this._consumerMaxPollRecords = value;
  }
  public resetConsumerMaxPollRecords() {
    this._consumerMaxPollRecords = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerMaxPollRecordsInput() {
    return this._consumerMaxPollRecords;
  }

  // offset_flush_interval_ms - computed: false, optional: true, required: false
  private _offsetFlushIntervalMs?: number; 
  public get offsetFlushIntervalMs() {
    return this.getNumberAttribute('offset_flush_interval_ms');
  }
  public set offsetFlushIntervalMs(value: number) {
    this._offsetFlushIntervalMs = value;
  }
  public resetOffsetFlushIntervalMs() {
    this._offsetFlushIntervalMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offsetFlushIntervalMsInput() {
    return this._offsetFlushIntervalMs;
  }

  // offset_flush_timeout_ms - computed: false, optional: true, required: false
  private _offsetFlushTimeoutMs?: number; 
  public get offsetFlushTimeoutMs() {
    return this.getNumberAttribute('offset_flush_timeout_ms');
  }
  public set offsetFlushTimeoutMs(value: number) {
    this._offsetFlushTimeoutMs = value;
  }
  public resetOffsetFlushTimeoutMs() {
    this._offsetFlushTimeoutMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offsetFlushTimeoutMsInput() {
    return this._offsetFlushTimeoutMs;
  }

  // producer_batch_size - computed: false, optional: true, required: false
  private _producerBatchSize?: number; 
  public get producerBatchSize() {
    return this.getNumberAttribute('producer_batch_size');
  }
  public set producerBatchSize(value: number) {
    this._producerBatchSize = value;
  }
  public resetProducerBatchSize() {
    this._producerBatchSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get producerBatchSizeInput() {
    return this._producerBatchSize;
  }

  // producer_buffer_memory - computed: false, optional: true, required: false
  private _producerBufferMemory?: number; 
  public get producerBufferMemory() {
    return this.getNumberAttribute('producer_buffer_memory');
  }
  public set producerBufferMemory(value: number) {
    this._producerBufferMemory = value;
  }
  public resetProducerBufferMemory() {
    this._producerBufferMemory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get producerBufferMemoryInput() {
    return this._producerBufferMemory;
  }

  // producer_compression_type - computed: false, optional: true, required: false
  private _producerCompressionType?: string; 
  public get producerCompressionType() {
    return this.getStringAttribute('producer_compression_type');
  }
  public set producerCompressionType(value: string) {
    this._producerCompressionType = value;
  }
  public resetProducerCompressionType() {
    this._producerCompressionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get producerCompressionTypeInput() {
    return this._producerCompressionType;
  }

  // producer_linger_ms - computed: false, optional: true, required: false
  private _producerLingerMs?: number; 
  public get producerLingerMs() {
    return this.getNumberAttribute('producer_linger_ms');
  }
  public set producerLingerMs(value: number) {
    this._producerLingerMs = value;
  }
  public resetProducerLingerMs() {
    this._producerLingerMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get producerLingerMsInput() {
    return this._producerLingerMs;
  }

  // producer_max_request_size - computed: false, optional: true, required: false
  private _producerMaxRequestSize?: number; 
  public get producerMaxRequestSize() {
    return this.getNumberAttribute('producer_max_request_size');
  }
  public set producerMaxRequestSize(value: number) {
    this._producerMaxRequestSize = value;
  }
  public resetProducerMaxRequestSize() {
    this._producerMaxRequestSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get producerMaxRequestSizeInput() {
    return this._producerMaxRequestSize;
  }

  // scheduled_rebalance_max_delay_ms - computed: false, optional: true, required: false
  private _scheduledRebalanceMaxDelayMs?: number; 
  public get scheduledRebalanceMaxDelayMs() {
    return this.getNumberAttribute('scheduled_rebalance_max_delay_ms');
  }
  public set scheduledRebalanceMaxDelayMs(value: number) {
    this._scheduledRebalanceMaxDelayMs = value;
  }
  public resetScheduledRebalanceMaxDelayMs() {
    this._scheduledRebalanceMaxDelayMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduledRebalanceMaxDelayMsInput() {
    return this._scheduledRebalanceMaxDelayMs;
  }

  // session_timeout_ms - computed: false, optional: true, required: false
  private _sessionTimeoutMs?: number; 
  public get sessionTimeoutMs() {
    return this.getNumberAttribute('session_timeout_ms');
  }
  public set sessionTimeoutMs(value: number) {
    this._sessionTimeoutMs = value;
  }
  public resetSessionTimeoutMs() {
    this._sessionTimeoutMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionTimeoutMsInput() {
    return this._sessionTimeoutMs;
  }
}
export interface KafkaConnectKafkaConnectUserConfigPluginVersions {
  /**
  * The name of the plugin. Example: `debezium-connector`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_connect#plugin_name KafkaConnect#plugin_name}
  */
  readonly pluginName: string;
  /**
  * The version of the plugin. Example: `2.5.0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_connect#version KafkaConnect#version}
  */
  readonly version: string;
}

export function kafkaConnectKafkaConnectUserConfigPluginVersionsToTerraform(struct?: KafkaConnectKafkaConnectUserConfigPluginVersions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    plugin_name: cdktf.stringToTerraform(struct!.pluginName),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function kafkaConnectKafkaConnectUserConfigPluginVersionsToHclTerraform(struct?: KafkaConnectKafkaConnectUserConfigPluginVersions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    plugin_name: {
      value: cdktf.stringToHclTerraform(struct!.pluginName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KafkaConnectKafkaConnectUserConfigPluginVersionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KafkaConnectKafkaConnectUserConfigPluginVersions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pluginName !== undefined) {
      hasAnyValues = true;
      internalValueResult.pluginName = this._pluginName;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KafkaConnectKafkaConnectUserConfigPluginVersions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pluginName = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._pluginName = value.pluginName;
      this._version = value.version;
    }
  }

  // plugin_name - computed: false, optional: false, required: true
  private _pluginName?: string; 
  public get pluginName() {
    return this.getStringAttribute('plugin_name');
  }
  public set pluginName(value: string) {
    this._pluginName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginNameInput() {
    return this._pluginName;
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

export class KafkaConnectKafkaConnectUserConfigPluginVersionsList extends cdktf.ComplexList {
  public internalValue? : KafkaConnectKafkaConnectUserConfigPluginVersions[] | cdktf.IResolvable

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
  public get(index: number): KafkaConnectKafkaConnectUserConfigPluginVersionsOutputReference {
    return new KafkaConnectKafkaConnectUserConfigPluginVersionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KafkaConnectKafkaConnectUserConfigPrivateAccess {
  /**
  * Allow clients to connect to kafka_connect with a DNS name that always resolves to the service's private IP addresses. Only available in certain network locations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_connect#kafka_connect KafkaConnect#kafka_connect}
  */
  readonly kafkaConnect?: boolean | cdktf.IResolvable;
  /**
  * Allow clients to connect to prometheus with a DNS name that always resolves to the service's private IP addresses. Only available in certain network locations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_connect#prometheus KafkaConnect#prometheus}
  */
  readonly prometheus?: boolean | cdktf.IResolvable;
}

export function kafkaConnectKafkaConnectUserConfigPrivateAccessToTerraform(struct?: KafkaConnectKafkaConnectUserConfigPrivateAccessOutputReference | KafkaConnectKafkaConnectUserConfigPrivateAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kafka_connect: cdktf.booleanToTerraform(struct!.kafkaConnect),
    prometheus: cdktf.booleanToTerraform(struct!.prometheus),
  }
}


export function kafkaConnectKafkaConnectUserConfigPrivateAccessToHclTerraform(struct?: KafkaConnectKafkaConnectUserConfigPrivateAccessOutputReference | KafkaConnectKafkaConnectUserConfigPrivateAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kafka_connect: {
      value: cdktf.booleanToHclTerraform(struct!.kafkaConnect),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prometheus: {
      value: cdktf.booleanToHclTerraform(struct!.prometheus),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KafkaConnectKafkaConnectUserConfigPrivateAccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KafkaConnectKafkaConnectUserConfigPrivateAccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kafkaConnect !== undefined) {
      hasAnyValues = true;
      internalValueResult.kafkaConnect = this._kafkaConnect;
    }
    if (this._prometheus !== undefined) {
      hasAnyValues = true;
      internalValueResult.prometheus = this._prometheus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KafkaConnectKafkaConnectUserConfigPrivateAccess | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kafkaConnect = undefined;
      this._prometheus = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kafkaConnect = value.kafkaConnect;
      this._prometheus = value.prometheus;
    }
  }

  // kafka_connect - computed: false, optional: true, required: false
  private _kafkaConnect?: boolean | cdktf.IResolvable; 
  public get kafkaConnect() {
    return this.getBooleanAttribute('kafka_connect');
  }
  public set kafkaConnect(value: boolean | cdktf.IResolvable) {
    this._kafkaConnect = value;
  }
  public resetKafkaConnect() {
    this._kafkaConnect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaConnectInput() {
    return this._kafkaConnect;
  }

  // prometheus - computed: false, optional: true, required: false
  private _prometheus?: boolean | cdktf.IResolvable; 
  public get prometheus() {
    return this.getBooleanAttribute('prometheus');
  }
  public set prometheus(value: boolean | cdktf.IResolvable) {
    this._prometheus = value;
  }
  public resetPrometheus() {
    this._prometheus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prometheusInput() {
    return this._prometheus;
  }
}
export interface KafkaConnectKafkaConnectUserConfigPrivatelinkAccess {
  /**
  * Enable jolokia.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_connect#jolokia KafkaConnect#jolokia}
  */
  readonly jolokia?: boolean | cdktf.IResolvable;
  /**
  * Enable kafka_connect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_connect#kafka_connect KafkaConnect#kafka_connect}
  */
  readonly kafkaConnect?: boolean | cdktf.IResolvable;
  /**
  * Enable prometheus.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_connect#prometheus KafkaConnect#prometheus}
  */
  readonly prometheus?: boolean | cdktf.IResolvable;
}

export function kafkaConnectKafkaConnectUserConfigPrivatelinkAccessToTerraform(struct?: KafkaConnectKafkaConnectUserConfigPrivatelinkAccessOutputReference | KafkaConnectKafkaConnectUserConfigPrivatelinkAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    jolokia: cdktf.booleanToTerraform(struct!.jolokia),
    kafka_connect: cdktf.booleanToTerraform(struct!.kafkaConnect),
    prometheus: cdktf.booleanToTerraform(struct!.prometheus),
  }
}


export function kafkaConnectKafkaConnectUserConfigPrivatelinkAccessToHclTerraform(struct?: KafkaConnectKafkaConnectUserConfigPrivatelinkAccessOutputReference | KafkaConnectKafkaConnectUserConfigPrivatelinkAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    jolokia: {
      value: cdktf.booleanToHclTerraform(struct!.jolokia),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    kafka_connect: {
      value: cdktf.booleanToHclTerraform(struct!.kafkaConnect),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prometheus: {
      value: cdktf.booleanToHclTerraform(struct!.prometheus),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KafkaConnectKafkaConnectUserConfigPrivatelinkAccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KafkaConnectKafkaConnectUserConfigPrivatelinkAccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jolokia !== undefined) {
      hasAnyValues = true;
      internalValueResult.jolokia = this._jolokia;
    }
    if (this._kafkaConnect !== undefined) {
      hasAnyValues = true;
      internalValueResult.kafkaConnect = this._kafkaConnect;
    }
    if (this._prometheus !== undefined) {
      hasAnyValues = true;
      internalValueResult.prometheus = this._prometheus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KafkaConnectKafkaConnectUserConfigPrivatelinkAccess | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._jolokia = undefined;
      this._kafkaConnect = undefined;
      this._prometheus = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._jolokia = value.jolokia;
      this._kafkaConnect = value.kafkaConnect;
      this._prometheus = value.prometheus;
    }
  }

  // jolokia - computed: false, optional: true, required: false
  private _jolokia?: boolean | cdktf.IResolvable; 
  public get jolokia() {
    return this.getBooleanAttribute('jolokia');
  }
  public set jolokia(value: boolean | cdktf.IResolvable) {
    this._jolokia = value;
  }
  public resetJolokia() {
    this._jolokia = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jolokiaInput() {
    return this._jolokia;
  }

  // kafka_connect - computed: false, optional: true, required: false
  private _kafkaConnect?: boolean | cdktf.IResolvable; 
  public get kafkaConnect() {
    return this.getBooleanAttribute('kafka_connect');
  }
  public set kafkaConnect(value: boolean | cdktf.IResolvable) {
    this._kafkaConnect = value;
  }
  public resetKafkaConnect() {
    this._kafkaConnect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaConnectInput() {
    return this._kafkaConnect;
  }

  // prometheus - computed: false, optional: true, required: false
  private _prometheus?: boolean | cdktf.IResolvable; 
  public get prometheus() {
    return this.getBooleanAttribute('prometheus');
  }
  public set prometheus(value: boolean | cdktf.IResolvable) {
    this._prometheus = value;
  }
  public resetPrometheus() {
    this._prometheus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prometheusInput() {
    return this._prometheus;
  }
}
export interface KafkaConnectKafkaConnectUserConfigPublicAccess {
  /**
  * Allow clients to connect to kafka_connect from the public internet for service nodes that are in a project VPC or another type of private network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_connect#kafka_connect KafkaConnect#kafka_connect}
  */
  readonly kafkaConnect?: boolean | cdktf.IResolvable;
  /**
  * Allow clients to connect to prometheus from the public internet for service nodes that are in a project VPC or another type of private network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_connect#prometheus KafkaConnect#prometheus}
  */
  readonly prometheus?: boolean | cdktf.IResolvable;
}

export function kafkaConnectKafkaConnectUserConfigPublicAccessToTerraform(struct?: KafkaConnectKafkaConnectUserConfigPublicAccessOutputReference | KafkaConnectKafkaConnectUserConfigPublicAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kafka_connect: cdktf.booleanToTerraform(struct!.kafkaConnect),
    prometheus: cdktf.booleanToTerraform(struct!.prometheus),
  }
}


export function kafkaConnectKafkaConnectUserConfigPublicAccessToHclTerraform(struct?: KafkaConnectKafkaConnectUserConfigPublicAccessOutputReference | KafkaConnectKafkaConnectUserConfigPublicAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kafka_connect: {
      value: cdktf.booleanToHclTerraform(struct!.kafkaConnect),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prometheus: {
      value: cdktf.booleanToHclTerraform(struct!.prometheus),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KafkaConnectKafkaConnectUserConfigPublicAccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KafkaConnectKafkaConnectUserConfigPublicAccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kafkaConnect !== undefined) {
      hasAnyValues = true;
      internalValueResult.kafkaConnect = this._kafkaConnect;
    }
    if (this._prometheus !== undefined) {
      hasAnyValues = true;
      internalValueResult.prometheus = this._prometheus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KafkaConnectKafkaConnectUserConfigPublicAccess | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kafkaConnect = undefined;
      this._prometheus = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kafkaConnect = value.kafkaConnect;
      this._prometheus = value.prometheus;
    }
  }

  // kafka_connect - computed: false, optional: true, required: false
  private _kafkaConnect?: boolean | cdktf.IResolvable; 
  public get kafkaConnect() {
    return this.getBooleanAttribute('kafka_connect');
  }
  public set kafkaConnect(value: boolean | cdktf.IResolvable) {
    this._kafkaConnect = value;
  }
  public resetKafkaConnect() {
    this._kafkaConnect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaConnectInput() {
    return this._kafkaConnect;
  }

  // prometheus - computed: false, optional: true, required: false
  private _prometheus?: boolean | cdktf.IResolvable; 
  public get prometheus() {
    return this.getBooleanAttribute('prometheus');
  }
  public set prometheus(value: boolean | cdktf.IResolvable) {
    this._prometheus = value;
  }
  public resetPrometheus() {
    this._prometheus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prometheusInput() {
    return this._prometheus;
  }
}
export interface KafkaConnectKafkaConnectUserConfigSecretProvidersAws {
  /**
  * Access key used to authenticate with aws.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_connect#access_key KafkaConnect#access_key}
  */
  readonly accessKey?: string;
  /**
  * Enum: `credentials`. Auth method of the vault secret provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_connect#auth_method KafkaConnect#auth_method}
  */
  readonly authMethod: string;
  /**
  * Region used to lookup secrets with AWS SecretManager.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_connect#region KafkaConnect#region}
  */
  readonly region: string;
  /**
  * Secret key used to authenticate with aws.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_connect#secret_key KafkaConnect#secret_key}
  */
  readonly secretKey?: string;
}

export function kafkaConnectKafkaConnectUserConfigSecretProvidersAwsToTerraform(struct?: KafkaConnectKafkaConnectUserConfigSecretProvidersAwsOutputReference | KafkaConnectKafkaConnectUserConfigSecretProvidersAws): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_key: cdktf.stringToTerraform(struct!.accessKey),
    auth_method: cdktf.stringToTerraform(struct!.authMethod),
    region: cdktf.stringToTerraform(struct!.region),
    secret_key: cdktf.stringToTerraform(struct!.secretKey),
  }
}


export function kafkaConnectKafkaConnectUserConfigSecretProvidersAwsToHclTerraform(struct?: KafkaConnectKafkaConnectUserConfigSecretProvidersAwsOutputReference | KafkaConnectKafkaConnectUserConfigSecretProvidersAws): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_key: {
      value: cdktf.stringToHclTerraform(struct!.accessKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_method: {
      value: cdktf.stringToHclTerraform(struct!.authMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_key: {
      value: cdktf.stringToHclTerraform(struct!.secretKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KafkaConnectKafkaConnectUserConfigSecretProvidersAwsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KafkaConnectKafkaConnectUserConfigSecretProvidersAws | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKey = this._accessKey;
    }
    if (this._authMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.authMethod = this._authMethod;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._secretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKey = this._secretKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KafkaConnectKafkaConnectUserConfigSecretProvidersAws | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessKey = undefined;
      this._authMethod = undefined;
      this._region = undefined;
      this._secretKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessKey = value.accessKey;
      this._authMethod = value.authMethod;
      this._region = value.region;
      this._secretKey = value.secretKey;
    }
  }

  // access_key - computed: false, optional: true, required: false
  private _accessKey?: string; 
  public get accessKey() {
    return this.getStringAttribute('access_key');
  }
  public set accessKey(value: string) {
    this._accessKey = value;
  }
  public resetAccessKey() {
    this._accessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyInput() {
    return this._accessKey;
  }

  // auth_method - computed: false, optional: false, required: true
  private _authMethod?: string; 
  public get authMethod() {
    return this.getStringAttribute('auth_method');
  }
  public set authMethod(value: string) {
    this._authMethod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authMethodInput() {
    return this._authMethod;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // secret_key - computed: false, optional: true, required: false
  private _secretKey?: string; 
  public get secretKey() {
    return this.getStringAttribute('secret_key');
  }
  public set secretKey(value: string) {
    this._secretKey = value;
  }
  public resetSecretKey() {
    this._secretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyInput() {
    return this._secretKey;
  }
}
export interface KafkaConnectKafkaConnectUserConfigSecretProvidersVault {
  /**
  * Address of the Vault server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_connect#address KafkaConnect#address}
  */
  readonly address: string;
  /**
  * Enum: `token`. Auth method of the vault secret provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_connect#auth_method KafkaConnect#auth_method}
  */
  readonly authMethod: string;
  /**
  * Enum: `1`, `2`, and newer. KV Secrets Engine version of the Vault server instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_connect#engine_version KafkaConnect#engine_version}
  */
  readonly engineVersion?: number;
  /**
  * Prefix path depth of the secrets Engine. Default is 1. If the secrets engine path has more than one segment it has to be increased to the number of segments.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_connect#prefix_path_depth KafkaConnect#prefix_path_depth}
  */
  readonly prefixPathDepth?: number;
  /**
  * Token used to authenticate with vault and auth method `token`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_connect#token KafkaConnect#token}
  */
  readonly token?: string;
}

export function kafkaConnectKafkaConnectUserConfigSecretProvidersVaultToTerraform(struct?: KafkaConnectKafkaConnectUserConfigSecretProvidersVaultOutputReference | KafkaConnectKafkaConnectUserConfigSecretProvidersVault): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    auth_method: cdktf.stringToTerraform(struct!.authMethod),
    engine_version: cdktf.numberToTerraform(struct!.engineVersion),
    prefix_path_depth: cdktf.numberToTerraform(struct!.prefixPathDepth),
    token: cdktf.stringToTerraform(struct!.token),
  }
}


export function kafkaConnectKafkaConnectUserConfigSecretProvidersVaultToHclTerraform(struct?: KafkaConnectKafkaConnectUserConfigSecretProvidersVaultOutputReference | KafkaConnectKafkaConnectUserConfigSecretProvidersVault): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_method: {
      value: cdktf.stringToHclTerraform(struct!.authMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    engine_version: {
      value: cdktf.numberToHclTerraform(struct!.engineVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prefix_path_depth: {
      value: cdktf.numberToHclTerraform(struct!.prefixPathDepth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    token: {
      value: cdktf.stringToHclTerraform(struct!.token),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KafkaConnectKafkaConnectUserConfigSecretProvidersVaultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KafkaConnectKafkaConnectUserConfigSecretProvidersVault | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._authMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.authMethod = this._authMethod;
    }
    if (this._engineVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.engineVersion = this._engineVersion;
    }
    if (this._prefixPathDepth !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixPathDepth = this._prefixPathDepth;
    }
    if (this._token !== undefined) {
      hasAnyValues = true;
      internalValueResult.token = this._token;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KafkaConnectKafkaConnectUserConfigSecretProvidersVault | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._address = undefined;
      this._authMethod = undefined;
      this._engineVersion = undefined;
      this._prefixPathDepth = undefined;
      this._token = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._address = value.address;
      this._authMethod = value.authMethod;
      this._engineVersion = value.engineVersion;
      this._prefixPathDepth = value.prefixPathDepth;
      this._token = value.token;
    }
  }

  // address - computed: false, optional: false, required: true
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // auth_method - computed: false, optional: false, required: true
  private _authMethod?: string; 
  public get authMethod() {
    return this.getStringAttribute('auth_method');
  }
  public set authMethod(value: string) {
    this._authMethod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authMethodInput() {
    return this._authMethod;
  }

  // engine_version - computed: false, optional: true, required: false
  private _engineVersion?: number; 
  public get engineVersion() {
    return this.getNumberAttribute('engine_version');
  }
  public set engineVersion(value: number) {
    this._engineVersion = value;
  }
  public resetEngineVersion() {
    this._engineVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineVersionInput() {
    return this._engineVersion;
  }

  // prefix_path_depth - computed: false, optional: true, required: false
  private _prefixPathDepth?: number; 
  public get prefixPathDepth() {
    return this.getNumberAttribute('prefix_path_depth');
  }
  public set prefixPathDepth(value: number) {
    this._prefixPathDepth = value;
  }
  public resetPrefixPathDepth() {
    this._prefixPathDepth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixPathDepthInput() {
    return this._prefixPathDepth;
  }

  // token - computed: false, optional: true, required: false
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }
}
export interface KafkaConnectKafkaConnectUserConfigSecretProviders {
  /**
  * Name of the secret provider. Used to reference secrets in connector config.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_connect#name KafkaConnect#name}
  */
  readonly name: string;
  /**
  * aws block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_connect#aws KafkaConnect#aws}
  */
  readonly aws?: KafkaConnectKafkaConnectUserConfigSecretProvidersAws;
  /**
  * vault block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_connect#vault KafkaConnect#vault}
  */
  readonly vault?: KafkaConnectKafkaConnectUserConfigSecretProvidersVault;
}

export function kafkaConnectKafkaConnectUserConfigSecretProvidersToTerraform(struct?: KafkaConnectKafkaConnectUserConfigSecretProviders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    aws: kafkaConnectKafkaConnectUserConfigSecretProvidersAwsToTerraform(struct!.aws),
    vault: kafkaConnectKafkaConnectUserConfigSecretProvidersVaultToTerraform(struct!.vault),
  }
}


export function kafkaConnectKafkaConnectUserConfigSecretProvidersToHclTerraform(struct?: KafkaConnectKafkaConnectUserConfigSecretProviders | cdktf.IResolvable): any {
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
    aws: {
      value: kafkaConnectKafkaConnectUserConfigSecretProvidersAwsToHclTerraform(struct!.aws),
      isBlock: true,
      type: "list",
      storageClassType: "KafkaConnectKafkaConnectUserConfigSecretProvidersAwsList",
    },
    vault: {
      value: kafkaConnectKafkaConnectUserConfigSecretProvidersVaultToHclTerraform(struct!.vault),
      isBlock: true,
      type: "list",
      storageClassType: "KafkaConnectKafkaConnectUserConfigSecretProvidersVaultList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KafkaConnectKafkaConnectUserConfigSecretProvidersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KafkaConnectKafkaConnectUserConfigSecretProviders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._aws?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aws = this._aws?.internalValue;
    }
    if (this._vault?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vault = this._vault?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KafkaConnectKafkaConnectUserConfigSecretProviders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._aws.internalValue = undefined;
      this._vault.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._aws.internalValue = value.aws;
      this._vault.internalValue = value.vault;
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

  // aws - computed: false, optional: true, required: false
  private _aws = new KafkaConnectKafkaConnectUserConfigSecretProvidersAwsOutputReference(this, "aws");
  public get aws() {
    return this._aws;
  }
  public putAws(value: KafkaConnectKafkaConnectUserConfigSecretProvidersAws) {
    this._aws.internalValue = value;
  }
  public resetAws() {
    this._aws.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsInput() {
    return this._aws.internalValue;
  }

  // vault - computed: false, optional: true, required: false
  private _vault = new KafkaConnectKafkaConnectUserConfigSecretProvidersVaultOutputReference(this, "vault");
  public get vault() {
    return this._vault;
  }
  public putVault(value: KafkaConnectKafkaConnectUserConfigSecretProvidersVault) {
    this._vault.internalValue = value;
  }
  public resetVault() {
    this._vault.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultInput() {
    return this._vault.internalValue;
  }
}

export class KafkaConnectKafkaConnectUserConfigSecretProvidersList extends cdktf.ComplexList {
  public internalValue? : KafkaConnectKafkaConnectUserConfigSecretProviders[] | cdktf.IResolvable

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
  public get(index: number): KafkaConnectKafkaConnectUserConfigSecretProvidersOutputReference {
    return new KafkaConnectKafkaConnectUserConfigSecretProvidersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KafkaConnectKafkaConnectUserConfig {
  /**
  * Additional Cloud Regions for Backup Replication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_connect#additional_backup_regions KafkaConnect#additional_backup_regions}
  */
  readonly additionalBackupRegions?: string[];
  /**
  * Allow incoming connections from CIDR address block, e.g. `10.20.0.0/16`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_connect#ip_filter KafkaConnect#ip_filter}
  */
  readonly ipFilter?: string[];
  /**
  * Allow incoming connections from CIDR address block, e.g. `10.20.0.0/16`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_connect#ip_filter_string KafkaConnect#ip_filter_string}
  */
  readonly ipFilterString?: string[];
  /**
  * Store logs for the service so that they are available in the HTTP API and console.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_connect#service_log KafkaConnect#service_log}
  */
  readonly serviceLog?: boolean | cdktf.IResolvable;
  /**
  * Use static public IP addresses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_connect#static_ips KafkaConnect#static_ips}
  */
  readonly staticIps?: boolean | cdktf.IResolvable;
  /**
  * ip_filter_object block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_connect#ip_filter_object KafkaConnect#ip_filter_object}
  */
  readonly ipFilterObject?: KafkaConnectKafkaConnectUserConfigIpFilterObject[] | cdktf.IResolvable;
  /**
  * kafka_connect block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_connect#kafka_connect KafkaConnect#kafka_connect}
  */
  readonly kafkaConnect?: KafkaConnectKafkaConnectUserConfigKafkaConnect;
  /**
  * plugin_versions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_connect#plugin_versions KafkaConnect#plugin_versions}
  */
  readonly pluginVersions?: KafkaConnectKafkaConnectUserConfigPluginVersions[] | cdktf.IResolvable;
  /**
  * private_access block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_connect#private_access KafkaConnect#private_access}
  */
  readonly privateAccess?: KafkaConnectKafkaConnectUserConfigPrivateAccess;
  /**
  * privatelink_access block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_connect#privatelink_access KafkaConnect#privatelink_access}
  */
  readonly privatelinkAccess?: KafkaConnectKafkaConnectUserConfigPrivatelinkAccess;
  /**
  * public_access block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_connect#public_access KafkaConnect#public_access}
  */
  readonly publicAccess?: KafkaConnectKafkaConnectUserConfigPublicAccess;
  /**
  * secret_providers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_connect#secret_providers KafkaConnect#secret_providers}
  */
  readonly secretProviders?: KafkaConnectKafkaConnectUserConfigSecretProviders[] | cdktf.IResolvable;
}

export function kafkaConnectKafkaConnectUserConfigToTerraform(struct?: KafkaConnectKafkaConnectUserConfigOutputReference | KafkaConnectKafkaConnectUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_backup_regions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.additionalBackupRegions),
    ip_filter: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipFilter),
    ip_filter_string: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipFilterString),
    service_log: cdktf.booleanToTerraform(struct!.serviceLog),
    static_ips: cdktf.booleanToTerraform(struct!.staticIps),
    ip_filter_object: cdktf.listMapper(kafkaConnectKafkaConnectUserConfigIpFilterObjectToTerraform, true)(struct!.ipFilterObject),
    kafka_connect: kafkaConnectKafkaConnectUserConfigKafkaConnectToTerraform(struct!.kafkaConnect),
    plugin_versions: cdktf.listMapper(kafkaConnectKafkaConnectUserConfigPluginVersionsToTerraform, true)(struct!.pluginVersions),
    private_access: kafkaConnectKafkaConnectUserConfigPrivateAccessToTerraform(struct!.privateAccess),
    privatelink_access: kafkaConnectKafkaConnectUserConfigPrivatelinkAccessToTerraform(struct!.privatelinkAccess),
    public_access: kafkaConnectKafkaConnectUserConfigPublicAccessToTerraform(struct!.publicAccess),
    secret_providers: cdktf.listMapper(kafkaConnectKafkaConnectUserConfigSecretProvidersToTerraform, true)(struct!.secretProviders),
  }
}


export function kafkaConnectKafkaConnectUserConfigToHclTerraform(struct?: KafkaConnectKafkaConnectUserConfigOutputReference | KafkaConnectKafkaConnectUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_backup_regions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.additionalBackupRegions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ip_filter: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipFilter),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    ip_filter_string: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipFilterString),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    service_log: {
      value: cdktf.booleanToHclTerraform(struct!.serviceLog),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    static_ips: {
      value: cdktf.booleanToHclTerraform(struct!.staticIps),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ip_filter_object: {
      value: cdktf.listMapperHcl(kafkaConnectKafkaConnectUserConfigIpFilterObjectToHclTerraform, true)(struct!.ipFilterObject),
      isBlock: true,
      type: "set",
      storageClassType: "KafkaConnectKafkaConnectUserConfigIpFilterObjectList",
    },
    kafka_connect: {
      value: kafkaConnectKafkaConnectUserConfigKafkaConnectToHclTerraform(struct!.kafkaConnect),
      isBlock: true,
      type: "list",
      storageClassType: "KafkaConnectKafkaConnectUserConfigKafkaConnectList",
    },
    plugin_versions: {
      value: cdktf.listMapperHcl(kafkaConnectKafkaConnectUserConfigPluginVersionsToHclTerraform, true)(struct!.pluginVersions),
      isBlock: true,
      type: "list",
      storageClassType: "KafkaConnectKafkaConnectUserConfigPluginVersionsList",
    },
    private_access: {
      value: kafkaConnectKafkaConnectUserConfigPrivateAccessToHclTerraform(struct!.privateAccess),
      isBlock: true,
      type: "list",
      storageClassType: "KafkaConnectKafkaConnectUserConfigPrivateAccessList",
    },
    privatelink_access: {
      value: kafkaConnectKafkaConnectUserConfigPrivatelinkAccessToHclTerraform(struct!.privatelinkAccess),
      isBlock: true,
      type: "list",
      storageClassType: "KafkaConnectKafkaConnectUserConfigPrivatelinkAccessList",
    },
    public_access: {
      value: kafkaConnectKafkaConnectUserConfigPublicAccessToHclTerraform(struct!.publicAccess),
      isBlock: true,
      type: "list",
      storageClassType: "KafkaConnectKafkaConnectUserConfigPublicAccessList",
    },
    secret_providers: {
      value: cdktf.listMapperHcl(kafkaConnectKafkaConnectUserConfigSecretProvidersToHclTerraform, true)(struct!.secretProviders),
      isBlock: true,
      type: "list",
      storageClassType: "KafkaConnectKafkaConnectUserConfigSecretProvidersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KafkaConnectKafkaConnectUserConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KafkaConnectKafkaConnectUserConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalBackupRegions !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalBackupRegions = this._additionalBackupRegions;
    }
    if (this._ipFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipFilter = this._ipFilter;
    }
    if (this._ipFilterString !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipFilterString = this._ipFilterString;
    }
    if (this._serviceLog !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceLog = this._serviceLog;
    }
    if (this._staticIps !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticIps = this._staticIps;
    }
    if (this._ipFilterObject?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipFilterObject = this._ipFilterObject?.internalValue;
    }
    if (this._kafkaConnect?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kafkaConnect = this._kafkaConnect?.internalValue;
    }
    if (this._pluginVersions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pluginVersions = this._pluginVersions?.internalValue;
    }
    if (this._privateAccess?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateAccess = this._privateAccess?.internalValue;
    }
    if (this._privatelinkAccess?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.privatelinkAccess = this._privatelinkAccess?.internalValue;
    }
    if (this._publicAccess?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicAccess = this._publicAccess?.internalValue;
    }
    if (this._secretProviders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretProviders = this._secretProviders?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KafkaConnectKafkaConnectUserConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalBackupRegions = undefined;
      this._ipFilter = undefined;
      this._ipFilterString = undefined;
      this._serviceLog = undefined;
      this._staticIps = undefined;
      this._ipFilterObject.internalValue = undefined;
      this._kafkaConnect.internalValue = undefined;
      this._pluginVersions.internalValue = undefined;
      this._privateAccess.internalValue = undefined;
      this._privatelinkAccess.internalValue = undefined;
      this._publicAccess.internalValue = undefined;
      this._secretProviders.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalBackupRegions = value.additionalBackupRegions;
      this._ipFilter = value.ipFilter;
      this._ipFilterString = value.ipFilterString;
      this._serviceLog = value.serviceLog;
      this._staticIps = value.staticIps;
      this._ipFilterObject.internalValue = value.ipFilterObject;
      this._kafkaConnect.internalValue = value.kafkaConnect;
      this._pluginVersions.internalValue = value.pluginVersions;
      this._privateAccess.internalValue = value.privateAccess;
      this._privatelinkAccess.internalValue = value.privatelinkAccess;
      this._publicAccess.internalValue = value.publicAccess;
      this._secretProviders.internalValue = value.secretProviders;
    }
  }

  // additional_backup_regions - computed: false, optional: true, required: false
  private _additionalBackupRegions?: string[]; 
  public get additionalBackupRegions() {
    return this.getListAttribute('additional_backup_regions');
  }
  public set additionalBackupRegions(value: string[]) {
    this._additionalBackupRegions = value;
  }
  public resetAdditionalBackupRegions() {
    this._additionalBackupRegions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalBackupRegionsInput() {
    return this._additionalBackupRegions;
  }

  // ip_filter - computed: false, optional: true, required: false
  private _ipFilter?: string[]; 
  public get ipFilter() {
    return cdktf.Fn.tolist(this.getListAttribute('ip_filter'));
  }
  public set ipFilter(value: string[]) {
    this._ipFilter = value;
  }
  public resetIpFilter() {
    this._ipFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipFilterInput() {
    return this._ipFilter;
  }

  // ip_filter_string - computed: false, optional: true, required: false
  private _ipFilterString?: string[]; 
  public get ipFilterString() {
    return cdktf.Fn.tolist(this.getListAttribute('ip_filter_string'));
  }
  public set ipFilterString(value: string[]) {
    this._ipFilterString = value;
  }
  public resetIpFilterString() {
    this._ipFilterString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipFilterStringInput() {
    return this._ipFilterString;
  }

  // service_log - computed: false, optional: true, required: false
  private _serviceLog?: boolean | cdktf.IResolvable; 
  public get serviceLog() {
    return this.getBooleanAttribute('service_log');
  }
  public set serviceLog(value: boolean | cdktf.IResolvable) {
    this._serviceLog = value;
  }
  public resetServiceLog() {
    this._serviceLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceLogInput() {
    return this._serviceLog;
  }

  // static_ips - computed: false, optional: true, required: false
  private _staticIps?: boolean | cdktf.IResolvable; 
  public get staticIps() {
    return this.getBooleanAttribute('static_ips');
  }
  public set staticIps(value: boolean | cdktf.IResolvable) {
    this._staticIps = value;
  }
  public resetStaticIps() {
    this._staticIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticIpsInput() {
    return this._staticIps;
  }

  // ip_filter_object - computed: false, optional: true, required: false
  private _ipFilterObject = new KafkaConnectKafkaConnectUserConfigIpFilterObjectList(this, "ip_filter_object", true);
  public get ipFilterObject() {
    return this._ipFilterObject;
  }
  public putIpFilterObject(value: KafkaConnectKafkaConnectUserConfigIpFilterObject[] | cdktf.IResolvable) {
    this._ipFilterObject.internalValue = value;
  }
  public resetIpFilterObject() {
    this._ipFilterObject.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipFilterObjectInput() {
    return this._ipFilterObject.internalValue;
  }

  // kafka_connect - computed: false, optional: true, required: false
  private _kafkaConnect = new KafkaConnectKafkaConnectUserConfigKafkaConnectOutputReference(this, "kafka_connect");
  public get kafkaConnect() {
    return this._kafkaConnect;
  }
  public putKafkaConnect(value: KafkaConnectKafkaConnectUserConfigKafkaConnect) {
    this._kafkaConnect.internalValue = value;
  }
  public resetKafkaConnect() {
    this._kafkaConnect.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaConnectInput() {
    return this._kafkaConnect.internalValue;
  }

  // plugin_versions - computed: false, optional: true, required: false
  private _pluginVersions = new KafkaConnectKafkaConnectUserConfigPluginVersionsList(this, "plugin_versions", false);
  public get pluginVersions() {
    return this._pluginVersions;
  }
  public putPluginVersions(value: KafkaConnectKafkaConnectUserConfigPluginVersions[] | cdktf.IResolvable) {
    this._pluginVersions.internalValue = value;
  }
  public resetPluginVersions() {
    this._pluginVersions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginVersionsInput() {
    return this._pluginVersions.internalValue;
  }

  // private_access - computed: false, optional: true, required: false
  private _privateAccess = new KafkaConnectKafkaConnectUserConfigPrivateAccessOutputReference(this, "private_access");
  public get privateAccess() {
    return this._privateAccess;
  }
  public putPrivateAccess(value: KafkaConnectKafkaConnectUserConfigPrivateAccess) {
    this._privateAccess.internalValue = value;
  }
  public resetPrivateAccess() {
    this._privateAccess.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateAccessInput() {
    return this._privateAccess.internalValue;
  }

  // privatelink_access - computed: false, optional: true, required: false
  private _privatelinkAccess = new KafkaConnectKafkaConnectUserConfigPrivatelinkAccessOutputReference(this, "privatelink_access");
  public get privatelinkAccess() {
    return this._privatelinkAccess;
  }
  public putPrivatelinkAccess(value: KafkaConnectKafkaConnectUserConfigPrivatelinkAccess) {
    this._privatelinkAccess.internalValue = value;
  }
  public resetPrivatelinkAccess() {
    this._privatelinkAccess.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privatelinkAccessInput() {
    return this._privatelinkAccess.internalValue;
  }

  // public_access - computed: false, optional: true, required: false
  private _publicAccess = new KafkaConnectKafkaConnectUserConfigPublicAccessOutputReference(this, "public_access");
  public get publicAccess() {
    return this._publicAccess;
  }
  public putPublicAccess(value: KafkaConnectKafkaConnectUserConfigPublicAccess) {
    this._publicAccess.internalValue = value;
  }
  public resetPublicAccess() {
    this._publicAccess.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicAccessInput() {
    return this._publicAccess.internalValue;
  }

  // secret_providers - computed: false, optional: true, required: false
  private _secretProviders = new KafkaConnectKafkaConnectUserConfigSecretProvidersList(this, "secret_providers", false);
  public get secretProviders() {
    return this._secretProviders;
  }
  public putSecretProviders(value: KafkaConnectKafkaConnectUserConfigSecretProviders[] | cdktf.IResolvable) {
    this._secretProviders.internalValue = value;
  }
  public resetSecretProviders() {
    this._secretProviders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretProvidersInput() {
    return this._secretProviders.internalValue;
  }
}
export interface KafkaConnectServiceIntegrations {
  /**
  * Type of the service integration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_connect#integration_type KafkaConnect#integration_type}
  */
  readonly integrationType: string;
  /**
  * Name of the source service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_connect#source_service_name KafkaConnect#source_service_name}
  */
  readonly sourceServiceName: string;
}

export function kafkaConnectServiceIntegrationsToTerraform(struct?: KafkaConnectServiceIntegrations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    integration_type: cdktf.stringToTerraform(struct!.integrationType),
    source_service_name: cdktf.stringToTerraform(struct!.sourceServiceName),
  }
}


export function kafkaConnectServiceIntegrationsToHclTerraform(struct?: KafkaConnectServiceIntegrations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    integration_type: {
      value: cdktf.stringToHclTerraform(struct!.integrationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_service_name: {
      value: cdktf.stringToHclTerraform(struct!.sourceServiceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KafkaConnectServiceIntegrationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KafkaConnectServiceIntegrations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._integrationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.integrationType = this._integrationType;
    }
    if (this._sourceServiceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceServiceName = this._sourceServiceName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KafkaConnectServiceIntegrations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._integrationType = undefined;
      this._sourceServiceName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._integrationType = value.integrationType;
      this._sourceServiceName = value.sourceServiceName;
    }
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
}

export class KafkaConnectServiceIntegrationsList extends cdktf.ComplexList {
  public internalValue? : KafkaConnectServiceIntegrations[] | cdktf.IResolvable

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
  public get(index: number): KafkaConnectServiceIntegrationsOutputReference {
    return new KafkaConnectServiceIntegrationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KafkaConnectTag {
  /**
  * Service tag key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_connect#key KafkaConnect#key}
  */
  readonly key: string;
  /**
  * Service tag value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_connect#value KafkaConnect#value}
  */
  readonly value: string;
}

export function kafkaConnectTagToTerraform(struct?: KafkaConnectTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function kafkaConnectTagToHclTerraform(struct?: KafkaConnectTag | cdktf.IResolvable): any {
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

export class KafkaConnectTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KafkaConnectTag | cdktf.IResolvable | undefined {
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

  public set internalValue(value: KafkaConnectTag | cdktf.IResolvable | undefined) {
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

  // key - computed: false, optional: false, required: true
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

export class KafkaConnectTagList extends cdktf.ComplexList {
  public internalValue? : KafkaConnectTag[] | cdktf.IResolvable

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
  public get(index: number): KafkaConnectTagOutputReference {
    return new KafkaConnectTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KafkaConnectTechEmails {
  /**
  * An email address to contact for technical issues
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_connect#email KafkaConnect#email}
  */
  readonly email: string;
}

export function kafkaConnectTechEmailsToTerraform(struct?: KafkaConnectTechEmails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email: cdktf.stringToTerraform(struct!.email),
  }
}


export function kafkaConnectTechEmailsToHclTerraform(struct?: KafkaConnectTechEmails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    email: {
      value: cdktf.stringToHclTerraform(struct!.email),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KafkaConnectTechEmailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KafkaConnectTechEmails | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KafkaConnectTechEmails | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._email = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._email = value.email;
    }
  }

  // email - computed: false, optional: false, required: true
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }
}

export class KafkaConnectTechEmailsList extends cdktf.ComplexList {
  public internalValue? : KafkaConnectTechEmails[] | cdktf.IResolvable

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
  public get(index: number): KafkaConnectTechEmailsOutputReference {
    return new KafkaConnectTechEmailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KafkaConnectTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_connect#create KafkaConnect#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_connect#default KafkaConnect#default}
  */
  readonly default?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_connect#delete KafkaConnect#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_connect#read KafkaConnect#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_connect#update KafkaConnect#update}
  */
  readonly update?: string;
}

export function kafkaConnectTimeoutsToTerraform(struct?: KafkaConnectTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    default: cdktf.stringToTerraform(struct!.default),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function kafkaConnectTimeoutsToHclTerraform(struct?: KafkaConnectTimeouts | cdktf.IResolvable): any {
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
    default: {
      value: cdktf.stringToHclTerraform(struct!.default),
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
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
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

export class KafkaConnectTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KafkaConnectTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KafkaConnectTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._default = undefined;
      this._delete = undefined;
      this._read = undefined;
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
      this._default = value.default;
      this._delete = value.delete;
      this._read = value.read;
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

  // default - computed: false, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
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

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
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
* Represents a {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_connect aiven_kafka_connect}
*/
export class KafkaConnect extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aiven_kafka_connect";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KafkaConnect resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KafkaConnect to import
  * @param importFromId The id of the existing KafkaConnect that should be imported. Refer to the {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_connect#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KafkaConnect to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aiven_kafka_connect", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/kafka_connect aiven_kafka_connect} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KafkaConnectConfig
  */
  public constructor(scope: Construct, id: string, config: KafkaConnectConfig) {
    super(scope, id, {
      terraformResourceType: 'aiven_kafka_connect',
      terraformGeneratorMetadata: {
        providerName: 'aiven',
        providerVersion: '4.46.1',
        providerVersionConstraint: '4.46.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._additionalDiskSpace = config.additionalDiskSpace;
    this._cloudName = config.cloudName;
    this._diskSpace = config.diskSpace;
    this._id = config.id;
    this._maintenanceWindowDow = config.maintenanceWindowDow;
    this._maintenanceWindowTime = config.maintenanceWindowTime;
    this._plan = config.plan;
    this._project = config.project;
    this._projectVpcId = config.projectVpcId;
    this._serviceName = config.serviceName;
    this._staticIps = config.staticIps;
    this._terminationProtection = config.terminationProtection;
    this._kafkaConnectUserConfig.internalValue = config.kafkaConnectUserConfig;
    this._serviceIntegrations.internalValue = config.serviceIntegrations;
    this._tag.internalValue = config.tag;
    this._techEmails.internalValue = config.techEmails;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_disk_space - computed: true, optional: true, required: false
  private _additionalDiskSpace?: string; 
  public get additionalDiskSpace() {
    return this.getStringAttribute('additional_disk_space');
  }
  public set additionalDiskSpace(value: string) {
    this._additionalDiskSpace = value;
  }
  public resetAdditionalDiskSpace() {
    this._additionalDiskSpace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalDiskSpaceInput() {
    return this._additionalDiskSpace;
  }

  // cloud_name - computed: false, optional: true, required: false
  private _cloudName?: string; 
  public get cloudName() {
    return this.getStringAttribute('cloud_name');
  }
  public set cloudName(value: string) {
    this._cloudName = value;
  }
  public resetCloudName() {
    this._cloudName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudNameInput() {
    return this._cloudName;
  }

  // components - computed: true, optional: false, required: false
  private _components = new KafkaConnectComponentsList(this, "components", false);
  public get components() {
    return this._components;
  }

  // disk_space - computed: false, optional: true, required: false
  private _diskSpace?: string; 
  public get diskSpace() {
    return this.getStringAttribute('disk_space');
  }
  public set diskSpace(value: string) {
    this._diskSpace = value;
  }
  public resetDiskSpace() {
    this._diskSpace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSpaceInput() {
    return this._diskSpace;
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

  // maintenance_window_dow - computed: false, optional: true, required: false
  private _maintenanceWindowDow?: string; 
  public get maintenanceWindowDow() {
    return this.getStringAttribute('maintenance_window_dow');
  }
  public set maintenanceWindowDow(value: string) {
    this._maintenanceWindowDow = value;
  }
  public resetMaintenanceWindowDow() {
    this._maintenanceWindowDow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceWindowDowInput() {
    return this._maintenanceWindowDow;
  }

  // maintenance_window_enabled - computed: true, optional: false, required: false
  public get maintenanceWindowEnabled() {
    return this.getBooleanAttribute('maintenance_window_enabled');
  }

  // maintenance_window_time - computed: false, optional: true, required: false
  private _maintenanceWindowTime?: string; 
  public get maintenanceWindowTime() {
    return this.getStringAttribute('maintenance_window_time');
  }
  public set maintenanceWindowTime(value: string) {
    this._maintenanceWindowTime = value;
  }
  public resetMaintenanceWindowTime() {
    this._maintenanceWindowTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceWindowTimeInput() {
    return this._maintenanceWindowTime;
  }

  // plan - computed: false, optional: false, required: true
  private _plan?: string; 
  public get plan() {
    return this.getStringAttribute('plan');
  }
  public set plan(value: string) {
    this._plan = value;
  }
  // Temporarily expose input value. Use with caution.
  public get planInput() {
    return this._plan;
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

  // project_vpc_id - computed: false, optional: true, required: false
  private _projectVpcId?: string; 
  public get projectVpcId() {
    return this.getStringAttribute('project_vpc_id');
  }
  public set projectVpcId(value: string) {
    this._projectVpcId = value;
  }
  public resetProjectVpcId() {
    this._projectVpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectVpcIdInput() {
    return this._projectVpcId;
  }

  // service_host - computed: true, optional: false, required: false
  public get serviceHost() {
    return this.getStringAttribute('service_host');
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

  // static_ips - computed: false, optional: true, required: false
  private _staticIps?: string[]; 
  public get staticIps() {
    return cdktf.Fn.tolist(this.getListAttribute('static_ips'));
  }
  public set staticIps(value: string[]) {
    this._staticIps = value;
  }
  public resetStaticIps() {
    this._staticIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticIpsInput() {
    return this._staticIps;
  }

  // termination_protection - computed: false, optional: true, required: false
  private _terminationProtection?: boolean | cdktf.IResolvable; 
  public get terminationProtection() {
    return this.getBooleanAttribute('termination_protection');
  }
  public set terminationProtection(value: boolean | cdktf.IResolvable) {
    this._terminationProtection = value;
  }
  public resetTerminationProtection() {
    this._terminationProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminationProtectionInput() {
    return this._terminationProtection;
  }

  // kafka_connect_user_config - computed: false, optional: true, required: false
  private _kafkaConnectUserConfig = new KafkaConnectKafkaConnectUserConfigOutputReference(this, "kafka_connect_user_config");
  public get kafkaConnectUserConfig() {
    return this._kafkaConnectUserConfig;
  }
  public putKafkaConnectUserConfig(value: KafkaConnectKafkaConnectUserConfig) {
    this._kafkaConnectUserConfig.internalValue = value;
  }
  public resetKafkaConnectUserConfig() {
    this._kafkaConnectUserConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaConnectUserConfigInput() {
    return this._kafkaConnectUserConfig.internalValue;
  }

  // service_integrations - computed: false, optional: true, required: false
  private _serviceIntegrations = new KafkaConnectServiceIntegrationsList(this, "service_integrations", true);
  public get serviceIntegrations() {
    return this._serviceIntegrations;
  }
  public putServiceIntegrations(value: KafkaConnectServiceIntegrations[] | cdktf.IResolvable) {
    this._serviceIntegrations.internalValue = value;
  }
  public resetServiceIntegrations() {
    this._serviceIntegrations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceIntegrationsInput() {
    return this._serviceIntegrations.internalValue;
  }

  // tag - computed: false, optional: true, required: false
  private _tag = new KafkaConnectTagList(this, "tag", true);
  public get tag() {
    return this._tag;
  }
  public putTag(value: KafkaConnectTag[] | cdktf.IResolvable) {
    this._tag.internalValue = value;
  }
  public resetTag() {
    this._tag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag.internalValue;
  }

  // tech_emails - computed: false, optional: true, required: false
  private _techEmails = new KafkaConnectTechEmailsList(this, "tech_emails", true);
  public get techEmails() {
    return this._techEmails;
  }
  public putTechEmails(value: KafkaConnectTechEmails[] | cdktf.IResolvable) {
    this._techEmails.internalValue = value;
  }
  public resetTechEmails() {
    this._techEmails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get techEmailsInput() {
    return this._techEmails.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new KafkaConnectTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: KafkaConnectTimeouts) {
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
      additional_disk_space: cdktf.stringToTerraform(this._additionalDiskSpace),
      cloud_name: cdktf.stringToTerraform(this._cloudName),
      disk_space: cdktf.stringToTerraform(this._diskSpace),
      id: cdktf.stringToTerraform(this._id),
      maintenance_window_dow: cdktf.stringToTerraform(this._maintenanceWindowDow),
      maintenance_window_time: cdktf.stringToTerraform(this._maintenanceWindowTime),
      plan: cdktf.stringToTerraform(this._plan),
      project: cdktf.stringToTerraform(this._project),
      project_vpc_id: cdktf.stringToTerraform(this._projectVpcId),
      service_name: cdktf.stringToTerraform(this._serviceName),
      static_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(this._staticIps),
      termination_protection: cdktf.booleanToTerraform(this._terminationProtection),
      kafka_connect_user_config: kafkaConnectKafkaConnectUserConfigToTerraform(this._kafkaConnectUserConfig.internalValue),
      service_integrations: cdktf.listMapper(kafkaConnectServiceIntegrationsToTerraform, true)(this._serviceIntegrations.internalValue),
      tag: cdktf.listMapper(kafkaConnectTagToTerraform, true)(this._tag.internalValue),
      tech_emails: cdktf.listMapper(kafkaConnectTechEmailsToTerraform, true)(this._techEmails.internalValue),
      timeouts: kafkaConnectTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      additional_disk_space: {
        value: cdktf.stringToHclTerraform(this._additionalDiskSpace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud_name: {
        value: cdktf.stringToHclTerraform(this._cloudName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disk_space: {
        value: cdktf.stringToHclTerraform(this._diskSpace),
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
      maintenance_window_dow: {
        value: cdktf.stringToHclTerraform(this._maintenanceWindowDow),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maintenance_window_time: {
        value: cdktf.stringToHclTerraform(this._maintenanceWindowTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      plan: {
        value: cdktf.stringToHclTerraform(this._plan),
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
      project_vpc_id: {
        value: cdktf.stringToHclTerraform(this._projectVpcId),
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
      static_ips: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._staticIps),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      termination_protection: {
        value: cdktf.booleanToHclTerraform(this._terminationProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      kafka_connect_user_config: {
        value: kafkaConnectKafkaConnectUserConfigToHclTerraform(this._kafkaConnectUserConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KafkaConnectKafkaConnectUserConfigList",
      },
      service_integrations: {
        value: cdktf.listMapperHcl(kafkaConnectServiceIntegrationsToHclTerraform, true)(this._serviceIntegrations.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "KafkaConnectServiceIntegrationsList",
      },
      tag: {
        value: cdktf.listMapperHcl(kafkaConnectTagToHclTerraform, true)(this._tag.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "KafkaConnectTagList",
      },
      tech_emails: {
        value: cdktf.listMapperHcl(kafkaConnectTechEmailsToHclTerraform, true)(this._techEmails.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "KafkaConnectTechEmailsList",
      },
      timeouts: {
        value: kafkaConnectTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "KafkaConnectTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
