// https://registry.terraform.io/providers/icinga/icinga2/0.5.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Icinga2ProviderConfig {
  /**
  * The password for authenticating to the Icinga2 server.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/icinga/icinga2/0.5.0/docs#api_password Icinga2Provider#api_password}
  */
  readonly apiPassword: string;
  /**
  * The address of the Icinga2 server.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/icinga/icinga2/0.5.0/docs#api_url Icinga2Provider#api_url}
  */
  readonly apiUrl: string;
  /**
  * The user to authenticate to the Icinga2 Server as.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/icinga/icinga2/0.5.0/docs#api_user Icinga2Provider#api_user}
  */
  readonly apiUser: string;
  /**
  * Disable TLS verify when connecting to Icinga2 Server
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/icinga/icinga2/0.5.0/docs#insecure_skip_tls_verify Icinga2Provider#insecure_skip_tls_verify}
  */
  readonly insecureSkipTlsVerify?: boolean | cdktf.IResolvable;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/icinga/icinga2/0.5.0/docs#alias Icinga2Provider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/icinga/icinga2/0.5.0/docs icinga2}
*/
export class Icinga2Provider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "icinga2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Icinga2Provider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Icinga2Provider to import
  * @param importFromId The id of the existing Icinga2Provider that should be imported. Refer to the {@link https://registry.terraform.io/providers/icinga/icinga2/0.5.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Icinga2Provider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "icinga2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/icinga/icinga2/0.5.0/docs icinga2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Icinga2ProviderConfig
  */
  public constructor(scope: Construct, id: string, config: Icinga2ProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'icinga2',
      terraformGeneratorMetadata: {
        providerName: 'icinga2',
        providerVersion: '0.5.0',
        providerVersionConstraint: '0.5.0'
      },
      terraformProviderSource: 'Icinga/icinga2'
    });
    this._apiPassword = config.apiPassword;
    this._apiUrl = config.apiUrl;
    this._apiUser = config.apiUser;
    this._insecureSkipTlsVerify = config.insecureSkipTlsVerify;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_password - computed: false, optional: false, required: true
  private _apiPassword?: string; 
  public get apiPassword() {
    return this._apiPassword;
  }
  public set apiPassword(value: string | undefined) {
    this._apiPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiPasswordInput() {
    return this._apiPassword;
  }

  // api_url - computed: false, optional: false, required: true
  private _apiUrl?: string; 
  public get apiUrl() {
    return this._apiUrl;
  }
  public set apiUrl(value: string | undefined) {
    this._apiUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiUrlInput() {
    return this._apiUrl;
  }

  // api_user - computed: false, optional: false, required: true
  private _apiUser?: string; 
  public get apiUser() {
    return this._apiUser;
  }
  public set apiUser(value: string | undefined) {
    this._apiUser = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiUserInput() {
    return this._apiUser;
  }

  // insecure_skip_tls_verify - computed: false, optional: true, required: false
  private _insecureSkipTlsVerify?: boolean | cdktf.IResolvable; 
  public get insecureSkipTlsVerify() {
    return this._insecureSkipTlsVerify;
  }
  public set insecureSkipTlsVerify(value: boolean | cdktf.IResolvable | undefined) {
    this._insecureSkipTlsVerify = value;
  }
  public resetInsecureSkipTlsVerify() {
    this._insecureSkipTlsVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureSkipTlsVerifyInput() {
    return this._insecureSkipTlsVerify;
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
      api_password: cdktf.stringToTerraform(this._apiPassword),
      api_url: cdktf.stringToTerraform(this._apiUrl),
      api_user: cdktf.stringToTerraform(this._apiUser),
      insecure_skip_tls_verify: cdktf.booleanToTerraform(this._insecureSkipTlsVerify),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_password: {
        value: cdktf.stringToHclTerraform(this._apiPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      api_url: {
        value: cdktf.stringToHclTerraform(this._apiUrl),
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
      insecure_skip_tls_verify: {
        value: cdktf.booleanToHclTerraform(this._insecureSkipTlsVerify),
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
