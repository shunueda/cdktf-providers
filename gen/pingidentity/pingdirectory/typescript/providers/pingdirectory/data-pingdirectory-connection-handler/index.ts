// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/connection_handler
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPingdirectoryConnectionHandlerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of this config object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/connection_handler#name DataPingdirectoryConnectionHandler#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/connection_handler pingdirectory_connection_handler}
*/
export class DataPingdirectoryConnectionHandler extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_connection_handler";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPingdirectoryConnectionHandler resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPingdirectoryConnectionHandler to import
  * @param importFromId The id of the existing DataPingdirectoryConnectionHandler that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/connection_handler#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPingdirectoryConnectionHandler to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_connection_handler", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/connection_handler pingdirectory_connection_handler} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPingdirectoryConnectionHandlerConfig
  */
  public constructor(scope: Construct, id: string, config: DataPingdirectoryConnectionHandlerConfig) {
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
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accept_backlog - computed: true, optional: false, required: false
  public get acceptBacklog() {
    return this.getNumberAttribute('accept_backlog');
  }

  // allow_ldap_v2 - computed: true, optional: false, required: false
  public get allowLdapV2() {
    return this.getBooleanAttribute('allow_ldap_v2');
  }

  // allow_start_tls - computed: true, optional: false, required: false
  public get allowStartTls() {
    return this.getBooleanAttribute('allow_start_tls');
  }

  // allow_tcp_reuse_address - computed: true, optional: false, required: false
  public get allowTcpReuseAddress() {
    return this.getBooleanAttribute('allow_tcp_reuse_address');
  }

  // allowed_client - computed: true, optional: false, required: false
  public get allowedClient() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_client'));
  }

  // auto_authenticate_using_client_certificate - computed: true, optional: false, required: false
  public get autoAuthenticateUsingClientCertificate() {
    return this.getBooleanAttribute('auto_authenticate_using_client_certificate');
  }

  // close_connections_on_explicit_gc - computed: true, optional: false, required: false
  public get closeConnectionsOnExplicitGc() {
    return this.getBooleanAttribute('close_connections_on_explicit_gc');
  }

  // close_connections_when_unavailable - computed: true, optional: false, required: false
  public get closeConnectionsWhenUnavailable() {
    return this.getBooleanAttribute('close_connections_when_unavailable');
  }

  // correlation_id_request_header - computed: true, optional: false, required: false
  public get correlationIdRequestHeader() {
    return cdktf.Fn.tolist(this.getListAttribute('correlation_id_request_header'));
  }

  // correlation_id_response_header - computed: true, optional: false, required: false
  public get correlationIdResponseHeader() {
    return this.getStringAttribute('correlation_id_response_header');
  }

  // denied_client - computed: true, optional: false, required: false
  public get deniedClient() {
    return cdktf.Fn.tolist(this.getListAttribute('denied_client'));
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // enable_multipart_mime_parameters - computed: true, optional: false, required: false
  public get enableMultipartMimeParameters() {
    return this.getBooleanAttribute('enable_multipart_mime_parameters');
  }

  // enable_sni_hostname_checks - computed: true, optional: false, required: false
  public get enableSniHostnameChecks() {
    return this.getBooleanAttribute('enable_sni_hostname_checks');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // expensive_thread_check_interval - computed: true, optional: false, required: false
  public get expensiveThreadCheckInterval() {
    return this.getStringAttribute('expensive_thread_check_interval');
  }

  // expensive_thread_hold_off_interval - computed: true, optional: false, required: false
  public get expensiveThreadHoldOffInterval() {
    return this.getStringAttribute('expensive_thread_hold_off_interval');
  }

  // expensive_thread_minimum_concurrent_count - computed: true, optional: false, required: false
  public get expensiveThreadMinimumConcurrentCount() {
    return this.getNumberAttribute('expensive_thread_minimum_concurrent_count');
  }

  // failed_bind_response_delay - computed: true, optional: false, required: false
  public get failedBindResponseDelay() {
    return this.getStringAttribute('failed_bind_response_delay');
  }

  // http_operation_log_publisher - computed: true, optional: false, required: false
  public get httpOperationLogPublisher() {
    return cdktf.Fn.tolist(this.getListAttribute('http_operation_log_publisher'));
  }

  // http_request_header_size - computed: true, optional: false, required: false
  public get httpRequestHeaderSize() {
    return this.getNumberAttribute('http_request_header_size');
  }

  // http_servlet_extension - computed: true, optional: false, required: false
  public get httpServletExtension() {
    return cdktf.Fn.tolist(this.getListAttribute('http_servlet_extension'));
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // idle_time_limit - computed: true, optional: false, required: false
  public get idleTimeLimit() {
    return this.getStringAttribute('idle_time_limit');
  }

  // include_additional_metrics - computed: true, optional: false, required: false
  public get includeAdditionalMetrics() {
    return this.getBooleanAttribute('include_additional_metrics');
  }

  // keep_stats - computed: true, optional: false, required: false
  public get keepStats() {
    return this.getBooleanAttribute('keep_stats');
  }

  // key_manager_provider - computed: true, optional: false, required: false
  public get keyManagerProvider() {
    return this.getStringAttribute('key_manager_provider');
  }

  // ldif_directory - computed: true, optional: false, required: false
  public get ldifDirectory() {
    return this.getStringAttribute('ldif_directory');
  }

  // listen_address - computed: true, optional: false, required: false
  public get listenAddress() {
    return cdktf.Fn.tolist(this.getListAttribute('listen_address'));
  }

  // listen_port - computed: true, optional: false, required: false
  public get listenPort() {
    return this.getNumberAttribute('listen_port');
  }

  // low_resources_connection_threshold - computed: true, optional: false, required: false
  public get lowResourcesConnectionThreshold() {
    return this.getNumberAttribute('low_resources_connection_threshold');
  }

  // low_resources_idle_time_limit - computed: true, optional: false, required: false
  public get lowResourcesIdleTimeLimit() {
    return this.getStringAttribute('low_resources_idle_time_limit');
  }

  // max_blocked_write_time_limit - computed: true, optional: false, required: false
  public get maxBlockedWriteTimeLimit() {
    return this.getStringAttribute('max_blocked_write_time_limit');
  }

  // max_cancel_handlers - computed: true, optional: false, required: false
  public get maxCancelHandlers() {
    return this.getNumberAttribute('max_cancel_handlers');
  }

  // max_request_size - computed: true, optional: false, required: false
  public get maxRequestSize() {
    return this.getStringAttribute('max_request_size');
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

  // num_accept_handlers - computed: true, optional: false, required: false
  public get numAcceptHandlers() {
    return this.getNumberAttribute('num_accept_handlers');
  }

  // num_request_handlers - computed: true, optional: false, required: false
  public get numRequestHandlers() {
    return this.getNumberAttribute('num_request_handlers');
  }

  // poll_interval - computed: true, optional: false, required: false
  public get pollInterval() {
    return this.getStringAttribute('poll_interval');
  }

  // request_handler_per_connection - computed: true, optional: false, required: false
  public get requestHandlerPerConnection() {
    return this.getBooleanAttribute('request_handler_per_connection');
  }

  // response_header - computed: true, optional: false, required: false
  public get responseHeader() {
    return cdktf.Fn.tolist(this.getListAttribute('response_header'));
  }

  // send_rejection_notice - computed: true, optional: false, required: false
  public get sendRejectionNotice() {
    return this.getBooleanAttribute('send_rejection_notice');
  }

  // ssl_cert_nickname - computed: true, optional: false, required: false
  public get sslCertNickname() {
    return this.getStringAttribute('ssl_cert_nickname');
  }

  // ssl_cipher_suite - computed: true, optional: false, required: false
  public get sslCipherSuite() {
    return cdktf.Fn.tolist(this.getListAttribute('ssl_cipher_suite'));
  }

  // ssl_client_auth_policy - computed: true, optional: false, required: false
  public get sslClientAuthPolicy() {
    return this.getStringAttribute('ssl_client_auth_policy');
  }

  // ssl_protocol - computed: true, optional: false, required: false
  public get sslProtocol() {
    return cdktf.Fn.tolist(this.getListAttribute('ssl_protocol'));
  }

  // trust_manager_provider - computed: true, optional: false, required: false
  public get trustManagerProvider() {
    return this.getStringAttribute('trust_manager_provider');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // use_correlation_id_header - computed: true, optional: false, required: false
  public get useCorrelationIdHeader() {
    return this.getBooleanAttribute('use_correlation_id_header');
  }

  // use_forwarded_headers - computed: true, optional: false, required: false
  public get useForwardedHeaders() {
    return this.getBooleanAttribute('use_forwarded_headers');
  }

  // use_haproxy_proxy_protocol - computed: true, optional: false, required: false
  public get useHaproxyProxyProtocol() {
    return this.getBooleanAttribute('use_haproxy_proxy_protocol');
  }

  // use_ssl - computed: true, optional: false, required: false
  public get useSsl() {
    return this.getBooleanAttribute('use_ssl');
  }

  // use_tcp_keep_alive - computed: true, optional: false, required: false
  public get useTcpKeepAlive() {
    return this.getBooleanAttribute('use_tcp_keep_alive');
  }

  // web_application_extension - computed: true, optional: false, required: false
  public get webApplicationExtension() {
    return cdktf.Fn.tolist(this.getListAttribute('web_application_extension'));
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
