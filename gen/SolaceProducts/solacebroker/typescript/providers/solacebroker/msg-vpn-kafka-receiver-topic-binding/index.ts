// https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/resources/msg_vpn_kafka_receiver_topic_binding
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MsgVpnKafkaReceiverTopicBindingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable or disable this topic binding of the Kafka Receiver.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/resources/msg_vpn_kafka_receiver_topic_binding#enabled MsgVpnKafkaReceiverTopicBinding#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The initial offset to consume from the Kafka Topic if no member of the group has consumed and committed any offset already, or if the last committed offset has been deleted. Offsets are unique per partition.
  * 
  * This corresponds to the Kafka consumer API `auto.offset.reset` configuration setting.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `"end"`. The allowed values and their meaning are:
  * 
  * <pre>
  * "beginning" - Start with the earliest offset available.
  * "end" - Start with new offsets only.
  * </pre>
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/resources/msg_vpn_kafka_receiver_topic_binding#initial_offset MsgVpnKafkaReceiverTopicBinding#initial_offset}
  */
  readonly initialOffset?: string;
  /**
  * The name of the Kafka Receiver.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/resources/msg_vpn_kafka_receiver_topic_binding#kafka_receiver_name MsgVpnKafkaReceiverTopicBinding#kafka_receiver_name}
  */
  readonly kafkaReceiverName: string;
  /**
  * The Substitution Expression used to generate the key for each message received from Kafka. This expression can include fields extracted from the metadata of each individual Kafka message as it is received from the Kafka Topic.
  * 
  * If empty, no key is included for each message as it is published into Solace.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/resources/msg_vpn_kafka_receiver_topic_binding#local_key MsgVpnKafkaReceiverTopicBinding#local_key}
  */
  readonly localKey?: string;
  /**
  * The Substitution Expression used to generate the Solace Topic for each message received from Kafka. This expression can include data extracted from the metadata of each individual Kafka message as it is received from the Kafka Topic.
  * 
  * If empty, the Topic Binding will not be operational.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/resources/msg_vpn_kafka_receiver_topic_binding#local_topic MsgVpnKafkaReceiverTopicBinding#local_topic}
  */
  readonly localTopic?: string;
  /**
  * The name of the Message VPN.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/resources/msg_vpn_kafka_receiver_topic_binding#msg_vpn_name MsgVpnKafkaReceiverTopicBinding#msg_vpn_name}
  */
  readonly msgVpnName: string;
  /**
  * The name of the Topic or a POSIX.2 regular expression starting with '^'.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/resources/msg_vpn_kafka_receiver_topic_binding#topic_name MsgVpnKafkaReceiverTopicBinding#topic_name}
  */
  readonly topicName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/resources/msg_vpn_kafka_receiver_topic_binding solacebroker_msg_vpn_kafka_receiver_topic_binding}
*/
export class MsgVpnKafkaReceiverTopicBinding extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "solacebroker_msg_vpn_kafka_receiver_topic_binding";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MsgVpnKafkaReceiverTopicBinding resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MsgVpnKafkaReceiverTopicBinding to import
  * @param importFromId The id of the existing MsgVpnKafkaReceiverTopicBinding that should be imported. Refer to the {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/resources/msg_vpn_kafka_receiver_topic_binding#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MsgVpnKafkaReceiverTopicBinding to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "solacebroker_msg_vpn_kafka_receiver_topic_binding", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/resources/msg_vpn_kafka_receiver_topic_binding solacebroker_msg_vpn_kafka_receiver_topic_binding} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MsgVpnKafkaReceiverTopicBindingConfig
  */
  public constructor(scope: Construct, id: string, config: MsgVpnKafkaReceiverTopicBindingConfig) {
    super(scope, id, {
      terraformResourceType: 'solacebroker_msg_vpn_kafka_receiver_topic_binding',
      terraformGeneratorMetadata: {
        providerName: 'solacebroker',
        providerVersion: '1.3.0',
        providerVersionConstraint: '1.3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enabled = config.enabled;
    this._initialOffset = config.initialOffset;
    this._kafkaReceiverName = config.kafkaReceiverName;
    this._localKey = config.localKey;
    this._localTopic = config.localTopic;
    this._msgVpnName = config.msgVpnName;
    this._topicName = config.topicName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // initial_offset - computed: false, optional: true, required: false
  private _initialOffset?: string; 
  public get initialOffset() {
    return this.getStringAttribute('initial_offset');
  }
  public set initialOffset(value: string) {
    this._initialOffset = value;
  }
  public resetInitialOffset() {
    this._initialOffset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialOffsetInput() {
    return this._initialOffset;
  }

  // kafka_receiver_name - computed: false, optional: false, required: true
  private _kafkaReceiverName?: string; 
  public get kafkaReceiverName() {
    return this.getStringAttribute('kafka_receiver_name');
  }
  public set kafkaReceiverName(value: string) {
    this._kafkaReceiverName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaReceiverNameInput() {
    return this._kafkaReceiverName;
  }

  // local_key - computed: false, optional: true, required: false
  private _localKey?: string; 
  public get localKey() {
    return this.getStringAttribute('local_key');
  }
  public set localKey(value: string) {
    this._localKey = value;
  }
  public resetLocalKey() {
    this._localKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localKeyInput() {
    return this._localKey;
  }

  // local_topic - computed: false, optional: true, required: false
  private _localTopic?: string; 
  public get localTopic() {
    return this.getStringAttribute('local_topic');
  }
  public set localTopic(value: string) {
    this._localTopic = value;
  }
  public resetLocalTopic() {
    this._localTopic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localTopicInput() {
    return this._localTopic;
  }

  // msg_vpn_name - computed: false, optional: false, required: true
  private _msgVpnName?: string; 
  public get msgVpnName() {
    return this.getStringAttribute('msg_vpn_name');
  }
  public set msgVpnName(value: string) {
    this._msgVpnName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get msgVpnNameInput() {
    return this._msgVpnName;
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
      enabled: cdktf.booleanToTerraform(this._enabled),
      initial_offset: cdktf.stringToTerraform(this._initialOffset),
      kafka_receiver_name: cdktf.stringToTerraform(this._kafkaReceiverName),
      local_key: cdktf.stringToTerraform(this._localKey),
      local_topic: cdktf.stringToTerraform(this._localTopic),
      msg_vpn_name: cdktf.stringToTerraform(this._msgVpnName),
      topic_name: cdktf.stringToTerraform(this._topicName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      initial_offset: {
        value: cdktf.stringToHclTerraform(this._initialOffset),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kafka_receiver_name: {
        value: cdktf.stringToHclTerraform(this._kafkaReceiverName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      local_key: {
        value: cdktf.stringToHclTerraform(this._localKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      local_topic: {
        value: cdktf.stringToHclTerraform(this._localTopic),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      msg_vpn_name: {
        value: cdktf.stringToHclTerraform(this._msgVpnName),
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
