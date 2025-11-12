// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webproxy_global
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WebproxyGlobalConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webproxy_global#always_learn_client_ip WebproxyGlobal#always_learn_client_ip}
  */
  readonly alwaysLearnClientIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webproxy_global#dynamic_sort_subtable WebproxyGlobal#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webproxy_global#fast_policy_match WebproxyGlobal#fast_policy_match}
  */
  readonly fastPolicyMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webproxy_global#forward_proxy_auth WebproxyGlobal#forward_proxy_auth}
  */
  readonly forwardProxyAuth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webproxy_global#forward_server_affinity_timeout WebproxyGlobal#forward_server_affinity_timeout}
  */
  readonly forwardServerAffinityTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webproxy_global#get_all_tables WebproxyGlobal#get_all_tables}
  */
  readonly fetchAllTables?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webproxy_global#http2_client_window_size WebproxyGlobal#http2_client_window_size}
  */
  readonly http2ClientWindowSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webproxy_global#http2_server_window_size WebproxyGlobal#http2_server_window_size}
  */
  readonly http2ServerWindowSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webproxy_global#id WebproxyGlobal#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webproxy_global#ldap_user_cache WebproxyGlobal#ldap_user_cache}
  */
  readonly ldapUserCache?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webproxy_global#learn_client_ip WebproxyGlobal#learn_client_ip}
  */
  readonly learnClientIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webproxy_global#learn_client_ip_from_header WebproxyGlobal#learn_client_ip_from_header}
  */
  readonly learnClientIpFromHeader?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webproxy_global#log_app_id WebproxyGlobal#log_app_id}
  */
  readonly logAppId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webproxy_global#log_forward_server WebproxyGlobal#log_forward_server}
  */
  readonly logForwardServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webproxy_global#log_policy_pending WebproxyGlobal#log_policy_pending}
  */
  readonly logPolicyPending?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webproxy_global#max_message_length WebproxyGlobal#max_message_length}
  */
  readonly maxMessageLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webproxy_global#max_request_length WebproxyGlobal#max_request_length}
  */
  readonly maxRequestLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webproxy_global#max_waf_body_cache_length WebproxyGlobal#max_waf_body_cache_length}
  */
  readonly maxWafBodyCacheLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webproxy_global#policy_category_deep_inspect WebproxyGlobal#policy_category_deep_inspect}
  */
  readonly policyCategoryDeepInspect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webproxy_global#proxy_fqdn WebproxyGlobal#proxy_fqdn}
  */
  readonly proxyFqdn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webproxy_global#proxy_transparent_cert_inspection WebproxyGlobal#proxy_transparent_cert_inspection}
  */
  readonly proxyTransparentCertInspection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webproxy_global#request_obs_fold WebproxyGlobal#request_obs_fold}
  */
  readonly requestObsFold?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webproxy_global#src_affinity_exempt_addr WebproxyGlobal#src_affinity_exempt_addr}
  */
  readonly srcAffinityExemptAddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webproxy_global#src_affinity_exempt_addr6 WebproxyGlobal#src_affinity_exempt_addr6}
  */
  readonly srcAffinityExemptAddr6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webproxy_global#ssl_ca_cert WebproxyGlobal#ssl_ca_cert}
  */
  readonly sslCaCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webproxy_global#ssl_cert WebproxyGlobal#ssl_cert}
  */
  readonly sslCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webproxy_global#strict_web_check WebproxyGlobal#strict_web_check}
  */
  readonly strictWebCheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webproxy_global#tunnel_non_http WebproxyGlobal#tunnel_non_http}
  */
  readonly tunnelNonHttp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webproxy_global#unknown_http_version WebproxyGlobal#unknown_http_version}
  */
  readonly unknownHttpVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webproxy_global#vdomparam WebproxyGlobal#vdomparam}
  */
  readonly vdomparam?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webproxy_global#webproxy_profile WebproxyGlobal#webproxy_profile}
  */
  readonly webproxyProfile?: string;
  /**
  * learn_client_ip_srcaddr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webproxy_global#learn_client_ip_srcaddr WebproxyGlobal#learn_client_ip_srcaddr}
  */
  readonly learnClientIpSrcaddr?: WebproxyGlobalLearnClientIpSrcaddr[] | cdktf.IResolvable;
  /**
  * learn_client_ip_srcaddr6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webproxy_global#learn_client_ip_srcaddr6 WebproxyGlobal#learn_client_ip_srcaddr6}
  */
  readonly learnClientIpSrcaddr6?: WebproxyGlobalLearnClientIpSrcaddr6[] | cdktf.IResolvable;
}
export interface WebproxyGlobalLearnClientIpSrcaddr {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webproxy_global#name WebproxyGlobal#name}
  */
  readonly name?: string;
}

