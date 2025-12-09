// https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MsoProviderConfig {
  /**
  * Domain name for remote user authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs#domain MsoProvider#domain}
  */
  readonly domain?: string;
  /**
  * Allow insecure HTTPS client
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs#insecure MsoProvider#insecure}
  */
  readonly insecure?: boolean | cdktf.IResolvable;
  /**
  * Password for the MSO Account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs#password MsoProvider#password}
  */
  readonly password: string;
  /**
  * Parameter that specifies where MSO is installed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs#platform MsoProvider#platform}
  */
  readonly platform?: string;
  /**
  * Proxy Server URL with port number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs#proxy_url MsoProvider#proxy_url}
  */
  readonly proxyUrl?: string;
  /**
  * Number of retries for REST API calls. Defaults to 2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs#retries MsoProvider#retries}
  */
  readonly retries?: string;
  /**
  * URL of the Cisco MSO web interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs#url MsoProvider#url}
  */
  readonly url: string;
  /**
  * Username for the MSO Account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs#username MsoProvider#username}
  */
  readonly username: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs#alias MsoProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs mso}
*/
export class MsoProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mso";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MsoProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MsoProvider to import
  * @param importFromId The id of the existing MsoProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MsoProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mso", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs mso} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MsoProviderConfig
  */
  public constructor(scope: Construct, id: string, config: MsoProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'mso',
      terraformGeneratorMetadata: {
        providerName: 'mso',
        providerVersion: '1.7.0',
        providerVersionConstraint: '1.7.0'
      },
      terraformProviderSource: 'CiscoDevNet/mso'
    });
    this._domain = config.domain;
    this._insecure = config.insecure;
    this._password = config.password;
    this._platform = config.platform;
    this._proxyUrl = config.proxyUrl;
    this._retries = config.retries;
    this._url = config.url;
    this._username = config.username;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // domain - computed: false, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this._domain;
  }
  public set domain(value: string | undefined) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
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

  // platform - computed: false, optional: true, required: false
  private _platform?: string; 
  public get platform() {
    return this._platform;
  }
  public set platform(value: string | undefined) {
    this._platform = value;
  }
  public resetPlatform() {
    this._platform = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformInput() {
    return this._platform;
  }

  // proxy_url - computed: false, optional: true, required: false
  private _proxyUrl?: string; 
  public get proxyUrl() {
    return this._proxyUrl;
  }
  public set proxyUrl(value: string | undefined) {
    this._proxyUrl = value;
  }
  public resetProxyUrl() {
    this._proxyUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyUrlInput() {
    return this._proxyUrl;
  }

  // retries - computed: false, optional: true, required: false
  private _retries?: string; 
  public get retries() {
    return this._retries;
  }
  public set retries(value: string | undefined) {
    this._retries = value;
  }
  public resetRetries() {
    this._retries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retriesInput() {
    return this._retries;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this._url;
  }
  public set url(value: string | undefined) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
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
      domain: cdktf.stringToTerraform(this._domain),
      insecure: cdktf.booleanToTerraform(this._insecure),
      password: cdktf.stringToTerraform(this._password),
      platform: cdktf.stringToTerraform(this._platform),
      proxy_url: cdktf.stringToTerraform(this._proxyUrl),
      retries: cdktf.stringToTerraform(this._retries),
      url: cdktf.stringToTerraform(this._url),
      username: cdktf.stringToTerraform(this._username),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
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
      platform: {
        value: cdktf.stringToHclTerraform(this._platform),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proxy_url: {
        value: cdktf.stringToHclTerraform(this._proxyUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retries: {
        value: cdktf.stringToHclTerraform(this._retries),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
