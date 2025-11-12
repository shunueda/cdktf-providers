// https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BigipProviderConfig {
  /**
  * Domain name/IP of the BigIP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs#address BigipProvider#address}
  */
  readonly address?: string;
  /**
  * Amount of times to retry AS3 API requests. Default: 10.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs#api_retries BigipProvider#api_retries}
  */
  readonly apiRetries?: number;
  /**
  * A timeout for AS3 requests, represented as a number of seconds. Default: 60
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs#api_timeout BigipProvider#api_timeout}
  */
  readonly apiTimeout?: number;
  /**
  * Login reference for token authentication (see BIG-IP REST docs for details)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs#login_ref BigipProvider#login_ref}
  */
  readonly loginRef?: string;
  /**
  * The user's password. Leave empty if using token_value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs#password BigipProvider#password}
  */
  readonly password?: string;
  /**
  * Management Port to connect to Bigip
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs#port BigipProvider#port}
  */
  readonly port?: string;
  /**
  * If this flag set to true,sending telemetry data to TEEM will be disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs#teem_disable BigipProvider#teem_disable}
  */
  readonly teemDisable?: boolean | cdktf.IResolvable;
  /**
  * Enable to use token authentication. Can be set via the BIGIP_TOKEN_AUTH environment variable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs#token_auth BigipProvider#token_auth}
  */
  readonly tokenAuth?: boolean | cdktf.IResolvable;
  /**
  * A lifespan to request for the AS3 auth token, represented as a number of seconds. Default: 1200
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs#token_timeout BigipProvider#token_timeout}
  */
  readonly tokenTimeout?: number;
  /**
  * A token generated outside the provider, in place of password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs#token_value BigipProvider#token_value}
  */
  readonly tokenValue?: string;
  /**
  * Valid Trusted Certificate path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs#trusted_cert_path BigipProvider#trusted_cert_path}
  */
  readonly trustedCertPath?: string;
  /**
  * Username with API access to the BigIP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs#username BigipProvider#username}
  */
  readonly username?: string;
  /**
  * If set to true, Disables TLS certificate check on BIG-IP. Default : True
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs#validate_certs_disable BigipProvider#validate_certs_disable}
  */
  readonly validateCertsDisable?: boolean | cdktf.IResolvable;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs#alias BigipProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs bigip}
