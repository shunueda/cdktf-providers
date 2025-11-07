// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_dns_vport_tmpl
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VisibilityPacketCaptureObjectTemplatesDnsVportTmplConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specify name of the capture-config to use with this template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_dns_vport_tmpl#capture_config VisibilityPacketCaptureObjectTemplatesDnsVportTmpl#capture_config}
  */
  readonly captureConfig?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_dns_vport_tmpl#id VisibilityPacketCaptureObjectTemplatesDnsVportTmpl#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Packet Capture Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_dns_vport_tmpl#name VisibilityPacketCaptureObjectTemplatesDnsVportTmpl#name}
  */
  readonly name: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_dns_vport_tmpl#user_tag VisibilityPacketCaptureObjectTemplatesDnsVportTmpl#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_dns_vport_tmpl#uuid VisibilityPacketCaptureObjectTemplatesDnsVportTmpl#uuid}
  */
  readonly uuid?: string;
  /**
  * trigger_stats_inc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_dns_vport_tmpl#trigger_stats_inc VisibilityPacketCaptureObjectTemplatesDnsVportTmpl#trigger_stats_inc}
  */
  readonly triggerStatsInc?: VisibilityPacketCaptureObjectTemplatesDnsVportTmplTriggerStatsInc;
  /**
  * trigger_stats_rate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_dns_vport_tmpl#trigger_stats_rate VisibilityPacketCaptureObjectTemplatesDnsVportTmpl#trigger_stats_rate}
  */
  readonly triggerStatsRate?: VisibilityPacketCaptureObjectTemplatesDnsVportTmplTriggerStatsRate;
  /**
  * trigger_stats_severity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_dns_vport_tmpl#trigger_stats_severity VisibilityPacketCaptureObjectTemplatesDnsVportTmpl#trigger_stats_severity}
  */
  readonly triggerStatsSeverity?: VisibilityPacketCaptureObjectTemplatesDnsVportTmplTriggerStatsSeverity;
}
export interface VisibilityPacketCaptureObjectTemplatesDnsVportTmplTriggerStatsInc {
  /**
  * Enable automatic packet-capture for counters DNS Filter Class ANY Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_dns_vport_tmpl#dns_filter_class_any_drop VisibilityPacketCaptureObjectTemplatesDnsVportTmpl#dns_filter_class_any_drop}
  */
  readonly dnsFilterClassAnyDrop?: number;
  /**
  * Enable automatic packet-capture for counters DNS Filter Class CHAOS Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_dns_vport_tmpl#dns_filter_class_chaos_drop VisibilityPacketCaptureObjectTemplatesDnsVportTmpl#dns_filter_class_chaos_drop}
  */
  readonly dnsFilterClassChaosDrop?: number;
  /**
  * Enable automatic packet-capture for counters DNS Filter Class HESIOD Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_dns_vport_tmpl#dns_filter_class_hesiod_drop VisibilityPacketCaptureObjectTemplatesDnsVportTmpl#dns_filter_class_hesiod_drop}
  */
  readonly dnsFilterClassHesiodDrop?: number;
  /**
  * Enable automatic packet-capture for counters DNS Filter Class INTERNET Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_dns_vport_tmpl#dns_filter_class_internet_drop VisibilityPacketCaptureObjectTemplatesDnsVportTmpl#dns_filter_class_internet_drop}
  */
  readonly dnsFilterClassInternetDrop?: number;
  /**
  * Enable automatic packet-capture for counters DNS Filter Class NONE Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_dns_vport_tmpl#dns_filter_class_none_drop VisibilityPacketCaptureObjectTemplatesDnsVportTmpl#dns_filter_class_none_drop}
  */
  readonly dnsFilterClassNoneDrop?: number;
  /**
  * Enable automatic packet-capture for counters DNS Filter Class OTHER Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_dns_vport_tmpl#dns_filter_class_others_drop VisibilityPacketCaptureObjectTemplatesDnsVportTmpl#dns_filter_class_others_drop}
  */
  readonly dnsFilterClassOthersDrop?: number;
  /**
  * Enable automatic packet-capture for counters DNS Filter Type A Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_dns_vport_tmpl#dns_filter_type_a_drop VisibilityPacketCaptureObjectTemplatesDnsVportTmpl#dns_filter_type_a_drop}
  */
  readonly dnsFilterTypeADrop?: number;
  /**
  * Enable automatic packet-capture for counters DNS Filter Type AAAA Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_dns_vport_tmpl#dns_filter_type_aaaa_drop VisibilityPacketCaptureObjectTemplatesDnsVportTmpl#dns_filter_type_aaaa_drop}
  */
  readonly dnsFilterTypeAaaaDrop?: number;
  /**
  * Enable automatic packet-capture for counters DNS Filter Type Any Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_dns_vport_tmpl#dns_filter_type_any_drop VisibilityPacketCaptureObjectTemplatesDnsVportTmpl#dns_filter_type_any_drop}
  */
  readonly dnsFilterTypeAnyDrop?: number;
  /**
  * Enable automatic packet-capture for counters DNS Filter Type CNAME Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_dns_vport_tmpl#dns_filter_type_cname_drop VisibilityPacketCaptureObjectTemplatesDnsVportTmpl#dns_filter_type_cname_drop}
  */
  readonly dnsFilterTypeCnameDrop?: number;
  /**
  * Enable automatic packet-capture for counters DNS Filter Type MX Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_dns_vport_tmpl#dns_filter_type_mx_drop VisibilityPacketCaptureObjectTemplatesDnsVportTmpl#dns_filter_type_mx_drop}
  */
  readonly dnsFilterTypeMxDrop?: number;
  /**
  * Enable automatic packet-capture for counters DNS Filter Type NS Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_dns_vport_tmpl#dns_filter_type_ns_drop VisibilityPacketCaptureObjectTemplatesDnsVportTmpl#dns_filter_type_ns_drop}
  */
  readonly dnsFilterTypeNsDrop?: number;
  /**
  * Enable automatic packet-capture for counters DNS Filter Type OTHERS Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_dns_vport_tmpl#dns_filter_type_others_drop VisibilityPacketCaptureObjectTemplatesDnsVportTmpl#dns_filter_type_others_drop}
  */
  readonly dnsFilterTypeOthersDrop?: number;
  /**
  * Enable automatic packet-capture for counters DNS Filter Type PTR Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_dns_vport_tmpl#dns_filter_type_ptr_drop VisibilityPacketCaptureObjectTemplatesDnsVportTmpl#dns_filter_type_ptr_drop}
  */
  readonly dnsFilterTypePtrDrop?: number;
  /**
  * Enable automatic packet-capture for counters DNS Filter Type SOA Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_dns_vport_tmpl#dns_filter_type_soa_drop VisibilityPacketCaptureObjectTemplatesDnsVportTmpl#dns_filter_type_soa_drop}
  */
  readonly dnsFilterTypeSoaDrop?: number;
  /**
  * Enable automatic packet-capture for counters DNS Filter Type SRV Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_dns_vport_tmpl#dns_filter_type_srv_drop VisibilityPacketCaptureObjectTemplatesDnsVportTmpl#dns_filter_type_srv_drop}
  */
  readonly dnsFilterTypeSrvDrop?: number;
  /**
  * Enable automatic packet-capture for counters DNS Filter Type TXT Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_dns_vport_tmpl#dns_filter_type_txt_drop VisibilityPacketCaptureObjectTemplatesDnsVportTmpl#dns_filter_type_txt_drop}
  */
  readonly dnsFilterTypeTxtDrop?: number;
  /**
  * Enable automatic packet-capture for DNS RPZ Action Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_dns_vport_tmpl#dns_rpz_action_drop VisibilityPacketCaptureObjectTemplatesDnsVportTmpl#dns_rpz_action_drop}
  */
  readonly dnsRpzActionDrop?: number;
  /**
  * Enable automatic packet-capture for DNS Response-Rate-Limiting Bad FQDN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_dns_vport_tmpl#dnsrrl_bad_fqdn VisibilityPacketCaptureObjectTemplatesDnsVportTmpl#dnsrrl_bad_fqdn}
  */
  readonly dnsrrlBadFqdn?: number;
  /**
  * Enable automatic packet-capture for dns rrl drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_dns_vport_tmpl#dnsrrl_total_dropped VisibilityPacketCaptureObjectTemplatesDnsVportTmpl#dnsrrl_total_dropped}
  */
  readonly dnsrrlTotalDropped?: number;
  /**
  * Enable automatic packet-capture for gslb query bad
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_dns_vport_tmpl#gslb_query_bad VisibilityPacketCaptureObjectTemplatesDnsVportTmpl#gslb_query_bad}
  */
  readonly gslbQueryBad?: number;
  /**
  * Enable automatic packet-capture for gslb response bad
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_dns_vport_tmpl#gslb_response_bad VisibilityPacketCaptureObjectTemplatesDnsVportTmpl#gslb_response_bad}
  */
  readonly gslbResponseBad?: number;
  /**
  * Enable automatic packet-capture for response rcode type error receive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_dns_vport_tmpl#rcode_notimpl_receive VisibilityPacketCaptureObjectTemplatesDnsVportTmpl#rcode_notimpl_receive}
  */
  readonly rcodeNotimplReceive?: number;
  /**
  * Enable automatic packet-capture for rcode type error response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_dns_vport_tmpl#rcode_notimpl_response VisibilityPacketCaptureObjectTemplatesDnsVportTmpl#rcode_notimpl_response}
  */
  readonly rcodeNotimplResponse?: number;
  /**
  * Enable automatic packet-capture for counters Total DNS Filter Class Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_dns_vport_tmpl#total_dns_filter_class_drop VisibilityPacketCaptureObjectTemplatesDnsVportTmpl#total_dns_filter_class_drop}
  */
  readonly totalDnsFilterClassDrop?: number;
  /**
  * Enable automatic packet-capture for counters Total DNS Filter Type Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_dns_vport_tmpl#total_dns_filter_type_drop VisibilityPacketCaptureObjectTemplatesDnsVportTmpl#total_dns_filter_type_drop}
  */
  readonly totalDnsFilterTypeDrop?: number;
  /**
  * Enable automatic packet-capture for query filter drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_dns_vport_tmpl#total_filter_drop VisibilityPacketCaptureObjectTemplatesDnsVportTmpl#total_filter_drop}
  */
  readonly totalFilterDrop?: number;
  /**
  * Enable automatic packet-capture for query too long drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_dns_vport_tmpl#total_max_query_len_drop VisibilityPacketCaptureObjectTemplatesDnsVportTmpl#total_max_query_len_drop}
  */
  readonly totalMaxQueryLenDrop?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_dns_vport_tmpl#uuid VisibilityPacketCaptureObjectTemplatesDnsVportTmpl#uuid}
  */
  readonly uuid?: string;
}

