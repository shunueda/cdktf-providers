// https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_settings#allow_subnet_overlap SystemSettings#allow_subnet_overlap}
  */
  readonly allowSubnetOverlap?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_settings#asymroute SystemSettings#asymroute}
  */
  readonly asymroute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_settings#asymroute6 SystemSettings#asymroute6}
  */
  readonly asymroute6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_settings#bfd SystemSettings#bfd}
  */
  readonly bfd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_settings#bfd_desired_min_tx SystemSettings#bfd_desired_min_tx}
  */
  readonly bfdDesiredMinTx?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_settings#bfd_detect_mult SystemSettings#bfd_detect_mult}
  */
  readonly bfdDetectMult?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_settings#bfd_dont_enforce_src_port SystemSettings#bfd_dont_enforce_src_port}
  */
  readonly bfdDontEnforceSrcPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_settings#bfd_required_min_rx SystemSettings#bfd_required_min_rx}
  */
  readonly bfdRequiredMinRx?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_settings#comments SystemSettings#comments}
  */
  readonly comments?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_settings#device SystemSettings#device}
  */
  readonly device?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_settings#ecmp_max_paths SystemSettings#ecmp_max_paths}
  */
  readonly ecmpMaxPaths?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_settings#gateway SystemSettings#gateway}
  */
  readonly gateway?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_settings#id SystemSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_settings#ip SystemSettings#ip}
  */
  readonly ip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_settings#ip_ecmp_mode SystemSettings#ip_ecmp_mode}
  */
  readonly ipEcmpMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_settings#manageip SystemSettings#manageip}
  */
  readonly manageip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_settings#multicast_forward SystemSettings#multicast_forward}
  */
  readonly multicastForward?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_settings#multicast_skip_policy SystemSettings#multicast_skip_policy}
  */
  readonly multicastSkipPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_settings#multicast_ttl_notchange SystemSettings#multicast_ttl_notchange}
  */
  readonly multicastTtlNotchange?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_settings#opmode SystemSettings#opmode}
  */
  readonly opmode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_settings#per_ip_bandwidth SystemSettings#per_ip_bandwidth}
  */
  readonly perIpBandwidth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_settings#sccp_port SystemSettings#sccp_port}
  */
  readonly sccpPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_settings#sip_helper SystemSettings#sip_helper}
  */
  readonly sipHelper?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_settings#sip_nat_trace SystemSettings#sip_nat_trace}
  */
  readonly sipNatTrace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_settings#sip_tcp_port SystemSettings#sip_tcp_port}
  */
  readonly sipTcpPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_settings#sip_udp_port SystemSettings#sip_udp_port}
  */
  readonly sipUdpPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_settings#status SystemSettings#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_settings#strict_src_check SystemSettings#strict_src_check}
  */
  readonly strictSrcCheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_settings#utf8_spam_tagging SystemSettings#utf8_spam_tagging}
  */
  readonly utf8SpamTagging?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_settings#vpn_stats_log SystemSettings#vpn_stats_log}
  */
  readonly vpnStatsLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_settings#vpn_stats_period SystemSettings#vpn_stats_period}
  */
  readonly vpnStatsPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_settings#wccp_cache_engine SystemSettings#wccp_cache_engine}
  */
  readonly wccpCacheEngine?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_settings fortiswitch_system_settings}
