// https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_dmr_cluster_link
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SolacebrokerDmrClusterLinkConfig extends cdktf.TerraformMetaArguments {
  /**
  * The password used to authenticate with the remote node when using basic internal authentication. If this per-Link password is not configured, the Cluster's password is used instead.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". This attribute is absent from a GET and not updated when absent in a PUT, subject to the exceptions [here](https://docs.solace.com/Admin/SEMP/SEMP-API-Archit.htm#HTTP_Methods). Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates via config-sync. The default value is `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_dmr_cluster_link#authentication_basic_password SolacebrokerDmrClusterLink#authentication_basic_password}
  */
  readonly authenticationBasicPassword?: string;
  /**
  * The authentication scheme to be used by the Link which initiates connections to the remote node.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates via config-sync. The default value is `"basic"`. The allowed values and their meaning are:
  * 
  * <pre>
  * "basic" - Basic Authentication Scheme (via username and password).
  * "client-certificate" - Client Certificate Authentication Scheme (via certificate file or content).
  * </pre>
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_dmr_cluster_link#authentication_scheme SolacebrokerDmrClusterLink#authentication_scheme}
  */
  readonly authenticationScheme?: string;
  /**
  * The maximum depth of the "Control 1" (C-1) priority queue, in work units. Each work unit is 2048 bytes of message data.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". Changes to this attribute are synchronized to HA mates via config-sync. The default value is `20000`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_dmr_cluster_link#client_profile_queue_control1_max_depth SolacebrokerDmrClusterLink#client_profile_queue_control1_max_depth}
  */
  readonly clientProfileQueueControl1MaxDepth?: number;
  /**
  * The number of messages that are always allowed entry into the "Control 1" (C-1) priority queue, regardless of the `client_profile_queue_control1_max_depth` value.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". Changes to this attribute are synchronized to HA mates via config-sync. The default value is `4`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_dmr_cluster_link#client_profile_queue_control1_min_msg_burst SolacebrokerDmrClusterLink#client_profile_queue_control1_min_msg_burst}
  */
  readonly clientProfileQueueControl1MinMsgBurst?: number;
  /**
  * The maximum depth of the "Direct 1" (D-1) priority queue, in work units. Each work unit is 2048 bytes of message data.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". Changes to this attribute are synchronized to HA mates via config-sync. The default value is `20000`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_dmr_cluster_link#client_profile_queue_direct1_max_depth SolacebrokerDmrClusterLink#client_profile_queue_direct1_max_depth}
  */
  readonly clientProfileQueueDirect1MaxDepth?: number;
  /**
  * The number of messages that are always allowed entry into the "Direct 1" (D-1) priority queue, regardless of the `client_profile_queue_direct1_max_depth` value.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". Changes to this attribute are synchronized to HA mates via config-sync. The default value is `4`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_dmr_cluster_link#client_profile_queue_direct1_min_msg_burst SolacebrokerDmrClusterLink#client_profile_queue_direct1_min_msg_burst}
  */
  readonly clientProfileQueueDirect1MinMsgBurst?: number;
  /**
  * The maximum depth of the "Direct 2" (D-2) priority queue, in work units. Each work unit is 2048 bytes of message data.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". Changes to this attribute are synchronized to HA mates via config-sync. The default value is `20000`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_dmr_cluster_link#client_profile_queue_direct2_max_depth SolacebrokerDmrClusterLink#client_profile_queue_direct2_max_depth}
  */
  readonly clientProfileQueueDirect2MaxDepth?: number;
  /**
  * The number of messages that are always allowed entry into the "Direct 2" (D-2) priority queue, regardless of the `client_profile_queue_direct2_max_depth` value.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". Changes to this attribute are synchronized to HA mates via config-sync. The default value is `4`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_dmr_cluster_link#client_profile_queue_direct2_min_msg_burst SolacebrokerDmrClusterLink#client_profile_queue_direct2_min_msg_burst}
  */
  readonly clientProfileQueueDirect2MinMsgBurst?: number;
  /**
  * The maximum depth of the "Direct 3" (D-3) priority queue, in work units. Each work unit is 2048 bytes of message data.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". Changes to this attribute are synchronized to HA mates via config-sync. The default value is `20000`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_dmr_cluster_link#client_profile_queue_direct3_max_depth SolacebrokerDmrClusterLink#client_profile_queue_direct3_max_depth}
  */
  readonly clientProfileQueueDirect3MaxDepth?: number;
  /**
  * The number of messages that are always allowed entry into the "Direct 3" (D-3) priority queue, regardless of the `client_profile_queue_direct3_max_depth` value.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". Changes to this attribute are synchronized to HA mates via config-sync. The default value is `4`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_dmr_cluster_link#client_profile_queue_direct3_min_msg_burst SolacebrokerDmrClusterLink#client_profile_queue_direct3_min_msg_burst}
  */
  readonly clientProfileQueueDirect3MinMsgBurst?: number;
  /**
  * The maximum depth of the "Guaranteed 1" (G-1) priority queue, in work units. Each work unit is 2048 bytes of message data.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". Changes to this attribute are synchronized to HA mates via config-sync. The default value is `20000`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_dmr_cluster_link#client_profile_queue_guaranteed1_max_depth SolacebrokerDmrClusterLink#client_profile_queue_guaranteed1_max_depth}
  */
  readonly clientProfileQueueGuaranteed1MaxDepth?: number;
  /**
  * The number of messages that are always allowed entry into the "Guaranteed 1" (G-1) priority queue, regardless of the `client_profile_queue_guaranteed1_max_depth` value.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". Changes to this attribute are synchronized to HA mates via config-sync. The default value is `255`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_dmr_cluster_link#client_profile_queue_guaranteed1_min_msg_burst SolacebrokerDmrClusterLink#client_profile_queue_guaranteed1_min_msg_burst}
  */
  readonly clientProfileQueueGuaranteed1MinMsgBurst?: number;
  /**
  * The TCP initial congestion window size, in multiples of the TCP Maximum Segment Size (MSS). Changing the value from its default of 2 results in non-compliance with RFC 2581. Contact support before changing this value.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". Changes to this attribute are synchronized to HA mates via config-sync. The default value is `2`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_dmr_cluster_link#client_profile_tcp_congestion_window_size SolacebrokerDmrClusterLink#client_profile_tcp_congestion_window_size}
  */
  readonly clientProfileTcpCongestionWindowSize?: number;
  /**
  * The number of TCP keepalive retransmissions to be carried out before declaring that the remote end is not available.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". Changes to this attribute are synchronized to HA mates via config-sync. The default value is `5`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_dmr_cluster_link#client_profile_tcp_keepalive_count SolacebrokerDmrClusterLink#client_profile_tcp_keepalive_count}
  */
  readonly clientProfileTcpKeepaliveCount?: number;
  /**
  * The amount of time a connection must remain idle before TCP begins sending keepalive probes, in seconds.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". Changes to this attribute are synchronized to HA mates via config-sync. The default value is `3`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_dmr_cluster_link#client_profile_tcp_keepalive_idle_time SolacebrokerDmrClusterLink#client_profile_tcp_keepalive_idle_time}
  */
  readonly clientProfileTcpKeepaliveIdleTime?: number;
  /**
  * The amount of time between TCP keepalive retransmissions when no acknowledgment is received, in seconds.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". Changes to this attribute are synchronized to HA mates via config-sync. The default value is `1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_dmr_cluster_link#client_profile_tcp_keepalive_interval SolacebrokerDmrClusterLink#client_profile_tcp_keepalive_interval}
  */
  readonly clientProfileTcpKeepaliveInterval?: number;
  /**
  * The TCP maximum segment size, in bytes. Changes are applied to all existing connections.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". Changes to this attribute are synchronized to HA mates via config-sync. The default value is `1460`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_dmr_cluster_link#client_profile_tcp_max_segment_size SolacebrokerDmrClusterLink#client_profile_tcp_max_segment_size}
  */
  readonly clientProfileTcpMaxSegmentSize?: number;
  /**
  * The TCP maximum window size, in kilobytes. Changes are applied to all existing connections.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". Changes to this attribute are synchronized to HA mates via config-sync. The default value is `256`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_dmr_cluster_link#client_profile_tcp_max_window_size SolacebrokerDmrClusterLink#client_profile_tcp_max_window_size}
  */
  readonly clientProfileTcpMaxWindowSize?: number;
  /**
  * Enable or disable whether TCP should revert to slow-start after an idle period, as recommended by RFC 5681 s4.1. Changes are applied to all existing connections.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". Changes to this attribute are synchronized to HA mates via config-sync. The default value is `true`. Available since SEMP API version 2.48.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_dmr_cluster_link#client_profile_tcp_slow_start_after_idle_enabled SolacebrokerDmrClusterLink#client_profile_tcp_slow_start_after_idle_enabled}
  */
  readonly clientProfileTcpSlowStartAfterIdleEnabled?: boolean | cdktf.IResolvable;
  /**
  * The number of retry attempts to establish a connection before moving on to the next remote Message VPN.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". Changes to this attribute are synchronized to HA mates via config-sync. The default value is `0`. Available since SEMP API version 2.41.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_dmr_cluster_link#connection_retry_count SolacebrokerDmrClusterLink#connection_retry_count}
  */
  readonly connectionRetryCount?: number;
  /**
  * The number of seconds the broker waits for the bridge connection to be established before attempting a new connection.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". Changes to this attribute are synchronized to HA mates via config-sync. The default value is `3`. Available since SEMP API version 2.41.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_dmr_cluster_link#connection_retry_delay SolacebrokerDmrClusterLink#connection_retry_delay}
  */
  readonly connectionRetryDelay?: number;
  /**
  * The name of the Cluster.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_dmr_cluster_link#dmr_cluster_name SolacebrokerDmrClusterLink#dmr_cluster_name}
  */
  readonly dmrClusterName: string;
  /**
  * The number of outstanding guaranteed messages that can be sent over the Link before acknowledgment is received by the sender.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates via config-sync. The default value is `255`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_dmr_cluster_link#egress_flow_window_size SolacebrokerDmrClusterLink#egress_flow_window_size}
  */
  readonly egressFlowWindowSize?: number;
  /**
  * Enable or disable the Link. When disabled, subscription sets of this and the remote node are not kept up-to-date, and messages are not exchanged with the remote node. Published guaranteed messages will be queued up for future delivery based on current subscription sets.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". Changes to this attribute are synchronized to HA mates via config-sync. The default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_dmr_cluster_link#enabled SolacebrokerDmrClusterLink#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The initiator of the Link's TCP connections.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates via config-sync. The default value is `"lexical"`. The allowed values and their meaning are:
  * 
  * <pre>
  * "lexical" - The "higher" node-name initiates.
  * "local" - The local node initiates.
  * "remote" - The remote node initiates.
  * </pre>
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_dmr_cluster_link#initiator SolacebrokerDmrClusterLink#initiator}
  */
  readonly initiator?: string;
  /**
  * The name of the Dead Message Queue (DMQ) used by the Queue for discarded messages.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". Changes to this attribute are synchronized to HA mates via config-sync. The default value is `"#DEAD_MSG_QUEUE"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_dmr_cluster_link#queue_dead_msg_queue SolacebrokerDmrClusterLink#queue_dead_msg_queue}
  */
  readonly queueDeadMsgQueue?: string;
  /**
  * The thresholds for the message spool usage event of the Queue, relative to `queue_max_msg_spool_usage`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_dmr_cluster_link#queue_event_spool_usage_threshold SolacebrokerDmrClusterLink#queue_event_spool_usage_threshold}
  */
  readonly queueEventSpoolUsageThreshold?: SolacebrokerDmrClusterLinkQueueEventSpoolUsageThreshold;
  /**
  * The maximum number of messages delivered but not acknowledged per flow for the Queue.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". Changes to this attribute are synchronized to HA mates via config-sync. The default value is `1000000`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_dmr_cluster_link#queue_max_delivered_unacked_msgs_per_flow SolacebrokerDmrClusterLink#queue_max_delivered_unacked_msgs_per_flow}
  */
  readonly queueMaxDeliveredUnackedMsgsPerFlow?: number;
  /**
  * The maximum message spool usage by the Queue (quota), in megabytes (MB).
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". Changes to this attribute are synchronized to HA mates via config-sync. The default value is `800000`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_dmr_cluster_link#queue_max_msg_spool_usage SolacebrokerDmrClusterLink#queue_max_msg_spool_usage}
  */
  readonly queueMaxMsgSpoolUsage?: number;
  /**
  * The maximum number of times the Queue will attempt redelivery of a message prior to it being discarded or moved to the DMQ. A value of 0 means to retry forever.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". Changes to this attribute are synchronized to HA mates via config-sync. The default value is `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_dmr_cluster_link#queue_max_redelivery_count SolacebrokerDmrClusterLink#queue_max_redelivery_count}
  */
  readonly queueMaxRedeliveryCount?: number;
  /**
  * The maximum time in seconds a message can stay in the Queue when `queue_respect_ttl_enabled` is `true`. A message expires when the lesser of the sender assigned time-to-live (TTL) in the message and the `queue_max_ttl` configured for the Queue, is exceeded. A value of 0 disables expiry.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". Changes to this attribute are synchronized to HA mates via config-sync. The default value is `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_dmr_cluster_link#queue_max_ttl SolacebrokerDmrClusterLink#queue_max_ttl}
  */
  readonly queueMaxTtl?: number;
  /**
  * Determines when to return negative acknowledgments (NACKs) to sending clients on message discards. Note that NACKs cause the message to not be delivered to any destination and Transacted Session commits to fail.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". Changes to this attribute are synchronized to HA mates via config-sync. The default value is `"always"`. The allowed values and their meaning are:
  * 
  * <pre>
  * "never" - Silently discard messages.
  * "when-queue-enabled" - NACK each message discard back to the client, except messages that are discarded because an endpoint is administratively disabled.
  * "always" - NACK each message discard back to the client, including messages that are discarded because an endpoint is administratively disabled.
  * </pre>
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_dmr_cluster_link#queue_reject_msg_to_sender_on_discard_behavior SolacebrokerDmrClusterLink#queue_reject_msg_to_sender_on_discard_behavior}
  */
  readonly queueRejectMsgToSenderOnDiscardBehavior?: string;
  /**
  * Enable or disable the respecting of DMQ Eligible for messages in the Queue.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". Changes to this attribute are synchronized to HA mates via config-sync. The default value is `false`. Available since SEMP API version 2.49.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_dmr_cluster_link#queue_respect_dmq_eligible_enabled SolacebrokerDmrClusterLink#queue_respect_dmq_eligible_enabled}
  */
  readonly queueRespectDmqEligibleEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enable or disable the respecting of the time-to-live (TTL) for messages in the Queue. When enabled, expired messages are discarded or moved to the DMQ.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". Changes to this attribute are synchronized to HA mates via config-sync. The default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_dmr_cluster_link#queue_respect_ttl_enabled SolacebrokerDmrClusterLink#queue_respect_ttl_enabled}
  */
  readonly queueRespectTtlEnabled?: boolean | cdktf.IResolvable;
  /**
  * The name of the node at the remote end of the Link.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_dmr_cluster_link#remote_node_name SolacebrokerDmrClusterLink#remote_node_name}
  */
  readonly remoteNodeName: string;
  /**
  * The span of the Link, either internal or external. Internal Links connect nodes within the same Cluster. External Links connect nodes within different Clusters.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates via config-sync. The default value is `"external"`. The allowed values and their meaning are:
  * 
  * <pre>
  * "internal" - Link to same cluster.
  * "external" - Link to other cluster.
  * </pre>
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_dmr_cluster_link#span SolacebrokerDmrClusterLink#span}
  */
  readonly span?: string;
  /**
  * Enable or disable compression on the Link.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates via config-sync. The default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_dmr_cluster_link#transport_compressed_enabled SolacebrokerDmrClusterLink#transport_compressed_enabled}
  */
  readonly transportCompressedEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enable or disable encryption (TLS) on the Link.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates via config-sync. The default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_dmr_cluster_link#transport_tls_enabled SolacebrokerDmrClusterLink#transport_tls_enabled}
  */
  readonly transportTlsEnabled?: boolean | cdktf.IResolvable;
}
export interface SolacebrokerDmrClusterLinkQueueEventSpoolUsageThreshold {
  /**
  * The clear threshold for the value of this counter as a percentage of its maximum value. Falling below this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates via config-sync. The default value is `1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_dmr_cluster_link#clear_percent SolacebrokerDmrClusterLink#clear_percent}
  */
  readonly clearPercent?: number;
  /**
  * The clear threshold for the absolute value of this counter. Falling below this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates via config-sync. The default is not applicable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_dmr_cluster_link#clear_value SolacebrokerDmrClusterLink#clear_value}
  */
  readonly clearValue?: number;
  /**
  * The set threshold for the value of this counter as a percentage of its maximum value. Exceeding this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates via config-sync. The default value is `2`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_dmr_cluster_link#set_percent SolacebrokerDmrClusterLink#set_percent}
  */
  readonly setPercent?: number;
  /**
  * The set threshold for the absolute value of this counter. Exceeding this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates via config-sync. The default is not applicable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_dmr_cluster_link#set_value SolacebrokerDmrClusterLink#set_value}
  */
  readonly setValue?: number;
}

