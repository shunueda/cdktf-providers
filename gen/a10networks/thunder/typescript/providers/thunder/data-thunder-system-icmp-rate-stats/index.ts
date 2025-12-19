// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_icmp_rate_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSystemIcmpRateStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_icmp_rate_stats#id DataThunderSystemIcmpRateStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_icmp_rate_stats#stats DataThunderSystemIcmpRateStats#stats}
  */
  readonly stats?: DataThunderSystemIcmpRateStatsStats;
}
export interface DataThunderSystemIcmpRateStatsStats {
  /**
  * Current rate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_icmp_rate_stats#curr_rate DataThunderSystemIcmpRateStats#curr_rate}
  */
  readonly currRate?: number;
  /**
  * Interfaces rate limit drops
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_icmp_rate_stats#limit_intf_drop DataThunderSystemIcmpRateStats#limit_intf_drop}
  */
  readonly limitIntfDrop?: number;
  /**
  * Total rate limit drops
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_icmp_rate_stats#limit_total_drop DataThunderSystemIcmpRateStats#limit_total_drop}
  */
  readonly limitTotalDrop?: number;
  /**
  * Virtual Server rate limit drops
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_icmp_rate_stats#limit_vserver_drop DataThunderSystemIcmpRateStats#limit_vserver_drop}
  */
  readonly limitVserverDrop?: number;
  /**
  * Lockup time left
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_icmp_rate_stats#lockup_time_left DataThunderSystemIcmpRateStats#lockup_time_left}
  */
  readonly lockupTimeLeft?: number;
  /**
  * Over limit drops
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_icmp_rate_stats#over_limit_drop DataThunderSystemIcmpRateStats#over_limit_drop}
  */
  readonly overLimitDrop?: number;
  /**
  * Current rate (v6)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_icmp_rate_stats#v6_curr_rate DataThunderSystemIcmpRateStats#v6_curr_rate}
  */
  readonly v6CurrRate?: number;
  /**
  * Interfaces rate limit drops (v6)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_icmp_rate_stats#v6_limit_intf_drop DataThunderSystemIcmpRateStats#v6_limit_intf_drop}
  */
  readonly v6LimitIntfDrop?: number;
  /**
  * Total rate limit drops (v6)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_icmp_rate_stats#v6_limit_total_drop DataThunderSystemIcmpRateStats#v6_limit_total_drop}
  */
  readonly v6LimitTotalDrop?: number;
  /**
  * Virtual Server rate limit drops (v6)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_icmp_rate_stats#v6_limit_vserver_drop DataThunderSystemIcmpRateStats#v6_limit_vserver_drop}
  */
  readonly v6LimitVserverDrop?: number;
  /**
  * Lockup time left (v6)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_icmp_rate_stats#v6_lockup_time_left DataThunderSystemIcmpRateStats#v6_lockup_time_left}
  */
  readonly v6LockupTimeLeft?: number;
  /**
  * Over limit drops (v6)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_icmp_rate_stats#v6_over_limit_drop DataThunderSystemIcmpRateStats#v6_over_limit_drop}
  */
  readonly v6OverLimitDrop?: number;
}

export function dataThunderSystemIcmpRateStatsStatsToTerraform(struct?: DataThunderSystemIcmpRateStatsStatsOutputReference | DataThunderSystemIcmpRateStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    curr_rate: cdktf.numberToTerraform(struct!.currRate),
    limit_intf_drop: cdktf.numberToTerraform(struct!.limitIntfDrop),
    limit_total_drop: cdktf.numberToTerraform(struct!.limitTotalDrop),
    limit_vserver_drop: cdktf.numberToTerraform(struct!.limitVserverDrop),
    lockup_time_left: cdktf.numberToTerraform(struct!.lockupTimeLeft),
    over_limit_drop: cdktf.numberToTerraform(struct!.overLimitDrop),
    v6_curr_rate: cdktf.numberToTerraform(struct!.v6CurrRate),
    v6_limit_intf_drop: cdktf.numberToTerraform(struct!.v6LimitIntfDrop),
    v6_limit_total_drop: cdktf.numberToTerraform(struct!.v6LimitTotalDrop),
    v6_limit_vserver_drop: cdktf.numberToTerraform(struct!.v6LimitVserverDrop),
    v6_lockup_time_left: cdktf.numberToTerraform(struct!.v6LockupTimeLeft),
    v6_over_limit_drop: cdktf.numberToTerraform(struct!.v6OverLimitDrop),
  }
}


