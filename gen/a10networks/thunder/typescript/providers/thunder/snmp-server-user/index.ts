// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/snmp_server_user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SnmpServerUserConfig extends cdktf.TerraformMetaArguments {
  /**
  * 'md5': Use HMAC MD5 algorithm for authentication; 'sha': Use HMAC SHA algorithm for authentication;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/snmp_server_user#auth_val SnmpServerUser#auth_val}
  */
  readonly authVal?: string;
  /**
  * Passphrase for encryption
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/snmp_server_user#encpasswd SnmpServerUser#encpasswd}
  */
  readonly encpasswd?: string;
  /**
  * Group to which the user belongs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/snmp_server_user#group SnmpServerUser#group}
  */
  readonly group?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/snmp_server_user#id SnmpServerUser#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Password of this user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/snmp_server_user#passwd SnmpServerUser#passwd}
  */
  readonly passwd?: string;
  /**
  * 'des': DES encryption alogrithm; 'aes': AES encryption alogrithm;  (Encryption type)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/snmp_server_user#priv SnmpServerUser#priv}
  */
  readonly priv?: string;
  /**
  * Name of the user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/snmp_server_user#username SnmpServerUser#username}
  */
  readonly username: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/snmp_server_user#uuid SnmpServerUser#uuid}
  */
  readonly uuid?: string;
  /**
  * 'auth': Using the authNoPriv Security Level; 'noauth': Using the noAuthNoPriv Security Level;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/snmp_server_user#v3 SnmpServerUser#v3}
  */
  readonly v3?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/snmp_server_user thunder_snmp_server_user}
*/
export class SnmpServerUser extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_snmp_server_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SnmpServerUser resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SnmpServerUser to import
  * @param importFromId The id of the existing SnmpServerUser that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/snmp_server_user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SnmpServerUser to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_snmp_server_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/snmp_server_user thunder_snmp_server_user} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SnmpServerUserConfig
  */
  public constructor(scope: Construct, id: string, config: SnmpServerUserConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_snmp_server_user',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authVal = config.authVal;
    this._encpasswd = config.encpasswd;
    this._group = config.group;
    this._id = config.id;
    this._passwd = config.passwd;
    this._priv = config.priv;
    this._username = config.username;
    this._uuid = config.uuid;
    this._v3 = config.v3;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auth_val - computed: false, optional: true, required: false
  private _authVal?: string; 
  public get authVal() {
    return this.getStringAttribute('auth_val');
  }
  public set authVal(value: string) {
    this._authVal = value;
  }
  public resetAuthVal() {
    this._authVal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authValInput() {
    return this._authVal;
  }

  // encpasswd - computed: false, optional: true, required: false
  private _encpasswd?: string; 
  public get encpasswd() {
    return this.getStringAttribute('encpasswd');
  }
  public set encpasswd(value: string) {
    this._encpasswd = value;
  }
  public resetEncpasswd() {
    this._encpasswd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encpasswdInput() {
    return this._encpasswd;
  }

  // group - computed: false, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
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

  // priv - computed: false, optional: true, required: false
  private _priv?: string; 
  public get priv() {
    return this.getStringAttribute('priv');
  }
  public set priv(value: string) {
    this._priv = value;
  }
  public resetPriv() {
    this._priv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privInput() {
    return this._priv;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
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

  // v3 - computed: false, optional: true, required: false
  private _v3?: string; 
  public get v3() {
    return this.getStringAttribute('v3');
  }
  public set v3(value: string) {
    this._v3 = value;
  }
  public resetV3() {
    this._v3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v3Input() {
    return this._v3;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auth_val: cdktf.stringToTerraform(this._authVal),
      encpasswd: cdktf.stringToTerraform(this._encpasswd),
      group: cdktf.stringToTerraform(this._group),
      id: cdktf.stringToTerraform(this._id),
      passwd: cdktf.stringToTerraform(this._passwd),
      priv: cdktf.stringToTerraform(this._priv),
      username: cdktf.stringToTerraform(this._username),
      uuid: cdktf.stringToTerraform(this._uuid),
      v3: cdktf.stringToTerraform(this._v3),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auth_val: {
        value: cdktf.stringToHclTerraform(this._authVal),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encpasswd: {
        value: cdktf.stringToHclTerraform(this._encpasswd),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group: {
        value: cdktf.stringToHclTerraform(this._group),
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
      passwd: {
        value: cdktf.stringToHclTerraform(this._passwd),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      priv: {
        value: cdktf.stringToHclTerraform(this._priv),
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
      v3: {
        value: cdktf.stringToHclTerraform(this._v3),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
