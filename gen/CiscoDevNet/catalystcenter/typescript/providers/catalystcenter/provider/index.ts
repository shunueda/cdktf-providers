// https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CatalystcenterProviderConfig {
  /**
  * **Experimental (use at your own risk).** Allow existing objects in Catalyst Center to be managed. If `true`, a POST request that attempts to create an already existing resource will trigger an update instead of failing. This behavior is not guaranteed and may not work for all resources. This can also be set as the CC_ALLOW_EXISTING_ON_CREATE environment variable. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs#allow_existing_on_create CatalystcenterProvider#allow_existing_on_create}
  */
  readonly allowExistingOnCreate?: boolean | cdktf.IResolvable;
  /**
  * Allow insecure HTTPS client. This can also be set as the CC_INSECURE environment variable. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs#insecure CatalystcenterProvider#insecure}
  */
  readonly insecure?: boolean | cdktf.IResolvable;
  /**
  * Timeout in seconds for asynchronous tasks. This can also be set as the CC_MAX_TIMEOUT environment variable. Defaults to `180`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs#max_timeout CatalystcenterProvider#max_timeout}
  */
  readonly maxTimeout?: number;
  /**
  * Password for the Catalyst Center instance. This can also be set as the CC_PASSWORD environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs#password CatalystcenterProvider#password}
  */
  readonly password?: string;
  /**
  * Number of retries for REST API calls. This can also be set as the CC_RETRIES environment variable. Defaults to `3`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs#retries CatalystcenterProvider#retries}
  */
  readonly retries?: number;
  /**
  * URL of the Catalyst Center instance. This can also be set as the CC_URL environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs#url CatalystcenterProvider#url}
  */
  readonly url?: string;
  /**
  * Username for the Catalyst Center instance. This can also be set as the CC_USERNAME environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs#username CatalystcenterProvider#username}
  */
  readonly username?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs#alias CatalystcenterProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs catalystcenter}
*/
export class CatalystcenterProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "catalystcenter";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CatalystcenterProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CatalystcenterProvider to import
  * @param importFromId The id of the existing CatalystcenterProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CatalystcenterProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "catalystcenter", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs catalystcenter} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CatalystcenterProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: CatalystcenterProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'catalystcenter',
      terraformGeneratorMetadata: {
        providerName: 'catalystcenter',
        providerVersion: '0.4.2',
        providerVersionConstraint: '0.4.2'
      },
      terraformProviderSource: 'CiscoDevNet/catalystcenter'
    });
    this._allowExistingOnCreate = config.allowExistingOnCreate;
    this._insecure = config.insecure;
    this._maxTimeout = config.maxTimeout;
    this._password = config.password;
    this._retries = config.retries;
    this._url = config.url;
    this._username = config.username;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_existing_on_create - computed: false, optional: true, required: false
  private _allowExistingOnCreate?: boolean | cdktf.IResolvable; 
  public get allowExistingOnCreate() {
    return this._allowExistingOnCreate;
  }
  public set allowExistingOnCreate(value: boolean | cdktf.IResolvable | undefined) {
    this._allowExistingOnCreate = value;
  }
  public resetAllowExistingOnCreate() {
    this._allowExistingOnCreate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowExistingOnCreateInput() {
    return this._allowExistingOnCreate;
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

  // max_timeout - computed: false, optional: true, required: false
  private _maxTimeout?: number; 
  public get maxTimeout() {
    return this._maxTimeout;
  }
  public set maxTimeout(value: number | undefined) {
    this._maxTimeout = value;
  }
  public resetMaxTimeout() {
    this._maxTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTimeoutInput() {
    return this._maxTimeout;
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

  // retries - computed: false, optional: true, required: false
  private _retries?: number; 
  public get retries() {
    return this._retries;
  }
  public set retries(value: number | undefined) {
    this._retries = value;
  }
  public resetRetries() {
    this._retries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retriesInput() {
    return this._retries;
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
      allow_existing_on_create: cdktf.booleanToTerraform(this._allowExistingOnCreate),
      insecure: cdktf.booleanToTerraform(this._insecure),
      max_timeout: cdktf.numberToTerraform(this._maxTimeout),
      password: cdktf.stringToTerraform(this._password),
      retries: cdktf.numberToTerraform(this._retries),
      url: cdktf.stringToTerraform(this._url),
      username: cdktf.stringToTerraform(this._username),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_existing_on_create: {
        value: cdktf.booleanToHclTerraform(this._allowExistingOnCreate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      insecure: {
        value: cdktf.booleanToHclTerraform(this._insecure),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      max_timeout: {
        value: cdktf.numberToHclTerraform(this._maxTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retries: {
        value: cdktf.numberToHclTerraform(this._retries),
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
