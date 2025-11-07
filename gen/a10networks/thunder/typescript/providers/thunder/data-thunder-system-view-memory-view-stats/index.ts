// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_view_memory_view_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSystemViewMemoryViewStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_view_memory_view_stats#id DataThunderSystemViewMemoryViewStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_view_memory_view_stats#stats DataThunderSystemViewMemoryViewStats#stats}
  */
  readonly stats?: DataThunderSystemViewMemoryViewStatsStats;
}
export interface DataThunderSystemViewMemoryViewStatsStats {
  /**
  * Usage percentage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_view_memory_view_stats#usage_percentage DataThunderSystemViewMemoryViewStats#usage_percentage}
  */
  readonly usagePercentage?: number;
}

export function dataThunderSystemViewMemoryViewStatsStatsToTerraform(struct?: DataThunderSystemViewMemoryViewStatsStatsOutputReference | DataThunderSystemViewMemoryViewStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    usage_percentage: cdktf.numberToTerraform(struct!.usagePercentage),
  }
}


export function dataThunderSystemViewMemoryViewStatsStatsToHclTerraform(struct?: DataThunderSystemViewMemoryViewStatsStatsOutputReference | DataThunderSystemViewMemoryViewStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    usage_percentage: {
      value: cdktf.numberToHclTerraform(struct!.usagePercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSystemViewMemoryViewStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSystemViewMemoryViewStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._usagePercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.usagePercentage = this._usagePercentage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSystemViewMemoryViewStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._usagePercentage = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._usagePercentage = value.usagePercentage;
    }
  }

  // usage_percentage - computed: false, optional: true, required: false
  private _usagePercentage?: number; 
  public get usagePercentage() {
    return this.getNumberAttribute('usage_percentage');
  }
  public set usagePercentage(value: number) {
    this._usagePercentage = value;
  }
  public resetUsagePercentage() {
    this._usagePercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usagePercentageInput() {
    return this._usagePercentage;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_view_memory_view_stats thunder_system_view_memory_view_stats}
*/
export class DataThunderSystemViewMemoryViewStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_system_view_memory_view_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSystemViewMemoryViewStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSystemViewMemoryViewStats to import
  * @param importFromId The id of the existing DataThunderSystemViewMemoryViewStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_view_memory_view_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSystemViewMemoryViewStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_system_view_memory_view_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_view_memory_view_stats thunder_system_view_memory_view_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSystemViewMemoryViewStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSystemViewMemoryViewStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_system_view_memory_view_stats',
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
  private _stats = new DataThunderSystemViewMemoryViewStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderSystemViewMemoryViewStatsStats) {
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
      stats: dataThunderSystemViewMemoryViewStatsStatsToTerraform(this._stats.internalValue),
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
        value: dataThunderSystemViewMemoryViewStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSystemViewMemoryViewStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
