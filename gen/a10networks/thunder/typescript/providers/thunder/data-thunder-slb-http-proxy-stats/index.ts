// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSlbHttpProxyStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#id DataThunderSlbHttpProxyStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#stats DataThunderSlbHttpProxyStats#stats}
  */
  readonly stats?: DataThunderSlbHttpProxyStatsStats;
}
export interface DataThunderSlbHttpProxyStatsStats {
  /**
  * HTTP req (cache succ)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#cache_rsp DataThunderSlbHttpProxyStats#cache_rsp}
  */
  readonly cacheRsp?: number;
  /**
  * Chunk less than equal to 1K
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#chunk_sz_1k DataThunderSlbHttpProxyStats#chunk_sz_1k}
  */
  readonly chunkSz1K?: number;
  /**
  * Chunk less than equal to 2K
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#chunk_sz_2k DataThunderSlbHttpProxyStats#chunk_sz_2k}
  */
  readonly chunkSz2K?: number;
  /**
  * Chunk less than equal to 4K
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#chunk_sz_4k DataThunderSlbHttpProxyStats#chunk_sz_4k}
  */
  readonly chunkSz4K?: number;
  /**
  * Chunk less than equal to 512
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#chunk_sz_512 DataThunderSlbHttpProxyStats#chunk_sz_512}
  */
  readonly chunkSz512?: number;
  /**
  * Chunk greater than 4K
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#chunk_sz_gt_4k DataThunderSlbHttpProxyStats#chunk_sz_gt_4k}
  */
  readonly chunkSzGt4K?: number;
  /**
  * Client RST
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#client_rst DataThunderSlbHttpProxyStats#client_rst}
  */
  readonly clientRst?: number;
  /**
  * Close on DDoS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#close_on_ddos DataThunderSlbHttpProxyStats#close_on_ddos}
  */
  readonly closeOnDdos?: number;
  /**
  * Tot data after compress
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#compression_after DataThunderSlbHttpProxyStats#compression_after}
  */
  readonly compressionAfter?: number;
  /**
  * Tot data after brotli compress
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#compression_after_br DataThunderSlbHttpProxyStats#compression_after_br}
  */
  readonly compressionAfterBr?: number;
  /**
  * Tot data after compress
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#compression_after_total DataThunderSlbHttpProxyStats#compression_after_total}
  */
  readonly compressionAfterTotal?: number;
  /**
  * Tot data before compress
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#compression_before DataThunderSlbHttpProxyStats#compression_before}
  */
  readonly compressionBefore?: number;
  /**
  * Tot data before brotli compress
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#compression_before_br DataThunderSlbHttpProxyStats#compression_before_br}
  */
  readonly compressionBeforeBr?: number;
  /**
  * Tot data before compress
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#compression_before_total DataThunderSlbHttpProxyStats#compression_before_total}
  */
  readonly compressionBeforeTotal?: number;
  /**
  * Total HTTP CONNECT requests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#connect_req DataThunderSlbHttpProxyStats#connect_req}
  */
  readonly connectReq?: number;
  /**
  * Curr Proxy Conns
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#curr_proxy DataThunderSlbHttpProxyStats#curr_proxy}
  */
  readonly currProxy?: number;
  /**
  * Tot data after decompress
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#decompression_after DataThunderSlbHttpProxyStats#decompression_after}
  */
  readonly decompressionAfter?: number;
  /**
  * Tot data after brotli decompress
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#decompression_after_br DataThunderSlbHttpProxyStats#decompression_after_br}
  */
  readonly decompressionAfterBr?: number;
  /**
  * Tot data after decompress
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#decompression_after_total DataThunderSlbHttpProxyStats#decompression_after_total}
  */
  readonly decompressionAfterTotal?: number;
  /**
  * Tot data before decompress
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#decompression_before DataThunderSlbHttpProxyStats#decompression_before}
  */
  readonly decompressionBefore?: number;
  /**
  * Tot data before brotli decompress
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#decompression_before_br DataThunderSlbHttpProxyStats#decompression_before_br}
  */
  readonly decompressionBeforeBr?: number;
  /**
  * Tot data before decompress
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#decompression_before_total DataThunderSlbHttpProxyStats#decompression_before_total}
  */
  readonly decompressionBeforeTotal?: number;
  /**
  * DoH DNS Malformed Query
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#doh_dns_malformed_query DataThunderSlbHttpProxyStats#doh_dns_malformed_query}
  */
  readonly dohDnsMalformedQuery?: number;
  /**
  * DoH Query type A
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#doh_dns_query_type_a DataThunderSlbHttpProxyStats#doh_dns_query_type_a}
  */
  readonly dohDnsQueryTypeA?: number;
  /**
  * DoH Query type AAAA
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#doh_dns_query_type_aaaa DataThunderSlbHttpProxyStats#doh_dns_query_type_aaaa}
  */
  readonly dohDnsQueryTypeAaaa?: number;
  /**
  * DoH Query type ANY
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#doh_dns_query_type_any DataThunderSlbHttpProxyStats#doh_dns_query_type_any}
  */
  readonly dohDnsQueryTypeAny?: number;
  /**
  * DoH Query type CNAME
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#doh_dns_query_type_cname DataThunderSlbHttpProxyStats#doh_dns_query_type_cname}
  */
  readonly dohDnsQueryTypeCname?: number;
  /**
  * DoH Query type MX
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#doh_dns_query_type_mx DataThunderSlbHttpProxyStats#doh_dns_query_type_mx}
  */
  readonly dohDnsQueryTypeMx?: number;
  /**
  * DoH Query type NS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#doh_dns_query_type_ns DataThunderSlbHttpProxyStats#doh_dns_query_type_ns}
  */
  readonly dohDnsQueryTypeNs?: number;
  /**
  * DoH Query type Others
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#doh_dns_query_type_others DataThunderSlbHttpProxyStats#doh_dns_query_type_others}
  */
  readonly dohDnsQueryTypeOthers?: number;
  /**
  * DoH Query type SOA
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#doh_dns_query_type_soa DataThunderSlbHttpProxyStats#doh_dns_query_type_soa}
  */
  readonly dohDnsQueryTypeSoa?: number;
  /**
  * DoH Query type SRV
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#doh_dns_query_type_srv DataThunderSlbHttpProxyStats#doh_dns_query_type_srv}
  */
  readonly dohDnsQueryTypeSrv?: number;
  /**
  * DoH DNS Response rcode ERR_FORMAT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#doh_dns_resp_rcode_err_format DataThunderSlbHttpProxyStats#doh_dns_resp_rcode_err_format}
  */
  readonly dohDnsRespRcodeErrFormat?: number;
  /**
  * DoH DNS Response rcode ERR_NAME
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#doh_dns_resp_rcode_err_name DataThunderSlbHttpProxyStats#doh_dns_resp_rcode_err_name}
  */
  readonly dohDnsRespRcodeErrName?: number;
  /**
  * DoH DNS Response rcode ERR_SERVER
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#doh_dns_resp_rcode_err_server DataThunderSlbHttpProxyStats#doh_dns_resp_rcode_err_server}
  */
  readonly dohDnsRespRcodeErrServer?: number;
  /**
  * DoH DNS Response rcode ERR_TYPE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#doh_dns_resp_rcode_err_type DataThunderSlbHttpProxyStats#doh_dns_resp_rcode_err_type}
  */
  readonly dohDnsRespRcodeErrType?: number;
  /**
  * DoH DNS Response rcode NOTAUTH
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#doh_dns_resp_rcode_notauth DataThunderSlbHttpProxyStats#doh_dns_resp_rcode_notauth}
  */
  readonly dohDnsRespRcodeNotauth?: number;
  /**
  * DoH DNS Response rcode NOTZONE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#doh_dns_resp_rcode_notzone DataThunderSlbHttpProxyStats#doh_dns_resp_rcode_notzone}
  */
  readonly dohDnsRespRcodeNotzone?: number;
  /**
  * DoH DNS Response rcode NXRRSET
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#doh_dns_resp_rcode_nxrrset DataThunderSlbHttpProxyStats#doh_dns_resp_rcode_nxrrset}
  */
  readonly dohDnsRespRcodeNxrrset?: number;
  /**
  * DoH DNS Response rcode OTHER
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#doh_dns_resp_rcode_other DataThunderSlbHttpProxyStats#doh_dns_resp_rcode_other}
  */
  readonly dohDnsRespRcodeOther?: number;
  /**
  * DoH DNS Response rcode REFUSE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#doh_dns_resp_rcode_refuse DataThunderSlbHttpProxyStats#doh_dns_resp_rcode_refuse}
  */
  readonly dohDnsRespRcodeRefuse?: number;
  /**
  * DoH DNS Response rcode YXDOMAIN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#doh_dns_resp_rcode_yxdomain DataThunderSlbHttpProxyStats#doh_dns_resp_rcode_yxdomain}
  */
  readonly dohDnsRespRcodeYxdomain?: number;
  /**
  * DoH DNS Response rcode YXRRSET
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#doh_dns_resp_rcode_yxrrset DataThunderSlbHttpProxyStats#doh_dns_resp_rcode_yxrrset}
  */
  readonly dohDnsRespRcodeYxrrset?: number;
  /**
  * DoH GET base64url decode failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#doh_get_base64_decode_failed DataThunderSlbHttpProxyStats#doh_get_base64_decode_failed}
  */
  readonly dohGetBase64DecodeFailed?: number;
  /**
  * DoH GET dns arg not found in uri
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#doh_get_dns_arg_failed DataThunderSlbHttpProxyStats#doh_get_dns_arg_failed}
  */
  readonly dohGetDnsArgFailed?: number;
  /**
  * DoH GET URI too long
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#doh_get_uri_too_long DataThunderSlbHttpProxyStats#doh_get_uri_too_long}
  */
  readonly dohGetUriTooLong?: number;
  /**
  * DoH Memory alloc failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#doh_malloc_fail DataThunderSlbHttpProxyStats#doh_malloc_fail}
  */
  readonly dohMallocFail?: number;
  /**
  * DoH Non DoH HTTP request method rcvd
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#doh_non_doh_method DataThunderSlbHttpProxyStats#doh_non_doh_method}
  */
  readonly dohNonDohMethod?: number;
  /**
  * DoH non DoH Requests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#doh_non_doh_req DataThunderSlbHttpProxyStats#doh_non_doh_req}
  */
  readonly dohNonDohReq?: number;
  /**
  * DoH non DoH GET Requests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#doh_non_doh_req_get DataThunderSlbHttpProxyStats#doh_non_doh_req_get}
  */
  readonly dohNonDohReqGet?: number;
  /**
  * DoH non DoH POST Requests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#doh_non_doh_req_post DataThunderSlbHttpProxyStats#doh_non_doh_req_post}
  */
  readonly dohNonDohReqPost?: number;
  /**
  * DoH URI Path not found
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#doh_path_not_found DataThunderSlbHttpProxyStats#doh_path_not_found}
  */
  readonly dohPathNotFound?: number;
  /**
  * DoH POST content-type not found
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#doh_post_content_type_mismatch DataThunderSlbHttpProxyStats#doh_post_content_type_mismatch}
  */
  readonly dohPostContentTypeMismatch?: number;
  /**
  * DoH POST payload extract failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#doh_post_payload_extract_failed DataThunderSlbHttpProxyStats#doh_post_payload_extract_failed}
  */
  readonly dohPostPayloadExtractFailed?: number;
  /**
  * DoH POST payload not found
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#doh_post_payload_not_found DataThunderSlbHttpProxyStats#doh_post_payload_not_found}
  */
  readonly dohPostPayloadNotFound?: number;
  /**
  * DoH POST Payload too large
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#doh_post_payload_too_large DataThunderSlbHttpProxyStats#doh_post_payload_too_large}
  */
  readonly dohPostPayloadTooLarge?: number;
  /**
  * DoH serv Query timed out
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#doh_query_time_out DataThunderSlbHttpProxyStats#doh_query_time_out}
  */
  readonly dohQueryTimeOut?: number;
  /**
  * DoH Requests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#doh_req DataThunderSlbHttpProxyStats#doh_req}
  */
  readonly dohReq?: number;
  /**
  * DoH GET Requests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#doh_req_get DataThunderSlbHttpProxyStats#doh_req_get}
  */
  readonly dohReqGet?: number;
  /**
  * DoH POST Requests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#doh_req_post DataThunderSlbHttpProxyStats#doh_req_post}
  */
  readonly dohReqPost?: number;
  /**
  * DoH Request Send Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#doh_req_send_failed DataThunderSlbHttpProxyStats#doh_req_send_failed}
  */
  readonly dohReqSendFailed?: number;
  /**
  * DoH TCP Retry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#doh_req_tcp_retry DataThunderSlbHttpProxyStats#doh_req_tcp_retry}
  */
  readonly dohReqTcpRetry?: number;
  /**
  * DoH TCP Retry failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#doh_req_tcp_retry_fail DataThunderSlbHttpProxyStats#doh_req_tcp_retry_fail}
  */
  readonly dohReqTcpRetryFail?: number;
  /**
  * DoH UDP Retry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#doh_req_udp_retry DataThunderSlbHttpProxyStats#doh_req_udp_retry}
  */
  readonly dohReqUdpRetry?: number;
  /**
  * DoH UDP Retry failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#doh_req_udp_retry_fail DataThunderSlbHttpProxyStats#doh_req_udp_retry_fail}
  */
  readonly dohReqUdpRetryFail?: number;
  /**
  * DoH Responses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#doh_resp DataThunderSlbHttpProxyStats#doh_resp}
  */
  readonly dohResp?: number;
  /**
  * DoH Resp hdr alloc failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#doh_resp_header_alloc_failed DataThunderSlbHttpProxyStats#doh_resp_header_alloc_failed}
  */
  readonly dohRespHeaderAllocFailed?: number;
  /**
  * DoH Resp queue failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#doh_resp_que_failed DataThunderSlbHttpProxyStats#doh_resp_que_failed}
  */
  readonly dohRespQueFailed?: number;
  /**
  * DoH Response Send Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#doh_resp_send_failed DataThunderSlbHttpProxyStats#doh_resp_send_failed}
  */
  readonly dohRespSendFailed?: number;
  /**
  * DoH Response setup failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#doh_resp_setup_failed DataThunderSlbHttpProxyStats#doh_resp_setup_failed}
  */
  readonly dohRespSetupFailed?: number;
  /**
  * DoH TCP Frags Rcvd
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#doh_resp_tcp_frags DataThunderSlbHttpProxyStats#doh_resp_tcp_frags}
  */
  readonly dohRespTcpFrags?: number;
  /**
  * DoH UDP Frags Rcvd
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#doh_resp_udp_frags DataThunderSlbHttpProxyStats#doh_resp_udp_frags}
  */
  readonly dohRespUdpFrags?: number;
  /**
  * DoH Retry with TCP SG
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#doh_retry_w_tcp DataThunderSlbHttpProxyStats#doh_retry_w_tcp}
  */
  readonly dohRetryWTcp?: number;
  /**
  * DoH Server Select Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#doh_serv_sel_failed DataThunderSlbHttpProxyStats#doh_serv_sel_failed}
  */
  readonly dohServSelFailed?: number;
  /**
  * DoH Source NAT failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#doh_snat_failed DataThunderSlbHttpProxyStats#doh_snat_failed}
  */
  readonly dohSnatFailed?: number;
  /**
  * DoH TC Responses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#doh_tc_resp DataThunderSlbHttpProxyStats#doh_tc_resp}
  */
  readonly dohTcResp?: number;
  /**
  * DoH TCP DNS Requests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#doh_tcp_dns_req DataThunderSlbHttpProxyStats#doh_tcp_dns_req}
  */
  readonly dohTcpDnsReq?: number;
  /**
  * DoH TCP DNS Responses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#doh_tcp_dns_resp DataThunderSlbHttpProxyStats#doh_tcp_dns_resp}
  */
  readonly dohTcpDnsResp?: number;
  /**
  * DoH serv TCP DNS send failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#doh_tcp_send_failed DataThunderSlbHttpProxyStats#doh_tcp_send_failed}
  */
  readonly dohTcpSendFailed?: number;
  /**
  * DoH UDP DNS Requests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#doh_udp_dns_req DataThunderSlbHttpProxyStats#doh_udp_dns_req}
  */
  readonly dohUdpDnsReq?: number;
  /**
  * DoH UDP DNS Responses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#doh_udp_dns_resp DataThunderSlbHttpProxyStats#doh_udp_dns_resp}
  */
  readonly dohUdpDnsResp?: number;
  /**
  * DoH serv UDP DNS send failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#doh_udp_send_failed DataThunderSlbHttpProxyStats#doh_udp_send_failed}
  */
  readonly dohUdpSendFailed?: number;
  /**
  * Fwd req fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#fwdreq_fail DataThunderSlbHttpProxyStats#fwdreq_fail}
  */
  readonly fwdreqFail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#fwdreqdata_fail DataThunderSlbHttpProxyStats#fwdreqdata_fail}
  */
  readonly fwdreqdataFail?: number;
  /**
  * Server conn made
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#new_svrconn DataThunderSlbHttpProxyStats#new_svrconn}
  */
  readonly newSvrconn?: number;
  /**
  * No proxy error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#noproxy DataThunderSlbHttpProxyStats#noproxy}
  */
  readonly noproxy?: number;
  /**
  * No tuple error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#notuple DataThunderSlbHttpProxyStats#notuple}
  */
  readonly notuple?: number;
  /**
  * Parse req fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#parsereq_fail DataThunderSlbHttpProxyStats#parsereq_fail}
  */
  readonly parsereqFail?: number;
  /**
  * HTTP requests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#req DataThunderSlbHttpProxyStats#req}
  */
  readonly req?: number;
  /**
  * Rsp time less than 100m
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#req_100m DataThunderSlbHttpProxyStats#req_100m}
  */
  readonly req100M?: number;
  /**
  * Rsp time less than 100u
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#req_100u DataThunderSlbHttpProxyStats#req_100u}
  */
  readonly req100U?: number;
  /**
  * Rsp time less than 10m
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#req_10m DataThunderSlbHttpProxyStats#req_10m}
  */
  readonly req10M?: number;
  /**
  * Rsp time less than 10u
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#req_10u DataThunderSlbHttpProxyStats#req_10u}
  */
  readonly req10U?: number;
  /**
  * Rsp time less than 1m
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#req_1m DataThunderSlbHttpProxyStats#req_1m}
  */
  readonly req1M?: number;
  /**
  * Rsp time less than 1s
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#req_1s DataThunderSlbHttpProxyStats#req_1s}
  */
  readonly req1S?: number;
  /**
  * Rsp time less than 200m
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#req_200m DataThunderSlbHttpProxyStats#req_200m}
  */
  readonly req200M?: number;
  /**
  * Rsp time less than 200u
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#req_200u DataThunderSlbHttpProxyStats#req_200u}
  */
  readonly req200U?: number;
  /**
  * Rsp time less than 20m
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#req_20m DataThunderSlbHttpProxyStats#req_20m}
  */
  readonly req20M?: number;
  /**
  * Rsp time less than 20u
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#req_20u DataThunderSlbHttpProxyStats#req_20u}
  */
  readonly req20U?: number;
  /**
  * Rsp time less than 2m
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#req_2m DataThunderSlbHttpProxyStats#req_2m}
  */
  readonly req2M?: number;
  /**
  * Rsp time less than 2s
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#req_2s DataThunderSlbHttpProxyStats#req_2s}
  */
  readonly req2S?: number;
  /**
  * Rsp time less than 500m
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#req_500m DataThunderSlbHttpProxyStats#req_500m}
  */
  readonly req500M?: number;
  /**
  * Rsp time less than 500u
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#req_500u DataThunderSlbHttpProxyStats#req_500u}
  */
  readonly req500U?: number;
  /**
  * Rsp time less than 50m
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#req_50m DataThunderSlbHttpProxyStats#req_50m}
  */
  readonly req50M?: number;
  /**
  * Rsp time less than 50u
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#req_50u DataThunderSlbHttpProxyStats#req_50u}
  */
  readonly req50U?: number;
  /**
  * Rsp time less than 5m
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#req_5m DataThunderSlbHttpProxyStats#req_5m}
  */
  readonly req5M?: number;
  /**
  * Rsp time less than 5s
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#req_5s DataThunderSlbHttpProxyStats#req_5s}
  */
  readonly req5S?: number;
  /**
  * Method CONNECT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#req_connect DataThunderSlbHttpProxyStats#req_connect}
  */
  readonly reqConnect?: number;
  /**
  * Req content len
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#req_content_len DataThunderSlbHttpProxyStats#req_content_len}
  */
  readonly reqContentLen?: number;
  /**
  * Method DELETE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#req_delete DataThunderSlbHttpProxyStats#req_delete}
  */
  readonly reqDelete?: number;
  /**
  * Total HTTP requests enter SSLi
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#req_enter_ssli DataThunderSlbHttpProxyStats#req_enter_ssli}
  */
  readonly reqEnterSsli?: number;
  /**
  * Method GET
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#req_get DataThunderSlbHttpProxyStats#req_get}
  */
  readonly reqGet?: number;
  /**
  * Method HEAD
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#req_head DataThunderSlbHttpProxyStats#req_head}
  */
  readonly reqHead?: number;
  /**
  * Request 2.0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#req_http2 DataThunderSlbHttpProxyStats#req_http2}
  */
  readonly reqHttp2?: number;
  /**
  * Request 3.0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#req_http3 DataThunderSlbHttpProxyStats#req_http3}
  */
  readonly reqHttp3?: number;
  /**
  * Packets ofo
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#req_ofo DataThunderSlbHttpProxyStats#req_ofo}
  */
  readonly reqOfo?: number;
  /**
  * Method OPTIONS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#req_options DataThunderSlbHttpProxyStats#req_options}
  */
  readonly reqOptions?: number;
  /**
  * Rsp time greater than equal to 5s
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#req_over_5s DataThunderSlbHttpProxyStats#req_over_5s}
  */
  readonly reqOver5S?: number;
  /**
  * Request over limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#req_over_limit DataThunderSlbHttpProxyStats#req_over_limit}
  */
  readonly reqOverLimit?: number;
  /**
  * Method POST
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#req_post DataThunderSlbHttpProxyStats#req_post}
  */
  readonly reqPost?: number;
  /**
  * Method PUT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#req_put DataThunderSlbHttpProxyStats#req_put}
  */
  readonly reqPut?: number;
  /**
  * Request rate over limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#req_rate_over_limit DataThunderSlbHttpProxyStats#req_rate_over_limit}
  */
  readonly reqRateOverLimit?: number;
  /**
  * Packets retrans
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#req_retran DataThunderSlbHttpProxyStats#req_retran}
  */
  readonly reqRetran?: number;
  /**
  * HTTP requests(succ)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#req_succ DataThunderSlbHttpProxyStats#req_succ}
  */
  readonly reqSucc?: number;
  /**
  * Req less than equal to 16K
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#req_sz_16k DataThunderSlbHttpProxyStats#req_sz_16k}
  */
  readonly reqSz16K?: number;
  /**
  * Req less than equal to 1K
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#req_sz_1k DataThunderSlbHttpProxyStats#req_sz_1k}
  */
  readonly reqSz1K?: number;
  /**
  * Req less than equal to 256K
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#req_sz_256k DataThunderSlbHttpProxyStats#req_sz_256k}
  */
  readonly reqSz256K?: number;
  /**
  * Req less than equal to 2K
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#req_sz_2k DataThunderSlbHttpProxyStats#req_sz_2k}
  */
  readonly reqSz2K?: number;
  /**
  * Req less than equal to 32K
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#req_sz_32k DataThunderSlbHttpProxyStats#req_sz_32k}
  */
  readonly reqSz32K?: number;
  /**
  * Req less than equal to 4K
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#req_sz_4k DataThunderSlbHttpProxyStats#req_sz_4k}
  */
  readonly reqSz4K?: number;
  /**
  * Req less than equal to 64K
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#req_sz_64k DataThunderSlbHttpProxyStats#req_sz_64k}
  */
  readonly reqSz64K?: number;
  /**
  * Req less than equal to 8K
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#req_sz_8k DataThunderSlbHttpProxyStats#req_sz_8k}
  */
  readonly reqSz8K?: number;
  /**
  * Req greater than 256K
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#req_sz_gt_256k DataThunderSlbHttpProxyStats#req_sz_gt_256k}
  */
  readonly reqSzGt256K?: number;
  /**
  * Method TRACE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#req_trace DataThunderSlbHttpProxyStats#req_trace}
  */
  readonly reqTrace?: number;
  /**
  * Method TRACK
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#req_track DataThunderSlbHttpProxyStats#req_track}
  */
  readonly reqTrack?: number;
  /**
  * Method UNKNOWN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#req_unknown DataThunderSlbHttpProxyStats#req_unknown}
  */
  readonly reqUnknown?: number;
  /**
  * Status code 100
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#response_100 DataThunderSlbHttpProxyStats#response_100}
  */
  readonly response100?: number;
  /**
  * Status code 101
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#response_101 DataThunderSlbHttpProxyStats#response_101}
  */
  readonly response101?: number;
  /**
  * Status code 102
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#response_102 DataThunderSlbHttpProxyStats#response_102}
  */
  readonly response102?: number;
  /**
  * Status code 1XX
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#response_1xx DataThunderSlbHttpProxyStats#response_1xx}
  */
  readonly response1Xx?: number;
  /**
  * Status code 200
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#response_200 DataThunderSlbHttpProxyStats#response_200}
  */
  readonly response200?: number;
  /**
  * Status code 201
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#response_201 DataThunderSlbHttpProxyStats#response_201}
  */
  readonly response201?: number;
  /**
  * Status code 202
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#response_202 DataThunderSlbHttpProxyStats#response_202}
  */
  readonly response202?: number;
  /**
  * Status code 203
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#response_203 DataThunderSlbHttpProxyStats#response_203}
  */
  readonly response203?: number;
  /**
  * Status code 204
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#response_204 DataThunderSlbHttpProxyStats#response_204}
  */
  readonly response204?: number;
  /**
  * Status code 205
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#response_205 DataThunderSlbHttpProxyStats#response_205}
  */
  readonly response205?: number;
  /**
  * Status code 206
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#response_206 DataThunderSlbHttpProxyStats#response_206}
  */
  readonly response206?: number;
  /**
  * Status code 207
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#response_207 DataThunderSlbHttpProxyStats#response_207}
  */
  readonly response207?: number;
  /**
  * Status code 2XX
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#response_2xx DataThunderSlbHttpProxyStats#response_2xx}
  */
  readonly response2Xx?: number;
  /**
  * Status code 300
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#response_300 DataThunderSlbHttpProxyStats#response_300}
  */
  readonly response300?: number;
  /**
  * Status code 301
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#response_301 DataThunderSlbHttpProxyStats#response_301}
  */
  readonly response301?: number;
  /**
  * Status code 302
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#response_302 DataThunderSlbHttpProxyStats#response_302}
  */
  readonly response302?: number;
  /**
  * Status code 303
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#response_303 DataThunderSlbHttpProxyStats#response_303}
  */
  readonly response303?: number;
  /**
  * Status code 304
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#response_304 DataThunderSlbHttpProxyStats#response_304}
  */
  readonly response304?: number;
  /**
  * Status code 305
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#response_305 DataThunderSlbHttpProxyStats#response_305}
  */
  readonly response305?: number;
  /**
  * Status code 306
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#response_306 DataThunderSlbHttpProxyStats#response_306}
  */
  readonly response306?: number;
  /**
  * Status code 307
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#response_307 DataThunderSlbHttpProxyStats#response_307}
  */
  readonly response307?: number;
  /**
  * Status code 3XX
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#response_3xx DataThunderSlbHttpProxyStats#response_3xx}
  */
  readonly response3Xx?: number;
  /**
  * Status code 400
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#response_400 DataThunderSlbHttpProxyStats#response_400}
  */
  readonly response400?: number;
  /**
  * Status code 401
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#response_401 DataThunderSlbHttpProxyStats#response_401}
  */
  readonly response401?: number;
  /**
  * Status code 402
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#response_402 DataThunderSlbHttpProxyStats#response_402}
  */
  readonly response402?: number;
  /**
  * Status code 403
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#response_403 DataThunderSlbHttpProxyStats#response_403}
  */
  readonly response403?: number;
  /**
  * Status code 404
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#response_404 DataThunderSlbHttpProxyStats#response_404}
  */
  readonly response404?: number;
  /**
  * Status code 405
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#response_405 DataThunderSlbHttpProxyStats#response_405}
  */
  readonly response405?: number;
  /**
  * Status code 406
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#response_406 DataThunderSlbHttpProxyStats#response_406}
  */
  readonly response406?: number;
  /**
  * Status code 407
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#response_407 DataThunderSlbHttpProxyStats#response_407}
  */
  readonly response407?: number;
  /**
  * Status code 408
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#response_408 DataThunderSlbHttpProxyStats#response_408}
  */
  readonly response408?: number;
  /**
  * Status code 409
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#response_409 DataThunderSlbHttpProxyStats#response_409}
  */
  readonly response409?: number;
  /**
  * Status code 410
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#response_410 DataThunderSlbHttpProxyStats#response_410}
  */
  readonly response410?: number;
  /**
  * Status code 411
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#response_411 DataThunderSlbHttpProxyStats#response_411}
  */
  readonly response411?: number;
  /**
  * Status code 412
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#response_412 DataThunderSlbHttpProxyStats#response_412}
  */
  readonly response412?: number;
  /**
  * Status code 413
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#response_413 DataThunderSlbHttpProxyStats#response_413}
  */
  readonly response413?: number;
  /**
  * Status code 414
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#response_414 DataThunderSlbHttpProxyStats#response_414}
  */
  readonly response414?: number;
  /**
  * Status code 415
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#response_415 DataThunderSlbHttpProxyStats#response_415}
  */
  readonly response415?: number;
  /**
  * Status code 416
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#response_416 DataThunderSlbHttpProxyStats#response_416}
  */
  readonly response416?: number;
  /**
  * Status code 417
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#response_417 DataThunderSlbHttpProxyStats#response_417}
  */
  readonly response417?: number;
  /**
  * Status code 418
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#response_418 DataThunderSlbHttpProxyStats#response_418}
  */
  readonly response418?: number;
  /**
  * Status code 422
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#response_422 DataThunderSlbHttpProxyStats#response_422}
  */
  readonly response422?: number;
  /**
  * Status code 423
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#response_423 DataThunderSlbHttpProxyStats#response_423}
  */
  readonly response423?: number;
  /**
  * Status code 424
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#response_424 DataThunderSlbHttpProxyStats#response_424}
  */
  readonly response424?: number;
  /**
  * Status code 425
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#response_425 DataThunderSlbHttpProxyStats#response_425}
  */
  readonly response425?: number;
  /**
  * Status code 426
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#response_426 DataThunderSlbHttpProxyStats#response_426}
  */
  readonly response426?: number;
  /**
  * Status code 449
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#response_449 DataThunderSlbHttpProxyStats#response_449}
  */
  readonly response449?: number;
  /**
  * Status code 450
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#response_450 DataThunderSlbHttpProxyStats#response_450}
  */
  readonly response450?: number;
  /**
  * Status code 4XX
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#response_4xx DataThunderSlbHttpProxyStats#response_4xx}
  */
  readonly response4Xx?: number;
  /**
  * Status code 500
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#response_500 DataThunderSlbHttpProxyStats#response_500}
  */
  readonly response500?: number;
  /**
  * Status code 501
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#response_501 DataThunderSlbHttpProxyStats#response_501}
  */
  readonly response501?: number;
  /**
  * Status code 502
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#response_502 DataThunderSlbHttpProxyStats#response_502}
  */
  readonly response502?: number;
  /**
  * Status code 503
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#response_503 DataThunderSlbHttpProxyStats#response_503}
  */
  readonly response503?: number;
  /**
  * Status code 504
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#response_504 DataThunderSlbHttpProxyStats#response_504}
  */
  readonly response504?: number;
  /**
  * Status code 505
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#response_505 DataThunderSlbHttpProxyStats#response_505}
  */
  readonly response505?: number;
  /**
  * Status code 506
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#response_506 DataThunderSlbHttpProxyStats#response_506}
  */
  readonly response506?: number;
  /**
  * Status code 507
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#response_507 DataThunderSlbHttpProxyStats#response_507}
  */
  readonly response507?: number;
  /**
  * Status code 508
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#response_508 DataThunderSlbHttpProxyStats#response_508}
  */
  readonly response508?: number;
  /**
  * Status code 509
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#response_509 DataThunderSlbHttpProxyStats#response_509}
  */
  readonly response509?: number;
  /**
  * Status code 510
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#response_510 DataThunderSlbHttpProxyStats#response_510}
  */
  readonly response510?: number;
  /**
  * Status code 5XX
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#response_5xx DataThunderSlbHttpProxyStats#response_5xx}
  */
  readonly response5Xx?: number;
  /**
  * Status code 6XX
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#response_6xx DataThunderSlbHttpProxyStats#response_6xx}
  */
  readonly response6Xx?: number;
  /**
  * Resp 2.0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#response_http2 DataThunderSlbHttpProxyStats#response_http2}
  */
  readonly responseHttp2?: number;
  /**
  * Resp 3.0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#response_http3 DataThunderSlbHttpProxyStats#response_http3}
  */
  readonly responseHttp3?: number;
  /**
  * Status code unknown
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#response_unknown DataThunderSlbHttpProxyStats#response_unknown}
  */
  readonly responseUnknown?: number;
  /**
  * Resp chunk encoding
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#rsp_chunk DataThunderSlbHttpProxyStats#rsp_chunk}
  */
  readonly rspChunk?: number;
  /**
  * Resp content len
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#rsp_content_len DataThunderSlbHttpProxyStats#rsp_content_len}
  */
  readonly rspContentLen?: number;
  /**
  * Resp less than equal to 16K
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#rsp_sz_16k DataThunderSlbHttpProxyStats#rsp_sz_16k}
  */
  readonly rspSz16K?: number;
  /**
  * Resp less than equal to 1K
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#rsp_sz_1k DataThunderSlbHttpProxyStats#rsp_sz_1k}
  */
  readonly rspSz1K?: number;
  /**
  * Resp less than equal to 256K
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#rsp_sz_256k DataThunderSlbHttpProxyStats#rsp_sz_256k}
  */
  readonly rspSz256K?: number;
  /**
  * Resp less than equal to 2K
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#rsp_sz_2k DataThunderSlbHttpProxyStats#rsp_sz_2k}
  */
  readonly rspSz2K?: number;
  /**
  * Resp less than equal to 32K
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#rsp_sz_32k DataThunderSlbHttpProxyStats#rsp_sz_32k}
  */
  readonly rspSz32K?: number;
  /**
  * Resp less than equal to 4K
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#rsp_sz_4k DataThunderSlbHttpProxyStats#rsp_sz_4k}
  */
  readonly rspSz4K?: number;
  /**
  * Resp less than equal to 64K
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#rsp_sz_64k DataThunderSlbHttpProxyStats#rsp_sz_64k}
  */
  readonly rspSz64K?: number;
  /**
  * Resp less than equal to 8K
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#rsp_sz_8k DataThunderSlbHttpProxyStats#rsp_sz_8k}
  */
  readonly rspSz8K?: number;
  /**
  * Resp greater than 256K
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#rsp_sz_gt_256k DataThunderSlbHttpProxyStats#rsp_sz_gt_256k}
  */
  readonly rspSzGt256K?: number;
  /**
  * Server reselection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#server_resel DataThunderSlbHttpProxyStats#server_resel}
  */
  readonly serverResel?: number;
  /**
  * Server RST
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#server_rst DataThunderSlbHttpProxyStats#server_rst}
  */
  readonly serverRst?: number;
  /**
  * Source NAT failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#snat_fail DataThunderSlbHttpProxyStats#snat_fail}
  */
  readonly snatFail?: number;
  /**
  * Server premature close
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#svr_prem_close DataThunderSlbHttpProxyStats#svr_prem_close}
  */
  readonly svrPremClose?: number;
  /**
  * Server selection fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#svrsel_fail DataThunderSlbHttpProxyStats#svrsel_fail}
  */
  readonly svrselFail?: number;
  /**
  * Total Proxy Conns
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#total_proxy DataThunderSlbHttpProxyStats#total_proxy}
  */
  readonly totalProxy?: number;
}

