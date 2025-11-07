// https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/resources/organization_connection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrganizationConnectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * When `true`, all users that log in with this connection will be automatically granted membership in the organization. When `false`, users must be granted membership in the organization before logging in with this connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/resources/organization_connection#assign_membership_on_login OrganizationConnection#assign_membership_on_login}
  */
  readonly assignMembershipOnLogin?: boolean | cdktf.IResolvable;
  /**
  * The ID of the connection to enable for the organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/resources/organization_connection#connection_id OrganizationConnection#connection_id}
  */
  readonly connectionId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/resources/organization_connection#id OrganizationConnection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Determines whether organization sign-up should be enabled for this organization connection. Only applicable for database connections. Note: `is_signup_enabled` can only be `true` if `assign_membership_on_login` is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/resources/organization_connection#is_signup_enabled OrganizationConnection#is_signup_enabled}
  */
  readonly isSignupEnabled?: boolean | cdktf.IResolvable;
  /**
  * The ID of the organization to enable the connection for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/resources/organization_connection#organization_id OrganizationConnection#organization_id}
  */
  readonly organizationId: string;
  /**
  * Determines whether a connection should be displayed on this organization’s login prompt. Only applicable for enterprise connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/resources/organization_connection#show_as_button OrganizationConnection#show_as_button}
  */
  readonly showAsButton?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/resources/organization_connection auth0_organization_connection}
*/
export class OrganizationConnection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "auth0_organization_connection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OrganizationConnection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OrganizationConnection to import
  * @param importFromId The id of the existing OrganizationConnection that should be imported. Refer to the {@link https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/resources/organization_connection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OrganizationConnection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "auth0_organization_connection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/resources/organization_connection auth0_organization_connection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrganizationConnectionConfig
  */
  public constructor(scope: Construct, id: string, config: OrganizationConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'auth0_organization_connection',
      terraformGeneratorMetadata: {
        providerName: 'auth0',
        providerVersion: '1.33.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._assignMembershipOnLogin = config.assignMembershipOnLogin;
    this._connectionId = config.connectionId;
    this._id = config.id;
    this._isSignupEnabled = config.isSignupEnabled;
    this._organizationId = config.organizationId;
    this._showAsButton = config.showAsButton;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // assign_membership_on_login - computed: false, optional: true, required: false
  private _assignMembershipOnLogin?: boolean | cdktf.IResolvable; 
  public get assignMembershipOnLogin() {
    return this.getBooleanAttribute('assign_membership_on_login');
  }
  public set assignMembershipOnLogin(value: boolean | cdktf.IResolvable) {
    this._assignMembershipOnLogin = value;
  }
  public resetAssignMembershipOnLogin() {
    this._assignMembershipOnLogin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignMembershipOnLoginInput() {
    return this._assignMembershipOnLogin;
  }

  // connection_id - computed: false, optional: false, required: true
  private _connectionId?: string; 
  public get connectionId() {
    return this.getStringAttribute('connection_id');
  }
  public set connectionId(value: string) {
    this._connectionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionIdInput() {
    return this._connectionId;
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

  // is_signup_enabled - computed: false, optional: true, required: false
  private _isSignupEnabled?: boolean | cdktf.IResolvable; 
  public get isSignupEnabled() {
    return this.getBooleanAttribute('is_signup_enabled');
  }
  public set isSignupEnabled(value: boolean | cdktf.IResolvable) {
    this._isSignupEnabled = value;
  }
  public resetIsSignupEnabled() {
    this._isSignupEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSignupEnabledInput() {
    return this._isSignupEnabled;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // organization_id - computed: false, optional: false, required: true
  private _organizationId?: string; 
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }
  public set organizationId(value: string) {
    this._organizationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationIdInput() {
    return this._organizationId;
  }

  // show_as_button - computed: false, optional: true, required: false
  private _showAsButton?: boolean | cdktf.IResolvable; 
  public get showAsButton() {
    return this.getBooleanAttribute('show_as_button');
  }
  public set showAsButton(value: boolean | cdktf.IResolvable) {
    this._showAsButton = value;
  }
  public resetShowAsButton() {
    this._showAsButton = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showAsButtonInput() {
    return this._showAsButton;
  }

  // strategy - computed: true, optional: false, required: false
  public get strategy() {
    return this.getStringAttribute('strategy');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      assign_membership_on_login: cdktf.booleanToTerraform(this._assignMembershipOnLogin),
      connection_id: cdktf.stringToTerraform(this._connectionId),
      id: cdktf.stringToTerraform(this._id),
      is_signup_enabled: cdktf.booleanToTerraform(this._isSignupEnabled),
      organization_id: cdktf.stringToTerraform(this._organizationId),
      show_as_button: cdktf.booleanToTerraform(this._showAsButton),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      assign_membership_on_login: {
        value: cdktf.booleanToHclTerraform(this._assignMembershipOnLogin),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      connection_id: {
        value: cdktf.stringToHclTerraform(this._connectionId),
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
      is_signup_enabled: {
        value: cdktf.booleanToHclTerraform(this._isSignupEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      organization_id: {
        value: cdktf.stringToHclTerraform(this._organizationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      show_as_button: {
        value: cdktf.booleanToHclTerraform(this._showAsButton),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
