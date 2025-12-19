// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_throughput_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSystemThroughputStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_throughput_stats#id DataThunderSystemThroughputStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_throughput_stats#stats DataThunderSystemThroughputStats#stats}
  */
  readonly stats?: DataThunderSystemThroughputStatsStats;
}
export interface DataThunderSystemThroughputStatsStats {
  /**
  * Global System throughput in bits/sec
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_throughput_stats#global_system_throughput_bits_per_sec DataThunderSystemThroughputStats#global_system_throughput_bits_per_sec}
  */
  readonly globalSystemThroughputBitsPerSec?: number;
  /**
  * Partition throughput in bits/sec
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_throughput_stats#per_part_throughput_bits_per_sec DataThunderSystemThroughputStats#per_part_throughput_bits_per_sec}
  */
  readonly perPartThroughputBitsPerSec?: number;
}

export function dataThunderSystemThroughputStatsStatsToTerraform(struct?: DataThunderSystemThroughputStatsStatsOutputReference | DataThunderSystemThroughputStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    global_system_throughput_bits_per_sec: cdktf.numberToTerraform(struct!.globalSystemThroughputBitsPerSec),
    per_part_throughput_bits_per_sec: cdktf.numberToTerraform(struct!.perPartThroughputBitsPerSec),
  }
}


export function dataThunderSystemThroughputStatsStatsToHclTerraform(struct?: DataThunderSystemThroughputStatsStatsOutputReference | DataThunderSystemThroughputStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    global_system_throughput_bits_per_sec: {
      value: cdktf.numberToHclTerraform(struct!.globalSystemThroughputBitsPerSec),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    per_part_throughput_bits_per_sec: {
      value: cdktf.numberToHclTerraform(struct!.perPartThroughputBitsPerSec),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSystemThroughputStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSystemThroughputStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._globalSystemThroughputBitsPerSec !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalSystemThroughputBitsPerSec = this._globalSystemThroughputBitsPerSec;
    }
    if (this._perPartThroughputBitsPerSec !== undefined) {
      hasAnyValues = true;
      internalValueResult.perPartThroughputBitsPerSec = this._perPartThroughputBitsPerSec;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSystemThroughputStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._globalSystemThroughputBitsPerSec = undefined;
      this._perPartThroughputBitsPerSec = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._globalSystemThroughputBitsPerSec = value.globalSystemThroughputBitsPerSec;
      this._perPartThroughputBitsPerSec = value.perPartThroughputBitsPerSec;
    }
  }

  // global_system_throughput_bits_per_sec - computed: false, optional: true, required: false
  private _globalSystemThroughputBitsPerSec?: number; 
  public get globalSystemThroughputBitsPerSec() {
    return this.getNumberAttribute('global_system_throughput_bits_per_sec');
  }
  public set globalSystemThroughputBitsPerSec(value: number) {
    this._globalSystemThroughputBitsPerSec = value;
  }
  public resetGlobalSystemThroughputBitsPerSec() {
    this._globalSystemThroughputBitsPerSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalSystemThroughputBitsPerSecInput() {
    return this._globalSystemThroughputBitsPerSec;
  }

  // per_part_throughput_bits_per_sec - computed: false, optional: true, required: false
  private _perPartThroughputBitsPerSec?: number; 
  public get perPartThroughputBitsPerSec() {
    return this.getNumberAttribute('per_part_throughput_bits_per_sec');
  }
  public set perPartThroughputBitsPerSec(value: number) {
    this._perPartThroughputBitsPerSec = value;
  }
  public resetPerPartThroughputBitsPerSec() {
    this._perPartThroughputBitsPerSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perPartThroughputBitsPerSecInput() {
    return this._perPartThroughputBitsPerSec;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_throughput_stats thunder_system_throughput_stats}
*/
export class DataThunderSystemThroughputStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_system_throughput_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSystemThroughputStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSystemThroughputStats to import
  * @param importFromId The id of the existing DataThunderSystemThroughputStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_throughput_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSystemThroughputStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_system_throughput_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_throughput_stats thunder_system_throughput_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSystemThroughputStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSystemThroughputStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_system_throughput_stats',
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
  private _stats = new DataThunderSystemThroughputStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderSystemThroughputStatsStats) {
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
      stats: dataThunderSystemThroughputStatsStatsToTerraform(this._stats.internalValue),
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
        value: dataThunderSystemThroughputStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSystemThroughputStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
