// https://registry.terraform.io/providers/tenstad/remote/0.2.1/docs/data-sources/file
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataRemoteFileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tenstad/remote/0.2.1/docs/data-sources/file#id DataRemoteFile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Path to file on remote host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tenstad/remote/0.2.1/docs/data-sources/file#path DataRemoteFile#path}
  */
  readonly path: string;
  /**
  * conn block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tenstad/remote/0.2.1/docs/data-sources/file#conn DataRemoteFile#conn}
  */
  readonly conn?: DataRemoteFileConn;
}
export interface DataRemoteFileConn {
  /**
  * Use a local SSH agent to login to the remote host. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tenstad/remote/0.2.1/docs/data-sources/file#agent DataRemoteFile#agent}
  */
  readonly agent?: boolean | cdktf.IResolvable;
  /**
  * The remote host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tenstad/remote/0.2.1/docs/data-sources/file#host DataRemoteFile#host}
  */
  readonly host: string;
  /**
  * The pasword for the user on the remote host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tenstad/remote/0.2.1/docs/data-sources/file#password DataRemoteFile#password}
  */
  readonly password?: string;
  /**
  * The ssh port on the remote host. Defaults to `22`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tenstad/remote/0.2.1/docs/data-sources/file#port DataRemoteFile#port}
  */
  readonly port?: number;
  /**
  * The private key used to login to the remote host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tenstad/remote/0.2.1/docs/data-sources/file#private_key DataRemoteFile#private_key}
  */
  readonly privateKey?: string;
  /**
  * The name of the local environment variable containing the private key used to login to the remote host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tenstad/remote/0.2.1/docs/data-sources/file#private_key_env_var DataRemoteFile#private_key_env_var}
  */
  readonly privateKeyEnvVar?: string;
  /**
  * Passphrase for the encrypted private key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tenstad/remote/0.2.1/docs/data-sources/file#private_key_pass DataRemoteFile#private_key_pass}
  */
  readonly privateKeyPass?: string;
  /**
  * The local path to the private key used to login to the remote host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tenstad/remote/0.2.1/docs/data-sources/file#private_key_path DataRemoteFile#private_key_path}
  */
  readonly privateKeyPath?: string;
  /**
  * Use sudo to gain access to file. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tenstad/remote/0.2.1/docs/data-sources/file#sudo DataRemoteFile#sudo}
  */
  readonly sudo?: boolean | cdktf.IResolvable;
  /**
  * The maximum amount of time, in milliseconds, for the TCP connection to establish. Timeout of zero means no timeout.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tenstad/remote/0.2.1/docs/data-sources/file#timeout DataRemoteFile#timeout}
  */
  readonly timeout?: number;
  /**
  * The user on the remote host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tenstad/remote/0.2.1/docs/data-sources/file#user DataRemoteFile#user}
  */
  readonly user: string;
}

