// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_mail
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemMailConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_mail#auth SystemMail#auth}
  */
  readonly auth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_mail#auth_type SystemMail#auth_type}
  */
  readonly authType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_mail#fosid SystemMail#fosid}
  */
  readonly fosid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_mail#from SystemMail#from}
  */
  readonly from?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_mail#from_passwd SystemMail#from_passwd}
  */
  readonly fromPasswd?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_mail#id SystemMail#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_mail#local_cert SystemMail#local_cert}
  */
  readonly localCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_mail#passwd SystemMail#passwd}
  */
  readonly passwd?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_mail#port SystemMail#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_mail#secure_option SystemMail#secure_option}
  */
  readonly secureOption?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_mail#server SystemMail#server}
  */
  readonly server?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_mail#ssl_protocol SystemMail#ssl_protocol}
  */
  readonly sslProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_mail#user SystemMail#user}
  */
  readonly user?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_mail fortimanager_system_mail}
*/
export class SystemMail extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_system_mail";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemMail resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemMail to import
  * @param importFromId The id of the existing SystemMail that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_mail#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemMail to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_system_mail", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_mail fortimanager_system_mail} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemMailConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemMailConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_system_mail',
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
    this._auth = config.auth;
    this._authType = config.authType;
    this._fosid = config.fosid;
    this._from = config.from;
    this._fromPasswd = config.fromPasswd;
    this._id = config.id;
    this._localCert = config.localCert;
    this._passwd = config.passwd;
    this._port = config.port;
    this._secureOption = config.secureOption;
    this._server = config.server;
    this._sslProtocol = config.sslProtocol;
    this._user = config.user;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auth - computed: true, optional: true, required: false
  private _auth?: string; 
  public get auth() {
    return this.getStringAttribute('auth');
  }
  public set auth(value: string) {
    this._auth = value;
  }
  public resetAuth() {
    this._auth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authInput() {
    return this._auth;
  }

  // auth_type - computed: true, optional: true, required: false
  private _authType?: string; 
  public get authType() {
    return this.getStringAttribute('auth_type');
  }
  public set authType(value: string) {
    this._authType = value;
  }
  public resetAuthType() {
    this._authType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authTypeInput() {
    return this._authType;
  }

  // fosid - computed: false, optional: true, required: false
  private _fosid?: string; 
  public get fosid() {
    return this.getStringAttribute('fosid');
  }
  public set fosid(value: string) {
    this._fosid = value;
  }
  public resetFosid() {
    this._fosid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fosidInput() {
    return this._fosid;
  }

  // from - computed: false, optional: true, required: false
  private _from?: string; 
  public get from() {
    return this.getStringAttribute('from');
  }
  public set from(value: string) {
    this._from = value;
  }
  public resetFrom() {
    this._from = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from;
  }

  // from_passwd - computed: true, optional: true, required: false
  private _fromPasswd?: string[]; 
  public get fromPasswd() {
    return cdktf.Fn.tolist(this.getListAttribute('from_passwd'));
  }
  public set fromPasswd(value: string[]) {
    this._fromPasswd = value;
  }
  public resetFromPasswd() {
    this._fromPasswd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromPasswdInput() {
    return this._fromPasswd;
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

  // local_cert - computed: false, optional: true, required: false
  private _localCert?: string; 
  public get localCert() {
    return this.getStringAttribute('local_cert');
  }
  public set localCert(value: string) {
    this._localCert = value;
  }
  public resetLocalCert() {
    this._localCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localCertInput() {
    return this._localCert;
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

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // secure_option - computed: true, optional: true, required: false
  private _secureOption?: string; 
  public get secureOption() {
    return this.getStringAttribute('secure_option');
  }
  public set secureOption(value: string) {
    this._secureOption = value;
  }
  public resetSecureOption() {
    this._secureOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureOptionInput() {
    return this._secureOption;
  }

  // server - computed: false, optional: true, required: false
  private _server?: string; 
  public get server() {
    return this.getStringAttribute('server');
  }
  public set server(value: string) {
    this._server = value;
  }
  public resetServer() {
    this._server = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }

  // ssl_protocol - computed: true, optional: true, required: false
  private _sslProtocol?: string; 
  public get sslProtocol() {
    return this.getStringAttribute('ssl_protocol');
  }
  public set sslProtocol(value: string) {
    this._sslProtocol = value;
  }
  public resetSslProtocol() {
    this._sslProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslProtocolInput() {
    return this._sslProtocol;
  }

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auth: cdktf.stringToTerraform(this._auth),
      auth_type: cdktf.stringToTerraform(this._authType),
      fosid: cdktf.stringToTerraform(this._fosid),
      from: cdktf.stringToTerraform(this._from),
      from_passwd: cdktf.listMapper(cdktf.stringToTerraform, false)(this._fromPasswd),
      id: cdktf.stringToTerraform(this._id),
      local_cert: cdktf.stringToTerraform(this._localCert),
      passwd: cdktf.listMapper(cdktf.stringToTerraform, false)(this._passwd),
      port: cdktf.numberToTerraform(this._port),
      secure_option: cdktf.stringToTerraform(this._secureOption),
      server: cdktf.stringToTerraform(this._server),
      ssl_protocol: cdktf.stringToTerraform(this._sslProtocol),
      user: cdktf.stringToTerraform(this._user),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auth: {
        value: cdktf.stringToHclTerraform(this._auth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_type: {
        value: cdktf.stringToHclTerraform(this._authType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fosid: {
        value: cdktf.stringToHclTerraform(this._fosid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      from: {
        value: cdktf.stringToHclTerraform(this._from),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      from_passwd: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._fromPasswd),
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
      local_cert: {
        value: cdktf.stringToHclTerraform(this._localCert),
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
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      secure_option: {
        value: cdktf.stringToHclTerraform(this._secureOption),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server: {
        value: cdktf.stringToHclTerraform(this._server),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_protocol: {
        value: cdktf.stringToHclTerraform(this._sslProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user: {
        value: cdktf.stringToHclTerraform(this._user),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
