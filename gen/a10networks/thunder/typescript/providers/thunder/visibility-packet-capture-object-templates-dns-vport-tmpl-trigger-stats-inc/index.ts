// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_dns_vport_tmpl_trigger_stats_inc
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VisibilityPacketCaptureObjectTemplatesDnsVportTmplTriggerStatsIncAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable automatic packet-capture for counters DNS Filter Class ANY Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_dns_vport_tmpl_trigger_stats_inc#dns_filter_class_any_drop VisibilityPacketCaptureObjectTemplatesDnsVportTmplTriggerStatsIncA#dns_filter_class_any_drop}
  */
  readonly dnsFilterClassAnyDrop?: number;
  /**
  * Enable automatic packet-capture for counters DNS Filter Class CHAOS Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_dns_vport_tmpl_trigger_stats_inc#dns_filter_class_chaos_drop VisibilityPacketCaptureObjectTemplatesDnsVportTmplTriggerStatsIncA#dns_filter_class_chaos_drop}
  */
  readonly dnsFilterClassChaosDrop?: number;
  /**
  * Enable automatic packet-capture for counters DNS Filter Class HESIOD Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_dns_vport_tmpl_trigger_stats_inc#dns_filter_class_hesiod_drop VisibilityPacketCaptureObjectTemplatesDnsVportTmplTriggerStatsIncA#dns_filter_class_hesiod_drop}
  */
  readonly dnsFilterClassHesiodDrop?: number;
  /**
  * Enable automatic packet-capture for counters DNS Filter Class INTERNET Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_dns_vport_tmpl_trigger_stats_inc#dns_filter_class_internet_drop VisibilityPacketCaptureObjectTemplatesDnsVportTmplTriggerStatsIncA#dns_filter_class_internet_drop}
  */
  readonly dnsFilterClassInternetDrop?: number;
  /**
  * Enable automatic packet-capture for counters DNS Filter Class NONE Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_dns_vport_tmpl_trigger_stats_inc#dns_filter_class_none_drop VisibilityPacketCaptureObjectTemplatesDnsVportTmplTriggerStatsIncA#dns_filter_class_none_drop}
  */
  readonly dnsFilterClassNoneDrop?: number;
  /**
  * Enable automatic packet-capture for counters DNS Filter Class OTHER Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_dns_vport_tmpl_trigger_stats_inc#dns_filter_class_others_drop VisibilityPacketCaptureObjectTemplatesDnsVportTmplTriggerStatsIncA#dns_filter_class_others_drop}
  */
  readonly dnsFilterClassOthersDrop?: number;
  /**
  * Enable automatic packet-capture for counters Total DNS Filter TLD Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_dns_vport_tmpl_trigger_stats_inc#dns_filter_tld_drop VisibilityPacketCaptureObjectTemplatesDnsVportTmplTriggerStatsIncA#dns_filter_tld_drop}
  */
  readonly dnsFilterTldDrop?: number;
  /**
  * Enable automatic packet-capture for counters DNS Filter Type A Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_dns_vport_tmpl_trigger_stats_inc#dns_filter_type_a_drop VisibilityPacketCaptureObjectTemplatesDnsVportTmplTriggerStatsIncA#dns_filter_type_a_drop}
  */
  readonly dnsFilterTypeADrop?: number;
  /**
  * Enable automatic packet-capture for counters DNS Filter Type AAAA Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_dns_vport_tmpl_trigger_stats_inc#dns_filter_type_aaaa_drop VisibilityPacketCaptureObjectTemplatesDnsVportTmplTriggerStatsIncA#dns_filter_type_aaaa_drop}
  */
  readonly dnsFilterTypeAaaaDrop?: number;
  /**
  * Enable automatic packet-capture for counters DNS Filter Type Any Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_dns_vport_tmpl_trigger_stats_inc#dns_filter_type_any_drop VisibilityPacketCaptureObjectTemplatesDnsVportTmplTriggerStatsIncA#dns_filter_type_any_drop}
  */
  readonly dnsFilterTypeAnyDrop?: number;
  /**
  * Enable automatic packet-capture for counters DNS Filter Type CNAME Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_dns_vport_tmpl_trigger_stats_inc#dns_filter_type_cname_drop VisibilityPacketCaptureObjectTemplatesDnsVportTmplTriggerStatsIncA#dns_filter_type_cname_drop}
  */
  readonly dnsFilterTypeCnameDrop?: number;
  /**
  * Enable automatic packet-capture for counters DNS Filter Type MX Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_dns_vport_tmpl_trigger_stats_inc#dns_filter_type_mx_drop VisibilityPacketCaptureObjectTemplatesDnsVportTmplTriggerStatsIncA#dns_filter_type_mx_drop}
  */
  readonly dnsFilterTypeMxDrop?: number;
  /**
  * Enable automatic packet-capture for counters DNS Filter Type NS Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_dns_vport_tmpl_trigger_stats_inc#dns_filter_type_ns_drop VisibilityPacketCaptureObjectTemplatesDnsVportTmplTriggerStatsIncA#dns_filter_type_ns_drop}
  */
  readonly dnsFilterTypeNsDrop?: number;
  /**
  * Enable automatic packet-capture for counters DNS Filter Type OTHERS Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_dns_vport_tmpl_trigger_stats_inc#dns_filter_type_others_drop VisibilityPacketCaptureObjectTemplatesDnsVportTmplTriggerStatsIncA#dns_filter_type_others_drop}
  */
  readonly dnsFilterTypeOthersDrop?: number;
  /**
  * Enable automatic packet-capture for counters DNS Filter Type PTR Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_dns_vport_tmpl_trigger_stats_inc#dns_filter_type_ptr_drop VisibilityPacketCaptureObjectTemplatesDnsVportTmplTriggerStatsIncA#dns_filter_type_ptr_drop}
  */
  readonly dnsFilterTypePtrDrop?: number;
  /**
  * Enable automatic packet-capture for counters DNS Filter Type SOA Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_dns_vport_tmpl_trigger_stats_inc#dns_filter_type_soa_drop VisibilityPacketCaptureObjectTemplatesDnsVportTmplTriggerStatsIncA#dns_filter_type_soa_drop}
  */
  readonly dnsFilterTypeSoaDrop?: number;
  /**
  * Enable automatic packet-capture for counters DNS Filter Type SRV Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_dns_vport_tmpl_trigger_stats_inc#dns_filter_type_srv_drop VisibilityPacketCaptureObjectTemplatesDnsVportTmplTriggerStatsIncA#dns_filter_type_srv_drop}
  */
  readonly dnsFilterTypeSrvDrop?: number;
  /**
  * Enable automatic packet-capture for counters DNS Filter Type TXT Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_dns_vport_tmpl_trigger_stats_inc#dns_filter_type_txt_drop VisibilityPacketCaptureObjectTemplatesDnsVportTmplTriggerStatsIncA#dns_filter_type_txt_drop}
  */
  readonly dnsFilterTypeTxtDrop?: number;
  /**
  * Enable automatic packet-capture for DNS RPZ Action Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_dns_vport_tmpl_trigger_stats_inc#dns_rpz_action_drop VisibilityPacketCaptureObjectTemplatesDnsVportTmplTriggerStatsIncA#dns_rpz_action_drop}
  */
  readonly dnsRpzActionDrop?: number;
  /**
  * Dns_vport_tmpl_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_dns_vport_tmpl_trigger_stats_inc#dns_vport_tmpl_name VisibilityPacketCaptureObjectTemplatesDnsVportTmplTriggerStatsIncA#dns_vport_tmpl_name}
  */
  readonly dnsVportTmplName: string;
  /**
  * Enable automatic packet-capture for DNS Response-Rate-Limiting Bad FQDN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_dns_vport_tmpl_trigger_stats_inc#dnsrrl_bad_fqdn VisibilityPacketCaptureObjectTemplatesDnsVportTmplTriggerStatsIncA#dnsrrl_bad_fqdn}
  */
  readonly dnsrrlBadFqdn?: number;
  /**
  * Enable automatic packet-capture for dns rrl drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_dns_vport_tmpl_trigger_stats_inc#dnsrrl_total_dropped VisibilityPacketCaptureObjectTemplatesDnsVportTmplTriggerStatsIncA#dnsrrl_total_dropped}
  */
  readonly dnsrrlTotalDropped?: number;
  /**
  * Enable automatic packet-capture for gslb query bad
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_dns_vport_tmpl_trigger_stats_inc#gslb_query_bad VisibilityPacketCaptureObjectTemplatesDnsVportTmplTriggerStatsIncA#gslb_query_bad}
  */
  readonly gslbQueryBad?: number;
  /**
  * Enable automatic packet-capture for gslb response bad
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_dns_vport_tmpl_trigger_stats_inc#gslb_response_bad VisibilityPacketCaptureObjectTemplatesDnsVportTmplTriggerStatsIncA#gslb_response_bad}
  */
  readonly gslbResponseBad?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_dns_vport_tmpl_trigger_stats_inc#id VisibilityPacketCaptureObjectTemplatesDnsVportTmplTriggerStatsIncA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Enable automatic packet-capture for response rcode type error receive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_dns_vport_tmpl_trigger_stats_inc#rcode_notimpl_receive VisibilityPacketCaptureObjectTemplatesDnsVportTmplTriggerStatsIncA#rcode_notimpl_receive}
  */
  readonly rcodeNotimplReceive?: number;
  /**
  * Enable automatic packet-capture for rcode type error response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_dns_vport_tmpl_trigger_stats_inc#rcode_notimpl_response VisibilityPacketCaptureObjectTemplatesDnsVportTmplTriggerStatsIncA#rcode_notimpl_response}
  */
  readonly rcodeNotimplResponse?: number;
  /**
  * Enable automatic packet-capture for counters Total DNS Filter Class Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_dns_vport_tmpl_trigger_stats_inc#total_dns_filter_class_drop VisibilityPacketCaptureObjectTemplatesDnsVportTmplTriggerStatsIncA#total_dns_filter_class_drop}
  */
  readonly totalDnsFilterClassDrop?: number;
  /**
  * Enable automatic packet-capture for counters Total DNS Filter Type Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_dns_vport_tmpl_trigger_stats_inc#total_dns_filter_type_drop VisibilityPacketCaptureObjectTemplatesDnsVportTmplTriggerStatsIncA#total_dns_filter_type_drop}
  */
  readonly totalDnsFilterTypeDrop?: number;
  /**
  * Enable automatic packet-capture for query filter drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_dns_vport_tmpl_trigger_stats_inc#total_filter_drop VisibilityPacketCaptureObjectTemplatesDnsVportTmplTriggerStatsIncA#total_filter_drop}
  */
  readonly totalFilterDrop?: number;
  /**
  * Enable automatic packet-capture for query too long drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_dns_vport_tmpl_trigger_stats_inc#total_max_query_len_drop VisibilityPacketCaptureObjectTemplatesDnsVportTmplTriggerStatsIncA#total_max_query_len_drop}
  */
  readonly totalMaxQueryLenDrop?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_dns_vport_tmpl_trigger_stats_inc#uuid VisibilityPacketCaptureObjectTemplatesDnsVportTmplTriggerStatsIncA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_dns_vport_tmpl_trigger_stats_inc thunder_visibility_packet_capture_object_templates_dns_vport_tmpl_trigger_stats_inc}
