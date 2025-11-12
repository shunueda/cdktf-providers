// https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.3.0/docs/resources/account_features
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AccountFeaturesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether advanced CI is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.3.0/docs/resources/account_features#advanced_ci AccountFeatures#advanced_ci}
  */
  readonly advancedCi?: boolean | cdktf.IResolvable;
  /**
  * Whether AI features are enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.3.0/docs/resources/account_features#ai_features AccountFeatures#ai_features}
  */
  readonly aiFeatures?: boolean | cdktf.IResolvable;
  /**
  * Whether partial parsing is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.3.0/docs/resources/account_features#partial_parsing AccountFeatures#partial_parsing}
  */
  readonly partialParsing?: boolean | cdktf.IResolvable;
  /**
  * Whether repository caching is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.3.0/docs/resources/account_features#repo_caching AccountFeatures#repo_caching}
  */
  readonly repoCaching?: boolean | cdktf.IResolvable;
  /**
  * Whether warehouse cost visibility is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.3.0/docs/resources/account_features#warehouse_cost_visibility AccountFeatures#warehouse_cost_visibility}
  */
  readonly warehouseCostVisibility?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.3.0/docs/resources/account_features dbtcloud_account_features}
*/
export class AccountFeatures extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dbtcloud_account_features";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AccountFeatures resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AccountFeatures to import
  * @param importFromId The id of the existing AccountFeatures that should be imported. Refer to the {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.3.0/docs/resources/account_features#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AccountFeatures to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dbtcloud_account_features", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.3.0/docs/resources/account_features dbtcloud_account_features} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AccountFeaturesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: AccountFeaturesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'dbtcloud_account_features',
      terraformGeneratorMetadata: {
        providerName: 'dbtcloud',
        providerVersion: '1.3.0',
        providerVersionConstraint: '1.3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._advancedCi = config.advancedCi;
    this._aiFeatures = config.aiFeatures;
    this._partialParsing = config.partialParsing;
    this._repoCaching = config.repoCaching;
    this._warehouseCostVisibility = config.warehouseCostVisibility;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // advanced_ci - computed: true, optional: true, required: false
  private _advancedCi?: boolean | cdktf.IResolvable; 
  public get advancedCi() {
    return this.getBooleanAttribute('advanced_ci');
  }
  public set advancedCi(value: boolean | cdktf.IResolvable) {
    this._advancedCi = value;
  }
  public resetAdvancedCi() {
    this._advancedCi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedCiInput() {
    return this._advancedCi;
  }

  // ai_features - computed: true, optional: true, required: false
  private _aiFeatures?: boolean | cdktf.IResolvable; 
  public get aiFeatures() {
    return this.getBooleanAttribute('ai_features');
  }
  public set aiFeatures(value: boolean | cdktf.IResolvable) {
    this._aiFeatures = value;
  }
  public resetAiFeatures() {
    this._aiFeatures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aiFeaturesInput() {
    return this._aiFeatures;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // partial_parsing - computed: true, optional: true, required: false
  private _partialParsing?: boolean | cdktf.IResolvable; 
  public get partialParsing() {
    return this.getBooleanAttribute('partial_parsing');
  }
  public set partialParsing(value: boolean | cdktf.IResolvable) {
    this._partialParsing = value;
  }
  public resetPartialParsing() {
    this._partialParsing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partialParsingInput() {
    return this._partialParsing;
  }

  // repo_caching - computed: true, optional: true, required: false
  private _repoCaching?: boolean | cdktf.IResolvable; 
  public get repoCaching() {
    return this.getBooleanAttribute('repo_caching');
  }
  public set repoCaching(value: boolean | cdktf.IResolvable) {
    this._repoCaching = value;
  }
  public resetRepoCaching() {
    this._repoCaching = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repoCachingInput() {
    return this._repoCaching;
  }

  // warehouse_cost_visibility - computed: true, optional: true, required: false
  private _warehouseCostVisibility?: boolean | cdktf.IResolvable; 
  public get warehouseCostVisibility() {
    return this.getBooleanAttribute('warehouse_cost_visibility');
  }
  public set warehouseCostVisibility(value: boolean | cdktf.IResolvable) {
    this._warehouseCostVisibility = value;
  }
  public resetWarehouseCostVisibility() {
    this._warehouseCostVisibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warehouseCostVisibilityInput() {
    return this._warehouseCostVisibility;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      advanced_ci: cdktf.booleanToTerraform(this._advancedCi),
      ai_features: cdktf.booleanToTerraform(this._aiFeatures),
      partial_parsing: cdktf.booleanToTerraform(this._partialParsing),
      repo_caching: cdktf.booleanToTerraform(this._repoCaching),
      warehouse_cost_visibility: cdktf.booleanToTerraform(this._warehouseCostVisibility),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      advanced_ci: {
        value: cdktf.booleanToHclTerraform(this._advancedCi),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ai_features: {
        value: cdktf.booleanToHclTerraform(this._aiFeatures),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      partial_parsing: {
        value: cdktf.booleanToHclTerraform(this._partialParsing),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      repo_caching: {
        value: cdktf.booleanToHclTerraform(this._repoCaching),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      warehouse_cost_visibility: {
        value: cdktf.booleanToHclTerraform(this._warehouseCostVisibility),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
