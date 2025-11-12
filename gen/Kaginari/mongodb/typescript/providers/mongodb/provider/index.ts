// https://registry.terraform.io/providers/kaginari/mongodb/0.1.7/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MongodbProviderConfig {
  /**
  * The mongodb auth database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaginari/mongodb/0.1.7/docs#auth_database MongodbProvider#auth_database}
  */
  readonly authDatabase?: string;
  /**
  * PEM-encoded content of Mongodb host CA certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaginari/mongodb/0.1.7/docs#certificate MongodbProvider#certificate}
  */
  readonly certificate?: string;
  /**
  * enforces a direct connection instead of discovery
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaginari/mongodb/0.1.7/docs#direct MongodbProvider#direct}
  */
  readonly direct?: boolean | cdktf.IResolvable;
  /**
  * The mongodb server address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaginari/mongodb/0.1.7/docs#host MongodbProvider#host}
  */
  readonly host?: string;
  /**
  * ignore hostname verification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaginari/mongodb/0.1.7/docs#insecure_skip_verify MongodbProvider#insecure_skip_verify}
  */
  readonly insecureSkipVerify?: boolean | cdktf.IResolvable;
  /**
  * The mongodb password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaginari/mongodb/0.1.7/docs#password MongodbProvider#password}
  */
  readonly password: string;
  /**
  * The mongodb server port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaginari/mongodb/0.1.7/docs#port MongodbProvider#port}
  */
  readonly port?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaginari/mongodb/0.1.7/docs#proxy MongodbProvider#proxy}
  */
  readonly proxy?: string;
  /**
  * The mongodb replica set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaginari/mongodb/0.1.7/docs#replica_set MongodbProvider#replica_set}
  */
  readonly replicaSet?: string;
  /**
  * Retryable Writes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaginari/mongodb/0.1.7/docs#retrywrites MongodbProvider#retrywrites}
  */
  readonly retrywrites?: boolean | cdktf.IResolvable;
  /**
  * ssl activation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaginari/mongodb/0.1.7/docs#ssl MongodbProvider#ssl}
  */
  readonly ssl?: boolean | cdktf.IResolvable;
  /**
  * The mongodb user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaginari/mongodb/0.1.7/docs#username MongodbProvider#username}
  */
  readonly username: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaginari/mongodb/0.1.7/docs#alias MongodbProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/kaginari/mongodb/0.1.7/docs mongodb}