*/
export class VisibilityPacketCaptureObjectTemplatesDnsVportTmplTriggerStatsIncA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_packet_capture_object_templates_dns_vport_tmpl_trigger_stats_inc";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VisibilityPacketCaptureObjectTemplatesDnsVportTmplTriggerStatsIncA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VisibilityPacketCaptureObjectTemplatesDnsVportTmplTriggerStatsIncA to import
  * @param importFromId The id of the existing VisibilityPacketCaptureObjectTemplatesDnsVportTmplTriggerStatsIncA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_dns_vport_tmpl_trigger_stats_inc#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VisibilityPacketCaptureObjectTemplatesDnsVportTmplTriggerStatsIncA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_packet_capture_object_templates_dns_vport_tmpl_trigger_stats_inc", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_dns_vport_tmpl_trigger_stats_inc thunder_visibility_packet_capture_object_templates_dns_vport_tmpl_trigger_stats_inc} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VisibilityPacketCaptureObjectTemplatesDnsVportTmplTriggerStatsIncAConfig
  */
  public constructor(scope: Construct, id: string, config: VisibilityPacketCaptureObjectTemplatesDnsVportTmplTriggerStatsIncAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_packet_capture_object_templates_dns_vport_tmpl_trigger_stats_inc',
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
    this._dnsFilterClassAnyDrop = config.dnsFilterClassAnyDrop;
    this._dnsFilterClassChaosDrop = config.dnsFilterClassChaosDrop;
    this._dnsFilterClassHesiodDrop = config.dnsFilterClassHesiodDrop;
    this._dnsFilterClassInternetDrop = config.dnsFilterClassInternetDrop;
    this._dnsFilterClassNoneDrop = config.dnsFilterClassNoneDrop;
    this._dnsFilterClassOthersDrop = config.dnsFilterClassOthersDrop;
    this._dnsFilterTldDrop = config.dnsFilterTldDrop;
    this._dnsFilterTypeADrop = config.dnsFilterTypeADrop;
    this._dnsFilterTypeAaaaDrop = config.dnsFilterTypeAaaaDrop;
    this._dnsFilterTypeAnyDrop = config.dnsFilterTypeAnyDrop;
    this._dnsFilterTypeCnameDrop = config.dnsFilterTypeCnameDrop;
    this._dnsFilterTypeMxDrop = config.dnsFilterTypeMxDrop;
    this._dnsFilterTypeNsDrop = config.dnsFilterTypeNsDrop;
    this._dnsFilterTypeOthersDrop = config.dnsFilterTypeOthersDrop;
    this._dnsFilterTypePtrDrop = config.dnsFilterTypePtrDrop;
    this._dnsFilterTypeSoaDrop = config.dnsFilterTypeSoaDrop;
    this._dnsFilterTypeSrvDrop = config.dnsFilterTypeSrvDrop;
    this._dnsFilterTypeTxtDrop = config.dnsFilterTypeTxtDrop;
    this._dnsRpzActionDrop = config.dnsRpzActionDrop;
    this._dnsVportTmplName = config.dnsVportTmplName;
    this._dnsrrlBadFqdn = config.dnsrrlBadFqdn;
    this._dnsrrlTotalDropped = config.dnsrrlTotalDropped;
    this._gslbQueryBad = config.gslbQueryBad;
    this._gslbResponseBad = config.gslbResponseBad;
    this._id = config.id;
    this._rcodeNotimplReceive = config.rcodeNotimplReceive;
    this._rcodeNotimplResponse = config.rcodeNotimplResponse;
    this._totalDnsFilterClassDrop = config.totalDnsFilterClassDrop;
    this._totalDnsFilterTypeDrop = config.totalDnsFilterTypeDrop;
    this._totalFilterDrop = config.totalFilterDrop;
    this._totalMaxQueryLenDrop = config.totalMaxQueryLenDrop;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // dns_filter_tld_drop - computed: false, optional: true, required: false
  private _dnsFilterTldDrop?: number; 
  public get dnsFilterTldDrop() {
    return this.getNumberAttribute('dns_filter_tld_drop');
  }
  public set dnsFilterTldDrop(value: number) {
    this._dnsFilterTldDrop = value;
  }
  public resetDnsFilterTldDrop() {
    this._dnsFilterTldDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsFilterTldDropInput() {
    return this._dnsFilterTldDrop;
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

  // dns_vport_tmpl_name - computed: false, optional: false, required: true
  private _dnsVportTmplName?: string; 
  public get dnsVportTmplName() {
    return this.getStringAttribute('dns_vport_tmpl_name');
  }
  public set dnsVportTmplName(value: string) {
    this._dnsVportTmplName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsVportTmplNameInput() {
    return this._dnsVportTmplName;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dns_filter_class_any_drop: cdktf.numberToTerraform(this._dnsFilterClassAnyDrop),
      dns_filter_class_chaos_drop: cdktf.numberToTerraform(this._dnsFilterClassChaosDrop),
      dns_filter_class_hesiod_drop: cdktf.numberToTerraform(this._dnsFilterClassHesiodDrop),
      dns_filter_class_internet_drop: cdktf.numberToTerraform(this._dnsFilterClassInternetDrop),
      dns_filter_class_none_drop: cdktf.numberToTerraform(this._dnsFilterClassNoneDrop),
      dns_filter_class_others_drop: cdktf.numberToTerraform(this._dnsFilterClassOthersDrop),
      dns_filter_tld_drop: cdktf.numberToTerraform(this._dnsFilterTldDrop),
      dns_filter_type_a_drop: cdktf.numberToTerraform(this._dnsFilterTypeADrop),
      dns_filter_type_aaaa_drop: cdktf.numberToTerraform(this._dnsFilterTypeAaaaDrop),
      dns_filter_type_any_drop: cdktf.numberToTerraform(this._dnsFilterTypeAnyDrop),
      dns_filter_type_cname_drop: cdktf.numberToTerraform(this._dnsFilterTypeCnameDrop),
      dns_filter_type_mx_drop: cdktf.numberToTerraform(this._dnsFilterTypeMxDrop),
      dns_filter_type_ns_drop: cdktf.numberToTerraform(this._dnsFilterTypeNsDrop),
      dns_filter_type_others_drop: cdktf.numberToTerraform(this._dnsFilterTypeOthersDrop),
      dns_filter_type_ptr_drop: cdktf.numberToTerraform(this._dnsFilterTypePtrDrop),
      dns_filter_type_soa_drop: cdktf.numberToTerraform(this._dnsFilterTypeSoaDrop),
      dns_filter_type_srv_drop: cdktf.numberToTerraform(this._dnsFilterTypeSrvDrop),
      dns_filter_type_txt_drop: cdktf.numberToTerraform(this._dnsFilterTypeTxtDrop),
      dns_rpz_action_drop: cdktf.numberToTerraform(this._dnsRpzActionDrop),
      dns_vport_tmpl_name: cdktf.stringToTerraform(this._dnsVportTmplName),
      dnsrrl_bad_fqdn: cdktf.numberToTerraform(this._dnsrrlBadFqdn),
      dnsrrl_total_dropped: cdktf.numberToTerraform(this._dnsrrlTotalDropped),
      gslb_query_bad: cdktf.numberToTerraform(this._gslbQueryBad),
      gslb_response_bad: cdktf.numberToTerraform(this._gslbResponseBad),
      id: cdktf.stringToTerraform(this._id),
      rcode_notimpl_receive: cdktf.numberToTerraform(this._rcodeNotimplReceive),
      rcode_notimpl_response: cdktf.numberToTerraform(this._rcodeNotimplResponse),
      total_dns_filter_class_drop: cdktf.numberToTerraform(this._totalDnsFilterClassDrop),
      total_dns_filter_type_drop: cdktf.numberToTerraform(this._totalDnsFilterTypeDrop),
      total_filter_drop: cdktf.numberToTerraform(this._totalFilterDrop),
      total_max_query_len_drop: cdktf.numberToTerraform(this._totalMaxQueryLenDrop),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dns_filter_class_any_drop: {
        value: cdktf.numberToHclTerraform(this._dnsFilterClassAnyDrop),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dns_filter_class_chaos_drop: {
        value: cdktf.numberToHclTerraform(this._dnsFilterClassChaosDrop),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dns_filter_class_hesiod_drop: {
        value: cdktf.numberToHclTerraform(this._dnsFilterClassHesiodDrop),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dns_filter_class_internet_drop: {
        value: cdktf.numberToHclTerraform(this._dnsFilterClassInternetDrop),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dns_filter_class_none_drop: {
        value: cdktf.numberToHclTerraform(this._dnsFilterClassNoneDrop),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dns_filter_class_others_drop: {
        value: cdktf.numberToHclTerraform(this._dnsFilterClassOthersDrop),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dns_filter_tld_drop: {
        value: cdktf.numberToHclTerraform(this._dnsFilterTldDrop),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dns_filter_type_a_drop: {
        value: cdktf.numberToHclTerraform(this._dnsFilterTypeADrop),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dns_filter_type_aaaa_drop: {
        value: cdktf.numberToHclTerraform(this._dnsFilterTypeAaaaDrop),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dns_filter_type_any_drop: {
        value: cdktf.numberToHclTerraform(this._dnsFilterTypeAnyDrop),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dns_filter_type_cname_drop: {
        value: cdktf.numberToHclTerraform(this._dnsFilterTypeCnameDrop),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dns_filter_type_mx_drop: {
        value: cdktf.numberToHclTerraform(this._dnsFilterTypeMxDrop),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dns_filter_type_ns_drop: {
        value: cdktf.numberToHclTerraform(this._dnsFilterTypeNsDrop),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dns_filter_type_others_drop: {
        value: cdktf.numberToHclTerraform(this._dnsFilterTypeOthersDrop),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dns_filter_type_ptr_drop: {
        value: cdktf.numberToHclTerraform(this._dnsFilterTypePtrDrop),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dns_filter_type_soa_drop: {
        value: cdktf.numberToHclTerraform(this._dnsFilterTypeSoaDrop),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dns_filter_type_srv_drop: {
        value: cdktf.numberToHclTerraform(this._dnsFilterTypeSrvDrop),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dns_filter_type_txt_drop: {
        value: cdktf.numberToHclTerraform(this._dnsFilterTypeTxtDrop),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dns_rpz_action_drop: {
        value: cdktf.numberToHclTerraform(this._dnsRpzActionDrop),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dns_vport_tmpl_name: {
        value: cdktf.stringToHclTerraform(this._dnsVportTmplName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dnsrrl_bad_fqdn: {
        value: cdktf.numberToHclTerraform(this._dnsrrlBadFqdn),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dnsrrl_total_dropped: {
        value: cdktf.numberToHclTerraform(this._dnsrrlTotalDropped),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gslb_query_bad: {
        value: cdktf.numberToHclTerraform(this._gslbQueryBad),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gslb_response_bad: {
        value: cdktf.numberToHclTerraform(this._gslbResponseBad),
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
      rcode_notimpl_receive: {
        value: cdktf.numberToHclTerraform(this._rcodeNotimplReceive),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rcode_notimpl_response: {
        value: cdktf.numberToHclTerraform(this._rcodeNotimplResponse),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      total_dns_filter_class_drop: {
        value: cdktf.numberToHclTerraform(this._totalDnsFilterClassDrop),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      total_dns_filter_type_drop: {
        value: cdktf.numberToHclTerraform(this._totalDnsFilterTypeDrop),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      total_filter_drop: {
        value: cdktf.numberToHclTerraform(this._totalFilterDrop),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      total_max_query_len_drop: {
        value: cdktf.numberToHclTerraform(this._totalMaxQueryLenDrop),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
