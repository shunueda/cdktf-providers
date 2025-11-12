// https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/data-sources/solacebroker_msg_vpn_distributed_cache_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSolacebrokerMsgVpnDistributedCacheClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the Distributed Cache.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/data-sources/solacebroker_msg_vpn_distributed_cache_cluster#cache_name DataSolacebrokerMsgVpnDistributedCacheCluster#cache_name}
  */
  readonly cacheName: string;
  /**
  * The name of the Cache Cluster.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/data-sources/solacebroker_msg_vpn_distributed_cache_cluster#cluster_name DataSolacebrokerMsgVpnDistributedCacheCluster#cluster_name}
  */
  readonly clusterName: string;
  /**
  * The name of the Message VPN.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/data-sources/solacebroker_msg_vpn_distributed_cache_cluster#msg_vpn_name DataSolacebrokerMsgVpnDistributedCacheCluster#msg_vpn_name}
  */
  readonly msgVpnName: string;
}
export interface DataSolacebrokerMsgVpnDistributedCacheClusterEventDataByteRateThreshold {
}

export function dataSolacebrokerMsgVpnDistributedCacheClusterEventDataByteRateThresholdToTerraform(struct?: DataSolacebrokerMsgVpnDistributedCacheClusterEventDataByteRateThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSolacebrokerMsgVpnDistributedCacheClusterEventDataByteRateThresholdToHclTerraform(struct?: DataSolacebrokerMsgVpnDistributedCacheClusterEventDataByteRateThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSolacebrokerMsgVpnDistributedCacheClusterEventDataByteRateThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSolacebrokerMsgVpnDistributedCacheClusterEventDataByteRateThreshold | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSolacebrokerMsgVpnDistributedCacheClusterEventDataByteRateThreshold | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // clear_value - computed: true, optional: false, required: false
  public get clearValue() {
    return this.getNumberAttribute('clear_value');
  }

  // set_value - computed: true, optional: false, required: false
  public get setValue() {
    return this.getNumberAttribute('set_value');
  }
}
export interface DataSolacebrokerMsgVpnDistributedCacheClusterEventDataMsgRateThreshold {
}

export function dataSolacebrokerMsgVpnDistributedCacheClusterEventDataMsgRateThresholdToTerraform(struct?: DataSolacebrokerMsgVpnDistributedCacheClusterEventDataMsgRateThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSolacebrokerMsgVpnDistributedCacheClusterEventDataMsgRateThresholdToHclTerraform(struct?: DataSolacebrokerMsgVpnDistributedCacheClusterEventDataMsgRateThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSolacebrokerMsgVpnDistributedCacheClusterEventDataMsgRateThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSolacebrokerMsgVpnDistributedCacheClusterEventDataMsgRateThreshold | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSolacebrokerMsgVpnDistributedCacheClusterEventDataMsgRateThreshold | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // clear_value - computed: true, optional: false, required: false
  public get clearValue() {
    return this.getNumberAttribute('clear_value');
  }

  // set_value - computed: true, optional: false, required: false
  public get setValue() {
    return this.getNumberAttribute('set_value');
  }
}
export interface DataSolacebrokerMsgVpnDistributedCacheClusterEventMaxMemoryThreshold {
}

export function dataSolacebrokerMsgVpnDistributedCacheClusterEventMaxMemoryThresholdToTerraform(struct?: DataSolacebrokerMsgVpnDistributedCacheClusterEventMaxMemoryThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSolacebrokerMsgVpnDistributedCacheClusterEventMaxMemoryThresholdToHclTerraform(struct?: DataSolacebrokerMsgVpnDistributedCacheClusterEventMaxMemoryThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSolacebrokerMsgVpnDistributedCacheClusterEventMaxMemoryThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSolacebrokerMsgVpnDistributedCacheClusterEventMaxMemoryThreshold | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSolacebrokerMsgVpnDistributedCacheClusterEventMaxMemoryThreshold | undefined) {
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

  // set_percent - computed: true, optional: false, required: false
  public get setPercent() {
    return this.getNumberAttribute('set_percent');
  }
}
export interface DataSolacebrokerMsgVpnDistributedCacheClusterEventMaxTopicsThreshold {
}

export function dataSolacebrokerMsgVpnDistributedCacheClusterEventMaxTopicsThresholdToTerraform(struct?: DataSolacebrokerMsgVpnDistributedCacheClusterEventMaxTopicsThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSolacebrokerMsgVpnDistributedCacheClusterEventMaxTopicsThresholdToHclTerraform(struct?: DataSolacebrokerMsgVpnDistributedCacheClusterEventMaxTopicsThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSolacebrokerMsgVpnDistributedCacheClusterEventMaxTopicsThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSolacebrokerMsgVpnDistributedCacheClusterEventMaxTopicsThreshold | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSolacebrokerMsgVpnDistributedCacheClusterEventMaxTopicsThreshold | undefined) {
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

  // set_percent - computed: true, optional: false, required: false
  public get setPercent() {
    return this.getNumberAttribute('set_percent');
  }
}
export interface DataSolacebrokerMsgVpnDistributedCacheClusterEventRequestQueueDepthThreshold {
}

export function dataSolacebrokerMsgVpnDistributedCacheClusterEventRequestQueueDepthThresholdToTerraform(struct?: DataSolacebrokerMsgVpnDistributedCacheClusterEventRequestQueueDepthThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSolacebrokerMsgVpnDistributedCacheClusterEventRequestQueueDepthThresholdToHclTerraform(struct?: DataSolacebrokerMsgVpnDistributedCacheClusterEventRequestQueueDepthThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSolacebrokerMsgVpnDistributedCacheClusterEventRequestQueueDepthThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSolacebrokerMsgVpnDistributedCacheClusterEventRequestQueueDepthThreshold | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSolacebrokerMsgVpnDistributedCacheClusterEventRequestQueueDepthThreshold | undefined) {
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

  // set_percent - computed: true, optional: false, required: false
  public get setPercent() {
    return this.getNumberAttribute('set_percent');
  }
}
export interface DataSolacebrokerMsgVpnDistributedCacheClusterEventRequestRateThreshold {
}

export function dataSolacebrokerMsgVpnDistributedCacheClusterEventRequestRateThresholdToTerraform(struct?: DataSolacebrokerMsgVpnDistributedCacheClusterEventRequestRateThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSolacebrokerMsgVpnDistributedCacheClusterEventRequestRateThresholdToHclTerraform(struct?: DataSolacebrokerMsgVpnDistributedCacheClusterEventRequestRateThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSolacebrokerMsgVpnDistributedCacheClusterEventRequestRateThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSolacebrokerMsgVpnDistributedCacheClusterEventRequestRateThreshold | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSolacebrokerMsgVpnDistributedCacheClusterEventRequestRateThreshold | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // clear_value - computed: true, optional: false, required: false
  public get clearValue() {
    return this.getNumberAttribute('clear_value');
  }

  // set_value - computed: true, optional: false, required: false
  public get setValue() {
    return this.getNumberAttribute('set_value');
  }
}
export interface DataSolacebrokerMsgVpnDistributedCacheClusterEventResponseRateThreshold {
}

export function dataSolacebrokerMsgVpnDistributedCacheClusterEventResponseRateThresholdToTerraform(struct?: DataSolacebrokerMsgVpnDistributedCacheClusterEventResponseRateThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSolacebrokerMsgVpnDistributedCacheClusterEventResponseRateThresholdToHclTerraform(struct?: DataSolacebrokerMsgVpnDistributedCacheClusterEventResponseRateThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSolacebrokerMsgVpnDistributedCacheClusterEventResponseRateThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSolacebrokerMsgVpnDistributedCacheClusterEventResponseRateThreshold | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSolacebrokerMsgVpnDistributedCacheClusterEventResponseRateThreshold | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // clear_value - computed: true, optional: false, required: false
  public get clearValue() {
    return this.getNumberAttribute('clear_value');
  }

  // set_value - computed: true, optional: false, required: false
  public get setValue() {
    return this.getNumberAttribute('set_value');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/data-sources/solacebroker_msg_vpn_distributed_cache_cluster solacebroker_msg_vpn_distributed_cache_cluster}
*/
export class DataSolacebrokerMsgVpnDistributedCacheCluster extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "solacebroker_msg_vpn_distributed_cache_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSolacebrokerMsgVpnDistributedCacheCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSolacebrokerMsgVpnDistributedCacheCluster to import
  * @param importFromId The id of the existing DataSolacebrokerMsgVpnDistributedCacheCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/data-sources/solacebroker_msg_vpn_distributed_cache_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSolacebrokerMsgVpnDistributedCacheCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "solacebroker_msg_vpn_distributed_cache_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/data-sources/solacebroker_msg_vpn_distributed_cache_cluster solacebroker_msg_vpn_distributed_cache_cluster} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSolacebrokerMsgVpnDistributedCacheClusterConfig
  */
  public constructor(scope: Construct, id: string, config: DataSolacebrokerMsgVpnDistributedCacheClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'solacebroker_msg_vpn_distributed_cache_cluster',
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
    this._cacheName = config.cacheName;
    this._clusterName = config.clusterName;
    this._msgVpnName = config.msgVpnName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cache_name - computed: false, optional: false, required: true
  private _cacheName?: string; 
  public get cacheName() {
    return this.getStringAttribute('cache_name');
  }
  public set cacheName(value: string) {
    this._cacheName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheNameInput() {
    return this._cacheName;
  }

  // cluster_name - computed: false, optional: false, required: true
  private _clusterName?: string; 
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName;
  }

  // deliver_to_one_override_enabled - computed: true, optional: false, required: false
  public get deliverToOneOverrideEnabled() {
    return this.getBooleanAttribute('deliver_to_one_override_enabled');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // event_data_byte_rate_threshold - computed: true, optional: false, required: false
  private _eventDataByteRateThreshold = new DataSolacebrokerMsgVpnDistributedCacheClusterEventDataByteRateThresholdOutputReference(this, "event_data_byte_rate_threshold");
  public get eventDataByteRateThreshold() {
    return this._eventDataByteRateThreshold;
  }

  // event_data_msg_rate_threshold - computed: true, optional: false, required: false
  private _eventDataMsgRateThreshold = new DataSolacebrokerMsgVpnDistributedCacheClusterEventDataMsgRateThresholdOutputReference(this, "event_data_msg_rate_threshold");
  public get eventDataMsgRateThreshold() {
    return this._eventDataMsgRateThreshold;
  }

  // event_max_memory_threshold - computed: true, optional: false, required: false
  private _eventMaxMemoryThreshold = new DataSolacebrokerMsgVpnDistributedCacheClusterEventMaxMemoryThresholdOutputReference(this, "event_max_memory_threshold");
  public get eventMaxMemoryThreshold() {
    return this._eventMaxMemoryThreshold;
  }

  // event_max_topics_threshold - computed: true, optional: false, required: false
  private _eventMaxTopicsThreshold = new DataSolacebrokerMsgVpnDistributedCacheClusterEventMaxTopicsThresholdOutputReference(this, "event_max_topics_threshold");
  public get eventMaxTopicsThreshold() {
    return this._eventMaxTopicsThreshold;
  }

  // event_request_queue_depth_threshold - computed: true, optional: false, required: false
  private _eventRequestQueueDepthThreshold = new DataSolacebrokerMsgVpnDistributedCacheClusterEventRequestQueueDepthThresholdOutputReference(this, "event_request_queue_depth_threshold");
  public get eventRequestQueueDepthThreshold() {
    return this._eventRequestQueueDepthThreshold;
  }

  // event_request_rate_threshold - computed: true, optional: false, required: false
  private _eventRequestRateThreshold = new DataSolacebrokerMsgVpnDistributedCacheClusterEventRequestRateThresholdOutputReference(this, "event_request_rate_threshold");
  public get eventRequestRateThreshold() {
    return this._eventRequestRateThreshold;
  }

  // event_response_rate_threshold - computed: true, optional: false, required: false
  private _eventResponseRateThreshold = new DataSolacebrokerMsgVpnDistributedCacheClusterEventResponseRateThresholdOutputReference(this, "event_response_rate_threshold");
  public get eventResponseRateThreshold() {
    return this._eventResponseRateThreshold;
  }

  // global_caching_enabled - computed: true, optional: false, required: false
  public get globalCachingEnabled() {
    return this.getBooleanAttribute('global_caching_enabled');
  }

  // global_caching_heartbeat - computed: true, optional: false, required: false
  public get globalCachingHeartbeat() {
    return this.getNumberAttribute('global_caching_heartbeat');
  }

  // global_caching_topic_lifetime - computed: true, optional: false, required: false
  public get globalCachingTopicLifetime() {
    return this.getNumberAttribute('global_caching_topic_lifetime');
  }

  // max_memory - computed: true, optional: false, required: false
  public get maxMemory() {
    return this.getNumberAttribute('max_memory');
  }

  // max_msgs_per_topic - computed: true, optional: false, required: false
  public get maxMsgsPerTopic() {
    return this.getNumberAttribute('max_msgs_per_topic');
  }

  // max_request_queue_depth - computed: true, optional: false, required: false
  public get maxRequestQueueDepth() {
    return this.getNumberAttribute('max_request_queue_depth');
  }

  // max_topic_count - computed: true, optional: false, required: false
  public get maxTopicCount() {
    return this.getNumberAttribute('max_topic_count');
  }

  // msg_lifetime - computed: true, optional: false, required: false
  public get msgLifetime() {
    return this.getNumberAttribute('msg_lifetime');
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

  // new_topic_advertisement_enabled - computed: true, optional: false, required: false
  public get newTopicAdvertisementEnabled() {
    return this.getBooleanAttribute('new_topic_advertisement_enabled');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cache_name: cdktf.stringToTerraform(this._cacheName),
      cluster_name: cdktf.stringToTerraform(this._clusterName),
      msg_vpn_name: cdktf.stringToTerraform(this._msgVpnName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cache_name: {
        value: cdktf.stringToHclTerraform(this._cacheName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_name: {
        value: cdktf.stringToHclTerraform(this._clusterName),
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