export function webproxyGlobalLearnClientIpSrcaddrToTerraform(struct?: WebproxyGlobalLearnClientIpSrcaddr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function webproxyGlobalLearnClientIpSrcaddrToHclTerraform(struct?: WebproxyGlobalLearnClientIpSrcaddr | cdktf.IResolvable): any {
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

export class WebproxyGlobalLearnClientIpSrcaddrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WebproxyGlobalLearnClientIpSrcaddr | cdktf.IResolvable | undefined {
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

  public set internalValue(value: WebproxyGlobalLearnClientIpSrcaddr | cdktf.IResolvable | undefined) {
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

export class WebproxyGlobalLearnClientIpSrcaddrList extends cdktf.ComplexList {
  public internalValue? : WebproxyGlobalLearnClientIpSrcaddr[] | cdktf.IResolvable

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
  public get(index: number): WebproxyGlobalLearnClientIpSrcaddrOutputReference {
    return new WebproxyGlobalLearnClientIpSrcaddrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WebproxyGlobalLearnClientIpSrcaddr6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webproxy_global#name WebproxyGlobal#name}
  */
  readonly name?: string;
}

export function webproxyGlobalLearnClientIpSrcaddr6ToTerraform(struct?: WebproxyGlobalLearnClientIpSrcaddr6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function webproxyGlobalLearnClientIpSrcaddr6ToHclTerraform(struct?: WebproxyGlobalLearnClientIpSrcaddr6 | cdktf.IResolvable): any {
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

export class WebproxyGlobalLearnClientIpSrcaddr6OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WebproxyGlobalLearnClientIpSrcaddr6 | cdktf.IResolvable | undefined {
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

  public set internalValue(value: WebproxyGlobalLearnClientIpSrcaddr6 | cdktf.IResolvable | undefined) {
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

export class WebproxyGlobalLearnClientIpSrcaddr6List extends cdktf.ComplexList {
  public internalValue? : WebproxyGlobalLearnClientIpSrcaddr6[] | cdktf.IResolvable

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
  public get(index: number): WebproxyGlobalLearnClientIpSrcaddr6OutputReference {
    return new WebproxyGlobalLearnClientIpSrcaddr6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webproxy_global fortios_webproxy_global}
*/
export class WebproxyGlobal extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_webproxy_global";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WebproxyGlobal resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WebproxyGlobal to import
  * @param importFromId The id of the existing WebproxyGlobal that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webproxy_global#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WebproxyGlobal to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_webproxy_global", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webproxy_global fortios_webproxy_global} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WebproxyGlobalConfig
  */
  public constructor(scope: Construct, id: string, config: WebproxyGlobalConfig) {
    super(scope, id, {
      terraformResourceType: 'fortios_webproxy_global',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0',
        providerVersionConstraint: '1.23.0'
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
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._fastPolicyMatch = config.fastPolicyMatch;
    this._forwardProxyAuth = config.forwardProxyAuth;
    this._forwardServerAffinityTimeout = config.forwardServerAffinityTimeout;
    this._getAllTables = config.fetchAllTables;
    this._http2ClientWindowSize = config.http2ClientWindowSize;
    this._http2ServerWindowSize = config.http2ServerWindowSize;
    this._id = config.id;
    this._ldapUserCache = config.ldapUserCache;
    this._learnClientIp = config.learnClientIp;
    this._learnClientIpFromHeader = config.learnClientIpFromHeader;
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
    this._vdomparam = config.vdomparam;
    this._webproxyProfile = config.webproxyProfile;
    this._learnClientIpSrcaddr.internalValue = config.learnClientIpSrcaddr;
    this._learnClientIpSrcaddr6.internalValue = config.learnClientIpSrcaddr6;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // always_learn_client_ip - computed: true, optional: true, required: false
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

  // http2_client_window_size - computed: true, optional: true, required: false
  private _http2ClientWindowSize?: number; 
  public get http2ClientWindowSize() {
    return this.getNumberAttribute('http2_client_window_size');
  }
  public set http2ClientWindowSize(value: number) {
    this._http2ClientWindowSize = value;
  }
  public resetHttp2ClientWindowSize() {
    this._http2ClientWindowSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http2ClientWindowSizeInput() {
    return this._http2ClientWindowSize;
  }

  // http2_server_window_size - computed: true, optional: true, required: false
  private _http2ServerWindowSize?: number; 
  public get http2ServerWindowSize() {
    return this.getNumberAttribute('http2_server_window_size');
  }
  public set http2ServerWindowSize(value: number) {
    this._http2ServerWindowSize = value;
  }
  public resetHttp2ServerWindowSize() {
    this._http2ServerWindowSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http2ServerWindowSizeInput() {
    return this._http2ServerWindowSize;
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

  // learn_client_ip_from_header - computed: false, optional: true, required: false
  private _learnClientIpFromHeader?: string; 
  public get learnClientIpFromHeader() {
    return this.getStringAttribute('learn_client_ip_from_header');
  }
  public set learnClientIpFromHeader(value: string) {
    this._learnClientIpFromHeader = value;
  }
  public resetLearnClientIpFromHeader() {
    this._learnClientIpFromHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get learnClientIpFromHeaderInput() {
    return this._learnClientIpFromHeader;
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

  // proxy_fqdn - computed: false, optional: false, required: true
  private _proxyFqdn?: string; 
  public get proxyFqdn() {
    return this.getStringAttribute('proxy_fqdn');
  }
  public set proxyFqdn(value: string) {
    this._proxyFqdn = value;
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

  // src_affinity_exempt_addr - computed: false, optional: true, required: false
  private _srcAffinityExemptAddr?: string; 
  public get srcAffinityExemptAddr() {
    return this.getStringAttribute('src_affinity_exempt_addr');
  }
  public set srcAffinityExemptAddr(value: string) {
    this._srcAffinityExemptAddr = value;
  }
  public resetSrcAffinityExemptAddr() {
    this._srcAffinityExemptAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcAffinityExemptAddrInput() {
    return this._srcAffinityExemptAddr;
  }

  // src_affinity_exempt_addr6 - computed: false, optional: true, required: false
  private _srcAffinityExemptAddr6?: string; 
  public get srcAffinityExemptAddr6() {
    return this.getStringAttribute('src_affinity_exempt_addr6');
  }
  public set srcAffinityExemptAddr6(value: string) {
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
  private _sslCaCert?: string; 
  public get sslCaCert() {
    return this.getStringAttribute('ssl_ca_cert');
  }
  public set sslCaCert(value: string) {
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
  private _sslCert?: string; 
  public get sslCert() {
    return this.getStringAttribute('ssl_cert');
  }
  public set sslCert(value: string) {
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

  // webproxy_profile - computed: false, optional: true, required: false
  private _webproxyProfile?: string; 
  public get webproxyProfile() {
    return this.getStringAttribute('webproxy_profile');
  }
  public set webproxyProfile(value: string) {
    this._webproxyProfile = value;
  }
  public resetWebproxyProfile() {
    this._webproxyProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webproxyProfileInput() {
    return this._webproxyProfile;
  }

  // learn_client_ip_srcaddr - computed: false, optional: true, required: false
  private _learnClientIpSrcaddr = new WebproxyGlobalLearnClientIpSrcaddrList(this, "learn_client_ip_srcaddr", true);
  public get learnClientIpSrcaddr() {
    return this._learnClientIpSrcaddr;
  }
  public putLearnClientIpSrcaddr(value: WebproxyGlobalLearnClientIpSrcaddr[] | cdktf.IResolvable) {
    this._learnClientIpSrcaddr.internalValue = value;
  }
  public resetLearnClientIpSrcaddr() {
    this._learnClientIpSrcaddr.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get learnClientIpSrcaddrInput() {
    return this._learnClientIpSrcaddr.internalValue;
  }

  // learn_client_ip_srcaddr6 - computed: false, optional: true, required: false
  private _learnClientIpSrcaddr6 = new WebproxyGlobalLearnClientIpSrcaddr6List(this, "learn_client_ip_srcaddr6", true);
  public get learnClientIpSrcaddr6() {
    return this._learnClientIpSrcaddr6;
  }
  public putLearnClientIpSrcaddr6(value: WebproxyGlobalLearnClientIpSrcaddr6[] | cdktf.IResolvable) {
    this._learnClientIpSrcaddr6.internalValue = value;
  }
  public resetLearnClientIpSrcaddr6() {
    this._learnClientIpSrcaddr6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get learnClientIpSrcaddr6Input() {
    return this._learnClientIpSrcaddr6.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      always_learn_client_ip: cdktf.stringToTerraform(this._alwaysLearnClientIp),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      fast_policy_match: cdktf.stringToTerraform(this._fastPolicyMatch),
      forward_proxy_auth: cdktf.stringToTerraform(this._forwardProxyAuth),
      forward_server_affinity_timeout: cdktf.numberToTerraform(this._forwardServerAffinityTimeout),
      get_all_tables: cdktf.stringToTerraform(this._getAllTables),
      http2_client_window_size: cdktf.numberToTerraform(this._http2ClientWindowSize),
      http2_server_window_size: cdktf.numberToTerraform(this._http2ServerWindowSize),
      id: cdktf.stringToTerraform(this._id),
      ldap_user_cache: cdktf.stringToTerraform(this._ldapUserCache),
      learn_client_ip: cdktf.stringToTerraform(this._learnClientIp),
      learn_client_ip_from_header: cdktf.stringToTerraform(this._learnClientIpFromHeader),
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
      src_affinity_exempt_addr: cdktf.stringToTerraform(this._srcAffinityExemptAddr),
      src_affinity_exempt_addr6: cdktf.stringToTerraform(this._srcAffinityExemptAddr6),
      ssl_ca_cert: cdktf.stringToTerraform(this._sslCaCert),
      ssl_cert: cdktf.stringToTerraform(this._sslCert),
      strict_web_check: cdktf.stringToTerraform(this._strictWebCheck),
      tunnel_non_http: cdktf.stringToTerraform(this._tunnelNonHttp),
      unknown_http_version: cdktf.stringToTerraform(this._unknownHttpVersion),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
      webproxy_profile: cdktf.stringToTerraform(this._webproxyProfile),
      learn_client_ip_srcaddr: cdktf.listMapper(webproxyGlobalLearnClientIpSrcaddrToTerraform, true)(this._learnClientIpSrcaddr.internalValue),
      learn_client_ip_srcaddr6: cdktf.listMapper(webproxyGlobalLearnClientIpSrcaddr6ToTerraform, true)(this._learnClientIpSrcaddr6.internalValue),
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
      dynamic_sort_subtable: {
        value: cdktf.stringToHclTerraform(this._dynamicSortSubtable),
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
      get_all_tables: {
        value: cdktf.stringToHclTerraform(this._getAllTables),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http2_client_window_size: {
        value: cdktf.numberToHclTerraform(this._http2ClientWindowSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      http2_server_window_size: {
        value: cdktf.numberToHclTerraform(this._http2ServerWindowSize),
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
        value: cdktf.stringToHclTerraform(this._learnClientIpFromHeader),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
        value: cdktf.stringToHclTerraform(this._srcAffinityExemptAddr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      src_affinity_exempt_addr6: {
        value: cdktf.stringToHclTerraform(this._srcAffinityExemptAddr6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_ca_cert: {
        value: cdktf.stringToHclTerraform(this._sslCaCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_cert: {
        value: cdktf.stringToHclTerraform(this._sslCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      webproxy_profile: {
        value: cdktf.stringToHclTerraform(this._webproxyProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      learn_client_ip_srcaddr: {
        value: cdktf.listMapperHcl(webproxyGlobalLearnClientIpSrcaddrToHclTerraform, true)(this._learnClientIpSrcaddr.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "WebproxyGlobalLearnClientIpSrcaddrList",
      },
      learn_client_ip_srcaddr6: {
        value: cdktf.listMapperHcl(webproxyGlobalLearnClientIpSrcaddr6ToHclTerraform, true)(this._learnClientIpSrcaddr6.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "WebproxyGlobalLearnClientIpSrcaddr6List",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
