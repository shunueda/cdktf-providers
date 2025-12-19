// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_dns64_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderCgnv6Dns64StatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_dns64_stats#id DataThunderCgnv6Dns64Stats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_dns64_stats#stats DataThunderCgnv6Dns64Stats#stats}
  */
  readonly stats?: DataThunderCgnv6Dns64StatsStats;
}
export interface DataThunderCgnv6Dns64StatsStats {
  /**
  * Translated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_dns64_stats#adjust DataThunderCgnv6Dns64Stats#adjust}
  */
  readonly adjust?: number;
  /**
  * Cache
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_dns64_stats#cache DataThunderCgnv6Dns64Stats#cache}
  */
  readonly cache?: number;
  /**
  * Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_dns64_stats#drop DataThunderCgnv6Dns64Stats#drop}
  */
  readonly drop?: number;
  /**
  * Query
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_dns64_stats#query DataThunderCgnv6Dns64Stats#query}
  */
  readonly query?: number;
  /**
  * Query Bad Packet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_dns64_stats#query_bad_pkt DataThunderCgnv6Dns64Stats#query_bad_pkt}
  */
  readonly queryBadPkt?: number;
  /**
  * Query Changed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_dns64_stats#query_chg DataThunderCgnv6Dns64Stats#query_chg}
  */
  readonly queryChg?: number;
  /**
  * Query Parallel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_dns64_stats#query_parallel DataThunderCgnv6Dns64Stats#query_parallel}
  */
  readonly queryParallel?: number;
  /**
  * Query Passive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_dns64_stats#query_passive DataThunderCgnv6Dns64Stats#query_passive}
  */
  readonly queryPassive?: number;
  /**
  * Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_dns64_stats#resp DataThunderCgnv6Dns64Stats#resp}
  */
  readonly resp?: number;
  /**
  * Response Bad Packet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_dns64_stats#resp_bad_pkt DataThunderCgnv6Dns64Stats#resp_bad_pkt}
  */
  readonly respBadPkt?: number;
  /**
  * Response Bad Query
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_dns64_stats#resp_bad_qr DataThunderCgnv6Dns64Stats#resp_bad_qr}
  */
  readonly respBadQr?: number;
  /**
  * Response Changed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_dns64_stats#resp_chg DataThunderCgnv6Dns64Stats#resp_chg}
  */
  readonly respChg?: number;
  /**
  * Response Empty
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_dns64_stats#resp_empty DataThunderCgnv6Dns64Stats#resp_empty}
  */
  readonly respEmpty?: number;
  /**
  * Response Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_dns64_stats#resp_err DataThunderCgnv6Dns64Stats#resp_err}
  */
  readonly respErr?: number;
  /**
  * Response Local
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_dns64_stats#resp_local DataThunderCgnv6Dns64Stats#resp_local}
  */
  readonly respLocal?: number;
}

export function dataThunderCgnv6Dns64StatsStatsToTerraform(struct?: DataThunderCgnv6Dns64StatsStatsOutputReference | DataThunderCgnv6Dns64StatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    adjust: cdktf.numberToTerraform(struct!.adjust),
    cache: cdktf.numberToTerraform(struct!.cache),
    drop: cdktf.numberToTerraform(struct!.drop),
    query: cdktf.numberToTerraform(struct!.query),
    query_bad_pkt: cdktf.numberToTerraform(struct!.queryBadPkt),
    query_chg: cdktf.numberToTerraform(struct!.queryChg),
    query_parallel: cdktf.numberToTerraform(struct!.queryParallel),
    query_passive: cdktf.numberToTerraform(struct!.queryPassive),
    resp: cdktf.numberToTerraform(struct!.resp),
    resp_bad_pkt: cdktf.numberToTerraform(struct!.respBadPkt),
    resp_bad_qr: cdktf.numberToTerraform(struct!.respBadQr),
    resp_chg: cdktf.numberToTerraform(struct!.respChg),
    resp_empty: cdktf.numberToTerraform(struct!.respEmpty),
    resp_err: cdktf.numberToTerraform(struct!.respErr),
    resp_local: cdktf.numberToTerraform(struct!.respLocal),
  }
}


