// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DdosDstZonePortZoneServiceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Idle age for ip entry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#age DdosDstZonePortZoneService#age}
  */
  readonly age?: number;
  /**
  * Enable this flag to apply overflow policy when dynamic entry count overflows
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#apply_policy_on_overflow DdosDstZonePortZoneService#apply_policy_on_overflow}
  */
  readonly applyPolicyOnOverflow?: number;
  /**
  * Configure default-action-list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#default_action_list DdosDstZonePortZoneService#default_action_list}
  */
  readonly defaultActionList?: string;
  /**
  * Blacklist and Drop all incoming packets for protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#deny DdosDstZonePortZoneService#deny}
  */
  readonly deny?: number;
  /**
  * Apply class-list overflow policy upon exceeding dynamic entry count specified for zone-port or class-list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#enable_class_list_overflow DdosDstZonePortZoneService#enable_class_list_overflow}
  */
  readonly enableClassListOverflow?: number;
  /**
  * Enable ddos top-k source IP detection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#enable_top_k DdosDstZonePortZoneService#enable_top_k}
  */
  readonly enableTopK?: number;
  /**
  * Enable ddos top-k destination IP detection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#enable_top_k_destination DdosDstZonePortZoneService#enable_top_k_destination}
  */
  readonly enableTopKDestination?: number;
  /**
  * De-escalate faster in standalone mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#faster_de_escalation DdosDstZonePortZoneService#faster_de_escalation}
  */
  readonly fasterDeEscalation?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#id DdosDstZonePortZoneService#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Configure IP Filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#ip_filtering_policy DdosDstZonePortZoneService#ip_filtering_policy}
  */
  readonly ipFilteringPolicy?: string;
  /**
  * Toggle manual mode to use fix templates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#manual_mode_enable DdosDstZonePortZoneService#manual_mode_enable}
  */
  readonly manualModeEnable?: number;
  /**
  * Maximum count for dynamic source zone service entry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#max_dynamic_entry_count DdosDstZonePortZoneService#max_dynamic_entry_count}
  */
  readonly maxDynamicEntryCount?: number;
  /**
  * Only allow outbound traffic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#outbound_only DdosDstZonePortZoneService#outbound_only}
  */
  readonly outboundOnly?: number;
  /**
  * Port Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#port_num DdosDstZonePortZoneService#port_num}
  */
  readonly portNum: number;
  /**
  * 'dns-tcp': DNS-TCP Port; 'dns-udp': DNS-UDP Port; 'http': HTTP Port; 'tcp': TCP Port; 'udp': UDP Port; 'ssl-l4': SSL-L4 Port; 'sip-udp': SIP-UDP Port; 'sip-tcp': SIP-TCP Port; 'quic': QUIC Port;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#protocol DdosDstZonePortZoneService#protocol}
  */
  readonly protocol: string;
  /**
  * Set T2 counter value of current context to specified value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#set_counter_base_val DdosDstZonePortZoneService#set_counter_base_val}
  */
  readonly setCounterBaseVal?: number;
  /**
  * Enable all sFlow polling options under this zone port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#sflow_common DdosDstZonePortZoneService#sflow_common}
  */
  readonly sflowCommon?: number;
  /**
  * Enable sFlow HTTP counter polling
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#sflow_http DdosDstZonePortZoneService#sflow_http}
  */
  readonly sflowHttp?: number;
  /**
  * Enable sFlow packet-level counter polling
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#sflow_packets DdosDstZonePortZoneService#sflow_packets}
  */
  readonly sflowPackets?: number;
  /**
  * Enable stateful tracking of sessions (Default is stateless)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#stateful DdosDstZonePortZoneService#stateful}
  */
  readonly stateful?: number;
  /**
  * Maximum number of records to show in topk
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#topk_dst_num_records DdosDstZonePortZoneService#topk_dst_num_records}
  */
  readonly topkDstNumRecords?: number;
  /**
  * Maximum number of records to show in topk
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#topk_num_records DdosDstZonePortZoneService#topk_num_records}
  */
  readonly topkNumRecords?: number;
  /**
  * No limit for maximum dynamic src entry count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#unlimited_dynamic_entry_count DdosDstZonePortZoneService#unlimited_dynamic_entry_count}
  */
  readonly unlimitedDynamicEntryCount?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#uuid DdosDstZonePortZoneService#uuid}
  */
  readonly uuid?: string;
  /**
  * ZoneName
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#zone_name DdosDstZonePortZoneService#zone_name}
  */
  readonly zoneName: string;
  /**
  * capture_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#capture_config DdosDstZonePortZoneService#capture_config}
  */
  readonly captureConfig?: DdosDstZonePortZoneServiceCaptureConfig;
  /**
  * dynamic_entry_overflow_policy_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#dynamic_entry_overflow_policy_list DdosDstZonePortZoneService#dynamic_entry_overflow_policy_list}
  */
  readonly dynamicEntryOverflowPolicyList?: DdosDstZonePortZoneServiceDynamicEntryOverflowPolicyListStruct[] | cdktf.IResolvable;
  /**
  * glid_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#glid_cfg DdosDstZonePortZoneService#glid_cfg}
  */
  readonly glidCfg?: DdosDstZonePortZoneServiceGlidCfg;
  /**
  * ip_filtering_policy_oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#ip_filtering_policy_oper DdosDstZonePortZoneService#ip_filtering_policy_oper}
  */
  readonly ipFilteringPolicyOper?: DdosDstZonePortZoneServiceIpFilteringPolicyOper;
  /**
  * ips block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#ips DdosDstZonePortZoneService#ips}
  */
  readonly ips?: DdosDstZonePortZoneServiceIps;
  /**
  * level_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#level_list DdosDstZonePortZoneService#level_list}
  */
  readonly levelList?: DdosDstZonePortZoneServiceLevelListStruct[] | cdktf.IResolvable;
  /**
  * manual_mode_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#manual_mode_list DdosDstZonePortZoneService#manual_mode_list}
  */
  readonly manualModeList?: DdosDstZonePortZoneServiceManualModeListStruct[] | cdktf.IResolvable;
  /**
  * pattern_recognition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#pattern_recognition DdosDstZonePortZoneService#pattern_recognition}
  */
  readonly patternRecognition?: DdosDstZonePortZoneServicePatternRecognition;
  /**
  * pattern_recognition_pu_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#pattern_recognition_pu_details DdosDstZonePortZoneService#pattern_recognition_pu_details}
  */
  readonly patternRecognitionPuDetails?: DdosDstZonePortZoneServicePatternRecognitionPuDetails;
  /**
  * port_ind block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#port_ind DdosDstZonePortZoneService#port_ind}
  */
  readonly portInd?: DdosDstZonePortZoneServicePortInd;
  /**
  * progression_tracking block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#progression_tracking DdosDstZonePortZoneService#progression_tracking}
  */
  readonly progressionTracking?: DdosDstZonePortZoneServiceProgressionTracking;
  /**
  * sflow_tcp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#sflow_tcp DdosDstZonePortZoneService#sflow_tcp}
  */
  readonly sflowTcp?: DdosDstZonePortZoneServiceSflowTcp;
  /**
  * signature_extraction block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#signature_extraction DdosDstZonePortZoneService#signature_extraction}
  */
  readonly signatureExtraction?: DdosDstZonePortZoneServiceSignatureExtraction;
  /**
  * src_based_policy_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#src_based_policy_list DdosDstZonePortZoneService#src_based_policy_list}
  */
  readonly srcBasedPolicyList?: DdosDstZonePortZoneServiceSrcBasedPolicyListStruct[] | cdktf.IResolvable;
  /**
  * topk_destinations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#topk_destinations DdosDstZonePortZoneService#topk_destinations}
  */
  readonly topkDestinations?: DdosDstZonePortZoneServiceTopkDestinations;
  /**
  * topk_sources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#topk_sources DdosDstZonePortZoneService#topk_sources}
  */
  readonly topkSources?: DdosDstZonePortZoneServiceTopkSources;
}
export interface DdosDstZonePortZoneServiceCaptureConfig {
  /**
  * 'drop': Apply capture-config to dropped packets; 'forward': Apply capture-config to forwarded packets; 'all': Apply capture-config to both dropped and forwarded packets;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#capture_config_mode DdosDstZonePortZoneService#capture_config_mode}
  */
  readonly captureConfigMode?: string;
  /**
  * Capture-config name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#capture_config_name DdosDstZonePortZoneService#capture_config_name}
  */
  readonly captureConfigName?: string;
}

export function ddosDstZonePortZoneServiceCaptureConfigToTerraform(struct?: DdosDstZonePortZoneServiceCaptureConfigOutputReference | DdosDstZonePortZoneServiceCaptureConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    capture_config_mode: cdktf.stringToTerraform(struct!.captureConfigMode),
    capture_config_name: cdktf.stringToTerraform(struct!.captureConfigName),
  }
}


