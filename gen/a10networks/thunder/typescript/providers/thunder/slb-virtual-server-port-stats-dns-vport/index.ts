// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SlbVirtualServerPortStatsDnsVportConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#id SlbVirtualServerPortStatsDnsVport#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#port_number SlbVirtualServerPortStatsDnsVport#port_number}
  */
  readonly portNumber: number;
  /**
  * 'tcp': TCP LB service; 'udp': UDP Port; 'others': for no tcp/udp protocol, do IP load balancing; 'diameter': diameter port; 'dns-tcp': DNS service over TCP; 'dns-udp': DNS service over UDP; 'fast-http': Fast HTTP Port; 'fix': FIX Port; 'ftp': File Transfer Protocol Port; 'ftp-proxy': ftp proxy port; 'http': HTTP Port; 'https': HTTPS port; 'imap': imap proxy port; 'mlb': Message based load balancing; 'mms': Microsoft Multimedia Service Port; 'mysql': mssql port; 'mssql': mssql; 'pop3': pop3 proxy port; 'radius': RADIUS Port; 'rtsp': Real Time Streaming Protocol Port; 'sip': Session initiation protocol over UDP; 'sip-tcp': Session initiation protocol over TCP; 'sips': Session initiation protocol over TLS; 'smpp-tcp': SMPP service over TCP; 'spdy': spdy port; 'spdys': spdys port; 'smtp': SMTP Port; 'mqtt': MQTT Port; 'mqtts': MQTTS Port; 'ssl-proxy': Generic SSL proxy; 'ssli': SSL insight; 'ssh': SSH Port; 'tcp-proxy': Generic TCP proxy; 'tftp': TFTP Port; 'fast-fix': Fast FIX port; 'http-over-quic': HTTP3-over-quic port;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#protocol SlbVirtualServerPortStatsDnsVport#protocol}
  */
  readonly protocol: string;
  /**
  * Virtual_server_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#virtual_server_name SlbVirtualServerPortStatsDnsVport#virtual_server_name}
  */
  readonly virtualServerName: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#stats SlbVirtualServerPortStatsDnsVport#stats}
  */
  readonly stats?: SlbVirtualServerPortStatsDnsVportStats;
}
export interface SlbVirtualServerPortStatsDnsVportStatsDnsVport {
  /**
  * request cache hit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#dns_cache_hit SlbVirtualServerPortStatsDnsVport#dns_cache_hit}
  */
  readonly dnsCacheHit?: number;
  /**
  * DNS Category Action Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#dns_category_action_drop SlbVirtualServerPortStatsDnsVport#dns_category_action_drop}
  */
  readonly dnsCategoryActionDrop?: number;
  /**
  * DNS Category Action Permit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#dns_category_action_permit SlbVirtualServerPortStatsDnsVport#dns_category_action_permit}
  */
  readonly dnsCategoryActionPermit?: number;
  /**
  * DNS Category Action Respond
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#dns_category_action_respond SlbVirtualServerPortStatsDnsVport#dns_category_action_respond}
  */
  readonly dnsCategoryActionRespond?: number;
  /**
  * DNS Category Async Result Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#dns_category_async_received SlbVirtualServerPortStatsDnsVport#dns_category_async_received}
  */
  readonly dnsCategoryAsyncReceived?: number;
  /**
  * DNS Category Async Request Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#dns_category_async_sent SlbVirtualServerPortStatsDnsVport#dns_category_async_sent}
  */
  readonly dnsCategoryAsyncSent?: number;
  /**
  * DNS Category Bypass
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#dns_category_bypass SlbVirtualServerPortStatsDnsVport#dns_category_bypass}
  */
  readonly dnsCategoryBypass?: number;
  /**
  * Cannot find DNS Category in local DB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#dns_category_no_local_result SlbVirtualServerPortStatsDnsVport#dns_category_no_local_result}
  */
  readonly dnsCategoryNoLocalResult?: number;
  /**
  * DNS Category Action Type A
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#dns_category_resp_a SlbVirtualServerPortStatsDnsVport#dns_category_resp_a}
  */
  readonly dnsCategoryRespA?: number;
  /**
  * DNS Category Action Type AAAA
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#dns_category_resp_aaaa SlbVirtualServerPortStatsDnsVport#dns_category_resp_aaaa}
  */
  readonly dnsCategoryRespAaaa?: number;
  /**
  * DNS Category Action Type CNAME
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#dns_category_resp_cname SlbVirtualServerPortStatsDnsVport#dns_category_resp_cname}
  */
  readonly dnsCategoryRespCname?: number;
  /**
  * DNS Category Action NO Answer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#dns_category_resp_noanswer SlbVirtualServerPortStatsDnsVport#dns_category_resp_noanswer}
  */
  readonly dnsCategoryRespNoanswer?: number;
  /**
  * DNS Category Action NXDomain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#dns_category_resp_nxdomain SlbVirtualServerPortStatsDnsVport#dns_category_resp_nxdomain}
  */
  readonly dnsCategoryRespNxdomain?: number;
  /**
  * counters DNS Filter Class ANY Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#dns_filter_class_any_drop SlbVirtualServerPortStatsDnsVport#dns_filter_class_any_drop}
  */
  readonly dnsFilterClassAnyDrop?: number;
  /**
  * counters DNS Filter Class CHAOS Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#dns_filter_class_chaos_drop SlbVirtualServerPortStatsDnsVport#dns_filter_class_chaos_drop}
  */
  readonly dnsFilterClassChaosDrop?: number;
  /**
  * counters DNS Filter Class HESIOD Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#dns_filter_class_hesiod_drop SlbVirtualServerPortStatsDnsVport#dns_filter_class_hesiod_drop}
  */
  readonly dnsFilterClassHesiodDrop?: number;
  /**
  * counters DNS Filter Class INTERNET Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#dns_filter_class_internet_drop SlbVirtualServerPortStatsDnsVport#dns_filter_class_internet_drop}
  */
  readonly dnsFilterClassInternetDrop?: number;
  /**
  * counters DNS Filter Class NONE Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#dns_filter_class_none_drop SlbVirtualServerPortStatsDnsVport#dns_filter_class_none_drop}
  */
  readonly dnsFilterClassNoneDrop?: number;
  /**
  * counters DNS Filter Class OTHER Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#dns_filter_class_others_drop SlbVirtualServerPortStatsDnsVport#dns_filter_class_others_drop}
  */
  readonly dnsFilterClassOthersDrop?: number;
  /**
  * counters Total DNS Filter TLD Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#dns_filter_tld_drop SlbVirtualServerPortStatsDnsVport#dns_filter_tld_drop}
  */
  readonly dnsFilterTldDrop?: number;
  /**
  * counters DNS Filter Type A Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#dns_filter_type_a_drop SlbVirtualServerPortStatsDnsVport#dns_filter_type_a_drop}
  */
  readonly dnsFilterTypeADrop?: number;
  /**
  * counters DNS Filter Type AAAA Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#dns_filter_type_aaaa_drop SlbVirtualServerPortStatsDnsVport#dns_filter_type_aaaa_drop}
  */
  readonly dnsFilterTypeAaaaDrop?: number;
  /**
  * counters DNS Filter Type Any Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#dns_filter_type_any_drop SlbVirtualServerPortStatsDnsVport#dns_filter_type_any_drop}
  */
  readonly dnsFilterTypeAnyDrop?: number;
  /**
  * counters DNS Filter Type CNAME Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#dns_filter_type_cname_drop SlbVirtualServerPortStatsDnsVport#dns_filter_type_cname_drop}
  */
  readonly dnsFilterTypeCnameDrop?: number;
  /**
  * counters DNS Filter Type MX Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#dns_filter_type_mx_drop SlbVirtualServerPortStatsDnsVport#dns_filter_type_mx_drop}
  */
  readonly dnsFilterTypeMxDrop?: number;
  /**
  * counters DNS Filter Type NS Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#dns_filter_type_ns_drop SlbVirtualServerPortStatsDnsVport#dns_filter_type_ns_drop}
  */
  readonly dnsFilterTypeNsDrop?: number;
  /**
  * counters DNS Filter Type OTHERS Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#dns_filter_type_others_drop SlbVirtualServerPortStatsDnsVport#dns_filter_type_others_drop}
  */
  readonly dnsFilterTypeOthersDrop?: number;
  /**
  * counters DNS Filter Type PTR Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#dns_filter_type_ptr_drop SlbVirtualServerPortStatsDnsVport#dns_filter_type_ptr_drop}
  */
  readonly dnsFilterTypePtrDrop?: number;
  /**
  * counters DNS Filter Type SOA Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#dns_filter_type_soa_drop SlbVirtualServerPortStatsDnsVport#dns_filter_type_soa_drop}
  */
  readonly dnsFilterTypeSoaDrop?: number;
  /**
  * counters DNS Filter Type SRV Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#dns_filter_type_srv_drop SlbVirtualServerPortStatsDnsVport#dns_filter_type_srv_drop}
  */
  readonly dnsFilterTypeSrvDrop?: number;
  /**
  * counters DNS Filter Type TXT Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#dns_filter_type_txt_drop SlbVirtualServerPortStatsDnsVport#dns_filter_type_txt_drop}
  */
  readonly dnsFilterTypeTxtDrop?: number;
  /**
  * DNS Full Response from Cache
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#dns_full_response_from_cache SlbVirtualServerPortStatsDnsVport#dns_full_response_from_cache}
  */
  readonly dnsFullResponseFromCache?: number;
  /**
  * DNS negative cache return to client
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#dns_negative_served SlbVirtualServerPortStatsDnsVport#dns_negative_served}
  */
  readonly dnsNegativeServed?: number;
  /**
  * DNS Recursive Resolution Buffer Allocation Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#dns_recursive_resolution_buff_alloc_failed SlbVirtualServerPortStatsDnsVport#dns_recursive_resolution_buff_alloc_failed}
  */
  readonly dnsRecursiveResolutionBuffAllocFailed?: number;
  /**
  * DNS Recursive Resolution Serving Full Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#dns_recursive_resolution_full_response SlbVirtualServerPortStatsDnsVport#dns_recursive_resolution_full_response}
  */
  readonly dnsRecursiveResolutionFullResponse?: number;
  /**
  * DNS Recursive Resolution ICMP Err
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#dns_recursive_resolution_icmp_err SlbVirtualServerPortStatsDnsVport#dns_recursive_resolution_icmp_err}
  */
  readonly dnsRecursiveResolutionIcmpErr?: number;
  /**
  * DNS Recursive Resolution Invalid Hints
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#dns_recursive_resolution_invalid_hints SlbVirtualServerPortStatsDnsVport#dns_recursive_resolution_invalid_hints}
  */
  readonly dnsRecursiveResolutionInvalidHints?: number;
  /**
  * DNS Recursive Resolution Parallel Queries Late Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#dns_recursive_resolution_late_ans SlbVirtualServerPortStatsDnsVport#dns_recursive_resolution_late_ans}
  */
  readonly dnsRecursiveResolutionLateAns?: number;
  /**
  * DNS Recursive Resolution Lookup IP Protocol Switch 4to6
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#dns_recursive_resolution_lookup_ip_proto_switch_46 SlbVirtualServerPortStatsDnsVport#dns_recursive_resolution_lookup_ip_proto_switch_46}
  */
  readonly dnsRecursiveResolutionLookupIpProtoSwitch46?: number;
  /**
  * DNS Recursive Resolution Lookup IP Protocol Switch 6to4
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#dns_recursive_resolution_lookup_ip_proto_switch_64 SlbVirtualServerPortStatsDnsVport#dns_recursive_resolution_lookup_ip_proto_switch_64}
  */
  readonly dnsRecursiveResolutionLookupIpProtoSwitch64?: number;
  /**
  * DNS Recursive Resolution Max Trials Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#dns_recursive_resolution_max_trials_exceeded SlbVirtualServerPortStatsDnsVport#dns_recursive_resolution_max_trials_exceeded}
  */
  readonly dnsRecursiveResolutionMaxTrialsExceeded?: number;
  /**
  * DNS Recursive Resolution missing Glue Record
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#dns_recursive_resolution_missing_glue SlbVirtualServerPortStatsDnsVport#dns_recursive_resolution_missing_glue}
  */
  readonly dnsRecursiveResolutionMissingGlue?: number;
  /**
  * DNS Recursive Resolution No Hints
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#dns_recursive_resolution_no_hints SlbVirtualServerPortStatsDnsVport#dns_recursive_resolution_no_hints}
  */
  readonly dnsRecursiveResolutionNoHints?: number;
  /**
  * DNS Recursive Resolution No Resolver
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#dns_recursive_resolution_no_resolver SlbVirtualServerPortStatsDnsVport#dns_recursive_resolution_no_resolver}
  */
  readonly dnsRecursiveResolutionNoResolver?: number;
  /**
  * DNS Recursive Resolution Not Dplane
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#dns_recursive_resolution_not_dplane SlbVirtualServerPortStatsDnsVport#dns_recursive_resolution_not_dplane}
  */
  readonly dnsRecursiveResolutionNotDplane?: number;
  /**
  * DNS Recursive Resolution Hit NS Cache entry with valid glue record
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#dns_recursive_resolution_ns_cache_hit SlbVirtualServerPortStatsDnsVport#dns_recursive_resolution_ns_cache_hit}
  */
  readonly dnsRecursiveResolutionNsCacheHit?: number;
  /**
  * DNS DNS Recursive Resolution cache miss for NS Cache entry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#dns_recursive_resolution_ns_cache_miss SlbVirtualServerPortStatsDnsVport#dns_recursive_resolution_ns_cache_miss}
  */
  readonly dnsRecursiveResolutionNsCacheMiss?: number;
  /**
  * DNS Recursive Resolution Ongoing Client Retransmit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#dns_recursive_resolution_ongoing_client_retransmit SlbVirtualServerPortStatsDnsVport#dns_recursive_resolution_ongoing_client_retransmit}
  */
  readonly dnsRecursiveResolutionOngoingClientRetransmit?: number;
  /**
  * DNS Recursive Resolution Pending Resolution
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#dns_recursive_resolution_pending_resolution SlbVirtualServerPortStatsDnsVport#dns_recursive_resolution_pending_resolution}
  */
  readonly dnsRecursiveResolutionPendingResolution?: number;
  /**
  * DNS Recursive Resolution Query Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#dns_recursive_resolution_query_dropped SlbVirtualServerPortStatsDnsVport#dns_recursive_resolution_query_dropped}
  */
  readonly dnsRecursiveResolutionQueryDropped?: number;
  /**
  * DNS Recursive Resolution Query Not Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#dns_recursive_resolution_query_not_sent SlbVirtualServerPortStatsDnsVport#dns_recursive_resolution_query_not_sent}
  */
  readonly dnsRecursiveResolutionQueryNotSent?: number;
  /**
  * DNS Recursive Resolution Reach Max Depth
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#dns_recursive_resolution_reach_max_depth SlbVirtualServerPortStatsDnsVport#dns_recursive_resolution_reach_max_depth}
  */
  readonly dnsRecursiveResolutionReachMaxDepth?: number;
  /**
  * DNS Recursive Resolution Request Send
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#dns_recursive_resolution_request_send SlbVirtualServerPortStatsDnsVport#dns_recursive_resolution_request_send}
  */
  readonly dnsRecursiveResolutionRequestSend?: number;
  /**
  * DNS Recursive Resolution Resolver Check Err
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#dns_recursive_resolution_res_check_err SlbVirtualServerPortStatsDnsVport#dns_recursive_resolution_res_check_err}
  */
  readonly dnsRecursiveResolutionResCheckErr?: number;
  /**
  * DNS Recursive Resolution Resolver Submit Err
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#dns_recursive_resolution_res_submit_err SlbVirtualServerPortStatsDnsVport#dns_recursive_resolution_res_submit_err}
  */
  readonly dnsRecursiveResolutionResSubmitErr?: number;
  /**
  * Dns Recursive Resolution Resp Truncated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#dns_recursive_resolution_resp_truncated SlbVirtualServerPortStatsDnsVport#dns_recursive_resolution_resp_truncated}
  */
  readonly dnsRecursiveResolutionRespTruncated?: number;
  /**
  * DNS Recursive Resolution Respond With Servfail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#dns_recursive_resolution_respond_with_servfail SlbVirtualServerPortStatsDnsVport#dns_recursive_resolution_respond_with_servfail}
  */
  readonly dnsRecursiveResolutionRespondWithServfail?: number;
  /**
  * DNS Recursive Resolution Response Receive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#dns_recursive_resolution_response_receive SlbVirtualServerPortStatsDnsVport#dns_recursive_resolution_response_receive}
  */
  readonly dnsRecursiveResolutionResponseReceive?: number;
  /**
  * DNS Recursive Resolution Retransmit Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#dns_recursive_resolution_retransmit_exceeded SlbVirtualServerPortStatsDnsVport#dns_recursive_resolution_retransmit_exceeded}
  */
  readonly dnsRecursiveResolutionRetransmitExceeded?: number;
  /**
  * DNS Recursive Resolution Retransmit Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#dns_recursive_resolution_retransmit_sent SlbVirtualServerPortStatsDnsVport#dns_recursive_resolution_retransmit_sent}
  */
  readonly dnsRecursiveResolutionRetransmitSent?: number;
  /**
  * DNS Recursive Resolution Send Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#dns_recursive_resolution_send_failed SlbVirtualServerPortStatsDnsVport#dns_recursive_resolution_send_failed}
  */
  readonly dnsRecursiveResolutionSendFailed?: number;
  /**
  * DNS Recursive Resolution Started
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#dns_recursive_resolution_started SlbVirtualServerPortStatsDnsVport#dns_recursive_resolution_started}
  */
  readonly dnsRecursiveResolutionStarted?: number;
  /**
  * DNS Recursive Resolution Succeeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#dns_recursive_resolution_succeeded SlbVirtualServerPortStatsDnsVport#dns_recursive_resolution_succeeded}
  */
  readonly dnsRecursiveResolutionSucceeded?: number;
  /**
  * DNS Recursive Resolution TCP Conn Created for Parallel Queries
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#dns_recursive_resolution_tcp_conn SlbVirtualServerPortStatsDnsVport#dns_recursive_resolution_tcp_conn}
  */
  readonly dnsRecursiveResolutionTcpConn?: number;
  /**
  * DNS Recursive Resolution TCP Conn Err
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#dns_recursive_resolution_tcp_conn_err SlbVirtualServerPortStatsDnsVport#dns_recursive_resolution_tcp_conn_err}
  */
  readonly dnsRecursiveResolutionTcpConnErr?: number;
  /**
  * DNS Recursive Resolution Timed Out
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#dns_recursive_resolution_timeout SlbVirtualServerPortStatsDnsVport#dns_recursive_resolution_timeout}
  */
  readonly dnsRecursiveResolutionTimeout?: number;
  /**
  * DNS Recursive Resolution Total trials upto 1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#dns_recursive_resolution_total_trials_1 SlbVirtualServerPortStatsDnsVport#dns_recursive_resolution_total_trials_1}
  */
  readonly dnsRecursiveResolutionTotalTrials1?: number;
  /**
  * DNS Recursive Resolution Total trials upto 12
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#dns_recursive_resolution_total_trials_12 SlbVirtualServerPortStatsDnsVport#dns_recursive_resolution_total_trials_12}
  */
  readonly dnsRecursiveResolutionTotalTrials12?: number;
  /**
  * DNS Recursive Resolution Total trials upto 128
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#dns_recursive_resolution_total_trials_128 SlbVirtualServerPortStatsDnsVport#dns_recursive_resolution_total_trials_128}
  */
  readonly dnsRecursiveResolutionTotalTrials128?: number;
  /**
  * DNS Recursive Resolution Total trials upto 24
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#dns_recursive_resolution_total_trials_24 SlbVirtualServerPortStatsDnsVport#dns_recursive_resolution_total_trials_24}
  */
  readonly dnsRecursiveResolutionTotalTrials24?: number;
  /**
  * DNS Recursive Resolution Total trials upto 3
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#dns_recursive_resolution_total_trials_3 SlbVirtualServerPortStatsDnsVport#dns_recursive_resolution_total_trials_3}
  */
  readonly dnsRecursiveResolutionTotalTrials3?: number;
  /**
  * DNS Recursive Resolution Total trials upto 48
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#dns_recursive_resolution_total_trials_48 SlbVirtualServerPortStatsDnsVport#dns_recursive_resolution_total_trials_48}
  */
  readonly dnsRecursiveResolutionTotalTrials48?: number;
  /**
  * DNS Recursive Resolution Total trials upto 6
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#dns_recursive_resolution_total_trials_6 SlbVirtualServerPortStatsDnsVport#dns_recursive_resolution_total_trials_6}
  */
  readonly dnsRecursiveResolutionTotalTrials6?: number;
  /**
  * DNS Recursive Resolution Total trials upto 64
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#dns_recursive_resolution_total_trials_64 SlbVirtualServerPortStatsDnsVport#dns_recursive_resolution_total_trials_64}
  */
  readonly dnsRecursiveResolutionTotalTrials64?: number;
  /**
  * DNS Recursive Resolution Total trials upto 255
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#dns_recursive_resolution_total_trials_max SlbVirtualServerPortStatsDnsVport#dns_recursive_resolution_total_trials_max}
  */
  readonly dnsRecursiveResolutionTotalTrialsMax?: number;
  /**
  * DNS Recursive Resolution UDP Conn Created for Parallel Queries
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#dns_recursive_resolution_udp_conn SlbVirtualServerPortStatsDnsVport#dns_recursive_resolution_udp_conn}
  */
  readonly dnsRecursiveResolutionUdpConn?: number;
  /**
  * DNS Recursive Resolution UDP Conn Err
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#dns_recursive_resolution_udp_conn_err SlbVirtualServerPortStatsDnsVport#dns_recursive_resolution_udp_conn_err}
  */
  readonly dnsRecursiveResolutionUdpConnErr?: number;
  /**
  * DNS Recursive Resolution UDP Send Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#dns_recursive_resolution_udp_send_failed SlbVirtualServerPortStatsDnsVport#dns_recursive_resolution_udp_send_failed}
  */
  readonly dnsRecursiveResolutionUdpSendFailed?: number;
  /**
  * request drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#dns_request_drop SlbVirtualServerPortStatsDnsVport#dns_request_drop}
  */
  readonly dnsRequestDrop?: number;
  /**
  * the request response by the device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#dns_request_response SlbVirtualServerPortStatsDnsVport#dns_request_response}
  */
  readonly dnsRequestResponse?: number;
  /**
  * request retransmit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#dns_request_rexmit SlbVirtualServerPortStatsDnsVport#dns_request_rexmit}
  */
  readonly dnsRequestRexmit?: number;
  /**
  * request send to backend server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#dns_request_send SlbVirtualServerPortStatsDnsVport#dns_request_send}
  */
  readonly dnsRequestSend?: number;
  /**
  * request time out
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#dns_request_timeout SlbVirtualServerPortStatsDnsVport#dns_request_timeout}
  */
  readonly dnsRequestTimeout?: number;
  /**
  * response drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#dns_response_drop SlbVirtualServerPortStatsDnsVport#dns_response_drop}
  */
  readonly dnsResponseDrop?: number;
  /**
  * response send to client
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#dns_response_send SlbVirtualServerPortStatsDnsVport#dns_response_send}
  */
  readonly dnsResponseSend?: number;
  /**
  * DNS RPZ Action Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#dns_rpz_action_drop SlbVirtualServerPortStatsDnsVport#dns_rpz_action_drop}
  */
  readonly dnsRpzActionDrop?: number;
  /**
  * DNS RPZ Action Local Data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#dns_rpz_action_local_data SlbVirtualServerPortStatsDnsVport#dns_rpz_action_local_data}
  */
  readonly dnsRpzActionLocalData?: number;
  /**
  * DNS RPZ Action NODATA
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#dns_rpz_action_nodata SlbVirtualServerPortStatsDnsVport#dns_rpz_action_nodata}
  */
  readonly dnsRpzActionNodata?: number;
  /**
  * DNS RPZ Action NXDOMAIN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#dns_rpz_action_nxdomain SlbVirtualServerPortStatsDnsVport#dns_rpz_action_nxdomain}
  */
  readonly dnsRpzActionNxdomain?: number;
  /**
  * DNS RPZ Action Pass Through
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#dns_rpz_action_pass_thru SlbVirtualServerPortStatsDnsVport#dns_rpz_action_pass_thru}
  */
  readonly dnsRpzActionPassThru?: number;
  /**
  * DNS RPZ Action TCP Only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#dns_rpz_action_tcp_only SlbVirtualServerPortStatsDnsVport#dns_rpz_action_tcp_only}
  */
  readonly dnsRpzActionTcpOnly?: number;
  /**
  * DNS RPZ Trigger Client IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#dns_rpz_trigger_client_ip SlbVirtualServerPortStatsDnsVport#dns_rpz_trigger_client_ip}
  */
  readonly dnsRpzTriggerClientIp?: number;
  /**
  * DNS RPZ Trigger NS IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#dns_rpz_trigger_ns_ip SlbVirtualServerPortStatsDnsVport#dns_rpz_trigger_ns_ip}
  */
  readonly dnsRpzTriggerNsIp?: number;
  /**
  * DNS RPZ Trigger NS Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#dns_rpz_trigger_ns_name SlbVirtualServerPortStatsDnsVport#dns_rpz_trigger_ns_name}
  */
  readonly dnsRpzTriggerNsName?: number;
  /**
  * DNS RPZ Trigger Qname IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#dns_rpz_trigger_qname SlbVirtualServerPortStatsDnsVport#dns_rpz_trigger_qname}
  */
  readonly dnsRpzTriggerQname?: number;
  /**
  * DNS RPZ Trigger Response IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#dns_rpz_trigger_resp_ip SlbVirtualServerPortStatsDnsVport#dns_rpz_trigger_resp_ip}
  */
  readonly dnsRpzTriggerRespIp?: number;
  /**
  * DNS Recursive Resolution DNSSEC-OK Request Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#dns_rr_dnssec_req_received SlbVirtualServerPortStatsDnsVport#dns_rr_dnssec_req_received}
  */
  readonly dnsRrDnssecReqReceived?: number;
  /**
  * DNS Recursive Resolution DNSSEC-OK Response Served
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#dns_rr_dnssec_resp_served SlbVirtualServerPortStatsDnsVport#dns_rr_dnssec_resp_served}
  */
  readonly dnsRrDnssecRespServed?: number;
  /**
  * DNS Recursive Resolution DNSSEC Validation Algorithm not Supported
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#dns_rr_dnssec_val_alg_not_supported SlbVirtualServerPortStatsDnsVport#dns_rr_dnssec_val_alg_not_supported}
  */
  readonly dnsRrDnssecValAlgNotSupported?: number;
  /**
  * DNS Recursive Resolution DNSSEC Validation Digest Type not Supported
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#dns_rr_dnssec_val_dgst_not_supported SlbVirtualServerPortStatsDnsVport#dns_rr_dnssec_val_dgst_not_supported}
  */
  readonly dnsRrDnssecValDgstNotSupported?: number;
  /**
  * DNS Recursive Resolution DNSSEC Validation DNSKEY Protocol Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#dns_rr_dnssec_val_dnskey_proto_err SlbVirtualServerPortStatsDnsVport#dns_rr_dnssec_val_dnskey_proto_err}
  */
  readonly dnsRrDnssecValDnskeyProtoErr?: number;
  /**
  * DNS Recursive Resolution DNSSEC Validation Incorrect Key Digest
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#dns_rr_dnssec_val_incorrect_key_dgst SlbVirtualServerPortStatsDnsVport#dns_rr_dnssec_val_incorrect_key_dgst}
  */
  readonly dnsRrDnssecValIncorrectKeyDgst?: number;
  /**
  * DNS Recursive Resolution DNSSEC Validation Incorrect Signature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#dns_rr_dnssec_val_incorrect_sig SlbVirtualServerPortStatsDnsVport#dns_rr_dnssec_val_incorrect_sig}
  */
  readonly dnsRrDnssecValIncorrectSig?: number;
  /**
  * DNS Recursive Resolution DNSSEC Validation RRSET Size Exceed Limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#dns_rr_dnssec_val_rrset_size_exceed_limit SlbVirtualServerPortStatsDnsVport#dns_rr_dnssec_val_rrset_size_exceed_limit}
  */
  readonly dnsRrDnssecValRrsetSizeExceedLimit?: number;
  /**
  * DNS Recursive Resolution DNSSEC Validation RRSIG Labels Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#dns_rr_dnssec_val_rrsig_labels_err SlbVirtualServerPortStatsDnsVport#dns_rr_dnssec_val_rrsig_labels_err}
  */
  readonly dnsRrDnssecValRrsigLabelsErr?: number;
  /**
  * DNS Recursive Resolution DNSSEC Validation RRSIG non Validity Period
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#dns_rr_dnssec_val_rrsig_non_validity_period SlbVirtualServerPortStatsDnsVport#dns_rr_dnssec_val_rrsig_non_validity_period}
  */
  readonly dnsRrDnssecValRrsigNonValidityPeriod?: number;
  /**
  * DNS Recursive Resolution DNSSEC Validation RRSIG Signer's Name Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#dns_rr_dnssec_val_rrsig_signer_err SlbVirtualServerPortStatsDnsVport#dns_rr_dnssec_val_rrsig_signer_err}
  */
  readonly dnsRrDnssecValRrsigSignerErr?: number;
  /**
  * DNS Recursive Resolution DNSSEC Validation with Trust Anchor Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#dns_rr_dnssec_val_with_trust_anchor_failed SlbVirtualServerPortStatsDnsVport#dns_rr_dnssec_val_with_trust_anchor_failed}
  */
  readonly dnsRrDnssecValWithTrustAnchorFailed?: number;
  /**
  * DNS Recursive Resolution DNSSEC Validation Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#dns_rr_dnssec_validation_failed SlbVirtualServerPortStatsDnsVport#dns_rr_dnssec_validation_failed}
  */
  readonly dnsRrDnssecValidationFailed?: number;
  /**
  * DNS TCP Pipeline Request Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#dns_tcp_pipeline_request_drop SlbVirtualServerPortStatsDnsVport#dns_tcp_pipeline_request_drop}
  */
  readonly dnsTcpPipelineRequestDrop?: number;
  /**
  * total drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#dns_total_drop SlbVirtualServerPortStatsDnsVport#dns_total_drop}
  */
  readonly dnsTotalDrop?: number;
  /**
  * total request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#dns_total_request SlbVirtualServerPortStatsDnsVport#dns_total_request}
  */
  readonly dnsTotalRequest?: number;
  /**
  * total response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#dns_total_response SlbVirtualServerPortStatsDnsVport#dns_total_response}
  */
  readonly dnsTotalResponse?: number;
  /**
  * DNS Response-Rate-Limiting Bad FQDN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#dnsrrl_bad_fqdn SlbVirtualServerPortStatsDnsVport#dnsrrl_bad_fqdn}
  */
  readonly dnsrrlBadFqdn?: number;
  /**
  * DNS Response-Rate-Limiting NXDomain Drop (Client-Side)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#dnsrrl_nx_drop SlbVirtualServerPortStatsDnsVport#dnsrrl_nx_drop}
  */
  readonly dnsrrlNxDrop?: number;
  /**
  * DNS Response-Rate-Limiting NXDomain Exceed (Server-Side)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#dnsrrl_nx_exceed SlbVirtualServerPortStatsDnsVport#dnsrrl_nx_exceed}
  */
  readonly dnsrrlNxExceed?: number;
  /**
  * DNS Response-Rate-Limiting QPS Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#dnsrrl_qps_drop SlbVirtualServerPortStatsDnsVport#dnsrrl_qps_drop}
  */
  readonly dnsrrlQpsDrop?: number;
  /**
  * DNS Response-Rate-Limiting Total Responses Allowed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#dnsrrl_total_allowed SlbVirtualServerPortStatsDnsVport#dnsrrl_total_allowed}
  */
  readonly dnsrrlTotalAllowed?: number;
  /**
  * dns rrl drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#dnsrrl_total_dropped SlbVirtualServerPortStatsDnsVport#dnsrrl_total_dropped}
  */
  readonly dnsrrlTotalDropped?: number;
  /**
  * DNS Response-Rate-Limiting Total Responses Slipped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#dnsrrl_total_slipped SlbVirtualServerPortStatsDnsVport#dnsrrl_total_slipped}
  */
  readonly dnsrrlTotalSlipped?: number;
  /**
  * DNS Response-Rate-Limiting Total Responses Replied With Truncated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#dnsrrl_total_tc SlbVirtualServerPortStatsDnsVport#dnsrrl_total_tc}
  */
  readonly dnsrrlTotalTc?: number;
  /**
  * empty response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#empty_response SlbVirtualServerPortStatsDnsVport#empty_response}
  */
  readonly emptyResponse?: number;
  /**
  * gslb drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#gslb_drop SlbVirtualServerPortStatsDnsVport#gslb_drop}
  */
  readonly gslbDrop?: number;
  /**
  * gslb query bad
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#gslb_query_bad SlbVirtualServerPortStatsDnsVport#gslb_query_bad}
  */
  readonly gslbQueryBad?: number;
  /**
  * gslb query drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#gslb_query_drop SlbVirtualServerPortStatsDnsVport#gslb_query_drop}
  */
  readonly gslbQueryDrop?: number;
  /**
  * gslb query forward
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#gslb_query_fwd SlbVirtualServerPortStatsDnsVport#gslb_query_fwd}
  */
  readonly gslbQueryFwd?: number;
  /**
  * gslb response bad
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#gslb_response_bad SlbVirtualServerPortStatsDnsVport#gslb_response_bad}
  */
  readonly gslbResponseBad?: number;
  /**
  * gslb response drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#gslb_response_drop SlbVirtualServerPortStatsDnsVport#gslb_response_drop}
  */
  readonly gslbResponseDrop?: number;
  /**
  * gslb response good
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#gslb_response_good SlbVirtualServerPortStatsDnsVport#gslb_response_good}
  */
  readonly gslbResponseGood?: number;
  /**
  * gslb response reverse
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#gslb_response_rvs SlbVirtualServerPortStatsDnsVport#gslb_response_rvs}
  */
  readonly gslbResponseRvs?: number;
  /**
  * edns response rcode bad alg receive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#rcode_badalg_receive SlbVirtualServerPortStatsDnsVport#rcode_badalg_receive}
  */
  readonly rcodeBadalgReceive?: number;
  /**
  * ends bad alg response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#rcode_badalg_response SlbVirtualServerPortStatsDnsVport#rcode_badalg_response}
  */
  readonly rcodeBadalgResponse?: number;
  /**
  * ends response rcode bad cookie receive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#rcode_badcookie_receive SlbVirtualServerPortStatsDnsVport#rcode_badcookie_receive}
  */
  readonly rcodeBadcookieReceive?: number;
  /**
  * edns bad cookie response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#rcode_badcookie_response SlbVirtualServerPortStatsDnsVport#rcode_badcookie_response}
  */
  readonly rcodeBadcookieResponse?: number;
  /**
  * edns response rcode bad key receive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#rcode_badkey_receive SlbVirtualServerPortStatsDnsVport#rcode_badkey_receive}
  */
  readonly rcodeBadkeyReceive?: number;
  /**
  * ends bad key response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#rcode_badkey_response SlbVirtualServerPortStatsDnsVport#rcode_badkey_response}
  */
  readonly rcodeBadkeyResponse?: number;
  /**
  * ends response rcode bad name receive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#rcode_badmode_receive SlbVirtualServerPortStatsDnsVport#rcode_badmode_receive}
  */
  readonly rcodeBadmodeReceive?: number;
  /**
  * edns bad mode response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#rcode_badmode_response SlbVirtualServerPortStatsDnsVport#rcode_badmode_response}
  */
  readonly rcodeBadmodeResponse?: number;
  /**
  * ends response rcode bad name receive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#rcode_badname_receive SlbVirtualServerPortStatsDnsVport#rcode_badname_receive}
  */
  readonly rcodeBadnameReceive?: number;
  /**
  * edns bad name response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#rcode_badname_response SlbVirtualServerPortStatsDnsVport#rcode_badname_response}
  */
  readonly rcodeBadnameResponse?: number;
  /**
  * edns response rcode bad time receive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#rcode_badtime_receive SlbVirtualServerPortStatsDnsVport#rcode_badtime_receive}
  */
  readonly rcodeBadtimeReceive?: number;
  /**
  * edns bad time response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#rcode_badtime_response SlbVirtualServerPortStatsDnsVport#rcode_badtime_response}
  */
  readonly rcodeBadtimeResponse?: number;
  /**
  * edns response rcode bad trancate receive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#rcode_badtranc_receive SlbVirtualServerPortStatsDnsVport#rcode_badtranc_receive}
  */
  readonly rcodeBadtrancReceive?: number;
  /**
  * edns bad trancate response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#rcode_badtranc_response SlbVirtualServerPortStatsDnsVport#rcode_badtranc_response}
  */
  readonly rcodeBadtrancResponse?: number;
  /**
  * edns response rcode bad version receive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#rcode_badver_receive SlbVirtualServerPortStatsDnsVport#rcode_badver_receive}
  */
  readonly rcodeBadverReceive?: number;
  /**
  * edns bad var response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#rcode_badver_response SlbVirtualServerPortStatsDnsVport#rcode_badver_response}
  */
  readonly rcodeBadverResponse?: number;
  /**
  * response rcode dsotypen receive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#rcode_dsotypen_receive SlbVirtualServerPortStatsDnsVport#rcode_dsotypen_receive}
  */
  readonly rcodeDsotypenReceive?: number;
  /**
  * rcode dsotypen response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#rcode_dsotypen_response SlbVirtualServerPortStatsDnsVport#rcode_dsotypen_response}
  */
  readonly rcodeDsotypenResponse?: number;
  /**
  * response rcode form error receive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#rcode_formerr_receive SlbVirtualServerPortStatsDnsVport#rcode_formerr_receive}
  */
  readonly rcodeFormerrReceive?: number;
  /**
  * rcode format error response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#rcode_formerr_response SlbVirtualServerPortStatsDnsVport#rcode_formerr_response}
  */
  readonly rcodeFormerrResponse?: number;
  /**
  * rcode no error generate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#rcode_noerror_generate SlbVirtualServerPortStatsDnsVport#rcode_noerror_generate}
  */
  readonly rcodeNoerrorGenerate?: number;
  /**
  * response rcode not auth receive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#rcode_notauth_receive SlbVirtualServerPortStatsDnsVport#rcode_notauth_receive}
  */
  readonly rcodeNotauthReceive?: number;
  /**
  * rcode not auth response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#rcode_notauth_response SlbVirtualServerPortStatsDnsVport#rcode_notauth_response}
  */
  readonly rcodeNotauthResponse?: number;
  /**
  * response rcode type error receive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#rcode_notimpl_receive SlbVirtualServerPortStatsDnsVport#rcode_notimpl_receive}
  */
  readonly rcodeNotimplReceive?: number;
  /**
  * rcode type error response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#rcode_notimpl_response SlbVirtualServerPortStatsDnsVport#rcode_notimpl_response}
  */
  readonly rcodeNotimplResponse?: number;
  /**
  * response rcode name not in zone receive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#rcode_notzone_receive SlbVirtualServerPortStatsDnsVport#rcode_notzone_receive}
  */
  readonly rcodeNotzoneReceive?: number;
  /**
  * response rcode nxdomain receive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#rcode_nxdomain_receive SlbVirtualServerPortStatsDnsVport#rcode_nxdomain_receive}
  */
  readonly rcodeNxdomainReceive?: number;
  /**
  * rcode name error response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#rcode_nxdomain_response SlbVirtualServerPortStatsDnsVport#rcode_nxdomain_response}
  */
  readonly rcodeNxdomainResponse?: number;
  /**
  * response rcode nxrrset receive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#rcode_nxrrset_receive SlbVirtualServerPortStatsDnsVport#rcode_nxrrset_receive}
  */
  readonly rcodeNxrrsetReceive?: number;
  /**
  * rcode nxrrset response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#rcode_nxrrset_response SlbVirtualServerPortStatsDnsVport#rcode_nxrrset_response}
  */
  readonly rcodeNxrrsetResponse?: number;
  /**
  * other rcode receive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#rcode_other_receive SlbVirtualServerPortStatsDnsVport#rcode_other_receive}
  */
  readonly rcodeOtherReceive?: number;
  /**
  * other rcode response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#rcode_other_response SlbVirtualServerPortStatsDnsVport#rcode_other_response}
  */
  readonly rcodeOtherResponse?: number;
  /**
  * response rcode refuse receive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#rcode_refuse_receive SlbVirtualServerPortStatsDnsVport#rcode_refuse_receive}
  */
  readonly rcodeRefuseReceive?: number;
  /**
  * rcode refuse response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#rcode_refuse_response SlbVirtualServerPortStatsDnsVport#rcode_refuse_response}
  */
  readonly rcodeRefuseResponse?: number;
  /**
  * response rcode server error receive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#rcode_serverr_receive SlbVirtualServerPortStatsDnsVport#rcode_serverr_receive}
  */
  readonly rcodeServerrReceive?: number;
  /**
  * rcode server error response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#rcode_serverr_response SlbVirtualServerPortStatsDnsVport#rcode_serverr_response}
  */
  readonly rcodeServerrResponse?: number;
  /**
  * response rcode TSIG key or algorithm not recognized receive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#rcode_tsig_badkey_receive SlbVirtualServerPortStatsDnsVport#rcode_tsig_badkey_receive}
  */
  readonly rcodeTsigBadkeyReceive?: number;
  /**
  * response rcode TSIG signature failure receive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#rcode_tsig_badsig_receive SlbVirtualServerPortStatsDnsVport#rcode_tsig_badsig_receive}
  */
  readonly rcodeTsigBadsigReceive?: number;
  /**
  * response rcode TSIG time checking error receive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#rcode_tsig_badtime_receive SlbVirtualServerPortStatsDnsVport#rcode_tsig_badtime_receive}
  */
  readonly rcodeTsigBadtimeReceive?: number;
  /**
  * response rcode TSIG MAC truncation error receive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#rcode_tsig_badtrunc_receive SlbVirtualServerPortStatsDnsVport#rcode_tsig_badtrunc_receive}
  */
  readonly rcodeTsigBadtruncReceive?: number;
  /**
  * response rcode yxdomain receive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#rcode_yxdomain_receive SlbVirtualServerPortStatsDnsVport#rcode_yxdomain_receive}
  */
  readonly rcodeYxdomainReceive?: number;
  /**
  * rcode yxdomain response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#rcode_yxdomain_response SlbVirtualServerPortStatsDnsVport#rcode_yxdomain_response}
  */
  readonly rcodeYxdomainResponse?: number;
  /**
  * response rcode yxrrset receive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#rcode_yxrrset_receive SlbVirtualServerPortStatsDnsVport#rcode_yxrrset_receive}
  */
  readonly rcodeYxrrsetReceive?: number;
  /**
  * rcode yxrrset response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#rcode_yxrrset_response SlbVirtualServerPortStatsDnsVport#rcode_yxrrset_response}
  */
  readonly rcodeYxrrsetResponse?: number;
  /**
  * No. of client ssl success
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#slb_dns_client_ssl_succ SlbVirtualServerPortStatsDnsVport#slb_dns_client_ssl_succ}
  */
  readonly slbDnsClientSslSucc?: number;
  /**
  * Number of ecs inserted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#slb_dns_edns_ecs_inserted SlbVirtualServerPortStatsDnsVport#slb_dns_edns_ecs_inserted}
  */
  readonly slbDnsEdnsEcsInserted?: number;
  /**
  * Number of ecs insertion failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#slb_dns_edns_ecs_insertion_fail SlbVirtualServerPortStatsDnsVport#slb_dns_edns_ecs_insertion_fail}
  */
  readonly slbDnsEdnsEcsInsertionFail?: number;
  /**
  * Number of ecs from client received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#slb_dns_edns_ecs_received SlbVirtualServerPortStatsDnsVport#slb_dns_edns_ecs_received}
  */
  readonly slbDnsEdnsEcsReceived?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#slb_dns_edns_subnet_to_server_removed SlbVirtualServerPortStatsDnsVport#slb_dns_edns_subnet_to_server_removed}
  */
  readonly slbDnsEdnsSubnetToServerRemoved?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#slb_dns_padding_to_client_added SlbVirtualServerPortStatsDnsVport#slb_dns_padding_to_client_added}
  */
  readonly slbDnsPaddingToClientAdded?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#slb_dns_padding_to_server_removed SlbVirtualServerPortStatsDnsVport#slb_dns_padding_to_server_removed}
  */
  readonly slbDnsPaddingToServerRemoved?: number;
  /**
  * No. of server ssl success
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#slb_dns_server_ssl_succ SlbVirtualServerPortStatsDnsVport#slb_dns_server_ssl_succ}
  */
  readonly slbDnsServerSslSucc?: number;
  /**
  * No. of backend udp connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#slb_dns_udp_conn SlbVirtualServerPortStatsDnsVport#slb_dns_udp_conn}
  */
  readonly slbDnsUdpConn?: number;
  /**
  * No. of backend udp conn established
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#slb_dns_udp_conn_succ SlbVirtualServerPortStatsDnsVport#slb_dns_udp_conn_succ}
  */
  readonly slbDnsUdpConnSucc?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#slb_dns_udp_retransmit SlbVirtualServerPortStatsDnsVport#slb_dns_udp_retransmit}
  */
  readonly slbDnsUdpRetransmit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#slb_dns_udp_retransmit_fail SlbVirtualServerPortStatsDnsVport#slb_dns_udp_retransmit_fail}
  */
  readonly slbDnsUdpRetransmitFail?: number;
  /**
  * counters Total DNS Filter Class Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#total_dns_filter_class_drop SlbVirtualServerPortStatsDnsVport#total_dns_filter_class_drop}
  */
  readonly totalDnsFilterClassDrop?: number;
  /**
  * counters Total DNS Filter Type Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#total_dns_filter_type_drop SlbVirtualServerPortStatsDnsVport#total_dns_filter_type_drop}
  */
  readonly totalDnsFilterTypeDrop?: number;
  /**
  * query filter drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#total_filter_drop SlbVirtualServerPortStatsDnsVport#total_filter_drop}
  */
  readonly totalFilterDrop?: number;
  /**
  * query too long drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#total_max_query_len_drop SlbVirtualServerPortStatsDnsVport#total_max_query_len_drop}
  */
  readonly totalMaxQueryLenDrop?: number;
  /**
  * total malform dns pkt
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#total_mf_dns_pkt SlbVirtualServerPortStatsDnsVport#total_mf_dns_pkt}
  */
  readonly totalMfDnsPkt?: number;
  /**
  * total malform dns pkt detected
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#total_mf_dns_pkt_detect SlbVirtualServerPortStatsDnsVport#total_mf_dns_pkt_detect}
  */
  readonly totalMfDnsPktDetect?: number;
  /**
  * dns A query
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#type_a_query SlbVirtualServerPortStatsDnsVport#type_a_query}
  */
  readonly typeAQuery?: number;
  /**
  * dns  AAAA query
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#type_aaaa_query SlbVirtualServerPortStatsDnsVport#type_aaaa_query}
  */
  readonly typeAaaaQuery?: number;
  /**
  * dns ANY query
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#type_any_query SlbVirtualServerPortStatsDnsVport#type_any_query}
  */
  readonly typeAnyQuery?: number;
  /**
  * dns  AXFR query
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#type_axfr_query SlbVirtualServerPortStatsDnsVport#type_axfr_query}
  */
  readonly typeAxfrQuery?: number;
  /**
  * dns CAA query
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#type_caa_query SlbVirtualServerPortStatsDnsVport#type_caa_query}
  */
  readonly typeCaaQuery?: number;
  /**
  * dns CERT query
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#type_cert_query SlbVirtualServerPortStatsDnsVport#type_cert_query}
  */
  readonly typeCertQuery?: number;
  /**
  * edns CHAIN query
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#type_chain_query SlbVirtualServerPortStatsDnsVport#type_chain_query}
  */
  readonly typeChainQuery?: number;
  /**
  * dns  CNAME query
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#type_cname_query SlbVirtualServerPortStatsDnsVport#type_cname_query}
  */
  readonly typeCnameQuery?: number;
  /**
  * edns COOKIE query
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#type_cookie_query SlbVirtualServerPortStatsDnsVport#type_cookie_query}
  */
  readonly typeCookieQuery?: number;
  /**
  * edns DAU query
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#type_dau_query SlbVirtualServerPortStatsDnsVport#type_dau_query}
  */
  readonly typeDauQuery?: number;
  /**
  * dns  DNSKEY query
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#type_dnskey_query SlbVirtualServerPortStatsDnsVport#type_dnskey_query}
  */
  readonly typeDnskeyQuery?: number;
  /**
  * dns DS query
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#type_ds_query SlbVirtualServerPortStatsDnsVport#type_ds_query}
  */
  readonly typeDsQuery?: number;
  /**
  * edns EXPIRE query
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#type_expire_query SlbVirtualServerPortStatsDnsVport#type_expire_query}
  */
  readonly typeExpireQuery?: number;
  /**
  * dns HTTPS query
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#type_https_query SlbVirtualServerPortStatsDnsVport#type_https_query}
  */
  readonly typeHttpsQuery?: number;
  /**
  * dns IXFR query
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#type_ixfr_query SlbVirtualServerPortStatsDnsVport#type_ixfr_query}
  */
  readonly typeIxfrQuery?: number;
  /**
  * edns KEEPALIVE query
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#type_keepalive_query SlbVirtualServerPortStatsDnsVport#type_keepalive_query}
  */
  readonly typeKeepaliveQuery?: number;
  /**
  * dns  MX query
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#type_mx_query SlbVirtualServerPortStatsDnsVport#type_mx_query}
  */
  readonly typeMxQuery?: number;
  /**
  * edns N3U query
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#type_n3u_query SlbVirtualServerPortStatsDnsVport#type_n3u_query}
  */
  readonly typeN3UQuery?: number;
  /**
  * dns NAPTR query
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#type_naptr_query SlbVirtualServerPortStatsDnsVport#type_naptr_query}
  */
  readonly typeNaptrQuery?: number;
  /**
  * dns NS query
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#type_ns_query SlbVirtualServerPortStatsDnsVport#type_ns_query}
  */
  readonly typeNsQuery?: number;
  /**
  * edns NSID query
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#type_nsid_query SlbVirtualServerPortStatsDnsVport#type_nsid_query}
  */
  readonly typeNsidQuery?: number;
  /**
  * dns other type query
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#type_other_query SlbVirtualServerPortStatsDnsVport#type_other_query}
  */
  readonly typeOtherQuery?: number;
  /**
  * edns PADDING query
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#type_padding_query SlbVirtualServerPortStatsDnsVport#type_padding_query}
  */
  readonly typePaddingQuery?: number;
  /**
  * dns PTR query
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#type_ptr_query SlbVirtualServerPortStatsDnsVport#type_ptr_query}
  */
  readonly typePtrQuery?: number;
  /**
  * dns RRSIG query
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#type_rrsig_query SlbVirtualServerPortStatsDnsVport#type_rrsig_query}
  */
  readonly typeRrsigQuery?: number;
  /**
  * dns SOA query
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#type_soa_query SlbVirtualServerPortStatsDnsVport#type_soa_query}
  */
  readonly typeSoaQuery?: number;
  /**
  * dns SRV query
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#type_srv_query SlbVirtualServerPortStatsDnsVport#type_srv_query}
  */
  readonly typeSrvQuery?: number;
  /**
  * dns  TSIG query
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#type_tsig_query SlbVirtualServerPortStatsDnsVport#type_tsig_query}
  */
  readonly typeTsigQuery?: number;
  /**
  * dns TXT query
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#type_txt_query SlbVirtualServerPortStatsDnsVport#type_txt_query}
  */
  readonly typeTxtQuery?: number;
}

