// https://registry.terraform.io/providers/1password/onepassword/2.2.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OnepasswordProviderConfig {
  /**
  * A valid account's sign-in address or ID to use biometrics unlock. Can also be sourced from `OP_ACCOUNT` environment variable. Provider will use the 1Password CLI if set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/1password/onepassword/2.2.0/docs#account OnepasswordProvider#account}
  */
  readonly account?: string;
  /**
  * The path to the 1Password CLI binary. Can also be sourced from `OP_CLI_PATH` environment variable. Defaults to `op`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/1password/onepassword/2.2.0/docs#op_cli_path OnepasswordProvider#op_cli_path}
  */
  readonly opCliPath?: string;
  /**
  * A valid 1Password service account token. Can also be sourced from `OP_SERVICE_ACCOUNT_TOKEN` environment variable. Provider will use the 1Password CLI if set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/1password/onepassword/2.2.0/docs#service_account_token OnepasswordProvider#service_account_token}
  */
  readonly serviceAccountToken?: string;
  /**
  * A valid token for your 1Password Connect server. Can also be sourced from `OP_CONNECT_TOKEN` environment variable. Provider will use 1Password Connect server if set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/1password/onepassword/2.2.0/docs#token OnepasswordProvider#token}
  */
  readonly token?: string;
  /**
  * The HTTP(S) URL where your 1Password Connect server can be found. Can also be sourced `OP_CONNECT_HOST` environment variable. Provider will use 1Password Connect server if set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/1password/onepassword/2.2.0/docs#url OnepasswordProvider#url}
  */
  readonly url?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/1password/onepassword/2.2.0/docs#alias OnepasswordProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/1password/onepassword/2.2.0/docs onepassword}
*/
export class OnepasswordProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "onepassword";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OnepasswordProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OnepasswordProvider to import
  * @param importFromId The id of the existing OnepasswordProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/1password/onepassword/2.2.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OnepasswordProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "onepassword", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/1password/onepassword/2.2.0/docs onepassword} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OnepasswordProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: OnepasswordProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'onepassword',
      terraformGeneratorMetadata: {
        providerName: 'onepassword',
        providerVersion: '2.2.0'
      },
      terraformProviderSource: '1Password/onepassword'
    });
    this._account = config.account;
    this._opCliPath = config.opCliPath;
    this._serviceAccountToken = config.serviceAccountToken;
    this._token = config.token;
    this._url = config.url;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account - computed: false, optional: true, required: false
  private _account?: string; 
  public get account() {
    return this._account;
  }
  public set account(value: string | undefined) {
    this._account = value;
  }
  public resetAccount() {
    this._account = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountInput() {
    return this._account;
  }

  // op_cli_path - computed: false, optional: true, required: false
  private _opCliPath?: string; 
  public get opCliPath() {
    return this._opCliPath;
  }
  public set opCliPath(value: string | undefined) {
    this._opCliPath = value;
  }
  public resetOpCliPath() {
    this._opCliPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opCliPathInput() {
    return this._opCliPath;
  }

  // service_account_token - computed: false, optional: true, required: false
  private _serviceAccountToken?: string; 
  public get serviceAccountToken() {
    return this._serviceAccountToken;
  }
  public set serviceAccountToken(value: string | undefined) {
    this._serviceAccountToken = value;
  }
  public resetServiceAccountToken() {
    this._serviceAccountToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountTokenInput() {
    return this._serviceAccountToken;
  }

  // token - computed: false, optional: true, required: false
  private _token?: string; 
  public get token() {
    return this._token;
  }
  public set token(value: string | undefined) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
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
      account: cdktf.stringToTerraform(this._account),
      op_cli_path: cdktf.stringToTerraform(this._opCliPath),
      service_account_token: cdktf.stringToTerraform(this._serviceAccountToken),
      token: cdktf.stringToTerraform(this._token),
      url: cdktf.stringToTerraform(this._url),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account: {
        value: cdktf.stringToHclTerraform(this._account),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      op_cli_path: {
        value: cdktf.stringToHclTerraform(this._opCliPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_account_token: {
        value: cdktf.stringToHclTerraform(this._serviceAccountToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      token: {
        value: cdktf.stringToHclTerraform(this._token),
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
