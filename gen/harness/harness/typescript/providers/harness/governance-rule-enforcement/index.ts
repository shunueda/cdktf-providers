// https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/governance_rule_enforcement
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GovernanceRuleEnforcementConfig extends cdktf.TerraformMetaArguments {
  /**
  * The cloud provider for the rule enforcement. It should be either AWS, AZURE or GCP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/governance_rule_enforcement#cloud_provider GovernanceRuleEnforcement#cloud_provider}
  */
  readonly cloudProvider: string;
  /**
  * Description for rule enforcement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/governance_rule_enforcement#description GovernanceRuleEnforcement#description}
  */
  readonly description?: string;
  /**
  * Execution schedule in cron format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/governance_rule_enforcement#execution_schedule GovernanceRuleEnforcement#execution_schedule}
  */
  readonly executionSchedule: string;
  /**
  * Timezone for the execution schedule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/governance_rule_enforcement#execution_timezone GovernanceRuleEnforcement#execution_timezone}
  */
  readonly executionTimezone: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/governance_rule_enforcement#id GovernanceRuleEnforcement#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Indicates if the rule enforcement is a dry run. This by default is set to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/governance_rule_enforcement#is_dry_run GovernanceRuleEnforcement#is_dry_run}
  */
  readonly isDryRun?: boolean | cdktf.IResolvable;
  /**
  * Indicates if the rule enforcement is enabled. This by default is set to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/governance_rule_enforcement#is_enabled GovernanceRuleEnforcement#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * Name of the rule enforcement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/governance_rule_enforcement#name GovernanceRuleEnforcement#name}
  */
  readonly name: string;
  /**
  * List of rule IDs. Either rule_ids or rule_set_ids should be provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/governance_rule_enforcement#rule_ids GovernanceRuleEnforcement#rule_ids}
  */
  readonly ruleIds?: string[];
  /**
  * List of rule set IDs. Either rule_ids or rule_set_ids should be provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/governance_rule_enforcement#rule_set_ids GovernanceRuleEnforcement#rule_set_ids}
  */
  readonly ruleSetIds?: string[];
  /**
  * List of target account which can be either AWS Account Ids or Azure Subscription Ids or Gcp Project Ids.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/governance_rule_enforcement#target_accounts GovernanceRuleEnforcement#target_accounts}
  */
  readonly targetAccounts: string[];
  /**
  * List of target regions. For GCP it should be left empty but is required in case of AWS or Azure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/governance_rule_enforcement#target_regions GovernanceRuleEnforcement#target_regions}
  */
  readonly targetRegions?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/governance_rule_enforcement harness_governance_rule_enforcement}
