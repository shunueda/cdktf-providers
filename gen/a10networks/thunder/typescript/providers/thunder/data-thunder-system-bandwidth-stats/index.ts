// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_bandwidth_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSystemBandwidthStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_bandwidth_stats#id DataThunderSystemBandwidthStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_bandwidth_stats#stats DataThunderSystemBandwidthStats#stats}
  */
  readonly stats?: DataThunderSystemBandwidthStatsStats;
}
export interface DataThunderSystemBandwidthStatsStats {
  /**
  * In Bytes per second
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_bandwidth_stats#input_bytes_per_sec DataThunderSystemBandwidthStats#input_bytes_per_sec}
  */
  readonly inputBytesPerSec?: number;
  /**
  * Out Bytes per second
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_bandwidth_stats#output_bytes_per_sec DataThunderSystemBandwidthStats#output_bytes_per_sec}
  */
  readonly outputBytesPerSec?: number;
}

export function dataThunderSystemBandwidthStatsStatsToTerraform(struct?: DataThunderSystemBandwidthStatsStatsOutputReference | DataThunderSystemBandwidthStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    input_bytes_per_sec: cdktf.numberToTerraform(struct!.inputBytesPerSec),
    output_bytes_per_sec: cdktf.numberToTerraform(struct!.outputBytesPerSec),
  }
}


export function dataThunderSystemBandwidthStatsStatsToHclTerraform(struct?: DataThunderSystemBandwidthStatsStatsOutputReference | DataThunderSystemBandwidthStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    input_bytes_per_sec: {
      value: cdktf.numberToHclTerraform(struct!.inputBytesPerSec),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    output_bytes_per_sec: {
      value: cdktf.numberToHclTerraform(struct!.outputBytesPerSec),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSystemBandwidthStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSystemBandwidthStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inputBytesPerSec !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputBytesPerSec = this._inputBytesPerSec;
    }
    if (this._outputBytesPerSec !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputBytesPerSec = this._outputBytesPerSec;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSystemBandwidthStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._inputBytesPerSec = undefined;
      this._outputBytesPerSec = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._inputBytesPerSec = value.inputBytesPerSec;
      this._outputBytesPerSec = value.outputBytesPerSec;
    }
  }

  // input_bytes_per_sec - computed: false, optional: true, required: false
  private _inputBytesPerSec?: number; 
  public get inputBytesPerSec() {
    return this.getNumberAttribute('input_bytes_per_sec');
  }
  public set inputBytesPerSec(value: number) {
    this._inputBytesPerSec = value;
  }
  public resetInputBytesPerSec() {
    this._inputBytesPerSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputBytesPerSecInput() {
    return this._inputBytesPerSec;
  }

  // output_bytes_per_sec - computed: false, optional: true, required: false
  private _outputBytesPerSec?: number; 
  public get outputBytesPerSec() {
    return this.getNumberAttribute('output_bytes_per_sec');
  }
  public set outputBytesPerSec(value: number) {
    this._outputBytesPerSec = value;
  }
  public resetOutputBytesPerSec() {
    this._outputBytesPerSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputBytesPerSecInput() {
    return this._outputBytesPerSec;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_bandwidth_stats thunder_system_bandwidth_stats}
*/
export class DataThunderSystemBandwidthStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_system_bandwidth_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSystemBandwidthStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSystemBandwidthStats to import
  * @param importFromId The id of the existing DataThunderSystemBandwidthStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_bandwidth_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSystemBandwidthStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_system_bandwidth_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_bandwidth_stats thunder_system_bandwidth_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSystemBandwidthStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSystemBandwidthStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_system_bandwidth_stats',
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
  private _stats = new DataThunderSystemBandwidthStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderSystemBandwidthStatsStats) {
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
      stats: dataThunderSystemBandwidthStatsStatsToTerraform(this._stats.internalValue),
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
        value: dataThunderSystemBandwidthStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSystemBandwidthStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
