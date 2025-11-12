// https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_telemetry_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SolacebrokerMsgVpnTelemetryProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the Message VPN.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_telemetry_profile#msg_vpn_name SolacebrokerMsgVpnTelemetryProfile#msg_vpn_name}
  */
  readonly msgVpnName: string;
  /**
  * The thresholds for the Queue consumer flows event, relative to `queue_max_bind_count`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_telemetry_profile#queue_event_bind_count_threshold SolacebrokerMsgVpnTelemetryProfile#queue_event_bind_count_threshold}
  */
  readonly queueEventBindCountThreshold?: SolacebrokerMsgVpnTelemetryProfileQueueEventBindCountThreshold;
  /**
  * The thresholds for the message spool usage event of the Queue, relative to `queue_max_msg_spool_usage`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_telemetry_profile#queue_event_msg_spool_usage_threshold SolacebrokerMsgVpnTelemetryProfile#queue_event_msg_spool_usage_threshold}
  */
  readonly queueEventMsgSpoolUsageThreshold?: SolacebrokerMsgVpnTelemetryProfileQueueEventMsgSpoolUsageThreshold;
  /**
  * The maximum number of consumer flows that can bind to the Queue.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `1000`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_telemetry_profile#queue_max_bind_count SolacebrokerMsgVpnTelemetryProfile#queue_max_bind_count}
  */
  readonly queueMaxBindCount?: number;
  /**
  * The maximum message spool usage allowed by the Queue, in megabytes (MB).
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `800000`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_telemetry_profile#queue_max_msg_spool_usage SolacebrokerMsgVpnTelemetryProfile#queue_max_msg_spool_usage}
  */
  readonly queueMaxMsgSpoolUsage?: number;
  /**
  * The default action to take when a receiver client connects to the broker.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `"disallow"`. The allowed values and their meaning are:
  * 
  * <pre>
  * "allow" - Allow client connection unless an exception is found for it.
  * "disallow" - Disallow client connection unless an exception is found for it.
  * </pre>
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_telemetry_profile#receiver_acl_connect_default_action SolacebrokerMsgVpnTelemetryProfile#receiver_acl_connect_default_action}
  */
  readonly receiverAclConnectDefaultAction?: string;
  /**
  * Enable or disable the ability for receiver clients to consume from the #telemetry queue.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_telemetry_profile#receiver_enabled SolacebrokerMsgVpnTelemetryProfile#receiver_enabled}
  */
  readonly receiverEnabled?: boolean | cdktf.IResolvable;
  /**
  * The thresholds for the receiver connection count event, relative to `receiver_max_connection_count_per_client_username`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_telemetry_profile#receiver_event_connection_count_per_client_username_threshold SolacebrokerMsgVpnTelemetryProfile#receiver_event_connection_count_per_client_username_threshold}
  */
  readonly receiverEventConnectionCountPerClientUsernameThreshold?: SolacebrokerMsgVpnTelemetryProfileReceiverEventConnectionCountPerClientUsernameThreshold;
  /**
  * The maximum number of receiver connections per Client Username.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default is the maximum value supported by the platform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_telemetry_profile#receiver_max_connection_count_per_client_username SolacebrokerMsgVpnTelemetryProfile#receiver_max_connection_count_per_client_username}
  */
  readonly receiverMaxConnectionCountPerClientUsername?: number;
  /**
  * The TCP initial congestion window size for clients using the Client Profile, in multiples of the TCP Maximum Segment Size (MSS). Changing the value from its default of 2 results in non-compliance with RFC 2581. Contact support before changing this value.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `2`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_telemetry_profile#receiver_tcp_congestion_window_size SolacebrokerMsgVpnTelemetryProfile#receiver_tcp_congestion_window_size}
  */
  readonly receiverTcpCongestionWindowSize?: number;
  /**
  * The number of TCP keepalive retransmissions to a client using the Client Profile before declaring that it is not available.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `5`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_telemetry_profile#receiver_tcp_keepalive_count SolacebrokerMsgVpnTelemetryProfile#receiver_tcp_keepalive_count}
  */
  readonly receiverTcpKeepaliveCount?: number;
  /**
  * The amount of time a client connection using the Client Profile must remain idle before TCP begins sending keepalive probes, in seconds.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `3`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_telemetry_profile#receiver_tcp_keepalive_idle_time SolacebrokerMsgVpnTelemetryProfile#receiver_tcp_keepalive_idle_time}
  */
  readonly receiverTcpKeepaliveIdleTime?: number;
  /**
  * The amount of time between TCP keepalive retransmissions to a client using the Client Profile when no acknowledgment is received, in seconds.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_telemetry_profile#receiver_tcp_keepalive_interval SolacebrokerMsgVpnTelemetryProfile#receiver_tcp_keepalive_interval}
  */
  readonly receiverTcpKeepaliveInterval?: number;
  /**
  * The TCP maximum segment size for clients using the Client Profile, in bytes. Changes are applied to all existing connections.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `1460`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_telemetry_profile#receiver_tcp_max_segment_size SolacebrokerMsgVpnTelemetryProfile#receiver_tcp_max_segment_size}
  */
  readonly receiverTcpMaxSegmentSize?: number;
  /**
  * The TCP maximum window size for clients using the Client Profile, in kilobytes. Changes are applied to all existing connections. This setting is ignored on the software broker.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `256`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_telemetry_profile#receiver_tcp_max_window_size SolacebrokerMsgVpnTelemetryProfile#receiver_tcp_max_window_size}
  */
  readonly receiverTcpMaxWindowSize?: number;
  /**
  * The name of the Telemetry Profile.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_telemetry_profile#telemetry_profile_name SolacebrokerMsgVpnTelemetryProfile#telemetry_profile_name}
  */
  readonly telemetryProfileName: string;
  /**
  * Enable or disable generation of all trace span data messages. When enabled, the state of configured trace filters control which messages get traced. When disabled, trace span data messages are never generated, regardless of the state of trace filters.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_telemetry_profile#trace_enabled SolacebrokerMsgVpnTelemetryProfile#trace_enabled}
  */
  readonly traceEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enable or disable generation of send spans. For the most complete view of broker message processing, this should be enabled. If the information provided by send spans are not needed, send spans can be disabled to reduce the performance impact of tracing.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `true`. Available since SEMP API version 2.36.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_telemetry_profile#trace_send_span_generation_enabled SolacebrokerMsgVpnTelemetryProfile#trace_send_span_generation_enabled}
  */
  readonly traceSendSpanGenerationEnabled?: boolean | cdktf.IResolvable;
}
export interface SolacebrokerMsgVpnTelemetryProfileQueueEventBindCountThreshold {
  /**
  * The clear threshold for the value of this counter as a percentage of its maximum value. Falling below this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `60`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_telemetry_profile#clear_percent SolacebrokerMsgVpnTelemetryProfile#clear_percent}
  */
  readonly clearPercent?: number;
  /**
  * The clear threshold for the absolute value of this counter. Falling below this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default is not applicable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_telemetry_profile#clear_value SolacebrokerMsgVpnTelemetryProfile#clear_value}
  */
  readonly clearValue?: number;
  /**
  * The set threshold for the value of this counter as a percentage of its maximum value. Exceeding this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `80`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_telemetry_profile#set_percent SolacebrokerMsgVpnTelemetryProfile#set_percent}
  */
  readonly setPercent?: number;
  /**
  * The set threshold for the absolute value of this counter. Exceeding this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default is not applicable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_telemetry_profile#set_value SolacebrokerMsgVpnTelemetryProfile#set_value}
  */
  readonly setValue?: number;
}

