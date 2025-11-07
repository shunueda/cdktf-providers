// https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/siem_sftp_connection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SiemSftpConnectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Client account id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/siem_sftp_connection#account_id SiemSftpConnection#account_id}
  */
  readonly accountId?: string;
  /**
  * Name of the connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/siem_sftp_connection#connection_name SiemSftpConnection#connection_name}
  */
  readonly connectionName: string;
  /**
  * Sftp endpoint host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/siem_sftp_connection#host SiemSftpConnection#host}
  */
  readonly host: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/siem_sftp_connection#id SiemSftpConnection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * inputHash
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/siem_sftp_connection#input_hash SiemSftpConnection#input_hash}
  */
  readonly inputHash?: string;
  /**
  * Sftp password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/siem_sftp_connection#password SiemSftpConnection#password}
  */
  readonly password?: string;
  /**
  * Sftp path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/siem_sftp_connection#path SiemSftpConnection#path}
  */
  readonly path: string;
  /**
  * Sftp username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/siem_sftp_connection#username SiemSftpConnection#username}
  */
  readonly username: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/siem_sftp_connection incapsula_siem_sftp_connection}
*/
export class SiemSftpConnection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "incapsula_siem_sftp_connection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SiemSftpConnection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SiemSftpConnection to import
  * @param importFromId The id of the existing SiemSftpConnection that should be imported. Refer to the {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/siem_sftp_connection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SiemSftpConnection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "incapsula_siem_sftp_connection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/siem_sftp_connection incapsula_siem_sftp_connection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SiemSftpConnectionConfig
  */
  public constructor(scope: Construct, id: string, config: SiemSftpConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'incapsula_siem_sftp_connection',
      terraformGeneratorMetadata: {
        providerName: 'incapsula',
        providerVersion: '3.35.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountId = config.accountId;
    this._connectionName = config.connectionName;
    this._host = config.host;
    this._id = config.id;
    this._inputHash = config.inputHash;
    this._password = config.password;
    this._path = config.path;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: true, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // connection_name - computed: false, optional: false, required: true
  private _connectionName?: string; 
  public get connectionName() {
    return this.getStringAttribute('connection_name');
  }
  public set connectionName(value: string) {
    this._connectionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionNameInput() {
    return this._connectionName;
  }

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

  // input_hash - computed: true, optional: true, required: false
  private _inputHash?: string; 
  public get inputHash() {
    return this.getStringAttribute('input_hash');
  }
  public set inputHash(value: string) {
    this._inputHash = value;
  }
  public resetInputHash() {
    this._inputHash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputHashInput() {
    return this._inputHash;
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

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      connection_name: cdktf.stringToTerraform(this._connectionName),
      host: cdktf.stringToTerraform(this._host),
      id: cdktf.stringToTerraform(this._id),
      input_hash: cdktf.stringToTerraform(this._inputHash),
      password: cdktf.stringToTerraform(this._password),
      path: cdktf.stringToTerraform(this._path),
      username: cdktf.stringToTerraform(this._username),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_id: {
        value: cdktf.stringToHclTerraform(this._accountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connection_name: {
        value: cdktf.stringToHclTerraform(this._connectionName),
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
      input_hash: {
        value: cdktf.stringToHclTerraform(this._inputHash),
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
      path: {
        value: cdktf.stringToHclTerraform(this._path),
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
