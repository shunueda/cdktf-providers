// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lw_4o6_global_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderCgnv6Lw4O6GlobalStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lw_4o6_global_stats#id DataThunderCgnv6Lw4O6GlobalStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lw_4o6_global_stats#stats DataThunderCgnv6Lw4O6GlobalStats#stats}
  */
  readonly stats?: DataThunderCgnv6Lw4O6GlobalStatsStats;
}
export interface DataThunderCgnv6Lw4O6GlobalStatsStats {
  /**
  * All Hairpinning Drops
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lw_4o6_global_stats#all_hairpinning_drop DataThunderCgnv6Lw4O6GlobalStats#all_hairpinning_drop}
  */
  readonly allHairpinningDrop?: number;
  /**
  * Total Entries Configured
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lw_4o6_global_stats#entry_count DataThunderCgnv6Lw4O6GlobalStats#entry_count}
  */
  readonly entryCount?: number;
  /**
  * Forward Route Lookup Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lw_4o6_global_stats#fwd_lookup_failed DataThunderCgnv6Lw4O6GlobalStats#fwd_lookup_failed}
  */
  readonly fwdLookupFailed?: number;
  /**
  * Inbound ICMP Drops
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lw_4o6_global_stats#icmp_inbound_drop DataThunderCgnv6Lw4O6GlobalStats#icmp_inbound_drop}
  */
  readonly icmpInboundDrop?: number;
  /**
  * LW-4over6 Interfaces not Configured Drops
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lw_4o6_global_stats#interface_not_configured DataThunderCgnv6Lw4O6GlobalStats#interface_not_configured}
  */
  readonly interfaceNotConfigured?: number;
  /**
  * No Forward Binding Table Entry Match Drops
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lw_4o6_global_stats#no_binding_table_matches_fwd DataThunderCgnv6Lw4O6GlobalStats#no_binding_table_matches_fwd}
  */
  readonly noBindingTableMatchesFwd?: number;
  /**
  * No Reverse Binding Table Entry Match Drops
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lw_4o6_global_stats#no_binding_table_matches_rev DataThunderCgnv6Lw4O6GlobalStats#no_binding_table_matches_rev}
  */
  readonly noBindingTableMatchesRev?: number;
  /**
  * No-Reverse-Match ICMP Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lw_4o6_global_stats#no_match_icmp_sent DataThunderCgnv6Lw4O6GlobalStats#no_match_icmp_sent}
  */
  readonly noMatchIcmpSent?: number;
  /**
  * No-Forward-Match ICMPv6 Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lw_4o6_global_stats#no_match_icmpv6_sent DataThunderCgnv6Lw4O6GlobalStats#no_match_icmpv6_sent}
  */
  readonly noMatchIcmpv6Sent?: number;
  /**
  * Reverse Route Lookup Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lw_4o6_global_stats#rev_lookup_failed DataThunderCgnv6Lw4O6GlobalStats#rev_lookup_failed}
  */
  readonly revLookupFailed?: number;
  /**
  * Self-Hairpinning Drops
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lw_4o6_global_stats#self_hairpinning_drop DataThunderCgnv6Lw4O6GlobalStats#self_hairpinning_drop}
  */
  readonly selfHairpinningDrop?: number;
}

export function dataThunderCgnv6Lw4O6GlobalStatsStatsToTerraform(struct?: DataThunderCgnv6Lw4O6GlobalStatsStatsOutputReference | DataThunderCgnv6Lw4O6GlobalStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_hairpinning_drop: cdktf.numberToTerraform(struct!.allHairpinningDrop),
    entry_count: cdktf.numberToTerraform(struct!.entryCount),
    fwd_lookup_failed: cdktf.numberToTerraform(struct!.fwdLookupFailed),
    icmp_inbound_drop: cdktf.numberToTerraform(struct!.icmpInboundDrop),
    interface_not_configured: cdktf.numberToTerraform(struct!.interfaceNotConfigured),
    no_binding_table_matches_fwd: cdktf.numberToTerraform(struct!.noBindingTableMatchesFwd),
    no_binding_table_matches_rev: cdktf.numberToTerraform(struct!.noBindingTableMatchesRev),
    no_match_icmp_sent: cdktf.numberToTerraform(struct!.noMatchIcmpSent),
    no_match_icmpv6_sent: cdktf.numberToTerraform(struct!.noMatchIcmpv6Sent),
    rev_lookup_failed: cdktf.numberToTerraform(struct!.revLookupFailed),
    self_hairpinning_drop: cdktf.numberToTerraform(struct!.selfHairpinningDrop),
  }
}