export function solacebrokerDmrClusterLinkQueueEventSpoolUsageThresholdToTerraform(struct?: SolacebrokerDmrClusterLinkQueueEventSpoolUsageThreshold | cdktf.IResolvable): any {
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


export function solacebrokerDmrClusterLinkQueueEventSpoolUsageThresholdToHclTerraform(struct?: SolacebrokerDmrClusterLinkQueueEventSpoolUsageThreshold | cdktf.IResolvable): any {
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

export class SolacebrokerDmrClusterLinkQueueEventSpoolUsageThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SolacebrokerDmrClusterLinkQueueEventSpoolUsageThreshold | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SolacebrokerDmrClusterLinkQueueEventSpoolUsageThreshold | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_dmr_cluster_link solacebroker_dmr_cluster_link}
*/
export class SolacebrokerDmrClusterLink extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "solacebroker_dmr_cluster_link";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SolacebrokerDmrClusterLink resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SolacebrokerDmrClusterLink to import
  * @param importFromId The id of the existing SolacebrokerDmrClusterLink that should be imported. Refer to the {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_dmr_cluster_link#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SolacebrokerDmrClusterLink to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "solacebroker_dmr_cluster_link", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_dmr_cluster_link solacebroker_dmr_cluster_link} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SolacebrokerDmrClusterLinkConfig
  */
  public constructor(scope: Construct, id: string, config: SolacebrokerDmrClusterLinkConfig) {
    super(scope, id, {
      terraformResourceType: 'solacebroker_dmr_cluster_link',
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
    this._authenticationBasicPassword = config.authenticationBasicPassword;
    this._authenticationScheme = config.authenticationScheme;
    this._clientProfileQueueControl1MaxDepth = config.clientProfileQueueControl1MaxDepth;
    this._clientProfileQueueControl1MinMsgBurst = config.clientProfileQueueControl1MinMsgBurst;
    this._clientProfileQueueDirect1MaxDepth = config.clientProfileQueueDirect1MaxDepth;
    this._clientProfileQueueDirect1MinMsgBurst = config.clientProfileQueueDirect1MinMsgBurst;
    this._clientProfileQueueDirect2MaxDepth = config.clientProfileQueueDirect2MaxDepth;
    this._clientProfileQueueDirect2MinMsgBurst = config.clientProfileQueueDirect2MinMsgBurst;
    this._clientProfileQueueDirect3MaxDepth = config.clientProfileQueueDirect3MaxDepth;
    this._clientProfileQueueDirect3MinMsgBurst = config.clientProfileQueueDirect3MinMsgBurst;
    this._clientProfileQueueGuaranteed1MaxDepth = config.clientProfileQueueGuaranteed1MaxDepth;
    this._clientProfileQueueGuaranteed1MinMsgBurst = config.clientProfileQueueGuaranteed1MinMsgBurst;
    this._clientProfileTcpCongestionWindowSize = config.clientProfileTcpCongestionWindowSize;
    this._clientProfileTcpKeepaliveCount = config.clientProfileTcpKeepaliveCount;
    this._clientProfileTcpKeepaliveIdleTime = config.clientProfileTcpKeepaliveIdleTime;
    this._clientProfileTcpKeepaliveInterval = config.clientProfileTcpKeepaliveInterval;
    this._clientProfileTcpMaxSegmentSize = config.clientProfileTcpMaxSegmentSize;
    this._clientProfileTcpMaxWindowSize = config.clientProfileTcpMaxWindowSize;
    this._clientProfileTcpSlowStartAfterIdleEnabled = config.clientProfileTcpSlowStartAfterIdleEnabled;
    this._connectionRetryCount = config.connectionRetryCount;
    this._connectionRetryDelay = config.connectionRetryDelay;
    this._dmrClusterName = config.dmrClusterName;
    this._egressFlowWindowSize = config.egressFlowWindowSize;
    this._enabled = config.enabled;
    this._initiator = config.initiator;
    this._queueDeadMsgQueue = config.queueDeadMsgQueue;
    this._queueEventSpoolUsageThreshold.internalValue = config.queueEventSpoolUsageThreshold;
    this._queueMaxDeliveredUnackedMsgsPerFlow = config.queueMaxDeliveredUnackedMsgsPerFlow;
    this._queueMaxMsgSpoolUsage = config.queueMaxMsgSpoolUsage;
    this._queueMaxRedeliveryCount = config.queueMaxRedeliveryCount;
    this._queueMaxTtl = config.queueMaxTtl;
    this._queueRejectMsgToSenderOnDiscardBehavior = config.queueRejectMsgToSenderOnDiscardBehavior;
    this._queueRespectDmqEligibleEnabled = config.queueRespectDmqEligibleEnabled;
    this._queueRespectTtlEnabled = config.queueRespectTtlEnabled;
    this._remoteNodeName = config.remoteNodeName;
    this._span = config.span;
    this._transportCompressedEnabled = config.transportCompressedEnabled;
    this._transportTlsEnabled = config.transportTlsEnabled;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authentication_basic_password - computed: false, optional: true, required: false
  private _authenticationBasicPassword?: string; 
  public get authenticationBasicPassword() {
    return this.getStringAttribute('authentication_basic_password');
  }
  public set authenticationBasicPassword(value: string) {
    this._authenticationBasicPassword = value;
  }
  public resetAuthenticationBasicPassword() {
    this._authenticationBasicPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationBasicPasswordInput() {
    return this._authenticationBasicPassword;
  }

  // authentication_scheme - computed: false, optional: true, required: false
  private _authenticationScheme?: string; 
  public get authenticationScheme() {
    return this.getStringAttribute('authentication_scheme');
  }
  public set authenticationScheme(value: string) {
    this._authenticationScheme = value;
  }
  public resetAuthenticationScheme() {
    this._authenticationScheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationSchemeInput() {
    return this._authenticationScheme;
  }

  // client_profile_queue_control1_max_depth - computed: false, optional: true, required: false
  private _clientProfileQueueControl1MaxDepth?: number; 
  public get clientProfileQueueControl1MaxDepth() {
    return this.getNumberAttribute('client_profile_queue_control1_max_depth');
  }
  public set clientProfileQueueControl1MaxDepth(value: number) {
    this._clientProfileQueueControl1MaxDepth = value;
  }
  public resetClientProfileQueueControl1MaxDepth() {
    this._clientProfileQueueControl1MaxDepth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientProfileQueueControl1MaxDepthInput() {
    return this._clientProfileQueueControl1MaxDepth;
  }

  // client_profile_queue_control1_min_msg_burst - computed: false, optional: true, required: false
  private _clientProfileQueueControl1MinMsgBurst?: number; 
  public get clientProfileQueueControl1MinMsgBurst() {
    return this.getNumberAttribute('client_profile_queue_control1_min_msg_burst');
  }
  public set clientProfileQueueControl1MinMsgBurst(value: number) {
    this._clientProfileQueueControl1MinMsgBurst = value;
  }
  public resetClientProfileQueueControl1MinMsgBurst() {
    this._clientProfileQueueControl1MinMsgBurst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientProfileQueueControl1MinMsgBurstInput() {
    return this._clientProfileQueueControl1MinMsgBurst;
  }

  // client_profile_queue_direct1_max_depth - computed: false, optional: true, required: false
  private _clientProfileQueueDirect1MaxDepth?: number; 
  public get clientProfileQueueDirect1MaxDepth() {
    return this.getNumberAttribute('client_profile_queue_direct1_max_depth');
  }
  public set clientProfileQueueDirect1MaxDepth(value: number) {
    this._clientProfileQueueDirect1MaxDepth = value;
  }
  public resetClientProfileQueueDirect1MaxDepth() {
    this._clientProfileQueueDirect1MaxDepth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientProfileQueueDirect1MaxDepthInput() {
    return this._clientProfileQueueDirect1MaxDepth;
  }

  // client_profile_queue_direct1_min_msg_burst - computed: false, optional: true, required: false
  private _clientProfileQueueDirect1MinMsgBurst?: number; 
  public get clientProfileQueueDirect1MinMsgBurst() {
    return this.getNumberAttribute('client_profile_queue_direct1_min_msg_burst');
  }
  public set clientProfileQueueDirect1MinMsgBurst(value: number) {
    this._clientProfileQueueDirect1MinMsgBurst = value;
  }
  public resetClientProfileQueueDirect1MinMsgBurst() {
    this._clientProfileQueueDirect1MinMsgBurst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientProfileQueueDirect1MinMsgBurstInput() {
    return this._clientProfileQueueDirect1MinMsgBurst;
  }

  // client_profile_queue_direct2_max_depth - computed: false, optional: true, required: false
  private _clientProfileQueueDirect2MaxDepth?: number; 
  public get clientProfileQueueDirect2MaxDepth() {
    return this.getNumberAttribute('client_profile_queue_direct2_max_depth');
  }
  public set clientProfileQueueDirect2MaxDepth(value: number) {
    this._clientProfileQueueDirect2MaxDepth = value;
  }
  public resetClientProfileQueueDirect2MaxDepth() {
    this._clientProfileQueueDirect2MaxDepth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientProfileQueueDirect2MaxDepthInput() {
    return this._clientProfileQueueDirect2MaxDepth;
  }

  // client_profile_queue_direct2_min_msg_burst - computed: false, optional: true, required: false
  private _clientProfileQueueDirect2MinMsgBurst?: number; 
  public get clientProfileQueueDirect2MinMsgBurst() {
    return this.getNumberAttribute('client_profile_queue_direct2_min_msg_burst');
  }
  public set clientProfileQueueDirect2MinMsgBurst(value: number) {
    this._clientProfileQueueDirect2MinMsgBurst = value;
  }
  public resetClientProfileQueueDirect2MinMsgBurst() {
    this._clientProfileQueueDirect2MinMsgBurst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientProfileQueueDirect2MinMsgBurstInput() {
    return this._clientProfileQueueDirect2MinMsgBurst;
  }

  // client_profile_queue_direct3_max_depth - computed: false, optional: true, required: false
  private _clientProfileQueueDirect3MaxDepth?: number; 
  public get clientProfileQueueDirect3MaxDepth() {
    return this.getNumberAttribute('client_profile_queue_direct3_max_depth');
  }
  public set clientProfileQueueDirect3MaxDepth(value: number) {
    this._clientProfileQueueDirect3MaxDepth = value;
  }
  public resetClientProfileQueueDirect3MaxDepth() {
    this._clientProfileQueueDirect3MaxDepth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientProfileQueueDirect3MaxDepthInput() {
    return this._clientProfileQueueDirect3MaxDepth;
  }

  // client_profile_queue_direct3_min_msg_burst - computed: false, optional: true, required: false
  private _clientProfileQueueDirect3MinMsgBurst?: number; 
  public get clientProfileQueueDirect3MinMsgBurst() {
    return this.getNumberAttribute('client_profile_queue_direct3_min_msg_burst');
  }
  public set clientProfileQueueDirect3MinMsgBurst(value: number) {
    this._clientProfileQueueDirect3MinMsgBurst = value;
  }
  public resetClientProfileQueueDirect3MinMsgBurst() {
    this._clientProfileQueueDirect3MinMsgBurst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientProfileQueueDirect3MinMsgBurstInput() {
    return this._clientProfileQueueDirect3MinMsgBurst;
  }

  // client_profile_queue_guaranteed1_max_depth - computed: false, optional: true, required: false
  private _clientProfileQueueGuaranteed1MaxDepth?: number; 
  public get clientProfileQueueGuaranteed1MaxDepth() {
    return this.getNumberAttribute('client_profile_queue_guaranteed1_max_depth');
  }
  public set clientProfileQueueGuaranteed1MaxDepth(value: number) {
    this._clientProfileQueueGuaranteed1MaxDepth = value;
  }
  public resetClientProfileQueueGuaranteed1MaxDepth() {
    this._clientProfileQueueGuaranteed1MaxDepth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientProfileQueueGuaranteed1MaxDepthInput() {
    return this._clientProfileQueueGuaranteed1MaxDepth;
  }

  // client_profile_queue_guaranteed1_min_msg_burst - computed: false, optional: true, required: false
  private _clientProfileQueueGuaranteed1MinMsgBurst?: number; 
  public get clientProfileQueueGuaranteed1MinMsgBurst() {
    return this.getNumberAttribute('client_profile_queue_guaranteed1_min_msg_burst');
  }
  public set clientProfileQueueGuaranteed1MinMsgBurst(value: number) {
    this._clientProfileQueueGuaranteed1MinMsgBurst = value;
  }
  public resetClientProfileQueueGuaranteed1MinMsgBurst() {
    this._clientProfileQueueGuaranteed1MinMsgBurst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientProfileQueueGuaranteed1MinMsgBurstInput() {
    return this._clientProfileQueueGuaranteed1MinMsgBurst;
  }

  // client_profile_tcp_congestion_window_size - computed: false, optional: true, required: false
  private _clientProfileTcpCongestionWindowSize?: number; 
  public get clientProfileTcpCongestionWindowSize() {
    return this.getNumberAttribute('client_profile_tcp_congestion_window_size');
  }
  public set clientProfileTcpCongestionWindowSize(value: number) {
    this._clientProfileTcpCongestionWindowSize = value;
  }
  public resetClientProfileTcpCongestionWindowSize() {
    this._clientProfileTcpCongestionWindowSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientProfileTcpCongestionWindowSizeInput() {
    return this._clientProfileTcpCongestionWindowSize;
  }

  // client_profile_tcp_keepalive_count - computed: false, optional: true, required: false
  private _clientProfileTcpKeepaliveCount?: number; 
  public get clientProfileTcpKeepaliveCount() {
    return this.getNumberAttribute('client_profile_tcp_keepalive_count');
  }
  public set clientProfileTcpKeepaliveCount(value: number) {
    this._clientProfileTcpKeepaliveCount = value;
  }
  public resetClientProfileTcpKeepaliveCount() {
    this._clientProfileTcpKeepaliveCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientProfileTcpKeepaliveCountInput() {
    return this._clientProfileTcpKeepaliveCount;
  }

  // client_profile_tcp_keepalive_idle_time - computed: false, optional: true, required: false
  private _clientProfileTcpKeepaliveIdleTime?: number; 
  public get clientProfileTcpKeepaliveIdleTime() {
    return this.getNumberAttribute('client_profile_tcp_keepalive_idle_time');
  }
  public set clientProfileTcpKeepaliveIdleTime(value: number) {
    this._clientProfileTcpKeepaliveIdleTime = value;
  }
  public resetClientProfileTcpKeepaliveIdleTime() {
    this._clientProfileTcpKeepaliveIdleTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientProfileTcpKeepaliveIdleTimeInput() {
    return this._clientProfileTcpKeepaliveIdleTime;
  }

  // client_profile_tcp_keepalive_interval - computed: false, optional: true, required: false
  private _clientProfileTcpKeepaliveInterval?: number; 
  public get clientProfileTcpKeepaliveInterval() {
    return this.getNumberAttribute('client_profile_tcp_keepalive_interval');
  }
  public set clientProfileTcpKeepaliveInterval(value: number) {
    this._clientProfileTcpKeepaliveInterval = value;
  }
  public resetClientProfileTcpKeepaliveInterval() {
    this._clientProfileTcpKeepaliveInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientProfileTcpKeepaliveIntervalInput() {
    return this._clientProfileTcpKeepaliveInterval;
  }

  // client_profile_tcp_max_segment_size - computed: false, optional: true, required: false
  private _clientProfileTcpMaxSegmentSize?: number; 
  public get clientProfileTcpMaxSegmentSize() {
    return this.getNumberAttribute('client_profile_tcp_max_segment_size');
  }
  public set clientProfileTcpMaxSegmentSize(value: number) {
    this._clientProfileTcpMaxSegmentSize = value;
  }
  public resetClientProfileTcpMaxSegmentSize() {
    this._clientProfileTcpMaxSegmentSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientProfileTcpMaxSegmentSizeInput() {
    return this._clientProfileTcpMaxSegmentSize;
  }

  // client_profile_tcp_max_window_size - computed: false, optional: true, required: false
  private _clientProfileTcpMaxWindowSize?: number; 
  public get clientProfileTcpMaxWindowSize() {
    return this.getNumberAttribute('client_profile_tcp_max_window_size');
  }
  public set clientProfileTcpMaxWindowSize(value: number) {
    this._clientProfileTcpMaxWindowSize = value;
  }
  public resetClientProfileTcpMaxWindowSize() {
    this._clientProfileTcpMaxWindowSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientProfileTcpMaxWindowSizeInput() {
    return this._clientProfileTcpMaxWindowSize;
  }

  // client_profile_tcp_slow_start_after_idle_enabled - computed: false, optional: true, required: false
  private _clientProfileTcpSlowStartAfterIdleEnabled?: boolean | cdktf.IResolvable; 
  public get clientProfileTcpSlowStartAfterIdleEnabled() {
    return this.getBooleanAttribute('client_profile_tcp_slow_start_after_idle_enabled');
  }
  public set clientProfileTcpSlowStartAfterIdleEnabled(value: boolean | cdktf.IResolvable) {
    this._clientProfileTcpSlowStartAfterIdleEnabled = value;
  }
  public resetClientProfileTcpSlowStartAfterIdleEnabled() {
    this._clientProfileTcpSlowStartAfterIdleEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientProfileTcpSlowStartAfterIdleEnabledInput() {
    return this._clientProfileTcpSlowStartAfterIdleEnabled;
  }

  // connection_retry_count - computed: false, optional: true, required: false
  private _connectionRetryCount?: number; 
  public get connectionRetryCount() {
    return this.getNumberAttribute('connection_retry_count');
  }
  public set connectionRetryCount(value: number) {
    this._connectionRetryCount = value;
  }
  public resetConnectionRetryCount() {
    this._connectionRetryCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionRetryCountInput() {
    return this._connectionRetryCount;
  }

  // connection_retry_delay - computed: false, optional: true, required: false
  private _connectionRetryDelay?: number; 
  public get connectionRetryDelay() {
    return this.getNumberAttribute('connection_retry_delay');
  }
  public set connectionRetryDelay(value: number) {
    this._connectionRetryDelay = value;
  }
  public resetConnectionRetryDelay() {
    this._connectionRetryDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionRetryDelayInput() {
    return this._connectionRetryDelay;
  }

  // dmr_cluster_name - computed: false, optional: false, required: true
  private _dmrClusterName?: string; 
  public get dmrClusterName() {
    return this.getStringAttribute('dmr_cluster_name');
  }
  public set dmrClusterName(value: string) {
    this._dmrClusterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dmrClusterNameInput() {
    return this._dmrClusterName;
  }

  // egress_flow_window_size - computed: false, optional: true, required: false
  private _egressFlowWindowSize?: number; 
  public get egressFlowWindowSize() {
    return this.getNumberAttribute('egress_flow_window_size');
  }
  public set egressFlowWindowSize(value: number) {
    this._egressFlowWindowSize = value;
  }
  public resetEgressFlowWindowSize() {
    this._egressFlowWindowSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressFlowWindowSizeInput() {
    return this._egressFlowWindowSize;
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

  // initiator - computed: false, optional: true, required: false
  private _initiator?: string; 
  public get initiator() {
    return this.getStringAttribute('initiator');
  }
  public set initiator(value: string) {
    this._initiator = value;
  }
  public resetInitiator() {
    this._initiator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initiatorInput() {
    return this._initiator;
  }

  // queue_dead_msg_queue - computed: false, optional: true, required: false
  private _queueDeadMsgQueue?: string; 
  public get queueDeadMsgQueue() {
    return this.getStringAttribute('queue_dead_msg_queue');
  }
  public set queueDeadMsgQueue(value: string) {
    this._queueDeadMsgQueue = value;
  }
  public resetQueueDeadMsgQueue() {
    this._queueDeadMsgQueue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueDeadMsgQueueInput() {
    return this._queueDeadMsgQueue;
  }

  // queue_event_spool_usage_threshold - computed: false, optional: true, required: false
  private _queueEventSpoolUsageThreshold = new SolacebrokerDmrClusterLinkQueueEventSpoolUsageThresholdOutputReference(this, "queue_event_spool_usage_threshold");
  public get queueEventSpoolUsageThreshold() {
    return this._queueEventSpoolUsageThreshold;
  }
  public putQueueEventSpoolUsageThreshold(value: SolacebrokerDmrClusterLinkQueueEventSpoolUsageThreshold) {
    this._queueEventSpoolUsageThreshold.internalValue = value;
  }
  public resetQueueEventSpoolUsageThreshold() {
    this._queueEventSpoolUsageThreshold.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueEventSpoolUsageThresholdInput() {
    return this._queueEventSpoolUsageThreshold.internalValue;
  }

  // queue_max_delivered_unacked_msgs_per_flow - computed: false, optional: true, required: false
  private _queueMaxDeliveredUnackedMsgsPerFlow?: number; 
  public get queueMaxDeliveredUnackedMsgsPerFlow() {
    return this.getNumberAttribute('queue_max_delivered_unacked_msgs_per_flow');
  }
  public set queueMaxDeliveredUnackedMsgsPerFlow(value: number) {
    this._queueMaxDeliveredUnackedMsgsPerFlow = value;
  }
  public resetQueueMaxDeliveredUnackedMsgsPerFlow() {
    this._queueMaxDeliveredUnackedMsgsPerFlow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueMaxDeliveredUnackedMsgsPerFlowInput() {
    return this._queueMaxDeliveredUnackedMsgsPerFlow;
  }

  // queue_max_msg_spool_usage - computed: false, optional: true, required: false
  private _queueMaxMsgSpoolUsage?: number; 
  public get queueMaxMsgSpoolUsage() {
    return this.getNumberAttribute('queue_max_msg_spool_usage');
  }
  public set queueMaxMsgSpoolUsage(value: number) {
    this._queueMaxMsgSpoolUsage = value;
  }
  public resetQueueMaxMsgSpoolUsage() {
    this._queueMaxMsgSpoolUsage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueMaxMsgSpoolUsageInput() {
    return this._queueMaxMsgSpoolUsage;
  }

  // queue_max_redelivery_count - computed: false, optional: true, required: false
  private _queueMaxRedeliveryCount?: number; 
  public get queueMaxRedeliveryCount() {
    return this.getNumberAttribute('queue_max_redelivery_count');
  }
  public set queueMaxRedeliveryCount(value: number) {
    this._queueMaxRedeliveryCount = value;
  }
  public resetQueueMaxRedeliveryCount() {
    this._queueMaxRedeliveryCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueMaxRedeliveryCountInput() {
    return this._queueMaxRedeliveryCount;
  }

  // queue_max_ttl - computed: false, optional: true, required: false
  private _queueMaxTtl?: number; 
  public get queueMaxTtl() {
    return this.getNumberAttribute('queue_max_ttl');
  }
  public set queueMaxTtl(value: number) {
    this._queueMaxTtl = value;
  }
  public resetQueueMaxTtl() {
    this._queueMaxTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueMaxTtlInput() {
    return this._queueMaxTtl;
  }

  // queue_reject_msg_to_sender_on_discard_behavior - computed: false, optional: true, required: false
  private _queueRejectMsgToSenderOnDiscardBehavior?: string; 
  public get queueRejectMsgToSenderOnDiscardBehavior() {
    return this.getStringAttribute('queue_reject_msg_to_sender_on_discard_behavior');
  }
  public set queueRejectMsgToSenderOnDiscardBehavior(value: string) {
    this._queueRejectMsgToSenderOnDiscardBehavior = value;
  }
  public resetQueueRejectMsgToSenderOnDiscardBehavior() {
    this._queueRejectMsgToSenderOnDiscardBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueRejectMsgToSenderOnDiscardBehaviorInput() {
    return this._queueRejectMsgToSenderOnDiscardBehavior;
  }

  // queue_respect_dmq_eligible_enabled - computed: false, optional: true, required: false
  private _queueRespectDmqEligibleEnabled?: boolean | cdktf.IResolvable; 
  public get queueRespectDmqEligibleEnabled() {
    return this.getBooleanAttribute('queue_respect_dmq_eligible_enabled');
  }
  public set queueRespectDmqEligibleEnabled(value: boolean | cdktf.IResolvable) {
    this._queueRespectDmqEligibleEnabled = value;
  }
  public resetQueueRespectDmqEligibleEnabled() {
    this._queueRespectDmqEligibleEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueRespectDmqEligibleEnabledInput() {
    return this._queueRespectDmqEligibleEnabled;
  }

  // queue_respect_ttl_enabled - computed: false, optional: true, required: false
  private _queueRespectTtlEnabled?: boolean | cdktf.IResolvable; 
  public get queueRespectTtlEnabled() {
    return this.getBooleanAttribute('queue_respect_ttl_enabled');
  }
  public set queueRespectTtlEnabled(value: boolean | cdktf.IResolvable) {
    this._queueRespectTtlEnabled = value;
  }
  public resetQueueRespectTtlEnabled() {
    this._queueRespectTtlEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueRespectTtlEnabledInput() {
    return this._queueRespectTtlEnabled;
  }

  // remote_node_name - computed: false, optional: false, required: true
  private _remoteNodeName?: string; 
  public get remoteNodeName() {
    return this.getStringAttribute('remote_node_name');
  }
  public set remoteNodeName(value: string) {
    this._remoteNodeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteNodeNameInput() {
    return this._remoteNodeName;
  }

  // span - computed: false, optional: true, required: false
  private _span?: string; 
  public get span() {
    return this.getStringAttribute('span');
  }
  public set span(value: string) {
    this._span = value;
  }
  public resetSpan() {
    this._span = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spanInput() {
    return this._span;
  }

  // transport_compressed_enabled - computed: false, optional: true, required: false
  private _transportCompressedEnabled?: boolean | cdktf.IResolvable; 
  public get transportCompressedEnabled() {
    return this.getBooleanAttribute('transport_compressed_enabled');
  }
  public set transportCompressedEnabled(value: boolean | cdktf.IResolvable) {
    this._transportCompressedEnabled = value;
  }
  public resetTransportCompressedEnabled() {
    this._transportCompressedEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportCompressedEnabledInput() {
    return this._transportCompressedEnabled;
  }

  // transport_tls_enabled - computed: false, optional: true, required: false
  private _transportTlsEnabled?: boolean | cdktf.IResolvable; 
  public get transportTlsEnabled() {
    return this.getBooleanAttribute('transport_tls_enabled');
  }
  public set transportTlsEnabled(value: boolean | cdktf.IResolvable) {
    this._transportTlsEnabled = value;
  }
  public resetTransportTlsEnabled() {
    this._transportTlsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportTlsEnabledInput() {
    return this._transportTlsEnabled;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      authentication_basic_password: cdktf.stringToTerraform(this._authenticationBasicPassword),
      authentication_scheme: cdktf.stringToTerraform(this._authenticationScheme),
      client_profile_queue_control1_max_depth: cdktf.numberToTerraform(this._clientProfileQueueControl1MaxDepth),
      client_profile_queue_control1_min_msg_burst: cdktf.numberToTerraform(this._clientProfileQueueControl1MinMsgBurst),
      client_profile_queue_direct1_max_depth: cdktf.numberToTerraform(this._clientProfileQueueDirect1MaxDepth),
      client_profile_queue_direct1_min_msg_burst: cdktf.numberToTerraform(this._clientProfileQueueDirect1MinMsgBurst),
      client_profile_queue_direct2_max_depth: cdktf.numberToTerraform(this._clientProfileQueueDirect2MaxDepth),
      client_profile_queue_direct2_min_msg_burst: cdktf.numberToTerraform(this._clientProfileQueueDirect2MinMsgBurst),
      client_profile_queue_direct3_max_depth: cdktf.numberToTerraform(this._clientProfileQueueDirect3MaxDepth),
      client_profile_queue_direct3_min_msg_burst: cdktf.numberToTerraform(this._clientProfileQueueDirect3MinMsgBurst),
      client_profile_queue_guaranteed1_max_depth: cdktf.numberToTerraform(this._clientProfileQueueGuaranteed1MaxDepth),
      client_profile_queue_guaranteed1_min_msg_burst: cdktf.numberToTerraform(this._clientProfileQueueGuaranteed1MinMsgBurst),
      client_profile_tcp_congestion_window_size: cdktf.numberToTerraform(this._clientProfileTcpCongestionWindowSize),
      client_profile_tcp_keepalive_count: cdktf.numberToTerraform(this._clientProfileTcpKeepaliveCount),
      client_profile_tcp_keepalive_idle_time: cdktf.numberToTerraform(this._clientProfileTcpKeepaliveIdleTime),
      client_profile_tcp_keepalive_interval: cdktf.numberToTerraform(this._clientProfileTcpKeepaliveInterval),
      client_profile_tcp_max_segment_size: cdktf.numberToTerraform(this._clientProfileTcpMaxSegmentSize),
      client_profile_tcp_max_window_size: cdktf.numberToTerraform(this._clientProfileTcpMaxWindowSize),
      client_profile_tcp_slow_start_after_idle_enabled: cdktf.booleanToTerraform(this._clientProfileTcpSlowStartAfterIdleEnabled),
      connection_retry_count: cdktf.numberToTerraform(this._connectionRetryCount),
      connection_retry_delay: cdktf.numberToTerraform(this._connectionRetryDelay),
      dmr_cluster_name: cdktf.stringToTerraform(this._dmrClusterName),
      egress_flow_window_size: cdktf.numberToTerraform(this._egressFlowWindowSize),
      enabled: cdktf.booleanToTerraform(this._enabled),
      initiator: cdktf.stringToTerraform(this._initiator),
      queue_dead_msg_queue: cdktf.stringToTerraform(this._queueDeadMsgQueue),
      queue_event_spool_usage_threshold: solacebrokerDmrClusterLinkQueueEventSpoolUsageThresholdToTerraform(this._queueEventSpoolUsageThreshold.internalValue),
      queue_max_delivered_unacked_msgs_per_flow: cdktf.numberToTerraform(this._queueMaxDeliveredUnackedMsgsPerFlow),
      queue_max_msg_spool_usage: cdktf.numberToTerraform(this._queueMaxMsgSpoolUsage),
      queue_max_redelivery_count: cdktf.numberToTerraform(this._queueMaxRedeliveryCount),
      queue_max_ttl: cdktf.numberToTerraform(this._queueMaxTtl),
      queue_reject_msg_to_sender_on_discard_behavior: cdktf.stringToTerraform(this._queueRejectMsgToSenderOnDiscardBehavior),
      queue_respect_dmq_eligible_enabled: cdktf.booleanToTerraform(this._queueRespectDmqEligibleEnabled),
      queue_respect_ttl_enabled: cdktf.booleanToTerraform(this._queueRespectTtlEnabled),
      remote_node_name: cdktf.stringToTerraform(this._remoteNodeName),
      span: cdktf.stringToTerraform(this._span),
      transport_compressed_enabled: cdktf.booleanToTerraform(this._transportCompressedEnabled),
      transport_tls_enabled: cdktf.booleanToTerraform(this._transportTlsEnabled),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authentication_basic_password: {
        value: cdktf.stringToHclTerraform(this._authenticationBasicPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authentication_scheme: {
        value: cdktf.stringToHclTerraform(this._authenticationScheme),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_profile_queue_control1_max_depth: {
        value: cdktf.numberToHclTerraform(this._clientProfileQueueControl1MaxDepth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      client_profile_queue_control1_min_msg_burst: {
        value: cdktf.numberToHclTerraform(this._clientProfileQueueControl1MinMsgBurst),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      client_profile_queue_direct1_max_depth: {
        value: cdktf.numberToHclTerraform(this._clientProfileQueueDirect1MaxDepth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      client_profile_queue_direct1_min_msg_burst: {
        value: cdktf.numberToHclTerraform(this._clientProfileQueueDirect1MinMsgBurst),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      client_profile_queue_direct2_max_depth: {
        value: cdktf.numberToHclTerraform(this._clientProfileQueueDirect2MaxDepth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      client_profile_queue_direct2_min_msg_burst: {
        value: cdktf.numberToHclTerraform(this._clientProfileQueueDirect2MinMsgBurst),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      client_profile_queue_direct3_max_depth: {
        value: cdktf.numberToHclTerraform(this._clientProfileQueueDirect3MaxDepth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      client_profile_queue_direct3_min_msg_burst: {
        value: cdktf.numberToHclTerraform(this._clientProfileQueueDirect3MinMsgBurst),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      client_profile_queue_guaranteed1_max_depth: {
        value: cdktf.numberToHclTerraform(this._clientProfileQueueGuaranteed1MaxDepth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      client_profile_queue_guaranteed1_min_msg_burst: {
        value: cdktf.numberToHclTerraform(this._clientProfileQueueGuaranteed1MinMsgBurst),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      client_profile_tcp_congestion_window_size: {
        value: cdktf.numberToHclTerraform(this._clientProfileTcpCongestionWindowSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      client_profile_tcp_keepalive_count: {
        value: cdktf.numberToHclTerraform(this._clientProfileTcpKeepaliveCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      client_profile_tcp_keepalive_idle_time: {
        value: cdktf.numberToHclTerraform(this._clientProfileTcpKeepaliveIdleTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      client_profile_tcp_keepalive_interval: {
        value: cdktf.numberToHclTerraform(this._clientProfileTcpKeepaliveInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      client_profile_tcp_max_segment_size: {
        value: cdktf.numberToHclTerraform(this._clientProfileTcpMaxSegmentSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      client_profile_tcp_max_window_size: {
        value: cdktf.numberToHclTerraform(this._clientProfileTcpMaxWindowSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      client_profile_tcp_slow_start_after_idle_enabled: {
        value: cdktf.booleanToHclTerraform(this._clientProfileTcpSlowStartAfterIdleEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      connection_retry_count: {
        value: cdktf.numberToHclTerraform(this._connectionRetryCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      connection_retry_delay: {
        value: cdktf.numberToHclTerraform(this._connectionRetryDelay),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dmr_cluster_name: {
        value: cdktf.stringToHclTerraform(this._dmrClusterName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      egress_flow_window_size: {
        value: cdktf.numberToHclTerraform(this._egressFlowWindowSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      initiator: {
        value: cdktf.stringToHclTerraform(this._initiator),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      queue_dead_msg_queue: {
        value: cdktf.stringToHclTerraform(this._queueDeadMsgQueue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      queue_event_spool_usage_threshold: {
        value: solacebrokerDmrClusterLinkQueueEventSpoolUsageThresholdToHclTerraform(this._queueEventSpoolUsageThreshold.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SolacebrokerDmrClusterLinkQueueEventSpoolUsageThreshold",
      },
      queue_max_delivered_unacked_msgs_per_flow: {
        value: cdktf.numberToHclTerraform(this._queueMaxDeliveredUnackedMsgsPerFlow),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      queue_max_msg_spool_usage: {
        value: cdktf.numberToHclTerraform(this._queueMaxMsgSpoolUsage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      queue_max_redelivery_count: {
        value: cdktf.numberToHclTerraform(this._queueMaxRedeliveryCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      queue_max_ttl: {
        value: cdktf.numberToHclTerraform(this._queueMaxTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      queue_reject_msg_to_sender_on_discard_behavior: {
        value: cdktf.stringToHclTerraform(this._queueRejectMsgToSenderOnDiscardBehavior),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      queue_respect_dmq_eligible_enabled: {
        value: cdktf.booleanToHclTerraform(this._queueRespectDmqEligibleEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      queue_respect_ttl_enabled: {
        value: cdktf.booleanToHclTerraform(this._queueRespectTtlEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      remote_node_name: {
        value: cdktf.stringToHclTerraform(this._remoteNodeName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      span: {
        value: cdktf.stringToHclTerraform(this._span),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transport_compressed_enabled: {
        value: cdktf.booleanToHclTerraform(this._transportCompressedEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      transport_tls_enabled: {
        value: cdktf.booleanToHclTerraform(this._transportTlsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
