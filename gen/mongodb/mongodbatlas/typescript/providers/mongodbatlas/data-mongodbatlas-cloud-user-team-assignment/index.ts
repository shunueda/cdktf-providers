// https://registry.terraform.io/providers/mongodb/mongodbatlas/2.3.0/docs/data-sources/cloud_user_team_assignment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMongodbatlasCloudUserTeamAssignmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](https://www.mongodb.com/docs/api/doc/atlas-admin-api-v2/group/endpoint-organizations) endpoint to retrieve all organizations to which the authenticated user has access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/2.3.0/docs/data-sources/cloud_user_team_assignment#org_id DataMongodbatlasCloudUserTeamAssignment#org_id}
  */
  readonly orgId: string;
  /**
  * Unique 24-hexadecimal digit string that identifies the team to which you want to assign the MongoDB Cloud user. Use the [/teams](https://www.mongodb.com/docs/api/doc/atlas-admin-api-v2/group/endpoint-teams) endpoint to retrieve all teams to which the authenticated user has access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/2.3.0/docs/data-sources/cloud_user_team_assignment#team_id DataMongodbatlasCloudUserTeamAssignment#team_id}
  */
  readonly teamId: string;
  /**
  * Unique 24-hexadecimal digit string that identifies the MongoDB Cloud user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/2.3.0/docs/data-sources/cloud_user_team_assignment#user_id DataMongodbatlasCloudUserTeamAssignment#user_id}
  */
  readonly userId?: string;
  /**
  * Email address that represents the username of the MongoDB Cloud user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/2.3.0/docs/data-sources/cloud_user_team_assignment#username DataMongodbatlasCloudUserTeamAssignment#username}
  */
  readonly username?: string;
}
export interface DataMongodbatlasCloudUserTeamAssignmentRolesProjectRoleAssignments {
}

