// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l4_trigger_stats_inc
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL4TriggerStatsIncAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable automatic packet-capture for BW-Limit Exceed drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l4_trigger_stats_inc#bw_rate_limit_exceed VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL4TriggerStatsIncA#bw_rate_limit_exceed}
  */
  readonly bwRateLimitExceed?: number;
  /**
  * Enable automatic packet-capture for L3V Conn Limit Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l4_trigger_stats_inc#concurrent_conn_exceed VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL4TriggerStatsIncA#concurrent_conn_exceed}
  */
  readonly concurrentConnExceed?: number;
  /**
  * Enable automatic packet-capture for Conn rate limit drops
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l4_trigger_stats_inc#conn_rate_limit_drop VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL4TriggerStatsIncA#conn_rate_limit_drop}
  */
  readonly connRateLimitDrop?: number;
  /**
  * Enable automatic packet-capture for Conn rate limit resets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l4_trigger_stats_inc#conn_rate_limit_reset VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL4TriggerStatsIncA#conn_rate_limit_reset}
  */
  readonly connRateLimitReset?: number;
  /**
  * Enable automatic packet-capture for Conn Limit drops
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l4_trigger_stats_inc#connlimit_drop VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL4TriggerStatsIncA#connlimit_drop}
  */
  readonly connlimitDrop?: number;
  /**
  * Enable automatic packet-capture for DNS Policy Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l4_trigger_stats_inc#dns_policy_drop VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL4TriggerStatsIncA#dns_policy_drop}
  */
  readonly dnsPolicyDrop?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l4_trigger_stats_inc#id VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL4TriggerStatsIncA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Enable automatic packet-capture for L4 CPS exceed drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l4_trigger_stats_inc#l4_cps_exceed VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL4TriggerStatsIncA#l4_cps_exceed}
  */
  readonly l4CpsExceed?: number;
  /**
  * Enable automatic packet-capture for L7 CPS exceed drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l4_trigger_stats_inc#l7_cps_exceed VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL4TriggerStatsIncA#l7_cps_exceed}
  */
  readonly l7CpsExceed?: number;
  /**
  * Enable automatic packet-capture for NAT CPS exceed drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l4_trigger_stats_inc#nat_cps_exceed VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL4TriggerStatsIncA#nat_cps_exceed}
  */
  readonly natCpsExceed?: number;
  /**
  * Enable automatic packet-capture for No resource drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l4_trigger_stats_inc#no_resourse_drop VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL4TriggerStatsIncA#no_resourse_drop}
  */
  readonly noResourseDrop?: number;
  /**
  * Enable automatic packet-capture for Auto NAT id mismatch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l4_trigger_stats_inc#smart_nat_id_mismatch VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL4TriggerStatsIncA#smart_nat_id_mismatch}
  */
  readonly smartNatIdMismatch?: number;
  /**
  * Enable automatic packet-capture for Source NAT failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l4_trigger_stats_inc#snat_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL4TriggerStatsIncA#snat_fail}
  */
  readonly snatFail?: number;
  /**
  * Enable automatic packet-capture for Source NAT ICMP Process
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l4_trigger_stats_inc#snat_icmp_error_process VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL4TriggerStatsIncA#snat_icmp_error_process}
  */
  readonly snatIcmpErrorProcess?: number;
  /**
  * Enable automatic packet-capture for Source NAT ICMP No Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l4_trigger_stats_inc#snat_icmp_no_match VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL4TriggerStatsIncA#snat_icmp_no_match}
  */
  readonly snatIcmpNoMatch?: number;
  /**
  * Enable automatic packet-capture for Source NAT no fwd route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l4_trigger_stats_inc#snat_no_fwd_route VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL4TriggerStatsIncA#snat_no_fwd_route}
  */
  readonly snatNoFwdRoute?: number;
  /**
  * Enable automatic packet-capture for Source NAT no rev route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l4_trigger_stats_inc#snat_no_rev_route VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL4TriggerStatsIncA#snat_no_rev_route}
  */
  readonly snatNoRevRoute?: number;
  /**
  * Enable automatic packet-capture for SSL CPS exceed drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l4_trigger_stats_inc#ssl_cps_exceed VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL4TriggerStatsIncA#ssl_cps_exceed}
  */
  readonly sslCpsExceed?: number;
  /**
  * Enable automatic packet-capture for SSL TPT exceed drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l4_trigger_stats_inc#ssl_tpt_exceed VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL4TriggerStatsIncA#ssl_tpt_exceed}
  */
  readonly sslTptExceed?: number;
  /**
  * Enable automatic packet-capture for L4 server handshake fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l4_trigger_stats_inc#svr_syn_handshake_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL4TriggerStatsIncA#svr_syn_handshake_fail}
  */
  readonly svrSynHandshakeFail?: number;
  /**
  * Enable automatic packet-capture for Server sel failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l4_trigger_stats_inc#svrselfail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL4TriggerStatsIncA#svrselfail}
  */
  readonly svrselfail?: number;
  /**
  * Enable automatic packet-capture for L4 SYN attack
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l4_trigger_stats_inc#synattack VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL4TriggerStatsIncA#synattack}
  */
  readonly synattack?: number;
  /**
  * Enable automatic packet-capture for TCP SYN cookie failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l4_trigger_stats_inc#syncookiescheckfailed VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL4TriggerStatsIncA#syncookiescheckfailed}
  */
  readonly syncookiescheckfailed?: number;
  /**
  * Enable automatic packet-capture for TCP SYN cookie snt fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l4_trigger_stats_inc#syncookiessentfailed VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL4TriggerStatsIncA#syncookiessentfailed}
  */
  readonly syncookiessentfailed?: number;
  /**
  * Template_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l4_trigger_stats_inc#template_name VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL4TriggerStatsIncA#template_name}
  */
  readonly templateName: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l4_trigger_stats_inc#uuid VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL4TriggerStatsIncA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l4_trigger_stats_inc thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l4_trigger_stats_inc}
