// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_profileprotocoloptions_http
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectFirewallProfileprotocoloptionsHttpAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_profileprotocoloptions_http#address_ip_rating ObjectFirewallProfileprotocoloptionsHttpA#address_ip_rating}
  */
  readonly addressIpRating?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_profileprotocoloptions_http#adom ObjectFirewallProfileprotocoloptionsHttpA#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_profileprotocoloptions_http#block_page_status_code ObjectFirewallProfileprotocoloptionsHttpA#block_page_status_code}
  */
  readonly blockPageStatusCode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_profileprotocoloptions_http#comfort_amount ObjectFirewallProfileprotocoloptionsHttpA#comfort_amount}
  */
  readonly comfortAmount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_profileprotocoloptions_http#comfort_interval ObjectFirewallProfileprotocoloptionsHttpA#comfort_interval}
  */
  readonly comfortInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_profileprotocoloptions_http#domain_fronting ObjectFirewallProfileprotocoloptionsHttpA#domain_fronting}
  */
  readonly domainFronting?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_profileprotocoloptions_http#fortinet_bar ObjectFirewallProfileprotocoloptionsHttpA#fortinet_bar}
  */
  readonly fortinetBar?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_profileprotocoloptions_http#fortinet_bar_port ObjectFirewallProfileprotocoloptionsHttpA#fortinet_bar_port}
  */
  readonly fortinetBarPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_profileprotocoloptions_http#h2c ObjectFirewallProfileprotocoloptionsHttpA#h2c}
  */
  readonly h2C?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_profileprotocoloptions_http#http_09 ObjectFirewallProfileprotocoloptionsHttpA#http_09}
  */
  readonly http09?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_profileprotocoloptions_http#http_policy ObjectFirewallProfileprotocoloptionsHttpA#http_policy}
  */
  readonly httpPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_profileprotocoloptions_http#id ObjectFirewallProfileprotocoloptionsHttpA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_profileprotocoloptions_http#inspect_all ObjectFirewallProfileprotocoloptionsHttpA#inspect_all}
  */
  readonly inspectAll?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_profileprotocoloptions_http#options ObjectFirewallProfileprotocoloptionsHttpA#options}
  */
  readonly options?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_profileprotocoloptions_http#oversize_limit ObjectFirewallProfileprotocoloptionsHttpA#oversize_limit}
  */
  readonly oversizeLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_profileprotocoloptions_http#ports ObjectFirewallProfileprotocoloptionsHttpA#ports}
  */
  readonly ports?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_profileprotocoloptions_http#post_lang ObjectFirewallProfileprotocoloptionsHttpA#post_lang}
  */
  readonly postLang?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_profileprotocoloptions_http#profile_protocol_options ObjectFirewallProfileprotocoloptionsHttpA#profile_protocol_options}
  */
  readonly profileProtocolOptions: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_profileprotocoloptions_http#proxy_after_tcp_handshake ObjectFirewallProfileprotocoloptionsHttpA#proxy_after_tcp_handshake}
  */
  readonly proxyAfterTcpHandshake?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_profileprotocoloptions_http#range_block ObjectFirewallProfileprotocoloptionsHttpA#range_block}
  */
  readonly rangeBlock?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_profileprotocoloptions_http#retry_count ObjectFirewallProfileprotocoloptionsHttpA#retry_count}
  */
  readonly retryCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_profileprotocoloptions_http#scan_bzip2 ObjectFirewallProfileprotocoloptionsHttpA#scan_bzip2}
  */
  readonly scanBzip2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_profileprotocoloptions_http#scopetype ObjectFirewallProfileprotocoloptionsHttpA#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_profileprotocoloptions_http#ssl_offloaded ObjectFirewallProfileprotocoloptionsHttpA#ssl_offloaded}
  */
  readonly sslOffloaded?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_profileprotocoloptions_http#status ObjectFirewallProfileprotocoloptionsHttpA#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_profileprotocoloptions_http#stream_based_uncompressed_limit ObjectFirewallProfileprotocoloptionsHttpA#stream_based_uncompressed_limit}
  */
  readonly streamBasedUncompressedLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_profileprotocoloptions_http#streaming_content_bypass ObjectFirewallProfileprotocoloptionsHttpA#streaming_content_bypass}
  */
  readonly streamingContentBypass?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_profileprotocoloptions_http#strip_x_forwarded_for ObjectFirewallProfileprotocoloptionsHttpA#strip_x_forwarded_for}
  */
  readonly stripXForwardedFor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_profileprotocoloptions_http#switching_protocols ObjectFirewallProfileprotocoloptionsHttpA#switching_protocols}
  */
  readonly switchingProtocols?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_profileprotocoloptions_http#tcp_window_maximum ObjectFirewallProfileprotocoloptionsHttpA#tcp_window_maximum}
  */
  readonly tcpWindowMaximum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_profileprotocoloptions_http#tcp_window_minimum ObjectFirewallProfileprotocoloptionsHttpA#tcp_window_minimum}
  */
  readonly tcpWindowMinimum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_profileprotocoloptions_http#tcp_window_size ObjectFirewallProfileprotocoloptionsHttpA#tcp_window_size}
  */
  readonly tcpWindowSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_profileprotocoloptions_http#tcp_window_type ObjectFirewallProfileprotocoloptionsHttpA#tcp_window_type}
  */
  readonly tcpWindowType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_profileprotocoloptions_http#tunnel_non_http ObjectFirewallProfileprotocoloptionsHttpA#tunnel_non_http}
  */
  readonly tunnelNonHttp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_profileprotocoloptions_http#uncompressed_nest_limit ObjectFirewallProfileprotocoloptionsHttpA#uncompressed_nest_limit}
  */
  readonly uncompressedNestLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_profileprotocoloptions_http#uncompressed_oversize_limit ObjectFirewallProfileprotocoloptionsHttpA#uncompressed_oversize_limit}
  */
  readonly uncompressedOversizeLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_profileprotocoloptions_http#unknown_content_encoding ObjectFirewallProfileprotocoloptionsHttpA#unknown_content_encoding}
  */
  readonly unknownContentEncoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_profileprotocoloptions_http#unknown_http_version ObjectFirewallProfileprotocoloptionsHttpA#unknown_http_version}
  */
  readonly unknownHttpVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_profileprotocoloptions_http#verify_dns_for_policy_matching ObjectFirewallProfileprotocoloptionsHttpA#verify_dns_for_policy_matching}
  */
  readonly verifyDnsForPolicyMatching?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_profileprotocoloptions_http fortimanager_object_firewall_profileprotocoloptions_http}
