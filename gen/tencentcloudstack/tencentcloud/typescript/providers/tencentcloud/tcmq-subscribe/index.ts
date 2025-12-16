// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/tcmq_subscribe
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TcmqSubscribeConfig extends cdktf.TerraformMetaArguments {
  /**
  * The number of `BindingKey` cannot exceed 5, and the length of each `BindingKey` cannot exceed 64 bytes. This field indicates the filtering policy for subscribing to and receiving messages. Each `BindingKey` includes up to 15 dots (namely up to 16 segments).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/tcmq_subscribe#binding_key TcmqSubscribe#binding_key}
  */
  readonly bindingKey?: string[];
  /**
  * `Endpoint` for notification receipt, which is distinguished by `Protocol`. For `http`, `Endpoint` must begin with `http://` and `host` can be a domain name or IP. For `Queue`, enter `QueueName`. Note that currently the push service cannot push messages to a VPC; therefore, if a VPC domain name or address is entered for `Endpoint`, pushed messages will not be received. Currently, messages can be pushed only to the public network and classic network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/tcmq_subscribe#endpoint TcmqSubscribe#endpoint}
  */
  readonly endpoint: string;
  /**
  * Message body tag (used for message filtering). The number of tags cannot exceed 5, and each tag can contain up to 16 characters. It is used in conjunction with the `MsgTag` parameter of `(Batch)PublishMessage`. Rules: 1. If `FilterTag` is not configured, no matter whether `MsgTag` is configured, the subscription will receive all messages published to the topic; 2. If the array of `FilterTag` values has a value, only when at least one of the values in the array also exists in the array of `MsgTag` values (i.e., `FilterTag` and `MsgTag` have an intersection) can the subscription receive messages published to the topic; 3. If the array of `FilterTag` values has a value, but `MsgTag` is not configured, then no message published to the topic will be received, which can be considered as a special case of rule 2 as `FilterTag` and `MsgTag` do not intersect in this case. The overall design idea of rules is based on the intention of the subscriber.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/tcmq_subscribe#filter_tags TcmqSubscribe#filter_tags}
  */
  readonly filterTags?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/tcmq_subscribe#id TcmqSubscribe#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Push content format. Valid values: 1. JSON; 2. SIMPLIFIED, i.e., the raw format. If `Protocol` is `queue`, this value must be `SIMPLIFIED`. If `Protocol` is `http`, both options are acceptable, and the default value is `JSON`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/tcmq_subscribe#notify_content_format TcmqSubscribe#notify_content_format}
  */
  readonly notifyContentFormat?: string;
  /**
  * CMQ push server retry policy in case an error occurs while pushing a message to `Endpoint`. Valid values: 1. `BACKOFF_RETRY`: backoff retry, which is to retry at a fixed interval, discard the message after a certain number of retries, and continue to push the next message; 2. `EXPONENTIAL_DECAY_RETRY`: exponential decay retry, which is to retry at an exponentially increasing interval, such as 1s, 2s, 4s, 8s, and so on. As a message can be retained in a topic for one day, failed messages will be discarded at most after one day of retry. Default value: `EXPONENTIAL_DECAY_RETRY`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/tcmq_subscribe#notify_strategy TcmqSubscribe#notify_strategy}
  */
  readonly notifyStrategy?: string;
  /**
  * ubscription protocol. Currently, two protocols are supported: `http` and `queue`. To use the `http` protocol, you need to build your own web server to receive messages. With the `queue` protocol, messages are automatically pushed to a CMQ queue and you can pull them concurrently.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/tcmq_subscribe#protocol TcmqSubscribe#protocol}
  */
  readonly protocol: string;
  /**
  * Subscription name, which must be unique in the same topic under the same account in the same region. It can contain up to 64 letters, digits, and hyphens and must begin with a letter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/tcmq_subscribe#subscription_name TcmqSubscribe#subscription_name}
  */
  readonly subscriptionName: string;
  /**
  * Tag description list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/tcmq_subscribe#tags TcmqSubscribe#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Topic name, which must be unique in the same topic under the same account in the same region. It can contain up to 64 letters, digits, and hyphens and must begin with a letter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/tcmq_subscribe#topic_name TcmqSubscribe#topic_name}
  */
  readonly topicName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/tcmq_subscribe tencentcloud_tcmq_subscribe}
