// https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/connect_mdm_oauth_client
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConnectMdmOauthClientConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/connect_mdm_oauth_client#application_id ConnectMdmOauthClient#application_id}
  */
  readonly applicationId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/connect_mdm_oauth_client#bootstrap_client_default_scopes ConnectMdmOauthClient#bootstrap_client_default_scopes}
  */
  readonly bootstrapClientDefaultScopes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/connect_mdm_oauth_client#bootstrap_client_iam_default_scopes ConnectMdmOauthClient#bootstrap_client_iam_default_scopes}
  */
  readonly bootstrapClientIamDefaultScopes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/connect_mdm_oauth_client#bootstrap_client_iam_scopes ConnectMdmOauthClient#bootstrap_client_iam_scopes}
  */
  readonly bootstrapClientIamScopes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/connect_mdm_oauth_client#bootstrap_client_scopes ConnectMdmOauthClient#bootstrap_client_scopes}
  */
  readonly bootstrapClientScopes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/connect_mdm_oauth_client#client_revoked ConnectMdmOauthClient#client_revoked}
  */
  readonly clientRevoked?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/connect_mdm_oauth_client#default_scopes ConnectMdmOauthClient#default_scopes}
  */
  readonly defaultScopes: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/connect_mdm_oauth_client#description ConnectMdmOauthClient#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/connect_mdm_oauth_client#global_reference_id ConnectMdmOauthClient#global_reference_id}
  */
  readonly globalReferenceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/connect_mdm_oauth_client#iam_default_scopes ConnectMdmOauthClient#iam_default_scopes}
  */
  readonly iamDefaultScopes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/connect_mdm_oauth_client#iam_scopes ConnectMdmOauthClient#iam_scopes}
  */
  readonly iamScopes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/connect_mdm_oauth_client#id ConnectMdmOauthClient#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/connect_mdm_oauth_client#name ConnectMdmOauthClient#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/connect_mdm_oauth_client#redirection_uris ConnectMdmOauthClient#redirection_uris}
  */
  readonly redirectionUris: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/connect_mdm_oauth_client#response_types ConnectMdmOauthClient#response_types}
  */
  readonly responseTypes: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/connect_mdm_oauth_client#scopes ConnectMdmOauthClient#scopes}
  */
  readonly scopes: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/connect_mdm_oauth_client#user_client ConnectMdmOauthClient#user_client}
  */
  readonly userClient?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/connect_mdm_oauth_client hsdp_connect_mdm_oauth_client}
