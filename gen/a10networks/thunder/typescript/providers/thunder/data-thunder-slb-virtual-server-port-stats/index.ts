// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_virtual_server_port_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSlbVirtualServerPortStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_virtual_server_port_stats#id DataThunderSlbVirtualServerPortStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_virtual_server_port_stats#port_number DataThunderSlbVirtualServerPortStats#port_number}
  */
  readonly portNumber: number;
  /**
  * 'tcp': TCP LB service; 'udp': UDP Port; 'others': for no tcp/udp protocol, do IP load balancing; 'diameter': diameter port; 'dns-tcp': DNS service over TCP; 'dns-udp': DNS service over UDP; 'fast-http': Fast HTTP Port; 'fix': FIX Port; 'ftp': File Transfer Protocol Port; 'ftp-proxy': ftp proxy port; 'http': HTTP Port; 'https': HTTPS port; 'imap': imap proxy port; 'mlb': Message based load balancing; 'mms': Microsoft Multimedia Service Port; 'mysql': mssql port; 'mssql': mssql; 'pop3': pop3 proxy port; 'radius': RADIUS Port; 'rtsp': Real Time Streaming Protocol Port; 'sip': Session initiation protocol over UDP; 'sip-tcp': Session initiation protocol over TCP; 'sips': Session initiation protocol over TLS; 'smpp-tcp': SMPP service over TCP; 'spdy': spdy port; 'spdys': spdys port; 'smtp': SMTP Port; 'mqtt': MQTT Port; 'mqtts': MQTTS Port; 'ssl-proxy': Generic SSL proxy; 'ssli': SSL insight; 'ssh': SSH Port; 'tcp-proxy': Generic TCP proxy; 'tftp': TFTP Port; 'fast-fix': Fast FIX port; 'http-over-quic': HTTP3-over-quic port;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_virtual_server_port_stats#protocol DataThunderSlbVirtualServerPortStats#protocol}
  */
  readonly protocol: string;
  /**
  * Virtual_server_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_virtual_server_port_stats#virtual_server_name DataThunderSlbVirtualServerPortStats#virtual_server_name}
  */
  readonly virtualServerName: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_virtual_server_port_stats#stats DataThunderSlbVirtualServerPortStats#stats}
  */
  readonly stats?: DataThunderSlbVirtualServerPortStatsStats;
}
export interface DataThunderSlbVirtualServerPortStatsStats {
  /**
  * Backend Time from Request to Response First Byte
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_virtual_server_port_stats#backend_time_to_first_byte DataThunderSlbVirtualServerPortStats#backend_time_to_first_byte}
  */
  readonly backendTimeToFirstByte?: number;
  /**
  * Backend Time from Request to Response Last Byte
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_virtual_server_port_stats#backend_time_to_last_byte DataThunderSlbVirtualServerPortStats#backend_time_to_last_byte}
  */
  readonly backendTimeToLastByte?: number;
  /**
  * Data out of gzip compression engine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_virtual_server_port_stats#compression_bytes_after DataThunderSlbVirtualServerPortStats#compression_bytes_after}
  */
  readonly compressionBytesAfter?: number;
  /**
  * Data out of brotli compression engine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_virtual_server_port_stats#compression_bytes_after_br DataThunderSlbVirtualServerPortStats#compression_bytes_after_br}
  */
  readonly compressionBytesAfterBr?: number;
  /**
  * Data out of compression engine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_virtual_server_port_stats#compression_bytes_after_total DataThunderSlbVirtualServerPortStats#compression_bytes_after_total}
  */
  readonly compressionBytesAfterTotal?: number;
  /**
  * Data into gzip compression engine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_virtual_server_port_stats#compression_bytes_before DataThunderSlbVirtualServerPortStats#compression_bytes_before}
  */
  readonly compressionBytesBefore?: number;
  /**
  * Data into brotli compression engine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_virtual_server_port_stats#compression_bytes_before_br DataThunderSlbVirtualServerPortStats#compression_bytes_before_br}
  */
  readonly compressionBytesBeforeBr?: number;
  /**
  * Data into compression engine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_virtual_server_port_stats#compression_bytes_before_total DataThunderSlbVirtualServerPortStats#compression_bytes_before_total}
  */
  readonly compressionBytesBeforeTotal?: number;
  /**
  * Number of requests compressed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_virtual_server_port_stats#compression_hit DataThunderSlbVirtualServerPortStats#compression_hit}
  */
  readonly compressionHit?: number;
  /**
  * Number of requests compressed with brotli
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_virtual_server_port_stats#compression_hit_br DataThunderSlbVirtualServerPortStats#compression_hit_br}
  */
  readonly compressionHitBr?: number;
  /**
  * Number of requests compressed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_virtual_server_port_stats#compression_hit_total DataThunderSlbVirtualServerPortStats#compression_hit_total}
  */
  readonly compressionHitTotal?: number;
  /**
  * Number of requests NOT compressed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_virtual_server_port_stats#compression_miss DataThunderSlbVirtualServerPortStats#compression_miss}
  */
  readonly compressionMiss?: number;
  /**
  * Number of requests NOT compressed with brotli
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_virtual_server_port_stats#compression_miss_br DataThunderSlbVirtualServerPortStats#compression_miss_br}
  */
  readonly compressionMissBr?: number;
  /**
  * Compression miss no client
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_virtual_server_port_stats#compression_miss_no_client DataThunderSlbVirtualServerPortStats#compression_miss_no_client}
  */
  readonly compressionMissNoClient?: number;
  /**
  * Compression miss template exclusion
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_virtual_server_port_stats#compression_miss_template_exclusion DataThunderSlbVirtualServerPortStats#compression_miss_template_exclusion}
  */
  readonly compressionMissTemplateExclusion?: number;
  /**
  * Number of requests NOT compressed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_virtual_server_port_stats#compression_miss_total DataThunderSlbVirtualServerPortStats#compression_miss_total}
  */
  readonly compressionMissTotal?: number;
  /**
  * Current established connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_virtual_server_port_stats#curr_conn DataThunderSlbVirtualServerPortStats#curr_conn}
  */
  readonly currConn?: number;
  /**
  * Current connection rate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_virtual_server_port_stats#curr_conn_rate DataThunderSlbVirtualServerPortStats#curr_conn_rate}
  */
  readonly currConnRate?: number;
  /**
  * Current requests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_virtual_server_port_stats#curr_req DataThunderSlbVirtualServerPortStats#curr_req}
  */
  readonly currReq?: number;
  /**
  * Current request rate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_virtual_server_port_stats#curr_req_rate DataThunderSlbVirtualServerPortStats#curr_req_rate}
  */
  readonly currReqRate?: number;
  /**
  * Current response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_virtual_server_port_stats#curr_resp DataThunderSlbVirtualServerPortStats#curr_resp}
  */
  readonly currResp?: number;
  /**
  * Current response rate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_virtual_server_port_stats#curr_resp_rate DataThunderSlbVirtualServerPortStats#curr_resp_rate}
  */
  readonly currRespRate?: number;
  /**
  * Current SSL connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_virtual_server_port_stats#curr_ssl_conn DataThunderSlbVirtualServerPortStats#curr_ssl_conn}
  */
  readonly currSslConn?: number;
  /**
  * DNS Filter Class ANY Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_virtual_server_port_stats#dns_filter_class_any_drop DataThunderSlbVirtualServerPortStats#dns_filter_class_any_drop}
  */
  readonly dnsFilterClassAnyDrop?: number;
  /**
  * DNS Filter Class CHAOS Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_virtual_server_port_stats#dns_filter_class_chaos_drop DataThunderSlbVirtualServerPortStats#dns_filter_class_chaos_drop}
  */
  readonly dnsFilterClassChaosDrop?: number;
  /**
  * DNS Filter Class HESIOD Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_virtual_server_port_stats#dns_filter_class_hesiod_drop DataThunderSlbVirtualServerPortStats#dns_filter_class_hesiod_drop}
  */
  readonly dnsFilterClassHesiodDrop?: number;
  /**
  * DNS Filter Class INTERNET Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_virtual_server_port_stats#dns_filter_class_internet_drop DataThunderSlbVirtualServerPortStats#dns_filter_class_internet_drop}
  */
  readonly dnsFilterClassInternetDrop?: number;
  /**
  * DNS Filter Class NONE Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_virtual_server_port_stats#dns_filter_class_none_drop DataThunderSlbVirtualServerPortStats#dns_filter_class_none_drop}
  */
  readonly dnsFilterClassNoneDrop?: number;
  /**
  * DNS Filter Class OTHERS Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_virtual_server_port_stats#dns_filter_class_others_drop DataThunderSlbVirtualServerPortStats#dns_filter_class_others_drop}
  */
  readonly dnsFilterClassOthersDrop?: number;
  /**
  * DNS Filter Type A Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_virtual_server_port_stats#dns_filter_type_a_drop DataThunderSlbVirtualServerPortStats#dns_filter_type_a_drop}
  */
  readonly dnsFilterTypeADrop?: number;
  /**
  * DNS Filter Type AAAA Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_virtual_server_port_stats#dns_filter_type_aaaa_drop DataThunderSlbVirtualServerPortStats#dns_filter_type_aaaa_drop}
  */
  readonly dnsFilterTypeAaaaDrop?: number;
  /**
  * DNS Filter Type Any Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_virtual_server_port_stats#dns_filter_type_any_drop DataThunderSlbVirtualServerPortStats#dns_filter_type_any_drop}
  */
  readonly dnsFilterTypeAnyDrop?: number;
  /**
  * DNS Filter Type CNAME Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_virtual_server_port_stats#dns_filter_type_cname_drop DataThunderSlbVirtualServerPortStats#dns_filter_type_cname_drop}
  */
  readonly dnsFilterTypeCnameDrop?: number;
  /**
  * DNS Filter Type MX Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_virtual_server_port_stats#dns_filter_type_mx_drop DataThunderSlbVirtualServerPortStats#dns_filter_type_mx_drop}
  */
  readonly dnsFilterTypeMxDrop?: number;
  /**
  * DNS Filter Type NS Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_virtual_server_port_stats#dns_filter_type_ns_drop DataThunderSlbVirtualServerPortStats#dns_filter_type_ns_drop}
  */
  readonly dnsFilterTypeNsDrop?: number;
  /**
  * DNS Filter Type OTHERS Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_virtual_server_port_stats#dns_filter_type_others_drop DataThunderSlbVirtualServerPortStats#dns_filter_type_others_drop}
  */
  readonly dnsFilterTypeOthersDrop?: number;
  /**
  * DNS Filter Type PTR Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_virtual_server_port_stats#dns_filter_type_ptr_drop DataThunderSlbVirtualServerPortStats#dns_filter_type_ptr_drop}
  */
  readonly dnsFilterTypePtrDrop?: number;
  /**
  * DNS Filter Type SOA Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_virtual_server_port_stats#dns_filter_type_soa_drop DataThunderSlbVirtualServerPortStats#dns_filter_type_soa_drop}
  */
  readonly dnsFilterTypeSoaDrop?: number;
  /**
  * DNS Filter Type SRV Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_virtual_server_port_stats#dns_filter_type_srv_drop DataThunderSlbVirtualServerPortStats#dns_filter_type_srv_drop}
  */
  readonly dnsFilterTypeSrvDrop?: number;
  /**
  * DNS Filter Type TXT Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_virtual_server_port_stats#dns_filter_type_txt_drop DataThunderSlbVirtualServerPortStats#dns_filter_type_txt_drop}
  */
  readonly dnsFilterTypeTxtDrop?: number;
  /**
  * DNS RPZ Action Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_virtual_server_port_stats#dns_rpz_action_drop DataThunderSlbVirtualServerPortStats#dns_rpz_action_drop}
  */
  readonly dnsRpzActionDrop?: number;
  /**
  * DNS RPZ Action Local Data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_virtual_server_port_stats#dns_rpz_action_local_data DataThunderSlbVirtualServerPortStats#dns_rpz_action_local_data}
  */
  readonly dnsRpzActionLocalData?: number;
  /**
  * DNS RPZ Action NODATA
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_virtual_server_port_stats#dns_rpz_action_nodata DataThunderSlbVirtualServerPortStats#dns_rpz_action_nodata}
  */
  readonly dnsRpzActionNodata?: number;
  /**
  * DNS RPZ Action NXDOMAIN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_virtual_server_port_stats#dns_rpz_action_nxdomain DataThunderSlbVirtualServerPortStats#dns_rpz_action_nxdomain}
  */
  readonly dnsRpzActionNxdomain?: number;
  /**
  * DNS RPZ Action Pass Through
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_virtual_server_port_stats#dns_rpz_action_pass_thru DataThunderSlbVirtualServerPortStats#dns_rpz_action_pass_thru}
  */
  readonly dnsRpzActionPassThru?: number;
  /**
  * DNS RPZ Action TCP Only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_virtual_server_port_stats#dns_rpz_action_tcp_only DataThunderSlbVirtualServerPortStats#dns_rpz_action_tcp_only}
  */
  readonly dnsRpzActionTcpOnly?: number;
  /**
  * DNS RPZ Trigger Client IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_virtual_server_port_stats#dns_rpz_trigger_client_ip DataThunderSlbVirtualServerPortStats#dns_rpz_trigger_client_ip}
  */
  readonly dnsRpzTriggerClientIp?: number;
  /**
  * DNS RPZ Trigger NS IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_virtual_server_port_stats#dns_rpz_trigger_ns_ip DataThunderSlbVirtualServerPortStats#dns_rpz_trigger_ns_ip}
  */
  readonly dnsRpzTriggerNsIp?: number;
  /**
  * DNS RPZ Trigger NS Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_virtual_server_port_stats#dns_rpz_trigger_ns_name DataThunderSlbVirtualServerPortStats#dns_rpz_trigger_ns_name}
  */
  readonly dnsRpzTriggerNsName?: number;
  /**
  * DNS RPZ Trigger Qname IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_virtual_server_port_stats#dns_rpz_trigger_qname DataThunderSlbVirtualServerPortStats#dns_rpz_trigger_qname}
  */
  readonly dnsRpzTriggerQname?: number;
  /**
  * DNS RPZ Trigger Response IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_virtual_server_port_stats#dns_rpz_trigger_resp_ip DataThunderSlbVirtualServerPortStats#dns_rpz_trigger_resp_ip}
  */
  readonly dnsRpzTriggerRespIp?: number;
  /**
  * DNS Response-Rate-Limiting Bad FQDN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_virtual_server_port_stats#dnsrrl_bad_fqdn DataThunderSlbVirtualServerPortStats#dnsrrl_bad_fqdn}
  */
  readonly dnsrrlBadFqdn?: number;
  /**
  * DNS Response-Rate-Limiting NX Responses Exceed Limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_virtual_server_port_stats#dnsrrl_nx_exceed DataThunderSlbVirtualServerPortStats#dnsrrl_nx_exceed}
  */
  readonly dnsrrlNxExceed?: number;
  /**
  * DNS Response-Rate-Limiting Total Responses Allowed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_virtual_server_port_stats#dnsrrl_total_allowed DataThunderSlbVirtualServerPortStats#dnsrrl_total_allowed}
  */
  readonly dnsrrlTotalAllowed?: number;
  /**
  * DNS Response-Rate-Limiting Total Responses Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_virtual_server_port_stats#dnsrrl_total_dropped DataThunderSlbVirtualServerPortStats#dnsrrl_total_dropped}
  */
  readonly dnsrrlTotalDropped?: number;
  /**
  * DNS Response-Rate-Limiting Total Responses Slipped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_virtual_server_port_stats#dnsrrl_total_slipped DataThunderSlbVirtualServerPortStats#dnsrrl_total_slipped}
  */
  readonly dnsrrlTotalSlipped?: number;
  /**
  * DNS Response-Rate-Limiting Total Responses Replied With Truncated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_virtual_server_port_stats#dnsrrl_total_tc DataThunderSlbVirtualServerPortStats#dnsrrl_total_tc}
  */
  readonly dnsrrlTotalTc?: number;
  /**
  * dynamic memory (bytes) used by the vport(alloc-free)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_virtual_server_port_stats#dynamic_memory DataThunderSlbVirtualServerPortStats#dynamic_memory}
  */
  readonly dynamicMemory?: number;
  /**
  * Total failure actions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_virtual_server_port_stats#es_total_failure_actions DataThunderSlbVirtualServerPortStats#es_total_failure_actions}
  */
  readonly esTotalFailureActions?: number;
  /**
  * Fastest response time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_virtual_server_port_stats#fastest_rsp_time DataThunderSlbVirtualServerPortStats#fastest_rsp_time}
  */
  readonly fastestRspTime?: number;
  /**
  * HTTP1 Client Idle Timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_virtual_server_port_stats#http1_client_idle_timeout DataThunderSlbVirtualServerPortStats#http1_client_idle_timeout}
  */
  readonly http1ClientIdleTimeout?: number;
  /**
  * HTTP2 Client Idle Timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_virtual_server_port_stats#http2_client_idle_timeout DataThunderSlbVirtualServerPortStats#http2_client_idle_timeout}
  */
  readonly http2ClientIdleTimeout?: number;
  /**
  * Request Latency at Thunder
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_virtual_server_port_stats#in_latency DataThunderSlbVirtualServerPortStats#in_latency}
  */
  readonly inLatency?: number;
  /**
  * IP-Only-LB Bytes processed in forward direction
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_virtual_server_port_stats#ip_only_lb_fwd_bytes DataThunderSlbVirtualServerPortStats#ip_only_lb_fwd_bytes}
  */
  readonly ipOnlyLbFwdBytes?: number;
  /**
  * IP-Only-LB Packets processed in forward direction
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_virtual_server_port_stats#ip_only_lb_fwd_pkts DataThunderSlbVirtualServerPortStats#ip_only_lb_fwd_pkts}
  */
  readonly ipOnlyLbFwdPkts?: number;
  /**
  * IP-Only-LB Bytes processed in reverse direction
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_virtual_server_port_stats#ip_only_lb_rev_bytes DataThunderSlbVirtualServerPortStats#ip_only_lb_rev_bytes}
  */
  readonly ipOnlyLbRevBytes?: number;
  /**
  * IP-Only-LB Packets processed in reverse direction
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_virtual_server_port_stats#ip_only_lb_rev_pkts DataThunderSlbVirtualServerPortStats#ip_only_lb_rev_pkts}
  */
  readonly ipOnlyLbRevPkts?: number;
  /**
  * Last response time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_virtual_server_port_stats#last_rsp_time DataThunderSlbVirtualServerPortStats#last_rsp_time}
  */
  readonly lastRspTime?: number;
  /**
  * Geo-location Connection count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_virtual_server_port_stats#loc_conn DataThunderSlbVirtualServerPortStats#loc_conn}
  */
  readonly locConn?: number;
  /**
  * Geo-location Deny count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_virtual_server_port_stats#loc_deny DataThunderSlbVirtualServerPortStats#loc_deny}
  */
  readonly locDeny?: number;
  /**
  * Geo-location Permit count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_virtual_server_port_stats#loc_permit DataThunderSlbVirtualServerPortStats#loc_permit}
  */
  readonly locPermit?: number;
  /**
  * Response Latency at Thunder
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_virtual_server_port_stats#out_latency DataThunderSlbVirtualServerPortStats#out_latency}
  */
  readonly outLatency?: number;
  /**
  * Peak connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_virtual_server_port_stats#peak_conn DataThunderSlbVirtualServerPortStats#peak_conn}
  */
  readonly peakConn?: number;
  /**
  * Slowest response time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_virtual_server_port_stats#slowest_rsp_time DataThunderSlbVirtualServerPortStats#slowest_rsp_time}
  */
  readonly slowestRspTime?: number;
  /**
  * Throughput in bits/sec
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_virtual_server_port_stats#throughput_bits_per_sec DataThunderSlbVirtualServerPortStats#throughput_bits_per_sec}
  */
  readonly throughputBitsPerSec?: number;
  /**
  * Total connections established
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_virtual_server_port_stats#total_conn DataThunderSlbVirtualServerPortStats#total_conn}
  */
  readonly totalConn?: number;
  /**
  * Total DNS Filter Class Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_virtual_server_port_stats#total_dns_filter_class_drop DataThunderSlbVirtualServerPortStats#total_dns_filter_class_drop}
  */
  readonly totalDnsFilterClassDrop?: number;
  /**
  * Total DNS Filter Type Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_virtual_server_port_stats#total_dns_filter_type_drop DataThunderSlbVirtualServerPortStats#total_dns_filter_type_drop}
  */
  readonly totalDnsFilterTypeDrop?: number;
  /**
  * Total DNS packets processed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_virtual_server_port_stats#total_dns_pkts DataThunderSlbVirtualServerPortStats#total_dns_pkts}
  */
  readonly totalDnsPkts?: number;
  /**
  * Bytes processed in forward direction
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_virtual_server_port_stats#total_fwd_bytes DataThunderSlbVirtualServerPortStats#total_fwd_bytes}
  */
  readonly totalFwdBytes?: number;
  /**
  * Bytes processed in forward direction (outbound)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_virtual_server_port_stats#total_fwd_bytes_out DataThunderSlbVirtualServerPortStats#total_fwd_bytes_out}
  */
  readonly totalFwdBytesOut?: number;
  /**
  * Packets processed in forward direction
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_virtual_server_port_stats#total_fwd_pkts DataThunderSlbVirtualServerPortStats#total_fwd_pkts}
  */
  readonly totalFwdPkts?: number;
  /**
  * Packets processed in forward direction (outbound)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_virtual_server_port_stats#total_fwd_pkts_out DataThunderSlbVirtualServerPortStats#total_fwd_pkts_out}
  */
  readonly totalFwdPktsOut?: number;
  /**
  * Total L4 connections established
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_virtual_server_port_stats#total_l4_conn DataThunderSlbVirtualServerPortStats#total_l4_conn}
  */
  readonly totalL4Conn?: number;
  /**
  * Total L7 connections established
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_virtual_server_port_stats#total_l7_conn DataThunderSlbVirtualServerPortStats#total_l7_conn}
  */
  readonly totalL7Conn?: number;
  /**
  * Total MF DNS packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_virtual_server_port_stats#total_mf_dns_pkts DataThunderSlbVirtualServerPortStats#total_mf_dns_pkts}
  */
  readonly totalMfDnsPkts?: number;
  /**
  * Total requests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_virtual_server_port_stats#total_req DataThunderSlbVirtualServerPortStats#total_req}
  */
  readonly totalReq?: number;
  /**
  * Total successful requests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_virtual_server_port_stats#total_req_succ DataThunderSlbVirtualServerPortStats#total_req_succ}
  */
  readonly totalReqSucc?: number;
  /**
  * Total response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_virtual_server_port_stats#total_resp DataThunderSlbVirtualServerPortStats#total_resp}
  */
  readonly totalResp?: number;
  /**
  * Total successful responses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_virtual_server_port_stats#total_resp_succ DataThunderSlbVirtualServerPortStats#total_resp_succ}
  */
  readonly totalRespSucc?: number;
  /**
  * Bytes processed in reverse direction
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_virtual_server_port_stats#total_rev_bytes DataThunderSlbVirtualServerPortStats#total_rev_bytes}
  */
  readonly totalRevBytes?: number;
  /**
  * Bytes processed in reverse direction (outbound)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_virtual_server_port_stats#total_rev_bytes_out DataThunderSlbVirtualServerPortStats#total_rev_bytes_out}
  */
  readonly totalRevBytesOut?: number;
  /**
  * Packets processed in reverse direction
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_virtual_server_port_stats#total_rev_pkts DataThunderSlbVirtualServerPortStats#total_rev_pkts}
  */
  readonly totalRevPkts?: number;
  /**
  * Packets processed in reverse direction (outbound)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_virtual_server_port_stats#total_rev_pkts_out DataThunderSlbVirtualServerPortStats#total_rev_pkts_out}
  */
  readonly totalRevPktsOut?: number;
  /**
  * Total SSL connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_virtual_server_port_stats#total_ssl_conn DataThunderSlbVirtualServerPortStats#total_ssl_conn}
  */
  readonly totalSslConn?: number;
  /**
  * Total TCP connections established
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_virtual_server_port_stats#total_tcp_conn DataThunderSlbVirtualServerPortStats#total_tcp_conn}
  */
  readonly totalTcpConn?: number;
}