export function dataRemoteFileConnToTerraform(struct?: DataRemoteFileConnOutputReference | DataRemoteFileConn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    agent: cdktf.booleanToTerraform(struct!.agent),
    host: cdktf.stringToTerraform(struct!.host),
    password: cdktf.stringToTerraform(struct!.password),
    port: cdktf.numberToTerraform(struct!.port),
    private_key: cdktf.stringToTerraform(struct!.privateKey),
    private_key_env_var: cdktf.stringToTerraform(struct!.privateKeyEnvVar),
    private_key_pass: cdktf.stringToTerraform(struct!.privateKeyPass),
    private_key_path: cdktf.stringToTerraform(struct!.privateKeyPath),
    sudo: cdktf.booleanToTerraform(struct!.sudo),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function dataRemoteFileConnToHclTerraform(struct?: DataRemoteFileConnOutputReference | DataRemoteFileConn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    agent: {
      value: cdktf.booleanToHclTerraform(struct!.agent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    private_key: {
      value: cdktf.stringToHclTerraform(struct!.privateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_key_env_var: {
      value: cdktf.stringToHclTerraform(struct!.privateKeyEnvVar),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_key_pass: {
      value: cdktf.stringToHclTerraform(struct!.privateKeyPass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_key_path: {
      value: cdktf.stringToHclTerraform(struct!.privateKeyPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sudo: {
      value: cdktf.booleanToHclTerraform(struct!.sudo),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRemoteFileConnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataRemoteFileConn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agent !== undefined) {
      hasAnyValues = true;
      internalValueResult.agent = this._agent;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._privateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKey = this._privateKey;
    }
    if (this._privateKeyEnvVar !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKeyEnvVar = this._privateKeyEnvVar;
    }
    if (this._privateKeyPass !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKeyPass = this._privateKeyPass;
    }
    if (this._privateKeyPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKeyPath = this._privateKeyPath;
    }
    if (this._sudo !== undefined) {
      hasAnyValues = true;
      internalValueResult.sudo = this._sudo;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRemoteFileConn | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._agent = undefined;
      this._host = undefined;
      this._password = undefined;
      this._port = undefined;
      this._privateKey = undefined;
      this._privateKeyEnvVar = undefined;
      this._privateKeyPass = undefined;
      this._privateKeyPath = undefined;
      this._sudo = undefined;
      this._timeout = undefined;
      this._user = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._agent = value.agent;
      this._host = value.host;
      this._password = value.password;
      this._port = value.port;
      this._privateKey = value.privateKey;
      this._privateKeyEnvVar = value.privateKeyEnvVar;
      this._privateKeyPass = value.privateKeyPass;
      this._privateKeyPath = value.privateKeyPath;
      this._sudo = value.sudo;
      this._timeout = value.timeout;
      this._user = value.user;
    }
  }

  // agent - computed: false, optional: true, required: false
  private _agent?: boolean | cdktf.IResolvable; 
  public get agent() {
    return this.getBooleanAttribute('agent');
  }
  public set agent(value: boolean | cdktf.IResolvable) {
    this._agent = value;
  }
  public resetAgent() {
    this._agent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentInput() {
    return this._agent;
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

  // port - computed: false, optional: true, required: false
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

  // private_key_env_var - computed: false, optional: true, required: false
  private _privateKeyEnvVar?: string; 
  public get privateKeyEnvVar() {
    return this.getStringAttribute('private_key_env_var');
  }
  public set privateKeyEnvVar(value: string) {
    this._privateKeyEnvVar = value;
  }
  public resetPrivateKeyEnvVar() {
    this._privateKeyEnvVar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyEnvVarInput() {
    return this._privateKeyEnvVar;
  }

  // private_key_pass - computed: false, optional: true, required: false
  private _privateKeyPass?: string; 
  public get privateKeyPass() {
    return this.getStringAttribute('private_key_pass');
  }
  public set privateKeyPass(value: string) {
    this._privateKeyPass = value;
  }
  public resetPrivateKeyPass() {
    this._privateKeyPass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyPassInput() {
    return this._privateKeyPass;
  }

  // private_key_path - computed: false, optional: true, required: false
  private _privateKeyPath?: string; 
  public get privateKeyPath() {
    return this.getStringAttribute('private_key_path');
  }
  public set privateKeyPath(value: string) {
    this._privateKeyPath = value;
  }
  public resetPrivateKeyPath() {
    this._privateKeyPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyPathInput() {
    return this._privateKeyPath;
  }

  // sudo - computed: false, optional: true, required: false
  private _sudo?: boolean | cdktf.IResolvable; 
  public get sudo() {
    return this.getBooleanAttribute('sudo');
  }
  public set sudo(value: boolean | cdktf.IResolvable) {
    this._sudo = value;
  }
  public resetSudo() {
    this._sudo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sudoInput() {
    return this._sudo;
  }

  // timeout - computed: false, optional: true, required: false
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

  // user - computed: false, optional: false, required: true
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tenstad/remote/0.2.1/docs/data-sources/file remote_file}
*/
export class DataRemoteFile extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "remote_file";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataRemoteFile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataRemoteFile to import
  * @param importFromId The id of the existing DataRemoteFile that should be imported. Refer to the {@link https://registry.terraform.io/providers/tenstad/remote/0.2.1/docs/data-sources/file#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataRemoteFile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "remote_file", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tenstad/remote/0.2.1/docs/data-sources/file remote_file} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataRemoteFileConfig
  */
  public constructor(scope: Construct, id: string, config: DataRemoteFileConfig) {
    super(scope, id, {
      terraformResourceType: 'remote_file',
      terraformGeneratorMetadata: {
        providerName: 'remote',
        providerVersion: '0.2.1'
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
    this._path = config.path;
    this._conn.internalValue = config.conn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // content - computed: true, optional: false, required: false
  public get content() {
    return this.getStringAttribute('content');
  }

  // group - computed: true, optional: false, required: false
  public get group() {
    return this.getStringAttribute('group');
  }

  // group_name - computed: true, optional: false, required: false
  public get groupName() {
    return this.getStringAttribute('group_name');
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

  // owner - computed: true, optional: false, required: false
  public get owner() {
    return this.getStringAttribute('owner');
  }

  // owner_name - computed: true, optional: false, required: false
  public get ownerName() {
    return this.getStringAttribute('owner_name');
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

  // permissions - computed: true, optional: false, required: false
  public get permissions() {
    return this.getStringAttribute('permissions');
  }

  // conn - computed: false, optional: true, required: false
  private _conn = new DataRemoteFileConnOutputReference(this, "conn");
  public get conn() {
    return this._conn;
  }
  public putConn(value: DataRemoteFileConn) {
    this._conn.internalValue = value;
  }
  public resetConn() {
    this._conn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connInput() {
    return this._conn.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      path: cdktf.stringToTerraform(this._path),
      conn: dataRemoteFileConnToTerraform(this._conn.internalValue),
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
      path: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      conn: {
        value: dataRemoteFileConnToHclTerraform(this._conn.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataRemoteFileConnList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
