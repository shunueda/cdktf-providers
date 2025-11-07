// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_one_to_one_global_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderCgnv6OneToOneGlobalStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_one_to_one_global_stats#id DataThunderCgnv6OneToOneGlobalStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_one_to_one_global_stats#stats DataThunderCgnv6OneToOneGlobalStats#stats}
  */
  readonly stats?: DataThunderCgnv6OneToOneGlobalStatsStats;
}
export interface DataThunderCgnv6OneToOneGlobalStatsStats {
  /**
  * One-to-One Address Mapping Allocation Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_one_to_one_global_stats#map_alloc_failure DataThunderCgnv6OneToOneGlobalStats#map_alloc_failure}
  */
  readonly mapAllocFailure?: number;
  /**
  * Total One-to-One Address Mapping Allocated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_one_to_one_global_stats#total_map_allocated DataThunderCgnv6OneToOneGlobalStats#total_map_allocated}
  */
  readonly totalMapAllocated?: number;
  /**
  * Total One-to-One Address Mapping Freed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_one_to_one_global_stats#total_map_freed DataThunderCgnv6OneToOneGlobalStats#total_map_freed}
  */
  readonly totalMapFreed?: number;
}

export function dataThunderCgnv6OneToOneGlobalStatsStatsToTerraform(struct?: DataThunderCgnv6OneToOneGlobalStatsStatsOutputReference | DataThunderCgnv6OneToOneGlobalStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    map_alloc_failure: cdktf.numberToTerraform(struct!.mapAllocFailure),
    total_map_allocated: cdktf.numberToTerraform(struct!.totalMapAllocated),
    total_map_freed: cdktf.numberToTerraform(struct!.totalMapFreed),
  }
}


export function dataThunderCgnv6OneToOneGlobalStatsStatsToHclTerraform(struct?: DataThunderCgnv6OneToOneGlobalStatsStatsOutputReference | DataThunderCgnv6OneToOneGlobalStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    map_alloc_failure: {
      value: cdktf.numberToHclTerraform(struct!.mapAllocFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_map_allocated: {
      value: cdktf.numberToHclTerraform(struct!.totalMapAllocated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_map_freed: {
      value: cdktf.numberToHclTerraform(struct!.totalMapFreed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderCgnv6OneToOneGlobalStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderCgnv6OneToOneGlobalStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mapAllocFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.mapAllocFailure = this._mapAllocFailure;
    }
    if (this._totalMapAllocated !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalMapAllocated = this._totalMapAllocated;
    }
    if (this._totalMapFreed !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalMapFreed = this._totalMapFreed;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderCgnv6OneToOneGlobalStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mapAllocFailure = undefined;
      this._totalMapAllocated = undefined;
      this._totalMapFreed = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mapAllocFailure = value.mapAllocFailure;
      this._totalMapAllocated = value.totalMapAllocated;
      this._totalMapFreed = value.totalMapFreed;
    }
  }

  // map_alloc_failure - computed: false, optional: true, required: false
  private _mapAllocFailure?: number; 
  public get mapAllocFailure() {
    return this.getNumberAttribute('map_alloc_failure');
  }
  public set mapAllocFailure(value: number) {
    this._mapAllocFailure = value;
  }
  public resetMapAllocFailure() {
    this._mapAllocFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mapAllocFailureInput() {
    return this._mapAllocFailure;
  }

  // total_map_allocated - computed: false, optional: true, required: false
  private _totalMapAllocated?: number; 
  public get totalMapAllocated() {
    return this.getNumberAttribute('total_map_allocated');
  }
  public set totalMapAllocated(value: number) {
    this._totalMapAllocated = value;
  }
  public resetTotalMapAllocated() {
    this._totalMapAllocated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalMapAllocatedInput() {
    return this._totalMapAllocated;
  }

  // total_map_freed - computed: false, optional: true, required: false
  private _totalMapFreed?: number; 
  public get totalMapFreed() {
    return this.getNumberAttribute('total_map_freed');
  }
  public set totalMapFreed(value: number) {
    this._totalMapFreed = value;
  }
  public resetTotalMapFreed() {
    this._totalMapFreed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalMapFreedInput() {
    return this._totalMapFreed;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_one_to_one_global_stats thunder_cgnv6_one_to_one_global_stats}
*/
export class DataThunderCgnv6OneToOneGlobalStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_cgnv6_one_to_one_global_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderCgnv6OneToOneGlobalStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderCgnv6OneToOneGlobalStats to import
  * @param importFromId The id of the existing DataThunderCgnv6OneToOneGlobalStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_one_to_one_global_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderCgnv6OneToOneGlobalStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_cgnv6_one_to_one_global_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_one_to_one_global_stats thunder_cgnv6_one_to_one_global_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderCgnv6OneToOneGlobalStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderCgnv6OneToOneGlobalStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_cgnv6_one_to_one_global_stats',
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
  private _stats = new DataThunderCgnv6OneToOneGlobalStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderCgnv6OneToOneGlobalStatsStats) {
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
      stats: dataThunderCgnv6OneToOneGlobalStatsStatsToTerraform(this._stats.internalValue),
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
        value: dataThunderCgnv6OneToOneGlobalStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderCgnv6OneToOneGlobalStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