export function dataThunderSlbVirtualServerPortStatsStatsToTerraform(struct?: DataThunderSlbVirtualServerPortStatsStatsOutputReference | DataThunderSlbVirtualServerPortStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backend_time_to_first_byte: cdktf.numberToTerraform(struct!.backendTimeToFirstByte),
    backend_time_to_last_byte: cdktf.numberToTerraform(struct!.backendTimeToLastByte),
    compression_bytes_after: cdktf.numberToTerraform(struct!.compressionBytesAfter),
    compression_bytes_after_br: cdktf.numberToTerraform(struct!.compressionBytesAfterBr),
    compression_bytes_after_total: cdktf.numberToTerraform(struct!.compressionBytesAfterTotal),
    compression_bytes_before: cdktf.numberToTerraform(struct!.compressionBytesBefore),
    compression_bytes_before_br: cdktf.numberToTerraform(struct!.compressionBytesBeforeBr),
    compression_bytes_before_total: cdktf.numberToTerraform(struct!.compressionBytesBeforeTotal),
    compression_hit: cdktf.numberToTerraform(struct!.compressionHit),
    compression_hit_br: cdktf.numberToTerraform(struct!.compressionHitBr),
    compression_hit_total: cdktf.numberToTerraform(struct!.compressionHitTotal),
    compression_miss: cdktf.numberToTerraform(struct!.compressionMiss),
    compression_miss_br: cdktf.numberToTerraform(struct!.compressionMissBr),
    compression_miss_no_client: cdktf.numberToTerraform(struct!.compressionMissNoClient),
    compression_miss_template_exclusion: cdktf.numberToTerraform(struct!.compressionMissTemplateExclusion),
    compression_miss_total: cdktf.numberToTerraform(struct!.compressionMissTotal),
    curr_conn: cdktf.numberToTerraform(struct!.currConn),
    curr_conn_rate: cdktf.numberToTerraform(struct!.currConnRate),
    curr_req: cdktf.numberToTerraform(struct!.currReq),
    curr_req_rate: cdktf.numberToTerraform(struct!.currReqRate),
    curr_resp: cdktf.numberToTerraform(struct!.currResp),
    curr_resp_rate: cdktf.numberToTerraform(struct!.currRespRate),
    curr_ssl_conn: cdktf.numberToTerraform(struct!.currSslConn),
    dns_filter_class_any_drop: cdktf.numberToTerraform(struct!.dnsFilterClassAnyDrop),
    dns_filter_class_chaos_drop: cdktf.numberToTerraform(struct!.dnsFilterClassChaosDrop),
    dns_filter_class_hesiod_drop: cdktf.numberToTerraform(struct!.dnsFilterClassHesiodDrop),
    dns_filter_class_internet_drop: cdktf.numberToTerraform(struct!.dnsFilterClassInternetDrop),
    dns_filter_class_none_drop: cdktf.numberToTerraform(struct!.dnsFilterClassNoneDrop),
    dns_filter_class_others_drop: cdktf.numberToTerraform(struct!.dnsFilterClassOthersDrop),
    dns_filter_type_a_drop: cdktf.numberToTerraform(struct!.dnsFilterTypeADrop),
    dns_filter_type_aaaa_drop: cdktf.numberToTerraform(struct!.dnsFilterTypeAaaaDrop),
    dns_filter_type_any_drop: cdktf.numberToTerraform(struct!.dnsFilterTypeAnyDrop),
    dns_filter_type_cname_drop: cdktf.numberToTerraform(struct!.dnsFilterTypeCnameDrop),
    dns_filter_type_mx_drop: cdktf.numberToTerraform(struct!.dnsFilterTypeMxDrop),
    dns_filter_type_ns_drop: cdktf.numberToTerraform(struct!.dnsFilterTypeNsDrop),
    dns_filter_type_others_drop: cdktf.numberToTerraform(struct!.dnsFilterTypeOthersDrop),
    dns_filter_type_ptr_drop: cdktf.numberToTerraform(struct!.dnsFilterTypePtrDrop),
    dns_filter_type_soa_drop: cdktf.numberToTerraform(struct!.dnsFilterTypeSoaDrop),
    dns_filter_type_srv_drop: cdktf.numberToTerraform(struct!.dnsFilterTypeSrvDrop),
    dns_filter_type_txt_drop: cdktf.numberToTerraform(struct!.dnsFilterTypeTxtDrop),
    dns_rpz_action_drop: cdktf.numberToTerraform(struct!.dnsRpzActionDrop),
    dns_rpz_action_local_data: cdktf.numberToTerraform(struct!.dnsRpzActionLocalData),
    dns_rpz_action_nodata: cdktf.numberToTerraform(struct!.dnsRpzActionNodata),
    dns_rpz_action_nxdomain: cdktf.numberToTerraform(struct!.dnsRpzActionNxdomain),
    dns_rpz_action_pass_thru: cdktf.numberToTerraform(struct!.dnsRpzActionPassThru),
    dns_rpz_action_tcp_only: cdktf.numberToTerraform(struct!.dnsRpzActionTcpOnly),
    dns_rpz_trigger_client_ip: cdktf.numberToTerraform(struct!.dnsRpzTriggerClientIp),
    dns_rpz_trigger_ns_ip: cdktf.numberToTerraform(struct!.dnsRpzTriggerNsIp),
    dns_rpz_trigger_ns_name: cdktf.numberToTerraform(struct!.dnsRpzTriggerNsName),
    dns_rpz_trigger_qname: cdktf.numberToTerraform(struct!.dnsRpzTriggerQname),
    dns_rpz_trigger_resp_ip: cdktf.numberToTerraform(struct!.dnsRpzTriggerRespIp),
    dnsrrl_bad_fqdn: cdktf.numberToTerraform(struct!.dnsrrlBadFqdn),
    dnsrrl_nx_exceed: cdktf.numberToTerraform(struct!.dnsrrlNxExceed),
    dnsrrl_total_allowed: cdktf.numberToTerraform(struct!.dnsrrlTotalAllowed),
    dnsrrl_total_dropped: cdktf.numberToTerraform(struct!.dnsrrlTotalDropped),
    dnsrrl_total_slipped: cdktf.numberToTerraform(struct!.dnsrrlTotalSlipped),
    dnsrrl_total_tc: cdktf.numberToTerraform(struct!.dnsrrlTotalTc),
    dynamic_memory: cdktf.numberToTerraform(struct!.dynamicMemory),
    es_total_failure_actions: cdktf.numberToTerraform(struct!.esTotalFailureActions),
    fastest_rsp_time: cdktf.numberToTerraform(struct!.fastestRspTime),
    http1_client_idle_timeout: cdktf.numberToTerraform(struct!.http1ClientIdleTimeout),
    http2_client_idle_timeout: cdktf.numberToTerraform(struct!.http2ClientIdleTimeout),
    in_latency: cdktf.numberToTerraform(struct!.inLatency),
    ip_only_lb_fwd_bytes: cdktf.numberToTerraform(struct!.ipOnlyLbFwdBytes),
    ip_only_lb_fwd_pkts: cdktf.numberToTerraform(struct!.ipOnlyLbFwdPkts),
    ip_only_lb_rev_bytes: cdktf.numberToTerraform(struct!.ipOnlyLbRevBytes),
    ip_only_lb_rev_pkts: cdktf.numberToTerraform(struct!.ipOnlyLbRevPkts),
    last_rsp_time: cdktf.numberToTerraform(struct!.lastRspTime),
    loc_conn: cdktf.numberToTerraform(struct!.locConn),
    loc_deny: cdktf.numberToTerraform(struct!.locDeny),
    loc_permit: cdktf.numberToTerraform(struct!.locPermit),
    out_latency: cdktf.numberToTerraform(struct!.outLatency),
    peak_conn: cdktf.numberToTerraform(struct!.peakConn),
    slowest_rsp_time: cdktf.numberToTerraform(struct!.slowestRspTime),
    throughput_bits_per_sec: cdktf.numberToTerraform(struct!.throughputBitsPerSec),
    total_conn: cdktf.numberToTerraform(struct!.totalConn),
    total_dns_filter_class_drop: cdktf.numberToTerraform(struct!.totalDnsFilterClassDrop),
    total_dns_filter_type_drop: cdktf.numberToTerraform(struct!.totalDnsFilterTypeDrop),
    total_dns_pkts: cdktf.numberToTerraform(struct!.totalDnsPkts),
    total_fwd_bytes: cdktf.numberToTerraform(struct!.totalFwdBytes),
    total_fwd_bytes_out: cdktf.numberToTerraform(struct!.totalFwdBytesOut),
    total_fwd_pkts: cdktf.numberToTerraform(struct!.totalFwdPkts),
    total_fwd_pkts_out: cdktf.numberToTerraform(struct!.totalFwdPktsOut),
    total_l4_conn: cdktf.numberToTerraform(struct!.totalL4Conn),
    total_l7_conn: cdktf.numberToTerraform(struct!.totalL7Conn),
    total_mf_dns_pkts: cdktf.numberToTerraform(struct!.totalMfDnsPkts),
    total_req: cdktf.numberToTerraform(struct!.totalReq),
    total_req_succ: cdktf.numberToTerraform(struct!.totalReqSucc),
    total_resp: cdktf.numberToTerraform(struct!.totalResp),
    total_resp_succ: cdktf.numberToTerraform(struct!.totalRespSucc),
    total_rev_bytes: cdktf.numberToTerraform(struct!.totalRevBytes),
    total_rev_bytes_out: cdktf.numberToTerraform(struct!.totalRevBytesOut),
    total_rev_pkts: cdktf.numberToTerraform(struct!.totalRevPkts),
    total_rev_pkts_out: cdktf.numberToTerraform(struct!.totalRevPktsOut),
    total_ssl_conn: cdktf.numberToTerraform(struct!.totalSslConn),
    total_tcp_conn: cdktf.numberToTerraform(struct!.totalTcpConn),
  }
}


