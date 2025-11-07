// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnssl_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpnsslSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnssl_settings#algorithm VpnsslSettings#algorithm}
  */
  readonly algorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnssl_settings#auth_session_check_source_ip VpnsslSettings#auth_session_check_source_ip}
  */
  readonly authSessionCheckSourceIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnssl_settings#auth_timeout VpnsslSettings#auth_timeout}
  */
  readonly authTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnssl_settings#auto_tunnel_static_route VpnsslSettings#auto_tunnel_static_route}
  */
  readonly autoTunnelStaticRoute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnssl_settings#banned_cipher VpnsslSettings#banned_cipher}
  */
  readonly bannedCipher?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnssl_settings#browser_language_detection VpnsslSettings#browser_language_detection}
  */
  readonly browserLanguageDetection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnssl_settings#check_referer VpnsslSettings#check_referer}
  */
  readonly checkReferer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnssl_settings#ciphersuite VpnsslSettings#ciphersuite}
  */
  readonly ciphersuite?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnssl_settings#client_sigalgs VpnsslSettings#client_sigalgs}
  */
  readonly clientSigalgs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnssl_settings#default_portal VpnsslSettings#default_portal}
  */
  readonly defaultPortal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnssl_settings#deflate_compression_level VpnsslSettings#deflate_compression_level}
  */
  readonly deflateCompressionLevel?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnssl_settings#deflate_min_data_size VpnsslSettings#deflate_min_data_size}
  */
  readonly deflateMinDataSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnssl_settings#dns_server1 VpnsslSettings#dns_server1}
  */
  readonly dnsServer1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnssl_settings#dns_server2 VpnsslSettings#dns_server2}
  */
  readonly dnsServer2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnssl_settings#dns_suffix VpnsslSettings#dns_suffix}
  */
  readonly dnsSuffix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnssl_settings#dtls_heartbeat_fail_count VpnsslSettings#dtls_heartbeat_fail_count}
  */
  readonly dtlsHeartbeatFailCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnssl_settings#dtls_heartbeat_idle_timeout VpnsslSettings#dtls_heartbeat_idle_timeout}
  */
  readonly dtlsHeartbeatIdleTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnssl_settings#dtls_heartbeat_interval VpnsslSettings#dtls_heartbeat_interval}
  */
  readonly dtlsHeartbeatInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnssl_settings#dtls_hello_timeout VpnsslSettings#dtls_hello_timeout}
  */
  readonly dtlsHelloTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnssl_settings#dtls_max_proto_ver VpnsslSettings#dtls_max_proto_ver}
  */
  readonly dtlsMaxProtoVer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnssl_settings#dtls_min_proto_ver VpnsslSettings#dtls_min_proto_ver}
  */
  readonly dtlsMinProtoVer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnssl_settings#dtls_tunnel VpnsslSettings#dtls_tunnel}
  */
  readonly dtlsTunnel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnssl_settings#dual_stack_mode VpnsslSettings#dual_stack_mode}
  */
  readonly dualStackMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnssl_settings#dynamic_sort_subtable VpnsslSettings#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnssl_settings#encode_2f_sequence VpnsslSettings#encode_2f_sequence}
  */
  readonly encode2FSequence?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnssl_settings#encrypt_and_store_password VpnsslSettings#encrypt_and_store_password}
  */
  readonly encryptAndStorePassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnssl_settings#force_two_factor_auth VpnsslSettings#force_two_factor_auth}
  */
  readonly forceTwoFactorAuth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnssl_settings#get_all_tables VpnsslSettings#get_all_tables}
  */
  readonly fetchAllTables?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnssl_settings#header_x_forwarded_for VpnsslSettings#header_x_forwarded_for}
  */
  readonly headerXForwardedFor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnssl_settings#hsts_include_subdomains VpnsslSettings#hsts_include_subdomains}
  */
  readonly hstsIncludeSubdomains?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnssl_settings#http_compression VpnsslSettings#http_compression}
  */
  readonly httpCompression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnssl_settings#http_only_cookie VpnsslSettings#http_only_cookie}
  */
  readonly httpOnlyCookie?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnssl_settings#http_request_body_timeout VpnsslSettings#http_request_body_timeout}
  */
  readonly httpRequestBodyTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnssl_settings#http_request_header_timeout VpnsslSettings#http_request_header_timeout}
  */
  readonly httpRequestHeaderTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnssl_settings#https_redirect VpnsslSettings#https_redirect}
  */
  readonly httpsRedirect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnssl_settings#id VpnsslSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnssl_settings#idle_timeout VpnsslSettings#idle_timeout}
  */
  readonly idleTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnssl_settings#ipv6_dns_server1 VpnsslSettings#ipv6_dns_server1}
  */
  readonly ipv6DnsServer1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnssl_settings#ipv6_dns_server2 VpnsslSettings#ipv6_dns_server2}
  */
  readonly ipv6DnsServer2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnssl_settings#ipv6_wins_server1 VpnsslSettings#ipv6_wins_server1}
  */
  readonly ipv6WinsServer1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnssl_settings#ipv6_wins_server2 VpnsslSettings#ipv6_wins_server2}
  */
  readonly ipv6WinsServer2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnssl_settings#login_attempt_limit VpnsslSettings#login_attempt_limit}
  */
  readonly loginAttemptLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnssl_settings#login_block_time VpnsslSettings#login_block_time}
  */
  readonly loginBlockTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnssl_settings#login_timeout VpnsslSettings#login_timeout}
  */
  readonly loginTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnssl_settings#port VpnsslSettings#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnssl_settings#port_precedence VpnsslSettings#port_precedence}
  */
  readonly portPrecedence?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnssl_settings#reqclientcert VpnsslSettings#reqclientcert}
  */
  readonly reqclientcert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnssl_settings#route_source_interface VpnsslSettings#route_source_interface}
  */
  readonly routeSourceInterface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnssl_settings#saml_redirect_port VpnsslSettings#saml_redirect_port}
  */
  readonly samlRedirectPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnssl_settings#server_hostname VpnsslSettings#server_hostname}
  */
  readonly serverHostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnssl_settings#servercert VpnsslSettings#servercert}
  */
  readonly servercert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnssl_settings#source_address6_negate VpnsslSettings#source_address6_negate}
  */
  readonly sourceAddress6Negate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnssl_settings#source_address_negate VpnsslSettings#source_address_negate}
  */
  readonly sourceAddressNegate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnssl_settings#ssl_client_renegotiation VpnsslSettings#ssl_client_renegotiation}
  */
  readonly sslClientRenegotiation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnssl_settings#ssl_insert_empty_fragment VpnsslSettings#ssl_insert_empty_fragment}
  */
  readonly sslInsertEmptyFragment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnssl_settings#ssl_max_proto_ver VpnsslSettings#ssl_max_proto_ver}
  */
  readonly sslMaxProtoVer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnssl_settings#ssl_min_proto_ver VpnsslSettings#ssl_min_proto_ver}
  */
  readonly sslMinProtoVer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnssl_settings#status VpnsslSettings#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnssl_settings#tlsv1_0 VpnsslSettings#tlsv1_0}
  */
  readonly tlsv10?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnssl_settings#tlsv1_1 VpnsslSettings#tlsv1_1}
  */
  readonly tlsv11?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnssl_settings#tlsv1_2 VpnsslSettings#tlsv1_2}
  */
  readonly tlsv12?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnssl_settings#tlsv1_3 VpnsslSettings#tlsv1_3}
  */
  readonly tlsv13?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnssl_settings#transform_backward_slashes VpnsslSettings#transform_backward_slashes}
  */
  readonly transformBackwardSlashes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnssl_settings#tunnel_addr_assigned_method VpnsslSettings#tunnel_addr_assigned_method}
  */
  readonly tunnelAddrAssignedMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnssl_settings#tunnel_connect_without_reauth VpnsslSettings#tunnel_connect_without_reauth}
  */
  readonly tunnelConnectWithoutReauth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnssl_settings#tunnel_user_session_timeout VpnsslSettings#tunnel_user_session_timeout}
  */
  readonly tunnelUserSessionTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnssl_settings#unsafe_legacy_renegotiation VpnsslSettings#unsafe_legacy_renegotiation}
  */
  readonly unsafeLegacyRenegotiation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnssl_settings#url_obscuration VpnsslSettings#url_obscuration}
  */
  readonly urlObscuration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnssl_settings#user_peer VpnsslSettings#user_peer}
  */
  readonly userPeer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnssl_settings#vdomparam VpnsslSettings#vdomparam}
  */
  readonly vdomparam?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnssl_settings#web_mode_snat VpnsslSettings#web_mode_snat}
  */
  readonly webModeSnat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnssl_settings#wins_server1 VpnsslSettings#wins_server1}
  */
  readonly winsServer1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnssl_settings#wins_server2 VpnsslSettings#wins_server2}
  */
  readonly winsServer2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnssl_settings#x_content_type_options VpnsslSettings#x_content_type_options}
  */
  readonly xContentTypeOptions?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnssl_settings#ztna_trusted_client VpnsslSettings#ztna_trusted_client}
  */
  readonly ztnaTrustedClient?: string;
  /**
  * authentication_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnssl_settings#authentication_rule VpnsslSettings#authentication_rule}
  */
  readonly authenticationRule?: VpnsslSettingsAuthenticationRule[] | cdktf.IResolvable;
  /**
  * source_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnssl_settings#source_address VpnsslSettings#source_address}
  */
  readonly sourceAddress?: VpnsslSettingsSourceAddress[] | cdktf.IResolvable;
  /**
  * source_address6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnssl_settings#source_address6 VpnsslSettings#source_address6}
  */
  readonly sourceAddress6?: VpnsslSettingsSourceAddress6[] | cdktf.IResolvable;
  /**
  * source_interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnssl_settings#source_interface VpnsslSettings#source_interface}
  */
  readonly sourceInterface?: VpnsslSettingsSourceInterface[] | cdktf.IResolvable;
  /**
  * tunnel_ip_pools block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnssl_settings#tunnel_ip_pools VpnsslSettings#tunnel_ip_pools}
  */
  readonly tunnelIpPools?: VpnsslSettingsTunnelIpPools[] | cdktf.IResolvable;
  /**
  * tunnel_ipv6_pools block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnssl_settings#tunnel_ipv6_pools VpnsslSettings#tunnel_ipv6_pools}
  */
  readonly tunnelIpv6Pools?: VpnsslSettingsTunnelIpv6Pools[] | cdktf.IResolvable;
}
export interface VpnsslSettingsAuthenticationRuleGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnssl_settings#name VpnsslSettings#name}
  */
  readonly name?: string;
}

