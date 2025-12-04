// https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/queue_tree
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface QueueTreeConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/queue_tree#___path___ QueueTree#___path___}
  */
  readonly path?: string;
  /**
  * <em>A set of transformations for field names. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/queue_tree#___skip___ QueueTree#___skip___}
  */
  readonly skip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/queue_tree#bucket_size QueueTree#bucket_size}
  */
  readonly bucketSize?: string;
  /**
  * Maximal data rate which can be reached while the burst is active.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/queue_tree#burst_limit QueueTree#burst_limit}
  */
  readonly burstLimit?: string;
  /**
  * When average data rate is below this value - burst is allowed, as soon as average data rate reach this value - burst is denied (basically this is burst on/off switch). For optimal burst behavior this value should above `limit-at` value and below `max-limit` value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/queue_tree#burst_threshold QueueTree#burst_threshold}
  */
  readonly burstThreshold?: string;
  /**
  * Period of time, in seconds, over which the average data rate is calculated. This is NOT the time of actual burst.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/queue_tree#burst_time QueueTree#burst_time}
  */
  readonly burstTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/queue_tree#comment QueueTree#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/queue_tree#disabled QueueTree#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/queue_tree#id QueueTree#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Normal data rate that is guaranteed to a target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/queue_tree#limit_at QueueTree#limit_at}
  */
  readonly limitAt?: string;
  /**
  * Maximal data rate that is allowed for a target to reach.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/queue_tree#max_limit QueueTree#max_limit}
  */
  readonly maxLimit?: string;
  /**
  * Queue tree name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/queue_tree#name QueueTree#name}
  */
  readonly name: string;
  /**
  * Allows to use marked packets from `/ip firewall mangle`. Take look at this packet flow diagram. You need to make sure that packets are marked before the simple queues (before global-in HTB queue).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/queue_tree#packet_mark QueueTree#packet_mark}
  */
  readonly packetMark?: string[];
  /**
  * Assigns this queue as a child queue for selected target. Target queue can be HTB queue or any other previously created queue.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/queue_tree#parent QueueTree#parent}
  */
  readonly parent: string;
  /**
  * Prioritize one child queue over other child queue. Does not work on parent queues (if queue has at least one child). One is the highest, eight is the lowest priority. Child queue with higher priority will have chance to reach its `max-limit` before child with lower priority. Priority have nothing to do with bursts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/queue_tree#priority QueueTree#priority}
  */
  readonly priority?: number;
  /**
  * Choose the type of the queue.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/queue_tree#queue QueueTree#queue}
  */
  readonly queue?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/queue_tree routeros_queue_tree}
*/
export class QueueTree extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_queue_tree";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a QueueTree resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the QueueTree to import
  * @param importFromId The id of the existing QueueTree that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/queue_tree#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the QueueTree to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_queue_tree", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/queue_tree routeros_queue_tree} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options QueueTreeConfig
  */
  public constructor(scope: Construct, id: string, config: QueueTreeConfig) {
    super(scope, id, {
      terraformResourceType: 'routeros_queue_tree',
      terraformGeneratorMetadata: {
        providerName: 'routeros',
        providerVersion: '1.97.0',
        providerVersionConstraint: '1.97.0'
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
    this._id = config.id;
    this._limitAt = config.limitAt;
    this._maxLimit = config.maxLimit;
    this._name = config.name;
    this._packetMark = config.packetMark;
    this._parent = config.parent;
    this._priority = config.priority;
    this._queue = config.queue;
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

  // packet_mark - computed: false, optional: true, required: false
  private _packetMark?: string[]; 
  public get packetMark() {
    return cdktf.Fn.tolist(this.getListAttribute('packet_mark'));
  }
  public set packetMark(value: string[]) {
    this._packetMark = value;
  }
  public resetPacketMark() {
    this._packetMark = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetMarkInput() {
    return this._packetMark;
  }

  // parent - computed: false, optional: false, required: true
  private _parent?: string; 
  public get parent() {
    return this.getStringAttribute('parent');
  }
  public set parent(value: string) {
    this._parent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parentInput() {
    return this._parent;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
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
      id: cdktf.stringToTerraform(this._id),
      limit_at: cdktf.stringToTerraform(this._limitAt),
      max_limit: cdktf.stringToTerraform(this._maxLimit),
      name: cdktf.stringToTerraform(this._name),
      packet_mark: cdktf.listMapper(cdktf.stringToTerraform, false)(this._packetMark),
      parent: cdktf.stringToTerraform(this._parent),
      priority: cdktf.numberToTerraform(this._priority),
      queue: cdktf.stringToTerraform(this._queue),
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
      packet_mark: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._packetMark),
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
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      queue: {
        value: cdktf.stringToHclTerraform(this._queue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
