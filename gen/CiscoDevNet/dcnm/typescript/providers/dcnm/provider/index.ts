// https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DcnmProviderConfig {
  /**
  * Expiration time in miliseconds for DCNM/NDFC server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs#expiry DcnmProvider#expiry}
  */
  readonly expiry?: number;
  /**
  * Allow insecure HTTPS client
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs#insecure DcnmProvider#insecure}
  */
  readonly insecure?: boolean | cdktf.IResolvable;
  /**
  * Password for the DCNM/NDFC account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs#password DcnmProvider#password}
  */
  readonly password: string;
  /**
  * NDFC/DCNM platfom selection ND/DCNM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs#platform DcnmProvider#platform}
  */
  readonly platform?: string;
  /**
  * Proxy server URL for DCNM/NDFC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs#proxy_url DcnmProvider#proxy_url}
  */
  readonly proxyUrl?: string;
  /**
  * URL for the DCNM/NDFC server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs#url DcnmProvider#url}
  */
  readonly url: string;
  /**
  * Username for the DCNM/NDFC account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs#username DcnmProvider#username}
  */
  readonly username: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs#alias DcnmProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs dcnm}
*/
export class DcnmProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dcnm";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DcnmProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DcnmProvider to import
  * @param importFromId The id of the existing DcnmProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DcnmProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dcnm", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs dcnm} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DcnmProviderConfig
  */
  public constructor(scope: Construct, id: string, config: DcnmProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'dcnm',
      terraformGeneratorMetadata: {
        providerName: 'dcnm',
        providerVersion: '1.2.7'
      },
      terraformProviderSource: 'CiscoDevNet/dcnm'
    });
    this._expiry = config.expiry;
    this._insecure = config.insecure;
    this._password = config.password;
    this._platform = config.platform;
    this._proxyUrl = config.proxyUrl;
    this._url = config.url;
    this._username = config.username;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // expiry - computed: false, optional: true, required: false
  private _expiry?: number; 
  public get expiry() {
    return this._expiry;
  }
  public set expiry(value: number | undefined) {
    this._expiry = value;
  }
  public resetExpiry() {
    this._expiry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expiryInput() {
    return this._expiry;
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
      expiry: cdktf.numberToTerraform(this._expiry),
      insecure: cdktf.booleanToTerraform(this._insecure),
      password: cdktf.stringToTerraform(this._password),
      platform: cdktf.stringToTerraform(this._platform),
      proxy_url: cdktf.stringToTerraform(this._proxyUrl),
      url: cdktf.stringToTerraform(this._url),
      username: cdktf.stringToTerraform(this._username),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      expiry: {
        value: cdktf.numberToHclTerraform(this._expiry),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
