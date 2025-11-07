// https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/configure_smtp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConfigureSmtpConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/configure_smtp#id ConfigureSmtp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies the password of the SMTP user. This is required if username is specified in the request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/configure_smtp#password ConfigureSmtp#password}
  */
  readonly password?: string;
  /**
  * Specifies the SMTP port. Usually 465 or 587. For authenticated connection, it is generally 587.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/configure_smtp#port ConfigureSmtp#port}
  */
  readonly port: number;
  /**
  * This is used for setting Sender field in SMTP header. This has to be in valid email format, and could be different from username, and it's a required field if the username is not of valid email address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/configure_smtp#sender_email_address ConfigureSmtp#sender_email_address}
  */
  readonly senderEmailAddress: string;
  /**
  * Specifies the IP address or the FQDN of the SMTP server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/configure_smtp#smtp_server ConfigureSmtp#smtp_server}
  */
  readonly smtpServer: string;
  /**
  * This is set to true when the SMTP server uses SSL/TLS without supporting STARTTLS. Typically, this is used for port 465.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/configure_smtp#use_ssl ConfigureSmtp#use_ssl}
  */
  readonly useSsl?: boolean | cdktf.IResolvable;
  /**
  * Specifies the username which will be used to connect to the SMTP server. If username is not specified, then it would imply that SMTP server is set up for unauthenticated access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/configure_smtp#username ConfigureSmtp#username}
  */
  readonly username?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/configure_smtp cohesity_configure_smtp}
*/
export class ConfigureSmtp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cohesity_configure_smtp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConfigureSmtp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConfigureSmtp to import
  * @param importFromId The id of the existing ConfigureSmtp that should be imported. Refer to the {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/configure_smtp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConfigureSmtp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cohesity_configure_smtp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/configure_smtp cohesity_configure_smtp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConfigureSmtpConfig
  */
  public constructor(scope: Construct, id: string, config: ConfigureSmtpConfig) {
    super(scope, id, {
      terraformResourceType: 'cohesity_configure_smtp',
      terraformGeneratorMetadata: {
        providerName: 'cohesity',
        providerVersion: '2.1.3'
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
    this._password = config.password;
    this._port = config.port;
    this._senderEmailAddress = config.senderEmailAddress;
    this._smtpServer = config.smtpServer;
    this._useSsl = config.useSsl;
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

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // sender_email_address - computed: false, optional: false, required: true
  private _senderEmailAddress?: string; 
  public get senderEmailAddress() {
    return this.getStringAttribute('sender_email_address');
  }
  public set senderEmailAddress(value: string) {
    this._senderEmailAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get senderEmailAddressInput() {
    return this._senderEmailAddress;
  }

  // smtp_server - computed: false, optional: false, required: true
  private _smtpServer?: string; 
  public get smtpServer() {
    return this.getStringAttribute('smtp_server');
  }
  public set smtpServer(value: string) {
    this._smtpServer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get smtpServerInput() {
    return this._smtpServer;
  }

  // use_ssl - computed: false, optional: true, required: false
  private _useSsl?: boolean | cdktf.IResolvable; 
  public get useSsl() {
    return this.getBooleanAttribute('use_ssl');
  }
  public set useSsl(value: boolean | cdktf.IResolvable) {
    this._useSsl = value;
  }
  public resetUseSsl() {
    this._useSsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useSslInput() {
    return this._useSsl;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      password: cdktf.stringToTerraform(this._password),
      port: cdktf.numberToTerraform(this._port),
      sender_email_address: cdktf.stringToTerraform(this._senderEmailAddress),
      smtp_server: cdktf.stringToTerraform(this._smtpServer),
      use_ssl: cdktf.booleanToTerraform(this._useSsl),
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
      sender_email_address: {
        value: cdktf.stringToHclTerraform(this._senderEmailAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      smtp_server: {
        value: cdktf.stringToHclTerraform(this._smtpServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_ssl: {
        value: cdktf.booleanToHclTerraform(this._useSsl),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
