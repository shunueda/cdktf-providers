// https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/appsec_tuning_recommendations
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAkamaiAppsecTuningRecommendationsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Unique name of a specific attack group for which to return tuning recommendations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/appsec_tuning_recommendations#attack_group DataAkamaiAppsecTuningRecommendations#attack_group}
  */
  readonly attackGroup?: string;
  /**
  * Unique identifier of the security configuration for which to return tuning recommendations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/appsec_tuning_recommendations#config_id DataAkamaiAppsecTuningRecommendations#config_id}
  */
  readonly configId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/appsec_tuning_recommendations#id DataAkamaiAppsecTuningRecommendations#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Unique name of a specific rule id for which to return tuning recommendations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/appsec_tuning_recommendations#rule_id DataAkamaiAppsecTuningRecommendations#rule_id}
  */
  readonly ruleId?: number;
  /**
  * Type of the ruleset of the security configuration for which to return tuning recommendations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/appsec_tuning_recommendations#ruleset_type DataAkamaiAppsecTuningRecommendations#ruleset_type}
  */
  readonly rulesetType?: string;
  /**
  * Unique identifier of the security policy for which to return tuning recommendations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/appsec_tuning_recommendations#security_policy_id DataAkamaiAppsecTuningRecommendations#security_policy_id}
  */
  readonly securityPolicyId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/appsec_tuning_recommendations akamai_appsec_tuning_recommendations}
*/
export class DataAkamaiAppsecTuningRecommendations extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akamai_appsec_tuning_recommendations";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAkamaiAppsecTuningRecommendations resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAkamaiAppsecTuningRecommendations to import
  * @param importFromId The id of the existing DataAkamaiAppsecTuningRecommendations that should be imported. Refer to the {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/appsec_tuning_recommendations#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAkamaiAppsecTuningRecommendations to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akamai_appsec_tuning_recommendations", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/appsec_tuning_recommendations akamai_appsec_tuning_recommendations} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAkamaiAppsecTuningRecommendationsConfig
  */
  public constructor(scope: Construct, id: string, config: DataAkamaiAppsecTuningRecommendationsConfig) {
    super(scope, id, {
      terraformResourceType: 'akamai_appsec_tuning_recommendations',
      terraformGeneratorMetadata: {
        providerName: 'akamai',
        providerVersion: '9.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._attackGroup = config.attackGroup;
    this._configId = config.configId;
    this._id = config.id;
    this._ruleId = config.ruleId;
    this._rulesetType = config.rulesetType;
    this._securityPolicyId = config.securityPolicyId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attack_group - computed: false, optional: true, required: false
  private _attackGroup?: string; 
  public get attackGroup() {
    return this.getStringAttribute('attack_group');
  }
  public set attackGroup(value: string) {
    this._attackGroup = value;
  }
  public resetAttackGroup() {
    this._attackGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attackGroupInput() {
    return this._attackGroup;
  }

  // config_id - computed: false, optional: false, required: true
  private _configId?: number; 
  public get configId() {
    return this.getNumberAttribute('config_id');
  }
  public set configId(value: number) {
    this._configId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configIdInput() {
    return this._configId;
  }

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

  // json - computed: true, optional: false, required: false
  public get json() {
    return this.getStringAttribute('json');
  }

  // rule_id - computed: false, optional: true, required: false
  private _ruleId?: number; 
  public get ruleId() {
    return this.getNumberAttribute('rule_id');
  }
  public set ruleId(value: number) {
    this._ruleId = value;
  }
  public resetRuleId() {
    this._ruleId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleIdInput() {
    return this._ruleId;
  }

  // ruleset_type - computed: false, optional: true, required: false
  private _rulesetType?: string; 
  public get rulesetType() {
    return this.getStringAttribute('ruleset_type');
  }
  public set rulesetType(value: string) {
    this._rulesetType = value;
  }
  public resetRulesetType() {
    this._rulesetType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesetTypeInput() {
    return this._rulesetType;
  }

  // security_policy_id - computed: false, optional: true, required: false
  private _securityPolicyId?: string; 
  public get securityPolicyId() {
    return this.getStringAttribute('security_policy_id');
  }
  public set securityPolicyId(value: string) {
    this._securityPolicyId = value;
  }
  public resetSecurityPolicyId() {
    this._securityPolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityPolicyIdInput() {
    return this._securityPolicyId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      attack_group: cdktf.stringToTerraform(this._attackGroup),
      config_id: cdktf.numberToTerraform(this._configId),
      id: cdktf.stringToTerraform(this._id),
      rule_id: cdktf.numberToTerraform(this._ruleId),
      ruleset_type: cdktf.stringToTerraform(this._rulesetType),
      security_policy_id: cdktf.stringToTerraform(this._securityPolicyId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      attack_group: {
        value: cdktf.stringToHclTerraform(this._attackGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config_id: {
        value: cdktf.numberToHclTerraform(this._configId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule_id: {
        value: cdktf.numberToHclTerraform(this._ruleId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ruleset_type: {
        value: cdktf.stringToHclTerraform(this._rulesetType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_policy_id: {
        value: cdktf.stringToHclTerraform(this._securityPolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
