// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/connection_handler
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConnectionHandlerConfig extends cdktf.TerraformMetaArguments {
  /**
  * When the `type` attribute is set to:
  *   - `ldap`: Specifies the maximum number of pending connection attempts that are allowed to queue up in the accept backlog before the server starts rejecting new connection attempts.
  *   - `http`: Specifies the number of concurrent outstanding connection attempts that the connection handler should allow. The default value should be acceptable in most cases, but it may need to be increased in environments that may attempt to establish large numbers of connections simultaneously.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/connection_handler#accept_backlog ConnectionHandler#accept_backlog}
  */
  readonly acceptBacklog?: number;
  /**
  * Indicates whether connections from LDAPv2 clients are allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/connection_handler#allow_ldap_v2 ConnectionHandler#allow_ldap_v2}
  */
  readonly allowLdapV2?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether clients are allowed to use StartTLS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/connection_handler#allow_start_tls ConnectionHandler#allow_start_tls}
  */
  readonly allowStartTls?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether the server should attempt to reuse socket descriptors. This may be useful in environments with a high rate of connection establishment and termination.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/connection_handler#allow_tcp_reuse_address ConnectionHandler#allow_tcp_reuse_address}
  */
  readonly allowTcpReuseAddress?: boolean | cdktf.IResolvable;
  /**
  * Specifies a set of address masks that determines the addresses of the clients that are allowed to establish connections to this connection handler.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/connection_handler#allowed_client ConnectionHandler#allowed_client}
  */
  readonly allowedClient?: string[];
  /**
  * Indicates whether to attempt to automatically authenticate a client connection that has established a secure communication channel (using either SSL or StartTLS) and presented its own client certificate. Generally, clients should use the SASL EXTERNAL mechanism to authenticate using a client certificate, but some clients may not support that capability and/or may expect automatic authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/connection_handler#auto_authenticate_using_client_certificate ConnectionHandler#auto_authenticate_using_client_certificate}
  */
  readonly autoAuthenticateUsingClientCertificate?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether all connections associated with this LDAP Connection Handler should be closed before an explicit garbage collection is performed to allow clients to route requests to another server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/connection_handler#close_connections_on_explicit_gc ConnectionHandler#close_connections_on_explicit_gc}
  */
  readonly closeConnectionsOnExplicitGc?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether all connections associated with this LDAP Connection Handler should be closed and no new connections accepted when the server has determined that it is "unavailable." This allows clients (or a network load balancer) to route requests to another server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/connection_handler#close_connections_when_unavailable ConnectionHandler#close_connections_when_unavailable}
  */
  readonly closeConnectionsWhenUnavailable?: boolean | cdktf.IResolvable;
  /**
  * Specifies the set of HTTP request headers that may contain a value to be used as the correlation ID. Example values are "Correlation-Id", "X-Amzn-Trace-Id", and "X-Request-Id".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/connection_handler#correlation_id_request_header ConnectionHandler#correlation_id_request_header}
  */
  readonly correlationIdRequestHeader?: string[];
  /**
  * Specifies the name of the HTTP response header that will contain a correlation ID value. Example values are "Correlation-Id", "X-Amzn-Trace-Id", and "X-Request-Id".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/connection_handler#correlation_id_response_header ConnectionHandler#correlation_id_response_header}
  */
  readonly correlationIdResponseHeader?: string;
  /**
  * Specifies a set of address masks that determines the addresses of the clients that are not allowed to establish connections to this connection handler.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/connection_handler#denied_client ConnectionHandler#denied_client}
  */
  readonly deniedClient?: string[];
  /**
  * A description for this Connection Handler
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/connection_handler#description ConnectionHandler#description}
  */
  readonly description?: string;
  /**
  * Determines whether request form parameters submitted in multipart/ form-data (RFC 2388) format should be processed as request parameters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/connection_handler#enable_multipart_mime_parameters ConnectionHandler#enable_multipart_mime_parameters}
  */
  readonly enableMultipartMimeParameters?: boolean | cdktf.IResolvable;
  /**
  * Supported in PingDirectory product version 10.0.0.0+. Requires SNI hostnames to match or else throw an Invalid SNI error.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/connection_handler#enable_sni_hostname_checks ConnectionHandler#enable_sni_hostname_checks}
  */
  readonly enableSniHostnameChecks?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether the Connection Handler is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/connection_handler#enabled ConnectionHandler#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Supported in PingDirectory product version 10.3.0.0+. The duration the HTTP Connection Handler waits before checking for potentially expensive operations. If at least N HTTP Connection Handler threads (as defined by expensive-thread-minimum-concurrent-count) are processing the same HTTP requests for two consecutive polls, the server writes stack traces for all threads to a file in /logs/thread-dumps. Use this file to help identify performance bottlenecks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/connection_handler#expensive_thread_check_interval ConnectionHandler#expensive_thread_check_interval}
  */
  readonly expensiveThreadCheckInterval?: string;
  /**
  * Supported in PingDirectory product version 10.3.0.0+. The duration the server waits after generating a full thread dump before creating another. This interval helps prevent excessive disk usage from frequent dumps. Use this property to help identify performance bottlenecks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/connection_handler#expensive_thread_hold_off_interval ConnectionHandler#expensive_thread_hold_off_interval}
  */
  readonly expensiveThreadHoldOffInterval?: string;
  /**
  * Supported in PingDirectory product version 10.3.0.0+. The minimum number of HTTP Connection Handler threads concurrently processing the same HTTP request that triggers a full thread dump. If at least this many worker threads are processing the same HTTP request for two consecutive polls, the server writes stack traces for all threads to a file in /logs/thread-dumps. Use this file to help identify performance bottlenecks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/connection_handler#expensive_thread_minimum_concurrent_count ConnectionHandler#expensive_thread_minimum_concurrent_count}
  */
  readonly expensiveThreadMinimumConcurrentCount?: number;
  /**
  * Specifies the length of time that the server should delay the response to non-successful bind operations. A value of zero milliseconds indicates that non-successful bind operations should not be delayed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/connection_handler#failed_bind_response_delay ConnectionHandler#failed_bind_response_delay}
  */
  readonly failedBindResponseDelay?: string;
  /**
  * Specifies the set of HTTP operation loggers that should be used to log information about requests and responses for operations processed through this HTTP Connection Handler.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/connection_handler#http_operation_log_publisher ConnectionHandler#http_operation_log_publisher}
  */
  readonly httpOperationLogPublisher?: string[];
  /**
  * Specifies the maximum buffer size of an http request including the request uri and all of the request headers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/connection_handler#http_request_header_size ConnectionHandler#http_request_header_size}
  */
  readonly httpRequestHeaderSize?: number;
  /**
  * Specifies information about servlets that will be provided via this connection handler.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/connection_handler#http_servlet_extension ConnectionHandler#http_servlet_extension}
  */
  readonly httpServletExtension?: string[];
  /**
  * Specifies the maximum idle time for a connection. The max idle time is applied when waiting for a new request to be received on a connection, when reading the headers and content of a request, or when writing the headers and content of a response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/connection_handler#idle_time_limit ConnectionHandler#idle_time_limit}
  */
  readonly idleTimeLimit?: string;
  /**
  * Supported in PingDirectory product version 10.3.0.0+. Tracks moving average durations (1, 5, and 15-minute intervals) for the entire HTTP request lifecycle, including socket, connection, queue, request, and response times. Warning: This feature is experimental and can negatively affect performance when enabled. It should be reserved for performance tuning or troubleshooting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/connection_handler#include_additional_metrics ConnectionHandler#include_additional_metrics}
  */
  readonly includeAdditionalMetrics?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether to enable statistics collection for this connection handler.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/connection_handler#keep_stats ConnectionHandler#keep_stats}
  */
  readonly keepStats?: boolean | cdktf.IResolvable;
  /**
  * When the `type` attribute is set to:
  *   - `jmx`: Specifies the name of the key manager that should be used with this JMX Connection Handler .
  *   - `ldap`: Specifies the name of the key manager that should be used with this LDAP Connection Handler .
  *   - `http`: Specifies the key manager provider that will be used to obtain the certificate to present to HTTPS clients.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/connection_handler#key_manager_provider ConnectionHandler#key_manager_provider}
  */
  readonly keyManagerProvider?: string;
  /**
  * Specifies the path to the directory in which the LDIF files should be placed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/connection_handler#ldif_directory ConnectionHandler#ldif_directory}
  */
  readonly ldifDirectory?: string;
  /**
  * When the `type` attribute is set to:
  *   - `ldap`: Specifies the address or set of addresses on which this LDAP Connection Handler should listen for connections from LDAP clients.
  *   - `http`: Specifies the address on which to listen for connections from HTTP clients. If no value is defined, the server will listen on all addresses on all interfaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/connection_handler#listen_address ConnectionHandler#listen_address}
  */
  readonly listenAddress?: string[];
  /**
  * When the `type` attribute is set to:
  *   - `jmx`: Specifies the port number on which the JMX Connection Handler will listen for connections from clients.
  *   - `ldap`: Specifies the port number on which the LDAP Connection Handler will listen for connections from clients.
  *   - `http`: Specifies the port number on which the HTTP Connection Handler will listen for connections from clients.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/connection_handler#listen_port ConnectionHandler#listen_port}
  */
  readonly listenPort?: number;
  /**
  * Specifies the number of connections, which if exceeded, places this handler in a low resource state where a different idle time limit is applied on the connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/connection_handler#low_resources_connection_threshold ConnectionHandler#low_resources_connection_threshold}
  */
  readonly lowResourcesConnectionThreshold?: number;
  /**
  * Specifies the maximum idle time for a connection when this handler is in a low resource state as defined by low-resource-connections. The max idle time is applied when waiting for a new request to be received on a connection, when reading the headers and content of a request, or when writing the headers and content of a response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/connection_handler#low_resources_idle_time_limit ConnectionHandler#low_resources_idle_time_limit}
  */
  readonly lowResourcesIdleTimeLimit?: string;
  /**
  * Specifies the maximum length of time that attempts to write data to LDAP clients should be allowed to block.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/connection_handler#max_blocked_write_time_limit ConnectionHandler#max_blocked_write_time_limit}
  */
  readonly maxBlockedWriteTimeLimit?: string;
  /**
  * Specifies the maximum number of threads that are used to process cancel and abandon requests from clients.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/connection_handler#max_cancel_handlers ConnectionHandler#max_cancel_handlers}
  */
  readonly maxCancelHandlers?: number;
  /**
  * Specifies the size of the largest LDAP request message that will be allowed by this LDAP Connection handler.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/connection_handler#max_request_size ConnectionHandler#max_request_size}
  */
  readonly maxRequestSize?: string;
  /**
  * Name of this config object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/connection_handler#name ConnectionHandler#name}
  */
  readonly name: string;
  /**
  * Specifies the number of threads that are used to accept new client connections, and to perform any initial preparation on those connections that may be needed before the connection can be used to read requests and send responses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/connection_handler#num_accept_handlers ConnectionHandler#num_accept_handlers}
  */
  readonly numAcceptHandlers?: number;
  /**
  * When the `type` attribute is set to:
  *   - `ldap`: Specifies the number of request handlers that are used to read requests from clients.
  *   - `http`: Specifies the number of threads that will be used for accepting connections and reading requests from clients.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/connection_handler#num_request_handlers ConnectionHandler#num_request_handlers}
  */
  readonly numRequestHandlers?: number;
  /**
  * Specifies how frequently the LDIF connection handler should check the LDIF directory to determine whether a new LDIF file has been added.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/connection_handler#poll_interval ConnectionHandler#poll_interval}
  */
  readonly pollInterval?: string;
  /**
  * Supported in PingDirectory product version 10.0.0.0+. Indicates whether a separate request handler thread should be created for each client connection, which can help avoid starvation of client connections for cases in which one or more clients send large numbers of concurrent asynchronous requests. This should only be used for cases in which a relatively small number of connections will be established at any given time, the connections established will generally be long-lived, and at least one client may send high volumes of asynchronous requests. This property can be used to alleviate possible blocking during long-running TLS negotiation on a single request handler which can result in it being unable to acknowledge further client requests until the TLS negotation completes or times out.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/connection_handler#request_handler_per_connection ConnectionHandler#request_handler_per_connection}
  */
  readonly requestHandlerPerConnection?: boolean | cdktf.IResolvable;
  /**
  * Specifies HTTP header fields and values added to response headers for all requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/connection_handler#response_header ConnectionHandler#response_header}
  */
  readonly responseHeader?: string[];
  /**
  * Indicates whether the LDAP Connection Handler should send a notice of disconnection extended response message to the client if a new connection is rejected for some reason.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/connection_handler#send_rejection_notice ConnectionHandler#send_rejection_notice}
  */
  readonly sendRejectionNotice?: boolean | cdktf.IResolvable;
  /**
  * When the `type` attribute is set to:
  *   - `jmx`: Specifies the nickname (also called the alias) of the certificate that the JMX Connection Handler should use when performing SSL communication.
  *   - `ldap`: Specifies the nickname (also called the alias) of the certificate that the LDAP Connection Handler should use when performing SSL or StartTLS communication.
  *   - `http`: Specifies the nickname (also called the alias) of the certificate that the HTTP Connection Handler should use when performing SSL communication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/connection_handler#ssl_cert_nickname ConnectionHandler#ssl_cert_nickname}
  */
  readonly sslCertNickname?: string;
  /**
  * When the `type` attribute is set to:
  *   - `ldap`: Specifies the names of the TLS cipher suites that are allowed for use in SSL or StartTLS communication. The set of supported cipher suites can be viewed via the ssl context monitor entry.
  *   - `http`: Specifies the names of the SSL cipher suites that are allowed for use in SSL communication. The set of supported cipher suites can be viewed via the ssl context monitor entry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/connection_handler#ssl_cipher_suite ConnectionHandler#ssl_cipher_suite}
  */
  readonly sslCipherSuite?: string[];
  /**
  * When the `type` attribute is set to:
  *   - `ldap`: Specifies the policy that the LDAP Connection Handler should use regarding client SSL certificates.
  *   - `http`: Specifies the policy that the HTTP Connection Handler should use regarding client SSL certificates. In order for a client certificate to be accepted it must be known to the trust-manager-provider associated with this HTTP Connection Handler. Client certificates received by the HTTP Connection Handler are by default used for TLS mutual authentication only, as there is no support for user authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/connection_handler#ssl_client_auth_policy ConnectionHandler#ssl_client_auth_policy}
  */
  readonly sslClientAuthPolicy?: string;
  /**
  * When the `type` attribute is set to:
  *   - `ldap`: Specifies the names of the TLS protocols that are allowed for use in SSL or StartTLS communication. The set of supported ssl protocols can be viewed via the ssl context monitor entry.
  *   - `http`: Specifies the names of the SSL protocols that are allowed for use in SSL communication. The set of supported ssl protocols can be viewed via the ssl context monitor entry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/connection_handler#ssl_protocol ConnectionHandler#ssl_protocol}
  */
  readonly sslProtocol?: string[];
  /**
  * When the `type` attribute is set to:
  *   - `ldap`: Specifies the name of the trust manager that should be used with the LDAP Connection Handler .
  *   - `http`: Specifies the trust manager provider that will be used to validate any certificates presented by HTTPS clients.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/connection_handler#trust_manager_provider ConnectionHandler#trust_manager_provider}
  */
  readonly trustManagerProvider?: string;
  /**
  * The type of Connection Handler resource. Options are ['jmx', 'ldap', 'ldif', 'http']
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/connection_handler#type ConnectionHandler#type}
  */
  readonly type: string;
  /**
  * If enabled, a correlation ID header will be added to outgoing HTTP responses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/connection_handler#use_correlation_id_header ConnectionHandler#use_correlation_id_header}
  */
  readonly useCorrelationIdHeader?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether to use "Forwarded" and "X-Forwarded-*" request headers to override corresponding HTTP request information available during request processing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/connection_handler#use_forwarded_headers ConnectionHandler#use_forwarded_headers}
  */
  readonly useForwardedHeaders?: boolean | cdktf.IResolvable;
  /**
  * Supported in PingDirectory product version 10.3.0.0+. Indicates whether client connections established to this connection handler will pass through a software proxy that uses the HAProxy PROXY protocol to preserve the original end address of the client system. The Directory Server supports versions 1 and 2 of the HAProxy PROXY protocol.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/connection_handler#use_haproxy_proxy_protocol ConnectionHandler#use_haproxy_proxy_protocol}
  */
  readonly useHaproxyProxyProtocol?: boolean | cdktf.IResolvable;
  /**
  * When the `type` attribute is set to:
  *   - `jmx`: Indicates whether the JMX Connection Handler should use SSL.
  *   - `ldap`: Indicates whether the LDAP Connection Handler should use SSL.
  *   - `http`: Indicates whether the HTTP Connection Handler should use SSL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/connection_handler#use_ssl ConnectionHandler#use_ssl}
  */
  readonly useSsl?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether the LDAP Connection Handler should use TCP keep-alive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/connection_handler#use_tcp_keep_alive ConnectionHandler#use_tcp_keep_alive}
  */
  readonly useTcpKeepAlive?: boolean | cdktf.IResolvable;
  /**
  * Specifies information about web applications that will be provided via this connection handler.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/connection_handler#web_application_extension ConnectionHandler#web_application_extension}
  */
  readonly webApplicationExtension?: string[];
}
export interface ConnectionHandlerRequiredActions {
}

