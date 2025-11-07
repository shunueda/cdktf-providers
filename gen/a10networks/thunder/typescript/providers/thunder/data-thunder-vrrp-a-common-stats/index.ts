// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_common_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderVrrpACommonStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_common_stats#id DataThunderVrrpACommonStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_common_stats#stats DataThunderVrrpACommonStats#stats}
  */
  readonly stats?: DataThunderVrrpACommonStatsStats;
}
export interface DataThunderVrrpACommonStatsStats {
  /**
  * dummy counter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_common_stats#vrrp_common_dummy DataThunderVrrpACommonStats#vrrp_common_dummy}
  */
  readonly vrrpCommonDummy?: number;
}

export function dataThunderVrrpACommonStatsStatsToTerraform(struct?: DataThunderVrrpACommonStatsStatsOutputReference | DataThunderVrrpACommonStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    vrrp_common_dummy: cdktf.numberToTerraform(struct!.vrrpCommonDummy),
  }
}


export function dataThunderVrrpACommonStatsStatsToHclTerraform(struct?: DataThunderVrrpACommonStatsStatsOutputReference | DataThunderVrrpACommonStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    vrrp_common_dummy: {
      value: cdktf.numberToHclTerraform(struct!.vrrpCommonDummy),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVrrpACommonStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderVrrpACommonStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._vrrpCommonDummy !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrrpCommonDummy = this._vrrpCommonDummy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVrrpACommonStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._vrrpCommonDummy = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._vrrpCommonDummy = value.vrrpCommonDummy;
    }
  }

  // vrrp_common_dummy - computed: false, optional: true, required: false
  private _vrrpCommonDummy?: number; 
  public get vrrpCommonDummy() {
    return this.getNumberAttribute('vrrp_common_dummy');
  }
  public set vrrpCommonDummy(value: number) {
    this._vrrpCommonDummy = value;
  }
  public resetVrrpCommonDummy() {
    this._vrrpCommonDummy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrrpCommonDummyInput() {
    return this._vrrpCommonDummy;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_common_stats thunder_vrrp_a_common_stats}
*/
export class DataThunderVrrpACommonStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_vrrp_a_common_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderVrrpACommonStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderVrrpACommonStats to import
  * @param importFromId The id of the existing DataThunderVrrpACommonStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_common_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderVrrpACommonStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_vrrp_a_common_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_common_stats thunder_vrrp_a_common_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderVrrpACommonStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderVrrpACommonStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_vrrp_a_common_stats',
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
  private _stats = new DataThunderVrrpACommonStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderVrrpACommonStatsStats) {
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
      stats: dataThunderVrrpACommonStatsStatsToTerraform(this._stats.internalValue),
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
        value: dataThunderVrrpACommonStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderVrrpACommonStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