*/
export class BigipProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bigip";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BigipProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BigipProvider to import
  * @param importFromId The id of the existing BigipProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BigipProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bigip", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs bigip} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BigipProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: BigipProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'bigip',
      terraformGeneratorMetadata: {
        providerName: 'bigip',
        providerVersion: '1.24.1',
        providerVersionConstraint: '1.24.1'
      },
      terraformProviderSource: 'F5Networks/bigip'
    });
    this._address = config.address;
    this._apiRetries = config.apiRetries;
    this._apiTimeout = config.apiTimeout;
    this._loginRef = config.loginRef;
    this._password = config.password;
    this._port = config.port;
    this._teemDisable = config.teemDisable;
    this._tokenAuth = config.tokenAuth;
    this._tokenTimeout = config.tokenTimeout;
    this._tokenValue = config.tokenValue;
    this._trustedCertPath = config.trustedCertPath;
    this._username = config.username;
    this._validateCertsDisable = config.validateCertsDisable;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address - computed: false, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this._address;
  }
  public set address(value: string | undefined) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // api_retries - computed: false, optional: true, required: false
  private _apiRetries?: number; 
  public get apiRetries() {
    return this._apiRetries;
  }
  public set apiRetries(value: number | undefined) {
    this._apiRetries = value;
  }
  public resetApiRetries() {
    this._apiRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiRetriesInput() {
    return this._apiRetries;
  }

  // api_timeout - computed: false, optional: true, required: false
  private _apiTimeout?: number; 
  public get apiTimeout() {
    return this._apiTimeout;
  }
  public set apiTimeout(value: number | undefined) {
    this._apiTimeout = value;
  }
  public resetApiTimeout() {
    this._apiTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiTimeoutInput() {
    return this._apiTimeout;
  }

  // login_ref - computed: false, optional: true, required: false
  private _loginRef?: string; 
  public get loginRef() {
    return this._loginRef;
  }
  public set loginRef(value: string | undefined) {
    this._loginRef = value;
  }
  public resetLoginRef() {
    this._loginRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginRefInput() {
    return this._loginRef;
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

  // teem_disable - computed: false, optional: true, required: false
  private _teemDisable?: boolean | cdktf.IResolvable; 
  public get teemDisable() {
    return this._teemDisable;
  }
  public set teemDisable(value: boolean | cdktf.IResolvable | undefined) {
    this._teemDisable = value;
  }
  public resetTeemDisable() {
    this._teemDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teemDisableInput() {
    return this._teemDisable;
  }

  // token_auth - computed: false, optional: true, required: false
  private _tokenAuth?: boolean | cdktf.IResolvable; 
  public get tokenAuth() {
    return this._tokenAuth;
  }
  public set tokenAuth(value: boolean | cdktf.IResolvable | undefined) {
    this._tokenAuth = value;
  }
  public resetTokenAuth() {
    this._tokenAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenAuthInput() {
    return this._tokenAuth;
  }

  // token_timeout - computed: false, optional: true, required: false
  private _tokenTimeout?: number; 
  public get tokenTimeout() {
    return this._tokenTimeout;
  }
  public set tokenTimeout(value: number | undefined) {
    this._tokenTimeout = value;
  }
  public resetTokenTimeout() {
    this._tokenTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenTimeoutInput() {
    return this._tokenTimeout;
  }

  // token_value - computed: false, optional: true, required: false
  private _tokenValue?: string; 
  public get tokenValue() {
    return this._tokenValue;
  }
  public set tokenValue(value: string | undefined) {
    this._tokenValue = value;
  }
  public resetTokenValue() {
    this._tokenValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenValueInput() {
    return this._tokenValue;
  }

  // trusted_cert_path - computed: false, optional: true, required: false
  private _trustedCertPath?: string; 
  public get trustedCertPath() {
    return this._trustedCertPath;
  }
  public set trustedCertPath(value: string | undefined) {
    this._trustedCertPath = value;
  }
  public resetTrustedCertPath() {
    this._trustedCertPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedCertPathInput() {
    return this._trustedCertPath;
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

  // validate_certs_disable - computed: false, optional: true, required: false
  private _validateCertsDisable?: boolean | cdktf.IResolvable; 
  public get validateCertsDisable() {
    return this._validateCertsDisable;
  }
  public set validateCertsDisable(value: boolean | cdktf.IResolvable | undefined) {
    this._validateCertsDisable = value;
  }
  public resetValidateCertsDisable() {
    this._validateCertsDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validateCertsDisableInput() {
    return this._validateCertsDisable;
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
      address: cdktf.stringToTerraform(this._address),
      api_retries: cdktf.numberToTerraform(this._apiRetries),
      api_timeout: cdktf.numberToTerraform(this._apiTimeout),
      login_ref: cdktf.stringToTerraform(this._loginRef),
      password: cdktf.stringToTerraform(this._password),
      port: cdktf.stringToTerraform(this._port),
      teem_disable: cdktf.booleanToTerraform(this._teemDisable),
      token_auth: cdktf.booleanToTerraform(this._tokenAuth),
      token_timeout: cdktf.numberToTerraform(this._tokenTimeout),
      token_value: cdktf.stringToTerraform(this._tokenValue),
      trusted_cert_path: cdktf.stringToTerraform(this._trustedCertPath),
      username: cdktf.stringToTerraform(this._username),
      validate_certs_disable: cdktf.booleanToTerraform(this._validateCertsDisable),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      address: {
        value: cdktf.stringToHclTerraform(this._address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      api_retries: {
        value: cdktf.numberToHclTerraform(this._apiRetries),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      api_timeout: {
        value: cdktf.numberToHclTerraform(this._apiTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      login_ref: {
        value: cdktf.stringToHclTerraform(this._loginRef),
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
      port: {
        value: cdktf.stringToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      teem_disable: {
        value: cdktf.booleanToHclTerraform(this._teemDisable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      token_auth: {
        value: cdktf.booleanToHclTerraform(this._tokenAuth),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      token_timeout: {
        value: cdktf.numberToHclTerraform(this._tokenTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      token_value: {
        value: cdktf.stringToHclTerraform(this._tokenValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trusted_cert_path: {
        value: cdktf.stringToHclTerraform(this._trustedCertPath),
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
      validate_certs_disable: {
        value: cdktf.booleanToHclTerraform(this._validateCertsDisable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
