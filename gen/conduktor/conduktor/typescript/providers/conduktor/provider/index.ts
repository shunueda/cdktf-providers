// https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConduktorProviderConfig {
  /**
  * The password of the admin user. May be set using environment variable `CDK_CONSOLE_PASSWORD` or `CDK_ADMIN_PASSWORD` for Console, `CDK_GATEWAY_PASSWORD` or `CDK_ADMIN_PASSWORD` for Gateway. Required if admin_user is set. If not provided, the API token will be used to authenticater.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs#admin_password ConduktorProvider#admin_password}
  */
  readonly adminPassword?: string;
  /**
  * The login credentials of the admin user. May be set using environment variable `CDK_CONSOLE_USER`, `CDK_ADMIN_EMAIL` or `CDK_ADMIN_USER` for Console, `CDK_GATEWAY_USER` or `CDK_ADMIN_USER` for Gateway. Required if admin_password is set. If not provided and `mode` is Console, the API token will be used to authenticate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs#admin_user ConduktorProvider#admin_user}
  */
  readonly adminUser?: string;
  /**
  * The API token to authenticate with the Conduktor Console API. May be set using environment variable `CDK_API_TOKEN` or `CDK_API_KEY`. If not provided, admin_user and admin_password will be used to authenticate. See [documentation](https://docs.conduktor.io/platform/reference/api-reference/#generate-an-api-key) for more information. Not used if `mode` is Gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs#api_token ConduktorProvider#api_token}
  */
  readonly apiToken?: string;
  /**
  * The URL of either Conduktor Console or Gateway, depending on the `mode`. May be set using environment variable `CDK_CONSOLE_BASE_URL` or `CDK_BASE_URL` for Console, `CDK_GATEWAY_BASE_URL` or `CDK_BASE_URL` for Gateway. Required either here or in the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs#base_url ConduktorProvider#base_url}
  */
  readonly baseUrl?: string;
  /**
  * Root CA certificate in PEM format to verify the Conduktor certificate. May be set using environment variable `CDK_CONSOLE_CACERT` or `CDK_CACERT` for Console, `CDK_GATEWAY_CACERT` or `CDK_CACERT` for Gateway. If not provided, the system's root CA certificates will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs#cacert ConduktorProvider#cacert}
  */
  readonly cacert?: string;
  /**
  * Cert in PEM format to authenticate using client certificates. May be set using environment variable `CDK_CONSOLE_CERT` or `CDK_CERT` for Console, `CDK_GATEWAY_CERT` or `CDK_CERT` for Gateway. Must be used with key. If key is provided, cert is required. Useful when Console is behind a reverse proxy with client certificate authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs#cert ConduktorProvider#cert}
  */
  readonly cert?: string;
  /**
  * Skip TLS verification flag. May be set using environment variable `CDK_CONSOLE_INSECURE` or `CDK_INSECURE` for Console, `CDK_GATEWAY_INSECURE` or `CDK_INSECURE` for Gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs#insecure ConduktorProvider#insecure}
  */
  readonly insecure?: boolean | cdktf.IResolvable;
  /**
  * Key in PEM format to authenticate using client certificates. May be set using environment variable `CDK_CONSOLE_KEY` or `CDK_KEY` for Console, `CDK_GATEWAY_KEY` or `CDK_KEY` for Gateway. Must be used with cert. If cert is provided, key is required. Useful when Console is behind a reverse proxy with client certificate authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs#key ConduktorProvider#key}
  */
  readonly key?: string;
  /**
  * The mode for the Terraform provider. When using one provider, can be set to either `console` or `gateway`. Alternatively for multi-provider configuration, set both providers with an an alias, and set the relevant alias at the resource level. May also be set using environment variable `CDK_PROVIDER_MODE`.  
  * See [documentation](https://github.com/conduktor/terraform-provider-conduktor/blob/main/docs/index.md#multi-client-configuration-using-terraform-alias) for more information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs#mode ConduktorProvider#mode}
  */
  readonly mode: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs#alias ConduktorProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs conduktor}
