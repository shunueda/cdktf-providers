// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/user_scim
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserScimConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/user_scim#auth_method UserScim#auth_method}
  */
  readonly authMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/user_scim#base_url UserScim#base_url}
  */
  readonly baseUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/user_scim#certificate UserScim#certificate}
  */
  readonly certificate?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/user_scim#client_authentication_method UserScim#client_authentication_method}
  */
  readonly clientAuthenticationMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/user_scim#client_identity_check UserScim#client_identity_check}
  */
  readonly clientIdentityCheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/user_scim#client_secret_token UserScim#client_secret_token}
  */
  readonly clientSecretToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/user_scim#device_name UserScim#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/user_scim#device_vdom UserScim#device_vdom}
  */
  readonly deviceVdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/user_scim#fosid UserScim#fosid}
  */
  readonly fosid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/user_scim#id UserScim#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/user_scim#name UserScim#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/user_scim#secret UserScim#secret}
  */
  readonly secret?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/user_scim#status UserScim#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/user_scim#token_certificate UserScim#token_certificate}
  */
  readonly tokenCertificate?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/user_scim fmgdevice_user_scim}
*/
export class UserScim extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_user_scim";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a UserScim resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the UserScim to import
  * @param importFromId The id of the existing UserScim that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/user_scim#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the UserScim to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_user_scim", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/user_scim fmgdevice_user_scim} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserScimConfig = {}
  */
  public constructor(scope: Construct, id: string, config: UserScimConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_user_scim',
      terraformGeneratorMetadata: {
        providerName: 'fmgdevice',
        providerVersion: '1.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authMethod = config.authMethod;
    this._baseUrl = config.baseUrl;
    this._certificate = config.certificate;
    this._clientAuthenticationMethod = config.clientAuthenticationMethod;
    this._clientIdentityCheck = config.clientIdentityCheck;
    this._clientSecretToken = config.clientSecretToken;
    this._deviceName = config.deviceName;
    this._deviceVdom = config.deviceVdom;
    this._fosid = config.fosid;
    this._id = config.id;
    this._name = config.name;
    this._secret = config.secret;
    this._status = config.status;
    this._tokenCertificate = config.tokenCertificate;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // device_name - computed: true, optional: true, required: false
  private _deviceName?: string; 
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }
  public set deviceName(value: string) {
    this._deviceName = value;
  }
  public resetDeviceName() {
    this._deviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNameInput() {
    return this._deviceName;
  }

  // device_vdom - computed: true, optional: true, required: false
  private _deviceVdom?: string; 
  public get deviceVdom() {
    return this.getStringAttribute('device_vdom');
  }
  public set deviceVdom(value: string) {
    this._deviceVdom = value;
  }
  public resetDeviceVdom() {
    this._deviceVdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceVdomInput() {
    return this._deviceVdom;
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
      auth_method: cdktf.stringToTerraform(this._authMethod),
      base_url: cdktf.stringToTerraform(this._baseUrl),
      certificate: cdktf.listMapper(cdktf.stringToTerraform, false)(this._certificate),
      client_authentication_method: cdktf.stringToTerraform(this._clientAuthenticationMethod),
      client_identity_check: cdktf.stringToTerraform(this._clientIdentityCheck),
      client_secret_token: cdktf.stringToTerraform(this._clientSecretToken),
      device_name: cdktf.stringToTerraform(this._deviceName),
      device_vdom: cdktf.stringToTerraform(this._deviceVdom),
      fosid: cdktf.numberToTerraform(this._fosid),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      secret: cdktf.listMapper(cdktf.stringToTerraform, false)(this._secret),
      status: cdktf.stringToTerraform(this._status),
      token_certificate: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tokenCertificate),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      device_name: {
        value: cdktf.stringToHclTerraform(this._deviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_vdom: {
        value: cdktf.stringToHclTerraform(this._deviceVdom),
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
