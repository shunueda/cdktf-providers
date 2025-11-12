// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service_other_level
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DdosDstZonePortZoneServiceOtherLevelConfig extends cdktf.TerraformMetaArguments {
  /**
  * Apply extracted filters from this level
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service_other_level#apply_extracted_filters DdosDstZonePortZoneServiceOtherLevel#apply_extracted_filters}
  */
  readonly applyExtractedFilters?: number;
  /**
  * Close session for unauthenticated sources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service_other_level#close_sessions_for_unauth_sources DdosDstZonePortZoneServiceOtherLevel#close_sessions_for_unauth_sources}
  */
  readonly closeSessionsForUnauthSources?: number;
  /**
  * 'drop': Drop packets for glid exceed (Default); 'blacklist-src': Blacklist-src for glid exceed; 'ignore': Do nothing for glid exceed;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service_other_level#glid_action DdosDstZonePortZoneServiceOtherLevel#glid_action}
  */
  readonly glidAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service_other_level#id DdosDstZonePortZoneServiceOtherLevel#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * '0': Default policy level; '1': Policy level 1; '2': Policy level 2; '3': Policy level 3; '4': Policy level 4;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service_other_level#level_num DdosDstZonePortZoneServiceOtherLevel#level_num}
  */
  readonly levelNum: string;
  /**
  * PortOther
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service_other_level#port_other DdosDstZonePortZoneServiceOtherLevel#port_other}
  */
  readonly portOther: string;
  /**
  * Protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service_other_level#protocol DdosDstZonePortZoneServiceOtherLevel#protocol}
  */
  readonly protocol: string;
  /**
  * Global limit ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service_other_level#src_default_glid DdosDstZonePortZoneServiceOtherLevel#src_default_glid}
  */
  readonly srcDefaultGlid?: string;
  /**
  * Source activation score of this level
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service_other_level#src_escalation_score DdosDstZonePortZoneServiceOtherLevel#src_escalation_score}
  */
  readonly srcEscalationScore?: number;
  /**
  * Violation actions apply due to source escalate from this level
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service_other_level#src_violation_actions DdosDstZonePortZoneServiceOtherLevel#src_violation_actions}
  */
  readonly srcViolationActions?: string;
  /**
  * Start pattern recognition from this level
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service_other_level#start_pattern_recognition DdosDstZonePortZoneServiceOtherLevel#start_pattern_recognition}
  */
  readonly startPatternRecognition?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service_other_level#user_tag DdosDstZonePortZoneServiceOtherLevel#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service_other_level#uuid DdosDstZonePortZoneServiceOtherLevel#uuid}
  */
  readonly uuid?: string;
  /**
  * Zone activation score of this level
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service_other_level#zone_escalation_score DdosDstZonePortZoneServiceOtherLevel#zone_escalation_score}
  */
  readonly zoneEscalationScore?: number;
  /**
  * ZoneName
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service_other_level#zone_name DdosDstZonePortZoneServiceOtherLevel#zone_name}
  */
  readonly zoneName: string;
  /**
  * Violation actions apply due to zone escalate from this level
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service_other_level#zone_violation_actions DdosDstZonePortZoneServiceOtherLevel#zone_violation_actions}
  */
  readonly zoneViolationActions?: string;
  /**
  * indicator_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service_other_level#indicator_list DdosDstZonePortZoneServiceOtherLevel#indicator_list}
  */
  readonly indicatorList?: DdosDstZonePortZoneServiceOtherLevelIndicatorListStruct[] | cdktf.IResolvable;
  /**
  * zone_template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service_other_level#zone_template DdosDstZonePortZoneServiceOtherLevel#zone_template}
  */
  readonly zoneTemplate?: DdosDstZonePortZoneServiceOtherLevelZoneTemplate;
}
export interface DdosDstZonePortZoneServiceOtherLevelIndicatorListStruct {
  /**
  * Expected minimal data size
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service_other_level#data_packet_size DdosDstZonePortZoneServiceOtherLevel#data_packet_size}
  */
  readonly dataPacketSize?: number;
  /**
  * Score corresponding to the indicator
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service_other_level#score DdosDstZonePortZoneServiceOtherLevel#score}
  */
  readonly score?: number;
  /**
  * Indicator per-src threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service_other_level#src_threshold_large_num DdosDstZonePortZoneServiceOtherLevel#src_threshold_large_num}
  */
  readonly srcThresholdLargeNum?: number;
  /**
  * Indicator per-src threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service_other_level#src_threshold_num DdosDstZonePortZoneServiceOtherLevel#src_threshold_num}
  */
  readonly srcThresholdNum?: number;
  /**
  * Indicator per-src threshold (Non-zero floating point)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service_other_level#src_threshold_str DdosDstZonePortZoneServiceOtherLevel#src_threshold_str}
  */
  readonly srcThresholdStr?: string;
  /**
  * Violation actions to use when this src indicator threshold reaches
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service_other_level#src_violation_actions DdosDstZonePortZoneServiceOtherLevel#src_violation_actions}
  */
  readonly srcViolationActions?: string;
  /**
  * Expected minimal window size
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service_other_level#tcp_window_size DdosDstZonePortZoneServiceOtherLevel#tcp_window_size}
  */
  readonly tcpWindowSize?: number;
  /**
  * 'pkt-rate': rate of incoming packets; 'pkt-drop-rate': rate of packets got dropped; 'bit-rate': rate of incoming bits; 'pkt-drop-ratio': ratio of incoming packet rate divided by the rate of dropping packets; 'bytes-to-bytes-from-ratio': ratio of incoming packet rate divided by the rate of outgoing packets; 'concurrent-conns': number of concurrent connections; 'conn-miss-rate': rate of incoming packets for which no previously established connection exists; 'syn-rate': rate on incoming SYN packets; 'fin-rate': rate on incoming FIN packets; 'rst-rate': rate of incoming RST packets; 'small-window-ack-rate': rate of small window advertisement; 'empty-ack-rate': rate of incoming packets which have no payload; 'small-payload-rate': rate of short payload packet; 'syn-fin-ratio': ratio of incoming SYN packet rate divided by the rate of incoming FIN packets; 'cpu-utilization': average data CPU utilization; 'interface-utilization': outside interface utilization;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service_other_level#type DdosDstZonePortZoneServiceOtherLevel#type}
  */
  readonly type: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service_other_level#user_tag DdosDstZonePortZoneServiceOtherLevel#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service_other_level#uuid DdosDstZonePortZoneServiceOtherLevel#uuid}
  */
  readonly uuid?: string;
  /**
  * Threshold for the entire zone
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service_other_level#zone_threshold_large_num DdosDstZonePortZoneServiceOtherLevel#zone_threshold_large_num}
  */
  readonly zoneThresholdLargeNum?: number;
  /**
  * Threshold for the entire zone
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service_other_level#zone_threshold_num DdosDstZonePortZoneServiceOtherLevel#zone_threshold_num}
  */
  readonly zoneThresholdNum?: number;
  /**
  * Threshold for the entire zone (Non-zero floating point)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service_other_level#zone_threshold_str DdosDstZonePortZoneServiceOtherLevel#zone_threshold_str}
  */
  readonly zoneThresholdStr?: string;
  /**
  * Violation actions to use when this zone indicator threshold reaches
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service_other_level#zone_violation_actions DdosDstZonePortZoneServiceOtherLevel#zone_violation_actions}
  */
  readonly zoneViolationActions?: string;
}

