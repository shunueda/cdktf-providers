// https://registry.terraform.io/providers/turbot/steampipecloud/0.11.0/docs/resources/organization_workspace_member
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrganizationWorkspaceMemberConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/steampipecloud/0.11.0/docs/resources/organization_workspace_member#created_at OrganizationWorkspaceMember#created_at}
  */
  readonly createdAt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/steampipecloud/0.11.0/docs/resources/organization_workspace_member#created_by OrganizationWorkspaceMember#created_by}
  */
  readonly createdBy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/steampipecloud/0.11.0/docs/resources/organization_workspace_member#id OrganizationWorkspaceMember#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/steampipecloud/0.11.0/docs/resources/organization_workspace_member#organization OrganizationWorkspaceMember#organization}
  */
  readonly organization: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/steampipecloud/0.11.0/docs/resources/organization_workspace_member#role OrganizationWorkspaceMember#role}
  */
  readonly role: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/steampipecloud/0.11.0/docs/resources/organization_workspace_member#updated_at OrganizationWorkspaceMember#updated_at}
  */
  readonly updatedAt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/steampipecloud/0.11.0/docs/resources/organization_workspace_member#updated_by OrganizationWorkspaceMember#updated_by}
  */
  readonly updatedBy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/steampipecloud/0.11.0/docs/resources/organization_workspace_member#user_handle OrganizationWorkspaceMember#user_handle}
  */
  readonly userHandle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/steampipecloud/0.11.0/docs/resources/organization_workspace_member#workspace_handle OrganizationWorkspaceMember#workspace_handle}
  */
  readonly workspaceHandle: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/turbot/steampipecloud/0.11.0/docs/resources/organization_workspace_member steampipecloud_organization_workspace_member}
*/
export class OrganizationWorkspaceMember extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "steampipecloud_organization_workspace_member";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OrganizationWorkspaceMember resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OrganizationWorkspaceMember to import
  * @param importFromId The id of the existing OrganizationWorkspaceMember that should be imported. Refer to the {@link https://registry.terraform.io/providers/turbot/steampipecloud/0.11.0/docs/resources/organization_workspace_member#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OrganizationWorkspaceMember to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "steampipecloud_organization_workspace_member", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/turbot/steampipecloud/0.11.0/docs/resources/organization_workspace_member steampipecloud_organization_workspace_member} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrganizationWorkspaceMemberConfig
  */
  public constructor(scope: Construct, id: string, config: OrganizationWorkspaceMemberConfig) {
    super(scope, id, {
      terraformResourceType: 'steampipecloud_organization_workspace_member',
      terraformGeneratorMetadata: {
        providerName: 'steampipecloud',
        providerVersion: '0.11.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._createdAt = config.createdAt;
    this._createdBy = config.createdBy;
    this._id = config.id;
    this._organization = config.organization;
    this._role = config.role;
    this._updatedAt = config.updatedAt;
    this._updatedBy = config.updatedBy;
    this._userHandle = config.userHandle;
    this._workspaceHandle = config.workspaceHandle;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: true, required: false
  private _createdAt?: string; 
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }
  public set createdAt(value: string) {
    this._createdAt = value;
  }
  public resetCreatedAt() {
    this._createdAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdAtInput() {
    return this._createdAt;
  }

  // created_by - computed: true, optional: true, required: false
  private _createdBy?: string; 
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }
  public set createdBy(value: string) {
    this._createdBy = value;
  }
  public resetCreatedBy() {
    this._createdBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdByInput() {
    return this._createdBy;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
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

  // organization - computed: false, optional: false, required: true
  private _organization?: string; 
  public get organization() {
    return this.getStringAttribute('organization');
  }
  public set organization(value: string) {
    this._organization = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationInput() {
    return this._organization;
  }

  // organization_id - computed: true, optional: false, required: false
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }

  // organization_workspace_member_id - computed: true, optional: false, required: false
  public get organizationWorkspaceMemberId() {
    return this.getStringAttribute('organization_workspace_member_id');
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

  // scope - computed: true, optional: false, required: false
  public get scope() {
    return this.getStringAttribute('scope');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // updated_at - computed: true, optional: true, required: false
  private _updatedAt?: string; 
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }
  public set updatedAt(value: string) {
    this._updatedAt = value;
  }
  public resetUpdatedAt() {
    this._updatedAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatedAtInput() {
    return this._updatedAt;
  }

  // updated_by - computed: true, optional: true, required: false
  private _updatedBy?: string; 
  public get updatedBy() {
    return this.getStringAttribute('updated_by');
  }
  public set updatedBy(value: string) {
    this._updatedBy = value;
  }
  public resetUpdatedBy() {
    this._updatedBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatedByInput() {
    return this._updatedBy;
  }

  // user_handle - computed: true, optional: true, required: false
  private _userHandle?: string; 
  public get userHandle() {
    return this.getStringAttribute('user_handle');
  }
  public set userHandle(value: string) {
    this._userHandle = value;
  }
  public resetUserHandle() {
    this._userHandle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userHandleInput() {
    return this._userHandle;
  }

  // user_id - computed: true, optional: false, required: false
  public get userId() {
    return this.getStringAttribute('user_id');
  }

  // version_id - computed: true, optional: false, required: false
  public get versionId() {
    return this.getNumberAttribute('version_id');
  }

  // workspace_handle - computed: false, optional: false, required: true
  private _workspaceHandle?: string; 
  public get workspaceHandle() {
    return this.getStringAttribute('workspace_handle');
  }
  public set workspaceHandle(value: string) {
    this._workspaceHandle = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceHandleInput() {
    return this._workspaceHandle;
  }

  // workspace_id - computed: true, optional: false, required: false
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      created_at: cdktf.stringToTerraform(this._createdAt),
      created_by: cdktf.stringToTerraform(this._createdBy),
      id: cdktf.stringToTerraform(this._id),
      organization: cdktf.stringToTerraform(this._organization),
      role: cdktf.stringToTerraform(this._role),
      updated_at: cdktf.stringToTerraform(this._updatedAt),
      updated_by: cdktf.stringToTerraform(this._updatedBy),
      user_handle: cdktf.stringToTerraform(this._userHandle),
      workspace_handle: cdktf.stringToTerraform(this._workspaceHandle),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      created_at: {
        value: cdktf.stringToHclTerraform(this._createdAt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      created_by: {
        value: cdktf.stringToHclTerraform(this._createdBy),
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
      organization: {
        value: cdktf.stringToHclTerraform(this._organization),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role: {
        value: cdktf.stringToHclTerraform(this._role),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      updated_at: {
        value: cdktf.stringToHclTerraform(this._updatedAt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      updated_by: {
        value: cdktf.stringToHclTerraform(this._updatedBy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_handle: {
        value: cdktf.stringToHclTerraform(this._userHandle),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      workspace_handle: {
        value: cdktf.stringToHclTerraform(this._workspaceHandle),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