*/
export class GovernanceRuleEnforcement extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "harness_governance_rule_enforcement";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GovernanceRuleEnforcement resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GovernanceRuleEnforcement to import
  * @param importFromId The id of the existing GovernanceRuleEnforcement that should be imported. Refer to the {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/governance_rule_enforcement#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GovernanceRuleEnforcement to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "harness_governance_rule_enforcement", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/governance_rule_enforcement harness_governance_rule_enforcement} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GovernanceRuleEnforcementConfig
  */
  public constructor(scope: Construct, id: string, config: GovernanceRuleEnforcementConfig) {
    super(scope, id, {
      terraformResourceType: 'harness_governance_rule_enforcement',
      terraformGeneratorMetadata: {
        providerName: 'harness',
        providerVersion: '0.39.3',
        providerVersionConstraint: '0.39.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cloudProvider = config.cloudProvider;
    this._description = config.description;
    this._executionSchedule = config.executionSchedule;
    this._executionTimezone = config.executionTimezone;
    this._id = config.id;
    this._isDryRun = config.isDryRun;
    this._isEnabled = config.isEnabled;
    this._name = config.name;
    this._ruleIds = config.ruleIds;
    this._ruleSetIds = config.ruleSetIds;
    this._targetAccounts = config.targetAccounts;
    this._targetRegions = config.targetRegions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cloud_provider - computed: false, optional: false, required: true
  private _cloudProvider?: string; 
  public get cloudProvider() {
    return this.getStringAttribute('cloud_provider');
  }
  public set cloudProvider(value: string) {
    this._cloudProvider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudProviderInput() {
    return this._cloudProvider;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // enforcement_id - computed: true, optional: false, required: false
  public get enforcementId() {
    return this.getStringAttribute('enforcement_id');
  }

  // execution_schedule - computed: false, optional: false, required: true
  private _executionSchedule?: string; 
  public get executionSchedule() {
    return this.getStringAttribute('execution_schedule');
  }
  public set executionSchedule(value: string) {
    this._executionSchedule = value;
  }
  // Temporarily expose input value. Use with caution.
  public get executionScheduleInput() {
    return this._executionSchedule;
  }

  // execution_timezone - computed: false, optional: false, required: true
  private _executionTimezone?: string; 
  public get executionTimezone() {
    return this.getStringAttribute('execution_timezone');
  }
  public set executionTimezone(value: string) {
    this._executionTimezone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get executionTimezoneInput() {
    return this._executionTimezone;
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

  // is_dry_run - computed: false, optional: true, required: false
  private _isDryRun?: boolean | cdktf.IResolvable; 
  public get isDryRun() {
    return this.getBooleanAttribute('is_dry_run');
  }
  public set isDryRun(value: boolean | cdktf.IResolvable) {
    this._isDryRun = value;
  }
  public resetIsDryRun() {
    this._isDryRun = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDryRunInput() {
    return this._isDryRun;
  }

  // is_enabled - computed: false, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
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

  // rule_ids - computed: false, optional: true, required: false
  private _ruleIds?: string[]; 
  public get ruleIds() {
    return this.getListAttribute('rule_ids');
  }
  public set ruleIds(value: string[]) {
    this._ruleIds = value;
  }
  public resetRuleIds() {
    this._ruleIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleIdsInput() {
    return this._ruleIds;
  }

  // rule_set_ids - computed: false, optional: true, required: false
  private _ruleSetIds?: string[]; 
  public get ruleSetIds() {
    return this.getListAttribute('rule_set_ids');
  }
  public set ruleSetIds(value: string[]) {
    this._ruleSetIds = value;
  }
  public resetRuleSetIds() {
    this._ruleSetIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleSetIdsInput() {
    return this._ruleSetIds;
  }

  // target_accounts - computed: false, optional: false, required: true
  private _targetAccounts?: string[]; 
  public get targetAccounts() {
    return this.getListAttribute('target_accounts');
  }
  public set targetAccounts(value: string[]) {
    this._targetAccounts = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetAccountsInput() {
    return this._targetAccounts;
  }

  // target_regions - computed: false, optional: true, required: false
  private _targetRegions?: string[]; 
  public get targetRegions() {
    return this.getListAttribute('target_regions');
  }
  public set targetRegions(value: string[]) {
    this._targetRegions = value;
  }
  public resetTargetRegions() {
    this._targetRegions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetRegionsInput() {
    return this._targetRegions;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cloud_provider: cdktf.stringToTerraform(this._cloudProvider),
      description: cdktf.stringToTerraform(this._description),
      execution_schedule: cdktf.stringToTerraform(this._executionSchedule),
      execution_timezone: cdktf.stringToTerraform(this._executionTimezone),
      id: cdktf.stringToTerraform(this._id),
      is_dry_run: cdktf.booleanToTerraform(this._isDryRun),
      is_enabled: cdktf.booleanToTerraform(this._isEnabled),
      name: cdktf.stringToTerraform(this._name),
      rule_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ruleIds),
      rule_set_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ruleSetIds),
      target_accounts: cdktf.listMapper(cdktf.stringToTerraform, false)(this._targetAccounts),
      target_regions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._targetRegions),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cloud_provider: {
        value: cdktf.stringToHclTerraform(this._cloudProvider),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      execution_schedule: {
        value: cdktf.stringToHclTerraform(this._executionSchedule),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      execution_timezone: {
        value: cdktf.stringToHclTerraform(this._executionTimezone),
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
      is_dry_run: {
        value: cdktf.booleanToHclTerraform(this._isDryRun),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_enabled: {
        value: cdktf.booleanToHclTerraform(this._isEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ruleIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      rule_set_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ruleSetIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      target_accounts: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._targetAccounts),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      target_regions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._targetRegions),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
