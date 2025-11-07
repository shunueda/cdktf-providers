// https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#analytics_profile_ref Pool#analytics_profile_ref}
  */
  readonly analyticsProfileRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#append_port Pool#append_port}
  */
  readonly appendPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#application_persistence_profile_ref Pool#application_persistence_profile_ref}
  */
  readonly applicationPersistenceProfileRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#autoscale_launch_config_ref Pool#autoscale_launch_config_ref}
  */
  readonly autoscaleLaunchConfigRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#autoscale_networks Pool#autoscale_networks}
  */
  readonly autoscaleNetworks?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#autoscale_policy_ref Pool#autoscale_policy_ref}
  */
  readonly autoscalePolicyRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#capacity_estimation Pool#capacity_estimation}
  */
  readonly capacityEstimation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#capacity_estimation_ttfb_thresh Pool#capacity_estimation_ttfb_thresh}
  */
  readonly capacityEstimationTtfbThresh?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#cloud_config_cksum Pool#cloud_config_cksum}
  */
  readonly cloudConfigCksum?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#cloud_ref Pool#cloud_ref}
  */
  readonly cloudRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#connection_ramp_duration Pool#connection_ramp_duration}
  */
  readonly connectionRampDuration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#created_by Pool#created_by}
  */
  readonly createdBy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#default_server_port Pool#default_server_port}
  */
  readonly defaultServerPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#delete_server_on_dns_refresh Pool#delete_server_on_dns_refresh}
  */
  readonly deleteServerOnDnsRefresh?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#description Pool#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#domain_name Pool#domain_name}
  */
  readonly domainName?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#east_west Pool#east_west}
  */
  readonly eastWest?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#enable_http2 Pool#enable_http2}
  */
  readonly enableHttp2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#enabled Pool#enabled}
  */
  readonly enabled?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#external_autoscale_groups Pool#external_autoscale_groups}
  */
  readonly externalAutoscaleGroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#fewest_tasks_feedback_delay Pool#fewest_tasks_feedback_delay}
  */
  readonly fewestTasksFeedbackDelay?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#graceful_disable_timeout Pool#graceful_disable_timeout}
  */
  readonly gracefulDisableTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#graceful_hm_down_disable_timeout Pool#graceful_hm_down_disable_timeout}
  */
  readonly gracefulHmDownDisableTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#gslb_sp_enabled Pool#gslb_sp_enabled}
  */
  readonly gslbSpEnabled?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#health_monitor_refs Pool#health_monitor_refs}
  */
  readonly healthMonitorRefs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#host_check_enabled Pool#host_check_enabled}
  */
  readonly hostCheckEnabled?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#id Pool#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#ignore_server_port Pool#ignore_server_port}
  */
  readonly ignoreServerPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#ignore_servers Pool#ignore_servers}
  */
  readonly ignoreServers?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#inline_health_monitor Pool#inline_health_monitor}
  */
  readonly inlineHealthMonitor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#ipaddrgroup_ref Pool#ipaddrgroup_ref}
  */
  readonly ipaddrgroupRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#lb_algo_rr_per_se Pool#lb_algo_rr_per_se}
  */
  readonly lbAlgoRrPerSe?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#lb_algorithm Pool#lb_algorithm}
  */
  readonly lbAlgorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#lb_algorithm_consistent_hash_hdr Pool#lb_algorithm_consistent_hash_hdr}
  */
  readonly lbAlgorithmConsistentHashHdr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#lb_algorithm_core_nonaffinity Pool#lb_algorithm_core_nonaffinity}
  */
  readonly lbAlgorithmCoreNonaffinity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#lb_algorithm_hash Pool#lb_algorithm_hash}
  */
  readonly lbAlgorithmHash?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#lookup_server_by_name Pool#lookup_server_by_name}
  */
  readonly lookupServerByName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#max_concurrent_connections_per_server Pool#max_concurrent_connections_per_server}
  */
  readonly maxConcurrentConnectionsPerServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#min_health_monitors_up Pool#min_health_monitors_up}
  */
  readonly minHealthMonitorsUp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#min_servers_up Pool#min_servers_up}
  */
  readonly minServersUp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#name Pool#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#nsx_securitygroup Pool#nsx_securitygroup}
  */
  readonly nsxSecuritygroup?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#pki_profile_ref Pool#pki_profile_ref}
  */
  readonly pkiProfileRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#pool_type Pool#pool_type}
  */
  readonly poolType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#request_queue_depth Pool#request_queue_depth}
  */
  readonly requestQueueDepth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#request_queue_enabled Pool#request_queue_enabled}
  */
  readonly requestQueueEnabled?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#resolve_pool_by_dns Pool#resolve_pool_by_dns}
  */
  readonly resolvePoolByDns?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#rewrite_host_header_to_server_name Pool#rewrite_host_header_to_server_name}
  */
  readonly rewriteHostHeaderToServerName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#rewrite_host_header_to_sni Pool#rewrite_host_header_to_sni}
  */
  readonly rewriteHostHeaderToSni?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#routing_pool Pool#routing_pool}
  */
  readonly routingPool?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#server_disable_type Pool#server_disable_type}
  */
  readonly serverDisableType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#server_name Pool#server_name}
  */
  readonly serverName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#server_timeout Pool#server_timeout}
  */
  readonly serverTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#service_metadata Pool#service_metadata}
  */
  readonly serviceMetadata?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#sni_enabled Pool#sni_enabled}
  */
  readonly sniEnabled?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#ssl_key_and_certificate_ref Pool#ssl_key_and_certificate_ref}
  */
  readonly sslKeyAndCertificateRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#ssl_profile_ref Pool#ssl_profile_ref}
  */
  readonly sslProfileRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#tenant_ref Pool#tenant_ref}
  */
  readonly tenantRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#tier1_lr Pool#tier1_lr}
  */
  readonly tier1Lr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#use_service_port Pool#use_service_port}
  */
  readonly useServicePort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#use_service_ssl_mode Pool#use_service_ssl_mode}
  */
  readonly useServiceSslMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#uuid Pool#uuid}
  */
  readonly uuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#vrf_ref Pool#vrf_ref}
  */
  readonly vrfRef?: string;
  /**
  * analytics_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#analytics_policy Pool#analytics_policy}
  */
  readonly analyticsPolicy?: PoolAnalyticsPolicy[] | cdktf.IResolvable;
  /**
  * configpb_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#configpb_attributes Pool#configpb_attributes}
  */
  readonly configpbAttributes?: PoolConfigpbAttributes[] | cdktf.IResolvable;
  /**
  * conn_pool_properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#conn_pool_properties Pool#conn_pool_properties}
  */
  readonly connPoolProperties?: PoolConnPoolProperties[] | cdktf.IResolvable;
  /**
  * fail_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#fail_action Pool#fail_action}
  */
  readonly failAction?: PoolFailAction[] | cdktf.IResolvable;
  /**
  * horizon_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#horizon_profile Pool#horizon_profile}
  */
  readonly horizonProfile?: PoolHorizonProfile[] | cdktf.IResolvable;
  /**
  * http2_properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#http2_properties Pool#http2_properties}
  */
  readonly http2Properties?: PoolHttp2Properties[] | cdktf.IResolvable;
  /**
  * markers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#markers Pool#markers}
  */
  readonly markers?: PoolMarkers[] | cdktf.IResolvable;
  /**
  * max_conn_rate_per_server block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#max_conn_rate_per_server Pool#max_conn_rate_per_server}
  */
  readonly maxConnRatePerServer?: PoolMaxConnRatePerServer[] | cdktf.IResolvable;
  /**
  * networks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#networks Pool#networks}
  */
  readonly networks?: PoolNetworks[] | cdktf.IResolvable;
  /**
  * placement_networks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#placement_networks Pool#placement_networks}
  */
  readonly placementNetworks?: PoolPlacementNetworks[] | cdktf.IResolvable;
  /**
  * server_reselect block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#server_reselect Pool#server_reselect}
  */
  readonly serverReselect?: PoolServerReselect[] | cdktf.IResolvable;
  /**
  * servers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#servers Pool#servers}
  */
  readonly servers?: PoolServers[] | cdktf.IResolvable;
  /**
  * sp_gs_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#sp_gs_info Pool#sp_gs_info}
  */
  readonly spGsInfo?: PoolSpGsInfo[] | cdktf.IResolvable;
}
export interface PoolAnalyticsPolicyMetricsRealtimeUpdate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#duration Pool#duration}
  */
  readonly duration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#enabled Pool#enabled}
  */
  readonly enabled: string;
}

export function poolAnalyticsPolicyMetricsRealtimeUpdateToTerraform(struct?: PoolAnalyticsPolicyMetricsRealtimeUpdate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.stringToTerraform(struct!.duration),
    enabled: cdktf.stringToTerraform(struct!.enabled),
  }
}


export function poolAnalyticsPolicyMetricsRealtimeUpdateToHclTerraform(struct?: PoolAnalyticsPolicyMetricsRealtimeUpdate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.stringToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.stringToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PoolAnalyticsPolicyMetricsRealtimeUpdateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): PoolAnalyticsPolicyMetricsRealtimeUpdate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PoolAnalyticsPolicyMetricsRealtimeUpdate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._duration = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._duration = value.duration;
      this._enabled = value.enabled;
    }
  }

  // duration - computed: false, optional: true, required: false
  private _duration?: string; 
  public get duration() {
    return this.getStringAttribute('duration');
  }
  public set duration(value: string) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: string; 
  public get enabled() {
    return this.getStringAttribute('enabled');
  }
  public set enabled(value: string) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}

export class PoolAnalyticsPolicyMetricsRealtimeUpdateList extends cdktf.ComplexList {
  public internalValue? : PoolAnalyticsPolicyMetricsRealtimeUpdate[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): PoolAnalyticsPolicyMetricsRealtimeUpdateOutputReference {
    return new PoolAnalyticsPolicyMetricsRealtimeUpdateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PoolAnalyticsPolicy {
  /**
  * metrics_realtime_update block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#metrics_realtime_update Pool#metrics_realtime_update}
  */
  readonly metricsRealtimeUpdate?: PoolAnalyticsPolicyMetricsRealtimeUpdate[] | cdktf.IResolvable;
}

export function poolAnalyticsPolicyToTerraform(struct?: PoolAnalyticsPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metrics_realtime_update: cdktf.listMapper(poolAnalyticsPolicyMetricsRealtimeUpdateToTerraform, true)(struct!.metricsRealtimeUpdate),
  }
}


export function poolAnalyticsPolicyToHclTerraform(struct?: PoolAnalyticsPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metrics_realtime_update: {
      value: cdktf.listMapperHcl(poolAnalyticsPolicyMetricsRealtimeUpdateToHclTerraform, true)(struct!.metricsRealtimeUpdate),
      isBlock: true,
      type: "set",
      storageClassType: "PoolAnalyticsPolicyMetricsRealtimeUpdateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PoolAnalyticsPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): PoolAnalyticsPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricsRealtimeUpdate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsRealtimeUpdate = this._metricsRealtimeUpdate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PoolAnalyticsPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metricsRealtimeUpdate.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metricsRealtimeUpdate.internalValue = value.metricsRealtimeUpdate;
    }
  }

