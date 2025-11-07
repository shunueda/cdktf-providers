// https://registry.terraform.io/providers/rework-space-com/freeipa/5.1.3/docs/resources/hbac_policy_user_membership
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HbacPolicyUserMembershipConfig extends cdktf.TerraformMetaArguments {
  /**
  * **deprecated** User group to add to the HBAC policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.1.3/docs/resources/hbac_policy_user_membership#group HbacPolicyUserMembership#group}
  */
  readonly group?: string;
  /**
  * List of user groups to add to the HBAC policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.1.3/docs/resources/hbac_policy_user_membership#groups HbacPolicyUserMembership#groups}
  */
  readonly groups?: string[];
  /**
  * Unique identifier to differentiate multiple HBAC policy user membership resources on the same HBAC policy. Manadatory for using users/groups configurations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.1.3/docs/resources/hbac_policy_user_membership#identifier HbacPolicyUserMembership#identifier}
  */
  readonly identifier?: string;
  /**
  * HBAC policy name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.1.3/docs/resources/hbac_policy_user_membership#name HbacPolicyUserMembership#name}
  */
  readonly name: string;
  /**
  * **deprecated** User FDQN the policy is applied to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.1.3/docs/resources/hbac_policy_user_membership#user HbacPolicyUserMembership#user}
  */
  readonly user?: string;
  /**
  * List of user FQDNs to add to the HBAC policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.1.3/docs/resources/hbac_policy_user_membership#users HbacPolicyUserMembership#users}
  */
  readonly users?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.1.3/docs/resources/hbac_policy_user_membership freeipa_hbac_policy_user_membership}
*/
export class HbacPolicyUserMembership extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "freeipa_hbac_policy_user_membership";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a HbacPolicyUserMembership resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the HbacPolicyUserMembership to import
  * @param importFromId The id of the existing HbacPolicyUserMembership that should be imported. Refer to the {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.1.3/docs/resources/hbac_policy_user_membership#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the HbacPolicyUserMembership to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "freeipa_hbac_policy_user_membership", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.1.3/docs/resources/hbac_policy_user_membership freeipa_hbac_policy_user_membership} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HbacPolicyUserMembershipConfig
  */
  public constructor(scope: Construct, id: string, config: HbacPolicyUserMembershipConfig) {
    super(scope, id, {
      terraformResourceType: 'freeipa_hbac_policy_user_membership',
      terraformGeneratorMetadata: {
        providerName: 'freeipa',
        providerVersion: '5.1.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._group = config.group;
    this._groups = config.groups;
    this._identifier = config.identifier;
    this._name = config.name;
    this._user = config.user;
    this._users = config.users;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // group - computed: false, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // groups - computed: false, optional: true, required: false
  private _groups?: string[]; 
  public get groups() {
    return this.getListAttribute('groups');
  }
  public set groups(value: string[]) {
    this._groups = value;
  }
  public resetGroups() {
    this._groups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // identifier - computed: false, optional: true, required: false
  private _identifier?: string; 
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  public resetIdentifier() {
    this._identifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
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

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }

  // users - computed: false, optional: true, required: false
  private _users?: string[]; 
  public get users() {
    return this.getListAttribute('users');
  }
  public set users(value: string[]) {
    this._users = value;
  }
  public resetUsers() {
    this._users = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usersInput() {
    return this._users;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      group: cdktf.stringToTerraform(this._group),
      groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._groups),
      identifier: cdktf.stringToTerraform(this._identifier),
      name: cdktf.stringToTerraform(this._name),
      user: cdktf.stringToTerraform(this._user),
      users: cdktf.listMapper(cdktf.stringToTerraform, false)(this._users),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      group: {
        value: cdktf.stringToHclTerraform(this._group),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._groups),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      identifier: {
        value: cdktf.stringToHclTerraform(this._identifier),
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
      user: {
        value: cdktf.stringToHclTerraform(this._user),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      users: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._users),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
