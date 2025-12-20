// https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/resources/authorization_project_role_assignment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AuthorizationProjectRoleAssignmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * project Resource to assign the role to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/resources/authorization_project_role_assignment#resource_id AuthorizationProjectRoleAssignment#resource_id}
  */
  readonly resourceId: string;
  /**
  * Role to be assigned
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/resources/authorization_project_role_assignment#role AuthorizationProjectRoleAssignment#role}
  */
  readonly role: string;
  /**
  * Identifier of user, service account or client. Usually email address or name in case of clients
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/resources/authorization_project_role_assignment#subject AuthorizationProjectRoleAssignment#subject}
  */
  readonly subject: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/resources/authorization_project_role_assignment stackit_authorization_project_role_assignment}
*/
export class AuthorizationProjectRoleAssignment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "stackit_authorization_project_role_assignment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AuthorizationProjectRoleAssignment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AuthorizationProjectRoleAssignment to import
  * @param importFromId The id of the existing AuthorizationProjectRoleAssignment that should be imported. Refer to the {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/resources/authorization_project_role_assignment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AuthorizationProjectRoleAssignment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "stackit_authorization_project_role_assignment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/resources/authorization_project_role_assignment stackit_authorization_project_role_assignment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AuthorizationProjectRoleAssignmentConfig
  */
  public constructor(scope: Construct, id: string, config: AuthorizationProjectRoleAssignmentConfig) {
    super(scope, id, {
      terraformResourceType: 'stackit_authorization_project_role_assignment',
      terraformGeneratorMetadata: {
        providerName: 'stackit',
        providerVersion: '0.76.0',
        providerVersionConstraint: '0.76.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._resourceId = config.resourceId;
    this._role = config.role;
    this._subject = config.subject;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // resource_id - computed: false, optional: false, required: true
  private _resourceId?: string; 
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
  public set resourceId(value: string) {
    this._resourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId;
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

  // subject - computed: false, optional: false, required: true
  private _subject?: string; 
  public get subject() {
    return this.getStringAttribute('subject');
  }
  public set subject(value: string) {
    this._subject = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      resource_id: cdktf.stringToTerraform(this._resourceId),
      role: cdktf.stringToTerraform(this._role),
      subject: cdktf.stringToTerraform(this._subject),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      resource_id: {
        value: cdktf.stringToHclTerraform(this._resourceId),
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
      subject: {
        value: cdktf.stringToHclTerraform(this._subject),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
