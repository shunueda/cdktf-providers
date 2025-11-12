// https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_virtual_server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LoadBalanceVirtualServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_virtual_server#addr_type LoadBalanceVirtualServer#addr_type}
  */
  readonly addrType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_virtual_server#address LoadBalanceVirtualServer#address}
  */
  readonly address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_virtual_server#address6 LoadBalanceVirtualServer#address6}
  */
  readonly address6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_virtual_server#adfs_published_service LoadBalanceVirtualServer#adfs_published_service}
  */
  readonly adfsPublishedService?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_virtual_server#alone LoadBalanceVirtualServer#alone}
  */
  readonly alone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_virtual_server#auth_policy LoadBalanceVirtualServer#auth_policy}
  */
  readonly authPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_virtual_server#av_profile LoadBalanceVirtualServer#av_profile}
  */
  readonly avProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_virtual_server#azure_lb_backend LoadBalanceVirtualServer#azure_lb_backend}
  */
  readonly azureLbBackend?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_virtual_server#captcha_profile LoadBalanceVirtualServer#captcha_profile}
  */
  readonly captchaProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_virtual_server#client_ssl_profile LoadBalanceVirtualServer#client_ssl_profile}
  */
  readonly clientSslProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_virtual_server#clone_pool LoadBalanceVirtualServer#clone_pool}
  */
  readonly clonePool?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_virtual_server#clone_traffic_type LoadBalanceVirtualServer#clone_traffic_type}
  */
  readonly cloneTrafficType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_virtual_server#comments LoadBalanceVirtualServer#comments}
  */
  readonly comments?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_virtual_server#connection_limit LoadBalanceVirtualServer#connection_limit}
  */
  readonly connectionLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_virtual_server#connection_pool LoadBalanceVirtualServer#connection_pool}
  */
  readonly connectionPool?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_virtual_server#connection_rate_limit LoadBalanceVirtualServer#connection_rate_limit}
  */
  readonly connectionRateLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_virtual_server#content_rewriting LoadBalanceVirtualServer#content_rewriting}
  */
  readonly contentRewriting?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_virtual_server#content_rewriting_list LoadBalanceVirtualServer#content_rewriting_list}
  */
  readonly contentRewritingList?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_virtual_server#content_routing LoadBalanceVirtualServer#content_routing}
  */
  readonly contentRouting?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_virtual_server#content_routing_list LoadBalanceVirtualServer#content_routing_list}
  */
  readonly contentRoutingList?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_virtual_server#domain_name LoadBalanceVirtualServer#domain_name}
  */
  readonly domainName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_virtual_server#dos_profile LoadBalanceVirtualServer#dos_profile}
  */
  readonly dosProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_virtual_server#error_msg LoadBalanceVirtualServer#error_msg}
  */
  readonly errorMsg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_virtual_server#error_page LoadBalanceVirtualServer#error_page}
  */
  readonly errorPage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_virtual_server#fortiview LoadBalanceVirtualServer#fortiview}
  */
  readonly fortiview?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_virtual_server#host_name LoadBalanceVirtualServer#host_name}
  */
  readonly hostName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_virtual_server#http2https LoadBalanceVirtualServer#http2https}
  */
  readonly http2Https?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_virtual_server#http2https_port LoadBalanceVirtualServer#http2https_port}
  */
  readonly http2HttpsPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_virtual_server#id LoadBalanceVirtualServer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_virtual_server#interface LoadBalanceVirtualServer#interface}
  */
  readonly interface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_virtual_server#ips_profile LoadBalanceVirtualServer#ips_profile}
  */
  readonly ipsProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_virtual_server#l2_exception_list LoadBalanceVirtualServer#l2_exception_list}
  */
  readonly l2ExceptionList?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_virtual_server#method LoadBalanceVirtualServer#method}
  */
  readonly method?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_virtual_server#mkey LoadBalanceVirtualServer#mkey}
  */
  readonly mkey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_virtual_server#one_click_gslb_server LoadBalanceVirtualServer#one_click_gslb_server}
  */
  readonly oneClickGslbServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_virtual_server#packet_fwd_method LoadBalanceVirtualServer#packet_fwd_method}
  */
  readonly packetFwdMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_virtual_server#pagespeed LoadBalanceVirtualServer#pagespeed}
  */
  readonly pagespeed?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_virtual_server#persistence LoadBalanceVirtualServer#persistence}
  */
  readonly persistence?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_virtual_server#pool LoadBalanceVirtualServer#pool}
  */
  readonly pool?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_virtual_server#port LoadBalanceVirtualServer#port}
  */
  readonly port?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_virtual_server#profile LoadBalanceVirtualServer#profile}
  */
  readonly profile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_virtual_server#protocol LoadBalanceVirtualServer#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_virtual_server#public_ip LoadBalanceVirtualServer#public_ip}
  */
  readonly publicIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_virtual_server#public_ip6 LoadBalanceVirtualServer#public_ip6}
  */
  readonly publicIp6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_virtual_server#public_ip_type LoadBalanceVirtualServer#public_ip_type}
  */
  readonly publicIpType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_virtual_server#schedule_list LoadBalanceVirtualServer#schedule_list}
  */
  readonly scheduleList?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_virtual_server#schedule_pool_list LoadBalanceVirtualServer#schedule_pool_list}
  */
  readonly schedulePoolList?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_virtual_server#scripting_flag LoadBalanceVirtualServer#scripting_flag}
  */
  readonly scriptingFlag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_virtual_server#scripting_list LoadBalanceVirtualServer#scripting_list}
  */
  readonly scriptingList?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_virtual_server#source_pool_list LoadBalanceVirtualServer#source_pool_list}
  */
  readonly sourcePoolList?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_virtual_server#ssl_mirror LoadBalanceVirtualServer#ssl_mirror}
  */
  readonly sslMirror?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_virtual_server#ssl_mirror_intf LoadBalanceVirtualServer#ssl_mirror_intf}
  */
  readonly sslMirrorIntf?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_virtual_server#status LoadBalanceVirtualServer#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_virtual_server#stream_scripting_flag LoadBalanceVirtualServer#stream_scripting_flag}
  */
  readonly streamScriptingFlag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_virtual_server#stream_scripting_list LoadBalanceVirtualServer#stream_scripting_list}
  */
  readonly streamScriptingList?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_virtual_server#traffic_group LoadBalanceVirtualServer#traffic_group}
  */
  readonly trafficGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_virtual_server#traffic_log LoadBalanceVirtualServer#traffic_log}
  */
  readonly trafficLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_virtual_server#trans_rate_limit LoadBalanceVirtualServer#trans_rate_limit}
  */
  readonly transRateLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_virtual_server#type LoadBalanceVirtualServer#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_virtual_server#use_azure_lb_backend_ip LoadBalanceVirtualServer#use_azure_lb_backend_ip}
  */
  readonly useAzureLbBackendIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_virtual_server#vdom LoadBalanceVirtualServer#vdom}
  */
  readonly vdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_virtual_server#waf_profile LoadBalanceVirtualServer#waf_profile}
  */
  readonly wafProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_virtual_server#warmrate LoadBalanceVirtualServer#warmrate}
  */
  readonly warmrate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_virtual_server#warmup LoadBalanceVirtualServer#warmup}
  */
  readonly warmup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_virtual_server#wccp LoadBalanceVirtualServer#wccp}
  */
  readonly wccp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_virtual_server#ztna_profile LoadBalanceVirtualServer#ztna_profile}
  */
  readonly ztnaProfile?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_virtual_server fortiadc_load_balance_virtual_server}