export function dataThunderSystemIcmpRateStatsStatsToHclTerraform(struct?: DataThunderSystemIcmpRateStatsStatsOutputReference | DataThunderSystemIcmpRateStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    curr_rate: {
      value: cdktf.numberToHclTerraform(struct!.currRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    limit_intf_drop: {
      value: cdktf.numberToHclTerraform(struct!.limitIntfDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    limit_total_drop: {
      value: cdktf.numberToHclTerraform(struct!.limitTotalDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    limit_vserver_drop: {
      value: cdktf.numberToHclTerraform(struct!.limitVserverDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lockup_time_left: {
      value: cdktf.numberToHclTerraform(struct!.lockupTimeLeft),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    over_limit_drop: {
      value: cdktf.numberToHclTerraform(struct!.overLimitDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v6_curr_rate: {
      value: cdktf.numberToHclTerraform(struct!.v6CurrRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v6_limit_intf_drop: {
      value: cdktf.numberToHclTerraform(struct!.v6LimitIntfDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v6_limit_total_drop: {
      value: cdktf.numberToHclTerraform(struct!.v6LimitTotalDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v6_limit_vserver_drop: {
      value: cdktf.numberToHclTerraform(struct!.v6LimitVserverDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v6_lockup_time_left: {
      value: cdktf.numberToHclTerraform(struct!.v6LockupTimeLeft),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v6_over_limit_drop: {
      value: cdktf.numberToHclTerraform(struct!.v6OverLimitDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSystemIcmpRateStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSystemIcmpRateStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._currRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.currRate = this._currRate;
    }
    if (this._limitIntfDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.limitIntfDrop = this._limitIntfDrop;
    }
    if (this._limitTotalDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.limitTotalDrop = this._limitTotalDrop;
    }
    if (this._limitVserverDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.limitVserverDrop = this._limitVserverDrop;
    }
    if (this._lockupTimeLeft !== undefined) {
      hasAnyValues = true;
      internalValueResult.lockupTimeLeft = this._lockupTimeLeft;
    }
    if (this._overLimitDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.overLimitDrop = this._overLimitDrop;
    }
    if (this._v6CurrRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.v6CurrRate = this._v6CurrRate;
    }
    if (this._v6LimitIntfDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.v6LimitIntfDrop = this._v6LimitIntfDrop;
    }
    if (this._v6LimitTotalDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.v6LimitTotalDrop = this._v6LimitTotalDrop;
    }
    if (this._v6LimitVserverDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.v6LimitVserverDrop = this._v6LimitVserverDrop;
    }
    if (this._v6LockupTimeLeft !== undefined) {
      hasAnyValues = true;
      internalValueResult.v6LockupTimeLeft = this._v6LockupTimeLeft;
    }
    if (this._v6OverLimitDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.v6OverLimitDrop = this._v6OverLimitDrop;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSystemIcmpRateStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._currRate = undefined;
      this._limitIntfDrop = undefined;
      this._limitTotalDrop = undefined;
      this._limitVserverDrop = undefined;
      this._lockupTimeLeft = undefined;
      this._overLimitDrop = undefined;
      this._v6CurrRate = undefined;
      this._v6LimitIntfDrop = undefined;
      this._v6LimitTotalDrop = undefined;
      this._v6LimitVserverDrop = undefined;
      this._v6LockupTimeLeft = undefined;
      this._v6OverLimitDrop = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._currRate = value.currRate;
      this._limitIntfDrop = value.limitIntfDrop;
      this._limitTotalDrop = value.limitTotalDrop;
      this._limitVserverDrop = value.limitVserverDrop;
      this._lockupTimeLeft = value.lockupTimeLeft;
      this._overLimitDrop = value.overLimitDrop;
      this._v6CurrRate = value.v6CurrRate;
      this._v6LimitIntfDrop = value.v6LimitIntfDrop;
      this._v6LimitTotalDrop = value.v6LimitTotalDrop;
      this._v6LimitVserverDrop = value.v6LimitVserverDrop;
      this._v6LockupTimeLeft = value.v6LockupTimeLeft;
      this._v6OverLimitDrop = value.v6OverLimitDrop;
    }
  }

  // curr_rate - computed: false, optional: true, required: false
  private _currRate?: number; 
  public get currRate() {
    return this.getNumberAttribute('curr_rate');
  }
  public set currRate(value: number) {
    this._currRate = value;
  }
  public resetCurrRate() {
    this._currRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currRateInput() {
    return this._currRate;
  }

  // limit_intf_drop - computed: false, optional: true, required: false
  private _limitIntfDrop?: number; 
  public get limitIntfDrop() {
    return this.getNumberAttribute('limit_intf_drop');
  }
  public set limitIntfDrop(value: number) {
    this._limitIntfDrop = value;
  }
  public resetLimitIntfDrop() {
    this._limitIntfDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitIntfDropInput() {
    return this._limitIntfDrop;
  }

  // limit_total_drop - computed: false, optional: true, required: false
  private _limitTotalDrop?: number; 
  public get limitTotalDrop() {
    return this.getNumberAttribute('limit_total_drop');
  }
  public set limitTotalDrop(value: number) {
    this._limitTotalDrop = value;
  }
  public resetLimitTotalDrop() {
    this._limitTotalDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitTotalDropInput() {
    return this._limitTotalDrop;
  }

  // limit_vserver_drop - computed: false, optional: true, required: false
  private _limitVserverDrop?: number; 
  public get limitVserverDrop() {
    return this.getNumberAttribute('limit_vserver_drop');
  }
  public set limitVserverDrop(value: number) {
    this._limitVserverDrop = value;
  }
  public resetLimitVserverDrop() {
    this._limitVserverDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitVserverDropInput() {
    return this._limitVserverDrop;
  }

  // lockup_time_left - computed: false, optional: true, required: false
  private _lockupTimeLeft?: number; 
  public get lockupTimeLeft() {
    return this.getNumberAttribute('lockup_time_left');
  }
  public set lockupTimeLeft(value: number) {
    this._lockupTimeLeft = value;
  }
  public resetLockupTimeLeft() {
    this._lockupTimeLeft = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockupTimeLeftInput() {
    return this._lockupTimeLeft;
  }

  // over_limit_drop - computed: false, optional: true, required: false
  private _overLimitDrop?: number; 
  public get overLimitDrop() {
    return this.getNumberAttribute('over_limit_drop');
  }
  public set overLimitDrop(value: number) {
    this._overLimitDrop = value;
  }
  public resetOverLimitDrop() {
    this._overLimitDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overLimitDropInput() {
    return this._overLimitDrop;
  }

  // v6_curr_rate - computed: false, optional: true, required: false
  private _v6CurrRate?: number; 
  public get v6CurrRate() {
    return this.getNumberAttribute('v6_curr_rate');
  }
  public set v6CurrRate(value: number) {
    this._v6CurrRate = value;
  }
  public resetV6CurrRate() {
    this._v6CurrRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v6CurrRateInput() {
    return this._v6CurrRate;
  }

  // v6_limit_intf_drop - computed: false, optional: true, required: false
  private _v6LimitIntfDrop?: number; 
  public get v6LimitIntfDrop() {
    return this.getNumberAttribute('v6_limit_intf_drop');
  }
  public set v6LimitIntfDrop(value: number) {
    this._v6LimitIntfDrop = value;
  }
  public resetV6LimitIntfDrop() {
    this._v6LimitIntfDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v6LimitIntfDropInput() {
    return this._v6LimitIntfDrop;
  }

  // v6_limit_total_drop - computed: false, optional: true, required: false
  private _v6LimitTotalDrop?: number; 
  public get v6LimitTotalDrop() {
    return this.getNumberAttribute('v6_limit_total_drop');
  }
  public set v6LimitTotalDrop(value: number) {
    this._v6LimitTotalDrop = value;
  }
  public resetV6LimitTotalDrop() {
    this._v6LimitTotalDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v6LimitTotalDropInput() {
    return this._v6LimitTotalDrop;
  }

  // v6_limit_vserver_drop - computed: false, optional: true, required: false
  private _v6LimitVserverDrop?: number; 
  public get v6LimitVserverDrop() {
    return this.getNumberAttribute('v6_limit_vserver_drop');
  }
  public set v6LimitVserverDrop(value: number) {
    this._v6LimitVserverDrop = value;
  }
  public resetV6LimitVserverDrop() {
    this._v6LimitVserverDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v6LimitVserverDropInput() {
    return this._v6LimitVserverDrop;
  }

  // v6_lockup_time_left - computed: false, optional: true, required: false
  private _v6LockupTimeLeft?: number; 
  public get v6LockupTimeLeft() {
    return this.getNumberAttribute('v6_lockup_time_left');
  }
  public set v6LockupTimeLeft(value: number) {
    this._v6LockupTimeLeft = value;
  }
  public resetV6LockupTimeLeft() {
    this._v6LockupTimeLeft = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v6LockupTimeLeftInput() {
    return this._v6LockupTimeLeft;
  }

  // v6_over_limit_drop - computed: false, optional: true, required: false
  private _v6OverLimitDrop?: number; 
  public get v6OverLimitDrop() {
    return this.getNumberAttribute('v6_over_limit_drop');
  }
  public set v6OverLimitDrop(value: number) {
    this._v6OverLimitDrop = value;
  }
  public resetV6OverLimitDrop() {
    this._v6OverLimitDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v6OverLimitDropInput() {
    return this._v6OverLimitDrop;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_icmp_rate_stats thunder_system_icmp_rate_stats}
*/
export class DataThunderSystemIcmpRateStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_system_icmp_rate_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSystemIcmpRateStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSystemIcmpRateStats to import
  * @param importFromId The id of the existing DataThunderSystemIcmpRateStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_icmp_rate_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSystemIcmpRateStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_system_icmp_rate_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_icmp_rate_stats thunder_system_icmp_rate_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSystemIcmpRateStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSystemIcmpRateStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_system_icmp_rate_stats',
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
  private _stats = new DataThunderSystemIcmpRateStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderSystemIcmpRateStatsStats) {
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
      stats: dataThunderSystemIcmpRateStatsStatsToTerraform(this._stats.internalValue),
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
        value: dataThunderSystemIcmpRateStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSystemIcmpRateStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
