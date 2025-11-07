// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SlbCommonConfig extends cdktf.TerraformMetaArguments {
  /**
  * aFleX table entry aging interval in second
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#aflex_table_entry_aging_interval SlbCommon#aflex_table_entry_aging_interval}
  */
  readonly aflexTableEntryAgingInterval?: number;
  /**
  * Graceful shutdown after disable server/port and/or virtual server/port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#after_disable SlbCommon#after_disable}
  */
  readonly afterDisable?: number;
  /**
  * Use source NAT gateway for L3 traffic for gateway mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#allow_in_gateway_mode SlbCommon#allow_in_gateway_mode}
  */
  readonly allowInGatewayMode?: number;
  /**
  * Custom response code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#attack_resp_code SlbCommon#attack_resp_code}
  */
  readonly attackRespCode?: number;
  /**
  * 'enable': enable; 'disable': disable;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#auto_nat_no_ip_refresh SlbCommon#auto_nat_no_ip_refresh}
  */
  readonly autoNatNoIpRefresh?: string;
  /**
  * Auto Translate Port range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#auto_translate_port SlbCommon#auto_translate_port}
  */
  readonly autoTranslatePort?: number;
  /**
  * Set buffer threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#buff_thresh SlbCommon#buff_thresh}
  */
  readonly buffThresh?: number;
  /**
  * Set hardware buffer threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#buff_thresh_hw_buff SlbCommon#buff_thresh_hw_buff}
  */
  readonly buffThreshHwBuff?: number;
  /**
  * Relieve threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#buff_thresh_relieve_thresh SlbCommon#buff_thresh_relieve_thresh}
  */
  readonly buffThreshRelieveThresh?: number;
  /**
  * Set high water mark of system buffer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#buff_thresh_sys_buff_high SlbCommon#buff_thresh_sys_buff_high}
  */
  readonly buffThreshSysBuffHigh?: number;
  /**
  * Set low water mark of system buffer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#buff_thresh_sys_buff_low SlbCommon#buff_thresh_sys_buff_low}
  */
  readonly buffThreshSysBuffLow?: number;
  /**
  * Cache expiration time, default is 1 minute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#cache_expire_time SlbCommon#cache_expire_time}
  */
  readonly cacheExpireTime?: number;
  /**
  * Set global cancel stream loop limit (cancel stream loop limit, default is 5)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#cancel_stream_loop_limit SlbCommon#cancel_stream_loop_limit}
  */
  readonly cancelStreamLoopLimit?: number;
  /**
  * Clientside IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#clientside_ip SlbCommon#clientside_ip}
  */
  readonly clientsideIp?: string;
  /**
  * Clientside IPv6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#clientside_ipv6 SlbCommon#clientside_ipv6}
  */
  readonly clientsideIpv6?: string;
  /**
  * Set compression block size (Compression block size in bytes)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#compress_block_size SlbCommon#compress_block_size}
  */
  readonly compressBlockSize?: number;
  /**
  * Block message
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#custom_message SlbCommon#custom_message}
  */
  readonly customMessage?: string;
  /**
  * Specify the custom webpage name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#custom_page SlbCommon#custom_page}
  */
  readonly customPage?: string;
  /**
  * Provide custom signal names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#custom_signal_clist SlbCommon#custom_signal_clist}
  */
  readonly customSignalClist?: string;
  /**
  * Set packet count threshold for DDOS, default is 100
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#ddos_pkt_count_thresh SlbCommon#ddos_pkt_count_thresh}
  */
  readonly ddosPktCountThresh?: number;
  /**
  * Set data packet size threshold for DDOS, default is 64 bytes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#ddos_pkt_size_thresh SlbCommon#ddos_pkt_size_thresh}
  */
  readonly ddosPktSizeThresh?: number;
  /**
  * Disable adaptive resource check based on buffer usage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#disable_adaptive_resource_check SlbCommon#disable_adaptive_resource_check}
  */
  readonly disableAdaptiveResourceCheck?: number;
  /**
  * Disable Persist Scoring
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#disable_persist_scoring SlbCommon#disable_persist_scoring}
  */
  readonly disablePersistScoring?: number;
  /**
  * Disable masking of ports for CPU hashing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#disable_port_masking SlbCommon#disable_port_masking}
  */
  readonly disablePortMasking?: number;
  /**
  * Disable auto reselection of server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#disable_server_auto_reselect SlbCommon#disable_server_auto_reselect}
  */
  readonly disableServerAutoReselect?: number;
  /**
  * Set DNS cache entry age, default is 300 seconds (1-1000000 seconds, default is 300 seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#dns_cache_age SlbCommon#dns_cache_age}
  */
  readonly dnsCacheAge?: number;
  /**
  * Set DNS cache entry age minimum threshold, default is 0 seconds (1-1000000 seconds, default is 0 seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#dns_cache_age_min_threshold SlbCommon#dns_cache_age_min_threshold}
  */
  readonly dnsCacheAgeMinThreshold?: number;
  /**
  * Set DNS cache entry weight, default is 1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#dns_cache_aging_weight SlbCommon#dns_cache_aging_weight}
  */
  readonly dnsCacheAgingWeight?: number;
  /**
  * Enable DNS cache
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#dns_cache_enable SlbCommon#dns_cache_enable}
  */
  readonly dnsCacheEnable?: number;
  /**
  * Set DNS cache entry size, default is 256 bytes (1-4096 bytes, default is 256 bytes)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#dns_cache_entry_size SlbCommon#dns_cache_entry_size}
  */
  readonly dnsCacheEntrySize?: number;
  /**
  * Enable DNS cache HA sync
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#dns_cache_sync SlbCommon#dns_cache_sync}
  */
  readonly dnsCacheSync?: number;
  /**
  * Only sync DNS cache with smaller size (1-4096 bytes, default is 256 bytes)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#dns_cache_sync_entry_size SlbCommon#dns_cache_sync_entry_size}
  */
  readonly dnsCacheSyncEntrySize?: number;
  /**
  * Only sync DNS cache with longer TTL (0-10000000 seconds, default is 0 second)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#dns_cache_sync_ttl_threshold SlbCommon#dns_cache_sync_ttl_threshold}
  */
  readonly dnsCacheSyncTtlThreshold?: number;
  /**
  * Enable DNS cache response ttl adjustment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#dns_cache_ttl_adjustment_enable SlbCommon#dns_cache_ttl_adjustment_enable}
  */
  readonly dnsCacheTtlAdjustmentEnable?: number;
  /**
  * Enable DNS negative cache
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#dns_negative_cache_enable SlbCommon#dns_negative_cache_enable}
  */
  readonly dnsNegativeCacheEnable?: number;
  /**
  * Enable persistent DNS cache
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#dns_persistent_cache_enable SlbCommon#dns_persistent_cache_enable}
  */
  readonly dnsPersistentCacheEnable?: number;
  /**
  * Only save DNS cache with larger hit count (0-10000000, default is 0)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#dns_persistent_cache_hit_threshold SlbCommon#dns_persistent_cache_hit_threshold}
  */
  readonly dnsPersistentCacheHitThreshold?: number;
  /**
  * Only save DNS cache with longer TTL (0-10000000 seconds, default is 0 second)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#dns_persistent_cache_ttl_threshold SlbCommon#dns_persistent_cache_ttl_threshold}
  */
  readonly dnsPersistentCacheTtlThreshold?: number;
  /**
  * Enable DNS VIP stateless mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#dns_vip_stateless SlbCommon#dns_vip_stateless}
  */
  readonly dnsVipStateless?: number;
  /**
  * Drop ICMP to VIP when VIP down
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#drop_icmp_to_vip_when_vip_down SlbCommon#drop_icmp_to_vip_when_vip_down}
  */
  readonly dropIcmpToVipWhenVipDown?: number;
  /**
  * Enable dsr-health-check (direct server return health check)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#dsr_health_check_enable SlbCommon#dsr_health_check_enable}
  */
  readonly dsrHealthCheckEnable?: number;
  /**
  * 'system-default': Use system default ecmp hashing algorithm; 'connection-based': Use connection information for hashing;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#ecmp_hash SlbCommon#ecmp_hash}
  */
  readonly ecmpHash?: string;
  /**
  * Enable DDoS protection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#enable_ddos SlbCommon#enable_ddos}
  */
  readonly enableDdos?: number;
  /**
  * Enable Fast-Path Rerouting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#enable_fast_path_rerouting SlbCommon#enable_fast_path_rerouting}
  */
  readonly enableFastPathRerouting?: number;
  /**
  * Enable L7 request accounting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#enable_l7_req_acct SlbCommon#enable_l7_req_acct}
  */
  readonly enableL7ReqAcct?: number;
  /**
  * 'server': Graceful shutdown server/port only; 'virtual-server': Graceful shutdown virtual server/port only;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#entity SlbCommon#entity}
  */
  readonly entity?: string;
  /**
  * 'local': Maximum local rate; 'remote': Maximum remote rate;  (Maximum rates)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#exclude_destination SlbCommon#exclude_destination}
  */
  readonly excludeDestination?: string;
  /**
  * Enable global slb extended statistics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#extended_stats SlbCommon#extended_stats}
  */
  readonly extendedStats?: number;
  /**
  * Disable fast path in SLB processing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#fast_path_disable SlbCommon#fast_path_disable}
  */
  readonly fastPathDisable?: number;
  /**
  * Enable gateway health check
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#gateway_health_check SlbCommon#gateway_health_check}
  */
  readonly gatewayHealthCheck?: number;
  /**
  * 1-65535, in unit of seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#graceful_shutdown SlbCommon#graceful_shutdown}
  */
  readonly gracefulShutdown?: number;
  /**
  * Enable graceful shutdown
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#graceful_shutdown_enable SlbCommon#graceful_shutdown_enable}
  */
  readonly gracefulShutdownEnable?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#health_check_to_all_vip SlbCommon#health_check_to_all_vip}
  */
  readonly healthCheckToAllVip?: number;
  /**
  * Honor the server reponse TTL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#honor_server_response_ttl SlbCommon#honor_server_response_ttl}
  */
  readonly honorServerResponseTtl?: number;
  /**
  * Enable Http Fast in SLB processing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#http_fast_enable SlbCommon#http_fast_enable}
  */
  readonly httpFastEnable?: number;
  /**
  * Use hardware compression
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#hw_compression SlbCommon#hw_compression}
  */
  readonly hwCompression?: number;
  /**
  * Configure hardware SYN round robin (range 1-500000)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#hw_syn_rr SlbCommon#hw_syn_rr}
  */
  readonly hwSynRr?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#id SlbCommon#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specify the healthcheck interval, default is 5 seconds (Interval Value, in seconds (default 5))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#interval SlbCommon#interval}
  */
  readonly interval?: number;
  /**
  * IPv4 Octet Offset for Hash
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#ipv4_offset SlbCommon#ipv4_offset}
  */
  readonly ipv4Offset?: number;
  /**
  * IPv6 Octet Valid Subnet Length for Hash
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#ipv6_subnet SlbCommon#ipv6_subnet}
  */
  readonly ipv6Subnet?: number;
  /**
  * Disable L2/L3 trunk LB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#l2l3_trunk_lb_disable SlbCommon#l2l3_trunk_lb_disable}
  */
  readonly l2L3TrunkLbDisable?: number;
  /**
  * Log when rate exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#log_for_reset_unknown_conn SlbCommon#log_for_reset_unknown_conn}
  */
  readonly logForResetUnknownConn?: number;
  /**
  * Enable low latency mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#low_latency SlbCommon#low_latency}
  */
  readonly lowLatency?: number;
  /**
  * Set per connection buffer threshold (Buffer value range 128-4096)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#max_buff_queued_per_conn SlbCommon#max_buff_queued_per_conn}
  */
  readonly maxBuffQueuedPerConn?: number;
  /**
  * Set maximum number of HTTP headers allowed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#max_http_header_count SlbCommon#max_http_header_count}
  */
  readonly maxHttpHeaderCount?: number;
  /**
  * Set maximum local rate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#max_local_rate SlbCommon#max_local_rate}
  */
  readonly maxLocalRate?: number;
  /**
  * Define maximum persistent cache (Maximum persistent cache entry)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#max_persistent_cache SlbCommon#max_persistent_cache}
  */
  readonly maxPersistentCache?: number;
  /**
  * Set maximum remote rate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#max_remote_rate SlbCommon#max_remote_rate}
  */
  readonly maxRemoteRate?: number;
  /**
  * Enable NG-WAF monitor mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#monitor_mode_enable SlbCommon#monitor_mode_enable}
  */
  readonly monitorModeEnable?: number;
  /**
  * Configure maximum session life, default is 2 seconds (1-39 seconds, default is 2 seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#msl_time SlbCommon#msl_time}
  */
  readonly mslTime?: number;
  /**
  * Set MSS table (128-750, default is 536)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#mss_table SlbCommon#mss_table}
  */
  readonly mssTable?: number;
  /**
  * Specific NGWAF CPU
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#multi_cpu SlbCommon#multi_cpu}
  */
  readonly multiCpu?: number;
  /**
  * HW assisted N5 SSL module with TLS 1.3 and TLS 1.2 support using OpenSSL 1.1.1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#n5_new SlbCommon#n5_new}
  */
  readonly n5New?: number;
  /**
  * HW assisted N5 SSL module with TLS 1.2 support using OpenSSL 0.9.7
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#n5_old SlbCommon#n5_old}
  */
  readonly n5Old?: number;
  /**
  * IPv4 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#ngwaf_proxy_ipv4 SlbCommon#ngwaf_proxy_ipv4}
  */
  readonly ngwafProxyIpv4?: string;
  /**
  * IPv6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#ngwaf_proxy_ipv6 SlbCommon#ngwaf_proxy_ipv6}
  */
  readonly ngwafProxyIpv6?: string;
  /**
  * Port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#ngwaf_proxy_port SlbCommon#ngwaf_proxy_port}
  */
  readonly ngwafProxyPort?: number;
  /**
  * Don't automatically mark vport up when aFleX is bound
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#no_auto_up_on_aflex SlbCommon#no_auto_up_on_aflex}
  */
  readonly noAutoUpOnAflex?: number;
  /**
  * Enable odd even nat pool allocation in dual blade systems
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#odd_even_nat_enable SlbCommon#odd_even_nat_enable}
  */
  readonly oddEvenNatEnable?: number;
  /**
  * One Server Conn Health Check Rate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#one_server_conn_hm_rate SlbCommon#one_server_conn_hm_rate}
  */
  readonly oneServerConnHmRate?: number;
  /**
  * Enable override port in DSR health check mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#override_port SlbCommon#override_port}
  */
  readonly overridePort?: number;
  /**
  * Set global pbslb entry age (minute)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#pbslb_entry_age SlbCommon#pbslb_entry_age}
  */
  readonly pbslbEntryAge?: number;
  /**
  * Apply global limit id to overflow pbslb entry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#pbslb_overflow_glid SlbCommon#pbslb_overflow_glid}
  */
  readonly pbslbOverflowGlid?: string;
  /**
  * Percentage of default session count to use for per thread session table size
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#per_thr_percent SlbCommon#per_thr_percent}
  */
  readonly perThrPercent?: number;
  /**
  * 'enable': Enable ping sweep detection; 'disable': Disable ping sweep detection(default);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#ping_sweep_detection SlbCommon#ping_sweep_detection}
  */
  readonly pingSweepDetection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#pkt_rate_for_reset_unknown_conn SlbCommon#pkt_rate_for_reset_unknown_conn}
  */
  readonly pktRateForResetUnknownConn?: number;
  /**
  * Enable the Player id check
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#player_id_check_enable SlbCommon#player_id_check_enable}
  */
  readonly playerIdCheckEnable?: number;
  /**
  * Serverside port number for SNI transmission
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#port SlbCommon#port}
  */
  readonly port?: number;
  /**
  * 'enable': Enable port scan detection; 'disable': Disable port scan detection(default);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#port_scan_detection SlbCommon#port_scan_detection}
  */
  readonly portScanDetection?: string;
  /**
  * Enable NG-WAF pre-processing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#pre_process_enable SlbCommon#pre_process_enable}
  */
  readonly preProcessEnable?: number;
  /**
  * HW assisted QAT SSL module
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#qat SlbCommon#qat}
  */
  readonly qat?: number;
  /**
  * auto translate port range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#range SlbCommon#range}
  */
  readonly range?: number;
  /**
  * port range end
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#range_end SlbCommon#range_end}
  */
  readonly rangeEnd?: number;
  /**
  * port range start
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#range_start SlbCommon#range_start}
  */
  readonly rangeStart?: number;
  /**
  * Configure rate limit logging
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#rate_limit_logging SlbCommon#rate_limit_logging}
  */
  readonly rateLimitLogging?: number;
  /**
  * 'honor-packet-ttl': Honor the lowest TTL among NS records in the server response; 'honor-age-config': Honor the ttl/age settings based on acos dns cache configuration;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#recursive_ns_cache SlbCommon#recursive_ns_cache}
  */
  readonly recursiveNsCache?: string;
  /**
  * Send reset if session in delete queue receives a SYN packet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#reset_stale_session SlbCommon#reset_stale_session}
  */
  readonly resetStaleSession?: number;
  /**
  * Enable client port service port conflicts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#resolve_port_conflict SlbCommon#resolve_port_conflict}
  */
  readonly resolvePortConflict?: number;
  /**
  * 'single-answer': Only cache DNS response with single answer; 'round-robin': Round robin;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#response_type SlbCommon#response_type}
  */
  readonly responseType?: string;
  /**
  * Enable SLB scale out
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#scale_out SlbCommon#scale_out}
  */
  readonly scaleOut?: number;
  /**
  * Set SLB scaleout traffic-map
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#scale_out_traffic_map SlbCommon#scale_out_traffic_map}
  */
  readonly scaleOutTrafficMap?: number;
  /**
  * Serverside IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#serverside_ip SlbCommon#serverside_ip}
  */
  readonly serversideIp?: string;
  /**
  * Serverside IPv6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#serverside_ipv6 SlbCommon#serverside_ipv6}
  */
  readonly serversideIpv6?: string;
  /**
  * 'allow-same': Allow the binding service-group on no-dest-nat virtual ports; 'enforce-different': Enforce that the same service-group can not be bound on different no-dest-nat virtual ports;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#service_group_on_no_dest_nat_vports SlbCommon#service_group_on_no_dest_nat_vports}
  */
  readonly serviceGroupOnNoDestNatVports?: string;
  /**
  * Enable show slb server legacy command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#show_slb_server_legacy_cmd SlbCommon#show_slb_server_legacy_cmd}
  */
  readonly showSlbServerLegacyCmd?: number;
  /**
  * Enable show slb service-group legacy command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#show_slb_service_group_legacy_cmd SlbCommon#show_slb_service_group_legacy_cmd}
  */
  readonly showSlbServiceGroupLegacyCmd?: number;
  /**
  * Enable show slb virtual-server legacy command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#show_slb_virtual_server_legacy_cmd SlbCommon#show_slb_virtual_server_legacy_cmd}
  */
  readonly showSlbVirtualServerLegacyCmd?: number;
  /**
  * Use source NAT gateway for L3 traffic for transparent mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#snat_gwy_for_l3 SlbCommon#snat_gwy_for_l3}
  */
  readonly snatGwyForL3?: number;
  /**
  * Enable source NAT traffic against VIP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#snat_on_vip SlbCommon#snat_on_vip}
  */
  readonly snatOnVip?: number;
  /**
  * Software
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#software SlbCommon#software}
  */
  readonly softwareAttribute?: number;
  /**
  * Software TLS1.3
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#software_tls13 SlbCommon#software_tls13}
  */
  readonly softwareTls13?: number;
  /**
  * Software TLS1.3 with CPU Offload Support
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#software_tls13_offload SlbCommon#software_tls13_offload}
  */
  readonly softwareTls13Offload?: number;
  /**
  * Enable SLB sorting of resource names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#sort_res SlbCommon#sort_res}
  */
  readonly sortRes?: number;
  /**
  * Enable SSL module usage calculations for QAT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#ssl_module_usage_enable SlbCommon#ssl_module_usage_enable}
  */
  readonly sslModuleUsageEnable?: number;
  /**
  * Enable delay transmission for N5-new
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#ssl_n5_delay_tx_enable SlbCommon#ssl_n5_delay_tx_enable}
  */
  readonly sslN5DelayTxEnable?: number;
  /**
  * SSLI asynchronized connection max number, default is 2000 (set to 0 for unlimited size)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#ssli_cert_not_ready_inspect_limit SlbCommon#ssli_cert_not_ready_inspect_limit}
  */
  readonly ssliCertNotReadyInspectLimit?: number;
  /**
  * SSLI asynchronized connection timeout, default is 10 seconds (seconds, set to 0 for never timeout)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#ssli_cert_not_ready_inspect_timeout SlbCommon#ssli_cert_not_ready_inspect_timeout}
  */
  readonly ssliCertNotReadyInspectTimeout?: number;
  /**
  * Terminate the SSLi sessions silently without sending RST/FIN packet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#ssli_silent_termination_enable SlbCommon#ssli_silent_termination_enable}
  */
  readonly ssliSilentTerminationEnable?: number;
  /**
  * Enable SSLi SNI hash table
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#ssli_sni_hash_enable SlbCommon#ssli_sni_hash_enable}
  */
  readonly ssliSniHashEnable?: number;
  /**
  * Enable stateless service groups to be assigned to multiple L2/L3 DSR VIPs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#stateless_sg_multi_binding SlbCommon#stateless_sg_multi_binding}
  */
  readonly statelessSgMultiBinding?: number;
  /**
  * Disable global slb data statistics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#stats_data_disable SlbCommon#stats_data_disable}
  */
  readonly statsDataDisable?: number;
  /**
  * Substitute Source MAC Address to that of the outgoing interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#substitute_source_mac SlbCommon#substitute_source_mac}
  */
  readonly substituteSourceMac?: number;
  /**
  * Specify the healthcheck timeout value, default is 15 seconds (Timeout Value, in seconds (default 15))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#timeout SlbCommon#timeout}
  */
  readonly timeout?: number;
  /**
  * 'vport': traffic-map per vport; 'global': global traffic-map;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#traffic_map_type SlbCommon#traffic_map_type}
  */
  readonly trafficMapType?: string;
  /**
  * Only cache DNS response with longer TTL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#ttl_threshold SlbCommon#ttl_threshold}
  */
  readonly ttlThreshold?: number;
  /**
  * Use default session count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#use_default_sess_count SlbCommon#use_default_sess_count}
  */
  readonly useDefaultSessCount?: number;
  /**
  * NG-WAF connects to Cloud through proxy server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#use_https_proxy SlbCommon#use_https_proxy}
  */
  readonly useHttpsProxy?: number;
  /**
  * Use management port to connect
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#use_mgmt_port SlbCommon#use_mgmt_port}
  */
  readonly useMgmtPort?: number;
  /**
  * Use MSS based on internal table for SLB processing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#use_mss_tab SlbCommon#use_mss_tab}
  */
  readonly useMssTab?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#uuid SlbCommon#uuid}
  */
  readonly uuid?: string;
  /**
  * Configure periodic showtech vport paging global limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#vport_global SlbCommon#vport_global}
  */
  readonly vportGlobal?: number;
  /**
  * Configure periodic showtech vport paging l3v limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#vport_l3v SlbCommon#vport_l3v}
  */
  readonly vportL3V?: number;
  /**
  * aflex_table_entry_sync block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#aflex_table_entry_sync SlbCommon#aflex_table_entry_sync}
  */
  readonly aflexTableEntrySync?: SlbCommonAflexTableEntrySync;
  /**
  * cert_pinning block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#cert_pinning SlbCommon#cert_pinning}
  */
  readonly certPinning?: SlbCommonCertPinning;
  /**
  * conn_rate_limit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#conn_rate_limit SlbCommon#conn_rate_limit}
  */
  readonly connRateLimit?: SlbCommonConnRateLimit;
  /**
  * ddos_protection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#ddos_protection SlbCommon#ddos_protection}
  */
  readonly ddosProtection?: SlbCommonDdosProtection;
  /**
  * dns_response_rate_limiting block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#dns_response_rate_limiting SlbCommon#dns_response_rate_limiting}
  */
  readonly dnsResponseRateLimiting?: SlbCommonDnsResponseRateLimiting;
  /**
  * quic block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#quic SlbCommon#quic}
  */
  readonly quic?: SlbCommonQuic;
  /**
  * snat_preserve block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#snat_preserve SlbCommon#snat_preserve}
  */
  readonly snatPreserve?: SlbCommonSnatPreserve;
  /**
  * ssl_ratelimit_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#ssl_ratelimit_cfg SlbCommon#ssl_ratelimit_cfg}
  */
  readonly sslRatelimitCfg?: SlbCommonSslRatelimitCfg;
}
export interface SlbCommonAflexTableEntrySync {
  /**
  * Enable aflex table sync
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#aflex_table_entry_sync_enable SlbCommon#aflex_table_entry_sync_enable}
  */
  readonly aflexTableEntrySyncEnable?: number;
  /**
  * aflex table entry max key length to sync
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#aflex_table_entry_sync_max_key_len SlbCommon#aflex_table_entry_sync_max_key_len}
  */
  readonly aflexTableEntrySyncMaxKeyLen?: number;
  /**
  * aflex table entry max value length to sync
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#aflex_table_entry_sync_max_value_len SlbCommon#aflex_table_entry_sync_max_value_len}
  */
  readonly aflexTableEntrySyncMaxValueLen?: number;
  /**
  * aflex table entry minimum lifetime to sync
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#aflex_table_entry_sync_min_lifetime SlbCommon#aflex_table_entry_sync_min_lifetime}
  */
  readonly aflexTableEntrySyncMinLifetime?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#uuid SlbCommon#uuid}
  */
  readonly uuid?: string;
}