export function ddosDstZonePortZoneServiceOtherLevelIndicatorListStructToTerraform(struct?: DdosDstZonePortZoneServiceOtherLevelIndicatorListStruct | cdktf.IResolvable): any {
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


export function ddosDstZonePortZoneServiceOtherLevelIndicatorListStructToHclTerraform(struct?: DdosDstZonePortZoneServiceOtherLevelIndicatorListStruct | cdktf.IResolvable): any {
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

export class DdosDstZonePortZoneServiceOtherLevelIndicatorListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosDstZonePortZoneServiceOtherLevelIndicatorListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DdosDstZonePortZoneServiceOtherLevelIndicatorListStruct | cdktf.IResolvable | undefined) {
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

export class DdosDstZonePortZoneServiceOtherLevelIndicatorListStructList extends cdktf.ComplexList {
  public internalValue? : DdosDstZonePortZoneServiceOtherLevelIndicatorListStruct[] | cdktf.IResolvable

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
  public get(index: number): DdosDstZonePortZoneServiceOtherLevelIndicatorListStructOutputReference {
    return new DdosDstZonePortZoneServiceOtherLevelIndicatorListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosDstZonePortZoneServiceOtherLevelZoneTemplate {
  /**
  * DDOS encap template (IPv6-over-IPv4 / IPv4-over-IPv6 are not supported.)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service_other_level#encap DdosDstZonePortZoneServiceOtherLevel#encap}
  */
  readonly encap?: string;
  /**
  * DDOS tcp template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service_other_level#tcp DdosDstZonePortZoneServiceOtherLevel#tcp}
  */
  readonly tcp?: string;
  /**
  * DDOS udp template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service_other_level#udp DdosDstZonePortZoneServiceOtherLevel#udp}
  */
  readonly udp?: string;
}

export function ddosDstZonePortZoneServiceOtherLevelZoneTemplateToTerraform(struct?: DdosDstZonePortZoneServiceOtherLevelZoneTemplateOutputReference | DdosDstZonePortZoneServiceOtherLevelZoneTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    encap: cdktf.stringToTerraform(struct!.encap),
    tcp: cdktf.stringToTerraform(struct!.tcp),
    udp: cdktf.stringToTerraform(struct!.udp),
  }
}


export function ddosDstZonePortZoneServiceOtherLevelZoneTemplateToHclTerraform(struct?: DdosDstZonePortZoneServiceOtherLevelZoneTemplateOutputReference | DdosDstZonePortZoneServiceOtherLevelZoneTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    encap: {
      value: cdktf.stringToHclTerraform(struct!.encap),
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

export class DdosDstZonePortZoneServiceOtherLevelZoneTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstZonePortZoneServiceOtherLevelZoneTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encap !== undefined) {
      hasAnyValues = true;
      internalValueResult.encap = this._encap;
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

  public set internalValue(value: DdosDstZonePortZoneServiceOtherLevelZoneTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._encap = undefined;
      this._tcp = undefined;
      this._udp = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._encap = value.encap;
      this._tcp = value.tcp;
      this._udp = value.udp;
    }
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

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service_other_level thunder_ddos_dst_zone_port_zone_service_other_level}
*/
export class DdosDstZonePortZoneServiceOtherLevel extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_dst_zone_port_zone_service_other_level";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DdosDstZonePortZoneServiceOtherLevel resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DdosDstZonePortZoneServiceOtherLevel to import
  * @param importFromId The id of the existing DdosDstZonePortZoneServiceOtherLevel that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service_other_level#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DdosDstZonePortZoneServiceOtherLevel to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_dst_zone_port_zone_service_other_level", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_zone_port_zone_service_other_level thunder_ddos_dst_zone_port_zone_service_other_level} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DdosDstZonePortZoneServiceOtherLevelConfig
  */
  public constructor(scope: Construct, id: string, config: DdosDstZonePortZoneServiceOtherLevelConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_dst_zone_port_zone_service_other_level',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2',
        providerVersionConstraint: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._applyExtractedFilters = config.applyExtractedFilters;
    this._closeSessionsForUnauthSources = config.closeSessionsForUnauthSources;
    this._glidAction = config.glidAction;
    this._id = config.id;
    this._levelNum = config.levelNum;
    this._portOther = config.portOther;
    this._protocol = config.protocol;
    this._srcDefaultGlid = config.srcDefaultGlid;
    this._srcEscalationScore = config.srcEscalationScore;
    this._srcViolationActions = config.srcViolationActions;
    this._startPatternRecognition = config.startPatternRecognition;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._zoneEscalationScore = config.zoneEscalationScore;
    this._zoneName = config.zoneName;
    this._zoneViolationActions = config.zoneViolationActions;
    this._indicatorList.internalValue = config.indicatorList;
    this._zoneTemplate.internalValue = config.zoneTemplate;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // port_other - computed: false, optional: false, required: true
  private _portOther?: string; 
  public get portOther() {
    return this.getStringAttribute('port_other');
  }
  public set portOther(value: string) {
    this._portOther = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portOtherInput() {
    return this._portOther;
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
  private _indicatorList = new DdosDstZonePortZoneServiceOtherLevelIndicatorListStructList(this, "indicator_list", false);
  public get indicatorList() {
    return this._indicatorList;
  }
  public putIndicatorList(value: DdosDstZonePortZoneServiceOtherLevelIndicatorListStruct[] | cdktf.IResolvable) {
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
  private _zoneTemplate = new DdosDstZonePortZoneServiceOtherLevelZoneTemplateOutputReference(this, "zone_template");
  public get zoneTemplate() {
    return this._zoneTemplate;
  }
  public putZoneTemplate(value: DdosDstZonePortZoneServiceOtherLevelZoneTemplate) {
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
      apply_extracted_filters: cdktf.numberToTerraform(this._applyExtractedFilters),
      close_sessions_for_unauth_sources: cdktf.numberToTerraform(this._closeSessionsForUnauthSources),
      glid_action: cdktf.stringToTerraform(this._glidAction),
      id: cdktf.stringToTerraform(this._id),
      level_num: cdktf.stringToTerraform(this._levelNum),
      port_other: cdktf.stringToTerraform(this._portOther),
      protocol: cdktf.stringToTerraform(this._protocol),
      src_default_glid: cdktf.stringToTerraform(this._srcDefaultGlid),
      src_escalation_score: cdktf.numberToTerraform(this._srcEscalationScore),
      src_violation_actions: cdktf.stringToTerraform(this._srcViolationActions),
      start_pattern_recognition: cdktf.numberToTerraform(this._startPatternRecognition),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      zone_escalation_score: cdktf.numberToTerraform(this._zoneEscalationScore),
      zone_name: cdktf.stringToTerraform(this._zoneName),
      zone_violation_actions: cdktf.stringToTerraform(this._zoneViolationActions),
      indicator_list: cdktf.listMapper(ddosDstZonePortZoneServiceOtherLevelIndicatorListStructToTerraform, true)(this._indicatorList.internalValue),
      zone_template: ddosDstZonePortZoneServiceOtherLevelZoneTemplateToTerraform(this._zoneTemplate.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      apply_extracted_filters: {
        value: cdktf.numberToHclTerraform(this._applyExtractedFilters),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      close_sessions_for_unauth_sources: {
        value: cdktf.numberToHclTerraform(this._closeSessionsForUnauthSources),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      glid_action: {
        value: cdktf.stringToHclTerraform(this._glidAction),
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
      level_num: {
        value: cdktf.stringToHclTerraform(this._levelNum),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port_other: {
        value: cdktf.stringToHclTerraform(this._portOther),
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
      src_default_glid: {
        value: cdktf.stringToHclTerraform(this._srcDefaultGlid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      src_escalation_score: {
        value: cdktf.numberToHclTerraform(this._srcEscalationScore),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      src_violation_actions: {
        value: cdktf.stringToHclTerraform(this._srcViolationActions),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      start_pattern_recognition: {
        value: cdktf.numberToHclTerraform(this._startPatternRecognition),
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
      zone_escalation_score: {
        value: cdktf.numberToHclTerraform(this._zoneEscalationScore),
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
      zone_violation_actions: {
        value: cdktf.stringToHclTerraform(this._zoneViolationActions),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      indicator_list: {
        value: cdktf.listMapperHcl(ddosDstZonePortZoneServiceOtherLevelIndicatorListStructToHclTerraform, true)(this._indicatorList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDstZonePortZoneServiceOtherLevelIndicatorListStructList",
      },
      zone_template: {
        value: ddosDstZonePortZoneServiceOtherLevelZoneTemplateToHclTerraform(this._zoneTemplate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDstZonePortZoneServiceOtherLevelZoneTemplateList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
