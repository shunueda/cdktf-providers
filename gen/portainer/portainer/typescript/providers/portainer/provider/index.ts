// https://registry.terraform.io/providers/portainer/portainer/1.16.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PortainerProviderConfig {
  /**
  * API key to authenticate with Portainer. Mutually exclusive with 'user' and 'password'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.16.0/docs#api_key PortainerProvider#api_key}
  */
  readonly apiKey?: string;
  /**
  * Password for authentication. Must be used together with 'user'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.16.0/docs#api_password PortainerProvider#api_password}
  */
  readonly apiPassword?: string;
  /**
  * Username for authentication. Must be used together with 'password'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.16.0/docs#api_user PortainerProvider#api_user}
  */
  readonly apiUser?: string;
  /**
  * URL of the Portainer instance (e.g. https://portainer.example.com). '/api' will be appended automatically if missing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.16.0/docs#endpoint PortainerProvider#endpoint}
  */
  readonly endpoint: string;
  /**
  * Verify the SSL/TLS certificate for the Portainer endpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.16.0/docs#skip_ssl_verify PortainerProvider#skip_ssl_verify}
  */
  readonly skipSslVerify?: boolean | cdktf.IResolvable;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.16.0/docs#alias PortainerProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/portainer/portainer/1.16.0/docs portainer}
*/
export class PortainerProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "portainer";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PortainerProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PortainerProvider to import
  * @param importFromId The id of the existing PortainerProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/portainer/portainer/1.16.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PortainerProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "portainer", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/portainer/portainer/1.16.0/docs portainer} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PortainerProviderConfig
  */
  public constructor(scope: Construct, id: string, config: PortainerProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'portainer',
      terraformGeneratorMetadata: {
        providerName: 'portainer',
        providerVersion: '1.16.0'
      },
      terraformProviderSource: 'portainer/portainer'
    });
    this._apiKey = config.apiKey;
    this._apiPassword = config.apiPassword;
    this._apiUser = config.apiUser;
    this._endpoint = config.endpoint;
    this._skipSslVerify = config.skipSslVerify;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_key - computed: false, optional: true, required: false
  private _apiKey?: string; 
  public get apiKey() {
    return this._apiKey;
  }
  public set apiKey(value: string | undefined) {
    this._apiKey = value;
  }
  public resetApiKey() {
    this._apiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }

  // api_password - computed: false, optional: true, required: false
  private _apiPassword?: string; 
  public get apiPassword() {
    return this._apiPassword;
  }
  public set apiPassword(value: string | undefined) {
    this._apiPassword = value;
  }
  public resetApiPassword() {
    this._apiPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiPasswordInput() {
    return this._apiPassword;
  }

  // api_user - computed: false, optional: true, required: false
  private _apiUser?: string; 
  public get apiUser() {
    return this._apiUser;
  }
  public set apiUser(value: string | undefined) {
    this._apiUser = value;
  }
  public resetApiUser() {
    this._apiUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiUserInput() {
    return this._apiUser;
  }

  // endpoint - computed: false, optional: false, required: true
  private _endpoint?: string; 
  public get endpoint() {
    return this._endpoint;
  }
  public set endpoint(value: string | undefined) {
    this._endpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // skip_ssl_verify - computed: false, optional: true, required: false
  private _skipSslVerify?: boolean | cdktf.IResolvable; 
  public get skipSslVerify() {
    return this._skipSslVerify;
  }
  public set skipSslVerify(value: boolean | cdktf.IResolvable | undefined) {
    this._skipSslVerify = value;
  }
  public resetSkipSslVerify() {
    this._skipSslVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipSslVerifyInput() {
    return this._skipSslVerify;
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
      api_key: cdktf.stringToTerraform(this._apiKey),
      api_password: cdktf.stringToTerraform(this._apiPassword),
      api_user: cdktf.stringToTerraform(this._apiUser),
      endpoint: cdktf.stringToTerraform(this._endpoint),
      skip_ssl_verify: cdktf.booleanToTerraform(this._skipSslVerify),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_key: {
        value: cdktf.stringToHclTerraform(this._apiKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      api_password: {
        value: cdktf.stringToHclTerraform(this._apiPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      api_user: {
        value: cdktf.stringToHclTerraform(this._apiUser),
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
      skip_ssl_verify: {
        value: cdktf.booleanToHclTerraform(this._skipSslVerify),
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
