// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SlbTemplateHttpConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable allowed-method check (List of allowed HTTP methods)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http#allowed_methods SlbTemplateHttp#allowed_methods}
  */
  readonly allowedMethods?: string;
  /**
  * 'drop': Respond 400 directly;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http#allowed_methods_action SlbTemplateHttp#allowed_methods_action}
  */
  readonly allowedMethodsAction?: string;
  /**
  * Select service group for non-http traffic (Service Group Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http#bypass_sg SlbTemplateHttp#bypass_sg}
  */
  readonly bypassSg?: string;
  /**
  * Client session timeout if the next request is not received (timeout in seconds. 0 means disable, default is 0)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http#client_idle_timeout SlbTemplateHttp#client_idle_timeout}
  */
  readonly clientIdleTimeout?: number;
  /**
  * Replace the existing header
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http#client_ip_hdr_replace SlbTemplateHttp#client_ip_hdr_replace}
  */
  readonly clientIpHdrReplace?: number;
  /**
  * Replace the existing header
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http#client_port_hdr_replace SlbTemplateHttp#client_port_hdr_replace}
  */
  readonly clientPortHdrReplace?: number;
  /**
  * Auto-disable software compression on high cpu usage (Disable compression if cpu usage is above threshold. Default is off.)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http#compression_auto_disable_on_high_cpu SlbTemplateHttp#compression_auto_disable_on_high_cpu}
  */
  readonly compressionAutoDisableOnHighCpu?: number;
  /**
  * brotli compression level, default 1 (brotli compression level value, default is 1)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http#compression_br_level SlbTemplateHttp#compression_br_level}
  */
  readonly compressionBrLevel?: number;
  /**
  * brotli compression sliding window size, default 10 (brotli compression sliding window size in the form of log (i.e., 10 means 1k-16MB bytes))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http#compression_br_sliding_window_size SlbTemplateHttp#compression_br_sliding_window_size}
  */
  readonly compressionBrSlidingWindowSize?: number;
  /**
  * Enable Compression
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http#compression_enable SlbTemplateHttp#compression_enable}
  */
  readonly compressionEnable?: number;
  /**
  * Keep accept encoding
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http#compression_keep_accept_encoding SlbTemplateHttp#compression_keep_accept_encoding}
  */
  readonly compressionKeepAcceptEncoding?: number;
  /**
  * Enable Server Accept Encoding
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http#compression_keep_accept_encoding_enable SlbTemplateHttp#compression_keep_accept_encoding_enable}
  */
  readonly compressionKeepAcceptEncodingEnable?: number;
  /**
  * gzip compression level, default 1 (gzip compression level value, default is 1)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http#compression_level SlbTemplateHttp#compression_level}
  */
  readonly compressionLevel?: number;
  /**
  * Method Order (Order to decide which compression algorithm to be applied when multiple algorithms are acceptable)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http#compression_method_order SlbTemplateHttp#compression_method_order}
  */
  readonly compressionMethodOrder?: string;
  /**
  * Minimum Content Length (Minimum content length for compression in bytes. Default is 120.)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http#compression_minimum_content_length SlbTemplateHttp#compression_minimum_content_length}
  */
  readonly compressionMinimumContentLength?: number;
  /**
  * When REQ has Expect 100 and response is not 100, then wait for whole request to be sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http#cont_wait_for_req_complete100 SlbTemplateHttp#cont_wait_for_req_complete100}
  */
  readonly contWaitForReqComplete100?: number;
  /**
  * 'rfc6265': Follow rfc6265;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http#cookie_format SlbTemplateHttp#cookie_format}
  */
  readonly cookieFormat?: string;
  /**
  * 'none': none; 'lax': lax; 'strict': strict;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http#cookie_samesite SlbTemplateHttp#cookie_samesite}
  */
  readonly cookieSamesite?: string;
  /**
  * 'iso-8859-1': Use ISO-8859-1 as the default charset; 'utf-8': Use UTF-8 as the default charset; 'us-ascii': Use US-ASCII as the default charset;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http#default_charset SlbTemplateHttp#default_charset}
  */
  readonly defaultCharset?: string;
  /**
  * Enable disallowed-method check (List of disallowed HTTP methods)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http#disallowed_methods SlbTemplateHttp#disallowed_methods}
  */
  readonly disallowedMethods?: string;
  /**
  * 'drop': Respond 400 directly;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http#disallowed_methods_action SlbTemplateHttp#disallowed_methods_action}
  */
  readonly disallowedMethodsAction?: string;
  /**
  * Failover to this URL (Failover URL Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http#failover_url SlbTemplateHttp#failover_url}
  */
  readonly failoverUrl?: string;
  /**
  * Limit the number of CONTINUATION, PING, PRIORITY, RESET, SETTINGS and empty frames in one HTTP2 connection, default 10000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http#frame_limit SlbTemplateHttp#frame_limit}
  */
  readonly frameLimit?: number;
  /**
  * Set max-concurrent-stream = 1 when the client side is HTTP2 and no source-nat configuration is under vport
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http#http2_client_no_snat SlbTemplateHttp#http2_client_no_snat}
  */
  readonly http2ClientNoSnat?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http#id SlbTemplateHttp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Insert Client IP address into HTTP header
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http#insert_client_ip SlbTemplateHttp#insert_client_ip}
  */
  readonly insertClientIp?: number;
  /**
  * HTTP Header Name for inserting Client IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http#insert_client_ip_header_name SlbTemplateHttp#insert_client_ip_header_name}
  */
  readonly insertClientIpHeaderName?: string;
  /**
  * Insert Client Port address into HTTP header
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http#insert_client_port SlbTemplateHttp#insert_client_port}
  */
  readonly insertClientPort?: number;
  /**
  * HTTP Header Name for inserting Client Port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http#insert_client_port_header_name SlbTemplateHttp#insert_client_port_header_name}
  */
  readonly insertClientPortHeaderName?: string;
  /**
  * Keep client alive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http#keep_client_alive SlbTemplateHttp#keep_client_alive}
  */
  readonly keepClientAlive?: number;
  /**
  * log when HTTP request retry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http#log_retry SlbTemplateHttp#log_retry}
  */
  readonly logRetry?: number;
  /**
  * (http2 only) Max concurrent streams, default 50
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http#max_concurrent_streams SlbTemplateHttp#max_concurrent_streams}
  */
  readonly maxConcurrentStreams?: number;
  /**
  * HTTP Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http#name SlbTemplateHttp#name}
  */
  readonly name: string;
  /**
  * Bypass non-http traffic instead of dropping
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http#non_http_bypass SlbTemplateHttp#non_http_bypass}
  */
  readonly nonHttpBypass?: number;
  /**
  * Persist to the same server if the response code is 401
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http#persist_on_401 SlbTemplateHttp#persist_on_401}
  */
  readonly persistOn401?: number;
  /**
  * 'host': the cookie will have been set with a Secure attribute, a Path attribute with a value of /, and no Domain attribute; 'secure': the cookie will have been set with a Secure attribute; 'check': check server prefix and enforce prefix format;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http#prefix SlbTemplateHttp#prefix}
  */
  readonly prefix?: string;
  /**
  * Port (Port Number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http#rd_port SlbTemplateHttp#rd_port}
  */
  readonly rdPort?: number;
  /**
  * '301': Moved Permanently; '302': Found; '303': See Other; '307': Temporary Redirect;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http#rd_resp_code SlbTemplateHttp#rd_resp_code}
  */
  readonly rdRespCode?: string;
  /**
  * Use HTTPS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http#rd_secure SlbTemplateHttp#rd_secure}
  */
  readonly rdSecure?: number;
  /**
  * Redirect location tag absolute URI string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http#rd_simple_loc SlbTemplateHttp#rd_simple_loc}
  */
  readonly rdSimpleLoc?: string;
  /**
  * Automatically send a redirect response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http#redirect SlbTemplateHttp#redirect}
  */
  readonly redirect?: number;
  /**
  * HTTP request header wait time before abort connection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http#req_hdr_wait_time SlbTemplateHttp#req_hdr_wait_time}
  */
  readonly reqHdrWaitTime?: number;
  /**
  * Number of seconds wait for client request header (default is 7)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http#req_hdr_wait_time_val SlbTemplateHttp#req_hdr_wait_time_val}
  */
  readonly reqHdrWaitTimeVal?: number;
  /**
  * Parse http request line as case insensitive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http#request_line_case_insensitive SlbTemplateHttp#request_line_case_insensitive}
  */
  readonly requestLineCaseInsensitive?: number;
  /**
  * Request timeout if response not received (timeout in seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http#request_timeout SlbTemplateHttp#request_timeout}
  */
  readonly requestTimeout?: number;
  /**
  * Retry http request on HTTP 5xx code and request timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http#retry_on_5xx SlbTemplateHttp#retry_on_5xx}
  */
  readonly retryOn5Xx?: number;
  /**
  * Retry http request on HTTP 5xx code for each request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http#retry_on_5xx_per_req SlbTemplateHttp#retry_on_5xx_per_req}
  */
  readonly retryOn5XxPerReq?: number;
  /**
  * Number of times to retry (default is 3)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http#retry_on_5xx_per_req_val SlbTemplateHttp#retry_on_5xx_per_req_val}
  */
  readonly retryOn5XxPerReqVal?: number;
  /**
  * Number of times to retry (default is 3)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http#retry_on_5xx_val SlbTemplateHttp#retry_on_5xx_val}
  */
  readonly retryOn5XxVal?: number;
  /**
  * Notify the vport regarding whether server supports http2 only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http#server_support_http2_only SlbTemplateHttp#server_support_http2_only}
  */
  readonly serverSupportHttp2Only?: number;
  /**
  * 'auto-detect': Commuincate with the server via HTTP/2 when an support-http2-only rport is detected; 'force': Communicate with the server via HTTP/2 when possible;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http#server_support_http2_only_value SlbTemplateHttp#server_support_http2_only_value}
  */
  readonly serverSupportHttp2OnlyValue?: string;
  /**
  * cancellation limit, default 0 (accumulated cancellation limit value, default is 0)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http#stream_cancellation_limit SlbTemplateHttp#stream_cancellation_limit}
  */
  readonly streamCancellationLimit?: number;
  /**
  * cancellation rate, default 10 (cancellation rate value, default is 10)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http#stream_cancellation_rate SlbTemplateHttp#stream_cancellation_rate}
  */
  readonly streamCancellationRate?: number;
  /**
  * Force server selection on every HTTP request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http#strict_transaction_switch SlbTemplateHttp#strict_transaction_switch}
  */
  readonly strictTransactionSwitch?: number;
  /**
  * Terminate HTTP 1.1 client when req has Connection: close
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http#term_11client_hdr_conn_close SlbTemplateHttp#term_11client_hdr_conn_close}
  */
  readonly term11ClientHdrConnClose?: number;
  /**
  * Use the begining part of URL to calculate hash value (URL string length to calculate hash value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http#url_hash_first SlbTemplateHttp#url_hash_first}
  */
  readonly urlHashFirst?: number;
  /**
  * Use the end part of URL to calculate hash value (URL string length to calculate hash value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http#url_hash_last SlbTemplateHttp#url_hash_last}
  */
  readonly urlHashLast?: number;
  /**
  * Skip part of URL to calculate hash value (Offset of the URL string)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http#url_hash_offset SlbTemplateHttp#url_hash_offset}
  */
  readonly urlHashOffset?: number;
  /**
  * Use URL's hash value to select server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http#url_hash_persist SlbTemplateHttp#url_hash_persist}
  */
  readonly urlHashPersist?: number;
  /**
  * Use Server-Status header to do URL hashing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http#use_server_status SlbTemplateHttp#use_server_status}
  */
  readonly useServerStatus?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http#user_tag SlbTemplateHttp#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http#uuid SlbTemplateHttp#uuid}
  */
  readonly uuid?: string;
  /**
  * compression_content_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http#compression_content_type SlbTemplateHttp#compression_content_type}
  */
  readonly compressionContentType?: SlbTemplateHttpCompressionContentType[] | cdktf.IResolvable;
  /**
  * compression_exclude_content_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http#compression_exclude_content_type SlbTemplateHttp#compression_exclude_content_type}
  */
  readonly compressionExcludeContentType?: SlbTemplateHttpCompressionExcludeContentType[] | cdktf.IResolvable;
  /**
  * compression_exclude_uri block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http#compression_exclude_uri SlbTemplateHttp#compression_exclude_uri}
  */
  readonly compressionExcludeUri?: SlbTemplateHttpCompressionExcludeUri[] | cdktf.IResolvable;
  /**
  * host_switching block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http#host_switching SlbTemplateHttp#host_switching}
  */
  readonly hostSwitching?: SlbTemplateHttpHostSwitching[] | cdktf.IResolvable;
  /**
  * http_protocol_check block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http#http_protocol_check SlbTemplateHttp#http_protocol_check}
  */
  readonly httpProtocolCheck?: SlbTemplateHttpHttpProtocolCheck;
  /**
  * redirect_rewrite block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http#redirect_rewrite SlbTemplateHttp#redirect_rewrite}
  */
  readonly redirectRewrite?: SlbTemplateHttpRedirectRewrite;
  /**
  * request_header_erase_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http#request_header_erase_list SlbTemplateHttp#request_header_erase_list}
  */
  readonly requestHeaderEraseList?: SlbTemplateHttpRequestHeaderEraseListStruct[] | cdktf.IResolvable;
  /**
  * request_header_insert_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http#request_header_insert_list SlbTemplateHttp#request_header_insert_list}
  */
  readonly requestHeaderInsertList?: SlbTemplateHttpRequestHeaderInsertListStruct[] | cdktf.IResolvable;
  /**
  * response_content_replace_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http#response_content_replace_list SlbTemplateHttp#response_content_replace_list}
  */
  readonly responseContentReplaceList?: SlbTemplateHttpResponseContentReplaceListStruct[] | cdktf.IResolvable;
  /**
  * response_header_erase_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http#response_header_erase_list SlbTemplateHttp#response_header_erase_list}
  */
  readonly responseHeaderEraseList?: SlbTemplateHttpResponseHeaderEraseListStruct[] | cdktf.IResolvable;
  /**
  * response_header_insert_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http#response_header_insert_list SlbTemplateHttp#response_header_insert_list}
  */
  readonly responseHeaderInsertList?: SlbTemplateHttpResponseHeaderInsertListStruct[] | cdktf.IResolvable;
  /**
  * template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http#template SlbTemplateHttp#template}
  */
  readonly template?: SlbTemplateHttpTemplate;
  /**
  * url_switching block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http#url_switching SlbTemplateHttp#url_switching}
  */
  readonly urlSwitching?: SlbTemplateHttpUrlSwitching[] | cdktf.IResolvable;
}
export interface SlbTemplateHttpCompressionContentType {
  /**
  * Compression content-type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http#content_type SlbTemplateHttp#content_type}
  */
  readonly contentType?: string;
}

