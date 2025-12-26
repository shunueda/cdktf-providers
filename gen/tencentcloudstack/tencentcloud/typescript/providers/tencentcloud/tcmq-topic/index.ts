// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/tcmq_topic
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TcmqTopicConfig extends cdktf.TerraformMetaArguments {
  /**
  * Used to specify the message match policy for the topic. `1`: tag match policy (default value); `2`: routing match policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/tcmq_topic#filter_type TcmqTopic#filter_type}
  */
  readonly filterType?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/tcmq_topic#id TcmqTopic#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Maximum message length. Value range: 1024-65536 bytes (i.e., 1-64 KB). Default value: 65536.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/tcmq_topic#max_msg_size TcmqTopic#max_msg_size}
  */
  readonly maxMsgSize?: number;
  /**
  * Message retention period. Value range: 60-86400 seconds (i.e., 1 minute-1 day). Default value: 86400.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/tcmq_topic#msg_retention_seconds TcmqTopic#msg_retention_seconds}
  */
  readonly msgRetentionSeconds?: number;
  /**
  * Topic name, which must be unique in the same topic under the same account in the same region. It can contain up to 64 letters, digits, and hyphens and must begin with a letter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/tcmq_topic#topic_name TcmqTopic#topic_name}
  */
  readonly topicName: string;
  /**
  * Whether to enable message trace. true: yes; false: no. If this field is left empty, the feature will not be enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/tcmq_topic#trace TcmqTopic#trace}
  */
  readonly trace?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/tcmq_topic tencentcloud_tcmq_topic}
*/
export class TcmqTopic extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_tcmq_topic";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TcmqTopic resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TcmqTopic to import
  * @param importFromId The id of the existing TcmqTopic that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/tcmq_topic#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TcmqTopic to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_tcmq_topic", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/tcmq_topic tencentcloud_tcmq_topic} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TcmqTopicConfig
  */
  public constructor(scope: Construct, id: string, config: TcmqTopicConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_tcmq_topic',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.49',
        providerVersionConstraint: '1.82.49'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._filterType = config.filterType;
    this._id = config.id;
    this._maxMsgSize = config.maxMsgSize;
    this._msgRetentionSeconds = config.msgRetentionSeconds;
    this._topicName = config.topicName;
    this._trace = config.trace;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // filter_type - computed: false, optional: true, required: false
  private _filterType?: number; 
  public get filterType() {
    return this.getNumberAttribute('filter_type');
  }
  public set filterType(value: number) {
    this._filterType = value;
  }
  public resetFilterType() {
    this._filterType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterTypeInput() {
    return this._filterType;
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

  // topic_name - computed: false, optional: false, required: true
  private _topicName?: string; 
  public get topicName() {
    return this.getStringAttribute('topic_name');
  }
  public set topicName(value: string) {
    this._topicName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topicNameInput() {
    return this._topicName;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filter_type: cdktf.numberToTerraform(this._filterType),
      id: cdktf.stringToTerraform(this._id),
      max_msg_size: cdktf.numberToTerraform(this._maxMsgSize),
      msg_retention_seconds: cdktf.numberToTerraform(this._msgRetentionSeconds),
      topic_name: cdktf.stringToTerraform(this._topicName),
      trace: cdktf.booleanToTerraform(this._trace),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      filter_type: {
        value: cdktf.numberToHclTerraform(this._filterType),
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
      max_msg_size: {
        value: cdktf.numberToHclTerraform(this._maxMsgSize),
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
      topic_name: {
        value: cdktf.stringToHclTerraform(this._topicName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trace: {
        value: cdktf.booleanToHclTerraform(this._trace),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
