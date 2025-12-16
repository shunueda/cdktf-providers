// https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_msg_vpn_jndi_connection_factory
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SolacebrokerMsgVpnJndiConnectionFactoryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable or disable whether new JMS connections can use the same Client identifier (ID) as an existing connection.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_msg_vpn_jndi_connection_factory#allow_duplicate_client_id_enabled SolacebrokerMsgVpnJndiConnectionFactory#allow_duplicate_client_id_enabled}
  */
  readonly allowDuplicateClientIdEnabled?: boolean | cdktf.IResolvable;
  /**
  * The description of the Client.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_msg_vpn_jndi_connection_factory#client_description SolacebrokerMsgVpnJndiConnectionFactory#client_description}
  */
  readonly clientDescription?: string;
  /**
  * The Client identifier (ID). If not specified, a unique value for it will be generated.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_msg_vpn_jndi_connection_factory#client_id SolacebrokerMsgVpnJndiConnectionFactory#client_id}
  */
  readonly clientId?: string;
  /**
  * The name of the JMS Connection Factory.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_msg_vpn_jndi_connection_factory#connection_factory_name SolacebrokerMsgVpnJndiConnectionFactory#connection_factory_name}
  */
  readonly connectionFactoryName: string;
  /**
  * Enable or disable overriding by the Subscriber (Consumer) of the deliver-to-one (DTO) property on messages. When enabled, the Subscriber can receive all DTO tagged messages.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_msg_vpn_jndi_connection_factory#dto_receive_override_enabled SolacebrokerMsgVpnJndiConnectionFactory#dto_receive_override_enabled}
  */
  readonly dtoReceiveOverrideEnabled?: boolean | cdktf.IResolvable;
  /**
  * The priority for receiving deliver-to-one (DTO) messages by the Subscriber (Consumer) if the messages are published on the local broker that the Subscriber is directly connected to.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_msg_vpn_jndi_connection_factory#dto_receive_subscriber_local_priority SolacebrokerMsgVpnJndiConnectionFactory#dto_receive_subscriber_local_priority}
  */
  readonly dtoReceiveSubscriberLocalPriority?: number;
  /**
  * The priority for receiving deliver-to-one (DTO) messages by the Subscriber (Consumer) if the messages are published on a remote broker.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_msg_vpn_jndi_connection_factory#dto_receive_subscriber_network_priority SolacebrokerMsgVpnJndiConnectionFactory#dto_receive_subscriber_network_priority}
  */
  readonly dtoReceiveSubscriberNetworkPriority?: number;
  /**
  * Enable or disable the deliver-to-one (DTO) property on messages sent by the Publisher (Producer).
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_msg_vpn_jndi_connection_factory#dto_send_enabled SolacebrokerMsgVpnJndiConnectionFactory#dto_send_enabled}
  */
  readonly dtoSendEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enable or disable whether a durable endpoint will be dynamically created on the broker when the client calls "Session.createDurableSubscriber()" or "Session.createQueue()". The created endpoint respects the message time-to-live (TTL) according to the "dynamic_endpoint_respect_ttl_enabled" property.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_msg_vpn_jndi_connection_factory#dynamic_endpoint_create_durable_enabled SolacebrokerMsgVpnJndiConnectionFactory#dynamic_endpoint_create_durable_enabled}
  */
  readonly dynamicEndpointCreateDurableEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enable or disable whether dynamically created durable and non-durable endpoints respect the message time-to-live (TTL) property.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_msg_vpn_jndi_connection_factory#dynamic_endpoint_respect_ttl_enabled SolacebrokerMsgVpnJndiConnectionFactory#dynamic_endpoint_respect_ttl_enabled}
  */
  readonly dynamicEndpointRespectTtlEnabled?: boolean | cdktf.IResolvable;
  /**
  * The timeout for sending the acknowledgment (ACK) for guaranteed messages received by the Subscriber (Consumer), in milliseconds.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `1000`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_msg_vpn_jndi_connection_factory#guaranteed_receive_ack_timeout SolacebrokerMsgVpnJndiConnectionFactory#guaranteed_receive_ack_timeout}
  */
  readonly guaranteedReceiveAckTimeout?: number;
  /**
  * The maximum number of attempts to reconnect to the host or list of hosts after the guaranteed  messaging connection has been lost. The value "-1" means to retry forever.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `-1`. Available since SEMP API version 2.14.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_msg_vpn_jndi_connection_factory#guaranteed_receive_reconnect_retry_count SolacebrokerMsgVpnJndiConnectionFactory#guaranteed_receive_reconnect_retry_count}
  */
  readonly guaranteedReceiveReconnectRetryCount?: number;
  /**
  * The amount of time to wait before making another attempt to connect or reconnect to the host after the guaranteed messaging connection has been lost, in milliseconds.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `3000`. Available since SEMP API version 2.14.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_msg_vpn_jndi_connection_factory#guaranteed_receive_reconnect_retry_wait SolacebrokerMsgVpnJndiConnectionFactory#guaranteed_receive_reconnect_retry_wait}
  */
  readonly guaranteedReceiveReconnectRetryWait?: number;
  /**
  * The size of the window for guaranteed messages received by the Subscriber (Consumer), in messages.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `18`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_msg_vpn_jndi_connection_factory#guaranteed_receive_window_size SolacebrokerMsgVpnJndiConnectionFactory#guaranteed_receive_window_size}
  */
  readonly guaranteedReceiveWindowSize?: number;
  /**
  * The threshold for sending the acknowledgment (ACK) for guaranteed messages received by the Subscriber (Consumer) as a percentage of `guaranteed_receive_window_size`.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `60`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_msg_vpn_jndi_connection_factory#guaranteed_receive_window_size_ack_threshold SolacebrokerMsgVpnJndiConnectionFactory#guaranteed_receive_window_size_ack_threshold}
  */
  readonly guaranteedReceiveWindowSizeAckThreshold?: number;
  /**
  * The timeout for receiving the acknowledgment (ACK) for guaranteed messages sent by the Publisher (Producer), in milliseconds.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `2000`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_msg_vpn_jndi_connection_factory#guaranteed_send_ack_timeout SolacebrokerMsgVpnJndiConnectionFactory#guaranteed_send_ack_timeout}
  */
  readonly guaranteedSendAckTimeout?: number;
  /**
  * The size of the window for non-persistent guaranteed messages sent by the Publisher (Producer), in messages. For persistent messages the window size is fixed at 1.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `255`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_msg_vpn_jndi_connection_factory#guaranteed_send_window_size SolacebrokerMsgVpnJndiConnectionFactory#guaranteed_send_window_size}
  */
  readonly guaranteedSendWindowSize?: number;
  /**
  * The default delivery mode for messages sent by the Publisher (Producer).
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `"persistent"`. The allowed values and their meaning are:
  * 
  * <pre>
  * "persistent" - The broker spools messages (persists in the Message Spool) as part of the send operation.
  * "non-persistent" - The broker does not spool messages (does not persist in the Message Spool) as part of the send operation.
  * </pre>
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_msg_vpn_jndi_connection_factory#messaging_default_delivery_mode SolacebrokerMsgVpnJndiConnectionFactory#messaging_default_delivery_mode}
  */
  readonly messagingDefaultDeliveryMode?: string;
  /**
  * Enable or disable whether messages sent by the Publisher (Producer) are Dead Message Queue (DMQ) eligible by default.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_msg_vpn_jndi_connection_factory#messaging_default_dmq_eligible_enabled SolacebrokerMsgVpnJndiConnectionFactory#messaging_default_dmq_eligible_enabled}
  */
  readonly messagingDefaultDmqEligibleEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enable or disable whether messages sent by the Publisher (Producer) are Eliding eligible by default.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_msg_vpn_jndi_connection_factory#messaging_default_eliding_eligible_enabled SolacebrokerMsgVpnJndiConnectionFactory#messaging_default_eliding_eligible_enabled}
  */
  readonly messagingDefaultElidingEligibleEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enable or disable inclusion (adding or replacing) of the JMSXUserID property in messages sent by the Publisher (Producer).
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_msg_vpn_jndi_connection_factory#messaging_jmsx_user_id_enabled SolacebrokerMsgVpnJndiConnectionFactory#messaging_jmsx_user_id_enabled}
  */
  readonly messagingJmsxUserIdEnabled?: boolean | cdktf.IResolvable;
  /**
  * The level of compression to apply to the message payload, from 1 (least compression) to 9 (most compression). A value of 0 means no compression.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `0`. Available since SEMP API version 2.42.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_msg_vpn_jndi_connection_factory#messaging_payload_compression_level SolacebrokerMsgVpnJndiConnectionFactory#messaging_payload_compression_level}
  */
  readonly messagingPayloadCompressionLevel?: number;
  /**
  * Enable or disable encoding of JMS text messages in Publisher (Producer) messages as XML payload. When disabled, JMS text messages are encoded as a binary attachment.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_msg_vpn_jndi_connection_factory#messaging_text_in_xml_payload_enabled SolacebrokerMsgVpnJndiConnectionFactory#messaging_text_in_xml_payload_enabled}
  */
  readonly messagingTextInXmlPayloadEnabled?: boolean | cdktf.IResolvable;
  /**
  * The name of the Message VPN.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_msg_vpn_jndi_connection_factory#msg_vpn_name SolacebrokerMsgVpnJndiConnectionFactory#msg_vpn_name}
  */
  readonly msgVpnName: string;
  /**
  * The ZLIB compression level for the connection to the broker. The value "0" means no compression, and the value "-1" means the compression level is specified in the JNDI Properties file.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `-1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_msg_vpn_jndi_connection_factory#transport_compression_level SolacebrokerMsgVpnJndiConnectionFactory#transport_compression_level}
  */
  readonly transportCompressionLevel?: number;
  /**
  * The maximum number of retry attempts to establish an initial connection to the host or list of hosts. The value "0" means a single attempt (no retries), and the value "-1" means to retry forever.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_msg_vpn_jndi_connection_factory#transport_connect_retry_count SolacebrokerMsgVpnJndiConnectionFactory#transport_connect_retry_count}
  */
  readonly transportConnectRetryCount?: number;
  /**
  * The maximum number of retry attempts to establish an initial connection to each host on the list of hosts. The value "0" means a single attempt (no retries), and the value "-1" means to retry forever.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_msg_vpn_jndi_connection_factory#transport_connect_retry_per_host_count SolacebrokerMsgVpnJndiConnectionFactory#transport_connect_retry_per_host_count}
  */
  readonly transportConnectRetryPerHostCount?: number;
  /**
  * The timeout for establishing an initial connection to the broker, in milliseconds.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `30000`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_msg_vpn_jndi_connection_factory#transport_connect_timeout SolacebrokerMsgVpnJndiConnectionFactory#transport_connect_timeout}
  */
  readonly transportConnectTimeout?: number;
  /**
  * Enable or disable usage of Direct Transport mode. When enabled, NON-PERSISTENT messages are sent as direct messages and non-durable topic consumers and temporary queue consumers consume using direct subscriptions rather than from guaranteed endpoints. If disabled all messaging uses guaranteed transport.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_msg_vpn_jndi_connection_factory#transport_direct_transport_enabled SolacebrokerMsgVpnJndiConnectionFactory#transport_direct_transport_enabled}
  */
  readonly transportDirectTransportEnabled?: boolean | cdktf.IResolvable;
  /**
  * The maximum number of consecutive application-level keepalive messages sent without the broker response before the connection to the broker is closed.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `3`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_msg_vpn_jndi_connection_factory#transport_keepalive_count SolacebrokerMsgVpnJndiConnectionFactory#transport_keepalive_count}
  */
  readonly transportKeepaliveCount?: number;
  /**
  * Enable or disable usage of application-level keepalive messages to maintain a connection with the broker.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_msg_vpn_jndi_connection_factory#transport_keepalive_enabled SolacebrokerMsgVpnJndiConnectionFactory#transport_keepalive_enabled}
  */
  readonly transportKeepaliveEnabled?: boolean | cdktf.IResolvable;
  /**
  * The interval between application-level keepalive messages, in milliseconds.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `3000`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_msg_vpn_jndi_connection_factory#transport_keepalive_interval SolacebrokerMsgVpnJndiConnectionFactory#transport_keepalive_interval}
  */
  readonly transportKeepaliveInterval?: number;
  /**
  * Enable or disable delivery of asynchronous messages directly from the I/O thread. Contact support before enabling this property.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_msg_vpn_jndi_connection_factory#transport_msg_callback_on_io_thread_enabled SolacebrokerMsgVpnJndiConnectionFactory#transport_msg_callback_on_io_thread_enabled}
  */
  readonly transportMsgCallbackOnIoThreadEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enable or disable optimization for the Direct Transport delivery mode. If enabled, the client application is limited to one Publisher (Producer) and one non-durable Subscriber (Consumer).
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_msg_vpn_jndi_connection_factory#transport_optimize_direct_enabled SolacebrokerMsgVpnJndiConnectionFactory#transport_optimize_direct_enabled}
  */
  readonly transportOptimizeDirectEnabled?: boolean | cdktf.IResolvable;
  /**
  * The connection port number on the broker for SMF clients. The value "-1" means the port is specified in the JNDI Properties file.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `-1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_msg_vpn_jndi_connection_factory#transport_port SolacebrokerMsgVpnJndiConnectionFactory#transport_port}
  */
  readonly transportPort?: number;
  /**
  * The timeout for reading a reply from the broker, in milliseconds.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `10000`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_msg_vpn_jndi_connection_factory#transport_read_timeout SolacebrokerMsgVpnJndiConnectionFactory#transport_read_timeout}
  */
  readonly transportReadTimeout?: number;
  /**
  * The size of the receive socket buffer, in bytes. It corresponds to the SO_RCVBUF socket option.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `65536`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_msg_vpn_jndi_connection_factory#transport_receive_buffer_size SolacebrokerMsgVpnJndiConnectionFactory#transport_receive_buffer_size}
  */
  readonly transportReceiveBufferSize?: number;
  /**
  * The maximum number of attempts to reconnect to the host or list of hosts after the connection has been lost. The value "-1" means to retry forever.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `3`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_msg_vpn_jndi_connection_factory#transport_reconnect_retry_count SolacebrokerMsgVpnJndiConnectionFactory#transport_reconnect_retry_count}
  */
  readonly transportReconnectRetryCount?: number;
  /**
  * The amount of time before making another attempt to connect or reconnect to the host after the connection has been lost, in milliseconds.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `3000`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_msg_vpn_jndi_connection_factory#transport_reconnect_retry_wait SolacebrokerMsgVpnJndiConnectionFactory#transport_reconnect_retry_wait}
  */
  readonly transportReconnectRetryWait?: number;
  /**
  * The size of the send socket buffer, in bytes. It corresponds to the SO_SNDBUF socket option.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `65536`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_msg_vpn_jndi_connection_factory#transport_send_buffer_size SolacebrokerMsgVpnJndiConnectionFactory#transport_send_buffer_size}
  */
  readonly transportSendBufferSize?: number;
  /**
  * Enable or disable the TCP_NODELAY option. When enabled, Nagle's algorithm for TCP/IP congestion control (RFC 896) is disabled.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_msg_vpn_jndi_connection_factory#transport_tcp_no_delay_enabled SolacebrokerMsgVpnJndiConnectionFactory#transport_tcp_no_delay_enabled}
  */
  readonly transportTcpNoDelayEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enable or disable this as an XA Connection Factory. When enabled, the Connection Factory can be cast to "XAConnectionFactory", "XAQueueConnectionFactory" or "XATopicConnectionFactory".
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_msg_vpn_jndi_connection_factory#xa_enabled SolacebrokerMsgVpnJndiConnectionFactory#xa_enabled}
  */
  readonly xaEnabled?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_msg_vpn_jndi_connection_factory solacebroker_msg_vpn_jndi_connection_factory}
