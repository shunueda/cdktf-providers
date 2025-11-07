// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_externalresource
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemExternalresourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_externalresource#address_comment_field SystemExternalresource#address_comment_field}
  */
  readonly addressCommentField?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_externalresource#address_data_field SystemExternalresource#address_data_field}
  */
  readonly addressDataField?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_externalresource#address_name_field SystemExternalresource#address_name_field}
  */
  readonly addressNameField?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_externalresource#category SystemExternalresource#category}
  */
  readonly category?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_externalresource#client_cert SystemExternalresource#client_cert}
  */
  readonly clientCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_externalresource#client_cert_auth SystemExternalresource#client_cert_auth}
  */
  readonly clientCertAuth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_externalresource#comments SystemExternalresource#comments}
  */
  readonly comments?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_externalresource#id SystemExternalresource#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_externalresource#interface SystemExternalresource#interface}
  */
  readonly interface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_externalresource#interface_select_method SystemExternalresource#interface_select_method}
  */
  readonly interfaceSelectMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_externalresource#name SystemExternalresource#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_externalresource#namespace SystemExternalresource#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_externalresource#object_array_path SystemExternalresource#object_array_path}
  */
  readonly objectArrayPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_externalresource#password SystemExternalresource#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_externalresource#refresh_rate SystemExternalresource#refresh_rate}
  */
  readonly refreshRate: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_externalresource#resource SystemExternalresource#resource}
  */
  readonly resource: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_externalresource#server_identity_check SystemExternalresource#server_identity_check}
  */
  readonly serverIdentityCheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_externalresource#source_ip SystemExternalresource#source_ip}
  */
  readonly sourceIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_externalresource#source_ip_interface SystemExternalresource#source_ip_interface}
  */
  readonly sourceIpInterface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_externalresource#status SystemExternalresource#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_externalresource#type SystemExternalresource#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_externalresource#update_method SystemExternalresource#update_method}
  */
  readonly updateMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_externalresource#user_agent SystemExternalresource#user_agent}
  */
  readonly userAgent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_externalresource#username SystemExternalresource#username}
  */
  readonly username?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_externalresource#uuid SystemExternalresource#uuid}
  */
  readonly uuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_externalresource#vdomparam SystemExternalresource#vdomparam}
  */
  readonly vdomparam?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_externalresource#vrf_select SystemExternalresource#vrf_select}
  */
  readonly vrfSelect?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_externalresource fortios_system_externalresource}
