// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SlbVirtualServerPortStatsHttpVportConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#id SlbVirtualServerPortStatsHttpVport#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#port_number SlbVirtualServerPortStatsHttpVport#port_number}
  */
  readonly portNumber: number;
  /**
  * 'tcp': TCP LB service; 'udp': UDP Port; 'others': for no tcp/udp protocol, do IP load balancing; 'diameter': diameter port; 'dns-tcp': DNS service over TCP; 'dns-udp': DNS service over UDP; 'fast-http': Fast HTTP Port; 'fix': FIX Port; 'ftp': File Transfer Protocol Port; 'ftp-proxy': ftp proxy port; 'http': HTTP Port; 'https': HTTPS port; 'imap': imap proxy port; 'mlb': Message based load balancing; 'mms': Microsoft Multimedia Service Port; 'mysql': mssql port; 'mssql': mssql; 'pop3': pop3 proxy port; 'radius': RADIUS Port; 'rtsp': Real Time Streaming Protocol Port; 'sip': Session initiation protocol over UDP; 'sip-tcp': Session initiation protocol over TCP; 'sips': Session initiation protocol over TLS; 'smpp-tcp': SMPP service over TCP; 'spdy': spdy port; 'spdys': spdys port; 'smtp': SMTP Port; 'mqtt': MQTT Port; 'mqtts': MQTTS Port; 'ssl-proxy': Generic SSL proxy; 'ssli': SSL insight; 'ssh': SSH Port; 'tcp-proxy': Generic TCP proxy; 'tftp': TFTP Port; 'fast-fix': Fast FIX port; 'http-over-quic': HTTP3-over-quic port;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#protocol SlbVirtualServerPortStatsHttpVport#protocol}
  */
  readonly protocol: string;
  /**
  * Virtual_server_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#virtual_server_name SlbVirtualServerPortStatsHttpVport#virtual_server_name}
  */
  readonly virtualServerName: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#stats SlbVirtualServerPortStatsHttpVport#stats}
  */
  readonly stats?: SlbVirtualServerPortStatsHttpVportStats;
}
export interface SlbVirtualServerPortStatsHttpVportStatsHttpVport {
  /**
  * Chunk less than equal to 1K
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#chunk_sz_1k SlbVirtualServerPortStatsHttpVport#chunk_sz_1k}
  */
  readonly chunkSz1K?: number;
  /**
  * Chunk less than equal to 2K
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#chunk_sz_2k SlbVirtualServerPortStatsHttpVport#chunk_sz_2k}
  */
  readonly chunkSz2K?: number;
  /**
  * Chunk less than equal to 4K
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#chunk_sz_4k SlbVirtualServerPortStatsHttpVport#chunk_sz_4k}
  */
  readonly chunkSz4K?: number;
  /**
  * Chunk less than equal to 512
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#chunk_sz_512 SlbVirtualServerPortStatsHttpVport#chunk_sz_512}
  */
  readonly chunkSz512?: number;
  /**
  * Chunk greater than 4K
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#chunk_sz_gt_4k SlbVirtualServerPortStatsHttpVport#chunk_sz_gt_4k}
  */
  readonly chunkSzGt4K?: number;
  /**
  * Current number of HTTP/2 connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#curr_http2_conn SlbVirtualServerPortStatsHttpVport#curr_http2_conn}
  */
  readonly currHttp2Conn?: number;
  /**
  * DoH DNS Malformed Query
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#doh_dns_malformed_query SlbVirtualServerPortStatsHttpVport#doh_dns_malformed_query}
  */
  readonly dohDnsMalformedQuery?: number;
  /**
  * DoH Query type A
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#doh_dns_query_type_a SlbVirtualServerPortStatsHttpVport#doh_dns_query_type_a}
  */
  readonly dohDnsQueryTypeA?: number;
  /**
  * DoH Query type AAAA
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#doh_dns_query_type_aaaa SlbVirtualServerPortStatsHttpVport#doh_dns_query_type_aaaa}
  */
  readonly dohDnsQueryTypeAaaa?: number;
  /**
  * DoH Query type ANY
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#doh_dns_query_type_any SlbVirtualServerPortStatsHttpVport#doh_dns_query_type_any}
  */
  readonly dohDnsQueryTypeAny?: number;
  /**
  * DoH Query type CNAME
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#doh_dns_query_type_cname SlbVirtualServerPortStatsHttpVport#doh_dns_query_type_cname}
  */
  readonly dohDnsQueryTypeCname?: number;
  /**
  * DoH Query type MX
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#doh_dns_query_type_mx SlbVirtualServerPortStatsHttpVport#doh_dns_query_type_mx}
  */
  readonly dohDnsQueryTypeMx?: number;
  /**
  * DoH Query type NS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#doh_dns_query_type_ns SlbVirtualServerPortStatsHttpVport#doh_dns_query_type_ns}
  */
  readonly dohDnsQueryTypeNs?: number;
  /**
  * DoH Query type Others
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#doh_dns_query_type_others SlbVirtualServerPortStatsHttpVport#doh_dns_query_type_others}
  */
  readonly dohDnsQueryTypeOthers?: number;
  /**
  * DoH Query type SOA
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#doh_dns_query_type_soa SlbVirtualServerPortStatsHttpVport#doh_dns_query_type_soa}
  */
  readonly dohDnsQueryTypeSoa?: number;
  /**
  * DoH Query type SRV
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#doh_dns_query_type_srv SlbVirtualServerPortStatsHttpVport#doh_dns_query_type_srv}
  */
  readonly dohDnsQueryTypeSrv?: number;
  /**
  * DoH DNS Response rcode ERR_FORMAT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#doh_dns_resp_rcode_err_format SlbVirtualServerPortStatsHttpVport#doh_dns_resp_rcode_err_format}
  */
  readonly dohDnsRespRcodeErrFormat?: number;
  /**
  * DoH DNS Response rcode ERR_NAME
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#doh_dns_resp_rcode_err_name SlbVirtualServerPortStatsHttpVport#doh_dns_resp_rcode_err_name}
  */
  readonly dohDnsRespRcodeErrName?: number;
  /**
  * DoH DNS Response rcode ERR_SERVER
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#doh_dns_resp_rcode_err_server SlbVirtualServerPortStatsHttpVport#doh_dns_resp_rcode_err_server}
  */
  readonly dohDnsRespRcodeErrServer?: number;
  /**
  * DoH DNS Response rcode ERR_TYPE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#doh_dns_resp_rcode_err_type SlbVirtualServerPortStatsHttpVport#doh_dns_resp_rcode_err_type}
  */
  readonly dohDnsRespRcodeErrType?: number;
  /**
  * DoH DNS Response rcode NOTAUTH
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#doh_dns_resp_rcode_notauth SlbVirtualServerPortStatsHttpVport#doh_dns_resp_rcode_notauth}
  */
  readonly dohDnsRespRcodeNotauth?: number;
  /**
  * DoH DNS Response rcode NOTZONE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#doh_dns_resp_rcode_notzone SlbVirtualServerPortStatsHttpVport#doh_dns_resp_rcode_notzone}
  */
  readonly dohDnsRespRcodeNotzone?: number;
  /**
  * DoH DNS Response rcode NXRRSET
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#doh_dns_resp_rcode_nxrrset SlbVirtualServerPortStatsHttpVport#doh_dns_resp_rcode_nxrrset}
  */
  readonly dohDnsRespRcodeNxrrset?: number;
  /**
  * DoH DNS Response rcode OTHER
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#doh_dns_resp_rcode_other SlbVirtualServerPortStatsHttpVport#doh_dns_resp_rcode_other}
  */
  readonly dohDnsRespRcodeOther?: number;
  /**
  * DoH DNS Response rcode REFUSE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#doh_dns_resp_rcode_refuse SlbVirtualServerPortStatsHttpVport#doh_dns_resp_rcode_refuse}
  */
  readonly dohDnsRespRcodeRefuse?: number;
  /**
  * DoH DNS Response rcode YXDOMAIN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#doh_dns_resp_rcode_yxdomain SlbVirtualServerPortStatsHttpVport#doh_dns_resp_rcode_yxdomain}
  */
  readonly dohDnsRespRcodeYxdomain?: number;
  /**
  * DoH DNS Response rcode YXRRSET
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#doh_dns_resp_rcode_yxrrset SlbVirtualServerPortStatsHttpVport#doh_dns_resp_rcode_yxrrset}
  */
  readonly dohDnsRespRcodeYxrrset?: number;
  /**
  * DoH GET base64url decode failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#doh_get_base64_decode_failed SlbVirtualServerPortStatsHttpVport#doh_get_base64_decode_failed}
  */
  readonly dohGetBase64DecodeFailed?: number;
  /**
  * DoH GET dns arg not found in uri
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#doh_get_dns_arg_failed SlbVirtualServerPortStatsHttpVport#doh_get_dns_arg_failed}
  */
  readonly dohGetDnsArgFailed?: number;
  /**
  * DoH GET URI too long
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#doh_get_uri_too_long SlbVirtualServerPortStatsHttpVport#doh_get_uri_too_long}
  */
  readonly dohGetUriTooLong?: number;
  /**
  * DoH Memory alloc failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#doh_malloc_fail SlbVirtualServerPortStatsHttpVport#doh_malloc_fail}
  */
  readonly dohMallocFail?: number;
  /**
  * DoH Non DoH HTTP request method rcvd
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#doh_non_doh_method SlbVirtualServerPortStatsHttpVport#doh_non_doh_method}
  */
  readonly dohNonDohMethod?: number;
  /**
  * DoH non DoH Requests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#doh_non_doh_req SlbVirtualServerPortStatsHttpVport#doh_non_doh_req}
  */
  readonly dohNonDohReq?: number;
  /**
  * DoH non DoH GET Requests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#doh_non_doh_req_get SlbVirtualServerPortStatsHttpVport#doh_non_doh_req_get}
  */
  readonly dohNonDohReqGet?: number;
  /**
  * DoH non DoH POST Requests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#doh_non_doh_req_post SlbVirtualServerPortStatsHttpVport#doh_non_doh_req_post}
  */
  readonly dohNonDohReqPost?: number;
  /**
  * DoH URI Path not found
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#doh_path_not_found SlbVirtualServerPortStatsHttpVport#doh_path_not_found}
  */
  readonly dohPathNotFound?: number;
  /**
  * DoH POST content-type not found
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#doh_post_content_type_mismatch SlbVirtualServerPortStatsHttpVport#doh_post_content_type_mismatch}
  */
  readonly dohPostContentTypeMismatch?: number;
  /**
  * DoH POST payload extract failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#doh_post_payload_extract_failed SlbVirtualServerPortStatsHttpVport#doh_post_payload_extract_failed}
  */
  readonly dohPostPayloadExtractFailed?: number;
  /**
  * DoH POST payload not found
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#doh_post_payload_not_found SlbVirtualServerPortStatsHttpVport#doh_post_payload_not_found}
  */
  readonly dohPostPayloadNotFound?: number;
  /**
  * DoH POST Payload too large
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#doh_post_payload_too_large SlbVirtualServerPortStatsHttpVport#doh_post_payload_too_large}
  */
  readonly dohPostPayloadTooLarge?: number;
  /**
  * DoH serv Query timed out
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#doh_query_time_out SlbVirtualServerPortStatsHttpVport#doh_query_time_out}
  */
  readonly dohQueryTimeOut?: number;
  /**
  * DoH Requests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#doh_req SlbVirtualServerPortStatsHttpVport#doh_req}
  */
  readonly dohReq?: number;
  /**
  * DoH GET Requests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#doh_req_get SlbVirtualServerPortStatsHttpVport#doh_req_get}
  */
  readonly dohReqGet?: number;
  /**
  * DoH POST Requests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#doh_req_post SlbVirtualServerPortStatsHttpVport#doh_req_post}
  */
  readonly dohReqPost?: number;
  /**
  * DoH Request Send Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#doh_req_send_failed SlbVirtualServerPortStatsHttpVport#doh_req_send_failed}
  */
  readonly dohReqSendFailed?: number;
  /**
  * DoH TCP Retry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#doh_req_tcp_retry SlbVirtualServerPortStatsHttpVport#doh_req_tcp_retry}
  */
  readonly dohReqTcpRetry?: number;
  /**
  * DoH TCP Retry failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#doh_req_tcp_retry_fail SlbVirtualServerPortStatsHttpVport#doh_req_tcp_retry_fail}
  */
  readonly dohReqTcpRetryFail?: number;
  /**
  * DoH UDP Retry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#doh_req_udp_retry SlbVirtualServerPortStatsHttpVport#doh_req_udp_retry}
  */
  readonly dohReqUdpRetry?: number;
  /**
  * DoH UDP Retry failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#doh_req_udp_retry_fail SlbVirtualServerPortStatsHttpVport#doh_req_udp_retry_fail}
  */
  readonly dohReqUdpRetryFail?: number;
  /**
  * DoH Responses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#doh_resp SlbVirtualServerPortStatsHttpVport#doh_resp}
  */
  readonly dohResp?: number;
  /**
  * DoH Resp hdr alloc failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#doh_resp_header_alloc_failed SlbVirtualServerPortStatsHttpVport#doh_resp_header_alloc_failed}
  */
  readonly dohRespHeaderAllocFailed?: number;
  /**
  * DoH Resp queue failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#doh_resp_que_failed SlbVirtualServerPortStatsHttpVport#doh_resp_que_failed}
  */
  readonly dohRespQueFailed?: number;
  /**
  * DoH Response Send Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#doh_resp_send_failed SlbVirtualServerPortStatsHttpVport#doh_resp_send_failed}
  */
  readonly dohRespSendFailed?: number;
  /**
  * DoH Response setup failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#doh_resp_setup_failed SlbVirtualServerPortStatsHttpVport#doh_resp_setup_failed}
  */
  readonly dohRespSetupFailed?: number;
  /**
  * DoH TCP Frags Rcvd
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#doh_resp_tcp_frags SlbVirtualServerPortStatsHttpVport#doh_resp_tcp_frags}
  */
  readonly dohRespTcpFrags?: number;
  /**
  * DoH UDP Frags Rcvd
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#doh_resp_udp_frags SlbVirtualServerPortStatsHttpVport#doh_resp_udp_frags}
  */
  readonly dohRespUdpFrags?: number;
  /**
  * DoH Retry with TCP SG
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#doh_retry_w_tcp SlbVirtualServerPortStatsHttpVport#doh_retry_w_tcp}
  */
  readonly dohRetryWTcp?: number;
  /**
  * DoH Server Select Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#doh_serv_sel_failed SlbVirtualServerPortStatsHttpVport#doh_serv_sel_failed}
  */
  readonly dohServSelFailed?: number;
  /**
  * DoH Source NAT failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#doh_snat_failed SlbVirtualServerPortStatsHttpVport#doh_snat_failed}
  */
  readonly dohSnatFailed?: number;
  /**
  * DoH TC Responses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#doh_tc_resp SlbVirtualServerPortStatsHttpVport#doh_tc_resp}
  */
  readonly dohTcResp?: number;
  /**
  * DoH TCP DNS Requests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#doh_tcp_dns_req SlbVirtualServerPortStatsHttpVport#doh_tcp_dns_req}
  */
  readonly dohTcpDnsReq?: number;
  /**
  * DoH TCP DNS Responses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#doh_tcp_dns_resp SlbVirtualServerPortStatsHttpVport#doh_tcp_dns_resp}
  */
  readonly dohTcpDnsResp?: number;
  /**
  * DoH serv TCP DNS send failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#doh_tcp_send_failed SlbVirtualServerPortStatsHttpVport#doh_tcp_send_failed}
  */
  readonly dohTcpSendFailed?: number;
  /**
  * DoH UDP DNS Requests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#doh_udp_dns_req SlbVirtualServerPortStatsHttpVport#doh_udp_dns_req}
  */
  readonly dohUdpDnsReq?: number;
  /**
  * DoH UDP DNS Responses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#doh_udp_dns_resp SlbVirtualServerPortStatsHttpVport#doh_udp_dns_resp}
  */
  readonly dohUdpDnsResp?: number;
  /**
  * DoH serv UDP DNS send failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#doh_udp_send_failed SlbVirtualServerPortStatsHttpVport#doh_udp_send_failed}
  */
  readonly dohUdpSendFailed?: number;
  /**
  * HTTP Header length too long
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#header_length_long SlbVirtualServerPortStatsHttpVport#header_length_long}
  */
  readonly headerLengthLong?: number;
  /**
  * Bytes in HTTP/2 control frames
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#http2_control_bytes SlbVirtualServerPortStatsHttpVport#http2_control_bytes}
  */
  readonly http2ControlBytes?: number;
  /**
  * Bytes in HTTP/2 data frames
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#http2_data_bytes SlbVirtualServerPortStatsHttpVport#http2_data_bytes}
  */
  readonly http2DataBytes?: number;
  /**
  * GoAway frames received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#http2_goaway_received SlbVirtualServerPortStatsHttpVport#http2_goaway_received}
  */
  readonly http2GoawayReceived?: number;
  /**
  * GoAway frames sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#http2_goaway_sent SlbVirtualServerPortStatsHttpVport#http2_goaway_sent}
  */
  readonly http2GoawaySent?: number;
  /**
  * Bytes in HTTP/2 header frames
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#http2_header_bytes SlbVirtualServerPortStatsHttpVport#http2_header_bytes}
  */
  readonly http2HeaderBytes?: number;
  /**
  * Reset frames received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#http2_reset_received SlbVirtualServerPortStatsHttpVport#http2_reset_received}
  */
  readonly http2ResetReceived?: number;
  /**
  * Reset frames sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#http2_reset_sent SlbVirtualServerPortStatsHttpVport#http2_reset_sent}
  */
  readonly http2ResetSent?: number;
  /**
  * JSI API no auth hdr
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#jsi_api_no_auth_hdr SlbVirtualServerPortStatsHttpVport#jsi_api_no_auth_hdr}
  */
  readonly jsiApiNoAuthHdr?: number;
  /**
  * JSI API no token in auth hdr
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#jsi_api_no_token SlbVirtualServerPortStatsHttpVport#jsi_api_no_token}
  */
  readonly jsiApiNoToken?: number;
  /**
  * JSI API requests (AJAX)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#jsi_api_requests SlbVirtualServerPortStatsHttpVport#jsi_api_requests}
  */
  readonly jsiApiRequests?: number;
  /**
  * JSI API responses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#jsi_api_responses SlbVirtualServerPortStatsHttpVport#jsi_api_responses}
  */
  readonly jsiApiResponses?: number;
  /**
  * JSI hash addition failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#jsi_hash_add_fails SlbVirtualServerPortStatsHttpVport#jsi_hash_add_fails}
  */
  readonly jsiHashAddFails?: number;
  /**
  * JSI hash lookup failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#jsi_hash_lookup_fails SlbVirtualServerPortStatsHttpVport#jsi_hash_lookup_fails}
  */
  readonly jsiHashLookupFails?: number;
  /**
  * JSI primary requests (AJAX)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#jsi_pri_requests SlbVirtualServerPortStatsHttpVport#jsi_pri_requests}
  */
  readonly jsiPriRequests?: number;
  /**
  * JSI requests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#jsi_requests SlbVirtualServerPortStatsHttpVport#jsi_requests}
  */
  readonly jsiRequests?: number;
  /**
  * JSI responses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#jsi_responses SlbVirtualServerPortStatsHttpVport#jsi_responses}
  */
  readonly jsiResponses?: number;
  /**
  * JSI skipped - File Inspection not configured
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#jsi_skip_no_fi SlbVirtualServerPortStatsHttpVport#jsi_skip_no_fi}
  */
  readonly jsiSkipNoFi?: number;
  /**
  * JSI skipped - no User-Agent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#jsi_skip_no_ua SlbVirtualServerPortStatsHttpVport#jsi_skip_no_ua}
  */
  readonly jsiSkipNoUa?: number;
  /**
  * JSI skipped - not fromm browser
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#jsi_skip_not_browser SlbVirtualServerPortStatsHttpVport#jsi_skip_not_browser}
  */
  readonly jsiSkipNotBrowser?: number;
  /**
  * Largest number of concurrent HTTP/2 connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#peak_http2_conn SlbVirtualServerPortStatsHttpVport#peak_http2_conn}
  */
  readonly peakHttp2Conn?: number;
  /**
  * Rsp time less than 100m
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#req_100m SlbVirtualServerPortStatsHttpVport#req_100m}
  */
  readonly req100M?: number;
  /**
  * Rsp time less than 100u
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#req_100u SlbVirtualServerPortStatsHttpVport#req_100u}
  */
  readonly req100U?: number;
  /**
  * Rsp time less than 10m
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#req_10m SlbVirtualServerPortStatsHttpVport#req_10m}
  */
  readonly req10M?: number;
  /**
  * Rsp time less than 10u
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#req_10u SlbVirtualServerPortStatsHttpVport#req_10u}
  */
  readonly req10U?: number;
  /**
  * Rsp time less than 1m
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#req_1m SlbVirtualServerPortStatsHttpVport#req_1m}
  */
  readonly req1M?: number;
  /**
  * Rsp time less than 1s
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#req_1s SlbVirtualServerPortStatsHttpVport#req_1s}
  */
  readonly req1S?: number;
  /**
  * Rsp time less than 200m
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#req_200m SlbVirtualServerPortStatsHttpVport#req_200m}
  */
  readonly req200M?: number;
  /**
  * Rsp time less than 200u
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#req_200u SlbVirtualServerPortStatsHttpVport#req_200u}
  */
  readonly req200U?: number;
  /**
  * Rsp time less than 20m
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#req_20m SlbVirtualServerPortStatsHttpVport#req_20m}
  */
  readonly req20M?: number;
  /**
  * Rsp time less than 20u
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#req_20u SlbVirtualServerPortStatsHttpVport#req_20u}
  */
  readonly req20U?: number;
  /**
  * Rsp time less than 2m
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#req_2m SlbVirtualServerPortStatsHttpVport#req_2m}
  */
  readonly req2M?: number;
  /**
  * Rsp time less than 2s
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#req_2s SlbVirtualServerPortStatsHttpVport#req_2s}
  */
  readonly req2S?: number;
  /**
  * Rsp time less than 500m
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#req_500m SlbVirtualServerPortStatsHttpVport#req_500m}
  */
  readonly req500M?: number;
  /**
  * Rsp time less than 500u
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#req_500u SlbVirtualServerPortStatsHttpVport#req_500u}
  */
  readonly req500U?: number;
  /**
  * Rsp time less than 5m
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#req_50m SlbVirtualServerPortStatsHttpVport#req_50m}
  */
  readonly req50M?: number;
  /**
  * Rsp time less than 50u
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#req_50u SlbVirtualServerPortStatsHttpVport#req_50u}
  */
  readonly req50U?: number;
  /**
  * Rsp time less than 5m
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#req_5m SlbVirtualServerPortStatsHttpVport#req_5m}
  */
  readonly req5M?: number;
  /**
  * Rsp time less than 5s
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#req_5s SlbVirtualServerPortStatsHttpVport#req_5s}
  */
  readonly req5S?: number;
  /**
  * Method CONNECT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#req_connect SlbVirtualServerPortStatsHttpVport#req_connect}
  */
  readonly reqConnect?: number;
  /**
  * Req content len
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#req_content_len SlbVirtualServerPortStatsHttpVport#req_content_len}
  */
  readonly reqContentLen?: number;
  /**
  * Method DELETE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#req_delete SlbVirtualServerPortStatsHttpVport#req_delete}
  */
  readonly reqDelete?: number;
  /**
  * Method GET
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#req_get SlbVirtualServerPortStatsHttpVport#req_get}
  */
  readonly reqGet?: number;
  /**
  * Method HEAD
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#req_head SlbVirtualServerPortStatsHttpVport#req_head}
  */
  readonly reqHead?: number;
  /**
  * Method OPTIONS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#req_options SlbVirtualServerPortStatsHttpVport#req_options}
  */
  readonly reqOptions?: number;
  /**
  * Rsp time greater than equal to 5s
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#req_over_5s SlbVirtualServerPortStatsHttpVport#req_over_5s}
  */
  readonly reqOver5S?: number;
  /**
  * Method POST
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#req_post SlbVirtualServerPortStatsHttpVport#req_post}
  */
  readonly reqPost?: number;
  /**
  * Method PUT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#req_put SlbVirtualServerPortStatsHttpVport#req_put}
  */
  readonly reqPut?: number;
  /**
  * Req less than equal to 16K
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#req_sz_16k SlbVirtualServerPortStatsHttpVport#req_sz_16k}
  */
  readonly reqSz16K?: number;
  /**
  * Req less than equal to 1K
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#req_sz_1k SlbVirtualServerPortStatsHttpVport#req_sz_1k}
  */
  readonly reqSz1K?: number;
  /**
  * Req less than equal to 256K
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#req_sz_256k SlbVirtualServerPortStatsHttpVport#req_sz_256k}
  */
  readonly reqSz256K?: number;
  /**
  * Req less than equal to 2K
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#req_sz_2k SlbVirtualServerPortStatsHttpVport#req_sz_2k}
  */
  readonly reqSz2K?: number;
  /**
  * Req less than equal to 32K
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#req_sz_32k SlbVirtualServerPortStatsHttpVport#req_sz_32k}
  */
  readonly reqSz32K?: number;
  /**
  * Req less than equal to 4K
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#req_sz_4k SlbVirtualServerPortStatsHttpVport#req_sz_4k}
  */
  readonly reqSz4K?: number;
  /**
  * Req less than equal to 64K
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#req_sz_64k SlbVirtualServerPortStatsHttpVport#req_sz_64k}
  */
  readonly reqSz64K?: number;
  /**
  * Req less than equal to 8K
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#req_sz_8k SlbVirtualServerPortStatsHttpVport#req_sz_8k}
  */
  readonly reqSz8K?: number;
  /**
  * Req greater than 256K
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#req_sz_gt_256k SlbVirtualServerPortStatsHttpVport#req_sz_gt_256k}
  */
  readonly reqSzGt256K?: number;
  /**
  * Method TRACE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#req_trace SlbVirtualServerPortStatsHttpVport#req_trace}
  */
  readonly reqTrace?: number;
  /**
  * Method TRACK
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#req_track SlbVirtualServerPortStatsHttpVport#req_track}
  */
  readonly reqTrack?: number;
  /**
  * Method UNKNOWN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#req_unknown SlbVirtualServerPortStatsHttpVport#req_unknown}
  */
  readonly reqUnknown?: number;
  /**
  * Resp chunk encoding
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#rsp_chunk SlbVirtualServerPortStatsHttpVport#rsp_chunk}
  */
  readonly rspChunk?: number;
  /**
  * Resp less than equal to 16K
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#rsp_sz_16k SlbVirtualServerPortStatsHttpVport#rsp_sz_16k}
  */
  readonly rspSz16K?: number;
  /**
  * Resp less than equal to 1K
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#rsp_sz_1k SlbVirtualServerPortStatsHttpVport#rsp_sz_1k}
  */
  readonly rspSz1K?: number;
  /**
  * Resp less than equal to 256K
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#rsp_sz_256k SlbVirtualServerPortStatsHttpVport#rsp_sz_256k}
  */
  readonly rspSz256K?: number;
  /**
  * Resp less than equal to 2K
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#rsp_sz_2k SlbVirtualServerPortStatsHttpVport#rsp_sz_2k}
  */
  readonly rspSz2K?: number;
  /**
  * Resp less than equal to 32K
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#rsp_sz_32k SlbVirtualServerPortStatsHttpVport#rsp_sz_32k}
  */
  readonly rspSz32K?: number;
  /**
  * Resp less than equal to 4K
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#rsp_sz_4k SlbVirtualServerPortStatsHttpVport#rsp_sz_4k}
  */
  readonly rspSz4K?: number;
  /**
  * Resp less than equal to 64K
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#rsp_sz_64k SlbVirtualServerPortStatsHttpVport#rsp_sz_64k}
  */
  readonly rspSz64K?: number;
  /**
  * Resp less than equal to 8K
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#rsp_sz_8k SlbVirtualServerPortStatsHttpVport#rsp_sz_8k}
  */
  readonly rspSz8K?: number;
  /**
  * Resp greater than 256K
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#rsp_sz_gt_256k SlbVirtualServerPortStatsHttpVport#rsp_sz_gt_256k}
  */
  readonly rspSzGt256K?: number;
  /**
  * Status code 100
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#status_100 SlbVirtualServerPortStatsHttpVport#status_100}
  */
  readonly status100?: number;
  /**
  * Status code 101
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#status_101 SlbVirtualServerPortStatsHttpVport#status_101}
  */
  readonly status101?: number;
  /**
  * Status code 102
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#status_102 SlbVirtualServerPortStatsHttpVport#status_102}
  */
  readonly status102?: number;
  /**
  * Status code 103
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#status_103 SlbVirtualServerPortStatsHttpVport#status_103}
  */
  readonly status103?: number;
  /**
  * status code 1XX
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#status_1xx SlbVirtualServerPortStatsHttpVport#status_1xx}
  */
  readonly status1Xx?: number;
  /**
  * Status code 200
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#status_200 SlbVirtualServerPortStatsHttpVport#status_200}
  */
  readonly status200?: number;
  /**
  * Status code 201
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#status_201 SlbVirtualServerPortStatsHttpVport#status_201}
  */
  readonly status201?: number;
  /**
  * Status code 202
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#status_202 SlbVirtualServerPortStatsHttpVport#status_202}
  */
  readonly status202?: number;
  /**
  * Status code 203
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#status_203 SlbVirtualServerPortStatsHttpVport#status_203}
  */
  readonly status203?: number;
  /**
  * Status code 204
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#status_204 SlbVirtualServerPortStatsHttpVport#status_204}
  */
  readonly status204?: number;
  /**
  * Status code 205
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#status_205 SlbVirtualServerPortStatsHttpVport#status_205}
  */
  readonly status205?: number;
  /**
  * Status code 206
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#status_206 SlbVirtualServerPortStatsHttpVport#status_206}
  */
  readonly status206?: number;
  /**
  * Status code 207
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#status_207 SlbVirtualServerPortStatsHttpVport#status_207}
  */
  readonly status207?: number;
  /**
  * status code 2XX
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#status_2xx SlbVirtualServerPortStatsHttpVport#status_2xx}
  */
  readonly status2Xx?: number;
  /**
  * Status code 300
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#status_300 SlbVirtualServerPortStatsHttpVport#status_300}
  */
  readonly status300?: number;
  /**
  * Status code 301
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#status_301 SlbVirtualServerPortStatsHttpVport#status_301}
  */
  readonly status301?: number;
  /**
  * Status code 302
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#status_302 SlbVirtualServerPortStatsHttpVport#status_302}
  */
  readonly status302?: number;
  /**
  * Status code 303
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#status_303 SlbVirtualServerPortStatsHttpVport#status_303}
  */
  readonly status303?: number;
  /**
  * Status code 304
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#status_304 SlbVirtualServerPortStatsHttpVport#status_304}
  */
  readonly status304?: number;
  /**
  * Status code 305
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#status_305 SlbVirtualServerPortStatsHttpVport#status_305}
  */
  readonly status305?: number;
  /**
  * Status code 306
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#status_306 SlbVirtualServerPortStatsHttpVport#status_306}
  */
  readonly status306?: number;
  /**
  * Status code 307
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#status_307 SlbVirtualServerPortStatsHttpVport#status_307}
  */
  readonly status307?: number;
  /**
  * status code 3XX
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#status_3xx SlbVirtualServerPortStatsHttpVport#status_3xx}
  */
  readonly status3Xx?: number;
  /**
  * Status code 400
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#status_400 SlbVirtualServerPortStatsHttpVport#status_400}
  */
  readonly status400?: number;
  /**
  * Status code 401
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#status_401 SlbVirtualServerPortStatsHttpVport#status_401}
  */
  readonly status401?: number;
  /**
  * Status code 402
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#status_402 SlbVirtualServerPortStatsHttpVport#status_402}
  */
  readonly status402?: number;
  /**
  * Status code 403
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#status_403 SlbVirtualServerPortStatsHttpVport#status_403}
  */
  readonly status403?: number;
  /**
  * Status code 404
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#status_404 SlbVirtualServerPortStatsHttpVport#status_404}
  */
  readonly status404?: number;
  /**
  * Status code 405
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#status_405 SlbVirtualServerPortStatsHttpVport#status_405}
  */
  readonly status405?: number;
  /**
  * Status code 406
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#status_406 SlbVirtualServerPortStatsHttpVport#status_406}
  */
  readonly status406?: number;
  /**
  * Status code 407
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#status_407 SlbVirtualServerPortStatsHttpVport#status_407}
  */
  readonly status407?: number;
  /**
  * Status code 408
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#status_408 SlbVirtualServerPortStatsHttpVport#status_408}
  */
  readonly status408?: number;
  /**
  * Status code 409
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#status_409 SlbVirtualServerPortStatsHttpVport#status_409}
  */
  readonly status409?: number;
  /**
  * Status code 410
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#status_410 SlbVirtualServerPortStatsHttpVport#status_410}
  */
  readonly status410?: number;
  /**
  * Status code 411
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#status_411 SlbVirtualServerPortStatsHttpVport#status_411}
  */
  readonly status411?: number;
  /**
  * Status code 412
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#status_412 SlbVirtualServerPortStatsHttpVport#status_412}
  */
  readonly status412?: number;
  /**
  * Status code 413
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#status_413 SlbVirtualServerPortStatsHttpVport#status_413}
  */
  readonly status413?: number;
  /**
  * Status code 414
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#status_414 SlbVirtualServerPortStatsHttpVport#status_414}
  */
  readonly status414?: number;
  /**
  * Status code 415
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#status_415 SlbVirtualServerPortStatsHttpVport#status_415}
  */
  readonly status415?: number;
  /**
  * Status code 416
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#status_416 SlbVirtualServerPortStatsHttpVport#status_416}
  */
  readonly status416?: number;
  /**
  * Status code 417
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#status_417 SlbVirtualServerPortStatsHttpVport#status_417}
  */
  readonly status417?: number;
  /**
  * Status code 418
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#status_418 SlbVirtualServerPortStatsHttpVport#status_418}
  */
  readonly status418?: number;
  /**
  * Status code 422
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#status_422 SlbVirtualServerPortStatsHttpVport#status_422}
  */
  readonly status422?: number;
  /**
  * Status code 423
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#status_423 SlbVirtualServerPortStatsHttpVport#status_423}
  */
  readonly status423?: number;
  /**
  * Status code 424
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#status_424 SlbVirtualServerPortStatsHttpVport#status_424}
  */
  readonly status424?: number;
  /**
  * Status code 425
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#status_425 SlbVirtualServerPortStatsHttpVport#status_425}
  */
  readonly status425?: number;
  /**
  * Status code 426
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#status_426 SlbVirtualServerPortStatsHttpVport#status_426}
  */
  readonly status426?: number;
  /**
  * Status code 449
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#status_449 SlbVirtualServerPortStatsHttpVport#status_449}
  */
  readonly status449?: number;
  /**
  * Status code 450
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#status_450 SlbVirtualServerPortStatsHttpVport#status_450}
  */
  readonly status450?: number;
  /**
  * status code 4XX
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#status_4xx SlbVirtualServerPortStatsHttpVport#status_4xx}
  */
  readonly status4Xx?: number;
  /**
  * Status code 500
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#status_500 SlbVirtualServerPortStatsHttpVport#status_500}
  */
  readonly status500?: number;
  /**
  * Status code 501
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#status_501 SlbVirtualServerPortStatsHttpVport#status_501}
  */
  readonly status501?: number;
  /**
  * Status code 502
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#status_502 SlbVirtualServerPortStatsHttpVport#status_502}
  */
  readonly status502?: number;
  /**
  * Status code 503
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#status_503 SlbVirtualServerPortStatsHttpVport#status_503}
  */
  readonly status503?: number;
  /**
  * Status code 504
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#status_504 SlbVirtualServerPortStatsHttpVport#status_504}
  */
  readonly status504?: number;
  /**
  * Status code 504 AX-gen
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#status_504_ax SlbVirtualServerPortStatsHttpVport#status_504_ax}
  */
  readonly status504Ax?: number;
  /**
  * Status code 505
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#status_505 SlbVirtualServerPortStatsHttpVport#status_505}
  */
  readonly status505?: number;
  /**
  * Status code 506
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#status_506 SlbVirtualServerPortStatsHttpVport#status_506}
  */
  readonly status506?: number;
  /**
  * Status code 507
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#status_507 SlbVirtualServerPortStatsHttpVport#status_507}
  */
  readonly status507?: number;
  /**
  * Status code 508
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#status_508 SlbVirtualServerPortStatsHttpVport#status_508}
  */
  readonly status508?: number;
  /**
  * Status code 509
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#status_509 SlbVirtualServerPortStatsHttpVport#status_509}
  */
  readonly status509?: number;
  /**
  * Status code 510
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#status_510 SlbVirtualServerPortStatsHttpVport#status_510}
  */
  readonly status510?: number;
  /**
  * status code 5XX
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#status_5xx SlbVirtualServerPortStatsHttpVport#status_5xx}
  */
  readonly status5Xx?: number;
  /**
  * status code 6XX
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#status_6xx SlbVirtualServerPortStatsHttpVport#status_6xx}
  */
  readonly status6Xx?: number;
  /**
  * Status code unknown
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#status_unknown SlbVirtualServerPortStatsHttpVport#status_unknown}
  */
  readonly statusUnknown?: number;
  /**
  * HTTP/2 streams closed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#stream_closed SlbVirtualServerPortStatsHttpVport#stream_closed}
  */
  readonly streamClosed?: number;
  /**
  * Total bytes in HTTP/2 frames
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#total_http2_bytes SlbVirtualServerPortStatsHttpVport#total_http2_bytes}
  */
  readonly totalHttp2Bytes?: number;
  /**
  * Total number of HTTP/2 connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#total_http2_conn SlbVirtualServerPortStatsHttpVport#total_http2_conn}
  */
  readonly totalHttp2Conn?: number;
  /**
  * Total number of Requests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#total_requests SlbVirtualServerPortStatsHttpVport#total_requests}
  */
  readonly totalRequests?: number;
  /**
  * transaction limited
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#transaction_limited SlbVirtualServerPortStatsHttpVport#transaction_limited}
  */
  readonly transactionLimited?: number;
  /**
  * WS Client Pkts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#ws_client_switch SlbVirtualServerPortStatsHttpVport#ws_client_switch}
  */
  readonly wsClientSwitch?: number;
  /**
  * WS Handshake Req
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#ws_handshake_request SlbVirtualServerPortStatsHttpVport#ws_handshake_request}
  */
  readonly wsHandshakeRequest?: number;
  /**
  * WS Handshake Res
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#ws_handshake_success SlbVirtualServerPortStatsHttpVport#ws_handshake_success}
  */
  readonly wsHandshakeSuccess?: number;
  /**
  * WS Server Pkts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#ws_server_switch SlbVirtualServerPortStatsHttpVport#ws_server_switch}
  */
  readonly wsServerSwitch?: number;
}

