// https://registry.terraform.io/providers/elastic/ec/0.12.2/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EcProviderConfig {
  /**
  * API Key to use for API authentication. The only valid authentication mechanism for the Elasticsearch Service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs#apikey EcProvider#apikey}
  */
  readonly apikey?: string;
  /**
  * Endpoint where the terraform provider will point to. Defaults to "https://api.elastic-cloud.com".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs#endpoint EcProvider#endpoint}
  */
  readonly endpoint?: string;
  /**
  * Allow the provider to skip TLS validation on its outgoing HTTP calls.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs#insecure EcProvider#insecure}
  */
  readonly insecure?: boolean | cdktf.IResolvable;
  /**
  * Password to use for API authentication. Available only when targeting ECE Installations or Elasticsearch Service Private.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs#password EcProvider#password}
  */
  readonly password?: string;
  /**
  * Timeout used for individual HTTP calls. Defaults to "1m".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs#timeout EcProvider#timeout}
  */
  readonly timeout?: string;
  /**
  * Username to use for API authentication. Available only when targeting ECE Installations or Elasticsearch Service Private.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs#username EcProvider#username}
  */
  readonly username?: string;
  /**
  * When set, a "request.log" file will be written with all outgoing HTTP requests. Defaults to "false".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs#verbose EcProvider#verbose}
  */
  readonly verbose?: boolean | cdktf.IResolvable;
  /**
  * When set with verbose, the contents of the Authorization header will not be redacted. Defaults to "false".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs#verbose_credentials EcProvider#verbose_credentials}
  */
  readonly verboseCredentials?: boolean | cdktf.IResolvable;
  /**
  * Timeout used for individual HTTP calls. Defaults to "1m".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs#verbose_file EcProvider#verbose_file}
  */
  readonly verboseFile?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs#alias EcProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs ec}
*/
export class EcProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ec";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EcProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EcProvider to import
  * @param importFromId The id of the existing EcProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EcProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ec", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs ec} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EcProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: EcProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'ec',
      terraformGeneratorMetadata: {
        providerName: 'ec',
        providerVersion: '0.12.2',
        providerVersionConstraint: '0.12.2'
      },
      terraformProviderSource: 'elastic/ec'
    });
    this._apikey = config.apikey;
    this._endpoint = config.endpoint;
    this._insecure = config.insecure;
    this._password = config.password;
    this._timeout = config.timeout;
    this._username = config.username;
    this._verbose = config.verbose;
    this._verboseCredentials = config.verboseCredentials;
    this._verboseFile = config.verboseFile;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // apikey - computed: false, optional: true, required: false
  private _apikey?: string; 
  public get apikey() {
    return this._apikey;
  }
  public set apikey(value: string | undefined) {
    this._apikey = value;
  }
  public resetApikey() {
    this._apikey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apikeyInput() {
    return this._apikey;
  }

  // endpoint - computed: false, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this._endpoint;
  }
  public set endpoint(value: string | undefined) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
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

  // timeout - computed: false, optional: true, required: false
  private _timeout?: string; 
  public get timeout() {
    return this._timeout;
  }
  public set timeout(value: string | undefined) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
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

  // verbose - computed: false, optional: true, required: false
  private _verbose?: boolean | cdktf.IResolvable; 
  public get verbose() {
    return this._verbose;
  }
  public set verbose(value: boolean | cdktf.IResolvable | undefined) {
    this._verbose = value;
  }
  public resetVerbose() {
    this._verbose = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verboseInput() {
    return this._verbose;
  }

  // verbose_credentials - computed: false, optional: true, required: false
  private _verboseCredentials?: boolean | cdktf.IResolvable; 
  public get verboseCredentials() {
    return this._verboseCredentials;
  }
  public set verboseCredentials(value: boolean | cdktf.IResolvable | undefined) {
    this._verboseCredentials = value;
  }
  public resetVerboseCredentials() {
    this._verboseCredentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verboseCredentialsInput() {
    return this._verboseCredentials;
  }

  // verbose_file - computed: false, optional: true, required: false
  private _verboseFile?: string; 
  public get verboseFile() {
    return this._verboseFile;
  }
  public set verboseFile(value: string | undefined) {
    this._verboseFile = value;
  }
  public resetVerboseFile() {
    this._verboseFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verboseFileInput() {
    return this._verboseFile;
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
      apikey: cdktf.stringToTerraform(this._apikey),
      endpoint: cdktf.stringToTerraform(this._endpoint),
      insecure: cdktf.booleanToTerraform(this._insecure),
      password: cdktf.stringToTerraform(this._password),
      timeout: cdktf.stringToTerraform(this._timeout),
      username: cdktf.stringToTerraform(this._username),
      verbose: cdktf.booleanToTerraform(this._verbose),
      verbose_credentials: cdktf.booleanToTerraform(this._verboseCredentials),
      verbose_file: cdktf.stringToTerraform(this._verboseFile),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      apikey: {
        value: cdktf.stringToHclTerraform(this._apikey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      endpoint: {
        value: cdktf.stringToHclTerraform(this._endpoint),
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
      timeout: {
        value: cdktf.stringToHclTerraform(this._timeout),
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
      verbose: {
        value: cdktf.booleanToHclTerraform(this._verbose),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      verbose_credentials: {
        value: cdktf.booleanToHclTerraform(this._verboseCredentials),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      verbose_file: {
        value: cdktf.stringToHclTerraform(this._verboseFile),
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
