// https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/data-sources/msg_vpn_telemetry_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSolacebrokerMsgVpnTelemetryProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the Message VPN.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/data-sources/msg_vpn_telemetry_profile#msg_vpn_name DataSolacebrokerMsgVpnTelemetryProfile#msg_vpn_name}
  */
  readonly msgVpnName: string;
  /**
  * The name of the Telemetry Profile.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/data-sources/msg_vpn_telemetry_profile#telemetry_profile_name DataSolacebrokerMsgVpnTelemetryProfile#telemetry_profile_name}
  */
  readonly telemetryProfileName: string;
}
export interface DataSolacebrokerMsgVpnTelemetryProfileQueueEventBindCountThreshold {
}

export function dataSolacebrokerMsgVpnTelemetryProfileQueueEventBindCountThresholdToTerraform(struct?: DataSolacebrokerMsgVpnTelemetryProfileQueueEventBindCountThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSolacebrokerMsgVpnTelemetryProfileQueueEventBindCountThresholdToHclTerraform(struct?: DataSolacebrokerMsgVpnTelemetryProfileQueueEventBindCountThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSolacebrokerMsgVpnTelemetryProfileQueueEventBindCountThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSolacebrokerMsgVpnTelemetryProfileQueueEventBindCountThreshold | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSolacebrokerMsgVpnTelemetryProfileQueueEventBindCountThreshold | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // clear_percent - computed: true, optional: false, required: false
  public get clearPercent() {
    return this.getNumberAttribute('clear_percent');
  }

  // clear_value - computed: true, optional: false, required: false
  public get clearValue() {
    return this.getNumberAttribute('clear_value');
  }

  // set_percent - computed: true, optional: false, required: false
  public get setPercent() {
    return this.getNumberAttribute('set_percent');
  }

  // set_value - computed: true, optional: false, required: false
  public get setValue() {
    return this.getNumberAttribute('set_value');
  }
}
export interface DataSolacebrokerMsgVpnTelemetryProfileQueueEventMsgSpoolUsageThreshold {
}

export function dataSolacebrokerMsgVpnTelemetryProfileQueueEventMsgSpoolUsageThresholdToTerraform(struct?: DataSolacebrokerMsgVpnTelemetryProfileQueueEventMsgSpoolUsageThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSolacebrokerMsgVpnTelemetryProfileQueueEventMsgSpoolUsageThresholdToHclTerraform(struct?: DataSolacebrokerMsgVpnTelemetryProfileQueueEventMsgSpoolUsageThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSolacebrokerMsgVpnTelemetryProfileQueueEventMsgSpoolUsageThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSolacebrokerMsgVpnTelemetryProfileQueueEventMsgSpoolUsageThreshold | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSolacebrokerMsgVpnTelemetryProfileQueueEventMsgSpoolUsageThreshold | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // clear_percent - computed: true, optional: false, required: false
  public get clearPercent() {
    return this.getNumberAttribute('clear_percent');
  }

  // clear_value - computed: true, optional: false, required: false
  public get clearValue() {
    return this.getNumberAttribute('clear_value');
  }

  // set_percent - computed: true, optional: false, required: false
  public get setPercent() {
    return this.getNumberAttribute('set_percent');
  }

  // set_value - computed: true, optional: false, required: false
  public get setValue() {
    return this.getNumberAttribute('set_value');
  }
}
export interface DataSolacebrokerMsgVpnTelemetryProfileReceiverEventConnectionCountPerClientUsernameThreshold {
}

export function dataSolacebrokerMsgVpnTelemetryProfileReceiverEventConnectionCountPerClientUsernameThresholdToTerraform(struct?: DataSolacebrokerMsgVpnTelemetryProfileReceiverEventConnectionCountPerClientUsernameThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSolacebrokerMsgVpnTelemetryProfileReceiverEventConnectionCountPerClientUsernameThresholdToHclTerraform(struct?: DataSolacebrokerMsgVpnTelemetryProfileReceiverEventConnectionCountPerClientUsernameThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSolacebrokerMsgVpnTelemetryProfileReceiverEventConnectionCountPerClientUsernameThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSolacebrokerMsgVpnTelemetryProfileReceiverEventConnectionCountPerClientUsernameThreshold | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSolacebrokerMsgVpnTelemetryProfileReceiverEventConnectionCountPerClientUsernameThreshold | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // clear_percent - computed: true, optional: false, required: false
  public get clearPercent() {
    return this.getNumberAttribute('clear_percent');
  }

  // clear_value - computed: true, optional: false, required: false
  public get clearValue() {
    return this.getNumberAttribute('clear_value');
  }

  // set_percent - computed: true, optional: false, required: false
  public get setPercent() {
    return this.getNumberAttribute('set_percent');
  }

  // set_value - computed: true, optional: false, required: false
  public get setValue() {
    return this.getNumberAttribute('set_value');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/data-sources/msg_vpn_telemetry_profile solacebroker_msg_vpn_telemetry_profile}
*/
export class DataSolacebrokerMsgVpnTelemetryProfile extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "solacebroker_msg_vpn_telemetry_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSolacebrokerMsgVpnTelemetryProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSolacebrokerMsgVpnTelemetryProfile to import
  * @param importFromId The id of the existing DataSolacebrokerMsgVpnTelemetryProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/data-sources/msg_vpn_telemetry_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSolacebrokerMsgVpnTelemetryProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "solacebroker_msg_vpn_telemetry_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/data-sources/msg_vpn_telemetry_profile solacebroker_msg_vpn_telemetry_profile} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSolacebrokerMsgVpnTelemetryProfileConfig
  */
  public constructor(scope: Construct, id: string, config: DataSolacebrokerMsgVpnTelemetryProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'solacebroker_msg_vpn_telemetry_profile',
      terraformGeneratorMetadata: {
        providerName: 'solacebroker',
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
    this._msgVpnName = config.msgVpnName;
    this._telemetryProfileName = config.telemetryProfileName;
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

  // queue_event_bind_count_threshold - computed: true, optional: false, required: false
  private _queueEventBindCountThreshold = new DataSolacebrokerMsgVpnTelemetryProfileQueueEventBindCountThresholdOutputReference(this, "queue_event_bind_count_threshold");
  public get queueEventBindCountThreshold() {
    return this._queueEventBindCountThreshold;
  }

  // queue_event_msg_spool_usage_threshold - computed: true, optional: false, required: false
  private _queueEventMsgSpoolUsageThreshold = new DataSolacebrokerMsgVpnTelemetryProfileQueueEventMsgSpoolUsageThresholdOutputReference(this, "queue_event_msg_spool_usage_threshold");
  public get queueEventMsgSpoolUsageThreshold() {
    return this._queueEventMsgSpoolUsageThreshold;
  }

  // queue_max_bind_count - computed: true, optional: false, required: false
  public get queueMaxBindCount() {
    return this.getNumberAttribute('queue_max_bind_count');
  }

  // queue_max_msg_spool_usage - computed: true, optional: false, required: false
  public get queueMaxMsgSpoolUsage() {
    return this.getNumberAttribute('queue_max_msg_spool_usage');
  }

  // receiver_acl_connect_default_action - computed: true, optional: false, required: false
  public get receiverAclConnectDefaultAction() {
    return this.getStringAttribute('receiver_acl_connect_default_action');
  }

  // receiver_enabled - computed: true, optional: false, required: false
  public get receiverEnabled() {
    return this.getBooleanAttribute('receiver_enabled');
  }

  // receiver_event_connection_count_per_client_username_threshold - computed: true, optional: false, required: false
  private _receiverEventConnectionCountPerClientUsernameThreshold = new DataSolacebrokerMsgVpnTelemetryProfileReceiverEventConnectionCountPerClientUsernameThresholdOutputReference(this, "receiver_event_connection_count_per_client_username_threshold");
  public get receiverEventConnectionCountPerClientUsernameThreshold() {
    return this._receiverEventConnectionCountPerClientUsernameThreshold;
  }

  // receiver_max_connection_count_per_client_username - computed: true, optional: false, required: false
  public get receiverMaxConnectionCountPerClientUsername() {
    return this.getNumberAttribute('receiver_max_connection_count_per_client_username');
  }

  // receiver_tcp_congestion_window_size - computed: true, optional: false, required: false
  public get receiverTcpCongestionWindowSize() {
    return this.getNumberAttribute('receiver_tcp_congestion_window_size');
  }

  // receiver_tcp_keepalive_count - computed: true, optional: false, required: false
  public get receiverTcpKeepaliveCount() {
    return this.getNumberAttribute('receiver_tcp_keepalive_count');
  }

  // receiver_tcp_keepalive_idle_time - computed: true, optional: false, required: false
  public get receiverTcpKeepaliveIdleTime() {
    return this.getNumberAttribute('receiver_tcp_keepalive_idle_time');
  }

  // receiver_tcp_keepalive_interval - computed: true, optional: false, required: false
  public get receiverTcpKeepaliveInterval() {
    return this.getNumberAttribute('receiver_tcp_keepalive_interval');
  }

  // receiver_tcp_max_segment_size - computed: true, optional: false, required: false
  public get receiverTcpMaxSegmentSize() {
    return this.getNumberAttribute('receiver_tcp_max_segment_size');
  }

  // receiver_tcp_max_window_size - computed: true, optional: false, required: false
  public get receiverTcpMaxWindowSize() {
    return this.getNumberAttribute('receiver_tcp_max_window_size');
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

  // trace_enabled - computed: true, optional: false, required: false
  public get traceEnabled() {
    return this.getBooleanAttribute('trace_enabled');
  }

  // trace_send_span_generation_enabled - computed: true, optional: false, required: false
  public get traceSendSpanGenerationEnabled() {
    return this.getBooleanAttribute('trace_send_span_generation_enabled');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      msg_vpn_name: cdktf.stringToTerraform(this._msgVpnName),
      telemetry_profile_name: cdktf.stringToTerraform(this._telemetryProfileName),
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
      telemetry_profile_name: {
        value: cdktf.stringToHclTerraform(this._telemetryProfileName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
