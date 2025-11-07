// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/redis_log_delivery
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RedisLogDeliveryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether to create an index when creating a log topic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/redis_log_delivery#create_index RedisLogDelivery#create_index}
  */
  readonly createIndex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/redis_log_delivery#id RedisLogDelivery#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Instance ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/redis_log_delivery#instance_id RedisLogDelivery#instance_id}
  */
  readonly instanceId: string;
  /**
  * The region where the log set is located; if not specified, the region where the instance is located will be used by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/redis_log_delivery#log_region RedisLogDelivery#log_region}
  */
  readonly logRegion?: string;
  /**
  * The ID of the log set being delivered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/redis_log_delivery#logset_id RedisLogDelivery#logset_id}
  */
  readonly logsetId?: string;
  /**
  * Log set name. If LogsetId does not specify a specific log set ID, please configure this parameter to set the log set name, and the system will automatically create a new log set with the specified name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/redis_log_delivery#logset_name RedisLogDelivery#logset_name}
  */
  readonly logsetName?: string;
  /**
  * Log storage time, defaults to 30 days, with an optional range of 1-3600 days.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/redis_log_delivery#period RedisLogDelivery#period}
  */
  readonly period?: number;
  /**
  * The ID of the topic being delivered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/redis_log_delivery#topic_id RedisLogDelivery#topic_id}
  */
  readonly topicId?: string;
  /**
  * Log topic name, required when TopicId is empty, a new log topic will be automatically created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/redis_log_delivery#topic_name RedisLogDelivery#topic_name}
  */
  readonly topicName?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/redis_log_delivery tencentcloud_redis_log_delivery}
*/
export class RedisLogDelivery extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_redis_log_delivery";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RedisLogDelivery resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RedisLogDelivery to import
  * @param importFromId The id of the existing RedisLogDelivery that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/redis_log_delivery#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RedisLogDelivery to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_redis_log_delivery", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/redis_log_delivery tencentcloud_redis_log_delivery} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RedisLogDeliveryConfig
  */
  public constructor(scope: Construct, id: string, config: RedisLogDeliveryConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_redis_log_delivery',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.35'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._createIndex = config.createIndex;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._logRegion = config.logRegion;
    this._logsetId = config.logsetId;
    this._logsetName = config.logsetName;
    this._period = config.period;
    this._topicId = config.topicId;
    this._topicName = config.topicName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_index - computed: true, optional: true, required: false
  private _createIndex?: boolean | cdktf.IResolvable; 
  public get createIndex() {
    return this.getBooleanAttribute('create_index');
  }
  public set createIndex(value: boolean | cdktf.IResolvable) {
    this._createIndex = value;
  }
  public resetCreateIndex() {
    this._createIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createIndexInput() {
    return this._createIndex;
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

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // log_region - computed: true, optional: true, required: false
  private _logRegion?: string; 
  public get logRegion() {
    return this.getStringAttribute('log_region');
  }
  public set logRegion(value: string) {
    this._logRegion = value;
  }
  public resetLogRegion() {
    this._logRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logRegionInput() {
    return this._logRegion;
  }

  // logset_id - computed: true, optional: true, required: false
  private _logsetId?: string; 
  public get logsetId() {
    return this.getStringAttribute('logset_id');
  }
  public set logsetId(value: string) {
    this._logsetId = value;
  }
  public resetLogsetId() {
    this._logsetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logsetIdInput() {
    return this._logsetId;
  }

  // logset_name - computed: true, optional: true, required: false
  private _logsetName?: string; 
  public get logsetName() {
    return this.getStringAttribute('logset_name');
  }
  public set logsetName(value: string) {
    this._logsetName = value;
  }
  public resetLogsetName() {
    this._logsetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logsetNameInput() {
    return this._logsetName;
  }

  // period - computed: true, optional: true, required: false
  private _period?: number; 
  public get period() {
    return this.getNumberAttribute('period');
  }
  public set period(value: number) {
    this._period = value;
  }
  public resetPeriod() {
    this._period = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period;
  }

  // topic_id - computed: true, optional: true, required: false
  private _topicId?: string; 
  public get topicId() {
    return this.getStringAttribute('topic_id');
  }
  public set topicId(value: string) {
    this._topicId = value;
  }
  public resetTopicId() {
    this._topicId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topicIdInput() {
    return this._topicId;
  }

  // topic_name - computed: true, optional: true, required: false
  private _topicName?: string; 
  public get topicName() {
    return this.getStringAttribute('topic_name');
  }
  public set topicName(value: string) {
    this._topicName = value;
  }
  public resetTopicName() {
    this._topicName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topicNameInput() {
    return this._topicName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      create_index: cdktf.booleanToTerraform(this._createIndex),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      log_region: cdktf.stringToTerraform(this._logRegion),
      logset_id: cdktf.stringToTerraform(this._logsetId),
      logset_name: cdktf.stringToTerraform(this._logsetName),
      period: cdktf.numberToTerraform(this._period),
      topic_id: cdktf.stringToTerraform(this._topicId),
      topic_name: cdktf.stringToTerraform(this._topicName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      create_index: {
        value: cdktf.booleanToHclTerraform(this._createIndex),
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
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_region: {
        value: cdktf.stringToHclTerraform(this._logRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logset_id: {
        value: cdktf.stringToHclTerraform(this._logsetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logset_name: {
        value: cdktf.stringToHclTerraform(this._logsetName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      period: {
        value: cdktf.numberToHclTerraform(this._period),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      topic_id: {
        value: cdktf.stringToHclTerraform(this._topicId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      topic_name: {
        value: cdktf.stringToHclTerraform(this._topicName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
