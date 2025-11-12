// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_tcp_window_check_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderFwTcpWindowCheckStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_tcp_window_check_stats#id DataThunderFwTcpWindowCheckStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_tcp_window_check_stats#stats DataThunderFwTcpWindowCheckStats#stats}
  */
  readonly stats?: DataThunderFwTcpWindowCheckStatsStats;
}
export interface DataThunderFwTcpWindowCheckStatsStats {
  /**
  * packet dropped counter for outside of tcp window
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_tcp_window_check_stats#outside_window DataThunderFwTcpWindowCheckStats#outside_window}
  */
  readonly outsideWindow?: number;
}

export function dataThunderFwTcpWindowCheckStatsStatsToTerraform(struct?: DataThunderFwTcpWindowCheckStatsStatsOutputReference | DataThunderFwTcpWindowCheckStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    outside_window: cdktf.numberToTerraform(struct!.outsideWindow),
  }
}


export function dataThunderFwTcpWindowCheckStatsStatsToHclTerraform(struct?: DataThunderFwTcpWindowCheckStatsStatsOutputReference | DataThunderFwTcpWindowCheckStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    outside_window: {
      value: cdktf.numberToHclTerraform(struct!.outsideWindow),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderFwTcpWindowCheckStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderFwTcpWindowCheckStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._outsideWindow !== undefined) {
      hasAnyValues = true;
      internalValueResult.outsideWindow = this._outsideWindow;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderFwTcpWindowCheckStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._outsideWindow = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._outsideWindow = value.outsideWindow;
    }
  }

  // outside_window - computed: false, optional: true, required: false
  private _outsideWindow?: number; 
  public get outsideWindow() {
    return this.getNumberAttribute('outside_window');
  }
  public set outsideWindow(value: number) {
    this._outsideWindow = value;
  }
  public resetOutsideWindow() {
    this._outsideWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outsideWindowInput() {
    return this._outsideWindow;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_tcp_window_check_stats thunder_fw_tcp_window_check_stats}
*/
export class DataThunderFwTcpWindowCheckStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_fw_tcp_window_check_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderFwTcpWindowCheckStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderFwTcpWindowCheckStats to import
  * @param importFromId The id of the existing DataThunderFwTcpWindowCheckStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_tcp_window_check_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderFwTcpWindowCheckStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_fw_tcp_window_check_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_tcp_window_check_stats thunder_fw_tcp_window_check_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderFwTcpWindowCheckStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderFwTcpWindowCheckStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_fw_tcp_window_check_stats',
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
  private _stats = new DataThunderFwTcpWindowCheckStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderFwTcpWindowCheckStatsStats) {
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
      stats: dataThunderFwTcpWindowCheckStatsStatsToTerraform(this._stats.internalValue),
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
        value: dataThunderFwTcpWindowCheckStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderFwTcpWindowCheckStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
