// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_outbound_policy_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderDdosDstZoneOutboundPolicyOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_outbound_policy_oper#id DataThunderDdosDstZoneOutboundPolicyOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ZoneName
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_outbound_policy_oper#zone_name DataThunderDdosDstZoneOutboundPolicyOper#zone_name}
  */
  readonly zoneName: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_outbound_policy_oper#oper DataThunderDdosDstZoneOutboundPolicyOper#oper}
  */
  readonly oper?: DataThunderDdosDstZoneOutboundPolicyOperOper;
}
export interface DataThunderDdosDstZoneOutboundPolicyOperOperGeoTrackingStatistics {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_outbound_policy_oper#connection_rate_exceed DataThunderDdosDstZoneOutboundPolicyOper#connection_rate_exceed}
  */
  readonly connectionRateExceed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_outbound_policy_oper#connections_exceed DataThunderDdosDstZoneOutboundPolicyOper#connections_exceed}
  */
  readonly connectionsExceed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_outbound_policy_oper#frag_packet_rate DataThunderDdosDstZoneOutboundPolicyOper#frag_packet_rate}
  */
  readonly fragPacketRate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_outbound_policy_oper#kbit_rate_exceed DataThunderDdosDstZoneOutboundPolicyOper#kbit_rate_exceed}
  */
  readonly kbitRateExceed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_outbound_policy_oper#kbit_rate_exceed_count DataThunderDdosDstZoneOutboundPolicyOper#kbit_rate_exceed_count}
  */
  readonly kbitRateExceedCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_outbound_policy_oper#packet_dropped DataThunderDdosDstZoneOutboundPolicyOper#packet_dropped}
  */
  readonly packetDropped?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_outbound_policy_oper#packet_rate_exceed DataThunderDdosDstZoneOutboundPolicyOper#packet_rate_exceed}
  */
  readonly packetRateExceed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_outbound_policy_oper#packet_received DataThunderDdosDstZoneOutboundPolicyOper#packet_received}
  */
  readonly packetReceived?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_outbound_policy_oper#tracking_entry_aged DataThunderDdosDstZoneOutboundPolicyOper#tracking_entry_aged}
  */
  readonly trackingEntryAged?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_outbound_policy_oper#tracking_entry_learn DataThunderDdosDstZoneOutboundPolicyOper#tracking_entry_learn}
  */
  readonly trackingEntryLearn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_outbound_policy_oper#tracking_entry_learning_thre_exceed DataThunderDdosDstZoneOutboundPolicyOper#tracking_entry_learning_thre_exceed}
  */
  readonly trackingEntryLearningThreExceed?: number;
}

export function dataThunderDdosDstZoneOutboundPolicyOperOperGeoTrackingStatisticsToTerraform(struct?: DataThunderDdosDstZoneOutboundPolicyOperOperGeoTrackingStatisticsOutputReference | DataThunderDdosDstZoneOutboundPolicyOperOperGeoTrackingStatistics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_rate_exceed: cdktf.numberToTerraform(struct!.connectionRateExceed),
    connections_exceed: cdktf.numberToTerraform(struct!.connectionsExceed),
    frag_packet_rate: cdktf.numberToTerraform(struct!.fragPacketRate),
    kbit_rate_exceed: cdktf.numberToTerraform(struct!.kbitRateExceed),
    kbit_rate_exceed_count: cdktf.numberToTerraform(struct!.kbitRateExceedCount),
    packet_dropped: cdktf.numberToTerraform(struct!.packetDropped),
    packet_rate_exceed: cdktf.numberToTerraform(struct!.packetRateExceed),
    packet_received: cdktf.numberToTerraform(struct!.packetReceived),
    tracking_entry_aged: cdktf.numberToTerraform(struct!.trackingEntryAged),
    tracking_entry_learn: cdktf.numberToTerraform(struct!.trackingEntryLearn),
    tracking_entry_learning_thre_exceed: cdktf.numberToTerraform(struct!.trackingEntryLearningThreExceed),
  }
}