  // metrics_realtime_update - computed: false, optional: true, required: false
  private _metricsRealtimeUpdate = new PoolAnalyticsPolicyMetricsRealtimeUpdateList(this, "metrics_realtime_update", true);
  public get metricsRealtimeUpdate() {
    return this._metricsRealtimeUpdate;
  }
  public putMetricsRealtimeUpdate(value: PoolAnalyticsPolicyMetricsRealtimeUpdate[] | cdktf.IResolvable) {
    this._metricsRealtimeUpdate.internalValue = value;
  }
  public resetMetricsRealtimeUpdate() {
    this._metricsRealtimeUpdate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsRealtimeUpdateInput() {
    return this._metricsRealtimeUpdate.internalValue;
  }
}

export class PoolAnalyticsPolicyList extends cdktf.ComplexList {
  public internalValue? : PoolAnalyticsPolicy[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): PoolAnalyticsPolicyOutputReference {
    return new PoolAnalyticsPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PoolConfigpbAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#version Pool#version}
  */
  readonly version?: string;
}

export function poolConfigpbAttributesToTerraform(struct?: PoolConfigpbAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function poolConfigpbAttributesToHclTerraform(struct?: PoolConfigpbAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PoolConfigpbAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): PoolConfigpbAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PoolConfigpbAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._version = value.version;
    }
  }

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

export class PoolConfigpbAttributesList extends cdktf.ComplexList {
  public internalValue? : PoolConfigpbAttributes[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): PoolConfigpbAttributesOutputReference {
    return new PoolConfigpbAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PoolConnPoolProperties {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#upstream_connpool_conn_idle_tmo Pool#upstream_connpool_conn_idle_tmo}
  */
  readonly upstreamConnpoolConnIdleTmo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#upstream_connpool_conn_life_tmo Pool#upstream_connpool_conn_life_tmo}
  */
  readonly upstreamConnpoolConnLifeTmo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#upstream_connpool_conn_max_reuse Pool#upstream_connpool_conn_max_reuse}
  */
  readonly upstreamConnpoolConnMaxReuse?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#upstream_connpool_server_max_cache Pool#upstream_connpool_server_max_cache}
  */
  readonly upstreamConnpoolServerMaxCache?: string;
}

export function poolConnPoolPropertiesToTerraform(struct?: PoolConnPoolProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    upstream_connpool_conn_idle_tmo: cdktf.stringToTerraform(struct!.upstreamConnpoolConnIdleTmo),
    upstream_connpool_conn_life_tmo: cdktf.stringToTerraform(struct!.upstreamConnpoolConnLifeTmo),
    upstream_connpool_conn_max_reuse: cdktf.stringToTerraform(struct!.upstreamConnpoolConnMaxReuse),
    upstream_connpool_server_max_cache: cdktf.stringToTerraform(struct!.upstreamConnpoolServerMaxCache),
  }
}


export function poolConnPoolPropertiesToHclTerraform(struct?: PoolConnPoolProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    upstream_connpool_conn_idle_tmo: {
      value: cdktf.stringToHclTerraform(struct!.upstreamConnpoolConnIdleTmo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    upstream_connpool_conn_life_tmo: {
      value: cdktf.stringToHclTerraform(struct!.upstreamConnpoolConnLifeTmo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    upstream_connpool_conn_max_reuse: {
      value: cdktf.stringToHclTerraform(struct!.upstreamConnpoolConnMaxReuse),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    upstream_connpool_server_max_cache: {
      value: cdktf.stringToHclTerraform(struct!.upstreamConnpoolServerMaxCache),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PoolConnPoolPropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): PoolConnPoolProperties | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._upstreamConnpoolConnIdleTmo !== undefined) {
      hasAnyValues = true;
      internalValueResult.upstreamConnpoolConnIdleTmo = this._upstreamConnpoolConnIdleTmo;
    }
    if (this._upstreamConnpoolConnLifeTmo !== undefined) {
      hasAnyValues = true;
      internalValueResult.upstreamConnpoolConnLifeTmo = this._upstreamConnpoolConnLifeTmo;
    }
    if (this._upstreamConnpoolConnMaxReuse !== undefined) {
      hasAnyValues = true;
      internalValueResult.upstreamConnpoolConnMaxReuse = this._upstreamConnpoolConnMaxReuse;
    }
    if (this._upstreamConnpoolServerMaxCache !== undefined) {
      hasAnyValues = true;
      internalValueResult.upstreamConnpoolServerMaxCache = this._upstreamConnpoolServerMaxCache;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PoolConnPoolProperties | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._upstreamConnpoolConnIdleTmo = undefined;
      this._upstreamConnpoolConnLifeTmo = undefined;
      this._upstreamConnpoolConnMaxReuse = undefined;
      this._upstreamConnpoolServerMaxCache = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._upstreamConnpoolConnIdleTmo = value.upstreamConnpoolConnIdleTmo;
      this._upstreamConnpoolConnLifeTmo = value.upstreamConnpoolConnLifeTmo;
      this._upstreamConnpoolConnMaxReuse = value.upstreamConnpoolConnMaxReuse;
      this._upstreamConnpoolServerMaxCache = value.upstreamConnpoolServerMaxCache;
    }
  }

  // upstream_connpool_conn_idle_tmo - computed: false, optional: true, required: false
  private _upstreamConnpoolConnIdleTmo?: string; 
  public get upstreamConnpoolConnIdleTmo() {
    return this.getStringAttribute('upstream_connpool_conn_idle_tmo');
  }
  public set upstreamConnpoolConnIdleTmo(value: string) {
    this._upstreamConnpoolConnIdleTmo = value;
  }
  public resetUpstreamConnpoolConnIdleTmo() {
    this._upstreamConnpoolConnIdleTmo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upstreamConnpoolConnIdleTmoInput() {
    return this._upstreamConnpoolConnIdleTmo;
  }

  // upstream_connpool_conn_life_tmo - computed: false, optional: true, required: false
  private _upstreamConnpoolConnLifeTmo?: string; 
  public get upstreamConnpoolConnLifeTmo() {
    return this.getStringAttribute('upstream_connpool_conn_life_tmo');
  }
  public set upstreamConnpoolConnLifeTmo(value: string) {
    this._upstreamConnpoolConnLifeTmo = value;
  }
  public resetUpstreamConnpoolConnLifeTmo() {
    this._upstreamConnpoolConnLifeTmo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upstreamConnpoolConnLifeTmoInput() {
    return this._upstreamConnpoolConnLifeTmo;
  }

  // upstream_connpool_conn_max_reuse - computed: false, optional: true, required: false
  private _upstreamConnpoolConnMaxReuse?: string; 
  public get upstreamConnpoolConnMaxReuse() {
    return this.getStringAttribute('upstream_connpool_conn_max_reuse');
  }
  public set upstreamConnpoolConnMaxReuse(value: string) {
    this._upstreamConnpoolConnMaxReuse = value;
  }
  public resetUpstreamConnpoolConnMaxReuse() {
    this._upstreamConnpoolConnMaxReuse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upstreamConnpoolConnMaxReuseInput() {
    return this._upstreamConnpoolConnMaxReuse;
  }

  // upstream_connpool_server_max_cache - computed: false, optional: true, required: false
  private _upstreamConnpoolServerMaxCache?: string; 
  public get upstreamConnpoolServerMaxCache() {
    return this.getStringAttribute('upstream_connpool_server_max_cache');
  }
  public set upstreamConnpoolServerMaxCache(value: string) {
    this._upstreamConnpoolServerMaxCache = value;
  }
  public resetUpstreamConnpoolServerMaxCache() {
    this._upstreamConnpoolServerMaxCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upstreamConnpoolServerMaxCacheInput() {
    return this._upstreamConnpoolServerMaxCache;
  }
}

export class PoolConnPoolPropertiesList extends cdktf.ComplexList {
  public internalValue? : PoolConnPoolProperties[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): PoolConnPoolPropertiesOutputReference {
    return new PoolConnPoolPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PoolFailActionLocalRspFile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#content_type Pool#content_type}
  */
  readonly contentType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#file_content Pool#file_content}
  */
  readonly fileContent: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#file_length Pool#file_length}
  */
  readonly fileLength?: string;
}

export function poolFailActionLocalRspFileToTerraform(struct?: PoolFailActionLocalRspFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content_type: cdktf.stringToTerraform(struct!.contentType),
    file_content: cdktf.stringToTerraform(struct!.fileContent),
    file_length: cdktf.stringToTerraform(struct!.fileLength),
  }
}


export function poolFailActionLocalRspFileToHclTerraform(struct?: PoolFailActionLocalRspFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content_type: {
      value: cdktf.stringToHclTerraform(struct!.contentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_content: {
      value: cdktf.stringToHclTerraform(struct!.fileContent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_length: {
      value: cdktf.stringToHclTerraform(struct!.fileLength),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PoolFailActionLocalRspFileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): PoolFailActionLocalRspFile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._fileContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileContent = this._fileContent;
    }
    if (this._fileLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileLength = this._fileLength;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PoolFailActionLocalRspFile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contentType = undefined;
      this._fileContent = undefined;
      this._fileLength = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contentType = value.contentType;
      this._fileContent = value.fileContent;
      this._fileLength = value.fileLength;
    }
  }

  // content_type - computed: false, optional: false, required: true
  private _contentType?: string; 
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
  }

  // file_content - computed: false, optional: false, required: true
  private _fileContent?: string; 
  public get fileContent() {
    return this.getStringAttribute('file_content');
  }
  public set fileContent(value: string) {
    this._fileContent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileContentInput() {
    return this._fileContent;
  }

  // file_length - computed: true, optional: true, required: false
  private _fileLength?: string; 
  public get fileLength() {
    return this.getStringAttribute('file_length');
  }
  public set fileLength(value: string) {
    this._fileLength = value;
  }
  public resetFileLength() {
    this._fileLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileLengthInput() {
    return this._fileLength;
  }
}

export class PoolFailActionLocalRspFileList extends cdktf.ComplexList {
  public internalValue? : PoolFailActionLocalRspFile[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): PoolFailActionLocalRspFileOutputReference {
    return new PoolFailActionLocalRspFileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PoolFailActionLocalRsp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#status_code Pool#status_code}
  */
  readonly statusCode?: string;
  /**
  * file block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#file Pool#file}
  */
  readonly file?: PoolFailActionLocalRspFile[] | cdktf.IResolvable;
}

export function poolFailActionLocalRspToTerraform(struct?: PoolFailActionLocalRsp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    status_code: cdktf.stringToTerraform(struct!.statusCode),
    file: cdktf.listMapper(poolFailActionLocalRspFileToTerraform, true)(struct!.file),
  }
}


export function poolFailActionLocalRspToHclTerraform(struct?: PoolFailActionLocalRsp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    status_code: {
      value: cdktf.stringToHclTerraform(struct!.statusCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file: {
      value: cdktf.listMapperHcl(poolFailActionLocalRspFileToHclTerraform, true)(struct!.file),
      isBlock: true,
      type: "set",
      storageClassType: "PoolFailActionLocalRspFileList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PoolFailActionLocalRspOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): PoolFailActionLocalRsp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._statusCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusCode = this._statusCode;
    }
    if (this._file?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.file = this._file?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PoolFailActionLocalRsp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._statusCode = undefined;
      this._file.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._statusCode = value.statusCode;
      this._file.internalValue = value.file;
    }
  }

  // status_code - computed: false, optional: true, required: false
  private _statusCode?: string; 
  public get statusCode() {
    return this.getStringAttribute('status_code');
  }
  public set statusCode(value: string) {
    this._statusCode = value;
  }
  public resetStatusCode() {
    this._statusCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusCodeInput() {
    return this._statusCode;
  }

  // file - computed: false, optional: true, required: false
  private _file = new PoolFailActionLocalRspFileList(this, "file", true);
  public get file() {
    return this._file;
  }
  public putFile(value: PoolFailActionLocalRspFile[] | cdktf.IResolvable) {
    this._file.internalValue = value;
  }
  public resetFile() {
    this._file.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file.internalValue;
  }
}

export class PoolFailActionLocalRspList extends cdktf.ComplexList {
  public internalValue? : PoolFailActionLocalRsp[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): PoolFailActionLocalRspOutputReference {
    return new PoolFailActionLocalRspOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PoolFailActionRedirect {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#host Pool#host}
  */
  readonly host: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#path Pool#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#protocol Pool#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#query Pool#query}
  */
  readonly query?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#status_code Pool#status_code}
  */
  readonly statusCode?: string;
}

export function poolFailActionRedirectToTerraform(struct?: PoolFailActionRedirect | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    path: cdktf.stringToTerraform(struct!.path),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    query: cdktf.stringToTerraform(struct!.query),
    status_code: cdktf.stringToTerraform(struct!.statusCode),
  }
}


export function poolFailActionRedirectToHclTerraform(struct?: PoolFailActionRedirect | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status_code: {
      value: cdktf.stringToHclTerraform(struct!.statusCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PoolFailActionRedirectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): PoolFailActionRedirect | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    if (this._statusCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusCode = this._statusCode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PoolFailActionRedirect | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._path = undefined;
      this._protocol = undefined;
      this._query = undefined;
      this._statusCode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._host = value.host;
      this._path = value.path;
      this._protocol = value.protocol;
      this._query = value.query;
      this._statusCode = value.statusCode;
    }
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // path - computed: true, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // query - computed: true, optional: true, required: false
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  public resetQuery() {
    this._query = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }

  // status_code - computed: false, optional: true, required: false
  private _statusCode?: string; 
  public get statusCode() {
    return this.getStringAttribute('status_code');
  }
  public set statusCode(value: string) {
    this._statusCode = value;
  }
  public resetStatusCode() {
    this._statusCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusCodeInput() {
    return this._statusCode;
  }
}

export class PoolFailActionRedirectList extends cdktf.ComplexList {
  public internalValue? : PoolFailActionRedirect[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): PoolFailActionRedirectOutputReference {
    return new PoolFailActionRedirectOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PoolFailAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#type Pool#type}
  */
  readonly type: string;
  /**
  * local_rsp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#local_rsp Pool#local_rsp}
  */
  readonly localRsp?: PoolFailActionLocalRsp[] | cdktf.IResolvable;
  /**
  * redirect block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#redirect Pool#redirect}
  */
  readonly redirect?: PoolFailActionRedirect[] | cdktf.IResolvable;
}

export function poolFailActionToTerraform(struct?: PoolFailAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    local_rsp: cdktf.listMapper(poolFailActionLocalRspToTerraform, true)(struct!.localRsp),
    redirect: cdktf.listMapper(poolFailActionRedirectToTerraform, true)(struct!.redirect),
  }
}


export function poolFailActionToHclTerraform(struct?: PoolFailAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_rsp: {
      value: cdktf.listMapperHcl(poolFailActionLocalRspToHclTerraform, true)(struct!.localRsp),
      isBlock: true,
      type: "set",
      storageClassType: "PoolFailActionLocalRspList",
    },
    redirect: {
      value: cdktf.listMapperHcl(poolFailActionRedirectToHclTerraform, true)(struct!.redirect),
      isBlock: true,
      type: "set",
      storageClassType: "PoolFailActionRedirectList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PoolFailActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): PoolFailAction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._localRsp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.localRsp = this._localRsp?.internalValue;
    }
    if (this._redirect?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirect = this._redirect?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PoolFailAction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._localRsp.internalValue = undefined;
      this._redirect.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._localRsp.internalValue = value.localRsp;
      this._redirect.internalValue = value.redirect;
    }
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // local_rsp - computed: false, optional: true, required: false
  private _localRsp = new PoolFailActionLocalRspList(this, "local_rsp", true);
  public get localRsp() {
    return this._localRsp;
  }
  public putLocalRsp(value: PoolFailActionLocalRsp[] | cdktf.IResolvable) {
    this._localRsp.internalValue = value;
  }
  public resetLocalRsp() {
    this._localRsp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localRspInput() {
    return this._localRsp.internalValue;
  }

  // redirect - computed: false, optional: true, required: false
  private _redirect = new PoolFailActionRedirectList(this, "redirect", true);
  public get redirect() {
    return this._redirect;
  }
  public putRedirect(value: PoolFailActionRedirect[] | cdktf.IResolvable) {
    this._redirect.internalValue = value;
  }
  public resetRedirect() {
    this._redirect.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectInput() {
    return this._redirect.internalValue;
  }
}

export class PoolFailActionList extends cdktf.ComplexList {
  public internalValue? : PoolFailAction[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): PoolFailActionOutputReference {
    return new PoolFailActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PoolHorizonProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#blast_port Pool#blast_port}
  */
  readonly blastPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#pcoip_port Pool#pcoip_port}
  */
  readonly pcoipPort?: string;
}

export function poolHorizonProfileToTerraform(struct?: PoolHorizonProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blast_port: cdktf.stringToTerraform(struct!.blastPort),
    pcoip_port: cdktf.stringToTerraform(struct!.pcoipPort),
  }
}


export function poolHorizonProfileToHclTerraform(struct?: PoolHorizonProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blast_port: {
      value: cdktf.stringToHclTerraform(struct!.blastPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pcoip_port: {
      value: cdktf.stringToHclTerraform(struct!.pcoipPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PoolHorizonProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): PoolHorizonProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blastPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.blastPort = this._blastPort;
    }
    if (this._pcoipPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.pcoipPort = this._pcoipPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PoolHorizonProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._blastPort = undefined;
      this._pcoipPort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._blastPort = value.blastPort;
      this._pcoipPort = value.pcoipPort;
    }
  }

  // blast_port - computed: false, optional: true, required: false
  private _blastPort?: string; 
  public get blastPort() {
    return this.getStringAttribute('blast_port');
  }
  public set blastPort(value: string) {
    this._blastPort = value;
  }
  public resetBlastPort() {
    this._blastPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blastPortInput() {
    return this._blastPort;
  }

  // pcoip_port - computed: false, optional: true, required: false
  private _pcoipPort?: string; 
  public get pcoipPort() {
    return this.getStringAttribute('pcoip_port');
  }
  public set pcoipPort(value: string) {
    this._pcoipPort = value;
  }
  public resetPcoipPort() {
    this._pcoipPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pcoipPortInput() {
    return this._pcoipPort;
  }
}

export class PoolHorizonProfileList extends cdktf.ComplexList {
  public internalValue? : PoolHorizonProfile[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): PoolHorizonProfileOutputReference {
    return new PoolHorizonProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PoolHttp2Properties {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#max_http2_control_frames_per_connection Pool#max_http2_control_frames_per_connection}
  */
  readonly maxHttp2ControlFramesPerConnection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#max_http2_header_field_size Pool#max_http2_header_field_size}
  */
  readonly maxHttp2HeaderFieldSize?: string;
}

export function poolHttp2PropertiesToTerraform(struct?: PoolHttp2Properties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_http2_control_frames_per_connection: cdktf.stringToTerraform(struct!.maxHttp2ControlFramesPerConnection),
    max_http2_header_field_size: cdktf.stringToTerraform(struct!.maxHttp2HeaderFieldSize),
  }
}


export function poolHttp2PropertiesToHclTerraform(struct?: PoolHttp2Properties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_http2_control_frames_per_connection: {
      value: cdktf.stringToHclTerraform(struct!.maxHttp2ControlFramesPerConnection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_http2_header_field_size: {
      value: cdktf.stringToHclTerraform(struct!.maxHttp2HeaderFieldSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PoolHttp2PropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): PoolHttp2Properties | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxHttp2ControlFramesPerConnection !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxHttp2ControlFramesPerConnection = this._maxHttp2ControlFramesPerConnection;
    }
    if (this._maxHttp2HeaderFieldSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxHttp2HeaderFieldSize = this._maxHttp2HeaderFieldSize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PoolHttp2Properties | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxHttp2ControlFramesPerConnection = undefined;
      this._maxHttp2HeaderFieldSize = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxHttp2ControlFramesPerConnection = value.maxHttp2ControlFramesPerConnection;
      this._maxHttp2HeaderFieldSize = value.maxHttp2HeaderFieldSize;
    }
  }

  // max_http2_control_frames_per_connection - computed: false, optional: true, required: false
  private _maxHttp2ControlFramesPerConnection?: string; 
  public get maxHttp2ControlFramesPerConnection() {
    return this.getStringAttribute('max_http2_control_frames_per_connection');
  }
  public set maxHttp2ControlFramesPerConnection(value: string) {
    this._maxHttp2ControlFramesPerConnection = value;
  }
  public resetMaxHttp2ControlFramesPerConnection() {
    this._maxHttp2ControlFramesPerConnection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxHttp2ControlFramesPerConnectionInput() {
    return this._maxHttp2ControlFramesPerConnection;
  }

  // max_http2_header_field_size - computed: false, optional: true, required: false
  private _maxHttp2HeaderFieldSize?: string; 
  public get maxHttp2HeaderFieldSize() {
    return this.getStringAttribute('max_http2_header_field_size');
  }
  public set maxHttp2HeaderFieldSize(value: string) {
    this._maxHttp2HeaderFieldSize = value;
  }
  public resetMaxHttp2HeaderFieldSize() {
    this._maxHttp2HeaderFieldSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxHttp2HeaderFieldSizeInput() {
    return this._maxHttp2HeaderFieldSize;
  }
}

export class PoolHttp2PropertiesList extends cdktf.ComplexList {
  public internalValue? : PoolHttp2Properties[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): PoolHttp2PropertiesOutputReference {
    return new PoolHttp2PropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PoolMarkers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#key Pool#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#values Pool#values}
  */
  readonly values?: string[];
}

export function poolMarkersToTerraform(struct?: PoolMarkers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function poolMarkersToHclTerraform(struct?: PoolMarkers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PoolMarkersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): PoolMarkers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PoolMarkers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class PoolMarkersList extends cdktf.ComplexList {
  public internalValue? : PoolMarkers[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): PoolMarkersOutputReference {
    return new PoolMarkersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PoolMaxConnRatePerServerActionFile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#content_type Pool#content_type}
  */
  readonly contentType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#file_content Pool#file_content}
  */
  readonly fileContent: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#file_length Pool#file_length}
  */
  readonly fileLength?: string;
}

export function poolMaxConnRatePerServerActionFileToTerraform(struct?: PoolMaxConnRatePerServerActionFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content_type: cdktf.stringToTerraform(struct!.contentType),
    file_content: cdktf.stringToTerraform(struct!.fileContent),
    file_length: cdktf.stringToTerraform(struct!.fileLength),
  }
}


export function poolMaxConnRatePerServerActionFileToHclTerraform(struct?: PoolMaxConnRatePerServerActionFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content_type: {
      value: cdktf.stringToHclTerraform(struct!.contentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_content: {
      value: cdktf.stringToHclTerraform(struct!.fileContent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_length: {
      value: cdktf.stringToHclTerraform(struct!.fileLength),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PoolMaxConnRatePerServerActionFileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): PoolMaxConnRatePerServerActionFile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._fileContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileContent = this._fileContent;
    }
    if (this._fileLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileLength = this._fileLength;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PoolMaxConnRatePerServerActionFile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contentType = undefined;
      this._fileContent = undefined;
      this._fileLength = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contentType = value.contentType;
      this._fileContent = value.fileContent;
      this._fileLength = value.fileLength;
    }
  }

  // content_type - computed: false, optional: false, required: true
  private _contentType?: string; 
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
  }

  // file_content - computed: false, optional: false, required: true
  private _fileContent?: string; 
  public get fileContent() {
    return this.getStringAttribute('file_content');
  }
  public set fileContent(value: string) {
    this._fileContent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileContentInput() {
    return this._fileContent;
  }

  // file_length - computed: true, optional: true, required: false
  private _fileLength?: string; 
  public get fileLength() {
    return this.getStringAttribute('file_length');
  }
  public set fileLength(value: string) {
    this._fileLength = value;
  }
  public resetFileLength() {
    this._fileLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileLengthInput() {
    return this._fileLength;
  }
}

export class PoolMaxConnRatePerServerActionFileList extends cdktf.ComplexList {
  public internalValue? : PoolMaxConnRatePerServerActionFile[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): PoolMaxConnRatePerServerActionFileOutputReference {
    return new PoolMaxConnRatePerServerActionFileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PoolMaxConnRatePerServerActionRedirectHostTokens {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#end_index Pool#end_index}
  */
  readonly endIndex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#start_index Pool#start_index}
  */
  readonly startIndex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#str_value Pool#str_value}
  */
  readonly strValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#type Pool#type}
  */
  readonly type: string;
}

export function poolMaxConnRatePerServerActionRedirectHostTokensToTerraform(struct?: PoolMaxConnRatePerServerActionRedirectHostTokens | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_index: cdktf.stringToTerraform(struct!.endIndex),
    start_index: cdktf.stringToTerraform(struct!.startIndex),
    str_value: cdktf.stringToTerraform(struct!.strValue),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function poolMaxConnRatePerServerActionRedirectHostTokensToHclTerraform(struct?: PoolMaxConnRatePerServerActionRedirectHostTokens | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_index: {
      value: cdktf.stringToHclTerraform(struct!.endIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_index: {
      value: cdktf.stringToHclTerraform(struct!.startIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    str_value: {
      value: cdktf.stringToHclTerraform(struct!.strValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PoolMaxConnRatePerServerActionRedirectHostTokensOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): PoolMaxConnRatePerServerActionRedirectHostTokens | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.endIndex = this._endIndex;
    }
    if (this._startIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.startIndex = this._startIndex;
    }
    if (this._strValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.strValue = this._strValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PoolMaxConnRatePerServerActionRedirectHostTokens | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endIndex = undefined;
      this._startIndex = undefined;
      this._strValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endIndex = value.endIndex;
      this._startIndex = value.startIndex;
      this._strValue = value.strValue;
      this._type = value.type;
    }
  }

  // end_index - computed: true, optional: true, required: false
  private _endIndex?: string; 
  public get endIndex() {
    return this.getStringAttribute('end_index');
  }
  public set endIndex(value: string) {
    this._endIndex = value;
  }
  public resetEndIndex() {
    this._endIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endIndexInput() {
    return this._endIndex;
  }

  // start_index - computed: true, optional: true, required: false
  private _startIndex?: string; 
  public get startIndex() {
    return this.getStringAttribute('start_index');
  }
  public set startIndex(value: string) {
    this._startIndex = value;
  }
  public resetStartIndex() {
    this._startIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startIndexInput() {
    return this._startIndex;
  }

  // str_value - computed: true, optional: true, required: false
  private _strValue?: string; 
  public get strValue() {
    return this.getStringAttribute('str_value');
  }
  public set strValue(value: string) {
    this._strValue = value;
  }
  public resetStrValue() {
    this._strValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strValueInput() {
    return this._strValue;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class PoolMaxConnRatePerServerActionRedirectHostTokensList extends cdktf.ComplexList {
  public internalValue? : PoolMaxConnRatePerServerActionRedirectHostTokens[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): PoolMaxConnRatePerServerActionRedirectHostTokensOutputReference {
    return new PoolMaxConnRatePerServerActionRedirectHostTokensOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PoolMaxConnRatePerServerActionRedirectHost {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#type Pool#type}
  */
  readonly type: string;
  /**
  * tokens block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#tokens Pool#tokens}
  */
  readonly tokens: PoolMaxConnRatePerServerActionRedirectHostTokens[] | cdktf.IResolvable;
}

export function poolMaxConnRatePerServerActionRedirectHostToTerraform(struct?: PoolMaxConnRatePerServerActionRedirectHost | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    tokens: cdktf.listMapper(poolMaxConnRatePerServerActionRedirectHostTokensToTerraform, true)(struct!.tokens),
  }
}


export function poolMaxConnRatePerServerActionRedirectHostToHclTerraform(struct?: PoolMaxConnRatePerServerActionRedirectHost | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tokens: {
      value: cdktf.listMapperHcl(poolMaxConnRatePerServerActionRedirectHostTokensToHclTerraform, true)(struct!.tokens),
      isBlock: true,
      type: "list",
      storageClassType: "PoolMaxConnRatePerServerActionRedirectHostTokensList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PoolMaxConnRatePerServerActionRedirectHostOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): PoolMaxConnRatePerServerActionRedirectHost | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._tokens?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokens = this._tokens?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PoolMaxConnRatePerServerActionRedirectHost | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._tokens.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._tokens.internalValue = value.tokens;
    }
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // tokens - computed: false, optional: false, required: true
  private _tokens = new PoolMaxConnRatePerServerActionRedirectHostTokensList(this, "tokens", false);
  public get tokens() {
    return this._tokens;
  }
  public putTokens(value: PoolMaxConnRatePerServerActionRedirectHostTokens[] | cdktf.IResolvable) {
    this._tokens.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokensInput() {
    return this._tokens.internalValue;
  }
}

export class PoolMaxConnRatePerServerActionRedirectHostList extends cdktf.ComplexList {
  public internalValue? : PoolMaxConnRatePerServerActionRedirectHost[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): PoolMaxConnRatePerServerActionRedirectHostOutputReference {
    return new PoolMaxConnRatePerServerActionRedirectHostOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PoolMaxConnRatePerServerActionRedirectPathTokens {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#end_index Pool#end_index}
  */
  readonly endIndex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#start_index Pool#start_index}
  */
  readonly startIndex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#str_value Pool#str_value}
  */
  readonly strValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#type Pool#type}
  */
  readonly type: string;
}

export function poolMaxConnRatePerServerActionRedirectPathTokensToTerraform(struct?: PoolMaxConnRatePerServerActionRedirectPathTokens | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_index: cdktf.stringToTerraform(struct!.endIndex),
    start_index: cdktf.stringToTerraform(struct!.startIndex),
    str_value: cdktf.stringToTerraform(struct!.strValue),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function poolMaxConnRatePerServerActionRedirectPathTokensToHclTerraform(struct?: PoolMaxConnRatePerServerActionRedirectPathTokens | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_index: {
      value: cdktf.stringToHclTerraform(struct!.endIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_index: {
      value: cdktf.stringToHclTerraform(struct!.startIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    str_value: {
      value: cdktf.stringToHclTerraform(struct!.strValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PoolMaxConnRatePerServerActionRedirectPathTokensOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): PoolMaxConnRatePerServerActionRedirectPathTokens | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.endIndex = this._endIndex;
    }
    if (this._startIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.startIndex = this._startIndex;
    }
    if (this._strValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.strValue = this._strValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PoolMaxConnRatePerServerActionRedirectPathTokens | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endIndex = undefined;
      this._startIndex = undefined;
      this._strValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endIndex = value.endIndex;
      this._startIndex = value.startIndex;
      this._strValue = value.strValue;
      this._type = value.type;
    }
  }

  // end_index - computed: true, optional: true, required: false
  private _endIndex?: string; 
  public get endIndex() {
    return this.getStringAttribute('end_index');
  }
  public set endIndex(value: string) {
    this._endIndex = value;
  }
  public resetEndIndex() {
    this._endIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endIndexInput() {
    return this._endIndex;
  }

  // start_index - computed: true, optional: true, required: false
  private _startIndex?: string; 
  public get startIndex() {
    return this.getStringAttribute('start_index');
  }
  public set startIndex(value: string) {
    this._startIndex = value;
  }
  public resetStartIndex() {
    this._startIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startIndexInput() {
    return this._startIndex;
  }

  // str_value - computed: true, optional: true, required: false
  private _strValue?: string; 
  public get strValue() {
    return this.getStringAttribute('str_value');
  }
  public set strValue(value: string) {
    this._strValue = value;
  }
  public resetStrValue() {
    this._strValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strValueInput() {
    return this._strValue;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class PoolMaxConnRatePerServerActionRedirectPathTokensList extends cdktf.ComplexList {
  public internalValue? : PoolMaxConnRatePerServerActionRedirectPathTokens[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): PoolMaxConnRatePerServerActionRedirectPathTokensOutputReference {
    return new PoolMaxConnRatePerServerActionRedirectPathTokensOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PoolMaxConnRatePerServerActionRedirectPath {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#type Pool#type}
  */
  readonly type: string;
  /**
  * tokens block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#tokens Pool#tokens}
  */
  readonly tokens: PoolMaxConnRatePerServerActionRedirectPathTokens[] | cdktf.IResolvable;
}

export function poolMaxConnRatePerServerActionRedirectPathToTerraform(struct?: PoolMaxConnRatePerServerActionRedirectPath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    tokens: cdktf.listMapper(poolMaxConnRatePerServerActionRedirectPathTokensToTerraform, true)(struct!.tokens),
  }
}


export function poolMaxConnRatePerServerActionRedirectPathToHclTerraform(struct?: PoolMaxConnRatePerServerActionRedirectPath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tokens: {
      value: cdktf.listMapperHcl(poolMaxConnRatePerServerActionRedirectPathTokensToHclTerraform, true)(struct!.tokens),
      isBlock: true,
      type: "list",
      storageClassType: "PoolMaxConnRatePerServerActionRedirectPathTokensList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PoolMaxConnRatePerServerActionRedirectPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): PoolMaxConnRatePerServerActionRedirectPath | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._tokens?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokens = this._tokens?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PoolMaxConnRatePerServerActionRedirectPath | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._tokens.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._tokens.internalValue = value.tokens;
    }
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // tokens - computed: false, optional: false, required: true
  private _tokens = new PoolMaxConnRatePerServerActionRedirectPathTokensList(this, "tokens", false);
  public get tokens() {
    return this._tokens;
  }
  public putTokens(value: PoolMaxConnRatePerServerActionRedirectPathTokens[] | cdktf.IResolvable) {
    this._tokens.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokensInput() {
    return this._tokens.internalValue;
  }
}

export class PoolMaxConnRatePerServerActionRedirectPathList extends cdktf.ComplexList {
  public internalValue? : PoolMaxConnRatePerServerActionRedirectPath[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): PoolMaxConnRatePerServerActionRedirectPathOutputReference {
    return new PoolMaxConnRatePerServerActionRedirectPathOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PoolMaxConnRatePerServerActionRedirect {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#add_string Pool#add_string}
  */
  readonly addString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#keep_query Pool#keep_query}
  */
  readonly keepQuery?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#port Pool#port}
  */
  readonly port?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#protocol Pool#protocol}
  */
  readonly protocol: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#status_code Pool#status_code}
  */
  readonly statusCode?: string;
  /**
  * host block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#host Pool#host}
  */
  readonly host?: PoolMaxConnRatePerServerActionRedirectHost[] | cdktf.IResolvable;
  /**
  * path block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#path Pool#path}
  */
  readonly path?: PoolMaxConnRatePerServerActionRedirectPath[] | cdktf.IResolvable;
}

export function poolMaxConnRatePerServerActionRedirectToTerraform(struct?: PoolMaxConnRatePerServerActionRedirect | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add_string: cdktf.stringToTerraform(struct!.addString),
    keep_query: cdktf.stringToTerraform(struct!.keepQuery),
    port: cdktf.stringToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    status_code: cdktf.stringToTerraform(struct!.statusCode),
    host: cdktf.listMapper(poolMaxConnRatePerServerActionRedirectHostToTerraform, true)(struct!.host),
    path: cdktf.listMapper(poolMaxConnRatePerServerActionRedirectPathToTerraform, true)(struct!.path),
  }
}


export function poolMaxConnRatePerServerActionRedirectToHclTerraform(struct?: PoolMaxConnRatePerServerActionRedirect | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add_string: {
      value: cdktf.stringToHclTerraform(struct!.addString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keep_query: {
      value: cdktf.stringToHclTerraform(struct!.keepQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status_code: {
      value: cdktf.stringToHclTerraform(struct!.statusCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktf.listMapperHcl(poolMaxConnRatePerServerActionRedirectHostToHclTerraform, true)(struct!.host),
      isBlock: true,
      type: "set",
      storageClassType: "PoolMaxConnRatePerServerActionRedirectHostList",
    },
    path: {
      value: cdktf.listMapperHcl(poolMaxConnRatePerServerActionRedirectPathToHclTerraform, true)(struct!.path),
      isBlock: true,
      type: "set",
      storageClassType: "PoolMaxConnRatePerServerActionRedirectPathList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PoolMaxConnRatePerServerActionRedirectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): PoolMaxConnRatePerServerActionRedirect | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addString !== undefined) {
      hasAnyValues = true;
      internalValueResult.addString = this._addString;
    }
    if (this._keepQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepQuery = this._keepQuery;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._statusCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusCode = this._statusCode;
    }
    if (this._host?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host?.internalValue;
    }
    if (this._path?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PoolMaxConnRatePerServerActionRedirect | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addString = undefined;
      this._keepQuery = undefined;
      this._port = undefined;
      this._protocol = undefined;
      this._statusCode = undefined;
      this._host.internalValue = undefined;
      this._path.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addString = value.addString;
      this._keepQuery = value.keepQuery;
      this._port = value.port;
      this._protocol = value.protocol;
      this._statusCode = value.statusCode;
      this._host.internalValue = value.host;
      this._path.internalValue = value.path;
    }
  }

  // add_string - computed: true, optional: true, required: false
  private _addString?: string; 
  public get addString() {
    return this.getStringAttribute('add_string');
  }
  public set addString(value: string) {
    this._addString = value;
  }
  public resetAddString() {
    this._addString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addStringInput() {
    return this._addString;
  }

  // keep_query - computed: false, optional: true, required: false
  private _keepQuery?: string; 
  public get keepQuery() {
    return this.getStringAttribute('keep_query');
  }
  public set keepQuery(value: string) {
    this._keepQuery = value;
  }
  public resetKeepQuery() {
    this._keepQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepQueryInput() {
    return this._keepQuery;
  }

  // port - computed: true, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // status_code - computed: false, optional: true, required: false
  private _statusCode?: string; 
  public get statusCode() {
    return this.getStringAttribute('status_code');
  }
  public set statusCode(value: string) {
    this._statusCode = value;
  }
  public resetStatusCode() {
    this._statusCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusCodeInput() {
    return this._statusCode;
  }

  // host - computed: false, optional: true, required: false
  private _host = new PoolMaxConnRatePerServerActionRedirectHostList(this, "host", true);
  public get host() {
    return this._host;
  }
  public putHost(value: PoolMaxConnRatePerServerActionRedirectHost[] | cdktf.IResolvable) {
    this._host.internalValue = value;
  }
  public resetHost() {
    this._host.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host.internalValue;
  }

  // path - computed: false, optional: true, required: false
  private _path = new PoolMaxConnRatePerServerActionRedirectPathList(this, "path", true);
  public get path() {
    return this._path;
  }
  public putPath(value: PoolMaxConnRatePerServerActionRedirectPath[] | cdktf.IResolvable) {
    this._path.internalValue = value;
  }
  public resetPath() {
    this._path.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path.internalValue;
  }
}

export class PoolMaxConnRatePerServerActionRedirectList extends cdktf.ComplexList {
  public internalValue? : PoolMaxConnRatePerServerActionRedirect[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): PoolMaxConnRatePerServerActionRedirectOutputReference {
    return new PoolMaxConnRatePerServerActionRedirectOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PoolMaxConnRatePerServerAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#status_code Pool#status_code}
  */
  readonly statusCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#type Pool#type}
  */
  readonly type?: string;
  /**
  * file block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#file Pool#file}
  */
  readonly file?: PoolMaxConnRatePerServerActionFile[] | cdktf.IResolvable;
  /**
  * redirect block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#redirect Pool#redirect}
  */
  readonly redirect?: PoolMaxConnRatePerServerActionRedirect[] | cdktf.IResolvable;
}

export function poolMaxConnRatePerServerActionToTerraform(struct?: PoolMaxConnRatePerServerAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    status_code: cdktf.stringToTerraform(struct!.statusCode),
    type: cdktf.stringToTerraform(struct!.type),
    file: cdktf.listMapper(poolMaxConnRatePerServerActionFileToTerraform, true)(struct!.file),
    redirect: cdktf.listMapper(poolMaxConnRatePerServerActionRedirectToTerraform, true)(struct!.redirect),
  }
}


export function poolMaxConnRatePerServerActionToHclTerraform(struct?: PoolMaxConnRatePerServerAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    status_code: {
      value: cdktf.stringToHclTerraform(struct!.statusCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file: {
      value: cdktf.listMapperHcl(poolMaxConnRatePerServerActionFileToHclTerraform, true)(struct!.file),
      isBlock: true,
      type: "set",
      storageClassType: "PoolMaxConnRatePerServerActionFileList",
    },
    redirect: {
      value: cdktf.listMapperHcl(poolMaxConnRatePerServerActionRedirectToHclTerraform, true)(struct!.redirect),
      isBlock: true,
      type: "set",
      storageClassType: "PoolMaxConnRatePerServerActionRedirectList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PoolMaxConnRatePerServerActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): PoolMaxConnRatePerServerAction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._statusCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusCode = this._statusCode;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._file?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.file = this._file?.internalValue;
    }
    if (this._redirect?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirect = this._redirect?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PoolMaxConnRatePerServerAction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._statusCode = undefined;
      this._type = undefined;
      this._file.internalValue = undefined;
      this._redirect.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._statusCode = value.statusCode;
      this._type = value.type;
      this._file.internalValue = value.file;
      this._redirect.internalValue = value.redirect;
    }
  }

  // status_code - computed: false, optional: true, required: false
  private _statusCode?: string; 
  public get statusCode() {
    return this.getStringAttribute('status_code');
  }
  public set statusCode(value: string) {
    this._statusCode = value;
  }
  public resetStatusCode() {
    this._statusCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusCodeInput() {
    return this._statusCode;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // file - computed: false, optional: true, required: false
  private _file = new PoolMaxConnRatePerServerActionFileList(this, "file", true);
  public get file() {
    return this._file;
  }
  public putFile(value: PoolMaxConnRatePerServerActionFile[] | cdktf.IResolvable) {
    this._file.internalValue = value;
  }
  public resetFile() {
    this._file.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file.internalValue;
  }

  // redirect - computed: false, optional: true, required: false
  private _redirect = new PoolMaxConnRatePerServerActionRedirectList(this, "redirect", true);
  public get redirect() {
    return this._redirect;
  }
  public putRedirect(value: PoolMaxConnRatePerServerActionRedirect[] | cdktf.IResolvable) {
    this._redirect.internalValue = value;
  }
  public resetRedirect() {
    this._redirect.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectInput() {
    return this._redirect.internalValue;
  }
}

export class PoolMaxConnRatePerServerActionList extends cdktf.ComplexList {
  public internalValue? : PoolMaxConnRatePerServerAction[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): PoolMaxConnRatePerServerActionOutputReference {
    return new PoolMaxConnRatePerServerActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PoolMaxConnRatePerServerRateLimiter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#burst_sz Pool#burst_sz}
  */
  readonly burstSz?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#count Pool#count}
  */
  readonly count?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#name Pool#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#period Pool#period}
  */
  readonly period?: string;
}

export function poolMaxConnRatePerServerRateLimiterToTerraform(struct?: PoolMaxConnRatePerServerRateLimiter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    burst_sz: cdktf.stringToTerraform(struct!.burstSz),
    count: cdktf.stringToTerraform(struct!.count),
    name: cdktf.stringToTerraform(struct!.name),
    period: cdktf.stringToTerraform(struct!.period),
  }
}


export function poolMaxConnRatePerServerRateLimiterToHclTerraform(struct?: PoolMaxConnRatePerServerRateLimiter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    burst_sz: {
      value: cdktf.stringToHclTerraform(struct!.burstSz),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    count: {
      value: cdktf.stringToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    period: {
      value: cdktf.stringToHclTerraform(struct!.period),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PoolMaxConnRatePerServerRateLimiterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): PoolMaxConnRatePerServerRateLimiter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._burstSz !== undefined) {
      hasAnyValues = true;
      internalValueResult.burstSz = this._burstSz;
    }
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._period !== undefined) {
      hasAnyValues = true;
      internalValueResult.period = this._period;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PoolMaxConnRatePerServerRateLimiter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._burstSz = undefined;
      this._count = undefined;
      this._name = undefined;
      this._period = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._burstSz = value.burstSz;
      this._count = value.count;
      this._name = value.name;
      this._period = value.period;
    }
  }

  // burst_sz - computed: false, optional: true, required: false
  private _burstSz?: string; 
  public get burstSz() {
    return this.getStringAttribute('burst_sz');
  }
  public set burstSz(value: string) {
    this._burstSz = value;
  }
  public resetBurstSz() {
    this._burstSz = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get burstSzInput() {
    return this._burstSz;
  }

  // count - computed: false, optional: true, required: false
  private _count?: string; 
  public get count() {
    return this.getStringAttribute('count');
  }
  public set count(value: string) {
    this._count = value;
  }
  public resetCount() {
    this._count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // period - computed: false, optional: true, required: false
  private _period?: string; 
  public get period() {
    return this.getStringAttribute('period');
  }
  public set period(value: string) {
    this._period = value;
  }
  public resetPeriod() {
    this._period = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period;
  }
}

export class PoolMaxConnRatePerServerRateLimiterList extends cdktf.ComplexList {
  public internalValue? : PoolMaxConnRatePerServerRateLimiter[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): PoolMaxConnRatePerServerRateLimiterOutputReference {
    return new PoolMaxConnRatePerServerRateLimiterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PoolMaxConnRatePerServer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#explicit_tracking Pool#explicit_tracking}
  */
  readonly explicitTracking?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#fine_grain Pool#fine_grain}
  */
  readonly fineGrain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#http_cookie Pool#http_cookie}
  */
  readonly httpCookie?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#http_header Pool#http_header}
  */
  readonly httpHeader?: string;
  /**
  * action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#action Pool#action}
  */
  readonly action: PoolMaxConnRatePerServerAction[] | cdktf.IResolvable;
  /**
  * rate_limiter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#rate_limiter Pool#rate_limiter}
  */
  readonly rateLimiter?: PoolMaxConnRatePerServerRateLimiter[] | cdktf.IResolvable;
}

export function poolMaxConnRatePerServerToTerraform(struct?: PoolMaxConnRatePerServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    explicit_tracking: cdktf.stringToTerraform(struct!.explicitTracking),
    fine_grain: cdktf.stringToTerraform(struct!.fineGrain),
    http_cookie: cdktf.stringToTerraform(struct!.httpCookie),
    http_header: cdktf.stringToTerraform(struct!.httpHeader),
    action: cdktf.listMapper(poolMaxConnRatePerServerActionToTerraform, true)(struct!.action),
    rate_limiter: cdktf.listMapper(poolMaxConnRatePerServerRateLimiterToTerraform, true)(struct!.rateLimiter),
  }
}


export function poolMaxConnRatePerServerToHclTerraform(struct?: PoolMaxConnRatePerServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    explicit_tracking: {
      value: cdktf.stringToHclTerraform(struct!.explicitTracking),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fine_grain: {
      value: cdktf.stringToHclTerraform(struct!.fineGrain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_cookie: {
      value: cdktf.stringToHclTerraform(struct!.httpCookie),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_header: {
      value: cdktf.stringToHclTerraform(struct!.httpHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    action: {
      value: cdktf.listMapperHcl(poolMaxConnRatePerServerActionToHclTerraform, true)(struct!.action),
      isBlock: true,
      type: "set",
      storageClassType: "PoolMaxConnRatePerServerActionList",
    },
    rate_limiter: {
      value: cdktf.listMapperHcl(poolMaxConnRatePerServerRateLimiterToHclTerraform, true)(struct!.rateLimiter),
      isBlock: true,
      type: "set",
      storageClassType: "PoolMaxConnRatePerServerRateLimiterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PoolMaxConnRatePerServerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): PoolMaxConnRatePerServer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._explicitTracking !== undefined) {
      hasAnyValues = true;
      internalValueResult.explicitTracking = this._explicitTracking;
    }
    if (this._fineGrain !== undefined) {
      hasAnyValues = true;
      internalValueResult.fineGrain = this._fineGrain;
    }
    if (this._httpCookie !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpCookie = this._httpCookie;
    }
    if (this._httpHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpHeader = this._httpHeader;
    }
    if (this._action?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action?.internalValue;
    }
    if (this._rateLimiter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateLimiter = this._rateLimiter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PoolMaxConnRatePerServer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._explicitTracking = undefined;
      this._fineGrain = undefined;
      this._httpCookie = undefined;
      this._httpHeader = undefined;
      this._action.internalValue = undefined;
      this._rateLimiter.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._explicitTracking = value.explicitTracking;
      this._fineGrain = value.fineGrain;
      this._httpCookie = value.httpCookie;
      this._httpHeader = value.httpHeader;
      this._action.internalValue = value.action;
      this._rateLimiter.internalValue = value.rateLimiter;
    }
  }

  // explicit_tracking - computed: false, optional: true, required: false
  private _explicitTracking?: string; 
  public get explicitTracking() {
    return this.getStringAttribute('explicit_tracking');
  }
  public set explicitTracking(value: string) {
    this._explicitTracking = value;
  }
  public resetExplicitTracking() {
    this._explicitTracking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get explicitTrackingInput() {
    return this._explicitTracking;
  }

  // fine_grain - computed: false, optional: true, required: false
  private _fineGrain?: string; 
  public get fineGrain() {
    return this.getStringAttribute('fine_grain');
  }
  public set fineGrain(value: string) {
    this._fineGrain = value;
  }
  public resetFineGrain() {
    this._fineGrain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fineGrainInput() {
    return this._fineGrain;
  }

  // http_cookie - computed: true, optional: true, required: false
  private _httpCookie?: string; 
  public get httpCookie() {
    return this.getStringAttribute('http_cookie');
  }
  public set httpCookie(value: string) {
    this._httpCookie = value;
  }
  public resetHttpCookie() {
    this._httpCookie = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpCookieInput() {
    return this._httpCookie;
  }

  // http_header - computed: true, optional: true, required: false
  private _httpHeader?: string; 
  public get httpHeader() {
    return this.getStringAttribute('http_header');
  }
  public set httpHeader(value: string) {
    this._httpHeader = value;
  }
  public resetHttpHeader() {
    this._httpHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHeaderInput() {
    return this._httpHeader;
  }

  // action - computed: false, optional: false, required: true
  private _action = new PoolMaxConnRatePerServerActionList(this, "action", true);
  public get action() {
    return this._action;
  }
  public putAction(value: PoolMaxConnRatePerServerAction[] | cdktf.IResolvable) {
    this._action.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // rate_limiter - computed: false, optional: true, required: false
  private _rateLimiter = new PoolMaxConnRatePerServerRateLimiterList(this, "rate_limiter", true);
  public get rateLimiter() {
    return this._rateLimiter;
  }
  public putRateLimiter(value: PoolMaxConnRatePerServerRateLimiter[] | cdktf.IResolvable) {
    this._rateLimiter.internalValue = value;
  }
  public resetRateLimiter() {
    this._rateLimiter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimiterInput() {
    return this._rateLimiter.internalValue;
  }
}

export class PoolMaxConnRatePerServerList extends cdktf.ComplexList {
  public internalValue? : PoolMaxConnRatePerServer[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): PoolMaxConnRatePerServerOutputReference {
    return new PoolMaxConnRatePerServerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PoolNetworks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#network_ref Pool#network_ref}
  */
  readonly networkRef: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#server_filter Pool#server_filter}
  */
  readonly serverFilter?: string;
}

export function poolNetworksToTerraform(struct?: PoolNetworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network_ref: cdktf.stringToTerraform(struct!.networkRef),
    server_filter: cdktf.stringToTerraform(struct!.serverFilter),
  }
}


export function poolNetworksToHclTerraform(struct?: PoolNetworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network_ref: {
      value: cdktf.stringToHclTerraform(struct!.networkRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_filter: {
      value: cdktf.stringToHclTerraform(struct!.serverFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PoolNetworksOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): PoolNetworks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkRef = this._networkRef;
    }
    if (this._serverFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverFilter = this._serverFilter;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PoolNetworks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._networkRef = undefined;
      this._serverFilter = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._networkRef = value.networkRef;
      this._serverFilter = value.serverFilter;
    }
  }

  // network_ref - computed: false, optional: false, required: true
  private _networkRef?: string; 
  public get networkRef() {
    return this.getStringAttribute('network_ref');
  }
  public set networkRef(value: string) {
    this._networkRef = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkRefInput() {
    return this._networkRef;
  }

  // server_filter - computed: true, optional: true, required: false
  private _serverFilter?: string; 
  public get serverFilter() {
    return this.getStringAttribute('server_filter');
  }
  public set serverFilter(value: string) {
    this._serverFilter = value;
  }
  public resetServerFilter() {
    this._serverFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverFilterInput() {
    return this._serverFilter;
  }
}

export class PoolNetworksList extends cdktf.ComplexList {
  public internalValue? : PoolNetworks[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): PoolNetworksOutputReference {
    return new PoolNetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PoolPlacementNetworksSubnetIpAddr {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#addr Pool#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#type Pool#type}
  */
  readonly type: string;
}

export function poolPlacementNetworksSubnetIpAddrToTerraform(struct?: PoolPlacementNetworksSubnetIpAddr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function poolPlacementNetworksSubnetIpAddrToHclTerraform(struct?: PoolPlacementNetworksSubnetIpAddr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PoolPlacementNetworksSubnetIpAddrOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): PoolPlacementNetworksSubnetIpAddr | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PoolPlacementNetworksSubnetIpAddr | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addr = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addr = value.addr;
      this._type = value.type;
    }
  }

  // addr - computed: false, optional: false, required: true
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class PoolPlacementNetworksSubnetIpAddrList extends cdktf.ComplexList {
  public internalValue? : PoolPlacementNetworksSubnetIpAddr[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): PoolPlacementNetworksSubnetIpAddrOutputReference {
    return new PoolPlacementNetworksSubnetIpAddrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PoolPlacementNetworksSubnet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#mask Pool#mask}
  */
  readonly mask: string;
  /**
  * ip_addr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#ip_addr Pool#ip_addr}
  */
  readonly ipAddr: PoolPlacementNetworksSubnetIpAddr[] | cdktf.IResolvable;
}

export function poolPlacementNetworksSubnetToTerraform(struct?: PoolPlacementNetworksSubnet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mask: cdktf.stringToTerraform(struct!.mask),
    ip_addr: cdktf.listMapper(poolPlacementNetworksSubnetIpAddrToTerraform, true)(struct!.ipAddr),
  }
}


export function poolPlacementNetworksSubnetToHclTerraform(struct?: PoolPlacementNetworksSubnet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mask: {
      value: cdktf.stringToHclTerraform(struct!.mask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_addr: {
      value: cdktf.listMapperHcl(poolPlacementNetworksSubnetIpAddrToHclTerraform, true)(struct!.ipAddr),
      isBlock: true,
      type: "set",
      storageClassType: "PoolPlacementNetworksSubnetIpAddrList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PoolPlacementNetworksSubnetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): PoolPlacementNetworksSubnet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mask !== undefined) {
      hasAnyValues = true;
      internalValueResult.mask = this._mask;
    }
    if (this._ipAddr?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddr = this._ipAddr?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PoolPlacementNetworksSubnet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mask = undefined;
      this._ipAddr.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mask = value.mask;
      this._ipAddr.internalValue = value.ipAddr;
    }
  }

  // mask - computed: false, optional: false, required: true
  private _mask?: string; 
  public get mask() {
    return this.getStringAttribute('mask');
  }
  public set mask(value: string) {
    this._mask = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maskInput() {
    return this._mask;
  }

  // ip_addr - computed: false, optional: false, required: true
  private _ipAddr = new PoolPlacementNetworksSubnetIpAddrList(this, "ip_addr", true);
  public get ipAddr() {
    return this._ipAddr;
  }
  public putIpAddr(value: PoolPlacementNetworksSubnetIpAddr[] | cdktf.IResolvable) {
    this._ipAddr.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddrInput() {
    return this._ipAddr.internalValue;
  }
}

export class PoolPlacementNetworksSubnetList extends cdktf.ComplexList {
  public internalValue? : PoolPlacementNetworksSubnet[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): PoolPlacementNetworksSubnetOutputReference {
    return new PoolPlacementNetworksSubnetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PoolPlacementNetworks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#network_ref Pool#network_ref}
  */
  readonly networkRef: string;
  /**
  * subnet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#subnet Pool#subnet}
  */
  readonly subnet: PoolPlacementNetworksSubnet[] | cdktf.IResolvable;
}

export function poolPlacementNetworksToTerraform(struct?: PoolPlacementNetworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network_ref: cdktf.stringToTerraform(struct!.networkRef),
    subnet: cdktf.listMapper(poolPlacementNetworksSubnetToTerraform, true)(struct!.subnet),
  }
}


export function poolPlacementNetworksToHclTerraform(struct?: PoolPlacementNetworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network_ref: {
      value: cdktf.stringToHclTerraform(struct!.networkRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet: {
      value: cdktf.listMapperHcl(poolPlacementNetworksSubnetToHclTerraform, true)(struct!.subnet),
      isBlock: true,
      type: "set",
      storageClassType: "PoolPlacementNetworksSubnetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PoolPlacementNetworksOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): PoolPlacementNetworks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkRef = this._networkRef;
    }
    if (this._subnet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnet = this._subnet?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PoolPlacementNetworks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._networkRef = undefined;
      this._subnet.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._networkRef = value.networkRef;
      this._subnet.internalValue = value.subnet;
    }
  }

  // network_ref - computed: false, optional: false, required: true
  private _networkRef?: string; 
  public get networkRef() {
    return this.getStringAttribute('network_ref');
  }
  public set networkRef(value: string) {
    this._networkRef = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkRefInput() {
    return this._networkRef;
  }

  // subnet - computed: false, optional: false, required: true
  private _subnet = new PoolPlacementNetworksSubnetList(this, "subnet", true);
  public get subnet() {
    return this._subnet;
  }
  public putSubnet(value: PoolPlacementNetworksSubnet[] | cdktf.IResolvable) {
    this._subnet.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetInput() {
    return this._subnet.internalValue;
  }
}

export class PoolPlacementNetworksList extends cdktf.ComplexList {
  public internalValue? : PoolPlacementNetworks[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): PoolPlacementNetworksOutputReference {
    return new PoolPlacementNetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PoolServerReselectSvrRespCodeRanges {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#begin Pool#begin}
  */
  readonly begin: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#end Pool#end}
  */
  readonly end: string;
}

export function poolServerReselectSvrRespCodeRangesToTerraform(struct?: PoolServerReselectSvrRespCodeRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    begin: cdktf.stringToTerraform(struct!.begin),
    end: cdktf.stringToTerraform(struct!.end),
  }
}


export function poolServerReselectSvrRespCodeRangesToHclTerraform(struct?: PoolServerReselectSvrRespCodeRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    begin: {
      value: cdktf.stringToHclTerraform(struct!.begin),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    end: {
      value: cdktf.stringToHclTerraform(struct!.end),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PoolServerReselectSvrRespCodeRangesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): PoolServerReselectSvrRespCodeRanges | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._begin !== undefined) {
      hasAnyValues = true;
      internalValueResult.begin = this._begin;
    }
    if (this._end !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PoolServerReselectSvrRespCodeRanges | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._begin = undefined;
      this._end = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._begin = value.begin;
      this._end = value.end;
    }
  }

  // begin - computed: false, optional: false, required: true
  private _begin?: string; 
  public get begin() {
    return this.getStringAttribute('begin');
  }
  public set begin(value: string) {
    this._begin = value;
  }
  // Temporarily expose input value. Use with caution.
  public get beginInput() {
    return this._begin;
  }

  // end - computed: false, optional: false, required: true
  private _end?: string; 
  public get end() {
    return this.getStringAttribute('end');
  }
  public set end(value: string) {
    this._end = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
  }
}

export class PoolServerReselectSvrRespCodeRangesList extends cdktf.ComplexList {
  public internalValue? : PoolServerReselectSvrRespCodeRanges[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): PoolServerReselectSvrRespCodeRangesOutputReference {
    return new PoolServerReselectSvrRespCodeRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PoolServerReselectSvrRespCode {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#codes Pool#codes}
  */
  readonly codes?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#resp_code_block Pool#resp_code_block}
  */
  readonly respCodeBlock?: string[];
  /**
  * ranges block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#ranges Pool#ranges}
  */
  readonly ranges?: PoolServerReselectSvrRespCodeRanges[] | cdktf.IResolvable;
}

export function poolServerReselectSvrRespCodeToTerraform(struct?: PoolServerReselectSvrRespCode | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    codes: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.codes),
    resp_code_block: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.respCodeBlock),
    ranges: cdktf.listMapper(poolServerReselectSvrRespCodeRangesToTerraform, true)(struct!.ranges),
  }
}


export function poolServerReselectSvrRespCodeToHclTerraform(struct?: PoolServerReselectSvrRespCode | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    codes: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.codes),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    resp_code_block: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.respCodeBlock),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ranges: {
      value: cdktf.listMapperHcl(poolServerReselectSvrRespCodeRangesToHclTerraform, true)(struct!.ranges),
      isBlock: true,
      type: "list",
      storageClassType: "PoolServerReselectSvrRespCodeRangesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PoolServerReselectSvrRespCodeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): PoolServerReselectSvrRespCode | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._codes !== undefined) {
      hasAnyValues = true;
      internalValueResult.codes = this._codes;
    }
    if (this._respCodeBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.respCodeBlock = this._respCodeBlock;
    }
    if (this._ranges?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ranges = this._ranges?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PoolServerReselectSvrRespCode | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._codes = undefined;
      this._respCodeBlock = undefined;
      this._ranges.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._codes = value.codes;
      this._respCodeBlock = value.respCodeBlock;
      this._ranges.internalValue = value.ranges;
    }
  }

  // codes - computed: false, optional: true, required: false
  private _codes?: number[]; 
  public get codes() {
    return this.getNumberListAttribute('codes');
  }
  public set codes(value: number[]) {
    this._codes = value;
  }
  public resetCodes() {
    this._codes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codesInput() {
    return this._codes;
  }

  // resp_code_block - computed: false, optional: true, required: false
  private _respCodeBlock?: string[]; 
  public get respCodeBlock() {
    return this.getListAttribute('resp_code_block');
  }
  public set respCodeBlock(value: string[]) {
    this._respCodeBlock = value;
  }
  public resetRespCodeBlock() {
    this._respCodeBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get respCodeBlockInput() {
    return this._respCodeBlock;
  }

  // ranges - computed: false, optional: true, required: false
  private _ranges = new PoolServerReselectSvrRespCodeRangesList(this, "ranges", false);
  public get ranges() {
    return this._ranges;
  }
  public putRanges(value: PoolServerReselectSvrRespCodeRanges[] | cdktf.IResolvable) {
    this._ranges.internalValue = value;
  }
  public resetRanges() {
    this._ranges.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangesInput() {
    return this._ranges.internalValue;
  }
}

export class PoolServerReselectSvrRespCodeList extends cdktf.ComplexList {
  public internalValue? : PoolServerReselectSvrRespCode[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): PoolServerReselectSvrRespCodeOutputReference {
    return new PoolServerReselectSvrRespCodeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PoolServerReselect {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#enabled Pool#enabled}
  */
  readonly enabled: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#num_retries Pool#num_retries}
  */
  readonly numRetries?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#retry_nonidempotent Pool#retry_nonidempotent}
  */
  readonly retryNonidempotent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#retry_timeout Pool#retry_timeout}
  */
  readonly retryTimeout?: string;
  /**
  * svr_resp_code block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#svr_resp_code Pool#svr_resp_code}
  */
  readonly svrRespCode?: PoolServerReselectSvrRespCode[] | cdktf.IResolvable;
}

export function poolServerReselectToTerraform(struct?: PoolServerReselect | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.stringToTerraform(struct!.enabled),
    num_retries: cdktf.stringToTerraform(struct!.numRetries),
    retry_nonidempotent: cdktf.stringToTerraform(struct!.retryNonidempotent),
    retry_timeout: cdktf.stringToTerraform(struct!.retryTimeout),
    svr_resp_code: cdktf.listMapper(poolServerReselectSvrRespCodeToTerraform, true)(struct!.svrRespCode),
  }
}


export function poolServerReselectToHclTerraform(struct?: PoolServerReselect | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.stringToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num_retries: {
      value: cdktf.stringToHclTerraform(struct!.numRetries),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retry_nonidempotent: {
      value: cdktf.stringToHclTerraform(struct!.retryNonidempotent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retry_timeout: {
      value: cdktf.stringToHclTerraform(struct!.retryTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    svr_resp_code: {
      value: cdktf.listMapperHcl(poolServerReselectSvrRespCodeToHclTerraform, true)(struct!.svrRespCode),
      isBlock: true,
      type: "set",
      storageClassType: "PoolServerReselectSvrRespCodeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PoolServerReselectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): PoolServerReselect | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._numRetries !== undefined) {
      hasAnyValues = true;
      internalValueResult.numRetries = this._numRetries;
    }
    if (this._retryNonidempotent !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryNonidempotent = this._retryNonidempotent;
    }
    if (this._retryTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryTimeout = this._retryTimeout;
    }
    if (this._svrRespCode?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.svrRespCode = this._svrRespCode?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PoolServerReselect | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._numRetries = undefined;
      this._retryNonidempotent = undefined;
      this._retryTimeout = undefined;
      this._svrRespCode.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._numRetries = value.numRetries;
      this._retryNonidempotent = value.retryNonidempotent;
      this._retryTimeout = value.retryTimeout;
      this._svrRespCode.internalValue = value.svrRespCode;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: string; 
  public get enabled() {
    return this.getStringAttribute('enabled');
  }
  public set enabled(value: string) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // num_retries - computed: false, optional: true, required: false
  private _numRetries?: string; 
  public get numRetries() {
    return this.getStringAttribute('num_retries');
  }
  public set numRetries(value: string) {
    this._numRetries = value;
  }
  public resetNumRetries() {
    this._numRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numRetriesInput() {
    return this._numRetries;
  }

  // retry_nonidempotent - computed: false, optional: true, required: false
  private _retryNonidempotent?: string; 
  public get retryNonidempotent() {
    return this.getStringAttribute('retry_nonidempotent');
  }
  public set retryNonidempotent(value: string) {
    this._retryNonidempotent = value;
  }
  public resetRetryNonidempotent() {
    this._retryNonidempotent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryNonidempotentInput() {
    return this._retryNonidempotent;
  }

  // retry_timeout - computed: false, optional: true, required: false
  private _retryTimeout?: string; 
  public get retryTimeout() {
    return this.getStringAttribute('retry_timeout');
  }
  public set retryTimeout(value: string) {
    this._retryTimeout = value;
  }
  public resetRetryTimeout() {
    this._retryTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryTimeoutInput() {
    return this._retryTimeout;
  }

  // svr_resp_code - computed: false, optional: true, required: false
  private _svrRespCode = new PoolServerReselectSvrRespCodeList(this, "svr_resp_code", true);
  public get svrRespCode() {
    return this._svrRespCode;
  }
  public putSvrRespCode(value: PoolServerReselectSvrRespCode[] | cdktf.IResolvable) {
    this._svrRespCode.internalValue = value;
  }
  public resetSvrRespCode() {
    this._svrRespCode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get svrRespCodeInput() {
    return this._svrRespCode.internalValue;
  }
}

export class PoolServerReselectList extends cdktf.ComplexList {
  public internalValue? : PoolServerReselect[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): PoolServerReselectOutputReference {
    return new PoolServerReselectOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PoolServersDiscoveredNetworksSubnetIpAddr {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#addr Pool#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#type Pool#type}
  */
  readonly type: string;
}

export function poolServersDiscoveredNetworksSubnetIpAddrToTerraform(struct?: PoolServersDiscoveredNetworksSubnetIpAddr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function poolServersDiscoveredNetworksSubnetIpAddrToHclTerraform(struct?: PoolServersDiscoveredNetworksSubnetIpAddr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PoolServersDiscoveredNetworksSubnetIpAddrOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): PoolServersDiscoveredNetworksSubnetIpAddr | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PoolServersDiscoveredNetworksSubnetIpAddr | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addr = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addr = value.addr;
      this._type = value.type;
    }
  }

  // addr - computed: false, optional: false, required: true
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class PoolServersDiscoveredNetworksSubnetIpAddrList extends cdktf.ComplexList {
  public internalValue? : PoolServersDiscoveredNetworksSubnetIpAddr[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): PoolServersDiscoveredNetworksSubnetIpAddrOutputReference {
    return new PoolServersDiscoveredNetworksSubnetIpAddrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PoolServersDiscoveredNetworksSubnet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#mask Pool#mask}
  */
  readonly mask: string;
  /**
  * ip_addr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#ip_addr Pool#ip_addr}
  */
  readonly ipAddr: PoolServersDiscoveredNetworksSubnetIpAddr[] | cdktf.IResolvable;
}

export function poolServersDiscoveredNetworksSubnetToTerraform(struct?: PoolServersDiscoveredNetworksSubnet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mask: cdktf.stringToTerraform(struct!.mask),
    ip_addr: cdktf.listMapper(poolServersDiscoveredNetworksSubnetIpAddrToTerraform, true)(struct!.ipAddr),
  }
}


export function poolServersDiscoveredNetworksSubnetToHclTerraform(struct?: PoolServersDiscoveredNetworksSubnet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mask: {
      value: cdktf.stringToHclTerraform(struct!.mask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_addr: {
      value: cdktf.listMapperHcl(poolServersDiscoveredNetworksSubnetIpAddrToHclTerraform, true)(struct!.ipAddr),
      isBlock: true,
      type: "set",
      storageClassType: "PoolServersDiscoveredNetworksSubnetIpAddrList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PoolServersDiscoveredNetworksSubnetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): PoolServersDiscoveredNetworksSubnet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mask !== undefined) {
      hasAnyValues = true;
      internalValueResult.mask = this._mask;
    }
    if (this._ipAddr?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddr = this._ipAddr?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PoolServersDiscoveredNetworksSubnet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mask = undefined;
      this._ipAddr.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mask = value.mask;
      this._ipAddr.internalValue = value.ipAddr;
    }
  }

  // mask - computed: false, optional: false, required: true
  private _mask?: string; 
  public get mask() {
    return this.getStringAttribute('mask');
  }
  public set mask(value: string) {
    this._mask = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maskInput() {
    return this._mask;
  }

  // ip_addr - computed: false, optional: false, required: true
  private _ipAddr = new PoolServersDiscoveredNetworksSubnetIpAddrList(this, "ip_addr", true);
  public get ipAddr() {
    return this._ipAddr;
  }
  public putIpAddr(value: PoolServersDiscoveredNetworksSubnetIpAddr[] | cdktf.IResolvable) {
    this._ipAddr.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddrInput() {
    return this._ipAddr.internalValue;
  }
}

export class PoolServersDiscoveredNetworksSubnetList extends cdktf.ComplexList {
  public internalValue? : PoolServersDiscoveredNetworksSubnet[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): PoolServersDiscoveredNetworksSubnetOutputReference {
    return new PoolServersDiscoveredNetworksSubnetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PoolServersDiscoveredNetworksSubnet6IpAddr {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#addr Pool#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#type Pool#type}
  */
  readonly type: string;
}

export function poolServersDiscoveredNetworksSubnet6IpAddrToTerraform(struct?: PoolServersDiscoveredNetworksSubnet6IpAddr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function poolServersDiscoveredNetworksSubnet6IpAddrToHclTerraform(struct?: PoolServersDiscoveredNetworksSubnet6IpAddr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PoolServersDiscoveredNetworksSubnet6IpAddrOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): PoolServersDiscoveredNetworksSubnet6IpAddr | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PoolServersDiscoveredNetworksSubnet6IpAddr | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addr = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addr = value.addr;
      this._type = value.type;
    }
  }

  // addr - computed: false, optional: false, required: true
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class PoolServersDiscoveredNetworksSubnet6IpAddrList extends cdktf.ComplexList {
  public internalValue? : PoolServersDiscoveredNetworksSubnet6IpAddr[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): PoolServersDiscoveredNetworksSubnet6IpAddrOutputReference {
    return new PoolServersDiscoveredNetworksSubnet6IpAddrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PoolServersDiscoveredNetworksSubnet6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#mask Pool#mask}
  */
  readonly mask: string;
  /**
  * ip_addr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#ip_addr Pool#ip_addr}
  */
  readonly ipAddr: PoolServersDiscoveredNetworksSubnet6IpAddr[] | cdktf.IResolvable;
}

export function poolServersDiscoveredNetworksSubnet6ToTerraform(struct?: PoolServersDiscoveredNetworksSubnet6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mask: cdktf.stringToTerraform(struct!.mask),
    ip_addr: cdktf.listMapper(poolServersDiscoveredNetworksSubnet6IpAddrToTerraform, true)(struct!.ipAddr),
  }
}


export function poolServersDiscoveredNetworksSubnet6ToHclTerraform(struct?: PoolServersDiscoveredNetworksSubnet6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mask: {
      value: cdktf.stringToHclTerraform(struct!.mask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_addr: {
      value: cdktf.listMapperHcl(poolServersDiscoveredNetworksSubnet6IpAddrToHclTerraform, true)(struct!.ipAddr),
      isBlock: true,
      type: "set",
      storageClassType: "PoolServersDiscoveredNetworksSubnet6IpAddrList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PoolServersDiscoveredNetworksSubnet6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): PoolServersDiscoveredNetworksSubnet6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mask !== undefined) {
      hasAnyValues = true;
      internalValueResult.mask = this._mask;
    }
    if (this._ipAddr?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddr = this._ipAddr?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PoolServersDiscoveredNetworksSubnet6 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mask = undefined;
      this._ipAddr.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mask = value.mask;
      this._ipAddr.internalValue = value.ipAddr;
    }
  }

  // mask - computed: false, optional: false, required: true
  private _mask?: string; 
  public get mask() {
    return this.getStringAttribute('mask');
  }
  public set mask(value: string) {
    this._mask = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maskInput() {
    return this._mask;
  }

  // ip_addr - computed: false, optional: false, required: true
  private _ipAddr = new PoolServersDiscoveredNetworksSubnet6IpAddrList(this, "ip_addr", true);
  public get ipAddr() {
    return this._ipAddr;
  }
  public putIpAddr(value: PoolServersDiscoveredNetworksSubnet6IpAddr[] | cdktf.IResolvable) {
    this._ipAddr.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddrInput() {
    return this._ipAddr.internalValue;
  }
}

export class PoolServersDiscoveredNetworksSubnet6List extends cdktf.ComplexList {
  public internalValue? : PoolServersDiscoveredNetworksSubnet6[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): PoolServersDiscoveredNetworksSubnet6OutputReference {
    return new PoolServersDiscoveredNetworksSubnet6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PoolServersDiscoveredNetworks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#network_ref Pool#network_ref}
  */
  readonly networkRef: string;
  /**
  * subnet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#subnet Pool#subnet}
  */
  readonly subnet?: PoolServersDiscoveredNetworksSubnet[] | cdktf.IResolvable;
  /**
  * subnet6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#subnet6 Pool#subnet6}
  */
  readonly subnet6?: PoolServersDiscoveredNetworksSubnet6[] | cdktf.IResolvable;
}

export function poolServersDiscoveredNetworksToTerraform(struct?: PoolServersDiscoveredNetworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network_ref: cdktf.stringToTerraform(struct!.networkRef),
    subnet: cdktf.listMapper(poolServersDiscoveredNetworksSubnetToTerraform, true)(struct!.subnet),
    subnet6: cdktf.listMapper(poolServersDiscoveredNetworksSubnet6ToTerraform, true)(struct!.subnet6),
  }
}


export function poolServersDiscoveredNetworksToHclTerraform(struct?: PoolServersDiscoveredNetworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network_ref: {
      value: cdktf.stringToHclTerraform(struct!.networkRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet: {
      value: cdktf.listMapperHcl(poolServersDiscoveredNetworksSubnetToHclTerraform, true)(struct!.subnet),
      isBlock: true,
      type: "list",
      storageClassType: "PoolServersDiscoveredNetworksSubnetList",
    },
    subnet6: {
      value: cdktf.listMapperHcl(poolServersDiscoveredNetworksSubnet6ToHclTerraform, true)(struct!.subnet6),
      isBlock: true,
      type: "list",
      storageClassType: "PoolServersDiscoveredNetworksSubnet6List",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PoolServersDiscoveredNetworksOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): PoolServersDiscoveredNetworks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkRef = this._networkRef;
    }
    if (this._subnet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnet = this._subnet?.internalValue;
    }
    if (this._subnet6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnet6 = this._subnet6?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PoolServersDiscoveredNetworks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._networkRef = undefined;
      this._subnet.internalValue = undefined;
      this._subnet6.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._networkRef = value.networkRef;
      this._subnet.internalValue = value.subnet;
      this._subnet6.internalValue = value.subnet6;
    }
  }

  // network_ref - computed: false, optional: false, required: true
  private _networkRef?: string; 
  public get networkRef() {
    return this.getStringAttribute('network_ref');
  }
  public set networkRef(value: string) {
    this._networkRef = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkRefInput() {
    return this._networkRef;
  }

  // subnet - computed: false, optional: true, required: false
  private _subnet = new PoolServersDiscoveredNetworksSubnetList(this, "subnet", false);
  public get subnet() {
    return this._subnet;
  }
  public putSubnet(value: PoolServersDiscoveredNetworksSubnet[] | cdktf.IResolvable) {
    this._subnet.internalValue = value;
  }
  public resetSubnet() {
    this._subnet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetInput() {
    return this._subnet.internalValue;
  }

  // subnet6 - computed: false, optional: true, required: false
  private _subnet6 = new PoolServersDiscoveredNetworksSubnet6List(this, "subnet6", false);
  public get subnet6() {
    return this._subnet6;
  }
  public putSubnet6(value: PoolServersDiscoveredNetworksSubnet6[] | cdktf.IResolvable) {
    this._subnet6.internalValue = value;
  }
  public resetSubnet6() {
    this._subnet6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnet6Input() {
    return this._subnet6.internalValue;
  }
}

export class PoolServersDiscoveredNetworksList extends cdktf.ComplexList {
  public internalValue? : PoolServersDiscoveredNetworks[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): PoolServersDiscoveredNetworksOutputReference {
    return new PoolServersDiscoveredNetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PoolServersIp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#addr Pool#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#type Pool#type}
  */
  readonly type: string;
}

export function poolServersIpToTerraform(struct?: PoolServersIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function poolServersIpToHclTerraform(struct?: PoolServersIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PoolServersIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): PoolServersIp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PoolServersIp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addr = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addr = value.addr;
      this._type = value.type;
    }
  }

  // addr - computed: false, optional: false, required: true
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class PoolServersIpList extends cdktf.ComplexList {
  public internalValue? : PoolServersIp[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): PoolServersIpOutputReference {
    return new PoolServersIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PoolServersLocation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#latitude Pool#latitude}
  */
  readonly latitude?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#longitude Pool#longitude}
  */
  readonly longitude?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#name Pool#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#tag Pool#tag}
  */
  readonly tag?: string;
}

export function poolServersLocationToTerraform(struct?: PoolServersLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    latitude: cdktf.stringToTerraform(struct!.latitude),
    longitude: cdktf.stringToTerraform(struct!.longitude),
    name: cdktf.stringToTerraform(struct!.name),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function poolServersLocationToHclTerraform(struct?: PoolServersLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    latitude: {
      value: cdktf.stringToHclTerraform(struct!.latitude),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    longitude: {
      value: cdktf.stringToHclTerraform(struct!.longitude),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PoolServersLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): PoolServersLocation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._latitude !== undefined) {
      hasAnyValues = true;
      internalValueResult.latitude = this._latitude;
    }
    if (this._longitude !== undefined) {
      hasAnyValues = true;
      internalValueResult.longitude = this._longitude;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PoolServersLocation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._latitude = undefined;
      this._longitude = undefined;
      this._name = undefined;
      this._tag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._latitude = value.latitude;
      this._longitude = value.longitude;
      this._name = value.name;
      this._tag = value.tag;
    }
  }

  // latitude - computed: true, optional: true, required: false
  private _latitude?: string; 
  public get latitude() {
    return this.getStringAttribute('latitude');
  }
  public set latitude(value: string) {
    this._latitude = value;
  }
  public resetLatitude() {
    this._latitude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latitudeInput() {
    return this._latitude;
  }

  // longitude - computed: true, optional: true, required: false
  private _longitude?: string; 
  public get longitude() {
    return this.getStringAttribute('longitude');
  }
  public set longitude(value: string) {
    this._longitude = value;
  }
  public resetLongitude() {
    this._longitude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get longitudeInput() {
    return this._longitude;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // tag - computed: true, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }
}

export class PoolServersLocationList extends cdktf.ComplexList {
  public internalValue? : PoolServersLocation[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): PoolServersLocationOutputReference {
    return new PoolServersLocationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PoolServersSrvRdata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#port Pool#port}
  */
  readonly port: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#priority Pool#priority}
  */
  readonly priority: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#weight Pool#weight}
  */
  readonly weight: string;
}

export function poolServersSrvRdataToTerraform(struct?: PoolServersSrvRdata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.stringToTerraform(struct!.port),
    priority: cdktf.stringToTerraform(struct!.priority),
    weight: cdktf.stringToTerraform(struct!.weight),
  }
}


export function poolServersSrvRdataToHclTerraform(struct?: PoolServersSrvRdata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.stringToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weight: {
      value: cdktf.stringToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PoolServersSrvRdataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): PoolServersSrvRdata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PoolServersSrvRdata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._port = undefined;
      this._priority = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._port = value.port;
      this._priority = value.priority;
      this._weight = value.weight;
    }
  }

  // port - computed: false, optional: false, required: true
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // priority - computed: false, optional: false, required: true
  private _priority?: string; 
  public get priority() {
    return this.getStringAttribute('priority');
  }
  public set priority(value: string) {
    this._priority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // weight - computed: false, optional: false, required: true
  private _weight?: string; 
  public get weight() {
    return this.getStringAttribute('weight');
  }
  public set weight(value: string) {
    this._weight = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class PoolServersSrvRdataList extends cdktf.ComplexList {
  public internalValue? : PoolServersSrvRdata[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): PoolServersSrvRdataOutputReference {
    return new PoolServersSrvRdataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PoolServers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#autoscaling_group_name Pool#autoscaling_group_name}
  */
  readonly autoscalingGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#availability_zone Pool#availability_zone}
  */
  readonly availabilityZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#description Pool#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#enabled Pool#enabled}
  */
  readonly enabled?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#external_orchestration_id Pool#external_orchestration_id}
  */
  readonly externalOrchestrationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#external_uuid Pool#external_uuid}
  */
  readonly externalUuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#health_monitor_refs Pool#health_monitor_refs}
  */
  readonly healthMonitorRefs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#hostname Pool#hostname}
  */
  readonly hostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#mac_address Pool#mac_address}
  */
  readonly macAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#nw_ref Pool#nw_ref}
  */
  readonly nwRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#port Pool#port}
  */
  readonly port?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#preference_order Pool#preference_order}
  */
  readonly preferenceOrder?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#prst_hdr_val Pool#prst_hdr_val}
  */
  readonly prstHdrVal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#ratio Pool#ratio}
  */
  readonly ratio?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#resolve_server_by_dns Pool#resolve_server_by_dns}
  */
  readonly resolveServerByDns?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#rewrite_host_header Pool#rewrite_host_header}
  */
  readonly rewriteHostHeader?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#server_node Pool#server_node}
  */
  readonly serverNode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#static Pool#static}
  */
  readonly static?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#verify_network Pool#verify_network}
  */
  readonly verifyNetwork?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#vm_ref Pool#vm_ref}
  */
  readonly vmRef?: string;
  /**
  * discovered_networks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#discovered_networks Pool#discovered_networks}
  */
  readonly discoveredNetworks?: PoolServersDiscoveredNetworks[] | cdktf.IResolvable;
  /**
  * ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#ip Pool#ip}
  */
  readonly ip: PoolServersIp[] | cdktf.IResolvable;
  /**
  * location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#location Pool#location}
  */
  readonly location?: PoolServersLocation[] | cdktf.IResolvable;
  /**
  * srv_rdata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#srv_rdata Pool#srv_rdata}
  */
  readonly srvRdata?: PoolServersSrvRdata[] | cdktf.IResolvable;
}

export function poolServersToTerraform(struct?: PoolServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    autoscaling_group_name: cdktf.stringToTerraform(struct!.autoscalingGroupName),
    availability_zone: cdktf.stringToTerraform(struct!.availabilityZone),
    description: cdktf.stringToTerraform(struct!.description),
    enabled: cdktf.stringToTerraform(struct!.enabled),
    external_orchestration_id: cdktf.stringToTerraform(struct!.externalOrchestrationId),
    external_uuid: cdktf.stringToTerraform(struct!.externalUuid),
    health_monitor_refs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.healthMonitorRefs),
    hostname: cdktf.stringToTerraform(struct!.hostname),
    mac_address: cdktf.stringToTerraform(struct!.macAddress),
    nw_ref: cdktf.stringToTerraform(struct!.nwRef),
    port: cdktf.stringToTerraform(struct!.port),
    preference_order: cdktf.stringToTerraform(struct!.preferenceOrder),
    prst_hdr_val: cdktf.stringToTerraform(struct!.prstHdrVal),
    ratio: cdktf.stringToTerraform(struct!.ratio),
    resolve_server_by_dns: cdktf.stringToTerraform(struct!.resolveServerByDns),
    rewrite_host_header: cdktf.stringToTerraform(struct!.rewriteHostHeader),
    server_node: cdktf.stringToTerraform(struct!.serverNode),
    static: cdktf.stringToTerraform(struct!.static),
    verify_network: cdktf.stringToTerraform(struct!.verifyNetwork),
    vm_ref: cdktf.stringToTerraform(struct!.vmRef),
    discovered_networks: cdktf.listMapper(poolServersDiscoveredNetworksToTerraform, true)(struct!.discoveredNetworks),
    ip: cdktf.listMapper(poolServersIpToTerraform, true)(struct!.ip),
    location: cdktf.listMapper(poolServersLocationToTerraform, true)(struct!.location),
    srv_rdata: cdktf.listMapper(poolServersSrvRdataToTerraform, true)(struct!.srvRdata),
  }
}


export function poolServersToHclTerraform(struct?: PoolServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    autoscaling_group_name: {
      value: cdktf.stringToHclTerraform(struct!.autoscalingGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    availability_zone: {
      value: cdktf.stringToHclTerraform(struct!.availabilityZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.stringToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_orchestration_id: {
      value: cdktf.stringToHclTerraform(struct!.externalOrchestrationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_uuid: {
      value: cdktf.stringToHclTerraform(struct!.externalUuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    health_monitor_refs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.healthMonitorRefs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mac_address: {
      value: cdktf.stringToHclTerraform(struct!.macAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nw_ref: {
      value: cdktf.stringToHclTerraform(struct!.nwRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    preference_order: {
      value: cdktf.stringToHclTerraform(struct!.preferenceOrder),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prst_hdr_val: {
      value: cdktf.stringToHclTerraform(struct!.prstHdrVal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ratio: {
      value: cdktf.stringToHclTerraform(struct!.ratio),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resolve_server_by_dns: {
      value: cdktf.stringToHclTerraform(struct!.resolveServerByDns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rewrite_host_header: {
      value: cdktf.stringToHclTerraform(struct!.rewriteHostHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_node: {
      value: cdktf.stringToHclTerraform(struct!.serverNode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    static: {
      value: cdktf.stringToHclTerraform(struct!.static),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    verify_network: {
      value: cdktf.stringToHclTerraform(struct!.verifyNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vm_ref: {
      value: cdktf.stringToHclTerraform(struct!.vmRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    discovered_networks: {
      value: cdktf.listMapperHcl(poolServersDiscoveredNetworksToHclTerraform, true)(struct!.discoveredNetworks),
      isBlock: true,
      type: "list",
      storageClassType: "PoolServersDiscoveredNetworksList",
    },
    ip: {
      value: cdktf.listMapperHcl(poolServersIpToHclTerraform, true)(struct!.ip),
      isBlock: true,
      type: "set",
      storageClassType: "PoolServersIpList",
    },
    location: {
      value: cdktf.listMapperHcl(poolServersLocationToHclTerraform, true)(struct!.location),
      isBlock: true,
      type: "set",
      storageClassType: "PoolServersLocationList",
    },
    srv_rdata: {
      value: cdktf.listMapperHcl(poolServersSrvRdataToHclTerraform, true)(struct!.srvRdata),
      isBlock: true,
      type: "set",
      storageClassType: "PoolServersSrvRdataList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PoolServersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): PoolServers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoscalingGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoscalingGroupName = this._autoscalingGroupName;
    }
    if (this._availabilityZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityZone = this._availabilityZone;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._externalOrchestrationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalOrchestrationId = this._externalOrchestrationId;
    }
    if (this._externalUuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalUuid = this._externalUuid;
    }
    if (this._healthMonitorRefs !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthMonitorRefs = this._healthMonitorRefs;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._macAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.macAddress = this._macAddress;
    }
    if (this._nwRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.nwRef = this._nwRef;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._preferenceOrder !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferenceOrder = this._preferenceOrder;
    }
    if (this._prstHdrVal !== undefined) {
      hasAnyValues = true;
      internalValueResult.prstHdrVal = this._prstHdrVal;
    }
    if (this._ratio !== undefined) {
      hasAnyValues = true;
      internalValueResult.ratio = this._ratio;
    }
    if (this._resolveServerByDns !== undefined) {
      hasAnyValues = true;
      internalValueResult.resolveServerByDns = this._resolveServerByDns;
    }
    if (this._rewriteHostHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.rewriteHostHeader = this._rewriteHostHeader;
    }
    if (this._serverNode !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverNode = this._serverNode;
    }
    if (this._static !== undefined) {
      hasAnyValues = true;
      internalValueResult.static = this._static;
    }
    if (this._verifyNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifyNetwork = this._verifyNetwork;
    }
    if (this._vmRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmRef = this._vmRef;
    }
    if (this._discoveredNetworks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.discoveredNetworks = this._discoveredNetworks?.internalValue;
    }
    if (this._ip?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip?.internalValue;
    }
    if (this._location?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location?.internalValue;
    }
    if (this._srvRdata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.srvRdata = this._srvRdata?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PoolServers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoscalingGroupName = undefined;
      this._availabilityZone = undefined;
      this._description = undefined;
      this._enabled = undefined;
      this._externalOrchestrationId = undefined;
      this._externalUuid = undefined;
      this._healthMonitorRefs = undefined;
      this._hostname = undefined;
      this._macAddress = undefined;
      this._nwRef = undefined;
      this._port = undefined;
      this._preferenceOrder = undefined;
      this._prstHdrVal = undefined;
      this._ratio = undefined;
      this._resolveServerByDns = undefined;
      this._rewriteHostHeader = undefined;
      this._serverNode = undefined;
      this._static = undefined;
      this._verifyNetwork = undefined;
      this._vmRef = undefined;
      this._discoveredNetworks.internalValue = undefined;
      this._ip.internalValue = undefined;
      this._location.internalValue = undefined;
      this._srvRdata.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoscalingGroupName = value.autoscalingGroupName;
      this._availabilityZone = value.availabilityZone;
      this._description = value.description;
      this._enabled = value.enabled;
      this._externalOrchestrationId = value.externalOrchestrationId;
      this._externalUuid = value.externalUuid;
      this._healthMonitorRefs = value.healthMonitorRefs;
      this._hostname = value.hostname;
      this._macAddress = value.macAddress;
      this._nwRef = value.nwRef;
      this._port = value.port;
      this._preferenceOrder = value.preferenceOrder;
      this._prstHdrVal = value.prstHdrVal;
      this._ratio = value.ratio;
      this._resolveServerByDns = value.resolveServerByDns;
      this._rewriteHostHeader = value.rewriteHostHeader;
      this._serverNode = value.serverNode;
      this._static = value.static;
      this._verifyNetwork = value.verifyNetwork;
      this._vmRef = value.vmRef;
      this._discoveredNetworks.internalValue = value.discoveredNetworks;
      this._ip.internalValue = value.ip;
      this._location.internalValue = value.location;
      this._srvRdata.internalValue = value.srvRdata;
    }
  }

  // autoscaling_group_name - computed: true, optional: true, required: false
  private _autoscalingGroupName?: string; 
  public get autoscalingGroupName() {
    return this.getStringAttribute('autoscaling_group_name');
  }
  public set autoscalingGroupName(value: string) {
    this._autoscalingGroupName = value;
  }
  public resetAutoscalingGroupName() {
    this._autoscalingGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscalingGroupNameInput() {
    return this._autoscalingGroupName;
  }

  // availability_zone - computed: true, optional: true, required: false
  private _availabilityZone?: string; 
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }
  public set availabilityZone(value: string) {
    this._availabilityZone = value;
  }
  public resetAvailabilityZone() {
    this._availabilityZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneInput() {
    return this._availabilityZone;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: string; 
  public get enabled() {
    return this.getStringAttribute('enabled');
  }
  public set enabled(value: string) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // external_orchestration_id - computed: true, optional: true, required: false
  private _externalOrchestrationId?: string; 
  public get externalOrchestrationId() {
    return this.getStringAttribute('external_orchestration_id');
  }
  public set externalOrchestrationId(value: string) {
    this._externalOrchestrationId = value;
  }
  public resetExternalOrchestrationId() {
    this._externalOrchestrationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalOrchestrationIdInput() {
    return this._externalOrchestrationId;
  }

  // external_uuid - computed: true, optional: true, required: false
  private _externalUuid?: string; 
  public get externalUuid() {
    return this.getStringAttribute('external_uuid');
  }
  public set externalUuid(value: string) {
    this._externalUuid = value;
  }
  public resetExternalUuid() {
    this._externalUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalUuidInput() {
    return this._externalUuid;
  }

  // health_monitor_refs - computed: false, optional: true, required: false
  private _healthMonitorRefs?: string[]; 
  public get healthMonitorRefs() {
    return this.getListAttribute('health_monitor_refs');
  }
  public set healthMonitorRefs(value: string[]) {
    this._healthMonitorRefs = value;
  }
  public resetHealthMonitorRefs() {
    this._healthMonitorRefs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthMonitorRefsInput() {
    return this._healthMonitorRefs;
  }

  // hostname - computed: true, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // mac_address - computed: true, optional: true, required: false
  private _macAddress?: string; 
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }
  public set macAddress(value: string) {
    this._macAddress = value;
  }
  public resetMacAddress() {
    this._macAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macAddressInput() {
    return this._macAddress;
  }

  // nw_ref - computed: true, optional: true, required: false
  private _nwRef?: string; 
  public get nwRef() {
    return this.getStringAttribute('nw_ref');
  }
  public set nwRef(value: string) {
    this._nwRef = value;
  }
  public resetNwRef() {
    this._nwRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nwRefInput() {
    return this._nwRef;
  }

  // port - computed: true, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // preference_order - computed: true, optional: true, required: false
  private _preferenceOrder?: string; 
  public get preferenceOrder() {
    return this.getStringAttribute('preference_order');
  }
  public set preferenceOrder(value: string) {
    this._preferenceOrder = value;
  }
  public resetPreferenceOrder() {
    this._preferenceOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferenceOrderInput() {
    return this._preferenceOrder;
  }

  // prst_hdr_val - computed: true, optional: true, required: false
  private _prstHdrVal?: string; 
  public get prstHdrVal() {
    return this.getStringAttribute('prst_hdr_val');
  }
  public set prstHdrVal(value: string) {
    this._prstHdrVal = value;
  }
  public resetPrstHdrVal() {
    this._prstHdrVal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prstHdrValInput() {
    return this._prstHdrVal;
  }

  // ratio - computed: false, optional: true, required: false
  private _ratio?: string; 
  public get ratio() {
    return this.getStringAttribute('ratio');
  }
  public set ratio(value: string) {
    this._ratio = value;
  }
  public resetRatio() {
    this._ratio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ratioInput() {
    return this._ratio;
  }

  // resolve_server_by_dns - computed: false, optional: true, required: false
  private _resolveServerByDns?: string; 
  public get resolveServerByDns() {
    return this.getStringAttribute('resolve_server_by_dns');
  }
  public set resolveServerByDns(value: string) {
    this._resolveServerByDns = value;
  }
  public resetResolveServerByDns() {
    this._resolveServerByDns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resolveServerByDnsInput() {
    return this._resolveServerByDns;
  }

  // rewrite_host_header - computed: false, optional: true, required: false
  private _rewriteHostHeader?: string; 
  public get rewriteHostHeader() {
    return this.getStringAttribute('rewrite_host_header');
  }
  public set rewriteHostHeader(value: string) {
    this._rewriteHostHeader = value;
  }
  public resetRewriteHostHeader() {
    this._rewriteHostHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rewriteHostHeaderInput() {
    return this._rewriteHostHeader;
  }

  // server_node - computed: true, optional: true, required: false
  private _serverNode?: string; 
  public get serverNode() {
    return this.getStringAttribute('server_node');
  }
  public set serverNode(value: string) {
    this._serverNode = value;
  }
  public resetServerNode() {
    this._serverNode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverNodeInput() {
    return this._serverNode;
  }

  // static - computed: false, optional: true, required: false
  private _static?: string; 
  public get static() {
    return this.getStringAttribute('static');
  }
  public set static(value: string) {
    this._static = value;
  }
  public resetStatic() {
    this._static = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticInput() {
    return this._static;
  }

  // verify_network - computed: false, optional: true, required: false
  private _verifyNetwork?: string; 
  public get verifyNetwork() {
    return this.getStringAttribute('verify_network');
  }
  public set verifyNetwork(value: string) {
    this._verifyNetwork = value;
  }
  public resetVerifyNetwork() {
    this._verifyNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyNetworkInput() {
    return this._verifyNetwork;
  }

  // vm_ref - computed: true, optional: true, required: false
  private _vmRef?: string; 
  public get vmRef() {
    return this.getStringAttribute('vm_ref');
  }
  public set vmRef(value: string) {
    this._vmRef = value;
  }
  public resetVmRef() {
    this._vmRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmRefInput() {
    return this._vmRef;
  }

  // discovered_networks - computed: false, optional: true, required: false
  private _discoveredNetworks = new PoolServersDiscoveredNetworksList(this, "discovered_networks", false);
  public get discoveredNetworks() {
    return this._discoveredNetworks;
  }
  public putDiscoveredNetworks(value: PoolServersDiscoveredNetworks[] | cdktf.IResolvable) {
    this._discoveredNetworks.internalValue = value;
  }
  public resetDiscoveredNetworks() {
    this._discoveredNetworks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoveredNetworksInput() {
    return this._discoveredNetworks.internalValue;
  }

  // ip - computed: false, optional: false, required: true
  private _ip = new PoolServersIpList(this, "ip", true);
  public get ip() {
    return this._ip;
  }
  public putIp(value: PoolServersIp[] | cdktf.IResolvable) {
    this._ip.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip.internalValue;
  }

  // location - computed: false, optional: true, required: false
  private _location = new PoolServersLocationList(this, "location", true);
  public get location() {
    return this._location;
  }
  public putLocation(value: PoolServersLocation[] | cdktf.IResolvable) {
    this._location.internalValue = value;
  }
  public resetLocation() {
    this._location.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location.internalValue;
  }

  // srv_rdata - computed: false, optional: true, required: false
  private _srvRdata = new PoolServersSrvRdataList(this, "srv_rdata", true);
  public get srvRdata() {
    return this._srvRdata;
  }
  public putSrvRdata(value: PoolServersSrvRdata[] | cdktf.IResolvable) {
    this._srvRdata.internalValue = value;
  }
  public resetSrvRdata() {
    this._srvRdata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srvRdataInput() {
    return this._srvRdata.internalValue;
  }
}

export class PoolServersList extends cdktf.ComplexList {
  public internalValue? : PoolServers[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): PoolServersOutputReference {
    return new PoolServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PoolSpGsInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#fqdns Pool#fqdns}
  */
  readonly fqdns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#gs_ref Pool#gs_ref}
  */
  readonly gsRef?: string;
}

export function poolSpGsInfoToTerraform(struct?: PoolSpGsInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fqdns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fqdns),
    gs_ref: cdktf.stringToTerraform(struct!.gsRef),
  }
}


export function poolSpGsInfoToHclTerraform(struct?: PoolSpGsInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fqdns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.fqdns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    gs_ref: {
      value: cdktf.stringToHclTerraform(struct!.gsRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PoolSpGsInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): PoolSpGsInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fqdns !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdns = this._fqdns;
    }
    if (this._gsRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.gsRef = this._gsRef;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PoolSpGsInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fqdns = undefined;
      this._gsRef = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fqdns = value.fqdns;
      this._gsRef = value.gsRef;
    }
  }

  // fqdns - computed: false, optional: true, required: false
  private _fqdns?: string[]; 
  public get fqdns() {
    return this.getListAttribute('fqdns');
  }
  public set fqdns(value: string[]) {
    this._fqdns = value;
  }
  public resetFqdns() {
    this._fqdns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnsInput() {
    return this._fqdns;
  }

  // gs_ref - computed: true, optional: true, required: false
  private _gsRef?: string; 
  public get gsRef() {
    return this.getStringAttribute('gs_ref');
  }
  public set gsRef(value: string) {
    this._gsRef = value;
  }
  public resetGsRef() {
    this._gsRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gsRefInput() {
    return this._gsRef;
  }
}

export class PoolSpGsInfoList extends cdktf.ComplexList {
  public internalValue? : PoolSpGsInfo[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): PoolSpGsInfoOutputReference {
    return new PoolSpGsInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool avi_pool}
*/
export class Pool extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "avi_pool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Pool resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Pool to import
  * @param importFromId The id of the existing Pool that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Pool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "avi_pool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/pool avi_pool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PoolConfig
  */
  public constructor(scope: Construct, id: string, config: PoolConfig) {
    super(scope, id, {
      terraformResourceType: 'avi_pool',
      terraformGeneratorMetadata: {
        providerName: 'avi',
        providerVersion: '31.1.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._analyticsProfileRef = config.analyticsProfileRef;
    this._appendPort = config.appendPort;
    this._applicationPersistenceProfileRef = config.applicationPersistenceProfileRef;
    this._autoscaleLaunchConfigRef = config.autoscaleLaunchConfigRef;
    this._autoscaleNetworks = config.autoscaleNetworks;
    this._autoscalePolicyRef = config.autoscalePolicyRef;
    this._capacityEstimation = config.capacityEstimation;
    this._capacityEstimationTtfbThresh = config.capacityEstimationTtfbThresh;
    this._cloudConfigCksum = config.cloudConfigCksum;
    this._cloudRef = config.cloudRef;
    this._connectionRampDuration = config.connectionRampDuration;
    this._createdBy = config.createdBy;
    this._defaultServerPort = config.defaultServerPort;
    this._deleteServerOnDnsRefresh = config.deleteServerOnDnsRefresh;
    this._description = config.description;
    this._domainName = config.domainName;
    this._eastWest = config.eastWest;
    this._enableHttp2 = config.enableHttp2;
    this._enabled = config.enabled;
    this._externalAutoscaleGroups = config.externalAutoscaleGroups;
    this._fewestTasksFeedbackDelay = config.fewestTasksFeedbackDelay;
    this._gracefulDisableTimeout = config.gracefulDisableTimeout;
    this._gracefulHmDownDisableTimeout = config.gracefulHmDownDisableTimeout;
    this._gslbSpEnabled = config.gslbSpEnabled;
    this._healthMonitorRefs = config.healthMonitorRefs;
    this._hostCheckEnabled = config.hostCheckEnabled;
    this._id = config.id;
    this._ignoreServerPort = config.ignoreServerPort;
    this._ignoreServers = config.ignoreServers;
    this._inlineHealthMonitor = config.inlineHealthMonitor;
    this._ipaddrgroupRef = config.ipaddrgroupRef;
    this._lbAlgoRrPerSe = config.lbAlgoRrPerSe;
    this._lbAlgorithm = config.lbAlgorithm;
    this._lbAlgorithmConsistentHashHdr = config.lbAlgorithmConsistentHashHdr;
    this._lbAlgorithmCoreNonaffinity = config.lbAlgorithmCoreNonaffinity;
    this._lbAlgorithmHash = config.lbAlgorithmHash;
    this._lookupServerByName = config.lookupServerByName;
    this._maxConcurrentConnectionsPerServer = config.maxConcurrentConnectionsPerServer;
    this._minHealthMonitorsUp = config.minHealthMonitorsUp;
    this._minServersUp = config.minServersUp;
    this._name = config.name;
    this._nsxSecuritygroup = config.nsxSecuritygroup;
    this._pkiProfileRef = config.pkiProfileRef;
    this._poolType = config.poolType;
    this._requestQueueDepth = config.requestQueueDepth;
    this._requestQueueEnabled = config.requestQueueEnabled;
    this._resolvePoolByDns = config.resolvePoolByDns;
    this._rewriteHostHeaderToServerName = config.rewriteHostHeaderToServerName;
    this._rewriteHostHeaderToSni = config.rewriteHostHeaderToSni;
    this._routingPool = config.routingPool;
    this._serverDisableType = config.serverDisableType;
    this._serverName = config.serverName;
    this._serverTimeout = config.serverTimeout;
    this._serviceMetadata = config.serviceMetadata;
    this._sniEnabled = config.sniEnabled;
    this._sslKeyAndCertificateRef = config.sslKeyAndCertificateRef;
    this._sslProfileRef = config.sslProfileRef;
    this._tenantRef = config.tenantRef;
    this._tier1Lr = config.tier1Lr;
    this._useServicePort = config.useServicePort;
    this._useServiceSslMode = config.useServiceSslMode;
    this._uuid = config.uuid;
    this._vrfRef = config.vrfRef;
    this._analyticsPolicy.internalValue = config.analyticsPolicy;
    this._configpbAttributes.internalValue = config.configpbAttributes;
    this._connPoolProperties.internalValue = config.connPoolProperties;
    this._failAction.internalValue = config.failAction;
    this._horizonProfile.internalValue = config.horizonProfile;
    this._http2Properties.internalValue = config.http2Properties;
    this._markers.internalValue = config.markers;
    this._maxConnRatePerServer.internalValue = config.maxConnRatePerServer;
    this._networks.internalValue = config.networks;
    this._placementNetworks.internalValue = config.placementNetworks;
    this._serverReselect.internalValue = config.serverReselect;
    this._servers.internalValue = config.servers;
    this._spGsInfo.internalValue = config.spGsInfo;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // analytics_profile_ref - computed: true, optional: true, required: false
  private _analyticsProfileRef?: string; 
  public get analyticsProfileRef() {
    return this.getStringAttribute('analytics_profile_ref');
  }
  public set analyticsProfileRef(value: string) {
    this._analyticsProfileRef = value;
  }
  public resetAnalyticsProfileRef() {
    this._analyticsProfileRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get analyticsProfileRefInput() {
    return this._analyticsProfileRef;
  }

  // append_port - computed: false, optional: true, required: false
  private _appendPort?: string; 
  public get appendPort() {
    return this.getStringAttribute('append_port');
  }
  public set appendPort(value: string) {
    this._appendPort = value;
  }
  public resetAppendPort() {
    this._appendPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appendPortInput() {
    return this._appendPort;
  }

  // application_persistence_profile_ref - computed: true, optional: true, required: false
  private _applicationPersistenceProfileRef?: string; 
  public get applicationPersistenceProfileRef() {
    return this.getStringAttribute('application_persistence_profile_ref');
  }
  public set applicationPersistenceProfileRef(value: string) {
    this._applicationPersistenceProfileRef = value;
  }
  public resetApplicationPersistenceProfileRef() {
    this._applicationPersistenceProfileRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationPersistenceProfileRefInput() {
    return this._applicationPersistenceProfileRef;
  }

  // autoscale_launch_config_ref - computed: true, optional: true, required: false
  private _autoscaleLaunchConfigRef?: string; 
  public get autoscaleLaunchConfigRef() {
    return this.getStringAttribute('autoscale_launch_config_ref');
  }
  public set autoscaleLaunchConfigRef(value: string) {
    this._autoscaleLaunchConfigRef = value;
  }
  public resetAutoscaleLaunchConfigRef() {
    this._autoscaleLaunchConfigRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscaleLaunchConfigRefInput() {
    return this._autoscaleLaunchConfigRef;
  }

  // autoscale_networks - computed: false, optional: true, required: false
  private _autoscaleNetworks?: string[]; 
  public get autoscaleNetworks() {
    return this.getListAttribute('autoscale_networks');
  }
  public set autoscaleNetworks(value: string[]) {
    this._autoscaleNetworks = value;
  }
  public resetAutoscaleNetworks() {
    this._autoscaleNetworks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscaleNetworksInput() {
    return this._autoscaleNetworks;
  }

  // autoscale_policy_ref - computed: true, optional: true, required: false
  private _autoscalePolicyRef?: string; 
  public get autoscalePolicyRef() {
    return this.getStringAttribute('autoscale_policy_ref');
  }
  public set autoscalePolicyRef(value: string) {
    this._autoscalePolicyRef = value;
  }
  public resetAutoscalePolicyRef() {
    this._autoscalePolicyRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscalePolicyRefInput() {
    return this._autoscalePolicyRef;
  }

  // capacity_estimation - computed: false, optional: true, required: false
  private _capacityEstimation?: string; 
  public get capacityEstimation() {
    return this.getStringAttribute('capacity_estimation');
  }
  public set capacityEstimation(value: string) {
    this._capacityEstimation = value;
  }
  public resetCapacityEstimation() {
    this._capacityEstimation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityEstimationInput() {
    return this._capacityEstimation;
  }

  // capacity_estimation_ttfb_thresh - computed: false, optional: true, required: false
  private _capacityEstimationTtfbThresh?: string; 
  public get capacityEstimationTtfbThresh() {
    return this.getStringAttribute('capacity_estimation_ttfb_thresh');
  }
  public set capacityEstimationTtfbThresh(value: string) {
    this._capacityEstimationTtfbThresh = value;
  }
  public resetCapacityEstimationTtfbThresh() {
    this._capacityEstimationTtfbThresh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityEstimationTtfbThreshInput() {
    return this._capacityEstimationTtfbThresh;
  }

  // cloud_config_cksum - computed: true, optional: true, required: false
  private _cloudConfigCksum?: string; 
  public get cloudConfigCksum() {
    return this.getStringAttribute('cloud_config_cksum');
  }
  public set cloudConfigCksum(value: string) {
    this._cloudConfigCksum = value;
  }
  public resetCloudConfigCksum() {
    this._cloudConfigCksum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudConfigCksumInput() {
    return this._cloudConfigCksum;
  }

  // cloud_ref - computed: true, optional: true, required: false
  private _cloudRef?: string; 
  public get cloudRef() {
    return this.getStringAttribute('cloud_ref');
  }
  public set cloudRef(value: string) {
    this._cloudRef = value;
  }
  public resetCloudRef() {
    this._cloudRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudRefInput() {
    return this._cloudRef;
  }

  // connection_ramp_duration - computed: false, optional: true, required: false
  private _connectionRampDuration?: string; 
  public get connectionRampDuration() {
    return this.getStringAttribute('connection_ramp_duration');
  }
  public set connectionRampDuration(value: string) {
    this._connectionRampDuration = value;
  }
  public resetConnectionRampDuration() {
    this._connectionRampDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionRampDurationInput() {
    return this._connectionRampDuration;
  }

  // created_by - computed: true, optional: true, required: false
  private _createdBy?: string; 
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }
  public set createdBy(value: string) {
    this._createdBy = value;
  }
  public resetCreatedBy() {
    this._createdBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdByInput() {
    return this._createdBy;
  }

  // default_server_port - computed: false, optional: true, required: false
  private _defaultServerPort?: string; 
  public get defaultServerPort() {
    return this.getStringAttribute('default_server_port');
  }
  public set defaultServerPort(value: string) {
    this._defaultServerPort = value;
  }
  public resetDefaultServerPort() {
    this._defaultServerPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultServerPortInput() {
    return this._defaultServerPort;
  }

  // delete_server_on_dns_refresh - computed: false, optional: true, required: false
  private _deleteServerOnDnsRefresh?: string; 
  public get deleteServerOnDnsRefresh() {
    return this.getStringAttribute('delete_server_on_dns_refresh');
  }
  public set deleteServerOnDnsRefresh(value: string) {
    this._deleteServerOnDnsRefresh = value;
  }
  public resetDeleteServerOnDnsRefresh() {
    this._deleteServerOnDnsRefresh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteServerOnDnsRefreshInput() {
    return this._deleteServerOnDnsRefresh;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // domain_name - computed: false, optional: true, required: false
  private _domainName?: string[]; 
  public get domainName() {
    return this.getListAttribute('domain_name');
  }
  public set domainName(value: string[]) {
    this._domainName = value;
  }
  public resetDomainName() {
    this._domainName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
  }

  // east_west - computed: true, optional: true, required: false
  private _eastWest?: string; 
  public get eastWest() {
    return this.getStringAttribute('east_west');
  }
  public set eastWest(value: string) {
    this._eastWest = value;
  }
  public resetEastWest() {
    this._eastWest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eastWestInput() {
    return this._eastWest;
  }

  // enable_http2 - computed: false, optional: true, required: false
  private _enableHttp2?: string; 
  public get enableHttp2() {
    return this.getStringAttribute('enable_http2');
  }
  public set enableHttp2(value: string) {
    this._enableHttp2 = value;
  }
  public resetEnableHttp2() {
    this._enableHttp2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableHttp2Input() {
    return this._enableHttp2;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: string; 
  public get enabled() {
    return this.getStringAttribute('enabled');
  }
  public set enabled(value: string) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // external_autoscale_groups - computed: false, optional: true, required: false
  private _externalAutoscaleGroups?: string[]; 
  public get externalAutoscaleGroups() {
    return this.getListAttribute('external_autoscale_groups');
  }
  public set externalAutoscaleGroups(value: string[]) {
    this._externalAutoscaleGroups = value;
  }
  public resetExternalAutoscaleGroups() {
    this._externalAutoscaleGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalAutoscaleGroupsInput() {
    return this._externalAutoscaleGroups;
  }

  // fewest_tasks_feedback_delay - computed: false, optional: true, required: false
  private _fewestTasksFeedbackDelay?: string; 
  public get fewestTasksFeedbackDelay() {
    return this.getStringAttribute('fewest_tasks_feedback_delay');
  }
  public set fewestTasksFeedbackDelay(value: string) {
    this._fewestTasksFeedbackDelay = value;
  }
  public resetFewestTasksFeedbackDelay() {
    this._fewestTasksFeedbackDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fewestTasksFeedbackDelayInput() {
    return this._fewestTasksFeedbackDelay;
  }

  // graceful_disable_timeout - computed: false, optional: true, required: false
  private _gracefulDisableTimeout?: string; 
  public get gracefulDisableTimeout() {
    return this.getStringAttribute('graceful_disable_timeout');
  }
  public set gracefulDisableTimeout(value: string) {
    this._gracefulDisableTimeout = value;
  }
  public resetGracefulDisableTimeout() {
    this._gracefulDisableTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gracefulDisableTimeoutInput() {
    return this._gracefulDisableTimeout;
  }

  // graceful_hm_down_disable_timeout - computed: false, optional: true, required: false
  private _gracefulHmDownDisableTimeout?: string; 
  public get gracefulHmDownDisableTimeout() {
    return this.getStringAttribute('graceful_hm_down_disable_timeout');
  }
  public set gracefulHmDownDisableTimeout(value: string) {
    this._gracefulHmDownDisableTimeout = value;
  }
  public resetGracefulHmDownDisableTimeout() {
    this._gracefulHmDownDisableTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gracefulHmDownDisableTimeoutInput() {
    return this._gracefulHmDownDisableTimeout;
  }

  // gslb_sp_enabled - computed: true, optional: true, required: false
  private _gslbSpEnabled?: string; 
  public get gslbSpEnabled() {
    return this.getStringAttribute('gslb_sp_enabled');
  }
  public set gslbSpEnabled(value: string) {
    this._gslbSpEnabled = value;
  }
  public resetGslbSpEnabled() {
    this._gslbSpEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbSpEnabledInput() {
    return this._gslbSpEnabled;
  }

  // health_monitor_refs - computed: false, optional: true, required: false
  private _healthMonitorRefs?: string[]; 
  public get healthMonitorRefs() {
    return this.getListAttribute('health_monitor_refs');
  }
  public set healthMonitorRefs(value: string[]) {
    this._healthMonitorRefs = value;
  }
  public resetHealthMonitorRefs() {
    this._healthMonitorRefs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthMonitorRefsInput() {
    return this._healthMonitorRefs;
  }

  // host_check_enabled - computed: false, optional: true, required: false
  private _hostCheckEnabled?: string; 
  public get hostCheckEnabled() {
    return this.getStringAttribute('host_check_enabled');
  }
  public set hostCheckEnabled(value: string) {
    this._hostCheckEnabled = value;
  }
  public resetHostCheckEnabled() {
    this._hostCheckEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostCheckEnabledInput() {
    return this._hostCheckEnabled;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // ignore_server_port - computed: false, optional: true, required: false
  private _ignoreServerPort?: string; 
  public get ignoreServerPort() {
    return this.getStringAttribute('ignore_server_port');
  }
  public set ignoreServerPort(value: string) {
    this._ignoreServerPort = value;
  }
  public resetIgnoreServerPort() {
    this._ignoreServerPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreServerPortInput() {
    return this._ignoreServerPort;
  }

  // ignore_servers - computed: false, optional: true, required: false
  private _ignoreServers?: boolean | cdktf.IResolvable; 
  public get ignoreServers() {
    return this.getBooleanAttribute('ignore_servers');
  }
  public set ignoreServers(value: boolean | cdktf.IResolvable) {
    this._ignoreServers = value;
  }
  public resetIgnoreServers() {
    this._ignoreServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreServersInput() {
    return this._ignoreServers;
  }

  // inline_health_monitor - computed: false, optional: true, required: false
  private _inlineHealthMonitor?: string; 
  public get inlineHealthMonitor() {
    return this.getStringAttribute('inline_health_monitor');
  }
  public set inlineHealthMonitor(value: string) {
    this._inlineHealthMonitor = value;
  }
  public resetInlineHealthMonitor() {
    this._inlineHealthMonitor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inlineHealthMonitorInput() {
    return this._inlineHealthMonitor;
  }

  // ipaddrgroup_ref - computed: true, optional: true, required: false
  private _ipaddrgroupRef?: string; 
  public get ipaddrgroupRef() {
    return this.getStringAttribute('ipaddrgroup_ref');
  }
  public set ipaddrgroupRef(value: string) {
    this._ipaddrgroupRef = value;
  }
  public resetIpaddrgroupRef() {
    this._ipaddrgroupRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipaddrgroupRefInput() {
    return this._ipaddrgroupRef;
  }

  // lb_algo_rr_per_se - computed: false, optional: true, required: false
  private _lbAlgoRrPerSe?: string; 
  public get lbAlgoRrPerSe() {
    return this.getStringAttribute('lb_algo_rr_per_se');
  }
  public set lbAlgoRrPerSe(value: string) {
    this._lbAlgoRrPerSe = value;
  }
  public resetLbAlgoRrPerSe() {
    this._lbAlgoRrPerSe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lbAlgoRrPerSeInput() {
    return this._lbAlgoRrPerSe;
  }

  // lb_algorithm - computed: false, optional: true, required: false
  private _lbAlgorithm?: string; 
  public get lbAlgorithm() {
    return this.getStringAttribute('lb_algorithm');
  }
  public set lbAlgorithm(value: string) {
    this._lbAlgorithm = value;
  }
  public resetLbAlgorithm() {
    this._lbAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lbAlgorithmInput() {
    return this._lbAlgorithm;
  }

  // lb_algorithm_consistent_hash_hdr - computed: true, optional: true, required: false
  private _lbAlgorithmConsistentHashHdr?: string; 
  public get lbAlgorithmConsistentHashHdr() {
    return this.getStringAttribute('lb_algorithm_consistent_hash_hdr');
  }
  public set lbAlgorithmConsistentHashHdr(value: string) {
    this._lbAlgorithmConsistentHashHdr = value;
  }
  public resetLbAlgorithmConsistentHashHdr() {
    this._lbAlgorithmConsistentHashHdr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lbAlgorithmConsistentHashHdrInput() {
    return this._lbAlgorithmConsistentHashHdr;
  }

  // lb_algorithm_core_nonaffinity - computed: false, optional: true, required: false
  private _lbAlgorithmCoreNonaffinity?: string; 
  public get lbAlgorithmCoreNonaffinity() {
    return this.getStringAttribute('lb_algorithm_core_nonaffinity');
  }
  public set lbAlgorithmCoreNonaffinity(value: string) {
    this._lbAlgorithmCoreNonaffinity = value;
  }
  public resetLbAlgorithmCoreNonaffinity() {
    this._lbAlgorithmCoreNonaffinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lbAlgorithmCoreNonaffinityInput() {
    return this._lbAlgorithmCoreNonaffinity;
  }

  // lb_algorithm_hash - computed: false, optional: true, required: false
  private _lbAlgorithmHash?: string; 
  public get lbAlgorithmHash() {
    return this.getStringAttribute('lb_algorithm_hash');
  }
  public set lbAlgorithmHash(value: string) {
    this._lbAlgorithmHash = value;
  }
  public resetLbAlgorithmHash() {
    this._lbAlgorithmHash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lbAlgorithmHashInput() {
    return this._lbAlgorithmHash;
  }

  // lookup_server_by_name - computed: false, optional: true, required: false
  private _lookupServerByName?: string; 
  public get lookupServerByName() {
    return this.getStringAttribute('lookup_server_by_name');
  }
  public set lookupServerByName(value: string) {
    this._lookupServerByName = value;
  }
  public resetLookupServerByName() {
    this._lookupServerByName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lookupServerByNameInput() {
    return this._lookupServerByName;
  }

  // max_concurrent_connections_per_server - computed: false, optional: true, required: false
  private _maxConcurrentConnectionsPerServer?: string; 
  public get maxConcurrentConnectionsPerServer() {
    return this.getStringAttribute('max_concurrent_connections_per_server');
  }
  public set maxConcurrentConnectionsPerServer(value: string) {
    this._maxConcurrentConnectionsPerServer = value;
  }
  public resetMaxConcurrentConnectionsPerServer() {
    this._maxConcurrentConnectionsPerServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConcurrentConnectionsPerServerInput() {
    return this._maxConcurrentConnectionsPerServer;
  }

  // min_health_monitors_up - computed: true, optional: true, required: false
  private _minHealthMonitorsUp?: string; 
  public get minHealthMonitorsUp() {
    return this.getStringAttribute('min_health_monitors_up');
  }
  public set minHealthMonitorsUp(value: string) {
    this._minHealthMonitorsUp = value;
  }
  public resetMinHealthMonitorsUp() {
    this._minHealthMonitorsUp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minHealthMonitorsUpInput() {
    return this._minHealthMonitorsUp;
  }

  // min_servers_up - computed: true, optional: true, required: false
  private _minServersUp?: string; 
  public get minServersUp() {
    return this.getStringAttribute('min_servers_up');
  }
  public set minServersUp(value: string) {
    this._minServersUp = value;
  }
  public resetMinServersUp() {
    this._minServersUp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minServersUpInput() {
    return this._minServersUp;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // nsx_securitygroup - computed: false, optional: true, required: false
  private _nsxSecuritygroup?: string[]; 
  public get nsxSecuritygroup() {
    return this.getListAttribute('nsx_securitygroup');
  }
  public set nsxSecuritygroup(value: string[]) {
    this._nsxSecuritygroup = value;
  }
  public resetNsxSecuritygroup() {
    this._nsxSecuritygroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsxSecuritygroupInput() {
    return this._nsxSecuritygroup;
  }

  // pki_profile_ref - computed: true, optional: true, required: false
  private _pkiProfileRef?: string; 
  public get pkiProfileRef() {
    return this.getStringAttribute('pki_profile_ref');
  }
  public set pkiProfileRef(value: string) {
    this._pkiProfileRef = value;
  }
  public resetPkiProfileRef() {
    this._pkiProfileRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pkiProfileRefInput() {
    return this._pkiProfileRef;
  }

  // pool_type - computed: false, optional: true, required: false
  private _poolType?: string; 
  public get poolType() {
    return this.getStringAttribute('pool_type');
  }
  public set poolType(value: string) {
    this._poolType = value;
  }
  public resetPoolType() {
    this._poolType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolTypeInput() {
    return this._poolType;
  }

  // request_queue_depth - computed: false, optional: true, required: false
  private _requestQueueDepth?: string; 
  public get requestQueueDepth() {
    return this.getStringAttribute('request_queue_depth');
  }
  public set requestQueueDepth(value: string) {
    this._requestQueueDepth = value;
  }
  public resetRequestQueueDepth() {
    this._requestQueueDepth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestQueueDepthInput() {
    return this._requestQueueDepth;
  }

  // request_queue_enabled - computed: false, optional: true, required: false
  private _requestQueueEnabled?: string; 
  public get requestQueueEnabled() {
    return this.getStringAttribute('request_queue_enabled');
  }
  public set requestQueueEnabled(value: string) {
    this._requestQueueEnabled = value;
  }
  public resetRequestQueueEnabled() {
    this._requestQueueEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestQueueEnabledInput() {
    return this._requestQueueEnabled;
  }

  // resolve_pool_by_dns - computed: true, optional: true, required: false
  private _resolvePoolByDns?: string; 
  public get resolvePoolByDns() {
    return this.getStringAttribute('resolve_pool_by_dns');
  }
  public set resolvePoolByDns(value: string) {
    this._resolvePoolByDns = value;
  }
  public resetResolvePoolByDns() {
    this._resolvePoolByDns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resolvePoolByDnsInput() {
    return this._resolvePoolByDns;
  }

  // rewrite_host_header_to_server_name - computed: false, optional: true, required: false
  private _rewriteHostHeaderToServerName?: string; 
  public get rewriteHostHeaderToServerName() {
    return this.getStringAttribute('rewrite_host_header_to_server_name');
  }
  public set rewriteHostHeaderToServerName(value: string) {
    this._rewriteHostHeaderToServerName = value;
  }
  public resetRewriteHostHeaderToServerName() {
    this._rewriteHostHeaderToServerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rewriteHostHeaderToServerNameInput() {
    return this._rewriteHostHeaderToServerName;
  }

  // rewrite_host_header_to_sni - computed: false, optional: true, required: false
  private _rewriteHostHeaderToSni?: string; 
  public get rewriteHostHeaderToSni() {
    return this.getStringAttribute('rewrite_host_header_to_sni');
  }
  public set rewriteHostHeaderToSni(value: string) {
    this._rewriteHostHeaderToSni = value;
  }
  public resetRewriteHostHeaderToSni() {
    this._rewriteHostHeaderToSni = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rewriteHostHeaderToSniInput() {
    return this._rewriteHostHeaderToSni;
  }

  // routing_pool - computed: false, optional: true, required: false
  private _routingPool?: string; 
  public get routingPool() {
    return this.getStringAttribute('routing_pool');
  }
  public set routingPool(value: string) {
    this._routingPool = value;
  }
  public resetRoutingPool() {
    this._routingPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingPoolInput() {
    return this._routingPool;
  }

  // server_disable_type - computed: false, optional: true, required: false
  private _serverDisableType?: string; 
  public get serverDisableType() {
    return this.getStringAttribute('server_disable_type');
  }
  public set serverDisableType(value: string) {
    this._serverDisableType = value;
  }
  public resetServerDisableType() {
    this._serverDisableType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverDisableTypeInput() {
    return this._serverDisableType;
  }

  // server_name - computed: true, optional: true, required: false
  private _serverName?: string; 
  public get serverName() {
    return this.getStringAttribute('server_name');
  }
  public set serverName(value: string) {
    this._serverName = value;
  }
  public resetServerName() {
    this._serverName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverNameInput() {
    return this._serverName;
  }

  // server_timeout - computed: false, optional: true, required: false
  private _serverTimeout?: string; 
  public get serverTimeout() {
    return this.getStringAttribute('server_timeout');
  }
  public set serverTimeout(value: string) {
    this._serverTimeout = value;
  }
  public resetServerTimeout() {
    this._serverTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverTimeoutInput() {
    return this._serverTimeout;
  }

  // service_metadata - computed: true, optional: true, required: false
  private _serviceMetadata?: string; 
  public get serviceMetadata() {
    return this.getStringAttribute('service_metadata');
  }
  public set serviceMetadata(value: string) {
    this._serviceMetadata = value;
  }
  public resetServiceMetadata() {
    this._serviceMetadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceMetadataInput() {
    return this._serviceMetadata;
  }

  // sni_enabled - computed: false, optional: true, required: false
  private _sniEnabled?: string; 
  public get sniEnabled() {
    return this.getStringAttribute('sni_enabled');
  }
  public set sniEnabled(value: string) {
    this._sniEnabled = value;
  }
  public resetSniEnabled() {
    this._sniEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sniEnabledInput() {
    return this._sniEnabled;
  }

  // ssl_key_and_certificate_ref - computed: true, optional: true, required: false
  private _sslKeyAndCertificateRef?: string; 
  public get sslKeyAndCertificateRef() {
    return this.getStringAttribute('ssl_key_and_certificate_ref');
  }
  public set sslKeyAndCertificateRef(value: string) {
    this._sslKeyAndCertificateRef = value;
  }
  public resetSslKeyAndCertificateRef() {
    this._sslKeyAndCertificateRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslKeyAndCertificateRefInput() {
    return this._sslKeyAndCertificateRef;
  }

  // ssl_profile_ref - computed: true, optional: true, required: false
  private _sslProfileRef?: string; 
  public get sslProfileRef() {
    return this.getStringAttribute('ssl_profile_ref');
  }
  public set sslProfileRef(value: string) {
    this._sslProfileRef = value;
  }
  public resetSslProfileRef() {
    this._sslProfileRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslProfileRefInput() {
    return this._sslProfileRef;
  }

  // tenant_ref - computed: true, optional: true, required: false
  private _tenantRef?: string; 
  public get tenantRef() {
    return this.getStringAttribute('tenant_ref');
  }
  public set tenantRef(value: string) {
    this._tenantRef = value;
  }
  public resetTenantRef() {
    this._tenantRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantRefInput() {
    return this._tenantRef;
  }

  // tier1_lr - computed: true, optional: true, required: false
  private _tier1Lr?: string; 
  public get tier1Lr() {
    return this.getStringAttribute('tier1_lr');
  }
  public set tier1Lr(value: string) {
    this._tier1Lr = value;
  }
  public resetTier1Lr() {
    this._tier1Lr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tier1LrInput() {
    return this._tier1Lr;
  }

  // use_service_port - computed: false, optional: true, required: false
  private _useServicePort?: string; 
  public get useServicePort() {
    return this.getStringAttribute('use_service_port');
  }
  public set useServicePort(value: string) {
    this._useServicePort = value;
  }
  public resetUseServicePort() {
    this._useServicePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useServicePortInput() {
    return this._useServicePort;
  }

  // use_service_ssl_mode - computed: false, optional: true, required: false
  private _useServiceSslMode?: string; 
  public get useServiceSslMode() {
    return this.getStringAttribute('use_service_ssl_mode');
  }
  public set useServiceSslMode(value: string) {
    this._useServiceSslMode = value;
  }
  public resetUseServiceSslMode() {
    this._useServiceSslMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useServiceSslModeInput() {
    return this._useServiceSslMode;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // vrf_ref - computed: true, optional: true, required: false
  private _vrfRef?: string; 
  public get vrfRef() {
    return this.getStringAttribute('vrf_ref');
  }
  public set vrfRef(value: string) {
    this._vrfRef = value;
  }
  public resetVrfRef() {
    this._vrfRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfRefInput() {
    return this._vrfRef;
  }

  // analytics_policy - computed: false, optional: true, required: false
  private _analyticsPolicy = new PoolAnalyticsPolicyList(this, "analytics_policy", true);
  public get analyticsPolicy() {
    return this._analyticsPolicy;
  }
  public putAnalyticsPolicy(value: PoolAnalyticsPolicy[] | cdktf.IResolvable) {
    this._analyticsPolicy.internalValue = value;
  }
  public resetAnalyticsPolicy() {
    this._analyticsPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get analyticsPolicyInput() {
    return this._analyticsPolicy.internalValue;
  }

  // configpb_attributes - computed: false, optional: true, required: false
  private _configpbAttributes = new PoolConfigpbAttributesList(this, "configpb_attributes", true);
  public get configpbAttributes() {
    return this._configpbAttributes;
  }
  public putConfigpbAttributes(value: PoolConfigpbAttributes[] | cdktf.IResolvable) {
    this._configpbAttributes.internalValue = value;
  }
  public resetConfigpbAttributes() {
    this._configpbAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configpbAttributesInput() {
    return this._configpbAttributes.internalValue;
  }

  // conn_pool_properties - computed: false, optional: true, required: false
  private _connPoolProperties = new PoolConnPoolPropertiesList(this, "conn_pool_properties", true);
  public get connPoolProperties() {
    return this._connPoolProperties;
  }
  public putConnPoolProperties(value: PoolConnPoolProperties[] | cdktf.IResolvable) {
    this._connPoolProperties.internalValue = value;
  }
  public resetConnPoolProperties() {
    this._connPoolProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connPoolPropertiesInput() {
    return this._connPoolProperties.internalValue;
  }

  // fail_action - computed: false, optional: true, required: false
  private _failAction = new PoolFailActionList(this, "fail_action", true);
  public get failAction() {
    return this._failAction;
  }
  public putFailAction(value: PoolFailAction[] | cdktf.IResolvable) {
    this._failAction.internalValue = value;
  }
  public resetFailAction() {
    this._failAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failActionInput() {
    return this._failAction.internalValue;
  }

  // horizon_profile - computed: false, optional: true, required: false
  private _horizonProfile = new PoolHorizonProfileList(this, "horizon_profile", true);
  public get horizonProfile() {
    return this._horizonProfile;
  }
  public putHorizonProfile(value: PoolHorizonProfile[] | cdktf.IResolvable) {
    this._horizonProfile.internalValue = value;
  }
  public resetHorizonProfile() {
    this._horizonProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get horizonProfileInput() {
    return this._horizonProfile.internalValue;
  }

  // http2_properties - computed: false, optional: true, required: false
  private _http2Properties = new PoolHttp2PropertiesList(this, "http2_properties", true);
  public get http2Properties() {
    return this._http2Properties;
  }
  public putHttp2Properties(value: PoolHttp2Properties[] | cdktf.IResolvable) {
    this._http2Properties.internalValue = value;
  }
  public resetHttp2Properties() {
    this._http2Properties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http2PropertiesInput() {
    return this._http2Properties.internalValue;
  }

  // markers - computed: false, optional: true, required: false
  private _markers = new PoolMarkersList(this, "markers", false);
  public get markers() {
    return this._markers;
  }
  public putMarkers(value: PoolMarkers[] | cdktf.IResolvable) {
    this._markers.internalValue = value;
  }
  public resetMarkers() {
    this._markers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get markersInput() {
    return this._markers.internalValue;
  }

  // max_conn_rate_per_server - computed: false, optional: true, required: false
  private _maxConnRatePerServer = new PoolMaxConnRatePerServerList(this, "max_conn_rate_per_server", true);
  public get maxConnRatePerServer() {
    return this._maxConnRatePerServer;
  }
  public putMaxConnRatePerServer(value: PoolMaxConnRatePerServer[] | cdktf.IResolvable) {
    this._maxConnRatePerServer.internalValue = value;
  }
  public resetMaxConnRatePerServer() {
    this._maxConnRatePerServer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConnRatePerServerInput() {
    return this._maxConnRatePerServer.internalValue;
  }

  // networks - computed: false, optional: true, required: false
  private _networks = new PoolNetworksList(this, "networks", false);
  public get networks() {
    return this._networks;
  }
  public putNetworks(value: PoolNetworks[] | cdktf.IResolvable) {
    this._networks.internalValue = value;
  }
  public resetNetworks() {
    this._networks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networksInput() {
    return this._networks.internalValue;
  }

  // placement_networks - computed: false, optional: true, required: false
  private _placementNetworks = new PoolPlacementNetworksList(this, "placement_networks", false);
  public get placementNetworks() {
    return this._placementNetworks;
  }
  public putPlacementNetworks(value: PoolPlacementNetworks[] | cdktf.IResolvable) {
    this._placementNetworks.internalValue = value;
  }
  public resetPlacementNetworks() {
    this._placementNetworks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placementNetworksInput() {
    return this._placementNetworks.internalValue;
  }

  // server_reselect - computed: false, optional: true, required: false
  private _serverReselect = new PoolServerReselectList(this, "server_reselect", true);
  public get serverReselect() {
    return this._serverReselect;
  }
  public putServerReselect(value: PoolServerReselect[] | cdktf.IResolvable) {
    this._serverReselect.internalValue = value;
  }
  public resetServerReselect() {
    this._serverReselect.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverReselectInput() {
    return this._serverReselect.internalValue;
  }

  // servers - computed: false, optional: true, required: false
  private _servers = new PoolServersList(this, "servers", false);
  public get servers() {
    return this._servers;
  }
  public putServers(value: PoolServers[] | cdktf.IResolvable) {
    this._servers.internalValue = value;
  }
  public resetServers() {
    this._servers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serversInput() {
    return this._servers.internalValue;
  }

  // sp_gs_info - computed: false, optional: true, required: false
  private _spGsInfo = new PoolSpGsInfoList(this, "sp_gs_info", true);
  public get spGsInfo() {
    return this._spGsInfo;
  }
  public putSpGsInfo(value: PoolSpGsInfo[] | cdktf.IResolvable) {
    this._spGsInfo.internalValue = value;
  }
  public resetSpGsInfo() {
    this._spGsInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spGsInfoInput() {
    return this._spGsInfo.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      analytics_profile_ref: cdktf.stringToTerraform(this._analyticsProfileRef),
      append_port: cdktf.stringToTerraform(this._appendPort),
      application_persistence_profile_ref: cdktf.stringToTerraform(this._applicationPersistenceProfileRef),
      autoscale_launch_config_ref: cdktf.stringToTerraform(this._autoscaleLaunchConfigRef),
      autoscale_networks: cdktf.listMapper(cdktf.stringToTerraform, false)(this._autoscaleNetworks),
      autoscale_policy_ref: cdktf.stringToTerraform(this._autoscalePolicyRef),
      capacity_estimation: cdktf.stringToTerraform(this._capacityEstimation),
      capacity_estimation_ttfb_thresh: cdktf.stringToTerraform(this._capacityEstimationTtfbThresh),
      cloud_config_cksum: cdktf.stringToTerraform(this._cloudConfigCksum),
      cloud_ref: cdktf.stringToTerraform(this._cloudRef),
      connection_ramp_duration: cdktf.stringToTerraform(this._connectionRampDuration),
      created_by: cdktf.stringToTerraform(this._createdBy),
      default_server_port: cdktf.stringToTerraform(this._defaultServerPort),
      delete_server_on_dns_refresh: cdktf.stringToTerraform(this._deleteServerOnDnsRefresh),
      description: cdktf.stringToTerraform(this._description),
      domain_name: cdktf.listMapper(cdktf.stringToTerraform, false)(this._domainName),
      east_west: cdktf.stringToTerraform(this._eastWest),
      enable_http2: cdktf.stringToTerraform(this._enableHttp2),
      enabled: cdktf.stringToTerraform(this._enabled),
      external_autoscale_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._externalAutoscaleGroups),
      fewest_tasks_feedback_delay: cdktf.stringToTerraform(this._fewestTasksFeedbackDelay),
      graceful_disable_timeout: cdktf.stringToTerraform(this._gracefulDisableTimeout),
      graceful_hm_down_disable_timeout: cdktf.stringToTerraform(this._gracefulHmDownDisableTimeout),
      gslb_sp_enabled: cdktf.stringToTerraform(this._gslbSpEnabled),
      health_monitor_refs: cdktf.listMapper(cdktf.stringToTerraform, false)(this._healthMonitorRefs),
      host_check_enabled: cdktf.stringToTerraform(this._hostCheckEnabled),
      id: cdktf.stringToTerraform(this._id),
      ignore_server_port: cdktf.stringToTerraform(this._ignoreServerPort),
      ignore_servers: cdktf.booleanToTerraform(this._ignoreServers),
      inline_health_monitor: cdktf.stringToTerraform(this._inlineHealthMonitor),
      ipaddrgroup_ref: cdktf.stringToTerraform(this._ipaddrgroupRef),
      lb_algo_rr_per_se: cdktf.stringToTerraform(this._lbAlgoRrPerSe),
      lb_algorithm: cdktf.stringToTerraform(this._lbAlgorithm),
      lb_algorithm_consistent_hash_hdr: cdktf.stringToTerraform(this._lbAlgorithmConsistentHashHdr),
      lb_algorithm_core_nonaffinity: cdktf.stringToTerraform(this._lbAlgorithmCoreNonaffinity),
      lb_algorithm_hash: cdktf.stringToTerraform(this._lbAlgorithmHash),
      lookup_server_by_name: cdktf.stringToTerraform(this._lookupServerByName),
      max_concurrent_connections_per_server: cdktf.stringToTerraform(this._maxConcurrentConnectionsPerServer),
      min_health_monitors_up: cdktf.stringToTerraform(this._minHealthMonitorsUp),
      min_servers_up: cdktf.stringToTerraform(this._minServersUp),
      name: cdktf.stringToTerraform(this._name),
      nsx_securitygroup: cdktf.listMapper(cdktf.stringToTerraform, false)(this._nsxSecuritygroup),
      pki_profile_ref: cdktf.stringToTerraform(this._pkiProfileRef),
      pool_type: cdktf.stringToTerraform(this._poolType),
      request_queue_depth: cdktf.stringToTerraform(this._requestQueueDepth),
      request_queue_enabled: cdktf.stringToTerraform(this._requestQueueEnabled),
      resolve_pool_by_dns: cdktf.stringToTerraform(this._resolvePoolByDns),
      rewrite_host_header_to_server_name: cdktf.stringToTerraform(this._rewriteHostHeaderToServerName),
      rewrite_host_header_to_sni: cdktf.stringToTerraform(this._rewriteHostHeaderToSni),
      routing_pool: cdktf.stringToTerraform(this._routingPool),
      server_disable_type: cdktf.stringToTerraform(this._serverDisableType),
      server_name: cdktf.stringToTerraform(this._serverName),
      server_timeout: cdktf.stringToTerraform(this._serverTimeout),
      service_metadata: cdktf.stringToTerraform(this._serviceMetadata),
      sni_enabled: cdktf.stringToTerraform(this._sniEnabled),
      ssl_key_and_certificate_ref: cdktf.stringToTerraform(this._sslKeyAndCertificateRef),
      ssl_profile_ref: cdktf.stringToTerraform(this._sslProfileRef),
      tenant_ref: cdktf.stringToTerraform(this._tenantRef),
      tier1_lr: cdktf.stringToTerraform(this._tier1Lr),
      use_service_port: cdktf.stringToTerraform(this._useServicePort),
      use_service_ssl_mode: cdktf.stringToTerraform(this._useServiceSslMode),
      uuid: cdktf.stringToTerraform(this._uuid),
      vrf_ref: cdktf.stringToTerraform(this._vrfRef),
      analytics_policy: cdktf.listMapper(poolAnalyticsPolicyToTerraform, true)(this._analyticsPolicy.internalValue),
      configpb_attributes: cdktf.listMapper(poolConfigpbAttributesToTerraform, true)(this._configpbAttributes.internalValue),
      conn_pool_properties: cdktf.listMapper(poolConnPoolPropertiesToTerraform, true)(this._connPoolProperties.internalValue),
      fail_action: cdktf.listMapper(poolFailActionToTerraform, true)(this._failAction.internalValue),
      horizon_profile: cdktf.listMapper(poolHorizonProfileToTerraform, true)(this._horizonProfile.internalValue),
      http2_properties: cdktf.listMapper(poolHttp2PropertiesToTerraform, true)(this._http2Properties.internalValue),
      markers: cdktf.listMapper(poolMarkersToTerraform, true)(this._markers.internalValue),
      max_conn_rate_per_server: cdktf.listMapper(poolMaxConnRatePerServerToTerraform, true)(this._maxConnRatePerServer.internalValue),
      networks: cdktf.listMapper(poolNetworksToTerraform, true)(this._networks.internalValue),
      placement_networks: cdktf.listMapper(poolPlacementNetworksToTerraform, true)(this._placementNetworks.internalValue),
      server_reselect: cdktf.listMapper(poolServerReselectToTerraform, true)(this._serverReselect.internalValue),
      servers: cdktf.listMapper(poolServersToTerraform, true)(this._servers.internalValue),
      sp_gs_info: cdktf.listMapper(poolSpGsInfoToTerraform, true)(this._spGsInfo.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      analytics_profile_ref: {
        value: cdktf.stringToHclTerraform(this._analyticsProfileRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      append_port: {
        value: cdktf.stringToHclTerraform(this._appendPort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      application_persistence_profile_ref: {
        value: cdktf.stringToHclTerraform(this._applicationPersistenceProfileRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      autoscale_launch_config_ref: {
        value: cdktf.stringToHclTerraform(this._autoscaleLaunchConfigRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      autoscale_networks: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._autoscaleNetworks),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      autoscale_policy_ref: {
        value: cdktf.stringToHclTerraform(this._autoscalePolicyRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      capacity_estimation: {
        value: cdktf.stringToHclTerraform(this._capacityEstimation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      capacity_estimation_ttfb_thresh: {
        value: cdktf.stringToHclTerraform(this._capacityEstimationTtfbThresh),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud_config_cksum: {
        value: cdktf.stringToHclTerraform(this._cloudConfigCksum),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud_ref: {
        value: cdktf.stringToHclTerraform(this._cloudRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connection_ramp_duration: {
        value: cdktf.stringToHclTerraform(this._connectionRampDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      created_by: {
        value: cdktf.stringToHclTerraform(this._createdBy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_server_port: {
        value: cdktf.stringToHclTerraform(this._defaultServerPort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delete_server_on_dns_refresh: {
        value: cdktf.stringToHclTerraform(this._deleteServerOnDnsRefresh),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_name: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._domainName),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      east_west: {
        value: cdktf.stringToHclTerraform(this._eastWest),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_http2: {
        value: cdktf.stringToHclTerraform(this._enableHttp2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.stringToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external_autoscale_groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._externalAutoscaleGroups),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      fewest_tasks_feedback_delay: {
        value: cdktf.stringToHclTerraform(this._fewestTasksFeedbackDelay),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      graceful_disable_timeout: {
        value: cdktf.stringToHclTerraform(this._gracefulDisableTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      graceful_hm_down_disable_timeout: {
        value: cdktf.stringToHclTerraform(this._gracefulHmDownDisableTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gslb_sp_enabled: {
        value: cdktf.stringToHclTerraform(this._gslbSpEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      health_monitor_refs: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._healthMonitorRefs),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      host_check_enabled: {
        value: cdktf.stringToHclTerraform(this._hostCheckEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ignore_server_port: {
        value: cdktf.stringToHclTerraform(this._ignoreServerPort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ignore_servers: {
        value: cdktf.booleanToHclTerraform(this._ignoreServers),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      inline_health_monitor: {
        value: cdktf.stringToHclTerraform(this._inlineHealthMonitor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipaddrgroup_ref: {
        value: cdktf.stringToHclTerraform(this._ipaddrgroupRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lb_algo_rr_per_se: {
        value: cdktf.stringToHclTerraform(this._lbAlgoRrPerSe),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lb_algorithm: {
        value: cdktf.stringToHclTerraform(this._lbAlgorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lb_algorithm_consistent_hash_hdr: {
        value: cdktf.stringToHclTerraform(this._lbAlgorithmConsistentHashHdr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lb_algorithm_core_nonaffinity: {
        value: cdktf.stringToHclTerraform(this._lbAlgorithmCoreNonaffinity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lb_algorithm_hash: {
        value: cdktf.stringToHclTerraform(this._lbAlgorithmHash),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lookup_server_by_name: {
        value: cdktf.stringToHclTerraform(this._lookupServerByName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_concurrent_connections_per_server: {
        value: cdktf.stringToHclTerraform(this._maxConcurrentConnectionsPerServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      min_health_monitors_up: {
        value: cdktf.stringToHclTerraform(this._minHealthMonitorsUp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      min_servers_up: {
        value: cdktf.stringToHclTerraform(this._minServersUp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nsx_securitygroup: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._nsxSecuritygroup),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      pki_profile_ref: {
        value: cdktf.stringToHclTerraform(this._pkiProfileRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pool_type: {
        value: cdktf.stringToHclTerraform(this._poolType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      request_queue_depth: {
        value: cdktf.stringToHclTerraform(this._requestQueueDepth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      request_queue_enabled: {
        value: cdktf.stringToHclTerraform(this._requestQueueEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resolve_pool_by_dns: {
        value: cdktf.stringToHclTerraform(this._resolvePoolByDns),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rewrite_host_header_to_server_name: {
        value: cdktf.stringToHclTerraform(this._rewriteHostHeaderToServerName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rewrite_host_header_to_sni: {
        value: cdktf.stringToHclTerraform(this._rewriteHostHeaderToSni),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      routing_pool: {
        value: cdktf.stringToHclTerraform(this._routingPool),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_disable_type: {
        value: cdktf.stringToHclTerraform(this._serverDisableType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_name: {
        value: cdktf.stringToHclTerraform(this._serverName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_timeout: {
        value: cdktf.stringToHclTerraform(this._serverTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_metadata: {
        value: cdktf.stringToHclTerraform(this._serviceMetadata),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sni_enabled: {
        value: cdktf.stringToHclTerraform(this._sniEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_key_and_certificate_ref: {
        value: cdktf.stringToHclTerraform(this._sslKeyAndCertificateRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_profile_ref: {
        value: cdktf.stringToHclTerraform(this._sslProfileRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_ref: {
        value: cdktf.stringToHclTerraform(this._tenantRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tier1_lr: {
        value: cdktf.stringToHclTerraform(this._tier1Lr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_service_port: {
        value: cdktf.stringToHclTerraform(this._useServicePort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_service_ssl_mode: {
        value: cdktf.stringToHclTerraform(this._useServiceSslMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vrf_ref: {
        value: cdktf.stringToHclTerraform(this._vrfRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      analytics_policy: {
        value: cdktf.listMapperHcl(poolAnalyticsPolicyToHclTerraform, true)(this._analyticsPolicy.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PoolAnalyticsPolicyList",
      },
      configpb_attributes: {
        value: cdktf.listMapperHcl(poolConfigpbAttributesToHclTerraform, true)(this._configpbAttributes.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PoolConfigpbAttributesList",
      },
      conn_pool_properties: {
        value: cdktf.listMapperHcl(poolConnPoolPropertiesToHclTerraform, true)(this._connPoolProperties.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PoolConnPoolPropertiesList",
      },
      fail_action: {
        value: cdktf.listMapperHcl(poolFailActionToHclTerraform, true)(this._failAction.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PoolFailActionList",
      },
      horizon_profile: {
        value: cdktf.listMapperHcl(poolHorizonProfileToHclTerraform, true)(this._horizonProfile.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PoolHorizonProfileList",
      },
      http2_properties: {
        value: cdktf.listMapperHcl(poolHttp2PropertiesToHclTerraform, true)(this._http2Properties.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PoolHttp2PropertiesList",
      },
      markers: {
        value: cdktf.listMapperHcl(poolMarkersToHclTerraform, true)(this._markers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PoolMarkersList",
      },
      max_conn_rate_per_server: {
        value: cdktf.listMapperHcl(poolMaxConnRatePerServerToHclTerraform, true)(this._maxConnRatePerServer.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PoolMaxConnRatePerServerList",
      },
      networks: {
        value: cdktf.listMapperHcl(poolNetworksToHclTerraform, true)(this._networks.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PoolNetworksList",
      },
      placement_networks: {
        value: cdktf.listMapperHcl(poolPlacementNetworksToHclTerraform, true)(this._placementNetworks.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PoolPlacementNetworksList",
      },
      server_reselect: {
        value: cdktf.listMapperHcl(poolServerReselectToHclTerraform, true)(this._serverReselect.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PoolServerReselectList",
      },
      servers: {
        value: cdktf.listMapperHcl(poolServersToHclTerraform, true)(this._servers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PoolServersList",
      },
      sp_gs_info: {
        value: cdktf.listMapperHcl(poolSpGsInfoToHclTerraform, true)(this._spGsInfo.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PoolSpGsInfoList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
