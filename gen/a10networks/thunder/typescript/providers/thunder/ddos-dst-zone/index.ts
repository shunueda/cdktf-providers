// generated from terraform resource schema

import { DdosDstZoneCaptureConfigListStruct, 
ddosDstZoneCaptureConfigListStructToTerraform, 
ddosDstZoneCaptureConfigListStructToHclTerraform, 
DdosDstZoneCaptureConfigListStructList, 
DdosDstZoneCollector, 
ddosDstZoneCollectorToTerraform, 
ddosDstZoneCollectorToHclTerraform, 
DdosDstZoneCollectorList, 
DdosDstZoneDetection, 
ddosDstZoneDetectionToTerraform, 
ddosDstZoneDetectionToHclTerraform, 
DdosDstZoneDetectionOutputReference, 
DdosDstZoneEnableTopK, 
ddosDstZoneEnableTopKToTerraform, 
ddosDstZoneEnableTopKToHclTerraform, 
DdosDstZoneEnableTopKList, 
DdosDstZoneHwBlacklistBlocking, 
ddosDstZoneHwBlacklistBlockingToTerraform, 
ddosDstZoneHwBlacklistBlockingToHclTerraform, 
DdosDstZoneHwBlacklistBlockingOutputReference, 
DdosDstZoneIp, 
ddosDstZoneIpToTerraform, 
ddosDstZoneIpToHclTerraform, 
DdosDstZoneIpList, 
DdosDstZoneIpProto, 
ddosDstZoneIpProtoToTerraform, 
ddosDstZoneIpProtoToHclTerraform, 
DdosDstZoneIpProtoOutputReference, 
DdosDstZoneIpv6, 
ddosDstZoneIpv6ToTerraform, 
ddosDstZoneIpv6ToHclTerraform, 
DdosDstZoneIpv6List, 
DdosDstZoneOutboundPolicy, 
ddosDstZoneOutboundPolicyToTerraform, 
ddosDstZoneOutboundPolicyToHclTerraform, 
DdosDstZoneOutboundPolicyOutputReference, 
DdosDstZonePacketAnomalyDetection, 
ddosDstZonePacketAnomalyDetectionToTerraform, 
ddosDstZonePacketAnomalyDetectionToHclTerraform, 
DdosDstZonePacketAnomalyDetectionOutputReference, 
DdosDstZonePort, 
ddosDstZonePortToTerraform, 
ddosDstZonePortToHclTerraform, 
DdosDstZonePortOutputReference, 
DdosDstZonePortRangeListStruct, 
ddosDstZonePortRangeListStructToTerraform, 
ddosDstZonePortRangeListStructToHclTerraform, 
DdosDstZonePortRangeListStructList, 
DdosDstZoneSamplingEnable, 
ddosDstZoneSamplingEnableToTerraform, 
ddosDstZoneSamplingEnableToHclTerraform, 
DdosDstZoneSamplingEnableList, 
DdosDstZoneSflowTcp, 
ddosDstZoneSflowTcpToTerraform, 
ddosDstZoneSflowTcpToHclTerraform, 
DdosDstZoneSflowTcpOutputReference, 
DdosDstZoneSrcPort, 
ddosDstZoneSrcPortToTerraform, 
ddosDstZoneSrcPortToHclTerraform, 
DdosDstZoneSrcPortOutputReference, 
DdosDstZoneSrcPortRangeListStruct, 
ddosDstZoneSrcPortRangeListStructToTerraform, 
ddosDstZoneSrcPortRangeListStructToHclTerraform, 
DdosDstZoneSrcPortRangeListStructList, 
DdosDstZoneTopkDestinations, 
ddosDstZoneTopkDestinationsToTerraform, 
ddosDstZoneTopkDestinationsToHclTerraform, 
DdosDstZoneTopkDestinationsOutputReference, 
DdosDstZoneWebGui, 
ddosDstZoneWebGuiToTerraform, 
ddosDstZoneWebGuiToHclTerraform, 
DdosDstZoneWebGuiOutputReference, 
DdosDstZoneZoneTemplate, 
ddosDstZoneZoneTemplateToTerraform, 
ddosDstZoneZoneTemplateToHclTerraform, 
DdosDstZoneZoneTemplateOutputReference} from './index-structs'
export * from './index-structs'
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DdosDstZoneConfig extends cdktf.TerraformMetaArguments {
  /**
  * Configure action-list to take
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone#action_list DdosDstZone#action_list}
  */
  readonly actionList?: string;
  /**
  * BGP advertised
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone#advertised_enable DdosDstZone#advertised_enable}
  */
  readonly advertisedEnable?: number;
  /**
  * Continuous learning of detection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone#continuous_learning DdosDstZone#continuous_learning}
  */
  readonly continuousLearning?: number;
  /**
  * Description for this Destination Zone
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone#description DdosDstZone#description}
  */
  readonly description?: string;
  /**
  * Destination NAT IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone#dest_nat_ip DdosDstZone#dest_nat_ip}
  */
  readonly destNatIp?: string;
  /**
  * Destination NAT IPv6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone#dest_nat_ipv6 DdosDstZone#dest_nat_ipv6}
  */
  readonly destNatIpv6?: string;
  /**
  * Drop fragmented packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone#drop_frag_pkt DdosDstZone#drop_frag_pkt}
  */
  readonly dropFragPkt?: number;
  /**
  * Force configure operational mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone#force_operational_mode DdosDstZone#force_operational_mode}
  */
  readonly forceOperationalMode?: number;
  /**
  * Global limit ID for the whole zone
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone#glid DdosDstZone#glid}
  */
  readonly glid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone#id DdosDstZone#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * To set dscp value for inbound packets (DSCP Value for the clear traffic marking)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone#inbound_forward_dscp DdosDstZone#inbound_forward_dscp}
  */
  readonly inboundForwardDscp?: number;
  /**
  * Is It Created from Onbox GUI Wizard
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone#is_from_wizard DdosDstZone#is_from_wizard}
  */
  readonly isFromWizard?: number;
  /**
  * Enable logging
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone#log_enable DdosDstZone#log_enable}
  */
  readonly logEnable?: number;
  /**
  * Enable High frequency logging for non-event logs per zone
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone#log_high_frequency DdosDstZone#log_high_frequency}
  */
  readonly logHighFrequency?: number;
  /**
  * Enable log periodic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone#log_periodic DdosDstZone#log_periodic}
  */
  readonly logPeriodic?: number;
  /**
  * Non-restrictive mode ignores Zero Thresholds Indicators
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone#non_restrictive DdosDstZone#non_restrictive}
  */
  readonly nonRestrictive?: number;
  /**
  * 'idle': Idle mode; 'monitor': Monitor mode; 'learning': Learning mode;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone#operational_mode DdosDstZone#operational_mode}
  */
  readonly operationalMode?: string;
  /**
  * To set dscp value for outbound
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone#outbound_forward_dscp DdosDstZone#outbound_forward_dscp}
  */
  readonly outboundForwardDscp?: number;
  /**
  * to enable pattern recognition hardware filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone#pattern_recognition_hw_filter_enable DdosDstZone#pattern_recognition_hw_filter_enable}
  */
  readonly patternRecognitionHwFilterEnable?: number;
  /**
  * 'high': High sensitive pattern recognition; 'medium': Medium sensitive pattern recognition; 'low': Low sensitive pattern recognition;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone#pattern_recognition_sensitivity DdosDstZone#pattern_recognition_sensitivity}
  */
  readonly patternRecognitionSensitivity?: string;
  /**
  * Global limit ID per address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone#per_addr_glid DdosDstZone#per_addr_glid}
  */
  readonly perAddrGlid?: string;
  /**
  * Rate limit per second per zone(Default : 1 per second)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone#rate_limit DdosDstZone#rate_limit}
  */
  readonly rateLimit?: number;
  /**
  * Disable Reporting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone#reporting_disabled DdosDstZone#reporting_disabled}
  */
  readonly reportingDisabled?: number;
  /**
  * Set T2 counter value of current context to specified value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone#set_counter_base_val DdosDstZone#set_counter_base_val}
  */
  readonly setCounterBaseVal?: number;
  /**
  * Enable sFlow counter polling packets, tcp-basic, tcp-stateful and http. WARNING: May induce heavy CPU load.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone#sflow_common DdosDstZone#sflow_common}
  */
  readonly sflowCommon?: number;
  /**
  * Enable sFlow HTTP counter polling. WARNING: May induce heavy CPU load.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone#sflow_http DdosDstZone#sflow_http}
  */
  readonly sflowHttp?: number;
  /**
  * Enable sFlow Layer 4 counter polling. WARNING: May induce heavy CPU load.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone#sflow_layer_4 DdosDstZone#sflow_layer_4}
  */
  readonly sflowLayer4?: number;
  /**
  * Enable sFlow packet-level counter polling. WARNING: May induce heavy CPU load.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone#sflow_packets DdosDstZone#sflow_packets}
  */
  readonly sflowPackets?: number;
  /**
  * Configure source NAT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone#source_nat_pool DdosDstZone#source_nat_pool}
  */
  readonly sourceNatPool?: string;
  /**
  * Specify src prefix length for IPv6 (default: not set)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone#src_prefix_len DdosDstZone#src_prefix_len}
  */
  readonly srcPrefixLen?: number;
  /**
  * Enable from-l3-peer flag for the zone, thus all the ip entries in the zone will be dynamically created/deleted based on the BGP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone#telemetry_enable DdosDstZone#telemetry_enable}
  */
  readonly telemetryEnable?: number;
  /**
  * tune threshold ranges with levels LOW/MEDIUM/HIGH/OFF(default) or multiplier of threshold value (available options are LOW=5x/MEDIUM=3x/HIGH=1.5x/OFF=1x, or float value between 1.0-10.0)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone#threshold_sensitivity DdosDstZone#threshold_sensitivity}
  */
  readonly thresholdSensitivity?: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone#user_tag DdosDstZone#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone#uuid DdosDstZone#uuid}
  */
  readonly uuid?: string;
  /**
  * Migrate zone to opposite PU
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone#zone_migrate_to_opposite DdosDstZone#zone_migrate_to_opposite}
  */
  readonly zoneMigrateToOpposite?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone#zone_name DdosDstZone#zone_name}
  */
  readonly zoneName: string;
  /**
  * Apply threshold profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone#zone_profile DdosDstZone#zone_profile}
  */
  readonly zoneProfile?: string;
  /**
  * capture_config_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone#capture_config_list DdosDstZone#capture_config_list}
  */
  readonly captureConfigList?: DdosDstZoneCaptureConfigListStruct[] | cdktf.IResolvable;
  /**
  * collector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone#collector DdosDstZone#collector}
  */
  readonly collector?: DdosDstZoneCollector[] | cdktf.IResolvable;
  /**
  * detection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone#detection DdosDstZone#detection}
  */
  readonly detection?: DdosDstZoneDetection;
  /**
  * enable_top_k block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone#enable_top_k DdosDstZone#enable_top_k}
  */
  readonly enableTopK?: DdosDstZoneEnableTopK[] | cdktf.IResolvable;
  /**
  * hw_blacklist_blocking block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone#hw_blacklist_blocking DdosDstZone#hw_blacklist_blocking}
  */
  readonly hwBlacklistBlocking?: DdosDstZoneHwBlacklistBlocking;
  /**
  * ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone#ip DdosDstZone#ip}
  */
  readonly ip?: DdosDstZoneIp[] | cdktf.IResolvable;
  /**
  * ip_proto block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone#ip_proto DdosDstZone#ip_proto}
  */
  readonly ipProto?: DdosDstZoneIpProto;
  /**
  * ipv6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone#ipv6 DdosDstZone#ipv6}
  */
  readonly ipv6?: DdosDstZoneIpv6[] | cdktf.IResolvable;
  /**
  * outbound_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone#outbound_policy DdosDstZone#outbound_policy}
  */
  readonly outboundPolicy?: DdosDstZoneOutboundPolicy;
  /**
  * packet_anomaly_detection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone#packet_anomaly_detection DdosDstZone#packet_anomaly_detection}
  */
  readonly packetAnomalyDetection?: DdosDstZonePacketAnomalyDetection;
  /**
  * port block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone#port DdosDstZone#port}
  */
  readonly port?: DdosDstZonePort;
  /**
  * port_range_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone#port_range_list DdosDstZone#port_range_list}
  */
  readonly portRangeList?: DdosDstZonePortRangeListStruct[] | cdktf.IResolvable;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone#sampling_enable DdosDstZone#sampling_enable}
  */
  readonly samplingEnable?: DdosDstZoneSamplingEnable[] | cdktf.IResolvable;
  /**
  * sflow_tcp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone#sflow_tcp DdosDstZone#sflow_tcp}
  */
  readonly sflowTcp?: DdosDstZoneSflowTcp;
  /**
  * src_port block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone#src_port DdosDstZone#src_port}
  */
  readonly srcPort?: DdosDstZoneSrcPort;
  /**
  * src_port_range_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone#src_port_range_list DdosDstZone#src_port_range_list}
  */
  readonly srcPortRangeList?: DdosDstZoneSrcPortRangeListStruct[] | cdktf.IResolvable;
  /**
  * topk_destinations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone#topk_destinations DdosDstZone#topk_destinations}
  */
  readonly topkDestinations?: DdosDstZoneTopkDestinations;
  /**
  * web_gui block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone#web_gui DdosDstZone#web_gui}
  */
  readonly webGui?: DdosDstZoneWebGui;
  /**
  * zone_template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone#zone_template DdosDstZone#zone_template}
  */
  readonly zoneTemplate?: DdosDstZoneZoneTemplate;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone thunder_ddos_dst_zone}