export function vpnsslSettingsAuthenticationRuleGroupsToTerraform(struct?: VpnsslSettingsAuthenticationRuleGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function vpnsslSettingsAuthenticationRuleGroupsToHclTerraform(struct?: VpnsslSettingsAuthenticationRuleGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpnsslSettingsAuthenticationRuleGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpnsslSettingsAuthenticationRuleGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnsslSettingsAuthenticationRuleGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}

export class VpnsslSettingsAuthenticationRuleGroupsList extends cdktf.ComplexList {
  public internalValue? : VpnsslSettingsAuthenticationRuleGroups[] | cdktf.IResolvable

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
  public get(index: number): VpnsslSettingsAuthenticationRuleGroupsOutputReference {
    return new VpnsslSettingsAuthenticationRuleGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VpnsslSettingsAuthenticationRuleSourceAddress {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnssl_settings#name VpnsslSettings#name}
  */
  readonly name?: string;
}

export function vpnsslSettingsAuthenticationRuleSourceAddressToTerraform(struct?: VpnsslSettingsAuthenticationRuleSourceAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function vpnsslSettingsAuthenticationRuleSourceAddressToHclTerraform(struct?: VpnsslSettingsAuthenticationRuleSourceAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpnsslSettingsAuthenticationRuleSourceAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpnsslSettingsAuthenticationRuleSourceAddress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnsslSettingsAuthenticationRuleSourceAddress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}

export class VpnsslSettingsAuthenticationRuleSourceAddressList extends cdktf.ComplexList {
  public internalValue? : VpnsslSettingsAuthenticationRuleSourceAddress[] | cdktf.IResolvable

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
  public get(index: number): VpnsslSettingsAuthenticationRuleSourceAddressOutputReference {
    return new VpnsslSettingsAuthenticationRuleSourceAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VpnsslSettingsAuthenticationRuleSourceAddress6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnssl_settings#name VpnsslSettings#name}
  */
  readonly name?: string;
}

export function vpnsslSettingsAuthenticationRuleSourceAddress6ToTerraform(struct?: VpnsslSettingsAuthenticationRuleSourceAddress6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function vpnsslSettingsAuthenticationRuleSourceAddress6ToHclTerraform(struct?: VpnsslSettingsAuthenticationRuleSourceAddress6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpnsslSettingsAuthenticationRuleSourceAddress6OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpnsslSettingsAuthenticationRuleSourceAddress6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnsslSettingsAuthenticationRuleSourceAddress6 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}

export class VpnsslSettingsAuthenticationRuleSourceAddress6List extends cdktf.ComplexList {
  public internalValue? : VpnsslSettingsAuthenticationRuleSourceAddress6[] | cdktf.IResolvable

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
  public get(index: number): VpnsslSettingsAuthenticationRuleSourceAddress6OutputReference {
    return new VpnsslSettingsAuthenticationRuleSourceAddress6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VpnsslSettingsAuthenticationRuleSourceInterface {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnssl_settings#name VpnsslSettings#name}
  */
  readonly name?: string;
}

export function vpnsslSettingsAuthenticationRuleSourceInterfaceToTerraform(struct?: VpnsslSettingsAuthenticationRuleSourceInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function vpnsslSettingsAuthenticationRuleSourceInterfaceToHclTerraform(struct?: VpnsslSettingsAuthenticationRuleSourceInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpnsslSettingsAuthenticationRuleSourceInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpnsslSettingsAuthenticationRuleSourceInterface | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnsslSettingsAuthenticationRuleSourceInterface | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}

export class VpnsslSettingsAuthenticationRuleSourceInterfaceList extends cdktf.ComplexList {
  public internalValue? : VpnsslSettingsAuthenticationRuleSourceInterface[] | cdktf.IResolvable

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
  public get(index: number): VpnsslSettingsAuthenticationRuleSourceInterfaceOutputReference {
    return new VpnsslSettingsAuthenticationRuleSourceInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VpnsslSettingsAuthenticationRuleUsers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnssl_settings#name VpnsslSettings#name}
  */
  readonly name?: string;
}

export function vpnsslSettingsAuthenticationRuleUsersToTerraform(struct?: VpnsslSettingsAuthenticationRuleUsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function vpnsslSettingsAuthenticationRuleUsersToHclTerraform(struct?: VpnsslSettingsAuthenticationRuleUsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpnsslSettingsAuthenticationRuleUsersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpnsslSettingsAuthenticationRuleUsers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnsslSettingsAuthenticationRuleUsers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}

export class VpnsslSettingsAuthenticationRuleUsersList extends cdktf.ComplexList {
  public internalValue? : VpnsslSettingsAuthenticationRuleUsers[] | cdktf.IResolvable

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
  public get(index: number): VpnsslSettingsAuthenticationRuleUsersOutputReference {
    return new VpnsslSettingsAuthenticationRuleUsersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VpnsslSettingsAuthenticationRule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnssl_settings#auth VpnsslSettings#auth}
  */
  readonly auth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnssl_settings#cipher VpnsslSettings#cipher}
  */
  readonly cipher?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnssl_settings#client_cert VpnsslSettings#client_cert}
  */
  readonly clientCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnssl_settings#id VpnsslSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnssl_settings#portal VpnsslSettings#portal}
  */
  readonly portal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnssl_settings#realm VpnsslSettings#realm}
  */
  readonly realm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnssl_settings#source_address6_negate VpnsslSettings#source_address6_negate}
  */
  readonly sourceAddress6Negate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnssl_settings#source_address_negate VpnsslSettings#source_address_negate}
  */
  readonly sourceAddressNegate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnssl_settings#user_peer VpnsslSettings#user_peer}
  */
  readonly userPeer?: string;
  /**
  * groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnssl_settings#groups VpnsslSettings#groups}
  */
  readonly groups?: VpnsslSettingsAuthenticationRuleGroups[] | cdktf.IResolvable;
  /**
  * source_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnssl_settings#source_address VpnsslSettings#source_address}
  */
  readonly sourceAddress?: VpnsslSettingsAuthenticationRuleSourceAddress[] | cdktf.IResolvable;
  /**
  * source_address6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnssl_settings#source_address6 VpnsslSettings#source_address6}
  */
  readonly sourceAddress6?: VpnsslSettingsAuthenticationRuleSourceAddress6[] | cdktf.IResolvable;
  /**
  * source_interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnssl_settings#source_interface VpnsslSettings#source_interface}
  */
  readonly sourceInterface?: VpnsslSettingsAuthenticationRuleSourceInterface[] | cdktf.IResolvable;
  /**
  * users block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnssl_settings#users VpnsslSettings#users}
  */
  readonly users?: VpnsslSettingsAuthenticationRuleUsers[] | cdktf.IResolvable;
}

export function vpnsslSettingsAuthenticationRuleToTerraform(struct?: VpnsslSettingsAuthenticationRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth: cdktf.stringToTerraform(struct!.auth),
    cipher: cdktf.stringToTerraform(struct!.cipher),
    client_cert: cdktf.stringToTerraform(struct!.clientCert),
    id: cdktf.numberToTerraform(struct!.id),
    portal: cdktf.stringToTerraform(struct!.portal),
    realm: cdktf.stringToTerraform(struct!.realm),
    source_address6_negate: cdktf.stringToTerraform(struct!.sourceAddress6Negate),
    source_address_negate: cdktf.stringToTerraform(struct!.sourceAddressNegate),
    user_peer: cdktf.stringToTerraform(struct!.userPeer),
    groups: cdktf.listMapper(vpnsslSettingsAuthenticationRuleGroupsToTerraform, true)(struct!.groups),
    source_address: cdktf.listMapper(vpnsslSettingsAuthenticationRuleSourceAddressToTerraform, true)(struct!.sourceAddress),
    source_address6: cdktf.listMapper(vpnsslSettingsAuthenticationRuleSourceAddress6ToTerraform, true)(struct!.sourceAddress6),
    source_interface: cdktf.listMapper(vpnsslSettingsAuthenticationRuleSourceInterfaceToTerraform, true)(struct!.sourceInterface),
    users: cdktf.listMapper(vpnsslSettingsAuthenticationRuleUsersToTerraform, true)(struct!.users),
  }
}


export function vpnsslSettingsAuthenticationRuleToHclTerraform(struct?: VpnsslSettingsAuthenticationRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth: {
      value: cdktf.stringToHclTerraform(struct!.auth),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cipher: {
      value: cdktf.stringToHclTerraform(struct!.cipher),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_cert: {
      value: cdktf.stringToHclTerraform(struct!.clientCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    portal: {
      value: cdktf.stringToHclTerraform(struct!.portal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    realm: {
      value: cdktf.stringToHclTerraform(struct!.realm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_address6_negate: {
      value: cdktf.stringToHclTerraform(struct!.sourceAddress6Negate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_address_negate: {
      value: cdktf.stringToHclTerraform(struct!.sourceAddressNegate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_peer: {
      value: cdktf.stringToHclTerraform(struct!.userPeer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    groups: {
      value: cdktf.listMapperHcl(vpnsslSettingsAuthenticationRuleGroupsToHclTerraform, true)(struct!.groups),
      isBlock: true,
      type: "set",
      storageClassType: "VpnsslSettingsAuthenticationRuleGroupsList",
    },
    source_address: {
      value: cdktf.listMapperHcl(vpnsslSettingsAuthenticationRuleSourceAddressToHclTerraform, true)(struct!.sourceAddress),
      isBlock: true,
      type: "set",
      storageClassType: "VpnsslSettingsAuthenticationRuleSourceAddressList",
    },
    source_address6: {
      value: cdktf.listMapperHcl(vpnsslSettingsAuthenticationRuleSourceAddress6ToHclTerraform, true)(struct!.sourceAddress6),
      isBlock: true,
      type: "set",
      storageClassType: "VpnsslSettingsAuthenticationRuleSourceAddress6List",
    },
    source_interface: {
      value: cdktf.listMapperHcl(vpnsslSettingsAuthenticationRuleSourceInterfaceToHclTerraform, true)(struct!.sourceInterface),
      isBlock: true,
      type: "set",
      storageClassType: "VpnsslSettingsAuthenticationRuleSourceInterfaceList",
    },
    users: {
      value: cdktf.listMapperHcl(vpnsslSettingsAuthenticationRuleUsersToHclTerraform, true)(struct!.users),
      isBlock: true,
      type: "set",
      storageClassType: "VpnsslSettingsAuthenticationRuleUsersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpnsslSettingsAuthenticationRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpnsslSettingsAuthenticationRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._auth !== undefined) {
      hasAnyValues = true;
      internalValueResult.auth = this._auth;
    }
    if (this._cipher !== undefined) {
      hasAnyValues = true;
      internalValueResult.cipher = this._cipher;
    }
    if (this._clientCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCert = this._clientCert;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._portal !== undefined) {
      hasAnyValues = true;
      internalValueResult.portal = this._portal;
    }
    if (this._realm !== undefined) {
      hasAnyValues = true;
      internalValueResult.realm = this._realm;
    }
    if (this._sourceAddress6Negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceAddress6Negate = this._sourceAddress6Negate;
    }
    if (this._sourceAddressNegate !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceAddressNegate = this._sourceAddressNegate;
    }
    if (this._userPeer !== undefined) {
      hasAnyValues = true;
      internalValueResult.userPeer = this._userPeer;
    }
    if (this._groups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.groups = this._groups?.internalValue;
    }
    if (this._sourceAddress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceAddress = this._sourceAddress?.internalValue;
    }
    if (this._sourceAddress6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceAddress6 = this._sourceAddress6?.internalValue;
    }
    if (this._sourceInterface?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceInterface = this._sourceInterface?.internalValue;
    }
    if (this._users?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.users = this._users?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnsslSettingsAuthenticationRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._auth = undefined;
      this._cipher = undefined;
      this._clientCert = undefined;
      this._id = undefined;
      this._portal = undefined;
      this._realm = undefined;
      this._sourceAddress6Negate = undefined;
      this._sourceAddressNegate = undefined;
      this._userPeer = undefined;
      this._groups.internalValue = undefined;
      this._sourceAddress.internalValue = undefined;
      this._sourceAddress6.internalValue = undefined;
      this._sourceInterface.internalValue = undefined;
      this._users.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._auth = value.auth;
      this._cipher = value.cipher;
      this._clientCert = value.clientCert;
      this._id = value.id;
      this._portal = value.portal;
      this._realm = value.realm;
      this._sourceAddress6Negate = value.sourceAddress6Negate;
      this._sourceAddressNegate = value.sourceAddressNegate;
      this._userPeer = value.userPeer;
      this._groups.internalValue = value.groups;
      this._sourceAddress.internalValue = value.sourceAddress;
      this._sourceAddress6.internalValue = value.sourceAddress6;
      this._sourceInterface.internalValue = value.sourceInterface;
      this._users.internalValue = value.users;
    }
  }

  // auth - computed: true, optional: true, required: false
  private _auth?: string; 
  public get auth() {
    return this.getStringAttribute('auth');
  }
  public set auth(value: string) {
    this._auth = value;
  }
  public resetAuth() {
    this._auth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authInput() {
    return this._auth;
  }

  // cipher - computed: true, optional: true, required: false
  private _cipher?: string; 
  public get cipher() {
    return this.getStringAttribute('cipher');
  }
  public set cipher(value: string) {
    this._cipher = value;
  }
  public resetCipher() {
    this._cipher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cipherInput() {
    return this._cipher;
  }

  // client_cert - computed: true, optional: true, required: false
  private _clientCert?: string; 
  public get clientCert() {
    return this.getStringAttribute('client_cert');
  }
  public set clientCert(value: string) {
    this._clientCert = value;
  }
  public resetClientCert() {
    this._clientCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertInput() {
    return this._clientCert;
  }

  // id - computed: true, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // portal - computed: false, optional: true, required: false
  private _portal?: string; 
  public get portal() {
    return this.getStringAttribute('portal');
  }
  public set portal(value: string) {
    this._portal = value;
  }
  public resetPortal() {
    this._portal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portalInput() {
    return this._portal;
  }

  // realm - computed: false, optional: true, required: false
  private _realm?: string; 
  public get realm() {
    return this.getStringAttribute('realm');
  }
  public set realm(value: string) {
    this._realm = value;
  }
  public resetRealm() {
    this._realm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get realmInput() {
    return this._realm;
  }

  // source_address6_negate - computed: true, optional: true, required: false
  private _sourceAddress6Negate?: string; 
  public get sourceAddress6Negate() {
    return this.getStringAttribute('source_address6_negate');
  }
  public set sourceAddress6Negate(value: string) {
    this._sourceAddress6Negate = value;
  }
  public resetSourceAddress6Negate() {
    this._sourceAddress6Negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAddress6NegateInput() {
    return this._sourceAddress6Negate;
  }

  // source_address_negate - computed: true, optional: true, required: false
  private _sourceAddressNegate?: string; 
  public get sourceAddressNegate() {
    return this.getStringAttribute('source_address_negate');
  }
  public set sourceAddressNegate(value: string) {
    this._sourceAddressNegate = value;
  }
  public resetSourceAddressNegate() {
    this._sourceAddressNegate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAddressNegateInput() {
    return this._sourceAddressNegate;
  }

  // user_peer - computed: false, optional: true, required: false
  private _userPeer?: string; 
  public get userPeer() {
    return this.getStringAttribute('user_peer');
  }
  public set userPeer(value: string) {
    this._userPeer = value;
  }
  public resetUserPeer() {
    this._userPeer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userPeerInput() {
    return this._userPeer;
  }

  // groups - computed: false, optional: true, required: false
  private _groups = new VpnsslSettingsAuthenticationRuleGroupsList(this, "groups", true);
  public get groups() {
    return this._groups;
  }
  public putGroups(value: VpnsslSettingsAuthenticationRuleGroups[] | cdktf.IResolvable) {
    this._groups.internalValue = value;
  }
  public resetGroups() {
    this._groups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups.internalValue;
  }

  // source_address - computed: false, optional: true, required: false
  private _sourceAddress = new VpnsslSettingsAuthenticationRuleSourceAddressList(this, "source_address", true);
  public get sourceAddress() {
    return this._sourceAddress;
  }
  public putSourceAddress(value: VpnsslSettingsAuthenticationRuleSourceAddress[] | cdktf.IResolvable) {
    this._sourceAddress.internalValue = value;
  }
  public resetSourceAddress() {
    this._sourceAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAddressInput() {
    return this._sourceAddress.internalValue;
  }

  // source_address6 - computed: false, optional: true, required: false
  private _sourceAddress6 = new VpnsslSettingsAuthenticationRuleSourceAddress6List(this, "source_address6", true);
  public get sourceAddress6() {
    return this._sourceAddress6;
  }
  public putSourceAddress6(value: VpnsslSettingsAuthenticationRuleSourceAddress6[] | cdktf.IResolvable) {
    this._sourceAddress6.internalValue = value;
  }
  public resetSourceAddress6() {
    this._sourceAddress6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAddress6Input() {
    return this._sourceAddress6.internalValue;
  }

  // source_interface - computed: false, optional: true, required: false
  private _sourceInterface = new VpnsslSettingsAuthenticationRuleSourceInterfaceList(this, "source_interface", true);
  public get sourceInterface() {
    return this._sourceInterface;
  }
  public putSourceInterface(value: VpnsslSettingsAuthenticationRuleSourceInterface[] | cdktf.IResolvable) {
    this._sourceInterface.internalValue = value;
  }
  public resetSourceInterface() {
    this._sourceInterface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInterfaceInput() {
    return this._sourceInterface.internalValue;
  }

  // users - computed: false, optional: true, required: false
  private _users = new VpnsslSettingsAuthenticationRuleUsersList(this, "users", true);
  public get users() {
    return this._users;
  }
  public putUsers(value: VpnsslSettingsAuthenticationRuleUsers[] | cdktf.IResolvable) {
    this._users.internalValue = value;
  }
  public resetUsers() {
    this._users.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usersInput() {
    return this._users.internalValue;
  }
}

export class VpnsslSettingsAuthenticationRuleList extends cdktf.ComplexList {
  public internalValue? : VpnsslSettingsAuthenticationRule[] | cdktf.IResolvable

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
  public get(index: number): VpnsslSettingsAuthenticationRuleOutputReference {
    return new VpnsslSettingsAuthenticationRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VpnsslSettingsSourceAddress {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnssl_settings#name VpnsslSettings#name}
  */
  readonly name?: string;
}

export function vpnsslSettingsSourceAddressToTerraform(struct?: VpnsslSettingsSourceAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function vpnsslSettingsSourceAddressToHclTerraform(struct?: VpnsslSettingsSourceAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpnsslSettingsSourceAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpnsslSettingsSourceAddress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnsslSettingsSourceAddress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}

export class VpnsslSettingsSourceAddressList extends cdktf.ComplexList {
  public internalValue? : VpnsslSettingsSourceAddress[] | cdktf.IResolvable

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
  public get(index: number): VpnsslSettingsSourceAddressOutputReference {
    return new VpnsslSettingsSourceAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VpnsslSettingsSourceAddress6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnssl_settings#name VpnsslSettings#name}
  */
  readonly name?: string;
}

export function vpnsslSettingsSourceAddress6ToTerraform(struct?: VpnsslSettingsSourceAddress6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function vpnsslSettingsSourceAddress6ToHclTerraform(struct?: VpnsslSettingsSourceAddress6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpnsslSettingsSourceAddress6OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpnsslSettingsSourceAddress6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnsslSettingsSourceAddress6 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}

export class VpnsslSettingsSourceAddress6List extends cdktf.ComplexList {
  public internalValue? : VpnsslSettingsSourceAddress6[] | cdktf.IResolvable

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
  public get(index: number): VpnsslSettingsSourceAddress6OutputReference {
    return new VpnsslSettingsSourceAddress6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VpnsslSettingsSourceInterface {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnssl_settings#name VpnsslSettings#name}
  */
  readonly name?: string;
}

export function vpnsslSettingsSourceInterfaceToTerraform(struct?: VpnsslSettingsSourceInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function vpnsslSettingsSourceInterfaceToHclTerraform(struct?: VpnsslSettingsSourceInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpnsslSettingsSourceInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpnsslSettingsSourceInterface | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnsslSettingsSourceInterface | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}

export class VpnsslSettingsSourceInterfaceList extends cdktf.ComplexList {
  public internalValue? : VpnsslSettingsSourceInterface[] | cdktf.IResolvable

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
  public get(index: number): VpnsslSettingsSourceInterfaceOutputReference {
    return new VpnsslSettingsSourceInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VpnsslSettingsTunnelIpPools {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnssl_settings#name VpnsslSettings#name}
  */
  readonly name?: string;
}

export function vpnsslSettingsTunnelIpPoolsToTerraform(struct?: VpnsslSettingsTunnelIpPools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function vpnsslSettingsTunnelIpPoolsToHclTerraform(struct?: VpnsslSettingsTunnelIpPools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpnsslSettingsTunnelIpPoolsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpnsslSettingsTunnelIpPools | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnsslSettingsTunnelIpPools | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}

export class VpnsslSettingsTunnelIpPoolsList extends cdktf.ComplexList {
  public internalValue? : VpnsslSettingsTunnelIpPools[] | cdktf.IResolvable

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
  public get(index: number): VpnsslSettingsTunnelIpPoolsOutputReference {
    return new VpnsslSettingsTunnelIpPoolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VpnsslSettingsTunnelIpv6Pools {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnssl_settings#name VpnsslSettings#name}
  */
  readonly name?: string;
}

export function vpnsslSettingsTunnelIpv6PoolsToTerraform(struct?: VpnsslSettingsTunnelIpv6Pools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function vpnsslSettingsTunnelIpv6PoolsToHclTerraform(struct?: VpnsslSettingsTunnelIpv6Pools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpnsslSettingsTunnelIpv6PoolsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpnsslSettingsTunnelIpv6Pools | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnsslSettingsTunnelIpv6Pools | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}

export class VpnsslSettingsTunnelIpv6PoolsList extends cdktf.ComplexList {
  public internalValue? : VpnsslSettingsTunnelIpv6Pools[] | cdktf.IResolvable

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
  public get(index: number): VpnsslSettingsTunnelIpv6PoolsOutputReference {
    return new VpnsslSettingsTunnelIpv6PoolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnssl_settings fortios_vpnssl_settings}
*/
export class VpnsslSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_vpnssl_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VpnsslSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VpnsslSettings to import
  * @param importFromId The id of the existing VpnsslSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnssl_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VpnsslSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_vpnssl_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpnssl_settings fortios_vpnssl_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpnsslSettingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: VpnsslSettingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_vpnssl_settings',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._algorithm = config.algorithm;
    this._authSessionCheckSourceIp = config.authSessionCheckSourceIp;
    this._authTimeout = config.authTimeout;
    this._autoTunnelStaticRoute = config.autoTunnelStaticRoute;
    this._bannedCipher = config.bannedCipher;
    this._browserLanguageDetection = config.browserLanguageDetection;
    this._checkReferer = config.checkReferer;
    this._ciphersuite = config.ciphersuite;
    this._clientSigalgs = config.clientSigalgs;
    this._defaultPortal = config.defaultPortal;
    this._deflateCompressionLevel = config.deflateCompressionLevel;
    this._deflateMinDataSize = config.deflateMinDataSize;
    this._dnsServer1 = config.dnsServer1;
    this._dnsServer2 = config.dnsServer2;
    this._dnsSuffix = config.dnsSuffix;
    this._dtlsHeartbeatFailCount = config.dtlsHeartbeatFailCount;
    this._dtlsHeartbeatIdleTimeout = config.dtlsHeartbeatIdleTimeout;
    this._dtlsHeartbeatInterval = config.dtlsHeartbeatInterval;
    this._dtlsHelloTimeout = config.dtlsHelloTimeout;
    this._dtlsMaxProtoVer = config.dtlsMaxProtoVer;
    this._dtlsMinProtoVer = config.dtlsMinProtoVer;
    this._dtlsTunnel = config.dtlsTunnel;
    this._dualStackMode = config.dualStackMode;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._encode2FSequence = config.encode2FSequence;
    this._encryptAndStorePassword = config.encryptAndStorePassword;
    this._forceTwoFactorAuth = config.forceTwoFactorAuth;
    this._getAllTables = config.fetchAllTables;
    this._headerXForwardedFor = config.headerXForwardedFor;
    this._hstsIncludeSubdomains = config.hstsIncludeSubdomains;
    this._httpCompression = config.httpCompression;
    this._httpOnlyCookie = config.httpOnlyCookie;
    this._httpRequestBodyTimeout = config.httpRequestBodyTimeout;
    this._httpRequestHeaderTimeout = config.httpRequestHeaderTimeout;
    this._httpsRedirect = config.httpsRedirect;
    this._id = config.id;
    this._idleTimeout = config.idleTimeout;
    this._ipv6DnsServer1 = config.ipv6DnsServer1;
    this._ipv6DnsServer2 = config.ipv6DnsServer2;
    this._ipv6WinsServer1 = config.ipv6WinsServer1;
    this._ipv6WinsServer2 = config.ipv6WinsServer2;
    this._loginAttemptLimit = config.loginAttemptLimit;
    this._loginBlockTime = config.loginBlockTime;
    this._loginTimeout = config.loginTimeout;
    this._port = config.port;
    this._portPrecedence = config.portPrecedence;
    this._reqclientcert = config.reqclientcert;
    this._routeSourceInterface = config.routeSourceInterface;
    this._samlRedirectPort = config.samlRedirectPort;
    this._serverHostname = config.serverHostname;
    this._servercert = config.servercert;
    this._sourceAddress6Negate = config.sourceAddress6Negate;
    this._sourceAddressNegate = config.sourceAddressNegate;
    this._sslClientRenegotiation = config.sslClientRenegotiation;
    this._sslInsertEmptyFragment = config.sslInsertEmptyFragment;
    this._sslMaxProtoVer = config.sslMaxProtoVer;
    this._sslMinProtoVer = config.sslMinProtoVer;
    this._status = config.status;
    this._tlsv10 = config.tlsv10;
    this._tlsv11 = config.tlsv11;
    this._tlsv12 = config.tlsv12;
    this._tlsv13 = config.tlsv13;
    this._transformBackwardSlashes = config.transformBackwardSlashes;
    this._tunnelAddrAssignedMethod = config.tunnelAddrAssignedMethod;
    this._tunnelConnectWithoutReauth = config.tunnelConnectWithoutReauth;
    this._tunnelUserSessionTimeout = config.tunnelUserSessionTimeout;
    this._unsafeLegacyRenegotiation = config.unsafeLegacyRenegotiation;
    this._urlObscuration = config.urlObscuration;
    this._userPeer = config.userPeer;
    this._vdomparam = config.vdomparam;
    this._webModeSnat = config.webModeSnat;
    this._winsServer1 = config.winsServer1;
    this._winsServer2 = config.winsServer2;
    this._xContentTypeOptions = config.xContentTypeOptions;
    this._ztnaTrustedClient = config.ztnaTrustedClient;
    this._authenticationRule.internalValue = config.authenticationRule;
    this._sourceAddress.internalValue = config.sourceAddress;
    this._sourceAddress6.internalValue = config.sourceAddress6;
    this._sourceInterface.internalValue = config.sourceInterface;
    this._tunnelIpPools.internalValue = config.tunnelIpPools;
    this._tunnelIpv6Pools.internalValue = config.tunnelIpv6Pools;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // algorithm - computed: true, optional: true, required: false
  private _algorithm?: string; 
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }
  public set algorithm(value: string) {
    this._algorithm = value;
  }
  public resetAlgorithm() {
    this._algorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm;
  }

  // auth_session_check_source_ip - computed: true, optional: true, required: false
  private _authSessionCheckSourceIp?: string; 
  public get authSessionCheckSourceIp() {
    return this.getStringAttribute('auth_session_check_source_ip');
  }
  public set authSessionCheckSourceIp(value: string) {
    this._authSessionCheckSourceIp = value;
  }
  public resetAuthSessionCheckSourceIp() {
    this._authSessionCheckSourceIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authSessionCheckSourceIpInput() {
    return this._authSessionCheckSourceIp;
  }

  // auth_timeout - computed: true, optional: true, required: false
  private _authTimeout?: number; 
  public get authTimeout() {
    return this.getNumberAttribute('auth_timeout');
  }
  public set authTimeout(value: number) {
    this._authTimeout = value;
  }
  public resetAuthTimeout() {
    this._authTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authTimeoutInput() {
    return this._authTimeout;
  }

  // auto_tunnel_static_route - computed: true, optional: true, required: false
  private _autoTunnelStaticRoute?: string; 
  public get autoTunnelStaticRoute() {
    return this.getStringAttribute('auto_tunnel_static_route');
  }
  public set autoTunnelStaticRoute(value: string) {
    this._autoTunnelStaticRoute = value;
  }
  public resetAutoTunnelStaticRoute() {
    this._autoTunnelStaticRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoTunnelStaticRouteInput() {
    return this._autoTunnelStaticRoute;
  }

  // banned_cipher - computed: true, optional: true, required: false
  private _bannedCipher?: string; 
  public get bannedCipher() {
    return this.getStringAttribute('banned_cipher');
  }
  public set bannedCipher(value: string) {
    this._bannedCipher = value;
  }
  public resetBannedCipher() {
    this._bannedCipher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bannedCipherInput() {
    return this._bannedCipher;
  }

  // browser_language_detection - computed: true, optional: true, required: false
  private _browserLanguageDetection?: string; 
  public get browserLanguageDetection() {
    return this.getStringAttribute('browser_language_detection');
  }
  public set browserLanguageDetection(value: string) {
    this._browserLanguageDetection = value;
  }
  public resetBrowserLanguageDetection() {
    this._browserLanguageDetection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get browserLanguageDetectionInput() {
    return this._browserLanguageDetection;
  }

  // check_referer - computed: true, optional: true, required: false
  private _checkReferer?: string; 
  public get checkReferer() {
    return this.getStringAttribute('check_referer');
  }
  public set checkReferer(value: string) {
    this._checkReferer = value;
  }
  public resetCheckReferer() {
    this._checkReferer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkRefererInput() {
    return this._checkReferer;
  }

  // ciphersuite - computed: true, optional: true, required: false
  private _ciphersuite?: string; 
  public get ciphersuite() {
    return this.getStringAttribute('ciphersuite');
  }
  public set ciphersuite(value: string) {
    this._ciphersuite = value;
  }
  public resetCiphersuite() {
    this._ciphersuite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ciphersuiteInput() {
    return this._ciphersuite;
  }

  // client_sigalgs - computed: true, optional: true, required: false
  private _clientSigalgs?: string; 
  public get clientSigalgs() {
    return this.getStringAttribute('client_sigalgs');
  }
  public set clientSigalgs(value: string) {
    this._clientSigalgs = value;
  }
  public resetClientSigalgs() {
    this._clientSigalgs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSigalgsInput() {
    return this._clientSigalgs;
  }

  // default_portal - computed: false, optional: true, required: false
  private _defaultPortal?: string; 
  public get defaultPortal() {
    return this.getStringAttribute('default_portal');
  }
  public set defaultPortal(value: string) {
    this._defaultPortal = value;
  }
  public resetDefaultPortal() {
    this._defaultPortal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultPortalInput() {
    return this._defaultPortal;
  }

  // deflate_compression_level - computed: true, optional: true, required: false
  private _deflateCompressionLevel?: number; 
  public get deflateCompressionLevel() {
    return this.getNumberAttribute('deflate_compression_level');
  }
  public set deflateCompressionLevel(value: number) {
    this._deflateCompressionLevel = value;
  }
  public resetDeflateCompressionLevel() {
    this._deflateCompressionLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deflateCompressionLevelInput() {
    return this._deflateCompressionLevel;
  }

  // deflate_min_data_size - computed: true, optional: true, required: false
  private _deflateMinDataSize?: number; 
  public get deflateMinDataSize() {
    return this.getNumberAttribute('deflate_min_data_size');
  }
  public set deflateMinDataSize(value: number) {
    this._deflateMinDataSize = value;
  }
  public resetDeflateMinDataSize() {
    this._deflateMinDataSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deflateMinDataSizeInput() {
    return this._deflateMinDataSize;
  }

  // dns_server1 - computed: true, optional: true, required: false
  private _dnsServer1?: string; 
  public get dnsServer1() {
    return this.getStringAttribute('dns_server1');
  }
  public set dnsServer1(value: string) {
    this._dnsServer1 = value;
  }
  public resetDnsServer1() {
    this._dnsServer1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServer1Input() {
    return this._dnsServer1;
  }

  // dns_server2 - computed: true, optional: true, required: false
  private _dnsServer2?: string; 
  public get dnsServer2() {
    return this.getStringAttribute('dns_server2');
  }
  public set dnsServer2(value: string) {
    this._dnsServer2 = value;
  }
  public resetDnsServer2() {
    this._dnsServer2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServer2Input() {
    return this._dnsServer2;
  }

  // dns_suffix - computed: false, optional: true, required: false
  private _dnsSuffix?: string; 
  public get dnsSuffix() {
    return this.getStringAttribute('dns_suffix');
  }
  public set dnsSuffix(value: string) {
    this._dnsSuffix = value;
  }
  public resetDnsSuffix() {
    this._dnsSuffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsSuffixInput() {
    return this._dnsSuffix;
  }

  // dtls_heartbeat_fail_count - computed: true, optional: true, required: false
  private _dtlsHeartbeatFailCount?: number; 
  public get dtlsHeartbeatFailCount() {
    return this.getNumberAttribute('dtls_heartbeat_fail_count');
  }
  public set dtlsHeartbeatFailCount(value: number) {
    this._dtlsHeartbeatFailCount = value;
  }
  public resetDtlsHeartbeatFailCount() {
    this._dtlsHeartbeatFailCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dtlsHeartbeatFailCountInput() {
    return this._dtlsHeartbeatFailCount;
  }

  // dtls_heartbeat_idle_timeout - computed: true, optional: true, required: false
  private _dtlsHeartbeatIdleTimeout?: number; 
  public get dtlsHeartbeatIdleTimeout() {
    return this.getNumberAttribute('dtls_heartbeat_idle_timeout');
  }
  public set dtlsHeartbeatIdleTimeout(value: number) {
    this._dtlsHeartbeatIdleTimeout = value;
  }
  public resetDtlsHeartbeatIdleTimeout() {
    this._dtlsHeartbeatIdleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dtlsHeartbeatIdleTimeoutInput() {
    return this._dtlsHeartbeatIdleTimeout;
  }

  // dtls_heartbeat_interval - computed: true, optional: true, required: false
  private _dtlsHeartbeatInterval?: number; 
  public get dtlsHeartbeatInterval() {
    return this.getNumberAttribute('dtls_heartbeat_interval');
  }
  public set dtlsHeartbeatInterval(value: number) {
    this._dtlsHeartbeatInterval = value;
  }
  public resetDtlsHeartbeatInterval() {
    this._dtlsHeartbeatInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dtlsHeartbeatIntervalInput() {
    return this._dtlsHeartbeatInterval;
  }

  // dtls_hello_timeout - computed: true, optional: true, required: false
  private _dtlsHelloTimeout?: number; 
  public get dtlsHelloTimeout() {
    return this.getNumberAttribute('dtls_hello_timeout');
  }
  public set dtlsHelloTimeout(value: number) {
    this._dtlsHelloTimeout = value;
  }
  public resetDtlsHelloTimeout() {
    this._dtlsHelloTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dtlsHelloTimeoutInput() {
    return this._dtlsHelloTimeout;
  }

  // dtls_max_proto_ver - computed: true, optional: true, required: false
  private _dtlsMaxProtoVer?: string; 
  public get dtlsMaxProtoVer() {
    return this.getStringAttribute('dtls_max_proto_ver');
  }
  public set dtlsMaxProtoVer(value: string) {
    this._dtlsMaxProtoVer = value;
  }
  public resetDtlsMaxProtoVer() {
    this._dtlsMaxProtoVer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dtlsMaxProtoVerInput() {
    return this._dtlsMaxProtoVer;
  }

  // dtls_min_proto_ver - computed: true, optional: true, required: false
  private _dtlsMinProtoVer?: string; 
  public get dtlsMinProtoVer() {
    return this.getStringAttribute('dtls_min_proto_ver');
  }
  public set dtlsMinProtoVer(value: string) {
    this._dtlsMinProtoVer = value;
  }
  public resetDtlsMinProtoVer() {
    this._dtlsMinProtoVer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dtlsMinProtoVerInput() {
    return this._dtlsMinProtoVer;
  }

  // dtls_tunnel - computed: true, optional: true, required: false
  private _dtlsTunnel?: string; 
  public get dtlsTunnel() {
    return this.getStringAttribute('dtls_tunnel');
  }
  public set dtlsTunnel(value: string) {
    this._dtlsTunnel = value;
  }
  public resetDtlsTunnel() {
    this._dtlsTunnel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dtlsTunnelInput() {
    return this._dtlsTunnel;
  }

  // dual_stack_mode - computed: true, optional: true, required: false
  private _dualStackMode?: string; 
  public get dualStackMode() {
    return this.getStringAttribute('dual_stack_mode');
  }
  public set dualStackMode(value: string) {
    this._dualStackMode = value;
  }
  public resetDualStackMode() {
    this._dualStackMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dualStackModeInput() {
    return this._dualStackMode;
  }

  // dynamic_sort_subtable - computed: false, optional: true, required: false
  private _dynamicSortSubtable?: string; 
  public get dynamicSortSubtable() {
    return this.getStringAttribute('dynamic_sort_subtable');
  }
  public set dynamicSortSubtable(value: string) {
    this._dynamicSortSubtable = value;
  }
  public resetDynamicSortSubtable() {
    this._dynamicSortSubtable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicSortSubtableInput() {
    return this._dynamicSortSubtable;
  }

  // encode_2f_sequence - computed: true, optional: true, required: false
  private _encode2FSequence?: string; 
  public get encode2FSequence() {
    return this.getStringAttribute('encode_2f_sequence');
  }
  public set encode2FSequence(value: string) {
    this._encode2FSequence = value;
  }
  public resetEncode2FSequence() {
    this._encode2FSequence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encode2FSequenceInput() {
    return this._encode2FSequence;
  }

  // encrypt_and_store_password - computed: true, optional: true, required: false
  private _encryptAndStorePassword?: string; 
  public get encryptAndStorePassword() {
    return this.getStringAttribute('encrypt_and_store_password');
  }
  public set encryptAndStorePassword(value: string) {
    this._encryptAndStorePassword = value;
  }
  public resetEncryptAndStorePassword() {
    this._encryptAndStorePassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptAndStorePasswordInput() {
    return this._encryptAndStorePassword;
  }

  // force_two_factor_auth - computed: true, optional: true, required: false
  private _forceTwoFactorAuth?: string; 
  public get forceTwoFactorAuth() {
    return this.getStringAttribute('force_two_factor_auth');
  }
  public set forceTwoFactorAuth(value: string) {
    this._forceTwoFactorAuth = value;
  }
  public resetForceTwoFactorAuth() {
    this._forceTwoFactorAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceTwoFactorAuthInput() {
    return this._forceTwoFactorAuth;
  }

  // get_all_tables - computed: false, optional: true, required: false
  private _getAllTables?: string; 
  public get fetchAllTables() {
    return this.getStringAttribute('get_all_tables');
  }
  public set fetchAllTables(value: string) {
    this._getAllTables = value;
  }
  public resetFetchAllTables() {
    this._getAllTables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fetchAllTablesInput() {
    return this._getAllTables;
  }

  // header_x_forwarded_for - computed: true, optional: true, required: false
  private _headerXForwardedFor?: string; 
  public get headerXForwardedFor() {
    return this.getStringAttribute('header_x_forwarded_for');
  }
  public set headerXForwardedFor(value: string) {
    this._headerXForwardedFor = value;
  }
  public resetHeaderXForwardedFor() {
    this._headerXForwardedFor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerXForwardedForInput() {
    return this._headerXForwardedFor;
  }

  // hsts_include_subdomains - computed: true, optional: true, required: false
  private _hstsIncludeSubdomains?: string; 
  public get hstsIncludeSubdomains() {
    return this.getStringAttribute('hsts_include_subdomains');
  }
  public set hstsIncludeSubdomains(value: string) {
    this._hstsIncludeSubdomains = value;
  }
  public resetHstsIncludeSubdomains() {
    this._hstsIncludeSubdomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hstsIncludeSubdomainsInput() {
    return this._hstsIncludeSubdomains;
  }

  // http_compression - computed: true, optional: true, required: false
  private _httpCompression?: string; 
  public get httpCompression() {
    return this.getStringAttribute('http_compression');
  }
  public set httpCompression(value: string) {
    this._httpCompression = value;
  }
  public resetHttpCompression() {
    this._httpCompression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpCompressionInput() {
    return this._httpCompression;
  }

  // http_only_cookie - computed: true, optional: true, required: false
  private _httpOnlyCookie?: string; 
  public get httpOnlyCookie() {
    return this.getStringAttribute('http_only_cookie');
  }
  public set httpOnlyCookie(value: string) {
    this._httpOnlyCookie = value;
  }
  public resetHttpOnlyCookie() {
    this._httpOnlyCookie = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpOnlyCookieInput() {
    return this._httpOnlyCookie;
  }

  // http_request_body_timeout - computed: true, optional: true, required: false
  private _httpRequestBodyTimeout?: number; 
  public get httpRequestBodyTimeout() {
    return this.getNumberAttribute('http_request_body_timeout');
  }
  public set httpRequestBodyTimeout(value: number) {
    this._httpRequestBodyTimeout = value;
  }
  public resetHttpRequestBodyTimeout() {
    this._httpRequestBodyTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpRequestBodyTimeoutInput() {
    return this._httpRequestBodyTimeout;
  }

  // http_request_header_timeout - computed: true, optional: true, required: false
  private _httpRequestHeaderTimeout?: number; 
  public get httpRequestHeaderTimeout() {
    return this.getNumberAttribute('http_request_header_timeout');
  }
  public set httpRequestHeaderTimeout(value: number) {
    this._httpRequestHeaderTimeout = value;
  }
  public resetHttpRequestHeaderTimeout() {
    this._httpRequestHeaderTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpRequestHeaderTimeoutInput() {
    return this._httpRequestHeaderTimeout;
  }

  // https_redirect - computed: true, optional: true, required: false
  private _httpsRedirect?: string; 
  public get httpsRedirect() {
    return this.getStringAttribute('https_redirect');
  }
  public set httpsRedirect(value: string) {
    this._httpsRedirect = value;
  }
  public resetHttpsRedirect() {
    this._httpsRedirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsRedirectInput() {
    return this._httpsRedirect;
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

  // idle_timeout - computed: true, optional: true, required: false
  private _idleTimeout?: number; 
  public get idleTimeout() {
    return this.getNumberAttribute('idle_timeout');
  }
  public set idleTimeout(value: number) {
    this._idleTimeout = value;
  }
  public resetIdleTimeout() {
    this._idleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimeoutInput() {
    return this._idleTimeout;
  }

  // ipv6_dns_server1 - computed: true, optional: true, required: false
  private _ipv6DnsServer1?: string; 
  public get ipv6DnsServer1() {
    return this.getStringAttribute('ipv6_dns_server1');
  }
  public set ipv6DnsServer1(value: string) {
    this._ipv6DnsServer1 = value;
  }
  public resetIpv6DnsServer1() {
    this._ipv6DnsServer1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6DnsServer1Input() {
    return this._ipv6DnsServer1;
  }

  // ipv6_dns_server2 - computed: true, optional: true, required: false
  private _ipv6DnsServer2?: string; 
  public get ipv6DnsServer2() {
    return this.getStringAttribute('ipv6_dns_server2');
  }
  public set ipv6DnsServer2(value: string) {
    this._ipv6DnsServer2 = value;
  }
  public resetIpv6DnsServer2() {
    this._ipv6DnsServer2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6DnsServer2Input() {
    return this._ipv6DnsServer2;
  }

  // ipv6_wins_server1 - computed: true, optional: true, required: false
  private _ipv6WinsServer1?: string; 
  public get ipv6WinsServer1() {
    return this.getStringAttribute('ipv6_wins_server1');
  }
  public set ipv6WinsServer1(value: string) {
    this._ipv6WinsServer1 = value;
  }
  public resetIpv6WinsServer1() {
    this._ipv6WinsServer1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6WinsServer1Input() {
    return this._ipv6WinsServer1;
  }

  // ipv6_wins_server2 - computed: true, optional: true, required: false
  private _ipv6WinsServer2?: string; 
  public get ipv6WinsServer2() {
    return this.getStringAttribute('ipv6_wins_server2');
  }
  public set ipv6WinsServer2(value: string) {
    this._ipv6WinsServer2 = value;
  }
  public resetIpv6WinsServer2() {
    this._ipv6WinsServer2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6WinsServer2Input() {
    return this._ipv6WinsServer2;
  }

  // login_attempt_limit - computed: true, optional: true, required: false
  private _loginAttemptLimit?: number; 
  public get loginAttemptLimit() {
    return this.getNumberAttribute('login_attempt_limit');
  }
  public set loginAttemptLimit(value: number) {
    this._loginAttemptLimit = value;
  }
  public resetLoginAttemptLimit() {
    this._loginAttemptLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginAttemptLimitInput() {
    return this._loginAttemptLimit;
  }

  // login_block_time - computed: true, optional: true, required: false
  private _loginBlockTime?: number; 
  public get loginBlockTime() {
    return this.getNumberAttribute('login_block_time');
  }
  public set loginBlockTime(value: number) {
    this._loginBlockTime = value;
  }
  public resetLoginBlockTime() {
    this._loginBlockTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginBlockTimeInput() {
    return this._loginBlockTime;
  }

  // login_timeout - computed: true, optional: true, required: false
  private _loginTimeout?: number; 
  public get loginTimeout() {
    return this.getNumberAttribute('login_timeout');
  }
  public set loginTimeout(value: number) {
    this._loginTimeout = value;
  }
  public resetLoginTimeout() {
    this._loginTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginTimeoutInput() {
    return this._loginTimeout;
  }

  // port - computed: true, optional: true, required: false
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

  // port_precedence - computed: true, optional: true, required: false
  private _portPrecedence?: string; 
  public get portPrecedence() {
    return this.getStringAttribute('port_precedence');
  }
  public set portPrecedence(value: string) {
    this._portPrecedence = value;
  }
  public resetPortPrecedence() {
    this._portPrecedence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portPrecedenceInput() {
    return this._portPrecedence;
  }

  // reqclientcert - computed: true, optional: true, required: false
  private _reqclientcert?: string; 
  public get reqclientcert() {
    return this.getStringAttribute('reqclientcert');
  }
  public set reqclientcert(value: string) {
    this._reqclientcert = value;
  }
  public resetReqclientcert() {
    this._reqclientcert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqclientcertInput() {
    return this._reqclientcert;
  }

  // route_source_interface - computed: false, optional: true, required: false
  private _routeSourceInterface?: string; 
  public get routeSourceInterface() {
    return this.getStringAttribute('route_source_interface');
  }
  public set routeSourceInterface(value: string) {
    this._routeSourceInterface = value;
  }
  public resetRouteSourceInterface() {
    this._routeSourceInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeSourceInterfaceInput() {
    return this._routeSourceInterface;
  }

  // saml_redirect_port - computed: true, optional: true, required: false
  private _samlRedirectPort?: number; 
  public get samlRedirectPort() {
    return this.getNumberAttribute('saml_redirect_port');
  }
  public set samlRedirectPort(value: number) {
    this._samlRedirectPort = value;
  }
  public resetSamlRedirectPort() {
    this._samlRedirectPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samlRedirectPortInput() {
    return this._samlRedirectPort;
  }

  // server_hostname - computed: false, optional: true, required: false
  private _serverHostname?: string; 
  public get serverHostname() {
    return this.getStringAttribute('server_hostname');
  }
  public set serverHostname(value: string) {
    this._serverHostname = value;
  }
  public resetServerHostname() {
    this._serverHostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverHostnameInput() {
    return this._serverHostname;
  }

  // servercert - computed: true, optional: true, required: false
  private _servercert?: string; 
  public get servercert() {
    return this.getStringAttribute('servercert');
  }
  public set servercert(value: string) {
    this._servercert = value;
  }
  public resetServercert() {
    this._servercert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servercertInput() {
    return this._servercert;
  }

  // source_address6_negate - computed: true, optional: true, required: false
  private _sourceAddress6Negate?: string; 
  public get sourceAddress6Negate() {
    return this.getStringAttribute('source_address6_negate');
  }
  public set sourceAddress6Negate(value: string) {
    this._sourceAddress6Negate = value;
  }
  public resetSourceAddress6Negate() {
    this._sourceAddress6Negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAddress6NegateInput() {
    return this._sourceAddress6Negate;
  }

  // source_address_negate - computed: true, optional: true, required: false
  private _sourceAddressNegate?: string; 
  public get sourceAddressNegate() {
    return this.getStringAttribute('source_address_negate');
  }
  public set sourceAddressNegate(value: string) {
    this._sourceAddressNegate = value;
  }
  public resetSourceAddressNegate() {
    this._sourceAddressNegate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAddressNegateInput() {
    return this._sourceAddressNegate;
  }

  // ssl_client_renegotiation - computed: true, optional: true, required: false
  private _sslClientRenegotiation?: string; 
  public get sslClientRenegotiation() {
    return this.getStringAttribute('ssl_client_renegotiation');
  }
  public set sslClientRenegotiation(value: string) {
    this._sslClientRenegotiation = value;
  }
  public resetSslClientRenegotiation() {
    this._sslClientRenegotiation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslClientRenegotiationInput() {
    return this._sslClientRenegotiation;
  }

  // ssl_insert_empty_fragment - computed: true, optional: true, required: false
  private _sslInsertEmptyFragment?: string; 
  public get sslInsertEmptyFragment() {
    return this.getStringAttribute('ssl_insert_empty_fragment');
  }
  public set sslInsertEmptyFragment(value: string) {
    this._sslInsertEmptyFragment = value;
  }
  public resetSslInsertEmptyFragment() {
    this._sslInsertEmptyFragment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslInsertEmptyFragmentInput() {
    return this._sslInsertEmptyFragment;
  }

  // ssl_max_proto_ver - computed: true, optional: true, required: false
  private _sslMaxProtoVer?: string; 
  public get sslMaxProtoVer() {
    return this.getStringAttribute('ssl_max_proto_ver');
  }
  public set sslMaxProtoVer(value: string) {
    this._sslMaxProtoVer = value;
  }
  public resetSslMaxProtoVer() {
    this._sslMaxProtoVer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslMaxProtoVerInput() {
    return this._sslMaxProtoVer;
  }

  // ssl_min_proto_ver - computed: true, optional: true, required: false
  private _sslMinProtoVer?: string; 
  public get sslMinProtoVer() {
    return this.getStringAttribute('ssl_min_proto_ver');
  }
  public set sslMinProtoVer(value: string) {
    this._sslMinProtoVer = value;
  }
  public resetSslMinProtoVer() {
    this._sslMinProtoVer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslMinProtoVerInput() {
    return this._sslMinProtoVer;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // tlsv1_0 - computed: false, optional: true, required: false
  private _tlsv10?: string; 
  public get tlsv10() {
    return this.getStringAttribute('tlsv1_0');
  }
  public set tlsv10(value: string) {
    this._tlsv10 = value;
  }
  public resetTlsv10() {
    this._tlsv10 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsv10Input() {
    return this._tlsv10;
  }

  // tlsv1_1 - computed: false, optional: true, required: false
  private _tlsv11?: string; 
  public get tlsv11() {
    return this.getStringAttribute('tlsv1_1');
  }
  public set tlsv11(value: string) {
    this._tlsv11 = value;
  }
  public resetTlsv11() {
    this._tlsv11 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsv11Input() {
    return this._tlsv11;
  }

  // tlsv1_2 - computed: false, optional: true, required: false
  private _tlsv12?: string; 
  public get tlsv12() {
    return this.getStringAttribute('tlsv1_2');
  }
  public set tlsv12(value: string) {
    this._tlsv12 = value;
  }
  public resetTlsv12() {
    this._tlsv12 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsv12Input() {
    return this._tlsv12;
  }

  // tlsv1_3 - computed: false, optional: true, required: false
  private _tlsv13?: string; 
  public get tlsv13() {
    return this.getStringAttribute('tlsv1_3');
  }
  public set tlsv13(value: string) {
    this._tlsv13 = value;
  }
  public resetTlsv13() {
    this._tlsv13 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsv13Input() {
    return this._tlsv13;
  }

  // transform_backward_slashes - computed: true, optional: true, required: false
  private _transformBackwardSlashes?: string; 
  public get transformBackwardSlashes() {
    return this.getStringAttribute('transform_backward_slashes');
  }
  public set transformBackwardSlashes(value: string) {
    this._transformBackwardSlashes = value;
  }
  public resetTransformBackwardSlashes() {
    this._transformBackwardSlashes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformBackwardSlashesInput() {
    return this._transformBackwardSlashes;
  }

  // tunnel_addr_assigned_method - computed: true, optional: true, required: false
  private _tunnelAddrAssignedMethod?: string; 
  public get tunnelAddrAssignedMethod() {
    return this.getStringAttribute('tunnel_addr_assigned_method');
  }
  public set tunnelAddrAssignedMethod(value: string) {
    this._tunnelAddrAssignedMethod = value;
  }
  public resetTunnelAddrAssignedMethod() {
    this._tunnelAddrAssignedMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelAddrAssignedMethodInput() {
    return this._tunnelAddrAssignedMethod;
  }

  // tunnel_connect_without_reauth - computed: true, optional: true, required: false
  private _tunnelConnectWithoutReauth?: string; 
  public get tunnelConnectWithoutReauth() {
    return this.getStringAttribute('tunnel_connect_without_reauth');
  }
  public set tunnelConnectWithoutReauth(value: string) {
    this._tunnelConnectWithoutReauth = value;
  }
  public resetTunnelConnectWithoutReauth() {
    this._tunnelConnectWithoutReauth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelConnectWithoutReauthInput() {
    return this._tunnelConnectWithoutReauth;
  }

  // tunnel_user_session_timeout - computed: true, optional: true, required: false
  private _tunnelUserSessionTimeout?: number; 
  public get tunnelUserSessionTimeout() {
    return this.getNumberAttribute('tunnel_user_session_timeout');
  }
  public set tunnelUserSessionTimeout(value: number) {
    this._tunnelUserSessionTimeout = value;
  }
  public resetTunnelUserSessionTimeout() {
    this._tunnelUserSessionTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelUserSessionTimeoutInput() {
    return this._tunnelUserSessionTimeout;
  }

  // unsafe_legacy_renegotiation - computed: true, optional: true, required: false
  private _unsafeLegacyRenegotiation?: string; 
  public get unsafeLegacyRenegotiation() {
    return this.getStringAttribute('unsafe_legacy_renegotiation');
  }
  public set unsafeLegacyRenegotiation(value: string) {
    this._unsafeLegacyRenegotiation = value;
  }
  public resetUnsafeLegacyRenegotiation() {
    this._unsafeLegacyRenegotiation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unsafeLegacyRenegotiationInput() {
    return this._unsafeLegacyRenegotiation;
  }

  // url_obscuration - computed: true, optional: true, required: false
  private _urlObscuration?: string; 
  public get urlObscuration() {
    return this.getStringAttribute('url_obscuration');
  }
  public set urlObscuration(value: string) {
    this._urlObscuration = value;
  }
  public resetUrlObscuration() {
    this._urlObscuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlObscurationInput() {
    return this._urlObscuration;
  }

  // user_peer - computed: false, optional: true, required: false
  private _userPeer?: string; 
  public get userPeer() {
    return this.getStringAttribute('user_peer');
  }
  public set userPeer(value: string) {
    this._userPeer = value;
  }
  public resetUserPeer() {
    this._userPeer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userPeerInput() {
    return this._userPeer;
  }

  // vdomparam - computed: true, optional: true, required: false
  private _vdomparam?: string; 
  public get vdomparam() {
    return this.getStringAttribute('vdomparam');
  }
  public set vdomparam(value: string) {
    this._vdomparam = value;
  }
  public resetVdomparam() {
    this._vdomparam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomparamInput() {
    return this._vdomparam;
  }

  // web_mode_snat - computed: true, optional: true, required: false
  private _webModeSnat?: string; 
  public get webModeSnat() {
    return this.getStringAttribute('web_mode_snat');
  }
  public set webModeSnat(value: string) {
    this._webModeSnat = value;
  }
  public resetWebModeSnat() {
    this._webModeSnat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webModeSnatInput() {
    return this._webModeSnat;
  }

  // wins_server1 - computed: true, optional: true, required: false
  private _winsServer1?: string; 
  public get winsServer1() {
    return this.getStringAttribute('wins_server1');
  }
  public set winsServer1(value: string) {
    this._winsServer1 = value;
  }
  public resetWinsServer1() {
    this._winsServer1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get winsServer1Input() {
    return this._winsServer1;
  }

  // wins_server2 - computed: true, optional: true, required: false
  private _winsServer2?: string; 
  public get winsServer2() {
    return this.getStringAttribute('wins_server2');
  }
  public set winsServer2(value: string) {
    this._winsServer2 = value;
  }
  public resetWinsServer2() {
    this._winsServer2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get winsServer2Input() {
    return this._winsServer2;
  }

  // x_content_type_options - computed: true, optional: true, required: false
  private _xContentTypeOptions?: string; 
  public get xContentTypeOptions() {
    return this.getStringAttribute('x_content_type_options');
  }
  public set xContentTypeOptions(value: string) {
    this._xContentTypeOptions = value;
  }
  public resetXContentTypeOptions() {
    this._xContentTypeOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xContentTypeOptionsInput() {
    return this._xContentTypeOptions;
  }

  // ztna_trusted_client - computed: true, optional: true, required: false
  private _ztnaTrustedClient?: string; 
  public get ztnaTrustedClient() {
    return this.getStringAttribute('ztna_trusted_client');
  }
  public set ztnaTrustedClient(value: string) {
    this._ztnaTrustedClient = value;
  }
  public resetZtnaTrustedClient() {
    this._ztnaTrustedClient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ztnaTrustedClientInput() {
    return this._ztnaTrustedClient;
  }

  // authentication_rule - computed: false, optional: true, required: false
  private _authenticationRule = new VpnsslSettingsAuthenticationRuleList(this, "authentication_rule", false);
  public get authenticationRule() {
    return this._authenticationRule;
  }
  public putAuthenticationRule(value: VpnsslSettingsAuthenticationRule[] | cdktf.IResolvable) {
    this._authenticationRule.internalValue = value;
  }
  public resetAuthenticationRule() {
    this._authenticationRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationRuleInput() {
    return this._authenticationRule.internalValue;
  }

  // source_address - computed: false, optional: true, required: false
  private _sourceAddress = new VpnsslSettingsSourceAddressList(this, "source_address", true);
  public get sourceAddress() {
    return this._sourceAddress;
  }
  public putSourceAddress(value: VpnsslSettingsSourceAddress[] | cdktf.IResolvable) {
    this._sourceAddress.internalValue = value;
  }
  public resetSourceAddress() {
    this._sourceAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAddressInput() {
    return this._sourceAddress.internalValue;
  }

  // source_address6 - computed: false, optional: true, required: false
  private _sourceAddress6 = new VpnsslSettingsSourceAddress6List(this, "source_address6", true);
  public get sourceAddress6() {
    return this._sourceAddress6;
  }
  public putSourceAddress6(value: VpnsslSettingsSourceAddress6[] | cdktf.IResolvable) {
    this._sourceAddress6.internalValue = value;
  }
  public resetSourceAddress6() {
    this._sourceAddress6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAddress6Input() {
    return this._sourceAddress6.internalValue;
  }

  // source_interface - computed: false, optional: true, required: false
  private _sourceInterface = new VpnsslSettingsSourceInterfaceList(this, "source_interface", true);
  public get sourceInterface() {
    return this._sourceInterface;
  }
  public putSourceInterface(value: VpnsslSettingsSourceInterface[] | cdktf.IResolvable) {
    this._sourceInterface.internalValue = value;
  }
  public resetSourceInterface() {
    this._sourceInterface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInterfaceInput() {
    return this._sourceInterface.internalValue;
  }

  // tunnel_ip_pools - computed: false, optional: true, required: false
  private _tunnelIpPools = new VpnsslSettingsTunnelIpPoolsList(this, "tunnel_ip_pools", true);
  public get tunnelIpPools() {
    return this._tunnelIpPools;
  }
  public putTunnelIpPools(value: VpnsslSettingsTunnelIpPools[] | cdktf.IResolvable) {
    this._tunnelIpPools.internalValue = value;
  }
  public resetTunnelIpPools() {
    this._tunnelIpPools.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelIpPoolsInput() {
    return this._tunnelIpPools.internalValue;
  }

  // tunnel_ipv6_pools - computed: false, optional: true, required: false
  private _tunnelIpv6Pools = new VpnsslSettingsTunnelIpv6PoolsList(this, "tunnel_ipv6_pools", true);
  public get tunnelIpv6Pools() {
    return this._tunnelIpv6Pools;
  }
  public putTunnelIpv6Pools(value: VpnsslSettingsTunnelIpv6Pools[] | cdktf.IResolvable) {
    this._tunnelIpv6Pools.internalValue = value;
  }
  public resetTunnelIpv6Pools() {
    this._tunnelIpv6Pools.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelIpv6PoolsInput() {
    return this._tunnelIpv6Pools.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      algorithm: cdktf.stringToTerraform(this._algorithm),
      auth_session_check_source_ip: cdktf.stringToTerraform(this._authSessionCheckSourceIp),
      auth_timeout: cdktf.numberToTerraform(this._authTimeout),
      auto_tunnel_static_route: cdktf.stringToTerraform(this._autoTunnelStaticRoute),
      banned_cipher: cdktf.stringToTerraform(this._bannedCipher),
      browser_language_detection: cdktf.stringToTerraform(this._browserLanguageDetection),
      check_referer: cdktf.stringToTerraform(this._checkReferer),
      ciphersuite: cdktf.stringToTerraform(this._ciphersuite),
      client_sigalgs: cdktf.stringToTerraform(this._clientSigalgs),
      default_portal: cdktf.stringToTerraform(this._defaultPortal),
      deflate_compression_level: cdktf.numberToTerraform(this._deflateCompressionLevel),
      deflate_min_data_size: cdktf.numberToTerraform(this._deflateMinDataSize),
      dns_server1: cdktf.stringToTerraform(this._dnsServer1),
      dns_server2: cdktf.stringToTerraform(this._dnsServer2),
      dns_suffix: cdktf.stringToTerraform(this._dnsSuffix),
      dtls_heartbeat_fail_count: cdktf.numberToTerraform(this._dtlsHeartbeatFailCount),
      dtls_heartbeat_idle_timeout: cdktf.numberToTerraform(this._dtlsHeartbeatIdleTimeout),
      dtls_heartbeat_interval: cdktf.numberToTerraform(this._dtlsHeartbeatInterval),
      dtls_hello_timeout: cdktf.numberToTerraform(this._dtlsHelloTimeout),
      dtls_max_proto_ver: cdktf.stringToTerraform(this._dtlsMaxProtoVer),
      dtls_min_proto_ver: cdktf.stringToTerraform(this._dtlsMinProtoVer),
      dtls_tunnel: cdktf.stringToTerraform(this._dtlsTunnel),
      dual_stack_mode: cdktf.stringToTerraform(this._dualStackMode),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      encode_2f_sequence: cdktf.stringToTerraform(this._encode2FSequence),
      encrypt_and_store_password: cdktf.stringToTerraform(this._encryptAndStorePassword),
      force_two_factor_auth: cdktf.stringToTerraform(this._forceTwoFactorAuth),
      get_all_tables: cdktf.stringToTerraform(this._getAllTables),
      header_x_forwarded_for: cdktf.stringToTerraform(this._headerXForwardedFor),
      hsts_include_subdomains: cdktf.stringToTerraform(this._hstsIncludeSubdomains),
      http_compression: cdktf.stringToTerraform(this._httpCompression),
      http_only_cookie: cdktf.stringToTerraform(this._httpOnlyCookie),
      http_request_body_timeout: cdktf.numberToTerraform(this._httpRequestBodyTimeout),
      http_request_header_timeout: cdktf.numberToTerraform(this._httpRequestHeaderTimeout),
      https_redirect: cdktf.stringToTerraform(this._httpsRedirect),
      id: cdktf.stringToTerraform(this._id),
      idle_timeout: cdktf.numberToTerraform(this._idleTimeout),
      ipv6_dns_server1: cdktf.stringToTerraform(this._ipv6DnsServer1),
      ipv6_dns_server2: cdktf.stringToTerraform(this._ipv6DnsServer2),
      ipv6_wins_server1: cdktf.stringToTerraform(this._ipv6WinsServer1),
      ipv6_wins_server2: cdktf.stringToTerraform(this._ipv6WinsServer2),
      login_attempt_limit: cdktf.numberToTerraform(this._loginAttemptLimit),
      login_block_time: cdktf.numberToTerraform(this._loginBlockTime),
      login_timeout: cdktf.numberToTerraform(this._loginTimeout),
      port: cdktf.numberToTerraform(this._port),
      port_precedence: cdktf.stringToTerraform(this._portPrecedence),
      reqclientcert: cdktf.stringToTerraform(this._reqclientcert),
      route_source_interface: cdktf.stringToTerraform(this._routeSourceInterface),
      saml_redirect_port: cdktf.numberToTerraform(this._samlRedirectPort),
      server_hostname: cdktf.stringToTerraform(this._serverHostname),
      servercert: cdktf.stringToTerraform(this._servercert),
      source_address6_negate: cdktf.stringToTerraform(this._sourceAddress6Negate),
      source_address_negate: cdktf.stringToTerraform(this._sourceAddressNegate),
      ssl_client_renegotiation: cdktf.stringToTerraform(this._sslClientRenegotiation),
      ssl_insert_empty_fragment: cdktf.stringToTerraform(this._sslInsertEmptyFragment),
      ssl_max_proto_ver: cdktf.stringToTerraform(this._sslMaxProtoVer),
      ssl_min_proto_ver: cdktf.stringToTerraform(this._sslMinProtoVer),
      status: cdktf.stringToTerraform(this._status),
      tlsv1_0: cdktf.stringToTerraform(this._tlsv10),
      tlsv1_1: cdktf.stringToTerraform(this._tlsv11),
      tlsv1_2: cdktf.stringToTerraform(this._tlsv12),
      tlsv1_3: cdktf.stringToTerraform(this._tlsv13),
      transform_backward_slashes: cdktf.stringToTerraform(this._transformBackwardSlashes),
      tunnel_addr_assigned_method: cdktf.stringToTerraform(this._tunnelAddrAssignedMethod),
      tunnel_connect_without_reauth: cdktf.stringToTerraform(this._tunnelConnectWithoutReauth),
      tunnel_user_session_timeout: cdktf.numberToTerraform(this._tunnelUserSessionTimeout),
      unsafe_legacy_renegotiation: cdktf.stringToTerraform(this._unsafeLegacyRenegotiation),
      url_obscuration: cdktf.stringToTerraform(this._urlObscuration),
      user_peer: cdktf.stringToTerraform(this._userPeer),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
      web_mode_snat: cdktf.stringToTerraform(this._webModeSnat),
      wins_server1: cdktf.stringToTerraform(this._winsServer1),
      wins_server2: cdktf.stringToTerraform(this._winsServer2),
      x_content_type_options: cdktf.stringToTerraform(this._xContentTypeOptions),
      ztna_trusted_client: cdktf.stringToTerraform(this._ztnaTrustedClient),
      authentication_rule: cdktf.listMapper(vpnsslSettingsAuthenticationRuleToTerraform, true)(this._authenticationRule.internalValue),
      source_address: cdktf.listMapper(vpnsslSettingsSourceAddressToTerraform, true)(this._sourceAddress.internalValue),
      source_address6: cdktf.listMapper(vpnsslSettingsSourceAddress6ToTerraform, true)(this._sourceAddress6.internalValue),
      source_interface: cdktf.listMapper(vpnsslSettingsSourceInterfaceToTerraform, true)(this._sourceInterface.internalValue),
      tunnel_ip_pools: cdktf.listMapper(vpnsslSettingsTunnelIpPoolsToTerraform, true)(this._tunnelIpPools.internalValue),
      tunnel_ipv6_pools: cdktf.listMapper(vpnsslSettingsTunnelIpv6PoolsToTerraform, true)(this._tunnelIpv6Pools.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      algorithm: {
        value: cdktf.stringToHclTerraform(this._algorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_session_check_source_ip: {
        value: cdktf.stringToHclTerraform(this._authSessionCheckSourceIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_timeout: {
        value: cdktf.numberToHclTerraform(this._authTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      auto_tunnel_static_route: {
        value: cdktf.stringToHclTerraform(this._autoTunnelStaticRoute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      banned_cipher: {
        value: cdktf.stringToHclTerraform(this._bannedCipher),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      browser_language_detection: {
        value: cdktf.stringToHclTerraform(this._browserLanguageDetection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      check_referer: {
        value: cdktf.stringToHclTerraform(this._checkReferer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ciphersuite: {
        value: cdktf.stringToHclTerraform(this._ciphersuite),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_sigalgs: {
        value: cdktf.stringToHclTerraform(this._clientSigalgs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_portal: {
        value: cdktf.stringToHclTerraform(this._defaultPortal),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deflate_compression_level: {
        value: cdktf.numberToHclTerraform(this._deflateCompressionLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      deflate_min_data_size: {
        value: cdktf.numberToHclTerraform(this._deflateMinDataSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dns_server1: {
        value: cdktf.stringToHclTerraform(this._dnsServer1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_server2: {
        value: cdktf.stringToHclTerraform(this._dnsServer2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_suffix: {
        value: cdktf.stringToHclTerraform(this._dnsSuffix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dtls_heartbeat_fail_count: {
        value: cdktf.numberToHclTerraform(this._dtlsHeartbeatFailCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dtls_heartbeat_idle_timeout: {
        value: cdktf.numberToHclTerraform(this._dtlsHeartbeatIdleTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dtls_heartbeat_interval: {
        value: cdktf.numberToHclTerraform(this._dtlsHeartbeatInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dtls_hello_timeout: {
        value: cdktf.numberToHclTerraform(this._dtlsHelloTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dtls_max_proto_ver: {
        value: cdktf.stringToHclTerraform(this._dtlsMaxProtoVer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dtls_min_proto_ver: {
        value: cdktf.stringToHclTerraform(this._dtlsMinProtoVer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dtls_tunnel: {
        value: cdktf.stringToHclTerraform(this._dtlsTunnel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dual_stack_mode: {
        value: cdktf.stringToHclTerraform(this._dualStackMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dynamic_sort_subtable: {
        value: cdktf.stringToHclTerraform(this._dynamicSortSubtable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encode_2f_sequence: {
        value: cdktf.stringToHclTerraform(this._encode2FSequence),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encrypt_and_store_password: {
        value: cdktf.stringToHclTerraform(this._encryptAndStorePassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      force_two_factor_auth: {
        value: cdktf.stringToHclTerraform(this._forceTwoFactorAuth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      get_all_tables: {
        value: cdktf.stringToHclTerraform(this._getAllTables),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      header_x_forwarded_for: {
        value: cdktf.stringToHclTerraform(this._headerXForwardedFor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hsts_include_subdomains: {
        value: cdktf.stringToHclTerraform(this._hstsIncludeSubdomains),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_compression: {
        value: cdktf.stringToHclTerraform(this._httpCompression),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_only_cookie: {
        value: cdktf.stringToHclTerraform(this._httpOnlyCookie),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_request_body_timeout: {
        value: cdktf.numberToHclTerraform(this._httpRequestBodyTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      http_request_header_timeout: {
        value: cdktf.numberToHclTerraform(this._httpRequestHeaderTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      https_redirect: {
        value: cdktf.stringToHclTerraform(this._httpsRedirect),
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
      idle_timeout: {
        value: cdktf.numberToHclTerraform(this._idleTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ipv6_dns_server1: {
        value: cdktf.stringToHclTerraform(this._ipv6DnsServer1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_dns_server2: {
        value: cdktf.stringToHclTerraform(this._ipv6DnsServer2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_wins_server1: {
        value: cdktf.stringToHclTerraform(this._ipv6WinsServer1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_wins_server2: {
        value: cdktf.stringToHclTerraform(this._ipv6WinsServer2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      login_attempt_limit: {
        value: cdktf.numberToHclTerraform(this._loginAttemptLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      login_block_time: {
        value: cdktf.numberToHclTerraform(this._loginBlockTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      login_timeout: {
        value: cdktf.numberToHclTerraform(this._loginTimeout),
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
      port_precedence: {
        value: cdktf.stringToHclTerraform(this._portPrecedence),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reqclientcert: {
        value: cdktf.stringToHclTerraform(this._reqclientcert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      route_source_interface: {
        value: cdktf.stringToHclTerraform(this._routeSourceInterface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      saml_redirect_port: {
        value: cdktf.numberToHclTerraform(this._samlRedirectPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      server_hostname: {
        value: cdktf.stringToHclTerraform(this._serverHostname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      servercert: {
        value: cdktf.stringToHclTerraform(this._servercert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_address6_negate: {
        value: cdktf.stringToHclTerraform(this._sourceAddress6Negate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_address_negate: {
        value: cdktf.stringToHclTerraform(this._sourceAddressNegate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_client_renegotiation: {
        value: cdktf.stringToHclTerraform(this._sslClientRenegotiation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_insert_empty_fragment: {
        value: cdktf.stringToHclTerraform(this._sslInsertEmptyFragment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_max_proto_ver: {
        value: cdktf.stringToHclTerraform(this._sslMaxProtoVer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_min_proto_ver: {
        value: cdktf.stringToHclTerraform(this._sslMinProtoVer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tlsv1_0: {
        value: cdktf.stringToHclTerraform(this._tlsv10),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tlsv1_1: {
        value: cdktf.stringToHclTerraform(this._tlsv11),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tlsv1_2: {
        value: cdktf.stringToHclTerraform(this._tlsv12),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tlsv1_3: {
        value: cdktf.stringToHclTerraform(this._tlsv13),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transform_backward_slashes: {
        value: cdktf.stringToHclTerraform(this._transformBackwardSlashes),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel_addr_assigned_method: {
        value: cdktf.stringToHclTerraform(this._tunnelAddrAssignedMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel_connect_without_reauth: {
        value: cdktf.stringToHclTerraform(this._tunnelConnectWithoutReauth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel_user_session_timeout: {
        value: cdktf.numberToHclTerraform(this._tunnelUserSessionTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      unsafe_legacy_renegotiation: {
        value: cdktf.stringToHclTerraform(this._unsafeLegacyRenegotiation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url_obscuration: {
        value: cdktf.stringToHclTerraform(this._urlObscuration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_peer: {
        value: cdktf.stringToHclTerraform(this._userPeer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      web_mode_snat: {
        value: cdktf.stringToHclTerraform(this._webModeSnat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wins_server1: {
        value: cdktf.stringToHclTerraform(this._winsServer1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wins_server2: {
        value: cdktf.stringToHclTerraform(this._winsServer2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      x_content_type_options: {
        value: cdktf.stringToHclTerraform(this._xContentTypeOptions),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ztna_trusted_client: {
        value: cdktf.stringToHclTerraform(this._ztnaTrustedClient),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authentication_rule: {
        value: cdktf.listMapperHcl(vpnsslSettingsAuthenticationRuleToHclTerraform, true)(this._authenticationRule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VpnsslSettingsAuthenticationRuleList",
      },
      source_address: {
        value: cdktf.listMapperHcl(vpnsslSettingsSourceAddressToHclTerraform, true)(this._sourceAddress.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "VpnsslSettingsSourceAddressList",
      },
      source_address6: {
        value: cdktf.listMapperHcl(vpnsslSettingsSourceAddress6ToHclTerraform, true)(this._sourceAddress6.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "VpnsslSettingsSourceAddress6List",
      },
      source_interface: {
        value: cdktf.listMapperHcl(vpnsslSettingsSourceInterfaceToHclTerraform, true)(this._sourceInterface.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "VpnsslSettingsSourceInterfaceList",
      },
      tunnel_ip_pools: {
        value: cdktf.listMapperHcl(vpnsslSettingsTunnelIpPoolsToHclTerraform, true)(this._tunnelIpPools.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "VpnsslSettingsTunnelIpPoolsList",
      },
      tunnel_ipv6_pools: {
        value: cdktf.listMapperHcl(vpnsslSettingsTunnelIpv6PoolsToHclTerraform, true)(this._tunnelIpv6Pools.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "VpnsslSettingsTunnelIpv6PoolsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