export function dataMongodbatlasCloudUserTeamAssignmentRolesProjectRoleAssignmentsToTerraform(struct?: DataMongodbatlasCloudUserTeamAssignmentRolesProjectRoleAssignments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMongodbatlasCloudUserTeamAssignmentRolesProjectRoleAssignmentsToHclTerraform(struct?: DataMongodbatlasCloudUserTeamAssignmentRolesProjectRoleAssignments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMongodbatlasCloudUserTeamAssignmentRolesProjectRoleAssignmentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMongodbatlasCloudUserTeamAssignmentRolesProjectRoleAssignments | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMongodbatlasCloudUserTeamAssignmentRolesProjectRoleAssignments | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // project_roles - computed: true, optional: false, required: false
  public get projectRoles() {
    return cdktf.Fn.tolist(this.getListAttribute('project_roles'));
  }
}

export class DataMongodbatlasCloudUserTeamAssignmentRolesProjectRoleAssignmentsList extends cdktf.ComplexList {

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
  public get(index: number): DataMongodbatlasCloudUserTeamAssignmentRolesProjectRoleAssignmentsOutputReference {
    return new DataMongodbatlasCloudUserTeamAssignmentRolesProjectRoleAssignmentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMongodbatlasCloudUserTeamAssignmentRoles {
}

export function dataMongodbatlasCloudUserTeamAssignmentRolesToTerraform(struct?: DataMongodbatlasCloudUserTeamAssignmentRoles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMongodbatlasCloudUserTeamAssignmentRolesToHclTerraform(struct?: DataMongodbatlasCloudUserTeamAssignmentRoles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMongodbatlasCloudUserTeamAssignmentRolesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataMongodbatlasCloudUserTeamAssignmentRoles | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMongodbatlasCloudUserTeamAssignmentRoles | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // org_roles - computed: true, optional: false, required: false
  public get orgRoles() {
    return cdktf.Fn.tolist(this.getListAttribute('org_roles'));
  }

  // project_role_assignments - computed: true, optional: false, required: false
  private _projectRoleAssignments = new DataMongodbatlasCloudUserTeamAssignmentRolesProjectRoleAssignmentsList(this, "project_role_assignments", true);
  public get projectRoleAssignments() {
    return this._projectRoleAssignments;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/2.3.0/docs/data-sources/cloud_user_team_assignment mongodbatlas_cloud_user_team_assignment}
*/
export class DataMongodbatlasCloudUserTeamAssignment extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mongodbatlas_cloud_user_team_assignment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMongodbatlasCloudUserTeamAssignment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMongodbatlasCloudUserTeamAssignment to import
  * @param importFromId The id of the existing DataMongodbatlasCloudUserTeamAssignment that should be imported. Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/2.3.0/docs/data-sources/cloud_user_team_assignment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMongodbatlasCloudUserTeamAssignment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mongodbatlas_cloud_user_team_assignment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/2.3.0/docs/data-sources/cloud_user_team_assignment mongodbatlas_cloud_user_team_assignment} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMongodbatlasCloudUserTeamAssignmentConfig
  */
  public constructor(scope: Construct, id: string, config: DataMongodbatlasCloudUserTeamAssignmentConfig) {
    super(scope, id, {
      terraformResourceType: 'mongodbatlas_cloud_user_team_assignment',
      terraformGeneratorMetadata: {
        providerName: 'mongodbatlas',
        providerVersion: '2.3.0',
        providerVersionConstraint: '2.3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._orgId = config.orgId;
    this._teamId = config.teamId;
    this._userId = config.userId;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // country - computed: true, optional: false, required: false
  public get country() {
    return this.getStringAttribute('country');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // first_name - computed: true, optional: false, required: false
  public get firstName() {
    return this.getStringAttribute('first_name');
  }

  // invitation_created_at - computed: true, optional: false, required: false
  public get invitationCreatedAt() {
    return this.getStringAttribute('invitation_created_at');
  }

  // invitation_expires_at - computed: true, optional: false, required: false
  public get invitationExpiresAt() {
    return this.getStringAttribute('invitation_expires_at');
  }

  // inviter_username - computed: true, optional: false, required: false
  public get inviterUsername() {
    return this.getStringAttribute('inviter_username');
  }

  // last_auth - computed: true, optional: false, required: false
  public get lastAuth() {
    return this.getStringAttribute('last_auth');
  }

  // last_name - computed: true, optional: false, required: false
  public get lastName() {
    return this.getStringAttribute('last_name');
  }

  // mobile_number - computed: true, optional: false, required: false
  public get mobileNumber() {
    return this.getStringAttribute('mobile_number');
  }

  // org_id - computed: false, optional: false, required: true
  private _orgId?: string; 
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string) {
    this._orgId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }

  // org_membership_status - computed: true, optional: false, required: false
  public get orgMembershipStatus() {
    return this.getStringAttribute('org_membership_status');
  }

  // roles - computed: true, optional: false, required: false
  private _roles = new DataMongodbatlasCloudUserTeamAssignmentRolesOutputReference(this, "roles");
  public get roles() {
    return this._roles;
  }

  // team_id - computed: false, optional: false, required: true
  private _teamId?: string; 
  public get teamId() {
    return this.getStringAttribute('team_id');
  }
  public set teamId(value: string) {
    this._teamId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get teamIdInput() {
    return this._teamId;
  }

  // team_ids - computed: true, optional: false, required: false
  public get teamIds() {
    return cdktf.Fn.tolist(this.getListAttribute('team_ids'));
  }

  // user_id - computed: false, optional: true, required: false
  private _userId?: string; 
  public get userId() {
    return this.getStringAttribute('user_id');
  }
  public set userId(value: string) {
    this._userId = value;
  }
  public resetUserId() {
    this._userId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId;
  }

  // username - computed: false, optional: true, required: false
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
      org_id: cdktf.stringToTerraform(this._orgId),
      team_id: cdktf.stringToTerraform(this._teamId),
      user_id: cdktf.stringToTerraform(this._userId),
      username: cdktf.stringToTerraform(this._username),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      org_id: {
        value: cdktf.stringToHclTerraform(this._orgId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      team_id: {
        value: cdktf.stringToHclTerraform(this._teamId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_id: {
        value: cdktf.stringToHclTerraform(this._userId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
