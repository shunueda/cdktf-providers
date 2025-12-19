// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_bandwidth_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSystemBandwidthStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_bandwidth_stats#id DataThunderSystemBandwidthStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_bandwidth_stats#stats DataThunderSystemBandwidthStats#stats}
  */
  readonly stats?: DataThunderSystemBandwidthStatsStats;
}
export interface DataThunderSystemBandwidthStatsStats {
  /**
  * BW Limit Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_bandwidth_stats#bwl_drop DataThunderSystemBandwidthStats#bwl_drop}
  */
  readonly bwlDrop?: number;
  /**
  * In Bytes per second
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_bandwidth_stats#input_bytes_per_sec DataThunderSystemBandwidthStats#input_bytes_per_sec}
  */
  readonly inputBytesPerSec?: number;
  /**
  * License Expire Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_bandwidth_stats#licexpire_drop DataThunderSystemBandwidthStats#licexpire_drop}
  */
  readonly licexpireDrop?: number;
  /**
  * Out Bytes per second
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_bandwidth_stats#output_bytes_per_sec DataThunderSystemBandwidthStats#output_bytes_per_sec}
  */
  readonly outputBytesPerSec?: number;
  /**
  * Packet-Per-Sec Limit Drop at egress
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_bandwidth_stats#ppsl_drop_egr DataThunderSystemBandwidthStats#ppsl_drop_egr}
  */
  readonly ppslDropEgr?: number;
  /**
  * Packet-Per-Sec Limit Drop at ingress
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_bandwidth_stats#ppsl_drop_ing DataThunderSystemBandwidthStats#ppsl_drop_ing}
  */
  readonly ppslDropIng?: number;
  /**
  * Packet-Per-Sec Limit ignored packets count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_bandwidth_stats#ppsl_ignore_limit DataThunderSystemBandwidthStats#ppsl_ignore_limit}
  */
  readonly ppslIgnoreLimit?: number;
}

export function dataThunderSystemBandwidthStatsStatsToTerraform(struct?: DataThunderSystemBandwidthStatsStatsOutputReference | DataThunderSystemBandwidthStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bwl_drop: cdktf.numberToTerraform(struct!.bwlDrop),
    input_bytes_per_sec: cdktf.numberToTerraform(struct!.inputBytesPerSec),
    licexpire_drop: cdktf.numberToTerraform(struct!.licexpireDrop),
    output_bytes_per_sec: cdktf.numberToTerraform(struct!.outputBytesPerSec),
    ppsl_drop_egr: cdktf.numberToTerraform(struct!.ppslDropEgr),
    ppsl_drop_ing: cdktf.numberToTerraform(struct!.ppslDropIng),
    ppsl_ignore_limit: cdktf.numberToTerraform(struct!.ppslIgnoreLimit),
  }
}


export function dataThunderSystemBandwidthStatsStatsToHclTerraform(struct?: DataThunderSystemBandwidthStatsStatsOutputReference | DataThunderSystemBandwidthStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bwl_drop: {
      value: cdktf.numberToHclTerraform(struct!.bwlDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    input_bytes_per_sec: {
      value: cdktf.numberToHclTerraform(struct!.inputBytesPerSec),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    licexpire_drop: {
      value: cdktf.numberToHclTerraform(struct!.licexpireDrop),
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
    ppsl_drop_egr: {
      value: cdktf.numberToHclTerraform(struct!.ppslDropEgr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ppsl_drop_ing: {
      value: cdktf.numberToHclTerraform(struct!.ppslDropIng),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ppsl_ignore_limit: {
      value: cdktf.numberToHclTerraform(struct!.ppslIgnoreLimit),
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
    if (this._bwlDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.bwlDrop = this._bwlDrop;
    }
    if (this._inputBytesPerSec !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputBytesPerSec = this._inputBytesPerSec;
    }
    if (this._licexpireDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.licexpireDrop = this._licexpireDrop;
    }
    if (this._outputBytesPerSec !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputBytesPerSec = this._outputBytesPerSec;
    }
    if (this._ppslDropEgr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ppslDropEgr = this._ppslDropEgr;
    }
    if (this._ppslDropIng !== undefined) {
      hasAnyValues = true;
      internalValueResult.ppslDropIng = this._ppslDropIng;
    }
    if (this._ppslIgnoreLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.ppslIgnoreLimit = this._ppslIgnoreLimit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSystemBandwidthStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bwlDrop = undefined;
      this._inputBytesPerSec = undefined;
      this._licexpireDrop = undefined;
      this._outputBytesPerSec = undefined;
      this._ppslDropEgr = undefined;
      this._ppslDropIng = undefined;
      this._ppslIgnoreLimit = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bwlDrop = value.bwlDrop;
      this._inputBytesPerSec = value.inputBytesPerSec;
      this._licexpireDrop = value.licexpireDrop;
      this._outputBytesPerSec = value.outputBytesPerSec;
      this._ppslDropEgr = value.ppslDropEgr;
      this._ppslDropIng = value.ppslDropIng;
      this._ppslIgnoreLimit = value.ppslIgnoreLimit;
    }
  }

  // bwl_drop - computed: false, optional: true, required: false
  private _bwlDrop?: number; 
  public get bwlDrop() {
    return this.getNumberAttribute('bwl_drop');
  }
  public set bwlDrop(value: number) {
    this._bwlDrop = value;
  }
  public resetBwlDrop() {
    this._bwlDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bwlDropInput() {
    return this._bwlDrop;
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

  // licexpire_drop - computed: false, optional: true, required: false
  private _licexpireDrop?: number; 
  public get licexpireDrop() {
    return this.getNumberAttribute('licexpire_drop');
  }
  public set licexpireDrop(value: number) {
    this._licexpireDrop = value;
  }
  public resetLicexpireDrop() {
    this._licexpireDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licexpireDropInput() {
    return this._licexpireDrop;
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

  // ppsl_drop_egr - computed: false, optional: true, required: false
  private _ppslDropEgr?: number; 
  public get ppslDropEgr() {
    return this.getNumberAttribute('ppsl_drop_egr');
  }
  public set ppslDropEgr(value: number) {
    this._ppslDropEgr = value;
  }
  public resetPpslDropEgr() {
    this._ppslDropEgr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ppslDropEgrInput() {
    return this._ppslDropEgr;
  }

  // ppsl_drop_ing - computed: false, optional: true, required: false
  private _ppslDropIng?: number; 
  public get ppslDropIng() {
    return this.getNumberAttribute('ppsl_drop_ing');
  }
  public set ppslDropIng(value: number) {
    this._ppslDropIng = value;
  }
  public resetPpslDropIng() {
    this._ppslDropIng = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ppslDropIngInput() {
    return this._ppslDropIng;
  }

  // ppsl_ignore_limit - computed: false, optional: true, required: false
  private _ppslIgnoreLimit?: number; 
  public get ppslIgnoreLimit() {
    return this.getNumberAttribute('ppsl_ignore_limit');
  }
  public set ppslIgnoreLimit(value: number) {
    this._ppslIgnoreLimit = value;
  }
  public resetPpslIgnoreLimit() {
    this._ppslIgnoreLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ppslIgnoreLimitInput() {
    return this._ppslIgnoreLimit;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_bandwidth_stats thunder_system_bandwidth_stats}
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
  * @param importFromId The id of the existing DataThunderSystemBandwidthStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_bandwidth_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSystemBandwidthStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_system_bandwidth_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_bandwidth_stats thunder_system_bandwidth_stats} Data Source
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
