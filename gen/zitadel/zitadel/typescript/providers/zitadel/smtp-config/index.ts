// https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/smtp_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SmtpConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Host and port address to your SMTP server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/smtp_config#host SmtpConfig#host}
  */
  readonly host: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/smtp_config#id SmtpConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Password used to communicate with your SMTP server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/smtp_config#password SmtpConfig#password}
  */
  readonly password?: string;
  /**
  * Address to reply to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/smtp_config#reply_to_address SmtpConfig#reply_to_address}
  */
  readonly replyToAddress?: string;
  /**
  * Address used to send emails.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/smtp_config#sender_address SmtpConfig#sender_address}
  */
  readonly senderAddress: string;
  /**
  * Sender name used to send emails.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/smtp_config#sender_name SmtpConfig#sender_name}
  */
  readonly senderName: string;
  /**
  * Set the SMTP configuration active after creating/updating.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/smtp_config#set_active SmtpConfig#set_active}
  */
  readonly setActive?: boolean | cdktf.IResolvable;
  /**
  * TLS used to communicate with your SMTP server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/smtp_config#tls SmtpConfig#tls}
  */
  readonly tls?: boolean | cdktf.IResolvable;
  /**
  * User used to communicate with your SMTP server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/smtp_config#user SmtpConfig#user}
  */
  readonly user?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/smtp_config zitadel_smtp_config}
*/
export class SmtpConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zitadel_smtp_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SmtpConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SmtpConfig to import
  * @param importFromId The id of the existing SmtpConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/smtp_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SmtpConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zitadel_smtp_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/smtp_config zitadel_smtp_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SmtpConfigConfig
  */
  public constructor(scope: Construct, id: string, config: SmtpConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'zitadel_smtp_config',
      terraformGeneratorMetadata: {
        providerName: 'zitadel',
        providerVersion: '2.3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._host = config.host;
    this._id = config.id;
    this._password = config.password;
    this._replyToAddress = config.replyToAddress;
    this._senderAddress = config.senderAddress;
    this._senderName = config.senderName;
    this._setActive = config.setActive;
    this._tls = config.tls;
    this._user = config.user;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
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

  // reply_to_address - computed: false, optional: true, required: false
  private _replyToAddress?: string; 
  public get replyToAddress() {
    return this.getStringAttribute('reply_to_address');
  }
  public set replyToAddress(value: string) {
    this._replyToAddress = value;
  }
  public resetReplyToAddress() {
    this._replyToAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replyToAddressInput() {
    return this._replyToAddress;
  }

  // sender_address - computed: false, optional: false, required: true
  private _senderAddress?: string; 
  public get senderAddress() {
    return this.getStringAttribute('sender_address');
  }
  public set senderAddress(value: string) {
    this._senderAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get senderAddressInput() {
    return this._senderAddress;
  }

  // sender_name - computed: false, optional: false, required: true
  private _senderName?: string; 
  public get senderName() {
    return this.getStringAttribute('sender_name');
  }
  public set senderName(value: string) {
    this._senderName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get senderNameInput() {
    return this._senderName;
  }

  // set_active - computed: false, optional: true, required: false
  private _setActive?: boolean | cdktf.IResolvable; 
  public get setActive() {
    return this.getBooleanAttribute('set_active');
  }
  public set setActive(value: boolean | cdktf.IResolvable) {
    this._setActive = value;
  }
  public resetSetActive() {
    this._setActive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setActiveInput() {
    return this._setActive;
  }

  // tls - computed: false, optional: true, required: false
  private _tls?: boolean | cdktf.IResolvable; 
  public get tls() {
    return this.getBooleanAttribute('tls');
  }
  public set tls(value: boolean | cdktf.IResolvable) {
    this._tls = value;
  }
  public resetTls() {
    this._tls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls;
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
      host: cdktf.stringToTerraform(this._host),
      id: cdktf.stringToTerraform(this._id),
      password: cdktf.stringToTerraform(this._password),
      reply_to_address: cdktf.stringToTerraform(this._replyToAddress),
      sender_address: cdktf.stringToTerraform(this._senderAddress),
      sender_name: cdktf.stringToTerraform(this._senderName),
      set_active: cdktf.booleanToTerraform(this._setActive),
      tls: cdktf.booleanToTerraform(this._tls),
      user: cdktf.stringToTerraform(this._user),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      host: {
        value: cdktf.stringToHclTerraform(this._host),
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
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reply_to_address: {
        value: cdktf.stringToHclTerraform(this._replyToAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sender_address: {
        value: cdktf.stringToHclTerraform(this._senderAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sender_name: {
        value: cdktf.stringToHclTerraform(this._senderName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      set_active: {
        value: cdktf.booleanToHclTerraform(this._setActive),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tls: {
        value: cdktf.booleanToHclTerraform(this._tls),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