*/
export class LoadBalanceVirtualServer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiadc_load_balance_virtual_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LoadBalanceVirtualServer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LoadBalanceVirtualServer to import
  * @param importFromId The id of the existing LoadBalanceVirtualServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_virtual_server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LoadBalanceVirtualServer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiadc_load_balance_virtual_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_virtual_server fortiadc_load_balance_virtual_server} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LoadBalanceVirtualServerConfig
  */
  public constructor(scope: Construct, id: string, config: LoadBalanceVirtualServerConfig) {
    super(scope, id, {
      terraformResourceType: 'fortiadc_load_balance_virtual_server',
      terraformGeneratorMetadata: {
        providerName: 'fortiadc',
        providerVersion: '1.3.1',
        providerVersionConstraint: '1.3.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._addrType = config.addrType;
    this._address = config.address;
    this._address6 = config.address6;
    this._adfsPublishedService = config.adfsPublishedService;
    this._alone = config.alone;
    this._authPolicy = config.authPolicy;
    this._avProfile = config.avProfile;
    this._azureLbBackend = config.azureLbBackend;
    this._captchaProfile = config.captchaProfile;
    this._clientSslProfile = config.clientSslProfile;
    this._clonePool = config.clonePool;
    this._cloneTrafficType = config.cloneTrafficType;
    this._comments = config.comments;
    this._connectionLimit = config.connectionLimit;
    this._connectionPool = config.connectionPool;
    this._connectionRateLimit = config.connectionRateLimit;
    this._contentRewriting = config.contentRewriting;
    this._contentRewritingList = config.contentRewritingList;
    this._contentRouting = config.contentRouting;
    this._contentRoutingList = config.contentRoutingList;
    this._domainName = config.domainName;
    this._dosProfile = config.dosProfile;
    this._errorMsg = config.errorMsg;
    this._errorPage = config.errorPage;
    this._fortiview = config.fortiview;
    this._hostName = config.hostName;
    this._http2Https = config.http2Https;
    this._http2HttpsPort = config.http2HttpsPort;
    this._id = config.id;
    this._interface = config.interface;
    this._ipsProfile = config.ipsProfile;
    this._l2ExceptionList = config.l2ExceptionList;
    this._method = config.method;
    this._mkey = config.mkey;
    this._oneClickGslbServer = config.oneClickGslbServer;
    this._packetFwdMethod = config.packetFwdMethod;
    this._pagespeed = config.pagespeed;
    this._persistence = config.persistence;
    this._pool = config.pool;
    this._port = config.port;
    this._profile = config.profile;
    this._protocol = config.protocol;
    this._publicIp = config.publicIp;
    this._publicIp6 = config.publicIp6;
    this._publicIpType = config.publicIpType;
    this._scheduleList = config.scheduleList;
    this._schedulePoolList = config.schedulePoolList;
    this._scriptingFlag = config.scriptingFlag;
    this._scriptingList = config.scriptingList;
    this._sourcePoolList = config.sourcePoolList;
    this._sslMirror = config.sslMirror;
    this._sslMirrorIntf = config.sslMirrorIntf;
    this._status = config.status;
    this._streamScriptingFlag = config.streamScriptingFlag;
    this._streamScriptingList = config.streamScriptingList;
    this._trafficGroup = config.trafficGroup;
    this._trafficLog = config.trafficLog;
    this._transRateLimit = config.transRateLimit;
    this._type = config.type;
    this._useAzureLbBackendIp = config.useAzureLbBackendIp;
    this._vdom = config.vdom;
    this._wafProfile = config.wafProfile;
    this._warmrate = config.warmrate;
    this._warmup = config.warmup;
    this._wccp = config.wccp;
    this._ztnaProfile = config.ztnaProfile;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // addr_type - computed: true, optional: true, required: false
  private _addrType?: string; 
  public get addrType() {
    return this.getStringAttribute('addr_type');
  }
  public set addrType(value: string) {
    this._addrType = value;
  }
  public resetAddrType() {
    this._addrType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addrTypeInput() {
    return this._addrType;
  }

  // address - computed: true, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // address6 - computed: true, optional: true, required: false
  private _address6?: string; 
  public get address6() {
    return this.getStringAttribute('address6');
  }
  public set address6(value: string) {
    this._address6 = value;
  }
  public resetAddress6() {
    this._address6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get address6Input() {
    return this._address6;
  }

  // adfs_published_service - computed: true, optional: true, required: false
  private _adfsPublishedService?: string; 
  public get adfsPublishedService() {
    return this.getStringAttribute('adfs_published_service');
  }
  public set adfsPublishedService(value: string) {
    this._adfsPublishedService = value;
  }
  public resetAdfsPublishedService() {
    this._adfsPublishedService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adfsPublishedServiceInput() {
    return this._adfsPublishedService;
  }

  // alone - computed: true, optional: true, required: false
  private _alone?: string; 
  public get alone() {
    return this.getStringAttribute('alone');
  }
  public set alone(value: string) {
    this._alone = value;
  }
  public resetAlone() {
    this._alone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aloneInput() {
    return this._alone;
  }

  // auth_policy - computed: true, optional: true, required: false
  private _authPolicy?: string; 
  public get authPolicy() {
    return this.getStringAttribute('auth_policy');
  }
  public set authPolicy(value: string) {
    this._authPolicy = value;
  }
  public resetAuthPolicy() {
    this._authPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authPolicyInput() {
    return this._authPolicy;
  }

  // av_profile - computed: true, optional: true, required: false
  private _avProfile?: string; 
  public get avProfile() {
    return this.getStringAttribute('av_profile');
  }
  public set avProfile(value: string) {
    this._avProfile = value;
  }
  public resetAvProfile() {
    this._avProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avProfileInput() {
    return this._avProfile;
  }

  // azure_lb_backend - computed: true, optional: true, required: false
  private _azureLbBackend?: string; 
  public get azureLbBackend() {
    return this.getStringAttribute('azure_lb_backend');
  }
  public set azureLbBackend(value: string) {
    this._azureLbBackend = value;
  }
  public resetAzureLbBackend() {
    this._azureLbBackend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureLbBackendInput() {
    return this._azureLbBackend;
  }

  // captcha_profile - computed: true, optional: true, required: false
  private _captchaProfile?: string; 
  public get captchaProfile() {
    return this.getStringAttribute('captcha_profile');
  }
  public set captchaProfile(value: string) {
    this._captchaProfile = value;
  }
  public resetCaptchaProfile() {
    this._captchaProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captchaProfileInput() {
    return this._captchaProfile;
  }

  // client_ssl_profile - computed: true, optional: true, required: false
  private _clientSslProfile?: string; 
  public get clientSslProfile() {
    return this.getStringAttribute('client_ssl_profile');
  }
  public set clientSslProfile(value: string) {
    this._clientSslProfile = value;
  }
  public resetClientSslProfile() {
    this._clientSslProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSslProfileInput() {
    return this._clientSslProfile;
  }

  // clone_pool - computed: true, optional: true, required: false
  private _clonePool?: string; 
  public get clonePool() {
    return this.getStringAttribute('clone_pool');
  }
  public set clonePool(value: string) {
    this._clonePool = value;
  }
  public resetClonePool() {
    this._clonePool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clonePoolInput() {
    return this._clonePool;
  }

  // clone_traffic_type - computed: true, optional: true, required: false
  private _cloneTrafficType?: string; 
  public get cloneTrafficType() {
    return this.getStringAttribute('clone_traffic_type');
  }
  public set cloneTrafficType(value: string) {
    this._cloneTrafficType = value;
  }
  public resetCloneTrafficType() {
    this._cloneTrafficType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloneTrafficTypeInput() {
    return this._cloneTrafficType;
  }

  // comments - computed: true, optional: true, required: false
  private _comments?: string; 
  public get comments() {
    return this.getStringAttribute('comments');
  }
  public set comments(value: string) {
    this._comments = value;
  }
  public resetComments() {
    this._comments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentsInput() {
    return this._comments;
  }

  // connection_limit - computed: true, optional: true, required: false
  private _connectionLimit?: string; 
  public get connectionLimit() {
    return this.getStringAttribute('connection_limit');
  }
  public set connectionLimit(value: string) {
    this._connectionLimit = value;
  }
  public resetConnectionLimit() {
    this._connectionLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionLimitInput() {
    return this._connectionLimit;
  }

  // connection_pool - computed: true, optional: true, required: false
  private _connectionPool?: string; 
  public get connectionPool() {
    return this.getStringAttribute('connection_pool');
  }
  public set connectionPool(value: string) {
    this._connectionPool = value;
  }
  public resetConnectionPool() {
    this._connectionPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionPoolInput() {
    return this._connectionPool;
  }

  // connection_rate_limit - computed: true, optional: true, required: false
  private _connectionRateLimit?: string; 
  public get connectionRateLimit() {
    return this.getStringAttribute('connection_rate_limit');
  }
  public set connectionRateLimit(value: string) {
    this._connectionRateLimit = value;
  }
  public resetConnectionRateLimit() {
    this._connectionRateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionRateLimitInput() {
    return this._connectionRateLimit;
  }

  // content_rewriting - computed: true, optional: true, required: false
  private _contentRewriting?: string; 
  public get contentRewriting() {
    return this.getStringAttribute('content_rewriting');
  }
  public set contentRewriting(value: string) {
    this._contentRewriting = value;
  }
  public resetContentRewriting() {
    this._contentRewriting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentRewritingInput() {
    return this._contentRewriting;
  }

  // content_rewriting_list - computed: true, optional: true, required: false
  private _contentRewritingList?: string; 
  public get contentRewritingList() {
    return this.getStringAttribute('content_rewriting_list');
  }
  public set contentRewritingList(value: string) {
    this._contentRewritingList = value;
  }
  public resetContentRewritingList() {
    this._contentRewritingList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentRewritingListInput() {
    return this._contentRewritingList;
  }

  // content_routing - computed: true, optional: true, required: false
  private _contentRouting?: string; 
  public get contentRouting() {
    return this.getStringAttribute('content_routing');
  }
  public set contentRouting(value: string) {
    this._contentRouting = value;
  }
  public resetContentRouting() {
    this._contentRouting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentRoutingInput() {
    return this._contentRouting;
  }

  // content_routing_list - computed: true, optional: true, required: false
  private _contentRoutingList?: string; 
  public get contentRoutingList() {
    return this.getStringAttribute('content_routing_list');
  }
  public set contentRoutingList(value: string) {
    this._contentRoutingList = value;
  }
  public resetContentRoutingList() {
    this._contentRoutingList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentRoutingListInput() {
    return this._contentRoutingList;
  }

  // domain_name - computed: true, optional: true, required: false
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  public resetDomainName() {
    this._domainName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
  }

  // dos_profile - computed: true, optional: true, required: false
  private _dosProfile?: string; 
  public get dosProfile() {
    return this.getStringAttribute('dos_profile');
  }
  public set dosProfile(value: string) {
    this._dosProfile = value;
  }
  public resetDosProfile() {
    this._dosProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dosProfileInput() {
    return this._dosProfile;
  }

  // error_msg - computed: true, optional: true, required: false
  private _errorMsg?: string; 
  public get errorMsg() {
    return this.getStringAttribute('error_msg');
  }
  public set errorMsg(value: string) {
    this._errorMsg = value;
  }
  public resetErrorMsg() {
    this._errorMsg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorMsgInput() {
    return this._errorMsg;
  }

  // error_page - computed: true, optional: true, required: false
  private _errorPage?: string; 
  public get errorPage() {
    return this.getStringAttribute('error_page');
  }
  public set errorPage(value: string) {
    this._errorPage = value;
  }
  public resetErrorPage() {
    this._errorPage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorPageInput() {
    return this._errorPage;
  }

  // fortiview - computed: true, optional: true, required: false
  private _fortiview?: string; 
  public get fortiview() {
    return this.getStringAttribute('fortiview');
  }
  public set fortiview(value: string) {
    this._fortiview = value;
  }
  public resetFortiview() {
    this._fortiview = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortiviewInput() {
    return this._fortiview;
  }

  // host_name - computed: true, optional: true, required: false
  private _hostName?: string; 
  public get hostName() {
    return this.getStringAttribute('host_name');
  }
  public set hostName(value: string) {
    this._hostName = value;
  }
  public resetHostName() {
    this._hostName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNameInput() {
    return this._hostName;
  }

  // http2https - computed: true, optional: true, required: false
  private _http2Https?: string; 
  public get http2Https() {
    return this.getStringAttribute('http2https');
  }
  public set http2Https(value: string) {
    this._http2Https = value;
  }
  public resetHttp2Https() {
    this._http2Https = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http2HttpsInput() {
    return this._http2Https;
  }

  // http2https_port - computed: true, optional: true, required: false
  private _http2HttpsPort?: string; 
  public get http2HttpsPort() {
    return this.getStringAttribute('http2https_port');
  }
  public set http2HttpsPort(value: string) {
    this._http2HttpsPort = value;
  }
  public resetHttp2HttpsPort() {
    this._http2HttpsPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http2HttpsPortInput() {
    return this._http2HttpsPort;
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

  // interface - computed: true, optional: true, required: false
  private _interface?: string; 
  public get interface() {
    return this.getStringAttribute('interface');
  }
  public set interface(value: string) {
    this._interface = value;
  }
  public resetInterface() {
    this._interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // ips_profile - computed: true, optional: true, required: false
  private _ipsProfile?: string; 
  public get ipsProfile() {
    return this.getStringAttribute('ips_profile');
  }
  public set ipsProfile(value: string) {
    this._ipsProfile = value;
  }
  public resetIpsProfile() {
    this._ipsProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsProfileInput() {
    return this._ipsProfile;
  }

  // l2_exception_list - computed: true, optional: true, required: false
  private _l2ExceptionList?: string; 
  public get l2ExceptionList() {
    return this.getStringAttribute('l2_exception_list');
  }
  public set l2ExceptionList(value: string) {
    this._l2ExceptionList = value;
  }
  public resetL2ExceptionList() {
    this._l2ExceptionList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l2ExceptionListInput() {
    return this._l2ExceptionList;
  }

  // method - computed: true, optional: true, required: false
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
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

  // one_click_gslb_server - computed: true, optional: true, required: false
  private _oneClickGslbServer?: string; 
  public get oneClickGslbServer() {
    return this.getStringAttribute('one_click_gslb_server');
  }
  public set oneClickGslbServer(value: string) {
    this._oneClickGslbServer = value;
  }
  public resetOneClickGslbServer() {
    this._oneClickGslbServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oneClickGslbServerInput() {
    return this._oneClickGslbServer;
  }

  // packet_fwd_method - computed: true, optional: true, required: false
  private _packetFwdMethod?: string; 
  public get packetFwdMethod() {
    return this.getStringAttribute('packet_fwd_method');
  }
  public set packetFwdMethod(value: string) {
    this._packetFwdMethod = value;
  }
  public resetPacketFwdMethod() {
    this._packetFwdMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetFwdMethodInput() {
    return this._packetFwdMethod;
  }

  // pagespeed - computed: true, optional: true, required: false
  private _pagespeed?: string; 
  public get pagespeed() {
    return this.getStringAttribute('pagespeed');
  }
  public set pagespeed(value: string) {
    this._pagespeed = value;
  }
  public resetPagespeed() {
    this._pagespeed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pagespeedInput() {
    return this._pagespeed;
  }

  // persistence - computed: true, optional: true, required: false
  private _persistence?: string; 
  public get persistence() {
    return this.getStringAttribute('persistence');
  }
  public set persistence(value: string) {
    this._persistence = value;
  }
  public resetPersistence() {
    this._persistence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistenceInput() {
    return this._persistence;
  }

  // pool - computed: true, optional: true, required: false
  private _pool?: string; 
  public get pool() {
    return this.getStringAttribute('pool');
  }
  public set pool(value: string) {
    this._pool = value;
  }
  public resetPool() {
    this._pool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolInput() {
    return this._pool;
  }

  // port - computed: true, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // profile - computed: true, optional: true, required: false
  private _profile?: string; 
  public get profile() {
    return this.getStringAttribute('profile');
  }
  public set profile(value: string) {
    this._profile = value;
  }
  public resetProfile() {
    this._profile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile;
  }

  // protocol - computed: true, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // public_ip - computed: true, optional: true, required: false
  private _publicIp?: string; 
  public get publicIp() {
    return this.getStringAttribute('public_ip');
  }
  public set publicIp(value: string) {
    this._publicIp = value;
  }
  public resetPublicIp() {
    this._publicIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIpInput() {
    return this._publicIp;
  }

  // public_ip6 - computed: true, optional: true, required: false
  private _publicIp6?: string; 
  public get publicIp6() {
    return this.getStringAttribute('public_ip6');
  }
  public set publicIp6(value: string) {
    this._publicIp6 = value;
  }
  public resetPublicIp6() {
    this._publicIp6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIp6Input() {
    return this._publicIp6;
  }

  // public_ip_type - computed: true, optional: true, required: false
  private _publicIpType?: string; 
  public get publicIpType() {
    return this.getStringAttribute('public_ip_type');
  }
  public set publicIpType(value: string) {
    this._publicIpType = value;
  }
  public resetPublicIpType() {
    this._publicIpType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIpTypeInput() {
    return this._publicIpType;
  }

  // schedule_list - computed: true, optional: true, required: false
  private _scheduleList?: string; 
  public get scheduleList() {
    return this.getStringAttribute('schedule_list');
  }
  public set scheduleList(value: string) {
    this._scheduleList = value;
  }
  public resetScheduleList() {
    this._scheduleList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleListInput() {
    return this._scheduleList;
  }

  // schedule_pool_list - computed: true, optional: true, required: false
  private _schedulePoolList?: string; 
  public get schedulePoolList() {
    return this.getStringAttribute('schedule_pool_list');
  }
  public set schedulePoolList(value: string) {
    this._schedulePoolList = value;
  }
  public resetSchedulePoolList() {
    this._schedulePoolList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulePoolListInput() {
    return this._schedulePoolList;
  }

  // scripting_flag - computed: true, optional: true, required: false
  private _scriptingFlag?: string; 
  public get scriptingFlag() {
    return this.getStringAttribute('scripting_flag');
  }
  public set scriptingFlag(value: string) {
    this._scriptingFlag = value;
  }
  public resetScriptingFlag() {
    this._scriptingFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptingFlagInput() {
    return this._scriptingFlag;
  }

  // scripting_list - computed: true, optional: true, required: false
  private _scriptingList?: string; 
  public get scriptingList() {
    return this.getStringAttribute('scripting_list');
  }
  public set scriptingList(value: string) {
    this._scriptingList = value;
  }
  public resetScriptingList() {
    this._scriptingList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptingListInput() {
    return this._scriptingList;
  }

  // source_pool_list - computed: true, optional: true, required: false
  private _sourcePoolList?: string; 
  public get sourcePoolList() {
    return this.getStringAttribute('source_pool_list');
  }
  public set sourcePoolList(value: string) {
    this._sourcePoolList = value;
  }
  public resetSourcePoolList() {
    this._sourcePoolList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePoolListInput() {
    return this._sourcePoolList;
  }

  // ssl_mirror - computed: true, optional: true, required: false
  private _sslMirror?: string; 
  public get sslMirror() {
    return this.getStringAttribute('ssl_mirror');
  }
  public set sslMirror(value: string) {
    this._sslMirror = value;
  }
  public resetSslMirror() {
    this._sslMirror = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslMirrorInput() {
    return this._sslMirror;
  }

  // ssl_mirror_intf - computed: true, optional: true, required: false
  private _sslMirrorIntf?: string; 
  public get sslMirrorIntf() {
    return this.getStringAttribute('ssl_mirror_intf');
  }
  public set sslMirrorIntf(value: string) {
    this._sslMirrorIntf = value;
  }
  public resetSslMirrorIntf() {
    this._sslMirrorIntf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslMirrorIntfInput() {
    return this._sslMirrorIntf;
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

  // stream_scripting_flag - computed: true, optional: true, required: false
  private _streamScriptingFlag?: string; 
  public get streamScriptingFlag() {
    return this.getStringAttribute('stream_scripting_flag');
  }
  public set streamScriptingFlag(value: string) {
    this._streamScriptingFlag = value;
  }
  public resetStreamScriptingFlag() {
    this._streamScriptingFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamScriptingFlagInput() {
    return this._streamScriptingFlag;
  }

  // stream_scripting_list - computed: true, optional: true, required: false
  private _streamScriptingList?: string; 
  public get streamScriptingList() {
    return this.getStringAttribute('stream_scripting_list');
  }
  public set streamScriptingList(value: string) {
    this._streamScriptingList = value;
  }
  public resetStreamScriptingList() {
    this._streamScriptingList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamScriptingListInput() {
    return this._streamScriptingList;
  }

  // traffic_group - computed: true, optional: true, required: false
  private _trafficGroup?: string; 
  public get trafficGroup() {
    return this.getStringAttribute('traffic_group');
  }
  public set trafficGroup(value: string) {
    this._trafficGroup = value;
  }
  public resetTrafficGroup() {
    this._trafficGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficGroupInput() {
    return this._trafficGroup;
  }

  // traffic_log - computed: true, optional: true, required: false
  private _trafficLog?: string; 
  public get trafficLog() {
    return this.getStringAttribute('traffic_log');
  }
  public set trafficLog(value: string) {
    this._trafficLog = value;
  }
  public resetTrafficLog() {
    this._trafficLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficLogInput() {
    return this._trafficLog;
  }

  // trans_rate_limit - computed: true, optional: true, required: false
  private _transRateLimit?: string; 
  public get transRateLimit() {
    return this.getStringAttribute('trans_rate_limit');
  }
  public set transRateLimit(value: string) {
    this._transRateLimit = value;
  }
  public resetTransRateLimit() {
    this._transRateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transRateLimitInput() {
    return this._transRateLimit;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // use_azure_lb_backend_ip - computed: true, optional: true, required: false
  private _useAzureLbBackendIp?: string; 
  public get useAzureLbBackendIp() {
    return this.getStringAttribute('use_azure_lb_backend_ip');
  }
  public set useAzureLbBackendIp(value: string) {
    this._useAzureLbBackendIp = value;
  }
  public resetUseAzureLbBackendIp() {
    this._useAzureLbBackendIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useAzureLbBackendIpInput() {
    return this._useAzureLbBackendIp;
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

  // waf_profile - computed: true, optional: true, required: false
  private _wafProfile?: string; 
  public get wafProfile() {
    return this.getStringAttribute('waf_profile');
  }
  public set wafProfile(value: string) {
    this._wafProfile = value;
  }
  public resetWafProfile() {
    this._wafProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wafProfileInput() {
    return this._wafProfile;
  }

  // warmrate - computed: true, optional: true, required: false
  private _warmrate?: string; 
  public get warmrate() {
    return this.getStringAttribute('warmrate');
  }
  public set warmrate(value: string) {
    this._warmrate = value;
  }
  public resetWarmrate() {
    this._warmrate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warmrateInput() {
    return this._warmrate;
  }

  // warmup - computed: true, optional: true, required: false
  private _warmup?: string; 
  public get warmup() {
    return this.getStringAttribute('warmup');
  }
  public set warmup(value: string) {
    this._warmup = value;
  }
  public resetWarmup() {
    this._warmup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warmupInput() {
    return this._warmup;
  }

  // wccp - computed: true, optional: true, required: false
  private _wccp?: string; 
  public get wccp() {
    return this.getStringAttribute('wccp');
  }
  public set wccp(value: string) {
    this._wccp = value;
  }
  public resetWccp() {
    this._wccp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wccpInput() {
    return this._wccp;
  }

  // ztna_profile - computed: true, optional: true, required: false
  private _ztnaProfile?: string; 
  public get ztnaProfile() {
    return this.getStringAttribute('ztna_profile');
  }
  public set ztnaProfile(value: string) {
    this._ztnaProfile = value;
  }
  public resetZtnaProfile() {
    this._ztnaProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ztnaProfileInput() {
    return this._ztnaProfile;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      addr_type: cdktf.stringToTerraform(this._addrType),
      address: cdktf.stringToTerraform(this._address),
      address6: cdktf.stringToTerraform(this._address6),
      adfs_published_service: cdktf.stringToTerraform(this._adfsPublishedService),
      alone: cdktf.stringToTerraform(this._alone),
      auth_policy: cdktf.stringToTerraform(this._authPolicy),
      av_profile: cdktf.stringToTerraform(this._avProfile),
      azure_lb_backend: cdktf.stringToTerraform(this._azureLbBackend),
      captcha_profile: cdktf.stringToTerraform(this._captchaProfile),
      client_ssl_profile: cdktf.stringToTerraform(this._clientSslProfile),
      clone_pool: cdktf.stringToTerraform(this._clonePool),
      clone_traffic_type: cdktf.stringToTerraform(this._cloneTrafficType),
      comments: cdktf.stringToTerraform(this._comments),
      connection_limit: cdktf.stringToTerraform(this._connectionLimit),
      connection_pool: cdktf.stringToTerraform(this._connectionPool),
      connection_rate_limit: cdktf.stringToTerraform(this._connectionRateLimit),
      content_rewriting: cdktf.stringToTerraform(this._contentRewriting),
      content_rewriting_list: cdktf.stringToTerraform(this._contentRewritingList),
      content_routing: cdktf.stringToTerraform(this._contentRouting),
      content_routing_list: cdktf.stringToTerraform(this._contentRoutingList),
      domain_name: cdktf.stringToTerraform(this._domainName),
      dos_profile: cdktf.stringToTerraform(this._dosProfile),
      error_msg: cdktf.stringToTerraform(this._errorMsg),
      error_page: cdktf.stringToTerraform(this._errorPage),
      fortiview: cdktf.stringToTerraform(this._fortiview),
      host_name: cdktf.stringToTerraform(this._hostName),
      http2https: cdktf.stringToTerraform(this._http2Https),
      http2https_port: cdktf.stringToTerraform(this._http2HttpsPort),
      id: cdktf.stringToTerraform(this._id),
      interface: cdktf.stringToTerraform(this._interface),
      ips_profile: cdktf.stringToTerraform(this._ipsProfile),
      l2_exception_list: cdktf.stringToTerraform(this._l2ExceptionList),
      method: cdktf.stringToTerraform(this._method),
      mkey: cdktf.stringToTerraform(this._mkey),
      one_click_gslb_server: cdktf.stringToTerraform(this._oneClickGslbServer),
      packet_fwd_method: cdktf.stringToTerraform(this._packetFwdMethod),
      pagespeed: cdktf.stringToTerraform(this._pagespeed),
      persistence: cdktf.stringToTerraform(this._persistence),
      pool: cdktf.stringToTerraform(this._pool),
      port: cdktf.stringToTerraform(this._port),
      profile: cdktf.stringToTerraform(this._profile),
      protocol: cdktf.stringToTerraform(this._protocol),
      public_ip: cdktf.stringToTerraform(this._publicIp),
      public_ip6: cdktf.stringToTerraform(this._publicIp6),
      public_ip_type: cdktf.stringToTerraform(this._publicIpType),
      schedule_list: cdktf.stringToTerraform(this._scheduleList),
      schedule_pool_list: cdktf.stringToTerraform(this._schedulePoolList),
      scripting_flag: cdktf.stringToTerraform(this._scriptingFlag),
      scripting_list: cdktf.stringToTerraform(this._scriptingList),
      source_pool_list: cdktf.stringToTerraform(this._sourcePoolList),
      ssl_mirror: cdktf.stringToTerraform(this._sslMirror),
      ssl_mirror_intf: cdktf.stringToTerraform(this._sslMirrorIntf),
      status: cdktf.stringToTerraform(this._status),
      stream_scripting_flag: cdktf.stringToTerraform(this._streamScriptingFlag),
      stream_scripting_list: cdktf.stringToTerraform(this._streamScriptingList),
      traffic_group: cdktf.stringToTerraform(this._trafficGroup),
      traffic_log: cdktf.stringToTerraform(this._trafficLog),
      trans_rate_limit: cdktf.stringToTerraform(this._transRateLimit),
      type: cdktf.stringToTerraform(this._type),
      use_azure_lb_backend_ip: cdktf.stringToTerraform(this._useAzureLbBackendIp),
      vdom: cdktf.stringToTerraform(this._vdom),
      waf_profile: cdktf.stringToTerraform(this._wafProfile),
      warmrate: cdktf.stringToTerraform(this._warmrate),
      warmup: cdktf.stringToTerraform(this._warmup),
      wccp: cdktf.stringToTerraform(this._wccp),
      ztna_profile: cdktf.stringToTerraform(this._ztnaProfile),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      addr_type: {
        value: cdktf.stringToHclTerraform(this._addrType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      address: {
        value: cdktf.stringToHclTerraform(this._address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      address6: {
        value: cdktf.stringToHclTerraform(this._address6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      adfs_published_service: {
        value: cdktf.stringToHclTerraform(this._adfsPublishedService),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alone: {
        value: cdktf.stringToHclTerraform(this._alone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_policy: {
        value: cdktf.stringToHclTerraform(this._authPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      av_profile: {
        value: cdktf.stringToHclTerraform(this._avProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      azure_lb_backend: {
        value: cdktf.stringToHclTerraform(this._azureLbBackend),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      captcha_profile: {
        value: cdktf.stringToHclTerraform(this._captchaProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_ssl_profile: {
        value: cdktf.stringToHclTerraform(this._clientSslProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      clone_pool: {
        value: cdktf.stringToHclTerraform(this._clonePool),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      clone_traffic_type: {
        value: cdktf.stringToHclTerraform(this._cloneTrafficType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comments: {
        value: cdktf.stringToHclTerraform(this._comments),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connection_limit: {
        value: cdktf.stringToHclTerraform(this._connectionLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connection_pool: {
        value: cdktf.stringToHclTerraform(this._connectionPool),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connection_rate_limit: {
        value: cdktf.stringToHclTerraform(this._connectionRateLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      content_rewriting: {
        value: cdktf.stringToHclTerraform(this._contentRewriting),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      content_rewriting_list: {
        value: cdktf.stringToHclTerraform(this._contentRewritingList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      content_routing: {
        value: cdktf.stringToHclTerraform(this._contentRouting),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      content_routing_list: {
        value: cdktf.stringToHclTerraform(this._contentRoutingList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_name: {
        value: cdktf.stringToHclTerraform(this._domainName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dos_profile: {
        value: cdktf.stringToHclTerraform(this._dosProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      error_msg: {
        value: cdktf.stringToHclTerraform(this._errorMsg),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      error_page: {
        value: cdktf.stringToHclTerraform(this._errorPage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fortiview: {
        value: cdktf.stringToHclTerraform(this._fortiview),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host_name: {
        value: cdktf.stringToHclTerraform(this._hostName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http2https: {
        value: cdktf.stringToHclTerraform(this._http2Https),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http2https_port: {
        value: cdktf.stringToHclTerraform(this._http2HttpsPort),
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
      interface: {
        value: cdktf.stringToHclTerraform(this._interface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ips_profile: {
        value: cdktf.stringToHclTerraform(this._ipsProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      l2_exception_list: {
        value: cdktf.stringToHclTerraform(this._l2ExceptionList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      method: {
        value: cdktf.stringToHclTerraform(this._method),
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
      one_click_gslb_server: {
        value: cdktf.stringToHclTerraform(this._oneClickGslbServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      packet_fwd_method: {
        value: cdktf.stringToHclTerraform(this._packetFwdMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pagespeed: {
        value: cdktf.stringToHclTerraform(this._pagespeed),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      persistence: {
        value: cdktf.stringToHclTerraform(this._persistence),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pool: {
        value: cdktf.stringToHclTerraform(this._pool),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port: {
        value: cdktf.stringToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      profile: {
        value: cdktf.stringToHclTerraform(this._profile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      public_ip: {
        value: cdktf.stringToHclTerraform(this._publicIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      public_ip6: {
        value: cdktf.stringToHclTerraform(this._publicIp6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      public_ip_type: {
        value: cdktf.stringToHclTerraform(this._publicIpType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schedule_list: {
        value: cdktf.stringToHclTerraform(this._scheduleList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schedule_pool_list: {
        value: cdktf.stringToHclTerraform(this._schedulePoolList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scripting_flag: {
        value: cdktf.stringToHclTerraform(this._scriptingFlag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scripting_list: {
        value: cdktf.stringToHclTerraform(this._scriptingList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_pool_list: {
        value: cdktf.stringToHclTerraform(this._sourcePoolList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_mirror: {
        value: cdktf.stringToHclTerraform(this._sslMirror),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_mirror_intf: {
        value: cdktf.stringToHclTerraform(this._sslMirrorIntf),
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
      stream_scripting_flag: {
        value: cdktf.stringToHclTerraform(this._streamScriptingFlag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stream_scripting_list: {
        value: cdktf.stringToHclTerraform(this._streamScriptingList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      traffic_group: {
        value: cdktf.stringToHclTerraform(this._trafficGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      traffic_log: {
        value: cdktf.stringToHclTerraform(this._trafficLog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trans_rate_limit: {
        value: cdktf.stringToHclTerraform(this._transRateLimit),
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
      use_azure_lb_backend_ip: {
        value: cdktf.stringToHclTerraform(this._useAzureLbBackendIp),
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
      waf_profile: {
        value: cdktf.stringToHclTerraform(this._wafProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      warmrate: {
        value: cdktf.stringToHclTerraform(this._warmrate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      warmup: {
        value: cdktf.stringToHclTerraform(this._warmup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wccp: {
        value: cdktf.stringToHclTerraform(this._wccp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ztna_profile: {
        value: cdktf.stringToHclTerraform(this._ztnaProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
