// https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/target_zerossl
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TargetZerosslConfig extends cdktf.TerraformMetaArguments {
  /**
  * API Key of the ZeroSSLTarget account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/target_zerossl#api_key TargetZerossl#api_key}
  */
  readonly apiKey: string;
  /**
  * Description of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/target_zerossl#description TargetZerossl#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/target_zerossl#id TargetZerossl#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * FQDN of the IMAP service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/target_zerossl#imap_fqdn TargetZerossl#imap_fqdn}
  */
  readonly imapFqdn: string;
  /**
  * Password to access the IMAP service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/target_zerossl#imap_password TargetZerossl#imap_password}
  */
  readonly imapPassword: string;
  /**
  * Port of the IMAP service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/target_zerossl#imap_port TargetZerossl#imap_port}
  */
  readonly imapPort?: string;
  /**
  * Email to use when asking ZeroSSL to send a validation email, if empty will use username
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/target_zerossl#imap_target_email TargetZerossl#imap_target_email}
  */
  readonly imapTargetEmail?: string;
  /**
  * Username to access the IMAP service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/target_zerossl#imap_username TargetZerossl#imap_username}
  */
  readonly imapUsername: string;
  /**
  * Key name. The key will be used to encrypt the target secret value. If key name is not specified, the account default protection key is used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/target_zerossl#key TargetZerossl#key}
  */
  readonly key?: string;
  /**
  * Target name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/target_zerossl#name TargetZerossl#name}
  */
  readonly name: string;
  /**
  * Timeout waiting for certificate validation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/target_zerossl#timeout TargetZerossl#timeout}
  */
  readonly timeout?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/target_zerossl akeyless_target_zerossl}
*/
export class TargetZerossl extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akeyless_target_zerossl";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TargetZerossl resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TargetZerossl to import
  * @param importFromId The id of the existing TargetZerossl that should be imported. Refer to the {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/target_zerossl#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TargetZerossl to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akeyless_target_zerossl", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/target_zerossl akeyless_target_zerossl} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TargetZerosslConfig
  */
  public constructor(scope: Construct, id: string, config: TargetZerosslConfig) {
    super(scope, id, {
      terraformResourceType: 'akeyless_target_zerossl',
      terraformGeneratorMetadata: {
        providerName: 'akeyless',
        providerVersion: '1.11.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._apiKey = config.apiKey;
    this._description = config.description;
    this._id = config.id;
    this._imapFqdn = config.imapFqdn;
    this._imapPassword = config.imapPassword;
    this._imapPort = config.imapPort;
    this._imapTargetEmail = config.imapTargetEmail;
    this._imapUsername = config.imapUsername;
    this._key = config.key;
    this._name = config.name;
    this._timeout = config.timeout;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_key - computed: false, optional: false, required: true
  private _apiKey?: string; 
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }
  public set apiKey(value: string) {
    this._apiKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // imap_fqdn - computed: false, optional: false, required: true
  private _imapFqdn?: string; 
  public get imapFqdn() {
    return this.getStringAttribute('imap_fqdn');
  }
  public set imapFqdn(value: string) {
    this._imapFqdn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imapFqdnInput() {
    return this._imapFqdn;
  }

  // imap_password - computed: false, optional: false, required: true
  private _imapPassword?: string; 
  public get imapPassword() {
    return this.getStringAttribute('imap_password');
  }
  public set imapPassword(value: string) {
    this._imapPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imapPasswordInput() {
    return this._imapPassword;
  }

  // imap_port - computed: false, optional: true, required: false
  private _imapPort?: string; 
  public get imapPort() {
    return this.getStringAttribute('imap_port');
  }
  public set imapPort(value: string) {
    this._imapPort = value;
  }
  public resetImapPort() {
    this._imapPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imapPortInput() {
    return this._imapPort;
  }

  // imap_target_email - computed: false, optional: true, required: false
  private _imapTargetEmail?: string; 
  public get imapTargetEmail() {
    return this.getStringAttribute('imap_target_email');
  }
  public set imapTargetEmail(value: string) {
    this._imapTargetEmail = value;
  }
  public resetImapTargetEmail() {
    this._imapTargetEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imapTargetEmailInput() {
    return this._imapTargetEmail;
  }

  // imap_username - computed: false, optional: false, required: true
  private _imapUsername?: string; 
  public get imapUsername() {
    return this.getStringAttribute('imap_username');
  }
  public set imapUsername(value: string) {
    this._imapUsername = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imapUsernameInput() {
    return this._imapUsername;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // timeout - computed: false, optional: true, required: false
  private _timeout?: string; 
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
  public set timeout(value: string) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_key: cdktf.stringToTerraform(this._apiKey),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      imap_fqdn: cdktf.stringToTerraform(this._imapFqdn),
      imap_password: cdktf.stringToTerraform(this._imapPassword),
      imap_port: cdktf.stringToTerraform(this._imapPort),
      imap_target_email: cdktf.stringToTerraform(this._imapTargetEmail),
      imap_username: cdktf.stringToTerraform(this._imapUsername),
      key: cdktf.stringToTerraform(this._key),
      name: cdktf.stringToTerraform(this._name),
      timeout: cdktf.stringToTerraform(this._timeout),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_key: {
        value: cdktf.stringToHclTerraform(this._apiKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      imap_fqdn: {
        value: cdktf.stringToHclTerraform(this._imapFqdn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      imap_password: {
        value: cdktf.stringToHclTerraform(this._imapPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      imap_port: {
        value: cdktf.stringToHclTerraform(this._imapPort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      imap_target_email: {
        value: cdktf.stringToHclTerraform(this._imapTargetEmail),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      imap_username: {
        value: cdktf.stringToHclTerraform(this._imapUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key: {
        value: cdktf.stringToHclTerraform(this._key),
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
      timeout: {
        value: cdktf.stringToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
