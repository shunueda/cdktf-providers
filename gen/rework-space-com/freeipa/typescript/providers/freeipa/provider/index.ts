// https://registry.terraform.io/providers/rework-space-com/freeipa/5.2.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FreeipaProviderConfig {
  /**
  * Path to the server's SSL CA certificate. Can be set through the environment variable `FREEIPA_CA_CERT`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.2.0/docs#ca_certificate FreeipaProvider#ca_certificate}
  */
  readonly caCertificate?: string;
  /**
  * The FreeIPA host. Can be set through the environment variable `FREEIPA_HOST`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.2.0/docs#host FreeipaProvider#host}
  */
  readonly host: string;
  /**
  * Whether to verify the server's SSL certificate. Can be set through the environment variable `FREEIPA_INSECURE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.2.0/docs#insecure FreeipaProvider#insecure}
  */
  readonly insecure?: boolean | cdktf.IResolvable;
  /**
  * Password to use for connection. Can be set through the environment variable `FREEIPA_PASSWORD`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.2.0/docs#password FreeipaProvider#password}
  */
  readonly password?: string;
  /**
  * Username to use for connection. Can be set through the environment variable `FREEIPA_USERNAME`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.2.0/docs#username FreeipaProvider#username}
  */
  readonly username?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.2.0/docs#alias FreeipaProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.2.0/docs freeipa}
*/
export class FreeipaProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "freeipa";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FreeipaProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FreeipaProvider to import
  * @param importFromId The id of the existing FreeipaProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.2.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FreeipaProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "freeipa", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.2.0/docs freeipa} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FreeipaProviderConfig
  */
  public constructor(scope: Construct, id: string, config: FreeipaProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'freeipa',
      terraformGeneratorMetadata: {
        providerName: 'freeipa',
        providerVersion: '5.2.0',
        providerVersionConstraint: '5.2.0'
      },
      terraformProviderSource: 'rework-space-com/freeipa'
    });
    this._caCertificate = config.caCertificate;
    this._host = config.host;
    this._insecure = config.insecure;
    this._password = config.password;
    this._username = config.username;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ca_certificate - computed: false, optional: true, required: false
  private _caCertificate?: string; 
  public get caCertificate() {
    return this._caCertificate;
  }
  public set caCertificate(value: string | undefined) {
    this._caCertificate = value;
  }
  public resetCaCertificate() {
    this._caCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertificateInput() {
    return this._caCertificate;
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this._host;
  }
  public set host(value: string | undefined) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
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
      ca_certificate: cdktf.stringToTerraform(this._caCertificate),
      host: cdktf.stringToTerraform(this._host),
      insecure: cdktf.booleanToTerraform(this._insecure),
      password: cdktf.stringToTerraform(this._password),
      username: cdktf.stringToTerraform(this._username),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ca_certificate: {
        value: cdktf.stringToHclTerraform(this._caCertificate),
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