export function connectionHandlerRequiredActionsToTerraform(struct?: ConnectionHandlerRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function connectionHandlerRequiredActionsToHclTerraform(struct?: ConnectionHandlerRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ConnectionHandlerRequiredActionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ConnectionHandlerRequiredActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionHandlerRequiredActions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // property - computed: true, optional: false, required: false
  public get property() {
    return this.getStringAttribute('property');
  }

  // synopsis - computed: true, optional: false, required: false
  public get synopsis() {
    return this.getStringAttribute('synopsis');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class ConnectionHandlerRequiredActionsList extends cdktf.ComplexList {

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
  public get(index: number): ConnectionHandlerRequiredActionsOutputReference {
    return new ConnectionHandlerRequiredActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/connection_handler pingdirectory_connection_handler}
*/
export class ConnectionHandler extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_connection_handler";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConnectionHandler resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConnectionHandler to import
  * @param importFromId The id of the existing ConnectionHandler that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/connection_handler#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConnectionHandler to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_connection_handler", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/connection_handler pingdirectory_connection_handler} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConnectionHandlerConfig
  */
  public constructor(scope: Construct, id: string, config: ConnectionHandlerConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_connection_handler',
      terraformGeneratorMetadata: {
        providerName: 'pingdirectory',
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
    this._acceptBacklog = config.acceptBacklog;
    this._allowLdapV2 = config.allowLdapV2;
    this._allowStartTls = config.allowStartTls;
    this._allowTcpReuseAddress = config.allowTcpReuseAddress;
    this._allowedClient = config.allowedClient;
    this._autoAuthenticateUsingClientCertificate = config.autoAuthenticateUsingClientCertificate;
    this._closeConnectionsOnExplicitGc = config.closeConnectionsOnExplicitGc;
    this._closeConnectionsWhenUnavailable = config.closeConnectionsWhenUnavailable;
    this._correlationIdRequestHeader = config.correlationIdRequestHeader;
    this._correlationIdResponseHeader = config.correlationIdResponseHeader;
    this._deniedClient = config.deniedClient;
    this._description = config.description;
    this._enableMultipartMimeParameters = config.enableMultipartMimeParameters;
    this._enableSniHostnameChecks = config.enableSniHostnameChecks;
    this._enabled = config.enabled;
    this._expensiveThreadCheckInterval = config.expensiveThreadCheckInterval;
    this._expensiveThreadHoldOffInterval = config.expensiveThreadHoldOffInterval;
    this._expensiveThreadMinimumConcurrentCount = config.expensiveThreadMinimumConcurrentCount;
    this._failedBindResponseDelay = config.failedBindResponseDelay;
    this._httpOperationLogPublisher = config.httpOperationLogPublisher;
    this._httpRequestHeaderSize = config.httpRequestHeaderSize;
    this._httpServletExtension = config.httpServletExtension;
    this._idleTimeLimit = config.idleTimeLimit;
    this._includeAdditionalMetrics = config.includeAdditionalMetrics;
    this._keepStats = config.keepStats;
    this._keyManagerProvider = config.keyManagerProvider;
    this._ldifDirectory = config.ldifDirectory;
    this._listenAddress = config.listenAddress;
    this._listenPort = config.listenPort;
    this._lowResourcesConnectionThreshold = config.lowResourcesConnectionThreshold;
    this._lowResourcesIdleTimeLimit = config.lowResourcesIdleTimeLimit;
    this._maxBlockedWriteTimeLimit = config.maxBlockedWriteTimeLimit;
    this._maxCancelHandlers = config.maxCancelHandlers;
    this._maxRequestSize = config.maxRequestSize;
    this._name = config.name;
    this._numAcceptHandlers = config.numAcceptHandlers;
    this._numRequestHandlers = config.numRequestHandlers;
    this._pollInterval = config.pollInterval;
    this._requestHandlerPerConnection = config.requestHandlerPerConnection;
    this._responseHeader = config.responseHeader;
    this._sendRejectionNotice = config.sendRejectionNotice;
    this._sslCertNickname = config.sslCertNickname;
    this._sslCipherSuite = config.sslCipherSuite;
    this._sslClientAuthPolicy = config.sslClientAuthPolicy;
    this._sslProtocol = config.sslProtocol;
    this._trustManagerProvider = config.trustManagerProvider;
    this._type = config.type;
    this._useCorrelationIdHeader = config.useCorrelationIdHeader;
    this._useForwardedHeaders = config.useForwardedHeaders;
    this._useHaproxyProxyProtocol = config.useHaproxyProxyProtocol;
    this._useSsl = config.useSsl;
    this._useTcpKeepAlive = config.useTcpKeepAlive;
    this._webApplicationExtension = config.webApplicationExtension;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accept_backlog - computed: true, optional: true, required: false
  private _acceptBacklog?: number; 
  public get acceptBacklog() {
    return this.getNumberAttribute('accept_backlog');
  }
  public set acceptBacklog(value: number) {
    this._acceptBacklog = value;
  }
  public resetAcceptBacklog() {
    this._acceptBacklog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptBacklogInput() {
    return this._acceptBacklog;
  }

  // allow_ldap_v2 - computed: true, optional: true, required: false
  private _allowLdapV2?: boolean | cdktf.IResolvable; 
  public get allowLdapV2() {
    return this.getBooleanAttribute('allow_ldap_v2');
  }
  public set allowLdapV2(value: boolean | cdktf.IResolvable) {
    this._allowLdapV2 = value;
  }
  public resetAllowLdapV2() {
    this._allowLdapV2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowLdapV2Input() {
    return this._allowLdapV2;
  }

  // allow_start_tls - computed: true, optional: true, required: false
  private _allowStartTls?: boolean | cdktf.IResolvable; 
  public get allowStartTls() {
    return this.getBooleanAttribute('allow_start_tls');
  }
  public set allowStartTls(value: boolean | cdktf.IResolvable) {
    this._allowStartTls = value;
  }
  public resetAllowStartTls() {
    this._allowStartTls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowStartTlsInput() {
    return this._allowStartTls;
  }

  // allow_tcp_reuse_address - computed: true, optional: true, required: false
  private _allowTcpReuseAddress?: boolean | cdktf.IResolvable; 
  public get allowTcpReuseAddress() {
    return this.getBooleanAttribute('allow_tcp_reuse_address');
  }
  public set allowTcpReuseAddress(value: boolean | cdktf.IResolvable) {
    this._allowTcpReuseAddress = value;
  }
  public resetAllowTcpReuseAddress() {
    this._allowTcpReuseAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowTcpReuseAddressInput() {
    return this._allowTcpReuseAddress;
  }

  // allowed_client - computed: true, optional: true, required: false
  private _allowedClient?: string[]; 
  public get allowedClient() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_client'));
  }
  public set allowedClient(value: string[]) {
    this._allowedClient = value;
  }
  public resetAllowedClient() {
    this._allowedClient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedClientInput() {
    return this._allowedClient;
  }

  // auto_authenticate_using_client_certificate - computed: true, optional: true, required: false
  private _autoAuthenticateUsingClientCertificate?: boolean | cdktf.IResolvable; 
  public get autoAuthenticateUsingClientCertificate() {
    return this.getBooleanAttribute('auto_authenticate_using_client_certificate');
  }
  public set autoAuthenticateUsingClientCertificate(value: boolean | cdktf.IResolvable) {
    this._autoAuthenticateUsingClientCertificate = value;
  }
  public resetAutoAuthenticateUsingClientCertificate() {
    this._autoAuthenticateUsingClientCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoAuthenticateUsingClientCertificateInput() {
    return this._autoAuthenticateUsingClientCertificate;
  }

  // close_connections_on_explicit_gc - computed: true, optional: true, required: false
  private _closeConnectionsOnExplicitGc?: boolean | cdktf.IResolvable; 
  public get closeConnectionsOnExplicitGc() {
    return this.getBooleanAttribute('close_connections_on_explicit_gc');
  }
  public set closeConnectionsOnExplicitGc(value: boolean | cdktf.IResolvable) {
    this._closeConnectionsOnExplicitGc = value;
  }
  public resetCloseConnectionsOnExplicitGc() {
    this._closeConnectionsOnExplicitGc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get closeConnectionsOnExplicitGcInput() {
    return this._closeConnectionsOnExplicitGc;
  }

  // close_connections_when_unavailable - computed: true, optional: true, required: false
  private _closeConnectionsWhenUnavailable?: boolean | cdktf.IResolvable; 
  public get closeConnectionsWhenUnavailable() {
    return this.getBooleanAttribute('close_connections_when_unavailable');
  }
  public set closeConnectionsWhenUnavailable(value: boolean | cdktf.IResolvable) {
    this._closeConnectionsWhenUnavailable = value;
  }
  public resetCloseConnectionsWhenUnavailable() {
    this._closeConnectionsWhenUnavailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get closeConnectionsWhenUnavailableInput() {
    return this._closeConnectionsWhenUnavailable;
  }

  // correlation_id_request_header - computed: true, optional: true, required: false
  private _correlationIdRequestHeader?: string[]; 
  public get correlationIdRequestHeader() {
    return cdktf.Fn.tolist(this.getListAttribute('correlation_id_request_header'));
  }
  public set correlationIdRequestHeader(value: string[]) {
    this._correlationIdRequestHeader = value;
  }
  public resetCorrelationIdRequestHeader() {
    this._correlationIdRequestHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get correlationIdRequestHeaderInput() {
    return this._correlationIdRequestHeader;
  }

  // correlation_id_response_header - computed: true, optional: true, required: false
  private _correlationIdResponseHeader?: string; 
  public get correlationIdResponseHeader() {
    return this.getStringAttribute('correlation_id_response_header');
  }
  public set correlationIdResponseHeader(value: string) {
    this._correlationIdResponseHeader = value;
  }
  public resetCorrelationIdResponseHeader() {
    this._correlationIdResponseHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get correlationIdResponseHeaderInput() {
    return this._correlationIdResponseHeader;
  }

  // denied_client - computed: true, optional: true, required: false
  private _deniedClient?: string[]; 
  public get deniedClient() {
    return cdktf.Fn.tolist(this.getListAttribute('denied_client'));
  }
  public set deniedClient(value: string[]) {
    this._deniedClient = value;
  }
  public resetDeniedClient() {
    this._deniedClient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deniedClientInput() {
    return this._deniedClient;
  }

  // description - computed: false, optional: true, required: false
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

  // enable_multipart_mime_parameters - computed: true, optional: true, required: false
  private _enableMultipartMimeParameters?: boolean | cdktf.IResolvable; 
  public get enableMultipartMimeParameters() {
    return this.getBooleanAttribute('enable_multipart_mime_parameters');
  }
  public set enableMultipartMimeParameters(value: boolean | cdktf.IResolvable) {
    this._enableMultipartMimeParameters = value;
  }
  public resetEnableMultipartMimeParameters() {
    this._enableMultipartMimeParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableMultipartMimeParametersInput() {
    return this._enableMultipartMimeParameters;
  }

  // enable_sni_hostname_checks - computed: true, optional: true, required: false
  private _enableSniHostnameChecks?: boolean | cdktf.IResolvable; 
  public get enableSniHostnameChecks() {
    return this.getBooleanAttribute('enable_sni_hostname_checks');
  }
  public set enableSniHostnameChecks(value: boolean | cdktf.IResolvable) {
    this._enableSniHostnameChecks = value;
  }
  public resetEnableSniHostnameChecks() {
    this._enableSniHostnameChecks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSniHostnameChecksInput() {
    return this._enableSniHostnameChecks;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // expensive_thread_check_interval - computed: false, optional: true, required: false
  private _expensiveThreadCheckInterval?: string; 
  public get expensiveThreadCheckInterval() {
    return this.getStringAttribute('expensive_thread_check_interval');
  }
  public set expensiveThreadCheckInterval(value: string) {
    this._expensiveThreadCheckInterval = value;
  }
  public resetExpensiveThreadCheckInterval() {
    this._expensiveThreadCheckInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expensiveThreadCheckIntervalInput() {
    return this._expensiveThreadCheckInterval;
  }

  // expensive_thread_hold_off_interval - computed: true, optional: true, required: false
  private _expensiveThreadHoldOffInterval?: string; 
  public get expensiveThreadHoldOffInterval() {
    return this.getStringAttribute('expensive_thread_hold_off_interval');
  }
  public set expensiveThreadHoldOffInterval(value: string) {
    this._expensiveThreadHoldOffInterval = value;
  }
  public resetExpensiveThreadHoldOffInterval() {
    this._expensiveThreadHoldOffInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expensiveThreadHoldOffIntervalInput() {
    return this._expensiveThreadHoldOffInterval;
  }

  // expensive_thread_minimum_concurrent_count - computed: true, optional: true, required: false
  private _expensiveThreadMinimumConcurrentCount?: number; 
  public get expensiveThreadMinimumConcurrentCount() {
    return this.getNumberAttribute('expensive_thread_minimum_concurrent_count');
  }
  public set expensiveThreadMinimumConcurrentCount(value: number) {
    this._expensiveThreadMinimumConcurrentCount = value;
  }
  public resetExpensiveThreadMinimumConcurrentCount() {
    this._expensiveThreadMinimumConcurrentCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expensiveThreadMinimumConcurrentCountInput() {
    return this._expensiveThreadMinimumConcurrentCount;
  }

  // failed_bind_response_delay - computed: true, optional: true, required: false
  private _failedBindResponseDelay?: string; 
  public get failedBindResponseDelay() {
    return this.getStringAttribute('failed_bind_response_delay');
  }
  public set failedBindResponseDelay(value: string) {
    this._failedBindResponseDelay = value;
  }
  public resetFailedBindResponseDelay() {
    this._failedBindResponseDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failedBindResponseDelayInput() {
    return this._failedBindResponseDelay;
  }

  // http_operation_log_publisher - computed: true, optional: true, required: false
  private _httpOperationLogPublisher?: string[]; 
  public get httpOperationLogPublisher() {
    return cdktf.Fn.tolist(this.getListAttribute('http_operation_log_publisher'));
  }
  public set httpOperationLogPublisher(value: string[]) {
    this._httpOperationLogPublisher = value;
  }
  public resetHttpOperationLogPublisher() {
    this._httpOperationLogPublisher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpOperationLogPublisherInput() {
    return this._httpOperationLogPublisher;
  }

  // http_request_header_size - computed: true, optional: true, required: false
  private _httpRequestHeaderSize?: number; 
  public get httpRequestHeaderSize() {
    return this.getNumberAttribute('http_request_header_size');
  }
  public set httpRequestHeaderSize(value: number) {
    this._httpRequestHeaderSize = value;
  }
  public resetHttpRequestHeaderSize() {
    this._httpRequestHeaderSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpRequestHeaderSizeInput() {
    return this._httpRequestHeaderSize;
  }

  // http_servlet_extension - computed: true, optional: true, required: false
  private _httpServletExtension?: string[]; 
  public get httpServletExtension() {
    return cdktf.Fn.tolist(this.getListAttribute('http_servlet_extension'));
  }
  public set httpServletExtension(value: string[]) {
    this._httpServletExtension = value;
  }
  public resetHttpServletExtension() {
    this._httpServletExtension = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpServletExtensionInput() {
    return this._httpServletExtension;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // idle_time_limit - computed: true, optional: true, required: false
  private _idleTimeLimit?: string; 
  public get idleTimeLimit() {
    return this.getStringAttribute('idle_time_limit');
  }
  public set idleTimeLimit(value: string) {
    this._idleTimeLimit = value;
  }
  public resetIdleTimeLimit() {
    this._idleTimeLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimeLimitInput() {
    return this._idleTimeLimit;
  }

  // include_additional_metrics - computed: true, optional: true, required: false
  private _includeAdditionalMetrics?: boolean | cdktf.IResolvable; 
  public get includeAdditionalMetrics() {
    return this.getBooleanAttribute('include_additional_metrics');
  }
  public set includeAdditionalMetrics(value: boolean | cdktf.IResolvable) {
    this._includeAdditionalMetrics = value;
  }
  public resetIncludeAdditionalMetrics() {
    this._includeAdditionalMetrics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeAdditionalMetricsInput() {
    return this._includeAdditionalMetrics;
  }

  // keep_stats - computed: true, optional: true, required: false
  private _keepStats?: boolean | cdktf.IResolvable; 
  public get keepStats() {
    return this.getBooleanAttribute('keep_stats');
  }
  public set keepStats(value: boolean | cdktf.IResolvable) {
    this._keepStats = value;
  }
  public resetKeepStats() {
    this._keepStats = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepStatsInput() {
    return this._keepStats;
  }

  // key_manager_provider - computed: false, optional: true, required: false
  private _keyManagerProvider?: string; 
  public get keyManagerProvider() {
    return this.getStringAttribute('key_manager_provider');
  }
  public set keyManagerProvider(value: string) {
    this._keyManagerProvider = value;
  }
  public resetKeyManagerProvider() {
    this._keyManagerProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyManagerProviderInput() {
    return this._keyManagerProvider;
  }

  // ldif_directory - computed: true, optional: true, required: false
  private _ldifDirectory?: string; 
  public get ldifDirectory() {
    return this.getStringAttribute('ldif_directory');
  }
  public set ldifDirectory(value: string) {
    this._ldifDirectory = value;
  }
  public resetLdifDirectory() {
    this._ldifDirectory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldifDirectoryInput() {
    return this._ldifDirectory;
  }

  // listen_address - computed: true, optional: true, required: false
  private _listenAddress?: string[]; 
  public get listenAddress() {
    return cdktf.Fn.tolist(this.getListAttribute('listen_address'));
  }
  public set listenAddress(value: string[]) {
    this._listenAddress = value;
  }
  public resetListenAddress() {
    this._listenAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listenAddressInput() {
    return this._listenAddress;
  }

  // listen_port - computed: false, optional: true, required: false
  private _listenPort?: number; 
  public get listenPort() {
    return this.getNumberAttribute('listen_port');
  }
  public set listenPort(value: number) {
    this._listenPort = value;
  }
  public resetListenPort() {
    this._listenPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listenPortInput() {
    return this._listenPort;
  }

  // low_resources_connection_threshold - computed: true, optional: true, required: false
  private _lowResourcesConnectionThreshold?: number; 
  public get lowResourcesConnectionThreshold() {
    return this.getNumberAttribute('low_resources_connection_threshold');
  }
  public set lowResourcesConnectionThreshold(value: number) {
    this._lowResourcesConnectionThreshold = value;
  }
  public resetLowResourcesConnectionThreshold() {
    this._lowResourcesConnectionThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lowResourcesConnectionThresholdInput() {
    return this._lowResourcesConnectionThreshold;
  }

  // low_resources_idle_time_limit - computed: true, optional: true, required: false
  private _lowResourcesIdleTimeLimit?: string; 
  public get lowResourcesIdleTimeLimit() {
    return this.getStringAttribute('low_resources_idle_time_limit');
  }
  public set lowResourcesIdleTimeLimit(value: string) {
    this._lowResourcesIdleTimeLimit = value;
  }
  public resetLowResourcesIdleTimeLimit() {
    this._lowResourcesIdleTimeLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lowResourcesIdleTimeLimitInput() {
    return this._lowResourcesIdleTimeLimit;
  }

  // max_blocked_write_time_limit - computed: true, optional: true, required: false
  private _maxBlockedWriteTimeLimit?: string; 
  public get maxBlockedWriteTimeLimit() {
    return this.getStringAttribute('max_blocked_write_time_limit');
  }
  public set maxBlockedWriteTimeLimit(value: string) {
    this._maxBlockedWriteTimeLimit = value;
  }
  public resetMaxBlockedWriteTimeLimit() {
    this._maxBlockedWriteTimeLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBlockedWriteTimeLimitInput() {
    return this._maxBlockedWriteTimeLimit;
  }

  // max_cancel_handlers - computed: true, optional: true, required: false
  private _maxCancelHandlers?: number; 
  public get maxCancelHandlers() {
    return this.getNumberAttribute('max_cancel_handlers');
  }
  public set maxCancelHandlers(value: number) {
    this._maxCancelHandlers = value;
  }
  public resetMaxCancelHandlers() {
    this._maxCancelHandlers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCancelHandlersInput() {
    return this._maxCancelHandlers;
  }

  // max_request_size - computed: true, optional: true, required: false
  private _maxRequestSize?: string; 
  public get maxRequestSize() {
    return this.getStringAttribute('max_request_size');
  }
  public set maxRequestSize(value: string) {
    this._maxRequestSize = value;
  }
  public resetMaxRequestSize() {
    this._maxRequestSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRequestSizeInput() {
    return this._maxRequestSize;
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

  // notifications - computed: true, optional: false, required: false
  public get notifications() {
    return cdktf.Fn.tolist(this.getListAttribute('notifications'));
  }

  // num_accept_handlers - computed: true, optional: true, required: false
  private _numAcceptHandlers?: number; 
  public get numAcceptHandlers() {
    return this.getNumberAttribute('num_accept_handlers');
  }
  public set numAcceptHandlers(value: number) {
    this._numAcceptHandlers = value;
  }
  public resetNumAcceptHandlers() {
    this._numAcceptHandlers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numAcceptHandlersInput() {
    return this._numAcceptHandlers;
  }

  // num_request_handlers - computed: true, optional: true, required: false
  private _numRequestHandlers?: number; 
  public get numRequestHandlers() {
    return this.getNumberAttribute('num_request_handlers');
  }
  public set numRequestHandlers(value: number) {
    this._numRequestHandlers = value;
  }
  public resetNumRequestHandlers() {
    this._numRequestHandlers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numRequestHandlersInput() {
    return this._numRequestHandlers;
  }

  // poll_interval - computed: true, optional: true, required: false
  private _pollInterval?: string; 
  public get pollInterval() {
    return this.getStringAttribute('poll_interval');
  }
  public set pollInterval(value: string) {
    this._pollInterval = value;
  }
  public resetPollInterval() {
    this._pollInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pollIntervalInput() {
    return this._pollInterval;
  }

  // request_handler_per_connection - computed: true, optional: true, required: false
  private _requestHandlerPerConnection?: boolean | cdktf.IResolvable; 
  public get requestHandlerPerConnection() {
    return this.getBooleanAttribute('request_handler_per_connection');
  }
  public set requestHandlerPerConnection(value: boolean | cdktf.IResolvable) {
    this._requestHandlerPerConnection = value;
  }
  public resetRequestHandlerPerConnection() {
    this._requestHandlerPerConnection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHandlerPerConnectionInput() {
    return this._requestHandlerPerConnection;
  }

  // required_actions - computed: true, optional: false, required: false
  private _requiredActions = new ConnectionHandlerRequiredActionsList(this, "required_actions", true);
  public get requiredActions() {
    return this._requiredActions;
  }

  // response_header - computed: true, optional: true, required: false
  private _responseHeader?: string[]; 
  public get responseHeader() {
    return cdktf.Fn.tolist(this.getListAttribute('response_header'));
  }
  public set responseHeader(value: string[]) {
    this._responseHeader = value;
  }
  public resetResponseHeader() {
    this._responseHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseHeaderInput() {
    return this._responseHeader;
  }

  // send_rejection_notice - computed: true, optional: true, required: false
  private _sendRejectionNotice?: boolean | cdktf.IResolvable; 
  public get sendRejectionNotice() {
    return this.getBooleanAttribute('send_rejection_notice');
  }
  public set sendRejectionNotice(value: boolean | cdktf.IResolvable) {
    this._sendRejectionNotice = value;
  }
  public resetSendRejectionNotice() {
    this._sendRejectionNotice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendRejectionNoticeInput() {
    return this._sendRejectionNotice;
  }

  // ssl_cert_nickname - computed: false, optional: true, required: false
  private _sslCertNickname?: string; 
  public get sslCertNickname() {
    return this.getStringAttribute('ssl_cert_nickname');
  }
  public set sslCertNickname(value: string) {
    this._sslCertNickname = value;
  }
  public resetSslCertNickname() {
    this._sslCertNickname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslCertNicknameInput() {
    return this._sslCertNickname;
  }

  // ssl_cipher_suite - computed: true, optional: true, required: false
  private _sslCipherSuite?: string[]; 
  public get sslCipherSuite() {
    return cdktf.Fn.tolist(this.getListAttribute('ssl_cipher_suite'));
  }
  public set sslCipherSuite(value: string[]) {
    this._sslCipherSuite = value;
  }
  public resetSslCipherSuite() {
    this._sslCipherSuite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslCipherSuiteInput() {
    return this._sslCipherSuite;
  }

  // ssl_client_auth_policy - computed: true, optional: true, required: false
  private _sslClientAuthPolicy?: string; 
  public get sslClientAuthPolicy() {
    return this.getStringAttribute('ssl_client_auth_policy');
  }
  public set sslClientAuthPolicy(value: string) {
    this._sslClientAuthPolicy = value;
  }
  public resetSslClientAuthPolicy() {
    this._sslClientAuthPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslClientAuthPolicyInput() {
    return this._sslClientAuthPolicy;
  }

  // ssl_protocol - computed: true, optional: true, required: false
  private _sslProtocol?: string[]; 
  public get sslProtocol() {
    return cdktf.Fn.tolist(this.getListAttribute('ssl_protocol'));
  }
  public set sslProtocol(value: string[]) {
    this._sslProtocol = value;
  }
  public resetSslProtocol() {
    this._sslProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslProtocolInput() {
    return this._sslProtocol;
  }

  // trust_manager_provider - computed: false, optional: true, required: false
  private _trustManagerProvider?: string; 
  public get trustManagerProvider() {
    return this.getStringAttribute('trust_manager_provider');
  }
  public set trustManagerProvider(value: string) {
    this._trustManagerProvider = value;
  }
  public resetTrustManagerProvider() {
    this._trustManagerProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustManagerProviderInput() {
    return this._trustManagerProvider;
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

  // use_correlation_id_header - computed: true, optional: true, required: false
  private _useCorrelationIdHeader?: boolean | cdktf.IResolvable; 
  public get useCorrelationIdHeader() {
    return this.getBooleanAttribute('use_correlation_id_header');
  }
  public set useCorrelationIdHeader(value: boolean | cdktf.IResolvable) {
    this._useCorrelationIdHeader = value;
  }
  public resetUseCorrelationIdHeader() {
    this._useCorrelationIdHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useCorrelationIdHeaderInput() {
    return this._useCorrelationIdHeader;
  }

  // use_forwarded_headers - computed: true, optional: true, required: false
  private _useForwardedHeaders?: boolean | cdktf.IResolvable; 
  public get useForwardedHeaders() {
    return this.getBooleanAttribute('use_forwarded_headers');
  }
  public set useForwardedHeaders(value: boolean | cdktf.IResolvable) {
    this._useForwardedHeaders = value;
  }
  public resetUseForwardedHeaders() {
    this._useForwardedHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useForwardedHeadersInput() {
    return this._useForwardedHeaders;
  }

  // use_haproxy_proxy_protocol - computed: true, optional: true, required: false
  private _useHaproxyProxyProtocol?: boolean | cdktf.IResolvable; 
  public get useHaproxyProxyProtocol() {
    return this.getBooleanAttribute('use_haproxy_proxy_protocol');
  }
  public set useHaproxyProxyProtocol(value: boolean | cdktf.IResolvable) {
    this._useHaproxyProxyProtocol = value;
  }
  public resetUseHaproxyProxyProtocol() {
    this._useHaproxyProxyProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useHaproxyProxyProtocolInput() {
    return this._useHaproxyProxyProtocol;
  }

  // use_ssl - computed: true, optional: true, required: false
  private _useSsl?: boolean | cdktf.IResolvable; 
  public get useSsl() {
    return this.getBooleanAttribute('use_ssl');
  }
  public set useSsl(value: boolean | cdktf.IResolvable) {
    this._useSsl = value;
  }
  public resetUseSsl() {
    this._useSsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useSslInput() {
    return this._useSsl;
  }

  // use_tcp_keep_alive - computed: true, optional: true, required: false
  private _useTcpKeepAlive?: boolean | cdktf.IResolvable; 
  public get useTcpKeepAlive() {
    return this.getBooleanAttribute('use_tcp_keep_alive');
  }
  public set useTcpKeepAlive(value: boolean | cdktf.IResolvable) {
    this._useTcpKeepAlive = value;
  }
  public resetUseTcpKeepAlive() {
    this._useTcpKeepAlive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useTcpKeepAliveInput() {
    return this._useTcpKeepAlive;
  }

  // web_application_extension - computed: true, optional: true, required: false
  private _webApplicationExtension?: string[]; 
  public get webApplicationExtension() {
    return cdktf.Fn.tolist(this.getListAttribute('web_application_extension'));
  }
  public set webApplicationExtension(value: string[]) {
    this._webApplicationExtension = value;
  }
  public resetWebApplicationExtension() {
    this._webApplicationExtension = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webApplicationExtensionInput() {
    return this._webApplicationExtension;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      accept_backlog: cdktf.numberToTerraform(this._acceptBacklog),
      allow_ldap_v2: cdktf.booleanToTerraform(this._allowLdapV2),
      allow_start_tls: cdktf.booleanToTerraform(this._allowStartTls),
      allow_tcp_reuse_address: cdktf.booleanToTerraform(this._allowTcpReuseAddress),
      allowed_client: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedClient),
      auto_authenticate_using_client_certificate: cdktf.booleanToTerraform(this._autoAuthenticateUsingClientCertificate),
      close_connections_on_explicit_gc: cdktf.booleanToTerraform(this._closeConnectionsOnExplicitGc),
      close_connections_when_unavailable: cdktf.booleanToTerraform(this._closeConnectionsWhenUnavailable),
      correlation_id_request_header: cdktf.listMapper(cdktf.stringToTerraform, false)(this._correlationIdRequestHeader),
      correlation_id_response_header: cdktf.stringToTerraform(this._correlationIdResponseHeader),
      denied_client: cdktf.listMapper(cdktf.stringToTerraform, false)(this._deniedClient),
      description: cdktf.stringToTerraform(this._description),
      enable_multipart_mime_parameters: cdktf.booleanToTerraform(this._enableMultipartMimeParameters),
      enable_sni_hostname_checks: cdktf.booleanToTerraform(this._enableSniHostnameChecks),
      enabled: cdktf.booleanToTerraform(this._enabled),
      expensive_thread_check_interval: cdktf.stringToTerraform(this._expensiveThreadCheckInterval),
      expensive_thread_hold_off_interval: cdktf.stringToTerraform(this._expensiveThreadHoldOffInterval),
      expensive_thread_minimum_concurrent_count: cdktf.numberToTerraform(this._expensiveThreadMinimumConcurrentCount),
      failed_bind_response_delay: cdktf.stringToTerraform(this._failedBindResponseDelay),
      http_operation_log_publisher: cdktf.listMapper(cdktf.stringToTerraform, false)(this._httpOperationLogPublisher),
      http_request_header_size: cdktf.numberToTerraform(this._httpRequestHeaderSize),
      http_servlet_extension: cdktf.listMapper(cdktf.stringToTerraform, false)(this._httpServletExtension),
      idle_time_limit: cdktf.stringToTerraform(this._idleTimeLimit),
      include_additional_metrics: cdktf.booleanToTerraform(this._includeAdditionalMetrics),
      keep_stats: cdktf.booleanToTerraform(this._keepStats),
      key_manager_provider: cdktf.stringToTerraform(this._keyManagerProvider),
      ldif_directory: cdktf.stringToTerraform(this._ldifDirectory),
      listen_address: cdktf.listMapper(cdktf.stringToTerraform, false)(this._listenAddress),
      listen_port: cdktf.numberToTerraform(this._listenPort),
      low_resources_connection_threshold: cdktf.numberToTerraform(this._lowResourcesConnectionThreshold),
      low_resources_idle_time_limit: cdktf.stringToTerraform(this._lowResourcesIdleTimeLimit),
      max_blocked_write_time_limit: cdktf.stringToTerraform(this._maxBlockedWriteTimeLimit),
      max_cancel_handlers: cdktf.numberToTerraform(this._maxCancelHandlers),
      max_request_size: cdktf.stringToTerraform(this._maxRequestSize),
      name: cdktf.stringToTerraform(this._name),
      num_accept_handlers: cdktf.numberToTerraform(this._numAcceptHandlers),
      num_request_handlers: cdktf.numberToTerraform(this._numRequestHandlers),
      poll_interval: cdktf.stringToTerraform(this._pollInterval),
      request_handler_per_connection: cdktf.booleanToTerraform(this._requestHandlerPerConnection),
      response_header: cdktf.listMapper(cdktf.stringToTerraform, false)(this._responseHeader),
      send_rejection_notice: cdktf.booleanToTerraform(this._sendRejectionNotice),
      ssl_cert_nickname: cdktf.stringToTerraform(this._sslCertNickname),
      ssl_cipher_suite: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sslCipherSuite),
      ssl_client_auth_policy: cdktf.stringToTerraform(this._sslClientAuthPolicy),
      ssl_protocol: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sslProtocol),
      trust_manager_provider: cdktf.stringToTerraform(this._trustManagerProvider),
      type: cdktf.stringToTerraform(this._type),
      use_correlation_id_header: cdktf.booleanToTerraform(this._useCorrelationIdHeader),
      use_forwarded_headers: cdktf.booleanToTerraform(this._useForwardedHeaders),
      use_haproxy_proxy_protocol: cdktf.booleanToTerraform(this._useHaproxyProxyProtocol),
      use_ssl: cdktf.booleanToTerraform(this._useSsl),
      use_tcp_keep_alive: cdktf.booleanToTerraform(this._useTcpKeepAlive),
      web_application_extension: cdktf.listMapper(cdktf.stringToTerraform, false)(this._webApplicationExtension),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      accept_backlog: {
        value: cdktf.numberToHclTerraform(this._acceptBacklog),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      allow_ldap_v2: {
        value: cdktf.booleanToHclTerraform(this._allowLdapV2),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_start_tls: {
        value: cdktf.booleanToHclTerraform(this._allowStartTls),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_tcp_reuse_address: {
        value: cdktf.booleanToHclTerraform(this._allowTcpReuseAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allowed_client: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedClient),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      auto_authenticate_using_client_certificate: {
        value: cdktf.booleanToHclTerraform(this._autoAuthenticateUsingClientCertificate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      close_connections_on_explicit_gc: {
        value: cdktf.booleanToHclTerraform(this._closeConnectionsOnExplicitGc),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      close_connections_when_unavailable: {
        value: cdktf.booleanToHclTerraform(this._closeConnectionsWhenUnavailable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      correlation_id_request_header: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._correlationIdRequestHeader),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      correlation_id_response_header: {
        value: cdktf.stringToHclTerraform(this._correlationIdResponseHeader),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      denied_client: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._deniedClient),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_multipart_mime_parameters: {
        value: cdktf.booleanToHclTerraform(this._enableMultipartMimeParameters),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_sni_hostname_checks: {
        value: cdktf.booleanToHclTerraform(this._enableSniHostnameChecks),
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
      expensive_thread_check_interval: {
        value: cdktf.stringToHclTerraform(this._expensiveThreadCheckInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      expensive_thread_hold_off_interval: {
        value: cdktf.stringToHclTerraform(this._expensiveThreadHoldOffInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      expensive_thread_minimum_concurrent_count: {
        value: cdktf.numberToHclTerraform(this._expensiveThreadMinimumConcurrentCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      failed_bind_response_delay: {
        value: cdktf.stringToHclTerraform(this._failedBindResponseDelay),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_operation_log_publisher: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._httpOperationLogPublisher),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      http_request_header_size: {
        value: cdktf.numberToHclTerraform(this._httpRequestHeaderSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      http_servlet_extension: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._httpServletExtension),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      idle_time_limit: {
        value: cdktf.stringToHclTerraform(this._idleTimeLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      include_additional_metrics: {
        value: cdktf.booleanToHclTerraform(this._includeAdditionalMetrics),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      keep_stats: {
        value: cdktf.booleanToHclTerraform(this._keepStats),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      key_manager_provider: {
        value: cdktf.stringToHclTerraform(this._keyManagerProvider),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ldif_directory: {
        value: cdktf.stringToHclTerraform(this._ldifDirectory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      listen_address: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._listenAddress),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      listen_port: {
        value: cdktf.numberToHclTerraform(this._listenPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      low_resources_connection_threshold: {
        value: cdktf.numberToHclTerraform(this._lowResourcesConnectionThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      low_resources_idle_time_limit: {
        value: cdktf.stringToHclTerraform(this._lowResourcesIdleTimeLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_blocked_write_time_limit: {
        value: cdktf.stringToHclTerraform(this._maxBlockedWriteTimeLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_cancel_handlers: {
        value: cdktf.numberToHclTerraform(this._maxCancelHandlers),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_request_size: {
        value: cdktf.stringToHclTerraform(this._maxRequestSize),
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
      num_accept_handlers: {
        value: cdktf.numberToHclTerraform(this._numAcceptHandlers),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      num_request_handlers: {
        value: cdktf.numberToHclTerraform(this._numRequestHandlers),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      poll_interval: {
        value: cdktf.stringToHclTerraform(this._pollInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      request_handler_per_connection: {
        value: cdktf.booleanToHclTerraform(this._requestHandlerPerConnection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      response_header: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._responseHeader),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      send_rejection_notice: {
        value: cdktf.booleanToHclTerraform(this._sendRejectionNotice),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ssl_cert_nickname: {
        value: cdktf.stringToHclTerraform(this._sslCertNickname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_cipher_suite: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sslCipherSuite),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      ssl_client_auth_policy: {
        value: cdktf.stringToHclTerraform(this._sslClientAuthPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_protocol: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sslProtocol),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      trust_manager_provider: {
        value: cdktf.stringToHclTerraform(this._trustManagerProvider),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_correlation_id_header: {
        value: cdktf.booleanToHclTerraform(this._useCorrelationIdHeader),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_forwarded_headers: {
        value: cdktf.booleanToHclTerraform(this._useForwardedHeaders),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_haproxy_proxy_protocol: {
        value: cdktf.booleanToHclTerraform(this._useHaproxyProxyProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_ssl: {
        value: cdktf.booleanToHclTerraform(this._useSsl),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_tcp_keep_alive: {
        value: cdktf.booleanToHclTerraform(this._useTcpKeepAlive),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      web_application_extension: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._webApplicationExtension),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