export function ddosDstZonePortZoneServiceCaptureConfigToHclTerraform(struct?: DdosDstZonePortZoneServiceCaptureConfigOutputReference | DdosDstZonePortZoneServiceCaptureConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    capture_config_mode: {
      value: cdktf.stringToHclTerraform(struct!.captureConfigMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    capture_config_name: {
      value: cdktf.stringToHclTerraform(struct!.captureConfigName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstZonePortZoneServiceCaptureConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstZonePortZoneServiceCaptureConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._captureConfigMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.captureConfigMode = this._captureConfigMode;
    }
    if (this._captureConfigName !== undefined) {
      hasAnyValues = true;
      internalValueResult.captureConfigName = this._captureConfigName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstZonePortZoneServiceCaptureConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._captureConfigMode = undefined;
      this._captureConfigName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._captureConfigMode = value.captureConfigMode;
      this._captureConfigName = value.captureConfigName;
    }
  }

  // capture_config_mode - computed: false, optional: true, required: false
  private _captureConfigMode?: string; 
  public get captureConfigMode() {
    return this.getStringAttribute('capture_config_mode');
  }
  public set captureConfigMode(value: string) {
    this._captureConfigMode = value;
  }
  public resetCaptureConfigMode() {
    this._captureConfigMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captureConfigModeInput() {
    return this._captureConfigMode;
  }

  // capture_config_name - computed: false, optional: true, required: false
  private _captureConfigName?: string; 
  public get captureConfigName() {
    return this.getStringAttribute('capture_config_name');
  }
  public set captureConfigName(value: string) {
    this._captureConfigName = value;
  }
  public resetCaptureConfigName() {
    this._captureConfigName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captureConfigNameInput() {
    return this._captureConfigName;
  }
}
export interface DdosDstZonePortZoneServiceDynamicEntryOverflowPolicyListZoneTemplate {
  /**
  * DDOS dns template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#dns DdosDstZonePortZoneService#dns}
  */
  readonly dns?: string;
  /**
  * DDOS encap template (IPv6-over-IPv4 / IPv4-over-IPv6 are not supported.)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#encap DdosDstZonePortZoneService#encap}
  */
  readonly encap?: string;
  /**
  * DDOS http template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#http DdosDstZonePortZoneService#http}
  */
  readonly http?: string;
  /**
  * DDOS logging template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#logging DdosDstZonePortZoneService#logging}
  */
  readonly logging?: string;
  /**
  * DDOS quic template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#quic DdosDstZonePortZoneService#quic}
  */
  readonly quic?: string;
  /**
  * DDOS sip template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#sip DdosDstZonePortZoneService#sip}
  */
  readonly sip?: string;
  /**
  * DDOS ssl-l4 template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#ssl_l4 DdosDstZonePortZoneService#ssl_l4}
  */
  readonly sslL4?: string;
  /**
  * DDOS tcp template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#tcp DdosDstZonePortZoneService#tcp}
  */
  readonly tcp?: string;
  /**
  * DDOS udp template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#udp DdosDstZonePortZoneService#udp}
  */
  readonly udp?: string;
}

export function ddosDstZonePortZoneServiceDynamicEntryOverflowPolicyListZoneTemplateToTerraform(struct?: DdosDstZonePortZoneServiceDynamicEntryOverflowPolicyListZoneTemplateOutputReference | DdosDstZonePortZoneServiceDynamicEntryOverflowPolicyListZoneTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns: cdktf.stringToTerraform(struct!.dns),
    encap: cdktf.stringToTerraform(struct!.encap),
    http: cdktf.stringToTerraform(struct!.http),
    logging: cdktf.stringToTerraform(struct!.logging),
    quic: cdktf.stringToTerraform(struct!.quic),
    sip: cdktf.stringToTerraform(struct!.sip),
    ssl_l4: cdktf.stringToTerraform(struct!.sslL4),
    tcp: cdktf.stringToTerraform(struct!.tcp),
    udp: cdktf.stringToTerraform(struct!.udp),
  }
}


export function ddosDstZonePortZoneServiceDynamicEntryOverflowPolicyListZoneTemplateToHclTerraform(struct?: DdosDstZonePortZoneServiceDynamicEntryOverflowPolicyListZoneTemplateOutputReference | DdosDstZonePortZoneServiceDynamicEntryOverflowPolicyListZoneTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns: {
      value: cdktf.stringToHclTerraform(struct!.dns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encap: {
      value: cdktf.stringToHclTerraform(struct!.encap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http: {
      value: cdktf.stringToHclTerraform(struct!.http),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logging: {
      value: cdktf.stringToHclTerraform(struct!.logging),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    quic: {
      value: cdktf.stringToHclTerraform(struct!.quic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sip: {
      value: cdktf.stringToHclTerraform(struct!.sip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_l4: {
      value: cdktf.stringToHclTerraform(struct!.sslL4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tcp: {
      value: cdktf.stringToHclTerraform(struct!.tcp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    udp: {
      value: cdktf.stringToHclTerraform(struct!.udp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstZonePortZoneServiceDynamicEntryOverflowPolicyListZoneTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstZonePortZoneServiceDynamicEntryOverflowPolicyListZoneTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dns !== undefined) {
      hasAnyValues = true;
      internalValueResult.dns = this._dns;
    }
    if (this._encap !== undefined) {
      hasAnyValues = true;
      internalValueResult.encap = this._encap;
    }
    if (this._http !== undefined) {
      hasAnyValues = true;
      internalValueResult.http = this._http;
    }
    if (this._logging !== undefined) {
      hasAnyValues = true;
      internalValueResult.logging = this._logging;
    }
    if (this._quic !== undefined) {
      hasAnyValues = true;
      internalValueResult.quic = this._quic;
    }
    if (this._sip !== undefined) {
      hasAnyValues = true;
      internalValueResult.sip = this._sip;
    }
    if (this._sslL4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslL4 = this._sslL4;
    }
    if (this._tcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcp = this._tcp;
    }
    if (this._udp !== undefined) {
      hasAnyValues = true;
      internalValueResult.udp = this._udp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstZonePortZoneServiceDynamicEntryOverflowPolicyListZoneTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dns = undefined;
      this._encap = undefined;
      this._http = undefined;
      this._logging = undefined;
      this._quic = undefined;
      this._sip = undefined;
      this._sslL4 = undefined;
      this._tcp = undefined;
      this._udp = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dns = value.dns;
      this._encap = value.encap;
      this._http = value.http;
      this._logging = value.logging;
      this._quic = value.quic;
      this._sip = value.sip;
      this._sslL4 = value.sslL4;
      this._tcp = value.tcp;
      this._udp = value.udp;
    }
  }

  // dns - computed: false, optional: true, required: false
  private _dns?: string; 
  public get dns() {
    return this.getStringAttribute('dns');
  }
  public set dns(value: string) {
    this._dns = value;
  }
  public resetDns() {
    this._dns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsInput() {
    return this._dns;
  }

  // encap - computed: false, optional: true, required: false
  private _encap?: string; 
  public get encap() {
    return this.getStringAttribute('encap');
  }
  public set encap(value: string) {
    this._encap = value;
  }
  public resetEncap() {
    this._encap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encapInput() {
    return this._encap;
  }

  // http - computed: false, optional: true, required: false
  private _http?: string; 
  public get http() {
    return this.getStringAttribute('http');
  }
  public set http(value: string) {
    this._http = value;
  }
  public resetHttp() {
    this._http = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpInput() {
    return this._http;
  }

  // logging - computed: false, optional: true, required: false
  private _logging?: string; 
  public get logging() {
    return this.getStringAttribute('logging');
  }
  public set logging(value: string) {
    this._logging = value;
  }
  public resetLogging() {
    this._logging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingInput() {
    return this._logging;
  }

  // quic - computed: false, optional: true, required: false
  private _quic?: string; 
  public get quic() {
    return this.getStringAttribute('quic');
  }
  public set quic(value: string) {
    this._quic = value;
  }
  public resetQuic() {
    this._quic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quicInput() {
    return this._quic;
  }

  // sip - computed: false, optional: true, required: false
  private _sip?: string; 
  public get sip() {
    return this.getStringAttribute('sip');
  }
  public set sip(value: string) {
    this._sip = value;
  }
  public resetSip() {
    this._sip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sipInput() {
    return this._sip;
  }

  // ssl_l4 - computed: false, optional: true, required: false
  private _sslL4?: string; 
  public get sslL4() {
    return this.getStringAttribute('ssl_l4');
  }
  public set sslL4(value: string) {
    this._sslL4 = value;
  }
  public resetSslL4() {
    this._sslL4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslL4Input() {
    return this._sslL4;
  }

  // tcp - computed: false, optional: true, required: false
  private _tcp?: string; 
  public get tcp() {
    return this.getStringAttribute('tcp');
  }
  public set tcp(value: string) {
    this._tcp = value;
  }
  public resetTcp() {
    this._tcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpInput() {
    return this._tcp;
  }

  // udp - computed: false, optional: true, required: false
  private _udp?: string; 
  public get udp() {
    return this.getStringAttribute('udp');
  }
  public set udp(value: string) {
    this._udp = value;
  }
  public resetUdp() {
    this._udp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpInput() {
    return this._udp;
  }
}
export interface DdosDstZonePortZoneServiceDynamicEntryOverflowPolicyListStruct {
  /**
  * 'bypass': Always permit for the Source to bypass all feature & limit checks; 'deny': Blacklist incoming packets for service;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#action DdosDstZonePortZoneService#action}
  */
  readonly action?: string;
  /**
  * 'configuration': Configure overflow policy;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#dummy_name DdosDstZonePortZoneService#dummy_name}
  */
  readonly dummyName: string;
  /**
  * Global limit ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#glid DdosDstZonePortZoneService#glid}
  */
  readonly glid?: string;
  /**
  * Enable logging
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#log_enable DdosDstZonePortZoneService#log_enable}
  */
  readonly logEnable?: number;
  /**
  * Enable log periodic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#log_periodic DdosDstZonePortZoneService#log_periodic}
  */
  readonly logPeriodic?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#user_tag DdosDstZonePortZoneService#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#uuid DdosDstZonePortZoneService#uuid}
  */
  readonly uuid?: string;
  /**
  * zone_template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#zone_template DdosDstZonePortZoneService#zone_template}
  */
  readonly zoneTemplate?: DdosDstZonePortZoneServiceDynamicEntryOverflowPolicyListZoneTemplate;
}

export function ddosDstZonePortZoneServiceDynamicEntryOverflowPolicyListStructToTerraform(struct?: DdosDstZonePortZoneServiceDynamicEntryOverflowPolicyListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    dummy_name: cdktf.stringToTerraform(struct!.dummyName),
    glid: cdktf.stringToTerraform(struct!.glid),
    log_enable: cdktf.numberToTerraform(struct!.logEnable),
    log_periodic: cdktf.numberToTerraform(struct!.logPeriodic),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    zone_template: ddosDstZonePortZoneServiceDynamicEntryOverflowPolicyListZoneTemplateToTerraform(struct!.zoneTemplate),
  }
}


export function ddosDstZonePortZoneServiceDynamicEntryOverflowPolicyListStructToHclTerraform(struct?: DdosDstZonePortZoneServiceDynamicEntryOverflowPolicyListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dummy_name: {
      value: cdktf.stringToHclTerraform(struct!.dummyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    glid: {
      value: cdktf.stringToHclTerraform(struct!.glid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_enable: {
      value: cdktf.numberToHclTerraform(struct!.logEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log_periodic: {
      value: cdktf.numberToHclTerraform(struct!.logPeriodic),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    user_tag: {
      value: cdktf.stringToHclTerraform(struct!.userTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zone_template: {
      value: ddosDstZonePortZoneServiceDynamicEntryOverflowPolicyListZoneTemplateToHclTerraform(struct!.zoneTemplate),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstZonePortZoneServiceDynamicEntryOverflowPolicyListZoneTemplateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstZonePortZoneServiceDynamicEntryOverflowPolicyListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosDstZonePortZoneServiceDynamicEntryOverflowPolicyListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._dummyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dummyName = this._dummyName;
    }
    if (this._glid !== undefined) {
      hasAnyValues = true;
      internalValueResult.glid = this._glid;
    }
    if (this._logEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.logEnable = this._logEnable;
    }
    if (this._logPeriodic !== undefined) {
      hasAnyValues = true;
      internalValueResult.logPeriodic = this._logPeriodic;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._zoneTemplate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneTemplate = this._zoneTemplate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstZonePortZoneServiceDynamicEntryOverflowPolicyListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._dummyName = undefined;
      this._glid = undefined;
      this._logEnable = undefined;
      this._logPeriodic = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
      this._zoneTemplate.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._dummyName = value.dummyName;
      this._glid = value.glid;
      this._logEnable = value.logEnable;
      this._logPeriodic = value.logPeriodic;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
      this._zoneTemplate.internalValue = value.zoneTemplate;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // dummy_name - computed: false, optional: false, required: true
  private _dummyName?: string; 
  public get dummyName() {
    return this.getStringAttribute('dummy_name');
  }
  public set dummyName(value: string) {
    this._dummyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dummyNameInput() {
    return this._dummyName;
  }

  // glid - computed: false, optional: true, required: false
  private _glid?: string; 
  public get glid() {
    return this.getStringAttribute('glid');
  }
  public set glid(value: string) {
    this._glid = value;
  }
  public resetGlid() {
    this._glid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get glidInput() {
    return this._glid;
  }

  // log_enable - computed: false, optional: true, required: false
  private _logEnable?: number; 
  public get logEnable() {
    return this.getNumberAttribute('log_enable');
  }
  public set logEnable(value: number) {
    this._logEnable = value;
  }
  public resetLogEnable() {
    this._logEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logEnableInput() {
    return this._logEnable;
  }

  // log_periodic - computed: false, optional: true, required: false
  private _logPeriodic?: number; 
  public get logPeriodic() {
    return this.getNumberAttribute('log_periodic');
  }
  public set logPeriodic(value: number) {
    this._logPeriodic = value;
  }
  public resetLogPeriodic() {
    this._logPeriodic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logPeriodicInput() {
    return this._logPeriodic;
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

  // zone_template - computed: false, optional: true, required: false
  private _zoneTemplate = new DdosDstZonePortZoneServiceDynamicEntryOverflowPolicyListZoneTemplateOutputReference(this, "zone_template");
  public get zoneTemplate() {
    return this._zoneTemplate;
  }
  public putZoneTemplate(value: DdosDstZonePortZoneServiceDynamicEntryOverflowPolicyListZoneTemplate) {
    this._zoneTemplate.internalValue = value;
  }
  public resetZoneTemplate() {
    this._zoneTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneTemplateInput() {
    return this._zoneTemplate.internalValue;
  }
}

export class DdosDstZonePortZoneServiceDynamicEntryOverflowPolicyListStructList extends cdktf.ComplexList {
  public internalValue? : DdosDstZonePortZoneServiceDynamicEntryOverflowPolicyListStruct[] | cdktf.IResolvable

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
  public get(index: number): DdosDstZonePortZoneServiceDynamicEntryOverflowPolicyListStructOutputReference {
    return new DdosDstZonePortZoneServiceDynamicEntryOverflowPolicyListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosDstZonePortZoneServiceGlidCfg {
  /**
  * Configure action-list to take
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#action_list DdosDstZonePortZoneService#action_list}
  */
  readonly actionList?: string;
  /**
  * Global limit ID for the whole zone
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#glid DdosDstZonePortZoneService#glid}
  */
  readonly glid?: string;
  /**
  * 'drop': Drop packets for glid exceed (Default if default-action-list is not configured); 'ignore': Do nothing for glid exceed;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#glid_action DdosDstZonePortZoneService#glid_action}
  */
  readonly glidAction?: string;
  /**
  * Global limit ID per address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#per_addr_glid DdosDstZonePortZoneService#per_addr_glid}
  */
  readonly perAddrGlid?: string;
}

export function ddosDstZonePortZoneServiceGlidCfgToTerraform(struct?: DdosDstZonePortZoneServiceGlidCfgOutputReference | DdosDstZonePortZoneServiceGlidCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_list: cdktf.stringToTerraform(struct!.actionList),
    glid: cdktf.stringToTerraform(struct!.glid),
    glid_action: cdktf.stringToTerraform(struct!.glidAction),
    per_addr_glid: cdktf.stringToTerraform(struct!.perAddrGlid),
  }
}


export function ddosDstZonePortZoneServiceGlidCfgToHclTerraform(struct?: DdosDstZonePortZoneServiceGlidCfgOutputReference | DdosDstZonePortZoneServiceGlidCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action_list: {
      value: cdktf.stringToHclTerraform(struct!.actionList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    glid: {
      value: cdktf.stringToHclTerraform(struct!.glid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    glid_action: {
      value: cdktf.stringToHclTerraform(struct!.glidAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    per_addr_glid: {
      value: cdktf.stringToHclTerraform(struct!.perAddrGlid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstZonePortZoneServiceGlidCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstZonePortZoneServiceGlidCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionList !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionList = this._actionList;
    }
    if (this._glid !== undefined) {
      hasAnyValues = true;
      internalValueResult.glid = this._glid;
    }
    if (this._glidAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.glidAction = this._glidAction;
    }
    if (this._perAddrGlid !== undefined) {
      hasAnyValues = true;
      internalValueResult.perAddrGlid = this._perAddrGlid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstZonePortZoneServiceGlidCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._actionList = undefined;
      this._glid = undefined;
      this._glidAction = undefined;
      this._perAddrGlid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._actionList = value.actionList;
      this._glid = value.glid;
      this._glidAction = value.glidAction;
      this._perAddrGlid = value.perAddrGlid;
    }
  }

  // action_list - computed: false, optional: true, required: false
  private _actionList?: string; 
  public get actionList() {
    return this.getStringAttribute('action_list');
  }
  public set actionList(value: string) {
    this._actionList = value;
  }
  public resetActionList() {
    this._actionList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionListInput() {
    return this._actionList;
  }

  // glid - computed: false, optional: true, required: false
  private _glid?: string; 
  public get glid() {
    return this.getStringAttribute('glid');
  }
  public set glid(value: string) {
    this._glid = value;
  }
  public resetGlid() {
    this._glid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get glidInput() {
    return this._glid;
  }

  // glid_action - computed: false, optional: true, required: false
  private _glidAction?: string; 
  public get glidAction() {
    return this.getStringAttribute('glid_action');
  }
  public set glidAction(value: string) {
    this._glidAction = value;
  }
  public resetGlidAction() {
    this._glidAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get glidActionInput() {
    return this._glidAction;
  }

  // per_addr_glid - computed: false, optional: true, required: false
  private _perAddrGlid?: string; 
  public get perAddrGlid() {
    return this.getStringAttribute('per_addr_glid');
  }
  public set perAddrGlid(value: string) {
    this._perAddrGlid = value;
  }
  public resetPerAddrGlid() {
    this._perAddrGlid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perAddrGlidInput() {
    return this._perAddrGlid;
  }
}
export interface DdosDstZonePortZoneServiceIpFilteringPolicyOper {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#uuid DdosDstZonePortZoneService#uuid}
  */
  readonly uuid?: string;
}

export function ddosDstZonePortZoneServiceIpFilteringPolicyOperToTerraform(struct?: DdosDstZonePortZoneServiceIpFilteringPolicyOperOutputReference | DdosDstZonePortZoneServiceIpFilteringPolicyOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function ddosDstZonePortZoneServiceIpFilteringPolicyOperToHclTerraform(struct?: DdosDstZonePortZoneServiceIpFilteringPolicyOperOutputReference | DdosDstZonePortZoneServiceIpFilteringPolicyOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class DdosDstZonePortZoneServiceIpFilteringPolicyOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstZonePortZoneServiceIpFilteringPolicyOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstZonePortZoneServiceIpFilteringPolicyOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
    }
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
export interface DdosDstZonePortZoneServiceIpsSamplingEnable {
  /**
  * 'all': all; 'ips_matched_total': IPS Matched Total; 'ips_matched_action_pass': IPS Matched Action Pass; 'ips_matched_action_drop': IPS Matched Action Drop; 'ips_matched_action_blacklist': IPS Matched Action Blacklist; 'ips_matched_severity_high': IPS Matched Severity High; 'ips_matched_severity_medium': IPS Matched Severity Medium; 'ips_matched_severity_low': IPS Matched Severity Low; 'src_ips_matched_action_pass': Src IPS Matched Action Pass; 'src_ips_matched_action_drop': Src IPS Matched Action Drop; 'src_ips_matched_action_blacklist': Src IPS Matched Action Blacklist; 'src_ips_matched_severity_high': Src IPS Matched Severity High; 'src_ips_matched_severity_medium': Src IPS Matched Severity Medium; 'src_ips_matched_severity_low': Src IPS Matched Severity Low;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#counters1 DdosDstZonePortZoneService#counters1}
  */
  readonly counters1?: string;
}

export function ddosDstZonePortZoneServiceIpsSamplingEnableToTerraform(struct?: DdosDstZonePortZoneServiceIpsSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function ddosDstZonePortZoneServiceIpsSamplingEnableToHclTerraform(struct?: DdosDstZonePortZoneServiceIpsSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    counters1: {
      value: cdktf.stringToHclTerraform(struct!.counters1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstZonePortZoneServiceIpsSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosDstZonePortZoneServiceIpsSamplingEnable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counters1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters1 = this._counters1;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstZonePortZoneServiceIpsSamplingEnable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counters1 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._counters1 = value.counters1;
    }
  }

  // counters1 - computed: false, optional: true, required: false
  private _counters1?: string; 
  public get counters1() {
    return this.getStringAttribute('counters1');
  }
  public set counters1(value: string) {
    this._counters1 = value;
  }
  public resetCounters1() {
    this._counters1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters1Input() {
    return this._counters1;
  }
}

export class DdosDstZonePortZoneServiceIpsSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : DdosDstZonePortZoneServiceIpsSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): DdosDstZonePortZoneServiceIpsSamplingEnableOutputReference {
    return new DdosDstZonePortZoneServiceIpsSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosDstZonePortZoneServiceIps {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#uuid DdosDstZonePortZoneService#uuid}
  */
  readonly uuid?: string;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#sampling_enable DdosDstZonePortZoneService#sampling_enable}
  */
  readonly samplingEnable?: DdosDstZonePortZoneServiceIpsSamplingEnable[] | cdktf.IResolvable;
}

export function ddosDstZonePortZoneServiceIpsToTerraform(struct?: DdosDstZonePortZoneServiceIpsOutputReference | DdosDstZonePortZoneServiceIps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
    sampling_enable: cdktf.listMapper(ddosDstZonePortZoneServiceIpsSamplingEnableToTerraform, true)(struct!.samplingEnable),
  }
}


export function ddosDstZonePortZoneServiceIpsToHclTerraform(struct?: DdosDstZonePortZoneServiceIpsOutputReference | DdosDstZonePortZoneServiceIps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sampling_enable: {
      value: cdktf.listMapperHcl(ddosDstZonePortZoneServiceIpsSamplingEnableToHclTerraform, true)(struct!.samplingEnable),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstZonePortZoneServiceIpsSamplingEnableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstZonePortZoneServiceIpsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstZonePortZoneServiceIps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._samplingEnable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingEnable = this._samplingEnable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstZonePortZoneServiceIps | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
      this._samplingEnable.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
      this._samplingEnable.internalValue = value.samplingEnable;
    }
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

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new DdosDstZonePortZoneServiceIpsSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: DdosDstZonePortZoneServiceIpsSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }
}
export interface DdosDstZonePortZoneServiceLevelListIndicatorListStruct {
  /**
  * Expected minimal data size
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#data_packet_size DdosDstZonePortZoneService#data_packet_size}
  */
  readonly dataPacketSize?: number;
  /**
  * Score corresponding to the indicator
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#score DdosDstZonePortZoneService#score}
  */
  readonly score?: number;
  /**
  * Indicator per-src threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#src_threshold_large_num DdosDstZonePortZoneService#src_threshold_large_num}
  */
  readonly srcThresholdLargeNum?: number;
  /**
  * Indicator per-src threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#src_threshold_num DdosDstZonePortZoneService#src_threshold_num}
  */
  readonly srcThresholdNum?: number;
  /**
  * Indicator per-src threshold (Non-zero floating point)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#src_threshold_str DdosDstZonePortZoneService#src_threshold_str}
  */
  readonly srcThresholdStr?: string;
  /**
  * Violation actions to use when this src indicator threshold reaches
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#src_violation_actions DdosDstZonePortZoneService#src_violation_actions}
  */
  readonly srcViolationActions?: string;
  /**
  * Expected minimal window size
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#tcp_window_size DdosDstZonePortZoneService#tcp_window_size}
  */
  readonly tcpWindowSize?: number;
  /**
  * 'pkt-rate': rate of incoming packets; 'pkt-drop-rate': rate of packets got dropped; 'bit-rate': rate of incoming bits; 'pkt-drop-ratio': ratio of incoming packet rate divided by the rate of dropping packets; 'bytes-to-bytes-from-ratio': ratio of incoming packet rate divided by the rate of outgoing packets; 'concurrent-conns': number of concurrent connections; 'conn-miss-rate': rate of incoming packets for which no previously established connection exists; 'syn-rate': rate on incoming SYN packets; 'fin-rate': rate on incoming FIN packets; 'rst-rate': rate of incoming RST packets; 'small-window-ack-rate': rate of small window advertisement; 'empty-ack-rate': rate of incoming packets which have no payload; 'small-payload-rate': rate of short payload packet; 'syn-fin-ratio': ratio of incoming SYN packet rate divided by the rate of incoming FIN packets; 'cpu-utilization': average data CPU utilization; 'interface-utilization': outside interface utilization;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#type DdosDstZonePortZoneService#type}
  */
  readonly type: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#user_tag DdosDstZonePortZoneService#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#uuid DdosDstZonePortZoneService#uuid}
  */
  readonly uuid?: string;
  /**
  * Threshold for the entire zone
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#zone_threshold_large_num DdosDstZonePortZoneService#zone_threshold_large_num}
  */
  readonly zoneThresholdLargeNum?: number;
  /**
  * Threshold for the entire zone
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#zone_threshold_num DdosDstZonePortZoneService#zone_threshold_num}
  */
  readonly zoneThresholdNum?: number;
  /**
  * Threshold for the entire zone (Non-zero floating point)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#zone_threshold_str DdosDstZonePortZoneService#zone_threshold_str}
  */
  readonly zoneThresholdStr?: string;
  /**
  * Violation actions to use when this zone indicator threshold reaches
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#zone_violation_actions DdosDstZonePortZoneService#zone_violation_actions}
  */
  readonly zoneViolationActions?: string;
}

export function ddosDstZonePortZoneServiceLevelListIndicatorListStructToTerraform(struct?: DdosDstZonePortZoneServiceLevelListIndicatorListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_packet_size: cdktf.numberToTerraform(struct!.dataPacketSize),
    score: cdktf.numberToTerraform(struct!.score),
    src_threshold_large_num: cdktf.numberToTerraform(struct!.srcThresholdLargeNum),
    src_threshold_num: cdktf.numberToTerraform(struct!.srcThresholdNum),
    src_threshold_str: cdktf.stringToTerraform(struct!.srcThresholdStr),
    src_violation_actions: cdktf.stringToTerraform(struct!.srcViolationActions),
    tcp_window_size: cdktf.numberToTerraform(struct!.tcpWindowSize),
    type: cdktf.stringToTerraform(struct!.type),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    zone_threshold_large_num: cdktf.numberToTerraform(struct!.zoneThresholdLargeNum),
    zone_threshold_num: cdktf.numberToTerraform(struct!.zoneThresholdNum),
    zone_threshold_str: cdktf.stringToTerraform(struct!.zoneThresholdStr),
    zone_violation_actions: cdktf.stringToTerraform(struct!.zoneViolationActions),
  }
}


export function ddosDstZonePortZoneServiceLevelListIndicatorListStructToHclTerraform(struct?: DdosDstZonePortZoneServiceLevelListIndicatorListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_packet_size: {
      value: cdktf.numberToHclTerraform(struct!.dataPacketSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    score: {
      value: cdktf.numberToHclTerraform(struct!.score),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_threshold_large_num: {
      value: cdktf.numberToHclTerraform(struct!.srcThresholdLargeNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_threshold_num: {
      value: cdktf.numberToHclTerraform(struct!.srcThresholdNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_threshold_str: {
      value: cdktf.stringToHclTerraform(struct!.srcThresholdStr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_violation_actions: {
      value: cdktf.stringToHclTerraform(struct!.srcViolationActions),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tcp_window_size: {
      value: cdktf.numberToHclTerraform(struct!.tcpWindowSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_tag: {
      value: cdktf.stringToHclTerraform(struct!.userTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zone_threshold_large_num: {
      value: cdktf.numberToHclTerraform(struct!.zoneThresholdLargeNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_threshold_num: {
      value: cdktf.numberToHclTerraform(struct!.zoneThresholdNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_threshold_str: {
      value: cdktf.stringToHclTerraform(struct!.zoneThresholdStr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zone_violation_actions: {
      value: cdktf.stringToHclTerraform(struct!.zoneViolationActions),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstZonePortZoneServiceLevelListIndicatorListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosDstZonePortZoneServiceLevelListIndicatorListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataPacketSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataPacketSize = this._dataPacketSize;
    }
    if (this._score !== undefined) {
      hasAnyValues = true;
      internalValueResult.score = this._score;
    }
    if (this._srcThresholdLargeNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcThresholdLargeNum = this._srcThresholdLargeNum;
    }
    if (this._srcThresholdNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcThresholdNum = this._srcThresholdNum;
    }
    if (this._srcThresholdStr !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcThresholdStr = this._srcThresholdStr;
    }
    if (this._srcViolationActions !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcViolationActions = this._srcViolationActions;
    }
    if (this._tcpWindowSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpWindowSize = this._tcpWindowSize;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._zoneThresholdLargeNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneThresholdLargeNum = this._zoneThresholdLargeNum;
    }
    if (this._zoneThresholdNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneThresholdNum = this._zoneThresholdNum;
    }
    if (this._zoneThresholdStr !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneThresholdStr = this._zoneThresholdStr;
    }
    if (this._zoneViolationActions !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneViolationActions = this._zoneViolationActions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstZonePortZoneServiceLevelListIndicatorListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataPacketSize = undefined;
      this._score = undefined;
      this._srcThresholdLargeNum = undefined;
      this._srcThresholdNum = undefined;
      this._srcThresholdStr = undefined;
      this._srcViolationActions = undefined;
      this._tcpWindowSize = undefined;
      this._type = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
      this._zoneThresholdLargeNum = undefined;
      this._zoneThresholdNum = undefined;
      this._zoneThresholdStr = undefined;
      this._zoneViolationActions = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataPacketSize = value.dataPacketSize;
      this._score = value.score;
      this._srcThresholdLargeNum = value.srcThresholdLargeNum;
      this._srcThresholdNum = value.srcThresholdNum;
      this._srcThresholdStr = value.srcThresholdStr;
      this._srcViolationActions = value.srcViolationActions;
      this._tcpWindowSize = value.tcpWindowSize;
      this._type = value.type;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
      this._zoneThresholdLargeNum = value.zoneThresholdLargeNum;
      this._zoneThresholdNum = value.zoneThresholdNum;
      this._zoneThresholdStr = value.zoneThresholdStr;
      this._zoneViolationActions = value.zoneViolationActions;
    }
  }

  // data_packet_size - computed: false, optional: true, required: false
  private _dataPacketSize?: number; 
  public get dataPacketSize() {
    return this.getNumberAttribute('data_packet_size');
  }
  public set dataPacketSize(value: number) {
    this._dataPacketSize = value;
  }
  public resetDataPacketSize() {
    this._dataPacketSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataPacketSizeInput() {
    return this._dataPacketSize;
  }

  // score - computed: false, optional: true, required: false
  private _score?: number; 
  public get score() {
    return this.getNumberAttribute('score');
  }
  public set score(value: number) {
    this._score = value;
  }
  public resetScore() {
    this._score = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scoreInput() {
    return this._score;
  }

  // src_threshold_large_num - computed: false, optional: true, required: false
  private _srcThresholdLargeNum?: number; 
  public get srcThresholdLargeNum() {
    return this.getNumberAttribute('src_threshold_large_num');
  }
  public set srcThresholdLargeNum(value: number) {
    this._srcThresholdLargeNum = value;
  }
  public resetSrcThresholdLargeNum() {
    this._srcThresholdLargeNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcThresholdLargeNumInput() {
    return this._srcThresholdLargeNum;
  }

  // src_threshold_num - computed: false, optional: true, required: false
  private _srcThresholdNum?: number; 
  public get srcThresholdNum() {
    return this.getNumberAttribute('src_threshold_num');
  }
  public set srcThresholdNum(value: number) {
    this._srcThresholdNum = value;
  }
  public resetSrcThresholdNum() {
    this._srcThresholdNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcThresholdNumInput() {
    return this._srcThresholdNum;
  }

  // src_threshold_str - computed: false, optional: true, required: false
  private _srcThresholdStr?: string; 
  public get srcThresholdStr() {
    return this.getStringAttribute('src_threshold_str');
  }
  public set srcThresholdStr(value: string) {
    this._srcThresholdStr = value;
  }
  public resetSrcThresholdStr() {
    this._srcThresholdStr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcThresholdStrInput() {
    return this._srcThresholdStr;
  }

  // src_violation_actions - computed: false, optional: true, required: false
  private _srcViolationActions?: string; 
  public get srcViolationActions() {
    return this.getStringAttribute('src_violation_actions');
  }
  public set srcViolationActions(value: string) {
    this._srcViolationActions = value;
  }
  public resetSrcViolationActions() {
    this._srcViolationActions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcViolationActionsInput() {
    return this._srcViolationActions;
  }

  // tcp_window_size - computed: false, optional: true, required: false
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

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
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

  // zone_threshold_large_num - computed: false, optional: true, required: false
  private _zoneThresholdLargeNum?: number; 
  public get zoneThresholdLargeNum() {
    return this.getNumberAttribute('zone_threshold_large_num');
  }
  public set zoneThresholdLargeNum(value: number) {
    this._zoneThresholdLargeNum = value;
  }
  public resetZoneThresholdLargeNum() {
    this._zoneThresholdLargeNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneThresholdLargeNumInput() {
    return this._zoneThresholdLargeNum;
  }

  // zone_threshold_num - computed: false, optional: true, required: false
  private _zoneThresholdNum?: number; 
  public get zoneThresholdNum() {
    return this.getNumberAttribute('zone_threshold_num');
  }
  public set zoneThresholdNum(value: number) {
    this._zoneThresholdNum = value;
  }
  public resetZoneThresholdNum() {
    this._zoneThresholdNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneThresholdNumInput() {
    return this._zoneThresholdNum;
  }

  // zone_threshold_str - computed: false, optional: true, required: false
  private _zoneThresholdStr?: string; 
  public get zoneThresholdStr() {
    return this.getStringAttribute('zone_threshold_str');
  }
  public set zoneThresholdStr(value: string) {
    this._zoneThresholdStr = value;
  }
  public resetZoneThresholdStr() {
    this._zoneThresholdStr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneThresholdStrInput() {
    return this._zoneThresholdStr;
  }

  // zone_violation_actions - computed: false, optional: true, required: false
  private _zoneViolationActions?: string; 
  public get zoneViolationActions() {
    return this.getStringAttribute('zone_violation_actions');
  }
  public set zoneViolationActions(value: string) {
    this._zoneViolationActions = value;
  }
  public resetZoneViolationActions() {
    this._zoneViolationActions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneViolationActionsInput() {
    return this._zoneViolationActions;
  }
}

export class DdosDstZonePortZoneServiceLevelListIndicatorListStructList extends cdktf.ComplexList {
  public internalValue? : DdosDstZonePortZoneServiceLevelListIndicatorListStruct[] | cdktf.IResolvable

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
  public get(index: number): DdosDstZonePortZoneServiceLevelListIndicatorListStructOutputReference {
    return new DdosDstZonePortZoneServiceLevelListIndicatorListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosDstZonePortZoneServiceLevelListZoneTemplate {
  /**
  * DDOS dns template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#dns DdosDstZonePortZoneService#dns}
  */
  readonly dns?: string;
  /**
  * DDOS encap template (IPv6-over-IPv4 / IPv4-over-IPv6 are not supported.)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#encap DdosDstZonePortZoneService#encap}
  */
  readonly encap?: string;
  /**
  * DDOS http template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#http DdosDstZonePortZoneService#http}
  */
  readonly http?: string;
  /**
  * DDOS quic template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#quic DdosDstZonePortZoneService#quic}
  */
  readonly quic?: string;
  /**
  * DDOS sip template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#sip DdosDstZonePortZoneService#sip}
  */
  readonly sip?: string;
  /**
  * DDOS ssl-l4 template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#ssl_l4 DdosDstZonePortZoneService#ssl_l4}
  */
  readonly sslL4?: string;
  /**
  * DDOS tcp template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#tcp DdosDstZonePortZoneService#tcp}
  */
  readonly tcp?: string;
  /**
  * DDOS udp template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#udp DdosDstZonePortZoneService#udp}
  */
  readonly udp?: string;
}

export function ddosDstZonePortZoneServiceLevelListZoneTemplateToTerraform(struct?: DdosDstZonePortZoneServiceLevelListZoneTemplateOutputReference | DdosDstZonePortZoneServiceLevelListZoneTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns: cdktf.stringToTerraform(struct!.dns),
    encap: cdktf.stringToTerraform(struct!.encap),
    http: cdktf.stringToTerraform(struct!.http),
    quic: cdktf.stringToTerraform(struct!.quic),
    sip: cdktf.stringToTerraform(struct!.sip),
    ssl_l4: cdktf.stringToTerraform(struct!.sslL4),
    tcp: cdktf.stringToTerraform(struct!.tcp),
    udp: cdktf.stringToTerraform(struct!.udp),
  }
}


export function ddosDstZonePortZoneServiceLevelListZoneTemplateToHclTerraform(struct?: DdosDstZonePortZoneServiceLevelListZoneTemplateOutputReference | DdosDstZonePortZoneServiceLevelListZoneTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns: {
      value: cdktf.stringToHclTerraform(struct!.dns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encap: {
      value: cdktf.stringToHclTerraform(struct!.encap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http: {
      value: cdktf.stringToHclTerraform(struct!.http),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    quic: {
      value: cdktf.stringToHclTerraform(struct!.quic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sip: {
      value: cdktf.stringToHclTerraform(struct!.sip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_l4: {
      value: cdktf.stringToHclTerraform(struct!.sslL4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tcp: {
      value: cdktf.stringToHclTerraform(struct!.tcp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    udp: {
      value: cdktf.stringToHclTerraform(struct!.udp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstZonePortZoneServiceLevelListZoneTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstZonePortZoneServiceLevelListZoneTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dns !== undefined) {
      hasAnyValues = true;
      internalValueResult.dns = this._dns;
    }
    if (this._encap !== undefined) {
      hasAnyValues = true;
      internalValueResult.encap = this._encap;
    }
    if (this._http !== undefined) {
      hasAnyValues = true;
      internalValueResult.http = this._http;
    }
    if (this._quic !== undefined) {
      hasAnyValues = true;
      internalValueResult.quic = this._quic;
    }
    if (this._sip !== undefined) {
      hasAnyValues = true;
      internalValueResult.sip = this._sip;
    }
    if (this._sslL4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslL4 = this._sslL4;
    }
    if (this._tcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcp = this._tcp;
    }
    if (this._udp !== undefined) {
      hasAnyValues = true;
      internalValueResult.udp = this._udp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstZonePortZoneServiceLevelListZoneTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dns = undefined;
      this._encap = undefined;
      this._http = undefined;
      this._quic = undefined;
      this._sip = undefined;
      this._sslL4 = undefined;
      this._tcp = undefined;
      this._udp = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dns = value.dns;
      this._encap = value.encap;
      this._http = value.http;
      this._quic = value.quic;
      this._sip = value.sip;
      this._sslL4 = value.sslL4;
      this._tcp = value.tcp;
      this._udp = value.udp;
    }
  }

  // dns - computed: false, optional: true, required: false
  private _dns?: string; 
  public get dns() {
    return this.getStringAttribute('dns');
  }
  public set dns(value: string) {
    this._dns = value;
  }
  public resetDns() {
    this._dns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsInput() {
    return this._dns;
  }

  // encap - computed: false, optional: true, required: false
  private _encap?: string; 
  public get encap() {
    return this.getStringAttribute('encap');
  }
  public set encap(value: string) {
    this._encap = value;
  }
  public resetEncap() {
    this._encap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encapInput() {
    return this._encap;
  }

  // http - computed: false, optional: true, required: false
  private _http?: string; 
  public get http() {
    return this.getStringAttribute('http');
  }
  public set http(value: string) {
    this._http = value;
  }
  public resetHttp() {
    this._http = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpInput() {
    return this._http;
  }

  // quic - computed: false, optional: true, required: false
  private _quic?: string; 
  public get quic() {
    return this.getStringAttribute('quic');
  }
  public set quic(value: string) {
    this._quic = value;
  }
  public resetQuic() {
    this._quic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quicInput() {
    return this._quic;
  }

  // sip - computed: false, optional: true, required: false
  private _sip?: string; 
  public get sip() {
    return this.getStringAttribute('sip');
  }
  public set sip(value: string) {
    this._sip = value;
  }
  public resetSip() {
    this._sip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sipInput() {
    return this._sip;
  }

  // ssl_l4 - computed: false, optional: true, required: false
  private _sslL4?: string; 
  public get sslL4() {
    return this.getStringAttribute('ssl_l4');
  }
  public set sslL4(value: string) {
    this._sslL4 = value;
  }
  public resetSslL4() {
    this._sslL4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslL4Input() {
    return this._sslL4;
  }

  // tcp - computed: false, optional: true, required: false
  private _tcp?: string; 
  public get tcp() {
    return this.getStringAttribute('tcp');
  }
  public set tcp(value: string) {
    this._tcp = value;
  }
  public resetTcp() {
    this._tcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpInput() {
    return this._tcp;
  }

  // udp - computed: false, optional: true, required: false
  private _udp?: string; 
  public get udp() {
    return this.getStringAttribute('udp');
  }
  public set udp(value: string) {
    this._udp = value;
  }
  public resetUdp() {
    this._udp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpInput() {
    return this._udp;
  }
}
export interface DdosDstZonePortZoneServiceLevelListStruct {
  /**
  * Apply extracted filters from this level
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#apply_extracted_filters DdosDstZonePortZoneService#apply_extracted_filters}
  */
  readonly applyExtractedFilters?: number;
  /**
  * Close session for unauthenticated sources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#close_sessions_for_unauth_sources DdosDstZonePortZoneService#close_sessions_for_unauth_sources}
  */
  readonly closeSessionsForUnauthSources?: number;
  /**
  * 'drop': Drop packets for glid exceed (Default); 'blacklist-src': Blacklist-src for glid exceed; 'ignore': Do nothing for glid exceed;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#glid_action DdosDstZonePortZoneService#glid_action}
  */
  readonly glidAction?: string;
  /**
  * '0': Default policy level; '1': Policy level 1; '2': Policy level 2; '3': Policy level 3; '4': Policy level 4;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#level_num DdosDstZonePortZoneService#level_num}
  */
  readonly levelNum: string;
  /**
  * Global limit ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#src_default_glid DdosDstZonePortZoneService#src_default_glid}
  */
  readonly srcDefaultGlid?: string;
  /**
  * Source activation score of this level
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#src_escalation_score DdosDstZonePortZoneService#src_escalation_score}
  */
  readonly srcEscalationScore?: number;
  /**
  * Violation actions apply due to source escalate from this level
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#src_violation_actions DdosDstZonePortZoneService#src_violation_actions}
  */
  readonly srcViolationActions?: string;
  /**
  * Start pattern recognition from this level
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#start_pattern_recognition DdosDstZonePortZoneService#start_pattern_recognition}
  */
  readonly startPatternRecognition?: number;
  /**
  * Start signature extraction from this level
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#start_signature_extraction DdosDstZonePortZoneService#start_signature_extraction}
  */
  readonly startSignatureExtraction?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#user_tag DdosDstZonePortZoneService#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#uuid DdosDstZonePortZoneService#uuid}
  */
  readonly uuid?: string;
  /**
  * Zone activation score of this level
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#zone_escalation_score DdosDstZonePortZoneService#zone_escalation_score}
  */
  readonly zoneEscalationScore?: number;
  /**
  * Violation actions apply due to zone escalate from this level
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#zone_violation_actions DdosDstZonePortZoneService#zone_violation_actions}
  */
  readonly zoneViolationActions?: string;
  /**
  * indicator_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#indicator_list DdosDstZonePortZoneService#indicator_list}
  */
  readonly indicatorList?: DdosDstZonePortZoneServiceLevelListIndicatorListStruct[] | cdktf.IResolvable;
  /**
  * zone_template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#zone_template DdosDstZonePortZoneService#zone_template}
  */
  readonly zoneTemplate?: DdosDstZonePortZoneServiceLevelListZoneTemplate;
}

export function ddosDstZonePortZoneServiceLevelListStructToTerraform(struct?: DdosDstZonePortZoneServiceLevelListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    apply_extracted_filters: cdktf.numberToTerraform(struct!.applyExtractedFilters),
    close_sessions_for_unauth_sources: cdktf.numberToTerraform(struct!.closeSessionsForUnauthSources),
    glid_action: cdktf.stringToTerraform(struct!.glidAction),
    level_num: cdktf.stringToTerraform(struct!.levelNum),
    src_default_glid: cdktf.stringToTerraform(struct!.srcDefaultGlid),
    src_escalation_score: cdktf.numberToTerraform(struct!.srcEscalationScore),
    src_violation_actions: cdktf.stringToTerraform(struct!.srcViolationActions),
    start_pattern_recognition: cdktf.numberToTerraform(struct!.startPatternRecognition),
    start_signature_extraction: cdktf.numberToTerraform(struct!.startSignatureExtraction),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    zone_escalation_score: cdktf.numberToTerraform(struct!.zoneEscalationScore),
    zone_violation_actions: cdktf.stringToTerraform(struct!.zoneViolationActions),
    indicator_list: cdktf.listMapper(ddosDstZonePortZoneServiceLevelListIndicatorListStructToTerraform, true)(struct!.indicatorList),
    zone_template: ddosDstZonePortZoneServiceLevelListZoneTemplateToTerraform(struct!.zoneTemplate),
  }
}


export function ddosDstZonePortZoneServiceLevelListStructToHclTerraform(struct?: DdosDstZonePortZoneServiceLevelListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    apply_extracted_filters: {
      value: cdktf.numberToHclTerraform(struct!.applyExtractedFilters),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    close_sessions_for_unauth_sources: {
      value: cdktf.numberToHclTerraform(struct!.closeSessionsForUnauthSources),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    glid_action: {
      value: cdktf.stringToHclTerraform(struct!.glidAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    level_num: {
      value: cdktf.stringToHclTerraform(struct!.levelNum),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_default_glid: {
      value: cdktf.stringToHclTerraform(struct!.srcDefaultGlid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_escalation_score: {
      value: cdktf.numberToHclTerraform(struct!.srcEscalationScore),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_violation_actions: {
      value: cdktf.stringToHclTerraform(struct!.srcViolationActions),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_pattern_recognition: {
      value: cdktf.numberToHclTerraform(struct!.startPatternRecognition),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_signature_extraction: {
      value: cdktf.numberToHclTerraform(struct!.startSignatureExtraction),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    user_tag: {
      value: cdktf.stringToHclTerraform(struct!.userTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zone_escalation_score: {
      value: cdktf.numberToHclTerraform(struct!.zoneEscalationScore),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_violation_actions: {
      value: cdktf.stringToHclTerraform(struct!.zoneViolationActions),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    indicator_list: {
      value: cdktf.listMapperHcl(ddosDstZonePortZoneServiceLevelListIndicatorListStructToHclTerraform, true)(struct!.indicatorList),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstZonePortZoneServiceLevelListIndicatorListStructList",
    },
    zone_template: {
      value: ddosDstZonePortZoneServiceLevelListZoneTemplateToHclTerraform(struct!.zoneTemplate),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstZonePortZoneServiceLevelListZoneTemplateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstZonePortZoneServiceLevelListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosDstZonePortZoneServiceLevelListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applyExtractedFilters !== undefined) {
      hasAnyValues = true;
      internalValueResult.applyExtractedFilters = this._applyExtractedFilters;
    }
    if (this._closeSessionsForUnauthSources !== undefined) {
      hasAnyValues = true;
      internalValueResult.closeSessionsForUnauthSources = this._closeSessionsForUnauthSources;
    }
    if (this._glidAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.glidAction = this._glidAction;
    }
    if (this._levelNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.levelNum = this._levelNum;
    }
    if (this._srcDefaultGlid !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcDefaultGlid = this._srcDefaultGlid;
    }
    if (this._srcEscalationScore !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcEscalationScore = this._srcEscalationScore;
    }
    if (this._srcViolationActions !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcViolationActions = this._srcViolationActions;
    }
    if (this._startPatternRecognition !== undefined) {
      hasAnyValues = true;
      internalValueResult.startPatternRecognition = this._startPatternRecognition;
    }
    if (this._startSignatureExtraction !== undefined) {
      hasAnyValues = true;
      internalValueResult.startSignatureExtraction = this._startSignatureExtraction;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._zoneEscalationScore !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneEscalationScore = this._zoneEscalationScore;
    }
    if (this._zoneViolationActions !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneViolationActions = this._zoneViolationActions;
    }
    if (this._indicatorList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.indicatorList = this._indicatorList?.internalValue;
    }
    if (this._zoneTemplate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneTemplate = this._zoneTemplate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstZonePortZoneServiceLevelListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._applyExtractedFilters = undefined;
      this._closeSessionsForUnauthSources = undefined;
      this._glidAction = undefined;
      this._levelNum = undefined;
      this._srcDefaultGlid = undefined;
      this._srcEscalationScore = undefined;
      this._srcViolationActions = undefined;
      this._startPatternRecognition = undefined;
      this._startSignatureExtraction = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
      this._zoneEscalationScore = undefined;
      this._zoneViolationActions = undefined;
      this._indicatorList.internalValue = undefined;
      this._zoneTemplate.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._applyExtractedFilters = value.applyExtractedFilters;
      this._closeSessionsForUnauthSources = value.closeSessionsForUnauthSources;
      this._glidAction = value.glidAction;
      this._levelNum = value.levelNum;
      this._srcDefaultGlid = value.srcDefaultGlid;
      this._srcEscalationScore = value.srcEscalationScore;
      this._srcViolationActions = value.srcViolationActions;
      this._startPatternRecognition = value.startPatternRecognition;
      this._startSignatureExtraction = value.startSignatureExtraction;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
      this._zoneEscalationScore = value.zoneEscalationScore;
      this._zoneViolationActions = value.zoneViolationActions;
      this._indicatorList.internalValue = value.indicatorList;
      this._zoneTemplate.internalValue = value.zoneTemplate;
    }
  }

  // apply_extracted_filters - computed: false, optional: true, required: false
  private _applyExtractedFilters?: number; 
  public get applyExtractedFilters() {
    return this.getNumberAttribute('apply_extracted_filters');
  }
  public set applyExtractedFilters(value: number) {
    this._applyExtractedFilters = value;
  }
  public resetApplyExtractedFilters() {
    this._applyExtractedFilters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applyExtractedFiltersInput() {
    return this._applyExtractedFilters;
  }

  // close_sessions_for_unauth_sources - computed: false, optional: true, required: false
  private _closeSessionsForUnauthSources?: number; 
  public get closeSessionsForUnauthSources() {
    return this.getNumberAttribute('close_sessions_for_unauth_sources');
  }
  public set closeSessionsForUnauthSources(value: number) {
    this._closeSessionsForUnauthSources = value;
  }
  public resetCloseSessionsForUnauthSources() {
    this._closeSessionsForUnauthSources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get closeSessionsForUnauthSourcesInput() {
    return this._closeSessionsForUnauthSources;
  }

  // glid_action - computed: false, optional: true, required: false
  private _glidAction?: string; 
  public get glidAction() {
    return this.getStringAttribute('glid_action');
  }
  public set glidAction(value: string) {
    this._glidAction = value;
  }
  public resetGlidAction() {
    this._glidAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get glidActionInput() {
    return this._glidAction;
  }

  // level_num - computed: false, optional: false, required: true
  private _levelNum?: string; 
  public get levelNum() {
    return this.getStringAttribute('level_num');
  }
  public set levelNum(value: string) {
    this._levelNum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get levelNumInput() {
    return this._levelNum;
  }

  // src_default_glid - computed: false, optional: true, required: false
  private _srcDefaultGlid?: string; 
  public get srcDefaultGlid() {
    return this.getStringAttribute('src_default_glid');
  }
  public set srcDefaultGlid(value: string) {
    this._srcDefaultGlid = value;
  }
  public resetSrcDefaultGlid() {
    this._srcDefaultGlid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcDefaultGlidInput() {
    return this._srcDefaultGlid;
  }

  // src_escalation_score - computed: false, optional: true, required: false
  private _srcEscalationScore?: number; 
  public get srcEscalationScore() {
    return this.getNumberAttribute('src_escalation_score');
  }
  public set srcEscalationScore(value: number) {
    this._srcEscalationScore = value;
  }
  public resetSrcEscalationScore() {
    this._srcEscalationScore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcEscalationScoreInput() {
    return this._srcEscalationScore;
  }

  // src_violation_actions - computed: false, optional: true, required: false
  private _srcViolationActions?: string; 
  public get srcViolationActions() {
    return this.getStringAttribute('src_violation_actions');
  }
  public set srcViolationActions(value: string) {
    this._srcViolationActions = value;
  }
  public resetSrcViolationActions() {
    this._srcViolationActions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcViolationActionsInput() {
    return this._srcViolationActions;
  }

  // start_pattern_recognition - computed: false, optional: true, required: false
  private _startPatternRecognition?: number; 
  public get startPatternRecognition() {
    return this.getNumberAttribute('start_pattern_recognition');
  }
  public set startPatternRecognition(value: number) {
    this._startPatternRecognition = value;
  }
  public resetStartPatternRecognition() {
    this._startPatternRecognition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startPatternRecognitionInput() {
    return this._startPatternRecognition;
  }

  // start_signature_extraction - computed: false, optional: true, required: false
  private _startSignatureExtraction?: number; 
  public get startSignatureExtraction() {
    return this.getNumberAttribute('start_signature_extraction');
  }
  public set startSignatureExtraction(value: number) {
    this._startSignatureExtraction = value;
  }
  public resetStartSignatureExtraction() {
    this._startSignatureExtraction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startSignatureExtractionInput() {
    return this._startSignatureExtraction;
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

  // zone_escalation_score - computed: false, optional: true, required: false
  private _zoneEscalationScore?: number; 
  public get zoneEscalationScore() {
    return this.getNumberAttribute('zone_escalation_score');
  }
  public set zoneEscalationScore(value: number) {
    this._zoneEscalationScore = value;
  }
  public resetZoneEscalationScore() {
    this._zoneEscalationScore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneEscalationScoreInput() {
    return this._zoneEscalationScore;
  }

  // zone_violation_actions - computed: false, optional: true, required: false
  private _zoneViolationActions?: string; 
  public get zoneViolationActions() {
    return this.getStringAttribute('zone_violation_actions');
  }
  public set zoneViolationActions(value: string) {
    this._zoneViolationActions = value;
  }
  public resetZoneViolationActions() {
    this._zoneViolationActions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneViolationActionsInput() {
    return this._zoneViolationActions;
  }

  // indicator_list - computed: false, optional: true, required: false
  private _indicatorList = new DdosDstZonePortZoneServiceLevelListIndicatorListStructList(this, "indicator_list", false);
  public get indicatorList() {
    return this._indicatorList;
  }
  public putIndicatorList(value: DdosDstZonePortZoneServiceLevelListIndicatorListStruct[] | cdktf.IResolvable) {
    this._indicatorList.internalValue = value;
  }
  public resetIndicatorList() {
    this._indicatorList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indicatorListInput() {
    return this._indicatorList.internalValue;
  }

  // zone_template - computed: false, optional: true, required: false
  private _zoneTemplate = new DdosDstZonePortZoneServiceLevelListZoneTemplateOutputReference(this, "zone_template");
  public get zoneTemplate() {
    return this._zoneTemplate;
  }
  public putZoneTemplate(value: DdosDstZonePortZoneServiceLevelListZoneTemplate) {
    this._zoneTemplate.internalValue = value;
  }
  public resetZoneTemplate() {
    this._zoneTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneTemplateInput() {
    return this._zoneTemplate.internalValue;
  }
}

export class DdosDstZonePortZoneServiceLevelListStructList extends cdktf.ComplexList {
  public internalValue? : DdosDstZonePortZoneServiceLevelListStruct[] | cdktf.IResolvable

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
  public get(index: number): DdosDstZonePortZoneServiceLevelListStructOutputReference {
    return new DdosDstZonePortZoneServiceLevelListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosDstZonePortZoneServiceManualModeListZoneTemplate {
  /**
  * DDOS dns template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#dns DdosDstZonePortZoneService#dns}
  */
  readonly dns?: string;
  /**
  * DDOS encap template (IPv6-over-IPv4 / IPv4-over-IPv6 are not supported.)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#encap DdosDstZonePortZoneService#encap}
  */
  readonly encap?: string;
  /**
  * DDOS http template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#http DdosDstZonePortZoneService#http}
  */
  readonly http?: string;
  /**
  * DDOS quic template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#quic DdosDstZonePortZoneService#quic}
  */
  readonly quic?: string;
  /**
  * DDOS sip template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#sip DdosDstZonePortZoneService#sip}
  */
  readonly sip?: string;
  /**
  * DDOS ssl-l4 template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#ssl_l4 DdosDstZonePortZoneService#ssl_l4}
  */
  readonly sslL4?: string;
  /**
  * DDOS tcp template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#tcp DdosDstZonePortZoneService#tcp}
  */
  readonly tcp?: string;
  /**
  * DDOS udp template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#udp DdosDstZonePortZoneService#udp}
  */
  readonly udp?: string;
}

export function ddosDstZonePortZoneServiceManualModeListZoneTemplateToTerraform(struct?: DdosDstZonePortZoneServiceManualModeListZoneTemplateOutputReference | DdosDstZonePortZoneServiceManualModeListZoneTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns: cdktf.stringToTerraform(struct!.dns),
    encap: cdktf.stringToTerraform(struct!.encap),
    http: cdktf.stringToTerraform(struct!.http),
    quic: cdktf.stringToTerraform(struct!.quic),
    sip: cdktf.stringToTerraform(struct!.sip),
    ssl_l4: cdktf.stringToTerraform(struct!.sslL4),
    tcp: cdktf.stringToTerraform(struct!.tcp),
    udp: cdktf.stringToTerraform(struct!.udp),
  }
}


export function ddosDstZonePortZoneServiceManualModeListZoneTemplateToHclTerraform(struct?: DdosDstZonePortZoneServiceManualModeListZoneTemplateOutputReference | DdosDstZonePortZoneServiceManualModeListZoneTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns: {
      value: cdktf.stringToHclTerraform(struct!.dns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encap: {
      value: cdktf.stringToHclTerraform(struct!.encap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http: {
      value: cdktf.stringToHclTerraform(struct!.http),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    quic: {
      value: cdktf.stringToHclTerraform(struct!.quic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sip: {
      value: cdktf.stringToHclTerraform(struct!.sip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_l4: {
      value: cdktf.stringToHclTerraform(struct!.sslL4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tcp: {
      value: cdktf.stringToHclTerraform(struct!.tcp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    udp: {
      value: cdktf.stringToHclTerraform(struct!.udp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstZonePortZoneServiceManualModeListZoneTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstZonePortZoneServiceManualModeListZoneTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dns !== undefined) {
      hasAnyValues = true;
      internalValueResult.dns = this._dns;
    }
    if (this._encap !== undefined) {
      hasAnyValues = true;
      internalValueResult.encap = this._encap;
    }
    if (this._http !== undefined) {
      hasAnyValues = true;
      internalValueResult.http = this._http;
    }
    if (this._quic !== undefined) {
      hasAnyValues = true;
      internalValueResult.quic = this._quic;
    }
    if (this._sip !== undefined) {
      hasAnyValues = true;
      internalValueResult.sip = this._sip;
    }
    if (this._sslL4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslL4 = this._sslL4;
    }
    if (this._tcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcp = this._tcp;
    }
    if (this._udp !== undefined) {
      hasAnyValues = true;
      internalValueResult.udp = this._udp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstZonePortZoneServiceManualModeListZoneTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dns = undefined;
      this._encap = undefined;
      this._http = undefined;
      this._quic = undefined;
      this._sip = undefined;
      this._sslL4 = undefined;
      this._tcp = undefined;
      this._udp = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dns = value.dns;
      this._encap = value.encap;
      this._http = value.http;
      this._quic = value.quic;
      this._sip = value.sip;
      this._sslL4 = value.sslL4;
      this._tcp = value.tcp;
      this._udp = value.udp;
    }
  }

  // dns - computed: false, optional: true, required: false
  private _dns?: string; 
  public get dns() {
    return this.getStringAttribute('dns');
  }
  public set dns(value: string) {
    this._dns = value;
  }
  public resetDns() {
    this._dns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsInput() {
    return this._dns;
  }

  // encap - computed: false, optional: true, required: false
  private _encap?: string; 
  public get encap() {
    return this.getStringAttribute('encap');
  }
  public set encap(value: string) {
    this._encap = value;
  }
  public resetEncap() {
    this._encap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encapInput() {
    return this._encap;
  }

  // http - computed: false, optional: true, required: false
  private _http?: string; 
  public get http() {
    return this.getStringAttribute('http');
  }
  public set http(value: string) {
    this._http = value;
  }
  public resetHttp() {
    this._http = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpInput() {
    return this._http;
  }

  // quic - computed: false, optional: true, required: false
  private _quic?: string; 
  public get quic() {
    return this.getStringAttribute('quic');
  }
  public set quic(value: string) {
    this._quic = value;
  }
  public resetQuic() {
    this._quic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quicInput() {
    return this._quic;
  }

  // sip - computed: false, optional: true, required: false
  private _sip?: string; 
  public get sip() {
    return this.getStringAttribute('sip');
  }
  public set sip(value: string) {
    this._sip = value;
  }
  public resetSip() {
    this._sip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sipInput() {
    return this._sip;
  }

  // ssl_l4 - computed: false, optional: true, required: false
  private _sslL4?: string; 
  public get sslL4() {
    return this.getStringAttribute('ssl_l4');
  }
  public set sslL4(value: string) {
    this._sslL4 = value;
  }
  public resetSslL4() {
    this._sslL4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslL4Input() {
    return this._sslL4;
  }

  // tcp - computed: false, optional: true, required: false
  private _tcp?: string; 
  public get tcp() {
    return this.getStringAttribute('tcp');
  }
  public set tcp(value: string) {
    this._tcp = value;
  }
  public resetTcp() {
    this._tcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpInput() {
    return this._tcp;
  }

  // udp - computed: false, optional: true, required: false
  private _udp?: string; 
  public get udp() {
    return this.getStringAttribute('udp');
  }
  public set udp(value: string) {
    this._udp = value;
  }
  public resetUdp() {
    this._udp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpInput() {
    return this._udp;
  }
}
export interface DdosDstZonePortZoneServiceManualModeListStruct {
  /**
  * Close session for unauthenticated sources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#close_sessions_for_unauth_sources DdosDstZonePortZoneService#close_sessions_for_unauth_sources}
  */
  readonly closeSessionsForUnauthSources?: number;
  /**
  * 'configuration': Manual-mode configuration;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#config DdosDstZonePortZoneService#config}
  */
  readonly config: string;
  /**
  * 'drop': Drop packets for glid exceed (Default); 'blacklist-src': Blacklist-src for glid exceed; 'ignore': Do nothing for glid exceed;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#glid_action DdosDstZonePortZoneService#glid_action}
  */
  readonly glidAction?: string;
  /**
  * Global limit ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#src_default_glid DdosDstZonePortZoneService#src_default_glid}
  */
  readonly srcDefaultGlid?: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#user_tag DdosDstZonePortZoneService#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#uuid DdosDstZonePortZoneService#uuid}
  */
  readonly uuid?: string;
  /**
  * zone_template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#zone_template DdosDstZonePortZoneService#zone_template}
  */
  readonly zoneTemplate?: DdosDstZonePortZoneServiceManualModeListZoneTemplate;
}

export function ddosDstZonePortZoneServiceManualModeListStructToTerraform(struct?: DdosDstZonePortZoneServiceManualModeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    close_sessions_for_unauth_sources: cdktf.numberToTerraform(struct!.closeSessionsForUnauthSources),
    config: cdktf.stringToTerraform(struct!.config),
    glid_action: cdktf.stringToTerraform(struct!.glidAction),
    src_default_glid: cdktf.stringToTerraform(struct!.srcDefaultGlid),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    zone_template: ddosDstZonePortZoneServiceManualModeListZoneTemplateToTerraform(struct!.zoneTemplate),
  }
}


export function ddosDstZonePortZoneServiceManualModeListStructToHclTerraform(struct?: DdosDstZonePortZoneServiceManualModeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    close_sessions_for_unauth_sources: {
      value: cdktf.numberToHclTerraform(struct!.closeSessionsForUnauthSources),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    config: {
      value: cdktf.stringToHclTerraform(struct!.config),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    glid_action: {
      value: cdktf.stringToHclTerraform(struct!.glidAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_default_glid: {
      value: cdktf.stringToHclTerraform(struct!.srcDefaultGlid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_tag: {
      value: cdktf.stringToHclTerraform(struct!.userTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zone_template: {
      value: ddosDstZonePortZoneServiceManualModeListZoneTemplateToHclTerraform(struct!.zoneTemplate),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstZonePortZoneServiceManualModeListZoneTemplateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstZonePortZoneServiceManualModeListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosDstZonePortZoneServiceManualModeListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._closeSessionsForUnauthSources !== undefined) {
      hasAnyValues = true;
      internalValueResult.closeSessionsForUnauthSources = this._closeSessionsForUnauthSources;
    }
    if (this._config !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config;
    }
    if (this._glidAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.glidAction = this._glidAction;
    }
    if (this._srcDefaultGlid !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcDefaultGlid = this._srcDefaultGlid;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._zoneTemplate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneTemplate = this._zoneTemplate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstZonePortZoneServiceManualModeListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._closeSessionsForUnauthSources = undefined;
      this._config = undefined;
      this._glidAction = undefined;
      this._srcDefaultGlid = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
      this._zoneTemplate.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._closeSessionsForUnauthSources = value.closeSessionsForUnauthSources;
      this._config = value.config;
      this._glidAction = value.glidAction;
      this._srcDefaultGlid = value.srcDefaultGlid;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
      this._zoneTemplate.internalValue = value.zoneTemplate;
    }
  }

  // close_sessions_for_unauth_sources - computed: false, optional: true, required: false
  private _closeSessionsForUnauthSources?: number; 
  public get closeSessionsForUnauthSources() {
    return this.getNumberAttribute('close_sessions_for_unauth_sources');
  }
  public set closeSessionsForUnauthSources(value: number) {
    this._closeSessionsForUnauthSources = value;
  }
  public resetCloseSessionsForUnauthSources() {
    this._closeSessionsForUnauthSources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get closeSessionsForUnauthSourcesInput() {
    return this._closeSessionsForUnauthSources;
  }

  // config - computed: false, optional: false, required: true
  private _config?: string; 
  public get config() {
    return this.getStringAttribute('config');
  }
  public set config(value: string) {
    this._config = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config;
  }

  // glid_action - computed: false, optional: true, required: false
  private _glidAction?: string; 
  public get glidAction() {
    return this.getStringAttribute('glid_action');
  }
  public set glidAction(value: string) {
    this._glidAction = value;
  }
  public resetGlidAction() {
    this._glidAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get glidActionInput() {
    return this._glidAction;
  }

  // src_default_glid - computed: false, optional: true, required: false
  private _srcDefaultGlid?: string; 
  public get srcDefaultGlid() {
    return this.getStringAttribute('src_default_glid');
  }
  public set srcDefaultGlid(value: string) {
    this._srcDefaultGlid = value;
  }
  public resetSrcDefaultGlid() {
    this._srcDefaultGlid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcDefaultGlidInput() {
    return this._srcDefaultGlid;
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

  // zone_template - computed: false, optional: true, required: false
  private _zoneTemplate = new DdosDstZonePortZoneServiceManualModeListZoneTemplateOutputReference(this, "zone_template");
  public get zoneTemplate() {
    return this._zoneTemplate;
  }
  public putZoneTemplate(value: DdosDstZonePortZoneServiceManualModeListZoneTemplate) {
    this._zoneTemplate.internalValue = value;
  }
  public resetZoneTemplate() {
    this._zoneTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneTemplateInput() {
    return this._zoneTemplate.internalValue;
  }
}

export class DdosDstZonePortZoneServiceManualModeListStructList extends cdktf.ComplexList {
  public internalValue? : DdosDstZonePortZoneServiceManualModeListStruct[] | cdktf.IResolvable

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
  public get(index: number): DdosDstZonePortZoneServiceManualModeListStructOutputReference {
    return new DdosDstZonePortZoneServiceManualModeListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosDstZonePortZoneServicePatternRecognition {
  /**
  * 'heuristic': heuristic algorithm;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#algorithm DdosDstZonePortZoneService#algorithm}
  */
  readonly algorithm?: string;
  /**
  * Set offset of the payload
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#app_payload_offset DdosDstZonePortZoneService#app_payload_offset}
  */
  readonly appPayloadOffset?: number;
  /**
  * 'all': Capture all packets; 'dropped': Capture dropped packets (default);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#capture_traffic DdosDstZonePortZoneService#capture_traffic}
  */
  readonly captureTraffic?: string;
  /**
  * Extracted filter inactive threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#filter_inactive_threshold DdosDstZonePortZoneService#filter_inactive_threshold}
  */
  readonly filterInactiveThreshold?: number;
  /**
  * Extracted filter threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#filter_threshold DdosDstZonePortZoneService#filter_threshold}
  */
  readonly filterThreshold?: number;
  /**
  * 'capture-never-expire': War-time capture without rate exceeding and never expires; 'manual': Manual mode;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#mode DdosDstZonePortZoneService#mode}
  */
  readonly mode?: string;
  /**
  * 'high': High Sensitivity; 'medium': Medium Sensitivity; 'low': Low Sensitivity;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#sensitivity DdosDstZonePortZoneService#sensitivity}
  */
  readonly sensitivity?: string;
  /**
  * 'zone-escalation': Zone escalation trigger pattern recognition; 'packet-rate-exceeds': Packet rate limit exceeds trigger pattern recognition (default);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#triggered_by DdosDstZonePortZoneService#triggered_by}
  */
  readonly triggeredBy?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#uuid DdosDstZonePortZoneService#uuid}
  */
  readonly uuid?: string;
}

export function ddosDstZonePortZoneServicePatternRecognitionToTerraform(struct?: DdosDstZonePortZoneServicePatternRecognitionOutputReference | DdosDstZonePortZoneServicePatternRecognition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    algorithm: cdktf.stringToTerraform(struct!.algorithm),
    app_payload_offset: cdktf.numberToTerraform(struct!.appPayloadOffset),
    capture_traffic: cdktf.stringToTerraform(struct!.captureTraffic),
    filter_inactive_threshold: cdktf.numberToTerraform(struct!.filterInactiveThreshold),
    filter_threshold: cdktf.numberToTerraform(struct!.filterThreshold),
    mode: cdktf.stringToTerraform(struct!.mode),
    sensitivity: cdktf.stringToTerraform(struct!.sensitivity),
    triggered_by: cdktf.stringToTerraform(struct!.triggeredBy),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function ddosDstZonePortZoneServicePatternRecognitionToHclTerraform(struct?: DdosDstZonePortZoneServicePatternRecognitionOutputReference | DdosDstZonePortZoneServicePatternRecognition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    algorithm: {
      value: cdktf.stringToHclTerraform(struct!.algorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    app_payload_offset: {
      value: cdktf.numberToHclTerraform(struct!.appPayloadOffset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    capture_traffic: {
      value: cdktf.stringToHclTerraform(struct!.captureTraffic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter_inactive_threshold: {
      value: cdktf.numberToHclTerraform(struct!.filterInactiveThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    filter_threshold: {
      value: cdktf.numberToHclTerraform(struct!.filterThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sensitivity: {
      value: cdktf.stringToHclTerraform(struct!.sensitivity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    triggered_by: {
      value: cdktf.stringToHclTerraform(struct!.triggeredBy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DdosDstZonePortZoneServicePatternRecognitionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstZonePortZoneServicePatternRecognition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._algorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.algorithm = this._algorithm;
    }
    if (this._appPayloadOffset !== undefined) {
      hasAnyValues = true;
      internalValueResult.appPayloadOffset = this._appPayloadOffset;
    }
    if (this._captureTraffic !== undefined) {
      hasAnyValues = true;
      internalValueResult.captureTraffic = this._captureTraffic;
    }
    if (this._filterInactiveThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterInactiveThreshold = this._filterInactiveThreshold;
    }
    if (this._filterThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterThreshold = this._filterThreshold;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._sensitivity !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensitivity = this._sensitivity;
    }
    if (this._triggeredBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.triggeredBy = this._triggeredBy;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstZonePortZoneServicePatternRecognition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._algorithm = undefined;
      this._appPayloadOffset = undefined;
      this._captureTraffic = undefined;
      this._filterInactiveThreshold = undefined;
      this._filterThreshold = undefined;
      this._mode = undefined;
      this._sensitivity = undefined;
      this._triggeredBy = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._algorithm = value.algorithm;
      this._appPayloadOffset = value.appPayloadOffset;
      this._captureTraffic = value.captureTraffic;
      this._filterInactiveThreshold = value.filterInactiveThreshold;
      this._filterThreshold = value.filterThreshold;
      this._mode = value.mode;
      this._sensitivity = value.sensitivity;
      this._triggeredBy = value.triggeredBy;
      this._uuid = value.uuid;
    }
  }

  // algorithm - computed: false, optional: true, required: false
  private _algorithm?: string; 
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }
  public set algorithm(value: string) {
    this._algorithm = value;
  }
  public resetAlgorithm() {
    this._algorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm;
  }

  // app_payload_offset - computed: false, optional: true, required: false
  private _appPayloadOffset?: number; 
  public get appPayloadOffset() {
    return this.getNumberAttribute('app_payload_offset');
  }
  public set appPayloadOffset(value: number) {
    this._appPayloadOffset = value;
  }
  public resetAppPayloadOffset() {
    this._appPayloadOffset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appPayloadOffsetInput() {
    return this._appPayloadOffset;
  }

  // capture_traffic - computed: false, optional: true, required: false
  private _captureTraffic?: string; 
  public get captureTraffic() {
    return this.getStringAttribute('capture_traffic');
  }
  public set captureTraffic(value: string) {
    this._captureTraffic = value;
  }
  public resetCaptureTraffic() {
    this._captureTraffic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captureTrafficInput() {
    return this._captureTraffic;
  }

  // filter_inactive_threshold - computed: false, optional: true, required: false
  private _filterInactiveThreshold?: number; 
  public get filterInactiveThreshold() {
    return this.getNumberAttribute('filter_inactive_threshold');
  }
  public set filterInactiveThreshold(value: number) {
    this._filterInactiveThreshold = value;
  }
  public resetFilterInactiveThreshold() {
    this._filterInactiveThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInactiveThresholdInput() {
    return this._filterInactiveThreshold;
  }

  // filter_threshold - computed: false, optional: true, required: false
  private _filterThreshold?: number; 
  public get filterThreshold() {
    return this.getNumberAttribute('filter_threshold');
  }
  public set filterThreshold(value: number) {
    this._filterThreshold = value;
  }
  public resetFilterThreshold() {
    this._filterThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterThresholdInput() {
    return this._filterThreshold;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // sensitivity - computed: false, optional: true, required: false
  private _sensitivity?: string; 
  public get sensitivity() {
    return this.getStringAttribute('sensitivity');
  }
  public set sensitivity(value: string) {
    this._sensitivity = value;
  }
  public resetSensitivity() {
    this._sensitivity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitivityInput() {
    return this._sensitivity;
  }

  // triggered_by - computed: false, optional: true, required: false
  private _triggeredBy?: string; 
  public get triggeredBy() {
    return this.getStringAttribute('triggered_by');
  }
  public set triggeredBy(value: string) {
    this._triggeredBy = value;
  }
  public resetTriggeredBy() {
    this._triggeredBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggeredByInput() {
    return this._triggeredBy;
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
export interface DdosDstZonePortZoneServicePatternRecognitionPuDetails {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#uuid DdosDstZonePortZoneService#uuid}
  */
  readonly uuid?: string;
}

export function ddosDstZonePortZoneServicePatternRecognitionPuDetailsToTerraform(struct?: DdosDstZonePortZoneServicePatternRecognitionPuDetailsOutputReference | DdosDstZonePortZoneServicePatternRecognitionPuDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function ddosDstZonePortZoneServicePatternRecognitionPuDetailsToHclTerraform(struct?: DdosDstZonePortZoneServicePatternRecognitionPuDetailsOutputReference | DdosDstZonePortZoneServicePatternRecognitionPuDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class DdosDstZonePortZoneServicePatternRecognitionPuDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstZonePortZoneServicePatternRecognitionPuDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstZonePortZoneServicePatternRecognitionPuDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
    }
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
export interface DdosDstZonePortZoneServicePortIndSamplingEnable {
  /**
  * 'all': all; 'ip-proto-type': IP Protocol Type; 'ddet_ind_pkt_rate_current': Pkt Rate Current; 'ddet_ind_pkt_rate_min': Pkt Rate Min; 'ddet_ind_pkt_rate_max': Pkt Rate Max; 'ddet_ind_pkt_rate_adaptive_threshold': Pkt Rate Adaptive Threshold; 'ddet_ind_pkt_drop_rate_current': Pkt Drop Rate Current; 'ddet_ind_pkt_drop_rate_min': Pkt Drop Rate Min; 'ddet_ind_pkt_drop_rate_max': Pkt Drop Rate Max; 'ddet_ind_pkt_drop_rate_adaptive_threshold': Pkt Drop Rate Adaptive Threshold; 'ddet_ind_syn_rate_current': TCP SYN Rate Current; 'ddet_ind_syn_rate_min': TCP SYN Rate Min; 'ddet_ind_syn_rate_max': TCP SYN Rate Max; 'ddet_ind_syn_rate_adaptive_threshold': TCP SYN Rate Adaptive Threshold; 'ddet_ind_fin_rate_current': TCP FIN Rate Current; 'ddet_ind_fin_rate_min': TCP FIN Rate Min; 'ddet_ind_fin_rate_max': TCP FIN Rate Max; 'ddet_ind_fin_rate_adaptive_threshold': TCP FIN Rate Adaptive Threshold; 'ddet_ind_rst_rate_current': TCP RST Rate Current; 'ddet_ind_rst_rate_min': TCP RST Rate Min; 'ddet_ind_rst_rate_max': TCP RST Rate Max; 'ddet_ind_rst_rate_adaptive_threshold': TCP RST Rate Adaptive Threshold; 'ddet_ind_small_window_ack_rate_current': TCP Small Window ACK Rate Current; 'ddet_ind_small_window_ack_rate_min': TCP Small Window ACK Rate Min; 'ddet_ind_small_window_ack_rate_max': TCP Small Window ACK Rate Max; 'ddet_ind_small_window_ack_rate_adaptive_threshold': TCP Small Window ACK Rate Adaptive Threshold; 'ddet_ind_empty_ack_rate_current': TCP Empty ACK Rate Current; 'ddet_ind_empty_ack_rate_min': TCP Empty ACK Rate Min; 'ddet_ind_empty_ack_rate_max': TCP Empty ACK Rate Max; 'ddet_ind_empty_ack_rate_adaptive_threshold': TCP Empty ACK Rate Adaptive Threshold; 'ddet_ind_small_payload_rate_current': TCP Small Payload Rate Current; 'ddet_ind_small_payload_rate_min': TCP Small Payload Rate Min; 'ddet_ind_small_payload_rate_max': TCP Small Payload Rate Max; 'ddet_ind_small_payload_rate_adaptive_threshold': TCP Small Payload Rate Adaptive Threshold; 'ddet_ind_pkt_drop_ratio_current': Pkt Drop / Pkt Rcvd Current; 'ddet_ind_pkt_drop_ratio_min': Pkt Drop / Pkt Rcvd Min; 'ddet_ind_pkt_drop_ratio_max': Pkt Drop / Pkt Rcvd Max; 'ddet_ind_pkt_drop_ratio_adaptive_threshold': Pkt Drop / Pkt Rcvd Adaptive Threshold; 'ddet_ind_inb_per_outb_current': Bytes-to / Bytes-from Current; 'ddet_ind_inb_per_outb_min': Bytes-to / Bytes-from Min; 'ddet_ind_inb_per_outb_max': Bytes-to / Bytes-from Max; 'ddet_ind_inb_per_outb_adaptive_threshold': Bytes-to / Bytes-from Adaptive Threshold; 'ddet_ind_syn_per_fin_rate_current': TCP SYN Rate / FIN Rate Current; 'ddet_ind_syn_per_fin_rate_min': TCP SYN Rate / FIN Rate Min; 'ddet_ind_syn_per_fin_rate_max': TCP SYN Rate / FIN Rate Max; 'ddet_ind_syn_per_fin_rate_adaptive_threshold': TCP SYN Rate / FIN Rate Adaptive Threshold; 'ddet_ind_conn_miss_rate_current': TCP Session Miss Rate Current; 'ddet_ind_conn_miss_rate_min': TCP Session Miss Rate Min; 'ddet_ind_conn_miss_rate_max': TCP Session Miss Rate Max; 'ddet_ind_conn_miss_rate_adaptive_threshold': TCP Session Miss Rate Adaptive Threshold; 'ddet_ind_concurrent_conns_current': TCP/UDP Concurrent Sessions Current; 'ddet_ind_concurrent_conns_min': TCP/UDP Concurrent Sessions Min; 'ddet_ind_concurrent_conns_max': TCP/UDP Concurrent Sessions Max; 'ddet_ind_concurrent_conns_adaptive_threshold': TCP/UDP Concurrent Sessions Adaptive Threshold; 'ddet_ind_data_cpu_util_current': Data CPU Utilization Current; 'ddet_ind_data_cpu_util_min': Data CPU Utilization Min; 'ddet_ind_data_cpu_util_max': Data CPU Utilization Max; 'ddet_ind_data_cpu_util_adaptive_threshold': Data CPU Utilization Adaptive Threshold; 'ddet_ind_outside_intf_util_current': Outside Interface Utilization Current; 'ddet_ind_outside_intf_util_min': Outside Interface Utilization Min; 'ddet_ind_outside_intf_util_max': Outside Interface Utilization Max; 'ddet_ind_outside_intf_util_adaptive_threshold': Outside Interface Utilization Adaptive Threshold; 'ddet_ind_frag_rate_current': Frag Pkt Rate Current; 'ddet_ind_frag_rate_min': Frag Pkt Rate Min; 'ddet_ind_frag_rate_max': Frag Pkt Rate Max; 'ddet_ind_frag_rate_adaptive_threshold': Frag Pkt Rate Adaptive Threshold; 'ddet_ind_bit_rate_current': Bit Rate Current; 'ddet_ind_bit_rate_min': Bit Rate Min; 'ddet_ind_bit_rate_max': Bit Rate Max; 'ddet_ind_bit_rate_adaptive_threshold': Bit Rate Adaptive Threshold;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#counters1 DdosDstZonePortZoneService#counters1}
  */
  readonly counters1?: string;
}

export function ddosDstZonePortZoneServicePortIndSamplingEnableToTerraform(struct?: DdosDstZonePortZoneServicePortIndSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function ddosDstZonePortZoneServicePortIndSamplingEnableToHclTerraform(struct?: DdosDstZonePortZoneServicePortIndSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    counters1: {
      value: cdktf.stringToHclTerraform(struct!.counters1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstZonePortZoneServicePortIndSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosDstZonePortZoneServicePortIndSamplingEnable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counters1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters1 = this._counters1;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstZonePortZoneServicePortIndSamplingEnable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counters1 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._counters1 = value.counters1;
    }
  }

  // counters1 - computed: false, optional: true, required: false
  private _counters1?: string; 
  public get counters1() {
    return this.getStringAttribute('counters1');
  }
  public set counters1(value: string) {
    this._counters1 = value;
  }
  public resetCounters1() {
    this._counters1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters1Input() {
    return this._counters1;
  }
}

export class DdosDstZonePortZoneServicePortIndSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : DdosDstZonePortZoneServicePortIndSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): DdosDstZonePortZoneServicePortIndSamplingEnableOutputReference {
    return new DdosDstZonePortZoneServicePortIndSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosDstZonePortZoneServicePortInd {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#uuid DdosDstZonePortZoneService#uuid}
  */
  readonly uuid?: string;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#sampling_enable DdosDstZonePortZoneService#sampling_enable}
  */
  readonly samplingEnable?: DdosDstZonePortZoneServicePortIndSamplingEnable[] | cdktf.IResolvable;
}

export function ddosDstZonePortZoneServicePortIndToTerraform(struct?: DdosDstZonePortZoneServicePortIndOutputReference | DdosDstZonePortZoneServicePortInd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
    sampling_enable: cdktf.listMapper(ddosDstZonePortZoneServicePortIndSamplingEnableToTerraform, true)(struct!.samplingEnable),
  }
}


export function ddosDstZonePortZoneServicePortIndToHclTerraform(struct?: DdosDstZonePortZoneServicePortIndOutputReference | DdosDstZonePortZoneServicePortInd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sampling_enable: {
      value: cdktf.listMapperHcl(ddosDstZonePortZoneServicePortIndSamplingEnableToHclTerraform, true)(struct!.samplingEnable),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstZonePortZoneServicePortIndSamplingEnableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstZonePortZoneServicePortIndOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstZonePortZoneServicePortInd | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._samplingEnable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingEnable = this._samplingEnable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstZonePortZoneServicePortInd | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
      this._samplingEnable.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
      this._samplingEnable.internalValue = value.samplingEnable;
    }
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

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new DdosDstZonePortZoneServicePortIndSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: DdosDstZonePortZoneServicePortIndSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }
}
export interface DdosDstZonePortZoneServiceProgressionTracking {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#uuid DdosDstZonePortZoneService#uuid}
  */
  readonly uuid?: string;
}

export function ddosDstZonePortZoneServiceProgressionTrackingToTerraform(struct?: DdosDstZonePortZoneServiceProgressionTrackingOutputReference | DdosDstZonePortZoneServiceProgressionTracking): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function ddosDstZonePortZoneServiceProgressionTrackingToHclTerraform(struct?: DdosDstZonePortZoneServiceProgressionTrackingOutputReference | DdosDstZonePortZoneServiceProgressionTracking): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class DdosDstZonePortZoneServiceProgressionTrackingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstZonePortZoneServiceProgressionTracking | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstZonePortZoneServiceProgressionTracking | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
    }
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
export interface DdosDstZonePortZoneServiceSflowTcp {
  /**
  * Enable sFlow basic TCP counter polling
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#sflow_tcp_basic DdosDstZonePortZoneService#sflow_tcp_basic}
  */
  readonly sflowTcpBasic?: number;
  /**
  * Enable sFlow stateful TCP counter polling
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#sflow_tcp_stateful DdosDstZonePortZoneService#sflow_tcp_stateful}
  */
  readonly sflowTcpStateful?: number;
}

export function ddosDstZonePortZoneServiceSflowTcpToTerraform(struct?: DdosDstZonePortZoneServiceSflowTcpOutputReference | DdosDstZonePortZoneServiceSflowTcp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sflow_tcp_basic: cdktf.numberToTerraform(struct!.sflowTcpBasic),
    sflow_tcp_stateful: cdktf.numberToTerraform(struct!.sflowTcpStateful),
  }
}


export function ddosDstZonePortZoneServiceSflowTcpToHclTerraform(struct?: DdosDstZonePortZoneServiceSflowTcpOutputReference | DdosDstZonePortZoneServiceSflowTcp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sflow_tcp_basic: {
      value: cdktf.numberToHclTerraform(struct!.sflowTcpBasic),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sflow_tcp_stateful: {
      value: cdktf.numberToHclTerraform(struct!.sflowTcpStateful),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstZonePortZoneServiceSflowTcpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstZonePortZoneServiceSflowTcp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sflowTcpBasic !== undefined) {
      hasAnyValues = true;
      internalValueResult.sflowTcpBasic = this._sflowTcpBasic;
    }
    if (this._sflowTcpStateful !== undefined) {
      hasAnyValues = true;
      internalValueResult.sflowTcpStateful = this._sflowTcpStateful;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstZonePortZoneServiceSflowTcp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sflowTcpBasic = undefined;
      this._sflowTcpStateful = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sflowTcpBasic = value.sflowTcpBasic;
      this._sflowTcpStateful = value.sflowTcpStateful;
    }
  }

  // sflow_tcp_basic - computed: false, optional: true, required: false
  private _sflowTcpBasic?: number; 
  public get sflowTcpBasic() {
    return this.getNumberAttribute('sflow_tcp_basic');
  }
  public set sflowTcpBasic(value: number) {
    this._sflowTcpBasic = value;
  }
  public resetSflowTcpBasic() {
    this._sflowTcpBasic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sflowTcpBasicInput() {
    return this._sflowTcpBasic;
  }

  // sflow_tcp_stateful - computed: false, optional: true, required: false
  private _sflowTcpStateful?: number; 
  public get sflowTcpStateful() {
    return this.getNumberAttribute('sflow_tcp_stateful');
  }
  public set sflowTcpStateful(value: number) {
    this._sflowTcpStateful = value;
  }
  public resetSflowTcpStateful() {
    this._sflowTcpStateful = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sflowTcpStatefulInput() {
    return this._sflowTcpStateful;
  }
}
export interface DdosDstZonePortZoneServiceSignatureExtraction {
  /**
  * 'heuristic': heuristic algorithm;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#algorithm DdosDstZonePortZoneService#algorithm}
  */
  readonly algorithm?: string;
  /**
  * Enable manual mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#manual_mode DdosDstZonePortZoneService#manual_mode}
  */
  readonly manualMode?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#uuid DdosDstZonePortZoneService#uuid}
  */
  readonly uuid?: string;
}

export function ddosDstZonePortZoneServiceSignatureExtractionToTerraform(struct?: DdosDstZonePortZoneServiceSignatureExtractionOutputReference | DdosDstZonePortZoneServiceSignatureExtraction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    algorithm: cdktf.stringToTerraform(struct!.algorithm),
    manual_mode: cdktf.numberToTerraform(struct!.manualMode),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function ddosDstZonePortZoneServiceSignatureExtractionToHclTerraform(struct?: DdosDstZonePortZoneServiceSignatureExtractionOutputReference | DdosDstZonePortZoneServiceSignatureExtraction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    algorithm: {
      value: cdktf.stringToHclTerraform(struct!.algorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    manual_mode: {
      value: cdktf.numberToHclTerraform(struct!.manualMode),
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

export class DdosDstZonePortZoneServiceSignatureExtractionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstZonePortZoneServiceSignatureExtraction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._algorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.algorithm = this._algorithm;
    }
    if (this._manualMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.manualMode = this._manualMode;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstZonePortZoneServiceSignatureExtraction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._algorithm = undefined;
      this._manualMode = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._algorithm = value.algorithm;
      this._manualMode = value.manualMode;
      this._uuid = value.uuid;
    }
  }

  // algorithm - computed: false, optional: true, required: false
  private _algorithm?: string; 
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }
  public set algorithm(value: string) {
    this._algorithm = value;
  }
  public resetAlgorithm() {
    this._algorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm;
  }

  // manual_mode - computed: false, optional: true, required: false
  private _manualMode?: number; 
  public get manualMode() {
    return this.getNumberAttribute('manual_mode');
  }
  public set manualMode(value: number) {
    this._manualMode = value;
  }
  public resetManualMode() {
    this._manualMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manualModeInput() {
    return this._manualMode;
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
export interface DdosDstZonePortZoneServiceSrcBasedPolicyListPolicyClassListListClassListOverflowPolicyListZoneTemplate {
  /**
  * DDOS dns template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#dns DdosDstZonePortZoneService#dns}
  */
  readonly dns?: string;
  /**
  * DDOS encap template (IPv6-over-IPv4 / IPv4-over-IPv6 are not supported.)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#encap DdosDstZonePortZoneService#encap}
  */
  readonly encap?: string;
  /**
  * DDOS http template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#http DdosDstZonePortZoneService#http}
  */
  readonly http?: string;
  /**
  * DDOS logging template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#logging DdosDstZonePortZoneService#logging}
  */
  readonly logging?: string;
  /**
  * DDOS quic template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#quic DdosDstZonePortZoneService#quic}
  */
  readonly quic?: string;
  /**
  * DDOS sip template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#sip DdosDstZonePortZoneService#sip}
  */
  readonly sip?: string;
  /**
  * DDOS ssl-l4 template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#ssl_l4 DdosDstZonePortZoneService#ssl_l4}
  */
  readonly sslL4?: string;
  /**
  * DDOS tcp template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#tcp DdosDstZonePortZoneService#tcp}
  */
  readonly tcp?: string;
  /**
  * DDOS udp template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#udp DdosDstZonePortZoneService#udp}
  */
  readonly udp?: string;
}

export function ddosDstZonePortZoneServiceSrcBasedPolicyListPolicyClassListListClassListOverflowPolicyListZoneTemplateToTerraform(struct?: DdosDstZonePortZoneServiceSrcBasedPolicyListPolicyClassListListClassListOverflowPolicyListZoneTemplateOutputReference | DdosDstZonePortZoneServiceSrcBasedPolicyListPolicyClassListListClassListOverflowPolicyListZoneTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns: cdktf.stringToTerraform(struct!.dns),
    encap: cdktf.stringToTerraform(struct!.encap),
    http: cdktf.stringToTerraform(struct!.http),
    logging: cdktf.stringToTerraform(struct!.logging),
    quic: cdktf.stringToTerraform(struct!.quic),
    sip: cdktf.stringToTerraform(struct!.sip),
    ssl_l4: cdktf.stringToTerraform(struct!.sslL4),
    tcp: cdktf.stringToTerraform(struct!.tcp),
    udp: cdktf.stringToTerraform(struct!.udp),
  }
}


export function ddosDstZonePortZoneServiceSrcBasedPolicyListPolicyClassListListClassListOverflowPolicyListZoneTemplateToHclTerraform(struct?: DdosDstZonePortZoneServiceSrcBasedPolicyListPolicyClassListListClassListOverflowPolicyListZoneTemplateOutputReference | DdosDstZonePortZoneServiceSrcBasedPolicyListPolicyClassListListClassListOverflowPolicyListZoneTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns: {
      value: cdktf.stringToHclTerraform(struct!.dns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encap: {
      value: cdktf.stringToHclTerraform(struct!.encap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http: {
      value: cdktf.stringToHclTerraform(struct!.http),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logging: {
      value: cdktf.stringToHclTerraform(struct!.logging),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    quic: {
      value: cdktf.stringToHclTerraform(struct!.quic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sip: {
      value: cdktf.stringToHclTerraform(struct!.sip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_l4: {
      value: cdktf.stringToHclTerraform(struct!.sslL4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tcp: {
      value: cdktf.stringToHclTerraform(struct!.tcp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    udp: {
      value: cdktf.stringToHclTerraform(struct!.udp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstZonePortZoneServiceSrcBasedPolicyListPolicyClassListListClassListOverflowPolicyListZoneTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstZonePortZoneServiceSrcBasedPolicyListPolicyClassListListClassListOverflowPolicyListZoneTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dns !== undefined) {
      hasAnyValues = true;
      internalValueResult.dns = this._dns;
    }
    if (this._encap !== undefined) {
      hasAnyValues = true;
      internalValueResult.encap = this._encap;
    }
    if (this._http !== undefined) {
      hasAnyValues = true;
      internalValueResult.http = this._http;
    }
    if (this._logging !== undefined) {
      hasAnyValues = true;
      internalValueResult.logging = this._logging;
    }
    if (this._quic !== undefined) {
      hasAnyValues = true;
      internalValueResult.quic = this._quic;
    }
    if (this._sip !== undefined) {
      hasAnyValues = true;
      internalValueResult.sip = this._sip;
    }
    if (this._sslL4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslL4 = this._sslL4;
    }
    if (this._tcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcp = this._tcp;
    }
    if (this._udp !== undefined) {
      hasAnyValues = true;
      internalValueResult.udp = this._udp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstZonePortZoneServiceSrcBasedPolicyListPolicyClassListListClassListOverflowPolicyListZoneTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dns = undefined;
      this._encap = undefined;
      this._http = undefined;
      this._logging = undefined;
      this._quic = undefined;
      this._sip = undefined;
      this._sslL4 = undefined;
      this._tcp = undefined;
      this._udp = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dns = value.dns;
      this._encap = value.encap;
      this._http = value.http;
      this._logging = value.logging;
      this._quic = value.quic;
      this._sip = value.sip;
      this._sslL4 = value.sslL4;
      this._tcp = value.tcp;
      this._udp = value.udp;
    }
  }

  // dns - computed: false, optional: true, required: false
  private _dns?: string; 
  public get dns() {
    return this.getStringAttribute('dns');
  }
  public set dns(value: string) {
    this._dns = value;
  }
  public resetDns() {
    this._dns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsInput() {
    return this._dns;
  }

  // encap - computed: false, optional: true, required: false
  private _encap?: string; 
  public get encap() {
    return this.getStringAttribute('encap');
  }
  public set encap(value: string) {
    this._encap = value;
  }
  public resetEncap() {
    this._encap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encapInput() {
    return this._encap;
  }

  // http - computed: false, optional: true, required: false
  private _http?: string; 
  public get http() {
    return this.getStringAttribute('http');
  }
  public set http(value: string) {
    this._http = value;
  }
  public resetHttp() {
    this._http = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpInput() {
    return this._http;
  }

  // logging - computed: false, optional: true, required: false
  private _logging?: string; 
  public get logging() {
    return this.getStringAttribute('logging');
  }
  public set logging(value: string) {
    this._logging = value;
  }
  public resetLogging() {
    this._logging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingInput() {
    return this._logging;
  }

  // quic - computed: false, optional: true, required: false
  private _quic?: string; 
  public get quic() {
    return this.getStringAttribute('quic');
  }
  public set quic(value: string) {
    this._quic = value;
  }
  public resetQuic() {
    this._quic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quicInput() {
    return this._quic;
  }

  // sip - computed: false, optional: true, required: false
  private _sip?: string; 
  public get sip() {
    return this.getStringAttribute('sip');
  }
  public set sip(value: string) {
    this._sip = value;
  }
  public resetSip() {
    this._sip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sipInput() {
    return this._sip;
  }

  // ssl_l4 - computed: false, optional: true, required: false
  private _sslL4?: string; 
  public get sslL4() {
    return this.getStringAttribute('ssl_l4');
  }
  public set sslL4(value: string) {
    this._sslL4 = value;
  }
  public resetSslL4() {
    this._sslL4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslL4Input() {
    return this._sslL4;
  }

  // tcp - computed: false, optional: true, required: false
  private _tcp?: string; 
  public get tcp() {
    return this.getStringAttribute('tcp');
  }
  public set tcp(value: string) {
    this._tcp = value;
  }
  public resetTcp() {
    this._tcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpInput() {
    return this._tcp;
  }

  // udp - computed: false, optional: true, required: false
  private _udp?: string; 
  public get udp() {
    return this.getStringAttribute('udp');
  }
  public set udp(value: string) {
    this._udp = value;
  }
  public resetUdp() {
    this._udp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpInput() {
    return this._udp;
  }
}
export interface DdosDstZonePortZoneServiceSrcBasedPolicyListPolicyClassListListClassListOverflowPolicyListStruct {
  /**
  * 'bypass': Always permit for the Source to bypass all feature & limit checks; 'deny': Blacklist incoming packets for service;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#action DdosDstZonePortZoneService#action}
  */
  readonly action?: string;
  /**
  * 'configuration': Configure overflow policy for class-list;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#dummy_name DdosDstZonePortZoneService#dummy_name}
  */
  readonly dummyName: string;
  /**
  * Global limit ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#glid DdosDstZonePortZoneService#glid}
  */
  readonly glid?: string;
  /**
  * Enable logging
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#log_enable DdosDstZonePortZoneService#log_enable}
  */
  readonly logEnable?: number;
  /**
  * Enable log periodic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#log_periodic DdosDstZonePortZoneService#log_periodic}
  */
  readonly logPeriodic?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#user_tag DdosDstZonePortZoneService#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#uuid DdosDstZonePortZoneService#uuid}
  */
  readonly uuid?: string;
  /**
  * zone_template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#zone_template DdosDstZonePortZoneService#zone_template}
  */
  readonly zoneTemplate?: DdosDstZonePortZoneServiceSrcBasedPolicyListPolicyClassListListClassListOverflowPolicyListZoneTemplate;
}

export function ddosDstZonePortZoneServiceSrcBasedPolicyListPolicyClassListListClassListOverflowPolicyListStructToTerraform(struct?: DdosDstZonePortZoneServiceSrcBasedPolicyListPolicyClassListListClassListOverflowPolicyListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    dummy_name: cdktf.stringToTerraform(struct!.dummyName),
    glid: cdktf.stringToTerraform(struct!.glid),
    log_enable: cdktf.numberToTerraform(struct!.logEnable),
    log_periodic: cdktf.numberToTerraform(struct!.logPeriodic),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    zone_template: ddosDstZonePortZoneServiceSrcBasedPolicyListPolicyClassListListClassListOverflowPolicyListZoneTemplateToTerraform(struct!.zoneTemplate),
  }
}


export function ddosDstZonePortZoneServiceSrcBasedPolicyListPolicyClassListListClassListOverflowPolicyListStructToHclTerraform(struct?: DdosDstZonePortZoneServiceSrcBasedPolicyListPolicyClassListListClassListOverflowPolicyListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dummy_name: {
      value: cdktf.stringToHclTerraform(struct!.dummyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    glid: {
      value: cdktf.stringToHclTerraform(struct!.glid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_enable: {
      value: cdktf.numberToHclTerraform(struct!.logEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log_periodic: {
      value: cdktf.numberToHclTerraform(struct!.logPeriodic),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    user_tag: {
      value: cdktf.stringToHclTerraform(struct!.userTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zone_template: {
      value: ddosDstZonePortZoneServiceSrcBasedPolicyListPolicyClassListListClassListOverflowPolicyListZoneTemplateToHclTerraform(struct!.zoneTemplate),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstZonePortZoneServiceSrcBasedPolicyListPolicyClassListListClassListOverflowPolicyListZoneTemplateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstZonePortZoneServiceSrcBasedPolicyListPolicyClassListListClassListOverflowPolicyListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosDstZonePortZoneServiceSrcBasedPolicyListPolicyClassListListClassListOverflowPolicyListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._dummyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dummyName = this._dummyName;
    }
    if (this._glid !== undefined) {
      hasAnyValues = true;
      internalValueResult.glid = this._glid;
    }
    if (this._logEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.logEnable = this._logEnable;
    }
    if (this._logPeriodic !== undefined) {
      hasAnyValues = true;
      internalValueResult.logPeriodic = this._logPeriodic;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._zoneTemplate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneTemplate = this._zoneTemplate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstZonePortZoneServiceSrcBasedPolicyListPolicyClassListListClassListOverflowPolicyListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._dummyName = undefined;
      this._glid = undefined;
      this._logEnable = undefined;
      this._logPeriodic = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
      this._zoneTemplate.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._dummyName = value.dummyName;
      this._glid = value.glid;
      this._logEnable = value.logEnable;
      this._logPeriodic = value.logPeriodic;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
      this._zoneTemplate.internalValue = value.zoneTemplate;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // dummy_name - computed: false, optional: false, required: true
  private _dummyName?: string; 
  public get dummyName() {
    return this.getStringAttribute('dummy_name');
  }
  public set dummyName(value: string) {
    this._dummyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dummyNameInput() {
    return this._dummyName;
  }

  // glid - computed: false, optional: true, required: false
  private _glid?: string; 
  public get glid() {
    return this.getStringAttribute('glid');
  }
  public set glid(value: string) {
    this._glid = value;
  }
  public resetGlid() {
    this._glid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get glidInput() {
    return this._glid;
  }

  // log_enable - computed: false, optional: true, required: false
  private _logEnable?: number; 
  public get logEnable() {
    return this.getNumberAttribute('log_enable');
  }
  public set logEnable(value: number) {
    this._logEnable = value;
  }
  public resetLogEnable() {
    this._logEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logEnableInput() {
    return this._logEnable;
  }

  // log_periodic - computed: false, optional: true, required: false
  private _logPeriodic?: number; 
  public get logPeriodic() {
    return this.getNumberAttribute('log_periodic');
  }
  public set logPeriodic(value: number) {
    this._logPeriodic = value;
  }
  public resetLogPeriodic() {
    this._logPeriodic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logPeriodicInput() {
    return this._logPeriodic;
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

  // zone_template - computed: false, optional: true, required: false
  private _zoneTemplate = new DdosDstZonePortZoneServiceSrcBasedPolicyListPolicyClassListListClassListOverflowPolicyListZoneTemplateOutputReference(this, "zone_template");
  public get zoneTemplate() {
    return this._zoneTemplate;
  }
  public putZoneTemplate(value: DdosDstZonePortZoneServiceSrcBasedPolicyListPolicyClassListListClassListOverflowPolicyListZoneTemplate) {
    this._zoneTemplate.internalValue = value;
  }
  public resetZoneTemplate() {
    this._zoneTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneTemplateInput() {
    return this._zoneTemplate.internalValue;
  }
}

export class DdosDstZonePortZoneServiceSrcBasedPolicyListPolicyClassListListClassListOverflowPolicyListStructList extends cdktf.ComplexList {
  public internalValue? : DdosDstZonePortZoneServiceSrcBasedPolicyListPolicyClassListListClassListOverflowPolicyListStruct[] | cdktf.IResolvable

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
  public get(index: number): DdosDstZonePortZoneServiceSrcBasedPolicyListPolicyClassListListClassListOverflowPolicyListStructOutputReference {
    return new DdosDstZonePortZoneServiceSrcBasedPolicyListPolicyClassListListClassListOverflowPolicyListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosDstZonePortZoneServiceSrcBasedPolicyListPolicyClassListListSamplingEnable {
  /**
  * 'all': all; 'packet_received': Packets Received; 'packet_dropped': Packets Dropped; 'entry_learned': Entry Learned; 'entry_count_overflow': Entry Count Overflow;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#counters1 DdosDstZonePortZoneService#counters1}
  */
  readonly counters1?: string;
}

export function ddosDstZonePortZoneServiceSrcBasedPolicyListPolicyClassListListSamplingEnableToTerraform(struct?: DdosDstZonePortZoneServiceSrcBasedPolicyListPolicyClassListListSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function ddosDstZonePortZoneServiceSrcBasedPolicyListPolicyClassListListSamplingEnableToHclTerraform(struct?: DdosDstZonePortZoneServiceSrcBasedPolicyListPolicyClassListListSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    counters1: {
      value: cdktf.stringToHclTerraform(struct!.counters1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstZonePortZoneServiceSrcBasedPolicyListPolicyClassListListSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosDstZonePortZoneServiceSrcBasedPolicyListPolicyClassListListSamplingEnable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counters1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters1 = this._counters1;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstZonePortZoneServiceSrcBasedPolicyListPolicyClassListListSamplingEnable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counters1 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._counters1 = value.counters1;
    }
  }

  // counters1 - computed: false, optional: true, required: false
  private _counters1?: string; 
  public get counters1() {
    return this.getStringAttribute('counters1');
  }
  public set counters1(value: string) {
    this._counters1 = value;
  }
  public resetCounters1() {
    this._counters1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters1Input() {
    return this._counters1;
  }
}

export class DdosDstZonePortZoneServiceSrcBasedPolicyListPolicyClassListListSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : DdosDstZonePortZoneServiceSrcBasedPolicyListPolicyClassListListSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): DdosDstZonePortZoneServiceSrcBasedPolicyListPolicyClassListListSamplingEnableOutputReference {
    return new DdosDstZonePortZoneServiceSrcBasedPolicyListPolicyClassListListSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosDstZonePortZoneServiceSrcBasedPolicyListPolicyClassListListZoneTemplate {
  /**
  * DDOS dns template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#dns DdosDstZonePortZoneService#dns}
  */
  readonly dns?: string;
  /**
  * DDOS encap template (IPv6-over-IPv4 / IPv4-over-IPv6 are not supported.)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#encap DdosDstZonePortZoneService#encap}
  */
  readonly encap?: string;
  /**
  * DDOS http template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#http DdosDstZonePortZoneService#http}
  */
  readonly http?: string;
  /**
  * DDOS logging template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#logging DdosDstZonePortZoneService#logging}
  */
  readonly logging?: string;
  /**
  * DDOS quic template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#quic DdosDstZonePortZoneService#quic}
  */
  readonly quic?: string;
  /**
  * DDOS sip template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#sip DdosDstZonePortZoneService#sip}
  */
  readonly sip?: string;
  /**
  * DDOS ssl-l4 template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#ssl_l4 DdosDstZonePortZoneService#ssl_l4}
  */
  readonly sslL4?: string;
  /**
  * DDOS tcp template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#tcp DdosDstZonePortZoneService#tcp}
  */
  readonly tcp?: string;
  /**
  * DDOS udp template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#udp DdosDstZonePortZoneService#udp}
  */
  readonly udp?: string;
}

export function ddosDstZonePortZoneServiceSrcBasedPolicyListPolicyClassListListZoneTemplateToTerraform(struct?: DdosDstZonePortZoneServiceSrcBasedPolicyListPolicyClassListListZoneTemplateOutputReference | DdosDstZonePortZoneServiceSrcBasedPolicyListPolicyClassListListZoneTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns: cdktf.stringToTerraform(struct!.dns),
    encap: cdktf.stringToTerraform(struct!.encap),
    http: cdktf.stringToTerraform(struct!.http),
    logging: cdktf.stringToTerraform(struct!.logging),
    quic: cdktf.stringToTerraform(struct!.quic),
    sip: cdktf.stringToTerraform(struct!.sip),
    ssl_l4: cdktf.stringToTerraform(struct!.sslL4),
    tcp: cdktf.stringToTerraform(struct!.tcp),
    udp: cdktf.stringToTerraform(struct!.udp),
  }
}


export function ddosDstZonePortZoneServiceSrcBasedPolicyListPolicyClassListListZoneTemplateToHclTerraform(struct?: DdosDstZonePortZoneServiceSrcBasedPolicyListPolicyClassListListZoneTemplateOutputReference | DdosDstZonePortZoneServiceSrcBasedPolicyListPolicyClassListListZoneTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns: {
      value: cdktf.stringToHclTerraform(struct!.dns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encap: {
      value: cdktf.stringToHclTerraform(struct!.encap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http: {
      value: cdktf.stringToHclTerraform(struct!.http),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logging: {
      value: cdktf.stringToHclTerraform(struct!.logging),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    quic: {
      value: cdktf.stringToHclTerraform(struct!.quic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sip: {
      value: cdktf.stringToHclTerraform(struct!.sip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_l4: {
      value: cdktf.stringToHclTerraform(struct!.sslL4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tcp: {
      value: cdktf.stringToHclTerraform(struct!.tcp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    udp: {
      value: cdktf.stringToHclTerraform(struct!.udp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstZonePortZoneServiceSrcBasedPolicyListPolicyClassListListZoneTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstZonePortZoneServiceSrcBasedPolicyListPolicyClassListListZoneTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dns !== undefined) {
      hasAnyValues = true;
      internalValueResult.dns = this._dns;
    }
    if (this._encap !== undefined) {
      hasAnyValues = true;
      internalValueResult.encap = this._encap;
    }
    if (this._http !== undefined) {
      hasAnyValues = true;
      internalValueResult.http = this._http;
    }
    if (this._logging !== undefined) {
      hasAnyValues = true;
      internalValueResult.logging = this._logging;
    }
    if (this._quic !== undefined) {
      hasAnyValues = true;
      internalValueResult.quic = this._quic;
    }
    if (this._sip !== undefined) {
      hasAnyValues = true;
      internalValueResult.sip = this._sip;
    }
    if (this._sslL4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslL4 = this._sslL4;
    }
    if (this._tcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcp = this._tcp;
    }
    if (this._udp !== undefined) {
      hasAnyValues = true;
      internalValueResult.udp = this._udp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstZonePortZoneServiceSrcBasedPolicyListPolicyClassListListZoneTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dns = undefined;
      this._encap = undefined;
      this._http = undefined;
      this._logging = undefined;
      this._quic = undefined;
      this._sip = undefined;
      this._sslL4 = undefined;
      this._tcp = undefined;
      this._udp = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dns = value.dns;
      this._encap = value.encap;
      this._http = value.http;
      this._logging = value.logging;
      this._quic = value.quic;
      this._sip = value.sip;
      this._sslL4 = value.sslL4;
      this._tcp = value.tcp;
      this._udp = value.udp;
    }
  }

  // dns - computed: false, optional: true, required: false
  private _dns?: string; 
  public get dns() {
    return this.getStringAttribute('dns');
  }
  public set dns(value: string) {
    this._dns = value;
  }
  public resetDns() {
    this._dns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsInput() {
    return this._dns;
  }

  // encap - computed: false, optional: true, required: false
  private _encap?: string; 
  public get encap() {
    return this.getStringAttribute('encap');
  }
  public set encap(value: string) {
    this._encap = value;
  }
  public resetEncap() {
    this._encap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encapInput() {
    return this._encap;
  }

  // http - computed: false, optional: true, required: false
  private _http?: string; 
  public get http() {
    return this.getStringAttribute('http');
  }
  public set http(value: string) {
    this._http = value;
  }
  public resetHttp() {
    this._http = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpInput() {
    return this._http;
  }

  // logging - computed: false, optional: true, required: false
  private _logging?: string; 
  public get logging() {
    return this.getStringAttribute('logging');
  }
  public set logging(value: string) {
    this._logging = value;
  }
  public resetLogging() {
    this._logging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingInput() {
    return this._logging;
  }

  // quic - computed: false, optional: true, required: false
  private _quic?: string; 
  public get quic() {
    return this.getStringAttribute('quic');
  }
  public set quic(value: string) {
    this._quic = value;
  }
  public resetQuic() {
    this._quic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quicInput() {
    return this._quic;
  }

  // sip - computed: false, optional: true, required: false
  private _sip?: string; 
  public get sip() {
    return this.getStringAttribute('sip');
  }
  public set sip(value: string) {
    this._sip = value;
  }
  public resetSip() {
    this._sip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sipInput() {
    return this._sip;
  }

  // ssl_l4 - computed: false, optional: true, required: false
  private _sslL4?: string; 
  public get sslL4() {
    return this.getStringAttribute('ssl_l4');
  }
  public set sslL4(value: string) {
    this._sslL4 = value;
  }
  public resetSslL4() {
    this._sslL4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslL4Input() {
    return this._sslL4;
  }

  // tcp - computed: false, optional: true, required: false
  private _tcp?: string; 
  public get tcp() {
    return this.getStringAttribute('tcp');
  }
  public set tcp(value: string) {
    this._tcp = value;
  }
  public resetTcp() {
    this._tcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpInput() {
    return this._tcp;
  }

  // udp - computed: false, optional: true, required: false
  private _udp?: string; 
  public get udp() {
    return this.getStringAttribute('udp');
  }
  public set udp(value: string) {
    this._udp = value;
  }
  public resetUdp() {
    this._udp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpInput() {
    return this._udp;
  }
}
export interface DdosDstZonePortZoneServiceSrcBasedPolicyListPolicyClassListListStruct {
  /**
  * 'bypass': Always permit for the Source to bypass all feature & limit checks; 'deny': Blacklist incoming packets for service;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#action DdosDstZonePortZoneService#action}
  */
  readonly action?: string;
  /**
  * Class-list name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#class_list_name DdosDstZonePortZoneService#class_list_name}
  */
  readonly classListName: string;
  /**
  * Global limit ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#glid DdosDstZonePortZoneService#glid}
  */
  readonly glid?: string;
  /**
  * 'drop': Drop packets for glid exceed (Default); 'blacklist-src': Blacklist-src for glid exceed; 'ignore': Do nothing for glid exceed;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#glid_action DdosDstZonePortZoneService#glid_action}
  */
  readonly glidAction?: string;
  /**
  * Enable logging
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#log_enable DdosDstZonePortZoneService#log_enable}
  */
  readonly logEnable?: number;
  /**
  * Enable log periodic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#log_periodic DdosDstZonePortZoneService#log_periodic}
  */
  readonly logPeriodic?: number;
  /**
  * Maximum count for dynamic source zone service entry allowed for this class-list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#max_dynamic_entry_count DdosDstZonePortZoneService#max_dynamic_entry_count}
  */
  readonly maxDynamicEntryCount?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#user_tag DdosDstZonePortZoneService#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#uuid DdosDstZonePortZoneService#uuid}
  */
  readonly uuid?: string;
  /**
  * class_list_overflow_policy_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#class_list_overflow_policy_list DdosDstZonePortZoneService#class_list_overflow_policy_list}
  */
  readonly classListOverflowPolicyList?: DdosDstZonePortZoneServiceSrcBasedPolicyListPolicyClassListListClassListOverflowPolicyListStruct[] | cdktf.IResolvable;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#sampling_enable DdosDstZonePortZoneService#sampling_enable}
  */
  readonly samplingEnable?: DdosDstZonePortZoneServiceSrcBasedPolicyListPolicyClassListListSamplingEnable[] | cdktf.IResolvable;
  /**
  * zone_template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#zone_template DdosDstZonePortZoneService#zone_template}
  */
  readonly zoneTemplate?: DdosDstZonePortZoneServiceSrcBasedPolicyListPolicyClassListListZoneTemplate;
}

export function ddosDstZonePortZoneServiceSrcBasedPolicyListPolicyClassListListStructToTerraform(struct?: DdosDstZonePortZoneServiceSrcBasedPolicyListPolicyClassListListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    class_list_name: cdktf.stringToTerraform(struct!.classListName),
    glid: cdktf.stringToTerraform(struct!.glid),
    glid_action: cdktf.stringToTerraform(struct!.glidAction),
    log_enable: cdktf.numberToTerraform(struct!.logEnable),
    log_periodic: cdktf.numberToTerraform(struct!.logPeriodic),
    max_dynamic_entry_count: cdktf.numberToTerraform(struct!.maxDynamicEntryCount),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    class_list_overflow_policy_list: cdktf.listMapper(ddosDstZonePortZoneServiceSrcBasedPolicyListPolicyClassListListClassListOverflowPolicyListStructToTerraform, true)(struct!.classListOverflowPolicyList),
    sampling_enable: cdktf.listMapper(ddosDstZonePortZoneServiceSrcBasedPolicyListPolicyClassListListSamplingEnableToTerraform, true)(struct!.samplingEnable),
    zone_template: ddosDstZonePortZoneServiceSrcBasedPolicyListPolicyClassListListZoneTemplateToTerraform(struct!.zoneTemplate),
  }
}


export function ddosDstZonePortZoneServiceSrcBasedPolicyListPolicyClassListListStructToHclTerraform(struct?: DdosDstZonePortZoneServiceSrcBasedPolicyListPolicyClassListListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_list_name: {
      value: cdktf.stringToHclTerraform(struct!.classListName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    glid: {
      value: cdktf.stringToHclTerraform(struct!.glid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    glid_action: {
      value: cdktf.stringToHclTerraform(struct!.glidAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_enable: {
      value: cdktf.numberToHclTerraform(struct!.logEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log_periodic: {
      value: cdktf.numberToHclTerraform(struct!.logPeriodic),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_dynamic_entry_count: {
      value: cdktf.numberToHclTerraform(struct!.maxDynamicEntryCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    user_tag: {
      value: cdktf.stringToHclTerraform(struct!.userTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_list_overflow_policy_list: {
      value: cdktf.listMapperHcl(ddosDstZonePortZoneServiceSrcBasedPolicyListPolicyClassListListClassListOverflowPolicyListStructToHclTerraform, true)(struct!.classListOverflowPolicyList),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstZonePortZoneServiceSrcBasedPolicyListPolicyClassListListClassListOverflowPolicyListStructList",
    },
    sampling_enable: {
      value: cdktf.listMapperHcl(ddosDstZonePortZoneServiceSrcBasedPolicyListPolicyClassListListSamplingEnableToHclTerraform, true)(struct!.samplingEnable),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstZonePortZoneServiceSrcBasedPolicyListPolicyClassListListSamplingEnableList",
    },
    zone_template: {
      value: ddosDstZonePortZoneServiceSrcBasedPolicyListPolicyClassListListZoneTemplateToHclTerraform(struct!.zoneTemplate),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstZonePortZoneServiceSrcBasedPolicyListPolicyClassListListZoneTemplateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstZonePortZoneServiceSrcBasedPolicyListPolicyClassListListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosDstZonePortZoneServiceSrcBasedPolicyListPolicyClassListListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._classListName !== undefined) {
      hasAnyValues = true;
      internalValueResult.classListName = this._classListName;
    }
    if (this._glid !== undefined) {
      hasAnyValues = true;
      internalValueResult.glid = this._glid;
    }
    if (this._glidAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.glidAction = this._glidAction;
    }
    if (this._logEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.logEnable = this._logEnable;
    }
    if (this._logPeriodic !== undefined) {
      hasAnyValues = true;
      internalValueResult.logPeriodic = this._logPeriodic;
    }
    if (this._maxDynamicEntryCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxDynamicEntryCount = this._maxDynamicEntryCount;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._classListOverflowPolicyList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.classListOverflowPolicyList = this._classListOverflowPolicyList?.internalValue;
    }
    if (this._samplingEnable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingEnable = this._samplingEnable?.internalValue;
    }
    if (this._zoneTemplate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneTemplate = this._zoneTemplate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstZonePortZoneServiceSrcBasedPolicyListPolicyClassListListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._classListName = undefined;
      this._glid = undefined;
      this._glidAction = undefined;
      this._logEnable = undefined;
      this._logPeriodic = undefined;
      this._maxDynamicEntryCount = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
      this._classListOverflowPolicyList.internalValue = undefined;
      this._samplingEnable.internalValue = undefined;
      this._zoneTemplate.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._classListName = value.classListName;
      this._glid = value.glid;
      this._glidAction = value.glidAction;
      this._logEnable = value.logEnable;
      this._logPeriodic = value.logPeriodic;
      this._maxDynamicEntryCount = value.maxDynamicEntryCount;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
      this._classListOverflowPolicyList.internalValue = value.classListOverflowPolicyList;
      this._samplingEnable.internalValue = value.samplingEnable;
      this._zoneTemplate.internalValue = value.zoneTemplate;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // class_list_name - computed: false, optional: false, required: true
  private _classListName?: string; 
  public get classListName() {
    return this.getStringAttribute('class_list_name');
  }
  public set classListName(value: string) {
    this._classListName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get classListNameInput() {
    return this._classListName;
  }

  // glid - computed: false, optional: true, required: false
  private _glid?: string; 
  public get glid() {
    return this.getStringAttribute('glid');
  }
  public set glid(value: string) {
    this._glid = value;
  }
  public resetGlid() {
    this._glid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get glidInput() {
    return this._glid;
  }

  // glid_action - computed: false, optional: true, required: false
  private _glidAction?: string; 
  public get glidAction() {
    return this.getStringAttribute('glid_action');
  }
  public set glidAction(value: string) {
    this._glidAction = value;
  }
  public resetGlidAction() {
    this._glidAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get glidActionInput() {
    return this._glidAction;
  }

  // log_enable - computed: false, optional: true, required: false
  private _logEnable?: number; 
  public get logEnable() {
    return this.getNumberAttribute('log_enable');
  }
  public set logEnable(value: number) {
    this._logEnable = value;
  }
  public resetLogEnable() {
    this._logEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logEnableInput() {
    return this._logEnable;
  }

  // log_periodic - computed: false, optional: true, required: false
  private _logPeriodic?: number; 
  public get logPeriodic() {
    return this.getNumberAttribute('log_periodic');
  }
  public set logPeriodic(value: number) {
    this._logPeriodic = value;
  }
  public resetLogPeriodic() {
    this._logPeriodic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logPeriodicInput() {
    return this._logPeriodic;
  }

  // max_dynamic_entry_count - computed: false, optional: true, required: false
  private _maxDynamicEntryCount?: number; 
  public get maxDynamicEntryCount() {
    return this.getNumberAttribute('max_dynamic_entry_count');
  }
  public set maxDynamicEntryCount(value: number) {
    this._maxDynamicEntryCount = value;
  }
  public resetMaxDynamicEntryCount() {
    this._maxDynamicEntryCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDynamicEntryCountInput() {
    return this._maxDynamicEntryCount;
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

  // class_list_overflow_policy_list - computed: false, optional: true, required: false
  private _classListOverflowPolicyList = new DdosDstZonePortZoneServiceSrcBasedPolicyListPolicyClassListListClassListOverflowPolicyListStructList(this, "class_list_overflow_policy_list", false);
  public get classListOverflowPolicyList() {
    return this._classListOverflowPolicyList;
  }
  public putClassListOverflowPolicyList(value: DdosDstZonePortZoneServiceSrcBasedPolicyListPolicyClassListListClassListOverflowPolicyListStruct[] | cdktf.IResolvable) {
    this._classListOverflowPolicyList.internalValue = value;
  }
  public resetClassListOverflowPolicyList() {
    this._classListOverflowPolicyList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classListOverflowPolicyListInput() {
    return this._classListOverflowPolicyList.internalValue;
  }

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new DdosDstZonePortZoneServiceSrcBasedPolicyListPolicyClassListListSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: DdosDstZonePortZoneServiceSrcBasedPolicyListPolicyClassListListSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }

  // zone_template - computed: false, optional: true, required: false
  private _zoneTemplate = new DdosDstZonePortZoneServiceSrcBasedPolicyListPolicyClassListListZoneTemplateOutputReference(this, "zone_template");
  public get zoneTemplate() {
    return this._zoneTemplate;
  }
  public putZoneTemplate(value: DdosDstZonePortZoneServiceSrcBasedPolicyListPolicyClassListListZoneTemplate) {
    this._zoneTemplate.internalValue = value;
  }
  public resetZoneTemplate() {
    this._zoneTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneTemplateInput() {
    return this._zoneTemplate.internalValue;
  }
}

export class DdosDstZonePortZoneServiceSrcBasedPolicyListPolicyClassListListStructList extends cdktf.ComplexList {
  public internalValue? : DdosDstZonePortZoneServiceSrcBasedPolicyListPolicyClassListListStruct[] | cdktf.IResolvable

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
  public get(index: number): DdosDstZonePortZoneServiceSrcBasedPolicyListPolicyClassListListStructOutputReference {
    return new DdosDstZonePortZoneServiceSrcBasedPolicyListPolicyClassListListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosDstZonePortZoneServiceSrcBasedPolicyListStruct {
  /**
  * Specify name of the policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#src_based_policy_name DdosDstZonePortZoneService#src_based_policy_name}
  */
  readonly srcBasedPolicyName: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#user_tag DdosDstZonePortZoneService#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#uuid DdosDstZonePortZoneService#uuid}
  */
  readonly uuid?: string;
  /**
  * policy_class_list_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#policy_class_list_list DdosDstZonePortZoneService#policy_class_list_list}
  */
  readonly policyClassListList?: DdosDstZonePortZoneServiceSrcBasedPolicyListPolicyClassListListStruct[] | cdktf.IResolvable;
}

export function ddosDstZonePortZoneServiceSrcBasedPolicyListStructToTerraform(struct?: DdosDstZonePortZoneServiceSrcBasedPolicyListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    src_based_policy_name: cdktf.stringToTerraform(struct!.srcBasedPolicyName),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    policy_class_list_list: cdktf.listMapper(ddosDstZonePortZoneServiceSrcBasedPolicyListPolicyClassListListStructToTerraform, true)(struct!.policyClassListList),
  }
}


export function ddosDstZonePortZoneServiceSrcBasedPolicyListStructToHclTerraform(struct?: DdosDstZonePortZoneServiceSrcBasedPolicyListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    src_based_policy_name: {
      value: cdktf.stringToHclTerraform(struct!.srcBasedPolicyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_tag: {
      value: cdktf.stringToHclTerraform(struct!.userTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policy_class_list_list: {
      value: cdktf.listMapperHcl(ddosDstZonePortZoneServiceSrcBasedPolicyListPolicyClassListListStructToHclTerraform, true)(struct!.policyClassListList),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstZonePortZoneServiceSrcBasedPolicyListPolicyClassListListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstZonePortZoneServiceSrcBasedPolicyListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosDstZonePortZoneServiceSrcBasedPolicyListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._srcBasedPolicyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcBasedPolicyName = this._srcBasedPolicyName;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._policyClassListList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyClassListList = this._policyClassListList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstZonePortZoneServiceSrcBasedPolicyListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._srcBasedPolicyName = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
      this._policyClassListList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._srcBasedPolicyName = value.srcBasedPolicyName;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
      this._policyClassListList.internalValue = value.policyClassListList;
    }
  }

  // src_based_policy_name - computed: false, optional: false, required: true
  private _srcBasedPolicyName?: string; 
  public get srcBasedPolicyName() {
    return this.getStringAttribute('src_based_policy_name');
  }
  public set srcBasedPolicyName(value: string) {
    this._srcBasedPolicyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get srcBasedPolicyNameInput() {
    return this._srcBasedPolicyName;
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

  // policy_class_list_list - computed: false, optional: true, required: false
  private _policyClassListList = new DdosDstZonePortZoneServiceSrcBasedPolicyListPolicyClassListListStructList(this, "policy_class_list_list", false);
  public get policyClassListList() {
    return this._policyClassListList;
  }
  public putPolicyClassListList(value: DdosDstZonePortZoneServiceSrcBasedPolicyListPolicyClassListListStruct[] | cdktf.IResolvable) {
    this._policyClassListList.internalValue = value;
  }
  public resetPolicyClassListList() {
    this._policyClassListList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyClassListListInput() {
    return this._policyClassListList.internalValue;
  }
}

export class DdosDstZonePortZoneServiceSrcBasedPolicyListStructList extends cdktf.ComplexList {
  public internalValue? : DdosDstZonePortZoneServiceSrcBasedPolicyListStruct[] | cdktf.IResolvable

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
  public get(index: number): DdosDstZonePortZoneServiceSrcBasedPolicyListStructOutputReference {
    return new DdosDstZonePortZoneServiceSrcBasedPolicyListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosDstZonePortZoneServiceTopkDestinations {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#uuid DdosDstZonePortZoneService#uuid}
  */
  readonly uuid?: string;
}

export function ddosDstZonePortZoneServiceTopkDestinationsToTerraform(struct?: DdosDstZonePortZoneServiceTopkDestinationsOutputReference | DdosDstZonePortZoneServiceTopkDestinations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function ddosDstZonePortZoneServiceTopkDestinationsToHclTerraform(struct?: DdosDstZonePortZoneServiceTopkDestinationsOutputReference | DdosDstZonePortZoneServiceTopkDestinations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class DdosDstZonePortZoneServiceTopkDestinationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstZonePortZoneServiceTopkDestinations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstZonePortZoneServiceTopkDestinations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
    }
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
export interface DdosDstZonePortZoneServiceTopkSources {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#uuid DdosDstZonePortZoneService#uuid}
  */
  readonly uuid?: string;
}

export function ddosDstZonePortZoneServiceTopkSourcesToTerraform(struct?: DdosDstZonePortZoneServiceTopkSourcesOutputReference | DdosDstZonePortZoneServiceTopkSources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function ddosDstZonePortZoneServiceTopkSourcesToHclTerraform(struct?: DdosDstZonePortZoneServiceTopkSourcesOutputReference | DdosDstZonePortZoneServiceTopkSources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class DdosDstZonePortZoneServiceTopkSourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstZonePortZoneServiceTopkSources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstZonePortZoneServiceTopkSources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
    }
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
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service thunder_ddos_dst_zone_port_zone_service}
*/
export class DdosDstZonePortZoneService extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_dst_zone_port_zone_service";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DdosDstZonePortZoneService resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DdosDstZonePortZoneService to import
  * @param importFromId The id of the existing DdosDstZonePortZoneService that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DdosDstZonePortZoneService to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_dst_zone_port_zone_service", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service thunder_ddos_dst_zone_port_zone_service} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DdosDstZonePortZoneServiceConfig
  */
  public constructor(scope: Construct, id: string, config: DdosDstZonePortZoneServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_dst_zone_port_zone_service',
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
    this._age = config.age;
    this._applyPolicyOnOverflow = config.applyPolicyOnOverflow;
    this._defaultActionList = config.defaultActionList;
    this._deny = config.deny;
    this._enableClassListOverflow = config.enableClassListOverflow;
    this._enableTopK = config.enableTopK;
    this._enableTopKDestination = config.enableTopKDestination;
    this._fasterDeEscalation = config.fasterDeEscalation;
    this._id = config.id;
    this._ipFilteringPolicy = config.ipFilteringPolicy;
    this._manualModeEnable = config.manualModeEnable;
    this._maxDynamicEntryCount = config.maxDynamicEntryCount;
    this._outboundOnly = config.outboundOnly;
    this._portNum = config.portNum;
    this._protocol = config.protocol;
    this._setCounterBaseVal = config.setCounterBaseVal;
    this._sflowCommon = config.sflowCommon;
    this._sflowHttp = config.sflowHttp;
    this._sflowPackets = config.sflowPackets;
    this._stateful = config.stateful;
    this._topkDstNumRecords = config.topkDstNumRecords;
    this._topkNumRecords = config.topkNumRecords;
    this._unlimitedDynamicEntryCount = config.unlimitedDynamicEntryCount;
    this._uuid = config.uuid;
    this._zoneName = config.zoneName;
    this._captureConfig.internalValue = config.captureConfig;
    this._dynamicEntryOverflowPolicyList.internalValue = config.dynamicEntryOverflowPolicyList;
    this._glidCfg.internalValue = config.glidCfg;
    this._ipFilteringPolicyOper.internalValue = config.ipFilteringPolicyOper;
    this._ips.internalValue = config.ips;
    this._levelList.internalValue = config.levelList;
    this._manualModeList.internalValue = config.manualModeList;
    this._patternRecognition.internalValue = config.patternRecognition;
    this._patternRecognitionPuDetails.internalValue = config.patternRecognitionPuDetails;
    this._portInd.internalValue = config.portInd;
    this._progressionTracking.internalValue = config.progressionTracking;
    this._sflowTcp.internalValue = config.sflowTcp;
    this._signatureExtraction.internalValue = config.signatureExtraction;
    this._srcBasedPolicyList.internalValue = config.srcBasedPolicyList;
    this._topkDestinations.internalValue = config.topkDestinations;
    this._topkSources.internalValue = config.topkSources;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // age - computed: false, optional: true, required: false
  private _age?: number; 
  public get age() {
    return this.getNumberAttribute('age');
  }
  public set age(value: number) {
    this._age = value;
  }
  public resetAge() {
    this._age = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ageInput() {
    return this._age;
  }

  // apply_policy_on_overflow - computed: false, optional: true, required: false
  private _applyPolicyOnOverflow?: number; 
  public get applyPolicyOnOverflow() {
    return this.getNumberAttribute('apply_policy_on_overflow');
  }
  public set applyPolicyOnOverflow(value: number) {
    this._applyPolicyOnOverflow = value;
  }
  public resetApplyPolicyOnOverflow() {
    this._applyPolicyOnOverflow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applyPolicyOnOverflowInput() {
    return this._applyPolicyOnOverflow;
  }

  // default_action_list - computed: false, optional: true, required: false
  private _defaultActionList?: string; 
  public get defaultActionList() {
    return this.getStringAttribute('default_action_list');
  }
  public set defaultActionList(value: string) {
    this._defaultActionList = value;
  }
  public resetDefaultActionList() {
    this._defaultActionList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultActionListInput() {
    return this._defaultActionList;
  }

  // deny - computed: false, optional: true, required: false
  private _deny?: number; 
  public get deny() {
    return this.getNumberAttribute('deny');
  }
  public set deny(value: number) {
    this._deny = value;
  }
  public resetDeny() {
    this._deny = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyInput() {
    return this._deny;
  }

  // enable_class_list_overflow - computed: false, optional: true, required: false
  private _enableClassListOverflow?: number; 
  public get enableClassListOverflow() {
    return this.getNumberAttribute('enable_class_list_overflow');
  }
  public set enableClassListOverflow(value: number) {
    this._enableClassListOverflow = value;
  }
  public resetEnableClassListOverflow() {
    this._enableClassListOverflow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableClassListOverflowInput() {
    return this._enableClassListOverflow;
  }

  // enable_top_k - computed: false, optional: true, required: false
  private _enableTopK?: number; 
  public get enableTopK() {
    return this.getNumberAttribute('enable_top_k');
  }
  public set enableTopK(value: number) {
    this._enableTopK = value;
  }
  public resetEnableTopK() {
    this._enableTopK = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTopKInput() {
    return this._enableTopK;
  }

  // enable_top_k_destination - computed: false, optional: true, required: false
  private _enableTopKDestination?: number; 
  public get enableTopKDestination() {
    return this.getNumberAttribute('enable_top_k_destination');
  }
  public set enableTopKDestination(value: number) {
    this._enableTopKDestination = value;
  }
  public resetEnableTopKDestination() {
    this._enableTopKDestination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTopKDestinationInput() {
    return this._enableTopKDestination;
  }

  // faster_de_escalation - computed: false, optional: true, required: false
  private _fasterDeEscalation?: number; 
  public get fasterDeEscalation() {
    return this.getNumberAttribute('faster_de_escalation');
  }
  public set fasterDeEscalation(value: number) {
    this._fasterDeEscalation = value;
  }
  public resetFasterDeEscalation() {
    this._fasterDeEscalation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fasterDeEscalationInput() {
    return this._fasterDeEscalation;
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

  // ip_filtering_policy - computed: false, optional: true, required: false
  private _ipFilteringPolicy?: string; 
  public get ipFilteringPolicy() {
    return this.getStringAttribute('ip_filtering_policy');
  }
  public set ipFilteringPolicy(value: string) {
    this._ipFilteringPolicy = value;
  }
  public resetIpFilteringPolicy() {
    this._ipFilteringPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipFilteringPolicyInput() {
    return this._ipFilteringPolicy;
  }

  // manual_mode_enable - computed: false, optional: true, required: false
  private _manualModeEnable?: number; 
  public get manualModeEnable() {
    return this.getNumberAttribute('manual_mode_enable');
  }
  public set manualModeEnable(value: number) {
    this._manualModeEnable = value;
  }
  public resetManualModeEnable() {
    this._manualModeEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manualModeEnableInput() {
    return this._manualModeEnable;
  }

  // max_dynamic_entry_count - computed: false, optional: true, required: false
  private _maxDynamicEntryCount?: number; 
  public get maxDynamicEntryCount() {
    return this.getNumberAttribute('max_dynamic_entry_count');
  }
  public set maxDynamicEntryCount(value: number) {
    this._maxDynamicEntryCount = value;
  }
  public resetMaxDynamicEntryCount() {
    this._maxDynamicEntryCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDynamicEntryCountInput() {
    return this._maxDynamicEntryCount;
  }

  // outbound_only - computed: false, optional: true, required: false
  private _outboundOnly?: number; 
  public get outboundOnly() {
    return this.getNumberAttribute('outbound_only');
  }
  public set outboundOnly(value: number) {
    this._outboundOnly = value;
  }
  public resetOutboundOnly() {
    this._outboundOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundOnlyInput() {
    return this._outboundOnly;
  }

  // port_num - computed: false, optional: false, required: true
  private _portNum?: number; 
  public get portNum() {
    return this.getNumberAttribute('port_num');
  }
  public set portNum(value: number) {
    this._portNum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portNumInput() {
    return this._portNum;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // set_counter_base_val - computed: false, optional: true, required: false
  private _setCounterBaseVal?: number; 
  public get setCounterBaseVal() {
    return this.getNumberAttribute('set_counter_base_val');
  }
  public set setCounterBaseVal(value: number) {
    this._setCounterBaseVal = value;
  }
  public resetSetCounterBaseVal() {
    this._setCounterBaseVal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setCounterBaseValInput() {
    return this._setCounterBaseVal;
  }

  // sflow_common - computed: false, optional: true, required: false
  private _sflowCommon?: number; 
  public get sflowCommon() {
    return this.getNumberAttribute('sflow_common');
  }
  public set sflowCommon(value: number) {
    this._sflowCommon = value;
  }
  public resetSflowCommon() {
    this._sflowCommon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sflowCommonInput() {
    return this._sflowCommon;
  }

  // sflow_http - computed: false, optional: true, required: false
  private _sflowHttp?: number; 
  public get sflowHttp() {
    return this.getNumberAttribute('sflow_http');
  }
  public set sflowHttp(value: number) {
    this._sflowHttp = value;
  }
  public resetSflowHttp() {
    this._sflowHttp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sflowHttpInput() {
    return this._sflowHttp;
  }

  // sflow_packets - computed: false, optional: true, required: false
  private _sflowPackets?: number; 
  public get sflowPackets() {
    return this.getNumberAttribute('sflow_packets');
  }
  public set sflowPackets(value: number) {
    this._sflowPackets = value;
  }
  public resetSflowPackets() {
    this._sflowPackets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sflowPacketsInput() {
    return this._sflowPackets;
  }

  // stateful - computed: false, optional: true, required: false
  private _stateful?: number; 
  public get stateful() {
    return this.getNumberAttribute('stateful');
  }
  public set stateful(value: number) {
    this._stateful = value;
  }
  public resetStateful() {
    this._stateful = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statefulInput() {
    return this._stateful;
  }

  // topk_dst_num_records - computed: false, optional: true, required: false
  private _topkDstNumRecords?: number; 
  public get topkDstNumRecords() {
    return this.getNumberAttribute('topk_dst_num_records');
  }
  public set topkDstNumRecords(value: number) {
    this._topkDstNumRecords = value;
  }
  public resetTopkDstNumRecords() {
    this._topkDstNumRecords = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topkDstNumRecordsInput() {
    return this._topkDstNumRecords;
  }

  // topk_num_records - computed: false, optional: true, required: false
  private _topkNumRecords?: number; 
  public get topkNumRecords() {
    return this.getNumberAttribute('topk_num_records');
  }
  public set topkNumRecords(value: number) {
    this._topkNumRecords = value;
  }
  public resetTopkNumRecords() {
    this._topkNumRecords = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topkNumRecordsInput() {
    return this._topkNumRecords;
  }

  // unlimited_dynamic_entry_count - computed: false, optional: true, required: false
  private _unlimitedDynamicEntryCount?: number; 
  public get unlimitedDynamicEntryCount() {
    return this.getNumberAttribute('unlimited_dynamic_entry_count');
  }
  public set unlimitedDynamicEntryCount(value: number) {
    this._unlimitedDynamicEntryCount = value;
  }
  public resetUnlimitedDynamicEntryCount() {
    this._unlimitedDynamicEntryCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unlimitedDynamicEntryCountInput() {
    return this._unlimitedDynamicEntryCount;
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

  // zone_name - computed: false, optional: false, required: true
  private _zoneName?: string; 
  public get zoneName() {
    return this.getStringAttribute('zone_name');
  }
  public set zoneName(value: string) {
    this._zoneName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneNameInput() {
    return this._zoneName;
  }

  // capture_config - computed: false, optional: true, required: false
  private _captureConfig = new DdosDstZonePortZoneServiceCaptureConfigOutputReference(this, "capture_config");
  public get captureConfig() {
    return this._captureConfig;
  }
  public putCaptureConfig(value: DdosDstZonePortZoneServiceCaptureConfig) {
    this._captureConfig.internalValue = value;
  }
  public resetCaptureConfig() {
    this._captureConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captureConfigInput() {
    return this._captureConfig.internalValue;
  }

  // dynamic_entry_overflow_policy_list - computed: false, optional: true, required: false
  private _dynamicEntryOverflowPolicyList = new DdosDstZonePortZoneServiceDynamicEntryOverflowPolicyListStructList(this, "dynamic_entry_overflow_policy_list", false);
  public get dynamicEntryOverflowPolicyList() {
    return this._dynamicEntryOverflowPolicyList;
  }
  public putDynamicEntryOverflowPolicyList(value: DdosDstZonePortZoneServiceDynamicEntryOverflowPolicyListStruct[] | cdktf.IResolvable) {
    this._dynamicEntryOverflowPolicyList.internalValue = value;
  }
  public resetDynamicEntryOverflowPolicyList() {
    this._dynamicEntryOverflowPolicyList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicEntryOverflowPolicyListInput() {
    return this._dynamicEntryOverflowPolicyList.internalValue;
  }

  // glid_cfg - computed: false, optional: true, required: false
  private _glidCfg = new DdosDstZonePortZoneServiceGlidCfgOutputReference(this, "glid_cfg");
  public get glidCfg() {
    return this._glidCfg;
  }
  public putGlidCfg(value: DdosDstZonePortZoneServiceGlidCfg) {
    this._glidCfg.internalValue = value;
  }
  public resetGlidCfg() {
    this._glidCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get glidCfgInput() {
    return this._glidCfg.internalValue;
  }

  // ip_filtering_policy_oper - computed: false, optional: true, required: false
  private _ipFilteringPolicyOper = new DdosDstZonePortZoneServiceIpFilteringPolicyOperOutputReference(this, "ip_filtering_policy_oper");
  public get ipFilteringPolicyOper() {
    return this._ipFilteringPolicyOper;
  }
  public putIpFilteringPolicyOper(value: DdosDstZonePortZoneServiceIpFilteringPolicyOper) {
    this._ipFilteringPolicyOper.internalValue = value;
  }
  public resetIpFilteringPolicyOper() {
    this._ipFilteringPolicyOper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipFilteringPolicyOperInput() {
    return this._ipFilteringPolicyOper.internalValue;
  }

  // ips - computed: false, optional: true, required: false
  private _ips = new DdosDstZonePortZoneServiceIpsOutputReference(this, "ips");
  public get ips() {
    return this._ips;
  }
  public putIps(value: DdosDstZonePortZoneServiceIps) {
    this._ips.internalValue = value;
  }
  public resetIps() {
    this._ips.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsInput() {
    return this._ips.internalValue;
  }

  // level_list - computed: false, optional: true, required: false
  private _levelList = new DdosDstZonePortZoneServiceLevelListStructList(this, "level_list", false);
  public get levelList() {
    return this._levelList;
  }
  public putLevelList(value: DdosDstZonePortZoneServiceLevelListStruct[] | cdktf.IResolvable) {
    this._levelList.internalValue = value;
  }
  public resetLevelList() {
    this._levelList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelListInput() {
    return this._levelList.internalValue;
  }

  // manual_mode_list - computed: false, optional: true, required: false
  private _manualModeList = new DdosDstZonePortZoneServiceManualModeListStructList(this, "manual_mode_list", false);
  public get manualModeList() {
    return this._manualModeList;
  }
  public putManualModeList(value: DdosDstZonePortZoneServiceManualModeListStruct[] | cdktf.IResolvable) {
    this._manualModeList.internalValue = value;
  }
  public resetManualModeList() {
    this._manualModeList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manualModeListInput() {
    return this._manualModeList.internalValue;
  }

  // pattern_recognition - computed: false, optional: true, required: false
  private _patternRecognition = new DdosDstZonePortZoneServicePatternRecognitionOutputReference(this, "pattern_recognition");
  public get patternRecognition() {
    return this._patternRecognition;
  }
  public putPatternRecognition(value: DdosDstZonePortZoneServicePatternRecognition) {
    this._patternRecognition.internalValue = value;
  }
  public resetPatternRecognition() {
    this._patternRecognition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternRecognitionInput() {
    return this._patternRecognition.internalValue;
  }

  // pattern_recognition_pu_details - computed: false, optional: true, required: false
  private _patternRecognitionPuDetails = new DdosDstZonePortZoneServicePatternRecognitionPuDetailsOutputReference(this, "pattern_recognition_pu_details");
  public get patternRecognitionPuDetails() {
    return this._patternRecognitionPuDetails;
  }
  public putPatternRecognitionPuDetails(value: DdosDstZonePortZoneServicePatternRecognitionPuDetails) {
    this._patternRecognitionPuDetails.internalValue = value;
  }
  public resetPatternRecognitionPuDetails() {
    this._patternRecognitionPuDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternRecognitionPuDetailsInput() {
    return this._patternRecognitionPuDetails.internalValue;
  }

  // port_ind - computed: false, optional: true, required: false
  private _portInd = new DdosDstZonePortZoneServicePortIndOutputReference(this, "port_ind");
  public get portInd() {
    return this._portInd;
  }
  public putPortInd(value: DdosDstZonePortZoneServicePortInd) {
    this._portInd.internalValue = value;
  }
  public resetPortInd() {
    this._portInd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portIndInput() {
    return this._portInd.internalValue;
  }

  // progression_tracking - computed: false, optional: true, required: false
  private _progressionTracking = new DdosDstZonePortZoneServiceProgressionTrackingOutputReference(this, "progression_tracking");
  public get progressionTracking() {
    return this._progressionTracking;
  }
  public putProgressionTracking(value: DdosDstZonePortZoneServiceProgressionTracking) {
    this._progressionTracking.internalValue = value;
  }
  public resetProgressionTracking() {
    this._progressionTracking.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get progressionTrackingInput() {
    return this._progressionTracking.internalValue;
  }

  // sflow_tcp - computed: false, optional: true, required: false
  private _sflowTcp = new DdosDstZonePortZoneServiceSflowTcpOutputReference(this, "sflow_tcp");
  public get sflowTcp() {
    return this._sflowTcp;
  }
  public putSflowTcp(value: DdosDstZonePortZoneServiceSflowTcp) {
    this._sflowTcp.internalValue = value;
  }
  public resetSflowTcp() {
    this._sflowTcp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sflowTcpInput() {
    return this._sflowTcp.internalValue;
  }

  // signature_extraction - computed: false, optional: true, required: false
  private _signatureExtraction = new DdosDstZonePortZoneServiceSignatureExtractionOutputReference(this, "signature_extraction");
  public get signatureExtraction() {
    return this._signatureExtraction;
  }
  public putSignatureExtraction(value: DdosDstZonePortZoneServiceSignatureExtraction) {
    this._signatureExtraction.internalValue = value;
  }
  public resetSignatureExtraction() {
    this._signatureExtraction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signatureExtractionInput() {
    return this._signatureExtraction.internalValue;
  }

  // src_based_policy_list - computed: false, optional: true, required: false
  private _srcBasedPolicyList = new DdosDstZonePortZoneServiceSrcBasedPolicyListStructList(this, "src_based_policy_list", false);
  public get srcBasedPolicyList() {
    return this._srcBasedPolicyList;
  }
  public putSrcBasedPolicyList(value: DdosDstZonePortZoneServiceSrcBasedPolicyListStruct[] | cdktf.IResolvable) {
    this._srcBasedPolicyList.internalValue = value;
  }
  public resetSrcBasedPolicyList() {
    this._srcBasedPolicyList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcBasedPolicyListInput() {
    return this._srcBasedPolicyList.internalValue;
  }

  // topk_destinations - computed: false, optional: true, required: false
  private _topkDestinations = new DdosDstZonePortZoneServiceTopkDestinationsOutputReference(this, "topk_destinations");
  public get topkDestinations() {
    return this._topkDestinations;
  }
  public putTopkDestinations(value: DdosDstZonePortZoneServiceTopkDestinations) {
    this._topkDestinations.internalValue = value;
  }
  public resetTopkDestinations() {
    this._topkDestinations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topkDestinationsInput() {
    return this._topkDestinations.internalValue;
  }

  // topk_sources - computed: false, optional: true, required: false
  private _topkSources = new DdosDstZonePortZoneServiceTopkSourcesOutputReference(this, "topk_sources");
  public get topkSources() {
    return this._topkSources;
  }
  public putTopkSources(value: DdosDstZonePortZoneServiceTopkSources) {
    this._topkSources.internalValue = value;
  }
  public resetTopkSources() {
    this._topkSources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topkSourcesInput() {
    return this._topkSources.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      age: cdktf.numberToTerraform(this._age),
      apply_policy_on_overflow: cdktf.numberToTerraform(this._applyPolicyOnOverflow),
      default_action_list: cdktf.stringToTerraform(this._defaultActionList),
      deny: cdktf.numberToTerraform(this._deny),
      enable_class_list_overflow: cdktf.numberToTerraform(this._enableClassListOverflow),
      enable_top_k: cdktf.numberToTerraform(this._enableTopK),
      enable_top_k_destination: cdktf.numberToTerraform(this._enableTopKDestination),
      faster_de_escalation: cdktf.numberToTerraform(this._fasterDeEscalation),
      id: cdktf.stringToTerraform(this._id),
      ip_filtering_policy: cdktf.stringToTerraform(this._ipFilteringPolicy),
      manual_mode_enable: cdktf.numberToTerraform(this._manualModeEnable),
      max_dynamic_entry_count: cdktf.numberToTerraform(this._maxDynamicEntryCount),
      outbound_only: cdktf.numberToTerraform(this._outboundOnly),
      port_num: cdktf.numberToTerraform(this._portNum),
      protocol: cdktf.stringToTerraform(this._protocol),
      set_counter_base_val: cdktf.numberToTerraform(this._setCounterBaseVal),
      sflow_common: cdktf.numberToTerraform(this._sflowCommon),
      sflow_http: cdktf.numberToTerraform(this._sflowHttp),
      sflow_packets: cdktf.numberToTerraform(this._sflowPackets),
      stateful: cdktf.numberToTerraform(this._stateful),
      topk_dst_num_records: cdktf.numberToTerraform(this._topkDstNumRecords),
      topk_num_records: cdktf.numberToTerraform(this._topkNumRecords),
      unlimited_dynamic_entry_count: cdktf.numberToTerraform(this._unlimitedDynamicEntryCount),
      uuid: cdktf.stringToTerraform(this._uuid),
      zone_name: cdktf.stringToTerraform(this._zoneName),
      capture_config: ddosDstZonePortZoneServiceCaptureConfigToTerraform(this._captureConfig.internalValue),
      dynamic_entry_overflow_policy_list: cdktf.listMapper(ddosDstZonePortZoneServiceDynamicEntryOverflowPolicyListStructToTerraform, true)(this._dynamicEntryOverflowPolicyList.internalValue),
      glid_cfg: ddosDstZonePortZoneServiceGlidCfgToTerraform(this._glidCfg.internalValue),
      ip_filtering_policy_oper: ddosDstZonePortZoneServiceIpFilteringPolicyOperToTerraform(this._ipFilteringPolicyOper.internalValue),
      ips: ddosDstZonePortZoneServiceIpsToTerraform(this._ips.internalValue),
      level_list: cdktf.listMapper(ddosDstZonePortZoneServiceLevelListStructToTerraform, true)(this._levelList.internalValue),
      manual_mode_list: cdktf.listMapper(ddosDstZonePortZoneServiceManualModeListStructToTerraform, true)(this._manualModeList.internalValue),
      pattern_recognition: ddosDstZonePortZoneServicePatternRecognitionToTerraform(this._patternRecognition.internalValue),
      pattern_recognition_pu_details: ddosDstZonePortZoneServicePatternRecognitionPuDetailsToTerraform(this._patternRecognitionPuDetails.internalValue),
      port_ind: ddosDstZonePortZoneServicePortIndToTerraform(this._portInd.internalValue),
      progression_tracking: ddosDstZonePortZoneServiceProgressionTrackingToTerraform(this._progressionTracking.internalValue),
      sflow_tcp: ddosDstZonePortZoneServiceSflowTcpToTerraform(this._sflowTcp.internalValue),
      signature_extraction: ddosDstZonePortZoneServiceSignatureExtractionToTerraform(this._signatureExtraction.internalValue),
      src_based_policy_list: cdktf.listMapper(ddosDstZonePortZoneServiceSrcBasedPolicyListStructToTerraform, true)(this._srcBasedPolicyList.internalValue),
      topk_destinations: ddosDstZonePortZoneServiceTopkDestinationsToTerraform(this._topkDestinations.internalValue),
      topk_sources: ddosDstZonePortZoneServiceTopkSourcesToTerraform(this._topkSources.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      age: {
        value: cdktf.numberToHclTerraform(this._age),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      apply_policy_on_overflow: {
        value: cdktf.numberToHclTerraform(this._applyPolicyOnOverflow),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      default_action_list: {
        value: cdktf.stringToHclTerraform(this._defaultActionList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deny: {
        value: cdktf.numberToHclTerraform(this._deny),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enable_class_list_overflow: {
        value: cdktf.numberToHclTerraform(this._enableClassListOverflow),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enable_top_k: {
        value: cdktf.numberToHclTerraform(this._enableTopK),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enable_top_k_destination: {
        value: cdktf.numberToHclTerraform(this._enableTopKDestination),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      faster_de_escalation: {
        value: cdktf.numberToHclTerraform(this._fasterDeEscalation),
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
      ip_filtering_policy: {
        value: cdktf.stringToHclTerraform(this._ipFilteringPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      manual_mode_enable: {
        value: cdktf.numberToHclTerraform(this._manualModeEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_dynamic_entry_count: {
        value: cdktf.numberToHclTerraform(this._maxDynamicEntryCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      outbound_only: {
        value: cdktf.numberToHclTerraform(this._outboundOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      port_num: {
        value: cdktf.numberToHclTerraform(this._portNum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      set_counter_base_val: {
        value: cdktf.numberToHclTerraform(this._setCounterBaseVal),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sflow_common: {
        value: cdktf.numberToHclTerraform(this._sflowCommon),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sflow_http: {
        value: cdktf.numberToHclTerraform(this._sflowHttp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sflow_packets: {
        value: cdktf.numberToHclTerraform(this._sflowPackets),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      stateful: {
        value: cdktf.numberToHclTerraform(this._stateful),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      topk_dst_num_records: {
        value: cdktf.numberToHclTerraform(this._topkDstNumRecords),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      topk_num_records: {
        value: cdktf.numberToHclTerraform(this._topkNumRecords),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      unlimited_dynamic_entry_count: {
        value: cdktf.numberToHclTerraform(this._unlimitedDynamicEntryCount),
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
      zone_name: {
        value: cdktf.stringToHclTerraform(this._zoneName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      capture_config: {
        value: ddosDstZonePortZoneServiceCaptureConfigToHclTerraform(this._captureConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDstZonePortZoneServiceCaptureConfigList",
      },
      dynamic_entry_overflow_policy_list: {
        value: cdktf.listMapperHcl(ddosDstZonePortZoneServiceDynamicEntryOverflowPolicyListStructToHclTerraform, true)(this._dynamicEntryOverflowPolicyList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDstZonePortZoneServiceDynamicEntryOverflowPolicyListStructList",
      },
      glid_cfg: {
        value: ddosDstZonePortZoneServiceGlidCfgToHclTerraform(this._glidCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDstZonePortZoneServiceGlidCfgList",
      },
      ip_filtering_policy_oper: {
        value: ddosDstZonePortZoneServiceIpFilteringPolicyOperToHclTerraform(this._ipFilteringPolicyOper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDstZonePortZoneServiceIpFilteringPolicyOperList",
      },
      ips: {
        value: ddosDstZonePortZoneServiceIpsToHclTerraform(this._ips.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDstZonePortZoneServiceIpsList",
      },
      level_list: {
        value: cdktf.listMapperHcl(ddosDstZonePortZoneServiceLevelListStructToHclTerraform, true)(this._levelList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDstZonePortZoneServiceLevelListStructList",
      },
      manual_mode_list: {
        value: cdktf.listMapperHcl(ddosDstZonePortZoneServiceManualModeListStructToHclTerraform, true)(this._manualModeList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDstZonePortZoneServiceManualModeListStructList",
      },
      pattern_recognition: {
        value: ddosDstZonePortZoneServicePatternRecognitionToHclTerraform(this._patternRecognition.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDstZonePortZoneServicePatternRecognitionList",
      },
      pattern_recognition_pu_details: {
        value: ddosDstZonePortZoneServicePatternRecognitionPuDetailsToHclTerraform(this._patternRecognitionPuDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDstZonePortZoneServicePatternRecognitionPuDetailsList",
      },
      port_ind: {
        value: ddosDstZonePortZoneServicePortIndToHclTerraform(this._portInd.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDstZonePortZoneServicePortIndList",
      },
      progression_tracking: {
        value: ddosDstZonePortZoneServiceProgressionTrackingToHclTerraform(this._progressionTracking.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDstZonePortZoneServiceProgressionTrackingList",
      },
      sflow_tcp: {
        value: ddosDstZonePortZoneServiceSflowTcpToHclTerraform(this._sflowTcp.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDstZonePortZoneServiceSflowTcpList",
      },
      signature_extraction: {
        value: ddosDstZonePortZoneServiceSignatureExtractionToHclTerraform(this._signatureExtraction.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDstZonePortZoneServiceSignatureExtractionList",
      },
      src_based_policy_list: {
        value: cdktf.listMapperHcl(ddosDstZonePortZoneServiceSrcBasedPolicyListStructToHclTerraform, true)(this._srcBasedPolicyList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDstZonePortZoneServiceSrcBasedPolicyListStructList",
      },
      topk_destinations: {
        value: ddosDstZonePortZoneServiceTopkDestinationsToHclTerraform(this._topkDestinations.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDstZonePortZoneServiceTopkDestinationsList",
      },
      topk_sources: {
        value: ddosDstZonePortZoneServiceTopkSourcesToHclTerraform(this._topkSources.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDstZonePortZoneServiceTopkSourcesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
