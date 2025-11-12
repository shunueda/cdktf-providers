// https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_kafka_sender_queue_binding
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MsgVpnKafkaSenderQueueBindingConfig extends cdktf.TerraformMetaArguments {
  /**
  * The number of acks required from the remote Kafka broker. When "none" messages are delivered at-most-once. When "one" or "all" messages are delivered at-least-once but may be reordered. This must be configured as "all" for an idempotent Kafka Sender, otherwise the Queue Binding will be operationally down.
  * 
  * This corresponds to the Kafka producer API `acks` configuration setting.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `"all"`. The allowed values and their meaning are:
  * 
  * <pre>
  * "none" - No Acks.
  * "one" - Leader Ack Only.
  * "all" - All Replica Acks.
  * </pre>
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_kafka_sender_queue_binding#ack_mode MsgVpnKafkaSenderQueueBinding#ack_mode}
  */
  readonly ackMode?: string;
  /**
  * Enable or disable this queue binding of the Kafka Sender.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_kafka_sender_queue_binding#enabled MsgVpnKafkaSenderQueueBinding#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The name of the Kafka Sender.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_kafka_sender_queue_binding#kafka_sender_name MsgVpnKafkaSenderQueueBinding#kafka_sender_name}
  */
  readonly kafkaSenderName: string;
  /**
  * The name of the Message VPN.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_kafka_sender_queue_binding#msg_vpn_name MsgVpnKafkaSenderQueueBinding#msg_vpn_name}
  */
  readonly msgVpnName: string;
  /**
  * The hash algorithm to use for consistent partition selection.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `"crc"`. The allowed values and their meaning are:
  * 
  * <pre>
  * "crc" - CRC Hash.
  * "murmur2" - Murmer2 Hash.
  * "fnv1a" - Fowler-Noll-Vo 1a Hash.
  * </pre>
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_kafka_sender_queue_binding#partition_consistent_hash MsgVpnKafkaSenderQueueBinding#partition_consistent_hash}
  */
  readonly partitionConsistentHash?: string;
  /**
  * The partition number to use for explicit partition selection.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_kafka_sender_queue_binding#partition_explicit_number MsgVpnKafkaSenderQueueBinding#partition_explicit_number}
  */
  readonly partitionExplicitNumber?: number;
  /**
  * Enable or disable fallback to the random partition selection scheme when the consistent partition scheme is being used but no partition key is available for the message. When enabled a random partition will be selected for each unkeyed messages, otherwise some partition will be selected for groups of unkeyed messages.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_kafka_sender_queue_binding#partition_random_fallback_enabled MsgVpnKafkaSenderQueueBinding#partition_random_fallback_enabled}
  */
  readonly partitionRandomFallbackEnabled?: boolean | cdktf.IResolvable;
  /**
  * The partitioning scheme used to select a partition of the topic on the Kafka cluster to send messages to.
  * 
  * This corresponds to the Kafka producer API `partitioner.class` configuration setting.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `"consistent"`. The allowed values and their meaning are:
  * 
  * <pre>
  * "consistent" - Select a consistent partition for each key value. A hash of the key will be used to select the partition number.
  * "explicit" - Select an explicit partition independent of key value.
  * "random" - Select a random partition independent of key value.
  * </pre>
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_kafka_sender_queue_binding#partition_scheme MsgVpnKafkaSenderQueueBinding#partition_scheme}
  */
  readonly partitionScheme?: string;
  /**
  * The name of the Queue.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_kafka_sender_queue_binding#queue_name MsgVpnKafkaSenderQueueBinding#queue_name}
  */
  readonly queueName: string;
  /**
  * The Substitution Expression used to generate the key for each message sent to Kafka. This expression can include fields extracted from the metadata of each individual Solace message as it is taken from the Solace Queue.
  * 
  * If empty, no key is included for each message as it is published into Kafka.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_kafka_sender_queue_binding#remote_key MsgVpnKafkaSenderQueueBinding#remote_key}
  */
  readonly remoteKey?: string;
  /**
  * The Kafka Topic on the Kafka Cluster to send each message taken from the Solace Queue to.
  * 
  * If empty, the Queue Binding will not be operational.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_kafka_sender_queue_binding#remote_topic MsgVpnKafkaSenderQueueBinding#remote_topic}
  */
  readonly remoteTopic?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_kafka_sender_queue_binding solacebroker_msg_vpn_kafka_sender_queue_binding}
