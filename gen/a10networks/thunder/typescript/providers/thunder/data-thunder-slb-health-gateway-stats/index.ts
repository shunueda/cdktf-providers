// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_gateway_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSlbHealthGatewayStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_gateway_stats#id DataThunderSlbHealthGatewayStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_gateway_stats#stats DataThunderSlbHealthGatewayStats#stats}
  */
  readonly stats?: DataThunderSlbHealthGatewayStatsStats;
}
export interface DataThunderSlbHealthGatewayStatsStats {
  /**
  * Number of Total health-check retry sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_gateway_stats#total_retry_sent DataThunderSlbHealthGatewayStats#total_retry_sent}
  */
  readonly totalRetrySent?: number;
  /**
  * Number of Total health-check sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_gateway_stats#total_sent DataThunderSlbHealthGatewayStats#total_sent}
  */
  readonly totalSent?: number;
  /**
  * Number of Total health-check timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_gateway_stats#total_timeout DataThunderSlbHealthGatewayStats#total_timeout}
  */
  readonly totalTimeout?: number;
}

export function dataThunderSlbHealthGatewayStatsStatsToTerraform(struct?: DataThunderSlbHealthGatewayStatsStatsOutputReference | DataThunderSlbHealthGatewayStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    total_retry_sent: cdktf.numberToTerraform(struct!.totalRetrySent),
    total_sent: cdktf.numberToTerraform(struct!.totalSent),
    total_timeout: cdktf.numberToTerraform(struct!.totalTimeout),
  }
}


export function dataThunderSlbHealthGatewayStatsStatsToHclTerraform(struct?: DataThunderSlbHealthGatewayStatsStatsOutputReference | DataThunderSlbHealthGatewayStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    total_retry_sent: {
      value: cdktf.numberToHclTerraform(struct!.totalRetrySent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_sent: {
      value: cdktf.numberToHclTerraform(struct!.totalSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_timeout: {
      value: cdktf.numberToHclTerraform(struct!.totalTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbHealthGatewayStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSlbHealthGatewayStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._totalRetrySent !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalRetrySent = this._totalRetrySent;
    }
    if (this._totalSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalSent = this._totalSent;
    }
    if (this._totalTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalTimeout = this._totalTimeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbHealthGatewayStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._totalRetrySent = undefined;
      this._totalSent = undefined;
      this._totalTimeout = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._totalRetrySent = value.totalRetrySent;
      this._totalSent = value.totalSent;
      this._totalTimeout = value.totalTimeout;
    }
  }

  // total_retry_sent - computed: false, optional: true, required: false
  private _totalRetrySent?: number; 
  public get totalRetrySent() {
    return this.getNumberAttribute('total_retry_sent');
  }
  public set totalRetrySent(value: number) {
    this._totalRetrySent = value;
  }
  public resetTotalRetrySent() {
    this._totalRetrySent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalRetrySentInput() {
    return this._totalRetrySent;
  }

  // total_sent - computed: false, optional: true, required: false
  private _totalSent?: number; 
  public get totalSent() {
    return this.getNumberAttribute('total_sent');
  }
  public set totalSent(value: number) {
    this._totalSent = value;
  }
  public resetTotalSent() {
    this._totalSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalSentInput() {
    return this._totalSent;
  }

  // total_timeout - computed: false, optional: true, required: false
  private _totalTimeout?: number; 
  public get totalTimeout() {
    return this.getNumberAttribute('total_timeout');
  }
  public set totalTimeout(value: number) {
    this._totalTimeout = value;
  }
  public resetTotalTimeout() {
    this._totalTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalTimeoutInput() {
    return this._totalTimeout;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_gateway_stats thunder_slb_health_gateway_stats}
*/
export class DataThunderSlbHealthGatewayStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_health_gateway_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSlbHealthGatewayStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSlbHealthGatewayStats to import
  * @param importFromId The id of the existing DataThunderSlbHealthGatewayStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_gateway_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSlbHealthGatewayStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_health_gateway_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_gateway_stats thunder_slb_health_gateway_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSlbHealthGatewayStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSlbHealthGatewayStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_health_gateway_stats',
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
  private _stats = new DataThunderSlbHealthGatewayStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderSlbHealthGatewayStatsStats) {
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
      stats: dataThunderSlbHealthGatewayStatsStatsToTerraform(this._stats.internalValue),
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
        value: dataThunderSlbHealthGatewayStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSlbHealthGatewayStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
