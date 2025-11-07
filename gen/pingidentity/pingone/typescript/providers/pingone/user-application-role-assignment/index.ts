// https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/user_application_role_assignment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserApplicationRoleAssignmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the application role to assign to the user.  Must be a valid PingOne resource ID.  This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/user_application_role_assignment#application_role_id UserApplicationRoleAssignment#application_role_id}
  */
  readonly applicationRoleId: string;
  /**
  * The ID of the environment that contains the user to assign the application role to.  Must be a valid PingOne resource ID.  This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/user_application_role_assignment#environment_id UserApplicationRoleAssignment#environment_id}
  */
  readonly environmentId: string;
  /**
  * The ID of the user to assign the application role to.  Must be a valid PingOne resource ID.  This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/user_application_role_assignment#user_id UserApplicationRoleAssignment#user_id}
  */
  readonly userId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/user_application_role_assignment pingone_user_application_role_assignment}
*/
export class UserApplicationRoleAssignment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingone_user_application_role_assignment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a UserApplicationRoleAssignment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the UserApplicationRoleAssignment to import
  * @param importFromId The id of the existing UserApplicationRoleAssignment that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/user_application_role_assignment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the UserApplicationRoleAssignment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingone_user_application_role_assignment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/user_application_role_assignment pingone_user_application_role_assignment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserApplicationRoleAssignmentConfig
  */
  public constructor(scope: Construct, id: string, config: UserApplicationRoleAssignmentConfig) {
    super(scope, id, {
      terraformResourceType: 'pingone_user_application_role_assignment',
      terraformGeneratorMetadata: {
        providerName: 'pingone',
        providerVersion: '1.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._applicationRoleId = config.applicationRoleId;
    this._environmentId = config.environmentId;
    this._userId = config.userId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_role_id - computed: false, optional: false, required: true
  private _applicationRoleId?: string; 
  public get applicationRoleId() {
    return this.getStringAttribute('application_role_id');
  }
  public set applicationRoleId(value: string) {
    this._applicationRoleId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationRoleIdInput() {
    return this._applicationRoleId;
  }

  // environment_id - computed: false, optional: false, required: true
  private _environmentId?: string; 
  public get environmentId() {
    return this.getStringAttribute('environment_id');
  }
  public set environmentId(value: string) {
    this._environmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentIdInput() {
    return this._environmentId;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
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
      application_role_id: cdktf.stringToTerraform(this._applicationRoleId),
      environment_id: cdktf.stringToTerraform(this._environmentId),
      user_id: cdktf.stringToTerraform(this._userId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_role_id: {
        value: cdktf.stringToHclTerraform(this._applicationRoleId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      environment_id: {
        value: cdktf.stringToHclTerraform(this._environmentId),
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
