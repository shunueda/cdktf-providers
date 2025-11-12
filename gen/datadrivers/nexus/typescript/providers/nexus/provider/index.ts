// https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NexusProviderConfig {
  /**
  * Path to a client PEM certificate to load for mTLS. Reading environment variable NEXUS_CLIENT_CERT_PATH. Default:``
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs#client_cert_path NexusProvider#client_cert_path}
  */
  readonly clientCertPath?: string;
  /**
  * Path to a client PEM key to load for mTLS. Reading environment variable NEXUS_CLIENT_KEY_PATH. Default:``
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs#client_key_path NexusProvider#client_key_path}
  */
  readonly clientKeyPath?: string;
  /**
  * Boolean to specify wether insecure SSL connections are allowed or not. Reading environment variable NEXUS_INSECURE_SKIP_VERIFY. Default:`true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs#insecure NexusProvider#insecure}
  */
  readonly insecure?: boolean | cdktf.IResolvable;
  /**
  * Password of user to connect to API. Reading environment variable NEXUS_PASSWORD. Default:`admin123`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs#password NexusProvider#password}
  */
  readonly password?: string;
  /**
  * Path to a root CA certificate to load for mTLS. Reading environment variable NEXUS_ROOT_CA_PATH. Default:``
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs#root_ca_path NexusProvider#root_ca_path}
  */
  readonly rootCaPath?: string;
  /**
  * Timeout in seconds to connect to API. Reading environment variable NEXUS_TIMEOUT. Default:`30`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs#timeout NexusProvider#timeout}
  */
  readonly timeout?: number;
  /**
  * URL of Nexus to reach API. Reading environment variable NEXUS_URL. Default:`http://127.0.0.1:8080`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs#url NexusProvider#url}
  */
  readonly url?: string;
  /**
  * Username used to connect to API. Reading environment variable NEXUS_USERNAME. Default:`admin`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs#username NexusProvider#username}
  */
  readonly username?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs#alias NexusProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs nexus}
*/
export class NexusProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nexus";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NexusProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NexusProvider to import
  * @param importFromId The id of the existing NexusProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NexusProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nexus", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs nexus} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NexusProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: NexusProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'nexus',
      terraformGeneratorMetadata: {
        providerName: 'nexus',
        providerVersion: '2.6.0',
        providerVersionConstraint: '2.6.0'
      },
      terraformProviderSource: 'datadrivers/nexus'
    });
    this._clientCertPath = config.clientCertPath;
    this._clientKeyPath = config.clientKeyPath;
    this._insecure = config.insecure;
    this._password = config.password;
    this._rootCaPath = config.rootCaPath;
    this._timeout = config.timeout;
    this._url = config.url;
    this._username = config.username;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // client_cert_path - computed: false, optional: true, required: false
  private _clientCertPath?: string; 
  public get clientCertPath() {
    return this._clientCertPath;
  }
  public set clientCertPath(value: string | undefined) {
    this._clientCertPath = value;
  }
  public resetClientCertPath() {
    this._clientCertPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertPathInput() {
    return this._clientCertPath;
  }

  // client_key_path - computed: false, optional: true, required: false
  private _clientKeyPath?: string; 
  public get clientKeyPath() {
    return this._clientKeyPath;
  }
  public set clientKeyPath(value: string | undefined) {
    this._clientKeyPath = value;
  }
  public resetClientKeyPath() {
    this._clientKeyPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientKeyPathInput() {
    return this._clientKeyPath;
  }

  // insecure - computed: false, optional: true, required: false
  private _insecure?: boolean | cdktf.IResolvable; 
  public get insecure() {
    return this._insecure;
  }
  public set insecure(value: boolean | cdktf.IResolvable | undefined) {
    this._insecure = value;
  }
  public resetInsecure() {
    this._insecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureInput() {
    return this._insecure;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this._password;
  }
  public set password(value: string | undefined) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // root_ca_path - computed: false, optional: true, required: false
  private _rootCaPath?: string; 
  public get rootCaPath() {
    return this._rootCaPath;
  }
  public set rootCaPath(value: string | undefined) {
    this._rootCaPath = value;
  }
  public resetRootCaPath() {
    this._rootCaPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootCaPathInput() {
    return this._rootCaPath;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this._timeout;
  }
  public set timeout(value: number | undefined) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this._url;
  }
  public set url(value: string | undefined) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this._username;
  }
  public set username(value: string | undefined) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
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
      client_cert_path: cdktf.stringToTerraform(this._clientCertPath),
      client_key_path: cdktf.stringToTerraform(this._clientKeyPath),
      insecure: cdktf.booleanToTerraform(this._insecure),
      password: cdktf.stringToTerraform(this._password),
      root_ca_path: cdktf.stringToTerraform(this._rootCaPath),
      timeout: cdktf.numberToTerraform(this._timeout),
      url: cdktf.stringToTerraform(this._url),
      username: cdktf.stringToTerraform(this._username),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      client_cert_path: {
        value: cdktf.stringToHclTerraform(this._clientCertPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_key_path: {
        value: cdktf.stringToHclTerraform(this._clientKeyPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      insecure: {
        value: cdktf.booleanToHclTerraform(this._insecure),
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
      root_ca_path: {
        value: cdktf.stringToHclTerraform(this._rootCaPath),
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
      url: {
        value: cdktf.stringToHclTerraform(this._url),
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
