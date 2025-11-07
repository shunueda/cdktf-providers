// https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_client_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SolacebrokerMsgVpnClientProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable or disable allowing Bridge clients using the Client Profile to connect. Changing this setting does not affect existing Bridge client connections.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_client_profile#allow_bridge_connections_enabled SolacebrokerMsgVpnClientProfile#allow_bridge_connections_enabled}
  */
  readonly allowBridgeConnectionsEnabled?: boolean | cdktf.IResolvable;
  /**
  * The types of Queues and Topic Endpoints that clients using the client-profile can create. Changing this value does not affect existing client connections.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `"all"`. The allowed values and their meaning are:
  * 
  * <pre>
  * "all" - Client can create any type of endpoint.
  * "durable" - Client can create only durable endpoints.
  * "non-durable" - Client can create only non-durable endpoints.
  * </pre>
  *  Available since SEMP API version 2.14.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_client_profile#allow_guaranteed_endpoint_create_durability SolacebrokerMsgVpnClientProfile#allow_guaranteed_endpoint_create_durability}
  */
  readonly allowGuaranteedEndpointCreateDurability?: string;
  /**
  * Enable or disable allowing clients using the Client Profile to create topic endpoints or queues. Changing this value does not affect existing client connections.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_client_profile#allow_guaranteed_endpoint_create_enabled SolacebrokerMsgVpnClientProfile#allow_guaranteed_endpoint_create_enabled}
  */
  readonly allowGuaranteedEndpointCreateEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enable or disable allowing clients using the Client Profile to receive guaranteed messages. Changing this setting does not affect existing client connections.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_client_profile#allow_guaranteed_msg_receive_enabled SolacebrokerMsgVpnClientProfile#allow_guaranteed_msg_receive_enabled}
  */
  readonly allowGuaranteedMsgReceiveEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enable or disable allowing clients using the Client Profile to send guaranteed messages. Changing this setting does not affect existing client connections.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_client_profile#allow_guaranteed_msg_send_enabled SolacebrokerMsgVpnClientProfile#allow_guaranteed_msg_send_enabled}
  */
  readonly allowGuaranteedMsgSendEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enable or disable allowing shared subscriptions. Changing this setting does not affect existing subscriptions.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`. Available since SEMP API version 2.11.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_client_profile#allow_shared_subscriptions_enabled SolacebrokerMsgVpnClientProfile#allow_shared_subscriptions_enabled}
  */
  readonly allowSharedSubscriptionsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enable or disable allowing clients using the Client Profile to establish transacted sessions. Changing this setting does not affect existing client connections.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_client_profile#allow_transacted_sessions_enabled SolacebrokerMsgVpnClientProfile#allow_transacted_sessions_enabled}
  */
  readonly allowTransactedSessionsEnabled?: boolean | cdktf.IResolvable;
  /**
  * The name of a queue template to copy settings from when a new queue is created by a client using the Client Profile. If the referenced queue template does not exist, queue creation will fail when it tries to resolve this template.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `""`. Available since SEMP API version 2.14.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_client_profile#api_queue_management_copy_from_on_create_template_name SolacebrokerMsgVpnClientProfile#api_queue_management_copy_from_on_create_template_name}
  */
  readonly apiQueueManagementCopyFromOnCreateTemplateName?: string;
  /**
  * The name of a topic endpoint template to copy settings from when a new topic endpoint is created by a client using the Client Profile. If the referenced topic endpoint template does not exist, topic endpoint creation will fail when it tries to resolve this template.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `""`. Available since SEMP API version 2.14.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_client_profile#api_topic_endpoint_management_copy_from_on_create_template_name SolacebrokerMsgVpnClientProfile#api_topic_endpoint_management_copy_from_on_create_template_name}
  */
  readonly apiTopicEndpointManagementCopyFromOnCreateTemplateName?: string;
  /**
  * The name of the Client Profile.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_client_profile#client_profile_name SolacebrokerMsgVpnClientProfile#client_profile_name}
  */
  readonly clientProfileName: string;
  /**
  * Enable or disable allowing clients using the Client Profile to use compression.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `true`. Available since SEMP API version 2.10.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_client_profile#compression_enabled SolacebrokerMsgVpnClientProfile#compression_enabled}
  */
  readonly compressionEnabled?: boolean | cdktf.IResolvable;
  /**
  * The amount of time to delay the delivery of messages to clients using the Client Profile after the initial message has been delivered (the eliding delay interval), in milliseconds. A value of 0 means there is no delay in delivering messages to clients.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_client_profile#eliding_delay SolacebrokerMsgVpnClientProfile#eliding_delay}
  */
  readonly elidingDelay?: number;
  /**
  * Enable or disable message eliding for clients using the Client Profile.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_client_profile#eliding_enabled SolacebrokerMsgVpnClientProfile#eliding_enabled}
  */
  readonly elidingEnabled?: boolean | cdktf.IResolvable;
  /**
  * The maximum number of topics tracked for message eliding per client connection using the Client Profile.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `256`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_client_profile#eliding_max_topic_count SolacebrokerMsgVpnClientProfile#eliding_max_topic_count}
  */
  readonly elidingMaxTopicCount?: number;
  /**
  * The thresholds for the message spool usage event of Queues and Topic Endpoints provisioned by clients, relative to `max_msg_spool_usage` for these Queues and Topic Endpoints. Changing these values during operation does not affect existing sessions. For provisioned durable Queues and Topic Endpoints, this value applies when initially provisioned, but can then be changed afterwards by configuring the Queue or Topic Endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_client_profile#event_client_provisioned_endpoint_spool_usage_threshold SolacebrokerMsgVpnClientProfile#event_client_provisioned_endpoint_spool_usage_threshold}
  */
  readonly eventClientProvisionedEndpointSpoolUsageThreshold?: SolacebrokerMsgVpnClientProfileEventClientProvisionedEndpointSpoolUsageThreshold;
  /**
  * The thresholds for the Client Username connection count event of the Client Profile, relative to `max_connection_count_per_client_username`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_client_profile#event_connection_count_per_client_username_threshold SolacebrokerMsgVpnClientProfile#event_connection_count_per_client_username_threshold}
  */
  readonly eventConnectionCountPerClientUsernameThreshold?: SolacebrokerMsgVpnClientProfileEventConnectionCountPerClientUsernameThreshold;
  /**
  * The thresholds for the transmit flow count event of the Client Profile, relative to `max_egress_flow_count`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_client_profile#event_egress_flow_count_threshold SolacebrokerMsgVpnClientProfile#event_egress_flow_count_threshold}
  */
  readonly eventEgressFlowCountThreshold?: SolacebrokerMsgVpnClientProfileEventEgressFlowCountThreshold;
  /**
  * The thresholds for the Client Username endpoint count event of the Client Profile, relative to `max_endpoint_count_per_client_username`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_client_profile#event_endpoint_count_per_client_username_threshold SolacebrokerMsgVpnClientProfile#event_endpoint_count_per_client_username_threshold}
  */
  readonly eventEndpointCountPerClientUsernameThreshold?: SolacebrokerMsgVpnClientProfileEventEndpointCountPerClientUsernameThreshold;
  /**
  * The thresholds for the receive flow count event of the Client Profile, relative to `max_ingress_flow_count`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_client_profile#event_ingress_flow_count_threshold SolacebrokerMsgVpnClientProfile#event_ingress_flow_count_threshold}
  */
  readonly eventIngressFlowCountThreshold?: SolacebrokerMsgVpnClientProfileEventIngressFlowCountThreshold;
  /**
  * The thresholds for the client username SMF connection count event of the Client Profile, relative to `service_smf_max_connection_count_per_client_username`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_client_profile#event_service_smf_connection_count_per_client_username_threshold SolacebrokerMsgVpnClientProfile#event_service_smf_connection_count_per_client_username_threshold}
  */
  readonly eventServiceSmfConnectionCountPerClientUsernameThreshold?: SolacebrokerMsgVpnClientProfileEventServiceSmfConnectionCountPerClientUsernameThreshold;
  /**
  * The thresholds for the Client Username Web Transport connection count event of the Client Profile, relative to `service_web_max_connection_count_per_client_username`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_client_profile#event_service_web_connection_count_per_client_username_threshold SolacebrokerMsgVpnClientProfile#event_service_web_connection_count_per_client_username_threshold}
  */
  readonly eventServiceWebConnectionCountPerClientUsernameThreshold?: SolacebrokerMsgVpnClientProfileEventServiceWebConnectionCountPerClientUsernameThreshold;
  /**
  * The thresholds for the subscription count event of the Client Profile, relative to `max_subscription_count`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_client_profile#event_subscription_count_threshold SolacebrokerMsgVpnClientProfile#event_subscription_count_threshold}
  */
  readonly eventSubscriptionCountThreshold?: SolacebrokerMsgVpnClientProfileEventSubscriptionCountThreshold;
  /**
  * The thresholds for the transacted session count event of the Client Profile, relative to `max_transacted_session_count`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_client_profile#event_transacted_session_count_threshold SolacebrokerMsgVpnClientProfile#event_transacted_session_count_threshold}
  */
  readonly eventTransactedSessionCountThreshold?: SolacebrokerMsgVpnClientProfileEventTransactedSessionCountThreshold;
  /**
  * The thresholds for the transaction count event of the Client Profile, relative to `max_transaction_count`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_client_profile#event_transaction_count_threshold SolacebrokerMsgVpnClientProfile#event_transaction_count_threshold}
  */
  readonly eventTransactionCountThreshold?: SolacebrokerMsgVpnClientProfileEventTransactionCountThreshold;
  /**
  * The maximum number of AMQP links per AMQP client using the Client Profile.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `146625`. Available since SEMP API version 2.46.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_client_profile#max_amqp_link_count SolacebrokerMsgVpnClientProfile#max_amqp_link_count}
  */
  readonly maxAmqpLinkCount?: number;
  /**
  * The maximum number of client connections per Client Username using the Client Profile.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default is the maximum value supported by the platform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_client_profile#max_connection_count_per_client_username SolacebrokerMsgVpnClientProfile#max_connection_count_per_client_username}
  */
  readonly maxConnectionCountPerClientUsername?: number;
  /**
  * The maximum number of transmit flows that can be created by one client using the Client Profile.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `16000`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_client_profile#max_egress_flow_count SolacebrokerMsgVpnClientProfile#max_egress_flow_count}
  */
  readonly maxEgressFlowCount?: number;
  /**
  * The maximum number of queues and topic endpoints that can be created by clients with the same Client Username using the Client Profile.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `16000`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_client_profile#max_endpoint_count_per_client_username SolacebrokerMsgVpnClientProfile#max_endpoint_count_per_client_username}
  */
  readonly maxEndpointCountPerClientUsername?: number;
  /**
  * The maximum number of receive flows that can be created by one client using the Client Profile.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `16000`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_client_profile#max_ingress_flow_count SolacebrokerMsgVpnClientProfile#max_ingress_flow_count}
  */
  readonly maxIngressFlowCount?: number;
  /**
  * The maximum number of publisher and consumer messages combined that is allowed within a transaction for each client associated with this client-profile. Exceeding this limit will result in a transaction prepare or commit failure. Changing this value during operation will not affect existing sessions. It is only validated at transaction creation time. Large transactions consume more resources and are more likely to require retrieving messages from the ADB or from disk to process the transaction prepare or commit requests. The transaction processing rate may diminish if a large number of messages must be retrieved from the ADB or from disk. Care should be taken to not use excessively large transactions needlessly to avoid exceeding resource limits and to avoid reducing the overall broker performance.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `256`. Available since SEMP API version 2.20.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_client_profile#max_msgs_per_transaction SolacebrokerMsgVpnClientProfile#max_msgs_per_transaction}
  */
  readonly maxMsgsPerTransaction?: number;
  /**
  * The maximum number of subscriptions per client using the Client Profile. This limit is not enforced when a client adds a subscription to an endpoint, except for MQTT QoS 1 subscriptions. In addition, this limit is not enforced when a subscription is added using a management interface, such as CLI or SEMP.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default varies by platform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_client_profile#max_subscription_count SolacebrokerMsgVpnClientProfile#max_subscription_count}
  */
  readonly maxSubscriptionCount?: number;
  /**
  * The maximum number of transacted sessions that can be created by one client using the Client Profile.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `10`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_client_profile#max_transacted_session_count SolacebrokerMsgVpnClientProfile#max_transacted_session_count}
  */
  readonly maxTransactedSessionCount?: number;
  /**
  * The maximum number of transactions that can be created by one client using the Client Profile.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default varies by platform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_client_profile#max_transaction_count SolacebrokerMsgVpnClientProfile#max_transaction_count}
  */
  readonly maxTransactionCount?: number;
  /**
  * The name of the Message VPN.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_client_profile#msg_vpn_name SolacebrokerMsgVpnClientProfile#msg_vpn_name}
  */
  readonly msgVpnName: string;
  /**
  * The maximum depth of the "Control 1" (C-1) priority queue, in work units. Each work unit is 2048 bytes of message data.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `20000`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_client_profile#queue_control1_max_depth SolacebrokerMsgVpnClientProfile#queue_control1_max_depth}
  */
  readonly queueControl1MaxDepth?: number;
  /**
  * The number of messages that are always allowed entry into the "Control 1" (C-1) priority queue, regardless of the `queue_control1_max_depth` value.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `4`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_client_profile#queue_control1_min_msg_burst SolacebrokerMsgVpnClientProfile#queue_control1_min_msg_burst}
  */
  readonly queueControl1MinMsgBurst?: number;
  /**
  * The maximum depth of the "Direct 1" (D-1) priority queue, in work units. Each work unit is 2048 bytes of message data.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `20000`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_client_profile#queue_direct1_max_depth SolacebrokerMsgVpnClientProfile#queue_direct1_max_depth}
  */
  readonly queueDirect1MaxDepth?: number;
  /**
  * The number of messages that are always allowed entry into the "Direct 1" (D-1) priority queue, regardless of the `queue_direct1_max_depth` value.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `4`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_client_profile#queue_direct1_min_msg_burst SolacebrokerMsgVpnClientProfile#queue_direct1_min_msg_burst}
  */
  readonly queueDirect1MinMsgBurst?: number;
  /**
  * The maximum depth of the "Direct 2" (D-2) priority queue, in work units. Each work unit is 2048 bytes of message data.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `20000`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_client_profile#queue_direct2_max_depth SolacebrokerMsgVpnClientProfile#queue_direct2_max_depth}
  */
  readonly queueDirect2MaxDepth?: number;
  /**
  * The number of messages that are always allowed entry into the "Direct 2" (D-2) priority queue, regardless of the `queue_direct2_max_depth` value.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `4`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_client_profile#queue_direct2_min_msg_burst SolacebrokerMsgVpnClientProfile#queue_direct2_min_msg_burst}
  */
  readonly queueDirect2MinMsgBurst?: number;
  /**
  * The maximum depth of the "Direct 3" (D-3) priority queue, in work units. Each work unit is 2048 bytes of message data.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `20000`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_client_profile#queue_direct3_max_depth SolacebrokerMsgVpnClientProfile#queue_direct3_max_depth}
  */
  readonly queueDirect3MaxDepth?: number;
  /**
  * The number of messages that are always allowed entry into the "Direct 3" (D-3) priority queue, regardless of the `queue_direct3_max_depth` value.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `4`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_client_profile#queue_direct3_min_msg_burst SolacebrokerMsgVpnClientProfile#queue_direct3_min_msg_burst}
  */
  readonly queueDirect3MinMsgBurst?: number;
  /**
  * The maximum depth of the "Guaranteed 1" (G-1) priority queue, in work units. Each work unit is 2048 bytes of message data.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `20000`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_client_profile#queue_guaranteed1_max_depth SolacebrokerMsgVpnClientProfile#queue_guaranteed1_max_depth}
  */
  readonly queueGuaranteed1MaxDepth?: number;
  /**
  * The number of messages that are always allowed entry into the "Guaranteed 1" (G-1) priority queue, regardless of the `queue_guaranteed1_max_depth` value.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `255`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_client_profile#queue_guaranteed1_min_msg_burst SolacebrokerMsgVpnClientProfile#queue_guaranteed1_min_msg_burst}
  */
  readonly queueGuaranteed1MinMsgBurst?: number;
  /**
  * Enable or disable the sending of a negative acknowledgment (NACK) to a client using the Client Profile when discarding a guaranteed message due to no matching subscription found.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_client_profile#reject_msg_to_sender_on_no_subscription_match_enabled SolacebrokerMsgVpnClientProfile#reject_msg_to_sender_on_no_subscription_match_enabled}
  */
  readonly rejectMsgToSenderOnNoSubscriptionMatchEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enable or disable allowing clients using the Client Profile to connect to the Message VPN when its replication state is standby.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_client_profile#replication_allow_client_connect_when_standby_enabled SolacebrokerMsgVpnClientProfile#replication_allow_client_connect_when_standby_enabled}
  */
  readonly replicationAllowClientConnectWhenStandbyEnabled?: boolean | cdktf.IResolvable;
  /**
  * The minimum client keepalive timeout which will be enforced for client connections.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `30`. Available since SEMP API version 2.19.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_client_profile#service_min_keepalive_timeout SolacebrokerMsgVpnClientProfile#service_min_keepalive_timeout}
  */
  readonly serviceMinKeepaliveTimeout?: number;
  /**
  * The maximum number of SMF client connections per Client Username using the Client Profile.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default is the maximum value supported by the platform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_client_profile#service_smf_max_connection_count_per_client_username SolacebrokerMsgVpnClientProfile#service_smf_max_connection_count_per_client_username}
  */
  readonly serviceSmfMaxConnectionCountPerClientUsername?: number;
  /**
  * Enable or disable the enforcement of a minimum keepalive timeout for SMF clients.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`. Available since SEMP API version 2.19.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_client_profile#service_smf_min_keepalive_enabled SolacebrokerMsgVpnClientProfile#service_smf_min_keepalive_enabled}
  */
  readonly serviceSmfMinKeepaliveEnabled?: boolean | cdktf.IResolvable;
  /**
  * The timeout for inactive Web Transport client sessions using the Client Profile, in seconds.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `30`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_client_profile#service_web_inactive_timeout SolacebrokerMsgVpnClientProfile#service_web_inactive_timeout}
  */
  readonly serviceWebInactiveTimeout?: number;
  /**
  * The maximum number of Web Transport client connections per Client Username using the Client Profile.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default is the maximum value supported by the platform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_client_profile#service_web_max_connection_count_per_client_username SolacebrokerMsgVpnClientProfile#service_web_max_connection_count_per_client_username}
  */
  readonly serviceWebMaxConnectionCountPerClientUsername?: number;
  /**
  * The maximum Web Transport payload size before fragmentation occurs for clients using the Client Profile, in bytes. The size of the header is not included.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `1000000`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_client_profile#service_web_max_payload SolacebrokerMsgVpnClientProfile#service_web_max_payload}
  */
  readonly serviceWebMaxPayload?: number;
  /**
  * The TCP initial congestion window size for clients using the Client Profile, in multiples of the TCP Maximum Segment Size (MSS). Changing the value from its default of 2 results in non-compliance with RFC 2581. Contact support before changing this value.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `2`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_client_profile#tcp_congestion_window_size SolacebrokerMsgVpnClientProfile#tcp_congestion_window_size}
  */
  readonly tcpCongestionWindowSize?: number;
  /**
  * The number of TCP keepalive retransmissions to a client using the Client Profile before declaring that it is not available.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `5`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_client_profile#tcp_keepalive_count SolacebrokerMsgVpnClientProfile#tcp_keepalive_count}
  */
  readonly tcpKeepaliveCount?: number;
  /**
  * The amount of time a client connection using the Client Profile must remain idle before TCP begins sending keepalive probes, in seconds.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `3`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_client_profile#tcp_keepalive_idle_time SolacebrokerMsgVpnClientProfile#tcp_keepalive_idle_time}
  */
  readonly tcpKeepaliveIdleTime?: number;
  /**
  * The amount of time between TCP keepalive retransmissions to a client using the Client Profile when no acknowledgment is received, in seconds.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_client_profile#tcp_keepalive_interval SolacebrokerMsgVpnClientProfile#tcp_keepalive_interval}
  */
  readonly tcpKeepaliveInterval?: number;
  /**
  * The TCP maximum segment size for clients using the Client Profile, in bytes. Changes are applied to all existing connections.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `1460`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_client_profile#tcp_max_segment_size SolacebrokerMsgVpnClientProfile#tcp_max_segment_size}
  */
  readonly tcpMaxSegmentSize?: number;
  /**
  * The TCP maximum window size for clients using the Client Profile, in kilobytes. Changes are applied to all existing connections. This setting is ignored on the software broker.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `256`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_client_profile#tcp_max_window_size SolacebrokerMsgVpnClientProfile#tcp_max_window_size}
  */
  readonly tcpMaxWindowSize?: number;
  /**
  * Enable or disable allowing a client using the Client Profile to downgrade an encrypted connection to plain text.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `true`. Available since SEMP API version 2.8.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_client_profile#tls_allow_downgrade_to_plain_text_enabled SolacebrokerMsgVpnClientProfile#tls_allow_downgrade_to_plain_text_enabled}
  */
  readonly tlsAllowDowngradeToPlainTextEnabled?: boolean | cdktf.IResolvable;
}
export interface SolacebrokerMsgVpnClientProfileEventClientProvisionedEndpointSpoolUsageThreshold {
  /**
  * The clear threshold for the value of this counter as a percentage of its maximum value. Falling below this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `18`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_client_profile#clear_percent SolacebrokerMsgVpnClientProfile#clear_percent}
  */
  readonly clearPercent?: number;
  /**
  * The set threshold for the value of this counter as a percentage of its maximum value. Exceeding this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `25`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_client_profile#set_percent SolacebrokerMsgVpnClientProfile#set_percent}
  */
  readonly setPercent?: number;
}

