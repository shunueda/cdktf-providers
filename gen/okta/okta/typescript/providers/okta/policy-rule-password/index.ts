// https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/policy_rule_password
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicyRulePasswordConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/policy_rule_password#id PolicyRulePassword#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Policy Rule Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/policy_rule_password#name PolicyRulePassword#name}
  */
  readonly name: string;
  /**
  * Network selection mode: `ANYWHERE`, `ZONE`, `ON_NETWORK`, or `OFF_NETWORK`. Default: `ANYWHERE`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/policy_rule_password#network_connection PolicyRulePassword#network_connection}
  */
  readonly networkConnection?: string;
  /**
  * Required if `network_connection` = `ZONE`. Indicates the network zones to exclude.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/policy_rule_password#network_excludes PolicyRulePassword#network_excludes}
  */
  readonly networkExcludes?: string[];
  /**
  * Required if `network_connection` = `ZONE`. Indicates the network zones to include.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/policy_rule_password#network_includes PolicyRulePassword#network_includes}
  */
  readonly networkIncludes?: string[];
  /**
  * Allow or deny a user to change their password: `ALLOW` or `DENY`. Default: `ALLOW`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/policy_rule_password#password_change PolicyRulePassword#password_change}
  */
  readonly passwordChange?: string;
  /**
  * Allow or deny a user to reset their password: `ALLOW` or `DENY`. Default: `ALLOW`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/policy_rule_password#password_reset PolicyRulePassword#password_reset}
  */
  readonly passwordReset?: string;
  /**
  * Allow or deny a user to unlock. Default: `DENY`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/policy_rule_password#password_unlock PolicyRulePassword#password_unlock}
  */
  readonly passwordUnlock?: string;
  /**
  * Policy ID of the Rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/policy_rule_password#policy_id PolicyRulePassword#policy_id}
  */
  readonly policyId?: string;
  /**
  * Rule priority. This attribute can be set to a valid priority. To avoid an endless diff situation an error is thrown if an invalid property is provided. The Okta API defaults to the last (lowest) if not provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/policy_rule_password#priority PolicyRulePassword#priority}
  */
  readonly priority?: number;
  /**
  * Policy Rule Status: `ACTIVE` or `INACTIVE`. Default: `ACTIVE`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/policy_rule_password#status PolicyRulePassword#status}
  */
  readonly status?: string;
  /**
  * Set of User IDs to Exclude
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/policy_rule_password#users_excluded PolicyRulePassword#users_excluded}
  */
  readonly usersExcluded?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/policy_rule_password okta_policy_rule_password}
