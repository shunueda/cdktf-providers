// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_ndisc_ra_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSystemNdiscRaStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_ndisc_ra_stats#id DataThunderSystemNdiscRaStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_ndisc_ra_stats#stats DataThunderSystemNdiscRaStats#stats}
  */
  readonly stats?: DataThunderSystemNdiscRaStatsStats;
}
export interface DataThunderSystemNdiscRaStatsStats {
  /**
  * R.S. Bad Hop Limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_ndisc_ra_stats#bad_hop_limit DataThunderSystemNdiscRaStats#bad_hop_limit}
  */
  readonly badHopLimit?: number;
  /**
  * R.S. Unknown ICMPv6 Code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_ndisc_ra_stats#bad_icmpv6_code DataThunderSystemNdiscRaStats#bad_icmpv6_code}
  */
  readonly badIcmpv6Code?: number;
  /**
  * R.S. Bad ICMPv6 Checksum
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_ndisc_ra_stats#bad_icmpv6_csum DataThunderSystemNdiscRaStats#bad_icmpv6_csum}
  */
  readonly badIcmpv6Csum?: number;
  /**
  * R.S. Bad ICMPv6 Option
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_ndisc_ra_stats#bad_icmpv6_option DataThunderSystemNdiscRaStats#bad_icmpv6_option}
  */
  readonly badIcmpv6Option?: number;
  /**
  * Good Router Solicitations (R.S.) Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_ndisc_ra_stats#good_recv DataThunderSystemNdiscRaStats#good_recv}
  */
  readonly goodRecv?: number;
  /**
  * R.S. Src Link-Layer Option and Unspecified Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_ndisc_ra_stats#l2_addr_and_unspec DataThunderSystemNdiscRaStats#l2_addr_and_unspec}
  */
  readonly l2AddrAndUnspec?: number;
  /**
  * No Free Buffers to send R.A.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_ndisc_ra_stats#no_free_buffers DataThunderSystemNdiscRaStats#no_free_buffers}
  */
  readonly noFreeBuffers?: number;
  /**
  * Periodic Router Advertisements (R.A.) Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_ndisc_ra_stats#periodic_sent DataThunderSystemNdiscRaStats#periodic_sent}
  */
  readonly periodicSent?: number;
  /**
  * R.S. Rate Limited
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_ndisc_ra_stats#rate_limit DataThunderSystemNdiscRaStats#rate_limit}
  */
  readonly rateLimit?: number;
  /**
  * R.S. Truncated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_ndisc_ra_stats#truncated DataThunderSystemNdiscRaStats#truncated}
  */
  readonly truncated?: number;
}

export function dataThunderSystemNdiscRaStatsStatsToTerraform(struct?: DataThunderSystemNdiscRaStatsStatsOutputReference | DataThunderSystemNdiscRaStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bad_hop_limit: cdktf.numberToTerraform(struct!.badHopLimit),
    bad_icmpv6_code: cdktf.numberToTerraform(struct!.badIcmpv6Code),
    bad_icmpv6_csum: cdktf.numberToTerraform(struct!.badIcmpv6Csum),
    bad_icmpv6_option: cdktf.numberToTerraform(struct!.badIcmpv6Option),
    good_recv: cdktf.numberToTerraform(struct!.goodRecv),
    l2_addr_and_unspec: cdktf.numberToTerraform(struct!.l2AddrAndUnspec),
    no_free_buffers: cdktf.numberToTerraform(struct!.noFreeBuffers),
    periodic_sent: cdktf.numberToTerraform(struct!.periodicSent),
    rate_limit: cdktf.numberToTerraform(struct!.rateLimit),
    truncated: cdktf.numberToTerraform(struct!.truncated),
  }
}


