// https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/config_backup
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConfigBackupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the config backup file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/config_backup#name ConfigBackup#name}
  */
  readonly name: string;
  /**
  * Protocol for config backup file transfer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/config_backup#protocol ConfigBackup#protocol}
  */
  readonly protocol: string;
  /**
  * The hostname or IP address of the remote server used for storing the config backup file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/config_backup#remote_host ConfigBackup#remote_host}
  */
  readonly remoteHost: string;
  /**
  * User password for the remote server used for exporting the created config backup file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/config_backup#remote_password ConfigBackup#remote_password}
  */
  readonly remotePassword: string;
  /**
  * The path on the remote server used for uploading the created config backup file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/config_backup#remote_path ConfigBackup#remote_path}
  */
  readonly remotePath: string;
  /**
  * User name for the remote server used for exporting the created config backup file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/config_backup#remote_user ConfigBackup#remote_user}
  */
  readonly remoteUser: string;
  /**
  * The number of seconds to wait for config backup file export to finish. The value must be between 150 and 3600
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/config_backup#timeout ConfigBackup#timeout}
  */
  readonly timeout?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/config_backup f5os_config_backup}
*/
export class ConfigBackup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "f5os_config_backup";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConfigBackup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConfigBackup to import
  * @param importFromId The id of the existing ConfigBackup that should be imported. Refer to the {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/config_backup#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConfigBackup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "f5os_config_backup", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/config_backup f5os_config_backup} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConfigBackupConfig
  */
  public constructor(scope: Construct, id: string, config: ConfigBackupConfig) {
    super(scope, id, {
      terraformResourceType: 'f5os_config_backup',
      terraformGeneratorMetadata: {
        providerName: 'f5os',
        providerVersion: '1.10.0',
        providerVersionConstraint: '1.10.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
    this._protocol = config.protocol;
    this._remoteHost = config.remoteHost;
    this._remotePassword = config.remotePassword;
    this._remotePath = config.remotePath;
    this._remoteUser = config.remoteUser;
    this._timeout = config.timeout;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // remote_host - computed: false, optional: false, required: true
  private _remoteHost?: string; 
  public get remoteHost() {
    return this.getStringAttribute('remote_host');
  }
  public set remoteHost(value: string) {
    this._remoteHost = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteHostInput() {
    return this._remoteHost;
  }

  // remote_password - computed: false, optional: false, required: true
  private _remotePassword?: string; 
  public get remotePassword() {
    return this.getStringAttribute('remote_password');
  }
  public set remotePassword(value: string) {
    this._remotePassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remotePasswordInput() {
    return this._remotePassword;
  }

  // remote_path - computed: false, optional: false, required: true
  private _remotePath?: string; 
  public get remotePath() {
    return this.getStringAttribute('remote_path');
  }
  public set remotePath(value: string) {
    this._remotePath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remotePathInput() {
    return this._remotePath;
  }

  // remote_user - computed: false, optional: false, required: true
  private _remoteUser?: string; 
  public get remoteUser() {
    return this.getStringAttribute('remote_user');
  }
  public set remoteUser(value: string) {
    this._remoteUser = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteUserInput() {
    return this._remoteUser;
  }

  // timeout - computed: true, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
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
      name: cdktf.stringToTerraform(this._name),
      protocol: cdktf.stringToTerraform(this._protocol),
      remote_host: cdktf.stringToTerraform(this._remoteHost),
      remote_password: cdktf.stringToTerraform(this._remotePassword),
      remote_path: cdktf.stringToTerraform(this._remotePath),
      remote_user: cdktf.stringToTerraform(this._remoteUser),
      timeout: cdktf.numberToTerraform(this._timeout),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_host: {
        value: cdktf.stringToHclTerraform(this._remoteHost),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_password: {
        value: cdktf.stringToHclTerraform(this._remotePassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_path: {
        value: cdktf.stringToHclTerraform(this._remotePath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_user: {
        value: cdktf.stringToHclTerraform(this._remoteUser),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeout: {
        value: cdktf.numberToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