export function visibilityPacketCaptureObjectTemplatesDnsVportTmplTriggerStatsIncToTerraform(struct?: VisibilityPacketCaptureObjectTemplatesDnsVportTmplTriggerStatsIncOutputReference | VisibilityPacketCaptureObjectTemplatesDnsVportTmplTriggerStatsInc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_filter_class_any_drop: cdktf.numberToTerraform(struct!.dnsFilterClassAnyDrop),
    dns_filter_class_chaos_drop: cdktf.numberToTerraform(struct!.dnsFilterClassChaosDrop),
    dns_filter_class_hesiod_drop: cdktf.numberToTerraform(struct!.dnsFilterClassHesiodDrop),
    dns_filter_class_internet_drop: cdktf.numberToTerraform(struct!.dnsFilterClassInternetDrop),
    dns_filter_class_none_drop: cdktf.numberToTerraform(struct!.dnsFilterClassNoneDrop),
    dns_filter_class_others_drop: cdktf.numberToTerraform(struct!.dnsFilterClassOthersDrop),
    dns_filter_type_a_drop: cdktf.numberToTerraform(struct!.dnsFilterTypeADrop),
    dns_filter_type_aaaa_drop: cdktf.numberToTerraform(struct!.dnsFilterTypeAaaaDrop),
    dns_filter_type_any_drop: cdktf.numberToTerraform(struct!.dnsFilterTypeAnyDrop),
    dns_filter_type_cname_drop: cdktf.numberToTerraform(struct!.dnsFilterTypeCnameDrop),
    dns_filter_type_mx_drop: cdktf.numberToTerraform(struct!.dnsFilterTypeMxDrop),
    dns_filter_type_ns_drop: cdktf.numberToTerraform(struct!.dnsFilterTypeNsDrop),
    dns_filter_type_others_drop: cdktf.numberToTerraform(struct!.dnsFilterTypeOthersDrop),
    dns_filter_type_ptr_drop: cdktf.numberToTerraform(struct!.dnsFilterTypePtrDrop),
    dns_filter_type_soa_drop: cdktf.numberToTerraform(struct!.dnsFilterTypeSoaDrop),
    dns_filter_type_srv_drop: cdktf.numberToTerraform(struct!.dnsFilterTypeSrvDrop),
    dns_filter_type_txt_drop: cdktf.numberToTerraform(struct!.dnsFilterTypeTxtDrop),
    dns_rpz_action_drop: cdktf.numberToTerraform(struct!.dnsRpzActionDrop),
    dnsrrl_bad_fqdn: cdktf.numberToTerraform(struct!.dnsrrlBadFqdn),
    dnsrrl_total_dropped: cdktf.numberToTerraform(struct!.dnsrrlTotalDropped),
    gslb_query_bad: cdktf.numberToTerraform(struct!.gslbQueryBad),
    gslb_response_bad: cdktf.numberToTerraform(struct!.gslbResponseBad),
    rcode_notimpl_receive: cdktf.numberToTerraform(struct!.rcodeNotimplReceive),
    rcode_notimpl_response: cdktf.numberToTerraform(struct!.rcodeNotimplResponse),
    total_dns_filter_class_drop: cdktf.numberToTerraform(struct!.totalDnsFilterClassDrop),
    total_dns_filter_type_drop: cdktf.numberToTerraform(struct!.totalDnsFilterTypeDrop),
    total_filter_drop: cdktf.numberToTerraform(struct!.totalFilterDrop),
    total_max_query_len_drop: cdktf.numberToTerraform(struct!.totalMaxQueryLenDrop),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function visibilityPacketCaptureObjectTemplatesDnsVportTmplTriggerStatsIncToHclTerraform(struct?: VisibilityPacketCaptureObjectTemplatesDnsVportTmplTriggerStatsIncOutputReference | VisibilityPacketCaptureObjectTemplatesDnsVportTmplTriggerStatsInc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns_filter_class_any_drop: {
      value: cdktf.numberToHclTerraform(struct!.dnsFilterClassAnyDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_filter_class_chaos_drop: {
      value: cdktf.numberToHclTerraform(struct!.dnsFilterClassChaosDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_filter_class_hesiod_drop: {
      value: cdktf.numberToHclTerraform(struct!.dnsFilterClassHesiodDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_filter_class_internet_drop: {
      value: cdktf.numberToHclTerraform(struct!.dnsFilterClassInternetDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_filter_class_none_drop: {
      value: cdktf.numberToHclTerraform(struct!.dnsFilterClassNoneDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_filter_class_others_drop: {
      value: cdktf.numberToHclTerraform(struct!.dnsFilterClassOthersDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_filter_type_a_drop: {
      value: cdktf.numberToHclTerraform(struct!.dnsFilterTypeADrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_filter_type_aaaa_drop: {
      value: cdktf.numberToHclTerraform(struct!.dnsFilterTypeAaaaDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_filter_type_any_drop: {
      value: cdktf.numberToHclTerraform(struct!.dnsFilterTypeAnyDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_filter_type_cname_drop: {
      value: cdktf.numberToHclTerraform(struct!.dnsFilterTypeCnameDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_filter_type_mx_drop: {
      value: cdktf.numberToHclTerraform(struct!.dnsFilterTypeMxDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_filter_type_ns_drop: {
      value: cdktf.numberToHclTerraform(struct!.dnsFilterTypeNsDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_filter_type_others_drop: {
      value: cdktf.numberToHclTerraform(struct!.dnsFilterTypeOthersDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_filter_type_ptr_drop: {
      value: cdktf.numberToHclTerraform(struct!.dnsFilterTypePtrDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_filter_type_soa_drop: {
      value: cdktf.numberToHclTerraform(struct!.dnsFilterTypeSoaDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_filter_type_srv_drop: {
      value: cdktf.numberToHclTerraform(struct!.dnsFilterTypeSrvDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_filter_type_txt_drop: {
      value: cdktf.numberToHclTerraform(struct!.dnsFilterTypeTxtDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_rpz_action_drop: {
      value: cdktf.numberToHclTerraform(struct!.dnsRpzActionDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dnsrrl_bad_fqdn: {
      value: cdktf.numberToHclTerraform(struct!.dnsrrlBadFqdn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dnsrrl_total_dropped: {
      value: cdktf.numberToHclTerraform(struct!.dnsrrlTotalDropped),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gslb_query_bad: {
      value: cdktf.numberToHclTerraform(struct!.gslbQueryBad),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gslb_response_bad: {
      value: cdktf.numberToHclTerraform(struct!.gslbResponseBad),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rcode_notimpl_receive: {
      value: cdktf.numberToHclTerraform(struct!.rcodeNotimplReceive),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rcode_notimpl_response: {
      value: cdktf.numberToHclTerraform(struct!.rcodeNotimplResponse),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_dns_filter_class_drop: {
      value: cdktf.numberToHclTerraform(struct!.totalDnsFilterClassDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_dns_filter_type_drop: {
      value: cdktf.numberToHclTerraform(struct!.totalDnsFilterTypeDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_filter_drop: {
      value: cdktf.numberToHclTerraform(struct!.totalFilterDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_max_query_len_drop: {
      value: cdktf.numberToHclTerraform(struct!.totalMaxQueryLenDrop),
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

export class VisibilityPacketCaptureObjectTemplatesDnsVportTmplTriggerStatsIncOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VisibilityPacketCaptureObjectTemplatesDnsVportTmplTriggerStatsInc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsFilterClassAnyDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsFilterClassAnyDrop = this._dnsFilterClassAnyDrop;
    }
    if (this._dnsFilterClassChaosDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsFilterClassChaosDrop = this._dnsFilterClassChaosDrop;
    }
    if (this._dnsFilterClassHesiodDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsFilterClassHesiodDrop = this._dnsFilterClassHesiodDrop;
    }
    if (this._dnsFilterClassInternetDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsFilterClassInternetDrop = this._dnsFilterClassInternetDrop;
    }
    if (this._dnsFilterClassNoneDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsFilterClassNoneDrop = this._dnsFilterClassNoneDrop;
    }
    if (this._dnsFilterClassOthersDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsFilterClassOthersDrop = this._dnsFilterClassOthersDrop;
    }
    if (this._dnsFilterTypeADrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsFilterTypeADrop = this._dnsFilterTypeADrop;
    }
    if (this._dnsFilterTypeAaaaDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsFilterTypeAaaaDrop = this._dnsFilterTypeAaaaDrop;
    }
    if (this._dnsFilterTypeAnyDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsFilterTypeAnyDrop = this._dnsFilterTypeAnyDrop;
    }
    if (this._dnsFilterTypeCnameDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsFilterTypeCnameDrop = this._dnsFilterTypeCnameDrop;
    }
    if (this._dnsFilterTypeMxDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsFilterTypeMxDrop = this._dnsFilterTypeMxDrop;
    }
    if (this._dnsFilterTypeNsDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsFilterTypeNsDrop = this._dnsFilterTypeNsDrop;
    }
    if (this._dnsFilterTypeOthersDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsFilterTypeOthersDrop = this._dnsFilterTypeOthersDrop;
    }
    if (this._dnsFilterTypePtrDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsFilterTypePtrDrop = this._dnsFilterTypePtrDrop;
    }
    if (this._dnsFilterTypeSoaDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsFilterTypeSoaDrop = this._dnsFilterTypeSoaDrop;
    }
    if (this._dnsFilterTypeSrvDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsFilterTypeSrvDrop = this._dnsFilterTypeSrvDrop;
    }
    if (this._dnsFilterTypeTxtDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsFilterTypeTxtDrop = this._dnsFilterTypeTxtDrop;
    }
    if (this._dnsRpzActionDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsRpzActionDrop = this._dnsRpzActionDrop;
    }
    if (this._dnsrrlBadFqdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsrrlBadFqdn = this._dnsrrlBadFqdn;
    }
    if (this._dnsrrlTotalDropped !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsrrlTotalDropped = this._dnsrrlTotalDropped;
    }
    if (this._gslbQueryBad !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbQueryBad = this._gslbQueryBad;
    }
    if (this._gslbResponseBad !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbResponseBad = this._gslbResponseBad;
    }
    if (this._rcodeNotimplReceive !== undefined) {
      hasAnyValues = true;
      internalValueResult.rcodeNotimplReceive = this._rcodeNotimplReceive;
    }
    if (this._rcodeNotimplResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.rcodeNotimplResponse = this._rcodeNotimplResponse;
    }
    if (this._totalDnsFilterClassDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalDnsFilterClassDrop = this._totalDnsFilterClassDrop;
    }
    if (this._totalDnsFilterTypeDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalDnsFilterTypeDrop = this._totalDnsFilterTypeDrop;
    }
    if (this._totalFilterDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalFilterDrop = this._totalFilterDrop;
    }
    if (this._totalMaxQueryLenDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalMaxQueryLenDrop = this._totalMaxQueryLenDrop;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VisibilityPacketCaptureObjectTemplatesDnsVportTmplTriggerStatsInc | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dnsFilterClassAnyDrop = undefined;
      this._dnsFilterClassChaosDrop = undefined;
      this._dnsFilterClassHesiodDrop = undefined;
      this._dnsFilterClassInternetDrop = undefined;
      this._dnsFilterClassNoneDrop = undefined;
      this._dnsFilterClassOthersDrop = undefined;
      this._dnsFilterTypeADrop = undefined;
      this._dnsFilterTypeAaaaDrop = undefined;
      this._dnsFilterTypeAnyDrop = undefined;
      this._dnsFilterTypeCnameDrop = undefined;
      this._dnsFilterTypeMxDrop = undefined;
      this._dnsFilterTypeNsDrop = undefined;
      this._dnsFilterTypeOthersDrop = undefined;
      this._dnsFilterTypePtrDrop = undefined;
      this._dnsFilterTypeSoaDrop = undefined;
      this._dnsFilterTypeSrvDrop = undefined;
      this._dnsFilterTypeTxtDrop = undefined;
      this._dnsRpzActionDrop = undefined;
      this._dnsrrlBadFqdn = undefined;
      this._dnsrrlTotalDropped = undefined;
      this._gslbQueryBad = undefined;
      this._gslbResponseBad = undefined;
      this._rcodeNotimplReceive = undefined;
      this._rcodeNotimplResponse = undefined;
      this._totalDnsFilterClassDrop = undefined;
      this._totalDnsFilterTypeDrop = undefined;
      this._totalFilterDrop = undefined;
      this._totalMaxQueryLenDrop = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dnsFilterClassAnyDrop = value.dnsFilterClassAnyDrop;
      this._dnsFilterClassChaosDrop = value.dnsFilterClassChaosDrop;
      this._dnsFilterClassHesiodDrop = value.dnsFilterClassHesiodDrop;
      this._dnsFilterClassInternetDrop = value.dnsFilterClassInternetDrop;
      this._dnsFilterClassNoneDrop = value.dnsFilterClassNoneDrop;
      this._dnsFilterClassOthersDrop = value.dnsFilterClassOthersDrop;
      this._dnsFilterTypeADrop = value.dnsFilterTypeADrop;
      this._dnsFilterTypeAaaaDrop = value.dnsFilterTypeAaaaDrop;
      this._dnsFilterTypeAnyDrop = value.dnsFilterTypeAnyDrop;
      this._dnsFilterTypeCnameDrop = value.dnsFilterTypeCnameDrop;
      this._dnsFilterTypeMxDrop = value.dnsFilterTypeMxDrop;
      this._dnsFilterTypeNsDrop = value.dnsFilterTypeNsDrop;
      this._dnsFilterTypeOthersDrop = value.dnsFilterTypeOthersDrop;
      this._dnsFilterTypePtrDrop = value.dnsFilterTypePtrDrop;
      this._dnsFilterTypeSoaDrop = value.dnsFilterTypeSoaDrop;
      this._dnsFilterTypeSrvDrop = value.dnsFilterTypeSrvDrop;
      this._dnsFilterTypeTxtDrop = value.dnsFilterTypeTxtDrop;
      this._dnsRpzActionDrop = value.dnsRpzActionDrop;
      this._dnsrrlBadFqdn = value.dnsrrlBadFqdn;
      this._dnsrrlTotalDropped = value.dnsrrlTotalDropped;
      this._gslbQueryBad = value.gslbQueryBad;
      this._gslbResponseBad = value.gslbResponseBad;
      this._rcodeNotimplReceive = value.rcodeNotimplReceive;
      this._rcodeNotimplResponse = value.rcodeNotimplResponse;
      this._totalDnsFilterClassDrop = value.totalDnsFilterClassDrop;
      this._totalDnsFilterTypeDrop = value.totalDnsFilterTypeDrop;
      this._totalFilterDrop = value.totalFilterDrop;
      this._totalMaxQueryLenDrop = value.totalMaxQueryLenDrop;
      this._uuid = value.uuid;
    }
  }

  // dns_filter_class_any_drop - computed: false, optional: true, required: false
  private _dnsFilterClassAnyDrop?: number; 
  public get dnsFilterClassAnyDrop() {
    return this.getNumberAttribute('dns_filter_class_any_drop');
  }
  public set dnsFilterClassAnyDrop(value: number) {
    this._dnsFilterClassAnyDrop = value;
  }
  public resetDnsFilterClassAnyDrop() {
    this._dnsFilterClassAnyDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsFilterClassAnyDropInput() {
    return this._dnsFilterClassAnyDrop;
  }

  // dns_filter_class_chaos_drop - computed: false, optional: true, required: false
  private _dnsFilterClassChaosDrop?: number; 
  public get dnsFilterClassChaosDrop() {
    return this.getNumberAttribute('dns_filter_class_chaos_drop');
  }
  public set dnsFilterClassChaosDrop(value: number) {
    this._dnsFilterClassChaosDrop = value;
  }
  public resetDnsFilterClassChaosDrop() {
    this._dnsFilterClassChaosDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsFilterClassChaosDropInput() {
    return this._dnsFilterClassChaosDrop;
  }

  // dns_filter_class_hesiod_drop - computed: false, optional: true, required: false
  private _dnsFilterClassHesiodDrop?: number; 
  public get dnsFilterClassHesiodDrop() {
    return this.getNumberAttribute('dns_filter_class_hesiod_drop');
  }
  public set dnsFilterClassHesiodDrop(value: number) {
    this._dnsFilterClassHesiodDrop = value;
  }
  public resetDnsFilterClassHesiodDrop() {
    this._dnsFilterClassHesiodDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsFilterClassHesiodDropInput() {
    return this._dnsFilterClassHesiodDrop;
  }

  // dns_filter_class_internet_drop - computed: false, optional: true, required: false
  private _dnsFilterClassInternetDrop?: number; 
  public get dnsFilterClassInternetDrop() {
    return this.getNumberAttribute('dns_filter_class_internet_drop');
  }
  public set dnsFilterClassInternetDrop(value: number) {
    this._dnsFilterClassInternetDrop = value;
  }
  public resetDnsFilterClassInternetDrop() {
    this._dnsFilterClassInternetDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsFilterClassInternetDropInput() {
    return this._dnsFilterClassInternetDrop;
  }

  // dns_filter_class_none_drop - computed: false, optional: true, required: false
  private _dnsFilterClassNoneDrop?: number; 
  public get dnsFilterClassNoneDrop() {
    return this.getNumberAttribute('dns_filter_class_none_drop');
  }
  public set dnsFilterClassNoneDrop(value: number) {
    this._dnsFilterClassNoneDrop = value;
  }
  public resetDnsFilterClassNoneDrop() {
    this._dnsFilterClassNoneDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsFilterClassNoneDropInput() {
    return this._dnsFilterClassNoneDrop;
  }

  // dns_filter_class_others_drop - computed: false, optional: true, required: false
  private _dnsFilterClassOthersDrop?: number; 
  public get dnsFilterClassOthersDrop() {
    return this.getNumberAttribute('dns_filter_class_others_drop');
  }
  public set dnsFilterClassOthersDrop(value: number) {
    this._dnsFilterClassOthersDrop = value;
  }
  public resetDnsFilterClassOthersDrop() {
    this._dnsFilterClassOthersDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsFilterClassOthersDropInput() {
    return this._dnsFilterClassOthersDrop;
  }

  // dns_filter_type_a_drop - computed: false, optional: true, required: false
  private _dnsFilterTypeADrop?: number; 
  public get dnsFilterTypeADrop() {
    return this.getNumberAttribute('dns_filter_type_a_drop');
  }
  public set dnsFilterTypeADrop(value: number) {
    this._dnsFilterTypeADrop = value;
  }
  public resetDnsFilterTypeADrop() {
    this._dnsFilterTypeADrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsFilterTypeADropInput() {
    return this._dnsFilterTypeADrop;
  }

  // dns_filter_type_aaaa_drop - computed: false, optional: true, required: false
  private _dnsFilterTypeAaaaDrop?: number; 
  public get dnsFilterTypeAaaaDrop() {
    return this.getNumberAttribute('dns_filter_type_aaaa_drop');
  }
  public set dnsFilterTypeAaaaDrop(value: number) {
    this._dnsFilterTypeAaaaDrop = value;
  }
  public resetDnsFilterTypeAaaaDrop() {
    this._dnsFilterTypeAaaaDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsFilterTypeAaaaDropInput() {
    return this._dnsFilterTypeAaaaDrop;
  }

  // dns_filter_type_any_drop - computed: false, optional: true, required: false
  private _dnsFilterTypeAnyDrop?: number; 
  public get dnsFilterTypeAnyDrop() {
    return this.getNumberAttribute('dns_filter_type_any_drop');
  }
  public set dnsFilterTypeAnyDrop(value: number) {
    this._dnsFilterTypeAnyDrop = value;
  }
  public resetDnsFilterTypeAnyDrop() {
    this._dnsFilterTypeAnyDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsFilterTypeAnyDropInput() {
    return this._dnsFilterTypeAnyDrop;
  }

  // dns_filter_type_cname_drop - computed: false, optional: true, required: false
  private _dnsFilterTypeCnameDrop?: number; 
  public get dnsFilterTypeCnameDrop() {
    return this.getNumberAttribute('dns_filter_type_cname_drop');
  }
  public set dnsFilterTypeCnameDrop(value: number) {
    this._dnsFilterTypeCnameDrop = value;
  }
  public resetDnsFilterTypeCnameDrop() {
    this._dnsFilterTypeCnameDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsFilterTypeCnameDropInput() {
    return this._dnsFilterTypeCnameDrop;
  }

  // dns_filter_type_mx_drop - computed: false, optional: true, required: false
  private _dnsFilterTypeMxDrop?: number; 
  public get dnsFilterTypeMxDrop() {
    return this.getNumberAttribute('dns_filter_type_mx_drop');
  }
  public set dnsFilterTypeMxDrop(value: number) {
    this._dnsFilterTypeMxDrop = value;
  }
  public resetDnsFilterTypeMxDrop() {
    this._dnsFilterTypeMxDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsFilterTypeMxDropInput() {
    return this._dnsFilterTypeMxDrop;
  }

  // dns_filter_type_ns_drop - computed: false, optional: true, required: false
  private _dnsFilterTypeNsDrop?: number; 
  public get dnsFilterTypeNsDrop() {
    return this.getNumberAttribute('dns_filter_type_ns_drop');
  }
  public set dnsFilterTypeNsDrop(value: number) {
    this._dnsFilterTypeNsDrop = value;
  }
  public resetDnsFilterTypeNsDrop() {
    this._dnsFilterTypeNsDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsFilterTypeNsDropInput() {
    return this._dnsFilterTypeNsDrop;
  }

  // dns_filter_type_others_drop - computed: false, optional: true, required: false
  private _dnsFilterTypeOthersDrop?: number; 
  public get dnsFilterTypeOthersDrop() {
    return this.getNumberAttribute('dns_filter_type_others_drop');
  }
  public set dnsFilterTypeOthersDrop(value: number) {
    this._dnsFilterTypeOthersDrop = value;
  }
  public resetDnsFilterTypeOthersDrop() {
    this._dnsFilterTypeOthersDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsFilterTypeOthersDropInput() {
    return this._dnsFilterTypeOthersDrop;
  }

  // dns_filter_type_ptr_drop - computed: false, optional: true, required: false
  private _dnsFilterTypePtrDrop?: number; 
  public get dnsFilterTypePtrDrop() {
    return this.getNumberAttribute('dns_filter_type_ptr_drop');
  }
  public set dnsFilterTypePtrDrop(value: number) {
    this._dnsFilterTypePtrDrop = value;
  }
  public resetDnsFilterTypePtrDrop() {
    this._dnsFilterTypePtrDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsFilterTypePtrDropInput() {
    return this._dnsFilterTypePtrDrop;
  }

  // dns_filter_type_soa_drop - computed: false, optional: true, required: false
  private _dnsFilterTypeSoaDrop?: number; 
  public get dnsFilterTypeSoaDrop() {
    return this.getNumberAttribute('dns_filter_type_soa_drop');
  }
  public set dnsFilterTypeSoaDrop(value: number) {
    this._dnsFilterTypeSoaDrop = value;
  }
  public resetDnsFilterTypeSoaDrop() {
    this._dnsFilterTypeSoaDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsFilterTypeSoaDropInput() {
    return this._dnsFilterTypeSoaDrop;
  }

  // dns_filter_type_srv_drop - computed: false, optional: true, required: false
  private _dnsFilterTypeSrvDrop?: number; 
  public get dnsFilterTypeSrvDrop() {
    return this.getNumberAttribute('dns_filter_type_srv_drop');
  }
  public set dnsFilterTypeSrvDrop(value: number) {
    this._dnsFilterTypeSrvDrop = value;
  }
  public resetDnsFilterTypeSrvDrop() {
    this._dnsFilterTypeSrvDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsFilterTypeSrvDropInput() {
    return this._dnsFilterTypeSrvDrop;
  }

  // dns_filter_type_txt_drop - computed: false, optional: true, required: false
  private _dnsFilterTypeTxtDrop?: number; 
  public get dnsFilterTypeTxtDrop() {
    return this.getNumberAttribute('dns_filter_type_txt_drop');
  }
  public set dnsFilterTypeTxtDrop(value: number) {
    this._dnsFilterTypeTxtDrop = value;
  }
  public resetDnsFilterTypeTxtDrop() {
    this._dnsFilterTypeTxtDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsFilterTypeTxtDropInput() {
    return this._dnsFilterTypeTxtDrop;
  }

  // dns_rpz_action_drop - computed: false, optional: true, required: false
  private _dnsRpzActionDrop?: number; 
  public get dnsRpzActionDrop() {
    return this.getNumberAttribute('dns_rpz_action_drop');
  }
  public set dnsRpzActionDrop(value: number) {
    this._dnsRpzActionDrop = value;
  }
  public resetDnsRpzActionDrop() {
    this._dnsRpzActionDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsRpzActionDropInput() {
    return this._dnsRpzActionDrop;
  }

  // dnsrrl_bad_fqdn - computed: false, optional: true, required: false
  private _dnsrrlBadFqdn?: number; 
  public get dnsrrlBadFqdn() {
    return this.getNumberAttribute('dnsrrl_bad_fqdn');
  }
  public set dnsrrlBadFqdn(value: number) {
    this._dnsrrlBadFqdn = value;
  }
  public resetDnsrrlBadFqdn() {
    this._dnsrrlBadFqdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsrrlBadFqdnInput() {
    return this._dnsrrlBadFqdn;
  }

  // dnsrrl_total_dropped - computed: false, optional: true, required: false
  private _dnsrrlTotalDropped?: number; 
  public get dnsrrlTotalDropped() {
    return this.getNumberAttribute('dnsrrl_total_dropped');
  }
  public set dnsrrlTotalDropped(value: number) {
    this._dnsrrlTotalDropped = value;
  }
  public resetDnsrrlTotalDropped() {
    this._dnsrrlTotalDropped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsrrlTotalDroppedInput() {
    return this._dnsrrlTotalDropped;
  }

  // gslb_query_bad - computed: false, optional: true, required: false
  private _gslbQueryBad?: number; 
  public get gslbQueryBad() {
    return this.getNumberAttribute('gslb_query_bad');
  }
  public set gslbQueryBad(value: number) {
    this._gslbQueryBad = value;
  }
  public resetGslbQueryBad() {
    this._gslbQueryBad = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbQueryBadInput() {
    return this._gslbQueryBad;
  }

  // gslb_response_bad - computed: false, optional: true, required: false
  private _gslbResponseBad?: number; 
  public get gslbResponseBad() {
    return this.getNumberAttribute('gslb_response_bad');
  }
  public set gslbResponseBad(value: number) {
    this._gslbResponseBad = value;
  }
  public resetGslbResponseBad() {
    this._gslbResponseBad = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbResponseBadInput() {
    return this._gslbResponseBad;
  }

  // rcode_notimpl_receive - computed: false, optional: true, required: false
  private _rcodeNotimplReceive?: number; 
  public get rcodeNotimplReceive() {
    return this.getNumberAttribute('rcode_notimpl_receive');
  }
  public set rcodeNotimplReceive(value: number) {
    this._rcodeNotimplReceive = value;
  }
  public resetRcodeNotimplReceive() {
    this._rcodeNotimplReceive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rcodeNotimplReceiveInput() {
    return this._rcodeNotimplReceive;
  }

  // rcode_notimpl_response - computed: false, optional: true, required: false
  private _rcodeNotimplResponse?: number; 
  public get rcodeNotimplResponse() {
    return this.getNumberAttribute('rcode_notimpl_response');
  }
  public set rcodeNotimplResponse(value: number) {
    this._rcodeNotimplResponse = value;
  }
  public resetRcodeNotimplResponse() {
    this._rcodeNotimplResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rcodeNotimplResponseInput() {
    return this._rcodeNotimplResponse;
  }

  // total_dns_filter_class_drop - computed: false, optional: true, required: false
  private _totalDnsFilterClassDrop?: number; 
  public get totalDnsFilterClassDrop() {
    return this.getNumberAttribute('total_dns_filter_class_drop');
  }
  public set totalDnsFilterClassDrop(value: number) {
    this._totalDnsFilterClassDrop = value;
  }
  public resetTotalDnsFilterClassDrop() {
    this._totalDnsFilterClassDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalDnsFilterClassDropInput() {
    return this._totalDnsFilterClassDrop;
  }

  // total_dns_filter_type_drop - computed: false, optional: true, required: false
  private _totalDnsFilterTypeDrop?: number; 
  public get totalDnsFilterTypeDrop() {
    return this.getNumberAttribute('total_dns_filter_type_drop');
  }
  public set totalDnsFilterTypeDrop(value: number) {
    this._totalDnsFilterTypeDrop = value;
  }
  public resetTotalDnsFilterTypeDrop() {
    this._totalDnsFilterTypeDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalDnsFilterTypeDropInput() {
    return this._totalDnsFilterTypeDrop;
  }

  // total_filter_drop - computed: false, optional: true, required: false
  private _totalFilterDrop?: number; 
  public get totalFilterDrop() {
    return this.getNumberAttribute('total_filter_drop');
  }
  public set totalFilterDrop(value: number) {
    this._totalFilterDrop = value;
  }
  public resetTotalFilterDrop() {
    this._totalFilterDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalFilterDropInput() {
    return this._totalFilterDrop;
  }

  // total_max_query_len_drop - computed: false, optional: true, required: false
  private _totalMaxQueryLenDrop?: number; 
  public get totalMaxQueryLenDrop() {
    return this.getNumberAttribute('total_max_query_len_drop');
  }
  public set totalMaxQueryLenDrop(value: number) {
    this._totalMaxQueryLenDrop = value;
  }
  public resetTotalMaxQueryLenDrop() {
    this._totalMaxQueryLenDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalMaxQueryLenDropInput() {
    return this._totalMaxQueryLenDrop;
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
export interface VisibilityPacketCaptureObjectTemplatesDnsVportTmplTriggerStatsRate {
  /**
  * Enable automatic packet-capture for counters DNS Filter Class ANY Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_dns_vport_tmpl#dns_filter_class_any_drop VisibilityPacketCaptureObjectTemplatesDnsVportTmpl#dns_filter_class_any_drop}
  */
  readonly dnsFilterClassAnyDrop?: number;
  /**
  * Enable automatic packet-capture for counters DNS Filter Class CHAOS Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_dns_vport_tmpl#dns_filter_class_chaos_drop VisibilityPacketCaptureObjectTemplatesDnsVportTmpl#dns_filter_class_chaos_drop}
  */
  readonly dnsFilterClassChaosDrop?: number;
  /**
  * Enable automatic packet-capture for counters DNS Filter Class HESIOD Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_dns_vport_tmpl#dns_filter_class_hesiod_drop VisibilityPacketCaptureObjectTemplatesDnsVportTmpl#dns_filter_class_hesiod_drop}
  */
  readonly dnsFilterClassHesiodDrop?: number;
  /**
  * Enable automatic packet-capture for counters DNS Filter Class INTERNET Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_dns_vport_tmpl#dns_filter_class_internet_drop VisibilityPacketCaptureObjectTemplatesDnsVportTmpl#dns_filter_class_internet_drop}
  */
  readonly dnsFilterClassInternetDrop?: number;
  /**
  * Enable automatic packet-capture for counters DNS Filter Class NONE Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_dns_vport_tmpl#dns_filter_class_none_drop VisibilityPacketCaptureObjectTemplatesDnsVportTmpl#dns_filter_class_none_drop}
  */
  readonly dnsFilterClassNoneDrop?: number;
  /**
  * Enable automatic packet-capture for counters DNS Filter Class OTHER Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_dns_vport_tmpl#dns_filter_class_others_drop VisibilityPacketCaptureObjectTemplatesDnsVportTmpl#dns_filter_class_others_drop}
  */
  readonly dnsFilterClassOthersDrop?: number;
  /**
  * Enable automatic packet-capture for counters DNS Filter Type A Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_dns_vport_tmpl#dns_filter_type_a_drop VisibilityPacketCaptureObjectTemplatesDnsVportTmpl#dns_filter_type_a_drop}
  */
  readonly dnsFilterTypeADrop?: number;
  /**
  * Enable automatic packet-capture for counters DNS Filter Type AAAA Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_dns_vport_tmpl#dns_filter_type_aaaa_drop VisibilityPacketCaptureObjectTemplatesDnsVportTmpl#dns_filter_type_aaaa_drop}
  */
  readonly dnsFilterTypeAaaaDrop?: number;
  /**
  * Enable automatic packet-capture for counters DNS Filter Type Any Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_dns_vport_tmpl#dns_filter_type_any_drop VisibilityPacketCaptureObjectTemplatesDnsVportTmpl#dns_filter_type_any_drop}
  */
  readonly dnsFilterTypeAnyDrop?: number;
  /**
  * Enable automatic packet-capture for counters DNS Filter Type CNAME Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_dns_vport_tmpl#dns_filter_type_cname_drop VisibilityPacketCaptureObjectTemplatesDnsVportTmpl#dns_filter_type_cname_drop}
  */
  readonly dnsFilterTypeCnameDrop?: number;
  /**
  * Enable automatic packet-capture for counters DNS Filter Type MX Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_dns_vport_tmpl#dns_filter_type_mx_drop VisibilityPacketCaptureObjectTemplatesDnsVportTmpl#dns_filter_type_mx_drop}
  */
  readonly dnsFilterTypeMxDrop?: number;
  /**
  * Enable automatic packet-capture for counters DNS Filter Type NS Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_dns_vport_tmpl#dns_filter_type_ns_drop VisibilityPacketCaptureObjectTemplatesDnsVportTmpl#dns_filter_type_ns_drop}
  */
  readonly dnsFilterTypeNsDrop?: number;
  /**
  * Enable automatic packet-capture for counters DNS Filter Type OTHERS Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_dns_vport_tmpl#dns_filter_type_others_drop VisibilityPacketCaptureObjectTemplatesDnsVportTmpl#dns_filter_type_others_drop}
  */
  readonly dnsFilterTypeOthersDrop?: number;
  /**
  * Enable automatic packet-capture for counters DNS Filter Type PTR Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_dns_vport_tmpl#dns_filter_type_ptr_drop VisibilityPacketCaptureObjectTemplatesDnsVportTmpl#dns_filter_type_ptr_drop}
  */
  readonly dnsFilterTypePtrDrop?: number;
  /**
  * Enable automatic packet-capture for counters DNS Filter Type SOA Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_dns_vport_tmpl#dns_filter_type_soa_drop VisibilityPacketCaptureObjectTemplatesDnsVportTmpl#dns_filter_type_soa_drop}
  */
  readonly dnsFilterTypeSoaDrop?: number;
  /**
  * Enable automatic packet-capture for counters DNS Filter Type SRV Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_dns_vport_tmpl#dns_filter_type_srv_drop VisibilityPacketCaptureObjectTemplatesDnsVportTmpl#dns_filter_type_srv_drop}
  */
  readonly dnsFilterTypeSrvDrop?: number;
  /**
  * Enable automatic packet-capture for counters DNS Filter Type TXT Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_dns_vport_tmpl#dns_filter_type_txt_drop VisibilityPacketCaptureObjectTemplatesDnsVportTmpl#dns_filter_type_txt_drop}
  */
  readonly dnsFilterTypeTxtDrop?: number;
  /**
  * Enable automatic packet-capture for DNS RPZ Action Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_dns_vport_tmpl#dns_rpz_action_drop VisibilityPacketCaptureObjectTemplatesDnsVportTmpl#dns_rpz_action_drop}
  */
  readonly dnsRpzActionDrop?: number;
  /**
  * Enable automatic packet-capture for DNS Response-Rate-Limiting Bad FQDN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_dns_vport_tmpl#dnsrrl_bad_fqdn VisibilityPacketCaptureObjectTemplatesDnsVportTmpl#dnsrrl_bad_fqdn}
  */
  readonly dnsrrlBadFqdn?: number;
  /**
  * Enable automatic packet-capture for dns rrl drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_dns_vport_tmpl#dnsrrl_total_dropped VisibilityPacketCaptureObjectTemplatesDnsVportTmpl#dnsrrl_total_dropped}
  */
  readonly dnsrrlTotalDropped?: number;
  /**
  * Time in seconds to look for the anomaly, default is 60
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_dns_vport_tmpl#duration VisibilityPacketCaptureObjectTemplatesDnsVportTmpl#duration}
  */
  readonly duration?: number;
  /**
  * Enable automatic packet-capture for gslb query bad
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_dns_vport_tmpl#gslb_query_bad VisibilityPacketCaptureObjectTemplatesDnsVportTmpl#gslb_query_bad}
  */
  readonly gslbQueryBad?: number;
  /**
  * Enable automatic packet-capture for gslb response bad
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_dns_vport_tmpl#gslb_response_bad VisibilityPacketCaptureObjectTemplatesDnsVportTmpl#gslb_response_bad}
  */
  readonly gslbResponseBad?: number;
  /**
  * Enable automatic packet-capture for response rcode type error receive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_dns_vport_tmpl#rcode_notimpl_receive VisibilityPacketCaptureObjectTemplatesDnsVportTmpl#rcode_notimpl_receive}
  */
  readonly rcodeNotimplReceive?: number;
  /**
  * Enable automatic packet-capture for rcode type error response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_dns_vport_tmpl#rcode_notimpl_response VisibilityPacketCaptureObjectTemplatesDnsVportTmpl#rcode_notimpl_response}
  */
  readonly rcodeNotimplResponse?: number;
  /**
  * Set the threshold to the number of times greater than the previous duration to start the capture, default is 5
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_dns_vport_tmpl#threshold_exceeded_by VisibilityPacketCaptureObjectTemplatesDnsVportTmpl#threshold_exceeded_by}
  */
  readonly thresholdExceededBy?: number;
  /**
  * Enable automatic packet-capture for counters Total DNS Filter Class Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_dns_vport_tmpl#total_dns_filter_class_drop VisibilityPacketCaptureObjectTemplatesDnsVportTmpl#total_dns_filter_class_drop}
  */
  readonly totalDnsFilterClassDrop?: number;
  /**
  * Enable automatic packet-capture for counters Total DNS Filter Type Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_dns_vport_tmpl#total_dns_filter_type_drop VisibilityPacketCaptureObjectTemplatesDnsVportTmpl#total_dns_filter_type_drop}
  */
  readonly totalDnsFilterTypeDrop?: number;
  /**
  * Enable automatic packet-capture for query filter drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_dns_vport_tmpl#total_filter_drop VisibilityPacketCaptureObjectTemplatesDnsVportTmpl#total_filter_drop}
  */
  readonly totalFilterDrop?: number;
  /**
  * Enable automatic packet-capture for query too long drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_dns_vport_tmpl#total_max_query_len_drop VisibilityPacketCaptureObjectTemplatesDnsVportTmpl#total_max_query_len_drop}
  */
  readonly totalMaxQueryLenDrop?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_dns_vport_tmpl#uuid VisibilityPacketCaptureObjectTemplatesDnsVportTmpl#uuid}
  */
  readonly uuid?: string;
}

export function visibilityPacketCaptureObjectTemplatesDnsVportTmplTriggerStatsRateToTerraform(struct?: VisibilityPacketCaptureObjectTemplatesDnsVportTmplTriggerStatsRateOutputReference | VisibilityPacketCaptureObjectTemplatesDnsVportTmplTriggerStatsRate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_filter_class_any_drop: cdktf.numberToTerraform(struct!.dnsFilterClassAnyDrop),
    dns_filter_class_chaos_drop: cdktf.numberToTerraform(struct!.dnsFilterClassChaosDrop),
    dns_filter_class_hesiod_drop: cdktf.numberToTerraform(struct!.dnsFilterClassHesiodDrop),
    dns_filter_class_internet_drop: cdktf.numberToTerraform(struct!.dnsFilterClassInternetDrop),
    dns_filter_class_none_drop: cdktf.numberToTerraform(struct!.dnsFilterClassNoneDrop),
    dns_filter_class_others_drop: cdktf.numberToTerraform(struct!.dnsFilterClassOthersDrop),
    dns_filter_type_a_drop: cdktf.numberToTerraform(struct!.dnsFilterTypeADrop),
    dns_filter_type_aaaa_drop: cdktf.numberToTerraform(struct!.dnsFilterTypeAaaaDrop),
    dns_filter_type_any_drop: cdktf.numberToTerraform(struct!.dnsFilterTypeAnyDrop),
    dns_filter_type_cname_drop: cdktf.numberToTerraform(struct!.dnsFilterTypeCnameDrop),
    dns_filter_type_mx_drop: cdktf.numberToTerraform(struct!.dnsFilterTypeMxDrop),
    dns_filter_type_ns_drop: cdktf.numberToTerraform(struct!.dnsFilterTypeNsDrop),
    dns_filter_type_others_drop: cdktf.numberToTerraform(struct!.dnsFilterTypeOthersDrop),
    dns_filter_type_ptr_drop: cdktf.numberToTerraform(struct!.dnsFilterTypePtrDrop),
    dns_filter_type_soa_drop: cdktf.numberToTerraform(struct!.dnsFilterTypeSoaDrop),
    dns_filter_type_srv_drop: cdktf.numberToTerraform(struct!.dnsFilterTypeSrvDrop),
    dns_filter_type_txt_drop: cdktf.numberToTerraform(struct!.dnsFilterTypeTxtDrop),
    dns_rpz_action_drop: cdktf.numberToTerraform(struct!.dnsRpzActionDrop),
    dnsrrl_bad_fqdn: cdktf.numberToTerraform(struct!.dnsrrlBadFqdn),
    dnsrrl_total_dropped: cdktf.numberToTerraform(struct!.dnsrrlTotalDropped),
    duration: cdktf.numberToTerraform(struct!.duration),
    gslb_query_bad: cdktf.numberToTerraform(struct!.gslbQueryBad),
    gslb_response_bad: cdktf.numberToTerraform(struct!.gslbResponseBad),
    rcode_notimpl_receive: cdktf.numberToTerraform(struct!.rcodeNotimplReceive),
    rcode_notimpl_response: cdktf.numberToTerraform(struct!.rcodeNotimplResponse),
    threshold_exceeded_by: cdktf.numberToTerraform(struct!.thresholdExceededBy),
    total_dns_filter_class_drop: cdktf.numberToTerraform(struct!.totalDnsFilterClassDrop),
    total_dns_filter_type_drop: cdktf.numberToTerraform(struct!.totalDnsFilterTypeDrop),
    total_filter_drop: cdktf.numberToTerraform(struct!.totalFilterDrop),
    total_max_query_len_drop: cdktf.numberToTerraform(struct!.totalMaxQueryLenDrop),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function visibilityPacketCaptureObjectTemplatesDnsVportTmplTriggerStatsRateToHclTerraform(struct?: VisibilityPacketCaptureObjectTemplatesDnsVportTmplTriggerStatsRateOutputReference | VisibilityPacketCaptureObjectTemplatesDnsVportTmplTriggerStatsRate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns_filter_class_any_drop: {
      value: cdktf.numberToHclTerraform(struct!.dnsFilterClassAnyDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_filter_class_chaos_drop: {
      value: cdktf.numberToHclTerraform(struct!.dnsFilterClassChaosDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_filter_class_hesiod_drop: {
      value: cdktf.numberToHclTerraform(struct!.dnsFilterClassHesiodDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_filter_class_internet_drop: {
      value: cdktf.numberToHclTerraform(struct!.dnsFilterClassInternetDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_filter_class_none_drop: {
      value: cdktf.numberToHclTerraform(struct!.dnsFilterClassNoneDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_filter_class_others_drop: {
      value: cdktf.numberToHclTerraform(struct!.dnsFilterClassOthersDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_filter_type_a_drop: {
      value: cdktf.numberToHclTerraform(struct!.dnsFilterTypeADrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_filter_type_aaaa_drop: {
      value: cdktf.numberToHclTerraform(struct!.dnsFilterTypeAaaaDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_filter_type_any_drop: {
      value: cdktf.numberToHclTerraform(struct!.dnsFilterTypeAnyDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_filter_type_cname_drop: {
      value: cdktf.numberToHclTerraform(struct!.dnsFilterTypeCnameDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_filter_type_mx_drop: {
      value: cdktf.numberToHclTerraform(struct!.dnsFilterTypeMxDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_filter_type_ns_drop: {
      value: cdktf.numberToHclTerraform(struct!.dnsFilterTypeNsDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_filter_type_others_drop: {
      value: cdktf.numberToHclTerraform(struct!.dnsFilterTypeOthersDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_filter_type_ptr_drop: {
      value: cdktf.numberToHclTerraform(struct!.dnsFilterTypePtrDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_filter_type_soa_drop: {
      value: cdktf.numberToHclTerraform(struct!.dnsFilterTypeSoaDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_filter_type_srv_drop: {
      value: cdktf.numberToHclTerraform(struct!.dnsFilterTypeSrvDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_filter_type_txt_drop: {
      value: cdktf.numberToHclTerraform(struct!.dnsFilterTypeTxtDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_rpz_action_drop: {
      value: cdktf.numberToHclTerraform(struct!.dnsRpzActionDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dnsrrl_bad_fqdn: {
      value: cdktf.numberToHclTerraform(struct!.dnsrrlBadFqdn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dnsrrl_total_dropped: {
      value: cdktf.numberToHclTerraform(struct!.dnsrrlTotalDropped),
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
    gslb_query_bad: {
      value: cdktf.numberToHclTerraform(struct!.gslbQueryBad),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gslb_response_bad: {
      value: cdktf.numberToHclTerraform(struct!.gslbResponseBad),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rcode_notimpl_receive: {
      value: cdktf.numberToHclTerraform(struct!.rcodeNotimplReceive),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rcode_notimpl_response: {
      value: cdktf.numberToHclTerraform(struct!.rcodeNotimplResponse),
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
    total_dns_filter_class_drop: {
      value: cdktf.numberToHclTerraform(struct!.totalDnsFilterClassDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_dns_filter_type_drop: {
      value: cdktf.numberToHclTerraform(struct!.totalDnsFilterTypeDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_filter_drop: {
      value: cdktf.numberToHclTerraform(struct!.totalFilterDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_max_query_len_drop: {
      value: cdktf.numberToHclTerraform(struct!.totalMaxQueryLenDrop),
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

export class VisibilityPacketCaptureObjectTemplatesDnsVportTmplTriggerStatsRateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VisibilityPacketCaptureObjectTemplatesDnsVportTmplTriggerStatsRate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsFilterClassAnyDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsFilterClassAnyDrop = this._dnsFilterClassAnyDrop;
    }
    if (this._dnsFilterClassChaosDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsFilterClassChaosDrop = this._dnsFilterClassChaosDrop;
    }
    if (this._dnsFilterClassHesiodDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsFilterClassHesiodDrop = this._dnsFilterClassHesiodDrop;
    }
    if (this._dnsFilterClassInternetDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsFilterClassInternetDrop = this._dnsFilterClassInternetDrop;
    }
    if (this._dnsFilterClassNoneDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsFilterClassNoneDrop = this._dnsFilterClassNoneDrop;
    }
    if (this._dnsFilterClassOthersDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsFilterClassOthersDrop = this._dnsFilterClassOthersDrop;
    }
    if (this._dnsFilterTypeADrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsFilterTypeADrop = this._dnsFilterTypeADrop;
    }
    if (this._dnsFilterTypeAaaaDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsFilterTypeAaaaDrop = this._dnsFilterTypeAaaaDrop;
    }
    if (this._dnsFilterTypeAnyDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsFilterTypeAnyDrop = this._dnsFilterTypeAnyDrop;
    }
    if (this._dnsFilterTypeCnameDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsFilterTypeCnameDrop = this._dnsFilterTypeCnameDrop;
    }
    if (this._dnsFilterTypeMxDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsFilterTypeMxDrop = this._dnsFilterTypeMxDrop;
    }
    if (this._dnsFilterTypeNsDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsFilterTypeNsDrop = this._dnsFilterTypeNsDrop;
    }
    if (this._dnsFilterTypeOthersDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsFilterTypeOthersDrop = this._dnsFilterTypeOthersDrop;
    }
    if (this._dnsFilterTypePtrDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsFilterTypePtrDrop = this._dnsFilterTypePtrDrop;
    }
    if (this._dnsFilterTypeSoaDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsFilterTypeSoaDrop = this._dnsFilterTypeSoaDrop;
    }
    if (this._dnsFilterTypeSrvDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsFilterTypeSrvDrop = this._dnsFilterTypeSrvDrop;
    }
    if (this._dnsFilterTypeTxtDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsFilterTypeTxtDrop = this._dnsFilterTypeTxtDrop;
    }
    if (this._dnsRpzActionDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsRpzActionDrop = this._dnsRpzActionDrop;
    }
    if (this._dnsrrlBadFqdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsrrlBadFqdn = this._dnsrrlBadFqdn;
    }
    if (this._dnsrrlTotalDropped !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsrrlTotalDropped = this._dnsrrlTotalDropped;
    }
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._gslbQueryBad !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbQueryBad = this._gslbQueryBad;
    }
    if (this._gslbResponseBad !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbResponseBad = this._gslbResponseBad;
    }
    if (this._rcodeNotimplReceive !== undefined) {
      hasAnyValues = true;
      internalValueResult.rcodeNotimplReceive = this._rcodeNotimplReceive;
    }
    if (this._rcodeNotimplResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.rcodeNotimplResponse = this._rcodeNotimplResponse;
    }
    if (this._thresholdExceededBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdExceededBy = this._thresholdExceededBy;
    }
    if (this._totalDnsFilterClassDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalDnsFilterClassDrop = this._totalDnsFilterClassDrop;
    }
    if (this._totalDnsFilterTypeDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalDnsFilterTypeDrop = this._totalDnsFilterTypeDrop;
    }
    if (this._totalFilterDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalFilterDrop = this._totalFilterDrop;
    }
    if (this._totalMaxQueryLenDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalMaxQueryLenDrop = this._totalMaxQueryLenDrop;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VisibilityPacketCaptureObjectTemplatesDnsVportTmplTriggerStatsRate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dnsFilterClassAnyDrop = undefined;
      this._dnsFilterClassChaosDrop = undefined;
      this._dnsFilterClassHesiodDrop = undefined;
      this._dnsFilterClassInternetDrop = undefined;
      this._dnsFilterClassNoneDrop = undefined;
      this._dnsFilterClassOthersDrop = undefined;
      this._dnsFilterTypeADrop = undefined;
      this._dnsFilterTypeAaaaDrop = undefined;
      this._dnsFilterTypeAnyDrop = undefined;
      this._dnsFilterTypeCnameDrop = undefined;
      this._dnsFilterTypeMxDrop = undefined;
      this._dnsFilterTypeNsDrop = undefined;
      this._dnsFilterTypeOthersDrop = undefined;
      this._dnsFilterTypePtrDrop = undefined;
      this._dnsFilterTypeSoaDrop = undefined;
      this._dnsFilterTypeSrvDrop = undefined;
      this._dnsFilterTypeTxtDrop = undefined;
      this._dnsRpzActionDrop = undefined;
      this._dnsrrlBadFqdn = undefined;
      this._dnsrrlTotalDropped = undefined;
      this._duration = undefined;
      this._gslbQueryBad = undefined;
      this._gslbResponseBad = undefined;
      this._rcodeNotimplReceive = undefined;
      this._rcodeNotimplResponse = undefined;
      this._thresholdExceededBy = undefined;
      this._totalDnsFilterClassDrop = undefined;
      this._totalDnsFilterTypeDrop = undefined;
      this._totalFilterDrop = undefined;
      this._totalMaxQueryLenDrop = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dnsFilterClassAnyDrop = value.dnsFilterClassAnyDrop;
      this._dnsFilterClassChaosDrop = value.dnsFilterClassChaosDrop;
      this._dnsFilterClassHesiodDrop = value.dnsFilterClassHesiodDrop;
      this._dnsFilterClassInternetDrop = value.dnsFilterClassInternetDrop;
      this._dnsFilterClassNoneDrop = value.dnsFilterClassNoneDrop;
      this._dnsFilterClassOthersDrop = value.dnsFilterClassOthersDrop;
      this._dnsFilterTypeADrop = value.dnsFilterTypeADrop;
      this._dnsFilterTypeAaaaDrop = value.dnsFilterTypeAaaaDrop;
      this._dnsFilterTypeAnyDrop = value.dnsFilterTypeAnyDrop;
      this._dnsFilterTypeCnameDrop = value.dnsFilterTypeCnameDrop;
      this._dnsFilterTypeMxDrop = value.dnsFilterTypeMxDrop;
      this._dnsFilterTypeNsDrop = value.dnsFilterTypeNsDrop;
      this._dnsFilterTypeOthersDrop = value.dnsFilterTypeOthersDrop;
      this._dnsFilterTypePtrDrop = value.dnsFilterTypePtrDrop;
      this._dnsFilterTypeSoaDrop = value.dnsFilterTypeSoaDrop;
      this._dnsFilterTypeSrvDrop = value.dnsFilterTypeSrvDrop;
      this._dnsFilterTypeTxtDrop = value.dnsFilterTypeTxtDrop;
      this._dnsRpzActionDrop = value.dnsRpzActionDrop;
      this._dnsrrlBadFqdn = value.dnsrrlBadFqdn;
      this._dnsrrlTotalDropped = value.dnsrrlTotalDropped;
      this._duration = value.duration;
      this._gslbQueryBad = value.gslbQueryBad;
      this._gslbResponseBad = value.gslbResponseBad;
      this._rcodeNotimplReceive = value.rcodeNotimplReceive;
      this._rcodeNotimplResponse = value.rcodeNotimplResponse;
      this._thresholdExceededBy = value.thresholdExceededBy;
      this._totalDnsFilterClassDrop = value.totalDnsFilterClassDrop;
      this._totalDnsFilterTypeDrop = value.totalDnsFilterTypeDrop;
      this._totalFilterDrop = value.totalFilterDrop;
      this._totalMaxQueryLenDrop = value.totalMaxQueryLenDrop;
      this._uuid = value.uuid;
    }
  }

  // dns_filter_class_any_drop - computed: false, optional: true, required: false
  private _dnsFilterClassAnyDrop?: number; 
  public get dnsFilterClassAnyDrop() {
    return this.getNumberAttribute('dns_filter_class_any_drop');
  }
  public set dnsFilterClassAnyDrop(value: number) {
    this._dnsFilterClassAnyDrop = value;
  }
  public resetDnsFilterClassAnyDrop() {
    this._dnsFilterClassAnyDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsFilterClassAnyDropInput() {
    return this._dnsFilterClassAnyDrop;
  }

  // dns_filter_class_chaos_drop - computed: false, optional: true, required: false
  private _dnsFilterClassChaosDrop?: number; 
  public get dnsFilterClassChaosDrop() {
    return this.getNumberAttribute('dns_filter_class_chaos_drop');
  }
  public set dnsFilterClassChaosDrop(value: number) {
    this._dnsFilterClassChaosDrop = value;
  }
  public resetDnsFilterClassChaosDrop() {
    this._dnsFilterClassChaosDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsFilterClassChaosDropInput() {
    return this._dnsFilterClassChaosDrop;
  }

  // dns_filter_class_hesiod_drop - computed: false, optional: true, required: false
  private _dnsFilterClassHesiodDrop?: number; 
  public get dnsFilterClassHesiodDrop() {
    return this.getNumberAttribute('dns_filter_class_hesiod_drop');
  }
  public set dnsFilterClassHesiodDrop(value: number) {
    this._dnsFilterClassHesiodDrop = value;
  }
  public resetDnsFilterClassHesiodDrop() {
    this._dnsFilterClassHesiodDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsFilterClassHesiodDropInput() {
    return this._dnsFilterClassHesiodDrop;
  }

  // dns_filter_class_internet_drop - computed: false, optional: true, required: false
  private _dnsFilterClassInternetDrop?: number; 
  public get dnsFilterClassInternetDrop() {
    return this.getNumberAttribute('dns_filter_class_internet_drop');
  }
  public set dnsFilterClassInternetDrop(value: number) {
    this._dnsFilterClassInternetDrop = value;
  }
  public resetDnsFilterClassInternetDrop() {
    this._dnsFilterClassInternetDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsFilterClassInternetDropInput() {
    return this._dnsFilterClassInternetDrop;
  }

  // dns_filter_class_none_drop - computed: false, optional: true, required: false
  private _dnsFilterClassNoneDrop?: number; 
  public get dnsFilterClassNoneDrop() {
    return this.getNumberAttribute('dns_filter_class_none_drop');
  }
  public set dnsFilterClassNoneDrop(value: number) {
    this._dnsFilterClassNoneDrop = value;
  }
  public resetDnsFilterClassNoneDrop() {
    this._dnsFilterClassNoneDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsFilterClassNoneDropInput() {
    return this._dnsFilterClassNoneDrop;
  }

  // dns_filter_class_others_drop - computed: false, optional: true, required: false
  private _dnsFilterClassOthersDrop?: number; 
  public get dnsFilterClassOthersDrop() {
    return this.getNumberAttribute('dns_filter_class_others_drop');
  }
  public set dnsFilterClassOthersDrop(value: number) {
    this._dnsFilterClassOthersDrop = value;
  }
  public resetDnsFilterClassOthersDrop() {
    this._dnsFilterClassOthersDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsFilterClassOthersDropInput() {
    return this._dnsFilterClassOthersDrop;
  }

  // dns_filter_type_a_drop - computed: false, optional: true, required: false
  private _dnsFilterTypeADrop?: number; 
  public get dnsFilterTypeADrop() {
    return this.getNumberAttribute('dns_filter_type_a_drop');
  }
  public set dnsFilterTypeADrop(value: number) {
    this._dnsFilterTypeADrop = value;
  }
  public resetDnsFilterTypeADrop() {
    this._dnsFilterTypeADrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsFilterTypeADropInput() {
    return this._dnsFilterTypeADrop;
  }

  // dns_filter_type_aaaa_drop - computed: false, optional: true, required: false
  private _dnsFilterTypeAaaaDrop?: number; 
  public get dnsFilterTypeAaaaDrop() {
    return this.getNumberAttribute('dns_filter_type_aaaa_drop');
  }
  public set dnsFilterTypeAaaaDrop(value: number) {
    this._dnsFilterTypeAaaaDrop = value;
  }
  public resetDnsFilterTypeAaaaDrop() {
    this._dnsFilterTypeAaaaDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsFilterTypeAaaaDropInput() {
    return this._dnsFilterTypeAaaaDrop;
  }

  // dns_filter_type_any_drop - computed: false, optional: true, required: false
  private _dnsFilterTypeAnyDrop?: number; 
  public get dnsFilterTypeAnyDrop() {
    return this.getNumberAttribute('dns_filter_type_any_drop');
  }
  public set dnsFilterTypeAnyDrop(value: number) {
    this._dnsFilterTypeAnyDrop = value;
  }
  public resetDnsFilterTypeAnyDrop() {
    this._dnsFilterTypeAnyDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsFilterTypeAnyDropInput() {
    return this._dnsFilterTypeAnyDrop;
  }

  // dns_filter_type_cname_drop - computed: false, optional: true, required: false
  private _dnsFilterTypeCnameDrop?: number; 
  public get dnsFilterTypeCnameDrop() {
    return this.getNumberAttribute('dns_filter_type_cname_drop');
  }
  public set dnsFilterTypeCnameDrop(value: number) {
    this._dnsFilterTypeCnameDrop = value;
  }
  public resetDnsFilterTypeCnameDrop() {
    this._dnsFilterTypeCnameDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsFilterTypeCnameDropInput() {
    return this._dnsFilterTypeCnameDrop;
  }

  // dns_filter_type_mx_drop - computed: false, optional: true, required: false
  private _dnsFilterTypeMxDrop?: number; 
  public get dnsFilterTypeMxDrop() {
    return this.getNumberAttribute('dns_filter_type_mx_drop');
  }
  public set dnsFilterTypeMxDrop(value: number) {
    this._dnsFilterTypeMxDrop = value;
  }
  public resetDnsFilterTypeMxDrop() {
    this._dnsFilterTypeMxDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsFilterTypeMxDropInput() {
    return this._dnsFilterTypeMxDrop;
  }

  // dns_filter_type_ns_drop - computed: false, optional: true, required: false
  private _dnsFilterTypeNsDrop?: number; 
  public get dnsFilterTypeNsDrop() {
    return this.getNumberAttribute('dns_filter_type_ns_drop');
  }
  public set dnsFilterTypeNsDrop(value: number) {
    this._dnsFilterTypeNsDrop = value;
  }
  public resetDnsFilterTypeNsDrop() {
    this._dnsFilterTypeNsDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsFilterTypeNsDropInput() {
    return this._dnsFilterTypeNsDrop;
  }

  // dns_filter_type_others_drop - computed: false, optional: true, required: false
  private _dnsFilterTypeOthersDrop?: number; 
  public get dnsFilterTypeOthersDrop() {
    return this.getNumberAttribute('dns_filter_type_others_drop');
  }
  public set dnsFilterTypeOthersDrop(value: number) {
    this._dnsFilterTypeOthersDrop = value;
  }
  public resetDnsFilterTypeOthersDrop() {
    this._dnsFilterTypeOthersDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsFilterTypeOthersDropInput() {
    return this._dnsFilterTypeOthersDrop;
  }

  // dns_filter_type_ptr_drop - computed: false, optional: true, required: false
  private _dnsFilterTypePtrDrop?: number; 
  public get dnsFilterTypePtrDrop() {
    return this.getNumberAttribute('dns_filter_type_ptr_drop');
  }
  public set dnsFilterTypePtrDrop(value: number) {
    this._dnsFilterTypePtrDrop = value;
  }
  public resetDnsFilterTypePtrDrop() {
    this._dnsFilterTypePtrDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsFilterTypePtrDropInput() {
    return this._dnsFilterTypePtrDrop;
  }

  // dns_filter_type_soa_drop - computed: false, optional: true, required: false
  private _dnsFilterTypeSoaDrop?: number; 
  public get dnsFilterTypeSoaDrop() {
    return this.getNumberAttribute('dns_filter_type_soa_drop');
  }
  public set dnsFilterTypeSoaDrop(value: number) {
    this._dnsFilterTypeSoaDrop = value;
  }
  public resetDnsFilterTypeSoaDrop() {
    this._dnsFilterTypeSoaDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsFilterTypeSoaDropInput() {
    return this._dnsFilterTypeSoaDrop;
  }

  // dns_filter_type_srv_drop - computed: false, optional: true, required: false
  private _dnsFilterTypeSrvDrop?: number; 
  public get dnsFilterTypeSrvDrop() {
    return this.getNumberAttribute('dns_filter_type_srv_drop');
  }
  public set dnsFilterTypeSrvDrop(value: number) {
    this._dnsFilterTypeSrvDrop = value;
  }
  public resetDnsFilterTypeSrvDrop() {
    this._dnsFilterTypeSrvDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsFilterTypeSrvDropInput() {
    return this._dnsFilterTypeSrvDrop;
  }

  // dns_filter_type_txt_drop - computed: false, optional: true, required: false
  private _dnsFilterTypeTxtDrop?: number; 
  public get dnsFilterTypeTxtDrop() {
    return this.getNumberAttribute('dns_filter_type_txt_drop');
  }
  public set dnsFilterTypeTxtDrop(value: number) {
    this._dnsFilterTypeTxtDrop = value;
  }
  public resetDnsFilterTypeTxtDrop() {
    this._dnsFilterTypeTxtDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsFilterTypeTxtDropInput() {
    return this._dnsFilterTypeTxtDrop;
  }

  // dns_rpz_action_drop - computed: false, optional: true, required: false
  private _dnsRpzActionDrop?: number; 
  public get dnsRpzActionDrop() {
    return this.getNumberAttribute('dns_rpz_action_drop');
  }
  public set dnsRpzActionDrop(value: number) {
    this._dnsRpzActionDrop = value;
  }
  public resetDnsRpzActionDrop() {
    this._dnsRpzActionDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsRpzActionDropInput() {
    return this._dnsRpzActionDrop;
  }

  // dnsrrl_bad_fqdn - computed: false, optional: true, required: false
  private _dnsrrlBadFqdn?: number; 
  public get dnsrrlBadFqdn() {
    return this.getNumberAttribute('dnsrrl_bad_fqdn');
  }
  public set dnsrrlBadFqdn(value: number) {
    this._dnsrrlBadFqdn = value;
  }
  public resetDnsrrlBadFqdn() {
    this._dnsrrlBadFqdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsrrlBadFqdnInput() {
    return this._dnsrrlBadFqdn;
  }

  // dnsrrl_total_dropped - computed: false, optional: true, required: false
  private _dnsrrlTotalDropped?: number; 
  public get dnsrrlTotalDropped() {
    return this.getNumberAttribute('dnsrrl_total_dropped');
  }
  public set dnsrrlTotalDropped(value: number) {
    this._dnsrrlTotalDropped = value;
  }
  public resetDnsrrlTotalDropped() {
    this._dnsrrlTotalDropped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsrrlTotalDroppedInput() {
    return this._dnsrrlTotalDropped;
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

  // gslb_query_bad - computed: false, optional: true, required: false
  private _gslbQueryBad?: number; 
  public get gslbQueryBad() {
    return this.getNumberAttribute('gslb_query_bad');
  }
  public set gslbQueryBad(value: number) {
    this._gslbQueryBad = value;
  }
  public resetGslbQueryBad() {
    this._gslbQueryBad = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbQueryBadInput() {
    return this._gslbQueryBad;
  }

  // gslb_response_bad - computed: false, optional: true, required: false
  private _gslbResponseBad?: number; 
  public get gslbResponseBad() {
    return this.getNumberAttribute('gslb_response_bad');
  }
  public set gslbResponseBad(value: number) {
    this._gslbResponseBad = value;
  }
  public resetGslbResponseBad() {
    this._gslbResponseBad = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbResponseBadInput() {
    return this._gslbResponseBad;
  }

  // rcode_notimpl_receive - computed: false, optional: true, required: false
  private _rcodeNotimplReceive?: number; 
  public get rcodeNotimplReceive() {
    return this.getNumberAttribute('rcode_notimpl_receive');
  }
  public set rcodeNotimplReceive(value: number) {
    this._rcodeNotimplReceive = value;
  }
  public resetRcodeNotimplReceive() {
    this._rcodeNotimplReceive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rcodeNotimplReceiveInput() {
    return this._rcodeNotimplReceive;
  }

  // rcode_notimpl_response - computed: false, optional: true, required: false
  private _rcodeNotimplResponse?: number; 
  public get rcodeNotimplResponse() {
    return this.getNumberAttribute('rcode_notimpl_response');
  }
  public set rcodeNotimplResponse(value: number) {
    this._rcodeNotimplResponse = value;
  }
  public resetRcodeNotimplResponse() {
    this._rcodeNotimplResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rcodeNotimplResponseInput() {
    return this._rcodeNotimplResponse;
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

  // total_dns_filter_class_drop - computed: false, optional: true, required: false
  private _totalDnsFilterClassDrop?: number; 
  public get totalDnsFilterClassDrop() {
    return this.getNumberAttribute('total_dns_filter_class_drop');
  }
  public set totalDnsFilterClassDrop(value: number) {
    this._totalDnsFilterClassDrop = value;
  }
  public resetTotalDnsFilterClassDrop() {
    this._totalDnsFilterClassDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalDnsFilterClassDropInput() {
    return this._totalDnsFilterClassDrop;
  }

  // total_dns_filter_type_drop - computed: false, optional: true, required: false
  private _totalDnsFilterTypeDrop?: number; 
  public get totalDnsFilterTypeDrop() {
    return this.getNumberAttribute('total_dns_filter_type_drop');
  }
  public set totalDnsFilterTypeDrop(value: number) {
    this._totalDnsFilterTypeDrop = value;
  }
  public resetTotalDnsFilterTypeDrop() {
    this._totalDnsFilterTypeDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalDnsFilterTypeDropInput() {
    return this._totalDnsFilterTypeDrop;
  }

  // total_filter_drop - computed: false, optional: true, required: false
  private _totalFilterDrop?: number; 
  public get totalFilterDrop() {
    return this.getNumberAttribute('total_filter_drop');
  }
  public set totalFilterDrop(value: number) {
    this._totalFilterDrop = value;
  }
  public resetTotalFilterDrop() {
    this._totalFilterDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalFilterDropInput() {
    return this._totalFilterDrop;
  }

  // total_max_query_len_drop - computed: false, optional: true, required: false
  private _totalMaxQueryLenDrop?: number; 
  public get totalMaxQueryLenDrop() {
    return this.getNumberAttribute('total_max_query_len_drop');
  }
  public set totalMaxQueryLenDrop(value: number) {
    this._totalMaxQueryLenDrop = value;
  }
  public resetTotalMaxQueryLenDrop() {
    this._totalMaxQueryLenDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalMaxQueryLenDropInput() {
    return this._totalMaxQueryLenDrop;
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
export interface VisibilityPacketCaptureObjectTemplatesDnsVportTmplTriggerStatsSeverity {
  /**
  * Enable packet capture on all drop counters (Default disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_dns_vport_tmpl#drop VisibilityPacketCaptureObjectTemplatesDnsVportTmpl#drop}
  */
  readonly drop?: number;
  /**
  * Enable packet capture on all alert drop counters (Default disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_dns_vport_tmpl#drop_alert VisibilityPacketCaptureObjectTemplatesDnsVportTmpl#drop_alert}
  */
  readonly dropAlert?: number;
  /**
  * Enable packet capture on all critical drop counters (Default disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_dns_vport_tmpl#drop_critical VisibilityPacketCaptureObjectTemplatesDnsVportTmpl#drop_critical}
  */
  readonly dropCritical?: number;
  /**
  * Enable packet capture on all warning drop counters (Default disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_dns_vport_tmpl#drop_warning VisibilityPacketCaptureObjectTemplatesDnsVportTmpl#drop_warning}
  */
  readonly dropWarning?: number;
  /**
  * Enable packet capture on all error counters (Default disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_dns_vport_tmpl#error VisibilityPacketCaptureObjectTemplatesDnsVportTmpl#error}
  */
  readonly error?: number;
  /**
  * Enable packet capture on all alert error counters (Default disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_dns_vport_tmpl#error_alert VisibilityPacketCaptureObjectTemplatesDnsVportTmpl#error_alert}
  */
  readonly errorAlert?: number;
  /**
  * Enable packet capture on all critical error counters (Default disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_dns_vport_tmpl#error_critical VisibilityPacketCaptureObjectTemplatesDnsVportTmpl#error_critical}
  */
  readonly errorCritical?: number;
  /**
  * Enable packet capture on all warning error counters (Default disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_dns_vport_tmpl#error_warning VisibilityPacketCaptureObjectTemplatesDnsVportTmpl#error_warning}
  */
  readonly errorWarning?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_dns_vport_tmpl#uuid VisibilityPacketCaptureObjectTemplatesDnsVportTmpl#uuid}
  */
  readonly uuid?: string;
}

export function visibilityPacketCaptureObjectTemplatesDnsVportTmplTriggerStatsSeverityToTerraform(struct?: VisibilityPacketCaptureObjectTemplatesDnsVportTmplTriggerStatsSeverityOutputReference | VisibilityPacketCaptureObjectTemplatesDnsVportTmplTriggerStatsSeverity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    drop: cdktf.numberToTerraform(struct!.drop),
    drop_alert: cdktf.numberToTerraform(struct!.dropAlert),
    drop_critical: cdktf.numberToTerraform(struct!.dropCritical),
    drop_warning: cdktf.numberToTerraform(struct!.dropWarning),
    error: cdktf.numberToTerraform(struct!.error),
    error_alert: cdktf.numberToTerraform(struct!.errorAlert),
    error_critical: cdktf.numberToTerraform(struct!.errorCritical),
    error_warning: cdktf.numberToTerraform(struct!.errorWarning),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function visibilityPacketCaptureObjectTemplatesDnsVportTmplTriggerStatsSeverityToHclTerraform(struct?: VisibilityPacketCaptureObjectTemplatesDnsVportTmplTriggerStatsSeverityOutputReference | VisibilityPacketCaptureObjectTemplatesDnsVportTmplTriggerStatsSeverity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    drop: {
      value: cdktf.numberToHclTerraform(struct!.drop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_alert: {
      value: cdktf.numberToHclTerraform(struct!.dropAlert),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_critical: {
      value: cdktf.numberToHclTerraform(struct!.dropCritical),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_warning: {
      value: cdktf.numberToHclTerraform(struct!.dropWarning),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    error: {
      value: cdktf.numberToHclTerraform(struct!.error),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    error_alert: {
      value: cdktf.numberToHclTerraform(struct!.errorAlert),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    error_critical: {
      value: cdktf.numberToHclTerraform(struct!.errorCritical),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    error_warning: {
      value: cdktf.numberToHclTerraform(struct!.errorWarning),
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

export class VisibilityPacketCaptureObjectTemplatesDnsVportTmplTriggerStatsSeverityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VisibilityPacketCaptureObjectTemplatesDnsVportTmplTriggerStatsSeverity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._drop !== undefined) {
      hasAnyValues = true;
      internalValueResult.drop = this._drop;
    }
    if (this._dropAlert !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropAlert = this._dropAlert;
    }
    if (this._dropCritical !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropCritical = this._dropCritical;
    }
    if (this._dropWarning !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropWarning = this._dropWarning;
    }
    if (this._error !== undefined) {
      hasAnyValues = true;
      internalValueResult.error = this._error;
    }
    if (this._errorAlert !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorAlert = this._errorAlert;
    }
    if (this._errorCritical !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorCritical = this._errorCritical;
    }
    if (this._errorWarning !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorWarning = this._errorWarning;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VisibilityPacketCaptureObjectTemplatesDnsVportTmplTriggerStatsSeverity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._drop = undefined;
      this._dropAlert = undefined;
      this._dropCritical = undefined;
      this._dropWarning = undefined;
      this._error = undefined;
      this._errorAlert = undefined;
      this._errorCritical = undefined;
      this._errorWarning = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._drop = value.drop;
      this._dropAlert = value.dropAlert;
      this._dropCritical = value.dropCritical;
      this._dropWarning = value.dropWarning;
      this._error = value.error;
      this._errorAlert = value.errorAlert;
      this._errorCritical = value.errorCritical;
      this._errorWarning = value.errorWarning;
      this._uuid = value.uuid;
    }
  }

  // drop - computed: false, optional: true, required: false
  private _drop?: number; 
  public get drop() {
    return this.getNumberAttribute('drop');
  }
  public set drop(value: number) {
    this._drop = value;
  }
  public resetDrop() {
    this._drop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropInput() {
    return this._drop;
  }

  // drop_alert - computed: false, optional: true, required: false
  private _dropAlert?: number; 
  public get dropAlert() {
    return this.getNumberAttribute('drop_alert');
  }
  public set dropAlert(value: number) {
    this._dropAlert = value;
  }
  public resetDropAlert() {
    this._dropAlert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropAlertInput() {
    return this._dropAlert;
  }

  // drop_critical - computed: false, optional: true, required: false
  private _dropCritical?: number; 
  public get dropCritical() {
    return this.getNumberAttribute('drop_critical');
  }
  public set dropCritical(value: number) {
    this._dropCritical = value;
  }
  public resetDropCritical() {
    this._dropCritical = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropCriticalInput() {
    return this._dropCritical;
  }

  // drop_warning - computed: false, optional: true, required: false
  private _dropWarning?: number; 
  public get dropWarning() {
    return this.getNumberAttribute('drop_warning');
  }
  public set dropWarning(value: number) {
    this._dropWarning = value;
  }
  public resetDropWarning() {
    this._dropWarning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropWarningInput() {
    return this._dropWarning;
  }

  // error - computed: false, optional: true, required: false
  private _error?: number; 
  public get error() {
    return this.getNumberAttribute('error');
  }
  public set error(value: number) {
    this._error = value;
  }
  public resetError() {
    this._error = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorInput() {
    return this._error;
  }

  // error_alert - computed: false, optional: true, required: false
  private _errorAlert?: number; 
  public get errorAlert() {
    return this.getNumberAttribute('error_alert');
  }
  public set errorAlert(value: number) {
    this._errorAlert = value;
  }
  public resetErrorAlert() {
    this._errorAlert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorAlertInput() {
    return this._errorAlert;
  }

  // error_critical - computed: false, optional: true, required: false
  private _errorCritical?: number; 
  public get errorCritical() {
    return this.getNumberAttribute('error_critical');
  }
  public set errorCritical(value: number) {
    this._errorCritical = value;
  }
  public resetErrorCritical() {
    this._errorCritical = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorCriticalInput() {
    return this._errorCritical;
  }

  // error_warning - computed: false, optional: true, required: false
  private _errorWarning?: number; 
  public get errorWarning() {
    return this.getNumberAttribute('error_warning');
  }
  public set errorWarning(value: number) {
    this._errorWarning = value;
  }
  public resetErrorWarning() {
    this._errorWarning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorWarningInput() {
    return this._errorWarning;
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
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_dns_vport_tmpl thunder_visibility_packet_capture_object_templates_dns_vport_tmpl}
*/
export class VisibilityPacketCaptureObjectTemplatesDnsVportTmpl extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_packet_capture_object_templates_dns_vport_tmpl";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VisibilityPacketCaptureObjectTemplatesDnsVportTmpl resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VisibilityPacketCaptureObjectTemplatesDnsVportTmpl to import
  * @param importFromId The id of the existing VisibilityPacketCaptureObjectTemplatesDnsVportTmpl that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_dns_vport_tmpl#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VisibilityPacketCaptureObjectTemplatesDnsVportTmpl to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_packet_capture_object_templates_dns_vport_tmpl", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_dns_vport_tmpl thunder_visibility_packet_capture_object_templates_dns_vport_tmpl} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VisibilityPacketCaptureObjectTemplatesDnsVportTmplConfig
  */
  public constructor(scope: Construct, id: string, config: VisibilityPacketCaptureObjectTemplatesDnsVportTmplConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_packet_capture_object_templates_dns_vport_tmpl',
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
    this._captureConfig = config.captureConfig;
    this._id = config.id;
    this._name = config.name;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._triggerStatsInc.internalValue = config.triggerStatsInc;
    this._triggerStatsRate.internalValue = config.triggerStatsRate;
    this._triggerStatsSeverity.internalValue = config.triggerStatsSeverity;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // capture_config - computed: false, optional: true, required: false
  private _captureConfig?: string; 
  public get captureConfig() {
    return this.getStringAttribute('capture_config');
  }
  public set captureConfig(value: string) {
    this._captureConfig = value;
  }
  public resetCaptureConfig() {
    this._captureConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captureConfigInput() {
    return this._captureConfig;
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

  // trigger_stats_inc - computed: false, optional: true, required: false
  private _triggerStatsInc = new VisibilityPacketCaptureObjectTemplatesDnsVportTmplTriggerStatsIncOutputReference(this, "trigger_stats_inc");
  public get triggerStatsInc() {
    return this._triggerStatsInc;
  }
  public putTriggerStatsInc(value: VisibilityPacketCaptureObjectTemplatesDnsVportTmplTriggerStatsInc) {
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
  private _triggerStatsRate = new VisibilityPacketCaptureObjectTemplatesDnsVportTmplTriggerStatsRateOutputReference(this, "trigger_stats_rate");
  public get triggerStatsRate() {
    return this._triggerStatsRate;
  }
  public putTriggerStatsRate(value: VisibilityPacketCaptureObjectTemplatesDnsVportTmplTriggerStatsRate) {
    this._triggerStatsRate.internalValue = value;
  }
  public resetTriggerStatsRate() {
    this._triggerStatsRate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerStatsRateInput() {
    return this._triggerStatsRate.internalValue;
  }

  // trigger_stats_severity - computed: false, optional: true, required: false
  private _triggerStatsSeverity = new VisibilityPacketCaptureObjectTemplatesDnsVportTmplTriggerStatsSeverityOutputReference(this, "trigger_stats_severity");
  public get triggerStatsSeverity() {
    return this._triggerStatsSeverity;
  }
  public putTriggerStatsSeverity(value: VisibilityPacketCaptureObjectTemplatesDnsVportTmplTriggerStatsSeverity) {
    this._triggerStatsSeverity.internalValue = value;
  }
  public resetTriggerStatsSeverity() {
    this._triggerStatsSeverity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerStatsSeverityInput() {
    return this._triggerStatsSeverity.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      capture_config: cdktf.stringToTerraform(this._captureConfig),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      trigger_stats_inc: visibilityPacketCaptureObjectTemplatesDnsVportTmplTriggerStatsIncToTerraform(this._triggerStatsInc.internalValue),
      trigger_stats_rate: visibilityPacketCaptureObjectTemplatesDnsVportTmplTriggerStatsRateToTerraform(this._triggerStatsRate.internalValue),
      trigger_stats_severity: visibilityPacketCaptureObjectTemplatesDnsVportTmplTriggerStatsSeverityToTerraform(this._triggerStatsSeverity.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      capture_config: {
        value: cdktf.stringToHclTerraform(this._captureConfig),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      trigger_stats_inc: {
        value: visibilityPacketCaptureObjectTemplatesDnsVportTmplTriggerStatsIncToHclTerraform(this._triggerStatsInc.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VisibilityPacketCaptureObjectTemplatesDnsVportTmplTriggerStatsIncList",
      },
      trigger_stats_rate: {
        value: visibilityPacketCaptureObjectTemplatesDnsVportTmplTriggerStatsRateToHclTerraform(this._triggerStatsRate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VisibilityPacketCaptureObjectTemplatesDnsVportTmplTriggerStatsRateList",
      },
      trigger_stats_severity: {
        value: visibilityPacketCaptureObjectTemplatesDnsVportTmplTriggerStatsSeverityToHclTerraform(this._triggerStatsSeverity.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VisibilityPacketCaptureObjectTemplatesDnsVportTmplTriggerStatsSeverityList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