*/
export class DdosDstZone extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_dst_zone";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DdosDstZone resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DdosDstZone to import
  * @param importFromId The id of the existing DdosDstZone that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DdosDstZone to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_dst_zone", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone thunder_ddos_dst_zone} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DdosDstZoneConfig
  */
  public constructor(scope: Construct, id: string, config: DdosDstZoneConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_dst_zone',
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
    this._actionList = config.actionList;
    this._advertisedEnable = config.advertisedEnable;
    this._continuousLearning = config.continuousLearning;
    this._description = config.description;
    this._destNatIp = config.destNatIp;
    this._destNatIpv6 = config.destNatIpv6;
    this._dropFragPkt = config.dropFragPkt;
    this._forceOperationalMode = config.forceOperationalMode;
    this._glid = config.glid;
    this._id = config.id;
    this._inboundForwardDscp = config.inboundForwardDscp;
    this._isFromWizard = config.isFromWizard;
    this._logEnable = config.logEnable;
    this._logHighFrequency = config.logHighFrequency;
    this._logPeriodic = config.logPeriodic;
    this._nonRestrictive = config.nonRestrictive;
    this._operationalMode = config.operationalMode;
    this._outboundForwardDscp = config.outboundForwardDscp;
    this._patternRecognitionHwFilterEnable = config.patternRecognitionHwFilterEnable;
    this._patternRecognitionSensitivity = config.patternRecognitionSensitivity;
    this._perAddrGlid = config.perAddrGlid;
    this._rateLimit = config.rateLimit;
    this._reportingDisabled = config.reportingDisabled;
    this._setCounterBaseVal = config.setCounterBaseVal;
    this._sflowCommon = config.sflowCommon;
    this._sflowHttp = config.sflowHttp;
    this._sflowLayer4 = config.sflowLayer4;
    this._sflowPackets = config.sflowPackets;
    this._sourceNatPool = config.sourceNatPool;
    this._srcPrefixLen = config.srcPrefixLen;
    this._telemetryEnable = config.telemetryEnable;
    this._thresholdSensitivity = config.thresholdSensitivity;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._zoneMigrateToOpposite = config.zoneMigrateToOpposite;
    this._zoneName = config.zoneName;
    this._zoneProfile = config.zoneProfile;
    this._captureConfigList.internalValue = config.captureConfigList;
    this._collector.internalValue = config.collector;
    this._detection.internalValue = config.detection;
    this._enableTopK.internalValue = config.enableTopK;
    this._hwBlacklistBlocking.internalValue = config.hwBlacklistBlocking;
    this._ip.internalValue = config.ip;
    this._ipProto.internalValue = config.ipProto;
    this._ipv6.internalValue = config.ipv6;
    this._outboundPolicy.internalValue = config.outboundPolicy;
    this._packetAnomalyDetection.internalValue = config.packetAnomalyDetection;
    this._port.internalValue = config.port;
    this._portRangeList.internalValue = config.portRangeList;
    this._samplingEnable.internalValue = config.samplingEnable;
    this._sflowTcp.internalValue = config.sflowTcp;
    this._srcPort.internalValue = config.srcPort;
    this._srcPortRangeList.internalValue = config.srcPortRangeList;
    this._topkDestinations.internalValue = config.topkDestinations;
    this._webGui.internalValue = config.webGui;
    this._zoneTemplate.internalValue = config.zoneTemplate;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // advertised_enable - computed: false, optional: true, required: false
  private _advertisedEnable?: number; 
  public get advertisedEnable() {
    return this.getNumberAttribute('advertised_enable');
  }
  public set advertisedEnable(value: number) {
    this._advertisedEnable = value;
  }
  public resetAdvertisedEnable() {
    this._advertisedEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertisedEnableInput() {
    return this._advertisedEnable;
  }

  // continuous_learning - computed: false, optional: true, required: false
  private _continuousLearning?: number; 
  public get continuousLearning() {
    return this.getNumberAttribute('continuous_learning');
  }
  public set continuousLearning(value: number) {
    this._continuousLearning = value;
  }
  public resetContinuousLearning() {
    this._continuousLearning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get continuousLearningInput() {
    return this._continuousLearning;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // dest_nat_ip - computed: false, optional: true, required: false
  private _destNatIp?: string; 
  public get destNatIp() {
    return this.getStringAttribute('dest_nat_ip');
  }
  public set destNatIp(value: string) {
    this._destNatIp = value;
  }
  public resetDestNatIp() {
    this._destNatIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destNatIpInput() {
    return this._destNatIp;
  }

  // dest_nat_ipv6 - computed: false, optional: true, required: false
  private _destNatIpv6?: string; 
  public get destNatIpv6() {
    return this.getStringAttribute('dest_nat_ipv6');
  }
  public set destNatIpv6(value: string) {
    this._destNatIpv6 = value;
  }
  public resetDestNatIpv6() {
    this._destNatIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destNatIpv6Input() {
    return this._destNatIpv6;
  }

  // drop_frag_pkt - computed: false, optional: true, required: false
  private _dropFragPkt?: number; 
  public get dropFragPkt() {
    return this.getNumberAttribute('drop_frag_pkt');
  }
  public set dropFragPkt(value: number) {
    this._dropFragPkt = value;
  }
  public resetDropFragPkt() {
    this._dropFragPkt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropFragPktInput() {
    return this._dropFragPkt;
  }

  // force_operational_mode - computed: false, optional: true, required: false
  private _forceOperationalMode?: number; 
  public get forceOperationalMode() {
    return this.getNumberAttribute('force_operational_mode');
  }
  public set forceOperationalMode(value: number) {
    this._forceOperationalMode = value;
  }
  public resetForceOperationalMode() {
    this._forceOperationalMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceOperationalModeInput() {
    return this._forceOperationalMode;
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

  // inbound_forward_dscp - computed: false, optional: true, required: false
  private _inboundForwardDscp?: number; 
  public get inboundForwardDscp() {
    return this.getNumberAttribute('inbound_forward_dscp');
  }
  public set inboundForwardDscp(value: number) {
    this._inboundForwardDscp = value;
  }
  public resetInboundForwardDscp() {
    this._inboundForwardDscp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundForwardDscpInput() {
    return this._inboundForwardDscp;
  }

  // is_from_wizard - computed: false, optional: true, required: false
  private _isFromWizard?: number; 
  public get isFromWizard() {
    return this.getNumberAttribute('is_from_wizard');
  }
  public set isFromWizard(value: number) {
    this._isFromWizard = value;
  }
  public resetIsFromWizard() {
    this._isFromWizard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isFromWizardInput() {
    return this._isFromWizard;
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

  // log_high_frequency - computed: false, optional: true, required: false
  private _logHighFrequency?: number; 
  public get logHighFrequency() {
    return this.getNumberAttribute('log_high_frequency');
  }
  public set logHighFrequency(value: number) {
    this._logHighFrequency = value;
  }
  public resetLogHighFrequency() {
    this._logHighFrequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logHighFrequencyInput() {
    return this._logHighFrequency;
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

  // non_restrictive - computed: false, optional: true, required: false
  private _nonRestrictive?: number; 
  public get nonRestrictive() {
    return this.getNumberAttribute('non_restrictive');
  }
  public set nonRestrictive(value: number) {
    this._nonRestrictive = value;
  }
  public resetNonRestrictive() {
    this._nonRestrictive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonRestrictiveInput() {
    return this._nonRestrictive;
  }

  // operational_mode - computed: false, optional: true, required: false
  private _operationalMode?: string; 
  public get operationalMode() {
    return this.getStringAttribute('operational_mode');
  }
  public set operationalMode(value: string) {
    this._operationalMode = value;
  }
  public resetOperationalMode() {
    this._operationalMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationalModeInput() {
    return this._operationalMode;
  }

  // outbound_forward_dscp - computed: false, optional: true, required: false
  private _outboundForwardDscp?: number; 
  public get outboundForwardDscp() {
    return this.getNumberAttribute('outbound_forward_dscp');
  }
  public set outboundForwardDscp(value: number) {
    this._outboundForwardDscp = value;
  }
  public resetOutboundForwardDscp() {
    this._outboundForwardDscp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundForwardDscpInput() {
    return this._outboundForwardDscp;
  }

  // pattern_recognition_hw_filter_enable - computed: false, optional: true, required: false
  private _patternRecognitionHwFilterEnable?: number; 
  public get patternRecognitionHwFilterEnable() {
    return this.getNumberAttribute('pattern_recognition_hw_filter_enable');
  }
  public set patternRecognitionHwFilterEnable(value: number) {
    this._patternRecognitionHwFilterEnable = value;
  }
  public resetPatternRecognitionHwFilterEnable() {
    this._patternRecognitionHwFilterEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternRecognitionHwFilterEnableInput() {
    return this._patternRecognitionHwFilterEnable;
  }

  // pattern_recognition_sensitivity - computed: false, optional: true, required: false
  private _patternRecognitionSensitivity?: string; 
  public get patternRecognitionSensitivity() {
    return this.getStringAttribute('pattern_recognition_sensitivity');
  }
  public set patternRecognitionSensitivity(value: string) {
    this._patternRecognitionSensitivity = value;
  }
  public resetPatternRecognitionSensitivity() {
    this._patternRecognitionSensitivity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternRecognitionSensitivityInput() {
    return this._patternRecognitionSensitivity;
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

  // rate_limit - computed: false, optional: true, required: false
  private _rateLimit?: number; 
  public get rateLimit() {
    return this.getNumberAttribute('rate_limit');
  }
  public set rateLimit(value: number) {
    this._rateLimit = value;
  }
  public resetRateLimit() {
    this._rateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitInput() {
    return this._rateLimit;
  }

  // reporting_disabled - computed: false, optional: true, required: false
  private _reportingDisabled?: number; 
  public get reportingDisabled() {
    return this.getNumberAttribute('reporting_disabled');
  }
  public set reportingDisabled(value: number) {
    this._reportingDisabled = value;
  }
  public resetReportingDisabled() {
    this._reportingDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reportingDisabledInput() {
    return this._reportingDisabled;
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

  // sflow_layer_4 - computed: false, optional: true, required: false
  private _sflowLayer4?: number; 
  public get sflowLayer4() {
    return this.getNumberAttribute('sflow_layer_4');
  }
  public set sflowLayer4(value: number) {
    this._sflowLayer4 = value;
  }
  public resetSflowLayer4() {
    this._sflowLayer4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sflowLayer4Input() {
    return this._sflowLayer4;
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

  // source_nat_pool - computed: false, optional: true, required: false
  private _sourceNatPool?: string; 
  public get sourceNatPool() {
    return this.getStringAttribute('source_nat_pool');
  }
  public set sourceNatPool(value: string) {
    this._sourceNatPool = value;
  }
  public resetSourceNatPool() {
    this._sourceNatPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceNatPoolInput() {
    return this._sourceNatPool;
  }

  // src_prefix_len - computed: false, optional: true, required: false
  private _srcPrefixLen?: number; 
  public get srcPrefixLen() {
    return this.getNumberAttribute('src_prefix_len');
  }
  public set srcPrefixLen(value: number) {
    this._srcPrefixLen = value;
  }
  public resetSrcPrefixLen() {
    this._srcPrefixLen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcPrefixLenInput() {
    return this._srcPrefixLen;
  }

  // telemetry_enable - computed: false, optional: true, required: false
  private _telemetryEnable?: number; 
  public get telemetryEnable() {
    return this.getNumberAttribute('telemetry_enable');
  }
  public set telemetryEnable(value: number) {
    this._telemetryEnable = value;
  }
  public resetTelemetryEnable() {
    this._telemetryEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get telemetryEnableInput() {
    return this._telemetryEnable;
  }

  // threshold_sensitivity - computed: false, optional: true, required: false
  private _thresholdSensitivity?: string; 
  public get thresholdSensitivity() {
    return this.getStringAttribute('threshold_sensitivity');
  }
  public set thresholdSensitivity(value: string) {
    this._thresholdSensitivity = value;
  }
  public resetThresholdSensitivity() {
    this._thresholdSensitivity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdSensitivityInput() {
    return this._thresholdSensitivity;
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

  // zone_migrate_to_opposite - computed: false, optional: true, required: false
  private _zoneMigrateToOpposite?: number; 
  public get zoneMigrateToOpposite() {
    return this.getNumberAttribute('zone_migrate_to_opposite');
  }
  public set zoneMigrateToOpposite(value: number) {
    this._zoneMigrateToOpposite = value;
  }
  public resetZoneMigrateToOpposite() {
    this._zoneMigrateToOpposite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneMigrateToOppositeInput() {
    return this._zoneMigrateToOpposite;
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

  // zone_profile - computed: false, optional: true, required: false
  private _zoneProfile?: string; 
  public get zoneProfile() {
    return this.getStringAttribute('zone_profile');
  }
  public set zoneProfile(value: string) {
    this._zoneProfile = value;
  }
  public resetZoneProfile() {
    this._zoneProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneProfileInput() {
    return this._zoneProfile;
  }

  // capture_config_list - computed: false, optional: true, required: false
  private _captureConfigList = new DdosDstZoneCaptureConfigListStructList(this, "capture_config_list", false);
  public get captureConfigList() {
    return this._captureConfigList;
  }
  public putCaptureConfigList(value: DdosDstZoneCaptureConfigListStruct[] | cdktf.IResolvable) {
    this._captureConfigList.internalValue = value;
  }
  public resetCaptureConfigList() {
    this._captureConfigList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captureConfigListInput() {
    return this._captureConfigList.internalValue;
  }

  // collector - computed: false, optional: true, required: false
  private _collector = new DdosDstZoneCollectorList(this, "collector", false);
  public get collector() {
    return this._collector;
  }
  public putCollector(value: DdosDstZoneCollector[] | cdktf.IResolvable) {
    this._collector.internalValue = value;
  }
  public resetCollector() {
    this._collector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectorInput() {
    return this._collector.internalValue;
  }

  // detection - computed: false, optional: true, required: false
  private _detection = new DdosDstZoneDetectionOutputReference(this, "detection");
  public get detection() {
    return this._detection;
  }
  public putDetection(value: DdosDstZoneDetection) {
    this._detection.internalValue = value;
  }
  public resetDetection() {
    this._detection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectionInput() {
    return this._detection.internalValue;
  }

  // enable_top_k - computed: false, optional: true, required: false
  private _enableTopK = new DdosDstZoneEnableTopKList(this, "enable_top_k", false);
  public get enableTopK() {
    return this._enableTopK;
  }
  public putEnableTopK(value: DdosDstZoneEnableTopK[] | cdktf.IResolvable) {
    this._enableTopK.internalValue = value;
  }
  public resetEnableTopK() {
    this._enableTopK.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTopKInput() {
    return this._enableTopK.internalValue;
  }

  // hw_blacklist_blocking - computed: false, optional: true, required: false
  private _hwBlacklistBlocking = new DdosDstZoneHwBlacklistBlockingOutputReference(this, "hw_blacklist_blocking");
  public get hwBlacklistBlocking() {
    return this._hwBlacklistBlocking;
  }
  public putHwBlacklistBlocking(value: DdosDstZoneHwBlacklistBlocking) {
    this._hwBlacklistBlocking.internalValue = value;
  }
  public resetHwBlacklistBlocking() {
    this._hwBlacklistBlocking.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hwBlacklistBlockingInput() {
    return this._hwBlacklistBlocking.internalValue;
  }

  // ip - computed: false, optional: true, required: false
  private _ip = new DdosDstZoneIpList(this, "ip", false);
  public get ip() {
    return this._ip;
  }
  public putIp(value: DdosDstZoneIp[] | cdktf.IResolvable) {
    this._ip.internalValue = value;
  }
  public resetIp() {
    this._ip.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip.internalValue;
  }

  // ip_proto - computed: false, optional: true, required: false
  private _ipProto = new DdosDstZoneIpProtoOutputReference(this, "ip_proto");
  public get ipProto() {
    return this._ipProto;
  }
  public putIpProto(value: DdosDstZoneIpProto) {
    this._ipProto.internalValue = value;
  }
  public resetIpProto() {
    this._ipProto.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipProtoInput() {
    return this._ipProto.internalValue;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6 = new DdosDstZoneIpv6List(this, "ipv6", false);
  public get ipv6() {
    return this._ipv6;
  }
  public putIpv6(value: DdosDstZoneIpv6[] | cdktf.IResolvable) {
    this._ipv6.internalValue = value;
  }
  public resetIpv6() {
    this._ipv6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6.internalValue;
  }

  // outbound_policy - computed: false, optional: true, required: false
  private _outboundPolicy = new DdosDstZoneOutboundPolicyOutputReference(this, "outbound_policy");
  public get outboundPolicy() {
    return this._outboundPolicy;
  }
  public putOutboundPolicy(value: DdosDstZoneOutboundPolicy) {
    this._outboundPolicy.internalValue = value;
  }
  public resetOutboundPolicy() {
    this._outboundPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundPolicyInput() {
    return this._outboundPolicy.internalValue;
  }

  // packet_anomaly_detection - computed: false, optional: true, required: false
  private _packetAnomalyDetection = new DdosDstZonePacketAnomalyDetectionOutputReference(this, "packet_anomaly_detection");
  public get packetAnomalyDetection() {
    return this._packetAnomalyDetection;
  }
  public putPacketAnomalyDetection(value: DdosDstZonePacketAnomalyDetection) {
    this._packetAnomalyDetection.internalValue = value;
  }
  public resetPacketAnomalyDetection() {
    this._packetAnomalyDetection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetAnomalyDetectionInput() {
    return this._packetAnomalyDetection.internalValue;
  }

  // port - computed: false, optional: true, required: false
  private _port = new DdosDstZonePortOutputReference(this, "port");
  public get port() {
    return this._port;
  }
  public putPort(value: DdosDstZonePort) {
    this._port.internalValue = value;
  }
  public resetPort() {
    this._port.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port.internalValue;
  }

  // port_range_list - computed: false, optional: true, required: false
  private _portRangeList = new DdosDstZonePortRangeListStructList(this, "port_range_list", false);
  public get portRangeList() {
    return this._portRangeList;
  }
  public putPortRangeList(value: DdosDstZonePortRangeListStruct[] | cdktf.IResolvable) {
    this._portRangeList.internalValue = value;
  }
  public resetPortRangeList() {
    this._portRangeList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portRangeListInput() {
    return this._portRangeList.internalValue;
  }

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new DdosDstZoneSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: DdosDstZoneSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }

  // sflow_tcp - computed: false, optional: true, required: false
  private _sflowTcp = new DdosDstZoneSflowTcpOutputReference(this, "sflow_tcp");
  public get sflowTcp() {
    return this._sflowTcp;
  }
  public putSflowTcp(value: DdosDstZoneSflowTcp) {
    this._sflowTcp.internalValue = value;
  }
  public resetSflowTcp() {
    this._sflowTcp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sflowTcpInput() {
    return this._sflowTcp.internalValue;
  }

  // src_port - computed: false, optional: true, required: false
  private _srcPort = new DdosDstZoneSrcPortOutputReference(this, "src_port");
  public get srcPort() {
    return this._srcPort;
  }
  public putSrcPort(value: DdosDstZoneSrcPort) {
    this._srcPort.internalValue = value;
  }
  public resetSrcPort() {
    this._srcPort.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcPortInput() {
    return this._srcPort.internalValue;
  }

  // src_port_range_list - computed: false, optional: true, required: false
  private _srcPortRangeList = new DdosDstZoneSrcPortRangeListStructList(this, "src_port_range_list", false);
  public get srcPortRangeList() {
    return this._srcPortRangeList;
  }
  public putSrcPortRangeList(value: DdosDstZoneSrcPortRangeListStruct[] | cdktf.IResolvable) {
    this._srcPortRangeList.internalValue = value;
  }
  public resetSrcPortRangeList() {
    this._srcPortRangeList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcPortRangeListInput() {
    return this._srcPortRangeList.internalValue;
  }

  // topk_destinations - computed: false, optional: true, required: false
  private _topkDestinations = new DdosDstZoneTopkDestinationsOutputReference(this, "topk_destinations");
  public get topkDestinations() {
    return this._topkDestinations;
  }
  public putTopkDestinations(value: DdosDstZoneTopkDestinations) {
    this._topkDestinations.internalValue = value;
  }
  public resetTopkDestinations() {
    this._topkDestinations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topkDestinationsInput() {
    return this._topkDestinations.internalValue;
  }

  // web_gui - computed: false, optional: true, required: false
  private _webGui = new DdosDstZoneWebGuiOutputReference(this, "web_gui");
  public get webGui() {
    return this._webGui;
  }
  public putWebGui(value: DdosDstZoneWebGui) {
    this._webGui.internalValue = value;
  }
  public resetWebGui() {
    this._webGui.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webGuiInput() {
    return this._webGui.internalValue;
  }

  // zone_template - computed: false, optional: true, required: false
  private _zoneTemplate = new DdosDstZoneZoneTemplateOutputReference(this, "zone_template");
  public get zoneTemplate() {
    return this._zoneTemplate;
  }
  public putZoneTemplate(value: DdosDstZoneZoneTemplate) {
    this._zoneTemplate.internalValue = value;
  }
  public resetZoneTemplate() {
    this._zoneTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneTemplateInput() {
    return this._zoneTemplate.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action_list: cdktf.stringToTerraform(this._actionList),
      advertised_enable: cdktf.numberToTerraform(this._advertisedEnable),
      continuous_learning: cdktf.numberToTerraform(this._continuousLearning),
      description: cdktf.stringToTerraform(this._description),
      dest_nat_ip: cdktf.stringToTerraform(this._destNatIp),
      dest_nat_ipv6: cdktf.stringToTerraform(this._destNatIpv6),
      drop_frag_pkt: cdktf.numberToTerraform(this._dropFragPkt),
      force_operational_mode: cdktf.numberToTerraform(this._forceOperationalMode),
      glid: cdktf.stringToTerraform(this._glid),
      id: cdktf.stringToTerraform(this._id),
      inbound_forward_dscp: cdktf.numberToTerraform(this._inboundForwardDscp),
      is_from_wizard: cdktf.numberToTerraform(this._isFromWizard),
      log_enable: cdktf.numberToTerraform(this._logEnable),
      log_high_frequency: cdktf.numberToTerraform(this._logHighFrequency),
      log_periodic: cdktf.numberToTerraform(this._logPeriodic),
      non_restrictive: cdktf.numberToTerraform(this._nonRestrictive),
      operational_mode: cdktf.stringToTerraform(this._operationalMode),
      outbound_forward_dscp: cdktf.numberToTerraform(this._outboundForwardDscp),
      pattern_recognition_hw_filter_enable: cdktf.numberToTerraform(this._patternRecognitionHwFilterEnable),
      pattern_recognition_sensitivity: cdktf.stringToTerraform(this._patternRecognitionSensitivity),
      per_addr_glid: cdktf.stringToTerraform(this._perAddrGlid),
      rate_limit: cdktf.numberToTerraform(this._rateLimit),
      reporting_disabled: cdktf.numberToTerraform(this._reportingDisabled),
      set_counter_base_val: cdktf.numberToTerraform(this._setCounterBaseVal),
      sflow_common: cdktf.numberToTerraform(this._sflowCommon),
      sflow_http: cdktf.numberToTerraform(this._sflowHttp),
      sflow_layer_4: cdktf.numberToTerraform(this._sflowLayer4),
      sflow_packets: cdktf.numberToTerraform(this._sflowPackets),
      source_nat_pool: cdktf.stringToTerraform(this._sourceNatPool),
      src_prefix_len: cdktf.numberToTerraform(this._srcPrefixLen),
      telemetry_enable: cdktf.numberToTerraform(this._telemetryEnable),
      threshold_sensitivity: cdktf.stringToTerraform(this._thresholdSensitivity),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      zone_migrate_to_opposite: cdktf.numberToTerraform(this._zoneMigrateToOpposite),
      zone_name: cdktf.stringToTerraform(this._zoneName),
      zone_profile: cdktf.stringToTerraform(this._zoneProfile),
      capture_config_list: cdktf.listMapper(ddosDstZoneCaptureConfigListStructToTerraform, true)(this._captureConfigList.internalValue),
      collector: cdktf.listMapper(ddosDstZoneCollectorToTerraform, true)(this._collector.internalValue),
      detection: ddosDstZoneDetectionToTerraform(this._detection.internalValue),
      enable_top_k: cdktf.listMapper(ddosDstZoneEnableTopKToTerraform, true)(this._enableTopK.internalValue),
      hw_blacklist_blocking: ddosDstZoneHwBlacklistBlockingToTerraform(this._hwBlacklistBlocking.internalValue),
      ip: cdktf.listMapper(ddosDstZoneIpToTerraform, true)(this._ip.internalValue),
      ip_proto: ddosDstZoneIpProtoToTerraform(this._ipProto.internalValue),
      ipv6: cdktf.listMapper(ddosDstZoneIpv6ToTerraform, true)(this._ipv6.internalValue),
      outbound_policy: ddosDstZoneOutboundPolicyToTerraform(this._outboundPolicy.internalValue),
      packet_anomaly_detection: ddosDstZonePacketAnomalyDetectionToTerraform(this._packetAnomalyDetection.internalValue),
      port: ddosDstZonePortToTerraform(this._port.internalValue),
      port_range_list: cdktf.listMapper(ddosDstZonePortRangeListStructToTerraform, true)(this._portRangeList.internalValue),
      sampling_enable: cdktf.listMapper(ddosDstZoneSamplingEnableToTerraform, true)(this._samplingEnable.internalValue),
      sflow_tcp: ddosDstZoneSflowTcpToTerraform(this._sflowTcp.internalValue),
      src_port: ddosDstZoneSrcPortToTerraform(this._srcPort.internalValue),
      src_port_range_list: cdktf.listMapper(ddosDstZoneSrcPortRangeListStructToTerraform, true)(this._srcPortRangeList.internalValue),
      topk_destinations: ddosDstZoneTopkDestinationsToTerraform(this._topkDestinations.internalValue),
      web_gui: ddosDstZoneWebGuiToTerraform(this._webGui.internalValue),
      zone_template: ddosDstZoneZoneTemplateToTerraform(this._zoneTemplate.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action_list: {
        value: cdktf.stringToHclTerraform(this._actionList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      advertised_enable: {
        value: cdktf.numberToHclTerraform(this._advertisedEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      continuous_learning: {
        value: cdktf.numberToHclTerraform(this._continuousLearning),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dest_nat_ip: {
        value: cdktf.stringToHclTerraform(this._destNatIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dest_nat_ipv6: {
        value: cdktf.stringToHclTerraform(this._destNatIpv6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      drop_frag_pkt: {
        value: cdktf.numberToHclTerraform(this._dropFragPkt),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      force_operational_mode: {
        value: cdktf.numberToHclTerraform(this._forceOperationalMode),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      glid: {
        value: cdktf.stringToHclTerraform(this._glid),
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
      inbound_forward_dscp: {
        value: cdktf.numberToHclTerraform(this._inboundForwardDscp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      is_from_wizard: {
        value: cdktf.numberToHclTerraform(this._isFromWizard),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      log_enable: {
        value: cdktf.numberToHclTerraform(this._logEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      log_high_frequency: {
        value: cdktf.numberToHclTerraform(this._logHighFrequency),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      log_periodic: {
        value: cdktf.numberToHclTerraform(this._logPeriodic),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      non_restrictive: {
        value: cdktf.numberToHclTerraform(this._nonRestrictive),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      operational_mode: {
        value: cdktf.stringToHclTerraform(this._operationalMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      outbound_forward_dscp: {
        value: cdktf.numberToHclTerraform(this._outboundForwardDscp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pattern_recognition_hw_filter_enable: {
        value: cdktf.numberToHclTerraform(this._patternRecognitionHwFilterEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pattern_recognition_sensitivity: {
        value: cdktf.stringToHclTerraform(this._patternRecognitionSensitivity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      per_addr_glid: {
        value: cdktf.stringToHclTerraform(this._perAddrGlid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rate_limit: {
        value: cdktf.numberToHclTerraform(this._rateLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      reporting_disabled: {
        value: cdktf.numberToHclTerraform(this._reportingDisabled),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      sflow_layer_4: {
        value: cdktf.numberToHclTerraform(this._sflowLayer4),
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
      source_nat_pool: {
        value: cdktf.stringToHclTerraform(this._sourceNatPool),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      src_prefix_len: {
        value: cdktf.numberToHclTerraform(this._srcPrefixLen),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      telemetry_enable: {
        value: cdktf.numberToHclTerraform(this._telemetryEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      threshold_sensitivity: {
        value: cdktf.stringToHclTerraform(this._thresholdSensitivity),
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
      zone_migrate_to_opposite: {
        value: cdktf.numberToHclTerraform(this._zoneMigrateToOpposite),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      zone_name: {
        value: cdktf.stringToHclTerraform(this._zoneName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone_profile: {
        value: cdktf.stringToHclTerraform(this._zoneProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      capture_config_list: {
        value: cdktf.listMapperHcl(ddosDstZoneCaptureConfigListStructToHclTerraform, true)(this._captureConfigList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDstZoneCaptureConfigListStructList",
      },
      collector: {
        value: cdktf.listMapperHcl(ddosDstZoneCollectorToHclTerraform, true)(this._collector.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDstZoneCollectorList",
      },
      detection: {
        value: ddosDstZoneDetectionToHclTerraform(this._detection.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDstZoneDetectionList",
      },
      enable_top_k: {
        value: cdktf.listMapperHcl(ddosDstZoneEnableTopKToHclTerraform, true)(this._enableTopK.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDstZoneEnableTopKList",
      },
      hw_blacklist_blocking: {
        value: ddosDstZoneHwBlacklistBlockingToHclTerraform(this._hwBlacklistBlocking.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDstZoneHwBlacklistBlockingList",
      },
      ip: {
        value: cdktf.listMapperHcl(ddosDstZoneIpToHclTerraform, true)(this._ip.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDstZoneIpList",
      },
      ip_proto: {
        value: ddosDstZoneIpProtoToHclTerraform(this._ipProto.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDstZoneIpProtoList",
      },
      ipv6: {
        value: cdktf.listMapperHcl(ddosDstZoneIpv6ToHclTerraform, true)(this._ipv6.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDstZoneIpv6List",
      },
      outbound_policy: {
        value: ddosDstZoneOutboundPolicyToHclTerraform(this._outboundPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDstZoneOutboundPolicyList",
      },
      packet_anomaly_detection: {
        value: ddosDstZonePacketAnomalyDetectionToHclTerraform(this._packetAnomalyDetection.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDstZonePacketAnomalyDetectionList",
      },
      port: {
        value: ddosDstZonePortToHclTerraform(this._port.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDstZonePortList",
      },
      port_range_list: {
        value: cdktf.listMapperHcl(ddosDstZonePortRangeListStructToHclTerraform, true)(this._portRangeList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDstZonePortRangeListStructList",
      },
      sampling_enable: {
        value: cdktf.listMapperHcl(ddosDstZoneSamplingEnableToHclTerraform, true)(this._samplingEnable.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDstZoneSamplingEnableList",
      },
      sflow_tcp: {
        value: ddosDstZoneSflowTcpToHclTerraform(this._sflowTcp.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDstZoneSflowTcpList",
      },
      src_port: {
        value: ddosDstZoneSrcPortToHclTerraform(this._srcPort.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDstZoneSrcPortList",
      },
      src_port_range_list: {
        value: cdktf.listMapperHcl(ddosDstZoneSrcPortRangeListStructToHclTerraform, true)(this._srcPortRangeList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDstZoneSrcPortRangeListStructList",
      },
      topk_destinations: {
        value: ddosDstZoneTopkDestinationsToHclTerraform(this._topkDestinations.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDstZoneTopkDestinationsList",
      },
      web_gui: {
        value: ddosDstZoneWebGuiToHclTerraform(this._webGui.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDstZoneWebGuiList",
      },
      zone_template: {
        value: ddosDstZoneZoneTemplateToHclTerraform(this._zoneTemplate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDstZoneZoneTemplateList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
