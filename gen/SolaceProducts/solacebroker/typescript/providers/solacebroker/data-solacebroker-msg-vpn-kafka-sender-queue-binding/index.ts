// https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/data-sources/msg_vpn_kafka_sender_queue_binding
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSolacebrokerMsgVpnKafkaSenderQueueBindingConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the Kafka Sender.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/data-sources/msg_vpn_kafka_sender_queue_binding#kafka_sender_name DataSolacebrokerMsgVpnKafkaSenderQueueBinding#kafka_sender_name}
  */
  readonly kafkaSenderName: string;
  /**
  * The name of the Message VPN.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/data-sources/msg_vpn_kafka_sender_queue_binding#msg_vpn_name DataSolacebrokerMsgVpnKafkaSenderQueueBinding#msg_vpn_name}
  */
  readonly msgVpnName: string;
  /**
  * The name of the Queue.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/data-sources/msg_vpn_kafka_sender_queue_binding#queue_name DataSolacebrokerMsgVpnKafkaSenderQueueBinding#queue_name}
  */
  readonly queueName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/data-sources/msg_vpn_kafka_sender_queue_binding solacebroker_msg_vpn_kafka_sender_queue_binding}
*/
export class DataSolacebrokerMsgVpnKafkaSenderQueueBinding extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "solacebroker_msg_vpn_kafka_sender_queue_binding";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSolacebrokerMsgVpnKafkaSenderQueueBinding resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSolacebrokerMsgVpnKafkaSenderQueueBinding to import
  * @param importFromId The id of the existing DataSolacebrokerMsgVpnKafkaSenderQueueBinding that should be imported. Refer to the {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/data-sources/msg_vpn_kafka_sender_queue_binding#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSolacebrokerMsgVpnKafkaSenderQueueBinding to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "solacebroker_msg_vpn_kafka_sender_queue_binding", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/data-sources/msg_vpn_kafka_sender_queue_binding solacebroker_msg_vpn_kafka_sender_queue_binding} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSolacebrokerMsgVpnKafkaSenderQueueBindingConfig
  */
  public constructor(scope: Construct, id: string, config: DataSolacebrokerMsgVpnKafkaSenderQueueBindingConfig) {
    super(scope, id, {
      terraformResourceType: 'solacebroker_msg_vpn_kafka_sender_queue_binding',
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
    this._kafkaSenderName = config.kafkaSenderName;
    this._msgVpnName = config.msgVpnName;
    this._queueName = config.queueName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ack_mode - computed: true, optional: false, required: false
  public get ackMode() {
    return this.getStringAttribute('ack_mode');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // kafka_sender_name - computed: false, optional: false, required: true
  private _kafkaSenderName?: string; 
  public get kafkaSenderName() {
    return this.getStringAttribute('kafka_sender_name');
  }
  public set kafkaSenderName(value: string) {
    this._kafkaSenderName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaSenderNameInput() {
    return this._kafkaSenderName;
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

  // partition_consistent_hash - computed: true, optional: false, required: false
  public get partitionConsistentHash() {
    return this.getStringAttribute('partition_consistent_hash');
  }

  // partition_explicit_number - computed: true, optional: false, required: false
  public get partitionExplicitNumber() {
    return this.getNumberAttribute('partition_explicit_number');
  }

  // partition_random_fallback_enabled - computed: true, optional: false, required: false
  public get partitionRandomFallbackEnabled() {
    return this.getBooleanAttribute('partition_random_fallback_enabled');
  }

  // partition_scheme - computed: true, optional: false, required: false
  public get partitionScheme() {
    return this.getStringAttribute('partition_scheme');
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

  // remote_key - computed: true, optional: false, required: false
  public get remoteKey() {
    return this.getStringAttribute('remote_key');
  }

  // remote_topic - computed: true, optional: false, required: false
  public get remoteTopic() {
    return this.getStringAttribute('remote_topic');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      kafka_sender_name: cdktf.stringToTerraform(this._kafkaSenderName),
      msg_vpn_name: cdktf.stringToTerraform(this._msgVpnName),
      queue_name: cdktf.stringToTerraform(this._queueName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      kafka_sender_name: {
        value: cdktf.stringToHclTerraform(this._kafkaSenderName),
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
      queue_name: {
        value: cdktf.stringToHclTerraform(this._queueName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