*/
export class MongodbProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mongodb";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MongodbProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MongodbProvider to import
  * @param importFromId The id of the existing MongodbProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/kaginari/mongodb/0.1.7/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MongodbProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mongodb", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kaginari/mongodb/0.1.7/docs mongodb} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MongodbProviderConfig
  */
  public constructor(scope: Construct, id: string, config: MongodbProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'mongodb',
      terraformGeneratorMetadata: {
        providerName: 'mongodb',
        providerVersion: '0.1.7',
        providerVersionConstraint: '0.1.7'
      },
      terraformProviderSource: 'Kaginari/mongodb'
    });
    this._authDatabase = config.authDatabase;
    this._certificate = config.certificate;
    this._direct = config.direct;
    this._host = config.host;
    this._insecureSkipVerify = config.insecureSkipVerify;
    this._password = config.password;
    this._port = config.port;
    this._proxy = config.proxy;
    this._replicaSet = config.replicaSet;
    this._retrywrites = config.retrywrites;
    this._ssl = config.ssl;
    this._username = config.username;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auth_database - computed: false, optional: true, required: false
  private _authDatabase?: string; 
  public get authDatabase() {
    return this._authDatabase;
  }
  public set authDatabase(value: string | undefined) {
    this._authDatabase = value;
  }
  public resetAuthDatabase() {
    this._authDatabase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authDatabaseInput() {
    return this._authDatabase;
  }

  // certificate - computed: false, optional: true, required: false
  private _certificate?: string; 
  public get certificate() {
    return this._certificate;
  }
  public set certificate(value: string | undefined) {
    this._certificate = value;
  }
  public resetCertificate() {
    this._certificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate;
  }

  // direct - computed: false, optional: true, required: false
  private _direct?: boolean | cdktf.IResolvable; 
  public get direct() {
    return this._direct;
  }
  public set direct(value: boolean | cdktf.IResolvable | undefined) {
    this._direct = value;
  }
  public resetDirect() {
    this._direct = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directInput() {
    return this._direct;
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this._host;
  }
  public set host(value: string | undefined) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // insecure_skip_verify - computed: false, optional: true, required: false
  private _insecureSkipVerify?: boolean | cdktf.IResolvable; 
  public get insecureSkipVerify() {
    return this._insecureSkipVerify;
  }
  public set insecureSkipVerify(value: boolean | cdktf.IResolvable | undefined) {
    this._insecureSkipVerify = value;
  }
  public resetInsecureSkipVerify() {
    this._insecureSkipVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureSkipVerifyInput() {
    return this._insecureSkipVerify;
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this._password;
  }
  public set password(value: string | undefined) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // port - computed: false, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this._port;
  }
  public set port(value: string | undefined) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // proxy - computed: false, optional: true, required: false
  private _proxy?: string; 
  public get proxy() {
    return this._proxy;
  }
  public set proxy(value: string | undefined) {
    this._proxy = value;
  }
  public resetProxy() {
    this._proxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyInput() {
    return this._proxy;
  }

  // replica_set - computed: false, optional: true, required: false
  private _replicaSet?: string; 
  public get replicaSet() {
    return this._replicaSet;
  }
  public set replicaSet(value: string | undefined) {
    this._replicaSet = value;
  }
  public resetReplicaSet() {
    this._replicaSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicaSetInput() {
    return this._replicaSet;
  }

  // retrywrites - computed: false, optional: true, required: false
  private _retrywrites?: boolean | cdktf.IResolvable; 
  public get retrywrites() {
    return this._retrywrites;
  }
  public set retrywrites(value: boolean | cdktf.IResolvable | undefined) {
    this._retrywrites = value;
  }
  public resetRetrywrites() {
    this._retrywrites = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retrywritesInput() {
    return this._retrywrites;
  }

  // ssl - computed: false, optional: true, required: false
  private _ssl?: boolean | cdktf.IResolvable; 
  public get ssl() {
    return this._ssl;
  }
  public set ssl(value: boolean | cdktf.IResolvable | undefined) {
    this._ssl = value;
  }
  public resetSsl() {
    this._ssl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslInput() {
    return this._ssl;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this._username;
  }
  public set username(value: string | undefined) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auth_database: cdktf.stringToTerraform(this._authDatabase),
      certificate: cdktf.stringToTerraform(this._certificate),
      direct: cdktf.booleanToTerraform(this._direct),
      host: cdktf.stringToTerraform(this._host),
      insecure_skip_verify: cdktf.booleanToTerraform(this._insecureSkipVerify),
      password: cdktf.stringToTerraform(this._password),
      port: cdktf.stringToTerraform(this._port),
      proxy: cdktf.stringToTerraform(this._proxy),
      replica_set: cdktf.stringToTerraform(this._replicaSet),
      retrywrites: cdktf.booleanToTerraform(this._retrywrites),
      ssl: cdktf.booleanToTerraform(this._ssl),
      username: cdktf.stringToTerraform(this._username),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auth_database: {
        value: cdktf.stringToHclTerraform(this._authDatabase),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certificate: {
        value: cdktf.stringToHclTerraform(this._certificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      direct: {
        value: cdktf.booleanToHclTerraform(this._direct),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      host: {
        value: cdktf.stringToHclTerraform(this._host),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      insecure_skip_verify: {
        value: cdktf.booleanToHclTerraform(this._insecureSkipVerify),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
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
      proxy: {
        value: cdktf.stringToHclTerraform(this._proxy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      replica_set: {
        value: cdktf.stringToHclTerraform(this._replicaSet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retrywrites: {
        value: cdktf.booleanToHclTerraform(this._retrywrites),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ssl: {
        value: cdktf.booleanToHclTerraform(this._ssl),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alias: {
        value: cdktf.stringToHclTerraform(this._alias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
