// https://registry.terraform.io/providers/go-gandi/gandi/2.3.0/docs/resources/mailbox
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MailboxConfig extends cdktf.TerraformMetaArguments {
  /**
  * Aliases for email
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gandi/gandi/2.3.0/docs/resources/mailbox#aliases Mailbox#aliases}
  */
  readonly aliases?: string[];
  /**
  * Domain name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gandi/gandi/2.3.0/docs/resources/mailbox#domain Mailbox#domain}
  */
  readonly domain: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gandi/gandi/2.3.0/docs/resources/mailbox#id Mailbox#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Login
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gandi/gandi/2.3.0/docs/resources/mailbox#login Mailbox#login}
  */
  readonly login: string;
  /**
  * Mailbox type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gandi/gandi/2.3.0/docs/resources/mailbox#mailbox_type Mailbox#mailbox_type}
  */
  readonly mailboxType?: string;
  /**
  * Password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gandi/gandi/2.3.0/docs/resources/mailbox#password Mailbox#password}
  */
  readonly password: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/go-gandi/gandi/2.3.0/docs/resources/mailbox gandi_mailbox}
*/
export class Mailbox extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gandi_mailbox";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Mailbox resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Mailbox to import
  * @param importFromId The id of the existing Mailbox that should be imported. Refer to the {@link https://registry.terraform.io/providers/go-gandi/gandi/2.3.0/docs/resources/mailbox#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Mailbox to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gandi_mailbox", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/go-gandi/gandi/2.3.0/docs/resources/mailbox gandi_mailbox} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MailboxConfig
  */
  public constructor(scope: Construct, id: string, config: MailboxConfig) {
    super(scope, id, {
      terraformResourceType: 'gandi_mailbox',
      terraformGeneratorMetadata: {
        providerName: 'gandi',
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
    this._aliases = config.aliases;
    this._domain = config.domain;
    this._id = config.id;
    this._login = config.login;
    this._mailboxType = config.mailboxType;
    this._password = config.password;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aliases - computed: false, optional: true, required: false
  private _aliases?: string[]; 
  public get aliases() {
    return this.getListAttribute('aliases');
  }
  public set aliases(value: string[]) {
    this._aliases = value;
  }
  public resetAliases() {
    this._aliases = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasesInput() {
    return this._aliases;
  }

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
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

  // login - computed: false, optional: false, required: true
  private _login?: string; 
  public get login() {
    return this.getStringAttribute('login');
  }
  public set login(value: string) {
    this._login = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loginInput() {
    return this._login;
  }

  // mailbox_type - computed: false, optional: true, required: false
  private _mailboxType?: string; 
  public get mailboxType() {
    return this.getStringAttribute('mailbox_type');
  }
  public set mailboxType(value: string) {
    this._mailboxType = value;
  }
  public resetMailboxType() {
    this._mailboxType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mailboxTypeInput() {
    return this._mailboxType;
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aliases: cdktf.listMapper(cdktf.stringToTerraform, false)(this._aliases),
      domain: cdktf.stringToTerraform(this._domain),
      id: cdktf.stringToTerraform(this._id),
      login: cdktf.stringToTerraform(this._login),
      mailbox_type: cdktf.stringToTerraform(this._mailboxType),
      password: cdktf.stringToTerraform(this._password),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aliases: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._aliases),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
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
      login: {
        value: cdktf.stringToHclTerraform(this._login),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mailbox_type: {
        value: cdktf.stringToHclTerraform(this._mailboxType),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
