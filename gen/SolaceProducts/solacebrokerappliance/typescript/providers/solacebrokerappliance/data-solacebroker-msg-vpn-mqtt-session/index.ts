// https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/data-sources/solacebroker_msg_vpn_mqtt_session
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSolacebrokerMsgVpnMqttSessionConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Client ID of the MQTT Session, which corresponds to the ClientId provided in the MQTT CONNECT packet.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/data-sources/solacebroker_msg_vpn_mqtt_session#mqtt_session_client_id DataSolacebrokerMsgVpnMqttSession#mqtt_session_client_id}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/data-sources/solacebroker_msg_vpn_mqtt_session#mqtt_session_virtual_router DataSolacebrokerMsgVpnMqttSession#mqtt_session_virtual_router}
  */
  readonly mqttSessionVirtualRouter: string;
  /**
  * The name of the Message VPN.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/data-sources/solacebroker_msg_vpn_mqtt_session#msg_vpn_name DataSolacebrokerMsgVpnMqttSession#msg_vpn_name}
  */
  readonly msgVpnName: string;
}
export interface DataSolacebrokerMsgVpnMqttSessionQueueEventBindCountThreshold {
}

export function dataSolacebrokerMsgVpnMqttSessionQueueEventBindCountThresholdToTerraform(struct?: DataSolacebrokerMsgVpnMqttSessionQueueEventBindCountThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSolacebrokerMsgVpnMqttSessionQueueEventBindCountThresholdToHclTerraform(struct?: DataSolacebrokerMsgVpnMqttSessionQueueEventBindCountThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSolacebrokerMsgVpnMqttSessionQueueEventBindCountThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSolacebrokerMsgVpnMqttSessionQueueEventBindCountThreshold | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSolacebrokerMsgVpnMqttSessionQueueEventBindCountThreshold | undefined) {
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
export interface DataSolacebrokerMsgVpnMqttSessionQueueEventMsgSpoolUsageThreshold {
}

export function dataSolacebrokerMsgVpnMqttSessionQueueEventMsgSpoolUsageThresholdToTerraform(struct?: DataSolacebrokerMsgVpnMqttSessionQueueEventMsgSpoolUsageThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSolacebrokerMsgVpnMqttSessionQueueEventMsgSpoolUsageThresholdToHclTerraform(struct?: DataSolacebrokerMsgVpnMqttSessionQueueEventMsgSpoolUsageThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSolacebrokerMsgVpnMqttSessionQueueEventMsgSpoolUsageThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSolacebrokerMsgVpnMqttSessionQueueEventMsgSpoolUsageThreshold | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSolacebrokerMsgVpnMqttSessionQueueEventMsgSpoolUsageThreshold | undefined) {
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
export interface DataSolacebrokerMsgVpnMqttSessionQueueEventRejectLowPriorityMsgLimitThreshold {
}

export function dataSolacebrokerMsgVpnMqttSessionQueueEventRejectLowPriorityMsgLimitThresholdToTerraform(struct?: DataSolacebrokerMsgVpnMqttSessionQueueEventRejectLowPriorityMsgLimitThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSolacebrokerMsgVpnMqttSessionQueueEventRejectLowPriorityMsgLimitThresholdToHclTerraform(struct?: DataSolacebrokerMsgVpnMqttSessionQueueEventRejectLowPriorityMsgLimitThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSolacebrokerMsgVpnMqttSessionQueueEventRejectLowPriorityMsgLimitThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSolacebrokerMsgVpnMqttSessionQueueEventRejectLowPriorityMsgLimitThreshold | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSolacebrokerMsgVpnMqttSessionQueueEventRejectLowPriorityMsgLimitThreshold | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/data-sources/solacebroker_msg_vpn_mqtt_session solacebroker_msg_vpn_mqtt_session}
*/
export class DataSolacebrokerMsgVpnMqttSession extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "solacebroker_msg_vpn_mqtt_session";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSolacebrokerMsgVpnMqttSession resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSolacebrokerMsgVpnMqttSession to import
  * @param importFromId The id of the existing DataSolacebrokerMsgVpnMqttSession that should be imported. Refer to the {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/data-sources/solacebroker_msg_vpn_mqtt_session#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSolacebrokerMsgVpnMqttSession to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "solacebroker_msg_vpn_mqtt_session", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/data-sources/solacebroker_msg_vpn_mqtt_session solacebroker_msg_vpn_mqtt_session} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSolacebrokerMsgVpnMqttSessionConfig
  */
  public constructor(scope: Construct, id: string, config: DataSolacebrokerMsgVpnMqttSessionConfig) {
    super(scope, id, {
      terraformResourceType: 'solacebroker_msg_vpn_mqtt_session',
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
    this._mqttSessionClientId = config.mqttSessionClientId;
    this._mqttSessionVirtualRouter = config.mqttSessionVirtualRouter;
    this._msgVpnName = config.msgVpnName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
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

  // owner - computed: true, optional: false, required: false
  public get owner() {
    return this.getStringAttribute('owner');
  }

  // queue_consumer_ack_propagation_enabled - computed: true, optional: false, required: false
  public get queueConsumerAckPropagationEnabled() {
    return this.getBooleanAttribute('queue_consumer_ack_propagation_enabled');
  }

  // queue_dead_msg_queue - computed: true, optional: false, required: false
  public get queueDeadMsgQueue() {
    return this.getStringAttribute('queue_dead_msg_queue');
  }

  // queue_event_bind_count_threshold - computed: true, optional: false, required: false
  private _queueEventBindCountThreshold = new DataSolacebrokerMsgVpnMqttSessionQueueEventBindCountThresholdOutputReference(this, "queue_event_bind_count_threshold");
  public get queueEventBindCountThreshold() {
    return this._queueEventBindCountThreshold;
  }

  // queue_event_msg_spool_usage_threshold - computed: true, optional: false, required: false
  private _queueEventMsgSpoolUsageThreshold = new DataSolacebrokerMsgVpnMqttSessionQueueEventMsgSpoolUsageThresholdOutputReference(this, "queue_event_msg_spool_usage_threshold");
  public get queueEventMsgSpoolUsageThreshold() {
    return this._queueEventMsgSpoolUsageThreshold;
  }

  // queue_event_reject_low_priority_msg_limit_threshold - computed: true, optional: false, required: false
  private _queueEventRejectLowPriorityMsgLimitThreshold = new DataSolacebrokerMsgVpnMqttSessionQueueEventRejectLowPriorityMsgLimitThresholdOutputReference(this, "queue_event_reject_low_priority_msg_limit_threshold");
  public get queueEventRejectLowPriorityMsgLimitThreshold() {
    return this._queueEventRejectLowPriorityMsgLimitThreshold;
  }

  // queue_max_bind_count - computed: true, optional: false, required: false
  public get queueMaxBindCount() {
    return this.getNumberAttribute('queue_max_bind_count');
  }

  // queue_max_delivered_unacked_msgs_per_flow - computed: true, optional: false, required: false
  public get queueMaxDeliveredUnackedMsgsPerFlow() {
    return this.getNumberAttribute('queue_max_delivered_unacked_msgs_per_flow');
  }

  // queue_max_msg_size - computed: true, optional: false, required: false
  public get queueMaxMsgSize() {
    return this.getNumberAttribute('queue_max_msg_size');
  }

  // queue_max_msg_spool_usage - computed: true, optional: false, required: false
  public get queueMaxMsgSpoolUsage() {
    return this.getNumberAttribute('queue_max_msg_spool_usage');
  }

  // queue_max_redelivery_count - computed: true, optional: false, required: false
  public get queueMaxRedeliveryCount() {
    return this.getNumberAttribute('queue_max_redelivery_count');
  }

  // queue_max_ttl - computed: true, optional: false, required: false
  public get queueMaxTtl() {
    return this.getNumberAttribute('queue_max_ttl');
  }

  // queue_reject_low_priority_msg_enabled - computed: true, optional: false, required: false
  public get queueRejectLowPriorityMsgEnabled() {
    return this.getBooleanAttribute('queue_reject_low_priority_msg_enabled');
  }

  // queue_reject_low_priority_msg_limit - computed: true, optional: false, required: false
  public get queueRejectLowPriorityMsgLimit() {
    return this.getNumberAttribute('queue_reject_low_priority_msg_limit');
  }

  // queue_reject_msg_to_sender_on_discard_behavior - computed: true, optional: false, required: false
  public get queueRejectMsgToSenderOnDiscardBehavior() {
    return this.getStringAttribute('queue_reject_msg_to_sender_on_discard_behavior');
  }

  // queue_respect_ttl_enabled - computed: true, optional: false, required: false
  public get queueRespectTtlEnabled() {
    return this.getBooleanAttribute('queue_respect_ttl_enabled');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      mqtt_session_client_id: cdktf.stringToTerraform(this._mqttSessionClientId),
      mqtt_session_virtual_router: cdktf.stringToTerraform(this._mqttSessionVirtualRouter),
      msg_vpn_name: cdktf.stringToTerraform(this._msgVpnName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