export function dataThunderSlbHttpProxyStatsStatsToTerraform(struct?: DataThunderSlbHttpProxyStatsStatsOutputReference | DataThunderSlbHttpProxyStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cache_rsp: cdktf.numberToTerraform(struct!.cacheRsp),
    chunk_sz_1k: cdktf.numberToTerraform(struct!.chunkSz1K),
    chunk_sz_2k: cdktf.numberToTerraform(struct!.chunkSz2K),
    chunk_sz_4k: cdktf.numberToTerraform(struct!.chunkSz4K),
    chunk_sz_512: cdktf.numberToTerraform(struct!.chunkSz512),
    chunk_sz_gt_4k: cdktf.numberToTerraform(struct!.chunkSzGt4K),
    client_rst: cdktf.numberToTerraform(struct!.clientRst),
    close_on_ddos: cdktf.numberToTerraform(struct!.closeOnDdos),
    compression_after: cdktf.numberToTerraform(struct!.compressionAfter),
    compression_after_br: cdktf.numberToTerraform(struct!.compressionAfterBr),
    compression_after_total: cdktf.numberToTerraform(struct!.compressionAfterTotal),
    compression_before: cdktf.numberToTerraform(struct!.compressionBefore),
    compression_before_br: cdktf.numberToTerraform(struct!.compressionBeforeBr),
    compression_before_total: cdktf.numberToTerraform(struct!.compressionBeforeTotal),
    connect_req: cdktf.numberToTerraform(struct!.connectReq),
    curr_proxy: cdktf.numberToTerraform(struct!.currProxy),
    decompression_after: cdktf.numberToTerraform(struct!.decompressionAfter),
    decompression_after_br: cdktf.numberToTerraform(struct!.decompressionAfterBr),
    decompression_after_total: cdktf.numberToTerraform(struct!.decompressionAfterTotal),
    decompression_before: cdktf.numberToTerraform(struct!.decompressionBefore),
    decompression_before_br: cdktf.numberToTerraform(struct!.decompressionBeforeBr),
    decompression_before_total: cdktf.numberToTerraform(struct!.decompressionBeforeTotal),
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
    fwdreq_fail: cdktf.numberToTerraform(struct!.fwdreqFail),
    fwdreqdata_fail: cdktf.numberToTerraform(struct!.fwdreqdataFail),
    new_svrconn: cdktf.numberToTerraform(struct!.newSvrconn),
    noproxy: cdktf.numberToTerraform(struct!.noproxy),
    notuple: cdktf.numberToTerraform(struct!.notuple),
    parsereq_fail: cdktf.numberToTerraform(struct!.parsereqFail),
    req: cdktf.numberToTerraform(struct!.req),
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
    req_enter_ssli: cdktf.numberToTerraform(struct!.reqEnterSsli),
    req_get: cdktf.numberToTerraform(struct!.reqGet),
    req_head: cdktf.numberToTerraform(struct!.reqHead),
    req_http2: cdktf.numberToTerraform(struct!.reqHttp2),
    req_http3: cdktf.numberToTerraform(struct!.reqHttp3),
    req_ofo: cdktf.numberToTerraform(struct!.reqOfo),
    req_options: cdktf.numberToTerraform(struct!.reqOptions),
    req_over_5s: cdktf.numberToTerraform(struct!.reqOver5S),
    req_over_limit: cdktf.numberToTerraform(struct!.reqOverLimit),
    req_post: cdktf.numberToTerraform(struct!.reqPost),
    req_put: cdktf.numberToTerraform(struct!.reqPut),
    req_rate_over_limit: cdktf.numberToTerraform(struct!.reqRateOverLimit),
    req_retran: cdktf.numberToTerraform(struct!.reqRetran),
    req_succ: cdktf.numberToTerraform(struct!.reqSucc),
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
    response_100: cdktf.numberToTerraform(struct!.response100),
    response_101: cdktf.numberToTerraform(struct!.response101),
    response_102: cdktf.numberToTerraform(struct!.response102),
    response_1xx: cdktf.numberToTerraform(struct!.response1Xx),
    response_200: cdktf.numberToTerraform(struct!.response200),
    response_201: cdktf.numberToTerraform(struct!.response201),
    response_202: cdktf.numberToTerraform(struct!.response202),
    response_203: cdktf.numberToTerraform(struct!.response203),
    response_204: cdktf.numberToTerraform(struct!.response204),
    response_205: cdktf.numberToTerraform(struct!.response205),
    response_206: cdktf.numberToTerraform(struct!.response206),
    response_207: cdktf.numberToTerraform(struct!.response207),
    response_2xx: cdktf.numberToTerraform(struct!.response2Xx),
    response_300: cdktf.numberToTerraform(struct!.response300),
    response_301: cdktf.numberToTerraform(struct!.response301),
    response_302: cdktf.numberToTerraform(struct!.response302),
    response_303: cdktf.numberToTerraform(struct!.response303),
    response_304: cdktf.numberToTerraform(struct!.response304),
    response_305: cdktf.numberToTerraform(struct!.response305),
    response_306: cdktf.numberToTerraform(struct!.response306),
    response_307: cdktf.numberToTerraform(struct!.response307),
    response_3xx: cdktf.numberToTerraform(struct!.response3Xx),
    response_400: cdktf.numberToTerraform(struct!.response400),
    response_401: cdktf.numberToTerraform(struct!.response401),
    response_402: cdktf.numberToTerraform(struct!.response402),
    response_403: cdktf.numberToTerraform(struct!.response403),
    response_404: cdktf.numberToTerraform(struct!.response404),
    response_405: cdktf.numberToTerraform(struct!.response405),
    response_406: cdktf.numberToTerraform(struct!.response406),
    response_407: cdktf.numberToTerraform(struct!.response407),
    response_408: cdktf.numberToTerraform(struct!.response408),
    response_409: cdktf.numberToTerraform(struct!.response409),
    response_410: cdktf.numberToTerraform(struct!.response410),
    response_411: cdktf.numberToTerraform(struct!.response411),
    response_412: cdktf.numberToTerraform(struct!.response412),
    response_413: cdktf.numberToTerraform(struct!.response413),
    response_414: cdktf.numberToTerraform(struct!.response414),
    response_415: cdktf.numberToTerraform(struct!.response415),
    response_416: cdktf.numberToTerraform(struct!.response416),
    response_417: cdktf.numberToTerraform(struct!.response417),
    response_418: cdktf.numberToTerraform(struct!.response418),
    response_422: cdktf.numberToTerraform(struct!.response422),
    response_423: cdktf.numberToTerraform(struct!.response423),
    response_424: cdktf.numberToTerraform(struct!.response424),
    response_425: cdktf.numberToTerraform(struct!.response425),
    response_426: cdktf.numberToTerraform(struct!.response426),
    response_449: cdktf.numberToTerraform(struct!.response449),
    response_450: cdktf.numberToTerraform(struct!.response450),
    response_4xx: cdktf.numberToTerraform(struct!.response4Xx),
    response_500: cdktf.numberToTerraform(struct!.response500),
    response_501: cdktf.numberToTerraform(struct!.response501),
    response_502: cdktf.numberToTerraform(struct!.response502),
    response_503: cdktf.numberToTerraform(struct!.response503),
    response_504: cdktf.numberToTerraform(struct!.response504),
    response_505: cdktf.numberToTerraform(struct!.response505),
    response_506: cdktf.numberToTerraform(struct!.response506),
    response_507: cdktf.numberToTerraform(struct!.response507),
    response_508: cdktf.numberToTerraform(struct!.response508),
    response_509: cdktf.numberToTerraform(struct!.response509),
    response_510: cdktf.numberToTerraform(struct!.response510),
    response_5xx: cdktf.numberToTerraform(struct!.response5Xx),
    response_6xx: cdktf.numberToTerraform(struct!.response6Xx),
    response_http2: cdktf.numberToTerraform(struct!.responseHttp2),
    response_http3: cdktf.numberToTerraform(struct!.responseHttp3),
    response_unknown: cdktf.numberToTerraform(struct!.responseUnknown),
    rsp_chunk: cdktf.numberToTerraform(struct!.rspChunk),
    rsp_content_len: cdktf.numberToTerraform(struct!.rspContentLen),
    rsp_sz_16k: cdktf.numberToTerraform(struct!.rspSz16K),
    rsp_sz_1k: cdktf.numberToTerraform(struct!.rspSz1K),
    rsp_sz_256k: cdktf.numberToTerraform(struct!.rspSz256K),
    rsp_sz_2k: cdktf.numberToTerraform(struct!.rspSz2K),
    rsp_sz_32k: cdktf.numberToTerraform(struct!.rspSz32K),
    rsp_sz_4k: cdktf.numberToTerraform(struct!.rspSz4K),
    rsp_sz_64k: cdktf.numberToTerraform(struct!.rspSz64K),
    rsp_sz_8k: cdktf.numberToTerraform(struct!.rspSz8K),
    rsp_sz_gt_256k: cdktf.numberToTerraform(struct!.rspSzGt256K),
    server_resel: cdktf.numberToTerraform(struct!.serverResel),
    server_rst: cdktf.numberToTerraform(struct!.serverRst),
    snat_fail: cdktf.numberToTerraform(struct!.snatFail),
    svr_prem_close: cdktf.numberToTerraform(struct!.svrPremClose),
    svrsel_fail: cdktf.numberToTerraform(struct!.svrselFail),
    total_proxy: cdktf.numberToTerraform(struct!.totalProxy),
  }
}


