// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_reputation_scope_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderWebCategoryReputationScopeStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_reputation_scope_stats#id DataThunderWebCategoryReputationScopeStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Reputation Scope name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_reputation_scope_stats#name DataThunderWebCategoryReputationScopeStats#name}
  */
  readonly name: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_reputation_scope_stats#stats DataThunderWebCategoryReputationScopeStats#stats}
  */
  readonly stats?: DataThunderWebCategoryReputationScopeStatsStats;
}
export interface DataThunderWebCategoryReputationScopeStatsStats {
  /**
  * Low-risk level(61-80)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_reputation_scope_stats#low_risk DataThunderWebCategoryReputationScopeStats#low_risk}
  */
  readonly lowRisk?: number;
  /**
  * Malicious level(1-20)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_reputation_scope_stats#malicious DataThunderWebCategoryReputationScopeStats#malicious}
  */
  readonly malicious?: number;
  /**
  * Moderate-risk level(41-60)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_reputation_scope_stats#moderate_risk DataThunderWebCategoryReputationScopeStats#moderate_risk}
  */
  readonly moderateRisk?: number;
  /**
  * Suspicious level(21-40)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_reputation_scope_stats#suspicious DataThunderWebCategoryReputationScopeStats#suspicious}
  */
  readonly suspicious?: number;
  /**
  * Trustworthy level(81-100)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_reputation_scope_stats#trustworthy DataThunderWebCategoryReputationScopeStats#trustworthy}
  */
  readonly trustworthy?: number;
}

export function dataThunderWebCategoryReputationScopeStatsStatsToTerraform(struct?: DataThunderWebCategoryReputationScopeStatsStatsOutputReference | DataThunderWebCategoryReputationScopeStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    low_risk: cdktf.numberToTerraform(struct!.lowRisk),
    malicious: cdktf.numberToTerraform(struct!.malicious),
    moderate_risk: cdktf.numberToTerraform(struct!.moderateRisk),
    suspicious: cdktf.numberToTerraform(struct!.suspicious),
    trustworthy: cdktf.numberToTerraform(struct!.trustworthy),
  }
}


export function dataThunderWebCategoryReputationScopeStatsStatsToHclTerraform(struct?: DataThunderWebCategoryReputationScopeStatsStatsOutputReference | DataThunderWebCategoryReputationScopeStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    low_risk: {
      value: cdktf.numberToHclTerraform(struct!.lowRisk),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    malicious: {
      value: cdktf.numberToHclTerraform(struct!.malicious),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    moderate_risk: {
      value: cdktf.numberToHclTerraform(struct!.moderateRisk),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    suspicious: {
      value: cdktf.numberToHclTerraform(struct!.suspicious),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    trustworthy: {
      value: cdktf.numberToHclTerraform(struct!.trustworthy),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderWebCategoryReputationScopeStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderWebCategoryReputationScopeStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lowRisk !== undefined) {
      hasAnyValues = true;
      internalValueResult.lowRisk = this._lowRisk;
    }
    if (this._malicious !== undefined) {
      hasAnyValues = true;
      internalValueResult.malicious = this._malicious;
    }
    if (this._moderateRisk !== undefined) {
      hasAnyValues = true;
      internalValueResult.moderateRisk = this._moderateRisk;
    }
    if (this._suspicious !== undefined) {
      hasAnyValues = true;
      internalValueResult.suspicious = this._suspicious;
    }
    if (this._trustworthy !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustworthy = this._trustworthy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderWebCategoryReputationScopeStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._lowRisk = undefined;
      this._malicious = undefined;
      this._moderateRisk = undefined;
      this._suspicious = undefined;
      this._trustworthy = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._lowRisk = value.lowRisk;
      this._malicious = value.malicious;
      this._moderateRisk = value.moderateRisk;
      this._suspicious = value.suspicious;
      this._trustworthy = value.trustworthy;
    }
  }

  // low_risk - computed: false, optional: true, required: false
  private _lowRisk?: number; 
  public get lowRisk() {
    return this.getNumberAttribute('low_risk');
  }
  public set lowRisk(value: number) {
    this._lowRisk = value;
  }
  public resetLowRisk() {
    this._lowRisk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lowRiskInput() {
    return this._lowRisk;
  }

  // malicious - computed: false, optional: true, required: false
  private _malicious?: number; 
  public get malicious() {
    return this.getNumberAttribute('malicious');
  }
  public set malicious(value: number) {
    this._malicious = value;
  }
  public resetMalicious() {
    this._malicious = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maliciousInput() {
    return this._malicious;
  }

  // moderate_risk - computed: false, optional: true, required: false
  private _moderateRisk?: number; 
  public get moderateRisk() {
    return this.getNumberAttribute('moderate_risk');
  }
  public set moderateRisk(value: number) {
    this._moderateRisk = value;
  }
  public resetModerateRisk() {
    this._moderateRisk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moderateRiskInput() {
    return this._moderateRisk;
  }

  // suspicious - computed: false, optional: true, required: false
  private _suspicious?: number; 
  public get suspicious() {
    return this.getNumberAttribute('suspicious');
  }
  public set suspicious(value: number) {
    this._suspicious = value;
  }
  public resetSuspicious() {
    this._suspicious = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suspiciousInput() {
    return this._suspicious;
  }

  // trustworthy - computed: false, optional: true, required: false
  private _trustworthy?: number; 
  public get trustworthy() {
    return this.getNumberAttribute('trustworthy');
  }
  public set trustworthy(value: number) {
    this._trustworthy = value;
  }
  public resetTrustworthy() {
    this._trustworthy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustworthyInput() {
    return this._trustworthy;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_reputation_scope_stats thunder_web_category_reputation_scope_stats}
*/
export class DataThunderWebCategoryReputationScopeStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_web_category_reputation_scope_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderWebCategoryReputationScopeStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderWebCategoryReputationScopeStats to import
  * @param importFromId The id of the existing DataThunderWebCategoryReputationScopeStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_reputation_scope_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderWebCategoryReputationScopeStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_web_category_reputation_scope_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_reputation_scope_stats thunder_web_category_reputation_scope_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderWebCategoryReputationScopeStatsConfig
  */
  public constructor(scope: Construct, id: string, config: DataThunderWebCategoryReputationScopeStatsConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_web_category_reputation_scope_stats',
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
  private _stats = new DataThunderWebCategoryReputationScopeStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderWebCategoryReputationScopeStatsStats) {
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
      stats: dataThunderWebCategoryReputationScopeStatsStatsToTerraform(this._stats.internalValue),
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
        value: dataThunderWebCategoryReputationScopeStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderWebCategoryReputationScopeStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
