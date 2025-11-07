// https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.2/docs/resources/user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserConfig extends cdktf.TerraformMetaArguments {
  /**
  * The GID of the user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.2/docs/resources/user#gid User#gid}
  */
  readonly gid?: string;
  /**
  * The users home directory
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.2/docs/resources/user#home_dir User#home_dir}
  */
  readonly homeDir?: string;
  /**
  * The name of the user you wish to create or update
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.2/docs/resources/user#name User#name}
  */
  readonly name: string;
  /**
  * The users default shell
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.2/docs/resources/user#shell User#shell}
  */
  readonly shell?: string;
  /**
  * 
  * - `transport.ssh` (Object) the ssh transport configuration
  * - `transport.ssh.user` (String) the ssh login user|string
  * - `transport.ssh.host` (String) the remote host to access
  * - `transport.ssh.private_key` (String) the private key as a string
  * - `transport.ssh.private_key_path` (String) the path to a private key file
  * - `transport.ssh.passphrase` (String) a passphrase if the private key requires one
  * - `transport.ssh.passphrase_path` (String) a path to a file with the passphrase for the private key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.2/docs/resources/user#transport User#transport}
  */
  readonly transport?: { [key: string]: any };
  /**
  * The UID of the user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.2/docs/resources/user#uid User#uid}
  */
  readonly uid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.2/docs/resources/user enos_user}
*/
export class User extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "enos_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a User resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the User to import
  * @param importFromId The id of the existing User that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.2/docs/resources/user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the User to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "enos_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.2/docs/resources/user enos_user} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserConfig
  */
  public constructor(scope: Construct, id: string, config: UserConfig) {
    super(scope, id, {
      terraformResourceType: 'enos_user',
      terraformGeneratorMetadata: {
        providerName: 'enos',
        providerVersion: '0.6.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._gid = config.gid;
    this._homeDir = config.homeDir;
    this._name = config.name;
    this._shell = config.shell;
    this._transport = config.transport;
    this._uid = config.uid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // gid - computed: true, optional: true, required: false
  private _gid?: string; 
  public get gid() {
    return this.getStringAttribute('gid');
  }
  public set gid(value: string) {
    this._gid = value;
  }
  public resetGid() {
    this._gid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gidInput() {
    return this._gid;
  }

  // home_dir - computed: true, optional: true, required: false
  private _homeDir?: string; 
  public get homeDir() {
    return this.getStringAttribute('home_dir');
  }
  public set homeDir(value: string) {
    this._homeDir = value;
  }
  public resetHomeDir() {
    this._homeDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get homeDirInput() {
    return this._homeDir;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // shell - computed: true, optional: true, required: false
  private _shell?: string; 
  public get shell() {
    return this.getStringAttribute('shell');
  }
  public set shell(value: string) {
    this._shell = value;
  }
  public resetShell() {
    this._shell = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shellInput() {
    return this._shell;
  }

  // transport - computed: false, optional: true, required: false
  private _transport?: { [key: string]: any }; 
  public get transport() {
    return this.getAnyMapAttribute('transport');
  }
  public set transport(value: { [key: string]: any }) {
    this._transport = value;
  }
  public resetTransport() {
    this._transport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportInput() {
    return this._transport;
  }

  // uid - computed: true, optional: true, required: false
  private _uid?: string; 
  public get uid() {
    return this.getStringAttribute('uid');
  }
  public set uid(value: string) {
    this._uid = value;
  }
  public resetUid() {
    this._uid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uidInput() {
    return this._uid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      gid: cdktf.stringToTerraform(this._gid),
      home_dir: cdktf.stringToTerraform(this._homeDir),
      name: cdktf.stringToTerraform(this._name),
      shell: cdktf.stringToTerraform(this._shell),
      transport: cdktf.hashMapper(cdktf.anyToTerraform)(this._transport),
      uid: cdktf.stringToTerraform(this._uid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      gid: {
        value: cdktf.stringToHclTerraform(this._gid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      home_dir: {
        value: cdktf.stringToHclTerraform(this._homeDir),
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
      shell: {
        value: cdktf.stringToHclTerraform(this._shell),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transport: {
        value: cdktf.hashMapperHcl(cdktf.anyToHclTerraform)(this._transport),
        isBlock: false,
        type: "map",
        storageClassType: "anyMap",
      },
      uid: {
        value: cdktf.stringToHclTerraform(this._uid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
