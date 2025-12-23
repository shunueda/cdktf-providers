// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/tcmq_queue
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TcmqQueueConfig extends cdktf.TerraformMetaArguments {
  /**
  * Dead letter queue name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/tcmq_queue#dead_letter_queue_name TcmqQueue#dead_letter_queue_name}
  */
  readonly deadLetterQueueName?: string;
  /**
  * First lookback interval.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/tcmq_queue#first_query_interval TcmqQueue#first_query_interval}
  */
  readonly firstQueryInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/tcmq_queue#id TcmqQueue#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Maximum number of heaped messages. The value range is 1,000,000-10,000,000 during the beta test and can be 1,000,000-1,000,000,000 after the product is officially released. The default value is 10,000,000 during the beta test and will be 100,000,000 after the product is officially released.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/tcmq_queue#max_msg_heap_num TcmqQueue#max_msg_heap_num}
  */
  readonly maxMsgHeapNum?: number;
  /**
  * Maximum message length. Value range: 1024-65536 bytes (i.e., 1-64 KB). Default value: 65536.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/tcmq_queue#max_msg_size TcmqQueue#max_msg_size}
  */
  readonly maxMsgSize?: number;
  /**
  * Maximum number of lookbacks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/tcmq_queue#max_query_count TcmqQueue#max_query_count}
  */
  readonly maxQueryCount?: number;
  /**
  * Maximum receipt times. Value range: 1-1000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/tcmq_queue#max_receive_count TcmqQueue#max_receive_count}
  */
  readonly maxReceiveCount?: number;
  /**
  * Maximum period in seconds before an unconsumed message expires, which is required if `policy` is 1. Value range: 300-43200. This value should be smaller than `msgRetentionSeconds` (maximum message retention period).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/tcmq_queue#max_time_to_live TcmqQueue#max_time_to_live}
  */
  readonly maxTimeToLive?: number;
  /**
  * The max period during which a message is retained before it is automatically acknowledged. Value range: 30-43,200 seconds (30 seconds to 12 hours). Default value: 3600 seconds (1 hour).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/tcmq_queue#msg_retention_seconds TcmqQueue#msg_retention_seconds}
  */
  readonly msgRetentionSeconds?: number;
  /**
  * Dead letter policy. 0: message has been consumed multiple times but not deleted; 1: `Time-To-Live` has elapsed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/tcmq_queue#policy TcmqQueue#policy}
  */
  readonly policy?: number;
  /**
  * Long polling wait time for message reception. Value range: 0-30 seconds. Default value: 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/tcmq_queue#polling_wait_seconds TcmqQueue#polling_wait_seconds}
  */
  readonly pollingWaitSeconds?: number;
  /**
  * Queue name, which must be unique under the same account in the same region. It can contain up to 64 letters, digits, and hyphens and must begin with a letter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/tcmq_queue#queue_name TcmqQueue#queue_name}
  */
  readonly queueName: string;
  /**
  * Queue storage space configured for message rewind. Value range: 10,240-512,000 MB (if message rewind is enabled). The value `0` indicates that message rewind is not enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/tcmq_queue#retention_size_in_mb TcmqQueue#retention_size_in_mb}
  */
  readonly retentionSizeInMb?: number;
  /**
  * Rewindable time of messages in the queue. Value range: 0-1,296,000s (if message rewind is enabled). The value `0` indicates that message rewind is not enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/tcmq_queue#rewind_seconds TcmqQueue#rewind_seconds}
  */
  readonly rewindSeconds?: number;
  /**
  * Whether to enable message trace. true: yes; false: no. If this field is not configured, the feature will not be enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/tcmq_queue#trace TcmqQueue#trace}
  */
  readonly trace?: boolean | cdktf.IResolvable;
  /**
  * 1: transaction queue; 0: general queue.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/tcmq_queue#transaction TcmqQueue#transaction}
  */
  readonly transaction?: number;
  /**
  * Message visibility timeout period. Value range: 1-43200 seconds (i.e., 12 hours). Default value: 30.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/tcmq_queue#visibility_timeout TcmqQueue#visibility_timeout}
  */
  readonly visibilityTimeout?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/tcmq_queue tencentcloud_tcmq_queue}
