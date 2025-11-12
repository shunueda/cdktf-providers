// https://registry.terraform.io/providers/nats-io/jetstream/0.2.1/docs/resources/consumer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConsumerConfig extends cdktf.TerraformMetaArguments {
  /**
  * The delivery acknowledgement policy to apply to the Consumer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nats-io/jetstream/0.2.1/docs/resources/consumer#ack_policy Consumer#ack_policy}
  */
  readonly ackPolicy?: string;
  /**
  * Number of seconds to wait for acknowledgement
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nats-io/jetstream/0.2.1/docs/resources/consumer#ack_wait Consumer#ack_wait}
  */
  readonly ackWait?: number;
  /**
  * List of durations in Go format that represents a retry time scale for NaK'd messages. A list of durations in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nats-io/jetstream/0.2.1/docs/resources/consumer#backoff Consumer#backoff}
  */
  readonly backoff?: number[];
  /**
  * Starts at the first available message in the Stream
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nats-io/jetstream/0.2.1/docs/resources/consumer#deliver_all Consumer#deliver_all}
  */
  readonly deliverAll?: boolean | cdktf.IResolvable;
  /**
  * Starts at the latest available message in the Stream
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nats-io/jetstream/0.2.1/docs/resources/consumer#deliver_last Consumer#deliver_last}
  */
  readonly deliverLast?: boolean | cdktf.IResolvable;
  /**
  * Starts with the last message for each subject matched by filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nats-io/jetstream/0.2.1/docs/resources/consumer#deliver_last_per_subject Consumer#deliver_last_per_subject}
  */
  readonly deliverLastPerSubject?: boolean | cdktf.IResolvable;
  /**
  * Starts with the next available message in the Stream
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nats-io/jetstream/0.2.1/docs/resources/consumer#deliver_new Consumer#deliver_new}
  */
  readonly deliverNew?: boolean | cdktf.IResolvable;
  /**
  * When set Push consumers will only deliver messages to subscriptions with this group set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nats-io/jetstream/0.2.1/docs/resources/consumer#delivery_group Consumer#delivery_group}
  */
  readonly deliveryGroup?: string;
  /**
  * The subject where a Push-based consumer will deliver messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nats-io/jetstream/0.2.1/docs/resources/consumer#delivery_subject Consumer#delivery_subject}
  */
  readonly deliverySubject?: string;
  /**
  * Contains additional information about this consumer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nats-io/jetstream/0.2.1/docs/resources/consumer#description Consumer#description}
  */
  readonly description?: string;
  /**
  * The durable name of the Consumer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nats-io/jetstream/0.2.1/docs/resources/consumer#durable_name Consumer#durable_name}
  */
  readonly durableName: string;
  /**
  * Only receive a subset of messages from the Stream based on the subject they entered the Stream on
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nats-io/jetstream/0.2.1/docs/resources/consumer#filter_subject Consumer#filter_subject}
  */
  readonly filterSubject?: string;
  /**
  * Only receive a subset of messages from the stream baseed on the subjects they entered the Streeam on, exlusive to filter_subject and works with nats-server v2.10 or better
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nats-io/jetstream/0.2.1/docs/resources/consumer#filter_subjects Consumer#filter_subjects}
  */
  readonly filterSubjects?: string[];
  /**
  * Enable flow control for push consumers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nats-io/jetstream/0.2.1/docs/resources/consumer#flow_control Consumer#flow_control}
  */
  readonly flowControl?: boolean | cdktf.IResolvable;
  /**
  * When true no message bodies will be delivered only headers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nats-io/jetstream/0.2.1/docs/resources/consumer#headers_only Consumer#headers_only}
  */
  readonly headersOnly?: boolean | cdktf.IResolvable;
  /**
  * Enable heartbeat messages for push consumers, duration specified in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nats-io/jetstream/0.2.1/docs/resources/consumer#heartbeat Consumer#heartbeat}
  */
  readonly heartbeat?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nats-io/jetstream/0.2.1/docs/resources/consumer#id Consumer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Removes the consumer after a idle period, specified as a duration in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nats-io/jetstream/0.2.1/docs/resources/consumer#inactive_threshold Consumer#inactive_threshold}
  */
  readonly inactiveThreshold?: number;
  /**
  * Maximum pending Acks before consumers are paused
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nats-io/jetstream/0.2.1/docs/resources/consumer#max_ack_pending Consumer#max_ack_pending}
  */
  readonly maxAckPending?: number;
  /**
  * Limits Pull Batch sizes to this maximum
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nats-io/jetstream/0.2.1/docs/resources/consumer#max_batch Consumer#max_batch}
  */
  readonly maxBatch?: number;
  /**
  * The maximum bytes value that maybe set when dong a pull on a Pull Consumer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nats-io/jetstream/0.2.1/docs/resources/consumer#max_bytes Consumer#max_bytes}
  */
  readonly maxBytes?: number;
  /**
  * Maximum deliveries to attempt for each message
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nats-io/jetstream/0.2.1/docs/resources/consumer#max_delivery Consumer#max_delivery}
  */
  readonly maxDelivery?: number;
  /**
  * Limits the Pull Expires duration to this maximum in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nats-io/jetstream/0.2.1/docs/resources/consumer#max_expires Consumer#max_expires}
  */
  readonly maxExpires?: number;
  /**
  * The number of pulls that can be outstanding on a pull consumer, pulls received after this is reached are ignored
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nats-io/jetstream/0.2.1/docs/resources/consumer#max_waiting Consumer#max_waiting}
  */
  readonly maxWaiting?: number;
  /**
  * Force the consumer state to be kept in memory rather than inherit the setting from the stream
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nats-io/jetstream/0.2.1/docs/resources/consumer#memory Consumer#memory}
  */
  readonly memory?: boolean | cdktf.IResolvable;
  /**
  * Free form metadata about the consumer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nats-io/jetstream/0.2.1/docs/resources/consumer#metadata Consumer#metadata}
  */
  readonly metadata?: { [key: string]: string };
  /**
  * The rate limit for delivering messages to push consumers, expressed in bits per second
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nats-io/jetstream/0.2.1/docs/resources/consumer#ratelimit Consumer#ratelimit}
  */
  readonly ratelimit?: number;
  /**
  * The rate at which messages will be replayed from the stream
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nats-io/jetstream/0.2.1/docs/resources/consumer#replay_policy Consumer#replay_policy}
  */
  readonly replayPolicy?: string;
  /**
  * How many replicas of the data to keep in a clustered environment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nats-io/jetstream/0.2.1/docs/resources/consumer#replicas Consumer#replicas}
  */
  readonly replicas?: number;
  /**
  * The percentage of acknowledgements that will be sampled for observability purposes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nats-io/jetstream/0.2.1/docs/resources/consumer#sample_freq Consumer#sample_freq}
  */
  readonly sampleFreq?: number;
  /**
  * The timestamp of the first message that will be delivered by this Consumer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nats-io/jetstream/0.2.1/docs/resources/consumer#start_time Consumer#start_time}
  */
  readonly startTime?: string;
  /**
  * The name of the Stream that this consumer consumes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nats-io/jetstream/0.2.1/docs/resources/consumer#stream_id Consumer#stream_id}
  */
  readonly streamId: string;
  /**
  * The Stream Sequence that will be the first message delivered by this Consumer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nats-io/jetstream/0.2.1/docs/resources/consumer#stream_sequence Consumer#stream_sequence}
  */
  readonly streamSequence?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/nats-io/jetstream/0.2.1/docs/resources/consumer jetstream_consumer}
