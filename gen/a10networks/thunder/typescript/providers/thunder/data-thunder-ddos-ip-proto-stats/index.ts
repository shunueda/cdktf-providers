// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_ip_proto_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderDdosIpProtoStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_ip_proto_stats#id DataThunderDdosIpProtoStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_ip_proto_stats#stats DataThunderDdosIpProtoStats#stats}
  */
  readonly stats?: DataThunderDdosIpProtoStatsStats;
}
export interface DataThunderDdosIpProtoStatsStats {
  /**
  * Dst IP-Proto Blacklist Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_ip_proto_stats#dst_ipproto_bl DataThunderDdosIpProtoStats#dst_ipproto_bl}
  */
  readonly dstIpprotoBl?: number;
  /**
  * Dst IP-Proto Total Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_ip_proto_stats#dst_ipproto_drop DataThunderDdosIpProtoStats#dst_ipproto_drop}
  */
  readonly dstIpprotoDrop?: number;
  /**
  * Dst IP-Proto Exceed Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_ip_proto_stats#dst_ipproto_exceed_drop_any DataThunderDdosIpProtoStats#dst_ipproto_exceed_drop_any}
  */
  readonly dstIpprotoExceedDropAny?: number;
  /**
  * Dst IP-Proto Frag Pkt Rate Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_ip_proto_stats#dst_ipproto_frag_rate_exceed DataThunderDdosIpProtoStats#dst_ipproto_frag_rate_exceed}
  */
  readonly dstIpprotoFragRateExceed?: number;
  /**
  * Dst IP-Proto KiBit Rate Exceeded (KiBit)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_ip_proto_stats#dst_ipproto_kbit_rate_exceed DataThunderDdosIpProtoStats#dst_ipproto_kbit_rate_exceed}
  */
  readonly dstIpprotoKbitRateExceed?: number;
  /**
  * Dst IP-Proto Pkt Rate Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_ip_proto_stats#dst_ipproto_pkt_rate_exceed DataThunderDdosIpProtoStats#dst_ipproto_pkt_rate_exceed}
  */
  readonly dstIpprotoPktRateExceed?: number;
  /**
  * Dst IP-Proto Total Packets Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_ip_proto_stats#dst_ipproto_rcvd DataThunderDdosIpProtoStats#dst_ipproto_rcvd}
  */
  readonly dstIpprotoRcvd?: number;
}

export function dataThunderDdosIpProtoStatsStatsToTerraform(struct?: DataThunderDdosIpProtoStatsStatsOutputReference | DataThunderDdosIpProtoStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dst_ipproto_bl: cdktf.numberToTerraform(struct!.dstIpprotoBl),
    dst_ipproto_drop: cdktf.numberToTerraform(struct!.dstIpprotoDrop),
    dst_ipproto_exceed_drop_any: cdktf.numberToTerraform(struct!.dstIpprotoExceedDropAny),
    dst_ipproto_frag_rate_exceed: cdktf.numberToTerraform(struct!.dstIpprotoFragRateExceed),
    dst_ipproto_kbit_rate_exceed: cdktf.numberToTerraform(struct!.dstIpprotoKbitRateExceed),
    dst_ipproto_pkt_rate_exceed: cdktf.numberToTerraform(struct!.dstIpprotoPktRateExceed),
    dst_ipproto_rcvd: cdktf.numberToTerraform(struct!.dstIpprotoRcvd),
  }
}