export function solacebrokerMsgVpnClientProfileEventClientProvisionedEndpointSpoolUsageThresholdToTerraform(struct?: SolacebrokerMsgVpnClientProfileEventClientProvisionedEndpointSpoolUsageThreshold | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    clear_percent: cdktf.numberToTerraform(struct!.clearPercent),
    set_percent: cdktf.numberToTerraform(struct!.setPercent),
  }
}


export function solacebrokerMsgVpnClientProfileEventClientProvisionedEndpointSpoolUsageThresholdToHclTerraform(struct?: SolacebrokerMsgVpnClientProfileEventClientProvisionedEndpointSpoolUsageThreshold | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    clear_percent: {
      value: cdktf.numberToHclTerraform(struct!.clearPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    set_percent: {
      value: cdktf.numberToHclTerraform(struct!.setPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SolacebrokerMsgVpnClientProfileEventClientProvisionedEndpointSpoolUsageThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SolacebrokerMsgVpnClientProfileEventClientProvisionedEndpointSpoolUsageThreshold | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clearPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearPercent = this._clearPercent;
    }
    if (this._setPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.setPercent = this._setPercent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SolacebrokerMsgVpnClientProfileEventClientProvisionedEndpointSpoolUsageThreshold | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clearPercent = undefined;
      this._setPercent = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clearPercent = value.clearPercent;
      this._setPercent = value.setPercent;
    }
  }

  // clear_percent - computed: false, optional: true, required: false
  private _clearPercent?: number; 
  public get clearPercent() {
    return this.getNumberAttribute('clear_percent');
  }
  public set clearPercent(value: number) {
    this._clearPercent = value;
  }
  public resetClearPercent() {
    this._clearPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearPercentInput() {
    return this._clearPercent;
  }

  // set_percent - computed: false, optional: true, required: false
  private _setPercent?: number; 
  public get setPercent() {
    return this.getNumberAttribute('set_percent');
  }
  public set setPercent(value: number) {
    this._setPercent = value;
  }
  public resetSetPercent() {
    this._setPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setPercentInput() {
    return this._setPercent;
  }
}
export interface SolacebrokerMsgVpnClientProfileEventConnectionCountPerClientUsernameThreshold {
  /**
  * The clear threshold for the value of this counter as a percentage of its maximum value. Falling below this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `60`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_client_profile#clear_percent SolacebrokerMsgVpnClientProfile#clear_percent}
  */
  readonly clearPercent?: number;
  /**
  * The clear threshold for the absolute value of this counter. Falling below this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default is not applicable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_client_profile#clear_value SolacebrokerMsgVpnClientProfile#clear_value}
  */
  readonly clearValue?: number;
  /**
  * The set threshold for the value of this counter as a percentage of its maximum value. Exceeding this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `80`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_client_profile#set_percent SolacebrokerMsgVpnClientProfile#set_percent}
  */
  readonly setPercent?: number;
  /**
  * The set threshold for the absolute value of this counter. Exceeding this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default is not applicable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_client_profile#set_value SolacebrokerMsgVpnClientProfile#set_value}
  */
  readonly setValue?: number;
}

export function solacebrokerMsgVpnClientProfileEventConnectionCountPerClientUsernameThresholdToTerraform(struct?: SolacebrokerMsgVpnClientProfileEventConnectionCountPerClientUsernameThreshold | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    clear_percent: cdktf.numberToTerraform(struct!.clearPercent),
    clear_value: cdktf.numberToTerraform(struct!.clearValue),
    set_percent: cdktf.numberToTerraform(struct!.setPercent),
    set_value: cdktf.numberToTerraform(struct!.setValue),
  }
}


export function solacebrokerMsgVpnClientProfileEventConnectionCountPerClientUsernameThresholdToHclTerraform(struct?: SolacebrokerMsgVpnClientProfileEventConnectionCountPerClientUsernameThreshold | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    clear_percent: {
      value: cdktf.numberToHclTerraform(struct!.clearPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    clear_value: {
      value: cdktf.numberToHclTerraform(struct!.clearValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    set_percent: {
      value: cdktf.numberToHclTerraform(struct!.setPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    set_value: {
      value: cdktf.numberToHclTerraform(struct!.setValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SolacebrokerMsgVpnClientProfileEventConnectionCountPerClientUsernameThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SolacebrokerMsgVpnClientProfileEventConnectionCountPerClientUsernameThreshold | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clearPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearPercent = this._clearPercent;
    }
    if (this._clearValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearValue = this._clearValue;
    }
    if (this._setPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.setPercent = this._setPercent;
    }
    if (this._setValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.setValue = this._setValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SolacebrokerMsgVpnClientProfileEventConnectionCountPerClientUsernameThreshold | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clearPercent = undefined;
      this._clearValue = undefined;
      this._setPercent = undefined;
      this._setValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clearPercent = value.clearPercent;
      this._clearValue = value.clearValue;
      this._setPercent = value.setPercent;
      this._setValue = value.setValue;
    }
  }

  // clear_percent - computed: false, optional: true, required: false
  private _clearPercent?: number; 
  public get clearPercent() {
    return this.getNumberAttribute('clear_percent');
  }
  public set clearPercent(value: number) {
    this._clearPercent = value;
  }
  public resetClearPercent() {
    this._clearPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearPercentInput() {
    return this._clearPercent;
  }

  // clear_value - computed: false, optional: true, required: false
  private _clearValue?: number; 
  public get clearValue() {
    return this.getNumberAttribute('clear_value');
  }
  public set clearValue(value: number) {
    this._clearValue = value;
  }
  public resetClearValue() {
    this._clearValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearValueInput() {
    return this._clearValue;
  }

  // set_percent - computed: false, optional: true, required: false
  private _setPercent?: number; 
  public get setPercent() {
    return this.getNumberAttribute('set_percent');
  }
  public set setPercent(value: number) {
    this._setPercent = value;
  }
  public resetSetPercent() {
    this._setPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setPercentInput() {
    return this._setPercent;
  }

  // set_value - computed: false, optional: true, required: false
  private _setValue?: number; 
  public get setValue() {
    return this.getNumberAttribute('set_value');
  }
  public set setValue(value: number) {
    this._setValue = value;
  }
  public resetSetValue() {
    this._setValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setValueInput() {
    return this._setValue;
  }
}
export interface SolacebrokerMsgVpnClientProfileEventEgressFlowCountThreshold {
  /**
  * The clear threshold for the value of this counter as a percentage of its maximum value. Falling below this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `60`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_client_profile#clear_percent SolacebrokerMsgVpnClientProfile#clear_percent}
  */
  readonly clearPercent?: number;
  /**
  * The clear threshold for the absolute value of this counter. Falling below this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default is not applicable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_client_profile#clear_value SolacebrokerMsgVpnClientProfile#clear_value}
  */
  readonly clearValue?: number;
  /**
  * The set threshold for the value of this counter as a percentage of its maximum value. Exceeding this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `80`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_client_profile#set_percent SolacebrokerMsgVpnClientProfile#set_percent}
  */
  readonly setPercent?: number;
  /**
  * The set threshold for the absolute value of this counter. Exceeding this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default is not applicable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_client_profile#set_value SolacebrokerMsgVpnClientProfile#set_value}
  */
  readonly setValue?: number;
}

export function solacebrokerMsgVpnClientProfileEventEgressFlowCountThresholdToTerraform(struct?: SolacebrokerMsgVpnClientProfileEventEgressFlowCountThreshold | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    clear_percent: cdktf.numberToTerraform(struct!.clearPercent),
    clear_value: cdktf.numberToTerraform(struct!.clearValue),
    set_percent: cdktf.numberToTerraform(struct!.setPercent),
    set_value: cdktf.numberToTerraform(struct!.setValue),
  }
}


export function solacebrokerMsgVpnClientProfileEventEgressFlowCountThresholdToHclTerraform(struct?: SolacebrokerMsgVpnClientProfileEventEgressFlowCountThreshold | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    clear_percent: {
      value: cdktf.numberToHclTerraform(struct!.clearPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    clear_value: {
      value: cdktf.numberToHclTerraform(struct!.clearValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    set_percent: {
      value: cdktf.numberToHclTerraform(struct!.setPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    set_value: {
      value: cdktf.numberToHclTerraform(struct!.setValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SolacebrokerMsgVpnClientProfileEventEgressFlowCountThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SolacebrokerMsgVpnClientProfileEventEgressFlowCountThreshold | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clearPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearPercent = this._clearPercent;
    }
    if (this._clearValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearValue = this._clearValue;
    }
    if (this._setPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.setPercent = this._setPercent;
    }
    if (this._setValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.setValue = this._setValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SolacebrokerMsgVpnClientProfileEventEgressFlowCountThreshold | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clearPercent = undefined;
      this._clearValue = undefined;
      this._setPercent = undefined;
      this._setValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clearPercent = value.clearPercent;
      this._clearValue = value.clearValue;
      this._setPercent = value.setPercent;
      this._setValue = value.setValue;
    }
  }

  // clear_percent - computed: false, optional: true, required: false
  private _clearPercent?: number; 
  public get clearPercent() {
    return this.getNumberAttribute('clear_percent');
  }
  public set clearPercent(value: number) {
    this._clearPercent = value;
  }
  public resetClearPercent() {
    this._clearPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearPercentInput() {
    return this._clearPercent;
  }

  // clear_value - computed: false, optional: true, required: false
  private _clearValue?: number; 
  public get clearValue() {
    return this.getNumberAttribute('clear_value');
  }
  public set clearValue(value: number) {
    this._clearValue = value;
  }
  public resetClearValue() {
    this._clearValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearValueInput() {
    return this._clearValue;
  }

  // set_percent - computed: false, optional: true, required: false
  private _setPercent?: number; 
  public get setPercent() {
    return this.getNumberAttribute('set_percent');
  }
  public set setPercent(value: number) {
    this._setPercent = value;
  }
  public resetSetPercent() {
    this._setPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setPercentInput() {
    return this._setPercent;
  }

  // set_value - computed: false, optional: true, required: false
  private _setValue?: number; 
  public get setValue() {
    return this.getNumberAttribute('set_value');
  }
  public set setValue(value: number) {
    this._setValue = value;
  }
  public resetSetValue() {
    this._setValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setValueInput() {
    return this._setValue;
  }
}
export interface SolacebrokerMsgVpnClientProfileEventEndpointCountPerClientUsernameThreshold {
  /**
  * The clear threshold for the value of this counter as a percentage of its maximum value. Falling below this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `60`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_client_profile#clear_percent SolacebrokerMsgVpnClientProfile#clear_percent}
  */
  readonly clearPercent?: number;
  /**
  * The clear threshold for the absolute value of this counter. Falling below this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default is not applicable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_client_profile#clear_value SolacebrokerMsgVpnClientProfile#clear_value}
  */
  readonly clearValue?: number;
  /**
  * The set threshold for the value of this counter as a percentage of its maximum value. Exceeding this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `80`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_client_profile#set_percent SolacebrokerMsgVpnClientProfile#set_percent}
  */
  readonly setPercent?: number;
  /**
  * The set threshold for the absolute value of this counter. Exceeding this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default is not applicable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_client_profile#set_value SolacebrokerMsgVpnClientProfile#set_value}
  */
  readonly setValue?: number;
}

export function solacebrokerMsgVpnClientProfileEventEndpointCountPerClientUsernameThresholdToTerraform(struct?: SolacebrokerMsgVpnClientProfileEventEndpointCountPerClientUsernameThreshold | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    clear_percent: cdktf.numberToTerraform(struct!.clearPercent),
    clear_value: cdktf.numberToTerraform(struct!.clearValue),
    set_percent: cdktf.numberToTerraform(struct!.setPercent),
    set_value: cdktf.numberToTerraform(struct!.setValue),
  }
}


export function solacebrokerMsgVpnClientProfileEventEndpointCountPerClientUsernameThresholdToHclTerraform(struct?: SolacebrokerMsgVpnClientProfileEventEndpointCountPerClientUsernameThreshold | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    clear_percent: {
      value: cdktf.numberToHclTerraform(struct!.clearPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    clear_value: {
      value: cdktf.numberToHclTerraform(struct!.clearValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    set_percent: {
      value: cdktf.numberToHclTerraform(struct!.setPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    set_value: {
      value: cdktf.numberToHclTerraform(struct!.setValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SolacebrokerMsgVpnClientProfileEventEndpointCountPerClientUsernameThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SolacebrokerMsgVpnClientProfileEventEndpointCountPerClientUsernameThreshold | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clearPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearPercent = this._clearPercent;
    }
    if (this._clearValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearValue = this._clearValue;
    }
    if (this._setPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.setPercent = this._setPercent;
    }
    if (this._setValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.setValue = this._setValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SolacebrokerMsgVpnClientProfileEventEndpointCountPerClientUsernameThreshold | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clearPercent = undefined;
      this._clearValue = undefined;
      this._setPercent = undefined;
      this._setValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clearPercent = value.clearPercent;
      this._clearValue = value.clearValue;
      this._setPercent = value.setPercent;
      this._setValue = value.setValue;
    }
  }

  // clear_percent - computed: false, optional: true, required: false
  private _clearPercent?: number; 
  public get clearPercent() {
    return this.getNumberAttribute('clear_percent');
  }
  public set clearPercent(value: number) {
    this._clearPercent = value;
  }
  public resetClearPercent() {
    this._clearPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearPercentInput() {
    return this._clearPercent;
  }

  // clear_value - computed: false, optional: true, required: false
  private _clearValue?: number; 
  public get clearValue() {
    return this.getNumberAttribute('clear_value');
  }
  public set clearValue(value: number) {
    this._clearValue = value;
  }
  public resetClearValue() {
    this._clearValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearValueInput() {
    return this._clearValue;
  }

  // set_percent - computed: false, optional: true, required: false
  private _setPercent?: number; 
  public get setPercent() {
    return this.getNumberAttribute('set_percent');
  }
  public set setPercent(value: number) {
    this._setPercent = value;
  }
  public resetSetPercent() {
    this._setPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setPercentInput() {
    return this._setPercent;
  }

  // set_value - computed: false, optional: true, required: false
  private _setValue?: number; 
  public get setValue() {
    return this.getNumberAttribute('set_value');
  }
  public set setValue(value: number) {
    this._setValue = value;
  }
  public resetSetValue() {
    this._setValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setValueInput() {
    return this._setValue;
  }
}
export interface SolacebrokerMsgVpnClientProfileEventIngressFlowCountThreshold {
  /**
  * The clear threshold for the value of this counter as a percentage of its maximum value. Falling below this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `60`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_client_profile#clear_percent SolacebrokerMsgVpnClientProfile#clear_percent}
  */
  readonly clearPercent?: number;
  /**
  * The clear threshold for the absolute value of this counter. Falling below this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default is not applicable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_client_profile#clear_value SolacebrokerMsgVpnClientProfile#clear_value}
  */
  readonly clearValue?: number;
  /**
  * The set threshold for the value of this counter as a percentage of its maximum value. Exceeding this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `80`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_client_profile#set_percent SolacebrokerMsgVpnClientProfile#set_percent}
  */
  readonly setPercent?: number;
  /**
  * The set threshold for the absolute value of this counter. Exceeding this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default is not applicable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_client_profile#set_value SolacebrokerMsgVpnClientProfile#set_value}
  */
  readonly setValue?: number;
}

export function solacebrokerMsgVpnClientProfileEventIngressFlowCountThresholdToTerraform(struct?: SolacebrokerMsgVpnClientProfileEventIngressFlowCountThreshold | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    clear_percent: cdktf.numberToTerraform(struct!.clearPercent),
    clear_value: cdktf.numberToTerraform(struct!.clearValue),
    set_percent: cdktf.numberToTerraform(struct!.setPercent),
    set_value: cdktf.numberToTerraform(struct!.setValue),
  }
}


export function solacebrokerMsgVpnClientProfileEventIngressFlowCountThresholdToHclTerraform(struct?: SolacebrokerMsgVpnClientProfileEventIngressFlowCountThreshold | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    clear_percent: {
      value: cdktf.numberToHclTerraform(struct!.clearPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    clear_value: {
      value: cdktf.numberToHclTerraform(struct!.clearValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    set_percent: {
      value: cdktf.numberToHclTerraform(struct!.setPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    set_value: {
      value: cdktf.numberToHclTerraform(struct!.setValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SolacebrokerMsgVpnClientProfileEventIngressFlowCountThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SolacebrokerMsgVpnClientProfileEventIngressFlowCountThreshold | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clearPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearPercent = this._clearPercent;
    }
    if (this._clearValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearValue = this._clearValue;
    }
    if (this._setPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.setPercent = this._setPercent;
    }
    if (this._setValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.setValue = this._setValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SolacebrokerMsgVpnClientProfileEventIngressFlowCountThreshold | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clearPercent = undefined;
      this._clearValue = undefined;
      this._setPercent = undefined;
      this._setValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clearPercent = value.clearPercent;
      this._clearValue = value.clearValue;
      this._setPercent = value.setPercent;
      this._setValue = value.setValue;
    }
  }

  // clear_percent - computed: false, optional: true, required: false
  private _clearPercent?: number; 
  public get clearPercent() {
    return this.getNumberAttribute('clear_percent');
  }
  public set clearPercent(value: number) {
    this._clearPercent = value;
  }
  public resetClearPercent() {
    this._clearPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearPercentInput() {
    return this._clearPercent;
  }

  // clear_value - computed: false, optional: true, required: false
  private _clearValue?: number; 
  public get clearValue() {
    return this.getNumberAttribute('clear_value');
  }
  public set clearValue(value: number) {
    this._clearValue = value;
  }
  public resetClearValue() {
    this._clearValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearValueInput() {
    return this._clearValue;
  }

  // set_percent - computed: false, optional: true, required: false
  private _setPercent?: number; 
  public get setPercent() {
    return this.getNumberAttribute('set_percent');
  }
  public set setPercent(value: number) {
    this._setPercent = value;
  }
  public resetSetPercent() {
    this._setPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setPercentInput() {
    return this._setPercent;
  }

  // set_value - computed: false, optional: true, required: false
  private _setValue?: number; 
  public get setValue() {
    return this.getNumberAttribute('set_value');
  }
  public set setValue(value: number) {
    this._setValue = value;
  }
  public resetSetValue() {
    this._setValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setValueInput() {
    return this._setValue;
  }
}
export interface SolacebrokerMsgVpnClientProfileEventServiceSmfConnectionCountPerClientUsernameThreshold {
  /**
  * The clear threshold for the value of this counter as a percentage of its maximum value. Falling below this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `60`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_client_profile#clear_percent SolacebrokerMsgVpnClientProfile#clear_percent}
  */
  readonly clearPercent?: number;
  /**
  * The clear threshold for the absolute value of this counter. Falling below this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default is not applicable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_client_profile#clear_value SolacebrokerMsgVpnClientProfile#clear_value}
  */
  readonly clearValue?: number;
  /**
  * The set threshold for the value of this counter as a percentage of its maximum value. Exceeding this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `80`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_client_profile#set_percent SolacebrokerMsgVpnClientProfile#set_percent}
  */
  readonly setPercent?: number;
  /**
  * The set threshold for the absolute value of this counter. Exceeding this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default is not applicable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_client_profile#set_value SolacebrokerMsgVpnClientProfile#set_value}
  */
  readonly setValue?: number;
}

export function solacebrokerMsgVpnClientProfileEventServiceSmfConnectionCountPerClientUsernameThresholdToTerraform(struct?: SolacebrokerMsgVpnClientProfileEventServiceSmfConnectionCountPerClientUsernameThreshold | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    clear_percent: cdktf.numberToTerraform(struct!.clearPercent),
    clear_value: cdktf.numberToTerraform(struct!.clearValue),
    set_percent: cdktf.numberToTerraform(struct!.setPercent),
    set_value: cdktf.numberToTerraform(struct!.setValue),
  }
}


export function solacebrokerMsgVpnClientProfileEventServiceSmfConnectionCountPerClientUsernameThresholdToHclTerraform(struct?: SolacebrokerMsgVpnClientProfileEventServiceSmfConnectionCountPerClientUsernameThreshold | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    clear_percent: {
      value: cdktf.numberToHclTerraform(struct!.clearPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    clear_value: {
      value: cdktf.numberToHclTerraform(struct!.clearValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    set_percent: {
      value: cdktf.numberToHclTerraform(struct!.setPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    set_value: {
      value: cdktf.numberToHclTerraform(struct!.setValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SolacebrokerMsgVpnClientProfileEventServiceSmfConnectionCountPerClientUsernameThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SolacebrokerMsgVpnClientProfileEventServiceSmfConnectionCountPerClientUsernameThreshold | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clearPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearPercent = this._clearPercent;
    }
    if (this._clearValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearValue = this._clearValue;
    }
    if (this._setPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.setPercent = this._setPercent;
    }
    if (this._setValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.setValue = this._setValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SolacebrokerMsgVpnClientProfileEventServiceSmfConnectionCountPerClientUsernameThreshold | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clearPercent = undefined;
      this._clearValue = undefined;
      this._setPercent = undefined;
      this._setValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clearPercent = value.clearPercent;
      this._clearValue = value.clearValue;
      this._setPercent = value.setPercent;
      this._setValue = value.setValue;
    }
  }

  // clear_percent - computed: false, optional: true, required: false
  private _clearPercent?: number; 
  public get clearPercent() {
    return this.getNumberAttribute('clear_percent');
  }
  public set clearPercent(value: number) {
    this._clearPercent = value;
  }
  public resetClearPercent() {
    this._clearPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearPercentInput() {
    return this._clearPercent;
  }

  // clear_value - computed: false, optional: true, required: false
  private _clearValue?: number; 
  public get clearValue() {
    return this.getNumberAttribute('clear_value');
  }
  public set clearValue(value: number) {
    this._clearValue = value;
  }
  public resetClearValue() {
    this._clearValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearValueInput() {
    return this._clearValue;
  }

  // set_percent - computed: false, optional: true, required: false
  private _setPercent?: number; 
  public get setPercent() {
    return this.getNumberAttribute('set_percent');
  }
  public set setPercent(value: number) {
    this._setPercent = value;
  }
  public resetSetPercent() {
    this._setPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setPercentInput() {
    return this._setPercent;
  }

  // set_value - computed: false, optional: true, required: false
  private _setValue?: number; 
  public get setValue() {
    return this.getNumberAttribute('set_value');
  }
  public set setValue(value: number) {
    this._setValue = value;
  }
  public resetSetValue() {
    this._setValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setValueInput() {
    return this._setValue;
  }
}
export interface SolacebrokerMsgVpnClientProfileEventServiceWebConnectionCountPerClientUsernameThreshold {
  /**
  * The clear threshold for the value of this counter as a percentage of its maximum value. Falling below this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `60`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_client_profile#clear_percent SolacebrokerMsgVpnClientProfile#clear_percent}
  */
  readonly clearPercent?: number;
  /**
  * The clear threshold for the absolute value of this counter. Falling below this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default is not applicable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_client_profile#clear_value SolacebrokerMsgVpnClientProfile#clear_value}
  */
  readonly clearValue?: number;
  /**
  * The set threshold for the value of this counter as a percentage of its maximum value. Exceeding this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `80`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_client_profile#set_percent SolacebrokerMsgVpnClientProfile#set_percent}
  */
  readonly setPercent?: number;
  /**
  * The set threshold for the absolute value of this counter. Exceeding this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default is not applicable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_client_profile#set_value SolacebrokerMsgVpnClientProfile#set_value}
  */
  readonly setValue?: number;
}

export function solacebrokerMsgVpnClientProfileEventServiceWebConnectionCountPerClientUsernameThresholdToTerraform(struct?: SolacebrokerMsgVpnClientProfileEventServiceWebConnectionCountPerClientUsernameThreshold | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    clear_percent: cdktf.numberToTerraform(struct!.clearPercent),
    clear_value: cdktf.numberToTerraform(struct!.clearValue),
    set_percent: cdktf.numberToTerraform(struct!.setPercent),
    set_value: cdktf.numberToTerraform(struct!.setValue),
  }
}


export function solacebrokerMsgVpnClientProfileEventServiceWebConnectionCountPerClientUsernameThresholdToHclTerraform(struct?: SolacebrokerMsgVpnClientProfileEventServiceWebConnectionCountPerClientUsernameThreshold | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    clear_percent: {
      value: cdktf.numberToHclTerraform(struct!.clearPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    clear_value: {
      value: cdktf.numberToHclTerraform(struct!.clearValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    set_percent: {
      value: cdktf.numberToHclTerraform(struct!.setPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    set_value: {
      value: cdktf.numberToHclTerraform(struct!.setValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SolacebrokerMsgVpnClientProfileEventServiceWebConnectionCountPerClientUsernameThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SolacebrokerMsgVpnClientProfileEventServiceWebConnectionCountPerClientUsernameThreshold | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clearPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearPercent = this._clearPercent;
    }
    if (this._clearValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearValue = this._clearValue;
    }
    if (this._setPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.setPercent = this._setPercent;
    }
    if (this._setValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.setValue = this._setValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SolacebrokerMsgVpnClientProfileEventServiceWebConnectionCountPerClientUsernameThreshold | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clearPercent = undefined;
      this._clearValue = undefined;
      this._setPercent = undefined;
      this._setValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clearPercent = value.clearPercent;
      this._clearValue = value.clearValue;
      this._setPercent = value.setPercent;
      this._setValue = value.setValue;
    }
  }

  // clear_percent - computed: false, optional: true, required: false
  private _clearPercent?: number; 
  public get clearPercent() {
    return this.getNumberAttribute('clear_percent');
  }
  public set clearPercent(value: number) {
    this._clearPercent = value;
  }
  public resetClearPercent() {
    this._clearPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearPercentInput() {
    return this._clearPercent;
  }

  // clear_value - computed: false, optional: true, required: false
  private _clearValue?: number; 
  public get clearValue() {
    return this.getNumberAttribute('clear_value');
  }
  public set clearValue(value: number) {
    this._clearValue = value;
  }
  public resetClearValue() {
    this._clearValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearValueInput() {
    return this._clearValue;
  }

  // set_percent - computed: false, optional: true, required: false
  private _setPercent?: number; 
  public get setPercent() {
    return this.getNumberAttribute('set_percent');
  }
  public set setPercent(value: number) {
    this._setPercent = value;
  }
  public resetSetPercent() {
    this._setPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setPercentInput() {
    return this._setPercent;
  }

  // set_value - computed: false, optional: true, required: false
  private _setValue?: number; 
  public get setValue() {
    return this.getNumberAttribute('set_value');
  }
  public set setValue(value: number) {
    this._setValue = value;
  }
  public resetSetValue() {
    this._setValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setValueInput() {
    return this._setValue;
  }
}
export interface SolacebrokerMsgVpnClientProfileEventSubscriptionCountThreshold {
  /**
  * The clear threshold for the value of this counter as a percentage of its maximum value. Falling below this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `60`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_client_profile#clear_percent SolacebrokerMsgVpnClientProfile#clear_percent}
  */
  readonly clearPercent?: number;
  /**
  * The clear threshold for the absolute value of this counter. Falling below this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default is not applicable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_client_profile#clear_value SolacebrokerMsgVpnClientProfile#clear_value}
  */
  readonly clearValue?: number;
  /**
  * The set threshold for the value of this counter as a percentage of its maximum value. Exceeding this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `80`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_client_profile#set_percent SolacebrokerMsgVpnClientProfile#set_percent}
  */
  readonly setPercent?: number;
  /**
  * The set threshold for the absolute value of this counter. Exceeding this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default is not applicable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_client_profile#set_value SolacebrokerMsgVpnClientProfile#set_value}
  */
  readonly setValue?: number;
}

export function solacebrokerMsgVpnClientProfileEventSubscriptionCountThresholdToTerraform(struct?: SolacebrokerMsgVpnClientProfileEventSubscriptionCountThreshold | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    clear_percent: cdktf.numberToTerraform(struct!.clearPercent),
    clear_value: cdktf.numberToTerraform(struct!.clearValue),
    set_percent: cdktf.numberToTerraform(struct!.setPercent),
    set_value: cdktf.numberToTerraform(struct!.setValue),
  }
}


export function solacebrokerMsgVpnClientProfileEventSubscriptionCountThresholdToHclTerraform(struct?: SolacebrokerMsgVpnClientProfileEventSubscriptionCountThreshold | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    clear_percent: {
      value: cdktf.numberToHclTerraform(struct!.clearPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    clear_value: {
      value: cdktf.numberToHclTerraform(struct!.clearValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    set_percent: {
      value: cdktf.numberToHclTerraform(struct!.setPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    set_value: {
      value: cdktf.numberToHclTerraform(struct!.setValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SolacebrokerMsgVpnClientProfileEventSubscriptionCountThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SolacebrokerMsgVpnClientProfileEventSubscriptionCountThreshold | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clearPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearPercent = this._clearPercent;
    }
    if (this._clearValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearValue = this._clearValue;
    }
    if (this._setPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.setPercent = this._setPercent;
    }
    if (this._setValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.setValue = this._setValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SolacebrokerMsgVpnClientProfileEventSubscriptionCountThreshold | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clearPercent = undefined;
      this._clearValue = undefined;
      this._setPercent = undefined;
      this._setValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clearPercent = value.clearPercent;
      this._clearValue = value.clearValue;
      this._setPercent = value.setPercent;
      this._setValue = value.setValue;
    }
  }

  // clear_percent - computed: false, optional: true, required: false
  private _clearPercent?: number; 
  public get clearPercent() {
    return this.getNumberAttribute('clear_percent');
  }
  public set clearPercent(value: number) {
    this._clearPercent = value;
  }
  public resetClearPercent() {
    this._clearPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearPercentInput() {
    return this._clearPercent;
  }

  // clear_value - computed: false, optional: true, required: false
  private _clearValue?: number; 
  public get clearValue() {
    return this.getNumberAttribute('clear_value');
  }
  public set clearValue(value: number) {
    this._clearValue = value;
  }
  public resetClearValue() {
    this._clearValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearValueInput() {
    return this._clearValue;
  }

  // set_percent - computed: false, optional: true, required: false
  private _setPercent?: number; 
  public get setPercent() {
    return this.getNumberAttribute('set_percent');
  }
  public set setPercent(value: number) {
    this._setPercent = value;
  }
  public resetSetPercent() {
    this._setPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setPercentInput() {
    return this._setPercent;
  }

  // set_value - computed: false, optional: true, required: false
  private _setValue?: number; 
  public get setValue() {
    return this.getNumberAttribute('set_value');
  }
  public set setValue(value: number) {
    this._setValue = value;
  }
  public resetSetValue() {
    this._setValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setValueInput() {
    return this._setValue;
  }
}
export interface SolacebrokerMsgVpnClientProfileEventTransactedSessionCountThreshold {
  /**
  * The clear threshold for the value of this counter as a percentage of its maximum value. Falling below this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `60`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_client_profile#clear_percent SolacebrokerMsgVpnClientProfile#clear_percent}
  */
  readonly clearPercent?: number;
  /**
  * The clear threshold for the absolute value of this counter. Falling below this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default is not applicable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_client_profile#clear_value SolacebrokerMsgVpnClientProfile#clear_value}
  */
  readonly clearValue?: number;
  /**
  * The set threshold for the value of this counter as a percentage of its maximum value. Exceeding this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `80`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_client_profile#set_percent SolacebrokerMsgVpnClientProfile#set_percent}
  */
  readonly setPercent?: number;
  /**
  * The set threshold for the absolute value of this counter. Exceeding this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default is not applicable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_client_profile#set_value SolacebrokerMsgVpnClientProfile#set_value}
  */
  readonly setValue?: number;
}

export function solacebrokerMsgVpnClientProfileEventTransactedSessionCountThresholdToTerraform(struct?: SolacebrokerMsgVpnClientProfileEventTransactedSessionCountThreshold | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    clear_percent: cdktf.numberToTerraform(struct!.clearPercent),
    clear_value: cdktf.numberToTerraform(struct!.clearValue),
    set_percent: cdktf.numberToTerraform(struct!.setPercent),
    set_value: cdktf.numberToTerraform(struct!.setValue),
  }
}


export function solacebrokerMsgVpnClientProfileEventTransactedSessionCountThresholdToHclTerraform(struct?: SolacebrokerMsgVpnClientProfileEventTransactedSessionCountThreshold | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    clear_percent: {
      value: cdktf.numberToHclTerraform(struct!.clearPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    clear_value: {
      value: cdktf.numberToHclTerraform(struct!.clearValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    set_percent: {
      value: cdktf.numberToHclTerraform(struct!.setPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    set_value: {
      value: cdktf.numberToHclTerraform(struct!.setValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SolacebrokerMsgVpnClientProfileEventTransactedSessionCountThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SolacebrokerMsgVpnClientProfileEventTransactedSessionCountThreshold | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clearPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearPercent = this._clearPercent;
    }
    if (this._clearValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearValue = this._clearValue;
    }
    if (this._setPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.setPercent = this._setPercent;
    }
    if (this._setValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.setValue = this._setValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SolacebrokerMsgVpnClientProfileEventTransactedSessionCountThreshold | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clearPercent = undefined;
      this._clearValue = undefined;
      this._setPercent = undefined;
      this._setValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clearPercent = value.clearPercent;
      this._clearValue = value.clearValue;
      this._setPercent = value.setPercent;
      this._setValue = value.setValue;
    }
  }

  // clear_percent - computed: false, optional: true, required: false
  private _clearPercent?: number; 
  public get clearPercent() {
    return this.getNumberAttribute('clear_percent');
  }
  public set clearPercent(value: number) {
    this._clearPercent = value;
  }
  public resetClearPercent() {
    this._clearPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearPercentInput() {
    return this._clearPercent;
  }

  // clear_value - computed: false, optional: true, required: false
  private _clearValue?: number; 
  public get clearValue() {
    return this.getNumberAttribute('clear_value');
  }
  public set clearValue(value: number) {
    this._clearValue = value;
  }
  public resetClearValue() {
    this._clearValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearValueInput() {
    return this._clearValue;
  }

  // set_percent - computed: false, optional: true, required: false
  private _setPercent?: number; 
  public get setPercent() {
    return this.getNumberAttribute('set_percent');
  }
  public set setPercent(value: number) {
    this._setPercent = value;
  }
  public resetSetPercent() {
    this._setPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setPercentInput() {
    return this._setPercent;
  }

  // set_value - computed: false, optional: true, required: false
  private _setValue?: number; 
  public get setValue() {
    return this.getNumberAttribute('set_value');
  }
  public set setValue(value: number) {
    this._setValue = value;
  }
  public resetSetValue() {
    this._setValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setValueInput() {
    return this._setValue;
  }
}
export interface SolacebrokerMsgVpnClientProfileEventTransactionCountThreshold {
  /**
  * The clear threshold for the value of this counter as a percentage of its maximum value. Falling below this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `60`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_client_profile#clear_percent SolacebrokerMsgVpnClientProfile#clear_percent}
  */
  readonly clearPercent?: number;
  /**
  * The clear threshold for the absolute value of this counter. Falling below this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default is not applicable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_client_profile#clear_value SolacebrokerMsgVpnClientProfile#clear_value}
  */
  readonly clearValue?: number;
  /**
  * The set threshold for the value of this counter as a percentage of its maximum value. Exceeding this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `80`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_client_profile#set_percent SolacebrokerMsgVpnClientProfile#set_percent}
  */
  readonly setPercent?: number;
  /**
  * The set threshold for the absolute value of this counter. Exceeding this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default is not applicable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_client_profile#set_value SolacebrokerMsgVpnClientProfile#set_value}
  */
  readonly setValue?: number;
}

export function solacebrokerMsgVpnClientProfileEventTransactionCountThresholdToTerraform(struct?: SolacebrokerMsgVpnClientProfileEventTransactionCountThreshold | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    clear_percent: cdktf.numberToTerraform(struct!.clearPercent),
    clear_value: cdktf.numberToTerraform(struct!.clearValue),
    set_percent: cdktf.numberToTerraform(struct!.setPercent),
    set_value: cdktf.numberToTerraform(struct!.setValue),
  }
}


export function solacebrokerMsgVpnClientProfileEventTransactionCountThresholdToHclTerraform(struct?: SolacebrokerMsgVpnClientProfileEventTransactionCountThreshold | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    clear_percent: {
      value: cdktf.numberToHclTerraform(struct!.clearPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    clear_value: {
      value: cdktf.numberToHclTerraform(struct!.clearValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    set_percent: {
      value: cdktf.numberToHclTerraform(struct!.setPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    set_value: {
      value: cdktf.numberToHclTerraform(struct!.setValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SolacebrokerMsgVpnClientProfileEventTransactionCountThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SolacebrokerMsgVpnClientProfileEventTransactionCountThreshold | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clearPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearPercent = this._clearPercent;
    }
    if (this._clearValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearValue = this._clearValue;
    }
    if (this._setPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.setPercent = this._setPercent;
    }
    if (this._setValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.setValue = this._setValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SolacebrokerMsgVpnClientProfileEventTransactionCountThreshold | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clearPercent = undefined;
      this._clearValue = undefined;
      this._setPercent = undefined;
      this._setValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clearPercent = value.clearPercent;
      this._clearValue = value.clearValue;
      this._setPercent = value.setPercent;
      this._setValue = value.setValue;
    }
  }

  // clear_percent - computed: false, optional: true, required: false
  private _clearPercent?: number; 
  public get clearPercent() {
    return this.getNumberAttribute('clear_percent');
  }
  public set clearPercent(value: number) {
    this._clearPercent = value;
  }
  public resetClearPercent() {
    this._clearPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearPercentInput() {
    return this._clearPercent;
  }

  // clear_value - computed: false, optional: true, required: false
  private _clearValue?: number; 
  public get clearValue() {
    return this.getNumberAttribute('clear_value');
  }
  public set clearValue(value: number) {
    this._clearValue = value;
  }
  public resetClearValue() {
    this._clearValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearValueInput() {
    return this._clearValue;
  }

  // set_percent - computed: false, optional: true, required: false
  private _setPercent?: number; 
  public get setPercent() {
    return this.getNumberAttribute('set_percent');
  }
  public set setPercent(value: number) {
    this._setPercent = value;
  }
  public resetSetPercent() {
    this._setPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setPercentInput() {
    return this._setPercent;
  }

  // set_value - computed: false, optional: true, required: false
  private _setValue?: number; 
  public get setValue() {
    return this.getNumberAttribute('set_value');
  }
  public set setValue(value: number) {
    this._setValue = value;
  }
  public resetSetValue() {
    this._setValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setValueInput() {
    return this._setValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_client_profile solacebroker_msg_vpn_client_profile}
*/
export class SolacebrokerMsgVpnClientProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "solacebroker_msg_vpn_client_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SolacebrokerMsgVpnClientProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SolacebrokerMsgVpnClientProfile to import
  * @param importFromId The id of the existing SolacebrokerMsgVpnClientProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_client_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SolacebrokerMsgVpnClientProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "solacebroker_msg_vpn_client_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_client_profile solacebroker_msg_vpn_client_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SolacebrokerMsgVpnClientProfileConfig
  */
  public constructor(scope: Construct, id: string, config: SolacebrokerMsgVpnClientProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'solacebroker_msg_vpn_client_profile',
      terraformGeneratorMetadata: {
        providerName: 'solacebrokerappliance',
        providerVersion: '1.2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowBridgeConnectionsEnabled = config.allowBridgeConnectionsEnabled;
    this._allowGuaranteedEndpointCreateDurability = config.allowGuaranteedEndpointCreateDurability;
    this._allowGuaranteedEndpointCreateEnabled = config.allowGuaranteedEndpointCreateEnabled;
    this._allowGuaranteedMsgReceiveEnabled = config.allowGuaranteedMsgReceiveEnabled;
    this._allowGuaranteedMsgSendEnabled = config.allowGuaranteedMsgSendEnabled;
    this._allowSharedSubscriptionsEnabled = config.allowSharedSubscriptionsEnabled;
    this._allowTransactedSessionsEnabled = config.allowTransactedSessionsEnabled;
    this._apiQueueManagementCopyFromOnCreateTemplateName = config.apiQueueManagementCopyFromOnCreateTemplateName;
    this._apiTopicEndpointManagementCopyFromOnCreateTemplateName = config.apiTopicEndpointManagementCopyFromOnCreateTemplateName;
    this._clientProfileName = config.clientProfileName;
    this._compressionEnabled = config.compressionEnabled;
    this._elidingDelay = config.elidingDelay;
    this._elidingEnabled = config.elidingEnabled;
    this._elidingMaxTopicCount = config.elidingMaxTopicCount;
    this._eventClientProvisionedEndpointSpoolUsageThreshold.internalValue = config.eventClientProvisionedEndpointSpoolUsageThreshold;
    this._eventConnectionCountPerClientUsernameThreshold.internalValue = config.eventConnectionCountPerClientUsernameThreshold;
    this._eventEgressFlowCountThreshold.internalValue = config.eventEgressFlowCountThreshold;
    this._eventEndpointCountPerClientUsernameThreshold.internalValue = config.eventEndpointCountPerClientUsernameThreshold;
    this._eventIngressFlowCountThreshold.internalValue = config.eventIngressFlowCountThreshold;
    this._eventServiceSmfConnectionCountPerClientUsernameThreshold.internalValue = config.eventServiceSmfConnectionCountPerClientUsernameThreshold;
    this._eventServiceWebConnectionCountPerClientUsernameThreshold.internalValue = config.eventServiceWebConnectionCountPerClientUsernameThreshold;
    this._eventSubscriptionCountThreshold.internalValue = config.eventSubscriptionCountThreshold;
    this._eventTransactedSessionCountThreshold.internalValue = config.eventTransactedSessionCountThreshold;
    this._eventTransactionCountThreshold.internalValue = config.eventTransactionCountThreshold;
    this._maxAmqpLinkCount = config.maxAmqpLinkCount;
    this._maxConnectionCountPerClientUsername = config.maxConnectionCountPerClientUsername;
    this._maxEgressFlowCount = config.maxEgressFlowCount;
    this._maxEndpointCountPerClientUsername = config.maxEndpointCountPerClientUsername;
    this._maxIngressFlowCount = config.maxIngressFlowCount;
    this._maxMsgsPerTransaction = config.maxMsgsPerTransaction;
    this._maxSubscriptionCount = config.maxSubscriptionCount;
    this._maxTransactedSessionCount = config.maxTransactedSessionCount;
    this._maxTransactionCount = config.maxTransactionCount;
    this._msgVpnName = config.msgVpnName;
    this._queueControl1MaxDepth = config.queueControl1MaxDepth;
    this._queueControl1MinMsgBurst = config.queueControl1MinMsgBurst;
    this._queueDirect1MaxDepth = config.queueDirect1MaxDepth;
    this._queueDirect1MinMsgBurst = config.queueDirect1MinMsgBurst;
    this._queueDirect2MaxDepth = config.queueDirect2MaxDepth;
    this._queueDirect2MinMsgBurst = config.queueDirect2MinMsgBurst;
    this._queueDirect3MaxDepth = config.queueDirect3MaxDepth;
    this._queueDirect3MinMsgBurst = config.queueDirect3MinMsgBurst;
    this._queueGuaranteed1MaxDepth = config.queueGuaranteed1MaxDepth;
    this._queueGuaranteed1MinMsgBurst = config.queueGuaranteed1MinMsgBurst;
    this._rejectMsgToSenderOnNoSubscriptionMatchEnabled = config.rejectMsgToSenderOnNoSubscriptionMatchEnabled;
    this._replicationAllowClientConnectWhenStandbyEnabled = config.replicationAllowClientConnectWhenStandbyEnabled;
    this._serviceMinKeepaliveTimeout = config.serviceMinKeepaliveTimeout;
    this._serviceSmfMaxConnectionCountPerClientUsername = config.serviceSmfMaxConnectionCountPerClientUsername;
    this._serviceSmfMinKeepaliveEnabled = config.serviceSmfMinKeepaliveEnabled;
    this._serviceWebInactiveTimeout = config.serviceWebInactiveTimeout;
    this._serviceWebMaxConnectionCountPerClientUsername = config.serviceWebMaxConnectionCountPerClientUsername;
    this._serviceWebMaxPayload = config.serviceWebMaxPayload;
    this._tcpCongestionWindowSize = config.tcpCongestionWindowSize;
    this._tcpKeepaliveCount = config.tcpKeepaliveCount;
    this._tcpKeepaliveIdleTime = config.tcpKeepaliveIdleTime;
    this._tcpKeepaliveInterval = config.tcpKeepaliveInterval;
    this._tcpMaxSegmentSize = config.tcpMaxSegmentSize;
    this._tcpMaxWindowSize = config.tcpMaxWindowSize;
    this._tlsAllowDowngradeToPlainTextEnabled = config.tlsAllowDowngradeToPlainTextEnabled;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_bridge_connections_enabled - computed: false, optional: true, required: false
  private _allowBridgeConnectionsEnabled?: boolean | cdktf.IResolvable; 
  public get allowBridgeConnectionsEnabled() {
    return this.getBooleanAttribute('allow_bridge_connections_enabled');
  }
  public set allowBridgeConnectionsEnabled(value: boolean | cdktf.IResolvable) {
    this._allowBridgeConnectionsEnabled = value;
  }
  public resetAllowBridgeConnectionsEnabled() {
    this._allowBridgeConnectionsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowBridgeConnectionsEnabledInput() {
    return this._allowBridgeConnectionsEnabled;
  }

  // allow_guaranteed_endpoint_create_durability - computed: false, optional: true, required: false
  private _allowGuaranteedEndpointCreateDurability?: string; 
  public get allowGuaranteedEndpointCreateDurability() {
    return this.getStringAttribute('allow_guaranteed_endpoint_create_durability');
  }
  public set allowGuaranteedEndpointCreateDurability(value: string) {
    this._allowGuaranteedEndpointCreateDurability = value;
  }
  public resetAllowGuaranteedEndpointCreateDurability() {
    this._allowGuaranteedEndpointCreateDurability = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowGuaranteedEndpointCreateDurabilityInput() {
    return this._allowGuaranteedEndpointCreateDurability;
  }

  // allow_guaranteed_endpoint_create_enabled - computed: false, optional: true, required: false
  private _allowGuaranteedEndpointCreateEnabled?: boolean | cdktf.IResolvable; 
  public get allowGuaranteedEndpointCreateEnabled() {
    return this.getBooleanAttribute('allow_guaranteed_endpoint_create_enabled');
  }
  public set allowGuaranteedEndpointCreateEnabled(value: boolean | cdktf.IResolvable) {
    this._allowGuaranteedEndpointCreateEnabled = value;
  }
  public resetAllowGuaranteedEndpointCreateEnabled() {
    this._allowGuaranteedEndpointCreateEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowGuaranteedEndpointCreateEnabledInput() {
    return this._allowGuaranteedEndpointCreateEnabled;
  }

  // allow_guaranteed_msg_receive_enabled - computed: false, optional: true, required: false
  private _allowGuaranteedMsgReceiveEnabled?: boolean | cdktf.IResolvable; 
  public get allowGuaranteedMsgReceiveEnabled() {
    return this.getBooleanAttribute('allow_guaranteed_msg_receive_enabled');
  }
  public set allowGuaranteedMsgReceiveEnabled(value: boolean | cdktf.IResolvable) {
    this._allowGuaranteedMsgReceiveEnabled = value;
  }
  public resetAllowGuaranteedMsgReceiveEnabled() {
    this._allowGuaranteedMsgReceiveEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowGuaranteedMsgReceiveEnabledInput() {
    return this._allowGuaranteedMsgReceiveEnabled;
  }

  // allow_guaranteed_msg_send_enabled - computed: false, optional: true, required: false
  private _allowGuaranteedMsgSendEnabled?: boolean | cdktf.IResolvable; 
  public get allowGuaranteedMsgSendEnabled() {
    return this.getBooleanAttribute('allow_guaranteed_msg_send_enabled');
  }
  public set allowGuaranteedMsgSendEnabled(value: boolean | cdktf.IResolvable) {
    this._allowGuaranteedMsgSendEnabled = value;
  }
  public resetAllowGuaranteedMsgSendEnabled() {
    this._allowGuaranteedMsgSendEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowGuaranteedMsgSendEnabledInput() {
    return this._allowGuaranteedMsgSendEnabled;
  }

  // allow_shared_subscriptions_enabled - computed: false, optional: true, required: false
  private _allowSharedSubscriptionsEnabled?: boolean | cdktf.IResolvable; 
  public get allowSharedSubscriptionsEnabled() {
    return this.getBooleanAttribute('allow_shared_subscriptions_enabled');
  }
  public set allowSharedSubscriptionsEnabled(value: boolean | cdktf.IResolvable) {
    this._allowSharedSubscriptionsEnabled = value;
  }
  public resetAllowSharedSubscriptionsEnabled() {
    this._allowSharedSubscriptionsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowSharedSubscriptionsEnabledInput() {
    return this._allowSharedSubscriptionsEnabled;
  }

  // allow_transacted_sessions_enabled - computed: false, optional: true, required: false
  private _allowTransactedSessionsEnabled?: boolean | cdktf.IResolvable; 
  public get allowTransactedSessionsEnabled() {
    return this.getBooleanAttribute('allow_transacted_sessions_enabled');
  }
  public set allowTransactedSessionsEnabled(value: boolean | cdktf.IResolvable) {
    this._allowTransactedSessionsEnabled = value;
  }
  public resetAllowTransactedSessionsEnabled() {
    this._allowTransactedSessionsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowTransactedSessionsEnabledInput() {
    return this._allowTransactedSessionsEnabled;
  }

  // api_queue_management_copy_from_on_create_template_name - computed: false, optional: true, required: false
  private _apiQueueManagementCopyFromOnCreateTemplateName?: string; 
  public get apiQueueManagementCopyFromOnCreateTemplateName() {
    return this.getStringAttribute('api_queue_management_copy_from_on_create_template_name');
  }
  public set apiQueueManagementCopyFromOnCreateTemplateName(value: string) {
    this._apiQueueManagementCopyFromOnCreateTemplateName = value;
  }
  public resetApiQueueManagementCopyFromOnCreateTemplateName() {
    this._apiQueueManagementCopyFromOnCreateTemplateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiQueueManagementCopyFromOnCreateTemplateNameInput() {
    return this._apiQueueManagementCopyFromOnCreateTemplateName;
  }

  // api_topic_endpoint_management_copy_from_on_create_template_name - computed: false, optional: true, required: false
  private _apiTopicEndpointManagementCopyFromOnCreateTemplateName?: string; 
  public get apiTopicEndpointManagementCopyFromOnCreateTemplateName() {
    return this.getStringAttribute('api_topic_endpoint_management_copy_from_on_create_template_name');
  }
  public set apiTopicEndpointManagementCopyFromOnCreateTemplateName(value: string) {
    this._apiTopicEndpointManagementCopyFromOnCreateTemplateName = value;
  }
  public resetApiTopicEndpointManagementCopyFromOnCreateTemplateName() {
    this._apiTopicEndpointManagementCopyFromOnCreateTemplateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiTopicEndpointManagementCopyFromOnCreateTemplateNameInput() {
    return this._apiTopicEndpointManagementCopyFromOnCreateTemplateName;
  }

  // client_profile_name - computed: false, optional: false, required: true
  private _clientProfileName?: string; 
  public get clientProfileName() {
    return this.getStringAttribute('client_profile_name');
  }
  public set clientProfileName(value: string) {
    this._clientProfileName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientProfileNameInput() {
    return this._clientProfileName;
  }

  // compression_enabled - computed: false, optional: true, required: false
  private _compressionEnabled?: boolean | cdktf.IResolvable; 
  public get compressionEnabled() {
    return this.getBooleanAttribute('compression_enabled');
  }
  public set compressionEnabled(value: boolean | cdktf.IResolvable) {
    this._compressionEnabled = value;
  }
  public resetCompressionEnabled() {
    this._compressionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionEnabledInput() {
    return this._compressionEnabled;
  }

  // eliding_delay - computed: false, optional: true, required: false
  private _elidingDelay?: number; 
  public get elidingDelay() {
    return this.getNumberAttribute('eliding_delay');
  }
  public set elidingDelay(value: number) {
    this._elidingDelay = value;
  }
  public resetElidingDelay() {
    this._elidingDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elidingDelayInput() {
    return this._elidingDelay;
  }

  // eliding_enabled - computed: false, optional: true, required: false
  private _elidingEnabled?: boolean | cdktf.IResolvable; 
  public get elidingEnabled() {
    return this.getBooleanAttribute('eliding_enabled');
  }
  public set elidingEnabled(value: boolean | cdktf.IResolvable) {
    this._elidingEnabled = value;
  }
  public resetElidingEnabled() {
    this._elidingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elidingEnabledInput() {
    return this._elidingEnabled;
  }

  // eliding_max_topic_count - computed: false, optional: true, required: false
  private _elidingMaxTopicCount?: number; 
  public get elidingMaxTopicCount() {
    return this.getNumberAttribute('eliding_max_topic_count');
  }
  public set elidingMaxTopicCount(value: number) {
    this._elidingMaxTopicCount = value;
  }
  public resetElidingMaxTopicCount() {
    this._elidingMaxTopicCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elidingMaxTopicCountInput() {
    return this._elidingMaxTopicCount;
  }

  // event_client_provisioned_endpoint_spool_usage_threshold - computed: false, optional: true, required: false
  private _eventClientProvisionedEndpointSpoolUsageThreshold = new SolacebrokerMsgVpnClientProfileEventClientProvisionedEndpointSpoolUsageThresholdOutputReference(this, "event_client_provisioned_endpoint_spool_usage_threshold");
  public get eventClientProvisionedEndpointSpoolUsageThreshold() {
    return this._eventClientProvisionedEndpointSpoolUsageThreshold;
  }
  public putEventClientProvisionedEndpointSpoolUsageThreshold(value: SolacebrokerMsgVpnClientProfileEventClientProvisionedEndpointSpoolUsageThreshold) {
    this._eventClientProvisionedEndpointSpoolUsageThreshold.internalValue = value;
  }
  public resetEventClientProvisionedEndpointSpoolUsageThreshold() {
    this._eventClientProvisionedEndpointSpoolUsageThreshold.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventClientProvisionedEndpointSpoolUsageThresholdInput() {
    return this._eventClientProvisionedEndpointSpoolUsageThreshold.internalValue;
  }

  // event_connection_count_per_client_username_threshold - computed: false, optional: true, required: false
  private _eventConnectionCountPerClientUsernameThreshold = new SolacebrokerMsgVpnClientProfileEventConnectionCountPerClientUsernameThresholdOutputReference(this, "event_connection_count_per_client_username_threshold");
  public get eventConnectionCountPerClientUsernameThreshold() {
    return this._eventConnectionCountPerClientUsernameThreshold;
  }
  public putEventConnectionCountPerClientUsernameThreshold(value: SolacebrokerMsgVpnClientProfileEventConnectionCountPerClientUsernameThreshold) {
    this._eventConnectionCountPerClientUsernameThreshold.internalValue = value;
  }
  public resetEventConnectionCountPerClientUsernameThreshold() {
    this._eventConnectionCountPerClientUsernameThreshold.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventConnectionCountPerClientUsernameThresholdInput() {
    return this._eventConnectionCountPerClientUsernameThreshold.internalValue;
  }

  // event_egress_flow_count_threshold - computed: false, optional: true, required: false
  private _eventEgressFlowCountThreshold = new SolacebrokerMsgVpnClientProfileEventEgressFlowCountThresholdOutputReference(this, "event_egress_flow_count_threshold");
  public get eventEgressFlowCountThreshold() {
    return this._eventEgressFlowCountThreshold;
  }
  public putEventEgressFlowCountThreshold(value: SolacebrokerMsgVpnClientProfileEventEgressFlowCountThreshold) {
    this._eventEgressFlowCountThreshold.internalValue = value;
  }
  public resetEventEgressFlowCountThreshold() {
    this._eventEgressFlowCountThreshold.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventEgressFlowCountThresholdInput() {
    return this._eventEgressFlowCountThreshold.internalValue;
  }

  // event_endpoint_count_per_client_username_threshold - computed: false, optional: true, required: false
  private _eventEndpointCountPerClientUsernameThreshold = new SolacebrokerMsgVpnClientProfileEventEndpointCountPerClientUsernameThresholdOutputReference(this, "event_endpoint_count_per_client_username_threshold");
  public get eventEndpointCountPerClientUsernameThreshold() {
    return this._eventEndpointCountPerClientUsernameThreshold;
  }
  public putEventEndpointCountPerClientUsernameThreshold(value: SolacebrokerMsgVpnClientProfileEventEndpointCountPerClientUsernameThreshold) {
    this._eventEndpointCountPerClientUsernameThreshold.internalValue = value;
  }
  public resetEventEndpointCountPerClientUsernameThreshold() {
    this._eventEndpointCountPerClientUsernameThreshold.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventEndpointCountPerClientUsernameThresholdInput() {
    return this._eventEndpointCountPerClientUsernameThreshold.internalValue;
  }

  // event_ingress_flow_count_threshold - computed: false, optional: true, required: false
  private _eventIngressFlowCountThreshold = new SolacebrokerMsgVpnClientProfileEventIngressFlowCountThresholdOutputReference(this, "event_ingress_flow_count_threshold");
  public get eventIngressFlowCountThreshold() {
    return this._eventIngressFlowCountThreshold;
  }
  public putEventIngressFlowCountThreshold(value: SolacebrokerMsgVpnClientProfileEventIngressFlowCountThreshold) {
    this._eventIngressFlowCountThreshold.internalValue = value;
  }
  public resetEventIngressFlowCountThreshold() {
    this._eventIngressFlowCountThreshold.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventIngressFlowCountThresholdInput() {
    return this._eventIngressFlowCountThreshold.internalValue;
  }

  // event_service_smf_connection_count_per_client_username_threshold - computed: false, optional: true, required: false
  private _eventServiceSmfConnectionCountPerClientUsernameThreshold = new SolacebrokerMsgVpnClientProfileEventServiceSmfConnectionCountPerClientUsernameThresholdOutputReference(this, "event_service_smf_connection_count_per_client_username_threshold");
  public get eventServiceSmfConnectionCountPerClientUsernameThreshold() {
    return this._eventServiceSmfConnectionCountPerClientUsernameThreshold;
  }
  public putEventServiceSmfConnectionCountPerClientUsernameThreshold(value: SolacebrokerMsgVpnClientProfileEventServiceSmfConnectionCountPerClientUsernameThreshold) {
    this._eventServiceSmfConnectionCountPerClientUsernameThreshold.internalValue = value;
  }
  public resetEventServiceSmfConnectionCountPerClientUsernameThreshold() {
    this._eventServiceSmfConnectionCountPerClientUsernameThreshold.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventServiceSmfConnectionCountPerClientUsernameThresholdInput() {
    return this._eventServiceSmfConnectionCountPerClientUsernameThreshold.internalValue;
  }

  // event_service_web_connection_count_per_client_username_threshold - computed: false, optional: true, required: false
  private _eventServiceWebConnectionCountPerClientUsernameThreshold = new SolacebrokerMsgVpnClientProfileEventServiceWebConnectionCountPerClientUsernameThresholdOutputReference(this, "event_service_web_connection_count_per_client_username_threshold");
  public get eventServiceWebConnectionCountPerClientUsernameThreshold() {
    return this._eventServiceWebConnectionCountPerClientUsernameThreshold;
  }
  public putEventServiceWebConnectionCountPerClientUsernameThreshold(value: SolacebrokerMsgVpnClientProfileEventServiceWebConnectionCountPerClientUsernameThreshold) {
    this._eventServiceWebConnectionCountPerClientUsernameThreshold.internalValue = value;
  }
  public resetEventServiceWebConnectionCountPerClientUsernameThreshold() {
    this._eventServiceWebConnectionCountPerClientUsernameThreshold.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventServiceWebConnectionCountPerClientUsernameThresholdInput() {
    return this._eventServiceWebConnectionCountPerClientUsernameThreshold.internalValue;
  }

  // event_subscription_count_threshold - computed: false, optional: true, required: false
  private _eventSubscriptionCountThreshold = new SolacebrokerMsgVpnClientProfileEventSubscriptionCountThresholdOutputReference(this, "event_subscription_count_threshold");
  public get eventSubscriptionCountThreshold() {
    return this._eventSubscriptionCountThreshold;
  }
  public putEventSubscriptionCountThreshold(value: SolacebrokerMsgVpnClientProfileEventSubscriptionCountThreshold) {
    this._eventSubscriptionCountThreshold.internalValue = value;
  }
  public resetEventSubscriptionCountThreshold() {
    this._eventSubscriptionCountThreshold.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventSubscriptionCountThresholdInput() {
    return this._eventSubscriptionCountThreshold.internalValue;
  }

  // event_transacted_session_count_threshold - computed: false, optional: true, required: false
  private _eventTransactedSessionCountThreshold = new SolacebrokerMsgVpnClientProfileEventTransactedSessionCountThresholdOutputReference(this, "event_transacted_session_count_threshold");
  public get eventTransactedSessionCountThreshold() {
    return this._eventTransactedSessionCountThreshold;
  }
  public putEventTransactedSessionCountThreshold(value: SolacebrokerMsgVpnClientProfileEventTransactedSessionCountThreshold) {
    this._eventTransactedSessionCountThreshold.internalValue = value;
  }
  public resetEventTransactedSessionCountThreshold() {
    this._eventTransactedSessionCountThreshold.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventTransactedSessionCountThresholdInput() {
    return this._eventTransactedSessionCountThreshold.internalValue;
  }

  // event_transaction_count_threshold - computed: false, optional: true, required: false
  private _eventTransactionCountThreshold = new SolacebrokerMsgVpnClientProfileEventTransactionCountThresholdOutputReference(this, "event_transaction_count_threshold");
  public get eventTransactionCountThreshold() {
    return this._eventTransactionCountThreshold;
  }
  public putEventTransactionCountThreshold(value: SolacebrokerMsgVpnClientProfileEventTransactionCountThreshold) {
    this._eventTransactionCountThreshold.internalValue = value;
  }
  public resetEventTransactionCountThreshold() {
    this._eventTransactionCountThreshold.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventTransactionCountThresholdInput() {
    return this._eventTransactionCountThreshold.internalValue;
  }

  // max_amqp_link_count - computed: false, optional: true, required: false
  private _maxAmqpLinkCount?: number; 
  public get maxAmqpLinkCount() {
    return this.getNumberAttribute('max_amqp_link_count');
  }
  public set maxAmqpLinkCount(value: number) {
    this._maxAmqpLinkCount = value;
  }
  public resetMaxAmqpLinkCount() {
    this._maxAmqpLinkCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAmqpLinkCountInput() {
    return this._maxAmqpLinkCount;
  }

  // max_connection_count_per_client_username - computed: false, optional: true, required: false
  private _maxConnectionCountPerClientUsername?: number; 
  public get maxConnectionCountPerClientUsername() {
    return this.getNumberAttribute('max_connection_count_per_client_username');
  }
  public set maxConnectionCountPerClientUsername(value: number) {
    this._maxConnectionCountPerClientUsername = value;
  }
  public resetMaxConnectionCountPerClientUsername() {
    this._maxConnectionCountPerClientUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConnectionCountPerClientUsernameInput() {
    return this._maxConnectionCountPerClientUsername;
  }

  // max_egress_flow_count - computed: false, optional: true, required: false
  private _maxEgressFlowCount?: number; 
  public get maxEgressFlowCount() {
    return this.getNumberAttribute('max_egress_flow_count');
  }
  public set maxEgressFlowCount(value: number) {
    this._maxEgressFlowCount = value;
  }
  public resetMaxEgressFlowCount() {
    this._maxEgressFlowCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxEgressFlowCountInput() {
    return this._maxEgressFlowCount;
  }

  // max_endpoint_count_per_client_username - computed: false, optional: true, required: false
  private _maxEndpointCountPerClientUsername?: number; 
  public get maxEndpointCountPerClientUsername() {
    return this.getNumberAttribute('max_endpoint_count_per_client_username');
  }
  public set maxEndpointCountPerClientUsername(value: number) {
    this._maxEndpointCountPerClientUsername = value;
  }
  public resetMaxEndpointCountPerClientUsername() {
    this._maxEndpointCountPerClientUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxEndpointCountPerClientUsernameInput() {
    return this._maxEndpointCountPerClientUsername;
  }

  // max_ingress_flow_count - computed: false, optional: true, required: false
  private _maxIngressFlowCount?: number; 
  public get maxIngressFlowCount() {
    return this.getNumberAttribute('max_ingress_flow_count');
  }
  public set maxIngressFlowCount(value: number) {
    this._maxIngressFlowCount = value;
  }
  public resetMaxIngressFlowCount() {
    this._maxIngressFlowCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxIngressFlowCountInput() {
    return this._maxIngressFlowCount;
  }

  // max_msgs_per_transaction - computed: false, optional: true, required: false
  private _maxMsgsPerTransaction?: number; 
  public get maxMsgsPerTransaction() {
    return this.getNumberAttribute('max_msgs_per_transaction');
  }
  public set maxMsgsPerTransaction(value: number) {
    this._maxMsgsPerTransaction = value;
  }
  public resetMaxMsgsPerTransaction() {
    this._maxMsgsPerTransaction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxMsgsPerTransactionInput() {
    return this._maxMsgsPerTransaction;
  }

  // max_subscription_count - computed: false, optional: true, required: false
  private _maxSubscriptionCount?: number; 
  public get maxSubscriptionCount() {
    return this.getNumberAttribute('max_subscription_count');
  }
  public set maxSubscriptionCount(value: number) {
    this._maxSubscriptionCount = value;
  }
  public resetMaxSubscriptionCount() {
    this._maxSubscriptionCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSubscriptionCountInput() {
    return this._maxSubscriptionCount;
  }

  // max_transacted_session_count - computed: false, optional: true, required: false
  private _maxTransactedSessionCount?: number; 
  public get maxTransactedSessionCount() {
    return this.getNumberAttribute('max_transacted_session_count');
  }
  public set maxTransactedSessionCount(value: number) {
    this._maxTransactedSessionCount = value;
  }
  public resetMaxTransactedSessionCount() {
    this._maxTransactedSessionCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTransactedSessionCountInput() {
    return this._maxTransactedSessionCount;
  }

  // max_transaction_count - computed: false, optional: true, required: false
  private _maxTransactionCount?: number; 
  public get maxTransactionCount() {
    return this.getNumberAttribute('max_transaction_count');
  }
  public set maxTransactionCount(value: number) {
    this._maxTransactionCount = value;
  }
  public resetMaxTransactionCount() {
    this._maxTransactionCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTransactionCountInput() {
    return this._maxTransactionCount;
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

  // queue_control1_max_depth - computed: false, optional: true, required: false
  private _queueControl1MaxDepth?: number; 
  public get queueControl1MaxDepth() {
    return this.getNumberAttribute('queue_control1_max_depth');
  }
  public set queueControl1MaxDepth(value: number) {
    this._queueControl1MaxDepth = value;
  }
  public resetQueueControl1MaxDepth() {
    this._queueControl1MaxDepth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueControl1MaxDepthInput() {
    return this._queueControl1MaxDepth;
  }

  // queue_control1_min_msg_burst - computed: false, optional: true, required: false
  private _queueControl1MinMsgBurst?: number; 
  public get queueControl1MinMsgBurst() {
    return this.getNumberAttribute('queue_control1_min_msg_burst');
  }
  public set queueControl1MinMsgBurst(value: number) {
    this._queueControl1MinMsgBurst = value;
  }
  public resetQueueControl1MinMsgBurst() {
    this._queueControl1MinMsgBurst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueControl1MinMsgBurstInput() {
    return this._queueControl1MinMsgBurst;
  }

  // queue_direct1_max_depth - computed: false, optional: true, required: false
  private _queueDirect1MaxDepth?: number; 
  public get queueDirect1MaxDepth() {
    return this.getNumberAttribute('queue_direct1_max_depth');
  }
  public set queueDirect1MaxDepth(value: number) {
    this._queueDirect1MaxDepth = value;
  }
  public resetQueueDirect1MaxDepth() {
    this._queueDirect1MaxDepth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueDirect1MaxDepthInput() {
    return this._queueDirect1MaxDepth;
  }

  // queue_direct1_min_msg_burst - computed: false, optional: true, required: false
  private _queueDirect1MinMsgBurst?: number; 
  public get queueDirect1MinMsgBurst() {
    return this.getNumberAttribute('queue_direct1_min_msg_burst');
  }
  public set queueDirect1MinMsgBurst(value: number) {
    this._queueDirect1MinMsgBurst = value;
  }
  public resetQueueDirect1MinMsgBurst() {
    this._queueDirect1MinMsgBurst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueDirect1MinMsgBurstInput() {
    return this._queueDirect1MinMsgBurst;
  }

  // queue_direct2_max_depth - computed: false, optional: true, required: false
  private _queueDirect2MaxDepth?: number; 
  public get queueDirect2MaxDepth() {
    return this.getNumberAttribute('queue_direct2_max_depth');
  }
  public set queueDirect2MaxDepth(value: number) {
    this._queueDirect2MaxDepth = value;
  }
  public resetQueueDirect2MaxDepth() {
    this._queueDirect2MaxDepth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueDirect2MaxDepthInput() {
    return this._queueDirect2MaxDepth;
  }

  // queue_direct2_min_msg_burst - computed: false, optional: true, required: false
  private _queueDirect2MinMsgBurst?: number; 
  public get queueDirect2MinMsgBurst() {
    return this.getNumberAttribute('queue_direct2_min_msg_burst');
  }
  public set queueDirect2MinMsgBurst(value: number) {
    this._queueDirect2MinMsgBurst = value;
  }
  public resetQueueDirect2MinMsgBurst() {
    this._queueDirect2MinMsgBurst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueDirect2MinMsgBurstInput() {
    return this._queueDirect2MinMsgBurst;
  }

  // queue_direct3_max_depth - computed: false, optional: true, required: false
  private _queueDirect3MaxDepth?: number; 
  public get queueDirect3MaxDepth() {
    return this.getNumberAttribute('queue_direct3_max_depth');
  }
  public set queueDirect3MaxDepth(value: number) {
    this._queueDirect3MaxDepth = value;
  }
  public resetQueueDirect3MaxDepth() {
    this._queueDirect3MaxDepth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueDirect3MaxDepthInput() {
    return this._queueDirect3MaxDepth;
  }

  // queue_direct3_min_msg_burst - computed: false, optional: true, required: false
  private _queueDirect3MinMsgBurst?: number; 
  public get queueDirect3MinMsgBurst() {
    return this.getNumberAttribute('queue_direct3_min_msg_burst');
  }
  public set queueDirect3MinMsgBurst(value: number) {
    this._queueDirect3MinMsgBurst = value;
  }
  public resetQueueDirect3MinMsgBurst() {
    this._queueDirect3MinMsgBurst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueDirect3MinMsgBurstInput() {
    return this._queueDirect3MinMsgBurst;
  }

  // queue_guaranteed1_max_depth - computed: false, optional: true, required: false
  private _queueGuaranteed1MaxDepth?: number; 
  public get queueGuaranteed1MaxDepth() {
    return this.getNumberAttribute('queue_guaranteed1_max_depth');
  }
  public set queueGuaranteed1MaxDepth(value: number) {
    this._queueGuaranteed1MaxDepth = value;
  }
  public resetQueueGuaranteed1MaxDepth() {
    this._queueGuaranteed1MaxDepth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueGuaranteed1MaxDepthInput() {
    return this._queueGuaranteed1MaxDepth;
  }

  // queue_guaranteed1_min_msg_burst - computed: false, optional: true, required: false
  private _queueGuaranteed1MinMsgBurst?: number; 
  public get queueGuaranteed1MinMsgBurst() {
    return this.getNumberAttribute('queue_guaranteed1_min_msg_burst');
  }
  public set queueGuaranteed1MinMsgBurst(value: number) {
    this._queueGuaranteed1MinMsgBurst = value;
  }
  public resetQueueGuaranteed1MinMsgBurst() {
    this._queueGuaranteed1MinMsgBurst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueGuaranteed1MinMsgBurstInput() {
    return this._queueGuaranteed1MinMsgBurst;
  }

  // reject_msg_to_sender_on_no_subscription_match_enabled - computed: false, optional: true, required: false
  private _rejectMsgToSenderOnNoSubscriptionMatchEnabled?: boolean | cdktf.IResolvable; 
  public get rejectMsgToSenderOnNoSubscriptionMatchEnabled() {
    return this.getBooleanAttribute('reject_msg_to_sender_on_no_subscription_match_enabled');
  }
  public set rejectMsgToSenderOnNoSubscriptionMatchEnabled(value: boolean | cdktf.IResolvable) {
    this._rejectMsgToSenderOnNoSubscriptionMatchEnabled = value;
  }
  public resetRejectMsgToSenderOnNoSubscriptionMatchEnabled() {
    this._rejectMsgToSenderOnNoSubscriptionMatchEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rejectMsgToSenderOnNoSubscriptionMatchEnabledInput() {
    return this._rejectMsgToSenderOnNoSubscriptionMatchEnabled;
  }

  // replication_allow_client_connect_when_standby_enabled - computed: false, optional: true, required: false
  private _replicationAllowClientConnectWhenStandbyEnabled?: boolean | cdktf.IResolvable; 
  public get replicationAllowClientConnectWhenStandbyEnabled() {
    return this.getBooleanAttribute('replication_allow_client_connect_when_standby_enabled');
  }
  public set replicationAllowClientConnectWhenStandbyEnabled(value: boolean | cdktf.IResolvable) {
    this._replicationAllowClientConnectWhenStandbyEnabled = value;
  }
  public resetReplicationAllowClientConnectWhenStandbyEnabled() {
    this._replicationAllowClientConnectWhenStandbyEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationAllowClientConnectWhenStandbyEnabledInput() {
    return this._replicationAllowClientConnectWhenStandbyEnabled;
  }

  // service_min_keepalive_timeout - computed: false, optional: true, required: false
  private _serviceMinKeepaliveTimeout?: number; 
  public get serviceMinKeepaliveTimeout() {
    return this.getNumberAttribute('service_min_keepalive_timeout');
  }
  public set serviceMinKeepaliveTimeout(value: number) {
    this._serviceMinKeepaliveTimeout = value;
  }
  public resetServiceMinKeepaliveTimeout() {
    this._serviceMinKeepaliveTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceMinKeepaliveTimeoutInput() {
    return this._serviceMinKeepaliveTimeout;
  }

  // service_smf_max_connection_count_per_client_username - computed: false, optional: true, required: false
  private _serviceSmfMaxConnectionCountPerClientUsername?: number; 
  public get serviceSmfMaxConnectionCountPerClientUsername() {
    return this.getNumberAttribute('service_smf_max_connection_count_per_client_username');
  }
  public set serviceSmfMaxConnectionCountPerClientUsername(value: number) {
    this._serviceSmfMaxConnectionCountPerClientUsername = value;
  }
  public resetServiceSmfMaxConnectionCountPerClientUsername() {
    this._serviceSmfMaxConnectionCountPerClientUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceSmfMaxConnectionCountPerClientUsernameInput() {
    return this._serviceSmfMaxConnectionCountPerClientUsername;
  }

  // service_smf_min_keepalive_enabled - computed: false, optional: true, required: false
  private _serviceSmfMinKeepaliveEnabled?: boolean | cdktf.IResolvable; 
  public get serviceSmfMinKeepaliveEnabled() {
    return this.getBooleanAttribute('service_smf_min_keepalive_enabled');
  }
  public set serviceSmfMinKeepaliveEnabled(value: boolean | cdktf.IResolvable) {
    this._serviceSmfMinKeepaliveEnabled = value;
  }
  public resetServiceSmfMinKeepaliveEnabled() {
    this._serviceSmfMinKeepaliveEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceSmfMinKeepaliveEnabledInput() {
    return this._serviceSmfMinKeepaliveEnabled;
  }

  // service_web_inactive_timeout - computed: false, optional: true, required: false
  private _serviceWebInactiveTimeout?: number; 
  public get serviceWebInactiveTimeout() {
    return this.getNumberAttribute('service_web_inactive_timeout');
  }
  public set serviceWebInactiveTimeout(value: number) {
    this._serviceWebInactiveTimeout = value;
  }
  public resetServiceWebInactiveTimeout() {
    this._serviceWebInactiveTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceWebInactiveTimeoutInput() {
    return this._serviceWebInactiveTimeout;
  }

  // service_web_max_connection_count_per_client_username - computed: false, optional: true, required: false
  private _serviceWebMaxConnectionCountPerClientUsername?: number; 
  public get serviceWebMaxConnectionCountPerClientUsername() {
    return this.getNumberAttribute('service_web_max_connection_count_per_client_username');
  }
  public set serviceWebMaxConnectionCountPerClientUsername(value: number) {
    this._serviceWebMaxConnectionCountPerClientUsername = value;
  }
  public resetServiceWebMaxConnectionCountPerClientUsername() {
    this._serviceWebMaxConnectionCountPerClientUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceWebMaxConnectionCountPerClientUsernameInput() {
    return this._serviceWebMaxConnectionCountPerClientUsername;
  }

  // service_web_max_payload - computed: false, optional: true, required: false
  private _serviceWebMaxPayload?: number; 
  public get serviceWebMaxPayload() {
    return this.getNumberAttribute('service_web_max_payload');
  }
  public set serviceWebMaxPayload(value: number) {
    this._serviceWebMaxPayload = value;
  }
  public resetServiceWebMaxPayload() {
    this._serviceWebMaxPayload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceWebMaxPayloadInput() {
    return this._serviceWebMaxPayload;
  }

  // tcp_congestion_window_size - computed: false, optional: true, required: false
  private _tcpCongestionWindowSize?: number; 
  public get tcpCongestionWindowSize() {
    return this.getNumberAttribute('tcp_congestion_window_size');
  }
  public set tcpCongestionWindowSize(value: number) {
    this._tcpCongestionWindowSize = value;
  }
  public resetTcpCongestionWindowSize() {
    this._tcpCongestionWindowSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpCongestionWindowSizeInput() {
    return this._tcpCongestionWindowSize;
  }

  // tcp_keepalive_count - computed: false, optional: true, required: false
  private _tcpKeepaliveCount?: number; 
  public get tcpKeepaliveCount() {
    return this.getNumberAttribute('tcp_keepalive_count');
  }
  public set tcpKeepaliveCount(value: number) {
    this._tcpKeepaliveCount = value;
  }
  public resetTcpKeepaliveCount() {
    this._tcpKeepaliveCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpKeepaliveCountInput() {
    return this._tcpKeepaliveCount;
  }

  // tcp_keepalive_idle_time - computed: false, optional: true, required: false
  private _tcpKeepaliveIdleTime?: number; 
  public get tcpKeepaliveIdleTime() {
    return this.getNumberAttribute('tcp_keepalive_idle_time');
  }
  public set tcpKeepaliveIdleTime(value: number) {
    this._tcpKeepaliveIdleTime = value;
  }
  public resetTcpKeepaliveIdleTime() {
    this._tcpKeepaliveIdleTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpKeepaliveIdleTimeInput() {
    return this._tcpKeepaliveIdleTime;
  }

  // tcp_keepalive_interval - computed: false, optional: true, required: false
  private _tcpKeepaliveInterval?: number; 
  public get tcpKeepaliveInterval() {
    return this.getNumberAttribute('tcp_keepalive_interval');
  }
  public set tcpKeepaliveInterval(value: number) {
    this._tcpKeepaliveInterval = value;
  }
  public resetTcpKeepaliveInterval() {
    this._tcpKeepaliveInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpKeepaliveIntervalInput() {
    return this._tcpKeepaliveInterval;
  }

  // tcp_max_segment_size - computed: false, optional: true, required: false
  private _tcpMaxSegmentSize?: number; 
  public get tcpMaxSegmentSize() {
    return this.getNumberAttribute('tcp_max_segment_size');
  }
  public set tcpMaxSegmentSize(value: number) {
    this._tcpMaxSegmentSize = value;
  }
  public resetTcpMaxSegmentSize() {
    this._tcpMaxSegmentSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpMaxSegmentSizeInput() {
    return this._tcpMaxSegmentSize;
  }

  // tcp_max_window_size - computed: false, optional: true, required: false
  private _tcpMaxWindowSize?: number; 
  public get tcpMaxWindowSize() {
    return this.getNumberAttribute('tcp_max_window_size');
  }
  public set tcpMaxWindowSize(value: number) {
    this._tcpMaxWindowSize = value;
  }
  public resetTcpMaxWindowSize() {
    this._tcpMaxWindowSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpMaxWindowSizeInput() {
    return this._tcpMaxWindowSize;
  }

  // tls_allow_downgrade_to_plain_text_enabled - computed: false, optional: true, required: false
  private _tlsAllowDowngradeToPlainTextEnabled?: boolean | cdktf.IResolvable; 
  public get tlsAllowDowngradeToPlainTextEnabled() {
    return this.getBooleanAttribute('tls_allow_downgrade_to_plain_text_enabled');
  }
  public set tlsAllowDowngradeToPlainTextEnabled(value: boolean | cdktf.IResolvable) {
    this._tlsAllowDowngradeToPlainTextEnabled = value;
  }
  public resetTlsAllowDowngradeToPlainTextEnabled() {
    this._tlsAllowDowngradeToPlainTextEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsAllowDowngradeToPlainTextEnabledInput() {
    return this._tlsAllowDowngradeToPlainTextEnabled;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_bridge_connections_enabled: cdktf.booleanToTerraform(this._allowBridgeConnectionsEnabled),
      allow_guaranteed_endpoint_create_durability: cdktf.stringToTerraform(this._allowGuaranteedEndpointCreateDurability),
      allow_guaranteed_endpoint_create_enabled: cdktf.booleanToTerraform(this._allowGuaranteedEndpointCreateEnabled),
      allow_guaranteed_msg_receive_enabled: cdktf.booleanToTerraform(this._allowGuaranteedMsgReceiveEnabled),
      allow_guaranteed_msg_send_enabled: cdktf.booleanToTerraform(this._allowGuaranteedMsgSendEnabled),
      allow_shared_subscriptions_enabled: cdktf.booleanToTerraform(this._allowSharedSubscriptionsEnabled),
      allow_transacted_sessions_enabled: cdktf.booleanToTerraform(this._allowTransactedSessionsEnabled),
      api_queue_management_copy_from_on_create_template_name: cdktf.stringToTerraform(this._apiQueueManagementCopyFromOnCreateTemplateName),
      api_topic_endpoint_management_copy_from_on_create_template_name: cdktf.stringToTerraform(this._apiTopicEndpointManagementCopyFromOnCreateTemplateName),
      client_profile_name: cdktf.stringToTerraform(this._clientProfileName),
      compression_enabled: cdktf.booleanToTerraform(this._compressionEnabled),
      eliding_delay: cdktf.numberToTerraform(this._elidingDelay),
      eliding_enabled: cdktf.booleanToTerraform(this._elidingEnabled),
      eliding_max_topic_count: cdktf.numberToTerraform(this._elidingMaxTopicCount),
      event_client_provisioned_endpoint_spool_usage_threshold: solacebrokerMsgVpnClientProfileEventClientProvisionedEndpointSpoolUsageThresholdToTerraform(this._eventClientProvisionedEndpointSpoolUsageThreshold.internalValue),
      event_connection_count_per_client_username_threshold: solacebrokerMsgVpnClientProfileEventConnectionCountPerClientUsernameThresholdToTerraform(this._eventConnectionCountPerClientUsernameThreshold.internalValue),
      event_egress_flow_count_threshold: solacebrokerMsgVpnClientProfileEventEgressFlowCountThresholdToTerraform(this._eventEgressFlowCountThreshold.internalValue),
      event_endpoint_count_per_client_username_threshold: solacebrokerMsgVpnClientProfileEventEndpointCountPerClientUsernameThresholdToTerraform(this._eventEndpointCountPerClientUsernameThreshold.internalValue),
      event_ingress_flow_count_threshold: solacebrokerMsgVpnClientProfileEventIngressFlowCountThresholdToTerraform(this._eventIngressFlowCountThreshold.internalValue),
      event_service_smf_connection_count_per_client_username_threshold: solacebrokerMsgVpnClientProfileEventServiceSmfConnectionCountPerClientUsernameThresholdToTerraform(this._eventServiceSmfConnectionCountPerClientUsernameThreshold.internalValue),
      event_service_web_connection_count_per_client_username_threshold: solacebrokerMsgVpnClientProfileEventServiceWebConnectionCountPerClientUsernameThresholdToTerraform(this._eventServiceWebConnectionCountPerClientUsernameThreshold.internalValue),
      event_subscription_count_threshold: solacebrokerMsgVpnClientProfileEventSubscriptionCountThresholdToTerraform(this._eventSubscriptionCountThreshold.internalValue),
      event_transacted_session_count_threshold: solacebrokerMsgVpnClientProfileEventTransactedSessionCountThresholdToTerraform(this._eventTransactedSessionCountThreshold.internalValue),
      event_transaction_count_threshold: solacebrokerMsgVpnClientProfileEventTransactionCountThresholdToTerraform(this._eventTransactionCountThreshold.internalValue),
      max_amqp_link_count: cdktf.numberToTerraform(this._maxAmqpLinkCount),
      max_connection_count_per_client_username: cdktf.numberToTerraform(this._maxConnectionCountPerClientUsername),
      max_egress_flow_count: cdktf.numberToTerraform(this._maxEgressFlowCount),
      max_endpoint_count_per_client_username: cdktf.numberToTerraform(this._maxEndpointCountPerClientUsername),
      max_ingress_flow_count: cdktf.numberToTerraform(this._maxIngressFlowCount),
      max_msgs_per_transaction: cdktf.numberToTerraform(this._maxMsgsPerTransaction),
      max_subscription_count: cdktf.numberToTerraform(this._maxSubscriptionCount),
      max_transacted_session_count: cdktf.numberToTerraform(this._maxTransactedSessionCount),
      max_transaction_count: cdktf.numberToTerraform(this._maxTransactionCount),
      msg_vpn_name: cdktf.stringToTerraform(this._msgVpnName),
      queue_control1_max_depth: cdktf.numberToTerraform(this._queueControl1MaxDepth),
      queue_control1_min_msg_burst: cdktf.numberToTerraform(this._queueControl1MinMsgBurst),
      queue_direct1_max_depth: cdktf.numberToTerraform(this._queueDirect1MaxDepth),
      queue_direct1_min_msg_burst: cdktf.numberToTerraform(this._queueDirect1MinMsgBurst),
      queue_direct2_max_depth: cdktf.numberToTerraform(this._queueDirect2MaxDepth),
      queue_direct2_min_msg_burst: cdktf.numberToTerraform(this._queueDirect2MinMsgBurst),
      queue_direct3_max_depth: cdktf.numberToTerraform(this._queueDirect3MaxDepth),
      queue_direct3_min_msg_burst: cdktf.numberToTerraform(this._queueDirect3MinMsgBurst),
      queue_guaranteed1_max_depth: cdktf.numberToTerraform(this._queueGuaranteed1MaxDepth),
      queue_guaranteed1_min_msg_burst: cdktf.numberToTerraform(this._queueGuaranteed1MinMsgBurst),
      reject_msg_to_sender_on_no_subscription_match_enabled: cdktf.booleanToTerraform(this._rejectMsgToSenderOnNoSubscriptionMatchEnabled),
      replication_allow_client_connect_when_standby_enabled: cdktf.booleanToTerraform(this._replicationAllowClientConnectWhenStandbyEnabled),
      service_min_keepalive_timeout: cdktf.numberToTerraform(this._serviceMinKeepaliveTimeout),
      service_smf_max_connection_count_per_client_username: cdktf.numberToTerraform(this._serviceSmfMaxConnectionCountPerClientUsername),
      service_smf_min_keepalive_enabled: cdktf.booleanToTerraform(this._serviceSmfMinKeepaliveEnabled),
      service_web_inactive_timeout: cdktf.numberToTerraform(this._serviceWebInactiveTimeout),
      service_web_max_connection_count_per_client_username: cdktf.numberToTerraform(this._serviceWebMaxConnectionCountPerClientUsername),
      service_web_max_payload: cdktf.numberToTerraform(this._serviceWebMaxPayload),
      tcp_congestion_window_size: cdktf.numberToTerraform(this._tcpCongestionWindowSize),
      tcp_keepalive_count: cdktf.numberToTerraform(this._tcpKeepaliveCount),
      tcp_keepalive_idle_time: cdktf.numberToTerraform(this._tcpKeepaliveIdleTime),
      tcp_keepalive_interval: cdktf.numberToTerraform(this._tcpKeepaliveInterval),
      tcp_max_segment_size: cdktf.numberToTerraform(this._tcpMaxSegmentSize),
      tcp_max_window_size: cdktf.numberToTerraform(this._tcpMaxWindowSize),
      tls_allow_downgrade_to_plain_text_enabled: cdktf.booleanToTerraform(this._tlsAllowDowngradeToPlainTextEnabled),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_bridge_connections_enabled: {
        value: cdktf.booleanToHclTerraform(this._allowBridgeConnectionsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_guaranteed_endpoint_create_durability: {
        value: cdktf.stringToHclTerraform(this._allowGuaranteedEndpointCreateDurability),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allow_guaranteed_endpoint_create_enabled: {
        value: cdktf.booleanToHclTerraform(this._allowGuaranteedEndpointCreateEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_guaranteed_msg_receive_enabled: {
        value: cdktf.booleanToHclTerraform(this._allowGuaranteedMsgReceiveEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_guaranteed_msg_send_enabled: {
        value: cdktf.booleanToHclTerraform(this._allowGuaranteedMsgSendEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_shared_subscriptions_enabled: {
        value: cdktf.booleanToHclTerraform(this._allowSharedSubscriptionsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_transacted_sessions_enabled: {
        value: cdktf.booleanToHclTerraform(this._allowTransactedSessionsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      api_queue_management_copy_from_on_create_template_name: {
        value: cdktf.stringToHclTerraform(this._apiQueueManagementCopyFromOnCreateTemplateName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      api_topic_endpoint_management_copy_from_on_create_template_name: {
        value: cdktf.stringToHclTerraform(this._apiTopicEndpointManagementCopyFromOnCreateTemplateName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_profile_name: {
        value: cdktf.stringToHclTerraform(this._clientProfileName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compression_enabled: {
        value: cdktf.booleanToHclTerraform(this._compressionEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      eliding_delay: {
        value: cdktf.numberToHclTerraform(this._elidingDelay),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      eliding_enabled: {
        value: cdktf.booleanToHclTerraform(this._elidingEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      eliding_max_topic_count: {
        value: cdktf.numberToHclTerraform(this._elidingMaxTopicCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      event_client_provisioned_endpoint_spool_usage_threshold: {
        value: solacebrokerMsgVpnClientProfileEventClientProvisionedEndpointSpoolUsageThresholdToHclTerraform(this._eventClientProvisionedEndpointSpoolUsageThreshold.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SolacebrokerMsgVpnClientProfileEventClientProvisionedEndpointSpoolUsageThreshold",
      },
      event_connection_count_per_client_username_threshold: {
        value: solacebrokerMsgVpnClientProfileEventConnectionCountPerClientUsernameThresholdToHclTerraform(this._eventConnectionCountPerClientUsernameThreshold.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SolacebrokerMsgVpnClientProfileEventConnectionCountPerClientUsernameThreshold",
      },
      event_egress_flow_count_threshold: {
        value: solacebrokerMsgVpnClientProfileEventEgressFlowCountThresholdToHclTerraform(this._eventEgressFlowCountThreshold.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SolacebrokerMsgVpnClientProfileEventEgressFlowCountThreshold",
      },
      event_endpoint_count_per_client_username_threshold: {
        value: solacebrokerMsgVpnClientProfileEventEndpointCountPerClientUsernameThresholdToHclTerraform(this._eventEndpointCountPerClientUsernameThreshold.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SolacebrokerMsgVpnClientProfileEventEndpointCountPerClientUsernameThreshold",
      },
      event_ingress_flow_count_threshold: {
        value: solacebrokerMsgVpnClientProfileEventIngressFlowCountThresholdToHclTerraform(this._eventIngressFlowCountThreshold.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SolacebrokerMsgVpnClientProfileEventIngressFlowCountThreshold",
      },
      event_service_smf_connection_count_per_client_username_threshold: {
        value: solacebrokerMsgVpnClientProfileEventServiceSmfConnectionCountPerClientUsernameThresholdToHclTerraform(this._eventServiceSmfConnectionCountPerClientUsernameThreshold.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SolacebrokerMsgVpnClientProfileEventServiceSmfConnectionCountPerClientUsernameThreshold",
      },
      event_service_web_connection_count_per_client_username_threshold: {
        value: solacebrokerMsgVpnClientProfileEventServiceWebConnectionCountPerClientUsernameThresholdToHclTerraform(this._eventServiceWebConnectionCountPerClientUsernameThreshold.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SolacebrokerMsgVpnClientProfileEventServiceWebConnectionCountPerClientUsernameThreshold",
      },
      event_subscription_count_threshold: {
        value: solacebrokerMsgVpnClientProfileEventSubscriptionCountThresholdToHclTerraform(this._eventSubscriptionCountThreshold.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SolacebrokerMsgVpnClientProfileEventSubscriptionCountThreshold",
      },
      event_transacted_session_count_threshold: {
        value: solacebrokerMsgVpnClientProfileEventTransactedSessionCountThresholdToHclTerraform(this._eventTransactedSessionCountThreshold.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SolacebrokerMsgVpnClientProfileEventTransactedSessionCountThreshold",
      },
      event_transaction_count_threshold: {
        value: solacebrokerMsgVpnClientProfileEventTransactionCountThresholdToHclTerraform(this._eventTransactionCountThreshold.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SolacebrokerMsgVpnClientProfileEventTransactionCountThreshold",
      },
      max_amqp_link_count: {
        value: cdktf.numberToHclTerraform(this._maxAmqpLinkCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_connection_count_per_client_username: {
        value: cdktf.numberToHclTerraform(this._maxConnectionCountPerClientUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_egress_flow_count: {
        value: cdktf.numberToHclTerraform(this._maxEgressFlowCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_endpoint_count_per_client_username: {
        value: cdktf.numberToHclTerraform(this._maxEndpointCountPerClientUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_ingress_flow_count: {
        value: cdktf.numberToHclTerraform(this._maxIngressFlowCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_msgs_per_transaction: {
        value: cdktf.numberToHclTerraform(this._maxMsgsPerTransaction),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_subscription_count: {
        value: cdktf.numberToHclTerraform(this._maxSubscriptionCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_transacted_session_count: {
        value: cdktf.numberToHclTerraform(this._maxTransactedSessionCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_transaction_count: {
        value: cdktf.numberToHclTerraform(this._maxTransactionCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      msg_vpn_name: {
        value: cdktf.stringToHclTerraform(this._msgVpnName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      queue_control1_max_depth: {
        value: cdktf.numberToHclTerraform(this._queueControl1MaxDepth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      queue_control1_min_msg_burst: {
        value: cdktf.numberToHclTerraform(this._queueControl1MinMsgBurst),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      queue_direct1_max_depth: {
        value: cdktf.numberToHclTerraform(this._queueDirect1MaxDepth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      queue_direct1_min_msg_burst: {
        value: cdktf.numberToHclTerraform(this._queueDirect1MinMsgBurst),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      queue_direct2_max_depth: {
        value: cdktf.numberToHclTerraform(this._queueDirect2MaxDepth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      queue_direct2_min_msg_burst: {
        value: cdktf.numberToHclTerraform(this._queueDirect2MinMsgBurst),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      queue_direct3_max_depth: {
        value: cdktf.numberToHclTerraform(this._queueDirect3MaxDepth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      queue_direct3_min_msg_burst: {
        value: cdktf.numberToHclTerraform(this._queueDirect3MinMsgBurst),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      queue_guaranteed1_max_depth: {
        value: cdktf.numberToHclTerraform(this._queueGuaranteed1MaxDepth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      queue_guaranteed1_min_msg_burst: {
        value: cdktf.numberToHclTerraform(this._queueGuaranteed1MinMsgBurst),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      reject_msg_to_sender_on_no_subscription_match_enabled: {
        value: cdktf.booleanToHclTerraform(this._rejectMsgToSenderOnNoSubscriptionMatchEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      replication_allow_client_connect_when_standby_enabled: {
        value: cdktf.booleanToHclTerraform(this._replicationAllowClientConnectWhenStandbyEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      service_min_keepalive_timeout: {
        value: cdktf.numberToHclTerraform(this._serviceMinKeepaliveTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      service_smf_max_connection_count_per_client_username: {
        value: cdktf.numberToHclTerraform(this._serviceSmfMaxConnectionCountPerClientUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      service_smf_min_keepalive_enabled: {
        value: cdktf.booleanToHclTerraform(this._serviceSmfMinKeepaliveEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      service_web_inactive_timeout: {
        value: cdktf.numberToHclTerraform(this._serviceWebInactiveTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      service_web_max_connection_count_per_client_username: {
        value: cdktf.numberToHclTerraform(this._serviceWebMaxConnectionCountPerClientUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      service_web_max_payload: {
        value: cdktf.numberToHclTerraform(this._serviceWebMaxPayload),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tcp_congestion_window_size: {
        value: cdktf.numberToHclTerraform(this._tcpCongestionWindowSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tcp_keepalive_count: {
        value: cdktf.numberToHclTerraform(this._tcpKeepaliveCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tcp_keepalive_idle_time: {
        value: cdktf.numberToHclTerraform(this._tcpKeepaliveIdleTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tcp_keepalive_interval: {
        value: cdktf.numberToHclTerraform(this._tcpKeepaliveInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tcp_max_segment_size: {
        value: cdktf.numberToHclTerraform(this._tcpMaxSegmentSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tcp_max_window_size: {
        value: cdktf.numberToHclTerraform(this._tcpMaxWindowSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tls_allow_downgrade_to_plain_text_enabled: {
        value: cdktf.booleanToHclTerraform(this._tlsAllowDowngradeToPlainTextEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