*/
export class ObjectFirewallProfileprotocoloptionsHttpA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_firewall_profileprotocoloptions_http";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectFirewallProfileprotocoloptionsHttpA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectFirewallProfileprotocoloptionsHttpA to import
  * @param importFromId The id of the existing ObjectFirewallProfileprotocoloptionsHttpA that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_profileprotocoloptions_http#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectFirewallProfileprotocoloptionsHttpA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_firewall_profileprotocoloptions_http", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_profileprotocoloptions_http fortimanager_object_firewall_profileprotocoloptions_http} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectFirewallProfileprotocoloptionsHttpAConfig
  */
  public constructor(scope: Construct, id: string, config: ObjectFirewallProfileprotocoloptionsHttpAConfig) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_firewall_profileprotocoloptions_http',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._addressIpRating = config.addressIpRating;
    this._adom = config.adom;
    this._blockPageStatusCode = config.blockPageStatusCode;
    this._comfortAmount = config.comfortAmount;
    this._comfortInterval = config.comfortInterval;
    this._domainFronting = config.domainFronting;
    this._fortinetBar = config.fortinetBar;
    this._fortinetBarPort = config.fortinetBarPort;
    this._h2C = config.h2C;
    this._http09 = config.http09;
    this._httpPolicy = config.httpPolicy;
    this._id = config.id;
    this._inspectAll = config.inspectAll;
    this._options = config.options;
    this._oversizeLimit = config.oversizeLimit;
    this._ports = config.ports;
    this._postLang = config.postLang;
    this._profileProtocolOptions = config.profileProtocolOptions;
    this._proxyAfterTcpHandshake = config.proxyAfterTcpHandshake;
    this._rangeBlock = config.rangeBlock;
    this._retryCount = config.retryCount;
    this._scanBzip2 = config.scanBzip2;
    this._scopetype = config.scopetype;
    this._sslOffloaded = config.sslOffloaded;
    this._status = config.status;
    this._streamBasedUncompressedLimit = config.streamBasedUncompressedLimit;
    this._streamingContentBypass = config.streamingContentBypass;
    this._stripXForwardedFor = config.stripXForwardedFor;
    this._switchingProtocols = config.switchingProtocols;
    this._tcpWindowMaximum = config.tcpWindowMaximum;
    this._tcpWindowMinimum = config.tcpWindowMinimum;
    this._tcpWindowSize = config.tcpWindowSize;
    this._tcpWindowType = config.tcpWindowType;
    this._tunnelNonHttp = config.tunnelNonHttp;
    this._uncompressedNestLimit = config.uncompressedNestLimit;
    this._uncompressedOversizeLimit = config.uncompressedOversizeLimit;
    this._unknownContentEncoding = config.unknownContentEncoding;
    this._unknownHttpVersion = config.unknownHttpVersion;
    this._verifyDnsForPolicyMatching = config.verifyDnsForPolicyMatching;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address_ip_rating - computed: true, optional: true, required: false
  private _addressIpRating?: string; 
  public get addressIpRating() {
    return this.getStringAttribute('address_ip_rating');
  }
  public set addressIpRating(value: string) {
    this._addressIpRating = value;
  }
  public resetAddressIpRating() {
    this._addressIpRating = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressIpRatingInput() {
    return this._addressIpRating;
  }

  // adom - computed: false, optional: true, required: false
  private _adom?: string; 
  public get adom() {
    return this.getStringAttribute('adom');
  }
  public set adom(value: string) {
    this._adom = value;
  }
  public resetAdom() {
    this._adom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adomInput() {
    return this._adom;
  }

  // block_page_status_code - computed: true, optional: true, required: false
  private _blockPageStatusCode?: number; 
  public get blockPageStatusCode() {
    return this.getNumberAttribute('block_page_status_code');
  }
  public set blockPageStatusCode(value: number) {
    this._blockPageStatusCode = value;
  }
  public resetBlockPageStatusCode() {
    this._blockPageStatusCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockPageStatusCodeInput() {
    return this._blockPageStatusCode;
  }

  // comfort_amount - computed: true, optional: true, required: false
  private _comfortAmount?: number; 
  public get comfortAmount() {
    return this.getNumberAttribute('comfort_amount');
  }
  public set comfortAmount(value: number) {
    this._comfortAmount = value;
  }
  public resetComfortAmount() {
    this._comfortAmount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get comfortAmountInput() {
    return this._comfortAmount;
  }

  // comfort_interval - computed: true, optional: true, required: false
  private _comfortInterval?: number; 
  public get comfortInterval() {
    return this.getNumberAttribute('comfort_interval');
  }
  public set comfortInterval(value: number) {
    this._comfortInterval = value;
  }
  public resetComfortInterval() {
    this._comfortInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get comfortIntervalInput() {
    return this._comfortInterval;
  }

  // domain_fronting - computed: true, optional: true, required: false
  private _domainFronting?: string; 
  public get domainFronting() {
    return this.getStringAttribute('domain_fronting');
  }
  public set domainFronting(value: string) {
    this._domainFronting = value;
  }
  public resetDomainFronting() {
    this._domainFronting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainFrontingInput() {
    return this._domainFronting;
  }

  // fortinet_bar - computed: true, optional: true, required: false
  private _fortinetBar?: string; 
  public get fortinetBar() {
    return this.getStringAttribute('fortinet_bar');
  }
  public set fortinetBar(value: string) {
    this._fortinetBar = value;
  }
  public resetFortinetBar() {
    this._fortinetBar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortinetBarInput() {
    return this._fortinetBar;
  }

  // fortinet_bar_port - computed: true, optional: true, required: false
  private _fortinetBarPort?: number; 
  public get fortinetBarPort() {
    return this.getNumberAttribute('fortinet_bar_port');
  }
  public set fortinetBarPort(value: number) {
    this._fortinetBarPort = value;
  }
  public resetFortinetBarPort() {
    this._fortinetBarPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortinetBarPortInput() {
    return this._fortinetBarPort;
  }

  // h2c - computed: true, optional: true, required: false
  private _h2C?: string; 
  public get h2C() {
    return this.getStringAttribute('h2c');
  }
  public set h2C(value: string) {
    this._h2C = value;
  }
  public resetH2C() {
    this._h2C = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get h2CInput() {
    return this._h2C;
  }

  // http_09 - computed: true, optional: true, required: false
  private _http09?: string; 
  public get http09() {
    return this.getStringAttribute('http_09');
  }
  public set http09(value: string) {
    this._http09 = value;
  }
  public resetHttp09() {
    this._http09 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http09Input() {
    return this._http09;
  }

  // http_policy - computed: false, optional: true, required: false
  private _httpPolicy?: string; 
  public get httpPolicy() {
    return this.getStringAttribute('http_policy');
  }
  public set httpPolicy(value: string) {
    this._httpPolicy = value;
  }
  public resetHttpPolicy() {
    this._httpPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpPolicyInput() {
    return this._httpPolicy;
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

  // inspect_all - computed: true, optional: true, required: false
  private _inspectAll?: string; 
  public get inspectAll() {
    return this.getStringAttribute('inspect_all');
  }
  public set inspectAll(value: string) {
    this._inspectAll = value;
  }
  public resetInspectAll() {
    this._inspectAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inspectAllInput() {
    return this._inspectAll;
  }

  // options - computed: true, optional: true, required: false
  private _options?: string[]; 
  public get options() {
    return cdktf.Fn.tolist(this.getListAttribute('options'));
  }
  public set options(value: string[]) {
    this._options = value;
  }
  public resetOptions() {
    this._options = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options;
  }

  // oversize_limit - computed: true, optional: true, required: false
  private _oversizeLimit?: number; 
  public get oversizeLimit() {
    return this.getNumberAttribute('oversize_limit');
  }
  public set oversizeLimit(value: number) {
    this._oversizeLimit = value;
  }
  public resetOversizeLimit() {
    this._oversizeLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oversizeLimitInput() {
    return this._oversizeLimit;
  }

  // ports - computed: true, optional: true, required: false
  private _ports?: number[]; 
  public get ports() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('ports')));
  }
  public set ports(value: number[]) {
    this._ports = value;
  }
  public resetPorts() {
    this._ports = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports;
  }

  // post_lang - computed: true, optional: true, required: false
  private _postLang?: string[]; 
  public get postLang() {
    return cdktf.Fn.tolist(this.getListAttribute('post_lang'));
  }
  public set postLang(value: string[]) {
    this._postLang = value;
  }
  public resetPostLang() {
    this._postLang = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postLangInput() {
    return this._postLang;
  }

  // profile_protocol_options - computed: false, optional: false, required: true
  private _profileProtocolOptions?: string; 
  public get profileProtocolOptions() {
    return this.getStringAttribute('profile_protocol_options');
  }
  public set profileProtocolOptions(value: string) {
    this._profileProtocolOptions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get profileProtocolOptionsInput() {
    return this._profileProtocolOptions;
  }

  // proxy_after_tcp_handshake - computed: true, optional: true, required: false
  private _proxyAfterTcpHandshake?: string; 
  public get proxyAfterTcpHandshake() {
    return this.getStringAttribute('proxy_after_tcp_handshake');
  }
  public set proxyAfterTcpHandshake(value: string) {
    this._proxyAfterTcpHandshake = value;
  }
  public resetProxyAfterTcpHandshake() {
    this._proxyAfterTcpHandshake = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyAfterTcpHandshakeInput() {
    return this._proxyAfterTcpHandshake;
  }

  // range_block - computed: true, optional: true, required: false
  private _rangeBlock?: string; 
  public get rangeBlock() {
    return this.getStringAttribute('range_block');
  }
  public set rangeBlock(value: string) {
    this._rangeBlock = value;
  }
  public resetRangeBlock() {
    this._rangeBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeBlockInput() {
    return this._rangeBlock;
  }

  // retry_count - computed: false, optional: true, required: false
  private _retryCount?: number; 
  public get retryCount() {
    return this.getNumberAttribute('retry_count');
  }
  public set retryCount(value: number) {
    this._retryCount = value;
  }
  public resetRetryCount() {
    this._retryCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryCountInput() {
    return this._retryCount;
  }

  // scan_bzip2 - computed: true, optional: true, required: false
  private _scanBzip2?: string; 
  public get scanBzip2() {
    return this.getStringAttribute('scan_bzip2');
  }
  public set scanBzip2(value: string) {
    this._scanBzip2 = value;
  }
  public resetScanBzip2() {
    this._scanBzip2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scanBzip2Input() {
    return this._scanBzip2;
  }

  // scopetype - computed: false, optional: true, required: false
  private _scopetype?: string; 
  public get scopetype() {
    return this.getStringAttribute('scopetype');
  }
  public set scopetype(value: string) {
    this._scopetype = value;
  }
  public resetScopetype() {
    this._scopetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopetypeInput() {
    return this._scopetype;
  }

  // ssl_offloaded - computed: true, optional: true, required: false
  private _sslOffloaded?: string; 
  public get sslOffloaded() {
    return this.getStringAttribute('ssl_offloaded');
  }
  public set sslOffloaded(value: string) {
    this._sslOffloaded = value;
  }
  public resetSslOffloaded() {
    this._sslOffloaded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslOffloadedInput() {
    return this._sslOffloaded;
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

  // stream_based_uncompressed_limit - computed: false, optional: true, required: false
  private _streamBasedUncompressedLimit?: number; 
  public get streamBasedUncompressedLimit() {
    return this.getNumberAttribute('stream_based_uncompressed_limit');
  }
  public set streamBasedUncompressedLimit(value: number) {
    this._streamBasedUncompressedLimit = value;
  }
  public resetStreamBasedUncompressedLimit() {
    this._streamBasedUncompressedLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamBasedUncompressedLimitInput() {
    return this._streamBasedUncompressedLimit;
  }

  // streaming_content_bypass - computed: true, optional: true, required: false
  private _streamingContentBypass?: string; 
  public get streamingContentBypass() {
    return this.getStringAttribute('streaming_content_bypass');
  }
  public set streamingContentBypass(value: string) {
    this._streamingContentBypass = value;
  }
  public resetStreamingContentBypass() {
    this._streamingContentBypass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamingContentBypassInput() {
    return this._streamingContentBypass;
  }

  // strip_x_forwarded_for - computed: true, optional: true, required: false
  private _stripXForwardedFor?: string; 
  public get stripXForwardedFor() {
    return this.getStringAttribute('strip_x_forwarded_for');
  }
  public set stripXForwardedFor(value: string) {
    this._stripXForwardedFor = value;
  }
  public resetStripXForwardedFor() {
    this._stripXForwardedFor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stripXForwardedForInput() {
    return this._stripXForwardedFor;
  }

  // switching_protocols - computed: true, optional: true, required: false
  private _switchingProtocols?: string; 
  public get switchingProtocols() {
    return this.getStringAttribute('switching_protocols');
  }
  public set switchingProtocols(value: string) {
    this._switchingProtocols = value;
  }
  public resetSwitchingProtocols() {
    this._switchingProtocols = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchingProtocolsInput() {
    return this._switchingProtocols;
  }

  // tcp_window_maximum - computed: true, optional: true, required: false
  private _tcpWindowMaximum?: number; 
  public get tcpWindowMaximum() {
    return this.getNumberAttribute('tcp_window_maximum');
  }
  public set tcpWindowMaximum(value: number) {
    this._tcpWindowMaximum = value;
  }
  public resetTcpWindowMaximum() {
    this._tcpWindowMaximum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpWindowMaximumInput() {
    return this._tcpWindowMaximum;
  }

  // tcp_window_minimum - computed: true, optional: true, required: false
  private _tcpWindowMinimum?: number; 
  public get tcpWindowMinimum() {
    return this.getNumberAttribute('tcp_window_minimum');
  }
  public set tcpWindowMinimum(value: number) {
    this._tcpWindowMinimum = value;
  }
  public resetTcpWindowMinimum() {
    this._tcpWindowMinimum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpWindowMinimumInput() {
    return this._tcpWindowMinimum;
  }

  // tcp_window_size - computed: true, optional: true, required: false
  private _tcpWindowSize?: number; 
  public get tcpWindowSize() {
    return this.getNumberAttribute('tcp_window_size');
  }
  public set tcpWindowSize(value: number) {
    this._tcpWindowSize = value;
  }
  public resetTcpWindowSize() {
    this._tcpWindowSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpWindowSizeInput() {
    return this._tcpWindowSize;
  }

  // tcp_window_type - computed: true, optional: true, required: false
  private _tcpWindowType?: string; 
  public get tcpWindowType() {
    return this.getStringAttribute('tcp_window_type');
  }
  public set tcpWindowType(value: string) {
    this._tcpWindowType = value;
  }
  public resetTcpWindowType() {
    this._tcpWindowType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpWindowTypeInput() {
    return this._tcpWindowType;
  }

  // tunnel_non_http - computed: true, optional: true, required: false
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

  // uncompressed_nest_limit - computed: true, optional: true, required: false
  private _uncompressedNestLimit?: number; 
  public get uncompressedNestLimit() {
    return this.getNumberAttribute('uncompressed_nest_limit');
  }
  public set uncompressedNestLimit(value: number) {
    this._uncompressedNestLimit = value;
  }
  public resetUncompressedNestLimit() {
    this._uncompressedNestLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uncompressedNestLimitInput() {
    return this._uncompressedNestLimit;
  }

  // uncompressed_oversize_limit - computed: true, optional: true, required: false
  private _uncompressedOversizeLimit?: number; 
  public get uncompressedOversizeLimit() {
    return this.getNumberAttribute('uncompressed_oversize_limit');
  }
  public set uncompressedOversizeLimit(value: number) {
    this._uncompressedOversizeLimit = value;
  }
  public resetUncompressedOversizeLimit() {
    this._uncompressedOversizeLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uncompressedOversizeLimitInput() {
    return this._uncompressedOversizeLimit;
  }

  // unknown_content_encoding - computed: true, optional: true, required: false
  private _unknownContentEncoding?: string; 
  public get unknownContentEncoding() {
    return this.getStringAttribute('unknown_content_encoding');
  }
  public set unknownContentEncoding(value: string) {
    this._unknownContentEncoding = value;
  }
  public resetUnknownContentEncoding() {
    this._unknownContentEncoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownContentEncodingInput() {
    return this._unknownContentEncoding;
  }

  // unknown_http_version - computed: true, optional: true, required: false
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

  // verify_dns_for_policy_matching - computed: true, optional: true, required: false
  private _verifyDnsForPolicyMatching?: string; 
  public get verifyDnsForPolicyMatching() {
    return this.getStringAttribute('verify_dns_for_policy_matching');
  }
  public set verifyDnsForPolicyMatching(value: string) {
    this._verifyDnsForPolicyMatching = value;
  }
  public resetVerifyDnsForPolicyMatching() {
    this._verifyDnsForPolicyMatching = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyDnsForPolicyMatchingInput() {
    return this._verifyDnsForPolicyMatching;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      address_ip_rating: cdktf.stringToTerraform(this._addressIpRating),
      adom: cdktf.stringToTerraform(this._adom),
      block_page_status_code: cdktf.numberToTerraform(this._blockPageStatusCode),
      comfort_amount: cdktf.numberToTerraform(this._comfortAmount),
      comfort_interval: cdktf.numberToTerraform(this._comfortInterval),
      domain_fronting: cdktf.stringToTerraform(this._domainFronting),
      fortinet_bar: cdktf.stringToTerraform(this._fortinetBar),
      fortinet_bar_port: cdktf.numberToTerraform(this._fortinetBarPort),
      h2c: cdktf.stringToTerraform(this._h2C),
      http_09: cdktf.stringToTerraform(this._http09),
      http_policy: cdktf.stringToTerraform(this._httpPolicy),
      id: cdktf.stringToTerraform(this._id),
      inspect_all: cdktf.stringToTerraform(this._inspectAll),
      options: cdktf.listMapper(cdktf.stringToTerraform, false)(this._options),
      oversize_limit: cdktf.numberToTerraform(this._oversizeLimit),
      ports: cdktf.listMapper(cdktf.numberToTerraform, false)(this._ports),
      post_lang: cdktf.listMapper(cdktf.stringToTerraform, false)(this._postLang),
      profile_protocol_options: cdktf.stringToTerraform(this._profileProtocolOptions),
      proxy_after_tcp_handshake: cdktf.stringToTerraform(this._proxyAfterTcpHandshake),
      range_block: cdktf.stringToTerraform(this._rangeBlock),
      retry_count: cdktf.numberToTerraform(this._retryCount),
      scan_bzip2: cdktf.stringToTerraform(this._scanBzip2),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      ssl_offloaded: cdktf.stringToTerraform(this._sslOffloaded),
      status: cdktf.stringToTerraform(this._status),
      stream_based_uncompressed_limit: cdktf.numberToTerraform(this._streamBasedUncompressedLimit),
      streaming_content_bypass: cdktf.stringToTerraform(this._streamingContentBypass),
      strip_x_forwarded_for: cdktf.stringToTerraform(this._stripXForwardedFor),
      switching_protocols: cdktf.stringToTerraform(this._switchingProtocols),
      tcp_window_maximum: cdktf.numberToTerraform(this._tcpWindowMaximum),
      tcp_window_minimum: cdktf.numberToTerraform(this._tcpWindowMinimum),
      tcp_window_size: cdktf.numberToTerraform(this._tcpWindowSize),
      tcp_window_type: cdktf.stringToTerraform(this._tcpWindowType),
      tunnel_non_http: cdktf.stringToTerraform(this._tunnelNonHttp),
      uncompressed_nest_limit: cdktf.numberToTerraform(this._uncompressedNestLimit),
      uncompressed_oversize_limit: cdktf.numberToTerraform(this._uncompressedOversizeLimit),
      unknown_content_encoding: cdktf.stringToTerraform(this._unknownContentEncoding),
      unknown_http_version: cdktf.stringToTerraform(this._unknownHttpVersion),
      verify_dns_for_policy_matching: cdktf.stringToTerraform(this._verifyDnsForPolicyMatching),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      address_ip_rating: {
        value: cdktf.stringToHclTerraform(this._addressIpRating),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      adom: {
        value: cdktf.stringToHclTerraform(this._adom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      block_page_status_code: {
        value: cdktf.numberToHclTerraform(this._blockPageStatusCode),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      comfort_amount: {
        value: cdktf.numberToHclTerraform(this._comfortAmount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      comfort_interval: {
        value: cdktf.numberToHclTerraform(this._comfortInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      domain_fronting: {
        value: cdktf.stringToHclTerraform(this._domainFronting),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fortinet_bar: {
        value: cdktf.stringToHclTerraform(this._fortinetBar),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fortinet_bar_port: {
        value: cdktf.numberToHclTerraform(this._fortinetBarPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      h2c: {
        value: cdktf.stringToHclTerraform(this._h2C),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_09: {
        value: cdktf.stringToHclTerraform(this._http09),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_policy: {
        value: cdktf.stringToHclTerraform(this._httpPolicy),
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
      inspect_all: {
        value: cdktf.stringToHclTerraform(this._inspectAll),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      options: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._options),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      oversize_limit: {
        value: cdktf.numberToHclTerraform(this._oversizeLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ports: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._ports),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      post_lang: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._postLang),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      profile_protocol_options: {
        value: cdktf.stringToHclTerraform(this._profileProtocolOptions),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proxy_after_tcp_handshake: {
        value: cdktf.stringToHclTerraform(this._proxyAfterTcpHandshake),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      range_block: {
        value: cdktf.stringToHclTerraform(this._rangeBlock),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retry_count: {
        value: cdktf.numberToHclTerraform(this._retryCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      scan_bzip2: {
        value: cdktf.stringToHclTerraform(this._scanBzip2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_offloaded: {
        value: cdktf.stringToHclTerraform(this._sslOffloaded),
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
      stream_based_uncompressed_limit: {
        value: cdktf.numberToHclTerraform(this._streamBasedUncompressedLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      streaming_content_bypass: {
        value: cdktf.stringToHclTerraform(this._streamingContentBypass),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      strip_x_forwarded_for: {
        value: cdktf.stringToHclTerraform(this._stripXForwardedFor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      switching_protocols: {
        value: cdktf.stringToHclTerraform(this._switchingProtocols),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tcp_window_maximum: {
        value: cdktf.numberToHclTerraform(this._tcpWindowMaximum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tcp_window_minimum: {
        value: cdktf.numberToHclTerraform(this._tcpWindowMinimum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tcp_window_size: {
        value: cdktf.numberToHclTerraform(this._tcpWindowSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tcp_window_type: {
        value: cdktf.stringToHclTerraform(this._tcpWindowType),
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
      uncompressed_nest_limit: {
        value: cdktf.numberToHclTerraform(this._uncompressedNestLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      uncompressed_oversize_limit: {
        value: cdktf.numberToHclTerraform(this._uncompressedOversizeLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      unknown_content_encoding: {
        value: cdktf.stringToHclTerraform(this._unknownContentEncoding),
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
      verify_dns_for_policy_matching: {
        value: cdktf.stringToHclTerraform(this._verifyDnsForPolicyMatching),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
