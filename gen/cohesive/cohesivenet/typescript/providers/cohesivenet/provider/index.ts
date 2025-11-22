// https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.9/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CohesivenetProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.9/docs#host CohesivenetProvider#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.9/docs#password CohesivenetProvider#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.9/docs#token CohesivenetProvider#token}
  */
  readonly token?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.9/docs#username CohesivenetProvider#username}
  */
  readonly username?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.9/docs#alias CohesivenetProvider#alias}
  */
  readonly alias?: string;
  /**
  * vns3 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.9/docs#vns3 CohesivenetProvider#vns3}
  */
  readonly vns3?: CohesivenetProviderVns3;
}
export interface CohesivenetProviderVns3 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.9/docs#api_token CohesivenetProvider#api_token}
  */
  readonly apiToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.9/docs#host CohesivenetProvider#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.9/docs#password CohesivenetProvider#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.9/docs#timeout CohesivenetProvider#timeout}
  */
  readonly timeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.9/docs#username CohesivenetProvider#username}
  */
  readonly username?: string;
}

export function cohesivenetProviderVns3ToTerraform(struct?: CohesivenetProviderVns3): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_token: cdktf.stringToTerraform(struct!.apiToken),
    host: cdktf.stringToTerraform(struct!.host),
    password: cdktf.stringToTerraform(struct!.password),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function cohesivenetProviderVns3ToHclTerraform(struct?: CohesivenetProviderVns3): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_token: {
      value: cdktf.stringToHclTerraform(struct!.apiToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


/**
* Represents a {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.9/docs cohesivenet}
*/
export class CohesivenetProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cohesivenet";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CohesivenetProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CohesivenetProvider to import
  * @param importFromId The id of the existing CohesivenetProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.9/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CohesivenetProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cohesivenet", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.9/docs cohesivenet} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CohesivenetProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: CohesivenetProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'cohesivenet',
      terraformGeneratorMetadata: {
        providerName: 'cohesivenet',
        providerVersion: '1.0.9',
        providerVersionConstraint: '1.0.9'
      },
      terraformProviderSource: 'cohesive/cohesivenet'
    });
    this._host = config.host;
    this._password = config.password;
    this._token = config.token;
    this._username = config.username;
    this._alias = config.alias;
    this._vns3 = config.vns3;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this._host;
  }
  public set host(value: string | undefined) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
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

  // vns3 - computed: false, optional: true, required: false
  private _vns3?: CohesivenetProviderVns3; 
  public get vns3() {
    return this._vns3;
  }
  public set vns3(value: CohesivenetProviderVns3 | undefined) {
    this._vns3 = value;
  }
  public resetVns3() {
    this._vns3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vns3Input() {
    return this._vns3;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      host: cdktf.stringToTerraform(this._host),
      password: cdktf.stringToTerraform(this._password),
      token: cdktf.stringToTerraform(this._token),
      username: cdktf.stringToTerraform(this._username),
      alias: cdktf.stringToTerraform(this._alias),
      vns3: cohesivenetProviderVns3ToTerraform(this._vns3),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      host: {
        value: cdktf.stringToHclTerraform(this._host),
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
      vns3: {
        value: cohesivenetProviderVns3ToHclTerraform(this._vns3),
        isBlock: true,
        type: "set",
        storageClassType: "CohesivenetProviderVns3List",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
