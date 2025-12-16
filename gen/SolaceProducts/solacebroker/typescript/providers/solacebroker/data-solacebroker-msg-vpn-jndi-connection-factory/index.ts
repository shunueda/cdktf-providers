// https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/data-sources/msg_vpn_jndi_connection_factory
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSolacebrokerMsgVpnJndiConnectionFactoryConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the JMS Connection Factory.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/data-sources/msg_vpn_jndi_connection_factory#connection_factory_name DataSolacebrokerMsgVpnJndiConnectionFactory#connection_factory_name}
  */
  readonly connectionFactoryName: string;
  /**
  * The name of the Message VPN.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/data-sources/msg_vpn_jndi_connection_factory#msg_vpn_name DataSolacebrokerMsgVpnJndiConnectionFactory#msg_vpn_name}
  */
  readonly msgVpnName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/data-sources/msg_vpn_jndi_connection_factory solacebroker_msg_vpn_jndi_connection_factory}
*/
export class DataSolacebrokerMsgVpnJndiConnectionFactory extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "solacebroker_msg_vpn_jndi_connection_factory";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSolacebrokerMsgVpnJndiConnectionFactory resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSolacebrokerMsgVpnJndiConnectionFactory to import
  * @param importFromId The id of the existing DataSolacebrokerMsgVpnJndiConnectionFactory that should be imported. Refer to the {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/data-sources/msg_vpn_jndi_connection_factory#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSolacebrokerMsgVpnJndiConnectionFactory to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "solacebroker_msg_vpn_jndi_connection_factory", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/data-sources/msg_vpn_jndi_connection_factory solacebroker_msg_vpn_jndi_connection_factory} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSolacebrokerMsgVpnJndiConnectionFactoryConfig
  */
  public constructor(scope: Construct, id: string, config: DataSolacebrokerMsgVpnJndiConnectionFactoryConfig) {
    super(scope, id, {
      terraformResourceType: 'solacebroker_msg_vpn_jndi_connection_factory',
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
    this._connectionFactoryName = config.connectionFactoryName;
    this._msgVpnName = config.msgVpnName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_duplicate_client_id_enabled - computed: true, optional: false, required: false
  public get allowDuplicateClientIdEnabled() {
    return this.getBooleanAttribute('allow_duplicate_client_id_enabled');
  }

  // client_description - computed: true, optional: false, required: false
  public get clientDescription() {
    return this.getStringAttribute('client_description');
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // connection_factory_name - computed: false, optional: false, required: true
  private _connectionFactoryName?: string; 
  public get connectionFactoryName() {
    return this.getStringAttribute('connection_factory_name');
  }
  public set connectionFactoryName(value: string) {
    this._connectionFactoryName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionFactoryNameInput() {
    return this._connectionFactoryName;
  }

  // dto_receive_override_enabled - computed: true, optional: false, required: false
  public get dtoReceiveOverrideEnabled() {
    return this.getBooleanAttribute('dto_receive_override_enabled');
  }

  // dto_receive_subscriber_local_priority - computed: true, optional: false, required: false
  public get dtoReceiveSubscriberLocalPriority() {
    return this.getNumberAttribute('dto_receive_subscriber_local_priority');
  }

  // dto_receive_subscriber_network_priority - computed: true, optional: false, required: false
  public get dtoReceiveSubscriberNetworkPriority() {
    return this.getNumberAttribute('dto_receive_subscriber_network_priority');
  }

  // dto_send_enabled - computed: true, optional: false, required: false
  public get dtoSendEnabled() {
    return this.getBooleanAttribute('dto_send_enabled');
  }

  // dynamic_endpoint_create_durable_enabled - computed: true, optional: false, required: false
  public get dynamicEndpointCreateDurableEnabled() {
    return this.getBooleanAttribute('dynamic_endpoint_create_durable_enabled');
  }

  // dynamic_endpoint_respect_ttl_enabled - computed: true, optional: false, required: false
  public get dynamicEndpointRespectTtlEnabled() {
    return this.getBooleanAttribute('dynamic_endpoint_respect_ttl_enabled');
  }

  // guaranteed_receive_ack_timeout - computed: true, optional: false, required: false
  public get guaranteedReceiveAckTimeout() {
    return this.getNumberAttribute('guaranteed_receive_ack_timeout');
  }

  // guaranteed_receive_reconnect_retry_count - computed: true, optional: false, required: false
  public get guaranteedReceiveReconnectRetryCount() {
    return this.getNumberAttribute('guaranteed_receive_reconnect_retry_count');
  }

  // guaranteed_receive_reconnect_retry_wait - computed: true, optional: false, required: false
  public get guaranteedReceiveReconnectRetryWait() {
    return this.getNumberAttribute('guaranteed_receive_reconnect_retry_wait');
  }

  // guaranteed_receive_window_size - computed: true, optional: false, required: false
  public get guaranteedReceiveWindowSize() {
    return this.getNumberAttribute('guaranteed_receive_window_size');
  }

  // guaranteed_receive_window_size_ack_threshold - computed: true, optional: false, required: false
  public get guaranteedReceiveWindowSizeAckThreshold() {
    return this.getNumberAttribute('guaranteed_receive_window_size_ack_threshold');
  }

  // guaranteed_send_ack_timeout - computed: true, optional: false, required: false
  public get guaranteedSendAckTimeout() {
    return this.getNumberAttribute('guaranteed_send_ack_timeout');
  }

  // guaranteed_send_window_size - computed: true, optional: false, required: false
  public get guaranteedSendWindowSize() {
    return this.getNumberAttribute('guaranteed_send_window_size');
  }

  // messaging_default_delivery_mode - computed: true, optional: false, required: false
  public get messagingDefaultDeliveryMode() {
    return this.getStringAttribute('messaging_default_delivery_mode');
  }

  // messaging_default_dmq_eligible_enabled - computed: true, optional: false, required: false
  public get messagingDefaultDmqEligibleEnabled() {
    return this.getBooleanAttribute('messaging_default_dmq_eligible_enabled');
  }

  // messaging_default_eliding_eligible_enabled - computed: true, optional: false, required: false
  public get messagingDefaultElidingEligibleEnabled() {
    return this.getBooleanAttribute('messaging_default_eliding_eligible_enabled');
  }

  // messaging_jmsx_user_id_enabled - computed: true, optional: false, required: false
  public get messagingJmsxUserIdEnabled() {
    return this.getBooleanAttribute('messaging_jmsx_user_id_enabled');
  }

  // messaging_payload_compression_level - computed: true, optional: false, required: false
  public get messagingPayloadCompressionLevel() {
    return this.getNumberAttribute('messaging_payload_compression_level');
  }

  // messaging_text_in_xml_payload_enabled - computed: true, optional: false, required: false
  public get messagingTextInXmlPayloadEnabled() {
    return this.getBooleanAttribute('messaging_text_in_xml_payload_enabled');
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

  // transport_compression_level - computed: true, optional: false, required: false
  public get transportCompressionLevel() {
    return this.getNumberAttribute('transport_compression_level');
  }

  // transport_connect_retry_count - computed: true, optional: false, required: false
  public get transportConnectRetryCount() {
    return this.getNumberAttribute('transport_connect_retry_count');
  }

  // transport_connect_retry_per_host_count - computed: true, optional: false, required: false
  public get transportConnectRetryPerHostCount() {
    return this.getNumberAttribute('transport_connect_retry_per_host_count');
  }

  // transport_connect_timeout - computed: true, optional: false, required: false
  public get transportConnectTimeout() {
    return this.getNumberAttribute('transport_connect_timeout');
  }

  // transport_direct_transport_enabled - computed: true, optional: false, required: false
  public get transportDirectTransportEnabled() {
    return this.getBooleanAttribute('transport_direct_transport_enabled');
  }

  // transport_keepalive_count - computed: true, optional: false, required: false
  public get transportKeepaliveCount() {
    return this.getNumberAttribute('transport_keepalive_count');
  }

  // transport_keepalive_enabled - computed: true, optional: false, required: false
  public get transportKeepaliveEnabled() {
    return this.getBooleanAttribute('transport_keepalive_enabled');
  }

  // transport_keepalive_interval - computed: true, optional: false, required: false
  public get transportKeepaliveInterval() {
    return this.getNumberAttribute('transport_keepalive_interval');
  }

  // transport_msg_callback_on_io_thread_enabled - computed: true, optional: false, required: false
  public get transportMsgCallbackOnIoThreadEnabled() {
    return this.getBooleanAttribute('transport_msg_callback_on_io_thread_enabled');
  }

  // transport_optimize_direct_enabled - computed: true, optional: false, required: false
  public get transportOptimizeDirectEnabled() {
    return this.getBooleanAttribute('transport_optimize_direct_enabled');
  }

  // transport_port - computed: true, optional: false, required: false
  public get transportPort() {
    return this.getNumberAttribute('transport_port');
  }

  // transport_read_timeout - computed: true, optional: false, required: false
  public get transportReadTimeout() {
    return this.getNumberAttribute('transport_read_timeout');
  }

  // transport_receive_buffer_size - computed: true, optional: false, required: false
  public get transportReceiveBufferSize() {
    return this.getNumberAttribute('transport_receive_buffer_size');
  }

  // transport_reconnect_retry_count - computed: true, optional: false, required: false
  public get transportReconnectRetryCount() {
    return this.getNumberAttribute('transport_reconnect_retry_count');
  }

  // transport_reconnect_retry_wait - computed: true, optional: false, required: false
  public get transportReconnectRetryWait() {
    return this.getNumberAttribute('transport_reconnect_retry_wait');
  }

  // transport_send_buffer_size - computed: true, optional: false, required: false
  public get transportSendBufferSize() {
    return this.getNumberAttribute('transport_send_buffer_size');
  }

  // transport_tcp_no_delay_enabled - computed: true, optional: false, required: false
  public get transportTcpNoDelayEnabled() {
    return this.getBooleanAttribute('transport_tcp_no_delay_enabled');
  }

  // xa_enabled - computed: true, optional: false, required: false
  public get xaEnabled() {
    return this.getBooleanAttribute('xa_enabled');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      connection_factory_name: cdktf.stringToTerraform(this._connectionFactoryName),
      msg_vpn_name: cdktf.stringToTerraform(this._msgVpnName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      connection_factory_name: {
        value: cdktf.stringToHclTerraform(this._connectionFactoryName),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
