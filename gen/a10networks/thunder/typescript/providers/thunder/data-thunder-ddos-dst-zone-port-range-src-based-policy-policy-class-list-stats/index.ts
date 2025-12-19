// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_range_src_based_policy_policy_class_list_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderDdosDstZonePortRangeSrcBasedPolicyPolicyClassListStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Class-list name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_range_src_based_policy_policy_class_list_stats#class_list_name DataThunderDdosDstZonePortRangeSrcBasedPolicyPolicyClassListStats#class_list_name}
  */
  readonly classListName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_range_src_based_policy_policy_class_list_stats#id DataThunderDdosDstZonePortRangeSrcBasedPolicyPolicyClassListStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * PortRangeEnd
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_range_src_based_policy_policy_class_list_stats#port_range_end DataThunderDdosDstZonePortRangeSrcBasedPolicyPolicyClassListStats#port_range_end}
  */
  readonly portRangeEnd: string;
  /**
  * PortRangeStart
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_range_src_based_policy_policy_class_list_stats#port_range_start DataThunderDdosDstZonePortRangeSrcBasedPolicyPolicyClassListStats#port_range_start}
  */
  readonly portRangeStart: string;
  /**
  * Protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_range_src_based_policy_policy_class_list_stats#protocol DataThunderDdosDstZonePortRangeSrcBasedPolicyPolicyClassListStats#protocol}
  */
  readonly protocol: string;
  /**
  * SrcBasedPolicyName
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_range_src_based_policy_policy_class_list_stats#src_based_policy_name DataThunderDdosDstZonePortRangeSrcBasedPolicyPolicyClassListStats#src_based_policy_name}
  */
  readonly srcBasedPolicyName: string;
  /**
  * ZoneName
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_range_src_based_policy_policy_class_list_stats#zone_name DataThunderDdosDstZonePortRangeSrcBasedPolicyPolicyClassListStats#zone_name}
  */
  readonly zoneName: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_range_src_based_policy_policy_class_list_stats#stats DataThunderDdosDstZonePortRangeSrcBasedPolicyPolicyClassListStats#stats}
  */
  readonly stats?: DataThunderDdosDstZonePortRangeSrcBasedPolicyPolicyClassListStatsStats;
}
export interface DataThunderDdosDstZonePortRangeSrcBasedPolicyPolicyClassListStatsStats {
  /**
  * Entry Count Overflow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_range_src_based_policy_policy_class_list_stats#entry_count_overflow DataThunderDdosDstZonePortRangeSrcBasedPolicyPolicyClassListStats#entry_count_overflow}
  */
  readonly entryCountOverflow?: number;
  /**
  * Entry Learned
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_range_src_based_policy_policy_class_list_stats#entry_learned DataThunderDdosDstZonePortRangeSrcBasedPolicyPolicyClassListStats#entry_learned}
  */
  readonly entryLearned?: number;
  /**
  * Conn Limit Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_range_src_based_policy_policy_class_list_stats#exceed_drop_conn_limit_clist DataThunderDdosDstZonePortRangeSrcBasedPolicyPolicyClassListStats#exceed_drop_conn_limit_clist}
  */
  readonly exceedDropConnLimitClist?: number;
  /**
  * Conn Rate Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_range_src_based_policy_policy_class_list_stats#exceed_drop_conn_rate_clist DataThunderDdosDstZonePortRangeSrcBasedPolicyPolicyClassListStats#exceed_drop_conn_rate_clist}
  */
  readonly exceedDropConnRateClist?: number;
  /**
  * Frag Rate Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_range_src_based_policy_policy_class_list_stats#exceed_drop_frag_rate_clist DataThunderDdosDstZonePortRangeSrcBasedPolicyPolicyClassListStats#exceed_drop_frag_rate_clist}
  */
  readonly exceedDropFragRateClist?: number;
  /**
  * KiBit Rate Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_range_src_based_policy_policy_class_list_stats#exceed_drop_kbit_rate_clist DataThunderDdosDstZonePortRangeSrcBasedPolicyPolicyClassListStats#exceed_drop_kbit_rate_clist}
  */
  readonly exceedDropKbitRateClist?: number;
  /**
  * KiBit Rate Exceeded Count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_range_src_based_policy_policy_class_list_stats#exceed_drop_kbit_rate_clist_pkt DataThunderDdosDstZonePortRangeSrcBasedPolicyPolicyClassListStats#exceed_drop_kbit_rate_clist_pkt}
  */
  readonly exceedDropKbitRateClistPkt?: number;
  /**
  * Packet Rate Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_range_src_based_policy_policy_class_list_stats#exceed_drop_pkt_rate_clist DataThunderDdosDstZonePortRangeSrcBasedPolicyPolicyClassListStats#exceed_drop_pkt_rate_clist}
  */
  readonly exceedDropPktRateClist?: number;
  /**
  * Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_range_src_based_policy_policy_class_list_stats#packet_dropped DataThunderDdosDstZonePortRangeSrcBasedPolicyPolicyClassListStats#packet_dropped}
  */
  readonly packetDropped?: number;
  /**
  * Packets Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_range_src_based_policy_policy_class_list_stats#packet_received DataThunderDdosDstZonePortRangeSrcBasedPolicyPolicyClassListStats#packet_received}
  */
  readonly packetReceived?: number;
}

