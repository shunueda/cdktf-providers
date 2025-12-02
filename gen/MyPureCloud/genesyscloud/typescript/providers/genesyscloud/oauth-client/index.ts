// https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/oauth_client
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OauthClientConfig extends cdktf.TerraformMetaArguments {
  /**
  * The number of seconds, between 5mins and 48hrs, until tokens created with this client expire. Only clients using Genesys Cloud SCIM (Identity Management) can have a maximum duration of 38880000secs/450 days. Defaults to `86400`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/oauth_client#access_token_validity_seconds OauthClient#access_token_validity_seconds}
  */
  readonly accessTokenValiditySeconds?: number;
  /**
  * The OAuth Grant/Client type supported by this client (CODE | TOKEN | SAML2-BEARER | PASSWORD | CLIENT-CREDENTIALS).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/oauth_client#authorized_grant_type OauthClient#authorized_grant_type}
  */
  readonly authorizedGrantType: string;
  /**
  * Place holder that can be referred in integration_credential fields. Sensitive info. Only populated when expose_client_secret is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/oauth_client#client_secret OauthClient#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * The description of the OAuth client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/oauth_client#description OauthClient#description}
  */
  readonly description?: string;
  /**
  * Directory where the secret can be stored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/oauth_client#directory_client_secret OauthClient#directory_client_secret}
  */
  readonly directoryClientSecret?: string;
  /**
  * Set this attribute to true to expose the client_secret as a sensitive output. This stores the secret in the Terraform state Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/oauth_client#expose_client_secret OauthClient#expose_client_secret}
  */
  readonly exposeClientSecret?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/oauth_client#id OauthClient#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Optionally, a Name of a Integration Credential (with credential type pureCloudOAuthClient) to be created using this new OAuth Client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/oauth_client#integration_credential_name OauthClient#integration_credential_name}
  */
  readonly integrationCredentialName?: string;
  /**
  * The name of the OAuth client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/oauth_client#name OauthClient#name}
  */
  readonly name: string;
  /**
  * List of allowed callbacks for this client. For example: https://myapp.example.com/auth/callback.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/oauth_client#registered_redirect_uris OauthClient#registered_redirect_uris}
  */
  readonly registeredRedirectUris?: string[];
  /**
  * The scopes requested by this client. Scopes must be set for clients not using the CLIENT-CREDENTIALS grant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/oauth_client#scopes OauthClient#scopes}
  */
  readonly scopes?: string[];
  /**
  * The state of the OAuth client (active | inactive). Access tokens cannot be created with inactive clients. Defaults to `active`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/oauth_client#state OauthClient#state}
  */
  readonly state?: string;
  /**
  * roles block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/oauth_client#roles OauthClient#roles}
  */
  readonly roles?: OauthClientRoles[] | cdktf.IResolvable;
}
export interface OauthClientRoles {
  /**
  * Division associated with the given role which forms a grant. If not set, the home division will be used. '*' may be set for all divisions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/oauth_client#division_id OauthClient#division_id}
  */
  readonly divisionId?: string;
  /**
  * Role to be associated with the given division which forms a grant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/oauth_client#role_id OauthClient#role_id}
  */
  readonly roleId: string;
}

export function oauthClientRolesToTerraform(struct?: OauthClientRoles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    division_id: cdktf.stringToTerraform(struct!.divisionId),
    role_id: cdktf.stringToTerraform(struct!.roleId),
  }
}


