// https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CitrixadcProviderConfig {
  /**
  * Perform the login operation and acquire a session token to be used for subsequent requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs#do_login CitrixadcProvider#do_login}
  */
  readonly doLogin?: boolean | cdktf.IResolvable;
  /**
  * The URL to the API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs#endpoint CitrixadcProvider#endpoint}
  */
  readonly endpoint: string;
  /**
  * Ignore validity of endpoint TLS certificate if true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs#insecure_skip_verify CitrixadcProvider#insecure_skip_verify}
  */
  readonly insecureSkipVerify?: boolean | cdktf.IResolvable;
  /**
  * Partition to target
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs#partition CitrixadcProvider#partition}
  */
  readonly partition?: string;
  /**
  * Password to login to the NetScaler
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs#password CitrixadcProvider#password}
  */
  readonly password?: string;
  /**
  * Target NS ip. When defined username, password and endpoint must refer to MAS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs#proxied_ns CitrixadcProvider#proxied_ns}
  */
  readonly proxiedNs?: string;
  /**
  * Username to login to the NetScaler
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs#username CitrixadcProvider#username}
  */
  readonly username?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs#alias CitrixadcProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs citrixadc}
*/
export class CitrixadcProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CitrixadcProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CitrixadcProvider to import
  * @param importFromId The id of the existing CitrixadcProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CitrixadcProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs citrixadc} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CitrixadcProviderConfig
  */
  public constructor(scope: Construct, id: string, config: CitrixadcProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc',
      terraformGeneratorMetadata: {
        providerName: 'citrixadc',
        providerVersion: '1.45.0'
      },
      terraformProviderSource: 'citrix/citrixadc'
    });
    this._doLogin = config.doLogin;
    this._endpoint = config.endpoint;
    this._insecureSkipVerify = config.insecureSkipVerify;
    this._partition = config.partition;
    this._password = config.password;
    this._proxiedNs = config.proxiedNs;
    this._username = config.username;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // do_login - computed: false, optional: true, required: false
  private _doLogin?: boolean | cdktf.IResolvable; 
  public get doLogin() {
    return this._doLogin;
  }
  public set doLogin(value: boolean | cdktf.IResolvable | undefined) {
    this._doLogin = value;
  }
  public resetDoLogin() {
    this._doLogin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doLoginInput() {
    return this._doLogin;
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

  // insecure_skip_verify - computed: false, optional: true, required: false
  private _insecureSkipVerify?: boolean | cdktf.IResolvable; 
  public get insecureSkipVerify() {
    return this._insecureSkipVerify;
  }
  public set insecureSkipVerify(value: boolean | cdktf.IResolvable | undefined) {
    this._insecureSkipVerify = value;
  }
  public resetInsecureSkipVerify() {
    this._insecureSkipVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureSkipVerifyInput() {
    return this._insecureSkipVerify;
  }

  // partition - computed: false, optional: true, required: false
  private _partition?: string; 
  public get partition() {
    return this._partition;
  }
  public set partition(value: string | undefined) {
    this._partition = value;
  }
  public resetPartition() {
    this._partition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionInput() {
    return this._partition;
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

  // proxied_ns - computed: false, optional: true, required: false
  private _proxiedNs?: string; 
  public get proxiedNs() {
    return this._proxiedNs;
  }
  public set proxiedNs(value: string | undefined) {
    this._proxiedNs = value;
  }
  public resetProxiedNs() {
    this._proxiedNs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxiedNsInput() {
    return this._proxiedNs;
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
      do_login: cdktf.booleanToTerraform(this._doLogin),
      endpoint: cdktf.stringToTerraform(this._endpoint),
      insecure_skip_verify: cdktf.booleanToTerraform(this._insecureSkipVerify),
      partition: cdktf.stringToTerraform(this._partition),
      password: cdktf.stringToTerraform(this._password),
      proxied_ns: cdktf.stringToTerraform(this._proxiedNs),
      username: cdktf.stringToTerraform(this._username),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      do_login: {
        value: cdktf.booleanToHclTerraform(this._doLogin),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      endpoint: {
        value: cdktf.stringToHclTerraform(this._endpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      insecure_skip_verify: {
        value: cdktf.booleanToHclTerraform(this._insecureSkipVerify),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      partition: {
        value: cdktf.stringToHclTerraform(this._partition),
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
      proxied_ns: {
        value: cdktf.stringToHclTerraform(this._proxiedNs),
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
