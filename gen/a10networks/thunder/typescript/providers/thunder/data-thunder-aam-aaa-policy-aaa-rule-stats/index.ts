// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_aaa_policy_aaa_rule_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderAamAaaPolicyAaaRuleStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_aaa_policy_aaa_rule_stats#id DataThunderAamAaaPolicyAaaRuleStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specify AAA rule index
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_aaa_policy_aaa_rule_stats#index DataThunderAamAaaPolicyAaaRuleStats#index}
  */
  readonly index: number;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_aaa_policy_aaa_rule_stats#name DataThunderAamAaaPolicyAaaRuleStats#name}
  */
  readonly name: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_aaa_policy_aaa_rule_stats#stats DataThunderAamAaaPolicyAaaRuleStats#stats}
  */
  readonly stats?: DataThunderAamAaaPolicyAaaRuleStatsStats;
}
export interface DataThunderAamAaaPolicyAaaRuleStatsStats {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_aaa_policy_aaa_rule_stats#failure_bypass DataThunderAamAaaPolicyAaaRuleStats#failure_bypass}
  */
  readonly failureBypass?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_aaa_policy_aaa_rule_stats#hit_auth DataThunderAamAaaPolicyAaaRuleStats#hit_auth}
  */
  readonly hitAuth?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_aaa_policy_aaa_rule_stats#hit_bypass DataThunderAamAaaPolicyAaaRuleStats#hit_bypass}
  */
  readonly hitBypass?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_aaa_policy_aaa_rule_stats#hit_deny DataThunderAamAaaPolicyAaaRuleStats#hit_deny}
  */
  readonly hitDeny?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_aaa_policy_aaa_rule_stats#total_count DataThunderAamAaaPolicyAaaRuleStats#total_count}
  */
  readonly totalCount?: number;
}

export function dataThunderAamAaaPolicyAaaRuleStatsStatsToTerraform(struct?: DataThunderAamAaaPolicyAaaRuleStatsStatsOutputReference | DataThunderAamAaaPolicyAaaRuleStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    failure_bypass: cdktf.numberToTerraform(struct!.failureBypass),
    hit_auth: cdktf.numberToTerraform(struct!.hitAuth),
    hit_bypass: cdktf.numberToTerraform(struct!.hitBypass),
    hit_deny: cdktf.numberToTerraform(struct!.hitDeny),
    total_count: cdktf.numberToTerraform(struct!.totalCount),
  }
}


export function dataThunderAamAaaPolicyAaaRuleStatsStatsToHclTerraform(struct?: DataThunderAamAaaPolicyAaaRuleStatsStatsOutputReference | DataThunderAamAaaPolicyAaaRuleStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    failure_bypass: {
      value: cdktf.numberToHclTerraform(struct!.failureBypass),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hit_auth: {
      value: cdktf.numberToHclTerraform(struct!.hitAuth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hit_bypass: {
      value: cdktf.numberToHclTerraform(struct!.hitBypass),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hit_deny: {
      value: cdktf.numberToHclTerraform(struct!.hitDeny),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_count: {
      value: cdktf.numberToHclTerraform(struct!.totalCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderAamAaaPolicyAaaRuleStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderAamAaaPolicyAaaRuleStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._failureBypass !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureBypass = this._failureBypass;
    }
    if (this._hitAuth !== undefined) {
      hasAnyValues = true;
      internalValueResult.hitAuth = this._hitAuth;
    }
    if (this._hitBypass !== undefined) {
      hasAnyValues = true;
      internalValueResult.hitBypass = this._hitBypass;
    }
    if (this._hitDeny !== undefined) {
      hasAnyValues = true;
      internalValueResult.hitDeny = this._hitDeny;
    }
    if (this._totalCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalCount = this._totalCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderAamAaaPolicyAaaRuleStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._failureBypass = undefined;
      this._hitAuth = undefined;
      this._hitBypass = undefined;
      this._hitDeny = undefined;
      this._totalCount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._failureBypass = value.failureBypass;
      this._hitAuth = value.hitAuth;
      this._hitBypass = value.hitBypass;
      this._hitDeny = value.hitDeny;
      this._totalCount = value.totalCount;
    }
  }

  // failure_bypass - computed: false, optional: true, required: false
  private _failureBypass?: number; 
  public get failureBypass() {
    return this.getNumberAttribute('failure_bypass');
  }
  public set failureBypass(value: number) {
    this._failureBypass = value;
  }
  public resetFailureBypass() {
    this._failureBypass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureBypassInput() {
    return this._failureBypass;
  }

  // hit_auth - computed: false, optional: true, required: false
  private _hitAuth?: number; 
  public get hitAuth() {
    return this.getNumberAttribute('hit_auth');
  }
  public set hitAuth(value: number) {
    this._hitAuth = value;
  }
  public resetHitAuth() {
    this._hitAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hitAuthInput() {
    return this._hitAuth;
  }

  // hit_bypass - computed: false, optional: true, required: false
  private _hitBypass?: number; 
  public get hitBypass() {
    return this.getNumberAttribute('hit_bypass');
  }
  public set hitBypass(value: number) {
    this._hitBypass = value;
  }
  public resetHitBypass() {
    this._hitBypass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hitBypassInput() {
    return this._hitBypass;
  }

  // hit_deny - computed: false, optional: true, required: false
  private _hitDeny?: number; 
  public get hitDeny() {
    return this.getNumberAttribute('hit_deny');
  }
  public set hitDeny(value: number) {
    this._hitDeny = value;
  }
  public resetHitDeny() {
    this._hitDeny = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hitDenyInput() {
    return this._hitDeny;
  }

  // total_count - computed: false, optional: true, required: false
  private _totalCount?: number; 
  public get totalCount() {
    return this.getNumberAttribute('total_count');
  }
  public set totalCount(value: number) {
    this._totalCount = value;
  }
  public resetTotalCount() {
    this._totalCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalCountInput() {
    return this._totalCount;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_aaa_policy_aaa_rule_stats thunder_aam_aaa_policy_aaa_rule_stats}
*/
export class DataThunderAamAaaPolicyAaaRuleStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_aam_aaa_policy_aaa_rule_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderAamAaaPolicyAaaRuleStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderAamAaaPolicyAaaRuleStats to import
  * @param importFromId The id of the existing DataThunderAamAaaPolicyAaaRuleStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_aaa_policy_aaa_rule_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderAamAaaPolicyAaaRuleStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_aam_aaa_policy_aaa_rule_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_aaa_policy_aaa_rule_stats thunder_aam_aaa_policy_aaa_rule_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderAamAaaPolicyAaaRuleStatsConfig
  */
  public constructor(scope: Construct, id: string, config: DataThunderAamAaaPolicyAaaRuleStatsConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_aam_aaa_policy_aaa_rule_stats',
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
    this._index = config.index;
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

  // index - computed: false, optional: false, required: true
  private _index?: number; 
  public get index() {
    return this.getNumberAttribute('index');
  }
  public set index(value: number) {
    this._index = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
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
  private _stats = new DataThunderAamAaaPolicyAaaRuleStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderAamAaaPolicyAaaRuleStatsStats) {
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
      index: cdktf.numberToTerraform(this._index),
      name: cdktf.stringToTerraform(this._name),
      stats: dataThunderAamAaaPolicyAaaRuleStatsStatsToTerraform(this._stats.internalValue),
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
      index: {
        value: cdktf.numberToHclTerraform(this._index),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stats: {
        value: dataThunderAamAaaPolicyAaaRuleStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderAamAaaPolicyAaaRuleStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
