// https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.8/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ZenlayercloudProviderConfig {
  /**
  * Access Key Id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.8/docs#access_key_id ZenlayercloudProvider#access_key_id}
  */
  readonly accessKeyId?: string;
  /**
  * Access Key Password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.8/docs#access_key_password ZenlayercloudProvider#access_key_password}
  */
  readonly accessKeyPassword?: string;
  /**
  * The maximum timeout of the client request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.8/docs#client_timeout ZenlayercloudProvider#client_timeout}
  */
  readonly clientTimeout?: number;
  /**
  * The root domain of the API request, Default is `console.zenlayer.com`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.8/docs#domain ZenlayercloudProvider#domain}
  */
  readonly domain?: string;
  /**
  * The scheme of the API request. Valid values: `HTTP` and `HTTPS`. Default is `HTTPS`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.8/docs#scheme ZenlayercloudProvider#scheme}
  */
  readonly scheme?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.8/docs#alias ZenlayercloudProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.8/docs zenlayercloud}
*/
export class ZenlayercloudProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zenlayercloud";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ZenlayercloudProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ZenlayercloudProvider to import
  * @param importFromId The id of the existing ZenlayercloudProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.8/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ZenlayercloudProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zenlayercloud", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.8/docs zenlayercloud} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ZenlayercloudProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ZenlayercloudProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'zenlayercloud',
      terraformGeneratorMetadata: {
        providerName: 'zenlayercloud',
        providerVersion: '0.2.8'
      },
      terraformProviderSource: 'zenlayer/zenlayercloud'
    });
    this._accessKeyId = config.accessKeyId;
    this._accessKeyPassword = config.accessKeyPassword;
    this._clientTimeout = config.clientTimeout;
    this._domain = config.domain;
    this._scheme = config.scheme;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_key_id - computed: false, optional: true, required: false
  private _accessKeyId?: string; 
  public get accessKeyId() {
    return this._accessKeyId;
  }
  public set accessKeyId(value: string | undefined) {
    this._accessKeyId = value;
  }
  public resetAccessKeyId() {
    this._accessKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyIdInput() {
    return this._accessKeyId;
  }

  // access_key_password - computed: false, optional: true, required: false
  private _accessKeyPassword?: string; 
  public get accessKeyPassword() {
    return this._accessKeyPassword;
  }
  public set accessKeyPassword(value: string | undefined) {
    this._accessKeyPassword = value;
  }
  public resetAccessKeyPassword() {
    this._accessKeyPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyPasswordInput() {
    return this._accessKeyPassword;
  }

  // client_timeout - computed: false, optional: true, required: false
  private _clientTimeout?: number; 
  public get clientTimeout() {
    return this._clientTimeout;
  }
  public set clientTimeout(value: number | undefined) {
    this._clientTimeout = value;
  }
  public resetClientTimeout() {
    this._clientTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientTimeoutInput() {
    return this._clientTimeout;
  }

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

  // scheme - computed: false, optional: true, required: false
  private _scheme?: string; 
  public get scheme() {
    return this._scheme;
  }
  public set scheme(value: string | undefined) {
    this._scheme = value;
  }
  public resetScheme() {
    this._scheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemeInput() {
    return this._scheme;
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
      access_key_id: cdktf.stringToTerraform(this._accessKeyId),
      access_key_password: cdktf.stringToTerraform(this._accessKeyPassword),
      client_timeout: cdktf.numberToTerraform(this._clientTimeout),
      domain: cdktf.stringToTerraform(this._domain),
      scheme: cdktf.stringToTerraform(this._scheme),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_key_id: {
        value: cdktf.stringToHclTerraform(this._accessKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      access_key_password: {
        value: cdktf.stringToHclTerraform(this._accessKeyPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_timeout: {
        value: cdktf.numberToHclTerraform(this._clientTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scheme: {
        value: cdktf.stringToHclTerraform(this._scheme),
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
