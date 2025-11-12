// https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/data-sources/msg_vpn_kafka_receiver_topic_binding
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSolacebrokerMsgVpnKafkaReceiverTopicBindingConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the Kafka Receiver.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/data-sources/msg_vpn_kafka_receiver_topic_binding#kafka_receiver_name DataSolacebrokerMsgVpnKafkaReceiverTopicBinding#kafka_receiver_name}
  */
  readonly kafkaReceiverName: string;
  /**
  * The name of the Message VPN.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/data-sources/msg_vpn_kafka_receiver_topic_binding#msg_vpn_name DataSolacebrokerMsgVpnKafkaReceiverTopicBinding#msg_vpn_name}
  */
  readonly msgVpnName: string;
  /**
  * The name of the Topic or a POSIX.2 regular expression starting with '^'.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/data-sources/msg_vpn_kafka_receiver_topic_binding#topic_name DataSolacebrokerMsgVpnKafkaReceiverTopicBinding#topic_name}
  */
  readonly topicName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/data-sources/msg_vpn_kafka_receiver_topic_binding solacebroker_msg_vpn_kafka_receiver_topic_binding}
*/
export class DataSolacebrokerMsgVpnKafkaReceiverTopicBinding extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "solacebroker_msg_vpn_kafka_receiver_topic_binding";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSolacebrokerMsgVpnKafkaReceiverTopicBinding resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSolacebrokerMsgVpnKafkaReceiverTopicBinding to import
  * @param importFromId The id of the existing DataSolacebrokerMsgVpnKafkaReceiverTopicBinding that should be imported. Refer to the {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/data-sources/msg_vpn_kafka_receiver_topic_binding#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSolacebrokerMsgVpnKafkaReceiverTopicBinding to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "solacebroker_msg_vpn_kafka_receiver_topic_binding", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/data-sources/msg_vpn_kafka_receiver_topic_binding solacebroker_msg_vpn_kafka_receiver_topic_binding} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSolacebrokerMsgVpnKafkaReceiverTopicBindingConfig
  */
  public constructor(scope: Construct, id: string, config: DataSolacebrokerMsgVpnKafkaReceiverTopicBindingConfig) {
    super(scope, id, {
      terraformResourceType: 'solacebroker_msg_vpn_kafka_receiver_topic_binding',
      terraformGeneratorMetadata: {
        providerName: 'solacebroker',
        providerVersion: '1.2.0',
        providerVersionConstraint: '1.2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._kafkaReceiverName = config.kafkaReceiverName;
    this._msgVpnName = config.msgVpnName;
    this._topicName = config.topicName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // initial_offset - computed: true, optional: false, required: false
  public get initialOffset() {
    return this.getStringAttribute('initial_offset');
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

  // local_key - computed: true, optional: false, required: false
  public get localKey() {
    return this.getStringAttribute('local_key');
  }

  // local_topic - computed: true, optional: false, required: false
  public get localTopic() {
    return this.getStringAttribute('local_topic');
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
      kafka_receiver_name: cdktf.stringToTerraform(this._kafkaReceiverName),
      msg_vpn_name: cdktf.stringToTerraform(this._msgVpnName),
      topic_name: cdktf.stringToTerraform(this._topicName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      kafka_receiver_name: {
        value: cdktf.stringToHclTerraform(this._kafkaReceiverName),
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
