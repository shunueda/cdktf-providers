// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l4
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL4AConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l4#id VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL4A#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Template_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l4#template_name VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL4A#template_name}
  */
  readonly templateName: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l4#uuid VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL4A#uuid}
  */
  readonly uuid?: string;
  /**
  * trigger_stats_inc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l4#trigger_stats_inc VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL4A#trigger_stats_inc}
  */
  readonly triggerStatsInc?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL4TriggerStatsIncA;
  /**
  * trigger_stats_rate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l4#trigger_stats_rate VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL4A#trigger_stats_rate}
  */
  readonly triggerStatsRate?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL4TriggerStatsRateA;
}
export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL4TriggerStatsIncA {
  /**
  * Enable automatic packet-capture for BW-Limit Exceed drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l4#bw_rate_limit_exceed VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL4A#bw_rate_limit_exceed}
  */
  readonly bwRateLimitExceed?: number;
  /**
  * Enable automatic packet-capture for L3V Conn Limit Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l4#concurrent_conn_exceed VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL4A#concurrent_conn_exceed}
  */
  readonly concurrentConnExceed?: number;
  /**
  * Enable automatic packet-capture for Conn rate limit drops
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l4#conn_rate_limit_drop VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL4A#conn_rate_limit_drop}
  */
  readonly connRateLimitDrop?: number;
  /**
  * Enable automatic packet-capture for Conn rate limit resets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l4#conn_rate_limit_reset VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL4A#conn_rate_limit_reset}
  */
  readonly connRateLimitReset?: number;
  /**
  * Enable automatic packet-capture for Conn Limit drops
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l4#connlimit_drop VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL4A#connlimit_drop}
  */
  readonly connlimitDrop?: number;
  /**
  * Enable automatic packet-capture for DNS Policy Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l4#dns_policy_drop VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL4A#dns_policy_drop}
  */
  readonly dnsPolicyDrop?: number;
  /**
  * Enable automatic packet-capture for L4 CPS exceed drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l4#l4_cps_exceed VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL4A#l4_cps_exceed}
  */
  readonly l4CpsExceed?: number;
  /**
  * Enable automatic packet-capture for L7 CPS exceed drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l4#l7_cps_exceed VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL4A#l7_cps_exceed}
  */
  readonly l7CpsExceed?: number;
  /**
  * Enable automatic packet-capture for NAT CPS exceed drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l4#nat_cps_exceed VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL4A#nat_cps_exceed}
  */
  readonly natCpsExceed?: number;
  /**
  * Enable automatic packet-capture for No resource drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l4#no_resourse_drop VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL4A#no_resourse_drop}
  */
  readonly noResourseDrop?: number;
  /**
  * Enable automatic packet-capture for Auto NAT id mismatch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l4#smart_nat_id_mismatch VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL4A#smart_nat_id_mismatch}
  */
  readonly smartNatIdMismatch?: number;
  /**
  * Enable automatic packet-capture for Source NAT failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l4#snat_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL4A#snat_fail}
  */
  readonly snatFail?: number;
  /**
  * Enable automatic packet-capture for Source NAT ICMP Process
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l4#snat_icmp_error_process VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL4A#snat_icmp_error_process}
  */
  readonly snatIcmpErrorProcess?: number;
  /**
  * Enable automatic packet-capture for Source NAT ICMP No Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l4#snat_icmp_no_match VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL4A#snat_icmp_no_match}
  */
  readonly snatIcmpNoMatch?: number;
  /**
  * Enable automatic packet-capture for Source NAT no fwd route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l4#snat_no_fwd_route VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL4A#snat_no_fwd_route}
  */
  readonly snatNoFwdRoute?: number;
  /**
  * Enable automatic packet-capture for Source NAT no rev route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l4#snat_no_rev_route VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL4A#snat_no_rev_route}
  */
  readonly snatNoRevRoute?: number;
  /**
  * Enable automatic packet-capture for SSL CPS exceed drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l4#ssl_cps_exceed VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL4A#ssl_cps_exceed}
  */
  readonly sslCpsExceed?: number;
  /**
  * Enable automatic packet-capture for SSL TPT exceed drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l4#ssl_tpt_exceed VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL4A#ssl_tpt_exceed}
  */
  readonly sslTptExceed?: number;
  /**
  * Enable automatic packet-capture for L4 server handshake fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l4#svr_syn_handshake_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL4A#svr_syn_handshake_fail}
  */
  readonly svrSynHandshakeFail?: number;
  /**
  * Enable automatic packet-capture for Server sel failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l4#svrselfail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL4A#svrselfail}
  */
  readonly svrselfail?: number;
  /**
  * Enable automatic packet-capture for L4 SYN attack
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l4#synattack VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL4A#synattack}
  */
  readonly synattack?: number;
  /**
  * Enable automatic packet-capture for TCP SYN cookie failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l4#syncookiescheckfailed VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL4A#syncookiescheckfailed}
  */
  readonly syncookiescheckfailed?: number;
  /**
  * Enable automatic packet-capture for TCP SYN cookie snt fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l4#syncookiessentfailed VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL4A#syncookiessentfailed}
  */
  readonly syncookiessentfailed?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l4#uuid VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL4A#uuid}
  */
  readonly uuid?: string;
}

