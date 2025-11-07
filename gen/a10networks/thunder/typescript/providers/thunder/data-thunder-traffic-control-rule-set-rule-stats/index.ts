// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/traffic_control_rule_set_rule_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderTrafficControlRuleSetRuleStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/traffic_control_rule_set_rule_stats#id DataThunderTrafficControlRuleSetRuleStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Rule name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/traffic_control_rule_set_rule_stats#name DataThunderTrafficControlRuleSetRuleStats#name}
  */
  readonly name: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/traffic_control_rule_set_rule_stats#stats DataThunderTrafficControlRuleSetRuleStats#stats}
  */
  readonly stats?: DataThunderTrafficControlRuleSetRuleStatsStats;
}
export interface DataThunderTrafficControlRuleSetRuleStatsStats {
  /**
  * Hit counts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/traffic_control_rule_set_rule_stats#hit_count DataThunderTrafficControlRuleSetRuleStats#hit_count}
  */
  readonly hitCount?: number;
}

export function dataThunderTrafficControlRuleSetRuleStatsStatsToTerraform(struct?: DataThunderTrafficControlRuleSetRuleStatsStatsOutputReference | DataThunderTrafficControlRuleSetRuleStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hit_count: cdktf.numberToTerraform(struct!.hitCount),
  }
}


export function dataThunderTrafficControlRuleSetRuleStatsStatsToHclTerraform(struct?: DataThunderTrafficControlRuleSetRuleStatsStatsOutputReference | DataThunderTrafficControlRuleSetRuleStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hit_count: {
      value: cdktf.numberToHclTerraform(struct!.hitCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderTrafficControlRuleSetRuleStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderTrafficControlRuleSetRuleStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hitCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.hitCount = this._hitCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderTrafficControlRuleSetRuleStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hitCount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hitCount = value.hitCount;
    }
  }

  // hit_count - computed: false, optional: true, required: false
  private _hitCount?: number; 
  public get hitCount() {
    return this.getNumberAttribute('hit_count');
  }
  public set hitCount(value: number) {
    this._hitCount = value;
  }
  public resetHitCount() {
    this._hitCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hitCountInput() {
    return this._hitCount;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/traffic_control_rule_set_rule_stats thunder_traffic_control_rule_set_rule_stats}
*/
export class DataThunderTrafficControlRuleSetRuleStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_traffic_control_rule_set_rule_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderTrafficControlRuleSetRuleStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderTrafficControlRuleSetRuleStats to import
  * @param importFromId The id of the existing DataThunderTrafficControlRuleSetRuleStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/traffic_control_rule_set_rule_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderTrafficControlRuleSetRuleStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_traffic_control_rule_set_rule_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/traffic_control_rule_set_rule_stats thunder_traffic_control_rule_set_rule_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderTrafficControlRuleSetRuleStatsConfig
  */
  public constructor(scope: Construct, id: string, config: DataThunderTrafficControlRuleSetRuleStatsConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_traffic_control_rule_set_rule_stats',
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
    this._name = config.name;
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

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // stats - computed: false, optional: true, required: false
  private _stats = new DataThunderTrafficControlRuleSetRuleStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderTrafficControlRuleSetRuleStatsStats) {
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
      name: cdktf.stringToTerraform(this._name),
      stats: dataThunderTrafficControlRuleSetRuleStatsStatsToTerraform(this._stats.internalValue),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stats: {
        value: dataThunderTrafficControlRuleSetRuleStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderTrafficControlRuleSetRuleStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