*/
export class SystemSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiswitch_system_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemSettings to import
  * @param importFromId The id of the existing SystemSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiswitch_system_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_settings fortiswitch_system_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemSettingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemSettingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortiswitch_system_settings',
      terraformGeneratorMetadata: {
        providerName: 'fortiswitch',
        providerVersion: '1.1.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowSubnetOverlap = config.allowSubnetOverlap;
    this._asymroute = config.asymroute;
    this._asymroute6 = config.asymroute6;
    this._bfd = config.bfd;
    this._bfdDesiredMinTx = config.bfdDesiredMinTx;
    this._bfdDetectMult = config.bfdDetectMult;
    this._bfdDontEnforceSrcPort = config.bfdDontEnforceSrcPort;
    this._bfdRequiredMinRx = config.bfdRequiredMinRx;
    this._comments = config.comments;
    this._device = config.device;
    this._ecmpMaxPaths = config.ecmpMaxPaths;
    this._gateway = config.gateway;
    this._id = config.id;
    this._ip = config.ip;
    this._ipEcmpMode = config.ipEcmpMode;
    this._manageip = config.manageip;
    this._multicastForward = config.multicastForward;
    this._multicastSkipPolicy = config.multicastSkipPolicy;
    this._multicastTtlNotchange = config.multicastTtlNotchange;
    this._opmode = config.opmode;
    this._perIpBandwidth = config.perIpBandwidth;
    this._sccpPort = config.sccpPort;
    this._sipHelper = config.sipHelper;
    this._sipNatTrace = config.sipNatTrace;
    this._sipTcpPort = config.sipTcpPort;
    this._sipUdpPort = config.sipUdpPort;
    this._status = config.status;
    this._strictSrcCheck = config.strictSrcCheck;
    this._utf8SpamTagging = config.utf8SpamTagging;
    this._vpnStatsLog = config.vpnStatsLog;
    this._vpnStatsPeriod = config.vpnStatsPeriod;
    this._wccpCacheEngine = config.wccpCacheEngine;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_subnet_overlap - computed: true, optional: true, required: false
  private _allowSubnetOverlap?: string; 
  public get allowSubnetOverlap() {
    return this.getStringAttribute('allow_subnet_overlap');
  }
  public set allowSubnetOverlap(value: string) {
    this._allowSubnetOverlap = value;
  }
  public resetAllowSubnetOverlap() {
    this._allowSubnetOverlap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowSubnetOverlapInput() {
    return this._allowSubnetOverlap;
  }

  // asymroute - computed: true, optional: true, required: false
  private _asymroute?: string; 
  public get asymroute() {
    return this.getStringAttribute('asymroute');
  }
  public set asymroute(value: string) {
    this._asymroute = value;
  }
  public resetAsymroute() {
    this._asymroute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asymrouteInput() {
    return this._asymroute;
  }

  // asymroute6 - computed: true, optional: true, required: false
  private _asymroute6?: string; 
  public get asymroute6() {
    return this.getStringAttribute('asymroute6');
  }
  public set asymroute6(value: string) {
    this._asymroute6 = value;
  }
  public resetAsymroute6() {
    this._asymroute6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asymroute6Input() {
    return this._asymroute6;
  }

  // bfd - computed: true, optional: true, required: false
  private _bfd?: string; 
  public get bfd() {
    return this.getStringAttribute('bfd');
  }
  public set bfd(value: string) {
    this._bfd = value;
  }
  public resetBfd() {
    this._bfd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdInput() {
    return this._bfd;
  }

  // bfd_desired_min_tx - computed: true, optional: true, required: false
  private _bfdDesiredMinTx?: number; 
  public get bfdDesiredMinTx() {
    return this.getNumberAttribute('bfd_desired_min_tx');
  }
  public set bfdDesiredMinTx(value: number) {
    this._bfdDesiredMinTx = value;
  }
  public resetBfdDesiredMinTx() {
    this._bfdDesiredMinTx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdDesiredMinTxInput() {
    return this._bfdDesiredMinTx;
  }

  // bfd_detect_mult - computed: true, optional: true, required: false
  private _bfdDetectMult?: number; 
  public get bfdDetectMult() {
    return this.getNumberAttribute('bfd_detect_mult');
  }
  public set bfdDetectMult(value: number) {
    this._bfdDetectMult = value;
  }
  public resetBfdDetectMult() {
    this._bfdDetectMult = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdDetectMultInput() {
    return this._bfdDetectMult;
  }

  // bfd_dont_enforce_src_port - computed: true, optional: true, required: false
  private _bfdDontEnforceSrcPort?: string; 
  public get bfdDontEnforceSrcPort() {
    return this.getStringAttribute('bfd_dont_enforce_src_port');
  }
  public set bfdDontEnforceSrcPort(value: string) {
    this._bfdDontEnforceSrcPort = value;
  }
  public resetBfdDontEnforceSrcPort() {
    this._bfdDontEnforceSrcPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdDontEnforceSrcPortInput() {
    return this._bfdDontEnforceSrcPort;
  }

  // bfd_required_min_rx - computed: true, optional: true, required: false
  private _bfdRequiredMinRx?: number; 
  public get bfdRequiredMinRx() {
    return this.getNumberAttribute('bfd_required_min_rx');
  }
  public set bfdRequiredMinRx(value: number) {
    this._bfdRequiredMinRx = value;
  }
  public resetBfdRequiredMinRx() {
    this._bfdRequiredMinRx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdRequiredMinRxInput() {
    return this._bfdRequiredMinRx;
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

  // device - computed: true, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // ecmp_max_paths - computed: true, optional: true, required: false
  private _ecmpMaxPaths?: number; 
  public get ecmpMaxPaths() {
    return this.getNumberAttribute('ecmp_max_paths');
  }
  public set ecmpMaxPaths(value: number) {
    this._ecmpMaxPaths = value;
  }
  public resetEcmpMaxPaths() {
    this._ecmpMaxPaths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecmpMaxPathsInput() {
    return this._ecmpMaxPaths;
  }

  // gateway - computed: true, optional: true, required: false
  private _gateway?: string; 
  public get gateway() {
    return this.getStringAttribute('gateway');
  }
  public set gateway(value: string) {
    this._gateway = value;
  }
  public resetGateway() {
    this._gateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway;
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

  // ip - computed: true, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // ip_ecmp_mode - computed: true, optional: true, required: false
  private _ipEcmpMode?: string; 
  public get ipEcmpMode() {
    return this.getStringAttribute('ip_ecmp_mode');
  }
  public set ipEcmpMode(value: string) {
    this._ipEcmpMode = value;
  }
  public resetIpEcmpMode() {
    this._ipEcmpMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipEcmpModeInput() {
    return this._ipEcmpMode;
  }

  // manageip - computed: true, optional: true, required: false
  private _manageip?: string; 
  public get manageip() {
    return this.getStringAttribute('manageip');
  }
  public set manageip(value: string) {
    this._manageip = value;
  }
  public resetManageip() {
    this._manageip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manageipInput() {
    return this._manageip;
  }

  // multicast_forward - computed: true, optional: true, required: false
  private _multicastForward?: string; 
  public get multicastForward() {
    return this.getStringAttribute('multicast_forward');
  }
  public set multicastForward(value: string) {
    this._multicastForward = value;
  }
  public resetMulticastForward() {
    this._multicastForward = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multicastForwardInput() {
    return this._multicastForward;
  }

  // multicast_skip_policy - computed: true, optional: true, required: false
  private _multicastSkipPolicy?: string; 
  public get multicastSkipPolicy() {
    return this.getStringAttribute('multicast_skip_policy');
  }
  public set multicastSkipPolicy(value: string) {
    this._multicastSkipPolicy = value;
  }
  public resetMulticastSkipPolicy() {
    this._multicastSkipPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multicastSkipPolicyInput() {
    return this._multicastSkipPolicy;
  }

  // multicast_ttl_notchange - computed: true, optional: true, required: false
  private _multicastTtlNotchange?: string; 
  public get multicastTtlNotchange() {
    return this.getStringAttribute('multicast_ttl_notchange');
  }
  public set multicastTtlNotchange(value: string) {
    this._multicastTtlNotchange = value;
  }
  public resetMulticastTtlNotchange() {
    this._multicastTtlNotchange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multicastTtlNotchangeInput() {
    return this._multicastTtlNotchange;
  }

  // opmode - computed: true, optional: true, required: false
  private _opmode?: string; 
  public get opmode() {
    return this.getStringAttribute('opmode');
  }
  public set opmode(value: string) {
    this._opmode = value;
  }
  public resetOpmode() {
    this._opmode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opmodeInput() {
    return this._opmode;
  }

  // per_ip_bandwidth - computed: true, optional: true, required: false
  private _perIpBandwidth?: string; 
  public get perIpBandwidth() {
    return this.getStringAttribute('per_ip_bandwidth');
  }
  public set perIpBandwidth(value: string) {
    this._perIpBandwidth = value;
  }
  public resetPerIpBandwidth() {
    this._perIpBandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perIpBandwidthInput() {
    return this._perIpBandwidth;
  }

  // sccp_port - computed: true, optional: true, required: false
  private _sccpPort?: number; 
  public get sccpPort() {
    return this.getNumberAttribute('sccp_port');
  }
  public set sccpPort(value: number) {
    this._sccpPort = value;
  }
  public resetSccpPort() {
    this._sccpPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sccpPortInput() {
    return this._sccpPort;
  }

  // sip_helper - computed: true, optional: true, required: false
  private _sipHelper?: string; 
  public get sipHelper() {
    return this.getStringAttribute('sip_helper');
  }
  public set sipHelper(value: string) {
    this._sipHelper = value;
  }
  public resetSipHelper() {
    this._sipHelper = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sipHelperInput() {
    return this._sipHelper;
  }

  // sip_nat_trace - computed: true, optional: true, required: false
  private _sipNatTrace?: string; 
  public get sipNatTrace() {
    return this.getStringAttribute('sip_nat_trace');
  }
  public set sipNatTrace(value: string) {
    this._sipNatTrace = value;
  }
  public resetSipNatTrace() {
    this._sipNatTrace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sipNatTraceInput() {
    return this._sipNatTrace;
  }

  // sip_tcp_port - computed: true, optional: true, required: false
  private _sipTcpPort?: number; 
  public get sipTcpPort() {
    return this.getNumberAttribute('sip_tcp_port');
  }
  public set sipTcpPort(value: number) {
    this._sipTcpPort = value;
  }
  public resetSipTcpPort() {
    this._sipTcpPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sipTcpPortInput() {
    return this._sipTcpPort;
  }

  // sip_udp_port - computed: true, optional: true, required: false
  private _sipUdpPort?: number; 
  public get sipUdpPort() {
    return this.getNumberAttribute('sip_udp_port');
  }
  public set sipUdpPort(value: number) {
    this._sipUdpPort = value;
  }
  public resetSipUdpPort() {
    this._sipUdpPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sipUdpPortInput() {
    return this._sipUdpPort;
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

  // strict_src_check - computed: true, optional: true, required: false
  private _strictSrcCheck?: string; 
  public get strictSrcCheck() {
    return this.getStringAttribute('strict_src_check');
  }
  public set strictSrcCheck(value: string) {
    this._strictSrcCheck = value;
  }
  public resetStrictSrcCheck() {
    this._strictSrcCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strictSrcCheckInput() {
    return this._strictSrcCheck;
  }

  // utf8_spam_tagging - computed: true, optional: true, required: false
  private _utf8SpamTagging?: string; 
  public get utf8SpamTagging() {
    return this.getStringAttribute('utf8_spam_tagging');
  }
  public set utf8SpamTagging(value: string) {
    this._utf8SpamTagging = value;
  }
  public resetUtf8SpamTagging() {
    this._utf8SpamTagging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get utf8SpamTaggingInput() {
    return this._utf8SpamTagging;
  }

  // vpn_stats_log - computed: true, optional: true, required: false
  private _vpnStatsLog?: string; 
  public get vpnStatsLog() {
    return this.getStringAttribute('vpn_stats_log');
  }
  public set vpnStatsLog(value: string) {
    this._vpnStatsLog = value;
  }
  public resetVpnStatsLog() {
    this._vpnStatsLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnStatsLogInput() {
    return this._vpnStatsLog;
  }

  // vpn_stats_period - computed: true, optional: true, required: false
  private _vpnStatsPeriod?: number; 
  public get vpnStatsPeriod() {
    return this.getNumberAttribute('vpn_stats_period');
  }
  public set vpnStatsPeriod(value: number) {
    this._vpnStatsPeriod = value;
  }
  public resetVpnStatsPeriod() {
    this._vpnStatsPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnStatsPeriodInput() {
    return this._vpnStatsPeriod;
  }

  // wccp_cache_engine - computed: true, optional: true, required: false
  private _wccpCacheEngine?: string; 
  public get wccpCacheEngine() {
    return this.getStringAttribute('wccp_cache_engine');
  }
  public set wccpCacheEngine(value: string) {
    this._wccpCacheEngine = value;
  }
  public resetWccpCacheEngine() {
    this._wccpCacheEngine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wccpCacheEngineInput() {
    return this._wccpCacheEngine;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_subnet_overlap: cdktf.stringToTerraform(this._allowSubnetOverlap),
      asymroute: cdktf.stringToTerraform(this._asymroute),
      asymroute6: cdktf.stringToTerraform(this._asymroute6),
      bfd: cdktf.stringToTerraform(this._bfd),
      bfd_desired_min_tx: cdktf.numberToTerraform(this._bfdDesiredMinTx),
      bfd_detect_mult: cdktf.numberToTerraform(this._bfdDetectMult),
      bfd_dont_enforce_src_port: cdktf.stringToTerraform(this._bfdDontEnforceSrcPort),
      bfd_required_min_rx: cdktf.numberToTerraform(this._bfdRequiredMinRx),
      comments: cdktf.stringToTerraform(this._comments),
      device: cdktf.stringToTerraform(this._device),
      ecmp_max_paths: cdktf.numberToTerraform(this._ecmpMaxPaths),
      gateway: cdktf.stringToTerraform(this._gateway),
      id: cdktf.stringToTerraform(this._id),
      ip: cdktf.stringToTerraform(this._ip),
      ip_ecmp_mode: cdktf.stringToTerraform(this._ipEcmpMode),
      manageip: cdktf.stringToTerraform(this._manageip),
      multicast_forward: cdktf.stringToTerraform(this._multicastForward),
      multicast_skip_policy: cdktf.stringToTerraform(this._multicastSkipPolicy),
      multicast_ttl_notchange: cdktf.stringToTerraform(this._multicastTtlNotchange),
      opmode: cdktf.stringToTerraform(this._opmode),
      per_ip_bandwidth: cdktf.stringToTerraform(this._perIpBandwidth),
      sccp_port: cdktf.numberToTerraform(this._sccpPort),
      sip_helper: cdktf.stringToTerraform(this._sipHelper),
      sip_nat_trace: cdktf.stringToTerraform(this._sipNatTrace),
      sip_tcp_port: cdktf.numberToTerraform(this._sipTcpPort),
      sip_udp_port: cdktf.numberToTerraform(this._sipUdpPort),
      status: cdktf.stringToTerraform(this._status),
      strict_src_check: cdktf.stringToTerraform(this._strictSrcCheck),
      utf8_spam_tagging: cdktf.stringToTerraform(this._utf8SpamTagging),
      vpn_stats_log: cdktf.stringToTerraform(this._vpnStatsLog),
      vpn_stats_period: cdktf.numberToTerraform(this._vpnStatsPeriod),
      wccp_cache_engine: cdktf.stringToTerraform(this._wccpCacheEngine),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_subnet_overlap: {
        value: cdktf.stringToHclTerraform(this._allowSubnetOverlap),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      asymroute: {
        value: cdktf.stringToHclTerraform(this._asymroute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      asymroute6: {
        value: cdktf.stringToHclTerraform(this._asymroute6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bfd: {
        value: cdktf.stringToHclTerraform(this._bfd),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bfd_desired_min_tx: {
        value: cdktf.numberToHclTerraform(this._bfdDesiredMinTx),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bfd_detect_mult: {
        value: cdktf.numberToHclTerraform(this._bfdDetectMult),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bfd_dont_enforce_src_port: {
        value: cdktf.stringToHclTerraform(this._bfdDontEnforceSrcPort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bfd_required_min_rx: {
        value: cdktf.numberToHclTerraform(this._bfdRequiredMinRx),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      comments: {
        value: cdktf.stringToHclTerraform(this._comments),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ecmp_max_paths: {
        value: cdktf.numberToHclTerraform(this._ecmpMaxPaths),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gateway: {
        value: cdktf.stringToHclTerraform(this._gateway),
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
      ip: {
        value: cdktf.stringToHclTerraform(this._ip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_ecmp_mode: {
        value: cdktf.stringToHclTerraform(this._ipEcmpMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      manageip: {
        value: cdktf.stringToHclTerraform(this._manageip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      multicast_forward: {
        value: cdktf.stringToHclTerraform(this._multicastForward),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      multicast_skip_policy: {
        value: cdktf.stringToHclTerraform(this._multicastSkipPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      multicast_ttl_notchange: {
        value: cdktf.stringToHclTerraform(this._multicastTtlNotchange),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      opmode: {
        value: cdktf.stringToHclTerraform(this._opmode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      per_ip_bandwidth: {
        value: cdktf.stringToHclTerraform(this._perIpBandwidth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sccp_port: {
        value: cdktf.numberToHclTerraform(this._sccpPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sip_helper: {
        value: cdktf.stringToHclTerraform(this._sipHelper),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sip_nat_trace: {
        value: cdktf.stringToHclTerraform(this._sipNatTrace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sip_tcp_port: {
        value: cdktf.numberToHclTerraform(this._sipTcpPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sip_udp_port: {
        value: cdktf.numberToHclTerraform(this._sipUdpPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      strict_src_check: {
        value: cdktf.stringToHclTerraform(this._strictSrcCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      utf8_spam_tagging: {
        value: cdktf.stringToHclTerraform(this._utf8SpamTagging),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpn_stats_log: {
        value: cdktf.stringToHclTerraform(this._vpnStatsLog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpn_stats_period: {
        value: cdktf.numberToHclTerraform(this._vpnStatsPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      wccp_cache_engine: {
        value: cdktf.stringToHclTerraform(this._wccpCacheEngine),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