export function visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL4TriggerStatsIncAToTerraform(struct?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL4TriggerStatsIncAOutputReference | VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL4TriggerStatsIncA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bw_rate_limit_exceed: cdktf.numberToTerraform(struct!.bwRateLimitExceed),
    concurrent_conn_exceed: cdktf.numberToTerraform(struct!.concurrentConnExceed),
    conn_rate_limit_drop: cdktf.numberToTerraform(struct!.connRateLimitDrop),
    conn_rate_limit_reset: cdktf.numberToTerraform(struct!.connRateLimitReset),
    connlimit_drop: cdktf.numberToTerraform(struct!.connlimitDrop),
    dns_policy_drop: cdktf.numberToTerraform(struct!.dnsPolicyDrop),
    l4_cps_exceed: cdktf.numberToTerraform(struct!.l4CpsExceed),
    l7_cps_exceed: cdktf.numberToTerraform(struct!.l7CpsExceed),
    nat_cps_exceed: cdktf.numberToTerraform(struct!.natCpsExceed),
    no_resourse_drop: cdktf.numberToTerraform(struct!.noResourseDrop),
    smart_nat_id_mismatch: cdktf.numberToTerraform(struct!.smartNatIdMismatch),
    snat_fail: cdktf.numberToTerraform(struct!.snatFail),
    snat_icmp_error_process: cdktf.numberToTerraform(struct!.snatIcmpErrorProcess),
    snat_icmp_no_match: cdktf.numberToTerraform(struct!.snatIcmpNoMatch),
    snat_no_fwd_route: cdktf.numberToTerraform(struct!.snatNoFwdRoute),
    snat_no_rev_route: cdktf.numberToTerraform(struct!.snatNoRevRoute),
    ssl_cps_exceed: cdktf.numberToTerraform(struct!.sslCpsExceed),
    ssl_tpt_exceed: cdktf.numberToTerraform(struct!.sslTptExceed),
    svr_syn_handshake_fail: cdktf.numberToTerraform(struct!.svrSynHandshakeFail),
    svrselfail: cdktf.numberToTerraform(struct!.svrselfail),
    synattack: cdktf.numberToTerraform(struct!.synattack),
    syncookiescheckfailed: cdktf.numberToTerraform(struct!.syncookiescheckfailed),
    syncookiessentfailed: cdktf.numberToTerraform(struct!.syncookiessentfailed),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL4TriggerStatsIncAToHclTerraform(struct?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL4TriggerStatsIncAOutputReference | VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL4TriggerStatsIncA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bw_rate_limit_exceed: {
      value: cdktf.numberToHclTerraform(struct!.bwRateLimitExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    concurrent_conn_exceed: {
      value: cdktf.numberToHclTerraform(struct!.concurrentConnExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    conn_rate_limit_drop: {
      value: cdktf.numberToHclTerraform(struct!.connRateLimitDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    conn_rate_limit_reset: {
      value: cdktf.numberToHclTerraform(struct!.connRateLimitReset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    connlimit_drop: {
      value: cdktf.numberToHclTerraform(struct!.connlimitDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_policy_drop: {
      value: cdktf.numberToHclTerraform(struct!.dnsPolicyDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    l4_cps_exceed: {
      value: cdktf.numberToHclTerraform(struct!.l4CpsExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    l7_cps_exceed: {
      value: cdktf.numberToHclTerraform(struct!.l7CpsExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nat_cps_exceed: {
      value: cdktf.numberToHclTerraform(struct!.natCpsExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_resourse_drop: {
      value: cdktf.numberToHclTerraform(struct!.noResourseDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    smart_nat_id_mismatch: {
      value: cdktf.numberToHclTerraform(struct!.smartNatIdMismatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    snat_fail: {
      value: cdktf.numberToHclTerraform(struct!.snatFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    snat_icmp_error_process: {
      value: cdktf.numberToHclTerraform(struct!.snatIcmpErrorProcess),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    snat_icmp_no_match: {
      value: cdktf.numberToHclTerraform(struct!.snatIcmpNoMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    snat_no_fwd_route: {
      value: cdktf.numberToHclTerraform(struct!.snatNoFwdRoute),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    snat_no_rev_route: {
      value: cdktf.numberToHclTerraform(struct!.snatNoRevRoute),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssl_cps_exceed: {
      value: cdktf.numberToHclTerraform(struct!.sslCpsExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssl_tpt_exceed: {
      value: cdktf.numberToHclTerraform(struct!.sslTptExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    svr_syn_handshake_fail: {
      value: cdktf.numberToHclTerraform(struct!.svrSynHandshakeFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    svrselfail: {
      value: cdktf.numberToHclTerraform(struct!.svrselfail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    synattack: {
      value: cdktf.numberToHclTerraform(struct!.synattack),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    syncookiescheckfailed: {
      value: cdktf.numberToHclTerraform(struct!.syncookiescheckfailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    syncookiessentfailed: {
      value: cdktf.numberToHclTerraform(struct!.syncookiessentfailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL4TriggerStatsIncAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL4TriggerStatsIncA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bwRateLimitExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.bwRateLimitExceed = this._bwRateLimitExceed;
    }
    if (this._concurrentConnExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.concurrentConnExceed = this._concurrentConnExceed;
    }
    if (this._connRateLimitDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.connRateLimitDrop = this._connRateLimitDrop;
    }
    if (this._connRateLimitReset !== undefined) {
      hasAnyValues = true;
      internalValueResult.connRateLimitReset = this._connRateLimitReset;
    }
    if (this._connlimitDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.connlimitDrop = this._connlimitDrop;
    }
    if (this._dnsPolicyDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsPolicyDrop = this._dnsPolicyDrop;
    }
    if (this._l4CpsExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.l4CpsExceed = this._l4CpsExceed;
    }
    if (this._l7CpsExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.l7CpsExceed = this._l7CpsExceed;
    }
    if (this._natCpsExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.natCpsExceed = this._natCpsExceed;
    }
    if (this._noResourseDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.noResourseDrop = this._noResourseDrop;
    }
    if (this._smartNatIdMismatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.smartNatIdMismatch = this._smartNatIdMismatch;
    }
    if (this._snatFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.snatFail = this._snatFail;
    }
    if (this._snatIcmpErrorProcess !== undefined) {
      hasAnyValues = true;
      internalValueResult.snatIcmpErrorProcess = this._snatIcmpErrorProcess;
    }
    if (this._snatIcmpNoMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.snatIcmpNoMatch = this._snatIcmpNoMatch;
    }
    if (this._snatNoFwdRoute !== undefined) {
      hasAnyValues = true;
      internalValueResult.snatNoFwdRoute = this._snatNoFwdRoute;
    }
    if (this._snatNoRevRoute !== undefined) {
      hasAnyValues = true;
      internalValueResult.snatNoRevRoute = this._snatNoRevRoute;
    }
    if (this._sslCpsExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslCpsExceed = this._sslCpsExceed;
    }
    if (this._sslTptExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslTptExceed = this._sslTptExceed;
    }
    if (this._svrSynHandshakeFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.svrSynHandshakeFail = this._svrSynHandshakeFail;
    }
    if (this._svrselfail !== undefined) {
      hasAnyValues = true;
      internalValueResult.svrselfail = this._svrselfail;
    }
    if (this._synattack !== undefined) {
      hasAnyValues = true;
      internalValueResult.synattack = this._synattack;
    }
    if (this._syncookiescheckfailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncookiescheckfailed = this._syncookiescheckfailed;
    }
    if (this._syncookiessentfailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncookiessentfailed = this._syncookiessentfailed;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL4TriggerStatsIncA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bwRateLimitExceed = undefined;
      this._concurrentConnExceed = undefined;
      this._connRateLimitDrop = undefined;
      this._connRateLimitReset = undefined;
      this._connlimitDrop = undefined;
      this._dnsPolicyDrop = undefined;
      this._l4CpsExceed = undefined;
      this._l7CpsExceed = undefined;
      this._natCpsExceed = undefined;
      this._noResourseDrop = undefined;
      this._smartNatIdMismatch = undefined;
      this._snatFail = undefined;
      this._snatIcmpErrorProcess = undefined;
      this._snatIcmpNoMatch = undefined;
      this._snatNoFwdRoute = undefined;
      this._snatNoRevRoute = undefined;
      this._sslCpsExceed = undefined;
      this._sslTptExceed = undefined;
      this._svrSynHandshakeFail = undefined;
      this._svrselfail = undefined;
      this._synattack = undefined;
      this._syncookiescheckfailed = undefined;
      this._syncookiessentfailed = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bwRateLimitExceed = value.bwRateLimitExceed;
      this._concurrentConnExceed = value.concurrentConnExceed;
      this._connRateLimitDrop = value.connRateLimitDrop;
      this._connRateLimitReset = value.connRateLimitReset;
      this._connlimitDrop = value.connlimitDrop;
      this._dnsPolicyDrop = value.dnsPolicyDrop;
      this._l4CpsExceed = value.l4CpsExceed;
      this._l7CpsExceed = value.l7CpsExceed;
      this._natCpsExceed = value.natCpsExceed;
      this._noResourseDrop = value.noResourseDrop;
      this._smartNatIdMismatch = value.smartNatIdMismatch;
      this._snatFail = value.snatFail;
      this._snatIcmpErrorProcess = value.snatIcmpErrorProcess;
      this._snatIcmpNoMatch = value.snatIcmpNoMatch;
      this._snatNoFwdRoute = value.snatNoFwdRoute;
      this._snatNoRevRoute = value.snatNoRevRoute;
      this._sslCpsExceed = value.sslCpsExceed;
      this._sslTptExceed = value.sslTptExceed;
      this._svrSynHandshakeFail = value.svrSynHandshakeFail;
      this._svrselfail = value.svrselfail;
      this._synattack = value.synattack;
      this._syncookiescheckfailed = value.syncookiescheckfailed;
      this._syncookiessentfailed = value.syncookiessentfailed;
      this._uuid = value.uuid;
    }
  }

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
}
export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL4TriggerStatsRateA {
  /**
  * Enable automatic packet-capture for BW-Limit Exceed drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l4#bw_rate_limit_exceed VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL4A#bw_rate_limit_exceed}
  */
  readonly bwRateLimitExceed?: number;
  /**
  * Enable automatic packet-capture for L3V Conn Limit Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l4#concurrent_conn_exceed VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL4A#concurrent_conn_exceed}
  */
  readonly concurrentConnExceed?: number;
  /**
  * Enable automatic packet-capture for Conn rate limit drops
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l4#conn_rate_limit_drop VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL4A#conn_rate_limit_drop}
  */
  readonly connRateLimitDrop?: number;
  /**
  * Enable automatic packet-capture for Conn rate limit resets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l4#conn_rate_limit_reset VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL4A#conn_rate_limit_reset}
  */
  readonly connRateLimitReset?: number;
  /**
  * Enable automatic packet-capture for Conn Limit drops
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l4#connlimit_drop VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL4A#connlimit_drop}
  */
  readonly connlimitDrop?: number;
  /**
  * Enable automatic packet-capture for DNS Policy Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l4#dns_policy_drop VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL4A#dns_policy_drop}
  */
  readonly dnsPolicyDrop?: number;
  /**
  * Time in seconds to look for the anomaly, default is 60
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l4#duration VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL4A#duration}
  */
  readonly duration?: number;
  /**
  * Enable automatic packet-capture for L4 CPS exceed drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l4#l4_cps_exceed VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL4A#l4_cps_exceed}
  */
  readonly l4CpsExceed?: number;
  /**
  * Enable automatic packet-capture for L7 CPS exceed drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l4#l7_cps_exceed VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL4A#l7_cps_exceed}
  */
  readonly l7CpsExceed?: number;
  /**
  * Enable automatic packet-capture for NAT CPS exceed drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l4#nat_cps_exceed VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL4A#nat_cps_exceed}
  */
  readonly natCpsExceed?: number;
  /**
  * Enable automatic packet-capture for No resource drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l4#no_resourse_drop VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL4A#no_resourse_drop}
  */
  readonly noResourseDrop?: number;
  /**
  * Enable automatic packet-capture for Auto NAT id mismatch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l4#smart_nat_id_mismatch VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL4A#smart_nat_id_mismatch}
  */
  readonly smartNatIdMismatch?: number;
  /**
  * Enable automatic packet-capture for Source NAT failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l4#snat_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL4A#snat_fail}
  */
  readonly snatFail?: number;
  /**
  * Enable automatic packet-capture for Source NAT ICMP Process
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l4#snat_icmp_error_process VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL4A#snat_icmp_error_process}
  */
  readonly snatIcmpErrorProcess?: number;
  /**
  * Enable automatic packet-capture for Source NAT ICMP No Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l4#snat_icmp_no_match VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL4A#snat_icmp_no_match}
  */
  readonly snatIcmpNoMatch?: number;
  /**
  * Enable automatic packet-capture for Source NAT no fwd route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l4#snat_no_fwd_route VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL4A#snat_no_fwd_route}
  */
  readonly snatNoFwdRoute?: number;
  /**
  * Enable automatic packet-capture for Source NAT no rev route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l4#snat_no_rev_route VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL4A#snat_no_rev_route}
  */
  readonly snatNoRevRoute?: number;
  /**
  * Enable automatic packet-capture for SSL CPS exceed drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l4#ssl_cps_exceed VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL4A#ssl_cps_exceed}
  */
  readonly sslCpsExceed?: number;
  /**
  * Enable automatic packet-capture for SSL TPT exceed drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l4#ssl_tpt_exceed VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL4A#ssl_tpt_exceed}
  */
  readonly sslTptExceed?: number;
  /**
  * Enable automatic packet-capture for L4 server handshake fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l4#svr_syn_handshake_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL4A#svr_syn_handshake_fail}
  */
  readonly svrSynHandshakeFail?: number;
  /**
  * Enable automatic packet-capture for Server sel failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l4#svrselfail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL4A#svrselfail}
  */
  readonly svrselfail?: number;
  /**
  * Enable automatic packet-capture for L4 SYN attack
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l4#synattack VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL4A#synattack}
  */
  readonly synattack?: number;
  /**
  * Enable automatic packet-capture for TCP SYN cookie failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l4#syncookiescheckfailed VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL4A#syncookiescheckfailed}
  */
  readonly syncookiescheckfailed?: number;
  /**
  * Enable automatic packet-capture for TCP SYN cookie snt fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l4#syncookiessentfailed VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL4A#syncookiessentfailed}
  */
  readonly syncookiessentfailed?: number;
  /**
  * Set the threshold to the number of times greater than the previous duration to start the capture, default is 5
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l4#threshold_exceeded_by VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL4A#threshold_exceeded_by}
  */
  readonly thresholdExceededBy?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l4#uuid VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL4A#uuid}
  */
  readonly uuid?: string;
}

export function visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL4TriggerStatsRateAToTerraform(struct?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL4TriggerStatsRateAOutputReference | VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL4TriggerStatsRateA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bw_rate_limit_exceed: cdktf.numberToTerraform(struct!.bwRateLimitExceed),
    concurrent_conn_exceed: cdktf.numberToTerraform(struct!.concurrentConnExceed),
    conn_rate_limit_drop: cdktf.numberToTerraform(struct!.connRateLimitDrop),
    conn_rate_limit_reset: cdktf.numberToTerraform(struct!.connRateLimitReset),
    connlimit_drop: cdktf.numberToTerraform(struct!.connlimitDrop),
    dns_policy_drop: cdktf.numberToTerraform(struct!.dnsPolicyDrop),
    duration: cdktf.numberToTerraform(struct!.duration),
    l4_cps_exceed: cdktf.numberToTerraform(struct!.l4CpsExceed),
    l7_cps_exceed: cdktf.numberToTerraform(struct!.l7CpsExceed),
    nat_cps_exceed: cdktf.numberToTerraform(struct!.natCpsExceed),
    no_resourse_drop: cdktf.numberToTerraform(struct!.noResourseDrop),
    smart_nat_id_mismatch: cdktf.numberToTerraform(struct!.smartNatIdMismatch),
    snat_fail: cdktf.numberToTerraform(struct!.snatFail),
    snat_icmp_error_process: cdktf.numberToTerraform(struct!.snatIcmpErrorProcess),
    snat_icmp_no_match: cdktf.numberToTerraform(struct!.snatIcmpNoMatch),
    snat_no_fwd_route: cdktf.numberToTerraform(struct!.snatNoFwdRoute),
    snat_no_rev_route: cdktf.numberToTerraform(struct!.snatNoRevRoute),
    ssl_cps_exceed: cdktf.numberToTerraform(struct!.sslCpsExceed),
    ssl_tpt_exceed: cdktf.numberToTerraform(struct!.sslTptExceed),
    svr_syn_handshake_fail: cdktf.numberToTerraform(struct!.svrSynHandshakeFail),
    svrselfail: cdktf.numberToTerraform(struct!.svrselfail),
    synattack: cdktf.numberToTerraform(struct!.synattack),
    syncookiescheckfailed: cdktf.numberToTerraform(struct!.syncookiescheckfailed),
    syncookiessentfailed: cdktf.numberToTerraform(struct!.syncookiessentfailed),
    threshold_exceeded_by: cdktf.numberToTerraform(struct!.thresholdExceededBy),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL4TriggerStatsRateAToHclTerraform(struct?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL4TriggerStatsRateAOutputReference | VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL4TriggerStatsRateA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bw_rate_limit_exceed: {
      value: cdktf.numberToHclTerraform(struct!.bwRateLimitExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    concurrent_conn_exceed: {
      value: cdktf.numberToHclTerraform(struct!.concurrentConnExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    conn_rate_limit_drop: {
      value: cdktf.numberToHclTerraform(struct!.connRateLimitDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    conn_rate_limit_reset: {
      value: cdktf.numberToHclTerraform(struct!.connRateLimitReset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    connlimit_drop: {
      value: cdktf.numberToHclTerraform(struct!.connlimitDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_policy_drop: {
      value: cdktf.numberToHclTerraform(struct!.dnsPolicyDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    duration: {
      value: cdktf.numberToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    l4_cps_exceed: {
      value: cdktf.numberToHclTerraform(struct!.l4CpsExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    l7_cps_exceed: {
      value: cdktf.numberToHclTerraform(struct!.l7CpsExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nat_cps_exceed: {
      value: cdktf.numberToHclTerraform(struct!.natCpsExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_resourse_drop: {
      value: cdktf.numberToHclTerraform(struct!.noResourseDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    smart_nat_id_mismatch: {
      value: cdktf.numberToHclTerraform(struct!.smartNatIdMismatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    snat_fail: {
      value: cdktf.numberToHclTerraform(struct!.snatFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    snat_icmp_error_process: {
      value: cdktf.numberToHclTerraform(struct!.snatIcmpErrorProcess),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    snat_icmp_no_match: {
      value: cdktf.numberToHclTerraform(struct!.snatIcmpNoMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    snat_no_fwd_route: {
      value: cdktf.numberToHclTerraform(struct!.snatNoFwdRoute),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    snat_no_rev_route: {
      value: cdktf.numberToHclTerraform(struct!.snatNoRevRoute),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssl_cps_exceed: {
      value: cdktf.numberToHclTerraform(struct!.sslCpsExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssl_tpt_exceed: {
      value: cdktf.numberToHclTerraform(struct!.sslTptExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    svr_syn_handshake_fail: {
      value: cdktf.numberToHclTerraform(struct!.svrSynHandshakeFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    svrselfail: {
      value: cdktf.numberToHclTerraform(struct!.svrselfail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    synattack: {
      value: cdktf.numberToHclTerraform(struct!.synattack),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    syncookiescheckfailed: {
      value: cdktf.numberToHclTerraform(struct!.syncookiescheckfailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    syncookiessentfailed: {
      value: cdktf.numberToHclTerraform(struct!.syncookiessentfailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    threshold_exceeded_by: {
      value: cdktf.numberToHclTerraform(struct!.thresholdExceededBy),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL4TriggerStatsRateAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL4TriggerStatsRateA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bwRateLimitExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.bwRateLimitExceed = this._bwRateLimitExceed;
    }
    if (this._concurrentConnExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.concurrentConnExceed = this._concurrentConnExceed;
    }
    if (this._connRateLimitDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.connRateLimitDrop = this._connRateLimitDrop;
    }
    if (this._connRateLimitReset !== undefined) {
      hasAnyValues = true;
      internalValueResult.connRateLimitReset = this._connRateLimitReset;
    }
    if (this._connlimitDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.connlimitDrop = this._connlimitDrop;
    }
    if (this._dnsPolicyDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsPolicyDrop = this._dnsPolicyDrop;
    }
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._l4CpsExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.l4CpsExceed = this._l4CpsExceed;
    }
    if (this._l7CpsExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.l7CpsExceed = this._l7CpsExceed;
    }
    if (this._natCpsExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.natCpsExceed = this._natCpsExceed;
    }
    if (this._noResourseDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.noResourseDrop = this._noResourseDrop;
    }
    if (this._smartNatIdMismatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.smartNatIdMismatch = this._smartNatIdMismatch;
    }
    if (this._snatFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.snatFail = this._snatFail;
    }
    if (this._snatIcmpErrorProcess !== undefined) {
      hasAnyValues = true;
      internalValueResult.snatIcmpErrorProcess = this._snatIcmpErrorProcess;
    }
    if (this._snatIcmpNoMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.snatIcmpNoMatch = this._snatIcmpNoMatch;
    }
    if (this._snatNoFwdRoute !== undefined) {
      hasAnyValues = true;
      internalValueResult.snatNoFwdRoute = this._snatNoFwdRoute;
    }
    if (this._snatNoRevRoute !== undefined) {
      hasAnyValues = true;
      internalValueResult.snatNoRevRoute = this._snatNoRevRoute;
    }
    if (this._sslCpsExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslCpsExceed = this._sslCpsExceed;
    }
    if (this._sslTptExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslTptExceed = this._sslTptExceed;
    }
    if (this._svrSynHandshakeFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.svrSynHandshakeFail = this._svrSynHandshakeFail;
    }
    if (this._svrselfail !== undefined) {
      hasAnyValues = true;
      internalValueResult.svrselfail = this._svrselfail;
    }
    if (this._synattack !== undefined) {
      hasAnyValues = true;
      internalValueResult.synattack = this._synattack;
    }
    if (this._syncookiescheckfailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncookiescheckfailed = this._syncookiescheckfailed;
    }
    if (this._syncookiessentfailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncookiessentfailed = this._syncookiessentfailed;
    }
    if (this._thresholdExceededBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdExceededBy = this._thresholdExceededBy;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL4TriggerStatsRateA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bwRateLimitExceed = undefined;
      this._concurrentConnExceed = undefined;
      this._connRateLimitDrop = undefined;
      this._connRateLimitReset = undefined;
      this._connlimitDrop = undefined;
      this._dnsPolicyDrop = undefined;
      this._duration = undefined;
      this._l4CpsExceed = undefined;
      this._l7CpsExceed = undefined;
      this._natCpsExceed = undefined;
      this._noResourseDrop = undefined;
      this._smartNatIdMismatch = undefined;
      this._snatFail = undefined;
      this._snatIcmpErrorProcess = undefined;
      this._snatIcmpNoMatch = undefined;
      this._snatNoFwdRoute = undefined;
      this._snatNoRevRoute = undefined;
      this._sslCpsExceed = undefined;
      this._sslTptExceed = undefined;
      this._svrSynHandshakeFail = undefined;
      this._svrselfail = undefined;
      this._synattack = undefined;
      this._syncookiescheckfailed = undefined;
      this._syncookiessentfailed = undefined;
      this._thresholdExceededBy = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bwRateLimitExceed = value.bwRateLimitExceed;
      this._concurrentConnExceed = value.concurrentConnExceed;
      this._connRateLimitDrop = value.connRateLimitDrop;
      this._connRateLimitReset = value.connRateLimitReset;
      this._connlimitDrop = value.connlimitDrop;
      this._dnsPolicyDrop = value.dnsPolicyDrop;
      this._duration = value.duration;
      this._l4CpsExceed = value.l4CpsExceed;
      this._l7CpsExceed = value.l7CpsExceed;
      this._natCpsExceed = value.natCpsExceed;
      this._noResourseDrop = value.noResourseDrop;
      this._smartNatIdMismatch = value.smartNatIdMismatch;
      this._snatFail = value.snatFail;
      this._snatIcmpErrorProcess = value.snatIcmpErrorProcess;
      this._snatIcmpNoMatch = value.snatIcmpNoMatch;
      this._snatNoFwdRoute = value.snatNoFwdRoute;
      this._snatNoRevRoute = value.snatNoRevRoute;
      this._sslCpsExceed = value.sslCpsExceed;
      this._sslTptExceed = value.sslTptExceed;
      this._svrSynHandshakeFail = value.svrSynHandshakeFail;
      this._svrselfail = value.svrselfail;
      this._synattack = value.synattack;
      this._syncookiescheckfailed = value.syncookiescheckfailed;
      this._syncookiessentfailed = value.syncookiessentfailed;
      this._thresholdExceededBy = value.thresholdExceededBy;
      this._uuid = value.uuid;
    }
  }

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

  // duration - computed: false, optional: true, required: false
  private _duration?: number; 
  public get duration() {
    return this.getNumberAttribute('duration');
  }
  public set duration(value: number) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
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

  // threshold_exceeded_by - computed: false, optional: true, required: false
  private _thresholdExceededBy?: number; 
  public get thresholdExceededBy() {
    return this.getNumberAttribute('threshold_exceeded_by');
  }
  public set thresholdExceededBy(value: number) {
    this._thresholdExceededBy = value;
  }
  public resetThresholdExceededBy() {
    this._thresholdExceededBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdExceededByInput() {
    return this._thresholdExceededBy;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l4 thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l4}
*/
export class VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL4A extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l4";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL4A resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL4A to import
  * @param importFromId The id of the existing VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL4A that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l4#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL4A to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l4", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l4 thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l4} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL4AConfig
  */
  public constructor(scope: Construct, id: string, config: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL4AConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l4',
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
    this._id = config.id;
    this._templateName = config.templateName;
    this._uuid = config.uuid;
    this._triggerStatsInc.internalValue = config.triggerStatsInc;
    this._triggerStatsRate.internalValue = config.triggerStatsRate;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // trigger_stats_inc - computed: false, optional: true, required: false
  private _triggerStatsInc = new VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL4TriggerStatsIncAOutputReference(this, "trigger_stats_inc");
  public get triggerStatsInc() {
    return this._triggerStatsInc;
  }
  public putTriggerStatsInc(value: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL4TriggerStatsIncA) {
    this._triggerStatsInc.internalValue = value;
  }
  public resetTriggerStatsInc() {
    this._triggerStatsInc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerStatsIncInput() {
    return this._triggerStatsInc.internalValue;
  }

  // trigger_stats_rate - computed: false, optional: true, required: false
  private _triggerStatsRate = new VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL4TriggerStatsRateAOutputReference(this, "trigger_stats_rate");
  public get triggerStatsRate() {
    return this._triggerStatsRate;
  }
  public putTriggerStatsRate(value: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL4TriggerStatsRateA) {
    this._triggerStatsRate.internalValue = value;
  }
  public resetTriggerStatsRate() {
    this._triggerStatsRate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerStatsRateInput() {
    return this._triggerStatsRate.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      template_name: cdktf.stringToTerraform(this._templateName),
      uuid: cdktf.stringToTerraform(this._uuid),
      trigger_stats_inc: visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL4TriggerStatsIncAToTerraform(this._triggerStatsInc.internalValue),
      trigger_stats_rate: visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL4TriggerStatsRateAToTerraform(this._triggerStatsRate.internalValue),
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
      trigger_stats_inc: {
        value: visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL4TriggerStatsIncAToHclTerraform(this._triggerStatsInc.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL4TriggerStatsIncAList",
      },
      trigger_stats_rate: {
        value: visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL4TriggerStatsRateAToHclTerraform(this._triggerStatsRate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL4TriggerStatsRateAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
