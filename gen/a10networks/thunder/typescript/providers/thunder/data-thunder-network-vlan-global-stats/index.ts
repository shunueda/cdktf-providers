// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/network_vlan_global_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderNetworkVlanGlobalStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/network_vlan_global_stats#id DataThunderNetworkVlanGlobalStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/network_vlan_global_stats#stats DataThunderNetworkVlanGlobalStats#stats}
  */
  readonly stats?: DataThunderNetworkVlanGlobalStatsStats;
}
export interface DataThunderNetworkVlanGlobalStatsStats {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/network_vlan_global_stats#asymmetric_route_drop_err DataThunderNetworkVlanGlobalStats#asymmetric_route_drop_err}
  */
  readonly asymmetricRouteDropErr?: number;
  /**
  * Transparent Mode VLAN List Errors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/network_vlan_global_stats#xparent_vlan_list_err DataThunderNetworkVlanGlobalStats#xparent_vlan_list_err}
  */
  readonly xparentVlanListErr?: number;
}

export function dataThunderNetworkVlanGlobalStatsStatsToTerraform(struct?: DataThunderNetworkVlanGlobalStatsStatsOutputReference | DataThunderNetworkVlanGlobalStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    asymmetric_route_drop_err: cdktf.numberToTerraform(struct!.asymmetricRouteDropErr),
    xparent_vlan_list_err: cdktf.numberToTerraform(struct!.xparentVlanListErr),
  }
}


export function dataThunderNetworkVlanGlobalStatsStatsToHclTerraform(struct?: DataThunderNetworkVlanGlobalStatsStatsOutputReference | DataThunderNetworkVlanGlobalStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    asymmetric_route_drop_err: {
      value: cdktf.numberToHclTerraform(struct!.asymmetricRouteDropErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    xparent_vlan_list_err: {
      value: cdktf.numberToHclTerraform(struct!.xparentVlanListErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderNetworkVlanGlobalStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderNetworkVlanGlobalStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asymmetricRouteDropErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.asymmetricRouteDropErr = this._asymmetricRouteDropErr;
    }
    if (this._xparentVlanListErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.xparentVlanListErr = this._xparentVlanListErr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderNetworkVlanGlobalStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._asymmetricRouteDropErr = undefined;
      this._xparentVlanListErr = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._asymmetricRouteDropErr = value.asymmetricRouteDropErr;
      this._xparentVlanListErr = value.xparentVlanListErr;
    }
  }

  // asymmetric_route_drop_err - computed: false, optional: true, required: false
  private _asymmetricRouteDropErr?: number; 
  public get asymmetricRouteDropErr() {
    return this.getNumberAttribute('asymmetric_route_drop_err');
  }
  public set asymmetricRouteDropErr(value: number) {
    this._asymmetricRouteDropErr = value;
  }
  public resetAsymmetricRouteDropErr() {
    this._asymmetricRouteDropErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asymmetricRouteDropErrInput() {
    return this._asymmetricRouteDropErr;
  }

  // xparent_vlan_list_err - computed: false, optional: true, required: false
  private _xparentVlanListErr?: number; 
  public get xparentVlanListErr() {
    return this.getNumberAttribute('xparent_vlan_list_err');
  }
  public set xparentVlanListErr(value: number) {
    this._xparentVlanListErr = value;
  }
  public resetXparentVlanListErr() {
    this._xparentVlanListErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xparentVlanListErrInput() {
    return this._xparentVlanListErr;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/network_vlan_global_stats thunder_network_vlan_global_stats}
*/
export class DataThunderNetworkVlanGlobalStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_network_vlan_global_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderNetworkVlanGlobalStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderNetworkVlanGlobalStats to import
  * @param importFromId The id of the existing DataThunderNetworkVlanGlobalStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/network_vlan_global_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderNetworkVlanGlobalStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_network_vlan_global_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/network_vlan_global_stats thunder_network_vlan_global_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderNetworkVlanGlobalStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderNetworkVlanGlobalStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_network_vlan_global_stats',
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
  private _stats = new DataThunderNetworkVlanGlobalStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderNetworkVlanGlobalStatsStats) {
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
      stats: dataThunderNetworkVlanGlobalStatsStatsToTerraform(this._stats.internalValue),
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
        value: dataThunderNetworkVlanGlobalStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderNetworkVlanGlobalStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
