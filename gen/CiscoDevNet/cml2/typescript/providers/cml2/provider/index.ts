// https://registry.terraform.io/providers/ciscodevnet/cml2/0.8.5/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Cml2ProviderConfig {
  /**
  * CML2 controller address, must start with `https://`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/cml2/0.8.5/docs#address Cml2Provider#address}
  */
  readonly address: string;
  /**
  * A CA CERT, PEM encoded. When provided, the controller cert will be checked against it.  Otherwise, the system trust anchors will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/cml2/0.8.5/docs#cacert Cml2Provider#cacert}
  */
  readonly cacert?: string;
  /**
  * Does late binding of the provider configuration. If set to `true` then provider configuration errors will only be caught when resources and data sources are actually created/read. Defaults to `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/cml2/0.8.5/docs#dynamic_config Cml2Provider#dynamic_config}
  */
  readonly dynamicConfig?: boolean | cdktf.IResolvable;
  /**
  * Enables the use of named configs (CML version >2.7.0 required!)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/cml2/0.8.5/docs#named_configs Cml2Provider#named_configs}
  */
  readonly namedConfigs?: boolean | cdktf.IResolvable;
  /**
  * CML2 password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/cml2/0.8.5/docs#password Cml2Provider#password}
  */
  readonly password?: string;
  /**
  * Disables TLS certificate verification (default is false -- will not skip / it will verify the certificate!)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/cml2/0.8.5/docs#skip_verify Cml2Provider#skip_verify}
  */
  readonly skipVerify?: boolean | cdktf.IResolvable;
  /**
  * CML2 API token (JWT).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/cml2/0.8.5/docs#token Cml2Provider#token}
  */
  readonly token?: string;
  /**
  * Enables the client cache, **Deprecated**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/cml2/0.8.5/docs#use_cache Cml2Provider#use_cache}
  */
  readonly useCache?: boolean | cdktf.IResolvable;
  /**
  * CML2 username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/cml2/0.8.5/docs#username Cml2Provider#username}
  */
  readonly username?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/cml2/0.8.5/docs#alias Cml2Provider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/cml2/0.8.5/docs cml2}
*/
export class Cml2Provider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cml2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Cml2Provider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Cml2Provider to import
  * @param importFromId The id of the existing Cml2Provider that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/cml2/0.8.5/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Cml2Provider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cml2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/cml2/0.8.5/docs cml2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Cml2ProviderConfig
  */
  public constructor(scope: Construct, id: string, config: Cml2ProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'cml2',
      terraformGeneratorMetadata: {
        providerName: 'cml2',
        providerVersion: '0.8.5',
        providerVersionConstraint: '0.8.5'
      },
      terraformProviderSource: 'CiscoDevNet/cml2'
    });
    this._address = config.address;
    this._cacert = config.cacert;
    this._dynamicConfig = config.dynamicConfig;
    this._namedConfigs = config.namedConfigs;
    this._password = config.password;
    this._skipVerify = config.skipVerify;
    this._token = config.token;
    this._useCache = config.useCache;
    this._username = config.username;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address - computed: false, optional: false, required: true
  private _address?: string; 
  public get address() {
    return this._address;
  }
  public set address(value: string | undefined) {
    this._address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // cacert - computed: false, optional: true, required: false
  private _cacert?: string; 
  public get cacert() {
    return this._cacert;
  }
  public set cacert(value: string | undefined) {
    this._cacert = value;
  }
  public resetCacert() {
    this._cacert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacertInput() {
    return this._cacert;
  }

  // dynamic_config - computed: false, optional: true, required: false
  private _dynamicConfig?: boolean | cdktf.IResolvable; 
  public get dynamicConfig() {
    return this._dynamicConfig;
  }
  public set dynamicConfig(value: boolean | cdktf.IResolvable | undefined) {
    this._dynamicConfig = value;
  }
  public resetDynamicConfig() {
    this._dynamicConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicConfigInput() {
    return this._dynamicConfig;
  }

  // named_configs - computed: false, optional: true, required: false
  private _namedConfigs?: boolean | cdktf.IResolvable; 
  public get namedConfigs() {
    return this._namedConfigs;
  }
  public set namedConfigs(value: boolean | cdktf.IResolvable | undefined) {
    this._namedConfigs = value;
  }
  public resetNamedConfigs() {
    this._namedConfigs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namedConfigsInput() {
    return this._namedConfigs;
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

  // skip_verify - computed: false, optional: true, required: false
  private _skipVerify?: boolean | cdktf.IResolvable; 
  public get skipVerify() {
    return this._skipVerify;
  }
  public set skipVerify(value: boolean | cdktf.IResolvable | undefined) {
    this._skipVerify = value;
  }
  public resetSkipVerify() {
    this._skipVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipVerifyInput() {
    return this._skipVerify;
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

  // use_cache - computed: false, optional: true, required: false
  private _useCache?: boolean | cdktf.IResolvable; 
  public get useCache() {
    return this._useCache;
  }
  public set useCache(value: boolean | cdktf.IResolvable | undefined) {
    this._useCache = value;
  }
  public resetUseCache() {
    this._useCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useCacheInput() {
    return this._useCache;
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
      address: cdktf.stringToTerraform(this._address),
      cacert: cdktf.stringToTerraform(this._cacert),
      dynamic_config: cdktf.booleanToTerraform(this._dynamicConfig),
      named_configs: cdktf.booleanToTerraform(this._namedConfigs),
      password: cdktf.stringToTerraform(this._password),
      skip_verify: cdktf.booleanToTerraform(this._skipVerify),
      token: cdktf.stringToTerraform(this._token),
      use_cache: cdktf.booleanToTerraform(this._useCache),
      username: cdktf.stringToTerraform(this._username),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      address: {
        value: cdktf.stringToHclTerraform(this._address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cacert: {
        value: cdktf.stringToHclTerraform(this._cacert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dynamic_config: {
        value: cdktf.booleanToHclTerraform(this._dynamicConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      named_configs: {
        value: cdktf.booleanToHclTerraform(this._namedConfigs),
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
      skip_verify: {
        value: cdktf.booleanToHclTerraform(this._skipVerify),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      token: {
        value: cdktf.stringToHclTerraform(this._token),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_cache: {
        value: cdktf.booleanToHclTerraform(this._useCache),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
