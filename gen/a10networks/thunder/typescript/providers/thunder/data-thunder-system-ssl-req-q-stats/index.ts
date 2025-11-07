// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_ssl_req_q_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSystemSslReqQStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_ssl_req_q_stats#id DataThunderSystemSslReqQStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_ssl_req_q_stats#stats DataThunderSystemSslReqQStats#stats}
  */
  readonly stats?: DataThunderSystemSslReqQStatsStats;
}
export interface DataThunderSystemSslReqQStatsStats {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_ssl_req_q_stats#num_ssl_queues DataThunderSystemSslReqQStats#num_ssl_queues}
  */
  readonly numSslQueues?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_ssl_req_q_stats#ssl_hw_q_depth_tot DataThunderSystemSslReqQStats#ssl_hw_q_depth_tot}
  */
  readonly sslHwQDepthTot?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_ssl_req_q_stats#ssl_hw_q_inuse_tot DataThunderSystemSslReqQStats#ssl_hw_q_inuse_tot}
  */
  readonly sslHwQInuseTot?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_ssl_req_q_stats#ssl_req_q_depth_tot DataThunderSystemSslReqQStats#ssl_req_q_depth_tot}
  */
  readonly sslReqQDepthTot?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_ssl_req_q_stats#ssl_req_q_inuse_tot DataThunderSystemSslReqQStats#ssl_req_q_inuse_tot}
  */
  readonly sslReqQInuseTot?: number;
}

export function dataThunderSystemSslReqQStatsStatsToTerraform(struct?: DataThunderSystemSslReqQStatsStatsOutputReference | DataThunderSystemSslReqQStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    num_ssl_queues: cdktf.numberToTerraform(struct!.numSslQueues),
    ssl_hw_q_depth_tot: cdktf.numberToTerraform(struct!.sslHwQDepthTot),
    ssl_hw_q_inuse_tot: cdktf.numberToTerraform(struct!.sslHwQInuseTot),
    ssl_req_q_depth_tot: cdktf.numberToTerraform(struct!.sslReqQDepthTot),
    ssl_req_q_inuse_tot: cdktf.numberToTerraform(struct!.sslReqQInuseTot),
  }
}


export function dataThunderSystemSslReqQStatsStatsToHclTerraform(struct?: DataThunderSystemSslReqQStatsStatsOutputReference | DataThunderSystemSslReqQStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    num_ssl_queues: {
      value: cdktf.numberToHclTerraform(struct!.numSslQueues),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssl_hw_q_depth_tot: {
      value: cdktf.numberToHclTerraform(struct!.sslHwQDepthTot),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssl_hw_q_inuse_tot: {
      value: cdktf.numberToHclTerraform(struct!.sslHwQInuseTot),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssl_req_q_depth_tot: {
      value: cdktf.numberToHclTerraform(struct!.sslReqQDepthTot),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssl_req_q_inuse_tot: {
      value: cdktf.numberToHclTerraform(struct!.sslReqQInuseTot),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSystemSslReqQStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSystemSslReqQStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._numSslQueues !== undefined) {
      hasAnyValues = true;
      internalValueResult.numSslQueues = this._numSslQueues;
    }
    if (this._sslHwQDepthTot !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslHwQDepthTot = this._sslHwQDepthTot;
    }
    if (this._sslHwQInuseTot !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslHwQInuseTot = this._sslHwQInuseTot;
    }
    if (this._sslReqQDepthTot !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslReqQDepthTot = this._sslReqQDepthTot;
    }
    if (this._sslReqQInuseTot !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslReqQInuseTot = this._sslReqQInuseTot;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSystemSslReqQStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._numSslQueues = undefined;
      this._sslHwQDepthTot = undefined;
      this._sslHwQInuseTot = undefined;
      this._sslReqQDepthTot = undefined;
      this._sslReqQInuseTot = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._numSslQueues = value.numSslQueues;
      this._sslHwQDepthTot = value.sslHwQDepthTot;
      this._sslHwQInuseTot = value.sslHwQInuseTot;
      this._sslReqQDepthTot = value.sslReqQDepthTot;
      this._sslReqQInuseTot = value.sslReqQInuseTot;
    }
  }

  // num_ssl_queues - computed: false, optional: true, required: false
  private _numSslQueues?: number; 
  public get numSslQueues() {
    return this.getNumberAttribute('num_ssl_queues');
  }
  public set numSslQueues(value: number) {
    this._numSslQueues = value;
  }
  public resetNumSslQueues() {
    this._numSslQueues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numSslQueuesInput() {
    return this._numSslQueues;
  }

  // ssl_hw_q_depth_tot - computed: false, optional: true, required: false
  private _sslHwQDepthTot?: number; 
  public get sslHwQDepthTot() {
    return this.getNumberAttribute('ssl_hw_q_depth_tot');
  }
  public set sslHwQDepthTot(value: number) {
    this._sslHwQDepthTot = value;
  }
  public resetSslHwQDepthTot() {
    this._sslHwQDepthTot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslHwQDepthTotInput() {
    return this._sslHwQDepthTot;
  }

  // ssl_hw_q_inuse_tot - computed: false, optional: true, required: false
  private _sslHwQInuseTot?: number; 
  public get sslHwQInuseTot() {
    return this.getNumberAttribute('ssl_hw_q_inuse_tot');
  }
  public set sslHwQInuseTot(value: number) {
    this._sslHwQInuseTot = value;
  }
  public resetSslHwQInuseTot() {
    this._sslHwQInuseTot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslHwQInuseTotInput() {
    return this._sslHwQInuseTot;
  }

  // ssl_req_q_depth_tot - computed: false, optional: true, required: false
  private _sslReqQDepthTot?: number; 
  public get sslReqQDepthTot() {
    return this.getNumberAttribute('ssl_req_q_depth_tot');
  }
  public set sslReqQDepthTot(value: number) {
    this._sslReqQDepthTot = value;
  }
  public resetSslReqQDepthTot() {
    this._sslReqQDepthTot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslReqQDepthTotInput() {
    return this._sslReqQDepthTot;
  }

  // ssl_req_q_inuse_tot - computed: false, optional: true, required: false
  private _sslReqQInuseTot?: number; 
  public get sslReqQInuseTot() {
    return this.getNumberAttribute('ssl_req_q_inuse_tot');
  }
  public set sslReqQInuseTot(value: number) {
    this._sslReqQInuseTot = value;
  }
  public resetSslReqQInuseTot() {
    this._sslReqQInuseTot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslReqQInuseTotInput() {
    return this._sslReqQInuseTot;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_ssl_req_q_stats thunder_system_ssl_req_q_stats}
*/
export class DataThunderSystemSslReqQStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_system_ssl_req_q_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSystemSslReqQStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSystemSslReqQStats to import
  * @param importFromId The id of the existing DataThunderSystemSslReqQStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_ssl_req_q_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSystemSslReqQStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_system_ssl_req_q_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_ssl_req_q_stats thunder_system_ssl_req_q_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSystemSslReqQStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSystemSslReqQStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_system_ssl_req_q_stats',
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
  private _stats = new DataThunderSystemSslReqQStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderSystemSslReqQStatsStats) {
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
      stats: dataThunderSystemSslReqQStatsStatsToTerraform(this._stats.internalValue),
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
        value: dataThunderSystemSslReqQStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSystemSslReqQStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
