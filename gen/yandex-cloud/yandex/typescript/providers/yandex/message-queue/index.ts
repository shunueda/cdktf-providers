// https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/message_queue
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MessageQueueConfig extends cdktf.TerraformMetaArguments {
  /**
  * The [access key](https://yandex.cloud/docs/iam/operations/sa/create-access-key) to use when applying changes. If omitted, `ymq_access_key` specified in provider config is used. For more information see [documentation](https://yandex.cloud/docs/message-queue/quickstart).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/message_queue#access_key MessageQueue#access_key}
  */
  readonly accessKey?: string;
  /**
  * Enables [content-based deduplication](https://yandex.cloud/docs/message-queue/concepts/deduplication#content-based-deduplication). Can be used only if queue is [FIFO](https://yandex.cloud/docs/message-queue/concepts/queue#fifo-queues).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/message_queue#content_based_deduplication MessageQueue#content_based_deduplication}
  */
  readonly contentBasedDeduplication?: boolean | cdktf.IResolvable;
  /**
  * Number of seconds to [delay the message from being available for processing](https://yandex.cloud/docs/message-queue/concepts/delay-queues#delay-queues). Valid values: from 0 to 900 seconds (15 minutes). Default: 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/message_queue#delay_seconds MessageQueue#delay_seconds}
  */
  readonly delaySeconds?: number;
  /**
  * Is this queue [FIFO](https://yandex.cloud/docs/message-queue/concepts/queue#fifo-queues). If this parameter is not used, a standard queue is created. You cannot change the parameter value for a created queue.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/message_queue#fifo_queue MessageQueue#fifo_queue}
  */
  readonly fifoQueue?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/message_queue#id MessageQueue#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Maximum message size in bytes. Valid values: from 1024 bytes (1 KB) to 262144 bytes (256 KB). Default: 262144 (256 KB). For more information see [documentation](https://yandex.cloud/docs/message-queue/api-ref/queue/CreateQueue).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/message_queue#max_message_size MessageQueue#max_message_size}
  */
  readonly maxMessageSize?: number;
  /**
  * The length of time in seconds to retain a message. Valid values: from 60 seconds (1 minute) to 1209600 seconds (14 days). Default: 345600 (4 days). For more information see [documentation](https://yandex.cloud/docs/message-queue/api-ref/queue/CreateQueue).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/message_queue#message_retention_seconds MessageQueue#message_retention_seconds}
  */
  readonly messageRetentionSeconds?: number;
  /**
  * Queue name. The maximum length is 80 characters. You can use numbers, letters, underscores, and hyphens in the name. The name of a FIFO queue must end with the `.fifo` suffix. If not specified, random name will be generated. Conflicts with `name_prefix`. For more information see [documentation](https://yandex.cloud/docs/message-queue/api-ref/queue/CreateQueue).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/message_queue#name MessageQueue#name}
  */
  readonly name?: string;
  /**
  * Generates random name with the specified prefix. Conflicts with `name`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/message_queue#name_prefix MessageQueue#name_prefix}
  */
  readonly namePrefix?: string;
  /**
  * Wait time for the [ReceiveMessage](https://yandex.cloud/docs/message-queue/api-ref/message/ReceiveMessage) method (for long polling), in seconds. Valid values: from 0 to 20 seconds. Default: 0. For more information about long polling see [documentation](https://yandex.cloud/docs/message-queue/concepts/long-polling).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/message_queue#receive_wait_time_seconds MessageQueue#receive_wait_time_seconds}
  */
  readonly receiveWaitTimeSeconds?: number;
  /**
  * Message redrive policy in [Dead Letter Queue](https://yandex.cloud/docs/message-queue/concepts/dlq). The source queue and DLQ must be the same type: for FIFO queues, the DLQ must also be a FIFO queue. For more information about redrive policy see [documentation](https://yandex.cloud/docs/message-queue/api-ref/queue/CreateQueue). Also you can use example in this page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/message_queue#redrive_policy MessageQueue#redrive_policy}
  */
  readonly redrivePolicy?: string;
  /**
  * ID of the region where the message queue is located at. The default is 'ru-central1'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/message_queue#region_id MessageQueue#region_id}
  */
  readonly regionId?: string;
  /**
  * The [secret key](https://yandex.cloud/docs/iam/operations/sa/create-access-key) to use when applying changes. If omitted, `ymq_secret_key` specified in provider config is used. For more information see [documentation](https://yandex.cloud/docs/message-queue/quickstart).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/message_queue#secret_key MessageQueue#secret_key}
  */
  readonly secretKey?: string;
  /**
  * SQS tags
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/message_queue#tags MessageQueue#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * [Visibility timeout](https://yandex.cloud/docs/message-queue/concepts/visibility-timeout) for messages in a queue, specified in seconds. Valid values: from 0 to 43200 seconds (12 hours). Default: 30.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/message_queue#visibility_timeout_seconds MessageQueue#visibility_timeout_seconds}
  */
  readonly visibilityTimeoutSeconds?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/message_queue yandex_message_queue}
