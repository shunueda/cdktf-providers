// https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/data-sources/group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataArtifactoryGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/data-sources/group#admin_privileges DataArtifactoryGroup#admin_privileges}
  */
  readonly adminPrivileges?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/data-sources/group#auto_join DataArtifactoryGroup#auto_join}
  */
  readonly autoJoin?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/data-sources/group#description DataArtifactoryGroup#description}
  */
  readonly description?: string;
  /**
  * New external group ID used to configure the corresponding group in Azure AD.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/data-sources/group#external_id DataArtifactoryGroup#external_id}
  */
  readonly externalId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/data-sources/group#id DataArtifactoryGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Setting includeUsers to true will return the group with its associated user list attached.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/data-sources/group#include_users DataArtifactoryGroup#include_users}
  */
  readonly includeUsers?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/data-sources/group#name DataArtifactoryGroup#name}
  */
  readonly name: string;
  /**
  * When this override is set,  User in the group can set Xray security and compliance policies. Default value is 'false'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/data-sources/group#policy_manager DataArtifactoryGroup#policy_manager}
  */
  readonly policyManager?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/data-sources/group#realm DataArtifactoryGroup#realm}
  */
  readonly realm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/data-sources/group#realm_attributes DataArtifactoryGroup#realm_attributes}
  */
  readonly realmAttributes?: string;
  /**
  * When this override is set,  User in the group can manage Xray Reports. Default value is 'false'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/data-sources/group#reports_manager DataArtifactoryGroup#reports_manager}
  */
  readonly reportsManager?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/data-sources/group#users_names DataArtifactoryGroup#users_names}
  */
  readonly usersNames?: string[];
  /**
  * When this override is set,  User in the group can manage Xray Watches on any resource type. Default value is 'false'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/data-sources/group#watch_manager DataArtifactoryGroup#watch_manager}
  */
  readonly watchManager?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/data-sources/group artifactory_group}
*/
export class DataArtifactoryGroup extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "artifactory_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataArtifactoryGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataArtifactoryGroup to import
  * @param importFromId The id of the existing DataArtifactoryGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/data-sources/group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataArtifactoryGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "artifactory_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/data-sources/group artifactory_group} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataArtifactoryGroupConfig
  */
  public constructor(scope: Construct, id: string, config: DataArtifactoryGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'artifactory_group',
      terraformGeneratorMetadata: {
        providerName: 'artifactory',
        providerVersion: '12.11.1',
        providerVersionConstraint: '12.11.1'
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
    this._externalId = config.externalId;
    this._id = config.id;
    this._includeUsers = config.includeUsers;
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

  // external_id - computed: false, optional: true, required: false
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

  // include_users - computed: false, optional: true, required: false
  private _includeUsers?: string; 
  public get includeUsers() {
    return this.getStringAttribute('include_users');
  }
  public set includeUsers(value: string) {
    this._includeUsers = value;
  }
  public resetIncludeUsers() {
    this._includeUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeUsersInput() {
    return this._includeUsers;
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

  // policy_manager - computed: false, optional: true, required: false
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

  // realm_attributes - computed: false, optional: true, required: false
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

  // reports_manager - computed: false, optional: true, required: false
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

  // users_names - computed: false, optional: true, required: false
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

  // watch_manager - computed: false, optional: true, required: false
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
      external_id: cdktf.stringToTerraform(this._externalId),
      id: cdktf.stringToTerraform(this._id),
      include_users: cdktf.stringToTerraform(this._includeUsers),
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
      external_id: {
        value: cdktf.stringToHclTerraform(this._externalId),
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
      include_users: {
        value: cdktf.stringToHclTerraform(this._includeUsers),
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
