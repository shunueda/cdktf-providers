// https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.2/docs/resources/rabbitmq_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RabbitmqConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Set the maximum permissible number of channels per connection. 0 means no limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.2/docs/resources/rabbitmq_configuration#channel_max RabbitmqConfiguration#channel_max}
  */
  readonly channelMax?: number;
  /**
  * Set how the cluster should handle network partition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.2/docs/resources/rabbitmq_configuration#cluster_partition_handling RabbitmqConfiguration#cluster_partition_handling}
  */
  readonly clusterPartitionHandling?: string;
  /**
  * Set the maximum permissible number of connections, -1 means infinity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.2/docs/resources/rabbitmq_configuration#connection_max RabbitmqConfiguration#connection_max}
  */
  readonly connectionMax?: number;
  /**
  * A consumer that has received a message and does not acknowledge that message within the timeout in milliseconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.2/docs/resources/rabbitmq_configuration#consumer_timeout RabbitmqConfiguration#consumer_timeout}
  */
  readonly consumerTimeout?: number;
  /**
  * Set the server AMQP 0-9-1 heartbeat timeout in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.2/docs/resources/rabbitmq_configuration#heartbeat RabbitmqConfiguration#heartbeat}
  */
  readonly heartbeat?: number;
  /**
  * Instance identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.2/docs/resources/rabbitmq_configuration#instance_id RabbitmqConfiguration#instance_id}
  */
  readonly instanceId: number;
  /**
  * Log level for the logger used for log integrations and the CloudAMQP Console log view.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.2/docs/resources/rabbitmq_configuration#log_exchange_level RabbitmqConfiguration#log_exchange_level}
  */
  readonly logExchangeLevel?: string;
  /**
  * The largest allowed message payload size in bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.2/docs/resources/rabbitmq_configuration#max_message_size RabbitmqConfiguration#max_message_size}
  */
  readonly maxMessageSize?: number;
  /**
  * Size in bytes below which to embed messages in the queue index. 0 will turn off payload embedding in the queue index.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.2/docs/resources/rabbitmq_configuration#queue_index_embed_msgs_below RabbitmqConfiguration#queue_index_embed_msgs_below}
  */
  readonly queueIndexEmbedMsgsBelow?: number;
  /**
  * Configurable sleep time in seconds between retries for RabbitMQ configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.2/docs/resources/rabbitmq_configuration#sleep RabbitmqConfiguration#sleep}
  */
  readonly sleep?: number;
  /**
  * Configurable timeout time in seconds for RabbitMQ configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.2/docs/resources/rabbitmq_configuration#timeout RabbitmqConfiguration#timeout}
  */
  readonly timeout?: number;
  /**
  * When the server will enter memory based flow-control as relative to the maximum available memory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.2/docs/resources/rabbitmq_configuration#vm_memory_high_watermark RabbitmqConfiguration#vm_memory_high_watermark}
  */
  readonly vmMemoryHighWatermark?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.2/docs/resources/rabbitmq_configuration cloudamqp_rabbitmq_configuration}
