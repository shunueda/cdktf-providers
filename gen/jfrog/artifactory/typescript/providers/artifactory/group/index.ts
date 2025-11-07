// https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Any users added to this group will automatically be assigned with admin privileges in the system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/group#admin_privileges Group#admin_privileges}
  */
  readonly adminPrivileges?: boolean | cdktf.IResolvable;
  /**
  * When this parameter is set, any new users defined in the system are automatically assigned to this group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/group#auto_join Group#auto_join}
  */
  readonly autoJoin?: boolean | cdktf.IResolvable;
  /**
  * A description for the group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/group#description Group#description}
  */
  readonly description?: string;
  /**
  * When this is set to `true`, an empty or missing usernames array will detach all users from the group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/group#detach_all_users Group#detach_all_users}
  */
  readonly detachAllUsers?: boolean | cdktf.IResolvable;
  /**
  * New external group ID used to configure the corresponding group in Azure AD.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/group#external_id Group#external_id}
  */
  readonly externalId?: string;
  /**
  * Name of the group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/group#name Group#name}
  */
  readonly name: string;
  /**
  * When this override is set, User in the group can set Xray security and compliance policies. Default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/group#policy_manager Group#policy_manager}
  */
  readonly policyManager?: boolean | cdktf.IResolvable;
  /**
  * The realm for the group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/group#realm Group#realm}
  */
  readonly realm?: string;
  /**
  * The realm attributes for the group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/group#realm_attributes Group#realm_attributes}
  */
  readonly realmAttributes?: string;
  /**
  * When this override is set, User in the group can manage Xray Reports on any resource type. Default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/group#reports_manager Group#reports_manager}
  */
  readonly reportsManager?: boolean | cdktf.IResolvable;
  /**
  * List of users assigned to the group. If not set or empty, Terraform will not manage group membership.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/group#users_names Group#users_names}
  */
  readonly usersNames?: string[];
  /**
  * When this override is set, User in the group can manage Xray Watches on any resource type. Default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/group#watch_manager Group#watch_manager}
  */
  readonly watchManager?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/group artifactory_group}