*/
export class Consumer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "jetstream_consumer";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Consumer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Consumer to import
  * @param importFromId The id of the existing Consumer that should be imported. Refer to the {@link https://registry.terraform.io/providers/nats-io/jetstream/0.2.1/docs/resources/consumer#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Consumer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "jetstream_consumer", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nats-io/jetstream/0.2.1/docs/resources/consumer jetstream_consumer} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConsumerConfig
  */
  public constructor(scope: Construct, id: string, config: ConsumerConfig) {
    super(scope, id, {
      terraformResourceType: 'jetstream_consumer',
      terraformGeneratorMetadata: {
        providerName: 'jetstream',
        providerVersion: '0.2.1',
        providerVersionConstraint: '0.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._ackPolicy = config.ackPolicy;
    this._ackWait = config.ackWait;
    this._backoff = config.backoff;
    this._deliverAll = config.deliverAll;
    this._deliverLast = config.deliverLast;
    this._deliverLastPerSubject = config.deliverLastPerSubject;
    this._deliverNew = config.deliverNew;
    this._deliveryGroup = config.deliveryGroup;
    this._deliverySubject = config.deliverySubject;
    this._description = config.description;
    this._durableName = config.durableName;
    this._filterSubject = config.filterSubject;
    this._filterSubjects = config.filterSubjects;
    this._flowControl = config.flowControl;
    this._headersOnly = config.headersOnly;
    this._heartbeat = config.heartbeat;
    this._id = config.id;
    this._inactiveThreshold = config.inactiveThreshold;
    this._maxAckPending = config.maxAckPending;
    this._maxBatch = config.maxBatch;
    this._maxBytes = config.maxBytes;
    this._maxDelivery = config.maxDelivery;
    this._maxExpires = config.maxExpires;
    this._maxWaiting = config.maxWaiting;
    this._memory = config.memory;
    this._metadata = config.metadata;
    this._ratelimit = config.ratelimit;
    this._replayPolicy = config.replayPolicy;
    this._replicas = config.replicas;
    this._sampleFreq = config.sampleFreq;
    this._startTime = config.startTime;
    this._streamId = config.streamId;
    this._streamSequence = config.streamSequence;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ack_policy - computed: false, optional: true, required: false
  private _ackPolicy?: string; 
  public get ackPolicy() {
    return this.getStringAttribute('ack_policy');
  }
  public set ackPolicy(value: string) {
    this._ackPolicy = value;
  }
  public resetAckPolicy() {
    this._ackPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ackPolicyInput() {
    return this._ackPolicy;
  }

  // ack_wait - computed: false, optional: true, required: false
  private _ackWait?: number; 
  public get ackWait() {
    return this.getNumberAttribute('ack_wait');
  }
  public set ackWait(value: number) {
    this._ackWait = value;
  }
  public resetAckWait() {
    this._ackWait = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ackWaitInput() {
    return this._ackWait;
  }

  // backoff - computed: false, optional: true, required: false
  private _backoff?: number[]; 
  public get backoff() {
    return this.getNumberListAttribute('backoff');
  }
  public set backoff(value: number[]) {
    this._backoff = value;
  }
  public resetBackoff() {
    this._backoff = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backoffInput() {
    return this._backoff;
  }

  // deliver_all - computed: false, optional: true, required: false
  private _deliverAll?: boolean | cdktf.IResolvable; 
  public get deliverAll() {
    return this.getBooleanAttribute('deliver_all');
  }
  public set deliverAll(value: boolean | cdktf.IResolvable) {
    this._deliverAll = value;
  }
  public resetDeliverAll() {
    this._deliverAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deliverAllInput() {
    return this._deliverAll;
  }

  // deliver_last - computed: false, optional: true, required: false
  private _deliverLast?: boolean | cdktf.IResolvable; 
  public get deliverLast() {
    return this.getBooleanAttribute('deliver_last');
  }
  public set deliverLast(value: boolean | cdktf.IResolvable) {
    this._deliverLast = value;
  }
  public resetDeliverLast() {
    this._deliverLast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deliverLastInput() {
    return this._deliverLast;
  }

  // deliver_last_per_subject - computed: false, optional: true, required: false
  private _deliverLastPerSubject?: boolean | cdktf.IResolvable; 
  public get deliverLastPerSubject() {
    return this.getBooleanAttribute('deliver_last_per_subject');
  }
  public set deliverLastPerSubject(value: boolean | cdktf.IResolvable) {
    this._deliverLastPerSubject = value;
  }
  public resetDeliverLastPerSubject() {
    this._deliverLastPerSubject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deliverLastPerSubjectInput() {
    return this._deliverLastPerSubject;
  }

  // deliver_new - computed: false, optional: true, required: false
  private _deliverNew?: boolean | cdktf.IResolvable; 
  public get deliverNew() {
    return this.getBooleanAttribute('deliver_new');
  }
  public set deliverNew(value: boolean | cdktf.IResolvable) {
    this._deliverNew = value;
  }
  public resetDeliverNew() {
    this._deliverNew = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deliverNewInput() {
    return this._deliverNew;
  }

  // delivery_group - computed: false, optional: true, required: false
  private _deliveryGroup?: string; 
  public get deliveryGroup() {
    return this.getStringAttribute('delivery_group');
  }
  public set deliveryGroup(value: string) {
    this._deliveryGroup = value;
  }
  public resetDeliveryGroup() {
    this._deliveryGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deliveryGroupInput() {
    return this._deliveryGroup;
  }

  // delivery_subject - computed: false, optional: true, required: false
  private _deliverySubject?: string; 
  public get deliverySubject() {
    return this.getStringAttribute('delivery_subject');
  }
  public set deliverySubject(value: string) {
    this._deliverySubject = value;
  }
  public resetDeliverySubject() {
    this._deliverySubject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deliverySubjectInput() {
    return this._deliverySubject;
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

  // durable_name - computed: false, optional: false, required: true
  private _durableName?: string; 
  public get durableName() {
    return this.getStringAttribute('durable_name');
  }
  public set durableName(value: string) {
    this._durableName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get durableNameInput() {
    return this._durableName;
  }

  // filter_subject - computed: false, optional: true, required: false
  private _filterSubject?: string; 
  public get filterSubject() {
    return this.getStringAttribute('filter_subject');
  }
  public set filterSubject(value: string) {
    this._filterSubject = value;
  }
  public resetFilterSubject() {
    this._filterSubject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterSubjectInput() {
    return this._filterSubject;
  }

  // filter_subjects - computed: false, optional: true, required: false
  private _filterSubjects?: string[]; 
  public get filterSubjects() {
    return this.getListAttribute('filter_subjects');
  }
  public set filterSubjects(value: string[]) {
    this._filterSubjects = value;
  }
  public resetFilterSubjects() {
    this._filterSubjects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterSubjectsInput() {
    return this._filterSubjects;
  }

  // flow_control - computed: false, optional: true, required: false
  private _flowControl?: boolean | cdktf.IResolvable; 
  public get flowControl() {
    return this.getBooleanAttribute('flow_control');
  }
  public set flowControl(value: boolean | cdktf.IResolvable) {
    this._flowControl = value;
  }
  public resetFlowControl() {
    this._flowControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flowControlInput() {
    return this._flowControl;
  }

  // headers_only - computed: false, optional: true, required: false
  private _headersOnly?: boolean | cdktf.IResolvable; 
  public get headersOnly() {
    return this.getBooleanAttribute('headers_only');
  }
  public set headersOnly(value: boolean | cdktf.IResolvable) {
    this._headersOnly = value;
  }
  public resetHeadersOnly() {
    this._headersOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersOnlyInput() {
    return this._headersOnly;
  }

  // heartbeat - computed: false, optional: true, required: false
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

  // inactive_threshold - computed: false, optional: true, required: false
  private _inactiveThreshold?: number; 
  public get inactiveThreshold() {
    return this.getNumberAttribute('inactive_threshold');
  }
  public set inactiveThreshold(value: number) {
    this._inactiveThreshold = value;
  }
  public resetInactiveThreshold() {
    this._inactiveThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inactiveThresholdInput() {
    return this._inactiveThreshold;
  }

  // max_ack_pending - computed: false, optional: true, required: false
  private _maxAckPending?: number; 
  public get maxAckPending() {
    return this.getNumberAttribute('max_ack_pending');
  }
  public set maxAckPending(value: number) {
    this._maxAckPending = value;
  }
  public resetMaxAckPending() {
    this._maxAckPending = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAckPendingInput() {
    return this._maxAckPending;
  }

  // max_batch - computed: false, optional: true, required: false
  private _maxBatch?: number; 
  public get maxBatch() {
    return this.getNumberAttribute('max_batch');
  }
  public set maxBatch(value: number) {
    this._maxBatch = value;
  }
  public resetMaxBatch() {
    this._maxBatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBatchInput() {
    return this._maxBatch;
  }

  // max_bytes - computed: false, optional: true, required: false
  private _maxBytes?: number; 
  public get maxBytes() {
    return this.getNumberAttribute('max_bytes');
  }
  public set maxBytes(value: number) {
    this._maxBytes = value;
  }
  public resetMaxBytes() {
    this._maxBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBytesInput() {
    return this._maxBytes;
  }

  // max_delivery - computed: false, optional: true, required: false
  private _maxDelivery?: number; 
  public get maxDelivery() {
    return this.getNumberAttribute('max_delivery');
  }
  public set maxDelivery(value: number) {
    this._maxDelivery = value;
  }
  public resetMaxDelivery() {
    this._maxDelivery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDeliveryInput() {
    return this._maxDelivery;
  }

  // max_expires - computed: false, optional: true, required: false
  private _maxExpires?: number; 
  public get maxExpires() {
    return this.getNumberAttribute('max_expires');
  }
  public set maxExpires(value: number) {
    this._maxExpires = value;
  }
  public resetMaxExpires() {
    this._maxExpires = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxExpiresInput() {
    return this._maxExpires;
  }

  // max_waiting - computed: true, optional: true, required: false
  private _maxWaiting?: number; 
  public get maxWaiting() {
    return this.getNumberAttribute('max_waiting');
  }
  public set maxWaiting(value: number) {
    this._maxWaiting = value;
  }
  public resetMaxWaiting() {
    this._maxWaiting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxWaitingInput() {
    return this._maxWaiting;
  }

  // memory - computed: false, optional: true, required: false
  private _memory?: boolean | cdktf.IResolvable; 
  public get memory() {
    return this.getBooleanAttribute('memory');
  }
  public set memory(value: boolean | cdktf.IResolvable) {
    this._memory = value;
  }
  public resetMemory() {
    this._memory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata?: { [key: string]: string }; 
  public get metadata() {
    return this.getStringMapAttribute('metadata');
  }
  public set metadata(value: { [key: string]: string }) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
  }

  // ratelimit - computed: false, optional: true, required: false
  private _ratelimit?: number; 
  public get ratelimit() {
    return this.getNumberAttribute('ratelimit');
  }
  public set ratelimit(value: number) {
    this._ratelimit = value;
  }
  public resetRatelimit() {
    this._ratelimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ratelimitInput() {
    return this._ratelimit;
  }

  // replay_policy - computed: false, optional: true, required: false
  private _replayPolicy?: string; 
  public get replayPolicy() {
    return this.getStringAttribute('replay_policy');
  }
  public set replayPolicy(value: string) {
    this._replayPolicy = value;
  }
  public resetReplayPolicy() {
    this._replayPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replayPolicyInput() {
    return this._replayPolicy;
  }

  // replicas - computed: false, optional: true, required: false
  private _replicas?: number; 
  public get replicas() {
    return this.getNumberAttribute('replicas');
  }
  public set replicas(value: number) {
    this._replicas = value;
  }
  public resetReplicas() {
    this._replicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicasInput() {
    return this._replicas;
  }

  // sample_freq - computed: false, optional: true, required: false
  private _sampleFreq?: number; 
  public get sampleFreq() {
    return this.getNumberAttribute('sample_freq');
  }
  public set sampleFreq(value: number) {
    this._sampleFreq = value;
  }
  public resetSampleFreq() {
    this._sampleFreq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sampleFreqInput() {
    return this._sampleFreq;
  }

  // start_time - computed: false, optional: true, required: false
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // stream_id - computed: false, optional: false, required: true
  private _streamId?: string; 
  public get streamId() {
    return this.getStringAttribute('stream_id');
  }
  public set streamId(value: string) {
    this._streamId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get streamIdInput() {
    return this._streamId;
  }

  // stream_sequence - computed: false, optional: true, required: false
  private _streamSequence?: number; 
  public get streamSequence() {
    return this.getNumberAttribute('stream_sequence');
  }
  public set streamSequence(value: number) {
    this._streamSequence = value;
  }
  public resetStreamSequence() {
    this._streamSequence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamSequenceInput() {
    return this._streamSequence;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ack_policy: cdktf.stringToTerraform(this._ackPolicy),
      ack_wait: cdktf.numberToTerraform(this._ackWait),
      backoff: cdktf.listMapper(cdktf.numberToTerraform, false)(this._backoff),
      deliver_all: cdktf.booleanToTerraform(this._deliverAll),
      deliver_last: cdktf.booleanToTerraform(this._deliverLast),
      deliver_last_per_subject: cdktf.booleanToTerraform(this._deliverLastPerSubject),
      deliver_new: cdktf.booleanToTerraform(this._deliverNew),
      delivery_group: cdktf.stringToTerraform(this._deliveryGroup),
      delivery_subject: cdktf.stringToTerraform(this._deliverySubject),
      description: cdktf.stringToTerraform(this._description),
      durable_name: cdktf.stringToTerraform(this._durableName),
      filter_subject: cdktf.stringToTerraform(this._filterSubject),
      filter_subjects: cdktf.listMapper(cdktf.stringToTerraform, false)(this._filterSubjects),
      flow_control: cdktf.booleanToTerraform(this._flowControl),
      headers_only: cdktf.booleanToTerraform(this._headersOnly),
      heartbeat: cdktf.numberToTerraform(this._heartbeat),
      id: cdktf.stringToTerraform(this._id),
      inactive_threshold: cdktf.numberToTerraform(this._inactiveThreshold),
      max_ack_pending: cdktf.numberToTerraform(this._maxAckPending),
      max_batch: cdktf.numberToTerraform(this._maxBatch),
      max_bytes: cdktf.numberToTerraform(this._maxBytes),
      max_delivery: cdktf.numberToTerraform(this._maxDelivery),
      max_expires: cdktf.numberToTerraform(this._maxExpires),
      max_waiting: cdktf.numberToTerraform(this._maxWaiting),
      memory: cdktf.booleanToTerraform(this._memory),
      metadata: cdktf.hashMapper(cdktf.stringToTerraform)(this._metadata),
      ratelimit: cdktf.numberToTerraform(this._ratelimit),
      replay_policy: cdktf.stringToTerraform(this._replayPolicy),
      replicas: cdktf.numberToTerraform(this._replicas),
      sample_freq: cdktf.numberToTerraform(this._sampleFreq),
      start_time: cdktf.stringToTerraform(this._startTime),
      stream_id: cdktf.stringToTerraform(this._streamId),
      stream_sequence: cdktf.numberToTerraform(this._streamSequence),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ack_policy: {
        value: cdktf.stringToHclTerraform(this._ackPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ack_wait: {
        value: cdktf.numberToHclTerraform(this._ackWait),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      backoff: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._backoff),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      deliver_all: {
        value: cdktf.booleanToHclTerraform(this._deliverAll),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      deliver_last: {
        value: cdktf.booleanToHclTerraform(this._deliverLast),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      deliver_last_per_subject: {
        value: cdktf.booleanToHclTerraform(this._deliverLastPerSubject),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      deliver_new: {
        value: cdktf.booleanToHclTerraform(this._deliverNew),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      delivery_group: {
        value: cdktf.stringToHclTerraform(this._deliveryGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delivery_subject: {
        value: cdktf.stringToHclTerraform(this._deliverySubject),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      durable_name: {
        value: cdktf.stringToHclTerraform(this._durableName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter_subject: {
        value: cdktf.stringToHclTerraform(this._filterSubject),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter_subjects: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._filterSubjects),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      flow_control: {
        value: cdktf.booleanToHclTerraform(this._flowControl),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      headers_only: {
        value: cdktf.booleanToHclTerraform(this._headersOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      heartbeat: {
        value: cdktf.numberToHclTerraform(this._heartbeat),
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
      inactive_threshold: {
        value: cdktf.numberToHclTerraform(this._inactiveThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_ack_pending: {
        value: cdktf.numberToHclTerraform(this._maxAckPending),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_batch: {
        value: cdktf.numberToHclTerraform(this._maxBatch),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_bytes: {
        value: cdktf.numberToHclTerraform(this._maxBytes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_delivery: {
        value: cdktf.numberToHclTerraform(this._maxDelivery),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_expires: {
        value: cdktf.numberToHclTerraform(this._maxExpires),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_waiting: {
        value: cdktf.numberToHclTerraform(this._maxWaiting),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      memory: {
        value: cdktf.booleanToHclTerraform(this._memory),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      metadata: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._metadata),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      ratelimit: {
        value: cdktf.numberToHclTerraform(this._ratelimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      replay_policy: {
        value: cdktf.stringToHclTerraform(this._replayPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      replicas: {
        value: cdktf.numberToHclTerraform(this._replicas),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sample_freq: {
        value: cdktf.numberToHclTerraform(this._sampleFreq),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      start_time: {
        value: cdktf.stringToHclTerraform(this._startTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stream_id: {
        value: cdktf.stringToHclTerraform(this._streamId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stream_sequence: {
        value: cdktf.numberToHclTerraform(this._streamSequence),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
