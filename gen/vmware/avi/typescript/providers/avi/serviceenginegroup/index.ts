// https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServiceenginegroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#accelerated_networking Serviceenginegroup#accelerated_networking}
  */
  readonly acceleratedNetworking?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#active_standby Serviceenginegroup#active_standby}
  */
  readonly activeStandby?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#aggressive_failure_detection Serviceenginegroup#aggressive_failure_detection}
  */
  readonly aggressiveFailureDetection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#algo Serviceenginegroup#algo}
  */
  readonly algo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#allow_burst Serviceenginegroup#allow_burst}
  */
  readonly allowBurst?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#app_cache_percent Serviceenginegroup#app_cache_percent}
  */
  readonly appCachePercent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#app_cache_threshold Serviceenginegroup#app_cache_threshold}
  */
  readonly appCacheThreshold?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#app_learning_memory_percent Serviceenginegroup#app_learning_memory_percent}
  */
  readonly appLearningMemoryPercent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#archive_shm_limit Serviceenginegroup#archive_shm_limit}
  */
  readonly archiveShmLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#async_ssl Serviceenginegroup#async_ssl}
  */
  readonly asyncSsl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#async_ssl_threads Serviceenginegroup#async_ssl_threads}
  */
  readonly asyncSslThreads?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#auto_rebalance Serviceenginegroup#auto_rebalance}
  */
  readonly autoRebalance?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#auto_rebalance_capacity_per_se Serviceenginegroup#auto_rebalance_capacity_per_se}
  */
  readonly autoRebalanceCapacityPerSe?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#auto_rebalance_criteria Serviceenginegroup#auto_rebalance_criteria}
  */
  readonly autoRebalanceCriteria?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#auto_rebalance_interval Serviceenginegroup#auto_rebalance_interval}
  */
  readonly autoRebalanceInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#auto_redistribute_active_standby_load Serviceenginegroup#auto_redistribute_active_standby_load}
  */
  readonly autoRedistributeActiveStandbyLoad?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#availability_zone_refs Serviceenginegroup#availability_zone_refs}
  */
  readonly availabilityZoneRefs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#baremetal_dispatcher_handles_flows Serviceenginegroup#baremetal_dispatcher_handles_flows}
  */
  readonly baremetalDispatcherHandlesFlows?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#bgp_peer_monitor_failover_enabled Serviceenginegroup#bgp_peer_monitor_failover_enabled}
  */
  readonly bgpPeerMonitorFailoverEnabled?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#bgp_state_update_interval Serviceenginegroup#bgp_state_update_interval}
  */
  readonly bgpStateUpdateInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#buffer_se Serviceenginegroup#buffer_se}
  */
  readonly bufferSe?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#cloud_ref Serviceenginegroup#cloud_ref}
  */
  readonly cloudRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#compress_ip_rules_for_each_ns_subnet Serviceenginegroup#compress_ip_rules_for_each_ns_subnet}
  */
  readonly compressIpRulesForEachNsSubnet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#config_debugs_on_all_cores Serviceenginegroup#config_debugs_on_all_cores}
  */
  readonly configDebugsOnAllCores?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#connection_memory_percentage Serviceenginegroup#connection_memory_percentage}
  */
  readonly connectionMemoryPercentage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#core_shm_app_cache Serviceenginegroup#core_shm_app_cache}
  */
  readonly coreShmAppCache?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#core_shm_app_learning Serviceenginegroup#core_shm_app_learning}
  */
  readonly coreShmAppLearning?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#cpu_reserve Serviceenginegroup#cpu_reserve}
  */
  readonly cpuReserve?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#cpu_socket_affinity Serviceenginegroup#cpu_socket_affinity}
  */
  readonly cpuSocketAffinity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#custom_securitygroups_data Serviceenginegroup#custom_securitygroups_data}
  */
  readonly customSecuritygroupsData?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#custom_securitygroups_mgmt Serviceenginegroup#custom_securitygroups_mgmt}
  */
  readonly customSecuritygroupsMgmt?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#data_network_id Serviceenginegroup#data_network_id}
  */
  readonly dataNetworkId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#datascript_timeout Serviceenginegroup#datascript_timeout}
  */
  readonly datascriptTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#deactivate_ipv6_discovery Serviceenginegroup#deactivate_ipv6_discovery}
  */
  readonly deactivateIpv6Discovery?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#deactivate_kni_filtering_at_dispatcher Serviceenginegroup#deactivate_kni_filtering_at_dispatcher}
  */
  readonly deactivateKniFilteringAtDispatcher?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#dedicated_dispatcher_core Serviceenginegroup#dedicated_dispatcher_core}
  */
  readonly dedicatedDispatcherCore?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#description Serviceenginegroup#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#disable_avi_securitygroups Serviceenginegroup#disable_avi_securitygroups}
  */
  readonly disableAviSecuritygroups?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#disable_csum_offloads Serviceenginegroup#disable_csum_offloads}
  */
  readonly disableCsumOffloads?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#disable_flow_probes Serviceenginegroup#disable_flow_probes}
  */
  readonly disableFlowProbes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#disable_gro Serviceenginegroup#disable_gro}
  */
  readonly disableGro?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#disable_se_memory_check Serviceenginegroup#disable_se_memory_check}
  */
  readonly disableSeMemoryCheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#disable_tso Serviceenginegroup#disable_tso}
  */
  readonly disableTso?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#disk_per_se Serviceenginegroup#disk_per_se}
  */
  readonly diskPerSe?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#distribute_load_active_standby Serviceenginegroup#distribute_load_active_standby}
  */
  readonly distributeLoadActiveStandby?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#distribute_queues Serviceenginegroup#distribute_queues}
  */
  readonly distributeQueues?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#distribute_vnics Serviceenginegroup#distribute_vnics}
  */
  readonly distributeVnics?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#downstream_send_timeout Serviceenginegroup#downstream_send_timeout}
  */
  readonly downstreamSendTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#dp_aggressive_deq_interval_msec Serviceenginegroup#dp_aggressive_deq_interval_msec}
  */
  readonly dpAggressiveDeqIntervalMsec?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#dp_aggressive_enq_interval_msec Serviceenginegroup#dp_aggressive_enq_interval_msec}
  */
  readonly dpAggressiveEnqIntervalMsec?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#dp_aggressive_hb_frequency Serviceenginegroup#dp_aggressive_hb_frequency}
  */
  readonly dpAggressiveHbFrequency?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#dp_aggressive_hb_timeout_count Serviceenginegroup#dp_aggressive_hb_timeout_count}
  */
  readonly dpAggressiveHbTimeoutCount?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#dp_deq_interval_msec Serviceenginegroup#dp_deq_interval_msec}
  */
  readonly dpDeqIntervalMsec?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#dp_enq_interval_msec Serviceenginegroup#dp_enq_interval_msec}
  */
  readonly dpEnqIntervalMsec?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#dp_hb_frequency Serviceenginegroup#dp_hb_frequency}
  */
  readonly dpHbFrequency?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#dp_hb_timeout_count Serviceenginegroup#dp_hb_timeout_count}
  */
  readonly dpHbTimeoutCount?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#dpdk_gro_timeout_interval Serviceenginegroup#dpdk_gro_timeout_interval}
  */
  readonly dpdkGroTimeoutInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#enable_gratarp_permanent Serviceenginegroup#enable_gratarp_permanent}
  */
  readonly enableGratarpPermanent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#enable_hsm_log Serviceenginegroup#enable_hsm_log}
  */
  readonly enableHsmLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#enable_hsm_priming Serviceenginegroup#enable_hsm_priming}
  */
  readonly enableHsmPriming?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#enable_multi_lb Serviceenginegroup#enable_multi_lb}
  */
  readonly enableMultiLb?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#enable_pcap_tx_ring Serviceenginegroup#enable_pcap_tx_ring}
  */
  readonly enablePcapTxRing?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#ephemeral_portrange_end Serviceenginegroup#ephemeral_portrange_end}
  */
  readonly ephemeralPortrangeEnd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#ephemeral_portrange_start Serviceenginegroup#ephemeral_portrange_start}
  */
  readonly ephemeralPortrangeStart?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#extra_config_multiplier Serviceenginegroup#extra_config_multiplier}
  */
  readonly extraConfigMultiplier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#extra_shared_config_memory Serviceenginegroup#extra_shared_config_memory}
  */
  readonly extraSharedConfigMemory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#flow_table_new_syn_max_entries Serviceenginegroup#flow_table_new_syn_max_entries}
  */
  readonly flowTableNewSynMaxEntries?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#free_list_size Serviceenginegroup#free_list_size}
  */
  readonly freeListSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#gratarp_permanent_periodicity Serviceenginegroup#gratarp_permanent_periodicity}
  */
  readonly gratarpPermanentPeriodicity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#grpc_channel_connect_timeout Serviceenginegroup#grpc_channel_connect_timeout}
  */
  readonly grpcChannelConnectTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#gve_enabled Serviceenginegroup#gve_enabled}
  */
  readonly gveEnabled?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#ha_mode Serviceenginegroup#ha_mode}
  */
  readonly haMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#handle_per_pkt_attack Serviceenginegroup#handle_per_pkt_attack}
  */
  readonly handlePerPktAttack?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#hardwaresecuritymodulegroup_ref Serviceenginegroup#hardwaresecuritymodulegroup_ref}
  */
  readonly hardwaresecuritymodulegroupRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#heap_minimum_config_memory Serviceenginegroup#heap_minimum_config_memory}
  */
  readonly heapMinimumConfigMemory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#hm_on_standby Serviceenginegroup#hm_on_standby}
  */
  readonly hmOnStandby?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#host_attribute_key Serviceenginegroup#host_attribute_key}
  */
  readonly hostAttributeKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#host_attribute_value Serviceenginegroup#host_attribute_value}
  */
  readonly hostAttributeValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#host_gateway_monitor Serviceenginegroup#host_gateway_monitor}
  */
  readonly hostGatewayMonitor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#http_rum_console_log Serviceenginegroup#http_rum_console_log}
  */
  readonly httpRumConsoleLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#http_rum_min_content_length Serviceenginegroup#http_rum_min_content_length}
  */
  readonly httpRumMinContentLength?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#hybrid_rss_mode Serviceenginegroup#hybrid_rss_mode}
  */
  readonly hybridRssMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#hypervisor Serviceenginegroup#hypervisor}
  */
  readonly hypervisor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#id Serviceenginegroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#ignore_docker_mac_change Serviceenginegroup#ignore_docker_mac_change}
  */
  readonly ignoreDockerMacChange?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#ignore_rtt_threshold Serviceenginegroup#ignore_rtt_threshold}
  */
  readonly ignoreRttThreshold?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#ingress_access_data Serviceenginegroup#ingress_access_data}
  */
  readonly ingressAccessData?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#ingress_access_mgmt Serviceenginegroup#ingress_access_mgmt}
  */
  readonly ingressAccessMgmt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#instance_flavor Serviceenginegroup#instance_flavor}
  */
  readonly instanceFlavor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#l7_conns_per_core Serviceenginegroup#l7_conns_per_core}
  */
  readonly l7ConnsPerCore?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#l7_resvd_listen_conns_per_core Serviceenginegroup#l7_resvd_listen_conns_per_core}
  */
  readonly l7ResvdListenConnsPerCore?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#lbaction_num_requests_to_dispatch Serviceenginegroup#lbaction_num_requests_to_dispatch}
  */
  readonly lbactionNumRequestsToDispatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#lbaction_rq_per_request_max_retries Serviceenginegroup#lbaction_rq_per_request_max_retries}
  */
  readonly lbactionRqPerRequestMaxRetries?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#least_load_core_selection Serviceenginegroup#least_load_core_selection}
  */
  readonly leastLoadCoreSelection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#license_tier Serviceenginegroup#license_tier}
  */
  readonly licenseTier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#license_type Serviceenginegroup#license_type}
  */
  readonly licenseType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#log_agent_compress_logs Serviceenginegroup#log_agent_compress_logs}
  */
  readonly logAgentCompressLogs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#log_agent_debug_enabled Serviceenginegroup#log_agent_debug_enabled}
  */
  readonly logAgentDebugEnabled?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#log_agent_file_sz_appl Serviceenginegroup#log_agent_file_sz_appl}
  */
  readonly logAgentFileSzAppl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#log_agent_file_sz_conn Serviceenginegroup#log_agent_file_sz_conn}
  */
  readonly logAgentFileSzConn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#log_agent_file_sz_debug Serviceenginegroup#log_agent_file_sz_debug}
  */
  readonly logAgentFileSzDebug?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#log_agent_file_sz_event Serviceenginegroup#log_agent_file_sz_event}
  */
  readonly logAgentFileSzEvent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#log_agent_log_storage_min_sz Serviceenginegroup#log_agent_log_storage_min_sz}
  */
  readonly logAgentLogStorageMinSz?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#log_agent_max_concurrent_rsync Serviceenginegroup#log_agent_max_concurrent_rsync}
  */
  readonly logAgentMaxConcurrentRsync?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#log_agent_max_storage_excess_percent Serviceenginegroup#log_agent_max_storage_excess_percent}
  */
  readonly logAgentMaxStorageExcessPercent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#log_agent_max_storage_ignore_percent Serviceenginegroup#log_agent_max_storage_ignore_percent}
  */
  readonly logAgentMaxStorageIgnorePercent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#log_agent_min_storage_per_vs Serviceenginegroup#log_agent_min_storage_per_vs}
  */
  readonly logAgentMinStoragePerVs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#log_agent_sleep_interval Serviceenginegroup#log_agent_sleep_interval}
  */
  readonly logAgentSleepInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#log_agent_trace_enabled Serviceenginegroup#log_agent_trace_enabled}
  */
  readonly logAgentTraceEnabled?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#log_agent_unknown_vs_timer Serviceenginegroup#log_agent_unknown_vs_timer}
  */
  readonly logAgentUnknownVsTimer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#log_disksz Serviceenginegroup#log_disksz}
  */
  readonly logDisksz?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#log_malloc_failure Serviceenginegroup#log_malloc_failure}
  */
  readonly logMallocFailure?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#log_message_max_file_list_size Serviceenginegroup#log_message_max_file_list_size}
  */
  readonly logMessageMaxFileListSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#max_concurrent_external_hm Serviceenginegroup#max_concurrent_external_hm}
  */
  readonly maxConcurrentExternalHm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#max_cpu_usage Serviceenginegroup#max_cpu_usage}
  */
  readonly maxCpuUsage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#max_memory_per_mempool Serviceenginegroup#max_memory_per_mempool}
  */
  readonly maxMemoryPerMempool?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#max_num_http_sessions_to_store Serviceenginegroup#max_num_http_sessions_to_store}
  */
  readonly maxNumHttpSessionsToStore?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#max_num_se_dps Serviceenginegroup#max_num_se_dps}
  */
  readonly maxNumSeDps?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#max_public_ips_per_lb Serviceenginegroup#max_public_ips_per_lb}
  */
  readonly maxPublicIpsPerLb?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#max_queues_per_vnic Serviceenginegroup#max_queues_per_vnic}
  */
  readonly maxQueuesPerVnic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#max_rules_per_lb Serviceenginegroup#max_rules_per_lb}
  */
  readonly maxRulesPerLb?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#max_scaleout_per_vs Serviceenginegroup#max_scaleout_per_vs}
  */
  readonly maxScaleoutPerVs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#max_se Serviceenginegroup#max_se}
  */
  readonly maxSe?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#max_skb_frags Serviceenginegroup#max_skb_frags}
  */
  readonly maxSkbFrags?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#max_vs_per_se Serviceenginegroup#max_vs_per_se}
  */
  readonly maxVsPerSe?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#mem_reserve Serviceenginegroup#mem_reserve}
  */
  readonly memReserve?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#memory_for_config_update Serviceenginegroup#memory_for_config_update}
  */
  readonly memoryForConfigUpdate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#memory_per_se Serviceenginegroup#memory_per_se}
  */
  readonly memoryPerSe?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#metrics_collection_mode Serviceenginegroup#metrics_collection_mode}
  */
  readonly metricsCollectionMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#mgmt_network_ref Serviceenginegroup#mgmt_network_ref}
  */
  readonly mgmtNetworkRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#min_cpu_usage Serviceenginegroup#min_cpu_usage}
  */
  readonly minCpuUsage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#min_scaleout_per_vs Serviceenginegroup#min_scaleout_per_vs}
  */
  readonly minScaleoutPerVs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#min_se Serviceenginegroup#min_se}
  */
  readonly minSe?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#minimum_connection_memory Serviceenginegroup#minimum_connection_memory}
  */
  readonly minimumConnectionMemory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#multicast_enable Serviceenginegroup#multicast_enable}
  */
  readonly multicastEnable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#n_log_streaming_threads Serviceenginegroup#n_log_streaming_threads}
  */
  readonly nLogStreamingThreads?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#name Serviceenginegroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#netlink_poller_threads Serviceenginegroup#netlink_poller_threads}
  */
  readonly netlinkPollerThreads?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#netlink_sock_buf_size Serviceenginegroup#netlink_sock_buf_size}
  */
  readonly netlinkSockBufSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#ngx_free_connection_stack Serviceenginegroup#ngx_free_connection_stack}
  */
  readonly ngxFreeConnectionStack?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#non_significant_log_throttle Serviceenginegroup#non_significant_log_throttle}
  */
  readonly nonSignificantLogThrottle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#ns_helper_deq_interval_msec Serviceenginegroup#ns_helper_deq_interval_msec}
  */
  readonly nsHelperDeqIntervalMsec?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#ntp_sync_fail_event Serviceenginegroup#ntp_sync_fail_event}
  */
  readonly ntpSyncFailEvent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#ntp_sync_status_interval Serviceenginegroup#ntp_sync_status_interval}
  */
  readonly ntpSyncStatusInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#num_dispatcher_cores Serviceenginegroup#num_dispatcher_cores}
  */
  readonly numDispatcherCores?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#num_dispatcher_queues Serviceenginegroup#num_dispatcher_queues}
  */
  readonly numDispatcherQueues?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#num_flow_cores_sum_changes_to_ignore Serviceenginegroup#num_flow_cores_sum_changes_to_ignore}
  */
  readonly numFlowCoresSumChangesToIgnore?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#objsync_port Serviceenginegroup#objsync_port}
  */
  readonly objsyncPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#openstack_availability_zones Serviceenginegroup#openstack_availability_zones}
  */
  readonly openstackAvailabilityZones?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#openstack_mgmt_network_name Serviceenginegroup#openstack_mgmt_network_name}
  */
  readonly openstackMgmtNetworkName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#openstack_mgmt_network_uuid Serviceenginegroup#openstack_mgmt_network_uuid}
  */
  readonly openstackMgmtNetworkUuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#os_reserved_memory Serviceenginegroup#os_reserved_memory}
  */
  readonly osReservedMemory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#path_mtu_discovery_v4 Serviceenginegroup#path_mtu_discovery_v4}
  */
  readonly pathMtuDiscoveryV4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#path_mtu_discovery_v6 Serviceenginegroup#path_mtu_discovery_v6}
  */
  readonly pathMtuDiscoveryV6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#pcap_tx_mode Serviceenginegroup#pcap_tx_mode}
  */
  readonly pcapTxMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#pcap_tx_ring_rd_balancing_factor Serviceenginegroup#pcap_tx_ring_rd_balancing_factor}
  */
  readonly pcapTxRingRdBalancingFactor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#per_app Serviceenginegroup#per_app}
  */
  readonly perApp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#per_vs_admission_control Serviceenginegroup#per_vs_admission_control}
  */
  readonly perVsAdmissionControl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#placement_mode Serviceenginegroup#placement_mode}
  */
  readonly placementMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#reboot_on_panic Serviceenginegroup#reboot_on_panic}
  */
  readonly rebootOnPanic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#replay_vrf_routes_interval Serviceenginegroup#replay_vrf_routes_interval}
  */
  readonly replayVrfRoutesInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#resync_time_interval Serviceenginegroup#resync_time_interval}
  */
  readonly resyncTimeInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#sdb_flush_interval Serviceenginegroup#sdb_flush_interval}
  */
  readonly sdbFlushInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#sdb_key_timeout Serviceenginegroup#sdb_key_timeout}
  */
  readonly sdbKeyTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#sdb_pipeline_size Serviceenginegroup#sdb_pipeline_size}
  */
  readonly sdbPipelineSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#sdb_scan_count Serviceenginegroup#sdb_scan_count}
  */
  readonly sdbScanCount?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#se_bandwidth_type Serviceenginegroup#se_bandwidth_type}
  */
  readonly seBandwidthType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#se_debug_trace_sz Serviceenginegroup#se_debug_trace_sz}
  */
  readonly seDebugTraceSz?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#se_delayed_flow_delete Serviceenginegroup#se_delayed_flow_delete}
  */
  readonly seDelayedFlowDelete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#se_deprovision_delay Serviceenginegroup#se_deprovision_delay}
  */
  readonly seDeprovisionDelay?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#se_dp_hm_drops Serviceenginegroup#se_dp_hm_drops}
  */
  readonly seDpHmDrops?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#se_dp_if_state_poll_interval Serviceenginegroup#se_dp_if_state_poll_interval}
  */
  readonly seDpIfStatePollInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#se_dp_isolation Serviceenginegroup#se_dp_isolation}
  */
  readonly seDpIsolation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#se_dp_isolation_num_non_dp_cpus Serviceenginegroup#se_dp_isolation_num_non_dp_cpus}
  */
  readonly seDpIsolationNumNonDpCpus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#se_dp_log_nf_enqueue_percent Serviceenginegroup#se_dp_log_nf_enqueue_percent}
  */
  readonly seDpLogNfEnqueuePercent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#se_dp_log_udf_enqueue_percent Serviceenginegroup#se_dp_log_udf_enqueue_percent}
  */
  readonly seDpLogUdfEnqueuePercent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#se_dp_max_hb_version Serviceenginegroup#se_dp_max_hb_version}
  */
  readonly seDpMaxHbVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#se_dp_vnic_queue_stall_event_sleep Serviceenginegroup#se_dp_vnic_queue_stall_event_sleep}
  */
  readonly seDpVnicQueueStallEventSleep?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#se_dp_vnic_queue_stall_threshold Serviceenginegroup#se_dp_vnic_queue_stall_threshold}
  */
  readonly seDpVnicQueueStallThreshold?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#se_dp_vnic_queue_stall_timeout Serviceenginegroup#se_dp_vnic_queue_stall_timeout}
  */
  readonly seDpVnicQueueStallTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#se_dp_vnic_restart_on_queue_stall_count Serviceenginegroup#se_dp_vnic_restart_on_queue_stall_count}
  */
  readonly seDpVnicRestartOnQueueStallCount?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#se_dp_vnic_stall_se_restart_window Serviceenginegroup#se_dp_vnic_stall_se_restart_window}
  */
  readonly seDpVnicStallSeRestartWindow?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#se_dpdk_pmd Serviceenginegroup#se_dpdk_pmd}
  */
  readonly seDpdkPmd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#se_dump_core_on_assert Serviceenginegroup#se_dump_core_on_assert}
  */
  readonly seDumpCoreOnAssert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#se_emulated_cores Serviceenginegroup#se_emulated_cores}
  */
  readonly seEmulatedCores?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#se_flow_probe_retries Serviceenginegroup#se_flow_probe_retries}
  */
  readonly seFlowProbeRetries?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#se_flow_probe_retry_timer Serviceenginegroup#se_flow_probe_retry_timer}
  */
  readonly seFlowProbeRetryTimer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#se_hyperthreaded_mode Serviceenginegroup#se_hyperthreaded_mode}
  */
  readonly seHyperthreadedMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#se_ip_encap_ipc Serviceenginegroup#se_ip_encap_ipc}
  */
  readonly seIpEncapIpc?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#se_kni_burst_factor Serviceenginegroup#se_kni_burst_factor}
  */
  readonly seKniBurstFactor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#se_l3_encap_ipc Serviceenginegroup#se_l3_encap_ipc}
  */
  readonly seL3EncapIpc?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#se_log_buffer_app_blocking_dequeue Serviceenginegroup#se_log_buffer_app_blocking_dequeue}
  */
  readonly seLogBufferAppBlockingDequeue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#se_log_buffer_conn_blocking_dequeue Serviceenginegroup#se_log_buffer_conn_blocking_dequeue}
  */
  readonly seLogBufferConnBlockingDequeue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#se_log_buffer_events_blocking_dequeue Serviceenginegroup#se_log_buffer_events_blocking_dequeue}
  */
  readonly seLogBufferEventsBlockingDequeue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#se_lro Serviceenginegroup#se_lro}
  */
  readonly seLro?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#se_mp_ring_retry_count Serviceenginegroup#se_mp_ring_retry_count}
  */
  readonly seMpRingRetryCount?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#se_mtu Serviceenginegroup#se_mtu}
  */
  readonly seMtu?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#se_name_prefix Serviceenginegroup#se_name_prefix}
  */
  readonly seNamePrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#se_packet_buffer_max Serviceenginegroup#se_packet_buffer_max}
  */
  readonly sePacketBufferMax?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#se_pcap_lookahead Serviceenginegroup#se_pcap_lookahead}
  */
  readonly sePcapLookahead?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#se_pcap_pkt_count Serviceenginegroup#se_pcap_pkt_count}
  */
  readonly sePcapPktCount?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#se_pcap_pkt_sz Serviceenginegroup#se_pcap_pkt_sz}
  */
  readonly sePcapPktSz?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#se_pcap_qdisc_bypass Serviceenginegroup#se_pcap_qdisc_bypass}
  */
  readonly sePcapQdiscBypass?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#se_pcap_reinit_frequency Serviceenginegroup#se_pcap_reinit_frequency}
  */
  readonly sePcapReinitFrequency?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#se_pcap_reinit_threshold Serviceenginegroup#se_pcap_reinit_threshold}
  */
  readonly sePcapReinitThreshold?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#se_probe_port Serviceenginegroup#se_probe_port}
  */
  readonly seProbePort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#se_rum_sampling_nav_interval Serviceenginegroup#se_rum_sampling_nav_interval}
  */
  readonly seRumSamplingNavInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#se_rum_sampling_nav_percent Serviceenginegroup#se_rum_sampling_nav_percent}
  */
  readonly seRumSamplingNavPercent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#se_rum_sampling_res_interval Serviceenginegroup#se_rum_sampling_res_interval}
  */
  readonly seRumSamplingResInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#se_rum_sampling_res_percent Serviceenginegroup#se_rum_sampling_res_percent}
  */
  readonly seRumSamplingResPercent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#se_sb_dedicated_core Serviceenginegroup#se_sb_dedicated_core}
  */
  readonly seSbDedicatedCore?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#se_sb_threads Serviceenginegroup#se_sb_threads}
  */
  readonly seSbThreads?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#se_thread_multiplier Serviceenginegroup#se_thread_multiplier}
  */
  readonly seThreadMultiplier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#se_tunnel_mode Serviceenginegroup#se_tunnel_mode}
  */
  readonly seTunnelMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#se_tunnel_udp_port Serviceenginegroup#se_tunnel_udp_port}
  */
  readonly seTunnelUdpPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#se_tx_batch_size Serviceenginegroup#se_tx_batch_size}
  */
  readonly seTxBatchSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#se_txq_threshold Serviceenginegroup#se_txq_threshold}
  */
  readonly seTxqThreshold?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#se_udp_encap_ipc Serviceenginegroup#se_udp_encap_ipc}
  */
  readonly seUdpEncapIpc?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#se_use_dpdk Serviceenginegroup#se_use_dpdk}
  */
  readonly seUseDpdk?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#se_vnic_tx_sw_queue_flush_frequency Serviceenginegroup#se_vnic_tx_sw_queue_flush_frequency}
  */
  readonly seVnicTxSwQueueFlushFrequency?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#se_vnic_tx_sw_queue_size Serviceenginegroup#se_vnic_tx_sw_queue_size}
  */
  readonly seVnicTxSwQueueSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#se_vs_hb_max_pkts_in_batch Serviceenginegroup#se_vs_hb_max_pkts_in_batch}
  */
  readonly seVsHbMaxPktsInBatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#se_vs_hb_max_vs_in_pkt Serviceenginegroup#se_vs_hb_max_vs_in_pkt}
  */
  readonly seVsHbMaxVsInPkt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#self_se_election Serviceenginegroup#self_se_election}
  */
  readonly selfSeElection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#send_se_ready_timeout Serviceenginegroup#send_se_ready_timeout}
  */
  readonly sendSeReadyTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#shm_minimum_config_memory Serviceenginegroup#shm_minimum_config_memory}
  */
  readonly shmMinimumConfigMemory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#significant_log_throttle Serviceenginegroup#significant_log_throttle}
  */
  readonly significantLogThrottle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#ssl_preprocess_sni_hostname Serviceenginegroup#ssl_preprocess_sni_hostname}
  */
  readonly sslPreprocessSniHostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#ssl_sess_cache_per_vs Serviceenginegroup#ssl_sess_cache_per_vs}
  */
  readonly sslSessCachePerVs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#tenant_ref Serviceenginegroup#tenant_ref}
  */
  readonly tenantRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#transient_shared_memory_max Serviceenginegroup#transient_shared_memory_max}
  */
  readonly transientSharedMemoryMax?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#udf_log_throttle Serviceenginegroup#udf_log_throttle}
  */
  readonly udfLogThrottle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#upstream_connect_timeout Serviceenginegroup#upstream_connect_timeout}
  */
  readonly upstreamConnectTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#upstream_connpool_enable Serviceenginegroup#upstream_connpool_enable}
  */
  readonly upstreamConnpoolEnable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#upstream_read_timeout Serviceenginegroup#upstream_read_timeout}
  */
  readonly upstreamReadTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#upstream_send_timeout Serviceenginegroup#upstream_send_timeout}
  */
  readonly upstreamSendTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#use_dp_util_for_scaleout Serviceenginegroup#use_dp_util_for_scaleout}
  */
  readonly useDpUtilForScaleout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#use_hyperthreaded_cores Serviceenginegroup#use_hyperthreaded_cores}
  */
  readonly useHyperthreadedCores?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#use_legacy_netlink Serviceenginegroup#use_legacy_netlink}
  */
  readonly useLegacyNetlink?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#use_objsync Serviceenginegroup#use_objsync}
  */
  readonly useObjsync?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#use_standard_alb Serviceenginegroup#use_standard_alb}
  */
  readonly useStandardAlb?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#user_defined_metric_age Serviceenginegroup#user_defined_metric_age}
  */
  readonly userDefinedMetricAge?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#uuid Serviceenginegroup#uuid}
  */
  readonly uuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#vcenter_datastore_mode Serviceenginegroup#vcenter_datastore_mode}
  */
  readonly vcenterDatastoreMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#vcenter_datastores_include Serviceenginegroup#vcenter_datastores_include}
  */
  readonly vcenterDatastoresInclude?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#vcenter_folder Serviceenginegroup#vcenter_folder}
  */
  readonly vcenterFolder?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#vcenter_parking_vnic_pg Serviceenginegroup#vcenter_parking_vnic_pg}
  */
  readonly vcenterParkingVnicPg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#vcpus_per_se Serviceenginegroup#vcpus_per_se}
  */
  readonly vcpusPerSe?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#vnic_dhcp_ip_check_interval Serviceenginegroup#vnic_dhcp_ip_check_interval}
  */
  readonly vnicDhcpIpCheckInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#vnic_dhcp_ip_max_retries Serviceenginegroup#vnic_dhcp_ip_max_retries}
  */
  readonly vnicDhcpIpMaxRetries?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#vnic_ip_delete_interval Serviceenginegroup#vnic_ip_delete_interval}
  */
  readonly vnicIpDeleteInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#vnic_probe_interval Serviceenginegroup#vnic_probe_interval}
  */
  readonly vnicProbeInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#vnic_rpc_retry_interval Serviceenginegroup#vnic_rpc_retry_interval}
  */
  readonly vnicRpcRetryInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#vnicdb_cmd_history_size Serviceenginegroup#vnicdb_cmd_history_size}
  */
  readonly vnicdbCmdHistorySize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#vs_host_redundancy Serviceenginegroup#vs_host_redundancy}
  */
  readonly vsHostRedundancy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#vs_scalein_timeout Serviceenginegroup#vs_scalein_timeout}
  */
  readonly vsScaleinTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#vs_scalein_timeout_for_upgrade Serviceenginegroup#vs_scalein_timeout_for_upgrade}
  */
  readonly vsScaleinTimeoutForUpgrade?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#vs_scaleout_timeout Serviceenginegroup#vs_scaleout_timeout}
  */
  readonly vsScaleoutTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#vs_se_primary_switchover_additional_wait_time Serviceenginegroup#vs_se_primary_switchover_additional_wait_time}
  */
  readonly vsSePrimarySwitchoverAdditionalWaitTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#vs_se_scalein_additional_wait_time Serviceenginegroup#vs_se_scalein_additional_wait_time}
  */
  readonly vsSeScaleinAdditionalWaitTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#vs_se_scaleout_additional_wait_time Serviceenginegroup#vs_se_scaleout_additional_wait_time}
  */
  readonly vsSeScaleoutAdditionalWaitTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#vs_se_scaleout_ready_timeout Serviceenginegroup#vs_se_scaleout_ready_timeout}
  */
  readonly vsSeScaleoutReadyTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#vs_switchover_timeout Serviceenginegroup#vs_switchover_timeout}
  */
  readonly vsSwitchoverTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#vss_placement_enabled Serviceenginegroup#vss_placement_enabled}
  */
  readonly vssPlacementEnabled?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#waf_mempool Serviceenginegroup#waf_mempool}
  */
  readonly wafMempool?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#waf_mempool_size Serviceenginegroup#waf_mempool_size}
  */
  readonly wafMempoolSize?: string;
  /**
  * configpb_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#configpb_attributes Serviceenginegroup#configpb_attributes}
  */
  readonly configpbAttributes?: ServiceenginegroupConfigpbAttributes[] | cdktf.IResolvable;
  /**
  * custom_tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#custom_tag Serviceenginegroup#custom_tag}
  */
  readonly customTag?: ServiceenginegroupCustomTag[] | cdktf.IResolvable;
  /**
  * gcp_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#gcp_config Serviceenginegroup#gcp_config}
  */
  readonly gcpConfig?: ServiceenginegroupGcpConfig[] | cdktf.IResolvable;
  /**
  * instance_flavor_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#instance_flavor_info Serviceenginegroup#instance_flavor_info}
  */
  readonly instanceFlavorInfo?: ServiceenginegroupInstanceFlavorInfo[] | cdktf.IResolvable;
  /**
  * iptables block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#iptables Serviceenginegroup#iptables}
  */
  readonly iptables?: ServiceenginegroupIptables[] | cdktf.IResolvable;
  /**
  * kni_allowed_server_ports block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#kni_allowed_server_ports Serviceenginegroup#kni_allowed_server_ports}
  */
  readonly kniAllowedServerPorts?: ServiceenginegroupKniAllowedServerPorts[] | cdktf.IResolvable;
  /**
  * labels block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#labels Serviceenginegroup#labels}
  */
  readonly labels?: ServiceenginegroupLabels[] | cdktf.IResolvable;
  /**
  * markers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#markers Serviceenginegroup#markers}
  */
  readonly markers?: ServiceenginegroupMarkers[] | cdktf.IResolvable;
  /**
  * mgmt_subnet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#mgmt_subnet Serviceenginegroup#mgmt_subnet}
  */
  readonly mgmtSubnet?: ServiceenginegroupMgmtSubnet[] | cdktf.IResolvable;
  /**
  * objsync_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#objsync_config Serviceenginegroup#objsync_config}
  */
  readonly objsyncConfig?: ServiceenginegroupObjsyncConfig[] | cdktf.IResolvable;
  /**
  * realtime_se_metrics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#realtime_se_metrics Serviceenginegroup#realtime_se_metrics}
  */
  readonly realtimeSeMetrics?: ServiceenginegroupRealtimeSeMetrics[] | cdktf.IResolvable;
  /**
  * se_dos_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#se_dos_profile Serviceenginegroup#se_dos_profile}
  */
  readonly seDosProfile?: ServiceenginegroupSeDosProfile[] | cdktf.IResolvable;
  /**
  * se_group_analytics_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#se_group_analytics_policy Serviceenginegroup#se_group_analytics_policy}
  */
  readonly seGroupAnalyticsPolicy?: ServiceenginegroupSeGroupAnalyticsPolicy[] | cdktf.IResolvable;
  /**
  * se_rl_prop block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#se_rl_prop Serviceenginegroup#se_rl_prop}
  */
  readonly seRlProp?: ServiceenginegroupSeRlProp[] | cdktf.IResolvable;
  /**
  * se_time_tracker_props block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#se_time_tracker_props Serviceenginegroup#se_time_tracker_props}
  */
  readonly seTimeTrackerProps?: ServiceenginegroupSeTimeTrackerProps[] | cdktf.IResolvable;
  /**
  * se_tracert_port_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#se_tracert_port_range Serviceenginegroup#se_tracert_port_range}
  */
  readonly seTracertPortRange?: ServiceenginegroupSeTracertPortRange[] | cdktf.IResolvable;
  /**
  * service_ip6_subnets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#service_ip6_subnets Serviceenginegroup#service_ip6_subnets}
  */
  readonly serviceIp6Subnets?: ServiceenginegroupServiceIp6Subnets[] | cdktf.IResolvable;
  /**
  * service_ip_subnets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#service_ip_subnets Serviceenginegroup#service_ip_subnets}
  */
  readonly serviceIpSubnets?: ServiceenginegroupServiceIpSubnets[] | cdktf.IResolvable;
  /**
  * user_agent_cache_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#user_agent_cache_config Serviceenginegroup#user_agent_cache_config}
  */
  readonly userAgentCacheConfig?: ServiceenginegroupUserAgentCacheConfig[] | cdktf.IResolvable;
  /**
  * vcenter_clusters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#vcenter_clusters Serviceenginegroup#vcenter_clusters}
  */
  readonly vcenterClusters?: ServiceenginegroupVcenterClusters[] | cdktf.IResolvable;
  /**
  * vcenter_datastores block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#vcenter_datastores Serviceenginegroup#vcenter_datastores}
  */
  readonly vcenterDatastores?: ServiceenginegroupVcenterDatastores[] | cdktf.IResolvable;
  /**
  * vcenter_hosts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#vcenter_hosts Serviceenginegroup#vcenter_hosts}
  */
  readonly vcenterHosts?: ServiceenginegroupVcenterHosts[] | cdktf.IResolvable;
  /**
  * vcenters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#vcenters Serviceenginegroup#vcenters}
  */
  readonly vcenters?: ServiceenginegroupVcenters[] | cdktf.IResolvable;
  /**
  * vip_asg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#vip_asg Serviceenginegroup#vip_asg}
  */
  readonly vipAsg?: ServiceenginegroupVipAsg[] | cdktf.IResolvable;
  /**
  * vss_placement block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#vss_placement Serviceenginegroup#vss_placement}
  */
  readonly vssPlacement?: ServiceenginegroupVssPlacement[] | cdktf.IResolvable;
}
export interface ServiceenginegroupConfigpbAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#version Serviceenginegroup#version}
  */
  readonly version?: string;
}

export function serviceenginegroupConfigpbAttributesToTerraform(struct?: ServiceenginegroupConfigpbAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function serviceenginegroupConfigpbAttributesToHclTerraform(struct?: ServiceenginegroupConfigpbAttributes | cdktf.IResolvable): any {
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

export class ServiceenginegroupConfigpbAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceenginegroupConfigpbAttributes | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ServiceenginegroupConfigpbAttributes | cdktf.IResolvable | undefined) {
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

export class ServiceenginegroupConfigpbAttributesList extends cdktf.ComplexList {
  public internalValue? : ServiceenginegroupConfigpbAttributes[] | cdktf.IResolvable

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
  public get(index: number): ServiceenginegroupConfigpbAttributesOutputReference {
    return new ServiceenginegroupConfigpbAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceenginegroupCustomTag {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#tag_key Serviceenginegroup#tag_key}
  */
  readonly tagKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#tag_val Serviceenginegroup#tag_val}
  */
  readonly tagVal?: string;
}

export function serviceenginegroupCustomTagToTerraform(struct?: ServiceenginegroupCustomTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tag_key: cdktf.stringToTerraform(struct!.tagKey),
    tag_val: cdktf.stringToTerraform(struct!.tagVal),
  }
}


export function serviceenginegroupCustomTagToHclTerraform(struct?: ServiceenginegroupCustomTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tag_key: {
      value: cdktf.stringToHclTerraform(struct!.tagKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_val: {
      value: cdktf.stringToHclTerraform(struct!.tagVal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceenginegroupCustomTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceenginegroupCustomTag | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tagKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagKey = this._tagKey;
    }
    if (this._tagVal !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagVal = this._tagVal;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceenginegroupCustomTag | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tagKey = undefined;
      this._tagVal = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tagKey = value.tagKey;
      this._tagVal = value.tagVal;
    }
  }

  // tag_key - computed: false, optional: false, required: true
  private _tagKey?: string; 
  public get tagKey() {
    return this.getStringAttribute('tag_key');
  }
  public set tagKey(value: string) {
    this._tagKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagKeyInput() {
    return this._tagKey;
  }

  // tag_val - computed: true, optional: true, required: false
  private _tagVal?: string; 
  public get tagVal() {
    return this.getStringAttribute('tag_val');
  }
  public set tagVal(value: string) {
    this._tagVal = value;
  }
  public resetTagVal() {
    this._tagVal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagValInput() {
    return this._tagVal;
  }
}

export class ServiceenginegroupCustomTagList extends cdktf.ComplexList {
  public internalValue? : ServiceenginegroupCustomTag[] | cdktf.IResolvable

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
  public get(index: number): ServiceenginegroupCustomTagOutputReference {
    return new ServiceenginegroupCustomTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceenginegroupGcpConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#backend_data_vpc_network_name Serviceenginegroup#backend_data_vpc_network_name}
  */
  readonly backendDataVpcNetworkName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#backend_data_vpc_project_id Serviceenginegroup#backend_data_vpc_project_id}
  */
  readonly backendDataVpcProjectId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#backend_data_vpc_subnet_name Serviceenginegroup#backend_data_vpc_subnet_name}
  */
  readonly backendDataVpcSubnetName?: string;
}

export function serviceenginegroupGcpConfigToTerraform(struct?: ServiceenginegroupGcpConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backend_data_vpc_network_name: cdktf.stringToTerraform(struct!.backendDataVpcNetworkName),
    backend_data_vpc_project_id: cdktf.stringToTerraform(struct!.backendDataVpcProjectId),
    backend_data_vpc_subnet_name: cdktf.stringToTerraform(struct!.backendDataVpcSubnetName),
  }
}


export function serviceenginegroupGcpConfigToHclTerraform(struct?: ServiceenginegroupGcpConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backend_data_vpc_network_name: {
      value: cdktf.stringToHclTerraform(struct!.backendDataVpcNetworkName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    backend_data_vpc_project_id: {
      value: cdktf.stringToHclTerraform(struct!.backendDataVpcProjectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    backend_data_vpc_subnet_name: {
      value: cdktf.stringToHclTerraform(struct!.backendDataVpcSubnetName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceenginegroupGcpConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceenginegroupGcpConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backendDataVpcNetworkName !== undefined) {
      hasAnyValues = true;
      internalValueResult.backendDataVpcNetworkName = this._backendDataVpcNetworkName;
    }
    if (this._backendDataVpcProjectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.backendDataVpcProjectId = this._backendDataVpcProjectId;
    }
    if (this._backendDataVpcSubnetName !== undefined) {
      hasAnyValues = true;
      internalValueResult.backendDataVpcSubnetName = this._backendDataVpcSubnetName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceenginegroupGcpConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backendDataVpcNetworkName = undefined;
      this._backendDataVpcProjectId = undefined;
      this._backendDataVpcSubnetName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backendDataVpcNetworkName = value.backendDataVpcNetworkName;
      this._backendDataVpcProjectId = value.backendDataVpcProjectId;
      this._backendDataVpcSubnetName = value.backendDataVpcSubnetName;
    }
  }

  // backend_data_vpc_network_name - computed: true, optional: true, required: false
  private _backendDataVpcNetworkName?: string; 
  public get backendDataVpcNetworkName() {
    return this.getStringAttribute('backend_data_vpc_network_name');
  }
  public set backendDataVpcNetworkName(value: string) {
    this._backendDataVpcNetworkName = value;
  }
  public resetBackendDataVpcNetworkName() {
    this._backendDataVpcNetworkName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendDataVpcNetworkNameInput() {
    return this._backendDataVpcNetworkName;
  }

  // backend_data_vpc_project_id - computed: true, optional: true, required: false
  private _backendDataVpcProjectId?: string; 
  public get backendDataVpcProjectId() {
    return this.getStringAttribute('backend_data_vpc_project_id');
  }
  public set backendDataVpcProjectId(value: string) {
    this._backendDataVpcProjectId = value;
  }
  public resetBackendDataVpcProjectId() {
    this._backendDataVpcProjectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendDataVpcProjectIdInput() {
    return this._backendDataVpcProjectId;
  }

  // backend_data_vpc_subnet_name - computed: true, optional: true, required: false
  private _backendDataVpcSubnetName?: string; 
  public get backendDataVpcSubnetName() {
    return this.getStringAttribute('backend_data_vpc_subnet_name');
  }
  public set backendDataVpcSubnetName(value: string) {
    this._backendDataVpcSubnetName = value;
  }
  public resetBackendDataVpcSubnetName() {
    this._backendDataVpcSubnetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendDataVpcSubnetNameInput() {
    return this._backendDataVpcSubnetName;
  }
}

export class ServiceenginegroupGcpConfigList extends cdktf.ComplexList {
  public internalValue? : ServiceenginegroupGcpConfig[] | cdktf.IResolvable

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
  public get(index: number): ServiceenginegroupGcpConfigOutputReference {
    return new ServiceenginegroupGcpConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceenginegroupInstanceFlavorInfoMeta {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#key Serviceenginegroup#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#value Serviceenginegroup#value}
  */
  readonly value: string;
}

export function serviceenginegroupInstanceFlavorInfoMetaToTerraform(struct?: ServiceenginegroupInstanceFlavorInfoMeta | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function serviceenginegroupInstanceFlavorInfoMetaToHclTerraform(struct?: ServiceenginegroupInstanceFlavorInfoMeta | cdktf.IResolvable): any {
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceenginegroupInstanceFlavorInfoMetaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceenginegroupInstanceFlavorInfoMeta | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceenginegroupInstanceFlavorInfoMeta | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ServiceenginegroupInstanceFlavorInfoMetaList extends cdktf.ComplexList {
  public internalValue? : ServiceenginegroupInstanceFlavorInfoMeta[] | cdktf.IResolvable

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
  public get(index: number): ServiceenginegroupInstanceFlavorInfoMetaOutputReference {
    return new ServiceenginegroupInstanceFlavorInfoMetaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceenginegroupInstanceFlavorInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#cost Serviceenginegroup#cost}
  */
  readonly cost?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#disk_gb Serviceenginegroup#disk_gb}
  */
  readonly diskGb?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#enhanced_nw Serviceenginegroup#enhanced_nw}
  */
  readonly enhancedNw?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#id Serviceenginegroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#is_recommended Serviceenginegroup#is_recommended}
  */
  readonly isRecommended?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#max_ip6s_per_nic Serviceenginegroup#max_ip6s_per_nic}
  */
  readonly maxIp6SPerNic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#max_ips_per_nic Serviceenginegroup#max_ips_per_nic}
  */
  readonly maxIpsPerNic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#max_nics Serviceenginegroup#max_nics}
  */
  readonly maxNics?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#name Serviceenginegroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#public Serviceenginegroup#public}
  */
  readonly public?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#ram_mb Serviceenginegroup#ram_mb}
  */
  readonly ramMb?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#vcpus Serviceenginegroup#vcpus}
  */
  readonly vcpus?: string;
  /**
  * meta block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#meta Serviceenginegroup#meta}
  */
  readonly meta?: ServiceenginegroupInstanceFlavorInfoMeta[] | cdktf.IResolvable;
}

export function serviceenginegroupInstanceFlavorInfoToTerraform(struct?: ServiceenginegroupInstanceFlavorInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cost: cdktf.stringToTerraform(struct!.cost),
    disk_gb: cdktf.stringToTerraform(struct!.diskGb),
    enhanced_nw: cdktf.stringToTerraform(struct!.enhancedNw),
    id: cdktf.stringToTerraform(struct!.id),
    is_recommended: cdktf.stringToTerraform(struct!.isRecommended),
    max_ip6s_per_nic: cdktf.stringToTerraform(struct!.maxIp6SPerNic),
    max_ips_per_nic: cdktf.stringToTerraform(struct!.maxIpsPerNic),
    max_nics: cdktf.stringToTerraform(struct!.maxNics),
    name: cdktf.stringToTerraform(struct!.name),
    public: cdktf.stringToTerraform(struct!.public),
    ram_mb: cdktf.stringToTerraform(struct!.ramMb),
    vcpus: cdktf.stringToTerraform(struct!.vcpus),
    meta: cdktf.listMapper(serviceenginegroupInstanceFlavorInfoMetaToTerraform, true)(struct!.meta),
  }
}


export function serviceenginegroupInstanceFlavorInfoToHclTerraform(struct?: ServiceenginegroupInstanceFlavorInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cost: {
      value: cdktf.stringToHclTerraform(struct!.cost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disk_gb: {
      value: cdktf.stringToHclTerraform(struct!.diskGb),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enhanced_nw: {
      value: cdktf.stringToHclTerraform(struct!.enhancedNw),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_recommended: {
      value: cdktf.stringToHclTerraform(struct!.isRecommended),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_ip6s_per_nic: {
      value: cdktf.stringToHclTerraform(struct!.maxIp6SPerNic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_ips_per_nic: {
      value: cdktf.stringToHclTerraform(struct!.maxIpsPerNic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_nics: {
      value: cdktf.stringToHclTerraform(struct!.maxNics),
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
    public: {
      value: cdktf.stringToHclTerraform(struct!.public),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ram_mb: {
      value: cdktf.stringToHclTerraform(struct!.ramMb),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vcpus: {
      value: cdktf.stringToHclTerraform(struct!.vcpus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    meta: {
      value: cdktf.listMapperHcl(serviceenginegroupInstanceFlavorInfoMetaToHclTerraform, true)(struct!.meta),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceenginegroupInstanceFlavorInfoMetaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceenginegroupInstanceFlavorInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceenginegroupInstanceFlavorInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cost !== undefined) {
      hasAnyValues = true;
      internalValueResult.cost = this._cost;
    }
    if (this._diskGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskGb = this._diskGb;
    }
    if (this._enhancedNw !== undefined) {
      hasAnyValues = true;
      internalValueResult.enhancedNw = this._enhancedNw;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._isRecommended !== undefined) {
      hasAnyValues = true;
      internalValueResult.isRecommended = this._isRecommended;
    }
    if (this._maxIp6SPerNic !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxIp6SPerNic = this._maxIp6SPerNic;
    }
    if (this._maxIpsPerNic !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxIpsPerNic = this._maxIpsPerNic;
    }
    if (this._maxNics !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxNics = this._maxNics;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._public !== undefined) {
      hasAnyValues = true;
      internalValueResult.public = this._public;
    }
    if (this._ramMb !== undefined) {
      hasAnyValues = true;
      internalValueResult.ramMb = this._ramMb;
    }
    if (this._vcpus !== undefined) {
      hasAnyValues = true;
      internalValueResult.vcpus = this._vcpus;
    }
    if (this._meta?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.meta = this._meta?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceenginegroupInstanceFlavorInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cost = undefined;
      this._diskGb = undefined;
      this._enhancedNw = undefined;
      this._id = undefined;
      this._isRecommended = undefined;
      this._maxIp6SPerNic = undefined;
      this._maxIpsPerNic = undefined;
      this._maxNics = undefined;
      this._name = undefined;
      this._public = undefined;
      this._ramMb = undefined;
      this._vcpus = undefined;
      this._meta.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cost = value.cost;
      this._diskGb = value.diskGb;
      this._enhancedNw = value.enhancedNw;
      this._id = value.id;
      this._isRecommended = value.isRecommended;
      this._maxIp6SPerNic = value.maxIp6SPerNic;
      this._maxIpsPerNic = value.maxIpsPerNic;
      this._maxNics = value.maxNics;
      this._name = value.name;
      this._public = value.public;
      this._ramMb = value.ramMb;
      this._vcpus = value.vcpus;
      this._meta.internalValue = value.meta;
    }
  }

  // cost - computed: true, optional: true, required: false
  private _cost?: string; 
  public get cost() {
    return this.getStringAttribute('cost');
  }
  public set cost(value: string) {
    this._cost = value;
  }
  public resetCost() {
    this._cost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get costInput() {
    return this._cost;
  }

  // disk_gb - computed: true, optional: true, required: false
  private _diskGb?: string; 
  public get diskGb() {
    return this.getStringAttribute('disk_gb');
  }
  public set diskGb(value: string) {
    this._diskGb = value;
  }
  public resetDiskGb() {
    this._diskGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskGbInput() {
    return this._diskGb;
  }

  // enhanced_nw - computed: true, optional: true, required: false
  private _enhancedNw?: string; 
  public get enhancedNw() {
    return this.getStringAttribute('enhanced_nw');
  }
  public set enhancedNw(value: string) {
    this._enhancedNw = value;
  }
  public resetEnhancedNw() {
    this._enhancedNw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enhancedNwInput() {
    return this._enhancedNw;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // is_recommended - computed: true, optional: true, required: false
  private _isRecommended?: string; 
  public get isRecommended() {
    return this.getStringAttribute('is_recommended');
  }
  public set isRecommended(value: string) {
    this._isRecommended = value;
  }
  public resetIsRecommended() {
    this._isRecommended = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isRecommendedInput() {
    return this._isRecommended;
  }

  // max_ip6s_per_nic - computed: true, optional: true, required: false
  private _maxIp6SPerNic?: string; 
  public get maxIp6SPerNic() {
    return this.getStringAttribute('max_ip6s_per_nic');
  }
  public set maxIp6SPerNic(value: string) {
    this._maxIp6SPerNic = value;
  }
  public resetMaxIp6SPerNic() {
    this._maxIp6SPerNic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxIp6SPerNicInput() {
    return this._maxIp6SPerNic;
  }

  // max_ips_per_nic - computed: true, optional: true, required: false
  private _maxIpsPerNic?: string; 
  public get maxIpsPerNic() {
    return this.getStringAttribute('max_ips_per_nic');
  }
  public set maxIpsPerNic(value: string) {
    this._maxIpsPerNic = value;
  }
  public resetMaxIpsPerNic() {
    this._maxIpsPerNic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxIpsPerNicInput() {
    return this._maxIpsPerNic;
  }

  // max_nics - computed: true, optional: true, required: false
  private _maxNics?: string; 
  public get maxNics() {
    return this.getStringAttribute('max_nics');
  }
  public set maxNics(value: string) {
    this._maxNics = value;
  }
  public resetMaxNics() {
    this._maxNics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxNicsInput() {
    return this._maxNics;
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

  // public - computed: false, optional: true, required: false
  private _public?: string; 
  public get public() {
    return this.getStringAttribute('public');
  }
  public set public(value: string) {
    this._public = value;
  }
  public resetPublic() {
    this._public = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicInput() {
    return this._public;
  }

  // ram_mb - computed: true, optional: true, required: false
  private _ramMb?: string; 
  public get ramMb() {
    return this.getStringAttribute('ram_mb');
  }
  public set ramMb(value: string) {
    this._ramMb = value;
  }
  public resetRamMb() {
    this._ramMb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ramMbInput() {
    return this._ramMb;
  }

  // vcpus - computed: true, optional: true, required: false
  private _vcpus?: string; 
  public get vcpus() {
    return this.getStringAttribute('vcpus');
  }
  public set vcpus(value: string) {
    this._vcpus = value;
  }
  public resetVcpus() {
    this._vcpus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vcpusInput() {
    return this._vcpus;
  }

  // meta - computed: false, optional: true, required: false
  private _meta = new ServiceenginegroupInstanceFlavorInfoMetaList(this, "meta", false);
  public get meta() {
    return this._meta;
  }
  public putMeta(value: ServiceenginegroupInstanceFlavorInfoMeta[] | cdktf.IResolvable) {
    this._meta.internalValue = value;
  }
  public resetMeta() {
    this._meta.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metaInput() {
    return this._meta.internalValue;
  }
}

export class ServiceenginegroupInstanceFlavorInfoList extends cdktf.ComplexList {
  public internalValue? : ServiceenginegroupInstanceFlavorInfo[] | cdktf.IResolvable

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
  public get(index: number): ServiceenginegroupInstanceFlavorInfoOutputReference {
    return new ServiceenginegroupInstanceFlavorInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceenginegroupIptablesRulesDnatIp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#addr Serviceenginegroup#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#type Serviceenginegroup#type}
  */
  readonly type: string;
}

export function serviceenginegroupIptablesRulesDnatIpToTerraform(struct?: ServiceenginegroupIptablesRulesDnatIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function serviceenginegroupIptablesRulesDnatIpToHclTerraform(struct?: ServiceenginegroupIptablesRulesDnatIp | cdktf.IResolvable): any {
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

export class ServiceenginegroupIptablesRulesDnatIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceenginegroupIptablesRulesDnatIp | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ServiceenginegroupIptablesRulesDnatIp | cdktf.IResolvable | undefined) {
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

export class ServiceenginegroupIptablesRulesDnatIpList extends cdktf.ComplexList {
  public internalValue? : ServiceenginegroupIptablesRulesDnatIp[] | cdktf.IResolvable

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
  public get(index: number): ServiceenginegroupIptablesRulesDnatIpOutputReference {
    return new ServiceenginegroupIptablesRulesDnatIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceenginegroupIptablesRulesDstIpIpAddr {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#addr Serviceenginegroup#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#type Serviceenginegroup#type}
  */
  readonly type: string;
}

export function serviceenginegroupIptablesRulesDstIpIpAddrToTerraform(struct?: ServiceenginegroupIptablesRulesDstIpIpAddr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function serviceenginegroupIptablesRulesDstIpIpAddrToHclTerraform(struct?: ServiceenginegroupIptablesRulesDstIpIpAddr | cdktf.IResolvable): any {
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

export class ServiceenginegroupIptablesRulesDstIpIpAddrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceenginegroupIptablesRulesDstIpIpAddr | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ServiceenginegroupIptablesRulesDstIpIpAddr | cdktf.IResolvable | undefined) {
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

export class ServiceenginegroupIptablesRulesDstIpIpAddrList extends cdktf.ComplexList {
  public internalValue? : ServiceenginegroupIptablesRulesDstIpIpAddr[] | cdktf.IResolvable

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
  public get(index: number): ServiceenginegroupIptablesRulesDstIpIpAddrOutputReference {
    return new ServiceenginegroupIptablesRulesDstIpIpAddrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceenginegroupIptablesRulesDstIp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#mask Serviceenginegroup#mask}
  */
  readonly mask: string;
  /**
  * ip_addr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#ip_addr Serviceenginegroup#ip_addr}
  */
  readonly ipAddr: ServiceenginegroupIptablesRulesDstIpIpAddr[] | cdktf.IResolvable;
}

export function serviceenginegroupIptablesRulesDstIpToTerraform(struct?: ServiceenginegroupIptablesRulesDstIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mask: cdktf.stringToTerraform(struct!.mask),
    ip_addr: cdktf.listMapper(serviceenginegroupIptablesRulesDstIpIpAddrToTerraform, true)(struct!.ipAddr),
  }
}


export function serviceenginegroupIptablesRulesDstIpToHclTerraform(struct?: ServiceenginegroupIptablesRulesDstIp | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(serviceenginegroupIptablesRulesDstIpIpAddrToHclTerraform, true)(struct!.ipAddr),
      isBlock: true,
      type: "set",
      storageClassType: "ServiceenginegroupIptablesRulesDstIpIpAddrList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceenginegroupIptablesRulesDstIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceenginegroupIptablesRulesDstIp | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ServiceenginegroupIptablesRulesDstIp | cdktf.IResolvable | undefined) {
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
  private _ipAddr = new ServiceenginegroupIptablesRulesDstIpIpAddrList(this, "ip_addr", true);
  public get ipAddr() {
    return this._ipAddr;
  }
  public putIpAddr(value: ServiceenginegroupIptablesRulesDstIpIpAddr[] | cdktf.IResolvable) {
    this._ipAddr.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddrInput() {
    return this._ipAddr.internalValue;
  }
}

export class ServiceenginegroupIptablesRulesDstIpList extends cdktf.ComplexList {
  public internalValue? : ServiceenginegroupIptablesRulesDstIp[] | cdktf.IResolvable

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
  public get(index: number): ServiceenginegroupIptablesRulesDstIpOutputReference {
    return new ServiceenginegroupIptablesRulesDstIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceenginegroupIptablesRulesDstPort {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#end Serviceenginegroup#end}
  */
  readonly end: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#start Serviceenginegroup#start}
  */
  readonly start: string;
}

export function serviceenginegroupIptablesRulesDstPortToTerraform(struct?: ServiceenginegroupIptablesRulesDstPort | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end: cdktf.stringToTerraform(struct!.end),
    start: cdktf.stringToTerraform(struct!.start),
  }
}


export function serviceenginegroupIptablesRulesDstPortToHclTerraform(struct?: ServiceenginegroupIptablesRulesDstPort | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end: {
      value: cdktf.stringToHclTerraform(struct!.end),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start: {
      value: cdktf.stringToHclTerraform(struct!.start),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceenginegroupIptablesRulesDstPortOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceenginegroupIptablesRulesDstPort | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._end !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceenginegroupIptablesRulesDstPort | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._end = undefined;
      this._start = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._end = value.end;
      this._start = value.start;
    }
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

  // start - computed: false, optional: false, required: true
  private _start?: string; 
  public get start() {
    return this.getStringAttribute('start');
  }
  public set start(value: string) {
    this._start = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }
}

export class ServiceenginegroupIptablesRulesDstPortList extends cdktf.ComplexList {
  public internalValue? : ServiceenginegroupIptablesRulesDstPort[] | cdktf.IResolvable

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
  public get(index: number): ServiceenginegroupIptablesRulesDstPortOutputReference {
    return new ServiceenginegroupIptablesRulesDstPortOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceenginegroupIptablesRulesSrcIpIpAddr {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#addr Serviceenginegroup#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#type Serviceenginegroup#type}
  */
  readonly type: string;
}

export function serviceenginegroupIptablesRulesSrcIpIpAddrToTerraform(struct?: ServiceenginegroupIptablesRulesSrcIpIpAddr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function serviceenginegroupIptablesRulesSrcIpIpAddrToHclTerraform(struct?: ServiceenginegroupIptablesRulesSrcIpIpAddr | cdktf.IResolvable): any {
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

export class ServiceenginegroupIptablesRulesSrcIpIpAddrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceenginegroupIptablesRulesSrcIpIpAddr | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ServiceenginegroupIptablesRulesSrcIpIpAddr | cdktf.IResolvable | undefined) {
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

export class ServiceenginegroupIptablesRulesSrcIpIpAddrList extends cdktf.ComplexList {
  public internalValue? : ServiceenginegroupIptablesRulesSrcIpIpAddr[] | cdktf.IResolvable

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
  public get(index: number): ServiceenginegroupIptablesRulesSrcIpIpAddrOutputReference {
    return new ServiceenginegroupIptablesRulesSrcIpIpAddrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceenginegroupIptablesRulesSrcIp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#mask Serviceenginegroup#mask}
  */
  readonly mask: string;
  /**
  * ip_addr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#ip_addr Serviceenginegroup#ip_addr}
  */
  readonly ipAddr: ServiceenginegroupIptablesRulesSrcIpIpAddr[] | cdktf.IResolvable;
}

export function serviceenginegroupIptablesRulesSrcIpToTerraform(struct?: ServiceenginegroupIptablesRulesSrcIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mask: cdktf.stringToTerraform(struct!.mask),
    ip_addr: cdktf.listMapper(serviceenginegroupIptablesRulesSrcIpIpAddrToTerraform, true)(struct!.ipAddr),
  }
}


export function serviceenginegroupIptablesRulesSrcIpToHclTerraform(struct?: ServiceenginegroupIptablesRulesSrcIp | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(serviceenginegroupIptablesRulesSrcIpIpAddrToHclTerraform, true)(struct!.ipAddr),
      isBlock: true,
      type: "set",
      storageClassType: "ServiceenginegroupIptablesRulesSrcIpIpAddrList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceenginegroupIptablesRulesSrcIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceenginegroupIptablesRulesSrcIp | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ServiceenginegroupIptablesRulesSrcIp | cdktf.IResolvable | undefined) {
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
  private _ipAddr = new ServiceenginegroupIptablesRulesSrcIpIpAddrList(this, "ip_addr", true);
  public get ipAddr() {
    return this._ipAddr;
  }
  public putIpAddr(value: ServiceenginegroupIptablesRulesSrcIpIpAddr[] | cdktf.IResolvable) {
    this._ipAddr.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddrInput() {
    return this._ipAddr.internalValue;
  }
}

export class ServiceenginegroupIptablesRulesSrcIpList extends cdktf.ComplexList {
  public internalValue? : ServiceenginegroupIptablesRulesSrcIp[] | cdktf.IResolvable

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
  public get(index: number): ServiceenginegroupIptablesRulesSrcIpOutputReference {
    return new ServiceenginegroupIptablesRulesSrcIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceenginegroupIptablesRulesSrcPort {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#end Serviceenginegroup#end}
  */
  readonly end: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#start Serviceenginegroup#start}
  */
  readonly start: string;
}

export function serviceenginegroupIptablesRulesSrcPortToTerraform(struct?: ServiceenginegroupIptablesRulesSrcPort | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end: cdktf.stringToTerraform(struct!.end),
    start: cdktf.stringToTerraform(struct!.start),
  }
}


export function serviceenginegroupIptablesRulesSrcPortToHclTerraform(struct?: ServiceenginegroupIptablesRulesSrcPort | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end: {
      value: cdktf.stringToHclTerraform(struct!.end),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start: {
      value: cdktf.stringToHclTerraform(struct!.start),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceenginegroupIptablesRulesSrcPortOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceenginegroupIptablesRulesSrcPort | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._end !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceenginegroupIptablesRulesSrcPort | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._end = undefined;
      this._start = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._end = value.end;
      this._start = value.start;
    }
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

  // start - computed: false, optional: false, required: true
  private _start?: string; 
  public get start() {
    return this.getStringAttribute('start');
  }
  public set start(value: string) {
    this._start = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }
}

export class ServiceenginegroupIptablesRulesSrcPortList extends cdktf.ComplexList {
  public internalValue? : ServiceenginegroupIptablesRulesSrcPort[] | cdktf.IResolvable

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
  public get(index: number): ServiceenginegroupIptablesRulesSrcPortOutputReference {
    return new ServiceenginegroupIptablesRulesSrcPortOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceenginegroupIptablesRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#action Serviceenginegroup#action}
  */
  readonly action: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#input_interface Serviceenginegroup#input_interface}
  */
  readonly inputInterface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#output_interface Serviceenginegroup#output_interface}
  */
  readonly outputInterface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#proto Serviceenginegroup#proto}
  */
  readonly proto?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#tag Serviceenginegroup#tag}
  */
  readonly tag?: string;
  /**
  * dnat_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#dnat_ip Serviceenginegroup#dnat_ip}
  */
  readonly dnatIp?: ServiceenginegroupIptablesRulesDnatIp[] | cdktf.IResolvable;
  /**
  * dst_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#dst_ip Serviceenginegroup#dst_ip}
  */
  readonly dstIp?: ServiceenginegroupIptablesRulesDstIp[] | cdktf.IResolvable;
  /**
  * dst_port block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#dst_port Serviceenginegroup#dst_port}
  */
  readonly dstPort?: ServiceenginegroupIptablesRulesDstPort[] | cdktf.IResolvable;
  /**
  * src_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#src_ip Serviceenginegroup#src_ip}
  */
  readonly srcIp?: ServiceenginegroupIptablesRulesSrcIp[] | cdktf.IResolvable;
  /**
  * src_port block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#src_port Serviceenginegroup#src_port}
  */
  readonly srcPort?: ServiceenginegroupIptablesRulesSrcPort[] | cdktf.IResolvable;
}

export function serviceenginegroupIptablesRulesToTerraform(struct?: ServiceenginegroupIptablesRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    input_interface: cdktf.stringToTerraform(struct!.inputInterface),
    output_interface: cdktf.stringToTerraform(struct!.outputInterface),
    proto: cdktf.stringToTerraform(struct!.proto),
    tag: cdktf.stringToTerraform(struct!.tag),
    dnat_ip: cdktf.listMapper(serviceenginegroupIptablesRulesDnatIpToTerraform, true)(struct!.dnatIp),
    dst_ip: cdktf.listMapper(serviceenginegroupIptablesRulesDstIpToTerraform, true)(struct!.dstIp),
    dst_port: cdktf.listMapper(serviceenginegroupIptablesRulesDstPortToTerraform, true)(struct!.dstPort),
    src_ip: cdktf.listMapper(serviceenginegroupIptablesRulesSrcIpToTerraform, true)(struct!.srcIp),
    src_port: cdktf.listMapper(serviceenginegroupIptablesRulesSrcPortToTerraform, true)(struct!.srcPort),
  }
}


export function serviceenginegroupIptablesRulesToHclTerraform(struct?: ServiceenginegroupIptablesRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    input_interface: {
      value: cdktf.stringToHclTerraform(struct!.inputInterface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    output_interface: {
      value: cdktf.stringToHclTerraform(struct!.outputInterface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proto: {
      value: cdktf.stringToHclTerraform(struct!.proto),
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
    dnat_ip: {
      value: cdktf.listMapperHcl(serviceenginegroupIptablesRulesDnatIpToHclTerraform, true)(struct!.dnatIp),
      isBlock: true,
      type: "set",
      storageClassType: "ServiceenginegroupIptablesRulesDnatIpList",
    },
    dst_ip: {
      value: cdktf.listMapperHcl(serviceenginegroupIptablesRulesDstIpToHclTerraform, true)(struct!.dstIp),
      isBlock: true,
      type: "set",
      storageClassType: "ServiceenginegroupIptablesRulesDstIpList",
    },
    dst_port: {
      value: cdktf.listMapperHcl(serviceenginegroupIptablesRulesDstPortToHclTerraform, true)(struct!.dstPort),
      isBlock: true,
      type: "set",
      storageClassType: "ServiceenginegroupIptablesRulesDstPortList",
    },
    src_ip: {
      value: cdktf.listMapperHcl(serviceenginegroupIptablesRulesSrcIpToHclTerraform, true)(struct!.srcIp),
      isBlock: true,
      type: "set",
      storageClassType: "ServiceenginegroupIptablesRulesSrcIpList",
    },
    src_port: {
      value: cdktf.listMapperHcl(serviceenginegroupIptablesRulesSrcPortToHclTerraform, true)(struct!.srcPort),
      isBlock: true,
      type: "set",
      storageClassType: "ServiceenginegroupIptablesRulesSrcPortList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceenginegroupIptablesRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceenginegroupIptablesRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._inputInterface !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputInterface = this._inputInterface;
    }
    if (this._outputInterface !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputInterface = this._outputInterface;
    }
    if (this._proto !== undefined) {
      hasAnyValues = true;
      internalValueResult.proto = this._proto;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    if (this._dnatIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnatIp = this._dnatIp?.internalValue;
    }
    if (this._dstIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstIp = this._dstIp?.internalValue;
    }
    if (this._dstPort?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstPort = this._dstPort?.internalValue;
    }
    if (this._srcIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcIp = this._srcIp?.internalValue;
    }
    if (this._srcPort?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcPort = this._srcPort?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceenginegroupIptablesRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._inputInterface = undefined;
      this._outputInterface = undefined;
      this._proto = undefined;
      this._tag = undefined;
      this._dnatIp.internalValue = undefined;
      this._dstIp.internalValue = undefined;
      this._dstPort.internalValue = undefined;
      this._srcIp.internalValue = undefined;
      this._srcPort.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._inputInterface = value.inputInterface;
      this._outputInterface = value.outputInterface;
      this._proto = value.proto;
      this._tag = value.tag;
      this._dnatIp.internalValue = value.dnatIp;
      this._dstIp.internalValue = value.dstIp;
      this._dstPort.internalValue = value.dstPort;
      this._srcIp.internalValue = value.srcIp;
      this._srcPort.internalValue = value.srcPort;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // input_interface - computed: true, optional: true, required: false
  private _inputInterface?: string; 
  public get inputInterface() {
    return this.getStringAttribute('input_interface');
  }
  public set inputInterface(value: string) {
    this._inputInterface = value;
  }
  public resetInputInterface() {
    this._inputInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputInterfaceInput() {
    return this._inputInterface;
  }

  // output_interface - computed: true, optional: true, required: false
  private _outputInterface?: string; 
  public get outputInterface() {
    return this.getStringAttribute('output_interface');
  }
  public set outputInterface(value: string) {
    this._outputInterface = value;
  }
  public resetOutputInterface() {
    this._outputInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputInterfaceInput() {
    return this._outputInterface;
  }

  // proto - computed: true, optional: true, required: false
  private _proto?: string; 
  public get proto() {
    return this.getStringAttribute('proto');
  }
  public set proto(value: string) {
    this._proto = value;
  }
  public resetProto() {
    this._proto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protoInput() {
    return this._proto;
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

  // dnat_ip - computed: false, optional: true, required: false
  private _dnatIp = new ServiceenginegroupIptablesRulesDnatIpList(this, "dnat_ip", true);
  public get dnatIp() {
    return this._dnatIp;
  }
  public putDnatIp(value: ServiceenginegroupIptablesRulesDnatIp[] | cdktf.IResolvable) {
    this._dnatIp.internalValue = value;
  }
  public resetDnatIp() {
    this._dnatIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnatIpInput() {
    return this._dnatIp.internalValue;
  }

  // dst_ip - computed: false, optional: true, required: false
  private _dstIp = new ServiceenginegroupIptablesRulesDstIpList(this, "dst_ip", true);
  public get dstIp() {
    return this._dstIp;
  }
  public putDstIp(value: ServiceenginegroupIptablesRulesDstIp[] | cdktf.IResolvable) {
    this._dstIp.internalValue = value;
  }
  public resetDstIp() {
    this._dstIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstIpInput() {
    return this._dstIp.internalValue;
  }

  // dst_port - computed: false, optional: true, required: false
  private _dstPort = new ServiceenginegroupIptablesRulesDstPortList(this, "dst_port", true);
  public get dstPort() {
    return this._dstPort;
  }
  public putDstPort(value: ServiceenginegroupIptablesRulesDstPort[] | cdktf.IResolvable) {
    this._dstPort.internalValue = value;
  }
  public resetDstPort() {
    this._dstPort.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstPortInput() {
    return this._dstPort.internalValue;
  }

  // src_ip - computed: false, optional: true, required: false
  private _srcIp = new ServiceenginegroupIptablesRulesSrcIpList(this, "src_ip", true);
  public get srcIp() {
    return this._srcIp;
  }
  public putSrcIp(value: ServiceenginegroupIptablesRulesSrcIp[] | cdktf.IResolvable) {
    this._srcIp.internalValue = value;
  }
  public resetSrcIp() {
    this._srcIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcIpInput() {
    return this._srcIp.internalValue;
  }

  // src_port - computed: false, optional: true, required: false
  private _srcPort = new ServiceenginegroupIptablesRulesSrcPortList(this, "src_port", true);
  public get srcPort() {
    return this._srcPort;
  }
  public putSrcPort(value: ServiceenginegroupIptablesRulesSrcPort[] | cdktf.IResolvable) {
    this._srcPort.internalValue = value;
  }
  public resetSrcPort() {
    this._srcPort.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcPortInput() {
    return this._srcPort.internalValue;
  }
}

export class ServiceenginegroupIptablesRulesList extends cdktf.ComplexList {
  public internalValue? : ServiceenginegroupIptablesRules[] | cdktf.IResolvable

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
  public get(index: number): ServiceenginegroupIptablesRulesOutputReference {
    return new ServiceenginegroupIptablesRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceenginegroupIptables {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#chain Serviceenginegroup#chain}
  */
  readonly chain: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#table Serviceenginegroup#table}
  */
  readonly table: string;
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#rules Serviceenginegroup#rules}
  */
  readonly rules?: ServiceenginegroupIptablesRules[] | cdktf.IResolvable;
}

export function serviceenginegroupIptablesToTerraform(struct?: ServiceenginegroupIptables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    chain: cdktf.stringToTerraform(struct!.chain),
    table: cdktf.stringToTerraform(struct!.table),
    rules: cdktf.listMapper(serviceenginegroupIptablesRulesToTerraform, true)(struct!.rules),
  }
}


export function serviceenginegroupIptablesToHclTerraform(struct?: ServiceenginegroupIptables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    chain: {
      value: cdktf.stringToHclTerraform(struct!.chain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table: {
      value: cdktf.stringToHclTerraform(struct!.table),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rules: {
      value: cdktf.listMapperHcl(serviceenginegroupIptablesRulesToHclTerraform, true)(struct!.rules),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceenginegroupIptablesRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceenginegroupIptablesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceenginegroupIptables | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._chain !== undefined) {
      hasAnyValues = true;
      internalValueResult.chain = this._chain;
    }
    if (this._table !== undefined) {
      hasAnyValues = true;
      internalValueResult.table = this._table;
    }
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceenginegroupIptables | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._chain = undefined;
      this._table = undefined;
      this._rules.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._chain = value.chain;
      this._table = value.table;
      this._rules.internalValue = value.rules;
    }
  }

  // chain - computed: false, optional: false, required: true
  private _chain?: string; 
  public get chain() {
    return this.getStringAttribute('chain');
  }
  public set chain(value: string) {
    this._chain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get chainInput() {
    return this._chain;
  }

  // table - computed: false, optional: false, required: true
  private _table?: string; 
  public get table() {
    return this.getStringAttribute('table');
  }
  public set table(value: string) {
    this._table = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableInput() {
    return this._table;
  }

  // rules - computed: false, optional: true, required: false
  private _rules = new ServiceenginegroupIptablesRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: ServiceenginegroupIptablesRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  public resetRules() {
    this._rules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }
}

export class ServiceenginegroupIptablesList extends cdktf.ComplexList {
  public internalValue? : ServiceenginegroupIptables[] | cdktf.IResolvable

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
  public get(index: number): ServiceenginegroupIptablesOutputReference {
    return new ServiceenginegroupIptablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceenginegroupKniAllowedServerPortsRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#end Serviceenginegroup#end}
  */
  readonly end: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#start Serviceenginegroup#start}
  */
  readonly start: string;
}

export function serviceenginegroupKniAllowedServerPortsRangeToTerraform(struct?: ServiceenginegroupKniAllowedServerPortsRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end: cdktf.stringToTerraform(struct!.end),
    start: cdktf.stringToTerraform(struct!.start),
  }
}


export function serviceenginegroupKniAllowedServerPortsRangeToHclTerraform(struct?: ServiceenginegroupKniAllowedServerPortsRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end: {
      value: cdktf.stringToHclTerraform(struct!.end),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start: {
      value: cdktf.stringToHclTerraform(struct!.start),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceenginegroupKniAllowedServerPortsRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceenginegroupKniAllowedServerPortsRange | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._end !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceenginegroupKniAllowedServerPortsRange | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._end = undefined;
      this._start = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._end = value.end;
      this._start = value.start;
    }
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

  // start - computed: false, optional: false, required: true
  private _start?: string; 
  public get start() {
    return this.getStringAttribute('start');
  }
  public set start(value: string) {
    this._start = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }
}

export class ServiceenginegroupKniAllowedServerPortsRangeList extends cdktf.ComplexList {
  public internalValue? : ServiceenginegroupKniAllowedServerPortsRange[] | cdktf.IResolvable

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
  public get(index: number): ServiceenginegroupKniAllowedServerPortsRangeOutputReference {
    return new ServiceenginegroupKniAllowedServerPortsRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceenginegroupKniAllowedServerPorts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#protocol Serviceenginegroup#protocol}
  */
  readonly protocol: string;
  /**
  * range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#range Serviceenginegroup#range}
  */
  readonly range: ServiceenginegroupKniAllowedServerPortsRange[] | cdktf.IResolvable;
}

export function serviceenginegroupKniAllowedServerPortsToTerraform(struct?: ServiceenginegroupKniAllowedServerPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    protocol: cdktf.stringToTerraform(struct!.protocol),
    range: cdktf.listMapper(serviceenginegroupKniAllowedServerPortsRangeToTerraform, true)(struct!.range),
  }
}


export function serviceenginegroupKniAllowedServerPortsToHclTerraform(struct?: ServiceenginegroupKniAllowedServerPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    range: {
      value: cdktf.listMapperHcl(serviceenginegroupKniAllowedServerPortsRangeToHclTerraform, true)(struct!.range),
      isBlock: true,
      type: "set",
      storageClassType: "ServiceenginegroupKniAllowedServerPortsRangeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceenginegroupKniAllowedServerPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceenginegroupKniAllowedServerPorts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._range?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.range = this._range?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceenginegroupKniAllowedServerPorts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._protocol = undefined;
      this._range.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._protocol = value.protocol;
      this._range.internalValue = value.range;
    }
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

  // range - computed: false, optional: false, required: true
  private _range = new ServiceenginegroupKniAllowedServerPortsRangeList(this, "range", true);
  public get range() {
    return this._range;
  }
  public putRange(value: ServiceenginegroupKniAllowedServerPortsRange[] | cdktf.IResolvable) {
    this._range.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeInput() {
    return this._range.internalValue;
  }
}

export class ServiceenginegroupKniAllowedServerPortsList extends cdktf.ComplexList {
  public internalValue? : ServiceenginegroupKniAllowedServerPorts[] | cdktf.IResolvable

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
  public get(index: number): ServiceenginegroupKniAllowedServerPortsOutputReference {
    return new ServiceenginegroupKniAllowedServerPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceenginegroupLabels {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#key Serviceenginegroup#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#value Serviceenginegroup#value}
  */
  readonly value?: string;
}

export function serviceenginegroupLabelsToTerraform(struct?: ServiceenginegroupLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function serviceenginegroupLabelsToHclTerraform(struct?: ServiceenginegroupLabels | cdktf.IResolvable): any {
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceenginegroupLabelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceenginegroupLabels | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceenginegroupLabels | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
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

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ServiceenginegroupLabelsList extends cdktf.ComplexList {
  public internalValue? : ServiceenginegroupLabels[] | cdktf.IResolvable

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
  public get(index: number): ServiceenginegroupLabelsOutputReference {
    return new ServiceenginegroupLabelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceenginegroupMarkers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#key Serviceenginegroup#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#values Serviceenginegroup#values}
  */
  readonly values?: string[];
}

export function serviceenginegroupMarkersToTerraform(struct?: ServiceenginegroupMarkers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function serviceenginegroupMarkersToHclTerraform(struct?: ServiceenginegroupMarkers | cdktf.IResolvable): any {
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

export class ServiceenginegroupMarkersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceenginegroupMarkers | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ServiceenginegroupMarkers | cdktf.IResolvable | undefined) {
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

export class ServiceenginegroupMarkersList extends cdktf.ComplexList {
  public internalValue? : ServiceenginegroupMarkers[] | cdktf.IResolvable

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
  public get(index: number): ServiceenginegroupMarkersOutputReference {
    return new ServiceenginegroupMarkersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceenginegroupMgmtSubnetIpAddr {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#addr Serviceenginegroup#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#type Serviceenginegroup#type}
  */
  readonly type: string;
}

export function serviceenginegroupMgmtSubnetIpAddrToTerraform(struct?: ServiceenginegroupMgmtSubnetIpAddr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function serviceenginegroupMgmtSubnetIpAddrToHclTerraform(struct?: ServiceenginegroupMgmtSubnetIpAddr | cdktf.IResolvable): any {
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

export class ServiceenginegroupMgmtSubnetIpAddrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceenginegroupMgmtSubnetIpAddr | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ServiceenginegroupMgmtSubnetIpAddr | cdktf.IResolvable | undefined) {
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

export class ServiceenginegroupMgmtSubnetIpAddrList extends cdktf.ComplexList {
  public internalValue? : ServiceenginegroupMgmtSubnetIpAddr[] | cdktf.IResolvable

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
  public get(index: number): ServiceenginegroupMgmtSubnetIpAddrOutputReference {
    return new ServiceenginegroupMgmtSubnetIpAddrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceenginegroupMgmtSubnet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#mask Serviceenginegroup#mask}
  */
  readonly mask: string;
  /**
  * ip_addr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#ip_addr Serviceenginegroup#ip_addr}
  */
  readonly ipAddr: ServiceenginegroupMgmtSubnetIpAddr[] | cdktf.IResolvable;
}

export function serviceenginegroupMgmtSubnetToTerraform(struct?: ServiceenginegroupMgmtSubnet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mask: cdktf.stringToTerraform(struct!.mask),
    ip_addr: cdktf.listMapper(serviceenginegroupMgmtSubnetIpAddrToTerraform, true)(struct!.ipAddr),
  }
}


export function serviceenginegroupMgmtSubnetToHclTerraform(struct?: ServiceenginegroupMgmtSubnet | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(serviceenginegroupMgmtSubnetIpAddrToHclTerraform, true)(struct!.ipAddr),
      isBlock: true,
      type: "set",
      storageClassType: "ServiceenginegroupMgmtSubnetIpAddrList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceenginegroupMgmtSubnetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceenginegroupMgmtSubnet | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ServiceenginegroupMgmtSubnet | cdktf.IResolvable | undefined) {
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
  private _ipAddr = new ServiceenginegroupMgmtSubnetIpAddrList(this, "ip_addr", true);
  public get ipAddr() {
    return this._ipAddr;
  }
  public putIpAddr(value: ServiceenginegroupMgmtSubnetIpAddr[] | cdktf.IResolvable) {
    this._ipAddr.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddrInput() {
    return this._ipAddr.internalValue;
  }
}

export class ServiceenginegroupMgmtSubnetList extends cdktf.ComplexList {
  public internalValue? : ServiceenginegroupMgmtSubnet[] | cdktf.IResolvable

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
  public get(index: number): ServiceenginegroupMgmtSubnetOutputReference {
    return new ServiceenginegroupMgmtSubnetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceenginegroupObjsyncConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#objsync_cpu_limit Serviceenginegroup#objsync_cpu_limit}
  */
  readonly objsyncCpuLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#objsync_hub_elect_interval Serviceenginegroup#objsync_hub_elect_interval}
  */
  readonly objsyncHubElectInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#objsync_reconcile_interval Serviceenginegroup#objsync_reconcile_interval}
  */
  readonly objsyncReconcileInterval?: string;
}

export function serviceenginegroupObjsyncConfigToTerraform(struct?: ServiceenginegroupObjsyncConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    objsync_cpu_limit: cdktf.stringToTerraform(struct!.objsyncCpuLimit),
    objsync_hub_elect_interval: cdktf.stringToTerraform(struct!.objsyncHubElectInterval),
    objsync_reconcile_interval: cdktf.stringToTerraform(struct!.objsyncReconcileInterval),
  }
}


export function serviceenginegroupObjsyncConfigToHclTerraform(struct?: ServiceenginegroupObjsyncConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    objsync_cpu_limit: {
      value: cdktf.stringToHclTerraform(struct!.objsyncCpuLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    objsync_hub_elect_interval: {
      value: cdktf.stringToHclTerraform(struct!.objsyncHubElectInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    objsync_reconcile_interval: {
      value: cdktf.stringToHclTerraform(struct!.objsyncReconcileInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceenginegroupObjsyncConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceenginegroupObjsyncConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._objsyncCpuLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.objsyncCpuLimit = this._objsyncCpuLimit;
    }
    if (this._objsyncHubElectInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.objsyncHubElectInterval = this._objsyncHubElectInterval;
    }
    if (this._objsyncReconcileInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.objsyncReconcileInterval = this._objsyncReconcileInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceenginegroupObjsyncConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._objsyncCpuLimit = undefined;
      this._objsyncHubElectInterval = undefined;
      this._objsyncReconcileInterval = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._objsyncCpuLimit = value.objsyncCpuLimit;
      this._objsyncHubElectInterval = value.objsyncHubElectInterval;
      this._objsyncReconcileInterval = value.objsyncReconcileInterval;
    }
  }

  // objsync_cpu_limit - computed: false, optional: true, required: false
  private _objsyncCpuLimit?: string; 
  public get objsyncCpuLimit() {
    return this.getStringAttribute('objsync_cpu_limit');
  }
  public set objsyncCpuLimit(value: string) {
    this._objsyncCpuLimit = value;
  }
  public resetObjsyncCpuLimit() {
    this._objsyncCpuLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objsyncCpuLimitInput() {
    return this._objsyncCpuLimit;
  }

  // objsync_hub_elect_interval - computed: false, optional: true, required: false
  private _objsyncHubElectInterval?: string; 
  public get objsyncHubElectInterval() {
    return this.getStringAttribute('objsync_hub_elect_interval');
  }
  public set objsyncHubElectInterval(value: string) {
    this._objsyncHubElectInterval = value;
  }
  public resetObjsyncHubElectInterval() {
    this._objsyncHubElectInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objsyncHubElectIntervalInput() {
    return this._objsyncHubElectInterval;
  }

  // objsync_reconcile_interval - computed: false, optional: true, required: false
  private _objsyncReconcileInterval?: string; 
  public get objsyncReconcileInterval() {
    return this.getStringAttribute('objsync_reconcile_interval');
  }
  public set objsyncReconcileInterval(value: string) {
    this._objsyncReconcileInterval = value;
  }
  public resetObjsyncReconcileInterval() {
    this._objsyncReconcileInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objsyncReconcileIntervalInput() {
    return this._objsyncReconcileInterval;
  }
}

export class ServiceenginegroupObjsyncConfigList extends cdktf.ComplexList {
  public internalValue? : ServiceenginegroupObjsyncConfig[] | cdktf.IResolvable

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
  public get(index: number): ServiceenginegroupObjsyncConfigOutputReference {
    return new ServiceenginegroupObjsyncConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceenginegroupRealtimeSeMetrics {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#duration Serviceenginegroup#duration}
  */
  readonly duration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#enabled Serviceenginegroup#enabled}
  */
  readonly enabled: string;
}

export function serviceenginegroupRealtimeSeMetricsToTerraform(struct?: ServiceenginegroupRealtimeSeMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.stringToTerraform(struct!.duration),
    enabled: cdktf.stringToTerraform(struct!.enabled),
  }
}


export function serviceenginegroupRealtimeSeMetricsToHclTerraform(struct?: ServiceenginegroupRealtimeSeMetrics | cdktf.IResolvable): any {
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

export class ServiceenginegroupRealtimeSeMetricsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceenginegroupRealtimeSeMetrics | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ServiceenginegroupRealtimeSeMetrics | cdktf.IResolvable | undefined) {
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

export class ServiceenginegroupRealtimeSeMetricsList extends cdktf.ComplexList {
  public internalValue? : ServiceenginegroupRealtimeSeMetrics[] | cdktf.IResolvable

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
  public get(index: number): ServiceenginegroupRealtimeSeMetricsOutputReference {
    return new ServiceenginegroupRealtimeSeMetricsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceenginegroupSeDosProfileThreshInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#attack Serviceenginegroup#attack}
  */
  readonly attack: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#max_value Serviceenginegroup#max_value}
  */
  readonly maxValue: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#min_value Serviceenginegroup#min_value}
  */
  readonly minValue: string;
}

export function serviceenginegroupSeDosProfileThreshInfoToTerraform(struct?: ServiceenginegroupSeDosProfileThreshInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attack: cdktf.stringToTerraform(struct!.attack),
    max_value: cdktf.stringToTerraform(struct!.maxValue),
    min_value: cdktf.stringToTerraform(struct!.minValue),
  }
}


export function serviceenginegroupSeDosProfileThreshInfoToHclTerraform(struct?: ServiceenginegroupSeDosProfileThreshInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attack: {
      value: cdktf.stringToHclTerraform(struct!.attack),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_value: {
      value: cdktf.stringToHclTerraform(struct!.maxValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_value: {
      value: cdktf.stringToHclTerraform(struct!.minValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceenginegroupSeDosProfileThreshInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceenginegroupSeDosProfileThreshInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attack !== undefined) {
      hasAnyValues = true;
      internalValueResult.attack = this._attack;
    }
    if (this._maxValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxValue = this._maxValue;
    }
    if (this._minValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.minValue = this._minValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceenginegroupSeDosProfileThreshInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attack = undefined;
      this._maxValue = undefined;
      this._minValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attack = value.attack;
      this._maxValue = value.maxValue;
      this._minValue = value.minValue;
    }
  }

  // attack - computed: false, optional: false, required: true
  private _attack?: string; 
  public get attack() {
    return this.getStringAttribute('attack');
  }
  public set attack(value: string) {
    this._attack = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attackInput() {
    return this._attack;
  }

  // max_value - computed: false, optional: false, required: true
  private _maxValue?: string; 
  public get maxValue() {
    return this.getStringAttribute('max_value');
  }
  public set maxValue(value: string) {
    this._maxValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxValueInput() {
    return this._maxValue;
  }

  // min_value - computed: false, optional: false, required: true
  private _minValue?: string; 
  public get minValue() {
    return this.getStringAttribute('min_value');
  }
  public set minValue(value: string) {
    this._minValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minValueInput() {
    return this._minValue;
  }
}

export class ServiceenginegroupSeDosProfileThreshInfoList extends cdktf.ComplexList {
  public internalValue? : ServiceenginegroupSeDosProfileThreshInfo[] | cdktf.IResolvable

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
  public get(index: number): ServiceenginegroupSeDosProfileThreshInfoOutputReference {
    return new ServiceenginegroupSeDosProfileThreshInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceenginegroupSeDosProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#thresh_period Serviceenginegroup#thresh_period}
  */
  readonly threshPeriod: string;
  /**
  * thresh_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#thresh_info Serviceenginegroup#thresh_info}
  */
  readonly threshInfo?: ServiceenginegroupSeDosProfileThreshInfo[] | cdktf.IResolvable;
}

export function serviceenginegroupSeDosProfileToTerraform(struct?: ServiceenginegroupSeDosProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    thresh_period: cdktf.stringToTerraform(struct!.threshPeriod),
    thresh_info: cdktf.listMapper(serviceenginegroupSeDosProfileThreshInfoToTerraform, true)(struct!.threshInfo),
  }
}


export function serviceenginegroupSeDosProfileToHclTerraform(struct?: ServiceenginegroupSeDosProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    thresh_period: {
      value: cdktf.stringToHclTerraform(struct!.threshPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    thresh_info: {
      value: cdktf.listMapperHcl(serviceenginegroupSeDosProfileThreshInfoToHclTerraform, true)(struct!.threshInfo),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceenginegroupSeDosProfileThreshInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceenginegroupSeDosProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceenginegroupSeDosProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._threshPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshPeriod = this._threshPeriod;
    }
    if (this._threshInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshInfo = this._threshInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceenginegroupSeDosProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._threshPeriod = undefined;
      this._threshInfo.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._threshPeriod = value.threshPeriod;
      this._threshInfo.internalValue = value.threshInfo;
    }
  }

  // thresh_period - computed: false, optional: false, required: true
  private _threshPeriod?: string; 
  public get threshPeriod() {
    return this.getStringAttribute('thresh_period');
  }
  public set threshPeriod(value: string) {
    this._threshPeriod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get threshPeriodInput() {
    return this._threshPeriod;
  }

  // thresh_info - computed: false, optional: true, required: false
  private _threshInfo = new ServiceenginegroupSeDosProfileThreshInfoList(this, "thresh_info", false);
  public get threshInfo() {
    return this._threshInfo;
  }
  public putThreshInfo(value: ServiceenginegroupSeDosProfileThreshInfo[] | cdktf.IResolvable) {
    this._threshInfo.internalValue = value;
  }
  public resetThreshInfo() {
    this._threshInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threshInfoInput() {
    return this._threshInfo.internalValue;
  }
}

export class ServiceenginegroupSeDosProfileList extends cdktf.ComplexList {
  public internalValue? : ServiceenginegroupSeDosProfile[] | cdktf.IResolvable

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
  public get(index: number): ServiceenginegroupSeDosProfileOutputReference {
    return new ServiceenginegroupSeDosProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceenginegroupSeGroupAnalyticsPolicyMetricsEventThresholds {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#metrics_event_threshold_type Serviceenginegroup#metrics_event_threshold_type}
  */
  readonly metricsEventThresholdType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#reset_threshold Serviceenginegroup#reset_threshold}
  */
  readonly resetThreshold?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#watermark_thresholds Serviceenginegroup#watermark_thresholds}
  */
  readonly watermarkThresholds?: number[];
}

export function serviceenginegroupSeGroupAnalyticsPolicyMetricsEventThresholdsToTerraform(struct?: ServiceenginegroupSeGroupAnalyticsPolicyMetricsEventThresholds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metrics_event_threshold_type: cdktf.stringToTerraform(struct!.metricsEventThresholdType),
    reset_threshold: cdktf.stringToTerraform(struct!.resetThreshold),
    watermark_thresholds: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.watermarkThresholds),
  }
}


export function serviceenginegroupSeGroupAnalyticsPolicyMetricsEventThresholdsToHclTerraform(struct?: ServiceenginegroupSeGroupAnalyticsPolicyMetricsEventThresholds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metrics_event_threshold_type: {
      value: cdktf.stringToHclTerraform(struct!.metricsEventThresholdType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reset_threshold: {
      value: cdktf.stringToHclTerraform(struct!.resetThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    watermark_thresholds: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.watermarkThresholds),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceenginegroupSeGroupAnalyticsPolicyMetricsEventThresholdsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceenginegroupSeGroupAnalyticsPolicyMetricsEventThresholds | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricsEventThresholdType !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsEventThresholdType = this._metricsEventThresholdType;
    }
    if (this._resetThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.resetThreshold = this._resetThreshold;
    }
    if (this._watermarkThresholds !== undefined) {
      hasAnyValues = true;
      internalValueResult.watermarkThresholds = this._watermarkThresholds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceenginegroupSeGroupAnalyticsPolicyMetricsEventThresholds | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metricsEventThresholdType = undefined;
      this._resetThreshold = undefined;
      this._watermarkThresholds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metricsEventThresholdType = value.metricsEventThresholdType;
      this._resetThreshold = value.resetThreshold;
      this._watermarkThresholds = value.watermarkThresholds;
    }
  }

  // metrics_event_threshold_type - computed: false, optional: false, required: true
  private _metricsEventThresholdType?: string; 
  public get metricsEventThresholdType() {
    return this.getStringAttribute('metrics_event_threshold_type');
  }
  public set metricsEventThresholdType(value: string) {
    this._metricsEventThresholdType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsEventThresholdTypeInput() {
    return this._metricsEventThresholdType;
  }

  // reset_threshold - computed: true, optional: true, required: false
  private _resetThreshold?: string; 
  public get resetThreshold() {
    return this.getStringAttribute('reset_threshold');
  }
  public set resetThreshold(value: string) {
    this._resetThreshold = value;
  }
  public resetResetThreshold() {
    this._resetThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resetThresholdInput() {
    return this._resetThreshold;
  }

  // watermark_thresholds - computed: false, optional: true, required: false
  private _watermarkThresholds?: number[]; 
  public get watermarkThresholds() {
    return this.getNumberListAttribute('watermark_thresholds');
  }
  public set watermarkThresholds(value: number[]) {
    this._watermarkThresholds = value;
  }
  public resetWatermarkThresholds() {
    this._watermarkThresholds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get watermarkThresholdsInput() {
    return this._watermarkThresholds;
  }
}

export class ServiceenginegroupSeGroupAnalyticsPolicyMetricsEventThresholdsList extends cdktf.ComplexList {
  public internalValue? : ServiceenginegroupSeGroupAnalyticsPolicyMetricsEventThresholds[] | cdktf.IResolvable

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
  public get(index: number): ServiceenginegroupSeGroupAnalyticsPolicyMetricsEventThresholdsOutputReference {
    return new ServiceenginegroupSeGroupAnalyticsPolicyMetricsEventThresholdsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceenginegroupSeGroupAnalyticsPolicy {
  /**
  * metrics_event_thresholds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#metrics_event_thresholds Serviceenginegroup#metrics_event_thresholds}
  */
  readonly metricsEventThresholds?: ServiceenginegroupSeGroupAnalyticsPolicyMetricsEventThresholds[] | cdktf.IResolvable;
}

export function serviceenginegroupSeGroupAnalyticsPolicyToTerraform(struct?: ServiceenginegroupSeGroupAnalyticsPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metrics_event_thresholds: cdktf.listMapper(serviceenginegroupSeGroupAnalyticsPolicyMetricsEventThresholdsToTerraform, true)(struct!.metricsEventThresholds),
  }
}


export function serviceenginegroupSeGroupAnalyticsPolicyToHclTerraform(struct?: ServiceenginegroupSeGroupAnalyticsPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metrics_event_thresholds: {
      value: cdktf.listMapperHcl(serviceenginegroupSeGroupAnalyticsPolicyMetricsEventThresholdsToHclTerraform, true)(struct!.metricsEventThresholds),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceenginegroupSeGroupAnalyticsPolicyMetricsEventThresholdsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceenginegroupSeGroupAnalyticsPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceenginegroupSeGroupAnalyticsPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricsEventThresholds?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsEventThresholds = this._metricsEventThresholds?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceenginegroupSeGroupAnalyticsPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metricsEventThresholds.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metricsEventThresholds.internalValue = value.metricsEventThresholds;
    }
  }

  // metrics_event_thresholds - computed: false, optional: true, required: false
  private _metricsEventThresholds = new ServiceenginegroupSeGroupAnalyticsPolicyMetricsEventThresholdsList(this, "metrics_event_thresholds", false);
  public get metricsEventThresholds() {
    return this._metricsEventThresholds;
  }
  public putMetricsEventThresholds(value: ServiceenginegroupSeGroupAnalyticsPolicyMetricsEventThresholds[] | cdktf.IResolvable) {
    this._metricsEventThresholds.internalValue = value;
  }
  public resetMetricsEventThresholds() {
    this._metricsEventThresholds.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsEventThresholdsInput() {
    return this._metricsEventThresholds.internalValue;
  }
}

export class ServiceenginegroupSeGroupAnalyticsPolicyList extends cdktf.ComplexList {
  public internalValue? : ServiceenginegroupSeGroupAnalyticsPolicy[] | cdktf.IResolvable

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
  public get(index: number): ServiceenginegroupSeGroupAnalyticsPolicyOutputReference {
    return new ServiceenginegroupSeGroupAnalyticsPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceenginegroupSeRlProp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#msf_num_stages Serviceenginegroup#msf_num_stages}
  */
  readonly msfNumStages?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#msf_stage_size Serviceenginegroup#msf_stage_size}
  */
  readonly msfStageSize?: string;
}

export function serviceenginegroupSeRlPropToTerraform(struct?: ServiceenginegroupSeRlProp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    msf_num_stages: cdktf.stringToTerraform(struct!.msfNumStages),
    msf_stage_size: cdktf.stringToTerraform(struct!.msfStageSize),
  }
}


export function serviceenginegroupSeRlPropToHclTerraform(struct?: ServiceenginegroupSeRlProp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    msf_num_stages: {
      value: cdktf.stringToHclTerraform(struct!.msfNumStages),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    msf_stage_size: {
      value: cdktf.stringToHclTerraform(struct!.msfStageSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceenginegroupSeRlPropOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceenginegroupSeRlProp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._msfNumStages !== undefined) {
      hasAnyValues = true;
      internalValueResult.msfNumStages = this._msfNumStages;
    }
    if (this._msfStageSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.msfStageSize = this._msfStageSize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceenginegroupSeRlProp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._msfNumStages = undefined;
      this._msfStageSize = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._msfNumStages = value.msfNumStages;
      this._msfStageSize = value.msfStageSize;
    }
  }

  // msf_num_stages - computed: false, optional: true, required: false
  private _msfNumStages?: string; 
  public get msfNumStages() {
    return this.getStringAttribute('msf_num_stages');
  }
  public set msfNumStages(value: string) {
    this._msfNumStages = value;
  }
  public resetMsfNumStages() {
    this._msfNumStages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msfNumStagesInput() {
    return this._msfNumStages;
  }

  // msf_stage_size - computed: false, optional: true, required: false
  private _msfStageSize?: string; 
  public get msfStageSize() {
    return this.getStringAttribute('msf_stage_size');
  }
  public set msfStageSize(value: string) {
    this._msfStageSize = value;
  }
  public resetMsfStageSize() {
    this._msfStageSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msfStageSizeInput() {
    return this._msfStageSize;
  }
}

export class ServiceenginegroupSeRlPropList extends cdktf.ComplexList {
  public internalValue? : ServiceenginegroupSeRlProp[] | cdktf.IResolvable

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
  public get(index: number): ServiceenginegroupSeRlPropOutputReference {
    return new ServiceenginegroupSeRlPropOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceenginegroupSeTimeTrackerProps {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#egress_audit_mode Serviceenginegroup#egress_audit_mode}
  */
  readonly egressAuditMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#egress_threshold Serviceenginegroup#egress_threshold}
  */
  readonly egressThreshold?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#event_gen_window Serviceenginegroup#event_gen_window}
  */
  readonly eventGenWindow?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#ingress_audit_mode Serviceenginegroup#ingress_audit_mode}
  */
  readonly ingressAuditMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#ingress_threshold Serviceenginegroup#ingress_threshold}
  */
  readonly ingressThreshold?: string;
}

export function serviceenginegroupSeTimeTrackerPropsToTerraform(struct?: ServiceenginegroupSeTimeTrackerProps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    egress_audit_mode: cdktf.stringToTerraform(struct!.egressAuditMode),
    egress_threshold: cdktf.stringToTerraform(struct!.egressThreshold),
    event_gen_window: cdktf.stringToTerraform(struct!.eventGenWindow),
    ingress_audit_mode: cdktf.stringToTerraform(struct!.ingressAuditMode),
    ingress_threshold: cdktf.stringToTerraform(struct!.ingressThreshold),
  }
}


export function serviceenginegroupSeTimeTrackerPropsToHclTerraform(struct?: ServiceenginegroupSeTimeTrackerProps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    egress_audit_mode: {
      value: cdktf.stringToHclTerraform(struct!.egressAuditMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    egress_threshold: {
      value: cdktf.stringToHclTerraform(struct!.egressThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    event_gen_window: {
      value: cdktf.stringToHclTerraform(struct!.eventGenWindow),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ingress_audit_mode: {
      value: cdktf.stringToHclTerraform(struct!.ingressAuditMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ingress_threshold: {
      value: cdktf.stringToHclTerraform(struct!.ingressThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceenginegroupSeTimeTrackerPropsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceenginegroupSeTimeTrackerProps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._egressAuditMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.egressAuditMode = this._egressAuditMode;
    }
    if (this._egressThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.egressThreshold = this._egressThreshold;
    }
    if (this._eventGenWindow !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventGenWindow = this._eventGenWindow;
    }
    if (this._ingressAuditMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingressAuditMode = this._ingressAuditMode;
    }
    if (this._ingressThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingressThreshold = this._ingressThreshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceenginegroupSeTimeTrackerProps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._egressAuditMode = undefined;
      this._egressThreshold = undefined;
      this._eventGenWindow = undefined;
      this._ingressAuditMode = undefined;
      this._ingressThreshold = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._egressAuditMode = value.egressAuditMode;
      this._egressThreshold = value.egressThreshold;
      this._eventGenWindow = value.eventGenWindow;
      this._ingressAuditMode = value.ingressAuditMode;
      this._ingressThreshold = value.ingressThreshold;
    }
  }

  // egress_audit_mode - computed: false, optional: true, required: false
  private _egressAuditMode?: string; 
  public get egressAuditMode() {
    return this.getStringAttribute('egress_audit_mode');
  }
  public set egressAuditMode(value: string) {
    this._egressAuditMode = value;
  }
  public resetEgressAuditMode() {
    this._egressAuditMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressAuditModeInput() {
    return this._egressAuditMode;
  }

  // egress_threshold - computed: false, optional: true, required: false
  private _egressThreshold?: string; 
  public get egressThreshold() {
    return this.getStringAttribute('egress_threshold');
  }
  public set egressThreshold(value: string) {
    this._egressThreshold = value;
  }
  public resetEgressThreshold() {
    this._egressThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressThresholdInput() {
    return this._egressThreshold;
  }

  // event_gen_window - computed: false, optional: true, required: false
  private _eventGenWindow?: string; 
  public get eventGenWindow() {
    return this.getStringAttribute('event_gen_window');
  }
  public set eventGenWindow(value: string) {
    this._eventGenWindow = value;
  }
  public resetEventGenWindow() {
    this._eventGenWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventGenWindowInput() {
    return this._eventGenWindow;
  }

  // ingress_audit_mode - computed: false, optional: true, required: false
  private _ingressAuditMode?: string; 
  public get ingressAuditMode() {
    return this.getStringAttribute('ingress_audit_mode');
  }
  public set ingressAuditMode(value: string) {
    this._ingressAuditMode = value;
  }
  public resetIngressAuditMode() {
    this._ingressAuditMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressAuditModeInput() {
    return this._ingressAuditMode;
  }

  // ingress_threshold - computed: false, optional: true, required: false
  private _ingressThreshold?: string; 
  public get ingressThreshold() {
    return this.getStringAttribute('ingress_threshold');
  }
  public set ingressThreshold(value: string) {
    this._ingressThreshold = value;
  }
  public resetIngressThreshold() {
    this._ingressThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressThresholdInput() {
    return this._ingressThreshold;
  }
}

export class ServiceenginegroupSeTimeTrackerPropsList extends cdktf.ComplexList {
  public internalValue? : ServiceenginegroupSeTimeTrackerProps[] | cdktf.IResolvable

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
  public get(index: number): ServiceenginegroupSeTimeTrackerPropsOutputReference {
    return new ServiceenginegroupSeTimeTrackerPropsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceenginegroupSeTracertPortRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#end Serviceenginegroup#end}
  */
  readonly end: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#start Serviceenginegroup#start}
  */
  readonly start: string;
}

export function serviceenginegroupSeTracertPortRangeToTerraform(struct?: ServiceenginegroupSeTracertPortRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end: cdktf.stringToTerraform(struct!.end),
    start: cdktf.stringToTerraform(struct!.start),
  }
}


export function serviceenginegroupSeTracertPortRangeToHclTerraform(struct?: ServiceenginegroupSeTracertPortRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end: {
      value: cdktf.stringToHclTerraform(struct!.end),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start: {
      value: cdktf.stringToHclTerraform(struct!.start),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceenginegroupSeTracertPortRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceenginegroupSeTracertPortRange | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._end !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceenginegroupSeTracertPortRange | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._end = undefined;
      this._start = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._end = value.end;
      this._start = value.start;
    }
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

  // start - computed: false, optional: false, required: true
  private _start?: string; 
  public get start() {
    return this.getStringAttribute('start');
  }
  public set start(value: string) {
    this._start = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }
}

export class ServiceenginegroupSeTracertPortRangeList extends cdktf.ComplexList {
  public internalValue? : ServiceenginegroupSeTracertPortRange[] | cdktf.IResolvable

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
  public get(index: number): ServiceenginegroupSeTracertPortRangeOutputReference {
    return new ServiceenginegroupSeTracertPortRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceenginegroupServiceIp6SubnetsIpAddr {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#addr Serviceenginegroup#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#type Serviceenginegroup#type}
  */
  readonly type: string;
}

export function serviceenginegroupServiceIp6SubnetsIpAddrToTerraform(struct?: ServiceenginegroupServiceIp6SubnetsIpAddr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function serviceenginegroupServiceIp6SubnetsIpAddrToHclTerraform(struct?: ServiceenginegroupServiceIp6SubnetsIpAddr | cdktf.IResolvable): any {
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

export class ServiceenginegroupServiceIp6SubnetsIpAddrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceenginegroupServiceIp6SubnetsIpAddr | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ServiceenginegroupServiceIp6SubnetsIpAddr | cdktf.IResolvable | undefined) {
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

export class ServiceenginegroupServiceIp6SubnetsIpAddrList extends cdktf.ComplexList {
  public internalValue? : ServiceenginegroupServiceIp6SubnetsIpAddr[] | cdktf.IResolvable

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
  public get(index: number): ServiceenginegroupServiceIp6SubnetsIpAddrOutputReference {
    return new ServiceenginegroupServiceIp6SubnetsIpAddrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceenginegroupServiceIp6Subnets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#mask Serviceenginegroup#mask}
  */
  readonly mask: string;
  /**
  * ip_addr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#ip_addr Serviceenginegroup#ip_addr}
  */
  readonly ipAddr: ServiceenginegroupServiceIp6SubnetsIpAddr[] | cdktf.IResolvable;
}

export function serviceenginegroupServiceIp6SubnetsToTerraform(struct?: ServiceenginegroupServiceIp6Subnets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mask: cdktf.stringToTerraform(struct!.mask),
    ip_addr: cdktf.listMapper(serviceenginegroupServiceIp6SubnetsIpAddrToTerraform, true)(struct!.ipAddr),
  }
}


export function serviceenginegroupServiceIp6SubnetsToHclTerraform(struct?: ServiceenginegroupServiceIp6Subnets | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(serviceenginegroupServiceIp6SubnetsIpAddrToHclTerraform, true)(struct!.ipAddr),
      isBlock: true,
      type: "set",
      storageClassType: "ServiceenginegroupServiceIp6SubnetsIpAddrList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceenginegroupServiceIp6SubnetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceenginegroupServiceIp6Subnets | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ServiceenginegroupServiceIp6Subnets | cdktf.IResolvable | undefined) {
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
  private _ipAddr = new ServiceenginegroupServiceIp6SubnetsIpAddrList(this, "ip_addr", true);
  public get ipAddr() {
    return this._ipAddr;
  }
  public putIpAddr(value: ServiceenginegroupServiceIp6SubnetsIpAddr[] | cdktf.IResolvable) {
    this._ipAddr.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddrInput() {
    return this._ipAddr.internalValue;
  }
}

export class ServiceenginegroupServiceIp6SubnetsList extends cdktf.ComplexList {
  public internalValue? : ServiceenginegroupServiceIp6Subnets[] | cdktf.IResolvable

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
  public get(index: number): ServiceenginegroupServiceIp6SubnetsOutputReference {
    return new ServiceenginegroupServiceIp6SubnetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceenginegroupServiceIpSubnetsIpAddr {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#addr Serviceenginegroup#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#type Serviceenginegroup#type}
  */
  readonly type: string;
}

export function serviceenginegroupServiceIpSubnetsIpAddrToTerraform(struct?: ServiceenginegroupServiceIpSubnetsIpAddr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function serviceenginegroupServiceIpSubnetsIpAddrToHclTerraform(struct?: ServiceenginegroupServiceIpSubnetsIpAddr | cdktf.IResolvable): any {
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

export class ServiceenginegroupServiceIpSubnetsIpAddrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceenginegroupServiceIpSubnetsIpAddr | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ServiceenginegroupServiceIpSubnetsIpAddr | cdktf.IResolvable | undefined) {
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

export class ServiceenginegroupServiceIpSubnetsIpAddrList extends cdktf.ComplexList {
  public internalValue? : ServiceenginegroupServiceIpSubnetsIpAddr[] | cdktf.IResolvable

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
  public get(index: number): ServiceenginegroupServiceIpSubnetsIpAddrOutputReference {
    return new ServiceenginegroupServiceIpSubnetsIpAddrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceenginegroupServiceIpSubnets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#mask Serviceenginegroup#mask}
  */
  readonly mask: string;
  /**
  * ip_addr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#ip_addr Serviceenginegroup#ip_addr}
  */
  readonly ipAddr: ServiceenginegroupServiceIpSubnetsIpAddr[] | cdktf.IResolvable;
}

export function serviceenginegroupServiceIpSubnetsToTerraform(struct?: ServiceenginegroupServiceIpSubnets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mask: cdktf.stringToTerraform(struct!.mask),
    ip_addr: cdktf.listMapper(serviceenginegroupServiceIpSubnetsIpAddrToTerraform, true)(struct!.ipAddr),
  }
}


export function serviceenginegroupServiceIpSubnetsToHclTerraform(struct?: ServiceenginegroupServiceIpSubnets | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(serviceenginegroupServiceIpSubnetsIpAddrToHclTerraform, true)(struct!.ipAddr),
      isBlock: true,
      type: "set",
      storageClassType: "ServiceenginegroupServiceIpSubnetsIpAddrList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceenginegroupServiceIpSubnetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceenginegroupServiceIpSubnets | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ServiceenginegroupServiceIpSubnets | cdktf.IResolvable | undefined) {
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
  private _ipAddr = new ServiceenginegroupServiceIpSubnetsIpAddrList(this, "ip_addr", true);
  public get ipAddr() {
    return this._ipAddr;
  }
  public putIpAddr(value: ServiceenginegroupServiceIpSubnetsIpAddr[] | cdktf.IResolvable) {
    this._ipAddr.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddrInput() {
    return this._ipAddr.internalValue;
  }
}

export class ServiceenginegroupServiceIpSubnetsList extends cdktf.ComplexList {
  public internalValue? : ServiceenginegroupServiceIpSubnets[] | cdktf.IResolvable

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
  public get(index: number): ServiceenginegroupServiceIpSubnetsOutputReference {
    return new ServiceenginegroupServiceIpSubnetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceenginegroupUserAgentCacheConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#batch_size Serviceenginegroup#batch_size}
  */
  readonly batchSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#controller_cache_size Serviceenginegroup#controller_cache_size}
  */
  readonly controllerCacheSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#max_age Serviceenginegroup#max_age}
  */
  readonly maxAge?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#max_last_hit_time Serviceenginegroup#max_last_hit_time}
  */
  readonly maxLastHitTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#max_upstream_queries Serviceenginegroup#max_upstream_queries}
  */
  readonly maxUpstreamQueries?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#max_wait_time Serviceenginegroup#max_wait_time}
  */
  readonly maxWaitTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#num_entries_upstream_update Serviceenginegroup#num_entries_upstream_update}
  */
  readonly numEntriesUpstreamUpdate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#percent_reserved_for_bad_bots Serviceenginegroup#percent_reserved_for_bad_bots}
  */
  readonly percentReservedForBadBots?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#percent_reserved_for_browsers Serviceenginegroup#percent_reserved_for_browsers}
  */
  readonly percentReservedForBrowsers?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#percent_reserved_for_good_bots Serviceenginegroup#percent_reserved_for_good_bots}
  */
  readonly percentReservedForGoodBots?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#percent_reserved_for_outstanding Serviceenginegroup#percent_reserved_for_outstanding}
  */
  readonly percentReservedForOutstanding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#se_cache_size Serviceenginegroup#se_cache_size}
  */
  readonly seCacheSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#upstream_update_interval Serviceenginegroup#upstream_update_interval}
  */
  readonly upstreamUpdateInterval?: string;
}

export function serviceenginegroupUserAgentCacheConfigToTerraform(struct?: ServiceenginegroupUserAgentCacheConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    batch_size: cdktf.stringToTerraform(struct!.batchSize),
    controller_cache_size: cdktf.stringToTerraform(struct!.controllerCacheSize),
    max_age: cdktf.stringToTerraform(struct!.maxAge),
    max_last_hit_time: cdktf.stringToTerraform(struct!.maxLastHitTime),
    max_upstream_queries: cdktf.stringToTerraform(struct!.maxUpstreamQueries),
    max_wait_time: cdktf.stringToTerraform(struct!.maxWaitTime),
    num_entries_upstream_update: cdktf.stringToTerraform(struct!.numEntriesUpstreamUpdate),
    percent_reserved_for_bad_bots: cdktf.stringToTerraform(struct!.percentReservedForBadBots),
    percent_reserved_for_browsers: cdktf.stringToTerraform(struct!.percentReservedForBrowsers),
    percent_reserved_for_good_bots: cdktf.stringToTerraform(struct!.percentReservedForGoodBots),
    percent_reserved_for_outstanding: cdktf.stringToTerraform(struct!.percentReservedForOutstanding),
    se_cache_size: cdktf.stringToTerraform(struct!.seCacheSize),
    upstream_update_interval: cdktf.stringToTerraform(struct!.upstreamUpdateInterval),
  }
}


export function serviceenginegroupUserAgentCacheConfigToHclTerraform(struct?: ServiceenginegroupUserAgentCacheConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    batch_size: {
      value: cdktf.stringToHclTerraform(struct!.batchSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    controller_cache_size: {
      value: cdktf.stringToHclTerraform(struct!.controllerCacheSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_age: {
      value: cdktf.stringToHclTerraform(struct!.maxAge),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_last_hit_time: {
      value: cdktf.stringToHclTerraform(struct!.maxLastHitTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_upstream_queries: {
      value: cdktf.stringToHclTerraform(struct!.maxUpstreamQueries),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_wait_time: {
      value: cdktf.stringToHclTerraform(struct!.maxWaitTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num_entries_upstream_update: {
      value: cdktf.stringToHclTerraform(struct!.numEntriesUpstreamUpdate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    percent_reserved_for_bad_bots: {
      value: cdktf.stringToHclTerraform(struct!.percentReservedForBadBots),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    percent_reserved_for_browsers: {
      value: cdktf.stringToHclTerraform(struct!.percentReservedForBrowsers),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    percent_reserved_for_good_bots: {
      value: cdktf.stringToHclTerraform(struct!.percentReservedForGoodBots),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    percent_reserved_for_outstanding: {
      value: cdktf.stringToHclTerraform(struct!.percentReservedForOutstanding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    se_cache_size: {
      value: cdktf.stringToHclTerraform(struct!.seCacheSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    upstream_update_interval: {
      value: cdktf.stringToHclTerraform(struct!.upstreamUpdateInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceenginegroupUserAgentCacheConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceenginegroupUserAgentCacheConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._batchSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchSize = this._batchSize;
    }
    if (this._controllerCacheSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.controllerCacheSize = this._controllerCacheSize;
    }
    if (this._maxAge !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAge = this._maxAge;
    }
    if (this._maxLastHitTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxLastHitTime = this._maxLastHitTime;
    }
    if (this._maxUpstreamQueries !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUpstreamQueries = this._maxUpstreamQueries;
    }
    if (this._maxWaitTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxWaitTime = this._maxWaitTime;
    }
    if (this._numEntriesUpstreamUpdate !== undefined) {
      hasAnyValues = true;
      internalValueResult.numEntriesUpstreamUpdate = this._numEntriesUpstreamUpdate;
    }
    if (this._percentReservedForBadBots !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentReservedForBadBots = this._percentReservedForBadBots;
    }
    if (this._percentReservedForBrowsers !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentReservedForBrowsers = this._percentReservedForBrowsers;
    }
    if (this._percentReservedForGoodBots !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentReservedForGoodBots = this._percentReservedForGoodBots;
    }
    if (this._percentReservedForOutstanding !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentReservedForOutstanding = this._percentReservedForOutstanding;
    }
    if (this._seCacheSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.seCacheSize = this._seCacheSize;
    }
    if (this._upstreamUpdateInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.upstreamUpdateInterval = this._upstreamUpdateInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceenginegroupUserAgentCacheConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._batchSize = undefined;
      this._controllerCacheSize = undefined;
      this._maxAge = undefined;
      this._maxLastHitTime = undefined;
      this._maxUpstreamQueries = undefined;
      this._maxWaitTime = undefined;
      this._numEntriesUpstreamUpdate = undefined;
      this._percentReservedForBadBots = undefined;
      this._percentReservedForBrowsers = undefined;
      this._percentReservedForGoodBots = undefined;
      this._percentReservedForOutstanding = undefined;
      this._seCacheSize = undefined;
      this._upstreamUpdateInterval = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._batchSize = value.batchSize;
      this._controllerCacheSize = value.controllerCacheSize;
      this._maxAge = value.maxAge;
      this._maxLastHitTime = value.maxLastHitTime;
      this._maxUpstreamQueries = value.maxUpstreamQueries;
      this._maxWaitTime = value.maxWaitTime;
      this._numEntriesUpstreamUpdate = value.numEntriesUpstreamUpdate;
      this._percentReservedForBadBots = value.percentReservedForBadBots;
      this._percentReservedForBrowsers = value.percentReservedForBrowsers;
      this._percentReservedForGoodBots = value.percentReservedForGoodBots;
      this._percentReservedForOutstanding = value.percentReservedForOutstanding;
      this._seCacheSize = value.seCacheSize;
      this._upstreamUpdateInterval = value.upstreamUpdateInterval;
    }
  }

  // batch_size - computed: false, optional: true, required: false
  private _batchSize?: string; 
  public get batchSize() {
    return this.getStringAttribute('batch_size');
  }
  public set batchSize(value: string) {
    this._batchSize = value;
  }
  public resetBatchSize() {
    this._batchSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchSizeInput() {
    return this._batchSize;
  }

  // controller_cache_size - computed: false, optional: true, required: false
  private _controllerCacheSize?: string; 
  public get controllerCacheSize() {
    return this.getStringAttribute('controller_cache_size');
  }
  public set controllerCacheSize(value: string) {
    this._controllerCacheSize = value;
  }
  public resetControllerCacheSize() {
    this._controllerCacheSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerCacheSizeInput() {
    return this._controllerCacheSize;
  }

  // max_age - computed: false, optional: true, required: false
  private _maxAge?: string; 
  public get maxAge() {
    return this.getStringAttribute('max_age');
  }
  public set maxAge(value: string) {
    this._maxAge = value;
  }
  public resetMaxAge() {
    this._maxAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAgeInput() {
    return this._maxAge;
  }

  // max_last_hit_time - computed: false, optional: true, required: false
  private _maxLastHitTime?: string; 
  public get maxLastHitTime() {
    return this.getStringAttribute('max_last_hit_time');
  }
  public set maxLastHitTime(value: string) {
    this._maxLastHitTime = value;
  }
  public resetMaxLastHitTime() {
    this._maxLastHitTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLastHitTimeInput() {
    return this._maxLastHitTime;
  }

  // max_upstream_queries - computed: false, optional: true, required: false
  private _maxUpstreamQueries?: string; 
  public get maxUpstreamQueries() {
    return this.getStringAttribute('max_upstream_queries');
  }
  public set maxUpstreamQueries(value: string) {
    this._maxUpstreamQueries = value;
  }
  public resetMaxUpstreamQueries() {
    this._maxUpstreamQueries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUpstreamQueriesInput() {
    return this._maxUpstreamQueries;
  }

  // max_wait_time - computed: false, optional: true, required: false
  private _maxWaitTime?: string; 
  public get maxWaitTime() {
    return this.getStringAttribute('max_wait_time');
  }
  public set maxWaitTime(value: string) {
    this._maxWaitTime = value;
  }
  public resetMaxWaitTime() {
    this._maxWaitTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxWaitTimeInput() {
    return this._maxWaitTime;
  }

  // num_entries_upstream_update - computed: false, optional: true, required: false
  private _numEntriesUpstreamUpdate?: string; 
  public get numEntriesUpstreamUpdate() {
    return this.getStringAttribute('num_entries_upstream_update');
  }
  public set numEntriesUpstreamUpdate(value: string) {
    this._numEntriesUpstreamUpdate = value;
  }
  public resetNumEntriesUpstreamUpdate() {
    this._numEntriesUpstreamUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numEntriesUpstreamUpdateInput() {
    return this._numEntriesUpstreamUpdate;
  }

  // percent_reserved_for_bad_bots - computed: false, optional: true, required: false
  private _percentReservedForBadBots?: string; 
  public get percentReservedForBadBots() {
    return this.getStringAttribute('percent_reserved_for_bad_bots');
  }
  public set percentReservedForBadBots(value: string) {
    this._percentReservedForBadBots = value;
  }
  public resetPercentReservedForBadBots() {
    this._percentReservedForBadBots = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentReservedForBadBotsInput() {
    return this._percentReservedForBadBots;
  }

  // percent_reserved_for_browsers - computed: false, optional: true, required: false
  private _percentReservedForBrowsers?: string; 
  public get percentReservedForBrowsers() {
    return this.getStringAttribute('percent_reserved_for_browsers');
  }
  public set percentReservedForBrowsers(value: string) {
    this._percentReservedForBrowsers = value;
  }
  public resetPercentReservedForBrowsers() {
    this._percentReservedForBrowsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentReservedForBrowsersInput() {
    return this._percentReservedForBrowsers;
  }

  // percent_reserved_for_good_bots - computed: false, optional: true, required: false
  private _percentReservedForGoodBots?: string; 
  public get percentReservedForGoodBots() {
    return this.getStringAttribute('percent_reserved_for_good_bots');
  }
  public set percentReservedForGoodBots(value: string) {
    this._percentReservedForGoodBots = value;
  }
  public resetPercentReservedForGoodBots() {
    this._percentReservedForGoodBots = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentReservedForGoodBotsInput() {
    return this._percentReservedForGoodBots;
  }

  // percent_reserved_for_outstanding - computed: false, optional: true, required: false
  private _percentReservedForOutstanding?: string; 
  public get percentReservedForOutstanding() {
    return this.getStringAttribute('percent_reserved_for_outstanding');
  }
  public set percentReservedForOutstanding(value: string) {
    this._percentReservedForOutstanding = value;
  }
  public resetPercentReservedForOutstanding() {
    this._percentReservedForOutstanding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentReservedForOutstandingInput() {
    return this._percentReservedForOutstanding;
  }

  // se_cache_size - computed: false, optional: true, required: false
  private _seCacheSize?: string; 
  public get seCacheSize() {
    return this.getStringAttribute('se_cache_size');
  }
  public set seCacheSize(value: string) {
    this._seCacheSize = value;
  }
  public resetSeCacheSize() {
    this._seCacheSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seCacheSizeInput() {
    return this._seCacheSize;
  }

  // upstream_update_interval - computed: false, optional: true, required: false
  private _upstreamUpdateInterval?: string; 
  public get upstreamUpdateInterval() {
    return this.getStringAttribute('upstream_update_interval');
  }
  public set upstreamUpdateInterval(value: string) {
    this._upstreamUpdateInterval = value;
  }
  public resetUpstreamUpdateInterval() {
    this._upstreamUpdateInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upstreamUpdateIntervalInput() {
    return this._upstreamUpdateInterval;
  }
}

export class ServiceenginegroupUserAgentCacheConfigList extends cdktf.ComplexList {
  public internalValue? : ServiceenginegroupUserAgentCacheConfig[] | cdktf.IResolvable

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
  public get(index: number): ServiceenginegroupUserAgentCacheConfigOutputReference {
    return new ServiceenginegroupUserAgentCacheConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceenginegroupVcenterClusters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#cluster_refs Serviceenginegroup#cluster_refs}
  */
  readonly clusterRefs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#include Serviceenginegroup#include}
  */
  readonly include?: string;
}

export function serviceenginegroupVcenterClustersToTerraform(struct?: ServiceenginegroupVcenterClusters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_refs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.clusterRefs),
    include: cdktf.stringToTerraform(struct!.include),
  }
}


export function serviceenginegroupVcenterClustersToHclTerraform(struct?: ServiceenginegroupVcenterClusters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_refs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.clusterRefs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    include: {
      value: cdktf.stringToHclTerraform(struct!.include),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceenginegroupVcenterClustersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceenginegroupVcenterClusters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterRefs !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterRefs = this._clusterRefs;
    }
    if (this._include !== undefined) {
      hasAnyValues = true;
      internalValueResult.include = this._include;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceenginegroupVcenterClusters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterRefs = undefined;
      this._include = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterRefs = value.clusterRefs;
      this._include = value.include;
    }
  }

  // cluster_refs - computed: false, optional: true, required: false
  private _clusterRefs?: string[]; 
  public get clusterRefs() {
    return this.getListAttribute('cluster_refs');
  }
  public set clusterRefs(value: string[]) {
    this._clusterRefs = value;
  }
  public resetClusterRefs() {
    this._clusterRefs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterRefsInput() {
    return this._clusterRefs;
  }

  // include - computed: false, optional: true, required: false
  private _include?: string; 
  public get include() {
    return this.getStringAttribute('include');
  }
  public set include(value: string) {
    this._include = value;
  }
  public resetInclude() {
    this._include = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInput() {
    return this._include;
  }
}

export class ServiceenginegroupVcenterClustersList extends cdktf.ComplexList {
  public internalValue? : ServiceenginegroupVcenterClusters[] | cdktf.IResolvable

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
  public get(index: number): ServiceenginegroupVcenterClustersOutputReference {
    return new ServiceenginegroupVcenterClustersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceenginegroupVcenterDatastores {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#datastore_name Serviceenginegroup#datastore_name}
  */
  readonly datastoreName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#managed_object_id Serviceenginegroup#managed_object_id}
  */
  readonly managedObjectId?: string;
}

export function serviceenginegroupVcenterDatastoresToTerraform(struct?: ServiceenginegroupVcenterDatastores | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    datastore_name: cdktf.stringToTerraform(struct!.datastoreName),
    managed_object_id: cdktf.stringToTerraform(struct!.managedObjectId),
  }
}


export function serviceenginegroupVcenterDatastoresToHclTerraform(struct?: ServiceenginegroupVcenterDatastores | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    datastore_name: {
      value: cdktf.stringToHclTerraform(struct!.datastoreName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    managed_object_id: {
      value: cdktf.stringToHclTerraform(struct!.managedObjectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceenginegroupVcenterDatastoresOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceenginegroupVcenterDatastores | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datastoreName !== undefined) {
      hasAnyValues = true;
      internalValueResult.datastoreName = this._datastoreName;
    }
    if (this._managedObjectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedObjectId = this._managedObjectId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceenginegroupVcenterDatastores | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._datastoreName = undefined;
      this._managedObjectId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._datastoreName = value.datastoreName;
      this._managedObjectId = value.managedObjectId;
    }
  }

  // datastore_name - computed: true, optional: true, required: false
  private _datastoreName?: string; 
  public get datastoreName() {
    return this.getStringAttribute('datastore_name');
  }
  public set datastoreName(value: string) {
    this._datastoreName = value;
  }
  public resetDatastoreName() {
    this._datastoreName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datastoreNameInput() {
    return this._datastoreName;
  }

  // managed_object_id - computed: true, optional: true, required: false
  private _managedObjectId?: string; 
  public get managedObjectId() {
    return this.getStringAttribute('managed_object_id');
  }
  public set managedObjectId(value: string) {
    this._managedObjectId = value;
  }
  public resetManagedObjectId() {
    this._managedObjectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedObjectIdInput() {
    return this._managedObjectId;
  }
}

export class ServiceenginegroupVcenterDatastoresList extends cdktf.ComplexList {
  public internalValue? : ServiceenginegroupVcenterDatastores[] | cdktf.IResolvable

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
  public get(index: number): ServiceenginegroupVcenterDatastoresOutputReference {
    return new ServiceenginegroupVcenterDatastoresOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceenginegroupVcenterHosts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#host_refs Serviceenginegroup#host_refs}
  */
  readonly hostRefs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#include Serviceenginegroup#include}
  */
  readonly include?: string;
}

export function serviceenginegroupVcenterHostsToTerraform(struct?: ServiceenginegroupVcenterHosts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host_refs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.hostRefs),
    include: cdktf.stringToTerraform(struct!.include),
  }
}


export function serviceenginegroupVcenterHostsToHclTerraform(struct?: ServiceenginegroupVcenterHosts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host_refs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.hostRefs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    include: {
      value: cdktf.stringToHclTerraform(struct!.include),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceenginegroupVcenterHostsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceenginegroupVcenterHosts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostRefs !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostRefs = this._hostRefs;
    }
    if (this._include !== undefined) {
      hasAnyValues = true;
      internalValueResult.include = this._include;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceenginegroupVcenterHosts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostRefs = undefined;
      this._include = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostRefs = value.hostRefs;
      this._include = value.include;
    }
  }

  // host_refs - computed: false, optional: true, required: false
  private _hostRefs?: string[]; 
  public get hostRefs() {
    return this.getListAttribute('host_refs');
  }
  public set hostRefs(value: string[]) {
    this._hostRefs = value;
  }
  public resetHostRefs() {
    this._hostRefs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostRefsInput() {
    return this._hostRefs;
  }

  // include - computed: false, optional: true, required: false
  private _include?: string; 
  public get include() {
    return this.getStringAttribute('include');
  }
  public set include(value: string) {
    this._include = value;
  }
  public resetInclude() {
    this._include = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInput() {
    return this._include;
  }
}

export class ServiceenginegroupVcenterHostsList extends cdktf.ComplexList {
  public internalValue? : ServiceenginegroupVcenterHosts[] | cdktf.IResolvable

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
  public get(index: number): ServiceenginegroupVcenterHostsOutputReference {
    return new ServiceenginegroupVcenterHostsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceenginegroupVcentersClusters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#cluster_id Serviceenginegroup#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#override_vsphere_ha Serviceenginegroup#override_vsphere_ha}
  */
  readonly overrideVsphereHa?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#vmg_name Serviceenginegroup#vmg_name}
  */
  readonly vmgName?: string;
}

export function serviceenginegroupVcentersClustersToTerraform(struct?: ServiceenginegroupVcentersClusters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_id: cdktf.stringToTerraform(struct!.clusterId),
    override_vsphere_ha: cdktf.stringToTerraform(struct!.overrideVsphereHa),
    vmg_name: cdktf.stringToTerraform(struct!.vmgName),
  }
}


export function serviceenginegroupVcentersClustersToHclTerraform(struct?: ServiceenginegroupVcentersClusters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_id: {
      value: cdktf.stringToHclTerraform(struct!.clusterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    override_vsphere_ha: {
      value: cdktf.stringToHclTerraform(struct!.overrideVsphereHa),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vmg_name: {
      value: cdktf.stringToHclTerraform(struct!.vmgName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceenginegroupVcentersClustersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceenginegroupVcentersClusters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterId = this._clusterId;
    }
    if (this._overrideVsphereHa !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrideVsphereHa = this._overrideVsphereHa;
    }
    if (this._vmgName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmgName = this._vmgName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceenginegroupVcentersClusters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterId = undefined;
      this._overrideVsphereHa = undefined;
      this._vmgName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterId = value.clusterId;
      this._overrideVsphereHa = value.overrideVsphereHa;
      this._vmgName = value.vmgName;
    }
  }

  // cluster_id - computed: true, optional: true, required: false
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  public resetClusterId() {
    this._clusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // override_vsphere_ha - computed: false, optional: true, required: false
  private _overrideVsphereHa?: string; 
  public get overrideVsphereHa() {
    return this.getStringAttribute('override_vsphere_ha');
  }
  public set overrideVsphereHa(value: string) {
    this._overrideVsphereHa = value;
  }
  public resetOverrideVsphereHa() {
    this._overrideVsphereHa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideVsphereHaInput() {
    return this._overrideVsphereHa;
  }

  // vmg_name - computed: true, optional: true, required: false
  private _vmgName?: string; 
  public get vmgName() {
    return this.getStringAttribute('vmg_name');
  }
  public set vmgName(value: string) {
    this._vmgName = value;
  }
  public resetVmgName() {
    this._vmgName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmgNameInput() {
    return this._vmgName;
  }
}

export class ServiceenginegroupVcentersClustersList extends cdktf.ComplexList {
  public internalValue? : ServiceenginegroupVcentersClusters[] | cdktf.IResolvable

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
  public get(index: number): ServiceenginegroupVcentersClustersOutputReference {
    return new ServiceenginegroupVcentersClustersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceenginegroupVcentersNsxtClusters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#cluster_ids Serviceenginegroup#cluster_ids}
  */
  readonly clusterIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#include Serviceenginegroup#include}
  */
  readonly include?: string;
}

export function serviceenginegroupVcentersNsxtClustersToTerraform(struct?: ServiceenginegroupVcentersNsxtClusters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.clusterIds),
    include: cdktf.stringToTerraform(struct!.include),
  }
}


export function serviceenginegroupVcentersNsxtClustersToHclTerraform(struct?: ServiceenginegroupVcentersNsxtClusters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.clusterIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    include: {
      value: cdktf.stringToHclTerraform(struct!.include),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceenginegroupVcentersNsxtClustersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceenginegroupVcentersNsxtClusters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterIds = this._clusterIds;
    }
    if (this._include !== undefined) {
      hasAnyValues = true;
      internalValueResult.include = this._include;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceenginegroupVcentersNsxtClusters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterIds = undefined;
      this._include = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterIds = value.clusterIds;
      this._include = value.include;
    }
  }

  // cluster_ids - computed: false, optional: true, required: false
  private _clusterIds?: string[]; 
  public get clusterIds() {
    return this.getListAttribute('cluster_ids');
  }
  public set clusterIds(value: string[]) {
    this._clusterIds = value;
  }
  public resetClusterIds() {
    this._clusterIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdsInput() {
    return this._clusterIds;
  }

  // include - computed: false, optional: true, required: false
  private _include?: string; 
  public get include() {
    return this.getStringAttribute('include');
  }
  public set include(value: string) {
    this._include = value;
  }
  public resetInclude() {
    this._include = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInput() {
    return this._include;
  }
}

export class ServiceenginegroupVcentersNsxtClustersList extends cdktf.ComplexList {
  public internalValue? : ServiceenginegroupVcentersNsxtClusters[] | cdktf.IResolvable

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
  public get(index: number): ServiceenginegroupVcentersNsxtClustersOutputReference {
    return new ServiceenginegroupVcentersNsxtClustersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceenginegroupVcentersNsxtDatastores {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#ds_ids Serviceenginegroup#ds_ids}
  */
  readonly dsIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#include Serviceenginegroup#include}
  */
  readonly include?: string;
}

export function serviceenginegroupVcentersNsxtDatastoresToTerraform(struct?: ServiceenginegroupVcentersNsxtDatastores | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ds_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dsIds),
    include: cdktf.stringToTerraform(struct!.include),
  }
}


export function serviceenginegroupVcentersNsxtDatastoresToHclTerraform(struct?: ServiceenginegroupVcentersNsxtDatastores | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ds_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dsIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    include: {
      value: cdktf.stringToHclTerraform(struct!.include),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceenginegroupVcentersNsxtDatastoresOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceenginegroupVcentersNsxtDatastores | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dsIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.dsIds = this._dsIds;
    }
    if (this._include !== undefined) {
      hasAnyValues = true;
      internalValueResult.include = this._include;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceenginegroupVcentersNsxtDatastores | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dsIds = undefined;
      this._include = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dsIds = value.dsIds;
      this._include = value.include;
    }
  }

  // ds_ids - computed: false, optional: true, required: false
  private _dsIds?: string[]; 
  public get dsIds() {
    return this.getListAttribute('ds_ids');
  }
  public set dsIds(value: string[]) {
    this._dsIds = value;
  }
  public resetDsIds() {
    this._dsIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dsIdsInput() {
    return this._dsIds;
  }

  // include - computed: false, optional: true, required: false
  private _include?: string; 
  public get include() {
    return this.getStringAttribute('include');
  }
  public set include(value: string) {
    this._include = value;
  }
  public resetInclude() {
    this._include = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInput() {
    return this._include;
  }
}

export class ServiceenginegroupVcentersNsxtDatastoresList extends cdktf.ComplexList {
  public internalValue? : ServiceenginegroupVcentersNsxtDatastores[] | cdktf.IResolvable

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
  public get(index: number): ServiceenginegroupVcentersNsxtDatastoresOutputReference {
    return new ServiceenginegroupVcentersNsxtDatastoresOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceenginegroupVcentersNsxtHosts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#host_ids Serviceenginegroup#host_ids}
  */
  readonly hostIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#include Serviceenginegroup#include}
  */
  readonly include?: string;
}

export function serviceenginegroupVcentersNsxtHostsToTerraform(struct?: ServiceenginegroupVcentersNsxtHosts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.hostIds),
    include: cdktf.stringToTerraform(struct!.include),
  }
}


export function serviceenginegroupVcentersNsxtHostsToHclTerraform(struct?: ServiceenginegroupVcentersNsxtHosts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.hostIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    include: {
      value: cdktf.stringToHclTerraform(struct!.include),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceenginegroupVcentersNsxtHostsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceenginegroupVcentersNsxtHosts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostIds = this._hostIds;
    }
    if (this._include !== undefined) {
      hasAnyValues = true;
      internalValueResult.include = this._include;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceenginegroupVcentersNsxtHosts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostIds = undefined;
      this._include = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostIds = value.hostIds;
      this._include = value.include;
    }
  }

  // host_ids - computed: false, optional: true, required: false
  private _hostIds?: string[]; 
  public get hostIds() {
    return this.getListAttribute('host_ids');
  }
  public set hostIds(value: string[]) {
    this._hostIds = value;
  }
  public resetHostIds() {
    this._hostIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostIdsInput() {
    return this._hostIds;
  }

  // include - computed: false, optional: true, required: false
  private _include?: string; 
  public get include() {
    return this.getStringAttribute('include');
  }
  public set include(value: string) {
    this._include = value;
  }
  public resetInclude() {
    this._include = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInput() {
    return this._include;
  }
}

export class ServiceenginegroupVcentersNsxtHostsList extends cdktf.ComplexList {
  public internalValue? : ServiceenginegroupVcentersNsxtHosts[] | cdktf.IResolvable

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
  public get(index: number): ServiceenginegroupVcentersNsxtHostsOutputReference {
    return new ServiceenginegroupVcentersNsxtHostsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceenginegroupVcenters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#vcenter_folder Serviceenginegroup#vcenter_folder}
  */
  readonly vcenterFolder?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#vcenter_ref Serviceenginegroup#vcenter_ref}
  */
  readonly vcenterRef: string;
  /**
  * clusters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#clusters Serviceenginegroup#clusters}
  */
  readonly clusters?: ServiceenginegroupVcentersClusters[] | cdktf.IResolvable;
  /**
  * nsxt_clusters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#nsxt_clusters Serviceenginegroup#nsxt_clusters}
  */
  readonly nsxtClusters?: ServiceenginegroupVcentersNsxtClusters[] | cdktf.IResolvable;
  /**
  * nsxt_datastores block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#nsxt_datastores Serviceenginegroup#nsxt_datastores}
  */
  readonly nsxtDatastores?: ServiceenginegroupVcentersNsxtDatastores[] | cdktf.IResolvable;
  /**
  * nsxt_hosts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#nsxt_hosts Serviceenginegroup#nsxt_hosts}
  */
  readonly nsxtHosts?: ServiceenginegroupVcentersNsxtHosts[] | cdktf.IResolvable;
}

export function serviceenginegroupVcentersToTerraform(struct?: ServiceenginegroupVcenters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    vcenter_folder: cdktf.stringToTerraform(struct!.vcenterFolder),
    vcenter_ref: cdktf.stringToTerraform(struct!.vcenterRef),
    clusters: cdktf.listMapper(serviceenginegroupVcentersClustersToTerraform, true)(struct!.clusters),
    nsxt_clusters: cdktf.listMapper(serviceenginegroupVcentersNsxtClustersToTerraform, true)(struct!.nsxtClusters),
    nsxt_datastores: cdktf.listMapper(serviceenginegroupVcentersNsxtDatastoresToTerraform, true)(struct!.nsxtDatastores),
    nsxt_hosts: cdktf.listMapper(serviceenginegroupVcentersNsxtHostsToTerraform, true)(struct!.nsxtHosts),
  }
}


export function serviceenginegroupVcentersToHclTerraform(struct?: ServiceenginegroupVcenters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    vcenter_folder: {
      value: cdktf.stringToHclTerraform(struct!.vcenterFolder),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vcenter_ref: {
      value: cdktf.stringToHclTerraform(struct!.vcenterRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    clusters: {
      value: cdktf.listMapperHcl(serviceenginegroupVcentersClustersToHclTerraform, true)(struct!.clusters),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceenginegroupVcentersClustersList",
    },
    nsxt_clusters: {
      value: cdktf.listMapperHcl(serviceenginegroupVcentersNsxtClustersToHclTerraform, true)(struct!.nsxtClusters),
      isBlock: true,
      type: "set",
      storageClassType: "ServiceenginegroupVcentersNsxtClustersList",
    },
    nsxt_datastores: {
      value: cdktf.listMapperHcl(serviceenginegroupVcentersNsxtDatastoresToHclTerraform, true)(struct!.nsxtDatastores),
      isBlock: true,
      type: "set",
      storageClassType: "ServiceenginegroupVcentersNsxtDatastoresList",
    },
    nsxt_hosts: {
      value: cdktf.listMapperHcl(serviceenginegroupVcentersNsxtHostsToHclTerraform, true)(struct!.nsxtHosts),
      isBlock: true,
      type: "set",
      storageClassType: "ServiceenginegroupVcentersNsxtHostsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceenginegroupVcentersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceenginegroupVcenters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._vcenterFolder !== undefined) {
      hasAnyValues = true;
      internalValueResult.vcenterFolder = this._vcenterFolder;
    }
    if (this._vcenterRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.vcenterRef = this._vcenterRef;
    }
    if (this._clusters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusters = this._clusters?.internalValue;
    }
    if (this._nsxtClusters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nsxtClusters = this._nsxtClusters?.internalValue;
    }
    if (this._nsxtDatastores?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nsxtDatastores = this._nsxtDatastores?.internalValue;
    }
    if (this._nsxtHosts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nsxtHosts = this._nsxtHosts?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceenginegroupVcenters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._vcenterFolder = undefined;
      this._vcenterRef = undefined;
      this._clusters.internalValue = undefined;
      this._nsxtClusters.internalValue = undefined;
      this._nsxtDatastores.internalValue = undefined;
      this._nsxtHosts.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._vcenterFolder = value.vcenterFolder;
      this._vcenterRef = value.vcenterRef;
      this._clusters.internalValue = value.clusters;
      this._nsxtClusters.internalValue = value.nsxtClusters;
      this._nsxtDatastores.internalValue = value.nsxtDatastores;
      this._nsxtHosts.internalValue = value.nsxtHosts;
    }
  }

  // vcenter_folder - computed: true, optional: true, required: false
  private _vcenterFolder?: string; 
  public get vcenterFolder() {
    return this.getStringAttribute('vcenter_folder');
  }
  public set vcenterFolder(value: string) {
    this._vcenterFolder = value;
  }
  public resetVcenterFolder() {
    this._vcenterFolder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vcenterFolderInput() {
    return this._vcenterFolder;
  }

  // vcenter_ref - computed: false, optional: false, required: true
  private _vcenterRef?: string; 
  public get vcenterRef() {
    return this.getStringAttribute('vcenter_ref');
  }
  public set vcenterRef(value: string) {
    this._vcenterRef = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vcenterRefInput() {
    return this._vcenterRef;
  }

  // clusters - computed: false, optional: true, required: false
  private _clusters = new ServiceenginegroupVcentersClustersList(this, "clusters", false);
  public get clusters() {
    return this._clusters;
  }
  public putClusters(value: ServiceenginegroupVcentersClusters[] | cdktf.IResolvable) {
    this._clusters.internalValue = value;
  }
  public resetClusters() {
    this._clusters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clustersInput() {
    return this._clusters.internalValue;
  }

  // nsxt_clusters - computed: false, optional: true, required: false
  private _nsxtClusters = new ServiceenginegroupVcentersNsxtClustersList(this, "nsxt_clusters", true);
  public get nsxtClusters() {
    return this._nsxtClusters;
  }
  public putNsxtClusters(value: ServiceenginegroupVcentersNsxtClusters[] | cdktf.IResolvable) {
    this._nsxtClusters.internalValue = value;
  }
  public resetNsxtClusters() {
    this._nsxtClusters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsxtClustersInput() {
    return this._nsxtClusters.internalValue;
  }

  // nsxt_datastores - computed: false, optional: true, required: false
  private _nsxtDatastores = new ServiceenginegroupVcentersNsxtDatastoresList(this, "nsxt_datastores", true);
  public get nsxtDatastores() {
    return this._nsxtDatastores;
  }
  public putNsxtDatastores(value: ServiceenginegroupVcentersNsxtDatastores[] | cdktf.IResolvable) {
    this._nsxtDatastores.internalValue = value;
  }
  public resetNsxtDatastores() {
    this._nsxtDatastores.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsxtDatastoresInput() {
    return this._nsxtDatastores.internalValue;
  }

  // nsxt_hosts - computed: false, optional: true, required: false
  private _nsxtHosts = new ServiceenginegroupVcentersNsxtHostsList(this, "nsxt_hosts", true);
  public get nsxtHosts() {
    return this._nsxtHosts;
  }
  public putNsxtHosts(value: ServiceenginegroupVcentersNsxtHosts[] | cdktf.IResolvable) {
    this._nsxtHosts.internalValue = value;
  }
  public resetNsxtHosts() {
    this._nsxtHosts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsxtHostsInput() {
    return this._nsxtHosts.internalValue;
  }
}

export class ServiceenginegroupVcentersList extends cdktf.ComplexList {
  public internalValue? : ServiceenginegroupVcenters[] | cdktf.IResolvable

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
  public get(index: number): ServiceenginegroupVcentersOutputReference {
    return new ServiceenginegroupVcentersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceenginegroupVipAsgConfigurationZones {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#availability_zone Serviceenginegroup#availability_zone}
  */
  readonly availabilityZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#fip_capable Serviceenginegroup#fip_capable}
  */
  readonly fipCapable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#subnet_uuid Serviceenginegroup#subnet_uuid}
  */
  readonly subnetUuid?: string;
}

export function serviceenginegroupVipAsgConfigurationZonesToTerraform(struct?: ServiceenginegroupVipAsgConfigurationZones | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    availability_zone: cdktf.stringToTerraform(struct!.availabilityZone),
    fip_capable: cdktf.stringToTerraform(struct!.fipCapable),
    subnet_uuid: cdktf.stringToTerraform(struct!.subnetUuid),
  }
}


export function serviceenginegroupVipAsgConfigurationZonesToHclTerraform(struct?: ServiceenginegroupVipAsgConfigurationZones | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    availability_zone: {
      value: cdktf.stringToHclTerraform(struct!.availabilityZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fip_capable: {
      value: cdktf.stringToHclTerraform(struct!.fipCapable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_uuid: {
      value: cdktf.stringToHclTerraform(struct!.subnetUuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceenginegroupVipAsgConfigurationZonesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceenginegroupVipAsgConfigurationZones | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availabilityZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityZone = this._availabilityZone;
    }
    if (this._fipCapable !== undefined) {
      hasAnyValues = true;
      internalValueResult.fipCapable = this._fipCapable;
    }
    if (this._subnetUuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetUuid = this._subnetUuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceenginegroupVipAsgConfigurationZones | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._availabilityZone = undefined;
      this._fipCapable = undefined;
      this._subnetUuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._availabilityZone = value.availabilityZone;
      this._fipCapable = value.fipCapable;
      this._subnetUuid = value.subnetUuid;
    }
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

  // fip_capable - computed: true, optional: true, required: false
  private _fipCapable?: string; 
  public get fipCapable() {
    return this.getStringAttribute('fip_capable');
  }
  public set fipCapable(value: string) {
    this._fipCapable = value;
  }
  public resetFipCapable() {
    this._fipCapable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fipCapableInput() {
    return this._fipCapable;
  }

  // subnet_uuid - computed: true, optional: true, required: false
  private _subnetUuid?: string; 
  public get subnetUuid() {
    return this.getStringAttribute('subnet_uuid');
  }
  public set subnetUuid(value: string) {
    this._subnetUuid = value;
  }
  public resetSubnetUuid() {
    this._subnetUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetUuidInput() {
    return this._subnetUuid;
  }
}

export class ServiceenginegroupVipAsgConfigurationZonesList extends cdktf.ComplexList {
  public internalValue? : ServiceenginegroupVipAsgConfigurationZones[] | cdktf.IResolvable

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
  public get(index: number): ServiceenginegroupVipAsgConfigurationZonesOutputReference {
    return new ServiceenginegroupVipAsgConfigurationZonesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceenginegroupVipAsgConfiguration {
  /**
  * zones block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#zones Serviceenginegroup#zones}
  */
  readonly zones?: ServiceenginegroupVipAsgConfigurationZones[] | cdktf.IResolvable;
}

export function serviceenginegroupVipAsgConfigurationToTerraform(struct?: ServiceenginegroupVipAsgConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    zones: cdktf.listMapper(serviceenginegroupVipAsgConfigurationZonesToTerraform, true)(struct!.zones),
  }
}


export function serviceenginegroupVipAsgConfigurationToHclTerraform(struct?: ServiceenginegroupVipAsgConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    zones: {
      value: cdktf.listMapperHcl(serviceenginegroupVipAsgConfigurationZonesToHclTerraform, true)(struct!.zones),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceenginegroupVipAsgConfigurationZonesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceenginegroupVipAsgConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceenginegroupVipAsgConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._zones?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.zones = this._zones?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceenginegroupVipAsgConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._zones.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._zones.internalValue = value.zones;
    }
  }

  // zones - computed: false, optional: true, required: false
  private _zones = new ServiceenginegroupVipAsgConfigurationZonesList(this, "zones", false);
  public get zones() {
    return this._zones;
  }
  public putZones(value: ServiceenginegroupVipAsgConfigurationZones[] | cdktf.IResolvable) {
    this._zones.internalValue = value;
  }
  public resetZones() {
    this._zones.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zonesInput() {
    return this._zones.internalValue;
  }
}

export class ServiceenginegroupVipAsgConfigurationList extends cdktf.ComplexList {
  public internalValue? : ServiceenginegroupVipAsgConfiguration[] | cdktf.IResolvable

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
  public get(index: number): ServiceenginegroupVipAsgConfigurationOutputReference {
    return new ServiceenginegroupVipAsgConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceenginegroupVipAsgPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#dns_cooldown Serviceenginegroup#dns_cooldown}
  */
  readonly dnsCooldown?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#max_size Serviceenginegroup#max_size}
  */
  readonly maxSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#min_size Serviceenginegroup#min_size}
  */
  readonly minSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#suspend Serviceenginegroup#suspend}
  */
  readonly suspend?: string;
}

export function serviceenginegroupVipAsgPolicyToTerraform(struct?: ServiceenginegroupVipAsgPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_cooldown: cdktf.stringToTerraform(struct!.dnsCooldown),
    max_size: cdktf.stringToTerraform(struct!.maxSize),
    min_size: cdktf.stringToTerraform(struct!.minSize),
    suspend: cdktf.stringToTerraform(struct!.suspend),
  }
}


export function serviceenginegroupVipAsgPolicyToHclTerraform(struct?: ServiceenginegroupVipAsgPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns_cooldown: {
      value: cdktf.stringToHclTerraform(struct!.dnsCooldown),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_size: {
      value: cdktf.stringToHclTerraform(struct!.maxSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_size: {
      value: cdktf.stringToHclTerraform(struct!.minSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    suspend: {
      value: cdktf.stringToHclTerraform(struct!.suspend),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceenginegroupVipAsgPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceenginegroupVipAsgPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsCooldown !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsCooldown = this._dnsCooldown;
    }
    if (this._maxSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSize = this._maxSize;
    }
    if (this._minSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.minSize = this._minSize;
    }
    if (this._suspend !== undefined) {
      hasAnyValues = true;
      internalValueResult.suspend = this._suspend;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceenginegroupVipAsgPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dnsCooldown = undefined;
      this._maxSize = undefined;
      this._minSize = undefined;
      this._suspend = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dnsCooldown = value.dnsCooldown;
      this._maxSize = value.maxSize;
      this._minSize = value.minSize;
      this._suspend = value.suspend;
    }
  }

  // dns_cooldown - computed: false, optional: true, required: false
  private _dnsCooldown?: string; 
  public get dnsCooldown() {
    return this.getStringAttribute('dns_cooldown');
  }
  public set dnsCooldown(value: string) {
    this._dnsCooldown = value;
  }
  public resetDnsCooldown() {
    this._dnsCooldown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsCooldownInput() {
    return this._dnsCooldown;
  }

  // max_size - computed: false, optional: true, required: false
  private _maxSize?: string; 
  public get maxSize() {
    return this.getStringAttribute('max_size');
  }
  public set maxSize(value: string) {
    this._maxSize = value;
  }
  public resetMaxSize() {
    this._maxSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSizeInput() {
    return this._maxSize;
  }

  // min_size - computed: false, optional: true, required: false
  private _minSize?: string; 
  public get minSize() {
    return this.getStringAttribute('min_size');
  }
  public set minSize(value: string) {
    this._minSize = value;
  }
  public resetMinSize() {
    this._minSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minSizeInput() {
    return this._minSize;
  }

  // suspend - computed: false, optional: true, required: false
  private _suspend?: string; 
  public get suspend() {
    return this.getStringAttribute('suspend');
  }
  public set suspend(value: string) {
    this._suspend = value;
  }
  public resetSuspend() {
    this._suspend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suspendInput() {
    return this._suspend;
  }
}

export class ServiceenginegroupVipAsgPolicyList extends cdktf.ComplexList {
  public internalValue? : ServiceenginegroupVipAsgPolicy[] | cdktf.IResolvable

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
  public get(index: number): ServiceenginegroupVipAsgPolicyOutputReference {
    return new ServiceenginegroupVipAsgPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceenginegroupVipAsg {
  /**
  * configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#configuration Serviceenginegroup#configuration}
  */
  readonly configuration?: ServiceenginegroupVipAsgConfiguration[] | cdktf.IResolvable;
  /**
  * policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#policy Serviceenginegroup#policy}
  */
  readonly policy?: ServiceenginegroupVipAsgPolicy[] | cdktf.IResolvable;
}

export function serviceenginegroupVipAsgToTerraform(struct?: ServiceenginegroupVipAsg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    configuration: cdktf.listMapper(serviceenginegroupVipAsgConfigurationToTerraform, true)(struct!.configuration),
    policy: cdktf.listMapper(serviceenginegroupVipAsgPolicyToTerraform, true)(struct!.policy),
  }
}


export function serviceenginegroupVipAsgToHclTerraform(struct?: ServiceenginegroupVipAsg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    configuration: {
      value: cdktf.listMapperHcl(serviceenginegroupVipAsgConfigurationToHclTerraform, true)(struct!.configuration),
      isBlock: true,
      type: "set",
      storageClassType: "ServiceenginegroupVipAsgConfigurationList",
    },
    policy: {
      value: cdktf.listMapperHcl(serviceenginegroupVipAsgPolicyToHclTerraform, true)(struct!.policy),
      isBlock: true,
      type: "set",
      storageClassType: "ServiceenginegroupVipAsgPolicyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceenginegroupVipAsgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceenginegroupVipAsg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configuration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuration = this._configuration?.internalValue;
    }
    if (this._policy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.policy = this._policy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceenginegroupVipAsg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configuration.internalValue = undefined;
      this._policy.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configuration.internalValue = value.configuration;
      this._policy.internalValue = value.policy;
    }
  }

  // configuration - computed: false, optional: true, required: false
  private _configuration = new ServiceenginegroupVipAsgConfigurationList(this, "configuration", true);
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: ServiceenginegroupVipAsgConfiguration[] | cdktf.IResolvable) {
    this._configuration.internalValue = value;
  }
  public resetConfiguration() {
    this._configuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
  }

  // policy - computed: false, optional: true, required: false
  private _policy = new ServiceenginegroupVipAsgPolicyList(this, "policy", true);
  public get policy() {
    return this._policy;
  }
  public putPolicy(value: ServiceenginegroupVipAsgPolicy[] | cdktf.IResolvable) {
    this._policy.internalValue = value;
  }
  public resetPolicy() {
    this._policy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy.internalValue;
  }
}

export class ServiceenginegroupVipAsgList extends cdktf.ComplexList {
  public internalValue? : ServiceenginegroupVipAsg[] | cdktf.IResolvable

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
  public get(index: number): ServiceenginegroupVipAsgOutputReference {
    return new ServiceenginegroupVipAsgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceenginegroupVssPlacement {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#core_nonaffinity Serviceenginegroup#core_nonaffinity}
  */
  readonly coreNonaffinity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#num_subcores Serviceenginegroup#num_subcores}
  */
  readonly numSubcores?: string;
}

export function serviceenginegroupVssPlacementToTerraform(struct?: ServiceenginegroupVssPlacement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    core_nonaffinity: cdktf.stringToTerraform(struct!.coreNonaffinity),
    num_subcores: cdktf.stringToTerraform(struct!.numSubcores),
  }
}


export function serviceenginegroupVssPlacementToHclTerraform(struct?: ServiceenginegroupVssPlacement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    core_nonaffinity: {
      value: cdktf.stringToHclTerraform(struct!.coreNonaffinity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num_subcores: {
      value: cdktf.stringToHclTerraform(struct!.numSubcores),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceenginegroupVssPlacementOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceenginegroupVssPlacement | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._coreNonaffinity !== undefined) {
      hasAnyValues = true;
      internalValueResult.coreNonaffinity = this._coreNonaffinity;
    }
    if (this._numSubcores !== undefined) {
      hasAnyValues = true;
      internalValueResult.numSubcores = this._numSubcores;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceenginegroupVssPlacement | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._coreNonaffinity = undefined;
      this._numSubcores = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._coreNonaffinity = value.coreNonaffinity;
      this._numSubcores = value.numSubcores;
    }
  }

  // core_nonaffinity - computed: false, optional: true, required: false
  private _coreNonaffinity?: string; 
  public get coreNonaffinity() {
    return this.getStringAttribute('core_nonaffinity');
  }
  public set coreNonaffinity(value: string) {
    this._coreNonaffinity = value;
  }
  public resetCoreNonaffinity() {
    this._coreNonaffinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coreNonaffinityInput() {
    return this._coreNonaffinity;
  }

  // num_subcores - computed: false, optional: true, required: false
  private _numSubcores?: string; 
  public get numSubcores() {
    return this.getStringAttribute('num_subcores');
  }
  public set numSubcores(value: string) {
    this._numSubcores = value;
  }
  public resetNumSubcores() {
    this._numSubcores = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numSubcoresInput() {
    return this._numSubcores;
  }
}

export class ServiceenginegroupVssPlacementList extends cdktf.ComplexList {
  public internalValue? : ServiceenginegroupVssPlacement[] | cdktf.IResolvable

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
  public get(index: number): ServiceenginegroupVssPlacementOutputReference {
    return new ServiceenginegroupVssPlacementOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup avi_serviceenginegroup}
*/
export class Serviceenginegroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "avi_serviceenginegroup";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Serviceenginegroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Serviceenginegroup to import
  * @param importFromId The id of the existing Serviceenginegroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Serviceenginegroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "avi_serviceenginegroup", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/serviceenginegroup avi_serviceenginegroup} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServiceenginegroupConfig
  */
  public constructor(scope: Construct, id: string, config: ServiceenginegroupConfig) {
    super(scope, id, {
      terraformResourceType: 'avi_serviceenginegroup',
      terraformGeneratorMetadata: {
        providerName: 'avi',
        providerVersion: '30.2.5',
        providerVersionConstraint: '30.2.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._acceleratedNetworking = config.acceleratedNetworking;
    this._activeStandby = config.activeStandby;
    this._aggressiveFailureDetection = config.aggressiveFailureDetection;
    this._algo = config.algo;
    this._allowBurst = config.allowBurst;
    this._appCachePercent = config.appCachePercent;
    this._appCacheThreshold = config.appCacheThreshold;
    this._appLearningMemoryPercent = config.appLearningMemoryPercent;
    this._archiveShmLimit = config.archiveShmLimit;
    this._asyncSsl = config.asyncSsl;
    this._asyncSslThreads = config.asyncSslThreads;
    this._autoRebalance = config.autoRebalance;
    this._autoRebalanceCapacityPerSe = config.autoRebalanceCapacityPerSe;
    this._autoRebalanceCriteria = config.autoRebalanceCriteria;
    this._autoRebalanceInterval = config.autoRebalanceInterval;
    this._autoRedistributeActiveStandbyLoad = config.autoRedistributeActiveStandbyLoad;
    this._availabilityZoneRefs = config.availabilityZoneRefs;
    this._baremetalDispatcherHandlesFlows = config.baremetalDispatcherHandlesFlows;
    this._bgpPeerMonitorFailoverEnabled = config.bgpPeerMonitorFailoverEnabled;
    this._bgpStateUpdateInterval = config.bgpStateUpdateInterval;
    this._bufferSe = config.bufferSe;
    this._cloudRef = config.cloudRef;
    this._compressIpRulesForEachNsSubnet = config.compressIpRulesForEachNsSubnet;
    this._configDebugsOnAllCores = config.configDebugsOnAllCores;
    this._connectionMemoryPercentage = config.connectionMemoryPercentage;
    this._coreShmAppCache = config.coreShmAppCache;
    this._coreShmAppLearning = config.coreShmAppLearning;
    this._cpuReserve = config.cpuReserve;
    this._cpuSocketAffinity = config.cpuSocketAffinity;
    this._customSecuritygroupsData = config.customSecuritygroupsData;
    this._customSecuritygroupsMgmt = config.customSecuritygroupsMgmt;
    this._dataNetworkId = config.dataNetworkId;
    this._datascriptTimeout = config.datascriptTimeout;
    this._deactivateIpv6Discovery = config.deactivateIpv6Discovery;
    this._deactivateKniFilteringAtDispatcher = config.deactivateKniFilteringAtDispatcher;
    this._dedicatedDispatcherCore = config.dedicatedDispatcherCore;
    this._description = config.description;
    this._disableAviSecuritygroups = config.disableAviSecuritygroups;
    this._disableCsumOffloads = config.disableCsumOffloads;
    this._disableFlowProbes = config.disableFlowProbes;
    this._disableGro = config.disableGro;
    this._disableSeMemoryCheck = config.disableSeMemoryCheck;
    this._disableTso = config.disableTso;
    this._diskPerSe = config.diskPerSe;
    this._distributeLoadActiveStandby = config.distributeLoadActiveStandby;
    this._distributeQueues = config.distributeQueues;
    this._distributeVnics = config.distributeVnics;
    this._downstreamSendTimeout = config.downstreamSendTimeout;
    this._dpAggressiveDeqIntervalMsec = config.dpAggressiveDeqIntervalMsec;
    this._dpAggressiveEnqIntervalMsec = config.dpAggressiveEnqIntervalMsec;
    this._dpAggressiveHbFrequency = config.dpAggressiveHbFrequency;
    this._dpAggressiveHbTimeoutCount = config.dpAggressiveHbTimeoutCount;
    this._dpDeqIntervalMsec = config.dpDeqIntervalMsec;
    this._dpEnqIntervalMsec = config.dpEnqIntervalMsec;
    this._dpHbFrequency = config.dpHbFrequency;
    this._dpHbTimeoutCount = config.dpHbTimeoutCount;
    this._dpdkGroTimeoutInterval = config.dpdkGroTimeoutInterval;
    this._enableGratarpPermanent = config.enableGratarpPermanent;
    this._enableHsmLog = config.enableHsmLog;
    this._enableHsmPriming = config.enableHsmPriming;
    this._enableMultiLb = config.enableMultiLb;
    this._enablePcapTxRing = config.enablePcapTxRing;
    this._ephemeralPortrangeEnd = config.ephemeralPortrangeEnd;
    this._ephemeralPortrangeStart = config.ephemeralPortrangeStart;
    this._extraConfigMultiplier = config.extraConfigMultiplier;
    this._extraSharedConfigMemory = config.extraSharedConfigMemory;
    this._flowTableNewSynMaxEntries = config.flowTableNewSynMaxEntries;
    this._freeListSize = config.freeListSize;
    this._gratarpPermanentPeriodicity = config.gratarpPermanentPeriodicity;
    this._grpcChannelConnectTimeout = config.grpcChannelConnectTimeout;
    this._gveEnabled = config.gveEnabled;
    this._haMode = config.haMode;
    this._handlePerPktAttack = config.handlePerPktAttack;
    this._hardwaresecuritymodulegroupRef = config.hardwaresecuritymodulegroupRef;
    this._heapMinimumConfigMemory = config.heapMinimumConfigMemory;
    this._hmOnStandby = config.hmOnStandby;
    this._hostAttributeKey = config.hostAttributeKey;
    this._hostAttributeValue = config.hostAttributeValue;
    this._hostGatewayMonitor = config.hostGatewayMonitor;
    this._httpRumConsoleLog = config.httpRumConsoleLog;
    this._httpRumMinContentLength = config.httpRumMinContentLength;
    this._hybridRssMode = config.hybridRssMode;
    this._hypervisor = config.hypervisor;
    this._id = config.id;
    this._ignoreDockerMacChange = config.ignoreDockerMacChange;
    this._ignoreRttThreshold = config.ignoreRttThreshold;
    this._ingressAccessData = config.ingressAccessData;
    this._ingressAccessMgmt = config.ingressAccessMgmt;
    this._instanceFlavor = config.instanceFlavor;
    this._l7ConnsPerCore = config.l7ConnsPerCore;
    this._l7ResvdListenConnsPerCore = config.l7ResvdListenConnsPerCore;
    this._lbactionNumRequestsToDispatch = config.lbactionNumRequestsToDispatch;
    this._lbactionRqPerRequestMaxRetries = config.lbactionRqPerRequestMaxRetries;
    this._leastLoadCoreSelection = config.leastLoadCoreSelection;
    this._licenseTier = config.licenseTier;
    this._licenseType = config.licenseType;
    this._logAgentCompressLogs = config.logAgentCompressLogs;
    this._logAgentDebugEnabled = config.logAgentDebugEnabled;
    this._logAgentFileSzAppl = config.logAgentFileSzAppl;
    this._logAgentFileSzConn = config.logAgentFileSzConn;
    this._logAgentFileSzDebug = config.logAgentFileSzDebug;
    this._logAgentFileSzEvent = config.logAgentFileSzEvent;
    this._logAgentLogStorageMinSz = config.logAgentLogStorageMinSz;
    this._logAgentMaxConcurrentRsync = config.logAgentMaxConcurrentRsync;
    this._logAgentMaxStorageExcessPercent = config.logAgentMaxStorageExcessPercent;
    this._logAgentMaxStorageIgnorePercent = config.logAgentMaxStorageIgnorePercent;
    this._logAgentMinStoragePerVs = config.logAgentMinStoragePerVs;
    this._logAgentSleepInterval = config.logAgentSleepInterval;
    this._logAgentTraceEnabled = config.logAgentTraceEnabled;
    this._logAgentUnknownVsTimer = config.logAgentUnknownVsTimer;
    this._logDisksz = config.logDisksz;
    this._logMallocFailure = config.logMallocFailure;
    this._logMessageMaxFileListSize = config.logMessageMaxFileListSize;
    this._maxConcurrentExternalHm = config.maxConcurrentExternalHm;
    this._maxCpuUsage = config.maxCpuUsage;
    this._maxMemoryPerMempool = config.maxMemoryPerMempool;
    this._maxNumHttpSessionsToStore = config.maxNumHttpSessionsToStore;
    this._maxNumSeDps = config.maxNumSeDps;
    this._maxPublicIpsPerLb = config.maxPublicIpsPerLb;
    this._maxQueuesPerVnic = config.maxQueuesPerVnic;
    this._maxRulesPerLb = config.maxRulesPerLb;
    this._maxScaleoutPerVs = config.maxScaleoutPerVs;
    this._maxSe = config.maxSe;
    this._maxSkbFrags = config.maxSkbFrags;
    this._maxVsPerSe = config.maxVsPerSe;
    this._memReserve = config.memReserve;
    this._memoryForConfigUpdate = config.memoryForConfigUpdate;
    this._memoryPerSe = config.memoryPerSe;
    this._metricsCollectionMode = config.metricsCollectionMode;
    this._mgmtNetworkRef = config.mgmtNetworkRef;
    this._minCpuUsage = config.minCpuUsage;
    this._minScaleoutPerVs = config.minScaleoutPerVs;
    this._minSe = config.minSe;
    this._minimumConnectionMemory = config.minimumConnectionMemory;
    this._multicastEnable = config.multicastEnable;
    this._nLogStreamingThreads = config.nLogStreamingThreads;
    this._name = config.name;
    this._netlinkPollerThreads = config.netlinkPollerThreads;
    this._netlinkSockBufSize = config.netlinkSockBufSize;
    this._ngxFreeConnectionStack = config.ngxFreeConnectionStack;
    this._nonSignificantLogThrottle = config.nonSignificantLogThrottle;
    this._nsHelperDeqIntervalMsec = config.nsHelperDeqIntervalMsec;
    this._ntpSyncFailEvent = config.ntpSyncFailEvent;
    this._ntpSyncStatusInterval = config.ntpSyncStatusInterval;
    this._numDispatcherCores = config.numDispatcherCores;
    this._numDispatcherQueues = config.numDispatcherQueues;
    this._numFlowCoresSumChangesToIgnore = config.numFlowCoresSumChangesToIgnore;
    this._objsyncPort = config.objsyncPort;
    this._openstackAvailabilityZones = config.openstackAvailabilityZones;
    this._openstackMgmtNetworkName = config.openstackMgmtNetworkName;
    this._openstackMgmtNetworkUuid = config.openstackMgmtNetworkUuid;
    this._osReservedMemory = config.osReservedMemory;
    this._pathMtuDiscoveryV4 = config.pathMtuDiscoveryV4;
    this._pathMtuDiscoveryV6 = config.pathMtuDiscoveryV6;
    this._pcapTxMode = config.pcapTxMode;
    this._pcapTxRingRdBalancingFactor = config.pcapTxRingRdBalancingFactor;
    this._perApp = config.perApp;
    this._perVsAdmissionControl = config.perVsAdmissionControl;
    this._placementMode = config.placementMode;
    this._rebootOnPanic = config.rebootOnPanic;
    this._replayVrfRoutesInterval = config.replayVrfRoutesInterval;
    this._resyncTimeInterval = config.resyncTimeInterval;
    this._sdbFlushInterval = config.sdbFlushInterval;
    this._sdbKeyTimeout = config.sdbKeyTimeout;
    this._sdbPipelineSize = config.sdbPipelineSize;
    this._sdbScanCount = config.sdbScanCount;
    this._seBandwidthType = config.seBandwidthType;
    this._seDebugTraceSz = config.seDebugTraceSz;
    this._seDelayedFlowDelete = config.seDelayedFlowDelete;
    this._seDeprovisionDelay = config.seDeprovisionDelay;
    this._seDpHmDrops = config.seDpHmDrops;
    this._seDpIfStatePollInterval = config.seDpIfStatePollInterval;
    this._seDpIsolation = config.seDpIsolation;
    this._seDpIsolationNumNonDpCpus = config.seDpIsolationNumNonDpCpus;
    this._seDpLogNfEnqueuePercent = config.seDpLogNfEnqueuePercent;
    this._seDpLogUdfEnqueuePercent = config.seDpLogUdfEnqueuePercent;
    this._seDpMaxHbVersion = config.seDpMaxHbVersion;
    this._seDpVnicQueueStallEventSleep = config.seDpVnicQueueStallEventSleep;
    this._seDpVnicQueueStallThreshold = config.seDpVnicQueueStallThreshold;
    this._seDpVnicQueueStallTimeout = config.seDpVnicQueueStallTimeout;
    this._seDpVnicRestartOnQueueStallCount = config.seDpVnicRestartOnQueueStallCount;
    this._seDpVnicStallSeRestartWindow = config.seDpVnicStallSeRestartWindow;
    this._seDpdkPmd = config.seDpdkPmd;
    this._seDumpCoreOnAssert = config.seDumpCoreOnAssert;
    this._seEmulatedCores = config.seEmulatedCores;
    this._seFlowProbeRetries = config.seFlowProbeRetries;
    this._seFlowProbeRetryTimer = config.seFlowProbeRetryTimer;
    this._seHyperthreadedMode = config.seHyperthreadedMode;
    this._seIpEncapIpc = config.seIpEncapIpc;
    this._seKniBurstFactor = config.seKniBurstFactor;
    this._seL3EncapIpc = config.seL3EncapIpc;
    this._seLogBufferAppBlockingDequeue = config.seLogBufferAppBlockingDequeue;
    this._seLogBufferConnBlockingDequeue = config.seLogBufferConnBlockingDequeue;
    this._seLogBufferEventsBlockingDequeue = config.seLogBufferEventsBlockingDequeue;
    this._seLro = config.seLro;
    this._seMpRingRetryCount = config.seMpRingRetryCount;
    this._seMtu = config.seMtu;
    this._seNamePrefix = config.seNamePrefix;
    this._sePacketBufferMax = config.sePacketBufferMax;
    this._sePcapLookahead = config.sePcapLookahead;
    this._sePcapPktCount = config.sePcapPktCount;
    this._sePcapPktSz = config.sePcapPktSz;
    this._sePcapQdiscBypass = config.sePcapQdiscBypass;
    this._sePcapReinitFrequency = config.sePcapReinitFrequency;
    this._sePcapReinitThreshold = config.sePcapReinitThreshold;
    this._seProbePort = config.seProbePort;
    this._seRumSamplingNavInterval = config.seRumSamplingNavInterval;
    this._seRumSamplingNavPercent = config.seRumSamplingNavPercent;
    this._seRumSamplingResInterval = config.seRumSamplingResInterval;
    this._seRumSamplingResPercent = config.seRumSamplingResPercent;
    this._seSbDedicatedCore = config.seSbDedicatedCore;
    this._seSbThreads = config.seSbThreads;
    this._seThreadMultiplier = config.seThreadMultiplier;
    this._seTunnelMode = config.seTunnelMode;
    this._seTunnelUdpPort = config.seTunnelUdpPort;
    this._seTxBatchSize = config.seTxBatchSize;
    this._seTxqThreshold = config.seTxqThreshold;
    this._seUdpEncapIpc = config.seUdpEncapIpc;
    this._seUseDpdk = config.seUseDpdk;
    this._seVnicTxSwQueueFlushFrequency = config.seVnicTxSwQueueFlushFrequency;
    this._seVnicTxSwQueueSize = config.seVnicTxSwQueueSize;
    this._seVsHbMaxPktsInBatch = config.seVsHbMaxPktsInBatch;
    this._seVsHbMaxVsInPkt = config.seVsHbMaxVsInPkt;
    this._selfSeElection = config.selfSeElection;
    this._sendSeReadyTimeout = config.sendSeReadyTimeout;
    this._shmMinimumConfigMemory = config.shmMinimumConfigMemory;
    this._significantLogThrottle = config.significantLogThrottle;
    this._sslPreprocessSniHostname = config.sslPreprocessSniHostname;
    this._sslSessCachePerVs = config.sslSessCachePerVs;
    this._tenantRef = config.tenantRef;
    this._transientSharedMemoryMax = config.transientSharedMemoryMax;
    this._udfLogThrottle = config.udfLogThrottle;
    this._upstreamConnectTimeout = config.upstreamConnectTimeout;
    this._upstreamConnpoolEnable = config.upstreamConnpoolEnable;
    this._upstreamReadTimeout = config.upstreamReadTimeout;
    this._upstreamSendTimeout = config.upstreamSendTimeout;
    this._useDpUtilForScaleout = config.useDpUtilForScaleout;
    this._useHyperthreadedCores = config.useHyperthreadedCores;
    this._useLegacyNetlink = config.useLegacyNetlink;
    this._useObjsync = config.useObjsync;
    this._useStandardAlb = config.useStandardAlb;
    this._userDefinedMetricAge = config.userDefinedMetricAge;
    this._uuid = config.uuid;
    this._vcenterDatastoreMode = config.vcenterDatastoreMode;
    this._vcenterDatastoresInclude = config.vcenterDatastoresInclude;
    this._vcenterFolder = config.vcenterFolder;
    this._vcenterParkingVnicPg = config.vcenterParkingVnicPg;
    this._vcpusPerSe = config.vcpusPerSe;
    this._vnicDhcpIpCheckInterval = config.vnicDhcpIpCheckInterval;
    this._vnicDhcpIpMaxRetries = config.vnicDhcpIpMaxRetries;
    this._vnicIpDeleteInterval = config.vnicIpDeleteInterval;
    this._vnicProbeInterval = config.vnicProbeInterval;
    this._vnicRpcRetryInterval = config.vnicRpcRetryInterval;
    this._vnicdbCmdHistorySize = config.vnicdbCmdHistorySize;
    this._vsHostRedundancy = config.vsHostRedundancy;
    this._vsScaleinTimeout = config.vsScaleinTimeout;
    this._vsScaleinTimeoutForUpgrade = config.vsScaleinTimeoutForUpgrade;
    this._vsScaleoutTimeout = config.vsScaleoutTimeout;
    this._vsSePrimarySwitchoverAdditionalWaitTime = config.vsSePrimarySwitchoverAdditionalWaitTime;
    this._vsSeScaleinAdditionalWaitTime = config.vsSeScaleinAdditionalWaitTime;
    this._vsSeScaleoutAdditionalWaitTime = config.vsSeScaleoutAdditionalWaitTime;
    this._vsSeScaleoutReadyTimeout = config.vsSeScaleoutReadyTimeout;
    this._vsSwitchoverTimeout = config.vsSwitchoverTimeout;
    this._vssPlacementEnabled = config.vssPlacementEnabled;
    this._wafMempool = config.wafMempool;
    this._wafMempoolSize = config.wafMempoolSize;
    this._configpbAttributes.internalValue = config.configpbAttributes;
    this._customTag.internalValue = config.customTag;
    this._gcpConfig.internalValue = config.gcpConfig;
    this._instanceFlavorInfo.internalValue = config.instanceFlavorInfo;
    this._iptables.internalValue = config.iptables;
    this._kniAllowedServerPorts.internalValue = config.kniAllowedServerPorts;
    this._labels.internalValue = config.labels;
    this._markers.internalValue = config.markers;
    this._mgmtSubnet.internalValue = config.mgmtSubnet;
    this._objsyncConfig.internalValue = config.objsyncConfig;
    this._realtimeSeMetrics.internalValue = config.realtimeSeMetrics;
    this._seDosProfile.internalValue = config.seDosProfile;
    this._seGroupAnalyticsPolicy.internalValue = config.seGroupAnalyticsPolicy;
    this._seRlProp.internalValue = config.seRlProp;
    this._seTimeTrackerProps.internalValue = config.seTimeTrackerProps;
    this._seTracertPortRange.internalValue = config.seTracertPortRange;
    this._serviceIp6Subnets.internalValue = config.serviceIp6Subnets;
    this._serviceIpSubnets.internalValue = config.serviceIpSubnets;
    this._userAgentCacheConfig.internalValue = config.userAgentCacheConfig;
    this._vcenterClusters.internalValue = config.vcenterClusters;
    this._vcenterDatastores.internalValue = config.vcenterDatastores;
    this._vcenterHosts.internalValue = config.vcenterHosts;
    this._vcenters.internalValue = config.vcenters;
    this._vipAsg.internalValue = config.vipAsg;
    this._vssPlacement.internalValue = config.vssPlacement;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accelerated_networking - computed: true, optional: true, required: false
  private _acceleratedNetworking?: string; 
  public get acceleratedNetworking() {
    return this.getStringAttribute('accelerated_networking');
  }
  public set acceleratedNetworking(value: string) {
    this._acceleratedNetworking = value;
  }
  public resetAcceleratedNetworking() {
    this._acceleratedNetworking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceleratedNetworkingInput() {
    return this._acceleratedNetworking;
  }

  // active_standby - computed: false, optional: true, required: false
  private _activeStandby?: string; 
  public get activeStandby() {
    return this.getStringAttribute('active_standby');
  }
  public set activeStandby(value: string) {
    this._activeStandby = value;
  }
  public resetActiveStandby() {
    this._activeStandby = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeStandbyInput() {
    return this._activeStandby;
  }

  // aggressive_failure_detection - computed: false, optional: true, required: false
  private _aggressiveFailureDetection?: string; 
  public get aggressiveFailureDetection() {
    return this.getStringAttribute('aggressive_failure_detection');
  }
  public set aggressiveFailureDetection(value: string) {
    this._aggressiveFailureDetection = value;
  }
  public resetAggressiveFailureDetection() {
    this._aggressiveFailureDetection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggressiveFailureDetectionInput() {
    return this._aggressiveFailureDetection;
  }

  // algo - computed: false, optional: true, required: false
  private _algo?: string; 
  public get algo() {
    return this.getStringAttribute('algo');
  }
  public set algo(value: string) {
    this._algo = value;
  }
  public resetAlgo() {
    this._algo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algoInput() {
    return this._algo;
  }

  // allow_burst - computed: true, optional: true, required: false
  private _allowBurst?: string; 
  public get allowBurst() {
    return this.getStringAttribute('allow_burst');
  }
  public set allowBurst(value: string) {
    this._allowBurst = value;
  }
  public resetAllowBurst() {
    this._allowBurst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowBurstInput() {
    return this._allowBurst;
  }

  // app_cache_percent - computed: false, optional: true, required: false
  private _appCachePercent?: string; 
  public get appCachePercent() {
    return this.getStringAttribute('app_cache_percent');
  }
  public set appCachePercent(value: string) {
    this._appCachePercent = value;
  }
  public resetAppCachePercent() {
    this._appCachePercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appCachePercentInput() {
    return this._appCachePercent;
  }

  // app_cache_threshold - computed: false, optional: true, required: false
  private _appCacheThreshold?: string; 
  public get appCacheThreshold() {
    return this.getStringAttribute('app_cache_threshold');
  }
  public set appCacheThreshold(value: string) {
    this._appCacheThreshold = value;
  }
  public resetAppCacheThreshold() {
    this._appCacheThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appCacheThresholdInput() {
    return this._appCacheThreshold;
  }

  // app_learning_memory_percent - computed: false, optional: true, required: false
  private _appLearningMemoryPercent?: string; 
  public get appLearningMemoryPercent() {
    return this.getStringAttribute('app_learning_memory_percent');
  }
  public set appLearningMemoryPercent(value: string) {
    this._appLearningMemoryPercent = value;
  }
  public resetAppLearningMemoryPercent() {
    this._appLearningMemoryPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appLearningMemoryPercentInput() {
    return this._appLearningMemoryPercent;
  }

  // archive_shm_limit - computed: false, optional: true, required: false
  private _archiveShmLimit?: string; 
  public get archiveShmLimit() {
    return this.getStringAttribute('archive_shm_limit');
  }
  public set archiveShmLimit(value: string) {
    this._archiveShmLimit = value;
  }
  public resetArchiveShmLimit() {
    this._archiveShmLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archiveShmLimitInput() {
    return this._archiveShmLimit;
  }

  // async_ssl - computed: false, optional: true, required: false
  private _asyncSsl?: string; 
  public get asyncSsl() {
    return this.getStringAttribute('async_ssl');
  }
  public set asyncSsl(value: string) {
    this._asyncSsl = value;
  }
  public resetAsyncSsl() {
    this._asyncSsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asyncSslInput() {
    return this._asyncSsl;
  }

  // async_ssl_threads - computed: false, optional: true, required: false
  private _asyncSslThreads?: string; 
  public get asyncSslThreads() {
    return this.getStringAttribute('async_ssl_threads');
  }
  public set asyncSslThreads(value: string) {
    this._asyncSslThreads = value;
  }
  public resetAsyncSslThreads() {
    this._asyncSslThreads = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asyncSslThreadsInput() {
    return this._asyncSslThreads;
  }

  // auto_rebalance - computed: false, optional: true, required: false
  private _autoRebalance?: string; 
  public get autoRebalance() {
    return this.getStringAttribute('auto_rebalance');
  }
  public set autoRebalance(value: string) {
    this._autoRebalance = value;
  }
  public resetAutoRebalance() {
    this._autoRebalance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRebalanceInput() {
    return this._autoRebalance;
  }

  // auto_rebalance_capacity_per_se - computed: false, optional: true, required: false
  private _autoRebalanceCapacityPerSe?: number[]; 
  public get autoRebalanceCapacityPerSe() {
    return this.getNumberListAttribute('auto_rebalance_capacity_per_se');
  }
  public set autoRebalanceCapacityPerSe(value: number[]) {
    this._autoRebalanceCapacityPerSe = value;
  }
  public resetAutoRebalanceCapacityPerSe() {
    this._autoRebalanceCapacityPerSe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRebalanceCapacityPerSeInput() {
    return this._autoRebalanceCapacityPerSe;
  }

  // auto_rebalance_criteria - computed: false, optional: true, required: false
  private _autoRebalanceCriteria?: string[]; 
  public get autoRebalanceCriteria() {
    return this.getListAttribute('auto_rebalance_criteria');
  }
  public set autoRebalanceCriteria(value: string[]) {
    this._autoRebalanceCriteria = value;
  }
  public resetAutoRebalanceCriteria() {
    this._autoRebalanceCriteria = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRebalanceCriteriaInput() {
    return this._autoRebalanceCriteria;
  }

  // auto_rebalance_interval - computed: false, optional: true, required: false
  private _autoRebalanceInterval?: string; 
  public get autoRebalanceInterval() {
    return this.getStringAttribute('auto_rebalance_interval');
  }
  public set autoRebalanceInterval(value: string) {
    this._autoRebalanceInterval = value;
  }
  public resetAutoRebalanceInterval() {
    this._autoRebalanceInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRebalanceIntervalInput() {
    return this._autoRebalanceInterval;
  }

  // auto_redistribute_active_standby_load - computed: false, optional: true, required: false
  private _autoRedistributeActiveStandbyLoad?: string; 
  public get autoRedistributeActiveStandbyLoad() {
    return this.getStringAttribute('auto_redistribute_active_standby_load');
  }
  public set autoRedistributeActiveStandbyLoad(value: string) {
    this._autoRedistributeActiveStandbyLoad = value;
  }
  public resetAutoRedistributeActiveStandbyLoad() {
    this._autoRedistributeActiveStandbyLoad = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRedistributeActiveStandbyLoadInput() {
    return this._autoRedistributeActiveStandbyLoad;
  }

  // availability_zone_refs - computed: false, optional: true, required: false
  private _availabilityZoneRefs?: string[]; 
  public get availabilityZoneRefs() {
    return this.getListAttribute('availability_zone_refs');
  }
  public set availabilityZoneRefs(value: string[]) {
    this._availabilityZoneRefs = value;
  }
  public resetAvailabilityZoneRefs() {
    this._availabilityZoneRefs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneRefsInput() {
    return this._availabilityZoneRefs;
  }

  // baremetal_dispatcher_handles_flows - computed: false, optional: true, required: false
  private _baremetalDispatcherHandlesFlows?: string; 
  public get baremetalDispatcherHandlesFlows() {
    return this.getStringAttribute('baremetal_dispatcher_handles_flows');
  }
  public set baremetalDispatcherHandlesFlows(value: string) {
    this._baremetalDispatcherHandlesFlows = value;
  }
  public resetBaremetalDispatcherHandlesFlows() {
    this._baremetalDispatcherHandlesFlows = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baremetalDispatcherHandlesFlowsInput() {
    return this._baremetalDispatcherHandlesFlows;
  }

  // bgp_peer_monitor_failover_enabled - computed: false, optional: true, required: false
  private _bgpPeerMonitorFailoverEnabled?: string; 
  public get bgpPeerMonitorFailoverEnabled() {
    return this.getStringAttribute('bgp_peer_monitor_failover_enabled');
  }
  public set bgpPeerMonitorFailoverEnabled(value: string) {
    this._bgpPeerMonitorFailoverEnabled = value;
  }
  public resetBgpPeerMonitorFailoverEnabled() {
    this._bgpPeerMonitorFailoverEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpPeerMonitorFailoverEnabledInput() {
    return this._bgpPeerMonitorFailoverEnabled;
  }

  // bgp_state_update_interval - computed: false, optional: true, required: false
  private _bgpStateUpdateInterval?: string; 
  public get bgpStateUpdateInterval() {
    return this.getStringAttribute('bgp_state_update_interval');
  }
  public set bgpStateUpdateInterval(value: string) {
    this._bgpStateUpdateInterval = value;
  }
  public resetBgpStateUpdateInterval() {
    this._bgpStateUpdateInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpStateUpdateIntervalInput() {
    return this._bgpStateUpdateInterval;
  }

  // buffer_se - computed: false, optional: true, required: false
  private _bufferSe?: string; 
  public get bufferSe() {
    return this.getStringAttribute('buffer_se');
  }
  public set bufferSe(value: string) {
    this._bufferSe = value;
  }
  public resetBufferSe() {
    this._bufferSe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferSeInput() {
    return this._bufferSe;
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

  // compress_ip_rules_for_each_ns_subnet - computed: false, optional: true, required: false
  private _compressIpRulesForEachNsSubnet?: string; 
  public get compressIpRulesForEachNsSubnet() {
    return this.getStringAttribute('compress_ip_rules_for_each_ns_subnet');
  }
  public set compressIpRulesForEachNsSubnet(value: string) {
    this._compressIpRulesForEachNsSubnet = value;
  }
  public resetCompressIpRulesForEachNsSubnet() {
    this._compressIpRulesForEachNsSubnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressIpRulesForEachNsSubnetInput() {
    return this._compressIpRulesForEachNsSubnet;
  }

  // config_debugs_on_all_cores - computed: false, optional: true, required: false
  private _configDebugsOnAllCores?: string; 
  public get configDebugsOnAllCores() {
    return this.getStringAttribute('config_debugs_on_all_cores');
  }
  public set configDebugsOnAllCores(value: string) {
    this._configDebugsOnAllCores = value;
  }
  public resetConfigDebugsOnAllCores() {
    this._configDebugsOnAllCores = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configDebugsOnAllCoresInput() {
    return this._configDebugsOnAllCores;
  }

  // connection_memory_percentage - computed: false, optional: true, required: false
  private _connectionMemoryPercentage?: string; 
  public get connectionMemoryPercentage() {
    return this.getStringAttribute('connection_memory_percentage');
  }
  public set connectionMemoryPercentage(value: string) {
    this._connectionMemoryPercentage = value;
  }
  public resetConnectionMemoryPercentage() {
    this._connectionMemoryPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionMemoryPercentageInput() {
    return this._connectionMemoryPercentage;
  }

  // core_shm_app_cache - computed: false, optional: true, required: false
  private _coreShmAppCache?: string; 
  public get coreShmAppCache() {
    return this.getStringAttribute('core_shm_app_cache');
  }
  public set coreShmAppCache(value: string) {
    this._coreShmAppCache = value;
  }
  public resetCoreShmAppCache() {
    this._coreShmAppCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coreShmAppCacheInput() {
    return this._coreShmAppCache;
  }

  // core_shm_app_learning - computed: false, optional: true, required: false
  private _coreShmAppLearning?: string; 
  public get coreShmAppLearning() {
    return this.getStringAttribute('core_shm_app_learning');
  }
  public set coreShmAppLearning(value: string) {
    this._coreShmAppLearning = value;
  }
  public resetCoreShmAppLearning() {
    this._coreShmAppLearning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coreShmAppLearningInput() {
    return this._coreShmAppLearning;
  }

  // cpu_reserve - computed: false, optional: true, required: false
  private _cpuReserve?: string; 
  public get cpuReserve() {
    return this.getStringAttribute('cpu_reserve');
  }
  public set cpuReserve(value: string) {
    this._cpuReserve = value;
  }
  public resetCpuReserve() {
    this._cpuReserve = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuReserveInput() {
    return this._cpuReserve;
  }

  // cpu_socket_affinity - computed: false, optional: true, required: false
  private _cpuSocketAffinity?: string; 
  public get cpuSocketAffinity() {
    return this.getStringAttribute('cpu_socket_affinity');
  }
  public set cpuSocketAffinity(value: string) {
    this._cpuSocketAffinity = value;
  }
  public resetCpuSocketAffinity() {
    this._cpuSocketAffinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuSocketAffinityInput() {
    return this._cpuSocketAffinity;
  }

  // custom_securitygroups_data - computed: false, optional: true, required: false
  private _customSecuritygroupsData?: string[]; 
  public get customSecuritygroupsData() {
    return this.getListAttribute('custom_securitygroups_data');
  }
  public set customSecuritygroupsData(value: string[]) {
    this._customSecuritygroupsData = value;
  }
  public resetCustomSecuritygroupsData() {
    this._customSecuritygroupsData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSecuritygroupsDataInput() {
    return this._customSecuritygroupsData;
  }

  // custom_securitygroups_mgmt - computed: false, optional: true, required: false
  private _customSecuritygroupsMgmt?: string[]; 
  public get customSecuritygroupsMgmt() {
    return this.getListAttribute('custom_securitygroups_mgmt');
  }
  public set customSecuritygroupsMgmt(value: string[]) {
    this._customSecuritygroupsMgmt = value;
  }
  public resetCustomSecuritygroupsMgmt() {
    this._customSecuritygroupsMgmt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSecuritygroupsMgmtInput() {
    return this._customSecuritygroupsMgmt;
  }

  // data_network_id - computed: true, optional: true, required: false
  private _dataNetworkId?: string; 
  public get dataNetworkId() {
    return this.getStringAttribute('data_network_id');
  }
  public set dataNetworkId(value: string) {
    this._dataNetworkId = value;
  }
  public resetDataNetworkId() {
    this._dataNetworkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataNetworkIdInput() {
    return this._dataNetworkId;
  }

  // datascript_timeout - computed: false, optional: true, required: false
  private _datascriptTimeout?: string; 
  public get datascriptTimeout() {
    return this.getStringAttribute('datascript_timeout');
  }
  public set datascriptTimeout(value: string) {
    this._datascriptTimeout = value;
  }
  public resetDatascriptTimeout() {
    this._datascriptTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datascriptTimeoutInput() {
    return this._datascriptTimeout;
  }

  // deactivate_ipv6_discovery - computed: true, optional: true, required: false
  private _deactivateIpv6Discovery?: string; 
  public get deactivateIpv6Discovery() {
    return this.getStringAttribute('deactivate_ipv6_discovery');
  }
  public set deactivateIpv6Discovery(value: string) {
    this._deactivateIpv6Discovery = value;
  }
  public resetDeactivateIpv6Discovery() {
    this._deactivateIpv6Discovery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deactivateIpv6DiscoveryInput() {
    return this._deactivateIpv6Discovery;
  }

  // deactivate_kni_filtering_at_dispatcher - computed: true, optional: true, required: false
  private _deactivateKniFilteringAtDispatcher?: string; 
  public get deactivateKniFilteringAtDispatcher() {
    return this.getStringAttribute('deactivate_kni_filtering_at_dispatcher');
  }
  public set deactivateKniFilteringAtDispatcher(value: string) {
    this._deactivateKniFilteringAtDispatcher = value;
  }
  public resetDeactivateKniFilteringAtDispatcher() {
    this._deactivateKniFilteringAtDispatcher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deactivateKniFilteringAtDispatcherInput() {
    return this._deactivateKniFilteringAtDispatcher;
  }

  // dedicated_dispatcher_core - computed: true, optional: true, required: false
  private _dedicatedDispatcherCore?: string; 
  public get dedicatedDispatcherCore() {
    return this.getStringAttribute('dedicated_dispatcher_core');
  }
  public set dedicatedDispatcherCore(value: string) {
    this._dedicatedDispatcherCore = value;
  }
  public resetDedicatedDispatcherCore() {
    this._dedicatedDispatcherCore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dedicatedDispatcherCoreInput() {
    return this._dedicatedDispatcherCore;
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

  // disable_avi_securitygroups - computed: false, optional: true, required: false
  private _disableAviSecuritygroups?: string; 
  public get disableAviSecuritygroups() {
    return this.getStringAttribute('disable_avi_securitygroups');
  }
  public set disableAviSecuritygroups(value: string) {
    this._disableAviSecuritygroups = value;
  }
  public resetDisableAviSecuritygroups() {
    this._disableAviSecuritygroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableAviSecuritygroupsInput() {
    return this._disableAviSecuritygroups;
  }

  // disable_csum_offloads - computed: false, optional: true, required: false
  private _disableCsumOffloads?: string; 
  public get disableCsumOffloads() {
    return this.getStringAttribute('disable_csum_offloads');
  }
  public set disableCsumOffloads(value: string) {
    this._disableCsumOffloads = value;
  }
  public resetDisableCsumOffloads() {
    this._disableCsumOffloads = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableCsumOffloadsInput() {
    return this._disableCsumOffloads;
  }

  // disable_flow_probes - computed: false, optional: true, required: false
  private _disableFlowProbes?: string; 
  public get disableFlowProbes() {
    return this.getStringAttribute('disable_flow_probes');
  }
  public set disableFlowProbes(value: string) {
    this._disableFlowProbes = value;
  }
  public resetDisableFlowProbes() {
    this._disableFlowProbes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableFlowProbesInput() {
    return this._disableFlowProbes;
  }

  // disable_gro - computed: true, optional: true, required: false
  private _disableGro?: string; 
  public get disableGro() {
    return this.getStringAttribute('disable_gro');
  }
  public set disableGro(value: string) {
    this._disableGro = value;
  }
  public resetDisableGro() {
    this._disableGro = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableGroInput() {
    return this._disableGro;
  }

  // disable_se_memory_check - computed: false, optional: true, required: false
  private _disableSeMemoryCheck?: string; 
  public get disableSeMemoryCheck() {
    return this.getStringAttribute('disable_se_memory_check');
  }
  public set disableSeMemoryCheck(value: string) {
    this._disableSeMemoryCheck = value;
  }
  public resetDisableSeMemoryCheck() {
    this._disableSeMemoryCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableSeMemoryCheckInput() {
    return this._disableSeMemoryCheck;
  }

  // disable_tso - computed: false, optional: true, required: false
  private _disableTso?: string; 
  public get disableTso() {
    return this.getStringAttribute('disable_tso');
  }
  public set disableTso(value: string) {
    this._disableTso = value;
  }
  public resetDisableTso() {
    this._disableTso = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableTsoInput() {
    return this._disableTso;
  }

  // disk_per_se - computed: false, optional: true, required: false
  private _diskPerSe?: string; 
  public get diskPerSe() {
    return this.getStringAttribute('disk_per_se');
  }
  public set diskPerSe(value: string) {
    this._diskPerSe = value;
  }
  public resetDiskPerSe() {
    this._diskPerSe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskPerSeInput() {
    return this._diskPerSe;
  }

  // distribute_load_active_standby - computed: false, optional: true, required: false
  private _distributeLoadActiveStandby?: string; 
  public get distributeLoadActiveStandby() {
    return this.getStringAttribute('distribute_load_active_standby');
  }
  public set distributeLoadActiveStandby(value: string) {
    this._distributeLoadActiveStandby = value;
  }
  public resetDistributeLoadActiveStandby() {
    this._distributeLoadActiveStandby = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distributeLoadActiveStandbyInput() {
    return this._distributeLoadActiveStandby;
  }

  // distribute_queues - computed: false, optional: true, required: false
  private _distributeQueues?: string; 
  public get distributeQueues() {
    return this.getStringAttribute('distribute_queues');
  }
  public set distributeQueues(value: string) {
    this._distributeQueues = value;
  }
  public resetDistributeQueues() {
    this._distributeQueues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distributeQueuesInput() {
    return this._distributeQueues;
  }

  // distribute_vnics - computed: false, optional: true, required: false
  private _distributeVnics?: string; 
  public get distributeVnics() {
    return this.getStringAttribute('distribute_vnics');
  }
  public set distributeVnics(value: string) {
    this._distributeVnics = value;
  }
  public resetDistributeVnics() {
    this._distributeVnics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distributeVnicsInput() {
    return this._distributeVnics;
  }

  // downstream_send_timeout - computed: false, optional: true, required: false
  private _downstreamSendTimeout?: string; 
  public get downstreamSendTimeout() {
    return this.getStringAttribute('downstream_send_timeout');
  }
  public set downstreamSendTimeout(value: string) {
    this._downstreamSendTimeout = value;
  }
  public resetDownstreamSendTimeout() {
    this._downstreamSendTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downstreamSendTimeoutInput() {
    return this._downstreamSendTimeout;
  }

  // dp_aggressive_deq_interval_msec - computed: false, optional: true, required: false
  private _dpAggressiveDeqIntervalMsec?: string; 
  public get dpAggressiveDeqIntervalMsec() {
    return this.getStringAttribute('dp_aggressive_deq_interval_msec');
  }
  public set dpAggressiveDeqIntervalMsec(value: string) {
    this._dpAggressiveDeqIntervalMsec = value;
  }
  public resetDpAggressiveDeqIntervalMsec() {
    this._dpAggressiveDeqIntervalMsec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dpAggressiveDeqIntervalMsecInput() {
    return this._dpAggressiveDeqIntervalMsec;
  }

  // dp_aggressive_enq_interval_msec - computed: false, optional: true, required: false
  private _dpAggressiveEnqIntervalMsec?: string; 
  public get dpAggressiveEnqIntervalMsec() {
    return this.getStringAttribute('dp_aggressive_enq_interval_msec');
  }
  public set dpAggressiveEnqIntervalMsec(value: string) {
    this._dpAggressiveEnqIntervalMsec = value;
  }
  public resetDpAggressiveEnqIntervalMsec() {
    this._dpAggressiveEnqIntervalMsec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dpAggressiveEnqIntervalMsecInput() {
    return this._dpAggressiveEnqIntervalMsec;
  }

  // dp_aggressive_hb_frequency - computed: false, optional: true, required: false
  private _dpAggressiveHbFrequency?: string; 
  public get dpAggressiveHbFrequency() {
    return this.getStringAttribute('dp_aggressive_hb_frequency');
  }
  public set dpAggressiveHbFrequency(value: string) {
    this._dpAggressiveHbFrequency = value;
  }
  public resetDpAggressiveHbFrequency() {
    this._dpAggressiveHbFrequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dpAggressiveHbFrequencyInput() {
    return this._dpAggressiveHbFrequency;
  }

  // dp_aggressive_hb_timeout_count - computed: false, optional: true, required: false
  private _dpAggressiveHbTimeoutCount?: string; 
  public get dpAggressiveHbTimeoutCount() {
    return this.getStringAttribute('dp_aggressive_hb_timeout_count');
  }
  public set dpAggressiveHbTimeoutCount(value: string) {
    this._dpAggressiveHbTimeoutCount = value;
  }
  public resetDpAggressiveHbTimeoutCount() {
    this._dpAggressiveHbTimeoutCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dpAggressiveHbTimeoutCountInput() {
    return this._dpAggressiveHbTimeoutCount;
  }

  // dp_deq_interval_msec - computed: false, optional: true, required: false
  private _dpDeqIntervalMsec?: string; 
  public get dpDeqIntervalMsec() {
    return this.getStringAttribute('dp_deq_interval_msec');
  }
  public set dpDeqIntervalMsec(value: string) {
    this._dpDeqIntervalMsec = value;
  }
  public resetDpDeqIntervalMsec() {
    this._dpDeqIntervalMsec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dpDeqIntervalMsecInput() {
    return this._dpDeqIntervalMsec;
  }

  // dp_enq_interval_msec - computed: false, optional: true, required: false
  private _dpEnqIntervalMsec?: string; 
  public get dpEnqIntervalMsec() {
    return this.getStringAttribute('dp_enq_interval_msec');
  }
  public set dpEnqIntervalMsec(value: string) {
    this._dpEnqIntervalMsec = value;
  }
  public resetDpEnqIntervalMsec() {
    this._dpEnqIntervalMsec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dpEnqIntervalMsecInput() {
    return this._dpEnqIntervalMsec;
  }

  // dp_hb_frequency - computed: false, optional: true, required: false
  private _dpHbFrequency?: string; 
  public get dpHbFrequency() {
    return this.getStringAttribute('dp_hb_frequency');
  }
  public set dpHbFrequency(value: string) {
    this._dpHbFrequency = value;
  }
  public resetDpHbFrequency() {
    this._dpHbFrequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dpHbFrequencyInput() {
    return this._dpHbFrequency;
  }

  // dp_hb_timeout_count - computed: false, optional: true, required: false
  private _dpHbTimeoutCount?: string; 
  public get dpHbTimeoutCount() {
    return this.getStringAttribute('dp_hb_timeout_count');
  }
  public set dpHbTimeoutCount(value: string) {
    this._dpHbTimeoutCount = value;
  }
  public resetDpHbTimeoutCount() {
    this._dpHbTimeoutCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dpHbTimeoutCountInput() {
    return this._dpHbTimeoutCount;
  }

  // dpdk_gro_timeout_interval - computed: false, optional: true, required: false
  private _dpdkGroTimeoutInterval?: string; 
  public get dpdkGroTimeoutInterval() {
    return this.getStringAttribute('dpdk_gro_timeout_interval');
  }
  public set dpdkGroTimeoutInterval(value: string) {
    this._dpdkGroTimeoutInterval = value;
  }
  public resetDpdkGroTimeoutInterval() {
    this._dpdkGroTimeoutInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dpdkGroTimeoutIntervalInput() {
    return this._dpdkGroTimeoutInterval;
  }

  // enable_gratarp_permanent - computed: false, optional: true, required: false
  private _enableGratarpPermanent?: string; 
  public get enableGratarpPermanent() {
    return this.getStringAttribute('enable_gratarp_permanent');
  }
  public set enableGratarpPermanent(value: string) {
    this._enableGratarpPermanent = value;
  }
  public resetEnableGratarpPermanent() {
    this._enableGratarpPermanent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableGratarpPermanentInput() {
    return this._enableGratarpPermanent;
  }

  // enable_hsm_log - computed: false, optional: true, required: false
  private _enableHsmLog?: string; 
  public get enableHsmLog() {
    return this.getStringAttribute('enable_hsm_log');
  }
  public set enableHsmLog(value: string) {
    this._enableHsmLog = value;
  }
  public resetEnableHsmLog() {
    this._enableHsmLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableHsmLogInput() {
    return this._enableHsmLog;
  }

  // enable_hsm_priming - computed: false, optional: true, required: false
  private _enableHsmPriming?: string; 
  public get enableHsmPriming() {
    return this.getStringAttribute('enable_hsm_priming');
  }
  public set enableHsmPriming(value: string) {
    this._enableHsmPriming = value;
  }
  public resetEnableHsmPriming() {
    this._enableHsmPriming = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableHsmPrimingInput() {
    return this._enableHsmPriming;
  }

  // enable_multi_lb - computed: false, optional: true, required: false
  private _enableMultiLb?: string; 
  public get enableMultiLb() {
    return this.getStringAttribute('enable_multi_lb');
  }
  public set enableMultiLb(value: string) {
    this._enableMultiLb = value;
  }
  public resetEnableMultiLb() {
    this._enableMultiLb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableMultiLbInput() {
    return this._enableMultiLb;
  }

  // enable_pcap_tx_ring - computed: true, optional: true, required: false
  private _enablePcapTxRing?: string; 
  public get enablePcapTxRing() {
    return this.getStringAttribute('enable_pcap_tx_ring');
  }
  public set enablePcapTxRing(value: string) {
    this._enablePcapTxRing = value;
  }
  public resetEnablePcapTxRing() {
    this._enablePcapTxRing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePcapTxRingInput() {
    return this._enablePcapTxRing;
  }

  // ephemeral_portrange_end - computed: true, optional: true, required: false
  private _ephemeralPortrangeEnd?: string; 
  public get ephemeralPortrangeEnd() {
    return this.getStringAttribute('ephemeral_portrange_end');
  }
  public set ephemeralPortrangeEnd(value: string) {
    this._ephemeralPortrangeEnd = value;
  }
  public resetEphemeralPortrangeEnd() {
    this._ephemeralPortrangeEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ephemeralPortrangeEndInput() {
    return this._ephemeralPortrangeEnd;
  }

  // ephemeral_portrange_start - computed: true, optional: true, required: false
  private _ephemeralPortrangeStart?: string; 
  public get ephemeralPortrangeStart() {
    return this.getStringAttribute('ephemeral_portrange_start');
  }
  public set ephemeralPortrangeStart(value: string) {
    this._ephemeralPortrangeStart = value;
  }
  public resetEphemeralPortrangeStart() {
    this._ephemeralPortrangeStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ephemeralPortrangeStartInput() {
    return this._ephemeralPortrangeStart;
  }

  // extra_config_multiplier - computed: false, optional: true, required: false
  private _extraConfigMultiplier?: string; 
  public get extraConfigMultiplier() {
    return this.getStringAttribute('extra_config_multiplier');
  }
  public set extraConfigMultiplier(value: string) {
    this._extraConfigMultiplier = value;
  }
  public resetExtraConfigMultiplier() {
    this._extraConfigMultiplier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraConfigMultiplierInput() {
    return this._extraConfigMultiplier;
  }

  // extra_shared_config_memory - computed: false, optional: true, required: false
  private _extraSharedConfigMemory?: string; 
  public get extraSharedConfigMemory() {
    return this.getStringAttribute('extra_shared_config_memory');
  }
  public set extraSharedConfigMemory(value: string) {
    this._extraSharedConfigMemory = value;
  }
  public resetExtraSharedConfigMemory() {
    this._extraSharedConfigMemory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraSharedConfigMemoryInput() {
    return this._extraSharedConfigMemory;
  }

  // flow_table_new_syn_max_entries - computed: false, optional: true, required: false
  private _flowTableNewSynMaxEntries?: string; 
  public get flowTableNewSynMaxEntries() {
    return this.getStringAttribute('flow_table_new_syn_max_entries');
  }
  public set flowTableNewSynMaxEntries(value: string) {
    this._flowTableNewSynMaxEntries = value;
  }
  public resetFlowTableNewSynMaxEntries() {
    this._flowTableNewSynMaxEntries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flowTableNewSynMaxEntriesInput() {
    return this._flowTableNewSynMaxEntries;
  }

  // free_list_size - computed: false, optional: true, required: false
  private _freeListSize?: string; 
  public get freeListSize() {
    return this.getStringAttribute('free_list_size');
  }
  public set freeListSize(value: string) {
    this._freeListSize = value;
  }
  public resetFreeListSize() {
    this._freeListSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeListSizeInput() {
    return this._freeListSize;
  }

  // gratarp_permanent_periodicity - computed: false, optional: true, required: false
  private _gratarpPermanentPeriodicity?: string; 
  public get gratarpPermanentPeriodicity() {
    return this.getStringAttribute('gratarp_permanent_periodicity');
  }
  public set gratarpPermanentPeriodicity(value: string) {
    this._gratarpPermanentPeriodicity = value;
  }
  public resetGratarpPermanentPeriodicity() {
    this._gratarpPermanentPeriodicity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gratarpPermanentPeriodicityInput() {
    return this._gratarpPermanentPeriodicity;
  }

  // grpc_channel_connect_timeout - computed: false, optional: true, required: false
  private _grpcChannelConnectTimeout?: string; 
  public get grpcChannelConnectTimeout() {
    return this.getStringAttribute('grpc_channel_connect_timeout');
  }
  public set grpcChannelConnectTimeout(value: string) {
    this._grpcChannelConnectTimeout = value;
  }
  public resetGrpcChannelConnectTimeout() {
    this._grpcChannelConnectTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grpcChannelConnectTimeoutInput() {
    return this._grpcChannelConnectTimeout;
  }

  // gve_enabled - computed: false, optional: true, required: false
  private _gveEnabled?: string; 
  public get gveEnabled() {
    return this.getStringAttribute('gve_enabled');
  }
  public set gveEnabled(value: string) {
    this._gveEnabled = value;
  }
  public resetGveEnabled() {
    this._gveEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gveEnabledInput() {
    return this._gveEnabled;
  }

  // ha_mode - computed: false, optional: true, required: false
  private _haMode?: string; 
  public get haMode() {
    return this.getStringAttribute('ha_mode');
  }
  public set haMode(value: string) {
    this._haMode = value;
  }
  public resetHaMode() {
    this._haMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haModeInput() {
    return this._haMode;
  }

  // handle_per_pkt_attack - computed: false, optional: true, required: false
  private _handlePerPktAttack?: string; 
  public get handlePerPktAttack() {
    return this.getStringAttribute('handle_per_pkt_attack');
  }
  public set handlePerPktAttack(value: string) {
    this._handlePerPktAttack = value;
  }
  public resetHandlePerPktAttack() {
    this._handlePerPktAttack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get handlePerPktAttackInput() {
    return this._handlePerPktAttack;
  }

  // hardwaresecuritymodulegroup_ref - computed: true, optional: true, required: false
  private _hardwaresecuritymodulegroupRef?: string; 
  public get hardwaresecuritymodulegroupRef() {
    return this.getStringAttribute('hardwaresecuritymodulegroup_ref');
  }
  public set hardwaresecuritymodulegroupRef(value: string) {
    this._hardwaresecuritymodulegroupRef = value;
  }
  public resetHardwaresecuritymodulegroupRef() {
    this._hardwaresecuritymodulegroupRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hardwaresecuritymodulegroupRefInput() {
    return this._hardwaresecuritymodulegroupRef;
  }

  // heap_minimum_config_memory - computed: false, optional: true, required: false
  private _heapMinimumConfigMemory?: string; 
  public get heapMinimumConfigMemory() {
    return this.getStringAttribute('heap_minimum_config_memory');
  }
  public set heapMinimumConfigMemory(value: string) {
    this._heapMinimumConfigMemory = value;
  }
  public resetHeapMinimumConfigMemory() {
    this._heapMinimumConfigMemory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get heapMinimumConfigMemoryInput() {
    return this._heapMinimumConfigMemory;
  }

  // hm_on_standby - computed: false, optional: true, required: false
  private _hmOnStandby?: string; 
  public get hmOnStandby() {
    return this.getStringAttribute('hm_on_standby');
  }
  public set hmOnStandby(value: string) {
    this._hmOnStandby = value;
  }
  public resetHmOnStandby() {
    this._hmOnStandby = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hmOnStandbyInput() {
    return this._hmOnStandby;
  }

  // host_attribute_key - computed: true, optional: true, required: false
  private _hostAttributeKey?: string; 
  public get hostAttributeKey() {
    return this.getStringAttribute('host_attribute_key');
  }
  public set hostAttributeKey(value: string) {
    this._hostAttributeKey = value;
  }
  public resetHostAttributeKey() {
    this._hostAttributeKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostAttributeKeyInput() {
    return this._hostAttributeKey;
  }

  // host_attribute_value - computed: true, optional: true, required: false
  private _hostAttributeValue?: string; 
  public get hostAttributeValue() {
    return this.getStringAttribute('host_attribute_value');
  }
  public set hostAttributeValue(value: string) {
    this._hostAttributeValue = value;
  }
  public resetHostAttributeValue() {
    this._hostAttributeValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostAttributeValueInput() {
    return this._hostAttributeValue;
  }

  // host_gateway_monitor - computed: false, optional: true, required: false
  private _hostGatewayMonitor?: string; 
  public get hostGatewayMonitor() {
    return this.getStringAttribute('host_gateway_monitor');
  }
  public set hostGatewayMonitor(value: string) {
    this._hostGatewayMonitor = value;
  }
  public resetHostGatewayMonitor() {
    this._hostGatewayMonitor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostGatewayMonitorInput() {
    return this._hostGatewayMonitor;
  }

  // http_rum_console_log - computed: false, optional: true, required: false
  private _httpRumConsoleLog?: string; 
  public get httpRumConsoleLog() {
    return this.getStringAttribute('http_rum_console_log');
  }
  public set httpRumConsoleLog(value: string) {
    this._httpRumConsoleLog = value;
  }
  public resetHttpRumConsoleLog() {
    this._httpRumConsoleLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpRumConsoleLogInput() {
    return this._httpRumConsoleLog;
  }

  // http_rum_min_content_length - computed: false, optional: true, required: false
  private _httpRumMinContentLength?: string; 
  public get httpRumMinContentLength() {
    return this.getStringAttribute('http_rum_min_content_length');
  }
  public set httpRumMinContentLength(value: string) {
    this._httpRumMinContentLength = value;
  }
  public resetHttpRumMinContentLength() {
    this._httpRumMinContentLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpRumMinContentLengthInput() {
    return this._httpRumMinContentLength;
  }

  // hybrid_rss_mode - computed: false, optional: true, required: false
  private _hybridRssMode?: string; 
  public get hybridRssMode() {
    return this.getStringAttribute('hybrid_rss_mode');
  }
  public set hybridRssMode(value: string) {
    this._hybridRssMode = value;
  }
  public resetHybridRssMode() {
    this._hybridRssMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hybridRssModeInput() {
    return this._hybridRssMode;
  }

  // hypervisor - computed: true, optional: true, required: false
  private _hypervisor?: string; 
  public get hypervisor() {
    return this.getStringAttribute('hypervisor');
  }
  public set hypervisor(value: string) {
    this._hypervisor = value;
  }
  public resetHypervisor() {
    this._hypervisor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hypervisorInput() {
    return this._hypervisor;
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

  // ignore_docker_mac_change - computed: false, optional: true, required: false
  private _ignoreDockerMacChange?: string; 
  public get ignoreDockerMacChange() {
    return this.getStringAttribute('ignore_docker_mac_change');
  }
  public set ignoreDockerMacChange(value: string) {
    this._ignoreDockerMacChange = value;
  }
  public resetIgnoreDockerMacChange() {
    this._ignoreDockerMacChange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreDockerMacChangeInput() {
    return this._ignoreDockerMacChange;
  }

  // ignore_rtt_threshold - computed: false, optional: true, required: false
  private _ignoreRttThreshold?: string; 
  public get ignoreRttThreshold() {
    return this.getStringAttribute('ignore_rtt_threshold');
  }
  public set ignoreRttThreshold(value: string) {
    this._ignoreRttThreshold = value;
  }
  public resetIgnoreRttThreshold() {
    this._ignoreRttThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreRttThresholdInput() {
    return this._ignoreRttThreshold;
  }

  // ingress_access_data - computed: false, optional: true, required: false
  private _ingressAccessData?: string; 
  public get ingressAccessData() {
    return this.getStringAttribute('ingress_access_data');
  }
  public set ingressAccessData(value: string) {
    this._ingressAccessData = value;
  }
  public resetIngressAccessData() {
    this._ingressAccessData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressAccessDataInput() {
    return this._ingressAccessData;
  }

  // ingress_access_mgmt - computed: false, optional: true, required: false
  private _ingressAccessMgmt?: string; 
  public get ingressAccessMgmt() {
    return this.getStringAttribute('ingress_access_mgmt');
  }
  public set ingressAccessMgmt(value: string) {
    this._ingressAccessMgmt = value;
  }
  public resetIngressAccessMgmt() {
    this._ingressAccessMgmt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressAccessMgmtInput() {
    return this._ingressAccessMgmt;
  }

  // instance_flavor - computed: true, optional: true, required: false
  private _instanceFlavor?: string; 
  public get instanceFlavor() {
    return this.getStringAttribute('instance_flavor');
  }
  public set instanceFlavor(value: string) {
    this._instanceFlavor = value;
  }
  public resetInstanceFlavor() {
    this._instanceFlavor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceFlavorInput() {
    return this._instanceFlavor;
  }

  // l7_conns_per_core - computed: false, optional: true, required: false
  private _l7ConnsPerCore?: string; 
  public get l7ConnsPerCore() {
    return this.getStringAttribute('l7_conns_per_core');
  }
  public set l7ConnsPerCore(value: string) {
    this._l7ConnsPerCore = value;
  }
  public resetL7ConnsPerCore() {
    this._l7ConnsPerCore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l7ConnsPerCoreInput() {
    return this._l7ConnsPerCore;
  }

  // l7_resvd_listen_conns_per_core - computed: false, optional: true, required: false
  private _l7ResvdListenConnsPerCore?: string; 
  public get l7ResvdListenConnsPerCore() {
    return this.getStringAttribute('l7_resvd_listen_conns_per_core');
  }
  public set l7ResvdListenConnsPerCore(value: string) {
    this._l7ResvdListenConnsPerCore = value;
  }
  public resetL7ResvdListenConnsPerCore() {
    this._l7ResvdListenConnsPerCore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l7ResvdListenConnsPerCoreInput() {
    return this._l7ResvdListenConnsPerCore;
  }

  // lbaction_num_requests_to_dispatch - computed: false, optional: true, required: false
  private _lbactionNumRequestsToDispatch?: string; 
  public get lbactionNumRequestsToDispatch() {
    return this.getStringAttribute('lbaction_num_requests_to_dispatch');
  }
  public set lbactionNumRequestsToDispatch(value: string) {
    this._lbactionNumRequestsToDispatch = value;
  }
  public resetLbactionNumRequestsToDispatch() {
    this._lbactionNumRequestsToDispatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lbactionNumRequestsToDispatchInput() {
    return this._lbactionNumRequestsToDispatch;
  }

  // lbaction_rq_per_request_max_retries - computed: false, optional: true, required: false
  private _lbactionRqPerRequestMaxRetries?: string; 
  public get lbactionRqPerRequestMaxRetries() {
    return this.getStringAttribute('lbaction_rq_per_request_max_retries');
  }
  public set lbactionRqPerRequestMaxRetries(value: string) {
    this._lbactionRqPerRequestMaxRetries = value;
  }
  public resetLbactionRqPerRequestMaxRetries() {
    this._lbactionRqPerRequestMaxRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lbactionRqPerRequestMaxRetriesInput() {
    return this._lbactionRqPerRequestMaxRetries;
  }

  // least_load_core_selection - computed: false, optional: true, required: false
  private _leastLoadCoreSelection?: string; 
  public get leastLoadCoreSelection() {
    return this.getStringAttribute('least_load_core_selection');
  }
  public set leastLoadCoreSelection(value: string) {
    this._leastLoadCoreSelection = value;
  }
  public resetLeastLoadCoreSelection() {
    this._leastLoadCoreSelection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leastLoadCoreSelectionInput() {
    return this._leastLoadCoreSelection;
  }

  // license_tier - computed: true, optional: true, required: false
  private _licenseTier?: string; 
  public get licenseTier() {
    return this.getStringAttribute('license_tier');
  }
  public set licenseTier(value: string) {
    this._licenseTier = value;
  }
  public resetLicenseTier() {
    this._licenseTier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseTierInput() {
    return this._licenseTier;
  }

  // license_type - computed: true, optional: true, required: false
  private _licenseType?: string; 
  public get licenseType() {
    return this.getStringAttribute('license_type');
  }
  public set licenseType(value: string) {
    this._licenseType = value;
  }
  public resetLicenseType() {
    this._licenseType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseTypeInput() {
    return this._licenseType;
  }

  // log_agent_compress_logs - computed: false, optional: true, required: false
  private _logAgentCompressLogs?: string; 
  public get logAgentCompressLogs() {
    return this.getStringAttribute('log_agent_compress_logs');
  }
  public set logAgentCompressLogs(value: string) {
    this._logAgentCompressLogs = value;
  }
  public resetLogAgentCompressLogs() {
    this._logAgentCompressLogs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logAgentCompressLogsInput() {
    return this._logAgentCompressLogs;
  }

  // log_agent_debug_enabled - computed: false, optional: true, required: false
  private _logAgentDebugEnabled?: string; 
  public get logAgentDebugEnabled() {
    return this.getStringAttribute('log_agent_debug_enabled');
  }
  public set logAgentDebugEnabled(value: string) {
    this._logAgentDebugEnabled = value;
  }
  public resetLogAgentDebugEnabled() {
    this._logAgentDebugEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logAgentDebugEnabledInput() {
    return this._logAgentDebugEnabled;
  }

  // log_agent_file_sz_appl - computed: false, optional: true, required: false
  private _logAgentFileSzAppl?: string; 
  public get logAgentFileSzAppl() {
    return this.getStringAttribute('log_agent_file_sz_appl');
  }
  public set logAgentFileSzAppl(value: string) {
    this._logAgentFileSzAppl = value;
  }
  public resetLogAgentFileSzAppl() {
    this._logAgentFileSzAppl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logAgentFileSzApplInput() {
    return this._logAgentFileSzAppl;
  }

  // log_agent_file_sz_conn - computed: false, optional: true, required: false
  private _logAgentFileSzConn?: string; 
  public get logAgentFileSzConn() {
    return this.getStringAttribute('log_agent_file_sz_conn');
  }
  public set logAgentFileSzConn(value: string) {
    this._logAgentFileSzConn = value;
  }
  public resetLogAgentFileSzConn() {
    this._logAgentFileSzConn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logAgentFileSzConnInput() {
    return this._logAgentFileSzConn;
  }

  // log_agent_file_sz_debug - computed: false, optional: true, required: false
  private _logAgentFileSzDebug?: string; 
  public get logAgentFileSzDebug() {
    return this.getStringAttribute('log_agent_file_sz_debug');
  }
  public set logAgentFileSzDebug(value: string) {
    this._logAgentFileSzDebug = value;
  }
  public resetLogAgentFileSzDebug() {
    this._logAgentFileSzDebug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logAgentFileSzDebugInput() {
    return this._logAgentFileSzDebug;
  }

  // log_agent_file_sz_event - computed: false, optional: true, required: false
  private _logAgentFileSzEvent?: string; 
  public get logAgentFileSzEvent() {
    return this.getStringAttribute('log_agent_file_sz_event');
  }
  public set logAgentFileSzEvent(value: string) {
    this._logAgentFileSzEvent = value;
  }
  public resetLogAgentFileSzEvent() {
    this._logAgentFileSzEvent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logAgentFileSzEventInput() {
    return this._logAgentFileSzEvent;
  }

  // log_agent_log_storage_min_sz - computed: false, optional: true, required: false
  private _logAgentLogStorageMinSz?: string; 
  public get logAgentLogStorageMinSz() {
    return this.getStringAttribute('log_agent_log_storage_min_sz');
  }
  public set logAgentLogStorageMinSz(value: string) {
    this._logAgentLogStorageMinSz = value;
  }
  public resetLogAgentLogStorageMinSz() {
    this._logAgentLogStorageMinSz = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logAgentLogStorageMinSzInput() {
    return this._logAgentLogStorageMinSz;
  }

  // log_agent_max_concurrent_rsync - computed: false, optional: true, required: false
  private _logAgentMaxConcurrentRsync?: string; 
  public get logAgentMaxConcurrentRsync() {
    return this.getStringAttribute('log_agent_max_concurrent_rsync');
  }
  public set logAgentMaxConcurrentRsync(value: string) {
    this._logAgentMaxConcurrentRsync = value;
  }
  public resetLogAgentMaxConcurrentRsync() {
    this._logAgentMaxConcurrentRsync = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logAgentMaxConcurrentRsyncInput() {
    return this._logAgentMaxConcurrentRsync;
  }

  // log_agent_max_storage_excess_percent - computed: false, optional: true, required: false
  private _logAgentMaxStorageExcessPercent?: string; 
  public get logAgentMaxStorageExcessPercent() {
    return this.getStringAttribute('log_agent_max_storage_excess_percent');
  }
  public set logAgentMaxStorageExcessPercent(value: string) {
    this._logAgentMaxStorageExcessPercent = value;
  }
  public resetLogAgentMaxStorageExcessPercent() {
    this._logAgentMaxStorageExcessPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logAgentMaxStorageExcessPercentInput() {
    return this._logAgentMaxStorageExcessPercent;
  }

  // log_agent_max_storage_ignore_percent - computed: false, optional: true, required: false
  private _logAgentMaxStorageIgnorePercent?: string; 
  public get logAgentMaxStorageIgnorePercent() {
    return this.getStringAttribute('log_agent_max_storage_ignore_percent');
  }
  public set logAgentMaxStorageIgnorePercent(value: string) {
    this._logAgentMaxStorageIgnorePercent = value;
  }
  public resetLogAgentMaxStorageIgnorePercent() {
    this._logAgentMaxStorageIgnorePercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logAgentMaxStorageIgnorePercentInput() {
    return this._logAgentMaxStorageIgnorePercent;
  }

  // log_agent_min_storage_per_vs - computed: false, optional: true, required: false
  private _logAgentMinStoragePerVs?: string; 
  public get logAgentMinStoragePerVs() {
    return this.getStringAttribute('log_agent_min_storage_per_vs');
  }
  public set logAgentMinStoragePerVs(value: string) {
    this._logAgentMinStoragePerVs = value;
  }
  public resetLogAgentMinStoragePerVs() {
    this._logAgentMinStoragePerVs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logAgentMinStoragePerVsInput() {
    return this._logAgentMinStoragePerVs;
  }

  // log_agent_sleep_interval - computed: false, optional: true, required: false
  private _logAgentSleepInterval?: string; 
  public get logAgentSleepInterval() {
    return this.getStringAttribute('log_agent_sleep_interval');
  }
  public set logAgentSleepInterval(value: string) {
    this._logAgentSleepInterval = value;
  }
  public resetLogAgentSleepInterval() {
    this._logAgentSleepInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logAgentSleepIntervalInput() {
    return this._logAgentSleepInterval;
  }

  // log_agent_trace_enabled - computed: false, optional: true, required: false
  private _logAgentTraceEnabled?: string; 
  public get logAgentTraceEnabled() {
    return this.getStringAttribute('log_agent_trace_enabled');
  }
  public set logAgentTraceEnabled(value: string) {
    this._logAgentTraceEnabled = value;
  }
  public resetLogAgentTraceEnabled() {
    this._logAgentTraceEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logAgentTraceEnabledInput() {
    return this._logAgentTraceEnabled;
  }

  // log_agent_unknown_vs_timer - computed: false, optional: true, required: false
  private _logAgentUnknownVsTimer?: string; 
  public get logAgentUnknownVsTimer() {
    return this.getStringAttribute('log_agent_unknown_vs_timer');
  }
  public set logAgentUnknownVsTimer(value: string) {
    this._logAgentUnknownVsTimer = value;
  }
  public resetLogAgentUnknownVsTimer() {
    this._logAgentUnknownVsTimer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logAgentUnknownVsTimerInput() {
    return this._logAgentUnknownVsTimer;
  }

  // log_disksz - computed: false, optional: true, required: false
  private _logDisksz?: string; 
  public get logDisksz() {
    return this.getStringAttribute('log_disksz');
  }
  public set logDisksz(value: string) {
    this._logDisksz = value;
  }
  public resetLogDisksz() {
    this._logDisksz = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logDiskszInput() {
    return this._logDisksz;
  }

  // log_malloc_failure - computed: false, optional: true, required: false
  private _logMallocFailure?: string; 
  public get logMallocFailure() {
    return this.getStringAttribute('log_malloc_failure');
  }
  public set logMallocFailure(value: string) {
    this._logMallocFailure = value;
  }
  public resetLogMallocFailure() {
    this._logMallocFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logMallocFailureInput() {
    return this._logMallocFailure;
  }

  // log_message_max_file_list_size - computed: false, optional: true, required: false
  private _logMessageMaxFileListSize?: string; 
  public get logMessageMaxFileListSize() {
    return this.getStringAttribute('log_message_max_file_list_size');
  }
  public set logMessageMaxFileListSize(value: string) {
    this._logMessageMaxFileListSize = value;
  }
  public resetLogMessageMaxFileListSize() {
    this._logMessageMaxFileListSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logMessageMaxFileListSizeInput() {
    return this._logMessageMaxFileListSize;
  }

  // max_concurrent_external_hm - computed: true, optional: true, required: false
  private _maxConcurrentExternalHm?: string; 
  public get maxConcurrentExternalHm() {
    return this.getStringAttribute('max_concurrent_external_hm');
  }
  public set maxConcurrentExternalHm(value: string) {
    this._maxConcurrentExternalHm = value;
  }
  public resetMaxConcurrentExternalHm() {
    this._maxConcurrentExternalHm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConcurrentExternalHmInput() {
    return this._maxConcurrentExternalHm;
  }

  // max_cpu_usage - computed: false, optional: true, required: false
  private _maxCpuUsage?: string; 
  public get maxCpuUsage() {
    return this.getStringAttribute('max_cpu_usage');
  }
  public set maxCpuUsage(value: string) {
    this._maxCpuUsage = value;
  }
  public resetMaxCpuUsage() {
    this._maxCpuUsage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCpuUsageInput() {
    return this._maxCpuUsage;
  }

  // max_memory_per_mempool - computed: false, optional: true, required: false
  private _maxMemoryPerMempool?: string; 
  public get maxMemoryPerMempool() {
    return this.getStringAttribute('max_memory_per_mempool');
  }
  public set maxMemoryPerMempool(value: string) {
    this._maxMemoryPerMempool = value;
  }
  public resetMaxMemoryPerMempool() {
    this._maxMemoryPerMempool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxMemoryPerMempoolInput() {
    return this._maxMemoryPerMempool;
  }

  // max_num_http_sessions_to_store - computed: false, optional: true, required: false
  private _maxNumHttpSessionsToStore?: string; 
  public get maxNumHttpSessionsToStore() {
    return this.getStringAttribute('max_num_http_sessions_to_store');
  }
  public set maxNumHttpSessionsToStore(value: string) {
    this._maxNumHttpSessionsToStore = value;
  }
  public resetMaxNumHttpSessionsToStore() {
    this._maxNumHttpSessionsToStore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxNumHttpSessionsToStoreInput() {
    return this._maxNumHttpSessionsToStore;
  }

  // max_num_se_dps - computed: true, optional: true, required: false
  private _maxNumSeDps?: string; 
  public get maxNumSeDps() {
    return this.getStringAttribute('max_num_se_dps');
  }
  public set maxNumSeDps(value: string) {
    this._maxNumSeDps = value;
  }
  public resetMaxNumSeDps() {
    this._maxNumSeDps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxNumSeDpsInput() {
    return this._maxNumSeDps;
  }

  // max_public_ips_per_lb - computed: false, optional: true, required: false
  private _maxPublicIpsPerLb?: string; 
  public get maxPublicIpsPerLb() {
    return this.getStringAttribute('max_public_ips_per_lb');
  }
  public set maxPublicIpsPerLb(value: string) {
    this._maxPublicIpsPerLb = value;
  }
  public resetMaxPublicIpsPerLb() {
    this._maxPublicIpsPerLb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPublicIpsPerLbInput() {
    return this._maxPublicIpsPerLb;
  }

  // max_queues_per_vnic - computed: false, optional: true, required: false
  private _maxQueuesPerVnic?: string; 
  public get maxQueuesPerVnic() {
    return this.getStringAttribute('max_queues_per_vnic');
  }
  public set maxQueuesPerVnic(value: string) {
    this._maxQueuesPerVnic = value;
  }
  public resetMaxQueuesPerVnic() {
    this._maxQueuesPerVnic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxQueuesPerVnicInput() {
    return this._maxQueuesPerVnic;
  }

  // max_rules_per_lb - computed: false, optional: true, required: false
  private _maxRulesPerLb?: string; 
  public get maxRulesPerLb() {
    return this.getStringAttribute('max_rules_per_lb');
  }
  public set maxRulesPerLb(value: string) {
    this._maxRulesPerLb = value;
  }
  public resetMaxRulesPerLb() {
    this._maxRulesPerLb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRulesPerLbInput() {
    return this._maxRulesPerLb;
  }

  // max_scaleout_per_vs - computed: false, optional: true, required: false
  private _maxScaleoutPerVs?: string; 
  public get maxScaleoutPerVs() {
    return this.getStringAttribute('max_scaleout_per_vs');
  }
  public set maxScaleoutPerVs(value: string) {
    this._maxScaleoutPerVs = value;
  }
  public resetMaxScaleoutPerVs() {
    this._maxScaleoutPerVs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxScaleoutPerVsInput() {
    return this._maxScaleoutPerVs;
  }

  // max_se - computed: false, optional: true, required: false
  private _maxSe?: string; 
  public get maxSe() {
    return this.getStringAttribute('max_se');
  }
  public set maxSe(value: string) {
    this._maxSe = value;
  }
  public resetMaxSe() {
    this._maxSe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSeInput() {
    return this._maxSe;
  }

  // max_skb_frags - computed: false, optional: true, required: false
  private _maxSkbFrags?: string; 
  public get maxSkbFrags() {
    return this.getStringAttribute('max_skb_frags');
  }
  public set maxSkbFrags(value: string) {
    this._maxSkbFrags = value;
  }
  public resetMaxSkbFrags() {
    this._maxSkbFrags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSkbFragsInput() {
    return this._maxSkbFrags;
  }

  // max_vs_per_se - computed: false, optional: true, required: false
  private _maxVsPerSe?: string; 
  public get maxVsPerSe() {
    return this.getStringAttribute('max_vs_per_se');
  }
  public set maxVsPerSe(value: string) {
    this._maxVsPerSe = value;
  }
  public resetMaxVsPerSe() {
    this._maxVsPerSe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxVsPerSeInput() {
    return this._maxVsPerSe;
  }

  // mem_reserve - computed: false, optional: true, required: false
  private _memReserve?: string; 
  public get memReserve() {
    return this.getStringAttribute('mem_reserve');
  }
  public set memReserve(value: string) {
    this._memReserve = value;
  }
  public resetMemReserve() {
    this._memReserve = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memReserveInput() {
    return this._memReserve;
  }

  // memory_for_config_update - computed: false, optional: true, required: false
  private _memoryForConfigUpdate?: string; 
  public get memoryForConfigUpdate() {
    return this.getStringAttribute('memory_for_config_update');
  }
  public set memoryForConfigUpdate(value: string) {
    this._memoryForConfigUpdate = value;
  }
  public resetMemoryForConfigUpdate() {
    this._memoryForConfigUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryForConfigUpdateInput() {
    return this._memoryForConfigUpdate;
  }

  // memory_per_se - computed: false, optional: true, required: false
  private _memoryPerSe?: string; 
  public get memoryPerSe() {
    return this.getStringAttribute('memory_per_se');
  }
  public set memoryPerSe(value: string) {
    this._memoryPerSe = value;
  }
  public resetMemoryPerSe() {
    this._memoryPerSe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryPerSeInput() {
    return this._memoryPerSe;
  }

  // metrics_collection_mode - computed: false, optional: true, required: false
  private _metricsCollectionMode?: string; 
  public get metricsCollectionMode() {
    return this.getStringAttribute('metrics_collection_mode');
  }
  public set metricsCollectionMode(value: string) {
    this._metricsCollectionMode = value;
  }
  public resetMetricsCollectionMode() {
    this._metricsCollectionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsCollectionModeInput() {
    return this._metricsCollectionMode;
  }

  // mgmt_network_ref - computed: true, optional: true, required: false
  private _mgmtNetworkRef?: string; 
  public get mgmtNetworkRef() {
    return this.getStringAttribute('mgmt_network_ref');
  }
  public set mgmtNetworkRef(value: string) {
    this._mgmtNetworkRef = value;
  }
  public resetMgmtNetworkRef() {
    this._mgmtNetworkRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mgmtNetworkRefInput() {
    return this._mgmtNetworkRef;
  }

  // min_cpu_usage - computed: false, optional: true, required: false
  private _minCpuUsage?: string; 
  public get minCpuUsage() {
    return this.getStringAttribute('min_cpu_usage');
  }
  public set minCpuUsage(value: string) {
    this._minCpuUsage = value;
  }
  public resetMinCpuUsage() {
    this._minCpuUsage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minCpuUsageInput() {
    return this._minCpuUsage;
  }

  // min_scaleout_per_vs - computed: false, optional: true, required: false
  private _minScaleoutPerVs?: string; 
  public get minScaleoutPerVs() {
    return this.getStringAttribute('min_scaleout_per_vs');
  }
  public set minScaleoutPerVs(value: string) {
    this._minScaleoutPerVs = value;
  }
  public resetMinScaleoutPerVs() {
    this._minScaleoutPerVs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minScaleoutPerVsInput() {
    return this._minScaleoutPerVs;
  }

  // min_se - computed: false, optional: true, required: false
  private _minSe?: string; 
  public get minSe() {
    return this.getStringAttribute('min_se');
  }
  public set minSe(value: string) {
    this._minSe = value;
  }
  public resetMinSe() {
    this._minSe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minSeInput() {
    return this._minSe;
  }

  // minimum_connection_memory - computed: false, optional: true, required: false
  private _minimumConnectionMemory?: string; 
  public get minimumConnectionMemory() {
    return this.getStringAttribute('minimum_connection_memory');
  }
  public set minimumConnectionMemory(value: string) {
    this._minimumConnectionMemory = value;
  }
  public resetMinimumConnectionMemory() {
    this._minimumConnectionMemory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumConnectionMemoryInput() {
    return this._minimumConnectionMemory;
  }

  // multicast_enable - computed: false, optional: true, required: false
  private _multicastEnable?: string; 
  public get multicastEnable() {
    return this.getStringAttribute('multicast_enable');
  }
  public set multicastEnable(value: string) {
    this._multicastEnable = value;
  }
  public resetMulticastEnable() {
    this._multicastEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multicastEnableInput() {
    return this._multicastEnable;
  }

  // n_log_streaming_threads - computed: false, optional: true, required: false
  private _nLogStreamingThreads?: string; 
  public get nLogStreamingThreads() {
    return this.getStringAttribute('n_log_streaming_threads');
  }
  public set nLogStreamingThreads(value: string) {
    this._nLogStreamingThreads = value;
  }
  public resetNLogStreamingThreads() {
    this._nLogStreamingThreads = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nLogStreamingThreadsInput() {
    return this._nLogStreamingThreads;
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

  // netlink_poller_threads - computed: false, optional: true, required: false
  private _netlinkPollerThreads?: string; 
  public get netlinkPollerThreads() {
    return this.getStringAttribute('netlink_poller_threads');
  }
  public set netlinkPollerThreads(value: string) {
    this._netlinkPollerThreads = value;
  }
  public resetNetlinkPollerThreads() {
    this._netlinkPollerThreads = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netlinkPollerThreadsInput() {
    return this._netlinkPollerThreads;
  }

  // netlink_sock_buf_size - computed: false, optional: true, required: false
  private _netlinkSockBufSize?: string; 
  public get netlinkSockBufSize() {
    return this.getStringAttribute('netlink_sock_buf_size');
  }
  public set netlinkSockBufSize(value: string) {
    this._netlinkSockBufSize = value;
  }
  public resetNetlinkSockBufSize() {
    this._netlinkSockBufSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netlinkSockBufSizeInput() {
    return this._netlinkSockBufSize;
  }

  // ngx_free_connection_stack - computed: false, optional: true, required: false
  private _ngxFreeConnectionStack?: string; 
  public get ngxFreeConnectionStack() {
    return this.getStringAttribute('ngx_free_connection_stack');
  }
  public set ngxFreeConnectionStack(value: string) {
    this._ngxFreeConnectionStack = value;
  }
  public resetNgxFreeConnectionStack() {
    this._ngxFreeConnectionStack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ngxFreeConnectionStackInput() {
    return this._ngxFreeConnectionStack;
  }

  // non_significant_log_throttle - computed: false, optional: true, required: false
  private _nonSignificantLogThrottle?: string; 
  public get nonSignificantLogThrottle() {
    return this.getStringAttribute('non_significant_log_throttle');
  }
  public set nonSignificantLogThrottle(value: string) {
    this._nonSignificantLogThrottle = value;
  }
  public resetNonSignificantLogThrottle() {
    this._nonSignificantLogThrottle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonSignificantLogThrottleInput() {
    return this._nonSignificantLogThrottle;
  }

  // ns_helper_deq_interval_msec - computed: false, optional: true, required: false
  private _nsHelperDeqIntervalMsec?: string; 
  public get nsHelperDeqIntervalMsec() {
    return this.getStringAttribute('ns_helper_deq_interval_msec');
  }
  public set nsHelperDeqIntervalMsec(value: string) {
    this._nsHelperDeqIntervalMsec = value;
  }
  public resetNsHelperDeqIntervalMsec() {
    this._nsHelperDeqIntervalMsec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsHelperDeqIntervalMsecInput() {
    return this._nsHelperDeqIntervalMsec;
  }

  // ntp_sync_fail_event - computed: false, optional: true, required: false
  private _ntpSyncFailEvent?: string; 
  public get ntpSyncFailEvent() {
    return this.getStringAttribute('ntp_sync_fail_event');
  }
  public set ntpSyncFailEvent(value: string) {
    this._ntpSyncFailEvent = value;
  }
  public resetNtpSyncFailEvent() {
    this._ntpSyncFailEvent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntpSyncFailEventInput() {
    return this._ntpSyncFailEvent;
  }

  // ntp_sync_status_interval - computed: false, optional: true, required: false
  private _ntpSyncStatusInterval?: string; 
  public get ntpSyncStatusInterval() {
    return this.getStringAttribute('ntp_sync_status_interval');
  }
  public set ntpSyncStatusInterval(value: string) {
    this._ntpSyncStatusInterval = value;
  }
  public resetNtpSyncStatusInterval() {
    this._ntpSyncStatusInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntpSyncStatusIntervalInput() {
    return this._ntpSyncStatusInterval;
  }

  // num_dispatcher_cores - computed: false, optional: true, required: false
  private _numDispatcherCores?: string; 
  public get numDispatcherCores() {
    return this.getStringAttribute('num_dispatcher_cores');
  }
  public set numDispatcherCores(value: string) {
    this._numDispatcherCores = value;
  }
  public resetNumDispatcherCores() {
    this._numDispatcherCores = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numDispatcherCoresInput() {
    return this._numDispatcherCores;
  }

  // num_dispatcher_queues - computed: false, optional: true, required: false
  private _numDispatcherQueues?: string; 
  public get numDispatcherQueues() {
    return this.getStringAttribute('num_dispatcher_queues');
  }
  public set numDispatcherQueues(value: string) {
    this._numDispatcherQueues = value;
  }
  public resetNumDispatcherQueues() {
    this._numDispatcherQueues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numDispatcherQueuesInput() {
    return this._numDispatcherQueues;
  }

  // num_flow_cores_sum_changes_to_ignore - computed: false, optional: true, required: false
  private _numFlowCoresSumChangesToIgnore?: string; 
  public get numFlowCoresSumChangesToIgnore() {
    return this.getStringAttribute('num_flow_cores_sum_changes_to_ignore');
  }
  public set numFlowCoresSumChangesToIgnore(value: string) {
    this._numFlowCoresSumChangesToIgnore = value;
  }
  public resetNumFlowCoresSumChangesToIgnore() {
    this._numFlowCoresSumChangesToIgnore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numFlowCoresSumChangesToIgnoreInput() {
    return this._numFlowCoresSumChangesToIgnore;
  }

  // objsync_port - computed: false, optional: true, required: false
  private _objsyncPort?: string; 
  public get objsyncPort() {
    return this.getStringAttribute('objsync_port');
  }
  public set objsyncPort(value: string) {
    this._objsyncPort = value;
  }
  public resetObjsyncPort() {
    this._objsyncPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objsyncPortInput() {
    return this._objsyncPort;
  }

  // openstack_availability_zones - computed: false, optional: true, required: false
  private _openstackAvailabilityZones?: string[]; 
  public get openstackAvailabilityZones() {
    return this.getListAttribute('openstack_availability_zones');
  }
  public set openstackAvailabilityZones(value: string[]) {
    this._openstackAvailabilityZones = value;
  }
  public resetOpenstackAvailabilityZones() {
    this._openstackAvailabilityZones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openstackAvailabilityZonesInput() {
    return this._openstackAvailabilityZones;
  }

  // openstack_mgmt_network_name - computed: true, optional: true, required: false
  private _openstackMgmtNetworkName?: string; 
  public get openstackMgmtNetworkName() {
    return this.getStringAttribute('openstack_mgmt_network_name');
  }
  public set openstackMgmtNetworkName(value: string) {
    this._openstackMgmtNetworkName = value;
  }
  public resetOpenstackMgmtNetworkName() {
    this._openstackMgmtNetworkName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openstackMgmtNetworkNameInput() {
    return this._openstackMgmtNetworkName;
  }

  // openstack_mgmt_network_uuid - computed: true, optional: true, required: false
  private _openstackMgmtNetworkUuid?: string; 
  public get openstackMgmtNetworkUuid() {
    return this.getStringAttribute('openstack_mgmt_network_uuid');
  }
  public set openstackMgmtNetworkUuid(value: string) {
    this._openstackMgmtNetworkUuid = value;
  }
  public resetOpenstackMgmtNetworkUuid() {
    this._openstackMgmtNetworkUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openstackMgmtNetworkUuidInput() {
    return this._openstackMgmtNetworkUuid;
  }

  // os_reserved_memory - computed: false, optional: true, required: false
  private _osReservedMemory?: string; 
  public get osReservedMemory() {
    return this.getStringAttribute('os_reserved_memory');
  }
  public set osReservedMemory(value: string) {
    this._osReservedMemory = value;
  }
  public resetOsReservedMemory() {
    this._osReservedMemory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osReservedMemoryInput() {
    return this._osReservedMemory;
  }

  // path_mtu_discovery_v4 - computed: false, optional: true, required: false
  private _pathMtuDiscoveryV4?: string; 
  public get pathMtuDiscoveryV4() {
    return this.getStringAttribute('path_mtu_discovery_v4');
  }
  public set pathMtuDiscoveryV4(value: string) {
    this._pathMtuDiscoveryV4 = value;
  }
  public resetPathMtuDiscoveryV4() {
    this._pathMtuDiscoveryV4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathMtuDiscoveryV4Input() {
    return this._pathMtuDiscoveryV4;
  }

  // path_mtu_discovery_v6 - computed: false, optional: true, required: false
  private _pathMtuDiscoveryV6?: string; 
  public get pathMtuDiscoveryV6() {
    return this.getStringAttribute('path_mtu_discovery_v6');
  }
  public set pathMtuDiscoveryV6(value: string) {
    this._pathMtuDiscoveryV6 = value;
  }
  public resetPathMtuDiscoveryV6() {
    this._pathMtuDiscoveryV6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathMtuDiscoveryV6Input() {
    return this._pathMtuDiscoveryV6;
  }

  // pcap_tx_mode - computed: false, optional: true, required: false
  private _pcapTxMode?: string; 
  public get pcapTxMode() {
    return this.getStringAttribute('pcap_tx_mode');
  }
  public set pcapTxMode(value: string) {
    this._pcapTxMode = value;
  }
  public resetPcapTxMode() {
    this._pcapTxMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pcapTxModeInput() {
    return this._pcapTxMode;
  }

  // pcap_tx_ring_rd_balancing_factor - computed: false, optional: true, required: false
  private _pcapTxRingRdBalancingFactor?: string; 
  public get pcapTxRingRdBalancingFactor() {
    return this.getStringAttribute('pcap_tx_ring_rd_balancing_factor');
  }
  public set pcapTxRingRdBalancingFactor(value: string) {
    this._pcapTxRingRdBalancingFactor = value;
  }
  public resetPcapTxRingRdBalancingFactor() {
    this._pcapTxRingRdBalancingFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pcapTxRingRdBalancingFactorInput() {
    return this._pcapTxRingRdBalancingFactor;
  }

  // per_app - computed: false, optional: true, required: false
  private _perApp?: string; 
  public get perApp() {
    return this.getStringAttribute('per_app');
  }
  public set perApp(value: string) {
    this._perApp = value;
  }
  public resetPerApp() {
    this._perApp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perAppInput() {
    return this._perApp;
  }

  // per_vs_admission_control - computed: false, optional: true, required: false
  private _perVsAdmissionControl?: string; 
  public get perVsAdmissionControl() {
    return this.getStringAttribute('per_vs_admission_control');
  }
  public set perVsAdmissionControl(value: string) {
    this._perVsAdmissionControl = value;
  }
  public resetPerVsAdmissionControl() {
    this._perVsAdmissionControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perVsAdmissionControlInput() {
    return this._perVsAdmissionControl;
  }

  // placement_mode - computed: false, optional: true, required: false
  private _placementMode?: string; 
  public get placementMode() {
    return this.getStringAttribute('placement_mode');
  }
  public set placementMode(value: string) {
    this._placementMode = value;
  }
  public resetPlacementMode() {
    this._placementMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placementModeInput() {
    return this._placementMode;
  }

  // reboot_on_panic - computed: false, optional: true, required: false
  private _rebootOnPanic?: string; 
  public get rebootOnPanic() {
    return this.getStringAttribute('reboot_on_panic');
  }
  public set rebootOnPanic(value: string) {
    this._rebootOnPanic = value;
  }
  public resetRebootOnPanic() {
    this._rebootOnPanic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rebootOnPanicInput() {
    return this._rebootOnPanic;
  }

  // replay_vrf_routes_interval - computed: false, optional: true, required: false
  private _replayVrfRoutesInterval?: string; 
  public get replayVrfRoutesInterval() {
    return this.getStringAttribute('replay_vrf_routes_interval');
  }
  public set replayVrfRoutesInterval(value: string) {
    this._replayVrfRoutesInterval = value;
  }
  public resetReplayVrfRoutesInterval() {
    this._replayVrfRoutesInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replayVrfRoutesIntervalInput() {
    return this._replayVrfRoutesInterval;
  }

  // resync_time_interval - computed: false, optional: true, required: false
  private _resyncTimeInterval?: string; 
  public get resyncTimeInterval() {
    return this.getStringAttribute('resync_time_interval');
  }
  public set resyncTimeInterval(value: string) {
    this._resyncTimeInterval = value;
  }
  public resetResyncTimeInterval() {
    this._resyncTimeInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resyncTimeIntervalInput() {
    return this._resyncTimeInterval;
  }

  // sdb_flush_interval - computed: false, optional: true, required: false
  private _sdbFlushInterval?: string; 
  public get sdbFlushInterval() {
    return this.getStringAttribute('sdb_flush_interval');
  }
  public set sdbFlushInterval(value: string) {
    this._sdbFlushInterval = value;
  }
  public resetSdbFlushInterval() {
    this._sdbFlushInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdbFlushIntervalInput() {
    return this._sdbFlushInterval;
  }

  // sdb_key_timeout - computed: false, optional: true, required: false
  private _sdbKeyTimeout?: string; 
  public get sdbKeyTimeout() {
    return this.getStringAttribute('sdb_key_timeout');
  }
  public set sdbKeyTimeout(value: string) {
    this._sdbKeyTimeout = value;
  }
  public resetSdbKeyTimeout() {
    this._sdbKeyTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdbKeyTimeoutInput() {
    return this._sdbKeyTimeout;
  }

  // sdb_pipeline_size - computed: false, optional: true, required: false
  private _sdbPipelineSize?: string; 
  public get sdbPipelineSize() {
    return this.getStringAttribute('sdb_pipeline_size');
  }
  public set sdbPipelineSize(value: string) {
    this._sdbPipelineSize = value;
  }
  public resetSdbPipelineSize() {
    this._sdbPipelineSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdbPipelineSizeInput() {
    return this._sdbPipelineSize;
  }

  // sdb_scan_count - computed: false, optional: true, required: false
  private _sdbScanCount?: string; 
  public get sdbScanCount() {
    return this.getStringAttribute('sdb_scan_count');
  }
  public set sdbScanCount(value: string) {
    this._sdbScanCount = value;
  }
  public resetSdbScanCount() {
    this._sdbScanCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdbScanCountInput() {
    return this._sdbScanCount;
  }

  // se_bandwidth_type - computed: true, optional: true, required: false
  private _seBandwidthType?: string; 
  public get seBandwidthType() {
    return this.getStringAttribute('se_bandwidth_type');
  }
  public set seBandwidthType(value: string) {
    this._seBandwidthType = value;
  }
  public resetSeBandwidthType() {
    this._seBandwidthType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seBandwidthTypeInput() {
    return this._seBandwidthType;
  }

  // se_debug_trace_sz - computed: false, optional: true, required: false
  private _seDebugTraceSz?: string; 
  public get seDebugTraceSz() {
    return this.getStringAttribute('se_debug_trace_sz');
  }
  public set seDebugTraceSz(value: string) {
    this._seDebugTraceSz = value;
  }
  public resetSeDebugTraceSz() {
    this._seDebugTraceSz = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seDebugTraceSzInput() {
    return this._seDebugTraceSz;
  }

  // se_delayed_flow_delete - computed: false, optional: true, required: false
  private _seDelayedFlowDelete?: string; 
  public get seDelayedFlowDelete() {
    return this.getStringAttribute('se_delayed_flow_delete');
  }
  public set seDelayedFlowDelete(value: string) {
    this._seDelayedFlowDelete = value;
  }
  public resetSeDelayedFlowDelete() {
    this._seDelayedFlowDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seDelayedFlowDeleteInput() {
    return this._seDelayedFlowDelete;
  }

  // se_deprovision_delay - computed: false, optional: true, required: false
  private _seDeprovisionDelay?: string; 
  public get seDeprovisionDelay() {
    return this.getStringAttribute('se_deprovision_delay');
  }
  public set seDeprovisionDelay(value: string) {
    this._seDeprovisionDelay = value;
  }
  public resetSeDeprovisionDelay() {
    this._seDeprovisionDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seDeprovisionDelayInput() {
    return this._seDeprovisionDelay;
  }

  // se_dp_hm_drops - computed: false, optional: true, required: false
  private _seDpHmDrops?: string; 
  public get seDpHmDrops() {
    return this.getStringAttribute('se_dp_hm_drops');
  }
  public set seDpHmDrops(value: string) {
    this._seDpHmDrops = value;
  }
  public resetSeDpHmDrops() {
    this._seDpHmDrops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seDpHmDropsInput() {
    return this._seDpHmDrops;
  }

  // se_dp_if_state_poll_interval - computed: false, optional: true, required: false
  private _seDpIfStatePollInterval?: string; 
  public get seDpIfStatePollInterval() {
    return this.getStringAttribute('se_dp_if_state_poll_interval');
  }
  public set seDpIfStatePollInterval(value: string) {
    this._seDpIfStatePollInterval = value;
  }
  public resetSeDpIfStatePollInterval() {
    this._seDpIfStatePollInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seDpIfStatePollIntervalInput() {
    return this._seDpIfStatePollInterval;
  }

  // se_dp_isolation - computed: false, optional: true, required: false
  private _seDpIsolation?: string; 
  public get seDpIsolation() {
    return this.getStringAttribute('se_dp_isolation');
  }
  public set seDpIsolation(value: string) {
    this._seDpIsolation = value;
  }
  public resetSeDpIsolation() {
    this._seDpIsolation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seDpIsolationInput() {
    return this._seDpIsolation;
  }

  // se_dp_isolation_num_non_dp_cpus - computed: false, optional: true, required: false
  private _seDpIsolationNumNonDpCpus?: string; 
  public get seDpIsolationNumNonDpCpus() {
    return this.getStringAttribute('se_dp_isolation_num_non_dp_cpus');
  }
  public set seDpIsolationNumNonDpCpus(value: string) {
    this._seDpIsolationNumNonDpCpus = value;
  }
  public resetSeDpIsolationNumNonDpCpus() {
    this._seDpIsolationNumNonDpCpus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seDpIsolationNumNonDpCpusInput() {
    return this._seDpIsolationNumNonDpCpus;
  }

  // se_dp_log_nf_enqueue_percent - computed: false, optional: true, required: false
  private _seDpLogNfEnqueuePercent?: string; 
  public get seDpLogNfEnqueuePercent() {
    return this.getStringAttribute('se_dp_log_nf_enqueue_percent');
  }
  public set seDpLogNfEnqueuePercent(value: string) {
    this._seDpLogNfEnqueuePercent = value;
  }
  public resetSeDpLogNfEnqueuePercent() {
    this._seDpLogNfEnqueuePercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seDpLogNfEnqueuePercentInput() {
    return this._seDpLogNfEnqueuePercent;
  }

  // se_dp_log_udf_enqueue_percent - computed: false, optional: true, required: false
  private _seDpLogUdfEnqueuePercent?: string; 
  public get seDpLogUdfEnqueuePercent() {
    return this.getStringAttribute('se_dp_log_udf_enqueue_percent');
  }
  public set seDpLogUdfEnqueuePercent(value: string) {
    this._seDpLogUdfEnqueuePercent = value;
  }
  public resetSeDpLogUdfEnqueuePercent() {
    this._seDpLogUdfEnqueuePercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seDpLogUdfEnqueuePercentInput() {
    return this._seDpLogUdfEnqueuePercent;
  }

  // se_dp_max_hb_version - computed: false, optional: true, required: false
  private _seDpMaxHbVersion?: string; 
  public get seDpMaxHbVersion() {
    return this.getStringAttribute('se_dp_max_hb_version');
  }
  public set seDpMaxHbVersion(value: string) {
    this._seDpMaxHbVersion = value;
  }
  public resetSeDpMaxHbVersion() {
    this._seDpMaxHbVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seDpMaxHbVersionInput() {
    return this._seDpMaxHbVersion;
  }

  // se_dp_vnic_queue_stall_event_sleep - computed: false, optional: true, required: false
  private _seDpVnicQueueStallEventSleep?: string; 
  public get seDpVnicQueueStallEventSleep() {
    return this.getStringAttribute('se_dp_vnic_queue_stall_event_sleep');
  }
  public set seDpVnicQueueStallEventSleep(value: string) {
    this._seDpVnicQueueStallEventSleep = value;
  }
  public resetSeDpVnicQueueStallEventSleep() {
    this._seDpVnicQueueStallEventSleep = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seDpVnicQueueStallEventSleepInput() {
    return this._seDpVnicQueueStallEventSleep;
  }

  // se_dp_vnic_queue_stall_threshold - computed: false, optional: true, required: false
  private _seDpVnicQueueStallThreshold?: string; 
  public get seDpVnicQueueStallThreshold() {
    return this.getStringAttribute('se_dp_vnic_queue_stall_threshold');
  }
  public set seDpVnicQueueStallThreshold(value: string) {
    this._seDpVnicQueueStallThreshold = value;
  }
  public resetSeDpVnicQueueStallThreshold() {
    this._seDpVnicQueueStallThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seDpVnicQueueStallThresholdInput() {
    return this._seDpVnicQueueStallThreshold;
  }

  // se_dp_vnic_queue_stall_timeout - computed: false, optional: true, required: false
  private _seDpVnicQueueStallTimeout?: string; 
  public get seDpVnicQueueStallTimeout() {
    return this.getStringAttribute('se_dp_vnic_queue_stall_timeout');
  }
  public set seDpVnicQueueStallTimeout(value: string) {
    this._seDpVnicQueueStallTimeout = value;
  }
  public resetSeDpVnicQueueStallTimeout() {
    this._seDpVnicQueueStallTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seDpVnicQueueStallTimeoutInput() {
    return this._seDpVnicQueueStallTimeout;
  }

  // se_dp_vnic_restart_on_queue_stall_count - computed: false, optional: true, required: false
  private _seDpVnicRestartOnQueueStallCount?: string; 
  public get seDpVnicRestartOnQueueStallCount() {
    return this.getStringAttribute('se_dp_vnic_restart_on_queue_stall_count');
  }
  public set seDpVnicRestartOnQueueStallCount(value: string) {
    this._seDpVnicRestartOnQueueStallCount = value;
  }
  public resetSeDpVnicRestartOnQueueStallCount() {
    this._seDpVnicRestartOnQueueStallCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seDpVnicRestartOnQueueStallCountInput() {
    return this._seDpVnicRestartOnQueueStallCount;
  }

  // se_dp_vnic_stall_se_restart_window - computed: false, optional: true, required: false
  private _seDpVnicStallSeRestartWindow?: string; 
  public get seDpVnicStallSeRestartWindow() {
    return this.getStringAttribute('se_dp_vnic_stall_se_restart_window');
  }
  public set seDpVnicStallSeRestartWindow(value: string) {
    this._seDpVnicStallSeRestartWindow = value;
  }
  public resetSeDpVnicStallSeRestartWindow() {
    this._seDpVnicStallSeRestartWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seDpVnicStallSeRestartWindowInput() {
    return this._seDpVnicStallSeRestartWindow;
  }

  // se_dpdk_pmd - computed: false, optional: true, required: false
  private _seDpdkPmd?: string; 
  public get seDpdkPmd() {
    return this.getStringAttribute('se_dpdk_pmd');
  }
  public set seDpdkPmd(value: string) {
    this._seDpdkPmd = value;
  }
  public resetSeDpdkPmd() {
    this._seDpdkPmd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seDpdkPmdInput() {
    return this._seDpdkPmd;
  }

  // se_dump_core_on_assert - computed: false, optional: true, required: false
  private _seDumpCoreOnAssert?: string; 
  public get seDumpCoreOnAssert() {
    return this.getStringAttribute('se_dump_core_on_assert');
  }
  public set seDumpCoreOnAssert(value: string) {
    this._seDumpCoreOnAssert = value;
  }
  public resetSeDumpCoreOnAssert() {
    this._seDumpCoreOnAssert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seDumpCoreOnAssertInput() {
    return this._seDumpCoreOnAssert;
  }

  // se_emulated_cores - computed: false, optional: true, required: false
  private _seEmulatedCores?: string; 
  public get seEmulatedCores() {
    return this.getStringAttribute('se_emulated_cores');
  }
  public set seEmulatedCores(value: string) {
    this._seEmulatedCores = value;
  }
  public resetSeEmulatedCores() {
    this._seEmulatedCores = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seEmulatedCoresInput() {
    return this._seEmulatedCores;
  }

  // se_flow_probe_retries - computed: false, optional: true, required: false
  private _seFlowProbeRetries?: string; 
  public get seFlowProbeRetries() {
    return this.getStringAttribute('se_flow_probe_retries');
  }
  public set seFlowProbeRetries(value: string) {
    this._seFlowProbeRetries = value;
  }
  public resetSeFlowProbeRetries() {
    this._seFlowProbeRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seFlowProbeRetriesInput() {
    return this._seFlowProbeRetries;
  }

  // se_flow_probe_retry_timer - computed: false, optional: true, required: false
  private _seFlowProbeRetryTimer?: string; 
  public get seFlowProbeRetryTimer() {
    return this.getStringAttribute('se_flow_probe_retry_timer');
  }
  public set seFlowProbeRetryTimer(value: string) {
    this._seFlowProbeRetryTimer = value;
  }
  public resetSeFlowProbeRetryTimer() {
    this._seFlowProbeRetryTimer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seFlowProbeRetryTimerInput() {
    return this._seFlowProbeRetryTimer;
  }

  // se_hyperthreaded_mode - computed: false, optional: true, required: false
  private _seHyperthreadedMode?: string; 
  public get seHyperthreadedMode() {
    return this.getStringAttribute('se_hyperthreaded_mode');
  }
  public set seHyperthreadedMode(value: string) {
    this._seHyperthreadedMode = value;
  }
  public resetSeHyperthreadedMode() {
    this._seHyperthreadedMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seHyperthreadedModeInput() {
    return this._seHyperthreadedMode;
  }

  // se_ip_encap_ipc - computed: false, optional: true, required: false
  private _seIpEncapIpc?: string; 
  public get seIpEncapIpc() {
    return this.getStringAttribute('se_ip_encap_ipc');
  }
  public set seIpEncapIpc(value: string) {
    this._seIpEncapIpc = value;
  }
  public resetSeIpEncapIpc() {
    this._seIpEncapIpc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seIpEncapIpcInput() {
    return this._seIpEncapIpc;
  }

  // se_kni_burst_factor - computed: false, optional: true, required: false
  private _seKniBurstFactor?: string; 
  public get seKniBurstFactor() {
    return this.getStringAttribute('se_kni_burst_factor');
  }
  public set seKniBurstFactor(value: string) {
    this._seKniBurstFactor = value;
  }
  public resetSeKniBurstFactor() {
    this._seKniBurstFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seKniBurstFactorInput() {
    return this._seKniBurstFactor;
  }

  // se_l3_encap_ipc - computed: false, optional: true, required: false
  private _seL3EncapIpc?: string; 
  public get seL3EncapIpc() {
    return this.getStringAttribute('se_l3_encap_ipc');
  }
  public set seL3EncapIpc(value: string) {
    this._seL3EncapIpc = value;
  }
  public resetSeL3EncapIpc() {
    this._seL3EncapIpc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seL3EncapIpcInput() {
    return this._seL3EncapIpc;
  }

  // se_log_buffer_app_blocking_dequeue - computed: false, optional: true, required: false
  private _seLogBufferAppBlockingDequeue?: string; 
  public get seLogBufferAppBlockingDequeue() {
    return this.getStringAttribute('se_log_buffer_app_blocking_dequeue');
  }
  public set seLogBufferAppBlockingDequeue(value: string) {
    this._seLogBufferAppBlockingDequeue = value;
  }
  public resetSeLogBufferAppBlockingDequeue() {
    this._seLogBufferAppBlockingDequeue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seLogBufferAppBlockingDequeueInput() {
    return this._seLogBufferAppBlockingDequeue;
  }

  // se_log_buffer_conn_blocking_dequeue - computed: false, optional: true, required: false
  private _seLogBufferConnBlockingDequeue?: string; 
  public get seLogBufferConnBlockingDequeue() {
    return this.getStringAttribute('se_log_buffer_conn_blocking_dequeue');
  }
  public set seLogBufferConnBlockingDequeue(value: string) {
    this._seLogBufferConnBlockingDequeue = value;
  }
  public resetSeLogBufferConnBlockingDequeue() {
    this._seLogBufferConnBlockingDequeue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seLogBufferConnBlockingDequeueInput() {
    return this._seLogBufferConnBlockingDequeue;
  }

  // se_log_buffer_events_blocking_dequeue - computed: false, optional: true, required: false
  private _seLogBufferEventsBlockingDequeue?: string; 
  public get seLogBufferEventsBlockingDequeue() {
    return this.getStringAttribute('se_log_buffer_events_blocking_dequeue');
  }
  public set seLogBufferEventsBlockingDequeue(value: string) {
    this._seLogBufferEventsBlockingDequeue = value;
  }
  public resetSeLogBufferEventsBlockingDequeue() {
    this._seLogBufferEventsBlockingDequeue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seLogBufferEventsBlockingDequeueInput() {
    return this._seLogBufferEventsBlockingDequeue;
  }

  // se_lro - computed: true, optional: true, required: false
  private _seLro?: string; 
  public get seLro() {
    return this.getStringAttribute('se_lro');
  }
  public set seLro(value: string) {
    this._seLro = value;
  }
  public resetSeLro() {
    this._seLro = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seLroInput() {
    return this._seLro;
  }

  // se_mp_ring_retry_count - computed: false, optional: true, required: false
  private _seMpRingRetryCount?: string; 
  public get seMpRingRetryCount() {
    return this.getStringAttribute('se_mp_ring_retry_count');
  }
  public set seMpRingRetryCount(value: string) {
    this._seMpRingRetryCount = value;
  }
  public resetSeMpRingRetryCount() {
    this._seMpRingRetryCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seMpRingRetryCountInput() {
    return this._seMpRingRetryCount;
  }

  // se_mtu - computed: true, optional: true, required: false
  private _seMtu?: string; 
  public get seMtu() {
    return this.getStringAttribute('se_mtu');
  }
  public set seMtu(value: string) {
    this._seMtu = value;
  }
  public resetSeMtu() {
    this._seMtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seMtuInput() {
    return this._seMtu;
  }

  // se_name_prefix - computed: false, optional: true, required: false
  private _seNamePrefix?: string; 
  public get seNamePrefix() {
    return this.getStringAttribute('se_name_prefix');
  }
  public set seNamePrefix(value: string) {
    this._seNamePrefix = value;
  }
  public resetSeNamePrefix() {
    this._seNamePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seNamePrefixInput() {
    return this._seNamePrefix;
  }

  // se_packet_buffer_max - computed: false, optional: true, required: false
  private _sePacketBufferMax?: string; 
  public get sePacketBufferMax() {
    return this.getStringAttribute('se_packet_buffer_max');
  }
  public set sePacketBufferMax(value: string) {
    this._sePacketBufferMax = value;
  }
  public resetSePacketBufferMax() {
    this._sePacketBufferMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sePacketBufferMaxInput() {
    return this._sePacketBufferMax;
  }

  // se_pcap_lookahead - computed: false, optional: true, required: false
  private _sePcapLookahead?: string; 
  public get sePcapLookahead() {
    return this.getStringAttribute('se_pcap_lookahead');
  }
  public set sePcapLookahead(value: string) {
    this._sePcapLookahead = value;
  }
  public resetSePcapLookahead() {
    this._sePcapLookahead = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sePcapLookaheadInput() {
    return this._sePcapLookahead;
  }

  // se_pcap_pkt_count - computed: false, optional: true, required: false
  private _sePcapPktCount?: string; 
  public get sePcapPktCount() {
    return this.getStringAttribute('se_pcap_pkt_count');
  }
  public set sePcapPktCount(value: string) {
    this._sePcapPktCount = value;
  }
  public resetSePcapPktCount() {
    this._sePcapPktCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sePcapPktCountInput() {
    return this._sePcapPktCount;
  }

  // se_pcap_pkt_sz - computed: false, optional: true, required: false
  private _sePcapPktSz?: string; 
  public get sePcapPktSz() {
    return this.getStringAttribute('se_pcap_pkt_sz');
  }
  public set sePcapPktSz(value: string) {
    this._sePcapPktSz = value;
  }
  public resetSePcapPktSz() {
    this._sePcapPktSz = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sePcapPktSzInput() {
    return this._sePcapPktSz;
  }

  // se_pcap_qdisc_bypass - computed: false, optional: true, required: false
  private _sePcapQdiscBypass?: string; 
  public get sePcapQdiscBypass() {
    return this.getStringAttribute('se_pcap_qdisc_bypass');
  }
  public set sePcapQdiscBypass(value: string) {
    this._sePcapQdiscBypass = value;
  }
  public resetSePcapQdiscBypass() {
    this._sePcapQdiscBypass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sePcapQdiscBypassInput() {
    return this._sePcapQdiscBypass;
  }

  // se_pcap_reinit_frequency - computed: false, optional: true, required: false
  private _sePcapReinitFrequency?: string; 
  public get sePcapReinitFrequency() {
    return this.getStringAttribute('se_pcap_reinit_frequency');
  }
  public set sePcapReinitFrequency(value: string) {
    this._sePcapReinitFrequency = value;
  }
  public resetSePcapReinitFrequency() {
    this._sePcapReinitFrequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sePcapReinitFrequencyInput() {
    return this._sePcapReinitFrequency;
  }

  // se_pcap_reinit_threshold - computed: false, optional: true, required: false
  private _sePcapReinitThreshold?: string; 
  public get sePcapReinitThreshold() {
    return this.getStringAttribute('se_pcap_reinit_threshold');
  }
  public set sePcapReinitThreshold(value: string) {
    this._sePcapReinitThreshold = value;
  }
  public resetSePcapReinitThreshold() {
    this._sePcapReinitThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sePcapReinitThresholdInput() {
    return this._sePcapReinitThreshold;
  }

  // se_probe_port - computed: false, optional: true, required: false
  private _seProbePort?: string; 
  public get seProbePort() {
    return this.getStringAttribute('se_probe_port');
  }
  public set seProbePort(value: string) {
    this._seProbePort = value;
  }
  public resetSeProbePort() {
    this._seProbePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seProbePortInput() {
    return this._seProbePort;
  }

  // se_rum_sampling_nav_interval - computed: false, optional: true, required: false
  private _seRumSamplingNavInterval?: string; 
  public get seRumSamplingNavInterval() {
    return this.getStringAttribute('se_rum_sampling_nav_interval');
  }
  public set seRumSamplingNavInterval(value: string) {
    this._seRumSamplingNavInterval = value;
  }
  public resetSeRumSamplingNavInterval() {
    this._seRumSamplingNavInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seRumSamplingNavIntervalInput() {
    return this._seRumSamplingNavInterval;
  }

  // se_rum_sampling_nav_percent - computed: false, optional: true, required: false
  private _seRumSamplingNavPercent?: string; 
  public get seRumSamplingNavPercent() {
    return this.getStringAttribute('se_rum_sampling_nav_percent');
  }
  public set seRumSamplingNavPercent(value: string) {
    this._seRumSamplingNavPercent = value;
  }
  public resetSeRumSamplingNavPercent() {
    this._seRumSamplingNavPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seRumSamplingNavPercentInput() {
    return this._seRumSamplingNavPercent;
  }

  // se_rum_sampling_res_interval - computed: false, optional: true, required: false
  private _seRumSamplingResInterval?: string; 
  public get seRumSamplingResInterval() {
    return this.getStringAttribute('se_rum_sampling_res_interval');
  }
  public set seRumSamplingResInterval(value: string) {
    this._seRumSamplingResInterval = value;
  }
  public resetSeRumSamplingResInterval() {
    this._seRumSamplingResInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seRumSamplingResIntervalInput() {
    return this._seRumSamplingResInterval;
  }

  // se_rum_sampling_res_percent - computed: false, optional: true, required: false
  private _seRumSamplingResPercent?: string; 
  public get seRumSamplingResPercent() {
    return this.getStringAttribute('se_rum_sampling_res_percent');
  }
  public set seRumSamplingResPercent(value: string) {
    this._seRumSamplingResPercent = value;
  }
  public resetSeRumSamplingResPercent() {
    this._seRumSamplingResPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seRumSamplingResPercentInput() {
    return this._seRumSamplingResPercent;
  }

  // se_sb_dedicated_core - computed: false, optional: true, required: false
  private _seSbDedicatedCore?: string; 
  public get seSbDedicatedCore() {
    return this.getStringAttribute('se_sb_dedicated_core');
  }
  public set seSbDedicatedCore(value: string) {
    this._seSbDedicatedCore = value;
  }
  public resetSeSbDedicatedCore() {
    this._seSbDedicatedCore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seSbDedicatedCoreInput() {
    return this._seSbDedicatedCore;
  }

  // se_sb_threads - computed: false, optional: true, required: false
  private _seSbThreads?: string; 
  public get seSbThreads() {
    return this.getStringAttribute('se_sb_threads');
  }
  public set seSbThreads(value: string) {
    this._seSbThreads = value;
  }
  public resetSeSbThreads() {
    this._seSbThreads = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seSbThreadsInput() {
    return this._seSbThreads;
  }

  // se_thread_multiplier - computed: false, optional: true, required: false
  private _seThreadMultiplier?: string; 
  public get seThreadMultiplier() {
    return this.getStringAttribute('se_thread_multiplier');
  }
  public set seThreadMultiplier(value: string) {
    this._seThreadMultiplier = value;
  }
  public resetSeThreadMultiplier() {
    this._seThreadMultiplier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seThreadMultiplierInput() {
    return this._seThreadMultiplier;
  }

  // se_tunnel_mode - computed: false, optional: true, required: false
  private _seTunnelMode?: string; 
  public get seTunnelMode() {
    return this.getStringAttribute('se_tunnel_mode');
  }
  public set seTunnelMode(value: string) {
    this._seTunnelMode = value;
  }
  public resetSeTunnelMode() {
    this._seTunnelMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seTunnelModeInput() {
    return this._seTunnelMode;
  }

  // se_tunnel_udp_port - computed: false, optional: true, required: false
  private _seTunnelUdpPort?: string; 
  public get seTunnelUdpPort() {
    return this.getStringAttribute('se_tunnel_udp_port');
  }
  public set seTunnelUdpPort(value: string) {
    this._seTunnelUdpPort = value;
  }
  public resetSeTunnelUdpPort() {
    this._seTunnelUdpPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seTunnelUdpPortInput() {
    return this._seTunnelUdpPort;
  }

  // se_tx_batch_size - computed: false, optional: true, required: false
  private _seTxBatchSize?: string; 
  public get seTxBatchSize() {
    return this.getStringAttribute('se_tx_batch_size');
  }
  public set seTxBatchSize(value: string) {
    this._seTxBatchSize = value;
  }
  public resetSeTxBatchSize() {
    this._seTxBatchSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seTxBatchSizeInput() {
    return this._seTxBatchSize;
  }

  // se_txq_threshold - computed: false, optional: true, required: false
  private _seTxqThreshold?: string; 
  public get seTxqThreshold() {
    return this.getStringAttribute('se_txq_threshold');
  }
  public set seTxqThreshold(value: string) {
    this._seTxqThreshold = value;
  }
  public resetSeTxqThreshold() {
    this._seTxqThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seTxqThresholdInput() {
    return this._seTxqThreshold;
  }

  // se_udp_encap_ipc - computed: false, optional: true, required: false
  private _seUdpEncapIpc?: string; 
  public get seUdpEncapIpc() {
    return this.getStringAttribute('se_udp_encap_ipc');
  }
  public set seUdpEncapIpc(value: string) {
    this._seUdpEncapIpc = value;
  }
  public resetSeUdpEncapIpc() {
    this._seUdpEncapIpc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seUdpEncapIpcInput() {
    return this._seUdpEncapIpc;
  }

  // se_use_dpdk - computed: false, optional: true, required: false
  private _seUseDpdk?: string; 
  public get seUseDpdk() {
    return this.getStringAttribute('se_use_dpdk');
  }
  public set seUseDpdk(value: string) {
    this._seUseDpdk = value;
  }
  public resetSeUseDpdk() {
    this._seUseDpdk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seUseDpdkInput() {
    return this._seUseDpdk;
  }

  // se_vnic_tx_sw_queue_flush_frequency - computed: false, optional: true, required: false
  private _seVnicTxSwQueueFlushFrequency?: string; 
  public get seVnicTxSwQueueFlushFrequency() {
    return this.getStringAttribute('se_vnic_tx_sw_queue_flush_frequency');
  }
  public set seVnicTxSwQueueFlushFrequency(value: string) {
    this._seVnicTxSwQueueFlushFrequency = value;
  }
  public resetSeVnicTxSwQueueFlushFrequency() {
    this._seVnicTxSwQueueFlushFrequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seVnicTxSwQueueFlushFrequencyInput() {
    return this._seVnicTxSwQueueFlushFrequency;
  }

  // se_vnic_tx_sw_queue_size - computed: false, optional: true, required: false
  private _seVnicTxSwQueueSize?: string; 
  public get seVnicTxSwQueueSize() {
    return this.getStringAttribute('se_vnic_tx_sw_queue_size');
  }
  public set seVnicTxSwQueueSize(value: string) {
    this._seVnicTxSwQueueSize = value;
  }
  public resetSeVnicTxSwQueueSize() {
    this._seVnicTxSwQueueSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seVnicTxSwQueueSizeInput() {
    return this._seVnicTxSwQueueSize;
  }

  // se_vs_hb_max_pkts_in_batch - computed: false, optional: true, required: false
  private _seVsHbMaxPktsInBatch?: string; 
  public get seVsHbMaxPktsInBatch() {
    return this.getStringAttribute('se_vs_hb_max_pkts_in_batch');
  }
  public set seVsHbMaxPktsInBatch(value: string) {
    this._seVsHbMaxPktsInBatch = value;
  }
  public resetSeVsHbMaxPktsInBatch() {
    this._seVsHbMaxPktsInBatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seVsHbMaxPktsInBatchInput() {
    return this._seVsHbMaxPktsInBatch;
  }

  // se_vs_hb_max_vs_in_pkt - computed: false, optional: true, required: false
  private _seVsHbMaxVsInPkt?: string; 
  public get seVsHbMaxVsInPkt() {
    return this.getStringAttribute('se_vs_hb_max_vs_in_pkt');
  }
  public set seVsHbMaxVsInPkt(value: string) {
    this._seVsHbMaxVsInPkt = value;
  }
  public resetSeVsHbMaxVsInPkt() {
    this._seVsHbMaxVsInPkt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seVsHbMaxVsInPktInput() {
    return this._seVsHbMaxVsInPkt;
  }

  // self_se_election - computed: false, optional: true, required: false
  private _selfSeElection?: string; 
  public get selfSeElection() {
    return this.getStringAttribute('self_se_election');
  }
  public set selfSeElection(value: string) {
    this._selfSeElection = value;
  }
  public resetSelfSeElection() {
    this._selfSeElection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selfSeElectionInput() {
    return this._selfSeElection;
  }

  // send_se_ready_timeout - computed: false, optional: true, required: false
  private _sendSeReadyTimeout?: string; 
  public get sendSeReadyTimeout() {
    return this.getStringAttribute('send_se_ready_timeout');
  }
  public set sendSeReadyTimeout(value: string) {
    this._sendSeReadyTimeout = value;
  }
  public resetSendSeReadyTimeout() {
    this._sendSeReadyTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendSeReadyTimeoutInput() {
    return this._sendSeReadyTimeout;
  }

  // shm_minimum_config_memory - computed: false, optional: true, required: false
  private _shmMinimumConfigMemory?: string; 
  public get shmMinimumConfigMemory() {
    return this.getStringAttribute('shm_minimum_config_memory');
  }
  public set shmMinimumConfigMemory(value: string) {
    this._shmMinimumConfigMemory = value;
  }
  public resetShmMinimumConfigMemory() {
    this._shmMinimumConfigMemory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shmMinimumConfigMemoryInput() {
    return this._shmMinimumConfigMemory;
  }

  // significant_log_throttle - computed: false, optional: true, required: false
  private _significantLogThrottle?: string; 
  public get significantLogThrottle() {
    return this.getStringAttribute('significant_log_throttle');
  }
  public set significantLogThrottle(value: string) {
    this._significantLogThrottle = value;
  }
  public resetSignificantLogThrottle() {
    this._significantLogThrottle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get significantLogThrottleInput() {
    return this._significantLogThrottle;
  }

  // ssl_preprocess_sni_hostname - computed: false, optional: true, required: false
  private _sslPreprocessSniHostname?: string; 
  public get sslPreprocessSniHostname() {
    return this.getStringAttribute('ssl_preprocess_sni_hostname');
  }
  public set sslPreprocessSniHostname(value: string) {
    this._sslPreprocessSniHostname = value;
  }
  public resetSslPreprocessSniHostname() {
    this._sslPreprocessSniHostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslPreprocessSniHostnameInput() {
    return this._sslPreprocessSniHostname;
  }

  // ssl_sess_cache_per_vs - computed: false, optional: true, required: false
  private _sslSessCachePerVs?: string; 
  public get sslSessCachePerVs() {
    return this.getStringAttribute('ssl_sess_cache_per_vs');
  }
  public set sslSessCachePerVs(value: string) {
    this._sslSessCachePerVs = value;
  }
  public resetSslSessCachePerVs() {
    this._sslSessCachePerVs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslSessCachePerVsInput() {
    return this._sslSessCachePerVs;
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

  // transient_shared_memory_max - computed: false, optional: true, required: false
  private _transientSharedMemoryMax?: string; 
  public get transientSharedMemoryMax() {
    return this.getStringAttribute('transient_shared_memory_max');
  }
  public set transientSharedMemoryMax(value: string) {
    this._transientSharedMemoryMax = value;
  }
  public resetTransientSharedMemoryMax() {
    this._transientSharedMemoryMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transientSharedMemoryMaxInput() {
    return this._transientSharedMemoryMax;
  }

  // udf_log_throttle - computed: false, optional: true, required: false
  private _udfLogThrottle?: string; 
  public get udfLogThrottle() {
    return this.getStringAttribute('udf_log_throttle');
  }
  public set udfLogThrottle(value: string) {
    this._udfLogThrottle = value;
  }
  public resetUdfLogThrottle() {
    this._udfLogThrottle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udfLogThrottleInput() {
    return this._udfLogThrottle;
  }

  // upstream_connect_timeout - computed: false, optional: true, required: false
  private _upstreamConnectTimeout?: string; 
  public get upstreamConnectTimeout() {
    return this.getStringAttribute('upstream_connect_timeout');
  }
  public set upstreamConnectTimeout(value: string) {
    this._upstreamConnectTimeout = value;
  }
  public resetUpstreamConnectTimeout() {
    this._upstreamConnectTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upstreamConnectTimeoutInput() {
    return this._upstreamConnectTimeout;
  }

  // upstream_connpool_enable - computed: false, optional: true, required: false
  private _upstreamConnpoolEnable?: string; 
  public get upstreamConnpoolEnable() {
    return this.getStringAttribute('upstream_connpool_enable');
  }
  public set upstreamConnpoolEnable(value: string) {
    this._upstreamConnpoolEnable = value;
  }
  public resetUpstreamConnpoolEnable() {
    this._upstreamConnpoolEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upstreamConnpoolEnableInput() {
    return this._upstreamConnpoolEnable;
  }

  // upstream_read_timeout - computed: false, optional: true, required: false
  private _upstreamReadTimeout?: string; 
  public get upstreamReadTimeout() {
    return this.getStringAttribute('upstream_read_timeout');
  }
  public set upstreamReadTimeout(value: string) {
    this._upstreamReadTimeout = value;
  }
  public resetUpstreamReadTimeout() {
    this._upstreamReadTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upstreamReadTimeoutInput() {
    return this._upstreamReadTimeout;
  }

  // upstream_send_timeout - computed: false, optional: true, required: false
  private _upstreamSendTimeout?: string; 
  public get upstreamSendTimeout() {
    return this.getStringAttribute('upstream_send_timeout');
  }
  public set upstreamSendTimeout(value: string) {
    this._upstreamSendTimeout = value;
  }
  public resetUpstreamSendTimeout() {
    this._upstreamSendTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upstreamSendTimeoutInput() {
    return this._upstreamSendTimeout;
  }

  // use_dp_util_for_scaleout - computed: false, optional: true, required: false
  private _useDpUtilForScaleout?: string; 
  public get useDpUtilForScaleout() {
    return this.getStringAttribute('use_dp_util_for_scaleout');
  }
  public set useDpUtilForScaleout(value: string) {
    this._useDpUtilForScaleout = value;
  }
  public resetUseDpUtilForScaleout() {
    this._useDpUtilForScaleout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useDpUtilForScaleoutInput() {
    return this._useDpUtilForScaleout;
  }

  // use_hyperthreaded_cores - computed: false, optional: true, required: false
  private _useHyperthreadedCores?: string; 
  public get useHyperthreadedCores() {
    return this.getStringAttribute('use_hyperthreaded_cores');
  }
  public set useHyperthreadedCores(value: string) {
    this._useHyperthreadedCores = value;
  }
  public resetUseHyperthreadedCores() {
    this._useHyperthreadedCores = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useHyperthreadedCoresInput() {
    return this._useHyperthreadedCores;
  }

  // use_legacy_netlink - computed: false, optional: true, required: false
  private _useLegacyNetlink?: string; 
  public get useLegacyNetlink() {
    return this.getStringAttribute('use_legacy_netlink');
  }
  public set useLegacyNetlink(value: string) {
    this._useLegacyNetlink = value;
  }
  public resetUseLegacyNetlink() {
    this._useLegacyNetlink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useLegacyNetlinkInput() {
    return this._useLegacyNetlink;
  }

  // use_objsync - computed: false, optional: true, required: false
  private _useObjsync?: string; 
  public get useObjsync() {
    return this.getStringAttribute('use_objsync');
  }
  public set useObjsync(value: string) {
    this._useObjsync = value;
  }
  public resetUseObjsync() {
    this._useObjsync = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useObjsyncInput() {
    return this._useObjsync;
  }

  // use_standard_alb - computed: true, optional: true, required: false
  private _useStandardAlb?: string; 
  public get useStandardAlb() {
    return this.getStringAttribute('use_standard_alb');
  }
  public set useStandardAlb(value: string) {
    this._useStandardAlb = value;
  }
  public resetUseStandardAlb() {
    this._useStandardAlb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useStandardAlbInput() {
    return this._useStandardAlb;
  }

  // user_defined_metric_age - computed: false, optional: true, required: false
  private _userDefinedMetricAge?: string; 
  public get userDefinedMetricAge() {
    return this.getStringAttribute('user_defined_metric_age');
  }
  public set userDefinedMetricAge(value: string) {
    this._userDefinedMetricAge = value;
  }
  public resetUserDefinedMetricAge() {
    this._userDefinedMetricAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDefinedMetricAgeInput() {
    return this._userDefinedMetricAge;
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

  // vcenter_datastore_mode - computed: false, optional: true, required: false
  private _vcenterDatastoreMode?: string; 
  public get vcenterDatastoreMode() {
    return this.getStringAttribute('vcenter_datastore_mode');
  }
  public set vcenterDatastoreMode(value: string) {
    this._vcenterDatastoreMode = value;
  }
  public resetVcenterDatastoreMode() {
    this._vcenterDatastoreMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vcenterDatastoreModeInput() {
    return this._vcenterDatastoreMode;
  }

  // vcenter_datastores_include - computed: false, optional: true, required: false
  private _vcenterDatastoresInclude?: string; 
  public get vcenterDatastoresInclude() {
    return this.getStringAttribute('vcenter_datastores_include');
  }
  public set vcenterDatastoresInclude(value: string) {
    this._vcenterDatastoresInclude = value;
  }
  public resetVcenterDatastoresInclude() {
    this._vcenterDatastoresInclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vcenterDatastoresIncludeInput() {
    return this._vcenterDatastoresInclude;
  }

  // vcenter_folder - computed: false, optional: true, required: false
  private _vcenterFolder?: string; 
  public get vcenterFolder() {
    return this.getStringAttribute('vcenter_folder');
  }
  public set vcenterFolder(value: string) {
    this._vcenterFolder = value;
  }
  public resetVcenterFolder() {
    this._vcenterFolder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vcenterFolderInput() {
    return this._vcenterFolder;
  }

  // vcenter_parking_vnic_pg - computed: true, optional: true, required: false
  private _vcenterParkingVnicPg?: string; 
  public get vcenterParkingVnicPg() {
    return this.getStringAttribute('vcenter_parking_vnic_pg');
  }
  public set vcenterParkingVnicPg(value: string) {
    this._vcenterParkingVnicPg = value;
  }
  public resetVcenterParkingVnicPg() {
    this._vcenterParkingVnicPg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vcenterParkingVnicPgInput() {
    return this._vcenterParkingVnicPg;
  }

  // vcpus_per_se - computed: false, optional: true, required: false
  private _vcpusPerSe?: string; 
  public get vcpusPerSe() {
    return this.getStringAttribute('vcpus_per_se');
  }
  public set vcpusPerSe(value: string) {
    this._vcpusPerSe = value;
  }
  public resetVcpusPerSe() {
    this._vcpusPerSe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vcpusPerSeInput() {
    return this._vcpusPerSe;
  }

  // vnic_dhcp_ip_check_interval - computed: false, optional: true, required: false
  private _vnicDhcpIpCheckInterval?: string; 
  public get vnicDhcpIpCheckInterval() {
    return this.getStringAttribute('vnic_dhcp_ip_check_interval');
  }
  public set vnicDhcpIpCheckInterval(value: string) {
    this._vnicDhcpIpCheckInterval = value;
  }
  public resetVnicDhcpIpCheckInterval() {
    this._vnicDhcpIpCheckInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vnicDhcpIpCheckIntervalInput() {
    return this._vnicDhcpIpCheckInterval;
  }

  // vnic_dhcp_ip_max_retries - computed: false, optional: true, required: false
  private _vnicDhcpIpMaxRetries?: string; 
  public get vnicDhcpIpMaxRetries() {
    return this.getStringAttribute('vnic_dhcp_ip_max_retries');
  }
  public set vnicDhcpIpMaxRetries(value: string) {
    this._vnicDhcpIpMaxRetries = value;
  }
  public resetVnicDhcpIpMaxRetries() {
    this._vnicDhcpIpMaxRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vnicDhcpIpMaxRetriesInput() {
    return this._vnicDhcpIpMaxRetries;
  }

  // vnic_ip_delete_interval - computed: false, optional: true, required: false
  private _vnicIpDeleteInterval?: string; 
  public get vnicIpDeleteInterval() {
    return this.getStringAttribute('vnic_ip_delete_interval');
  }
  public set vnicIpDeleteInterval(value: string) {
    this._vnicIpDeleteInterval = value;
  }
  public resetVnicIpDeleteInterval() {
    this._vnicIpDeleteInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vnicIpDeleteIntervalInput() {
    return this._vnicIpDeleteInterval;
  }

  // vnic_probe_interval - computed: false, optional: true, required: false
  private _vnicProbeInterval?: string; 
  public get vnicProbeInterval() {
    return this.getStringAttribute('vnic_probe_interval');
  }
  public set vnicProbeInterval(value: string) {
    this._vnicProbeInterval = value;
  }
  public resetVnicProbeInterval() {
    this._vnicProbeInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vnicProbeIntervalInput() {
    return this._vnicProbeInterval;
  }

  // vnic_rpc_retry_interval - computed: false, optional: true, required: false
  private _vnicRpcRetryInterval?: string; 
  public get vnicRpcRetryInterval() {
    return this.getStringAttribute('vnic_rpc_retry_interval');
  }
  public set vnicRpcRetryInterval(value: string) {
    this._vnicRpcRetryInterval = value;
  }
  public resetVnicRpcRetryInterval() {
    this._vnicRpcRetryInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vnicRpcRetryIntervalInput() {
    return this._vnicRpcRetryInterval;
  }

  // vnicdb_cmd_history_size - computed: false, optional: true, required: false
  private _vnicdbCmdHistorySize?: string; 
  public get vnicdbCmdHistorySize() {
    return this.getStringAttribute('vnicdb_cmd_history_size');
  }
  public set vnicdbCmdHistorySize(value: string) {
    this._vnicdbCmdHistorySize = value;
  }
  public resetVnicdbCmdHistorySize() {
    this._vnicdbCmdHistorySize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vnicdbCmdHistorySizeInput() {
    return this._vnicdbCmdHistorySize;
  }

  // vs_host_redundancy - computed: false, optional: true, required: false
  private _vsHostRedundancy?: string; 
  public get vsHostRedundancy() {
    return this.getStringAttribute('vs_host_redundancy');
  }
  public set vsHostRedundancy(value: string) {
    this._vsHostRedundancy = value;
  }
  public resetVsHostRedundancy() {
    this._vsHostRedundancy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsHostRedundancyInput() {
    return this._vsHostRedundancy;
  }

  // vs_scalein_timeout - computed: false, optional: true, required: false
  private _vsScaleinTimeout?: string; 
  public get vsScaleinTimeout() {
    return this.getStringAttribute('vs_scalein_timeout');
  }
  public set vsScaleinTimeout(value: string) {
    this._vsScaleinTimeout = value;
  }
  public resetVsScaleinTimeout() {
    this._vsScaleinTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsScaleinTimeoutInput() {
    return this._vsScaleinTimeout;
  }

  // vs_scalein_timeout_for_upgrade - computed: false, optional: true, required: false
  private _vsScaleinTimeoutForUpgrade?: string; 
  public get vsScaleinTimeoutForUpgrade() {
    return this.getStringAttribute('vs_scalein_timeout_for_upgrade');
  }
  public set vsScaleinTimeoutForUpgrade(value: string) {
    this._vsScaleinTimeoutForUpgrade = value;
  }
  public resetVsScaleinTimeoutForUpgrade() {
    this._vsScaleinTimeoutForUpgrade = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsScaleinTimeoutForUpgradeInput() {
    return this._vsScaleinTimeoutForUpgrade;
  }

  // vs_scaleout_timeout - computed: false, optional: true, required: false
  private _vsScaleoutTimeout?: string; 
  public get vsScaleoutTimeout() {
    return this.getStringAttribute('vs_scaleout_timeout');
  }
  public set vsScaleoutTimeout(value: string) {
    this._vsScaleoutTimeout = value;
  }
  public resetVsScaleoutTimeout() {
    this._vsScaleoutTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsScaleoutTimeoutInput() {
    return this._vsScaleoutTimeout;
  }

  // vs_se_primary_switchover_additional_wait_time - computed: false, optional: true, required: false
  private _vsSePrimarySwitchoverAdditionalWaitTime?: string; 
  public get vsSePrimarySwitchoverAdditionalWaitTime() {
    return this.getStringAttribute('vs_se_primary_switchover_additional_wait_time');
  }
  public set vsSePrimarySwitchoverAdditionalWaitTime(value: string) {
    this._vsSePrimarySwitchoverAdditionalWaitTime = value;
  }
  public resetVsSePrimarySwitchoverAdditionalWaitTime() {
    this._vsSePrimarySwitchoverAdditionalWaitTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsSePrimarySwitchoverAdditionalWaitTimeInput() {
    return this._vsSePrimarySwitchoverAdditionalWaitTime;
  }

  // vs_se_scalein_additional_wait_time - computed: false, optional: true, required: false
  private _vsSeScaleinAdditionalWaitTime?: string; 
  public get vsSeScaleinAdditionalWaitTime() {
    return this.getStringAttribute('vs_se_scalein_additional_wait_time');
  }
  public set vsSeScaleinAdditionalWaitTime(value: string) {
    this._vsSeScaleinAdditionalWaitTime = value;
  }
  public resetVsSeScaleinAdditionalWaitTime() {
    this._vsSeScaleinAdditionalWaitTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsSeScaleinAdditionalWaitTimeInput() {
    return this._vsSeScaleinAdditionalWaitTime;
  }

  // vs_se_scaleout_additional_wait_time - computed: false, optional: true, required: false
  private _vsSeScaleoutAdditionalWaitTime?: string; 
  public get vsSeScaleoutAdditionalWaitTime() {
    return this.getStringAttribute('vs_se_scaleout_additional_wait_time');
  }
  public set vsSeScaleoutAdditionalWaitTime(value: string) {
    this._vsSeScaleoutAdditionalWaitTime = value;
  }
  public resetVsSeScaleoutAdditionalWaitTime() {
    this._vsSeScaleoutAdditionalWaitTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsSeScaleoutAdditionalWaitTimeInput() {
    return this._vsSeScaleoutAdditionalWaitTime;
  }

  // vs_se_scaleout_ready_timeout - computed: false, optional: true, required: false
  private _vsSeScaleoutReadyTimeout?: string; 
  public get vsSeScaleoutReadyTimeout() {
    return this.getStringAttribute('vs_se_scaleout_ready_timeout');
  }
  public set vsSeScaleoutReadyTimeout(value: string) {
    this._vsSeScaleoutReadyTimeout = value;
  }
  public resetVsSeScaleoutReadyTimeout() {
    this._vsSeScaleoutReadyTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsSeScaleoutReadyTimeoutInput() {
    return this._vsSeScaleoutReadyTimeout;
  }

  // vs_switchover_timeout - computed: false, optional: true, required: false
  private _vsSwitchoverTimeout?: string; 
  public get vsSwitchoverTimeout() {
    return this.getStringAttribute('vs_switchover_timeout');
  }
  public set vsSwitchoverTimeout(value: string) {
    this._vsSwitchoverTimeout = value;
  }
  public resetVsSwitchoverTimeout() {
    this._vsSwitchoverTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsSwitchoverTimeoutInput() {
    return this._vsSwitchoverTimeout;
  }

  // vss_placement_enabled - computed: false, optional: true, required: false
  private _vssPlacementEnabled?: string; 
  public get vssPlacementEnabled() {
    return this.getStringAttribute('vss_placement_enabled');
  }
  public set vssPlacementEnabled(value: string) {
    this._vssPlacementEnabled = value;
  }
  public resetVssPlacementEnabled() {
    this._vssPlacementEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vssPlacementEnabledInput() {
    return this._vssPlacementEnabled;
  }

  // waf_mempool - computed: false, optional: true, required: false
  private _wafMempool?: string; 
  public get wafMempool() {
    return this.getStringAttribute('waf_mempool');
  }
  public set wafMempool(value: string) {
    this._wafMempool = value;
  }
  public resetWafMempool() {
    this._wafMempool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wafMempoolInput() {
    return this._wafMempool;
  }

  // waf_mempool_size - computed: false, optional: true, required: false
  private _wafMempoolSize?: string; 
  public get wafMempoolSize() {
    return this.getStringAttribute('waf_mempool_size');
  }
  public set wafMempoolSize(value: string) {
    this._wafMempoolSize = value;
  }
  public resetWafMempoolSize() {
    this._wafMempoolSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wafMempoolSizeInput() {
    return this._wafMempoolSize;
  }

  // configpb_attributes - computed: false, optional: true, required: false
  private _configpbAttributes = new ServiceenginegroupConfigpbAttributesList(this, "configpb_attributes", true);
  public get configpbAttributes() {
    return this._configpbAttributes;
  }
  public putConfigpbAttributes(value: ServiceenginegroupConfigpbAttributes[] | cdktf.IResolvable) {
    this._configpbAttributes.internalValue = value;
  }
  public resetConfigpbAttributes() {
    this._configpbAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configpbAttributesInput() {
    return this._configpbAttributes.internalValue;
  }

  // custom_tag - computed: false, optional: true, required: false
  private _customTag = new ServiceenginegroupCustomTagList(this, "custom_tag", false);
  public get customTag() {
    return this._customTag;
  }
  public putCustomTag(value: ServiceenginegroupCustomTag[] | cdktf.IResolvable) {
    this._customTag.internalValue = value;
  }
  public resetCustomTag() {
    this._customTag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customTagInput() {
    return this._customTag.internalValue;
  }

  // gcp_config - computed: false, optional: true, required: false
  private _gcpConfig = new ServiceenginegroupGcpConfigList(this, "gcp_config", true);
  public get gcpConfig() {
    return this._gcpConfig;
  }
  public putGcpConfig(value: ServiceenginegroupGcpConfig[] | cdktf.IResolvable) {
    this._gcpConfig.internalValue = value;
  }
  public resetGcpConfig() {
    this._gcpConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpConfigInput() {
    return this._gcpConfig.internalValue;
  }

  // instance_flavor_info - computed: false, optional: true, required: false
  private _instanceFlavorInfo = new ServiceenginegroupInstanceFlavorInfoList(this, "instance_flavor_info", true);
  public get instanceFlavorInfo() {
    return this._instanceFlavorInfo;
  }
  public putInstanceFlavorInfo(value: ServiceenginegroupInstanceFlavorInfo[] | cdktf.IResolvable) {
    this._instanceFlavorInfo.internalValue = value;
  }
  public resetInstanceFlavorInfo() {
    this._instanceFlavorInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceFlavorInfoInput() {
    return this._instanceFlavorInfo.internalValue;
  }

  // iptables - computed: false, optional: true, required: false
  private _iptables = new ServiceenginegroupIptablesList(this, "iptables", false);
  public get iptables() {
    return this._iptables;
  }
  public putIptables(value: ServiceenginegroupIptables[] | cdktf.IResolvable) {
    this._iptables.internalValue = value;
  }
  public resetIptables() {
    this._iptables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iptablesInput() {
    return this._iptables.internalValue;
  }

  // kni_allowed_server_ports - computed: false, optional: true, required: false
  private _kniAllowedServerPorts = new ServiceenginegroupKniAllowedServerPortsList(this, "kni_allowed_server_ports", false);
  public get kniAllowedServerPorts() {
    return this._kniAllowedServerPorts;
  }
  public putKniAllowedServerPorts(value: ServiceenginegroupKniAllowedServerPorts[] | cdktf.IResolvable) {
    this._kniAllowedServerPorts.internalValue = value;
  }
  public resetKniAllowedServerPorts() {
    this._kniAllowedServerPorts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kniAllowedServerPortsInput() {
    return this._kniAllowedServerPorts.internalValue;
  }

  // labels - computed: false, optional: true, required: false
  private _labels = new ServiceenginegroupLabelsList(this, "labels", false);
  public get labels() {
    return this._labels;
  }
  public putLabels(value: ServiceenginegroupLabels[] | cdktf.IResolvable) {
    this._labels.internalValue = value;
  }
  public resetLabels() {
    this._labels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels.internalValue;
  }

  // markers - computed: false, optional: true, required: false
  private _markers = new ServiceenginegroupMarkersList(this, "markers", false);
  public get markers() {
    return this._markers;
  }
  public putMarkers(value: ServiceenginegroupMarkers[] | cdktf.IResolvable) {
    this._markers.internalValue = value;
  }
  public resetMarkers() {
    this._markers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get markersInput() {
    return this._markers.internalValue;
  }

  // mgmt_subnet - computed: false, optional: true, required: false
  private _mgmtSubnet = new ServiceenginegroupMgmtSubnetList(this, "mgmt_subnet", true);
  public get mgmtSubnet() {
    return this._mgmtSubnet;
  }
  public putMgmtSubnet(value: ServiceenginegroupMgmtSubnet[] | cdktf.IResolvable) {
    this._mgmtSubnet.internalValue = value;
  }
  public resetMgmtSubnet() {
    this._mgmtSubnet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mgmtSubnetInput() {
    return this._mgmtSubnet.internalValue;
  }

  // objsync_config - computed: false, optional: true, required: false
  private _objsyncConfig = new ServiceenginegroupObjsyncConfigList(this, "objsync_config", true);
  public get objsyncConfig() {
    return this._objsyncConfig;
  }
  public putObjsyncConfig(value: ServiceenginegroupObjsyncConfig[] | cdktf.IResolvable) {
    this._objsyncConfig.internalValue = value;
  }
  public resetObjsyncConfig() {
    this._objsyncConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objsyncConfigInput() {
    return this._objsyncConfig.internalValue;
  }

  // realtime_se_metrics - computed: false, optional: true, required: false
  private _realtimeSeMetrics = new ServiceenginegroupRealtimeSeMetricsList(this, "realtime_se_metrics", true);
  public get realtimeSeMetrics() {
    return this._realtimeSeMetrics;
  }
  public putRealtimeSeMetrics(value: ServiceenginegroupRealtimeSeMetrics[] | cdktf.IResolvable) {
    this._realtimeSeMetrics.internalValue = value;
  }
  public resetRealtimeSeMetrics() {
    this._realtimeSeMetrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get realtimeSeMetricsInput() {
    return this._realtimeSeMetrics.internalValue;
  }

  // se_dos_profile - computed: false, optional: true, required: false
  private _seDosProfile = new ServiceenginegroupSeDosProfileList(this, "se_dos_profile", true);
  public get seDosProfile() {
    return this._seDosProfile;
  }
  public putSeDosProfile(value: ServiceenginegroupSeDosProfile[] | cdktf.IResolvable) {
    this._seDosProfile.internalValue = value;
  }
  public resetSeDosProfile() {
    this._seDosProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seDosProfileInput() {
    return this._seDosProfile.internalValue;
  }

  // se_group_analytics_policy - computed: false, optional: true, required: false
  private _seGroupAnalyticsPolicy = new ServiceenginegroupSeGroupAnalyticsPolicyList(this, "se_group_analytics_policy", true);
  public get seGroupAnalyticsPolicy() {
    return this._seGroupAnalyticsPolicy;
  }
  public putSeGroupAnalyticsPolicy(value: ServiceenginegroupSeGroupAnalyticsPolicy[] | cdktf.IResolvable) {
    this._seGroupAnalyticsPolicy.internalValue = value;
  }
  public resetSeGroupAnalyticsPolicy() {
    this._seGroupAnalyticsPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seGroupAnalyticsPolicyInput() {
    return this._seGroupAnalyticsPolicy.internalValue;
  }

  // se_rl_prop - computed: false, optional: true, required: false
  private _seRlProp = new ServiceenginegroupSeRlPropList(this, "se_rl_prop", true);
  public get seRlProp() {
    return this._seRlProp;
  }
  public putSeRlProp(value: ServiceenginegroupSeRlProp[] | cdktf.IResolvable) {
    this._seRlProp.internalValue = value;
  }
  public resetSeRlProp() {
    this._seRlProp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seRlPropInput() {
    return this._seRlProp.internalValue;
  }

  // se_time_tracker_props - computed: false, optional: true, required: false
  private _seTimeTrackerProps = new ServiceenginegroupSeTimeTrackerPropsList(this, "se_time_tracker_props", true);
  public get seTimeTrackerProps() {
    return this._seTimeTrackerProps;
  }
  public putSeTimeTrackerProps(value: ServiceenginegroupSeTimeTrackerProps[] | cdktf.IResolvable) {
    this._seTimeTrackerProps.internalValue = value;
  }
  public resetSeTimeTrackerProps() {
    this._seTimeTrackerProps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seTimeTrackerPropsInput() {
    return this._seTimeTrackerProps.internalValue;
  }

  // se_tracert_port_range - computed: false, optional: true, required: false
  private _seTracertPortRange = new ServiceenginegroupSeTracertPortRangeList(this, "se_tracert_port_range", true);
  public get seTracertPortRange() {
    return this._seTracertPortRange;
  }
  public putSeTracertPortRange(value: ServiceenginegroupSeTracertPortRange[] | cdktf.IResolvable) {
    this._seTracertPortRange.internalValue = value;
  }
  public resetSeTracertPortRange() {
    this._seTracertPortRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seTracertPortRangeInput() {
    return this._seTracertPortRange.internalValue;
  }

  // service_ip6_subnets - computed: false, optional: true, required: false
  private _serviceIp6Subnets = new ServiceenginegroupServiceIp6SubnetsList(this, "service_ip6_subnets", false);
  public get serviceIp6Subnets() {
    return this._serviceIp6Subnets;
  }
  public putServiceIp6Subnets(value: ServiceenginegroupServiceIp6Subnets[] | cdktf.IResolvable) {
    this._serviceIp6Subnets.internalValue = value;
  }
  public resetServiceIp6Subnets() {
    this._serviceIp6Subnets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceIp6SubnetsInput() {
    return this._serviceIp6Subnets.internalValue;
  }

  // service_ip_subnets - computed: false, optional: true, required: false
  private _serviceIpSubnets = new ServiceenginegroupServiceIpSubnetsList(this, "service_ip_subnets", false);
  public get serviceIpSubnets() {
    return this._serviceIpSubnets;
  }
  public putServiceIpSubnets(value: ServiceenginegroupServiceIpSubnets[] | cdktf.IResolvable) {
    this._serviceIpSubnets.internalValue = value;
  }
  public resetServiceIpSubnets() {
    this._serviceIpSubnets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceIpSubnetsInput() {
    return this._serviceIpSubnets.internalValue;
  }

  // user_agent_cache_config - computed: false, optional: true, required: false
  private _userAgentCacheConfig = new ServiceenginegroupUserAgentCacheConfigList(this, "user_agent_cache_config", true);
  public get userAgentCacheConfig() {
    return this._userAgentCacheConfig;
  }
  public putUserAgentCacheConfig(value: ServiceenginegroupUserAgentCacheConfig[] | cdktf.IResolvable) {
    this._userAgentCacheConfig.internalValue = value;
  }
  public resetUserAgentCacheConfig() {
    this._userAgentCacheConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAgentCacheConfigInput() {
    return this._userAgentCacheConfig.internalValue;
  }

  // vcenter_clusters - computed: false, optional: true, required: false
  private _vcenterClusters = new ServiceenginegroupVcenterClustersList(this, "vcenter_clusters", true);
  public get vcenterClusters() {
    return this._vcenterClusters;
  }
  public putVcenterClusters(value: ServiceenginegroupVcenterClusters[] | cdktf.IResolvable) {
    this._vcenterClusters.internalValue = value;
  }
  public resetVcenterClusters() {
    this._vcenterClusters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vcenterClustersInput() {
    return this._vcenterClusters.internalValue;
  }

  // vcenter_datastores - computed: false, optional: true, required: false
  private _vcenterDatastores = new ServiceenginegroupVcenterDatastoresList(this, "vcenter_datastores", false);
  public get vcenterDatastores() {
    return this._vcenterDatastores;
  }
  public putVcenterDatastores(value: ServiceenginegroupVcenterDatastores[] | cdktf.IResolvable) {
    this._vcenterDatastores.internalValue = value;
  }
  public resetVcenterDatastores() {
    this._vcenterDatastores.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vcenterDatastoresInput() {
    return this._vcenterDatastores.internalValue;
  }

  // vcenter_hosts - computed: false, optional: true, required: false
  private _vcenterHosts = new ServiceenginegroupVcenterHostsList(this, "vcenter_hosts", true);
  public get vcenterHosts() {
    return this._vcenterHosts;
  }
  public putVcenterHosts(value: ServiceenginegroupVcenterHosts[] | cdktf.IResolvable) {
    this._vcenterHosts.internalValue = value;
  }
  public resetVcenterHosts() {
    this._vcenterHosts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vcenterHostsInput() {
    return this._vcenterHosts.internalValue;
  }

  // vcenters - computed: false, optional: true, required: false
  private _vcenters = new ServiceenginegroupVcentersList(this, "vcenters", false);
  public get vcenters() {
    return this._vcenters;
  }
  public putVcenters(value: ServiceenginegroupVcenters[] | cdktf.IResolvable) {
    this._vcenters.internalValue = value;
  }
  public resetVcenters() {
    this._vcenters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vcentersInput() {
    return this._vcenters.internalValue;
  }

  // vip_asg - computed: false, optional: true, required: false
  private _vipAsg = new ServiceenginegroupVipAsgList(this, "vip_asg", true);
  public get vipAsg() {
    return this._vipAsg;
  }
  public putVipAsg(value: ServiceenginegroupVipAsg[] | cdktf.IResolvable) {
    this._vipAsg.internalValue = value;
  }
  public resetVipAsg() {
    this._vipAsg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vipAsgInput() {
    return this._vipAsg.internalValue;
  }

  // vss_placement - computed: false, optional: true, required: false
  private _vssPlacement = new ServiceenginegroupVssPlacementList(this, "vss_placement", true);
  public get vssPlacement() {
    return this._vssPlacement;
  }
  public putVssPlacement(value: ServiceenginegroupVssPlacement[] | cdktf.IResolvable) {
    this._vssPlacement.internalValue = value;
  }
  public resetVssPlacement() {
    this._vssPlacement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vssPlacementInput() {
    return this._vssPlacement.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      accelerated_networking: cdktf.stringToTerraform(this._acceleratedNetworking),
      active_standby: cdktf.stringToTerraform(this._activeStandby),
      aggressive_failure_detection: cdktf.stringToTerraform(this._aggressiveFailureDetection),
      algo: cdktf.stringToTerraform(this._algo),
      allow_burst: cdktf.stringToTerraform(this._allowBurst),
      app_cache_percent: cdktf.stringToTerraform(this._appCachePercent),
      app_cache_threshold: cdktf.stringToTerraform(this._appCacheThreshold),
      app_learning_memory_percent: cdktf.stringToTerraform(this._appLearningMemoryPercent),
      archive_shm_limit: cdktf.stringToTerraform(this._archiveShmLimit),
      async_ssl: cdktf.stringToTerraform(this._asyncSsl),
      async_ssl_threads: cdktf.stringToTerraform(this._asyncSslThreads),
      auto_rebalance: cdktf.stringToTerraform(this._autoRebalance),
      auto_rebalance_capacity_per_se: cdktf.listMapper(cdktf.numberToTerraform, false)(this._autoRebalanceCapacityPerSe),
      auto_rebalance_criteria: cdktf.listMapper(cdktf.stringToTerraform, false)(this._autoRebalanceCriteria),
      auto_rebalance_interval: cdktf.stringToTerraform(this._autoRebalanceInterval),
      auto_redistribute_active_standby_load: cdktf.stringToTerraform(this._autoRedistributeActiveStandbyLoad),
      availability_zone_refs: cdktf.listMapper(cdktf.stringToTerraform, false)(this._availabilityZoneRefs),
      baremetal_dispatcher_handles_flows: cdktf.stringToTerraform(this._baremetalDispatcherHandlesFlows),
      bgp_peer_monitor_failover_enabled: cdktf.stringToTerraform(this._bgpPeerMonitorFailoverEnabled),
      bgp_state_update_interval: cdktf.stringToTerraform(this._bgpStateUpdateInterval),
      buffer_se: cdktf.stringToTerraform(this._bufferSe),
      cloud_ref: cdktf.stringToTerraform(this._cloudRef),
      compress_ip_rules_for_each_ns_subnet: cdktf.stringToTerraform(this._compressIpRulesForEachNsSubnet),
      config_debugs_on_all_cores: cdktf.stringToTerraform(this._configDebugsOnAllCores),
      connection_memory_percentage: cdktf.stringToTerraform(this._connectionMemoryPercentage),
      core_shm_app_cache: cdktf.stringToTerraform(this._coreShmAppCache),
      core_shm_app_learning: cdktf.stringToTerraform(this._coreShmAppLearning),
      cpu_reserve: cdktf.stringToTerraform(this._cpuReserve),
      cpu_socket_affinity: cdktf.stringToTerraform(this._cpuSocketAffinity),
      custom_securitygroups_data: cdktf.listMapper(cdktf.stringToTerraform, false)(this._customSecuritygroupsData),
      custom_securitygroups_mgmt: cdktf.listMapper(cdktf.stringToTerraform, false)(this._customSecuritygroupsMgmt),
      data_network_id: cdktf.stringToTerraform(this._dataNetworkId),
      datascript_timeout: cdktf.stringToTerraform(this._datascriptTimeout),
      deactivate_ipv6_discovery: cdktf.stringToTerraform(this._deactivateIpv6Discovery),
      deactivate_kni_filtering_at_dispatcher: cdktf.stringToTerraform(this._deactivateKniFilteringAtDispatcher),
      dedicated_dispatcher_core: cdktf.stringToTerraform(this._dedicatedDispatcherCore),
      description: cdktf.stringToTerraform(this._description),
      disable_avi_securitygroups: cdktf.stringToTerraform(this._disableAviSecuritygroups),
      disable_csum_offloads: cdktf.stringToTerraform(this._disableCsumOffloads),
      disable_flow_probes: cdktf.stringToTerraform(this._disableFlowProbes),
      disable_gro: cdktf.stringToTerraform(this._disableGro),
      disable_se_memory_check: cdktf.stringToTerraform(this._disableSeMemoryCheck),
      disable_tso: cdktf.stringToTerraform(this._disableTso),
      disk_per_se: cdktf.stringToTerraform(this._diskPerSe),
      distribute_load_active_standby: cdktf.stringToTerraform(this._distributeLoadActiveStandby),
      distribute_queues: cdktf.stringToTerraform(this._distributeQueues),
      distribute_vnics: cdktf.stringToTerraform(this._distributeVnics),
      downstream_send_timeout: cdktf.stringToTerraform(this._downstreamSendTimeout),
      dp_aggressive_deq_interval_msec: cdktf.stringToTerraform(this._dpAggressiveDeqIntervalMsec),
      dp_aggressive_enq_interval_msec: cdktf.stringToTerraform(this._dpAggressiveEnqIntervalMsec),
      dp_aggressive_hb_frequency: cdktf.stringToTerraform(this._dpAggressiveHbFrequency),
      dp_aggressive_hb_timeout_count: cdktf.stringToTerraform(this._dpAggressiveHbTimeoutCount),
      dp_deq_interval_msec: cdktf.stringToTerraform(this._dpDeqIntervalMsec),
      dp_enq_interval_msec: cdktf.stringToTerraform(this._dpEnqIntervalMsec),
      dp_hb_frequency: cdktf.stringToTerraform(this._dpHbFrequency),
      dp_hb_timeout_count: cdktf.stringToTerraform(this._dpHbTimeoutCount),
      dpdk_gro_timeout_interval: cdktf.stringToTerraform(this._dpdkGroTimeoutInterval),
      enable_gratarp_permanent: cdktf.stringToTerraform(this._enableGratarpPermanent),
      enable_hsm_log: cdktf.stringToTerraform(this._enableHsmLog),
      enable_hsm_priming: cdktf.stringToTerraform(this._enableHsmPriming),
      enable_multi_lb: cdktf.stringToTerraform(this._enableMultiLb),
      enable_pcap_tx_ring: cdktf.stringToTerraform(this._enablePcapTxRing),
      ephemeral_portrange_end: cdktf.stringToTerraform(this._ephemeralPortrangeEnd),
      ephemeral_portrange_start: cdktf.stringToTerraform(this._ephemeralPortrangeStart),
      extra_config_multiplier: cdktf.stringToTerraform(this._extraConfigMultiplier),
      extra_shared_config_memory: cdktf.stringToTerraform(this._extraSharedConfigMemory),
      flow_table_new_syn_max_entries: cdktf.stringToTerraform(this._flowTableNewSynMaxEntries),
      free_list_size: cdktf.stringToTerraform(this._freeListSize),
      gratarp_permanent_periodicity: cdktf.stringToTerraform(this._gratarpPermanentPeriodicity),
      grpc_channel_connect_timeout: cdktf.stringToTerraform(this._grpcChannelConnectTimeout),
      gve_enabled: cdktf.stringToTerraform(this._gveEnabled),
      ha_mode: cdktf.stringToTerraform(this._haMode),
      handle_per_pkt_attack: cdktf.stringToTerraform(this._handlePerPktAttack),
      hardwaresecuritymodulegroup_ref: cdktf.stringToTerraform(this._hardwaresecuritymodulegroupRef),
      heap_minimum_config_memory: cdktf.stringToTerraform(this._heapMinimumConfigMemory),
      hm_on_standby: cdktf.stringToTerraform(this._hmOnStandby),
      host_attribute_key: cdktf.stringToTerraform(this._hostAttributeKey),
      host_attribute_value: cdktf.stringToTerraform(this._hostAttributeValue),
      host_gateway_monitor: cdktf.stringToTerraform(this._hostGatewayMonitor),
      http_rum_console_log: cdktf.stringToTerraform(this._httpRumConsoleLog),
      http_rum_min_content_length: cdktf.stringToTerraform(this._httpRumMinContentLength),
      hybrid_rss_mode: cdktf.stringToTerraform(this._hybridRssMode),
      hypervisor: cdktf.stringToTerraform(this._hypervisor),
      id: cdktf.stringToTerraform(this._id),
      ignore_docker_mac_change: cdktf.stringToTerraform(this._ignoreDockerMacChange),
      ignore_rtt_threshold: cdktf.stringToTerraform(this._ignoreRttThreshold),
      ingress_access_data: cdktf.stringToTerraform(this._ingressAccessData),
      ingress_access_mgmt: cdktf.stringToTerraform(this._ingressAccessMgmt),
      instance_flavor: cdktf.stringToTerraform(this._instanceFlavor),
      l7_conns_per_core: cdktf.stringToTerraform(this._l7ConnsPerCore),
      l7_resvd_listen_conns_per_core: cdktf.stringToTerraform(this._l7ResvdListenConnsPerCore),
      lbaction_num_requests_to_dispatch: cdktf.stringToTerraform(this._lbactionNumRequestsToDispatch),
      lbaction_rq_per_request_max_retries: cdktf.stringToTerraform(this._lbactionRqPerRequestMaxRetries),
      least_load_core_selection: cdktf.stringToTerraform(this._leastLoadCoreSelection),
      license_tier: cdktf.stringToTerraform(this._licenseTier),
      license_type: cdktf.stringToTerraform(this._licenseType),
      log_agent_compress_logs: cdktf.stringToTerraform(this._logAgentCompressLogs),
      log_agent_debug_enabled: cdktf.stringToTerraform(this._logAgentDebugEnabled),
      log_agent_file_sz_appl: cdktf.stringToTerraform(this._logAgentFileSzAppl),
      log_agent_file_sz_conn: cdktf.stringToTerraform(this._logAgentFileSzConn),
      log_agent_file_sz_debug: cdktf.stringToTerraform(this._logAgentFileSzDebug),
      log_agent_file_sz_event: cdktf.stringToTerraform(this._logAgentFileSzEvent),
      log_agent_log_storage_min_sz: cdktf.stringToTerraform(this._logAgentLogStorageMinSz),
      log_agent_max_concurrent_rsync: cdktf.stringToTerraform(this._logAgentMaxConcurrentRsync),
      log_agent_max_storage_excess_percent: cdktf.stringToTerraform(this._logAgentMaxStorageExcessPercent),
      log_agent_max_storage_ignore_percent: cdktf.stringToTerraform(this._logAgentMaxStorageIgnorePercent),
      log_agent_min_storage_per_vs: cdktf.stringToTerraform(this._logAgentMinStoragePerVs),
      log_agent_sleep_interval: cdktf.stringToTerraform(this._logAgentSleepInterval),
      log_agent_trace_enabled: cdktf.stringToTerraform(this._logAgentTraceEnabled),
      log_agent_unknown_vs_timer: cdktf.stringToTerraform(this._logAgentUnknownVsTimer),
      log_disksz: cdktf.stringToTerraform(this._logDisksz),
      log_malloc_failure: cdktf.stringToTerraform(this._logMallocFailure),
      log_message_max_file_list_size: cdktf.stringToTerraform(this._logMessageMaxFileListSize),
      max_concurrent_external_hm: cdktf.stringToTerraform(this._maxConcurrentExternalHm),
      max_cpu_usage: cdktf.stringToTerraform(this._maxCpuUsage),
      max_memory_per_mempool: cdktf.stringToTerraform(this._maxMemoryPerMempool),
      max_num_http_sessions_to_store: cdktf.stringToTerraform(this._maxNumHttpSessionsToStore),
      max_num_se_dps: cdktf.stringToTerraform(this._maxNumSeDps),
      max_public_ips_per_lb: cdktf.stringToTerraform(this._maxPublicIpsPerLb),
      max_queues_per_vnic: cdktf.stringToTerraform(this._maxQueuesPerVnic),
      max_rules_per_lb: cdktf.stringToTerraform(this._maxRulesPerLb),
      max_scaleout_per_vs: cdktf.stringToTerraform(this._maxScaleoutPerVs),
      max_se: cdktf.stringToTerraform(this._maxSe),
      max_skb_frags: cdktf.stringToTerraform(this._maxSkbFrags),
      max_vs_per_se: cdktf.stringToTerraform(this._maxVsPerSe),
      mem_reserve: cdktf.stringToTerraform(this._memReserve),
      memory_for_config_update: cdktf.stringToTerraform(this._memoryForConfigUpdate),
      memory_per_se: cdktf.stringToTerraform(this._memoryPerSe),
      metrics_collection_mode: cdktf.stringToTerraform(this._metricsCollectionMode),
      mgmt_network_ref: cdktf.stringToTerraform(this._mgmtNetworkRef),
      min_cpu_usage: cdktf.stringToTerraform(this._minCpuUsage),
      min_scaleout_per_vs: cdktf.stringToTerraform(this._minScaleoutPerVs),
      min_se: cdktf.stringToTerraform(this._minSe),
      minimum_connection_memory: cdktf.stringToTerraform(this._minimumConnectionMemory),
      multicast_enable: cdktf.stringToTerraform(this._multicastEnable),
      n_log_streaming_threads: cdktf.stringToTerraform(this._nLogStreamingThreads),
      name: cdktf.stringToTerraform(this._name),
      netlink_poller_threads: cdktf.stringToTerraform(this._netlinkPollerThreads),
      netlink_sock_buf_size: cdktf.stringToTerraform(this._netlinkSockBufSize),
      ngx_free_connection_stack: cdktf.stringToTerraform(this._ngxFreeConnectionStack),
      non_significant_log_throttle: cdktf.stringToTerraform(this._nonSignificantLogThrottle),
      ns_helper_deq_interval_msec: cdktf.stringToTerraform(this._nsHelperDeqIntervalMsec),
      ntp_sync_fail_event: cdktf.stringToTerraform(this._ntpSyncFailEvent),
      ntp_sync_status_interval: cdktf.stringToTerraform(this._ntpSyncStatusInterval),
      num_dispatcher_cores: cdktf.stringToTerraform(this._numDispatcherCores),
      num_dispatcher_queues: cdktf.stringToTerraform(this._numDispatcherQueues),
      num_flow_cores_sum_changes_to_ignore: cdktf.stringToTerraform(this._numFlowCoresSumChangesToIgnore),
      objsync_port: cdktf.stringToTerraform(this._objsyncPort),
      openstack_availability_zones: cdktf.listMapper(cdktf.stringToTerraform, false)(this._openstackAvailabilityZones),
      openstack_mgmt_network_name: cdktf.stringToTerraform(this._openstackMgmtNetworkName),
      openstack_mgmt_network_uuid: cdktf.stringToTerraform(this._openstackMgmtNetworkUuid),
      os_reserved_memory: cdktf.stringToTerraform(this._osReservedMemory),
      path_mtu_discovery_v4: cdktf.stringToTerraform(this._pathMtuDiscoveryV4),
      path_mtu_discovery_v6: cdktf.stringToTerraform(this._pathMtuDiscoveryV6),
      pcap_tx_mode: cdktf.stringToTerraform(this._pcapTxMode),
      pcap_tx_ring_rd_balancing_factor: cdktf.stringToTerraform(this._pcapTxRingRdBalancingFactor),
      per_app: cdktf.stringToTerraform(this._perApp),
      per_vs_admission_control: cdktf.stringToTerraform(this._perVsAdmissionControl),
      placement_mode: cdktf.stringToTerraform(this._placementMode),
      reboot_on_panic: cdktf.stringToTerraform(this._rebootOnPanic),
      replay_vrf_routes_interval: cdktf.stringToTerraform(this._replayVrfRoutesInterval),
      resync_time_interval: cdktf.stringToTerraform(this._resyncTimeInterval),
      sdb_flush_interval: cdktf.stringToTerraform(this._sdbFlushInterval),
      sdb_key_timeout: cdktf.stringToTerraform(this._sdbKeyTimeout),
      sdb_pipeline_size: cdktf.stringToTerraform(this._sdbPipelineSize),
      sdb_scan_count: cdktf.stringToTerraform(this._sdbScanCount),
      se_bandwidth_type: cdktf.stringToTerraform(this._seBandwidthType),
      se_debug_trace_sz: cdktf.stringToTerraform(this._seDebugTraceSz),
      se_delayed_flow_delete: cdktf.stringToTerraform(this._seDelayedFlowDelete),
      se_deprovision_delay: cdktf.stringToTerraform(this._seDeprovisionDelay),
      se_dp_hm_drops: cdktf.stringToTerraform(this._seDpHmDrops),
      se_dp_if_state_poll_interval: cdktf.stringToTerraform(this._seDpIfStatePollInterval),
      se_dp_isolation: cdktf.stringToTerraform(this._seDpIsolation),
      se_dp_isolation_num_non_dp_cpus: cdktf.stringToTerraform(this._seDpIsolationNumNonDpCpus),
      se_dp_log_nf_enqueue_percent: cdktf.stringToTerraform(this._seDpLogNfEnqueuePercent),
      se_dp_log_udf_enqueue_percent: cdktf.stringToTerraform(this._seDpLogUdfEnqueuePercent),
      se_dp_max_hb_version: cdktf.stringToTerraform(this._seDpMaxHbVersion),
      se_dp_vnic_queue_stall_event_sleep: cdktf.stringToTerraform(this._seDpVnicQueueStallEventSleep),
      se_dp_vnic_queue_stall_threshold: cdktf.stringToTerraform(this._seDpVnicQueueStallThreshold),
      se_dp_vnic_queue_stall_timeout: cdktf.stringToTerraform(this._seDpVnicQueueStallTimeout),
      se_dp_vnic_restart_on_queue_stall_count: cdktf.stringToTerraform(this._seDpVnicRestartOnQueueStallCount),
      se_dp_vnic_stall_se_restart_window: cdktf.stringToTerraform(this._seDpVnicStallSeRestartWindow),
      se_dpdk_pmd: cdktf.stringToTerraform(this._seDpdkPmd),
      se_dump_core_on_assert: cdktf.stringToTerraform(this._seDumpCoreOnAssert),
      se_emulated_cores: cdktf.stringToTerraform(this._seEmulatedCores),
      se_flow_probe_retries: cdktf.stringToTerraform(this._seFlowProbeRetries),
      se_flow_probe_retry_timer: cdktf.stringToTerraform(this._seFlowProbeRetryTimer),
      se_hyperthreaded_mode: cdktf.stringToTerraform(this._seHyperthreadedMode),
      se_ip_encap_ipc: cdktf.stringToTerraform(this._seIpEncapIpc),
      se_kni_burst_factor: cdktf.stringToTerraform(this._seKniBurstFactor),
      se_l3_encap_ipc: cdktf.stringToTerraform(this._seL3EncapIpc),
      se_log_buffer_app_blocking_dequeue: cdktf.stringToTerraform(this._seLogBufferAppBlockingDequeue),
      se_log_buffer_conn_blocking_dequeue: cdktf.stringToTerraform(this._seLogBufferConnBlockingDequeue),
      se_log_buffer_events_blocking_dequeue: cdktf.stringToTerraform(this._seLogBufferEventsBlockingDequeue),
      se_lro: cdktf.stringToTerraform(this._seLro),
      se_mp_ring_retry_count: cdktf.stringToTerraform(this._seMpRingRetryCount),
      se_mtu: cdktf.stringToTerraform(this._seMtu),
      se_name_prefix: cdktf.stringToTerraform(this._seNamePrefix),
      se_packet_buffer_max: cdktf.stringToTerraform(this._sePacketBufferMax),
      se_pcap_lookahead: cdktf.stringToTerraform(this._sePcapLookahead),
      se_pcap_pkt_count: cdktf.stringToTerraform(this._sePcapPktCount),
      se_pcap_pkt_sz: cdktf.stringToTerraform(this._sePcapPktSz),
      se_pcap_qdisc_bypass: cdktf.stringToTerraform(this._sePcapQdiscBypass),
      se_pcap_reinit_frequency: cdktf.stringToTerraform(this._sePcapReinitFrequency),
      se_pcap_reinit_threshold: cdktf.stringToTerraform(this._sePcapReinitThreshold),
      se_probe_port: cdktf.stringToTerraform(this._seProbePort),
      se_rum_sampling_nav_interval: cdktf.stringToTerraform(this._seRumSamplingNavInterval),
      se_rum_sampling_nav_percent: cdktf.stringToTerraform(this._seRumSamplingNavPercent),
      se_rum_sampling_res_interval: cdktf.stringToTerraform(this._seRumSamplingResInterval),
      se_rum_sampling_res_percent: cdktf.stringToTerraform(this._seRumSamplingResPercent),
      se_sb_dedicated_core: cdktf.stringToTerraform(this._seSbDedicatedCore),
      se_sb_threads: cdktf.stringToTerraform(this._seSbThreads),
      se_thread_multiplier: cdktf.stringToTerraform(this._seThreadMultiplier),
      se_tunnel_mode: cdktf.stringToTerraform(this._seTunnelMode),
      se_tunnel_udp_port: cdktf.stringToTerraform(this._seTunnelUdpPort),
      se_tx_batch_size: cdktf.stringToTerraform(this._seTxBatchSize),
      se_txq_threshold: cdktf.stringToTerraform(this._seTxqThreshold),
      se_udp_encap_ipc: cdktf.stringToTerraform(this._seUdpEncapIpc),
      se_use_dpdk: cdktf.stringToTerraform(this._seUseDpdk),
      se_vnic_tx_sw_queue_flush_frequency: cdktf.stringToTerraform(this._seVnicTxSwQueueFlushFrequency),
      se_vnic_tx_sw_queue_size: cdktf.stringToTerraform(this._seVnicTxSwQueueSize),
      se_vs_hb_max_pkts_in_batch: cdktf.stringToTerraform(this._seVsHbMaxPktsInBatch),
      se_vs_hb_max_vs_in_pkt: cdktf.stringToTerraform(this._seVsHbMaxVsInPkt),
      self_se_election: cdktf.stringToTerraform(this._selfSeElection),
      send_se_ready_timeout: cdktf.stringToTerraform(this._sendSeReadyTimeout),
      shm_minimum_config_memory: cdktf.stringToTerraform(this._shmMinimumConfigMemory),
      significant_log_throttle: cdktf.stringToTerraform(this._significantLogThrottle),
      ssl_preprocess_sni_hostname: cdktf.stringToTerraform(this._sslPreprocessSniHostname),
      ssl_sess_cache_per_vs: cdktf.stringToTerraform(this._sslSessCachePerVs),
      tenant_ref: cdktf.stringToTerraform(this._tenantRef),
      transient_shared_memory_max: cdktf.stringToTerraform(this._transientSharedMemoryMax),
      udf_log_throttle: cdktf.stringToTerraform(this._udfLogThrottle),
      upstream_connect_timeout: cdktf.stringToTerraform(this._upstreamConnectTimeout),
      upstream_connpool_enable: cdktf.stringToTerraform(this._upstreamConnpoolEnable),
      upstream_read_timeout: cdktf.stringToTerraform(this._upstreamReadTimeout),
      upstream_send_timeout: cdktf.stringToTerraform(this._upstreamSendTimeout),
      use_dp_util_for_scaleout: cdktf.stringToTerraform(this._useDpUtilForScaleout),
      use_hyperthreaded_cores: cdktf.stringToTerraform(this._useHyperthreadedCores),
      use_legacy_netlink: cdktf.stringToTerraform(this._useLegacyNetlink),
      use_objsync: cdktf.stringToTerraform(this._useObjsync),
      use_standard_alb: cdktf.stringToTerraform(this._useStandardAlb),
      user_defined_metric_age: cdktf.stringToTerraform(this._userDefinedMetricAge),
      uuid: cdktf.stringToTerraform(this._uuid),
      vcenter_datastore_mode: cdktf.stringToTerraform(this._vcenterDatastoreMode),
      vcenter_datastores_include: cdktf.stringToTerraform(this._vcenterDatastoresInclude),
      vcenter_folder: cdktf.stringToTerraform(this._vcenterFolder),
      vcenter_parking_vnic_pg: cdktf.stringToTerraform(this._vcenterParkingVnicPg),
      vcpus_per_se: cdktf.stringToTerraform(this._vcpusPerSe),
      vnic_dhcp_ip_check_interval: cdktf.stringToTerraform(this._vnicDhcpIpCheckInterval),
      vnic_dhcp_ip_max_retries: cdktf.stringToTerraform(this._vnicDhcpIpMaxRetries),
      vnic_ip_delete_interval: cdktf.stringToTerraform(this._vnicIpDeleteInterval),
      vnic_probe_interval: cdktf.stringToTerraform(this._vnicProbeInterval),
      vnic_rpc_retry_interval: cdktf.stringToTerraform(this._vnicRpcRetryInterval),
      vnicdb_cmd_history_size: cdktf.stringToTerraform(this._vnicdbCmdHistorySize),
      vs_host_redundancy: cdktf.stringToTerraform(this._vsHostRedundancy),
      vs_scalein_timeout: cdktf.stringToTerraform(this._vsScaleinTimeout),
      vs_scalein_timeout_for_upgrade: cdktf.stringToTerraform(this._vsScaleinTimeoutForUpgrade),
      vs_scaleout_timeout: cdktf.stringToTerraform(this._vsScaleoutTimeout),
      vs_se_primary_switchover_additional_wait_time: cdktf.stringToTerraform(this._vsSePrimarySwitchoverAdditionalWaitTime),
      vs_se_scalein_additional_wait_time: cdktf.stringToTerraform(this._vsSeScaleinAdditionalWaitTime),
      vs_se_scaleout_additional_wait_time: cdktf.stringToTerraform(this._vsSeScaleoutAdditionalWaitTime),
      vs_se_scaleout_ready_timeout: cdktf.stringToTerraform(this._vsSeScaleoutReadyTimeout),
      vs_switchover_timeout: cdktf.stringToTerraform(this._vsSwitchoverTimeout),
      vss_placement_enabled: cdktf.stringToTerraform(this._vssPlacementEnabled),
      waf_mempool: cdktf.stringToTerraform(this._wafMempool),
      waf_mempool_size: cdktf.stringToTerraform(this._wafMempoolSize),
      configpb_attributes: cdktf.listMapper(serviceenginegroupConfigpbAttributesToTerraform, true)(this._configpbAttributes.internalValue),
      custom_tag: cdktf.listMapper(serviceenginegroupCustomTagToTerraform, true)(this._customTag.internalValue),
      gcp_config: cdktf.listMapper(serviceenginegroupGcpConfigToTerraform, true)(this._gcpConfig.internalValue),
      instance_flavor_info: cdktf.listMapper(serviceenginegroupInstanceFlavorInfoToTerraform, true)(this._instanceFlavorInfo.internalValue),
      iptables: cdktf.listMapper(serviceenginegroupIptablesToTerraform, true)(this._iptables.internalValue),
      kni_allowed_server_ports: cdktf.listMapper(serviceenginegroupKniAllowedServerPortsToTerraform, true)(this._kniAllowedServerPorts.internalValue),
      labels: cdktf.listMapper(serviceenginegroupLabelsToTerraform, true)(this._labels.internalValue),
      markers: cdktf.listMapper(serviceenginegroupMarkersToTerraform, true)(this._markers.internalValue),
      mgmt_subnet: cdktf.listMapper(serviceenginegroupMgmtSubnetToTerraform, true)(this._mgmtSubnet.internalValue),
      objsync_config: cdktf.listMapper(serviceenginegroupObjsyncConfigToTerraform, true)(this._objsyncConfig.internalValue),
      realtime_se_metrics: cdktf.listMapper(serviceenginegroupRealtimeSeMetricsToTerraform, true)(this._realtimeSeMetrics.internalValue),
      se_dos_profile: cdktf.listMapper(serviceenginegroupSeDosProfileToTerraform, true)(this._seDosProfile.internalValue),
      se_group_analytics_policy: cdktf.listMapper(serviceenginegroupSeGroupAnalyticsPolicyToTerraform, true)(this._seGroupAnalyticsPolicy.internalValue),
      se_rl_prop: cdktf.listMapper(serviceenginegroupSeRlPropToTerraform, true)(this._seRlProp.internalValue),
      se_time_tracker_props: cdktf.listMapper(serviceenginegroupSeTimeTrackerPropsToTerraform, true)(this._seTimeTrackerProps.internalValue),
      se_tracert_port_range: cdktf.listMapper(serviceenginegroupSeTracertPortRangeToTerraform, true)(this._seTracertPortRange.internalValue),
      service_ip6_subnets: cdktf.listMapper(serviceenginegroupServiceIp6SubnetsToTerraform, true)(this._serviceIp6Subnets.internalValue),
      service_ip_subnets: cdktf.listMapper(serviceenginegroupServiceIpSubnetsToTerraform, true)(this._serviceIpSubnets.internalValue),
      user_agent_cache_config: cdktf.listMapper(serviceenginegroupUserAgentCacheConfigToTerraform, true)(this._userAgentCacheConfig.internalValue),
      vcenter_clusters: cdktf.listMapper(serviceenginegroupVcenterClustersToTerraform, true)(this._vcenterClusters.internalValue),
      vcenter_datastores: cdktf.listMapper(serviceenginegroupVcenterDatastoresToTerraform, true)(this._vcenterDatastores.internalValue),
      vcenter_hosts: cdktf.listMapper(serviceenginegroupVcenterHostsToTerraform, true)(this._vcenterHosts.internalValue),
      vcenters: cdktf.listMapper(serviceenginegroupVcentersToTerraform, true)(this._vcenters.internalValue),
      vip_asg: cdktf.listMapper(serviceenginegroupVipAsgToTerraform, true)(this._vipAsg.internalValue),
      vss_placement: cdktf.listMapper(serviceenginegroupVssPlacementToTerraform, true)(this._vssPlacement.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      accelerated_networking: {
        value: cdktf.stringToHclTerraform(this._acceleratedNetworking),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      active_standby: {
        value: cdktf.stringToHclTerraform(this._activeStandby),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aggressive_failure_detection: {
        value: cdktf.stringToHclTerraform(this._aggressiveFailureDetection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      algo: {
        value: cdktf.stringToHclTerraform(this._algo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allow_burst: {
        value: cdktf.stringToHclTerraform(this._allowBurst),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      app_cache_percent: {
        value: cdktf.stringToHclTerraform(this._appCachePercent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      app_cache_threshold: {
        value: cdktf.stringToHclTerraform(this._appCacheThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      app_learning_memory_percent: {
        value: cdktf.stringToHclTerraform(this._appLearningMemoryPercent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      archive_shm_limit: {
        value: cdktf.stringToHclTerraform(this._archiveShmLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      async_ssl: {
        value: cdktf.stringToHclTerraform(this._asyncSsl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      async_ssl_threads: {
        value: cdktf.stringToHclTerraform(this._asyncSslThreads),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_rebalance: {
        value: cdktf.stringToHclTerraform(this._autoRebalance),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_rebalance_capacity_per_se: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._autoRebalanceCapacityPerSe),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      auto_rebalance_criteria: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._autoRebalanceCriteria),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      auto_rebalance_interval: {
        value: cdktf.stringToHclTerraform(this._autoRebalanceInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_redistribute_active_standby_load: {
        value: cdktf.stringToHclTerraform(this._autoRedistributeActiveStandbyLoad),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      availability_zone_refs: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._availabilityZoneRefs),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      baremetal_dispatcher_handles_flows: {
        value: cdktf.stringToHclTerraform(this._baremetalDispatcherHandlesFlows),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bgp_peer_monitor_failover_enabled: {
        value: cdktf.stringToHclTerraform(this._bgpPeerMonitorFailoverEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bgp_state_update_interval: {
        value: cdktf.stringToHclTerraform(this._bgpStateUpdateInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      buffer_se: {
        value: cdktf.stringToHclTerraform(this._bufferSe),
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
      compress_ip_rules_for_each_ns_subnet: {
        value: cdktf.stringToHclTerraform(this._compressIpRulesForEachNsSubnet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config_debugs_on_all_cores: {
        value: cdktf.stringToHclTerraform(this._configDebugsOnAllCores),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connection_memory_percentage: {
        value: cdktf.stringToHclTerraform(this._connectionMemoryPercentage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      core_shm_app_cache: {
        value: cdktf.stringToHclTerraform(this._coreShmAppCache),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      core_shm_app_learning: {
        value: cdktf.stringToHclTerraform(this._coreShmAppLearning),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cpu_reserve: {
        value: cdktf.stringToHclTerraform(this._cpuReserve),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cpu_socket_affinity: {
        value: cdktf.stringToHclTerraform(this._cpuSocketAffinity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_securitygroups_data: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._customSecuritygroupsData),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      custom_securitygroups_mgmt: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._customSecuritygroupsMgmt),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      data_network_id: {
        value: cdktf.stringToHclTerraform(this._dataNetworkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      datascript_timeout: {
        value: cdktf.stringToHclTerraform(this._datascriptTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deactivate_ipv6_discovery: {
        value: cdktf.stringToHclTerraform(this._deactivateIpv6Discovery),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deactivate_kni_filtering_at_dispatcher: {
        value: cdktf.stringToHclTerraform(this._deactivateKniFilteringAtDispatcher),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dedicated_dispatcher_core: {
        value: cdktf.stringToHclTerraform(this._dedicatedDispatcherCore),
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
      disable_avi_securitygroups: {
        value: cdktf.stringToHclTerraform(this._disableAviSecuritygroups),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable_csum_offloads: {
        value: cdktf.stringToHclTerraform(this._disableCsumOffloads),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable_flow_probes: {
        value: cdktf.stringToHclTerraform(this._disableFlowProbes),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable_gro: {
        value: cdktf.stringToHclTerraform(this._disableGro),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable_se_memory_check: {
        value: cdktf.stringToHclTerraform(this._disableSeMemoryCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable_tso: {
        value: cdktf.stringToHclTerraform(this._disableTso),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disk_per_se: {
        value: cdktf.stringToHclTerraform(this._diskPerSe),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      distribute_load_active_standby: {
        value: cdktf.stringToHclTerraform(this._distributeLoadActiveStandby),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      distribute_queues: {
        value: cdktf.stringToHclTerraform(this._distributeQueues),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      distribute_vnics: {
        value: cdktf.stringToHclTerraform(this._distributeVnics),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      downstream_send_timeout: {
        value: cdktf.stringToHclTerraform(this._downstreamSendTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dp_aggressive_deq_interval_msec: {
        value: cdktf.stringToHclTerraform(this._dpAggressiveDeqIntervalMsec),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dp_aggressive_enq_interval_msec: {
        value: cdktf.stringToHclTerraform(this._dpAggressiveEnqIntervalMsec),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dp_aggressive_hb_frequency: {
        value: cdktf.stringToHclTerraform(this._dpAggressiveHbFrequency),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dp_aggressive_hb_timeout_count: {
        value: cdktf.stringToHclTerraform(this._dpAggressiveHbTimeoutCount),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dp_deq_interval_msec: {
        value: cdktf.stringToHclTerraform(this._dpDeqIntervalMsec),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dp_enq_interval_msec: {
        value: cdktf.stringToHclTerraform(this._dpEnqIntervalMsec),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dp_hb_frequency: {
        value: cdktf.stringToHclTerraform(this._dpHbFrequency),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dp_hb_timeout_count: {
        value: cdktf.stringToHclTerraform(this._dpHbTimeoutCount),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dpdk_gro_timeout_interval: {
        value: cdktf.stringToHclTerraform(this._dpdkGroTimeoutInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_gratarp_permanent: {
        value: cdktf.stringToHclTerraform(this._enableGratarpPermanent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_hsm_log: {
        value: cdktf.stringToHclTerraform(this._enableHsmLog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_hsm_priming: {
        value: cdktf.stringToHclTerraform(this._enableHsmPriming),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_multi_lb: {
        value: cdktf.stringToHclTerraform(this._enableMultiLb),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_pcap_tx_ring: {
        value: cdktf.stringToHclTerraform(this._enablePcapTxRing),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ephemeral_portrange_end: {
        value: cdktf.stringToHclTerraform(this._ephemeralPortrangeEnd),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ephemeral_portrange_start: {
        value: cdktf.stringToHclTerraform(this._ephemeralPortrangeStart),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      extra_config_multiplier: {
        value: cdktf.stringToHclTerraform(this._extraConfigMultiplier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      extra_shared_config_memory: {
        value: cdktf.stringToHclTerraform(this._extraSharedConfigMemory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      flow_table_new_syn_max_entries: {
        value: cdktf.stringToHclTerraform(this._flowTableNewSynMaxEntries),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      free_list_size: {
        value: cdktf.stringToHclTerraform(this._freeListSize),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gratarp_permanent_periodicity: {
        value: cdktf.stringToHclTerraform(this._gratarpPermanentPeriodicity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      grpc_channel_connect_timeout: {
        value: cdktf.stringToHclTerraform(this._grpcChannelConnectTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gve_enabled: {
        value: cdktf.stringToHclTerraform(this._gveEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ha_mode: {
        value: cdktf.stringToHclTerraform(this._haMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      handle_per_pkt_attack: {
        value: cdktf.stringToHclTerraform(this._handlePerPktAttack),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hardwaresecuritymodulegroup_ref: {
        value: cdktf.stringToHclTerraform(this._hardwaresecuritymodulegroupRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      heap_minimum_config_memory: {
        value: cdktf.stringToHclTerraform(this._heapMinimumConfigMemory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hm_on_standby: {
        value: cdktf.stringToHclTerraform(this._hmOnStandby),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host_attribute_key: {
        value: cdktf.stringToHclTerraform(this._hostAttributeKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host_attribute_value: {
        value: cdktf.stringToHclTerraform(this._hostAttributeValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host_gateway_monitor: {
        value: cdktf.stringToHclTerraform(this._hostGatewayMonitor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_rum_console_log: {
        value: cdktf.stringToHclTerraform(this._httpRumConsoleLog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_rum_min_content_length: {
        value: cdktf.stringToHclTerraform(this._httpRumMinContentLength),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hybrid_rss_mode: {
        value: cdktf.stringToHclTerraform(this._hybridRssMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hypervisor: {
        value: cdktf.stringToHclTerraform(this._hypervisor),
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
      ignore_docker_mac_change: {
        value: cdktf.stringToHclTerraform(this._ignoreDockerMacChange),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ignore_rtt_threshold: {
        value: cdktf.stringToHclTerraform(this._ignoreRttThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ingress_access_data: {
        value: cdktf.stringToHclTerraform(this._ingressAccessData),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ingress_access_mgmt: {
        value: cdktf.stringToHclTerraform(this._ingressAccessMgmt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_flavor: {
        value: cdktf.stringToHclTerraform(this._instanceFlavor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      l7_conns_per_core: {
        value: cdktf.stringToHclTerraform(this._l7ConnsPerCore),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      l7_resvd_listen_conns_per_core: {
        value: cdktf.stringToHclTerraform(this._l7ResvdListenConnsPerCore),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lbaction_num_requests_to_dispatch: {
        value: cdktf.stringToHclTerraform(this._lbactionNumRequestsToDispatch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lbaction_rq_per_request_max_retries: {
        value: cdktf.stringToHclTerraform(this._lbactionRqPerRequestMaxRetries),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      least_load_core_selection: {
        value: cdktf.stringToHclTerraform(this._leastLoadCoreSelection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      license_tier: {
        value: cdktf.stringToHclTerraform(this._licenseTier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      license_type: {
        value: cdktf.stringToHclTerraform(this._licenseType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_agent_compress_logs: {
        value: cdktf.stringToHclTerraform(this._logAgentCompressLogs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_agent_debug_enabled: {
        value: cdktf.stringToHclTerraform(this._logAgentDebugEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_agent_file_sz_appl: {
        value: cdktf.stringToHclTerraform(this._logAgentFileSzAppl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_agent_file_sz_conn: {
        value: cdktf.stringToHclTerraform(this._logAgentFileSzConn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_agent_file_sz_debug: {
        value: cdktf.stringToHclTerraform(this._logAgentFileSzDebug),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_agent_file_sz_event: {
        value: cdktf.stringToHclTerraform(this._logAgentFileSzEvent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_agent_log_storage_min_sz: {
        value: cdktf.stringToHclTerraform(this._logAgentLogStorageMinSz),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_agent_max_concurrent_rsync: {
        value: cdktf.stringToHclTerraform(this._logAgentMaxConcurrentRsync),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_agent_max_storage_excess_percent: {
        value: cdktf.stringToHclTerraform(this._logAgentMaxStorageExcessPercent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_agent_max_storage_ignore_percent: {
        value: cdktf.stringToHclTerraform(this._logAgentMaxStorageIgnorePercent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_agent_min_storage_per_vs: {
        value: cdktf.stringToHclTerraform(this._logAgentMinStoragePerVs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_agent_sleep_interval: {
        value: cdktf.stringToHclTerraform(this._logAgentSleepInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_agent_trace_enabled: {
        value: cdktf.stringToHclTerraform(this._logAgentTraceEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_agent_unknown_vs_timer: {
        value: cdktf.stringToHclTerraform(this._logAgentUnknownVsTimer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_disksz: {
        value: cdktf.stringToHclTerraform(this._logDisksz),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_malloc_failure: {
        value: cdktf.stringToHclTerraform(this._logMallocFailure),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_message_max_file_list_size: {
        value: cdktf.stringToHclTerraform(this._logMessageMaxFileListSize),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_concurrent_external_hm: {
        value: cdktf.stringToHclTerraform(this._maxConcurrentExternalHm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_cpu_usage: {
        value: cdktf.stringToHclTerraform(this._maxCpuUsage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_memory_per_mempool: {
        value: cdktf.stringToHclTerraform(this._maxMemoryPerMempool),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_num_http_sessions_to_store: {
        value: cdktf.stringToHclTerraform(this._maxNumHttpSessionsToStore),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_num_se_dps: {
        value: cdktf.stringToHclTerraform(this._maxNumSeDps),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_public_ips_per_lb: {
        value: cdktf.stringToHclTerraform(this._maxPublicIpsPerLb),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_queues_per_vnic: {
        value: cdktf.stringToHclTerraform(this._maxQueuesPerVnic),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_rules_per_lb: {
        value: cdktf.stringToHclTerraform(this._maxRulesPerLb),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_scaleout_per_vs: {
        value: cdktf.stringToHclTerraform(this._maxScaleoutPerVs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_se: {
        value: cdktf.stringToHclTerraform(this._maxSe),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_skb_frags: {
        value: cdktf.stringToHclTerraform(this._maxSkbFrags),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_vs_per_se: {
        value: cdktf.stringToHclTerraform(this._maxVsPerSe),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mem_reserve: {
        value: cdktf.stringToHclTerraform(this._memReserve),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      memory_for_config_update: {
        value: cdktf.stringToHclTerraform(this._memoryForConfigUpdate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      memory_per_se: {
        value: cdktf.stringToHclTerraform(this._memoryPerSe),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metrics_collection_mode: {
        value: cdktf.stringToHclTerraform(this._metricsCollectionMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mgmt_network_ref: {
        value: cdktf.stringToHclTerraform(this._mgmtNetworkRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      min_cpu_usage: {
        value: cdktf.stringToHclTerraform(this._minCpuUsage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      min_scaleout_per_vs: {
        value: cdktf.stringToHclTerraform(this._minScaleoutPerVs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      min_se: {
        value: cdktf.stringToHclTerraform(this._minSe),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      minimum_connection_memory: {
        value: cdktf.stringToHclTerraform(this._minimumConnectionMemory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      multicast_enable: {
        value: cdktf.stringToHclTerraform(this._multicastEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      n_log_streaming_threads: {
        value: cdktf.stringToHclTerraform(this._nLogStreamingThreads),
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
      netlink_poller_threads: {
        value: cdktf.stringToHclTerraform(this._netlinkPollerThreads),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      netlink_sock_buf_size: {
        value: cdktf.stringToHclTerraform(this._netlinkSockBufSize),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ngx_free_connection_stack: {
        value: cdktf.stringToHclTerraform(this._ngxFreeConnectionStack),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      non_significant_log_throttle: {
        value: cdktf.stringToHclTerraform(this._nonSignificantLogThrottle),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ns_helper_deq_interval_msec: {
        value: cdktf.stringToHclTerraform(this._nsHelperDeqIntervalMsec),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ntp_sync_fail_event: {
        value: cdktf.stringToHclTerraform(this._ntpSyncFailEvent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ntp_sync_status_interval: {
        value: cdktf.stringToHclTerraform(this._ntpSyncStatusInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      num_dispatcher_cores: {
        value: cdktf.stringToHclTerraform(this._numDispatcherCores),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      num_dispatcher_queues: {
        value: cdktf.stringToHclTerraform(this._numDispatcherQueues),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      num_flow_cores_sum_changes_to_ignore: {
        value: cdktf.stringToHclTerraform(this._numFlowCoresSumChangesToIgnore),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      objsync_port: {
        value: cdktf.stringToHclTerraform(this._objsyncPort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      openstack_availability_zones: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._openstackAvailabilityZones),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      openstack_mgmt_network_name: {
        value: cdktf.stringToHclTerraform(this._openstackMgmtNetworkName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      openstack_mgmt_network_uuid: {
        value: cdktf.stringToHclTerraform(this._openstackMgmtNetworkUuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      os_reserved_memory: {
        value: cdktf.stringToHclTerraform(this._osReservedMemory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      path_mtu_discovery_v4: {
        value: cdktf.stringToHclTerraform(this._pathMtuDiscoveryV4),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      path_mtu_discovery_v6: {
        value: cdktf.stringToHclTerraform(this._pathMtuDiscoveryV6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pcap_tx_mode: {
        value: cdktf.stringToHclTerraform(this._pcapTxMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pcap_tx_ring_rd_balancing_factor: {
        value: cdktf.stringToHclTerraform(this._pcapTxRingRdBalancingFactor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      per_app: {
        value: cdktf.stringToHclTerraform(this._perApp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      per_vs_admission_control: {
        value: cdktf.stringToHclTerraform(this._perVsAdmissionControl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      placement_mode: {
        value: cdktf.stringToHclTerraform(this._placementMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reboot_on_panic: {
        value: cdktf.stringToHclTerraform(this._rebootOnPanic),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      replay_vrf_routes_interval: {
        value: cdktf.stringToHclTerraform(this._replayVrfRoutesInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resync_time_interval: {
        value: cdktf.stringToHclTerraform(this._resyncTimeInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sdb_flush_interval: {
        value: cdktf.stringToHclTerraform(this._sdbFlushInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sdb_key_timeout: {
        value: cdktf.stringToHclTerraform(this._sdbKeyTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sdb_pipeline_size: {
        value: cdktf.stringToHclTerraform(this._sdbPipelineSize),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sdb_scan_count: {
        value: cdktf.stringToHclTerraform(this._sdbScanCount),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      se_bandwidth_type: {
        value: cdktf.stringToHclTerraform(this._seBandwidthType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      se_debug_trace_sz: {
        value: cdktf.stringToHclTerraform(this._seDebugTraceSz),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      se_delayed_flow_delete: {
        value: cdktf.stringToHclTerraform(this._seDelayedFlowDelete),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      se_deprovision_delay: {
        value: cdktf.stringToHclTerraform(this._seDeprovisionDelay),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      se_dp_hm_drops: {
        value: cdktf.stringToHclTerraform(this._seDpHmDrops),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      se_dp_if_state_poll_interval: {
        value: cdktf.stringToHclTerraform(this._seDpIfStatePollInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      se_dp_isolation: {
        value: cdktf.stringToHclTerraform(this._seDpIsolation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      se_dp_isolation_num_non_dp_cpus: {
        value: cdktf.stringToHclTerraform(this._seDpIsolationNumNonDpCpus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      se_dp_log_nf_enqueue_percent: {
        value: cdktf.stringToHclTerraform(this._seDpLogNfEnqueuePercent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      se_dp_log_udf_enqueue_percent: {
        value: cdktf.stringToHclTerraform(this._seDpLogUdfEnqueuePercent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      se_dp_max_hb_version: {
        value: cdktf.stringToHclTerraform(this._seDpMaxHbVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      se_dp_vnic_queue_stall_event_sleep: {
        value: cdktf.stringToHclTerraform(this._seDpVnicQueueStallEventSleep),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      se_dp_vnic_queue_stall_threshold: {
        value: cdktf.stringToHclTerraform(this._seDpVnicQueueStallThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      se_dp_vnic_queue_stall_timeout: {
        value: cdktf.stringToHclTerraform(this._seDpVnicQueueStallTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      se_dp_vnic_restart_on_queue_stall_count: {
        value: cdktf.stringToHclTerraform(this._seDpVnicRestartOnQueueStallCount),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      se_dp_vnic_stall_se_restart_window: {
        value: cdktf.stringToHclTerraform(this._seDpVnicStallSeRestartWindow),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      se_dpdk_pmd: {
        value: cdktf.stringToHclTerraform(this._seDpdkPmd),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      se_dump_core_on_assert: {
        value: cdktf.stringToHclTerraform(this._seDumpCoreOnAssert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      se_emulated_cores: {
        value: cdktf.stringToHclTerraform(this._seEmulatedCores),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      se_flow_probe_retries: {
        value: cdktf.stringToHclTerraform(this._seFlowProbeRetries),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      se_flow_probe_retry_timer: {
        value: cdktf.stringToHclTerraform(this._seFlowProbeRetryTimer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      se_hyperthreaded_mode: {
        value: cdktf.stringToHclTerraform(this._seHyperthreadedMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      se_ip_encap_ipc: {
        value: cdktf.stringToHclTerraform(this._seIpEncapIpc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      se_kni_burst_factor: {
        value: cdktf.stringToHclTerraform(this._seKniBurstFactor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      se_l3_encap_ipc: {
        value: cdktf.stringToHclTerraform(this._seL3EncapIpc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      se_log_buffer_app_blocking_dequeue: {
        value: cdktf.stringToHclTerraform(this._seLogBufferAppBlockingDequeue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      se_log_buffer_conn_blocking_dequeue: {
        value: cdktf.stringToHclTerraform(this._seLogBufferConnBlockingDequeue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      se_log_buffer_events_blocking_dequeue: {
        value: cdktf.stringToHclTerraform(this._seLogBufferEventsBlockingDequeue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      se_lro: {
        value: cdktf.stringToHclTerraform(this._seLro),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      se_mp_ring_retry_count: {
        value: cdktf.stringToHclTerraform(this._seMpRingRetryCount),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      se_mtu: {
        value: cdktf.stringToHclTerraform(this._seMtu),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      se_name_prefix: {
        value: cdktf.stringToHclTerraform(this._seNamePrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      se_packet_buffer_max: {
        value: cdktf.stringToHclTerraform(this._sePacketBufferMax),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      se_pcap_lookahead: {
        value: cdktf.stringToHclTerraform(this._sePcapLookahead),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      se_pcap_pkt_count: {
        value: cdktf.stringToHclTerraform(this._sePcapPktCount),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      se_pcap_pkt_sz: {
        value: cdktf.stringToHclTerraform(this._sePcapPktSz),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      se_pcap_qdisc_bypass: {
        value: cdktf.stringToHclTerraform(this._sePcapQdiscBypass),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      se_pcap_reinit_frequency: {
        value: cdktf.stringToHclTerraform(this._sePcapReinitFrequency),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      se_pcap_reinit_threshold: {
        value: cdktf.stringToHclTerraform(this._sePcapReinitThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      se_probe_port: {
        value: cdktf.stringToHclTerraform(this._seProbePort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      se_rum_sampling_nav_interval: {
        value: cdktf.stringToHclTerraform(this._seRumSamplingNavInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      se_rum_sampling_nav_percent: {
        value: cdktf.stringToHclTerraform(this._seRumSamplingNavPercent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      se_rum_sampling_res_interval: {
        value: cdktf.stringToHclTerraform(this._seRumSamplingResInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      se_rum_sampling_res_percent: {
        value: cdktf.stringToHclTerraform(this._seRumSamplingResPercent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      se_sb_dedicated_core: {
        value: cdktf.stringToHclTerraform(this._seSbDedicatedCore),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      se_sb_threads: {
        value: cdktf.stringToHclTerraform(this._seSbThreads),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      se_thread_multiplier: {
        value: cdktf.stringToHclTerraform(this._seThreadMultiplier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      se_tunnel_mode: {
        value: cdktf.stringToHclTerraform(this._seTunnelMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      se_tunnel_udp_port: {
        value: cdktf.stringToHclTerraform(this._seTunnelUdpPort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      se_tx_batch_size: {
        value: cdktf.stringToHclTerraform(this._seTxBatchSize),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      se_txq_threshold: {
        value: cdktf.stringToHclTerraform(this._seTxqThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      se_udp_encap_ipc: {
        value: cdktf.stringToHclTerraform(this._seUdpEncapIpc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      se_use_dpdk: {
        value: cdktf.stringToHclTerraform(this._seUseDpdk),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      se_vnic_tx_sw_queue_flush_frequency: {
        value: cdktf.stringToHclTerraform(this._seVnicTxSwQueueFlushFrequency),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      se_vnic_tx_sw_queue_size: {
        value: cdktf.stringToHclTerraform(this._seVnicTxSwQueueSize),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      se_vs_hb_max_pkts_in_batch: {
        value: cdktf.stringToHclTerraform(this._seVsHbMaxPktsInBatch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      se_vs_hb_max_vs_in_pkt: {
        value: cdktf.stringToHclTerraform(this._seVsHbMaxVsInPkt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      self_se_election: {
        value: cdktf.stringToHclTerraform(this._selfSeElection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      send_se_ready_timeout: {
        value: cdktf.stringToHclTerraform(this._sendSeReadyTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shm_minimum_config_memory: {
        value: cdktf.stringToHclTerraform(this._shmMinimumConfigMemory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      significant_log_throttle: {
        value: cdktf.stringToHclTerraform(this._significantLogThrottle),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_preprocess_sni_hostname: {
        value: cdktf.stringToHclTerraform(this._sslPreprocessSniHostname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_sess_cache_per_vs: {
        value: cdktf.stringToHclTerraform(this._sslSessCachePerVs),
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
      transient_shared_memory_max: {
        value: cdktf.stringToHclTerraform(this._transientSharedMemoryMax),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      udf_log_throttle: {
        value: cdktf.stringToHclTerraform(this._udfLogThrottle),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      upstream_connect_timeout: {
        value: cdktf.stringToHclTerraform(this._upstreamConnectTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      upstream_connpool_enable: {
        value: cdktf.stringToHclTerraform(this._upstreamConnpoolEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      upstream_read_timeout: {
        value: cdktf.stringToHclTerraform(this._upstreamReadTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      upstream_send_timeout: {
        value: cdktf.stringToHclTerraform(this._upstreamSendTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_dp_util_for_scaleout: {
        value: cdktf.stringToHclTerraform(this._useDpUtilForScaleout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_hyperthreaded_cores: {
        value: cdktf.stringToHclTerraform(this._useHyperthreadedCores),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_legacy_netlink: {
        value: cdktf.stringToHclTerraform(this._useLegacyNetlink),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_objsync: {
        value: cdktf.stringToHclTerraform(this._useObjsync),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_standard_alb: {
        value: cdktf.stringToHclTerraform(this._useStandardAlb),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_defined_metric_age: {
        value: cdktf.stringToHclTerraform(this._userDefinedMetricAge),
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
      vcenter_datastore_mode: {
        value: cdktf.stringToHclTerraform(this._vcenterDatastoreMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vcenter_datastores_include: {
        value: cdktf.stringToHclTerraform(this._vcenterDatastoresInclude),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vcenter_folder: {
        value: cdktf.stringToHclTerraform(this._vcenterFolder),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vcenter_parking_vnic_pg: {
        value: cdktf.stringToHclTerraform(this._vcenterParkingVnicPg),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vcpus_per_se: {
        value: cdktf.stringToHclTerraform(this._vcpusPerSe),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vnic_dhcp_ip_check_interval: {
        value: cdktf.stringToHclTerraform(this._vnicDhcpIpCheckInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vnic_dhcp_ip_max_retries: {
        value: cdktf.stringToHclTerraform(this._vnicDhcpIpMaxRetries),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vnic_ip_delete_interval: {
        value: cdktf.stringToHclTerraform(this._vnicIpDeleteInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vnic_probe_interval: {
        value: cdktf.stringToHclTerraform(this._vnicProbeInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vnic_rpc_retry_interval: {
        value: cdktf.stringToHclTerraform(this._vnicRpcRetryInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vnicdb_cmd_history_size: {
        value: cdktf.stringToHclTerraform(this._vnicdbCmdHistorySize),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vs_host_redundancy: {
        value: cdktf.stringToHclTerraform(this._vsHostRedundancy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vs_scalein_timeout: {
        value: cdktf.stringToHclTerraform(this._vsScaleinTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vs_scalein_timeout_for_upgrade: {
        value: cdktf.stringToHclTerraform(this._vsScaleinTimeoutForUpgrade),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vs_scaleout_timeout: {
        value: cdktf.stringToHclTerraform(this._vsScaleoutTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vs_se_primary_switchover_additional_wait_time: {
        value: cdktf.stringToHclTerraform(this._vsSePrimarySwitchoverAdditionalWaitTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vs_se_scalein_additional_wait_time: {
        value: cdktf.stringToHclTerraform(this._vsSeScaleinAdditionalWaitTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vs_se_scaleout_additional_wait_time: {
        value: cdktf.stringToHclTerraform(this._vsSeScaleoutAdditionalWaitTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vs_se_scaleout_ready_timeout: {
        value: cdktf.stringToHclTerraform(this._vsSeScaleoutReadyTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vs_switchover_timeout: {
        value: cdktf.stringToHclTerraform(this._vsSwitchoverTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vss_placement_enabled: {
        value: cdktf.stringToHclTerraform(this._vssPlacementEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      waf_mempool: {
        value: cdktf.stringToHclTerraform(this._wafMempool),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      waf_mempool_size: {
        value: cdktf.stringToHclTerraform(this._wafMempoolSize),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      configpb_attributes: {
        value: cdktf.listMapperHcl(serviceenginegroupConfigpbAttributesToHclTerraform, true)(this._configpbAttributes.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ServiceenginegroupConfigpbAttributesList",
      },
      custom_tag: {
        value: cdktf.listMapperHcl(serviceenginegroupCustomTagToHclTerraform, true)(this._customTag.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceenginegroupCustomTagList",
      },
      gcp_config: {
        value: cdktf.listMapperHcl(serviceenginegroupGcpConfigToHclTerraform, true)(this._gcpConfig.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ServiceenginegroupGcpConfigList",
      },
      instance_flavor_info: {
        value: cdktf.listMapperHcl(serviceenginegroupInstanceFlavorInfoToHclTerraform, true)(this._instanceFlavorInfo.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ServiceenginegroupInstanceFlavorInfoList",
      },
      iptables: {
        value: cdktf.listMapperHcl(serviceenginegroupIptablesToHclTerraform, true)(this._iptables.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceenginegroupIptablesList",
      },
      kni_allowed_server_ports: {
        value: cdktf.listMapperHcl(serviceenginegroupKniAllowedServerPortsToHclTerraform, true)(this._kniAllowedServerPorts.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceenginegroupKniAllowedServerPortsList",
      },
      labels: {
        value: cdktf.listMapperHcl(serviceenginegroupLabelsToHclTerraform, true)(this._labels.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceenginegroupLabelsList",
      },
      markers: {
        value: cdktf.listMapperHcl(serviceenginegroupMarkersToHclTerraform, true)(this._markers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceenginegroupMarkersList",
      },
      mgmt_subnet: {
        value: cdktf.listMapperHcl(serviceenginegroupMgmtSubnetToHclTerraform, true)(this._mgmtSubnet.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ServiceenginegroupMgmtSubnetList",
      },
      objsync_config: {
        value: cdktf.listMapperHcl(serviceenginegroupObjsyncConfigToHclTerraform, true)(this._objsyncConfig.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ServiceenginegroupObjsyncConfigList",
      },
      realtime_se_metrics: {
        value: cdktf.listMapperHcl(serviceenginegroupRealtimeSeMetricsToHclTerraform, true)(this._realtimeSeMetrics.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ServiceenginegroupRealtimeSeMetricsList",
      },
      se_dos_profile: {
        value: cdktf.listMapperHcl(serviceenginegroupSeDosProfileToHclTerraform, true)(this._seDosProfile.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ServiceenginegroupSeDosProfileList",
      },
      se_group_analytics_policy: {
        value: cdktf.listMapperHcl(serviceenginegroupSeGroupAnalyticsPolicyToHclTerraform, true)(this._seGroupAnalyticsPolicy.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ServiceenginegroupSeGroupAnalyticsPolicyList",
      },
      se_rl_prop: {
        value: cdktf.listMapperHcl(serviceenginegroupSeRlPropToHclTerraform, true)(this._seRlProp.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ServiceenginegroupSeRlPropList",
      },
      se_time_tracker_props: {
        value: cdktf.listMapperHcl(serviceenginegroupSeTimeTrackerPropsToHclTerraform, true)(this._seTimeTrackerProps.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ServiceenginegroupSeTimeTrackerPropsList",
      },
      se_tracert_port_range: {
        value: cdktf.listMapperHcl(serviceenginegroupSeTracertPortRangeToHclTerraform, true)(this._seTracertPortRange.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ServiceenginegroupSeTracertPortRangeList",
      },
      service_ip6_subnets: {
        value: cdktf.listMapperHcl(serviceenginegroupServiceIp6SubnetsToHclTerraform, true)(this._serviceIp6Subnets.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceenginegroupServiceIp6SubnetsList",
      },
      service_ip_subnets: {
        value: cdktf.listMapperHcl(serviceenginegroupServiceIpSubnetsToHclTerraform, true)(this._serviceIpSubnets.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceenginegroupServiceIpSubnetsList",
      },
      user_agent_cache_config: {
        value: cdktf.listMapperHcl(serviceenginegroupUserAgentCacheConfigToHclTerraform, true)(this._userAgentCacheConfig.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ServiceenginegroupUserAgentCacheConfigList",
      },
      vcenter_clusters: {
        value: cdktf.listMapperHcl(serviceenginegroupVcenterClustersToHclTerraform, true)(this._vcenterClusters.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ServiceenginegroupVcenterClustersList",
      },
      vcenter_datastores: {
        value: cdktf.listMapperHcl(serviceenginegroupVcenterDatastoresToHclTerraform, true)(this._vcenterDatastores.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceenginegroupVcenterDatastoresList",
      },
      vcenter_hosts: {
        value: cdktf.listMapperHcl(serviceenginegroupVcenterHostsToHclTerraform, true)(this._vcenterHosts.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ServiceenginegroupVcenterHostsList",
      },
      vcenters: {
        value: cdktf.listMapperHcl(serviceenginegroupVcentersToHclTerraform, true)(this._vcenters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceenginegroupVcentersList",
      },
      vip_asg: {
        value: cdktf.listMapperHcl(serviceenginegroupVipAsgToHclTerraform, true)(this._vipAsg.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ServiceenginegroupVipAsgList",
      },
      vss_placement: {
        value: cdktf.listMapperHcl(serviceenginegroupVssPlacementToHclTerraform, true)(this._vssPlacement.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ServiceenginegroupVssPlacementList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
