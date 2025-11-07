// https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataKeeperUserConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enterprise User ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/user#enterprise_user_id DataKeeperUser#enterprise_user_id}
  */
  readonly enterpriseUserId?: number;
  /**
  * Include user roles
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/user#include_roles DataKeeperUser#include_roles}
  */
  readonly includeRoles?: boolean | cdktf.IResolvable;
  /**
  * Include user teams
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/user#include_teams DataKeeperUser#include_teams}
  */
  readonly includeTeams?: boolean | cdktf.IResolvable;
  /**
  * User email
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/user#username DataKeeperUser#username}
  */
  readonly username?: string;
}
export interface DataKeeperUserRoles {
}

export function dataKeeperUserRolesToTerraform(struct?: DataKeeperUserRoles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeeperUserRolesToHclTerraform(struct?: DataKeeperUserRoles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeeperUserRolesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKeeperUserRoles | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeeperUserRoles | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_admin - computed: true, optional: false, required: false
  public get isAdmin() {
    return this.getBooleanAttribute('is_admin');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // node_id - computed: true, optional: false, required: false
  public get nodeId() {
    return this.getNumberAttribute('node_id');
  }

  // role_id - computed: true, optional: false, required: false
  public get roleId() {
    return this.getNumberAttribute('role_id');
  }
}

export class DataKeeperUserRolesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKeeperUserRolesOutputReference {
    return new DataKeeperUserRolesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKeeperUserTeams {
}

export function dataKeeperUserTeamsToTerraform(struct?: DataKeeperUserTeams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeeperUserTeamsToHclTerraform(struct?: DataKeeperUserTeams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeeperUserTeamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKeeperUserTeams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeeperUserTeams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // team_uid - computed: true, optional: false, required: false
  public get teamUid() {
    return this.getStringAttribute('team_uid');
  }
}

export class DataKeeperUserTeamsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKeeperUserTeamsOutputReference {
    return new DataKeeperUserTeamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/user keeper_user}
*/
export class DataKeeperUser extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "keeper_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataKeeperUser resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataKeeperUser to import
  * @param importFromId The id of the existing DataKeeperUser that should be imported. Refer to the {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataKeeperUser to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "keeper_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/user keeper_user} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataKeeperUserConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataKeeperUserConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'keeper_user',
      terraformGeneratorMetadata: {
        providerName: 'keeper',
        providerVersion: '1.2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enterpriseUserId = config.enterpriseUserId;
    this._includeRoles = config.includeRoles;
    this._includeTeams = config.includeTeams;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_share_expiration - computed: true, optional: false, required: false
  public get accountShareExpiration() {
    return this.getNumberAttribute('account_share_expiration');
  }

  // enterprise_user_id - computed: true, optional: true, required: false
  private _enterpriseUserId?: number; 
  public get enterpriseUserId() {
    return this.getNumberAttribute('enterprise_user_id');
  }
  public set enterpriseUserId(value: number) {
    this._enterpriseUserId = value;
  }
  public resetEnterpriseUserId() {
    this._enterpriseUserId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enterpriseUserIdInput() {
    return this._enterpriseUserId;
  }

  // full_name - computed: true, optional: false, required: false
  public get fullName() {
    return this.getStringAttribute('full_name');
  }

  // include_roles - computed: false, optional: true, required: false
  private _includeRoles?: boolean | cdktf.IResolvable; 
  public get includeRoles() {
    return this.getBooleanAttribute('include_roles');
  }
  public set includeRoles(value: boolean | cdktf.IResolvable) {
    this._includeRoles = value;
  }
  public resetIncludeRoles() {
    this._includeRoles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeRolesInput() {
    return this._includeRoles;
  }

  // include_teams - computed: false, optional: true, required: false
  private _includeTeams?: boolean | cdktf.IResolvable; 
  public get includeTeams() {
    return this.getBooleanAttribute('include_teams');
  }
  public set includeTeams(value: boolean | cdktf.IResolvable) {
    this._includeTeams = value;
  }
  public resetIncludeTeams() {
    this._includeTeams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeTeamsInput() {
    return this._includeTeams;
  }

  // job_title - computed: true, optional: false, required: false
  public get jobTitle() {
    return this.getStringAttribute('job_title');
  }

  // node_id - computed: true, optional: false, required: false
  public get nodeId() {
    return this.getNumberAttribute('node_id');
  }

  // roles - computed: true, optional: false, required: false
  private _roles = new DataKeeperUserRolesList(this, "roles", false);
  public get roles() {
    return this._roles;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // teams - computed: true, optional: false, required: false
  private _teams = new DataKeeperUserTeamsList(this, "teams", false);
  public get teams() {
    return this._teams;
  }

  // tfa_enabled - computed: true, optional: false, required: false
  public get tfaEnabled() {
    return this.getBooleanAttribute('tfa_enabled');
  }

  // username - computed: true, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enterprise_user_id: cdktf.numberToTerraform(this._enterpriseUserId),
      include_roles: cdktf.booleanToTerraform(this._includeRoles),
      include_teams: cdktf.booleanToTerraform(this._includeTeams),
      username: cdktf.stringToTerraform(this._username),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enterprise_user_id: {
        value: cdktf.numberToHclTerraform(this._enterpriseUserId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      include_roles: {
        value: cdktf.booleanToHclTerraform(this._includeRoles),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      include_teams: {
        value: cdktf.booleanToHclTerraform(this._includeTeams),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
