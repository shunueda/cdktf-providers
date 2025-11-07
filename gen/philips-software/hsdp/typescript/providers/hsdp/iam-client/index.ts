// https://registry.terraform.io/providers/philips-software/hsdp/0.70.0/docs/resources/iam_client
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IamClientConfig extends cdktf.TerraformMetaArguments {
  /**
  * Lifetime of the access token in seconds. If not specified, system default life time (1800 secs) will be considered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.70.0/docs/resources/iam_client#access_token_lifetime IamClient#access_token_lifetime}
  */
  readonly accessTokenLifetime?: number;
  /**
  * The application ID to attach this client to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.70.0/docs/resources/iam_client#application_id IamClient#application_id}
  */
  readonly applicationId: string;
  /**
  * The client id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.70.0/docs/resources/iam_client#client_id IamClient#client_id}
  */
  readonly clientId: string;
  /**
  * Flag when enabled, the resource owner will not be asked for consent during authorization flows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.70.0/docs/resources/iam_client#consent_implied IamClient#consent_implied}
  */
  readonly consentImplied?: boolean | cdktf.IResolvable;
  /**
  * Default scopes. You do not have to specify these explicitly when requesting a token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.70.0/docs/resources/iam_client#default_scopes IamClient#default_scopes}
  */
  readonly defaultScopes: string[];
  /**
  * The description of the client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.70.0/docs/resources/iam_client#description IamClient#description}
  */
  readonly description: string;
  /**
  * Reference identifier defined by the provisioning user. This reference Identifier will be carried over to identify the provisioned resource across deployment instances.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.70.0/docs/resources/iam_client#global_reference_id IamClient#global_reference_id}
  */
  readonly globalReferenceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.70.0/docs/resources/iam_client#id IamClient#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Lifetime of the jwt token generated in case openid scope is enabled for the client. If not specified, system default life time (3600 secs) will be considered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.70.0/docs/resources/iam_client#id_token_lifetime IamClient#id_token_lifetime}
  */
  readonly idTokenLifetime?: number;
  /**
  * Name of the client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.70.0/docs/resources/iam_client#name IamClient#name}
  */
  readonly name: string;
  /**
  * The password to use (8-16 chars, at least one capital, number, special char).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.70.0/docs/resources/iam_client#password IamClient#password}
  */
  readonly password: string;
  /**
  * List of valid RedirectionURIs for this client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.70.0/docs/resources/iam_client#redirection_uris IamClient#redirection_uris}
  */
  readonly redirectionUris: string[];
  /**
  * Lifetime of the refresh token in seconds. If not specified, system default life time (2592000 secs) will be considered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.70.0/docs/resources/iam_client#refresh_token_lifetime IamClient#refresh_token_lifetime}
  */
  readonly refreshTokenLifetime?: number;
  /**
  * Examples of response types are 'code id_token', 'token id_token', etc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.70.0/docs/resources/iam_client#response_types IamClient#response_types}
  */
  readonly responseTypes: string[];
  /**
  * List of supported scopes for this client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.70.0/docs/resources/iam_client#scopes IamClient#scopes}
  */
  readonly scopes: string[];
  /**
  * The type of the client. Either 'Public' or 'Confidential'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.70.0/docs/resources/iam_client#type IamClient#type}
  */
  readonly type: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/philips-software/hsdp/0.70.0/docs/resources/iam_client hsdp_iam_client}
