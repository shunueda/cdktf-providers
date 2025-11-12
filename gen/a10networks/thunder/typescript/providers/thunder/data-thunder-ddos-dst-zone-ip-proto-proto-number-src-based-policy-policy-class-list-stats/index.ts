// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_ip_proto_proto_number_src_based_policy_policy_class_list_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderDdosDstZoneIpProtoProtoNumberSrcBasedPolicyPolicyClassListStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Class-list name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_ip_proto_proto_number_src_based_policy_policy_class_list_stats#class_list_name DataThunderDdosDstZoneIpProtoProtoNumberSrcBasedPolicyPolicyClassListStats#class_list_name}
  */
  readonly classListName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_ip_proto_proto_number_src_based_policy_policy_class_list_stats#id DataThunderDdosDstZoneIpProtoProtoNumberSrcBasedPolicyPolicyClassListStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ProtocolNum
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_ip_proto_proto_number_src_based_policy_policy_class_list_stats#protocol_num DataThunderDdosDstZoneIpProtoProtoNumberSrcBasedPolicyPolicyClassListStats#protocol_num}
  */
  readonly protocolNum: string;
  /**
  * SrcBasedPolicyName
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_ip_proto_proto_number_src_based_policy_policy_class_list_stats#src_based_policy_name DataThunderDdosDstZoneIpProtoProtoNumberSrcBasedPolicyPolicyClassListStats#src_based_policy_name}
  */
  readonly srcBasedPolicyName: string;
  /**
  * ZoneName
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_ip_proto_proto_number_src_based_policy_policy_class_list_stats#zone_name DataThunderDdosDstZoneIpProtoProtoNumberSrcBasedPolicyPolicyClassListStats#zone_name}
  */
  readonly zoneName: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_ip_proto_proto_number_src_based_policy_policy_class_list_stats#stats DataThunderDdosDstZoneIpProtoProtoNumberSrcBasedPolicyPolicyClassListStats#stats}
  */
  readonly stats?: DataThunderDdosDstZoneIpProtoProtoNumberSrcBasedPolicyPolicyClassListStatsStats;
}
export interface DataThunderDdosDstZoneIpProtoProtoNumberSrcBasedPolicyPolicyClassListStatsStats {
  /**
  * Entry Count Overflow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_ip_proto_proto_number_src_based_policy_policy_class_list_stats#entry_count_overflow DataThunderDdosDstZoneIpProtoProtoNumberSrcBasedPolicyPolicyClassListStats#entry_count_overflow}
  */
  readonly entryCountOverflow?: number;
  /**
  * Entry Learned
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_ip_proto_proto_number_src_based_policy_policy_class_list_stats#entry_learned DataThunderDdosDstZoneIpProtoProtoNumberSrcBasedPolicyPolicyClassListStats#entry_learned}
  */
  readonly entryLearned?: number;
  /**
  * Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_ip_proto_proto_number_src_based_policy_policy_class_list_stats#packet_dropped DataThunderDdosDstZoneIpProtoProtoNumberSrcBasedPolicyPolicyClassListStats#packet_dropped}
  */
  readonly packetDropped?: number;
  /**
  * Packets Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_ip_proto_proto_number_src_based_policy_policy_class_list_stats#packet_received DataThunderDdosDstZoneIpProtoProtoNumberSrcBasedPolicyPolicyClassListStats#packet_received}
  */
  readonly packetReceived?: number;
}

export function dataThunderDdosDstZoneIpProtoProtoNumberSrcBasedPolicyPolicyClassListStatsStatsToTerraform(struct?: DataThunderDdosDstZoneIpProtoProtoNumberSrcBasedPolicyPolicyClassListStatsStatsOutputReference | DataThunderDdosDstZoneIpProtoProtoNumberSrcBasedPolicyPolicyClassListStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    entry_count_overflow: cdktf.numberToTerraform(struct!.entryCountOverflow),
    entry_learned: cdktf.numberToTerraform(struct!.entryLearned),
    packet_dropped: cdktf.numberToTerraform(struct!.packetDropped),
    packet_received: cdktf.numberToTerraform(struct!.packetReceived),
  }
}


