// https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_topic_endpoint
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SolacebrokerMsgVpnTopicEndpointConfig extends cdktf.TerraformMetaArguments {
  /**
  * The access type for delivering messages to consumer flows bound to the Topic Endpoint.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as egress_enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `"exclusive"`. The allowed values and their meaning are:
  * 
  * <pre>
  * "exclusive" - Exclusive delivery of messages to the first bound consumer flow.
  * "non-exclusive" - Non-exclusive delivery of messages to bound consumer flows in a round-robin fashion.
  * </pre>
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_topic_endpoint#access_type SolacebrokerMsgVpnTopicEndpoint#access_type}
  */
  readonly accessType?: string;
  /**
  * Enable or disable the propagation of consumer acknowledgments (ACKs) received on the active replication Message VPN to the standby replication Message VPN.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_topic_endpoint#consumer_ack_propagation_enabled SolacebrokerMsgVpnTopicEndpoint#consumer_ack_propagation_enabled}
  */
  readonly consumerAckPropagationEnabled?: boolean | cdktf.IResolvable;
  /**
  * The name of the Dead Message Queue (DMQ) used by the Topic Endpoint.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `"#DEAD_MSG_QUEUE"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_topic_endpoint#dead_msg_queue SolacebrokerMsgVpnTopicEndpoint#dead_msg_queue}
  */
  readonly deadMsgQueue?: string;
  /**
  * Enable or disable the ability for client applications to query the message delivery count of messages received from the Topic Endpoint. This is a controlled availability feature. Please contact support to find out if this feature is supported for your use case.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`. Available since SEMP API version 2.19.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_topic_endpoint#delivery_count_enabled SolacebrokerMsgVpnTopicEndpoint#delivery_count_enabled}
  */
  readonly deliveryCountEnabled?: boolean | cdktf.IResolvable;
  /**
  * The delay, in seconds, to apply to messages arriving on the Topic Endpoint before the messages are eligible for delivery.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `0`. Available since SEMP API version 2.22.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_topic_endpoint#delivery_delay SolacebrokerMsgVpnTopicEndpoint#delivery_delay}
  */
  readonly deliveryDelay?: number;
  /**
  * Enable or disable the transmission of messages from the Topic Endpoint.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_topic_endpoint#egress_enabled SolacebrokerMsgVpnTopicEndpoint#egress_enabled}
  */
  readonly egressEnabled?: boolean | cdktf.IResolvable;
  /**
  * The thresholds for the Topic Endpoint consumer flows event, relative to `max_bind_count`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_topic_endpoint#event_bind_count_threshold SolacebrokerMsgVpnTopicEndpoint#event_bind_count_threshold}
  */
  readonly eventBindCountThreshold?: SolacebrokerMsgVpnTopicEndpointEventBindCountThreshold;
  /**
  * The thresholds for the maximum allowed number of any priority messages queued in the Topic Endpoint event, relative to `reject_low_priority_msg_limit`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_topic_endpoint#event_reject_low_priority_msg_limit_threshold SolacebrokerMsgVpnTopicEndpoint#event_reject_low_priority_msg_limit_threshold}
  */
  readonly eventRejectLowPriorityMsgLimitThreshold?: SolacebrokerMsgVpnTopicEndpointEventRejectLowPriorityMsgLimitThreshold;
  /**
  * The thresholds for the message spool usage event of the Topic Endpoint, relative to `max_spool_usage`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_topic_endpoint#event_spool_usage_threshold SolacebrokerMsgVpnTopicEndpoint#event_spool_usage_threshold}
  */
  readonly eventSpoolUsageThreshold?: SolacebrokerMsgVpnTopicEndpointEventSpoolUsageThreshold;
  /**
  * Enable or disable the reception of messages to the Topic Endpoint.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_topic_endpoint#ingress_enabled SolacebrokerMsgVpnTopicEndpoint#ingress_enabled}
  */
  readonly ingressEnabled?: boolean | cdktf.IResolvable;
  /**
  * The maximum number of consumer flows that can bind to the Topic Endpoint.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_topic_endpoint#max_bind_count SolacebrokerMsgVpnTopicEndpoint#max_bind_count}
  */
  readonly maxBindCount?: number;
  /**
  * The maximum number of messages delivered but not acknowledged per flow for the Topic Endpoint.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `10000`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_topic_endpoint#max_delivered_unacked_msgs_per_flow SolacebrokerMsgVpnTopicEndpoint#max_delivered_unacked_msgs_per_flow}
  */
  readonly maxDeliveredUnackedMsgsPerFlow?: number;
  /**
  * The maximum message size allowed in the Topic Endpoint, in bytes (B).
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `10000000`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_topic_endpoint#max_msg_size SolacebrokerMsgVpnTopicEndpoint#max_msg_size}
  */
  readonly maxMsgSize?: number;
  /**
  * The maximum number of times the Topic Endpoint will attempt redelivery of a message prior to it being discarded or moved to the DMQ. A value of 0 means to retry forever.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_topic_endpoint#max_redelivery_count SolacebrokerMsgVpnTopicEndpoint#max_redelivery_count}
  */
  readonly maxRedeliveryCount?: number;
  /**
  * The maximum message spool usage allowed by the Topic Endpoint, in megabytes (MB). A value of 0 only allows spooling of the last message received and disables quota checking.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `5000`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_topic_endpoint#max_spool_usage SolacebrokerMsgVpnTopicEndpoint#max_spool_usage}
  */
  readonly maxSpoolUsage?: number;
  /**
  * The maximum time in seconds a message can stay in the Topic Endpoint when `respect_ttl_enabled` is `"true"`. A message expires when the lesser of the sender assigned time-to-live (TTL) in the message and the `max_ttl` configured for the Topic Endpoint, is exceeded. A value of 0 disables expiry.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_topic_endpoint#max_ttl SolacebrokerMsgVpnTopicEndpoint#max_ttl}
  */
  readonly maxTtl?: number;
  /**
  * The name of the Message VPN.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_topic_endpoint#msg_vpn_name SolacebrokerMsgVpnTopicEndpoint#msg_vpn_name}
  */
  readonly msgVpnName: string;
  /**
  * The Client Username that owns the Topic Endpoint and has permission equivalent to `"delete"`.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as egress_enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_topic_endpoint#owner SolacebrokerMsgVpnTopicEndpoint#owner}
  */
  readonly owner?: string;
  /**
  * The permission level for all consumers of the Topic Endpoint, excluding the owner.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as egress_enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `"no-access"`. The allowed values and their meaning are:
  * 
  * <pre>
  * "no-access" - Disallows all access.
  * "read-only" - Read-only access to the messages.
  * "consume" - Consume (read and remove) messages.
  * "modify-topic" - Consume messages or modify the topic/selector.
  * "delete" - Consume messages, modify the topic/selector or delete the Client created endpoint altogether.
  * </pre>
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_topic_endpoint#permission SolacebrokerMsgVpnTopicEndpoint#permission}
  */
  readonly permission?: string;
  /**
  * Enable or disable a message redelivery delay. When false, messages are redelivered as-soon-as-possible.  When true, messages are redelivered according to the initial, max and multiplier.  This should only be enabled when redelivery is enabled.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as egress_enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`. Available since SEMP API version 2.33.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_topic_endpoint#redelivery_delay_enabled SolacebrokerMsgVpnTopicEndpoint#redelivery_delay_enabled}
  */
  readonly redeliveryDelayEnabled?: boolean | cdktf.IResolvable;
  /**
  * The delay to be used between the first 2 redelivery attempts.  This value is in milliseconds.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as egress_enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `1000`. Available since SEMP API version 2.33.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_topic_endpoint#redelivery_delay_initial_interval SolacebrokerMsgVpnTopicEndpoint#redelivery_delay_initial_interval}
  */
  readonly redeliveryDelayInitialInterval?: number;
  /**
  * The maximum delay to be used between any 2 redelivery attempts.  This value is in milliseconds.  Due to technical limitations, some redelivery attempt delays may slightly exceed this value.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as egress_enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `64000`. Available since SEMP API version 2.33.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_topic_endpoint#redelivery_delay_max_interval SolacebrokerMsgVpnTopicEndpoint#redelivery_delay_max_interval}
  */
  readonly redeliveryDelayMaxInterval?: number;
  /**
  * The amount each delay interval is multiplied by after each failed delivery attempt.  This number is in a fixed-point decimal format in which you must divide by 100 to get the floating point value. For example, a value of 125 would cause the delay to be multiplied by 1.25.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as egress_enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `200`. Available since SEMP API version 2.33.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_topic_endpoint#redelivery_delay_multiplier SolacebrokerMsgVpnTopicEndpoint#redelivery_delay_multiplier}
  */
  readonly redeliveryDelayMultiplier?: number;
  /**
  * Enable or disable message redelivery. When enabled, the number of redelivery attempts is controlled by max_redelivery_count. When disabled, the message will never be delivered from the topic-endpoint more than once.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `true`. Available since SEMP API version 2.18.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_topic_endpoint#redelivery_enabled SolacebrokerMsgVpnTopicEndpoint#redelivery_enabled}
  */
  readonly redeliveryEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enable or disable the checking of low priority messages against the `reject_low_priority_msg_limit`. This may only be enabled if `reject_msg_to_sender_on_discard_behavior` does not have a value of `"never"`.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_topic_endpoint#reject_low_priority_msg_enabled SolacebrokerMsgVpnTopicEndpoint#reject_low_priority_msg_enabled}
  */
  readonly rejectLowPriorityMsgEnabled?: boolean | cdktf.IResolvable;
  /**
  * The number of messages of any priority in the Topic Endpoint above which low priority messages are not admitted but higher priority messages are allowed.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_topic_endpoint#reject_low_priority_msg_limit SolacebrokerMsgVpnTopicEndpoint#reject_low_priority_msg_limit}
  */
  readonly rejectLowPriorityMsgLimit?: number;
  /**
  * Determines when to return negative acknowledgments (NACKs) to sending clients on message discards. Note that NACKs cause the message to not be delivered to any destination and Transacted Session commits to fail.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as reject_low_priority_msg_enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `"never"`. The allowed values and their meaning are:
  * 
  * <pre>
  * "never" - Silently discard messages.
  * "when-topic-endpoint-enabled" - NACK each message discard back to the client, except messages that are discarded because an endpoint is administratively disabled.
  * "always" - NACK each message discard back to the client, including messages that are discarded because an endpoint is administratively disabled.
  * </pre>
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_topic_endpoint#reject_msg_to_sender_on_discard_behavior SolacebrokerMsgVpnTopicEndpoint#reject_msg_to_sender_on_discard_behavior}
  */
  readonly rejectMsgToSenderOnDiscardBehavior?: string;
  /**
  * Enable or disable the respecting of message priority. When enabled, messages contained in the Topic Endpoint are delivered in priority order, from 9 (highest) to 0 (lowest).
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as egress_enabled and ingress_enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`. Available since SEMP API version 2.8.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_topic_endpoint#respect_msg_priority_enabled SolacebrokerMsgVpnTopicEndpoint#respect_msg_priority_enabled}
  */
  readonly respectMsgPriorityEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enable or disable the respecting of the time-to-live (TTL) for messages in the Topic Endpoint. When enabled, expired messages are discarded or moved to the DMQ.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_topic_endpoint#respect_ttl_enabled SolacebrokerMsgVpnTopicEndpoint#respect_ttl_enabled}
  */
  readonly respectTtlEnabled?: boolean | cdktf.IResolvable;
  /**
  * The name of the Topic Endpoint.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_topic_endpoint#topic_endpoint_name SolacebrokerMsgVpnTopicEndpoint#topic_endpoint_name}
  */
  readonly topicEndpointName: string;
}
export interface SolacebrokerMsgVpnTopicEndpointEventBindCountThreshold {
  /**
  * The clear threshold for the value of this counter as a percentage of its maximum value. Falling below this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `60`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_topic_endpoint#clear_percent SolacebrokerMsgVpnTopicEndpoint#clear_percent}
  */
  readonly clearPercent?: number;
  /**
  * The clear threshold for the absolute value of this counter. Falling below this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default is not applicable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_topic_endpoint#clear_value SolacebrokerMsgVpnTopicEndpoint#clear_value}
  */
  readonly clearValue?: number;
  /**
  * The set threshold for the value of this counter as a percentage of its maximum value. Exceeding this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `80`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_topic_endpoint#set_percent SolacebrokerMsgVpnTopicEndpoint#set_percent}
  */
  readonly setPercent?: number;
  /**
  * The set threshold for the absolute value of this counter. Exceeding this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default is not applicable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_topic_endpoint#set_value SolacebrokerMsgVpnTopicEndpoint#set_value}
  */
  readonly setValue?: number;
}