export function slbVirtualServerPortStatsHttpVportStatsHttpVportToTerraform(struct?: SlbVirtualServerPortStatsHttpVportStatsHttpVportOutputReference | SlbVirtualServerPortStatsHttpVportStatsHttpVport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    chunk_sz_1k: cdktf.numberToTerraform(struct!.chunkSz1K),
    chunk_sz_2k: cdktf.numberToTerraform(struct!.chunkSz2K),
    chunk_sz_4k: cdktf.numberToTerraform(struct!.chunkSz4K),
    chunk_sz_512: cdktf.numberToTerraform(struct!.chunkSz512),
    chunk_sz_gt_4k: cdktf.numberToTerraform(struct!.chunkSzGt4K),
    curr_http2_conn: cdktf.numberToTerraform(struct!.currHttp2Conn),
    doh_dns_malformed_query: cdktf.numberToTerraform(struct!.dohDnsMalformedQuery),
    doh_dns_query_type_a: cdktf.numberToTerraform(struct!.dohDnsQueryTypeA),
    doh_dns_query_type_aaaa: cdktf.numberToTerraform(struct!.dohDnsQueryTypeAaaa),
    doh_dns_query_type_any: cdktf.numberToTerraform(struct!.dohDnsQueryTypeAny),
    doh_dns_query_type_cname: cdktf.numberToTerraform(struct!.dohDnsQueryTypeCname),
    doh_dns_query_type_mx: cdktf.numberToTerraform(struct!.dohDnsQueryTypeMx),
    doh_dns_query_type_ns: cdktf.numberToTerraform(struct!.dohDnsQueryTypeNs),
    doh_dns_query_type_others: cdktf.numberToTerraform(struct!.dohDnsQueryTypeOthers),
    doh_dns_query_type_soa: cdktf.numberToTerraform(struct!.dohDnsQueryTypeSoa),
    doh_dns_query_type_srv: cdktf.numberToTerraform(struct!.dohDnsQueryTypeSrv),
    doh_dns_resp_rcode_err_format: cdktf.numberToTerraform(struct!.dohDnsRespRcodeErrFormat),
    doh_dns_resp_rcode_err_name: cdktf.numberToTerraform(struct!.dohDnsRespRcodeErrName),
    doh_dns_resp_rcode_err_server: cdktf.numberToTerraform(struct!.dohDnsRespRcodeErrServer),
    doh_dns_resp_rcode_err_type: cdktf.numberToTerraform(struct!.dohDnsRespRcodeErrType),
    doh_dns_resp_rcode_notauth: cdktf.numberToTerraform(struct!.dohDnsRespRcodeNotauth),
    doh_dns_resp_rcode_notzone: cdktf.numberToTerraform(struct!.dohDnsRespRcodeNotzone),
    doh_dns_resp_rcode_nxrrset: cdktf.numberToTerraform(struct!.dohDnsRespRcodeNxrrset),
    doh_dns_resp_rcode_other: cdktf.numberToTerraform(struct!.dohDnsRespRcodeOther),
    doh_dns_resp_rcode_refuse: cdktf.numberToTerraform(struct!.dohDnsRespRcodeRefuse),
    doh_dns_resp_rcode_yxdomain: cdktf.numberToTerraform(struct!.dohDnsRespRcodeYxdomain),
    doh_dns_resp_rcode_yxrrset: cdktf.numberToTerraform(struct!.dohDnsRespRcodeYxrrset),
    doh_get_base64_decode_failed: cdktf.numberToTerraform(struct!.dohGetBase64DecodeFailed),
    doh_get_dns_arg_failed: cdktf.numberToTerraform(struct!.dohGetDnsArgFailed),
    doh_get_uri_too_long: cdktf.numberToTerraform(struct!.dohGetUriTooLong),
    doh_malloc_fail: cdktf.numberToTerraform(struct!.dohMallocFail),
    doh_non_doh_method: cdktf.numberToTerraform(struct!.dohNonDohMethod),
    doh_non_doh_req: cdktf.numberToTerraform(struct!.dohNonDohReq),
    doh_non_doh_req_get: cdktf.numberToTerraform(struct!.dohNonDohReqGet),
    doh_non_doh_req_post: cdktf.numberToTerraform(struct!.dohNonDohReqPost),
    doh_path_not_found: cdktf.numberToTerraform(struct!.dohPathNotFound),
    doh_post_content_type_mismatch: cdktf.numberToTerraform(struct!.dohPostContentTypeMismatch),
    doh_post_payload_extract_failed: cdktf.numberToTerraform(struct!.dohPostPayloadExtractFailed),
    doh_post_payload_not_found: cdktf.numberToTerraform(struct!.dohPostPayloadNotFound),
    doh_post_payload_too_large: cdktf.numberToTerraform(struct!.dohPostPayloadTooLarge),
    doh_query_time_out: cdktf.numberToTerraform(struct!.dohQueryTimeOut),
    doh_req: cdktf.numberToTerraform(struct!.dohReq),
    doh_req_get: cdktf.numberToTerraform(struct!.dohReqGet),
    doh_req_post: cdktf.numberToTerraform(struct!.dohReqPost),
    doh_req_send_failed: cdktf.numberToTerraform(struct!.dohReqSendFailed),
    doh_req_tcp_retry: cdktf.numberToTerraform(struct!.dohReqTcpRetry),
    doh_req_tcp_retry_fail: cdktf.numberToTerraform(struct!.dohReqTcpRetryFail),
    doh_req_udp_retry: cdktf.numberToTerraform(struct!.dohReqUdpRetry),
    doh_req_udp_retry_fail: cdktf.numberToTerraform(struct!.dohReqUdpRetryFail),
    doh_resp: cdktf.numberToTerraform(struct!.dohResp),
    doh_resp_header_alloc_failed: cdktf.numberToTerraform(struct!.dohRespHeaderAllocFailed),
    doh_resp_que_failed: cdktf.numberToTerraform(struct!.dohRespQueFailed),
    doh_resp_send_failed: cdktf.numberToTerraform(struct!.dohRespSendFailed),
    doh_resp_setup_failed: cdktf.numberToTerraform(struct!.dohRespSetupFailed),
    doh_resp_tcp_frags: cdktf.numberToTerraform(struct!.dohRespTcpFrags),
    doh_resp_udp_frags: cdktf.numberToTerraform(struct!.dohRespUdpFrags),
    doh_retry_w_tcp: cdktf.numberToTerraform(struct!.dohRetryWTcp),
    doh_serv_sel_failed: cdktf.numberToTerraform(struct!.dohServSelFailed),
    doh_snat_failed: cdktf.numberToTerraform(struct!.dohSnatFailed),
    doh_tc_resp: cdktf.numberToTerraform(struct!.dohTcResp),
    doh_tcp_dns_req: cdktf.numberToTerraform(struct!.dohTcpDnsReq),
    doh_tcp_dns_resp: cdktf.numberToTerraform(struct!.dohTcpDnsResp),
    doh_tcp_send_failed: cdktf.numberToTerraform(struct!.dohTcpSendFailed),
    doh_udp_dns_req: cdktf.numberToTerraform(struct!.dohUdpDnsReq),
    doh_udp_dns_resp: cdktf.numberToTerraform(struct!.dohUdpDnsResp),
    doh_udp_send_failed: cdktf.numberToTerraform(struct!.dohUdpSendFailed),
    header_length_long: cdktf.numberToTerraform(struct!.headerLengthLong),
    http2_control_bytes: cdktf.numberToTerraform(struct!.http2ControlBytes),
    http2_data_bytes: cdktf.numberToTerraform(struct!.http2DataBytes),
    http2_goaway_received: cdktf.numberToTerraform(struct!.http2GoawayReceived),
    http2_goaway_sent: cdktf.numberToTerraform(struct!.http2GoawaySent),
    http2_header_bytes: cdktf.numberToTerraform(struct!.http2HeaderBytes),
    http2_reset_received: cdktf.numberToTerraform(struct!.http2ResetReceived),
    http2_reset_sent: cdktf.numberToTerraform(struct!.http2ResetSent),
    jsi_api_no_auth_hdr: cdktf.numberToTerraform(struct!.jsiApiNoAuthHdr),
    jsi_api_no_token: cdktf.numberToTerraform(struct!.jsiApiNoToken),
    jsi_api_requests: cdktf.numberToTerraform(struct!.jsiApiRequests),
    jsi_api_responses: cdktf.numberToTerraform(struct!.jsiApiResponses),
    jsi_hash_add_fails: cdktf.numberToTerraform(struct!.jsiHashAddFails),
    jsi_hash_lookup_fails: cdktf.numberToTerraform(struct!.jsiHashLookupFails),
    jsi_pri_requests: cdktf.numberToTerraform(struct!.jsiPriRequests),
    jsi_requests: cdktf.numberToTerraform(struct!.jsiRequests),
    jsi_responses: cdktf.numberToTerraform(struct!.jsiResponses),
    jsi_skip_no_fi: cdktf.numberToTerraform(struct!.jsiSkipNoFi),
    jsi_skip_no_ua: cdktf.numberToTerraform(struct!.jsiSkipNoUa),
    jsi_skip_not_browser: cdktf.numberToTerraform(struct!.jsiSkipNotBrowser),
    peak_http2_conn: cdktf.numberToTerraform(struct!.peakHttp2Conn),
    req_100m: cdktf.numberToTerraform(struct!.req100M),
    req_100u: cdktf.numberToTerraform(struct!.req100U),
    req_10m: cdktf.numberToTerraform(struct!.req10M),
    req_10u: cdktf.numberToTerraform(struct!.req10U),
    req_1m: cdktf.numberToTerraform(struct!.req1M),
    req_1s: cdktf.numberToTerraform(struct!.req1S),
    req_200m: cdktf.numberToTerraform(struct!.req200M),
    req_200u: cdktf.numberToTerraform(struct!.req200U),
    req_20m: cdktf.numberToTerraform(struct!.req20M),
    req_20u: cdktf.numberToTerraform(struct!.req20U),
    req_2m: cdktf.numberToTerraform(struct!.req2M),
    req_2s: cdktf.numberToTerraform(struct!.req2S),
    req_500m: cdktf.numberToTerraform(struct!.req500M),
    req_500u: cdktf.numberToTerraform(struct!.req500U),
    req_50m: cdktf.numberToTerraform(struct!.req50M),
    req_50u: cdktf.numberToTerraform(struct!.req50U),
    req_5m: cdktf.numberToTerraform(struct!.req5M),
    req_5s: cdktf.numberToTerraform(struct!.req5S),
    req_connect: cdktf.numberToTerraform(struct!.reqConnect),
    req_content_len: cdktf.numberToTerraform(struct!.reqContentLen),
    req_delete: cdktf.numberToTerraform(struct!.reqDelete),
    req_get: cdktf.numberToTerraform(struct!.reqGet),
    req_head: cdktf.numberToTerraform(struct!.reqHead),
    req_options: cdktf.numberToTerraform(struct!.reqOptions),
    req_over_5s: cdktf.numberToTerraform(struct!.reqOver5S),
    req_post: cdktf.numberToTerraform(struct!.reqPost),
    req_put: cdktf.numberToTerraform(struct!.reqPut),
    req_sz_16k: cdktf.numberToTerraform(struct!.reqSz16K),
    req_sz_1k: cdktf.numberToTerraform(struct!.reqSz1K),
    req_sz_256k: cdktf.numberToTerraform(struct!.reqSz256K),
    req_sz_2k: cdktf.numberToTerraform(struct!.reqSz2K),
    req_sz_32k: cdktf.numberToTerraform(struct!.reqSz32K),
    req_sz_4k: cdktf.numberToTerraform(struct!.reqSz4K),
    req_sz_64k: cdktf.numberToTerraform(struct!.reqSz64K),
    req_sz_8k: cdktf.numberToTerraform(struct!.reqSz8K),
    req_sz_gt_256k: cdktf.numberToTerraform(struct!.reqSzGt256K),
    req_trace: cdktf.numberToTerraform(struct!.reqTrace),
    req_track: cdktf.numberToTerraform(struct!.reqTrack),
    req_unknown: cdktf.numberToTerraform(struct!.reqUnknown),
    rsp_chunk: cdktf.numberToTerraform(struct!.rspChunk),
    rsp_sz_16k: cdktf.numberToTerraform(struct!.rspSz16K),
    rsp_sz_1k: cdktf.numberToTerraform(struct!.rspSz1K),
    rsp_sz_256k: cdktf.numberToTerraform(struct!.rspSz256K),
    rsp_sz_2k: cdktf.numberToTerraform(struct!.rspSz2K),
    rsp_sz_32k: cdktf.numberToTerraform(struct!.rspSz32K),
    rsp_sz_4k: cdktf.numberToTerraform(struct!.rspSz4K),
    rsp_sz_64k: cdktf.numberToTerraform(struct!.rspSz64K),
    rsp_sz_8k: cdktf.numberToTerraform(struct!.rspSz8K),
    rsp_sz_gt_256k: cdktf.numberToTerraform(struct!.rspSzGt256K),
    status_100: cdktf.numberToTerraform(struct!.status100),
    status_101: cdktf.numberToTerraform(struct!.status101),
    status_102: cdktf.numberToTerraform(struct!.status102),
    status_103: cdktf.numberToTerraform(struct!.status103),
    status_1xx: cdktf.numberToTerraform(struct!.status1Xx),
    status_200: cdktf.numberToTerraform(struct!.status200),
    status_201: cdktf.numberToTerraform(struct!.status201),
    status_202: cdktf.numberToTerraform(struct!.status202),
    status_203: cdktf.numberToTerraform(struct!.status203),
    status_204: cdktf.numberToTerraform(struct!.status204),
    status_205: cdktf.numberToTerraform(struct!.status205),
    status_206: cdktf.numberToTerraform(struct!.status206),
    status_207: cdktf.numberToTerraform(struct!.status207),
    status_2xx: cdktf.numberToTerraform(struct!.status2Xx),
    status_300: cdktf.numberToTerraform(struct!.status300),
    status_301: cdktf.numberToTerraform(struct!.status301),
    status_302: cdktf.numberToTerraform(struct!.status302),
    status_303: cdktf.numberToTerraform(struct!.status303),
    status_304: cdktf.numberToTerraform(struct!.status304),
    status_305: cdktf.numberToTerraform(struct!.status305),
    status_306: cdktf.numberToTerraform(struct!.status306),
    status_307: cdktf.numberToTerraform(struct!.status307),
    status_3xx: cdktf.numberToTerraform(struct!.status3Xx),
    status_400: cdktf.numberToTerraform(struct!.status400),
    status_401: cdktf.numberToTerraform(struct!.status401),
    status_402: cdktf.numberToTerraform(struct!.status402),
    status_403: cdktf.numberToTerraform(struct!.status403),
    status_404: cdktf.numberToTerraform(struct!.status404),
    status_405: cdktf.numberToTerraform(struct!.status405),
    status_406: cdktf.numberToTerraform(struct!.status406),
    status_407: cdktf.numberToTerraform(struct!.status407),
    status_408: cdktf.numberToTerraform(struct!.status408),
    status_409: cdktf.numberToTerraform(struct!.status409),
    status_410: cdktf.numberToTerraform(struct!.status410),
    status_411: cdktf.numberToTerraform(struct!.status411),
    status_412: cdktf.numberToTerraform(struct!.status412),
    status_413: cdktf.numberToTerraform(struct!.status413),
    status_414: cdktf.numberToTerraform(struct!.status414),
    status_415: cdktf.numberToTerraform(struct!.status415),
    status_416: cdktf.numberToTerraform(struct!.status416),
    status_417: cdktf.numberToTerraform(struct!.status417),
    status_418: cdktf.numberToTerraform(struct!.status418),
    status_422: cdktf.numberToTerraform(struct!.status422),
    status_423: cdktf.numberToTerraform(struct!.status423),
    status_424: cdktf.numberToTerraform(struct!.status424),
    status_425: cdktf.numberToTerraform(struct!.status425),
    status_426: cdktf.numberToTerraform(struct!.status426),
    status_449: cdktf.numberToTerraform(struct!.status449),
    status_450: cdktf.numberToTerraform(struct!.status450),
    status_4xx: cdktf.numberToTerraform(struct!.status4Xx),
    status_500: cdktf.numberToTerraform(struct!.status500),
    status_501: cdktf.numberToTerraform(struct!.status501),
    status_502: cdktf.numberToTerraform(struct!.status502),
    status_503: cdktf.numberToTerraform(struct!.status503),
    status_504: cdktf.numberToTerraform(struct!.status504),
    status_504_ax: cdktf.numberToTerraform(struct!.status504Ax),
    status_505: cdktf.numberToTerraform(struct!.status505),
    status_506: cdktf.numberToTerraform(struct!.status506),
    status_507: cdktf.numberToTerraform(struct!.status507),
    status_508: cdktf.numberToTerraform(struct!.status508),
    status_509: cdktf.numberToTerraform(struct!.status509),
    status_510: cdktf.numberToTerraform(struct!.status510),
    status_5xx: cdktf.numberToTerraform(struct!.status5Xx),
    status_6xx: cdktf.numberToTerraform(struct!.status6Xx),
    status_unknown: cdktf.numberToTerraform(struct!.statusUnknown),
    stream_closed: cdktf.numberToTerraform(struct!.streamClosed),
    total_http2_bytes: cdktf.numberToTerraform(struct!.totalHttp2Bytes),
    total_http2_conn: cdktf.numberToTerraform(struct!.totalHttp2Conn),
    total_requests: cdktf.numberToTerraform(struct!.totalRequests),
    transaction_limited: cdktf.numberToTerraform(struct!.transactionLimited),
    ws_client_switch: cdktf.numberToTerraform(struct!.wsClientSwitch),
    ws_handshake_request: cdktf.numberToTerraform(struct!.wsHandshakeRequest),
    ws_handshake_success: cdktf.numberToTerraform(struct!.wsHandshakeSuccess),
    ws_server_switch: cdktf.numberToTerraform(struct!.wsServerSwitch),
  }
}