export function solacebrokerMsgVpnTelemetryProfileQueueEventBindCountThresholdToTerraform(struct?: SolacebrokerMsgVpnTelemetryProfileQueueEventBindCountThreshold | cdktf.IResolvable): any {
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


export function solacebrokerMsgVpnTelemetryProfileQueueEventBindCountThresholdToHclTerraform(struct?: SolacebrokerMsgVpnTelemetryProfileQueueEventBindCountThreshold | cdktf.IResolvable): any {
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

export class SolacebrokerMsgVpnTelemetryProfileQueueEventBindCountThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SolacebrokerMsgVpnTelemetryProfileQueueEventBindCountThreshold | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SolacebrokerMsgVpnTelemetryProfileQueueEventBindCountThreshold | cdktf.IResolvable | undefined) {
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
export interface SolacebrokerMsgVpnTelemetryProfileQueueEventMsgSpoolUsageThreshold {
  /**
  * The clear threshold for the value of this counter as a percentage of its maximum value. Falling below this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_telemetry_profile#clear_percent SolacebrokerMsgVpnTelemetryProfile#clear_percent}
  */
  readonly clearPercent?: number;
  /**
  * The clear threshold for the absolute value of this counter. Falling below this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default is not applicable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_telemetry_profile#clear_value SolacebrokerMsgVpnTelemetryProfile#clear_value}
  */
  readonly clearValue?: number;
  /**
  * The set threshold for the value of this counter as a percentage of its maximum value. Exceeding this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `2`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_telemetry_profile#set_percent SolacebrokerMsgVpnTelemetryProfile#set_percent}
  */
  readonly setPercent?: number;
  /**
  * The set threshold for the absolute value of this counter. Exceeding this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default is not applicable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_telemetry_profile#set_value SolacebrokerMsgVpnTelemetryProfile#set_value}
  */
  readonly setValue?: number;
}

export function solacebrokerMsgVpnTelemetryProfileQueueEventMsgSpoolUsageThresholdToTerraform(struct?: SolacebrokerMsgVpnTelemetryProfileQueueEventMsgSpoolUsageThreshold | cdktf.IResolvable): any {
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


export function solacebrokerMsgVpnTelemetryProfileQueueEventMsgSpoolUsageThresholdToHclTerraform(struct?: SolacebrokerMsgVpnTelemetryProfileQueueEventMsgSpoolUsageThreshold | cdktf.IResolvable): any {
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

export class SolacebrokerMsgVpnTelemetryProfileQueueEventMsgSpoolUsageThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SolacebrokerMsgVpnTelemetryProfileQueueEventMsgSpoolUsageThreshold | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SolacebrokerMsgVpnTelemetryProfileQueueEventMsgSpoolUsageThreshold | cdktf.IResolvable | undefined) {
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
export interface SolacebrokerMsgVpnTelemetryProfileReceiverEventConnectionCountPerClientUsernameThreshold {
  /**
  * The clear threshold for the value of this counter as a percentage of its maximum value. Falling below this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `60`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_telemetry_profile#clear_percent SolacebrokerMsgVpnTelemetryProfile#clear_percent}
  */
  readonly clearPercent?: number;
  /**
  * The clear threshold for the absolute value of this counter. Falling below this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default is not applicable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_telemetry_profile#clear_value SolacebrokerMsgVpnTelemetryProfile#clear_value}
  */
  readonly clearValue?: number;
  /**
  * The set threshold for the value of this counter as a percentage of its maximum value. Exceeding this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `80`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_telemetry_profile#set_percent SolacebrokerMsgVpnTelemetryProfile#set_percent}
  */
  readonly setPercent?: number;
  /**
  * The set threshold for the absolute value of this counter. Exceeding this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". This attribute may not be returned in a GET. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default is not applicable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_telemetry_profile#set_value SolacebrokerMsgVpnTelemetryProfile#set_value}
  */
  readonly setValue?: number;
}

export function solacebrokerMsgVpnTelemetryProfileReceiverEventConnectionCountPerClientUsernameThresholdToTerraform(struct?: SolacebrokerMsgVpnTelemetryProfileReceiverEventConnectionCountPerClientUsernameThreshold | cdktf.IResolvable): any {
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


export function solacebrokerMsgVpnTelemetryProfileReceiverEventConnectionCountPerClientUsernameThresholdToHclTerraform(struct?: SolacebrokerMsgVpnTelemetryProfileReceiverEventConnectionCountPerClientUsernameThreshold | cdktf.IResolvable): any {
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

export class SolacebrokerMsgVpnTelemetryProfileReceiverEventConnectionCountPerClientUsernameThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SolacebrokerMsgVpnTelemetryProfileReceiverEventConnectionCountPerClientUsernameThreshold | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SolacebrokerMsgVpnTelemetryProfileReceiverEventConnectionCountPerClientUsernameThreshold | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_telemetry_profile solacebroker_msg_vpn_telemetry_profile}
*/
export class SolacebrokerMsgVpnTelemetryProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "solacebroker_msg_vpn_telemetry_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SolacebrokerMsgVpnTelemetryProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SolacebrokerMsgVpnTelemetryProfile to import
  * @param importFromId The id of the existing SolacebrokerMsgVpnTelemetryProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_telemetry_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SolacebrokerMsgVpnTelemetryProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "solacebroker_msg_vpn_telemetry_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_telemetry_profile solacebroker_msg_vpn_telemetry_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SolacebrokerMsgVpnTelemetryProfileConfig
  */
  public constructor(scope: Construct, id: string, config: SolacebrokerMsgVpnTelemetryProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'solacebroker_msg_vpn_telemetry_profile',
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
    this._msgVpnName = config.msgVpnName;
    this._queueEventBindCountThreshold.internalValue = config.queueEventBindCountThreshold;
    this._queueEventMsgSpoolUsageThreshold.internalValue = config.queueEventMsgSpoolUsageThreshold;
    this._queueMaxBindCount = config.queueMaxBindCount;
    this._queueMaxMsgSpoolUsage = config.queueMaxMsgSpoolUsage;
    this._receiverAclConnectDefaultAction = config.receiverAclConnectDefaultAction;
    this._receiverEnabled = config.receiverEnabled;
    this._receiverEventConnectionCountPerClientUsernameThreshold.internalValue = config.receiverEventConnectionCountPerClientUsernameThreshold;
    this._receiverMaxConnectionCountPerClientUsername = config.receiverMaxConnectionCountPerClientUsername;
    this._receiverTcpCongestionWindowSize = config.receiverTcpCongestionWindowSize;
    this._receiverTcpKeepaliveCount = config.receiverTcpKeepaliveCount;
    this._receiverTcpKeepaliveIdleTime = config.receiverTcpKeepaliveIdleTime;
    this._receiverTcpKeepaliveInterval = config.receiverTcpKeepaliveInterval;
    this._receiverTcpMaxSegmentSize = config.receiverTcpMaxSegmentSize;
    this._receiverTcpMaxWindowSize = config.receiverTcpMaxWindowSize;
    this._telemetryProfileName = config.telemetryProfileName;
    this._traceEnabled = config.traceEnabled;
    this._traceSendSpanGenerationEnabled = config.traceSendSpanGenerationEnabled;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // queue_event_bind_count_threshold - computed: false, optional: true, required: false
  private _queueEventBindCountThreshold = new SolacebrokerMsgVpnTelemetryProfileQueueEventBindCountThresholdOutputReference(this, "queue_event_bind_count_threshold");
  public get queueEventBindCountThreshold() {
    return this._queueEventBindCountThreshold;
  }
  public putQueueEventBindCountThreshold(value: SolacebrokerMsgVpnTelemetryProfileQueueEventBindCountThreshold) {
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
  private _queueEventMsgSpoolUsageThreshold = new SolacebrokerMsgVpnTelemetryProfileQueueEventMsgSpoolUsageThresholdOutputReference(this, "queue_event_msg_spool_usage_threshold");
  public get queueEventMsgSpoolUsageThreshold() {
    return this._queueEventMsgSpoolUsageThreshold;
  }
  public putQueueEventMsgSpoolUsageThreshold(value: SolacebrokerMsgVpnTelemetryProfileQueueEventMsgSpoolUsageThreshold) {
    this._queueEventMsgSpoolUsageThreshold.internalValue = value;
  }
  public resetQueueEventMsgSpoolUsageThreshold() {
    this._queueEventMsgSpoolUsageThreshold.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueEventMsgSpoolUsageThresholdInput() {
    return this._queueEventMsgSpoolUsageThreshold.internalValue;
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

  // receiver_acl_connect_default_action - computed: false, optional: true, required: false
  private _receiverAclConnectDefaultAction?: string; 
  public get receiverAclConnectDefaultAction() {
    return this.getStringAttribute('receiver_acl_connect_default_action');
  }
  public set receiverAclConnectDefaultAction(value: string) {
    this._receiverAclConnectDefaultAction = value;
  }
  public resetReceiverAclConnectDefaultAction() {
    this._receiverAclConnectDefaultAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get receiverAclConnectDefaultActionInput() {
    return this._receiverAclConnectDefaultAction;
  }

  // receiver_enabled - computed: false, optional: true, required: false
  private _receiverEnabled?: boolean | cdktf.IResolvable; 
  public get receiverEnabled() {
    return this.getBooleanAttribute('receiver_enabled');
  }
  public set receiverEnabled(value: boolean | cdktf.IResolvable) {
    this._receiverEnabled = value;
  }
  public resetReceiverEnabled() {
    this._receiverEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get receiverEnabledInput() {
    return this._receiverEnabled;
  }

  // receiver_event_connection_count_per_client_username_threshold - computed: false, optional: true, required: false
  private _receiverEventConnectionCountPerClientUsernameThreshold = new SolacebrokerMsgVpnTelemetryProfileReceiverEventConnectionCountPerClientUsernameThresholdOutputReference(this, "receiver_event_connection_count_per_client_username_threshold");
  public get receiverEventConnectionCountPerClientUsernameThreshold() {
    return this._receiverEventConnectionCountPerClientUsernameThreshold;
  }
  public putReceiverEventConnectionCountPerClientUsernameThreshold(value: SolacebrokerMsgVpnTelemetryProfileReceiverEventConnectionCountPerClientUsernameThreshold) {
    this._receiverEventConnectionCountPerClientUsernameThreshold.internalValue = value;
  }
  public resetReceiverEventConnectionCountPerClientUsernameThreshold() {
    this._receiverEventConnectionCountPerClientUsernameThreshold.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get receiverEventConnectionCountPerClientUsernameThresholdInput() {
    return this._receiverEventConnectionCountPerClientUsernameThreshold.internalValue;
  }

  // receiver_max_connection_count_per_client_username - computed: false, optional: true, required: false
  private _receiverMaxConnectionCountPerClientUsername?: number; 
  public get receiverMaxConnectionCountPerClientUsername() {
    return this.getNumberAttribute('receiver_max_connection_count_per_client_username');
  }
  public set receiverMaxConnectionCountPerClientUsername(value: number) {
    this._receiverMaxConnectionCountPerClientUsername = value;
  }
  public resetReceiverMaxConnectionCountPerClientUsername() {
    this._receiverMaxConnectionCountPerClientUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get receiverMaxConnectionCountPerClientUsernameInput() {
    return this._receiverMaxConnectionCountPerClientUsername;
  }

  // receiver_tcp_congestion_window_size - computed: false, optional: true, required: false
  private _receiverTcpCongestionWindowSize?: number; 
  public get receiverTcpCongestionWindowSize() {
    return this.getNumberAttribute('receiver_tcp_congestion_window_size');
  }
  public set receiverTcpCongestionWindowSize(value: number) {
    this._receiverTcpCongestionWindowSize = value;
  }
  public resetReceiverTcpCongestionWindowSize() {
    this._receiverTcpCongestionWindowSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get receiverTcpCongestionWindowSizeInput() {
    return this._receiverTcpCongestionWindowSize;
  }

  // receiver_tcp_keepalive_count - computed: false, optional: true, required: false
  private _receiverTcpKeepaliveCount?: number; 
  public get receiverTcpKeepaliveCount() {
    return this.getNumberAttribute('receiver_tcp_keepalive_count');
  }
  public set receiverTcpKeepaliveCount(value: number) {
    this._receiverTcpKeepaliveCount = value;
  }
  public resetReceiverTcpKeepaliveCount() {
    this._receiverTcpKeepaliveCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get receiverTcpKeepaliveCountInput() {
    return this._receiverTcpKeepaliveCount;
  }

  // receiver_tcp_keepalive_idle_time - computed: false, optional: true, required: false
  private _receiverTcpKeepaliveIdleTime?: number; 
  public get receiverTcpKeepaliveIdleTime() {
    return this.getNumberAttribute('receiver_tcp_keepalive_idle_time');
  }
  public set receiverTcpKeepaliveIdleTime(value: number) {
    this._receiverTcpKeepaliveIdleTime = value;
  }
  public resetReceiverTcpKeepaliveIdleTime() {
    this._receiverTcpKeepaliveIdleTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get receiverTcpKeepaliveIdleTimeInput() {
    return this._receiverTcpKeepaliveIdleTime;
  }

  // receiver_tcp_keepalive_interval - computed: false, optional: true, required: false
  private _receiverTcpKeepaliveInterval?: number; 
  public get receiverTcpKeepaliveInterval() {
    return this.getNumberAttribute('receiver_tcp_keepalive_interval');
  }
  public set receiverTcpKeepaliveInterval(value: number) {
    this._receiverTcpKeepaliveInterval = value;
  }
  public resetReceiverTcpKeepaliveInterval() {
    this._receiverTcpKeepaliveInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get receiverTcpKeepaliveIntervalInput() {
    return this._receiverTcpKeepaliveInterval;
  }

  // receiver_tcp_max_segment_size - computed: false, optional: true, required: false
  private _receiverTcpMaxSegmentSize?: number; 
  public get receiverTcpMaxSegmentSize() {
    return this.getNumberAttribute('receiver_tcp_max_segment_size');
  }
  public set receiverTcpMaxSegmentSize(value: number) {
    this._receiverTcpMaxSegmentSize = value;
  }
  public resetReceiverTcpMaxSegmentSize() {
    this._receiverTcpMaxSegmentSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get receiverTcpMaxSegmentSizeInput() {
    return this._receiverTcpMaxSegmentSize;
  }

  // receiver_tcp_max_window_size - computed: false, optional: true, required: false
  private _receiverTcpMaxWindowSize?: number; 
  public get receiverTcpMaxWindowSize() {
    return this.getNumberAttribute('receiver_tcp_max_window_size');
  }
  public set receiverTcpMaxWindowSize(value: number) {
    this._receiverTcpMaxWindowSize = value;
  }
  public resetReceiverTcpMaxWindowSize() {
    this._receiverTcpMaxWindowSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get receiverTcpMaxWindowSizeInput() {
    return this._receiverTcpMaxWindowSize;
  }

  // telemetry_profile_name - computed: false, optional: false, required: true
  private _telemetryProfileName?: string; 
  public get telemetryProfileName() {
    return this.getStringAttribute('telemetry_profile_name');
  }
  public set telemetryProfileName(value: string) {
    this._telemetryProfileName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get telemetryProfileNameInput() {
    return this._telemetryProfileName;
  }

  // trace_enabled - computed: false, optional: true, required: false
  private _traceEnabled?: boolean | cdktf.IResolvable; 
  public get traceEnabled() {
    return this.getBooleanAttribute('trace_enabled');
  }
  public set traceEnabled(value: boolean | cdktf.IResolvable) {
    this._traceEnabled = value;
  }
  public resetTraceEnabled() {
    this._traceEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get traceEnabledInput() {
    return this._traceEnabled;
  }

  // trace_send_span_generation_enabled - computed: false, optional: true, required: false
  private _traceSendSpanGenerationEnabled?: boolean | cdktf.IResolvable; 
  public get traceSendSpanGenerationEnabled() {
    return this.getBooleanAttribute('trace_send_span_generation_enabled');
  }
  public set traceSendSpanGenerationEnabled(value: boolean | cdktf.IResolvable) {
    this._traceSendSpanGenerationEnabled = value;
  }
  public resetTraceSendSpanGenerationEnabled() {
    this._traceSendSpanGenerationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get traceSendSpanGenerationEnabledInput() {
    return this._traceSendSpanGenerationEnabled;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      msg_vpn_name: cdktf.stringToTerraform(this._msgVpnName),
      queue_event_bind_count_threshold: solacebrokerMsgVpnTelemetryProfileQueueEventBindCountThresholdToTerraform(this._queueEventBindCountThreshold.internalValue),
      queue_event_msg_spool_usage_threshold: solacebrokerMsgVpnTelemetryProfileQueueEventMsgSpoolUsageThresholdToTerraform(this._queueEventMsgSpoolUsageThreshold.internalValue),
      queue_max_bind_count: cdktf.numberToTerraform(this._queueMaxBindCount),
      queue_max_msg_spool_usage: cdktf.numberToTerraform(this._queueMaxMsgSpoolUsage),
      receiver_acl_connect_default_action: cdktf.stringToTerraform(this._receiverAclConnectDefaultAction),
      receiver_enabled: cdktf.booleanToTerraform(this._receiverEnabled),
      receiver_event_connection_count_per_client_username_threshold: solacebrokerMsgVpnTelemetryProfileReceiverEventConnectionCountPerClientUsernameThresholdToTerraform(this._receiverEventConnectionCountPerClientUsernameThreshold.internalValue),
      receiver_max_connection_count_per_client_username: cdktf.numberToTerraform(this._receiverMaxConnectionCountPerClientUsername),
      receiver_tcp_congestion_window_size: cdktf.numberToTerraform(this._receiverTcpCongestionWindowSize),
      receiver_tcp_keepalive_count: cdktf.numberToTerraform(this._receiverTcpKeepaliveCount),
      receiver_tcp_keepalive_idle_time: cdktf.numberToTerraform(this._receiverTcpKeepaliveIdleTime),
      receiver_tcp_keepalive_interval: cdktf.numberToTerraform(this._receiverTcpKeepaliveInterval),
      receiver_tcp_max_segment_size: cdktf.numberToTerraform(this._receiverTcpMaxSegmentSize),
      receiver_tcp_max_window_size: cdktf.numberToTerraform(this._receiverTcpMaxWindowSize),
      telemetry_profile_name: cdktf.stringToTerraform(this._telemetryProfileName),
      trace_enabled: cdktf.booleanToTerraform(this._traceEnabled),
      trace_send_span_generation_enabled: cdktf.booleanToTerraform(this._traceSendSpanGenerationEnabled),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      msg_vpn_name: {
        value: cdktf.stringToHclTerraform(this._msgVpnName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      queue_event_bind_count_threshold: {
        value: solacebrokerMsgVpnTelemetryProfileQueueEventBindCountThresholdToHclTerraform(this._queueEventBindCountThreshold.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SolacebrokerMsgVpnTelemetryProfileQueueEventBindCountThreshold",
      },
      queue_event_msg_spool_usage_threshold: {
        value: solacebrokerMsgVpnTelemetryProfileQueueEventMsgSpoolUsageThresholdToHclTerraform(this._queueEventMsgSpoolUsageThreshold.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SolacebrokerMsgVpnTelemetryProfileQueueEventMsgSpoolUsageThreshold",
      },
      queue_max_bind_count: {
        value: cdktf.numberToHclTerraform(this._queueMaxBindCount),
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
      receiver_acl_connect_default_action: {
        value: cdktf.stringToHclTerraform(this._receiverAclConnectDefaultAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      receiver_enabled: {
        value: cdktf.booleanToHclTerraform(this._receiverEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      receiver_event_connection_count_per_client_username_threshold: {
        value: solacebrokerMsgVpnTelemetryProfileReceiverEventConnectionCountPerClientUsernameThresholdToHclTerraform(this._receiverEventConnectionCountPerClientUsernameThreshold.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SolacebrokerMsgVpnTelemetryProfileReceiverEventConnectionCountPerClientUsernameThreshold",
      },
      receiver_max_connection_count_per_client_username: {
        value: cdktf.numberToHclTerraform(this._receiverMaxConnectionCountPerClientUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      receiver_tcp_congestion_window_size: {
        value: cdktf.numberToHclTerraform(this._receiverTcpCongestionWindowSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      receiver_tcp_keepalive_count: {
        value: cdktf.numberToHclTerraform(this._receiverTcpKeepaliveCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      receiver_tcp_keepalive_idle_time: {
        value: cdktf.numberToHclTerraform(this._receiverTcpKeepaliveIdleTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      receiver_tcp_keepalive_interval: {
        value: cdktf.numberToHclTerraform(this._receiverTcpKeepaliveInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      receiver_tcp_max_segment_size: {
        value: cdktf.numberToHclTerraform(this._receiverTcpMaxSegmentSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      receiver_tcp_max_window_size: {
        value: cdktf.numberToHclTerraform(this._receiverTcpMaxWindowSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      telemetry_profile_name: {
        value: cdktf.stringToHclTerraform(this._telemetryProfileName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trace_enabled: {
        value: cdktf.booleanToHclTerraform(this._traceEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      trace_send_span_generation_enabled: {
        value: cdktf.booleanToHclTerraform(this._traceSendSpanGenerationEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
