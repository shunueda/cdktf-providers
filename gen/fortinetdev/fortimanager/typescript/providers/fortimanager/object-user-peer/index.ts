// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_peer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectUserPeerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_peer#adom ObjectUserPeer#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_peer#ca ObjectUserPeer#ca}
  */
  readonly ca?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_peer#cn ObjectUserPeer#cn}
  */
  readonly cn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_peer#cn_type ObjectUserPeer#cn_type}
  */
  readonly cnType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_peer#id ObjectUserPeer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_peer#ldap_mode ObjectUserPeer#ldap_mode}
  */
  readonly ldapMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_peer#ldap_password ObjectUserPeer#ldap_password}
  */
  readonly ldapPassword?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_peer#ldap_server ObjectUserPeer#ldap_server}
  */
  readonly ldapServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_peer#ldap_username ObjectUserPeer#ldap_username}
  */
  readonly ldapUsername?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_peer#mandatory_ca_verify ObjectUserPeer#mandatory_ca_verify}
  */
  readonly mandatoryCaVerify?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_peer#mfa_mode ObjectUserPeer#mfa_mode}
  */
  readonly mfaMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_peer#mfa_password ObjectUserPeer#mfa_password}
  */
  readonly mfaPassword?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_peer#mfa_server ObjectUserPeer#mfa_server}
  */
  readonly mfaServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_peer#mfa_username ObjectUserPeer#mfa_username}
  */
  readonly mfaUsername?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_peer#name ObjectUserPeer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_peer#ocsp_override_server ObjectUserPeer#ocsp_override_server}
  */
  readonly ocspOverrideServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_peer#passwd ObjectUserPeer#passwd}
  */
  readonly passwd?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_peer#scopetype ObjectUserPeer#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_peer#subject ObjectUserPeer#subject}
  */
  readonly subject?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_peer#two_factor ObjectUserPeer#two_factor}
  */
  readonly twoFactor?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_peer fortimanager_object_user_peer}