export function dataThunderDdosDstZonePortRangeSrcBasedPolicyPolicyClassListStatsStatsToTerraform(struct?: DataThunderDdosDstZonePortRangeSrcBasedPolicyPolicyClassListStatsStatsOutputReference | DataThunderDdosDstZonePortRangeSrcBasedPolicyPolicyClassListStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    entry_count_overflow: cdktf.numberToTerraform(struct!.entryCountOverflow),
    entry_learned: cdktf.numberToTerraform(struct!.entryLearned),
    exceed_drop_conn_limit_clist: cdktf.numberToTerraform(struct!.exceedDropConnLimitClist),
    exceed_drop_conn_rate_clist: cdktf.numberToTerraform(struct!.exceedDropConnRateClist),
    exceed_drop_frag_rate_clist: cdktf.numberToTerraform(struct!.exceedDropFragRateClist),
    exceed_drop_kbit_rate_clist: cdktf.numberToTerraform(struct!.exceedDropKbitRateClist),
    exceed_drop_kbit_rate_clist_pkt: cdktf.numberToTerraform(struct!.exceedDropKbitRateClistPkt),
    exceed_drop_pkt_rate_clist: cdktf.numberToTerraform(struct!.exceedDropPktRateClist),
    packet_dropped: cdktf.numberToTerraform(struct!.packetDropped),
    packet_received: cdktf.numberToTerraform(struct!.packetReceived),
  }
}


