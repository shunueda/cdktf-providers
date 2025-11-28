// https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/queue_simple
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface QueueSimpleConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/queue_simple#___path___ QueueSimple#___path___}
  */
  readonly path?: string;
  /**
  * <em>A set of transformations for field names. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/queue_simple#___skip___ QueueSimple#___skip___}
  */
  readonly skip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/queue_simple#bucket_size QueueSimple#bucket_size}
  */
  readonly bucketSize?: string;
  /**
  * Maximal upload/download data rate which can be reached while the burst is active.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/queue_simple#burst_limit QueueSimple#burst_limit}
  */
  readonly burstLimit?: string;
  /**
  * When average data rate is below this value - burst is allowed, as soon as average data rate reach this value - burst is denied (basically this is burst on/off switch). For optimal burst behavior this value should above `limit-at` value and below `max-limit` value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/queue_simple#burst_threshold QueueSimple#burst_threshold}
  */
  readonly burstThreshold?: string;
  /**
  * Period of time, in seconds, over which the average upload/download data rate is calculated. This is NOT the time of actual burst.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/queue_simple#burst_time QueueSimple#burst_time}
  */
  readonly burstTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/queue_simple#comment QueueSimple#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/queue_simple#disabled QueueSimple#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Allows to select only specific stream (from target address to this destination address) for limitation explain what is target and what is dst and what is upload and what not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/queue_simple#dst QueueSimple#dst}
  */
  readonly dst?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/queue_simple#id QueueSimple#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Normal upload/download data rate that is guaranteed to a target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/queue_simple#limit_at QueueSimple#limit_at}
  */
  readonly limitAt?: string;
  /**
  * Maximal upload/download data rate that is allowed for a target to reach to reach what.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/queue_simple#max_limit QueueSimple#max_limit}
  */
  readonly maxLimit?: string;
  /**
  * Queue name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/queue_simple#name QueueSimple#name}
  */
  readonly name: string;
  /**
  * Allows to use marked packets from `/ip firewall mangle`. Take look at this packet flow diagram. You need to make sure that packets are marked before the simple queues (before global-in HTB queue).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/queue_simple#packet_marks QueueSimple#packet_marks}
  */
  readonly packetMarks?: string[];
  /**
  * Assigns this queue as a child queue for selected target. Target queue can be HTB queue or any other previously created queue.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/queue_simple#parent QueueSimple#parent}
  */
  readonly parent?: string;
  /**
  * Prioritize one child queue over other child queue. Does not work on parent queues (if queue has at least one child). One is the highest, eight is the lowest priority. Child queue with higher priority will have chance to reach its `max-limit` before child with lower priority. Priority have nothing to do with bursts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/queue_simple#priority QueueSimple#priority}
  */
  readonly priority?: string;
  /**
  * Choose the type of the queue.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/queue_simple#queue QueueSimple#queue}
  */
  readonly queue?: string;
  /**
  * List of IP address ranges that will be limited by this queue.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/queue_simple#target QueueSimple#target}
  */
  readonly target: string[];
  /**
  * Allow to specify time when particular queue will be active. Router must have correct time settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/queue_simple#time QueueSimple#time}
  */
  readonly time?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/queue_simple#total_bucket_size QueueSimple#total_bucket_size}
  */
  readonly totalBucketSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/queue_simple#total_burst_limit QueueSimple#total_burst_limit}
  */
  readonly totalBurstLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/queue_simple#total_burst_threshold QueueSimple#total_burst_threshold}
  */
  readonly totalBurstThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/queue_simple#total_burst_time QueueSimple#total_burst_time}
  */
  readonly totalBurstTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/queue_simple#total_limit_at QueueSimple#total_limit_at}
  */
  readonly totalLimitAt?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/queue_simple#total_max_limit QueueSimple#total_max_limit}
  */
  readonly totalMaxLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/queue_simple#total_priority QueueSimple#total_priority}
  */
  readonly totalPriority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/queue_simple#total_queue QueueSimple#total_queue}
  */
  readonly totalQueue?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/queue_simple routeros_queue_simple}
