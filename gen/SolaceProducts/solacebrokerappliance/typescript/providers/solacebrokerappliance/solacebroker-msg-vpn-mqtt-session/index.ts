// https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_msg_vpn_mqtt_session
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SolacebrokerMsgVpnMqttSessionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable or disable the MQTT Session. When disabled, the client is disconnected, new messages matching QoS 0 subscriptions are discarded, and new messages matching QoS 1 subscriptions are stored for future delivery.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_msg_vpn_mqtt_session#enabled SolacebrokerMsgVpnMqttSession#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The Client ID of the MQTT Session, which corresponds to the ClientId provided in the MQTT CONNECT packet.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_msg_vpn_mqtt_session#mqtt_session_client_id SolacebrokerMsgVpnMqttSession#mqtt_session_client_id}
  */
  readonly mqttSessionClientId: string;
  /**
  * The virtual router of the MQTT Session.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The allowed values and their meaning are:
  * 
  * <pre>
  * "primary" - The MQTT Session belongs to the primary virtual router.
  * "backup" - The MQTT Session belongs to the backup virtual router.
  * "auto" - The MQTT Session is automatically assigned a virtual router at creation, depending on the broker's active-standby role.
  * </pre>
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_msg_vpn_mqtt_session#mqtt_session_virtual_router SolacebrokerMsgVpnMqttSession#mqtt_session_virtual_router}
  */
  readonly mqttSessionVirtualRouter: string;
  /**
  * The name of the Message VPN.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_msg_vpn_mqtt_session#msg_vpn_name SolacebrokerMsgVpnMqttSession#msg_vpn_name}
  */
  readonly msgVpnName: string;
  /**
  * The owner of the MQTT Session. For externally-created sessions this defaults to the Client Username of the connecting client. For management-created sessions this defaults to empty.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_msg_vpn_mqtt_session#owner SolacebrokerMsgVpnMqttSession#owner}
  */
  readonly owner?: string;
  /**
  * Enable or disable the propagation of consumer acknowledgments (ACKs) received on the active replication Message VPN to the standby replication Message VPN.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `true`. Available since SEMP API version 2.14.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_msg_vpn_mqtt_session#queue_consumer_ack_propagation_enabled SolacebrokerMsgVpnMqttSession#queue_consumer_ack_propagation_enabled}
  */
  readonly queueConsumerAckPropagationEnabled?: boolean | cdktf.IResolvable;
  /**
  * The name of the Dead Message Queue (DMQ) used by the MQTT Session Queue.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `"#DEAD_MSG_QUEUE"`. Available since SEMP API version 2.14.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_msg_vpn_mqtt_session#queue_dead_msg_queue SolacebrokerMsgVpnMqttSession#queue_dead_msg_queue}
  */
  readonly queueDeadMsgQueue?: string;
  /**
  * Thresholds for the high number of the MQTT Session Queue Consumers Event, relative to `queue_max_bind_count`. Available since SEMP API version 2.14.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_msg_vpn_mqtt_session#queue_event_bind_count_threshold SolacebrokerMsgVpnMqttSession#queue_event_bind_count_threshold}
  */
  readonly queueEventBindCountThreshold?: SolacebrokerMsgVpnMqttSessionQueueEventBindCountThreshold;
  /**
  * The threshold for the Message Spool usage event of the MQTT Session Queue, relative to `queue_max_msg_spool_usage`. Available since SEMP API version 2.14.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_msg_vpn_mqtt_session#queue_event_msg_spool_usage_threshold SolacebrokerMsgVpnMqttSession#queue_event_msg_spool_usage_threshold}
  */
  readonly queueEventMsgSpoolUsageThreshold?: SolacebrokerMsgVpnMqttSessionQueueEventMsgSpoolUsageThreshold;
  /**
  * The threshold for the maximum allowed number of any priority messages queued in the MQTT Session Queue, relative to `queue_reject_low_priority_msg_limit`. Available since SEMP API version 2.14.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_msg_vpn_mqtt_session#queue_event_reject_low_priority_msg_limit_threshold SolacebrokerMsgVpnMqttSession#queue_event_reject_low_priority_msg_limit_threshold}
  */
  readonly queueEventRejectLowPriorityMsgLimitThreshold?: SolacebrokerMsgVpnMqttSessionQueueEventRejectLowPriorityMsgLimitThreshold;
  /**
  * The maximum number of consumer flows that can bind to the MQTT Session Queue.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `1000`. Available since SEMP API version 2.14.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_msg_vpn_mqtt_session#queue_max_bind_count SolacebrokerMsgVpnMqttSession#queue_max_bind_count}
  */
  readonly queueMaxBindCount?: number;
  /**
  * The maximum number of messages delivered but not acknowledged per flow for the MQTT Session Queue.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `10000`. Available since SEMP API version 2.14.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_msg_vpn_mqtt_session#queue_max_delivered_unacked_msgs_per_flow SolacebrokerMsgVpnMqttSession#queue_max_delivered_unacked_msgs_per_flow}
  */
  readonly queueMaxDeliveredUnackedMsgsPerFlow?: number;
  /**
  * The maximum message size allowed in the MQTT Session Queue, in bytes (B).
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `10000000`. Available since SEMP API version 2.14.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_msg_vpn_mqtt_session#queue_max_msg_size SolacebrokerMsgVpnMqttSession#queue_max_msg_size}
  */
  readonly queueMaxMsgSize?: number;
  /**
  * The maximum message spool usage allowed by the MQTT Session Queue, in megabytes (MB). A value of 0 only allows spooling of the last message received and disables quota checking.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `5000`. Available since SEMP API version 2.14.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_msg_vpn_mqtt_session#queue_max_msg_spool_usage SolacebrokerMsgVpnMqttSession#queue_max_msg_spool_usage}
  */
  readonly queueMaxMsgSpoolUsage?: number;
  /**
  * The maximum number of times the MQTT Session Queue will attempt redelivery of a message prior to it being discarded or moved to the DMQ. A value of 0 means to retry forever.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `0`. Available since SEMP API version 2.14.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_msg_vpn_mqtt_session#queue_max_redelivery_count SolacebrokerMsgVpnMqttSession#queue_max_redelivery_count}
  */
  readonly queueMaxRedeliveryCount?: number;
  /**
  * The maximum time in seconds a message can stay in the MQTT Session Queue when `queue_respect_ttl_enabled` is `"true"`. A message expires when the lesser of the sender assigned time-to-live (TTL) in the message and the `queue_max_ttl` configured for the MQTT Session Queue, is exceeded. A value of 0 disables expiry.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `0`. Available since SEMP API version 2.14.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_msg_vpn_mqtt_session#queue_max_ttl SolacebrokerMsgVpnMqttSession#queue_max_ttl}
  */
  readonly queueMaxTtl?: number;
  /**
  * Enable or disable the checking of low priority messages against the `queue_reject_low_priority_msg_limit`. This may only be enabled if `queue_reject_msg_to_sender_on_discard_behavior` does not have a value of `"never"`.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`. Available since SEMP API version 2.14.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_msg_vpn_mqtt_session#queue_reject_low_priority_msg_enabled SolacebrokerMsgVpnMqttSession#queue_reject_low_priority_msg_enabled}
  */
  readonly queueRejectLowPriorityMsgEnabled?: boolean | cdktf.IResolvable;
  /**
  * The number of messages of any priority in the MQTT Session Queue above which low priority messages are not admitted but higher priority messages are allowed.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `0`. Available since SEMP API version 2.14.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_msg_vpn_mqtt_session#queue_reject_low_priority_msg_limit SolacebrokerMsgVpnMqttSession#queue_reject_low_priority_msg_limit}
  */
  readonly queueRejectLowPriorityMsgLimit?: number;
  /**
  * Determines when to return negative acknowledgments (NACKs) to sending clients on message discards. Note that NACKs cause the message to not be delivered to any destination and Transacted Session commits to fail.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as queue_reject_low_priority_msg_enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `"when-queue-enabled"`. The allowed values and their meaning are:
  * 
  * <pre>
  * "never" - Silently discard messages.
  * "when-queue-enabled" - NACK each message discard back to the client, except messages that are discarded because an endpoint is administratively disabled.
  * "always" - NACK each message discard back to the client, including messages that are discarded because an endpoint is administratively disabled.
  * </pre>
  *  Available since SEMP API version 2.14.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_msg_vpn_mqtt_session#queue_reject_msg_to_sender_on_discard_behavior SolacebrokerMsgVpnMqttSession#queue_reject_msg_to_sender_on_discard_behavior}
  */
  readonly queueRejectMsgToSenderOnDiscardBehavior?: string;
  /**
  * Enable or disable the respecting of DMQ Eligible for messages in the MQTT Session Queue.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`. Available since SEMP API version 2.49.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_msg_vpn_mqtt_session#queue_respect_dmq_eligible_enabled SolacebrokerMsgVpnMqttSession#queue_respect_dmq_eligible_enabled}
  */
  readonly queueRespectDmqEligibleEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enable or disable the respecting of the time-to-live (TTL) for messages in the MQTT Session Queue. When enabled, expired messages are discarded or moved to the DMQ.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`. Available since SEMP API version 2.14.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_msg_vpn_mqtt_session#queue_respect_ttl_enabled SolacebrokerMsgVpnMqttSession#queue_respect_ttl_enabled}
  */
  readonly queueRespectTtlEnabled?: boolean | cdktf.IResolvable;
}
export interface SolacebrokerMsgVpnMqttSessionQueueEventBindCountThreshold {
  /**
  * The clear threshold for the value of this counter as a percentage of its maximum value. Falling below this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `60`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_msg_vpn_mqtt_session#clear_percent SolacebrokerMsgVpnMqttSession#clear_percent}
  */
  readonly clearPercent?: number;
  /**
  * The clear threshold for the absolute value of this counter. Falling below this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default is not applicable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_msg_vpn_mqtt_session#clear_value SolacebrokerMsgVpnMqttSession#clear_value}
  */
  readonly clearValue?: number;
  /**
  * The set threshold for the value of this counter as a percentage of its maximum value. Exceeding this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `80`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_msg_vpn_mqtt_session#set_percent SolacebrokerMsgVpnMqttSession#set_percent}
  */
  readonly setPercent?: number;
  /**
  * The set threshold for the absolute value of this counter. Exceeding this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default is not applicable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_msg_vpn_mqtt_session#set_value SolacebrokerMsgVpnMqttSession#set_value}
  */
  readonly setValue?: number;
}

export function solacebrokerMsgVpnMqttSessionQueueEventBindCountThresholdToTerraform(struct?: SolacebrokerMsgVpnMqttSessionQueueEventBindCountThreshold | cdktf.IResolvable): any {
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


export function solacebrokerMsgVpnMqttSessionQueueEventBindCountThresholdToHclTerraform(struct?: SolacebrokerMsgVpnMqttSessionQueueEventBindCountThreshold | cdktf.IResolvable): any {
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

export class SolacebrokerMsgVpnMqttSessionQueueEventBindCountThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SolacebrokerMsgVpnMqttSessionQueueEventBindCountThreshold | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SolacebrokerMsgVpnMqttSessionQueueEventBindCountThreshold | cdktf.IResolvable | undefined) {
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
export interface SolacebrokerMsgVpnMqttSessionQueueEventMsgSpoolUsageThreshold {
  /**
  * The clear threshold for the value of this counter as a percentage of its maximum value. Falling below this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `18`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_msg_vpn_mqtt_session#clear_percent SolacebrokerMsgVpnMqttSession#clear_percent}
  */
  readonly clearPercent?: number;
  /**
  * The clear threshold for the absolute value of this counter. Falling below this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default is not applicable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_msg_vpn_mqtt_session#clear_value SolacebrokerMsgVpnMqttSession#clear_value}
  */
  readonly clearValue?: number;
  /**
  * The set threshold for the value of this counter as a percentage of its maximum value. Exceeding this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `25`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_msg_vpn_mqtt_session#set_percent SolacebrokerMsgVpnMqttSession#set_percent}
  */
  readonly setPercent?: number;
  /**
  * The set threshold for the absolute value of this counter. Exceeding this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default is not applicable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_msg_vpn_mqtt_session#set_value SolacebrokerMsgVpnMqttSession#set_value}
  */
  readonly setValue?: number;
}

export function solacebrokerMsgVpnMqttSessionQueueEventMsgSpoolUsageThresholdToTerraform(struct?: SolacebrokerMsgVpnMqttSessionQueueEventMsgSpoolUsageThreshold | cdktf.IResolvable): any {
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


export function solacebrokerMsgVpnMqttSessionQueueEventMsgSpoolUsageThresholdToHclTerraform(struct?: SolacebrokerMsgVpnMqttSessionQueueEventMsgSpoolUsageThreshold | cdktf.IResolvable): any {
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

export class SolacebrokerMsgVpnMqttSessionQueueEventMsgSpoolUsageThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SolacebrokerMsgVpnMqttSessionQueueEventMsgSpoolUsageThreshold | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SolacebrokerMsgVpnMqttSessionQueueEventMsgSpoolUsageThreshold | cdktf.IResolvable | undefined) {
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
export interface SolacebrokerMsgVpnMqttSessionQueueEventRejectLowPriorityMsgLimitThreshold {
  /**
  * The clear threshold for the value of this counter as a percentage of its maximum value. Falling below this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `60`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_msg_vpn_mqtt_session#clear_percent SolacebrokerMsgVpnMqttSession#clear_percent}
  */
  readonly clearPercent?: number;
  /**
  * The clear threshold for the absolute value of this counter. Falling below this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default is not applicable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_msg_vpn_mqtt_session#clear_value SolacebrokerMsgVpnMqttSession#clear_value}
  */
  readonly clearValue?: number;
  /**
  * The set threshold for the value of this counter as a percentage of its maximum value. Exceeding this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `80`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_msg_vpn_mqtt_session#set_percent SolacebrokerMsgVpnMqttSession#set_percent}
  */
  readonly setPercent?: number;
  /**
  * The set threshold for the absolute value of this counter. Exceeding this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default is not applicable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_msg_vpn_mqtt_session#set_value SolacebrokerMsgVpnMqttSession#set_value}
  */
  readonly setValue?: number;
}

export function solacebrokerMsgVpnMqttSessionQueueEventRejectLowPriorityMsgLimitThresholdToTerraform(struct?: SolacebrokerMsgVpnMqttSessionQueueEventRejectLowPriorityMsgLimitThreshold | cdktf.IResolvable): any {
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


export function solacebrokerMsgVpnMqttSessionQueueEventRejectLowPriorityMsgLimitThresholdToHclTerraform(struct?: SolacebrokerMsgVpnMqttSessionQueueEventRejectLowPriorityMsgLimitThreshold | cdktf.IResolvable): any {
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

export class SolacebrokerMsgVpnMqttSessionQueueEventRejectLowPriorityMsgLimitThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SolacebrokerMsgVpnMqttSessionQueueEventRejectLowPriorityMsgLimitThreshold | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SolacebrokerMsgVpnMqttSessionQueueEventRejectLowPriorityMsgLimitThreshold | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_msg_vpn_mqtt_session solacebroker_msg_vpn_mqtt_session}
*/
export class SolacebrokerMsgVpnMqttSession extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "solacebroker_msg_vpn_mqtt_session";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SolacebrokerMsgVpnMqttSession resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SolacebrokerMsgVpnMqttSession to import
  * @param importFromId The id of the existing SolacebrokerMsgVpnMqttSession that should be imported. Refer to the {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_msg_vpn_mqtt_session#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SolacebrokerMsgVpnMqttSession to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "solacebroker_msg_vpn_mqtt_session", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_msg_vpn_mqtt_session solacebroker_msg_vpn_mqtt_session} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SolacebrokerMsgVpnMqttSessionConfig
  */
  public constructor(scope: Construct, id: string, config: SolacebrokerMsgVpnMqttSessionConfig) {
    super(scope, id, {
      terraformResourceType: 'solacebroker_msg_vpn_mqtt_session',
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
    this._enabled = config.enabled;
    this._mqttSessionClientId = config.mqttSessionClientId;
    this._mqttSessionVirtualRouter = config.mqttSessionVirtualRouter;
    this._msgVpnName = config.msgVpnName;
    this._owner = config.owner;
    this._queueConsumerAckPropagationEnabled = config.queueConsumerAckPropagationEnabled;
    this._queueDeadMsgQueue = config.queueDeadMsgQueue;
    this._queueEventBindCountThreshold.internalValue = config.queueEventBindCountThreshold;
    this._queueEventMsgSpoolUsageThreshold.internalValue = config.queueEventMsgSpoolUsageThreshold;
    this._queueEventRejectLowPriorityMsgLimitThreshold.internalValue = config.queueEventRejectLowPriorityMsgLimitThreshold;
    this._queueMaxBindCount = config.queueMaxBindCount;
    this._queueMaxDeliveredUnackedMsgsPerFlow = config.queueMaxDeliveredUnackedMsgsPerFlow;
    this._queueMaxMsgSize = config.queueMaxMsgSize;
    this._queueMaxMsgSpoolUsage = config.queueMaxMsgSpoolUsage;
    this._queueMaxRedeliveryCount = config.queueMaxRedeliveryCount;
    this._queueMaxTtl = config.queueMaxTtl;
    this._queueRejectLowPriorityMsgEnabled = config.queueRejectLowPriorityMsgEnabled;
    this._queueRejectLowPriorityMsgLimit = config.queueRejectLowPriorityMsgLimit;
    this._queueRejectMsgToSenderOnDiscardBehavior = config.queueRejectMsgToSenderOnDiscardBehavior;
    this._queueRespectDmqEligibleEnabled = config.queueRespectDmqEligibleEnabled;
    this._queueRespectTtlEnabled = config.queueRespectTtlEnabled;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // mqtt_session_client_id - computed: false, optional: false, required: true
  private _mqttSessionClientId?: string; 
  public get mqttSessionClientId() {
    return this.getStringAttribute('mqtt_session_client_id');
  }
  public set mqttSessionClientId(value: string) {
    this._mqttSessionClientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mqttSessionClientIdInput() {
    return this._mqttSessionClientId;
  }

  // mqtt_session_virtual_router - computed: false, optional: false, required: true
  private _mqttSessionVirtualRouter?: string; 
  public get mqttSessionVirtualRouter() {
    return this.getStringAttribute('mqtt_session_virtual_router');
  }
  public set mqttSessionVirtualRouter(value: string) {
    this._mqttSessionVirtualRouter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mqttSessionVirtualRouterInput() {
    return this._mqttSessionVirtualRouter;
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

  // queue_consumer_ack_propagation_enabled - computed: false, optional: true, required: false
  private _queueConsumerAckPropagationEnabled?: boolean | cdktf.IResolvable; 
  public get queueConsumerAckPropagationEnabled() {
    return this.getBooleanAttribute('queue_consumer_ack_propagation_enabled');
  }
  public set queueConsumerAckPropagationEnabled(value: boolean | cdktf.IResolvable) {
    this._queueConsumerAckPropagationEnabled = value;
  }
  public resetQueueConsumerAckPropagationEnabled() {
    this._queueConsumerAckPropagationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueConsumerAckPropagationEnabledInput() {
    return this._queueConsumerAckPropagationEnabled;
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

  // queue_event_bind_count_threshold - computed: false, optional: true, required: false
  private _queueEventBindCountThreshold = new SolacebrokerMsgVpnMqttSessionQueueEventBindCountThresholdOutputReference(this, "queue_event_bind_count_threshold");
  public get queueEventBindCountThreshold() {
    return this._queueEventBindCountThreshold;
  }
  public putQueueEventBindCountThreshold(value: SolacebrokerMsgVpnMqttSessionQueueEventBindCountThreshold) {
    this._queueEventBindCountThreshold.internalValue = value;
  }
  public resetQueueEventBindCountThreshold() {
    this._queueEventBindCountThreshold.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueEventBindCountThresholdInput() {
    return this._queueEventBindCountThreshold.internalValue;
  }

  // queue_event_msg_spool_usage_threshold - computed: false, optional: true, required: false
  private _queueEventMsgSpoolUsageThreshold = new SolacebrokerMsgVpnMqttSessionQueueEventMsgSpoolUsageThresholdOutputReference(this, "queue_event_msg_spool_usage_threshold");
  public get queueEventMsgSpoolUsageThreshold() {
    return this._queueEventMsgSpoolUsageThreshold;
  }
  public putQueueEventMsgSpoolUsageThreshold(value: SolacebrokerMsgVpnMqttSessionQueueEventMsgSpoolUsageThreshold) {
    this._queueEventMsgSpoolUsageThreshold.internalValue = value;
  }
  public resetQueueEventMsgSpoolUsageThreshold() {
    this._queueEventMsgSpoolUsageThreshold.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueEventMsgSpoolUsageThresholdInput() {
    return this._queueEventMsgSpoolUsageThreshold.internalValue;
  }

  // queue_event_reject_low_priority_msg_limit_threshold - computed: false, optional: true, required: false
  private _queueEventRejectLowPriorityMsgLimitThreshold = new SolacebrokerMsgVpnMqttSessionQueueEventRejectLowPriorityMsgLimitThresholdOutputReference(this, "queue_event_reject_low_priority_msg_limit_threshold");
  public get queueEventRejectLowPriorityMsgLimitThreshold() {
    return this._queueEventRejectLowPriorityMsgLimitThreshold;
  }
  public putQueueEventRejectLowPriorityMsgLimitThreshold(value: SolacebrokerMsgVpnMqttSessionQueueEventRejectLowPriorityMsgLimitThreshold) {
    this._queueEventRejectLowPriorityMsgLimitThreshold.internalValue = value;
  }
  public resetQueueEventRejectLowPriorityMsgLimitThreshold() {
    this._queueEventRejectLowPriorityMsgLimitThreshold.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueEventRejectLowPriorityMsgLimitThresholdInput() {
    return this._queueEventRejectLowPriorityMsgLimitThreshold.internalValue;
  }

  // queue_max_bind_count - computed: false, optional: true, required: false
  private _queueMaxBindCount?: number; 
  public get queueMaxBindCount() {
    return this.getNumberAttribute('queue_max_bind_count');
  }
  public set queueMaxBindCount(value: number) {
    this._queueMaxBindCount = value;
  }
  public resetQueueMaxBindCount() {
    this._queueMaxBindCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueMaxBindCountInput() {
    return this._queueMaxBindCount;
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

  // queue_max_msg_size - computed: false, optional: true, required: false
  private _queueMaxMsgSize?: number; 
  public get queueMaxMsgSize() {
    return this.getNumberAttribute('queue_max_msg_size');
  }
  public set queueMaxMsgSize(value: number) {
    this._queueMaxMsgSize = value;
  }
  public resetQueueMaxMsgSize() {
    this._queueMaxMsgSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueMaxMsgSizeInput() {
    return this._queueMaxMsgSize;
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

  // queue_reject_low_priority_msg_enabled - computed: false, optional: true, required: false
  private _queueRejectLowPriorityMsgEnabled?: boolean | cdktf.IResolvable; 
  public get queueRejectLowPriorityMsgEnabled() {
    return this.getBooleanAttribute('queue_reject_low_priority_msg_enabled');
  }
  public set queueRejectLowPriorityMsgEnabled(value: boolean | cdktf.IResolvable) {
    this._queueRejectLowPriorityMsgEnabled = value;
  }
  public resetQueueRejectLowPriorityMsgEnabled() {
    this._queueRejectLowPriorityMsgEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueRejectLowPriorityMsgEnabledInput() {
    return this._queueRejectLowPriorityMsgEnabled;
  }

  // queue_reject_low_priority_msg_limit - computed: false, optional: true, required: false
  private _queueRejectLowPriorityMsgLimit?: number; 
  public get queueRejectLowPriorityMsgLimit() {
    return this.getNumberAttribute('queue_reject_low_priority_msg_limit');
  }
  public set queueRejectLowPriorityMsgLimit(value: number) {
    this._queueRejectLowPriorityMsgLimit = value;
  }
  public resetQueueRejectLowPriorityMsgLimit() {
    this._queueRejectLowPriorityMsgLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueRejectLowPriorityMsgLimitInput() {
    return this._queueRejectLowPriorityMsgLimit;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled: cdktf.booleanToTerraform(this._enabled),
      mqtt_session_client_id: cdktf.stringToTerraform(this._mqttSessionClientId),
      mqtt_session_virtual_router: cdktf.stringToTerraform(this._mqttSessionVirtualRouter),
      msg_vpn_name: cdktf.stringToTerraform(this._msgVpnName),
      owner: cdktf.stringToTerraform(this._owner),
      queue_consumer_ack_propagation_enabled: cdktf.booleanToTerraform(this._queueConsumerAckPropagationEnabled),
      queue_dead_msg_queue: cdktf.stringToTerraform(this._queueDeadMsgQueue),
      queue_event_bind_count_threshold: solacebrokerMsgVpnMqttSessionQueueEventBindCountThresholdToTerraform(this._queueEventBindCountThreshold.internalValue),
      queue_event_msg_spool_usage_threshold: solacebrokerMsgVpnMqttSessionQueueEventMsgSpoolUsageThresholdToTerraform(this._queueEventMsgSpoolUsageThreshold.internalValue),
      queue_event_reject_low_priority_msg_limit_threshold: solacebrokerMsgVpnMqttSessionQueueEventRejectLowPriorityMsgLimitThresholdToTerraform(this._queueEventRejectLowPriorityMsgLimitThreshold.internalValue),
      queue_max_bind_count: cdktf.numberToTerraform(this._queueMaxBindCount),
      queue_max_delivered_unacked_msgs_per_flow: cdktf.numberToTerraform(this._queueMaxDeliveredUnackedMsgsPerFlow),
      queue_max_msg_size: cdktf.numberToTerraform(this._queueMaxMsgSize),
      queue_max_msg_spool_usage: cdktf.numberToTerraform(this._queueMaxMsgSpoolUsage),
      queue_max_redelivery_count: cdktf.numberToTerraform(this._queueMaxRedeliveryCount),
      queue_max_ttl: cdktf.numberToTerraform(this._queueMaxTtl),
      queue_reject_low_priority_msg_enabled: cdktf.booleanToTerraform(this._queueRejectLowPriorityMsgEnabled),
      queue_reject_low_priority_msg_limit: cdktf.numberToTerraform(this._queueRejectLowPriorityMsgLimit),
      queue_reject_msg_to_sender_on_discard_behavior: cdktf.stringToTerraform(this._queueRejectMsgToSenderOnDiscardBehavior),
      queue_respect_dmq_eligible_enabled: cdktf.booleanToTerraform(this._queueRespectDmqEligibleEnabled),
      queue_respect_ttl_enabled: cdktf.booleanToTerraform(this._queueRespectTtlEnabled),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mqtt_session_client_id: {
        value: cdktf.stringToHclTerraform(this._mqttSessionClientId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mqtt_session_virtual_router: {
        value: cdktf.stringToHclTerraform(this._mqttSessionVirtualRouter),
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
      owner: {
        value: cdktf.stringToHclTerraform(this._owner),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      queue_consumer_ack_propagation_enabled: {
        value: cdktf.booleanToHclTerraform(this._queueConsumerAckPropagationEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      queue_dead_msg_queue: {
        value: cdktf.stringToHclTerraform(this._queueDeadMsgQueue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      queue_event_bind_count_threshold: {
        value: solacebrokerMsgVpnMqttSessionQueueEventBindCountThresholdToHclTerraform(this._queueEventBindCountThreshold.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SolacebrokerMsgVpnMqttSessionQueueEventBindCountThreshold",
      },
      queue_event_msg_spool_usage_threshold: {
        value: solacebrokerMsgVpnMqttSessionQueueEventMsgSpoolUsageThresholdToHclTerraform(this._queueEventMsgSpoolUsageThreshold.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SolacebrokerMsgVpnMqttSessionQueueEventMsgSpoolUsageThreshold",
      },
      queue_event_reject_low_priority_msg_limit_threshold: {
        value: solacebrokerMsgVpnMqttSessionQueueEventRejectLowPriorityMsgLimitThresholdToHclTerraform(this._queueEventRejectLowPriorityMsgLimitThreshold.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SolacebrokerMsgVpnMqttSessionQueueEventRejectLowPriorityMsgLimitThreshold",
      },
      queue_max_bind_count: {
        value: cdktf.numberToHclTerraform(this._queueMaxBindCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      queue_max_delivered_unacked_msgs_per_flow: {
        value: cdktf.numberToHclTerraform(this._queueMaxDeliveredUnackedMsgsPerFlow),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      queue_max_msg_size: {
        value: cdktf.numberToHclTerraform(this._queueMaxMsgSize),
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
      queue_reject_low_priority_msg_enabled: {
        value: cdktf.booleanToHclTerraform(this._queueRejectLowPriorityMsgEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      queue_reject_low_priority_msg_limit: {
        value: cdktf.numberToHclTerraform(this._queueRejectLowPriorityMsgLimit),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
