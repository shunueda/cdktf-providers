// https://registry.terraform.io/providers/terra-farm/xenorchestra/0.26.1/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface XenorchestraProviderConfig {
  /**
  * Whether SSL should be verified or not. Can be set via the XOA_INSECURE environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terra-farm/xenorchestra/0.26.1/docs#insecure XenorchestraProvider#insecure}
  */
  readonly insecure?: boolean | cdktf.IResolvable;
  /**
  * Password for xoa api. Can be set via the XOA_PASSWORD environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terra-farm/xenorchestra/0.26.1/docs#password XenorchestraProvider#password}
  */
  readonly password: string;
  /**
  * If `retry_mode` is set, this specifies the duration for which the backoff method will continue retries. Can be set via the `XOA_RETRY_MAX_TIME` environment variable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terra-farm/xenorchestra/0.26.1/docs#retry_max_time XenorchestraProvider#retry_max_time}
  */
  readonly retryMaxTime?: string;
  /**
  * Specifies if retries should be attempted for requests that require eventual . Can be set via the XOA_RETRY_MODE environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terra-farm/xenorchestra/0.26.1/docs#retry_mode XenorchestraProvider#retry_mode}
  */
  readonly retryMode?: string;
  /**
  * Hostname of the xoa router. Can be set via the XOA_URL environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terra-farm/xenorchestra/0.26.1/docs#url XenorchestraProvider#url}
  */
  readonly url: string;
  /**
  * User account for xoa api. Can be set via the XOA_USER environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terra-farm/xenorchestra/0.26.1/docs#username XenorchestraProvider#username}
  */
  readonly username: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terra-farm/xenorchestra/0.26.1/docs#alias XenorchestraProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terra-farm/xenorchestra/0.26.1/docs xenorchestra}
*/
export class XenorchestraProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "xenorchestra";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a XenorchestraProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the XenorchestraProvider to import
  * @param importFromId The id of the existing XenorchestraProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/terra-farm/xenorchestra/0.26.1/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the XenorchestraProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "xenorchestra", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terra-farm/xenorchestra/0.26.1/docs xenorchestra} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options XenorchestraProviderConfig
  */
  public constructor(scope: Construct, id: string, config: XenorchestraProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'xenorchestra',
      terraformGeneratorMetadata: {
        providerName: 'xenorchestra',
        providerVersion: '0.26.1'
      },
      terraformProviderSource: 'terra-farm/xenorchestra'
    });
    this._insecure = config.insecure;
    this._password = config.password;
    this._retryMaxTime = config.retryMaxTime;
    this._retryMode = config.retryMode;
    this._url = config.url;
    this._username = config.username;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // retry_max_time - computed: false, optional: true, required: false
  private _retryMaxTime?: string; 
  public get retryMaxTime() {
    return this._retryMaxTime;
  }
  public set retryMaxTime(value: string | undefined) {
    this._retryMaxTime = value;
  }
  public resetRetryMaxTime() {
    this._retryMaxTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryMaxTimeInput() {
    return this._retryMaxTime;
  }

  // retry_mode - computed: false, optional: true, required: false
  private _retryMode?: string; 
  public get retryMode() {
    return this._retryMode;
  }
  public set retryMode(value: string | undefined) {
    this._retryMode = value;
  }
  public resetRetryMode() {
    this._retryMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryModeInput() {
    return this._retryMode;
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
      insecure: cdktf.booleanToTerraform(this._insecure),
      password: cdktf.stringToTerraform(this._password),
      retry_max_time: cdktf.stringToTerraform(this._retryMaxTime),
      retry_mode: cdktf.stringToTerraform(this._retryMode),
      url: cdktf.stringToTerraform(this._url),
      username: cdktf.stringToTerraform(this._username),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      retry_max_time: {
        value: cdktf.stringToHclTerraform(this._retryMaxTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retry_mode: {
        value: cdktf.stringToHclTerraform(this._retryMode),
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
