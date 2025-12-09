// https://registry.terraform.io/providers/mongodb/mongodbatlas/2.3.0/docs/data-sources/cloud_user_project_assignment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMongodbatlasCloudUserProjectAssignmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](https://www.mongodb.com/docs/api/doc/atlas-admin-api-v2/operation/operation-listprojects) endpoint to retrieve all projects to which the authenticated user has access.
  * 
  * **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/2.3.0/docs/data-sources/cloud_user_project_assignment#project_id DataMongodbatlasCloudUserProjectAssignment#project_id}
  */
  readonly projectId: string;
  /**
  * Unique 24-hexadecimal digit string that identifies the MongoDB Cloud user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/2.3.0/docs/data-sources/cloud_user_project_assignment#user_id DataMongodbatlasCloudUserProjectAssignment#user_id}
  */
  readonly userId?: string;
  /**
  * Email address that represents the username of the MongoDB Cloud user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/2.3.0/docs/data-sources/cloud_user_project_assignment#username DataMongodbatlasCloudUserProjectAssignment#username}
  */
  readonly username?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/2.3.0/docs/data-sources/cloud_user_project_assignment mongodbatlas_cloud_user_project_assignment}
*/
export class DataMongodbatlasCloudUserProjectAssignment extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mongodbatlas_cloud_user_project_assignment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMongodbatlasCloudUserProjectAssignment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMongodbatlasCloudUserProjectAssignment to import
  * @param importFromId The id of the existing DataMongodbatlasCloudUserProjectAssignment that should be imported. Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/2.3.0/docs/data-sources/cloud_user_project_assignment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMongodbatlasCloudUserProjectAssignment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mongodbatlas_cloud_user_project_assignment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/2.3.0/docs/data-sources/cloud_user_project_assignment mongodbatlas_cloud_user_project_assignment} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMongodbatlasCloudUserProjectAssignmentConfig
  */
  public constructor(scope: Construct, id: string, config: DataMongodbatlasCloudUserProjectAssignmentConfig) {
    super(scope, id, {
      terraformResourceType: 'mongodbatlas_cloud_user_project_assignment',
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
    this._projectId = config.projectId;
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

  // org_membership_status - computed: true, optional: false, required: false
  public get orgMembershipStatus() {
    return this.getStringAttribute('org_membership_status');
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

  // roles - computed: true, optional: false, required: false
  public get roles() {
    return cdktf.Fn.tolist(this.getListAttribute('roles'));
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
      project_id: cdktf.stringToTerraform(this._projectId),
      user_id: cdktf.stringToTerraform(this._userId),
      username: cdktf.stringToTerraform(this._username),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
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
