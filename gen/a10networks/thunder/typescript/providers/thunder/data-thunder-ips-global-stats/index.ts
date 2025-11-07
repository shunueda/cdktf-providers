// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ips_global_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderIpsGlobalStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ips_global_stats#id DataThunderIpsGlobalStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ips_global_stats#stats DataThunderIpsGlobalStats#stats}
  */
  readonly stats?: DataThunderIpsGlobalStatsStats;
}
export interface DataThunderIpsGlobalStatsStats {
  /**
  * IPS Matched Action Blacklist
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ips_global_stats#ips_matched_action_blacklist DataThunderIpsGlobalStats#ips_matched_action_blacklist}
  */
  readonly ipsMatchedActionBlacklist?: number;
  /**
  * IPS Matched Action Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ips_global_stats#ips_matched_action_drop DataThunderIpsGlobalStats#ips_matched_action_drop}
  */
  readonly ipsMatchedActionDrop?: number;
  /**
  * IPS Matched Action Pass
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ips_global_stats#ips_matched_action_pass DataThunderIpsGlobalStats#ips_matched_action_pass}
  */
  readonly ipsMatchedActionPass?: number;
  /**
  * IPS Matched DNS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ips_global_stats#ips_matched_dns DataThunderIpsGlobalStats#ips_matched_dns}
  */
  readonly ipsMatchedDns?: number;
  /**
  * IPS Matched HTTP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ips_global_stats#ips_matched_http DataThunderIpsGlobalStats#ips_matched_http}
  */
  readonly ipsMatchedHttp?: number;
  /**
  * IPS Matched Other
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ips_global_stats#ips_matched_other DataThunderIpsGlobalStats#ips_matched_other}
  */
  readonly ipsMatchedOther?: number;
  /**
  * IPS Matched Severity High
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ips_global_stats#ips_matched_severity_high DataThunderIpsGlobalStats#ips_matched_severity_high}
  */
  readonly ipsMatchedSeverityHigh?: number;
  /**
  * IPS Matched Severity Low
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ips_global_stats#ips_matched_severity_low DataThunderIpsGlobalStats#ips_matched_severity_low}
  */
  readonly ipsMatchedSeverityLow?: number;
  /**
  * IPS Matched Severity Medium
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ips_global_stats#ips_matched_severity_medium DataThunderIpsGlobalStats#ips_matched_severity_medium}
  */
  readonly ipsMatchedSeverityMedium?: number;
  /**
  * IPS Matched Total
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ips_global_stats#ips_matched_total DataThunderIpsGlobalStats#ips_matched_total}
  */
  readonly ipsMatchedTotal?: number;
}

export function dataThunderIpsGlobalStatsStatsToTerraform(struct?: DataThunderIpsGlobalStatsStatsOutputReference | DataThunderIpsGlobalStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ips_matched_action_blacklist: cdktf.numberToTerraform(struct!.ipsMatchedActionBlacklist),
    ips_matched_action_drop: cdktf.numberToTerraform(struct!.ipsMatchedActionDrop),
    ips_matched_action_pass: cdktf.numberToTerraform(struct!.ipsMatchedActionPass),
    ips_matched_dns: cdktf.numberToTerraform(struct!.ipsMatchedDns),
    ips_matched_http: cdktf.numberToTerraform(struct!.ipsMatchedHttp),
    ips_matched_other: cdktf.numberToTerraform(struct!.ipsMatchedOther),
    ips_matched_severity_high: cdktf.numberToTerraform(struct!.ipsMatchedSeverityHigh),
    ips_matched_severity_low: cdktf.numberToTerraform(struct!.ipsMatchedSeverityLow),
    ips_matched_severity_medium: cdktf.numberToTerraform(struct!.ipsMatchedSeverityMedium),
    ips_matched_total: cdktf.numberToTerraform(struct!.ipsMatchedTotal),
  }
}


