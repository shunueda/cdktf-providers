// https://registry.terraform.io/providers/kestra-io/kestra/1.0.2/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KestraProviderConfig {
  /**
  * The API token (EE)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kestra-io/kestra/1.0.2/docs#api_token KestraProvider#api_token}
  */
  readonly apiToken?: string;
  /**
  * Extra headers to add to every request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kestra-io/kestra/1.0.2/docs#extra_headers KestraProvider#extra_headers}
  */
  readonly extraHeaders?: { [key: string]: string };
  /**
  * The JWT token (EE)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kestra-io/kestra/1.0.2/docs#jwt KestraProvider#jwt}
  */
  readonly jwt?: string;
  /**
  * Keep original source code, keeping comment and indentation. Setting to false is now deprecated and will be removed in the future.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kestra-io/kestra/1.0.2/docs#keep_original_source KestraProvider#keep_original_source}
  */
  readonly keepOriginalSource?: boolean | cdktf.IResolvable;
  /**
  * The BasicAuth password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kestra-io/kestra/1.0.2/docs#password KestraProvider#password}
  */
  readonly password?: string;
  /**
  * The tenant id (EE)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kestra-io/kestra/1.0.2/docs#tenant_id KestraProvider#tenant_id}
  */
  readonly tenantId?: string;
  /**
  * The timeout (in seconds) for http requests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kestra-io/kestra/1.0.2/docs#timeout KestraProvider#timeout}
  */
  readonly timeout?: number;
  /**
  * The endpoint url
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kestra-io/kestra/1.0.2/docs#url KestraProvider#url}
  */
  readonly url?: string;
  /**
  * The BasicAuth username
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kestra-io/kestra/1.0.2/docs#username KestraProvider#username}
  */
  readonly username?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kestra-io/kestra/1.0.2/docs#alias KestraProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/kestra-io/kestra/1.0.2/docs kestra}
*/
export class KestraProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "kestra";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KestraProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KestraProvider to import
  * @param importFromId The id of the existing KestraProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/kestra-io/kestra/1.0.2/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KestraProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "kestra", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kestra-io/kestra/1.0.2/docs kestra} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KestraProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: KestraProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'kestra',
      terraformGeneratorMetadata: {
        providerName: 'kestra',
        providerVersion: '1.0.2',
        providerVersionConstraint: '1.0.2'
      },
      terraformProviderSource: 'kestra-io/kestra'
    });
    this._apiToken = config.apiToken;
    this._extraHeaders = config.extraHeaders;
    this._jwt = config.jwt;
    this._keepOriginalSource = config.keepOriginalSource;
    this._password = config.password;
    this._tenantId = config.tenantId;
    this._timeout = config.timeout;
    this._url = config.url;
    this._username = config.username;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // extra_headers - computed: false, optional: true, required: false
  private _extraHeaders?: { [key: string]: string }; 
  public get extraHeaders() {
    return this._extraHeaders;
  }
  public set extraHeaders(value: { [key: string]: string } | undefined) {
    this._extraHeaders = value;
  }
  public resetExtraHeaders() {
    this._extraHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraHeadersInput() {
    return this._extraHeaders;
  }

  // jwt - computed: false, optional: true, required: false
  private _jwt?: string; 
  public get jwt() {
    return this._jwt;
  }
  public set jwt(value: string | undefined) {
    this._jwt = value;
  }
  public resetJwt() {
    this._jwt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtInput() {
    return this._jwt;
  }

  // keep_original_source - computed: false, optional: true, required: false
  private _keepOriginalSource?: boolean | cdktf.IResolvable; 
  public get keepOriginalSource() {
    return this._keepOriginalSource;
  }
  public set keepOriginalSource(value: boolean | cdktf.IResolvable | undefined) {
    this._keepOriginalSource = value;
  }
  public resetKeepOriginalSource() {
    this._keepOriginalSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepOriginalSourceInput() {
    return this._keepOriginalSource;
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

  // tenant_id - computed: false, optional: true, required: false
  private _tenantId?: string; 
  public get tenantId() {
    return this._tenantId;
  }
  public set tenantId(value: string | undefined) {
    this._tenantId = value;
  }
  public resetTenantId() {
    this._tenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this._timeout;
  }
  public set timeout(value: number | undefined) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
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
      api_token: cdktf.stringToTerraform(this._apiToken),
      extra_headers: cdktf.hashMapper(cdktf.stringToTerraform)(this._extraHeaders),
      jwt: cdktf.stringToTerraform(this._jwt),
      keep_original_source: cdktf.booleanToTerraform(this._keepOriginalSource),
      password: cdktf.stringToTerraform(this._password),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      timeout: cdktf.numberToTerraform(this._timeout),
      url: cdktf.stringToTerraform(this._url),
      username: cdktf.stringToTerraform(this._username),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_token: {
        value: cdktf.stringToHclTerraform(this._apiToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      extra_headers: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._extraHeaders),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      jwt: {
        value: cdktf.stringToHclTerraform(this._jwt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      keep_original_source: {
        value: cdktf.booleanToHclTerraform(this._keepOriginalSource),
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
      tenant_id: {
        value: cdktf.stringToHclTerraform(this._tenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeout: {
        value: cdktf.numberToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
