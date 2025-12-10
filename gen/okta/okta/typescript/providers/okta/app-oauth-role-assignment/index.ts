// https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/app_oauth_role_assignment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppOauthRoleAssignmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Client ID for the role to be assigned to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/app_oauth_role_assignment#client_id AppOauthRoleAssignment#client_id}
  */
  readonly clientId: string;
  /**
  * Resource set for the custom role to assign, must be the ID of the created resource set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/app_oauth_role_assignment#resource_set AppOauthRoleAssignment#resource_set}
  */
  readonly resourceSet?: string;
  /**
  * Custom Role ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/app_oauth_role_assignment#role AppOauthRoleAssignment#role}
  */
  readonly role?: string;
  /**
  * Role type to assign. This can be one of the standard Okta roles, such as `HELP_DESK_ADMIN`, or `CUSTOM`. Using custom requires the `resource_set` and `role` attributes to be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/app_oauth_role_assignment#type AppOauthRoleAssignment#type}
  */
  readonly type: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/app_oauth_role_assignment okta_app_oauth_role_assignment}
*/
export class AppOauthRoleAssignment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "okta_app_oauth_role_assignment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AppOauthRoleAssignment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AppOauthRoleAssignment to import
  * @param importFromId The id of the existing AppOauthRoleAssignment that should be imported. Refer to the {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/app_oauth_role_assignment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AppOauthRoleAssignment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "okta_app_oauth_role_assignment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/app_oauth_role_assignment okta_app_oauth_role_assignment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppOauthRoleAssignmentConfig
  */
  public constructor(scope: Construct, id: string, config: AppOauthRoleAssignmentConfig) {
    super(scope, id, {
      terraformResourceType: 'okta_app_oauth_role_assignment',
      terraformGeneratorMetadata: {
        providerName: 'okta',
        providerVersion: '6.5.2',
        providerVersionConstraint: '6.5.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clientId = config.clientId;
    this._resourceSet = config.resourceSet;
    this._role = config.role;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // client_id - computed: false, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // label - computed: true, optional: false, required: false
  public get label() {
    return this.getStringAttribute('label');
  }

  // resource_set - computed: false, optional: true, required: false
  private _resourceSet?: string; 
  public get resourceSet() {
    return this.getStringAttribute('resource_set');
  }
  public set resourceSet(value: string) {
    this._resourceSet = value;
  }
  public resetResourceSet() {
    this._resourceSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceSetInput() {
    return this._resourceSet;
  }

  // role - computed: false, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      client_id: cdktf.stringToTerraform(this._clientId),
      resource_set: cdktf.stringToTerraform(this._resourceSet),
      role: cdktf.stringToTerraform(this._role),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      client_id: {
        value: cdktf.stringToHclTerraform(this._clientId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_set: {
        value: cdktf.stringToHclTerraform(this._resourceSet),
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
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