export function slbVirtualServerPortStatsDnsVportStatsDnsVportToTerraform(struct?: SlbVirtualServerPortStatsDnsVportStatsDnsVportOutputReference | SlbVirtualServerPortStatsDnsVportStatsDnsVport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_cache_hit: cdktf.numberToTerraform(struct!.dnsCacheHit),
    dns_category_action_drop: cdktf.numberToTerraform(struct!.dnsCategoryActionDrop),
    dns_category_action_permit: cdktf.numberToTerraform(struct!.dnsCategoryActionPermit),
    dns_category_action_respond: cdktf.numberToTerraform(struct!.dnsCategoryActionRespond),
    dns_category_async_received: cdktf.numberToTerraform(struct!.dnsCategoryAsyncReceived),
    dns_category_async_sent: cdktf.numberToTerraform(struct!.dnsCategoryAsyncSent),
    dns_category_bypass: cdktf.numberToTerraform(struct!.dnsCategoryBypass),
    dns_category_no_local_result: cdktf.numberToTerraform(struct!.dnsCategoryNoLocalResult),
    dns_category_resp_a: cdktf.numberToTerraform(struct!.dnsCategoryRespA),
    dns_category_resp_aaaa: cdktf.numberToTerraform(struct!.dnsCategoryRespAaaa),
    dns_category_resp_cname: cdktf.numberToTerraform(struct!.dnsCategoryRespCname),
    dns_category_resp_noanswer: cdktf.numberToTerraform(struct!.dnsCategoryRespNoanswer),
    dns_category_resp_nxdomain: cdktf.numberToTerraform(struct!.dnsCategoryRespNxdomain),
    dns_filter_class_any_drop: cdktf.numberToTerraform(struct!.dnsFilterClassAnyDrop),
    dns_filter_class_chaos_drop: cdktf.numberToTerraform(struct!.dnsFilterClassChaosDrop),
    dns_filter_class_hesiod_drop: cdktf.numberToTerraform(struct!.dnsFilterClassHesiodDrop),
    dns_filter_class_internet_drop: cdktf.numberToTerraform(struct!.dnsFilterClassInternetDrop),
    dns_filter_class_none_drop: cdktf.numberToTerraform(struct!.dnsFilterClassNoneDrop),
    dns_filter_class_others_drop: cdktf.numberToTerraform(struct!.dnsFilterClassOthersDrop),
    dns_filter_tld_drop: cdktf.numberToTerraform(struct!.dnsFilterTldDrop),
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
    dns_full_response_from_cache: cdktf.numberToTerraform(struct!.dnsFullResponseFromCache),
    dns_negative_served: cdktf.numberToTerraform(struct!.dnsNegativeServed),
    dns_recursive_resolution_buff_alloc_failed: cdktf.numberToTerraform(struct!.dnsRecursiveResolutionBuffAllocFailed),
    dns_recursive_resolution_full_response: cdktf.numberToTerraform(struct!.dnsRecursiveResolutionFullResponse),
    dns_recursive_resolution_icmp_err: cdktf.numberToTerraform(struct!.dnsRecursiveResolutionIcmpErr),
    dns_recursive_resolution_invalid_hints: cdktf.numberToTerraform(struct!.dnsRecursiveResolutionInvalidHints),
    dns_recursive_resolution_late_ans: cdktf.numberToTerraform(struct!.dnsRecursiveResolutionLateAns),
    dns_recursive_resolution_lookup_ip_proto_switch_46: cdktf.numberToTerraform(struct!.dnsRecursiveResolutionLookupIpProtoSwitch46),
    dns_recursive_resolution_lookup_ip_proto_switch_64: cdktf.numberToTerraform(struct!.dnsRecursiveResolutionLookupIpProtoSwitch64),
    dns_recursive_resolution_max_trials_exceeded: cdktf.numberToTerraform(struct!.dnsRecursiveResolutionMaxTrialsExceeded),
    dns_recursive_resolution_missing_glue: cdktf.numberToTerraform(struct!.dnsRecursiveResolutionMissingGlue),
    dns_recursive_resolution_no_hints: cdktf.numberToTerraform(struct!.dnsRecursiveResolutionNoHints),
    dns_recursive_resolution_no_resolver: cdktf.numberToTerraform(struct!.dnsRecursiveResolutionNoResolver),
    dns_recursive_resolution_not_dplane: cdktf.numberToTerraform(struct!.dnsRecursiveResolutionNotDplane),
    dns_recursive_resolution_ns_cache_hit: cdktf.numberToTerraform(struct!.dnsRecursiveResolutionNsCacheHit),
    dns_recursive_resolution_ns_cache_miss: cdktf.numberToTerraform(struct!.dnsRecursiveResolutionNsCacheMiss),
    dns_recursive_resolution_ongoing_client_retransmit: cdktf.numberToTerraform(struct!.dnsRecursiveResolutionOngoingClientRetransmit),
    dns_recursive_resolution_pending_resolution: cdktf.numberToTerraform(struct!.dnsRecursiveResolutionPendingResolution),
    dns_recursive_resolution_query_dropped: cdktf.numberToTerraform(struct!.dnsRecursiveResolutionQueryDropped),
    dns_recursive_resolution_query_not_sent: cdktf.numberToTerraform(struct!.dnsRecursiveResolutionQueryNotSent),
    dns_recursive_resolution_reach_max_depth: cdktf.numberToTerraform(struct!.dnsRecursiveResolutionReachMaxDepth),
    dns_recursive_resolution_request_send: cdktf.numberToTerraform(struct!.dnsRecursiveResolutionRequestSend),
    dns_recursive_resolution_res_check_err: cdktf.numberToTerraform(struct!.dnsRecursiveResolutionResCheckErr),
    dns_recursive_resolution_res_submit_err: cdktf.numberToTerraform(struct!.dnsRecursiveResolutionResSubmitErr),
    dns_recursive_resolution_resp_truncated: cdktf.numberToTerraform(struct!.dnsRecursiveResolutionRespTruncated),
    dns_recursive_resolution_respond_with_servfail: cdktf.numberToTerraform(struct!.dnsRecursiveResolutionRespondWithServfail),
    dns_recursive_resolution_response_receive: cdktf.numberToTerraform(struct!.dnsRecursiveResolutionResponseReceive),
    dns_recursive_resolution_retransmit_exceeded: cdktf.numberToTerraform(struct!.dnsRecursiveResolutionRetransmitExceeded),
    dns_recursive_resolution_retransmit_sent: cdktf.numberToTerraform(struct!.dnsRecursiveResolutionRetransmitSent),
    dns_recursive_resolution_send_failed: cdktf.numberToTerraform(struct!.dnsRecursiveResolutionSendFailed),
    dns_recursive_resolution_started: cdktf.numberToTerraform(struct!.dnsRecursiveResolutionStarted),
    dns_recursive_resolution_succeeded: cdktf.numberToTerraform(struct!.dnsRecursiveResolutionSucceeded),
    dns_recursive_resolution_tcp_conn: cdktf.numberToTerraform(struct!.dnsRecursiveResolutionTcpConn),
    dns_recursive_resolution_tcp_conn_err: cdktf.numberToTerraform(struct!.dnsRecursiveResolutionTcpConnErr),
    dns_recursive_resolution_timeout: cdktf.numberToTerraform(struct!.dnsRecursiveResolutionTimeout),
    dns_recursive_resolution_total_trials_1: cdktf.numberToTerraform(struct!.dnsRecursiveResolutionTotalTrials1),
    dns_recursive_resolution_total_trials_12: cdktf.numberToTerraform(struct!.dnsRecursiveResolutionTotalTrials12),
    dns_recursive_resolution_total_trials_128: cdktf.numberToTerraform(struct!.dnsRecursiveResolutionTotalTrials128),
    dns_recursive_resolution_total_trials_24: cdktf.numberToTerraform(struct!.dnsRecursiveResolutionTotalTrials24),
    dns_recursive_resolution_total_trials_3: cdktf.numberToTerraform(struct!.dnsRecursiveResolutionTotalTrials3),
    dns_recursive_resolution_total_trials_48: cdktf.numberToTerraform(struct!.dnsRecursiveResolutionTotalTrials48),
    dns_recursive_resolution_total_trials_6: cdktf.numberToTerraform(struct!.dnsRecursiveResolutionTotalTrials6),
    dns_recursive_resolution_total_trials_64: cdktf.numberToTerraform(struct!.dnsRecursiveResolutionTotalTrials64),
    dns_recursive_resolution_total_trials_max: cdktf.numberToTerraform(struct!.dnsRecursiveResolutionTotalTrialsMax),
    dns_recursive_resolution_udp_conn: cdktf.numberToTerraform(struct!.dnsRecursiveResolutionUdpConn),
    dns_recursive_resolution_udp_conn_err: cdktf.numberToTerraform(struct!.dnsRecursiveResolutionUdpConnErr),
    dns_recursive_resolution_udp_send_failed: cdktf.numberToTerraform(struct!.dnsRecursiveResolutionUdpSendFailed),
    dns_request_drop: cdktf.numberToTerraform(struct!.dnsRequestDrop),
    dns_request_response: cdktf.numberToTerraform(struct!.dnsRequestResponse),
    dns_request_rexmit: cdktf.numberToTerraform(struct!.dnsRequestRexmit),
    dns_request_send: cdktf.numberToTerraform(struct!.dnsRequestSend),
    dns_request_timeout: cdktf.numberToTerraform(struct!.dnsRequestTimeout),
    dns_response_drop: cdktf.numberToTerraform(struct!.dnsResponseDrop),
    dns_response_send: cdktf.numberToTerraform(struct!.dnsResponseSend),
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
    dns_rr_dnssec_req_received: cdktf.numberToTerraform(struct!.dnsRrDnssecReqReceived),
    dns_rr_dnssec_resp_served: cdktf.numberToTerraform(struct!.dnsRrDnssecRespServed),
    dns_rr_dnssec_val_alg_not_supported: cdktf.numberToTerraform(struct!.dnsRrDnssecValAlgNotSupported),
    dns_rr_dnssec_val_dgst_not_supported: cdktf.numberToTerraform(struct!.dnsRrDnssecValDgstNotSupported),
    dns_rr_dnssec_val_dnskey_proto_err: cdktf.numberToTerraform(struct!.dnsRrDnssecValDnskeyProtoErr),
    dns_rr_dnssec_val_incorrect_key_dgst: cdktf.numberToTerraform(struct!.dnsRrDnssecValIncorrectKeyDgst),
    dns_rr_dnssec_val_incorrect_sig: cdktf.numberToTerraform(struct!.dnsRrDnssecValIncorrectSig),
    dns_rr_dnssec_val_rrset_size_exceed_limit: cdktf.numberToTerraform(struct!.dnsRrDnssecValRrsetSizeExceedLimit),
    dns_rr_dnssec_val_rrsig_labels_err: cdktf.numberToTerraform(struct!.dnsRrDnssecValRrsigLabelsErr),
    dns_rr_dnssec_val_rrsig_non_validity_period: cdktf.numberToTerraform(struct!.dnsRrDnssecValRrsigNonValidityPeriod),
    dns_rr_dnssec_val_rrsig_signer_err: cdktf.numberToTerraform(struct!.dnsRrDnssecValRrsigSignerErr),
    dns_rr_dnssec_val_with_trust_anchor_failed: cdktf.numberToTerraform(struct!.dnsRrDnssecValWithTrustAnchorFailed),
    dns_rr_dnssec_validation_failed: cdktf.numberToTerraform(struct!.dnsRrDnssecValidationFailed),
    dns_tcp_pipeline_request_drop: cdktf.numberToTerraform(struct!.dnsTcpPipelineRequestDrop),
    dns_total_drop: cdktf.numberToTerraform(struct!.dnsTotalDrop),
    dns_total_request: cdktf.numberToTerraform(struct!.dnsTotalRequest),
    dns_total_response: cdktf.numberToTerraform(struct!.dnsTotalResponse),
    dnsrrl_bad_fqdn: cdktf.numberToTerraform(struct!.dnsrrlBadFqdn),
    dnsrrl_nx_drop: cdktf.numberToTerraform(struct!.dnsrrlNxDrop),
    dnsrrl_nx_exceed: cdktf.numberToTerraform(struct!.dnsrrlNxExceed),
    dnsrrl_qps_drop: cdktf.numberToTerraform(struct!.dnsrrlQpsDrop),
    dnsrrl_total_allowed: cdktf.numberToTerraform(struct!.dnsrrlTotalAllowed),
    dnsrrl_total_dropped: cdktf.numberToTerraform(struct!.dnsrrlTotalDropped),
    dnsrrl_total_slipped: cdktf.numberToTerraform(struct!.dnsrrlTotalSlipped),
    dnsrrl_total_tc: cdktf.numberToTerraform(struct!.dnsrrlTotalTc),
    empty_response: cdktf.numberToTerraform(struct!.emptyResponse),
    gslb_drop: cdktf.numberToTerraform(struct!.gslbDrop),
    gslb_query_bad: cdktf.numberToTerraform(struct!.gslbQueryBad),
    gslb_query_drop: cdktf.numberToTerraform(struct!.gslbQueryDrop),
    gslb_query_fwd: cdktf.numberToTerraform(struct!.gslbQueryFwd),
    gslb_response_bad: cdktf.numberToTerraform(struct!.gslbResponseBad),
    gslb_response_drop: cdktf.numberToTerraform(struct!.gslbResponseDrop),
    gslb_response_good: cdktf.numberToTerraform(struct!.gslbResponseGood),
    gslb_response_rvs: cdktf.numberToTerraform(struct!.gslbResponseRvs),
    rcode_badalg_receive: cdktf.numberToTerraform(struct!.rcodeBadalgReceive),
    rcode_badalg_response: cdktf.numberToTerraform(struct!.rcodeBadalgResponse),
    rcode_badcookie_receive: cdktf.numberToTerraform(struct!.rcodeBadcookieReceive),
    rcode_badcookie_response: cdktf.numberToTerraform(struct!.rcodeBadcookieResponse),
    rcode_badkey_receive: cdktf.numberToTerraform(struct!.rcodeBadkeyReceive),
    rcode_badkey_response: cdktf.numberToTerraform(struct!.rcodeBadkeyResponse),
    rcode_badmode_receive: cdktf.numberToTerraform(struct!.rcodeBadmodeReceive),
    rcode_badmode_response: cdktf.numberToTerraform(struct!.rcodeBadmodeResponse),
    rcode_badname_receive: cdktf.numberToTerraform(struct!.rcodeBadnameReceive),
    rcode_badname_response: cdktf.numberToTerraform(struct!.rcodeBadnameResponse),
    rcode_badtime_receive: cdktf.numberToTerraform(struct!.rcodeBadtimeReceive),
    rcode_badtime_response: cdktf.numberToTerraform(struct!.rcodeBadtimeResponse),
    rcode_badtranc_receive: cdktf.numberToTerraform(struct!.rcodeBadtrancReceive),
    rcode_badtranc_response: cdktf.numberToTerraform(struct!.rcodeBadtrancResponse),
    rcode_badver_receive: cdktf.numberToTerraform(struct!.rcodeBadverReceive),
    rcode_badver_response: cdktf.numberToTerraform(struct!.rcodeBadverResponse),
    rcode_dsotypen_receive: cdktf.numberToTerraform(struct!.rcodeDsotypenReceive),
    rcode_dsotypen_response: cdktf.numberToTerraform(struct!.rcodeDsotypenResponse),
    rcode_formerr_receive: cdktf.numberToTerraform(struct!.rcodeFormerrReceive),
    rcode_formerr_response: cdktf.numberToTerraform(struct!.rcodeFormerrResponse),
    rcode_noerror_generate: cdktf.numberToTerraform(struct!.rcodeNoerrorGenerate),
    rcode_notauth_receive: cdktf.numberToTerraform(struct!.rcodeNotauthReceive),
    rcode_notauth_response: cdktf.numberToTerraform(struct!.rcodeNotauthResponse),
    rcode_notimpl_receive: cdktf.numberToTerraform(struct!.rcodeNotimplReceive),
    rcode_notimpl_response: cdktf.numberToTerraform(struct!.rcodeNotimplResponse),
    rcode_notzone_receive: cdktf.numberToTerraform(struct!.rcodeNotzoneReceive),
    rcode_nxdomain_receive: cdktf.numberToTerraform(struct!.rcodeNxdomainReceive),
    rcode_nxdomain_response: cdktf.numberToTerraform(struct!.rcodeNxdomainResponse),
    rcode_nxrrset_receive: cdktf.numberToTerraform(struct!.rcodeNxrrsetReceive),
    rcode_nxrrset_response: cdktf.numberToTerraform(struct!.rcodeNxrrsetResponse),
    rcode_other_receive: cdktf.numberToTerraform(struct!.rcodeOtherReceive),
    rcode_other_response: cdktf.numberToTerraform(struct!.rcodeOtherResponse),
    rcode_refuse_receive: cdktf.numberToTerraform(struct!.rcodeRefuseReceive),
    rcode_refuse_response: cdktf.numberToTerraform(struct!.rcodeRefuseResponse),
    rcode_serverr_receive: cdktf.numberToTerraform(struct!.rcodeServerrReceive),
    rcode_serverr_response: cdktf.numberToTerraform(struct!.rcodeServerrResponse),
    rcode_tsig_badkey_receive: cdktf.numberToTerraform(struct!.rcodeTsigBadkeyReceive),
    rcode_tsig_badsig_receive: cdktf.numberToTerraform(struct!.rcodeTsigBadsigReceive),
    rcode_tsig_badtime_receive: cdktf.numberToTerraform(struct!.rcodeTsigBadtimeReceive),
    rcode_tsig_badtrunc_receive: cdktf.numberToTerraform(struct!.rcodeTsigBadtruncReceive),
    rcode_yxdomain_receive: cdktf.numberToTerraform(struct!.rcodeYxdomainReceive),
    rcode_yxdomain_response: cdktf.numberToTerraform(struct!.rcodeYxdomainResponse),
    rcode_yxrrset_receive: cdktf.numberToTerraform(struct!.rcodeYxrrsetReceive),
    rcode_yxrrset_response: cdktf.numberToTerraform(struct!.rcodeYxrrsetResponse),
    slb_dns_client_ssl_succ: cdktf.numberToTerraform(struct!.slbDnsClientSslSucc),
    slb_dns_edns_ecs_inserted: cdktf.numberToTerraform(struct!.slbDnsEdnsEcsInserted),
    slb_dns_edns_ecs_insertion_fail: cdktf.numberToTerraform(struct!.slbDnsEdnsEcsInsertionFail),
    slb_dns_edns_ecs_received: cdktf.numberToTerraform(struct!.slbDnsEdnsEcsReceived),
    slb_dns_edns_subnet_to_server_removed: cdktf.numberToTerraform(struct!.slbDnsEdnsSubnetToServerRemoved),
    slb_dns_padding_to_client_added: cdktf.numberToTerraform(struct!.slbDnsPaddingToClientAdded),
    slb_dns_padding_to_server_removed: cdktf.numberToTerraform(struct!.slbDnsPaddingToServerRemoved),
    slb_dns_server_ssl_succ: cdktf.numberToTerraform(struct!.slbDnsServerSslSucc),
    slb_dns_udp_conn: cdktf.numberToTerraform(struct!.slbDnsUdpConn),
    slb_dns_udp_conn_succ: cdktf.numberToTerraform(struct!.slbDnsUdpConnSucc),
    slb_dns_udp_retransmit: cdktf.numberToTerraform(struct!.slbDnsUdpRetransmit),
    slb_dns_udp_retransmit_fail: cdktf.numberToTerraform(struct!.slbDnsUdpRetransmitFail),
    total_dns_filter_class_drop: cdktf.numberToTerraform(struct!.totalDnsFilterClassDrop),
    total_dns_filter_type_drop: cdktf.numberToTerraform(struct!.totalDnsFilterTypeDrop),
    total_filter_drop: cdktf.numberToTerraform(struct!.totalFilterDrop),
    total_max_query_len_drop: cdktf.numberToTerraform(struct!.totalMaxQueryLenDrop),
    total_mf_dns_pkt: cdktf.numberToTerraform(struct!.totalMfDnsPkt),
    total_mf_dns_pkt_detect: cdktf.numberToTerraform(struct!.totalMfDnsPktDetect),
    type_a_query: cdktf.numberToTerraform(struct!.typeAQuery),
    type_aaaa_query: cdktf.numberToTerraform(struct!.typeAaaaQuery),
    type_any_query: cdktf.numberToTerraform(struct!.typeAnyQuery),
    type_axfr_query: cdktf.numberToTerraform(struct!.typeAxfrQuery),
    type_caa_query: cdktf.numberToTerraform(struct!.typeCaaQuery),
    type_cert_query: cdktf.numberToTerraform(struct!.typeCertQuery),
    type_chain_query: cdktf.numberToTerraform(struct!.typeChainQuery),
    type_cname_query: cdktf.numberToTerraform(struct!.typeCnameQuery),
    type_cookie_query: cdktf.numberToTerraform(struct!.typeCookieQuery),
    type_dau_query: cdktf.numberToTerraform(struct!.typeDauQuery),
    type_dnskey_query: cdktf.numberToTerraform(struct!.typeDnskeyQuery),
    type_ds_query: cdktf.numberToTerraform(struct!.typeDsQuery),
    type_expire_query: cdktf.numberToTerraform(struct!.typeExpireQuery),
    type_https_query: cdktf.numberToTerraform(struct!.typeHttpsQuery),
    type_ixfr_query: cdktf.numberToTerraform(struct!.typeIxfrQuery),
    type_keepalive_query: cdktf.numberToTerraform(struct!.typeKeepaliveQuery),
    type_mx_query: cdktf.numberToTerraform(struct!.typeMxQuery),
    type_n3u_query: cdktf.numberToTerraform(struct!.typeN3UQuery),
    type_naptr_query: cdktf.numberToTerraform(struct!.typeNaptrQuery),
    type_ns_query: cdktf.numberToTerraform(struct!.typeNsQuery),
    type_nsid_query: cdktf.numberToTerraform(struct!.typeNsidQuery),
    type_other_query: cdktf.numberToTerraform(struct!.typeOtherQuery),
    type_padding_query: cdktf.numberToTerraform(struct!.typePaddingQuery),
    type_ptr_query: cdktf.numberToTerraform(struct!.typePtrQuery),
    type_rrsig_query: cdktf.numberToTerraform(struct!.typeRrsigQuery),
    type_soa_query: cdktf.numberToTerraform(struct!.typeSoaQuery),
    type_srv_query: cdktf.numberToTerraform(struct!.typeSrvQuery),
    type_tsig_query: cdktf.numberToTerraform(struct!.typeTsigQuery),
    type_txt_query: cdktf.numberToTerraform(struct!.typeTxtQuery),
  }
}