export function slbCommonAflexTableEntrySyncToTerraform(struct?: SlbCommonAflexTableEntrySyncOutputReference | SlbCommonAflexTableEntrySync): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aflex_table_entry_sync_enable: cdktf.numberToTerraform(struct!.aflexTableEntrySyncEnable),
    aflex_table_entry_sync_max_key_len: cdktf.numberToTerraform(struct!.aflexTableEntrySyncMaxKeyLen),
    aflex_table_entry_sync_max_value_len: cdktf.numberToTerraform(struct!.aflexTableEntrySyncMaxValueLen),
    aflex_table_entry_sync_min_lifetime: cdktf.numberToTerraform(struct!.aflexTableEntrySyncMinLifetime),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function slbCommonAflexTableEntrySyncToHclTerraform(struct?: SlbCommonAflexTableEntrySyncOutputReference | SlbCommonAflexTableEntrySync): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aflex_table_entry_sync_enable: {
      value: cdktf.numberToHclTerraform(struct!.aflexTableEntrySyncEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    aflex_table_entry_sync_max_key_len: {
      value: cdktf.numberToHclTerraform(struct!.aflexTableEntrySyncMaxKeyLen),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    aflex_table_entry_sync_max_value_len: {
      value: cdktf.numberToHclTerraform(struct!.aflexTableEntrySyncMaxValueLen),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    aflex_table_entry_sync_min_lifetime: {
      value: cdktf.numberToHclTerraform(struct!.aflexTableEntrySyncMinLifetime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbCommonAflexTableEntrySyncOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SlbCommonAflexTableEntrySync | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aflexTableEntrySyncEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.aflexTableEntrySyncEnable = this._aflexTableEntrySyncEnable;
    }
    if (this._aflexTableEntrySyncMaxKeyLen !== undefined) {
      hasAnyValues = true;
      internalValueResult.aflexTableEntrySyncMaxKeyLen = this._aflexTableEntrySyncMaxKeyLen;
    }
    if (this._aflexTableEntrySyncMaxValueLen !== undefined) {
      hasAnyValues = true;
      internalValueResult.aflexTableEntrySyncMaxValueLen = this._aflexTableEntrySyncMaxValueLen;
    }
    if (this._aflexTableEntrySyncMinLifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.aflexTableEntrySyncMinLifetime = this._aflexTableEntrySyncMinLifetime;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbCommonAflexTableEntrySync | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aflexTableEntrySyncEnable = undefined;
      this._aflexTableEntrySyncMaxKeyLen = undefined;
      this._aflexTableEntrySyncMaxValueLen = undefined;
      this._aflexTableEntrySyncMinLifetime = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aflexTableEntrySyncEnable = value.aflexTableEntrySyncEnable;
      this._aflexTableEntrySyncMaxKeyLen = value.aflexTableEntrySyncMaxKeyLen;
      this._aflexTableEntrySyncMaxValueLen = value.aflexTableEntrySyncMaxValueLen;
      this._aflexTableEntrySyncMinLifetime = value.aflexTableEntrySyncMinLifetime;
      this._uuid = value.uuid;
    }
  }

  // aflex_table_entry_sync_enable - computed: false, optional: true, required: false
  private _aflexTableEntrySyncEnable?: number; 
  public get aflexTableEntrySyncEnable() {
    return this.getNumberAttribute('aflex_table_entry_sync_enable');
  }
  public set aflexTableEntrySyncEnable(value: number) {
    this._aflexTableEntrySyncEnable = value;
  }
  public resetAflexTableEntrySyncEnable() {
    this._aflexTableEntrySyncEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aflexTableEntrySyncEnableInput() {
    return this._aflexTableEntrySyncEnable;
  }

  // aflex_table_entry_sync_max_key_len - computed: false, optional: true, required: false
  private _aflexTableEntrySyncMaxKeyLen?: number; 
  public get aflexTableEntrySyncMaxKeyLen() {
    return this.getNumberAttribute('aflex_table_entry_sync_max_key_len');
  }
  public set aflexTableEntrySyncMaxKeyLen(value: number) {
    this._aflexTableEntrySyncMaxKeyLen = value;
  }
  public resetAflexTableEntrySyncMaxKeyLen() {
    this._aflexTableEntrySyncMaxKeyLen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aflexTableEntrySyncMaxKeyLenInput() {
    return this._aflexTableEntrySyncMaxKeyLen;
  }

  // aflex_table_entry_sync_max_value_len - computed: false, optional: true, required: false
  private _aflexTableEntrySyncMaxValueLen?: number; 
  public get aflexTableEntrySyncMaxValueLen() {
    return this.getNumberAttribute('aflex_table_entry_sync_max_value_len');
  }
  public set aflexTableEntrySyncMaxValueLen(value: number) {
    this._aflexTableEntrySyncMaxValueLen = value;
  }
  public resetAflexTableEntrySyncMaxValueLen() {
    this._aflexTableEntrySyncMaxValueLen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aflexTableEntrySyncMaxValueLenInput() {
    return this._aflexTableEntrySyncMaxValueLen;
  }

  // aflex_table_entry_sync_min_lifetime - computed: false, optional: true, required: false
  private _aflexTableEntrySyncMinLifetime?: number; 
  public get aflexTableEntrySyncMinLifetime() {
    return this.getNumberAttribute('aflex_table_entry_sync_min_lifetime');
  }
  public set aflexTableEntrySyncMinLifetime(value: number) {
    this._aflexTableEntrySyncMinLifetime = value;
  }
  public resetAflexTableEntrySyncMinLifetime() {
    this._aflexTableEntrySyncMinLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aflexTableEntrySyncMinLifetimeInput() {
    return this._aflexTableEntrySyncMinLifetime;
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
}
export interface SlbCommonCertPinningCandidateListFeedbackOptIn {
  /**
  * Every day
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#daily SlbCommon#daily}
  */
  readonly daily?: number;
  /**
  * Time of day to update (hh:mm) in 24 hour local time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#day_time SlbCommon#day_time}
  */
  readonly dayTime?: string;
  /**
  * Enable the feedback function
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#enable SlbCommon#enable}
  */
  readonly enable?: number;
  /**
  * schedule the uploading time, default is daily 00:00
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#schedule SlbCommon#schedule}
  */
  readonly schedule?: number;
  /**
  * Use management port to connect
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#use_mgmt_port SlbCommon#use_mgmt_port}
  */
  readonly useMgmtPort?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#uuid SlbCommon#uuid}
  */
  readonly uuid?: string;
  /**
  * 'Monday': Monday; 'Tuesday': Tuesday; 'Wednesday': Wednesday; 'Thursday': Thursday; 'Friday': Friday; 'Saturday': Saturday; 'Sunday': Sunday;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#week_day SlbCommon#week_day}
  */
  readonly weekDay?: string;
  /**
  * Time of day to update (hh:mm) in 24 hour local time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#week_time SlbCommon#week_time}
  */
  readonly weekTime?: string;
  /**
  * Every week
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#weekly SlbCommon#weekly}
  */
  readonly weekly?: number;
}

export function slbCommonCertPinningCandidateListFeedbackOptInToTerraform(struct?: SlbCommonCertPinningCandidateListFeedbackOptInOutputReference | SlbCommonCertPinningCandidateListFeedbackOptIn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    daily: cdktf.numberToTerraform(struct!.daily),
    day_time: cdktf.stringToTerraform(struct!.dayTime),
    enable: cdktf.numberToTerraform(struct!.enable),
    schedule: cdktf.numberToTerraform(struct!.schedule),
    use_mgmt_port: cdktf.numberToTerraform(struct!.useMgmtPort),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    week_day: cdktf.stringToTerraform(struct!.weekDay),
    week_time: cdktf.stringToTerraform(struct!.weekTime),
    weekly: cdktf.numberToTerraform(struct!.weekly),
  }
}


export function slbCommonCertPinningCandidateListFeedbackOptInToHclTerraform(struct?: SlbCommonCertPinningCandidateListFeedbackOptInOutputReference | SlbCommonCertPinningCandidateListFeedbackOptIn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    daily: {
      value: cdktf.numberToHclTerraform(struct!.daily),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    day_time: {
      value: cdktf.stringToHclTerraform(struct!.dayTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable: {
      value: cdktf.numberToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    schedule: {
      value: cdktf.numberToHclTerraform(struct!.schedule),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    use_mgmt_port: {
      value: cdktf.numberToHclTerraform(struct!.useMgmtPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    week_day: {
      value: cdktf.stringToHclTerraform(struct!.weekDay),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    week_time: {
      value: cdktf.stringToHclTerraform(struct!.weekTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weekly: {
      value: cdktf.numberToHclTerraform(struct!.weekly),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbCommonCertPinningCandidateListFeedbackOptInOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SlbCommonCertPinningCandidateListFeedbackOptIn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._daily !== undefined) {
      hasAnyValues = true;
      internalValueResult.daily = this._daily;
    }
    if (this._dayTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayTime = this._dayTime;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._schedule !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedule = this._schedule;
    }
    if (this._useMgmtPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.useMgmtPort = this._useMgmtPort;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._weekDay !== undefined) {
      hasAnyValues = true;
      internalValueResult.weekDay = this._weekDay;
    }
    if (this._weekTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.weekTime = this._weekTime;
    }
    if (this._weekly !== undefined) {
      hasAnyValues = true;
      internalValueResult.weekly = this._weekly;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbCommonCertPinningCandidateListFeedbackOptIn | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._daily = undefined;
      this._dayTime = undefined;
      this._enable = undefined;
      this._schedule = undefined;
      this._useMgmtPort = undefined;
      this._uuid = undefined;
      this._weekDay = undefined;
      this._weekTime = undefined;
      this._weekly = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._daily = value.daily;
      this._dayTime = value.dayTime;
      this._enable = value.enable;
      this._schedule = value.schedule;
      this._useMgmtPort = value.useMgmtPort;
      this._uuid = value.uuid;
      this._weekDay = value.weekDay;
      this._weekTime = value.weekTime;
      this._weekly = value.weekly;
    }
  }

  // daily - computed: false, optional: true, required: false
  private _daily?: number; 
  public get daily() {
    return this.getNumberAttribute('daily');
  }
  public set daily(value: number) {
    this._daily = value;
  }
  public resetDaily() {
    this._daily = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dailyInput() {
    return this._daily;
  }

  // day_time - computed: false, optional: true, required: false
  private _dayTime?: string; 
  public get dayTime() {
    return this.getStringAttribute('day_time');
  }
  public set dayTime(value: string) {
    this._dayTime = value;
  }
  public resetDayTime() {
    this._dayTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayTimeInput() {
    return this._dayTime;
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: number; 
  public get enable() {
    return this.getNumberAttribute('enable');
  }
  public set enable(value: number) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // schedule - computed: false, optional: true, required: false
  private _schedule?: number; 
  public get schedule() {
    return this.getNumberAttribute('schedule');
  }
  public set schedule(value: number) {
    this._schedule = value;
  }
  public resetSchedule() {
    this._schedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule;
  }

  // use_mgmt_port - computed: false, optional: true, required: false
  private _useMgmtPort?: number; 
  public get useMgmtPort() {
    return this.getNumberAttribute('use_mgmt_port');
  }
  public set useMgmtPort(value: number) {
    this._useMgmtPort = value;
  }
  public resetUseMgmtPort() {
    this._useMgmtPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useMgmtPortInput() {
    return this._useMgmtPort;
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

  // week_day - computed: false, optional: true, required: false
  private _weekDay?: string; 
  public get weekDay() {
    return this.getStringAttribute('week_day');
  }
  public set weekDay(value: string) {
    this._weekDay = value;
  }
  public resetWeekDay() {
    this._weekDay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weekDayInput() {
    return this._weekDay;
  }

  // week_time - computed: false, optional: true, required: false
  private _weekTime?: string; 
  public get weekTime() {
    return this.getStringAttribute('week_time');
  }
  public set weekTime(value: string) {
    this._weekTime = value;
  }
  public resetWeekTime() {
    this._weekTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weekTimeInput() {
    return this._weekTime;
  }

  // weekly - computed: false, optional: true, required: false
  private _weekly?: number; 
  public get weekly() {
    return this.getNumberAttribute('weekly');
  }
  public set weekly(value: number) {
    this._weekly = value;
  }
  public resetWeekly() {
    this._weekly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weeklyInput() {
    return this._weekly;
  }
}
export interface SlbCommonCertPinning {
  /**
  * The ttl of local cert pinning candidate list, multiple of 10 minutes, default is 144 (1440 minutes)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#ttl SlbCommon#ttl}
  */
  readonly ttl?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#uuid SlbCommon#uuid}
  */
  readonly uuid?: string;
  /**
  * candidate_list_feedback_opt_in block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#candidate_list_feedback_opt_in SlbCommon#candidate_list_feedback_opt_in}
  */
  readonly candidateListFeedbackOptIn?: SlbCommonCertPinningCandidateListFeedbackOptIn;
}

export function slbCommonCertPinningToTerraform(struct?: SlbCommonCertPinningOutputReference | SlbCommonCertPinning): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ttl: cdktf.numberToTerraform(struct!.ttl),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    candidate_list_feedback_opt_in: slbCommonCertPinningCandidateListFeedbackOptInToTerraform(struct!.candidateListFeedbackOptIn),
  }
}


export function slbCommonCertPinningToHclTerraform(struct?: SlbCommonCertPinningOutputReference | SlbCommonCertPinning): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ttl: {
      value: cdktf.numberToHclTerraform(struct!.ttl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    candidate_list_feedback_opt_in: {
      value: slbCommonCertPinningCandidateListFeedbackOptInToHclTerraform(struct!.candidateListFeedbackOptIn),
      isBlock: true,
      type: "list",
      storageClassType: "SlbCommonCertPinningCandidateListFeedbackOptInList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbCommonCertPinningOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SlbCommonCertPinning | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._candidateListFeedbackOptIn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.candidateListFeedbackOptIn = this._candidateListFeedbackOptIn?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbCommonCertPinning | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ttl = undefined;
      this._uuid = undefined;
      this._candidateListFeedbackOptIn.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ttl = value.ttl;
      this._uuid = value.uuid;
      this._candidateListFeedbackOptIn.internalValue = value.candidateListFeedbackOptIn;
    }
  }

  // ttl - computed: false, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
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

  // candidate_list_feedback_opt_in - computed: false, optional: true, required: false
  private _candidateListFeedbackOptIn = new SlbCommonCertPinningCandidateListFeedbackOptInOutputReference(this, "candidate_list_feedback_opt_in");
  public get candidateListFeedbackOptIn() {
    return this._candidateListFeedbackOptIn;
  }
  public putCandidateListFeedbackOptIn(value: SlbCommonCertPinningCandidateListFeedbackOptIn) {
    this._candidateListFeedbackOptIn.internalValue = value;
  }
  public resetCandidateListFeedbackOptIn() {
    this._candidateListFeedbackOptIn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get candidateListFeedbackOptInInput() {
    return this._candidateListFeedbackOptIn.internalValue;
  }
}
export interface SlbCommonConnRateLimitSrcIpListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#disable_ipv6_support SlbCommon#disable_ipv6_support}
  */
  readonly disableIpv6Support: number;
  /**
  * Set action if threshold exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#exceed_action SlbCommon#exceed_action}
  */
  readonly exceedAction?: number;
  /**
  * Set max connections per period
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#limit SlbCommon#limit}
  */
  readonly limit?: number;
  /**
  * '100': 100 ms; '1000': 1000 ms;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#limit_period SlbCommon#limit_period}
  */
  readonly limitPeriod?: string;
  /**
  * Set lockout period in seconds if threshold exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#lock_out SlbCommon#lock_out}
  */
  readonly lockOut?: number;
  /**
  * Send log if threshold exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#log SlbCommon#log}
  */
  readonly log?: number;
  /**
  * 'tcp': Set TCP connection rate limit; 'udp': Set UDP packet rate limit;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#protocol SlbCommon#protocol}
  */
  readonly protocol: string;
  /**
  * Set threshold shared amongst all virtual ports
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#shared SlbCommon#shared}
  */
  readonly shared?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#uuid SlbCommon#uuid}
  */
  readonly uuid?: string;
}

export function slbCommonConnRateLimitSrcIpListStructToTerraform(struct?: SlbCommonConnRateLimitSrcIpListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_ipv6_support: cdktf.numberToTerraform(struct!.disableIpv6Support),
    exceed_action: cdktf.numberToTerraform(struct!.exceedAction),
    limit: cdktf.numberToTerraform(struct!.limit),
    limit_period: cdktf.stringToTerraform(struct!.limitPeriod),
    lock_out: cdktf.numberToTerraform(struct!.lockOut),
    log: cdktf.numberToTerraform(struct!.log),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    shared: cdktf.numberToTerraform(struct!.shared),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function slbCommonConnRateLimitSrcIpListStructToHclTerraform(struct?: SlbCommonConnRateLimitSrcIpListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_ipv6_support: {
      value: cdktf.numberToHclTerraform(struct!.disableIpv6Support),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exceed_action: {
      value: cdktf.numberToHclTerraform(struct!.exceedAction),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    limit: {
      value: cdktf.numberToHclTerraform(struct!.limit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    limit_period: {
      value: cdktf.stringToHclTerraform(struct!.limitPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lock_out: {
      value: cdktf.numberToHclTerraform(struct!.lockOut),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log: {
      value: cdktf.numberToHclTerraform(struct!.log),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shared: {
      value: cdktf.numberToHclTerraform(struct!.shared),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbCommonConnRateLimitSrcIpListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbCommonConnRateLimitSrcIpListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableIpv6Support !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableIpv6Support = this._disableIpv6Support;
    }
    if (this._exceedAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceedAction = this._exceedAction;
    }
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    if (this._limitPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.limitPeriod = this._limitPeriod;
    }
    if (this._lockOut !== undefined) {
      hasAnyValues = true;
      internalValueResult.lockOut = this._lockOut;
    }
    if (this._log !== undefined) {
      hasAnyValues = true;
      internalValueResult.log = this._log;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._shared !== undefined) {
      hasAnyValues = true;
      internalValueResult.shared = this._shared;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbCommonConnRateLimitSrcIpListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disableIpv6Support = undefined;
      this._exceedAction = undefined;
      this._limit = undefined;
      this._limitPeriod = undefined;
      this._lockOut = undefined;
      this._log = undefined;
      this._protocol = undefined;
      this._shared = undefined;
      this._uuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disableIpv6Support = value.disableIpv6Support;
      this._exceedAction = value.exceedAction;
      this._limit = value.limit;
      this._limitPeriod = value.limitPeriod;
      this._lockOut = value.lockOut;
      this._log = value.log;
      this._protocol = value.protocol;
      this._shared = value.shared;
      this._uuid = value.uuid;
    }
  }

  // disable_ipv6_support - computed: false, optional: false, required: true
  private _disableIpv6Support?: number; 
  public get disableIpv6Support() {
    return this.getNumberAttribute('disable_ipv6_support');
  }
  public set disableIpv6Support(value: number) {
    this._disableIpv6Support = value;
  }
  // Temporarily expose input value. Use with caution.
  public get disableIpv6SupportInput() {
    return this._disableIpv6Support;
  }

  // exceed_action - computed: false, optional: true, required: false
  private _exceedAction?: number; 
  public get exceedAction() {
    return this.getNumberAttribute('exceed_action');
  }
  public set exceedAction(value: number) {
    this._exceedAction = value;
  }
  public resetExceedAction() {
    this._exceedAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceedActionInput() {
    return this._exceedAction;
  }

  // limit - computed: false, optional: true, required: false
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // limit_period - computed: false, optional: true, required: false
  private _limitPeriod?: string; 
  public get limitPeriod() {
    return this.getStringAttribute('limit_period');
  }
  public set limitPeriod(value: string) {
    this._limitPeriod = value;
  }
  public resetLimitPeriod() {
    this._limitPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitPeriodInput() {
    return this._limitPeriod;
  }

  // lock_out - computed: false, optional: true, required: false
  private _lockOut?: number; 
  public get lockOut() {
    return this.getNumberAttribute('lock_out');
  }
  public set lockOut(value: number) {
    this._lockOut = value;
  }
  public resetLockOut() {
    this._lockOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockOutInput() {
    return this._lockOut;
  }

  // log - computed: false, optional: true, required: false
  private _log?: number; 
  public get log() {
    return this.getNumberAttribute('log');
  }
  public set log(value: number) {
    this._log = value;
  }
  public resetLog() {
    this._log = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logInput() {
    return this._log;
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

  // shared - computed: false, optional: true, required: false
  private _shared?: number; 
  public get shared() {
    return this.getNumberAttribute('shared');
  }
  public set shared(value: number) {
    this._shared = value;
  }
  public resetShared() {
    this._shared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedInput() {
    return this._shared;
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
}

export class SlbCommonConnRateLimitSrcIpListStructList extends cdktf.ComplexList {
  public internalValue? : SlbCommonConnRateLimitSrcIpListStruct[] | cdktf.IResolvable

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
  public get(index: number): SlbCommonConnRateLimitSrcIpListStructOutputReference {
    return new SlbCommonConnRateLimitSrcIpListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlbCommonConnRateLimit {
  /**
  * src_ip_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#src_ip_list SlbCommon#src_ip_list}
  */
  readonly srcIpList?: SlbCommonConnRateLimitSrcIpListStruct[] | cdktf.IResolvable;
}

export function slbCommonConnRateLimitToTerraform(struct?: SlbCommonConnRateLimitOutputReference | SlbCommonConnRateLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    src_ip_list: cdktf.listMapper(slbCommonConnRateLimitSrcIpListStructToTerraform, true)(struct!.srcIpList),
  }
}


export function slbCommonConnRateLimitToHclTerraform(struct?: SlbCommonConnRateLimitOutputReference | SlbCommonConnRateLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    src_ip_list: {
      value: cdktf.listMapperHcl(slbCommonConnRateLimitSrcIpListStructToHclTerraform, true)(struct!.srcIpList),
      isBlock: true,
      type: "list",
      storageClassType: "SlbCommonConnRateLimitSrcIpListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbCommonConnRateLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SlbCommonConnRateLimit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._srcIpList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcIpList = this._srcIpList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbCommonConnRateLimit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._srcIpList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._srcIpList.internalValue = value.srcIpList;
    }
  }

  // src_ip_list - computed: false, optional: true, required: false
  private _srcIpList = new SlbCommonConnRateLimitSrcIpListStructList(this, "src_ip_list", false);
  public get srcIpList() {
    return this._srcIpList;
  }
  public putSrcIpList(value: SlbCommonConnRateLimitSrcIpListStruct[] | cdktf.IResolvable) {
    this._srcIpList.internalValue = value;
  }
  public resetSrcIpList() {
    this._srcIpList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcIpListInput() {
    return this._srcIpList.internalValue;
  }
}
export interface SlbCommonDdosProtectionLogging {
  /**
  * 'enable': Enable SLB DDoS protection logging (default); 'disable': Disable SLB DDoS protection logging;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#ipd_logging_toggle SlbCommon#ipd_logging_toggle}
  */
  readonly ipdLoggingToggle?: string;
}

export function slbCommonDdosProtectionLoggingToTerraform(struct?: SlbCommonDdosProtectionLoggingOutputReference | SlbCommonDdosProtectionLogging): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipd_logging_toggle: cdktf.stringToTerraform(struct!.ipdLoggingToggle),
  }
}


export function slbCommonDdosProtectionLoggingToHclTerraform(struct?: SlbCommonDdosProtectionLoggingOutputReference | SlbCommonDdosProtectionLogging): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipd_logging_toggle: {
      value: cdktf.stringToHclTerraform(struct!.ipdLoggingToggle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbCommonDdosProtectionLoggingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SlbCommonDdosProtectionLogging | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipdLoggingToggle !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipdLoggingToggle = this._ipdLoggingToggle;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbCommonDdosProtectionLogging | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipdLoggingToggle = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipdLoggingToggle = value.ipdLoggingToggle;
    }
  }

  // ipd_logging_toggle - computed: false, optional: true, required: false
  private _ipdLoggingToggle?: string; 
  public get ipdLoggingToggle() {
    return this.getStringAttribute('ipd_logging_toggle');
  }
  public set ipdLoggingToggle(value: string) {
    this._ipdLoggingToggle = value;
  }
  public resetIpdLoggingToggle() {
    this._ipdLoggingToggle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipdLoggingToggleInput() {
    return this._ipdLoggingToggle;
  }
}
export interface SlbCommonDdosProtectionPacketsPerSecond {
  /**
  * Configure packets-per-second threshold per TCP port (default: 200)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#ipd_tcp SlbCommon#ipd_tcp}
  */
  readonly ipdTcp?: number;
  /**
  * Configure packets-per-second threshold per UDP port (default: 200)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#ipd_udp SlbCommon#ipd_udp}
  */
  readonly ipdUdp?: number;
}

export function slbCommonDdosProtectionPacketsPerSecondToTerraform(struct?: SlbCommonDdosProtectionPacketsPerSecondOutputReference | SlbCommonDdosProtectionPacketsPerSecond): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipd_tcp: cdktf.numberToTerraform(struct!.ipdTcp),
    ipd_udp: cdktf.numberToTerraform(struct!.ipdUdp),
  }
}


export function slbCommonDdosProtectionPacketsPerSecondToHclTerraform(struct?: SlbCommonDdosProtectionPacketsPerSecondOutputReference | SlbCommonDdosProtectionPacketsPerSecond): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipd_tcp: {
      value: cdktf.numberToHclTerraform(struct!.ipdTcp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipd_udp: {
      value: cdktf.numberToHclTerraform(struct!.ipdUdp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbCommonDdosProtectionPacketsPerSecondOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SlbCommonDdosProtectionPacketsPerSecond | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipdTcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipdTcp = this._ipdTcp;
    }
    if (this._ipdUdp !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipdUdp = this._ipdUdp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbCommonDdosProtectionPacketsPerSecond | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipdTcp = undefined;
      this._ipdUdp = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipdTcp = value.ipdTcp;
      this._ipdUdp = value.ipdUdp;
    }
  }

  // ipd_tcp - computed: false, optional: true, required: false
  private _ipdTcp?: number; 
  public get ipdTcp() {
    return this.getNumberAttribute('ipd_tcp');
  }
  public set ipdTcp(value: number) {
    this._ipdTcp = value;
  }
  public resetIpdTcp() {
    this._ipdTcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipdTcpInput() {
    return this._ipdTcp;
  }

  // ipd_udp - computed: false, optional: true, required: false
  private _ipdUdp?: number; 
  public get ipdUdp() {
    return this.getNumberAttribute('ipd_udp');
  }
  public set ipdUdp(value: number) {
    this._ipdUdp = value;
  }
  public resetIpdUdp() {
    this._ipdUdp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipdUdpInput() {
    return this._ipdUdp;
  }
}
export interface SlbCommonDdosProtection {
  /**
  * 'enable': Enable SLB DDoS protection; 'disable': Disable SLB DDoS protection (default);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#ipd_enable_toggle SlbCommon#ipd_enable_toggle}
  */
  readonly ipdEnableToggle?: string;
  /**
  * logging block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#logging SlbCommon#logging}
  */
  readonly logging?: SlbCommonDdosProtectionLogging;
  /**
  * packets_per_second block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#packets_per_second SlbCommon#packets_per_second}
  */
  readonly packetsPerSecond?: SlbCommonDdosProtectionPacketsPerSecond;
}

export function slbCommonDdosProtectionToTerraform(struct?: SlbCommonDdosProtectionOutputReference | SlbCommonDdosProtection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipd_enable_toggle: cdktf.stringToTerraform(struct!.ipdEnableToggle),
    logging: slbCommonDdosProtectionLoggingToTerraform(struct!.logging),
    packets_per_second: slbCommonDdosProtectionPacketsPerSecondToTerraform(struct!.packetsPerSecond),
  }
}


export function slbCommonDdosProtectionToHclTerraform(struct?: SlbCommonDdosProtectionOutputReference | SlbCommonDdosProtection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipd_enable_toggle: {
      value: cdktf.stringToHclTerraform(struct!.ipdEnableToggle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logging: {
      value: slbCommonDdosProtectionLoggingToHclTerraform(struct!.logging),
      isBlock: true,
      type: "list",
      storageClassType: "SlbCommonDdosProtectionLoggingList",
    },
    packets_per_second: {
      value: slbCommonDdosProtectionPacketsPerSecondToHclTerraform(struct!.packetsPerSecond),
      isBlock: true,
      type: "list",
      storageClassType: "SlbCommonDdosProtectionPacketsPerSecondList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbCommonDdosProtectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SlbCommonDdosProtection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipdEnableToggle !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipdEnableToggle = this._ipdEnableToggle;
    }
    if (this._logging?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logging = this._logging?.internalValue;
    }
    if (this._packetsPerSecond?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetsPerSecond = this._packetsPerSecond?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbCommonDdosProtection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipdEnableToggle = undefined;
      this._logging.internalValue = undefined;
      this._packetsPerSecond.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipdEnableToggle = value.ipdEnableToggle;
      this._logging.internalValue = value.logging;
      this._packetsPerSecond.internalValue = value.packetsPerSecond;
    }
  }

  // ipd_enable_toggle - computed: false, optional: true, required: false
  private _ipdEnableToggle?: string; 
  public get ipdEnableToggle() {
    return this.getStringAttribute('ipd_enable_toggle');
  }
  public set ipdEnableToggle(value: string) {
    this._ipdEnableToggle = value;
  }
  public resetIpdEnableToggle() {
    this._ipdEnableToggle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipdEnableToggleInput() {
    return this._ipdEnableToggle;
  }

  // logging - computed: false, optional: true, required: false
  private _logging = new SlbCommonDdosProtectionLoggingOutputReference(this, "logging");
  public get logging() {
    return this._logging;
  }
  public putLogging(value: SlbCommonDdosProtectionLogging) {
    this._logging.internalValue = value;
  }
  public resetLogging() {
    this._logging.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingInput() {
    return this._logging.internalValue;
  }

  // packets_per_second - computed: false, optional: true, required: false
  private _packetsPerSecond = new SlbCommonDdosProtectionPacketsPerSecondOutputReference(this, "packets_per_second");
  public get packetsPerSecond() {
    return this._packetsPerSecond;
  }
  public putPacketsPerSecond(value: SlbCommonDdosProtectionPacketsPerSecond) {
    this._packetsPerSecond.internalValue = value;
  }
  public resetPacketsPerSecond() {
    this._packetsPerSecond.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetsPerSecondInput() {
    return this._packetsPerSecond.internalValue;
  }
}
export interface SlbCommonDnsResponseRateLimiting {
  /**
  * Maximum number of entries allowed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#max_table_entries SlbCommon#max_table_entries}
  */
  readonly maxTableEntries?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#uuid SlbCommon#uuid}
  */
  readonly uuid?: string;
}

export function slbCommonDnsResponseRateLimitingToTerraform(struct?: SlbCommonDnsResponseRateLimitingOutputReference | SlbCommonDnsResponseRateLimiting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_table_entries: cdktf.numberToTerraform(struct!.maxTableEntries),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function slbCommonDnsResponseRateLimitingToHclTerraform(struct?: SlbCommonDnsResponseRateLimitingOutputReference | SlbCommonDnsResponseRateLimiting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_table_entries: {
      value: cdktf.numberToHclTerraform(struct!.maxTableEntries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbCommonDnsResponseRateLimitingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SlbCommonDnsResponseRateLimiting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxTableEntries !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxTableEntries = this._maxTableEntries;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbCommonDnsResponseRateLimiting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxTableEntries = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxTableEntries = value.maxTableEntries;
      this._uuid = value.uuid;
    }
  }

  // max_table_entries - computed: false, optional: true, required: false
  private _maxTableEntries?: number; 
  public get maxTableEntries() {
    return this.getNumberAttribute('max_table_entries');
  }
  public set maxTableEntries(value: number) {
    this._maxTableEntries = value;
  }
  public resetMaxTableEntries() {
    this._maxTableEntries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTableEntriesInput() {
    return this._maxTableEntries;
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
}
export interface SlbCommonQuic {
  /**
  * Length of CID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#cid_len SlbCommon#cid_len}
  */
  readonly cidLen?: number;
  /**
  * Offset for Encoded CPU
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#cpu_offset SlbCommon#cpu_offset}
  */
  readonly cpuOffset?: number;
  /**
  * Enable CID Hashing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#enable_hash SlbCommon#enable_hash}
  */
  readonly enableHash?: number;
  /**
  * Enable CID Signature Validation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#enable_signature SlbCommon#enable_signature}
  */
  readonly enableSignature?: number;
  /**
  * Offset for QUIC-LB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#quic_lb_offset SlbCommon#quic_lb_offset}
  */
  readonly quicLbOffset?: number;
  /**
  * Set CID Signature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#signature SlbCommon#signature}
  */
  readonly signature?: string;
  /**
  * Offset for CID Signature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#signature_len SlbCommon#signature_len}
  */
  readonly signatureLen?: number;
  /**
  * Offset for CID Signature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#signature_offset SlbCommon#signature_offset}
  */
  readonly signatureOffset?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#uuid SlbCommon#uuid}
  */
  readonly uuid?: string;
}

export function slbCommonQuicToTerraform(struct?: SlbCommonQuicOutputReference | SlbCommonQuic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cid_len: cdktf.numberToTerraform(struct!.cidLen),
    cpu_offset: cdktf.numberToTerraform(struct!.cpuOffset),
    enable_hash: cdktf.numberToTerraform(struct!.enableHash),
    enable_signature: cdktf.numberToTerraform(struct!.enableSignature),
    quic_lb_offset: cdktf.numberToTerraform(struct!.quicLbOffset),
    signature: cdktf.stringToTerraform(struct!.signature),
    signature_len: cdktf.numberToTerraform(struct!.signatureLen),
    signature_offset: cdktf.numberToTerraform(struct!.signatureOffset),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function slbCommonQuicToHclTerraform(struct?: SlbCommonQuicOutputReference | SlbCommonQuic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cid_len: {
      value: cdktf.numberToHclTerraform(struct!.cidLen),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cpu_offset: {
      value: cdktf.numberToHclTerraform(struct!.cpuOffset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enable_hash: {
      value: cdktf.numberToHclTerraform(struct!.enableHash),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enable_signature: {
      value: cdktf.numberToHclTerraform(struct!.enableSignature),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    quic_lb_offset: {
      value: cdktf.numberToHclTerraform(struct!.quicLbOffset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    signature: {
      value: cdktf.stringToHclTerraform(struct!.signature),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    signature_len: {
      value: cdktf.numberToHclTerraform(struct!.signatureLen),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    signature_offset: {
      value: cdktf.numberToHclTerraform(struct!.signatureOffset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbCommonQuicOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SlbCommonQuic | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidLen !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidLen = this._cidLen;
    }
    if (this._cpuOffset !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuOffset = this._cpuOffset;
    }
    if (this._enableHash !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableHash = this._enableHash;
    }
    if (this._enableSignature !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableSignature = this._enableSignature;
    }
    if (this._quicLbOffset !== undefined) {
      hasAnyValues = true;
      internalValueResult.quicLbOffset = this._quicLbOffset;
    }
    if (this._signature !== undefined) {
      hasAnyValues = true;
      internalValueResult.signature = this._signature;
    }
    if (this._signatureLen !== undefined) {
      hasAnyValues = true;
      internalValueResult.signatureLen = this._signatureLen;
    }
    if (this._signatureOffset !== undefined) {
      hasAnyValues = true;
      internalValueResult.signatureOffset = this._signatureOffset;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbCommonQuic | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cidLen = undefined;
      this._cpuOffset = undefined;
      this._enableHash = undefined;
      this._enableSignature = undefined;
      this._quicLbOffset = undefined;
      this._signature = undefined;
      this._signatureLen = undefined;
      this._signatureOffset = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cidLen = value.cidLen;
      this._cpuOffset = value.cpuOffset;
      this._enableHash = value.enableHash;
      this._enableSignature = value.enableSignature;
      this._quicLbOffset = value.quicLbOffset;
      this._signature = value.signature;
      this._signatureLen = value.signatureLen;
      this._signatureOffset = value.signatureOffset;
      this._uuid = value.uuid;
    }
  }

  // cid_len - computed: false, optional: true, required: false
  private _cidLen?: number; 
  public get cidLen() {
    return this.getNumberAttribute('cid_len');
  }
  public set cidLen(value: number) {
    this._cidLen = value;
  }
  public resetCidLen() {
    this._cidLen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidLenInput() {
    return this._cidLen;
  }

  // cpu_offset - computed: false, optional: true, required: false
  private _cpuOffset?: number; 
  public get cpuOffset() {
    return this.getNumberAttribute('cpu_offset');
  }
  public set cpuOffset(value: number) {
    this._cpuOffset = value;
  }
  public resetCpuOffset() {
    this._cpuOffset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuOffsetInput() {
    return this._cpuOffset;
  }

  // enable_hash - computed: false, optional: true, required: false
  private _enableHash?: number; 
  public get enableHash() {
    return this.getNumberAttribute('enable_hash');
  }
  public set enableHash(value: number) {
    this._enableHash = value;
  }
  public resetEnableHash() {
    this._enableHash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableHashInput() {
    return this._enableHash;
  }

  // enable_signature - computed: false, optional: true, required: false
  private _enableSignature?: number; 
  public get enableSignature() {
    return this.getNumberAttribute('enable_signature');
  }
  public set enableSignature(value: number) {
    this._enableSignature = value;
  }
  public resetEnableSignature() {
    this._enableSignature = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSignatureInput() {
    return this._enableSignature;
  }

  // quic_lb_offset - computed: false, optional: true, required: false
  private _quicLbOffset?: number; 
  public get quicLbOffset() {
    return this.getNumberAttribute('quic_lb_offset');
  }
  public set quicLbOffset(value: number) {
    this._quicLbOffset = value;
  }
  public resetQuicLbOffset() {
    this._quicLbOffset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quicLbOffsetInput() {
    return this._quicLbOffset;
  }

  // signature - computed: false, optional: true, required: false
  private _signature?: string; 
  public get signature() {
    return this.getStringAttribute('signature');
  }
  public set signature(value: string) {
    this._signature = value;
  }
  public resetSignature() {
    this._signature = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signatureInput() {
    return this._signature;
  }

  // signature_len - computed: false, optional: true, required: false
  private _signatureLen?: number; 
  public get signatureLen() {
    return this.getNumberAttribute('signature_len');
  }
  public set signatureLen(value: number) {
    this._signatureLen = value;
  }
  public resetSignatureLen() {
    this._signatureLen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signatureLenInput() {
    return this._signatureLen;
  }

  // signature_offset - computed: false, optional: true, required: false
  private _signatureOffset?: number; 
  public get signatureOffset() {
    return this.getNumberAttribute('signature_offset');
  }
  public set signatureOffset(value: number) {
    this._signatureOffset = value;
  }
  public resetSignatureOffset() {
    this._signatureOffset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signatureOffsetInput() {
    return this._signatureOffset;
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
}
export interface SlbCommonSnatPreserveRange {
  /**
  * start port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#port1 SlbCommon#port1}
  */
  readonly port1?: number;
  /**
  * end port which is greater than start
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#port2 SlbCommon#port2}
  */
  readonly port2?: number;
}

export function slbCommonSnatPreserveRangeToTerraform(struct?: SlbCommonSnatPreserveRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port1: cdktf.numberToTerraform(struct!.port1),
    port2: cdktf.numberToTerraform(struct!.port2),
  }
}


export function slbCommonSnatPreserveRangeToHclTerraform(struct?: SlbCommonSnatPreserveRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port1: {
      value: cdktf.numberToHclTerraform(struct!.port1),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port2: {
      value: cdktf.numberToHclTerraform(struct!.port2),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbCommonSnatPreserveRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbCommonSnatPreserveRange | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.port1 = this._port1;
    }
    if (this._port2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.port2 = this._port2;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbCommonSnatPreserveRange | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._port1 = undefined;
      this._port2 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._port1 = value.port1;
      this._port2 = value.port2;
    }
  }

  // port1 - computed: false, optional: true, required: false
  private _port1?: number; 
  public get port1() {
    return this.getNumberAttribute('port1');
  }
  public set port1(value: number) {
    this._port1 = value;
  }
  public resetPort1() {
    this._port1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get port1Input() {
    return this._port1;
  }

  // port2 - computed: false, optional: true, required: false
  private _port2?: number; 
  public get port2() {
    return this.getNumberAttribute('port2');
  }
  public set port2(value: number) {
    this._port2 = value;
  }
  public resetPort2() {
    this._port2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get port2Input() {
    return this._port2;
  }
}

export class SlbCommonSnatPreserveRangeList extends cdktf.ComplexList {
  public internalValue? : SlbCommonSnatPreserveRange[] | cdktf.IResolvable

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
  public get(index: number): SlbCommonSnatPreserveRangeOutputReference {
    return new SlbCommonSnatPreserveRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlbCommonSnatPreserve {
  /**
  * range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#range SlbCommon#range}
  */
  readonly range?: SlbCommonSnatPreserveRange[] | cdktf.IResolvable;
}

export function slbCommonSnatPreserveToTerraform(struct?: SlbCommonSnatPreserveOutputReference | SlbCommonSnatPreserve): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    range: cdktf.listMapper(slbCommonSnatPreserveRangeToTerraform, true)(struct!.range),
  }
}


export function slbCommonSnatPreserveToHclTerraform(struct?: SlbCommonSnatPreserveOutputReference | SlbCommonSnatPreserve): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    range: {
      value: cdktf.listMapperHcl(slbCommonSnatPreserveRangeToHclTerraform, true)(struct!.range),
      isBlock: true,
      type: "list",
      storageClassType: "SlbCommonSnatPreserveRangeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbCommonSnatPreserveOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SlbCommonSnatPreserve | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._range?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.range = this._range?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbCommonSnatPreserve | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._range.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._range.internalValue = value.range;
    }
  }

  // range - computed: false, optional: true, required: false
  private _range = new SlbCommonSnatPreserveRangeList(this, "range", false);
  public get range() {
    return this._range;
  }
  public putRange(value: SlbCommonSnatPreserveRange[] | cdktf.IResolvable) {
    this._range.internalValue = value;
  }
  public resetRange() {
    this._range.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeInput() {
    return this._range.internalValue;
  }
}
export interface SlbCommonSslRatelimitCfg {
  /**
  * Disable HW SSL Rate limit for N5-new
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#disable_rate SlbCommon#disable_rate}
  */
  readonly disableRate?: number;
  /**
  * Enabling Rateliming for TLS1.2 HW requests per chip in 1K - default 120
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#tls12_rate SlbCommon#tls12_rate}
  */
  readonly tls12Rate?: number;
  /**
  * Enabling Rateliming for TLS1.3 HW requests per chip in 1K - default 72
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#tls13_rate SlbCommon#tls13_rate}
  */
  readonly tls13Rate?: number;
}

export function slbCommonSslRatelimitCfgToTerraform(struct?: SlbCommonSslRatelimitCfgOutputReference | SlbCommonSslRatelimitCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_rate: cdktf.numberToTerraform(struct!.disableRate),
    tls12_rate: cdktf.numberToTerraform(struct!.tls12Rate),
    tls13_rate: cdktf.numberToTerraform(struct!.tls13Rate),
  }
}


export function slbCommonSslRatelimitCfgToHclTerraform(struct?: SlbCommonSslRatelimitCfgOutputReference | SlbCommonSslRatelimitCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_rate: {
      value: cdktf.numberToHclTerraform(struct!.disableRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tls12_rate: {
      value: cdktf.numberToHclTerraform(struct!.tls12Rate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tls13_rate: {
      value: cdktf.numberToHclTerraform(struct!.tls13Rate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbCommonSslRatelimitCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SlbCommonSslRatelimitCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableRate = this._disableRate;
    }
    if (this._tls12Rate !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls12Rate = this._tls12Rate;
    }
    if (this._tls13Rate !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls13Rate = this._tls13Rate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbCommonSslRatelimitCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disableRate = undefined;
      this._tls12Rate = undefined;
      this._tls13Rate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disableRate = value.disableRate;
      this._tls12Rate = value.tls12Rate;
      this._tls13Rate = value.tls13Rate;
    }
  }

  // disable_rate - computed: false, optional: true, required: false
  private _disableRate?: number; 
  public get disableRate() {
    return this.getNumberAttribute('disable_rate');
  }
  public set disableRate(value: number) {
    this._disableRate = value;
  }
  public resetDisableRate() {
    this._disableRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableRateInput() {
    return this._disableRate;
  }

  // tls12_rate - computed: false, optional: true, required: false
  private _tls12Rate?: number; 
  public get tls12Rate() {
    return this.getNumberAttribute('tls12_rate');
  }
  public set tls12Rate(value: number) {
    this._tls12Rate = value;
  }
  public resetTls12Rate() {
    this._tls12Rate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tls12RateInput() {
    return this._tls12Rate;
  }

  // tls13_rate - computed: false, optional: true, required: false
  private _tls13Rate?: number; 
  public get tls13Rate() {
    return this.getNumberAttribute('tls13_rate');
  }
  public set tls13Rate(value: number) {
    this._tls13Rate = value;
  }
  public resetTls13Rate() {
    this._tls13Rate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tls13RateInput() {
    return this._tls13Rate;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common thunder_slb_common}
*/
export class SlbCommon extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_common";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SlbCommon resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SlbCommon to import
  * @param importFromId The id of the existing SlbCommon that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SlbCommon to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_common", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_common thunder_slb_common} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SlbCommonConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SlbCommonConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_common',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._aflexTableEntryAgingInterval = config.aflexTableEntryAgingInterval;
    this._afterDisable = config.afterDisable;
    this._allowInGatewayMode = config.allowInGatewayMode;
    this._attackRespCode = config.attackRespCode;
    this._autoNatNoIpRefresh = config.autoNatNoIpRefresh;
    this._autoTranslatePort = config.autoTranslatePort;
    this._buffThresh = config.buffThresh;
    this._buffThreshHwBuff = config.buffThreshHwBuff;
    this._buffThreshRelieveThresh = config.buffThreshRelieveThresh;
    this._buffThreshSysBuffHigh = config.buffThreshSysBuffHigh;
    this._buffThreshSysBuffLow = config.buffThreshSysBuffLow;
    this._cacheExpireTime = config.cacheExpireTime;
    this._cancelStreamLoopLimit = config.cancelStreamLoopLimit;
    this._clientsideIp = config.clientsideIp;
    this._clientsideIpv6 = config.clientsideIpv6;
    this._compressBlockSize = config.compressBlockSize;
    this._customMessage = config.customMessage;
    this._customPage = config.customPage;
    this._customSignalClist = config.customSignalClist;
    this._ddosPktCountThresh = config.ddosPktCountThresh;
    this._ddosPktSizeThresh = config.ddosPktSizeThresh;
    this._disableAdaptiveResourceCheck = config.disableAdaptiveResourceCheck;
    this._disablePersistScoring = config.disablePersistScoring;
    this._disablePortMasking = config.disablePortMasking;
    this._disableServerAutoReselect = config.disableServerAutoReselect;
    this._dnsCacheAge = config.dnsCacheAge;
    this._dnsCacheAgeMinThreshold = config.dnsCacheAgeMinThreshold;
    this._dnsCacheAgingWeight = config.dnsCacheAgingWeight;
    this._dnsCacheEnable = config.dnsCacheEnable;
    this._dnsCacheEntrySize = config.dnsCacheEntrySize;
    this._dnsCacheSync = config.dnsCacheSync;
    this._dnsCacheSyncEntrySize = config.dnsCacheSyncEntrySize;
    this._dnsCacheSyncTtlThreshold = config.dnsCacheSyncTtlThreshold;
    this._dnsCacheTtlAdjustmentEnable = config.dnsCacheTtlAdjustmentEnable;
    this._dnsNegativeCacheEnable = config.dnsNegativeCacheEnable;
    this._dnsPersistentCacheEnable = config.dnsPersistentCacheEnable;
    this._dnsPersistentCacheHitThreshold = config.dnsPersistentCacheHitThreshold;
    this._dnsPersistentCacheTtlThreshold = config.dnsPersistentCacheTtlThreshold;
    this._dnsVipStateless = config.dnsVipStateless;
    this._dropIcmpToVipWhenVipDown = config.dropIcmpToVipWhenVipDown;
    this._dsrHealthCheckEnable = config.dsrHealthCheckEnable;
    this._ecmpHash = config.ecmpHash;
    this._enableDdos = config.enableDdos;
    this._enableFastPathRerouting = config.enableFastPathRerouting;
    this._enableL7ReqAcct = config.enableL7ReqAcct;
    this._entity = config.entity;
    this._excludeDestination = config.excludeDestination;
    this._extendedStats = config.extendedStats;
    this._fastPathDisable = config.fastPathDisable;
    this._gatewayHealthCheck = config.gatewayHealthCheck;
    this._gracefulShutdown = config.gracefulShutdown;
    this._gracefulShutdownEnable = config.gracefulShutdownEnable;
    this._healthCheckToAllVip = config.healthCheckToAllVip;
    this._honorServerResponseTtl = config.honorServerResponseTtl;
    this._httpFastEnable = config.httpFastEnable;
    this._hwCompression = config.hwCompression;
    this._hwSynRr = config.hwSynRr;
    this._id = config.id;
    this._interval = config.interval;
    this._ipv4Offset = config.ipv4Offset;
    this._ipv6Subnet = config.ipv6Subnet;
    this._l2L3TrunkLbDisable = config.l2L3TrunkLbDisable;
    this._logForResetUnknownConn = config.logForResetUnknownConn;
    this._lowLatency = config.lowLatency;
    this._maxBuffQueuedPerConn = config.maxBuffQueuedPerConn;
    this._maxHttpHeaderCount = config.maxHttpHeaderCount;
    this._maxLocalRate = config.maxLocalRate;
    this._maxPersistentCache = config.maxPersistentCache;
    this._maxRemoteRate = config.maxRemoteRate;
    this._monitorModeEnable = config.monitorModeEnable;
    this._mslTime = config.mslTime;
    this._mssTable = config.mssTable;
    this._multiCpu = config.multiCpu;
    this._n5New = config.n5New;
    this._n5Old = config.n5Old;
    this._ngwafProxyIpv4 = config.ngwafProxyIpv4;
    this._ngwafProxyIpv6 = config.ngwafProxyIpv6;
    this._ngwafProxyPort = config.ngwafProxyPort;
    this._noAutoUpOnAflex = config.noAutoUpOnAflex;
    this._oddEvenNatEnable = config.oddEvenNatEnable;
    this._oneServerConnHmRate = config.oneServerConnHmRate;
    this._overridePort = config.overridePort;
    this._pbslbEntryAge = config.pbslbEntryAge;
    this._pbslbOverflowGlid = config.pbslbOverflowGlid;
    this._perThrPercent = config.perThrPercent;
    this._pingSweepDetection = config.pingSweepDetection;
    this._pktRateForResetUnknownConn = config.pktRateForResetUnknownConn;
    this._playerIdCheckEnable = config.playerIdCheckEnable;
    this._port = config.port;
    this._portScanDetection = config.portScanDetection;
    this._preProcessEnable = config.preProcessEnable;
    this._qat = config.qat;
    this._range = config.range;
    this._rangeEnd = config.rangeEnd;
    this._rangeStart = config.rangeStart;
    this._rateLimitLogging = config.rateLimitLogging;
    this._recursiveNsCache = config.recursiveNsCache;
    this._resetStaleSession = config.resetStaleSession;
    this._resolvePortConflict = config.resolvePortConflict;
    this._responseType = config.responseType;
    this._scaleOut = config.scaleOut;
    this._scaleOutTrafficMap = config.scaleOutTrafficMap;
    this._serversideIp = config.serversideIp;
    this._serversideIpv6 = config.serversideIpv6;
    this._serviceGroupOnNoDestNatVports = config.serviceGroupOnNoDestNatVports;
    this._showSlbServerLegacyCmd = config.showSlbServerLegacyCmd;
    this._showSlbServiceGroupLegacyCmd = config.showSlbServiceGroupLegacyCmd;
    this._showSlbVirtualServerLegacyCmd = config.showSlbVirtualServerLegacyCmd;
    this._snatGwyForL3 = config.snatGwyForL3;
    this._snatOnVip = config.snatOnVip;
    this._software = config.softwareAttribute;
    this._softwareTls13 = config.softwareTls13;
    this._softwareTls13Offload = config.softwareTls13Offload;
    this._sortRes = config.sortRes;
    this._sslModuleUsageEnable = config.sslModuleUsageEnable;
    this._sslN5DelayTxEnable = config.sslN5DelayTxEnable;
    this._ssliCertNotReadyInspectLimit = config.ssliCertNotReadyInspectLimit;
    this._ssliCertNotReadyInspectTimeout = config.ssliCertNotReadyInspectTimeout;
    this._ssliSilentTerminationEnable = config.ssliSilentTerminationEnable;
    this._ssliSniHashEnable = config.ssliSniHashEnable;
    this._statelessSgMultiBinding = config.statelessSgMultiBinding;
    this._statsDataDisable = config.statsDataDisable;
    this._substituteSourceMac = config.substituteSourceMac;
    this._timeout = config.timeout;
    this._trafficMapType = config.trafficMapType;
    this._ttlThreshold = config.ttlThreshold;
    this._useDefaultSessCount = config.useDefaultSessCount;
    this._useHttpsProxy = config.useHttpsProxy;
    this._useMgmtPort = config.useMgmtPort;
    this._useMssTab = config.useMssTab;
    this._uuid = config.uuid;
    this._vportGlobal = config.vportGlobal;
    this._vportL3V = config.vportL3V;
    this._aflexTableEntrySync.internalValue = config.aflexTableEntrySync;
    this._certPinning.internalValue = config.certPinning;
    this._connRateLimit.internalValue = config.connRateLimit;
    this._ddosProtection.internalValue = config.ddosProtection;
    this._dnsResponseRateLimiting.internalValue = config.dnsResponseRateLimiting;
    this._quic.internalValue = config.quic;
    this._snatPreserve.internalValue = config.snatPreserve;
    this._sslRatelimitCfg.internalValue = config.sslRatelimitCfg;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aflex_table_entry_aging_interval - computed: false, optional: true, required: false
  private _aflexTableEntryAgingInterval?: number; 
  public get aflexTableEntryAgingInterval() {
    return this.getNumberAttribute('aflex_table_entry_aging_interval');
  }
  public set aflexTableEntryAgingInterval(value: number) {
    this._aflexTableEntryAgingInterval = value;
  }
  public resetAflexTableEntryAgingInterval() {
    this._aflexTableEntryAgingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aflexTableEntryAgingIntervalInput() {
    return this._aflexTableEntryAgingInterval;
  }

  // after_disable - computed: false, optional: true, required: false
  private _afterDisable?: number; 
  public get afterDisable() {
    return this.getNumberAttribute('after_disable');
  }
  public set afterDisable(value: number) {
    this._afterDisable = value;
  }
  public resetAfterDisable() {
    this._afterDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get afterDisableInput() {
    return this._afterDisable;
  }

  // allow_in_gateway_mode - computed: false, optional: true, required: false
  private _allowInGatewayMode?: number; 
  public get allowInGatewayMode() {
    return this.getNumberAttribute('allow_in_gateway_mode');
  }
  public set allowInGatewayMode(value: number) {
    this._allowInGatewayMode = value;
  }
  public resetAllowInGatewayMode() {
    this._allowInGatewayMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInGatewayModeInput() {
    return this._allowInGatewayMode;
  }

  // attack_resp_code - computed: false, optional: true, required: false
  private _attackRespCode?: number; 
  public get attackRespCode() {
    return this.getNumberAttribute('attack_resp_code');
  }
  public set attackRespCode(value: number) {
    this._attackRespCode = value;
  }
  public resetAttackRespCode() {
    this._attackRespCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attackRespCodeInput() {
    return this._attackRespCode;
  }

  // auto_nat_no_ip_refresh - computed: false, optional: true, required: false
  private _autoNatNoIpRefresh?: string; 
  public get autoNatNoIpRefresh() {
    return this.getStringAttribute('auto_nat_no_ip_refresh');
  }
  public set autoNatNoIpRefresh(value: string) {
    this._autoNatNoIpRefresh = value;
  }
  public resetAutoNatNoIpRefresh() {
    this._autoNatNoIpRefresh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoNatNoIpRefreshInput() {
    return this._autoNatNoIpRefresh;
  }

  // auto_translate_port - computed: false, optional: true, required: false
  private _autoTranslatePort?: number; 
  public get autoTranslatePort() {
    return this.getNumberAttribute('auto_translate_port');
  }
  public set autoTranslatePort(value: number) {
    this._autoTranslatePort = value;
  }
  public resetAutoTranslatePort() {
    this._autoTranslatePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoTranslatePortInput() {
    return this._autoTranslatePort;
  }

  // buff_thresh - computed: false, optional: true, required: false
  private _buffThresh?: number; 
  public get buffThresh() {
    return this.getNumberAttribute('buff_thresh');
  }
  public set buffThresh(value: number) {
    this._buffThresh = value;
  }
  public resetBuffThresh() {
    this._buffThresh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buffThreshInput() {
    return this._buffThresh;
  }

  // buff_thresh_hw_buff - computed: false, optional: true, required: false
  private _buffThreshHwBuff?: number; 
  public get buffThreshHwBuff() {
    return this.getNumberAttribute('buff_thresh_hw_buff');
  }
  public set buffThreshHwBuff(value: number) {
    this._buffThreshHwBuff = value;
  }
  public resetBuffThreshHwBuff() {
    this._buffThreshHwBuff = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buffThreshHwBuffInput() {
    return this._buffThreshHwBuff;
  }

  // buff_thresh_relieve_thresh - computed: false, optional: true, required: false
  private _buffThreshRelieveThresh?: number; 
  public get buffThreshRelieveThresh() {
    return this.getNumberAttribute('buff_thresh_relieve_thresh');
  }
  public set buffThreshRelieveThresh(value: number) {
    this._buffThreshRelieveThresh = value;
  }
  public resetBuffThreshRelieveThresh() {
    this._buffThreshRelieveThresh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buffThreshRelieveThreshInput() {
    return this._buffThreshRelieveThresh;
  }

  // buff_thresh_sys_buff_high - computed: false, optional: true, required: false
  private _buffThreshSysBuffHigh?: number; 
  public get buffThreshSysBuffHigh() {
    return this.getNumberAttribute('buff_thresh_sys_buff_high');
  }
  public set buffThreshSysBuffHigh(value: number) {
    this._buffThreshSysBuffHigh = value;
  }
  public resetBuffThreshSysBuffHigh() {
    this._buffThreshSysBuffHigh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buffThreshSysBuffHighInput() {
    return this._buffThreshSysBuffHigh;
  }

  // buff_thresh_sys_buff_low - computed: false, optional: true, required: false
  private _buffThreshSysBuffLow?: number; 
  public get buffThreshSysBuffLow() {
    return this.getNumberAttribute('buff_thresh_sys_buff_low');
  }
  public set buffThreshSysBuffLow(value: number) {
    this._buffThreshSysBuffLow = value;
  }
  public resetBuffThreshSysBuffLow() {
    this._buffThreshSysBuffLow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buffThreshSysBuffLowInput() {
    return this._buffThreshSysBuffLow;
  }

  // cache_expire_time - computed: false, optional: true, required: false
  private _cacheExpireTime?: number; 
  public get cacheExpireTime() {
    return this.getNumberAttribute('cache_expire_time');
  }
  public set cacheExpireTime(value: number) {
    this._cacheExpireTime = value;
  }
  public resetCacheExpireTime() {
    this._cacheExpireTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheExpireTimeInput() {
    return this._cacheExpireTime;
  }

  // cancel_stream_loop_limit - computed: false, optional: true, required: false
  private _cancelStreamLoopLimit?: number; 
  public get cancelStreamLoopLimit() {
    return this.getNumberAttribute('cancel_stream_loop_limit');
  }
  public set cancelStreamLoopLimit(value: number) {
    this._cancelStreamLoopLimit = value;
  }
  public resetCancelStreamLoopLimit() {
    this._cancelStreamLoopLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cancelStreamLoopLimitInput() {
    return this._cancelStreamLoopLimit;
  }

  // clientside_ip - computed: false, optional: true, required: false
  private _clientsideIp?: string; 
  public get clientsideIp() {
    return this.getStringAttribute('clientside_ip');
  }
  public set clientsideIp(value: string) {
    this._clientsideIp = value;
  }
  public resetClientsideIp() {
    this._clientsideIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientsideIpInput() {
    return this._clientsideIp;
  }

  // clientside_ipv6 - computed: false, optional: true, required: false
  private _clientsideIpv6?: string; 
  public get clientsideIpv6() {
    return this.getStringAttribute('clientside_ipv6');
  }
  public set clientsideIpv6(value: string) {
    this._clientsideIpv6 = value;
  }
  public resetClientsideIpv6() {
    this._clientsideIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientsideIpv6Input() {
    return this._clientsideIpv6;
  }

  // compress_block_size - computed: false, optional: true, required: false
  private _compressBlockSize?: number; 
  public get compressBlockSize() {
    return this.getNumberAttribute('compress_block_size');
  }
  public set compressBlockSize(value: number) {
    this._compressBlockSize = value;
  }
  public resetCompressBlockSize() {
    this._compressBlockSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressBlockSizeInput() {
    return this._compressBlockSize;
  }

  // custom_message - computed: false, optional: true, required: false
  private _customMessage?: string; 
  public get customMessage() {
    return this.getStringAttribute('custom_message');
  }
  public set customMessage(value: string) {
    this._customMessage = value;
  }
  public resetCustomMessage() {
    this._customMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customMessageInput() {
    return this._customMessage;
  }

  // custom_page - computed: false, optional: true, required: false
  private _customPage?: string; 
  public get customPage() {
    return this.getStringAttribute('custom_page');
  }
  public set customPage(value: string) {
    this._customPage = value;
  }
  public resetCustomPage() {
    this._customPage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPageInput() {
    return this._customPage;
  }

  // custom_signal_clist - computed: false, optional: true, required: false
  private _customSignalClist?: string; 
  public get customSignalClist() {
    return this.getStringAttribute('custom_signal_clist');
  }
  public set customSignalClist(value: string) {
    this._customSignalClist = value;
  }
  public resetCustomSignalClist() {
    this._customSignalClist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSignalClistInput() {
    return this._customSignalClist;
  }

  // ddos_pkt_count_thresh - computed: false, optional: true, required: false
  private _ddosPktCountThresh?: number; 
  public get ddosPktCountThresh() {
    return this.getNumberAttribute('ddos_pkt_count_thresh');
  }
  public set ddosPktCountThresh(value: number) {
    this._ddosPktCountThresh = value;
  }
  public resetDdosPktCountThresh() {
    this._ddosPktCountThresh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddosPktCountThreshInput() {
    return this._ddosPktCountThresh;
  }

  // ddos_pkt_size_thresh - computed: false, optional: true, required: false
  private _ddosPktSizeThresh?: number; 
  public get ddosPktSizeThresh() {
    return this.getNumberAttribute('ddos_pkt_size_thresh');
  }
  public set ddosPktSizeThresh(value: number) {
    this._ddosPktSizeThresh = value;
  }
  public resetDdosPktSizeThresh() {
    this._ddosPktSizeThresh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddosPktSizeThreshInput() {
    return this._ddosPktSizeThresh;
  }

  // disable_adaptive_resource_check - computed: false, optional: true, required: false
  private _disableAdaptiveResourceCheck?: number; 
  public get disableAdaptiveResourceCheck() {
    return this.getNumberAttribute('disable_adaptive_resource_check');
  }
  public set disableAdaptiveResourceCheck(value: number) {
    this._disableAdaptiveResourceCheck = value;
  }
  public resetDisableAdaptiveResourceCheck() {
    this._disableAdaptiveResourceCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableAdaptiveResourceCheckInput() {
    return this._disableAdaptiveResourceCheck;
  }

  // disable_persist_scoring - computed: false, optional: true, required: false
  private _disablePersistScoring?: number; 
  public get disablePersistScoring() {
    return this.getNumberAttribute('disable_persist_scoring');
  }
  public set disablePersistScoring(value: number) {
    this._disablePersistScoring = value;
  }
  public resetDisablePersistScoring() {
    this._disablePersistScoring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disablePersistScoringInput() {
    return this._disablePersistScoring;
  }

  // disable_port_masking - computed: false, optional: true, required: false
  private _disablePortMasking?: number; 
  public get disablePortMasking() {
    return this.getNumberAttribute('disable_port_masking');
  }
  public set disablePortMasking(value: number) {
    this._disablePortMasking = value;
  }
  public resetDisablePortMasking() {
    this._disablePortMasking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disablePortMaskingInput() {
    return this._disablePortMasking;
  }

  // disable_server_auto_reselect - computed: false, optional: true, required: false
  private _disableServerAutoReselect?: number; 
  public get disableServerAutoReselect() {
    return this.getNumberAttribute('disable_server_auto_reselect');
  }
  public set disableServerAutoReselect(value: number) {
    this._disableServerAutoReselect = value;
  }
  public resetDisableServerAutoReselect() {
    this._disableServerAutoReselect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableServerAutoReselectInput() {
    return this._disableServerAutoReselect;
  }

  // dns_cache_age - computed: false, optional: true, required: false
  private _dnsCacheAge?: number; 
  public get dnsCacheAge() {
    return this.getNumberAttribute('dns_cache_age');
  }
  public set dnsCacheAge(value: number) {
    this._dnsCacheAge = value;
  }
  public resetDnsCacheAge() {
    this._dnsCacheAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsCacheAgeInput() {
    return this._dnsCacheAge;
  }

  // dns_cache_age_min_threshold - computed: false, optional: true, required: false
  private _dnsCacheAgeMinThreshold?: number; 
  public get dnsCacheAgeMinThreshold() {
    return this.getNumberAttribute('dns_cache_age_min_threshold');
  }
  public set dnsCacheAgeMinThreshold(value: number) {
    this._dnsCacheAgeMinThreshold = value;
  }
  public resetDnsCacheAgeMinThreshold() {
    this._dnsCacheAgeMinThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsCacheAgeMinThresholdInput() {
    return this._dnsCacheAgeMinThreshold;
  }

  // dns_cache_aging_weight - computed: false, optional: true, required: false
  private _dnsCacheAgingWeight?: number; 
  public get dnsCacheAgingWeight() {
    return this.getNumberAttribute('dns_cache_aging_weight');
  }
  public set dnsCacheAgingWeight(value: number) {
    this._dnsCacheAgingWeight = value;
  }
  public resetDnsCacheAgingWeight() {
    this._dnsCacheAgingWeight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsCacheAgingWeightInput() {
    return this._dnsCacheAgingWeight;
  }

  // dns_cache_enable - computed: false, optional: true, required: false
  private _dnsCacheEnable?: number; 
  public get dnsCacheEnable() {
    return this.getNumberAttribute('dns_cache_enable');
  }
  public set dnsCacheEnable(value: number) {
    this._dnsCacheEnable = value;
  }
  public resetDnsCacheEnable() {
    this._dnsCacheEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsCacheEnableInput() {
    return this._dnsCacheEnable;
  }

  // dns_cache_entry_size - computed: false, optional: true, required: false
  private _dnsCacheEntrySize?: number; 
  public get dnsCacheEntrySize() {
    return this.getNumberAttribute('dns_cache_entry_size');
  }
  public set dnsCacheEntrySize(value: number) {
    this._dnsCacheEntrySize = value;
  }
  public resetDnsCacheEntrySize() {
    this._dnsCacheEntrySize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsCacheEntrySizeInput() {
    return this._dnsCacheEntrySize;
  }

  // dns_cache_sync - computed: false, optional: true, required: false
  private _dnsCacheSync?: number; 
  public get dnsCacheSync() {
    return this.getNumberAttribute('dns_cache_sync');
  }
  public set dnsCacheSync(value: number) {
    this._dnsCacheSync = value;
  }
  public resetDnsCacheSync() {
    this._dnsCacheSync = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsCacheSyncInput() {
    return this._dnsCacheSync;
  }

  // dns_cache_sync_entry_size - computed: false, optional: true, required: false
  private _dnsCacheSyncEntrySize?: number; 
  public get dnsCacheSyncEntrySize() {
    return this.getNumberAttribute('dns_cache_sync_entry_size');
  }
  public set dnsCacheSyncEntrySize(value: number) {
    this._dnsCacheSyncEntrySize = value;
  }
  public resetDnsCacheSyncEntrySize() {
    this._dnsCacheSyncEntrySize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsCacheSyncEntrySizeInput() {
    return this._dnsCacheSyncEntrySize;
  }

  // dns_cache_sync_ttl_threshold - computed: false, optional: true, required: false
  private _dnsCacheSyncTtlThreshold?: number; 
  public get dnsCacheSyncTtlThreshold() {
    return this.getNumberAttribute('dns_cache_sync_ttl_threshold');
  }
  public set dnsCacheSyncTtlThreshold(value: number) {
    this._dnsCacheSyncTtlThreshold = value;
  }
  public resetDnsCacheSyncTtlThreshold() {
    this._dnsCacheSyncTtlThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsCacheSyncTtlThresholdInput() {
    return this._dnsCacheSyncTtlThreshold;
  }

  // dns_cache_ttl_adjustment_enable - computed: false, optional: true, required: false
  private _dnsCacheTtlAdjustmentEnable?: number; 
  public get dnsCacheTtlAdjustmentEnable() {
    return this.getNumberAttribute('dns_cache_ttl_adjustment_enable');
  }
  public set dnsCacheTtlAdjustmentEnable(value: number) {
    this._dnsCacheTtlAdjustmentEnable = value;
  }
  public resetDnsCacheTtlAdjustmentEnable() {
    this._dnsCacheTtlAdjustmentEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsCacheTtlAdjustmentEnableInput() {
    return this._dnsCacheTtlAdjustmentEnable;
  }

  // dns_negative_cache_enable - computed: false, optional: true, required: false
  private _dnsNegativeCacheEnable?: number; 
  public get dnsNegativeCacheEnable() {
    return this.getNumberAttribute('dns_negative_cache_enable');
  }
  public set dnsNegativeCacheEnable(value: number) {
    this._dnsNegativeCacheEnable = value;
  }
  public resetDnsNegativeCacheEnable() {
    this._dnsNegativeCacheEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsNegativeCacheEnableInput() {
    return this._dnsNegativeCacheEnable;
  }

  // dns_persistent_cache_enable - computed: false, optional: true, required: false
  private _dnsPersistentCacheEnable?: number; 
  public get dnsPersistentCacheEnable() {
    return this.getNumberAttribute('dns_persistent_cache_enable');
  }
  public set dnsPersistentCacheEnable(value: number) {
    this._dnsPersistentCacheEnable = value;
  }
  public resetDnsPersistentCacheEnable() {
    this._dnsPersistentCacheEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsPersistentCacheEnableInput() {
    return this._dnsPersistentCacheEnable;
  }

  // dns_persistent_cache_hit_threshold - computed: false, optional: true, required: false
  private _dnsPersistentCacheHitThreshold?: number; 
  public get dnsPersistentCacheHitThreshold() {
    return this.getNumberAttribute('dns_persistent_cache_hit_threshold');
  }
  public set dnsPersistentCacheHitThreshold(value: number) {
    this._dnsPersistentCacheHitThreshold = value;
  }
  public resetDnsPersistentCacheHitThreshold() {
    this._dnsPersistentCacheHitThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsPersistentCacheHitThresholdInput() {
    return this._dnsPersistentCacheHitThreshold;
  }

  // dns_persistent_cache_ttl_threshold - computed: false, optional: true, required: false
  private _dnsPersistentCacheTtlThreshold?: number; 
  public get dnsPersistentCacheTtlThreshold() {
    return this.getNumberAttribute('dns_persistent_cache_ttl_threshold');
  }
  public set dnsPersistentCacheTtlThreshold(value: number) {
    this._dnsPersistentCacheTtlThreshold = value;
  }
  public resetDnsPersistentCacheTtlThreshold() {
    this._dnsPersistentCacheTtlThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsPersistentCacheTtlThresholdInput() {
    return this._dnsPersistentCacheTtlThreshold;
  }

  // dns_vip_stateless - computed: false, optional: true, required: false
  private _dnsVipStateless?: number; 
  public get dnsVipStateless() {
    return this.getNumberAttribute('dns_vip_stateless');
  }
  public set dnsVipStateless(value: number) {
    this._dnsVipStateless = value;
  }
  public resetDnsVipStateless() {
    this._dnsVipStateless = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsVipStatelessInput() {
    return this._dnsVipStateless;
  }

  // drop_icmp_to_vip_when_vip_down - computed: false, optional: true, required: false
  private _dropIcmpToVipWhenVipDown?: number; 
  public get dropIcmpToVipWhenVipDown() {
    return this.getNumberAttribute('drop_icmp_to_vip_when_vip_down');
  }
  public set dropIcmpToVipWhenVipDown(value: number) {
    this._dropIcmpToVipWhenVipDown = value;
  }
  public resetDropIcmpToVipWhenVipDown() {
    this._dropIcmpToVipWhenVipDown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropIcmpToVipWhenVipDownInput() {
    return this._dropIcmpToVipWhenVipDown;
  }

  // dsr_health_check_enable - computed: false, optional: true, required: false
  private _dsrHealthCheckEnable?: number; 
  public get dsrHealthCheckEnable() {
    return this.getNumberAttribute('dsr_health_check_enable');
  }
  public set dsrHealthCheckEnable(value: number) {
    this._dsrHealthCheckEnable = value;
  }
  public resetDsrHealthCheckEnable() {
    this._dsrHealthCheckEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dsrHealthCheckEnableInput() {
    return this._dsrHealthCheckEnable;
  }

  // ecmp_hash - computed: false, optional: true, required: false
  private _ecmpHash?: string; 
  public get ecmpHash() {
    return this.getStringAttribute('ecmp_hash');
  }
  public set ecmpHash(value: string) {
    this._ecmpHash = value;
  }
  public resetEcmpHash() {
    this._ecmpHash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecmpHashInput() {
    return this._ecmpHash;
  }

  // enable_ddos - computed: false, optional: true, required: false
  private _enableDdos?: number; 
  public get enableDdos() {
    return this.getNumberAttribute('enable_ddos');
  }
  public set enableDdos(value: number) {
    this._enableDdos = value;
  }
  public resetEnableDdos() {
    this._enableDdos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDdosInput() {
    return this._enableDdos;
  }

  // enable_fast_path_rerouting - computed: false, optional: true, required: false
  private _enableFastPathRerouting?: number; 
  public get enableFastPathRerouting() {
    return this.getNumberAttribute('enable_fast_path_rerouting');
  }
  public set enableFastPathRerouting(value: number) {
    this._enableFastPathRerouting = value;
  }
  public resetEnableFastPathRerouting() {
    this._enableFastPathRerouting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableFastPathReroutingInput() {
    return this._enableFastPathRerouting;
  }

  // enable_l7_req_acct - computed: false, optional: true, required: false
  private _enableL7ReqAcct?: number; 
  public get enableL7ReqAcct() {
    return this.getNumberAttribute('enable_l7_req_acct');
  }
  public set enableL7ReqAcct(value: number) {
    this._enableL7ReqAcct = value;
  }
  public resetEnableL7ReqAcct() {
    this._enableL7ReqAcct = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableL7ReqAcctInput() {
    return this._enableL7ReqAcct;
  }

  // entity - computed: false, optional: true, required: false
  private _entity?: string; 
  public get entity() {
    return this.getStringAttribute('entity');
  }
  public set entity(value: string) {
    this._entity = value;
  }
  public resetEntity() {
    this._entity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityInput() {
    return this._entity;
  }

  // exclude_destination - computed: false, optional: true, required: false
  private _excludeDestination?: string; 
  public get excludeDestination() {
    return this.getStringAttribute('exclude_destination');
  }
  public set excludeDestination(value: string) {
    this._excludeDestination = value;
  }
  public resetExcludeDestination() {
    this._excludeDestination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeDestinationInput() {
    return this._excludeDestination;
  }

  // extended_stats - computed: false, optional: true, required: false
  private _extendedStats?: number; 
  public get extendedStats() {
    return this.getNumberAttribute('extended_stats');
  }
  public set extendedStats(value: number) {
    this._extendedStats = value;
  }
  public resetExtendedStats() {
    this._extendedStats = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendedStatsInput() {
    return this._extendedStats;
  }

  // fast_path_disable - computed: false, optional: true, required: false
  private _fastPathDisable?: number; 
  public get fastPathDisable() {
    return this.getNumberAttribute('fast_path_disable');
  }
  public set fastPathDisable(value: number) {
    this._fastPathDisable = value;
  }
  public resetFastPathDisable() {
    this._fastPathDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fastPathDisableInput() {
    return this._fastPathDisable;
  }

  // gateway_health_check - computed: false, optional: true, required: false
  private _gatewayHealthCheck?: number; 
  public get gatewayHealthCheck() {
    return this.getNumberAttribute('gateway_health_check');
  }
  public set gatewayHealthCheck(value: number) {
    this._gatewayHealthCheck = value;
  }
  public resetGatewayHealthCheck() {
    this._gatewayHealthCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayHealthCheckInput() {
    return this._gatewayHealthCheck;
  }

  // graceful_shutdown - computed: false, optional: true, required: false
  private _gracefulShutdown?: number; 
  public get gracefulShutdown() {
    return this.getNumberAttribute('graceful_shutdown');
  }
  public set gracefulShutdown(value: number) {
    this._gracefulShutdown = value;
  }
  public resetGracefulShutdown() {
    this._gracefulShutdown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gracefulShutdownInput() {
    return this._gracefulShutdown;
  }

  // graceful_shutdown_enable - computed: false, optional: true, required: false
  private _gracefulShutdownEnable?: number; 
  public get gracefulShutdownEnable() {
    return this.getNumberAttribute('graceful_shutdown_enable');
  }
  public set gracefulShutdownEnable(value: number) {
    this._gracefulShutdownEnable = value;
  }
  public resetGracefulShutdownEnable() {
    this._gracefulShutdownEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gracefulShutdownEnableInput() {
    return this._gracefulShutdownEnable;
  }

  // health_check_to_all_vip - computed: false, optional: true, required: false
  private _healthCheckToAllVip?: number; 
  public get healthCheckToAllVip() {
    return this.getNumberAttribute('health_check_to_all_vip');
  }
  public set healthCheckToAllVip(value: number) {
    this._healthCheckToAllVip = value;
  }
  public resetHealthCheckToAllVip() {
    this._healthCheckToAllVip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckToAllVipInput() {
    return this._healthCheckToAllVip;
  }

  // honor_server_response_ttl - computed: false, optional: true, required: false
  private _honorServerResponseTtl?: number; 
  public get honorServerResponseTtl() {
    return this.getNumberAttribute('honor_server_response_ttl');
  }
  public set honorServerResponseTtl(value: number) {
    this._honorServerResponseTtl = value;
  }
  public resetHonorServerResponseTtl() {
    this._honorServerResponseTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get honorServerResponseTtlInput() {
    return this._honorServerResponseTtl;
  }

  // http_fast_enable - computed: false, optional: true, required: false
  private _httpFastEnable?: number; 
  public get httpFastEnable() {
    return this.getNumberAttribute('http_fast_enable');
  }
  public set httpFastEnable(value: number) {
    this._httpFastEnable = value;
  }
  public resetHttpFastEnable() {
    this._httpFastEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpFastEnableInput() {
    return this._httpFastEnable;
  }

  // hw_compression - computed: false, optional: true, required: false
  private _hwCompression?: number; 
  public get hwCompression() {
    return this.getNumberAttribute('hw_compression');
  }
  public set hwCompression(value: number) {
    this._hwCompression = value;
  }
  public resetHwCompression() {
    this._hwCompression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hwCompressionInput() {
    return this._hwCompression;
  }

  // hw_syn_rr - computed: false, optional: true, required: false
  private _hwSynRr?: number; 
  public get hwSynRr() {
    return this.getNumberAttribute('hw_syn_rr');
  }
  public set hwSynRr(value: number) {
    this._hwSynRr = value;
  }
  public resetHwSynRr() {
    this._hwSynRr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hwSynRrInput() {
    return this._hwSynRr;
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

  // interval - computed: false, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // ipv4_offset - computed: false, optional: true, required: false
  private _ipv4Offset?: number; 
  public get ipv4Offset() {
    return this.getNumberAttribute('ipv4_offset');
  }
  public set ipv4Offset(value: number) {
    this._ipv4Offset = value;
  }
  public resetIpv4Offset() {
    this._ipv4Offset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4OffsetInput() {
    return this._ipv4Offset;
  }

  // ipv6_subnet - computed: false, optional: true, required: false
  private _ipv6Subnet?: number; 
  public get ipv6Subnet() {
    return this.getNumberAttribute('ipv6_subnet');
  }
  public set ipv6Subnet(value: number) {
    this._ipv6Subnet = value;
  }
  public resetIpv6Subnet() {
    this._ipv6Subnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6SubnetInput() {
    return this._ipv6Subnet;
  }

  // l2l3_trunk_lb_disable - computed: false, optional: true, required: false
  private _l2L3TrunkLbDisable?: number; 
  public get l2L3TrunkLbDisable() {
    return this.getNumberAttribute('l2l3_trunk_lb_disable');
  }
  public set l2L3TrunkLbDisable(value: number) {
    this._l2L3TrunkLbDisable = value;
  }
  public resetL2L3TrunkLbDisable() {
    this._l2L3TrunkLbDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l2L3TrunkLbDisableInput() {
    return this._l2L3TrunkLbDisable;
  }

  // log_for_reset_unknown_conn - computed: false, optional: true, required: false
  private _logForResetUnknownConn?: number; 
  public get logForResetUnknownConn() {
    return this.getNumberAttribute('log_for_reset_unknown_conn');
  }
  public set logForResetUnknownConn(value: number) {
    this._logForResetUnknownConn = value;
  }
  public resetLogForResetUnknownConn() {
    this._logForResetUnknownConn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logForResetUnknownConnInput() {
    return this._logForResetUnknownConn;
  }

  // low_latency - computed: false, optional: true, required: false
  private _lowLatency?: number; 
  public get lowLatency() {
    return this.getNumberAttribute('low_latency');
  }
  public set lowLatency(value: number) {
    this._lowLatency = value;
  }
  public resetLowLatency() {
    this._lowLatency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lowLatencyInput() {
    return this._lowLatency;
  }

  // max_buff_queued_per_conn - computed: false, optional: true, required: false
  private _maxBuffQueuedPerConn?: number; 
  public get maxBuffQueuedPerConn() {
    return this.getNumberAttribute('max_buff_queued_per_conn');
  }
  public set maxBuffQueuedPerConn(value: number) {
    this._maxBuffQueuedPerConn = value;
  }
  public resetMaxBuffQueuedPerConn() {
    this._maxBuffQueuedPerConn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBuffQueuedPerConnInput() {
    return this._maxBuffQueuedPerConn;
  }

  // max_http_header_count - computed: false, optional: true, required: false
  private _maxHttpHeaderCount?: number; 
  public get maxHttpHeaderCount() {
    return this.getNumberAttribute('max_http_header_count');
  }
  public set maxHttpHeaderCount(value: number) {
    this._maxHttpHeaderCount = value;
  }
  public resetMaxHttpHeaderCount() {
    this._maxHttpHeaderCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxHttpHeaderCountInput() {
    return this._maxHttpHeaderCount;
  }

  // max_local_rate - computed: false, optional: true, required: false
  private _maxLocalRate?: number; 
  public get maxLocalRate() {
    return this.getNumberAttribute('max_local_rate');
  }
  public set maxLocalRate(value: number) {
    this._maxLocalRate = value;
  }
  public resetMaxLocalRate() {
    this._maxLocalRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLocalRateInput() {
    return this._maxLocalRate;
  }

  // max_persistent_cache - computed: false, optional: true, required: false
  private _maxPersistentCache?: number; 
  public get maxPersistentCache() {
    return this.getNumberAttribute('max_persistent_cache');
  }
  public set maxPersistentCache(value: number) {
    this._maxPersistentCache = value;
  }
  public resetMaxPersistentCache() {
    this._maxPersistentCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPersistentCacheInput() {
    return this._maxPersistentCache;
  }

  // max_remote_rate - computed: false, optional: true, required: false
  private _maxRemoteRate?: number; 
  public get maxRemoteRate() {
    return this.getNumberAttribute('max_remote_rate');
  }
  public set maxRemoteRate(value: number) {
    this._maxRemoteRate = value;
  }
  public resetMaxRemoteRate() {
    this._maxRemoteRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRemoteRateInput() {
    return this._maxRemoteRate;
  }

  // monitor_mode_enable - computed: false, optional: true, required: false
  private _monitorModeEnable?: number; 
  public get monitorModeEnable() {
    return this.getNumberAttribute('monitor_mode_enable');
  }
  public set monitorModeEnable(value: number) {
    this._monitorModeEnable = value;
  }
  public resetMonitorModeEnable() {
    this._monitorModeEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorModeEnableInput() {
    return this._monitorModeEnable;
  }

  // msl_time - computed: false, optional: true, required: false
  private _mslTime?: number; 
  public get mslTime() {
    return this.getNumberAttribute('msl_time');
  }
  public set mslTime(value: number) {
    this._mslTime = value;
  }
  public resetMslTime() {
    this._mslTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mslTimeInput() {
    return this._mslTime;
  }

  // mss_table - computed: false, optional: true, required: false
  private _mssTable?: number; 
  public get mssTable() {
    return this.getNumberAttribute('mss_table');
  }
  public set mssTable(value: number) {
    this._mssTable = value;
  }
  public resetMssTable() {
    this._mssTable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mssTableInput() {
    return this._mssTable;
  }

  // multi_cpu - computed: false, optional: true, required: false
  private _multiCpu?: number; 
  public get multiCpu() {
    return this.getNumberAttribute('multi_cpu');
  }
  public set multiCpu(value: number) {
    this._multiCpu = value;
  }
  public resetMultiCpu() {
    this._multiCpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiCpuInput() {
    return this._multiCpu;
  }

  // n5_new - computed: false, optional: true, required: false
  private _n5New?: number; 
  public get n5New() {
    return this.getNumberAttribute('n5_new');
  }
  public set n5New(value: number) {
    this._n5New = value;
  }
  public resetN5New() {
    this._n5New = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get n5NewInput() {
    return this._n5New;
  }

  // n5_old - computed: false, optional: true, required: false
  private _n5Old?: number; 
  public get n5Old() {
    return this.getNumberAttribute('n5_old');
  }
  public set n5Old(value: number) {
    this._n5Old = value;
  }
  public resetN5Old() {
    this._n5Old = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get n5OldInput() {
    return this._n5Old;
  }

  // ngwaf_proxy_ipv4 - computed: false, optional: true, required: false
  private _ngwafProxyIpv4?: string; 
  public get ngwafProxyIpv4() {
    return this.getStringAttribute('ngwaf_proxy_ipv4');
  }
  public set ngwafProxyIpv4(value: string) {
    this._ngwafProxyIpv4 = value;
  }
  public resetNgwafProxyIpv4() {
    this._ngwafProxyIpv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ngwafProxyIpv4Input() {
    return this._ngwafProxyIpv4;
  }

  // ngwaf_proxy_ipv6 - computed: false, optional: true, required: false
  private _ngwafProxyIpv6?: string; 
  public get ngwafProxyIpv6() {
    return this.getStringAttribute('ngwaf_proxy_ipv6');
  }
  public set ngwafProxyIpv6(value: string) {
    this._ngwafProxyIpv6 = value;
  }
  public resetNgwafProxyIpv6() {
    this._ngwafProxyIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ngwafProxyIpv6Input() {
    return this._ngwafProxyIpv6;
  }

  // ngwaf_proxy_port - computed: false, optional: true, required: false
  private _ngwafProxyPort?: number; 
  public get ngwafProxyPort() {
    return this.getNumberAttribute('ngwaf_proxy_port');
  }
  public set ngwafProxyPort(value: number) {
    this._ngwafProxyPort = value;
  }
  public resetNgwafProxyPort() {
    this._ngwafProxyPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ngwafProxyPortInput() {
    return this._ngwafProxyPort;
  }

  // no_auto_up_on_aflex - computed: false, optional: true, required: false
  private _noAutoUpOnAflex?: number; 
  public get noAutoUpOnAflex() {
    return this.getNumberAttribute('no_auto_up_on_aflex');
  }
  public set noAutoUpOnAflex(value: number) {
    this._noAutoUpOnAflex = value;
  }
  public resetNoAutoUpOnAflex() {
    this._noAutoUpOnAflex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noAutoUpOnAflexInput() {
    return this._noAutoUpOnAflex;
  }

  // odd_even_nat_enable - computed: false, optional: true, required: false
  private _oddEvenNatEnable?: number; 
  public get oddEvenNatEnable() {
    return this.getNumberAttribute('odd_even_nat_enable');
  }
  public set oddEvenNatEnable(value: number) {
    this._oddEvenNatEnable = value;
  }
  public resetOddEvenNatEnable() {
    this._oddEvenNatEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oddEvenNatEnableInput() {
    return this._oddEvenNatEnable;
  }

  // one_server_conn_hm_rate - computed: false, optional: true, required: false
  private _oneServerConnHmRate?: number; 
  public get oneServerConnHmRate() {
    return this.getNumberAttribute('one_server_conn_hm_rate');
  }
  public set oneServerConnHmRate(value: number) {
    this._oneServerConnHmRate = value;
  }
  public resetOneServerConnHmRate() {
    this._oneServerConnHmRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oneServerConnHmRateInput() {
    return this._oneServerConnHmRate;
  }

  // override_port - computed: false, optional: true, required: false
  private _overridePort?: number; 
  public get overridePort() {
    return this.getNumberAttribute('override_port');
  }
  public set overridePort(value: number) {
    this._overridePort = value;
  }
  public resetOverridePort() {
    this._overridePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overridePortInput() {
    return this._overridePort;
  }

  // pbslb_entry_age - computed: false, optional: true, required: false
  private _pbslbEntryAge?: number; 
  public get pbslbEntryAge() {
    return this.getNumberAttribute('pbslb_entry_age');
  }
  public set pbslbEntryAge(value: number) {
    this._pbslbEntryAge = value;
  }
  public resetPbslbEntryAge() {
    this._pbslbEntryAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pbslbEntryAgeInput() {
    return this._pbslbEntryAge;
  }

  // pbslb_overflow_glid - computed: false, optional: true, required: false
  private _pbslbOverflowGlid?: string; 
  public get pbslbOverflowGlid() {
    return this.getStringAttribute('pbslb_overflow_glid');
  }
  public set pbslbOverflowGlid(value: string) {
    this._pbslbOverflowGlid = value;
  }
  public resetPbslbOverflowGlid() {
    this._pbslbOverflowGlid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pbslbOverflowGlidInput() {
    return this._pbslbOverflowGlid;
  }

  // per_thr_percent - computed: false, optional: true, required: false
  private _perThrPercent?: number; 
  public get perThrPercent() {
    return this.getNumberAttribute('per_thr_percent');
  }
  public set perThrPercent(value: number) {
    this._perThrPercent = value;
  }
  public resetPerThrPercent() {
    this._perThrPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perThrPercentInput() {
    return this._perThrPercent;
  }

  // ping_sweep_detection - computed: false, optional: true, required: false
  private _pingSweepDetection?: string; 
  public get pingSweepDetection() {
    return this.getStringAttribute('ping_sweep_detection');
  }
  public set pingSweepDetection(value: string) {
    this._pingSweepDetection = value;
  }
  public resetPingSweepDetection() {
    this._pingSweepDetection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pingSweepDetectionInput() {
    return this._pingSweepDetection;
  }

  // pkt_rate_for_reset_unknown_conn - computed: false, optional: true, required: false
  private _pktRateForResetUnknownConn?: number; 
  public get pktRateForResetUnknownConn() {
    return this.getNumberAttribute('pkt_rate_for_reset_unknown_conn');
  }
  public set pktRateForResetUnknownConn(value: number) {
    this._pktRateForResetUnknownConn = value;
  }
  public resetPktRateForResetUnknownConn() {
    this._pktRateForResetUnknownConn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pktRateForResetUnknownConnInput() {
    return this._pktRateForResetUnknownConn;
  }

  // player_id_check_enable - computed: false, optional: true, required: false
  private _playerIdCheckEnable?: number; 
  public get playerIdCheckEnable() {
    return this.getNumberAttribute('player_id_check_enable');
  }
  public set playerIdCheckEnable(value: number) {
    this._playerIdCheckEnable = value;
  }
  public resetPlayerIdCheckEnable() {
    this._playerIdCheckEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get playerIdCheckEnableInput() {
    return this._playerIdCheckEnable;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // port_scan_detection - computed: false, optional: true, required: false
  private _portScanDetection?: string; 
  public get portScanDetection() {
    return this.getStringAttribute('port_scan_detection');
  }
  public set portScanDetection(value: string) {
    this._portScanDetection = value;
  }
  public resetPortScanDetection() {
    this._portScanDetection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portScanDetectionInput() {
    return this._portScanDetection;
  }

  // pre_process_enable - computed: false, optional: true, required: false
  private _preProcessEnable?: number; 
  public get preProcessEnable() {
    return this.getNumberAttribute('pre_process_enable');
  }
  public set preProcessEnable(value: number) {
    this._preProcessEnable = value;
  }
  public resetPreProcessEnable() {
    this._preProcessEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preProcessEnableInput() {
    return this._preProcessEnable;
  }

  // qat - computed: false, optional: true, required: false
  private _qat?: number; 
  public get qat() {
    return this.getNumberAttribute('qat');
  }
  public set qat(value: number) {
    this._qat = value;
  }
  public resetQat() {
    this._qat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qatInput() {
    return this._qat;
  }

  // range - computed: false, optional: true, required: false
  private _range?: number; 
  public get range() {
    return this.getNumberAttribute('range');
  }
  public set range(value: number) {
    this._range = value;
  }
  public resetRange() {
    this._range = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeInput() {
    return this._range;
  }

  // range_end - computed: false, optional: true, required: false
  private _rangeEnd?: number; 
  public get rangeEnd() {
    return this.getNumberAttribute('range_end');
  }
  public set rangeEnd(value: number) {
    this._rangeEnd = value;
  }
  public resetRangeEnd() {
    this._rangeEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeEndInput() {
    return this._rangeEnd;
  }

  // range_start - computed: false, optional: true, required: false
  private _rangeStart?: number; 
  public get rangeStart() {
    return this.getNumberAttribute('range_start');
  }
  public set rangeStart(value: number) {
    this._rangeStart = value;
  }
  public resetRangeStart() {
    this._rangeStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeStartInput() {
    return this._rangeStart;
  }

  // rate_limit_logging - computed: false, optional: true, required: false
  private _rateLimitLogging?: number; 
  public get rateLimitLogging() {
    return this.getNumberAttribute('rate_limit_logging');
  }
  public set rateLimitLogging(value: number) {
    this._rateLimitLogging = value;
  }
  public resetRateLimitLogging() {
    this._rateLimitLogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitLoggingInput() {
    return this._rateLimitLogging;
  }

  // recursive_ns_cache - computed: false, optional: true, required: false
  private _recursiveNsCache?: string; 
  public get recursiveNsCache() {
    return this.getStringAttribute('recursive_ns_cache');
  }
  public set recursiveNsCache(value: string) {
    this._recursiveNsCache = value;
  }
  public resetRecursiveNsCache() {
    this._recursiveNsCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recursiveNsCacheInput() {
    return this._recursiveNsCache;
  }

  // reset_stale_session - computed: false, optional: true, required: false
  private _resetStaleSession?: number; 
  public get resetStaleSession() {
    return this.getNumberAttribute('reset_stale_session');
  }
  public set resetStaleSession(value: number) {
    this._resetStaleSession = value;
  }
  public resetResetStaleSession() {
    this._resetStaleSession = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resetStaleSessionInput() {
    return this._resetStaleSession;
  }

  // resolve_port_conflict - computed: false, optional: true, required: false
  private _resolvePortConflict?: number; 
  public get resolvePortConflict() {
    return this.getNumberAttribute('resolve_port_conflict');
  }
  public set resolvePortConflict(value: number) {
    this._resolvePortConflict = value;
  }
  public resetResolvePortConflict() {
    this._resolvePortConflict = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resolvePortConflictInput() {
    return this._resolvePortConflict;
  }

  // response_type - computed: false, optional: true, required: false
  private _responseType?: string; 
  public get responseType() {
    return this.getStringAttribute('response_type');
  }
  public set responseType(value: string) {
    this._responseType = value;
  }
  public resetResponseType() {
    this._responseType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseTypeInput() {
    return this._responseType;
  }

  // scale_out - computed: false, optional: true, required: false
  private _scaleOut?: number; 
  public get scaleOut() {
    return this.getNumberAttribute('scale_out');
  }
  public set scaleOut(value: number) {
    this._scaleOut = value;
  }
  public resetScaleOut() {
    this._scaleOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleOutInput() {
    return this._scaleOut;
  }

  // scale_out_traffic_map - computed: false, optional: true, required: false
  private _scaleOutTrafficMap?: number; 
  public get scaleOutTrafficMap() {
    return this.getNumberAttribute('scale_out_traffic_map');
  }
  public set scaleOutTrafficMap(value: number) {
    this._scaleOutTrafficMap = value;
  }
  public resetScaleOutTrafficMap() {
    this._scaleOutTrafficMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleOutTrafficMapInput() {
    return this._scaleOutTrafficMap;
  }

  // serverside_ip - computed: false, optional: true, required: false
  private _serversideIp?: string; 
  public get serversideIp() {
    return this.getStringAttribute('serverside_ip');
  }
  public set serversideIp(value: string) {
    this._serversideIp = value;
  }
  public resetServersideIp() {
    this._serversideIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serversideIpInput() {
    return this._serversideIp;
  }

  // serverside_ipv6 - computed: false, optional: true, required: false
  private _serversideIpv6?: string; 
  public get serversideIpv6() {
    return this.getStringAttribute('serverside_ipv6');
  }
  public set serversideIpv6(value: string) {
    this._serversideIpv6 = value;
  }
  public resetServersideIpv6() {
    this._serversideIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serversideIpv6Input() {
    return this._serversideIpv6;
  }

  // service_group_on_no_dest_nat_vports - computed: false, optional: true, required: false
  private _serviceGroupOnNoDestNatVports?: string; 
  public get serviceGroupOnNoDestNatVports() {
    return this.getStringAttribute('service_group_on_no_dest_nat_vports');
  }
  public set serviceGroupOnNoDestNatVports(value: string) {
    this._serviceGroupOnNoDestNatVports = value;
  }
  public resetServiceGroupOnNoDestNatVports() {
    this._serviceGroupOnNoDestNatVports = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceGroupOnNoDestNatVportsInput() {
    return this._serviceGroupOnNoDestNatVports;
  }

  // show_slb_server_legacy_cmd - computed: false, optional: true, required: false
  private _showSlbServerLegacyCmd?: number; 
  public get showSlbServerLegacyCmd() {
    return this.getNumberAttribute('show_slb_server_legacy_cmd');
  }
  public set showSlbServerLegacyCmd(value: number) {
    this._showSlbServerLegacyCmd = value;
  }
  public resetShowSlbServerLegacyCmd() {
    this._showSlbServerLegacyCmd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showSlbServerLegacyCmdInput() {
    return this._showSlbServerLegacyCmd;
  }

  // show_slb_service_group_legacy_cmd - computed: false, optional: true, required: false
  private _showSlbServiceGroupLegacyCmd?: number; 
  public get showSlbServiceGroupLegacyCmd() {
    return this.getNumberAttribute('show_slb_service_group_legacy_cmd');
  }
  public set showSlbServiceGroupLegacyCmd(value: number) {
    this._showSlbServiceGroupLegacyCmd = value;
  }
  public resetShowSlbServiceGroupLegacyCmd() {
    this._showSlbServiceGroupLegacyCmd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showSlbServiceGroupLegacyCmdInput() {
    return this._showSlbServiceGroupLegacyCmd;
  }

  // show_slb_virtual_server_legacy_cmd - computed: false, optional: true, required: false
  private _showSlbVirtualServerLegacyCmd?: number; 
  public get showSlbVirtualServerLegacyCmd() {
    return this.getNumberAttribute('show_slb_virtual_server_legacy_cmd');
  }
  public set showSlbVirtualServerLegacyCmd(value: number) {
    this._showSlbVirtualServerLegacyCmd = value;
  }
  public resetShowSlbVirtualServerLegacyCmd() {
    this._showSlbVirtualServerLegacyCmd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showSlbVirtualServerLegacyCmdInput() {
    return this._showSlbVirtualServerLegacyCmd;
  }

  // snat_gwy_for_l3 - computed: false, optional: true, required: false
  private _snatGwyForL3?: number; 
  public get snatGwyForL3() {
    return this.getNumberAttribute('snat_gwy_for_l3');
  }
  public set snatGwyForL3(value: number) {
    this._snatGwyForL3 = value;
  }
  public resetSnatGwyForL3() {
    this._snatGwyForL3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snatGwyForL3Input() {
    return this._snatGwyForL3;
  }

  // snat_on_vip - computed: false, optional: true, required: false
  private _snatOnVip?: number; 
  public get snatOnVip() {
    return this.getNumberAttribute('snat_on_vip');
  }
  public set snatOnVip(value: number) {
    this._snatOnVip = value;
  }
  public resetSnatOnVip() {
    this._snatOnVip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snatOnVipInput() {
    return this._snatOnVip;
  }

  // software - computed: false, optional: true, required: false
  private _software?: number; 
  public get softwareAttribute() {
    return this.getNumberAttribute('software');
  }
  public set softwareAttribute(value: number) {
    this._software = value;
  }
  public resetSoftwareAttribute() {
    this._software = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get softwareAttributeInput() {
    return this._software;
  }

  // software_tls13 - computed: false, optional: true, required: false
  private _softwareTls13?: number; 
  public get softwareTls13() {
    return this.getNumberAttribute('software_tls13');
  }
  public set softwareTls13(value: number) {
    this._softwareTls13 = value;
  }
  public resetSoftwareTls13() {
    this._softwareTls13 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get softwareTls13Input() {
    return this._softwareTls13;
  }

  // software_tls13_offload - computed: false, optional: true, required: false
  private _softwareTls13Offload?: number; 
  public get softwareTls13Offload() {
    return this.getNumberAttribute('software_tls13_offload');
  }
  public set softwareTls13Offload(value: number) {
    this._softwareTls13Offload = value;
  }
  public resetSoftwareTls13Offload() {
    this._softwareTls13Offload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get softwareTls13OffloadInput() {
    return this._softwareTls13Offload;
  }

  // sort_res - computed: false, optional: true, required: false
  private _sortRes?: number; 
  public get sortRes() {
    return this.getNumberAttribute('sort_res');
  }
  public set sortRes(value: number) {
    this._sortRes = value;
  }
  public resetSortRes() {
    this._sortRes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortResInput() {
    return this._sortRes;
  }

  // ssl_module_usage_enable - computed: false, optional: true, required: false
  private _sslModuleUsageEnable?: number; 
  public get sslModuleUsageEnable() {
    return this.getNumberAttribute('ssl_module_usage_enable');
  }
  public set sslModuleUsageEnable(value: number) {
    this._sslModuleUsageEnable = value;
  }
  public resetSslModuleUsageEnable() {
    this._sslModuleUsageEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslModuleUsageEnableInput() {
    return this._sslModuleUsageEnable;
  }

  // ssl_n5_delay_tx_enable - computed: false, optional: true, required: false
  private _sslN5DelayTxEnable?: number; 
  public get sslN5DelayTxEnable() {
    return this.getNumberAttribute('ssl_n5_delay_tx_enable');
  }
  public set sslN5DelayTxEnable(value: number) {
    this._sslN5DelayTxEnable = value;
  }
  public resetSslN5DelayTxEnable() {
    this._sslN5DelayTxEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslN5DelayTxEnableInput() {
    return this._sslN5DelayTxEnable;
  }

  // ssli_cert_not_ready_inspect_limit - computed: false, optional: true, required: false
  private _ssliCertNotReadyInspectLimit?: number; 
  public get ssliCertNotReadyInspectLimit() {
    return this.getNumberAttribute('ssli_cert_not_ready_inspect_limit');
  }
  public set ssliCertNotReadyInspectLimit(value: number) {
    this._ssliCertNotReadyInspectLimit = value;
  }
  public resetSsliCertNotReadyInspectLimit() {
    this._ssliCertNotReadyInspectLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssliCertNotReadyInspectLimitInput() {
    return this._ssliCertNotReadyInspectLimit;
  }

  // ssli_cert_not_ready_inspect_timeout - computed: false, optional: true, required: false
  private _ssliCertNotReadyInspectTimeout?: number; 
  public get ssliCertNotReadyInspectTimeout() {
    return this.getNumberAttribute('ssli_cert_not_ready_inspect_timeout');
  }
  public set ssliCertNotReadyInspectTimeout(value: number) {
    this._ssliCertNotReadyInspectTimeout = value;
  }
  public resetSsliCertNotReadyInspectTimeout() {
    this._ssliCertNotReadyInspectTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssliCertNotReadyInspectTimeoutInput() {
    return this._ssliCertNotReadyInspectTimeout;
  }

  // ssli_silent_termination_enable - computed: false, optional: true, required: false
  private _ssliSilentTerminationEnable?: number; 
  public get ssliSilentTerminationEnable() {
    return this.getNumberAttribute('ssli_silent_termination_enable');
  }
  public set ssliSilentTerminationEnable(value: number) {
    this._ssliSilentTerminationEnable = value;
  }
  public resetSsliSilentTerminationEnable() {
    this._ssliSilentTerminationEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssliSilentTerminationEnableInput() {
    return this._ssliSilentTerminationEnable;
  }

  // ssli_sni_hash_enable - computed: false, optional: true, required: false
  private _ssliSniHashEnable?: number; 
  public get ssliSniHashEnable() {
    return this.getNumberAttribute('ssli_sni_hash_enable');
  }
  public set ssliSniHashEnable(value: number) {
    this._ssliSniHashEnable = value;
  }
  public resetSsliSniHashEnable() {
    this._ssliSniHashEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssliSniHashEnableInput() {
    return this._ssliSniHashEnable;
  }

  // stateless_sg_multi_binding - computed: false, optional: true, required: false
  private _statelessSgMultiBinding?: number; 
  public get statelessSgMultiBinding() {
    return this.getNumberAttribute('stateless_sg_multi_binding');
  }
  public set statelessSgMultiBinding(value: number) {
    this._statelessSgMultiBinding = value;
  }
  public resetStatelessSgMultiBinding() {
    this._statelessSgMultiBinding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statelessSgMultiBindingInput() {
    return this._statelessSgMultiBinding;
  }

  // stats_data_disable - computed: false, optional: true, required: false
  private _statsDataDisable?: number; 
  public get statsDataDisable() {
    return this.getNumberAttribute('stats_data_disable');
  }
  public set statsDataDisable(value: number) {
    this._statsDataDisable = value;
  }
  public resetStatsDataDisable() {
    this._statsDataDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statsDataDisableInput() {
    return this._statsDataDisable;
  }

  // substitute_source_mac - computed: false, optional: true, required: false
  private _substituteSourceMac?: number; 
  public get substituteSourceMac() {
    return this.getNumberAttribute('substitute_source_mac');
  }
  public set substituteSourceMac(value: number) {
    this._substituteSourceMac = value;
  }
  public resetSubstituteSourceMac() {
    this._substituteSourceMac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get substituteSourceMacInput() {
    return this._substituteSourceMac;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // traffic_map_type - computed: false, optional: true, required: false
  private _trafficMapType?: string; 
  public get trafficMapType() {
    return this.getStringAttribute('traffic_map_type');
  }
  public set trafficMapType(value: string) {
    this._trafficMapType = value;
  }
  public resetTrafficMapType() {
    this._trafficMapType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficMapTypeInput() {
    return this._trafficMapType;
  }

  // ttl_threshold - computed: false, optional: true, required: false
  private _ttlThreshold?: number; 
  public get ttlThreshold() {
    return this.getNumberAttribute('ttl_threshold');
  }
  public set ttlThreshold(value: number) {
    this._ttlThreshold = value;
  }
  public resetTtlThreshold() {
    this._ttlThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlThresholdInput() {
    return this._ttlThreshold;
  }

  // use_default_sess_count - computed: false, optional: true, required: false
  private _useDefaultSessCount?: number; 
  public get useDefaultSessCount() {
    return this.getNumberAttribute('use_default_sess_count');
  }
  public set useDefaultSessCount(value: number) {
    this._useDefaultSessCount = value;
  }
  public resetUseDefaultSessCount() {
    this._useDefaultSessCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useDefaultSessCountInput() {
    return this._useDefaultSessCount;
  }

  // use_https_proxy - computed: false, optional: true, required: false
  private _useHttpsProxy?: number; 
  public get useHttpsProxy() {
    return this.getNumberAttribute('use_https_proxy');
  }
  public set useHttpsProxy(value: number) {
    this._useHttpsProxy = value;
  }
  public resetUseHttpsProxy() {
    this._useHttpsProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useHttpsProxyInput() {
    return this._useHttpsProxy;
  }

  // use_mgmt_port - computed: false, optional: true, required: false
  private _useMgmtPort?: number; 
  public get useMgmtPort() {
    return this.getNumberAttribute('use_mgmt_port');
  }
  public set useMgmtPort(value: number) {
    this._useMgmtPort = value;
  }
  public resetUseMgmtPort() {
    this._useMgmtPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useMgmtPortInput() {
    return this._useMgmtPort;
  }

  // use_mss_tab - computed: false, optional: true, required: false
  private _useMssTab?: number; 
  public get useMssTab() {
    return this.getNumberAttribute('use_mss_tab');
  }
  public set useMssTab(value: number) {
    this._useMssTab = value;
  }
  public resetUseMssTab() {
    this._useMssTab = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useMssTabInput() {
    return this._useMssTab;
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

  // vport_global - computed: false, optional: true, required: false
  private _vportGlobal?: number; 
  public get vportGlobal() {
    return this.getNumberAttribute('vport_global');
  }
  public set vportGlobal(value: number) {
    this._vportGlobal = value;
  }
  public resetVportGlobal() {
    this._vportGlobal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vportGlobalInput() {
    return this._vportGlobal;
  }

  // vport_l3v - computed: false, optional: true, required: false
  private _vportL3V?: number; 
  public get vportL3V() {
    return this.getNumberAttribute('vport_l3v');
  }
  public set vportL3V(value: number) {
    this._vportL3V = value;
  }
  public resetVportL3V() {
    this._vportL3V = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vportL3VInput() {
    return this._vportL3V;
  }

  // aflex_table_entry_sync - computed: false, optional: true, required: false
  private _aflexTableEntrySync = new SlbCommonAflexTableEntrySyncOutputReference(this, "aflex_table_entry_sync");
  public get aflexTableEntrySync() {
    return this._aflexTableEntrySync;
  }
  public putAflexTableEntrySync(value: SlbCommonAflexTableEntrySync) {
    this._aflexTableEntrySync.internalValue = value;
  }
  public resetAflexTableEntrySync() {
    this._aflexTableEntrySync.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aflexTableEntrySyncInput() {
    return this._aflexTableEntrySync.internalValue;
  }

  // cert_pinning - computed: false, optional: true, required: false
  private _certPinning = new SlbCommonCertPinningOutputReference(this, "cert_pinning");
  public get certPinning() {
    return this._certPinning;
  }
  public putCertPinning(value: SlbCommonCertPinning) {
    this._certPinning.internalValue = value;
  }
  public resetCertPinning() {
    this._certPinning.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certPinningInput() {
    return this._certPinning.internalValue;
  }

  // conn_rate_limit - computed: false, optional: true, required: false
  private _connRateLimit = new SlbCommonConnRateLimitOutputReference(this, "conn_rate_limit");
  public get connRateLimit() {
    return this._connRateLimit;
  }
  public putConnRateLimit(value: SlbCommonConnRateLimit) {
    this._connRateLimit.internalValue = value;
  }
  public resetConnRateLimit() {
    this._connRateLimit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connRateLimitInput() {
    return this._connRateLimit.internalValue;
  }

  // ddos_protection - computed: false, optional: true, required: false
  private _ddosProtection = new SlbCommonDdosProtectionOutputReference(this, "ddos_protection");
  public get ddosProtection() {
    return this._ddosProtection;
  }
  public putDdosProtection(value: SlbCommonDdosProtection) {
    this._ddosProtection.internalValue = value;
  }
  public resetDdosProtection() {
    this._ddosProtection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddosProtectionInput() {
    return this._ddosProtection.internalValue;
  }

  // dns_response_rate_limiting - computed: false, optional: true, required: false
  private _dnsResponseRateLimiting = new SlbCommonDnsResponseRateLimitingOutputReference(this, "dns_response_rate_limiting");
  public get dnsResponseRateLimiting() {
    return this._dnsResponseRateLimiting;
  }
  public putDnsResponseRateLimiting(value: SlbCommonDnsResponseRateLimiting) {
    this._dnsResponseRateLimiting.internalValue = value;
  }
  public resetDnsResponseRateLimiting() {
    this._dnsResponseRateLimiting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsResponseRateLimitingInput() {
    return this._dnsResponseRateLimiting.internalValue;
  }

  // quic - computed: false, optional: true, required: false
  private _quic = new SlbCommonQuicOutputReference(this, "quic");
  public get quic() {
    return this._quic;
  }
  public putQuic(value: SlbCommonQuic) {
    this._quic.internalValue = value;
  }
  public resetQuic() {
    this._quic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quicInput() {
    return this._quic.internalValue;
  }

  // snat_preserve - computed: false, optional: true, required: false
  private _snatPreserve = new SlbCommonSnatPreserveOutputReference(this, "snat_preserve");
  public get snatPreserve() {
    return this._snatPreserve;
  }
  public putSnatPreserve(value: SlbCommonSnatPreserve) {
    this._snatPreserve.internalValue = value;
  }
  public resetSnatPreserve() {
    this._snatPreserve.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snatPreserveInput() {
    return this._snatPreserve.internalValue;
  }

  // ssl_ratelimit_cfg - computed: false, optional: true, required: false
  private _sslRatelimitCfg = new SlbCommonSslRatelimitCfgOutputReference(this, "ssl_ratelimit_cfg");
  public get sslRatelimitCfg() {
    return this._sslRatelimitCfg;
  }
  public putSslRatelimitCfg(value: SlbCommonSslRatelimitCfg) {
    this._sslRatelimitCfg.internalValue = value;
  }
  public resetSslRatelimitCfg() {
    this._sslRatelimitCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslRatelimitCfgInput() {
    return this._sslRatelimitCfg.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aflex_table_entry_aging_interval: cdktf.numberToTerraform(this._aflexTableEntryAgingInterval),
      after_disable: cdktf.numberToTerraform(this._afterDisable),
      allow_in_gateway_mode: cdktf.numberToTerraform(this._allowInGatewayMode),
      attack_resp_code: cdktf.numberToTerraform(this._attackRespCode),
      auto_nat_no_ip_refresh: cdktf.stringToTerraform(this._autoNatNoIpRefresh),
      auto_translate_port: cdktf.numberToTerraform(this._autoTranslatePort),
      buff_thresh: cdktf.numberToTerraform(this._buffThresh),
      buff_thresh_hw_buff: cdktf.numberToTerraform(this._buffThreshHwBuff),
      buff_thresh_relieve_thresh: cdktf.numberToTerraform(this._buffThreshRelieveThresh),
      buff_thresh_sys_buff_high: cdktf.numberToTerraform(this._buffThreshSysBuffHigh),
      buff_thresh_sys_buff_low: cdktf.numberToTerraform(this._buffThreshSysBuffLow),
      cache_expire_time: cdktf.numberToTerraform(this._cacheExpireTime),
      cancel_stream_loop_limit: cdktf.numberToTerraform(this._cancelStreamLoopLimit),
      clientside_ip: cdktf.stringToTerraform(this._clientsideIp),
      clientside_ipv6: cdktf.stringToTerraform(this._clientsideIpv6),
      compress_block_size: cdktf.numberToTerraform(this._compressBlockSize),
      custom_message: cdktf.stringToTerraform(this._customMessage),
      custom_page: cdktf.stringToTerraform(this._customPage),
      custom_signal_clist: cdktf.stringToTerraform(this._customSignalClist),
      ddos_pkt_count_thresh: cdktf.numberToTerraform(this._ddosPktCountThresh),
      ddos_pkt_size_thresh: cdktf.numberToTerraform(this._ddosPktSizeThresh),
      disable_adaptive_resource_check: cdktf.numberToTerraform(this._disableAdaptiveResourceCheck),
      disable_persist_scoring: cdktf.numberToTerraform(this._disablePersistScoring),
      disable_port_masking: cdktf.numberToTerraform(this._disablePortMasking),
      disable_server_auto_reselect: cdktf.numberToTerraform(this._disableServerAutoReselect),
      dns_cache_age: cdktf.numberToTerraform(this._dnsCacheAge),
      dns_cache_age_min_threshold: cdktf.numberToTerraform(this._dnsCacheAgeMinThreshold),
      dns_cache_aging_weight: cdktf.numberToTerraform(this._dnsCacheAgingWeight),
      dns_cache_enable: cdktf.numberToTerraform(this._dnsCacheEnable),
      dns_cache_entry_size: cdktf.numberToTerraform(this._dnsCacheEntrySize),
      dns_cache_sync: cdktf.numberToTerraform(this._dnsCacheSync),
      dns_cache_sync_entry_size: cdktf.numberToTerraform(this._dnsCacheSyncEntrySize),
      dns_cache_sync_ttl_threshold: cdktf.numberToTerraform(this._dnsCacheSyncTtlThreshold),
      dns_cache_ttl_adjustment_enable: cdktf.numberToTerraform(this._dnsCacheTtlAdjustmentEnable),
      dns_negative_cache_enable: cdktf.numberToTerraform(this._dnsNegativeCacheEnable),
      dns_persistent_cache_enable: cdktf.numberToTerraform(this._dnsPersistentCacheEnable),
      dns_persistent_cache_hit_threshold: cdktf.numberToTerraform(this._dnsPersistentCacheHitThreshold),
      dns_persistent_cache_ttl_threshold: cdktf.numberToTerraform(this._dnsPersistentCacheTtlThreshold),
      dns_vip_stateless: cdktf.numberToTerraform(this._dnsVipStateless),
      drop_icmp_to_vip_when_vip_down: cdktf.numberToTerraform(this._dropIcmpToVipWhenVipDown),
      dsr_health_check_enable: cdktf.numberToTerraform(this._dsrHealthCheckEnable),
      ecmp_hash: cdktf.stringToTerraform(this._ecmpHash),
      enable_ddos: cdktf.numberToTerraform(this._enableDdos),
      enable_fast_path_rerouting: cdktf.numberToTerraform(this._enableFastPathRerouting),
      enable_l7_req_acct: cdktf.numberToTerraform(this._enableL7ReqAcct),
      entity: cdktf.stringToTerraform(this._entity),
      exclude_destination: cdktf.stringToTerraform(this._excludeDestination),
      extended_stats: cdktf.numberToTerraform(this._extendedStats),
      fast_path_disable: cdktf.numberToTerraform(this._fastPathDisable),
      gateway_health_check: cdktf.numberToTerraform(this._gatewayHealthCheck),
      graceful_shutdown: cdktf.numberToTerraform(this._gracefulShutdown),
      graceful_shutdown_enable: cdktf.numberToTerraform(this._gracefulShutdownEnable),
      health_check_to_all_vip: cdktf.numberToTerraform(this._healthCheckToAllVip),
      honor_server_response_ttl: cdktf.numberToTerraform(this._honorServerResponseTtl),
      http_fast_enable: cdktf.numberToTerraform(this._httpFastEnable),
      hw_compression: cdktf.numberToTerraform(this._hwCompression),
      hw_syn_rr: cdktf.numberToTerraform(this._hwSynRr),
      id: cdktf.stringToTerraform(this._id),
      interval: cdktf.numberToTerraform(this._interval),
      ipv4_offset: cdktf.numberToTerraform(this._ipv4Offset),
      ipv6_subnet: cdktf.numberToTerraform(this._ipv6Subnet),
      l2l3_trunk_lb_disable: cdktf.numberToTerraform(this._l2L3TrunkLbDisable),
      log_for_reset_unknown_conn: cdktf.numberToTerraform(this._logForResetUnknownConn),
      low_latency: cdktf.numberToTerraform(this._lowLatency),
      max_buff_queued_per_conn: cdktf.numberToTerraform(this._maxBuffQueuedPerConn),
      max_http_header_count: cdktf.numberToTerraform(this._maxHttpHeaderCount),
      max_local_rate: cdktf.numberToTerraform(this._maxLocalRate),
      max_persistent_cache: cdktf.numberToTerraform(this._maxPersistentCache),
      max_remote_rate: cdktf.numberToTerraform(this._maxRemoteRate),
      monitor_mode_enable: cdktf.numberToTerraform(this._monitorModeEnable),
      msl_time: cdktf.numberToTerraform(this._mslTime),
      mss_table: cdktf.numberToTerraform(this._mssTable),
      multi_cpu: cdktf.numberToTerraform(this._multiCpu),
      n5_new: cdktf.numberToTerraform(this._n5New),
      n5_old: cdktf.numberToTerraform(this._n5Old),
      ngwaf_proxy_ipv4: cdktf.stringToTerraform(this._ngwafProxyIpv4),
      ngwaf_proxy_ipv6: cdktf.stringToTerraform(this._ngwafProxyIpv6),
      ngwaf_proxy_port: cdktf.numberToTerraform(this._ngwafProxyPort),
      no_auto_up_on_aflex: cdktf.numberToTerraform(this._noAutoUpOnAflex),
      odd_even_nat_enable: cdktf.numberToTerraform(this._oddEvenNatEnable),
      one_server_conn_hm_rate: cdktf.numberToTerraform(this._oneServerConnHmRate),
      override_port: cdktf.numberToTerraform(this._overridePort),
      pbslb_entry_age: cdktf.numberToTerraform(this._pbslbEntryAge),
      pbslb_overflow_glid: cdktf.stringToTerraform(this._pbslbOverflowGlid),
      per_thr_percent: cdktf.numberToTerraform(this._perThrPercent),
      ping_sweep_detection: cdktf.stringToTerraform(this._pingSweepDetection),
      pkt_rate_for_reset_unknown_conn: cdktf.numberToTerraform(this._pktRateForResetUnknownConn),
      player_id_check_enable: cdktf.numberToTerraform(this._playerIdCheckEnable),
      port: cdktf.numberToTerraform(this._port),
      port_scan_detection: cdktf.stringToTerraform(this._portScanDetection),
      pre_process_enable: cdktf.numberToTerraform(this._preProcessEnable),
      qat: cdktf.numberToTerraform(this._qat),
      range: cdktf.numberToTerraform(this._range),
      range_end: cdktf.numberToTerraform(this._rangeEnd),
      range_start: cdktf.numberToTerraform(this._rangeStart),
      rate_limit_logging: cdktf.numberToTerraform(this._rateLimitLogging),
      recursive_ns_cache: cdktf.stringToTerraform(this._recursiveNsCache),
      reset_stale_session: cdktf.numberToTerraform(this._resetStaleSession),
      resolve_port_conflict: cdktf.numberToTerraform(this._resolvePortConflict),
      response_type: cdktf.stringToTerraform(this._responseType),
      scale_out: cdktf.numberToTerraform(this._scaleOut),
      scale_out_traffic_map: cdktf.numberToTerraform(this._scaleOutTrafficMap),
      serverside_ip: cdktf.stringToTerraform(this._serversideIp),
      serverside_ipv6: cdktf.stringToTerraform(this._serversideIpv6),
      service_group_on_no_dest_nat_vports: cdktf.stringToTerraform(this._serviceGroupOnNoDestNatVports),
      show_slb_server_legacy_cmd: cdktf.numberToTerraform(this._showSlbServerLegacyCmd),
      show_slb_service_group_legacy_cmd: cdktf.numberToTerraform(this._showSlbServiceGroupLegacyCmd),
      show_slb_virtual_server_legacy_cmd: cdktf.numberToTerraform(this._showSlbVirtualServerLegacyCmd),
      snat_gwy_for_l3: cdktf.numberToTerraform(this._snatGwyForL3),
      snat_on_vip: cdktf.numberToTerraform(this._snatOnVip),
      software: cdktf.numberToTerraform(this._software),
      software_tls13: cdktf.numberToTerraform(this._softwareTls13),
      software_tls13_offload: cdktf.numberToTerraform(this._softwareTls13Offload),
      sort_res: cdktf.numberToTerraform(this._sortRes),
      ssl_module_usage_enable: cdktf.numberToTerraform(this._sslModuleUsageEnable),
      ssl_n5_delay_tx_enable: cdktf.numberToTerraform(this._sslN5DelayTxEnable),
      ssli_cert_not_ready_inspect_limit: cdktf.numberToTerraform(this._ssliCertNotReadyInspectLimit),
      ssli_cert_not_ready_inspect_timeout: cdktf.numberToTerraform(this._ssliCertNotReadyInspectTimeout),
      ssli_silent_termination_enable: cdktf.numberToTerraform(this._ssliSilentTerminationEnable),
      ssli_sni_hash_enable: cdktf.numberToTerraform(this._ssliSniHashEnable),
      stateless_sg_multi_binding: cdktf.numberToTerraform(this._statelessSgMultiBinding),
      stats_data_disable: cdktf.numberToTerraform(this._statsDataDisable),
      substitute_source_mac: cdktf.numberToTerraform(this._substituteSourceMac),
      timeout: cdktf.numberToTerraform(this._timeout),
      traffic_map_type: cdktf.stringToTerraform(this._trafficMapType),
      ttl_threshold: cdktf.numberToTerraform(this._ttlThreshold),
      use_default_sess_count: cdktf.numberToTerraform(this._useDefaultSessCount),
      use_https_proxy: cdktf.numberToTerraform(this._useHttpsProxy),
      use_mgmt_port: cdktf.numberToTerraform(this._useMgmtPort),
      use_mss_tab: cdktf.numberToTerraform(this._useMssTab),
      uuid: cdktf.stringToTerraform(this._uuid),
      vport_global: cdktf.numberToTerraform(this._vportGlobal),
      vport_l3v: cdktf.numberToTerraform(this._vportL3V),
      aflex_table_entry_sync: slbCommonAflexTableEntrySyncToTerraform(this._aflexTableEntrySync.internalValue),
      cert_pinning: slbCommonCertPinningToTerraform(this._certPinning.internalValue),
      conn_rate_limit: slbCommonConnRateLimitToTerraform(this._connRateLimit.internalValue),
      ddos_protection: slbCommonDdosProtectionToTerraform(this._ddosProtection.internalValue),
      dns_response_rate_limiting: slbCommonDnsResponseRateLimitingToTerraform(this._dnsResponseRateLimiting.internalValue),
      quic: slbCommonQuicToTerraform(this._quic.internalValue),
      snat_preserve: slbCommonSnatPreserveToTerraform(this._snatPreserve.internalValue),
      ssl_ratelimit_cfg: slbCommonSslRatelimitCfgToTerraform(this._sslRatelimitCfg.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aflex_table_entry_aging_interval: {
        value: cdktf.numberToHclTerraform(this._aflexTableEntryAgingInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      after_disable: {
        value: cdktf.numberToHclTerraform(this._afterDisable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      allow_in_gateway_mode: {
        value: cdktf.numberToHclTerraform(this._allowInGatewayMode),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      attack_resp_code: {
        value: cdktf.numberToHclTerraform(this._attackRespCode),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      auto_nat_no_ip_refresh: {
        value: cdktf.stringToHclTerraform(this._autoNatNoIpRefresh),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_translate_port: {
        value: cdktf.numberToHclTerraform(this._autoTranslatePort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      buff_thresh: {
        value: cdktf.numberToHclTerraform(this._buffThresh),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      buff_thresh_hw_buff: {
        value: cdktf.numberToHclTerraform(this._buffThreshHwBuff),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      buff_thresh_relieve_thresh: {
        value: cdktf.numberToHclTerraform(this._buffThreshRelieveThresh),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      buff_thresh_sys_buff_high: {
        value: cdktf.numberToHclTerraform(this._buffThreshSysBuffHigh),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      buff_thresh_sys_buff_low: {
        value: cdktf.numberToHclTerraform(this._buffThreshSysBuffLow),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cache_expire_time: {
        value: cdktf.numberToHclTerraform(this._cacheExpireTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cancel_stream_loop_limit: {
        value: cdktf.numberToHclTerraform(this._cancelStreamLoopLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      clientside_ip: {
        value: cdktf.stringToHclTerraform(this._clientsideIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      clientside_ipv6: {
        value: cdktf.stringToHclTerraform(this._clientsideIpv6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compress_block_size: {
        value: cdktf.numberToHclTerraform(this._compressBlockSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      custom_message: {
        value: cdktf.stringToHclTerraform(this._customMessage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_page: {
        value: cdktf.stringToHclTerraform(this._customPage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_signal_clist: {
        value: cdktf.stringToHclTerraform(this._customSignalClist),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ddos_pkt_count_thresh: {
        value: cdktf.numberToHclTerraform(this._ddosPktCountThresh),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ddos_pkt_size_thresh: {
        value: cdktf.numberToHclTerraform(this._ddosPktSizeThresh),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      disable_adaptive_resource_check: {
        value: cdktf.numberToHclTerraform(this._disableAdaptiveResourceCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      disable_persist_scoring: {
        value: cdktf.numberToHclTerraform(this._disablePersistScoring),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      disable_port_masking: {
        value: cdktf.numberToHclTerraform(this._disablePortMasking),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      disable_server_auto_reselect: {
        value: cdktf.numberToHclTerraform(this._disableServerAutoReselect),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dns_cache_age: {
        value: cdktf.numberToHclTerraform(this._dnsCacheAge),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dns_cache_age_min_threshold: {
        value: cdktf.numberToHclTerraform(this._dnsCacheAgeMinThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dns_cache_aging_weight: {
        value: cdktf.numberToHclTerraform(this._dnsCacheAgingWeight),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dns_cache_enable: {
        value: cdktf.numberToHclTerraform(this._dnsCacheEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dns_cache_entry_size: {
        value: cdktf.numberToHclTerraform(this._dnsCacheEntrySize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dns_cache_sync: {
        value: cdktf.numberToHclTerraform(this._dnsCacheSync),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dns_cache_sync_entry_size: {
        value: cdktf.numberToHclTerraform(this._dnsCacheSyncEntrySize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dns_cache_sync_ttl_threshold: {
        value: cdktf.numberToHclTerraform(this._dnsCacheSyncTtlThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dns_cache_ttl_adjustment_enable: {
        value: cdktf.numberToHclTerraform(this._dnsCacheTtlAdjustmentEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dns_negative_cache_enable: {
        value: cdktf.numberToHclTerraform(this._dnsNegativeCacheEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dns_persistent_cache_enable: {
        value: cdktf.numberToHclTerraform(this._dnsPersistentCacheEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dns_persistent_cache_hit_threshold: {
        value: cdktf.numberToHclTerraform(this._dnsPersistentCacheHitThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dns_persistent_cache_ttl_threshold: {
        value: cdktf.numberToHclTerraform(this._dnsPersistentCacheTtlThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dns_vip_stateless: {
        value: cdktf.numberToHclTerraform(this._dnsVipStateless),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      drop_icmp_to_vip_when_vip_down: {
        value: cdktf.numberToHclTerraform(this._dropIcmpToVipWhenVipDown),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dsr_health_check_enable: {
        value: cdktf.numberToHclTerraform(this._dsrHealthCheckEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ecmp_hash: {
        value: cdktf.stringToHclTerraform(this._ecmpHash),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_ddos: {
        value: cdktf.numberToHclTerraform(this._enableDdos),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enable_fast_path_rerouting: {
        value: cdktf.numberToHclTerraform(this._enableFastPathRerouting),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enable_l7_req_acct: {
        value: cdktf.numberToHclTerraform(this._enableL7ReqAcct),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      entity: {
        value: cdktf.stringToHclTerraform(this._entity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      exclude_destination: {
        value: cdktf.stringToHclTerraform(this._excludeDestination),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      extended_stats: {
        value: cdktf.numberToHclTerraform(this._extendedStats),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fast_path_disable: {
        value: cdktf.numberToHclTerraform(this._fastPathDisable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gateway_health_check: {
        value: cdktf.numberToHclTerraform(this._gatewayHealthCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      graceful_shutdown: {
        value: cdktf.numberToHclTerraform(this._gracefulShutdown),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      graceful_shutdown_enable: {
        value: cdktf.numberToHclTerraform(this._gracefulShutdownEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      health_check_to_all_vip: {
        value: cdktf.numberToHclTerraform(this._healthCheckToAllVip),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      honor_server_response_ttl: {
        value: cdktf.numberToHclTerraform(this._honorServerResponseTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      http_fast_enable: {
        value: cdktf.numberToHclTerraform(this._httpFastEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      hw_compression: {
        value: cdktf.numberToHclTerraform(this._hwCompression),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      hw_syn_rr: {
        value: cdktf.numberToHclTerraform(this._hwSynRr),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interval: {
        value: cdktf.numberToHclTerraform(this._interval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ipv4_offset: {
        value: cdktf.numberToHclTerraform(this._ipv4Offset),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ipv6_subnet: {
        value: cdktf.numberToHclTerraform(this._ipv6Subnet),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      l2l3_trunk_lb_disable: {
        value: cdktf.numberToHclTerraform(this._l2L3TrunkLbDisable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      log_for_reset_unknown_conn: {
        value: cdktf.numberToHclTerraform(this._logForResetUnknownConn),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      low_latency: {
        value: cdktf.numberToHclTerraform(this._lowLatency),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_buff_queued_per_conn: {
        value: cdktf.numberToHclTerraform(this._maxBuffQueuedPerConn),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_http_header_count: {
        value: cdktf.numberToHclTerraform(this._maxHttpHeaderCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_local_rate: {
        value: cdktf.numberToHclTerraform(this._maxLocalRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_persistent_cache: {
        value: cdktf.numberToHclTerraform(this._maxPersistentCache),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_remote_rate: {
        value: cdktf.numberToHclTerraform(this._maxRemoteRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      monitor_mode_enable: {
        value: cdktf.numberToHclTerraform(this._monitorModeEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      msl_time: {
        value: cdktf.numberToHclTerraform(this._mslTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mss_table: {
        value: cdktf.numberToHclTerraform(this._mssTable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      multi_cpu: {
        value: cdktf.numberToHclTerraform(this._multiCpu),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      n5_new: {
        value: cdktf.numberToHclTerraform(this._n5New),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      n5_old: {
        value: cdktf.numberToHclTerraform(this._n5Old),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ngwaf_proxy_ipv4: {
        value: cdktf.stringToHclTerraform(this._ngwafProxyIpv4),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ngwaf_proxy_ipv6: {
        value: cdktf.stringToHclTerraform(this._ngwafProxyIpv6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ngwaf_proxy_port: {
        value: cdktf.numberToHclTerraform(this._ngwafProxyPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      no_auto_up_on_aflex: {
        value: cdktf.numberToHclTerraform(this._noAutoUpOnAflex),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      odd_even_nat_enable: {
        value: cdktf.numberToHclTerraform(this._oddEvenNatEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      one_server_conn_hm_rate: {
        value: cdktf.numberToHclTerraform(this._oneServerConnHmRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      override_port: {
        value: cdktf.numberToHclTerraform(this._overridePort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pbslb_entry_age: {
        value: cdktf.numberToHclTerraform(this._pbslbEntryAge),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pbslb_overflow_glid: {
        value: cdktf.stringToHclTerraform(this._pbslbOverflowGlid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      per_thr_percent: {
        value: cdktf.numberToHclTerraform(this._perThrPercent),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ping_sweep_detection: {
        value: cdktf.stringToHclTerraform(this._pingSweepDetection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pkt_rate_for_reset_unknown_conn: {
        value: cdktf.numberToHclTerraform(this._pktRateForResetUnknownConn),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      player_id_check_enable: {
        value: cdktf.numberToHclTerraform(this._playerIdCheckEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      port_scan_detection: {
        value: cdktf.stringToHclTerraform(this._portScanDetection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pre_process_enable: {
        value: cdktf.numberToHclTerraform(this._preProcessEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      qat: {
        value: cdktf.numberToHclTerraform(this._qat),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      range: {
        value: cdktf.numberToHclTerraform(this._range),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      range_end: {
        value: cdktf.numberToHclTerraform(this._rangeEnd),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      range_start: {
        value: cdktf.numberToHclTerraform(this._rangeStart),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rate_limit_logging: {
        value: cdktf.numberToHclTerraform(this._rateLimitLogging),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      recursive_ns_cache: {
        value: cdktf.stringToHclTerraform(this._recursiveNsCache),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reset_stale_session: {
        value: cdktf.numberToHclTerraform(this._resetStaleSession),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      resolve_port_conflict: {
        value: cdktf.numberToHclTerraform(this._resolvePortConflict),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      response_type: {
        value: cdktf.stringToHclTerraform(this._responseType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scale_out: {
        value: cdktf.numberToHclTerraform(this._scaleOut),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      scale_out_traffic_map: {
        value: cdktf.numberToHclTerraform(this._scaleOutTrafficMap),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      serverside_ip: {
        value: cdktf.stringToHclTerraform(this._serversideIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      serverside_ipv6: {
        value: cdktf.stringToHclTerraform(this._serversideIpv6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_group_on_no_dest_nat_vports: {
        value: cdktf.stringToHclTerraform(this._serviceGroupOnNoDestNatVports),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      show_slb_server_legacy_cmd: {
        value: cdktf.numberToHclTerraform(this._showSlbServerLegacyCmd),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      show_slb_service_group_legacy_cmd: {
        value: cdktf.numberToHclTerraform(this._showSlbServiceGroupLegacyCmd),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      show_slb_virtual_server_legacy_cmd: {
        value: cdktf.numberToHclTerraform(this._showSlbVirtualServerLegacyCmd),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      snat_gwy_for_l3: {
        value: cdktf.numberToHclTerraform(this._snatGwyForL3),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      snat_on_vip: {
        value: cdktf.numberToHclTerraform(this._snatOnVip),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      software: {
        value: cdktf.numberToHclTerraform(this._software),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      software_tls13: {
        value: cdktf.numberToHclTerraform(this._softwareTls13),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      software_tls13_offload: {
        value: cdktf.numberToHclTerraform(this._softwareTls13Offload),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sort_res: {
        value: cdktf.numberToHclTerraform(this._sortRes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ssl_module_usage_enable: {
        value: cdktf.numberToHclTerraform(this._sslModuleUsageEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ssl_n5_delay_tx_enable: {
        value: cdktf.numberToHclTerraform(this._sslN5DelayTxEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ssli_cert_not_ready_inspect_limit: {
        value: cdktf.numberToHclTerraform(this._ssliCertNotReadyInspectLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ssli_cert_not_ready_inspect_timeout: {
        value: cdktf.numberToHclTerraform(this._ssliCertNotReadyInspectTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ssli_silent_termination_enable: {
        value: cdktf.numberToHclTerraform(this._ssliSilentTerminationEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ssli_sni_hash_enable: {
        value: cdktf.numberToHclTerraform(this._ssliSniHashEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      stateless_sg_multi_binding: {
        value: cdktf.numberToHclTerraform(this._statelessSgMultiBinding),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      stats_data_disable: {
        value: cdktf.numberToHclTerraform(this._statsDataDisable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      substitute_source_mac: {
        value: cdktf.numberToHclTerraform(this._substituteSourceMac),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timeout: {
        value: cdktf.numberToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      traffic_map_type: {
        value: cdktf.stringToHclTerraform(this._trafficMapType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ttl_threshold: {
        value: cdktf.numberToHclTerraform(this._ttlThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      use_default_sess_count: {
        value: cdktf.numberToHclTerraform(this._useDefaultSessCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      use_https_proxy: {
        value: cdktf.numberToHclTerraform(this._useHttpsProxy),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      use_mgmt_port: {
        value: cdktf.numberToHclTerraform(this._useMgmtPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      use_mss_tab: {
        value: cdktf.numberToHclTerraform(this._useMssTab),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vport_global: {
        value: cdktf.numberToHclTerraform(this._vportGlobal),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vport_l3v: {
        value: cdktf.numberToHclTerraform(this._vportL3V),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      aflex_table_entry_sync: {
        value: slbCommonAflexTableEntrySyncToHclTerraform(this._aflexTableEntrySync.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbCommonAflexTableEntrySyncList",
      },
      cert_pinning: {
        value: slbCommonCertPinningToHclTerraform(this._certPinning.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbCommonCertPinningList",
      },
      conn_rate_limit: {
        value: slbCommonConnRateLimitToHclTerraform(this._connRateLimit.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbCommonConnRateLimitList",
      },
      ddos_protection: {
        value: slbCommonDdosProtectionToHclTerraform(this._ddosProtection.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbCommonDdosProtectionList",
      },
      dns_response_rate_limiting: {
        value: slbCommonDnsResponseRateLimitingToHclTerraform(this._dnsResponseRateLimiting.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbCommonDnsResponseRateLimitingList",
      },
      quic: {
        value: slbCommonQuicToHclTerraform(this._quic.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbCommonQuicList",
      },
      snat_preserve: {
        value: slbCommonSnatPreserveToHclTerraform(this._snatPreserve.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbCommonSnatPreserveList",
      },
      ssl_ratelimit_cfg: {
        value: slbCommonSslRatelimitCfgToHclTerraform(this._sslRatelimitCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbCommonSslRatelimitCfgList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