export function solacebrokerMsgVpnTopicEndpointEventBindCountThresholdToTerraform(struct?: SolacebrokerMsgVpnTopicEndpointEventBindCountThreshold | cdktf.IResolvable): any {
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


export function solacebrokerMsgVpnTopicEndpointEventBindCountThresholdToHclTerraform(struct?: SolacebrokerMsgVpnTopicEndpointEventBindCountThreshold | cdktf.IResolvable): any {
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

export class SolacebrokerMsgVpnTopicEndpointEventBindCountThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SolacebrokerMsgVpnTopicEndpointEventBindCountThreshold | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SolacebrokerMsgVpnTopicEndpointEventBindCountThreshold | cdktf.IResolvable | undefined) {
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
export interface SolacebrokerMsgVpnTopicEndpointEventRejectLowPriorityMsgLimitThreshold {
  /**
  * The clear threshold for the value of this counter as a percentage of its maximum value. Falling below this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `60`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_topic_endpoint#clear_percent SolacebrokerMsgVpnTopicEndpoint#clear_percent}
  */
  readonly clearPercent?: number;
  /**
  * The clear threshold for the absolute value of this counter. Falling below this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default is not applicable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_topic_endpoint#clear_value SolacebrokerMsgVpnTopicEndpoint#clear_value}
  */
  readonly clearValue?: number;
  /**
  * The set threshold for the value of this counter as a percentage of its maximum value. Exceeding this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `80`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_topic_endpoint#set_percent SolacebrokerMsgVpnTopicEndpoint#set_percent}
  */
  readonly setPercent?: number;
  /**
  * The set threshold for the absolute value of this counter. Exceeding this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default is not applicable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_topic_endpoint#set_value SolacebrokerMsgVpnTopicEndpoint#set_value}
  */
  readonly setValue?: number;
}

export function solacebrokerMsgVpnTopicEndpointEventRejectLowPriorityMsgLimitThresholdToTerraform(struct?: SolacebrokerMsgVpnTopicEndpointEventRejectLowPriorityMsgLimitThreshold | cdktf.IResolvable): any {
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


export function solacebrokerMsgVpnTopicEndpointEventRejectLowPriorityMsgLimitThresholdToHclTerraform(struct?: SolacebrokerMsgVpnTopicEndpointEventRejectLowPriorityMsgLimitThreshold | cdktf.IResolvable): any {
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

export class SolacebrokerMsgVpnTopicEndpointEventRejectLowPriorityMsgLimitThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SolacebrokerMsgVpnTopicEndpointEventRejectLowPriorityMsgLimitThreshold | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SolacebrokerMsgVpnTopicEndpointEventRejectLowPriorityMsgLimitThreshold | cdktf.IResolvable | undefined) {
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
export interface SolacebrokerMsgVpnTopicEndpointEventSpoolUsageThreshold {
  /**
  * The clear threshold for the value of this counter as a percentage of its maximum value. Falling below this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `18`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_topic_endpoint#clear_percent SolacebrokerMsgVpnTopicEndpoint#clear_percent}
  */
  readonly clearPercent?: number;
  /**
  * The clear threshold for the absolute value of this counter. Falling below this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default is not applicable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_topic_endpoint#clear_value SolacebrokerMsgVpnTopicEndpoint#clear_value}
  */
  readonly clearValue?: number;
  /**
  * The set threshold for the value of this counter as a percentage of its maximum value. Exceeding this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `25`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_topic_endpoint#set_percent SolacebrokerMsgVpnTopicEndpoint#set_percent}
  */
  readonly setPercent?: number;
  /**
  * The set threshold for the absolute value of this counter. Exceeding this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default is not applicable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_topic_endpoint#set_value SolacebrokerMsgVpnTopicEndpoint#set_value}
  */
  readonly setValue?: number;
}

export function solacebrokerMsgVpnTopicEndpointEventSpoolUsageThresholdToTerraform(struct?: SolacebrokerMsgVpnTopicEndpointEventSpoolUsageThreshold | cdktf.IResolvable): any {
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


export function solacebrokerMsgVpnTopicEndpointEventSpoolUsageThresholdToHclTerraform(struct?: SolacebrokerMsgVpnTopicEndpointEventSpoolUsageThreshold | cdktf.IResolvable): any {
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

export class SolacebrokerMsgVpnTopicEndpointEventSpoolUsageThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SolacebrokerMsgVpnTopicEndpointEventSpoolUsageThreshold | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SolacebrokerMsgVpnTopicEndpointEventSpoolUsageThreshold | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_topic_endpoint solacebroker_msg_vpn_topic_endpoint}
*/
export class SolacebrokerMsgVpnTopicEndpoint extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "solacebroker_msg_vpn_topic_endpoint";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SolacebrokerMsgVpnTopicEndpoint resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SolacebrokerMsgVpnTopicEndpoint to import
  * @param importFromId The id of the existing SolacebrokerMsgVpnTopicEndpoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_topic_endpoint#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SolacebrokerMsgVpnTopicEndpoint to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "solacebroker_msg_vpn_topic_endpoint", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_topic_endpoint solacebroker_msg_vpn_topic_endpoint} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SolacebrokerMsgVpnTopicEndpointConfig
  */
  public constructor(scope: Construct, id: string, config: SolacebrokerMsgVpnTopicEndpointConfig) {
    super(scope, id, {
      terraformResourceType: 'solacebroker_msg_vpn_topic_endpoint',
      terraformGeneratorMetadata: {
        providerName: 'solacebrokerappliance',
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
    this._accessType = config.accessType;
    this._consumerAckPropagationEnabled = config.consumerAckPropagationEnabled;
    this._deadMsgQueue = config.deadMsgQueue;
    this._deliveryCountEnabled = config.deliveryCountEnabled;
    this._deliveryDelay = config.deliveryDelay;
    this._egressEnabled = config.egressEnabled;
    this._eventBindCountThreshold.internalValue = config.eventBindCountThreshold;
    this._eventRejectLowPriorityMsgLimitThreshold.internalValue = config.eventRejectLowPriorityMsgLimitThreshold;
    this._eventSpoolUsageThreshold.internalValue = config.eventSpoolUsageThreshold;
    this._ingressEnabled = config.ingressEnabled;
    this._maxBindCount = config.maxBindCount;
    this._maxDeliveredUnackedMsgsPerFlow = config.maxDeliveredUnackedMsgsPerFlow;
    this._maxMsgSize = config.maxMsgSize;
    this._maxRedeliveryCount = config.maxRedeliveryCount;
    this._maxSpoolUsage = config.maxSpoolUsage;
    this._maxTtl = config.maxTtl;
    this._msgVpnName = config.msgVpnName;
    this._owner = config.owner;
    this._permission = config.permission;
    this._redeliveryDelayEnabled = config.redeliveryDelayEnabled;
    this._redeliveryDelayInitialInterval = config.redeliveryDelayInitialInterval;
    this._redeliveryDelayMaxInterval = config.redeliveryDelayMaxInterval;
    this._redeliveryDelayMultiplier = config.redeliveryDelayMultiplier;
    this._redeliveryEnabled = config.redeliveryEnabled;
    this._rejectLowPriorityMsgEnabled = config.rejectLowPriorityMsgEnabled;
    this._rejectLowPriorityMsgLimit = config.rejectLowPriorityMsgLimit;
    this._rejectMsgToSenderOnDiscardBehavior = config.rejectMsgToSenderOnDiscardBehavior;
    this._respectMsgPriorityEnabled = config.respectMsgPriorityEnabled;
    this._respectTtlEnabled = config.respectTtlEnabled;
    this._topicEndpointName = config.topicEndpointName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_type - computed: false, optional: true, required: false
  private _accessType?: string; 
  public get accessType() {
    return this.getStringAttribute('access_type');
  }
  public set accessType(value: string) {
    this._accessType = value;
  }
  public resetAccessType() {
    this._accessType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTypeInput() {
    return this._accessType;
  }

  // consumer_ack_propagation_enabled - computed: false, optional: true, required: false
  private _consumerAckPropagationEnabled?: boolean | cdktf.IResolvable; 
  public get consumerAckPropagationEnabled() {
    return this.getBooleanAttribute('consumer_ack_propagation_enabled');
  }
  public set consumerAckPropagationEnabled(value: boolean | cdktf.IResolvable) {
    this._consumerAckPropagationEnabled = value;
  }
  public resetConsumerAckPropagationEnabled() {
    this._consumerAckPropagationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerAckPropagationEnabledInput() {
    return this._consumerAckPropagationEnabled;
  }

  // dead_msg_queue - computed: false, optional: true, required: false
  private _deadMsgQueue?: string; 
  public get deadMsgQueue() {
    return this.getStringAttribute('dead_msg_queue');
  }
  public set deadMsgQueue(value: string) {
    this._deadMsgQueue = value;
  }
  public resetDeadMsgQueue() {
    this._deadMsgQueue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deadMsgQueueInput() {
    return this._deadMsgQueue;
  }

  // delivery_count_enabled - computed: false, optional: true, required: false
  private _deliveryCountEnabled?: boolean | cdktf.IResolvable; 
  public get deliveryCountEnabled() {
    return this.getBooleanAttribute('delivery_count_enabled');
  }
  public set deliveryCountEnabled(value: boolean | cdktf.IResolvable) {
    this._deliveryCountEnabled = value;
  }
  public resetDeliveryCountEnabled() {
    this._deliveryCountEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deliveryCountEnabledInput() {
    return this._deliveryCountEnabled;
  }

  // delivery_delay - computed: false, optional: true, required: false
  private _deliveryDelay?: number; 
  public get deliveryDelay() {
    return this.getNumberAttribute('delivery_delay');
  }
  public set deliveryDelay(value: number) {
    this._deliveryDelay = value;
  }
  public resetDeliveryDelay() {
    this._deliveryDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deliveryDelayInput() {
    return this._deliveryDelay;
  }

  // egress_enabled - computed: false, optional: true, required: false
  private _egressEnabled?: boolean | cdktf.IResolvable; 
  public get egressEnabled() {
    return this.getBooleanAttribute('egress_enabled');
  }
  public set egressEnabled(value: boolean | cdktf.IResolvable) {
    this._egressEnabled = value;
  }
  public resetEgressEnabled() {
    this._egressEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressEnabledInput() {
    return this._egressEnabled;
  }

  // event_bind_count_threshold - computed: false, optional: true, required: false
  private _eventBindCountThreshold = new SolacebrokerMsgVpnTopicEndpointEventBindCountThresholdOutputReference(this, "event_bind_count_threshold");
  public get eventBindCountThreshold() {
    return this._eventBindCountThreshold;
  }
  public putEventBindCountThreshold(value: SolacebrokerMsgVpnTopicEndpointEventBindCountThreshold) {
    this._eventBindCountThreshold.internalValue = value;
  }
  public resetEventBindCountThreshold() {
    this._eventBindCountThreshold.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventBindCountThresholdInput() {
    return this._eventBindCountThreshold.internalValue;
  }

  // event_reject_low_priority_msg_limit_threshold - computed: false, optional: true, required: false
  private _eventRejectLowPriorityMsgLimitThreshold = new SolacebrokerMsgVpnTopicEndpointEventRejectLowPriorityMsgLimitThresholdOutputReference(this, "event_reject_low_priority_msg_limit_threshold");
  public get eventRejectLowPriorityMsgLimitThreshold() {
    return this._eventRejectLowPriorityMsgLimitThreshold;
  }
  public putEventRejectLowPriorityMsgLimitThreshold(value: SolacebrokerMsgVpnTopicEndpointEventRejectLowPriorityMsgLimitThreshold) {
    this._eventRejectLowPriorityMsgLimitThreshold.internalValue = value;
  }
  public resetEventRejectLowPriorityMsgLimitThreshold() {
    this._eventRejectLowPriorityMsgLimitThreshold.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventRejectLowPriorityMsgLimitThresholdInput() {
    return this._eventRejectLowPriorityMsgLimitThreshold.internalValue;
  }

  // event_spool_usage_threshold - computed: false, optional: true, required: false
  private _eventSpoolUsageThreshold = new SolacebrokerMsgVpnTopicEndpointEventSpoolUsageThresholdOutputReference(this, "event_spool_usage_threshold");
  public get eventSpoolUsageThreshold() {
    return this._eventSpoolUsageThreshold;
  }
  public putEventSpoolUsageThreshold(value: SolacebrokerMsgVpnTopicEndpointEventSpoolUsageThreshold) {
    this._eventSpoolUsageThreshold.internalValue = value;
  }
  public resetEventSpoolUsageThreshold() {
    this._eventSpoolUsageThreshold.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventSpoolUsageThresholdInput() {
    return this._eventSpoolUsageThreshold.internalValue;
  }

  // ingress_enabled - computed: false, optional: true, required: false
  private _ingressEnabled?: boolean | cdktf.IResolvable; 
  public get ingressEnabled() {
    return this.getBooleanAttribute('ingress_enabled');
  }
  public set ingressEnabled(value: boolean | cdktf.IResolvable) {
    this._ingressEnabled = value;
  }
  public resetIngressEnabled() {
    this._ingressEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressEnabledInput() {
    return this._ingressEnabled;
  }

  // max_bind_count - computed: false, optional: true, required: false
  private _maxBindCount?: number; 
  public get maxBindCount() {
    return this.getNumberAttribute('max_bind_count');
  }
  public set maxBindCount(value: number) {
    this._maxBindCount = value;
  }
  public resetMaxBindCount() {
    this._maxBindCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBindCountInput() {
    return this._maxBindCount;
  }

  // max_delivered_unacked_msgs_per_flow - computed: false, optional: true, required: false
  private _maxDeliveredUnackedMsgsPerFlow?: number; 
  public get maxDeliveredUnackedMsgsPerFlow() {
    return this.getNumberAttribute('max_delivered_unacked_msgs_per_flow');
  }
  public set maxDeliveredUnackedMsgsPerFlow(value: number) {
    this._maxDeliveredUnackedMsgsPerFlow = value;
  }
  public resetMaxDeliveredUnackedMsgsPerFlow() {
    this._maxDeliveredUnackedMsgsPerFlow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDeliveredUnackedMsgsPerFlowInput() {
    return this._maxDeliveredUnackedMsgsPerFlow;
  }

  // max_msg_size - computed: false, optional: true, required: false
  private _maxMsgSize?: number; 
  public get maxMsgSize() {
    return this.getNumberAttribute('max_msg_size');
  }
  public set maxMsgSize(value: number) {
    this._maxMsgSize = value;
  }
  public resetMaxMsgSize() {
    this._maxMsgSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxMsgSizeInput() {
    return this._maxMsgSize;
  }

  // max_redelivery_count - computed: false, optional: true, required: false
  private _maxRedeliveryCount?: number; 
  public get maxRedeliveryCount() {
    return this.getNumberAttribute('max_redelivery_count');
  }
  public set maxRedeliveryCount(value: number) {
    this._maxRedeliveryCount = value;
  }
  public resetMaxRedeliveryCount() {
    this._maxRedeliveryCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRedeliveryCountInput() {
    return this._maxRedeliveryCount;
  }

  // max_spool_usage - computed: false, optional: true, required: false
  private _maxSpoolUsage?: number; 
  public get maxSpoolUsage() {
    return this.getNumberAttribute('max_spool_usage');
  }
  public set maxSpoolUsage(value: number) {
    this._maxSpoolUsage = value;
  }
  public resetMaxSpoolUsage() {
    this._maxSpoolUsage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSpoolUsageInput() {
    return this._maxSpoolUsage;
  }

  // max_ttl - computed: false, optional: true, required: false
  private _maxTtl?: number; 
  public get maxTtl() {
    return this.getNumberAttribute('max_ttl');
  }
  public set maxTtl(value: number) {
    this._maxTtl = value;
  }
  public resetMaxTtl() {
    this._maxTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTtlInput() {
    return this._maxTtl;
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

  // owner - computed: false, optional: true, required: false
  private _owner?: string; 
  public get owner() {
    return this.getStringAttribute('owner');
  }
  public set owner(value: string) {
    this._owner = value;
  }
  public resetOwner() {
    this._owner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner;
  }

  // permission - computed: false, optional: true, required: false
  private _permission?: string; 
  public get permission() {
    return this.getStringAttribute('permission');
  }
  public set permission(value: string) {
    this._permission = value;
  }
  public resetPermission() {
    this._permission = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionInput() {
    return this._permission;
  }

  // redelivery_delay_enabled - computed: false, optional: true, required: false
  private _redeliveryDelayEnabled?: boolean | cdktf.IResolvable; 
  public get redeliveryDelayEnabled() {
    return this.getBooleanAttribute('redelivery_delay_enabled');
  }
  public set redeliveryDelayEnabled(value: boolean | cdktf.IResolvable) {
    this._redeliveryDelayEnabled = value;
  }
  public resetRedeliveryDelayEnabled() {
    this._redeliveryDelayEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redeliveryDelayEnabledInput() {
    return this._redeliveryDelayEnabled;
  }

  // redelivery_delay_initial_interval - computed: false, optional: true, required: false
  private _redeliveryDelayInitialInterval?: number; 
  public get redeliveryDelayInitialInterval() {
    return this.getNumberAttribute('redelivery_delay_initial_interval');
  }
  public set redeliveryDelayInitialInterval(value: number) {
    this._redeliveryDelayInitialInterval = value;
  }
  public resetRedeliveryDelayInitialInterval() {
    this._redeliveryDelayInitialInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redeliveryDelayInitialIntervalInput() {
    return this._redeliveryDelayInitialInterval;
  }

  // redelivery_delay_max_interval - computed: false, optional: true, required: false
  private _redeliveryDelayMaxInterval?: number; 
  public get redeliveryDelayMaxInterval() {
    return this.getNumberAttribute('redelivery_delay_max_interval');
  }
  public set redeliveryDelayMaxInterval(value: number) {
    this._redeliveryDelayMaxInterval = value;
  }
  public resetRedeliveryDelayMaxInterval() {
    this._redeliveryDelayMaxInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redeliveryDelayMaxIntervalInput() {
    return this._redeliveryDelayMaxInterval;
  }

  // redelivery_delay_multiplier - computed: false, optional: true, required: false
  private _redeliveryDelayMultiplier?: number; 
  public get redeliveryDelayMultiplier() {
    return this.getNumberAttribute('redelivery_delay_multiplier');
  }
  public set redeliveryDelayMultiplier(value: number) {
    this._redeliveryDelayMultiplier = value;
  }
  public resetRedeliveryDelayMultiplier() {
    this._redeliveryDelayMultiplier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redeliveryDelayMultiplierInput() {
    return this._redeliveryDelayMultiplier;
  }

  // redelivery_enabled - computed: false, optional: true, required: false
  private _redeliveryEnabled?: boolean | cdktf.IResolvable; 
  public get redeliveryEnabled() {
    return this.getBooleanAttribute('redelivery_enabled');
  }
  public set redeliveryEnabled(value: boolean | cdktf.IResolvable) {
    this._redeliveryEnabled = value;
  }
  public resetRedeliveryEnabled() {
    this._redeliveryEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redeliveryEnabledInput() {
    return this._redeliveryEnabled;
  }

  // reject_low_priority_msg_enabled - computed: false, optional: true, required: false
  private _rejectLowPriorityMsgEnabled?: boolean | cdktf.IResolvable; 
  public get rejectLowPriorityMsgEnabled() {
    return this.getBooleanAttribute('reject_low_priority_msg_enabled');
  }
  public set rejectLowPriorityMsgEnabled(value: boolean | cdktf.IResolvable) {
    this._rejectLowPriorityMsgEnabled = value;
  }
  public resetRejectLowPriorityMsgEnabled() {
    this._rejectLowPriorityMsgEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rejectLowPriorityMsgEnabledInput() {
    return this._rejectLowPriorityMsgEnabled;
  }

  // reject_low_priority_msg_limit - computed: false, optional: true, required: false
  private _rejectLowPriorityMsgLimit?: number; 
  public get rejectLowPriorityMsgLimit() {
    return this.getNumberAttribute('reject_low_priority_msg_limit');
  }
  public set rejectLowPriorityMsgLimit(value: number) {
    this._rejectLowPriorityMsgLimit = value;
  }
  public resetRejectLowPriorityMsgLimit() {
    this._rejectLowPriorityMsgLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rejectLowPriorityMsgLimitInput() {
    return this._rejectLowPriorityMsgLimit;
  }

  // reject_msg_to_sender_on_discard_behavior - computed: false, optional: true, required: false
  private _rejectMsgToSenderOnDiscardBehavior?: string; 
  public get rejectMsgToSenderOnDiscardBehavior() {
    return this.getStringAttribute('reject_msg_to_sender_on_discard_behavior');
  }
  public set rejectMsgToSenderOnDiscardBehavior(value: string) {
    this._rejectMsgToSenderOnDiscardBehavior = value;
  }
  public resetRejectMsgToSenderOnDiscardBehavior() {
    this._rejectMsgToSenderOnDiscardBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rejectMsgToSenderOnDiscardBehaviorInput() {
    return this._rejectMsgToSenderOnDiscardBehavior;
  }

  // respect_msg_priority_enabled - computed: false, optional: true, required: false
  private _respectMsgPriorityEnabled?: boolean | cdktf.IResolvable; 
  public get respectMsgPriorityEnabled() {
    return this.getBooleanAttribute('respect_msg_priority_enabled');
  }
  public set respectMsgPriorityEnabled(value: boolean | cdktf.IResolvable) {
    this._respectMsgPriorityEnabled = value;
  }
  public resetRespectMsgPriorityEnabled() {
    this._respectMsgPriorityEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get respectMsgPriorityEnabledInput() {
    return this._respectMsgPriorityEnabled;
  }

  // respect_ttl_enabled - computed: false, optional: true, required: false
  private _respectTtlEnabled?: boolean | cdktf.IResolvable; 
  public get respectTtlEnabled() {
    return this.getBooleanAttribute('respect_ttl_enabled');
  }
  public set respectTtlEnabled(value: boolean | cdktf.IResolvable) {
    this._respectTtlEnabled = value;
  }
  public resetRespectTtlEnabled() {
    this._respectTtlEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get respectTtlEnabledInput() {
    return this._respectTtlEnabled;
  }

  // topic_endpoint_name - computed: false, optional: false, required: true
  private _topicEndpointName?: string; 
  public get topicEndpointName() {
    return this.getStringAttribute('topic_endpoint_name');
  }
  public set topicEndpointName(value: string) {
    this._topicEndpointName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topicEndpointNameInput() {
    return this._topicEndpointName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_type: cdktf.stringToTerraform(this._accessType),
      consumer_ack_propagation_enabled: cdktf.booleanToTerraform(this._consumerAckPropagationEnabled),
      dead_msg_queue: cdktf.stringToTerraform(this._deadMsgQueue),
      delivery_count_enabled: cdktf.booleanToTerraform(this._deliveryCountEnabled),
      delivery_delay: cdktf.numberToTerraform(this._deliveryDelay),
      egress_enabled: cdktf.booleanToTerraform(this._egressEnabled),
      event_bind_count_threshold: solacebrokerMsgVpnTopicEndpointEventBindCountThresholdToTerraform(this._eventBindCountThreshold.internalValue),
      event_reject_low_priority_msg_limit_threshold: solacebrokerMsgVpnTopicEndpointEventRejectLowPriorityMsgLimitThresholdToTerraform(this._eventRejectLowPriorityMsgLimitThreshold.internalValue),
      event_spool_usage_threshold: solacebrokerMsgVpnTopicEndpointEventSpoolUsageThresholdToTerraform(this._eventSpoolUsageThreshold.internalValue),
      ingress_enabled: cdktf.booleanToTerraform(this._ingressEnabled),
      max_bind_count: cdktf.numberToTerraform(this._maxBindCount),
      max_delivered_unacked_msgs_per_flow: cdktf.numberToTerraform(this._maxDeliveredUnackedMsgsPerFlow),
      max_msg_size: cdktf.numberToTerraform(this._maxMsgSize),
      max_redelivery_count: cdktf.numberToTerraform(this._maxRedeliveryCount),
      max_spool_usage: cdktf.numberToTerraform(this._maxSpoolUsage),
      max_ttl: cdktf.numberToTerraform(this._maxTtl),
      msg_vpn_name: cdktf.stringToTerraform(this._msgVpnName),
      owner: cdktf.stringToTerraform(this._owner),
      permission: cdktf.stringToTerraform(this._permission),
      redelivery_delay_enabled: cdktf.booleanToTerraform(this._redeliveryDelayEnabled),
      redelivery_delay_initial_interval: cdktf.numberToTerraform(this._redeliveryDelayInitialInterval),
      redelivery_delay_max_interval: cdktf.numberToTerraform(this._redeliveryDelayMaxInterval),
      redelivery_delay_multiplier: cdktf.numberToTerraform(this._redeliveryDelayMultiplier),
      redelivery_enabled: cdktf.booleanToTerraform(this._redeliveryEnabled),
      reject_low_priority_msg_enabled: cdktf.booleanToTerraform(this._rejectLowPriorityMsgEnabled),
      reject_low_priority_msg_limit: cdktf.numberToTerraform(this._rejectLowPriorityMsgLimit),
      reject_msg_to_sender_on_discard_behavior: cdktf.stringToTerraform(this._rejectMsgToSenderOnDiscardBehavior),
      respect_msg_priority_enabled: cdktf.booleanToTerraform(this._respectMsgPriorityEnabled),
      respect_ttl_enabled: cdktf.booleanToTerraform(this._respectTtlEnabled),
      topic_endpoint_name: cdktf.stringToTerraform(this._topicEndpointName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_type: {
        value: cdktf.stringToHclTerraform(this._accessType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      consumer_ack_propagation_enabled: {
        value: cdktf.booleanToHclTerraform(this._consumerAckPropagationEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dead_msg_queue: {
        value: cdktf.stringToHclTerraform(this._deadMsgQueue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delivery_count_enabled: {
        value: cdktf.booleanToHclTerraform(this._deliveryCountEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      delivery_delay: {
        value: cdktf.numberToHclTerraform(this._deliveryDelay),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      egress_enabled: {
        value: cdktf.booleanToHclTerraform(this._egressEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      event_bind_count_threshold: {
        value: solacebrokerMsgVpnTopicEndpointEventBindCountThresholdToHclTerraform(this._eventBindCountThreshold.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SolacebrokerMsgVpnTopicEndpointEventBindCountThreshold",
      },
      event_reject_low_priority_msg_limit_threshold: {
        value: solacebrokerMsgVpnTopicEndpointEventRejectLowPriorityMsgLimitThresholdToHclTerraform(this._eventRejectLowPriorityMsgLimitThreshold.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SolacebrokerMsgVpnTopicEndpointEventRejectLowPriorityMsgLimitThreshold",
      },
      event_spool_usage_threshold: {
        value: solacebrokerMsgVpnTopicEndpointEventSpoolUsageThresholdToHclTerraform(this._eventSpoolUsageThreshold.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SolacebrokerMsgVpnTopicEndpointEventSpoolUsageThreshold",
      },
      ingress_enabled: {
        value: cdktf.booleanToHclTerraform(this._ingressEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      max_bind_count: {
        value: cdktf.numberToHclTerraform(this._maxBindCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_delivered_unacked_msgs_per_flow: {
        value: cdktf.numberToHclTerraform(this._maxDeliveredUnackedMsgsPerFlow),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_msg_size: {
        value: cdktf.numberToHclTerraform(this._maxMsgSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_redelivery_count: {
        value: cdktf.numberToHclTerraform(this._maxRedeliveryCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_spool_usage: {
        value: cdktf.numberToHclTerraform(this._maxSpoolUsage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_ttl: {
        value: cdktf.numberToHclTerraform(this._maxTtl),
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
      owner: {
        value: cdktf.stringToHclTerraform(this._owner),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      permission: {
        value: cdktf.stringToHclTerraform(this._permission),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      redelivery_delay_enabled: {
        value: cdktf.booleanToHclTerraform(this._redeliveryDelayEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      redelivery_delay_initial_interval: {
        value: cdktf.numberToHclTerraform(this._redeliveryDelayInitialInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      redelivery_delay_max_interval: {
        value: cdktf.numberToHclTerraform(this._redeliveryDelayMaxInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      redelivery_delay_multiplier: {
        value: cdktf.numberToHclTerraform(this._redeliveryDelayMultiplier),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      redelivery_enabled: {
        value: cdktf.booleanToHclTerraform(this._redeliveryEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      reject_low_priority_msg_enabled: {
        value: cdktf.booleanToHclTerraform(this._rejectLowPriorityMsgEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      reject_low_priority_msg_limit: {
        value: cdktf.numberToHclTerraform(this._rejectLowPriorityMsgLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      reject_msg_to_sender_on_discard_behavior: {
        value: cdktf.stringToHclTerraform(this._rejectMsgToSenderOnDiscardBehavior),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      respect_msg_priority_enabled: {
        value: cdktf.booleanToHclTerraform(this._respectMsgPriorityEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      respect_ttl_enabled: {
        value: cdktf.booleanToHclTerraform(this._respectTtlEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      topic_endpoint_name: {
        value: cdktf.stringToHclTerraform(this._topicEndpointName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
