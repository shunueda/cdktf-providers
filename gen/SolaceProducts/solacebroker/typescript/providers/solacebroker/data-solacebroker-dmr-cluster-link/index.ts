// https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/data-sources/dmr_cluster_link
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSolacebrokerDmrClusterLinkConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the Cluster.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/data-sources/dmr_cluster_link#dmr_cluster_name DataSolacebrokerDmrClusterLink#dmr_cluster_name}
  */
  readonly dmrClusterName: string;
  /**
  * The name of the node at the remote end of the Link.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/data-sources/dmr_cluster_link#remote_node_name DataSolacebrokerDmrClusterLink#remote_node_name}
  */
  readonly remoteNodeName: string;
}
export interface DataSolacebrokerDmrClusterLinkQueueEventSpoolUsageThreshold {
}

export function dataSolacebrokerDmrClusterLinkQueueEventSpoolUsageThresholdToTerraform(struct?: DataSolacebrokerDmrClusterLinkQueueEventSpoolUsageThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSolacebrokerDmrClusterLinkQueueEventSpoolUsageThresholdToHclTerraform(struct?: DataSolacebrokerDmrClusterLinkQueueEventSpoolUsageThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSolacebrokerDmrClusterLinkQueueEventSpoolUsageThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSolacebrokerDmrClusterLinkQueueEventSpoolUsageThreshold | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSolacebrokerDmrClusterLinkQueueEventSpoolUsageThreshold | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/data-sources/dmr_cluster_link solacebroker_dmr_cluster_link}
*/
export class DataSolacebrokerDmrClusterLink extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "solacebroker_dmr_cluster_link";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSolacebrokerDmrClusterLink resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSolacebrokerDmrClusterLink to import
  * @param importFromId The id of the existing DataSolacebrokerDmrClusterLink that should be imported. Refer to the {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/data-sources/dmr_cluster_link#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSolacebrokerDmrClusterLink to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "solacebroker_dmr_cluster_link", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/data-sources/dmr_cluster_link solacebroker_dmr_cluster_link} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSolacebrokerDmrClusterLinkConfig
  */
  public constructor(scope: Construct, id: string, config: DataSolacebrokerDmrClusterLinkConfig) {
    super(scope, id, {
      terraformResourceType: 'solacebroker_dmr_cluster_link',
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
    this._dmrClusterName = config.dmrClusterName;
    this._remoteNodeName = config.remoteNodeName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authentication_scheme - computed: true, optional: false, required: false
  public get authenticationScheme() {
    return this.getStringAttribute('authentication_scheme');
  }

  // client_profile_queue_control1_max_depth - computed: true, optional: false, required: false
  public get clientProfileQueueControl1MaxDepth() {
    return this.getNumberAttribute('client_profile_queue_control1_max_depth');
  }

  // client_profile_queue_control1_min_msg_burst - computed: true, optional: false, required: false
  public get clientProfileQueueControl1MinMsgBurst() {
    return this.getNumberAttribute('client_profile_queue_control1_min_msg_burst');
  }

  // client_profile_queue_direct1_max_depth - computed: true, optional: false, required: false
  public get clientProfileQueueDirect1MaxDepth() {
    return this.getNumberAttribute('client_profile_queue_direct1_max_depth');
  }

  // client_profile_queue_direct1_min_msg_burst - computed: true, optional: false, required: false
  public get clientProfileQueueDirect1MinMsgBurst() {
    return this.getNumberAttribute('client_profile_queue_direct1_min_msg_burst');
  }

  // client_profile_queue_direct2_max_depth - computed: true, optional: false, required: false
  public get clientProfileQueueDirect2MaxDepth() {
    return this.getNumberAttribute('client_profile_queue_direct2_max_depth');
  }

  // client_profile_queue_direct2_min_msg_burst - computed: true, optional: false, required: false
  public get clientProfileQueueDirect2MinMsgBurst() {
    return this.getNumberAttribute('client_profile_queue_direct2_min_msg_burst');
  }

  // client_profile_queue_direct3_max_depth - computed: true, optional: false, required: false
  public get clientProfileQueueDirect3MaxDepth() {
    return this.getNumberAttribute('client_profile_queue_direct3_max_depth');
  }

  // client_profile_queue_direct3_min_msg_burst - computed: true, optional: false, required: false
  public get clientProfileQueueDirect3MinMsgBurst() {
    return this.getNumberAttribute('client_profile_queue_direct3_min_msg_burst');
  }

  // client_profile_queue_guaranteed1_max_depth - computed: true, optional: false, required: false
  public get clientProfileQueueGuaranteed1MaxDepth() {
    return this.getNumberAttribute('client_profile_queue_guaranteed1_max_depth');
  }

  // client_profile_queue_guaranteed1_min_msg_burst - computed: true, optional: false, required: false
  public get clientProfileQueueGuaranteed1MinMsgBurst() {
    return this.getNumberAttribute('client_profile_queue_guaranteed1_min_msg_burst');
  }

  // client_profile_tcp_congestion_window_size - computed: true, optional: false, required: false
  public get clientProfileTcpCongestionWindowSize() {
    return this.getNumberAttribute('client_profile_tcp_congestion_window_size');
  }

  // client_profile_tcp_keepalive_count - computed: true, optional: false, required: false
  public get clientProfileTcpKeepaliveCount() {
    return this.getNumberAttribute('client_profile_tcp_keepalive_count');
  }

  // client_profile_tcp_keepalive_idle_time - computed: true, optional: false, required: false
  public get clientProfileTcpKeepaliveIdleTime() {
    return this.getNumberAttribute('client_profile_tcp_keepalive_idle_time');
  }

  // client_profile_tcp_keepalive_interval - computed: true, optional: false, required: false
  public get clientProfileTcpKeepaliveInterval() {
    return this.getNumberAttribute('client_profile_tcp_keepalive_interval');
  }

  // client_profile_tcp_max_segment_size - computed: true, optional: false, required: false
  public get clientProfileTcpMaxSegmentSize() {
    return this.getNumberAttribute('client_profile_tcp_max_segment_size');
  }

  // client_profile_tcp_max_window_size - computed: true, optional: false, required: false
  public get clientProfileTcpMaxWindowSize() {
    return this.getNumberAttribute('client_profile_tcp_max_window_size');
  }

  // connection_retry_count - computed: true, optional: false, required: false
  public get connectionRetryCount() {
    return this.getNumberAttribute('connection_retry_count');
  }

  // connection_retry_delay - computed: true, optional: false, required: false
  public get connectionRetryDelay() {
    return this.getNumberAttribute('connection_retry_delay');
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

  // egress_flow_window_size - computed: true, optional: false, required: false
  public get egressFlowWindowSize() {
    return this.getNumberAttribute('egress_flow_window_size');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // initiator - computed: true, optional: false, required: false
  public get initiator() {
    return this.getStringAttribute('initiator');
  }

  // queue_dead_msg_queue - computed: true, optional: false, required: false
  public get queueDeadMsgQueue() {
    return this.getStringAttribute('queue_dead_msg_queue');
  }

  // queue_event_spool_usage_threshold - computed: true, optional: false, required: false
  private _queueEventSpoolUsageThreshold = new DataSolacebrokerDmrClusterLinkQueueEventSpoolUsageThresholdOutputReference(this, "queue_event_spool_usage_threshold");
  public get queueEventSpoolUsageThreshold() {
    return this._queueEventSpoolUsageThreshold;
  }

  // queue_max_delivered_unacked_msgs_per_flow - computed: true, optional: false, required: false
  public get queueMaxDeliveredUnackedMsgsPerFlow() {
    return this.getNumberAttribute('queue_max_delivered_unacked_msgs_per_flow');
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

  // queue_reject_msg_to_sender_on_discard_behavior - computed: true, optional: false, required: false
  public get queueRejectMsgToSenderOnDiscardBehavior() {
    return this.getStringAttribute('queue_reject_msg_to_sender_on_discard_behavior');
  }

  // queue_respect_ttl_enabled - computed: true, optional: false, required: false
  public get queueRespectTtlEnabled() {
    return this.getBooleanAttribute('queue_respect_ttl_enabled');
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

  // span - computed: true, optional: false, required: false
  public get span() {
    return this.getStringAttribute('span');
  }

  // transport_compressed_enabled - computed: true, optional: false, required: false
  public get transportCompressedEnabled() {
    return this.getBooleanAttribute('transport_compressed_enabled');
  }

  // transport_tls_enabled - computed: true, optional: false, required: false
  public get transportTlsEnabled() {
    return this.getBooleanAttribute('transport_tls_enabled');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dmr_cluster_name: cdktf.stringToTerraform(this._dmrClusterName),
      remote_node_name: cdktf.stringToTerraform(this._remoteNodeName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dmr_cluster_name: {
        value: cdktf.stringToHclTerraform(this._dmrClusterName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_node_name: {
        value: cdktf.stringToHclTerraform(this._remoteNodeName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