*/
export class IamClient extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hsdp_iam_client";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IamClient resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IamClient to import
  * @param importFromId The id of the existing IamClient that should be imported. Refer to the {@link https://registry.terraform.io/providers/philips-software/hsdp/0.70.0/docs/resources/iam_client#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IamClient to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "hsdp_iam_client", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/philips-software/hsdp/0.70.0/docs/resources/iam_client hsdp_iam_client} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IamClientConfig
  */
  public constructor(scope: Construct, id: string, config: IamClientConfig) {
    super(scope, id, {
      terraformResourceType: 'hsdp_iam_client',
      terraformGeneratorMetadata: {
        providerName: 'hsdp',
        providerVersion: '0.70.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessTokenLifetime = config.accessTokenLifetime;
    this._applicationId = config.applicationId;
    this._clientId = config.clientId;
    this._consentImplied = config.consentImplied;
    this._defaultScopes = config.defaultScopes;
    this._description = config.description;
    this._globalReferenceId = config.globalReferenceId;
    this._id = config.id;
    this._idTokenLifetime = config.idTokenLifetime;
    this._name = config.name;
    this._password = config.password;
    this._redirectionUris = config.redirectionUris;
    this._refreshTokenLifetime = config.refreshTokenLifetime;
    this._responseTypes = config.responseTypes;
    this._scopes = config.scopes;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_token_lifetime - computed: false, optional: true, required: false
  private _accessTokenLifetime?: number; 
  public get accessTokenLifetime() {
    return this.getNumberAttribute('access_token_lifetime');
  }
  public set accessTokenLifetime(value: number) {
    this._accessTokenLifetime = value;
  }
  public resetAccessTokenLifetime() {
    this._accessTokenLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenLifetimeInput() {
    return this._accessTokenLifetime;
  }

  // application_id - computed: false, optional: false, required: true
  private _applicationId?: string; 
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }
  public set applicationId(value: string) {
    this._applicationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdInput() {
    return this._applicationId;
  }

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

  // consent_implied - computed: false, optional: true, required: false
  private _consentImplied?: boolean | cdktf.IResolvable; 
  public get consentImplied() {
    return this.getBooleanAttribute('consent_implied');
  }
  public set consentImplied(value: boolean | cdktf.IResolvable) {
    this._consentImplied = value;
  }
  public resetConsentImplied() {
    this._consentImplied = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consentImpliedInput() {
    return this._consentImplied;
  }

  // default_scopes - computed: false, optional: false, required: true
  private _defaultScopes?: string[]; 
  public get defaultScopes() {
    return cdktf.Fn.tolist(this.getListAttribute('default_scopes'));
  }
  public set defaultScopes(value: string[]) {
    this._defaultScopes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultScopesInput() {
    return this._defaultScopes;
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // disabled - computed: true, optional: false, required: false
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }

  // global_reference_id - computed: false, optional: false, required: true
  private _globalReferenceId?: string; 
  public get globalReferenceId() {
    return this.getStringAttribute('global_reference_id');
  }
  public set globalReferenceId(value: string) {
    this._globalReferenceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get globalReferenceIdInput() {
    return this._globalReferenceId;
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

  // id_token_lifetime - computed: false, optional: true, required: false
  private _idTokenLifetime?: number; 
  public get idTokenLifetime() {
    return this.getNumberAttribute('id_token_lifetime');
  }
  public set idTokenLifetime(value: number) {
    this._idTokenLifetime = value;
  }
  public resetIdTokenLifetime() {
    this._idTokenLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idTokenLifetimeInput() {
    return this._idTokenLifetime;
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

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // redirection_uris - computed: false, optional: false, required: true
  private _redirectionUris?: string[]; 
  public get redirectionUris() {
    return cdktf.Fn.tolist(this.getListAttribute('redirection_uris'));
  }
  public set redirectionUris(value: string[]) {
    this._redirectionUris = value;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectionUrisInput() {
    return this._redirectionUris;
  }

  // refresh_token_lifetime - computed: false, optional: true, required: false
  private _refreshTokenLifetime?: number; 
  public get refreshTokenLifetime() {
    return this.getNumberAttribute('refresh_token_lifetime');
  }
  public set refreshTokenLifetime(value: number) {
    this._refreshTokenLifetime = value;
  }
  public resetRefreshTokenLifetime() {
    this._refreshTokenLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshTokenLifetimeInput() {
    return this._refreshTokenLifetime;
  }

  // response_types - computed: false, optional: false, required: true
  private _responseTypes?: string[]; 
  public get responseTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('response_types'));
  }
  public set responseTypes(value: string[]) {
    this._responseTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get responseTypesInput() {
    return this._responseTypes;
  }

  // scopes - computed: false, optional: false, required: true
  private _scopes?: string[]; 
  public get scopes() {
    return cdktf.Fn.tolist(this.getListAttribute('scopes'));
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
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
      access_token_lifetime: cdktf.numberToTerraform(this._accessTokenLifetime),
      application_id: cdktf.stringToTerraform(this._applicationId),
      client_id: cdktf.stringToTerraform(this._clientId),
      consent_implied: cdktf.booleanToTerraform(this._consentImplied),
      default_scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._defaultScopes),
      description: cdktf.stringToTerraform(this._description),
      global_reference_id: cdktf.stringToTerraform(this._globalReferenceId),
      id: cdktf.stringToTerraform(this._id),
      id_token_lifetime: cdktf.numberToTerraform(this._idTokenLifetime),
      name: cdktf.stringToTerraform(this._name),
      password: cdktf.stringToTerraform(this._password),
      redirection_uris: cdktf.listMapper(cdktf.stringToTerraform, false)(this._redirectionUris),
      refresh_token_lifetime: cdktf.numberToTerraform(this._refreshTokenLifetime),
      response_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._responseTypes),
      scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._scopes),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_token_lifetime: {
        value: cdktf.numberToHclTerraform(this._accessTokenLifetime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      application_id: {
        value: cdktf.stringToHclTerraform(this._applicationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_id: {
        value: cdktf.stringToHclTerraform(this._clientId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      consent_implied: {
        value: cdktf.booleanToHclTerraform(this._consentImplied),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      default_scopes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._defaultScopes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      global_reference_id: {
        value: cdktf.stringToHclTerraform(this._globalReferenceId),
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
      id_token_lifetime: {
        value: cdktf.numberToHclTerraform(this._idTokenLifetime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      redirection_uris: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._redirectionUris),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      refresh_token_lifetime: {
        value: cdktf.numberToHclTerraform(this._refreshTokenLifetime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      response_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._responseTypes),
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