*/
export class QueueSimple extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_queue_simple";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a QueueSimple resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the QueueSimple to import
  * @param importFromId The id of the existing QueueSimple that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/queue_simple#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the QueueSimple to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_queue_simple", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/queue_simple routeros_queue_simple} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options QueueSimpleConfig
  */
  public constructor(scope: Construct, id: string, config: QueueSimpleConfig) {
    super(scope, id, {
      terraformResourceType: 'routeros_queue_simple',
      terraformGeneratorMetadata: {
        providerName: 'routeros',
        providerVersion: '1.94.0',
        providerVersionConstraint: '1.94.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._path = config.path;
    this._skip = config.skip;
    this._bucketSize = config.bucketSize;
    this._burstLimit = config.burstLimit;
    this._burstThreshold = config.burstThreshold;
    this._burstTime = config.burstTime;
    this._comment = config.comment;
    this._disabled = config.disabled;
    this._dst = config.dst;
    this._id = config.id;
    this._limitAt = config.limitAt;
    this._maxLimit = config.maxLimit;
    this._name = config.name;
    this._packetMarks = config.packetMarks;
    this._parent = config.parent;
    this._priority = config.priority;
    this._queue = config.queue;
    this._target = config.target;
    this._time = config.time;
    this._totalBucketSize = config.totalBucketSize;
    this._totalBurstLimit = config.totalBurstLimit;
    this._totalBurstThreshold = config.totalBurstThreshold;
    this._totalBurstTime = config.totalBurstTime;
    this._totalLimitAt = config.totalLimitAt;
    this._totalMaxLimit = config.totalMaxLimit;
    this._totalPriority = config.totalPriority;
    this._totalQueue = config.totalQueue;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ___path___ - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('___path___');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // ___skip___ - computed: false, optional: true, required: false
  private _skip?: string; 
  public get skip() {
    return this.getStringAttribute('___skip___');
  }
  public set skip(value: string) {
    this._skip = value;
  }
  public resetSkip() {
    this._skip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipInput() {
    return this._skip;
  }

  // bucket_size - computed: false, optional: true, required: false
  private _bucketSize?: string; 
  public get bucketSize() {
    return this.getStringAttribute('bucket_size');
  }
  public set bucketSize(value: string) {
    this._bucketSize = value;
  }
  public resetBucketSize() {
    this._bucketSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketSizeInput() {
    return this._bucketSize;
  }

  // burst_limit - computed: false, optional: true, required: false
  private _burstLimit?: string; 
  public get burstLimit() {
    return this.getStringAttribute('burst_limit');
  }
  public set burstLimit(value: string) {
    this._burstLimit = value;
  }
  public resetBurstLimit() {
    this._burstLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get burstLimitInput() {
    return this._burstLimit;
  }

  // burst_threshold - computed: false, optional: true, required: false
  private _burstThreshold?: string; 
  public get burstThreshold() {
    return this.getStringAttribute('burst_threshold');
  }
  public set burstThreshold(value: string) {
    this._burstThreshold = value;
  }
  public resetBurstThreshold() {
    this._burstThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get burstThresholdInput() {
    return this._burstThreshold;
  }

  // burst_time - computed: false, optional: true, required: false
  private _burstTime?: string; 
  public get burstTime() {
    return this.getStringAttribute('burst_time');
  }
  public set burstTime(value: string) {
    this._burstTime = value;
  }
  public resetBurstTime() {
    this._burstTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get burstTimeInput() {
    return this._burstTime;
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // dst - computed: false, optional: true, required: false
  private _dst?: string; 
  public get dst() {
    return this.getStringAttribute('dst');
  }
  public set dst(value: string) {
    this._dst = value;
  }
  public resetDst() {
    this._dst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstInput() {
    return this._dst;
  }

  // dynamic - computed: true, optional: false, required: false
  public get dynamic() {
    return this.getBooleanAttribute('dynamic');
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

  // invalid - computed: true, optional: false, required: false
  public get invalid() {
    return this.getBooleanAttribute('invalid');
  }

  // limit_at - computed: false, optional: true, required: false
  private _limitAt?: string; 
  public get limitAt() {
    return this.getStringAttribute('limit_at');
  }
  public set limitAt(value: string) {
    this._limitAt = value;
  }
  public resetLimitAt() {
    this._limitAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitAtInput() {
    return this._limitAt;
  }

  // max_limit - computed: false, optional: true, required: false
  private _maxLimit?: string; 
  public get maxLimit() {
    return this.getStringAttribute('max_limit');
  }
  public set maxLimit(value: string) {
    this._maxLimit = value;
  }
  public resetMaxLimit() {
    this._maxLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLimitInput() {
    return this._maxLimit;
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

  // packet_marks - computed: false, optional: true, required: false
  private _packetMarks?: string[]; 
  public get packetMarks() {
    return cdktf.Fn.tolist(this.getListAttribute('packet_marks'));
  }
  public set packetMarks(value: string[]) {
    this._packetMarks = value;
  }
  public resetPacketMarks() {
    this._packetMarks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetMarksInput() {
    return this._packetMarks;
  }

  // parent - computed: false, optional: true, required: false
  private _parent?: string; 
  public get parent() {
    return this.getStringAttribute('parent');
  }
  public set parent(value: string) {
    this._parent = value;
  }
  public resetParent() {
    this._parent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentInput() {
    return this._parent;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: string; 
  public get priority() {
    return this.getStringAttribute('priority');
  }
  public set priority(value: string) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // queue - computed: false, optional: true, required: false
  private _queue?: string; 
  public get queue() {
    return this.getStringAttribute('queue');
  }
  public set queue(value: string) {
    this._queue = value;
  }
  public resetQueue() {
    this._queue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueInput() {
    return this._queue;
  }

  // target - computed: false, optional: false, required: true
  private _target?: string[]; 
  public get target() {
    return cdktf.Fn.tolist(this.getListAttribute('target'));
  }
  public set target(value: string[]) {
    this._target = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // time - computed: false, optional: true, required: false
  private _time?: string; 
  public get time() {
    return this.getStringAttribute('time');
  }
  public set time(value: string) {
    this._time = value;
  }
  public resetTime() {
    this._time = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeInput() {
    return this._time;
  }

  // total_bucket_size - computed: false, optional: true, required: false
  private _totalBucketSize?: number; 
  public get totalBucketSize() {
    return this.getNumberAttribute('total_bucket_size');
  }
  public set totalBucketSize(value: number) {
    this._totalBucketSize = value;
  }
  public resetTotalBucketSize() {
    this._totalBucketSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalBucketSizeInput() {
    return this._totalBucketSize;
  }

  // total_burst_limit - computed: false, optional: true, required: false
  private _totalBurstLimit?: number; 
  public get totalBurstLimit() {
    return this.getNumberAttribute('total_burst_limit');
  }
  public set totalBurstLimit(value: number) {
    this._totalBurstLimit = value;
  }
  public resetTotalBurstLimit() {
    this._totalBurstLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalBurstLimitInput() {
    return this._totalBurstLimit;
  }

  // total_burst_threshold - computed: false, optional: true, required: false
  private _totalBurstThreshold?: number; 
  public get totalBurstThreshold() {
    return this.getNumberAttribute('total_burst_threshold');
  }
  public set totalBurstThreshold(value: number) {
    this._totalBurstThreshold = value;
  }
  public resetTotalBurstThreshold() {
    this._totalBurstThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalBurstThresholdInput() {
    return this._totalBurstThreshold;
  }

  // total_burst_time - computed: false, optional: true, required: false
  private _totalBurstTime?: number; 
  public get totalBurstTime() {
    return this.getNumberAttribute('total_burst_time');
  }
  public set totalBurstTime(value: number) {
    this._totalBurstTime = value;
  }
  public resetTotalBurstTime() {
    this._totalBurstTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalBurstTimeInput() {
    return this._totalBurstTime;
  }

  // total_limit_at - computed: false, optional: true, required: false
  private _totalLimitAt?: number; 
  public get totalLimitAt() {
    return this.getNumberAttribute('total_limit_at');
  }
  public set totalLimitAt(value: number) {
    this._totalLimitAt = value;
  }
  public resetTotalLimitAt() {
    this._totalLimitAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalLimitAtInput() {
    return this._totalLimitAt;
  }

  // total_max_limit - computed: false, optional: true, required: false
  private _totalMaxLimit?: number; 
  public get totalMaxLimit() {
    return this.getNumberAttribute('total_max_limit');
  }
  public set totalMaxLimit(value: number) {
    this._totalMaxLimit = value;
  }
  public resetTotalMaxLimit() {
    this._totalMaxLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalMaxLimitInput() {
    return this._totalMaxLimit;
  }

  // total_priority - computed: false, optional: true, required: false
  private _totalPriority?: number; 
  public get totalPriority() {
    return this.getNumberAttribute('total_priority');
  }
  public set totalPriority(value: number) {
    this._totalPriority = value;
  }
  public resetTotalPriority() {
    this._totalPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalPriorityInput() {
    return this._totalPriority;
  }

  // total_queue - computed: false, optional: true, required: false
  private _totalQueue?: string; 
  public get totalQueue() {
    return this.getStringAttribute('total_queue');
  }
  public set totalQueue(value: string) {
    this._totalQueue = value;
  }
  public resetTotalQueue() {
    this._totalQueue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalQueueInput() {
    return this._totalQueue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ___path___: cdktf.stringToTerraform(this._path),
      ___skip___: cdktf.stringToTerraform(this._skip),
      bucket_size: cdktf.stringToTerraform(this._bucketSize),
      burst_limit: cdktf.stringToTerraform(this._burstLimit),
      burst_threshold: cdktf.stringToTerraform(this._burstThreshold),
      burst_time: cdktf.stringToTerraform(this._burstTime),
      comment: cdktf.stringToTerraform(this._comment),
      disabled: cdktf.booleanToTerraform(this._disabled),
      dst: cdktf.stringToTerraform(this._dst),
      id: cdktf.stringToTerraform(this._id),
      limit_at: cdktf.stringToTerraform(this._limitAt),
      max_limit: cdktf.stringToTerraform(this._maxLimit),
      name: cdktf.stringToTerraform(this._name),
      packet_marks: cdktf.listMapper(cdktf.stringToTerraform, false)(this._packetMarks),
      parent: cdktf.stringToTerraform(this._parent),
      priority: cdktf.stringToTerraform(this._priority),
      queue: cdktf.stringToTerraform(this._queue),
      target: cdktf.listMapper(cdktf.stringToTerraform, false)(this._target),
      time: cdktf.stringToTerraform(this._time),
      total_bucket_size: cdktf.numberToTerraform(this._totalBucketSize),
      total_burst_limit: cdktf.numberToTerraform(this._totalBurstLimit),
      total_burst_threshold: cdktf.numberToTerraform(this._totalBurstThreshold),
      total_burst_time: cdktf.numberToTerraform(this._totalBurstTime),
      total_limit_at: cdktf.numberToTerraform(this._totalLimitAt),
      total_max_limit: cdktf.numberToTerraform(this._totalMaxLimit),
      total_priority: cdktf.numberToTerraform(this._totalPriority),
      total_queue: cdktf.stringToTerraform(this._totalQueue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ___path___: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ___skip___: {
        value: cdktf.stringToHclTerraform(this._skip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bucket_size: {
        value: cdktf.stringToHclTerraform(this._bucketSize),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      burst_limit: {
        value: cdktf.stringToHclTerraform(this._burstLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      burst_threshold: {
        value: cdktf.stringToHclTerraform(this._burstThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      burst_time: {
        value: cdktf.stringToHclTerraform(this._burstTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disabled: {
        value: cdktf.booleanToHclTerraform(this._disabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dst: {
        value: cdktf.stringToHclTerraform(this._dst),
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
      limit_at: {
        value: cdktf.stringToHclTerraform(this._limitAt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_limit: {
        value: cdktf.stringToHclTerraform(this._maxLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      packet_marks: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._packetMarks),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      parent: {
        value: cdktf.stringToHclTerraform(this._parent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      priority: {
        value: cdktf.stringToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      queue: {
        value: cdktf.stringToHclTerraform(this._queue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._target),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      time: {
        value: cdktf.stringToHclTerraform(this._time),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      total_bucket_size: {
        value: cdktf.numberToHclTerraform(this._totalBucketSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      total_burst_limit: {
        value: cdktf.numberToHclTerraform(this._totalBurstLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      total_burst_threshold: {
        value: cdktf.numberToHclTerraform(this._totalBurstThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      total_burst_time: {
        value: cdktf.numberToHclTerraform(this._totalBurstTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      total_limit_at: {
        value: cdktf.numberToHclTerraform(this._totalLimitAt),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      total_max_limit: {
        value: cdktf.numberToHclTerraform(this._totalMaxLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      total_priority: {
        value: cdktf.numberToHclTerraform(this._totalPriority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      total_queue: {
        value: cdktf.stringToHclTerraform(this._totalQueue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