export function oauthClientRolesToHclTerraform(struct?: OauthClientRoles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    division_id: {
      value: cdktf.stringToHclTerraform(struct!.divisionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_id: {
      value: cdktf.stringToHclTerraform(struct!.roleId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OauthClientRolesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OauthClientRoles | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._divisionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.divisionId = this._divisionId;
    }
    if (this._roleId !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleId = this._roleId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OauthClientRoles | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._divisionId = undefined;
      this._roleId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._divisionId = value.divisionId;
      this._roleId = value.roleId;
    }
  }

  // division_id - computed: true, optional: true, required: false
  private _divisionId?: string; 
  public get divisionId() {
    return this.getStringAttribute('division_id');
  }
  public set divisionId(value: string) {
    this._divisionId = value;
  }
  public resetDivisionId() {
    this._divisionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get divisionIdInput() {
    return this._divisionId;
  }

  // role_id - computed: false, optional: false, required: true
  private _roleId?: string; 
  public get roleId() {
    return this.getStringAttribute('role_id');
  }
  public set roleId(value: string) {
    this._roleId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleIdInput() {
    return this._roleId;
  }
}

export class OauthClientRolesList extends cdktf.ComplexList {
  public internalValue? : OauthClientRoles[] | cdktf.IResolvable

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
  public get(index: number): OauthClientRolesOutputReference {
    return new OauthClientRolesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/oauth_client genesyscloud_oauth_client}
*/
export class OauthClient extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "genesyscloud_oauth_client";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OauthClient resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OauthClient to import
  * @param importFromId The id of the existing OauthClient that should be imported. Refer to the {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/oauth_client#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OauthClient to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "genesyscloud_oauth_client", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/oauth_client genesyscloud_oauth_client} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OauthClientConfig
  */
  public constructor(scope: Construct, id: string, config: OauthClientConfig) {
    super(scope, id, {
      terraformResourceType: 'genesyscloud_oauth_client',
      terraformGeneratorMetadata: {
        providerName: 'genesyscloud',
        providerVersion: '1.72.2',
        providerVersionConstraint: '1.72.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessTokenValiditySeconds = config.accessTokenValiditySeconds;
    this._authorizedGrantType = config.authorizedGrantType;
    this._clientSecret = config.clientSecret;
    this._description = config.description;
    this._directoryClientSecret = config.directoryClientSecret;
    this._exposeClientSecret = config.exposeClientSecret;
    this._id = config.id;
    this._integrationCredentialName = config.integrationCredentialName;
    this._name = config.name;
    this._registeredRedirectUris = config.registeredRedirectUris;
    this._scopes = config.scopes;
    this._state = config.state;
    this._roles.internalValue = config.roles;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_token_validity_seconds - computed: false, optional: true, required: false
  private _accessTokenValiditySeconds?: number; 
  public get accessTokenValiditySeconds() {
    return this.getNumberAttribute('access_token_validity_seconds');
  }
  public set accessTokenValiditySeconds(value: number) {
    this._accessTokenValiditySeconds = value;
  }
  public resetAccessTokenValiditySeconds() {
    this._accessTokenValiditySeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenValiditySecondsInput() {
    return this._accessTokenValiditySeconds;
  }

  // authorized_grant_type - computed: false, optional: false, required: true
  private _authorizedGrantType?: string; 
  public get authorizedGrantType() {
    return this.getStringAttribute('authorized_grant_type');
  }
  public set authorizedGrantType(value: string) {
    this._authorizedGrantType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizedGrantTypeInput() {
    return this._authorizedGrantType;
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // client_secret - computed: true, optional: true, required: false
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  public resetClientSecret() {
    this._clientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // directory_client_secret - computed: false, optional: true, required: false
  private _directoryClientSecret?: string; 
  public get directoryClientSecret() {
    return this.getStringAttribute('directory_client_secret');
  }
  public set directoryClientSecret(value: string) {
    this._directoryClientSecret = value;
  }
  public resetDirectoryClientSecret() {
    this._directoryClientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryClientSecretInput() {
    return this._directoryClientSecret;
  }

  // expose_client_secret - computed: false, optional: true, required: false
  private _exposeClientSecret?: boolean | cdktf.IResolvable; 
  public get exposeClientSecret() {
    return this.getBooleanAttribute('expose_client_secret');
  }
  public set exposeClientSecret(value: boolean | cdktf.IResolvable) {
    this._exposeClientSecret = value;
  }
  public resetExposeClientSecret() {
    this._exposeClientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exposeClientSecretInput() {
    return this._exposeClientSecret;
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

  // integration_credential_id - computed: true, optional: false, required: false
  public get integrationCredentialId() {
    return this.getStringAttribute('integration_credential_id');
  }

  // integration_credential_name - computed: false, optional: true, required: false
  private _integrationCredentialName?: string; 
  public get integrationCredentialName() {
    return this.getStringAttribute('integration_credential_name');
  }
  public set integrationCredentialName(value: string) {
    this._integrationCredentialName = value;
  }
  public resetIntegrationCredentialName() {
    this._integrationCredentialName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationCredentialNameInput() {
    return this._integrationCredentialName;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // registered_redirect_uris - computed: false, optional: true, required: false
  private _registeredRedirectUris?: string[]; 
  public get registeredRedirectUris() {
    return cdktf.Fn.tolist(this.getListAttribute('registered_redirect_uris'));
  }
  public set registeredRedirectUris(value: string[]) {
    this._registeredRedirectUris = value;
  }
  public resetRegisteredRedirectUris() {
    this._registeredRedirectUris = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registeredRedirectUrisInput() {
    return this._registeredRedirectUris;
  }

  // scopes - computed: false, optional: true, required: false
  private _scopes?: string[]; 
  public get scopes() {
    return cdktf.Fn.tolist(this.getListAttribute('scopes'));
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }
  public resetScopes() {
    this._scopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // roles - computed: false, optional: true, required: false
  private _roles = new OauthClientRolesList(this, "roles", true);
  public get roles() {
    return this._roles;
  }
  public putRoles(value: OauthClientRoles[] | cdktf.IResolvable) {
    this._roles.internalValue = value;
  }
  public resetRoles() {
    this._roles.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesInput() {
    return this._roles.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_token_validity_seconds: cdktf.numberToTerraform(this._accessTokenValiditySeconds),
      authorized_grant_type: cdktf.stringToTerraform(this._authorizedGrantType),
      client_secret: cdktf.stringToTerraform(this._clientSecret),
      description: cdktf.stringToTerraform(this._description),
      directory_client_secret: cdktf.stringToTerraform(this._directoryClientSecret),
      expose_client_secret: cdktf.booleanToTerraform(this._exposeClientSecret),
      id: cdktf.stringToTerraform(this._id),
      integration_credential_name: cdktf.stringToTerraform(this._integrationCredentialName),
      name: cdktf.stringToTerraform(this._name),
      registered_redirect_uris: cdktf.listMapper(cdktf.stringToTerraform, false)(this._registeredRedirectUris),
      scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._scopes),
      state: cdktf.stringToTerraform(this._state),
      roles: cdktf.listMapper(oauthClientRolesToTerraform, true)(this._roles.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_token_validity_seconds: {
        value: cdktf.numberToHclTerraform(this._accessTokenValiditySeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      authorized_grant_type: {
        value: cdktf.stringToHclTerraform(this._authorizedGrantType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_secret: {
        value: cdktf.stringToHclTerraform(this._clientSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      directory_client_secret: {
        value: cdktf.stringToHclTerraform(this._directoryClientSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      expose_client_secret: {
        value: cdktf.booleanToHclTerraform(this._exposeClientSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      integration_credential_name: {
        value: cdktf.stringToHclTerraform(this._integrationCredentialName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      registered_redirect_uris: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._registeredRedirectUris),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      scopes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._scopes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      roles: {
        value: cdktf.listMapperHcl(oauthClientRolesToHclTerraform, true)(this._roles.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "OauthClientRolesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