export function dataThunderDdosDstZoneIpProtoProtoNumberSrcBasedPolicyPolicyClassListStatsStatsToHclTerraform(struct?: DataThunderDdosDstZoneIpProtoProtoNumberSrcBasedPolicyPolicyClassListStatsStatsOutputReference | DataThunderDdosDstZoneIpProtoProtoNumberSrcBasedPolicyPolicyClassListStatsStats): any {
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

export class DataThunderDdosDstZoneIpProtoProtoNumberSrcBasedPolicyPolicyClassListStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderDdosDstZoneIpProtoProtoNumberSrcBasedPolicyPolicyClassListStatsStats | undefined {
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

  public set internalValue(value: DataThunderDdosDstZoneIpProtoProtoNumberSrcBasedPolicyPolicyClassListStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._entryCountOverflow = undefined;
      this._entryLearned = undefined;
      this._packetDropped = undefined;
      this._packetReceived = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._entryCountOverflow = value.entryCountOverflow;
      this._entryLearned = value.entryLearned;
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
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_ip_proto_proto_number_src_based_policy_policy_class_list_stats thunder_ddos_dst_zone_ip_proto_proto_number_src_based_policy_policy_class_list_stats}
*/
export class DataThunderDdosDstZoneIpProtoProtoNumberSrcBasedPolicyPolicyClassListStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_dst_zone_ip_proto_proto_number_src_based_policy_policy_class_list_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderDdosDstZoneIpProtoProtoNumberSrcBasedPolicyPolicyClassListStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderDdosDstZoneIpProtoProtoNumberSrcBasedPolicyPolicyClassListStats to import
  * @param importFromId The id of the existing DataThunderDdosDstZoneIpProtoProtoNumberSrcBasedPolicyPolicyClassListStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_ip_proto_proto_number_src_based_policy_policy_class_list_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderDdosDstZoneIpProtoProtoNumberSrcBasedPolicyPolicyClassListStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_dst_zone_ip_proto_proto_number_src_based_policy_policy_class_list_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_zone_ip_proto_proto_number_src_based_policy_policy_class_list_stats thunder_ddos_dst_zone_ip_proto_proto_number_src_based_policy_policy_class_list_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderDdosDstZoneIpProtoProtoNumberSrcBasedPolicyPolicyClassListStatsConfig
  */
  public constructor(scope: Construct, id: string, config: DataThunderDdosDstZoneIpProtoProtoNumberSrcBasedPolicyPolicyClassListStatsConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_dst_zone_ip_proto_proto_number_src_based_policy_policy_class_list_stats',
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
    this._classListName = config.classListName;
    this._id = config.id;
    this._protocolNum = config.protocolNum;
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

  // protocol_num - computed: false, optional: false, required: true
  private _protocolNum?: string; 
  public get protocolNum() {
    return this.getStringAttribute('protocol_num');
  }
  public set protocolNum(value: string) {
    this._protocolNum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolNumInput() {
    return this._protocolNum;
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
  private _stats = new DataThunderDdosDstZoneIpProtoProtoNumberSrcBasedPolicyPolicyClassListStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderDdosDstZoneIpProtoProtoNumberSrcBasedPolicyPolicyClassListStatsStats) {
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
      protocol_num: cdktf.stringToTerraform(this._protocolNum),
      src_based_policy_name: cdktf.stringToTerraform(this._srcBasedPolicyName),
      zone_name: cdktf.stringToTerraform(this._zoneName),
      stats: dataThunderDdosDstZoneIpProtoProtoNumberSrcBasedPolicyPolicyClassListStatsStatsToTerraform(this._stats.internalValue),
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
      protocol_num: {
        value: cdktf.stringToHclTerraform(this._protocolNum),
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
        value: dataThunderDdosDstZoneIpProtoProtoNumberSrcBasedPolicyPolicyClassListStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderDdosDstZoneIpProtoProtoNumberSrcBasedPolicyPolicyClassListStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