export function slbTemplateHttpCompressionContentTypeToTerraform(struct?: SlbTemplateHttpCompressionContentType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content_type: cdktf.stringToTerraform(struct!.contentType),
  }
}


export function slbTemplateHttpCompressionContentTypeToHclTerraform(struct?: SlbTemplateHttpCompressionContentType | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplateHttpCompressionContentTypeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplateHttpCompressionContentType | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplateHttpCompressionContentType | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contentType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contentType = value.contentType;
    }
  }

  // content_type - computed: false, optional: true, required: false
  private _contentType?: string; 
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  public resetContentType() {
    this._contentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
  }
}

export class SlbTemplateHttpCompressionContentTypeList extends cdktf.ComplexList {
  public internalValue? : SlbTemplateHttpCompressionContentType[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplateHttpCompressionContentTypeOutputReference {
    return new SlbTemplateHttpCompressionContentTypeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlbTemplateHttpCompressionExcludeContentType {
  /**
  * Compression exclude content-type (Compression exclude content type)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http#exclude_content_type SlbTemplateHttp#exclude_content_type}
  */
  readonly excludeContentType?: string;
}

export function slbTemplateHttpCompressionExcludeContentTypeToTerraform(struct?: SlbTemplateHttpCompressionExcludeContentType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude_content_type: cdktf.stringToTerraform(struct!.excludeContentType),
  }
}


export function slbTemplateHttpCompressionExcludeContentTypeToHclTerraform(struct?: SlbTemplateHttpCompressionExcludeContentType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude_content_type: {
      value: cdktf.stringToHclTerraform(struct!.excludeContentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplateHttpCompressionExcludeContentTypeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplateHttpCompressionExcludeContentType | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludeContentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeContentType = this._excludeContentType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplateHttpCompressionExcludeContentType | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._excludeContentType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._excludeContentType = value.excludeContentType;
    }
  }

  // exclude_content_type - computed: false, optional: true, required: false
  private _excludeContentType?: string; 
  public get excludeContentType() {
    return this.getStringAttribute('exclude_content_type');
  }
  public set excludeContentType(value: string) {
    this._excludeContentType = value;
  }
  public resetExcludeContentType() {
    this._excludeContentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeContentTypeInput() {
    return this._excludeContentType;
  }
}

export class SlbTemplateHttpCompressionExcludeContentTypeList extends cdktf.ComplexList {
  public internalValue? : SlbTemplateHttpCompressionExcludeContentType[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplateHttpCompressionExcludeContentTypeOutputReference {
    return new SlbTemplateHttpCompressionExcludeContentTypeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlbTemplateHttpCompressionExcludeUri {
  /**
  * Compression exclude uri
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http#exclude_uri SlbTemplateHttp#exclude_uri}
  */
  readonly excludeUri?: string;
}

export function slbTemplateHttpCompressionExcludeUriToTerraform(struct?: SlbTemplateHttpCompressionExcludeUri | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude_uri: cdktf.stringToTerraform(struct!.excludeUri),
  }
}


export function slbTemplateHttpCompressionExcludeUriToHclTerraform(struct?: SlbTemplateHttpCompressionExcludeUri | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude_uri: {
      value: cdktf.stringToHclTerraform(struct!.excludeUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplateHttpCompressionExcludeUriOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplateHttpCompressionExcludeUri | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludeUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeUri = this._excludeUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplateHttpCompressionExcludeUri | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._excludeUri = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._excludeUri = value.excludeUri;
    }
  }

  // exclude_uri - computed: false, optional: true, required: false
  private _excludeUri?: string; 
  public get excludeUri() {
    return this.getStringAttribute('exclude_uri');
  }
  public set excludeUri(value: string) {
    this._excludeUri = value;
  }
  public resetExcludeUri() {
    this._excludeUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeUriInput() {
    return this._excludeUri;
  }
}

export class SlbTemplateHttpCompressionExcludeUriList extends cdktf.ComplexList {
  public internalValue? : SlbTemplateHttpCompressionExcludeUri[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplateHttpCompressionExcludeUriOutputReference {
    return new SlbTemplateHttpCompressionExcludeUriOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlbTemplateHttpHostSwitching {
  /**
  * Hostname String
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http#host_match_string SlbTemplateHttp#host_match_string}
  */
  readonly hostMatchString?: string;
  /**
  * Create a Service Group comprising Servers (Service Group Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http#host_service_group SlbTemplateHttp#host_service_group}
  */
  readonly hostServiceGroup?: string;
  /**
  * 'contains': Select service group if hostname contains another string; 'ends-with': Select service group if hostname ends with another string; 'equals': Select service group if hostname equals another string; 'starts-with': Select service group if hostname starts with another string; 'regex-match': Select service group if URL string matches with regular expression; 'host-hits-enable': Enables Host Hits counters;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http#host_switching_type SlbTemplateHttp#host_switching_type}
  */
  readonly hostSwitchingType?: string;
}

export function slbTemplateHttpHostSwitchingToTerraform(struct?: SlbTemplateHttpHostSwitching | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host_match_string: cdktf.stringToTerraform(struct!.hostMatchString),
    host_service_group: cdktf.stringToTerraform(struct!.hostServiceGroup),
    host_switching_type: cdktf.stringToTerraform(struct!.hostSwitchingType),
  }
}


export function slbTemplateHttpHostSwitchingToHclTerraform(struct?: SlbTemplateHttpHostSwitching | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host_match_string: {
      value: cdktf.stringToHclTerraform(struct!.hostMatchString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_service_group: {
      value: cdktf.stringToHclTerraform(struct!.hostServiceGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_switching_type: {
      value: cdktf.stringToHclTerraform(struct!.hostSwitchingType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplateHttpHostSwitchingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplateHttpHostSwitching | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostMatchString !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostMatchString = this._hostMatchString;
    }
    if (this._hostServiceGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostServiceGroup = this._hostServiceGroup;
    }
    if (this._hostSwitchingType !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostSwitchingType = this._hostSwitchingType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplateHttpHostSwitching | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostMatchString = undefined;
      this._hostServiceGroup = undefined;
      this._hostSwitchingType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostMatchString = value.hostMatchString;
      this._hostServiceGroup = value.hostServiceGroup;
      this._hostSwitchingType = value.hostSwitchingType;
    }
  }

  // host_match_string - computed: false, optional: true, required: false
  private _hostMatchString?: string; 
  public get hostMatchString() {
    return this.getStringAttribute('host_match_string');
  }
  public set hostMatchString(value: string) {
    this._hostMatchString = value;
  }
  public resetHostMatchString() {
    this._hostMatchString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostMatchStringInput() {
    return this._hostMatchString;
  }

  // host_service_group - computed: false, optional: true, required: false
  private _hostServiceGroup?: string; 
  public get hostServiceGroup() {
    return this.getStringAttribute('host_service_group');
  }
  public set hostServiceGroup(value: string) {
    this._hostServiceGroup = value;
  }
  public resetHostServiceGroup() {
    this._hostServiceGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostServiceGroupInput() {
    return this._hostServiceGroup;
  }

  // host_switching_type - computed: false, optional: true, required: false
  private _hostSwitchingType?: string; 
  public get hostSwitchingType() {
    return this.getStringAttribute('host_switching_type');
  }
  public set hostSwitchingType(value: string) {
    this._hostSwitchingType = value;
  }
  public resetHostSwitchingType() {
    this._hostSwitchingType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostSwitchingTypeInput() {
    return this._hostSwitchingType;
  }
}

export class SlbTemplateHttpHostSwitchingList extends cdktf.ComplexList {
  public internalValue? : SlbTemplateHttpHostSwitching[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplateHttpHostSwitchingOutputReference {
    return new SlbTemplateHttpHostSwitchingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlbTemplateHttpHttpProtocolCheckHeaderFilterRuleListStruct {
  /**
  * 'drop': Drop the request;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http#action_value SlbTemplateHttp#action_value}
  */
  readonly actionValue?: string;
  /**
  * Header name value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http#header_name_value SlbTemplateHttp#header_name_value}
  */
  readonly headerNameValue?: string;
  /**
  * Header value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http#header_value_value SlbTemplateHttp#header_value_value}
  */
  readonly headerValueValue?: string;
  /**
  * 'full-text': Full text match; 'pcre': PCRE match;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http#match_type_value SlbTemplateHttp#match_type_value}
  */
  readonly matchTypeValue?: string;
  /**
  * Specify a sequence number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http#seq_num SlbTemplateHttp#seq_num}
  */
  readonly seqNum: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http#user_tag SlbTemplateHttp#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http#uuid SlbTemplateHttp#uuid}
  */
  readonly uuid?: string;
}

export function slbTemplateHttpHttpProtocolCheckHeaderFilterRuleListStructToTerraform(struct?: SlbTemplateHttpHttpProtocolCheckHeaderFilterRuleListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_value: cdktf.stringToTerraform(struct!.actionValue),
    header_name_value: cdktf.stringToTerraform(struct!.headerNameValue),
    header_value_value: cdktf.stringToTerraform(struct!.headerValueValue),
    match_type_value: cdktf.stringToTerraform(struct!.matchTypeValue),
    seq_num: cdktf.numberToTerraform(struct!.seqNum),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function slbTemplateHttpHttpProtocolCheckHeaderFilterRuleListStructToHclTerraform(struct?: SlbTemplateHttpHttpProtocolCheckHeaderFilterRuleListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action_value: {
      value: cdktf.stringToHclTerraform(struct!.actionValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header_name_value: {
      value: cdktf.stringToHclTerraform(struct!.headerNameValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header_value_value: {
      value: cdktf.stringToHclTerraform(struct!.headerValueValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_type_value: {
      value: cdktf.stringToHclTerraform(struct!.matchTypeValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    seq_num: {
      value: cdktf.numberToHclTerraform(struct!.seqNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    user_tag: {
      value: cdktf.stringToHclTerraform(struct!.userTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class SlbTemplateHttpHttpProtocolCheckHeaderFilterRuleListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplateHttpHttpProtocolCheckHeaderFilterRuleListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionValue = this._actionValue;
    }
    if (this._headerNameValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerNameValue = this._headerNameValue;
    }
    if (this._headerValueValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerValueValue = this._headerValueValue;
    }
    if (this._matchTypeValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchTypeValue = this._matchTypeValue;
    }
    if (this._seqNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.seqNum = this._seqNum;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplateHttpHttpProtocolCheckHeaderFilterRuleListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actionValue = undefined;
      this._headerNameValue = undefined;
      this._headerValueValue = undefined;
      this._matchTypeValue = undefined;
      this._seqNum = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actionValue = value.actionValue;
      this._headerNameValue = value.headerNameValue;
      this._headerValueValue = value.headerValueValue;
      this._matchTypeValue = value.matchTypeValue;
      this._seqNum = value.seqNum;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
    }
  }

  // action_value - computed: false, optional: true, required: false
  private _actionValue?: string; 
  public get actionValue() {
    return this.getStringAttribute('action_value');
  }
  public set actionValue(value: string) {
    this._actionValue = value;
  }
  public resetActionValue() {
    this._actionValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionValueInput() {
    return this._actionValue;
  }

  // header_name_value - computed: false, optional: true, required: false
  private _headerNameValue?: string; 
  public get headerNameValue() {
    return this.getStringAttribute('header_name_value');
  }
  public set headerNameValue(value: string) {
    this._headerNameValue = value;
  }
  public resetHeaderNameValue() {
    this._headerNameValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerNameValueInput() {
    return this._headerNameValue;
  }

  // header_value_value - computed: false, optional: true, required: false
  private _headerValueValue?: string; 
  public get headerValueValue() {
    return this.getStringAttribute('header_value_value');
  }
  public set headerValueValue(value: string) {
    this._headerValueValue = value;
  }
  public resetHeaderValueValue() {
    this._headerValueValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerValueValueInput() {
    return this._headerValueValue;
  }

  // match_type_value - computed: false, optional: true, required: false
  private _matchTypeValue?: string; 
  public get matchTypeValue() {
    return this.getStringAttribute('match_type_value');
  }
  public set matchTypeValue(value: string) {
    this._matchTypeValue = value;
  }
  public resetMatchTypeValue() {
    this._matchTypeValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchTypeValueInput() {
    return this._matchTypeValue;
  }

  // seq_num - computed: false, optional: false, required: true
  private _seqNum?: number; 
  public get seqNum() {
    return this.getNumberAttribute('seq_num');
  }
  public set seqNum(value: number) {
    this._seqNum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get seqNumInput() {
    return this._seqNum;
  }

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
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

export class SlbTemplateHttpHttpProtocolCheckHeaderFilterRuleListStructList extends cdktf.ComplexList {
  public internalValue? : SlbTemplateHttpHttpProtocolCheckHeaderFilterRuleListStruct[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplateHttpHttpProtocolCheckHeaderFilterRuleListStructOutputReference {
    return new SlbTemplateHttpHttpProtocolCheckHeaderFilterRuleListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlbTemplateHttpHttpProtocolCheck {
  /**
  * 'drop': Drop the request and send 400 to the client side;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http#get_and_payload SlbTemplateHttp#get_and_payload}
  */
  readonly fetchAndPayload?: string;
  /**
  * 'drop': Drop the request and send 400 to the client side;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http#h2up_content_length_alias SlbTemplateHttp#h2up_content_length_alias}
  */
  readonly h2UpContentLengthAlias?: string;
  /**
  * 'drop': Drop the request and send 400 to the client side;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http#h2up_with_host_and_auth SlbTemplateHttp#h2up_with_host_and_auth}
  */
  readonly h2UpWithHostAndAuth?: string;
  /**
  * 'drop': Drop the request and send 400 to the client side;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http#h2up_with_transfer_encoding SlbTemplateHttp#h2up_with_transfer_encoding}
  */
  readonly h2UpWithTransferEncoding?: string;
  /**
  * 'drop': Drop the request and send 400 to the client side;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http#malformed_h2up_header_value SlbTemplateHttp#malformed_h2up_header_value}
  */
  readonly malformedH2UpHeaderValue?: string;
  /**
  * 'drop': Drop the request and send 400 to the client side;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http#malformed_h2up_scheme_value SlbTemplateHttp#malformed_h2up_scheme_value}
  */
  readonly malformedH2UpSchemeValue?: string;
  /**
  * 'drop': Drop the request and send 400 to the client side;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http#multiple_content_length SlbTemplateHttp#multiple_content_length}
  */
  readonly multipleContentLength?: string;
  /**
  * 'drop': Drop the request and send 400 to the client side;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http#multiple_transfer_encoding SlbTemplateHttp#multiple_transfer_encoding}
  */
  readonly multipleTransferEncoding?: string;
  /**
  * 'drop': Drop the request and Send 400 to the client side;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http#transfer_encoding_and_content_length SlbTemplateHttp#transfer_encoding_and_content_length}
  */
  readonly transferEncodingAndContentLength?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http#uuid SlbTemplateHttp#uuid}
  */
  readonly uuid?: string;
  /**
  * header_filter_rule_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http#header_filter_rule_list SlbTemplateHttp#header_filter_rule_list}
  */
  readonly headerFilterRuleList?: SlbTemplateHttpHttpProtocolCheckHeaderFilterRuleListStruct[] | cdktf.IResolvable;
}

export function slbTemplateHttpHttpProtocolCheckToTerraform(struct?: SlbTemplateHttpHttpProtocolCheckOutputReference | SlbTemplateHttpHttpProtocolCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    get_and_payload: cdktf.stringToTerraform(struct!.fetchAndPayload),
    h2up_content_length_alias: cdktf.stringToTerraform(struct!.h2UpContentLengthAlias),
    h2up_with_host_and_auth: cdktf.stringToTerraform(struct!.h2UpWithHostAndAuth),
    h2up_with_transfer_encoding: cdktf.stringToTerraform(struct!.h2UpWithTransferEncoding),
    malformed_h2up_header_value: cdktf.stringToTerraform(struct!.malformedH2UpHeaderValue),
    malformed_h2up_scheme_value: cdktf.stringToTerraform(struct!.malformedH2UpSchemeValue),
    multiple_content_length: cdktf.stringToTerraform(struct!.multipleContentLength),
    multiple_transfer_encoding: cdktf.stringToTerraform(struct!.multipleTransferEncoding),
    transfer_encoding_and_content_length: cdktf.stringToTerraform(struct!.transferEncodingAndContentLength),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    header_filter_rule_list: cdktf.listMapper(slbTemplateHttpHttpProtocolCheckHeaderFilterRuleListStructToTerraform, true)(struct!.headerFilterRuleList),
  }
}


export function slbTemplateHttpHttpProtocolCheckToHclTerraform(struct?: SlbTemplateHttpHttpProtocolCheckOutputReference | SlbTemplateHttpHttpProtocolCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    get_and_payload: {
      value: cdktf.stringToHclTerraform(struct!.fetchAndPayload),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    h2up_content_length_alias: {
      value: cdktf.stringToHclTerraform(struct!.h2UpContentLengthAlias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    h2up_with_host_and_auth: {
      value: cdktf.stringToHclTerraform(struct!.h2UpWithHostAndAuth),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    h2up_with_transfer_encoding: {
      value: cdktf.stringToHclTerraform(struct!.h2UpWithTransferEncoding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    malformed_h2up_header_value: {
      value: cdktf.stringToHclTerraform(struct!.malformedH2UpHeaderValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    malformed_h2up_scheme_value: {
      value: cdktf.stringToHclTerraform(struct!.malformedH2UpSchemeValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    multiple_content_length: {
      value: cdktf.stringToHclTerraform(struct!.multipleContentLength),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    multiple_transfer_encoding: {
      value: cdktf.stringToHclTerraform(struct!.multipleTransferEncoding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transfer_encoding_and_content_length: {
      value: cdktf.stringToHclTerraform(struct!.transferEncodingAndContentLength),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header_filter_rule_list: {
      value: cdktf.listMapperHcl(slbTemplateHttpHttpProtocolCheckHeaderFilterRuleListStructToHclTerraform, true)(struct!.headerFilterRuleList),
      isBlock: true,
      type: "list",
      storageClassType: "SlbTemplateHttpHttpProtocolCheckHeaderFilterRuleListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplateHttpHttpProtocolCheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SlbTemplateHttpHttpProtocolCheck | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._getAndPayload !== undefined) {
      hasAnyValues = true;
      internalValueResult.fetchAndPayload = this._getAndPayload;
    }
    if (this._h2UpContentLengthAlias !== undefined) {
      hasAnyValues = true;
      internalValueResult.h2UpContentLengthAlias = this._h2UpContentLengthAlias;
    }
    if (this._h2UpWithHostAndAuth !== undefined) {
      hasAnyValues = true;
      internalValueResult.h2UpWithHostAndAuth = this._h2UpWithHostAndAuth;
    }
    if (this._h2UpWithTransferEncoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.h2UpWithTransferEncoding = this._h2UpWithTransferEncoding;
    }
    if (this._malformedH2UpHeaderValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.malformedH2UpHeaderValue = this._malformedH2UpHeaderValue;
    }
    if (this._malformedH2UpSchemeValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.malformedH2UpSchemeValue = this._malformedH2UpSchemeValue;
    }
    if (this._multipleContentLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.multipleContentLength = this._multipleContentLength;
    }
    if (this._multipleTransferEncoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.multipleTransferEncoding = this._multipleTransferEncoding;
    }
    if (this._transferEncodingAndContentLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.transferEncodingAndContentLength = this._transferEncodingAndContentLength;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._headerFilterRuleList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerFilterRuleList = this._headerFilterRuleList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplateHttpHttpProtocolCheck | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._getAndPayload = undefined;
      this._h2UpContentLengthAlias = undefined;
      this._h2UpWithHostAndAuth = undefined;
      this._h2UpWithTransferEncoding = undefined;
      this._malformedH2UpHeaderValue = undefined;
      this._malformedH2UpSchemeValue = undefined;
      this._multipleContentLength = undefined;
      this._multipleTransferEncoding = undefined;
      this._transferEncodingAndContentLength = undefined;
      this._uuid = undefined;
      this._headerFilterRuleList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._getAndPayload = value.fetchAndPayload;
      this._h2UpContentLengthAlias = value.h2UpContentLengthAlias;
      this._h2UpWithHostAndAuth = value.h2UpWithHostAndAuth;
      this._h2UpWithTransferEncoding = value.h2UpWithTransferEncoding;
      this._malformedH2UpHeaderValue = value.malformedH2UpHeaderValue;
      this._malformedH2UpSchemeValue = value.malformedH2UpSchemeValue;
      this._multipleContentLength = value.multipleContentLength;
      this._multipleTransferEncoding = value.multipleTransferEncoding;
      this._transferEncodingAndContentLength = value.transferEncodingAndContentLength;
      this._uuid = value.uuid;
      this._headerFilterRuleList.internalValue = value.headerFilterRuleList;
    }
  }

  // get_and_payload - computed: false, optional: true, required: false
  private _getAndPayload?: string; 
  public get fetchAndPayload() {
    return this.getStringAttribute('get_and_payload');
  }
  public set fetchAndPayload(value: string) {
    this._getAndPayload = value;
  }
  public resetFetchAndPayload() {
    this._getAndPayload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fetchAndPayloadInput() {
    return this._getAndPayload;
  }

  // h2up_content_length_alias - computed: false, optional: true, required: false
  private _h2UpContentLengthAlias?: string; 
  public get h2UpContentLengthAlias() {
    return this.getStringAttribute('h2up_content_length_alias');
  }
  public set h2UpContentLengthAlias(value: string) {
    this._h2UpContentLengthAlias = value;
  }
  public resetH2UpContentLengthAlias() {
    this._h2UpContentLengthAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get h2UpContentLengthAliasInput() {
    return this._h2UpContentLengthAlias;
  }

  // h2up_with_host_and_auth - computed: false, optional: true, required: false
  private _h2UpWithHostAndAuth?: string; 
  public get h2UpWithHostAndAuth() {
    return this.getStringAttribute('h2up_with_host_and_auth');
  }
  public set h2UpWithHostAndAuth(value: string) {
    this._h2UpWithHostAndAuth = value;
  }
  public resetH2UpWithHostAndAuth() {
    this._h2UpWithHostAndAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get h2UpWithHostAndAuthInput() {
    return this._h2UpWithHostAndAuth;
  }

  // h2up_with_transfer_encoding - computed: false, optional: true, required: false
  private _h2UpWithTransferEncoding?: string; 
  public get h2UpWithTransferEncoding() {
    return this.getStringAttribute('h2up_with_transfer_encoding');
  }
  public set h2UpWithTransferEncoding(value: string) {
    this._h2UpWithTransferEncoding = value;
  }
  public resetH2UpWithTransferEncoding() {
    this._h2UpWithTransferEncoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get h2UpWithTransferEncodingInput() {
    return this._h2UpWithTransferEncoding;
  }

  // malformed_h2up_header_value - computed: false, optional: true, required: false
  private _malformedH2UpHeaderValue?: string; 
  public get malformedH2UpHeaderValue() {
    return this.getStringAttribute('malformed_h2up_header_value');
  }
  public set malformedH2UpHeaderValue(value: string) {
    this._malformedH2UpHeaderValue = value;
  }
  public resetMalformedH2UpHeaderValue() {
    this._malformedH2UpHeaderValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malformedH2UpHeaderValueInput() {
    return this._malformedH2UpHeaderValue;
  }

  // malformed_h2up_scheme_value - computed: false, optional: true, required: false
  private _malformedH2UpSchemeValue?: string; 
  public get malformedH2UpSchemeValue() {
    return this.getStringAttribute('malformed_h2up_scheme_value');
  }
  public set malformedH2UpSchemeValue(value: string) {
    this._malformedH2UpSchemeValue = value;
  }
  public resetMalformedH2UpSchemeValue() {
    this._malformedH2UpSchemeValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malformedH2UpSchemeValueInput() {
    return this._malformedH2UpSchemeValue;
  }

  // multiple_content_length - computed: false, optional: true, required: false
  private _multipleContentLength?: string; 
  public get multipleContentLength() {
    return this.getStringAttribute('multiple_content_length');
  }
  public set multipleContentLength(value: string) {
    this._multipleContentLength = value;
  }
  public resetMultipleContentLength() {
    this._multipleContentLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multipleContentLengthInput() {
    return this._multipleContentLength;
  }

  // multiple_transfer_encoding - computed: false, optional: true, required: false
  private _multipleTransferEncoding?: string; 
  public get multipleTransferEncoding() {
    return this.getStringAttribute('multiple_transfer_encoding');
  }
  public set multipleTransferEncoding(value: string) {
    this._multipleTransferEncoding = value;
  }
  public resetMultipleTransferEncoding() {
    this._multipleTransferEncoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multipleTransferEncodingInput() {
    return this._multipleTransferEncoding;
  }

  // transfer_encoding_and_content_length - computed: false, optional: true, required: false
  private _transferEncodingAndContentLength?: string; 
  public get transferEncodingAndContentLength() {
    return this.getStringAttribute('transfer_encoding_and_content_length');
  }
  public set transferEncodingAndContentLength(value: string) {
    this._transferEncodingAndContentLength = value;
  }
  public resetTransferEncodingAndContentLength() {
    this._transferEncodingAndContentLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transferEncodingAndContentLengthInput() {
    return this._transferEncodingAndContentLength;
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

  // header_filter_rule_list - computed: false, optional: true, required: false
  private _headerFilterRuleList = new SlbTemplateHttpHttpProtocolCheckHeaderFilterRuleListStructList(this, "header_filter_rule_list", false);
  public get headerFilterRuleList() {
    return this._headerFilterRuleList;
  }
  public putHeaderFilterRuleList(value: SlbTemplateHttpHttpProtocolCheckHeaderFilterRuleListStruct[] | cdktf.IResolvable) {
    this._headerFilterRuleList.internalValue = value;
  }
  public resetHeaderFilterRuleList() {
    this._headerFilterRuleList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerFilterRuleListInput() {
    return this._headerFilterRuleList.internalValue;
  }
}
export interface SlbTemplateHttpRedirectRewriteMatchListStruct {
  /**
  * URL Matching (Pattern URL String)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http#redirect_match SlbTemplateHttp#redirect_match}
  */
  readonly redirectMatch?: string;
  /**
  * Rewrite to Destination URL String
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http#rewrite_to SlbTemplateHttp#rewrite_to}
  */
  readonly rewriteTo?: string;
}

export function slbTemplateHttpRedirectRewriteMatchListStructToTerraform(struct?: SlbTemplateHttpRedirectRewriteMatchListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    redirect_match: cdktf.stringToTerraform(struct!.redirectMatch),
    rewrite_to: cdktf.stringToTerraform(struct!.rewriteTo),
  }
}


export function slbTemplateHttpRedirectRewriteMatchListStructToHclTerraform(struct?: SlbTemplateHttpRedirectRewriteMatchListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    redirect_match: {
      value: cdktf.stringToHclTerraform(struct!.redirectMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rewrite_to: {
      value: cdktf.stringToHclTerraform(struct!.rewriteTo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplateHttpRedirectRewriteMatchListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplateHttpRedirectRewriteMatchListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._redirectMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectMatch = this._redirectMatch;
    }
    if (this._rewriteTo !== undefined) {
      hasAnyValues = true;
      internalValueResult.rewriteTo = this._rewriteTo;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplateHttpRedirectRewriteMatchListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._redirectMatch = undefined;
      this._rewriteTo = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._redirectMatch = value.redirectMatch;
      this._rewriteTo = value.rewriteTo;
    }
  }

  // redirect_match - computed: false, optional: true, required: false
  private _redirectMatch?: string; 
  public get redirectMatch() {
    return this.getStringAttribute('redirect_match');
  }
  public set redirectMatch(value: string) {
    this._redirectMatch = value;
  }
  public resetRedirectMatch() {
    this._redirectMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectMatchInput() {
    return this._redirectMatch;
  }

  // rewrite_to - computed: false, optional: true, required: false
  private _rewriteTo?: string; 
  public get rewriteTo() {
    return this.getStringAttribute('rewrite_to');
  }
  public set rewriteTo(value: string) {
    this._rewriteTo = value;
  }
  public resetRewriteTo() {
    this._rewriteTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rewriteToInput() {
    return this._rewriteTo;
  }
}

export class SlbTemplateHttpRedirectRewriteMatchListStructList extends cdktf.ComplexList {
  public internalValue? : SlbTemplateHttpRedirectRewriteMatchListStruct[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplateHttpRedirectRewriteMatchListStructOutputReference {
    return new SlbTemplateHttpRedirectRewriteMatchListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlbTemplateHttpRedirectRewrite {
  /**
  * Use HTTPS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http#redirect_secure SlbTemplateHttp#redirect_secure}
  */
  readonly redirectSecure?: number;
  /**
  * Port (Port Number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http#redirect_secure_port SlbTemplateHttp#redirect_secure_port}
  */
  readonly redirectSecurePort?: number;
  /**
  * match_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http#match_list SlbTemplateHttp#match_list}
  */
  readonly matchList?: SlbTemplateHttpRedirectRewriteMatchListStruct[] | cdktf.IResolvable;
}

export function slbTemplateHttpRedirectRewriteToTerraform(struct?: SlbTemplateHttpRedirectRewriteOutputReference | SlbTemplateHttpRedirectRewrite): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    redirect_secure: cdktf.numberToTerraform(struct!.redirectSecure),
    redirect_secure_port: cdktf.numberToTerraform(struct!.redirectSecurePort),
    match_list: cdktf.listMapper(slbTemplateHttpRedirectRewriteMatchListStructToTerraform, true)(struct!.matchList),
  }
}


export function slbTemplateHttpRedirectRewriteToHclTerraform(struct?: SlbTemplateHttpRedirectRewriteOutputReference | SlbTemplateHttpRedirectRewrite): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    redirect_secure: {
      value: cdktf.numberToHclTerraform(struct!.redirectSecure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    redirect_secure_port: {
      value: cdktf.numberToHclTerraform(struct!.redirectSecurePort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    match_list: {
      value: cdktf.listMapperHcl(slbTemplateHttpRedirectRewriteMatchListStructToHclTerraform, true)(struct!.matchList),
      isBlock: true,
      type: "list",
      storageClassType: "SlbTemplateHttpRedirectRewriteMatchListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplateHttpRedirectRewriteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SlbTemplateHttpRedirectRewrite | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._redirectSecure !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectSecure = this._redirectSecure;
    }
    if (this._redirectSecurePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectSecurePort = this._redirectSecurePort;
    }
    if (this._matchList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchList = this._matchList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplateHttpRedirectRewrite | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._redirectSecure = undefined;
      this._redirectSecurePort = undefined;
      this._matchList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._redirectSecure = value.redirectSecure;
      this._redirectSecurePort = value.redirectSecurePort;
      this._matchList.internalValue = value.matchList;
    }
  }

  // redirect_secure - computed: false, optional: true, required: false
  private _redirectSecure?: number; 
  public get redirectSecure() {
    return this.getNumberAttribute('redirect_secure');
  }
  public set redirectSecure(value: number) {
    this._redirectSecure = value;
  }
  public resetRedirectSecure() {
    this._redirectSecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectSecureInput() {
    return this._redirectSecure;
  }

  // redirect_secure_port - computed: false, optional: true, required: false
  private _redirectSecurePort?: number; 
  public get redirectSecurePort() {
    return this.getNumberAttribute('redirect_secure_port');
  }
  public set redirectSecurePort(value: number) {
    this._redirectSecurePort = value;
  }
  public resetRedirectSecurePort() {
    this._redirectSecurePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectSecurePortInput() {
    return this._redirectSecurePort;
  }

  // match_list - computed: false, optional: true, required: false
  private _matchList = new SlbTemplateHttpRedirectRewriteMatchListStructList(this, "match_list", false);
  public get matchList() {
    return this._matchList;
  }
  public putMatchList(value: SlbTemplateHttpRedirectRewriteMatchListStruct[] | cdktf.IResolvable) {
    this._matchList.internalValue = value;
  }
  public resetMatchList() {
    this._matchList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchListInput() {
    return this._matchList.internalValue;
  }
}
export interface SlbTemplateHttpRequestHeaderEraseListStruct {
  /**
  * Erase a header from HTTP request (Header Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http#request_header_erase SlbTemplateHttp#request_header_erase}
  */
  readonly requestHeaderErase?: string;
}

export function slbTemplateHttpRequestHeaderEraseListStructToTerraform(struct?: SlbTemplateHttpRequestHeaderEraseListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    request_header_erase: cdktf.stringToTerraform(struct!.requestHeaderErase),
  }
}


export function slbTemplateHttpRequestHeaderEraseListStructToHclTerraform(struct?: SlbTemplateHttpRequestHeaderEraseListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    request_header_erase: {
      value: cdktf.stringToHclTerraform(struct!.requestHeaderErase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplateHttpRequestHeaderEraseListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplateHttpRequestHeaderEraseListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._requestHeaderErase !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestHeaderErase = this._requestHeaderErase;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplateHttpRequestHeaderEraseListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._requestHeaderErase = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._requestHeaderErase = value.requestHeaderErase;
    }
  }

  // request_header_erase - computed: false, optional: true, required: false
  private _requestHeaderErase?: string; 
  public get requestHeaderErase() {
    return this.getStringAttribute('request_header_erase');
  }
  public set requestHeaderErase(value: string) {
    this._requestHeaderErase = value;
  }
  public resetRequestHeaderErase() {
    this._requestHeaderErase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeaderEraseInput() {
    return this._requestHeaderErase;
  }
}

export class SlbTemplateHttpRequestHeaderEraseListStructList extends cdktf.ComplexList {
  public internalValue? : SlbTemplateHttpRequestHeaderEraseListStruct[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplateHttpRequestHeaderEraseListStructOutputReference {
    return new SlbTemplateHttpRequestHeaderEraseListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlbTemplateHttpRequestHeaderInsertListStruct {
  /**
  * Insert a header into HTTP request (Header Content (Format: "[name]:[value]"))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http#request_header_insert SlbTemplateHttp#request_header_insert}
  */
  readonly requestHeaderInsert?: string;
  /**
  * 'insert-if-not-exist': Only insert the header when it does not exist; 'insert-always': Always insert the header even when there is a header with the same name;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http#request_header_insert_type SlbTemplateHttp#request_header_insert_type}
  */
  readonly requestHeaderInsertType?: string;
}

export function slbTemplateHttpRequestHeaderInsertListStructToTerraform(struct?: SlbTemplateHttpRequestHeaderInsertListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    request_header_insert: cdktf.stringToTerraform(struct!.requestHeaderInsert),
    request_header_insert_type: cdktf.stringToTerraform(struct!.requestHeaderInsertType),
  }
}


export function slbTemplateHttpRequestHeaderInsertListStructToHclTerraform(struct?: SlbTemplateHttpRequestHeaderInsertListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    request_header_insert: {
      value: cdktf.stringToHclTerraform(struct!.requestHeaderInsert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    request_header_insert_type: {
      value: cdktf.stringToHclTerraform(struct!.requestHeaderInsertType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplateHttpRequestHeaderInsertListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplateHttpRequestHeaderInsertListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._requestHeaderInsert !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestHeaderInsert = this._requestHeaderInsert;
    }
    if (this._requestHeaderInsertType !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestHeaderInsertType = this._requestHeaderInsertType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplateHttpRequestHeaderInsertListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._requestHeaderInsert = undefined;
      this._requestHeaderInsertType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._requestHeaderInsert = value.requestHeaderInsert;
      this._requestHeaderInsertType = value.requestHeaderInsertType;
    }
  }

  // request_header_insert - computed: false, optional: true, required: false
  private _requestHeaderInsert?: string; 
  public get requestHeaderInsert() {
    return this.getStringAttribute('request_header_insert');
  }
  public set requestHeaderInsert(value: string) {
    this._requestHeaderInsert = value;
  }
  public resetRequestHeaderInsert() {
    this._requestHeaderInsert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeaderInsertInput() {
    return this._requestHeaderInsert;
  }

  // request_header_insert_type - computed: false, optional: true, required: false
  private _requestHeaderInsertType?: string; 
  public get requestHeaderInsertType() {
    return this.getStringAttribute('request_header_insert_type');
  }
  public set requestHeaderInsertType(value: string) {
    this._requestHeaderInsertType = value;
  }
  public resetRequestHeaderInsertType() {
    this._requestHeaderInsertType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeaderInsertTypeInput() {
    return this._requestHeaderInsertType;
  }
}

export class SlbTemplateHttpRequestHeaderInsertListStructList extends cdktf.ComplexList {
  public internalValue? : SlbTemplateHttpRequestHeaderInsertListStruct[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplateHttpRequestHeaderInsertListStructOutputReference {
    return new SlbTemplateHttpRequestHeaderInsertListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlbTemplateHttpResponseContentReplaceListStruct {
  /**
  * replace the data from HTTP response content (String in the http content need to be replaced)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http#response_content_replace SlbTemplateHttp#response_content_replace}
  */
  readonly responseContentReplace?: string;
  /**
  * String will be in the http content
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http#response_new_string SlbTemplateHttp#response_new_string}
  */
  readonly responseNewString?: string;
}

export function slbTemplateHttpResponseContentReplaceListStructToTerraform(struct?: SlbTemplateHttpResponseContentReplaceListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    response_content_replace: cdktf.stringToTerraform(struct!.responseContentReplace),
    response_new_string: cdktf.stringToTerraform(struct!.responseNewString),
  }
}


export function slbTemplateHttpResponseContentReplaceListStructToHclTerraform(struct?: SlbTemplateHttpResponseContentReplaceListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    response_content_replace: {
      value: cdktf.stringToHclTerraform(struct!.responseContentReplace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response_new_string: {
      value: cdktf.stringToHclTerraform(struct!.responseNewString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplateHttpResponseContentReplaceListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplateHttpResponseContentReplaceListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._responseContentReplace !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseContentReplace = this._responseContentReplace;
    }
    if (this._responseNewString !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseNewString = this._responseNewString;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplateHttpResponseContentReplaceListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._responseContentReplace = undefined;
      this._responseNewString = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._responseContentReplace = value.responseContentReplace;
      this._responseNewString = value.responseNewString;
    }
  }

  // response_content_replace - computed: false, optional: true, required: false
  private _responseContentReplace?: string; 
  public get responseContentReplace() {
    return this.getStringAttribute('response_content_replace');
  }
  public set responseContentReplace(value: string) {
    this._responseContentReplace = value;
  }
  public resetResponseContentReplace() {
    this._responseContentReplace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseContentReplaceInput() {
    return this._responseContentReplace;
  }

  // response_new_string - computed: false, optional: true, required: false
  private _responseNewString?: string; 
  public get responseNewString() {
    return this.getStringAttribute('response_new_string');
  }
  public set responseNewString(value: string) {
    this._responseNewString = value;
  }
  public resetResponseNewString() {
    this._responseNewString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseNewStringInput() {
    return this._responseNewString;
  }
}

export class SlbTemplateHttpResponseContentReplaceListStructList extends cdktf.ComplexList {
  public internalValue? : SlbTemplateHttpResponseContentReplaceListStruct[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplateHttpResponseContentReplaceListStructOutputReference {
    return new SlbTemplateHttpResponseContentReplaceListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlbTemplateHttpResponseHeaderEraseListStruct {
  /**
  * Erase a header from HTTP response (Header Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http#response_header_erase SlbTemplateHttp#response_header_erase}
  */
  readonly responseHeaderErase?: string;
}

export function slbTemplateHttpResponseHeaderEraseListStructToTerraform(struct?: SlbTemplateHttpResponseHeaderEraseListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    response_header_erase: cdktf.stringToTerraform(struct!.responseHeaderErase),
  }
}


export function slbTemplateHttpResponseHeaderEraseListStructToHclTerraform(struct?: SlbTemplateHttpResponseHeaderEraseListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    response_header_erase: {
      value: cdktf.stringToHclTerraform(struct!.responseHeaderErase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplateHttpResponseHeaderEraseListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplateHttpResponseHeaderEraseListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._responseHeaderErase !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseHeaderErase = this._responseHeaderErase;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplateHttpResponseHeaderEraseListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._responseHeaderErase = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._responseHeaderErase = value.responseHeaderErase;
    }
  }

  // response_header_erase - computed: false, optional: true, required: false
  private _responseHeaderErase?: string; 
  public get responseHeaderErase() {
    return this.getStringAttribute('response_header_erase');
  }
  public set responseHeaderErase(value: string) {
    this._responseHeaderErase = value;
  }
  public resetResponseHeaderErase() {
    this._responseHeaderErase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseHeaderEraseInput() {
    return this._responseHeaderErase;
  }
}

export class SlbTemplateHttpResponseHeaderEraseListStructList extends cdktf.ComplexList {
  public internalValue? : SlbTemplateHttpResponseHeaderEraseListStruct[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplateHttpResponseHeaderEraseListStructOutputReference {
    return new SlbTemplateHttpResponseHeaderEraseListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlbTemplateHttpResponseHeaderInsertListStruct {
  /**
  * Insert a header into HTTP response (Header Content (Format: "[name]:[value]"))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http#response_header_insert SlbTemplateHttp#response_header_insert}
  */
  readonly responseHeaderInsert?: string;
  /**
  * 'insert-if-not-exist': Only insert the header when it does not exist; 'insert-always': Always insert the header even when there is a header with the same name;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http#response_header_insert_type SlbTemplateHttp#response_header_insert_type}
  */
  readonly responseHeaderInsertType?: string;
}

export function slbTemplateHttpResponseHeaderInsertListStructToTerraform(struct?: SlbTemplateHttpResponseHeaderInsertListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    response_header_insert: cdktf.stringToTerraform(struct!.responseHeaderInsert),
    response_header_insert_type: cdktf.stringToTerraform(struct!.responseHeaderInsertType),
  }
}


export function slbTemplateHttpResponseHeaderInsertListStructToHclTerraform(struct?: SlbTemplateHttpResponseHeaderInsertListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    response_header_insert: {
      value: cdktf.stringToHclTerraform(struct!.responseHeaderInsert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response_header_insert_type: {
      value: cdktf.stringToHclTerraform(struct!.responseHeaderInsertType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplateHttpResponseHeaderInsertListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplateHttpResponseHeaderInsertListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._responseHeaderInsert !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseHeaderInsert = this._responseHeaderInsert;
    }
    if (this._responseHeaderInsertType !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseHeaderInsertType = this._responseHeaderInsertType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplateHttpResponseHeaderInsertListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._responseHeaderInsert = undefined;
      this._responseHeaderInsertType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._responseHeaderInsert = value.responseHeaderInsert;
      this._responseHeaderInsertType = value.responseHeaderInsertType;
    }
  }

  // response_header_insert - computed: false, optional: true, required: false
  private _responseHeaderInsert?: string; 
  public get responseHeaderInsert() {
    return this.getStringAttribute('response_header_insert');
  }
  public set responseHeaderInsert(value: string) {
    this._responseHeaderInsert = value;
  }
  public resetResponseHeaderInsert() {
    this._responseHeaderInsert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseHeaderInsertInput() {
    return this._responseHeaderInsert;
  }

  // response_header_insert_type - computed: false, optional: true, required: false
  private _responseHeaderInsertType?: string; 
  public get responseHeaderInsertType() {
    return this.getStringAttribute('response_header_insert_type');
  }
  public set responseHeaderInsertType(value: string) {
    this._responseHeaderInsertType = value;
  }
  public resetResponseHeaderInsertType() {
    this._responseHeaderInsertType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseHeaderInsertTypeInput() {
    return this._responseHeaderInsertType;
  }
}

export class SlbTemplateHttpResponseHeaderInsertListStructList extends cdktf.ComplexList {
  public internalValue? : SlbTemplateHttpResponseHeaderInsertListStruct[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplateHttpResponseHeaderInsertListStructOutputReference {
    return new SlbTemplateHttpResponseHeaderInsertListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlbTemplateHttpTemplate {
  /**
  * Logging template (Logging Config name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http#logging SlbTemplateHttp#logging}
  */
  readonly logging?: string;
}

export function slbTemplateHttpTemplateToTerraform(struct?: SlbTemplateHttpTemplateOutputReference | SlbTemplateHttpTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    logging: cdktf.stringToTerraform(struct!.logging),
  }
}


export function slbTemplateHttpTemplateToHclTerraform(struct?: SlbTemplateHttpTemplateOutputReference | SlbTemplateHttpTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    logging: {
      value: cdktf.stringToHclTerraform(struct!.logging),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplateHttpTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SlbTemplateHttpTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logging !== undefined) {
      hasAnyValues = true;
      internalValueResult.logging = this._logging;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplateHttpTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._logging = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._logging = value.logging;
    }
  }

  // logging - computed: false, optional: true, required: false
  private _logging?: string; 
  public get logging() {
    return this.getStringAttribute('logging');
  }
  public set logging(value: string) {
    this._logging = value;
  }
  public resetLogging() {
    this._logging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingInput() {
    return this._logging;
  }
}
export interface SlbTemplateHttpUrlSwitching {
  /**
  * URL String
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http#url_match_string SlbTemplateHttp#url_match_string}
  */
  readonly urlMatchString?: string;
  /**
  * Create a Service Group comprising Servers (Service Group Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http#url_service_group SlbTemplateHttp#url_service_group}
  */
  readonly urlServiceGroup?: string;
  /**
  * 'contains': Select service group if URL string contains another string; 'ends-with': Select service group if URL string ends with another string; 'equals': Select service group if URL string equals another string; 'starts-with': Select service group if URL string starts with another string; 'regex-match': Select service group if URL string matches with regular expression; 'url-case-insensitive': Case insensitive URL switching; 'url-hits-enable': Enables URL Hits;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http#url_switching_type SlbTemplateHttp#url_switching_type}
  */
  readonly urlSwitchingType?: string;
}

export function slbTemplateHttpUrlSwitchingToTerraform(struct?: SlbTemplateHttpUrlSwitching | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    url_match_string: cdktf.stringToTerraform(struct!.urlMatchString),
    url_service_group: cdktf.stringToTerraform(struct!.urlServiceGroup),
    url_switching_type: cdktf.stringToTerraform(struct!.urlSwitchingType),
  }
}


export function slbTemplateHttpUrlSwitchingToHclTerraform(struct?: SlbTemplateHttpUrlSwitching | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    url_match_string: {
      value: cdktf.stringToHclTerraform(struct!.urlMatchString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url_service_group: {
      value: cdktf.stringToHclTerraform(struct!.urlServiceGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url_switching_type: {
      value: cdktf.stringToHclTerraform(struct!.urlSwitchingType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplateHttpUrlSwitchingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplateHttpUrlSwitching | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._urlMatchString !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlMatchString = this._urlMatchString;
    }
    if (this._urlServiceGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlServiceGroup = this._urlServiceGroup;
    }
    if (this._urlSwitchingType !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlSwitchingType = this._urlSwitchingType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplateHttpUrlSwitching | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._urlMatchString = undefined;
      this._urlServiceGroup = undefined;
      this._urlSwitchingType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._urlMatchString = value.urlMatchString;
      this._urlServiceGroup = value.urlServiceGroup;
      this._urlSwitchingType = value.urlSwitchingType;
    }
  }

  // url_match_string - computed: false, optional: true, required: false
  private _urlMatchString?: string; 
  public get urlMatchString() {
    return this.getStringAttribute('url_match_string');
  }
  public set urlMatchString(value: string) {
    this._urlMatchString = value;
  }
  public resetUrlMatchString() {
    this._urlMatchString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlMatchStringInput() {
    return this._urlMatchString;
  }

  // url_service_group - computed: false, optional: true, required: false
  private _urlServiceGroup?: string; 
  public get urlServiceGroup() {
    return this.getStringAttribute('url_service_group');
  }
  public set urlServiceGroup(value: string) {
    this._urlServiceGroup = value;
  }
  public resetUrlServiceGroup() {
    this._urlServiceGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlServiceGroupInput() {
    return this._urlServiceGroup;
  }

  // url_switching_type - computed: false, optional: true, required: false
  private _urlSwitchingType?: string; 
  public get urlSwitchingType() {
    return this.getStringAttribute('url_switching_type');
  }
  public set urlSwitchingType(value: string) {
    this._urlSwitchingType = value;
  }
  public resetUrlSwitchingType() {
    this._urlSwitchingType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlSwitchingTypeInput() {
    return this._urlSwitchingType;
  }
}

export class SlbTemplateHttpUrlSwitchingList extends cdktf.ComplexList {
  public internalValue? : SlbTemplateHttpUrlSwitching[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplateHttpUrlSwitchingOutputReference {
    return new SlbTemplateHttpUrlSwitchingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http thunder_slb_template_http}
*/
export class SlbTemplateHttp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_template_http";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SlbTemplateHttp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SlbTemplateHttp to import
  * @param importFromId The id of the existing SlbTemplateHttp that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SlbTemplateHttp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_template_http", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_http thunder_slb_template_http} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SlbTemplateHttpConfig
  */
  public constructor(scope: Construct, id: string, config: SlbTemplateHttpConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_template_http',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2',
        providerVersionConstraint: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowedMethods = config.allowedMethods;
    this._allowedMethodsAction = config.allowedMethodsAction;
    this._bypassSg = config.bypassSg;
    this._clientIdleTimeout = config.clientIdleTimeout;
    this._clientIpHdrReplace = config.clientIpHdrReplace;
    this._clientPortHdrReplace = config.clientPortHdrReplace;
    this._compressionAutoDisableOnHighCpu = config.compressionAutoDisableOnHighCpu;
    this._compressionBrLevel = config.compressionBrLevel;
    this._compressionBrSlidingWindowSize = config.compressionBrSlidingWindowSize;
    this._compressionEnable = config.compressionEnable;
    this._compressionKeepAcceptEncoding = config.compressionKeepAcceptEncoding;
    this._compressionKeepAcceptEncodingEnable = config.compressionKeepAcceptEncodingEnable;
    this._compressionLevel = config.compressionLevel;
    this._compressionMethodOrder = config.compressionMethodOrder;
    this._compressionMinimumContentLength = config.compressionMinimumContentLength;
    this._contWaitForReqComplete100 = config.contWaitForReqComplete100;
    this._cookieFormat = config.cookieFormat;
    this._cookieSamesite = config.cookieSamesite;
    this._defaultCharset = config.defaultCharset;
    this._disallowedMethods = config.disallowedMethods;
    this._disallowedMethodsAction = config.disallowedMethodsAction;
    this._failoverUrl = config.failoverUrl;
    this._frameLimit = config.frameLimit;
    this._http2ClientNoSnat = config.http2ClientNoSnat;
    this._id = config.id;
    this._insertClientIp = config.insertClientIp;
    this._insertClientIpHeaderName = config.insertClientIpHeaderName;
    this._insertClientPort = config.insertClientPort;
    this._insertClientPortHeaderName = config.insertClientPortHeaderName;
    this._keepClientAlive = config.keepClientAlive;
    this._logRetry = config.logRetry;
    this._maxConcurrentStreams = config.maxConcurrentStreams;
    this._name = config.name;
    this._nonHttpBypass = config.nonHttpBypass;
    this._persistOn401 = config.persistOn401;
    this._prefix = config.prefix;
    this._rdPort = config.rdPort;
    this._rdRespCode = config.rdRespCode;
    this._rdSecure = config.rdSecure;
    this._rdSimpleLoc = config.rdSimpleLoc;
    this._redirect = config.redirect;
    this._reqHdrWaitTime = config.reqHdrWaitTime;
    this._reqHdrWaitTimeVal = config.reqHdrWaitTimeVal;
    this._requestLineCaseInsensitive = config.requestLineCaseInsensitive;
    this._requestTimeout = config.requestTimeout;
    this._retryOn5Xx = config.retryOn5Xx;
    this._retryOn5XxPerReq = config.retryOn5XxPerReq;
    this._retryOn5XxPerReqVal = config.retryOn5XxPerReqVal;
    this._retryOn5XxVal = config.retryOn5XxVal;
    this._serverSupportHttp2Only = config.serverSupportHttp2Only;
    this._serverSupportHttp2OnlyValue = config.serverSupportHttp2OnlyValue;
    this._streamCancellationLimit = config.streamCancellationLimit;
    this._streamCancellationRate = config.streamCancellationRate;
    this._strictTransactionSwitch = config.strictTransactionSwitch;
    this._term11ClientHdrConnClose = config.term11ClientHdrConnClose;
    this._urlHashFirst = config.urlHashFirst;
    this._urlHashLast = config.urlHashLast;
    this._urlHashOffset = config.urlHashOffset;
    this._urlHashPersist = config.urlHashPersist;
    this._useServerStatus = config.useServerStatus;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._compressionContentType.internalValue = config.compressionContentType;
    this._compressionExcludeContentType.internalValue = config.compressionExcludeContentType;
    this._compressionExcludeUri.internalValue = config.compressionExcludeUri;
    this._hostSwitching.internalValue = config.hostSwitching;
    this._httpProtocolCheck.internalValue = config.httpProtocolCheck;
    this._redirectRewrite.internalValue = config.redirectRewrite;
    this._requestHeaderEraseList.internalValue = config.requestHeaderEraseList;
    this._requestHeaderInsertList.internalValue = config.requestHeaderInsertList;
    this._responseContentReplaceList.internalValue = config.responseContentReplaceList;
    this._responseHeaderEraseList.internalValue = config.responseHeaderEraseList;
    this._responseHeaderInsertList.internalValue = config.responseHeaderInsertList;
    this._template.internalValue = config.template;
    this._urlSwitching.internalValue = config.urlSwitching;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allowed_methods - computed: false, optional: true, required: false
  private _allowedMethods?: string; 
  public get allowedMethods() {
    return this.getStringAttribute('allowed_methods');
  }
  public set allowedMethods(value: string) {
    this._allowedMethods = value;
  }
  public resetAllowedMethods() {
    this._allowedMethods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedMethodsInput() {
    return this._allowedMethods;
  }

  // allowed_methods_action - computed: false, optional: true, required: false
  private _allowedMethodsAction?: string; 
  public get allowedMethodsAction() {
    return this.getStringAttribute('allowed_methods_action');
  }
  public set allowedMethodsAction(value: string) {
    this._allowedMethodsAction = value;
  }
  public resetAllowedMethodsAction() {
    this._allowedMethodsAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedMethodsActionInput() {
    return this._allowedMethodsAction;
  }

  // bypass_sg - computed: false, optional: true, required: false
  private _bypassSg?: string; 
  public get bypassSg() {
    return this.getStringAttribute('bypass_sg');
  }
  public set bypassSg(value: string) {
    this._bypassSg = value;
  }
  public resetBypassSg() {
    this._bypassSg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassSgInput() {
    return this._bypassSg;
  }

  // client_idle_timeout - computed: false, optional: true, required: false
  private _clientIdleTimeout?: number; 
  public get clientIdleTimeout() {
    return this.getNumberAttribute('client_idle_timeout');
  }
  public set clientIdleTimeout(value: number) {
    this._clientIdleTimeout = value;
  }
  public resetClientIdleTimeout() {
    this._clientIdleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdleTimeoutInput() {
    return this._clientIdleTimeout;
  }

  // client_ip_hdr_replace - computed: false, optional: true, required: false
  private _clientIpHdrReplace?: number; 
  public get clientIpHdrReplace() {
    return this.getNumberAttribute('client_ip_hdr_replace');
  }
  public set clientIpHdrReplace(value: number) {
    this._clientIpHdrReplace = value;
  }
  public resetClientIpHdrReplace() {
    this._clientIpHdrReplace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIpHdrReplaceInput() {
    return this._clientIpHdrReplace;
  }

  // client_port_hdr_replace - computed: false, optional: true, required: false
  private _clientPortHdrReplace?: number; 
  public get clientPortHdrReplace() {
    return this.getNumberAttribute('client_port_hdr_replace');
  }
  public set clientPortHdrReplace(value: number) {
    this._clientPortHdrReplace = value;
  }
  public resetClientPortHdrReplace() {
    this._clientPortHdrReplace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientPortHdrReplaceInput() {
    return this._clientPortHdrReplace;
  }

  // compression_auto_disable_on_high_cpu - computed: false, optional: true, required: false
  private _compressionAutoDisableOnHighCpu?: number; 
  public get compressionAutoDisableOnHighCpu() {
    return this.getNumberAttribute('compression_auto_disable_on_high_cpu');
  }
  public set compressionAutoDisableOnHighCpu(value: number) {
    this._compressionAutoDisableOnHighCpu = value;
  }
  public resetCompressionAutoDisableOnHighCpu() {
    this._compressionAutoDisableOnHighCpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionAutoDisableOnHighCpuInput() {
    return this._compressionAutoDisableOnHighCpu;
  }

  // compression_br_level - computed: false, optional: true, required: false
  private _compressionBrLevel?: number; 
  public get compressionBrLevel() {
    return this.getNumberAttribute('compression_br_level');
  }
  public set compressionBrLevel(value: number) {
    this._compressionBrLevel = value;
  }
  public resetCompressionBrLevel() {
    this._compressionBrLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionBrLevelInput() {
    return this._compressionBrLevel;
  }

  // compression_br_sliding_window_size - computed: false, optional: true, required: false
  private _compressionBrSlidingWindowSize?: number; 
  public get compressionBrSlidingWindowSize() {
    return this.getNumberAttribute('compression_br_sliding_window_size');
  }
  public set compressionBrSlidingWindowSize(value: number) {
    this._compressionBrSlidingWindowSize = value;
  }
  public resetCompressionBrSlidingWindowSize() {
    this._compressionBrSlidingWindowSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionBrSlidingWindowSizeInput() {
    return this._compressionBrSlidingWindowSize;
  }

  // compression_enable - computed: false, optional: true, required: false
  private _compressionEnable?: number; 
  public get compressionEnable() {
    return this.getNumberAttribute('compression_enable');
  }
  public set compressionEnable(value: number) {
    this._compressionEnable = value;
  }
  public resetCompressionEnable() {
    this._compressionEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionEnableInput() {
    return this._compressionEnable;
  }

  // compression_keep_accept_encoding - computed: false, optional: true, required: false
  private _compressionKeepAcceptEncoding?: number; 
  public get compressionKeepAcceptEncoding() {
    return this.getNumberAttribute('compression_keep_accept_encoding');
  }
  public set compressionKeepAcceptEncoding(value: number) {
    this._compressionKeepAcceptEncoding = value;
  }
  public resetCompressionKeepAcceptEncoding() {
    this._compressionKeepAcceptEncoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionKeepAcceptEncodingInput() {
    return this._compressionKeepAcceptEncoding;
  }

  // compression_keep_accept_encoding_enable - computed: false, optional: true, required: false
  private _compressionKeepAcceptEncodingEnable?: number; 
  public get compressionKeepAcceptEncodingEnable() {
    return this.getNumberAttribute('compression_keep_accept_encoding_enable');
  }
  public set compressionKeepAcceptEncodingEnable(value: number) {
    this._compressionKeepAcceptEncodingEnable = value;
  }
  public resetCompressionKeepAcceptEncodingEnable() {
    this._compressionKeepAcceptEncodingEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionKeepAcceptEncodingEnableInput() {
    return this._compressionKeepAcceptEncodingEnable;
  }

  // compression_level - computed: false, optional: true, required: false
  private _compressionLevel?: number; 
  public get compressionLevel() {
    return this.getNumberAttribute('compression_level');
  }
  public set compressionLevel(value: number) {
    this._compressionLevel = value;
  }
  public resetCompressionLevel() {
    this._compressionLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionLevelInput() {
    return this._compressionLevel;
  }

  // compression_method_order - computed: false, optional: true, required: false
  private _compressionMethodOrder?: string; 
  public get compressionMethodOrder() {
    return this.getStringAttribute('compression_method_order');
  }
  public set compressionMethodOrder(value: string) {
    this._compressionMethodOrder = value;
  }
  public resetCompressionMethodOrder() {
    this._compressionMethodOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionMethodOrderInput() {
    return this._compressionMethodOrder;
  }

  // compression_minimum_content_length - computed: false, optional: true, required: false
  private _compressionMinimumContentLength?: number; 
  public get compressionMinimumContentLength() {
    return this.getNumberAttribute('compression_minimum_content_length');
  }
  public set compressionMinimumContentLength(value: number) {
    this._compressionMinimumContentLength = value;
  }
  public resetCompressionMinimumContentLength() {
    this._compressionMinimumContentLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionMinimumContentLengthInput() {
    return this._compressionMinimumContentLength;
  }

  // cont_wait_for_req_complete100 - computed: false, optional: true, required: false
  private _contWaitForReqComplete100?: number; 
  public get contWaitForReqComplete100() {
    return this.getNumberAttribute('cont_wait_for_req_complete100');
  }
  public set contWaitForReqComplete100(value: number) {
    this._contWaitForReqComplete100 = value;
  }
  public resetContWaitForReqComplete100() {
    this._contWaitForReqComplete100 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contWaitForReqComplete100Input() {
    return this._contWaitForReqComplete100;
  }

  // cookie_format - computed: false, optional: true, required: false
  private _cookieFormat?: string; 
  public get cookieFormat() {
    return this.getStringAttribute('cookie_format');
  }
  public set cookieFormat(value: string) {
    this._cookieFormat = value;
  }
  public resetCookieFormat() {
    this._cookieFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieFormatInput() {
    return this._cookieFormat;
  }

  // cookie_samesite - computed: false, optional: true, required: false
  private _cookieSamesite?: string; 
  public get cookieSamesite() {
    return this.getStringAttribute('cookie_samesite');
  }
  public set cookieSamesite(value: string) {
    this._cookieSamesite = value;
  }
  public resetCookieSamesite() {
    this._cookieSamesite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieSamesiteInput() {
    return this._cookieSamesite;
  }

  // default_charset - computed: false, optional: true, required: false
  private _defaultCharset?: string; 
  public get defaultCharset() {
    return this.getStringAttribute('default_charset');
  }
  public set defaultCharset(value: string) {
    this._defaultCharset = value;
  }
  public resetDefaultCharset() {
    this._defaultCharset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultCharsetInput() {
    return this._defaultCharset;
  }

  // disallowed_methods - computed: false, optional: true, required: false
  private _disallowedMethods?: string; 
  public get disallowedMethods() {
    return this.getStringAttribute('disallowed_methods');
  }
  public set disallowedMethods(value: string) {
    this._disallowedMethods = value;
  }
  public resetDisallowedMethods() {
    this._disallowedMethods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disallowedMethodsInput() {
    return this._disallowedMethods;
  }

  // disallowed_methods_action - computed: false, optional: true, required: false
  private _disallowedMethodsAction?: string; 
  public get disallowedMethodsAction() {
    return this.getStringAttribute('disallowed_methods_action');
  }
  public set disallowedMethodsAction(value: string) {
    this._disallowedMethodsAction = value;
  }
  public resetDisallowedMethodsAction() {
    this._disallowedMethodsAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disallowedMethodsActionInput() {
    return this._disallowedMethodsAction;
  }

  // failover_url - computed: false, optional: true, required: false
  private _failoverUrl?: string; 
  public get failoverUrl() {
    return this.getStringAttribute('failover_url');
  }
  public set failoverUrl(value: string) {
    this._failoverUrl = value;
  }
  public resetFailoverUrl() {
    this._failoverUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failoverUrlInput() {
    return this._failoverUrl;
  }

  // frame_limit - computed: false, optional: true, required: false
  private _frameLimit?: number; 
  public get frameLimit() {
    return this.getNumberAttribute('frame_limit');
  }
  public set frameLimit(value: number) {
    this._frameLimit = value;
  }
  public resetFrameLimit() {
    this._frameLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frameLimitInput() {
    return this._frameLimit;
  }

  // http2_client_no_snat - computed: false, optional: true, required: false
  private _http2ClientNoSnat?: number; 
  public get http2ClientNoSnat() {
    return this.getNumberAttribute('http2_client_no_snat');
  }
  public set http2ClientNoSnat(value: number) {
    this._http2ClientNoSnat = value;
  }
  public resetHttp2ClientNoSnat() {
    this._http2ClientNoSnat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http2ClientNoSnatInput() {
    return this._http2ClientNoSnat;
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

  // insert_client_ip - computed: false, optional: true, required: false
  private _insertClientIp?: number; 
  public get insertClientIp() {
    return this.getNumberAttribute('insert_client_ip');
  }
  public set insertClientIp(value: number) {
    this._insertClientIp = value;
  }
  public resetInsertClientIp() {
    this._insertClientIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertClientIpInput() {
    return this._insertClientIp;
  }

  // insert_client_ip_header_name - computed: false, optional: true, required: false
  private _insertClientIpHeaderName?: string; 
  public get insertClientIpHeaderName() {
    return this.getStringAttribute('insert_client_ip_header_name');
  }
  public set insertClientIpHeaderName(value: string) {
    this._insertClientIpHeaderName = value;
  }
  public resetInsertClientIpHeaderName() {
    this._insertClientIpHeaderName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertClientIpHeaderNameInput() {
    return this._insertClientIpHeaderName;
  }

  // insert_client_port - computed: false, optional: true, required: false
  private _insertClientPort?: number; 
  public get insertClientPort() {
    return this.getNumberAttribute('insert_client_port');
  }
  public set insertClientPort(value: number) {
    this._insertClientPort = value;
  }
  public resetInsertClientPort() {
    this._insertClientPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertClientPortInput() {
    return this._insertClientPort;
  }

  // insert_client_port_header_name - computed: false, optional: true, required: false
  private _insertClientPortHeaderName?: string; 
  public get insertClientPortHeaderName() {
    return this.getStringAttribute('insert_client_port_header_name');
  }
  public set insertClientPortHeaderName(value: string) {
    this._insertClientPortHeaderName = value;
  }
  public resetInsertClientPortHeaderName() {
    this._insertClientPortHeaderName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertClientPortHeaderNameInput() {
    return this._insertClientPortHeaderName;
  }

  // keep_client_alive - computed: false, optional: true, required: false
  private _keepClientAlive?: number; 
  public get keepClientAlive() {
    return this.getNumberAttribute('keep_client_alive');
  }
  public set keepClientAlive(value: number) {
    this._keepClientAlive = value;
  }
  public resetKeepClientAlive() {
    this._keepClientAlive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepClientAliveInput() {
    return this._keepClientAlive;
  }

  // log_retry - computed: false, optional: true, required: false
  private _logRetry?: number; 
  public get logRetry() {
    return this.getNumberAttribute('log_retry');
  }
  public set logRetry(value: number) {
    this._logRetry = value;
  }
  public resetLogRetry() {
    this._logRetry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logRetryInput() {
    return this._logRetry;
  }

  // max_concurrent_streams - computed: false, optional: true, required: false
  private _maxConcurrentStreams?: number; 
  public get maxConcurrentStreams() {
    return this.getNumberAttribute('max_concurrent_streams');
  }
  public set maxConcurrentStreams(value: number) {
    this._maxConcurrentStreams = value;
  }
  public resetMaxConcurrentStreams() {
    this._maxConcurrentStreams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConcurrentStreamsInput() {
    return this._maxConcurrentStreams;
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

  // non_http_bypass - computed: false, optional: true, required: false
  private _nonHttpBypass?: number; 
  public get nonHttpBypass() {
    return this.getNumberAttribute('non_http_bypass');
  }
  public set nonHttpBypass(value: number) {
    this._nonHttpBypass = value;
  }
  public resetNonHttpBypass() {
    this._nonHttpBypass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonHttpBypassInput() {
    return this._nonHttpBypass;
  }

  // persist_on_401 - computed: false, optional: true, required: false
  private _persistOn401?: number; 
  public get persistOn401() {
    return this.getNumberAttribute('persist_on_401');
  }
  public set persistOn401(value: number) {
    this._persistOn401 = value;
  }
  public resetPersistOn401() {
    this._persistOn401 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistOn401Input() {
    return this._persistOn401;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // rd_port - computed: false, optional: true, required: false
  private _rdPort?: number; 
  public get rdPort() {
    return this.getNumberAttribute('rd_port');
  }
  public set rdPort(value: number) {
    this._rdPort = value;
  }
  public resetRdPort() {
    this._rdPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdPortInput() {
    return this._rdPort;
  }

  // rd_resp_code - computed: false, optional: true, required: false
  private _rdRespCode?: string; 
  public get rdRespCode() {
    return this.getStringAttribute('rd_resp_code');
  }
  public set rdRespCode(value: string) {
    this._rdRespCode = value;
  }
  public resetRdRespCode() {
    this._rdRespCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdRespCodeInput() {
    return this._rdRespCode;
  }

  // rd_secure - computed: false, optional: true, required: false
  private _rdSecure?: number; 
  public get rdSecure() {
    return this.getNumberAttribute('rd_secure');
  }
  public set rdSecure(value: number) {
    this._rdSecure = value;
  }
  public resetRdSecure() {
    this._rdSecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdSecureInput() {
    return this._rdSecure;
  }

  // rd_simple_loc - computed: false, optional: true, required: false
  private _rdSimpleLoc?: string; 
  public get rdSimpleLoc() {
    return this.getStringAttribute('rd_simple_loc');
  }
  public set rdSimpleLoc(value: string) {
    this._rdSimpleLoc = value;
  }
  public resetRdSimpleLoc() {
    this._rdSimpleLoc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdSimpleLocInput() {
    return this._rdSimpleLoc;
  }

  // redirect - computed: false, optional: true, required: false
  private _redirect?: number; 
  public get redirect() {
    return this.getNumberAttribute('redirect');
  }
  public set redirect(value: number) {
    this._redirect = value;
  }
  public resetRedirect() {
    this._redirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectInput() {
    return this._redirect;
  }

  // req_hdr_wait_time - computed: false, optional: true, required: false
  private _reqHdrWaitTime?: number; 
  public get reqHdrWaitTime() {
    return this.getNumberAttribute('req_hdr_wait_time');
  }
  public set reqHdrWaitTime(value: number) {
    this._reqHdrWaitTime = value;
  }
  public resetReqHdrWaitTime() {
    this._reqHdrWaitTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqHdrWaitTimeInput() {
    return this._reqHdrWaitTime;
  }

  // req_hdr_wait_time_val - computed: false, optional: true, required: false
  private _reqHdrWaitTimeVal?: number; 
  public get reqHdrWaitTimeVal() {
    return this.getNumberAttribute('req_hdr_wait_time_val');
  }
  public set reqHdrWaitTimeVal(value: number) {
    this._reqHdrWaitTimeVal = value;
  }
  public resetReqHdrWaitTimeVal() {
    this._reqHdrWaitTimeVal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqHdrWaitTimeValInput() {
    return this._reqHdrWaitTimeVal;
  }

  // request_line_case_insensitive - computed: false, optional: true, required: false
  private _requestLineCaseInsensitive?: number; 
  public get requestLineCaseInsensitive() {
    return this.getNumberAttribute('request_line_case_insensitive');
  }
  public set requestLineCaseInsensitive(value: number) {
    this._requestLineCaseInsensitive = value;
  }
  public resetRequestLineCaseInsensitive() {
    this._requestLineCaseInsensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestLineCaseInsensitiveInput() {
    return this._requestLineCaseInsensitive;
  }

  // request_timeout - computed: false, optional: true, required: false
  private _requestTimeout?: number; 
  public get requestTimeout() {
    return this.getNumberAttribute('request_timeout');
  }
  public set requestTimeout(value: number) {
    this._requestTimeout = value;
  }
  public resetRequestTimeout() {
    this._requestTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestTimeoutInput() {
    return this._requestTimeout;
  }

  // retry_on_5xx - computed: false, optional: true, required: false
  private _retryOn5Xx?: number; 
  public get retryOn5Xx() {
    return this.getNumberAttribute('retry_on_5xx');
  }
  public set retryOn5Xx(value: number) {
    this._retryOn5Xx = value;
  }
  public resetRetryOn5Xx() {
    this._retryOn5Xx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryOn5XxInput() {
    return this._retryOn5Xx;
  }

  // retry_on_5xx_per_req - computed: false, optional: true, required: false
  private _retryOn5XxPerReq?: number; 
  public get retryOn5XxPerReq() {
    return this.getNumberAttribute('retry_on_5xx_per_req');
  }
  public set retryOn5XxPerReq(value: number) {
    this._retryOn5XxPerReq = value;
  }
  public resetRetryOn5XxPerReq() {
    this._retryOn5XxPerReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryOn5XxPerReqInput() {
    return this._retryOn5XxPerReq;
  }

  // retry_on_5xx_per_req_val - computed: false, optional: true, required: false
  private _retryOn5XxPerReqVal?: number; 
  public get retryOn5XxPerReqVal() {
    return this.getNumberAttribute('retry_on_5xx_per_req_val');
  }
  public set retryOn5XxPerReqVal(value: number) {
    this._retryOn5XxPerReqVal = value;
  }
  public resetRetryOn5XxPerReqVal() {
    this._retryOn5XxPerReqVal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryOn5XxPerReqValInput() {
    return this._retryOn5XxPerReqVal;
  }

  // retry_on_5xx_val - computed: false, optional: true, required: false
  private _retryOn5XxVal?: number; 
  public get retryOn5XxVal() {
    return this.getNumberAttribute('retry_on_5xx_val');
  }
  public set retryOn5XxVal(value: number) {
    this._retryOn5XxVal = value;
  }
  public resetRetryOn5XxVal() {
    this._retryOn5XxVal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryOn5XxValInput() {
    return this._retryOn5XxVal;
  }

  // server_support_http2_only - computed: false, optional: true, required: false
  private _serverSupportHttp2Only?: number; 
  public get serverSupportHttp2Only() {
    return this.getNumberAttribute('server_support_http2_only');
  }
  public set serverSupportHttp2Only(value: number) {
    this._serverSupportHttp2Only = value;
  }
  public resetServerSupportHttp2Only() {
    this._serverSupportHttp2Only = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverSupportHttp2OnlyInput() {
    return this._serverSupportHttp2Only;
  }

  // server_support_http2_only_value - computed: false, optional: true, required: false
  private _serverSupportHttp2OnlyValue?: string; 
  public get serverSupportHttp2OnlyValue() {
    return this.getStringAttribute('server_support_http2_only_value');
  }
  public set serverSupportHttp2OnlyValue(value: string) {
    this._serverSupportHttp2OnlyValue = value;
  }
  public resetServerSupportHttp2OnlyValue() {
    this._serverSupportHttp2OnlyValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverSupportHttp2OnlyValueInput() {
    return this._serverSupportHttp2OnlyValue;
  }

  // stream_cancellation_limit - computed: false, optional: true, required: false
  private _streamCancellationLimit?: number; 
  public get streamCancellationLimit() {
    return this.getNumberAttribute('stream_cancellation_limit');
  }
  public set streamCancellationLimit(value: number) {
    this._streamCancellationLimit = value;
  }
  public resetStreamCancellationLimit() {
    this._streamCancellationLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamCancellationLimitInput() {
    return this._streamCancellationLimit;
  }

  // stream_cancellation_rate - computed: false, optional: true, required: false
  private _streamCancellationRate?: number; 
  public get streamCancellationRate() {
    return this.getNumberAttribute('stream_cancellation_rate');
  }
  public set streamCancellationRate(value: number) {
    this._streamCancellationRate = value;
  }
  public resetStreamCancellationRate() {
    this._streamCancellationRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamCancellationRateInput() {
    return this._streamCancellationRate;
  }

  // strict_transaction_switch - computed: false, optional: true, required: false
  private _strictTransactionSwitch?: number; 
  public get strictTransactionSwitch() {
    return this.getNumberAttribute('strict_transaction_switch');
  }
  public set strictTransactionSwitch(value: number) {
    this._strictTransactionSwitch = value;
  }
  public resetStrictTransactionSwitch() {
    this._strictTransactionSwitch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strictTransactionSwitchInput() {
    return this._strictTransactionSwitch;
  }

  // term_11client_hdr_conn_close - computed: false, optional: true, required: false
  private _term11ClientHdrConnClose?: number; 
  public get term11ClientHdrConnClose() {
    return this.getNumberAttribute('term_11client_hdr_conn_close');
  }
  public set term11ClientHdrConnClose(value: number) {
    this._term11ClientHdrConnClose = value;
  }
  public resetTerm11ClientHdrConnClose() {
    this._term11ClientHdrConnClose = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get term11ClientHdrConnCloseInput() {
    return this._term11ClientHdrConnClose;
  }

  // url_hash_first - computed: false, optional: true, required: false
  private _urlHashFirst?: number; 
  public get urlHashFirst() {
    return this.getNumberAttribute('url_hash_first');
  }
  public set urlHashFirst(value: number) {
    this._urlHashFirst = value;
  }
  public resetUrlHashFirst() {
    this._urlHashFirst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlHashFirstInput() {
    return this._urlHashFirst;
  }

  // url_hash_last - computed: false, optional: true, required: false
  private _urlHashLast?: number; 
  public get urlHashLast() {
    return this.getNumberAttribute('url_hash_last');
  }
  public set urlHashLast(value: number) {
    this._urlHashLast = value;
  }
  public resetUrlHashLast() {
    this._urlHashLast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlHashLastInput() {
    return this._urlHashLast;
  }

  // url_hash_offset - computed: false, optional: true, required: false
  private _urlHashOffset?: number; 
  public get urlHashOffset() {
    return this.getNumberAttribute('url_hash_offset');
  }
  public set urlHashOffset(value: number) {
    this._urlHashOffset = value;
  }
  public resetUrlHashOffset() {
    this._urlHashOffset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlHashOffsetInput() {
    return this._urlHashOffset;
  }

  // url_hash_persist - computed: false, optional: true, required: false
  private _urlHashPersist?: number; 
  public get urlHashPersist() {
    return this.getNumberAttribute('url_hash_persist');
  }
  public set urlHashPersist(value: number) {
    this._urlHashPersist = value;
  }
  public resetUrlHashPersist() {
    this._urlHashPersist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlHashPersistInput() {
    return this._urlHashPersist;
  }

  // use_server_status - computed: false, optional: true, required: false
  private _useServerStatus?: number; 
  public get useServerStatus() {
    return this.getNumberAttribute('use_server_status');
  }
  public set useServerStatus(value: number) {
    this._useServerStatus = value;
  }
  public resetUseServerStatus() {
    this._useServerStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useServerStatusInput() {
    return this._useServerStatus;
  }

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
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

  // compression_content_type - computed: false, optional: true, required: false
  private _compressionContentType = new SlbTemplateHttpCompressionContentTypeList(this, "compression_content_type", false);
  public get compressionContentType() {
    return this._compressionContentType;
  }
  public putCompressionContentType(value: SlbTemplateHttpCompressionContentType[] | cdktf.IResolvable) {
    this._compressionContentType.internalValue = value;
  }
  public resetCompressionContentType() {
    this._compressionContentType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionContentTypeInput() {
    return this._compressionContentType.internalValue;
  }

  // compression_exclude_content_type - computed: false, optional: true, required: false
  private _compressionExcludeContentType = new SlbTemplateHttpCompressionExcludeContentTypeList(this, "compression_exclude_content_type", false);
  public get compressionExcludeContentType() {
    return this._compressionExcludeContentType;
  }
  public putCompressionExcludeContentType(value: SlbTemplateHttpCompressionExcludeContentType[] | cdktf.IResolvable) {
    this._compressionExcludeContentType.internalValue = value;
  }
  public resetCompressionExcludeContentType() {
    this._compressionExcludeContentType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionExcludeContentTypeInput() {
    return this._compressionExcludeContentType.internalValue;
  }

  // compression_exclude_uri - computed: false, optional: true, required: false
  private _compressionExcludeUri = new SlbTemplateHttpCompressionExcludeUriList(this, "compression_exclude_uri", false);
  public get compressionExcludeUri() {
    return this._compressionExcludeUri;
  }
  public putCompressionExcludeUri(value: SlbTemplateHttpCompressionExcludeUri[] | cdktf.IResolvable) {
    this._compressionExcludeUri.internalValue = value;
  }
  public resetCompressionExcludeUri() {
    this._compressionExcludeUri.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionExcludeUriInput() {
    return this._compressionExcludeUri.internalValue;
  }

  // host_switching - computed: false, optional: true, required: false
  private _hostSwitching = new SlbTemplateHttpHostSwitchingList(this, "host_switching", false);
  public get hostSwitching() {
    return this._hostSwitching;
  }
  public putHostSwitching(value: SlbTemplateHttpHostSwitching[] | cdktf.IResolvable) {
    this._hostSwitching.internalValue = value;
  }
  public resetHostSwitching() {
    this._hostSwitching.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostSwitchingInput() {
    return this._hostSwitching.internalValue;
  }

  // http_protocol_check - computed: false, optional: true, required: false
  private _httpProtocolCheck = new SlbTemplateHttpHttpProtocolCheckOutputReference(this, "http_protocol_check");
  public get httpProtocolCheck() {
    return this._httpProtocolCheck;
  }
  public putHttpProtocolCheck(value: SlbTemplateHttpHttpProtocolCheck) {
    this._httpProtocolCheck.internalValue = value;
  }
  public resetHttpProtocolCheck() {
    this._httpProtocolCheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpProtocolCheckInput() {
    return this._httpProtocolCheck.internalValue;
  }

  // redirect_rewrite - computed: false, optional: true, required: false
  private _redirectRewrite = new SlbTemplateHttpRedirectRewriteOutputReference(this, "redirect_rewrite");
  public get redirectRewrite() {
    return this._redirectRewrite;
  }
  public putRedirectRewrite(value: SlbTemplateHttpRedirectRewrite) {
    this._redirectRewrite.internalValue = value;
  }
  public resetRedirectRewrite() {
    this._redirectRewrite.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectRewriteInput() {
    return this._redirectRewrite.internalValue;
  }

  // request_header_erase_list - computed: false, optional: true, required: false
  private _requestHeaderEraseList = new SlbTemplateHttpRequestHeaderEraseListStructList(this, "request_header_erase_list", false);
  public get requestHeaderEraseList() {
    return this._requestHeaderEraseList;
  }
  public putRequestHeaderEraseList(value: SlbTemplateHttpRequestHeaderEraseListStruct[] | cdktf.IResolvable) {
    this._requestHeaderEraseList.internalValue = value;
  }
  public resetRequestHeaderEraseList() {
    this._requestHeaderEraseList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeaderEraseListInput() {
    return this._requestHeaderEraseList.internalValue;
  }

  // request_header_insert_list - computed: false, optional: true, required: false
  private _requestHeaderInsertList = new SlbTemplateHttpRequestHeaderInsertListStructList(this, "request_header_insert_list", false);
  public get requestHeaderInsertList() {
    return this._requestHeaderInsertList;
  }
  public putRequestHeaderInsertList(value: SlbTemplateHttpRequestHeaderInsertListStruct[] | cdktf.IResolvable) {
    this._requestHeaderInsertList.internalValue = value;
  }
  public resetRequestHeaderInsertList() {
    this._requestHeaderInsertList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeaderInsertListInput() {
    return this._requestHeaderInsertList.internalValue;
  }

  // response_content_replace_list - computed: false, optional: true, required: false
  private _responseContentReplaceList = new SlbTemplateHttpResponseContentReplaceListStructList(this, "response_content_replace_list", false);
  public get responseContentReplaceList() {
    return this._responseContentReplaceList;
  }
  public putResponseContentReplaceList(value: SlbTemplateHttpResponseContentReplaceListStruct[] | cdktf.IResolvable) {
    this._responseContentReplaceList.internalValue = value;
  }
  public resetResponseContentReplaceList() {
    this._responseContentReplaceList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseContentReplaceListInput() {
    return this._responseContentReplaceList.internalValue;
  }

  // response_header_erase_list - computed: false, optional: true, required: false
  private _responseHeaderEraseList = new SlbTemplateHttpResponseHeaderEraseListStructList(this, "response_header_erase_list", false);
  public get responseHeaderEraseList() {
    return this._responseHeaderEraseList;
  }
  public putResponseHeaderEraseList(value: SlbTemplateHttpResponseHeaderEraseListStruct[] | cdktf.IResolvable) {
    this._responseHeaderEraseList.internalValue = value;
  }
  public resetResponseHeaderEraseList() {
    this._responseHeaderEraseList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseHeaderEraseListInput() {
    return this._responseHeaderEraseList.internalValue;
  }

  // response_header_insert_list - computed: false, optional: true, required: false
  private _responseHeaderInsertList = new SlbTemplateHttpResponseHeaderInsertListStructList(this, "response_header_insert_list", false);
  public get responseHeaderInsertList() {
    return this._responseHeaderInsertList;
  }
  public putResponseHeaderInsertList(value: SlbTemplateHttpResponseHeaderInsertListStruct[] | cdktf.IResolvable) {
    this._responseHeaderInsertList.internalValue = value;
  }
  public resetResponseHeaderInsertList() {
    this._responseHeaderInsertList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseHeaderInsertListInput() {
    return this._responseHeaderInsertList.internalValue;
  }

  // template - computed: false, optional: true, required: false
  private _template = new SlbTemplateHttpTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: SlbTemplateHttpTemplate) {
    this._template.internalValue = value;
  }
  public resetTemplate() {
    this._template.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template.internalValue;
  }

  // url_switching - computed: false, optional: true, required: false
  private _urlSwitching = new SlbTemplateHttpUrlSwitchingList(this, "url_switching", false);
  public get urlSwitching() {
    return this._urlSwitching;
  }
  public putUrlSwitching(value: SlbTemplateHttpUrlSwitching[] | cdktf.IResolvable) {
    this._urlSwitching.internalValue = value;
  }
  public resetUrlSwitching() {
    this._urlSwitching.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlSwitchingInput() {
    return this._urlSwitching.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allowed_methods: cdktf.stringToTerraform(this._allowedMethods),
      allowed_methods_action: cdktf.stringToTerraform(this._allowedMethodsAction),
      bypass_sg: cdktf.stringToTerraform(this._bypassSg),
      client_idle_timeout: cdktf.numberToTerraform(this._clientIdleTimeout),
      client_ip_hdr_replace: cdktf.numberToTerraform(this._clientIpHdrReplace),
      client_port_hdr_replace: cdktf.numberToTerraform(this._clientPortHdrReplace),
      compression_auto_disable_on_high_cpu: cdktf.numberToTerraform(this._compressionAutoDisableOnHighCpu),
      compression_br_level: cdktf.numberToTerraform(this._compressionBrLevel),
      compression_br_sliding_window_size: cdktf.numberToTerraform(this._compressionBrSlidingWindowSize),
      compression_enable: cdktf.numberToTerraform(this._compressionEnable),
      compression_keep_accept_encoding: cdktf.numberToTerraform(this._compressionKeepAcceptEncoding),
      compression_keep_accept_encoding_enable: cdktf.numberToTerraform(this._compressionKeepAcceptEncodingEnable),
      compression_level: cdktf.numberToTerraform(this._compressionLevel),
      compression_method_order: cdktf.stringToTerraform(this._compressionMethodOrder),
      compression_minimum_content_length: cdktf.numberToTerraform(this._compressionMinimumContentLength),
      cont_wait_for_req_complete100: cdktf.numberToTerraform(this._contWaitForReqComplete100),
      cookie_format: cdktf.stringToTerraform(this._cookieFormat),
      cookie_samesite: cdktf.stringToTerraform(this._cookieSamesite),
      default_charset: cdktf.stringToTerraform(this._defaultCharset),
      disallowed_methods: cdktf.stringToTerraform(this._disallowedMethods),
      disallowed_methods_action: cdktf.stringToTerraform(this._disallowedMethodsAction),
      failover_url: cdktf.stringToTerraform(this._failoverUrl),
      frame_limit: cdktf.numberToTerraform(this._frameLimit),
      http2_client_no_snat: cdktf.numberToTerraform(this._http2ClientNoSnat),
      id: cdktf.stringToTerraform(this._id),
      insert_client_ip: cdktf.numberToTerraform(this._insertClientIp),
      insert_client_ip_header_name: cdktf.stringToTerraform(this._insertClientIpHeaderName),
      insert_client_port: cdktf.numberToTerraform(this._insertClientPort),
      insert_client_port_header_name: cdktf.stringToTerraform(this._insertClientPortHeaderName),
      keep_client_alive: cdktf.numberToTerraform(this._keepClientAlive),
      log_retry: cdktf.numberToTerraform(this._logRetry),
      max_concurrent_streams: cdktf.numberToTerraform(this._maxConcurrentStreams),
      name: cdktf.stringToTerraform(this._name),
      non_http_bypass: cdktf.numberToTerraform(this._nonHttpBypass),
      persist_on_401: cdktf.numberToTerraform(this._persistOn401),
      prefix: cdktf.stringToTerraform(this._prefix),
      rd_port: cdktf.numberToTerraform(this._rdPort),
      rd_resp_code: cdktf.stringToTerraform(this._rdRespCode),
      rd_secure: cdktf.numberToTerraform(this._rdSecure),
      rd_simple_loc: cdktf.stringToTerraform(this._rdSimpleLoc),
      redirect: cdktf.numberToTerraform(this._redirect),
      req_hdr_wait_time: cdktf.numberToTerraform(this._reqHdrWaitTime),
      req_hdr_wait_time_val: cdktf.numberToTerraform(this._reqHdrWaitTimeVal),
      request_line_case_insensitive: cdktf.numberToTerraform(this._requestLineCaseInsensitive),
      request_timeout: cdktf.numberToTerraform(this._requestTimeout),
      retry_on_5xx: cdktf.numberToTerraform(this._retryOn5Xx),
      retry_on_5xx_per_req: cdktf.numberToTerraform(this._retryOn5XxPerReq),
      retry_on_5xx_per_req_val: cdktf.numberToTerraform(this._retryOn5XxPerReqVal),
      retry_on_5xx_val: cdktf.numberToTerraform(this._retryOn5XxVal),
      server_support_http2_only: cdktf.numberToTerraform(this._serverSupportHttp2Only),
      server_support_http2_only_value: cdktf.stringToTerraform(this._serverSupportHttp2OnlyValue),
      stream_cancellation_limit: cdktf.numberToTerraform(this._streamCancellationLimit),
      stream_cancellation_rate: cdktf.numberToTerraform(this._streamCancellationRate),
      strict_transaction_switch: cdktf.numberToTerraform(this._strictTransactionSwitch),
      term_11client_hdr_conn_close: cdktf.numberToTerraform(this._term11ClientHdrConnClose),
      url_hash_first: cdktf.numberToTerraform(this._urlHashFirst),
      url_hash_last: cdktf.numberToTerraform(this._urlHashLast),
      url_hash_offset: cdktf.numberToTerraform(this._urlHashOffset),
      url_hash_persist: cdktf.numberToTerraform(this._urlHashPersist),
      use_server_status: cdktf.numberToTerraform(this._useServerStatus),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      compression_content_type: cdktf.listMapper(slbTemplateHttpCompressionContentTypeToTerraform, true)(this._compressionContentType.internalValue),
      compression_exclude_content_type: cdktf.listMapper(slbTemplateHttpCompressionExcludeContentTypeToTerraform, true)(this._compressionExcludeContentType.internalValue),
      compression_exclude_uri: cdktf.listMapper(slbTemplateHttpCompressionExcludeUriToTerraform, true)(this._compressionExcludeUri.internalValue),
      host_switching: cdktf.listMapper(slbTemplateHttpHostSwitchingToTerraform, true)(this._hostSwitching.internalValue),
      http_protocol_check: slbTemplateHttpHttpProtocolCheckToTerraform(this._httpProtocolCheck.internalValue),
      redirect_rewrite: slbTemplateHttpRedirectRewriteToTerraform(this._redirectRewrite.internalValue),
      request_header_erase_list: cdktf.listMapper(slbTemplateHttpRequestHeaderEraseListStructToTerraform, true)(this._requestHeaderEraseList.internalValue),
      request_header_insert_list: cdktf.listMapper(slbTemplateHttpRequestHeaderInsertListStructToTerraform, true)(this._requestHeaderInsertList.internalValue),
      response_content_replace_list: cdktf.listMapper(slbTemplateHttpResponseContentReplaceListStructToTerraform, true)(this._responseContentReplaceList.internalValue),
      response_header_erase_list: cdktf.listMapper(slbTemplateHttpResponseHeaderEraseListStructToTerraform, true)(this._responseHeaderEraseList.internalValue),
      response_header_insert_list: cdktf.listMapper(slbTemplateHttpResponseHeaderInsertListStructToTerraform, true)(this._responseHeaderInsertList.internalValue),
      template: slbTemplateHttpTemplateToTerraform(this._template.internalValue),
      url_switching: cdktf.listMapper(slbTemplateHttpUrlSwitchingToTerraform, true)(this._urlSwitching.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allowed_methods: {
        value: cdktf.stringToHclTerraform(this._allowedMethods),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allowed_methods_action: {
        value: cdktf.stringToHclTerraform(this._allowedMethodsAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bypass_sg: {
        value: cdktf.stringToHclTerraform(this._bypassSg),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_idle_timeout: {
        value: cdktf.numberToHclTerraform(this._clientIdleTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      client_ip_hdr_replace: {
        value: cdktf.numberToHclTerraform(this._clientIpHdrReplace),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      client_port_hdr_replace: {
        value: cdktf.numberToHclTerraform(this._clientPortHdrReplace),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      compression_auto_disable_on_high_cpu: {
        value: cdktf.numberToHclTerraform(this._compressionAutoDisableOnHighCpu),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      compression_br_level: {
        value: cdktf.numberToHclTerraform(this._compressionBrLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      compression_br_sliding_window_size: {
        value: cdktf.numberToHclTerraform(this._compressionBrSlidingWindowSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      compression_enable: {
        value: cdktf.numberToHclTerraform(this._compressionEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      compression_keep_accept_encoding: {
        value: cdktf.numberToHclTerraform(this._compressionKeepAcceptEncoding),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      compression_keep_accept_encoding_enable: {
        value: cdktf.numberToHclTerraform(this._compressionKeepAcceptEncodingEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      compression_level: {
        value: cdktf.numberToHclTerraform(this._compressionLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      compression_method_order: {
        value: cdktf.stringToHclTerraform(this._compressionMethodOrder),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compression_minimum_content_length: {
        value: cdktf.numberToHclTerraform(this._compressionMinimumContentLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cont_wait_for_req_complete100: {
        value: cdktf.numberToHclTerraform(this._contWaitForReqComplete100),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cookie_format: {
        value: cdktf.stringToHclTerraform(this._cookieFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cookie_samesite: {
        value: cdktf.stringToHclTerraform(this._cookieSamesite),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_charset: {
        value: cdktf.stringToHclTerraform(this._defaultCharset),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disallowed_methods: {
        value: cdktf.stringToHclTerraform(this._disallowedMethods),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disallowed_methods_action: {
        value: cdktf.stringToHclTerraform(this._disallowedMethodsAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      failover_url: {
        value: cdktf.stringToHclTerraform(this._failoverUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      frame_limit: {
        value: cdktf.numberToHclTerraform(this._frameLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      http2_client_no_snat: {
        value: cdktf.numberToHclTerraform(this._http2ClientNoSnat),
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
      insert_client_ip: {
        value: cdktf.numberToHclTerraform(this._insertClientIp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      insert_client_ip_header_name: {
        value: cdktf.stringToHclTerraform(this._insertClientIpHeaderName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      insert_client_port: {
        value: cdktf.numberToHclTerraform(this._insertClientPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      insert_client_port_header_name: {
        value: cdktf.stringToHclTerraform(this._insertClientPortHeaderName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      keep_client_alive: {
        value: cdktf.numberToHclTerraform(this._keepClientAlive),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      log_retry: {
        value: cdktf.numberToHclTerraform(this._logRetry),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_concurrent_streams: {
        value: cdktf.numberToHclTerraform(this._maxConcurrentStreams),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      non_http_bypass: {
        value: cdktf.numberToHclTerraform(this._nonHttpBypass),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      persist_on_401: {
        value: cdktf.numberToHclTerraform(this._persistOn401),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      prefix: {
        value: cdktf.stringToHclTerraform(this._prefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rd_port: {
        value: cdktf.numberToHclTerraform(this._rdPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rd_resp_code: {
        value: cdktf.stringToHclTerraform(this._rdRespCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rd_secure: {
        value: cdktf.numberToHclTerraform(this._rdSecure),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rd_simple_loc: {
        value: cdktf.stringToHclTerraform(this._rdSimpleLoc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      redirect: {
        value: cdktf.numberToHclTerraform(this._redirect),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      req_hdr_wait_time: {
        value: cdktf.numberToHclTerraform(this._reqHdrWaitTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      req_hdr_wait_time_val: {
        value: cdktf.numberToHclTerraform(this._reqHdrWaitTimeVal),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      request_line_case_insensitive: {
        value: cdktf.numberToHclTerraform(this._requestLineCaseInsensitive),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      request_timeout: {
        value: cdktf.numberToHclTerraform(this._requestTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      retry_on_5xx: {
        value: cdktf.numberToHclTerraform(this._retryOn5Xx),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      retry_on_5xx_per_req: {
        value: cdktf.numberToHclTerraform(this._retryOn5XxPerReq),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      retry_on_5xx_per_req_val: {
        value: cdktf.numberToHclTerraform(this._retryOn5XxPerReqVal),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      retry_on_5xx_val: {
        value: cdktf.numberToHclTerraform(this._retryOn5XxVal),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      server_support_http2_only: {
        value: cdktf.numberToHclTerraform(this._serverSupportHttp2Only),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      server_support_http2_only_value: {
        value: cdktf.stringToHclTerraform(this._serverSupportHttp2OnlyValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stream_cancellation_limit: {
        value: cdktf.numberToHclTerraform(this._streamCancellationLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      stream_cancellation_rate: {
        value: cdktf.numberToHclTerraform(this._streamCancellationRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      strict_transaction_switch: {
        value: cdktf.numberToHclTerraform(this._strictTransactionSwitch),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      term_11client_hdr_conn_close: {
        value: cdktf.numberToHclTerraform(this._term11ClientHdrConnClose),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      url_hash_first: {
        value: cdktf.numberToHclTerraform(this._urlHashFirst),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      url_hash_last: {
        value: cdktf.numberToHclTerraform(this._urlHashLast),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      url_hash_offset: {
        value: cdktf.numberToHclTerraform(this._urlHashOffset),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      url_hash_persist: {
        value: cdktf.numberToHclTerraform(this._urlHashPersist),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      use_server_status: {
        value: cdktf.numberToHclTerraform(this._useServerStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      user_tag: {
        value: cdktf.stringToHclTerraform(this._userTag),
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
      compression_content_type: {
        value: cdktf.listMapperHcl(slbTemplateHttpCompressionContentTypeToHclTerraform, true)(this._compressionContentType.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbTemplateHttpCompressionContentTypeList",
      },
      compression_exclude_content_type: {
        value: cdktf.listMapperHcl(slbTemplateHttpCompressionExcludeContentTypeToHclTerraform, true)(this._compressionExcludeContentType.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbTemplateHttpCompressionExcludeContentTypeList",
      },
      compression_exclude_uri: {
        value: cdktf.listMapperHcl(slbTemplateHttpCompressionExcludeUriToHclTerraform, true)(this._compressionExcludeUri.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbTemplateHttpCompressionExcludeUriList",
      },
      host_switching: {
        value: cdktf.listMapperHcl(slbTemplateHttpHostSwitchingToHclTerraform, true)(this._hostSwitching.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbTemplateHttpHostSwitchingList",
      },
      http_protocol_check: {
        value: slbTemplateHttpHttpProtocolCheckToHclTerraform(this._httpProtocolCheck.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbTemplateHttpHttpProtocolCheckList",
      },
      redirect_rewrite: {
        value: slbTemplateHttpRedirectRewriteToHclTerraform(this._redirectRewrite.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbTemplateHttpRedirectRewriteList",
      },
      request_header_erase_list: {
        value: cdktf.listMapperHcl(slbTemplateHttpRequestHeaderEraseListStructToHclTerraform, true)(this._requestHeaderEraseList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbTemplateHttpRequestHeaderEraseListStructList",
      },
      request_header_insert_list: {
        value: cdktf.listMapperHcl(slbTemplateHttpRequestHeaderInsertListStructToHclTerraform, true)(this._requestHeaderInsertList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbTemplateHttpRequestHeaderInsertListStructList",
      },
      response_content_replace_list: {
        value: cdktf.listMapperHcl(slbTemplateHttpResponseContentReplaceListStructToHclTerraform, true)(this._responseContentReplaceList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbTemplateHttpResponseContentReplaceListStructList",
      },
      response_header_erase_list: {
        value: cdktf.listMapperHcl(slbTemplateHttpResponseHeaderEraseListStructToHclTerraform, true)(this._responseHeaderEraseList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbTemplateHttpResponseHeaderEraseListStructList",
      },
      response_header_insert_list: {
        value: cdktf.listMapperHcl(slbTemplateHttpResponseHeaderInsertListStructToHclTerraform, true)(this._responseHeaderInsertList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbTemplateHttpResponseHeaderInsertListStructList",
      },
      template: {
        value: slbTemplateHttpTemplateToHclTerraform(this._template.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbTemplateHttpTemplateList",
      },
      url_switching: {
        value: cdktf.listMapperHcl(slbTemplateHttpUrlSwitchingToHclTerraform, true)(this._urlSwitching.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbTemplateHttpUrlSwitchingList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