*/
export class TcmqQueue extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_tcmq_queue";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TcmqQueue resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TcmqQueue to import
  * @param importFromId The id of the existing TcmqQueue that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/tcmq_queue#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TcmqQueue to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_tcmq_queue", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/tcmq_queue tencentcloud_tcmq_queue} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TcmqQueueConfig
  */
  public constructor(scope: Construct, id: string, config: TcmqQueueConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_tcmq_queue',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.48',
        providerVersionConstraint: '1.82.48'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deadLetterQueueName = config.deadLetterQueueName;
    this._firstQueryInterval = config.firstQueryInterval;
    this._id = config.id;
    this._maxMsgHeapNum = config.maxMsgHeapNum;
    this._maxMsgSize = config.maxMsgSize;
    this._maxQueryCount = config.maxQueryCount;
    this._maxReceiveCount = config.maxReceiveCount;
    this._maxTimeToLive = config.maxTimeToLive;
    this._msgRetentionSeconds = config.msgRetentionSeconds;
    this._policy = config.policy;
    this._pollingWaitSeconds = config.pollingWaitSeconds;
    this._queueName = config.queueName;
    this._retentionSizeInMb = config.retentionSizeInMb;
    this._rewindSeconds = config.rewindSeconds;
    this._trace = config.trace;
    this._transaction = config.transaction;
    this._visibilityTimeout = config.visibilityTimeout;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dead_letter_queue_name - computed: false, optional: true, required: false
  private _deadLetterQueueName?: string; 
  public get deadLetterQueueName() {
    return this.getStringAttribute('dead_letter_queue_name');
  }
  public set deadLetterQueueName(value: string) {
    this._deadLetterQueueName = value;
  }
  public resetDeadLetterQueueName() {
    this._deadLetterQueueName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deadLetterQueueNameInput() {
    return this._deadLetterQueueName;
  }

  // first_query_interval - computed: false, optional: true, required: false
  private _firstQueryInterval?: number; 
  public get firstQueryInterval() {
    return this.getNumberAttribute('first_query_interval');
  }
  public set firstQueryInterval(value: number) {
    this._firstQueryInterval = value;
  }
  public resetFirstQueryInterval() {
    this._firstQueryInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstQueryIntervalInput() {
    return this._firstQueryInterval;
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

  // max_msg_heap_num - computed: false, optional: true, required: false
  private _maxMsgHeapNum?: number; 
  public get maxMsgHeapNum() {
    return this.getNumberAttribute('max_msg_heap_num');
  }
  public set maxMsgHeapNum(value: number) {
    this._maxMsgHeapNum = value;
  }
  public resetMaxMsgHeapNum() {
    this._maxMsgHeapNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxMsgHeapNumInput() {
    return this._maxMsgHeapNum;
  }

  // max_msg_size - computed: false, optional: true, required: false
  private _maxMsgSize?: number; 
  public get maxMsgSize() {
    return this.getNumberAttribute('max_msg_size');
  }
  public set maxMsgSize(value: number) {
    this._maxMsgSize = value;
  }
  public resetMaxMsgSize() {
    this._maxMsgSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxMsgSizeInput() {
    return this._maxMsgSize;
  }

  // max_query_count - computed: false, optional: true, required: false
  private _maxQueryCount?: number; 
  public get maxQueryCount() {
    return this.getNumberAttribute('max_query_count');
  }
  public set maxQueryCount(value: number) {
    this._maxQueryCount = value;
  }
  public resetMaxQueryCount() {
    this._maxQueryCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxQueryCountInput() {
    return this._maxQueryCount;
  }

  // max_receive_count - computed: false, optional: true, required: false
  private _maxReceiveCount?: number; 
  public get maxReceiveCount() {
    return this.getNumberAttribute('max_receive_count');
  }
  public set maxReceiveCount(value: number) {
    this._maxReceiveCount = value;
  }
  public resetMaxReceiveCount() {
    this._maxReceiveCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxReceiveCountInput() {
    return this._maxReceiveCount;
  }

  // max_time_to_live - computed: false, optional: true, required: false
  private _maxTimeToLive?: number; 
  public get maxTimeToLive() {
    return this.getNumberAttribute('max_time_to_live');
  }
  public set maxTimeToLive(value: number) {
    this._maxTimeToLive = value;
  }
  public resetMaxTimeToLive() {
    this._maxTimeToLive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTimeToLiveInput() {
    return this._maxTimeToLive;
  }

  // msg_retention_seconds - computed: false, optional: true, required: false
  private _msgRetentionSeconds?: number; 
  public get msgRetentionSeconds() {
    return this.getNumberAttribute('msg_retention_seconds');
  }
  public set msgRetentionSeconds(value: number) {
    this._msgRetentionSeconds = value;
  }
  public resetMsgRetentionSeconds() {
    this._msgRetentionSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msgRetentionSecondsInput() {
    return this._msgRetentionSeconds;
  }

  // policy - computed: false, optional: true, required: false
  private _policy?: number; 
  public get policy() {
    return this.getNumberAttribute('policy');
  }
  public set policy(value: number) {
    this._policy = value;
  }
  public resetPolicy() {
    this._policy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy;
  }

  // polling_wait_seconds - computed: false, optional: true, required: false
  private _pollingWaitSeconds?: number; 
  public get pollingWaitSeconds() {
    return this.getNumberAttribute('polling_wait_seconds');
  }
  public set pollingWaitSeconds(value: number) {
    this._pollingWaitSeconds = value;
  }
  public resetPollingWaitSeconds() {
    this._pollingWaitSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pollingWaitSecondsInput() {
    return this._pollingWaitSeconds;
  }

  // queue_name - computed: false, optional: false, required: true
  private _queueName?: string; 
  public get queueName() {
    return this.getStringAttribute('queue_name');
  }
  public set queueName(value: string) {
    this._queueName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queueNameInput() {
    return this._queueName;
  }

  // retention_size_in_mb - computed: false, optional: true, required: false
  private _retentionSizeInMb?: number; 
  public get retentionSizeInMb() {
    return this.getNumberAttribute('retention_size_in_mb');
  }
  public set retentionSizeInMb(value: number) {
    this._retentionSizeInMb = value;
  }
  public resetRetentionSizeInMb() {
    this._retentionSizeInMb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionSizeInMbInput() {
    return this._retentionSizeInMb;
  }

  // rewind_seconds - computed: false, optional: true, required: false
  private _rewindSeconds?: number; 
  public get rewindSeconds() {
    return this.getNumberAttribute('rewind_seconds');
  }
  public set rewindSeconds(value: number) {
    this._rewindSeconds = value;
  }
  public resetRewindSeconds() {
    this._rewindSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rewindSecondsInput() {
    return this._rewindSeconds;
  }

  // trace - computed: false, optional: true, required: false
  private _trace?: boolean | cdktf.IResolvable; 
  public get trace() {
    return this.getBooleanAttribute('trace');
  }
  public set trace(value: boolean | cdktf.IResolvable) {
    this._trace = value;
  }
  public resetTrace() {
    this._trace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get traceInput() {
    return this._trace;
  }

  // transaction - computed: false, optional: true, required: false
  private _transaction?: number; 
  public get transaction() {
    return this.getNumberAttribute('transaction');
  }
  public set transaction(value: number) {
    this._transaction = value;
  }
  public resetTransaction() {
    this._transaction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transactionInput() {
    return this._transaction;
  }

  // visibility_timeout - computed: false, optional: true, required: false
  private _visibilityTimeout?: number; 
  public get visibilityTimeout() {
    return this.getNumberAttribute('visibility_timeout');
  }
  public set visibilityTimeout(value: number) {
    this._visibilityTimeout = value;
  }
  public resetVisibilityTimeout() {
    this._visibilityTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityTimeoutInput() {
    return this._visibilityTimeout;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dead_letter_queue_name: cdktf.stringToTerraform(this._deadLetterQueueName),
      first_query_interval: cdktf.numberToTerraform(this._firstQueryInterval),
      id: cdktf.stringToTerraform(this._id),
      max_msg_heap_num: cdktf.numberToTerraform(this._maxMsgHeapNum),
      max_msg_size: cdktf.numberToTerraform(this._maxMsgSize),
      max_query_count: cdktf.numberToTerraform(this._maxQueryCount),
      max_receive_count: cdktf.numberToTerraform(this._maxReceiveCount),
      max_time_to_live: cdktf.numberToTerraform(this._maxTimeToLive),
      msg_retention_seconds: cdktf.numberToTerraform(this._msgRetentionSeconds),
      policy: cdktf.numberToTerraform(this._policy),
      polling_wait_seconds: cdktf.numberToTerraform(this._pollingWaitSeconds),
      queue_name: cdktf.stringToTerraform(this._queueName),
      retention_size_in_mb: cdktf.numberToTerraform(this._retentionSizeInMb),
      rewind_seconds: cdktf.numberToTerraform(this._rewindSeconds),
      trace: cdktf.booleanToTerraform(this._trace),
      transaction: cdktf.numberToTerraform(this._transaction),
      visibility_timeout: cdktf.numberToTerraform(this._visibilityTimeout),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dead_letter_queue_name: {
        value: cdktf.stringToHclTerraform(this._deadLetterQueueName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      first_query_interval: {
        value: cdktf.numberToHclTerraform(this._firstQueryInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_msg_heap_num: {
        value: cdktf.numberToHclTerraform(this._maxMsgHeapNum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_msg_size: {
        value: cdktf.numberToHclTerraform(this._maxMsgSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_query_count: {
        value: cdktf.numberToHclTerraform(this._maxQueryCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_receive_count: {
        value: cdktf.numberToHclTerraform(this._maxReceiveCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_time_to_live: {
        value: cdktf.numberToHclTerraform(this._maxTimeToLive),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      msg_retention_seconds: {
        value: cdktf.numberToHclTerraform(this._msgRetentionSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      policy: {
        value: cdktf.numberToHclTerraform(this._policy),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      polling_wait_seconds: {
        value: cdktf.numberToHclTerraform(this._pollingWaitSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      queue_name: {
        value: cdktf.stringToHclTerraform(this._queueName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retention_size_in_mb: {
        value: cdktf.numberToHclTerraform(this._retentionSizeInMb),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rewind_seconds: {
        value: cdktf.numberToHclTerraform(this._rewindSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      trace: {
        value: cdktf.booleanToHclTerraform(this._trace),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      transaction: {
        value: cdktf.numberToHclTerraform(this._transaction),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      visibility_timeout: {
        value: cdktf.numberToHclTerraform(this._visibilityTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
