// https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_distributed_cache_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SolacebrokerMsgVpnDistributedCacheClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the Distributed Cache.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_distributed_cache_cluster#cache_name SolacebrokerMsgVpnDistributedCacheCluster#cache_name}
  */
  readonly cacheName: string;
  /**
  * The name of the Cache Cluster.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_distributed_cache_cluster#cluster_name SolacebrokerMsgVpnDistributedCacheCluster#cluster_name}
  */
  readonly clusterName: string;
  /**
  * Enable or disable deliver-to-one override for the Cache Cluster.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_distributed_cache_cluster#deliver_to_one_override_enabled SolacebrokerMsgVpnDistributedCacheCluster#deliver_to_one_override_enabled}
  */
  readonly deliverToOneOverrideEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enable or disable the Cache Cluster.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_distributed_cache_cluster#enabled SolacebrokerMsgVpnDistributedCacheCluster#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The thresholds for the cached data incoming byte rate event, in bytes per second.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_distributed_cache_cluster#event_data_byte_rate_threshold SolacebrokerMsgVpnDistributedCacheCluster#event_data_byte_rate_threshold}
  */
  readonly eventDataByteRateThreshold?: SolacebrokerMsgVpnDistributedCacheClusterEventDataByteRateThreshold;
  /**
  * The thresholds for the cached data incoming message rate event, in messages per second.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_distributed_cache_cluster#event_data_msg_rate_threshold SolacebrokerMsgVpnDistributedCacheCluster#event_data_msg_rate_threshold}
  */
  readonly eventDataMsgRateThreshold?: SolacebrokerMsgVpnDistributedCacheClusterEventDataMsgRateThreshold;
  /**
  * The thresholds for the memory usage per instance event, relative to `max_memory`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_distributed_cache_cluster#event_max_memory_threshold SolacebrokerMsgVpnDistributedCacheCluster#event_max_memory_threshold}
  */
  readonly eventMaxMemoryThreshold?: SolacebrokerMsgVpnDistributedCacheClusterEventMaxMemoryThreshold;
  /**
  * The thresholds for the topics per instance event, relative to `max_topic_count`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_distributed_cache_cluster#event_max_topics_threshold SolacebrokerMsgVpnDistributedCacheCluster#event_max_topics_threshold}
  */
  readonly eventMaxTopicsThreshold?: SolacebrokerMsgVpnDistributedCacheClusterEventMaxTopicsThreshold;
  /**
  * The thresholds for the request queue depth event, relative to `max_request_queue_depth`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_distributed_cache_cluster#event_request_queue_depth_threshold SolacebrokerMsgVpnDistributedCacheCluster#event_request_queue_depth_threshold}
  */
  readonly eventRequestQueueDepthThreshold?: SolacebrokerMsgVpnDistributedCacheClusterEventRequestQueueDepthThreshold;
  /**
  * The thresholds for the cache request message rate event, in messages per second.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_distributed_cache_cluster#event_request_rate_threshold SolacebrokerMsgVpnDistributedCacheCluster#event_request_rate_threshold}
  */
  readonly eventRequestRateThreshold?: SolacebrokerMsgVpnDistributedCacheClusterEventRequestRateThreshold;
  /**
  * The thresholds for the cache response message rate event, in messages per second.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_distributed_cache_cluster#event_response_rate_threshold SolacebrokerMsgVpnDistributedCacheCluster#event_response_rate_threshold}
  */
  readonly eventResponseRateThreshold?: SolacebrokerMsgVpnDistributedCacheClusterEventResponseRateThreshold;
  /**
  * Enable or disable global caching for the Cache Cluster. When enabled, the Cache Instances will fetch topics from remote Home Cache Clusters when requested, and subscribe to those topics to cache them locally. When disabled, the Cache Instances will remove all subscriptions and cached messages for topics from remote Home Cache Clusters.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_distributed_cache_cluster#global_caching_enabled SolacebrokerMsgVpnDistributedCacheCluster#global_caching_enabled}
  */
  readonly globalCachingEnabled?: boolean | cdktf.IResolvable;
  /**
  * The heartbeat interval, in seconds, used by the Cache Instances to monitor connectivity with the remote Home Cache Clusters.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `3`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_distributed_cache_cluster#global_caching_heartbeat SolacebrokerMsgVpnDistributedCacheCluster#global_caching_heartbeat}
  */
  readonly globalCachingHeartbeat?: number;
  /**
  * The topic lifetime, in seconds. If no client requests are received for a given global topic over the duration of the topic lifetime, then the Cache Instance will remove the subscription and cached messages for that topic. A value of 0 disables aging.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `3600`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_distributed_cache_cluster#global_caching_topic_lifetime SolacebrokerMsgVpnDistributedCacheCluster#global_caching_topic_lifetime}
  */
  readonly globalCachingTopicLifetime?: number;
  /**
  * The maximum memory usage, in megabytes (MB), for each Cache Instance in the Cache Cluster.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `2048`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_distributed_cache_cluster#max_memory SolacebrokerMsgVpnDistributedCacheCluster#max_memory}
  */
  readonly maxMemory?: number;
  /**
  * The maximum number of messages per topic for each Cache Instance in the Cache Cluster. When at the maximum, old messages are removed as new messages arrive.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_distributed_cache_cluster#max_msgs_per_topic SolacebrokerMsgVpnDistributedCacheCluster#max_msgs_per_topic}
  */
  readonly maxMsgsPerTopic?: number;
  /**
  * The maximum queue depth for cache requests received by the Cache Cluster.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `100000`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_distributed_cache_cluster#max_request_queue_depth SolacebrokerMsgVpnDistributedCacheCluster#max_request_queue_depth}
  */
  readonly maxRequestQueueDepth?: number;
  /**
  * The maximum number of topics for each Cache Instance in the Cache Cluster.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `2000000`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_distributed_cache_cluster#max_topic_count SolacebrokerMsgVpnDistributedCacheCluster#max_topic_count}
  */
  readonly maxTopicCount?: number;
  /**
  * The message lifetime, in seconds. If a message remains cached for the duration of its lifetime, the Cache Instance will remove the message. A lifetime of 0 results in the message being retained indefinitely.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_distributed_cache_cluster#msg_lifetime SolacebrokerMsgVpnDistributedCacheCluster#msg_lifetime}
  */
  readonly msgLifetime?: number;
  /**
  * The name of the Message VPN.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_distributed_cache_cluster#msg_vpn_name SolacebrokerMsgVpnDistributedCacheCluster#msg_vpn_name}
  */
  readonly msgVpnName: string;
  /**
  * Enable or disable the advertising, onto the message bus, of new topics learned by each Cache Instance in the Cache Cluster.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_distributed_cache_cluster#new_topic_advertisement_enabled SolacebrokerMsgVpnDistributedCacheCluster#new_topic_advertisement_enabled}
  */
  readonly newTopicAdvertisementEnabled?: boolean | cdktf.IResolvable;
}
export interface SolacebrokerMsgVpnDistributedCacheClusterEventDataByteRateThreshold {
  /**
  * The clear threshold for the absolute value of this counter or rate. Falling below this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `187500000`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_distributed_cache_cluster#clear_value SolacebrokerMsgVpnDistributedCacheCluster#clear_value}
  */
  readonly clearValue?: number;
  /**
  * The set threshold for the absolute value of this counter or rate. Exceeding this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `250000000`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_distributed_cache_cluster#set_value SolacebrokerMsgVpnDistributedCacheCluster#set_value}
  */
  readonly setValue?: number;
}

