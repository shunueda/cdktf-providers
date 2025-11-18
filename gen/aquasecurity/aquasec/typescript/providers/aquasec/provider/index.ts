// https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AquasecProviderConfig {
  /**
  * API methods the token has access to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs#allowed_endpoints AquasecProvider#allowed_endpoints}
  */
  readonly allowedEndpoints?: string[];
  /**
  * API key for authentication. If set, API key mode is used instead of token-based auth.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs#aqua_api_key AquasecProvider#aqua_api_key}
  */
  readonly aquaApiKey?: string;
  /**
  * Shared secret for API key HMAC signing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs#aqua_api_secret AquasecProvider#aqua_api_secret}
  */
  readonly aquaApiSecret?: string;
  /**
  * This is the base URL of your Aqua instance. Can alternatively be sourced from the `AQUA_URL` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs#aqua_url AquasecProvider#aqua_url}
  */
  readonly aquaUrl?: string;
  /**
  * This is the file path for server CA certificates if they are not available on the host OS. Can alternatively be sourced from the `AQUA_CA_CERT_PATH` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs#ca_certificate_path AquasecProvider#ca_certificate_path}
  */
  readonly caCertificatePath?: string;
  /**
  * This is the file path for Aqua provider configuration. The default configuration path is `~/.aquasec/tf.config`. Can alternatively be sourced from the `AQUA_CONFIG` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs#config_path AquasecProvider#config_path}
  */
  readonly configPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs#csp_roles AquasecProvider#csp_roles}
  */
  readonly cspRoles?: string[];
  /**
  * This is the password that should be used to make the connection. Can alternatively be sourced from the `AQUA_PASSWORD` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs#password AquasecProvider#password}
  */
  readonly password?: string;
  /**
  * This is the user id that should be used to make the connection. Can alternatively be sourced from the `AQUA_USER` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs#username AquasecProvider#username}
  */
  readonly username?: string;
  /**
  * Skip provider credential validation when set to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs#validate AquasecProvider#validate}
  */
  readonly validate?: boolean | cdktf.IResolvable;
  /**
  * Lifetime of the token, in minutes. Set between 1 and 1500. Once the token expires, need to generate a new one
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs#validity AquasecProvider#validity}
  */
  readonly validity?: number;
  /**
  * If true, server tls certificates will be verified by the client before making a connection. Defaults to true. Can alternatively be sourced from the `AQUA_TLS_VERIFY` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs#verify_tls AquasecProvider#verify_tls}
  */
  readonly verifyTls?: boolean | cdktf.IResolvable;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs#alias AquasecProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs aquasec}