*/
export class ConnectMdmOauthClient extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hsdp_connect_mdm_oauth_client";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConnectMdmOauthClient resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConnectMdmOauthClient to import
  * @param importFromId The id of the existing ConnectMdmOauthClient that should be imported. Refer to the {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/connect_mdm_oauth_client#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConnectMdmOauthClient to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "hsdp_connect_mdm_oauth_client", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/connect_mdm_oauth_client hsdp_connect_mdm_oauth_client} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConnectMdmOauthClientConfig
  */
  public constructor(scope: Construct, id: string, config: ConnectMdmOauthClientConfig) {
    super(scope, id, {
      terraformResourceType: 'hsdp_connect_mdm_oauth_client',
      terraformGeneratorMetadata: {
        providerName: 'hsdp',
        providerVersion: '0.71.0',
        providerVersionConstraint: '0.71.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._applicationId = config.applicationId;
    this._bootstrapClientDefaultScopes = config.bootstrapClientDefaultScopes;
    this._bootstrapClientIamDefaultScopes = config.bootstrapClientIamDefaultScopes;
    this._bootstrapClientIamScopes = config.bootstrapClientIamScopes;
    this._bootstrapClientScopes = config.bootstrapClientScopes;
    this._clientRevoked = config.clientRevoked;
    this._defaultScopes = config.defaultScopes;
    this._description = config.description;
    this._globalReferenceId = config.globalReferenceId;
    this._iamDefaultScopes = config.iamDefaultScopes;
    this._iamScopes = config.iamScopes;
    this._id = config.id;
    this._name = config.name;
    this._redirectionUris = config.redirectionUris;
    this._responseTypes = config.responseTypes;
    this._scopes = config.scopes;
    this._userClient = config.userClient;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // bootstrap_client_default_scopes - computed: false, optional: true, required: false
  private _bootstrapClientDefaultScopes?: string[]; 
  public get bootstrapClientDefaultScopes() {
    return cdktf.Fn.tolist(this.getListAttribute('bootstrap_client_default_scopes'));
  }
  public set bootstrapClientDefaultScopes(value: string[]) {
    this._bootstrapClientDefaultScopes = value;
  }
  public resetBootstrapClientDefaultScopes() {
    this._bootstrapClientDefaultScopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootstrapClientDefaultScopesInput() {
    return this._bootstrapClientDefaultScopes;
  }

  // bootstrap_client_guid - computed: true, optional: false, required: false
  public get bootstrapClientGuid() {
    return this.getStringAttribute('bootstrap_client_guid');
  }

  // bootstrap_client_guid_system - computed: true, optional: false, required: false
  public get bootstrapClientGuidSystem() {
    return this.getStringAttribute('bootstrap_client_guid_system');
  }

  // bootstrap_client_guid_value - computed: true, optional: false, required: false
  public get bootstrapClientGuidValue() {
    return this.getStringAttribute('bootstrap_client_guid_value');
  }

  // bootstrap_client_iam_default_scopes - computed: false, optional: true, required: false
  private _bootstrapClientIamDefaultScopes?: string[]; 
  public get bootstrapClientIamDefaultScopes() {
    return cdktf.Fn.tolist(this.getListAttribute('bootstrap_client_iam_default_scopes'));
  }
  public set bootstrapClientIamDefaultScopes(value: string[]) {
    this._bootstrapClientIamDefaultScopes = value;
  }
  public resetBootstrapClientIamDefaultScopes() {
    this._bootstrapClientIamDefaultScopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootstrapClientIamDefaultScopesInput() {
    return this._bootstrapClientIamDefaultScopes;
  }

  // bootstrap_client_iam_scopes - computed: false, optional: true, required: false
  private _bootstrapClientIamScopes?: string[]; 
  public get bootstrapClientIamScopes() {
    return cdktf.Fn.tolist(this.getListAttribute('bootstrap_client_iam_scopes'));
  }
  public set bootstrapClientIamScopes(value: string[]) {
    this._bootstrapClientIamScopes = value;
  }
  public resetBootstrapClientIamScopes() {
    this._bootstrapClientIamScopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootstrapClientIamScopesInput() {
    return this._bootstrapClientIamScopes;
  }

  // bootstrap_client_id - computed: true, optional: false, required: false
  public get bootstrapClientId() {
    return this.getStringAttribute('bootstrap_client_id');
  }

  // bootstrap_client_scopes - computed: false, optional: true, required: false
  private _bootstrapClientScopes?: string[]; 
  public get bootstrapClientScopes() {
    return cdktf.Fn.tolist(this.getListAttribute('bootstrap_client_scopes'));
  }
  public set bootstrapClientScopes(value: string[]) {
    this._bootstrapClientScopes = value;
  }
  public resetBootstrapClientScopes() {
    this._bootstrapClientScopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootstrapClientScopesInput() {
    return this._bootstrapClientScopes;
  }

  // bootstrap_client_secret - computed: true, optional: false, required: false
  public get bootstrapClientSecret() {
    return this.getStringAttribute('bootstrap_client_secret');
  }

  // client_guid - computed: true, optional: false, required: false
  public get clientGuid() {
    return this.getStringAttribute('client_guid');
  }

  // client_guid_system - computed: true, optional: false, required: false
  public get clientGuidSystem() {
    return this.getStringAttribute('client_guid_system');
  }

  // client_guid_value - computed: true, optional: false, required: false
  public get clientGuidValue() {
    return this.getStringAttribute('client_guid_value');
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // client_revoked - computed: false, optional: true, required: false
  private _clientRevoked?: boolean | cdktf.IResolvable; 
  public get clientRevoked() {
    return this.getBooleanAttribute('client_revoked');
  }
  public set clientRevoked(value: boolean | cdktf.IResolvable) {
    this._clientRevoked = value;
  }
  public resetClientRevoked() {
    this._clientRevoked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientRevokedInput() {
    return this._clientRevoked;
  }

  // client_secret - computed: true, optional: false, required: false
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
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

  // guid - computed: true, optional: false, required: false
  public get guid() {
    return this.getStringAttribute('guid');
  }

  // iam_default_scopes - computed: false, optional: true, required: false
  private _iamDefaultScopes?: string[]; 
  public get iamDefaultScopes() {
    return cdktf.Fn.tolist(this.getListAttribute('iam_default_scopes'));
  }
  public set iamDefaultScopes(value: string[]) {
    this._iamDefaultScopes = value;
  }
  public resetIamDefaultScopes() {
    this._iamDefaultScopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamDefaultScopesInput() {
    return this._iamDefaultScopes;
  }

  // iam_scopes - computed: false, optional: true, required: false
  private _iamScopes?: string[]; 
  public get iamScopes() {
    return cdktf.Fn.tolist(this.getListAttribute('iam_scopes'));
  }
  public set iamScopes(value: string[]) {
    this._iamScopes = value;
  }
  public resetIamScopes() {
    this._iamScopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamScopesInput() {
    return this._iamScopes;
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

  // user_client - computed: false, optional: true, required: false
  private _userClient?: boolean | cdktf.IResolvable; 
  public get userClient() {
    return this.getBooleanAttribute('user_client');
  }
  public set userClient(value: boolean | cdktf.IResolvable) {
    this._userClient = value;
  }
  public resetUserClient() {
    this._userClient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userClientInput() {
    return this._userClient;
  }

  // version_id - computed: true, optional: false, required: false
  public get versionId() {
    return this.getStringAttribute('version_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_id: cdktf.stringToTerraform(this._applicationId),
      bootstrap_client_default_scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._bootstrapClientDefaultScopes),
      bootstrap_client_iam_default_scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._bootstrapClientIamDefaultScopes),
      bootstrap_client_iam_scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._bootstrapClientIamScopes),
      bootstrap_client_scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._bootstrapClientScopes),
      client_revoked: cdktf.booleanToTerraform(this._clientRevoked),
      default_scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._defaultScopes),
      description: cdktf.stringToTerraform(this._description),
      global_reference_id: cdktf.stringToTerraform(this._globalReferenceId),
      iam_default_scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._iamDefaultScopes),
      iam_scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._iamScopes),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      redirection_uris: cdktf.listMapper(cdktf.stringToTerraform, false)(this._redirectionUris),
      response_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._responseTypes),
      scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._scopes),
      user_client: cdktf.booleanToTerraform(this._userClient),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_id: {
        value: cdktf.stringToHclTerraform(this._applicationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bootstrap_client_default_scopes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._bootstrapClientDefaultScopes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      bootstrap_client_iam_default_scopes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._bootstrapClientIamDefaultScopes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      bootstrap_client_iam_scopes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._bootstrapClientIamScopes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      bootstrap_client_scopes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._bootstrapClientScopes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      client_revoked: {
        value: cdktf.booleanToHclTerraform(this._clientRevoked),
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
      iam_default_scopes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._iamDefaultScopes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      iam_scopes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._iamScopes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      redirection_uris: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._redirectionUris),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
      user_client: {
        value: cdktf.booleanToHclTerraform(this._userClient),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