*/
export class MsgVpnKafkaSenderQueueBinding extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "solacebroker_msg_vpn_kafka_sender_queue_binding";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MsgVpnKafkaSenderQueueBinding resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MsgVpnKafkaSenderQueueBinding to import
  * @param importFromId The id of the existing MsgVpnKafkaSenderQueueBinding that should be imported. Refer to the {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_kafka_sender_queue_binding#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MsgVpnKafkaSenderQueueBinding to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "solacebroker_msg_vpn_kafka_sender_queue_binding", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_kafka_sender_queue_binding solacebroker_msg_vpn_kafka_sender_queue_binding} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MsgVpnKafkaSenderQueueBindingConfig
  */
  public constructor(scope: Construct, id: string, config: MsgVpnKafkaSenderQueueBindingConfig) {
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
    this._ackMode = config.ackMode;
    this._enabled = config.enabled;
    this._kafkaSenderName = config.kafkaSenderName;
    this._msgVpnName = config.msgVpnName;
    this._partitionConsistentHash = config.partitionConsistentHash;
    this._partitionExplicitNumber = config.partitionExplicitNumber;
    this._partitionRandomFallbackEnabled = config.partitionRandomFallbackEnabled;
    this._partitionScheme = config.partitionScheme;
    this._queueName = config.queueName;
    this._remoteKey = config.remoteKey;
    this._remoteTopic = config.remoteTopic;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ack_mode - computed: false, optional: true, required: false
  private _ackMode?: string; 
  public get ackMode() {
    return this.getStringAttribute('ack_mode');
  }
  public set ackMode(value: string) {
    this._ackMode = value;
  }
  public resetAckMode() {
    this._ackMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ackModeInput() {
    return this._ackMode;
  }

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

  // partition_consistent_hash - computed: false, optional: true, required: false
  private _partitionConsistentHash?: string; 
  public get partitionConsistentHash() {
    return this.getStringAttribute('partition_consistent_hash');
  }
  public set partitionConsistentHash(value: string) {
    this._partitionConsistentHash = value;
  }
  public resetPartitionConsistentHash() {
    this._partitionConsistentHash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionConsistentHashInput() {
    return this._partitionConsistentHash;
  }

  // partition_explicit_number - computed: false, optional: true, required: false
  private _partitionExplicitNumber?: number; 
  public get partitionExplicitNumber() {
    return this.getNumberAttribute('partition_explicit_number');
  }
  public set partitionExplicitNumber(value: number) {
    this._partitionExplicitNumber = value;
  }
  public resetPartitionExplicitNumber() {
    this._partitionExplicitNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionExplicitNumberInput() {
    return this._partitionExplicitNumber;
  }

  // partition_random_fallback_enabled - computed: false, optional: true, required: false
  private _partitionRandomFallbackEnabled?: boolean | cdktf.IResolvable; 
  public get partitionRandomFallbackEnabled() {
    return this.getBooleanAttribute('partition_random_fallback_enabled');
  }
  public set partitionRandomFallbackEnabled(value: boolean | cdktf.IResolvable) {
    this._partitionRandomFallbackEnabled = value;
  }
  public resetPartitionRandomFallbackEnabled() {
    this._partitionRandomFallbackEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionRandomFallbackEnabledInput() {
    return this._partitionRandomFallbackEnabled;
  }

  // partition_scheme - computed: false, optional: true, required: false
  private _partitionScheme?: string; 
  public get partitionScheme() {
    return this.getStringAttribute('partition_scheme');
  }
  public set partitionScheme(value: string) {
    this._partitionScheme = value;
  }
  public resetPartitionScheme() {
    this._partitionScheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionSchemeInput() {
    return this._partitionScheme;
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

  // remote_key - computed: false, optional: true, required: false
  private _remoteKey?: string; 
  public get remoteKey() {
    return this.getStringAttribute('remote_key');
  }
  public set remoteKey(value: string) {
    this._remoteKey = value;
  }
  public resetRemoteKey() {
    this._remoteKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteKeyInput() {
    return this._remoteKey;
  }

  // remote_topic - computed: false, optional: true, required: false
  private _remoteTopic?: string; 
  public get remoteTopic() {
    return this.getStringAttribute('remote_topic');
  }
  public set remoteTopic(value: string) {
    this._remoteTopic = value;
  }
  public resetRemoteTopic() {
    this._remoteTopic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteTopicInput() {
    return this._remoteTopic;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ack_mode: cdktf.stringToTerraform(this._ackMode),
      enabled: cdktf.booleanToTerraform(this._enabled),
      kafka_sender_name: cdktf.stringToTerraform(this._kafkaSenderName),
      msg_vpn_name: cdktf.stringToTerraform(this._msgVpnName),
      partition_consistent_hash: cdktf.stringToTerraform(this._partitionConsistentHash),
      partition_explicit_number: cdktf.numberToTerraform(this._partitionExplicitNumber),
      partition_random_fallback_enabled: cdktf.booleanToTerraform(this._partitionRandomFallbackEnabled),
      partition_scheme: cdktf.stringToTerraform(this._partitionScheme),
      queue_name: cdktf.stringToTerraform(this._queueName),
      remote_key: cdktf.stringToTerraform(this._remoteKey),
      remote_topic: cdktf.stringToTerraform(this._remoteTopic),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ack_mode: {
        value: cdktf.stringToHclTerraform(this._ackMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
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
      partition_consistent_hash: {
        value: cdktf.stringToHclTerraform(this._partitionConsistentHash),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      partition_explicit_number: {
        value: cdktf.numberToHclTerraform(this._partitionExplicitNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      partition_random_fallback_enabled: {
        value: cdktf.booleanToHclTerraform(this._partitionRandomFallbackEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      partition_scheme: {
        value: cdktf.stringToHclTerraform(this._partitionScheme),
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
      remote_key: {
        value: cdktf.stringToHclTerraform(this._remoteKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_topic: {
        value: cdktf.stringToHclTerraform(this._remoteTopic),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
