// https://registry.terraform.io/providers/tenstad/remote/0.2.1/docs/resources/file
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Content of file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tenstad/remote/0.2.1/docs/resources/file#content File#content}
  */
  readonly content: string;
  /**
  * Group ID (GID) of file owner. Mutually exclusive with `group_name`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tenstad/remote/0.2.1/docs/resources/file#group File#group}
  */
  readonly group?: string;
  /**
  * Group name of file owner. Mutually exclusive with `group`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tenstad/remote/0.2.1/docs/resources/file#group_name File#group_name}
  */
  readonly groupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tenstad/remote/0.2.1/docs/resources/file#id File#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * User ID (UID) of file owner. Mutually exclusive with `owner_name`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tenstad/remote/0.2.1/docs/resources/file#owner File#owner}
  */
  readonly owner?: string;
  /**
  * User name of file owner. Mutually exclusive with `owner`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tenstad/remote/0.2.1/docs/resources/file#owner_name File#owner_name}
  */
  readonly ownerName?: string;
  /**
  * Path to file on remote host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tenstad/remote/0.2.1/docs/resources/file#path File#path}
  */
  readonly path: string;
  /**
  * Permissions of file (in octal form). Defaults to `0644`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tenstad/remote/0.2.1/docs/resources/file#permissions File#permissions}
  */
  readonly permissions?: string;
  /**
  * conn block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tenstad/remote/0.2.1/docs/resources/file#conn File#conn}
  */
  readonly conn?: FileConn;
}
export interface FileConn {
  /**
  * Use a local SSH agent to login to the remote host. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tenstad/remote/0.2.1/docs/resources/file#agent File#agent}
  */
  readonly agent?: boolean | cdktf.IResolvable;
  /**
  * The remote host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tenstad/remote/0.2.1/docs/resources/file#host File#host}
  */
  readonly host: string;
  /**
  * The pasword for the user on the remote host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tenstad/remote/0.2.1/docs/resources/file#password File#password}
  */
  readonly password?: string;
  /**
  * The ssh port on the remote host. Defaults to `22`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tenstad/remote/0.2.1/docs/resources/file#port File#port}
  */
  readonly port?: number;
  /**
  * The private key used to login to the remote host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tenstad/remote/0.2.1/docs/resources/file#private_key File#private_key}
  */
  readonly privateKey?: string;
  /**
  * The name of the local environment variable containing the private key used to login to the remote host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tenstad/remote/0.2.1/docs/resources/file#private_key_env_var File#private_key_env_var}
  */
  readonly privateKeyEnvVar?: string;
  /**
  * Passphrase for the encrypted private key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tenstad/remote/0.2.1/docs/resources/file#private_key_pass File#private_key_pass}
  */
  readonly privateKeyPass?: string;
  /**
  * The local path to the private key used to login to the remote host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tenstad/remote/0.2.1/docs/resources/file#private_key_path File#private_key_path}
  */
  readonly privateKeyPath?: string;
  /**
  * Use sudo to gain access to file. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tenstad/remote/0.2.1/docs/resources/file#sudo File#sudo}
  */
  readonly sudo?: boolean | cdktf.IResolvable;
  /**
  * The maximum amount of time, in milliseconds, for the TCP connection to establish. Timeout of zero means no timeout.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tenstad/remote/0.2.1/docs/resources/file#timeout File#timeout}
  */
  readonly timeout?: number;
  /**
  * The user on the remote host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tenstad/remote/0.2.1/docs/resources/file#user File#user}
  */
  readonly user: string;
}

export function fileConnToTerraform(struct?: FileConnOutputReference | FileConn): any {
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


export function fileConnToHclTerraform(struct?: FileConnOutputReference | FileConn): any {
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

export class FileConnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FileConn | undefined {
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

  public set internalValue(value: FileConn | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/tenstad/remote/0.2.1/docs/resources/file remote_file}
*/
export class File extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "remote_file";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a File resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the File to import
  * @param importFromId The id of the existing File that should be imported. Refer to the {@link https://registry.terraform.io/providers/tenstad/remote/0.2.1/docs/resources/file#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the File to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "remote_file", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tenstad/remote/0.2.1/docs/resources/file remote_file} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FileConfig
  */
  public constructor(scope: Construct, id: string, config: FileConfig) {
    super(scope, id, {
      terraformResourceType: 'remote_file',
      terraformGeneratorMetadata: {
        providerName: 'remote',
        providerVersion: '0.2.1',
        providerVersionConstraint: '0.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._content = config.content;
    this._group = config.group;
    this._groupName = config.groupName;
    this._id = config.id;
    this._owner = config.owner;
    this._ownerName = config.ownerName;
    this._path = config.path;
    this._permissions = config.permissions;
    this._conn.internalValue = config.conn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // content - computed: false, optional: false, required: true
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }

  // group - computed: false, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // group_name - computed: false, optional: true, required: false
  private _groupName?: string; 
  public get groupName() {
    return this.getStringAttribute('group_name');
  }
  public set groupName(value: string) {
    this._groupName = value;
  }
  public resetGroupName() {
    this._groupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNameInput() {
    return this._groupName;
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

  // owner - computed: false, optional: true, required: false
  private _owner?: string; 
  public get owner() {
    return this.getStringAttribute('owner');
  }
  public set owner(value: string) {
    this._owner = value;
  }
  public resetOwner() {
    this._owner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner;
  }

  // owner_name - computed: false, optional: true, required: false
  private _ownerName?: string; 
  public get ownerName() {
    return this.getStringAttribute('owner_name');
  }
  public set ownerName(value: string) {
    this._ownerName = value;
  }
  public resetOwnerName() {
    this._ownerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerNameInput() {
    return this._ownerName;
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

  // permissions - computed: false, optional: true, required: false
  private _permissions?: string; 
  public get permissions() {
    return this.getStringAttribute('permissions');
  }
  public set permissions(value: string) {
    this._permissions = value;
  }
  public resetPermissions() {
    this._permissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions;
  }

  // conn - computed: false, optional: true, required: false
  private _conn = new FileConnOutputReference(this, "conn");
  public get conn() {
    return this._conn;
  }
  public putConn(value: FileConn) {
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
      content: cdktf.stringToTerraform(this._content),
      group: cdktf.stringToTerraform(this._group),
      group_name: cdktf.stringToTerraform(this._groupName),
      id: cdktf.stringToTerraform(this._id),
      owner: cdktf.stringToTerraform(this._owner),
      owner_name: cdktf.stringToTerraform(this._ownerName),
      path: cdktf.stringToTerraform(this._path),
      permissions: cdktf.stringToTerraform(this._permissions),
      conn: fileConnToTerraform(this._conn.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      content: {
        value: cdktf.stringToHclTerraform(this._content),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group: {
        value: cdktf.stringToHclTerraform(this._group),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_name: {
        value: cdktf.stringToHclTerraform(this._groupName),
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
      owner: {
        value: cdktf.stringToHclTerraform(this._owner),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      owner_name: {
        value: cdktf.stringToHclTerraform(this._ownerName),
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
      permissions: {
        value: cdktf.stringToHclTerraform(this._permissions),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      conn: {
        value: fileConnToHclTerraform(this._conn.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FileConnList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
