// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_user_scim
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectUserScimConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_user_scim#adom ObjectUserScim#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_user_scim#auth_method ObjectUserScim#auth_method}
  */
  readonly authMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_user_scim#base_url ObjectUserScim#base_url}
  */
  readonly baseUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_user_scim#cascade ObjectUserScim#cascade}
  */
  readonly cascade?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_user_scim#certificate ObjectUserScim#certificate}
  */
  readonly certificate?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_user_scim#client_authentication_method ObjectUserScim#client_authentication_method}
  */
  readonly clientAuthenticationMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_user_scim#client_identity_check ObjectUserScim#client_identity_check}
  */
  readonly clientIdentityCheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_user_scim#client_secret_token ObjectUserScim#client_secret_token}
  */
  readonly clientSecretToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_user_scim#fosid ObjectUserScim#fosid}
  */
  readonly fosid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_user_scim#id ObjectUserScim#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_user_scim#name ObjectUserScim#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_user_scim#scopetype ObjectUserScim#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_user_scim#secret ObjectUserScim#secret}
  */
  readonly secret?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_user_scim#status ObjectUserScim#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_user_scim#token_certificate ObjectUserScim#token_certificate}
  */
  readonly tokenCertificate?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_user_scim fortimanager_object_user_scim}
*/
export class ObjectUserScim extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_user_scim";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectUserScim resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectUserScim to import
  * @param importFromId The id of the existing ObjectUserScim that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_user_scim#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectUserScim to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_user_scim", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_user_scim fortimanager_object_user_scim} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectUserScimConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ObjectUserScimConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_user_scim',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.15.0',
        providerVersionConstraint: '1.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adom = config.adom;
    this._authMethod = config.authMethod;
    this._baseUrl = config.baseUrl;
    this._cascade = config.cascade;
    this._certificate = config.certificate;
    this._clientAuthenticationMethod = config.clientAuthenticationMethod;
    this._clientIdentityCheck = config.clientIdentityCheck;
    this._clientSecretToken = config.clientSecretToken;
    this._fosid = config.fosid;
    this._id = config.id;
    this._name = config.name;
    this._scopetype = config.scopetype;
    this._secret = config.secret;
    this._status = config.status;
    this._tokenCertificate = config.tokenCertificate;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adom - computed: false, optional: true, required: false
  private _adom?: string; 
  public get adom() {
    return this.getStringAttribute('adom');
  }
  public set adom(value: string) {
    this._adom = value;
  }
  public resetAdom() {
    this._adom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adomInput() {
    return this._adom;
  }

  // auth_method - computed: true, optional: true, required: false
  private _authMethod?: string; 
  public get authMethod() {
    return this.getStringAttribute('auth_method');
  }
  public set authMethod(value: string) {
    this._authMethod = value;
  }
  public resetAuthMethod() {
    this._authMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authMethodInput() {
    return this._authMethod;
  }

  // base_url - computed: false, optional: true, required: false
  private _baseUrl?: string; 
  public get baseUrl() {
    return this.getStringAttribute('base_url');
  }
  public set baseUrl(value: string) {
    this._baseUrl = value;
  }
  public resetBaseUrl() {
    this._baseUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseUrlInput() {
    return this._baseUrl;
  }

  // cascade - computed: true, optional: true, required: false
  private _cascade?: string; 
  public get cascade() {
    return this.getStringAttribute('cascade');
  }
  public set cascade(value: string) {
    this._cascade = value;
  }
  public resetCascade() {
    this._cascade = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cascadeInput() {
    return this._cascade;
  }

  // certificate - computed: true, optional: true, required: false
  private _certificate?: string[]; 
  public get certificate() {
    return cdktf.Fn.tolist(this.getListAttribute('certificate'));
  }
  public set certificate(value: string[]) {
    this._certificate = value;
  }
  public resetCertificate() {
    this._certificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate;
  }

  // client_authentication_method - computed: true, optional: true, required: false
  private _clientAuthenticationMethod?: string; 
  public get clientAuthenticationMethod() {
    return this.getStringAttribute('client_authentication_method');
  }
  public set clientAuthenticationMethod(value: string) {
    this._clientAuthenticationMethod = value;
  }
  public resetClientAuthenticationMethod() {
    this._clientAuthenticationMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientAuthenticationMethodInput() {
    return this._clientAuthenticationMethod;
  }

  // client_identity_check - computed: true, optional: true, required: false
  private _clientIdentityCheck?: string; 
  public get clientIdentityCheck() {
    return this.getStringAttribute('client_identity_check');
  }
  public set clientIdentityCheck(value: string) {
    this._clientIdentityCheck = value;
  }
  public resetClientIdentityCheck() {
    this._clientIdentityCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdentityCheckInput() {
    return this._clientIdentityCheck;
  }

  // client_secret_token - computed: true, optional: true, required: false
  private _clientSecretToken?: string; 
  public get clientSecretToken() {
    return this.getStringAttribute('client_secret_token');
  }
  public set clientSecretToken(value: string) {
    this._clientSecretToken = value;
  }
  public resetClientSecretToken() {
    this._clientSecretToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretTokenInput() {
    return this._clientSecretToken;
  }

  // fosid - computed: false, optional: true, required: false
  private _fosid?: number; 
  public get fosid() {
    return this.getNumberAttribute('fosid');
  }
  public set fosid(value: number) {
    this._fosid = value;
  }
  public resetFosid() {
    this._fosid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fosidInput() {
    return this._fosid;
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

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // scopetype - computed: false, optional: true, required: false
  private _scopetype?: string; 
  public get scopetype() {
    return this.getStringAttribute('scopetype');
  }
  public set scopetype(value: string) {
    this._scopetype = value;
  }
  public resetScopetype() {
    this._scopetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopetypeInput() {
    return this._scopetype;
  }

  // secret - computed: true, optional: true, required: false
  private _secret?: string[]; 
  public get secret() {
    return cdktf.Fn.tolist(this.getListAttribute('secret'));
  }
  public set secret(value: string[]) {
    this._secret = value;
  }
  public resetSecret() {
    this._secret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // token_certificate - computed: true, optional: true, required: false
  private _tokenCertificate?: string[]; 
  public get tokenCertificate() {
    return cdktf.Fn.tolist(this.getListAttribute('token_certificate'));
  }
  public set tokenCertificate(value: string[]) {
    this._tokenCertificate = value;
  }
  public resetTokenCertificate() {
    this._tokenCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenCertificateInput() {
    return this._tokenCertificate;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adom: cdktf.stringToTerraform(this._adom),
      auth_method: cdktf.stringToTerraform(this._authMethod),
      base_url: cdktf.stringToTerraform(this._baseUrl),
      cascade: cdktf.stringToTerraform(this._cascade),
      certificate: cdktf.listMapper(cdktf.stringToTerraform, false)(this._certificate),
      client_authentication_method: cdktf.stringToTerraform(this._clientAuthenticationMethod),
      client_identity_check: cdktf.stringToTerraform(this._clientIdentityCheck),
      client_secret_token: cdktf.stringToTerraform(this._clientSecretToken),
      fosid: cdktf.numberToTerraform(this._fosid),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      secret: cdktf.listMapper(cdktf.stringToTerraform, false)(this._secret),
      status: cdktf.stringToTerraform(this._status),
      token_certificate: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tokenCertificate),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      adom: {
        value: cdktf.stringToHclTerraform(this._adom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_method: {
        value: cdktf.stringToHclTerraform(this._authMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      base_url: {
        value: cdktf.stringToHclTerraform(this._baseUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cascade: {
        value: cdktf.stringToHclTerraform(this._cascade),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certificate: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._certificate),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      client_authentication_method: {
        value: cdktf.stringToHclTerraform(this._clientAuthenticationMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_identity_check: {
        value: cdktf.stringToHclTerraform(this._clientIdentityCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_secret_token: {
        value: cdktf.stringToHclTerraform(this._clientSecretToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fosid: {
        value: cdktf.numberToHclTerraform(this._fosid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secret: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._secret),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      token_certificate: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tokenCertificate),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
