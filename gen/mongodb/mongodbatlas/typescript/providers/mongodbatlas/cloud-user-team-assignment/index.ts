// https://registry.terraform.io/providers/mongodb/mongodbatlas/2.1.0/docs/resources/cloud_user_team_assignment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudUserTeamAssignmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [/orgs](https://www.mongodb.com/docs/api/doc/atlas-admin-api-v2/group/endpoint-organizations) endpoint to retrieve all organizations to which the authenticated user has access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/2.1.0/docs/resources/cloud_user_team_assignment#org_id CloudUserTeamAssignment#org_id}
  */
  readonly orgId: string;
  /**
  * Unique 24-hexadecimal digit string that identifies the team to which you want to assign the MongoDB Cloud user. Use the [/teams](https://www.mongodb.com/docs/api/doc/atlas-admin-api-v2/group/endpoint-teams) endpoint to retrieve all teams to which the authenticated user has access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/2.1.0/docs/resources/cloud_user_team_assignment#team_id CloudUserTeamAssignment#team_id}
  */
  readonly teamId: string;
  /**
  * Unique 24-hexadecimal digit string that identifies the MongoDB Cloud user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/2.1.0/docs/resources/cloud_user_team_assignment#user_id CloudUserTeamAssignment#user_id}
  */
  readonly userId: string;
}
export interface CloudUserTeamAssignmentRolesProjectRoleAssignments {
}

export function cloudUserTeamAssignmentRolesProjectRoleAssignmentsToTerraform(struct?: CloudUserTeamAssignmentRolesProjectRoleAssignments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cloudUserTeamAssignmentRolesProjectRoleAssignmentsToHclTerraform(struct?: CloudUserTeamAssignmentRolesProjectRoleAssignments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CloudUserTeamAssignmentRolesProjectRoleAssignmentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudUserTeamAssignmentRolesProjectRoleAssignments | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudUserTeamAssignmentRolesProjectRoleAssignments | undefined) {
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

export class CloudUserTeamAssignmentRolesProjectRoleAssignmentsList extends cdktf.ComplexList {

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
  public get(index: number): CloudUserTeamAssignmentRolesProjectRoleAssignmentsOutputReference {
    return new CloudUserTeamAssignmentRolesProjectRoleAssignmentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudUserTeamAssignmentRoles {
}

export function cloudUserTeamAssignmentRolesToTerraform(struct?: CloudUserTeamAssignmentRoles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cloudUserTeamAssignmentRolesToHclTerraform(struct?: CloudUserTeamAssignmentRoles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CloudUserTeamAssignmentRolesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudUserTeamAssignmentRoles | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudUserTeamAssignmentRoles | undefined) {
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
  private _projectRoleAssignments = new CloudUserTeamAssignmentRolesProjectRoleAssignmentsList(this, "project_role_assignments", true);
  public get projectRoleAssignments() {
    return this._projectRoleAssignments;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/2.1.0/docs/resources/cloud_user_team_assignment mongodbatlas_cloud_user_team_assignment}
*/
export class CloudUserTeamAssignment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mongodbatlas_cloud_user_team_assignment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudUserTeamAssignment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudUserTeamAssignment to import
  * @param importFromId The id of the existing CloudUserTeamAssignment that should be imported. Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/2.1.0/docs/resources/cloud_user_team_assignment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudUserTeamAssignment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mongodbatlas_cloud_user_team_assignment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/2.1.0/docs/resources/cloud_user_team_assignment mongodbatlas_cloud_user_team_assignment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudUserTeamAssignmentConfig
  */
  public constructor(scope: Construct, id: string, config: CloudUserTeamAssignmentConfig) {
    super(scope, id, {
      terraformResourceType: 'mongodbatlas_cloud_user_team_assignment',
      terraformGeneratorMetadata: {
        providerName: 'mongodbatlas',
        providerVersion: '2.1.0'
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
  private _roles = new CloudUserTeamAssignmentRolesOutputReference(this, "roles");
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

  // user_id - computed: false, optional: false, required: true
  private _userId?: string; 
  public get userId() {
    return this.getStringAttribute('user_id');
  }
  public set userId(value: string) {
    this._userId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId;
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      org_id: cdktf.stringToTerraform(this._orgId),
      team_id: cdktf.stringToTerraform(this._teamId),
      user_id: cdktf.stringToTerraform(this._userId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