*/
export class ObjectUserPeer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_user_peer";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectUserPeer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectUserPeer to import
  * @param importFromId The id of the existing ObjectUserPeer that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_peer#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectUserPeer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_user_peer", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_peer fortimanager_object_user_peer} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectUserPeerConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ObjectUserPeerConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_user_peer',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.14.0'
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
    this._ca = config.ca;
    this._cn = config.cn;
    this._cnType = config.cnType;
    this._id = config.id;
    this._ldapMode = config.ldapMode;
    this._ldapPassword = config.ldapPassword;
    this._ldapServer = config.ldapServer;
    this._ldapUsername = config.ldapUsername;
    this._mandatoryCaVerify = config.mandatoryCaVerify;
    this._mfaMode = config.mfaMode;
    this._mfaPassword = config.mfaPassword;
    this._mfaServer = config.mfaServer;
    this._mfaUsername = config.mfaUsername;
    this._name = config.name;
    this._ocspOverrideServer = config.ocspOverrideServer;
    this._passwd = config.passwd;
    this._scopetype = config.scopetype;
    this._subject = config.subject;
    this._twoFactor = config.twoFactor;
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

  // ca - computed: false, optional: true, required: false
  private _ca?: string; 
  public get ca() {
    return this.getStringAttribute('ca');
  }
  public set ca(value: string) {
    this._ca = value;
  }
  public resetCa() {
    this._ca = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caInput() {
    return this._ca;
  }

  // cn - computed: false, optional: true, required: false
  private _cn?: string; 
  public get cn() {
    return this.getStringAttribute('cn');
  }
  public set cn(value: string) {
    this._cn = value;
  }
  public resetCn() {
    this._cn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cnInput() {
    return this._cn;
  }

  // cn_type - computed: true, optional: true, required: false
  private _cnType?: string; 
  public get cnType() {
    return this.getStringAttribute('cn_type');
  }
  public set cnType(value: string) {
    this._cnType = value;
  }
  public resetCnType() {
    this._cnType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cnTypeInput() {
    return this._cnType;
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

  // ldap_mode - computed: true, optional: true, required: false
  private _ldapMode?: string; 
  public get ldapMode() {
    return this.getStringAttribute('ldap_mode');
  }
  public set ldapMode(value: string) {
    this._ldapMode = value;
  }
  public resetLdapMode() {
    this._ldapMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapModeInput() {
    return this._ldapMode;
  }

  // ldap_password - computed: true, optional: true, required: false
  private _ldapPassword?: string[]; 
  public get ldapPassword() {
    return cdktf.Fn.tolist(this.getListAttribute('ldap_password'));
  }
  public set ldapPassword(value: string[]) {
    this._ldapPassword = value;
  }
  public resetLdapPassword() {
    this._ldapPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapPasswordInput() {
    return this._ldapPassword;
  }

  // ldap_server - computed: false, optional: true, required: false
  private _ldapServer?: string; 
  public get ldapServer() {
    return this.getStringAttribute('ldap_server');
  }
  public set ldapServer(value: string) {
    this._ldapServer = value;
  }
  public resetLdapServer() {
    this._ldapServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapServerInput() {
    return this._ldapServer;
  }

  // ldap_username - computed: false, optional: true, required: false
  private _ldapUsername?: string; 
  public get ldapUsername() {
    return this.getStringAttribute('ldap_username');
  }
  public set ldapUsername(value: string) {
    this._ldapUsername = value;
  }
  public resetLdapUsername() {
    this._ldapUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapUsernameInput() {
    return this._ldapUsername;
  }

  // mandatory_ca_verify - computed: true, optional: true, required: false
  private _mandatoryCaVerify?: string; 
  public get mandatoryCaVerify() {
    return this.getStringAttribute('mandatory_ca_verify');
  }
  public set mandatoryCaVerify(value: string) {
    this._mandatoryCaVerify = value;
  }
  public resetMandatoryCaVerify() {
    this._mandatoryCaVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mandatoryCaVerifyInput() {
    return this._mandatoryCaVerify;
  }

  // mfa_mode - computed: true, optional: true, required: false
  private _mfaMode?: string; 
  public get mfaMode() {
    return this.getStringAttribute('mfa_mode');
  }
  public set mfaMode(value: string) {
    this._mfaMode = value;
  }
  public resetMfaMode() {
    this._mfaMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mfaModeInput() {
    return this._mfaMode;
  }

  // mfa_password - computed: true, optional: true, required: false
  private _mfaPassword?: string[]; 
  public get mfaPassword() {
    return cdktf.Fn.tolist(this.getListAttribute('mfa_password'));
  }
  public set mfaPassword(value: string[]) {
    this._mfaPassword = value;
  }
  public resetMfaPassword() {
    this._mfaPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mfaPasswordInput() {
    return this._mfaPassword;
  }

  // mfa_server - computed: false, optional: true, required: false
  private _mfaServer?: string; 
  public get mfaServer() {
    return this.getStringAttribute('mfa_server');
  }
  public set mfaServer(value: string) {
    this._mfaServer = value;
  }
  public resetMfaServer() {
    this._mfaServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mfaServerInput() {
    return this._mfaServer;
  }

  // mfa_username - computed: false, optional: true, required: false
  private _mfaUsername?: string; 
  public get mfaUsername() {
    return this.getStringAttribute('mfa_username');
  }
  public set mfaUsername(value: string) {
    this._mfaUsername = value;
  }
  public resetMfaUsername() {
    this._mfaUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mfaUsernameInput() {
    return this._mfaUsername;
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

  // ocsp_override_server - computed: false, optional: true, required: false
  private _ocspOverrideServer?: string; 
  public get ocspOverrideServer() {
    return this.getStringAttribute('ocsp_override_server');
  }
  public set ocspOverrideServer(value: string) {
    this._ocspOverrideServer = value;
  }
  public resetOcspOverrideServer() {
    this._ocspOverrideServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocspOverrideServerInput() {
    return this._ocspOverrideServer;
  }

  // passwd - computed: true, optional: true, required: false
  private _passwd?: string[]; 
  public get passwd() {
    return cdktf.Fn.tolist(this.getListAttribute('passwd'));
  }
  public set passwd(value: string[]) {
    this._passwd = value;
  }
  public resetPasswd() {
    this._passwd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwdInput() {
    return this._passwd;
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

  // subject - computed: false, optional: true, required: false
  private _subject?: string; 
  public get subject() {
    return this.getStringAttribute('subject');
  }
  public set subject(value: string) {
    this._subject = value;
  }
  public resetSubject() {
    this._subject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject;
  }

  // two_factor - computed: true, optional: true, required: false
  private _twoFactor?: string; 
  public get twoFactor() {
    return this.getStringAttribute('two_factor');
  }
  public set twoFactor(value: string) {
    this._twoFactor = value;
  }
  public resetTwoFactor() {
    this._twoFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get twoFactorInput() {
    return this._twoFactor;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adom: cdktf.stringToTerraform(this._adom),
      ca: cdktf.stringToTerraform(this._ca),
      cn: cdktf.stringToTerraform(this._cn),
      cn_type: cdktf.stringToTerraform(this._cnType),
      id: cdktf.stringToTerraform(this._id),
      ldap_mode: cdktf.stringToTerraform(this._ldapMode),
      ldap_password: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ldapPassword),
      ldap_server: cdktf.stringToTerraform(this._ldapServer),
      ldap_username: cdktf.stringToTerraform(this._ldapUsername),
      mandatory_ca_verify: cdktf.stringToTerraform(this._mandatoryCaVerify),
      mfa_mode: cdktf.stringToTerraform(this._mfaMode),
      mfa_password: cdktf.listMapper(cdktf.stringToTerraform, false)(this._mfaPassword),
      mfa_server: cdktf.stringToTerraform(this._mfaServer),
      mfa_username: cdktf.stringToTerraform(this._mfaUsername),
      name: cdktf.stringToTerraform(this._name),
      ocsp_override_server: cdktf.stringToTerraform(this._ocspOverrideServer),
      passwd: cdktf.listMapper(cdktf.stringToTerraform, false)(this._passwd),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      subject: cdktf.stringToTerraform(this._subject),
      two_factor: cdktf.stringToTerraform(this._twoFactor),
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
      ca: {
        value: cdktf.stringToHclTerraform(this._ca),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cn: {
        value: cdktf.stringToHclTerraform(this._cn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cn_type: {
        value: cdktf.stringToHclTerraform(this._cnType),
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
      ldap_mode: {
        value: cdktf.stringToHclTerraform(this._ldapMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ldap_password: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ldapPassword),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      ldap_server: {
        value: cdktf.stringToHclTerraform(this._ldapServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ldap_username: {
        value: cdktf.stringToHclTerraform(this._ldapUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mandatory_ca_verify: {
        value: cdktf.stringToHclTerraform(this._mandatoryCaVerify),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mfa_mode: {
        value: cdktf.stringToHclTerraform(this._mfaMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mfa_password: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._mfaPassword),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      mfa_server: {
        value: cdktf.stringToHclTerraform(this._mfaServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mfa_username: {
        value: cdktf.stringToHclTerraform(this._mfaUsername),
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
      ocsp_override_server: {
        value: cdktf.stringToHclTerraform(this._ocspOverrideServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      passwd: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._passwd),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subject: {
        value: cdktf.stringToHclTerraform(this._subject),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      two_factor: {
        value: cdktf.stringToHclTerraform(this._twoFactor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