export function solacebrokerMsgVpnDistributedCacheClusterEventDataByteRateThresholdToTerraform(struct?: SolacebrokerMsgVpnDistributedCacheClusterEventDataByteRateThreshold | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    clear_value: cdktf.numberToTerraform(struct!.clearValue),
    set_value: cdktf.numberToTerraform(struct!.setValue),
  }
}


export function solacebrokerMsgVpnDistributedCacheClusterEventDataByteRateThresholdToHclTerraform(struct?: SolacebrokerMsgVpnDistributedCacheClusterEventDataByteRateThreshold | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    clear_value: {
      value: cdktf.numberToHclTerraform(struct!.clearValue),
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

export class SolacebrokerMsgVpnDistributedCacheClusterEventDataByteRateThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SolacebrokerMsgVpnDistributedCacheClusterEventDataByteRateThreshold | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clearValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearValue = this._clearValue;
    }
    if (this._setValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.setValue = this._setValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SolacebrokerMsgVpnDistributedCacheClusterEventDataByteRateThreshold | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clearValue = undefined;
      this._setValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clearValue = value.clearValue;
      this._setValue = value.setValue;
    }
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
export interface SolacebrokerMsgVpnDistributedCacheClusterEventDataMsgRateThreshold {
  /**
  * The clear threshold for the absolute value of this counter or rate. Falling below this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `36000`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_distributed_cache_cluster#clear_value SolacebrokerMsgVpnDistributedCacheCluster#clear_value}
  */
  readonly clearValue?: number;
  /**
  * The set threshold for the absolute value of this counter or rate. Exceeding this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `48000`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_distributed_cache_cluster#set_value SolacebrokerMsgVpnDistributedCacheCluster#set_value}
  */
  readonly setValue?: number;
}

export function solacebrokerMsgVpnDistributedCacheClusterEventDataMsgRateThresholdToTerraform(struct?: SolacebrokerMsgVpnDistributedCacheClusterEventDataMsgRateThreshold | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    clear_value: cdktf.numberToTerraform(struct!.clearValue),
    set_value: cdktf.numberToTerraform(struct!.setValue),
  }
}


