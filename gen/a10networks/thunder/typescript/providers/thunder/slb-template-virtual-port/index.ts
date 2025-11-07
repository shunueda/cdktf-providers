// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_virtual_port
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SlbTemplateVirtualPortConfig extends cdktf.TerraformMetaArguments {
  /**
  * Use aFlow to eliminate the traffic surge
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_virtual_port#aflow SlbTemplateVirtualPort#aflow}
  */
  readonly aflow?: number;
  /**
  * Allow initial SYN packet with other flags
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_virtual_port#allow_syn_otherflags SlbTemplateVirtualPort#allow_syn_otherflags}
  */
  readonly allowSynOtherflags?: number;
  /**
  * Allow mapping of VIP to real port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_virtual_port#allow_vip_to_rport_mapping SlbTemplateVirtualPort#allow_vip_to_rport_mapping}
  */
  readonly allowVipToRportMapping?: number;
  /**
  * Connection limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_virtual_port#conn_limit SlbTemplateVirtualPort#conn_limit}
  */
  readonly connLimit?: number;
  /**
  * Do not log connection over limit event
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_virtual_port#conn_limit_no_logging SlbTemplateVirtualPort#conn_limit_no_logging}
  */
  readonly connLimitNoLogging?: number;
  /**
  * Send client reset when connection over limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_virtual_port#conn_limit_reset SlbTemplateVirtualPort#conn_limit_reset}
  */
  readonly connLimitReset?: number;
  /**
  * Connection rate limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_virtual_port#conn_rate_limit SlbTemplateVirtualPort#conn_rate_limit}
  */
  readonly connRateLimit?: number;
  /**
  * Do not log connection over limit event
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_virtual_port#conn_rate_limit_no_logging SlbTemplateVirtualPort#conn_rate_limit_no_logging}
  */
  readonly connRateLimitNoLogging?: number;
  /**
  * Send client reset when connection rate over limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_virtual_port#conn_rate_limit_reset SlbTemplateVirtualPort#conn_rate_limit_reset}
  */
  readonly connRateLimitReset?: number;
  /**
  * Drop conection if receives TCP packet without SYN or RST flag and it does not belong to any existing connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_virtual_port#drop_unknown_conn SlbTemplateVirtualPort#drop_unknown_conn}
  */
  readonly dropUnknownConn?: number;
  /**
  * Differentiated Services Code Point (DSCP to Real Server IP Mapping Value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_virtual_port#dscp SlbTemplateVirtualPort#dscp}
  */
  readonly dscp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_virtual_port#id SlbTemplateVirtualPort#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * reclaim TCP resource immediately without MSL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_virtual_port#ignore_tcp_msl SlbTemplateVirtualPort#ignore_tcp_msl}
  */
  readonly ignoreTcpMsl?: number;
  /**
  * 'no-logging': Do not log over limit event; 'no-repeat-logging': log once for over limit event. Default is log once per minute;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_virtual_port#log_options SlbTemplateVirtualPort#log_options}
  */
  readonly logOptions?: string;
  /**
  * Virtual port template name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_virtual_port#name SlbTemplateVirtualPort#name}
  */
  readonly name: string;
  /**
  * Allow initial TCP packet to be non-SYN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_virtual_port#non_syn_initiation SlbTemplateVirtualPort#non_syn_initiation}
  */
  readonly nonSynInitiation?: number;
  /**
  * '100ms': Source IP and port rate limit per 100ms; 'second': Source IP and port rate limit per second (default);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_virtual_port#pkt_rate_interval SlbTemplateVirtualPort#pkt_rate_interval}
  */
  readonly pktRateInterval?: string;
  /**
  * send client-side reset (reset after packet limit)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_virtual_port#pkt_rate_limit_reset SlbTemplateVirtualPort#pkt_rate_limit_reset}
  */
  readonly pktRateLimitReset?: number;
  /**
  * 'src-ip-port': Source IP and port rate limit; 'src-port': Source port rate limit;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_virtual_port#pkt_rate_type SlbTemplateVirtualPort#pkt_rate_type}
  */
  readonly pktRateType?: string;
  /**
  * Source IP and port rate limit (Packet rate limit)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_virtual_port#rate SlbTemplateVirtualPort#rate}
  */
  readonly rate?: number;
  /**
  * '100ms': Use 100 ms as sampling interval; 'second': Use 1 second as sampling interval;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_virtual_port#rate_interval SlbTemplateVirtualPort#rate_interval}
  */
  readonly rateInterval?: string;
  /**
  * Send reset to L7 client and server connection upon a failover
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_virtual_port#reset_l7_on_failover SlbTemplateVirtualPort#reset_l7_on_failover}
  */
  readonly resetL7OnFailover?: number;
  /**
  * Send reset back if receives TCP packet without SYN or RST flag and it does not belong to any existing connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_virtual_port#reset_unknown_conn SlbTemplateVirtualPort#reset_unknown_conn}
  */
  readonly resetUnknownConn?: number;
  /**
  * Source NAT MSL (Source NAT MSL value (seconds))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_virtual_port#snat_msl SlbTemplateVirtualPort#snat_msl}
  */
  readonly snatMsl?: number;
  /**
  * Source NAT Port Preservation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_virtual_port#snat_port_preserve SlbTemplateVirtualPort#snat_port_preserve}
  */
  readonly snatPortPreserve?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_virtual_port#user_tag SlbTemplateVirtualPort#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_virtual_port#uuid SlbTemplateVirtualPort#uuid}
  */
  readonly uuid?: string;
  /**
  * Only do rate limit if CPU RR triggered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_virtual_port#when_rr_enable SlbTemplateVirtualPort#when_rr_enable}
  */
  readonly whenRrEnable?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_virtual_port thunder_slb_template_virtual_port}