*/
export class AquasecProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aquasec";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AquasecProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AquasecProvider to import
  * @param importFromId The id of the existing AquasecProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AquasecProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aquasec", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs aquasec} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AquasecProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: AquasecProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aquasec',
      terraformGeneratorMetadata: {
        providerName: 'aquasec',
        providerVersion: '0.12.0',
        providerVersionConstraint: '0.12.0'
      },
      terraformProviderSource: 'aquasecurity/aquasec'
    });
    this._allowedEndpoints = config.allowedEndpoints;
    this._aquaApiKey = config.aquaApiKey;
    this._aquaApiSecret = config.aquaApiSecret;
    this._aquaUrl = config.aquaUrl;
    this._caCertificatePath = config.caCertificatePath;
    this._configPath = config.configPath;
    this._cspRoles = config.cspRoles;
    this._password = config.password;
    this._username = config.username;
    this._validate = config.validate;
    this._validity = config.validity;
    this._verifyTls = config.verifyTls;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allowed_endpoints - computed: false, optional: true, required: false
  private _allowedEndpoints?: string[]; 
  public get allowedEndpoints() {
    return this._allowedEndpoints;
  }
  public set allowedEndpoints(value: string[] | undefined) {
    this._allowedEndpoints = value;
  }
  public resetAllowedEndpoints() {
    this._allowedEndpoints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedEndpointsInput() {
    return this._allowedEndpoints;
  }

  // aqua_api_key - computed: false, optional: true, required: false
  private _aquaApiKey?: string; 
  public get aquaApiKey() {
    return this._aquaApiKey;
  }
  public set aquaApiKey(value: string | undefined) {
    this._aquaApiKey = value;
  }
  public resetAquaApiKey() {
    this._aquaApiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aquaApiKeyInput() {
    return this._aquaApiKey;
  }

  // aqua_api_secret - computed: false, optional: true, required: false
  private _aquaApiSecret?: string; 
  public get aquaApiSecret() {
    return this._aquaApiSecret;
  }
  public set aquaApiSecret(value: string | undefined) {
    this._aquaApiSecret = value;
  }
  public resetAquaApiSecret() {
    this._aquaApiSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aquaApiSecretInput() {
    return this._aquaApiSecret;
  }

  // aqua_url - computed: false, optional: true, required: false
  private _aquaUrl?: string; 
  public get aquaUrl() {
    return this._aquaUrl;
  }
  public set aquaUrl(value: string | undefined) {
    this._aquaUrl = value;
  }
  public resetAquaUrl() {
    this._aquaUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aquaUrlInput() {
    return this._aquaUrl;
  }

  // ca_certificate_path - computed: false, optional: true, required: false
  private _caCertificatePath?: string; 
  public get caCertificatePath() {
    return this._caCertificatePath;
  }
  public set caCertificatePath(value: string | undefined) {
    this._caCertificatePath = value;
  }
  public resetCaCertificatePath() {
    this._caCertificatePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertificatePathInput() {
    return this._caCertificatePath;
  }

  // config_path - computed: false, optional: true, required: false
  private _configPath?: string; 
  public get configPath() {
    return this._configPath;
  }
  public set configPath(value: string | undefined) {
    this._configPath = value;
  }
  public resetConfigPath() {
    this._configPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configPathInput() {
    return this._configPath;
  }

  // csp_roles - computed: false, optional: true, required: false
  private _cspRoles?: string[]; 
  public get cspRoles() {
    return this._cspRoles;
  }
  public set cspRoles(value: string[] | undefined) {
    this._cspRoles = value;
  }
  public resetCspRoles() {
    this._cspRoles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cspRolesInput() {
    return this._cspRoles;
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

  // validate - computed: false, optional: true, required: false
  private _validate?: boolean | cdktf.IResolvable; 
  public get validate() {
    return this._validate;
  }
  public set validate(value: boolean | cdktf.IResolvable | undefined) {
    this._validate = value;
  }
  public resetValidate() {
    this._validate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validateInput() {
    return this._validate;
  }

  // validity - computed: false, optional: true, required: false
  private _validity?: number; 
  public get validity() {
    return this._validity;
  }
  public set validity(value: number | undefined) {
    this._validity = value;
  }
  public resetValidity() {
    this._validity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validityInput() {
    return this._validity;
  }

  // verify_tls - computed: false, optional: true, required: false
  private _verifyTls?: boolean | cdktf.IResolvable; 
  public get verifyTls() {
    return this._verifyTls;
  }
  public set verifyTls(value: boolean | cdktf.IResolvable | undefined) {
    this._verifyTls = value;
  }
  public resetVerifyTls() {
    this._verifyTls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyTlsInput() {
    return this._verifyTls;
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
      allowed_endpoints: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedEndpoints),
      aqua_api_key: cdktf.stringToTerraform(this._aquaApiKey),
      aqua_api_secret: cdktf.stringToTerraform(this._aquaApiSecret),
      aqua_url: cdktf.stringToTerraform(this._aquaUrl),
      ca_certificate_path: cdktf.stringToTerraform(this._caCertificatePath),
      config_path: cdktf.stringToTerraform(this._configPath),
      csp_roles: cdktf.listMapper(cdktf.stringToTerraform, false)(this._cspRoles),
      password: cdktf.stringToTerraform(this._password),
      username: cdktf.stringToTerraform(this._username),
      validate: cdktf.booleanToTerraform(this._validate),
      validity: cdktf.numberToTerraform(this._validity),
      verify_tls: cdktf.booleanToTerraform(this._verifyTls),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allowed_endpoints: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedEndpoints),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      aqua_api_key: {
        value: cdktf.stringToHclTerraform(this._aquaApiKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aqua_api_secret: {
        value: cdktf.stringToHclTerraform(this._aquaApiSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aqua_url: {
        value: cdktf.stringToHclTerraform(this._aquaUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ca_certificate_path: {
        value: cdktf.stringToHclTerraform(this._caCertificatePath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config_path: {
        value: cdktf.stringToHclTerraform(this._configPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      csp_roles: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._cspRoles),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
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
      validate: {
        value: cdktf.booleanToHclTerraform(this._validate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      validity: {
        value: cdktf.numberToHclTerraform(this._validity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      verify_tls: {
        value: cdktf.booleanToHclTerraform(this._verifyTls),
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
