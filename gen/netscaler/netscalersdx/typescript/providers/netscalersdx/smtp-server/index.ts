// https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/smtp_server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SmtpServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/smtp_server#id SmtpServer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Is authentication enabled for this smtp server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/smtp_server#is_auth SmtpServer#is_auth}
  */
  readonly isAuth?: boolean | cdktf.IResolvable;
  /**
  * Is this smtp server is SSL support configured..
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/smtp_server#is_ssl SmtpServer#is_ssl}
  */
  readonly isSsl?: boolean | cdktf.IResolvable;
  /**
  * Password for the smtp server. Maximum length =  128
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/smtp_server#password SmtpServer#password}
  */
  readonly password?: string;
  /**
  * SMTP Server port address.. Minimum value =  1 Maximum value =  
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/smtp_server#port SmtpServer#port}
  */
  readonly port?: number;
  /**
  * Email Address from which email is to be sent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/smtp_server#sender_mail_id SmtpServer#sender_mail_id}
  */
  readonly senderMailId?: string;
  /**
  * SMTP server name. Minimum length =  1 Maximum length =  128
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/smtp_server#server_name SmtpServer#server_name}
  */
  readonly serverName: string;
  /**
  * Username for the smtp server. Maximum length =  128
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/smtp_server#username SmtpServer#username}
  */
  readonly username?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/smtp_server netscalersdx_smtp_server}
*/
export class SmtpServer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netscalersdx_smtp_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SmtpServer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SmtpServer to import
  * @param importFromId The id of the existing SmtpServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/smtp_server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SmtpServer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netscalersdx_smtp_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/smtp_server netscalersdx_smtp_server} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SmtpServerConfig
  */
  public constructor(scope: Construct, id: string, config: SmtpServerConfig) {
    super(scope, id, {
      terraformResourceType: 'netscalersdx_smtp_server',
      terraformGeneratorMetadata: {
        providerName: 'netscalersdx',
        providerVersion: '0.7.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._isAuth = config.isAuth;
    this._isSsl = config.isSsl;
    this._password = config.password;
    this._port = config.port;
    this._senderMailId = config.senderMailId;
    this._serverName = config.serverName;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // is_auth - computed: true, optional: true, required: false
  private _isAuth?: boolean | cdktf.IResolvable; 
  public get isAuth() {
    return this.getBooleanAttribute('is_auth');
  }
  public set isAuth(value: boolean | cdktf.IResolvable) {
    this._isAuth = value;
  }
  public resetIsAuth() {
    this._isAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAuthInput() {
    return this._isAuth;
  }

  // is_ssl - computed: true, optional: true, required: false
  private _isSsl?: boolean | cdktf.IResolvable; 
  public get isSsl() {
    return this.getBooleanAttribute('is_ssl');
  }
  public set isSsl(value: boolean | cdktf.IResolvable) {
    this._isSsl = value;
  }
  public resetIsSsl() {
    this._isSsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSslInput() {
    return this._isSsl;
  }

  // password - computed: true, optional: true, required: false
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

  // sender_mail_id - computed: true, optional: true, required: false
  private _senderMailId?: string; 
  public get senderMailId() {
    return this.getStringAttribute('sender_mail_id');
  }
  public set senderMailId(value: string) {
    this._senderMailId = value;
  }
  public resetSenderMailId() {
    this._senderMailId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get senderMailIdInput() {
    return this._senderMailId;
  }

  // server_name - computed: false, optional: false, required: true
  private _serverName?: string; 
  public get serverName() {
    return this.getStringAttribute('server_name');
  }
  public set serverName(value: string) {
    this._serverName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverNameInput() {
    return this._serverName;
  }

  // username - computed: true, optional: true, required: false
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      is_auth: cdktf.booleanToTerraform(this._isAuth),
      is_ssl: cdktf.booleanToTerraform(this._isSsl),
      password: cdktf.stringToTerraform(this._password),
      port: cdktf.numberToTerraform(this._port),
      sender_mail_id: cdktf.stringToTerraform(this._senderMailId),
      server_name: cdktf.stringToTerraform(this._serverName),
      username: cdktf.stringToTerraform(this._username),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_auth: {
        value: cdktf.booleanToHclTerraform(this._isAuth),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_ssl: {
        value: cdktf.booleanToHclTerraform(this._isSsl),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sender_mail_id: {
        value: cdktf.stringToHclTerraform(this._senderMailId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_name: {
        value: cdktf.stringToHclTerraform(this._serverName),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