*/
export class MessageQueue extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_message_queue";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MessageQueue resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MessageQueue to import
  * @param importFromId The id of the existing MessageQueue that should be imported. Refer to the {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/message_queue#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MessageQueue to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "yandex_message_queue", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/message_queue yandex_message_queue} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MessageQueueConfig = {}
  */
  public constructor(scope: Construct, id: string, config: MessageQueueConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'yandex_message_queue',
      terraformGeneratorMetadata: {
        providerName: 'yandex',
        providerVersion: '0.169.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessKey = config.accessKey;
    this._contentBasedDeduplication = config.contentBasedDeduplication;
    this._delaySeconds = config.delaySeconds;
    this._fifoQueue = config.fifoQueue;
    this._id = config.id;
    this._maxMessageSize = config.maxMessageSize;
    this._messageRetentionSeconds = config.messageRetentionSeconds;
    this._name = config.name;
    this._namePrefix = config.namePrefix;
    this._receiveWaitTimeSeconds = config.receiveWaitTimeSeconds;
    this._redrivePolicy = config.redrivePolicy;
    this._regionId = config.regionId;
    this._secretKey = config.secretKey;
    this._tags = config.tags;
    this._visibilityTimeoutSeconds = config.visibilityTimeoutSeconds;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // content_based_deduplication - computed: false, optional: true, required: false
  private _contentBasedDeduplication?: boolean | cdktf.IResolvable; 
  public get contentBasedDeduplication() {
    return this.getBooleanAttribute('content_based_deduplication');
  }
  public set contentBasedDeduplication(value: boolean | cdktf.IResolvable) {
    this._contentBasedDeduplication = value;
  }
  public resetContentBasedDeduplication() {
    this._contentBasedDeduplication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentBasedDeduplicationInput() {
    return this._contentBasedDeduplication;
  }

  // delay_seconds - computed: false, optional: true, required: false
  private _delaySeconds?: number; 
  public get delaySeconds() {
    return this.getNumberAttribute('delay_seconds');
  }
  public set delaySeconds(value: number) {
    this._delaySeconds = value;
  }
  public resetDelaySeconds() {
    this._delaySeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delaySecondsInput() {
    return this._delaySeconds;
  }

  // fifo_queue - computed: false, optional: true, required: false
  private _fifoQueue?: boolean | cdktf.IResolvable; 
  public get fifoQueue() {
    return this.getBooleanAttribute('fifo_queue');
  }
  public set fifoQueue(value: boolean | cdktf.IResolvable) {
    this._fifoQueue = value;
  }
  public resetFifoQueue() {
    this._fifoQueue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fifoQueueInput() {
    return this._fifoQueue;
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

  // max_message_size - computed: false, optional: true, required: false
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

  // message_retention_seconds - computed: false, optional: true, required: false
  private _messageRetentionSeconds?: number; 
  public get messageRetentionSeconds() {
    return this.getNumberAttribute('message_retention_seconds');
  }
  public set messageRetentionSeconds(value: number) {
    this._messageRetentionSeconds = value;
  }
  public resetMessageRetentionSeconds() {
    this._messageRetentionSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageRetentionSecondsInput() {
    return this._messageRetentionSeconds;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // name_prefix - computed: false, optional: true, required: false
  private _namePrefix?: string; 
  public get namePrefix() {
    return this.getStringAttribute('name_prefix');
  }
  public set namePrefix(value: string) {
    this._namePrefix = value;
  }
  public resetNamePrefix() {
    this._namePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namePrefixInput() {
    return this._namePrefix;
  }

  // receive_wait_time_seconds - computed: false, optional: true, required: false
  private _receiveWaitTimeSeconds?: number; 
  public get receiveWaitTimeSeconds() {
    return this.getNumberAttribute('receive_wait_time_seconds');
  }
  public set receiveWaitTimeSeconds(value: number) {
    this._receiveWaitTimeSeconds = value;
  }
  public resetReceiveWaitTimeSeconds() {
    this._receiveWaitTimeSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get receiveWaitTimeSecondsInput() {
    return this._receiveWaitTimeSeconds;
  }

  // redrive_policy - computed: false, optional: true, required: false
  private _redrivePolicy?: string; 
  public get redrivePolicy() {
    return this.getStringAttribute('redrive_policy');
  }
  public set redrivePolicy(value: string) {
    this._redrivePolicy = value;
  }
  public resetRedrivePolicy() {
    this._redrivePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redrivePolicyInput() {
    return this._redrivePolicy;
  }

  // region_id - computed: false, optional: true, required: false
  private _regionId?: string; 
  public get regionId() {
    return this.getStringAttribute('region_id');
  }
  public set regionId(value: string) {
    this._regionId = value;
  }
  public resetRegionId() {
    this._regionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionIdInput() {
    return this._regionId;
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

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // visibility_timeout_seconds - computed: false, optional: true, required: false
  private _visibilityTimeoutSeconds?: number; 
  public get visibilityTimeoutSeconds() {
    return this.getNumberAttribute('visibility_timeout_seconds');
  }
  public set visibilityTimeoutSeconds(value: number) {
    this._visibilityTimeoutSeconds = value;
  }
  public resetVisibilityTimeoutSeconds() {
    this._visibilityTimeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityTimeoutSecondsInput() {
    return this._visibilityTimeoutSeconds;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_key: cdktf.stringToTerraform(this._accessKey),
      content_based_deduplication: cdktf.booleanToTerraform(this._contentBasedDeduplication),
      delay_seconds: cdktf.numberToTerraform(this._delaySeconds),
      fifo_queue: cdktf.booleanToTerraform(this._fifoQueue),
      id: cdktf.stringToTerraform(this._id),
      max_message_size: cdktf.numberToTerraform(this._maxMessageSize),
      message_retention_seconds: cdktf.numberToTerraform(this._messageRetentionSeconds),
      name: cdktf.stringToTerraform(this._name),
      name_prefix: cdktf.stringToTerraform(this._namePrefix),
      receive_wait_time_seconds: cdktf.numberToTerraform(this._receiveWaitTimeSeconds),
      redrive_policy: cdktf.stringToTerraform(this._redrivePolicy),
      region_id: cdktf.stringToTerraform(this._regionId),
      secret_key: cdktf.stringToTerraform(this._secretKey),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      visibility_timeout_seconds: cdktf.numberToTerraform(this._visibilityTimeoutSeconds),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_key: {
        value: cdktf.stringToHclTerraform(this._accessKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      content_based_deduplication: {
        value: cdktf.booleanToHclTerraform(this._contentBasedDeduplication),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      delay_seconds: {
        value: cdktf.numberToHclTerraform(this._delaySeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fifo_queue: {
        value: cdktf.booleanToHclTerraform(this._fifoQueue),
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
      max_message_size: {
        value: cdktf.numberToHclTerraform(this._maxMessageSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      message_retention_seconds: {
        value: cdktf.numberToHclTerraform(this._messageRetentionSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name_prefix: {
        value: cdktf.stringToHclTerraform(this._namePrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      receive_wait_time_seconds: {
        value: cdktf.numberToHclTerraform(this._receiveWaitTimeSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      redrive_policy: {
        value: cdktf.stringToHclTerraform(this._redrivePolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region_id: {
        value: cdktf.stringToHclTerraform(this._regionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secret_key: {
        value: cdktf.stringToHclTerraform(this._secretKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      visibility_timeout_seconds: {
        value: cdktf.numberToHclTerraform(this._visibilityTimeoutSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