*/
export class ConduktorProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "conduktor";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConduktorProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConduktorProvider to import
  * @param importFromId The id of the existing ConduktorProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConduktorProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "conduktor", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs conduktor} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConduktorProviderConfig
  */
  public constructor(scope: Construct, id: string, config: ConduktorProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'conduktor',
      terraformGeneratorMetadata: {
        providerName: 'conduktor',
        providerVersion: '1.0.1',
        providerVersionConstraint: '1.0.1'
      },
      terraformProviderSource: 'conduktor/conduktor'
    });
    this._adminPassword = config.adminPassword;
    this._adminUser = config.adminUser;
    this._apiToken = config.apiToken;
    this._baseUrl = config.baseUrl;
    this._cacert = config.cacert;
    this._cert = config.cert;
    this._insecure = config.insecure;
    this._key = config.key;
    this._mode = config.mode;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_password - computed: false, optional: true, required: false
  private _adminPassword?: string; 
  public get adminPassword() {
    return this._adminPassword;
  }
  public set adminPassword(value: string | undefined) {
    this._adminPassword = value;
  }
  public resetAdminPassword() {
    this._adminPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminPasswordInput() {
    return this._adminPassword;
  }

  // admin_user - computed: false, optional: true, required: false
  private _adminUser?: string; 
  public get adminUser() {
    return this._adminUser;
  }
  public set adminUser(value: string | undefined) {
    this._adminUser = value;
  }
  public resetAdminUser() {
    this._adminUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminUserInput() {
    return this._adminUser;
  }

  // api_token - computed: false, optional: true, required: false
  private _apiToken?: string; 
  public get apiToken() {
    return this._apiToken;
  }
  public set apiToken(value: string | undefined) {
    this._apiToken = value;
  }
  public resetApiToken() {
    this._apiToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiTokenInput() {
    return this._apiToken;
  }

  // base_url - computed: false, optional: true, required: false
  private _baseUrl?: string; 
  public get baseUrl() {
    return this._baseUrl;
  }
  public set baseUrl(value: string | undefined) {
    this._baseUrl = value;
  }
  public resetBaseUrl() {
    this._baseUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseUrlInput() {
    return this._baseUrl;
  }

  // cacert - computed: false, optional: true, required: false
  private _cacert?: string; 
  public get cacert() {
    return this._cacert;
  }
  public set cacert(value: string | undefined) {
    this._cacert = value;
  }
  public resetCacert() {
    this._cacert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacertInput() {
    return this._cacert;
  }

  // cert - computed: false, optional: true, required: false
  private _cert?: string; 
  public get cert() {
    return this._cert;
  }
  public set cert(value: string | undefined) {
    this._cert = value;
  }
  public resetCert() {
    this._cert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certInput() {
    return this._cert;
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

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this._key;
  }
  public set key(value: string | undefined) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // mode - computed: false, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this._mode;
  }
  public set mode(value: string | undefined) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
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
      admin_password: cdktf.stringToTerraform(this._adminPassword),
      admin_user: cdktf.stringToTerraform(this._adminUser),
      api_token: cdktf.stringToTerraform(this._apiToken),
      base_url: cdktf.stringToTerraform(this._baseUrl),
      cacert: cdktf.stringToTerraform(this._cacert),
      cert: cdktf.stringToTerraform(this._cert),
      insecure: cdktf.booleanToTerraform(this._insecure),
      key: cdktf.stringToTerraform(this._key),
      mode: cdktf.stringToTerraform(this._mode),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      admin_password: {
        value: cdktf.stringToHclTerraform(this._adminPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      admin_user: {
        value: cdktf.stringToHclTerraform(this._adminUser),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      api_token: {
        value: cdktf.stringToHclTerraform(this._apiToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      base_url: {
        value: cdktf.stringToHclTerraform(this._baseUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cacert: {
        value: cdktf.stringToHclTerraform(this._cacert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cert: {
        value: cdktf.stringToHclTerraform(this._cert),
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
      key: {
        value: cdktf.stringToHclTerraform(this._key),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mode: {
        value: cdktf.stringToHclTerraform(this._mode),
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
