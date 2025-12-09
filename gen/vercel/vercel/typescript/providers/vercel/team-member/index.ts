// https://registry.terraform.io/providers/vercel/vercel/4.1.0/docs/resources/team_member
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TeamMemberConfig extends cdktf.TerraformMetaArguments {
  /**
  * If access groups are enabled on the team, and the user is a CONTRIBUTOR, `projects`, `access_groups` or both must be specified. A set of access groups IDs that the user should be granted access to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.1.0/docs/resources/team_member#access_groups TeamMember#access_groups}
  */
  readonly accessGroups?: string[];
  /**
  * The email of the user to add to the team. Must specify one of user_id or email.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.1.0/docs/resources/team_member#email TeamMember#email}
  */
  readonly email?: string;
  /**
  * If access groups are enabled on the team, and the user is a CONTRIBUTOR, `projects`, `access_groups` or both must be specified. A set of projects that the user should be granted access to, along with their role in each project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.1.0/docs/resources/team_member#projects TeamMember#projects}
  */
  readonly projects?: TeamMemberProjects[] | cdktf.IResolvable;
  /**
  * The role that the user should have in the team. One of 'MEMBER', 'OWNER', 'VIEWER', 'VIEWER_FOR_PLUS', 'DEVELOPER', 'BILLING', 'SECURITY', or 'CONTRIBUTOR'. Depending on your Team's plan, some of these roles may be unavailable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.1.0/docs/resources/team_member#role TeamMember#role}
  */
  readonly role: string;
  /**
  * The ID of the existing Vercel Team.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.1.0/docs/resources/team_member#team_id TeamMember#team_id}
  */
  readonly teamId: string;
  /**
  * The ID of the user to add to the team. Must specify one of user_id or email.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.1.0/docs/resources/team_member#user_id TeamMember#user_id}
  */
  readonly userId?: string;
}
export interface TeamMemberProjects {
  /**
  * The ID of the project that the user should be granted access to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.1.0/docs/resources/team_member#project_id TeamMember#project_id}
  */
  readonly projectId: string;
  /**
  * The role that the user should have in the project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.1.0/docs/resources/team_member#role TeamMember#role}
  */
  readonly role: string;
}

export function teamMemberProjectsToTerraform(struct?: TeamMemberProjects | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    project_id: cdktf.stringToTerraform(struct!.projectId),
    role: cdktf.stringToTerraform(struct!.role),
  }
}


export function teamMemberProjectsToHclTerraform(struct?: TeamMemberProjects | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    project_id: {
      value: cdktf.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeamMemberProjectsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): TeamMemberProjects | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeamMemberProjects | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._projectId = undefined;
      this._role = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._projectId = value.projectId;
      this._role = value.role;
    }
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // role - computed: false, optional: false, required: true
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }
}

export class TeamMemberProjectsList extends cdktf.ComplexList {
  public internalValue? : TeamMemberProjects[] | cdktf.IResolvable

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
  public get(index: number): TeamMemberProjectsOutputReference {
    return new TeamMemberProjectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vercel/vercel/4.1.0/docs/resources/team_member vercel_team_member}
*/
export class TeamMember extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vercel_team_member";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TeamMember resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TeamMember to import
  * @param importFromId The id of the existing TeamMember that should be imported. Refer to the {@link https://registry.terraform.io/providers/vercel/vercel/4.1.0/docs/resources/team_member#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TeamMember to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vercel_team_member", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vercel/vercel/4.1.0/docs/resources/team_member vercel_team_member} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TeamMemberConfig
  */
  public constructor(scope: Construct, id: string, config: TeamMemberConfig) {
    super(scope, id, {
      terraformResourceType: 'vercel_team_member',
      terraformGeneratorMetadata: {
        providerName: 'vercel',
        providerVersion: '4.1.0',
        providerVersionConstraint: '4.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessGroups = config.accessGroups;
    this._email = config.email;
    this._projects.internalValue = config.projects;
    this._role = config.role;
    this._teamId = config.teamId;
    this._userId = config.userId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_groups - computed: false, optional: true, required: false
  private _accessGroups?: string[]; 
  public get accessGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('access_groups'));
  }
  public set accessGroups(value: string[]) {
    this._accessGroups = value;
  }
  public resetAccessGroups() {
    this._accessGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessGroupsInput() {
    return this._accessGroups;
  }

  // confirmed - computed: true, optional: false, required: false
  public get confirmed() {
    return this.getBooleanAttribute('confirmed');
  }

  // email - computed: true, optional: true, required: false
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  public resetEmail() {
    this._email = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // projects - computed: false, optional: true, required: false
  private _projects = new TeamMemberProjectsList(this, "projects", true);
  public get projects() {
    return this._projects;
  }
  public putProjects(value: TeamMemberProjects[] | cdktf.IResolvable) {
    this._projects.internalValue = value;
  }
  public resetProjects() {
    this._projects.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectsInput() {
    return this._projects.internalValue;
  }

  // role - computed: false, optional: false, required: true
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
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

  // user_id - computed: true, optional: true, required: false
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._accessGroups),
      email: cdktf.stringToTerraform(this._email),
      projects: cdktf.listMapper(teamMemberProjectsToTerraform, false)(this._projects.internalValue),
      role: cdktf.stringToTerraform(this._role),
      team_id: cdktf.stringToTerraform(this._teamId),
      user_id: cdktf.stringToTerraform(this._userId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._accessGroups),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      email: {
        value: cdktf.stringToHclTerraform(this._email),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      projects: {
        value: cdktf.listMapperHcl(teamMemberProjectsToHclTerraform, false)(this._projects.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "TeamMemberProjectsList",
      },
      role: {
        value: cdktf.stringToHclTerraform(this._role),
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