*/
export class Group extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "artifactory_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Group resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Group to import
  * @param importFromId The id of the existing Group that should be imported. Refer to the {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Group to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "artifactory_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/group artifactory_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GroupConfig
  */
  public constructor(scope: Construct, id: string, config: GroupConfig) {
    super(scope, id, {
      terraformResourceType: 'artifactory_group',
      terraformGeneratorMetadata: {
        providerName: 'artifactory',
        providerVersion: '12.10.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adminPrivileges = config.adminPrivileges;
    this._autoJoin = config.autoJoin;
    this._description = config.description;
    this._detachAllUsers = config.detachAllUsers;
    this._externalId = config.externalId;
    this._name = config.name;
    this._policyManager = config.policyManager;
    this._realm = config.realm;
    this._realmAttributes = config.realmAttributes;
    this._reportsManager = config.reportsManager;
    this._usersNames = config.usersNames;
    this._watchManager = config.watchManager;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_privileges - computed: true, optional: true, required: false
  private _adminPrivileges?: boolean | cdktf.IResolvable; 
  public get adminPrivileges() {
    return this.getBooleanAttribute('admin_privileges');
  }
  public set adminPrivileges(value: boolean | cdktf.IResolvable) {
    this._adminPrivileges = value;
  }
  public resetAdminPrivileges() {
    this._adminPrivileges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminPrivilegesInput() {
    return this._adminPrivileges;
  }

  // auto_join - computed: true, optional: true, required: false
  private _autoJoin?: boolean | cdktf.IResolvable; 
  public get autoJoin() {
    return this.getBooleanAttribute('auto_join');
  }
  public set autoJoin(value: boolean | cdktf.IResolvable) {
    this._autoJoin = value;
  }
  public resetAutoJoin() {
    this._autoJoin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoJoinInput() {
    return this._autoJoin;
  }

  // description - computed: true, optional: true, required: false
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

  // detach_all_users - computed: false, optional: true, required: false
  private _detachAllUsers?: boolean | cdktf.IResolvable; 
  public get detachAllUsers() {
    return this.getBooleanAttribute('detach_all_users');
  }
  public set detachAllUsers(value: boolean | cdktf.IResolvable) {
    this._detachAllUsers = value;
  }
  public resetDetachAllUsers() {
    this._detachAllUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detachAllUsersInput() {
    return this._detachAllUsers;
  }

  // external_id - computed: true, optional: true, required: false
  private _externalId?: string; 
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
  public set externalId(value: string) {
    this._externalId = value;
  }
  public resetExternalId() {
    this._externalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId;
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

  // policy_manager - computed: true, optional: true, required: false
  private _policyManager?: boolean | cdktf.IResolvable; 
  public get policyManager() {
    return this.getBooleanAttribute('policy_manager');
  }
  public set policyManager(value: boolean | cdktf.IResolvable) {
    this._policyManager = value;
  }
  public resetPolicyManager() {
    this._policyManager = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyManagerInput() {
    return this._policyManager;
  }

  // realm - computed: true, optional: true, required: false
  private _realm?: string; 
  public get realm() {
    return this.getStringAttribute('realm');
  }
  public set realm(value: string) {
    this._realm = value;
  }
  public resetRealm() {
    this._realm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get realmInput() {
    return this._realm;
  }

  // realm_attributes - computed: true, optional: true, required: false
  private _realmAttributes?: string; 
  public get realmAttributes() {
    return this.getStringAttribute('realm_attributes');
  }
  public set realmAttributes(value: string) {
    this._realmAttributes = value;
  }
  public resetRealmAttributes() {
    this._realmAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get realmAttributesInput() {
    return this._realmAttributes;
  }

  // reports_manager - computed: true, optional: true, required: false
  private _reportsManager?: boolean | cdktf.IResolvable; 
  public get reportsManager() {
    return this.getBooleanAttribute('reports_manager');
  }
  public set reportsManager(value: boolean | cdktf.IResolvable) {
    this._reportsManager = value;
  }
  public resetReportsManager() {
    this._reportsManager = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reportsManagerInput() {
    return this._reportsManager;
  }

  // users_names - computed: true, optional: true, required: false
  private _usersNames?: string[]; 
  public get usersNames() {
    return cdktf.Fn.tolist(this.getListAttribute('users_names'));
  }
  public set usersNames(value: string[]) {
    this._usersNames = value;
  }
  public resetUsersNames() {
    this._usersNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usersNamesInput() {
    return this._usersNames;
  }

  // watch_manager - computed: true, optional: true, required: false
  private _watchManager?: boolean | cdktf.IResolvable; 
  public get watchManager() {
    return this.getBooleanAttribute('watch_manager');
  }
  public set watchManager(value: boolean | cdktf.IResolvable) {
    this._watchManager = value;
  }
  public resetWatchManager() {
    this._watchManager = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get watchManagerInput() {
    return this._watchManager;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      admin_privileges: cdktf.booleanToTerraform(this._adminPrivileges),
      auto_join: cdktf.booleanToTerraform(this._autoJoin),
      description: cdktf.stringToTerraform(this._description),
      detach_all_users: cdktf.booleanToTerraform(this._detachAllUsers),
      external_id: cdktf.stringToTerraform(this._externalId),
      name: cdktf.stringToTerraform(this._name),
      policy_manager: cdktf.booleanToTerraform(this._policyManager),
      realm: cdktf.stringToTerraform(this._realm),
      realm_attributes: cdktf.stringToTerraform(this._realmAttributes),
      reports_manager: cdktf.booleanToTerraform(this._reportsManager),
      users_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._usersNames),
      watch_manager: cdktf.booleanToTerraform(this._watchManager),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      admin_privileges: {
        value: cdktf.booleanToHclTerraform(this._adminPrivileges),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_join: {
        value: cdktf.booleanToHclTerraform(this._autoJoin),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      detach_all_users: {
        value: cdktf.booleanToHclTerraform(this._detachAllUsers),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      external_id: {
        value: cdktf.stringToHclTerraform(this._externalId),
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
      policy_manager: {
        value: cdktf.booleanToHclTerraform(this._policyManager),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      realm: {
        value: cdktf.stringToHclTerraform(this._realm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      realm_attributes: {
        value: cdktf.stringToHclTerraform(this._realmAttributes),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reports_manager: {
        value: cdktf.booleanToHclTerraform(this._reportsManager),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      users_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._usersNames),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      watch_manager: {
        value: cdktf.booleanToHclTerraform(this._watchManager),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