export function dataThunderIpsGlobalStatsStatsToHclTerraform(struct?: DataThunderIpsGlobalStatsStatsOutputReference | DataThunderIpsGlobalStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ips_matched_action_blacklist: {
      value: cdktf.numberToHclTerraform(struct!.ipsMatchedActionBlacklist),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ips_matched_action_drop: {
      value: cdktf.numberToHclTerraform(struct!.ipsMatchedActionDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ips_matched_action_pass: {
      value: cdktf.numberToHclTerraform(struct!.ipsMatchedActionPass),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ips_matched_dns: {
      value: cdktf.numberToHclTerraform(struct!.ipsMatchedDns),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ips_matched_http: {
      value: cdktf.numberToHclTerraform(struct!.ipsMatchedHttp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ips_matched_other: {
      value: cdktf.numberToHclTerraform(struct!.ipsMatchedOther),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ips_matched_severity_high: {
      value: cdktf.numberToHclTerraform(struct!.ipsMatchedSeverityHigh),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ips_matched_severity_low: {
      value: cdktf.numberToHclTerraform(struct!.ipsMatchedSeverityLow),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ips_matched_severity_medium: {
      value: cdktf.numberToHclTerraform(struct!.ipsMatchedSeverityMedium),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ips_matched_total: {
      value: cdktf.numberToHclTerraform(struct!.ipsMatchedTotal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderIpsGlobalStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderIpsGlobalStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipsMatchedActionBlacklist !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsMatchedActionBlacklist = this._ipsMatchedActionBlacklist;
    }
    if (this._ipsMatchedActionDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsMatchedActionDrop = this._ipsMatchedActionDrop;
    }
    if (this._ipsMatchedActionPass !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsMatchedActionPass = this._ipsMatchedActionPass;
    }
    if (this._ipsMatchedDns !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsMatchedDns = this._ipsMatchedDns;
    }
    if (this._ipsMatchedHttp !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsMatchedHttp = this._ipsMatchedHttp;
    }
    if (this._ipsMatchedOther !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsMatchedOther = this._ipsMatchedOther;
    }
    if (this._ipsMatchedSeverityHigh !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsMatchedSeverityHigh = this._ipsMatchedSeverityHigh;
    }
    if (this._ipsMatchedSeverityLow !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsMatchedSeverityLow = this._ipsMatchedSeverityLow;
    }
    if (this._ipsMatchedSeverityMedium !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsMatchedSeverityMedium = this._ipsMatchedSeverityMedium;
    }
    if (this._ipsMatchedTotal !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsMatchedTotal = this._ipsMatchedTotal;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderIpsGlobalStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipsMatchedActionBlacklist = undefined;
      this._ipsMatchedActionDrop = undefined;
      this._ipsMatchedActionPass = undefined;
      this._ipsMatchedDns = undefined;
      this._ipsMatchedHttp = undefined;
      this._ipsMatchedOther = undefined;
      this._ipsMatchedSeverityHigh = undefined;
      this._ipsMatchedSeverityLow = undefined;
      this._ipsMatchedSeverityMedium = undefined;
      this._ipsMatchedTotal = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipsMatchedActionBlacklist = value.ipsMatchedActionBlacklist;
      this._ipsMatchedActionDrop = value.ipsMatchedActionDrop;
      this._ipsMatchedActionPass = value.ipsMatchedActionPass;
      this._ipsMatchedDns = value.ipsMatchedDns;
      this._ipsMatchedHttp = value.ipsMatchedHttp;
      this._ipsMatchedOther = value.ipsMatchedOther;
      this._ipsMatchedSeverityHigh = value.ipsMatchedSeverityHigh;
      this._ipsMatchedSeverityLow = value.ipsMatchedSeverityLow;
      this._ipsMatchedSeverityMedium = value.ipsMatchedSeverityMedium;
      this._ipsMatchedTotal = value.ipsMatchedTotal;
    }
  }

  // ips_matched_action_blacklist - computed: false, optional: true, required: false
  private _ipsMatchedActionBlacklist?: number; 
  public get ipsMatchedActionBlacklist() {
    return this.getNumberAttribute('ips_matched_action_blacklist');
  }
  public set ipsMatchedActionBlacklist(value: number) {
    this._ipsMatchedActionBlacklist = value;
  }
  public resetIpsMatchedActionBlacklist() {
    this._ipsMatchedActionBlacklist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsMatchedActionBlacklistInput() {
    return this._ipsMatchedActionBlacklist;
  }

  // ips_matched_action_drop - computed: false, optional: true, required: false
  private _ipsMatchedActionDrop?: number; 
  public get ipsMatchedActionDrop() {
    return this.getNumberAttribute('ips_matched_action_drop');
  }
  public set ipsMatchedActionDrop(value: number) {
    this._ipsMatchedActionDrop = value;
  }
  public resetIpsMatchedActionDrop() {
    this._ipsMatchedActionDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsMatchedActionDropInput() {
    return this._ipsMatchedActionDrop;
  }

  // ips_matched_action_pass - computed: false, optional: true, required: false
  private _ipsMatchedActionPass?: number; 
  public get ipsMatchedActionPass() {
    return this.getNumberAttribute('ips_matched_action_pass');
  }
  public set ipsMatchedActionPass(value: number) {
    this._ipsMatchedActionPass = value;
  }
  public resetIpsMatchedActionPass() {
    this._ipsMatchedActionPass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsMatchedActionPassInput() {
    return this._ipsMatchedActionPass;
  }

  // ips_matched_dns - computed: false, optional: true, required: false
  private _ipsMatchedDns?: number; 
  public get ipsMatchedDns() {
    return this.getNumberAttribute('ips_matched_dns');
  }
  public set ipsMatchedDns(value: number) {
    this._ipsMatchedDns = value;
  }
  public resetIpsMatchedDns() {
    this._ipsMatchedDns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsMatchedDnsInput() {
    return this._ipsMatchedDns;
  }

  // ips_matched_http - computed: false, optional: true, required: false
  private _ipsMatchedHttp?: number; 
  public get ipsMatchedHttp() {
    return this.getNumberAttribute('ips_matched_http');
  }
  public set ipsMatchedHttp(value: number) {
    this._ipsMatchedHttp = value;
  }
  public resetIpsMatchedHttp() {
    this._ipsMatchedHttp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsMatchedHttpInput() {
    return this._ipsMatchedHttp;
  }

  // ips_matched_other - computed: false, optional: true, required: false
  private _ipsMatchedOther?: number; 
  public get ipsMatchedOther() {
    return this.getNumberAttribute('ips_matched_other');
  }
  public set ipsMatchedOther(value: number) {
    this._ipsMatchedOther = value;
  }
  public resetIpsMatchedOther() {
    this._ipsMatchedOther = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsMatchedOtherInput() {
    return this._ipsMatchedOther;
  }

  // ips_matched_severity_high - computed: false, optional: true, required: false
  private _ipsMatchedSeverityHigh?: number; 
  public get ipsMatchedSeverityHigh() {
    return this.getNumberAttribute('ips_matched_severity_high');
  }
  public set ipsMatchedSeverityHigh(value: number) {
    this._ipsMatchedSeverityHigh = value;
  }
  public resetIpsMatchedSeverityHigh() {
    this._ipsMatchedSeverityHigh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsMatchedSeverityHighInput() {
    return this._ipsMatchedSeverityHigh;
  }

  // ips_matched_severity_low - computed: false, optional: true, required: false
  private _ipsMatchedSeverityLow?: number; 
  public get ipsMatchedSeverityLow() {
    return this.getNumberAttribute('ips_matched_severity_low');
  }
  public set ipsMatchedSeverityLow(value: number) {
    this._ipsMatchedSeverityLow = value;
  }
  public resetIpsMatchedSeverityLow() {
    this._ipsMatchedSeverityLow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsMatchedSeverityLowInput() {
    return this._ipsMatchedSeverityLow;
  }

  // ips_matched_severity_medium - computed: false, optional: true, required: false
  private _ipsMatchedSeverityMedium?: number; 
  public get ipsMatchedSeverityMedium() {
    return this.getNumberAttribute('ips_matched_severity_medium');
  }
  public set ipsMatchedSeverityMedium(value: number) {
    this._ipsMatchedSeverityMedium = value;
  }
  public resetIpsMatchedSeverityMedium() {
    this._ipsMatchedSeverityMedium = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsMatchedSeverityMediumInput() {
    return this._ipsMatchedSeverityMedium;
  }

  // ips_matched_total - computed: false, optional: true, required: false
  private _ipsMatchedTotal?: number; 
  public get ipsMatchedTotal() {
    return this.getNumberAttribute('ips_matched_total');
  }
  public set ipsMatchedTotal(value: number) {
    this._ipsMatchedTotal = value;
  }
  public resetIpsMatchedTotal() {
    this._ipsMatchedTotal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsMatchedTotalInput() {
    return this._ipsMatchedTotal;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ips_global_stats thunder_ips_global_stats}
*/
export class DataThunderIpsGlobalStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ips_global_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderIpsGlobalStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderIpsGlobalStats to import
  * @param importFromId The id of the existing DataThunderIpsGlobalStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ips_global_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderIpsGlobalStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ips_global_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ips_global_stats thunder_ips_global_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderIpsGlobalStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderIpsGlobalStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_ips_global_stats',
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
  private _stats = new DataThunderIpsGlobalStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderIpsGlobalStatsStats) {
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
      stats: dataThunderIpsGlobalStatsStatsToTerraform(this._stats.internalValue),
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
        value: dataThunderIpsGlobalStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderIpsGlobalStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
