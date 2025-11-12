// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_authentication_scheme
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectAuthenticationSchemeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_authentication_scheme#adom ObjectAuthenticationScheme#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_authentication_scheme#domain_controller ObjectAuthenticationScheme#domain_controller}
  */
  readonly domainController?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_authentication_scheme#ems_device_owner ObjectAuthenticationScheme#ems_device_owner}
  */
  readonly emsDeviceOwner?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_authentication_scheme#external_idp ObjectAuthenticationScheme#external_idp}
  */
  readonly externalIdp?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_authentication_scheme#fsso_agent_for_ntlm ObjectAuthenticationScheme#fsso_agent_for_ntlm}
  */
  readonly fssoAgentForNtlm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_authentication_scheme#fsso_guest ObjectAuthenticationScheme#fsso_guest}
  */
  readonly fssoGuest?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_authentication_scheme#id ObjectAuthenticationScheme#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_authentication_scheme#kerberos_keytab ObjectAuthenticationScheme#kerberos_keytab}
  */
  readonly kerberosKeytab?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_authentication_scheme#method ObjectAuthenticationScheme#method}
  */
  readonly method?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_authentication_scheme#name ObjectAuthenticationScheme#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_authentication_scheme#negotiate_ntlm ObjectAuthenticationScheme#negotiate_ntlm}
  */
  readonly negotiateNtlm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_authentication_scheme#require_tfa ObjectAuthenticationScheme#require_tfa}
  */
  readonly requireTfa?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_authentication_scheme#saml_server ObjectAuthenticationScheme#saml_server}
  */
  readonly samlServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_authentication_scheme#saml_timeout ObjectAuthenticationScheme#saml_timeout}
  */
  readonly samlTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_authentication_scheme#scopetype ObjectAuthenticationScheme#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_authentication_scheme#ssh_ca ObjectAuthenticationScheme#ssh_ca}
  */
  readonly sshCa?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_authentication_scheme#user_cert ObjectAuthenticationScheme#user_cert}
  */
  readonly userCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_authentication_scheme#user_database ObjectAuthenticationScheme#user_database}
  */
  readonly userDatabase?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_authentication_scheme fortimanager_object_authentication_scheme}