*/
export class SolacebrokerMsgVpnJndiConnectionFactory extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "solacebroker_msg_vpn_jndi_connection_factory";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SolacebrokerMsgVpnJndiConnectionFactory resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SolacebrokerMsgVpnJndiConnectionFactory to import
  * @param importFromId The id of the existing SolacebrokerMsgVpnJndiConnectionFactory that should be imported. Refer to the {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_msg_vpn_jndi_connection_factory#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SolacebrokerMsgVpnJndiConnectionFactory to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "solacebroker_msg_vpn_jndi_connection_factory", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_msg_vpn_jndi_connection_factory solacebroker_msg_vpn_jndi_connection_factory} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SolacebrokerMsgVpnJndiConnectionFactoryConfig
  */
  public constructor(scope: Construct, id: string, config: SolacebrokerMsgVpnJndiConnectionFactoryConfig) {
    super(scope, id, {
      terraformResourceType: 'solacebroker_msg_vpn_jndi_connection_factory',
      terraformGeneratorMetadata: {
        providerName: 'solacebrokerappliance',
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
    this._allowDuplicateClientIdEnabled = config.allowDuplicateClientIdEnabled;
    this._clientDescription = config.clientDescription;
    this._clientId = config.clientId;
    this._connectionFactoryName = config.connectionFactoryName;
    this._dtoReceiveOverrideEnabled = config.dtoReceiveOverrideEnabled;
    this._dtoReceiveSubscriberLocalPriority = config.dtoReceiveSubscriberLocalPriority;
    this._dtoReceiveSubscriberNetworkPriority = config.dtoReceiveSubscriberNetworkPriority;
    this._dtoSendEnabled = config.dtoSendEnabled;
    this._dynamicEndpointCreateDurableEnabled = config.dynamicEndpointCreateDurableEnabled;
    this._dynamicEndpointRespectTtlEnabled = config.dynamicEndpointRespectTtlEnabled;
    this._guaranteedReceiveAckTimeout = config.guaranteedReceiveAckTimeout;
    this._guaranteedReceiveReconnectRetryCount = config.guaranteedReceiveReconnectRetryCount;
    this._guaranteedReceiveReconnectRetryWait = config.guaranteedReceiveReconnectRetryWait;
    this._guaranteedReceiveWindowSize = config.guaranteedReceiveWindowSize;
    this._guaranteedReceiveWindowSizeAckThreshold = config.guaranteedReceiveWindowSizeAckThreshold;
    this._guaranteedSendAckTimeout = config.guaranteedSendAckTimeout;
    this._guaranteedSendWindowSize = config.guaranteedSendWindowSize;
    this._messagingDefaultDeliveryMode = config.messagingDefaultDeliveryMode;
    this._messagingDefaultDmqEligibleEnabled = config.messagingDefaultDmqEligibleEnabled;
    this._messagingDefaultElidingEligibleEnabled = config.messagingDefaultElidingEligibleEnabled;
    this._messagingJmsxUserIdEnabled = config.messagingJmsxUserIdEnabled;
    this._messagingPayloadCompressionLevel = config.messagingPayloadCompressionLevel;
    this._messagingTextInXmlPayloadEnabled = config.messagingTextInXmlPayloadEnabled;
    this._msgVpnName = config.msgVpnName;
    this._transportCompressionLevel = config.transportCompressionLevel;
    this._transportConnectRetryCount = config.transportConnectRetryCount;
    this._transportConnectRetryPerHostCount = config.transportConnectRetryPerHostCount;
    this._transportConnectTimeout = config.transportConnectTimeout;
    this._transportDirectTransportEnabled = config.transportDirectTransportEnabled;
    this._transportKeepaliveCount = config.transportKeepaliveCount;
    this._transportKeepaliveEnabled = config.transportKeepaliveEnabled;
    this._transportKeepaliveInterval = config.transportKeepaliveInterval;
    this._transportMsgCallbackOnIoThreadEnabled = config.transportMsgCallbackOnIoThreadEnabled;
    this._transportOptimizeDirectEnabled = config.transportOptimizeDirectEnabled;
    this._transportPort = config.transportPort;
    this._transportReadTimeout = config.transportReadTimeout;
    this._transportReceiveBufferSize = config.transportReceiveBufferSize;
    this._transportReconnectRetryCount = config.transportReconnectRetryCount;
    this._transportReconnectRetryWait = config.transportReconnectRetryWait;
    this._transportSendBufferSize = config.transportSendBufferSize;
    this._transportTcpNoDelayEnabled = config.transportTcpNoDelayEnabled;
    this._xaEnabled = config.xaEnabled;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_duplicate_client_id_enabled - computed: false, optional: true, required: false
  private _allowDuplicateClientIdEnabled?: boolean | cdktf.IResolvable; 
  public get allowDuplicateClientIdEnabled() {
    return this.getBooleanAttribute('allow_duplicate_client_id_enabled');
  }
  public set allowDuplicateClientIdEnabled(value: boolean | cdktf.IResolvable) {
    this._allowDuplicateClientIdEnabled = value;
  }
  public resetAllowDuplicateClientIdEnabled() {
    this._allowDuplicateClientIdEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowDuplicateClientIdEnabledInput() {
    return this._allowDuplicateClientIdEnabled;
  }

  // client_description - computed: false, optional: true, required: false
  private _clientDescription?: string; 
  public get clientDescription() {
    return this.getStringAttribute('client_description');
  }
  public set clientDescription(value: string) {
    this._clientDescription = value;
  }
  public resetClientDescription() {
    this._clientDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientDescriptionInput() {
    return this._clientDescription;
  }

  // client_id - computed: false, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
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

  // dto_receive_override_enabled - computed: false, optional: true, required: false
  private _dtoReceiveOverrideEnabled?: boolean | cdktf.IResolvable; 
  public get dtoReceiveOverrideEnabled() {
    return this.getBooleanAttribute('dto_receive_override_enabled');
  }
  public set dtoReceiveOverrideEnabled(value: boolean | cdktf.IResolvable) {
    this._dtoReceiveOverrideEnabled = value;
  }
  public resetDtoReceiveOverrideEnabled() {
    this._dtoReceiveOverrideEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dtoReceiveOverrideEnabledInput() {
    return this._dtoReceiveOverrideEnabled;
  }

  // dto_receive_subscriber_local_priority - computed: false, optional: true, required: false
  private _dtoReceiveSubscriberLocalPriority?: number; 
  public get dtoReceiveSubscriberLocalPriority() {
    return this.getNumberAttribute('dto_receive_subscriber_local_priority');
  }
  public set dtoReceiveSubscriberLocalPriority(value: number) {
    this._dtoReceiveSubscriberLocalPriority = value;
  }
  public resetDtoReceiveSubscriberLocalPriority() {
    this._dtoReceiveSubscriberLocalPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dtoReceiveSubscriberLocalPriorityInput() {
    return this._dtoReceiveSubscriberLocalPriority;
  }

  // dto_receive_subscriber_network_priority - computed: false, optional: true, required: false
  private _dtoReceiveSubscriberNetworkPriority?: number; 
  public get dtoReceiveSubscriberNetworkPriority() {
    return this.getNumberAttribute('dto_receive_subscriber_network_priority');
  }
  public set dtoReceiveSubscriberNetworkPriority(value: number) {
    this._dtoReceiveSubscriberNetworkPriority = value;
  }
  public resetDtoReceiveSubscriberNetworkPriority() {
    this._dtoReceiveSubscriberNetworkPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dtoReceiveSubscriberNetworkPriorityInput() {
    return this._dtoReceiveSubscriberNetworkPriority;
  }

  // dto_send_enabled - computed: false, optional: true, required: false
  private _dtoSendEnabled?: boolean | cdktf.IResolvable; 
  public get dtoSendEnabled() {
    return this.getBooleanAttribute('dto_send_enabled');
  }
  public set dtoSendEnabled(value: boolean | cdktf.IResolvable) {
    this._dtoSendEnabled = value;
  }
  public resetDtoSendEnabled() {
    this._dtoSendEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dtoSendEnabledInput() {
    return this._dtoSendEnabled;
  }

  // dynamic_endpoint_create_durable_enabled - computed: false, optional: true, required: false
  private _dynamicEndpointCreateDurableEnabled?: boolean | cdktf.IResolvable; 
  public get dynamicEndpointCreateDurableEnabled() {
    return this.getBooleanAttribute('dynamic_endpoint_create_durable_enabled');
  }
  public set dynamicEndpointCreateDurableEnabled(value: boolean | cdktf.IResolvable) {
    this._dynamicEndpointCreateDurableEnabled = value;
  }
  public resetDynamicEndpointCreateDurableEnabled() {
    this._dynamicEndpointCreateDurableEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicEndpointCreateDurableEnabledInput() {
    return this._dynamicEndpointCreateDurableEnabled;
  }

  // dynamic_endpoint_respect_ttl_enabled - computed: false, optional: true, required: false
  private _dynamicEndpointRespectTtlEnabled?: boolean | cdktf.IResolvable; 
  public get dynamicEndpointRespectTtlEnabled() {
    return this.getBooleanAttribute('dynamic_endpoint_respect_ttl_enabled');
  }
  public set dynamicEndpointRespectTtlEnabled(value: boolean | cdktf.IResolvable) {
    this._dynamicEndpointRespectTtlEnabled = value;
  }
  public resetDynamicEndpointRespectTtlEnabled() {
    this._dynamicEndpointRespectTtlEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicEndpointRespectTtlEnabledInput() {
    return this._dynamicEndpointRespectTtlEnabled;
  }

  // guaranteed_receive_ack_timeout - computed: false, optional: true, required: false
  private _guaranteedReceiveAckTimeout?: number; 
  public get guaranteedReceiveAckTimeout() {
    return this.getNumberAttribute('guaranteed_receive_ack_timeout');
  }
  public set guaranteedReceiveAckTimeout(value: number) {
    this._guaranteedReceiveAckTimeout = value;
  }
  public resetGuaranteedReceiveAckTimeout() {
    this._guaranteedReceiveAckTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guaranteedReceiveAckTimeoutInput() {
    return this._guaranteedReceiveAckTimeout;
  }

  // guaranteed_receive_reconnect_retry_count - computed: false, optional: true, required: false
  private _guaranteedReceiveReconnectRetryCount?: number; 
  public get guaranteedReceiveReconnectRetryCount() {
    return this.getNumberAttribute('guaranteed_receive_reconnect_retry_count');
  }
  public set guaranteedReceiveReconnectRetryCount(value: number) {
    this._guaranteedReceiveReconnectRetryCount = value;
  }
  public resetGuaranteedReceiveReconnectRetryCount() {
    this._guaranteedReceiveReconnectRetryCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guaranteedReceiveReconnectRetryCountInput() {
    return this._guaranteedReceiveReconnectRetryCount;
  }

  // guaranteed_receive_reconnect_retry_wait - computed: false, optional: true, required: false
  private _guaranteedReceiveReconnectRetryWait?: number; 
  public get guaranteedReceiveReconnectRetryWait() {
    return this.getNumberAttribute('guaranteed_receive_reconnect_retry_wait');
  }
  public set guaranteedReceiveReconnectRetryWait(value: number) {
    this._guaranteedReceiveReconnectRetryWait = value;
  }
  public resetGuaranteedReceiveReconnectRetryWait() {
    this._guaranteedReceiveReconnectRetryWait = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guaranteedReceiveReconnectRetryWaitInput() {
    return this._guaranteedReceiveReconnectRetryWait;
  }

  // guaranteed_receive_window_size - computed: false, optional: true, required: false
  private _guaranteedReceiveWindowSize?: number; 
  public get guaranteedReceiveWindowSize() {
    return this.getNumberAttribute('guaranteed_receive_window_size');
  }
  public set guaranteedReceiveWindowSize(value: number) {
    this._guaranteedReceiveWindowSize = value;
  }
  public resetGuaranteedReceiveWindowSize() {
    this._guaranteedReceiveWindowSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guaranteedReceiveWindowSizeInput() {
    return this._guaranteedReceiveWindowSize;
  }

  // guaranteed_receive_window_size_ack_threshold - computed: false, optional: true, required: false
  private _guaranteedReceiveWindowSizeAckThreshold?: number; 
  public get guaranteedReceiveWindowSizeAckThreshold() {
    return this.getNumberAttribute('guaranteed_receive_window_size_ack_threshold');
  }
  public set guaranteedReceiveWindowSizeAckThreshold(value: number) {
    this._guaranteedReceiveWindowSizeAckThreshold = value;
  }
  public resetGuaranteedReceiveWindowSizeAckThreshold() {
    this._guaranteedReceiveWindowSizeAckThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guaranteedReceiveWindowSizeAckThresholdInput() {
    return this._guaranteedReceiveWindowSizeAckThreshold;
  }

  // guaranteed_send_ack_timeout - computed: false, optional: true, required: false
  private _guaranteedSendAckTimeout?: number; 
  public get guaranteedSendAckTimeout() {
    return this.getNumberAttribute('guaranteed_send_ack_timeout');
  }
  public set guaranteedSendAckTimeout(value: number) {
    this._guaranteedSendAckTimeout = value;
  }
  public resetGuaranteedSendAckTimeout() {
    this._guaranteedSendAckTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guaranteedSendAckTimeoutInput() {
    return this._guaranteedSendAckTimeout;
  }

  // guaranteed_send_window_size - computed: false, optional: true, required: false
  private _guaranteedSendWindowSize?: number; 
  public get guaranteedSendWindowSize() {
    return this.getNumberAttribute('guaranteed_send_window_size');
  }
  public set guaranteedSendWindowSize(value: number) {
    this._guaranteedSendWindowSize = value;
  }
  public resetGuaranteedSendWindowSize() {
    this._guaranteedSendWindowSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guaranteedSendWindowSizeInput() {
    return this._guaranteedSendWindowSize;
  }

  // messaging_default_delivery_mode - computed: false, optional: true, required: false
  private _messagingDefaultDeliveryMode?: string; 
  public get messagingDefaultDeliveryMode() {
    return this.getStringAttribute('messaging_default_delivery_mode');
  }
  public set messagingDefaultDeliveryMode(value: string) {
    this._messagingDefaultDeliveryMode = value;
  }
  public resetMessagingDefaultDeliveryMode() {
    this._messagingDefaultDeliveryMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messagingDefaultDeliveryModeInput() {
    return this._messagingDefaultDeliveryMode;
  }

  // messaging_default_dmq_eligible_enabled - computed: false, optional: true, required: false
  private _messagingDefaultDmqEligibleEnabled?: boolean | cdktf.IResolvable; 
  public get messagingDefaultDmqEligibleEnabled() {
    return this.getBooleanAttribute('messaging_default_dmq_eligible_enabled');
  }
  public set messagingDefaultDmqEligibleEnabled(value: boolean | cdktf.IResolvable) {
    this._messagingDefaultDmqEligibleEnabled = value;
  }
  public resetMessagingDefaultDmqEligibleEnabled() {
    this._messagingDefaultDmqEligibleEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messagingDefaultDmqEligibleEnabledInput() {
    return this._messagingDefaultDmqEligibleEnabled;
  }

  // messaging_default_eliding_eligible_enabled - computed: false, optional: true, required: false
  private _messagingDefaultElidingEligibleEnabled?: boolean | cdktf.IResolvable; 
  public get messagingDefaultElidingEligibleEnabled() {
    return this.getBooleanAttribute('messaging_default_eliding_eligible_enabled');
  }
  public set messagingDefaultElidingEligibleEnabled(value: boolean | cdktf.IResolvable) {
    this._messagingDefaultElidingEligibleEnabled = value;
  }
  public resetMessagingDefaultElidingEligibleEnabled() {
    this._messagingDefaultElidingEligibleEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messagingDefaultElidingEligibleEnabledInput() {
    return this._messagingDefaultElidingEligibleEnabled;
  }

  // messaging_jmsx_user_id_enabled - computed: false, optional: true, required: false
  private _messagingJmsxUserIdEnabled?: boolean | cdktf.IResolvable; 
  public get messagingJmsxUserIdEnabled() {
    return this.getBooleanAttribute('messaging_jmsx_user_id_enabled');
  }
  public set messagingJmsxUserIdEnabled(value: boolean | cdktf.IResolvable) {
    this._messagingJmsxUserIdEnabled = value;
  }
  public resetMessagingJmsxUserIdEnabled() {
    this._messagingJmsxUserIdEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messagingJmsxUserIdEnabledInput() {
    return this._messagingJmsxUserIdEnabled;
  }

  // messaging_payload_compression_level - computed: false, optional: true, required: false
  private _messagingPayloadCompressionLevel?: number; 
  public get messagingPayloadCompressionLevel() {
    return this.getNumberAttribute('messaging_payload_compression_level');
  }
  public set messagingPayloadCompressionLevel(value: number) {
    this._messagingPayloadCompressionLevel = value;
  }
  public resetMessagingPayloadCompressionLevel() {
    this._messagingPayloadCompressionLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messagingPayloadCompressionLevelInput() {
    return this._messagingPayloadCompressionLevel;
  }

  // messaging_text_in_xml_payload_enabled - computed: false, optional: true, required: false
  private _messagingTextInXmlPayloadEnabled?: boolean | cdktf.IResolvable; 
  public get messagingTextInXmlPayloadEnabled() {
    return this.getBooleanAttribute('messaging_text_in_xml_payload_enabled');
  }
  public set messagingTextInXmlPayloadEnabled(value: boolean | cdktf.IResolvable) {
    this._messagingTextInXmlPayloadEnabled = value;
  }
  public resetMessagingTextInXmlPayloadEnabled() {
    this._messagingTextInXmlPayloadEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messagingTextInXmlPayloadEnabledInput() {
    return this._messagingTextInXmlPayloadEnabled;
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

  // transport_compression_level - computed: false, optional: true, required: false
  private _transportCompressionLevel?: number; 
  public get transportCompressionLevel() {
    return this.getNumberAttribute('transport_compression_level');
  }
  public set transportCompressionLevel(value: number) {
    this._transportCompressionLevel = value;
  }
  public resetTransportCompressionLevel() {
    this._transportCompressionLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportCompressionLevelInput() {
    return this._transportCompressionLevel;
  }

  // transport_connect_retry_count - computed: false, optional: true, required: false
  private _transportConnectRetryCount?: number; 
  public get transportConnectRetryCount() {
    return this.getNumberAttribute('transport_connect_retry_count');
  }
  public set transportConnectRetryCount(value: number) {
    this._transportConnectRetryCount = value;
  }
  public resetTransportConnectRetryCount() {
    this._transportConnectRetryCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportConnectRetryCountInput() {
    return this._transportConnectRetryCount;
  }

  // transport_connect_retry_per_host_count - computed: false, optional: true, required: false
  private _transportConnectRetryPerHostCount?: number; 
  public get transportConnectRetryPerHostCount() {
    return this.getNumberAttribute('transport_connect_retry_per_host_count');
  }
  public set transportConnectRetryPerHostCount(value: number) {
    this._transportConnectRetryPerHostCount = value;
  }
  public resetTransportConnectRetryPerHostCount() {
    this._transportConnectRetryPerHostCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportConnectRetryPerHostCountInput() {
    return this._transportConnectRetryPerHostCount;
  }

  // transport_connect_timeout - computed: false, optional: true, required: false
  private _transportConnectTimeout?: number; 
  public get transportConnectTimeout() {
    return this.getNumberAttribute('transport_connect_timeout');
  }
  public set transportConnectTimeout(value: number) {
    this._transportConnectTimeout = value;
  }
  public resetTransportConnectTimeout() {
    this._transportConnectTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportConnectTimeoutInput() {
    return this._transportConnectTimeout;
  }

  // transport_direct_transport_enabled - computed: false, optional: true, required: false
  private _transportDirectTransportEnabled?: boolean | cdktf.IResolvable; 
  public get transportDirectTransportEnabled() {
    return this.getBooleanAttribute('transport_direct_transport_enabled');
  }
  public set transportDirectTransportEnabled(value: boolean | cdktf.IResolvable) {
    this._transportDirectTransportEnabled = value;
  }
  public resetTransportDirectTransportEnabled() {
    this._transportDirectTransportEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportDirectTransportEnabledInput() {
    return this._transportDirectTransportEnabled;
  }

  // transport_keepalive_count - computed: false, optional: true, required: false
  private _transportKeepaliveCount?: number; 
  public get transportKeepaliveCount() {
    return this.getNumberAttribute('transport_keepalive_count');
  }
  public set transportKeepaliveCount(value: number) {
    this._transportKeepaliveCount = value;
  }
  public resetTransportKeepaliveCount() {
    this._transportKeepaliveCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportKeepaliveCountInput() {
    return this._transportKeepaliveCount;
  }

  // transport_keepalive_enabled - computed: false, optional: true, required: false
  private _transportKeepaliveEnabled?: boolean | cdktf.IResolvable; 
  public get transportKeepaliveEnabled() {
    return this.getBooleanAttribute('transport_keepalive_enabled');
  }
  public set transportKeepaliveEnabled(value: boolean | cdktf.IResolvable) {
    this._transportKeepaliveEnabled = value;
  }
  public resetTransportKeepaliveEnabled() {
    this._transportKeepaliveEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportKeepaliveEnabledInput() {
    return this._transportKeepaliveEnabled;
  }

  // transport_keepalive_interval - computed: false, optional: true, required: false
  private _transportKeepaliveInterval?: number; 
  public get transportKeepaliveInterval() {
    return this.getNumberAttribute('transport_keepalive_interval');
  }
  public set transportKeepaliveInterval(value: number) {
    this._transportKeepaliveInterval = value;
  }
  public resetTransportKeepaliveInterval() {
    this._transportKeepaliveInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportKeepaliveIntervalInput() {
    return this._transportKeepaliveInterval;
  }

  // transport_msg_callback_on_io_thread_enabled - computed: false, optional: true, required: false
  private _transportMsgCallbackOnIoThreadEnabled?: boolean | cdktf.IResolvable; 
  public get transportMsgCallbackOnIoThreadEnabled() {
    return this.getBooleanAttribute('transport_msg_callback_on_io_thread_enabled');
  }
  public set transportMsgCallbackOnIoThreadEnabled(value: boolean | cdktf.IResolvable) {
    this._transportMsgCallbackOnIoThreadEnabled = value;
  }
  public resetTransportMsgCallbackOnIoThreadEnabled() {
    this._transportMsgCallbackOnIoThreadEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportMsgCallbackOnIoThreadEnabledInput() {
    return this._transportMsgCallbackOnIoThreadEnabled;
  }

  // transport_optimize_direct_enabled - computed: false, optional: true, required: false
  private _transportOptimizeDirectEnabled?: boolean | cdktf.IResolvable; 
  public get transportOptimizeDirectEnabled() {
    return this.getBooleanAttribute('transport_optimize_direct_enabled');
  }
  public set transportOptimizeDirectEnabled(value: boolean | cdktf.IResolvable) {
    this._transportOptimizeDirectEnabled = value;
  }
  public resetTransportOptimizeDirectEnabled() {
    this._transportOptimizeDirectEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportOptimizeDirectEnabledInput() {
    return this._transportOptimizeDirectEnabled;
  }

  // transport_port - computed: false, optional: true, required: false
  private _transportPort?: number; 
  public get transportPort() {
    return this.getNumberAttribute('transport_port');
  }
  public set transportPort(value: number) {
    this._transportPort = value;
  }
  public resetTransportPort() {
    this._transportPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportPortInput() {
    return this._transportPort;
  }

  // transport_read_timeout - computed: false, optional: true, required: false
  private _transportReadTimeout?: number; 
  public get transportReadTimeout() {
    return this.getNumberAttribute('transport_read_timeout');
  }
  public set transportReadTimeout(value: number) {
    this._transportReadTimeout = value;
  }
  public resetTransportReadTimeout() {
    this._transportReadTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportReadTimeoutInput() {
    return this._transportReadTimeout;
  }

  // transport_receive_buffer_size - computed: false, optional: true, required: false
  private _transportReceiveBufferSize?: number; 
  public get transportReceiveBufferSize() {
    return this.getNumberAttribute('transport_receive_buffer_size');
  }
  public set transportReceiveBufferSize(value: number) {
    this._transportReceiveBufferSize = value;
  }
  public resetTransportReceiveBufferSize() {
    this._transportReceiveBufferSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportReceiveBufferSizeInput() {
    return this._transportReceiveBufferSize;
  }

  // transport_reconnect_retry_count - computed: false, optional: true, required: false
  private _transportReconnectRetryCount?: number; 
  public get transportReconnectRetryCount() {
    return this.getNumberAttribute('transport_reconnect_retry_count');
  }
  public set transportReconnectRetryCount(value: number) {
    this._transportReconnectRetryCount = value;
  }
  public resetTransportReconnectRetryCount() {
    this._transportReconnectRetryCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportReconnectRetryCountInput() {
    return this._transportReconnectRetryCount;
  }

  // transport_reconnect_retry_wait - computed: false, optional: true, required: false
  private _transportReconnectRetryWait?: number; 
  public get transportReconnectRetryWait() {
    return this.getNumberAttribute('transport_reconnect_retry_wait');
  }
  public set transportReconnectRetryWait(value: number) {
    this._transportReconnectRetryWait = value;
  }
  public resetTransportReconnectRetryWait() {
    this._transportReconnectRetryWait = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportReconnectRetryWaitInput() {
    return this._transportReconnectRetryWait;
  }

  // transport_send_buffer_size - computed: false, optional: true, required: false
  private _transportSendBufferSize?: number; 
  public get transportSendBufferSize() {
    return this.getNumberAttribute('transport_send_buffer_size');
  }
  public set transportSendBufferSize(value: number) {
    this._transportSendBufferSize = value;
  }
  public resetTransportSendBufferSize() {
    this._transportSendBufferSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportSendBufferSizeInput() {
    return this._transportSendBufferSize;
  }

  // transport_tcp_no_delay_enabled - computed: false, optional: true, required: false
  private _transportTcpNoDelayEnabled?: boolean | cdktf.IResolvable; 
  public get transportTcpNoDelayEnabled() {
    return this.getBooleanAttribute('transport_tcp_no_delay_enabled');
  }
  public set transportTcpNoDelayEnabled(value: boolean | cdktf.IResolvable) {
    this._transportTcpNoDelayEnabled = value;
  }
  public resetTransportTcpNoDelayEnabled() {
    this._transportTcpNoDelayEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportTcpNoDelayEnabledInput() {
    return this._transportTcpNoDelayEnabled;
  }

  // xa_enabled - computed: false, optional: true, required: false
  private _xaEnabled?: boolean | cdktf.IResolvable; 
  public get xaEnabled() {
    return this.getBooleanAttribute('xa_enabled');
  }
  public set xaEnabled(value: boolean | cdktf.IResolvable) {
    this._xaEnabled = value;
  }
  public resetXaEnabled() {
    this._xaEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xaEnabledInput() {
    return this._xaEnabled;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_duplicate_client_id_enabled: cdktf.booleanToTerraform(this._allowDuplicateClientIdEnabled),
      client_description: cdktf.stringToTerraform(this._clientDescription),
      client_id: cdktf.stringToTerraform(this._clientId),
      connection_factory_name: cdktf.stringToTerraform(this._connectionFactoryName),
      dto_receive_override_enabled: cdktf.booleanToTerraform(this._dtoReceiveOverrideEnabled),
      dto_receive_subscriber_local_priority: cdktf.numberToTerraform(this._dtoReceiveSubscriberLocalPriority),
      dto_receive_subscriber_network_priority: cdktf.numberToTerraform(this._dtoReceiveSubscriberNetworkPriority),
      dto_send_enabled: cdktf.booleanToTerraform(this._dtoSendEnabled),
      dynamic_endpoint_create_durable_enabled: cdktf.booleanToTerraform(this._dynamicEndpointCreateDurableEnabled),
      dynamic_endpoint_respect_ttl_enabled: cdktf.booleanToTerraform(this._dynamicEndpointRespectTtlEnabled),
      guaranteed_receive_ack_timeout: cdktf.numberToTerraform(this._guaranteedReceiveAckTimeout),
      guaranteed_receive_reconnect_retry_count: cdktf.numberToTerraform(this._guaranteedReceiveReconnectRetryCount),
      guaranteed_receive_reconnect_retry_wait: cdktf.numberToTerraform(this._guaranteedReceiveReconnectRetryWait),
      guaranteed_receive_window_size: cdktf.numberToTerraform(this._guaranteedReceiveWindowSize),
      guaranteed_receive_window_size_ack_threshold: cdktf.numberToTerraform(this._guaranteedReceiveWindowSizeAckThreshold),
      guaranteed_send_ack_timeout: cdktf.numberToTerraform(this._guaranteedSendAckTimeout),
      guaranteed_send_window_size: cdktf.numberToTerraform(this._guaranteedSendWindowSize),
      messaging_default_delivery_mode: cdktf.stringToTerraform(this._messagingDefaultDeliveryMode),
      messaging_default_dmq_eligible_enabled: cdktf.booleanToTerraform(this._messagingDefaultDmqEligibleEnabled),
      messaging_default_eliding_eligible_enabled: cdktf.booleanToTerraform(this._messagingDefaultElidingEligibleEnabled),
      messaging_jmsx_user_id_enabled: cdktf.booleanToTerraform(this._messagingJmsxUserIdEnabled),
      messaging_payload_compression_level: cdktf.numberToTerraform(this._messagingPayloadCompressionLevel),
      messaging_text_in_xml_payload_enabled: cdktf.booleanToTerraform(this._messagingTextInXmlPayloadEnabled),
      msg_vpn_name: cdktf.stringToTerraform(this._msgVpnName),
      transport_compression_level: cdktf.numberToTerraform(this._transportCompressionLevel),
      transport_connect_retry_count: cdktf.numberToTerraform(this._transportConnectRetryCount),
      transport_connect_retry_per_host_count: cdktf.numberToTerraform(this._transportConnectRetryPerHostCount),
      transport_connect_timeout: cdktf.numberToTerraform(this._transportConnectTimeout),
      transport_direct_transport_enabled: cdktf.booleanToTerraform(this._transportDirectTransportEnabled),
      transport_keepalive_count: cdktf.numberToTerraform(this._transportKeepaliveCount),
      transport_keepalive_enabled: cdktf.booleanToTerraform(this._transportKeepaliveEnabled),
      transport_keepalive_interval: cdktf.numberToTerraform(this._transportKeepaliveInterval),
      transport_msg_callback_on_io_thread_enabled: cdktf.booleanToTerraform(this._transportMsgCallbackOnIoThreadEnabled),
      transport_optimize_direct_enabled: cdktf.booleanToTerraform(this._transportOptimizeDirectEnabled),
      transport_port: cdktf.numberToTerraform(this._transportPort),
      transport_read_timeout: cdktf.numberToTerraform(this._transportReadTimeout),
      transport_receive_buffer_size: cdktf.numberToTerraform(this._transportReceiveBufferSize),
      transport_reconnect_retry_count: cdktf.numberToTerraform(this._transportReconnectRetryCount),
      transport_reconnect_retry_wait: cdktf.numberToTerraform(this._transportReconnectRetryWait),
      transport_send_buffer_size: cdktf.numberToTerraform(this._transportSendBufferSize),
      transport_tcp_no_delay_enabled: cdktf.booleanToTerraform(this._transportTcpNoDelayEnabled),
      xa_enabled: cdktf.booleanToTerraform(this._xaEnabled),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_duplicate_client_id_enabled: {
        value: cdktf.booleanToHclTerraform(this._allowDuplicateClientIdEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      client_description: {
        value: cdktf.stringToHclTerraform(this._clientDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_id: {
        value: cdktf.stringToHclTerraform(this._clientId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connection_factory_name: {
        value: cdktf.stringToHclTerraform(this._connectionFactoryName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dto_receive_override_enabled: {
        value: cdktf.booleanToHclTerraform(this._dtoReceiveOverrideEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dto_receive_subscriber_local_priority: {
        value: cdktf.numberToHclTerraform(this._dtoReceiveSubscriberLocalPriority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dto_receive_subscriber_network_priority: {
        value: cdktf.numberToHclTerraform(this._dtoReceiveSubscriberNetworkPriority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dto_send_enabled: {
        value: cdktf.booleanToHclTerraform(this._dtoSendEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dynamic_endpoint_create_durable_enabled: {
        value: cdktf.booleanToHclTerraform(this._dynamicEndpointCreateDurableEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dynamic_endpoint_respect_ttl_enabled: {
        value: cdktf.booleanToHclTerraform(this._dynamicEndpointRespectTtlEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      guaranteed_receive_ack_timeout: {
        value: cdktf.numberToHclTerraform(this._guaranteedReceiveAckTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      guaranteed_receive_reconnect_retry_count: {
        value: cdktf.numberToHclTerraform(this._guaranteedReceiveReconnectRetryCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      guaranteed_receive_reconnect_retry_wait: {
        value: cdktf.numberToHclTerraform(this._guaranteedReceiveReconnectRetryWait),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      guaranteed_receive_window_size: {
        value: cdktf.numberToHclTerraform(this._guaranteedReceiveWindowSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      guaranteed_receive_window_size_ack_threshold: {
        value: cdktf.numberToHclTerraform(this._guaranteedReceiveWindowSizeAckThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      guaranteed_send_ack_timeout: {
        value: cdktf.numberToHclTerraform(this._guaranteedSendAckTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      guaranteed_send_window_size: {
        value: cdktf.numberToHclTerraform(this._guaranteedSendWindowSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      messaging_default_delivery_mode: {
        value: cdktf.stringToHclTerraform(this._messagingDefaultDeliveryMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      messaging_default_dmq_eligible_enabled: {
        value: cdktf.booleanToHclTerraform(this._messagingDefaultDmqEligibleEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      messaging_default_eliding_eligible_enabled: {
        value: cdktf.booleanToHclTerraform(this._messagingDefaultElidingEligibleEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      messaging_jmsx_user_id_enabled: {
        value: cdktf.booleanToHclTerraform(this._messagingJmsxUserIdEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      messaging_payload_compression_level: {
        value: cdktf.numberToHclTerraform(this._messagingPayloadCompressionLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      messaging_text_in_xml_payload_enabled: {
        value: cdktf.booleanToHclTerraform(this._messagingTextInXmlPayloadEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      msg_vpn_name: {
        value: cdktf.stringToHclTerraform(this._msgVpnName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transport_compression_level: {
        value: cdktf.numberToHclTerraform(this._transportCompressionLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      transport_connect_retry_count: {
        value: cdktf.numberToHclTerraform(this._transportConnectRetryCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      transport_connect_retry_per_host_count: {
        value: cdktf.numberToHclTerraform(this._transportConnectRetryPerHostCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      transport_connect_timeout: {
        value: cdktf.numberToHclTerraform(this._transportConnectTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      transport_direct_transport_enabled: {
        value: cdktf.booleanToHclTerraform(this._transportDirectTransportEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      transport_keepalive_count: {
        value: cdktf.numberToHclTerraform(this._transportKeepaliveCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      transport_keepalive_enabled: {
        value: cdktf.booleanToHclTerraform(this._transportKeepaliveEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      transport_keepalive_interval: {
        value: cdktf.numberToHclTerraform(this._transportKeepaliveInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      transport_msg_callback_on_io_thread_enabled: {
        value: cdktf.booleanToHclTerraform(this._transportMsgCallbackOnIoThreadEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      transport_optimize_direct_enabled: {
        value: cdktf.booleanToHclTerraform(this._transportOptimizeDirectEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      transport_port: {
        value: cdktf.numberToHclTerraform(this._transportPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      transport_read_timeout: {
        value: cdktf.numberToHclTerraform(this._transportReadTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      transport_receive_buffer_size: {
        value: cdktf.numberToHclTerraform(this._transportReceiveBufferSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      transport_reconnect_retry_count: {
        value: cdktf.numberToHclTerraform(this._transportReconnectRetryCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      transport_reconnect_retry_wait: {
        value: cdktf.numberToHclTerraform(this._transportReconnectRetryWait),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      transport_send_buffer_size: {
        value: cdktf.numberToHclTerraform(this._transportSendBufferSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      transport_tcp_no_delay_enabled: {
        value: cdktf.booleanToHclTerraform(this._transportTcpNoDelayEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      xa_enabled: {
        value: cdktf.booleanToHclTerraform(this._xaEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
