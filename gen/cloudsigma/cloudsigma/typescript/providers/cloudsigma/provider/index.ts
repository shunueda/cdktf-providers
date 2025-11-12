// https://registry.terraform.io/providers/cloudsigma/cloudsigma/2.9.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudsigmaProviderConfig {
  /**
  * The base URL endpoint for CloudSigma. Default is 'cloudsigma.com/api/2.0/'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsigma/cloudsigma/2.9.0/docs#base_url CloudsigmaProvider#base_url}
  */
  readonly baseUrl?: string;
  /**
  * The location endpoint for CloudSigma. Default is 'zrh'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsigma/cloudsigma/2.9.0/docs#location CloudsigmaProvider#location}
  */
  readonly location?: string;
  /**
  * The CloudSigma password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsigma/cloudsigma/2.9.0/docs#password CloudsigmaProvider#password}
  */
  readonly password?: string;
  /**
  * The CloudSigma access token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsigma/cloudsigma/2.9.0/docs#token CloudsigmaProvider#token}
  */
  readonly token?: string;
  /**
  * The CloudSigma user email.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsigma/cloudsigma/2.9.0/docs#username CloudsigmaProvider#username}
  */
  readonly username?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsigma/cloudsigma/2.9.0/docs#alias CloudsigmaProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudsigma/cloudsigma/2.9.0/docs cloudsigma}
*/
export class CloudsigmaProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudsigma";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudsigmaProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudsigmaProvider to import
  * @param importFromId The id of the existing CloudsigmaProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudsigma/cloudsigma/2.9.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudsigmaProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudsigma", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudsigma/cloudsigma/2.9.0/docs cloudsigma} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudsigmaProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: CloudsigmaProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'cloudsigma',
      terraformGeneratorMetadata: {
        providerName: 'cloudsigma',
        providerVersion: '2.9.0',
        providerVersionConstraint: '2.9.0'
      },
      terraformProviderSource: 'cloudsigma/cloudsigma'
    });
    this._baseUrl = config.baseUrl;
    this._location = config.location;
    this._password = config.password;
    this._token = config.token;
    this._username = config.username;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // location - computed: false, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this._location;
  }
  public set location(value: string | undefined) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
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
      base_url: cdktf.stringToTerraform(this._baseUrl),
      location: cdktf.stringToTerraform(this._location),
      password: cdktf.stringToTerraform(this._password),
      token: cdktf.stringToTerraform(this._token),
      username: cdktf.stringToTerraform(this._username),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      base_url: {
        value: cdktf.stringToHclTerraform(this._baseUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      location: {
        value: cdktf.stringToHclTerraform(this._location),
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
      token: {
        value: cdktf.stringToHclTerraform(this._token),
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