*/
export class ObjectAuthenticationScheme extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_authentication_scheme";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectAuthenticationScheme resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectAuthenticationScheme to import
  * @param importFromId The id of the existing ObjectAuthenticationScheme that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_authentication_scheme#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectAuthenticationScheme to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_authentication_scheme", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_authentication_scheme fortimanager_object_authentication_scheme} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectAuthenticationSchemeConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ObjectAuthenticationSchemeConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_authentication_scheme',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.14.0',
        providerVersionConstraint: '1.14.0'
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
    this._domainController = config.domainController;
    this._emsDeviceOwner = config.emsDeviceOwner;
    this._externalIdp = config.externalIdp;
    this._fssoAgentForNtlm = config.fssoAgentForNtlm;
    this._fssoGuest = config.fssoGuest;
    this._id = config.id;
    this._kerberosKeytab = config.kerberosKeytab;
    this._method = config.method;
    this._name = config.name;
    this._negotiateNtlm = config.negotiateNtlm;
    this._requireTfa = config.requireTfa;
    this._samlServer = config.samlServer;
    this._samlTimeout = config.samlTimeout;
    this._scopetype = config.scopetype;
    this._sshCa = config.sshCa;
    this._userCert = config.userCert;
    this._userDatabase = config.userDatabase;
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

  // domain_controller - computed: false, optional: true, required: false
  private _domainController?: string; 
  public get domainController() {
    return this.getStringAttribute('domain_controller');
  }
  public set domainController(value: string) {
    this._domainController = value;
  }
  public resetDomainController() {
    this._domainController = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainControllerInput() {
    return this._domainController;
  }

  // ems_device_owner - computed: true, optional: true, required: false
  private _emsDeviceOwner?: string; 
  public get emsDeviceOwner() {
    return this.getStringAttribute('ems_device_owner');
  }
  public set emsDeviceOwner(value: string) {
    this._emsDeviceOwner = value;
  }
  public resetEmsDeviceOwner() {
    this._emsDeviceOwner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emsDeviceOwnerInput() {
    return this._emsDeviceOwner;
  }

  // external_idp - computed: true, optional: true, required: false
  private _externalIdp?: string[]; 
  public get externalIdp() {
    return cdktf.Fn.tolist(this.getListAttribute('external_idp'));
  }
  public set externalIdp(value: string[]) {
    this._externalIdp = value;
  }
  public resetExternalIdp() {
    this._externalIdp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdpInput() {
    return this._externalIdp;
  }

  // fsso_agent_for_ntlm - computed: false, optional: true, required: false
  private _fssoAgentForNtlm?: string; 
  public get fssoAgentForNtlm() {
    return this.getStringAttribute('fsso_agent_for_ntlm');
  }
  public set fssoAgentForNtlm(value: string) {
    this._fssoAgentForNtlm = value;
  }
  public resetFssoAgentForNtlm() {
    this._fssoAgentForNtlm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fssoAgentForNtlmInput() {
    return this._fssoAgentForNtlm;
  }

  // fsso_guest - computed: true, optional: true, required: false
  private _fssoGuest?: string; 
  public get fssoGuest() {
    return this.getStringAttribute('fsso_guest');
  }
  public set fssoGuest(value: string) {
    this._fssoGuest = value;
  }
  public resetFssoGuest() {
    this._fssoGuest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fssoGuestInput() {
    return this._fssoGuest;
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

  // kerberos_keytab - computed: false, optional: true, required: false
  private _kerberosKeytab?: string; 
  public get kerberosKeytab() {
    return this.getStringAttribute('kerberos_keytab');
  }
  public set kerberosKeytab(value: string) {
    this._kerberosKeytab = value;
  }
  public resetKerberosKeytab() {
    this._kerberosKeytab = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kerberosKeytabInput() {
    return this._kerberosKeytab;
  }

  // method - computed: true, optional: true, required: false
  private _method?: string[]; 
  public get method() {
    return cdktf.Fn.tolist(this.getListAttribute('method'));
  }
  public set method(value: string[]) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
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

  // negotiate_ntlm - computed: false, optional: true, required: false
  private _negotiateNtlm?: string; 
  public get negotiateNtlm() {
    return this.getStringAttribute('negotiate_ntlm');
  }
  public set negotiateNtlm(value: string) {
    this._negotiateNtlm = value;
  }
  public resetNegotiateNtlm() {
    this._negotiateNtlm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negotiateNtlmInput() {
    return this._negotiateNtlm;
  }

  // require_tfa - computed: true, optional: true, required: false
  private _requireTfa?: string; 
  public get requireTfa() {
    return this.getStringAttribute('require_tfa');
  }
  public set requireTfa(value: string) {
    this._requireTfa = value;
  }
  public resetRequireTfa() {
    this._requireTfa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireTfaInput() {
    return this._requireTfa;
  }

  // saml_server - computed: false, optional: true, required: false
  private _samlServer?: string; 
  public get samlServer() {
    return this.getStringAttribute('saml_server');
  }
  public set samlServer(value: string) {
    this._samlServer = value;
  }
  public resetSamlServer() {
    this._samlServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samlServerInput() {
    return this._samlServer;
  }

  // saml_timeout - computed: true, optional: true, required: false
  private _samlTimeout?: number; 
  public get samlTimeout() {
    return this.getNumberAttribute('saml_timeout');
  }
  public set samlTimeout(value: number) {
    this._samlTimeout = value;
  }
  public resetSamlTimeout() {
    this._samlTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samlTimeoutInput() {
    return this._samlTimeout;
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

  // ssh_ca - computed: false, optional: true, required: false
  private _sshCa?: string; 
  public get sshCa() {
    return this.getStringAttribute('ssh_ca');
  }
  public set sshCa(value: string) {
    this._sshCa = value;
  }
  public resetSshCa() {
    this._sshCa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshCaInput() {
    return this._sshCa;
  }

  // user_cert - computed: true, optional: true, required: false
  private _userCert?: string; 
  public get userCert() {
    return this.getStringAttribute('user_cert');
  }
  public set userCert(value: string) {
    this._userCert = value;
  }
  public resetUserCert() {
    this._userCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userCertInput() {
    return this._userCert;
  }

  // user_database - computed: true, optional: true, required: false
  private _userDatabase?: string[]; 
  public get userDatabase() {
    return cdktf.Fn.tolist(this.getListAttribute('user_database'));
  }
  public set userDatabase(value: string[]) {
    this._userDatabase = value;
  }
  public resetUserDatabase() {
    this._userDatabase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDatabaseInput() {
    return this._userDatabase;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adom: cdktf.stringToTerraform(this._adom),
      domain_controller: cdktf.stringToTerraform(this._domainController),
      ems_device_owner: cdktf.stringToTerraform(this._emsDeviceOwner),
      external_idp: cdktf.listMapper(cdktf.stringToTerraform, false)(this._externalIdp),
      fsso_agent_for_ntlm: cdktf.stringToTerraform(this._fssoAgentForNtlm),
      fsso_guest: cdktf.stringToTerraform(this._fssoGuest),
      id: cdktf.stringToTerraform(this._id),
      kerberos_keytab: cdktf.stringToTerraform(this._kerberosKeytab),
      method: cdktf.listMapper(cdktf.stringToTerraform, false)(this._method),
      name: cdktf.stringToTerraform(this._name),
      negotiate_ntlm: cdktf.stringToTerraform(this._negotiateNtlm),
      require_tfa: cdktf.stringToTerraform(this._requireTfa),
      saml_server: cdktf.stringToTerraform(this._samlServer),
      saml_timeout: cdktf.numberToTerraform(this._samlTimeout),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      ssh_ca: cdktf.stringToTerraform(this._sshCa),
      user_cert: cdktf.stringToTerraform(this._userCert),
      user_database: cdktf.listMapper(cdktf.stringToTerraform, false)(this._userDatabase),
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
      domain_controller: {
        value: cdktf.stringToHclTerraform(this._domainController),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ems_device_owner: {
        value: cdktf.stringToHclTerraform(this._emsDeviceOwner),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external_idp: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._externalIdp),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      fsso_agent_for_ntlm: {
        value: cdktf.stringToHclTerraform(this._fssoAgentForNtlm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fsso_guest: {
        value: cdktf.stringToHclTerraform(this._fssoGuest),
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
      kerberos_keytab: {
        value: cdktf.stringToHclTerraform(this._kerberosKeytab),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      method: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._method),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      negotiate_ntlm: {
        value: cdktf.stringToHclTerraform(this._negotiateNtlm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      require_tfa: {
        value: cdktf.stringToHclTerraform(this._requireTfa),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      saml_server: {
        value: cdktf.stringToHclTerraform(this._samlServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      saml_timeout: {
        value: cdktf.numberToHclTerraform(this._samlTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssh_ca: {
        value: cdktf.stringToHclTerraform(this._sshCa),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_cert: {
        value: cdktf.stringToHclTerraform(this._userCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_database: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._userDatabase),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
