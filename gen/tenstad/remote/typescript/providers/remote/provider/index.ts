// https://registry.terraform.io/providers/tenstad/remote/0.2.1/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RemoteProviderConfig {
  /**
  * Maximum number of open sessions in each host connection. Defaults to `3`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tenstad/remote/0.2.1/docs#max_sessions RemoteProvider#max_sessions}
  */
  readonly maxSessions?: number;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tenstad/remote/0.2.1/docs#alias RemoteProvider#alias}
  */
  readonly alias?: string;
  /**
  * conn block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tenstad/remote/0.2.1/docs#conn RemoteProvider#conn}
  */
  readonly conn?: RemoteProviderConn;
}
export interface RemoteProviderConn {
  /**
  * Use a local SSH agent to login to the remote host. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tenstad/remote/0.2.1/docs#agent RemoteProvider#agent}
  */
  readonly agent?: boolean | cdktf.IResolvable;
  /**
  * The remote host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tenstad/remote/0.2.1/docs#host RemoteProvider#host}
  */
  readonly host: string;
  /**
  * The pasword for the user on the remote host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tenstad/remote/0.2.1/docs#password RemoteProvider#password}
  */
  readonly password?: string;
  /**
  * The ssh port on the remote host. Defaults to `22`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tenstad/remote/0.2.1/docs#port RemoteProvider#port}
  */
  readonly port?: number;
  /**
  * The private key used to login to the remote host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tenstad/remote/0.2.1/docs#private_key RemoteProvider#private_key}
  */
  readonly privateKey?: string;
  /**
  * The name of the local environment variable containing the private key used to login to the remote host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tenstad/remote/0.2.1/docs#private_key_env_var RemoteProvider#private_key_env_var}
  */
  readonly privateKeyEnvVar?: string;
  /**
  * Passphrase for the encrypted private key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tenstad/remote/0.2.1/docs#private_key_pass RemoteProvider#private_key_pass}
  */
  readonly privateKeyPass?: string;
  /**
  * The local path to the private key used to login to the remote host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tenstad/remote/0.2.1/docs#private_key_path RemoteProvider#private_key_path}
  */
  readonly privateKeyPath?: string;
  /**
  * Use sudo to gain access to file. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tenstad/remote/0.2.1/docs#sudo RemoteProvider#sudo}
  */
  readonly sudo?: boolean | cdktf.IResolvable;
  /**
  * The maximum amount of time, in milliseconds, for the TCP connection to establish. Timeout of zero means no timeout.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tenstad/remote/0.2.1/docs#timeout RemoteProvider#timeout}
  */
  readonly timeout?: number;
  /**
  * The user on the remote host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tenstad/remote/0.2.1/docs#user RemoteProvider#user}
  */
  readonly user: string;
}

export function remoteProviderConnToTerraform(struct?: RemoteProviderConn): any {
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


export function remoteProviderConnToHclTerraform(struct?: RemoteProviderConn): any {
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


/**
* Represents a {@link https://registry.terraform.io/providers/tenstad/remote/0.2.1/docs remote}
*/
export class RemoteProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "remote";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RemoteProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RemoteProvider to import
  * @param importFromId The id of the existing RemoteProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/tenstad/remote/0.2.1/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RemoteProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "remote", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tenstad/remote/0.2.1/docs remote} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RemoteProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: RemoteProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'remote',
      terraformGeneratorMetadata: {
        providerName: 'remote',
        providerVersion: '0.2.1',
        providerVersionConstraint: '0.2.1'
      },
      terraformProviderSource: 'tenstad/remote'
    });
    this._maxSessions = config.maxSessions;
    this._alias = config.alias;
    this._conn = config.conn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // max_sessions - computed: false, optional: true, required: false
  private _maxSessions?: number; 
  public get maxSessions() {
    return this._maxSessions;
  }
  public set maxSessions(value: number | undefined) {
    this._maxSessions = value;
  }
  public resetMaxSessions() {
    this._maxSessions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSessionsInput() {
    return this._maxSessions;
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this._alias;
  }
  public set alias(value: string | undefined) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // conn - computed: false, optional: true, required: false
  private _conn?: RemoteProviderConn; 
  public get conn() {
    return this._conn;
  }
  public set conn(value: RemoteProviderConn | undefined) {
    this._conn = value;
  }
  public resetConn() {
    this._conn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connInput() {
    return this._conn;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      max_sessions: cdktf.numberToTerraform(this._maxSessions),
      alias: cdktf.stringToTerraform(this._alias),
      conn: remoteProviderConnToTerraform(this._conn),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      max_sessions: {
        value: cdktf.numberToHclTerraform(this._maxSessions),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      alias: {
        value: cdktf.stringToHclTerraform(this._alias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      conn: {
        value: remoteProviderConnToHclTerraform(this._conn),
        isBlock: true,
        type: "list",
        storageClassType: "RemoteProviderConnList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