export function dataThunderSlbVirtualServerPortStatsStatsToHclTerraform(struct?: DataThunderSlbVirtualServerPortStatsStatsOutputReference | DataThunderSlbVirtualServerPortStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backend_time_to_first_byte: {
      value: cdktf.numberToHclTerraform(struct!.backendTimeToFirstByte),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    backend_time_to_last_byte: {
      value: cdktf.numberToHclTerraform(struct!.backendTimeToLastByte),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    compression_bytes_after: {
      value: cdktf.numberToHclTerraform(struct!.compressionBytesAfter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    compression_bytes_after_br: {
      value: cdktf.numberToHclTerraform(struct!.compressionBytesAfterBr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    compression_bytes_after_total: {
      value: cdktf.numberToHclTerraform(struct!.compressionBytesAfterTotal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    compression_bytes_before: {
      value: cdktf.numberToHclTerraform(struct!.compressionBytesBefore),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    compression_bytes_before_br: {
      value: cdktf.numberToHclTerraform(struct!.compressionBytesBeforeBr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    compression_bytes_before_total: {
      value: cdktf.numberToHclTerraform(struct!.compressionBytesBeforeTotal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    compression_hit: {
      value: cdktf.numberToHclTerraform(struct!.compressionHit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    compression_hit_br: {
      value: cdktf.numberToHclTerraform(struct!.compressionHitBr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    compression_hit_total: {
      value: cdktf.numberToHclTerraform(struct!.compressionHitTotal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    compression_miss: {
      value: cdktf.numberToHclTerraform(struct!.compressionMiss),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    compression_miss_br: {
      value: cdktf.numberToHclTerraform(struct!.compressionMissBr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    compression_miss_no_client: {
      value: cdktf.numberToHclTerraform(struct!.compressionMissNoClient),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    compression_miss_template_exclusion: {
      value: cdktf.numberToHclTerraform(struct!.compressionMissTemplateExclusion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    compression_miss_total: {
      value: cdktf.numberToHclTerraform(struct!.compressionMissTotal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    curr_conn: {
      value: cdktf.numberToHclTerraform(struct!.currConn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    curr_conn_rate: {
      value: cdktf.numberToHclTerraform(struct!.currConnRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    curr_req: {
      value: cdktf.numberToHclTerraform(struct!.currReq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    curr_req_rate: {
      value: cdktf.numberToHclTerraform(struct!.currReqRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    curr_resp: {
      value: cdktf.numberToHclTerraform(struct!.currResp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    curr_resp_rate: {
      value: cdktf.numberToHclTerraform(struct!.currRespRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    curr_ssl_conn: {
      value: cdktf.numberToHclTerraform(struct!.currSslConn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_filter_class_any_drop: {
      value: cdktf.numberToHclTerraform(struct!.dnsFilterClassAnyDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_filter_class_chaos_drop: {
      value: cdktf.numberToHclTerraform(struct!.dnsFilterClassChaosDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_filter_class_hesiod_drop: {
      value: cdktf.numberToHclTerraform(struct!.dnsFilterClassHesiodDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_filter_class_internet_drop: {
      value: cdktf.numberToHclTerraform(struct!.dnsFilterClassInternetDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_filter_class_none_drop: {
      value: cdktf.numberToHclTerraform(struct!.dnsFilterClassNoneDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_filter_class_others_drop: {
      value: cdktf.numberToHclTerraform(struct!.dnsFilterClassOthersDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_filter_type_a_drop: {
      value: cdktf.numberToHclTerraform(struct!.dnsFilterTypeADrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_filter_type_aaaa_drop: {
      value: cdktf.numberToHclTerraform(struct!.dnsFilterTypeAaaaDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_filter_type_any_drop: {
      value: cdktf.numberToHclTerraform(struct!.dnsFilterTypeAnyDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_filter_type_cname_drop: {
      value: cdktf.numberToHclTerraform(struct!.dnsFilterTypeCnameDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_filter_type_mx_drop: {
      value: cdktf.numberToHclTerraform(struct!.dnsFilterTypeMxDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_filter_type_ns_drop: {
      value: cdktf.numberToHclTerraform(struct!.dnsFilterTypeNsDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_filter_type_others_drop: {
      value: cdktf.numberToHclTerraform(struct!.dnsFilterTypeOthersDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_filter_type_ptr_drop: {
      value: cdktf.numberToHclTerraform(struct!.dnsFilterTypePtrDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_filter_type_soa_drop: {
      value: cdktf.numberToHclTerraform(struct!.dnsFilterTypeSoaDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_filter_type_srv_drop: {
      value: cdktf.numberToHclTerraform(struct!.dnsFilterTypeSrvDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_filter_type_txt_drop: {
      value: cdktf.numberToHclTerraform(struct!.dnsFilterTypeTxtDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_rpz_action_drop: {
      value: cdktf.numberToHclTerraform(struct!.dnsRpzActionDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_rpz_action_local_data: {
      value: cdktf.numberToHclTerraform(struct!.dnsRpzActionLocalData),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_rpz_action_nodata: {
      value: cdktf.numberToHclTerraform(struct!.dnsRpzActionNodata),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_rpz_action_nxdomain: {
      value: cdktf.numberToHclTerraform(struct!.dnsRpzActionNxdomain),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_rpz_action_pass_thru: {
      value: cdktf.numberToHclTerraform(struct!.dnsRpzActionPassThru),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_rpz_action_tcp_only: {
      value: cdktf.numberToHclTerraform(struct!.dnsRpzActionTcpOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_rpz_trigger_client_ip: {
      value: cdktf.numberToHclTerraform(struct!.dnsRpzTriggerClientIp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_rpz_trigger_ns_ip: {
      value: cdktf.numberToHclTerraform(struct!.dnsRpzTriggerNsIp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_rpz_trigger_ns_name: {
      value: cdktf.numberToHclTerraform(struct!.dnsRpzTriggerNsName),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_rpz_trigger_qname: {
      value: cdktf.numberToHclTerraform(struct!.dnsRpzTriggerQname),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_rpz_trigger_resp_ip: {
      value: cdktf.numberToHclTerraform(struct!.dnsRpzTriggerRespIp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dnsrrl_bad_fqdn: {
      value: cdktf.numberToHclTerraform(struct!.dnsrrlBadFqdn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dnsrrl_nx_exceed: {
      value: cdktf.numberToHclTerraform(struct!.dnsrrlNxExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dnsrrl_total_allowed: {
      value: cdktf.numberToHclTerraform(struct!.dnsrrlTotalAllowed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dnsrrl_total_dropped: {
      value: cdktf.numberToHclTerraform(struct!.dnsrrlTotalDropped),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dnsrrl_total_slipped: {
      value: cdktf.numberToHclTerraform(struct!.dnsrrlTotalSlipped),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dnsrrl_total_tc: {
      value: cdktf.numberToHclTerraform(struct!.dnsrrlTotalTc),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dynamic_memory: {
      value: cdktf.numberToHclTerraform(struct!.dynamicMemory),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    es_total_failure_actions: {
      value: cdktf.numberToHclTerraform(struct!.esTotalFailureActions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fastest_rsp_time: {
      value: cdktf.numberToHclTerraform(struct!.fastestRspTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http1_client_idle_timeout: {
      value: cdktf.numberToHclTerraform(struct!.http1ClientIdleTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http2_client_idle_timeout: {
      value: cdktf.numberToHclTerraform(struct!.http2ClientIdleTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    in_latency: {
      value: cdktf.numberToHclTerraform(struct!.inLatency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_only_lb_fwd_bytes: {
      value: cdktf.numberToHclTerraform(struct!.ipOnlyLbFwdBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_only_lb_fwd_pkts: {
      value: cdktf.numberToHclTerraform(struct!.ipOnlyLbFwdPkts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_only_lb_rev_bytes: {
      value: cdktf.numberToHclTerraform(struct!.ipOnlyLbRevBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_only_lb_rev_pkts: {
      value: cdktf.numberToHclTerraform(struct!.ipOnlyLbRevPkts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    last_rsp_time: {
      value: cdktf.numberToHclTerraform(struct!.lastRspTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    loc_conn: {
      value: cdktf.numberToHclTerraform(struct!.locConn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    loc_deny: {
      value: cdktf.numberToHclTerraform(struct!.locDeny),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    loc_permit: {
      value: cdktf.numberToHclTerraform(struct!.locPermit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    out_latency: {
      value: cdktf.numberToHclTerraform(struct!.outLatency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    peak_conn: {
      value: cdktf.numberToHclTerraform(struct!.peakConn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    slowest_rsp_time: {
      value: cdktf.numberToHclTerraform(struct!.slowestRspTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    throughput_bits_per_sec: {
      value: cdktf.numberToHclTerraform(struct!.throughputBitsPerSec),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_conn: {
      value: cdktf.numberToHclTerraform(struct!.totalConn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_dns_filter_class_drop: {
      value: cdktf.numberToHclTerraform(struct!.totalDnsFilterClassDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_dns_filter_type_drop: {
      value: cdktf.numberToHclTerraform(struct!.totalDnsFilterTypeDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_dns_pkts: {
      value: cdktf.numberToHclTerraform(struct!.totalDnsPkts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_fwd_bytes: {
      value: cdktf.numberToHclTerraform(struct!.totalFwdBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_fwd_bytes_out: {
      value: cdktf.numberToHclTerraform(struct!.totalFwdBytesOut),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_fwd_pkts: {
      value: cdktf.numberToHclTerraform(struct!.totalFwdPkts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_fwd_pkts_out: {
      value: cdktf.numberToHclTerraform(struct!.totalFwdPktsOut),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_l4_conn: {
      value: cdktf.numberToHclTerraform(struct!.totalL4Conn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_l7_conn: {
      value: cdktf.numberToHclTerraform(struct!.totalL7Conn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_mf_dns_pkts: {
      value: cdktf.numberToHclTerraform(struct!.totalMfDnsPkts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_req: {
      value: cdktf.numberToHclTerraform(struct!.totalReq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_req_succ: {
      value: cdktf.numberToHclTerraform(struct!.totalReqSucc),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_resp: {
      value: cdktf.numberToHclTerraform(struct!.totalResp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_resp_succ: {
      value: cdktf.numberToHclTerraform(struct!.totalRespSucc),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_rev_bytes: {
      value: cdktf.numberToHclTerraform(struct!.totalRevBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_rev_bytes_out: {
      value: cdktf.numberToHclTerraform(struct!.totalRevBytesOut),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_rev_pkts: {
      value: cdktf.numberToHclTerraform(struct!.totalRevPkts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_rev_pkts_out: {
      value: cdktf.numberToHclTerraform(struct!.totalRevPktsOut),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_ssl_conn: {
      value: cdktf.numberToHclTerraform(struct!.totalSslConn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_tcp_conn: {
      value: cdktf.numberToHclTerraform(struct!.totalTcpConn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbVirtualServerPortStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSlbVirtualServerPortStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backendTimeToFirstByte !== undefined) {
      hasAnyValues = true;
      internalValueResult.backendTimeToFirstByte = this._backendTimeToFirstByte;
    }
    if (this._backendTimeToLastByte !== undefined) {
      hasAnyValues = true;
      internalValueResult.backendTimeToLastByte = this._backendTimeToLastByte;
    }
    if (this._compressionBytesAfter !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionBytesAfter = this._compressionBytesAfter;
    }
    if (this._compressionBytesAfterBr !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionBytesAfterBr = this._compressionBytesAfterBr;
    }
    if (this._compressionBytesAfterTotal !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionBytesAfterTotal = this._compressionBytesAfterTotal;
    }
    if (this._compressionBytesBefore !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionBytesBefore = this._compressionBytesBefore;
    }
    if (this._compressionBytesBeforeBr !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionBytesBeforeBr = this._compressionBytesBeforeBr;
    }
    if (this._compressionBytesBeforeTotal !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionBytesBeforeTotal = this._compressionBytesBeforeTotal;
    }
    if (this._compressionHit !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionHit = this._compressionHit;
    }
    if (this._compressionHitBr !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionHitBr = this._compressionHitBr;
    }
    if (this._compressionHitTotal !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionHitTotal = this._compressionHitTotal;
    }
    if (this._compressionMiss !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionMiss = this._compressionMiss;
    }
    if (this._compressionMissBr !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionMissBr = this._compressionMissBr;
    }
    if (this._compressionMissNoClient !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionMissNoClient = this._compressionMissNoClient;
    }
    if (this._compressionMissTemplateExclusion !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionMissTemplateExclusion = this._compressionMissTemplateExclusion;
    }
    if (this._compressionMissTotal !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionMissTotal = this._compressionMissTotal;
    }
    if (this._currConn !== undefined) {
      hasAnyValues = true;
      internalValueResult.currConn = this._currConn;
    }
    if (this._currConnRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.currConnRate = this._currConnRate;
    }
    if (this._currReq !== undefined) {
      hasAnyValues = true;
      internalValueResult.currReq = this._currReq;
    }
    if (this._currReqRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.currReqRate = this._currReqRate;
    }
    if (this._currResp !== undefined) {
      hasAnyValues = true;
      internalValueResult.currResp = this._currResp;
    }
    if (this._currRespRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.currRespRate = this._currRespRate;
    }
    if (this._currSslConn !== undefined) {
      hasAnyValues = true;
      internalValueResult.currSslConn = this._currSslConn;
    }
    if (this._dnsFilterClassAnyDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsFilterClassAnyDrop = this._dnsFilterClassAnyDrop;
    }
    if (this._dnsFilterClassChaosDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsFilterClassChaosDrop = this._dnsFilterClassChaosDrop;
    }
    if (this._dnsFilterClassHesiodDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsFilterClassHesiodDrop = this._dnsFilterClassHesiodDrop;
    }
    if (this._dnsFilterClassInternetDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsFilterClassInternetDrop = this._dnsFilterClassInternetDrop;
    }
    if (this._dnsFilterClassNoneDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsFilterClassNoneDrop = this._dnsFilterClassNoneDrop;
    }
    if (this._dnsFilterClassOthersDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsFilterClassOthersDrop = this._dnsFilterClassOthersDrop;
    }
    if (this._dnsFilterTypeADrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsFilterTypeADrop = this._dnsFilterTypeADrop;
    }
    if (this._dnsFilterTypeAaaaDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsFilterTypeAaaaDrop = this._dnsFilterTypeAaaaDrop;
    }
    if (this._dnsFilterTypeAnyDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsFilterTypeAnyDrop = this._dnsFilterTypeAnyDrop;
    }
    if (this._dnsFilterTypeCnameDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsFilterTypeCnameDrop = this._dnsFilterTypeCnameDrop;
    }
    if (this._dnsFilterTypeMxDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsFilterTypeMxDrop = this._dnsFilterTypeMxDrop;
    }
    if (this._dnsFilterTypeNsDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsFilterTypeNsDrop = this._dnsFilterTypeNsDrop;
    }
    if (this._dnsFilterTypeOthersDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsFilterTypeOthersDrop = this._dnsFilterTypeOthersDrop;
    }
    if (this._dnsFilterTypePtrDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsFilterTypePtrDrop = this._dnsFilterTypePtrDrop;
    }
    if (this._dnsFilterTypeSoaDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsFilterTypeSoaDrop = this._dnsFilterTypeSoaDrop;
    }
    if (this._dnsFilterTypeSrvDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsFilterTypeSrvDrop = this._dnsFilterTypeSrvDrop;
    }
    if (this._dnsFilterTypeTxtDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsFilterTypeTxtDrop = this._dnsFilterTypeTxtDrop;
    }
    if (this._dnsRpzActionDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsRpzActionDrop = this._dnsRpzActionDrop;
    }
    if (this._dnsRpzActionLocalData !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsRpzActionLocalData = this._dnsRpzActionLocalData;
    }
    if (this._dnsRpzActionNodata !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsRpzActionNodata = this._dnsRpzActionNodata;
    }
    if (this._dnsRpzActionNxdomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsRpzActionNxdomain = this._dnsRpzActionNxdomain;
    }
    if (this._dnsRpzActionPassThru !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsRpzActionPassThru = this._dnsRpzActionPassThru;
    }
    if (this._dnsRpzActionTcpOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsRpzActionTcpOnly = this._dnsRpzActionTcpOnly;
    }
    if (this._dnsRpzTriggerClientIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsRpzTriggerClientIp = this._dnsRpzTriggerClientIp;
    }
    if (this._dnsRpzTriggerNsIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsRpzTriggerNsIp = this._dnsRpzTriggerNsIp;
    }
    if (this._dnsRpzTriggerNsName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsRpzTriggerNsName = this._dnsRpzTriggerNsName;
    }
    if (this._dnsRpzTriggerQname !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsRpzTriggerQname = this._dnsRpzTriggerQname;
    }
    if (this._dnsRpzTriggerRespIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsRpzTriggerRespIp = this._dnsRpzTriggerRespIp;
    }
    if (this._dnsrrlBadFqdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsrrlBadFqdn = this._dnsrrlBadFqdn;
    }
    if (this._dnsrrlNxExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsrrlNxExceed = this._dnsrrlNxExceed;
    }
    if (this._dnsrrlTotalAllowed !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsrrlTotalAllowed = this._dnsrrlTotalAllowed;
    }
    if (this._dnsrrlTotalDropped !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsrrlTotalDropped = this._dnsrrlTotalDropped;
    }
    if (this._dnsrrlTotalSlipped !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsrrlTotalSlipped = this._dnsrrlTotalSlipped;
    }
    if (this._dnsrrlTotalTc !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsrrlTotalTc = this._dnsrrlTotalTc;
    }
    if (this._dynamicMemory !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicMemory = this._dynamicMemory;
    }
    if (this._esTotalFailureActions !== undefined) {
      hasAnyValues = true;
      internalValueResult.esTotalFailureActions = this._esTotalFailureActions;
    }
    if (this._fastestRspTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.fastestRspTime = this._fastestRspTime;
    }
    if (this._http1ClientIdleTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.http1ClientIdleTimeout = this._http1ClientIdleTimeout;
    }
    if (this._http2ClientIdleTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.http2ClientIdleTimeout = this._http2ClientIdleTimeout;
    }
    if (this._inLatency !== undefined) {
      hasAnyValues = true;
      internalValueResult.inLatency = this._inLatency;
    }
    if (this._ipOnlyLbFwdBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipOnlyLbFwdBytes = this._ipOnlyLbFwdBytes;
    }
    if (this._ipOnlyLbFwdPkts !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipOnlyLbFwdPkts = this._ipOnlyLbFwdPkts;
    }
    if (this._ipOnlyLbRevBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipOnlyLbRevBytes = this._ipOnlyLbRevBytes;
    }
    if (this._ipOnlyLbRevPkts !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipOnlyLbRevPkts = this._ipOnlyLbRevPkts;
    }
    if (this._lastRspTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastRspTime = this._lastRspTime;
    }
    if (this._locConn !== undefined) {
      hasAnyValues = true;
      internalValueResult.locConn = this._locConn;
    }
    if (this._locDeny !== undefined) {
      hasAnyValues = true;
      internalValueResult.locDeny = this._locDeny;
    }
    if (this._locPermit !== undefined) {
      hasAnyValues = true;
      internalValueResult.locPermit = this._locPermit;
    }
    if (this._outLatency !== undefined) {
      hasAnyValues = true;
      internalValueResult.outLatency = this._outLatency;
    }
    if (this._peakConn !== undefined) {
      hasAnyValues = true;
      internalValueResult.peakConn = this._peakConn;
    }
    if (this._slowestRspTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.slowestRspTime = this._slowestRspTime;
    }
    if (this._throughputBitsPerSec !== undefined) {
      hasAnyValues = true;
      internalValueResult.throughputBitsPerSec = this._throughputBitsPerSec;
    }
    if (this._totalConn !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalConn = this._totalConn;
    }
    if (this._totalDnsFilterClassDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalDnsFilterClassDrop = this._totalDnsFilterClassDrop;
    }
    if (this._totalDnsFilterTypeDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalDnsFilterTypeDrop = this._totalDnsFilterTypeDrop;
    }
    if (this._totalDnsPkts !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalDnsPkts = this._totalDnsPkts;
    }
    if (this._totalFwdBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalFwdBytes = this._totalFwdBytes;
    }
    if (this._totalFwdBytesOut !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalFwdBytesOut = this._totalFwdBytesOut;
    }
    if (this._totalFwdPkts !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalFwdPkts = this._totalFwdPkts;
    }
    if (this._totalFwdPktsOut !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalFwdPktsOut = this._totalFwdPktsOut;
    }
    if (this._totalL4Conn !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalL4Conn = this._totalL4Conn;
    }
    if (this._totalL7Conn !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalL7Conn = this._totalL7Conn;
    }
    if (this._totalMfDnsPkts !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalMfDnsPkts = this._totalMfDnsPkts;
    }
    if (this._totalReq !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalReq = this._totalReq;
    }
    if (this._totalReqSucc !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalReqSucc = this._totalReqSucc;
    }
    if (this._totalResp !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalResp = this._totalResp;
    }
    if (this._totalRespSucc !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalRespSucc = this._totalRespSucc;
    }
    if (this._totalRevBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalRevBytes = this._totalRevBytes;
    }
    if (this._totalRevBytesOut !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalRevBytesOut = this._totalRevBytesOut;
    }
    if (this._totalRevPkts !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalRevPkts = this._totalRevPkts;
    }
    if (this._totalRevPktsOut !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalRevPktsOut = this._totalRevPktsOut;
    }
    if (this._totalSslConn !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalSslConn = this._totalSslConn;
    }
    if (this._totalTcpConn !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalTcpConn = this._totalTcpConn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbVirtualServerPortStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._backendTimeToFirstByte = undefined;
      this._backendTimeToLastByte = undefined;
      this._compressionBytesAfter = undefined;
      this._compressionBytesAfterBr = undefined;
      this._compressionBytesAfterTotal = undefined;
      this._compressionBytesBefore = undefined;
      this._compressionBytesBeforeBr = undefined;
      this._compressionBytesBeforeTotal = undefined;
      this._compressionHit = undefined;
      this._compressionHitBr = undefined;
      this._compressionHitTotal = undefined;
      this._compressionMiss = undefined;
      this._compressionMissBr = undefined;
      this._compressionMissNoClient = undefined;
      this._compressionMissTemplateExclusion = undefined;
      this._compressionMissTotal = undefined;
      this._currConn = undefined;
      this._currConnRate = undefined;
      this._currReq = undefined;
      this._currReqRate = undefined;
      this._currResp = undefined;
      this._currRespRate = undefined;
      this._currSslConn = undefined;
      this._dnsFilterClassAnyDrop = undefined;
      this._dnsFilterClassChaosDrop = undefined;
      this._dnsFilterClassHesiodDrop = undefined;
      this._dnsFilterClassInternetDrop = undefined;
      this._dnsFilterClassNoneDrop = undefined;
      this._dnsFilterClassOthersDrop = undefined;
      this._dnsFilterTypeADrop = undefined;
      this._dnsFilterTypeAaaaDrop = undefined;
      this._dnsFilterTypeAnyDrop = undefined;
      this._dnsFilterTypeCnameDrop = undefined;
      this._dnsFilterTypeMxDrop = undefined;
      this._dnsFilterTypeNsDrop = undefined;
      this._dnsFilterTypeOthersDrop = undefined;
      this._dnsFilterTypePtrDrop = undefined;
      this._dnsFilterTypeSoaDrop = undefined;
      this._dnsFilterTypeSrvDrop = undefined;
      this._dnsFilterTypeTxtDrop = undefined;
      this._dnsRpzActionDrop = undefined;
      this._dnsRpzActionLocalData = undefined;
      this._dnsRpzActionNodata = undefined;
      this._dnsRpzActionNxdomain = undefined;
      this._dnsRpzActionPassThru = undefined;
      this._dnsRpzActionTcpOnly = undefined;
      this._dnsRpzTriggerClientIp = undefined;
      this._dnsRpzTriggerNsIp = undefined;
      this._dnsRpzTriggerNsName = undefined;
      this._dnsRpzTriggerQname = undefined;
      this._dnsRpzTriggerRespIp = undefined;
      this._dnsrrlBadFqdn = undefined;
      this._dnsrrlNxExceed = undefined;
      this._dnsrrlTotalAllowed = undefined;
      this._dnsrrlTotalDropped = undefined;
      this._dnsrrlTotalSlipped = undefined;
      this._dnsrrlTotalTc = undefined;
      this._dynamicMemory = undefined;
      this._esTotalFailureActions = undefined;
      this._fastestRspTime = undefined;
      this._http1ClientIdleTimeout = undefined;
      this._http2ClientIdleTimeout = undefined;
      this._inLatency = undefined;
      this._ipOnlyLbFwdBytes = undefined;
      this._ipOnlyLbFwdPkts = undefined;
      this._ipOnlyLbRevBytes = undefined;
      this._ipOnlyLbRevPkts = undefined;
      this._lastRspTime = undefined;
      this._locConn = undefined;
      this._locDeny = undefined;
      this._locPermit = undefined;
      this._outLatency = undefined;
      this._peakConn = undefined;
      this._slowestRspTime = undefined;
      this._throughputBitsPerSec = undefined;
      this._totalConn = undefined;
      this._totalDnsFilterClassDrop = undefined;
      this._totalDnsFilterTypeDrop = undefined;
      this._totalDnsPkts = undefined;
      this._totalFwdBytes = undefined;
      this._totalFwdBytesOut = undefined;
      this._totalFwdPkts = undefined;
      this._totalFwdPktsOut = undefined;
      this._totalL4Conn = undefined;
      this._totalL7Conn = undefined;
      this._totalMfDnsPkts = undefined;
      this._totalReq = undefined;
      this._totalReqSucc = undefined;
      this._totalResp = undefined;
      this._totalRespSucc = undefined;
      this._totalRevBytes = undefined;
      this._totalRevBytesOut = undefined;
      this._totalRevPkts = undefined;
      this._totalRevPktsOut = undefined;
      this._totalSslConn = undefined;
      this._totalTcpConn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._backendTimeToFirstByte = value.backendTimeToFirstByte;
      this._backendTimeToLastByte = value.backendTimeToLastByte;
      this._compressionBytesAfter = value.compressionBytesAfter;
      this._compressionBytesAfterBr = value.compressionBytesAfterBr;
      this._compressionBytesAfterTotal = value.compressionBytesAfterTotal;
      this._compressionBytesBefore = value.compressionBytesBefore;
      this._compressionBytesBeforeBr = value.compressionBytesBeforeBr;
      this._compressionBytesBeforeTotal = value.compressionBytesBeforeTotal;
      this._compressionHit = value.compressionHit;
      this._compressionHitBr = value.compressionHitBr;
      this._compressionHitTotal = value.compressionHitTotal;
      this._compressionMiss = value.compressionMiss;
      this._compressionMissBr = value.compressionMissBr;
      this._compressionMissNoClient = value.compressionMissNoClient;
      this._compressionMissTemplateExclusion = value.compressionMissTemplateExclusion;
      this._compressionMissTotal = value.compressionMissTotal;
      this._currConn = value.currConn;
      this._currConnRate = value.currConnRate;
      this._currReq = value.currReq;
      this._currReqRate = value.currReqRate;
      this._currResp = value.currResp;
      this._currRespRate = value.currRespRate;
      this._currSslConn = value.currSslConn;
      this._dnsFilterClassAnyDrop = value.dnsFilterClassAnyDrop;
      this._dnsFilterClassChaosDrop = value.dnsFilterClassChaosDrop;
      this._dnsFilterClassHesiodDrop = value.dnsFilterClassHesiodDrop;
      this._dnsFilterClassInternetDrop = value.dnsFilterClassInternetDrop;
      this._dnsFilterClassNoneDrop = value.dnsFilterClassNoneDrop;
      this._dnsFilterClassOthersDrop = value.dnsFilterClassOthersDrop;
      this._dnsFilterTypeADrop = value.dnsFilterTypeADrop;
      this._dnsFilterTypeAaaaDrop = value.dnsFilterTypeAaaaDrop;
      this._dnsFilterTypeAnyDrop = value.dnsFilterTypeAnyDrop;
      this._dnsFilterTypeCnameDrop = value.dnsFilterTypeCnameDrop;
      this._dnsFilterTypeMxDrop = value.dnsFilterTypeMxDrop;
      this._dnsFilterTypeNsDrop = value.dnsFilterTypeNsDrop;
      this._dnsFilterTypeOthersDrop = value.dnsFilterTypeOthersDrop;
      this._dnsFilterTypePtrDrop = value.dnsFilterTypePtrDrop;
      this._dnsFilterTypeSoaDrop = value.dnsFilterTypeSoaDrop;
      this._dnsFilterTypeSrvDrop = value.dnsFilterTypeSrvDrop;
      this._dnsFilterTypeTxtDrop = value.dnsFilterTypeTxtDrop;
      this._dnsRpzActionDrop = value.dnsRpzActionDrop;
      this._dnsRpzActionLocalData = value.dnsRpzActionLocalData;
      this._dnsRpzActionNodata = value.dnsRpzActionNodata;
      this._dnsRpzActionNxdomain = value.dnsRpzActionNxdomain;
      this._dnsRpzActionPassThru = value.dnsRpzActionPassThru;
      this._dnsRpzActionTcpOnly = value.dnsRpzActionTcpOnly;
      this._dnsRpzTriggerClientIp = value.dnsRpzTriggerClientIp;
      this._dnsRpzTriggerNsIp = value.dnsRpzTriggerNsIp;
      this._dnsRpzTriggerNsName = value.dnsRpzTriggerNsName;
      this._dnsRpzTriggerQname = value.dnsRpzTriggerQname;
      this._dnsRpzTriggerRespIp = value.dnsRpzTriggerRespIp;
      this._dnsrrlBadFqdn = value.dnsrrlBadFqdn;
      this._dnsrrlNxExceed = value.dnsrrlNxExceed;
      this._dnsrrlTotalAllowed = value.dnsrrlTotalAllowed;
      this._dnsrrlTotalDropped = value.dnsrrlTotalDropped;
      this._dnsrrlTotalSlipped = value.dnsrrlTotalSlipped;
      this._dnsrrlTotalTc = value.dnsrrlTotalTc;
      this._dynamicMemory = value.dynamicMemory;
      this._esTotalFailureActions = value.esTotalFailureActions;
      this._fastestRspTime = value.fastestRspTime;
      this._http1ClientIdleTimeout = value.http1ClientIdleTimeout;
      this._http2ClientIdleTimeout = value.http2ClientIdleTimeout;
      this._inLatency = value.inLatency;
      this._ipOnlyLbFwdBytes = value.ipOnlyLbFwdBytes;
      this._ipOnlyLbFwdPkts = value.ipOnlyLbFwdPkts;
      this._ipOnlyLbRevBytes = value.ipOnlyLbRevBytes;
      this._ipOnlyLbRevPkts = value.ipOnlyLbRevPkts;
      this._lastRspTime = value.lastRspTime;
      this._locConn = value.locConn;
      this._locDeny = value.locDeny;
      this._locPermit = value.locPermit;
      this._outLatency = value.outLatency;
      this._peakConn = value.peakConn;
      this._slowestRspTime = value.slowestRspTime;
      this._throughputBitsPerSec = value.throughputBitsPerSec;
      this._totalConn = value.totalConn;
      this._totalDnsFilterClassDrop = value.totalDnsFilterClassDrop;
      this._totalDnsFilterTypeDrop = value.totalDnsFilterTypeDrop;
      this._totalDnsPkts = value.totalDnsPkts;
      this._totalFwdBytes = value.totalFwdBytes;
      this._totalFwdBytesOut = value.totalFwdBytesOut;
      this._totalFwdPkts = value.totalFwdPkts;
      this._totalFwdPktsOut = value.totalFwdPktsOut;
      this._totalL4Conn = value.totalL4Conn;
      this._totalL7Conn = value.totalL7Conn;
      this._totalMfDnsPkts = value.totalMfDnsPkts;
      this._totalReq = value.totalReq;
      this._totalReqSucc = value.totalReqSucc;
      this._totalResp = value.totalResp;
      this._totalRespSucc = value.totalRespSucc;
      this._totalRevBytes = value.totalRevBytes;
      this._totalRevBytesOut = value.totalRevBytesOut;
      this._totalRevPkts = value.totalRevPkts;
      this._totalRevPktsOut = value.totalRevPktsOut;
      this._totalSslConn = value.totalSslConn;
      this._totalTcpConn = value.totalTcpConn;
    }
  }

  // backend_time_to_first_byte - computed: false, optional: true, required: false
  private _backendTimeToFirstByte?: number; 
  public get backendTimeToFirstByte() {
    return this.getNumberAttribute('backend_time_to_first_byte');
  }
  public set backendTimeToFirstByte(value: number) {
    this._backendTimeToFirstByte = value;
  }
  public resetBackendTimeToFirstByte() {
    this._backendTimeToFirstByte = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendTimeToFirstByteInput() {
    return this._backendTimeToFirstByte;
  }

  // backend_time_to_last_byte - computed: false, optional: true, required: false
  private _backendTimeToLastByte?: number; 
  public get backendTimeToLastByte() {
    return this.getNumberAttribute('backend_time_to_last_byte');
  }
  public set backendTimeToLastByte(value: number) {
    this._backendTimeToLastByte = value;
  }
  public resetBackendTimeToLastByte() {
    this._backendTimeToLastByte = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendTimeToLastByteInput() {
    return this._backendTimeToLastByte;
  }

  // compression_bytes_after - computed: false, optional: true, required: false
  private _compressionBytesAfter?: number; 
  public get compressionBytesAfter() {
    return this.getNumberAttribute('compression_bytes_after');
  }
  public set compressionBytesAfter(value: number) {
    this._compressionBytesAfter = value;
  }
  public resetCompressionBytesAfter() {
    this._compressionBytesAfter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionBytesAfterInput() {
    return this._compressionBytesAfter;
  }

  // compression_bytes_after_br - computed: false, optional: true, required: false
  private _compressionBytesAfterBr?: number; 
  public get compressionBytesAfterBr() {
    return this.getNumberAttribute('compression_bytes_after_br');
  }
  public set compressionBytesAfterBr(value: number) {
    this._compressionBytesAfterBr = value;
  }
  public resetCompressionBytesAfterBr() {
    this._compressionBytesAfterBr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionBytesAfterBrInput() {
    return this._compressionBytesAfterBr;
  }

  // compression_bytes_after_total - computed: false, optional: true, required: false
  private _compressionBytesAfterTotal?: number; 
  public get compressionBytesAfterTotal() {
    return this.getNumberAttribute('compression_bytes_after_total');
  }
  public set compressionBytesAfterTotal(value: number) {
    this._compressionBytesAfterTotal = value;
  }
  public resetCompressionBytesAfterTotal() {
    this._compressionBytesAfterTotal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionBytesAfterTotalInput() {
    return this._compressionBytesAfterTotal;
  }

  // compression_bytes_before - computed: false, optional: true, required: false
  private _compressionBytesBefore?: number; 
  public get compressionBytesBefore() {
    return this.getNumberAttribute('compression_bytes_before');
  }
  public set compressionBytesBefore(value: number) {
    this._compressionBytesBefore = value;
  }
  public resetCompressionBytesBefore() {
    this._compressionBytesBefore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionBytesBeforeInput() {
    return this._compressionBytesBefore;
  }

  // compression_bytes_before_br - computed: false, optional: true, required: false
  private _compressionBytesBeforeBr?: number; 
  public get compressionBytesBeforeBr() {
    return this.getNumberAttribute('compression_bytes_before_br');
  }
  public set compressionBytesBeforeBr(value: number) {
    this._compressionBytesBeforeBr = value;
  }
  public resetCompressionBytesBeforeBr() {
    this._compressionBytesBeforeBr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionBytesBeforeBrInput() {
    return this._compressionBytesBeforeBr;
  }

  // compression_bytes_before_total - computed: false, optional: true, required: false
  private _compressionBytesBeforeTotal?: number; 
  public get compressionBytesBeforeTotal() {
    return this.getNumberAttribute('compression_bytes_before_total');
  }
  public set compressionBytesBeforeTotal(value: number) {
    this._compressionBytesBeforeTotal = value;
  }
  public resetCompressionBytesBeforeTotal() {
    this._compressionBytesBeforeTotal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionBytesBeforeTotalInput() {
    return this._compressionBytesBeforeTotal;
  }

  // compression_hit - computed: false, optional: true, required: false
  private _compressionHit?: number; 
  public get compressionHit() {
    return this.getNumberAttribute('compression_hit');
  }
  public set compressionHit(value: number) {
    this._compressionHit = value;
  }
  public resetCompressionHit() {
    this._compressionHit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionHitInput() {
    return this._compressionHit;
  }

  // compression_hit_br - computed: false, optional: true, required: false
  private _compressionHitBr?: number; 
  public get compressionHitBr() {
    return this.getNumberAttribute('compression_hit_br');
  }
  public set compressionHitBr(value: number) {
    this._compressionHitBr = value;
  }
  public resetCompressionHitBr() {
    this._compressionHitBr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionHitBrInput() {
    return this._compressionHitBr;
  }

  // compression_hit_total - computed: false, optional: true, required: false
  private _compressionHitTotal?: number; 
  public get compressionHitTotal() {
    return this.getNumberAttribute('compression_hit_total');
  }
  public set compressionHitTotal(value: number) {
    this._compressionHitTotal = value;
  }
  public resetCompressionHitTotal() {
    this._compressionHitTotal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionHitTotalInput() {
    return this._compressionHitTotal;
  }

  // compression_miss - computed: false, optional: true, required: false
  private _compressionMiss?: number; 
  public get compressionMiss() {
    return this.getNumberAttribute('compression_miss');
  }
  public set compressionMiss(value: number) {
    this._compressionMiss = value;
  }
  public resetCompressionMiss() {
    this._compressionMiss = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionMissInput() {
    return this._compressionMiss;
  }

  // compression_miss_br - computed: false, optional: true, required: false
  private _compressionMissBr?: number; 
  public get compressionMissBr() {
    return this.getNumberAttribute('compression_miss_br');
  }
  public set compressionMissBr(value: number) {
    this._compressionMissBr = value;
  }
  public resetCompressionMissBr() {
    this._compressionMissBr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionMissBrInput() {
    return this._compressionMissBr;
  }

  // compression_miss_no_client - computed: false, optional: true, required: false
  private _compressionMissNoClient?: number; 
  public get compressionMissNoClient() {
    return this.getNumberAttribute('compression_miss_no_client');
  }
  public set compressionMissNoClient(value: number) {
    this._compressionMissNoClient = value;
  }
  public resetCompressionMissNoClient() {
    this._compressionMissNoClient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionMissNoClientInput() {
    return this._compressionMissNoClient;
  }

  // compression_miss_template_exclusion - computed: false, optional: true, required: false
  private _compressionMissTemplateExclusion?: number; 
  public get compressionMissTemplateExclusion() {
    return this.getNumberAttribute('compression_miss_template_exclusion');
  }
  public set compressionMissTemplateExclusion(value: number) {
    this._compressionMissTemplateExclusion = value;
  }
  public resetCompressionMissTemplateExclusion() {
    this._compressionMissTemplateExclusion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionMissTemplateExclusionInput() {
    return this._compressionMissTemplateExclusion;
  }

  // compression_miss_total - computed: false, optional: true, required: false
  private _compressionMissTotal?: number; 
  public get compressionMissTotal() {
    return this.getNumberAttribute('compression_miss_total');
  }
  public set compressionMissTotal(value: number) {
    this._compressionMissTotal = value;
  }
  public resetCompressionMissTotal() {
    this._compressionMissTotal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionMissTotalInput() {
    return this._compressionMissTotal;
  }

  // curr_conn - computed: false, optional: true, required: false
  private _currConn?: number; 
  public get currConn() {
    return this.getNumberAttribute('curr_conn');
  }
  public set currConn(value: number) {
    this._currConn = value;
  }
  public resetCurrConn() {
    this._currConn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currConnInput() {
    return this._currConn;
  }

  // curr_conn_rate - computed: false, optional: true, required: false
  private _currConnRate?: number; 
  public get currConnRate() {
    return this.getNumberAttribute('curr_conn_rate');
  }
  public set currConnRate(value: number) {
    this._currConnRate = value;
  }
  public resetCurrConnRate() {
    this._currConnRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currConnRateInput() {
    return this._currConnRate;
  }

  // curr_req - computed: false, optional: true, required: false
  private _currReq?: number; 
  public get currReq() {
    return this.getNumberAttribute('curr_req');
  }
  public set currReq(value: number) {
    this._currReq = value;
  }
  public resetCurrReq() {
    this._currReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currReqInput() {
    return this._currReq;
  }

  // curr_req_rate - computed: false, optional: true, required: false
  private _currReqRate?: number; 
  public get currReqRate() {
    return this.getNumberAttribute('curr_req_rate');
  }
  public set currReqRate(value: number) {
    this._currReqRate = value;
  }
  public resetCurrReqRate() {
    this._currReqRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currReqRateInput() {
    return this._currReqRate;
  }

  // curr_resp - computed: false, optional: true, required: false
  private _currResp?: number; 
  public get currResp() {
    return this.getNumberAttribute('curr_resp');
  }
  public set currResp(value: number) {
    this._currResp = value;
  }
  public resetCurrResp() {
    this._currResp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currRespInput() {
    return this._currResp;
  }

  // curr_resp_rate - computed: false, optional: true, required: false
  private _currRespRate?: number; 
  public get currRespRate() {
    return this.getNumberAttribute('curr_resp_rate');
  }
  public set currRespRate(value: number) {
    this._currRespRate = value;
  }
  public resetCurrRespRate() {
    this._currRespRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currRespRateInput() {
    return this._currRespRate;
  }

  // curr_ssl_conn - computed: false, optional: true, required: false
  private _currSslConn?: number; 
  public get currSslConn() {
    return this.getNumberAttribute('curr_ssl_conn');
  }
  public set currSslConn(value: number) {
    this._currSslConn = value;
  }
  public resetCurrSslConn() {
    this._currSslConn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currSslConnInput() {
    return this._currSslConn;
  }

  // dns_filter_class_any_drop - computed: false, optional: true, required: false
  private _dnsFilterClassAnyDrop?: number; 
  public get dnsFilterClassAnyDrop() {
    return this.getNumberAttribute('dns_filter_class_any_drop');
  }
  public set dnsFilterClassAnyDrop(value: number) {
    this._dnsFilterClassAnyDrop = value;
  }
  public resetDnsFilterClassAnyDrop() {
    this._dnsFilterClassAnyDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsFilterClassAnyDropInput() {
    return this._dnsFilterClassAnyDrop;
  }

  // dns_filter_class_chaos_drop - computed: false, optional: true, required: false
  private _dnsFilterClassChaosDrop?: number; 
  public get dnsFilterClassChaosDrop() {
    return this.getNumberAttribute('dns_filter_class_chaos_drop');
  }
  public set dnsFilterClassChaosDrop(value: number) {
    this._dnsFilterClassChaosDrop = value;
  }
  public resetDnsFilterClassChaosDrop() {
    this._dnsFilterClassChaosDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsFilterClassChaosDropInput() {
    return this._dnsFilterClassChaosDrop;
  }

  // dns_filter_class_hesiod_drop - computed: false, optional: true, required: false
  private _dnsFilterClassHesiodDrop?: number; 
  public get dnsFilterClassHesiodDrop() {
    return this.getNumberAttribute('dns_filter_class_hesiod_drop');
  }
  public set dnsFilterClassHesiodDrop(value: number) {
    this._dnsFilterClassHesiodDrop = value;
  }
  public resetDnsFilterClassHesiodDrop() {
    this._dnsFilterClassHesiodDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsFilterClassHesiodDropInput() {
    return this._dnsFilterClassHesiodDrop;
  }

  // dns_filter_class_internet_drop - computed: false, optional: true, required: false
  private _dnsFilterClassInternetDrop?: number; 
  public get dnsFilterClassInternetDrop() {
    return this.getNumberAttribute('dns_filter_class_internet_drop');
  }
  public set dnsFilterClassInternetDrop(value: number) {
    this._dnsFilterClassInternetDrop = value;
  }
  public resetDnsFilterClassInternetDrop() {
    this._dnsFilterClassInternetDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsFilterClassInternetDropInput() {
    return this._dnsFilterClassInternetDrop;
  }

  // dns_filter_class_none_drop - computed: false, optional: true, required: false
  private _dnsFilterClassNoneDrop?: number; 
  public get dnsFilterClassNoneDrop() {
    return this.getNumberAttribute('dns_filter_class_none_drop');
  }
  public set dnsFilterClassNoneDrop(value: number) {
    this._dnsFilterClassNoneDrop = value;
  }
  public resetDnsFilterClassNoneDrop() {
    this._dnsFilterClassNoneDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsFilterClassNoneDropInput() {
    return this._dnsFilterClassNoneDrop;
  }

  // dns_filter_class_others_drop - computed: false, optional: true, required: false
  private _dnsFilterClassOthersDrop?: number; 
  public get dnsFilterClassOthersDrop() {
    return this.getNumberAttribute('dns_filter_class_others_drop');
  }
  public set dnsFilterClassOthersDrop(value: number) {
    this._dnsFilterClassOthersDrop = value;
  }
  public resetDnsFilterClassOthersDrop() {
    this._dnsFilterClassOthersDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsFilterClassOthersDropInput() {
    return this._dnsFilterClassOthersDrop;
  }

  // dns_filter_type_a_drop - computed: false, optional: true, required: false
  private _dnsFilterTypeADrop?: number; 
  public get dnsFilterTypeADrop() {
    return this.getNumberAttribute('dns_filter_type_a_drop');
  }
  public set dnsFilterTypeADrop(value: number) {
    this._dnsFilterTypeADrop = value;
  }
  public resetDnsFilterTypeADrop() {
    this._dnsFilterTypeADrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsFilterTypeADropInput() {
    return this._dnsFilterTypeADrop;
  }

  // dns_filter_type_aaaa_drop - computed: false, optional: true, required: false
  private _dnsFilterTypeAaaaDrop?: number; 
  public get dnsFilterTypeAaaaDrop() {
    return this.getNumberAttribute('dns_filter_type_aaaa_drop');
  }
  public set dnsFilterTypeAaaaDrop(value: number) {
    this._dnsFilterTypeAaaaDrop = value;
  }
  public resetDnsFilterTypeAaaaDrop() {
    this._dnsFilterTypeAaaaDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsFilterTypeAaaaDropInput() {
    return this._dnsFilterTypeAaaaDrop;
  }

  // dns_filter_type_any_drop - computed: false, optional: true, required: false
  private _dnsFilterTypeAnyDrop?: number; 
  public get dnsFilterTypeAnyDrop() {
    return this.getNumberAttribute('dns_filter_type_any_drop');
  }
  public set dnsFilterTypeAnyDrop(value: number) {
    this._dnsFilterTypeAnyDrop = value;
  }
  public resetDnsFilterTypeAnyDrop() {
    this._dnsFilterTypeAnyDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsFilterTypeAnyDropInput() {
    return this._dnsFilterTypeAnyDrop;
  }

  // dns_filter_type_cname_drop - computed: false, optional: true, required: false
  private _dnsFilterTypeCnameDrop?: number; 
  public get dnsFilterTypeCnameDrop() {
    return this.getNumberAttribute('dns_filter_type_cname_drop');
  }
  public set dnsFilterTypeCnameDrop(value: number) {
    this._dnsFilterTypeCnameDrop = value;
  }
  public resetDnsFilterTypeCnameDrop() {
    this._dnsFilterTypeCnameDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsFilterTypeCnameDropInput() {
    return this._dnsFilterTypeCnameDrop;
  }

  // dns_filter_type_mx_drop - computed: false, optional: true, required: false
  private _dnsFilterTypeMxDrop?: number; 
  public get dnsFilterTypeMxDrop() {
    return this.getNumberAttribute('dns_filter_type_mx_drop');
  }
  public set dnsFilterTypeMxDrop(value: number) {
    this._dnsFilterTypeMxDrop = value;
  }
  public resetDnsFilterTypeMxDrop() {
    this._dnsFilterTypeMxDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsFilterTypeMxDropInput() {
    return this._dnsFilterTypeMxDrop;
  }

  // dns_filter_type_ns_drop - computed: false, optional: true, required: false
  private _dnsFilterTypeNsDrop?: number; 
  public get dnsFilterTypeNsDrop() {
    return this.getNumberAttribute('dns_filter_type_ns_drop');
  }
  public set dnsFilterTypeNsDrop(value: number) {
    this._dnsFilterTypeNsDrop = value;
  }
  public resetDnsFilterTypeNsDrop() {
    this._dnsFilterTypeNsDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsFilterTypeNsDropInput() {
    return this._dnsFilterTypeNsDrop;
  }

  // dns_filter_type_others_drop - computed: false, optional: true, required: false
  private _dnsFilterTypeOthersDrop?: number; 
  public get dnsFilterTypeOthersDrop() {
    return this.getNumberAttribute('dns_filter_type_others_drop');
  }
  public set dnsFilterTypeOthersDrop(value: number) {
    this._dnsFilterTypeOthersDrop = value;
  }
  public resetDnsFilterTypeOthersDrop() {
    this._dnsFilterTypeOthersDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsFilterTypeOthersDropInput() {
    return this._dnsFilterTypeOthersDrop;
  }

  // dns_filter_type_ptr_drop - computed: false, optional: true, required: false
  private _dnsFilterTypePtrDrop?: number; 
  public get dnsFilterTypePtrDrop() {
    return this.getNumberAttribute('dns_filter_type_ptr_drop');
  }
  public set dnsFilterTypePtrDrop(value: number) {
    this._dnsFilterTypePtrDrop = value;
  }
  public resetDnsFilterTypePtrDrop() {
    this._dnsFilterTypePtrDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsFilterTypePtrDropInput() {
    return this._dnsFilterTypePtrDrop;
  }

  // dns_filter_type_soa_drop - computed: false, optional: true, required: false
  private _dnsFilterTypeSoaDrop?: number; 
  public get dnsFilterTypeSoaDrop() {
    return this.getNumberAttribute('dns_filter_type_soa_drop');
  }
  public set dnsFilterTypeSoaDrop(value: number) {
    this._dnsFilterTypeSoaDrop = value;
  }
  public resetDnsFilterTypeSoaDrop() {
    this._dnsFilterTypeSoaDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsFilterTypeSoaDropInput() {
    return this._dnsFilterTypeSoaDrop;
  }

  // dns_filter_type_srv_drop - computed: false, optional: true, required: false
  private _dnsFilterTypeSrvDrop?: number; 
  public get dnsFilterTypeSrvDrop() {
    return this.getNumberAttribute('dns_filter_type_srv_drop');
  }
  public set dnsFilterTypeSrvDrop(value: number) {
    this._dnsFilterTypeSrvDrop = value;
  }
  public resetDnsFilterTypeSrvDrop() {
    this._dnsFilterTypeSrvDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsFilterTypeSrvDropInput() {
    return this._dnsFilterTypeSrvDrop;
  }

  // dns_filter_type_txt_drop - computed: false, optional: true, required: false
  private _dnsFilterTypeTxtDrop?: number; 
  public get dnsFilterTypeTxtDrop() {
    return this.getNumberAttribute('dns_filter_type_txt_drop');
  }
  public set dnsFilterTypeTxtDrop(value: number) {
    this._dnsFilterTypeTxtDrop = value;
  }
  public resetDnsFilterTypeTxtDrop() {
    this._dnsFilterTypeTxtDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsFilterTypeTxtDropInput() {
    return this._dnsFilterTypeTxtDrop;
  }

  // dns_rpz_action_drop - computed: false, optional: true, required: false
  private _dnsRpzActionDrop?: number; 
  public get dnsRpzActionDrop() {
    return this.getNumberAttribute('dns_rpz_action_drop');
  }
  public set dnsRpzActionDrop(value: number) {
    this._dnsRpzActionDrop = value;
  }
  public resetDnsRpzActionDrop() {
    this._dnsRpzActionDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsRpzActionDropInput() {
    return this._dnsRpzActionDrop;
  }

  // dns_rpz_action_local_data - computed: false, optional: true, required: false
  private _dnsRpzActionLocalData?: number; 
  public get dnsRpzActionLocalData() {
    return this.getNumberAttribute('dns_rpz_action_local_data');
  }
  public set dnsRpzActionLocalData(value: number) {
    this._dnsRpzActionLocalData = value;
  }
  public resetDnsRpzActionLocalData() {
    this._dnsRpzActionLocalData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsRpzActionLocalDataInput() {
    return this._dnsRpzActionLocalData;
  }

  // dns_rpz_action_nodata - computed: false, optional: true, required: false
  private _dnsRpzActionNodata?: number; 
  public get dnsRpzActionNodata() {
    return this.getNumberAttribute('dns_rpz_action_nodata');
  }
  public set dnsRpzActionNodata(value: number) {
    this._dnsRpzActionNodata = value;
  }
  public resetDnsRpzActionNodata() {
    this._dnsRpzActionNodata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsRpzActionNodataInput() {
    return this._dnsRpzActionNodata;
  }

  // dns_rpz_action_nxdomain - computed: false, optional: true, required: false
  private _dnsRpzActionNxdomain?: number; 
  public get dnsRpzActionNxdomain() {
    return this.getNumberAttribute('dns_rpz_action_nxdomain');
  }
  public set dnsRpzActionNxdomain(value: number) {
    this._dnsRpzActionNxdomain = value;
  }
  public resetDnsRpzActionNxdomain() {
    this._dnsRpzActionNxdomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsRpzActionNxdomainInput() {
    return this._dnsRpzActionNxdomain;
  }

  // dns_rpz_action_pass_thru - computed: false, optional: true, required: false
  private _dnsRpzActionPassThru?: number; 
  public get dnsRpzActionPassThru() {
    return this.getNumberAttribute('dns_rpz_action_pass_thru');
  }
  public set dnsRpzActionPassThru(value: number) {
    this._dnsRpzActionPassThru = value;
  }
  public resetDnsRpzActionPassThru() {
    this._dnsRpzActionPassThru = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsRpzActionPassThruInput() {
    return this._dnsRpzActionPassThru;
  }

  // dns_rpz_action_tcp_only - computed: false, optional: true, required: false
  private _dnsRpzActionTcpOnly?: number; 
  public get dnsRpzActionTcpOnly() {
    return this.getNumberAttribute('dns_rpz_action_tcp_only');
  }
  public set dnsRpzActionTcpOnly(value: number) {
    this._dnsRpzActionTcpOnly = value;
  }
  public resetDnsRpzActionTcpOnly() {
    this._dnsRpzActionTcpOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsRpzActionTcpOnlyInput() {
    return this._dnsRpzActionTcpOnly;
  }

  // dns_rpz_trigger_client_ip - computed: false, optional: true, required: false
  private _dnsRpzTriggerClientIp?: number; 
  public get dnsRpzTriggerClientIp() {
    return this.getNumberAttribute('dns_rpz_trigger_client_ip');
  }
  public set dnsRpzTriggerClientIp(value: number) {
    this._dnsRpzTriggerClientIp = value;
  }
  public resetDnsRpzTriggerClientIp() {
    this._dnsRpzTriggerClientIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsRpzTriggerClientIpInput() {
    return this._dnsRpzTriggerClientIp;
  }

  // dns_rpz_trigger_ns_ip - computed: false, optional: true, required: false
  private _dnsRpzTriggerNsIp?: number; 
  public get dnsRpzTriggerNsIp() {
    return this.getNumberAttribute('dns_rpz_trigger_ns_ip');
  }
  public set dnsRpzTriggerNsIp(value: number) {
    this._dnsRpzTriggerNsIp = value;
  }
  public resetDnsRpzTriggerNsIp() {
    this._dnsRpzTriggerNsIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsRpzTriggerNsIpInput() {
    return this._dnsRpzTriggerNsIp;
  }

  // dns_rpz_trigger_ns_name - computed: false, optional: true, required: false
  private _dnsRpzTriggerNsName?: number; 
  public get dnsRpzTriggerNsName() {
    return this.getNumberAttribute('dns_rpz_trigger_ns_name');
  }
  public set dnsRpzTriggerNsName(value: number) {
    this._dnsRpzTriggerNsName = value;
  }
  public resetDnsRpzTriggerNsName() {
    this._dnsRpzTriggerNsName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsRpzTriggerNsNameInput() {
    return this._dnsRpzTriggerNsName;
  }

  // dns_rpz_trigger_qname - computed: false, optional: true, required: false
  private _dnsRpzTriggerQname?: number; 
  public get dnsRpzTriggerQname() {
    return this.getNumberAttribute('dns_rpz_trigger_qname');
  }
  public set dnsRpzTriggerQname(value: number) {
    this._dnsRpzTriggerQname = value;
  }
  public resetDnsRpzTriggerQname() {
    this._dnsRpzTriggerQname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsRpzTriggerQnameInput() {
    return this._dnsRpzTriggerQname;
  }

  // dns_rpz_trigger_resp_ip - computed: false, optional: true, required: false
  private _dnsRpzTriggerRespIp?: number; 
  public get dnsRpzTriggerRespIp() {
    return this.getNumberAttribute('dns_rpz_trigger_resp_ip');
  }
  public set dnsRpzTriggerRespIp(value: number) {
    this._dnsRpzTriggerRespIp = value;
  }
  public resetDnsRpzTriggerRespIp() {
    this._dnsRpzTriggerRespIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsRpzTriggerRespIpInput() {
    return this._dnsRpzTriggerRespIp;
  }

  // dnsrrl_bad_fqdn - computed: false, optional: true, required: false
  private _dnsrrlBadFqdn?: number; 
  public get dnsrrlBadFqdn() {
    return this.getNumberAttribute('dnsrrl_bad_fqdn');
  }
  public set dnsrrlBadFqdn(value: number) {
    this._dnsrrlBadFqdn = value;
  }
  public resetDnsrrlBadFqdn() {
    this._dnsrrlBadFqdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsrrlBadFqdnInput() {
    return this._dnsrrlBadFqdn;
  }

  // dnsrrl_nx_exceed - computed: false, optional: true, required: false
  private _dnsrrlNxExceed?: number; 
  public get dnsrrlNxExceed() {
    return this.getNumberAttribute('dnsrrl_nx_exceed');
  }
  public set dnsrrlNxExceed(value: number) {
    this._dnsrrlNxExceed = value;
  }
  public resetDnsrrlNxExceed() {
    this._dnsrrlNxExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsrrlNxExceedInput() {
    return this._dnsrrlNxExceed;
  }

  // dnsrrl_total_allowed - computed: false, optional: true, required: false
  private _dnsrrlTotalAllowed?: number; 
  public get dnsrrlTotalAllowed() {
    return this.getNumberAttribute('dnsrrl_total_allowed');
  }
  public set dnsrrlTotalAllowed(value: number) {
    this._dnsrrlTotalAllowed = value;
  }
  public resetDnsrrlTotalAllowed() {
    this._dnsrrlTotalAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsrrlTotalAllowedInput() {
    return this._dnsrrlTotalAllowed;
  }

  // dnsrrl_total_dropped - computed: false, optional: true, required: false
  private _dnsrrlTotalDropped?: number; 
  public get dnsrrlTotalDropped() {
    return this.getNumberAttribute('dnsrrl_total_dropped');
  }
  public set dnsrrlTotalDropped(value: number) {
    this._dnsrrlTotalDropped = value;
  }
  public resetDnsrrlTotalDropped() {
    this._dnsrrlTotalDropped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsrrlTotalDroppedInput() {
    return this._dnsrrlTotalDropped;
  }

  // dnsrrl_total_slipped - computed: false, optional: true, required: false
  private _dnsrrlTotalSlipped?: number; 
  public get dnsrrlTotalSlipped() {
    return this.getNumberAttribute('dnsrrl_total_slipped');
  }
  public set dnsrrlTotalSlipped(value: number) {
    this._dnsrrlTotalSlipped = value;
  }
  public resetDnsrrlTotalSlipped() {
    this._dnsrrlTotalSlipped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsrrlTotalSlippedInput() {
    return this._dnsrrlTotalSlipped;
  }

  // dnsrrl_total_tc - computed: false, optional: true, required: false
  private _dnsrrlTotalTc?: number; 
  public get dnsrrlTotalTc() {
    return this.getNumberAttribute('dnsrrl_total_tc');
  }
  public set dnsrrlTotalTc(value: number) {
    this._dnsrrlTotalTc = value;
  }
  public resetDnsrrlTotalTc() {
    this._dnsrrlTotalTc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsrrlTotalTcInput() {
    return this._dnsrrlTotalTc;
  }

  // dynamic_memory - computed: false, optional: true, required: false
  private _dynamicMemory?: number; 
  public get dynamicMemory() {
    return this.getNumberAttribute('dynamic_memory');
  }
  public set dynamicMemory(value: number) {
    this._dynamicMemory = value;
  }
  public resetDynamicMemory() {
    this._dynamicMemory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicMemoryInput() {
    return this._dynamicMemory;
  }

  // es_total_failure_actions - computed: false, optional: true, required: false
  private _esTotalFailureActions?: number; 
  public get esTotalFailureActions() {
    return this.getNumberAttribute('es_total_failure_actions');
  }
  public set esTotalFailureActions(value: number) {
    this._esTotalFailureActions = value;
  }
  public resetEsTotalFailureActions() {
    this._esTotalFailureActions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get esTotalFailureActionsInput() {
    return this._esTotalFailureActions;
  }

  // fastest_rsp_time - computed: false, optional: true, required: false
  private _fastestRspTime?: number; 
  public get fastestRspTime() {
    return this.getNumberAttribute('fastest_rsp_time');
  }
  public set fastestRspTime(value: number) {
    this._fastestRspTime = value;
  }
  public resetFastestRspTime() {
    this._fastestRspTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fastestRspTimeInput() {
    return this._fastestRspTime;
  }

  // http1_client_idle_timeout - computed: false, optional: true, required: false
  private _http1ClientIdleTimeout?: number; 
  public get http1ClientIdleTimeout() {
    return this.getNumberAttribute('http1_client_idle_timeout');
  }
  public set http1ClientIdleTimeout(value: number) {
    this._http1ClientIdleTimeout = value;
  }
  public resetHttp1ClientIdleTimeout() {
    this._http1ClientIdleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http1ClientIdleTimeoutInput() {
    return this._http1ClientIdleTimeout;
  }

  // http2_client_idle_timeout - computed: false, optional: true, required: false
  private _http2ClientIdleTimeout?: number; 
  public get http2ClientIdleTimeout() {
    return this.getNumberAttribute('http2_client_idle_timeout');
  }
  public set http2ClientIdleTimeout(value: number) {
    this._http2ClientIdleTimeout = value;
  }
  public resetHttp2ClientIdleTimeout() {
    this._http2ClientIdleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http2ClientIdleTimeoutInput() {
    return this._http2ClientIdleTimeout;
  }

  // in_latency - computed: false, optional: true, required: false
  private _inLatency?: number; 
  public get inLatency() {
    return this.getNumberAttribute('in_latency');
  }
  public set inLatency(value: number) {
    this._inLatency = value;
  }
  public resetInLatency() {
    this._inLatency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inLatencyInput() {
    return this._inLatency;
  }

  // ip_only_lb_fwd_bytes - computed: false, optional: true, required: false
  private _ipOnlyLbFwdBytes?: number; 
  public get ipOnlyLbFwdBytes() {
    return this.getNumberAttribute('ip_only_lb_fwd_bytes');
  }
  public set ipOnlyLbFwdBytes(value: number) {
    this._ipOnlyLbFwdBytes = value;
  }
  public resetIpOnlyLbFwdBytes() {
    this._ipOnlyLbFwdBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipOnlyLbFwdBytesInput() {
    return this._ipOnlyLbFwdBytes;
  }

  // ip_only_lb_fwd_pkts - computed: false, optional: true, required: false
  private _ipOnlyLbFwdPkts?: number; 
  public get ipOnlyLbFwdPkts() {
    return this.getNumberAttribute('ip_only_lb_fwd_pkts');
  }
  public set ipOnlyLbFwdPkts(value: number) {
    this._ipOnlyLbFwdPkts = value;
  }
  public resetIpOnlyLbFwdPkts() {
    this._ipOnlyLbFwdPkts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipOnlyLbFwdPktsInput() {
    return this._ipOnlyLbFwdPkts;
  }

  // ip_only_lb_rev_bytes - computed: false, optional: true, required: false
  private _ipOnlyLbRevBytes?: number; 
  public get ipOnlyLbRevBytes() {
    return this.getNumberAttribute('ip_only_lb_rev_bytes');
  }
  public set ipOnlyLbRevBytes(value: number) {
    this._ipOnlyLbRevBytes = value;
  }
  public resetIpOnlyLbRevBytes() {
    this._ipOnlyLbRevBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipOnlyLbRevBytesInput() {
    return this._ipOnlyLbRevBytes;
  }

  // ip_only_lb_rev_pkts - computed: false, optional: true, required: false
  private _ipOnlyLbRevPkts?: number; 
  public get ipOnlyLbRevPkts() {
    return this.getNumberAttribute('ip_only_lb_rev_pkts');
  }
  public set ipOnlyLbRevPkts(value: number) {
    this._ipOnlyLbRevPkts = value;
  }
  public resetIpOnlyLbRevPkts() {
    this._ipOnlyLbRevPkts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipOnlyLbRevPktsInput() {
    return this._ipOnlyLbRevPkts;
  }

  // last_rsp_time - computed: false, optional: true, required: false
  private _lastRspTime?: number; 
  public get lastRspTime() {
    return this.getNumberAttribute('last_rsp_time');
  }
  public set lastRspTime(value: number) {
    this._lastRspTime = value;
  }
  public resetLastRspTime() {
    this._lastRspTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastRspTimeInput() {
    return this._lastRspTime;
  }

  // loc_conn - computed: false, optional: true, required: false
  private _locConn?: number; 
  public get locConn() {
    return this.getNumberAttribute('loc_conn');
  }
  public set locConn(value: number) {
    this._locConn = value;
  }
  public resetLocConn() {
    this._locConn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locConnInput() {
    return this._locConn;
  }

  // loc_deny - computed: false, optional: true, required: false
  private _locDeny?: number; 
  public get locDeny() {
    return this.getNumberAttribute('loc_deny');
  }
  public set locDeny(value: number) {
    this._locDeny = value;
  }
  public resetLocDeny() {
    this._locDeny = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locDenyInput() {
    return this._locDeny;
  }

  // loc_permit - computed: false, optional: true, required: false
  private _locPermit?: number; 
  public get locPermit() {
    return this.getNumberAttribute('loc_permit');
  }
  public set locPermit(value: number) {
    this._locPermit = value;
  }
  public resetLocPermit() {
    this._locPermit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locPermitInput() {
    return this._locPermit;
  }

  // out_latency - computed: false, optional: true, required: false
  private _outLatency?: number; 
  public get outLatency() {
    return this.getNumberAttribute('out_latency');
  }
  public set outLatency(value: number) {
    this._outLatency = value;
  }
  public resetOutLatency() {
    this._outLatency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outLatencyInput() {
    return this._outLatency;
  }

  // peak_conn - computed: false, optional: true, required: false
  private _peakConn?: number; 
  public get peakConn() {
    return this.getNumberAttribute('peak_conn');
  }
  public set peakConn(value: number) {
    this._peakConn = value;
  }
  public resetPeakConn() {
    this._peakConn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peakConnInput() {
    return this._peakConn;
  }

  // slowest_rsp_time - computed: false, optional: true, required: false
  private _slowestRspTime?: number; 
  public get slowestRspTime() {
    return this.getNumberAttribute('slowest_rsp_time');
  }
  public set slowestRspTime(value: number) {
    this._slowestRspTime = value;
  }
  public resetSlowestRspTime() {
    this._slowestRspTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slowestRspTimeInput() {
    return this._slowestRspTime;
  }

  // throughput_bits_per_sec - computed: false, optional: true, required: false
  private _throughputBitsPerSec?: number; 
  public get throughputBitsPerSec() {
    return this.getNumberAttribute('throughput_bits_per_sec');
  }
  public set throughputBitsPerSec(value: number) {
    this._throughputBitsPerSec = value;
  }
  public resetThroughputBitsPerSec() {
    this._throughputBitsPerSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throughputBitsPerSecInput() {
    return this._throughputBitsPerSec;
  }

  // total_conn - computed: false, optional: true, required: false
  private _totalConn?: number; 
  public get totalConn() {
    return this.getNumberAttribute('total_conn');
  }
  public set totalConn(value: number) {
    this._totalConn = value;
  }
  public resetTotalConn() {
    this._totalConn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalConnInput() {
    return this._totalConn;
  }

  // total_dns_filter_class_drop - computed: false, optional: true, required: false
  private _totalDnsFilterClassDrop?: number; 
  public get totalDnsFilterClassDrop() {
    return this.getNumberAttribute('total_dns_filter_class_drop');
  }
  public set totalDnsFilterClassDrop(value: number) {
    this._totalDnsFilterClassDrop = value;
  }
  public resetTotalDnsFilterClassDrop() {
    this._totalDnsFilterClassDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalDnsFilterClassDropInput() {
    return this._totalDnsFilterClassDrop;
  }

  // total_dns_filter_type_drop - computed: false, optional: true, required: false
  private _totalDnsFilterTypeDrop?: number; 
  public get totalDnsFilterTypeDrop() {
    return this.getNumberAttribute('total_dns_filter_type_drop');
  }
  public set totalDnsFilterTypeDrop(value: number) {
    this._totalDnsFilterTypeDrop = value;
  }
  public resetTotalDnsFilterTypeDrop() {
    this._totalDnsFilterTypeDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalDnsFilterTypeDropInput() {
    return this._totalDnsFilterTypeDrop;
  }

  // total_dns_pkts - computed: false, optional: true, required: false
  private _totalDnsPkts?: number; 
  public get totalDnsPkts() {
    return this.getNumberAttribute('total_dns_pkts');
  }
  public set totalDnsPkts(value: number) {
    this._totalDnsPkts = value;
  }
  public resetTotalDnsPkts() {
    this._totalDnsPkts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalDnsPktsInput() {
    return this._totalDnsPkts;
  }

  // total_fwd_bytes - computed: false, optional: true, required: false
  private _totalFwdBytes?: number; 
  public get totalFwdBytes() {
    return this.getNumberAttribute('total_fwd_bytes');
  }
  public set totalFwdBytes(value: number) {
    this._totalFwdBytes = value;
  }
  public resetTotalFwdBytes() {
    this._totalFwdBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalFwdBytesInput() {
    return this._totalFwdBytes;
  }

  // total_fwd_bytes_out - computed: false, optional: true, required: false
  private _totalFwdBytesOut?: number; 
  public get totalFwdBytesOut() {
    return this.getNumberAttribute('total_fwd_bytes_out');
  }
  public set totalFwdBytesOut(value: number) {
    this._totalFwdBytesOut = value;
  }
  public resetTotalFwdBytesOut() {
    this._totalFwdBytesOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalFwdBytesOutInput() {
    return this._totalFwdBytesOut;
  }

  // total_fwd_pkts - computed: false, optional: true, required: false
  private _totalFwdPkts?: number; 
  public get totalFwdPkts() {
    return this.getNumberAttribute('total_fwd_pkts');
  }
  public set totalFwdPkts(value: number) {
    this._totalFwdPkts = value;
  }
  public resetTotalFwdPkts() {
    this._totalFwdPkts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalFwdPktsInput() {
    return this._totalFwdPkts;
  }

  // total_fwd_pkts_out - computed: false, optional: true, required: false
  private _totalFwdPktsOut?: number; 
  public get totalFwdPktsOut() {
    return this.getNumberAttribute('total_fwd_pkts_out');
  }
  public set totalFwdPktsOut(value: number) {
    this._totalFwdPktsOut = value;
  }
  public resetTotalFwdPktsOut() {
    this._totalFwdPktsOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalFwdPktsOutInput() {
    return this._totalFwdPktsOut;
  }

  // total_l4_conn - computed: false, optional: true, required: false
  private _totalL4Conn?: number; 
  public get totalL4Conn() {
    return this.getNumberAttribute('total_l4_conn');
  }
  public set totalL4Conn(value: number) {
    this._totalL4Conn = value;
  }
  public resetTotalL4Conn() {
    this._totalL4Conn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalL4ConnInput() {
    return this._totalL4Conn;
  }

  // total_l7_conn - computed: false, optional: true, required: false
  private _totalL7Conn?: number; 
  public get totalL7Conn() {
    return this.getNumberAttribute('total_l7_conn');
  }
  public set totalL7Conn(value: number) {
    this._totalL7Conn = value;
  }
  public resetTotalL7Conn() {
    this._totalL7Conn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalL7ConnInput() {
    return this._totalL7Conn;
  }

  // total_mf_dns_pkts - computed: false, optional: true, required: false
  private _totalMfDnsPkts?: number; 
  public get totalMfDnsPkts() {
    return this.getNumberAttribute('total_mf_dns_pkts');
  }
  public set totalMfDnsPkts(value: number) {
    this._totalMfDnsPkts = value;
  }
  public resetTotalMfDnsPkts() {
    this._totalMfDnsPkts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalMfDnsPktsInput() {
    return this._totalMfDnsPkts;
  }

  // total_req - computed: false, optional: true, required: false
  private _totalReq?: number; 
  public get totalReq() {
    return this.getNumberAttribute('total_req');
  }
  public set totalReq(value: number) {
    this._totalReq = value;
  }
  public resetTotalReq() {
    this._totalReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalReqInput() {
    return this._totalReq;
  }

  // total_req_succ - computed: false, optional: true, required: false
  private _totalReqSucc?: number; 
  public get totalReqSucc() {
    return this.getNumberAttribute('total_req_succ');
  }
  public set totalReqSucc(value: number) {
    this._totalReqSucc = value;
  }
  public resetTotalReqSucc() {
    this._totalReqSucc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalReqSuccInput() {
    return this._totalReqSucc;
  }

  // total_resp - computed: false, optional: true, required: false
  private _totalResp?: number; 
  public get totalResp() {
    return this.getNumberAttribute('total_resp');
  }
  public set totalResp(value: number) {
    this._totalResp = value;
  }
  public resetTotalResp() {
    this._totalResp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalRespInput() {
    return this._totalResp;
  }

  // total_resp_succ - computed: false, optional: true, required: false
  private _totalRespSucc?: number; 
  public get totalRespSucc() {
    return this.getNumberAttribute('total_resp_succ');
  }
  public set totalRespSucc(value: number) {
    this._totalRespSucc = value;
  }
  public resetTotalRespSucc() {
    this._totalRespSucc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalRespSuccInput() {
    return this._totalRespSucc;
  }

  // total_rev_bytes - computed: false, optional: true, required: false
  private _totalRevBytes?: number; 
  public get totalRevBytes() {
    return this.getNumberAttribute('total_rev_bytes');
  }
  public set totalRevBytes(value: number) {
    this._totalRevBytes = value;
  }
  public resetTotalRevBytes() {
    this._totalRevBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalRevBytesInput() {
    return this._totalRevBytes;
  }

  // total_rev_bytes_out - computed: false, optional: true, required: false
  private _totalRevBytesOut?: number; 
  public get totalRevBytesOut() {
    return this.getNumberAttribute('total_rev_bytes_out');
  }
  public set totalRevBytesOut(value: number) {
    this._totalRevBytesOut = value;
  }
  public resetTotalRevBytesOut() {
    this._totalRevBytesOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalRevBytesOutInput() {
    return this._totalRevBytesOut;
  }

  // total_rev_pkts - computed: false, optional: true, required: false
  private _totalRevPkts?: number; 
  public get totalRevPkts() {
    return this.getNumberAttribute('total_rev_pkts');
  }
  public set totalRevPkts(value: number) {
    this._totalRevPkts = value;
  }
  public resetTotalRevPkts() {
    this._totalRevPkts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalRevPktsInput() {
    return this._totalRevPkts;
  }

  // total_rev_pkts_out - computed: false, optional: true, required: false
  private _totalRevPktsOut?: number; 
  public get totalRevPktsOut() {
    return this.getNumberAttribute('total_rev_pkts_out');
  }
  public set totalRevPktsOut(value: number) {
    this._totalRevPktsOut = value;
  }
  public resetTotalRevPktsOut() {
    this._totalRevPktsOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalRevPktsOutInput() {
    return this._totalRevPktsOut;
  }

  // total_ssl_conn - computed: false, optional: true, required: false
  private _totalSslConn?: number; 
  public get totalSslConn() {
    return this.getNumberAttribute('total_ssl_conn');
  }
  public set totalSslConn(value: number) {
    this._totalSslConn = value;
  }
  public resetTotalSslConn() {
    this._totalSslConn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalSslConnInput() {
    return this._totalSslConn;
  }

  // total_tcp_conn - computed: false, optional: true, required: false
  private _totalTcpConn?: number; 
  public get totalTcpConn() {
    return this.getNumberAttribute('total_tcp_conn');
  }
  public set totalTcpConn(value: number) {
    this._totalTcpConn = value;
  }
  public resetTotalTcpConn() {
    this._totalTcpConn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalTcpConnInput() {
    return this._totalTcpConn;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_virtual_server_port_stats thunder_slb_virtual_server_port_stats}
*/
export class DataThunderSlbVirtualServerPortStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_virtual_server_port_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSlbVirtualServerPortStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSlbVirtualServerPortStats to import
  * @param importFromId The id of the existing DataThunderSlbVirtualServerPortStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_virtual_server_port_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSlbVirtualServerPortStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_virtual_server_port_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_virtual_server_port_stats thunder_slb_virtual_server_port_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSlbVirtualServerPortStatsConfig
  */
  public constructor(scope: Construct, id: string, config: DataThunderSlbVirtualServerPortStatsConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_virtual_server_port_stats',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._portNumber = config.portNumber;
    this._protocol = config.protocol;
    this._virtualServerName = config.virtualServerName;
    this._stats.internalValue = config.stats;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // port_number - computed: false, optional: false, required: true
  private _portNumber?: number; 
  public get portNumber() {
    return this.getNumberAttribute('port_number');
  }
  public set portNumber(value: number) {
    this._portNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portNumberInput() {
    return this._portNumber;
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

  // virtual_server_name - computed: false, optional: false, required: true
  private _virtualServerName?: string; 
  public get virtualServerName() {
    return this.getStringAttribute('virtual_server_name');
  }
  public set virtualServerName(value: string) {
    this._virtualServerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualServerNameInput() {
    return this._virtualServerName;
  }

  // stats - computed: false, optional: true, required: false
  private _stats = new DataThunderSlbVirtualServerPortStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderSlbVirtualServerPortStatsStats) {
    this._stats.internalValue = value;
  }
  public resetStats() {
    this._stats.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statsInput() {
    return this._stats.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      port_number: cdktf.numberToTerraform(this._portNumber),
      protocol: cdktf.stringToTerraform(this._protocol),
      virtual_server_name: cdktf.stringToTerraform(this._virtualServerName),
      stats: dataThunderSlbVirtualServerPortStatsStatsToTerraform(this._stats.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port_number: {
        value: cdktf.numberToHclTerraform(this._portNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      virtual_server_name: {
        value: cdktf.stringToHclTerraform(this._virtualServerName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stats: {
        value: dataThunderSlbVirtualServerPortStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSlbVirtualServerPortStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
