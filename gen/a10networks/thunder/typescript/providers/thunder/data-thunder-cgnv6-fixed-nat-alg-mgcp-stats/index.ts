// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_fixed_nat_alg_mgcp_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderCgnv6FixedNatAlgMgcpStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_fixed_nat_alg_mgcp_stats#id DataThunderCgnv6FixedNatAlgMgcpStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_fixed_nat_alg_mgcp_stats#stats DataThunderCgnv6FixedNatAlgMgcpStats#stats}
  */
  readonly stats?: DataThunderCgnv6FixedNatAlgMgcpStatsStats;
}
export interface DataThunderCgnv6FixedNatAlgMgcpStatsStats {
  /**
  * MGCP AUCX
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_fixed_nat_alg_mgcp_stats#aucx DataThunderCgnv6FixedNatAlgMgcpStats#aucx}
  */
  readonly aucx?: number;
  /**
  * MGCP AUEP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_fixed_nat_alg_mgcp_stats#auep DataThunderCgnv6FixedNatAlgMgcpStats#auep}
  */
  readonly auep?: number;
  /**
  * MGCP CRCX
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_fixed_nat_alg_mgcp_stats#crcx DataThunderCgnv6FixedNatAlgMgcpStats#crcx}
  */
  readonly crcx?: number;
  /**
  * MGCP DLCX
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_fixed_nat_alg_mgcp_stats#dlcx DataThunderCgnv6FixedNatAlgMgcpStats#dlcx}
  */
  readonly dlcx?: number;
  /**
  * MGCP EPCF
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_fixed_nat_alg_mgcp_stats#epcf DataThunderCgnv6FixedNatAlgMgcpStats#epcf}
  */
  readonly epcf?: number;
  /**
  * MGCP MDCX
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_fixed_nat_alg_mgcp_stats#mdcx DataThunderCgnv6FixedNatAlgMgcpStats#mdcx}
  */
  readonly mdcx?: number;
  /**
  * MGCP NTFY
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_fixed_nat_alg_mgcp_stats#ntfy DataThunderCgnv6FixedNatAlgMgcpStats#ntfy}
  */
  readonly ntfy?: number;
  /**
  * MGCP RQNT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_fixed_nat_alg_mgcp_stats#rqnt DataThunderCgnv6FixedNatAlgMgcpStats#rqnt}
  */
  readonly rqnt?: number;
  /**
  * MGCP RSIP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_fixed_nat_alg_mgcp_stats#rsip DataThunderCgnv6FixedNatAlgMgcpStats#rsip}
  */
  readonly rsip?: number;
}

export function dataThunderCgnv6FixedNatAlgMgcpStatsStatsToTerraform(struct?: DataThunderCgnv6FixedNatAlgMgcpStatsStatsOutputReference | DataThunderCgnv6FixedNatAlgMgcpStatsStats): any {
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
    rqnt: cdktf.numberToTerraform(struct!.rqnt),
    rsip: cdktf.numberToTerraform(struct!.rsip),
  }
}


export function dataThunderCgnv6FixedNatAlgMgcpStatsStatsToHclTerraform(struct?: DataThunderCgnv6FixedNatAlgMgcpStatsStatsOutputReference | DataThunderCgnv6FixedNatAlgMgcpStatsStats): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderCgnv6FixedNatAlgMgcpStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderCgnv6FixedNatAlgMgcpStatsStats | undefined {
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
    if (this._rqnt !== undefined) {
      hasAnyValues = true;
      internalValueResult.rqnt = this._rqnt;
    }
    if (this._rsip !== undefined) {
      hasAnyValues = true;
      internalValueResult.rsip = this._rsip;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderCgnv6FixedNatAlgMgcpStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aucx = undefined;
      this._auep = undefined;
      this._crcx = undefined;
      this._dlcx = undefined;
      this._epcf = undefined;
      this._mdcx = undefined;
      this._ntfy = undefined;
      this._rqnt = undefined;
      this._rsip = undefined;
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
      this._rqnt = value.rqnt;
      this._rsip = value.rsip;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_fixed_nat_alg_mgcp_stats thunder_cgnv6_fixed_nat_alg_mgcp_stats}
*/
export class DataThunderCgnv6FixedNatAlgMgcpStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_cgnv6_fixed_nat_alg_mgcp_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderCgnv6FixedNatAlgMgcpStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderCgnv6FixedNatAlgMgcpStats to import
  * @param importFromId The id of the existing DataThunderCgnv6FixedNatAlgMgcpStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_fixed_nat_alg_mgcp_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderCgnv6FixedNatAlgMgcpStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_cgnv6_fixed_nat_alg_mgcp_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_fixed_nat_alg_mgcp_stats thunder_cgnv6_fixed_nat_alg_mgcp_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderCgnv6FixedNatAlgMgcpStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderCgnv6FixedNatAlgMgcpStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_cgnv6_fixed_nat_alg_mgcp_stats',
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
  private _stats = new DataThunderCgnv6FixedNatAlgMgcpStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderCgnv6FixedNatAlgMgcpStatsStats) {
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
      stats: dataThunderCgnv6FixedNatAlgMgcpStatsStatsToTerraform(this._stats.internalValue),
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
        value: dataThunderCgnv6FixedNatAlgMgcpStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderCgnv6FixedNatAlgMgcpStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
