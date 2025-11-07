// https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/data-sources/msg_vpn_topic_endpoint_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSolacebrokerMsgVpnTopicEndpointTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the Message VPN.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/data-sources/msg_vpn_topic_endpoint_template#msg_vpn_name DataSolacebrokerMsgVpnTopicEndpointTemplate#msg_vpn_name}
  */
  readonly msgVpnName: string;
  /**
  * The name of the Topic Endpoint Template.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/data-sources/msg_vpn_topic_endpoint_template#topic_endpoint_template_name DataSolacebrokerMsgVpnTopicEndpointTemplate#topic_endpoint_template_name}
  */
  readonly topicEndpointTemplateName: string;
}
export interface DataSolacebrokerMsgVpnTopicEndpointTemplateEventBindCountThreshold {
}

export function dataSolacebrokerMsgVpnTopicEndpointTemplateEventBindCountThresholdToTerraform(struct?: DataSolacebrokerMsgVpnTopicEndpointTemplateEventBindCountThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSolacebrokerMsgVpnTopicEndpointTemplateEventBindCountThresholdToHclTerraform(struct?: DataSolacebrokerMsgVpnTopicEndpointTemplateEventBindCountThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSolacebrokerMsgVpnTopicEndpointTemplateEventBindCountThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSolacebrokerMsgVpnTopicEndpointTemplateEventBindCountThreshold | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSolacebrokerMsgVpnTopicEndpointTemplateEventBindCountThreshold | undefined) {
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
export interface DataSolacebrokerMsgVpnTopicEndpointTemplateEventMsgSpoolUsageThreshold {
}

export function dataSolacebrokerMsgVpnTopicEndpointTemplateEventMsgSpoolUsageThresholdToTerraform(struct?: DataSolacebrokerMsgVpnTopicEndpointTemplateEventMsgSpoolUsageThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSolacebrokerMsgVpnTopicEndpointTemplateEventMsgSpoolUsageThresholdToHclTerraform(struct?: DataSolacebrokerMsgVpnTopicEndpointTemplateEventMsgSpoolUsageThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSolacebrokerMsgVpnTopicEndpointTemplateEventMsgSpoolUsageThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSolacebrokerMsgVpnTopicEndpointTemplateEventMsgSpoolUsageThreshold | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSolacebrokerMsgVpnTopicEndpointTemplateEventMsgSpoolUsageThreshold | undefined) {
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
export interface DataSolacebrokerMsgVpnTopicEndpointTemplateEventRejectLowPriorityMsgLimitThreshold {
}

export function dataSolacebrokerMsgVpnTopicEndpointTemplateEventRejectLowPriorityMsgLimitThresholdToTerraform(struct?: DataSolacebrokerMsgVpnTopicEndpointTemplateEventRejectLowPriorityMsgLimitThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSolacebrokerMsgVpnTopicEndpointTemplateEventRejectLowPriorityMsgLimitThresholdToHclTerraform(struct?: DataSolacebrokerMsgVpnTopicEndpointTemplateEventRejectLowPriorityMsgLimitThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSolacebrokerMsgVpnTopicEndpointTemplateEventRejectLowPriorityMsgLimitThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSolacebrokerMsgVpnTopicEndpointTemplateEventRejectLowPriorityMsgLimitThreshold | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSolacebrokerMsgVpnTopicEndpointTemplateEventRejectLowPriorityMsgLimitThreshold | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/data-sources/msg_vpn_topic_endpoint_template solacebroker_msg_vpn_topic_endpoint_template}
*/
export class DataSolacebrokerMsgVpnTopicEndpointTemplate extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "solacebroker_msg_vpn_topic_endpoint_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSolacebrokerMsgVpnTopicEndpointTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSolacebrokerMsgVpnTopicEndpointTemplate to import
  * @param importFromId The id of the existing DataSolacebrokerMsgVpnTopicEndpointTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/data-sources/msg_vpn_topic_endpoint_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSolacebrokerMsgVpnTopicEndpointTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "solacebroker_msg_vpn_topic_endpoint_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/data-sources/msg_vpn_topic_endpoint_template solacebroker_msg_vpn_topic_endpoint_template} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSolacebrokerMsgVpnTopicEndpointTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: DataSolacebrokerMsgVpnTopicEndpointTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'solacebroker_msg_vpn_topic_endpoint_template',
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
    this._topicEndpointTemplateName = config.topicEndpointTemplateName;
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

  // delivery_delay - computed: true, optional: false, required: false
  public get deliveryDelay() {
    return this.getNumberAttribute('delivery_delay');
  }

  // event_bind_count_threshold - computed: true, optional: false, required: false
  private _eventBindCountThreshold = new DataSolacebrokerMsgVpnTopicEndpointTemplateEventBindCountThresholdOutputReference(this, "event_bind_count_threshold");
  public get eventBindCountThreshold() {
    return this._eventBindCountThreshold;
  }

  // event_msg_spool_usage_threshold - computed: true, optional: false, required: false
  private _eventMsgSpoolUsageThreshold = new DataSolacebrokerMsgVpnTopicEndpointTemplateEventMsgSpoolUsageThresholdOutputReference(this, "event_msg_spool_usage_threshold");
  public get eventMsgSpoolUsageThreshold() {
    return this._eventMsgSpoolUsageThreshold;
  }

  // event_reject_low_priority_msg_limit_threshold - computed: true, optional: false, required: false
  private _eventRejectLowPriorityMsgLimitThreshold = new DataSolacebrokerMsgVpnTopicEndpointTemplateEventRejectLowPriorityMsgLimitThresholdOutputReference(this, "event_reject_low_priority_msg_limit_threshold");
  public get eventRejectLowPriorityMsgLimitThreshold() {
    return this._eventRejectLowPriorityMsgLimitThreshold;
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

  // max_msg_spool_usage - computed: true, optional: false, required: false
  public get maxMsgSpoolUsage() {
    return this.getNumberAttribute('max_msg_spool_usage');
  }

  // max_redelivery_count - computed: true, optional: false, required: false
  public get maxRedeliveryCount() {
    return this.getNumberAttribute('max_redelivery_count');
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

  // topic_endpoint_name_filter - computed: true, optional: false, required: false
  public get topicEndpointNameFilter() {
    return this.getStringAttribute('topic_endpoint_name_filter');
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
      msg_vpn_name: cdktf.stringToTerraform(this._msgVpnName),
      topic_endpoint_template_name: cdktf.stringToTerraform(this._topicEndpointTemplateName),
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
