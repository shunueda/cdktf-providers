// https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/group_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GroupRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * The expression type to use to invoke the rule. The default is `urn:okta:expression:1.0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/group_rule#expression_type GroupRule#expression_type}
  */
  readonly expressionType?: string;
  /**
  * The expression value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/group_rule#expression_value GroupRule#expression_value}
  */
  readonly expressionValue: string;
  /**
  * The list of group ids to assign the users to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/group_rule#group_assignments GroupRule#group_assignments}
  */
  readonly groupAssignments: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/group_rule#id GroupRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the Group Rule (min character 1; max characters 50).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/group_rule#name GroupRule#name}
  */
  readonly name: string;
  /**
  * Remove users added by this rule from the assigned group after deleting this resource. Default is `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/group_rule#remove_assigned_users GroupRule#remove_assigned_users}
  */
  readonly removeAssignedUsers?: boolean | cdktf.IResolvable;
  /**
  * Default to `ACTIVE`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/group_rule#status GroupRule#status}
  */
  readonly status?: string;
  /**
  * The list of user IDs that would be excluded when rules are processed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/group_rule#users_excluded GroupRule#users_excluded}
  */
  readonly usersExcluded?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/group_rule okta_group_rule}
*/
export class GroupRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "okta_group_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GroupRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GroupRule to import
  * @param importFromId The id of the existing GroupRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/group_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GroupRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "okta_group_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/group_rule okta_group_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GroupRuleConfig
  */
  public constructor(scope: Construct, id: string, config: GroupRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'okta_group_rule',
      terraformGeneratorMetadata: {
        providerName: 'okta',
        providerVersion: '6.5.2',
        providerVersionConstraint: '6.5.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._expressionType = config.expressionType;
    this._expressionValue = config.expressionValue;
    this._groupAssignments = config.groupAssignments;
    this._id = config.id;
    this._name = config.name;
    this._removeAssignedUsers = config.removeAssignedUsers;
    this._status = config.status;
    this._usersExcluded = config.usersExcluded;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // expression_type - computed: false, optional: true, required: false
  private _expressionType?: string; 
  public get expressionType() {
    return this.getStringAttribute('expression_type');
  }
  public set expressionType(value: string) {
    this._expressionType = value;
  }
  public resetExpressionType() {
    this._expressionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionTypeInput() {
    return this._expressionType;
  }

  // expression_value - computed: false, optional: false, required: true
  private _expressionValue?: string; 
  public get expressionValue() {
    return this.getStringAttribute('expression_value');
  }
  public set expressionValue(value: string) {
    this._expressionValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionValueInput() {
    return this._expressionValue;
  }

  // group_assignments - computed: false, optional: false, required: true
  private _groupAssignments?: string[]; 
  public get groupAssignments() {
    return cdktf.Fn.tolist(this.getListAttribute('group_assignments'));
  }
  public set groupAssignments(value: string[]) {
    this._groupAssignments = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupAssignmentsInput() {
    return this._groupAssignments;
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

  // remove_assigned_users - computed: false, optional: true, required: false
  private _removeAssignedUsers?: boolean | cdktf.IResolvable; 
  public get removeAssignedUsers() {
    return this.getBooleanAttribute('remove_assigned_users');
  }
  public set removeAssignedUsers(value: boolean | cdktf.IResolvable) {
    this._removeAssignedUsers = value;
  }
  public resetRemoveAssignedUsers() {
    this._removeAssignedUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeAssignedUsersInput() {
    return this._removeAssignedUsers;
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
      expression_type: cdktf.stringToTerraform(this._expressionType),
      expression_value: cdktf.stringToTerraform(this._expressionValue),
      group_assignments: cdktf.listMapper(cdktf.stringToTerraform, false)(this._groupAssignments),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      remove_assigned_users: cdktf.booleanToTerraform(this._removeAssignedUsers),
      status: cdktf.stringToTerraform(this._status),
      users_excluded: cdktf.listMapper(cdktf.stringToTerraform, false)(this._usersExcluded),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      expression_type: {
        value: cdktf.stringToHclTerraform(this._expressionType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      expression_value: {
        value: cdktf.stringToHclTerraform(this._expressionValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_assignments: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._groupAssignments),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
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
      remove_assigned_users: {
        value: cdktf.booleanToHclTerraform(this._removeAssignedUsers),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
