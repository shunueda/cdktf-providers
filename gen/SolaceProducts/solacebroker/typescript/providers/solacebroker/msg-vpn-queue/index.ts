// https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/resources/msg_vpn_queue
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MsgVpnQueueConfig extends cdktf.TerraformMetaArguments {
  /**
  * The access type for delivering messages to consumer flows bound to the Queue.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as egress_enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `"exclusive"`. The allowed values and their meaning are:
  * 
  * <pre>
  * "exclusive" - Exclusive delivery of messages to the first bound consumer flow.
  * "non-exclusive" - Non-exclusive delivery of messages to bound consumer flows in a round-robin (if partition count is zero) or partitioned (if partition count is non-zero) fashion.
  * </pre>
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/resources/msg_vpn_queue#access_type MsgVpnQueue#access_type}
  */
  readonly accessType?: string;
  /**
  * Enable or disable the propagation of consumer acknowledgments (ACKs) received on the active replication Message VPN to the standby replication Message VPN.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/resources/msg_vpn_queue#consumer_ack_propagation_enabled MsgVpnQueue#consumer_ack_propagation_enabled}
  */
  readonly consumerAckPropagationEnabled?: boolean | cdktf.IResolvable;
  /**
  * The name of the Dead Message Queue (DMQ) used by the Queue.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `"#DEAD_MSG_QUEUE"`. Available since SEMP API version 2.2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/resources/msg_vpn_queue#dead_msg_queue MsgVpnQueue#dead_msg_queue}
  */
  readonly deadMsgQueue?: string;
  /**
  * Enable or disable the ability for client applications to query the message delivery count of messages received from the Queue. This is a controlled availability feature. Please contact support to find out if this feature is supported for your use case.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`. Available since SEMP API version 2.19.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/resources/msg_vpn_queue#delivery_count_enabled MsgVpnQueue#delivery_count_enabled}
  */
  readonly deliveryCountEnabled?: boolean | cdktf.IResolvable;
  /**
  * The delay, in seconds, to apply to messages arriving on the Queue before the messages are eligible for delivery.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `0`. Available since SEMP API version 2.22.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/resources/msg_vpn_queue#delivery_delay MsgVpnQueue#delivery_delay}
  */
  readonly deliveryDelay?: number;
  /**
  * Enable or disable the transmission of messages from the Queue.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/resources/msg_vpn_queue#egress_enabled MsgVpnQueue#egress_enabled}
  */
  readonly egressEnabled?: boolean | cdktf.IResolvable;
  /**
  * The thresholds for the Queue consumer flows event, relative to `max_bind_count`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/resources/msg_vpn_queue#event_bind_count_threshold MsgVpnQueue#event_bind_count_threshold}
  */
  readonly eventBindCountThreshold?: MsgVpnQueueEventBindCountThreshold;
  /**
  * The thresholds for the message spool usage event of the Queue, relative to `max_msg_spool_usage`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/resources/msg_vpn_queue#event_msg_spool_usage_threshold MsgVpnQueue#event_msg_spool_usage_threshold}
  */
  readonly eventMsgSpoolUsageThreshold?: MsgVpnQueueEventMsgSpoolUsageThreshold;
  /**
  * The thresholds for the maximum allowed number of any priority messages queued in the Queue event, relative to `reject_low_priority_msg_limit`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/resources/msg_vpn_queue#event_reject_low_priority_msg_limit_threshold MsgVpnQueue#event_reject_low_priority_msg_limit_threshold}
  */
  readonly eventRejectLowPriorityMsgLimitThreshold?: MsgVpnQueueEventRejectLowPriorityMsgLimitThreshold;
  /**
  * Enable or disable the reception of messages to the Queue.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/resources/msg_vpn_queue#ingress_enabled MsgVpnQueue#ingress_enabled}
  */
  readonly ingressEnabled?: boolean | cdktf.IResolvable;
  /**
  * The maximum number of consumer flows that can bind to the Queue.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `1000`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/resources/msg_vpn_queue#max_bind_count MsgVpnQueue#max_bind_count}
  */
  readonly maxBindCount?: number;
  /**
  * The maximum number of messages delivered but not acknowledged per flow for the Queue.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `10000`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/resources/msg_vpn_queue#max_delivered_unacked_msgs_per_flow MsgVpnQueue#max_delivered_unacked_msgs_per_flow}
  */
  readonly maxDeliveredUnackedMsgsPerFlow?: number;
  /**
  * The maximum message size allowed in the Queue, in bytes (B).
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `10000000`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/resources/msg_vpn_queue#max_msg_size MsgVpnQueue#max_msg_size}
  */
  readonly maxMsgSize?: number;
  /**
  * The maximum message spool usage allowed by the Queue, in megabytes (MB). A value of 0 only allows spooling of the last message received and disables quota checking.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `5000`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/resources/msg_vpn_queue#max_msg_spool_usage MsgVpnQueue#max_msg_spool_usage}
  */
  readonly maxMsgSpoolUsage?: number;
  /**
  * The maximum number of times the Queue will attempt redelivery of a message prior to it being discarded or moved to the DMQ. A value of 0 means to retry forever.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/resources/msg_vpn_queue#max_redelivery_count MsgVpnQueue#max_redelivery_count}
  */
  readonly maxRedeliveryCount?: number;
  /**
  * The maximum time in seconds a message can stay in the Queue when `respect_ttl_enabled` is `"true"`. A message expires when the lesser of the sender assigned time-to-live (TTL) in the message and the `max_ttl` configured for the Queue, is exceeded. A value of 0 disables expiry.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/resources/msg_vpn_queue#max_ttl MsgVpnQueue#max_ttl}
  */
  readonly maxTtl?: number;
  /**
  * The name of the Message VPN.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/resources/msg_vpn_queue#msg_vpn_name MsgVpnQueue#msg_vpn_name}
  */
  readonly msgVpnName: string;
  /**
  * The Client Username that owns the Queue and has permission equivalent to `"delete"`.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as egress_enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/resources/msg_vpn_queue#owner MsgVpnQueue#owner}
  */
  readonly owner?: string;
  /**
  * The count of partitions of the queue. Only relevant for queues with an access type of non-exclusive. When zero, bound clients receive messages round-robin. Otherwise, bound clients receive messages from individually assigned partitions.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `0`. Available since SEMP API version 2.35.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/resources/msg_vpn_queue#partition_count MsgVpnQueue#partition_count}
  */
  readonly partitionCount?: number;
  /**
  * The delay (in seconds) before a partition rebalance is started once needed.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `5`. Available since SEMP API version 2.35.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/resources/msg_vpn_queue#partition_rebalance_delay MsgVpnQueue#partition_rebalance_delay}
  */
  readonly partitionRebalanceDelay?: number;
  /**
  * The maximum time (in seconds) to wait before handing off a partition while rebalancing.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `3`. Available since SEMP API version 2.35.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/resources/msg_vpn_queue#partition_rebalance_max_handoff_time MsgVpnQueue#partition_rebalance_max_handoff_time}
  */
  readonly partitionRebalanceMaxHandoffTime?: number;
  /**
  * The permission level for all consumers of the Queue, excluding the owner.
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/resources/msg_vpn_queue#permission MsgVpnQueue#permission}
  */
  readonly permission?: string;
  /**
  * The name of the Queue.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/resources/msg_vpn_queue#queue_name MsgVpnQueue#queue_name}
  */
  readonly queueName: string;
  /**
  * Enable or disable a message redelivery delay. When false, messages are redelivered as soon as possible.  When true, messages are redelivered according to the initial, max and multiplier.  This should only be enabled when redelivery is enabled.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as egress_enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`. Available since SEMP API version 2.33.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/resources/msg_vpn_queue#redelivery_delay_enabled MsgVpnQueue#redelivery_delay_enabled}
  */
  readonly redeliveryDelayEnabled?: boolean | cdktf.IResolvable;
  /**
  * The delay to be used between the first 2 redelivery attempts.  This value is in milliseconds.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as egress_enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `1000`. Available since SEMP API version 2.33.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/resources/msg_vpn_queue#redelivery_delay_initial_interval MsgVpnQueue#redelivery_delay_initial_interval}
  */
  readonly redeliveryDelayInitialInterval?: number;
  /**
  * The maximum delay to be used between any 2 redelivery attempts.  This value is in milliseconds.  Due to technical limitations, some redelivery attempt delays may slightly exceed this value.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as egress_enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `64000`. Available since SEMP API version 2.33.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/resources/msg_vpn_queue#redelivery_delay_max_interval MsgVpnQueue#redelivery_delay_max_interval}
  */
  readonly redeliveryDelayMaxInterval?: number;
  /**
  * The amount each delay interval is multiplied by after each failed delivery attempt.  This number is in a fixed-point decimal format in which you must divide by 100 to get the floating point value. For example, a value of 125 would cause the delay to be multiplied by 1.25.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as egress_enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `200`. Available since SEMP API version 2.33.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/resources/msg_vpn_queue#redelivery_delay_multiplier MsgVpnQueue#redelivery_delay_multiplier}
  */
  readonly redeliveryDelayMultiplier?: number;
  /**
  * Enable or disable message redelivery. When enabled, the number of redelivery attempts is controlled by max_redelivery_count. When disabled, the message will never be delivered from the queue more than once.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `true`. Available since SEMP API version 2.18.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/resources/msg_vpn_queue#redelivery_enabled MsgVpnQueue#redelivery_enabled}
  */
  readonly redeliveryEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enable or disable the checking of low priority messages against the `reject_low_priority_msg_limit`. This may only be enabled if `reject_msg_to_sender_on_discard_behavior` does not have a value of `"never"`.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/resources/msg_vpn_queue#reject_low_priority_msg_enabled MsgVpnQueue#reject_low_priority_msg_enabled}
  */
  readonly rejectLowPriorityMsgEnabled?: boolean | cdktf.IResolvable;
  /**
  * The number of messages of any priority in the Queue above which low priority messages are not admitted but higher priority messages are allowed.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/resources/msg_vpn_queue#reject_low_priority_msg_limit MsgVpnQueue#reject_low_priority_msg_limit}
  */
  readonly rejectLowPriorityMsgLimit?: number;
  /**
  * Determines when to return negative acknowledgments (NACKs) to sending clients on message discards. Note that NACKs cause the message to not be delivered to any destination and Transacted Session commits to fail.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as reject_low_priority_msg_enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `"when-queue-enabled"`. The allowed values and their meaning are:
  * 
  * <pre>
  * "never" - Silently discard messages.
  * "when-queue-enabled" - NACK each message discard back to the client, except messages that are discarded because an endpoint is administratively disabled.
  * "always" - NACK each message discard back to the client, including messages that are discarded because an endpoint is administratively disabled.
  * </pre>
  *  Available since SEMP API version 2.1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/resources/msg_vpn_queue#reject_msg_to_sender_on_discard_behavior MsgVpnQueue#reject_msg_to_sender_on_discard_behavior}
  */
  readonly rejectMsgToSenderOnDiscardBehavior?: string;
  /**
  * Enable or disable the respecting of DMQ Eligible for messages in the Queue.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`. Available since SEMP API version 2.49.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/resources/msg_vpn_queue#respect_dmq_eligible_enabled MsgVpnQueue#respect_dmq_eligible_enabled}
  */
  readonly respectDmqEligibleEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enable or disable the respecting of message priority. When enabled, messages contained in the Queue are delivered in priority order, from 9 (highest) to 0 (lowest). Regardless of this setting, message priority is not respected when browsing the queue, when the queue is used by a bridge, or if the queue is partitioned.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as egress_enabled and ingress_enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`. Available since SEMP API version 2.8.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/resources/msg_vpn_queue#respect_msg_priority_enabled MsgVpnQueue#respect_msg_priority_enabled}
  */
  readonly respectMsgPriorityEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enable or disable the respecting of the time-to-live (TTL) for messages in the Queue. When enabled, expired messages are discarded or moved to the DMQ.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/resources/msg_vpn_queue#respect_ttl_enabled MsgVpnQueue#respect_ttl_enabled}
  */
  readonly respectTtlEnabled?: boolean | cdktf.IResolvable;
}
export interface MsgVpnQueueEventBindCountThreshold {
  /**
  * The clear threshold for the value of this counter as a percentage of its maximum value. Falling below this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `60`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/resources/msg_vpn_queue#clear_percent MsgVpnQueue#clear_percent}
  */
  readonly clearPercent?: number;
  /**
  * The clear threshold for the absolute value of this counter. Falling below this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default is not applicable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/resources/msg_vpn_queue#clear_value MsgVpnQueue#clear_value}
  */
  readonly clearValue?: number;
  /**
  * The set threshold for the value of this counter as a percentage of its maximum value. Exceeding this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `80`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/resources/msg_vpn_queue#set_percent MsgVpnQueue#set_percent}
  */
  readonly setPercent?: number;
  /**
  * The set threshold for the absolute value of this counter. Exceeding this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default is not applicable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/resources/msg_vpn_queue#set_value MsgVpnQueue#set_value}
  */
  readonly setValue?: number;
}

export function msgVpnQueueEventBindCountThresholdToTerraform(struct?: MsgVpnQueueEventBindCountThreshold | cdktf.IResolvable): any {
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


export function msgVpnQueueEventBindCountThresholdToHclTerraform(struct?: MsgVpnQueueEventBindCountThreshold | cdktf.IResolvable): any {
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

export class MsgVpnQueueEventBindCountThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MsgVpnQueueEventBindCountThreshold | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MsgVpnQueueEventBindCountThreshold | cdktf.IResolvable | undefined) {
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
export interface MsgVpnQueueEventMsgSpoolUsageThreshold {
  /**
  * The clear threshold for the value of this counter as a percentage of its maximum value. Falling below this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `18`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/resources/msg_vpn_queue#clear_percent MsgVpnQueue#clear_percent}
  */
  readonly clearPercent?: number;
  /**
  * The clear threshold for the absolute value of this counter. Falling below this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default is not applicable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/resources/msg_vpn_queue#clear_value MsgVpnQueue#clear_value}
  */
  readonly clearValue?: number;
  /**
  * The set threshold for the value of this counter as a percentage of its maximum value. Exceeding this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `25`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/resources/msg_vpn_queue#set_percent MsgVpnQueue#set_percent}
  */
  readonly setPercent?: number;
  /**
  * The set threshold for the absolute value of this counter. Exceeding this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default is not applicable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/resources/msg_vpn_queue#set_value MsgVpnQueue#set_value}
  */
  readonly setValue?: number;
}

export function msgVpnQueueEventMsgSpoolUsageThresholdToTerraform(struct?: MsgVpnQueueEventMsgSpoolUsageThreshold | cdktf.IResolvable): any {
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


export function msgVpnQueueEventMsgSpoolUsageThresholdToHclTerraform(struct?: MsgVpnQueueEventMsgSpoolUsageThreshold | cdktf.IResolvable): any {
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

export class MsgVpnQueueEventMsgSpoolUsageThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MsgVpnQueueEventMsgSpoolUsageThreshold | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MsgVpnQueueEventMsgSpoolUsageThreshold | cdktf.IResolvable | undefined) {
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
export interface MsgVpnQueueEventRejectLowPriorityMsgLimitThreshold {
  /**
  * The clear threshold for the value of this counter as a percentage of its maximum value. Falling below this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `60`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/resources/msg_vpn_queue#clear_percent MsgVpnQueue#clear_percent}
  */
  readonly clearPercent?: number;
  /**
  * The clear threshold for the absolute value of this counter. Falling below this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default is not applicable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/resources/msg_vpn_queue#clear_value MsgVpnQueue#clear_value}
  */
  readonly clearValue?: number;
  /**
  * The set threshold for the value of this counter as a percentage of its maximum value. Exceeding this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `80`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/resources/msg_vpn_queue#set_percent MsgVpnQueue#set_percent}
  */
  readonly setPercent?: number;
  /**
  * The set threshold for the absolute value of this counter. Exceeding this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default is not applicable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/resources/msg_vpn_queue#set_value MsgVpnQueue#set_value}
  */
  readonly setValue?: number;
}

export function msgVpnQueueEventRejectLowPriorityMsgLimitThresholdToTerraform(struct?: MsgVpnQueueEventRejectLowPriorityMsgLimitThreshold | cdktf.IResolvable): any {
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


export function msgVpnQueueEventRejectLowPriorityMsgLimitThresholdToHclTerraform(struct?: MsgVpnQueueEventRejectLowPriorityMsgLimitThreshold | cdktf.IResolvable): any {
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

export class MsgVpnQueueEventRejectLowPriorityMsgLimitThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MsgVpnQueueEventRejectLowPriorityMsgLimitThreshold | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MsgVpnQueueEventRejectLowPriorityMsgLimitThreshold | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/resources/msg_vpn_queue solacebroker_msg_vpn_queue}
*/
export class MsgVpnQueue extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "solacebroker_msg_vpn_queue";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MsgVpnQueue resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MsgVpnQueue to import
  * @param importFromId The id of the existing MsgVpnQueue that should be imported. Refer to the {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/resources/msg_vpn_queue#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MsgVpnQueue to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "solacebroker_msg_vpn_queue", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/resources/msg_vpn_queue solacebroker_msg_vpn_queue} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MsgVpnQueueConfig
  */
  public constructor(scope: Construct, id: string, config: MsgVpnQueueConfig) {
    super(scope, id, {
      terraformResourceType: 'solacebroker_msg_vpn_queue',
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
    this._accessType = config.accessType;
    this._consumerAckPropagationEnabled = config.consumerAckPropagationEnabled;
    this._deadMsgQueue = config.deadMsgQueue;
    this._deliveryCountEnabled = config.deliveryCountEnabled;
    this._deliveryDelay = config.deliveryDelay;
    this._egressEnabled = config.egressEnabled;
    this._eventBindCountThreshold.internalValue = config.eventBindCountThreshold;
    this._eventMsgSpoolUsageThreshold.internalValue = config.eventMsgSpoolUsageThreshold;
    this._eventRejectLowPriorityMsgLimitThreshold.internalValue = config.eventRejectLowPriorityMsgLimitThreshold;
    this._ingressEnabled = config.ingressEnabled;
    this._maxBindCount = config.maxBindCount;
    this._maxDeliveredUnackedMsgsPerFlow = config.maxDeliveredUnackedMsgsPerFlow;
    this._maxMsgSize = config.maxMsgSize;
    this._maxMsgSpoolUsage = config.maxMsgSpoolUsage;
    this._maxRedeliveryCount = config.maxRedeliveryCount;
    this._maxTtl = config.maxTtl;
    this._msgVpnName = config.msgVpnName;
    this._owner = config.owner;
    this._partitionCount = config.partitionCount;
    this._partitionRebalanceDelay = config.partitionRebalanceDelay;
    this._partitionRebalanceMaxHandoffTime = config.partitionRebalanceMaxHandoffTime;
    this._permission = config.permission;
    this._queueName = config.queueName;
    this._redeliveryDelayEnabled = config.redeliveryDelayEnabled;
    this._redeliveryDelayInitialInterval = config.redeliveryDelayInitialInterval;
    this._redeliveryDelayMaxInterval = config.redeliveryDelayMaxInterval;
    this._redeliveryDelayMultiplier = config.redeliveryDelayMultiplier;
    this._redeliveryEnabled = config.redeliveryEnabled;
    this._rejectLowPriorityMsgEnabled = config.rejectLowPriorityMsgEnabled;
    this._rejectLowPriorityMsgLimit = config.rejectLowPriorityMsgLimit;
    this._rejectMsgToSenderOnDiscardBehavior = config.rejectMsgToSenderOnDiscardBehavior;
    this._respectDmqEligibleEnabled = config.respectDmqEligibleEnabled;
    this._respectMsgPriorityEnabled = config.respectMsgPriorityEnabled;
    this._respectTtlEnabled = config.respectTtlEnabled;
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
  private _eventBindCountThreshold = new MsgVpnQueueEventBindCountThresholdOutputReference(this, "event_bind_count_threshold");
  public get eventBindCountThreshold() {
    return this._eventBindCountThreshold;
  }
  public putEventBindCountThreshold(value: MsgVpnQueueEventBindCountThreshold) {
    this._eventBindCountThreshold.internalValue = value;
  }
  public resetEventBindCountThreshold() {
    this._eventBindCountThreshold.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventBindCountThresholdInput() {
    return this._eventBindCountThreshold.internalValue;
  }

  // event_msg_spool_usage_threshold - computed: false, optional: true, required: false
  private _eventMsgSpoolUsageThreshold = new MsgVpnQueueEventMsgSpoolUsageThresholdOutputReference(this, "event_msg_spool_usage_threshold");
  public get eventMsgSpoolUsageThreshold() {
    return this._eventMsgSpoolUsageThreshold;
  }
  public putEventMsgSpoolUsageThreshold(value: MsgVpnQueueEventMsgSpoolUsageThreshold) {
    this._eventMsgSpoolUsageThreshold.internalValue = value;
  }
  public resetEventMsgSpoolUsageThreshold() {
    this._eventMsgSpoolUsageThreshold.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventMsgSpoolUsageThresholdInput() {
    return this._eventMsgSpoolUsageThreshold.internalValue;
  }

  // event_reject_low_priority_msg_limit_threshold - computed: false, optional: true, required: false
  private _eventRejectLowPriorityMsgLimitThreshold = new MsgVpnQueueEventRejectLowPriorityMsgLimitThresholdOutputReference(this, "event_reject_low_priority_msg_limit_threshold");
  public get eventRejectLowPriorityMsgLimitThreshold() {
    return this._eventRejectLowPriorityMsgLimitThreshold;
  }
  public putEventRejectLowPriorityMsgLimitThreshold(value: MsgVpnQueueEventRejectLowPriorityMsgLimitThreshold) {
    this._eventRejectLowPriorityMsgLimitThreshold.internalValue = value;
  }
  public resetEventRejectLowPriorityMsgLimitThreshold() {
    this._eventRejectLowPriorityMsgLimitThreshold.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventRejectLowPriorityMsgLimitThresholdInput() {
    return this._eventRejectLowPriorityMsgLimitThreshold.internalValue;
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

  // max_msg_spool_usage - computed: false, optional: true, required: false
  private _maxMsgSpoolUsage?: number; 
  public get maxMsgSpoolUsage() {
    return this.getNumberAttribute('max_msg_spool_usage');
  }
  public set maxMsgSpoolUsage(value: number) {
    this._maxMsgSpoolUsage = value;
  }
  public resetMaxMsgSpoolUsage() {
    this._maxMsgSpoolUsage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxMsgSpoolUsageInput() {
    return this._maxMsgSpoolUsage;
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

  // partition_count - computed: false, optional: true, required: false
  private _partitionCount?: number; 
  public get partitionCount() {
    return this.getNumberAttribute('partition_count');
  }
  public set partitionCount(value: number) {
    this._partitionCount = value;
  }
  public resetPartitionCount() {
    this._partitionCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionCountInput() {
    return this._partitionCount;
  }

  // partition_rebalance_delay - computed: false, optional: true, required: false
  private _partitionRebalanceDelay?: number; 
  public get partitionRebalanceDelay() {
    return this.getNumberAttribute('partition_rebalance_delay');
  }
  public set partitionRebalanceDelay(value: number) {
    this._partitionRebalanceDelay = value;
  }
  public resetPartitionRebalanceDelay() {
    this._partitionRebalanceDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionRebalanceDelayInput() {
    return this._partitionRebalanceDelay;
  }

  // partition_rebalance_max_handoff_time - computed: false, optional: true, required: false
  private _partitionRebalanceMaxHandoffTime?: number; 
  public get partitionRebalanceMaxHandoffTime() {
    return this.getNumberAttribute('partition_rebalance_max_handoff_time');
  }
  public set partitionRebalanceMaxHandoffTime(value: number) {
    this._partitionRebalanceMaxHandoffTime = value;
  }
  public resetPartitionRebalanceMaxHandoffTime() {
    this._partitionRebalanceMaxHandoffTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionRebalanceMaxHandoffTimeInput() {
    return this._partitionRebalanceMaxHandoffTime;
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

  // respect_dmq_eligible_enabled - computed: false, optional: true, required: false
  private _respectDmqEligibleEnabled?: boolean | cdktf.IResolvable; 
  public get respectDmqEligibleEnabled() {
    return this.getBooleanAttribute('respect_dmq_eligible_enabled');
  }
  public set respectDmqEligibleEnabled(value: boolean | cdktf.IResolvable) {
    this._respectDmqEligibleEnabled = value;
  }
  public resetRespectDmqEligibleEnabled() {
    this._respectDmqEligibleEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get respectDmqEligibleEnabledInput() {
    return this._respectDmqEligibleEnabled;
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
      event_bind_count_threshold: msgVpnQueueEventBindCountThresholdToTerraform(this._eventBindCountThreshold.internalValue),
      event_msg_spool_usage_threshold: msgVpnQueueEventMsgSpoolUsageThresholdToTerraform(this._eventMsgSpoolUsageThreshold.internalValue),
      event_reject_low_priority_msg_limit_threshold: msgVpnQueueEventRejectLowPriorityMsgLimitThresholdToTerraform(this._eventRejectLowPriorityMsgLimitThreshold.internalValue),
      ingress_enabled: cdktf.booleanToTerraform(this._ingressEnabled),
      max_bind_count: cdktf.numberToTerraform(this._maxBindCount),
      max_delivered_unacked_msgs_per_flow: cdktf.numberToTerraform(this._maxDeliveredUnackedMsgsPerFlow),
      max_msg_size: cdktf.numberToTerraform(this._maxMsgSize),
      max_msg_spool_usage: cdktf.numberToTerraform(this._maxMsgSpoolUsage),
      max_redelivery_count: cdktf.numberToTerraform(this._maxRedeliveryCount),
      max_ttl: cdktf.numberToTerraform(this._maxTtl),
      msg_vpn_name: cdktf.stringToTerraform(this._msgVpnName),
      owner: cdktf.stringToTerraform(this._owner),
      partition_count: cdktf.numberToTerraform(this._partitionCount),
      partition_rebalance_delay: cdktf.numberToTerraform(this._partitionRebalanceDelay),
      partition_rebalance_max_handoff_time: cdktf.numberToTerraform(this._partitionRebalanceMaxHandoffTime),
      permission: cdktf.stringToTerraform(this._permission),
      queue_name: cdktf.stringToTerraform(this._queueName),
      redelivery_delay_enabled: cdktf.booleanToTerraform(this._redeliveryDelayEnabled),
      redelivery_delay_initial_interval: cdktf.numberToTerraform(this._redeliveryDelayInitialInterval),
      redelivery_delay_max_interval: cdktf.numberToTerraform(this._redeliveryDelayMaxInterval),
      redelivery_delay_multiplier: cdktf.numberToTerraform(this._redeliveryDelayMultiplier),
      redelivery_enabled: cdktf.booleanToTerraform(this._redeliveryEnabled),
      reject_low_priority_msg_enabled: cdktf.booleanToTerraform(this._rejectLowPriorityMsgEnabled),
      reject_low_priority_msg_limit: cdktf.numberToTerraform(this._rejectLowPriorityMsgLimit),
      reject_msg_to_sender_on_discard_behavior: cdktf.stringToTerraform(this._rejectMsgToSenderOnDiscardBehavior),
      respect_dmq_eligible_enabled: cdktf.booleanToTerraform(this._respectDmqEligibleEnabled),
      respect_msg_priority_enabled: cdktf.booleanToTerraform(this._respectMsgPriorityEnabled),
      respect_ttl_enabled: cdktf.booleanToTerraform(this._respectTtlEnabled),
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
        value: msgVpnQueueEventBindCountThresholdToHclTerraform(this._eventBindCountThreshold.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MsgVpnQueueEventBindCountThreshold",
      },
      event_msg_spool_usage_threshold: {
        value: msgVpnQueueEventMsgSpoolUsageThresholdToHclTerraform(this._eventMsgSpoolUsageThreshold.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MsgVpnQueueEventMsgSpoolUsageThreshold",
      },
      event_reject_low_priority_msg_limit_threshold: {
        value: msgVpnQueueEventRejectLowPriorityMsgLimitThresholdToHclTerraform(this._eventRejectLowPriorityMsgLimitThreshold.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MsgVpnQueueEventRejectLowPriorityMsgLimitThreshold",
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
      max_msg_spool_usage: {
        value: cdktf.numberToHclTerraform(this._maxMsgSpoolUsage),
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
      partition_count: {
        value: cdktf.numberToHclTerraform(this._partitionCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      partition_rebalance_delay: {
        value: cdktf.numberToHclTerraform(this._partitionRebalanceDelay),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      partition_rebalance_max_handoff_time: {
        value: cdktf.numberToHclTerraform(this._partitionRebalanceMaxHandoffTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      permission: {
        value: cdktf.stringToHclTerraform(this._permission),
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
      respect_dmq_eligible_enabled: {
        value: cdktf.booleanToHclTerraform(this._respectDmqEligibleEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
