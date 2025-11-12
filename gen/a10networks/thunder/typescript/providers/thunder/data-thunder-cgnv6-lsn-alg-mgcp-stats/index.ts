// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_alg_mgcp_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderCgnv6LsnAlgMgcpStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_alg_mgcp_stats#id DataThunderCgnv6LsnAlgMgcpStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_alg_mgcp_stats#stats DataThunderCgnv6LsnAlgMgcpStats#stats}
  */
  readonly stats?: DataThunderCgnv6LsnAlgMgcpStatsStats;
}
export interface DataThunderCgnv6LsnAlgMgcpStatsStats {
  /**
  * MGCP AUCX
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_alg_mgcp_stats#aucx DataThunderCgnv6LsnAlgMgcpStats#aucx}
  */
  readonly aucx?: number;
  /**
  * MGCP AUEP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_alg_mgcp_stats#auep DataThunderCgnv6LsnAlgMgcpStats#auep}
  */
  readonly auep?: number;
  /**
  * MGCP CRCX
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_alg_mgcp_stats#crcx DataThunderCgnv6LsnAlgMgcpStats#crcx}
  */
  readonly crcx?: number;
  /**
  * MGCP DLCX
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_alg_mgcp_stats#dlcx DataThunderCgnv6LsnAlgMgcpStats#dlcx}
  */
  readonly dlcx?: number;
  /**
  * MGCP EPCF
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_alg_mgcp_stats#epcf DataThunderCgnv6LsnAlgMgcpStats#epcf}
  */
  readonly epcf?: number;
  /**
  * MGCP MDCX
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_alg_mgcp_stats#mdcx DataThunderCgnv6LsnAlgMgcpStats#mdcx}
  */
  readonly mdcx?: number;
  /**
  * MGCP NTFY
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_alg_mgcp_stats#ntfy DataThunderCgnv6LsnAlgMgcpStats#ntfy}
  */
  readonly ntfy?: number;
  /**
  * MGCP Message Parse Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_alg_mgcp_stats#parse_error DataThunderCgnv6LsnAlgMgcpStats#parse_error}
  */
  readonly parseError?: number;
  /**
  * MGCP RQNT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_alg_mgcp_stats#rqnt DataThunderCgnv6LsnAlgMgcpStats#rqnt}
  */
  readonly rqnt?: number;
  /**
  * MGCP RSIP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_alg_mgcp_stats#rsip DataThunderCgnv6LsnAlgMgcpStats#rsip}
  */
  readonly rsip?: number;
  /**
  * TCP Out-of-Order Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_alg_mgcp_stats#tcp_out_of_order_drop DataThunderCgnv6LsnAlgMgcpStats#tcp_out_of_order_drop}
  */
  readonly tcpOutOfOrderDrop?: number;
}

export function dataThunderCgnv6LsnAlgMgcpStatsStatsToTerraform(struct?: DataThunderCgnv6LsnAlgMgcpStatsStatsOutputReference | DataThunderCgnv6LsnAlgMgcpStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aucx: cdktf.numberToTerraform(struct!.aucx),
    auep: cdktf.numberToTerraform(struct!.auep),
    crcx: cdktf.numberToTerraform(struct!.crcx),
    dlcx: cdktf.numberToTerraform(struct!.dlcx),
    epcf: cdktf.numberToTerraform(struct!.epcf),
    mdcx: cdktf.numberToTerraform(struct!.mdcx),
    ntfy: cdktf.numberToTerraform(struct!.ntfy),
    parse_error: cdktf.numberToTerraform(struct!.parseError),
    rqnt: cdktf.numberToTerraform(struct!.rqnt),
    rsip: cdktf.numberToTerraform(struct!.rsip),
    tcp_out_of_order_drop: cdktf.numberToTerraform(struct!.tcpOutOfOrderDrop),
  }
}