export function dataThunderCgnv6Lw4O6GlobalStatsStatsToHclTerraform(struct?: DataThunderCgnv6Lw4O6GlobalStatsStatsOutputReference | DataThunderCgnv6Lw4O6GlobalStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_hairpinning_drop: {
      value: cdktf.numberToHclTerraform(struct!.allHairpinningDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    entry_count: {
      value: cdktf.numberToHclTerraform(struct!.entryCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fwd_lookup_failed: {
      value: cdktf.numberToHclTerraform(struct!.fwdLookupFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmp_inbound_drop: {
      value: cdktf.numberToHclTerraform(struct!.icmpInboundDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interface_not_configured: {
      value: cdktf.numberToHclTerraform(struct!.interfaceNotConfigured),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_binding_table_matches_fwd: {
      value: cdktf.numberToHclTerraform(struct!.noBindingTableMatchesFwd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_binding_table_matches_rev: {
      value: cdktf.numberToHclTerraform(struct!.noBindingTableMatchesRev),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_match_icmp_sent: {
      value: cdktf.numberToHclTerraform(struct!.noMatchIcmpSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_match_icmpv6_sent: {
      value: cdktf.numberToHclTerraform(struct!.noMatchIcmpv6Sent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rev_lookup_failed: {
      value: cdktf.numberToHclTerraform(struct!.revLookupFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    self_hairpinning_drop: {
      value: cdktf.numberToHclTerraform(struct!.selfHairpinningDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderCgnv6Lw4O6GlobalStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderCgnv6Lw4O6GlobalStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allHairpinningDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.allHairpinningDrop = this._allHairpinningDrop;
    }
    if (this._entryCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.entryCount = this._entryCount;
    }
    if (this._fwdLookupFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwdLookupFailed = this._fwdLookupFailed;
    }
    if (this._icmpInboundDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpInboundDrop = this._icmpInboundDrop;
    }
    if (this._interfaceNotConfigured !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceNotConfigured = this._interfaceNotConfigured;
    }
    if (this._noBindingTableMatchesFwd !== undefined) {
      hasAnyValues = true;
      internalValueResult.noBindingTableMatchesFwd = this._noBindingTableMatchesFwd;
    }
    if (this._noBindingTableMatchesRev !== undefined) {
      hasAnyValues = true;
      internalValueResult.noBindingTableMatchesRev = this._noBindingTableMatchesRev;
    }
    if (this._noMatchIcmpSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.noMatchIcmpSent = this._noMatchIcmpSent;
    }
    if (this._noMatchIcmpv6Sent !== undefined) {
      hasAnyValues = true;
      internalValueResult.noMatchIcmpv6Sent = this._noMatchIcmpv6Sent;
    }
    if (this._revLookupFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.revLookupFailed = this._revLookupFailed;
    }
    if (this._selfHairpinningDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.selfHairpinningDrop = this._selfHairpinningDrop;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderCgnv6Lw4O6GlobalStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allHairpinningDrop = undefined;
      this._entryCount = undefined;
      this._fwdLookupFailed = undefined;
      this._icmpInboundDrop = undefined;
      this._interfaceNotConfigured = undefined;
      this._noBindingTableMatchesFwd = undefined;
      this._noBindingTableMatchesRev = undefined;
      this._noMatchIcmpSent = undefined;
      this._noMatchIcmpv6Sent = undefined;
      this._revLookupFailed = undefined;
      this._selfHairpinningDrop = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allHairpinningDrop = value.allHairpinningDrop;
      this._entryCount = value.entryCount;
      this._fwdLookupFailed = value.fwdLookupFailed;
      this._icmpInboundDrop = value.icmpInboundDrop;
      this._interfaceNotConfigured = value.interfaceNotConfigured;
      this._noBindingTableMatchesFwd = value.noBindingTableMatchesFwd;
      this._noBindingTableMatchesRev = value.noBindingTableMatchesRev;
      this._noMatchIcmpSent = value.noMatchIcmpSent;
      this._noMatchIcmpv6Sent = value.noMatchIcmpv6Sent;
      this._revLookupFailed = value.revLookupFailed;
      this._selfHairpinningDrop = value.selfHairpinningDrop;
    }
  }

  // all_hairpinning_drop - computed: false, optional: true, required: false
  private _allHairpinningDrop?: number; 
  public get allHairpinningDrop() {
    return this.getNumberAttribute('all_hairpinning_drop');
  }
  public set allHairpinningDrop(value: number) {
    this._allHairpinningDrop = value;
  }
  public resetAllHairpinningDrop() {
    this._allHairpinningDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allHairpinningDropInput() {
    return this._allHairpinningDrop;
  }

  // entry_count - computed: false, optional: true, required: false
  private _entryCount?: number; 
  public get entryCount() {
    return this.getNumberAttribute('entry_count');
  }
  public set entryCount(value: number) {
    this._entryCount = value;
  }
  public resetEntryCount() {
    this._entryCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryCountInput() {
    return this._entryCount;
  }

  // fwd_lookup_failed - computed: false, optional: true, required: false
  private _fwdLookupFailed?: number; 
  public get fwdLookupFailed() {
    return this.getNumberAttribute('fwd_lookup_failed');
  }
  public set fwdLookupFailed(value: number) {
    this._fwdLookupFailed = value;
  }
  public resetFwdLookupFailed() {
    this._fwdLookupFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwdLookupFailedInput() {
    return this._fwdLookupFailed;
  }

  // icmp_inbound_drop - computed: false, optional: true, required: false
  private _icmpInboundDrop?: number; 
  public get icmpInboundDrop() {
    return this.getNumberAttribute('icmp_inbound_drop');
  }
  public set icmpInboundDrop(value: number) {
    this._icmpInboundDrop = value;
  }
  public resetIcmpInboundDrop() {
    this._icmpInboundDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpInboundDropInput() {
    return this._icmpInboundDrop;
  }

  // interface_not_configured - computed: false, optional: true, required: false
  private _interfaceNotConfigured?: number; 
  public get interfaceNotConfigured() {
    return this.getNumberAttribute('interface_not_configured');
  }
  public set interfaceNotConfigured(value: number) {
    this._interfaceNotConfigured = value;
  }
  public resetInterfaceNotConfigured() {
    this._interfaceNotConfigured = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceNotConfiguredInput() {
    return this._interfaceNotConfigured;
  }

  // no_binding_table_matches_fwd - computed: false, optional: true, required: false
  private _noBindingTableMatchesFwd?: number; 
  public get noBindingTableMatchesFwd() {
    return this.getNumberAttribute('no_binding_table_matches_fwd');
  }
  public set noBindingTableMatchesFwd(value: number) {
    this._noBindingTableMatchesFwd = value;
  }
  public resetNoBindingTableMatchesFwd() {
    this._noBindingTableMatchesFwd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noBindingTableMatchesFwdInput() {
    return this._noBindingTableMatchesFwd;
  }

  // no_binding_table_matches_rev - computed: false, optional: true, required: false
  private _noBindingTableMatchesRev?: number; 
  public get noBindingTableMatchesRev() {
    return this.getNumberAttribute('no_binding_table_matches_rev');
  }
  public set noBindingTableMatchesRev(value: number) {
    this._noBindingTableMatchesRev = value;
  }
  public resetNoBindingTableMatchesRev() {
    this._noBindingTableMatchesRev = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noBindingTableMatchesRevInput() {
    return this._noBindingTableMatchesRev;
  }

  // no_match_icmp_sent - computed: false, optional: true, required: false
  private _noMatchIcmpSent?: number; 
  public get noMatchIcmpSent() {
    return this.getNumberAttribute('no_match_icmp_sent');
  }
  public set noMatchIcmpSent(value: number) {
    this._noMatchIcmpSent = value;
  }
  public resetNoMatchIcmpSent() {
    this._noMatchIcmpSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noMatchIcmpSentInput() {
    return this._noMatchIcmpSent;
  }

  // no_match_icmpv6_sent - computed: false, optional: true, required: false
  private _noMatchIcmpv6Sent?: number; 
  public get noMatchIcmpv6Sent() {
    return this.getNumberAttribute('no_match_icmpv6_sent');
  }
  public set noMatchIcmpv6Sent(value: number) {
    this._noMatchIcmpv6Sent = value;
  }
  public resetNoMatchIcmpv6Sent() {
    this._noMatchIcmpv6Sent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noMatchIcmpv6SentInput() {
    return this._noMatchIcmpv6Sent;
  }

  // rev_lookup_failed - computed: false, optional: true, required: false
  private _revLookupFailed?: number; 
  public get revLookupFailed() {
    return this.getNumberAttribute('rev_lookup_failed');
  }
  public set revLookupFailed(value: number) {
    this._revLookupFailed = value;
  }
  public resetRevLookupFailed() {
    this._revLookupFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revLookupFailedInput() {
    return this._revLookupFailed;
  }

  // self_hairpinning_drop - computed: false, optional: true, required: false
  private _selfHairpinningDrop?: number; 
  public get selfHairpinningDrop() {
    return this.getNumberAttribute('self_hairpinning_drop');
  }
  public set selfHairpinningDrop(value: number) {
    this._selfHairpinningDrop = value;
  }
  public resetSelfHairpinningDrop() {
    this._selfHairpinningDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selfHairpinningDropInput() {
    return this._selfHairpinningDrop;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lw_4o6_global_stats thunder_cgnv6_lw_4o6_global_stats}
*/
export class DataThunderCgnv6Lw4O6GlobalStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_cgnv6_lw_4o6_global_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderCgnv6Lw4O6GlobalStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderCgnv6Lw4O6GlobalStats to import
  * @param importFromId The id of the existing DataThunderCgnv6Lw4O6GlobalStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lw_4o6_global_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderCgnv6Lw4O6GlobalStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_cgnv6_lw_4o6_global_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lw_4o6_global_stats thunder_cgnv6_lw_4o6_global_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderCgnv6Lw4O6GlobalStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderCgnv6Lw4O6GlobalStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_cgnv6_lw_4o6_global_stats',
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
  private _stats = new DataThunderCgnv6Lw4O6GlobalStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderCgnv6Lw4O6GlobalStatsStats) {
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
      stats: dataThunderCgnv6Lw4O6GlobalStatsStatsToTerraform(this._stats.internalValue),
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
        value: dataThunderCgnv6Lw4O6GlobalStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderCgnv6Lw4O6GlobalStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