export function dataThunderCgnv6Dns64StatsStatsToHclTerraform(struct?: DataThunderCgnv6Dns64StatsStatsOutputReference | DataThunderCgnv6Dns64StatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    adjust: {
      value: cdktf.numberToHclTerraform(struct!.adjust),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cache: {
      value: cdktf.numberToHclTerraform(struct!.cache),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop: {
      value: cdktf.numberToHclTerraform(struct!.drop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    query: {
      value: cdktf.numberToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    query_bad_pkt: {
      value: cdktf.numberToHclTerraform(struct!.queryBadPkt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    query_chg: {
      value: cdktf.numberToHclTerraform(struct!.queryChg),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    query_parallel: {
      value: cdktf.numberToHclTerraform(struct!.queryParallel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    query_passive: {
      value: cdktf.numberToHclTerraform(struct!.queryPassive),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resp: {
      value: cdktf.numberToHclTerraform(struct!.resp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resp_bad_pkt: {
      value: cdktf.numberToHclTerraform(struct!.respBadPkt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resp_bad_qr: {
      value: cdktf.numberToHclTerraform(struct!.respBadQr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resp_chg: {
      value: cdktf.numberToHclTerraform(struct!.respChg),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resp_empty: {
      value: cdktf.numberToHclTerraform(struct!.respEmpty),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resp_err: {
      value: cdktf.numberToHclTerraform(struct!.respErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resp_local: {
      value: cdktf.numberToHclTerraform(struct!.respLocal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderCgnv6Dns64StatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderCgnv6Dns64StatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adjust !== undefined) {
      hasAnyValues = true;
      internalValueResult.adjust = this._adjust;
    }
    if (this._cache !== undefined) {
      hasAnyValues = true;
      internalValueResult.cache = this._cache;
    }
    if (this._drop !== undefined) {
      hasAnyValues = true;
      internalValueResult.drop = this._drop;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    if (this._queryBadPkt !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryBadPkt = this._queryBadPkt;
    }
    if (this._queryChg !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryChg = this._queryChg;
    }
    if (this._queryParallel !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryParallel = this._queryParallel;
    }
    if (this._queryPassive !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryPassive = this._queryPassive;
    }
    if (this._resp !== undefined) {
      hasAnyValues = true;
      internalValueResult.resp = this._resp;
    }
    if (this._respBadPkt !== undefined) {
      hasAnyValues = true;
      internalValueResult.respBadPkt = this._respBadPkt;
    }
    if (this._respBadQr !== undefined) {
      hasAnyValues = true;
      internalValueResult.respBadQr = this._respBadQr;
    }
    if (this._respChg !== undefined) {
      hasAnyValues = true;
      internalValueResult.respChg = this._respChg;
    }
    if (this._respEmpty !== undefined) {
      hasAnyValues = true;
      internalValueResult.respEmpty = this._respEmpty;
    }
    if (this._respErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.respErr = this._respErr;
    }
    if (this._respLocal !== undefined) {
      hasAnyValues = true;
      internalValueResult.respLocal = this._respLocal;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderCgnv6Dns64StatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._adjust = undefined;
      this._cache = undefined;
      this._drop = undefined;
      this._query = undefined;
      this._queryBadPkt = undefined;
      this._queryChg = undefined;
      this._queryParallel = undefined;
      this._queryPassive = undefined;
      this._resp = undefined;
      this._respBadPkt = undefined;
      this._respBadQr = undefined;
      this._respChg = undefined;
      this._respEmpty = undefined;
      this._respErr = undefined;
      this._respLocal = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._adjust = value.adjust;
      this._cache = value.cache;
      this._drop = value.drop;
      this._query = value.query;
      this._queryBadPkt = value.queryBadPkt;
      this._queryChg = value.queryChg;
      this._queryParallel = value.queryParallel;
      this._queryPassive = value.queryPassive;
      this._resp = value.resp;
      this._respBadPkt = value.respBadPkt;
      this._respBadQr = value.respBadQr;
      this._respChg = value.respChg;
      this._respEmpty = value.respEmpty;
      this._respErr = value.respErr;
      this._respLocal = value.respLocal;
    }
  }

  // adjust - computed: false, optional: true, required: false
  private _adjust?: number; 
  public get adjust() {
    return this.getNumberAttribute('adjust');
  }
  public set adjust(value: number) {
    this._adjust = value;
  }
  public resetAdjust() {
    this._adjust = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adjustInput() {
    return this._adjust;
  }

  // cache - computed: false, optional: true, required: false
  private _cache?: number; 
  public get cache() {
    return this.getNumberAttribute('cache');
  }
  public set cache(value: number) {
    this._cache = value;
  }
  public resetCache() {
    this._cache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheInput() {
    return this._cache;
  }

  // drop - computed: false, optional: true, required: false
  private _drop?: number; 
  public get drop() {
    return this.getNumberAttribute('drop');
  }
  public set drop(value: number) {
    this._drop = value;
  }
  public resetDrop() {
    this._drop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropInput() {
    return this._drop;
  }

  // query - computed: false, optional: true, required: false
  private _query?: number; 
  public get query() {
    return this.getNumberAttribute('query');
  }
  public set query(value: number) {
    this._query = value;
  }
  public resetQuery() {
    this._query = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }

  // query_bad_pkt - computed: false, optional: true, required: false
  private _queryBadPkt?: number; 
  public get queryBadPkt() {
    return this.getNumberAttribute('query_bad_pkt');
  }
  public set queryBadPkt(value: number) {
    this._queryBadPkt = value;
  }
  public resetQueryBadPkt() {
    this._queryBadPkt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryBadPktInput() {
    return this._queryBadPkt;
  }

  // query_chg - computed: false, optional: true, required: false
  private _queryChg?: number; 
  public get queryChg() {
    return this.getNumberAttribute('query_chg');
  }
  public set queryChg(value: number) {
    this._queryChg = value;
  }
  public resetQueryChg() {
    this._queryChg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryChgInput() {
    return this._queryChg;
  }

  // query_parallel - computed: false, optional: true, required: false
  private _queryParallel?: number; 
  public get queryParallel() {
    return this.getNumberAttribute('query_parallel');
  }
  public set queryParallel(value: number) {
    this._queryParallel = value;
  }
  public resetQueryParallel() {
    this._queryParallel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryParallelInput() {
    return this._queryParallel;
  }

  // query_passive - computed: false, optional: true, required: false
  private _queryPassive?: number; 
  public get queryPassive() {
    return this.getNumberAttribute('query_passive');
  }
  public set queryPassive(value: number) {
    this._queryPassive = value;
  }
  public resetQueryPassive() {
    this._queryPassive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryPassiveInput() {
    return this._queryPassive;
  }

  // resp - computed: false, optional: true, required: false
  private _resp?: number; 
  public get resp() {
    return this.getNumberAttribute('resp');
  }
  public set resp(value: number) {
    this._resp = value;
  }
  public resetResp() {
    this._resp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get respInput() {
    return this._resp;
  }

  // resp_bad_pkt - computed: false, optional: true, required: false
  private _respBadPkt?: number; 
  public get respBadPkt() {
    return this.getNumberAttribute('resp_bad_pkt');
  }
  public set respBadPkt(value: number) {
    this._respBadPkt = value;
  }
  public resetRespBadPkt() {
    this._respBadPkt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get respBadPktInput() {
    return this._respBadPkt;
  }

  // resp_bad_qr - computed: false, optional: true, required: false
  private _respBadQr?: number; 
  public get respBadQr() {
    return this.getNumberAttribute('resp_bad_qr');
  }
  public set respBadQr(value: number) {
    this._respBadQr = value;
  }
  public resetRespBadQr() {
    this._respBadQr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get respBadQrInput() {
    return this._respBadQr;
  }

  // resp_chg - computed: false, optional: true, required: false
  private _respChg?: number; 
  public get respChg() {
    return this.getNumberAttribute('resp_chg');
  }
  public set respChg(value: number) {
    this._respChg = value;
  }
  public resetRespChg() {
    this._respChg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get respChgInput() {
    return this._respChg;
  }

  // resp_empty - computed: false, optional: true, required: false
  private _respEmpty?: number; 
  public get respEmpty() {
    return this.getNumberAttribute('resp_empty');
  }
  public set respEmpty(value: number) {
    this._respEmpty = value;
  }
  public resetRespEmpty() {
    this._respEmpty = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get respEmptyInput() {
    return this._respEmpty;
  }

  // resp_err - computed: false, optional: true, required: false
  private _respErr?: number; 
  public get respErr() {
    return this.getNumberAttribute('resp_err');
  }
  public set respErr(value: number) {
    this._respErr = value;
  }
  public resetRespErr() {
    this._respErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get respErrInput() {
    return this._respErr;
  }

  // resp_local - computed: false, optional: true, required: false
  private _respLocal?: number; 
  public get respLocal() {
    return this.getNumberAttribute('resp_local');
  }
  public set respLocal(value: number) {
    this._respLocal = value;
  }
  public resetRespLocal() {
    this._respLocal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get respLocalInput() {
    return this._respLocal;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_dns64_stats thunder_cgnv6_dns64_stats}
*/
export class DataThunderCgnv6Dns64Stats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_cgnv6_dns64_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderCgnv6Dns64Stats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderCgnv6Dns64Stats to import
  * @param importFromId The id of the existing DataThunderCgnv6Dns64Stats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_dns64_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderCgnv6Dns64Stats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_cgnv6_dns64_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_dns64_stats thunder_cgnv6_dns64_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderCgnv6Dns64StatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderCgnv6Dns64StatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_cgnv6_dns64_stats',
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
  private _stats = new DataThunderCgnv6Dns64StatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderCgnv6Dns64StatsStats) {
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
      stats: dataThunderCgnv6Dns64StatsStatsToTerraform(this._stats.internalValue),
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
        value: dataThunderCgnv6Dns64StatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderCgnv6Dns64StatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