export function solacebrokerMsgVpnDistributedCacheClusterEventDataMsgRateThresholdToHclTerraform(struct?: SolacebrokerMsgVpnDistributedCacheClusterEventDataMsgRateThreshold | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    clear_value: {
      value: cdktf.numberToHclTerraform(struct!.clearValue),
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

export class SolacebrokerMsgVpnDistributedCacheClusterEventDataMsgRateThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SolacebrokerMsgVpnDistributedCacheClusterEventDataMsgRateThreshold | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clearValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearValue = this._clearValue;
    }
    if (this._setValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.setValue = this._setValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SolacebrokerMsgVpnDistributedCacheClusterEventDataMsgRateThreshold | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clearValue = undefined;
      this._setValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clearValue = value.clearValue;
      this._setValue = value.setValue;
    }
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
export interface SolacebrokerMsgVpnDistributedCacheClusterEventMaxMemoryThreshold {
  /**
  * The clear threshold for the value of this counter as a percentage of its maximum value. Falling below this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `60`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_distributed_cache_cluster#clear_percent SolacebrokerMsgVpnDistributedCacheCluster#clear_percent}
  */
  readonly clearPercent?: number;
  /**
  * The set threshold for the value of this counter as a percentage of its maximum value. Exceeding this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `80`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_distributed_cache_cluster#set_percent SolacebrokerMsgVpnDistributedCacheCluster#set_percent}
  */
  readonly setPercent?: number;
}

export function solacebrokerMsgVpnDistributedCacheClusterEventMaxMemoryThresholdToTerraform(struct?: SolacebrokerMsgVpnDistributedCacheClusterEventMaxMemoryThreshold | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    clear_percent: cdktf.numberToTerraform(struct!.clearPercent),
    set_percent: cdktf.numberToTerraform(struct!.setPercent),
  }
}


