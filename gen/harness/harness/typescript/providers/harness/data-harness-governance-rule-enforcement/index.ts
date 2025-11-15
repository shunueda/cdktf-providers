// https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/governance_rule_enforcement
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataHarnessGovernanceRuleEnforcementConfig extends cdktf.TerraformMetaArguments {
  /**
  * Id of rule enforcement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/governance_rule_enforcement#enforcement_id DataHarnessGovernanceRuleEnforcement#enforcement_id}
  */
  readonly enforcementId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/governance_rule_enforcement#id DataHarnessGovernanceRuleEnforcement#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/governance_rule_enforcement harness_governance_rule_enforcement}
*/
export class DataHarnessGovernanceRuleEnforcement extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "harness_governance_rule_enforcement";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataHarnessGovernanceRuleEnforcement resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataHarnessGovernanceRuleEnforcement to import
  * @param importFromId The id of the existing DataHarnessGovernanceRuleEnforcement that should be imported. Refer to the {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/governance_rule_enforcement#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataHarnessGovernanceRuleEnforcement to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "harness_governance_rule_enforcement", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/governance_rule_enforcement harness_governance_rule_enforcement} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataHarnessGovernanceRuleEnforcementConfig
  */
  public constructor(scope: Construct, id: string, config: DataHarnessGovernanceRuleEnforcementConfig) {
    super(scope, id, {
      terraformResourceType: 'harness_governance_rule_enforcement',
      terraformGeneratorMetadata: {
        providerName: 'harness',
        providerVersion: '0.39.2',
        providerVersionConstraint: '0.39.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enforcementId = config.enforcementId;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cloud_provider - computed: true, optional: false, required: false
  public get cloudProvider() {
    return this.getStringAttribute('cloud_provider');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // enforcement_id - computed: false, optional: false, required: true
  private _enforcementId?: string; 
  public get enforcementId() {
    return this.getStringAttribute('enforcement_id');
  }
  public set enforcementId(value: string) {
    this._enforcementId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enforcementIdInput() {
    return this._enforcementId;
  }

  // execution_schedule - computed: true, optional: false, required: false
  public get executionSchedule() {
    return this.getStringAttribute('execution_schedule');
  }

  // execution_timezone - computed: true, optional: false, required: false
  public get executionTimezone() {
    return this.getStringAttribute('execution_timezone');
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

  // is_dry_run - computed: true, optional: false, required: false
  public get isDryRun() {
    return this.getBooleanAttribute('is_dry_run');
  }

  // is_enabled - computed: true, optional: false, required: false
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // rule_ids - computed: true, optional: false, required: false
  private _ruleIds = new cdktf.StringMap(this, "rule_ids");
  public get ruleIds() {
    return this._ruleIds;
  }

  // rule_set_ids - computed: true, optional: false, required: false
  private _ruleSetIds = new cdktf.StringMap(this, "rule_set_ids");
  public get ruleSetIds() {
    return this._ruleSetIds;
  }

  // target_accounts - computed: true, optional: false, required: false
  public get targetAccounts() {
    return this.getListAttribute('target_accounts');
  }

  // target_regions - computed: true, optional: false, required: false
  public get targetRegions() {
    return this.getListAttribute('target_regions');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enforcement_id: cdktf.stringToTerraform(this._enforcementId),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enforcement_id: {
        value: cdktf.stringToHclTerraform(this._enforcementId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