*/
export class TcmqSubscribe extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_tcmq_subscribe";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TcmqSubscribe resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TcmqSubscribe to import
  * @param importFromId The id of the existing TcmqSubscribe that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/tcmq_subscribe#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TcmqSubscribe to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_tcmq_subscribe", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/tcmq_subscribe tencentcloud_tcmq_subscribe} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TcmqSubscribeConfig
  */
  public constructor(scope: Construct, id: string, config: TcmqSubscribeConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_tcmq_subscribe',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.45',
        providerVersionConstraint: '1.82.45'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bindingKey = config.bindingKey;
    this._endpoint = config.endpoint;
    this._filterTags = config.filterTags;
    this._id = config.id;
    this._notifyContentFormat = config.notifyContentFormat;
    this._notifyStrategy = config.notifyStrategy;
    this._protocol = config.protocol;
    this._subscriptionName = config.subscriptionName;
    this._tags = config.tags;
    this._topicName = config.topicName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // binding_key - computed: false, optional: true, required: false
  private _bindingKey?: string[]; 
  public get bindingKey() {
    return cdktf.Fn.tolist(this.getListAttribute('binding_key'));
  }
  public set bindingKey(value: string[]) {
    this._bindingKey = value;
  }
  public resetBindingKey() {
    this._bindingKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindingKeyInput() {
    return this._bindingKey;
  }

  // endpoint - computed: false, optional: false, required: true
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // filter_tags - computed: false, optional: true, required: false
  private _filterTags?: string[]; 
  public get filterTags() {
    return cdktf.Fn.tolist(this.getListAttribute('filter_tags'));
  }
  public set filterTags(value: string[]) {
    this._filterTags = value;
  }
  public resetFilterTags() {
    this._filterTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterTagsInput() {
    return this._filterTags;
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

  // notify_content_format - computed: false, optional: true, required: false
  private _notifyContentFormat?: string; 
  public get notifyContentFormat() {
    return this.getStringAttribute('notify_content_format');
  }
  public set notifyContentFormat(value: string) {
    this._notifyContentFormat = value;
  }
  public resetNotifyContentFormat() {
    this._notifyContentFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyContentFormatInput() {
    return this._notifyContentFormat;
  }

  // notify_strategy - computed: false, optional: true, required: false
  private _notifyStrategy?: string; 
  public get notifyStrategy() {
    return this.getStringAttribute('notify_strategy');
  }
  public set notifyStrategy(value: string) {
    this._notifyStrategy = value;
  }
  public resetNotifyStrategy() {
    this._notifyStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyStrategyInput() {
    return this._notifyStrategy;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // subscription_name - computed: false, optional: false, required: true
  private _subscriptionName?: string; 
  public get subscriptionName() {
    return this.getStringAttribute('subscription_name');
  }
  public set subscriptionName(value: string) {
    this._subscriptionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionNameInput() {
    return this._subscriptionName;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      binding_key: cdktf.listMapper(cdktf.stringToTerraform, false)(this._bindingKey),
      endpoint: cdktf.stringToTerraform(this._endpoint),
      filter_tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._filterTags),
      id: cdktf.stringToTerraform(this._id),
      notify_content_format: cdktf.stringToTerraform(this._notifyContentFormat),
      notify_strategy: cdktf.stringToTerraform(this._notifyStrategy),
      protocol: cdktf.stringToTerraform(this._protocol),
      subscription_name: cdktf.stringToTerraform(this._subscriptionName),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      topic_name: cdktf.stringToTerraform(this._topicName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      binding_key: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._bindingKey),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      endpoint: {
        value: cdktf.stringToHclTerraform(this._endpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter_tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._filterTags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notify_content_format: {
        value: cdktf.stringToHclTerraform(this._notifyContentFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notify_strategy: {
        value: cdktf.stringToHclTerraform(this._notifyStrategy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subscription_name: {
        value: cdktf.stringToHclTerraform(this._subscriptionName),
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