*/
export class VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL4TriggerStatsIncA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l4_trigger_stats_inc";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL4TriggerStatsIncA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL4TriggerStatsIncA to import
  * @param importFromId The id of the existing VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL4TriggerStatsIncA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l4_trigger_stats_inc#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL4TriggerStatsIncA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l4_trigger_stats_inc", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l4_trigger_stats_inc thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l4_trigger_stats_inc} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL4TriggerStatsIncAConfig
  */
  public constructor(scope: Construct, id: string, config: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL4TriggerStatsIncAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l4_trigger_stats_inc',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
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
    this._bwRateLimitExceed = config.bwRateLimitExceed;
    this._concurrentConnExceed = config.concurrentConnExceed;
    this._connRateLimitDrop = config.connRateLimitDrop;
    this._connRateLimitReset = config.connRateLimitReset;
    this._connlimitDrop = config.connlimitDrop;
    this._dnsPolicyDrop = config.dnsPolicyDrop;
    this._id = config.id;
    this._l4CpsExceed = config.l4CpsExceed;
    this._l7CpsExceed = config.l7CpsExceed;
    this._natCpsExceed = config.natCpsExceed;
    this._noResourseDrop = config.noResourseDrop;
    this._smartNatIdMismatch = config.smartNatIdMismatch;
    this._snatFail = config.snatFail;
    this._snatIcmpErrorProcess = config.snatIcmpErrorProcess;
    this._snatIcmpNoMatch = config.snatIcmpNoMatch;
    this._snatNoFwdRoute = config.snatNoFwdRoute;
    this._snatNoRevRoute = config.snatNoRevRoute;
    this._sslCpsExceed = config.sslCpsExceed;
    this._sslTptExceed = config.sslTptExceed;
    this._svrSynHandshakeFail = config.svrSynHandshakeFail;
    this._svrselfail = config.svrselfail;
    this._synattack = config.synattack;
    this._syncookiescheckfailed = config.syncookiescheckfailed;
    this._syncookiessentfailed = config.syncookiessentfailed;
    this._templateName = config.templateName;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bw_rate_limit_exceed - computed: false, optional: true, required: false
  private _bwRateLimitExceed?: number; 
  public get bwRateLimitExceed() {
    return this.getNumberAttribute('bw_rate_limit_exceed');
  }
  public set bwRateLimitExceed(value: number) {
    this._bwRateLimitExceed = value;
  }
  public resetBwRateLimitExceed() {
    this._bwRateLimitExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bwRateLimitExceedInput() {
    return this._bwRateLimitExceed;
  }

  // concurrent_conn_exceed - computed: false, optional: true, required: false
  private _concurrentConnExceed?: number; 
  public get concurrentConnExceed() {
    return this.getNumberAttribute('concurrent_conn_exceed');
  }
  public set concurrentConnExceed(value: number) {
    this._concurrentConnExceed = value;
  }
  public resetConcurrentConnExceed() {
    this._concurrentConnExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get concurrentConnExceedInput() {
    return this._concurrentConnExceed;
  }

  // conn_rate_limit_drop - computed: false, optional: true, required: false
  private _connRateLimitDrop?: number; 
  public get connRateLimitDrop() {
    return this.getNumberAttribute('conn_rate_limit_drop');
  }
  public set connRateLimitDrop(value: number) {
    this._connRateLimitDrop = value;
  }
  public resetConnRateLimitDrop() {
    this._connRateLimitDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connRateLimitDropInput() {
    return this._connRateLimitDrop;
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

  // connlimit_drop - computed: false, optional: true, required: false
  private _connlimitDrop?: number; 
  public get connlimitDrop() {
    return this.getNumberAttribute('connlimit_drop');
  }
  public set connlimitDrop(value: number) {
    this._connlimitDrop = value;
  }
  public resetConnlimitDrop() {
    this._connlimitDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connlimitDropInput() {
    return this._connlimitDrop;
  }

  // dns_policy_drop - computed: false, optional: true, required: false
  private _dnsPolicyDrop?: number; 
  public get dnsPolicyDrop() {
    return this.getNumberAttribute('dns_policy_drop');
  }
  public set dnsPolicyDrop(value: number) {
    this._dnsPolicyDrop = value;
  }
  public resetDnsPolicyDrop() {
    this._dnsPolicyDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsPolicyDropInput() {
    return this._dnsPolicyDrop;
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

  // l4_cps_exceed - computed: false, optional: true, required: false
  private _l4CpsExceed?: number; 
  public get l4CpsExceed() {
    return this.getNumberAttribute('l4_cps_exceed');
  }
  public set l4CpsExceed(value: number) {
    this._l4CpsExceed = value;
  }
  public resetL4CpsExceed() {
    this._l4CpsExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4CpsExceedInput() {
    return this._l4CpsExceed;
  }

  // l7_cps_exceed - computed: false, optional: true, required: false
  private _l7CpsExceed?: number; 
  public get l7CpsExceed() {
    return this.getNumberAttribute('l7_cps_exceed');
  }
  public set l7CpsExceed(value: number) {
    this._l7CpsExceed = value;
  }
  public resetL7CpsExceed() {
    this._l7CpsExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l7CpsExceedInput() {
    return this._l7CpsExceed;
  }

  // nat_cps_exceed - computed: false, optional: true, required: false
  private _natCpsExceed?: number; 
  public get natCpsExceed() {
    return this.getNumberAttribute('nat_cps_exceed');
  }
  public set natCpsExceed(value: number) {
    this._natCpsExceed = value;
  }
  public resetNatCpsExceed() {
    this._natCpsExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natCpsExceedInput() {
    return this._natCpsExceed;
  }

  // no_resourse_drop - computed: false, optional: true, required: false
  private _noResourseDrop?: number; 
  public get noResourseDrop() {
    return this.getNumberAttribute('no_resourse_drop');
  }
  public set noResourseDrop(value: number) {
    this._noResourseDrop = value;
  }
  public resetNoResourseDrop() {
    this._noResourseDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noResourseDropInput() {
    return this._noResourseDrop;
  }

  // smart_nat_id_mismatch - computed: false, optional: true, required: false
  private _smartNatIdMismatch?: number; 
  public get smartNatIdMismatch() {
    return this.getNumberAttribute('smart_nat_id_mismatch');
  }
  public set smartNatIdMismatch(value: number) {
    this._smartNatIdMismatch = value;
  }
  public resetSmartNatIdMismatch() {
    this._smartNatIdMismatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smartNatIdMismatchInput() {
    return this._smartNatIdMismatch;
  }

  // snat_fail - computed: false, optional: true, required: false
  private _snatFail?: number; 
  public get snatFail() {
    return this.getNumberAttribute('snat_fail');
  }
  public set snatFail(value: number) {
    this._snatFail = value;
  }
  public resetSnatFail() {
    this._snatFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snatFailInput() {
    return this._snatFail;
  }

  // snat_icmp_error_process - computed: false, optional: true, required: false
  private _snatIcmpErrorProcess?: number; 
  public get snatIcmpErrorProcess() {
    return this.getNumberAttribute('snat_icmp_error_process');
  }
  public set snatIcmpErrorProcess(value: number) {
    this._snatIcmpErrorProcess = value;
  }
  public resetSnatIcmpErrorProcess() {
    this._snatIcmpErrorProcess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snatIcmpErrorProcessInput() {
    return this._snatIcmpErrorProcess;
  }

  // snat_icmp_no_match - computed: false, optional: true, required: false
  private _snatIcmpNoMatch?: number; 
  public get snatIcmpNoMatch() {
    return this.getNumberAttribute('snat_icmp_no_match');
  }
  public set snatIcmpNoMatch(value: number) {
    this._snatIcmpNoMatch = value;
  }
  public resetSnatIcmpNoMatch() {
    this._snatIcmpNoMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snatIcmpNoMatchInput() {
    return this._snatIcmpNoMatch;
  }

  // snat_no_fwd_route - computed: false, optional: true, required: false
  private _snatNoFwdRoute?: number; 
  public get snatNoFwdRoute() {
    return this.getNumberAttribute('snat_no_fwd_route');
  }
  public set snatNoFwdRoute(value: number) {
    this._snatNoFwdRoute = value;
  }
  public resetSnatNoFwdRoute() {
    this._snatNoFwdRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snatNoFwdRouteInput() {
    return this._snatNoFwdRoute;
  }

  // snat_no_rev_route - computed: false, optional: true, required: false
  private _snatNoRevRoute?: number; 
  public get snatNoRevRoute() {
    return this.getNumberAttribute('snat_no_rev_route');
  }
  public set snatNoRevRoute(value: number) {
    this._snatNoRevRoute = value;
  }
  public resetSnatNoRevRoute() {
    this._snatNoRevRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snatNoRevRouteInput() {
    return this._snatNoRevRoute;
  }

  // ssl_cps_exceed - computed: false, optional: true, required: false
  private _sslCpsExceed?: number; 
  public get sslCpsExceed() {
    return this.getNumberAttribute('ssl_cps_exceed');
  }
  public set sslCpsExceed(value: number) {
    this._sslCpsExceed = value;
  }
  public resetSslCpsExceed() {
    this._sslCpsExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslCpsExceedInput() {
    return this._sslCpsExceed;
  }

  // ssl_tpt_exceed - computed: false, optional: true, required: false
  private _sslTptExceed?: number; 
  public get sslTptExceed() {
    return this.getNumberAttribute('ssl_tpt_exceed');
  }
  public set sslTptExceed(value: number) {
    this._sslTptExceed = value;
  }
  public resetSslTptExceed() {
    this._sslTptExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslTptExceedInput() {
    return this._sslTptExceed;
  }

  // svr_syn_handshake_fail - computed: false, optional: true, required: false
  private _svrSynHandshakeFail?: number; 
  public get svrSynHandshakeFail() {
    return this.getNumberAttribute('svr_syn_handshake_fail');
  }
  public set svrSynHandshakeFail(value: number) {
    this._svrSynHandshakeFail = value;
  }
  public resetSvrSynHandshakeFail() {
    this._svrSynHandshakeFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get svrSynHandshakeFailInput() {
    return this._svrSynHandshakeFail;
  }

  // svrselfail - computed: false, optional: true, required: false
  private _svrselfail?: number; 
  public get svrselfail() {
    return this.getNumberAttribute('svrselfail');
  }
  public set svrselfail(value: number) {
    this._svrselfail = value;
  }
  public resetSvrselfail() {
    this._svrselfail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get svrselfailInput() {
    return this._svrselfail;
  }

  // synattack - computed: false, optional: true, required: false
  private _synattack?: number; 
  public get synattack() {
    return this.getNumberAttribute('synattack');
  }
  public set synattack(value: number) {
    this._synattack = value;
  }
  public resetSynattack() {
    this._synattack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synattackInput() {
    return this._synattack;
  }

  // syncookiescheckfailed - computed: false, optional: true, required: false
  private _syncookiescheckfailed?: number; 
  public get syncookiescheckfailed() {
    return this.getNumberAttribute('syncookiescheckfailed');
  }
  public set syncookiescheckfailed(value: number) {
    this._syncookiescheckfailed = value;
  }
  public resetSyncookiescheckfailed() {
    this._syncookiescheckfailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncookiescheckfailedInput() {
    return this._syncookiescheckfailed;
  }

  // syncookiessentfailed - computed: false, optional: true, required: false
  private _syncookiessentfailed?: number; 
  public get syncookiessentfailed() {
    return this.getNumberAttribute('syncookiessentfailed');
  }
  public set syncookiessentfailed(value: number) {
    this._syncookiessentfailed = value;
  }
  public resetSyncookiessentfailed() {
    this._syncookiessentfailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncookiessentfailedInput() {
    return this._syncookiessentfailed;
  }

  // template_name - computed: false, optional: false, required: true
  private _templateName?: string; 
  public get templateName() {
    return this.getStringAttribute('template_name');
  }
  public set templateName(value: string) {
    this._templateName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateNameInput() {
    return this._templateName;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bw_rate_limit_exceed: cdktf.numberToTerraform(this._bwRateLimitExceed),
      concurrent_conn_exceed: cdktf.numberToTerraform(this._concurrentConnExceed),
      conn_rate_limit_drop: cdktf.numberToTerraform(this._connRateLimitDrop),
      conn_rate_limit_reset: cdktf.numberToTerraform(this._connRateLimitReset),
      connlimit_drop: cdktf.numberToTerraform(this._connlimitDrop),
      dns_policy_drop: cdktf.numberToTerraform(this._dnsPolicyDrop),
      id: cdktf.stringToTerraform(this._id),
      l4_cps_exceed: cdktf.numberToTerraform(this._l4CpsExceed),
      l7_cps_exceed: cdktf.numberToTerraform(this._l7CpsExceed),
      nat_cps_exceed: cdktf.numberToTerraform(this._natCpsExceed),
      no_resourse_drop: cdktf.numberToTerraform(this._noResourseDrop),
      smart_nat_id_mismatch: cdktf.numberToTerraform(this._smartNatIdMismatch),
      snat_fail: cdktf.numberToTerraform(this._snatFail),
      snat_icmp_error_process: cdktf.numberToTerraform(this._snatIcmpErrorProcess),
      snat_icmp_no_match: cdktf.numberToTerraform(this._snatIcmpNoMatch),
      snat_no_fwd_route: cdktf.numberToTerraform(this._snatNoFwdRoute),
      snat_no_rev_route: cdktf.numberToTerraform(this._snatNoRevRoute),
      ssl_cps_exceed: cdktf.numberToTerraform(this._sslCpsExceed),
      ssl_tpt_exceed: cdktf.numberToTerraform(this._sslTptExceed),
      svr_syn_handshake_fail: cdktf.numberToTerraform(this._svrSynHandshakeFail),
      svrselfail: cdktf.numberToTerraform(this._svrselfail),
      synattack: cdktf.numberToTerraform(this._synattack),
      syncookiescheckfailed: cdktf.numberToTerraform(this._syncookiescheckfailed),
      syncookiessentfailed: cdktf.numberToTerraform(this._syncookiessentfailed),
      template_name: cdktf.stringToTerraform(this._templateName),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bw_rate_limit_exceed: {
        value: cdktf.numberToHclTerraform(this._bwRateLimitExceed),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      concurrent_conn_exceed: {
        value: cdktf.numberToHclTerraform(this._concurrentConnExceed),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      conn_rate_limit_drop: {
        value: cdktf.numberToHclTerraform(this._connRateLimitDrop),
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
      connlimit_drop: {
        value: cdktf.numberToHclTerraform(this._connlimitDrop),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dns_policy_drop: {
        value: cdktf.numberToHclTerraform(this._dnsPolicyDrop),
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
      l4_cps_exceed: {
        value: cdktf.numberToHclTerraform(this._l4CpsExceed),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      l7_cps_exceed: {
        value: cdktf.numberToHclTerraform(this._l7CpsExceed),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      nat_cps_exceed: {
        value: cdktf.numberToHclTerraform(this._natCpsExceed),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      no_resourse_drop: {
        value: cdktf.numberToHclTerraform(this._noResourseDrop),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      smart_nat_id_mismatch: {
        value: cdktf.numberToHclTerraform(this._smartNatIdMismatch),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      snat_fail: {
        value: cdktf.numberToHclTerraform(this._snatFail),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      snat_icmp_error_process: {
        value: cdktf.numberToHclTerraform(this._snatIcmpErrorProcess),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      snat_icmp_no_match: {
        value: cdktf.numberToHclTerraform(this._snatIcmpNoMatch),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      snat_no_fwd_route: {
        value: cdktf.numberToHclTerraform(this._snatNoFwdRoute),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      snat_no_rev_route: {
        value: cdktf.numberToHclTerraform(this._snatNoRevRoute),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ssl_cps_exceed: {
        value: cdktf.numberToHclTerraform(this._sslCpsExceed),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ssl_tpt_exceed: {
        value: cdktf.numberToHclTerraform(this._sslTptExceed),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      svr_syn_handshake_fail: {
        value: cdktf.numberToHclTerraform(this._svrSynHandshakeFail),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      svrselfail: {
        value: cdktf.numberToHclTerraform(this._svrselfail),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      synattack: {
        value: cdktf.numberToHclTerraform(this._synattack),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      syncookiescheckfailed: {
        value: cdktf.numberToHclTerraform(this._syncookiescheckfailed),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      syncookiessentfailed: {
        value: cdktf.numberToHclTerraform(this._syncookiessentfailed),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      template_name: {
        value: cdktf.stringToHclTerraform(this._templateName),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
