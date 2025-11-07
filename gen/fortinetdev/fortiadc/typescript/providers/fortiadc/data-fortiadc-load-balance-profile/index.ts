// https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/data-sources/load_balance_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFortiadcLoadBalanceProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/data-sources/load_balance_profile#id DataFortiadcLoadBalanceProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/data-sources/load_balance_profile#mkey DataFortiadcLoadBalanceProfile#mkey}
  */
  readonly mkey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/data-sources/load_balance_profile#vdom DataFortiadcLoadBalanceProfile#vdom}
  */
  readonly vdom?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/data-sources/load_balance_profile fortiadc_load_balance_profile}
*/
export class DataFortiadcLoadBalanceProfile extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiadc_load_balance_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFortiadcLoadBalanceProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFortiadcLoadBalanceProfile to import
  * @param importFromId The id of the existing DataFortiadcLoadBalanceProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/data-sources/load_balance_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFortiadcLoadBalanceProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiadc_load_balance_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/data-sources/load_balance_profile fortiadc_load_balance_profile} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFortiadcLoadBalanceProfileConfig
  */
  public constructor(scope: Construct, id: string, config: DataFortiadcLoadBalanceProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'fortiadc_load_balance_profile',
      terraformGeneratorMetadata: {
        providerName: 'fortiadc',
        providerVersion: '1.3.1'
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
    this._mkey = config.mkey;
    this._vdom = config.vdom;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_ssl_versions - computed: true, optional: false, required: false
  public get allowSslVersions() {
    return this.getStringAttribute('allow_ssl_versions');
  }

  // cert_verify - computed: true, optional: false, required: false
  public get certVerify() {
    return this.getStringAttribute('cert_verify');
  }

  // client_address - computed: true, optional: false, required: false
  public get clientAddress() {
    return this.getStringAttribute('client_address');
  }

  // client_keepalive - computed: true, optional: false, required: false
  public get clientKeepalive() {
    return this.getStringAttribute('client_keepalive');
  }

  // client_protocol - computed: true, optional: false, required: false
  public get clientProtocol() {
    return this.getStringAttribute('client_protocol');
  }

  // client_sni_required - computed: true, optional: false, required: false
  public get clientSniRequired() {
    return this.getStringAttribute('client_sni_required');
  }

  // client_ssl - computed: true, optional: false, required: false
  public get clientSsl() {
    return this.getStringAttribute('client_ssl');
  }

  // client_timeout - computed: true, optional: false, required: false
  public get clientTimeout() {
    return this.getStringAttribute('client_timeout');
  }

  // compression - computed: true, optional: false, required: false
  public get compression() {
    return this.getStringAttribute('compression');
  }

  // connect_timeout - computed: true, optional: false, required: false
  public get connectTimeout() {
    return this.getStringAttribute('connect_timeout');
  }

  // customized_ssl_ciphers - computed: true, optional: false, required: false
  public get customizedSslCiphers() {
    return this.getStringAttribute('customized_ssl_ciphers');
  }

  // customized_ssl_ciphers_flag - computed: true, optional: false, required: false
  public get customizedSslCiphersFlag() {
    return this.getStringAttribute('customized_ssl_ciphers_flag');
  }

  // decompression - computed: true, optional: false, required: false
  public get decompression() {
    return this.getStringAttribute('decompression');
  }

  // deploy_mode - computed: true, optional: false, required: false
  public get deployMode() {
    return this.getStringAttribute('deploy_mode');
  }

  // dns_authenticate_flag - computed: true, optional: false, required: false
  public get dnsAuthenticateFlag() {
    return this.getStringAttribute('dns_authenticate_flag');
  }

  // dns_cache_ageout_time - computed: true, optional: false, required: false
  public get dnsCacheAgeoutTime() {
    return this.getStringAttribute('dns_cache_ageout_time');
  }

  // dns_cache_entry_size - computed: true, optional: false, required: false
  public get dnsCacheEntrySize() {
    return this.getStringAttribute('dns_cache_entry_size');
  }

  // dns_cache_flag - computed: true, optional: false, required: false
  public get dnsCacheFlag() {
    return this.getStringAttribute('dns_cache_flag');
  }

  // dns_cache_response_type - computed: true, optional: false, required: false
  public get dnsCacheResponseType() {
    return this.getStringAttribute('dns_cache_response_type');
  }

  // dns_cache_size - computed: true, optional: false, required: false
  public get dnsCacheSize() {
    return this.getStringAttribute('dns_cache_size');
  }

  // dns_malform_query_action - computed: true, optional: false, required: false
  public get dnsMalformQueryAction() {
    return this.getStringAttribute('dns_malform_query_action');
  }

  // dns_max_query_length - computed: true, optional: false, required: false
  public get dnsMaxQueryLength() {
    return this.getStringAttribute('dns_max_query_length');
  }

  // dynamic_auth - computed: true, optional: false, required: false
  public get dynamicAuth() {
    return this.getStringAttribute('dynamic_auth');
  }

  // dynamic_auth_port - computed: true, optional: false, required: false
  public get dynamicAuthPort() {
    return this.getStringAttribute('dynamic_auth_port');
  }

  // failed_client_str - computed: true, optional: false, required: false
  public get failedClientStr() {
    return this.getStringAttribute('failed_client_str');
  }

  // failed_client_type - computed: true, optional: false, required: false
  public get failedClientType() {
    return this.getStringAttribute('failed_client_type');
  }

  // failed_server_str - computed: true, optional: false, required: false
  public get failedServerStr() {
    return this.getStringAttribute('failed_server_str');
  }

  // failed_server_type - computed: true, optional: false, required: false
  public get failedServerType() {
    return this.getStringAttribute('failed_server_type');
  }

  // forward_client_certificate - computed: true, optional: false, required: false
  public get forwardClientCertificate() {
    return this.getStringAttribute('forward_client_certificate');
  }

  // forward_client_certificate_header - computed: true, optional: false, required: false
  public get forwardClientCertificateHeader() {
    return this.getStringAttribute('forward_client_certificate_header');
  }

  // geoip_list - computed: true, optional: false, required: false
  public get geoipList() {
    return this.getStringAttribute('geoip_list');
  }

  // geoip_redirect - computed: true, optional: false, required: false
  public get geoipRedirect() {
    return this.getStringAttribute('geoip_redirect');
  }

  // http2_profile - computed: true, optional: false, required: false
  public get http2Profile() {
    return this.getStringAttribute('http2_profile');
  }

  // http_keepalive_timeout - computed: true, optional: false, required: false
  public get httpKeepaliveTimeout() {
    return this.getStringAttribute('http_keepalive_timeout');
  }

  // http_mode - computed: true, optional: false, required: false
  public get httpMode() {
    return this.getStringAttribute('http_mode');
  }

  // http_request_timeout - computed: true, optional: false, required: false
  public get httpRequestTimeout() {
    return this.getStringAttribute('http_request_timeout');
  }

  // http_send_timeout - computed: true, optional: false, required: false
  public get httpSendTimeout() {
    return this.getStringAttribute('http_send_timeout');
  }

  // http_x_forwarded_for - computed: true, optional: false, required: false
  public get httpXForwardedFor() {
    return this.getStringAttribute('http_x_forwarded_for');
  }

  // http_x_forwarded_for_header - computed: true, optional: false, required: false
  public get httpXForwardedForHeader() {
    return this.getStringAttribute('http_x_forwarded_for_header');
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

  // idle_time - computed: true, optional: false, required: false
  public get idleTime() {
    return this.getStringAttribute('idle_time');
  }

  // idle_timeout - computed: true, optional: false, required: false
  public get idleTimeout() {
    return this.getStringAttribute('idle_timeout');
  }

  // insert_client_ip - computed: true, optional: false, required: false
  public get insertClientIp() {
    return this.getStringAttribute('insert_client_ip');
  }

  // intermediate_ca_group - computed: true, optional: false, required: false
  public get intermediateCaGroup() {
    return this.getStringAttribute('intermediate_ca_group');
  }

  // ip_reputation - computed: true, optional: false, required: false
  public get ipReputation() {
    return this.getStringAttribute('ip_reputation');
  }

  // ip_reputation_redirect - computed: true, optional: false, required: false
  public get ipReputationRedirect() {
    return this.getStringAttribute('ip_reputation_redirect');
  }

  // length_indicator_shift - computed: true, optional: false, required: false
  public get lengthIndicatorShift() {
    return this.getStringAttribute('length_indicator_shift');
  }

  // length_indicator_size - computed: true, optional: false, required: false
  public get lengthIndicatorSize() {
    return this.getStringAttribute('length_indicator_size');
  }

  // length_indicator_type - computed: true, optional: false, required: false
  public get lengthIndicatorType() {
    return this.getStringAttribute('length_indicator_type');
  }

  // local_cert - computed: true, optional: false, required: false
  public get localCert() {
    return this.getStringAttribute('local_cert');
  }

  // local_cert_group - computed: true, optional: false, required: false
  public get localCertGroup() {
    return this.getStringAttribute('local_cert_group');
  }

  // max_header_size - computed: true, optional: false, required: false
  public get maxHeaderSize() {
    return this.getStringAttribute('max_header_size');
  }

  // max_http_headers - computed: true, optional: false, required: false
  public get maxHttpHeaders() {
    return this.getStringAttribute('max_http_headers');
  }

  // media_address - computed: true, optional: false, required: false
  public get mediaAddress() {
    return this.getStringAttribute('media_address');
  }

  // mkey - computed: false, optional: false, required: true
  private _mkey?: string; 
  public get mkey() {
    return this.getStringAttribute('mkey');
  }
  public set mkey(value: string) {
    this._mkey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mkeyInput() {
    return this._mkey;
  }

  // msg_encode_type - computed: true, optional: false, required: false
  public get msgEncodeType() {
    return this.getStringAttribute('msg_encode_type');
  }

  // mysql_mode - computed: true, optional: false, required: false
  public get mysqlMode() {
    return this.getStringAttribute('mysql_mode');
  }

  // new_ssl_ciphers_long - computed: true, optional: false, required: false
  public get newSslCiphersLong() {
    return this.getStringAttribute('new_ssl_ciphers_long');
  }

  // opt_header_length - computed: true, optional: false, required: false
  public get optHeaderLength() {
    return this.getStringAttribute('opt_header_length');
  }

  // opt_trailer_hex - computed: true, optional: false, required: false
  public get optTrailerHex() {
    return this.getStringAttribute('opt_trailer_hex');
  }

  // origin_host - computed: true, optional: false, required: false
  public get originHost() {
    return this.getStringAttribute('origin_host');
  }

  // origin_realm - computed: true, optional: false, required: false
  public get originRealm() {
    return this.getStringAttribute('origin_realm');
  }

  // product_name - computed: true, optional: false, required: false
  public get productName() {
    return this.getStringAttribute('product_name');
  }

  // queue_timeout - computed: true, optional: false, required: false
  public get queueTimeout() {
    return this.getStringAttribute('queue_timeout');
  }

  // ram_caching - computed: true, optional: false, required: false
  public get ramCaching() {
    return this.getStringAttribute('ram_caching');
  }

  // response_half_closed_request - computed: true, optional: false, required: false
  public get responseHalfClosedRequest() {
    return this.getStringAttribute('response_half_closed_request');
  }

  // security_mode - computed: true, optional: false, required: false
  public get securityMode() {
    return this.getStringAttribute('security_mode');
  }

  // server_age - computed: true, optional: false, required: false
  public get serverAge() {
    return this.getStringAttribute('server_age');
  }

  // server_close_propagation - computed: true, optional: false, required: false
  public get serverClosePropagation() {
    return this.getStringAttribute('server_close_propagation');
  }

  // server_keepalive - computed: true, optional: false, required: false
  public get serverKeepalive() {
    return this.getStringAttribute('server_keepalive');
  }

  // server_keepalive_timeout - computed: true, optional: false, required: false
  public get serverKeepaliveTimeout() {
    return this.getStringAttribute('server_keepalive_timeout');
  }

  // server_max_size - computed: true, optional: false, required: false
  public get serverMaxSize() {
    return this.getStringAttribute('server_max_size');
  }

  // server_protocol - computed: true, optional: false, required: false
  public get serverProtocol() {
    return this.getStringAttribute('server_protocol');
  }

  // server_timeout - computed: true, optional: false, required: false
  public get serverTimeout() {
    return this.getStringAttribute('server_timeout');
  }

  // sip_dlg_timeout - computed: true, optional: false, required: false
  public get sipDlgTimeout() {
    return this.getStringAttribute('sip_dlg_timeout');
  }

  // sip_max_size - computed: true, optional: false, required: false
  public get sipMaxSize() {
    return this.getStringAttribute('sip_max_size');
  }

  // smtp_disable_command - computed: true, optional: false, required: false
  public get smtpDisableCommand() {
    return this.getStringAttribute('smtp_disable_command');
  }

  // smtp_disable_command_status - computed: true, optional: false, required: false
  public get smtpDisableCommandStatus() {
    return this.getStringAttribute('smtp_disable_command_status');
  }

  // smtp_domain_name - computed: true, optional: false, required: false
  public get smtpDomainName() {
    return this.getStringAttribute('smtp_domain_name');
  }

  // source_port - computed: true, optional: false, required: false
  public get sourcePort() {
    return this.getStringAttribute('source_port');
  }

  // ssl - computed: true, optional: false, required: false
  public get ssl() {
    return this.getStringAttribute('ssl');
  }

  // ssl_algorithm - computed: true, optional: false, required: false
  public get sslAlgorithm() {
    return this.getStringAttribute('ssl_algorithm');
  }

  // ssl_ciphers - computed: true, optional: false, required: false
  public get sslCiphers() {
    return this.getStringAttribute('ssl_ciphers');
  }

  // ssl_proxy - computed: true, optional: false, required: false
  public get sslProxy() {
    return this.getStringAttribute('ssl_proxy');
  }

  // starttls_active_mode - computed: true, optional: false, required: false
  public get starttlsActiveMode() {
    return this.getStringAttribute('starttls_active_mode');
  }

  // stateless - computed: true, optional: false, required: false
  public get stateless() {
    return this.getStringAttribute('stateless');
  }

  // timeout_ip_session - computed: true, optional: false, required: false
  public get timeoutIpSession() {
    return this.getStringAttribute('timeout_ip_session');
  }

  // timeout_radius_session - computed: true, optional: false, required: false
  public get timeoutRadiusSession() {
    return this.getStringAttribute('timeout_radius_session');
  }

  // timeout_tcp_session - computed: true, optional: false, required: false
  public get timeoutTcpSession() {
    return this.getStringAttribute('timeout_tcp_session');
  }

  // timeout_tcp_session_after_fin - computed: true, optional: false, required: false
  public get timeoutTcpSessionAfterFin() {
    return this.getStringAttribute('timeout_tcp_session_after_fin');
  }

  // timeout_udp_session - computed: true, optional: false, required: false
  public get timeoutUdpSession() {
    return this.getStringAttribute('timeout_udp_session');
  }

  // tune_bufsize - computed: true, optional: false, required: false
  public get tuneBufsize() {
    return this.getStringAttribute('tune_bufsize');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // use_tls_tickets - computed: true, optional: false, required: false
  public get useTlsTickets() {
    return this.getStringAttribute('use_tls_tickets');
  }

  // vdom - computed: false, optional: true, required: false
  private _vdom?: string; 
  public get vdom() {
    return this.getStringAttribute('vdom');
  }
  public set vdom(value: string) {
    this._vdom = value;
  }
  public resetVdom() {
    this._vdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomInput() {
    return this._vdom;
  }

  // vendor_id - computed: true, optional: false, required: false
  public get vendorId() {
    return this.getStringAttribute('vendor_id');
  }

  // whitelist - computed: true, optional: false, required: false
  public get whitelist() {
    return this.getStringAttribute('whitelist');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      mkey: cdktf.stringToTerraform(this._mkey),
      vdom: cdktf.stringToTerraform(this._vdom),
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
      mkey: {
        value: cdktf.stringToHclTerraform(this._mkey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdom: {
        value: cdktf.stringToHclTerraform(this._vdom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
