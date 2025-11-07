// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_peer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserPeerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_peer#ca UserPeer#ca}
  */
  readonly ca?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_peer#cn UserPeer#cn}
  */
  readonly cn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_peer#cn_type UserPeer#cn_type}
  */
  readonly cnType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_peer#id UserPeer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_peer#ldap_mode UserPeer#ldap_mode}
  */
  readonly ldapMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_peer#ldap_password UserPeer#ldap_password}
  */
  readonly ldapPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_peer#ldap_server UserPeer#ldap_server}
  */
  readonly ldapServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_peer#ldap_username UserPeer#ldap_username}
  */
  readonly ldapUsername?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_peer#mandatory_ca_verify UserPeer#mandatory_ca_verify}
  */
  readonly mandatoryCaVerify?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_peer#mfa_mode UserPeer#mfa_mode}
  */
  readonly mfaMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_peer#mfa_password UserPeer#mfa_password}
  */
  readonly mfaPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_peer#mfa_server UserPeer#mfa_server}
  */
  readonly mfaServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_peer#mfa_username UserPeer#mfa_username}
  */
  readonly mfaUsername?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_peer#name UserPeer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_peer#ocsp_override_server UserPeer#ocsp_override_server}
  */
  readonly ocspOverrideServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_peer#passwd UserPeer#passwd}
  */
  readonly passwd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_peer#subject UserPeer#subject}
  */
  readonly subject?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_peer#two_factor UserPeer#two_factor}
  */
  readonly twoFactor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_peer#vdomparam UserPeer#vdomparam}
  */
  readonly vdomparam?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_peer fortios_user_peer}
*/
export class UserPeer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_user_peer";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a UserPeer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the UserPeer to import
  * @param importFromId The id of the existing UserPeer that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_peer#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the UserPeer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_user_peer", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_peer fortios_user_peer} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserPeerConfig = {}
  */
  public constructor(scope: Construct, id: string, config: UserPeerConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_user_peer',
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
    this._subject = config.subject;
    this._twoFactor = config.twoFactor;
    this._vdomparam = config.vdomparam;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // ldap_password - computed: false, optional: true, required: false
  private _ldapPassword?: string; 
  public get ldapPassword() {
    return this.getStringAttribute('ldap_password');
  }
  public set ldapPassword(value: string) {
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

  // mfa_password - computed: false, optional: true, required: false
  private _mfaPassword?: string; 
  public get mfaPassword() {
    return this.getStringAttribute('mfa_password');
  }
  public set mfaPassword(value: string) {
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

  // name - computed: true, optional: true, required: false
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

  // passwd - computed: false, optional: true, required: false
  private _passwd?: string; 
  public get passwd() {
    return this.getStringAttribute('passwd');
  }
  public set passwd(value: string) {
    this._passwd = value;
  }
  public resetPasswd() {
    this._passwd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwdInput() {
    return this._passwd;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ca: cdktf.stringToTerraform(this._ca),
      cn: cdktf.stringToTerraform(this._cn),
      cn_type: cdktf.stringToTerraform(this._cnType),
      id: cdktf.stringToTerraform(this._id),
      ldap_mode: cdktf.stringToTerraform(this._ldapMode),
      ldap_password: cdktf.stringToTerraform(this._ldapPassword),
      ldap_server: cdktf.stringToTerraform(this._ldapServer),
      ldap_username: cdktf.stringToTerraform(this._ldapUsername),
      mandatory_ca_verify: cdktf.stringToTerraform(this._mandatoryCaVerify),
      mfa_mode: cdktf.stringToTerraform(this._mfaMode),
      mfa_password: cdktf.stringToTerraform(this._mfaPassword),
      mfa_server: cdktf.stringToTerraform(this._mfaServer),
      mfa_username: cdktf.stringToTerraform(this._mfaUsername),
      name: cdktf.stringToTerraform(this._name),
      ocsp_override_server: cdktf.stringToTerraform(this._ocspOverrideServer),
      passwd: cdktf.stringToTerraform(this._passwd),
      subject: cdktf.stringToTerraform(this._subject),
      two_factor: cdktf.stringToTerraform(this._twoFactor),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
        value: cdktf.stringToHclTerraform(this._ldapPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
        value: cdktf.stringToHclTerraform(this._mfaPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
        value: cdktf.stringToHclTerraform(this._passwd),
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
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
