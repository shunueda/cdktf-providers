// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_one_to_one_pool_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderCgnv6OneToOnePoolStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_one_to_one_pool_stats#id DataThunderCgnv6OneToOnePoolStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specify pool name or pool group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_one_to_one_pool_stats#pool_name DataThunderCgnv6OneToOnePoolStats#pool_name}
  */
  readonly poolName: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_one_to_one_pool_stats#stats DataThunderCgnv6OneToOnePoolStats#stats}
  */
  readonly stats?: DataThunderCgnv6OneToOnePoolStatsStats;
}
export interface DataThunderCgnv6OneToOnePoolStatsStats {
  /**
  * Free Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_one_to_one_pool_stats#free_address DataThunderCgnv6OneToOnePoolStats#free_address}
  */
  readonly freeAddress?: number;
  /**
  * Total Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_one_to_one_pool_stats#total_address DataThunderCgnv6OneToOnePoolStats#total_address}
  */
  readonly totalAddress?: number;
  /**
  * Used Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_one_to_one_pool_stats#used_address DataThunderCgnv6OneToOnePoolStats#used_address}
  */
  readonly usedAddress?: number;
}

export function dataThunderCgnv6OneToOnePoolStatsStatsToTerraform(struct?: DataThunderCgnv6OneToOnePoolStatsStatsOutputReference | DataThunderCgnv6OneToOnePoolStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    free_address: cdktf.numberToTerraform(struct!.freeAddress),
    total_address: cdktf.numberToTerraform(struct!.totalAddress),
    used_address: cdktf.numberToTerraform(struct!.usedAddress),
  }
}


export function dataThunderCgnv6OneToOnePoolStatsStatsToHclTerraform(struct?: DataThunderCgnv6OneToOnePoolStatsStatsOutputReference | DataThunderCgnv6OneToOnePoolStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    free_address: {
      value: cdktf.numberToHclTerraform(struct!.freeAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_address: {
      value: cdktf.numberToHclTerraform(struct!.totalAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    used_address: {
      value: cdktf.numberToHclTerraform(struct!.usedAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderCgnv6OneToOnePoolStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderCgnv6OneToOnePoolStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._freeAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.freeAddress = this._freeAddress;
    }
    if (this._totalAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalAddress = this._totalAddress;
    }
    if (this._usedAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.usedAddress = this._usedAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderCgnv6OneToOnePoolStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._freeAddress = undefined;
      this._totalAddress = undefined;
      this._usedAddress = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._freeAddress = value.freeAddress;
      this._totalAddress = value.totalAddress;
      this._usedAddress = value.usedAddress;
    }
  }

  // free_address - computed: false, optional: true, required: false
  private _freeAddress?: number; 
  public get freeAddress() {
    return this.getNumberAttribute('free_address');
  }
  public set freeAddress(value: number) {
    this._freeAddress = value;
  }
  public resetFreeAddress() {
    this._freeAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeAddressInput() {
    return this._freeAddress;
  }

  // total_address - computed: false, optional: true, required: false
  private _totalAddress?: number; 
  public get totalAddress() {
    return this.getNumberAttribute('total_address');
  }
  public set totalAddress(value: number) {
    this._totalAddress = value;
  }
  public resetTotalAddress() {
    this._totalAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalAddressInput() {
    return this._totalAddress;
  }

  // used_address - computed: false, optional: true, required: false
  private _usedAddress?: number; 
  public get usedAddress() {
    return this.getNumberAttribute('used_address');
  }
  public set usedAddress(value: number) {
    this._usedAddress = value;
  }
  public resetUsedAddress() {
    this._usedAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usedAddressInput() {
    return this._usedAddress;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_one_to_one_pool_stats thunder_cgnv6_one_to_one_pool_stats}
*/
export class DataThunderCgnv6OneToOnePoolStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_cgnv6_one_to_one_pool_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderCgnv6OneToOnePoolStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderCgnv6OneToOnePoolStats to import
  * @param importFromId The id of the existing DataThunderCgnv6OneToOnePoolStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_one_to_one_pool_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderCgnv6OneToOnePoolStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_cgnv6_one_to_one_pool_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_one_to_one_pool_stats thunder_cgnv6_one_to_one_pool_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderCgnv6OneToOnePoolStatsConfig
  */
  public constructor(scope: Construct, id: string, config: DataThunderCgnv6OneToOnePoolStatsConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_cgnv6_one_to_one_pool_stats',
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
  private _stats = new DataThunderCgnv6OneToOnePoolStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderCgnv6OneToOnePoolStatsStats) {
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
      stats: dataThunderCgnv6OneToOnePoolStatsStatsToTerraform(this._stats.internalValue),
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
        value: dataThunderCgnv6OneToOnePoolStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderCgnv6OneToOnePoolStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