*/
export class SlbTemplateVirtualPort extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_template_virtual_port";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SlbTemplateVirtualPort resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SlbTemplateVirtualPort to import
  * @param importFromId The id of the existing SlbTemplateVirtualPort that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_virtual_port#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SlbTemplateVirtualPort to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_template_virtual_port", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_virtual_port thunder_slb_template_virtual_port} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SlbTemplateVirtualPortConfig
  */
  public constructor(scope: Construct, id: string, config: SlbTemplateVirtualPortConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_template_virtual_port',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._aflow = config.aflow;
    this._allowSynOtherflags = config.allowSynOtherflags;
    this._allowVipToRportMapping = config.allowVipToRportMapping;
    this._connLimit = config.connLimit;
    this._connLimitNoLogging = config.connLimitNoLogging;
    this._connLimitReset = config.connLimitReset;
    this._connRateLimit = config.connRateLimit;
    this._connRateLimitNoLogging = config.connRateLimitNoLogging;
    this._connRateLimitReset = config.connRateLimitReset;
    this._dropUnknownConn = config.dropUnknownConn;
    this._dscp = config.dscp;
    this._id = config.id;
    this._ignoreTcpMsl = config.ignoreTcpMsl;
    this._logOptions = config.logOptions;
    this._name = config.name;
    this._nonSynInitiation = config.nonSynInitiation;
    this._pktRateInterval = config.pktRateInterval;
    this._pktRateLimitReset = config.pktRateLimitReset;
    this._pktRateType = config.pktRateType;
    this._rate = config.rate;
    this._rateInterval = config.rateInterval;
    this._resetL7OnFailover = config.resetL7OnFailover;
    this._resetUnknownConn = config.resetUnknownConn;
    this._snatMsl = config.snatMsl;
    this._snatPortPreserve = config.snatPortPreserve;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._whenRrEnable = config.whenRrEnable;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aflow - computed: false, optional: true, required: false
  private _aflow?: number; 
  public get aflow() {
    return this.getNumberAttribute('aflow');
  }
  public set aflow(value: number) {
    this._aflow = value;
  }
  public resetAflow() {
    this._aflow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aflowInput() {
    return this._aflow;
  }

  // allow_syn_otherflags - computed: false, optional: true, required: false
  private _allowSynOtherflags?: number; 
  public get allowSynOtherflags() {
    return this.getNumberAttribute('allow_syn_otherflags');
  }
  public set allowSynOtherflags(value: number) {
    this._allowSynOtherflags = value;
  }
  public resetAllowSynOtherflags() {
    this._allowSynOtherflags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowSynOtherflagsInput() {
    return this._allowSynOtherflags;
  }

  // allow_vip_to_rport_mapping - computed: false, optional: true, required: false
  private _allowVipToRportMapping?: number; 
  public get allowVipToRportMapping() {
    return this.getNumberAttribute('allow_vip_to_rport_mapping');
  }
  public set allowVipToRportMapping(value: number) {
    this._allowVipToRportMapping = value;
  }
  public resetAllowVipToRportMapping() {
    this._allowVipToRportMapping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowVipToRportMappingInput() {
    return this._allowVipToRportMapping;
  }

  // conn_limit - computed: false, optional: true, required: false
  private _connLimit?: number; 
  public get connLimit() {
    return this.getNumberAttribute('conn_limit');
  }
  public set connLimit(value: number) {
    this._connLimit = value;
  }
  public resetConnLimit() {
    this._connLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connLimitInput() {
    return this._connLimit;
  }

  // conn_limit_no_logging - computed: false, optional: true, required: false
  private _connLimitNoLogging?: number; 
  public get connLimitNoLogging() {
    return this.getNumberAttribute('conn_limit_no_logging');
  }
  public set connLimitNoLogging(value: number) {
    this._connLimitNoLogging = value;
  }
  public resetConnLimitNoLogging() {
    this._connLimitNoLogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connLimitNoLoggingInput() {
    return this._connLimitNoLogging;
  }

  // conn_limit_reset - computed: false, optional: true, required: false
  private _connLimitReset?: number; 
  public get connLimitReset() {
    return this.getNumberAttribute('conn_limit_reset');
  }
  public set connLimitReset(value: number) {
    this._connLimitReset = value;
  }
  public resetConnLimitReset() {
    this._connLimitReset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connLimitResetInput() {
    return this._connLimitReset;
  }

  // conn_rate_limit - computed: false, optional: true, required: false
  private _connRateLimit?: number; 
  public get connRateLimit() {
    return this.getNumberAttribute('conn_rate_limit');
  }
  public set connRateLimit(value: number) {
    this._connRateLimit = value;
  }
  public resetConnRateLimit() {
    this._connRateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connRateLimitInput() {
    return this._connRateLimit;
  }

  // conn_rate_limit_no_logging - computed: false, optional: true, required: false
  private _connRateLimitNoLogging?: number; 
  public get connRateLimitNoLogging() {
    return this.getNumberAttribute('conn_rate_limit_no_logging');
  }
  public set connRateLimitNoLogging(value: number) {
    this._connRateLimitNoLogging = value;
  }
  public resetConnRateLimitNoLogging() {
    this._connRateLimitNoLogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connRateLimitNoLoggingInput() {
    return this._connRateLimitNoLogging;
  }

  // conn_rate_limit_reset - computed: false, optional: true, required: false
  private _connRateLimitReset?: number; 
  public get connRateLimitReset() {
    return this.getNumberAttribute('conn_rate_limit_reset');
  }
  public set connRateLimitReset(value: number) {
    this._connRateLimitReset = value;
  }
  public resetConnRateLimitReset() {
    this._connRateLimitReset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connRateLimitResetInput() {
    return this._connRateLimitReset;
  }

  // drop_unknown_conn - computed: false, optional: true, required: false
  private _dropUnknownConn?: number; 
  public get dropUnknownConn() {
    return this.getNumberAttribute('drop_unknown_conn');
  }
  public set dropUnknownConn(value: number) {
    this._dropUnknownConn = value;
  }
  public resetDropUnknownConn() {
    this._dropUnknownConn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropUnknownConnInput() {
    return this._dropUnknownConn;
  }

  // dscp - computed: false, optional: true, required: false
  private _dscp?: number; 
  public get dscp() {
    return this.getNumberAttribute('dscp');
  }
  public set dscp(value: number) {
    this._dscp = value;
  }
  public resetDscp() {
    this._dscp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscpInput() {
    return this._dscp;
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

  // ignore_tcp_msl - computed: false, optional: true, required: false
  private _ignoreTcpMsl?: number; 
  public get ignoreTcpMsl() {
    return this.getNumberAttribute('ignore_tcp_msl');
  }
  public set ignoreTcpMsl(value: number) {
    this._ignoreTcpMsl = value;
  }
  public resetIgnoreTcpMsl() {
    this._ignoreTcpMsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreTcpMslInput() {
    return this._ignoreTcpMsl;
  }

  // log_options - computed: false, optional: true, required: false
  private _logOptions?: string; 
  public get logOptions() {
    return this.getStringAttribute('log_options');
  }
  public set logOptions(value: string) {
    this._logOptions = value;
  }
  public resetLogOptions() {
    this._logOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logOptionsInput() {
    return this._logOptions;
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

  // non_syn_initiation - computed: false, optional: true, required: false
  private _nonSynInitiation?: number; 
  public get nonSynInitiation() {
    return this.getNumberAttribute('non_syn_initiation');
  }
  public set nonSynInitiation(value: number) {
    this._nonSynInitiation = value;
  }
  public resetNonSynInitiation() {
    this._nonSynInitiation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonSynInitiationInput() {
    return this._nonSynInitiation;
  }

  // pkt_rate_interval - computed: false, optional: true, required: false
  private _pktRateInterval?: string; 
  public get pktRateInterval() {
    return this.getStringAttribute('pkt_rate_interval');
  }
  public set pktRateInterval(value: string) {
    this._pktRateInterval = value;
  }
  public resetPktRateInterval() {
    this._pktRateInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pktRateIntervalInput() {
    return this._pktRateInterval;
  }

  // pkt_rate_limit_reset - computed: false, optional: true, required: false
  private _pktRateLimitReset?: number; 
  public get pktRateLimitReset() {
    return this.getNumberAttribute('pkt_rate_limit_reset');
  }
  public set pktRateLimitReset(value: number) {
    this._pktRateLimitReset = value;
  }
  public resetPktRateLimitReset() {
    this._pktRateLimitReset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pktRateLimitResetInput() {
    return this._pktRateLimitReset;
  }

  // pkt_rate_type - computed: false, optional: true, required: false
  private _pktRateType?: string; 
  public get pktRateType() {
    return this.getStringAttribute('pkt_rate_type');
  }
  public set pktRateType(value: string) {
    this._pktRateType = value;
  }
  public resetPktRateType() {
    this._pktRateType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pktRateTypeInput() {
    return this._pktRateType;
  }

  // rate - computed: false, optional: true, required: false
  private _rate?: number; 
  public get rate() {
    return this.getNumberAttribute('rate');
  }
  public set rate(value: number) {
    this._rate = value;
  }
  public resetRate() {
    this._rate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateInput() {
    return this._rate;
  }

  // rate_interval - computed: false, optional: true, required: false
  private _rateInterval?: string; 
  public get rateInterval() {
    return this.getStringAttribute('rate_interval');
  }
  public set rateInterval(value: string) {
    this._rateInterval = value;
  }
  public resetRateInterval() {
    this._rateInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateIntervalInput() {
    return this._rateInterval;
  }

  // reset_l7_on_failover - computed: false, optional: true, required: false
  private _resetL7OnFailover?: number; 
  public get resetL7OnFailover() {
    return this.getNumberAttribute('reset_l7_on_failover');
  }
  public set resetL7OnFailover(value: number) {
    this._resetL7OnFailover = value;
  }
  public resetResetL7OnFailover() {
    this._resetL7OnFailover = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resetL7OnFailoverInput() {
    return this._resetL7OnFailover;
  }

  // reset_unknown_conn - computed: false, optional: true, required: false
  private _resetUnknownConn?: number; 
  public get resetUnknownConn() {
    return this.getNumberAttribute('reset_unknown_conn');
  }
  public set resetUnknownConn(value: number) {
    this._resetUnknownConn = value;
  }
  public resetResetUnknownConn() {
    this._resetUnknownConn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resetUnknownConnInput() {
    return this._resetUnknownConn;
  }

  // snat_msl - computed: false, optional: true, required: false
  private _snatMsl?: number; 
  public get snatMsl() {
    return this.getNumberAttribute('snat_msl');
  }
  public set snatMsl(value: number) {
    this._snatMsl = value;
  }
  public resetSnatMsl() {
    this._snatMsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snatMslInput() {
    return this._snatMsl;
  }

  // snat_port_preserve - computed: false, optional: true, required: false
  private _snatPortPreserve?: number; 
  public get snatPortPreserve() {
    return this.getNumberAttribute('snat_port_preserve');
  }
  public set snatPortPreserve(value: number) {
    this._snatPortPreserve = value;
  }
  public resetSnatPortPreserve() {
    this._snatPortPreserve = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snatPortPreserveInput() {
    return this._snatPortPreserve;
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

  // when_rr_enable - computed: false, optional: true, required: false
  private _whenRrEnable?: number; 
  public get whenRrEnable() {
    return this.getNumberAttribute('when_rr_enable');
  }
  public set whenRrEnable(value: number) {
    this._whenRrEnable = value;
  }
  public resetWhenRrEnable() {
    this._whenRrEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whenRrEnableInput() {
    return this._whenRrEnable;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aflow: cdktf.numberToTerraform(this._aflow),
      allow_syn_otherflags: cdktf.numberToTerraform(this._allowSynOtherflags),
      allow_vip_to_rport_mapping: cdktf.numberToTerraform(this._allowVipToRportMapping),
      conn_limit: cdktf.numberToTerraform(this._connLimit),
      conn_limit_no_logging: cdktf.numberToTerraform(this._connLimitNoLogging),
      conn_limit_reset: cdktf.numberToTerraform(this._connLimitReset),
      conn_rate_limit: cdktf.numberToTerraform(this._connRateLimit),
      conn_rate_limit_no_logging: cdktf.numberToTerraform(this._connRateLimitNoLogging),
      conn_rate_limit_reset: cdktf.numberToTerraform(this._connRateLimitReset),
      drop_unknown_conn: cdktf.numberToTerraform(this._dropUnknownConn),
      dscp: cdktf.numberToTerraform(this._dscp),
      id: cdktf.stringToTerraform(this._id),
      ignore_tcp_msl: cdktf.numberToTerraform(this._ignoreTcpMsl),
      log_options: cdktf.stringToTerraform(this._logOptions),
      name: cdktf.stringToTerraform(this._name),
      non_syn_initiation: cdktf.numberToTerraform(this._nonSynInitiation),
      pkt_rate_interval: cdktf.stringToTerraform(this._pktRateInterval),
      pkt_rate_limit_reset: cdktf.numberToTerraform(this._pktRateLimitReset),
      pkt_rate_type: cdktf.stringToTerraform(this._pktRateType),
      rate: cdktf.numberToTerraform(this._rate),
      rate_interval: cdktf.stringToTerraform(this._rateInterval),
      reset_l7_on_failover: cdktf.numberToTerraform(this._resetL7OnFailover),
      reset_unknown_conn: cdktf.numberToTerraform(this._resetUnknownConn),
      snat_msl: cdktf.numberToTerraform(this._snatMsl),
      snat_port_preserve: cdktf.numberToTerraform(this._snatPortPreserve),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      when_rr_enable: cdktf.numberToTerraform(this._whenRrEnable),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aflow: {
        value: cdktf.numberToHclTerraform(this._aflow),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      allow_syn_otherflags: {
        value: cdktf.numberToHclTerraform(this._allowSynOtherflags),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      allow_vip_to_rport_mapping: {
        value: cdktf.numberToHclTerraform(this._allowVipToRportMapping),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      conn_limit: {
        value: cdktf.numberToHclTerraform(this._connLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      conn_limit_no_logging: {
        value: cdktf.numberToHclTerraform(this._connLimitNoLogging),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      conn_limit_reset: {
        value: cdktf.numberToHclTerraform(this._connLimitReset),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      conn_rate_limit: {
        value: cdktf.numberToHclTerraform(this._connRateLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      conn_rate_limit_no_logging: {
        value: cdktf.numberToHclTerraform(this._connRateLimitNoLogging),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      conn_rate_limit_reset: {
        value: cdktf.numberToHclTerraform(this._connRateLimitReset),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      drop_unknown_conn: {
        value: cdktf.numberToHclTerraform(this._dropUnknownConn),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dscp: {
        value: cdktf.numberToHclTerraform(this._dscp),
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
      ignore_tcp_msl: {
        value: cdktf.numberToHclTerraform(this._ignoreTcpMsl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      log_options: {
        value: cdktf.stringToHclTerraform(this._logOptions),
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
      non_syn_initiation: {
        value: cdktf.numberToHclTerraform(this._nonSynInitiation),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pkt_rate_interval: {
        value: cdktf.stringToHclTerraform(this._pktRateInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pkt_rate_limit_reset: {
        value: cdktf.numberToHclTerraform(this._pktRateLimitReset),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pkt_rate_type: {
        value: cdktf.stringToHclTerraform(this._pktRateType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rate: {
        value: cdktf.numberToHclTerraform(this._rate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rate_interval: {
        value: cdktf.stringToHclTerraform(this._rateInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reset_l7_on_failover: {
        value: cdktf.numberToHclTerraform(this._resetL7OnFailover),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      reset_unknown_conn: {
        value: cdktf.numberToHclTerraform(this._resetUnknownConn),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      snat_msl: {
        value: cdktf.numberToHclTerraform(this._snatMsl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      snat_port_preserve: {
        value: cdktf.numberToHclTerraform(this._snatPortPreserve),
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
      when_rr_enable: {
        value: cdktf.numberToHclTerraform(this._whenRrEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
