// https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/policy_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicyRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * The policy rule ID before which this policy rule should be inserted. Each policy rule must have a unique before_rule_id. If the same before_rule_id is set for more than one policy rule, then only one will have that before_rule_id. The other rules will have a different before_rule_id assigned to them automatically. An empty value will set the rule to have lowest priority.
  * 	- NOTE: In the Global Organizational Unit, rules can also be prioritized against two virtual rules maintained by the system: `asset-level-rule` and `child-ou-rule`. `asset-level-rule` corresponds to the priority of Direct Assignments (when a policy is applied directly to an asset) whereas `child-ou-rule` corresponds to the priority of rules created by child organizational units.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/policy_rule#before_rule_id PolicyRule#before_rule_id}
  */
  readonly beforeRuleId: string;
  /**
  * The condition of the policy rule. Possible conditions include:
  * 	1) `entity_type` is required and supports `$eq` and `$in` filters. `entity_type` must be one of `aws_rds_instance`, `aws_ebs_volume`, `aws_ec2_instance`, `aws_dynamodb_table` or `aws_rds_cluster`.
  * 	2) `aws_account_native_id` and `aws_region` are optional and both support `$eq` and `$in` filters.
  * 	3) `aws_tag` is optional and supports `$eq`, `$in`, `$all`, and `$contains` filters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/policy_rule#condition PolicyRule#condition}
  */
  readonly condition: string;
  /**
  * The name of the policy rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/policy_rule#name PolicyRule#name}
  */
  readonly name: string;
  /**
  * The Clumio-assigned ID of the policy. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/policy_rule#policy_id PolicyRule#policy_id}
  */
  readonly policyId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/policy_rule clumio_policy_rule}
*/
export class PolicyRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "clumio_policy_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PolicyRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PolicyRule to import
  * @param importFromId The id of the existing PolicyRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/policy_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PolicyRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "clumio_policy_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/policy_rule clumio_policy_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicyRuleConfig
  */
  public constructor(scope: Construct, id: string, config: PolicyRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'clumio_policy_rule',
      terraformGeneratorMetadata: {
        providerName: 'clumio',
        providerVersion: '0.17.0',
        providerVersionConstraint: '0.17.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._beforeRuleId = config.beforeRuleId;
    this._condition = config.condition;
    this._name = config.name;
    this._policyId = config.policyId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // before_rule_id - computed: false, optional: false, required: true
  private _beforeRuleId?: string; 
  public get beforeRuleId() {
    return this.getStringAttribute('before_rule_id');
  }
  public set beforeRuleId(value: string) {
    this._beforeRuleId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get beforeRuleIdInput() {
    return this._beforeRuleId;
  }

  // condition - computed: false, optional: false, required: true
  private _condition?: string; 
  public get condition() {
    return this.getStringAttribute('condition');
  }
  public set condition(value: string) {
    this._condition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // policy_id - computed: false, optional: false, required: true
  private _policyId?: string; 
  public get policyId() {
    return this.getStringAttribute('policy_id');
  }
  public set policyId(value: string) {
    this._policyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyIdInput() {
    return this._policyId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      before_rule_id: cdktf.stringToTerraform(this._beforeRuleId),
      condition: cdktf.stringToTerraform(this._condition),
      name: cdktf.stringToTerraform(this._name),
      policy_id: cdktf.stringToTerraform(this._policyId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      before_rule_id: {
        value: cdktf.stringToHclTerraform(this._beforeRuleId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      condition: {
        value: cdktf.stringToHclTerraform(this._condition),
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
      policy_id: {
        value: cdktf.stringToHclTerraform(this._policyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
