// https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_topic_endpoint_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MsgVpnTopicEndpointTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * The access type for delivering messages to consumer flows.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `"exclusive"`. The allowed values and their meaning are:
  * 
  * <pre>
  * "exclusive" - Exclusive delivery of messages to the first bound consumer flow.
  * "non-exclusive" - Non-exclusive delivery of messages to bound consumer flows in a round-robin fashion.
  * </pre>
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_topic_endpoint_template#access_type MsgVpnTopicEndpointTemplate#access_type}
  */
  readonly accessType?: string;
  /**
  * Enable or disable the propagation of consumer acknowledgments (ACKs) received on the active replication Message VPN to the standby replication Message VPN.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_topic_endpoint_template#consumer_ack_propagation_enabled MsgVpnTopicEndpointTemplate#consumer_ack_propagation_enabled}
  */
  readonly consumerAckPropagationEnabled?: boolean | cdktf.IResolvable;
  /**
  * The name of the Dead Message Queue (DMQ).
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `"#DEAD_MSG_QUEUE"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_topic_endpoint_template#dead_msg_queue MsgVpnTopicEndpointTemplate#dead_msg_queue}
  */
  readonly deadMsgQueue?: string;
  /**
  * The delay, in seconds, to apply to messages arriving on the Topic Endpoint before the messages are eligible for delivery.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `0`. Available since SEMP API version 2.22.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_topic_endpoint_template#delivery_delay MsgVpnTopicEndpointTemplate#delivery_delay}
  */
  readonly deliveryDelay?: number;
  /**
  * The thresholds for the Topic Endpoint consumer flows event, relative to `max_bind_count`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_topic_endpoint_template#event_bind_count_threshold MsgVpnTopicEndpointTemplate#event_bind_count_threshold}
  */
  readonly eventBindCountThreshold?: MsgVpnTopicEndpointTemplateEventBindCountThreshold;
  /**
  * The thresholds for the message spool usage event of the Topic Endpoint, relative to `max_spool_usage`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_topic_endpoint_template#event_msg_spool_usage_threshold MsgVpnTopicEndpointTemplate#event_msg_spool_usage_threshold}
  */
  readonly eventMsgSpoolUsageThreshold?: MsgVpnTopicEndpointTemplateEventMsgSpoolUsageThreshold;
  /**
  * The thresholds for the maximum allowed number of any priority messages queued in the Topic Endpoint event, relative to `reject_low_priority_msg_limit`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_topic_endpoint_template#event_reject_low_priority_msg_limit_threshold MsgVpnTopicEndpointTemplate#event_reject_low_priority_msg_limit_threshold}
  */
  readonly eventRejectLowPriorityMsgLimitThreshold?: MsgVpnTopicEndpointTemplateEventRejectLowPriorityMsgLimitThreshold;
  /**
  * The maximum number of consumer flows that can bind.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_topic_endpoint_template#max_bind_count MsgVpnTopicEndpointTemplate#max_bind_count}
  */
  readonly maxBindCount?: number;
  /**
  * The maximum number of messages delivered but not acknowledged per flow.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `10000`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_topic_endpoint_template#max_delivered_unacked_msgs_per_flow MsgVpnTopicEndpointTemplate#max_delivered_unacked_msgs_per_flow}
  */
  readonly maxDeliveredUnackedMsgsPerFlow?: number;
  /**
  * The maximum message size allowed, in bytes (B).
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `10000000`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_topic_endpoint_template#max_msg_size MsgVpnTopicEndpointTemplate#max_msg_size}
  */
  readonly maxMsgSize?: number;
  /**
  * The maximum message spool usage allowed, in megabytes (MB). A value of 0 only allows spooling of the last message received and disables quota checking.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `5000`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_topic_endpoint_template#max_msg_spool_usage MsgVpnTopicEndpointTemplate#max_msg_spool_usage}
  */
  readonly maxMsgSpoolUsage?: number;
  /**
  * The maximum number of message redelivery attempts that will occur prior to the message being discarded or moved to the DMQ. A value of 0 means to retry forever.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_topic_endpoint_template#max_redelivery_count MsgVpnTopicEndpointTemplate#max_redelivery_count}
  */
  readonly maxRedeliveryCount?: number;
  /**
  * The maximum time in seconds a message can stay in the Topic Endpoint when `respect_ttl_enabled` is `"true"`. A message expires when the lesser of the sender assigned time-to-live (TTL) in the message and the `max_ttl` configured for the Topic Endpoint, is exceeded. A value of 0 disables expiry.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_topic_endpoint_template#max_ttl MsgVpnTopicEndpointTemplate#max_ttl}
  */
  readonly maxTtl?: number;
  /**
  * The name of the Message VPN.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_topic_endpoint_template#msg_vpn_name MsgVpnTopicEndpointTemplate#msg_vpn_name}
  */
  readonly msgVpnName: string;
  /**
  * The permission level for all consumers, excluding the owner.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `"no-access"`. The allowed values and their meaning are:
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_topic_endpoint_template#permission MsgVpnTopicEndpointTemplate#permission}
  */
  readonly permission?: string;
  /**
  * Enable or disable a message redelivery delay. When false, messages are redelivered as-soon-as-possible.  When true, messages are redelivered according to the initial, max and multiplier.  This should only be enabled when redelivery is enabled.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`. Available since SEMP API version 2.33.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_topic_endpoint_template#redelivery_delay_enabled MsgVpnTopicEndpointTemplate#redelivery_delay_enabled}
  */
  readonly redeliveryDelayEnabled?: boolean | cdktf.IResolvable;
  /**
  * The delay to be used between the first 2 redelivery attempts.  This value is in milliseconds.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `1000`. Available since SEMP API version 2.33.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_topic_endpoint_template#redelivery_delay_initial_interval MsgVpnTopicEndpointTemplate#redelivery_delay_initial_interval}
  */
  readonly redeliveryDelayInitialInterval?: number;
  /**
  * The maximum delay to be used between any 2 redelivery attempts.  This value is in milliseconds.  Due to technical limitations, some redelivery attempt delays may slightly exceed this value.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `64000`. Available since SEMP API version 2.33.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_topic_endpoint_template#redelivery_delay_max_interval MsgVpnTopicEndpointTemplate#redelivery_delay_max_interval}
  */
  readonly redeliveryDelayMaxInterval?: number;
  /**
  * The amount each delay interval is multiplied by after each failed delivery attempt.  This number is in a fixed-point decimal format in which you must divide by 100 to get the floating point value. For example, a value of 125 would cause the delay to be multiplied by 1.25.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `200`. Available since SEMP API version 2.33.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_topic_endpoint_template#redelivery_delay_multiplier MsgVpnTopicEndpointTemplate#redelivery_delay_multiplier}
  */
  readonly redeliveryDelayMultiplier?: number;
  /**
  * Enable or disable message redelivery. When enabled, the number of redelivery attempts is controlled by max_redelivery_count. When disabled, the message will never be delivered from the topic-endpoint more than once.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `true`. Available since SEMP API version 2.18.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_topic_endpoint_template#redelivery_enabled MsgVpnTopicEndpointTemplate#redelivery_enabled}
  */
  readonly redeliveryEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enable or disable the checking of low priority messages against the `reject_low_priority_msg_limit`. This may only be enabled if `reject_msg_to_sender_on_discard_behavior` does not have a value of `"never"`.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_topic_endpoint_template#reject_low_priority_msg_enabled MsgVpnTopicEndpointTemplate#reject_low_priority_msg_enabled}
  */
  readonly rejectLowPriorityMsgEnabled?: boolean | cdktf.IResolvable;
  /**
  * The number of messages that are permitted before low priority messages are rejected.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_topic_endpoint_template#reject_low_priority_msg_limit MsgVpnTopicEndpointTemplate#reject_low_priority_msg_limit}
  */
  readonly rejectLowPriorityMsgLimit?: number;
  /**
  * Determines when to return negative acknowledgments (NACKs) to sending clients on message discards. Note that NACKs cause the message to not be delivered to any destination and Transacted Session commits to fail.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `"never"`. The allowed values and their meaning are:
  * 
  * <pre>
  * "never" - Silently discard messages.
  * "when-topic-endpoint-enabled" - NACK each message discard back to the client, except messages that are discarded because an endpoint is administratively disabled.
  * "always" - NACK each message discard back to the client, including messages that are discarded because an endpoint is administratively disabled.
  * </pre>
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_topic_endpoint_template#reject_msg_to_sender_on_discard_behavior MsgVpnTopicEndpointTemplate#reject_msg_to_sender_on_discard_behavior}
  */
  readonly rejectMsgToSenderOnDiscardBehavior?: string;
  /**
  * Enable or disable the respecting of message priority. When enabled, messages are delivered in priority order, from 9 (highest) to 0 (lowest).
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_topic_endpoint_template#respect_msg_priority_enabled MsgVpnTopicEndpointTemplate#respect_msg_priority_enabled}
  */
  readonly respectMsgPriorityEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enable or disable the respecting of the time-to-live (TTL) for messages. When enabled, expired messages are discarded or moved to the DMQ.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_topic_endpoint_template#respect_ttl_enabled MsgVpnTopicEndpointTemplate#respect_ttl_enabled}
  */
  readonly respectTtlEnabled?: boolean | cdktf.IResolvable;
  /**
  * A pattern used to determine which Topic Endpoints use settings from this Template. Two different wildcards can be used in the pattern: * and &gt;. Similar to topic filters or subscription patterns, a &gt; matches anything (but only when used at the end), and a * matches zero or more characters but never a slash (/). A &gt; is only a wildcard when  used at the end, after a /. A * is only allowed at the end, after a slash (/).
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_topic_endpoint_template#topic_endpoint_name_filter MsgVpnTopicEndpointTemplate#topic_endpoint_name_filter}
  */
  readonly topicEndpointNameFilter?: string;
  /**
  * The name of the Topic Endpoint Template.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_topic_endpoint_template#topic_endpoint_template_name MsgVpnTopicEndpointTemplate#topic_endpoint_template_name}
  */
  readonly topicEndpointTemplateName: string;
}
export interface MsgVpnTopicEndpointTemplateEventBindCountThreshold {
  /**
  * The clear threshold for the value of this counter as a percentage of its maximum value. Falling below this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `60`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_topic_endpoint_template#clear_percent MsgVpnTopicEndpointTemplate#clear_percent}
  */
  readonly clearPercent?: number;
  /**
  * The clear threshold for the absolute value of this counter. Falling below this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default is not applicable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_topic_endpoint_template#clear_value MsgVpnTopicEndpointTemplate#clear_value}
  */
  readonly clearValue?: number;
  /**
  * The set threshold for the value of this counter as a percentage of its maximum value. Exceeding this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `80`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_topic_endpoint_template#set_percent MsgVpnTopicEndpointTemplate#set_percent}
  */
  readonly setPercent?: number;
  /**
  * The set threshold for the absolute value of this counter. Exceeding this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default is not applicable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_topic_endpoint_template#set_value MsgVpnTopicEndpointTemplate#set_value}
  */
  readonly setValue?: number;
}

