// https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/data-sources/msg_vpn_topic_endpoint
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSolacebrokerMsgVpnTopicEndpointConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the Message VPN.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/data-sources/msg_vpn_topic_endpoint#msg_vpn_name DataSolacebrokerMsgVpnTopicEndpoint#msg_vpn_name}
  */
  readonly msgVpnName: string;
  /**
  * The name of the Topic Endpoint.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/data-sources/msg_vpn_topic_endpoint#topic_endpoint_name DataSolacebrokerMsgVpnTopicEndpoint#topic_endpoint_name}
  */
  readonly topicEndpointName: string;
}
export interface DataSolacebrokerMsgVpnTopicEndpointEventBindCountThreshold {
}

export function dataSolacebrokerMsgVpnTopicEndpointEventBindCountThresholdToTerraform(struct?: DataSolacebrokerMsgVpnTopicEndpointEventBindCountThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSolacebrokerMsgVpnTopicEndpointEventBindCountThresholdToHclTerraform(struct?: DataSolacebrokerMsgVpnTopicEndpointEventBindCountThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSolacebrokerMsgVpnTopicEndpointEventBindCountThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSolacebrokerMsgVpnTopicEndpointEventBindCountThreshold | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSolacebrokerMsgVpnTopicEndpointEventBindCountThreshold | undefined) {
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
export interface DataSolacebrokerMsgVpnTopicEndpointEventRejectLowPriorityMsgLimitThreshold {
}

export function dataSolacebrokerMsgVpnTopicEndpointEventRejectLowPriorityMsgLimitThresholdToTerraform(struct?: DataSolacebrokerMsgVpnTopicEndpointEventRejectLowPriorityMsgLimitThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSolacebrokerMsgVpnTopicEndpointEventRejectLowPriorityMsgLimitThresholdToHclTerraform(struct?: DataSolacebrokerMsgVpnTopicEndpointEventRejectLowPriorityMsgLimitThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSolacebrokerMsgVpnTopicEndpointEventRejectLowPriorityMsgLimitThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSolacebrokerMsgVpnTopicEndpointEventRejectLowPriorityMsgLimitThreshold | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSolacebrokerMsgVpnTopicEndpointEventRejectLowPriorityMsgLimitThreshold | undefined) {
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
export interface DataSolacebrokerMsgVpnTopicEndpointEventSpoolUsageThreshold {
}

export function dataSolacebrokerMsgVpnTopicEndpointEventSpoolUsageThresholdToTerraform(struct?: DataSolacebrokerMsgVpnTopicEndpointEventSpoolUsageThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSolacebrokerMsgVpnTopicEndpointEventSpoolUsageThresholdToHclTerraform(struct?: DataSolacebrokerMsgVpnTopicEndpointEventSpoolUsageThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSolacebrokerMsgVpnTopicEndpointEventSpoolUsageThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSolacebrokerMsgVpnTopicEndpointEventSpoolUsageThreshold | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSolacebrokerMsgVpnTopicEndpointEventSpoolUsageThreshold | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/data-sources/msg_vpn_topic_endpoint solacebroker_msg_vpn_topic_endpoint}
*/
export class DataSolacebrokerMsgVpnTopicEndpoint extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "solacebroker_msg_vpn_topic_endpoint";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSolacebrokerMsgVpnTopicEndpoint resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSolacebrokerMsgVpnTopicEndpoint to import
  * @param importFromId The id of the existing DataSolacebrokerMsgVpnTopicEndpoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/data-sources/msg_vpn_topic_endpoint#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSolacebrokerMsgVpnTopicEndpoint to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "solacebroker_msg_vpn_topic_endpoint", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/data-sources/msg_vpn_topic_endpoint solacebroker_msg_vpn_topic_endpoint} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSolacebrokerMsgVpnTopicEndpointConfig
  */
  public constructor(scope: Construct, id: string, config: DataSolacebrokerMsgVpnTopicEndpointConfig) {
    super(scope, id, {
      terraformResourceType: 'solacebroker_msg_vpn_topic_endpoint',
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
    this._topicEndpointName = config.topicEndpointName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_type - computed: true, optional: false, required: false
  public get accessType() {
    return this.getStringAttribute('access_type');
  }

  // consumer_ack_propagation_enabled - computed: true, optional: false, required: false
  public get consumerAckPropagationEnabled() {
    return this.getBooleanAttribute('consumer_ack_propagation_enabled');
  }

  // dead_msg_queue - computed: true, optional: false, required: false
  public get deadMsgQueue() {
    return this.getStringAttribute('dead_msg_queue');
  }

  // delivery_count_enabled - computed: true, optional: false, required: false
  public get deliveryCountEnabled() {
    return this.getBooleanAttribute('delivery_count_enabled');
  }

  // delivery_delay - computed: true, optional: false, required: false
  public get deliveryDelay() {
    return this.getNumberAttribute('delivery_delay');
  }

  // egress_enabled - computed: true, optional: false, required: false
  public get egressEnabled() {
    return this.getBooleanAttribute('egress_enabled');
  }

  // event_bind_count_threshold - computed: true, optional: false, required: false
  private _eventBindCountThreshold = new DataSolacebrokerMsgVpnTopicEndpointEventBindCountThresholdOutputReference(this, "event_bind_count_threshold");
  public get eventBindCountThreshold() {
    return this._eventBindCountThreshold;
  }

  // event_reject_low_priority_msg_limit_threshold - computed: true, optional: false, required: false
  private _eventRejectLowPriorityMsgLimitThreshold = new DataSolacebrokerMsgVpnTopicEndpointEventRejectLowPriorityMsgLimitThresholdOutputReference(this, "event_reject_low_priority_msg_limit_threshold");
  public get eventRejectLowPriorityMsgLimitThreshold() {
    return this._eventRejectLowPriorityMsgLimitThreshold;
  }

  // event_spool_usage_threshold - computed: true, optional: false, required: false
  private _eventSpoolUsageThreshold = new DataSolacebrokerMsgVpnTopicEndpointEventSpoolUsageThresholdOutputReference(this, "event_spool_usage_threshold");
  public get eventSpoolUsageThreshold() {
    return this._eventSpoolUsageThreshold;
  }

  // ingress_enabled - computed: true, optional: false, required: false
  public get ingressEnabled() {
    return this.getBooleanAttribute('ingress_enabled');
  }

  // max_bind_count - computed: true, optional: false, required: false
  public get maxBindCount() {
    return this.getNumberAttribute('max_bind_count');
  }

  // max_delivered_unacked_msgs_per_flow - computed: true, optional: false, required: false
  public get maxDeliveredUnackedMsgsPerFlow() {
    return this.getNumberAttribute('max_delivered_unacked_msgs_per_flow');
  }

  // max_msg_size - computed: true, optional: false, required: false
  public get maxMsgSize() {
    return this.getNumberAttribute('max_msg_size');
  }

  // max_redelivery_count - computed: true, optional: false, required: false
  public get maxRedeliveryCount() {
    return this.getNumberAttribute('max_redelivery_count');
  }

  // max_spool_usage - computed: true, optional: false, required: false
  public get maxSpoolUsage() {
    return this.getNumberAttribute('max_spool_usage');
  }

  // max_ttl - computed: true, optional: false, required: false
  public get maxTtl() {
    return this.getNumberAttribute('max_ttl');
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

  // permission - computed: true, optional: false, required: false
  public get permission() {
    return this.getStringAttribute('permission');
  }

  // redelivery_delay_enabled - computed: true, optional: false, required: false
  public get redeliveryDelayEnabled() {
    return this.getBooleanAttribute('redelivery_delay_enabled');
  }

  // redelivery_delay_initial_interval - computed: true, optional: false, required: false
  public get redeliveryDelayInitialInterval() {
    return this.getNumberAttribute('redelivery_delay_initial_interval');
  }

  // redelivery_delay_max_interval - computed: true, optional: false, required: false
  public get redeliveryDelayMaxInterval() {
    return this.getNumberAttribute('redelivery_delay_max_interval');
  }

  // redelivery_delay_multiplier - computed: true, optional: false, required: false
  public get redeliveryDelayMultiplier() {
    return this.getNumberAttribute('redelivery_delay_multiplier');
  }

  // redelivery_enabled - computed: true, optional: false, required: false
  public get redeliveryEnabled() {
    return this.getBooleanAttribute('redelivery_enabled');
  }

  // reject_low_priority_msg_enabled - computed: true, optional: false, required: false
  public get rejectLowPriorityMsgEnabled() {
    return this.getBooleanAttribute('reject_low_priority_msg_enabled');
  }

  // reject_low_priority_msg_limit - computed: true, optional: false, required: false
  public get rejectLowPriorityMsgLimit() {
    return this.getNumberAttribute('reject_low_priority_msg_limit');
  }

  // reject_msg_to_sender_on_discard_behavior - computed: true, optional: false, required: false
  public get rejectMsgToSenderOnDiscardBehavior() {
    return this.getStringAttribute('reject_msg_to_sender_on_discard_behavior');
  }

  // respect_msg_priority_enabled - computed: true, optional: false, required: false
  public get respectMsgPriorityEnabled() {
    return this.getBooleanAttribute('respect_msg_priority_enabled');
  }

  // respect_ttl_enabled - computed: true, optional: false, required: false
  public get respectTtlEnabled() {
    return this.getBooleanAttribute('respect_ttl_enabled');
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
      msg_vpn_name: cdktf.stringToTerraform(this._msgVpnName),
      topic_endpoint_name: cdktf.stringToTerraform(this._topicEndpointName),
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
