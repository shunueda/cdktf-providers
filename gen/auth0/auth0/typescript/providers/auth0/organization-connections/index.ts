// https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/organization_connections
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrganizationConnectionsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/organization_connections#id OrganizationConnections#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ID of the organization on which to enable the connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/organization_connections#organization_id OrganizationConnections#organization_id}
  */
  readonly organizationId: string;
  /**
  * enabled_connections block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/organization_connections#enabled_connections OrganizationConnections#enabled_connections}
  */
  readonly enabledConnections: OrganizationConnectionsEnabledConnections[] | cdktf.IResolvable;
}
export interface OrganizationConnectionsEnabledConnections {
  /**
  * When `true`, all users that log in with this connection will be automatically granted membership in the organization. When `false`, users must be granted membership in the organization before logging in with this connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/organization_connections#assign_membership_on_login OrganizationConnections#assign_membership_on_login}
  */
  readonly assignMembershipOnLogin?: boolean | cdktf.IResolvable;
  /**
  * The ID of the connection to enable for the organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/organization_connections#connection_id OrganizationConnections#connection_id}
  */
  readonly connectionId: string;
  /**
  * Determines whether organization sign-up should be enabled for this organization connection. Only applicable for database connections. Note: `is_signup_enabled` can only be `true` if `assign_membership_on_login` is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/organization_connections#is_signup_enabled OrganizationConnections#is_signup_enabled}
  */
  readonly isSignupEnabled?: boolean | cdktf.IResolvable;
  /**
  * Determines whether a connection should be displayed on this organization’s login prompt. Only applicable for enterprise connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/organization_connections#show_as_button OrganizationConnections#show_as_button}
  */
  readonly showAsButton?: boolean | cdktf.IResolvable;
}

export function organizationConnectionsEnabledConnectionsToTerraform(struct?: OrganizationConnectionsEnabledConnections | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    assign_membership_on_login: cdktf.booleanToTerraform(struct!.assignMembershipOnLogin),
    connection_id: cdktf.stringToTerraform(struct!.connectionId),
    is_signup_enabled: cdktf.booleanToTerraform(struct!.isSignupEnabled),
    show_as_button: cdktf.booleanToTerraform(struct!.showAsButton),
  }
}


export function organizationConnectionsEnabledConnectionsToHclTerraform(struct?: OrganizationConnectionsEnabledConnections | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    assign_membership_on_login: {
      value: cdktf.booleanToHclTerraform(struct!.assignMembershipOnLogin),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    connection_id: {
      value: cdktf.stringToHclTerraform(struct!.connectionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_signup_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isSignupEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_as_button: {
      value: cdktf.booleanToHclTerraform(struct!.showAsButton),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrganizationConnectionsEnabledConnectionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OrganizationConnectionsEnabledConnections | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._assignMembershipOnLogin !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignMembershipOnLogin = this._assignMembershipOnLogin;
    }
    if (this._connectionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionId = this._connectionId;
    }
    if (this._isSignupEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isSignupEnabled = this._isSignupEnabled;
    }
    if (this._showAsButton !== undefined) {
      hasAnyValues = true;
      internalValueResult.showAsButton = this._showAsButton;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrganizationConnectionsEnabledConnections | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._assignMembershipOnLogin = undefined;
      this._connectionId = undefined;
      this._isSignupEnabled = undefined;
      this._showAsButton = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._assignMembershipOnLogin = value.assignMembershipOnLogin;
      this._connectionId = value.connectionId;
      this._isSignupEnabled = value.isSignupEnabled;
      this._showAsButton = value.showAsButton;
    }
  }

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
}

export class OrganizationConnectionsEnabledConnectionsList extends cdktf.ComplexList {
  public internalValue? : OrganizationConnectionsEnabledConnections[] | cdktf.IResolvable

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
  public get(index: number): OrganizationConnectionsEnabledConnectionsOutputReference {
    return new OrganizationConnectionsEnabledConnectionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/organization_connections auth0_organization_connections}
*/
export class OrganizationConnections extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "auth0_organization_connections";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OrganizationConnections resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OrganizationConnections to import
  * @param importFromId The id of the existing OrganizationConnections that should be imported. Refer to the {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/organization_connections#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OrganizationConnections to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "auth0_organization_connections", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/organization_connections auth0_organization_connections} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrganizationConnectionsConfig
  */
  public constructor(scope: Construct, id: string, config: OrganizationConnectionsConfig) {
    super(scope, id, {
      terraformResourceType: 'auth0_organization_connections',
      terraformGeneratorMetadata: {
        providerName: 'auth0',
        providerVersion: '1.36.0',
        providerVersionConstraint: '1.36.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._organizationId = config.organizationId;
    this._enabledConnections.internalValue = config.enabledConnections;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // enabled_connections - computed: false, optional: false, required: true
  private _enabledConnections = new OrganizationConnectionsEnabledConnectionsList(this, "enabled_connections", true);
  public get enabledConnections() {
    return this._enabledConnections;
  }
  public putEnabledConnections(value: OrganizationConnectionsEnabledConnections[] | cdktf.IResolvable) {
    this._enabledConnections.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledConnectionsInput() {
    return this._enabledConnections.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      organization_id: cdktf.stringToTerraform(this._organizationId),
      enabled_connections: cdktf.listMapper(organizationConnectionsEnabledConnectionsToTerraform, true)(this._enabledConnections.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      organization_id: {
        value: cdktf.stringToHclTerraform(this._organizationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled_connections: {
        value: cdktf.listMapperHcl(organizationConnectionsEnabledConnectionsToHclTerraform, true)(this._enabledConnections.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "OrganizationConnectionsEnabledConnectionsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