export function dataThunderDdosDstZoneOutboundPolicyOperOperGeoTrackingStatisticsToHclTerraform(struct?: DataThunderDdosDstZoneOutboundPolicyOperOperGeoTrackingStatisticsOutputReference | DataThunderDdosDstZoneOutboundPolicyOperOperGeoTrackingStatistics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connection_rate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.connectionRateExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    connections_exceed: {
      value: cdktf.numberToHclTerraform(struct!.connectionsExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    frag_packet_rate: {
      value: cdktf.numberToHclTerraform(struct!.fragPacketRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kbit_rate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.kbitRateExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kbit_rate_exceed_count: {
      value: cdktf.numberToHclTerraform(struct!.kbitRateExceedCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    packet_dropped: {
      value: cdktf.numberToHclTerraform(struct!.packetDropped),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    packet_rate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.packetRateExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    packet_received: {
      value: cdktf.numberToHclTerraform(struct!.packetReceived),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tracking_entry_aged: {
      value: cdktf.numberToHclTerraform(struct!.trackingEntryAged),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tracking_entry_learn: {
      value: cdktf.numberToHclTerraform(struct!.trackingEntryLearn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tracking_entry_learning_thre_exceed: {
      value: cdktf.numberToHclTerraform(struct!.trackingEntryLearningThreExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDstZoneOutboundPolicyOperOperGeoTrackingStatisticsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderDdosDstZoneOutboundPolicyOperOperGeoTrackingStatistics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionRateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionRateExceed = this._connectionRateExceed;
    }
    if (this._connectionsExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionsExceed = this._connectionsExceed;
    }
    if (this._fragPacketRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.fragPacketRate = this._fragPacketRate;
    }
    if (this._kbitRateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.kbitRateExceed = this._kbitRateExceed;
    }
    if (this._kbitRateExceedCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.kbitRateExceedCount = this._kbitRateExceedCount;
    }
    if (this._packetDropped !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetDropped = this._packetDropped;
    }
    if (this._packetRateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetRateExceed = this._packetRateExceed;
    }
    if (this._packetReceived !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetReceived = this._packetReceived;
    }
    if (this._trackingEntryAged !== undefined) {
      hasAnyValues = true;
      internalValueResult.trackingEntryAged = this._trackingEntryAged;
    }
    if (this._trackingEntryLearn !== undefined) {
      hasAnyValues = true;
      internalValueResult.trackingEntryLearn = this._trackingEntryLearn;
    }
    if (this._trackingEntryLearningThreExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.trackingEntryLearningThreExceed = this._trackingEntryLearningThreExceed;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDstZoneOutboundPolicyOperOperGeoTrackingStatistics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connectionRateExceed = undefined;
      this._connectionsExceed = undefined;
      this._fragPacketRate = undefined;
      this._kbitRateExceed = undefined;
      this._kbitRateExceedCount = undefined;
      this._packetDropped = undefined;
      this._packetRateExceed = undefined;
      this._packetReceived = undefined;
      this._trackingEntryAged = undefined;
      this._trackingEntryLearn = undefined;
      this._trackingEntryLearningThreExceed = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connectionRateExceed = value.connectionRateExceed;
      this._connectionsExceed = value.connectionsExceed;
      this._fragPacketRate = value.fragPacketRate;
      this._kbitRateExceed = value.kbitRateExceed;
      this._kbitRateExceedCount = value.kbitRateExceedCount;
      this._packetDropped = value.packetDropped;
      this._packetRateExceed = value.packetRateExceed;
      this._packetReceived = value.packetReceived;
      this._trackingEntryAged = value.trackingEntryAged;
      this._trackingEntryLearn = value.trackingEntryLearn;
      this._trackingEntryLearningThreExceed = value.trackingEntryLearningThreExceed;
    }
  }

  // connection_rate_exceed - computed: false, optional: true, required: false
  private _connectionRateExceed?: number; 
  public get connectionRateExceed() {
    return this.getNumberAttribute('connection_rate_exceed');
  }
  public set connectionRateExceed(value: number) {
    this._connectionRateExceed = value;
  }
  public resetConnectionRateExceed() {
    this._connectionRateExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionRateExceedInput() {
    return this._connectionRateExceed;
  }

  // connections_exceed - computed: false, optional: true, required: false
  private _connectionsExceed?: number; 
  public get connectionsExceed() {
    return this.getNumberAttribute('connections_exceed');
  }
  public set connectionsExceed(value: number) {
    this._connectionsExceed = value;
  }
  public resetConnectionsExceed() {
    this._connectionsExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionsExceedInput() {
    return this._connectionsExceed;
  }

  // frag_packet_rate - computed: false, optional: true, required: false
  private _fragPacketRate?: number; 
  public get fragPacketRate() {
    return this.getNumberAttribute('frag_packet_rate');
  }
  public set fragPacketRate(value: number) {
    this._fragPacketRate = value;
  }
  public resetFragPacketRate() {
    this._fragPacketRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fragPacketRateInput() {
    return this._fragPacketRate;
  }

  // kbit_rate_exceed - computed: false, optional: true, required: false
  private _kbitRateExceed?: number; 
  public get kbitRateExceed() {
    return this.getNumberAttribute('kbit_rate_exceed');
  }
  public set kbitRateExceed(value: number) {
    this._kbitRateExceed = value;
  }
  public resetKbitRateExceed() {
    this._kbitRateExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kbitRateExceedInput() {
    return this._kbitRateExceed;
  }

  // kbit_rate_exceed_count - computed: false, optional: true, required: false
  private _kbitRateExceedCount?: number; 
  public get kbitRateExceedCount() {
    return this.getNumberAttribute('kbit_rate_exceed_count');
  }
  public set kbitRateExceedCount(value: number) {
    this._kbitRateExceedCount = value;
  }
  public resetKbitRateExceedCount() {
    this._kbitRateExceedCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kbitRateExceedCountInput() {
    return this._kbitRateExceedCount;
  }

  // packet_dropped - computed: false, optional: true, required: false
  private _packetDropped?: number; 
  public get packetDropped() {
    return this.getNumberAttribute('packet_dropped');
  }
  public set packetDropped(value: number) {
    this._packetDropped = value;
  }
  public resetPacketDropped() {
    this._packetDropped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetDroppedInput() {
    return this._packetDropped;
  }

  // packet_rate_exceed - computed: false, optional: true, required: false
  private _packetRateExceed?: number; 
  public get packetRateExceed() {
    return this.getNumberAttribute('packet_rate_exceed');
  }
  public set packetRateExceed(value: number) {
    this._packetRateExceed = value;
  }
  public resetPacketRateExceed() {
    this._packetRateExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetRateExceedInput() {
    return this._packetRateExceed;
  }

  // packet_received - computed: false, optional: true, required: false
  private _packetReceived?: number; 
  public get packetReceived() {
    return this.getNumberAttribute('packet_received');
  }
  public set packetReceived(value: number) {
    this._packetReceived = value;
  }
  public resetPacketReceived() {
    this._packetReceived = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetReceivedInput() {
    return this._packetReceived;
  }

  // tracking_entry_aged - computed: false, optional: true, required: false
  private _trackingEntryAged?: number; 
  public get trackingEntryAged() {
    return this.getNumberAttribute('tracking_entry_aged');
  }
  public set trackingEntryAged(value: number) {
    this._trackingEntryAged = value;
  }
  public resetTrackingEntryAged() {
    this._trackingEntryAged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackingEntryAgedInput() {
    return this._trackingEntryAged;
  }

  // tracking_entry_learn - computed: false, optional: true, required: false
  private _trackingEntryLearn?: number; 
  public get trackingEntryLearn() {
    return this.getNumberAttribute('tracking_entry_learn');
  }
  public set trackingEntryLearn(value: number) {
    this._trackingEntryLearn = value;
  }
  public resetTrackingEntryLearn() {
    this._trackingEntryLearn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackingEntryLearnInput() {
    return this._trackingEntryLearn;
  }

  // tracking_entry_learning_thre_exceed - computed: false, optional: true, required: false
  private _trackingEntryLearningThreExceed?: number; 
  public get trackingEntryLearningThreExceed() {
    return this.getNumberAttribute('tracking_entry_learning_thre_exceed');
  }
  public set trackingEntryLearningThreExceed(value: number) {
    this._trackingEntryLearningThreExceed = value;
  }
  public resetTrackingEntryLearningThreExceed() {
    this._trackingEntryLearningThreExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackingEntryLearningThreExceedInput() {
    return this._trackingEntryLearningThreExceed;
  }
}
export interface DataThunderDdosDstZoneOutboundPolicyOperOperPolicyClassListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_outbound_policy_oper#age_str DataThunderDdosDstZoneOutboundPolicyOper#age_str}
  */
  readonly ageStr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_outbound_policy_oper#class_list_name DataThunderDdosDstZoneOutboundPolicyOper#class_list_name}
  */
  readonly classListName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_outbound_policy_oper#connection_limit DataThunderDdosDstZoneOutboundPolicyOper#connection_limit}
  */
  readonly connectionLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_outbound_policy_oper#connection_rate_exceed DataThunderDdosDstZoneOutboundPolicyOper#connection_rate_exceed}
  */
  readonly connectionRateExceed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_outbound_policy_oper#connection_rate_limit DataThunderDdosDstZoneOutboundPolicyOper#connection_rate_limit}
  */
  readonly connectionRateLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_outbound_policy_oper#connections_exceed DataThunderDdosDstZoneOutboundPolicyOper#connections_exceed}
  */
  readonly connectionsExceed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_outbound_policy_oper#current_connection_rate DataThunderDdosDstZoneOutboundPolicyOper#current_connection_rate}
  */
  readonly currentConnectionRate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_outbound_policy_oper#current_connections DataThunderDdosDstZoneOutboundPolicyOper#current_connections}
  */
  readonly currentConnections?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_outbound_policy_oper#current_frag_packet_rate DataThunderDdosDstZoneOutboundPolicyOper#current_frag_packet_rate}
  */
  readonly currentFragPacketRate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_outbound_policy_oper#current_kbit_rate DataThunderDdosDstZoneOutboundPolicyOper#current_kbit_rate}
  */
  readonly currentKbitRate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_outbound_policy_oper#current_packet_rate DataThunderDdosDstZoneOutboundPolicyOper#current_packet_rate}
  */
  readonly currentPacketRate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_outbound_policy_oper#frag_packet_rate DataThunderDdosDstZoneOutboundPolicyOper#frag_packet_rate}
  */
  readonly fragPacketRate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_outbound_policy_oper#frag_packet_rate_limit DataThunderDdosDstZoneOutboundPolicyOper#frag_packet_rate_limit}
  */
  readonly fragPacketRateLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_outbound_policy_oper#is_connection_rate_exceed DataThunderDdosDstZoneOutboundPolicyOper#is_connection_rate_exceed}
  */
  readonly isConnectionRateExceed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_outbound_policy_oper#is_connections_exceed DataThunderDdosDstZoneOutboundPolicyOper#is_connections_exceed}
  */
  readonly isConnectionsExceed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_outbound_policy_oper#is_frag_packet_rate_exceed DataThunderDdosDstZoneOutboundPolicyOper#is_frag_packet_rate_exceed}
  */
  readonly isFragPacketRateExceed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_outbound_policy_oper#is_kbit_rate_exceed DataThunderDdosDstZoneOutboundPolicyOper#is_kbit_rate_exceed}
  */
  readonly isKbitRateExceed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_outbound_policy_oper#is_packet_rate_exceed DataThunderDdosDstZoneOutboundPolicyOper#is_packet_rate_exceed}
  */
  readonly isPacketRateExceed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_outbound_policy_oper#kbit_rate_exceed DataThunderDdosDstZoneOutboundPolicyOper#kbit_rate_exceed}
  */
  readonly kbitRateExceed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_outbound_policy_oper#kbit_rate_exceed_count DataThunderDdosDstZoneOutboundPolicyOper#kbit_rate_exceed_count}
  */
  readonly kbitRateExceedCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_outbound_policy_oper#kbit_rate_limit DataThunderDdosDstZoneOutboundPolicyOper#kbit_rate_limit}
  */
  readonly kbitRateLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_outbound_policy_oper#lockup_time DataThunderDdosDstZoneOutboundPolicyOper#lockup_time}
  */
  readonly lockupTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_outbound_policy_oper#packet_dropped DataThunderDdosDstZoneOutboundPolicyOper#packet_dropped}
  */
  readonly packetDropped?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_outbound_policy_oper#packet_rate_exceed DataThunderDdosDstZoneOutboundPolicyOper#packet_rate_exceed}
  */
  readonly packetRateExceed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_outbound_policy_oper#packet_rate_limit DataThunderDdosDstZoneOutboundPolicyOper#packet_rate_limit}
  */
  readonly packetRateLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_outbound_policy_oper#packet_received DataThunderDdosDstZoneOutboundPolicyOper#packet_received}
  */
  readonly packetReceived?: number;
}

export function dataThunderDdosDstZoneOutboundPolicyOperOperPolicyClassListStructToTerraform(struct?: DataThunderDdosDstZoneOutboundPolicyOperOperPolicyClassListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    age_str: cdktf.stringToTerraform(struct!.ageStr),
    class_list_name: cdktf.stringToTerraform(struct!.classListName),
    connection_limit: cdktf.stringToTerraform(struct!.connectionLimit),
    connection_rate_exceed: cdktf.numberToTerraform(struct!.connectionRateExceed),
    connection_rate_limit: cdktf.stringToTerraform(struct!.connectionRateLimit),
    connections_exceed: cdktf.numberToTerraform(struct!.connectionsExceed),
    current_connection_rate: cdktf.stringToTerraform(struct!.currentConnectionRate),
    current_connections: cdktf.stringToTerraform(struct!.currentConnections),
    current_frag_packet_rate: cdktf.stringToTerraform(struct!.currentFragPacketRate),
    current_kbit_rate: cdktf.stringToTerraform(struct!.currentKbitRate),
    current_packet_rate: cdktf.stringToTerraform(struct!.currentPacketRate),
    frag_packet_rate: cdktf.numberToTerraform(struct!.fragPacketRate),
    frag_packet_rate_limit: cdktf.stringToTerraform(struct!.fragPacketRateLimit),
    is_connection_rate_exceed: cdktf.numberToTerraform(struct!.isConnectionRateExceed),
    is_connections_exceed: cdktf.numberToTerraform(struct!.isConnectionsExceed),
    is_frag_packet_rate_exceed: cdktf.numberToTerraform(struct!.isFragPacketRateExceed),
    is_kbit_rate_exceed: cdktf.numberToTerraform(struct!.isKbitRateExceed),
    is_packet_rate_exceed: cdktf.numberToTerraform(struct!.isPacketRateExceed),
    kbit_rate_exceed: cdktf.numberToTerraform(struct!.kbitRateExceed),
    kbit_rate_exceed_count: cdktf.numberToTerraform(struct!.kbitRateExceedCount),
    kbit_rate_limit: cdktf.stringToTerraform(struct!.kbitRateLimit),
    lockup_time: cdktf.numberToTerraform(struct!.lockupTime),
    packet_dropped: cdktf.numberToTerraform(struct!.packetDropped),
    packet_rate_exceed: cdktf.numberToTerraform(struct!.packetRateExceed),
    packet_rate_limit: cdktf.stringToTerraform(struct!.packetRateLimit),
    packet_received: cdktf.numberToTerraform(struct!.packetReceived),
  }
}


export function dataThunderDdosDstZoneOutboundPolicyOperOperPolicyClassListStructToHclTerraform(struct?: DataThunderDdosDstZoneOutboundPolicyOperOperPolicyClassListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    age_str: {
      value: cdktf.stringToHclTerraform(struct!.ageStr),
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
    connection_limit: {
      value: cdktf.stringToHclTerraform(struct!.connectionLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connection_rate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.connectionRateExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    connection_rate_limit: {
      value: cdktf.stringToHclTerraform(struct!.connectionRateLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connections_exceed: {
      value: cdktf.numberToHclTerraform(struct!.connectionsExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    current_connection_rate: {
      value: cdktf.stringToHclTerraform(struct!.currentConnectionRate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    current_connections: {
      value: cdktf.stringToHclTerraform(struct!.currentConnections),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    current_frag_packet_rate: {
      value: cdktf.stringToHclTerraform(struct!.currentFragPacketRate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    current_kbit_rate: {
      value: cdktf.stringToHclTerraform(struct!.currentKbitRate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    current_packet_rate: {
      value: cdktf.stringToHclTerraform(struct!.currentPacketRate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    frag_packet_rate: {
      value: cdktf.numberToHclTerraform(struct!.fragPacketRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    frag_packet_rate_limit: {
      value: cdktf.stringToHclTerraform(struct!.fragPacketRateLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_connection_rate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.isConnectionRateExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_connections_exceed: {
      value: cdktf.numberToHclTerraform(struct!.isConnectionsExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_frag_packet_rate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.isFragPacketRateExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_kbit_rate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.isKbitRateExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_packet_rate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.isPacketRateExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kbit_rate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.kbitRateExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kbit_rate_exceed_count: {
      value: cdktf.numberToHclTerraform(struct!.kbitRateExceedCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kbit_rate_limit: {
      value: cdktf.stringToHclTerraform(struct!.kbitRateLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lockup_time: {
      value: cdktf.numberToHclTerraform(struct!.lockupTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    packet_dropped: {
      value: cdktf.numberToHclTerraform(struct!.packetDropped),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    packet_rate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.packetRateExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    packet_rate_limit: {
      value: cdktf.stringToHclTerraform(struct!.packetRateLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    packet_received: {
      value: cdktf.numberToHclTerraform(struct!.packetReceived),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDstZoneOutboundPolicyOperOperPolicyClassListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderDdosDstZoneOutboundPolicyOperOperPolicyClassListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ageStr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ageStr = this._ageStr;
    }
    if (this._classListName !== undefined) {
      hasAnyValues = true;
      internalValueResult.classListName = this._classListName;
    }
    if (this._connectionLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionLimit = this._connectionLimit;
    }
    if (this._connectionRateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionRateExceed = this._connectionRateExceed;
    }
    if (this._connectionRateLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionRateLimit = this._connectionRateLimit;
    }
    if (this._connectionsExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionsExceed = this._connectionsExceed;
    }
    if (this._currentConnectionRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentConnectionRate = this._currentConnectionRate;
    }
    if (this._currentConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentConnections = this._currentConnections;
    }
    if (this._currentFragPacketRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentFragPacketRate = this._currentFragPacketRate;
    }
    if (this._currentKbitRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentKbitRate = this._currentKbitRate;
    }
    if (this._currentPacketRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentPacketRate = this._currentPacketRate;
    }
    if (this._fragPacketRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.fragPacketRate = this._fragPacketRate;
    }
    if (this._fragPacketRateLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.fragPacketRateLimit = this._fragPacketRateLimit;
    }
    if (this._isConnectionRateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.isConnectionRateExceed = this._isConnectionRateExceed;
    }
    if (this._isConnectionsExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.isConnectionsExceed = this._isConnectionsExceed;
    }
    if (this._isFragPacketRateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.isFragPacketRateExceed = this._isFragPacketRateExceed;
    }
    if (this._isKbitRateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.isKbitRateExceed = this._isKbitRateExceed;
    }
    if (this._isPacketRateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.isPacketRateExceed = this._isPacketRateExceed;
    }
    if (this._kbitRateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.kbitRateExceed = this._kbitRateExceed;
    }
    if (this._kbitRateExceedCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.kbitRateExceedCount = this._kbitRateExceedCount;
    }
    if (this._kbitRateLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.kbitRateLimit = this._kbitRateLimit;
    }
    if (this._lockupTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.lockupTime = this._lockupTime;
    }
    if (this._packetDropped !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetDropped = this._packetDropped;
    }
    if (this._packetRateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetRateExceed = this._packetRateExceed;
    }
    if (this._packetRateLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetRateLimit = this._packetRateLimit;
    }
    if (this._packetReceived !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetReceived = this._packetReceived;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDstZoneOutboundPolicyOperOperPolicyClassListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ageStr = undefined;
      this._classListName = undefined;
      this._connectionLimit = undefined;
      this._connectionRateExceed = undefined;
      this._connectionRateLimit = undefined;
      this._connectionsExceed = undefined;
      this._currentConnectionRate = undefined;
      this._currentConnections = undefined;
      this._currentFragPacketRate = undefined;
      this._currentKbitRate = undefined;
      this._currentPacketRate = undefined;
      this._fragPacketRate = undefined;
      this._fragPacketRateLimit = undefined;
      this._isConnectionRateExceed = undefined;
      this._isConnectionsExceed = undefined;
      this._isFragPacketRateExceed = undefined;
      this._isKbitRateExceed = undefined;
      this._isPacketRateExceed = undefined;
      this._kbitRateExceed = undefined;
      this._kbitRateExceedCount = undefined;
      this._kbitRateLimit = undefined;
      this._lockupTime = undefined;
      this._packetDropped = undefined;
      this._packetRateExceed = undefined;
      this._packetRateLimit = undefined;
      this._packetReceived = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ageStr = value.ageStr;
      this._classListName = value.classListName;
      this._connectionLimit = value.connectionLimit;
      this._connectionRateExceed = value.connectionRateExceed;
      this._connectionRateLimit = value.connectionRateLimit;
      this._connectionsExceed = value.connectionsExceed;
      this._currentConnectionRate = value.currentConnectionRate;
      this._currentConnections = value.currentConnections;
      this._currentFragPacketRate = value.currentFragPacketRate;
      this._currentKbitRate = value.currentKbitRate;
      this._currentPacketRate = value.currentPacketRate;
      this._fragPacketRate = value.fragPacketRate;
      this._fragPacketRateLimit = value.fragPacketRateLimit;
      this._isConnectionRateExceed = value.isConnectionRateExceed;
      this._isConnectionsExceed = value.isConnectionsExceed;
      this._isFragPacketRateExceed = value.isFragPacketRateExceed;
      this._isKbitRateExceed = value.isKbitRateExceed;
      this._isPacketRateExceed = value.isPacketRateExceed;
      this._kbitRateExceed = value.kbitRateExceed;
      this._kbitRateExceedCount = value.kbitRateExceedCount;
      this._kbitRateLimit = value.kbitRateLimit;
      this._lockupTime = value.lockupTime;
      this._packetDropped = value.packetDropped;
      this._packetRateExceed = value.packetRateExceed;
      this._packetRateLimit = value.packetRateLimit;
      this._packetReceived = value.packetReceived;
    }
  }

  // age_str - computed: false, optional: true, required: false
  private _ageStr?: string; 
  public get ageStr() {
    return this.getStringAttribute('age_str');
  }
  public set ageStr(value: string) {
    this._ageStr = value;
  }
  public resetAgeStr() {
    this._ageStr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ageStrInput() {
    return this._ageStr;
  }

  // class_list_name - computed: false, optional: true, required: false
  private _classListName?: string; 
  public get classListName() {
    return this.getStringAttribute('class_list_name');
  }
  public set classListName(value: string) {
    this._classListName = value;
  }
  public resetClassListName() {
    this._classListName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classListNameInput() {
    return this._classListName;
  }

  // connection_limit - computed: false, optional: true, required: false
  private _connectionLimit?: string; 
  public get connectionLimit() {
    return this.getStringAttribute('connection_limit');
  }
  public set connectionLimit(value: string) {
    this._connectionLimit = value;
  }
  public resetConnectionLimit() {
    this._connectionLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionLimitInput() {
    return this._connectionLimit;
  }

  // connection_rate_exceed - computed: false, optional: true, required: false
  private _connectionRateExceed?: number; 
  public get connectionRateExceed() {
    return this.getNumberAttribute('connection_rate_exceed');
  }
  public set connectionRateExceed(value: number) {
    this._connectionRateExceed = value;
  }
  public resetConnectionRateExceed() {
    this._connectionRateExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionRateExceedInput() {
    return this._connectionRateExceed;
  }

  // connection_rate_limit - computed: false, optional: true, required: false
  private _connectionRateLimit?: string; 
  public get connectionRateLimit() {
    return this.getStringAttribute('connection_rate_limit');
  }
  public set connectionRateLimit(value: string) {
    this._connectionRateLimit = value;
  }
  public resetConnectionRateLimit() {
    this._connectionRateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionRateLimitInput() {
    return this._connectionRateLimit;
  }

  // connections_exceed - computed: false, optional: true, required: false
  private _connectionsExceed?: number; 
  public get connectionsExceed() {
    return this.getNumberAttribute('connections_exceed');
  }
  public set connectionsExceed(value: number) {
    this._connectionsExceed = value;
  }
  public resetConnectionsExceed() {
    this._connectionsExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionsExceedInput() {
    return this._connectionsExceed;
  }

  // current_connection_rate - computed: false, optional: true, required: false
  private _currentConnectionRate?: string; 
  public get currentConnectionRate() {
    return this.getStringAttribute('current_connection_rate');
  }
  public set currentConnectionRate(value: string) {
    this._currentConnectionRate = value;
  }
  public resetCurrentConnectionRate() {
    this._currentConnectionRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentConnectionRateInput() {
    return this._currentConnectionRate;
  }

  // current_connections - computed: false, optional: true, required: false
  private _currentConnections?: string; 
  public get currentConnections() {
    return this.getStringAttribute('current_connections');
  }
  public set currentConnections(value: string) {
    this._currentConnections = value;
  }
  public resetCurrentConnections() {
    this._currentConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentConnectionsInput() {
    return this._currentConnections;
  }

  // current_frag_packet_rate - computed: false, optional: true, required: false
  private _currentFragPacketRate?: string; 
  public get currentFragPacketRate() {
    return this.getStringAttribute('current_frag_packet_rate');
  }
  public set currentFragPacketRate(value: string) {
    this._currentFragPacketRate = value;
  }
  public resetCurrentFragPacketRate() {
    this._currentFragPacketRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentFragPacketRateInput() {
    return this._currentFragPacketRate;
  }

  // current_kbit_rate - computed: false, optional: true, required: false
  private _currentKbitRate?: string; 
  public get currentKbitRate() {
    return this.getStringAttribute('current_kbit_rate');
  }
  public set currentKbitRate(value: string) {
    this._currentKbitRate = value;
  }
  public resetCurrentKbitRate() {
    this._currentKbitRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentKbitRateInput() {
    return this._currentKbitRate;
  }

  // current_packet_rate - computed: false, optional: true, required: false
  private _currentPacketRate?: string; 
  public get currentPacketRate() {
    return this.getStringAttribute('current_packet_rate');
  }
  public set currentPacketRate(value: string) {
    this._currentPacketRate = value;
  }
  public resetCurrentPacketRate() {
    this._currentPacketRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentPacketRateInput() {
    return this._currentPacketRate;
  }

  // frag_packet_rate - computed: false, optional: true, required: false
  private _fragPacketRate?: number; 
  public get fragPacketRate() {
    return this.getNumberAttribute('frag_packet_rate');
  }
  public set fragPacketRate(value: number) {
    this._fragPacketRate = value;
  }
  public resetFragPacketRate() {
    this._fragPacketRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fragPacketRateInput() {
    return this._fragPacketRate;
  }

  // frag_packet_rate_limit - computed: false, optional: true, required: false
  private _fragPacketRateLimit?: string; 
  public get fragPacketRateLimit() {
    return this.getStringAttribute('frag_packet_rate_limit');
  }
  public set fragPacketRateLimit(value: string) {
    this._fragPacketRateLimit = value;
  }
  public resetFragPacketRateLimit() {
    this._fragPacketRateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fragPacketRateLimitInput() {
    return this._fragPacketRateLimit;
  }

  // is_connection_rate_exceed - computed: false, optional: true, required: false
  private _isConnectionRateExceed?: number; 
  public get isConnectionRateExceed() {
    return this.getNumberAttribute('is_connection_rate_exceed');
  }
  public set isConnectionRateExceed(value: number) {
    this._isConnectionRateExceed = value;
  }
  public resetIsConnectionRateExceed() {
    this._isConnectionRateExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isConnectionRateExceedInput() {
    return this._isConnectionRateExceed;
  }

  // is_connections_exceed - computed: false, optional: true, required: false
  private _isConnectionsExceed?: number; 
  public get isConnectionsExceed() {
    return this.getNumberAttribute('is_connections_exceed');
  }
  public set isConnectionsExceed(value: number) {
    this._isConnectionsExceed = value;
  }
  public resetIsConnectionsExceed() {
    this._isConnectionsExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isConnectionsExceedInput() {
    return this._isConnectionsExceed;
  }

  // is_frag_packet_rate_exceed - computed: false, optional: true, required: false
  private _isFragPacketRateExceed?: number; 
  public get isFragPacketRateExceed() {
    return this.getNumberAttribute('is_frag_packet_rate_exceed');
  }
  public set isFragPacketRateExceed(value: number) {
    this._isFragPacketRateExceed = value;
  }
  public resetIsFragPacketRateExceed() {
    this._isFragPacketRateExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isFragPacketRateExceedInput() {
    return this._isFragPacketRateExceed;
  }

  // is_kbit_rate_exceed - computed: false, optional: true, required: false
  private _isKbitRateExceed?: number; 
  public get isKbitRateExceed() {
    return this.getNumberAttribute('is_kbit_rate_exceed');
  }
  public set isKbitRateExceed(value: number) {
    this._isKbitRateExceed = value;
  }
  public resetIsKbitRateExceed() {
    this._isKbitRateExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isKbitRateExceedInput() {
    return this._isKbitRateExceed;
  }

  // is_packet_rate_exceed - computed: false, optional: true, required: false
  private _isPacketRateExceed?: number; 
  public get isPacketRateExceed() {
    return this.getNumberAttribute('is_packet_rate_exceed');
  }
  public set isPacketRateExceed(value: number) {
    this._isPacketRateExceed = value;
  }
  public resetIsPacketRateExceed() {
    this._isPacketRateExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPacketRateExceedInput() {
    return this._isPacketRateExceed;
  }

  // kbit_rate_exceed - computed: false, optional: true, required: false
  private _kbitRateExceed?: number; 
  public get kbitRateExceed() {
    return this.getNumberAttribute('kbit_rate_exceed');
  }
  public set kbitRateExceed(value: number) {
    this._kbitRateExceed = value;
  }
  public resetKbitRateExceed() {
    this._kbitRateExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kbitRateExceedInput() {
    return this._kbitRateExceed;
  }

  // kbit_rate_exceed_count - computed: false, optional: true, required: false
  private _kbitRateExceedCount?: number; 
  public get kbitRateExceedCount() {
    return this.getNumberAttribute('kbit_rate_exceed_count');
  }
  public set kbitRateExceedCount(value: number) {
    this._kbitRateExceedCount = value;
  }
  public resetKbitRateExceedCount() {
    this._kbitRateExceedCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kbitRateExceedCountInput() {
    return this._kbitRateExceedCount;
  }

  // kbit_rate_limit - computed: false, optional: true, required: false
  private _kbitRateLimit?: string; 
  public get kbitRateLimit() {
    return this.getStringAttribute('kbit_rate_limit');
  }
  public set kbitRateLimit(value: string) {
    this._kbitRateLimit = value;
  }
  public resetKbitRateLimit() {
    this._kbitRateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kbitRateLimitInput() {
    return this._kbitRateLimit;
  }

  // lockup_time - computed: false, optional: true, required: false
  private _lockupTime?: number; 
  public get lockupTime() {
    return this.getNumberAttribute('lockup_time');
  }
  public set lockupTime(value: number) {
    this._lockupTime = value;
  }
  public resetLockupTime() {
    this._lockupTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockupTimeInput() {
    return this._lockupTime;
  }

  // packet_dropped - computed: false, optional: true, required: false
  private _packetDropped?: number; 
  public get packetDropped() {
    return this.getNumberAttribute('packet_dropped');
  }
  public set packetDropped(value: number) {
    this._packetDropped = value;
  }
  public resetPacketDropped() {
    this._packetDropped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetDroppedInput() {
    return this._packetDropped;
  }

  // packet_rate_exceed - computed: false, optional: true, required: false
  private _packetRateExceed?: number; 
  public get packetRateExceed() {
    return this.getNumberAttribute('packet_rate_exceed');
  }
  public set packetRateExceed(value: number) {
    this._packetRateExceed = value;
  }
  public resetPacketRateExceed() {
    this._packetRateExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetRateExceedInput() {
    return this._packetRateExceed;
  }

  // packet_rate_limit - computed: false, optional: true, required: false
  private _packetRateLimit?: string; 
  public get packetRateLimit() {
    return this.getStringAttribute('packet_rate_limit');
  }
  public set packetRateLimit(value: string) {
    this._packetRateLimit = value;
  }
  public resetPacketRateLimit() {
    this._packetRateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetRateLimitInput() {
    return this._packetRateLimit;
  }

  // packet_received - computed: false, optional: true, required: false
  private _packetReceived?: number; 
  public get packetReceived() {
    return this.getNumberAttribute('packet_received');
  }
  public set packetReceived(value: number) {
    this._packetReceived = value;
  }
  public resetPacketReceived() {
    this._packetReceived = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetReceivedInput() {
    return this._packetReceived;
  }
}

export class DataThunderDdosDstZoneOutboundPolicyOperOperPolicyClassListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderDdosDstZoneOutboundPolicyOperOperPolicyClassListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderDdosDstZoneOutboundPolicyOperOperPolicyClassListStructOutputReference {
    return new DataThunderDdosDstZoneOutboundPolicyOperOperPolicyClassListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderDdosDstZoneOutboundPolicyOperOperTrackingEntryListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_outbound_policy_oper#age DataThunderDdosDstZoneOutboundPolicyOper#age}
  */
  readonly age?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_outbound_policy_oper#connection_limit DataThunderDdosDstZoneOutboundPolicyOper#connection_limit}
  */
  readonly connectionLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_outbound_policy_oper#connection_rate_limit DataThunderDdosDstZoneOutboundPolicyOper#connection_rate_limit}
  */
  readonly connectionRateLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_outbound_policy_oper#current_connection_rate DataThunderDdosDstZoneOutboundPolicyOper#current_connection_rate}
  */
  readonly currentConnectionRate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_outbound_policy_oper#current_connections DataThunderDdosDstZoneOutboundPolicyOper#current_connections}
  */
  readonly currentConnections?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_outbound_policy_oper#current_frag_packet_rate DataThunderDdosDstZoneOutboundPolicyOper#current_frag_packet_rate}
  */
  readonly currentFragPacketRate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_outbound_policy_oper#current_kbit_rate DataThunderDdosDstZoneOutboundPolicyOper#current_kbit_rate}
  */
  readonly currentKbitRate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_outbound_policy_oper#current_packet_rate DataThunderDdosDstZoneOutboundPolicyOper#current_packet_rate}
  */
  readonly currentPacketRate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_outbound_policy_oper#frag_packet_rate_limit DataThunderDdosDstZoneOutboundPolicyOper#frag_packet_rate_limit}
  */
  readonly fragPacketRateLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_outbound_policy_oper#geo_location_name DataThunderDdosDstZoneOutboundPolicyOper#geo_location_name}
  */
  readonly geoLocationName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_outbound_policy_oper#is_connection_rate_exceed DataThunderDdosDstZoneOutboundPolicyOper#is_connection_rate_exceed}
  */
  readonly isConnectionRateExceed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_outbound_policy_oper#is_connections_exceed DataThunderDdosDstZoneOutboundPolicyOper#is_connections_exceed}
  */
  readonly isConnectionsExceed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_outbound_policy_oper#is_frag_packet_rate_exceed DataThunderDdosDstZoneOutboundPolicyOper#is_frag_packet_rate_exceed}
  */
  readonly isFragPacketRateExceed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_outbound_policy_oper#is_kbit_rate_exceed DataThunderDdosDstZoneOutboundPolicyOper#is_kbit_rate_exceed}
  */
  readonly isKbitRateExceed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_outbound_policy_oper#is_packet_rate_exceed DataThunderDdosDstZoneOutboundPolicyOper#is_packet_rate_exceed}
  */
  readonly isPacketRateExceed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_outbound_policy_oper#kbit_rate_limit DataThunderDdosDstZoneOutboundPolicyOper#kbit_rate_limit}
  */
  readonly kbitRateLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_outbound_policy_oper#packet_rate_limit DataThunderDdosDstZoneOutboundPolicyOper#packet_rate_limit}
  */
  readonly packetRateLimit?: string;
}

export function dataThunderDdosDstZoneOutboundPolicyOperOperTrackingEntryListStructToTerraform(struct?: DataThunderDdosDstZoneOutboundPolicyOperOperTrackingEntryListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    age: cdktf.numberToTerraform(struct!.age),
    connection_limit: cdktf.stringToTerraform(struct!.connectionLimit),
    connection_rate_limit: cdktf.stringToTerraform(struct!.connectionRateLimit),
    current_connection_rate: cdktf.stringToTerraform(struct!.currentConnectionRate),
    current_connections: cdktf.stringToTerraform(struct!.currentConnections),
    current_frag_packet_rate: cdktf.stringToTerraform(struct!.currentFragPacketRate),
    current_kbit_rate: cdktf.stringToTerraform(struct!.currentKbitRate),
    current_packet_rate: cdktf.stringToTerraform(struct!.currentPacketRate),
    frag_packet_rate_limit: cdktf.stringToTerraform(struct!.fragPacketRateLimit),
    geo_location_name: cdktf.stringToTerraform(struct!.geoLocationName),
    is_connection_rate_exceed: cdktf.numberToTerraform(struct!.isConnectionRateExceed),
    is_connections_exceed: cdktf.numberToTerraform(struct!.isConnectionsExceed),
    is_frag_packet_rate_exceed: cdktf.numberToTerraform(struct!.isFragPacketRateExceed),
    is_kbit_rate_exceed: cdktf.numberToTerraform(struct!.isKbitRateExceed),
    is_packet_rate_exceed: cdktf.numberToTerraform(struct!.isPacketRateExceed),
    kbit_rate_limit: cdktf.stringToTerraform(struct!.kbitRateLimit),
    packet_rate_limit: cdktf.stringToTerraform(struct!.packetRateLimit),
  }
}


export function dataThunderDdosDstZoneOutboundPolicyOperOperTrackingEntryListStructToHclTerraform(struct?: DataThunderDdosDstZoneOutboundPolicyOperOperTrackingEntryListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    age: {
      value: cdktf.numberToHclTerraform(struct!.age),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    connection_limit: {
      value: cdktf.stringToHclTerraform(struct!.connectionLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connection_rate_limit: {
      value: cdktf.stringToHclTerraform(struct!.connectionRateLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    current_connection_rate: {
      value: cdktf.stringToHclTerraform(struct!.currentConnectionRate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    current_connections: {
      value: cdktf.stringToHclTerraform(struct!.currentConnections),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    current_frag_packet_rate: {
      value: cdktf.stringToHclTerraform(struct!.currentFragPacketRate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    current_kbit_rate: {
      value: cdktf.stringToHclTerraform(struct!.currentKbitRate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    current_packet_rate: {
      value: cdktf.stringToHclTerraform(struct!.currentPacketRate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    frag_packet_rate_limit: {
      value: cdktf.stringToHclTerraform(struct!.fragPacketRateLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    geo_location_name: {
      value: cdktf.stringToHclTerraform(struct!.geoLocationName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_connection_rate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.isConnectionRateExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_connections_exceed: {
      value: cdktf.numberToHclTerraform(struct!.isConnectionsExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_frag_packet_rate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.isFragPacketRateExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_kbit_rate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.isKbitRateExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_packet_rate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.isPacketRateExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kbit_rate_limit: {
      value: cdktf.stringToHclTerraform(struct!.kbitRateLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    packet_rate_limit: {
      value: cdktf.stringToHclTerraform(struct!.packetRateLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDstZoneOutboundPolicyOperOperTrackingEntryListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderDdosDstZoneOutboundPolicyOperOperTrackingEntryListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._age !== undefined) {
      hasAnyValues = true;
      internalValueResult.age = this._age;
    }
    if (this._connectionLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionLimit = this._connectionLimit;
    }
    if (this._connectionRateLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionRateLimit = this._connectionRateLimit;
    }
    if (this._currentConnectionRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentConnectionRate = this._currentConnectionRate;
    }
    if (this._currentConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentConnections = this._currentConnections;
    }
    if (this._currentFragPacketRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentFragPacketRate = this._currentFragPacketRate;
    }
    if (this._currentKbitRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentKbitRate = this._currentKbitRate;
    }
    if (this._currentPacketRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentPacketRate = this._currentPacketRate;
    }
    if (this._fragPacketRateLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.fragPacketRateLimit = this._fragPacketRateLimit;
    }
    if (this._geoLocationName !== undefined) {
      hasAnyValues = true;
      internalValueResult.geoLocationName = this._geoLocationName;
    }
    if (this._isConnectionRateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.isConnectionRateExceed = this._isConnectionRateExceed;
    }
    if (this._isConnectionsExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.isConnectionsExceed = this._isConnectionsExceed;
    }
    if (this._isFragPacketRateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.isFragPacketRateExceed = this._isFragPacketRateExceed;
    }
    if (this._isKbitRateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.isKbitRateExceed = this._isKbitRateExceed;
    }
    if (this._isPacketRateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.isPacketRateExceed = this._isPacketRateExceed;
    }
    if (this._kbitRateLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.kbitRateLimit = this._kbitRateLimit;
    }
    if (this._packetRateLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetRateLimit = this._packetRateLimit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDstZoneOutboundPolicyOperOperTrackingEntryListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._age = undefined;
      this._connectionLimit = undefined;
      this._connectionRateLimit = undefined;
      this._currentConnectionRate = undefined;
      this._currentConnections = undefined;
      this._currentFragPacketRate = undefined;
      this._currentKbitRate = undefined;
      this._currentPacketRate = undefined;
      this._fragPacketRateLimit = undefined;
      this._geoLocationName = undefined;
      this._isConnectionRateExceed = undefined;
      this._isConnectionsExceed = undefined;
      this._isFragPacketRateExceed = undefined;
      this._isKbitRateExceed = undefined;
      this._isPacketRateExceed = undefined;
      this._kbitRateLimit = undefined;
      this._packetRateLimit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._age = value.age;
      this._connectionLimit = value.connectionLimit;
      this._connectionRateLimit = value.connectionRateLimit;
      this._currentConnectionRate = value.currentConnectionRate;
      this._currentConnections = value.currentConnections;
      this._currentFragPacketRate = value.currentFragPacketRate;
      this._currentKbitRate = value.currentKbitRate;
      this._currentPacketRate = value.currentPacketRate;
      this._fragPacketRateLimit = value.fragPacketRateLimit;
      this._geoLocationName = value.geoLocationName;
      this._isConnectionRateExceed = value.isConnectionRateExceed;
      this._isConnectionsExceed = value.isConnectionsExceed;
      this._isFragPacketRateExceed = value.isFragPacketRateExceed;
      this._isKbitRateExceed = value.isKbitRateExceed;
      this._isPacketRateExceed = value.isPacketRateExceed;
      this._kbitRateLimit = value.kbitRateLimit;
      this._packetRateLimit = value.packetRateLimit;
    }
  }

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

  // connection_limit - computed: false, optional: true, required: false
  private _connectionLimit?: string; 
  public get connectionLimit() {
    return this.getStringAttribute('connection_limit');
  }
  public set connectionLimit(value: string) {
    this._connectionLimit = value;
  }
  public resetConnectionLimit() {
    this._connectionLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionLimitInput() {
    return this._connectionLimit;
  }

  // connection_rate_limit - computed: false, optional: true, required: false
  private _connectionRateLimit?: string; 
  public get connectionRateLimit() {
    return this.getStringAttribute('connection_rate_limit');
  }
  public set connectionRateLimit(value: string) {
    this._connectionRateLimit = value;
  }
  public resetConnectionRateLimit() {
    this._connectionRateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionRateLimitInput() {
    return this._connectionRateLimit;
  }

  // current_connection_rate - computed: false, optional: true, required: false
  private _currentConnectionRate?: string; 
  public get currentConnectionRate() {
    return this.getStringAttribute('current_connection_rate');
  }
  public set currentConnectionRate(value: string) {
    this._currentConnectionRate = value;
  }
  public resetCurrentConnectionRate() {
    this._currentConnectionRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentConnectionRateInput() {
    return this._currentConnectionRate;
  }

  // current_connections - computed: false, optional: true, required: false
  private _currentConnections?: string; 
  public get currentConnections() {
    return this.getStringAttribute('current_connections');
  }
  public set currentConnections(value: string) {
    this._currentConnections = value;
  }
  public resetCurrentConnections() {
    this._currentConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentConnectionsInput() {
    return this._currentConnections;
  }

  // current_frag_packet_rate - computed: false, optional: true, required: false
  private _currentFragPacketRate?: string; 
  public get currentFragPacketRate() {
    return this.getStringAttribute('current_frag_packet_rate');
  }
  public set currentFragPacketRate(value: string) {
    this._currentFragPacketRate = value;
  }
  public resetCurrentFragPacketRate() {
    this._currentFragPacketRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentFragPacketRateInput() {
    return this._currentFragPacketRate;
  }

  // current_kbit_rate - computed: false, optional: true, required: false
  private _currentKbitRate?: string; 
  public get currentKbitRate() {
    return this.getStringAttribute('current_kbit_rate');
  }
  public set currentKbitRate(value: string) {
    this._currentKbitRate = value;
  }
  public resetCurrentKbitRate() {
    this._currentKbitRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentKbitRateInput() {
    return this._currentKbitRate;
  }

  // current_packet_rate - computed: false, optional: true, required: false
  private _currentPacketRate?: string; 
  public get currentPacketRate() {
    return this.getStringAttribute('current_packet_rate');
  }
  public set currentPacketRate(value: string) {
    this._currentPacketRate = value;
  }
  public resetCurrentPacketRate() {
    this._currentPacketRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentPacketRateInput() {
    return this._currentPacketRate;
  }

  // frag_packet_rate_limit - computed: false, optional: true, required: false
  private _fragPacketRateLimit?: string; 
  public get fragPacketRateLimit() {
    return this.getStringAttribute('frag_packet_rate_limit');
  }
  public set fragPacketRateLimit(value: string) {
    this._fragPacketRateLimit = value;
  }
  public resetFragPacketRateLimit() {
    this._fragPacketRateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fragPacketRateLimitInput() {
    return this._fragPacketRateLimit;
  }

  // geo_location_name - computed: false, optional: true, required: false
  private _geoLocationName?: string; 
  public get geoLocationName() {
    return this.getStringAttribute('geo_location_name');
  }
  public set geoLocationName(value: string) {
    this._geoLocationName = value;
  }
  public resetGeoLocationName() {
    this._geoLocationName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoLocationNameInput() {
    return this._geoLocationName;
  }

  // is_connection_rate_exceed - computed: false, optional: true, required: false
  private _isConnectionRateExceed?: number; 
  public get isConnectionRateExceed() {
    return this.getNumberAttribute('is_connection_rate_exceed');
  }
  public set isConnectionRateExceed(value: number) {
    this._isConnectionRateExceed = value;
  }
  public resetIsConnectionRateExceed() {
    this._isConnectionRateExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isConnectionRateExceedInput() {
    return this._isConnectionRateExceed;
  }

  // is_connections_exceed - computed: false, optional: true, required: false
  private _isConnectionsExceed?: number; 
  public get isConnectionsExceed() {
    return this.getNumberAttribute('is_connections_exceed');
  }
  public set isConnectionsExceed(value: number) {
    this._isConnectionsExceed = value;
  }
  public resetIsConnectionsExceed() {
    this._isConnectionsExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isConnectionsExceedInput() {
    return this._isConnectionsExceed;
  }

  // is_frag_packet_rate_exceed - computed: false, optional: true, required: false
  private _isFragPacketRateExceed?: number; 
  public get isFragPacketRateExceed() {
    return this.getNumberAttribute('is_frag_packet_rate_exceed');
  }
  public set isFragPacketRateExceed(value: number) {
    this._isFragPacketRateExceed = value;
  }
  public resetIsFragPacketRateExceed() {
    this._isFragPacketRateExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isFragPacketRateExceedInput() {
    return this._isFragPacketRateExceed;
  }

  // is_kbit_rate_exceed - computed: false, optional: true, required: false
  private _isKbitRateExceed?: number; 
  public get isKbitRateExceed() {
    return this.getNumberAttribute('is_kbit_rate_exceed');
  }
  public set isKbitRateExceed(value: number) {
    this._isKbitRateExceed = value;
  }
  public resetIsKbitRateExceed() {
    this._isKbitRateExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isKbitRateExceedInput() {
    return this._isKbitRateExceed;
  }

  // is_packet_rate_exceed - computed: false, optional: true, required: false
  private _isPacketRateExceed?: number; 
  public get isPacketRateExceed() {
    return this.getNumberAttribute('is_packet_rate_exceed');
  }
  public set isPacketRateExceed(value: number) {
    this._isPacketRateExceed = value;
  }
  public resetIsPacketRateExceed() {
    this._isPacketRateExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPacketRateExceedInput() {
    return this._isPacketRateExceed;
  }

  // kbit_rate_limit - computed: false, optional: true, required: false
  private _kbitRateLimit?: string; 
  public get kbitRateLimit() {
    return this.getStringAttribute('kbit_rate_limit');
  }
  public set kbitRateLimit(value: string) {
    this._kbitRateLimit = value;
  }
  public resetKbitRateLimit() {
    this._kbitRateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kbitRateLimitInput() {
    return this._kbitRateLimit;
  }

  // packet_rate_limit - computed: false, optional: true, required: false
  private _packetRateLimit?: string; 
  public get packetRateLimit() {
    return this.getStringAttribute('packet_rate_limit');
  }
  public set packetRateLimit(value: string) {
    this._packetRateLimit = value;
  }
  public resetPacketRateLimit() {
    this._packetRateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetRateLimitInput() {
    return this._packetRateLimit;
  }
}

export class DataThunderDdosDstZoneOutboundPolicyOperOperTrackingEntryListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderDdosDstZoneOutboundPolicyOperOperTrackingEntryListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderDdosDstZoneOutboundPolicyOperOperTrackingEntryListStructOutputReference {
    return new DataThunderDdosDstZoneOutboundPolicyOperOperTrackingEntryListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderDdosDstZoneOutboundPolicyOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_outbound_policy_oper#no_class_list_match DataThunderDdosDstZoneOutboundPolicyOper#no_class_list_match}
  */
  readonly noClassListMatch?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_outbound_policy_oper#policy_name DataThunderDdosDstZoneOutboundPolicyOper#policy_name}
  */
  readonly policyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_outbound_policy_oper#policy_rate DataThunderDdosDstZoneOutboundPolicyOper#policy_rate}
  */
  readonly policyRate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_outbound_policy_oper#policy_statistics DataThunderDdosDstZoneOutboundPolicyOper#policy_statistics}
  */
  readonly policyStatistics?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_outbound_policy_oper#tracking_entry_filter DataThunderDdosDstZoneOutboundPolicyOper#tracking_entry_filter}
  */
  readonly trackingEntryFilter?: number;
  /**
  * geo_tracking_statistics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_outbound_policy_oper#geo_tracking_statistics DataThunderDdosDstZoneOutboundPolicyOper#geo_tracking_statistics}
  */
  readonly geoTrackingStatistics?: DataThunderDdosDstZoneOutboundPolicyOperOperGeoTrackingStatistics;
  /**
  * policy_class_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_outbound_policy_oper#policy_class_list DataThunderDdosDstZoneOutboundPolicyOper#policy_class_list}
  */
  readonly policyClassList?: DataThunderDdosDstZoneOutboundPolicyOperOperPolicyClassListStruct[] | cdktf.IResolvable;
  /**
  * tracking_entry_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_outbound_policy_oper#tracking_entry_list DataThunderDdosDstZoneOutboundPolicyOper#tracking_entry_list}
  */
  readonly trackingEntryList?: DataThunderDdosDstZoneOutboundPolicyOperOperTrackingEntryListStruct[] | cdktf.IResolvable;
}

export function dataThunderDdosDstZoneOutboundPolicyOperOperToTerraform(struct?: DataThunderDdosDstZoneOutboundPolicyOperOperOutputReference | DataThunderDdosDstZoneOutboundPolicyOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    no_class_list_match: cdktf.numberToTerraform(struct!.noClassListMatch),
    policy_name: cdktf.stringToTerraform(struct!.policyName),
    policy_rate: cdktf.numberToTerraform(struct!.policyRate),
    policy_statistics: cdktf.numberToTerraform(struct!.policyStatistics),
    tracking_entry_filter: cdktf.numberToTerraform(struct!.trackingEntryFilter),
    geo_tracking_statistics: dataThunderDdosDstZoneOutboundPolicyOperOperGeoTrackingStatisticsToTerraform(struct!.geoTrackingStatistics),
    policy_class_list: cdktf.listMapper(dataThunderDdosDstZoneOutboundPolicyOperOperPolicyClassListStructToTerraform, true)(struct!.policyClassList),
    tracking_entry_list: cdktf.listMapper(dataThunderDdosDstZoneOutboundPolicyOperOperTrackingEntryListStructToTerraform, true)(struct!.trackingEntryList),
  }
}


export function dataThunderDdosDstZoneOutboundPolicyOperOperToHclTerraform(struct?: DataThunderDdosDstZoneOutboundPolicyOperOperOutputReference | DataThunderDdosDstZoneOutboundPolicyOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    no_class_list_match: {
      value: cdktf.numberToHclTerraform(struct!.noClassListMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    policy_name: {
      value: cdktf.stringToHclTerraform(struct!.policyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policy_rate: {
      value: cdktf.numberToHclTerraform(struct!.policyRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    policy_statistics: {
      value: cdktf.numberToHclTerraform(struct!.policyStatistics),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tracking_entry_filter: {
      value: cdktf.numberToHclTerraform(struct!.trackingEntryFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    geo_tracking_statistics: {
      value: dataThunderDdosDstZoneOutboundPolicyOperOperGeoTrackingStatisticsToHclTerraform(struct!.geoTrackingStatistics),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosDstZoneOutboundPolicyOperOperGeoTrackingStatisticsList",
    },
    policy_class_list: {
      value: cdktf.listMapperHcl(dataThunderDdosDstZoneOutboundPolicyOperOperPolicyClassListStructToHclTerraform, true)(struct!.policyClassList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosDstZoneOutboundPolicyOperOperPolicyClassListStructList",
    },
    tracking_entry_list: {
      value: cdktf.listMapperHcl(dataThunderDdosDstZoneOutboundPolicyOperOperTrackingEntryListStructToHclTerraform, true)(struct!.trackingEntryList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosDstZoneOutboundPolicyOperOperTrackingEntryListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDstZoneOutboundPolicyOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderDdosDstZoneOutboundPolicyOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._noClassListMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.noClassListMatch = this._noClassListMatch;
    }
    if (this._policyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyName = this._policyName;
    }
    if (this._policyRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyRate = this._policyRate;
    }
    if (this._policyStatistics !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyStatistics = this._policyStatistics;
    }
    if (this._trackingEntryFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.trackingEntryFilter = this._trackingEntryFilter;
    }
    if (this._geoTrackingStatistics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.geoTrackingStatistics = this._geoTrackingStatistics?.internalValue;
    }
    if (this._policyClassList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyClassList = this._policyClassList?.internalValue;
    }
    if (this._trackingEntryList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trackingEntryList = this._trackingEntryList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDstZoneOutboundPolicyOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._noClassListMatch = undefined;
      this._policyName = undefined;
      this._policyRate = undefined;
      this._policyStatistics = undefined;
      this._trackingEntryFilter = undefined;
      this._geoTrackingStatistics.internalValue = undefined;
      this._policyClassList.internalValue = undefined;
      this._trackingEntryList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._noClassListMatch = value.noClassListMatch;
      this._policyName = value.policyName;
      this._policyRate = value.policyRate;
      this._policyStatistics = value.policyStatistics;
      this._trackingEntryFilter = value.trackingEntryFilter;
      this._geoTrackingStatistics.internalValue = value.geoTrackingStatistics;
      this._policyClassList.internalValue = value.policyClassList;
      this._trackingEntryList.internalValue = value.trackingEntryList;
    }
  }

  // no_class_list_match - computed: false, optional: true, required: false
  private _noClassListMatch?: number; 
  public get noClassListMatch() {
    return this.getNumberAttribute('no_class_list_match');
  }
  public set noClassListMatch(value: number) {
    this._noClassListMatch = value;
  }
  public resetNoClassListMatch() {
    this._noClassListMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noClassListMatchInput() {
    return this._noClassListMatch;
  }

  // policy_name - computed: false, optional: true, required: false
  private _policyName?: string; 
  public get policyName() {
    return this.getStringAttribute('policy_name');
  }
  public set policyName(value: string) {
    this._policyName = value;
  }
  public resetPolicyName() {
    this._policyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyNameInput() {
    return this._policyName;
  }

  // policy_rate - computed: false, optional: true, required: false
  private _policyRate?: number; 
  public get policyRate() {
    return this.getNumberAttribute('policy_rate');
  }
  public set policyRate(value: number) {
    this._policyRate = value;
  }
  public resetPolicyRate() {
    this._policyRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyRateInput() {
    return this._policyRate;
  }

  // policy_statistics - computed: false, optional: true, required: false
  private _policyStatistics?: number; 
  public get policyStatistics() {
    return this.getNumberAttribute('policy_statistics');
  }
  public set policyStatistics(value: number) {
    this._policyStatistics = value;
  }
  public resetPolicyStatistics() {
    this._policyStatistics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyStatisticsInput() {
    return this._policyStatistics;
  }

  // tracking_entry_filter - computed: false, optional: true, required: false
  private _trackingEntryFilter?: number; 
  public get trackingEntryFilter() {
    return this.getNumberAttribute('tracking_entry_filter');
  }
  public set trackingEntryFilter(value: number) {
    this._trackingEntryFilter = value;
  }
  public resetTrackingEntryFilter() {
    this._trackingEntryFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackingEntryFilterInput() {
    return this._trackingEntryFilter;
  }

  // geo_tracking_statistics - computed: false, optional: true, required: false
  private _geoTrackingStatistics = new DataThunderDdosDstZoneOutboundPolicyOperOperGeoTrackingStatisticsOutputReference(this, "geo_tracking_statistics");
  public get geoTrackingStatistics() {
    return this._geoTrackingStatistics;
  }
  public putGeoTrackingStatistics(value: DataThunderDdosDstZoneOutboundPolicyOperOperGeoTrackingStatistics) {
    this._geoTrackingStatistics.internalValue = value;
  }
  public resetGeoTrackingStatistics() {
    this._geoTrackingStatistics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoTrackingStatisticsInput() {
    return this._geoTrackingStatistics.internalValue;
  }

  // policy_class_list - computed: false, optional: true, required: false
  private _policyClassList = new DataThunderDdosDstZoneOutboundPolicyOperOperPolicyClassListStructList(this, "policy_class_list", false);
  public get policyClassList() {
    return this._policyClassList;
  }
  public putPolicyClassList(value: DataThunderDdosDstZoneOutboundPolicyOperOperPolicyClassListStruct[] | cdktf.IResolvable) {
    this._policyClassList.internalValue = value;
  }
  public resetPolicyClassList() {
    this._policyClassList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyClassListInput() {
    return this._policyClassList.internalValue;
  }

  // tracking_entry_list - computed: false, optional: true, required: false
  private _trackingEntryList = new DataThunderDdosDstZoneOutboundPolicyOperOperTrackingEntryListStructList(this, "tracking_entry_list", false);
  public get trackingEntryList() {
    return this._trackingEntryList;
  }
  public putTrackingEntryList(value: DataThunderDdosDstZoneOutboundPolicyOperOperTrackingEntryListStruct[] | cdktf.IResolvable) {
    this._trackingEntryList.internalValue = value;
  }
  public resetTrackingEntryList() {
    this._trackingEntryList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackingEntryListInput() {
    return this._trackingEntryList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_outbound_policy_oper thunder_ddos_dst_zone_outbound_policy_oper}
*/
export class DataThunderDdosDstZoneOutboundPolicyOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_dst_zone_outbound_policy_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderDdosDstZoneOutboundPolicyOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderDdosDstZoneOutboundPolicyOper to import
  * @param importFromId The id of the existing DataThunderDdosDstZoneOutboundPolicyOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_outbound_policy_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderDdosDstZoneOutboundPolicyOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_dst_zone_outbound_policy_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_outbound_policy_oper thunder_ddos_dst_zone_outbound_policy_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderDdosDstZoneOutboundPolicyOperConfig
  */
  public constructor(scope: Construct, id: string, config: DataThunderDdosDstZoneOutboundPolicyOperConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_dst_zone_outbound_policy_oper',
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
    this._zoneName = config.zoneName;
    this._oper.internalValue = config.oper;
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

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderDdosDstZoneOutboundPolicyOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderDdosDstZoneOutboundPolicyOperOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      zone_name: cdktf.stringToTerraform(this._zoneName),
      oper: dataThunderDdosDstZoneOutboundPolicyOperOperToTerraform(this._oper.internalValue),
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
      zone_name: {
        value: cdktf.stringToHclTerraform(this._zoneName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oper: {
        value: dataThunderDdosDstZoneOutboundPolicyOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderDdosDstZoneOutboundPolicyOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
