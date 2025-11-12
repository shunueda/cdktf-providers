// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/webproxy_global
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WebproxyGlobalConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/webproxy_global#always_learn_client_ip WebproxyGlobal#always_learn_client_ip}
  */
  readonly alwaysLearnClientIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/webproxy_global#device_name WebproxyGlobal#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/webproxy_global#device_vdom WebproxyGlobal#device_vdom}
  */
  readonly deviceVdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/webproxy_global#fast_policy_match WebproxyGlobal#fast_policy_match}
  */
  readonly fastPolicyMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/webproxy_global#forward_proxy_auth WebproxyGlobal#forward_proxy_auth}
  */
  readonly forwardProxyAuth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/webproxy_global#forward_server_affinity_timeout WebproxyGlobal#forward_server_affinity_timeout}
  */
  readonly forwardServerAffinityTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/webproxy_global#id WebproxyGlobal#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/webproxy_global#ldap_user_cache WebproxyGlobal#ldap_user_cache}
  */
  readonly ldapUserCache?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/webproxy_global#learn_client_ip WebproxyGlobal#learn_client_ip}
  */
  readonly learnClientIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/webproxy_global#learn_client_ip_from_header WebproxyGlobal#learn_client_ip_from_header}
  */
  readonly learnClientIpFromHeader?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/webproxy_global#learn_client_ip_srcaddr WebproxyGlobal#learn_client_ip_srcaddr}
  */
  readonly learnClientIpSrcaddr?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/webproxy_global#learn_client_ip_srcaddr6 WebproxyGlobal#learn_client_ip_srcaddr6}
  */
  readonly learnClientIpSrcaddr6?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/webproxy_global#log_app_id WebproxyGlobal#log_app_id}
  */
  readonly logAppId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/webproxy_global#log_forward_server WebproxyGlobal#log_forward_server}
  */
  readonly logForwardServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/webproxy_global#log_policy_pending WebproxyGlobal#log_policy_pending}
  */
  readonly logPolicyPending?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/webproxy_global#max_message_length WebproxyGlobal#max_message_length}
  */
  readonly maxMessageLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/webproxy_global#max_request_length WebproxyGlobal#max_request_length}
  */
  readonly maxRequestLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/webproxy_global#max_waf_body_cache_length WebproxyGlobal#max_waf_body_cache_length}
  */
  readonly maxWafBodyCacheLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/webproxy_global#policy_category_deep_inspect WebproxyGlobal#policy_category_deep_inspect}
  */
  readonly policyCategoryDeepInspect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/webproxy_global#proxy_fqdn WebproxyGlobal#proxy_fqdn}
  */
  readonly proxyFqdn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/webproxy_global#proxy_transparent_cert_inspection WebproxyGlobal#proxy_transparent_cert_inspection}
  */
  readonly proxyTransparentCertInspection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/webproxy_global#request_obs_fold WebproxyGlobal#request_obs_fold}
  */
  readonly requestObsFold?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/webproxy_global#src_affinity_exempt_addr WebproxyGlobal#src_affinity_exempt_addr}
  */
  readonly srcAffinityExemptAddr?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/webproxy_global#src_affinity_exempt_addr6 WebproxyGlobal#src_affinity_exempt_addr6}
  */
  readonly srcAffinityExemptAddr6?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/webproxy_global#ssl_ca_cert WebproxyGlobal#ssl_ca_cert}
  */
  readonly sslCaCert?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/webproxy_global#ssl_cert WebproxyGlobal#ssl_cert}
  */
  readonly sslCert?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/webproxy_global#strict_web_check WebproxyGlobal#strict_web_check}
  */
  readonly strictWebCheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/webproxy_global#tunnel_non_http WebproxyGlobal#tunnel_non_http}
  */
  readonly tunnelNonHttp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/webproxy_global#unknown_http_version WebproxyGlobal#unknown_http_version}
  */
  readonly unknownHttpVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/webproxy_global#webproxy_profile WebproxyGlobal#webproxy_profile}
  */
  readonly webproxyProfile?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/webproxy_global fmgdevice_webproxy_global}
