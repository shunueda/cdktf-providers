// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vrrp_a_vrid_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderVrrpAVridStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vrrp_a_vrid_stats#id DataThunderVrrpAVridStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specify ha VRRP-A vrid
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vrrp_a_vrid_stats#vrid_val DataThunderVrrpAVridStats#vrid_val}
  */
  readonly vridVal: number;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vrrp_a_vrid_stats#stats DataThunderVrrpAVridStats#stats}
  */
  readonly stats?: DataThunderVrrpAVridStatsStats;
}
export interface DataThunderVrrpAVridStatsStats {
  /**
  * Number of nat pools associated to vrid
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vrrp_a_vrid_stats#associated_natpool_count DataThunderVrrpAVridStats#associated_natpool_count}
  */
  readonly associatedNatpoolCount?: number;
  /**
  * Number of vips associated to vrid
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vrrp_a_vrid_stats#associated_vip_count DataThunderVrrpAVridStats#associated_vip_count}
  */
  readonly associatedVipCount?: number;
  /**
  * Number of vports associated to vrid
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vrrp_a_vrid_stats#associated_vport_count DataThunderVrrpAVridStats#associated_vport_count}
  */
  readonly associatedVportCount?: number;
}

export function dataThunderVrrpAVridStatsStatsToTerraform(struct?: DataThunderVrrpAVridStatsStatsOutputReference | DataThunderVrrpAVridStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    associated_natpool_count: cdktf.numberToTerraform(struct!.associatedNatpoolCount),
    associated_vip_count: cdktf.numberToTerraform(struct!.associatedVipCount),
    associated_vport_count: cdktf.numberToTerraform(struct!.associatedVportCount),
  }
}


export function dataThunderVrrpAVridStatsStatsToHclTerraform(struct?: DataThunderVrrpAVridStatsStatsOutputReference | DataThunderVrrpAVridStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    associated_natpool_count: {
      value: cdktf.numberToHclTerraform(struct!.associatedNatpoolCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    associated_vip_count: {
      value: cdktf.numberToHclTerraform(struct!.associatedVipCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    associated_vport_count: {
      value: cdktf.numberToHclTerraform(struct!.associatedVportCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVrrpAVridStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderVrrpAVridStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._associatedNatpoolCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.associatedNatpoolCount = this._associatedNatpoolCount;
    }
    if (this._associatedVipCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.associatedVipCount = this._associatedVipCount;
    }
    if (this._associatedVportCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.associatedVportCount = this._associatedVportCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVrrpAVridStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._associatedNatpoolCount = undefined;
      this._associatedVipCount = undefined;
      this._associatedVportCount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._associatedNatpoolCount = value.associatedNatpoolCount;
      this._associatedVipCount = value.associatedVipCount;
      this._associatedVportCount = value.associatedVportCount;
    }
  }

  // associated_natpool_count - computed: false, optional: true, required: false
  private _associatedNatpoolCount?: number; 
  public get associatedNatpoolCount() {
    return this.getNumberAttribute('associated_natpool_count');
  }
  public set associatedNatpoolCount(value: number) {
    this._associatedNatpoolCount = value;
  }
  public resetAssociatedNatpoolCount() {
    this._associatedNatpoolCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get associatedNatpoolCountInput() {
    return this._associatedNatpoolCount;
  }

  // associated_vip_count - computed: false, optional: true, required: false
  private _associatedVipCount?: number; 
  public get associatedVipCount() {
    return this.getNumberAttribute('associated_vip_count');
  }
  public set associatedVipCount(value: number) {
    this._associatedVipCount = value;
  }
  public resetAssociatedVipCount() {
    this._associatedVipCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get associatedVipCountInput() {
    return this._associatedVipCount;
  }

  // associated_vport_count - computed: false, optional: true, required: false
  private _associatedVportCount?: number; 
  public get associatedVportCount() {
    return this.getNumberAttribute('associated_vport_count');
  }
  public set associatedVportCount(value: number) {
    this._associatedVportCount = value;
  }
  public resetAssociatedVportCount() {
    this._associatedVportCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get associatedVportCountInput() {
    return this._associatedVportCount;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vrrp_a_vrid_stats thunder_vrrp_a_vrid_stats}
*/
export class DataThunderVrrpAVridStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_vrrp_a_vrid_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderVrrpAVridStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderVrrpAVridStats to import
  * @param importFromId The id of the existing DataThunderVrrpAVridStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vrrp_a_vrid_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderVrrpAVridStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_vrrp_a_vrid_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vrrp_a_vrid_stats thunder_vrrp_a_vrid_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderVrrpAVridStatsConfig
  */
  public constructor(scope: Construct, id: string, config: DataThunderVrrpAVridStatsConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_vrrp_a_vrid_stats',
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
    this._vridVal = config.vridVal;
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

  // vrid_val - computed: false, optional: false, required: true
  private _vridVal?: number; 
  public get vridVal() {
    return this.getNumberAttribute('vrid_val');
  }
  public set vridVal(value: number) {
    this._vridVal = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vridValInput() {
    return this._vridVal;
  }

  // stats - computed: false, optional: true, required: false
  private _stats = new DataThunderVrrpAVridStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderVrrpAVridStatsStats) {
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
      vrid_val: cdktf.numberToTerraform(this._vridVal),
      stats: dataThunderVrrpAVridStatsStatsToTerraform(this._stats.internalValue),
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
      vrid_val: {
        value: cdktf.numberToHclTerraform(this._vridVal),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      stats: {
        value: dataThunderVrrpAVridStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderVrrpAVridStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
