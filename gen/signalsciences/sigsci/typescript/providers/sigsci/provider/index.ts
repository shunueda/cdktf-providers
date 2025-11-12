// https://registry.terraform.io/providers/signalsciences/sigsci/3.7.1/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SigsciProviderConfig {
  /**
  * URL override for testing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/signalsciences/sigsci/3.7.1/docs#api_url SigsciProvider#api_url}
  */
  readonly apiUrl?: string;
  /**
  * The token used for authentication specify either the password or the token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/signalsciences/sigsci/3.7.1/docs#auth_token SigsciProvider#auth_token}
  */
  readonly authToken?: string;
  /**
  * Corp short name (id)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/signalsciences/sigsci/3.7.1/docs#corp SigsciProvider#corp}
  */
  readonly corp: string;
  /**
  * The email to be used for authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/signalsciences/sigsci/3.7.1/docs#email SigsciProvider#email}
  */
  readonly email: string;
  /**
  * The Fastly API key used for deploying Signal Sciences as a Fastly edge security service. For edge deployment service calls, the Fastly key must have write access to the given service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/signalsciences/sigsci/3.7.1/docs#fastly_api_key SigsciProvider#fastly_api_key}
  */
  readonly fastlyApiKey?: string;
  /**
  * The password used to for authentication specify either the password or the token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/signalsciences/sigsci/3.7.1/docs#password SigsciProvider#password}
  */
  readonly password?: string;
  /**
  * Enable validation of API credentials during provider initialization. Default is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/signalsciences/sigsci/3.7.1/docs#validate SigsciProvider#validate}
  */
  readonly validate?: boolean | cdktf.IResolvable;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/signalsciences/sigsci/3.7.1/docs#alias SigsciProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/signalsciences/sigsci/3.7.1/docs sigsci}
*/
export class SigsciProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sigsci";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SigsciProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SigsciProvider to import
  * @param importFromId The id of the existing SigsciProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/signalsciences/sigsci/3.7.1/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SigsciProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sigsci", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/signalsciences/sigsci/3.7.1/docs sigsci} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SigsciProviderConfig
  */
  public constructor(scope: Construct, id: string, config: SigsciProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'sigsci',
      terraformGeneratorMetadata: {
        providerName: 'sigsci',
        providerVersion: '3.7.1',
        providerVersionConstraint: '3.7.1'
      },
      terraformProviderSource: 'signalsciences/sigsci'
    });
    this._apiUrl = config.apiUrl;
    this._authToken = config.authToken;
    this._corp = config.corp;
    this._email = config.email;
    this._fastlyApiKey = config.fastlyApiKey;
    this._password = config.password;
    this._validate = config.validate;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_url - computed: false, optional: true, required: false
  private _apiUrl?: string; 
  public get apiUrl() {
    return this._apiUrl;
  }
  public set apiUrl(value: string | undefined) {
    this._apiUrl = value;
  }
  public resetApiUrl() {
    this._apiUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiUrlInput() {
    return this._apiUrl;
  }

  // auth_token - computed: false, optional: true, required: false
  private _authToken?: string; 
  public get authToken() {
    return this._authToken;
  }
  public set authToken(value: string | undefined) {
    this._authToken = value;
  }
  public resetAuthToken() {
    this._authToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authTokenInput() {
    return this._authToken;
  }

  // corp - computed: false, optional: false, required: true
  private _corp?: string; 
  public get corp() {
    return this._corp;
  }
  public set corp(value: string | undefined) {
    this._corp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get corpInput() {
    return this._corp;
  }

  // email - computed: false, optional: false, required: true
  private _email?: string; 
  public get email() {
    return this._email;
  }
  public set email(value: string | undefined) {
    this._email = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // fastly_api_key - computed: false, optional: true, required: false
  private _fastlyApiKey?: string; 
  public get fastlyApiKey() {
    return this._fastlyApiKey;
  }
  public set fastlyApiKey(value: string | undefined) {
    this._fastlyApiKey = value;
  }
  public resetFastlyApiKey() {
    this._fastlyApiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fastlyApiKeyInput() {
    return this._fastlyApiKey;
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
      api_url: cdktf.stringToTerraform(this._apiUrl),
      auth_token: cdktf.stringToTerraform(this._authToken),
      corp: cdktf.stringToTerraform(this._corp),
      email: cdktf.stringToTerraform(this._email),
      fastly_api_key: cdktf.stringToTerraform(this._fastlyApiKey),
      password: cdktf.stringToTerraform(this._password),
      validate: cdktf.booleanToTerraform(this._validate),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_url: {
        value: cdktf.stringToHclTerraform(this._apiUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_token: {
        value: cdktf.stringToHclTerraform(this._authToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      corp: {
        value: cdktf.stringToHclTerraform(this._corp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      email: {
        value: cdktf.stringToHclTerraform(this._email),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fastly_api_key: {
        value: cdktf.stringToHclTerraform(this._fastlyApiKey),
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
      validate: {
        value: cdktf.booleanToHclTerraform(this._validate),
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