export function msgVpnTopicEndpointTemplateEventBindCountThresholdToTerraform(struct?: MsgVpnTopicEndpointTemplateEventBindCountThreshold | cdktf.IResolvable): any {
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


export function msgVpnTopicEndpointTemplateEventBindCountThresholdToHclTerraform(struct?: MsgVpnTopicEndpointTemplateEventBindCountThreshold | cdktf.IResolvable): any {
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

export class MsgVpnTopicEndpointTemplateEventBindCountThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MsgVpnTopicEndpointTemplateEventBindCountThreshold | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MsgVpnTopicEndpointTemplateEventBindCountThreshold | cdktf.IResolvable | undefined) {
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
export interface MsgVpnTopicEndpointTemplateEventMsgSpoolUsageThreshold {
  /**
  * The clear threshold for the value of this counter as a percentage of its maximum value. Falling below this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `18`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_topic_endpoint_template#clear_percent MsgVpnTopicEndpointTemplate#clear_percent}
  */
  readonly clearPercent?: number;
  /**
  * The clear threshold for the absolute value of this counter. Falling below this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default is not applicable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_topic_endpoint_template#clear_value MsgVpnTopicEndpointTemplate#clear_value}
  */
  readonly clearValue?: number;
  /**
  * The set threshold for the value of this counter as a percentage of its maximum value. Exceeding this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `25`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_topic_endpoint_template#set_percent MsgVpnTopicEndpointTemplate#set_percent}
  */
  readonly setPercent?: number;
  /**
  * The set threshold for the absolute value of this counter. Exceeding this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default is not applicable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_topic_endpoint_template#set_value MsgVpnTopicEndpointTemplate#set_value}
  */
  readonly setValue?: number;
}

export function msgVpnTopicEndpointTemplateEventMsgSpoolUsageThresholdToTerraform(struct?: MsgVpnTopicEndpointTemplateEventMsgSpoolUsageThreshold | cdktf.IResolvable): any {
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


export function msgVpnTopicEndpointTemplateEventMsgSpoolUsageThresholdToHclTerraform(struct?: MsgVpnTopicEndpointTemplateEventMsgSpoolUsageThreshold | cdktf.IResolvable): any {
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

export class MsgVpnTopicEndpointTemplateEventMsgSpoolUsageThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MsgVpnTopicEndpointTemplateEventMsgSpoolUsageThreshold | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MsgVpnTopicEndpointTemplateEventMsgSpoolUsageThreshold | cdktf.IResolvable | undefined) {
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
export interface MsgVpnTopicEndpointTemplateEventRejectLowPriorityMsgLimitThreshold {
  /**
  * The clear threshold for the value of this counter as a percentage of its maximum value. Falling below this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `60`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_topic_endpoint_template#clear_percent MsgVpnTopicEndpointTemplate#clear_percent}
  */
  readonly clearPercent?: number;
  /**
  * The clear threshold for the absolute value of this counter. Falling below this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default is not applicable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_topic_endpoint_template#clear_value MsgVpnTopicEndpointTemplate#clear_value}
  */
  readonly clearValue?: number;
  /**
  * The set threshold for the value of this counter as a percentage of its maximum value. Exceeding this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `80`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_topic_endpoint_template#set_percent MsgVpnTopicEndpointTemplate#set_percent}
  */
  readonly setPercent?: number;
  /**
  * The set threshold for the absolute value of this counter. Exceeding this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default is not applicable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_topic_endpoint_template#set_value MsgVpnTopicEndpointTemplate#set_value}
  */
  readonly setValue?: number;
}

export function msgVpnTopicEndpointTemplateEventRejectLowPriorityMsgLimitThresholdToTerraform(struct?: MsgVpnTopicEndpointTemplateEventRejectLowPriorityMsgLimitThreshold | cdktf.IResolvable): any {
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


export function msgVpnTopicEndpointTemplateEventRejectLowPriorityMsgLimitThresholdToHclTerraform(struct?: MsgVpnTopicEndpointTemplateEventRejectLowPriorityMsgLimitThreshold | cdktf.IResolvable): any {
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

export class MsgVpnTopicEndpointTemplateEventRejectLowPriorityMsgLimitThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MsgVpnTopicEndpointTemplateEventRejectLowPriorityMsgLimitThreshold | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MsgVpnTopicEndpointTemplateEventRejectLowPriorityMsgLimitThreshold | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_topic_endpoint_template solacebroker_msg_vpn_topic_endpoint_template}
*/
export class MsgVpnTopicEndpointTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "solacebroker_msg_vpn_topic_endpoint_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MsgVpnTopicEndpointTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MsgVpnTopicEndpointTemplate to import
  * @param importFromId The id of the existing MsgVpnTopicEndpointTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_topic_endpoint_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MsgVpnTopicEndpointTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "solacebroker_msg_vpn_topic_endpoint_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_topic_endpoint_template solacebroker_msg_vpn_topic_endpoint_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MsgVpnTopicEndpointTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: MsgVpnTopicEndpointTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'solacebroker_msg_vpn_topic_endpoint_template',
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
    this._accessType = config.accessType;
    this._consumerAckPropagationEnabled = config.consumerAckPropagationEnabled;
    this._deadMsgQueue = config.deadMsgQueue;
    this._deliveryDelay = config.deliveryDelay;
    this._eventBindCountThreshold.internalValue = config.eventBindCountThreshold;
    this._eventMsgSpoolUsageThreshold.internalValue = config.eventMsgSpoolUsageThreshold;
    this._eventRejectLowPriorityMsgLimitThreshold.internalValue = config.eventRejectLowPriorityMsgLimitThreshold;
    this._maxBindCount = config.maxBindCount;
    this._maxDeliveredUnackedMsgsPerFlow = config.maxDeliveredUnackedMsgsPerFlow;
    this._maxMsgSize = config.maxMsgSize;
    this._maxMsgSpoolUsage = config.maxMsgSpoolUsage;
    this._maxRedeliveryCount = config.maxRedeliveryCount;
    this._maxTtl = config.maxTtl;
    this._msgVpnName = config.msgVpnName;
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
    this._topicEndpointNameFilter = config.topicEndpointNameFilter;
    this._topicEndpointTemplateName = config.topicEndpointTemplateName;
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

  // event_bind_count_threshold - computed: false, optional: true, required: false
  private _eventBindCountThreshold = new MsgVpnTopicEndpointTemplateEventBindCountThresholdOutputReference(this, "event_bind_count_threshold");
  public get eventBindCountThreshold() {
    return this._eventBindCountThreshold;
  }
  public putEventBindCountThreshold(value: MsgVpnTopicEndpointTemplateEventBindCountThreshold) {
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
  private _eventMsgSpoolUsageThreshold = new MsgVpnTopicEndpointTemplateEventMsgSpoolUsageThresholdOutputReference(this, "event_msg_spool_usage_threshold");
  public get eventMsgSpoolUsageThreshold() {
    return this._eventMsgSpoolUsageThreshold;
  }
  public putEventMsgSpoolUsageThreshold(value: MsgVpnTopicEndpointTemplateEventMsgSpoolUsageThreshold) {
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
  private _eventRejectLowPriorityMsgLimitThreshold = new MsgVpnTopicEndpointTemplateEventRejectLowPriorityMsgLimitThresholdOutputReference(this, "event_reject_low_priority_msg_limit_threshold");
  public get eventRejectLowPriorityMsgLimitThreshold() {
    return this._eventRejectLowPriorityMsgLimitThreshold;
  }
  public putEventRejectLowPriorityMsgLimitThreshold(value: MsgVpnTopicEndpointTemplateEventRejectLowPriorityMsgLimitThreshold) {
    this._eventRejectLowPriorityMsgLimitThreshold.internalValue = value;
  }
  public resetEventRejectLowPriorityMsgLimitThreshold() {
    this._eventRejectLowPriorityMsgLimitThreshold.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventRejectLowPriorityMsgLimitThresholdInput() {
    return this._eventRejectLowPriorityMsgLimitThreshold.internalValue;
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

  // topic_endpoint_name_filter - computed: false, optional: true, required: false
  private _topicEndpointNameFilter?: string; 
  public get topicEndpointNameFilter() {
    return this.getStringAttribute('topic_endpoint_name_filter');
  }
  public set topicEndpointNameFilter(value: string) {
    this._topicEndpointNameFilter = value;
  }
  public resetTopicEndpointNameFilter() {
    this._topicEndpointNameFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topicEndpointNameFilterInput() {
    return this._topicEndpointNameFilter;
  }

  // topic_endpoint_template_name - computed: false, optional: false, required: true
  private _topicEndpointTemplateName?: string; 
  public get topicEndpointTemplateName() {
    return this.getStringAttribute('topic_endpoint_template_name');
  }
  public set topicEndpointTemplateName(value: string) {
    this._topicEndpointTemplateName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topicEndpointTemplateNameInput() {
    return this._topicEndpointTemplateName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_type: cdktf.stringToTerraform(this._accessType),
      consumer_ack_propagation_enabled: cdktf.booleanToTerraform(this._consumerAckPropagationEnabled),
      dead_msg_queue: cdktf.stringToTerraform(this._deadMsgQueue),
      delivery_delay: cdktf.numberToTerraform(this._deliveryDelay),
      event_bind_count_threshold: msgVpnTopicEndpointTemplateEventBindCountThresholdToTerraform(this._eventBindCountThreshold.internalValue),
      event_msg_spool_usage_threshold: msgVpnTopicEndpointTemplateEventMsgSpoolUsageThresholdToTerraform(this._eventMsgSpoolUsageThreshold.internalValue),
      event_reject_low_priority_msg_limit_threshold: msgVpnTopicEndpointTemplateEventRejectLowPriorityMsgLimitThresholdToTerraform(this._eventRejectLowPriorityMsgLimitThreshold.internalValue),
      max_bind_count: cdktf.numberToTerraform(this._maxBindCount),
      max_delivered_unacked_msgs_per_flow: cdktf.numberToTerraform(this._maxDeliveredUnackedMsgsPerFlow),
      max_msg_size: cdktf.numberToTerraform(this._maxMsgSize),
      max_msg_spool_usage: cdktf.numberToTerraform(this._maxMsgSpoolUsage),
      max_redelivery_count: cdktf.numberToTerraform(this._maxRedeliveryCount),
      max_ttl: cdktf.numberToTerraform(this._maxTtl),
      msg_vpn_name: cdktf.stringToTerraform(this._msgVpnName),
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
      topic_endpoint_name_filter: cdktf.stringToTerraform(this._topicEndpointNameFilter),
      topic_endpoint_template_name: cdktf.stringToTerraform(this._topicEndpointTemplateName),
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
      delivery_delay: {
        value: cdktf.numberToHclTerraform(this._deliveryDelay),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      event_bind_count_threshold: {
        value: msgVpnTopicEndpointTemplateEventBindCountThresholdToHclTerraform(this._eventBindCountThreshold.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MsgVpnTopicEndpointTemplateEventBindCountThreshold",
      },
      event_msg_spool_usage_threshold: {
        value: msgVpnTopicEndpointTemplateEventMsgSpoolUsageThresholdToHclTerraform(this._eventMsgSpoolUsageThreshold.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MsgVpnTopicEndpointTemplateEventMsgSpoolUsageThreshold",
      },
      event_reject_low_priority_msg_limit_threshold: {
        value: msgVpnTopicEndpointTemplateEventRejectLowPriorityMsgLimitThresholdToHclTerraform(this._eventRejectLowPriorityMsgLimitThreshold.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MsgVpnTopicEndpointTemplateEventRejectLowPriorityMsgLimitThreshold",
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
      topic_endpoint_name_filter: {
        value: cdktf.stringToHclTerraform(this._topicEndpointNameFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      topic_endpoint_template_name: {
        value: cdktf.stringToHclTerraform(this._topicEndpointTemplateName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