export function slbVirtualServerPortStatsDnsVportStatsDnsVportToHclTerraform(struct?: SlbVirtualServerPortStatsDnsVportStatsDnsVportOutputReference | SlbVirtualServerPortStatsDnsVportStatsDnsVport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns_cache_hit: {
      value: cdktf.numberToHclTerraform(struct!.dnsCacheHit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_category_action_drop: {
      value: cdktf.numberToHclTerraform(struct!.dnsCategoryActionDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_category_action_permit: {
      value: cdktf.numberToHclTerraform(struct!.dnsCategoryActionPermit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_category_action_respond: {
      value: cdktf.numberToHclTerraform(struct!.dnsCategoryActionRespond),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_category_async_received: {
      value: cdktf.numberToHclTerraform(struct!.dnsCategoryAsyncReceived),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_category_async_sent: {
      value: cdktf.numberToHclTerraform(struct!.dnsCategoryAsyncSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_category_bypass: {
      value: cdktf.numberToHclTerraform(struct!.dnsCategoryBypass),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_category_no_local_result: {
      value: cdktf.numberToHclTerraform(struct!.dnsCategoryNoLocalResult),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_category_resp_a: {
      value: cdktf.numberToHclTerraform(struct!.dnsCategoryRespA),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_category_resp_aaaa: {
      value: cdktf.numberToHclTerraform(struct!.dnsCategoryRespAaaa),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_category_resp_cname: {
      value: cdktf.numberToHclTerraform(struct!.dnsCategoryRespCname),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_category_resp_noanswer: {
      value: cdktf.numberToHclTerraform(struct!.dnsCategoryRespNoanswer),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_category_resp_nxdomain: {
      value: cdktf.numberToHclTerraform(struct!.dnsCategoryRespNxdomain),
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
    dns_filter_tld_drop: {
      value: cdktf.numberToHclTerraform(struct!.dnsFilterTldDrop),
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
    dns_full_response_from_cache: {
      value: cdktf.numberToHclTerraform(struct!.dnsFullResponseFromCache),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_negative_served: {
      value: cdktf.numberToHclTerraform(struct!.dnsNegativeServed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_recursive_resolution_buff_alloc_failed: {
      value: cdktf.numberToHclTerraform(struct!.dnsRecursiveResolutionBuffAllocFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_recursive_resolution_full_response: {
      value: cdktf.numberToHclTerraform(struct!.dnsRecursiveResolutionFullResponse),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_recursive_resolution_icmp_err: {
      value: cdktf.numberToHclTerraform(struct!.dnsRecursiveResolutionIcmpErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_recursive_resolution_invalid_hints: {
      value: cdktf.numberToHclTerraform(struct!.dnsRecursiveResolutionInvalidHints),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_recursive_resolution_late_ans: {
      value: cdktf.numberToHclTerraform(struct!.dnsRecursiveResolutionLateAns),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_recursive_resolution_lookup_ip_proto_switch_46: {
      value: cdktf.numberToHclTerraform(struct!.dnsRecursiveResolutionLookupIpProtoSwitch46),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_recursive_resolution_lookup_ip_proto_switch_64: {
      value: cdktf.numberToHclTerraform(struct!.dnsRecursiveResolutionLookupIpProtoSwitch64),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_recursive_resolution_max_trials_exceeded: {
      value: cdktf.numberToHclTerraform(struct!.dnsRecursiveResolutionMaxTrialsExceeded),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_recursive_resolution_missing_glue: {
      value: cdktf.numberToHclTerraform(struct!.dnsRecursiveResolutionMissingGlue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_recursive_resolution_no_hints: {
      value: cdktf.numberToHclTerraform(struct!.dnsRecursiveResolutionNoHints),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_recursive_resolution_no_resolver: {
      value: cdktf.numberToHclTerraform(struct!.dnsRecursiveResolutionNoResolver),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_recursive_resolution_not_dplane: {
      value: cdktf.numberToHclTerraform(struct!.dnsRecursiveResolutionNotDplane),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_recursive_resolution_ns_cache_hit: {
      value: cdktf.numberToHclTerraform(struct!.dnsRecursiveResolutionNsCacheHit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_recursive_resolution_ns_cache_miss: {
      value: cdktf.numberToHclTerraform(struct!.dnsRecursiveResolutionNsCacheMiss),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_recursive_resolution_ongoing_client_retransmit: {
      value: cdktf.numberToHclTerraform(struct!.dnsRecursiveResolutionOngoingClientRetransmit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_recursive_resolution_pending_resolution: {
      value: cdktf.numberToHclTerraform(struct!.dnsRecursiveResolutionPendingResolution),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_recursive_resolution_query_dropped: {
      value: cdktf.numberToHclTerraform(struct!.dnsRecursiveResolutionQueryDropped),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_recursive_resolution_query_not_sent: {
      value: cdktf.numberToHclTerraform(struct!.dnsRecursiveResolutionQueryNotSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_recursive_resolution_reach_max_depth: {
      value: cdktf.numberToHclTerraform(struct!.dnsRecursiveResolutionReachMaxDepth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_recursive_resolution_request_send: {
      value: cdktf.numberToHclTerraform(struct!.dnsRecursiveResolutionRequestSend),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_recursive_resolution_res_check_err: {
      value: cdktf.numberToHclTerraform(struct!.dnsRecursiveResolutionResCheckErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_recursive_resolution_res_submit_err: {
      value: cdktf.numberToHclTerraform(struct!.dnsRecursiveResolutionResSubmitErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_recursive_resolution_resp_truncated: {
      value: cdktf.numberToHclTerraform(struct!.dnsRecursiveResolutionRespTruncated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_recursive_resolution_respond_with_servfail: {
      value: cdktf.numberToHclTerraform(struct!.dnsRecursiveResolutionRespondWithServfail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_recursive_resolution_response_receive: {
      value: cdktf.numberToHclTerraform(struct!.dnsRecursiveResolutionResponseReceive),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_recursive_resolution_retransmit_exceeded: {
      value: cdktf.numberToHclTerraform(struct!.dnsRecursiveResolutionRetransmitExceeded),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_recursive_resolution_retransmit_sent: {
      value: cdktf.numberToHclTerraform(struct!.dnsRecursiveResolutionRetransmitSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_recursive_resolution_send_failed: {
      value: cdktf.numberToHclTerraform(struct!.dnsRecursiveResolutionSendFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_recursive_resolution_started: {
      value: cdktf.numberToHclTerraform(struct!.dnsRecursiveResolutionStarted),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_recursive_resolution_succeeded: {
      value: cdktf.numberToHclTerraform(struct!.dnsRecursiveResolutionSucceeded),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_recursive_resolution_tcp_conn: {
      value: cdktf.numberToHclTerraform(struct!.dnsRecursiveResolutionTcpConn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_recursive_resolution_tcp_conn_err: {
      value: cdktf.numberToHclTerraform(struct!.dnsRecursiveResolutionTcpConnErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_recursive_resolution_timeout: {
      value: cdktf.numberToHclTerraform(struct!.dnsRecursiveResolutionTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_recursive_resolution_total_trials_1: {
      value: cdktf.numberToHclTerraform(struct!.dnsRecursiveResolutionTotalTrials1),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_recursive_resolution_total_trials_12: {
      value: cdktf.numberToHclTerraform(struct!.dnsRecursiveResolutionTotalTrials12),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_recursive_resolution_total_trials_128: {
      value: cdktf.numberToHclTerraform(struct!.dnsRecursiveResolutionTotalTrials128),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_recursive_resolution_total_trials_24: {
      value: cdktf.numberToHclTerraform(struct!.dnsRecursiveResolutionTotalTrials24),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_recursive_resolution_total_trials_3: {
      value: cdktf.numberToHclTerraform(struct!.dnsRecursiveResolutionTotalTrials3),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_recursive_resolution_total_trials_48: {
      value: cdktf.numberToHclTerraform(struct!.dnsRecursiveResolutionTotalTrials48),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_recursive_resolution_total_trials_6: {
      value: cdktf.numberToHclTerraform(struct!.dnsRecursiveResolutionTotalTrials6),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_recursive_resolution_total_trials_64: {
      value: cdktf.numberToHclTerraform(struct!.dnsRecursiveResolutionTotalTrials64),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_recursive_resolution_total_trials_max: {
      value: cdktf.numberToHclTerraform(struct!.dnsRecursiveResolutionTotalTrialsMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_recursive_resolution_udp_conn: {
      value: cdktf.numberToHclTerraform(struct!.dnsRecursiveResolutionUdpConn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_recursive_resolution_udp_conn_err: {
      value: cdktf.numberToHclTerraform(struct!.dnsRecursiveResolutionUdpConnErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_recursive_resolution_udp_send_failed: {
      value: cdktf.numberToHclTerraform(struct!.dnsRecursiveResolutionUdpSendFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_request_drop: {
      value: cdktf.numberToHclTerraform(struct!.dnsRequestDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_request_response: {
      value: cdktf.numberToHclTerraform(struct!.dnsRequestResponse),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_request_rexmit: {
      value: cdktf.numberToHclTerraform(struct!.dnsRequestRexmit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_request_send: {
      value: cdktf.numberToHclTerraform(struct!.dnsRequestSend),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_request_timeout: {
      value: cdktf.numberToHclTerraform(struct!.dnsRequestTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_response_drop: {
      value: cdktf.numberToHclTerraform(struct!.dnsResponseDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_response_send: {
      value: cdktf.numberToHclTerraform(struct!.dnsResponseSend),
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
    dns_rr_dnssec_req_received: {
      value: cdktf.numberToHclTerraform(struct!.dnsRrDnssecReqReceived),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_rr_dnssec_resp_served: {
      value: cdktf.numberToHclTerraform(struct!.dnsRrDnssecRespServed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_rr_dnssec_val_alg_not_supported: {
      value: cdktf.numberToHclTerraform(struct!.dnsRrDnssecValAlgNotSupported),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_rr_dnssec_val_dgst_not_supported: {
      value: cdktf.numberToHclTerraform(struct!.dnsRrDnssecValDgstNotSupported),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_rr_dnssec_val_dnskey_proto_err: {
      value: cdktf.numberToHclTerraform(struct!.dnsRrDnssecValDnskeyProtoErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_rr_dnssec_val_incorrect_key_dgst: {
      value: cdktf.numberToHclTerraform(struct!.dnsRrDnssecValIncorrectKeyDgst),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_rr_dnssec_val_incorrect_sig: {
      value: cdktf.numberToHclTerraform(struct!.dnsRrDnssecValIncorrectSig),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_rr_dnssec_val_rrset_size_exceed_limit: {
      value: cdktf.numberToHclTerraform(struct!.dnsRrDnssecValRrsetSizeExceedLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_rr_dnssec_val_rrsig_labels_err: {
      value: cdktf.numberToHclTerraform(struct!.dnsRrDnssecValRrsigLabelsErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_rr_dnssec_val_rrsig_non_validity_period: {
      value: cdktf.numberToHclTerraform(struct!.dnsRrDnssecValRrsigNonValidityPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_rr_dnssec_val_rrsig_signer_err: {
      value: cdktf.numberToHclTerraform(struct!.dnsRrDnssecValRrsigSignerErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_rr_dnssec_val_with_trust_anchor_failed: {
      value: cdktf.numberToHclTerraform(struct!.dnsRrDnssecValWithTrustAnchorFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_rr_dnssec_validation_failed: {
      value: cdktf.numberToHclTerraform(struct!.dnsRrDnssecValidationFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_tcp_pipeline_request_drop: {
      value: cdktf.numberToHclTerraform(struct!.dnsTcpPipelineRequestDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_total_drop: {
      value: cdktf.numberToHclTerraform(struct!.dnsTotalDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_total_request: {
      value: cdktf.numberToHclTerraform(struct!.dnsTotalRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_total_response: {
      value: cdktf.numberToHclTerraform(struct!.dnsTotalResponse),
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
    dnsrrl_nx_drop: {
      value: cdktf.numberToHclTerraform(struct!.dnsrrlNxDrop),
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
    dnsrrl_qps_drop: {
      value: cdktf.numberToHclTerraform(struct!.dnsrrlQpsDrop),
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
    empty_response: {
      value: cdktf.numberToHclTerraform(struct!.emptyResponse),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gslb_drop: {
      value: cdktf.numberToHclTerraform(struct!.gslbDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gslb_query_bad: {
      value: cdktf.numberToHclTerraform(struct!.gslbQueryBad),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gslb_query_drop: {
      value: cdktf.numberToHclTerraform(struct!.gslbQueryDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gslb_query_fwd: {
      value: cdktf.numberToHclTerraform(struct!.gslbQueryFwd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gslb_response_bad: {
      value: cdktf.numberToHclTerraform(struct!.gslbResponseBad),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gslb_response_drop: {
      value: cdktf.numberToHclTerraform(struct!.gslbResponseDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gslb_response_good: {
      value: cdktf.numberToHclTerraform(struct!.gslbResponseGood),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gslb_response_rvs: {
      value: cdktf.numberToHclTerraform(struct!.gslbResponseRvs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rcode_badalg_receive: {
      value: cdktf.numberToHclTerraform(struct!.rcodeBadalgReceive),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rcode_badalg_response: {
      value: cdktf.numberToHclTerraform(struct!.rcodeBadalgResponse),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rcode_badcookie_receive: {
      value: cdktf.numberToHclTerraform(struct!.rcodeBadcookieReceive),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rcode_badcookie_response: {
      value: cdktf.numberToHclTerraform(struct!.rcodeBadcookieResponse),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rcode_badkey_receive: {
      value: cdktf.numberToHclTerraform(struct!.rcodeBadkeyReceive),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rcode_badkey_response: {
      value: cdktf.numberToHclTerraform(struct!.rcodeBadkeyResponse),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rcode_badmode_receive: {
      value: cdktf.numberToHclTerraform(struct!.rcodeBadmodeReceive),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rcode_badmode_response: {
      value: cdktf.numberToHclTerraform(struct!.rcodeBadmodeResponse),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rcode_badname_receive: {
      value: cdktf.numberToHclTerraform(struct!.rcodeBadnameReceive),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rcode_badname_response: {
      value: cdktf.numberToHclTerraform(struct!.rcodeBadnameResponse),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rcode_badtime_receive: {
      value: cdktf.numberToHclTerraform(struct!.rcodeBadtimeReceive),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rcode_badtime_response: {
      value: cdktf.numberToHclTerraform(struct!.rcodeBadtimeResponse),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rcode_badtranc_receive: {
      value: cdktf.numberToHclTerraform(struct!.rcodeBadtrancReceive),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rcode_badtranc_response: {
      value: cdktf.numberToHclTerraform(struct!.rcodeBadtrancResponse),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rcode_badver_receive: {
      value: cdktf.numberToHclTerraform(struct!.rcodeBadverReceive),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rcode_badver_response: {
      value: cdktf.numberToHclTerraform(struct!.rcodeBadverResponse),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rcode_dsotypen_receive: {
      value: cdktf.numberToHclTerraform(struct!.rcodeDsotypenReceive),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rcode_dsotypen_response: {
      value: cdktf.numberToHclTerraform(struct!.rcodeDsotypenResponse),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rcode_formerr_receive: {
      value: cdktf.numberToHclTerraform(struct!.rcodeFormerrReceive),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rcode_formerr_response: {
      value: cdktf.numberToHclTerraform(struct!.rcodeFormerrResponse),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rcode_noerror_generate: {
      value: cdktf.numberToHclTerraform(struct!.rcodeNoerrorGenerate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rcode_notauth_receive: {
      value: cdktf.numberToHclTerraform(struct!.rcodeNotauthReceive),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rcode_notauth_response: {
      value: cdktf.numberToHclTerraform(struct!.rcodeNotauthResponse),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rcode_notimpl_receive: {
      value: cdktf.numberToHclTerraform(struct!.rcodeNotimplReceive),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rcode_notimpl_response: {
      value: cdktf.numberToHclTerraform(struct!.rcodeNotimplResponse),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rcode_notzone_receive: {
      value: cdktf.numberToHclTerraform(struct!.rcodeNotzoneReceive),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rcode_nxdomain_receive: {
      value: cdktf.numberToHclTerraform(struct!.rcodeNxdomainReceive),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rcode_nxdomain_response: {
      value: cdktf.numberToHclTerraform(struct!.rcodeNxdomainResponse),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rcode_nxrrset_receive: {
      value: cdktf.numberToHclTerraform(struct!.rcodeNxrrsetReceive),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rcode_nxrrset_response: {
      value: cdktf.numberToHclTerraform(struct!.rcodeNxrrsetResponse),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rcode_other_receive: {
      value: cdktf.numberToHclTerraform(struct!.rcodeOtherReceive),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rcode_other_response: {
      value: cdktf.numberToHclTerraform(struct!.rcodeOtherResponse),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rcode_refuse_receive: {
      value: cdktf.numberToHclTerraform(struct!.rcodeRefuseReceive),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rcode_refuse_response: {
      value: cdktf.numberToHclTerraform(struct!.rcodeRefuseResponse),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rcode_serverr_receive: {
      value: cdktf.numberToHclTerraform(struct!.rcodeServerrReceive),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rcode_serverr_response: {
      value: cdktf.numberToHclTerraform(struct!.rcodeServerrResponse),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rcode_tsig_badkey_receive: {
      value: cdktf.numberToHclTerraform(struct!.rcodeTsigBadkeyReceive),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rcode_tsig_badsig_receive: {
      value: cdktf.numberToHclTerraform(struct!.rcodeTsigBadsigReceive),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rcode_tsig_badtime_receive: {
      value: cdktf.numberToHclTerraform(struct!.rcodeTsigBadtimeReceive),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rcode_tsig_badtrunc_receive: {
      value: cdktf.numberToHclTerraform(struct!.rcodeTsigBadtruncReceive),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rcode_yxdomain_receive: {
      value: cdktf.numberToHclTerraform(struct!.rcodeYxdomainReceive),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rcode_yxdomain_response: {
      value: cdktf.numberToHclTerraform(struct!.rcodeYxdomainResponse),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rcode_yxrrset_receive: {
      value: cdktf.numberToHclTerraform(struct!.rcodeYxrrsetReceive),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rcode_yxrrset_response: {
      value: cdktf.numberToHclTerraform(struct!.rcodeYxrrsetResponse),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    slb_dns_client_ssl_succ: {
      value: cdktf.numberToHclTerraform(struct!.slbDnsClientSslSucc),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    slb_dns_edns_ecs_inserted: {
      value: cdktf.numberToHclTerraform(struct!.slbDnsEdnsEcsInserted),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    slb_dns_edns_ecs_insertion_fail: {
      value: cdktf.numberToHclTerraform(struct!.slbDnsEdnsEcsInsertionFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    slb_dns_edns_ecs_received: {
      value: cdktf.numberToHclTerraform(struct!.slbDnsEdnsEcsReceived),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    slb_dns_edns_subnet_to_server_removed: {
      value: cdktf.numberToHclTerraform(struct!.slbDnsEdnsSubnetToServerRemoved),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    slb_dns_padding_to_client_added: {
      value: cdktf.numberToHclTerraform(struct!.slbDnsPaddingToClientAdded),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    slb_dns_padding_to_server_removed: {
      value: cdktf.numberToHclTerraform(struct!.slbDnsPaddingToServerRemoved),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    slb_dns_server_ssl_succ: {
      value: cdktf.numberToHclTerraform(struct!.slbDnsServerSslSucc),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    slb_dns_udp_conn: {
      value: cdktf.numberToHclTerraform(struct!.slbDnsUdpConn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    slb_dns_udp_conn_succ: {
      value: cdktf.numberToHclTerraform(struct!.slbDnsUdpConnSucc),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    slb_dns_udp_retransmit: {
      value: cdktf.numberToHclTerraform(struct!.slbDnsUdpRetransmit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    slb_dns_udp_retransmit_fail: {
      value: cdktf.numberToHclTerraform(struct!.slbDnsUdpRetransmitFail),
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
    total_filter_drop: {
      value: cdktf.numberToHclTerraform(struct!.totalFilterDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_max_query_len_drop: {
      value: cdktf.numberToHclTerraform(struct!.totalMaxQueryLenDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_mf_dns_pkt: {
      value: cdktf.numberToHclTerraform(struct!.totalMfDnsPkt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_mf_dns_pkt_detect: {
      value: cdktf.numberToHclTerraform(struct!.totalMfDnsPktDetect),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type_a_query: {
      value: cdktf.numberToHclTerraform(struct!.typeAQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type_aaaa_query: {
      value: cdktf.numberToHclTerraform(struct!.typeAaaaQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type_any_query: {
      value: cdktf.numberToHclTerraform(struct!.typeAnyQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type_axfr_query: {
      value: cdktf.numberToHclTerraform(struct!.typeAxfrQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type_caa_query: {
      value: cdktf.numberToHclTerraform(struct!.typeCaaQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type_cert_query: {
      value: cdktf.numberToHclTerraform(struct!.typeCertQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type_chain_query: {
      value: cdktf.numberToHclTerraform(struct!.typeChainQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type_cname_query: {
      value: cdktf.numberToHclTerraform(struct!.typeCnameQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type_cookie_query: {
      value: cdktf.numberToHclTerraform(struct!.typeCookieQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type_dau_query: {
      value: cdktf.numberToHclTerraform(struct!.typeDauQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type_dnskey_query: {
      value: cdktf.numberToHclTerraform(struct!.typeDnskeyQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type_ds_query: {
      value: cdktf.numberToHclTerraform(struct!.typeDsQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type_expire_query: {
      value: cdktf.numberToHclTerraform(struct!.typeExpireQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type_https_query: {
      value: cdktf.numberToHclTerraform(struct!.typeHttpsQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type_ixfr_query: {
      value: cdktf.numberToHclTerraform(struct!.typeIxfrQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type_keepalive_query: {
      value: cdktf.numberToHclTerraform(struct!.typeKeepaliveQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type_mx_query: {
      value: cdktf.numberToHclTerraform(struct!.typeMxQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type_n3u_query: {
      value: cdktf.numberToHclTerraform(struct!.typeN3UQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type_naptr_query: {
      value: cdktf.numberToHclTerraform(struct!.typeNaptrQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type_ns_query: {
      value: cdktf.numberToHclTerraform(struct!.typeNsQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type_nsid_query: {
      value: cdktf.numberToHclTerraform(struct!.typeNsidQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type_other_query: {
      value: cdktf.numberToHclTerraform(struct!.typeOtherQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type_padding_query: {
      value: cdktf.numberToHclTerraform(struct!.typePaddingQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type_ptr_query: {
      value: cdktf.numberToHclTerraform(struct!.typePtrQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type_rrsig_query: {
      value: cdktf.numberToHclTerraform(struct!.typeRrsigQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type_soa_query: {
      value: cdktf.numberToHclTerraform(struct!.typeSoaQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type_srv_query: {
      value: cdktf.numberToHclTerraform(struct!.typeSrvQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type_tsig_query: {
      value: cdktf.numberToHclTerraform(struct!.typeTsigQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type_txt_query: {
      value: cdktf.numberToHclTerraform(struct!.typeTxtQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbVirtualServerPortStatsDnsVportStatsDnsVportOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SlbVirtualServerPortStatsDnsVportStatsDnsVport | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsCacheHit !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsCacheHit = this._dnsCacheHit;
    }
    if (this._dnsCategoryActionDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsCategoryActionDrop = this._dnsCategoryActionDrop;
    }
    if (this._dnsCategoryActionPermit !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsCategoryActionPermit = this._dnsCategoryActionPermit;
    }
    if (this._dnsCategoryActionRespond !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsCategoryActionRespond = this._dnsCategoryActionRespond;
    }
    if (this._dnsCategoryAsyncReceived !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsCategoryAsyncReceived = this._dnsCategoryAsyncReceived;
    }
    if (this._dnsCategoryAsyncSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsCategoryAsyncSent = this._dnsCategoryAsyncSent;
    }
    if (this._dnsCategoryBypass !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsCategoryBypass = this._dnsCategoryBypass;
    }
    if (this._dnsCategoryNoLocalResult !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsCategoryNoLocalResult = this._dnsCategoryNoLocalResult;
    }
    if (this._dnsCategoryRespA !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsCategoryRespA = this._dnsCategoryRespA;
    }
    if (this._dnsCategoryRespAaaa !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsCategoryRespAaaa = this._dnsCategoryRespAaaa;
    }
    if (this._dnsCategoryRespCname !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsCategoryRespCname = this._dnsCategoryRespCname;
    }
    if (this._dnsCategoryRespNoanswer !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsCategoryRespNoanswer = this._dnsCategoryRespNoanswer;
    }
    if (this._dnsCategoryRespNxdomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsCategoryRespNxdomain = this._dnsCategoryRespNxdomain;
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
    if (this._dnsFilterTldDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsFilterTldDrop = this._dnsFilterTldDrop;
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
    if (this._dnsFullResponseFromCache !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsFullResponseFromCache = this._dnsFullResponseFromCache;
    }
    if (this._dnsNegativeServed !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsNegativeServed = this._dnsNegativeServed;
    }
    if (this._dnsRecursiveResolutionBuffAllocFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsRecursiveResolutionBuffAllocFailed = this._dnsRecursiveResolutionBuffAllocFailed;
    }
    if (this._dnsRecursiveResolutionFullResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsRecursiveResolutionFullResponse = this._dnsRecursiveResolutionFullResponse;
    }
    if (this._dnsRecursiveResolutionIcmpErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsRecursiveResolutionIcmpErr = this._dnsRecursiveResolutionIcmpErr;
    }
    if (this._dnsRecursiveResolutionInvalidHints !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsRecursiveResolutionInvalidHints = this._dnsRecursiveResolutionInvalidHints;
    }
    if (this._dnsRecursiveResolutionLateAns !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsRecursiveResolutionLateAns = this._dnsRecursiveResolutionLateAns;
    }
    if (this._dnsRecursiveResolutionLookupIpProtoSwitch46 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsRecursiveResolutionLookupIpProtoSwitch46 = this._dnsRecursiveResolutionLookupIpProtoSwitch46;
    }
    if (this._dnsRecursiveResolutionLookupIpProtoSwitch64 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsRecursiveResolutionLookupIpProtoSwitch64 = this._dnsRecursiveResolutionLookupIpProtoSwitch64;
    }
    if (this._dnsRecursiveResolutionMaxTrialsExceeded !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsRecursiveResolutionMaxTrialsExceeded = this._dnsRecursiveResolutionMaxTrialsExceeded;
    }
    if (this._dnsRecursiveResolutionMissingGlue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsRecursiveResolutionMissingGlue = this._dnsRecursiveResolutionMissingGlue;
    }
    if (this._dnsRecursiveResolutionNoHints !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsRecursiveResolutionNoHints = this._dnsRecursiveResolutionNoHints;
    }
    if (this._dnsRecursiveResolutionNoResolver !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsRecursiveResolutionNoResolver = this._dnsRecursiveResolutionNoResolver;
    }
    if (this._dnsRecursiveResolutionNotDplane !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsRecursiveResolutionNotDplane = this._dnsRecursiveResolutionNotDplane;
    }
    if (this._dnsRecursiveResolutionNsCacheHit !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsRecursiveResolutionNsCacheHit = this._dnsRecursiveResolutionNsCacheHit;
    }
    if (this._dnsRecursiveResolutionNsCacheMiss !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsRecursiveResolutionNsCacheMiss = this._dnsRecursiveResolutionNsCacheMiss;
    }
    if (this._dnsRecursiveResolutionOngoingClientRetransmit !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsRecursiveResolutionOngoingClientRetransmit = this._dnsRecursiveResolutionOngoingClientRetransmit;
    }
    if (this._dnsRecursiveResolutionPendingResolution !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsRecursiveResolutionPendingResolution = this._dnsRecursiveResolutionPendingResolution;
    }
    if (this._dnsRecursiveResolutionQueryDropped !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsRecursiveResolutionQueryDropped = this._dnsRecursiveResolutionQueryDropped;
    }
    if (this._dnsRecursiveResolutionQueryNotSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsRecursiveResolutionQueryNotSent = this._dnsRecursiveResolutionQueryNotSent;
    }
    if (this._dnsRecursiveResolutionReachMaxDepth !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsRecursiveResolutionReachMaxDepth = this._dnsRecursiveResolutionReachMaxDepth;
    }
    if (this._dnsRecursiveResolutionRequestSend !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsRecursiveResolutionRequestSend = this._dnsRecursiveResolutionRequestSend;
    }
    if (this._dnsRecursiveResolutionResCheckErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsRecursiveResolutionResCheckErr = this._dnsRecursiveResolutionResCheckErr;
    }
    if (this._dnsRecursiveResolutionResSubmitErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsRecursiveResolutionResSubmitErr = this._dnsRecursiveResolutionResSubmitErr;
    }
    if (this._dnsRecursiveResolutionRespTruncated !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsRecursiveResolutionRespTruncated = this._dnsRecursiveResolutionRespTruncated;
    }
    if (this._dnsRecursiveResolutionRespondWithServfail !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsRecursiveResolutionRespondWithServfail = this._dnsRecursiveResolutionRespondWithServfail;
    }
    if (this._dnsRecursiveResolutionResponseReceive !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsRecursiveResolutionResponseReceive = this._dnsRecursiveResolutionResponseReceive;
    }
    if (this._dnsRecursiveResolutionRetransmitExceeded !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsRecursiveResolutionRetransmitExceeded = this._dnsRecursiveResolutionRetransmitExceeded;
    }
    if (this._dnsRecursiveResolutionRetransmitSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsRecursiveResolutionRetransmitSent = this._dnsRecursiveResolutionRetransmitSent;
    }
    if (this._dnsRecursiveResolutionSendFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsRecursiveResolutionSendFailed = this._dnsRecursiveResolutionSendFailed;
    }
    if (this._dnsRecursiveResolutionStarted !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsRecursiveResolutionStarted = this._dnsRecursiveResolutionStarted;
    }
    if (this._dnsRecursiveResolutionSucceeded !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsRecursiveResolutionSucceeded = this._dnsRecursiveResolutionSucceeded;
    }
    if (this._dnsRecursiveResolutionTcpConn !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsRecursiveResolutionTcpConn = this._dnsRecursiveResolutionTcpConn;
    }
    if (this._dnsRecursiveResolutionTcpConnErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsRecursiveResolutionTcpConnErr = this._dnsRecursiveResolutionTcpConnErr;
    }
    if (this._dnsRecursiveResolutionTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsRecursiveResolutionTimeout = this._dnsRecursiveResolutionTimeout;
    }
    if (this._dnsRecursiveResolutionTotalTrials1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsRecursiveResolutionTotalTrials1 = this._dnsRecursiveResolutionTotalTrials1;
    }
    if (this._dnsRecursiveResolutionTotalTrials12 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsRecursiveResolutionTotalTrials12 = this._dnsRecursiveResolutionTotalTrials12;
    }
    if (this._dnsRecursiveResolutionTotalTrials128 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsRecursiveResolutionTotalTrials128 = this._dnsRecursiveResolutionTotalTrials128;
    }
    if (this._dnsRecursiveResolutionTotalTrials24 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsRecursiveResolutionTotalTrials24 = this._dnsRecursiveResolutionTotalTrials24;
    }
    if (this._dnsRecursiveResolutionTotalTrials3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsRecursiveResolutionTotalTrials3 = this._dnsRecursiveResolutionTotalTrials3;
    }
    if (this._dnsRecursiveResolutionTotalTrials48 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsRecursiveResolutionTotalTrials48 = this._dnsRecursiveResolutionTotalTrials48;
    }
    if (this._dnsRecursiveResolutionTotalTrials6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsRecursiveResolutionTotalTrials6 = this._dnsRecursiveResolutionTotalTrials6;
    }
    if (this._dnsRecursiveResolutionTotalTrials64 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsRecursiveResolutionTotalTrials64 = this._dnsRecursiveResolutionTotalTrials64;
    }
    if (this._dnsRecursiveResolutionTotalTrialsMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsRecursiveResolutionTotalTrialsMax = this._dnsRecursiveResolutionTotalTrialsMax;
    }
    if (this._dnsRecursiveResolutionUdpConn !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsRecursiveResolutionUdpConn = this._dnsRecursiveResolutionUdpConn;
    }
    if (this._dnsRecursiveResolutionUdpConnErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsRecursiveResolutionUdpConnErr = this._dnsRecursiveResolutionUdpConnErr;
    }
    if (this._dnsRecursiveResolutionUdpSendFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsRecursiveResolutionUdpSendFailed = this._dnsRecursiveResolutionUdpSendFailed;
    }
    if (this._dnsRequestDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsRequestDrop = this._dnsRequestDrop;
    }
    if (this._dnsRequestResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsRequestResponse = this._dnsRequestResponse;
    }
    if (this._dnsRequestRexmit !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsRequestRexmit = this._dnsRequestRexmit;
    }
    if (this._dnsRequestSend !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsRequestSend = this._dnsRequestSend;
    }
    if (this._dnsRequestTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsRequestTimeout = this._dnsRequestTimeout;
    }
    if (this._dnsResponseDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsResponseDrop = this._dnsResponseDrop;
    }
    if (this._dnsResponseSend !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsResponseSend = this._dnsResponseSend;
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
    if (this._dnsRrDnssecReqReceived !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsRrDnssecReqReceived = this._dnsRrDnssecReqReceived;
    }
    if (this._dnsRrDnssecRespServed !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsRrDnssecRespServed = this._dnsRrDnssecRespServed;
    }
    if (this._dnsRrDnssecValAlgNotSupported !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsRrDnssecValAlgNotSupported = this._dnsRrDnssecValAlgNotSupported;
    }
    if (this._dnsRrDnssecValDgstNotSupported !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsRrDnssecValDgstNotSupported = this._dnsRrDnssecValDgstNotSupported;
    }
    if (this._dnsRrDnssecValDnskeyProtoErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsRrDnssecValDnskeyProtoErr = this._dnsRrDnssecValDnskeyProtoErr;
    }
    if (this._dnsRrDnssecValIncorrectKeyDgst !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsRrDnssecValIncorrectKeyDgst = this._dnsRrDnssecValIncorrectKeyDgst;
    }
    if (this._dnsRrDnssecValIncorrectSig !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsRrDnssecValIncorrectSig = this._dnsRrDnssecValIncorrectSig;
    }
    if (this._dnsRrDnssecValRrsetSizeExceedLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsRrDnssecValRrsetSizeExceedLimit = this._dnsRrDnssecValRrsetSizeExceedLimit;
    }
    if (this._dnsRrDnssecValRrsigLabelsErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsRrDnssecValRrsigLabelsErr = this._dnsRrDnssecValRrsigLabelsErr;
    }
    if (this._dnsRrDnssecValRrsigNonValidityPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsRrDnssecValRrsigNonValidityPeriod = this._dnsRrDnssecValRrsigNonValidityPeriod;
    }
    if (this._dnsRrDnssecValRrsigSignerErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsRrDnssecValRrsigSignerErr = this._dnsRrDnssecValRrsigSignerErr;
    }
    if (this._dnsRrDnssecValWithTrustAnchorFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsRrDnssecValWithTrustAnchorFailed = this._dnsRrDnssecValWithTrustAnchorFailed;
    }
    if (this._dnsRrDnssecValidationFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsRrDnssecValidationFailed = this._dnsRrDnssecValidationFailed;
    }
    if (this._dnsTcpPipelineRequestDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsTcpPipelineRequestDrop = this._dnsTcpPipelineRequestDrop;
    }
    if (this._dnsTotalDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsTotalDrop = this._dnsTotalDrop;
    }
    if (this._dnsTotalRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsTotalRequest = this._dnsTotalRequest;
    }
    if (this._dnsTotalResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsTotalResponse = this._dnsTotalResponse;
    }
    if (this._dnsrrlBadFqdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsrrlBadFqdn = this._dnsrrlBadFqdn;
    }
    if (this._dnsrrlNxDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsrrlNxDrop = this._dnsrrlNxDrop;
    }
    if (this._dnsrrlNxExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsrrlNxExceed = this._dnsrrlNxExceed;
    }
    if (this._dnsrrlQpsDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsrrlQpsDrop = this._dnsrrlQpsDrop;
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
    if (this._emptyResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.emptyResponse = this._emptyResponse;
    }
    if (this._gslbDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbDrop = this._gslbDrop;
    }
    if (this._gslbQueryBad !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbQueryBad = this._gslbQueryBad;
    }
    if (this._gslbQueryDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbQueryDrop = this._gslbQueryDrop;
    }
    if (this._gslbQueryFwd !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbQueryFwd = this._gslbQueryFwd;
    }
    if (this._gslbResponseBad !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbResponseBad = this._gslbResponseBad;
    }
    if (this._gslbResponseDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbResponseDrop = this._gslbResponseDrop;
    }
    if (this._gslbResponseGood !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbResponseGood = this._gslbResponseGood;
    }
    if (this._gslbResponseRvs !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbResponseRvs = this._gslbResponseRvs;
    }
    if (this._rcodeBadalgReceive !== undefined) {
      hasAnyValues = true;
      internalValueResult.rcodeBadalgReceive = this._rcodeBadalgReceive;
    }
    if (this._rcodeBadalgResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.rcodeBadalgResponse = this._rcodeBadalgResponse;
    }
    if (this._rcodeBadcookieReceive !== undefined) {
      hasAnyValues = true;
      internalValueResult.rcodeBadcookieReceive = this._rcodeBadcookieReceive;
    }
    if (this._rcodeBadcookieResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.rcodeBadcookieResponse = this._rcodeBadcookieResponse;
    }
    if (this._rcodeBadkeyReceive !== undefined) {
      hasAnyValues = true;
      internalValueResult.rcodeBadkeyReceive = this._rcodeBadkeyReceive;
    }
    if (this._rcodeBadkeyResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.rcodeBadkeyResponse = this._rcodeBadkeyResponse;
    }
    if (this._rcodeBadmodeReceive !== undefined) {
      hasAnyValues = true;
      internalValueResult.rcodeBadmodeReceive = this._rcodeBadmodeReceive;
    }
    if (this._rcodeBadmodeResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.rcodeBadmodeResponse = this._rcodeBadmodeResponse;
    }
    if (this._rcodeBadnameReceive !== undefined) {
      hasAnyValues = true;
      internalValueResult.rcodeBadnameReceive = this._rcodeBadnameReceive;
    }
    if (this._rcodeBadnameResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.rcodeBadnameResponse = this._rcodeBadnameResponse;
    }
    if (this._rcodeBadtimeReceive !== undefined) {
      hasAnyValues = true;
      internalValueResult.rcodeBadtimeReceive = this._rcodeBadtimeReceive;
    }
    if (this._rcodeBadtimeResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.rcodeBadtimeResponse = this._rcodeBadtimeResponse;
    }
    if (this._rcodeBadtrancReceive !== undefined) {
      hasAnyValues = true;
      internalValueResult.rcodeBadtrancReceive = this._rcodeBadtrancReceive;
    }
    if (this._rcodeBadtrancResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.rcodeBadtrancResponse = this._rcodeBadtrancResponse;
    }
    if (this._rcodeBadverReceive !== undefined) {
      hasAnyValues = true;
      internalValueResult.rcodeBadverReceive = this._rcodeBadverReceive;
    }
    if (this._rcodeBadverResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.rcodeBadverResponse = this._rcodeBadverResponse;
    }
    if (this._rcodeDsotypenReceive !== undefined) {
      hasAnyValues = true;
      internalValueResult.rcodeDsotypenReceive = this._rcodeDsotypenReceive;
    }
    if (this._rcodeDsotypenResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.rcodeDsotypenResponse = this._rcodeDsotypenResponse;
    }
    if (this._rcodeFormerrReceive !== undefined) {
      hasAnyValues = true;
      internalValueResult.rcodeFormerrReceive = this._rcodeFormerrReceive;
    }
    if (this._rcodeFormerrResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.rcodeFormerrResponse = this._rcodeFormerrResponse;
    }
    if (this._rcodeNoerrorGenerate !== undefined) {
      hasAnyValues = true;
      internalValueResult.rcodeNoerrorGenerate = this._rcodeNoerrorGenerate;
    }
    if (this._rcodeNotauthReceive !== undefined) {
      hasAnyValues = true;
      internalValueResult.rcodeNotauthReceive = this._rcodeNotauthReceive;
    }
    if (this._rcodeNotauthResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.rcodeNotauthResponse = this._rcodeNotauthResponse;
    }
    if (this._rcodeNotimplReceive !== undefined) {
      hasAnyValues = true;
      internalValueResult.rcodeNotimplReceive = this._rcodeNotimplReceive;
    }
    if (this._rcodeNotimplResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.rcodeNotimplResponse = this._rcodeNotimplResponse;
    }
    if (this._rcodeNotzoneReceive !== undefined) {
      hasAnyValues = true;
      internalValueResult.rcodeNotzoneReceive = this._rcodeNotzoneReceive;
    }
    if (this._rcodeNxdomainReceive !== undefined) {
      hasAnyValues = true;
      internalValueResult.rcodeNxdomainReceive = this._rcodeNxdomainReceive;
    }
    if (this._rcodeNxdomainResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.rcodeNxdomainResponse = this._rcodeNxdomainResponse;
    }
    if (this._rcodeNxrrsetReceive !== undefined) {
      hasAnyValues = true;
      internalValueResult.rcodeNxrrsetReceive = this._rcodeNxrrsetReceive;
    }
    if (this._rcodeNxrrsetResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.rcodeNxrrsetResponse = this._rcodeNxrrsetResponse;
    }
    if (this._rcodeOtherReceive !== undefined) {
      hasAnyValues = true;
      internalValueResult.rcodeOtherReceive = this._rcodeOtherReceive;
    }
    if (this._rcodeOtherResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.rcodeOtherResponse = this._rcodeOtherResponse;
    }
    if (this._rcodeRefuseReceive !== undefined) {
      hasAnyValues = true;
      internalValueResult.rcodeRefuseReceive = this._rcodeRefuseReceive;
    }
    if (this._rcodeRefuseResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.rcodeRefuseResponse = this._rcodeRefuseResponse;
    }
    if (this._rcodeServerrReceive !== undefined) {
      hasAnyValues = true;
      internalValueResult.rcodeServerrReceive = this._rcodeServerrReceive;
    }
    if (this._rcodeServerrResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.rcodeServerrResponse = this._rcodeServerrResponse;
    }
    if (this._rcodeTsigBadkeyReceive !== undefined) {
      hasAnyValues = true;
      internalValueResult.rcodeTsigBadkeyReceive = this._rcodeTsigBadkeyReceive;
    }
    if (this._rcodeTsigBadsigReceive !== undefined) {
      hasAnyValues = true;
      internalValueResult.rcodeTsigBadsigReceive = this._rcodeTsigBadsigReceive;
    }
    if (this._rcodeTsigBadtimeReceive !== undefined) {
      hasAnyValues = true;
      internalValueResult.rcodeTsigBadtimeReceive = this._rcodeTsigBadtimeReceive;
    }
    if (this._rcodeTsigBadtruncReceive !== undefined) {
      hasAnyValues = true;
      internalValueResult.rcodeTsigBadtruncReceive = this._rcodeTsigBadtruncReceive;
    }
    if (this._rcodeYxdomainReceive !== undefined) {
      hasAnyValues = true;
      internalValueResult.rcodeYxdomainReceive = this._rcodeYxdomainReceive;
    }
    if (this._rcodeYxdomainResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.rcodeYxdomainResponse = this._rcodeYxdomainResponse;
    }
    if (this._rcodeYxrrsetReceive !== undefined) {
      hasAnyValues = true;
      internalValueResult.rcodeYxrrsetReceive = this._rcodeYxrrsetReceive;
    }
    if (this._rcodeYxrrsetResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.rcodeYxrrsetResponse = this._rcodeYxrrsetResponse;
    }
    if (this._slbDnsClientSslSucc !== undefined) {
      hasAnyValues = true;
      internalValueResult.slbDnsClientSslSucc = this._slbDnsClientSslSucc;
    }
    if (this._slbDnsEdnsEcsInserted !== undefined) {
      hasAnyValues = true;
      internalValueResult.slbDnsEdnsEcsInserted = this._slbDnsEdnsEcsInserted;
    }
    if (this._slbDnsEdnsEcsInsertionFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.slbDnsEdnsEcsInsertionFail = this._slbDnsEdnsEcsInsertionFail;
    }
    if (this._slbDnsEdnsEcsReceived !== undefined) {
      hasAnyValues = true;
      internalValueResult.slbDnsEdnsEcsReceived = this._slbDnsEdnsEcsReceived;
    }
    if (this._slbDnsEdnsSubnetToServerRemoved !== undefined) {
      hasAnyValues = true;
      internalValueResult.slbDnsEdnsSubnetToServerRemoved = this._slbDnsEdnsSubnetToServerRemoved;
    }
    if (this._slbDnsPaddingToClientAdded !== undefined) {
      hasAnyValues = true;
      internalValueResult.slbDnsPaddingToClientAdded = this._slbDnsPaddingToClientAdded;
    }
    if (this._slbDnsPaddingToServerRemoved !== undefined) {
      hasAnyValues = true;
      internalValueResult.slbDnsPaddingToServerRemoved = this._slbDnsPaddingToServerRemoved;
    }
    if (this._slbDnsServerSslSucc !== undefined) {
      hasAnyValues = true;
      internalValueResult.slbDnsServerSslSucc = this._slbDnsServerSslSucc;
    }
    if (this._slbDnsUdpConn !== undefined) {
      hasAnyValues = true;
      internalValueResult.slbDnsUdpConn = this._slbDnsUdpConn;
    }
    if (this._slbDnsUdpConnSucc !== undefined) {
      hasAnyValues = true;
      internalValueResult.slbDnsUdpConnSucc = this._slbDnsUdpConnSucc;
    }
    if (this._slbDnsUdpRetransmit !== undefined) {
      hasAnyValues = true;
      internalValueResult.slbDnsUdpRetransmit = this._slbDnsUdpRetransmit;
    }
    if (this._slbDnsUdpRetransmitFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.slbDnsUdpRetransmitFail = this._slbDnsUdpRetransmitFail;
    }
    if (this._totalDnsFilterClassDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalDnsFilterClassDrop = this._totalDnsFilterClassDrop;
    }
    if (this._totalDnsFilterTypeDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalDnsFilterTypeDrop = this._totalDnsFilterTypeDrop;
    }
    if (this._totalFilterDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalFilterDrop = this._totalFilterDrop;
    }
    if (this._totalMaxQueryLenDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalMaxQueryLenDrop = this._totalMaxQueryLenDrop;
    }
    if (this._totalMfDnsPkt !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalMfDnsPkt = this._totalMfDnsPkt;
    }
    if (this._totalMfDnsPktDetect !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalMfDnsPktDetect = this._totalMfDnsPktDetect;
    }
    if (this._typeAQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeAQuery = this._typeAQuery;
    }
    if (this._typeAaaaQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeAaaaQuery = this._typeAaaaQuery;
    }
    if (this._typeAnyQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeAnyQuery = this._typeAnyQuery;
    }
    if (this._typeAxfrQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeAxfrQuery = this._typeAxfrQuery;
    }
    if (this._typeCaaQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeCaaQuery = this._typeCaaQuery;
    }
    if (this._typeCertQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeCertQuery = this._typeCertQuery;
    }
    if (this._typeChainQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeChainQuery = this._typeChainQuery;
    }
    if (this._typeCnameQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeCnameQuery = this._typeCnameQuery;
    }
    if (this._typeCookieQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeCookieQuery = this._typeCookieQuery;
    }
    if (this._typeDauQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeDauQuery = this._typeDauQuery;
    }
    if (this._typeDnskeyQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeDnskeyQuery = this._typeDnskeyQuery;
    }
    if (this._typeDsQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeDsQuery = this._typeDsQuery;
    }
    if (this._typeExpireQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeExpireQuery = this._typeExpireQuery;
    }
    if (this._typeHttpsQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeHttpsQuery = this._typeHttpsQuery;
    }
    if (this._typeIxfrQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeIxfrQuery = this._typeIxfrQuery;
    }
    if (this._typeKeepaliveQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeKeepaliveQuery = this._typeKeepaliveQuery;
    }
    if (this._typeMxQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeMxQuery = this._typeMxQuery;
    }
    if (this._typeN3UQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeN3UQuery = this._typeN3UQuery;
    }
    if (this._typeNaptrQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeNaptrQuery = this._typeNaptrQuery;
    }
    if (this._typeNsQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeNsQuery = this._typeNsQuery;
    }
    if (this._typeNsidQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeNsidQuery = this._typeNsidQuery;
    }
    if (this._typeOtherQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeOtherQuery = this._typeOtherQuery;
    }
    if (this._typePaddingQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.typePaddingQuery = this._typePaddingQuery;
    }
    if (this._typePtrQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.typePtrQuery = this._typePtrQuery;
    }
    if (this._typeRrsigQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeRrsigQuery = this._typeRrsigQuery;
    }
    if (this._typeSoaQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeSoaQuery = this._typeSoaQuery;
    }
    if (this._typeSrvQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeSrvQuery = this._typeSrvQuery;
    }
    if (this._typeTsigQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeTsigQuery = this._typeTsigQuery;
    }
    if (this._typeTxtQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeTxtQuery = this._typeTxtQuery;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbVirtualServerPortStatsDnsVportStatsDnsVport | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dnsCacheHit = undefined;
      this._dnsCategoryActionDrop = undefined;
      this._dnsCategoryActionPermit = undefined;
      this._dnsCategoryActionRespond = undefined;
      this._dnsCategoryAsyncReceived = undefined;
      this._dnsCategoryAsyncSent = undefined;
      this._dnsCategoryBypass = undefined;
      this._dnsCategoryNoLocalResult = undefined;
      this._dnsCategoryRespA = undefined;
      this._dnsCategoryRespAaaa = undefined;
      this._dnsCategoryRespCname = undefined;
      this._dnsCategoryRespNoanswer = undefined;
      this._dnsCategoryRespNxdomain = undefined;
      this._dnsFilterClassAnyDrop = undefined;
      this._dnsFilterClassChaosDrop = undefined;
      this._dnsFilterClassHesiodDrop = undefined;
      this._dnsFilterClassInternetDrop = undefined;
      this._dnsFilterClassNoneDrop = undefined;
      this._dnsFilterClassOthersDrop = undefined;
      this._dnsFilterTldDrop = undefined;
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
      this._dnsFullResponseFromCache = undefined;
      this._dnsNegativeServed = undefined;
      this._dnsRecursiveResolutionBuffAllocFailed = undefined;
      this._dnsRecursiveResolutionFullResponse = undefined;
      this._dnsRecursiveResolutionIcmpErr = undefined;
      this._dnsRecursiveResolutionInvalidHints = undefined;
      this._dnsRecursiveResolutionLateAns = undefined;
      this._dnsRecursiveResolutionLookupIpProtoSwitch46 = undefined;
      this._dnsRecursiveResolutionLookupIpProtoSwitch64 = undefined;
      this._dnsRecursiveResolutionMaxTrialsExceeded = undefined;
      this._dnsRecursiveResolutionMissingGlue = undefined;
      this._dnsRecursiveResolutionNoHints = undefined;
      this._dnsRecursiveResolutionNoResolver = undefined;
      this._dnsRecursiveResolutionNotDplane = undefined;
      this._dnsRecursiveResolutionNsCacheHit = undefined;
      this._dnsRecursiveResolutionNsCacheMiss = undefined;
      this._dnsRecursiveResolutionOngoingClientRetransmit = undefined;
      this._dnsRecursiveResolutionPendingResolution = undefined;
      this._dnsRecursiveResolutionQueryDropped = undefined;
      this._dnsRecursiveResolutionQueryNotSent = undefined;
      this._dnsRecursiveResolutionReachMaxDepth = undefined;
      this._dnsRecursiveResolutionRequestSend = undefined;
      this._dnsRecursiveResolutionResCheckErr = undefined;
      this._dnsRecursiveResolutionResSubmitErr = undefined;
      this._dnsRecursiveResolutionRespTruncated = undefined;
      this._dnsRecursiveResolutionRespondWithServfail = undefined;
      this._dnsRecursiveResolutionResponseReceive = undefined;
      this._dnsRecursiveResolutionRetransmitExceeded = undefined;
      this._dnsRecursiveResolutionRetransmitSent = undefined;
      this._dnsRecursiveResolutionSendFailed = undefined;
      this._dnsRecursiveResolutionStarted = undefined;
      this._dnsRecursiveResolutionSucceeded = undefined;
      this._dnsRecursiveResolutionTcpConn = undefined;
      this._dnsRecursiveResolutionTcpConnErr = undefined;
      this._dnsRecursiveResolutionTimeout = undefined;
      this._dnsRecursiveResolutionTotalTrials1 = undefined;
      this._dnsRecursiveResolutionTotalTrials12 = undefined;
      this._dnsRecursiveResolutionTotalTrials128 = undefined;
      this._dnsRecursiveResolutionTotalTrials24 = undefined;
      this._dnsRecursiveResolutionTotalTrials3 = undefined;
      this._dnsRecursiveResolutionTotalTrials48 = undefined;
      this._dnsRecursiveResolutionTotalTrials6 = undefined;
      this._dnsRecursiveResolutionTotalTrials64 = undefined;
      this._dnsRecursiveResolutionTotalTrialsMax = undefined;
      this._dnsRecursiveResolutionUdpConn = undefined;
      this._dnsRecursiveResolutionUdpConnErr = undefined;
      this._dnsRecursiveResolutionUdpSendFailed = undefined;
      this._dnsRequestDrop = undefined;
      this._dnsRequestResponse = undefined;
      this._dnsRequestRexmit = undefined;
      this._dnsRequestSend = undefined;
      this._dnsRequestTimeout = undefined;
      this._dnsResponseDrop = undefined;
      this._dnsResponseSend = undefined;
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
      this._dnsRrDnssecReqReceived = undefined;
      this._dnsRrDnssecRespServed = undefined;
      this._dnsRrDnssecValAlgNotSupported = undefined;
      this._dnsRrDnssecValDgstNotSupported = undefined;
      this._dnsRrDnssecValDnskeyProtoErr = undefined;
      this._dnsRrDnssecValIncorrectKeyDgst = undefined;
      this._dnsRrDnssecValIncorrectSig = undefined;
      this._dnsRrDnssecValRrsetSizeExceedLimit = undefined;
      this._dnsRrDnssecValRrsigLabelsErr = undefined;
      this._dnsRrDnssecValRrsigNonValidityPeriod = undefined;
      this._dnsRrDnssecValRrsigSignerErr = undefined;
      this._dnsRrDnssecValWithTrustAnchorFailed = undefined;
      this._dnsRrDnssecValidationFailed = undefined;
      this._dnsTcpPipelineRequestDrop = undefined;
      this._dnsTotalDrop = undefined;
      this._dnsTotalRequest = undefined;
      this._dnsTotalResponse = undefined;
      this._dnsrrlBadFqdn = undefined;
      this._dnsrrlNxDrop = undefined;
      this._dnsrrlNxExceed = undefined;
      this._dnsrrlQpsDrop = undefined;
      this._dnsrrlTotalAllowed = undefined;
      this._dnsrrlTotalDropped = undefined;
      this._dnsrrlTotalSlipped = undefined;
      this._dnsrrlTotalTc = undefined;
      this._emptyResponse = undefined;
      this._gslbDrop = undefined;
      this._gslbQueryBad = undefined;
      this._gslbQueryDrop = undefined;
      this._gslbQueryFwd = undefined;
      this._gslbResponseBad = undefined;
      this._gslbResponseDrop = undefined;
      this._gslbResponseGood = undefined;
      this._gslbResponseRvs = undefined;
      this._rcodeBadalgReceive = undefined;
      this._rcodeBadalgResponse = undefined;
      this._rcodeBadcookieReceive = undefined;
      this._rcodeBadcookieResponse = undefined;
      this._rcodeBadkeyReceive = undefined;
      this._rcodeBadkeyResponse = undefined;
      this._rcodeBadmodeReceive = undefined;
      this._rcodeBadmodeResponse = undefined;
      this._rcodeBadnameReceive = undefined;
      this._rcodeBadnameResponse = undefined;
      this._rcodeBadtimeReceive = undefined;
      this._rcodeBadtimeResponse = undefined;
      this._rcodeBadtrancReceive = undefined;
      this._rcodeBadtrancResponse = undefined;
      this._rcodeBadverReceive = undefined;
      this._rcodeBadverResponse = undefined;
      this._rcodeDsotypenReceive = undefined;
      this._rcodeDsotypenResponse = undefined;
      this._rcodeFormerrReceive = undefined;
      this._rcodeFormerrResponse = undefined;
      this._rcodeNoerrorGenerate = undefined;
      this._rcodeNotauthReceive = undefined;
      this._rcodeNotauthResponse = undefined;
      this._rcodeNotimplReceive = undefined;
      this._rcodeNotimplResponse = undefined;
      this._rcodeNotzoneReceive = undefined;
      this._rcodeNxdomainReceive = undefined;
      this._rcodeNxdomainResponse = undefined;
      this._rcodeNxrrsetReceive = undefined;
      this._rcodeNxrrsetResponse = undefined;
      this._rcodeOtherReceive = undefined;
      this._rcodeOtherResponse = undefined;
      this._rcodeRefuseReceive = undefined;
      this._rcodeRefuseResponse = undefined;
      this._rcodeServerrReceive = undefined;
      this._rcodeServerrResponse = undefined;
      this._rcodeTsigBadkeyReceive = undefined;
      this._rcodeTsigBadsigReceive = undefined;
      this._rcodeTsigBadtimeReceive = undefined;
      this._rcodeTsigBadtruncReceive = undefined;
      this._rcodeYxdomainReceive = undefined;
      this._rcodeYxdomainResponse = undefined;
      this._rcodeYxrrsetReceive = undefined;
      this._rcodeYxrrsetResponse = undefined;
      this._slbDnsClientSslSucc = undefined;
      this._slbDnsEdnsEcsInserted = undefined;
      this._slbDnsEdnsEcsInsertionFail = undefined;
      this._slbDnsEdnsEcsReceived = undefined;
      this._slbDnsEdnsSubnetToServerRemoved = undefined;
      this._slbDnsPaddingToClientAdded = undefined;
      this._slbDnsPaddingToServerRemoved = undefined;
      this._slbDnsServerSslSucc = undefined;
      this._slbDnsUdpConn = undefined;
      this._slbDnsUdpConnSucc = undefined;
      this._slbDnsUdpRetransmit = undefined;
      this._slbDnsUdpRetransmitFail = undefined;
      this._totalDnsFilterClassDrop = undefined;
      this._totalDnsFilterTypeDrop = undefined;
      this._totalFilterDrop = undefined;
      this._totalMaxQueryLenDrop = undefined;
      this._totalMfDnsPkt = undefined;
      this._totalMfDnsPktDetect = undefined;
      this._typeAQuery = undefined;
      this._typeAaaaQuery = undefined;
      this._typeAnyQuery = undefined;
      this._typeAxfrQuery = undefined;
      this._typeCaaQuery = undefined;
      this._typeCertQuery = undefined;
      this._typeChainQuery = undefined;
      this._typeCnameQuery = undefined;
      this._typeCookieQuery = undefined;
      this._typeDauQuery = undefined;
      this._typeDnskeyQuery = undefined;
      this._typeDsQuery = undefined;
      this._typeExpireQuery = undefined;
      this._typeHttpsQuery = undefined;
      this._typeIxfrQuery = undefined;
      this._typeKeepaliveQuery = undefined;
      this._typeMxQuery = undefined;
      this._typeN3UQuery = undefined;
      this._typeNaptrQuery = undefined;
      this._typeNsQuery = undefined;
      this._typeNsidQuery = undefined;
      this._typeOtherQuery = undefined;
      this._typePaddingQuery = undefined;
      this._typePtrQuery = undefined;
      this._typeRrsigQuery = undefined;
      this._typeSoaQuery = undefined;
      this._typeSrvQuery = undefined;
      this._typeTsigQuery = undefined;
      this._typeTxtQuery = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dnsCacheHit = value.dnsCacheHit;
      this._dnsCategoryActionDrop = value.dnsCategoryActionDrop;
      this._dnsCategoryActionPermit = value.dnsCategoryActionPermit;
      this._dnsCategoryActionRespond = value.dnsCategoryActionRespond;
      this._dnsCategoryAsyncReceived = value.dnsCategoryAsyncReceived;
      this._dnsCategoryAsyncSent = value.dnsCategoryAsyncSent;
      this._dnsCategoryBypass = value.dnsCategoryBypass;
      this._dnsCategoryNoLocalResult = value.dnsCategoryNoLocalResult;
      this._dnsCategoryRespA = value.dnsCategoryRespA;
      this._dnsCategoryRespAaaa = value.dnsCategoryRespAaaa;
      this._dnsCategoryRespCname = value.dnsCategoryRespCname;
      this._dnsCategoryRespNoanswer = value.dnsCategoryRespNoanswer;
      this._dnsCategoryRespNxdomain = value.dnsCategoryRespNxdomain;
      this._dnsFilterClassAnyDrop = value.dnsFilterClassAnyDrop;
      this._dnsFilterClassChaosDrop = value.dnsFilterClassChaosDrop;
      this._dnsFilterClassHesiodDrop = value.dnsFilterClassHesiodDrop;
      this._dnsFilterClassInternetDrop = value.dnsFilterClassInternetDrop;
      this._dnsFilterClassNoneDrop = value.dnsFilterClassNoneDrop;
      this._dnsFilterClassOthersDrop = value.dnsFilterClassOthersDrop;
      this._dnsFilterTldDrop = value.dnsFilterTldDrop;
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
      this._dnsFullResponseFromCache = value.dnsFullResponseFromCache;
      this._dnsNegativeServed = value.dnsNegativeServed;
      this._dnsRecursiveResolutionBuffAllocFailed = value.dnsRecursiveResolutionBuffAllocFailed;
      this._dnsRecursiveResolutionFullResponse = value.dnsRecursiveResolutionFullResponse;
      this._dnsRecursiveResolutionIcmpErr = value.dnsRecursiveResolutionIcmpErr;
      this._dnsRecursiveResolutionInvalidHints = value.dnsRecursiveResolutionInvalidHints;
      this._dnsRecursiveResolutionLateAns = value.dnsRecursiveResolutionLateAns;
      this._dnsRecursiveResolutionLookupIpProtoSwitch46 = value.dnsRecursiveResolutionLookupIpProtoSwitch46;
      this._dnsRecursiveResolutionLookupIpProtoSwitch64 = value.dnsRecursiveResolutionLookupIpProtoSwitch64;
      this._dnsRecursiveResolutionMaxTrialsExceeded = value.dnsRecursiveResolutionMaxTrialsExceeded;
      this._dnsRecursiveResolutionMissingGlue = value.dnsRecursiveResolutionMissingGlue;
      this._dnsRecursiveResolutionNoHints = value.dnsRecursiveResolutionNoHints;
      this._dnsRecursiveResolutionNoResolver = value.dnsRecursiveResolutionNoResolver;
      this._dnsRecursiveResolutionNotDplane = value.dnsRecursiveResolutionNotDplane;
      this._dnsRecursiveResolutionNsCacheHit = value.dnsRecursiveResolutionNsCacheHit;
      this._dnsRecursiveResolutionNsCacheMiss = value.dnsRecursiveResolutionNsCacheMiss;
      this._dnsRecursiveResolutionOngoingClientRetransmit = value.dnsRecursiveResolutionOngoingClientRetransmit;
      this._dnsRecursiveResolutionPendingResolution = value.dnsRecursiveResolutionPendingResolution;
      this._dnsRecursiveResolutionQueryDropped = value.dnsRecursiveResolutionQueryDropped;
      this._dnsRecursiveResolutionQueryNotSent = value.dnsRecursiveResolutionQueryNotSent;
      this._dnsRecursiveResolutionReachMaxDepth = value.dnsRecursiveResolutionReachMaxDepth;
      this._dnsRecursiveResolutionRequestSend = value.dnsRecursiveResolutionRequestSend;
      this._dnsRecursiveResolutionResCheckErr = value.dnsRecursiveResolutionResCheckErr;
      this._dnsRecursiveResolutionResSubmitErr = value.dnsRecursiveResolutionResSubmitErr;
      this._dnsRecursiveResolutionRespTruncated = value.dnsRecursiveResolutionRespTruncated;
      this._dnsRecursiveResolutionRespondWithServfail = value.dnsRecursiveResolutionRespondWithServfail;
      this._dnsRecursiveResolutionResponseReceive = value.dnsRecursiveResolutionResponseReceive;
      this._dnsRecursiveResolutionRetransmitExceeded = value.dnsRecursiveResolutionRetransmitExceeded;
      this._dnsRecursiveResolutionRetransmitSent = value.dnsRecursiveResolutionRetransmitSent;
      this._dnsRecursiveResolutionSendFailed = value.dnsRecursiveResolutionSendFailed;
      this._dnsRecursiveResolutionStarted = value.dnsRecursiveResolutionStarted;
      this._dnsRecursiveResolutionSucceeded = value.dnsRecursiveResolutionSucceeded;
      this._dnsRecursiveResolutionTcpConn = value.dnsRecursiveResolutionTcpConn;
      this._dnsRecursiveResolutionTcpConnErr = value.dnsRecursiveResolutionTcpConnErr;
      this._dnsRecursiveResolutionTimeout = value.dnsRecursiveResolutionTimeout;
      this._dnsRecursiveResolutionTotalTrials1 = value.dnsRecursiveResolutionTotalTrials1;
      this._dnsRecursiveResolutionTotalTrials12 = value.dnsRecursiveResolutionTotalTrials12;
      this._dnsRecursiveResolutionTotalTrials128 = value.dnsRecursiveResolutionTotalTrials128;
      this._dnsRecursiveResolutionTotalTrials24 = value.dnsRecursiveResolutionTotalTrials24;
      this._dnsRecursiveResolutionTotalTrials3 = value.dnsRecursiveResolutionTotalTrials3;
      this._dnsRecursiveResolutionTotalTrials48 = value.dnsRecursiveResolutionTotalTrials48;
      this._dnsRecursiveResolutionTotalTrials6 = value.dnsRecursiveResolutionTotalTrials6;
      this._dnsRecursiveResolutionTotalTrials64 = value.dnsRecursiveResolutionTotalTrials64;
      this._dnsRecursiveResolutionTotalTrialsMax = value.dnsRecursiveResolutionTotalTrialsMax;
      this._dnsRecursiveResolutionUdpConn = value.dnsRecursiveResolutionUdpConn;
      this._dnsRecursiveResolutionUdpConnErr = value.dnsRecursiveResolutionUdpConnErr;
      this._dnsRecursiveResolutionUdpSendFailed = value.dnsRecursiveResolutionUdpSendFailed;
      this._dnsRequestDrop = value.dnsRequestDrop;
      this._dnsRequestResponse = value.dnsRequestResponse;
      this._dnsRequestRexmit = value.dnsRequestRexmit;
      this._dnsRequestSend = value.dnsRequestSend;
      this._dnsRequestTimeout = value.dnsRequestTimeout;
      this._dnsResponseDrop = value.dnsResponseDrop;
      this._dnsResponseSend = value.dnsResponseSend;
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
      this._dnsRrDnssecReqReceived = value.dnsRrDnssecReqReceived;
      this._dnsRrDnssecRespServed = value.dnsRrDnssecRespServed;
      this._dnsRrDnssecValAlgNotSupported = value.dnsRrDnssecValAlgNotSupported;
      this._dnsRrDnssecValDgstNotSupported = value.dnsRrDnssecValDgstNotSupported;
      this._dnsRrDnssecValDnskeyProtoErr = value.dnsRrDnssecValDnskeyProtoErr;
      this._dnsRrDnssecValIncorrectKeyDgst = value.dnsRrDnssecValIncorrectKeyDgst;
      this._dnsRrDnssecValIncorrectSig = value.dnsRrDnssecValIncorrectSig;
      this._dnsRrDnssecValRrsetSizeExceedLimit = value.dnsRrDnssecValRrsetSizeExceedLimit;
      this._dnsRrDnssecValRrsigLabelsErr = value.dnsRrDnssecValRrsigLabelsErr;
      this._dnsRrDnssecValRrsigNonValidityPeriod = value.dnsRrDnssecValRrsigNonValidityPeriod;
      this._dnsRrDnssecValRrsigSignerErr = value.dnsRrDnssecValRrsigSignerErr;
      this._dnsRrDnssecValWithTrustAnchorFailed = value.dnsRrDnssecValWithTrustAnchorFailed;
      this._dnsRrDnssecValidationFailed = value.dnsRrDnssecValidationFailed;
      this._dnsTcpPipelineRequestDrop = value.dnsTcpPipelineRequestDrop;
      this._dnsTotalDrop = value.dnsTotalDrop;
      this._dnsTotalRequest = value.dnsTotalRequest;
      this._dnsTotalResponse = value.dnsTotalResponse;
      this._dnsrrlBadFqdn = value.dnsrrlBadFqdn;
      this._dnsrrlNxDrop = value.dnsrrlNxDrop;
      this._dnsrrlNxExceed = value.dnsrrlNxExceed;
      this._dnsrrlQpsDrop = value.dnsrrlQpsDrop;
      this._dnsrrlTotalAllowed = value.dnsrrlTotalAllowed;
      this._dnsrrlTotalDropped = value.dnsrrlTotalDropped;
      this._dnsrrlTotalSlipped = value.dnsrrlTotalSlipped;
      this._dnsrrlTotalTc = value.dnsrrlTotalTc;
      this._emptyResponse = value.emptyResponse;
      this._gslbDrop = value.gslbDrop;
      this._gslbQueryBad = value.gslbQueryBad;
      this._gslbQueryDrop = value.gslbQueryDrop;
      this._gslbQueryFwd = value.gslbQueryFwd;
      this._gslbResponseBad = value.gslbResponseBad;
      this._gslbResponseDrop = value.gslbResponseDrop;
      this._gslbResponseGood = value.gslbResponseGood;
      this._gslbResponseRvs = value.gslbResponseRvs;
      this._rcodeBadalgReceive = value.rcodeBadalgReceive;
      this._rcodeBadalgResponse = value.rcodeBadalgResponse;
      this._rcodeBadcookieReceive = value.rcodeBadcookieReceive;
      this._rcodeBadcookieResponse = value.rcodeBadcookieResponse;
      this._rcodeBadkeyReceive = value.rcodeBadkeyReceive;
      this._rcodeBadkeyResponse = value.rcodeBadkeyResponse;
      this._rcodeBadmodeReceive = value.rcodeBadmodeReceive;
      this._rcodeBadmodeResponse = value.rcodeBadmodeResponse;
      this._rcodeBadnameReceive = value.rcodeBadnameReceive;
      this._rcodeBadnameResponse = value.rcodeBadnameResponse;
      this._rcodeBadtimeReceive = value.rcodeBadtimeReceive;
      this._rcodeBadtimeResponse = value.rcodeBadtimeResponse;
      this._rcodeBadtrancReceive = value.rcodeBadtrancReceive;
      this._rcodeBadtrancResponse = value.rcodeBadtrancResponse;
      this._rcodeBadverReceive = value.rcodeBadverReceive;
      this._rcodeBadverResponse = value.rcodeBadverResponse;
      this._rcodeDsotypenReceive = value.rcodeDsotypenReceive;
      this._rcodeDsotypenResponse = value.rcodeDsotypenResponse;
      this._rcodeFormerrReceive = value.rcodeFormerrReceive;
      this._rcodeFormerrResponse = value.rcodeFormerrResponse;
      this._rcodeNoerrorGenerate = value.rcodeNoerrorGenerate;
      this._rcodeNotauthReceive = value.rcodeNotauthReceive;
      this._rcodeNotauthResponse = value.rcodeNotauthResponse;
      this._rcodeNotimplReceive = value.rcodeNotimplReceive;
      this._rcodeNotimplResponse = value.rcodeNotimplResponse;
      this._rcodeNotzoneReceive = value.rcodeNotzoneReceive;
      this._rcodeNxdomainReceive = value.rcodeNxdomainReceive;
      this._rcodeNxdomainResponse = value.rcodeNxdomainResponse;
      this._rcodeNxrrsetReceive = value.rcodeNxrrsetReceive;
      this._rcodeNxrrsetResponse = value.rcodeNxrrsetResponse;
      this._rcodeOtherReceive = value.rcodeOtherReceive;
      this._rcodeOtherResponse = value.rcodeOtherResponse;
      this._rcodeRefuseReceive = value.rcodeRefuseReceive;
      this._rcodeRefuseResponse = value.rcodeRefuseResponse;
      this._rcodeServerrReceive = value.rcodeServerrReceive;
      this._rcodeServerrResponse = value.rcodeServerrResponse;
      this._rcodeTsigBadkeyReceive = value.rcodeTsigBadkeyReceive;
      this._rcodeTsigBadsigReceive = value.rcodeTsigBadsigReceive;
      this._rcodeTsigBadtimeReceive = value.rcodeTsigBadtimeReceive;
      this._rcodeTsigBadtruncReceive = value.rcodeTsigBadtruncReceive;
      this._rcodeYxdomainReceive = value.rcodeYxdomainReceive;
      this._rcodeYxdomainResponse = value.rcodeYxdomainResponse;
      this._rcodeYxrrsetReceive = value.rcodeYxrrsetReceive;
      this._rcodeYxrrsetResponse = value.rcodeYxrrsetResponse;
      this._slbDnsClientSslSucc = value.slbDnsClientSslSucc;
      this._slbDnsEdnsEcsInserted = value.slbDnsEdnsEcsInserted;
      this._slbDnsEdnsEcsInsertionFail = value.slbDnsEdnsEcsInsertionFail;
      this._slbDnsEdnsEcsReceived = value.slbDnsEdnsEcsReceived;
      this._slbDnsEdnsSubnetToServerRemoved = value.slbDnsEdnsSubnetToServerRemoved;
      this._slbDnsPaddingToClientAdded = value.slbDnsPaddingToClientAdded;
      this._slbDnsPaddingToServerRemoved = value.slbDnsPaddingToServerRemoved;
      this._slbDnsServerSslSucc = value.slbDnsServerSslSucc;
      this._slbDnsUdpConn = value.slbDnsUdpConn;
      this._slbDnsUdpConnSucc = value.slbDnsUdpConnSucc;
      this._slbDnsUdpRetransmit = value.slbDnsUdpRetransmit;
      this._slbDnsUdpRetransmitFail = value.slbDnsUdpRetransmitFail;
      this._totalDnsFilterClassDrop = value.totalDnsFilterClassDrop;
      this._totalDnsFilterTypeDrop = value.totalDnsFilterTypeDrop;
      this._totalFilterDrop = value.totalFilterDrop;
      this._totalMaxQueryLenDrop = value.totalMaxQueryLenDrop;
      this._totalMfDnsPkt = value.totalMfDnsPkt;
      this._totalMfDnsPktDetect = value.totalMfDnsPktDetect;
      this._typeAQuery = value.typeAQuery;
      this._typeAaaaQuery = value.typeAaaaQuery;
      this._typeAnyQuery = value.typeAnyQuery;
      this._typeAxfrQuery = value.typeAxfrQuery;
      this._typeCaaQuery = value.typeCaaQuery;
      this._typeCertQuery = value.typeCertQuery;
      this._typeChainQuery = value.typeChainQuery;
      this._typeCnameQuery = value.typeCnameQuery;
      this._typeCookieQuery = value.typeCookieQuery;
      this._typeDauQuery = value.typeDauQuery;
      this._typeDnskeyQuery = value.typeDnskeyQuery;
      this._typeDsQuery = value.typeDsQuery;
      this._typeExpireQuery = value.typeExpireQuery;
      this._typeHttpsQuery = value.typeHttpsQuery;
      this._typeIxfrQuery = value.typeIxfrQuery;
      this._typeKeepaliveQuery = value.typeKeepaliveQuery;
      this._typeMxQuery = value.typeMxQuery;
      this._typeN3UQuery = value.typeN3UQuery;
      this._typeNaptrQuery = value.typeNaptrQuery;
      this._typeNsQuery = value.typeNsQuery;
      this._typeNsidQuery = value.typeNsidQuery;
      this._typeOtherQuery = value.typeOtherQuery;
      this._typePaddingQuery = value.typePaddingQuery;
      this._typePtrQuery = value.typePtrQuery;
      this._typeRrsigQuery = value.typeRrsigQuery;
      this._typeSoaQuery = value.typeSoaQuery;
      this._typeSrvQuery = value.typeSrvQuery;
      this._typeTsigQuery = value.typeTsigQuery;
      this._typeTxtQuery = value.typeTxtQuery;
    }
  }

  // dns_cache_hit - computed: false, optional: true, required: false
  private _dnsCacheHit?: number; 
  public get dnsCacheHit() {
    return this.getNumberAttribute('dns_cache_hit');
  }
  public set dnsCacheHit(value: number) {
    this._dnsCacheHit = value;
  }
  public resetDnsCacheHit() {
    this._dnsCacheHit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsCacheHitInput() {
    return this._dnsCacheHit;
  }

  // dns_category_action_drop - computed: false, optional: true, required: false
  private _dnsCategoryActionDrop?: number; 
  public get dnsCategoryActionDrop() {
    return this.getNumberAttribute('dns_category_action_drop');
  }
  public set dnsCategoryActionDrop(value: number) {
    this._dnsCategoryActionDrop = value;
  }
  public resetDnsCategoryActionDrop() {
    this._dnsCategoryActionDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsCategoryActionDropInput() {
    return this._dnsCategoryActionDrop;
  }

  // dns_category_action_permit - computed: false, optional: true, required: false
  private _dnsCategoryActionPermit?: number; 
  public get dnsCategoryActionPermit() {
    return this.getNumberAttribute('dns_category_action_permit');
  }
  public set dnsCategoryActionPermit(value: number) {
    this._dnsCategoryActionPermit = value;
  }
  public resetDnsCategoryActionPermit() {
    this._dnsCategoryActionPermit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsCategoryActionPermitInput() {
    return this._dnsCategoryActionPermit;
  }

  // dns_category_action_respond - computed: false, optional: true, required: false
  private _dnsCategoryActionRespond?: number; 
  public get dnsCategoryActionRespond() {
    return this.getNumberAttribute('dns_category_action_respond');
  }
  public set dnsCategoryActionRespond(value: number) {
    this._dnsCategoryActionRespond = value;
  }
  public resetDnsCategoryActionRespond() {
    this._dnsCategoryActionRespond = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsCategoryActionRespondInput() {
    return this._dnsCategoryActionRespond;
  }

  // dns_category_async_received - computed: false, optional: true, required: false
  private _dnsCategoryAsyncReceived?: number; 
  public get dnsCategoryAsyncReceived() {
    return this.getNumberAttribute('dns_category_async_received');
  }
  public set dnsCategoryAsyncReceived(value: number) {
    this._dnsCategoryAsyncReceived = value;
  }
  public resetDnsCategoryAsyncReceived() {
    this._dnsCategoryAsyncReceived = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsCategoryAsyncReceivedInput() {
    return this._dnsCategoryAsyncReceived;
  }

  // dns_category_async_sent - computed: false, optional: true, required: false
  private _dnsCategoryAsyncSent?: number; 
  public get dnsCategoryAsyncSent() {
    return this.getNumberAttribute('dns_category_async_sent');
  }
  public set dnsCategoryAsyncSent(value: number) {
    this._dnsCategoryAsyncSent = value;
  }
  public resetDnsCategoryAsyncSent() {
    this._dnsCategoryAsyncSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsCategoryAsyncSentInput() {
    return this._dnsCategoryAsyncSent;
  }

  // dns_category_bypass - computed: false, optional: true, required: false
  private _dnsCategoryBypass?: number; 
  public get dnsCategoryBypass() {
    return this.getNumberAttribute('dns_category_bypass');
  }
  public set dnsCategoryBypass(value: number) {
    this._dnsCategoryBypass = value;
  }
  public resetDnsCategoryBypass() {
    this._dnsCategoryBypass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsCategoryBypassInput() {
    return this._dnsCategoryBypass;
  }

  // dns_category_no_local_result - computed: false, optional: true, required: false
  private _dnsCategoryNoLocalResult?: number; 
  public get dnsCategoryNoLocalResult() {
    return this.getNumberAttribute('dns_category_no_local_result');
  }
  public set dnsCategoryNoLocalResult(value: number) {
    this._dnsCategoryNoLocalResult = value;
  }
  public resetDnsCategoryNoLocalResult() {
    this._dnsCategoryNoLocalResult = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsCategoryNoLocalResultInput() {
    return this._dnsCategoryNoLocalResult;
  }

  // dns_category_resp_a - computed: false, optional: true, required: false
  private _dnsCategoryRespA?: number; 
  public get dnsCategoryRespA() {
    return this.getNumberAttribute('dns_category_resp_a');
  }
  public set dnsCategoryRespA(value: number) {
    this._dnsCategoryRespA = value;
  }
  public resetDnsCategoryRespA() {
    this._dnsCategoryRespA = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsCategoryRespAInput() {
    return this._dnsCategoryRespA;
  }

  // dns_category_resp_aaaa - computed: false, optional: true, required: false
  private _dnsCategoryRespAaaa?: number; 
  public get dnsCategoryRespAaaa() {
    return this.getNumberAttribute('dns_category_resp_aaaa');
  }
  public set dnsCategoryRespAaaa(value: number) {
    this._dnsCategoryRespAaaa = value;
  }
  public resetDnsCategoryRespAaaa() {
    this._dnsCategoryRespAaaa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsCategoryRespAaaaInput() {
    return this._dnsCategoryRespAaaa;
  }

  // dns_category_resp_cname - computed: false, optional: true, required: false
  private _dnsCategoryRespCname?: number; 
  public get dnsCategoryRespCname() {
    return this.getNumberAttribute('dns_category_resp_cname');
  }
  public set dnsCategoryRespCname(value: number) {
    this._dnsCategoryRespCname = value;
  }
  public resetDnsCategoryRespCname() {
    this._dnsCategoryRespCname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsCategoryRespCnameInput() {
    return this._dnsCategoryRespCname;
  }

  // dns_category_resp_noanswer - computed: false, optional: true, required: false
  private _dnsCategoryRespNoanswer?: number; 
  public get dnsCategoryRespNoanswer() {
    return this.getNumberAttribute('dns_category_resp_noanswer');
  }
  public set dnsCategoryRespNoanswer(value: number) {
    this._dnsCategoryRespNoanswer = value;
  }
  public resetDnsCategoryRespNoanswer() {
    this._dnsCategoryRespNoanswer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsCategoryRespNoanswerInput() {
    return this._dnsCategoryRespNoanswer;
  }

  // dns_category_resp_nxdomain - computed: false, optional: true, required: false
  private _dnsCategoryRespNxdomain?: number; 
  public get dnsCategoryRespNxdomain() {
    return this.getNumberAttribute('dns_category_resp_nxdomain');
  }
  public set dnsCategoryRespNxdomain(value: number) {
    this._dnsCategoryRespNxdomain = value;
  }
  public resetDnsCategoryRespNxdomain() {
    this._dnsCategoryRespNxdomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsCategoryRespNxdomainInput() {
    return this._dnsCategoryRespNxdomain;
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

  // dns_filter_tld_drop - computed: false, optional: true, required: false
  private _dnsFilterTldDrop?: number; 
  public get dnsFilterTldDrop() {
    return this.getNumberAttribute('dns_filter_tld_drop');
  }
  public set dnsFilterTldDrop(value: number) {
    this._dnsFilterTldDrop = value;
  }
  public resetDnsFilterTldDrop() {
    this._dnsFilterTldDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsFilterTldDropInput() {
    return this._dnsFilterTldDrop;
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

  // dns_full_response_from_cache - computed: false, optional: true, required: false
  private _dnsFullResponseFromCache?: number; 
  public get dnsFullResponseFromCache() {
    return this.getNumberAttribute('dns_full_response_from_cache');
  }
  public set dnsFullResponseFromCache(value: number) {
    this._dnsFullResponseFromCache = value;
  }
  public resetDnsFullResponseFromCache() {
    this._dnsFullResponseFromCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsFullResponseFromCacheInput() {
    return this._dnsFullResponseFromCache;
  }

  // dns_negative_served - computed: false, optional: true, required: false
  private _dnsNegativeServed?: number; 
  public get dnsNegativeServed() {
    return this.getNumberAttribute('dns_negative_served');
  }
  public set dnsNegativeServed(value: number) {
    this._dnsNegativeServed = value;
  }
  public resetDnsNegativeServed() {
    this._dnsNegativeServed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsNegativeServedInput() {
    return this._dnsNegativeServed;
  }

  // dns_recursive_resolution_buff_alloc_failed - computed: false, optional: true, required: false
  private _dnsRecursiveResolutionBuffAllocFailed?: number; 
  public get dnsRecursiveResolutionBuffAllocFailed() {
    return this.getNumberAttribute('dns_recursive_resolution_buff_alloc_failed');
  }
  public set dnsRecursiveResolutionBuffAllocFailed(value: number) {
    this._dnsRecursiveResolutionBuffAllocFailed = value;
  }
  public resetDnsRecursiveResolutionBuffAllocFailed() {
    this._dnsRecursiveResolutionBuffAllocFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsRecursiveResolutionBuffAllocFailedInput() {
    return this._dnsRecursiveResolutionBuffAllocFailed;
  }

  // dns_recursive_resolution_full_response - computed: false, optional: true, required: false
  private _dnsRecursiveResolutionFullResponse?: number; 
  public get dnsRecursiveResolutionFullResponse() {
    return this.getNumberAttribute('dns_recursive_resolution_full_response');
  }
  public set dnsRecursiveResolutionFullResponse(value: number) {
    this._dnsRecursiveResolutionFullResponse = value;
  }
  public resetDnsRecursiveResolutionFullResponse() {
    this._dnsRecursiveResolutionFullResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsRecursiveResolutionFullResponseInput() {
    return this._dnsRecursiveResolutionFullResponse;
  }

  // dns_recursive_resolution_icmp_err - computed: false, optional: true, required: false
  private _dnsRecursiveResolutionIcmpErr?: number; 
  public get dnsRecursiveResolutionIcmpErr() {
    return this.getNumberAttribute('dns_recursive_resolution_icmp_err');
  }
  public set dnsRecursiveResolutionIcmpErr(value: number) {
    this._dnsRecursiveResolutionIcmpErr = value;
  }
  public resetDnsRecursiveResolutionIcmpErr() {
    this._dnsRecursiveResolutionIcmpErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsRecursiveResolutionIcmpErrInput() {
    return this._dnsRecursiveResolutionIcmpErr;
  }

  // dns_recursive_resolution_invalid_hints - computed: false, optional: true, required: false
  private _dnsRecursiveResolutionInvalidHints?: number; 
  public get dnsRecursiveResolutionInvalidHints() {
    return this.getNumberAttribute('dns_recursive_resolution_invalid_hints');
  }
  public set dnsRecursiveResolutionInvalidHints(value: number) {
    this._dnsRecursiveResolutionInvalidHints = value;
  }
  public resetDnsRecursiveResolutionInvalidHints() {
    this._dnsRecursiveResolutionInvalidHints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsRecursiveResolutionInvalidHintsInput() {
    return this._dnsRecursiveResolutionInvalidHints;
  }

  // dns_recursive_resolution_late_ans - computed: false, optional: true, required: false
  private _dnsRecursiveResolutionLateAns?: number; 
  public get dnsRecursiveResolutionLateAns() {
    return this.getNumberAttribute('dns_recursive_resolution_late_ans');
  }
  public set dnsRecursiveResolutionLateAns(value: number) {
    this._dnsRecursiveResolutionLateAns = value;
  }
  public resetDnsRecursiveResolutionLateAns() {
    this._dnsRecursiveResolutionLateAns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsRecursiveResolutionLateAnsInput() {
    return this._dnsRecursiveResolutionLateAns;
  }

  // dns_recursive_resolution_lookup_ip_proto_switch_46 - computed: false, optional: true, required: false
  private _dnsRecursiveResolutionLookupIpProtoSwitch46?: number; 
  public get dnsRecursiveResolutionLookupIpProtoSwitch46() {
    return this.getNumberAttribute('dns_recursive_resolution_lookup_ip_proto_switch_46');
  }
  public set dnsRecursiveResolutionLookupIpProtoSwitch46(value: number) {
    this._dnsRecursiveResolutionLookupIpProtoSwitch46 = value;
  }
  public resetDnsRecursiveResolutionLookupIpProtoSwitch46() {
    this._dnsRecursiveResolutionLookupIpProtoSwitch46 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsRecursiveResolutionLookupIpProtoSwitch46Input() {
    return this._dnsRecursiveResolutionLookupIpProtoSwitch46;
  }

  // dns_recursive_resolution_lookup_ip_proto_switch_64 - computed: false, optional: true, required: false
  private _dnsRecursiveResolutionLookupIpProtoSwitch64?: number; 
  public get dnsRecursiveResolutionLookupIpProtoSwitch64() {
    return this.getNumberAttribute('dns_recursive_resolution_lookup_ip_proto_switch_64');
  }
  public set dnsRecursiveResolutionLookupIpProtoSwitch64(value: number) {
    this._dnsRecursiveResolutionLookupIpProtoSwitch64 = value;
  }
  public resetDnsRecursiveResolutionLookupIpProtoSwitch64() {
    this._dnsRecursiveResolutionLookupIpProtoSwitch64 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsRecursiveResolutionLookupIpProtoSwitch64Input() {
    return this._dnsRecursiveResolutionLookupIpProtoSwitch64;
  }

  // dns_recursive_resolution_max_trials_exceeded - computed: false, optional: true, required: false
  private _dnsRecursiveResolutionMaxTrialsExceeded?: number; 
  public get dnsRecursiveResolutionMaxTrialsExceeded() {
    return this.getNumberAttribute('dns_recursive_resolution_max_trials_exceeded');
  }
  public set dnsRecursiveResolutionMaxTrialsExceeded(value: number) {
    this._dnsRecursiveResolutionMaxTrialsExceeded = value;
  }
  public resetDnsRecursiveResolutionMaxTrialsExceeded() {
    this._dnsRecursiveResolutionMaxTrialsExceeded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsRecursiveResolutionMaxTrialsExceededInput() {
    return this._dnsRecursiveResolutionMaxTrialsExceeded;
  }

  // dns_recursive_resolution_missing_glue - computed: false, optional: true, required: false
  private _dnsRecursiveResolutionMissingGlue?: number; 
  public get dnsRecursiveResolutionMissingGlue() {
    return this.getNumberAttribute('dns_recursive_resolution_missing_glue');
  }
  public set dnsRecursiveResolutionMissingGlue(value: number) {
    this._dnsRecursiveResolutionMissingGlue = value;
  }
  public resetDnsRecursiveResolutionMissingGlue() {
    this._dnsRecursiveResolutionMissingGlue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsRecursiveResolutionMissingGlueInput() {
    return this._dnsRecursiveResolutionMissingGlue;
  }

  // dns_recursive_resolution_no_hints - computed: false, optional: true, required: false
  private _dnsRecursiveResolutionNoHints?: number; 
  public get dnsRecursiveResolutionNoHints() {
    return this.getNumberAttribute('dns_recursive_resolution_no_hints');
  }
  public set dnsRecursiveResolutionNoHints(value: number) {
    this._dnsRecursiveResolutionNoHints = value;
  }
  public resetDnsRecursiveResolutionNoHints() {
    this._dnsRecursiveResolutionNoHints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsRecursiveResolutionNoHintsInput() {
    return this._dnsRecursiveResolutionNoHints;
  }

  // dns_recursive_resolution_no_resolver - computed: false, optional: true, required: false
  private _dnsRecursiveResolutionNoResolver?: number; 
  public get dnsRecursiveResolutionNoResolver() {
    return this.getNumberAttribute('dns_recursive_resolution_no_resolver');
  }
  public set dnsRecursiveResolutionNoResolver(value: number) {
    this._dnsRecursiveResolutionNoResolver = value;
  }
  public resetDnsRecursiveResolutionNoResolver() {
    this._dnsRecursiveResolutionNoResolver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsRecursiveResolutionNoResolverInput() {
    return this._dnsRecursiveResolutionNoResolver;
  }

  // dns_recursive_resolution_not_dplane - computed: false, optional: true, required: false
  private _dnsRecursiveResolutionNotDplane?: number; 
  public get dnsRecursiveResolutionNotDplane() {
    return this.getNumberAttribute('dns_recursive_resolution_not_dplane');
  }
  public set dnsRecursiveResolutionNotDplane(value: number) {
    this._dnsRecursiveResolutionNotDplane = value;
  }
  public resetDnsRecursiveResolutionNotDplane() {
    this._dnsRecursiveResolutionNotDplane = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsRecursiveResolutionNotDplaneInput() {
    return this._dnsRecursiveResolutionNotDplane;
  }

  // dns_recursive_resolution_ns_cache_hit - computed: false, optional: true, required: false
  private _dnsRecursiveResolutionNsCacheHit?: number; 
  public get dnsRecursiveResolutionNsCacheHit() {
    return this.getNumberAttribute('dns_recursive_resolution_ns_cache_hit');
  }
  public set dnsRecursiveResolutionNsCacheHit(value: number) {
    this._dnsRecursiveResolutionNsCacheHit = value;
  }
  public resetDnsRecursiveResolutionNsCacheHit() {
    this._dnsRecursiveResolutionNsCacheHit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsRecursiveResolutionNsCacheHitInput() {
    return this._dnsRecursiveResolutionNsCacheHit;
  }

  // dns_recursive_resolution_ns_cache_miss - computed: false, optional: true, required: false
  private _dnsRecursiveResolutionNsCacheMiss?: number; 
  public get dnsRecursiveResolutionNsCacheMiss() {
    return this.getNumberAttribute('dns_recursive_resolution_ns_cache_miss');
  }
  public set dnsRecursiveResolutionNsCacheMiss(value: number) {
    this._dnsRecursiveResolutionNsCacheMiss = value;
  }
  public resetDnsRecursiveResolutionNsCacheMiss() {
    this._dnsRecursiveResolutionNsCacheMiss = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsRecursiveResolutionNsCacheMissInput() {
    return this._dnsRecursiveResolutionNsCacheMiss;
  }

  // dns_recursive_resolution_ongoing_client_retransmit - computed: false, optional: true, required: false
  private _dnsRecursiveResolutionOngoingClientRetransmit?: number; 
  public get dnsRecursiveResolutionOngoingClientRetransmit() {
    return this.getNumberAttribute('dns_recursive_resolution_ongoing_client_retransmit');
  }
  public set dnsRecursiveResolutionOngoingClientRetransmit(value: number) {
    this._dnsRecursiveResolutionOngoingClientRetransmit = value;
  }
  public resetDnsRecursiveResolutionOngoingClientRetransmit() {
    this._dnsRecursiveResolutionOngoingClientRetransmit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsRecursiveResolutionOngoingClientRetransmitInput() {
    return this._dnsRecursiveResolutionOngoingClientRetransmit;
  }

  // dns_recursive_resolution_pending_resolution - computed: false, optional: true, required: false
  private _dnsRecursiveResolutionPendingResolution?: number; 
  public get dnsRecursiveResolutionPendingResolution() {
    return this.getNumberAttribute('dns_recursive_resolution_pending_resolution');
  }
  public set dnsRecursiveResolutionPendingResolution(value: number) {
    this._dnsRecursiveResolutionPendingResolution = value;
  }
  public resetDnsRecursiveResolutionPendingResolution() {
    this._dnsRecursiveResolutionPendingResolution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsRecursiveResolutionPendingResolutionInput() {
    return this._dnsRecursiveResolutionPendingResolution;
  }

  // dns_recursive_resolution_query_dropped - computed: false, optional: true, required: false
  private _dnsRecursiveResolutionQueryDropped?: number; 
  public get dnsRecursiveResolutionQueryDropped() {
    return this.getNumberAttribute('dns_recursive_resolution_query_dropped');
  }
  public set dnsRecursiveResolutionQueryDropped(value: number) {
    this._dnsRecursiveResolutionQueryDropped = value;
  }
  public resetDnsRecursiveResolutionQueryDropped() {
    this._dnsRecursiveResolutionQueryDropped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsRecursiveResolutionQueryDroppedInput() {
    return this._dnsRecursiveResolutionQueryDropped;
  }

  // dns_recursive_resolution_query_not_sent - computed: false, optional: true, required: false
  private _dnsRecursiveResolutionQueryNotSent?: number; 
  public get dnsRecursiveResolutionQueryNotSent() {
    return this.getNumberAttribute('dns_recursive_resolution_query_not_sent');
  }
  public set dnsRecursiveResolutionQueryNotSent(value: number) {
    this._dnsRecursiveResolutionQueryNotSent = value;
  }
  public resetDnsRecursiveResolutionQueryNotSent() {
    this._dnsRecursiveResolutionQueryNotSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsRecursiveResolutionQueryNotSentInput() {
    return this._dnsRecursiveResolutionQueryNotSent;
  }

  // dns_recursive_resolution_reach_max_depth - computed: false, optional: true, required: false
  private _dnsRecursiveResolutionReachMaxDepth?: number; 
  public get dnsRecursiveResolutionReachMaxDepth() {
    return this.getNumberAttribute('dns_recursive_resolution_reach_max_depth');
  }
  public set dnsRecursiveResolutionReachMaxDepth(value: number) {
    this._dnsRecursiveResolutionReachMaxDepth = value;
  }
  public resetDnsRecursiveResolutionReachMaxDepth() {
    this._dnsRecursiveResolutionReachMaxDepth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsRecursiveResolutionReachMaxDepthInput() {
    return this._dnsRecursiveResolutionReachMaxDepth;
  }

  // dns_recursive_resolution_request_send - computed: false, optional: true, required: false
  private _dnsRecursiveResolutionRequestSend?: number; 
  public get dnsRecursiveResolutionRequestSend() {
    return this.getNumberAttribute('dns_recursive_resolution_request_send');
  }
  public set dnsRecursiveResolutionRequestSend(value: number) {
    this._dnsRecursiveResolutionRequestSend = value;
  }
  public resetDnsRecursiveResolutionRequestSend() {
    this._dnsRecursiveResolutionRequestSend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsRecursiveResolutionRequestSendInput() {
    return this._dnsRecursiveResolutionRequestSend;
  }

  // dns_recursive_resolution_res_check_err - computed: false, optional: true, required: false
  private _dnsRecursiveResolutionResCheckErr?: number; 
  public get dnsRecursiveResolutionResCheckErr() {
    return this.getNumberAttribute('dns_recursive_resolution_res_check_err');
  }
  public set dnsRecursiveResolutionResCheckErr(value: number) {
    this._dnsRecursiveResolutionResCheckErr = value;
  }
  public resetDnsRecursiveResolutionResCheckErr() {
    this._dnsRecursiveResolutionResCheckErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsRecursiveResolutionResCheckErrInput() {
    return this._dnsRecursiveResolutionResCheckErr;
  }

  // dns_recursive_resolution_res_submit_err - computed: false, optional: true, required: false
  private _dnsRecursiveResolutionResSubmitErr?: number; 
  public get dnsRecursiveResolutionResSubmitErr() {
    return this.getNumberAttribute('dns_recursive_resolution_res_submit_err');
  }
  public set dnsRecursiveResolutionResSubmitErr(value: number) {
    this._dnsRecursiveResolutionResSubmitErr = value;
  }
  public resetDnsRecursiveResolutionResSubmitErr() {
    this._dnsRecursiveResolutionResSubmitErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsRecursiveResolutionResSubmitErrInput() {
    return this._dnsRecursiveResolutionResSubmitErr;
  }

  // dns_recursive_resolution_resp_truncated - computed: false, optional: true, required: false
  private _dnsRecursiveResolutionRespTruncated?: number; 
  public get dnsRecursiveResolutionRespTruncated() {
    return this.getNumberAttribute('dns_recursive_resolution_resp_truncated');
  }
  public set dnsRecursiveResolutionRespTruncated(value: number) {
    this._dnsRecursiveResolutionRespTruncated = value;
  }
  public resetDnsRecursiveResolutionRespTruncated() {
    this._dnsRecursiveResolutionRespTruncated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsRecursiveResolutionRespTruncatedInput() {
    return this._dnsRecursiveResolutionRespTruncated;
  }

  // dns_recursive_resolution_respond_with_servfail - computed: false, optional: true, required: false
  private _dnsRecursiveResolutionRespondWithServfail?: number; 
  public get dnsRecursiveResolutionRespondWithServfail() {
    return this.getNumberAttribute('dns_recursive_resolution_respond_with_servfail');
  }
  public set dnsRecursiveResolutionRespondWithServfail(value: number) {
    this._dnsRecursiveResolutionRespondWithServfail = value;
  }
  public resetDnsRecursiveResolutionRespondWithServfail() {
    this._dnsRecursiveResolutionRespondWithServfail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsRecursiveResolutionRespondWithServfailInput() {
    return this._dnsRecursiveResolutionRespondWithServfail;
  }

  // dns_recursive_resolution_response_receive - computed: false, optional: true, required: false
  private _dnsRecursiveResolutionResponseReceive?: number; 
  public get dnsRecursiveResolutionResponseReceive() {
    return this.getNumberAttribute('dns_recursive_resolution_response_receive');
  }
  public set dnsRecursiveResolutionResponseReceive(value: number) {
    this._dnsRecursiveResolutionResponseReceive = value;
  }
  public resetDnsRecursiveResolutionResponseReceive() {
    this._dnsRecursiveResolutionResponseReceive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsRecursiveResolutionResponseReceiveInput() {
    return this._dnsRecursiveResolutionResponseReceive;
  }

  // dns_recursive_resolution_retransmit_exceeded - computed: false, optional: true, required: false
  private _dnsRecursiveResolutionRetransmitExceeded?: number; 
  public get dnsRecursiveResolutionRetransmitExceeded() {
    return this.getNumberAttribute('dns_recursive_resolution_retransmit_exceeded');
  }
  public set dnsRecursiveResolutionRetransmitExceeded(value: number) {
    this._dnsRecursiveResolutionRetransmitExceeded = value;
  }
  public resetDnsRecursiveResolutionRetransmitExceeded() {
    this._dnsRecursiveResolutionRetransmitExceeded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsRecursiveResolutionRetransmitExceededInput() {
    return this._dnsRecursiveResolutionRetransmitExceeded;
  }

  // dns_recursive_resolution_retransmit_sent - computed: false, optional: true, required: false
  private _dnsRecursiveResolutionRetransmitSent?: number; 
  public get dnsRecursiveResolutionRetransmitSent() {
    return this.getNumberAttribute('dns_recursive_resolution_retransmit_sent');
  }
  public set dnsRecursiveResolutionRetransmitSent(value: number) {
    this._dnsRecursiveResolutionRetransmitSent = value;
  }
  public resetDnsRecursiveResolutionRetransmitSent() {
    this._dnsRecursiveResolutionRetransmitSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsRecursiveResolutionRetransmitSentInput() {
    return this._dnsRecursiveResolutionRetransmitSent;
  }

  // dns_recursive_resolution_send_failed - computed: false, optional: true, required: false
  private _dnsRecursiveResolutionSendFailed?: number; 
  public get dnsRecursiveResolutionSendFailed() {
    return this.getNumberAttribute('dns_recursive_resolution_send_failed');
  }
  public set dnsRecursiveResolutionSendFailed(value: number) {
    this._dnsRecursiveResolutionSendFailed = value;
  }
  public resetDnsRecursiveResolutionSendFailed() {
    this._dnsRecursiveResolutionSendFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsRecursiveResolutionSendFailedInput() {
    return this._dnsRecursiveResolutionSendFailed;
  }

  // dns_recursive_resolution_started - computed: false, optional: true, required: false
  private _dnsRecursiveResolutionStarted?: number; 
  public get dnsRecursiveResolutionStarted() {
    return this.getNumberAttribute('dns_recursive_resolution_started');
  }
  public set dnsRecursiveResolutionStarted(value: number) {
    this._dnsRecursiveResolutionStarted = value;
  }
  public resetDnsRecursiveResolutionStarted() {
    this._dnsRecursiveResolutionStarted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsRecursiveResolutionStartedInput() {
    return this._dnsRecursiveResolutionStarted;
  }

  // dns_recursive_resolution_succeeded - computed: false, optional: true, required: false
  private _dnsRecursiveResolutionSucceeded?: number; 
  public get dnsRecursiveResolutionSucceeded() {
    return this.getNumberAttribute('dns_recursive_resolution_succeeded');
  }
  public set dnsRecursiveResolutionSucceeded(value: number) {
    this._dnsRecursiveResolutionSucceeded = value;
  }
  public resetDnsRecursiveResolutionSucceeded() {
    this._dnsRecursiveResolutionSucceeded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsRecursiveResolutionSucceededInput() {
    return this._dnsRecursiveResolutionSucceeded;
  }

  // dns_recursive_resolution_tcp_conn - computed: false, optional: true, required: false
  private _dnsRecursiveResolutionTcpConn?: number; 
  public get dnsRecursiveResolutionTcpConn() {
    return this.getNumberAttribute('dns_recursive_resolution_tcp_conn');
  }
  public set dnsRecursiveResolutionTcpConn(value: number) {
    this._dnsRecursiveResolutionTcpConn = value;
  }
  public resetDnsRecursiveResolutionTcpConn() {
    this._dnsRecursiveResolutionTcpConn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsRecursiveResolutionTcpConnInput() {
    return this._dnsRecursiveResolutionTcpConn;
  }

  // dns_recursive_resolution_tcp_conn_err - computed: false, optional: true, required: false
  private _dnsRecursiveResolutionTcpConnErr?: number; 
  public get dnsRecursiveResolutionTcpConnErr() {
    return this.getNumberAttribute('dns_recursive_resolution_tcp_conn_err');
  }
  public set dnsRecursiveResolutionTcpConnErr(value: number) {
    this._dnsRecursiveResolutionTcpConnErr = value;
  }
  public resetDnsRecursiveResolutionTcpConnErr() {
    this._dnsRecursiveResolutionTcpConnErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsRecursiveResolutionTcpConnErrInput() {
    return this._dnsRecursiveResolutionTcpConnErr;
  }

  // dns_recursive_resolution_timeout - computed: false, optional: true, required: false
  private _dnsRecursiveResolutionTimeout?: number; 
  public get dnsRecursiveResolutionTimeout() {
    return this.getNumberAttribute('dns_recursive_resolution_timeout');
  }
  public set dnsRecursiveResolutionTimeout(value: number) {
    this._dnsRecursiveResolutionTimeout = value;
  }
  public resetDnsRecursiveResolutionTimeout() {
    this._dnsRecursiveResolutionTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsRecursiveResolutionTimeoutInput() {
    return this._dnsRecursiveResolutionTimeout;
  }

  // dns_recursive_resolution_total_trials_1 - computed: false, optional: true, required: false
  private _dnsRecursiveResolutionTotalTrials1?: number; 
  public get dnsRecursiveResolutionTotalTrials1() {
    return this.getNumberAttribute('dns_recursive_resolution_total_trials_1');
  }
  public set dnsRecursiveResolutionTotalTrials1(value: number) {
    this._dnsRecursiveResolutionTotalTrials1 = value;
  }
  public resetDnsRecursiveResolutionTotalTrials1() {
    this._dnsRecursiveResolutionTotalTrials1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsRecursiveResolutionTotalTrials1Input() {
    return this._dnsRecursiveResolutionTotalTrials1;
  }

  // dns_recursive_resolution_total_trials_12 - computed: false, optional: true, required: false
  private _dnsRecursiveResolutionTotalTrials12?: number; 
  public get dnsRecursiveResolutionTotalTrials12() {
    return this.getNumberAttribute('dns_recursive_resolution_total_trials_12');
  }
  public set dnsRecursiveResolutionTotalTrials12(value: number) {
    this._dnsRecursiveResolutionTotalTrials12 = value;
  }
  public resetDnsRecursiveResolutionTotalTrials12() {
    this._dnsRecursiveResolutionTotalTrials12 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsRecursiveResolutionTotalTrials12Input() {
    return this._dnsRecursiveResolutionTotalTrials12;
  }

  // dns_recursive_resolution_total_trials_128 - computed: false, optional: true, required: false
  private _dnsRecursiveResolutionTotalTrials128?: number; 
  public get dnsRecursiveResolutionTotalTrials128() {
    return this.getNumberAttribute('dns_recursive_resolution_total_trials_128');
  }
  public set dnsRecursiveResolutionTotalTrials128(value: number) {
    this._dnsRecursiveResolutionTotalTrials128 = value;
  }
  public resetDnsRecursiveResolutionTotalTrials128() {
    this._dnsRecursiveResolutionTotalTrials128 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsRecursiveResolutionTotalTrials128Input() {
    return this._dnsRecursiveResolutionTotalTrials128;
  }

  // dns_recursive_resolution_total_trials_24 - computed: false, optional: true, required: false
  private _dnsRecursiveResolutionTotalTrials24?: number; 
  public get dnsRecursiveResolutionTotalTrials24() {
    return this.getNumberAttribute('dns_recursive_resolution_total_trials_24');
  }
  public set dnsRecursiveResolutionTotalTrials24(value: number) {
    this._dnsRecursiveResolutionTotalTrials24 = value;
  }
  public resetDnsRecursiveResolutionTotalTrials24() {
    this._dnsRecursiveResolutionTotalTrials24 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsRecursiveResolutionTotalTrials24Input() {
    return this._dnsRecursiveResolutionTotalTrials24;
  }

  // dns_recursive_resolution_total_trials_3 - computed: false, optional: true, required: false
  private _dnsRecursiveResolutionTotalTrials3?: number; 
  public get dnsRecursiveResolutionTotalTrials3() {
    return this.getNumberAttribute('dns_recursive_resolution_total_trials_3');
  }
  public set dnsRecursiveResolutionTotalTrials3(value: number) {
    this._dnsRecursiveResolutionTotalTrials3 = value;
  }
  public resetDnsRecursiveResolutionTotalTrials3() {
    this._dnsRecursiveResolutionTotalTrials3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsRecursiveResolutionTotalTrials3Input() {
    return this._dnsRecursiveResolutionTotalTrials3;
  }

  // dns_recursive_resolution_total_trials_48 - computed: false, optional: true, required: false
  private _dnsRecursiveResolutionTotalTrials48?: number; 
  public get dnsRecursiveResolutionTotalTrials48() {
    return this.getNumberAttribute('dns_recursive_resolution_total_trials_48');
  }
  public set dnsRecursiveResolutionTotalTrials48(value: number) {
    this._dnsRecursiveResolutionTotalTrials48 = value;
  }
  public resetDnsRecursiveResolutionTotalTrials48() {
    this._dnsRecursiveResolutionTotalTrials48 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsRecursiveResolutionTotalTrials48Input() {
    return this._dnsRecursiveResolutionTotalTrials48;
  }

  // dns_recursive_resolution_total_trials_6 - computed: false, optional: true, required: false
  private _dnsRecursiveResolutionTotalTrials6?: number; 
  public get dnsRecursiveResolutionTotalTrials6() {
    return this.getNumberAttribute('dns_recursive_resolution_total_trials_6');
  }
  public set dnsRecursiveResolutionTotalTrials6(value: number) {
    this._dnsRecursiveResolutionTotalTrials6 = value;
  }
  public resetDnsRecursiveResolutionTotalTrials6() {
    this._dnsRecursiveResolutionTotalTrials6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsRecursiveResolutionTotalTrials6Input() {
    return this._dnsRecursiveResolutionTotalTrials6;
  }

  // dns_recursive_resolution_total_trials_64 - computed: false, optional: true, required: false
  private _dnsRecursiveResolutionTotalTrials64?: number; 
  public get dnsRecursiveResolutionTotalTrials64() {
    return this.getNumberAttribute('dns_recursive_resolution_total_trials_64');
  }
  public set dnsRecursiveResolutionTotalTrials64(value: number) {
    this._dnsRecursiveResolutionTotalTrials64 = value;
  }
  public resetDnsRecursiveResolutionTotalTrials64() {
    this._dnsRecursiveResolutionTotalTrials64 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsRecursiveResolutionTotalTrials64Input() {
    return this._dnsRecursiveResolutionTotalTrials64;
  }

  // dns_recursive_resolution_total_trials_max - computed: false, optional: true, required: false
  private _dnsRecursiveResolutionTotalTrialsMax?: number; 
  public get dnsRecursiveResolutionTotalTrialsMax() {
    return this.getNumberAttribute('dns_recursive_resolution_total_trials_max');
  }
  public set dnsRecursiveResolutionTotalTrialsMax(value: number) {
    this._dnsRecursiveResolutionTotalTrialsMax = value;
  }
  public resetDnsRecursiveResolutionTotalTrialsMax() {
    this._dnsRecursiveResolutionTotalTrialsMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsRecursiveResolutionTotalTrialsMaxInput() {
    return this._dnsRecursiveResolutionTotalTrialsMax;
  }

  // dns_recursive_resolution_udp_conn - computed: false, optional: true, required: false
  private _dnsRecursiveResolutionUdpConn?: number; 
  public get dnsRecursiveResolutionUdpConn() {
    return this.getNumberAttribute('dns_recursive_resolution_udp_conn');
  }
  public set dnsRecursiveResolutionUdpConn(value: number) {
    this._dnsRecursiveResolutionUdpConn = value;
  }
  public resetDnsRecursiveResolutionUdpConn() {
    this._dnsRecursiveResolutionUdpConn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsRecursiveResolutionUdpConnInput() {
    return this._dnsRecursiveResolutionUdpConn;
  }

  // dns_recursive_resolution_udp_conn_err - computed: false, optional: true, required: false
  private _dnsRecursiveResolutionUdpConnErr?: number; 
  public get dnsRecursiveResolutionUdpConnErr() {
    return this.getNumberAttribute('dns_recursive_resolution_udp_conn_err');
  }
  public set dnsRecursiveResolutionUdpConnErr(value: number) {
    this._dnsRecursiveResolutionUdpConnErr = value;
  }
  public resetDnsRecursiveResolutionUdpConnErr() {
    this._dnsRecursiveResolutionUdpConnErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsRecursiveResolutionUdpConnErrInput() {
    return this._dnsRecursiveResolutionUdpConnErr;
  }

  // dns_recursive_resolution_udp_send_failed - computed: false, optional: true, required: false
  private _dnsRecursiveResolutionUdpSendFailed?: number; 
  public get dnsRecursiveResolutionUdpSendFailed() {
    return this.getNumberAttribute('dns_recursive_resolution_udp_send_failed');
  }
  public set dnsRecursiveResolutionUdpSendFailed(value: number) {
    this._dnsRecursiveResolutionUdpSendFailed = value;
  }
  public resetDnsRecursiveResolutionUdpSendFailed() {
    this._dnsRecursiveResolutionUdpSendFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsRecursiveResolutionUdpSendFailedInput() {
    return this._dnsRecursiveResolutionUdpSendFailed;
  }

  // dns_request_drop - computed: false, optional: true, required: false
  private _dnsRequestDrop?: number; 
  public get dnsRequestDrop() {
    return this.getNumberAttribute('dns_request_drop');
  }
  public set dnsRequestDrop(value: number) {
    this._dnsRequestDrop = value;
  }
  public resetDnsRequestDrop() {
    this._dnsRequestDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsRequestDropInput() {
    return this._dnsRequestDrop;
  }

  // dns_request_response - computed: false, optional: true, required: false
  private _dnsRequestResponse?: number; 
  public get dnsRequestResponse() {
    return this.getNumberAttribute('dns_request_response');
  }
  public set dnsRequestResponse(value: number) {
    this._dnsRequestResponse = value;
  }
  public resetDnsRequestResponse() {
    this._dnsRequestResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsRequestResponseInput() {
    return this._dnsRequestResponse;
  }

  // dns_request_rexmit - computed: false, optional: true, required: false
  private _dnsRequestRexmit?: number; 
  public get dnsRequestRexmit() {
    return this.getNumberAttribute('dns_request_rexmit');
  }
  public set dnsRequestRexmit(value: number) {
    this._dnsRequestRexmit = value;
  }
  public resetDnsRequestRexmit() {
    this._dnsRequestRexmit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsRequestRexmitInput() {
    return this._dnsRequestRexmit;
  }

  // dns_request_send - computed: false, optional: true, required: false
  private _dnsRequestSend?: number; 
  public get dnsRequestSend() {
    return this.getNumberAttribute('dns_request_send');
  }
  public set dnsRequestSend(value: number) {
    this._dnsRequestSend = value;
  }
  public resetDnsRequestSend() {
    this._dnsRequestSend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsRequestSendInput() {
    return this._dnsRequestSend;
  }

  // dns_request_timeout - computed: false, optional: true, required: false
  private _dnsRequestTimeout?: number; 
  public get dnsRequestTimeout() {
    return this.getNumberAttribute('dns_request_timeout');
  }
  public set dnsRequestTimeout(value: number) {
    this._dnsRequestTimeout = value;
  }
  public resetDnsRequestTimeout() {
    this._dnsRequestTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsRequestTimeoutInput() {
    return this._dnsRequestTimeout;
  }

  // dns_response_drop - computed: false, optional: true, required: false
  private _dnsResponseDrop?: number; 
  public get dnsResponseDrop() {
    return this.getNumberAttribute('dns_response_drop');
  }
  public set dnsResponseDrop(value: number) {
    this._dnsResponseDrop = value;
  }
  public resetDnsResponseDrop() {
    this._dnsResponseDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsResponseDropInput() {
    return this._dnsResponseDrop;
  }

  // dns_response_send - computed: false, optional: true, required: false
  private _dnsResponseSend?: number; 
  public get dnsResponseSend() {
    return this.getNumberAttribute('dns_response_send');
  }
  public set dnsResponseSend(value: number) {
    this._dnsResponseSend = value;
  }
  public resetDnsResponseSend() {
    this._dnsResponseSend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsResponseSendInput() {
    return this._dnsResponseSend;
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

  // dns_rr_dnssec_req_received - computed: false, optional: true, required: false
  private _dnsRrDnssecReqReceived?: number; 
  public get dnsRrDnssecReqReceived() {
    return this.getNumberAttribute('dns_rr_dnssec_req_received');
  }
  public set dnsRrDnssecReqReceived(value: number) {
    this._dnsRrDnssecReqReceived = value;
  }
  public resetDnsRrDnssecReqReceived() {
    this._dnsRrDnssecReqReceived = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsRrDnssecReqReceivedInput() {
    return this._dnsRrDnssecReqReceived;
  }

  // dns_rr_dnssec_resp_served - computed: false, optional: true, required: false
  private _dnsRrDnssecRespServed?: number; 
  public get dnsRrDnssecRespServed() {
    return this.getNumberAttribute('dns_rr_dnssec_resp_served');
  }
  public set dnsRrDnssecRespServed(value: number) {
    this._dnsRrDnssecRespServed = value;
  }
  public resetDnsRrDnssecRespServed() {
    this._dnsRrDnssecRespServed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsRrDnssecRespServedInput() {
    return this._dnsRrDnssecRespServed;
  }

  // dns_rr_dnssec_val_alg_not_supported - computed: false, optional: true, required: false
  private _dnsRrDnssecValAlgNotSupported?: number; 
  public get dnsRrDnssecValAlgNotSupported() {
    return this.getNumberAttribute('dns_rr_dnssec_val_alg_not_supported');
  }
  public set dnsRrDnssecValAlgNotSupported(value: number) {
    this._dnsRrDnssecValAlgNotSupported = value;
  }
  public resetDnsRrDnssecValAlgNotSupported() {
    this._dnsRrDnssecValAlgNotSupported = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsRrDnssecValAlgNotSupportedInput() {
    return this._dnsRrDnssecValAlgNotSupported;
  }

  // dns_rr_dnssec_val_dgst_not_supported - computed: false, optional: true, required: false
  private _dnsRrDnssecValDgstNotSupported?: number; 
  public get dnsRrDnssecValDgstNotSupported() {
    return this.getNumberAttribute('dns_rr_dnssec_val_dgst_not_supported');
  }
  public set dnsRrDnssecValDgstNotSupported(value: number) {
    this._dnsRrDnssecValDgstNotSupported = value;
  }
  public resetDnsRrDnssecValDgstNotSupported() {
    this._dnsRrDnssecValDgstNotSupported = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsRrDnssecValDgstNotSupportedInput() {
    return this._dnsRrDnssecValDgstNotSupported;
  }

  // dns_rr_dnssec_val_dnskey_proto_err - computed: false, optional: true, required: false
  private _dnsRrDnssecValDnskeyProtoErr?: number; 
  public get dnsRrDnssecValDnskeyProtoErr() {
    return this.getNumberAttribute('dns_rr_dnssec_val_dnskey_proto_err');
  }
  public set dnsRrDnssecValDnskeyProtoErr(value: number) {
    this._dnsRrDnssecValDnskeyProtoErr = value;
  }
  public resetDnsRrDnssecValDnskeyProtoErr() {
    this._dnsRrDnssecValDnskeyProtoErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsRrDnssecValDnskeyProtoErrInput() {
    return this._dnsRrDnssecValDnskeyProtoErr;
  }

  // dns_rr_dnssec_val_incorrect_key_dgst - computed: false, optional: true, required: false
  private _dnsRrDnssecValIncorrectKeyDgst?: number; 
  public get dnsRrDnssecValIncorrectKeyDgst() {
    return this.getNumberAttribute('dns_rr_dnssec_val_incorrect_key_dgst');
  }
  public set dnsRrDnssecValIncorrectKeyDgst(value: number) {
    this._dnsRrDnssecValIncorrectKeyDgst = value;
  }
  public resetDnsRrDnssecValIncorrectKeyDgst() {
    this._dnsRrDnssecValIncorrectKeyDgst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsRrDnssecValIncorrectKeyDgstInput() {
    return this._dnsRrDnssecValIncorrectKeyDgst;
  }

  // dns_rr_dnssec_val_incorrect_sig - computed: false, optional: true, required: false
  private _dnsRrDnssecValIncorrectSig?: number; 
  public get dnsRrDnssecValIncorrectSig() {
    return this.getNumberAttribute('dns_rr_dnssec_val_incorrect_sig');
  }
  public set dnsRrDnssecValIncorrectSig(value: number) {
    this._dnsRrDnssecValIncorrectSig = value;
  }
  public resetDnsRrDnssecValIncorrectSig() {
    this._dnsRrDnssecValIncorrectSig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsRrDnssecValIncorrectSigInput() {
    return this._dnsRrDnssecValIncorrectSig;
  }

  // dns_rr_dnssec_val_rrset_size_exceed_limit - computed: false, optional: true, required: false
  private _dnsRrDnssecValRrsetSizeExceedLimit?: number; 
  public get dnsRrDnssecValRrsetSizeExceedLimit() {
    return this.getNumberAttribute('dns_rr_dnssec_val_rrset_size_exceed_limit');
  }
  public set dnsRrDnssecValRrsetSizeExceedLimit(value: number) {
    this._dnsRrDnssecValRrsetSizeExceedLimit = value;
  }
  public resetDnsRrDnssecValRrsetSizeExceedLimit() {
    this._dnsRrDnssecValRrsetSizeExceedLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsRrDnssecValRrsetSizeExceedLimitInput() {
    return this._dnsRrDnssecValRrsetSizeExceedLimit;
  }

  // dns_rr_dnssec_val_rrsig_labels_err - computed: false, optional: true, required: false
  private _dnsRrDnssecValRrsigLabelsErr?: number; 
  public get dnsRrDnssecValRrsigLabelsErr() {
    return this.getNumberAttribute('dns_rr_dnssec_val_rrsig_labels_err');
  }
  public set dnsRrDnssecValRrsigLabelsErr(value: number) {
    this._dnsRrDnssecValRrsigLabelsErr = value;
  }
  public resetDnsRrDnssecValRrsigLabelsErr() {
    this._dnsRrDnssecValRrsigLabelsErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsRrDnssecValRrsigLabelsErrInput() {
    return this._dnsRrDnssecValRrsigLabelsErr;
  }

  // dns_rr_dnssec_val_rrsig_non_validity_period - computed: false, optional: true, required: false
  private _dnsRrDnssecValRrsigNonValidityPeriod?: number; 
  public get dnsRrDnssecValRrsigNonValidityPeriod() {
    return this.getNumberAttribute('dns_rr_dnssec_val_rrsig_non_validity_period');
  }
  public set dnsRrDnssecValRrsigNonValidityPeriod(value: number) {
    this._dnsRrDnssecValRrsigNonValidityPeriod = value;
  }
  public resetDnsRrDnssecValRrsigNonValidityPeriod() {
    this._dnsRrDnssecValRrsigNonValidityPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsRrDnssecValRrsigNonValidityPeriodInput() {
    return this._dnsRrDnssecValRrsigNonValidityPeriod;
  }

  // dns_rr_dnssec_val_rrsig_signer_err - computed: false, optional: true, required: false
  private _dnsRrDnssecValRrsigSignerErr?: number; 
  public get dnsRrDnssecValRrsigSignerErr() {
    return this.getNumberAttribute('dns_rr_dnssec_val_rrsig_signer_err');
  }
  public set dnsRrDnssecValRrsigSignerErr(value: number) {
    this._dnsRrDnssecValRrsigSignerErr = value;
  }
  public resetDnsRrDnssecValRrsigSignerErr() {
    this._dnsRrDnssecValRrsigSignerErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsRrDnssecValRrsigSignerErrInput() {
    return this._dnsRrDnssecValRrsigSignerErr;
  }

  // dns_rr_dnssec_val_with_trust_anchor_failed - computed: false, optional: true, required: false
  private _dnsRrDnssecValWithTrustAnchorFailed?: number; 
  public get dnsRrDnssecValWithTrustAnchorFailed() {
    return this.getNumberAttribute('dns_rr_dnssec_val_with_trust_anchor_failed');
  }
  public set dnsRrDnssecValWithTrustAnchorFailed(value: number) {
    this._dnsRrDnssecValWithTrustAnchorFailed = value;
  }
  public resetDnsRrDnssecValWithTrustAnchorFailed() {
    this._dnsRrDnssecValWithTrustAnchorFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsRrDnssecValWithTrustAnchorFailedInput() {
    return this._dnsRrDnssecValWithTrustAnchorFailed;
  }

  // dns_rr_dnssec_validation_failed - computed: false, optional: true, required: false
  private _dnsRrDnssecValidationFailed?: number; 
  public get dnsRrDnssecValidationFailed() {
    return this.getNumberAttribute('dns_rr_dnssec_validation_failed');
  }
  public set dnsRrDnssecValidationFailed(value: number) {
    this._dnsRrDnssecValidationFailed = value;
  }
  public resetDnsRrDnssecValidationFailed() {
    this._dnsRrDnssecValidationFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsRrDnssecValidationFailedInput() {
    return this._dnsRrDnssecValidationFailed;
  }

  // dns_tcp_pipeline_request_drop - computed: false, optional: true, required: false
  private _dnsTcpPipelineRequestDrop?: number; 
  public get dnsTcpPipelineRequestDrop() {
    return this.getNumberAttribute('dns_tcp_pipeline_request_drop');
  }
  public set dnsTcpPipelineRequestDrop(value: number) {
    this._dnsTcpPipelineRequestDrop = value;
  }
  public resetDnsTcpPipelineRequestDrop() {
    this._dnsTcpPipelineRequestDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsTcpPipelineRequestDropInput() {
    return this._dnsTcpPipelineRequestDrop;
  }

  // dns_total_drop - computed: false, optional: true, required: false
  private _dnsTotalDrop?: number; 
  public get dnsTotalDrop() {
    return this.getNumberAttribute('dns_total_drop');
  }
  public set dnsTotalDrop(value: number) {
    this._dnsTotalDrop = value;
  }
  public resetDnsTotalDrop() {
    this._dnsTotalDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsTotalDropInput() {
    return this._dnsTotalDrop;
  }

  // dns_total_request - computed: false, optional: true, required: false
  private _dnsTotalRequest?: number; 
  public get dnsTotalRequest() {
    return this.getNumberAttribute('dns_total_request');
  }
  public set dnsTotalRequest(value: number) {
    this._dnsTotalRequest = value;
  }
  public resetDnsTotalRequest() {
    this._dnsTotalRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsTotalRequestInput() {
    return this._dnsTotalRequest;
  }

  // dns_total_response - computed: false, optional: true, required: false
  private _dnsTotalResponse?: number; 
  public get dnsTotalResponse() {
    return this.getNumberAttribute('dns_total_response');
  }
  public set dnsTotalResponse(value: number) {
    this._dnsTotalResponse = value;
  }
  public resetDnsTotalResponse() {
    this._dnsTotalResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsTotalResponseInput() {
    return this._dnsTotalResponse;
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

  // dnsrrl_nx_drop - computed: false, optional: true, required: false
  private _dnsrrlNxDrop?: number; 
  public get dnsrrlNxDrop() {
    return this.getNumberAttribute('dnsrrl_nx_drop');
  }
  public set dnsrrlNxDrop(value: number) {
    this._dnsrrlNxDrop = value;
  }
  public resetDnsrrlNxDrop() {
    this._dnsrrlNxDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsrrlNxDropInput() {
    return this._dnsrrlNxDrop;
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

  // dnsrrl_qps_drop - computed: false, optional: true, required: false
  private _dnsrrlQpsDrop?: number; 
  public get dnsrrlQpsDrop() {
    return this.getNumberAttribute('dnsrrl_qps_drop');
  }
  public set dnsrrlQpsDrop(value: number) {
    this._dnsrrlQpsDrop = value;
  }
  public resetDnsrrlQpsDrop() {
    this._dnsrrlQpsDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsrrlQpsDropInput() {
    return this._dnsrrlQpsDrop;
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

  // empty_response - computed: false, optional: true, required: false
  private _emptyResponse?: number; 
  public get emptyResponse() {
    return this.getNumberAttribute('empty_response');
  }
  public set emptyResponse(value: number) {
    this._emptyResponse = value;
  }
  public resetEmptyResponse() {
    this._emptyResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emptyResponseInput() {
    return this._emptyResponse;
  }

  // gslb_drop - computed: false, optional: true, required: false
  private _gslbDrop?: number; 
  public get gslbDrop() {
    return this.getNumberAttribute('gslb_drop');
  }
  public set gslbDrop(value: number) {
    this._gslbDrop = value;
  }
  public resetGslbDrop() {
    this._gslbDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbDropInput() {
    return this._gslbDrop;
  }

  // gslb_query_bad - computed: false, optional: true, required: false
  private _gslbQueryBad?: number; 
  public get gslbQueryBad() {
    return this.getNumberAttribute('gslb_query_bad');
  }
  public set gslbQueryBad(value: number) {
    this._gslbQueryBad = value;
  }
  public resetGslbQueryBad() {
    this._gslbQueryBad = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbQueryBadInput() {
    return this._gslbQueryBad;
  }

  // gslb_query_drop - computed: false, optional: true, required: false
  private _gslbQueryDrop?: number; 
  public get gslbQueryDrop() {
    return this.getNumberAttribute('gslb_query_drop');
  }
  public set gslbQueryDrop(value: number) {
    this._gslbQueryDrop = value;
  }
  public resetGslbQueryDrop() {
    this._gslbQueryDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbQueryDropInput() {
    return this._gslbQueryDrop;
  }

  // gslb_query_fwd - computed: false, optional: true, required: false
  private _gslbQueryFwd?: number; 
  public get gslbQueryFwd() {
    return this.getNumberAttribute('gslb_query_fwd');
  }
  public set gslbQueryFwd(value: number) {
    this._gslbQueryFwd = value;
  }
  public resetGslbQueryFwd() {
    this._gslbQueryFwd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbQueryFwdInput() {
    return this._gslbQueryFwd;
  }

  // gslb_response_bad - computed: false, optional: true, required: false
  private _gslbResponseBad?: number; 
  public get gslbResponseBad() {
    return this.getNumberAttribute('gslb_response_bad');
  }
  public set gslbResponseBad(value: number) {
    this._gslbResponseBad = value;
  }
  public resetGslbResponseBad() {
    this._gslbResponseBad = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbResponseBadInput() {
    return this._gslbResponseBad;
  }

  // gslb_response_drop - computed: false, optional: true, required: false
  private _gslbResponseDrop?: number; 
  public get gslbResponseDrop() {
    return this.getNumberAttribute('gslb_response_drop');
  }
  public set gslbResponseDrop(value: number) {
    this._gslbResponseDrop = value;
  }
  public resetGslbResponseDrop() {
    this._gslbResponseDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbResponseDropInput() {
    return this._gslbResponseDrop;
  }

  // gslb_response_good - computed: false, optional: true, required: false
  private _gslbResponseGood?: number; 
  public get gslbResponseGood() {
    return this.getNumberAttribute('gslb_response_good');
  }
  public set gslbResponseGood(value: number) {
    this._gslbResponseGood = value;
  }
  public resetGslbResponseGood() {
    this._gslbResponseGood = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbResponseGoodInput() {
    return this._gslbResponseGood;
  }

  // gslb_response_rvs - computed: false, optional: true, required: false
  private _gslbResponseRvs?: number; 
  public get gslbResponseRvs() {
    return this.getNumberAttribute('gslb_response_rvs');
  }
  public set gslbResponseRvs(value: number) {
    this._gslbResponseRvs = value;
  }
  public resetGslbResponseRvs() {
    this._gslbResponseRvs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbResponseRvsInput() {
    return this._gslbResponseRvs;
  }

  // rcode_badalg_receive - computed: false, optional: true, required: false
  private _rcodeBadalgReceive?: number; 
  public get rcodeBadalgReceive() {
    return this.getNumberAttribute('rcode_badalg_receive');
  }
  public set rcodeBadalgReceive(value: number) {
    this._rcodeBadalgReceive = value;
  }
  public resetRcodeBadalgReceive() {
    this._rcodeBadalgReceive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rcodeBadalgReceiveInput() {
    return this._rcodeBadalgReceive;
  }

  // rcode_badalg_response - computed: false, optional: true, required: false
  private _rcodeBadalgResponse?: number; 
  public get rcodeBadalgResponse() {
    return this.getNumberAttribute('rcode_badalg_response');
  }
  public set rcodeBadalgResponse(value: number) {
    this._rcodeBadalgResponse = value;
  }
  public resetRcodeBadalgResponse() {
    this._rcodeBadalgResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rcodeBadalgResponseInput() {
    return this._rcodeBadalgResponse;
  }

  // rcode_badcookie_receive - computed: false, optional: true, required: false
  private _rcodeBadcookieReceive?: number; 
  public get rcodeBadcookieReceive() {
    return this.getNumberAttribute('rcode_badcookie_receive');
  }
  public set rcodeBadcookieReceive(value: number) {
    this._rcodeBadcookieReceive = value;
  }
  public resetRcodeBadcookieReceive() {
    this._rcodeBadcookieReceive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rcodeBadcookieReceiveInput() {
    return this._rcodeBadcookieReceive;
  }

  // rcode_badcookie_response - computed: false, optional: true, required: false
  private _rcodeBadcookieResponse?: number; 
  public get rcodeBadcookieResponse() {
    return this.getNumberAttribute('rcode_badcookie_response');
  }
  public set rcodeBadcookieResponse(value: number) {
    this._rcodeBadcookieResponse = value;
  }
  public resetRcodeBadcookieResponse() {
    this._rcodeBadcookieResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rcodeBadcookieResponseInput() {
    return this._rcodeBadcookieResponse;
  }

  // rcode_badkey_receive - computed: false, optional: true, required: false
  private _rcodeBadkeyReceive?: number; 
  public get rcodeBadkeyReceive() {
    return this.getNumberAttribute('rcode_badkey_receive');
  }
  public set rcodeBadkeyReceive(value: number) {
    this._rcodeBadkeyReceive = value;
  }
  public resetRcodeBadkeyReceive() {
    this._rcodeBadkeyReceive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rcodeBadkeyReceiveInput() {
    return this._rcodeBadkeyReceive;
  }

  // rcode_badkey_response - computed: false, optional: true, required: false
  private _rcodeBadkeyResponse?: number; 
  public get rcodeBadkeyResponse() {
    return this.getNumberAttribute('rcode_badkey_response');
  }
  public set rcodeBadkeyResponse(value: number) {
    this._rcodeBadkeyResponse = value;
  }
  public resetRcodeBadkeyResponse() {
    this._rcodeBadkeyResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rcodeBadkeyResponseInput() {
    return this._rcodeBadkeyResponse;
  }

  // rcode_badmode_receive - computed: false, optional: true, required: false
  private _rcodeBadmodeReceive?: number; 
  public get rcodeBadmodeReceive() {
    return this.getNumberAttribute('rcode_badmode_receive');
  }
  public set rcodeBadmodeReceive(value: number) {
    this._rcodeBadmodeReceive = value;
  }
  public resetRcodeBadmodeReceive() {
    this._rcodeBadmodeReceive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rcodeBadmodeReceiveInput() {
    return this._rcodeBadmodeReceive;
  }

  // rcode_badmode_response - computed: false, optional: true, required: false
  private _rcodeBadmodeResponse?: number; 
  public get rcodeBadmodeResponse() {
    return this.getNumberAttribute('rcode_badmode_response');
  }
  public set rcodeBadmodeResponse(value: number) {
    this._rcodeBadmodeResponse = value;
  }
  public resetRcodeBadmodeResponse() {
    this._rcodeBadmodeResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rcodeBadmodeResponseInput() {
    return this._rcodeBadmodeResponse;
  }

  // rcode_badname_receive - computed: false, optional: true, required: false
  private _rcodeBadnameReceive?: number; 
  public get rcodeBadnameReceive() {
    return this.getNumberAttribute('rcode_badname_receive');
  }
  public set rcodeBadnameReceive(value: number) {
    this._rcodeBadnameReceive = value;
  }
  public resetRcodeBadnameReceive() {
    this._rcodeBadnameReceive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rcodeBadnameReceiveInput() {
    return this._rcodeBadnameReceive;
  }

  // rcode_badname_response - computed: false, optional: true, required: false
  private _rcodeBadnameResponse?: number; 
  public get rcodeBadnameResponse() {
    return this.getNumberAttribute('rcode_badname_response');
  }
  public set rcodeBadnameResponse(value: number) {
    this._rcodeBadnameResponse = value;
  }
  public resetRcodeBadnameResponse() {
    this._rcodeBadnameResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rcodeBadnameResponseInput() {
    return this._rcodeBadnameResponse;
  }

  // rcode_badtime_receive - computed: false, optional: true, required: false
  private _rcodeBadtimeReceive?: number; 
  public get rcodeBadtimeReceive() {
    return this.getNumberAttribute('rcode_badtime_receive');
  }
  public set rcodeBadtimeReceive(value: number) {
    this._rcodeBadtimeReceive = value;
  }
  public resetRcodeBadtimeReceive() {
    this._rcodeBadtimeReceive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rcodeBadtimeReceiveInput() {
    return this._rcodeBadtimeReceive;
  }

  // rcode_badtime_response - computed: false, optional: true, required: false
  private _rcodeBadtimeResponse?: number; 
  public get rcodeBadtimeResponse() {
    return this.getNumberAttribute('rcode_badtime_response');
  }
  public set rcodeBadtimeResponse(value: number) {
    this._rcodeBadtimeResponse = value;
  }
  public resetRcodeBadtimeResponse() {
    this._rcodeBadtimeResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rcodeBadtimeResponseInput() {
    return this._rcodeBadtimeResponse;
  }

  // rcode_badtranc_receive - computed: false, optional: true, required: false
  private _rcodeBadtrancReceive?: number; 
  public get rcodeBadtrancReceive() {
    return this.getNumberAttribute('rcode_badtranc_receive');
  }
  public set rcodeBadtrancReceive(value: number) {
    this._rcodeBadtrancReceive = value;
  }
  public resetRcodeBadtrancReceive() {
    this._rcodeBadtrancReceive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rcodeBadtrancReceiveInput() {
    return this._rcodeBadtrancReceive;
  }

  // rcode_badtranc_response - computed: false, optional: true, required: false
  private _rcodeBadtrancResponse?: number; 
  public get rcodeBadtrancResponse() {
    return this.getNumberAttribute('rcode_badtranc_response');
  }
  public set rcodeBadtrancResponse(value: number) {
    this._rcodeBadtrancResponse = value;
  }
  public resetRcodeBadtrancResponse() {
    this._rcodeBadtrancResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rcodeBadtrancResponseInput() {
    return this._rcodeBadtrancResponse;
  }

  // rcode_badver_receive - computed: false, optional: true, required: false
  private _rcodeBadverReceive?: number; 
  public get rcodeBadverReceive() {
    return this.getNumberAttribute('rcode_badver_receive');
  }
  public set rcodeBadverReceive(value: number) {
    this._rcodeBadverReceive = value;
  }
  public resetRcodeBadverReceive() {
    this._rcodeBadverReceive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rcodeBadverReceiveInput() {
    return this._rcodeBadverReceive;
  }

  // rcode_badver_response - computed: false, optional: true, required: false
  private _rcodeBadverResponse?: number; 
  public get rcodeBadverResponse() {
    return this.getNumberAttribute('rcode_badver_response');
  }
  public set rcodeBadverResponse(value: number) {
    this._rcodeBadverResponse = value;
  }
  public resetRcodeBadverResponse() {
    this._rcodeBadverResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rcodeBadverResponseInput() {
    return this._rcodeBadverResponse;
  }

  // rcode_dsotypen_receive - computed: false, optional: true, required: false
  private _rcodeDsotypenReceive?: number; 
  public get rcodeDsotypenReceive() {
    return this.getNumberAttribute('rcode_dsotypen_receive');
  }
  public set rcodeDsotypenReceive(value: number) {
    this._rcodeDsotypenReceive = value;
  }
  public resetRcodeDsotypenReceive() {
    this._rcodeDsotypenReceive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rcodeDsotypenReceiveInput() {
    return this._rcodeDsotypenReceive;
  }

  // rcode_dsotypen_response - computed: false, optional: true, required: false
  private _rcodeDsotypenResponse?: number; 
  public get rcodeDsotypenResponse() {
    return this.getNumberAttribute('rcode_dsotypen_response');
  }
  public set rcodeDsotypenResponse(value: number) {
    this._rcodeDsotypenResponse = value;
  }
  public resetRcodeDsotypenResponse() {
    this._rcodeDsotypenResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rcodeDsotypenResponseInput() {
    return this._rcodeDsotypenResponse;
  }

  // rcode_formerr_receive - computed: false, optional: true, required: false
  private _rcodeFormerrReceive?: number; 
  public get rcodeFormerrReceive() {
    return this.getNumberAttribute('rcode_formerr_receive');
  }
  public set rcodeFormerrReceive(value: number) {
    this._rcodeFormerrReceive = value;
  }
  public resetRcodeFormerrReceive() {
    this._rcodeFormerrReceive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rcodeFormerrReceiveInput() {
    return this._rcodeFormerrReceive;
  }

  // rcode_formerr_response - computed: false, optional: true, required: false
  private _rcodeFormerrResponse?: number; 
  public get rcodeFormerrResponse() {
    return this.getNumberAttribute('rcode_formerr_response');
  }
  public set rcodeFormerrResponse(value: number) {
    this._rcodeFormerrResponse = value;
  }
  public resetRcodeFormerrResponse() {
    this._rcodeFormerrResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rcodeFormerrResponseInput() {
    return this._rcodeFormerrResponse;
  }

  // rcode_noerror_generate - computed: false, optional: true, required: false
  private _rcodeNoerrorGenerate?: number; 
  public get rcodeNoerrorGenerate() {
    return this.getNumberAttribute('rcode_noerror_generate');
  }
  public set rcodeNoerrorGenerate(value: number) {
    this._rcodeNoerrorGenerate = value;
  }
  public resetRcodeNoerrorGenerate() {
    this._rcodeNoerrorGenerate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rcodeNoerrorGenerateInput() {
    return this._rcodeNoerrorGenerate;
  }

  // rcode_notauth_receive - computed: false, optional: true, required: false
  private _rcodeNotauthReceive?: number; 
  public get rcodeNotauthReceive() {
    return this.getNumberAttribute('rcode_notauth_receive');
  }
  public set rcodeNotauthReceive(value: number) {
    this._rcodeNotauthReceive = value;
  }
  public resetRcodeNotauthReceive() {
    this._rcodeNotauthReceive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rcodeNotauthReceiveInput() {
    return this._rcodeNotauthReceive;
  }

  // rcode_notauth_response - computed: false, optional: true, required: false
  private _rcodeNotauthResponse?: number; 
  public get rcodeNotauthResponse() {
    return this.getNumberAttribute('rcode_notauth_response');
  }
  public set rcodeNotauthResponse(value: number) {
    this._rcodeNotauthResponse = value;
  }
  public resetRcodeNotauthResponse() {
    this._rcodeNotauthResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rcodeNotauthResponseInput() {
    return this._rcodeNotauthResponse;
  }

  // rcode_notimpl_receive - computed: false, optional: true, required: false
  private _rcodeNotimplReceive?: number; 
  public get rcodeNotimplReceive() {
    return this.getNumberAttribute('rcode_notimpl_receive');
  }
  public set rcodeNotimplReceive(value: number) {
    this._rcodeNotimplReceive = value;
  }
  public resetRcodeNotimplReceive() {
    this._rcodeNotimplReceive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rcodeNotimplReceiveInput() {
    return this._rcodeNotimplReceive;
  }

  // rcode_notimpl_response - computed: false, optional: true, required: false
  private _rcodeNotimplResponse?: number; 
  public get rcodeNotimplResponse() {
    return this.getNumberAttribute('rcode_notimpl_response');
  }
  public set rcodeNotimplResponse(value: number) {
    this._rcodeNotimplResponse = value;
  }
  public resetRcodeNotimplResponse() {
    this._rcodeNotimplResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rcodeNotimplResponseInput() {
    return this._rcodeNotimplResponse;
  }

  // rcode_notzone_receive - computed: false, optional: true, required: false
  private _rcodeNotzoneReceive?: number; 
  public get rcodeNotzoneReceive() {
    return this.getNumberAttribute('rcode_notzone_receive');
  }
  public set rcodeNotzoneReceive(value: number) {
    this._rcodeNotzoneReceive = value;
  }
  public resetRcodeNotzoneReceive() {
    this._rcodeNotzoneReceive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rcodeNotzoneReceiveInput() {
    return this._rcodeNotzoneReceive;
  }

  // rcode_nxdomain_receive - computed: false, optional: true, required: false
  private _rcodeNxdomainReceive?: number; 
  public get rcodeNxdomainReceive() {
    return this.getNumberAttribute('rcode_nxdomain_receive');
  }
  public set rcodeNxdomainReceive(value: number) {
    this._rcodeNxdomainReceive = value;
  }
  public resetRcodeNxdomainReceive() {
    this._rcodeNxdomainReceive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rcodeNxdomainReceiveInput() {
    return this._rcodeNxdomainReceive;
  }

  // rcode_nxdomain_response - computed: false, optional: true, required: false
  private _rcodeNxdomainResponse?: number; 
  public get rcodeNxdomainResponse() {
    return this.getNumberAttribute('rcode_nxdomain_response');
  }
  public set rcodeNxdomainResponse(value: number) {
    this._rcodeNxdomainResponse = value;
  }
  public resetRcodeNxdomainResponse() {
    this._rcodeNxdomainResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rcodeNxdomainResponseInput() {
    return this._rcodeNxdomainResponse;
  }

  // rcode_nxrrset_receive - computed: false, optional: true, required: false
  private _rcodeNxrrsetReceive?: number; 
  public get rcodeNxrrsetReceive() {
    return this.getNumberAttribute('rcode_nxrrset_receive');
  }
  public set rcodeNxrrsetReceive(value: number) {
    this._rcodeNxrrsetReceive = value;
  }
  public resetRcodeNxrrsetReceive() {
    this._rcodeNxrrsetReceive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rcodeNxrrsetReceiveInput() {
    return this._rcodeNxrrsetReceive;
  }

  // rcode_nxrrset_response - computed: false, optional: true, required: false
  private _rcodeNxrrsetResponse?: number; 
  public get rcodeNxrrsetResponse() {
    return this.getNumberAttribute('rcode_nxrrset_response');
  }
  public set rcodeNxrrsetResponse(value: number) {
    this._rcodeNxrrsetResponse = value;
  }
  public resetRcodeNxrrsetResponse() {
    this._rcodeNxrrsetResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rcodeNxrrsetResponseInput() {
    return this._rcodeNxrrsetResponse;
  }

  // rcode_other_receive - computed: false, optional: true, required: false
  private _rcodeOtherReceive?: number; 
  public get rcodeOtherReceive() {
    return this.getNumberAttribute('rcode_other_receive');
  }
  public set rcodeOtherReceive(value: number) {
    this._rcodeOtherReceive = value;
  }
  public resetRcodeOtherReceive() {
    this._rcodeOtherReceive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rcodeOtherReceiveInput() {
    return this._rcodeOtherReceive;
  }

  // rcode_other_response - computed: false, optional: true, required: false
  private _rcodeOtherResponse?: number; 
  public get rcodeOtherResponse() {
    return this.getNumberAttribute('rcode_other_response');
  }
  public set rcodeOtherResponse(value: number) {
    this._rcodeOtherResponse = value;
  }
  public resetRcodeOtherResponse() {
    this._rcodeOtherResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rcodeOtherResponseInput() {
    return this._rcodeOtherResponse;
  }

  // rcode_refuse_receive - computed: false, optional: true, required: false
  private _rcodeRefuseReceive?: number; 
  public get rcodeRefuseReceive() {
    return this.getNumberAttribute('rcode_refuse_receive');
  }
  public set rcodeRefuseReceive(value: number) {
    this._rcodeRefuseReceive = value;
  }
  public resetRcodeRefuseReceive() {
    this._rcodeRefuseReceive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rcodeRefuseReceiveInput() {
    return this._rcodeRefuseReceive;
  }

  // rcode_refuse_response - computed: false, optional: true, required: false
  private _rcodeRefuseResponse?: number; 
  public get rcodeRefuseResponse() {
    return this.getNumberAttribute('rcode_refuse_response');
  }
  public set rcodeRefuseResponse(value: number) {
    this._rcodeRefuseResponse = value;
  }
  public resetRcodeRefuseResponse() {
    this._rcodeRefuseResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rcodeRefuseResponseInput() {
    return this._rcodeRefuseResponse;
  }

  // rcode_serverr_receive - computed: false, optional: true, required: false
  private _rcodeServerrReceive?: number; 
  public get rcodeServerrReceive() {
    return this.getNumberAttribute('rcode_serverr_receive');
  }
  public set rcodeServerrReceive(value: number) {
    this._rcodeServerrReceive = value;
  }
  public resetRcodeServerrReceive() {
    this._rcodeServerrReceive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rcodeServerrReceiveInput() {
    return this._rcodeServerrReceive;
  }

  // rcode_serverr_response - computed: false, optional: true, required: false
  private _rcodeServerrResponse?: number; 
  public get rcodeServerrResponse() {
    return this.getNumberAttribute('rcode_serverr_response');
  }
  public set rcodeServerrResponse(value: number) {
    this._rcodeServerrResponse = value;
  }
  public resetRcodeServerrResponse() {
    this._rcodeServerrResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rcodeServerrResponseInput() {
    return this._rcodeServerrResponse;
  }

  // rcode_tsig_badkey_receive - computed: false, optional: true, required: false
  private _rcodeTsigBadkeyReceive?: number; 
  public get rcodeTsigBadkeyReceive() {
    return this.getNumberAttribute('rcode_tsig_badkey_receive');
  }
  public set rcodeTsigBadkeyReceive(value: number) {
    this._rcodeTsigBadkeyReceive = value;
  }
  public resetRcodeTsigBadkeyReceive() {
    this._rcodeTsigBadkeyReceive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rcodeTsigBadkeyReceiveInput() {
    return this._rcodeTsigBadkeyReceive;
  }

  // rcode_tsig_badsig_receive - computed: false, optional: true, required: false
  private _rcodeTsigBadsigReceive?: number; 
  public get rcodeTsigBadsigReceive() {
    return this.getNumberAttribute('rcode_tsig_badsig_receive');
  }
  public set rcodeTsigBadsigReceive(value: number) {
    this._rcodeTsigBadsigReceive = value;
  }
  public resetRcodeTsigBadsigReceive() {
    this._rcodeTsigBadsigReceive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rcodeTsigBadsigReceiveInput() {
    return this._rcodeTsigBadsigReceive;
  }

  // rcode_tsig_badtime_receive - computed: false, optional: true, required: false
  private _rcodeTsigBadtimeReceive?: number; 
  public get rcodeTsigBadtimeReceive() {
    return this.getNumberAttribute('rcode_tsig_badtime_receive');
  }
  public set rcodeTsigBadtimeReceive(value: number) {
    this._rcodeTsigBadtimeReceive = value;
  }
  public resetRcodeTsigBadtimeReceive() {
    this._rcodeTsigBadtimeReceive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rcodeTsigBadtimeReceiveInput() {
    return this._rcodeTsigBadtimeReceive;
  }

  // rcode_tsig_badtrunc_receive - computed: false, optional: true, required: false
  private _rcodeTsigBadtruncReceive?: number; 
  public get rcodeTsigBadtruncReceive() {
    return this.getNumberAttribute('rcode_tsig_badtrunc_receive');
  }
  public set rcodeTsigBadtruncReceive(value: number) {
    this._rcodeTsigBadtruncReceive = value;
  }
  public resetRcodeTsigBadtruncReceive() {
    this._rcodeTsigBadtruncReceive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rcodeTsigBadtruncReceiveInput() {
    return this._rcodeTsigBadtruncReceive;
  }

  // rcode_yxdomain_receive - computed: false, optional: true, required: false
  private _rcodeYxdomainReceive?: number; 
  public get rcodeYxdomainReceive() {
    return this.getNumberAttribute('rcode_yxdomain_receive');
  }
  public set rcodeYxdomainReceive(value: number) {
    this._rcodeYxdomainReceive = value;
  }
  public resetRcodeYxdomainReceive() {
    this._rcodeYxdomainReceive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rcodeYxdomainReceiveInput() {
    return this._rcodeYxdomainReceive;
  }

  // rcode_yxdomain_response - computed: false, optional: true, required: false
  private _rcodeYxdomainResponse?: number; 
  public get rcodeYxdomainResponse() {
    return this.getNumberAttribute('rcode_yxdomain_response');
  }
  public set rcodeYxdomainResponse(value: number) {
    this._rcodeYxdomainResponse = value;
  }
  public resetRcodeYxdomainResponse() {
    this._rcodeYxdomainResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rcodeYxdomainResponseInput() {
    return this._rcodeYxdomainResponse;
  }

  // rcode_yxrrset_receive - computed: false, optional: true, required: false
  private _rcodeYxrrsetReceive?: number; 
  public get rcodeYxrrsetReceive() {
    return this.getNumberAttribute('rcode_yxrrset_receive');
  }
  public set rcodeYxrrsetReceive(value: number) {
    this._rcodeYxrrsetReceive = value;
  }
  public resetRcodeYxrrsetReceive() {
    this._rcodeYxrrsetReceive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rcodeYxrrsetReceiveInput() {
    return this._rcodeYxrrsetReceive;
  }

  // rcode_yxrrset_response - computed: false, optional: true, required: false
  private _rcodeYxrrsetResponse?: number; 
  public get rcodeYxrrsetResponse() {
    return this.getNumberAttribute('rcode_yxrrset_response');
  }
  public set rcodeYxrrsetResponse(value: number) {
    this._rcodeYxrrsetResponse = value;
  }
  public resetRcodeYxrrsetResponse() {
    this._rcodeYxrrsetResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rcodeYxrrsetResponseInput() {
    return this._rcodeYxrrsetResponse;
  }

  // slb_dns_client_ssl_succ - computed: false, optional: true, required: false
  private _slbDnsClientSslSucc?: number; 
  public get slbDnsClientSslSucc() {
    return this.getNumberAttribute('slb_dns_client_ssl_succ');
  }
  public set slbDnsClientSslSucc(value: number) {
    this._slbDnsClientSslSucc = value;
  }
  public resetSlbDnsClientSslSucc() {
    this._slbDnsClientSslSucc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slbDnsClientSslSuccInput() {
    return this._slbDnsClientSslSucc;
  }

  // slb_dns_edns_ecs_inserted - computed: false, optional: true, required: false
  private _slbDnsEdnsEcsInserted?: number; 
  public get slbDnsEdnsEcsInserted() {
    return this.getNumberAttribute('slb_dns_edns_ecs_inserted');
  }
  public set slbDnsEdnsEcsInserted(value: number) {
    this._slbDnsEdnsEcsInserted = value;
  }
  public resetSlbDnsEdnsEcsInserted() {
    this._slbDnsEdnsEcsInserted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slbDnsEdnsEcsInsertedInput() {
    return this._slbDnsEdnsEcsInserted;
  }

  // slb_dns_edns_ecs_insertion_fail - computed: false, optional: true, required: false
  private _slbDnsEdnsEcsInsertionFail?: number; 
  public get slbDnsEdnsEcsInsertionFail() {
    return this.getNumberAttribute('slb_dns_edns_ecs_insertion_fail');
  }
  public set slbDnsEdnsEcsInsertionFail(value: number) {
    this._slbDnsEdnsEcsInsertionFail = value;
  }
  public resetSlbDnsEdnsEcsInsertionFail() {
    this._slbDnsEdnsEcsInsertionFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slbDnsEdnsEcsInsertionFailInput() {
    return this._slbDnsEdnsEcsInsertionFail;
  }

  // slb_dns_edns_ecs_received - computed: false, optional: true, required: false
  private _slbDnsEdnsEcsReceived?: number; 
  public get slbDnsEdnsEcsReceived() {
    return this.getNumberAttribute('slb_dns_edns_ecs_received');
  }
  public set slbDnsEdnsEcsReceived(value: number) {
    this._slbDnsEdnsEcsReceived = value;
  }
  public resetSlbDnsEdnsEcsReceived() {
    this._slbDnsEdnsEcsReceived = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slbDnsEdnsEcsReceivedInput() {
    return this._slbDnsEdnsEcsReceived;
  }

  // slb_dns_edns_subnet_to_server_removed - computed: false, optional: true, required: false
  private _slbDnsEdnsSubnetToServerRemoved?: number; 
  public get slbDnsEdnsSubnetToServerRemoved() {
    return this.getNumberAttribute('slb_dns_edns_subnet_to_server_removed');
  }
  public set slbDnsEdnsSubnetToServerRemoved(value: number) {
    this._slbDnsEdnsSubnetToServerRemoved = value;
  }
  public resetSlbDnsEdnsSubnetToServerRemoved() {
    this._slbDnsEdnsSubnetToServerRemoved = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slbDnsEdnsSubnetToServerRemovedInput() {
    return this._slbDnsEdnsSubnetToServerRemoved;
  }

  // slb_dns_padding_to_client_added - computed: false, optional: true, required: false
  private _slbDnsPaddingToClientAdded?: number; 
  public get slbDnsPaddingToClientAdded() {
    return this.getNumberAttribute('slb_dns_padding_to_client_added');
  }
  public set slbDnsPaddingToClientAdded(value: number) {
    this._slbDnsPaddingToClientAdded = value;
  }
  public resetSlbDnsPaddingToClientAdded() {
    this._slbDnsPaddingToClientAdded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slbDnsPaddingToClientAddedInput() {
    return this._slbDnsPaddingToClientAdded;
  }

  // slb_dns_padding_to_server_removed - computed: false, optional: true, required: false
  private _slbDnsPaddingToServerRemoved?: number; 
  public get slbDnsPaddingToServerRemoved() {
    return this.getNumberAttribute('slb_dns_padding_to_server_removed');
  }
  public set slbDnsPaddingToServerRemoved(value: number) {
    this._slbDnsPaddingToServerRemoved = value;
  }
  public resetSlbDnsPaddingToServerRemoved() {
    this._slbDnsPaddingToServerRemoved = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slbDnsPaddingToServerRemovedInput() {
    return this._slbDnsPaddingToServerRemoved;
  }

  // slb_dns_server_ssl_succ - computed: false, optional: true, required: false
  private _slbDnsServerSslSucc?: number; 
  public get slbDnsServerSslSucc() {
    return this.getNumberAttribute('slb_dns_server_ssl_succ');
  }
  public set slbDnsServerSslSucc(value: number) {
    this._slbDnsServerSslSucc = value;
  }
  public resetSlbDnsServerSslSucc() {
    this._slbDnsServerSslSucc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slbDnsServerSslSuccInput() {
    return this._slbDnsServerSslSucc;
  }

  // slb_dns_udp_conn - computed: false, optional: true, required: false
  private _slbDnsUdpConn?: number; 
  public get slbDnsUdpConn() {
    return this.getNumberAttribute('slb_dns_udp_conn');
  }
  public set slbDnsUdpConn(value: number) {
    this._slbDnsUdpConn = value;
  }
  public resetSlbDnsUdpConn() {
    this._slbDnsUdpConn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slbDnsUdpConnInput() {
    return this._slbDnsUdpConn;
  }

  // slb_dns_udp_conn_succ - computed: false, optional: true, required: false
  private _slbDnsUdpConnSucc?: number; 
  public get slbDnsUdpConnSucc() {
    return this.getNumberAttribute('slb_dns_udp_conn_succ');
  }
  public set slbDnsUdpConnSucc(value: number) {
    this._slbDnsUdpConnSucc = value;
  }
  public resetSlbDnsUdpConnSucc() {
    this._slbDnsUdpConnSucc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slbDnsUdpConnSuccInput() {
    return this._slbDnsUdpConnSucc;
  }

  // slb_dns_udp_retransmit - computed: false, optional: true, required: false
  private _slbDnsUdpRetransmit?: number; 
  public get slbDnsUdpRetransmit() {
    return this.getNumberAttribute('slb_dns_udp_retransmit');
  }
  public set slbDnsUdpRetransmit(value: number) {
    this._slbDnsUdpRetransmit = value;
  }
  public resetSlbDnsUdpRetransmit() {
    this._slbDnsUdpRetransmit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slbDnsUdpRetransmitInput() {
    return this._slbDnsUdpRetransmit;
  }

  // slb_dns_udp_retransmit_fail - computed: false, optional: true, required: false
  private _slbDnsUdpRetransmitFail?: number; 
  public get slbDnsUdpRetransmitFail() {
    return this.getNumberAttribute('slb_dns_udp_retransmit_fail');
  }
  public set slbDnsUdpRetransmitFail(value: number) {
    this._slbDnsUdpRetransmitFail = value;
  }
  public resetSlbDnsUdpRetransmitFail() {
    this._slbDnsUdpRetransmitFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slbDnsUdpRetransmitFailInput() {
    return this._slbDnsUdpRetransmitFail;
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

  // total_filter_drop - computed: false, optional: true, required: false
  private _totalFilterDrop?: number; 
  public get totalFilterDrop() {
    return this.getNumberAttribute('total_filter_drop');
  }
  public set totalFilterDrop(value: number) {
    this._totalFilterDrop = value;
  }
  public resetTotalFilterDrop() {
    this._totalFilterDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalFilterDropInput() {
    return this._totalFilterDrop;
  }

  // total_max_query_len_drop - computed: false, optional: true, required: false
  private _totalMaxQueryLenDrop?: number; 
  public get totalMaxQueryLenDrop() {
    return this.getNumberAttribute('total_max_query_len_drop');
  }
  public set totalMaxQueryLenDrop(value: number) {
    this._totalMaxQueryLenDrop = value;
  }
  public resetTotalMaxQueryLenDrop() {
    this._totalMaxQueryLenDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalMaxQueryLenDropInput() {
    return this._totalMaxQueryLenDrop;
  }

  // total_mf_dns_pkt - computed: false, optional: true, required: false
  private _totalMfDnsPkt?: number; 
  public get totalMfDnsPkt() {
    return this.getNumberAttribute('total_mf_dns_pkt');
  }
  public set totalMfDnsPkt(value: number) {
    this._totalMfDnsPkt = value;
  }
  public resetTotalMfDnsPkt() {
    this._totalMfDnsPkt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalMfDnsPktInput() {
    return this._totalMfDnsPkt;
  }

  // total_mf_dns_pkt_detect - computed: false, optional: true, required: false
  private _totalMfDnsPktDetect?: number; 
  public get totalMfDnsPktDetect() {
    return this.getNumberAttribute('total_mf_dns_pkt_detect');
  }
  public set totalMfDnsPktDetect(value: number) {
    this._totalMfDnsPktDetect = value;
  }
  public resetTotalMfDnsPktDetect() {
    this._totalMfDnsPktDetect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalMfDnsPktDetectInput() {
    return this._totalMfDnsPktDetect;
  }

  // type_a_query - computed: false, optional: true, required: false
  private _typeAQuery?: number; 
  public get typeAQuery() {
    return this.getNumberAttribute('type_a_query');
  }
  public set typeAQuery(value: number) {
    this._typeAQuery = value;
  }
  public resetTypeAQuery() {
    this._typeAQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeAQueryInput() {
    return this._typeAQuery;
  }

  // type_aaaa_query - computed: false, optional: true, required: false
  private _typeAaaaQuery?: number; 
  public get typeAaaaQuery() {
    return this.getNumberAttribute('type_aaaa_query');
  }
  public set typeAaaaQuery(value: number) {
    this._typeAaaaQuery = value;
  }
  public resetTypeAaaaQuery() {
    this._typeAaaaQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeAaaaQueryInput() {
    return this._typeAaaaQuery;
  }

  // type_any_query - computed: false, optional: true, required: false
  private _typeAnyQuery?: number; 
  public get typeAnyQuery() {
    return this.getNumberAttribute('type_any_query');
  }
  public set typeAnyQuery(value: number) {
    this._typeAnyQuery = value;
  }
  public resetTypeAnyQuery() {
    this._typeAnyQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeAnyQueryInput() {
    return this._typeAnyQuery;
  }

  // type_axfr_query - computed: false, optional: true, required: false
  private _typeAxfrQuery?: number; 
  public get typeAxfrQuery() {
    return this.getNumberAttribute('type_axfr_query');
  }
  public set typeAxfrQuery(value: number) {
    this._typeAxfrQuery = value;
  }
  public resetTypeAxfrQuery() {
    this._typeAxfrQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeAxfrQueryInput() {
    return this._typeAxfrQuery;
  }

  // type_caa_query - computed: false, optional: true, required: false
  private _typeCaaQuery?: number; 
  public get typeCaaQuery() {
    return this.getNumberAttribute('type_caa_query');
  }
  public set typeCaaQuery(value: number) {
    this._typeCaaQuery = value;
  }
  public resetTypeCaaQuery() {
    this._typeCaaQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeCaaQueryInput() {
    return this._typeCaaQuery;
  }

  // type_cert_query - computed: false, optional: true, required: false
  private _typeCertQuery?: number; 
  public get typeCertQuery() {
    return this.getNumberAttribute('type_cert_query');
  }
  public set typeCertQuery(value: number) {
    this._typeCertQuery = value;
  }
  public resetTypeCertQuery() {
    this._typeCertQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeCertQueryInput() {
    return this._typeCertQuery;
  }

  // type_chain_query - computed: false, optional: true, required: false
  private _typeChainQuery?: number; 
  public get typeChainQuery() {
    return this.getNumberAttribute('type_chain_query');
  }
  public set typeChainQuery(value: number) {
    this._typeChainQuery = value;
  }
  public resetTypeChainQuery() {
    this._typeChainQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeChainQueryInput() {
    return this._typeChainQuery;
  }

  // type_cname_query - computed: false, optional: true, required: false
  private _typeCnameQuery?: number; 
  public get typeCnameQuery() {
    return this.getNumberAttribute('type_cname_query');
  }
  public set typeCnameQuery(value: number) {
    this._typeCnameQuery = value;
  }
  public resetTypeCnameQuery() {
    this._typeCnameQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeCnameQueryInput() {
    return this._typeCnameQuery;
  }

  // type_cookie_query - computed: false, optional: true, required: false
  private _typeCookieQuery?: number; 
  public get typeCookieQuery() {
    return this.getNumberAttribute('type_cookie_query');
  }
  public set typeCookieQuery(value: number) {
    this._typeCookieQuery = value;
  }
  public resetTypeCookieQuery() {
    this._typeCookieQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeCookieQueryInput() {
    return this._typeCookieQuery;
  }

  // type_dau_query - computed: false, optional: true, required: false
  private _typeDauQuery?: number; 
  public get typeDauQuery() {
    return this.getNumberAttribute('type_dau_query');
  }
  public set typeDauQuery(value: number) {
    this._typeDauQuery = value;
  }
  public resetTypeDauQuery() {
    this._typeDauQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeDauQueryInput() {
    return this._typeDauQuery;
  }

  // type_dnskey_query - computed: false, optional: true, required: false
  private _typeDnskeyQuery?: number; 
  public get typeDnskeyQuery() {
    return this.getNumberAttribute('type_dnskey_query');
  }
  public set typeDnskeyQuery(value: number) {
    this._typeDnskeyQuery = value;
  }
  public resetTypeDnskeyQuery() {
    this._typeDnskeyQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeDnskeyQueryInput() {
    return this._typeDnskeyQuery;
  }

  // type_ds_query - computed: false, optional: true, required: false
  private _typeDsQuery?: number; 
  public get typeDsQuery() {
    return this.getNumberAttribute('type_ds_query');
  }
  public set typeDsQuery(value: number) {
    this._typeDsQuery = value;
  }
  public resetTypeDsQuery() {
    this._typeDsQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeDsQueryInput() {
    return this._typeDsQuery;
  }

  // type_expire_query - computed: false, optional: true, required: false
  private _typeExpireQuery?: number; 
  public get typeExpireQuery() {
    return this.getNumberAttribute('type_expire_query');
  }
  public set typeExpireQuery(value: number) {
    this._typeExpireQuery = value;
  }
  public resetTypeExpireQuery() {
    this._typeExpireQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeExpireQueryInput() {
    return this._typeExpireQuery;
  }

  // type_https_query - computed: false, optional: true, required: false
  private _typeHttpsQuery?: number; 
  public get typeHttpsQuery() {
    return this.getNumberAttribute('type_https_query');
  }
  public set typeHttpsQuery(value: number) {
    this._typeHttpsQuery = value;
  }
  public resetTypeHttpsQuery() {
    this._typeHttpsQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeHttpsQueryInput() {
    return this._typeHttpsQuery;
  }

  // type_ixfr_query - computed: false, optional: true, required: false
  private _typeIxfrQuery?: number; 
  public get typeIxfrQuery() {
    return this.getNumberAttribute('type_ixfr_query');
  }
  public set typeIxfrQuery(value: number) {
    this._typeIxfrQuery = value;
  }
  public resetTypeIxfrQuery() {
    this._typeIxfrQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeIxfrQueryInput() {
    return this._typeIxfrQuery;
  }

  // type_keepalive_query - computed: false, optional: true, required: false
  private _typeKeepaliveQuery?: number; 
  public get typeKeepaliveQuery() {
    return this.getNumberAttribute('type_keepalive_query');
  }
  public set typeKeepaliveQuery(value: number) {
    this._typeKeepaliveQuery = value;
  }
  public resetTypeKeepaliveQuery() {
    this._typeKeepaliveQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeKeepaliveQueryInput() {
    return this._typeKeepaliveQuery;
  }

  // type_mx_query - computed: false, optional: true, required: false
  private _typeMxQuery?: number; 
  public get typeMxQuery() {
    return this.getNumberAttribute('type_mx_query');
  }
  public set typeMxQuery(value: number) {
    this._typeMxQuery = value;
  }
  public resetTypeMxQuery() {
    this._typeMxQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeMxQueryInput() {
    return this._typeMxQuery;
  }

  // type_n3u_query - computed: false, optional: true, required: false
  private _typeN3UQuery?: number; 
  public get typeN3UQuery() {
    return this.getNumberAttribute('type_n3u_query');
  }
  public set typeN3UQuery(value: number) {
    this._typeN3UQuery = value;
  }
  public resetTypeN3UQuery() {
    this._typeN3UQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeN3UQueryInput() {
    return this._typeN3UQuery;
  }

  // type_naptr_query - computed: false, optional: true, required: false
  private _typeNaptrQuery?: number; 
  public get typeNaptrQuery() {
    return this.getNumberAttribute('type_naptr_query');
  }
  public set typeNaptrQuery(value: number) {
    this._typeNaptrQuery = value;
  }
  public resetTypeNaptrQuery() {
    this._typeNaptrQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeNaptrQueryInput() {
    return this._typeNaptrQuery;
  }

  // type_ns_query - computed: false, optional: true, required: false
  private _typeNsQuery?: number; 
  public get typeNsQuery() {
    return this.getNumberAttribute('type_ns_query');
  }
  public set typeNsQuery(value: number) {
    this._typeNsQuery = value;
  }
  public resetTypeNsQuery() {
    this._typeNsQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeNsQueryInput() {
    return this._typeNsQuery;
  }

  // type_nsid_query - computed: false, optional: true, required: false
  private _typeNsidQuery?: number; 
  public get typeNsidQuery() {
    return this.getNumberAttribute('type_nsid_query');
  }
  public set typeNsidQuery(value: number) {
    this._typeNsidQuery = value;
  }
  public resetTypeNsidQuery() {
    this._typeNsidQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeNsidQueryInput() {
    return this._typeNsidQuery;
  }

  // type_other_query - computed: false, optional: true, required: false
  private _typeOtherQuery?: number; 
  public get typeOtherQuery() {
    return this.getNumberAttribute('type_other_query');
  }
  public set typeOtherQuery(value: number) {
    this._typeOtherQuery = value;
  }
  public resetTypeOtherQuery() {
    this._typeOtherQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeOtherQueryInput() {
    return this._typeOtherQuery;
  }

  // type_padding_query - computed: false, optional: true, required: false
  private _typePaddingQuery?: number; 
  public get typePaddingQuery() {
    return this.getNumberAttribute('type_padding_query');
  }
  public set typePaddingQuery(value: number) {
    this._typePaddingQuery = value;
  }
  public resetTypePaddingQuery() {
    this._typePaddingQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typePaddingQueryInput() {
    return this._typePaddingQuery;
  }

  // type_ptr_query - computed: false, optional: true, required: false
  private _typePtrQuery?: number; 
  public get typePtrQuery() {
    return this.getNumberAttribute('type_ptr_query');
  }
  public set typePtrQuery(value: number) {
    this._typePtrQuery = value;
  }
  public resetTypePtrQuery() {
    this._typePtrQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typePtrQueryInput() {
    return this._typePtrQuery;
  }

  // type_rrsig_query - computed: false, optional: true, required: false
  private _typeRrsigQuery?: number; 
  public get typeRrsigQuery() {
    return this.getNumberAttribute('type_rrsig_query');
  }
  public set typeRrsigQuery(value: number) {
    this._typeRrsigQuery = value;
  }
  public resetTypeRrsigQuery() {
    this._typeRrsigQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeRrsigQueryInput() {
    return this._typeRrsigQuery;
  }

  // type_soa_query - computed: false, optional: true, required: false
  private _typeSoaQuery?: number; 
  public get typeSoaQuery() {
    return this.getNumberAttribute('type_soa_query');
  }
  public set typeSoaQuery(value: number) {
    this._typeSoaQuery = value;
  }
  public resetTypeSoaQuery() {
    this._typeSoaQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeSoaQueryInput() {
    return this._typeSoaQuery;
  }

  // type_srv_query - computed: false, optional: true, required: false
  private _typeSrvQuery?: number; 
  public get typeSrvQuery() {
    return this.getNumberAttribute('type_srv_query');
  }
  public set typeSrvQuery(value: number) {
    this._typeSrvQuery = value;
  }
  public resetTypeSrvQuery() {
    this._typeSrvQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeSrvQueryInput() {
    return this._typeSrvQuery;
  }

  // type_tsig_query - computed: false, optional: true, required: false
  private _typeTsigQuery?: number; 
  public get typeTsigQuery() {
    return this.getNumberAttribute('type_tsig_query');
  }
  public set typeTsigQuery(value: number) {
    this._typeTsigQuery = value;
  }
  public resetTypeTsigQuery() {
    this._typeTsigQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeTsigQueryInput() {
    return this._typeTsigQuery;
  }

  // type_txt_query - computed: false, optional: true, required: false
  private _typeTxtQuery?: number; 
  public get typeTxtQuery() {
    return this.getNumberAttribute('type_txt_query');
  }
  public set typeTxtQuery(value: number) {
    this._typeTxtQuery = value;
  }
  public resetTypeTxtQuery() {
    this._typeTxtQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeTxtQueryInput() {
    return this._typeTxtQuery;
  }
}
export interface SlbVirtualServerPortStatsDnsVportStats {
  /**
  * dns_vport block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#dns_vport SlbVirtualServerPortStatsDnsVport#dns_vport}
  */
  readonly dnsVport?: SlbVirtualServerPortStatsDnsVportStatsDnsVport;
}

export function slbVirtualServerPortStatsDnsVportStatsToTerraform(struct?: SlbVirtualServerPortStatsDnsVportStatsOutputReference | SlbVirtualServerPortStatsDnsVportStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_vport: slbVirtualServerPortStatsDnsVportStatsDnsVportToTerraform(struct!.dnsVport),
  }
}


export function slbVirtualServerPortStatsDnsVportStatsToHclTerraform(struct?: SlbVirtualServerPortStatsDnsVportStatsOutputReference | SlbVirtualServerPortStatsDnsVportStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns_vport: {
      value: slbVirtualServerPortStatsDnsVportStatsDnsVportToHclTerraform(struct!.dnsVport),
      isBlock: true,
      type: "list",
      storageClassType: "SlbVirtualServerPortStatsDnsVportStatsDnsVportList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbVirtualServerPortStatsDnsVportStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SlbVirtualServerPortStatsDnsVportStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsVport?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsVport = this._dnsVport?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbVirtualServerPortStatsDnsVportStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dnsVport.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dnsVport.internalValue = value.dnsVport;
    }
  }

  // dns_vport - computed: false, optional: true, required: false
  private _dnsVport = new SlbVirtualServerPortStatsDnsVportStatsDnsVportOutputReference(this, "dns_vport");
  public get dnsVport() {
    return this._dnsVport;
  }
  public putDnsVport(value: SlbVirtualServerPortStatsDnsVportStatsDnsVport) {
    this._dnsVport.internalValue = value;
  }
  public resetDnsVport() {
    this._dnsVport.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsVportInput() {
    return this._dnsVport.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport thunder_slb_virtual_server_port_stats_dns_vport}
*/
export class SlbVirtualServerPortStatsDnsVport extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_virtual_server_port_stats_dns_vport";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SlbVirtualServerPortStatsDnsVport resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SlbVirtualServerPortStatsDnsVport to import
  * @param importFromId The id of the existing SlbVirtualServerPortStatsDnsVport that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SlbVirtualServerPortStatsDnsVport to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_virtual_server_port_stats_dns_vport", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_dns_vport thunder_slb_virtual_server_port_stats_dns_vport} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SlbVirtualServerPortStatsDnsVportConfig
  */
  public constructor(scope: Construct, id: string, config: SlbVirtualServerPortStatsDnsVportConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_virtual_server_port_stats_dns_vport',
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
  private _stats = new SlbVirtualServerPortStatsDnsVportStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: SlbVirtualServerPortStatsDnsVportStats) {
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
      stats: slbVirtualServerPortStatsDnsVportStatsToTerraform(this._stats.internalValue),
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
        value: slbVirtualServerPortStatsDnsVportStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbVirtualServerPortStatsDnsVportStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