export function dataThunderSlbHttpProxyStatsStatsToHclTerraform(struct?: DataThunderSlbHttpProxyStatsStatsOutputReference | DataThunderSlbHttpProxyStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cache_rsp: {
      value: cdktf.numberToHclTerraform(struct!.cacheRsp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
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
    client_rst: {
      value: cdktf.numberToHclTerraform(struct!.clientRst),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    close_on_ddos: {
      value: cdktf.numberToHclTerraform(struct!.closeOnDdos),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    compression_after: {
      value: cdktf.numberToHclTerraform(struct!.compressionAfter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    compression_after_br: {
      value: cdktf.numberToHclTerraform(struct!.compressionAfterBr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    compression_after_total: {
      value: cdktf.numberToHclTerraform(struct!.compressionAfterTotal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    compression_before: {
      value: cdktf.numberToHclTerraform(struct!.compressionBefore),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    compression_before_br: {
      value: cdktf.numberToHclTerraform(struct!.compressionBeforeBr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    compression_before_total: {
      value: cdktf.numberToHclTerraform(struct!.compressionBeforeTotal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    connect_req: {
      value: cdktf.numberToHclTerraform(struct!.connectReq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    curr_proxy: {
      value: cdktf.numberToHclTerraform(struct!.currProxy),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    decompression_after: {
      value: cdktf.numberToHclTerraform(struct!.decompressionAfter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    decompression_after_br: {
      value: cdktf.numberToHclTerraform(struct!.decompressionAfterBr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    decompression_after_total: {
      value: cdktf.numberToHclTerraform(struct!.decompressionAfterTotal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    decompression_before: {
      value: cdktf.numberToHclTerraform(struct!.decompressionBefore),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    decompression_before_br: {
      value: cdktf.numberToHclTerraform(struct!.decompressionBeforeBr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    decompression_before_total: {
      value: cdktf.numberToHclTerraform(struct!.decompressionBeforeTotal),
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
    fwdreq_fail: {
      value: cdktf.numberToHclTerraform(struct!.fwdreqFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fwdreqdata_fail: {
      value: cdktf.numberToHclTerraform(struct!.fwdreqdataFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    new_svrconn: {
      value: cdktf.numberToHclTerraform(struct!.newSvrconn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    noproxy: {
      value: cdktf.numberToHclTerraform(struct!.noproxy),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    notuple: {
      value: cdktf.numberToHclTerraform(struct!.notuple),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    parsereq_fail: {
      value: cdktf.numberToHclTerraform(struct!.parsereqFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req: {
      value: cdktf.numberToHclTerraform(struct!.req),
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
    req_enter_ssli: {
      value: cdktf.numberToHclTerraform(struct!.reqEnterSsli),
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
    req_http2: {
      value: cdktf.numberToHclTerraform(struct!.reqHttp2),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req_http3: {
      value: cdktf.numberToHclTerraform(struct!.reqHttp3),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req_ofo: {
      value: cdktf.numberToHclTerraform(struct!.reqOfo),
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
    req_over_limit: {
      value: cdktf.numberToHclTerraform(struct!.reqOverLimit),
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
    req_rate_over_limit: {
      value: cdktf.numberToHclTerraform(struct!.reqRateOverLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req_retran: {
      value: cdktf.numberToHclTerraform(struct!.reqRetran),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req_succ: {
      value: cdktf.numberToHclTerraform(struct!.reqSucc),
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
    response_100: {
      value: cdktf.numberToHclTerraform(struct!.response100),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_101: {
      value: cdktf.numberToHclTerraform(struct!.response101),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_102: {
      value: cdktf.numberToHclTerraform(struct!.response102),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_1xx: {
      value: cdktf.numberToHclTerraform(struct!.response1Xx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_200: {
      value: cdktf.numberToHclTerraform(struct!.response200),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_201: {
      value: cdktf.numberToHclTerraform(struct!.response201),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_202: {
      value: cdktf.numberToHclTerraform(struct!.response202),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_203: {
      value: cdktf.numberToHclTerraform(struct!.response203),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_204: {
      value: cdktf.numberToHclTerraform(struct!.response204),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_205: {
      value: cdktf.numberToHclTerraform(struct!.response205),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_206: {
      value: cdktf.numberToHclTerraform(struct!.response206),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_207: {
      value: cdktf.numberToHclTerraform(struct!.response207),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_2xx: {
      value: cdktf.numberToHclTerraform(struct!.response2Xx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_300: {
      value: cdktf.numberToHclTerraform(struct!.response300),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_301: {
      value: cdktf.numberToHclTerraform(struct!.response301),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_302: {
      value: cdktf.numberToHclTerraform(struct!.response302),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_303: {
      value: cdktf.numberToHclTerraform(struct!.response303),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_304: {
      value: cdktf.numberToHclTerraform(struct!.response304),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_305: {
      value: cdktf.numberToHclTerraform(struct!.response305),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_306: {
      value: cdktf.numberToHclTerraform(struct!.response306),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_307: {
      value: cdktf.numberToHclTerraform(struct!.response307),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_3xx: {
      value: cdktf.numberToHclTerraform(struct!.response3Xx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_400: {
      value: cdktf.numberToHclTerraform(struct!.response400),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_401: {
      value: cdktf.numberToHclTerraform(struct!.response401),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_402: {
      value: cdktf.numberToHclTerraform(struct!.response402),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_403: {
      value: cdktf.numberToHclTerraform(struct!.response403),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_404: {
      value: cdktf.numberToHclTerraform(struct!.response404),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_405: {
      value: cdktf.numberToHclTerraform(struct!.response405),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_406: {
      value: cdktf.numberToHclTerraform(struct!.response406),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_407: {
      value: cdktf.numberToHclTerraform(struct!.response407),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_408: {
      value: cdktf.numberToHclTerraform(struct!.response408),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_409: {
      value: cdktf.numberToHclTerraform(struct!.response409),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_410: {
      value: cdktf.numberToHclTerraform(struct!.response410),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_411: {
      value: cdktf.numberToHclTerraform(struct!.response411),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_412: {
      value: cdktf.numberToHclTerraform(struct!.response412),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_413: {
      value: cdktf.numberToHclTerraform(struct!.response413),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_414: {
      value: cdktf.numberToHclTerraform(struct!.response414),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_415: {
      value: cdktf.numberToHclTerraform(struct!.response415),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_416: {
      value: cdktf.numberToHclTerraform(struct!.response416),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_417: {
      value: cdktf.numberToHclTerraform(struct!.response417),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_418: {
      value: cdktf.numberToHclTerraform(struct!.response418),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_422: {
      value: cdktf.numberToHclTerraform(struct!.response422),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_423: {
      value: cdktf.numberToHclTerraform(struct!.response423),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_424: {
      value: cdktf.numberToHclTerraform(struct!.response424),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_425: {
      value: cdktf.numberToHclTerraform(struct!.response425),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_426: {
      value: cdktf.numberToHclTerraform(struct!.response426),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_449: {
      value: cdktf.numberToHclTerraform(struct!.response449),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_450: {
      value: cdktf.numberToHclTerraform(struct!.response450),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_4xx: {
      value: cdktf.numberToHclTerraform(struct!.response4Xx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_500: {
      value: cdktf.numberToHclTerraform(struct!.response500),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_501: {
      value: cdktf.numberToHclTerraform(struct!.response501),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_502: {
      value: cdktf.numberToHclTerraform(struct!.response502),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_503: {
      value: cdktf.numberToHclTerraform(struct!.response503),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_504: {
      value: cdktf.numberToHclTerraform(struct!.response504),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_505: {
      value: cdktf.numberToHclTerraform(struct!.response505),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_506: {
      value: cdktf.numberToHclTerraform(struct!.response506),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_507: {
      value: cdktf.numberToHclTerraform(struct!.response507),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_508: {
      value: cdktf.numberToHclTerraform(struct!.response508),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_509: {
      value: cdktf.numberToHclTerraform(struct!.response509),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_510: {
      value: cdktf.numberToHclTerraform(struct!.response510),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_5xx: {
      value: cdktf.numberToHclTerraform(struct!.response5Xx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_6xx: {
      value: cdktf.numberToHclTerraform(struct!.response6Xx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_http2: {
      value: cdktf.numberToHclTerraform(struct!.responseHttp2),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_http3: {
      value: cdktf.numberToHclTerraform(struct!.responseHttp3),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_unknown: {
      value: cdktf.numberToHclTerraform(struct!.responseUnknown),
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
    rsp_content_len: {
      value: cdktf.numberToHclTerraform(struct!.rspContentLen),
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
    server_resel: {
      value: cdktf.numberToHclTerraform(struct!.serverResel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_rst: {
      value: cdktf.numberToHclTerraform(struct!.serverRst),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    snat_fail: {
      value: cdktf.numberToHclTerraform(struct!.snatFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    svr_prem_close: {
      value: cdktf.numberToHclTerraform(struct!.svrPremClose),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    svrsel_fail: {
      value: cdktf.numberToHclTerraform(struct!.svrselFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_proxy: {
      value: cdktf.numberToHclTerraform(struct!.totalProxy),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbHttpProxyStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSlbHttpProxyStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cacheRsp !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheRsp = this._cacheRsp;
    }
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
    if (this._clientRst !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientRst = this._clientRst;
    }
    if (this._closeOnDdos !== undefined) {
      hasAnyValues = true;
      internalValueResult.closeOnDdos = this._closeOnDdos;
    }
    if (this._compressionAfter !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionAfter = this._compressionAfter;
    }
    if (this._compressionAfterBr !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionAfterBr = this._compressionAfterBr;
    }
    if (this._compressionAfterTotal !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionAfterTotal = this._compressionAfterTotal;
    }
    if (this._compressionBefore !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionBefore = this._compressionBefore;
    }
    if (this._compressionBeforeBr !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionBeforeBr = this._compressionBeforeBr;
    }
    if (this._compressionBeforeTotal !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionBeforeTotal = this._compressionBeforeTotal;
    }
    if (this._connectReq !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectReq = this._connectReq;
    }
    if (this._currProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.currProxy = this._currProxy;
    }
    if (this._decompressionAfter !== undefined) {
      hasAnyValues = true;
      internalValueResult.decompressionAfter = this._decompressionAfter;
    }
    if (this._decompressionAfterBr !== undefined) {
      hasAnyValues = true;
      internalValueResult.decompressionAfterBr = this._decompressionAfterBr;
    }
    if (this._decompressionAfterTotal !== undefined) {
      hasAnyValues = true;
      internalValueResult.decompressionAfterTotal = this._decompressionAfterTotal;
    }
    if (this._decompressionBefore !== undefined) {
      hasAnyValues = true;
      internalValueResult.decompressionBefore = this._decompressionBefore;
    }
    if (this._decompressionBeforeBr !== undefined) {
      hasAnyValues = true;
      internalValueResult.decompressionBeforeBr = this._decompressionBeforeBr;
    }
    if (this._decompressionBeforeTotal !== undefined) {
      hasAnyValues = true;
      internalValueResult.decompressionBeforeTotal = this._decompressionBeforeTotal;
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
    if (this._fwdreqFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwdreqFail = this._fwdreqFail;
    }
    if (this._fwdreqdataFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwdreqdataFail = this._fwdreqdataFail;
    }
    if (this._newSvrconn !== undefined) {
      hasAnyValues = true;
      internalValueResult.newSvrconn = this._newSvrconn;
    }
    if (this._noproxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.noproxy = this._noproxy;
    }
    if (this._notuple !== undefined) {
      hasAnyValues = true;
      internalValueResult.notuple = this._notuple;
    }
    if (this._parsereqFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.parsereqFail = this._parsereqFail;
    }
    if (this._req !== undefined) {
      hasAnyValues = true;
      internalValueResult.req = this._req;
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
    if (this._reqEnterSsli !== undefined) {
      hasAnyValues = true;
      internalValueResult.reqEnterSsli = this._reqEnterSsli;
    }
    if (this._reqGet !== undefined) {
      hasAnyValues = true;
      internalValueResult.reqGet = this._reqGet;
    }
    if (this._reqHead !== undefined) {
      hasAnyValues = true;
      internalValueResult.reqHead = this._reqHead;
    }
    if (this._reqHttp2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.reqHttp2 = this._reqHttp2;
    }
    if (this._reqHttp3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.reqHttp3 = this._reqHttp3;
    }
    if (this._reqOfo !== undefined) {
      hasAnyValues = true;
      internalValueResult.reqOfo = this._reqOfo;
    }
    if (this._reqOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.reqOptions = this._reqOptions;
    }
    if (this._reqOver5S !== undefined) {
      hasAnyValues = true;
      internalValueResult.reqOver5S = this._reqOver5S;
    }
    if (this._reqOverLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.reqOverLimit = this._reqOverLimit;
    }
    if (this._reqPost !== undefined) {
      hasAnyValues = true;
      internalValueResult.reqPost = this._reqPost;
    }
    if (this._reqPut !== undefined) {
      hasAnyValues = true;
      internalValueResult.reqPut = this._reqPut;
    }
    if (this._reqRateOverLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.reqRateOverLimit = this._reqRateOverLimit;
    }
    if (this._reqRetran !== undefined) {
      hasAnyValues = true;
      internalValueResult.reqRetran = this._reqRetran;
    }
    if (this._reqSucc !== undefined) {
      hasAnyValues = true;
      internalValueResult.reqSucc = this._reqSucc;
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
    if (this._response100 !== undefined) {
      hasAnyValues = true;
      internalValueResult.response100 = this._response100;
    }
    if (this._response101 !== undefined) {
      hasAnyValues = true;
      internalValueResult.response101 = this._response101;
    }
    if (this._response102 !== undefined) {
      hasAnyValues = true;
      internalValueResult.response102 = this._response102;
    }
    if (this._response1Xx !== undefined) {
      hasAnyValues = true;
      internalValueResult.response1Xx = this._response1Xx;
    }
    if (this._response200 !== undefined) {
      hasAnyValues = true;
      internalValueResult.response200 = this._response200;
    }
    if (this._response201 !== undefined) {
      hasAnyValues = true;
      internalValueResult.response201 = this._response201;
    }
    if (this._response202 !== undefined) {
      hasAnyValues = true;
      internalValueResult.response202 = this._response202;
    }
    if (this._response203 !== undefined) {
      hasAnyValues = true;
      internalValueResult.response203 = this._response203;
    }
    if (this._response204 !== undefined) {
      hasAnyValues = true;
      internalValueResult.response204 = this._response204;
    }
    if (this._response205 !== undefined) {
      hasAnyValues = true;
      internalValueResult.response205 = this._response205;
    }
    if (this._response206 !== undefined) {
      hasAnyValues = true;
      internalValueResult.response206 = this._response206;
    }
    if (this._response207 !== undefined) {
      hasAnyValues = true;
      internalValueResult.response207 = this._response207;
    }
    if (this._response2Xx !== undefined) {
      hasAnyValues = true;
      internalValueResult.response2Xx = this._response2Xx;
    }
    if (this._response300 !== undefined) {
      hasAnyValues = true;
      internalValueResult.response300 = this._response300;
    }
    if (this._response301 !== undefined) {
      hasAnyValues = true;
      internalValueResult.response301 = this._response301;
    }
    if (this._response302 !== undefined) {
      hasAnyValues = true;
      internalValueResult.response302 = this._response302;
    }
    if (this._response303 !== undefined) {
      hasAnyValues = true;
      internalValueResult.response303 = this._response303;
    }
    if (this._response304 !== undefined) {
      hasAnyValues = true;
      internalValueResult.response304 = this._response304;
    }
    if (this._response305 !== undefined) {
      hasAnyValues = true;
      internalValueResult.response305 = this._response305;
    }
    if (this._response306 !== undefined) {
      hasAnyValues = true;
      internalValueResult.response306 = this._response306;
    }
    if (this._response307 !== undefined) {
      hasAnyValues = true;
      internalValueResult.response307 = this._response307;
    }
    if (this._response3Xx !== undefined) {
      hasAnyValues = true;
      internalValueResult.response3Xx = this._response3Xx;
    }
    if (this._response400 !== undefined) {
      hasAnyValues = true;
      internalValueResult.response400 = this._response400;
    }
    if (this._response401 !== undefined) {
      hasAnyValues = true;
      internalValueResult.response401 = this._response401;
    }
    if (this._response402 !== undefined) {
      hasAnyValues = true;
      internalValueResult.response402 = this._response402;
    }
    if (this._response403 !== undefined) {
      hasAnyValues = true;
      internalValueResult.response403 = this._response403;
    }
    if (this._response404 !== undefined) {
      hasAnyValues = true;
      internalValueResult.response404 = this._response404;
    }
    if (this._response405 !== undefined) {
      hasAnyValues = true;
      internalValueResult.response405 = this._response405;
    }
    if (this._response406 !== undefined) {
      hasAnyValues = true;
      internalValueResult.response406 = this._response406;
    }
    if (this._response407 !== undefined) {
      hasAnyValues = true;
      internalValueResult.response407 = this._response407;
    }
    if (this._response408 !== undefined) {
      hasAnyValues = true;
      internalValueResult.response408 = this._response408;
    }
    if (this._response409 !== undefined) {
      hasAnyValues = true;
      internalValueResult.response409 = this._response409;
    }
    if (this._response410 !== undefined) {
      hasAnyValues = true;
      internalValueResult.response410 = this._response410;
    }
    if (this._response411 !== undefined) {
      hasAnyValues = true;
      internalValueResult.response411 = this._response411;
    }
    if (this._response412 !== undefined) {
      hasAnyValues = true;
      internalValueResult.response412 = this._response412;
    }
    if (this._response413 !== undefined) {
      hasAnyValues = true;
      internalValueResult.response413 = this._response413;
    }
    if (this._response414 !== undefined) {
      hasAnyValues = true;
      internalValueResult.response414 = this._response414;
    }
    if (this._response415 !== undefined) {
      hasAnyValues = true;
      internalValueResult.response415 = this._response415;
    }
    if (this._response416 !== undefined) {
      hasAnyValues = true;
      internalValueResult.response416 = this._response416;
    }
    if (this._response417 !== undefined) {
      hasAnyValues = true;
      internalValueResult.response417 = this._response417;
    }
    if (this._response418 !== undefined) {
      hasAnyValues = true;
      internalValueResult.response418 = this._response418;
    }
    if (this._response422 !== undefined) {
      hasAnyValues = true;
      internalValueResult.response422 = this._response422;
    }
    if (this._response423 !== undefined) {
      hasAnyValues = true;
      internalValueResult.response423 = this._response423;
    }
    if (this._response424 !== undefined) {
      hasAnyValues = true;
      internalValueResult.response424 = this._response424;
    }
    if (this._response425 !== undefined) {
      hasAnyValues = true;
      internalValueResult.response425 = this._response425;
    }
    if (this._response426 !== undefined) {
      hasAnyValues = true;
      internalValueResult.response426 = this._response426;
    }
    if (this._response449 !== undefined) {
      hasAnyValues = true;
      internalValueResult.response449 = this._response449;
    }
    if (this._response450 !== undefined) {
      hasAnyValues = true;
      internalValueResult.response450 = this._response450;
    }
    if (this._response4Xx !== undefined) {
      hasAnyValues = true;
      internalValueResult.response4Xx = this._response4Xx;
    }
    if (this._response500 !== undefined) {
      hasAnyValues = true;
      internalValueResult.response500 = this._response500;
    }
    if (this._response501 !== undefined) {
      hasAnyValues = true;
      internalValueResult.response501 = this._response501;
    }
    if (this._response502 !== undefined) {
      hasAnyValues = true;
      internalValueResult.response502 = this._response502;
    }
    if (this._response503 !== undefined) {
      hasAnyValues = true;
      internalValueResult.response503 = this._response503;
    }
    if (this._response504 !== undefined) {
      hasAnyValues = true;
      internalValueResult.response504 = this._response504;
    }
    if (this._response505 !== undefined) {
      hasAnyValues = true;
      internalValueResult.response505 = this._response505;
    }
    if (this._response506 !== undefined) {
      hasAnyValues = true;
      internalValueResult.response506 = this._response506;
    }
    if (this._response507 !== undefined) {
      hasAnyValues = true;
      internalValueResult.response507 = this._response507;
    }
    if (this._response508 !== undefined) {
      hasAnyValues = true;
      internalValueResult.response508 = this._response508;
    }
    if (this._response509 !== undefined) {
      hasAnyValues = true;
      internalValueResult.response509 = this._response509;
    }
    if (this._response510 !== undefined) {
      hasAnyValues = true;
      internalValueResult.response510 = this._response510;
    }
    if (this._response5Xx !== undefined) {
      hasAnyValues = true;
      internalValueResult.response5Xx = this._response5Xx;
    }
    if (this._response6Xx !== undefined) {
      hasAnyValues = true;
      internalValueResult.response6Xx = this._response6Xx;
    }
    if (this._responseHttp2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseHttp2 = this._responseHttp2;
    }
    if (this._responseHttp3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseHttp3 = this._responseHttp3;
    }
    if (this._responseUnknown !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseUnknown = this._responseUnknown;
    }
    if (this._rspChunk !== undefined) {
      hasAnyValues = true;
      internalValueResult.rspChunk = this._rspChunk;
    }
    if (this._rspContentLen !== undefined) {
      hasAnyValues = true;
      internalValueResult.rspContentLen = this._rspContentLen;
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
    if (this._serverResel !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverResel = this._serverResel;
    }
    if (this._serverRst !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverRst = this._serverRst;
    }
    if (this._snatFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.snatFail = this._snatFail;
    }
    if (this._svrPremClose !== undefined) {
      hasAnyValues = true;
      internalValueResult.svrPremClose = this._svrPremClose;
    }
    if (this._svrselFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.svrselFail = this._svrselFail;
    }
    if (this._totalProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalProxy = this._totalProxy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbHttpProxyStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cacheRsp = undefined;
      this._chunkSz1K = undefined;
      this._chunkSz2K = undefined;
      this._chunkSz4K = undefined;
      this._chunkSz512 = undefined;
      this._chunkSzGt4K = undefined;
      this._clientRst = undefined;
      this._closeOnDdos = undefined;
      this._compressionAfter = undefined;
      this._compressionAfterBr = undefined;
      this._compressionAfterTotal = undefined;
      this._compressionBefore = undefined;
      this._compressionBeforeBr = undefined;
      this._compressionBeforeTotal = undefined;
      this._connectReq = undefined;
      this._currProxy = undefined;
      this._decompressionAfter = undefined;
      this._decompressionAfterBr = undefined;
      this._decompressionAfterTotal = undefined;
      this._decompressionBefore = undefined;
      this._decompressionBeforeBr = undefined;
      this._decompressionBeforeTotal = undefined;
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
      this._fwdreqFail = undefined;
      this._fwdreqdataFail = undefined;
      this._newSvrconn = undefined;
      this._noproxy = undefined;
      this._notuple = undefined;
      this._parsereqFail = undefined;
      this._req = undefined;
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
      this._reqEnterSsli = undefined;
      this._reqGet = undefined;
      this._reqHead = undefined;
      this._reqHttp2 = undefined;
      this._reqHttp3 = undefined;
      this._reqOfo = undefined;
      this._reqOptions = undefined;
      this._reqOver5S = undefined;
      this._reqOverLimit = undefined;
      this._reqPost = undefined;
      this._reqPut = undefined;
      this._reqRateOverLimit = undefined;
      this._reqRetran = undefined;
      this._reqSucc = undefined;
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
      this._response100 = undefined;
      this._response101 = undefined;
      this._response102 = undefined;
      this._response1Xx = undefined;
      this._response200 = undefined;
      this._response201 = undefined;
      this._response202 = undefined;
      this._response203 = undefined;
      this._response204 = undefined;
      this._response205 = undefined;
      this._response206 = undefined;
      this._response207 = undefined;
      this._response2Xx = undefined;
      this._response300 = undefined;
      this._response301 = undefined;
      this._response302 = undefined;
      this._response303 = undefined;
      this._response304 = undefined;
      this._response305 = undefined;
      this._response306 = undefined;
      this._response307 = undefined;
      this._response3Xx = undefined;
      this._response400 = undefined;
      this._response401 = undefined;
      this._response402 = undefined;
      this._response403 = undefined;
      this._response404 = undefined;
      this._response405 = undefined;
      this._response406 = undefined;
      this._response407 = undefined;
      this._response408 = undefined;
      this._response409 = undefined;
      this._response410 = undefined;
      this._response411 = undefined;
      this._response412 = undefined;
      this._response413 = undefined;
      this._response414 = undefined;
      this._response415 = undefined;
      this._response416 = undefined;
      this._response417 = undefined;
      this._response418 = undefined;
      this._response422 = undefined;
      this._response423 = undefined;
      this._response424 = undefined;
      this._response425 = undefined;
      this._response426 = undefined;
      this._response449 = undefined;
      this._response450 = undefined;
      this._response4Xx = undefined;
      this._response500 = undefined;
      this._response501 = undefined;
      this._response502 = undefined;
      this._response503 = undefined;
      this._response504 = undefined;
      this._response505 = undefined;
      this._response506 = undefined;
      this._response507 = undefined;
      this._response508 = undefined;
      this._response509 = undefined;
      this._response510 = undefined;
      this._response5Xx = undefined;
      this._response6Xx = undefined;
      this._responseHttp2 = undefined;
      this._responseHttp3 = undefined;
      this._responseUnknown = undefined;
      this._rspChunk = undefined;
      this._rspContentLen = undefined;
      this._rspSz16K = undefined;
      this._rspSz1K = undefined;
      this._rspSz256K = undefined;
      this._rspSz2K = undefined;
      this._rspSz32K = undefined;
      this._rspSz4K = undefined;
      this._rspSz64K = undefined;
      this._rspSz8K = undefined;
      this._rspSzGt256K = undefined;
      this._serverResel = undefined;
      this._serverRst = undefined;
      this._snatFail = undefined;
      this._svrPremClose = undefined;
      this._svrselFail = undefined;
      this._totalProxy = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cacheRsp = value.cacheRsp;
      this._chunkSz1K = value.chunkSz1K;
      this._chunkSz2K = value.chunkSz2K;
      this._chunkSz4K = value.chunkSz4K;
      this._chunkSz512 = value.chunkSz512;
      this._chunkSzGt4K = value.chunkSzGt4K;
      this._clientRst = value.clientRst;
      this._closeOnDdos = value.closeOnDdos;
      this._compressionAfter = value.compressionAfter;
      this._compressionAfterBr = value.compressionAfterBr;
      this._compressionAfterTotal = value.compressionAfterTotal;
      this._compressionBefore = value.compressionBefore;
      this._compressionBeforeBr = value.compressionBeforeBr;
      this._compressionBeforeTotal = value.compressionBeforeTotal;
      this._connectReq = value.connectReq;
      this._currProxy = value.currProxy;
      this._decompressionAfter = value.decompressionAfter;
      this._decompressionAfterBr = value.decompressionAfterBr;
      this._decompressionAfterTotal = value.decompressionAfterTotal;
      this._decompressionBefore = value.decompressionBefore;
      this._decompressionBeforeBr = value.decompressionBeforeBr;
      this._decompressionBeforeTotal = value.decompressionBeforeTotal;
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
      this._fwdreqFail = value.fwdreqFail;
      this._fwdreqdataFail = value.fwdreqdataFail;
      this._newSvrconn = value.newSvrconn;
      this._noproxy = value.noproxy;
      this._notuple = value.notuple;
      this._parsereqFail = value.parsereqFail;
      this._req = value.req;
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
      this._reqEnterSsli = value.reqEnterSsli;
      this._reqGet = value.reqGet;
      this._reqHead = value.reqHead;
      this._reqHttp2 = value.reqHttp2;
      this._reqHttp3 = value.reqHttp3;
      this._reqOfo = value.reqOfo;
      this._reqOptions = value.reqOptions;
      this._reqOver5S = value.reqOver5S;
      this._reqOverLimit = value.reqOverLimit;
      this._reqPost = value.reqPost;
      this._reqPut = value.reqPut;
      this._reqRateOverLimit = value.reqRateOverLimit;
      this._reqRetran = value.reqRetran;
      this._reqSucc = value.reqSucc;
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
      this._response100 = value.response100;
      this._response101 = value.response101;
      this._response102 = value.response102;
      this._response1Xx = value.response1Xx;
      this._response200 = value.response200;
      this._response201 = value.response201;
      this._response202 = value.response202;
      this._response203 = value.response203;
      this._response204 = value.response204;
      this._response205 = value.response205;
      this._response206 = value.response206;
      this._response207 = value.response207;
      this._response2Xx = value.response2Xx;
      this._response300 = value.response300;
      this._response301 = value.response301;
      this._response302 = value.response302;
      this._response303 = value.response303;
      this._response304 = value.response304;
      this._response305 = value.response305;
      this._response306 = value.response306;
      this._response307 = value.response307;
      this._response3Xx = value.response3Xx;
      this._response400 = value.response400;
      this._response401 = value.response401;
      this._response402 = value.response402;
      this._response403 = value.response403;
      this._response404 = value.response404;
      this._response405 = value.response405;
      this._response406 = value.response406;
      this._response407 = value.response407;
      this._response408 = value.response408;
      this._response409 = value.response409;
      this._response410 = value.response410;
      this._response411 = value.response411;
      this._response412 = value.response412;
      this._response413 = value.response413;
      this._response414 = value.response414;
      this._response415 = value.response415;
      this._response416 = value.response416;
      this._response417 = value.response417;
      this._response418 = value.response418;
      this._response422 = value.response422;
      this._response423 = value.response423;
      this._response424 = value.response424;
      this._response425 = value.response425;
      this._response426 = value.response426;
      this._response449 = value.response449;
      this._response450 = value.response450;
      this._response4Xx = value.response4Xx;
      this._response500 = value.response500;
      this._response501 = value.response501;
      this._response502 = value.response502;
      this._response503 = value.response503;
      this._response504 = value.response504;
      this._response505 = value.response505;
      this._response506 = value.response506;
      this._response507 = value.response507;
      this._response508 = value.response508;
      this._response509 = value.response509;
      this._response510 = value.response510;
      this._response5Xx = value.response5Xx;
      this._response6Xx = value.response6Xx;
      this._responseHttp2 = value.responseHttp2;
      this._responseHttp3 = value.responseHttp3;
      this._responseUnknown = value.responseUnknown;
      this._rspChunk = value.rspChunk;
      this._rspContentLen = value.rspContentLen;
      this._rspSz16K = value.rspSz16K;
      this._rspSz1K = value.rspSz1K;
      this._rspSz256K = value.rspSz256K;
      this._rspSz2K = value.rspSz2K;
      this._rspSz32K = value.rspSz32K;
      this._rspSz4K = value.rspSz4K;
      this._rspSz64K = value.rspSz64K;
      this._rspSz8K = value.rspSz8K;
      this._rspSzGt256K = value.rspSzGt256K;
      this._serverResel = value.serverResel;
      this._serverRst = value.serverRst;
      this._snatFail = value.snatFail;
      this._svrPremClose = value.svrPremClose;
      this._svrselFail = value.svrselFail;
      this._totalProxy = value.totalProxy;
    }
  }

  // cache_rsp - computed: false, optional: true, required: false
  private _cacheRsp?: number; 
  public get cacheRsp() {
    return this.getNumberAttribute('cache_rsp');
  }
  public set cacheRsp(value: number) {
    this._cacheRsp = value;
  }
  public resetCacheRsp() {
    this._cacheRsp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheRspInput() {
    return this._cacheRsp;
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

  // client_rst - computed: false, optional: true, required: false
  private _clientRst?: number; 
  public get clientRst() {
    return this.getNumberAttribute('client_rst');
  }
  public set clientRst(value: number) {
    this._clientRst = value;
  }
  public resetClientRst() {
    this._clientRst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientRstInput() {
    return this._clientRst;
  }

  // close_on_ddos - computed: false, optional: true, required: false
  private _closeOnDdos?: number; 
  public get closeOnDdos() {
    return this.getNumberAttribute('close_on_ddos');
  }
  public set closeOnDdos(value: number) {
    this._closeOnDdos = value;
  }
  public resetCloseOnDdos() {
    this._closeOnDdos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get closeOnDdosInput() {
    return this._closeOnDdos;
  }

  // compression_after - computed: false, optional: true, required: false
  private _compressionAfter?: number; 
  public get compressionAfter() {
    return this.getNumberAttribute('compression_after');
  }
  public set compressionAfter(value: number) {
    this._compressionAfter = value;
  }
  public resetCompressionAfter() {
    this._compressionAfter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionAfterInput() {
    return this._compressionAfter;
  }

  // compression_after_br - computed: false, optional: true, required: false
  private _compressionAfterBr?: number; 
  public get compressionAfterBr() {
    return this.getNumberAttribute('compression_after_br');
  }
  public set compressionAfterBr(value: number) {
    this._compressionAfterBr = value;
  }
  public resetCompressionAfterBr() {
    this._compressionAfterBr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionAfterBrInput() {
    return this._compressionAfterBr;
  }

  // compression_after_total - computed: false, optional: true, required: false
  private _compressionAfterTotal?: number; 
  public get compressionAfterTotal() {
    return this.getNumberAttribute('compression_after_total');
  }
  public set compressionAfterTotal(value: number) {
    this._compressionAfterTotal = value;
  }
  public resetCompressionAfterTotal() {
    this._compressionAfterTotal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionAfterTotalInput() {
    return this._compressionAfterTotal;
  }

  // compression_before - computed: false, optional: true, required: false
  private _compressionBefore?: number; 
  public get compressionBefore() {
    return this.getNumberAttribute('compression_before');
  }
  public set compressionBefore(value: number) {
    this._compressionBefore = value;
  }
  public resetCompressionBefore() {
    this._compressionBefore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionBeforeInput() {
    return this._compressionBefore;
  }

  // compression_before_br - computed: false, optional: true, required: false
  private _compressionBeforeBr?: number; 
  public get compressionBeforeBr() {
    return this.getNumberAttribute('compression_before_br');
  }
  public set compressionBeforeBr(value: number) {
    this._compressionBeforeBr = value;
  }
  public resetCompressionBeforeBr() {
    this._compressionBeforeBr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionBeforeBrInput() {
    return this._compressionBeforeBr;
  }

  // compression_before_total - computed: false, optional: true, required: false
  private _compressionBeforeTotal?: number; 
  public get compressionBeforeTotal() {
    return this.getNumberAttribute('compression_before_total');
  }
  public set compressionBeforeTotal(value: number) {
    this._compressionBeforeTotal = value;
  }
  public resetCompressionBeforeTotal() {
    this._compressionBeforeTotal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionBeforeTotalInput() {
    return this._compressionBeforeTotal;
  }

  // connect_req - computed: false, optional: true, required: false
  private _connectReq?: number; 
  public get connectReq() {
    return this.getNumberAttribute('connect_req');
  }
  public set connectReq(value: number) {
    this._connectReq = value;
  }
  public resetConnectReq() {
    this._connectReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectReqInput() {
    return this._connectReq;
  }

  // curr_proxy - computed: false, optional: true, required: false
  private _currProxy?: number; 
  public get currProxy() {
    return this.getNumberAttribute('curr_proxy');
  }
  public set currProxy(value: number) {
    this._currProxy = value;
  }
  public resetCurrProxy() {
    this._currProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currProxyInput() {
    return this._currProxy;
  }

  // decompression_after - computed: false, optional: true, required: false
  private _decompressionAfter?: number; 
  public get decompressionAfter() {
    return this.getNumberAttribute('decompression_after');
  }
  public set decompressionAfter(value: number) {
    this._decompressionAfter = value;
  }
  public resetDecompressionAfter() {
    this._decompressionAfter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decompressionAfterInput() {
    return this._decompressionAfter;
  }

  // decompression_after_br - computed: false, optional: true, required: false
  private _decompressionAfterBr?: number; 
  public get decompressionAfterBr() {
    return this.getNumberAttribute('decompression_after_br');
  }
  public set decompressionAfterBr(value: number) {
    this._decompressionAfterBr = value;
  }
  public resetDecompressionAfterBr() {
    this._decompressionAfterBr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decompressionAfterBrInput() {
    return this._decompressionAfterBr;
  }

  // decompression_after_total - computed: false, optional: true, required: false
  private _decompressionAfterTotal?: number; 
  public get decompressionAfterTotal() {
    return this.getNumberAttribute('decompression_after_total');
  }
  public set decompressionAfterTotal(value: number) {
    this._decompressionAfterTotal = value;
  }
  public resetDecompressionAfterTotal() {
    this._decompressionAfterTotal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decompressionAfterTotalInput() {
    return this._decompressionAfterTotal;
  }

  // decompression_before - computed: false, optional: true, required: false
  private _decompressionBefore?: number; 
  public get decompressionBefore() {
    return this.getNumberAttribute('decompression_before');
  }
  public set decompressionBefore(value: number) {
    this._decompressionBefore = value;
  }
  public resetDecompressionBefore() {
    this._decompressionBefore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decompressionBeforeInput() {
    return this._decompressionBefore;
  }

  // decompression_before_br - computed: false, optional: true, required: false
  private _decompressionBeforeBr?: number; 
  public get decompressionBeforeBr() {
    return this.getNumberAttribute('decompression_before_br');
  }
  public set decompressionBeforeBr(value: number) {
    this._decompressionBeforeBr = value;
  }
  public resetDecompressionBeforeBr() {
    this._decompressionBeforeBr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decompressionBeforeBrInput() {
    return this._decompressionBeforeBr;
  }

  // decompression_before_total - computed: false, optional: true, required: false
  private _decompressionBeforeTotal?: number; 
  public get decompressionBeforeTotal() {
    return this.getNumberAttribute('decompression_before_total');
  }
  public set decompressionBeforeTotal(value: number) {
    this._decompressionBeforeTotal = value;
  }
  public resetDecompressionBeforeTotal() {
    this._decompressionBeforeTotal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decompressionBeforeTotalInput() {
    return this._decompressionBeforeTotal;
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

  // fwdreq_fail - computed: false, optional: true, required: false
  private _fwdreqFail?: number; 
  public get fwdreqFail() {
    return this.getNumberAttribute('fwdreq_fail');
  }
  public set fwdreqFail(value: number) {
    this._fwdreqFail = value;
  }
  public resetFwdreqFail() {
    this._fwdreqFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwdreqFailInput() {
    return this._fwdreqFail;
  }

  // fwdreqdata_fail - computed: false, optional: true, required: false
  private _fwdreqdataFail?: number; 
  public get fwdreqdataFail() {
    return this.getNumberAttribute('fwdreqdata_fail');
  }
  public set fwdreqdataFail(value: number) {
    this._fwdreqdataFail = value;
  }
  public resetFwdreqdataFail() {
    this._fwdreqdataFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwdreqdataFailInput() {
    return this._fwdreqdataFail;
  }

  // new_svrconn - computed: false, optional: true, required: false
  private _newSvrconn?: number; 
  public get newSvrconn() {
    return this.getNumberAttribute('new_svrconn');
  }
  public set newSvrconn(value: number) {
    this._newSvrconn = value;
  }
  public resetNewSvrconn() {
    this._newSvrconn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newSvrconnInput() {
    return this._newSvrconn;
  }

  // noproxy - computed: false, optional: true, required: false
  private _noproxy?: number; 
  public get noproxy() {
    return this.getNumberAttribute('noproxy');
  }
  public set noproxy(value: number) {
    this._noproxy = value;
  }
  public resetNoproxy() {
    this._noproxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noproxyInput() {
    return this._noproxy;
  }

  // notuple - computed: false, optional: true, required: false
  private _notuple?: number; 
  public get notuple() {
    return this.getNumberAttribute('notuple');
  }
  public set notuple(value: number) {
    this._notuple = value;
  }
  public resetNotuple() {
    this._notuple = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notupleInput() {
    return this._notuple;
  }

  // parsereq_fail - computed: false, optional: true, required: false
  private _parsereqFail?: number; 
  public get parsereqFail() {
    return this.getNumberAttribute('parsereq_fail');
  }
  public set parsereqFail(value: number) {
    this._parsereqFail = value;
  }
  public resetParsereqFail() {
    this._parsereqFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parsereqFailInput() {
    return this._parsereqFail;
  }

  // req - computed: false, optional: true, required: false
  private _req?: number; 
  public get req() {
    return this.getNumberAttribute('req');
  }
  public set req(value: number) {
    this._req = value;
  }
  public resetReq() {
    this._req = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqInput() {
    return this._req;
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

  // req_enter_ssli - computed: false, optional: true, required: false
  private _reqEnterSsli?: number; 
  public get reqEnterSsli() {
    return this.getNumberAttribute('req_enter_ssli');
  }
  public set reqEnterSsli(value: number) {
    this._reqEnterSsli = value;
  }
  public resetReqEnterSsli() {
    this._reqEnterSsli = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqEnterSsliInput() {
    return this._reqEnterSsli;
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

  // req_http2 - computed: false, optional: true, required: false
  private _reqHttp2?: number; 
  public get reqHttp2() {
    return this.getNumberAttribute('req_http2');
  }
  public set reqHttp2(value: number) {
    this._reqHttp2 = value;
  }
  public resetReqHttp2() {
    this._reqHttp2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqHttp2Input() {
    return this._reqHttp2;
  }

  // req_http3 - computed: false, optional: true, required: false
  private _reqHttp3?: number; 
  public get reqHttp3() {
    return this.getNumberAttribute('req_http3');
  }
  public set reqHttp3(value: number) {
    this._reqHttp3 = value;
  }
  public resetReqHttp3() {
    this._reqHttp3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqHttp3Input() {
    return this._reqHttp3;
  }

  // req_ofo - computed: false, optional: true, required: false
  private _reqOfo?: number; 
  public get reqOfo() {
    return this.getNumberAttribute('req_ofo');
  }
  public set reqOfo(value: number) {
    this._reqOfo = value;
  }
  public resetReqOfo() {
    this._reqOfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqOfoInput() {
    return this._reqOfo;
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

  // req_over_limit - computed: false, optional: true, required: false
  private _reqOverLimit?: number; 
  public get reqOverLimit() {
    return this.getNumberAttribute('req_over_limit');
  }
  public set reqOverLimit(value: number) {
    this._reqOverLimit = value;
  }
  public resetReqOverLimit() {
    this._reqOverLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqOverLimitInput() {
    return this._reqOverLimit;
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

  // req_rate_over_limit - computed: false, optional: true, required: false
  private _reqRateOverLimit?: number; 
  public get reqRateOverLimit() {
    return this.getNumberAttribute('req_rate_over_limit');
  }
  public set reqRateOverLimit(value: number) {
    this._reqRateOverLimit = value;
  }
  public resetReqRateOverLimit() {
    this._reqRateOverLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqRateOverLimitInput() {
    return this._reqRateOverLimit;
  }

  // req_retran - computed: false, optional: true, required: false
  private _reqRetran?: number; 
  public get reqRetran() {
    return this.getNumberAttribute('req_retran');
  }
  public set reqRetran(value: number) {
    this._reqRetran = value;
  }
  public resetReqRetran() {
    this._reqRetran = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqRetranInput() {
    return this._reqRetran;
  }

  // req_succ - computed: false, optional: true, required: false
  private _reqSucc?: number; 
  public get reqSucc() {
    return this.getNumberAttribute('req_succ');
  }
  public set reqSucc(value: number) {
    this._reqSucc = value;
  }
  public resetReqSucc() {
    this._reqSucc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqSuccInput() {
    return this._reqSucc;
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

  // response_100 - computed: false, optional: true, required: false
  private _response100?: number; 
  public get response100() {
    return this.getNumberAttribute('response_100');
  }
  public set response100(value: number) {
    this._response100 = value;
  }
  public resetResponse100() {
    this._response100 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get response100Input() {
    return this._response100;
  }

  // response_101 - computed: false, optional: true, required: false
  private _response101?: number; 
  public get response101() {
    return this.getNumberAttribute('response_101');
  }
  public set response101(value: number) {
    this._response101 = value;
  }
  public resetResponse101() {
    this._response101 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get response101Input() {
    return this._response101;
  }

  // response_102 - computed: false, optional: true, required: false
  private _response102?: number; 
  public get response102() {
    return this.getNumberAttribute('response_102');
  }
  public set response102(value: number) {
    this._response102 = value;
  }
  public resetResponse102() {
    this._response102 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get response102Input() {
    return this._response102;
  }

  // response_1xx - computed: false, optional: true, required: false
  private _response1Xx?: number; 
  public get response1Xx() {
    return this.getNumberAttribute('response_1xx');
  }
  public set response1Xx(value: number) {
    this._response1Xx = value;
  }
  public resetResponse1Xx() {
    this._response1Xx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get response1XxInput() {
    return this._response1Xx;
  }

  // response_200 - computed: false, optional: true, required: false
  private _response200?: number; 
  public get response200() {
    return this.getNumberAttribute('response_200');
  }
  public set response200(value: number) {
    this._response200 = value;
  }
  public resetResponse200() {
    this._response200 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get response200Input() {
    return this._response200;
  }

  // response_201 - computed: false, optional: true, required: false
  private _response201?: number; 
  public get response201() {
    return this.getNumberAttribute('response_201');
  }
  public set response201(value: number) {
    this._response201 = value;
  }
  public resetResponse201() {
    this._response201 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get response201Input() {
    return this._response201;
  }

  // response_202 - computed: false, optional: true, required: false
  private _response202?: number; 
  public get response202() {
    return this.getNumberAttribute('response_202');
  }
  public set response202(value: number) {
    this._response202 = value;
  }
  public resetResponse202() {
    this._response202 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get response202Input() {
    return this._response202;
  }

  // response_203 - computed: false, optional: true, required: false
  private _response203?: number; 
  public get response203() {
    return this.getNumberAttribute('response_203');
  }
  public set response203(value: number) {
    this._response203 = value;
  }
  public resetResponse203() {
    this._response203 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get response203Input() {
    return this._response203;
  }

  // response_204 - computed: false, optional: true, required: false
  private _response204?: number; 
  public get response204() {
    return this.getNumberAttribute('response_204');
  }
  public set response204(value: number) {
    this._response204 = value;
  }
  public resetResponse204() {
    this._response204 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get response204Input() {
    return this._response204;
  }

  // response_205 - computed: false, optional: true, required: false
  private _response205?: number; 
  public get response205() {
    return this.getNumberAttribute('response_205');
  }
  public set response205(value: number) {
    this._response205 = value;
  }
  public resetResponse205() {
    this._response205 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get response205Input() {
    return this._response205;
  }

  // response_206 - computed: false, optional: true, required: false
  private _response206?: number; 
  public get response206() {
    return this.getNumberAttribute('response_206');
  }
  public set response206(value: number) {
    this._response206 = value;
  }
  public resetResponse206() {
    this._response206 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get response206Input() {
    return this._response206;
  }

  // response_207 - computed: false, optional: true, required: false
  private _response207?: number; 
  public get response207() {
    return this.getNumberAttribute('response_207');
  }
  public set response207(value: number) {
    this._response207 = value;
  }
  public resetResponse207() {
    this._response207 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get response207Input() {
    return this._response207;
  }

  // response_2xx - computed: false, optional: true, required: false
  private _response2Xx?: number; 
  public get response2Xx() {
    return this.getNumberAttribute('response_2xx');
  }
  public set response2Xx(value: number) {
    this._response2Xx = value;
  }
  public resetResponse2Xx() {
    this._response2Xx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get response2XxInput() {
    return this._response2Xx;
  }

  // response_300 - computed: false, optional: true, required: false
  private _response300?: number; 
  public get response300() {
    return this.getNumberAttribute('response_300');
  }
  public set response300(value: number) {
    this._response300 = value;
  }
  public resetResponse300() {
    this._response300 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get response300Input() {
    return this._response300;
  }

  // response_301 - computed: false, optional: true, required: false
  private _response301?: number; 
  public get response301() {
    return this.getNumberAttribute('response_301');
  }
  public set response301(value: number) {
    this._response301 = value;
  }
  public resetResponse301() {
    this._response301 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get response301Input() {
    return this._response301;
  }

  // response_302 - computed: false, optional: true, required: false
  private _response302?: number; 
  public get response302() {
    return this.getNumberAttribute('response_302');
  }
  public set response302(value: number) {
    this._response302 = value;
  }
  public resetResponse302() {
    this._response302 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get response302Input() {
    return this._response302;
  }

  // response_303 - computed: false, optional: true, required: false
  private _response303?: number; 
  public get response303() {
    return this.getNumberAttribute('response_303');
  }
  public set response303(value: number) {
    this._response303 = value;
  }
  public resetResponse303() {
    this._response303 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get response303Input() {
    return this._response303;
  }

  // response_304 - computed: false, optional: true, required: false
  private _response304?: number; 
  public get response304() {
    return this.getNumberAttribute('response_304');
  }
  public set response304(value: number) {
    this._response304 = value;
  }
  public resetResponse304() {
    this._response304 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get response304Input() {
    return this._response304;
  }

  // response_305 - computed: false, optional: true, required: false
  private _response305?: number; 
  public get response305() {
    return this.getNumberAttribute('response_305');
  }
  public set response305(value: number) {
    this._response305 = value;
  }
  public resetResponse305() {
    this._response305 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get response305Input() {
    return this._response305;
  }

  // response_306 - computed: false, optional: true, required: false
  private _response306?: number; 
  public get response306() {
    return this.getNumberAttribute('response_306');
  }
  public set response306(value: number) {
    this._response306 = value;
  }
  public resetResponse306() {
    this._response306 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get response306Input() {
    return this._response306;
  }

  // response_307 - computed: false, optional: true, required: false
  private _response307?: number; 
  public get response307() {
    return this.getNumberAttribute('response_307');
  }
  public set response307(value: number) {
    this._response307 = value;
  }
  public resetResponse307() {
    this._response307 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get response307Input() {
    return this._response307;
  }

  // response_3xx - computed: false, optional: true, required: false
  private _response3Xx?: number; 
  public get response3Xx() {
    return this.getNumberAttribute('response_3xx');
  }
  public set response3Xx(value: number) {
    this._response3Xx = value;
  }
  public resetResponse3Xx() {
    this._response3Xx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get response3XxInput() {
    return this._response3Xx;
  }

  // response_400 - computed: false, optional: true, required: false
  private _response400?: number; 
  public get response400() {
    return this.getNumberAttribute('response_400');
  }
  public set response400(value: number) {
    this._response400 = value;
  }
  public resetResponse400() {
    this._response400 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get response400Input() {
    return this._response400;
  }

  // response_401 - computed: false, optional: true, required: false
  private _response401?: number; 
  public get response401() {
    return this.getNumberAttribute('response_401');
  }
  public set response401(value: number) {
    this._response401 = value;
  }
  public resetResponse401() {
    this._response401 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get response401Input() {
    return this._response401;
  }

  // response_402 - computed: false, optional: true, required: false
  private _response402?: number; 
  public get response402() {
    return this.getNumberAttribute('response_402');
  }
  public set response402(value: number) {
    this._response402 = value;
  }
  public resetResponse402() {
    this._response402 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get response402Input() {
    return this._response402;
  }

  // response_403 - computed: false, optional: true, required: false
  private _response403?: number; 
  public get response403() {
    return this.getNumberAttribute('response_403');
  }
  public set response403(value: number) {
    this._response403 = value;
  }
  public resetResponse403() {
    this._response403 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get response403Input() {
    return this._response403;
  }

  // response_404 - computed: false, optional: true, required: false
  private _response404?: number; 
  public get response404() {
    return this.getNumberAttribute('response_404');
  }
  public set response404(value: number) {
    this._response404 = value;
  }
  public resetResponse404() {
    this._response404 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get response404Input() {
    return this._response404;
  }

  // response_405 - computed: false, optional: true, required: false
  private _response405?: number; 
  public get response405() {
    return this.getNumberAttribute('response_405');
  }
  public set response405(value: number) {
    this._response405 = value;
  }
  public resetResponse405() {
    this._response405 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get response405Input() {
    return this._response405;
  }

  // response_406 - computed: false, optional: true, required: false
  private _response406?: number; 
  public get response406() {
    return this.getNumberAttribute('response_406');
  }
  public set response406(value: number) {
    this._response406 = value;
  }
  public resetResponse406() {
    this._response406 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get response406Input() {
    return this._response406;
  }

  // response_407 - computed: false, optional: true, required: false
  private _response407?: number; 
  public get response407() {
    return this.getNumberAttribute('response_407');
  }
  public set response407(value: number) {
    this._response407 = value;
  }
  public resetResponse407() {
    this._response407 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get response407Input() {
    return this._response407;
  }

  // response_408 - computed: false, optional: true, required: false
  private _response408?: number; 
  public get response408() {
    return this.getNumberAttribute('response_408');
  }
  public set response408(value: number) {
    this._response408 = value;
  }
  public resetResponse408() {
    this._response408 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get response408Input() {
    return this._response408;
  }

  // response_409 - computed: false, optional: true, required: false
  private _response409?: number; 
  public get response409() {
    return this.getNumberAttribute('response_409');
  }
  public set response409(value: number) {
    this._response409 = value;
  }
  public resetResponse409() {
    this._response409 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get response409Input() {
    return this._response409;
  }

  // response_410 - computed: false, optional: true, required: false
  private _response410?: number; 
  public get response410() {
    return this.getNumberAttribute('response_410');
  }
  public set response410(value: number) {
    this._response410 = value;
  }
  public resetResponse410() {
    this._response410 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get response410Input() {
    return this._response410;
  }

  // response_411 - computed: false, optional: true, required: false
  private _response411?: number; 
  public get response411() {
    return this.getNumberAttribute('response_411');
  }
  public set response411(value: number) {
    this._response411 = value;
  }
  public resetResponse411() {
    this._response411 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get response411Input() {
    return this._response411;
  }

  // response_412 - computed: false, optional: true, required: false
  private _response412?: number; 
  public get response412() {
    return this.getNumberAttribute('response_412');
  }
  public set response412(value: number) {
    this._response412 = value;
  }
  public resetResponse412() {
    this._response412 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get response412Input() {
    return this._response412;
  }

  // response_413 - computed: false, optional: true, required: false
  private _response413?: number; 
  public get response413() {
    return this.getNumberAttribute('response_413');
  }
  public set response413(value: number) {
    this._response413 = value;
  }
  public resetResponse413() {
    this._response413 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get response413Input() {
    return this._response413;
  }

  // response_414 - computed: false, optional: true, required: false
  private _response414?: number; 
  public get response414() {
    return this.getNumberAttribute('response_414');
  }
  public set response414(value: number) {
    this._response414 = value;
  }
  public resetResponse414() {
    this._response414 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get response414Input() {
    return this._response414;
  }

  // response_415 - computed: false, optional: true, required: false
  private _response415?: number; 
  public get response415() {
    return this.getNumberAttribute('response_415');
  }
  public set response415(value: number) {
    this._response415 = value;
  }
  public resetResponse415() {
    this._response415 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get response415Input() {
    return this._response415;
  }

  // response_416 - computed: false, optional: true, required: false
  private _response416?: number; 
  public get response416() {
    return this.getNumberAttribute('response_416');
  }
  public set response416(value: number) {
    this._response416 = value;
  }
  public resetResponse416() {
    this._response416 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get response416Input() {
    return this._response416;
  }

  // response_417 - computed: false, optional: true, required: false
  private _response417?: number; 
  public get response417() {
    return this.getNumberAttribute('response_417');
  }
  public set response417(value: number) {
    this._response417 = value;
  }
  public resetResponse417() {
    this._response417 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get response417Input() {
    return this._response417;
  }

  // response_418 - computed: false, optional: true, required: false
  private _response418?: number; 
  public get response418() {
    return this.getNumberAttribute('response_418');
  }
  public set response418(value: number) {
    this._response418 = value;
  }
  public resetResponse418() {
    this._response418 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get response418Input() {
    return this._response418;
  }

  // response_422 - computed: false, optional: true, required: false
  private _response422?: number; 
  public get response422() {
    return this.getNumberAttribute('response_422');
  }
  public set response422(value: number) {
    this._response422 = value;
  }
  public resetResponse422() {
    this._response422 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get response422Input() {
    return this._response422;
  }

  // response_423 - computed: false, optional: true, required: false
  private _response423?: number; 
  public get response423() {
    return this.getNumberAttribute('response_423');
  }
  public set response423(value: number) {
    this._response423 = value;
  }
  public resetResponse423() {
    this._response423 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get response423Input() {
    return this._response423;
  }

  // response_424 - computed: false, optional: true, required: false
  private _response424?: number; 
  public get response424() {
    return this.getNumberAttribute('response_424');
  }
  public set response424(value: number) {
    this._response424 = value;
  }
  public resetResponse424() {
    this._response424 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get response424Input() {
    return this._response424;
  }

  // response_425 - computed: false, optional: true, required: false
  private _response425?: number; 
  public get response425() {
    return this.getNumberAttribute('response_425');
  }
  public set response425(value: number) {
    this._response425 = value;
  }
  public resetResponse425() {
    this._response425 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get response425Input() {
    return this._response425;
  }

  // response_426 - computed: false, optional: true, required: false
  private _response426?: number; 
  public get response426() {
    return this.getNumberAttribute('response_426');
  }
  public set response426(value: number) {
    this._response426 = value;
  }
  public resetResponse426() {
    this._response426 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get response426Input() {
    return this._response426;
  }

  // response_449 - computed: false, optional: true, required: false
  private _response449?: number; 
  public get response449() {
    return this.getNumberAttribute('response_449');
  }
  public set response449(value: number) {
    this._response449 = value;
  }
  public resetResponse449() {
    this._response449 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get response449Input() {
    return this._response449;
  }

  // response_450 - computed: false, optional: true, required: false
  private _response450?: number; 
  public get response450() {
    return this.getNumberAttribute('response_450');
  }
  public set response450(value: number) {
    this._response450 = value;
  }
  public resetResponse450() {
    this._response450 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get response450Input() {
    return this._response450;
  }

  // response_4xx - computed: false, optional: true, required: false
  private _response4Xx?: number; 
  public get response4Xx() {
    return this.getNumberAttribute('response_4xx');
  }
  public set response4Xx(value: number) {
    this._response4Xx = value;
  }
  public resetResponse4Xx() {
    this._response4Xx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get response4XxInput() {
    return this._response4Xx;
  }

  // response_500 - computed: false, optional: true, required: false
  private _response500?: number; 
  public get response500() {
    return this.getNumberAttribute('response_500');
  }
  public set response500(value: number) {
    this._response500 = value;
  }
  public resetResponse500() {
    this._response500 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get response500Input() {
    return this._response500;
  }

  // response_501 - computed: false, optional: true, required: false
  private _response501?: number; 
  public get response501() {
    return this.getNumberAttribute('response_501');
  }
  public set response501(value: number) {
    this._response501 = value;
  }
  public resetResponse501() {
    this._response501 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get response501Input() {
    return this._response501;
  }

  // response_502 - computed: false, optional: true, required: false
  private _response502?: number; 
  public get response502() {
    return this.getNumberAttribute('response_502');
  }
  public set response502(value: number) {
    this._response502 = value;
  }
  public resetResponse502() {
    this._response502 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get response502Input() {
    return this._response502;
  }

  // response_503 - computed: false, optional: true, required: false
  private _response503?: number; 
  public get response503() {
    return this.getNumberAttribute('response_503');
  }
  public set response503(value: number) {
    this._response503 = value;
  }
  public resetResponse503() {
    this._response503 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get response503Input() {
    return this._response503;
  }

  // response_504 - computed: false, optional: true, required: false
  private _response504?: number; 
  public get response504() {
    return this.getNumberAttribute('response_504');
  }
  public set response504(value: number) {
    this._response504 = value;
  }
  public resetResponse504() {
    this._response504 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get response504Input() {
    return this._response504;
  }

  // response_505 - computed: false, optional: true, required: false
  private _response505?: number; 
  public get response505() {
    return this.getNumberAttribute('response_505');
  }
  public set response505(value: number) {
    this._response505 = value;
  }
  public resetResponse505() {
    this._response505 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get response505Input() {
    return this._response505;
  }

  // response_506 - computed: false, optional: true, required: false
  private _response506?: number; 
  public get response506() {
    return this.getNumberAttribute('response_506');
  }
  public set response506(value: number) {
    this._response506 = value;
  }
  public resetResponse506() {
    this._response506 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get response506Input() {
    return this._response506;
  }

  // response_507 - computed: false, optional: true, required: false
  private _response507?: number; 
  public get response507() {
    return this.getNumberAttribute('response_507');
  }
  public set response507(value: number) {
    this._response507 = value;
  }
  public resetResponse507() {
    this._response507 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get response507Input() {
    return this._response507;
  }

  // response_508 - computed: false, optional: true, required: false
  private _response508?: number; 
  public get response508() {
    return this.getNumberAttribute('response_508');
  }
  public set response508(value: number) {
    this._response508 = value;
  }
  public resetResponse508() {
    this._response508 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get response508Input() {
    return this._response508;
  }

  // response_509 - computed: false, optional: true, required: false
  private _response509?: number; 
  public get response509() {
    return this.getNumberAttribute('response_509');
  }
  public set response509(value: number) {
    this._response509 = value;
  }
  public resetResponse509() {
    this._response509 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get response509Input() {
    return this._response509;
  }

  // response_510 - computed: false, optional: true, required: false
  private _response510?: number; 
  public get response510() {
    return this.getNumberAttribute('response_510');
  }
  public set response510(value: number) {
    this._response510 = value;
  }
  public resetResponse510() {
    this._response510 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get response510Input() {
    return this._response510;
  }

  // response_5xx - computed: false, optional: true, required: false
  private _response5Xx?: number; 
  public get response5Xx() {
    return this.getNumberAttribute('response_5xx');
  }
  public set response5Xx(value: number) {
    this._response5Xx = value;
  }
  public resetResponse5Xx() {
    this._response5Xx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get response5XxInput() {
    return this._response5Xx;
  }

  // response_6xx - computed: false, optional: true, required: false
  private _response6Xx?: number; 
  public get response6Xx() {
    return this.getNumberAttribute('response_6xx');
  }
  public set response6Xx(value: number) {
    this._response6Xx = value;
  }
  public resetResponse6Xx() {
    this._response6Xx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get response6XxInput() {
    return this._response6Xx;
  }

  // response_http2 - computed: false, optional: true, required: false
  private _responseHttp2?: number; 
  public get responseHttp2() {
    return this.getNumberAttribute('response_http2');
  }
  public set responseHttp2(value: number) {
    this._responseHttp2 = value;
  }
  public resetResponseHttp2() {
    this._responseHttp2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseHttp2Input() {
    return this._responseHttp2;
  }

  // response_http3 - computed: false, optional: true, required: false
  private _responseHttp3?: number; 
  public get responseHttp3() {
    return this.getNumberAttribute('response_http3');
  }
  public set responseHttp3(value: number) {
    this._responseHttp3 = value;
  }
  public resetResponseHttp3() {
    this._responseHttp3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseHttp3Input() {
    return this._responseHttp3;
  }

  // response_unknown - computed: false, optional: true, required: false
  private _responseUnknown?: number; 
  public get responseUnknown() {
    return this.getNumberAttribute('response_unknown');
  }
  public set responseUnknown(value: number) {
    this._responseUnknown = value;
  }
  public resetResponseUnknown() {
    this._responseUnknown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseUnknownInput() {
    return this._responseUnknown;
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

  // rsp_content_len - computed: false, optional: true, required: false
  private _rspContentLen?: number; 
  public get rspContentLen() {
    return this.getNumberAttribute('rsp_content_len');
  }
  public set rspContentLen(value: number) {
    this._rspContentLen = value;
  }
  public resetRspContentLen() {
    this._rspContentLen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rspContentLenInput() {
    return this._rspContentLen;
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

  // server_resel - computed: false, optional: true, required: false
  private _serverResel?: number; 
  public get serverResel() {
    return this.getNumberAttribute('server_resel');
  }
  public set serverResel(value: number) {
    this._serverResel = value;
  }
  public resetServerResel() {
    this._serverResel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverReselInput() {
    return this._serverResel;
  }

  // server_rst - computed: false, optional: true, required: false
  private _serverRst?: number; 
  public get serverRst() {
    return this.getNumberAttribute('server_rst');
  }
  public set serverRst(value: number) {
    this._serverRst = value;
  }
  public resetServerRst() {
    this._serverRst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverRstInput() {
    return this._serverRst;
  }

  // snat_fail - computed: false, optional: true, required: false
  private _snatFail?: number; 
  public get snatFail() {
    return this.getNumberAttribute('snat_fail');
  }
  public set snatFail(value: number) {
    this._snatFail = value;
  }
  public resetSnatFail() {
    this._snatFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snatFailInput() {
    return this._snatFail;
  }

  // svr_prem_close - computed: false, optional: true, required: false
  private _svrPremClose?: number; 
  public get svrPremClose() {
    return this.getNumberAttribute('svr_prem_close');
  }
  public set svrPremClose(value: number) {
    this._svrPremClose = value;
  }
  public resetSvrPremClose() {
    this._svrPremClose = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get svrPremCloseInput() {
    return this._svrPremClose;
  }

  // svrsel_fail - computed: false, optional: true, required: false
  private _svrselFail?: number; 
  public get svrselFail() {
    return this.getNumberAttribute('svrsel_fail');
  }
  public set svrselFail(value: number) {
    this._svrselFail = value;
  }
  public resetSvrselFail() {
    this._svrselFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get svrselFailInput() {
    return this._svrselFail;
  }

  // total_proxy - computed: false, optional: true, required: false
  private _totalProxy?: number; 
  public get totalProxy() {
    return this.getNumberAttribute('total_proxy');
  }
  public set totalProxy(value: number) {
    this._totalProxy = value;
  }
  public resetTotalProxy() {
    this._totalProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalProxyInput() {
    return this._totalProxy;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats thunder_slb_http_proxy_stats}
*/
export class DataThunderSlbHttpProxyStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_http_proxy_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSlbHttpProxyStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSlbHttpProxyStats to import
  * @param importFromId The id of the existing DataThunderSlbHttpProxyStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSlbHttpProxyStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_http_proxy_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_http_proxy_stats thunder_slb_http_proxy_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSlbHttpProxyStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSlbHttpProxyStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_http_proxy_stats',
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

  // stats - computed: false, optional: true, required: false
  private _stats = new DataThunderSlbHttpProxyStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderSlbHttpProxyStatsStats) {
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
      stats: dataThunderSlbHttpProxyStatsStatsToTerraform(this._stats.internalValue),
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
      stats: {
        value: dataThunderSlbHttpProxyStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSlbHttpProxyStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
