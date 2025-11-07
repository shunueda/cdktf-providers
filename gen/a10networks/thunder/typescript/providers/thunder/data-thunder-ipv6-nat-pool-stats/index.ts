// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ipv6_nat_pool_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderIpv6NatPoolStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ipv6_nat_pool_stats#id DataThunderIpv6NatPoolStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specify pool name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ipv6_nat_pool_stats#pool_name DataThunderIpv6NatPoolStats#pool_name}
  */
  readonly poolName: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ipv6_nat_pool_stats#stats DataThunderIpv6NatPoolStats#stats}
  */
  readonly stats?: DataThunderIpv6NatPoolStatsStats;
}
export interface DataThunderIpv6NatPoolStatsStats {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ipv6_nat_pool_stats#failed DataThunderIpv6NatPoolStats#failed}
  */
  readonly failed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ipv6_nat_pool_stats#port_usage DataThunderIpv6NatPoolStats#port_usage}
  */
  readonly portUsage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ipv6_nat_pool_stats#total_freed DataThunderIpv6NatPoolStats#total_freed}
  */
  readonly totalFreed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ipv6_nat_pool_stats#total_used DataThunderIpv6NatPoolStats#total_used}
  */
  readonly totalUsed?: number;
}

export function dataThunderIpv6NatPoolStatsStatsToTerraform(struct?: DataThunderIpv6NatPoolStatsStatsOutputReference | DataThunderIpv6NatPoolStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    failed: cdktf.numberToTerraform(struct!.failed),
    port_usage: cdktf.numberToTerraform(struct!.portUsage),
    total_freed: cdktf.numberToTerraform(struct!.totalFreed),
    total_used: cdktf.numberToTerraform(struct!.totalUsed),
  }
}


export function dataThunderIpv6NatPoolStatsStatsToHclTerraform(struct?: DataThunderIpv6NatPoolStatsStatsOutputReference | DataThunderIpv6NatPoolStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    failed: {
      value: cdktf.numberToHclTerraform(struct!.failed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_usage: {
      value: cdktf.numberToHclTerraform(struct!.portUsage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_freed: {
      value: cdktf.numberToHclTerraform(struct!.totalFreed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_used: {
      value: cdktf.numberToHclTerraform(struct!.totalUsed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderIpv6NatPoolStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderIpv6NatPoolStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._failed !== undefined) {
      hasAnyValues = true;
      internalValueResult.failed = this._failed;
    }
    if (this._portUsage !== undefined) {
      hasAnyValues = true;
      internalValueResult.portUsage = this._portUsage;
    }
    if (this._totalFreed !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalFreed = this._totalFreed;
    }
    if (this._totalUsed !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalUsed = this._totalUsed;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderIpv6NatPoolStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._failed = undefined;
      this._portUsage = undefined;
      this._totalFreed = undefined;
      this._totalUsed = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._failed = value.failed;
      this._portUsage = value.portUsage;
      this._totalFreed = value.totalFreed;
      this._totalUsed = value.totalUsed;
    }
  }

  // failed - computed: false, optional: true, required: false
  private _failed?: number; 
  public get failed() {
    return this.getNumberAttribute('failed');
  }
  public set failed(value: number) {
    this._failed = value;
  }
  public resetFailed() {
    this._failed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failedInput() {
    return this._failed;
  }

  // port_usage - computed: false, optional: true, required: false
  private _portUsage?: number; 
  public get portUsage() {
    return this.getNumberAttribute('port_usage');
  }
  public set portUsage(value: number) {
    this._portUsage = value;
  }
  public resetPortUsage() {
    this._portUsage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portUsageInput() {
    return this._portUsage;
  }

  // total_freed - computed: false, optional: true, required: false
  private _totalFreed?: number; 
  public get totalFreed() {
    return this.getNumberAttribute('total_freed');
  }
  public set totalFreed(value: number) {
    this._totalFreed = value;
  }
  public resetTotalFreed() {
    this._totalFreed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalFreedInput() {
    return this._totalFreed;
  }

  // total_used - computed: false, optional: true, required: false
  private _totalUsed?: number; 
  public get totalUsed() {
    return this.getNumberAttribute('total_used');
  }
  public set totalUsed(value: number) {
    this._totalUsed = value;
  }
  public resetTotalUsed() {
    this._totalUsed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalUsedInput() {
    return this._totalUsed;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ipv6_nat_pool_stats thunder_ipv6_nat_pool_stats}
*/
export class DataThunderIpv6NatPoolStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ipv6_nat_pool_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderIpv6NatPoolStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderIpv6NatPoolStats to import
  * @param importFromId The id of the existing DataThunderIpv6NatPoolStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ipv6_nat_pool_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderIpv6NatPoolStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ipv6_nat_pool_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ipv6_nat_pool_stats thunder_ipv6_nat_pool_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderIpv6NatPoolStatsConfig
  */
  public constructor(scope: Construct, id: string, config: DataThunderIpv6NatPoolStatsConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ipv6_nat_pool_stats',
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
    this._poolName = config.poolName;
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

  // pool_name - computed: false, optional: false, required: true
  private _poolName?: string; 
  public get poolName() {
    return this.getStringAttribute('pool_name');
  }
  public set poolName(value: string) {
    this._poolName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get poolNameInput() {
    return this._poolName;
  }

  // stats - computed: false, optional: true, required: false
  private _stats = new DataThunderIpv6NatPoolStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderIpv6NatPoolStatsStats) {
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
      pool_name: cdktf.stringToTerraform(this._poolName),
      stats: dataThunderIpv6NatPoolStatsStatsToTerraform(this._stats.internalValue),
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
      pool_name: {
        value: cdktf.stringToHclTerraform(this._poolName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stats: {
        value: dataThunderIpv6NatPoolStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderIpv6NatPoolStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