export function dataThunderDdosDstZonePortRangeSrcBasedPolicyPolicyClassListStatsStatsToHclTerraform(struct?: DataThunderDdosDstZonePortRangeSrcBasedPolicyPolicyClassListStatsStatsOutputReference | DataThunderDdosDstZonePortRangeSrcBasedPolicyPolicyClassListStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    entry_count_overflow: {
      value: cdktf.numberToHclTerraform(struct!.entryCountOverflow),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    entry_learned: {
      value: cdktf.numberToHclTerraform(struct!.entryLearned),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exceed_drop_conn_limit_clist: {
      value: cdktf.numberToHclTerraform(struct!.exceedDropConnLimitClist),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exceed_drop_conn_rate_clist: {
      value: cdktf.numberToHclTerraform(struct!.exceedDropConnRateClist),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exceed_drop_frag_rate_clist: {
      value: cdktf.numberToHclTerraform(struct!.exceedDropFragRateClist),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exceed_drop_kbit_rate_clist: {
      value: cdktf.numberToHclTerraform(struct!.exceedDropKbitRateClist),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exceed_drop_kbit_rate_clist_pkt: {
      value: cdktf.numberToHclTerraform(struct!.exceedDropKbitRateClistPkt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exceed_drop_pkt_rate_clist: {
      value: cdktf.numberToHclTerraform(struct!.exceedDropPktRateClist),
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

export class DataThunderDdosDstZonePortRangeSrcBasedPolicyPolicyClassListStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderDdosDstZonePortRangeSrcBasedPolicyPolicyClassListStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entryCountOverflow !== undefined) {
      hasAnyValues = true;
      internalValueResult.entryCountOverflow = this._entryCountOverflow;
    }
    if (this._entryLearned !== undefined) {
      hasAnyValues = true;
      internalValueResult.entryLearned = this._entryLearned;
    }
    if (this._exceedDropConnLimitClist !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceedDropConnLimitClist = this._exceedDropConnLimitClist;
    }
    if (this._exceedDropConnRateClist !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceedDropConnRateClist = this._exceedDropConnRateClist;
    }
    if (this._exceedDropFragRateClist !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceedDropFragRateClist = this._exceedDropFragRateClist;
    }
    if (this._exceedDropKbitRateClist !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceedDropKbitRateClist = this._exceedDropKbitRateClist;
    }
    if (this._exceedDropKbitRateClistPkt !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceedDropKbitRateClistPkt = this._exceedDropKbitRateClistPkt;
    }
    if (this._exceedDropPktRateClist !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceedDropPktRateClist = this._exceedDropPktRateClist;
    }
    if (this._packetDropped !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetDropped = this._packetDropped;
    }
    if (this._packetReceived !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetReceived = this._packetReceived;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDstZonePortRangeSrcBasedPolicyPolicyClassListStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._entryCountOverflow = undefined;
      this._entryLearned = undefined;
      this._exceedDropConnLimitClist = undefined;
      this._exceedDropConnRateClist = undefined;
      this._exceedDropFragRateClist = undefined;
      this._exceedDropKbitRateClist = undefined;
      this._exceedDropKbitRateClistPkt = undefined;
      this._exceedDropPktRateClist = undefined;
      this._packetDropped = undefined;
      this._packetReceived = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._entryCountOverflow = value.entryCountOverflow;
      this._entryLearned = value.entryLearned;
      this._exceedDropConnLimitClist = value.exceedDropConnLimitClist;
      this._exceedDropConnRateClist = value.exceedDropConnRateClist;
      this._exceedDropFragRateClist = value.exceedDropFragRateClist;
      this._exceedDropKbitRateClist = value.exceedDropKbitRateClist;
      this._exceedDropKbitRateClistPkt = value.exceedDropKbitRateClistPkt;
      this._exceedDropPktRateClist = value.exceedDropPktRateClist;
      this._packetDropped = value.packetDropped;
      this._packetReceived = value.packetReceived;
    }
  }

  // entry_count_overflow - computed: false, optional: true, required: false
  private _entryCountOverflow?: number; 
  public get entryCountOverflow() {
    return this.getNumberAttribute('entry_count_overflow');
  }
  public set entryCountOverflow(value: number) {
    this._entryCountOverflow = value;
  }
  public resetEntryCountOverflow() {
    this._entryCountOverflow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryCountOverflowInput() {
    return this._entryCountOverflow;
  }

  // entry_learned - computed: false, optional: true, required: false
  private _entryLearned?: number; 
  public get entryLearned() {
    return this.getNumberAttribute('entry_learned');
  }
  public set entryLearned(value: number) {
    this._entryLearned = value;
  }
  public resetEntryLearned() {
    this._entryLearned = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryLearnedInput() {
    return this._entryLearned;
  }

  // exceed_drop_conn_limit_clist - computed: false, optional: true, required: false
  private _exceedDropConnLimitClist?: number; 
  public get exceedDropConnLimitClist() {
    return this.getNumberAttribute('exceed_drop_conn_limit_clist');
  }
  public set exceedDropConnLimitClist(value: number) {
    this._exceedDropConnLimitClist = value;
  }
  public resetExceedDropConnLimitClist() {
    this._exceedDropConnLimitClist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceedDropConnLimitClistInput() {
    return this._exceedDropConnLimitClist;
  }

  // exceed_drop_conn_rate_clist - computed: false, optional: true, required: false
  private _exceedDropConnRateClist?: number; 
  public get exceedDropConnRateClist() {
    return this.getNumberAttribute('exceed_drop_conn_rate_clist');
  }
  public set exceedDropConnRateClist(value: number) {
    this._exceedDropConnRateClist = value;
  }
  public resetExceedDropConnRateClist() {
    this._exceedDropConnRateClist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceedDropConnRateClistInput() {
    return this._exceedDropConnRateClist;
  }

  // exceed_drop_frag_rate_clist - computed: false, optional: true, required: false
  private _exceedDropFragRateClist?: number; 
  public get exceedDropFragRateClist() {
    return this.getNumberAttribute('exceed_drop_frag_rate_clist');
  }
  public set exceedDropFragRateClist(value: number) {
    this._exceedDropFragRateClist = value;
  }
  public resetExceedDropFragRateClist() {
    this._exceedDropFragRateClist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceedDropFragRateClistInput() {
    return this._exceedDropFragRateClist;
  }

  // exceed_drop_kbit_rate_clist - computed: false, optional: true, required: false
  private _exceedDropKbitRateClist?: number; 
  public get exceedDropKbitRateClist() {
    return this.getNumberAttribute('exceed_drop_kbit_rate_clist');
  }
  public set exceedDropKbitRateClist(value: number) {
    this._exceedDropKbitRateClist = value;
  }
  public resetExceedDropKbitRateClist() {
    this._exceedDropKbitRateClist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceedDropKbitRateClistInput() {
    return this._exceedDropKbitRateClist;
  }

  // exceed_drop_kbit_rate_clist_pkt - computed: false, optional: true, required: false
  private _exceedDropKbitRateClistPkt?: number; 
  public get exceedDropKbitRateClistPkt() {
    return this.getNumberAttribute('exceed_drop_kbit_rate_clist_pkt');
  }
  public set exceedDropKbitRateClistPkt(value: number) {
    this._exceedDropKbitRateClistPkt = value;
  }
  public resetExceedDropKbitRateClistPkt() {
    this._exceedDropKbitRateClistPkt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceedDropKbitRateClistPktInput() {
    return this._exceedDropKbitRateClistPkt;
  }

  // exceed_drop_pkt_rate_clist - computed: false, optional: true, required: false
  private _exceedDropPktRateClist?: number; 
  public get exceedDropPktRateClist() {
    return this.getNumberAttribute('exceed_drop_pkt_rate_clist');
  }
  public set exceedDropPktRateClist(value: number) {
    this._exceedDropPktRateClist = value;
  }
  public resetExceedDropPktRateClist() {
    this._exceedDropPktRateClist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceedDropPktRateClistInput() {
    return this._exceedDropPktRateClist;
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

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_range_src_based_policy_policy_class_list_stats thunder_ddos_dst_zone_port_range_src_based_policy_policy_class_list_stats}
*/
export class DataThunderDdosDstZonePortRangeSrcBasedPolicyPolicyClassListStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_dst_zone_port_range_src_based_policy_policy_class_list_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderDdosDstZonePortRangeSrcBasedPolicyPolicyClassListStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderDdosDstZonePortRangeSrcBasedPolicyPolicyClassListStats to import
  * @param importFromId The id of the existing DataThunderDdosDstZonePortRangeSrcBasedPolicyPolicyClassListStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_range_src_based_policy_policy_class_list_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderDdosDstZonePortRangeSrcBasedPolicyPolicyClassListStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_dst_zone_port_range_src_based_policy_policy_class_list_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_port_range_src_based_policy_policy_class_list_stats thunder_ddos_dst_zone_port_range_src_based_policy_policy_class_list_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderDdosDstZonePortRangeSrcBasedPolicyPolicyClassListStatsConfig
  */
  public constructor(scope: Construct, id: string, config: DataThunderDdosDstZonePortRangeSrcBasedPolicyPolicyClassListStatsConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_dst_zone_port_range_src_based_policy_policy_class_list_stats',
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
    this._classListName = config.classListName;
    this._id = config.id;
    this._portRangeEnd = config.portRangeEnd;
    this._portRangeStart = config.portRangeStart;
    this._protocol = config.protocol;
    this._srcBasedPolicyName = config.srcBasedPolicyName;
    this._zoneName = config.zoneName;
    this._stats.internalValue = config.stats;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // port_range_end - computed: false, optional: false, required: true
  private _portRangeEnd?: string; 
  public get portRangeEnd() {
    return this.getStringAttribute('port_range_end');
  }
  public set portRangeEnd(value: string) {
    this._portRangeEnd = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portRangeEndInput() {
    return this._portRangeEnd;
  }

  // port_range_start - computed: false, optional: false, required: true
  private _portRangeStart?: string; 
  public get portRangeStart() {
    return this.getStringAttribute('port_range_start');
  }
  public set portRangeStart(value: string) {
    this._portRangeStart = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portRangeStartInput() {
    return this._portRangeStart;
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

  // stats - computed: false, optional: true, required: false
  private _stats = new DataThunderDdosDstZonePortRangeSrcBasedPolicyPolicyClassListStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderDdosDstZonePortRangeSrcBasedPolicyPolicyClassListStatsStats) {
    this._stats.internalValue = value;
  }
  public resetStats() {
    this._stats.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statsInput() {
    return this._stats.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      class_list_name: cdktf.stringToTerraform(this._classListName),
      id: cdktf.stringToTerraform(this._id),
      port_range_end: cdktf.stringToTerraform(this._portRangeEnd),
      port_range_start: cdktf.stringToTerraform(this._portRangeStart),
      protocol: cdktf.stringToTerraform(this._protocol),
      src_based_policy_name: cdktf.stringToTerraform(this._srcBasedPolicyName),
      zone_name: cdktf.stringToTerraform(this._zoneName),
      stats: dataThunderDdosDstZonePortRangeSrcBasedPolicyPolicyClassListStatsStatsToTerraform(this._stats.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      class_list_name: {
        value: cdktf.stringToHclTerraform(this._classListName),
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
      port_range_end: {
        value: cdktf.stringToHclTerraform(this._portRangeEnd),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port_range_start: {
        value: cdktf.stringToHclTerraform(this._portRangeStart),
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
      src_based_policy_name: {
        value: cdktf.stringToHclTerraform(this._srcBasedPolicyName),
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
      stats: {
        value: dataThunderDdosDstZonePortRangeSrcBasedPolicyPolicyClassListStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderDdosDstZonePortRangeSrcBasedPolicyPolicyClassListStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
