// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ipv6_nat_pool_group_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderIpv6NatPoolGroupStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ipv6_nat_pool_group_stats#id DataThunderIpv6NatPoolGroupStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specify pool group name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ipv6_nat_pool_group_stats#pool_group_name DataThunderIpv6NatPoolGroupStats#pool_group_name}
  */
  readonly poolGroupName: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ipv6_nat_pool_group_stats#stats DataThunderIpv6NatPoolGroupStats#stats}
  */
  readonly stats?: DataThunderIpv6NatPoolGroupStatsStats;
}
export interface DataThunderIpv6NatPoolGroupStatsStats {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ipv6_nat_pool_group_stats#failed DataThunderIpv6NatPoolGroupStats#failed}
  */
  readonly failed?: number;
}

export function dataThunderIpv6NatPoolGroupStatsStatsToTerraform(struct?: DataThunderIpv6NatPoolGroupStatsStatsOutputReference | DataThunderIpv6NatPoolGroupStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    failed: cdktf.numberToTerraform(struct!.failed),
  }
}


export function dataThunderIpv6NatPoolGroupStatsStatsToHclTerraform(struct?: DataThunderIpv6NatPoolGroupStatsStatsOutputReference | DataThunderIpv6NatPoolGroupStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    failed: {
      value: cdktf.numberToHclTerraform(struct!.failed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderIpv6NatPoolGroupStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderIpv6NatPoolGroupStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._failed !== undefined) {
      hasAnyValues = true;
      internalValueResult.failed = this._failed;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderIpv6NatPoolGroupStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._failed = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._failed = value.failed;
    }
  }

  // failed - computed: false, optional: true, required: false
  private _failed?: number; 
  public get failed() {
    return this.getNumberAttribute('failed');
  }
  public set failed(value: number) {
    this._failed = value;
  }
  public resetFailed() {
    this._failed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failedInput() {
    return this._failed;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ipv6_nat_pool_group_stats thunder_ipv6_nat_pool_group_stats}
*/
export class DataThunderIpv6NatPoolGroupStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ipv6_nat_pool_group_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderIpv6NatPoolGroupStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderIpv6NatPoolGroupStats to import
  * @param importFromId The id of the existing DataThunderIpv6NatPoolGroupStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ipv6_nat_pool_group_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderIpv6NatPoolGroupStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ipv6_nat_pool_group_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ipv6_nat_pool_group_stats thunder_ipv6_nat_pool_group_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderIpv6NatPoolGroupStatsConfig
  */
  public constructor(scope: Construct, id: string, config: DataThunderIpv6NatPoolGroupStatsConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ipv6_nat_pool_group_stats',
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
    this._poolGroupName = config.poolGroupName;
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

  // pool_group_name - computed: false, optional: false, required: true
  private _poolGroupName?: string; 
  public get poolGroupName() {
    return this.getStringAttribute('pool_group_name');
  }
  public set poolGroupName(value: string) {
    this._poolGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get poolGroupNameInput() {
    return this._poolGroupName;
  }

  // stats - computed: false, optional: true, required: false
  private _stats = new DataThunderIpv6NatPoolGroupStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderIpv6NatPoolGroupStatsStats) {
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
      pool_group_name: cdktf.stringToTerraform(this._poolGroupName),
      stats: dataThunderIpv6NatPoolGroupStatsStatsToTerraform(this._stats.internalValue),
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
      pool_group_name: {
        value: cdktf.stringToHclTerraform(this._poolGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stats: {
        value: dataThunderIpv6NatPoolGroupStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderIpv6NatPoolGroupStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