*/
export class WebproxyGlobal extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_webproxy_global";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WebproxyGlobal resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WebproxyGlobal to import
  * @param importFromId The id of the existing WebproxyGlobal that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/webproxy_global#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WebproxyGlobal to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_webproxy_global", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/webproxy_global fmgdevice_webproxy_global} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WebproxyGlobalConfig = {}
  */
  public constructor(scope: Construct, id: string, config: WebproxyGlobalConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_webproxy_global',
      terraformGeneratorMetadata: {
        providerName: 'fmgdevice',
        providerVersion: '1.2.1',
        providerVersionConstraint: '1.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._alwaysLearnClientIp = config.alwaysLearnClientIp;
    this._deviceName = config.deviceName;
    this._deviceVdom = config.deviceVdom;
    this._fastPolicyMatch = config.fastPolicyMatch;
    this._forwardProxyAuth = config.forwardProxyAuth;
    this._forwardServerAffinityTimeout = config.forwardServerAffinityTimeout;
    this._id = config.id;
    this._ldapUserCache = config.ldapUserCache;
    this._learnClientIp = config.learnClientIp;
    this._learnClientIpFromHeader = config.learnClientIpFromHeader;
    this._learnClientIpSrcaddr = config.learnClientIpSrcaddr;
    this._learnClientIpSrcaddr6 = config.learnClientIpSrcaddr6;
    this._logAppId = config.logAppId;
    this._logForwardServer = config.logForwardServer;
    this._logPolicyPending = config.logPolicyPending;
    this._maxMessageLength = config.maxMessageLength;
    this._maxRequestLength = config.maxRequestLength;
    this._maxWafBodyCacheLength = config.maxWafBodyCacheLength;
    this._policyCategoryDeepInspect = config.policyCategoryDeepInspect;
    this._proxyFqdn = config.proxyFqdn;
    this._proxyTransparentCertInspection = config.proxyTransparentCertInspection;
    this._requestObsFold = config.requestObsFold;
    this._srcAffinityExemptAddr = config.srcAffinityExemptAddr;
    this._srcAffinityExemptAddr6 = config.srcAffinityExemptAddr6;
    this._sslCaCert = config.sslCaCert;
    this._sslCert = config.sslCert;
    this._strictWebCheck = config.strictWebCheck;
    this._tunnelNonHttp = config.tunnelNonHttp;
    this._unknownHttpVersion = config.unknownHttpVersion;
    this._webproxyProfile = config.webproxyProfile;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // always_learn_client_ip - computed: false, optional: true, required: false
  private _alwaysLearnClientIp?: string; 
  public get alwaysLearnClientIp() {
    return this.getStringAttribute('always_learn_client_ip');
  }
  public set alwaysLearnClientIp(value: string) {
    this._alwaysLearnClientIp = value;
  }
  public resetAlwaysLearnClientIp() {
    this._alwaysLearnClientIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alwaysLearnClientIpInput() {
    return this._alwaysLearnClientIp;
  }

  // device_name - computed: true, optional: true, required: false
  private _deviceName?: string; 
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }
  public set deviceName(value: string) {
    this._deviceName = value;
  }
  public resetDeviceName() {
    this._deviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNameInput() {
    return this._deviceName;
  }

  // device_vdom - computed: true, optional: true, required: false
  private _deviceVdom?: string; 
  public get deviceVdom() {
    return this.getStringAttribute('device_vdom');
  }
  public set deviceVdom(value: string) {
    this._deviceVdom = value;
  }
  public resetDeviceVdom() {
    this._deviceVdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceVdomInput() {
    return this._deviceVdom;
  }

  // fast_policy_match - computed: true, optional: true, required: false
  private _fastPolicyMatch?: string; 
  public get fastPolicyMatch() {
    return this.getStringAttribute('fast_policy_match');
  }
  public set fastPolicyMatch(value: string) {
    this._fastPolicyMatch = value;
  }
  public resetFastPolicyMatch() {
    this._fastPolicyMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fastPolicyMatchInput() {
    return this._fastPolicyMatch;
  }

  // forward_proxy_auth - computed: true, optional: true, required: false
  private _forwardProxyAuth?: string; 
  public get forwardProxyAuth() {
    return this.getStringAttribute('forward_proxy_auth');
  }
  public set forwardProxyAuth(value: string) {
    this._forwardProxyAuth = value;
  }
  public resetForwardProxyAuth() {
    this._forwardProxyAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardProxyAuthInput() {
    return this._forwardProxyAuth;
  }

  // forward_server_affinity_timeout - computed: true, optional: true, required: false
  private _forwardServerAffinityTimeout?: number; 
  public get forwardServerAffinityTimeout() {
    return this.getNumberAttribute('forward_server_affinity_timeout');
  }
  public set forwardServerAffinityTimeout(value: number) {
    this._forwardServerAffinityTimeout = value;
  }
  public resetForwardServerAffinityTimeout() {
    this._forwardServerAffinityTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardServerAffinityTimeoutInput() {
    return this._forwardServerAffinityTimeout;
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

  // ldap_user_cache - computed: true, optional: true, required: false
  private _ldapUserCache?: string; 
  public get ldapUserCache() {
    return this.getStringAttribute('ldap_user_cache');
  }
  public set ldapUserCache(value: string) {
    this._ldapUserCache = value;
  }
  public resetLdapUserCache() {
    this._ldapUserCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapUserCacheInput() {
    return this._ldapUserCache;
  }

  // learn_client_ip - computed: true, optional: true, required: false
  private _learnClientIp?: string; 
  public get learnClientIp() {
    return this.getStringAttribute('learn_client_ip');
  }
  public set learnClientIp(value: string) {
    this._learnClientIp = value;
  }
  public resetLearnClientIp() {
    this._learnClientIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get learnClientIpInput() {
    return this._learnClientIp;
  }

  // learn_client_ip_from_header - computed: true, optional: true, required: false
  private _learnClientIpFromHeader?: string[]; 
  public get learnClientIpFromHeader() {
    return cdktf.Fn.tolist(this.getListAttribute('learn_client_ip_from_header'));
  }
  public set learnClientIpFromHeader(value: string[]) {
    this._learnClientIpFromHeader = value;
  }
  public resetLearnClientIpFromHeader() {
    this._learnClientIpFromHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get learnClientIpFromHeaderInput() {
    return this._learnClientIpFromHeader;
  }

  // learn_client_ip_srcaddr - computed: true, optional: true, required: false
  private _learnClientIpSrcaddr?: string[]; 
  public get learnClientIpSrcaddr() {
    return cdktf.Fn.tolist(this.getListAttribute('learn_client_ip_srcaddr'));
  }
  public set learnClientIpSrcaddr(value: string[]) {
    this._learnClientIpSrcaddr = value;
  }
  public resetLearnClientIpSrcaddr() {
    this._learnClientIpSrcaddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get learnClientIpSrcaddrInput() {
    return this._learnClientIpSrcaddr;
  }

  // learn_client_ip_srcaddr6 - computed: true, optional: true, required: false
  private _learnClientIpSrcaddr6?: string[]; 
  public get learnClientIpSrcaddr6() {
    return cdktf.Fn.tolist(this.getListAttribute('learn_client_ip_srcaddr6'));
  }
  public set learnClientIpSrcaddr6(value: string[]) {
    this._learnClientIpSrcaddr6 = value;
  }
  public resetLearnClientIpSrcaddr6() {
    this._learnClientIpSrcaddr6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get learnClientIpSrcaddr6Input() {
    return this._learnClientIpSrcaddr6;
  }

  // log_app_id - computed: true, optional: true, required: false
  private _logAppId?: string; 
  public get logAppId() {
    return this.getStringAttribute('log_app_id');
  }
  public set logAppId(value: string) {
    this._logAppId = value;
  }
  public resetLogAppId() {
    this._logAppId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logAppIdInput() {
    return this._logAppId;
  }

  // log_forward_server - computed: true, optional: true, required: false
  private _logForwardServer?: string; 
  public get logForwardServer() {
    return this.getStringAttribute('log_forward_server');
  }
  public set logForwardServer(value: string) {
    this._logForwardServer = value;
  }
  public resetLogForwardServer() {
    this._logForwardServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logForwardServerInput() {
    return this._logForwardServer;
  }

  // log_policy_pending - computed: true, optional: true, required: false
  private _logPolicyPending?: string; 
  public get logPolicyPending() {
    return this.getStringAttribute('log_policy_pending');
  }
  public set logPolicyPending(value: string) {
    this._logPolicyPending = value;
  }
  public resetLogPolicyPending() {
    this._logPolicyPending = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logPolicyPendingInput() {
    return this._logPolicyPending;
  }

  // max_message_length - computed: true, optional: true, required: false
  private _maxMessageLength?: number; 
  public get maxMessageLength() {
    return this.getNumberAttribute('max_message_length');
  }
  public set maxMessageLength(value: number) {
    this._maxMessageLength = value;
  }
  public resetMaxMessageLength() {
    this._maxMessageLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxMessageLengthInput() {
    return this._maxMessageLength;
  }

  // max_request_length - computed: true, optional: true, required: false
  private _maxRequestLength?: number; 
  public get maxRequestLength() {
    return this.getNumberAttribute('max_request_length');
  }
  public set maxRequestLength(value: number) {
    this._maxRequestLength = value;
  }
  public resetMaxRequestLength() {
    this._maxRequestLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRequestLengthInput() {
    return this._maxRequestLength;
  }

  // max_waf_body_cache_length - computed: true, optional: true, required: false
  private _maxWafBodyCacheLength?: number; 
  public get maxWafBodyCacheLength() {
    return this.getNumberAttribute('max_waf_body_cache_length');
  }
  public set maxWafBodyCacheLength(value: number) {
    this._maxWafBodyCacheLength = value;
  }
  public resetMaxWafBodyCacheLength() {
    this._maxWafBodyCacheLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxWafBodyCacheLengthInput() {
    return this._maxWafBodyCacheLength;
  }

  // policy_category_deep_inspect - computed: true, optional: true, required: false
  private _policyCategoryDeepInspect?: string; 
  public get policyCategoryDeepInspect() {
    return this.getStringAttribute('policy_category_deep_inspect');
  }
  public set policyCategoryDeepInspect(value: string) {
    this._policyCategoryDeepInspect = value;
  }
  public resetPolicyCategoryDeepInspect() {
    this._policyCategoryDeepInspect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyCategoryDeepInspectInput() {
    return this._policyCategoryDeepInspect;
  }

  // proxy_fqdn - computed: true, optional: true, required: false
  private _proxyFqdn?: string; 
  public get proxyFqdn() {
    return this.getStringAttribute('proxy_fqdn');
  }
  public set proxyFqdn(value: string) {
    this._proxyFqdn = value;
  }
  public resetProxyFqdn() {
    this._proxyFqdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyFqdnInput() {
    return this._proxyFqdn;
  }

  // proxy_transparent_cert_inspection - computed: true, optional: true, required: false
  private _proxyTransparentCertInspection?: string; 
  public get proxyTransparentCertInspection() {
    return this.getStringAttribute('proxy_transparent_cert_inspection');
  }
  public set proxyTransparentCertInspection(value: string) {
    this._proxyTransparentCertInspection = value;
  }
  public resetProxyTransparentCertInspection() {
    this._proxyTransparentCertInspection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyTransparentCertInspectionInput() {
    return this._proxyTransparentCertInspection;
  }

  // request_obs_fold - computed: true, optional: true, required: false
  private _requestObsFold?: string; 
  public get requestObsFold() {
    return this.getStringAttribute('request_obs_fold');
  }
  public set requestObsFold(value: string) {
    this._requestObsFold = value;
  }
  public resetRequestObsFold() {
    this._requestObsFold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestObsFoldInput() {
    return this._requestObsFold;
  }

  // src_affinity_exempt_addr - computed: true, optional: true, required: false
  private _srcAffinityExemptAddr?: string[]; 
  public get srcAffinityExemptAddr() {
    return cdktf.Fn.tolist(this.getListAttribute('src_affinity_exempt_addr'));
  }
  public set srcAffinityExemptAddr(value: string[]) {
    this._srcAffinityExemptAddr = value;
  }
  public resetSrcAffinityExemptAddr() {
    this._srcAffinityExemptAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcAffinityExemptAddrInput() {
    return this._srcAffinityExemptAddr;
  }

  // src_affinity_exempt_addr6 - computed: true, optional: true, required: false
  private _srcAffinityExemptAddr6?: string[]; 
  public get srcAffinityExemptAddr6() {
    return cdktf.Fn.tolist(this.getListAttribute('src_affinity_exempt_addr6'));
  }
  public set srcAffinityExemptAddr6(value: string[]) {
    this._srcAffinityExemptAddr6 = value;
  }
  public resetSrcAffinityExemptAddr6() {
    this._srcAffinityExemptAddr6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcAffinityExemptAddr6Input() {
    return this._srcAffinityExemptAddr6;
  }

  // ssl_ca_cert - computed: true, optional: true, required: false
  private _sslCaCert?: string[]; 
  public get sslCaCert() {
    return cdktf.Fn.tolist(this.getListAttribute('ssl_ca_cert'));
  }
  public set sslCaCert(value: string[]) {
    this._sslCaCert = value;
  }
  public resetSslCaCert() {
    this._sslCaCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslCaCertInput() {
    return this._sslCaCert;
  }

  // ssl_cert - computed: true, optional: true, required: false
  private _sslCert?: string[]; 
  public get sslCert() {
    return cdktf.Fn.tolist(this.getListAttribute('ssl_cert'));
  }
  public set sslCert(value: string[]) {
    this._sslCert = value;
  }
  public resetSslCert() {
    this._sslCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslCertInput() {
    return this._sslCert;
  }

  // strict_web_check - computed: true, optional: true, required: false
  private _strictWebCheck?: string; 
  public get strictWebCheck() {
    return this.getStringAttribute('strict_web_check');
  }
  public set strictWebCheck(value: string) {
    this._strictWebCheck = value;
  }
  public resetStrictWebCheck() {
    this._strictWebCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strictWebCheckInput() {
    return this._strictWebCheck;
  }

  // tunnel_non_http - computed: false, optional: true, required: false
  private _tunnelNonHttp?: string; 
  public get tunnelNonHttp() {
    return this.getStringAttribute('tunnel_non_http');
  }
  public set tunnelNonHttp(value: string) {
    this._tunnelNonHttp = value;
  }
  public resetTunnelNonHttp() {
    this._tunnelNonHttp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelNonHttpInput() {
    return this._tunnelNonHttp;
  }

  // unknown_http_version - computed: false, optional: true, required: false
  private _unknownHttpVersion?: string; 
  public get unknownHttpVersion() {
    return this.getStringAttribute('unknown_http_version');
  }
  public set unknownHttpVersion(value: string) {
    this._unknownHttpVersion = value;
  }
  public resetUnknownHttpVersion() {
    this._unknownHttpVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownHttpVersionInput() {
    return this._unknownHttpVersion;
  }

  // webproxy_profile - computed: true, optional: true, required: false
  private _webproxyProfile?: string[]; 
  public get webproxyProfile() {
    return cdktf.Fn.tolist(this.getListAttribute('webproxy_profile'));
  }
  public set webproxyProfile(value: string[]) {
    this._webproxyProfile = value;
  }
  public resetWebproxyProfile() {
    this._webproxyProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webproxyProfileInput() {
    return this._webproxyProfile;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      always_learn_client_ip: cdktf.stringToTerraform(this._alwaysLearnClientIp),
      device_name: cdktf.stringToTerraform(this._deviceName),
      device_vdom: cdktf.stringToTerraform(this._deviceVdom),
      fast_policy_match: cdktf.stringToTerraform(this._fastPolicyMatch),
      forward_proxy_auth: cdktf.stringToTerraform(this._forwardProxyAuth),
      forward_server_affinity_timeout: cdktf.numberToTerraform(this._forwardServerAffinityTimeout),
      id: cdktf.stringToTerraform(this._id),
      ldap_user_cache: cdktf.stringToTerraform(this._ldapUserCache),
      learn_client_ip: cdktf.stringToTerraform(this._learnClientIp),
      learn_client_ip_from_header: cdktf.listMapper(cdktf.stringToTerraform, false)(this._learnClientIpFromHeader),
      learn_client_ip_srcaddr: cdktf.listMapper(cdktf.stringToTerraform, false)(this._learnClientIpSrcaddr),
      learn_client_ip_srcaddr6: cdktf.listMapper(cdktf.stringToTerraform, false)(this._learnClientIpSrcaddr6),
      log_app_id: cdktf.stringToTerraform(this._logAppId),
      log_forward_server: cdktf.stringToTerraform(this._logForwardServer),
      log_policy_pending: cdktf.stringToTerraform(this._logPolicyPending),
      max_message_length: cdktf.numberToTerraform(this._maxMessageLength),
      max_request_length: cdktf.numberToTerraform(this._maxRequestLength),
      max_waf_body_cache_length: cdktf.numberToTerraform(this._maxWafBodyCacheLength),
      policy_category_deep_inspect: cdktf.stringToTerraform(this._policyCategoryDeepInspect),
      proxy_fqdn: cdktf.stringToTerraform(this._proxyFqdn),
      proxy_transparent_cert_inspection: cdktf.stringToTerraform(this._proxyTransparentCertInspection),
      request_obs_fold: cdktf.stringToTerraform(this._requestObsFold),
      src_affinity_exempt_addr: cdktf.listMapper(cdktf.stringToTerraform, false)(this._srcAffinityExemptAddr),
      src_affinity_exempt_addr6: cdktf.listMapper(cdktf.stringToTerraform, false)(this._srcAffinityExemptAddr6),
      ssl_ca_cert: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sslCaCert),
      ssl_cert: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sslCert),
      strict_web_check: cdktf.stringToTerraform(this._strictWebCheck),
      tunnel_non_http: cdktf.stringToTerraform(this._tunnelNonHttp),
      unknown_http_version: cdktf.stringToTerraform(this._unknownHttpVersion),
      webproxy_profile: cdktf.listMapper(cdktf.stringToTerraform, false)(this._webproxyProfile),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      always_learn_client_ip: {
        value: cdktf.stringToHclTerraform(this._alwaysLearnClientIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_name: {
        value: cdktf.stringToHclTerraform(this._deviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_vdom: {
        value: cdktf.stringToHclTerraform(this._deviceVdom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fast_policy_match: {
        value: cdktf.stringToHclTerraform(this._fastPolicyMatch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      forward_proxy_auth: {
        value: cdktf.stringToHclTerraform(this._forwardProxyAuth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      forward_server_affinity_timeout: {
        value: cdktf.numberToHclTerraform(this._forwardServerAffinityTimeout),
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
      ldap_user_cache: {
        value: cdktf.stringToHclTerraform(this._ldapUserCache),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      learn_client_ip: {
        value: cdktf.stringToHclTerraform(this._learnClientIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      learn_client_ip_from_header: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._learnClientIpFromHeader),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      learn_client_ip_srcaddr: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._learnClientIpSrcaddr),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      learn_client_ip_srcaddr6: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._learnClientIpSrcaddr6),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      log_app_id: {
        value: cdktf.stringToHclTerraform(this._logAppId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_forward_server: {
        value: cdktf.stringToHclTerraform(this._logForwardServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_policy_pending: {
        value: cdktf.stringToHclTerraform(this._logPolicyPending),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_message_length: {
        value: cdktf.numberToHclTerraform(this._maxMessageLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_request_length: {
        value: cdktf.numberToHclTerraform(this._maxRequestLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_waf_body_cache_length: {
        value: cdktf.numberToHclTerraform(this._maxWafBodyCacheLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      policy_category_deep_inspect: {
        value: cdktf.stringToHclTerraform(this._policyCategoryDeepInspect),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proxy_fqdn: {
        value: cdktf.stringToHclTerraform(this._proxyFqdn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proxy_transparent_cert_inspection: {
        value: cdktf.stringToHclTerraform(this._proxyTransparentCertInspection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      request_obs_fold: {
        value: cdktf.stringToHclTerraform(this._requestObsFold),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      src_affinity_exempt_addr: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._srcAffinityExemptAddr),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      src_affinity_exempt_addr6: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._srcAffinityExemptAddr6),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      ssl_ca_cert: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sslCaCert),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      ssl_cert: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sslCert),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      strict_web_check: {
        value: cdktf.stringToHclTerraform(this._strictWebCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel_non_http: {
        value: cdktf.stringToHclTerraform(this._tunnelNonHttp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unknown_http_version: {
        value: cdktf.stringToHclTerraform(this._unknownHttpVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      webproxy_profile: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._webproxyProfile),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