export function slbVirtualServerPortStatsHttpVportStatsHttpVportToHclTerraform(struct?: SlbVirtualServerPortStatsHttpVportStatsHttpVportOutputReference | SlbVirtualServerPortStatsHttpVportStatsHttpVport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    chunk_sz_1k: {
      value: cdktf.numberToHclTerraform(struct!.chunkSz1K),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    chunk_sz_2k: {
      value: cdktf.numberToHclTerraform(struct!.chunkSz2K),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    chunk_sz_4k: {
      value: cdktf.numberToHclTerraform(struct!.chunkSz4K),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    chunk_sz_512: {
      value: cdktf.numberToHclTerraform(struct!.chunkSz512),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    chunk_sz_gt_4k: {
      value: cdktf.numberToHclTerraform(struct!.chunkSzGt4K),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    curr_http2_conn: {
      value: cdktf.numberToHclTerraform(struct!.currHttp2Conn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    doh_dns_malformed_query: {
      value: cdktf.numberToHclTerraform(struct!.dohDnsMalformedQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    doh_dns_query_type_a: {
      value: cdktf.numberToHclTerraform(struct!.dohDnsQueryTypeA),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    doh_dns_query_type_aaaa: {
      value: cdktf.numberToHclTerraform(struct!.dohDnsQueryTypeAaaa),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    doh_dns_query_type_any: {
      value: cdktf.numberToHclTerraform(struct!.dohDnsQueryTypeAny),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    doh_dns_query_type_cname: {
      value: cdktf.numberToHclTerraform(struct!.dohDnsQueryTypeCname),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    doh_dns_query_type_mx: {
      value: cdktf.numberToHclTerraform(struct!.dohDnsQueryTypeMx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    doh_dns_query_type_ns: {
      value: cdktf.numberToHclTerraform(struct!.dohDnsQueryTypeNs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    doh_dns_query_type_others: {
      value: cdktf.numberToHclTerraform(struct!.dohDnsQueryTypeOthers),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    doh_dns_query_type_soa: {
      value: cdktf.numberToHclTerraform(struct!.dohDnsQueryTypeSoa),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    doh_dns_query_type_srv: {
      value: cdktf.numberToHclTerraform(struct!.dohDnsQueryTypeSrv),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    doh_dns_resp_rcode_err_format: {
      value: cdktf.numberToHclTerraform(struct!.dohDnsRespRcodeErrFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    doh_dns_resp_rcode_err_name: {
      value: cdktf.numberToHclTerraform(struct!.dohDnsRespRcodeErrName),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    doh_dns_resp_rcode_err_server: {
      value: cdktf.numberToHclTerraform(struct!.dohDnsRespRcodeErrServer),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    doh_dns_resp_rcode_err_type: {
      value: cdktf.numberToHclTerraform(struct!.dohDnsRespRcodeErrType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    doh_dns_resp_rcode_notauth: {
      value: cdktf.numberToHclTerraform(struct!.dohDnsRespRcodeNotauth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    doh_dns_resp_rcode_notzone: {
      value: cdktf.numberToHclTerraform(struct!.dohDnsRespRcodeNotzone),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    doh_dns_resp_rcode_nxrrset: {
      value: cdktf.numberToHclTerraform(struct!.dohDnsRespRcodeNxrrset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    doh_dns_resp_rcode_other: {
      value: cdktf.numberToHclTerraform(struct!.dohDnsRespRcodeOther),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    doh_dns_resp_rcode_refuse: {
      value: cdktf.numberToHclTerraform(struct!.dohDnsRespRcodeRefuse),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    doh_dns_resp_rcode_yxdomain: {
      value: cdktf.numberToHclTerraform(struct!.dohDnsRespRcodeYxdomain),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    doh_dns_resp_rcode_yxrrset: {
      value: cdktf.numberToHclTerraform(struct!.dohDnsRespRcodeYxrrset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    doh_get_base64_decode_failed: {
      value: cdktf.numberToHclTerraform(struct!.dohGetBase64DecodeFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    doh_get_dns_arg_failed: {
      value: cdktf.numberToHclTerraform(struct!.dohGetDnsArgFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    doh_get_uri_too_long: {
      value: cdktf.numberToHclTerraform(struct!.dohGetUriTooLong),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    doh_malloc_fail: {
      value: cdktf.numberToHclTerraform(struct!.dohMallocFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    doh_non_doh_method: {
      value: cdktf.numberToHclTerraform(struct!.dohNonDohMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    doh_non_doh_req: {
      value: cdktf.numberToHclTerraform(struct!.dohNonDohReq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    doh_non_doh_req_get: {
      value: cdktf.numberToHclTerraform(struct!.dohNonDohReqGet),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    doh_non_doh_req_post: {
      value: cdktf.numberToHclTerraform(struct!.dohNonDohReqPost),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    doh_path_not_found: {
      value: cdktf.numberToHclTerraform(struct!.dohPathNotFound),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    doh_post_content_type_mismatch: {
      value: cdktf.numberToHclTerraform(struct!.dohPostContentTypeMismatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    doh_post_payload_extract_failed: {
      value: cdktf.numberToHclTerraform(struct!.dohPostPayloadExtractFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    doh_post_payload_not_found: {
      value: cdktf.numberToHclTerraform(struct!.dohPostPayloadNotFound),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    doh_post_payload_too_large: {
      value: cdktf.numberToHclTerraform(struct!.dohPostPayloadTooLarge),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    doh_query_time_out: {
      value: cdktf.numberToHclTerraform(struct!.dohQueryTimeOut),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    doh_req: {
      value: cdktf.numberToHclTerraform(struct!.dohReq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    doh_req_get: {
      value: cdktf.numberToHclTerraform(struct!.dohReqGet),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    doh_req_post: {
      value: cdktf.numberToHclTerraform(struct!.dohReqPost),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    doh_req_send_failed: {
      value: cdktf.numberToHclTerraform(struct!.dohReqSendFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    doh_req_tcp_retry: {
      value: cdktf.numberToHclTerraform(struct!.dohReqTcpRetry),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    doh_req_tcp_retry_fail: {
      value: cdktf.numberToHclTerraform(struct!.dohReqTcpRetryFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    doh_req_udp_retry: {
      value: cdktf.numberToHclTerraform(struct!.dohReqUdpRetry),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    doh_req_udp_retry_fail: {
      value: cdktf.numberToHclTerraform(struct!.dohReqUdpRetryFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    doh_resp: {
      value: cdktf.numberToHclTerraform(struct!.dohResp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    doh_resp_header_alloc_failed: {
      value: cdktf.numberToHclTerraform(struct!.dohRespHeaderAllocFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    doh_resp_que_failed: {
      value: cdktf.numberToHclTerraform(struct!.dohRespQueFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    doh_resp_send_failed: {
      value: cdktf.numberToHclTerraform(struct!.dohRespSendFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    doh_resp_setup_failed: {
      value: cdktf.numberToHclTerraform(struct!.dohRespSetupFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    doh_resp_tcp_frags: {
      value: cdktf.numberToHclTerraform(struct!.dohRespTcpFrags),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    doh_resp_udp_frags: {
      value: cdktf.numberToHclTerraform(struct!.dohRespUdpFrags),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    doh_retry_w_tcp: {
      value: cdktf.numberToHclTerraform(struct!.dohRetryWTcp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    doh_serv_sel_failed: {
      value: cdktf.numberToHclTerraform(struct!.dohServSelFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    doh_snat_failed: {
      value: cdktf.numberToHclTerraform(struct!.dohSnatFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    doh_tc_resp: {
      value: cdktf.numberToHclTerraform(struct!.dohTcResp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    doh_tcp_dns_req: {
      value: cdktf.numberToHclTerraform(struct!.dohTcpDnsReq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    doh_tcp_dns_resp: {
      value: cdktf.numberToHclTerraform(struct!.dohTcpDnsResp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    doh_tcp_send_failed: {
      value: cdktf.numberToHclTerraform(struct!.dohTcpSendFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    doh_udp_dns_req: {
      value: cdktf.numberToHclTerraform(struct!.dohUdpDnsReq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    doh_udp_dns_resp: {
      value: cdktf.numberToHclTerraform(struct!.dohUdpDnsResp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    doh_udp_send_failed: {
      value: cdktf.numberToHclTerraform(struct!.dohUdpSendFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    header_length_long: {
      value: cdktf.numberToHclTerraform(struct!.headerLengthLong),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http2_control_bytes: {
      value: cdktf.numberToHclTerraform(struct!.http2ControlBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http2_data_bytes: {
      value: cdktf.numberToHclTerraform(struct!.http2DataBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http2_goaway_received: {
      value: cdktf.numberToHclTerraform(struct!.http2GoawayReceived),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http2_goaway_sent: {
      value: cdktf.numberToHclTerraform(struct!.http2GoawaySent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http2_header_bytes: {
      value: cdktf.numberToHclTerraform(struct!.http2HeaderBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http2_reset_received: {
      value: cdktf.numberToHclTerraform(struct!.http2ResetReceived),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http2_reset_sent: {
      value: cdktf.numberToHclTerraform(struct!.http2ResetSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    jsi_api_no_auth_hdr: {
      value: cdktf.numberToHclTerraform(struct!.jsiApiNoAuthHdr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    jsi_api_no_token: {
      value: cdktf.numberToHclTerraform(struct!.jsiApiNoToken),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    jsi_api_requests: {
      value: cdktf.numberToHclTerraform(struct!.jsiApiRequests),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    jsi_api_responses: {
      value: cdktf.numberToHclTerraform(struct!.jsiApiResponses),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    jsi_hash_add_fails: {
      value: cdktf.numberToHclTerraform(struct!.jsiHashAddFails),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    jsi_hash_lookup_fails: {
      value: cdktf.numberToHclTerraform(struct!.jsiHashLookupFails),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    jsi_pri_requests: {
      value: cdktf.numberToHclTerraform(struct!.jsiPriRequests),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    jsi_requests: {
      value: cdktf.numberToHclTerraform(struct!.jsiRequests),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    jsi_responses: {
      value: cdktf.numberToHclTerraform(struct!.jsiResponses),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    jsi_skip_no_fi: {
      value: cdktf.numberToHclTerraform(struct!.jsiSkipNoFi),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    jsi_skip_no_ua: {
      value: cdktf.numberToHclTerraform(struct!.jsiSkipNoUa),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    jsi_skip_not_browser: {
      value: cdktf.numberToHclTerraform(struct!.jsiSkipNotBrowser),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    peak_http2_conn: {
      value: cdktf.numberToHclTerraform(struct!.peakHttp2Conn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req_100m: {
      value: cdktf.numberToHclTerraform(struct!.req100M),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req_100u: {
      value: cdktf.numberToHclTerraform(struct!.req100U),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req_10m: {
      value: cdktf.numberToHclTerraform(struct!.req10M),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req_10u: {
      value: cdktf.numberToHclTerraform(struct!.req10U),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req_1m: {
      value: cdktf.numberToHclTerraform(struct!.req1M),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req_1s: {
      value: cdktf.numberToHclTerraform(struct!.req1S),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req_200m: {
      value: cdktf.numberToHclTerraform(struct!.req200M),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req_200u: {
      value: cdktf.numberToHclTerraform(struct!.req200U),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req_20m: {
      value: cdktf.numberToHclTerraform(struct!.req20M),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req_20u: {
      value: cdktf.numberToHclTerraform(struct!.req20U),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req_2m: {
      value: cdktf.numberToHclTerraform(struct!.req2M),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req_2s: {
      value: cdktf.numberToHclTerraform(struct!.req2S),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req_500m: {
      value: cdktf.numberToHclTerraform(struct!.req500M),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req_500u: {
      value: cdktf.numberToHclTerraform(struct!.req500U),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req_50m: {
      value: cdktf.numberToHclTerraform(struct!.req50M),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req_50u: {
      value: cdktf.numberToHclTerraform(struct!.req50U),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req_5m: {
      value: cdktf.numberToHclTerraform(struct!.req5M),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req_5s: {
      value: cdktf.numberToHclTerraform(struct!.req5S),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req_connect: {
      value: cdktf.numberToHclTerraform(struct!.reqConnect),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req_content_len: {
      value: cdktf.numberToHclTerraform(struct!.reqContentLen),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req_delete: {
      value: cdktf.numberToHclTerraform(struct!.reqDelete),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req_get: {
      value: cdktf.numberToHclTerraform(struct!.reqGet),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req_head: {
      value: cdktf.numberToHclTerraform(struct!.reqHead),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req_options: {
      value: cdktf.numberToHclTerraform(struct!.reqOptions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req_over_5s: {
      value: cdktf.numberToHclTerraform(struct!.reqOver5S),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req_post: {
      value: cdktf.numberToHclTerraform(struct!.reqPost),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req_put: {
      value: cdktf.numberToHclTerraform(struct!.reqPut),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req_sz_16k: {
      value: cdktf.numberToHclTerraform(struct!.reqSz16K),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req_sz_1k: {
      value: cdktf.numberToHclTerraform(struct!.reqSz1K),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req_sz_256k: {
      value: cdktf.numberToHclTerraform(struct!.reqSz256K),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req_sz_2k: {
      value: cdktf.numberToHclTerraform(struct!.reqSz2K),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req_sz_32k: {
      value: cdktf.numberToHclTerraform(struct!.reqSz32K),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req_sz_4k: {
      value: cdktf.numberToHclTerraform(struct!.reqSz4K),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req_sz_64k: {
      value: cdktf.numberToHclTerraform(struct!.reqSz64K),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req_sz_8k: {
      value: cdktf.numberToHclTerraform(struct!.reqSz8K),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req_sz_gt_256k: {
      value: cdktf.numberToHclTerraform(struct!.reqSzGt256K),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req_trace: {
      value: cdktf.numberToHclTerraform(struct!.reqTrace),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req_track: {
      value: cdktf.numberToHclTerraform(struct!.reqTrack),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req_unknown: {
      value: cdktf.numberToHclTerraform(struct!.reqUnknown),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rsp_chunk: {
      value: cdktf.numberToHclTerraform(struct!.rspChunk),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rsp_sz_16k: {
      value: cdktf.numberToHclTerraform(struct!.rspSz16K),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rsp_sz_1k: {
      value: cdktf.numberToHclTerraform(struct!.rspSz1K),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rsp_sz_256k: {
      value: cdktf.numberToHclTerraform(struct!.rspSz256K),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rsp_sz_2k: {
      value: cdktf.numberToHclTerraform(struct!.rspSz2K),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rsp_sz_32k: {
      value: cdktf.numberToHclTerraform(struct!.rspSz32K),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rsp_sz_4k: {
      value: cdktf.numberToHclTerraform(struct!.rspSz4K),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rsp_sz_64k: {
      value: cdktf.numberToHclTerraform(struct!.rspSz64K),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rsp_sz_8k: {
      value: cdktf.numberToHclTerraform(struct!.rspSz8K),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rsp_sz_gt_256k: {
      value: cdktf.numberToHclTerraform(struct!.rspSzGt256K),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_100: {
      value: cdktf.numberToHclTerraform(struct!.status100),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_101: {
      value: cdktf.numberToHclTerraform(struct!.status101),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_102: {
      value: cdktf.numberToHclTerraform(struct!.status102),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_103: {
      value: cdktf.numberToHclTerraform(struct!.status103),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_1xx: {
      value: cdktf.numberToHclTerraform(struct!.status1Xx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_200: {
      value: cdktf.numberToHclTerraform(struct!.status200),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_201: {
      value: cdktf.numberToHclTerraform(struct!.status201),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_202: {
      value: cdktf.numberToHclTerraform(struct!.status202),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_203: {
      value: cdktf.numberToHclTerraform(struct!.status203),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_204: {
      value: cdktf.numberToHclTerraform(struct!.status204),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_205: {
      value: cdktf.numberToHclTerraform(struct!.status205),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_206: {
      value: cdktf.numberToHclTerraform(struct!.status206),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_207: {
      value: cdktf.numberToHclTerraform(struct!.status207),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_2xx: {
      value: cdktf.numberToHclTerraform(struct!.status2Xx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_300: {
      value: cdktf.numberToHclTerraform(struct!.status300),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_301: {
      value: cdktf.numberToHclTerraform(struct!.status301),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_302: {
      value: cdktf.numberToHclTerraform(struct!.status302),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_303: {
      value: cdktf.numberToHclTerraform(struct!.status303),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_304: {
      value: cdktf.numberToHclTerraform(struct!.status304),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_305: {
      value: cdktf.numberToHclTerraform(struct!.status305),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_306: {
      value: cdktf.numberToHclTerraform(struct!.status306),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_307: {
      value: cdktf.numberToHclTerraform(struct!.status307),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_3xx: {
      value: cdktf.numberToHclTerraform(struct!.status3Xx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_400: {
      value: cdktf.numberToHclTerraform(struct!.status400),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_401: {
      value: cdktf.numberToHclTerraform(struct!.status401),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_402: {
      value: cdktf.numberToHclTerraform(struct!.status402),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_403: {
      value: cdktf.numberToHclTerraform(struct!.status403),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_404: {
      value: cdktf.numberToHclTerraform(struct!.status404),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_405: {
      value: cdktf.numberToHclTerraform(struct!.status405),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_406: {
      value: cdktf.numberToHclTerraform(struct!.status406),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_407: {
      value: cdktf.numberToHclTerraform(struct!.status407),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_408: {
      value: cdktf.numberToHclTerraform(struct!.status408),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_409: {
      value: cdktf.numberToHclTerraform(struct!.status409),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_410: {
      value: cdktf.numberToHclTerraform(struct!.status410),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_411: {
      value: cdktf.numberToHclTerraform(struct!.status411),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_412: {
      value: cdktf.numberToHclTerraform(struct!.status412),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_413: {
      value: cdktf.numberToHclTerraform(struct!.status413),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_414: {
      value: cdktf.numberToHclTerraform(struct!.status414),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_415: {
      value: cdktf.numberToHclTerraform(struct!.status415),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_416: {
      value: cdktf.numberToHclTerraform(struct!.status416),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_417: {
      value: cdktf.numberToHclTerraform(struct!.status417),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_418: {
      value: cdktf.numberToHclTerraform(struct!.status418),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_422: {
      value: cdktf.numberToHclTerraform(struct!.status422),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_423: {
      value: cdktf.numberToHclTerraform(struct!.status423),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_424: {
      value: cdktf.numberToHclTerraform(struct!.status424),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_425: {
      value: cdktf.numberToHclTerraform(struct!.status425),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_426: {
      value: cdktf.numberToHclTerraform(struct!.status426),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_449: {
      value: cdktf.numberToHclTerraform(struct!.status449),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_450: {
      value: cdktf.numberToHclTerraform(struct!.status450),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_4xx: {
      value: cdktf.numberToHclTerraform(struct!.status4Xx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_500: {
      value: cdktf.numberToHclTerraform(struct!.status500),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_501: {
      value: cdktf.numberToHclTerraform(struct!.status501),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_502: {
      value: cdktf.numberToHclTerraform(struct!.status502),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_503: {
      value: cdktf.numberToHclTerraform(struct!.status503),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_504: {
      value: cdktf.numberToHclTerraform(struct!.status504),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_504_ax: {
      value: cdktf.numberToHclTerraform(struct!.status504Ax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_505: {
      value: cdktf.numberToHclTerraform(struct!.status505),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_506: {
      value: cdktf.numberToHclTerraform(struct!.status506),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_507: {
      value: cdktf.numberToHclTerraform(struct!.status507),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_508: {
      value: cdktf.numberToHclTerraform(struct!.status508),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_509: {
      value: cdktf.numberToHclTerraform(struct!.status509),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_510: {
      value: cdktf.numberToHclTerraform(struct!.status510),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_5xx: {
      value: cdktf.numberToHclTerraform(struct!.status5Xx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_6xx: {
      value: cdktf.numberToHclTerraform(struct!.status6Xx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_unknown: {
      value: cdktf.numberToHclTerraform(struct!.statusUnknown),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stream_closed: {
      value: cdktf.numberToHclTerraform(struct!.streamClosed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_http2_bytes: {
      value: cdktf.numberToHclTerraform(struct!.totalHttp2Bytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_http2_conn: {
      value: cdktf.numberToHclTerraform(struct!.totalHttp2Conn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_requests: {
      value: cdktf.numberToHclTerraform(struct!.totalRequests),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    transaction_limited: {
      value: cdktf.numberToHclTerraform(struct!.transactionLimited),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ws_client_switch: {
      value: cdktf.numberToHclTerraform(struct!.wsClientSwitch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ws_handshake_request: {
      value: cdktf.numberToHclTerraform(struct!.wsHandshakeRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ws_handshake_success: {
      value: cdktf.numberToHclTerraform(struct!.wsHandshakeSuccess),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ws_server_switch: {
      value: cdktf.numberToHclTerraform(struct!.wsServerSwitch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbVirtualServerPortStatsHttpVportStatsHttpVportOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SlbVirtualServerPortStatsHttpVportStatsHttpVport | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._chunkSz1K !== undefined) {
      hasAnyValues = true;
      internalValueResult.chunkSz1K = this._chunkSz1K;
    }
    if (this._chunkSz2K !== undefined) {
      hasAnyValues = true;
      internalValueResult.chunkSz2K = this._chunkSz2K;
    }
    if (this._chunkSz4K !== undefined) {
      hasAnyValues = true;
      internalValueResult.chunkSz4K = this._chunkSz4K;
    }
    if (this._chunkSz512 !== undefined) {
      hasAnyValues = true;
      internalValueResult.chunkSz512 = this._chunkSz512;
    }
    if (this._chunkSzGt4K !== undefined) {
      hasAnyValues = true;
      internalValueResult.chunkSzGt4K = this._chunkSzGt4K;
    }
    if (this._currHttp2Conn !== undefined) {
      hasAnyValues = true;
      internalValueResult.currHttp2Conn = this._currHttp2Conn;
    }
    if (this._dohDnsMalformedQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.dohDnsMalformedQuery = this._dohDnsMalformedQuery;
    }
    if (this._dohDnsQueryTypeA !== undefined) {
      hasAnyValues = true;
      internalValueResult.dohDnsQueryTypeA = this._dohDnsQueryTypeA;
    }
    if (this._dohDnsQueryTypeAaaa !== undefined) {
      hasAnyValues = true;
      internalValueResult.dohDnsQueryTypeAaaa = this._dohDnsQueryTypeAaaa;
    }
    if (this._dohDnsQueryTypeAny !== undefined) {
      hasAnyValues = true;
      internalValueResult.dohDnsQueryTypeAny = this._dohDnsQueryTypeAny;
    }
    if (this._dohDnsQueryTypeCname !== undefined) {
      hasAnyValues = true;
      internalValueResult.dohDnsQueryTypeCname = this._dohDnsQueryTypeCname;
    }
    if (this._dohDnsQueryTypeMx !== undefined) {
      hasAnyValues = true;
      internalValueResult.dohDnsQueryTypeMx = this._dohDnsQueryTypeMx;
    }
    if (this._dohDnsQueryTypeNs !== undefined) {
      hasAnyValues = true;
      internalValueResult.dohDnsQueryTypeNs = this._dohDnsQueryTypeNs;
    }
    if (this._dohDnsQueryTypeOthers !== undefined) {
      hasAnyValues = true;
      internalValueResult.dohDnsQueryTypeOthers = this._dohDnsQueryTypeOthers;
    }
    if (this._dohDnsQueryTypeSoa !== undefined) {
      hasAnyValues = true;
      internalValueResult.dohDnsQueryTypeSoa = this._dohDnsQueryTypeSoa;
    }
    if (this._dohDnsQueryTypeSrv !== undefined) {
      hasAnyValues = true;
      internalValueResult.dohDnsQueryTypeSrv = this._dohDnsQueryTypeSrv;
    }
    if (this._dohDnsRespRcodeErrFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.dohDnsRespRcodeErrFormat = this._dohDnsRespRcodeErrFormat;
    }
    if (this._dohDnsRespRcodeErrName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dohDnsRespRcodeErrName = this._dohDnsRespRcodeErrName;
    }
    if (this._dohDnsRespRcodeErrServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.dohDnsRespRcodeErrServer = this._dohDnsRespRcodeErrServer;
    }
    if (this._dohDnsRespRcodeErrType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dohDnsRespRcodeErrType = this._dohDnsRespRcodeErrType;
    }
    if (this._dohDnsRespRcodeNotauth !== undefined) {
      hasAnyValues = true;
      internalValueResult.dohDnsRespRcodeNotauth = this._dohDnsRespRcodeNotauth;
    }
    if (this._dohDnsRespRcodeNotzone !== undefined) {
      hasAnyValues = true;
      internalValueResult.dohDnsRespRcodeNotzone = this._dohDnsRespRcodeNotzone;
    }
    if (this._dohDnsRespRcodeNxrrset !== undefined) {
      hasAnyValues = true;
      internalValueResult.dohDnsRespRcodeNxrrset = this._dohDnsRespRcodeNxrrset;
    }
    if (this._dohDnsRespRcodeOther !== undefined) {
      hasAnyValues = true;
      internalValueResult.dohDnsRespRcodeOther = this._dohDnsRespRcodeOther;
    }
    if (this._dohDnsRespRcodeRefuse !== undefined) {
      hasAnyValues = true;
      internalValueResult.dohDnsRespRcodeRefuse = this._dohDnsRespRcodeRefuse;
    }
    if (this._dohDnsRespRcodeYxdomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.dohDnsRespRcodeYxdomain = this._dohDnsRespRcodeYxdomain;
    }
    if (this._dohDnsRespRcodeYxrrset !== undefined) {
      hasAnyValues = true;
      internalValueResult.dohDnsRespRcodeYxrrset = this._dohDnsRespRcodeYxrrset;
    }
    if (this._dohGetBase64DecodeFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.dohGetBase64DecodeFailed = this._dohGetBase64DecodeFailed;
    }
    if (this._dohGetDnsArgFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.dohGetDnsArgFailed = this._dohGetDnsArgFailed;
    }
    if (this._dohGetUriTooLong !== undefined) {
      hasAnyValues = true;
      internalValueResult.dohGetUriTooLong = this._dohGetUriTooLong;
    }
    if (this._dohMallocFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.dohMallocFail = this._dohMallocFail;
    }
    if (this._dohNonDohMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.dohNonDohMethod = this._dohNonDohMethod;
    }
    if (this._dohNonDohReq !== undefined) {
      hasAnyValues = true;
      internalValueResult.dohNonDohReq = this._dohNonDohReq;
    }
    if (this._dohNonDohReqGet !== undefined) {
      hasAnyValues = true;
      internalValueResult.dohNonDohReqGet = this._dohNonDohReqGet;
    }
    if (this._dohNonDohReqPost !== undefined) {
      hasAnyValues = true;
      internalValueResult.dohNonDohReqPost = this._dohNonDohReqPost;
    }
    if (this._dohPathNotFound !== undefined) {
      hasAnyValues = true;
      internalValueResult.dohPathNotFound = this._dohPathNotFound;
    }
    if (this._dohPostContentTypeMismatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.dohPostContentTypeMismatch = this._dohPostContentTypeMismatch;
    }
    if (this._dohPostPayloadExtractFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.dohPostPayloadExtractFailed = this._dohPostPayloadExtractFailed;
    }
    if (this._dohPostPayloadNotFound !== undefined) {
      hasAnyValues = true;
      internalValueResult.dohPostPayloadNotFound = this._dohPostPayloadNotFound;
    }
    if (this._dohPostPayloadTooLarge !== undefined) {
      hasAnyValues = true;
      internalValueResult.dohPostPayloadTooLarge = this._dohPostPayloadTooLarge;
    }
    if (this._dohQueryTimeOut !== undefined) {
      hasAnyValues = true;
      internalValueResult.dohQueryTimeOut = this._dohQueryTimeOut;
    }
    if (this._dohReq !== undefined) {
      hasAnyValues = true;
      internalValueResult.dohReq = this._dohReq;
    }
    if (this._dohReqGet !== undefined) {
      hasAnyValues = true;
      internalValueResult.dohReqGet = this._dohReqGet;
    }
    if (this._dohReqPost !== undefined) {
      hasAnyValues = true;
      internalValueResult.dohReqPost = this._dohReqPost;
    }
    if (this._dohReqSendFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.dohReqSendFailed = this._dohReqSendFailed;
    }
    if (this._dohReqTcpRetry !== undefined) {
      hasAnyValues = true;
      internalValueResult.dohReqTcpRetry = this._dohReqTcpRetry;
    }
    if (this._dohReqTcpRetryFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.dohReqTcpRetryFail = this._dohReqTcpRetryFail;
    }
    if (this._dohReqUdpRetry !== undefined) {
      hasAnyValues = true;
      internalValueResult.dohReqUdpRetry = this._dohReqUdpRetry;
    }
    if (this._dohReqUdpRetryFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.dohReqUdpRetryFail = this._dohReqUdpRetryFail;
    }
    if (this._dohResp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dohResp = this._dohResp;
    }
    if (this._dohRespHeaderAllocFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.dohRespHeaderAllocFailed = this._dohRespHeaderAllocFailed;
    }
    if (this._dohRespQueFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.dohRespQueFailed = this._dohRespQueFailed;
    }
    if (this._dohRespSendFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.dohRespSendFailed = this._dohRespSendFailed;
    }
    if (this._dohRespSetupFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.dohRespSetupFailed = this._dohRespSetupFailed;
    }
    if (this._dohRespTcpFrags !== undefined) {
      hasAnyValues = true;
      internalValueResult.dohRespTcpFrags = this._dohRespTcpFrags;
    }
    if (this._dohRespUdpFrags !== undefined) {
      hasAnyValues = true;
      internalValueResult.dohRespUdpFrags = this._dohRespUdpFrags;
    }
    if (this._dohRetryWTcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dohRetryWTcp = this._dohRetryWTcp;
    }
    if (this._dohServSelFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.dohServSelFailed = this._dohServSelFailed;
    }
    if (this._dohSnatFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.dohSnatFailed = this._dohSnatFailed;
    }
    if (this._dohTcResp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dohTcResp = this._dohTcResp;
    }
    if (this._dohTcpDnsReq !== undefined) {
      hasAnyValues = true;
      internalValueResult.dohTcpDnsReq = this._dohTcpDnsReq;
    }
    if (this._dohTcpDnsResp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dohTcpDnsResp = this._dohTcpDnsResp;
    }
    if (this._dohTcpSendFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.dohTcpSendFailed = this._dohTcpSendFailed;
    }
    if (this._dohUdpDnsReq !== undefined) {
      hasAnyValues = true;
      internalValueResult.dohUdpDnsReq = this._dohUdpDnsReq;
    }
    if (this._dohUdpDnsResp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dohUdpDnsResp = this._dohUdpDnsResp;
    }
    if (this._dohUdpSendFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.dohUdpSendFailed = this._dohUdpSendFailed;
    }
    if (this._headerLengthLong !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerLengthLong = this._headerLengthLong;
    }
    if (this._http2ControlBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.http2ControlBytes = this._http2ControlBytes;
    }
    if (this._http2DataBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.http2DataBytes = this._http2DataBytes;
    }
    if (this._http2GoawayReceived !== undefined) {
      hasAnyValues = true;
      internalValueResult.http2GoawayReceived = this._http2GoawayReceived;
    }
    if (this._http2GoawaySent !== undefined) {
      hasAnyValues = true;
      internalValueResult.http2GoawaySent = this._http2GoawaySent;
    }
    if (this._http2HeaderBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.http2HeaderBytes = this._http2HeaderBytes;
    }
    if (this._http2ResetReceived !== undefined) {
      hasAnyValues = true;
      internalValueResult.http2ResetReceived = this._http2ResetReceived;
    }
    if (this._http2ResetSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.http2ResetSent = this._http2ResetSent;
    }
    if (this._jsiApiNoAuthHdr !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsiApiNoAuthHdr = this._jsiApiNoAuthHdr;
    }
    if (this._jsiApiNoToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsiApiNoToken = this._jsiApiNoToken;
    }
    if (this._jsiApiRequests !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsiApiRequests = this._jsiApiRequests;
    }
    if (this._jsiApiResponses !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsiApiResponses = this._jsiApiResponses;
    }
    if (this._jsiHashAddFails !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsiHashAddFails = this._jsiHashAddFails;
    }
    if (this._jsiHashLookupFails !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsiHashLookupFails = this._jsiHashLookupFails;
    }
    if (this._jsiPriRequests !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsiPriRequests = this._jsiPriRequests;
    }
    if (this._jsiRequests !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsiRequests = this._jsiRequests;
    }
    if (this._jsiResponses !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsiResponses = this._jsiResponses;
    }
    if (this._jsiSkipNoFi !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsiSkipNoFi = this._jsiSkipNoFi;
    }
    if (this._jsiSkipNoUa !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsiSkipNoUa = this._jsiSkipNoUa;
    }
    if (this._jsiSkipNotBrowser !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsiSkipNotBrowser = this._jsiSkipNotBrowser;
    }
    if (this._peakHttp2Conn !== undefined) {
      hasAnyValues = true;
      internalValueResult.peakHttp2Conn = this._peakHttp2Conn;
    }
    if (this._req100M !== undefined) {
      hasAnyValues = true;
      internalValueResult.req100M = this._req100M;
    }
    if (this._req100U !== undefined) {
      hasAnyValues = true;
      internalValueResult.req100U = this._req100U;
    }
    if (this._req10M !== undefined) {
      hasAnyValues = true;
      internalValueResult.req10M = this._req10M;
    }
    if (this._req10U !== undefined) {
      hasAnyValues = true;
      internalValueResult.req10U = this._req10U;
    }
    if (this._req1M !== undefined) {
      hasAnyValues = true;
      internalValueResult.req1M = this._req1M;
    }
    if (this._req1S !== undefined) {
      hasAnyValues = true;
      internalValueResult.req1S = this._req1S;
    }
    if (this._req200M !== undefined) {
      hasAnyValues = true;
      internalValueResult.req200M = this._req200M;
    }
    if (this._req200U !== undefined) {
      hasAnyValues = true;
      internalValueResult.req200U = this._req200U;
    }
    if (this._req20M !== undefined) {
      hasAnyValues = true;
      internalValueResult.req20M = this._req20M;
    }
    if (this._req20U !== undefined) {
      hasAnyValues = true;
      internalValueResult.req20U = this._req20U;
    }
    if (this._req2M !== undefined) {
      hasAnyValues = true;
      internalValueResult.req2M = this._req2M;
    }
    if (this._req2S !== undefined) {
      hasAnyValues = true;
      internalValueResult.req2S = this._req2S;
    }
    if (this._req500M !== undefined) {
      hasAnyValues = true;
      internalValueResult.req500M = this._req500M;
    }
    if (this._req500U !== undefined) {
      hasAnyValues = true;
      internalValueResult.req500U = this._req500U;
    }
    if (this._req50M !== undefined) {
      hasAnyValues = true;
      internalValueResult.req50M = this._req50M;
    }
    if (this._req50U !== undefined) {
      hasAnyValues = true;
      internalValueResult.req50U = this._req50U;
    }
    if (this._req5M !== undefined) {
      hasAnyValues = true;
      internalValueResult.req5M = this._req5M;
    }
    if (this._req5S !== undefined) {
      hasAnyValues = true;
      internalValueResult.req5S = this._req5S;
    }
    if (this._reqConnect !== undefined) {
      hasAnyValues = true;
      internalValueResult.reqConnect = this._reqConnect;
    }
    if (this._reqContentLen !== undefined) {
      hasAnyValues = true;
      internalValueResult.reqContentLen = this._reqContentLen;
    }
    if (this._reqDelete !== undefined) {
      hasAnyValues = true;
      internalValueResult.reqDelete = this._reqDelete;
    }
    if (this._reqGet !== undefined) {
      hasAnyValues = true;
      internalValueResult.reqGet = this._reqGet;
    }
    if (this._reqHead !== undefined) {
      hasAnyValues = true;
      internalValueResult.reqHead = this._reqHead;
    }
    if (this._reqOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.reqOptions = this._reqOptions;
    }
    if (this._reqOver5S !== undefined) {
      hasAnyValues = true;
      internalValueResult.reqOver5S = this._reqOver5S;
    }
    if (this._reqPost !== undefined) {
      hasAnyValues = true;
      internalValueResult.reqPost = this._reqPost;
    }
    if (this._reqPut !== undefined) {
      hasAnyValues = true;
      internalValueResult.reqPut = this._reqPut;
    }
    if (this._reqSz16K !== undefined) {
      hasAnyValues = true;
      internalValueResult.reqSz16K = this._reqSz16K;
    }
    if (this._reqSz1K !== undefined) {
      hasAnyValues = true;
      internalValueResult.reqSz1K = this._reqSz1K;
    }
    if (this._reqSz256K !== undefined) {
      hasAnyValues = true;
      internalValueResult.reqSz256K = this._reqSz256K;
    }
    if (this._reqSz2K !== undefined) {
      hasAnyValues = true;
      internalValueResult.reqSz2K = this._reqSz2K;
    }
    if (this._reqSz32K !== undefined) {
      hasAnyValues = true;
      internalValueResult.reqSz32K = this._reqSz32K;
    }
    if (this._reqSz4K !== undefined) {
      hasAnyValues = true;
      internalValueResult.reqSz4K = this._reqSz4K;
    }
    if (this._reqSz64K !== undefined) {
      hasAnyValues = true;
      internalValueResult.reqSz64K = this._reqSz64K;
    }
    if (this._reqSz8K !== undefined) {
      hasAnyValues = true;
      internalValueResult.reqSz8K = this._reqSz8K;
    }
    if (this._reqSzGt256K !== undefined) {
      hasAnyValues = true;
      internalValueResult.reqSzGt256K = this._reqSzGt256K;
    }
    if (this._reqTrace !== undefined) {
      hasAnyValues = true;
      internalValueResult.reqTrace = this._reqTrace;
    }
    if (this._reqTrack !== undefined) {
      hasAnyValues = true;
      internalValueResult.reqTrack = this._reqTrack;
    }
    if (this._reqUnknown !== undefined) {
      hasAnyValues = true;
      internalValueResult.reqUnknown = this._reqUnknown;
    }
    if (this._rspChunk !== undefined) {
      hasAnyValues = true;
      internalValueResult.rspChunk = this._rspChunk;
    }
    if (this._rspSz16K !== undefined) {
      hasAnyValues = true;
      internalValueResult.rspSz16K = this._rspSz16K;
    }
    if (this._rspSz1K !== undefined) {
      hasAnyValues = true;
      internalValueResult.rspSz1K = this._rspSz1K;
    }
    if (this._rspSz256K !== undefined) {
      hasAnyValues = true;
      internalValueResult.rspSz256K = this._rspSz256K;
    }
    if (this._rspSz2K !== undefined) {
      hasAnyValues = true;
      internalValueResult.rspSz2K = this._rspSz2K;
    }
    if (this._rspSz32K !== undefined) {
      hasAnyValues = true;
      internalValueResult.rspSz32K = this._rspSz32K;
    }
    if (this._rspSz4K !== undefined) {
      hasAnyValues = true;
      internalValueResult.rspSz4K = this._rspSz4K;
    }
    if (this._rspSz64K !== undefined) {
      hasAnyValues = true;
      internalValueResult.rspSz64K = this._rspSz64K;
    }
    if (this._rspSz8K !== undefined) {
      hasAnyValues = true;
      internalValueResult.rspSz8K = this._rspSz8K;
    }
    if (this._rspSzGt256K !== undefined) {
      hasAnyValues = true;
      internalValueResult.rspSzGt256K = this._rspSzGt256K;
    }
    if (this._status100 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status100 = this._status100;
    }
    if (this._status101 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status101 = this._status101;
    }
    if (this._status102 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status102 = this._status102;
    }
    if (this._status103 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status103 = this._status103;
    }
    if (this._status1Xx !== undefined) {
      hasAnyValues = true;
      internalValueResult.status1Xx = this._status1Xx;
    }
    if (this._status200 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status200 = this._status200;
    }
    if (this._status201 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status201 = this._status201;
    }
    if (this._status202 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status202 = this._status202;
    }
    if (this._status203 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status203 = this._status203;
    }
    if (this._status204 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status204 = this._status204;
    }
    if (this._status205 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status205 = this._status205;
    }
    if (this._status206 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status206 = this._status206;
    }
    if (this._status207 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status207 = this._status207;
    }
    if (this._status2Xx !== undefined) {
      hasAnyValues = true;
      internalValueResult.status2Xx = this._status2Xx;
    }
    if (this._status300 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status300 = this._status300;
    }
    if (this._status301 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status301 = this._status301;
    }
    if (this._status302 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status302 = this._status302;
    }
    if (this._status303 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status303 = this._status303;
    }
    if (this._status304 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status304 = this._status304;
    }
    if (this._status305 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status305 = this._status305;
    }
    if (this._status306 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status306 = this._status306;
    }
    if (this._status307 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status307 = this._status307;
    }
    if (this._status3Xx !== undefined) {
      hasAnyValues = true;
      internalValueResult.status3Xx = this._status3Xx;
    }
    if (this._status400 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status400 = this._status400;
    }
    if (this._status401 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status401 = this._status401;
    }
    if (this._status402 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status402 = this._status402;
    }
    if (this._status403 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status403 = this._status403;
    }
    if (this._status404 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status404 = this._status404;
    }
    if (this._status405 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status405 = this._status405;
    }
    if (this._status406 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status406 = this._status406;
    }
    if (this._status407 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status407 = this._status407;
    }
    if (this._status408 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status408 = this._status408;
    }
    if (this._status409 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status409 = this._status409;
    }
    if (this._status410 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status410 = this._status410;
    }
    if (this._status411 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status411 = this._status411;
    }
    if (this._status412 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status412 = this._status412;
    }
    if (this._status413 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status413 = this._status413;
    }
    if (this._status414 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status414 = this._status414;
    }
    if (this._status415 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status415 = this._status415;
    }
    if (this._status416 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status416 = this._status416;
    }
    if (this._status417 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status417 = this._status417;
    }
    if (this._status418 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status418 = this._status418;
    }
    if (this._status422 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status422 = this._status422;
    }
    if (this._status423 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status423 = this._status423;
    }
    if (this._status424 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status424 = this._status424;
    }
    if (this._status425 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status425 = this._status425;
    }
    if (this._status426 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status426 = this._status426;
    }
    if (this._status449 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status449 = this._status449;
    }
    if (this._status450 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status450 = this._status450;
    }
    if (this._status4Xx !== undefined) {
      hasAnyValues = true;
      internalValueResult.status4Xx = this._status4Xx;
    }
    if (this._status500 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status500 = this._status500;
    }
    if (this._status501 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status501 = this._status501;
    }
    if (this._status502 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status502 = this._status502;
    }
    if (this._status503 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status503 = this._status503;
    }
    if (this._status504 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status504 = this._status504;
    }
    if (this._status504Ax !== undefined) {
      hasAnyValues = true;
      internalValueResult.status504Ax = this._status504Ax;
    }
    if (this._status505 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status505 = this._status505;
    }
    if (this._status506 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status506 = this._status506;
    }
    if (this._status507 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status507 = this._status507;
    }
    if (this._status508 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status508 = this._status508;
    }
    if (this._status509 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status509 = this._status509;
    }
    if (this._status510 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status510 = this._status510;
    }
    if (this._status5Xx !== undefined) {
      hasAnyValues = true;
      internalValueResult.status5Xx = this._status5Xx;
    }
    if (this._status6Xx !== undefined) {
      hasAnyValues = true;
      internalValueResult.status6Xx = this._status6Xx;
    }
    if (this._statusUnknown !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusUnknown = this._statusUnknown;
    }
    if (this._streamClosed !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamClosed = this._streamClosed;
    }
    if (this._totalHttp2Bytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalHttp2Bytes = this._totalHttp2Bytes;
    }
    if (this._totalHttp2Conn !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalHttp2Conn = this._totalHttp2Conn;
    }
    if (this._totalRequests !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalRequests = this._totalRequests;
    }
    if (this._transactionLimited !== undefined) {
      hasAnyValues = true;
      internalValueResult.transactionLimited = this._transactionLimited;
    }
    if (this._wsClientSwitch !== undefined) {
      hasAnyValues = true;
      internalValueResult.wsClientSwitch = this._wsClientSwitch;
    }
    if (this._wsHandshakeRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.wsHandshakeRequest = this._wsHandshakeRequest;
    }
    if (this._wsHandshakeSuccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.wsHandshakeSuccess = this._wsHandshakeSuccess;
    }
    if (this._wsServerSwitch !== undefined) {
      hasAnyValues = true;
      internalValueResult.wsServerSwitch = this._wsServerSwitch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbVirtualServerPortStatsHttpVportStatsHttpVport | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._chunkSz1K = undefined;
      this._chunkSz2K = undefined;
      this._chunkSz4K = undefined;
      this._chunkSz512 = undefined;
      this._chunkSzGt4K = undefined;
      this._currHttp2Conn = undefined;
      this._dohDnsMalformedQuery = undefined;
      this._dohDnsQueryTypeA = undefined;
      this._dohDnsQueryTypeAaaa = undefined;
      this._dohDnsQueryTypeAny = undefined;
      this._dohDnsQueryTypeCname = undefined;
      this._dohDnsQueryTypeMx = undefined;
      this._dohDnsQueryTypeNs = undefined;
      this._dohDnsQueryTypeOthers = undefined;
      this._dohDnsQueryTypeSoa = undefined;
      this._dohDnsQueryTypeSrv = undefined;
      this._dohDnsRespRcodeErrFormat = undefined;
      this._dohDnsRespRcodeErrName = undefined;
      this._dohDnsRespRcodeErrServer = undefined;
      this._dohDnsRespRcodeErrType = undefined;
      this._dohDnsRespRcodeNotauth = undefined;
      this._dohDnsRespRcodeNotzone = undefined;
      this._dohDnsRespRcodeNxrrset = undefined;
      this._dohDnsRespRcodeOther = undefined;
      this._dohDnsRespRcodeRefuse = undefined;
      this._dohDnsRespRcodeYxdomain = undefined;
      this._dohDnsRespRcodeYxrrset = undefined;
      this._dohGetBase64DecodeFailed = undefined;
      this._dohGetDnsArgFailed = undefined;
      this._dohGetUriTooLong = undefined;
      this._dohMallocFail = undefined;
      this._dohNonDohMethod = undefined;
      this._dohNonDohReq = undefined;
      this._dohNonDohReqGet = undefined;
      this._dohNonDohReqPost = undefined;
      this._dohPathNotFound = undefined;
      this._dohPostContentTypeMismatch = undefined;
      this._dohPostPayloadExtractFailed = undefined;
      this._dohPostPayloadNotFound = undefined;
      this._dohPostPayloadTooLarge = undefined;
      this._dohQueryTimeOut = undefined;
      this._dohReq = undefined;
      this._dohReqGet = undefined;
      this._dohReqPost = undefined;
      this._dohReqSendFailed = undefined;
      this._dohReqTcpRetry = undefined;
      this._dohReqTcpRetryFail = undefined;
      this._dohReqUdpRetry = undefined;
      this._dohReqUdpRetryFail = undefined;
      this._dohResp = undefined;
      this._dohRespHeaderAllocFailed = undefined;
      this._dohRespQueFailed = undefined;
      this._dohRespSendFailed = undefined;
      this._dohRespSetupFailed = undefined;
      this._dohRespTcpFrags = undefined;
      this._dohRespUdpFrags = undefined;
      this._dohRetryWTcp = undefined;
      this._dohServSelFailed = undefined;
      this._dohSnatFailed = undefined;
      this._dohTcResp = undefined;
      this._dohTcpDnsReq = undefined;
      this._dohTcpDnsResp = undefined;
      this._dohTcpSendFailed = undefined;
      this._dohUdpDnsReq = undefined;
      this._dohUdpDnsResp = undefined;
      this._dohUdpSendFailed = undefined;
      this._headerLengthLong = undefined;
      this._http2ControlBytes = undefined;
      this._http2DataBytes = undefined;
      this._http2GoawayReceived = undefined;
      this._http2GoawaySent = undefined;
      this._http2HeaderBytes = undefined;
      this._http2ResetReceived = undefined;
      this._http2ResetSent = undefined;
      this._jsiApiNoAuthHdr = undefined;
      this._jsiApiNoToken = undefined;
      this._jsiApiRequests = undefined;
      this._jsiApiResponses = undefined;
      this._jsiHashAddFails = undefined;
      this._jsiHashLookupFails = undefined;
      this._jsiPriRequests = undefined;
      this._jsiRequests = undefined;
      this._jsiResponses = undefined;
      this._jsiSkipNoFi = undefined;
      this._jsiSkipNoUa = undefined;
      this._jsiSkipNotBrowser = undefined;
      this._peakHttp2Conn = undefined;
      this._req100M = undefined;
      this._req100U = undefined;
      this._req10M = undefined;
      this._req10U = undefined;
      this._req1M = undefined;
      this._req1S = undefined;
      this._req200M = undefined;
      this._req200U = undefined;
      this._req20M = undefined;
      this._req20U = undefined;
      this._req2M = undefined;
      this._req2S = undefined;
      this._req500M = undefined;
      this._req500U = undefined;
      this._req50M = undefined;
      this._req50U = undefined;
      this._req5M = undefined;
      this._req5S = undefined;
      this._reqConnect = undefined;
      this._reqContentLen = undefined;
      this._reqDelete = undefined;
      this._reqGet = undefined;
      this._reqHead = undefined;
      this._reqOptions = undefined;
      this._reqOver5S = undefined;
      this._reqPost = undefined;
      this._reqPut = undefined;
      this._reqSz16K = undefined;
      this._reqSz1K = undefined;
      this._reqSz256K = undefined;
      this._reqSz2K = undefined;
      this._reqSz32K = undefined;
      this._reqSz4K = undefined;
      this._reqSz64K = undefined;
      this._reqSz8K = undefined;
      this._reqSzGt256K = undefined;
      this._reqTrace = undefined;
      this._reqTrack = undefined;
      this._reqUnknown = undefined;
      this._rspChunk = undefined;
      this._rspSz16K = undefined;
      this._rspSz1K = undefined;
      this._rspSz256K = undefined;
      this._rspSz2K = undefined;
      this._rspSz32K = undefined;
      this._rspSz4K = undefined;
      this._rspSz64K = undefined;
      this._rspSz8K = undefined;
      this._rspSzGt256K = undefined;
      this._status100 = undefined;
      this._status101 = undefined;
      this._status102 = undefined;
      this._status103 = undefined;
      this._status1Xx = undefined;
      this._status200 = undefined;
      this._status201 = undefined;
      this._status202 = undefined;
      this._status203 = undefined;
      this._status204 = undefined;
      this._status205 = undefined;
      this._status206 = undefined;
      this._status207 = undefined;
      this._status2Xx = undefined;
      this._status300 = undefined;
      this._status301 = undefined;
      this._status302 = undefined;
      this._status303 = undefined;
      this._status304 = undefined;
      this._status305 = undefined;
      this._status306 = undefined;
      this._status307 = undefined;
      this._status3Xx = undefined;
      this._status400 = undefined;
      this._status401 = undefined;
      this._status402 = undefined;
      this._status403 = undefined;
      this._status404 = undefined;
      this._status405 = undefined;
      this._status406 = undefined;
      this._status407 = undefined;
      this._status408 = undefined;
      this._status409 = undefined;
      this._status410 = undefined;
      this._status411 = undefined;
      this._status412 = undefined;
      this._status413 = undefined;
      this._status414 = undefined;
      this._status415 = undefined;
      this._status416 = undefined;
      this._status417 = undefined;
      this._status418 = undefined;
      this._status422 = undefined;
      this._status423 = undefined;
      this._status424 = undefined;
      this._status425 = undefined;
      this._status426 = undefined;
      this._status449 = undefined;
      this._status450 = undefined;
      this._status4Xx = undefined;
      this._status500 = undefined;
      this._status501 = undefined;
      this._status502 = undefined;
      this._status503 = undefined;
      this._status504 = undefined;
      this._status504Ax = undefined;
      this._status505 = undefined;
      this._status506 = undefined;
      this._status507 = undefined;
      this._status508 = undefined;
      this._status509 = undefined;
      this._status510 = undefined;
      this._status5Xx = undefined;
      this._status6Xx = undefined;
      this._statusUnknown = undefined;
      this._streamClosed = undefined;
      this._totalHttp2Bytes = undefined;
      this._totalHttp2Conn = undefined;
      this._totalRequests = undefined;
      this._transactionLimited = undefined;
      this._wsClientSwitch = undefined;
      this._wsHandshakeRequest = undefined;
      this._wsHandshakeSuccess = undefined;
      this._wsServerSwitch = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._chunkSz1K = value.chunkSz1K;
      this._chunkSz2K = value.chunkSz2K;
      this._chunkSz4K = value.chunkSz4K;
      this._chunkSz512 = value.chunkSz512;
      this._chunkSzGt4K = value.chunkSzGt4K;
      this._currHttp2Conn = value.currHttp2Conn;
      this._dohDnsMalformedQuery = value.dohDnsMalformedQuery;
      this._dohDnsQueryTypeA = value.dohDnsQueryTypeA;
      this._dohDnsQueryTypeAaaa = value.dohDnsQueryTypeAaaa;
      this._dohDnsQueryTypeAny = value.dohDnsQueryTypeAny;
      this._dohDnsQueryTypeCname = value.dohDnsQueryTypeCname;
      this._dohDnsQueryTypeMx = value.dohDnsQueryTypeMx;
      this._dohDnsQueryTypeNs = value.dohDnsQueryTypeNs;
      this._dohDnsQueryTypeOthers = value.dohDnsQueryTypeOthers;
      this._dohDnsQueryTypeSoa = value.dohDnsQueryTypeSoa;
      this._dohDnsQueryTypeSrv = value.dohDnsQueryTypeSrv;
      this._dohDnsRespRcodeErrFormat = value.dohDnsRespRcodeErrFormat;
      this._dohDnsRespRcodeErrName = value.dohDnsRespRcodeErrName;
      this._dohDnsRespRcodeErrServer = value.dohDnsRespRcodeErrServer;
      this._dohDnsRespRcodeErrType = value.dohDnsRespRcodeErrType;
      this._dohDnsRespRcodeNotauth = value.dohDnsRespRcodeNotauth;
      this._dohDnsRespRcodeNotzone = value.dohDnsRespRcodeNotzone;
      this._dohDnsRespRcodeNxrrset = value.dohDnsRespRcodeNxrrset;
      this._dohDnsRespRcodeOther = value.dohDnsRespRcodeOther;
      this._dohDnsRespRcodeRefuse = value.dohDnsRespRcodeRefuse;
      this._dohDnsRespRcodeYxdomain = value.dohDnsRespRcodeYxdomain;
      this._dohDnsRespRcodeYxrrset = value.dohDnsRespRcodeYxrrset;
      this._dohGetBase64DecodeFailed = value.dohGetBase64DecodeFailed;
      this._dohGetDnsArgFailed = value.dohGetDnsArgFailed;
      this._dohGetUriTooLong = value.dohGetUriTooLong;
      this._dohMallocFail = value.dohMallocFail;
      this._dohNonDohMethod = value.dohNonDohMethod;
      this._dohNonDohReq = value.dohNonDohReq;
      this._dohNonDohReqGet = value.dohNonDohReqGet;
      this._dohNonDohReqPost = value.dohNonDohReqPost;
      this._dohPathNotFound = value.dohPathNotFound;
      this._dohPostContentTypeMismatch = value.dohPostContentTypeMismatch;
      this._dohPostPayloadExtractFailed = value.dohPostPayloadExtractFailed;
      this._dohPostPayloadNotFound = value.dohPostPayloadNotFound;
      this._dohPostPayloadTooLarge = value.dohPostPayloadTooLarge;
      this._dohQueryTimeOut = value.dohQueryTimeOut;
      this._dohReq = value.dohReq;
      this._dohReqGet = value.dohReqGet;
      this._dohReqPost = value.dohReqPost;
      this._dohReqSendFailed = value.dohReqSendFailed;
      this._dohReqTcpRetry = value.dohReqTcpRetry;
      this._dohReqTcpRetryFail = value.dohReqTcpRetryFail;
      this._dohReqUdpRetry = value.dohReqUdpRetry;
      this._dohReqUdpRetryFail = value.dohReqUdpRetryFail;
      this._dohResp = value.dohResp;
      this._dohRespHeaderAllocFailed = value.dohRespHeaderAllocFailed;
      this._dohRespQueFailed = value.dohRespQueFailed;
      this._dohRespSendFailed = value.dohRespSendFailed;
      this._dohRespSetupFailed = value.dohRespSetupFailed;
      this._dohRespTcpFrags = value.dohRespTcpFrags;
      this._dohRespUdpFrags = value.dohRespUdpFrags;
      this._dohRetryWTcp = value.dohRetryWTcp;
      this._dohServSelFailed = value.dohServSelFailed;
      this._dohSnatFailed = value.dohSnatFailed;
      this._dohTcResp = value.dohTcResp;
      this._dohTcpDnsReq = value.dohTcpDnsReq;
      this._dohTcpDnsResp = value.dohTcpDnsResp;
      this._dohTcpSendFailed = value.dohTcpSendFailed;
      this._dohUdpDnsReq = value.dohUdpDnsReq;
      this._dohUdpDnsResp = value.dohUdpDnsResp;
      this._dohUdpSendFailed = value.dohUdpSendFailed;
      this._headerLengthLong = value.headerLengthLong;
      this._http2ControlBytes = value.http2ControlBytes;
      this._http2DataBytes = value.http2DataBytes;
      this._http2GoawayReceived = value.http2GoawayReceived;
      this._http2GoawaySent = value.http2GoawaySent;
      this._http2HeaderBytes = value.http2HeaderBytes;
      this._http2ResetReceived = value.http2ResetReceived;
      this._http2ResetSent = value.http2ResetSent;
      this._jsiApiNoAuthHdr = value.jsiApiNoAuthHdr;
      this._jsiApiNoToken = value.jsiApiNoToken;
      this._jsiApiRequests = value.jsiApiRequests;
      this._jsiApiResponses = value.jsiApiResponses;
      this._jsiHashAddFails = value.jsiHashAddFails;
      this._jsiHashLookupFails = value.jsiHashLookupFails;
      this._jsiPriRequests = value.jsiPriRequests;
      this._jsiRequests = value.jsiRequests;
      this._jsiResponses = value.jsiResponses;
      this._jsiSkipNoFi = value.jsiSkipNoFi;
      this._jsiSkipNoUa = value.jsiSkipNoUa;
      this._jsiSkipNotBrowser = value.jsiSkipNotBrowser;
      this._peakHttp2Conn = value.peakHttp2Conn;
      this._req100M = value.req100M;
      this._req100U = value.req100U;
      this._req10M = value.req10M;
      this._req10U = value.req10U;
      this._req1M = value.req1M;
      this._req1S = value.req1S;
      this._req200M = value.req200M;
      this._req200U = value.req200U;
      this._req20M = value.req20M;
      this._req20U = value.req20U;
      this._req2M = value.req2M;
      this._req2S = value.req2S;
      this._req500M = value.req500M;
      this._req500U = value.req500U;
      this._req50M = value.req50M;
      this._req50U = value.req50U;
      this._req5M = value.req5M;
      this._req5S = value.req5S;
      this._reqConnect = value.reqConnect;
      this._reqContentLen = value.reqContentLen;
      this._reqDelete = value.reqDelete;
      this._reqGet = value.reqGet;
      this._reqHead = value.reqHead;
      this._reqOptions = value.reqOptions;
      this._reqOver5S = value.reqOver5S;
      this._reqPost = value.reqPost;
      this._reqPut = value.reqPut;
      this._reqSz16K = value.reqSz16K;
      this._reqSz1K = value.reqSz1K;
      this._reqSz256K = value.reqSz256K;
      this._reqSz2K = value.reqSz2K;
      this._reqSz32K = value.reqSz32K;
      this._reqSz4K = value.reqSz4K;
      this._reqSz64K = value.reqSz64K;
      this._reqSz8K = value.reqSz8K;
      this._reqSzGt256K = value.reqSzGt256K;
      this._reqTrace = value.reqTrace;
      this._reqTrack = value.reqTrack;
      this._reqUnknown = value.reqUnknown;
      this._rspChunk = value.rspChunk;
      this._rspSz16K = value.rspSz16K;
      this._rspSz1K = value.rspSz1K;
      this._rspSz256K = value.rspSz256K;
      this._rspSz2K = value.rspSz2K;
      this._rspSz32K = value.rspSz32K;
      this._rspSz4K = value.rspSz4K;
      this._rspSz64K = value.rspSz64K;
      this._rspSz8K = value.rspSz8K;
      this._rspSzGt256K = value.rspSzGt256K;
      this._status100 = value.status100;
      this._status101 = value.status101;
      this._status102 = value.status102;
      this._status103 = value.status103;
      this._status1Xx = value.status1Xx;
      this._status200 = value.status200;
      this._status201 = value.status201;
      this._status202 = value.status202;
      this._status203 = value.status203;
      this._status204 = value.status204;
      this._status205 = value.status205;
      this._status206 = value.status206;
      this._status207 = value.status207;
      this._status2Xx = value.status2Xx;
      this._status300 = value.status300;
      this._status301 = value.status301;
      this._status302 = value.status302;
      this._status303 = value.status303;
      this._status304 = value.status304;
      this._status305 = value.status305;
      this._status306 = value.status306;
      this._status307 = value.status307;
      this._status3Xx = value.status3Xx;
      this._status400 = value.status400;
      this._status401 = value.status401;
      this._status402 = value.status402;
      this._status403 = value.status403;
      this._status404 = value.status404;
      this._status405 = value.status405;
      this._status406 = value.status406;
      this._status407 = value.status407;
      this._status408 = value.status408;
      this._status409 = value.status409;
      this._status410 = value.status410;
      this._status411 = value.status411;
      this._status412 = value.status412;
      this._status413 = value.status413;
      this._status414 = value.status414;
      this._status415 = value.status415;
      this._status416 = value.status416;
      this._status417 = value.status417;
      this._status418 = value.status418;
      this._status422 = value.status422;
      this._status423 = value.status423;
      this._status424 = value.status424;
      this._status425 = value.status425;
      this._status426 = value.status426;
      this._status449 = value.status449;
      this._status450 = value.status450;
      this._status4Xx = value.status4Xx;
      this._status500 = value.status500;
      this._status501 = value.status501;
      this._status502 = value.status502;
      this._status503 = value.status503;
      this._status504 = value.status504;
      this._status504Ax = value.status504Ax;
      this._status505 = value.status505;
      this._status506 = value.status506;
      this._status507 = value.status507;
      this._status508 = value.status508;
      this._status509 = value.status509;
      this._status510 = value.status510;
      this._status5Xx = value.status5Xx;
      this._status6Xx = value.status6Xx;
      this._statusUnknown = value.statusUnknown;
      this._streamClosed = value.streamClosed;
      this._totalHttp2Bytes = value.totalHttp2Bytes;
      this._totalHttp2Conn = value.totalHttp2Conn;
      this._totalRequests = value.totalRequests;
      this._transactionLimited = value.transactionLimited;
      this._wsClientSwitch = value.wsClientSwitch;
      this._wsHandshakeRequest = value.wsHandshakeRequest;
      this._wsHandshakeSuccess = value.wsHandshakeSuccess;
      this._wsServerSwitch = value.wsServerSwitch;
    }
  }

  // chunk_sz_1k - computed: false, optional: true, required: false
  private _chunkSz1K?: number; 
  public get chunkSz1K() {
    return this.getNumberAttribute('chunk_sz_1k');
  }
  public set chunkSz1K(value: number) {
    this._chunkSz1K = value;
  }
  public resetChunkSz1K() {
    this._chunkSz1K = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chunkSz1KInput() {
    return this._chunkSz1K;
  }

  // chunk_sz_2k - computed: false, optional: true, required: false
  private _chunkSz2K?: number; 
  public get chunkSz2K() {
    return this.getNumberAttribute('chunk_sz_2k');
  }
  public set chunkSz2K(value: number) {
    this._chunkSz2K = value;
  }
  public resetChunkSz2K() {
    this._chunkSz2K = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chunkSz2KInput() {
    return this._chunkSz2K;
  }

  // chunk_sz_4k - computed: false, optional: true, required: false
  private _chunkSz4K?: number; 
  public get chunkSz4K() {
    return this.getNumberAttribute('chunk_sz_4k');
  }
  public set chunkSz4K(value: number) {
    this._chunkSz4K = value;
  }
  public resetChunkSz4K() {
    this._chunkSz4K = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chunkSz4KInput() {
    return this._chunkSz4K;
  }

  // chunk_sz_512 - computed: false, optional: true, required: false
  private _chunkSz512?: number; 
  public get chunkSz512() {
    return this.getNumberAttribute('chunk_sz_512');
  }
  public set chunkSz512(value: number) {
    this._chunkSz512 = value;
  }
  public resetChunkSz512() {
    this._chunkSz512 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chunkSz512Input() {
    return this._chunkSz512;
  }

  // chunk_sz_gt_4k - computed: false, optional: true, required: false
  private _chunkSzGt4K?: number; 
  public get chunkSzGt4K() {
    return this.getNumberAttribute('chunk_sz_gt_4k');
  }
  public set chunkSzGt4K(value: number) {
    this._chunkSzGt4K = value;
  }
  public resetChunkSzGt4K() {
    this._chunkSzGt4K = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chunkSzGt4KInput() {
    return this._chunkSzGt4K;
  }

  // curr_http2_conn - computed: false, optional: true, required: false
  private _currHttp2Conn?: number; 
  public get currHttp2Conn() {
    return this.getNumberAttribute('curr_http2_conn');
  }
  public set currHttp2Conn(value: number) {
    this._currHttp2Conn = value;
  }
  public resetCurrHttp2Conn() {
    this._currHttp2Conn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currHttp2ConnInput() {
    return this._currHttp2Conn;
  }

  // doh_dns_malformed_query - computed: false, optional: true, required: false
  private _dohDnsMalformedQuery?: number; 
  public get dohDnsMalformedQuery() {
    return this.getNumberAttribute('doh_dns_malformed_query');
  }
  public set dohDnsMalformedQuery(value: number) {
    this._dohDnsMalformedQuery = value;
  }
  public resetDohDnsMalformedQuery() {
    this._dohDnsMalformedQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dohDnsMalformedQueryInput() {
    return this._dohDnsMalformedQuery;
  }

  // doh_dns_query_type_a - computed: false, optional: true, required: false
  private _dohDnsQueryTypeA?: number; 
  public get dohDnsQueryTypeA() {
    return this.getNumberAttribute('doh_dns_query_type_a');
  }
  public set dohDnsQueryTypeA(value: number) {
    this._dohDnsQueryTypeA = value;
  }
  public resetDohDnsQueryTypeA() {
    this._dohDnsQueryTypeA = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dohDnsQueryTypeAInput() {
    return this._dohDnsQueryTypeA;
  }

  // doh_dns_query_type_aaaa - computed: false, optional: true, required: false
  private _dohDnsQueryTypeAaaa?: number; 
  public get dohDnsQueryTypeAaaa() {
    return this.getNumberAttribute('doh_dns_query_type_aaaa');
  }
  public set dohDnsQueryTypeAaaa(value: number) {
    this._dohDnsQueryTypeAaaa = value;
  }
  public resetDohDnsQueryTypeAaaa() {
    this._dohDnsQueryTypeAaaa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dohDnsQueryTypeAaaaInput() {
    return this._dohDnsQueryTypeAaaa;
  }

  // doh_dns_query_type_any - computed: false, optional: true, required: false
  private _dohDnsQueryTypeAny?: number; 
  public get dohDnsQueryTypeAny() {
    return this.getNumberAttribute('doh_dns_query_type_any');
  }
  public set dohDnsQueryTypeAny(value: number) {
    this._dohDnsQueryTypeAny = value;
  }
  public resetDohDnsQueryTypeAny() {
    this._dohDnsQueryTypeAny = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dohDnsQueryTypeAnyInput() {
    return this._dohDnsQueryTypeAny;
  }

  // doh_dns_query_type_cname - computed: false, optional: true, required: false
  private _dohDnsQueryTypeCname?: number; 
  public get dohDnsQueryTypeCname() {
    return this.getNumberAttribute('doh_dns_query_type_cname');
  }
  public set dohDnsQueryTypeCname(value: number) {
    this._dohDnsQueryTypeCname = value;
  }
  public resetDohDnsQueryTypeCname() {
    this._dohDnsQueryTypeCname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dohDnsQueryTypeCnameInput() {
    return this._dohDnsQueryTypeCname;
  }

  // doh_dns_query_type_mx - computed: false, optional: true, required: false
  private _dohDnsQueryTypeMx?: number; 
  public get dohDnsQueryTypeMx() {
    return this.getNumberAttribute('doh_dns_query_type_mx');
  }
  public set dohDnsQueryTypeMx(value: number) {
    this._dohDnsQueryTypeMx = value;
  }
  public resetDohDnsQueryTypeMx() {
    this._dohDnsQueryTypeMx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dohDnsQueryTypeMxInput() {
    return this._dohDnsQueryTypeMx;
  }

  // doh_dns_query_type_ns - computed: false, optional: true, required: false
  private _dohDnsQueryTypeNs?: number; 
  public get dohDnsQueryTypeNs() {
    return this.getNumberAttribute('doh_dns_query_type_ns');
  }
  public set dohDnsQueryTypeNs(value: number) {
    this._dohDnsQueryTypeNs = value;
  }
  public resetDohDnsQueryTypeNs() {
    this._dohDnsQueryTypeNs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dohDnsQueryTypeNsInput() {
    return this._dohDnsQueryTypeNs;
  }

  // doh_dns_query_type_others - computed: false, optional: true, required: false
  private _dohDnsQueryTypeOthers?: number; 
  public get dohDnsQueryTypeOthers() {
    return this.getNumberAttribute('doh_dns_query_type_others');
  }
  public set dohDnsQueryTypeOthers(value: number) {
    this._dohDnsQueryTypeOthers = value;
  }
  public resetDohDnsQueryTypeOthers() {
    this._dohDnsQueryTypeOthers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dohDnsQueryTypeOthersInput() {
    return this._dohDnsQueryTypeOthers;
  }

  // doh_dns_query_type_soa - computed: false, optional: true, required: false
  private _dohDnsQueryTypeSoa?: number; 
  public get dohDnsQueryTypeSoa() {
    return this.getNumberAttribute('doh_dns_query_type_soa');
  }
  public set dohDnsQueryTypeSoa(value: number) {
    this._dohDnsQueryTypeSoa = value;
  }
  public resetDohDnsQueryTypeSoa() {
    this._dohDnsQueryTypeSoa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dohDnsQueryTypeSoaInput() {
    return this._dohDnsQueryTypeSoa;
  }

  // doh_dns_query_type_srv - computed: false, optional: true, required: false
  private _dohDnsQueryTypeSrv?: number; 
  public get dohDnsQueryTypeSrv() {
    return this.getNumberAttribute('doh_dns_query_type_srv');
  }
  public set dohDnsQueryTypeSrv(value: number) {
    this._dohDnsQueryTypeSrv = value;
  }
  public resetDohDnsQueryTypeSrv() {
    this._dohDnsQueryTypeSrv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dohDnsQueryTypeSrvInput() {
    return this._dohDnsQueryTypeSrv;
  }

  // doh_dns_resp_rcode_err_format - computed: false, optional: true, required: false
  private _dohDnsRespRcodeErrFormat?: number; 
  public get dohDnsRespRcodeErrFormat() {
    return this.getNumberAttribute('doh_dns_resp_rcode_err_format');
  }
  public set dohDnsRespRcodeErrFormat(value: number) {
    this._dohDnsRespRcodeErrFormat = value;
  }
  public resetDohDnsRespRcodeErrFormat() {
    this._dohDnsRespRcodeErrFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dohDnsRespRcodeErrFormatInput() {
    return this._dohDnsRespRcodeErrFormat;
  }

  // doh_dns_resp_rcode_err_name - computed: false, optional: true, required: false
  private _dohDnsRespRcodeErrName?: number; 
  public get dohDnsRespRcodeErrName() {
    return this.getNumberAttribute('doh_dns_resp_rcode_err_name');
  }
  public set dohDnsRespRcodeErrName(value: number) {
    this._dohDnsRespRcodeErrName = value;
  }
  public resetDohDnsRespRcodeErrName() {
    this._dohDnsRespRcodeErrName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dohDnsRespRcodeErrNameInput() {
    return this._dohDnsRespRcodeErrName;
  }

  // doh_dns_resp_rcode_err_server - computed: false, optional: true, required: false
  private _dohDnsRespRcodeErrServer?: number; 
  public get dohDnsRespRcodeErrServer() {
    return this.getNumberAttribute('doh_dns_resp_rcode_err_server');
  }
  public set dohDnsRespRcodeErrServer(value: number) {
    this._dohDnsRespRcodeErrServer = value;
  }
  public resetDohDnsRespRcodeErrServer() {
    this._dohDnsRespRcodeErrServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dohDnsRespRcodeErrServerInput() {
    return this._dohDnsRespRcodeErrServer;
  }

  // doh_dns_resp_rcode_err_type - computed: false, optional: true, required: false
  private _dohDnsRespRcodeErrType?: number; 
  public get dohDnsRespRcodeErrType() {
    return this.getNumberAttribute('doh_dns_resp_rcode_err_type');
  }
  public set dohDnsRespRcodeErrType(value: number) {
    this._dohDnsRespRcodeErrType = value;
  }
  public resetDohDnsRespRcodeErrType() {
    this._dohDnsRespRcodeErrType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dohDnsRespRcodeErrTypeInput() {
    return this._dohDnsRespRcodeErrType;
  }

  // doh_dns_resp_rcode_notauth - computed: false, optional: true, required: false
  private _dohDnsRespRcodeNotauth?: number; 
  public get dohDnsRespRcodeNotauth() {
    return this.getNumberAttribute('doh_dns_resp_rcode_notauth');
  }
  public set dohDnsRespRcodeNotauth(value: number) {
    this._dohDnsRespRcodeNotauth = value;
  }
  public resetDohDnsRespRcodeNotauth() {
    this._dohDnsRespRcodeNotauth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dohDnsRespRcodeNotauthInput() {
    return this._dohDnsRespRcodeNotauth;
  }

  // doh_dns_resp_rcode_notzone - computed: false, optional: true, required: false
  private _dohDnsRespRcodeNotzone?: number; 
  public get dohDnsRespRcodeNotzone() {
    return this.getNumberAttribute('doh_dns_resp_rcode_notzone');
  }
  public set dohDnsRespRcodeNotzone(value: number) {
    this._dohDnsRespRcodeNotzone = value;
  }
  public resetDohDnsRespRcodeNotzone() {
    this._dohDnsRespRcodeNotzone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dohDnsRespRcodeNotzoneInput() {
    return this._dohDnsRespRcodeNotzone;
  }

  // doh_dns_resp_rcode_nxrrset - computed: false, optional: true, required: false
  private _dohDnsRespRcodeNxrrset?: number; 
  public get dohDnsRespRcodeNxrrset() {
    return this.getNumberAttribute('doh_dns_resp_rcode_nxrrset');
  }
  public set dohDnsRespRcodeNxrrset(value: number) {
    this._dohDnsRespRcodeNxrrset = value;
  }
  public resetDohDnsRespRcodeNxrrset() {
    this._dohDnsRespRcodeNxrrset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dohDnsRespRcodeNxrrsetInput() {
    return this._dohDnsRespRcodeNxrrset;
  }

  // doh_dns_resp_rcode_other - computed: false, optional: true, required: false
  private _dohDnsRespRcodeOther?: number; 
  public get dohDnsRespRcodeOther() {
    return this.getNumberAttribute('doh_dns_resp_rcode_other');
  }
  public set dohDnsRespRcodeOther(value: number) {
    this._dohDnsRespRcodeOther = value;
  }
  public resetDohDnsRespRcodeOther() {
    this._dohDnsRespRcodeOther = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dohDnsRespRcodeOtherInput() {
    return this._dohDnsRespRcodeOther;
  }

  // doh_dns_resp_rcode_refuse - computed: false, optional: true, required: false
  private _dohDnsRespRcodeRefuse?: number; 
  public get dohDnsRespRcodeRefuse() {
    return this.getNumberAttribute('doh_dns_resp_rcode_refuse');
  }
  public set dohDnsRespRcodeRefuse(value: number) {
    this._dohDnsRespRcodeRefuse = value;
  }
  public resetDohDnsRespRcodeRefuse() {
    this._dohDnsRespRcodeRefuse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dohDnsRespRcodeRefuseInput() {
    return this._dohDnsRespRcodeRefuse;
  }

  // doh_dns_resp_rcode_yxdomain - computed: false, optional: true, required: false
  private _dohDnsRespRcodeYxdomain?: number; 
  public get dohDnsRespRcodeYxdomain() {
    return this.getNumberAttribute('doh_dns_resp_rcode_yxdomain');
  }
  public set dohDnsRespRcodeYxdomain(value: number) {
    this._dohDnsRespRcodeYxdomain = value;
  }
  public resetDohDnsRespRcodeYxdomain() {
    this._dohDnsRespRcodeYxdomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dohDnsRespRcodeYxdomainInput() {
    return this._dohDnsRespRcodeYxdomain;
  }

  // doh_dns_resp_rcode_yxrrset - computed: false, optional: true, required: false
  private _dohDnsRespRcodeYxrrset?: number; 
  public get dohDnsRespRcodeYxrrset() {
    return this.getNumberAttribute('doh_dns_resp_rcode_yxrrset');
  }
  public set dohDnsRespRcodeYxrrset(value: number) {
    this._dohDnsRespRcodeYxrrset = value;
  }
  public resetDohDnsRespRcodeYxrrset() {
    this._dohDnsRespRcodeYxrrset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dohDnsRespRcodeYxrrsetInput() {
    return this._dohDnsRespRcodeYxrrset;
  }

  // doh_get_base64_decode_failed - computed: false, optional: true, required: false
  private _dohGetBase64DecodeFailed?: number; 
  public get dohGetBase64DecodeFailed() {
    return this.getNumberAttribute('doh_get_base64_decode_failed');
  }
  public set dohGetBase64DecodeFailed(value: number) {
    this._dohGetBase64DecodeFailed = value;
  }
  public resetDohGetBase64DecodeFailed() {
    this._dohGetBase64DecodeFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dohGetBase64DecodeFailedInput() {
    return this._dohGetBase64DecodeFailed;
  }

  // doh_get_dns_arg_failed - computed: false, optional: true, required: false
  private _dohGetDnsArgFailed?: number; 
  public get dohGetDnsArgFailed() {
    return this.getNumberAttribute('doh_get_dns_arg_failed');
  }
  public set dohGetDnsArgFailed(value: number) {
    this._dohGetDnsArgFailed = value;
  }
  public resetDohGetDnsArgFailed() {
    this._dohGetDnsArgFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dohGetDnsArgFailedInput() {
    return this._dohGetDnsArgFailed;
  }

  // doh_get_uri_too_long - computed: false, optional: true, required: false
  private _dohGetUriTooLong?: number; 
  public get dohGetUriTooLong() {
    return this.getNumberAttribute('doh_get_uri_too_long');
  }
  public set dohGetUriTooLong(value: number) {
    this._dohGetUriTooLong = value;
  }
  public resetDohGetUriTooLong() {
    this._dohGetUriTooLong = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dohGetUriTooLongInput() {
    return this._dohGetUriTooLong;
  }

  // doh_malloc_fail - computed: false, optional: true, required: false
  private _dohMallocFail?: number; 
  public get dohMallocFail() {
    return this.getNumberAttribute('doh_malloc_fail');
  }
  public set dohMallocFail(value: number) {
    this._dohMallocFail = value;
  }
  public resetDohMallocFail() {
    this._dohMallocFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dohMallocFailInput() {
    return this._dohMallocFail;
  }

  // doh_non_doh_method - computed: false, optional: true, required: false
  private _dohNonDohMethod?: number; 
  public get dohNonDohMethod() {
    return this.getNumberAttribute('doh_non_doh_method');
  }
  public set dohNonDohMethod(value: number) {
    this._dohNonDohMethod = value;
  }
  public resetDohNonDohMethod() {
    this._dohNonDohMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dohNonDohMethodInput() {
    return this._dohNonDohMethod;
  }

  // doh_non_doh_req - computed: false, optional: true, required: false
  private _dohNonDohReq?: number; 
  public get dohNonDohReq() {
    return this.getNumberAttribute('doh_non_doh_req');
  }
  public set dohNonDohReq(value: number) {
    this._dohNonDohReq = value;
  }
  public resetDohNonDohReq() {
    this._dohNonDohReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dohNonDohReqInput() {
    return this._dohNonDohReq;
  }

  // doh_non_doh_req_get - computed: false, optional: true, required: false
  private _dohNonDohReqGet?: number; 
  public get dohNonDohReqGet() {
    return this.getNumberAttribute('doh_non_doh_req_get');
  }
  public set dohNonDohReqGet(value: number) {
    this._dohNonDohReqGet = value;
  }
  public resetDohNonDohReqGet() {
    this._dohNonDohReqGet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dohNonDohReqGetInput() {
    return this._dohNonDohReqGet;
  }

  // doh_non_doh_req_post - computed: false, optional: true, required: false
  private _dohNonDohReqPost?: number; 
  public get dohNonDohReqPost() {
    return this.getNumberAttribute('doh_non_doh_req_post');
  }
  public set dohNonDohReqPost(value: number) {
    this._dohNonDohReqPost = value;
  }
  public resetDohNonDohReqPost() {
    this._dohNonDohReqPost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dohNonDohReqPostInput() {
    return this._dohNonDohReqPost;
  }

  // doh_path_not_found - computed: false, optional: true, required: false
  private _dohPathNotFound?: number; 
  public get dohPathNotFound() {
    return this.getNumberAttribute('doh_path_not_found');
  }
  public set dohPathNotFound(value: number) {
    this._dohPathNotFound = value;
  }
  public resetDohPathNotFound() {
    this._dohPathNotFound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dohPathNotFoundInput() {
    return this._dohPathNotFound;
  }

  // doh_post_content_type_mismatch - computed: false, optional: true, required: false
  private _dohPostContentTypeMismatch?: number; 
  public get dohPostContentTypeMismatch() {
    return this.getNumberAttribute('doh_post_content_type_mismatch');
  }
  public set dohPostContentTypeMismatch(value: number) {
    this._dohPostContentTypeMismatch = value;
  }
  public resetDohPostContentTypeMismatch() {
    this._dohPostContentTypeMismatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dohPostContentTypeMismatchInput() {
    return this._dohPostContentTypeMismatch;
  }

  // doh_post_payload_extract_failed - computed: false, optional: true, required: false
  private _dohPostPayloadExtractFailed?: number; 
  public get dohPostPayloadExtractFailed() {
    return this.getNumberAttribute('doh_post_payload_extract_failed');
  }
  public set dohPostPayloadExtractFailed(value: number) {
    this._dohPostPayloadExtractFailed = value;
  }
  public resetDohPostPayloadExtractFailed() {
    this._dohPostPayloadExtractFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dohPostPayloadExtractFailedInput() {
    return this._dohPostPayloadExtractFailed;
  }

  // doh_post_payload_not_found - computed: false, optional: true, required: false
  private _dohPostPayloadNotFound?: number; 
  public get dohPostPayloadNotFound() {
    return this.getNumberAttribute('doh_post_payload_not_found');
  }
  public set dohPostPayloadNotFound(value: number) {
    this._dohPostPayloadNotFound = value;
  }
  public resetDohPostPayloadNotFound() {
    this._dohPostPayloadNotFound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dohPostPayloadNotFoundInput() {
    return this._dohPostPayloadNotFound;
  }

  // doh_post_payload_too_large - computed: false, optional: true, required: false
  private _dohPostPayloadTooLarge?: number; 
  public get dohPostPayloadTooLarge() {
    return this.getNumberAttribute('doh_post_payload_too_large');
  }
  public set dohPostPayloadTooLarge(value: number) {
    this._dohPostPayloadTooLarge = value;
  }
  public resetDohPostPayloadTooLarge() {
    this._dohPostPayloadTooLarge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dohPostPayloadTooLargeInput() {
    return this._dohPostPayloadTooLarge;
  }

  // doh_query_time_out - computed: false, optional: true, required: false
  private _dohQueryTimeOut?: number; 
  public get dohQueryTimeOut() {
    return this.getNumberAttribute('doh_query_time_out');
  }
  public set dohQueryTimeOut(value: number) {
    this._dohQueryTimeOut = value;
  }
  public resetDohQueryTimeOut() {
    this._dohQueryTimeOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dohQueryTimeOutInput() {
    return this._dohQueryTimeOut;
  }

  // doh_req - computed: false, optional: true, required: false
  private _dohReq?: number; 
  public get dohReq() {
    return this.getNumberAttribute('doh_req');
  }
  public set dohReq(value: number) {
    this._dohReq = value;
  }
  public resetDohReq() {
    this._dohReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dohReqInput() {
    return this._dohReq;
  }

  // doh_req_get - computed: false, optional: true, required: false
  private _dohReqGet?: number; 
  public get dohReqGet() {
    return this.getNumberAttribute('doh_req_get');
  }
  public set dohReqGet(value: number) {
    this._dohReqGet = value;
  }
  public resetDohReqGet() {
    this._dohReqGet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dohReqGetInput() {
    return this._dohReqGet;
  }

  // doh_req_post - computed: false, optional: true, required: false
  private _dohReqPost?: number; 
  public get dohReqPost() {
    return this.getNumberAttribute('doh_req_post');
  }
  public set dohReqPost(value: number) {
    this._dohReqPost = value;
  }
  public resetDohReqPost() {
    this._dohReqPost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dohReqPostInput() {
    return this._dohReqPost;
  }

  // doh_req_send_failed - computed: false, optional: true, required: false
  private _dohReqSendFailed?: number; 
  public get dohReqSendFailed() {
    return this.getNumberAttribute('doh_req_send_failed');
  }
  public set dohReqSendFailed(value: number) {
    this._dohReqSendFailed = value;
  }
  public resetDohReqSendFailed() {
    this._dohReqSendFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dohReqSendFailedInput() {
    return this._dohReqSendFailed;
  }

  // doh_req_tcp_retry - computed: false, optional: true, required: false
  private _dohReqTcpRetry?: number; 
  public get dohReqTcpRetry() {
    return this.getNumberAttribute('doh_req_tcp_retry');
  }
  public set dohReqTcpRetry(value: number) {
    this._dohReqTcpRetry = value;
  }
  public resetDohReqTcpRetry() {
    this._dohReqTcpRetry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dohReqTcpRetryInput() {
    return this._dohReqTcpRetry;
  }

  // doh_req_tcp_retry_fail - computed: false, optional: true, required: false
  private _dohReqTcpRetryFail?: number; 
  public get dohReqTcpRetryFail() {
    return this.getNumberAttribute('doh_req_tcp_retry_fail');
  }
  public set dohReqTcpRetryFail(value: number) {
    this._dohReqTcpRetryFail = value;
  }
  public resetDohReqTcpRetryFail() {
    this._dohReqTcpRetryFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dohReqTcpRetryFailInput() {
    return this._dohReqTcpRetryFail;
  }

  // doh_req_udp_retry - computed: false, optional: true, required: false
  private _dohReqUdpRetry?: number; 
  public get dohReqUdpRetry() {
    return this.getNumberAttribute('doh_req_udp_retry');
  }
  public set dohReqUdpRetry(value: number) {
    this._dohReqUdpRetry = value;
  }
  public resetDohReqUdpRetry() {
    this._dohReqUdpRetry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dohReqUdpRetryInput() {
    return this._dohReqUdpRetry;
  }

  // doh_req_udp_retry_fail - computed: false, optional: true, required: false
  private _dohReqUdpRetryFail?: number; 
  public get dohReqUdpRetryFail() {
    return this.getNumberAttribute('doh_req_udp_retry_fail');
  }
  public set dohReqUdpRetryFail(value: number) {
    this._dohReqUdpRetryFail = value;
  }
  public resetDohReqUdpRetryFail() {
    this._dohReqUdpRetryFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dohReqUdpRetryFailInput() {
    return this._dohReqUdpRetryFail;
  }

  // doh_resp - computed: false, optional: true, required: false
  private _dohResp?: number; 
  public get dohResp() {
    return this.getNumberAttribute('doh_resp');
  }
  public set dohResp(value: number) {
    this._dohResp = value;
  }
  public resetDohResp() {
    this._dohResp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dohRespInput() {
    return this._dohResp;
  }

  // doh_resp_header_alloc_failed - computed: false, optional: true, required: false
  private _dohRespHeaderAllocFailed?: number; 
  public get dohRespHeaderAllocFailed() {
    return this.getNumberAttribute('doh_resp_header_alloc_failed');
  }
  public set dohRespHeaderAllocFailed(value: number) {
    this._dohRespHeaderAllocFailed = value;
  }
  public resetDohRespHeaderAllocFailed() {
    this._dohRespHeaderAllocFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dohRespHeaderAllocFailedInput() {
    return this._dohRespHeaderAllocFailed;
  }

  // doh_resp_que_failed - computed: false, optional: true, required: false
  private _dohRespQueFailed?: number; 
  public get dohRespQueFailed() {
    return this.getNumberAttribute('doh_resp_que_failed');
  }
  public set dohRespQueFailed(value: number) {
    this._dohRespQueFailed = value;
  }
  public resetDohRespQueFailed() {
    this._dohRespQueFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dohRespQueFailedInput() {
    return this._dohRespQueFailed;
  }

  // doh_resp_send_failed - computed: false, optional: true, required: false
  private _dohRespSendFailed?: number; 
  public get dohRespSendFailed() {
    return this.getNumberAttribute('doh_resp_send_failed');
  }
  public set dohRespSendFailed(value: number) {
    this._dohRespSendFailed = value;
  }
  public resetDohRespSendFailed() {
    this._dohRespSendFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dohRespSendFailedInput() {
    return this._dohRespSendFailed;
  }

  // doh_resp_setup_failed - computed: false, optional: true, required: false
  private _dohRespSetupFailed?: number; 
  public get dohRespSetupFailed() {
    return this.getNumberAttribute('doh_resp_setup_failed');
  }
  public set dohRespSetupFailed(value: number) {
    this._dohRespSetupFailed = value;
  }
  public resetDohRespSetupFailed() {
    this._dohRespSetupFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dohRespSetupFailedInput() {
    return this._dohRespSetupFailed;
  }

  // doh_resp_tcp_frags - computed: false, optional: true, required: false
  private _dohRespTcpFrags?: number; 
  public get dohRespTcpFrags() {
    return this.getNumberAttribute('doh_resp_tcp_frags');
  }
  public set dohRespTcpFrags(value: number) {
    this._dohRespTcpFrags = value;
  }
  public resetDohRespTcpFrags() {
    this._dohRespTcpFrags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dohRespTcpFragsInput() {
    return this._dohRespTcpFrags;
  }

  // doh_resp_udp_frags - computed: false, optional: true, required: false
  private _dohRespUdpFrags?: number; 
  public get dohRespUdpFrags() {
    return this.getNumberAttribute('doh_resp_udp_frags');
  }
  public set dohRespUdpFrags(value: number) {
    this._dohRespUdpFrags = value;
  }
  public resetDohRespUdpFrags() {
    this._dohRespUdpFrags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dohRespUdpFragsInput() {
    return this._dohRespUdpFrags;
  }

  // doh_retry_w_tcp - computed: false, optional: true, required: false
  private _dohRetryWTcp?: number; 
  public get dohRetryWTcp() {
    return this.getNumberAttribute('doh_retry_w_tcp');
  }
  public set dohRetryWTcp(value: number) {
    this._dohRetryWTcp = value;
  }
  public resetDohRetryWTcp() {
    this._dohRetryWTcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dohRetryWTcpInput() {
    return this._dohRetryWTcp;
  }

  // doh_serv_sel_failed - computed: false, optional: true, required: false
  private _dohServSelFailed?: number; 
  public get dohServSelFailed() {
    return this.getNumberAttribute('doh_serv_sel_failed');
  }
  public set dohServSelFailed(value: number) {
    this._dohServSelFailed = value;
  }
  public resetDohServSelFailed() {
    this._dohServSelFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dohServSelFailedInput() {
    return this._dohServSelFailed;
  }

  // doh_snat_failed - computed: false, optional: true, required: false
  private _dohSnatFailed?: number; 
  public get dohSnatFailed() {
    return this.getNumberAttribute('doh_snat_failed');
  }
  public set dohSnatFailed(value: number) {
    this._dohSnatFailed = value;
  }
  public resetDohSnatFailed() {
    this._dohSnatFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dohSnatFailedInput() {
    return this._dohSnatFailed;
  }

  // doh_tc_resp - computed: false, optional: true, required: false
  private _dohTcResp?: number; 
  public get dohTcResp() {
    return this.getNumberAttribute('doh_tc_resp');
  }
  public set dohTcResp(value: number) {
    this._dohTcResp = value;
  }
  public resetDohTcResp() {
    this._dohTcResp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dohTcRespInput() {
    return this._dohTcResp;
  }

  // doh_tcp_dns_req - computed: false, optional: true, required: false
  private _dohTcpDnsReq?: number; 
  public get dohTcpDnsReq() {
    return this.getNumberAttribute('doh_tcp_dns_req');
  }
  public set dohTcpDnsReq(value: number) {
    this._dohTcpDnsReq = value;
  }
  public resetDohTcpDnsReq() {
    this._dohTcpDnsReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dohTcpDnsReqInput() {
    return this._dohTcpDnsReq;
  }

  // doh_tcp_dns_resp - computed: false, optional: true, required: false
  private _dohTcpDnsResp?: number; 
  public get dohTcpDnsResp() {
    return this.getNumberAttribute('doh_tcp_dns_resp');
  }
  public set dohTcpDnsResp(value: number) {
    this._dohTcpDnsResp = value;
  }
  public resetDohTcpDnsResp() {
    this._dohTcpDnsResp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dohTcpDnsRespInput() {
    return this._dohTcpDnsResp;
  }

  // doh_tcp_send_failed - computed: false, optional: true, required: false
  private _dohTcpSendFailed?: number; 
  public get dohTcpSendFailed() {
    return this.getNumberAttribute('doh_tcp_send_failed');
  }
  public set dohTcpSendFailed(value: number) {
    this._dohTcpSendFailed = value;
  }
  public resetDohTcpSendFailed() {
    this._dohTcpSendFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dohTcpSendFailedInput() {
    return this._dohTcpSendFailed;
  }

  // doh_udp_dns_req - computed: false, optional: true, required: false
  private _dohUdpDnsReq?: number; 
  public get dohUdpDnsReq() {
    return this.getNumberAttribute('doh_udp_dns_req');
  }
  public set dohUdpDnsReq(value: number) {
    this._dohUdpDnsReq = value;
  }
  public resetDohUdpDnsReq() {
    this._dohUdpDnsReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dohUdpDnsReqInput() {
    return this._dohUdpDnsReq;
  }

  // doh_udp_dns_resp - computed: false, optional: true, required: false
  private _dohUdpDnsResp?: number; 
  public get dohUdpDnsResp() {
    return this.getNumberAttribute('doh_udp_dns_resp');
  }
  public set dohUdpDnsResp(value: number) {
    this._dohUdpDnsResp = value;
  }
  public resetDohUdpDnsResp() {
    this._dohUdpDnsResp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dohUdpDnsRespInput() {
    return this._dohUdpDnsResp;
  }

  // doh_udp_send_failed - computed: false, optional: true, required: false
  private _dohUdpSendFailed?: number; 
  public get dohUdpSendFailed() {
    return this.getNumberAttribute('doh_udp_send_failed');
  }
  public set dohUdpSendFailed(value: number) {
    this._dohUdpSendFailed = value;
  }
  public resetDohUdpSendFailed() {
    this._dohUdpSendFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dohUdpSendFailedInput() {
    return this._dohUdpSendFailed;
  }

  // header_length_long - computed: false, optional: true, required: false
  private _headerLengthLong?: number; 
  public get headerLengthLong() {
    return this.getNumberAttribute('header_length_long');
  }
  public set headerLengthLong(value: number) {
    this._headerLengthLong = value;
  }
  public resetHeaderLengthLong() {
    this._headerLengthLong = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerLengthLongInput() {
    return this._headerLengthLong;
  }

  // http2_control_bytes - computed: false, optional: true, required: false
  private _http2ControlBytes?: number; 
  public get http2ControlBytes() {
    return this.getNumberAttribute('http2_control_bytes');
  }
  public set http2ControlBytes(value: number) {
    this._http2ControlBytes = value;
  }
  public resetHttp2ControlBytes() {
    this._http2ControlBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http2ControlBytesInput() {
    return this._http2ControlBytes;
  }

  // http2_data_bytes - computed: false, optional: true, required: false
  private _http2DataBytes?: number; 
  public get http2DataBytes() {
    return this.getNumberAttribute('http2_data_bytes');
  }
  public set http2DataBytes(value: number) {
    this._http2DataBytes = value;
  }
  public resetHttp2DataBytes() {
    this._http2DataBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http2DataBytesInput() {
    return this._http2DataBytes;
  }

  // http2_goaway_received - computed: false, optional: true, required: false
  private _http2GoawayReceived?: number; 
  public get http2GoawayReceived() {
    return this.getNumberAttribute('http2_goaway_received');
  }
  public set http2GoawayReceived(value: number) {
    this._http2GoawayReceived = value;
  }
  public resetHttp2GoawayReceived() {
    this._http2GoawayReceived = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http2GoawayReceivedInput() {
    return this._http2GoawayReceived;
  }

  // http2_goaway_sent - computed: false, optional: true, required: false
  private _http2GoawaySent?: number; 
  public get http2GoawaySent() {
    return this.getNumberAttribute('http2_goaway_sent');
  }
  public set http2GoawaySent(value: number) {
    this._http2GoawaySent = value;
  }
  public resetHttp2GoawaySent() {
    this._http2GoawaySent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http2GoawaySentInput() {
    return this._http2GoawaySent;
  }

  // http2_header_bytes - computed: false, optional: true, required: false
  private _http2HeaderBytes?: number; 
  public get http2HeaderBytes() {
    return this.getNumberAttribute('http2_header_bytes');
  }
  public set http2HeaderBytes(value: number) {
    this._http2HeaderBytes = value;
  }
  public resetHttp2HeaderBytes() {
    this._http2HeaderBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http2HeaderBytesInput() {
    return this._http2HeaderBytes;
  }

  // http2_reset_received - computed: false, optional: true, required: false
  private _http2ResetReceived?: number; 
  public get http2ResetReceived() {
    return this.getNumberAttribute('http2_reset_received');
  }
  public set http2ResetReceived(value: number) {
    this._http2ResetReceived = value;
  }
  public resetHttp2ResetReceived() {
    this._http2ResetReceived = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http2ResetReceivedInput() {
    return this._http2ResetReceived;
  }

  // http2_reset_sent - computed: false, optional: true, required: false
  private _http2ResetSent?: number; 
  public get http2ResetSent() {
    return this.getNumberAttribute('http2_reset_sent');
  }
  public set http2ResetSent(value: number) {
    this._http2ResetSent = value;
  }
  public resetHttp2ResetSent() {
    this._http2ResetSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http2ResetSentInput() {
    return this._http2ResetSent;
  }

  // jsi_api_no_auth_hdr - computed: false, optional: true, required: false
  private _jsiApiNoAuthHdr?: number; 
  public get jsiApiNoAuthHdr() {
    return this.getNumberAttribute('jsi_api_no_auth_hdr');
  }
  public set jsiApiNoAuthHdr(value: number) {
    this._jsiApiNoAuthHdr = value;
  }
  public resetJsiApiNoAuthHdr() {
    this._jsiApiNoAuthHdr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsiApiNoAuthHdrInput() {
    return this._jsiApiNoAuthHdr;
  }

  // jsi_api_no_token - computed: false, optional: true, required: false
  private _jsiApiNoToken?: number; 
  public get jsiApiNoToken() {
    return this.getNumberAttribute('jsi_api_no_token');
  }
  public set jsiApiNoToken(value: number) {
    this._jsiApiNoToken = value;
  }
  public resetJsiApiNoToken() {
    this._jsiApiNoToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsiApiNoTokenInput() {
    return this._jsiApiNoToken;
  }

  // jsi_api_requests - computed: false, optional: true, required: false
  private _jsiApiRequests?: number; 
  public get jsiApiRequests() {
    return this.getNumberAttribute('jsi_api_requests');
  }
  public set jsiApiRequests(value: number) {
    this._jsiApiRequests = value;
  }
  public resetJsiApiRequests() {
    this._jsiApiRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsiApiRequestsInput() {
    return this._jsiApiRequests;
  }

  // jsi_api_responses - computed: false, optional: true, required: false
  private _jsiApiResponses?: number; 
  public get jsiApiResponses() {
    return this.getNumberAttribute('jsi_api_responses');
  }
  public set jsiApiResponses(value: number) {
    this._jsiApiResponses = value;
  }
  public resetJsiApiResponses() {
    this._jsiApiResponses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsiApiResponsesInput() {
    return this._jsiApiResponses;
  }

  // jsi_hash_add_fails - computed: false, optional: true, required: false
  private _jsiHashAddFails?: number; 
  public get jsiHashAddFails() {
    return this.getNumberAttribute('jsi_hash_add_fails');
  }
  public set jsiHashAddFails(value: number) {
    this._jsiHashAddFails = value;
  }
  public resetJsiHashAddFails() {
    this._jsiHashAddFails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsiHashAddFailsInput() {
    return this._jsiHashAddFails;
  }

  // jsi_hash_lookup_fails - computed: false, optional: true, required: false
  private _jsiHashLookupFails?: number; 
  public get jsiHashLookupFails() {
    return this.getNumberAttribute('jsi_hash_lookup_fails');
  }
  public set jsiHashLookupFails(value: number) {
    this._jsiHashLookupFails = value;
  }
  public resetJsiHashLookupFails() {
    this._jsiHashLookupFails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsiHashLookupFailsInput() {
    return this._jsiHashLookupFails;
  }

  // jsi_pri_requests - computed: false, optional: true, required: false
  private _jsiPriRequests?: number; 
  public get jsiPriRequests() {
    return this.getNumberAttribute('jsi_pri_requests');
  }
  public set jsiPriRequests(value: number) {
    this._jsiPriRequests = value;
  }
  public resetJsiPriRequests() {
    this._jsiPriRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsiPriRequestsInput() {
    return this._jsiPriRequests;
  }

  // jsi_requests - computed: false, optional: true, required: false
  private _jsiRequests?: number; 
  public get jsiRequests() {
    return this.getNumberAttribute('jsi_requests');
  }
  public set jsiRequests(value: number) {
    this._jsiRequests = value;
  }
  public resetJsiRequests() {
    this._jsiRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsiRequestsInput() {
    return this._jsiRequests;
  }

  // jsi_responses - computed: false, optional: true, required: false
  private _jsiResponses?: number; 
  public get jsiResponses() {
    return this.getNumberAttribute('jsi_responses');
  }
  public set jsiResponses(value: number) {
    this._jsiResponses = value;
  }
  public resetJsiResponses() {
    this._jsiResponses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsiResponsesInput() {
    return this._jsiResponses;
  }

  // jsi_skip_no_fi - computed: false, optional: true, required: false
  private _jsiSkipNoFi?: number; 
  public get jsiSkipNoFi() {
    return this.getNumberAttribute('jsi_skip_no_fi');
  }
  public set jsiSkipNoFi(value: number) {
    this._jsiSkipNoFi = value;
  }
  public resetJsiSkipNoFi() {
    this._jsiSkipNoFi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsiSkipNoFiInput() {
    return this._jsiSkipNoFi;
  }

  // jsi_skip_no_ua - computed: false, optional: true, required: false
  private _jsiSkipNoUa?: number; 
  public get jsiSkipNoUa() {
    return this.getNumberAttribute('jsi_skip_no_ua');
  }
  public set jsiSkipNoUa(value: number) {
    this._jsiSkipNoUa = value;
  }
  public resetJsiSkipNoUa() {
    this._jsiSkipNoUa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsiSkipNoUaInput() {
    return this._jsiSkipNoUa;
  }

  // jsi_skip_not_browser - computed: false, optional: true, required: false
  private _jsiSkipNotBrowser?: number; 
  public get jsiSkipNotBrowser() {
    return this.getNumberAttribute('jsi_skip_not_browser');
  }
  public set jsiSkipNotBrowser(value: number) {
    this._jsiSkipNotBrowser = value;
  }
  public resetJsiSkipNotBrowser() {
    this._jsiSkipNotBrowser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsiSkipNotBrowserInput() {
    return this._jsiSkipNotBrowser;
  }

  // peak_http2_conn - computed: false, optional: true, required: false
  private _peakHttp2Conn?: number; 
  public get peakHttp2Conn() {
    return this.getNumberAttribute('peak_http2_conn');
  }
  public set peakHttp2Conn(value: number) {
    this._peakHttp2Conn = value;
  }
  public resetPeakHttp2Conn() {
    this._peakHttp2Conn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peakHttp2ConnInput() {
    return this._peakHttp2Conn;
  }

  // req_100m - computed: false, optional: true, required: false
  private _req100M?: number; 
  public get req100M() {
    return this.getNumberAttribute('req_100m');
  }
  public set req100M(value: number) {
    this._req100M = value;
  }
  public resetReq100M() {
    this._req100M = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get req100MInput() {
    return this._req100M;
  }

  // req_100u - computed: false, optional: true, required: false
  private _req100U?: number; 
  public get req100U() {
    return this.getNumberAttribute('req_100u');
  }
  public set req100U(value: number) {
    this._req100U = value;
  }
  public resetReq100U() {
    this._req100U = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get req100UInput() {
    return this._req100U;
  }

  // req_10m - computed: false, optional: true, required: false
  private _req10M?: number; 
  public get req10M() {
    return this.getNumberAttribute('req_10m');
  }
  public set req10M(value: number) {
    this._req10M = value;
  }
  public resetReq10M() {
    this._req10M = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get req10MInput() {
    return this._req10M;
  }

  // req_10u - computed: false, optional: true, required: false
  private _req10U?: number; 
  public get req10U() {
    return this.getNumberAttribute('req_10u');
  }
  public set req10U(value: number) {
    this._req10U = value;
  }
  public resetReq10U() {
    this._req10U = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get req10UInput() {
    return this._req10U;
  }

  // req_1m - computed: false, optional: true, required: false
  private _req1M?: number; 
  public get req1M() {
    return this.getNumberAttribute('req_1m');
  }
  public set req1M(value: number) {
    this._req1M = value;
  }
  public resetReq1M() {
    this._req1M = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get req1MInput() {
    return this._req1M;
  }

  // req_1s - computed: false, optional: true, required: false
  private _req1S?: number; 
  public get req1S() {
    return this.getNumberAttribute('req_1s');
  }
  public set req1S(value: number) {
    this._req1S = value;
  }
  public resetReq1S() {
    this._req1S = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get req1SInput() {
    return this._req1S;
  }

  // req_200m - computed: false, optional: true, required: false
  private _req200M?: number; 
  public get req200M() {
    return this.getNumberAttribute('req_200m');
  }
  public set req200M(value: number) {
    this._req200M = value;
  }
  public resetReq200M() {
    this._req200M = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get req200MInput() {
    return this._req200M;
  }

  // req_200u - computed: false, optional: true, required: false
  private _req200U?: number; 
  public get req200U() {
    return this.getNumberAttribute('req_200u');
  }
  public set req200U(value: number) {
    this._req200U = value;
  }
  public resetReq200U() {
    this._req200U = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get req200UInput() {
    return this._req200U;
  }

  // req_20m - computed: false, optional: true, required: false
  private _req20M?: number; 
  public get req20M() {
    return this.getNumberAttribute('req_20m');
  }
  public set req20M(value: number) {
    this._req20M = value;
  }
  public resetReq20M() {
    this._req20M = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get req20MInput() {
    return this._req20M;
  }

  // req_20u - computed: false, optional: true, required: false
  private _req20U?: number; 
  public get req20U() {
    return this.getNumberAttribute('req_20u');
  }
  public set req20U(value: number) {
    this._req20U = value;
  }
  public resetReq20U() {
    this._req20U = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get req20UInput() {
    return this._req20U;
  }

  // req_2m - computed: false, optional: true, required: false
  private _req2M?: number; 
  public get req2M() {
    return this.getNumberAttribute('req_2m');
  }
  public set req2M(value: number) {
    this._req2M = value;
  }
  public resetReq2M() {
    this._req2M = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get req2MInput() {
    return this._req2M;
  }

  // req_2s - computed: false, optional: true, required: false
  private _req2S?: number; 
  public get req2S() {
    return this.getNumberAttribute('req_2s');
  }
  public set req2S(value: number) {
    this._req2S = value;
  }
  public resetReq2S() {
    this._req2S = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get req2SInput() {
    return this._req2S;
  }

  // req_500m - computed: false, optional: true, required: false
  private _req500M?: number; 
  public get req500M() {
    return this.getNumberAttribute('req_500m');
  }
  public set req500M(value: number) {
    this._req500M = value;
  }
  public resetReq500M() {
    this._req500M = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get req500MInput() {
    return this._req500M;
  }

  // req_500u - computed: false, optional: true, required: false
  private _req500U?: number; 
  public get req500U() {
    return this.getNumberAttribute('req_500u');
  }
  public set req500U(value: number) {
    this._req500U = value;
  }
  public resetReq500U() {
    this._req500U = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get req500UInput() {
    return this._req500U;
  }

  // req_50m - computed: false, optional: true, required: false
  private _req50M?: number; 
  public get req50M() {
    return this.getNumberAttribute('req_50m');
  }
  public set req50M(value: number) {
    this._req50M = value;
  }
  public resetReq50M() {
    this._req50M = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get req50MInput() {
    return this._req50M;
  }

  // req_50u - computed: false, optional: true, required: false
  private _req50U?: number; 
  public get req50U() {
    return this.getNumberAttribute('req_50u');
  }
  public set req50U(value: number) {
    this._req50U = value;
  }
  public resetReq50U() {
    this._req50U = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get req50UInput() {
    return this._req50U;
  }

  // req_5m - computed: false, optional: true, required: false
  private _req5M?: number; 
  public get req5M() {
    return this.getNumberAttribute('req_5m');
  }
  public set req5M(value: number) {
    this._req5M = value;
  }
  public resetReq5M() {
    this._req5M = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get req5MInput() {
    return this._req5M;
  }

  // req_5s - computed: false, optional: true, required: false
  private _req5S?: number; 
  public get req5S() {
    return this.getNumberAttribute('req_5s');
  }
  public set req5S(value: number) {
    this._req5S = value;
  }
  public resetReq5S() {
    this._req5S = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get req5SInput() {
    return this._req5S;
  }

  // req_connect - computed: false, optional: true, required: false
  private _reqConnect?: number; 
  public get reqConnect() {
    return this.getNumberAttribute('req_connect');
  }
  public set reqConnect(value: number) {
    this._reqConnect = value;
  }
  public resetReqConnect() {
    this._reqConnect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqConnectInput() {
    return this._reqConnect;
  }

  // req_content_len - computed: false, optional: true, required: false
  private _reqContentLen?: number; 
  public get reqContentLen() {
    return this.getNumberAttribute('req_content_len');
  }
  public set reqContentLen(value: number) {
    this._reqContentLen = value;
  }
  public resetReqContentLen() {
    this._reqContentLen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqContentLenInput() {
    return this._reqContentLen;
  }

  // req_delete - computed: false, optional: true, required: false
  private _reqDelete?: number; 
  public get reqDelete() {
    return this.getNumberAttribute('req_delete');
  }
  public set reqDelete(value: number) {
    this._reqDelete = value;
  }
  public resetReqDelete() {
    this._reqDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqDeleteInput() {
    return this._reqDelete;
  }

  // req_get - computed: false, optional: true, required: false
  private _reqGet?: number; 
  public get reqGet() {
    return this.getNumberAttribute('req_get');
  }
  public set reqGet(value: number) {
    this._reqGet = value;
  }
  public resetReqGet() {
    this._reqGet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqGetInput() {
    return this._reqGet;
  }

  // req_head - computed: false, optional: true, required: false
  private _reqHead?: number; 
  public get reqHead() {
    return this.getNumberAttribute('req_head');
  }
  public set reqHead(value: number) {
    this._reqHead = value;
  }
  public resetReqHead() {
    this._reqHead = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqHeadInput() {
    return this._reqHead;
  }

  // req_options - computed: false, optional: true, required: false
  private _reqOptions?: number; 
  public get reqOptions() {
    return this.getNumberAttribute('req_options');
  }
  public set reqOptions(value: number) {
    this._reqOptions = value;
  }
  public resetReqOptions() {
    this._reqOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqOptionsInput() {
    return this._reqOptions;
  }

  // req_over_5s - computed: false, optional: true, required: false
  private _reqOver5S?: number; 
  public get reqOver5S() {
    return this.getNumberAttribute('req_over_5s');
  }
  public set reqOver5S(value: number) {
    this._reqOver5S = value;
  }
  public resetReqOver5S() {
    this._reqOver5S = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqOver5SInput() {
    return this._reqOver5S;
  }

  // req_post - computed: false, optional: true, required: false
  private _reqPost?: number; 
  public get reqPost() {
    return this.getNumberAttribute('req_post');
  }
  public set reqPost(value: number) {
    this._reqPost = value;
  }
  public resetReqPost() {
    this._reqPost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqPostInput() {
    return this._reqPost;
  }

  // req_put - computed: false, optional: true, required: false
  private _reqPut?: number; 
  public get reqPut() {
    return this.getNumberAttribute('req_put');
  }
  public set reqPut(value: number) {
    this._reqPut = value;
  }
  public resetReqPut() {
    this._reqPut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqPutInput() {
    return this._reqPut;
  }

  // req_sz_16k - computed: false, optional: true, required: false
  private _reqSz16K?: number; 
  public get reqSz16K() {
    return this.getNumberAttribute('req_sz_16k');
  }
  public set reqSz16K(value: number) {
    this._reqSz16K = value;
  }
  public resetReqSz16K() {
    this._reqSz16K = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqSz16KInput() {
    return this._reqSz16K;
  }

  // req_sz_1k - computed: false, optional: true, required: false
  private _reqSz1K?: number; 
  public get reqSz1K() {
    return this.getNumberAttribute('req_sz_1k');
  }
  public set reqSz1K(value: number) {
    this._reqSz1K = value;
  }
  public resetReqSz1K() {
    this._reqSz1K = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqSz1KInput() {
    return this._reqSz1K;
  }

  // req_sz_256k - computed: false, optional: true, required: false
  private _reqSz256K?: number; 
  public get reqSz256K() {
    return this.getNumberAttribute('req_sz_256k');
  }
  public set reqSz256K(value: number) {
    this._reqSz256K = value;
  }
  public resetReqSz256K() {
    this._reqSz256K = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqSz256KInput() {
    return this._reqSz256K;
  }

  // req_sz_2k - computed: false, optional: true, required: false
  private _reqSz2K?: number; 
  public get reqSz2K() {
    return this.getNumberAttribute('req_sz_2k');
  }
  public set reqSz2K(value: number) {
    this._reqSz2K = value;
  }
  public resetReqSz2K() {
    this._reqSz2K = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqSz2KInput() {
    return this._reqSz2K;
  }

  // req_sz_32k - computed: false, optional: true, required: false
  private _reqSz32K?: number; 
  public get reqSz32K() {
    return this.getNumberAttribute('req_sz_32k');
  }
  public set reqSz32K(value: number) {
    this._reqSz32K = value;
  }
  public resetReqSz32K() {
    this._reqSz32K = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqSz32KInput() {
    return this._reqSz32K;
  }

  // req_sz_4k - computed: false, optional: true, required: false
  private _reqSz4K?: number; 
  public get reqSz4K() {
    return this.getNumberAttribute('req_sz_4k');
  }
  public set reqSz4K(value: number) {
    this._reqSz4K = value;
  }
  public resetReqSz4K() {
    this._reqSz4K = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqSz4KInput() {
    return this._reqSz4K;
  }

  // req_sz_64k - computed: false, optional: true, required: false
  private _reqSz64K?: number; 
  public get reqSz64K() {
    return this.getNumberAttribute('req_sz_64k');
  }
  public set reqSz64K(value: number) {
    this._reqSz64K = value;
  }
  public resetReqSz64K() {
    this._reqSz64K = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqSz64KInput() {
    return this._reqSz64K;
  }

  // req_sz_8k - computed: false, optional: true, required: false
  private _reqSz8K?: number; 
  public get reqSz8K() {
    return this.getNumberAttribute('req_sz_8k');
  }
  public set reqSz8K(value: number) {
    this._reqSz8K = value;
  }
  public resetReqSz8K() {
    this._reqSz8K = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqSz8KInput() {
    return this._reqSz8K;
  }

  // req_sz_gt_256k - computed: false, optional: true, required: false
  private _reqSzGt256K?: number; 
  public get reqSzGt256K() {
    return this.getNumberAttribute('req_sz_gt_256k');
  }
  public set reqSzGt256K(value: number) {
    this._reqSzGt256K = value;
  }
  public resetReqSzGt256K() {
    this._reqSzGt256K = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqSzGt256KInput() {
    return this._reqSzGt256K;
  }

  // req_trace - computed: false, optional: true, required: false
  private _reqTrace?: number; 
  public get reqTrace() {
    return this.getNumberAttribute('req_trace');
  }
  public set reqTrace(value: number) {
    this._reqTrace = value;
  }
  public resetReqTrace() {
    this._reqTrace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqTraceInput() {
    return this._reqTrace;
  }

  // req_track - computed: false, optional: true, required: false
  private _reqTrack?: number; 
  public get reqTrack() {
    return this.getNumberAttribute('req_track');
  }
  public set reqTrack(value: number) {
    this._reqTrack = value;
  }
  public resetReqTrack() {
    this._reqTrack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqTrackInput() {
    return this._reqTrack;
  }

  // req_unknown - computed: false, optional: true, required: false
  private _reqUnknown?: number; 
  public get reqUnknown() {
    return this.getNumberAttribute('req_unknown');
  }
  public set reqUnknown(value: number) {
    this._reqUnknown = value;
  }
  public resetReqUnknown() {
    this._reqUnknown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqUnknownInput() {
    return this._reqUnknown;
  }

  // rsp_chunk - computed: false, optional: true, required: false
  private _rspChunk?: number; 
  public get rspChunk() {
    return this.getNumberAttribute('rsp_chunk');
  }
  public set rspChunk(value: number) {
    this._rspChunk = value;
  }
  public resetRspChunk() {
    this._rspChunk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rspChunkInput() {
    return this._rspChunk;
  }

  // rsp_sz_16k - computed: false, optional: true, required: false
  private _rspSz16K?: number; 
  public get rspSz16K() {
    return this.getNumberAttribute('rsp_sz_16k');
  }
  public set rspSz16K(value: number) {
    this._rspSz16K = value;
  }
  public resetRspSz16K() {
    this._rspSz16K = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rspSz16KInput() {
    return this._rspSz16K;
  }

  // rsp_sz_1k - computed: false, optional: true, required: false
  private _rspSz1K?: number; 
  public get rspSz1K() {
    return this.getNumberAttribute('rsp_sz_1k');
  }
  public set rspSz1K(value: number) {
    this._rspSz1K = value;
  }
  public resetRspSz1K() {
    this._rspSz1K = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rspSz1KInput() {
    return this._rspSz1K;
  }

  // rsp_sz_256k - computed: false, optional: true, required: false
  private _rspSz256K?: number; 
  public get rspSz256K() {
    return this.getNumberAttribute('rsp_sz_256k');
  }
  public set rspSz256K(value: number) {
    this._rspSz256K = value;
  }
  public resetRspSz256K() {
    this._rspSz256K = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rspSz256KInput() {
    return this._rspSz256K;
  }

  // rsp_sz_2k - computed: false, optional: true, required: false
  private _rspSz2K?: number; 
  public get rspSz2K() {
    return this.getNumberAttribute('rsp_sz_2k');
  }
  public set rspSz2K(value: number) {
    this._rspSz2K = value;
  }
  public resetRspSz2K() {
    this._rspSz2K = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rspSz2KInput() {
    return this._rspSz2K;
  }

  // rsp_sz_32k - computed: false, optional: true, required: false
  private _rspSz32K?: number; 
  public get rspSz32K() {
    return this.getNumberAttribute('rsp_sz_32k');
  }
  public set rspSz32K(value: number) {
    this._rspSz32K = value;
  }
  public resetRspSz32K() {
    this._rspSz32K = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rspSz32KInput() {
    return this._rspSz32K;
  }

  // rsp_sz_4k - computed: false, optional: true, required: false
  private _rspSz4K?: number; 
  public get rspSz4K() {
    return this.getNumberAttribute('rsp_sz_4k');
  }
  public set rspSz4K(value: number) {
    this._rspSz4K = value;
  }
  public resetRspSz4K() {
    this._rspSz4K = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rspSz4KInput() {
    return this._rspSz4K;
  }

  // rsp_sz_64k - computed: false, optional: true, required: false
  private _rspSz64K?: number; 
  public get rspSz64K() {
    return this.getNumberAttribute('rsp_sz_64k');
  }
  public set rspSz64K(value: number) {
    this._rspSz64K = value;
  }
  public resetRspSz64K() {
    this._rspSz64K = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rspSz64KInput() {
    return this._rspSz64K;
  }

  // rsp_sz_8k - computed: false, optional: true, required: false
  private _rspSz8K?: number; 
  public get rspSz8K() {
    return this.getNumberAttribute('rsp_sz_8k');
  }
  public set rspSz8K(value: number) {
    this._rspSz8K = value;
  }
  public resetRspSz8K() {
    this._rspSz8K = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rspSz8KInput() {
    return this._rspSz8K;
  }

  // rsp_sz_gt_256k - computed: false, optional: true, required: false
  private _rspSzGt256K?: number; 
  public get rspSzGt256K() {
    return this.getNumberAttribute('rsp_sz_gt_256k');
  }
  public set rspSzGt256K(value: number) {
    this._rspSzGt256K = value;
  }
  public resetRspSzGt256K() {
    this._rspSzGt256K = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rspSzGt256KInput() {
    return this._rspSzGt256K;
  }

  // status_100 - computed: false, optional: true, required: false
  private _status100?: number; 
  public get status100() {
    return this.getNumberAttribute('status_100');
  }
  public set status100(value: number) {
    this._status100 = value;
  }
  public resetStatus100() {
    this._status100 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status100Input() {
    return this._status100;
  }

  // status_101 - computed: false, optional: true, required: false
  private _status101?: number; 
  public get status101() {
    return this.getNumberAttribute('status_101');
  }
  public set status101(value: number) {
    this._status101 = value;
  }
  public resetStatus101() {
    this._status101 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status101Input() {
    return this._status101;
  }

  // status_102 - computed: false, optional: true, required: false
  private _status102?: number; 
  public get status102() {
    return this.getNumberAttribute('status_102');
  }
  public set status102(value: number) {
    this._status102 = value;
  }
  public resetStatus102() {
    this._status102 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status102Input() {
    return this._status102;
  }

  // status_103 - computed: false, optional: true, required: false
  private _status103?: number; 
  public get status103() {
    return this.getNumberAttribute('status_103');
  }
  public set status103(value: number) {
    this._status103 = value;
  }
  public resetStatus103() {
    this._status103 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status103Input() {
    return this._status103;
  }

  // status_1xx - computed: false, optional: true, required: false
  private _status1Xx?: number; 
  public get status1Xx() {
    return this.getNumberAttribute('status_1xx');
  }
  public set status1Xx(value: number) {
    this._status1Xx = value;
  }
  public resetStatus1Xx() {
    this._status1Xx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status1XxInput() {
    return this._status1Xx;
  }

  // status_200 - computed: false, optional: true, required: false
  private _status200?: number; 
  public get status200() {
    return this.getNumberAttribute('status_200');
  }
  public set status200(value: number) {
    this._status200 = value;
  }
  public resetStatus200() {
    this._status200 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status200Input() {
    return this._status200;
  }

  // status_201 - computed: false, optional: true, required: false
  private _status201?: number; 
  public get status201() {
    return this.getNumberAttribute('status_201');
  }
  public set status201(value: number) {
    this._status201 = value;
  }
  public resetStatus201() {
    this._status201 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status201Input() {
    return this._status201;
  }

  // status_202 - computed: false, optional: true, required: false
  private _status202?: number; 
  public get status202() {
    return this.getNumberAttribute('status_202');
  }
  public set status202(value: number) {
    this._status202 = value;
  }
  public resetStatus202() {
    this._status202 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status202Input() {
    return this._status202;
  }

  // status_203 - computed: false, optional: true, required: false
  private _status203?: number; 
  public get status203() {
    return this.getNumberAttribute('status_203');
  }
  public set status203(value: number) {
    this._status203 = value;
  }
  public resetStatus203() {
    this._status203 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status203Input() {
    return this._status203;
  }

  // status_204 - computed: false, optional: true, required: false
  private _status204?: number; 
  public get status204() {
    return this.getNumberAttribute('status_204');
  }
  public set status204(value: number) {
    this._status204 = value;
  }
  public resetStatus204() {
    this._status204 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status204Input() {
    return this._status204;
  }

  // status_205 - computed: false, optional: true, required: false
  private _status205?: number; 
  public get status205() {
    return this.getNumberAttribute('status_205');
  }
  public set status205(value: number) {
    this._status205 = value;
  }
  public resetStatus205() {
    this._status205 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status205Input() {
    return this._status205;
  }

  // status_206 - computed: false, optional: true, required: false
  private _status206?: number; 
  public get status206() {
    return this.getNumberAttribute('status_206');
  }
  public set status206(value: number) {
    this._status206 = value;
  }
  public resetStatus206() {
    this._status206 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status206Input() {
    return this._status206;
  }

  // status_207 - computed: false, optional: true, required: false
  private _status207?: number; 
  public get status207() {
    return this.getNumberAttribute('status_207');
  }
  public set status207(value: number) {
    this._status207 = value;
  }
  public resetStatus207() {
    this._status207 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status207Input() {
    return this._status207;
  }

  // status_2xx - computed: false, optional: true, required: false
  private _status2Xx?: number; 
  public get status2Xx() {
    return this.getNumberAttribute('status_2xx');
  }
  public set status2Xx(value: number) {
    this._status2Xx = value;
  }
  public resetStatus2Xx() {
    this._status2Xx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status2XxInput() {
    return this._status2Xx;
  }

  // status_300 - computed: false, optional: true, required: false
  private _status300?: number; 
  public get status300() {
    return this.getNumberAttribute('status_300');
  }
  public set status300(value: number) {
    this._status300 = value;
  }
  public resetStatus300() {
    this._status300 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status300Input() {
    return this._status300;
  }

  // status_301 - computed: false, optional: true, required: false
  private _status301?: number; 
  public get status301() {
    return this.getNumberAttribute('status_301');
  }
  public set status301(value: number) {
    this._status301 = value;
  }
  public resetStatus301() {
    this._status301 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status301Input() {
    return this._status301;
  }

  // status_302 - computed: false, optional: true, required: false
  private _status302?: number; 
  public get status302() {
    return this.getNumberAttribute('status_302');
  }
  public set status302(value: number) {
    this._status302 = value;
  }
  public resetStatus302() {
    this._status302 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status302Input() {
    return this._status302;
  }

  // status_303 - computed: false, optional: true, required: false
  private _status303?: number; 
  public get status303() {
    return this.getNumberAttribute('status_303');
  }
  public set status303(value: number) {
    this._status303 = value;
  }
  public resetStatus303() {
    this._status303 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status303Input() {
    return this._status303;
  }

  // status_304 - computed: false, optional: true, required: false
  private _status304?: number; 
  public get status304() {
    return this.getNumberAttribute('status_304');
  }
  public set status304(value: number) {
    this._status304 = value;
  }
  public resetStatus304() {
    this._status304 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status304Input() {
    return this._status304;
  }

  // status_305 - computed: false, optional: true, required: false
  private _status305?: number; 
  public get status305() {
    return this.getNumberAttribute('status_305');
  }
  public set status305(value: number) {
    this._status305 = value;
  }
  public resetStatus305() {
    this._status305 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status305Input() {
    return this._status305;
  }

  // status_306 - computed: false, optional: true, required: false
  private _status306?: number; 
  public get status306() {
    return this.getNumberAttribute('status_306');
  }
  public set status306(value: number) {
    this._status306 = value;
  }
  public resetStatus306() {
    this._status306 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status306Input() {
    return this._status306;
  }

  // status_307 - computed: false, optional: true, required: false
  private _status307?: number; 
  public get status307() {
    return this.getNumberAttribute('status_307');
  }
  public set status307(value: number) {
    this._status307 = value;
  }
  public resetStatus307() {
    this._status307 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status307Input() {
    return this._status307;
  }

  // status_3xx - computed: false, optional: true, required: false
  private _status3Xx?: number; 
  public get status3Xx() {
    return this.getNumberAttribute('status_3xx');
  }
  public set status3Xx(value: number) {
    this._status3Xx = value;
  }
  public resetStatus3Xx() {
    this._status3Xx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status3XxInput() {
    return this._status3Xx;
  }

  // status_400 - computed: false, optional: true, required: false
  private _status400?: number; 
  public get status400() {
    return this.getNumberAttribute('status_400');
  }
  public set status400(value: number) {
    this._status400 = value;
  }
  public resetStatus400() {
    this._status400 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status400Input() {
    return this._status400;
  }

  // status_401 - computed: false, optional: true, required: false
  private _status401?: number; 
  public get status401() {
    return this.getNumberAttribute('status_401');
  }
  public set status401(value: number) {
    this._status401 = value;
  }
  public resetStatus401() {
    this._status401 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status401Input() {
    return this._status401;
  }

  // status_402 - computed: false, optional: true, required: false
  private _status402?: number; 
  public get status402() {
    return this.getNumberAttribute('status_402');
  }
  public set status402(value: number) {
    this._status402 = value;
  }
  public resetStatus402() {
    this._status402 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status402Input() {
    return this._status402;
  }

  // status_403 - computed: false, optional: true, required: false
  private _status403?: number; 
  public get status403() {
    return this.getNumberAttribute('status_403');
  }
  public set status403(value: number) {
    this._status403 = value;
  }
  public resetStatus403() {
    this._status403 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status403Input() {
    return this._status403;
  }

  // status_404 - computed: false, optional: true, required: false
  private _status404?: number; 
  public get status404() {
    return this.getNumberAttribute('status_404');
  }
  public set status404(value: number) {
    this._status404 = value;
  }
  public resetStatus404() {
    this._status404 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status404Input() {
    return this._status404;
  }

  // status_405 - computed: false, optional: true, required: false
  private _status405?: number; 
  public get status405() {
    return this.getNumberAttribute('status_405');
  }
  public set status405(value: number) {
    this._status405 = value;
  }
  public resetStatus405() {
    this._status405 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status405Input() {
    return this._status405;
  }

  // status_406 - computed: false, optional: true, required: false
  private _status406?: number; 
  public get status406() {
    return this.getNumberAttribute('status_406');
  }
  public set status406(value: number) {
    this._status406 = value;
  }
  public resetStatus406() {
    this._status406 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status406Input() {
    return this._status406;
  }

  // status_407 - computed: false, optional: true, required: false
  private _status407?: number; 
  public get status407() {
    return this.getNumberAttribute('status_407');
  }
  public set status407(value: number) {
    this._status407 = value;
  }
  public resetStatus407() {
    this._status407 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status407Input() {
    return this._status407;
  }

  // status_408 - computed: false, optional: true, required: false
  private _status408?: number; 
  public get status408() {
    return this.getNumberAttribute('status_408');
  }
  public set status408(value: number) {
    this._status408 = value;
  }
  public resetStatus408() {
    this._status408 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status408Input() {
    return this._status408;
  }

  // status_409 - computed: false, optional: true, required: false
  private _status409?: number; 
  public get status409() {
    return this.getNumberAttribute('status_409');
  }
  public set status409(value: number) {
    this._status409 = value;
  }
  public resetStatus409() {
    this._status409 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status409Input() {
    return this._status409;
  }

  // status_410 - computed: false, optional: true, required: false
  private _status410?: number; 
  public get status410() {
    return this.getNumberAttribute('status_410');
  }
  public set status410(value: number) {
    this._status410 = value;
  }
  public resetStatus410() {
    this._status410 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status410Input() {
    return this._status410;
  }

  // status_411 - computed: false, optional: true, required: false
  private _status411?: number; 
  public get status411() {
    return this.getNumberAttribute('status_411');
  }
  public set status411(value: number) {
    this._status411 = value;
  }
  public resetStatus411() {
    this._status411 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status411Input() {
    return this._status411;
  }

  // status_412 - computed: false, optional: true, required: false
  private _status412?: number; 
  public get status412() {
    return this.getNumberAttribute('status_412');
  }
  public set status412(value: number) {
    this._status412 = value;
  }
  public resetStatus412() {
    this._status412 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status412Input() {
    return this._status412;
  }

  // status_413 - computed: false, optional: true, required: false
  private _status413?: number; 
  public get status413() {
    return this.getNumberAttribute('status_413');
  }
  public set status413(value: number) {
    this._status413 = value;
  }
  public resetStatus413() {
    this._status413 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status413Input() {
    return this._status413;
  }

  // status_414 - computed: false, optional: true, required: false
  private _status414?: number; 
  public get status414() {
    return this.getNumberAttribute('status_414');
  }
  public set status414(value: number) {
    this._status414 = value;
  }
  public resetStatus414() {
    this._status414 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status414Input() {
    return this._status414;
  }

  // status_415 - computed: false, optional: true, required: false
  private _status415?: number; 
  public get status415() {
    return this.getNumberAttribute('status_415');
  }
  public set status415(value: number) {
    this._status415 = value;
  }
  public resetStatus415() {
    this._status415 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status415Input() {
    return this._status415;
  }

  // status_416 - computed: false, optional: true, required: false
  private _status416?: number; 
  public get status416() {
    return this.getNumberAttribute('status_416');
  }
  public set status416(value: number) {
    this._status416 = value;
  }
  public resetStatus416() {
    this._status416 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status416Input() {
    return this._status416;
  }

  // status_417 - computed: false, optional: true, required: false
  private _status417?: number; 
  public get status417() {
    return this.getNumberAttribute('status_417');
  }
  public set status417(value: number) {
    this._status417 = value;
  }
  public resetStatus417() {
    this._status417 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status417Input() {
    return this._status417;
  }

  // status_418 - computed: false, optional: true, required: false
  private _status418?: number; 
  public get status418() {
    return this.getNumberAttribute('status_418');
  }
  public set status418(value: number) {
    this._status418 = value;
  }
  public resetStatus418() {
    this._status418 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status418Input() {
    return this._status418;
  }

  // status_422 - computed: false, optional: true, required: false
  private _status422?: number; 
  public get status422() {
    return this.getNumberAttribute('status_422');
  }
  public set status422(value: number) {
    this._status422 = value;
  }
  public resetStatus422() {
    this._status422 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status422Input() {
    return this._status422;
  }

  // status_423 - computed: false, optional: true, required: false
  private _status423?: number; 
  public get status423() {
    return this.getNumberAttribute('status_423');
  }
  public set status423(value: number) {
    this._status423 = value;
  }
  public resetStatus423() {
    this._status423 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status423Input() {
    return this._status423;
  }

  // status_424 - computed: false, optional: true, required: false
  private _status424?: number; 
  public get status424() {
    return this.getNumberAttribute('status_424');
  }
  public set status424(value: number) {
    this._status424 = value;
  }
  public resetStatus424() {
    this._status424 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status424Input() {
    return this._status424;
  }

  // status_425 - computed: false, optional: true, required: false
  private _status425?: number; 
  public get status425() {
    return this.getNumberAttribute('status_425');
  }
  public set status425(value: number) {
    this._status425 = value;
  }
  public resetStatus425() {
    this._status425 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status425Input() {
    return this._status425;
  }

  // status_426 - computed: false, optional: true, required: false
  private _status426?: number; 
  public get status426() {
    return this.getNumberAttribute('status_426');
  }
  public set status426(value: number) {
    this._status426 = value;
  }
  public resetStatus426() {
    this._status426 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status426Input() {
    return this._status426;
  }

  // status_449 - computed: false, optional: true, required: false
  private _status449?: number; 
  public get status449() {
    return this.getNumberAttribute('status_449');
  }
  public set status449(value: number) {
    this._status449 = value;
  }
  public resetStatus449() {
    this._status449 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status449Input() {
    return this._status449;
  }

  // status_450 - computed: false, optional: true, required: false
  private _status450?: number; 
  public get status450() {
    return this.getNumberAttribute('status_450');
  }
  public set status450(value: number) {
    this._status450 = value;
  }
  public resetStatus450() {
    this._status450 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status450Input() {
    return this._status450;
  }

  // status_4xx - computed: false, optional: true, required: false
  private _status4Xx?: number; 
  public get status4Xx() {
    return this.getNumberAttribute('status_4xx');
  }
  public set status4Xx(value: number) {
    this._status4Xx = value;
  }
  public resetStatus4Xx() {
    this._status4Xx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status4XxInput() {
    return this._status4Xx;
  }

  // status_500 - computed: false, optional: true, required: false
  private _status500?: number; 
  public get status500() {
    return this.getNumberAttribute('status_500');
  }
  public set status500(value: number) {
    this._status500 = value;
  }
  public resetStatus500() {
    this._status500 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status500Input() {
    return this._status500;
  }

  // status_501 - computed: false, optional: true, required: false
  private _status501?: number; 
  public get status501() {
    return this.getNumberAttribute('status_501');
  }
  public set status501(value: number) {
    this._status501 = value;
  }
  public resetStatus501() {
    this._status501 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status501Input() {
    return this._status501;
  }

  // status_502 - computed: false, optional: true, required: false
  private _status502?: number; 
  public get status502() {
    return this.getNumberAttribute('status_502');
  }
  public set status502(value: number) {
    this._status502 = value;
  }
  public resetStatus502() {
    this._status502 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status502Input() {
    return this._status502;
  }

  // status_503 - computed: false, optional: true, required: false
  private _status503?: number; 
  public get status503() {
    return this.getNumberAttribute('status_503');
  }
  public set status503(value: number) {
    this._status503 = value;
  }
  public resetStatus503() {
    this._status503 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status503Input() {
    return this._status503;
  }

  // status_504 - computed: false, optional: true, required: false
  private _status504?: number; 
  public get status504() {
    return this.getNumberAttribute('status_504');
  }
  public set status504(value: number) {
    this._status504 = value;
  }
  public resetStatus504() {
    this._status504 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status504Input() {
    return this._status504;
  }

  // status_504_ax - computed: false, optional: true, required: false
  private _status504Ax?: number; 
  public get status504Ax() {
    return this.getNumberAttribute('status_504_ax');
  }
  public set status504Ax(value: number) {
    this._status504Ax = value;
  }
  public resetStatus504Ax() {
    this._status504Ax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status504AxInput() {
    return this._status504Ax;
  }

  // status_505 - computed: false, optional: true, required: false
  private _status505?: number; 
  public get status505() {
    return this.getNumberAttribute('status_505');
  }
  public set status505(value: number) {
    this._status505 = value;
  }
  public resetStatus505() {
    this._status505 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status505Input() {
    return this._status505;
  }

  // status_506 - computed: false, optional: true, required: false
  private _status506?: number; 
  public get status506() {
    return this.getNumberAttribute('status_506');
  }
  public set status506(value: number) {
    this._status506 = value;
  }
  public resetStatus506() {
    this._status506 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status506Input() {
    return this._status506;
  }

  // status_507 - computed: false, optional: true, required: false
  private _status507?: number; 
  public get status507() {
    return this.getNumberAttribute('status_507');
  }
  public set status507(value: number) {
    this._status507 = value;
  }
  public resetStatus507() {
    this._status507 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status507Input() {
    return this._status507;
  }

  // status_508 - computed: false, optional: true, required: false
  private _status508?: number; 
  public get status508() {
    return this.getNumberAttribute('status_508');
  }
  public set status508(value: number) {
    this._status508 = value;
  }
  public resetStatus508() {
    this._status508 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status508Input() {
    return this._status508;
  }

  // status_509 - computed: false, optional: true, required: false
  private _status509?: number; 
  public get status509() {
    return this.getNumberAttribute('status_509');
  }
  public set status509(value: number) {
    this._status509 = value;
  }
  public resetStatus509() {
    this._status509 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status509Input() {
    return this._status509;
  }

  // status_510 - computed: false, optional: true, required: false
  private _status510?: number; 
  public get status510() {
    return this.getNumberAttribute('status_510');
  }
  public set status510(value: number) {
    this._status510 = value;
  }
  public resetStatus510() {
    this._status510 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status510Input() {
    return this._status510;
  }

  // status_5xx - computed: false, optional: true, required: false
  private _status5Xx?: number; 
  public get status5Xx() {
    return this.getNumberAttribute('status_5xx');
  }
  public set status5Xx(value: number) {
    this._status5Xx = value;
  }
  public resetStatus5Xx() {
    this._status5Xx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status5XxInput() {
    return this._status5Xx;
  }

  // status_6xx - computed: false, optional: true, required: false
  private _status6Xx?: number; 
  public get status6Xx() {
    return this.getNumberAttribute('status_6xx');
  }
  public set status6Xx(value: number) {
    this._status6Xx = value;
  }
  public resetStatus6Xx() {
    this._status6Xx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status6XxInput() {
    return this._status6Xx;
  }

  // status_unknown - computed: false, optional: true, required: false
  private _statusUnknown?: number; 
  public get statusUnknown() {
    return this.getNumberAttribute('status_unknown');
  }
  public set statusUnknown(value: number) {
    this._statusUnknown = value;
  }
  public resetStatusUnknown() {
    this._statusUnknown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusUnknownInput() {
    return this._statusUnknown;
  }

  // stream_closed - computed: false, optional: true, required: false
  private _streamClosed?: number; 
  public get streamClosed() {
    return this.getNumberAttribute('stream_closed');
  }
  public set streamClosed(value: number) {
    this._streamClosed = value;
  }
  public resetStreamClosed() {
    this._streamClosed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamClosedInput() {
    return this._streamClosed;
  }

  // total_http2_bytes - computed: false, optional: true, required: false
  private _totalHttp2Bytes?: number; 
  public get totalHttp2Bytes() {
    return this.getNumberAttribute('total_http2_bytes');
  }
  public set totalHttp2Bytes(value: number) {
    this._totalHttp2Bytes = value;
  }
  public resetTotalHttp2Bytes() {
    this._totalHttp2Bytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalHttp2BytesInput() {
    return this._totalHttp2Bytes;
  }

  // total_http2_conn - computed: false, optional: true, required: false
  private _totalHttp2Conn?: number; 
  public get totalHttp2Conn() {
    return this.getNumberAttribute('total_http2_conn');
  }
  public set totalHttp2Conn(value: number) {
    this._totalHttp2Conn = value;
  }
  public resetTotalHttp2Conn() {
    this._totalHttp2Conn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalHttp2ConnInput() {
    return this._totalHttp2Conn;
  }

  // total_requests - computed: false, optional: true, required: false
  private _totalRequests?: number; 
  public get totalRequests() {
    return this.getNumberAttribute('total_requests');
  }
  public set totalRequests(value: number) {
    this._totalRequests = value;
  }
  public resetTotalRequests() {
    this._totalRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalRequestsInput() {
    return this._totalRequests;
  }

  // transaction_limited - computed: false, optional: true, required: false
  private _transactionLimited?: number; 
  public get transactionLimited() {
    return this.getNumberAttribute('transaction_limited');
  }
  public set transactionLimited(value: number) {
    this._transactionLimited = value;
  }
  public resetTransactionLimited() {
    this._transactionLimited = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transactionLimitedInput() {
    return this._transactionLimited;
  }

  // ws_client_switch - computed: false, optional: true, required: false
  private _wsClientSwitch?: number; 
  public get wsClientSwitch() {
    return this.getNumberAttribute('ws_client_switch');
  }
  public set wsClientSwitch(value: number) {
    this._wsClientSwitch = value;
  }
  public resetWsClientSwitch() {
    this._wsClientSwitch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wsClientSwitchInput() {
    return this._wsClientSwitch;
  }

  // ws_handshake_request - computed: false, optional: true, required: false
  private _wsHandshakeRequest?: number; 
  public get wsHandshakeRequest() {
    return this.getNumberAttribute('ws_handshake_request');
  }
  public set wsHandshakeRequest(value: number) {
    this._wsHandshakeRequest = value;
  }
  public resetWsHandshakeRequest() {
    this._wsHandshakeRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wsHandshakeRequestInput() {
    return this._wsHandshakeRequest;
  }

  // ws_handshake_success - computed: false, optional: true, required: false
  private _wsHandshakeSuccess?: number; 
  public get wsHandshakeSuccess() {
    return this.getNumberAttribute('ws_handshake_success');
  }
  public set wsHandshakeSuccess(value: number) {
    this._wsHandshakeSuccess = value;
  }
  public resetWsHandshakeSuccess() {
    this._wsHandshakeSuccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wsHandshakeSuccessInput() {
    return this._wsHandshakeSuccess;
  }

  // ws_server_switch - computed: false, optional: true, required: false
  private _wsServerSwitch?: number; 
  public get wsServerSwitch() {
    return this.getNumberAttribute('ws_server_switch');
  }
  public set wsServerSwitch(value: number) {
    this._wsServerSwitch = value;
  }
  public resetWsServerSwitch() {
    this._wsServerSwitch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wsServerSwitchInput() {
    return this._wsServerSwitch;
  }
}
export interface SlbVirtualServerPortStatsHttpVportStats {
  /**
  * http_vport block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#http_vport SlbVirtualServerPortStatsHttpVport#http_vport}
  */
  readonly httpVport?: SlbVirtualServerPortStatsHttpVportStatsHttpVport;
}

export function slbVirtualServerPortStatsHttpVportStatsToTerraform(struct?: SlbVirtualServerPortStatsHttpVportStatsOutputReference | SlbVirtualServerPortStatsHttpVportStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_vport: slbVirtualServerPortStatsHttpVportStatsHttpVportToTerraform(struct!.httpVport),
  }
}


export function slbVirtualServerPortStatsHttpVportStatsToHclTerraform(struct?: SlbVirtualServerPortStatsHttpVportStatsOutputReference | SlbVirtualServerPortStatsHttpVportStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http_vport: {
      value: slbVirtualServerPortStatsHttpVportStatsHttpVportToHclTerraform(struct!.httpVport),
      isBlock: true,
      type: "list",
      storageClassType: "SlbVirtualServerPortStatsHttpVportStatsHttpVportList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbVirtualServerPortStatsHttpVportStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SlbVirtualServerPortStatsHttpVportStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpVport?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpVport = this._httpVport?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbVirtualServerPortStatsHttpVportStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._httpVport.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._httpVport.internalValue = value.httpVport;
    }
  }

  // http_vport - computed: false, optional: true, required: false
  private _httpVport = new SlbVirtualServerPortStatsHttpVportStatsHttpVportOutputReference(this, "http_vport");
  public get httpVport() {
    return this._httpVport;
  }
  public putHttpVport(value: SlbVirtualServerPortStatsHttpVportStatsHttpVport) {
    this._httpVport.internalValue = value;
  }
  public resetHttpVport() {
    this._httpVport.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpVportInput() {
    return this._httpVport.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport thunder_slb_virtual_server_port_stats_http_vport}
*/
export class SlbVirtualServerPortStatsHttpVport extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_virtual_server_port_stats_http_vport";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SlbVirtualServerPortStatsHttpVport resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SlbVirtualServerPortStatsHttpVport to import
  * @param importFromId The id of the existing SlbVirtualServerPortStatsHttpVport that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SlbVirtualServerPortStatsHttpVport to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_virtual_server_port_stats_http_vport", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_virtual_server_port_stats_http_vport thunder_slb_virtual_server_port_stats_http_vport} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SlbVirtualServerPortStatsHttpVportConfig
  */
  public constructor(scope: Construct, id: string, config: SlbVirtualServerPortStatsHttpVportConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_virtual_server_port_stats_http_vport',
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
  private _stats = new SlbVirtualServerPortStatsHttpVportStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: SlbVirtualServerPortStatsHttpVportStats) {
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
      stats: slbVirtualServerPortStatsHttpVportStatsToTerraform(this._stats.internalValue),
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
        value: slbVirtualServerPortStatsHttpVportStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbVirtualServerPortStatsHttpVportStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
