// https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/target_ssh
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TargetSshConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/target_ssh#description TargetSsh#description}
  */
  readonly description?: string;
  /**
  * SSH host name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/target_ssh#host TargetSsh#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/target_ssh#id TargetSsh#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Key name. The key will be used to encrypt the target secret value. If key name is not specified, the account default protection key is used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/target_ssh#key TargetSsh#key}
  */
  readonly key?: string;
  /**
  * Target name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/target_ssh#name TargetSsh#name}
  */
  readonly name: string;
  /**
  * SSH port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/target_ssh#port TargetSsh#port}
  */
  readonly port?: string;
  /**
  * SSH private key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/target_ssh#private_key TargetSsh#private_key}
  */
  readonly privateKey?: string;
  /**
  * SSH private key password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/target_ssh#private_key_password TargetSsh#private_key_password}
  */
  readonly privateKeyPassword?: string;
  /**
  * SSH password to rotate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/target_ssh#ssh_password TargetSsh#ssh_password}
  */
  readonly sshPassword?: string;
  /**
  * SSH username
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/target_ssh#ssh_username TargetSsh#ssh_username}
  */
  readonly sshUsername?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/target_ssh akeyless_target_ssh}
*/
export class TargetSsh extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akeyless_target_ssh";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TargetSsh resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TargetSsh to import
  * @param importFromId The id of the existing TargetSsh that should be imported. Refer to the {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/target_ssh#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TargetSsh to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akeyless_target_ssh", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/target_ssh akeyless_target_ssh} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TargetSshConfig
  */
  public constructor(scope: Construct, id: string, config: TargetSshConfig) {
    super(scope, id, {
      terraformResourceType: 'akeyless_target_ssh',
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
    this._description = config.description;
    this._host = config.host;
    this._id = config.id;
    this._key = config.key;
    this._name = config.name;
    this._port = config.port;
    this._privateKey = config.privateKey;
    this._privateKeyPassword = config.privateKeyPassword;
    this._sshPassword = config.sshPassword;
    this._sshUsername = config.sshUsername;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
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

  // port - computed: false, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // private_key - computed: false, optional: true, required: false
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  public resetPrivateKey() {
    this._privateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }

  // private_key_password - computed: false, optional: true, required: false
  private _privateKeyPassword?: string; 
  public get privateKeyPassword() {
    return this.getStringAttribute('private_key_password');
  }
  public set privateKeyPassword(value: string) {
    this._privateKeyPassword = value;
  }
  public resetPrivateKeyPassword() {
    this._privateKeyPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyPasswordInput() {
    return this._privateKeyPassword;
  }

  // ssh_password - computed: false, optional: true, required: false
  private _sshPassword?: string; 
  public get sshPassword() {
    return this.getStringAttribute('ssh_password');
  }
  public set sshPassword(value: string) {
    this._sshPassword = value;
  }
  public resetSshPassword() {
    this._sshPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshPasswordInput() {
    return this._sshPassword;
  }

  // ssh_username - computed: false, optional: true, required: false
  private _sshUsername?: string; 
  public get sshUsername() {
    return this.getStringAttribute('ssh_username');
  }
  public set sshUsername(value: string) {
    this._sshUsername = value;
  }
  public resetSshUsername() {
    this._sshUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshUsernameInput() {
    return this._sshUsername;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      host: cdktf.stringToTerraform(this._host),
      id: cdktf.stringToTerraform(this._id),
      key: cdktf.stringToTerraform(this._key),
      name: cdktf.stringToTerraform(this._name),
      port: cdktf.stringToTerraform(this._port),
      private_key: cdktf.stringToTerraform(this._privateKey),
      private_key_password: cdktf.stringToTerraform(this._privateKeyPassword),
      ssh_password: cdktf.stringToTerraform(this._sshPassword),
      ssh_username: cdktf.stringToTerraform(this._sshUsername),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
      port: {
        value: cdktf.stringToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_key: {
        value: cdktf.stringToHclTerraform(this._privateKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_key_password: {
        value: cdktf.stringToHclTerraform(this._privateKeyPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssh_password: {
        value: cdktf.stringToHclTerraform(this._sshPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssh_username: {
        value: cdktf.stringToHclTerraform(this._sshUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