export function dataThunderCgnv6LsnAlgMgcpStatsStatsToHclTerraform(struct?: DataThunderCgnv6LsnAlgMgcpStatsStatsOutputReference | DataThunderCgnv6LsnAlgMgcpStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aucx: {
      value: cdktf.numberToHclTerraform(struct!.aucx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    auep: {
      value: cdktf.numberToHclTerraform(struct!.auep),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    crcx: {
      value: cdktf.numberToHclTerraform(struct!.crcx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dlcx: {
      value: cdktf.numberToHclTerraform(struct!.dlcx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    epcf: {
      value: cdktf.numberToHclTerraform(struct!.epcf),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mdcx: {
      value: cdktf.numberToHclTerraform(struct!.mdcx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ntfy: {
      value: cdktf.numberToHclTerraform(struct!.ntfy),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    parse_error: {
      value: cdktf.numberToHclTerraform(struct!.parseError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rqnt: {
      value: cdktf.numberToHclTerraform(struct!.rqnt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rsip: {
      value: cdktf.numberToHclTerraform(struct!.rsip),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_out_of_order_drop: {
      value: cdktf.numberToHclTerraform(struct!.tcpOutOfOrderDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderCgnv6LsnAlgMgcpStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderCgnv6LsnAlgMgcpStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aucx !== undefined) {
      hasAnyValues = true;
      internalValueResult.aucx = this._aucx;
    }
    if (this._auep !== undefined) {
      hasAnyValues = true;
      internalValueResult.auep = this._auep;
    }
    if (this._crcx !== undefined) {
      hasAnyValues = true;
      internalValueResult.crcx = this._crcx;
    }
    if (this._dlcx !== undefined) {
      hasAnyValues = true;
      internalValueResult.dlcx = this._dlcx;
    }
    if (this._epcf !== undefined) {
      hasAnyValues = true;
      internalValueResult.epcf = this._epcf;
    }
    if (this._mdcx !== undefined) {
      hasAnyValues = true;
      internalValueResult.mdcx = this._mdcx;
    }
    if (this._ntfy !== undefined) {
      hasAnyValues = true;
      internalValueResult.ntfy = this._ntfy;
    }
    if (this._parseError !== undefined) {
      hasAnyValues = true;
      internalValueResult.parseError = this._parseError;
    }
    if (this._rqnt !== undefined) {
      hasAnyValues = true;
      internalValueResult.rqnt = this._rqnt;
    }
    if (this._rsip !== undefined) {
      hasAnyValues = true;
      internalValueResult.rsip = this._rsip;
    }
    if (this._tcpOutOfOrderDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpOutOfOrderDrop = this._tcpOutOfOrderDrop;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderCgnv6LsnAlgMgcpStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aucx = undefined;
      this._auep = undefined;
      this._crcx = undefined;
      this._dlcx = undefined;
      this._epcf = undefined;
      this._mdcx = undefined;
      this._ntfy = undefined;
      this._parseError = undefined;
      this._rqnt = undefined;
      this._rsip = undefined;
      this._tcpOutOfOrderDrop = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aucx = value.aucx;
      this._auep = value.auep;
      this._crcx = value.crcx;
      this._dlcx = value.dlcx;
      this._epcf = value.epcf;
      this._mdcx = value.mdcx;
      this._ntfy = value.ntfy;
      this._parseError = value.parseError;
      this._rqnt = value.rqnt;
      this._rsip = value.rsip;
      this._tcpOutOfOrderDrop = value.tcpOutOfOrderDrop;
    }
  }

  // aucx - computed: false, optional: true, required: false
  private _aucx?: number; 
  public get aucx() {
    return this.getNumberAttribute('aucx');
  }
  public set aucx(value: number) {
    this._aucx = value;
  }
  public resetAucx() {
    this._aucx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aucxInput() {
    return this._aucx;
  }

  // auep - computed: false, optional: true, required: false
  private _auep?: number; 
  public get auep() {
    return this.getNumberAttribute('auep');
  }
  public set auep(value: number) {
    this._auep = value;
  }
  public resetAuep() {
    this._auep = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auepInput() {
    return this._auep;
  }

  // crcx - computed: false, optional: true, required: false
  private _crcx?: number; 
  public get crcx() {
    return this.getNumberAttribute('crcx');
  }
  public set crcx(value: number) {
    this._crcx = value;
  }
  public resetCrcx() {
    this._crcx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crcxInput() {
    return this._crcx;
  }

  // dlcx - computed: false, optional: true, required: false
  private _dlcx?: number; 
  public get dlcx() {
    return this.getNumberAttribute('dlcx');
  }
  public set dlcx(value: number) {
    this._dlcx = value;
  }
  public resetDlcx() {
    this._dlcx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dlcxInput() {
    return this._dlcx;
  }

  // epcf - computed: false, optional: true, required: false
  private _epcf?: number; 
  public get epcf() {
    return this.getNumberAttribute('epcf');
  }
  public set epcf(value: number) {
    this._epcf = value;
  }
  public resetEpcf() {
    this._epcf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get epcfInput() {
    return this._epcf;
  }

  // mdcx - computed: false, optional: true, required: false
  private _mdcx?: number; 
  public get mdcx() {
    return this.getNumberAttribute('mdcx');
  }
  public set mdcx(value: number) {
    this._mdcx = value;
  }
  public resetMdcx() {
    this._mdcx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mdcxInput() {
    return this._mdcx;
  }

  // ntfy - computed: false, optional: true, required: false
  private _ntfy?: number; 
  public get ntfy() {
    return this.getNumberAttribute('ntfy');
  }
  public set ntfy(value: number) {
    this._ntfy = value;
  }
  public resetNtfy() {
    this._ntfy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntfyInput() {
    return this._ntfy;
  }

  // parse_error - computed: false, optional: true, required: false
  private _parseError?: number; 
  public get parseError() {
    return this.getNumberAttribute('parse_error');
  }
  public set parseError(value: number) {
    this._parseError = value;
  }
  public resetParseError() {
    this._parseError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parseErrorInput() {
    return this._parseError;
  }

  // rqnt - computed: false, optional: true, required: false
  private _rqnt?: number; 
  public get rqnt() {
    return this.getNumberAttribute('rqnt');
  }
  public set rqnt(value: number) {
    this._rqnt = value;
  }
  public resetRqnt() {
    this._rqnt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rqntInput() {
    return this._rqnt;
  }

  // rsip - computed: false, optional: true, required: false
  private _rsip?: number; 
  public get rsip() {
    return this.getNumberAttribute('rsip');
  }
  public set rsip(value: number) {
    this._rsip = value;
  }
  public resetRsip() {
    this._rsip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rsipInput() {
    return this._rsip;
  }

  // tcp_out_of_order_drop - computed: false, optional: true, required: false
  private _tcpOutOfOrderDrop?: number; 
  public get tcpOutOfOrderDrop() {
    return this.getNumberAttribute('tcp_out_of_order_drop');
  }
  public set tcpOutOfOrderDrop(value: number) {
    this._tcpOutOfOrderDrop = value;
  }
  public resetTcpOutOfOrderDrop() {
    this._tcpOutOfOrderDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpOutOfOrderDropInput() {
    return this._tcpOutOfOrderDrop;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_alg_mgcp_stats thunder_cgnv6_lsn_alg_mgcp_stats}
*/
export class DataThunderCgnv6LsnAlgMgcpStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_cgnv6_lsn_alg_mgcp_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderCgnv6LsnAlgMgcpStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderCgnv6LsnAlgMgcpStats to import
  * @param importFromId The id of the existing DataThunderCgnv6LsnAlgMgcpStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_alg_mgcp_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderCgnv6LsnAlgMgcpStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_cgnv6_lsn_alg_mgcp_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_alg_mgcp_stats thunder_cgnv6_lsn_alg_mgcp_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderCgnv6LsnAlgMgcpStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderCgnv6LsnAlgMgcpStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_cgnv6_lsn_alg_mgcp_stats',
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
  private _stats = new DataThunderCgnv6LsnAlgMgcpStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderCgnv6LsnAlgMgcpStatsStats) {
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
      stats: dataThunderCgnv6LsnAlgMgcpStatsStatsToTerraform(this._stats.internalValue),
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
        value: dataThunderCgnv6LsnAlgMgcpStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderCgnv6LsnAlgMgcpStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
