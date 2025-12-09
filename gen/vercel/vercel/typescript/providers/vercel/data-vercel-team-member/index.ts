// https://registry.terraform.io/providers/vercel/vercel/4.1.0/docs/data-sources/team_member
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataVercelTeamMemberConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the existing Vercel Team.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.1.0/docs/data-sources/team_member#team_id DataVercelTeamMember#team_id}
  */
  readonly teamId: string;
  /**
  * The ID of the existing Vercel Team Member.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.1.0/docs/data-sources/team_member#user_id DataVercelTeamMember#user_id}
  */
  readonly userId: string;
}
export interface DataVercelTeamMemberProjects {
  /**
  * The ID of the project that the user should be granted access to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.1.0/docs/data-sources/team_member#project_id DataVercelTeamMember#project_id}
  */
  readonly projectId: string;
  /**
  * The role that the user should have in the project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.1.0/docs/data-sources/team_member#role DataVercelTeamMember#role}
  */
  readonly role: string;
}

export function dataVercelTeamMemberProjectsToTerraform(struct?: DataVercelTeamMemberProjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    project_id: cdktf.stringToTerraform(struct!.projectId),
    role: cdktf.stringToTerraform(struct!.role),
  }
}


export function dataVercelTeamMemberProjectsToHclTerraform(struct?: DataVercelTeamMemberProjects): any {
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

export class DataVercelTeamMemberProjectsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataVercelTeamMemberProjects | undefined {
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

  public set internalValue(value: DataVercelTeamMemberProjects | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._projectId = undefined;
      this._role = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._projectId = value.projectId;
      this._role = value.role;
    }
  }

  // project_id - computed: true, optional: false, required: true
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

  // role - computed: true, optional: false, required: true
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

export class DataVercelTeamMemberProjectsList extends cdktf.ComplexList {
  public internalValue? : DataVercelTeamMemberProjects[] | cdktf.IResolvable

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
  public get(index: number): DataVercelTeamMemberProjectsOutputReference {
    return new DataVercelTeamMemberProjectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vercel/vercel/4.1.0/docs/data-sources/team_member vercel_team_member}
*/
export class DataVercelTeamMember extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vercel_team_member";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataVercelTeamMember resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataVercelTeamMember to import
  * @param importFromId The id of the existing DataVercelTeamMember that should be imported. Refer to the {@link https://registry.terraform.io/providers/vercel/vercel/4.1.0/docs/data-sources/team_member#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataVercelTeamMember to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vercel_team_member", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vercel/vercel/4.1.0/docs/data-sources/team_member vercel_team_member} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataVercelTeamMemberConfig
  */
  public constructor(scope: Construct, id: string, config: DataVercelTeamMemberConfig) {
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
    this._teamId = config.teamId;
    this._userId = config.userId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_groups - computed: true, optional: false, required: false
  public get accessGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('access_groups'));
  }

  // email - computed: true, optional: false, required: false
  public get email() {
    return this.getStringAttribute('email');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // projects - computed: true, optional: false, required: false
  private _projects = new DataVercelTeamMemberProjectsList(this, "projects", true);
  public get projects() {
    return this._projects;
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      team_id: cdktf.stringToTerraform(this._teamId),
      user_id: cdktf.stringToTerraform(this._userId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