*/
export class PolicyRulePassword extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "okta_policy_rule_password";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PolicyRulePassword resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PolicyRulePassword to import
  * @param importFromId The id of the existing PolicyRulePassword that should be imported. Refer to the {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/policy_rule_password#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PolicyRulePassword to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "okta_policy_rule_password", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/policy_rule_password okta_policy_rule_password} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicyRulePasswordConfig
  */
  public constructor(scope: Construct, id: string, config: PolicyRulePasswordConfig) {
    super(scope, id, {
      terraformResourceType: 'okta_policy_rule_password',
      terraformGeneratorMetadata: {
        providerName: 'okta',
        providerVersion: '6.5.1',
        providerVersionConstraint: '6.5.1'
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
    this._networkConnection = config.networkConnection;
    this._networkExcludes = config.networkExcludes;
    this._networkIncludes = config.networkIncludes;
    this._passwordChange = config.passwordChange;
    this._passwordReset = config.passwordReset;
    this._passwordUnlock = config.passwordUnlock;
    this._policyId = config.policyId;
    this._priority = config.priority;
    this._status = config.status;
    this._usersExcluded = config.usersExcluded;
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

  // network_connection - computed: false, optional: true, required: false
  private _networkConnection?: string; 
  public get networkConnection() {
    return this.getStringAttribute('network_connection');
  }
  public set networkConnection(value: string) {
    this._networkConnection = value;
  }
  public resetNetworkConnection() {
    this._networkConnection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkConnectionInput() {
    return this._networkConnection;
  }

  // network_excludes - computed: false, optional: true, required: false
  private _networkExcludes?: string[]; 
  public get networkExcludes() {
    return this.getListAttribute('network_excludes');
  }
  public set networkExcludes(value: string[]) {
    this._networkExcludes = value;
  }
  public resetNetworkExcludes() {
    this._networkExcludes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkExcludesInput() {
    return this._networkExcludes;
  }

  // network_includes - computed: false, optional: true, required: false
  private _networkIncludes?: string[]; 
  public get networkIncludes() {
    return this.getListAttribute('network_includes');
  }
  public set networkIncludes(value: string[]) {
    this._networkIncludes = value;
  }
  public resetNetworkIncludes() {
    this._networkIncludes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIncludesInput() {
    return this._networkIncludes;
  }

  // password_change - computed: false, optional: true, required: false
  private _passwordChange?: string; 
  public get passwordChange() {
    return this.getStringAttribute('password_change');
  }
  public set passwordChange(value: string) {
    this._passwordChange = value;
  }
  public resetPasswordChange() {
    this._passwordChange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordChangeInput() {
    return this._passwordChange;
  }

  // password_reset - computed: false, optional: true, required: false
  private _passwordReset?: string; 
  public get passwordReset() {
    return this.getStringAttribute('password_reset');
  }
  public set passwordReset(value: string) {
    this._passwordReset = value;
  }
  public resetPasswordReset() {
    this._passwordReset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordResetInput() {
    return this._passwordReset;
  }

  // password_unlock - computed: false, optional: true, required: false
  private _passwordUnlock?: string; 
  public get passwordUnlock() {
    return this.getStringAttribute('password_unlock');
  }
  public set passwordUnlock(value: string) {
    this._passwordUnlock = value;
  }
  public resetPasswordUnlock() {
    this._passwordUnlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordUnlockInput() {
    return this._passwordUnlock;
  }

  // policy_id - computed: false, optional: true, required: false
  private _policyId?: string; 
  public get policyId() {
    return this.getStringAttribute('policy_id');
  }
  public set policyId(value: string) {
    this._policyId = value;
  }
  public resetPolicyId() {
    this._policyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyIdInput() {
    return this._policyId;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // users_excluded - computed: false, optional: true, required: false
  private _usersExcluded?: string[]; 
  public get usersExcluded() {
    return cdktf.Fn.tolist(this.getListAttribute('users_excluded'));
  }
  public set usersExcluded(value: string[]) {
    this._usersExcluded = value;
  }
  public resetUsersExcluded() {
    this._usersExcluded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usersExcludedInput() {
    return this._usersExcluded;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      network_connection: cdktf.stringToTerraform(this._networkConnection),
      network_excludes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._networkExcludes),
      network_includes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._networkIncludes),
      password_change: cdktf.stringToTerraform(this._passwordChange),
      password_reset: cdktf.stringToTerraform(this._passwordReset),
      password_unlock: cdktf.stringToTerraform(this._passwordUnlock),
      policy_id: cdktf.stringToTerraform(this._policyId),
      priority: cdktf.numberToTerraform(this._priority),
      status: cdktf.stringToTerraform(this._status),
      users_excluded: cdktf.listMapper(cdktf.stringToTerraform, false)(this._usersExcluded),
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
      network_connection: {
        value: cdktf.stringToHclTerraform(this._networkConnection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_excludes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._networkExcludes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      network_includes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._networkIncludes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      password_change: {
        value: cdktf.stringToHclTerraform(this._passwordChange),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password_reset: {
        value: cdktf.stringToHclTerraform(this._passwordReset),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password_unlock: {
        value: cdktf.stringToHclTerraform(this._passwordUnlock),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_id: {
        value: cdktf.stringToHclTerraform(this._policyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      users_excluded: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._usersExcluded),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