export function dataThunderDdosIpProtoStatsStatsToHclTerraform(struct?: DataThunderDdosIpProtoStatsStatsOutputReference | DataThunderDdosIpProtoStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dst_ipproto_bl: {
      value: cdktf.numberToHclTerraform(struct!.dstIpprotoBl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_ipproto_drop: {
      value: cdktf.numberToHclTerraform(struct!.dstIpprotoDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_ipproto_exceed_drop_any: {
      value: cdktf.numberToHclTerraform(struct!.dstIpprotoExceedDropAny),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_ipproto_frag_rate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.dstIpprotoFragRateExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_ipproto_kbit_rate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.dstIpprotoKbitRateExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_ipproto_pkt_rate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.dstIpprotoPktRateExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_ipproto_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.dstIpprotoRcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosIpProtoStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderDdosIpProtoStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dstIpprotoBl !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstIpprotoBl = this._dstIpprotoBl;
    }
    if (this._dstIpprotoDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstIpprotoDrop = this._dstIpprotoDrop;
    }
    if (this._dstIpprotoExceedDropAny !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstIpprotoExceedDropAny = this._dstIpprotoExceedDropAny;
    }
    if (this._dstIpprotoFragRateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstIpprotoFragRateExceed = this._dstIpprotoFragRateExceed;
    }
    if (this._dstIpprotoKbitRateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstIpprotoKbitRateExceed = this._dstIpprotoKbitRateExceed;
    }
    if (this._dstIpprotoPktRateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstIpprotoPktRateExceed = this._dstIpprotoPktRateExceed;
    }
    if (this._dstIpprotoRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstIpprotoRcvd = this._dstIpprotoRcvd;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosIpProtoStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dstIpprotoBl = undefined;
      this._dstIpprotoDrop = undefined;
      this._dstIpprotoExceedDropAny = undefined;
      this._dstIpprotoFragRateExceed = undefined;
      this._dstIpprotoKbitRateExceed = undefined;
      this._dstIpprotoPktRateExceed = undefined;
      this._dstIpprotoRcvd = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dstIpprotoBl = value.dstIpprotoBl;
      this._dstIpprotoDrop = value.dstIpprotoDrop;
      this._dstIpprotoExceedDropAny = value.dstIpprotoExceedDropAny;
      this._dstIpprotoFragRateExceed = value.dstIpprotoFragRateExceed;
      this._dstIpprotoKbitRateExceed = value.dstIpprotoKbitRateExceed;
      this._dstIpprotoPktRateExceed = value.dstIpprotoPktRateExceed;
      this._dstIpprotoRcvd = value.dstIpprotoRcvd;
    }
  }

  // dst_ipproto_bl - computed: false, optional: true, required: false
  private _dstIpprotoBl?: number; 
  public get dstIpprotoBl() {
    return this.getNumberAttribute('dst_ipproto_bl');
  }
  public set dstIpprotoBl(value: number) {
    this._dstIpprotoBl = value;
  }
  public resetDstIpprotoBl() {
    this._dstIpprotoBl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstIpprotoBlInput() {
    return this._dstIpprotoBl;
  }

  // dst_ipproto_drop - computed: false, optional: true, required: false
  private _dstIpprotoDrop?: number; 
  public get dstIpprotoDrop() {
    return this.getNumberAttribute('dst_ipproto_drop');
  }
  public set dstIpprotoDrop(value: number) {
    this._dstIpprotoDrop = value;
  }
  public resetDstIpprotoDrop() {
    this._dstIpprotoDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstIpprotoDropInput() {
    return this._dstIpprotoDrop;
  }

  // dst_ipproto_exceed_drop_any - computed: false, optional: true, required: false
  private _dstIpprotoExceedDropAny?: number; 
  public get dstIpprotoExceedDropAny() {
    return this.getNumberAttribute('dst_ipproto_exceed_drop_any');
  }
  public set dstIpprotoExceedDropAny(value: number) {
    this._dstIpprotoExceedDropAny = value;
  }
  public resetDstIpprotoExceedDropAny() {
    this._dstIpprotoExceedDropAny = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstIpprotoExceedDropAnyInput() {
    return this._dstIpprotoExceedDropAny;
  }

  // dst_ipproto_frag_rate_exceed - computed: false, optional: true, required: false
  private _dstIpprotoFragRateExceed?: number; 
  public get dstIpprotoFragRateExceed() {
    return this.getNumberAttribute('dst_ipproto_frag_rate_exceed');
  }
  public set dstIpprotoFragRateExceed(value: number) {
    this._dstIpprotoFragRateExceed = value;
  }
  public resetDstIpprotoFragRateExceed() {
    this._dstIpprotoFragRateExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstIpprotoFragRateExceedInput() {
    return this._dstIpprotoFragRateExceed;
  }

  // dst_ipproto_kbit_rate_exceed - computed: false, optional: true, required: false
  private _dstIpprotoKbitRateExceed?: number; 
  public get dstIpprotoKbitRateExceed() {
    return this.getNumberAttribute('dst_ipproto_kbit_rate_exceed');
  }
  public set dstIpprotoKbitRateExceed(value: number) {
    this._dstIpprotoKbitRateExceed = value;
  }
  public resetDstIpprotoKbitRateExceed() {
    this._dstIpprotoKbitRateExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstIpprotoKbitRateExceedInput() {
    return this._dstIpprotoKbitRateExceed;
  }

  // dst_ipproto_pkt_rate_exceed - computed: false, optional: true, required: false
  private _dstIpprotoPktRateExceed?: number; 
  public get dstIpprotoPktRateExceed() {
    return this.getNumberAttribute('dst_ipproto_pkt_rate_exceed');
  }
  public set dstIpprotoPktRateExceed(value: number) {
    this._dstIpprotoPktRateExceed = value;
  }
  public resetDstIpprotoPktRateExceed() {
    this._dstIpprotoPktRateExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstIpprotoPktRateExceedInput() {
    return this._dstIpprotoPktRateExceed;
  }

  // dst_ipproto_rcvd - computed: false, optional: true, required: false
  private _dstIpprotoRcvd?: number; 
  public get dstIpprotoRcvd() {
    return this.getNumberAttribute('dst_ipproto_rcvd');
  }
  public set dstIpprotoRcvd(value: number) {
    this._dstIpprotoRcvd = value;
  }
  public resetDstIpprotoRcvd() {
    this._dstIpprotoRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstIpprotoRcvdInput() {
    return this._dstIpprotoRcvd;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_ip_proto_stats thunder_ddos_ip_proto_stats}
*/
export class DataThunderDdosIpProtoStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_ip_proto_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderDdosIpProtoStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderDdosIpProtoStats to import
  * @param importFromId The id of the existing DataThunderDdosIpProtoStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_ip_proto_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderDdosIpProtoStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_ip_proto_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_ip_proto_stats thunder_ddos_ip_proto_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderDdosIpProtoStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderDdosIpProtoStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_ip_proto_stats',
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
    this._id = config.id;
    this._stats.internalValue = config.stats;
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

  // stats - computed: false, optional: true, required: false
  private _stats = new DataThunderDdosIpProtoStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderDdosIpProtoStatsStats) {
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
      id: cdktf.stringToTerraform(this._id),
      stats: dataThunderDdosIpProtoStatsStatsToTerraform(this._stats.internalValue),
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
      stats: {
        value: dataThunderDdosIpProtoStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderDdosIpProtoStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