export function dataThunderSystemNdiscRaStatsStatsToHclTerraform(struct?: DataThunderSystemNdiscRaStatsStatsOutputReference | DataThunderSystemNdiscRaStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bad_hop_limit: {
      value: cdktf.numberToHclTerraform(struct!.badHopLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bad_icmpv6_code: {
      value: cdktf.numberToHclTerraform(struct!.badIcmpv6Code),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bad_icmpv6_csum: {
      value: cdktf.numberToHclTerraform(struct!.badIcmpv6Csum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bad_icmpv6_option: {
      value: cdktf.numberToHclTerraform(struct!.badIcmpv6Option),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    good_recv: {
      value: cdktf.numberToHclTerraform(struct!.goodRecv),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    l2_addr_and_unspec: {
      value: cdktf.numberToHclTerraform(struct!.l2AddrAndUnspec),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_free_buffers: {
      value: cdktf.numberToHclTerraform(struct!.noFreeBuffers),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    periodic_sent: {
      value: cdktf.numberToHclTerraform(struct!.periodicSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rate_limit: {
      value: cdktf.numberToHclTerraform(struct!.rateLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    truncated: {
      value: cdktf.numberToHclTerraform(struct!.truncated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSystemNdiscRaStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSystemNdiscRaStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._badHopLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.badHopLimit = this._badHopLimit;
    }
    if (this._badIcmpv6Code !== undefined) {
      hasAnyValues = true;
      internalValueResult.badIcmpv6Code = this._badIcmpv6Code;
    }
    if (this._badIcmpv6Csum !== undefined) {
      hasAnyValues = true;
      internalValueResult.badIcmpv6Csum = this._badIcmpv6Csum;
    }
    if (this._badIcmpv6Option !== undefined) {
      hasAnyValues = true;
      internalValueResult.badIcmpv6Option = this._badIcmpv6Option;
    }
    if (this._goodRecv !== undefined) {
      hasAnyValues = true;
      internalValueResult.goodRecv = this._goodRecv;
    }
    if (this._l2AddrAndUnspec !== undefined) {
      hasAnyValues = true;
      internalValueResult.l2AddrAndUnspec = this._l2AddrAndUnspec;
    }
    if (this._noFreeBuffers !== undefined) {
      hasAnyValues = true;
      internalValueResult.noFreeBuffers = this._noFreeBuffers;
    }
    if (this._periodicSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.periodicSent = this._periodicSent;
    }
    if (this._rateLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateLimit = this._rateLimit;
    }
    if (this._truncated !== undefined) {
      hasAnyValues = true;
      internalValueResult.truncated = this._truncated;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSystemNdiscRaStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._badHopLimit = undefined;
      this._badIcmpv6Code = undefined;
      this._badIcmpv6Csum = undefined;
      this._badIcmpv6Option = undefined;
      this._goodRecv = undefined;
      this._l2AddrAndUnspec = undefined;
      this._noFreeBuffers = undefined;
      this._periodicSent = undefined;
      this._rateLimit = undefined;
      this._truncated = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._badHopLimit = value.badHopLimit;
      this._badIcmpv6Code = value.badIcmpv6Code;
      this._badIcmpv6Csum = value.badIcmpv6Csum;
      this._badIcmpv6Option = value.badIcmpv6Option;
      this._goodRecv = value.goodRecv;
      this._l2AddrAndUnspec = value.l2AddrAndUnspec;
      this._noFreeBuffers = value.noFreeBuffers;
      this._periodicSent = value.periodicSent;
      this._rateLimit = value.rateLimit;
      this._truncated = value.truncated;
    }
  }

  // bad_hop_limit - computed: false, optional: true, required: false
  private _badHopLimit?: number; 
  public get badHopLimit() {
    return this.getNumberAttribute('bad_hop_limit');
  }
  public set badHopLimit(value: number) {
    this._badHopLimit = value;
  }
  public resetBadHopLimit() {
    this._badHopLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badHopLimitInput() {
    return this._badHopLimit;
  }

  // bad_icmpv6_code - computed: false, optional: true, required: false
  private _badIcmpv6Code?: number; 
  public get badIcmpv6Code() {
    return this.getNumberAttribute('bad_icmpv6_code');
  }
  public set badIcmpv6Code(value: number) {
    this._badIcmpv6Code = value;
  }
  public resetBadIcmpv6Code() {
    this._badIcmpv6Code = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badIcmpv6CodeInput() {
    return this._badIcmpv6Code;
  }

  // bad_icmpv6_csum - computed: false, optional: true, required: false
  private _badIcmpv6Csum?: number; 
  public get badIcmpv6Csum() {
    return this.getNumberAttribute('bad_icmpv6_csum');
  }
  public set badIcmpv6Csum(value: number) {
    this._badIcmpv6Csum = value;
  }
  public resetBadIcmpv6Csum() {
    this._badIcmpv6Csum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badIcmpv6CsumInput() {
    return this._badIcmpv6Csum;
  }

  // bad_icmpv6_option - computed: false, optional: true, required: false
  private _badIcmpv6Option?: number; 
  public get badIcmpv6Option() {
    return this.getNumberAttribute('bad_icmpv6_option');
  }
  public set badIcmpv6Option(value: number) {
    this._badIcmpv6Option = value;
  }
  public resetBadIcmpv6Option() {
    this._badIcmpv6Option = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badIcmpv6OptionInput() {
    return this._badIcmpv6Option;
  }

  // good_recv - computed: false, optional: true, required: false
  private _goodRecv?: number; 
  public get goodRecv() {
    return this.getNumberAttribute('good_recv');
  }
  public set goodRecv(value: number) {
    this._goodRecv = value;
  }
  public resetGoodRecv() {
    this._goodRecv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get goodRecvInput() {
    return this._goodRecv;
  }

  // l2_addr_and_unspec - computed: false, optional: true, required: false
  private _l2AddrAndUnspec?: number; 
  public get l2AddrAndUnspec() {
    return this.getNumberAttribute('l2_addr_and_unspec');
  }
  public set l2AddrAndUnspec(value: number) {
    this._l2AddrAndUnspec = value;
  }
  public resetL2AddrAndUnspec() {
    this._l2AddrAndUnspec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l2AddrAndUnspecInput() {
    return this._l2AddrAndUnspec;
  }

  // no_free_buffers - computed: false, optional: true, required: false
  private _noFreeBuffers?: number; 
  public get noFreeBuffers() {
    return this.getNumberAttribute('no_free_buffers');
  }
  public set noFreeBuffers(value: number) {
    this._noFreeBuffers = value;
  }
  public resetNoFreeBuffers() {
    this._noFreeBuffers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noFreeBuffersInput() {
    return this._noFreeBuffers;
  }

  // periodic_sent - computed: false, optional: true, required: false
  private _periodicSent?: number; 
  public get periodicSent() {
    return this.getNumberAttribute('periodic_sent');
  }
  public set periodicSent(value: number) {
    this._periodicSent = value;
  }
  public resetPeriodicSent() {
    this._periodicSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodicSentInput() {
    return this._periodicSent;
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

  // truncated - computed: false, optional: true, required: false
  private _truncated?: number; 
  public get truncated() {
    return this.getNumberAttribute('truncated');
  }
  public set truncated(value: number) {
    this._truncated = value;
  }
  public resetTruncated() {
    this._truncated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get truncatedInput() {
    return this._truncated;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_ndisc_ra_stats thunder_system_ndisc_ra_stats}
*/
export class DataThunderSystemNdiscRaStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_system_ndisc_ra_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSystemNdiscRaStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSystemNdiscRaStats to import
  * @param importFromId The id of the existing DataThunderSystemNdiscRaStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_ndisc_ra_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSystemNdiscRaStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_system_ndisc_ra_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_ndisc_ra_stats thunder_system_ndisc_ra_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSystemNdiscRaStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSystemNdiscRaStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_system_ndisc_ra_stats',
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
  private _stats = new DataThunderSystemNdiscRaStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderSystemNdiscRaStatsStats) {
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
      stats: dataThunderSystemNdiscRaStatsStatsToTerraform(this._stats.internalValue),
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
        value: dataThunderSystemNdiscRaStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSystemNdiscRaStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