export function solacebrokerMsgVpnDistributedCacheClusterEventMaxMemoryThresholdToHclTerraform(struct?: SolacebrokerMsgVpnDistributedCacheClusterEventMaxMemoryThreshold | cdktf.IResolvable): any {
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
    set_percent: {
      value: cdktf.numberToHclTerraform(struct!.setPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SolacebrokerMsgVpnDistributedCacheClusterEventMaxMemoryThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SolacebrokerMsgVpnDistributedCacheClusterEventMaxMemoryThreshold | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clearPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearPercent = this._clearPercent;
    }
    if (this._setPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.setPercent = this._setPercent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SolacebrokerMsgVpnDistributedCacheClusterEventMaxMemoryThreshold | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clearPercent = undefined;
      this._setPercent = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clearPercent = value.clearPercent;
      this._setPercent = value.setPercent;
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
}
export interface SolacebrokerMsgVpnDistributedCacheClusterEventMaxTopicsThreshold {
  /**
  * The clear threshold for the value of this counter as a percentage of its maximum value. Falling below this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `60`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_distributed_cache_cluster#clear_percent SolacebrokerMsgVpnDistributedCacheCluster#clear_percent}
  */
  readonly clearPercent?: number;
  /**
  * The set threshold for the value of this counter as a percentage of its maximum value. Exceeding this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `80`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_distributed_cache_cluster#set_percent SolacebrokerMsgVpnDistributedCacheCluster#set_percent}
  */
  readonly setPercent?: number;
}

export function solacebrokerMsgVpnDistributedCacheClusterEventMaxTopicsThresholdToTerraform(struct?: SolacebrokerMsgVpnDistributedCacheClusterEventMaxTopicsThreshold | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    clear_percent: cdktf.numberToTerraform(struct!.clearPercent),
    set_percent: cdktf.numberToTerraform(struct!.setPercent),
  }
}


export function solacebrokerMsgVpnDistributedCacheClusterEventMaxTopicsThresholdToHclTerraform(struct?: SolacebrokerMsgVpnDistributedCacheClusterEventMaxTopicsThreshold | cdktf.IResolvable): any {
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
    set_percent: {
      value: cdktf.numberToHclTerraform(struct!.setPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SolacebrokerMsgVpnDistributedCacheClusterEventMaxTopicsThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SolacebrokerMsgVpnDistributedCacheClusterEventMaxTopicsThreshold | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clearPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearPercent = this._clearPercent;
    }
    if (this._setPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.setPercent = this._setPercent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SolacebrokerMsgVpnDistributedCacheClusterEventMaxTopicsThreshold | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clearPercent = undefined;
      this._setPercent = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clearPercent = value.clearPercent;
      this._setPercent = value.setPercent;
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
}
export interface SolacebrokerMsgVpnDistributedCacheClusterEventRequestQueueDepthThreshold {
  /**
  * The clear threshold for the value of this counter as a percentage of its maximum value. Falling below this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `60`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_distributed_cache_cluster#clear_percent SolacebrokerMsgVpnDistributedCacheCluster#clear_percent}
  */
  readonly clearPercent?: number;
  /**
  * The set threshold for the value of this counter as a percentage of its maximum value. Exceeding this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `80`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_distributed_cache_cluster#set_percent SolacebrokerMsgVpnDistributedCacheCluster#set_percent}
  */
  readonly setPercent?: number;
}

export function solacebrokerMsgVpnDistributedCacheClusterEventRequestQueueDepthThresholdToTerraform(struct?: SolacebrokerMsgVpnDistributedCacheClusterEventRequestQueueDepthThreshold | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    clear_percent: cdktf.numberToTerraform(struct!.clearPercent),
    set_percent: cdktf.numberToTerraform(struct!.setPercent),
  }
}


export function solacebrokerMsgVpnDistributedCacheClusterEventRequestQueueDepthThresholdToHclTerraform(struct?: SolacebrokerMsgVpnDistributedCacheClusterEventRequestQueueDepthThreshold | cdktf.IResolvable): any {
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
    set_percent: {
      value: cdktf.numberToHclTerraform(struct!.setPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SolacebrokerMsgVpnDistributedCacheClusterEventRequestQueueDepthThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SolacebrokerMsgVpnDistributedCacheClusterEventRequestQueueDepthThreshold | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clearPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearPercent = this._clearPercent;
    }
    if (this._setPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.setPercent = this._setPercent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SolacebrokerMsgVpnDistributedCacheClusterEventRequestQueueDepthThreshold | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clearPercent = undefined;
      this._setPercent = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clearPercent = value.clearPercent;
      this._setPercent = value.setPercent;
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
}
export interface SolacebrokerMsgVpnDistributedCacheClusterEventRequestRateThreshold {
  /**
  * The clear threshold for the absolute value of this counter or rate. Falling below this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `1000`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_distributed_cache_cluster#clear_value SolacebrokerMsgVpnDistributedCacheCluster#clear_value}
  */
  readonly clearValue?: number;
  /**
  * The set threshold for the absolute value of this counter or rate. Exceeding this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `25000`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_distributed_cache_cluster#set_value SolacebrokerMsgVpnDistributedCacheCluster#set_value}
  */
  readonly setValue?: number;
}

export function solacebrokerMsgVpnDistributedCacheClusterEventRequestRateThresholdToTerraform(struct?: SolacebrokerMsgVpnDistributedCacheClusterEventRequestRateThreshold | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    clear_value: cdktf.numberToTerraform(struct!.clearValue),
    set_value: cdktf.numberToTerraform(struct!.setValue),
  }
}


export function solacebrokerMsgVpnDistributedCacheClusterEventRequestRateThresholdToHclTerraform(struct?: SolacebrokerMsgVpnDistributedCacheClusterEventRequestRateThreshold | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    clear_value: {
      value: cdktf.numberToHclTerraform(struct!.clearValue),
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

export class SolacebrokerMsgVpnDistributedCacheClusterEventRequestRateThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SolacebrokerMsgVpnDistributedCacheClusterEventRequestRateThreshold | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clearValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearValue = this._clearValue;
    }
    if (this._setValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.setValue = this._setValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SolacebrokerMsgVpnDistributedCacheClusterEventRequestRateThreshold | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clearValue = undefined;
      this._setValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clearValue = value.clearValue;
      this._setValue = value.setValue;
    }
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
export interface SolacebrokerMsgVpnDistributedCacheClusterEventResponseRateThreshold {
  /**
  * The clear threshold for the absolute value of this counter or rate. Falling below this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `1000`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_distributed_cache_cluster#clear_value SolacebrokerMsgVpnDistributedCacheCluster#clear_value}
  */
  readonly clearValue?: number;
  /**
  * The set threshold for the absolute value of this counter or rate. Exceeding this value will trigger a corresponding event.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `80000`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_distributed_cache_cluster#set_value SolacebrokerMsgVpnDistributedCacheCluster#set_value}
  */
  readonly setValue?: number;
}

export function solacebrokerMsgVpnDistributedCacheClusterEventResponseRateThresholdToTerraform(struct?: SolacebrokerMsgVpnDistributedCacheClusterEventResponseRateThreshold | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    clear_value: cdktf.numberToTerraform(struct!.clearValue),
    set_value: cdktf.numberToTerraform(struct!.setValue),
  }
}


export function solacebrokerMsgVpnDistributedCacheClusterEventResponseRateThresholdToHclTerraform(struct?: SolacebrokerMsgVpnDistributedCacheClusterEventResponseRateThreshold | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    clear_value: {
      value: cdktf.numberToHclTerraform(struct!.clearValue),
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

export class SolacebrokerMsgVpnDistributedCacheClusterEventResponseRateThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SolacebrokerMsgVpnDistributedCacheClusterEventResponseRateThreshold | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clearValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearValue = this._clearValue;
    }
    if (this._setValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.setValue = this._setValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SolacebrokerMsgVpnDistributedCacheClusterEventResponseRateThreshold | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clearValue = undefined;
      this._setValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clearValue = value.clearValue;
      this._setValue = value.setValue;
    }
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
* Represents a {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_distributed_cache_cluster solacebroker_msg_vpn_distributed_cache_cluster}
*/
export class SolacebrokerMsgVpnDistributedCacheCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "solacebroker_msg_vpn_distributed_cache_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SolacebrokerMsgVpnDistributedCacheCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SolacebrokerMsgVpnDistributedCacheCluster to import
  * @param importFromId The id of the existing SolacebrokerMsgVpnDistributedCacheCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_distributed_cache_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SolacebrokerMsgVpnDistributedCacheCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "solacebroker_msg_vpn_distributed_cache_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_distributed_cache_cluster solacebroker_msg_vpn_distributed_cache_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SolacebrokerMsgVpnDistributedCacheClusterConfig
  */
  public constructor(scope: Construct, id: string, config: SolacebrokerMsgVpnDistributedCacheClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'solacebroker_msg_vpn_distributed_cache_cluster',
      terraformGeneratorMetadata: {
        providerName: 'solacebrokerappliance',
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
    this._cacheName = config.cacheName;
    this._clusterName = config.clusterName;
    this._deliverToOneOverrideEnabled = config.deliverToOneOverrideEnabled;
    this._enabled = config.enabled;
    this._eventDataByteRateThreshold.internalValue = config.eventDataByteRateThreshold;
    this._eventDataMsgRateThreshold.internalValue = config.eventDataMsgRateThreshold;
    this._eventMaxMemoryThreshold.internalValue = config.eventMaxMemoryThreshold;
    this._eventMaxTopicsThreshold.internalValue = config.eventMaxTopicsThreshold;
    this._eventRequestQueueDepthThreshold.internalValue = config.eventRequestQueueDepthThreshold;
    this._eventRequestRateThreshold.internalValue = config.eventRequestRateThreshold;
    this._eventResponseRateThreshold.internalValue = config.eventResponseRateThreshold;
    this._globalCachingEnabled = config.globalCachingEnabled;
    this._globalCachingHeartbeat = config.globalCachingHeartbeat;
    this._globalCachingTopicLifetime = config.globalCachingTopicLifetime;
    this._maxMemory = config.maxMemory;
    this._maxMsgsPerTopic = config.maxMsgsPerTopic;
    this._maxRequestQueueDepth = config.maxRequestQueueDepth;
    this._maxTopicCount = config.maxTopicCount;
    this._msgLifetime = config.msgLifetime;
    this._msgVpnName = config.msgVpnName;
    this._newTopicAdvertisementEnabled = config.newTopicAdvertisementEnabled;
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

  // deliver_to_one_override_enabled - computed: false, optional: true, required: false
  private _deliverToOneOverrideEnabled?: boolean | cdktf.IResolvable; 
  public get deliverToOneOverrideEnabled() {
    return this.getBooleanAttribute('deliver_to_one_override_enabled');
  }
  public set deliverToOneOverrideEnabled(value: boolean | cdktf.IResolvable) {
    this._deliverToOneOverrideEnabled = value;
  }
  public resetDeliverToOneOverrideEnabled() {
    this._deliverToOneOverrideEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deliverToOneOverrideEnabledInput() {
    return this._deliverToOneOverrideEnabled;
  }

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

  // event_data_byte_rate_threshold - computed: false, optional: true, required: false
  private _eventDataByteRateThreshold = new SolacebrokerMsgVpnDistributedCacheClusterEventDataByteRateThresholdOutputReference(this, "event_data_byte_rate_threshold");
  public get eventDataByteRateThreshold() {
    return this._eventDataByteRateThreshold;
  }
  public putEventDataByteRateThreshold(value: SolacebrokerMsgVpnDistributedCacheClusterEventDataByteRateThreshold) {
    this._eventDataByteRateThreshold.internalValue = value;
  }
  public resetEventDataByteRateThreshold() {
    this._eventDataByteRateThreshold.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventDataByteRateThresholdInput() {
    return this._eventDataByteRateThreshold.internalValue;
  }

  // event_data_msg_rate_threshold - computed: false, optional: true, required: false
  private _eventDataMsgRateThreshold = new SolacebrokerMsgVpnDistributedCacheClusterEventDataMsgRateThresholdOutputReference(this, "event_data_msg_rate_threshold");
  public get eventDataMsgRateThreshold() {
    return this._eventDataMsgRateThreshold;
  }
  public putEventDataMsgRateThreshold(value: SolacebrokerMsgVpnDistributedCacheClusterEventDataMsgRateThreshold) {
    this._eventDataMsgRateThreshold.internalValue = value;
  }
  public resetEventDataMsgRateThreshold() {
    this._eventDataMsgRateThreshold.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventDataMsgRateThresholdInput() {
    return this._eventDataMsgRateThreshold.internalValue;
  }

  // event_max_memory_threshold - computed: false, optional: true, required: false
  private _eventMaxMemoryThreshold = new SolacebrokerMsgVpnDistributedCacheClusterEventMaxMemoryThresholdOutputReference(this, "event_max_memory_threshold");
  public get eventMaxMemoryThreshold() {
    return this._eventMaxMemoryThreshold;
  }
  public putEventMaxMemoryThreshold(value: SolacebrokerMsgVpnDistributedCacheClusterEventMaxMemoryThreshold) {
    this._eventMaxMemoryThreshold.internalValue = value;
  }
  public resetEventMaxMemoryThreshold() {
    this._eventMaxMemoryThreshold.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventMaxMemoryThresholdInput() {
    return this._eventMaxMemoryThreshold.internalValue;
  }

  // event_max_topics_threshold - computed: false, optional: true, required: false
  private _eventMaxTopicsThreshold = new SolacebrokerMsgVpnDistributedCacheClusterEventMaxTopicsThresholdOutputReference(this, "event_max_topics_threshold");
  public get eventMaxTopicsThreshold() {
    return this._eventMaxTopicsThreshold;
  }
  public putEventMaxTopicsThreshold(value: SolacebrokerMsgVpnDistributedCacheClusterEventMaxTopicsThreshold) {
    this._eventMaxTopicsThreshold.internalValue = value;
  }
  public resetEventMaxTopicsThreshold() {
    this._eventMaxTopicsThreshold.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventMaxTopicsThresholdInput() {
    return this._eventMaxTopicsThreshold.internalValue;
  }

  // event_request_queue_depth_threshold - computed: false, optional: true, required: false
  private _eventRequestQueueDepthThreshold = new SolacebrokerMsgVpnDistributedCacheClusterEventRequestQueueDepthThresholdOutputReference(this, "event_request_queue_depth_threshold");
  public get eventRequestQueueDepthThreshold() {
    return this._eventRequestQueueDepthThreshold;
  }
  public putEventRequestQueueDepthThreshold(value: SolacebrokerMsgVpnDistributedCacheClusterEventRequestQueueDepthThreshold) {
    this._eventRequestQueueDepthThreshold.internalValue = value;
  }
  public resetEventRequestQueueDepthThreshold() {
    this._eventRequestQueueDepthThreshold.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventRequestQueueDepthThresholdInput() {
    return this._eventRequestQueueDepthThreshold.internalValue;
  }

  // event_request_rate_threshold - computed: false, optional: true, required: false
  private _eventRequestRateThreshold = new SolacebrokerMsgVpnDistributedCacheClusterEventRequestRateThresholdOutputReference(this, "event_request_rate_threshold");
  public get eventRequestRateThreshold() {
    return this._eventRequestRateThreshold;
  }
  public putEventRequestRateThreshold(value: SolacebrokerMsgVpnDistributedCacheClusterEventRequestRateThreshold) {
    this._eventRequestRateThreshold.internalValue = value;
  }
  public resetEventRequestRateThreshold() {
    this._eventRequestRateThreshold.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventRequestRateThresholdInput() {
    return this._eventRequestRateThreshold.internalValue;
  }

  // event_response_rate_threshold - computed: false, optional: true, required: false
  private _eventResponseRateThreshold = new SolacebrokerMsgVpnDistributedCacheClusterEventResponseRateThresholdOutputReference(this, "event_response_rate_threshold");
  public get eventResponseRateThreshold() {
    return this._eventResponseRateThreshold;
  }
  public putEventResponseRateThreshold(value: SolacebrokerMsgVpnDistributedCacheClusterEventResponseRateThreshold) {
    this._eventResponseRateThreshold.internalValue = value;
  }
  public resetEventResponseRateThreshold() {
    this._eventResponseRateThreshold.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventResponseRateThresholdInput() {
    return this._eventResponseRateThreshold.internalValue;
  }

  // global_caching_enabled - computed: false, optional: true, required: false
  private _globalCachingEnabled?: boolean | cdktf.IResolvable; 
  public get globalCachingEnabled() {
    return this.getBooleanAttribute('global_caching_enabled');
  }
  public set globalCachingEnabled(value: boolean | cdktf.IResolvable) {
    this._globalCachingEnabled = value;
  }
  public resetGlobalCachingEnabled() {
    this._globalCachingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalCachingEnabledInput() {
    return this._globalCachingEnabled;
  }

  // global_caching_heartbeat - computed: false, optional: true, required: false
  private _globalCachingHeartbeat?: number; 
  public get globalCachingHeartbeat() {
    return this.getNumberAttribute('global_caching_heartbeat');
  }
  public set globalCachingHeartbeat(value: number) {
    this._globalCachingHeartbeat = value;
  }
  public resetGlobalCachingHeartbeat() {
    this._globalCachingHeartbeat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalCachingHeartbeatInput() {
    return this._globalCachingHeartbeat;
  }

  // global_caching_topic_lifetime - computed: false, optional: true, required: false
  private _globalCachingTopicLifetime?: number; 
  public get globalCachingTopicLifetime() {
    return this.getNumberAttribute('global_caching_topic_lifetime');
  }
  public set globalCachingTopicLifetime(value: number) {
    this._globalCachingTopicLifetime = value;
  }
  public resetGlobalCachingTopicLifetime() {
    this._globalCachingTopicLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalCachingTopicLifetimeInput() {
    return this._globalCachingTopicLifetime;
  }

  // max_memory - computed: false, optional: true, required: false
  private _maxMemory?: number; 
  public get maxMemory() {
    return this.getNumberAttribute('max_memory');
  }
  public set maxMemory(value: number) {
    this._maxMemory = value;
  }
  public resetMaxMemory() {
    this._maxMemory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxMemoryInput() {
    return this._maxMemory;
  }

  // max_msgs_per_topic - computed: false, optional: true, required: false
  private _maxMsgsPerTopic?: number; 
  public get maxMsgsPerTopic() {
    return this.getNumberAttribute('max_msgs_per_topic');
  }
  public set maxMsgsPerTopic(value: number) {
    this._maxMsgsPerTopic = value;
  }
  public resetMaxMsgsPerTopic() {
    this._maxMsgsPerTopic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxMsgsPerTopicInput() {
    return this._maxMsgsPerTopic;
  }

  // max_request_queue_depth - computed: false, optional: true, required: false
  private _maxRequestQueueDepth?: number; 
  public get maxRequestQueueDepth() {
    return this.getNumberAttribute('max_request_queue_depth');
  }
  public set maxRequestQueueDepth(value: number) {
    this._maxRequestQueueDepth = value;
  }
  public resetMaxRequestQueueDepth() {
    this._maxRequestQueueDepth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRequestQueueDepthInput() {
    return this._maxRequestQueueDepth;
  }

  // max_topic_count - computed: false, optional: true, required: false
  private _maxTopicCount?: number; 
  public get maxTopicCount() {
    return this.getNumberAttribute('max_topic_count');
  }
  public set maxTopicCount(value: number) {
    this._maxTopicCount = value;
  }
  public resetMaxTopicCount() {
    this._maxTopicCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTopicCountInput() {
    return this._maxTopicCount;
  }

  // msg_lifetime - computed: false, optional: true, required: false
  private _msgLifetime?: number; 
  public get msgLifetime() {
    return this.getNumberAttribute('msg_lifetime');
  }
  public set msgLifetime(value: number) {
    this._msgLifetime = value;
  }
  public resetMsgLifetime() {
    this._msgLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msgLifetimeInput() {
    return this._msgLifetime;
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

  // new_topic_advertisement_enabled - computed: false, optional: true, required: false
  private _newTopicAdvertisementEnabled?: boolean | cdktf.IResolvable; 
  public get newTopicAdvertisementEnabled() {
    return this.getBooleanAttribute('new_topic_advertisement_enabled');
  }
  public set newTopicAdvertisementEnabled(value: boolean | cdktf.IResolvable) {
    this._newTopicAdvertisementEnabled = value;
  }
  public resetNewTopicAdvertisementEnabled() {
    this._newTopicAdvertisementEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newTopicAdvertisementEnabledInput() {
    return this._newTopicAdvertisementEnabled;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cache_name: cdktf.stringToTerraform(this._cacheName),
      cluster_name: cdktf.stringToTerraform(this._clusterName),
      deliver_to_one_override_enabled: cdktf.booleanToTerraform(this._deliverToOneOverrideEnabled),
      enabled: cdktf.booleanToTerraform(this._enabled),
      event_data_byte_rate_threshold: solacebrokerMsgVpnDistributedCacheClusterEventDataByteRateThresholdToTerraform(this._eventDataByteRateThreshold.internalValue),
      event_data_msg_rate_threshold: solacebrokerMsgVpnDistributedCacheClusterEventDataMsgRateThresholdToTerraform(this._eventDataMsgRateThreshold.internalValue),
      event_max_memory_threshold: solacebrokerMsgVpnDistributedCacheClusterEventMaxMemoryThresholdToTerraform(this._eventMaxMemoryThreshold.internalValue),
      event_max_topics_threshold: solacebrokerMsgVpnDistributedCacheClusterEventMaxTopicsThresholdToTerraform(this._eventMaxTopicsThreshold.internalValue),
      event_request_queue_depth_threshold: solacebrokerMsgVpnDistributedCacheClusterEventRequestQueueDepthThresholdToTerraform(this._eventRequestQueueDepthThreshold.internalValue),
      event_request_rate_threshold: solacebrokerMsgVpnDistributedCacheClusterEventRequestRateThresholdToTerraform(this._eventRequestRateThreshold.internalValue),
      event_response_rate_threshold: solacebrokerMsgVpnDistributedCacheClusterEventResponseRateThresholdToTerraform(this._eventResponseRateThreshold.internalValue),
      global_caching_enabled: cdktf.booleanToTerraform(this._globalCachingEnabled),
      global_caching_heartbeat: cdktf.numberToTerraform(this._globalCachingHeartbeat),
      global_caching_topic_lifetime: cdktf.numberToTerraform(this._globalCachingTopicLifetime),
      max_memory: cdktf.numberToTerraform(this._maxMemory),
      max_msgs_per_topic: cdktf.numberToTerraform(this._maxMsgsPerTopic),
      max_request_queue_depth: cdktf.numberToTerraform(this._maxRequestQueueDepth),
      max_topic_count: cdktf.numberToTerraform(this._maxTopicCount),
      msg_lifetime: cdktf.numberToTerraform(this._msgLifetime),
      msg_vpn_name: cdktf.stringToTerraform(this._msgVpnName),
      new_topic_advertisement_enabled: cdktf.booleanToTerraform(this._newTopicAdvertisementEnabled),
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
      deliver_to_one_override_enabled: {
        value: cdktf.booleanToHclTerraform(this._deliverToOneOverrideEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      event_data_byte_rate_threshold: {
        value: solacebrokerMsgVpnDistributedCacheClusterEventDataByteRateThresholdToHclTerraform(this._eventDataByteRateThreshold.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SolacebrokerMsgVpnDistributedCacheClusterEventDataByteRateThreshold",
      },
      event_data_msg_rate_threshold: {
        value: solacebrokerMsgVpnDistributedCacheClusterEventDataMsgRateThresholdToHclTerraform(this._eventDataMsgRateThreshold.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SolacebrokerMsgVpnDistributedCacheClusterEventDataMsgRateThreshold",
      },
      event_max_memory_threshold: {
        value: solacebrokerMsgVpnDistributedCacheClusterEventMaxMemoryThresholdToHclTerraform(this._eventMaxMemoryThreshold.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SolacebrokerMsgVpnDistributedCacheClusterEventMaxMemoryThreshold",
      },
      event_max_topics_threshold: {
        value: solacebrokerMsgVpnDistributedCacheClusterEventMaxTopicsThresholdToHclTerraform(this._eventMaxTopicsThreshold.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SolacebrokerMsgVpnDistributedCacheClusterEventMaxTopicsThreshold",
      },
      event_request_queue_depth_threshold: {
        value: solacebrokerMsgVpnDistributedCacheClusterEventRequestQueueDepthThresholdToHclTerraform(this._eventRequestQueueDepthThreshold.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SolacebrokerMsgVpnDistributedCacheClusterEventRequestQueueDepthThreshold",
      },
      event_request_rate_threshold: {
        value: solacebrokerMsgVpnDistributedCacheClusterEventRequestRateThresholdToHclTerraform(this._eventRequestRateThreshold.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SolacebrokerMsgVpnDistributedCacheClusterEventRequestRateThreshold",
      },
      event_response_rate_threshold: {
        value: solacebrokerMsgVpnDistributedCacheClusterEventResponseRateThresholdToHclTerraform(this._eventResponseRateThreshold.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SolacebrokerMsgVpnDistributedCacheClusterEventResponseRateThreshold",
      },
      global_caching_enabled: {
        value: cdktf.booleanToHclTerraform(this._globalCachingEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      global_caching_heartbeat: {
        value: cdktf.numberToHclTerraform(this._globalCachingHeartbeat),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      global_caching_topic_lifetime: {
        value: cdktf.numberToHclTerraform(this._globalCachingTopicLifetime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_memory: {
        value: cdktf.numberToHclTerraform(this._maxMemory),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_msgs_per_topic: {
        value: cdktf.numberToHclTerraform(this._maxMsgsPerTopic),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_request_queue_depth: {
        value: cdktf.numberToHclTerraform(this._maxRequestQueueDepth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_topic_count: {
        value: cdktf.numberToHclTerraform(this._maxTopicCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      msg_lifetime: {
        value: cdktf.numberToHclTerraform(this._msgLifetime),
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
      new_topic_advertisement_enabled: {
        value: cdktf.booleanToHclTerraform(this._newTopicAdvertisementEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
