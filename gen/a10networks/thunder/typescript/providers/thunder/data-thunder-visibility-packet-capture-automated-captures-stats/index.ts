// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_packet_capture_automated_captures_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderVisibilityPacketCaptureAutomatedCapturesStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_packet_capture_automated_captures_stats#id DataThunderVisibilityPacketCaptureAutomatedCapturesStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_packet_capture_automated_captures_stats#stats DataThunderVisibilityPacketCaptureAutomatedCapturesStats#stats}
  */
  readonly stats?: DataThunderVisibilityPacketCaptureAutomatedCapturesStatsStats;
}
export interface DataThunderVisibilityPacketCaptureAutomatedCapturesStatsStats {
  /**
  * Total failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_packet_capture_automated_captures_stats#total_failure DataThunderVisibilityPacketCaptureAutomatedCapturesStats#total_failure}
  */
  readonly totalFailure?: number;
}

export function dataThunderVisibilityPacketCaptureAutomatedCapturesStatsStatsToTerraform(struct?: DataThunderVisibilityPacketCaptureAutomatedCapturesStatsStatsOutputReference | DataThunderVisibilityPacketCaptureAutomatedCapturesStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    total_failure: cdktf.numberToTerraform(struct!.totalFailure),
  }
}


export function dataThunderVisibilityPacketCaptureAutomatedCapturesStatsStatsToHclTerraform(struct?: DataThunderVisibilityPacketCaptureAutomatedCapturesStatsStatsOutputReference | DataThunderVisibilityPacketCaptureAutomatedCapturesStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    total_failure: {
      value: cdktf.numberToHclTerraform(struct!.totalFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVisibilityPacketCaptureAutomatedCapturesStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderVisibilityPacketCaptureAutomatedCapturesStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._totalFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalFailure = this._totalFailure;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVisibilityPacketCaptureAutomatedCapturesStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._totalFailure = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._totalFailure = value.totalFailure;
    }
  }

  // total_failure - computed: false, optional: true, required: false
  private _totalFailure?: number; 
  public get totalFailure() {
    return this.getNumberAttribute('total_failure');
  }
  public set totalFailure(value: number) {
    this._totalFailure = value;
  }
  public resetTotalFailure() {
    this._totalFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalFailureInput() {
    return this._totalFailure;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_packet_capture_automated_captures_stats thunder_visibility_packet_capture_automated_captures_stats}
*/
export class DataThunderVisibilityPacketCaptureAutomatedCapturesStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_packet_capture_automated_captures_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderVisibilityPacketCaptureAutomatedCapturesStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderVisibilityPacketCaptureAutomatedCapturesStats to import
  * @param importFromId The id of the existing DataThunderVisibilityPacketCaptureAutomatedCapturesStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_packet_capture_automated_captures_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderVisibilityPacketCaptureAutomatedCapturesStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_packet_capture_automated_captures_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_packet_capture_automated_captures_stats thunder_visibility_packet_capture_automated_captures_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderVisibilityPacketCaptureAutomatedCapturesStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderVisibilityPacketCaptureAutomatedCapturesStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_packet_capture_automated_captures_stats',
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
  private _stats = new DataThunderVisibilityPacketCaptureAutomatedCapturesStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderVisibilityPacketCaptureAutomatedCapturesStatsStats) {
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
      stats: dataThunderVisibilityPacketCaptureAutomatedCapturesStatsStatsToTerraform(this._stats.internalValue),
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
        value: dataThunderVisibilityPacketCaptureAutomatedCapturesStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderVisibilityPacketCaptureAutomatedCapturesStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