*/
export class RabbitmqConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudamqp_rabbitmq_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RabbitmqConfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RabbitmqConfiguration to import
  * @param importFromId The id of the existing RabbitmqConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.2/docs/resources/rabbitmq_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RabbitmqConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudamqp_rabbitmq_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.2/docs/resources/rabbitmq_configuration cloudamqp_rabbitmq_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RabbitmqConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: RabbitmqConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudamqp_rabbitmq_configuration',
      terraformGeneratorMetadata: {
        providerName: 'cloudamqp',
        providerVersion: '1.38.2',
        providerVersionConstraint: '1.38.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._channelMax = config.channelMax;
    this._clusterPartitionHandling = config.clusterPartitionHandling;
    this._connectionMax = config.connectionMax;
    this._consumerTimeout = config.consumerTimeout;
    this._heartbeat = config.heartbeat;
    this._instanceId = config.instanceId;
    this._logExchangeLevel = config.logExchangeLevel;
    this._maxMessageSize = config.maxMessageSize;
    this._queueIndexEmbedMsgsBelow = config.queueIndexEmbedMsgsBelow;
    this._sleep = config.sleep;
    this._timeout = config.timeout;
    this._vmMemoryHighWatermark = config.vmMemoryHighWatermark;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // channel_max - computed: true, optional: true, required: false
  private _channelMax?: number; 
  public get channelMax() {
    return this.getNumberAttribute('channel_max');
  }
  public set channelMax(value: number) {
    this._channelMax = value;
  }
  public resetChannelMax() {
    this._channelMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelMaxInput() {
    return this._channelMax;
  }

  // cluster_partition_handling - computed: true, optional: true, required: false
  private _clusterPartitionHandling?: string; 
  public get clusterPartitionHandling() {
    return this.getStringAttribute('cluster_partition_handling');
  }
  public set clusterPartitionHandling(value: string) {
    this._clusterPartitionHandling = value;
  }
  public resetClusterPartitionHandling() {
    this._clusterPartitionHandling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterPartitionHandlingInput() {
    return this._clusterPartitionHandling;
  }

  // connection_max - computed: true, optional: true, required: false
  private _connectionMax?: number; 
  public get connectionMax() {
    return this.getNumberAttribute('connection_max');
  }
  public set connectionMax(value: number) {
    this._connectionMax = value;
  }
  public resetConnectionMax() {
    this._connectionMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionMaxInput() {
    return this._connectionMax;
  }

  // consumer_timeout - computed: true, optional: true, required: false
  private _consumerTimeout?: number; 
  public get consumerTimeout() {
    return this.getNumberAttribute('consumer_timeout');
  }
  public set consumerTimeout(value: number) {
    this._consumerTimeout = value;
  }
  public resetConsumerTimeout() {
    this._consumerTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerTimeoutInput() {
    return this._consumerTimeout;
  }

  // heartbeat - computed: true, optional: true, required: false
  private _heartbeat?: number; 
  public get heartbeat() {
    return this.getNumberAttribute('heartbeat');
  }
  public set heartbeat(value: number) {
    this._heartbeat = value;
  }
  public resetHeartbeat() {
    this._heartbeat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get heartbeatInput() {
    return this._heartbeat;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: number; 
  public get instanceId() {
    return this.getNumberAttribute('instance_id');
  }
  public set instanceId(value: number) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // log_exchange_level - computed: true, optional: true, required: false
  private _logExchangeLevel?: string; 
  public get logExchangeLevel() {
    return this.getStringAttribute('log_exchange_level');
  }
  public set logExchangeLevel(value: string) {
    this._logExchangeLevel = value;
  }
  public resetLogExchangeLevel() {
    this._logExchangeLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logExchangeLevelInput() {
    return this._logExchangeLevel;
  }

  // max_message_size - computed: true, optional: true, required: false
  private _maxMessageSize?: number; 
  public get maxMessageSize() {
    return this.getNumberAttribute('max_message_size');
  }
  public set maxMessageSize(value: number) {
    this._maxMessageSize = value;
  }
  public resetMaxMessageSize() {
    this._maxMessageSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxMessageSizeInput() {
    return this._maxMessageSize;
  }

  // queue_index_embed_msgs_below - computed: true, optional: true, required: false
  private _queueIndexEmbedMsgsBelow?: number; 
  public get queueIndexEmbedMsgsBelow() {
    return this.getNumberAttribute('queue_index_embed_msgs_below');
  }
  public set queueIndexEmbedMsgsBelow(value: number) {
    this._queueIndexEmbedMsgsBelow = value;
  }
  public resetQueueIndexEmbedMsgsBelow() {
    this._queueIndexEmbedMsgsBelow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueIndexEmbedMsgsBelowInput() {
    return this._queueIndexEmbedMsgsBelow;
  }

  // sleep - computed: true, optional: true, required: false
  private _sleep?: number; 
  public get sleep() {
    return this.getNumberAttribute('sleep');
  }
  public set sleep(value: number) {
    this._sleep = value;
  }
  public resetSleep() {
    this._sleep = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sleepInput() {
    return this._sleep;
  }

  // timeout - computed: true, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // vm_memory_high_watermark - computed: true, optional: true, required: false
  private _vmMemoryHighWatermark?: number; 
  public get vmMemoryHighWatermark() {
    return this.getNumberAttribute('vm_memory_high_watermark');
  }
  public set vmMemoryHighWatermark(value: number) {
    this._vmMemoryHighWatermark = value;
  }
  public resetVmMemoryHighWatermark() {
    this._vmMemoryHighWatermark = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmMemoryHighWatermarkInput() {
    return this._vmMemoryHighWatermark;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      channel_max: cdktf.numberToTerraform(this._channelMax),
      cluster_partition_handling: cdktf.stringToTerraform(this._clusterPartitionHandling),
      connection_max: cdktf.numberToTerraform(this._connectionMax),
      consumer_timeout: cdktf.numberToTerraform(this._consumerTimeout),
      heartbeat: cdktf.numberToTerraform(this._heartbeat),
      instance_id: cdktf.numberToTerraform(this._instanceId),
      log_exchange_level: cdktf.stringToTerraform(this._logExchangeLevel),
      max_message_size: cdktf.numberToTerraform(this._maxMessageSize),
      queue_index_embed_msgs_below: cdktf.numberToTerraform(this._queueIndexEmbedMsgsBelow),
      sleep: cdktf.numberToTerraform(this._sleep),
      timeout: cdktf.numberToTerraform(this._timeout),
      vm_memory_high_watermark: cdktf.numberToTerraform(this._vmMemoryHighWatermark),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      channel_max: {
        value: cdktf.numberToHclTerraform(this._channelMax),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cluster_partition_handling: {
        value: cdktf.stringToHclTerraform(this._clusterPartitionHandling),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connection_max: {
        value: cdktf.numberToHclTerraform(this._connectionMax),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      consumer_timeout: {
        value: cdktf.numberToHclTerraform(this._consumerTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      heartbeat: {
        value: cdktf.numberToHclTerraform(this._heartbeat),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      instance_id: {
        value: cdktf.numberToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      log_exchange_level: {
        value: cdktf.stringToHclTerraform(this._logExchangeLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_message_size: {
        value: cdktf.numberToHclTerraform(this._maxMessageSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      queue_index_embed_msgs_below: {
        value: cdktf.numberToHclTerraform(this._queueIndexEmbedMsgsBelow),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sleep: {
        value: cdktf.numberToHclTerraform(this._sleep),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timeout: {
        value: cdktf.numberToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vm_memory_high_watermark: {
        value: cdktf.numberToHclTerraform(this._vmMemoryHighWatermark),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