*/
export class SystemExternalresource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_system_externalresource";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemExternalresource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemExternalresource to import
  * @param importFromId The id of the existing SystemExternalresource that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_externalresource#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemExternalresource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_system_externalresource", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_externalresource fortios_system_externalresource} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemExternalresourceConfig
  */
  public constructor(scope: Construct, id: string, config: SystemExternalresourceConfig) {
    super(scope, id, {
      terraformResourceType: 'fortios_system_externalresource',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._addressCommentField = config.addressCommentField;
    this._addressDataField = config.addressDataField;
    this._addressNameField = config.addressNameField;
    this._category = config.category;
    this._clientCert = config.clientCert;
    this._clientCertAuth = config.clientCertAuth;
    this._comments = config.comments;
    this._id = config.id;
    this._interface = config.interface;
    this._interfaceSelectMethod = config.interfaceSelectMethod;
    this._name = config.name;
    this._namespace = config.namespace;
    this._objectArrayPath = config.objectArrayPath;
    this._password = config.password;
    this._refreshRate = config.refreshRate;
    this._resource = config.resource;
    this._serverIdentityCheck = config.serverIdentityCheck;
    this._sourceIp = config.sourceIp;
    this._sourceIpInterface = config.sourceIpInterface;
    this._status = config.status;
    this._type = config.type;
    this._updateMethod = config.updateMethod;
    this._userAgent = config.userAgent;
    this._username = config.username;
    this._uuid = config.uuid;
    this._vdomparam = config.vdomparam;
    this._vrfSelect = config.vrfSelect;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address_comment_field - computed: true, optional: true, required: false
  private _addressCommentField?: string; 
  public get addressCommentField() {
    return this.getStringAttribute('address_comment_field');
  }
  public set addressCommentField(value: string) {
    this._addressCommentField = value;
  }
  public resetAddressCommentField() {
    this._addressCommentField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressCommentFieldInput() {
    return this._addressCommentField;
  }

  // address_data_field - computed: true, optional: true, required: false
  private _addressDataField?: string; 
  public get addressDataField() {
    return this.getStringAttribute('address_data_field');
  }
  public set addressDataField(value: string) {
    this._addressDataField = value;
  }
  public resetAddressDataField() {
    this._addressDataField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressDataFieldInput() {
    return this._addressDataField;
  }

  // address_name_field - computed: true, optional: true, required: false
  private _addressNameField?: string; 
  public get addressNameField() {
    return this.getStringAttribute('address_name_field');
  }
  public set addressNameField(value: string) {
    this._addressNameField = value;
  }
  public resetAddressNameField() {
    this._addressNameField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressNameFieldInput() {
    return this._addressNameField;
  }

  // category - computed: false, optional: true, required: false
  private _category?: number; 
  public get category() {
    return this.getNumberAttribute('category');
  }
  public set category(value: number) {
    this._category = value;
  }
  public resetCategory() {
    this._category = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
  }

  // client_cert - computed: false, optional: true, required: false
  private _clientCert?: string; 
  public get clientCert() {
    return this.getStringAttribute('client_cert');
  }
  public set clientCert(value: string) {
    this._clientCert = value;
  }
  public resetClientCert() {
    this._clientCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertInput() {
    return this._clientCert;
  }

  // client_cert_auth - computed: true, optional: true, required: false
  private _clientCertAuth?: string; 
  public get clientCertAuth() {
    return this.getStringAttribute('client_cert_auth');
  }
  public set clientCertAuth(value: string) {
    this._clientCertAuth = value;
  }
  public resetClientCertAuth() {
    this._clientCertAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertAuthInput() {
    return this._clientCertAuth;
  }

  // comments - computed: false, optional: true, required: false
  private _comments?: string; 
  public get comments() {
    return this.getStringAttribute('comments');
  }
  public set comments(value: string) {
    this._comments = value;
  }
  public resetComments() {
    this._comments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentsInput() {
    return this._comments;
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

  // interface - computed: false, optional: true, required: false
  private _interface?: string; 
  public get interface() {
    return this.getStringAttribute('interface');
  }
  public set interface(value: string) {
    this._interface = value;
  }
  public resetInterface() {
    this._interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // interface_select_method - computed: true, optional: true, required: false
  private _interfaceSelectMethod?: string; 
  public get interfaceSelectMethod() {
    return this.getStringAttribute('interface_select_method');
  }
  public set interfaceSelectMethod(value: string) {
    this._interfaceSelectMethod = value;
  }
  public resetInterfaceSelectMethod() {
    this._interfaceSelectMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceSelectMethodInput() {
    return this._interfaceSelectMethod;
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // object_array_path - computed: true, optional: true, required: false
  private _objectArrayPath?: string; 
  public get objectArrayPath() {
    return this.getStringAttribute('object_array_path');
  }
  public set objectArrayPath(value: string) {
    this._objectArrayPath = value;
  }
  public resetObjectArrayPath() {
    this._objectArrayPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectArrayPathInput() {
    return this._objectArrayPath;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // refresh_rate - computed: false, optional: false, required: true
  private _refreshRate?: number; 
  public get refreshRate() {
    return this.getNumberAttribute('refresh_rate');
  }
  public set refreshRate(value: number) {
    this._refreshRate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshRateInput() {
    return this._refreshRate;
  }

  // resource - computed: false, optional: false, required: true
  private _resource?: string; 
  public get resource() {
    return this.getStringAttribute('resource');
  }
  public set resource(value: string) {
    this._resource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource;
  }

  // server_identity_check - computed: true, optional: true, required: false
  private _serverIdentityCheck?: string; 
  public get serverIdentityCheck() {
    return this.getStringAttribute('server_identity_check');
  }
  public set serverIdentityCheck(value: string) {
    this._serverIdentityCheck = value;
  }
  public resetServerIdentityCheck() {
    this._serverIdentityCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverIdentityCheckInput() {
    return this._serverIdentityCheck;
  }

  // source_ip - computed: true, optional: true, required: false
  private _sourceIp?: string; 
  public get sourceIp() {
    return this.getStringAttribute('source_ip');
  }
  public set sourceIp(value: string) {
    this._sourceIp = value;
  }
  public resetSourceIp() {
    this._sourceIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpInput() {
    return this._sourceIp;
  }

  // source_ip_interface - computed: false, optional: true, required: false
  private _sourceIpInterface?: string; 
  public get sourceIpInterface() {
    return this.getStringAttribute('source_ip_interface');
  }
  public set sourceIpInterface(value: string) {
    this._sourceIpInterface = value;
  }
  public resetSourceIpInterface() {
    this._sourceIpInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpInterfaceInput() {
    return this._sourceIpInterface;
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

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // update_method - computed: true, optional: true, required: false
  private _updateMethod?: string; 
  public get updateMethod() {
    return this.getStringAttribute('update_method');
  }
  public set updateMethod(value: string) {
    this._updateMethod = value;
  }
  public resetUpdateMethod() {
    this._updateMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateMethodInput() {
    return this._updateMethod;
  }

  // user_agent - computed: true, optional: true, required: false
  private _userAgent?: string; 
  public get userAgent() {
    return this.getStringAttribute('user_agent');
  }
  public set userAgent(value: string) {
    this._userAgent = value;
  }
  public resetUserAgent() {
    this._userAgent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAgentInput() {
    return this._userAgent;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // vdomparam - computed: true, optional: true, required: false
  private _vdomparam?: string; 
  public get vdomparam() {
    return this.getStringAttribute('vdomparam');
  }
  public set vdomparam(value: string) {
    this._vdomparam = value;
  }
  public resetVdomparam() {
    this._vdomparam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomparamInput() {
    return this._vdomparam;
  }

  // vrf_select - computed: false, optional: true, required: false
  private _vrfSelect?: number; 
  public get vrfSelect() {
    return this.getNumberAttribute('vrf_select');
  }
  public set vrfSelect(value: number) {
    this._vrfSelect = value;
  }
  public resetVrfSelect() {
    this._vrfSelect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfSelectInput() {
    return this._vrfSelect;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      address_comment_field: cdktf.stringToTerraform(this._addressCommentField),
      address_data_field: cdktf.stringToTerraform(this._addressDataField),
      address_name_field: cdktf.stringToTerraform(this._addressNameField),
      category: cdktf.numberToTerraform(this._category),
      client_cert: cdktf.stringToTerraform(this._clientCert),
      client_cert_auth: cdktf.stringToTerraform(this._clientCertAuth),
      comments: cdktf.stringToTerraform(this._comments),
      id: cdktf.stringToTerraform(this._id),
      interface: cdktf.stringToTerraform(this._interface),
      interface_select_method: cdktf.stringToTerraform(this._interfaceSelectMethod),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      object_array_path: cdktf.stringToTerraform(this._objectArrayPath),
      password: cdktf.stringToTerraform(this._password),
      refresh_rate: cdktf.numberToTerraform(this._refreshRate),
      resource: cdktf.stringToTerraform(this._resource),
      server_identity_check: cdktf.stringToTerraform(this._serverIdentityCheck),
      source_ip: cdktf.stringToTerraform(this._sourceIp),
      source_ip_interface: cdktf.stringToTerraform(this._sourceIpInterface),
      status: cdktf.stringToTerraform(this._status),
      type: cdktf.stringToTerraform(this._type),
      update_method: cdktf.stringToTerraform(this._updateMethod),
      user_agent: cdktf.stringToTerraform(this._userAgent),
      username: cdktf.stringToTerraform(this._username),
      uuid: cdktf.stringToTerraform(this._uuid),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
      vrf_select: cdktf.numberToTerraform(this._vrfSelect),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      address_comment_field: {
        value: cdktf.stringToHclTerraform(this._addressCommentField),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      address_data_field: {
        value: cdktf.stringToHclTerraform(this._addressDataField),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      address_name_field: {
        value: cdktf.stringToHclTerraform(this._addressNameField),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      category: {
        value: cdktf.numberToHclTerraform(this._category),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      client_cert: {
        value: cdktf.stringToHclTerraform(this._clientCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_cert_auth: {
        value: cdktf.stringToHclTerraform(this._clientCertAuth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comments: {
        value: cdktf.stringToHclTerraform(this._comments),
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
      interface: {
        value: cdktf.stringToHclTerraform(this._interface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interface_select_method: {
        value: cdktf.stringToHclTerraform(this._interfaceSelectMethod),
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
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      object_array_path: {
        value: cdktf.stringToHclTerraform(this._objectArrayPath),
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
      refresh_rate: {
        value: cdktf.numberToHclTerraform(this._refreshRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      resource: {
        value: cdktf.stringToHclTerraform(this._resource),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_identity_check: {
        value: cdktf.stringToHclTerraform(this._serverIdentityCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_ip: {
        value: cdktf.stringToHclTerraform(this._sourceIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_ip_interface: {
        value: cdktf.stringToHclTerraform(this._sourceIpInterface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
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
      update_method: {
        value: cdktf.stringToHclTerraform(this._updateMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_agent: {
        value: cdktf.stringToHclTerraform(this._userAgent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vrf_select: {
        value: cdktf.numberToHclTerraform(this._vrfSelect),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
