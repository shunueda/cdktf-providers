// https://registry.terraform.io/providers/vmware/vra7/3.0.15/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Vra7ProviderConfig {
  /**
  * host name.domain name of the vRealize Automation server, for example, mycompany.mktg.mydomain.com.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra7/3.0.15/docs#host Vra7Provider#host}
  */
  readonly host: string;
  /**
  * Specify whether to validate TLS certificates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra7/3.0.15/docs#insecure Vra7Provider#insecure}
  */
  readonly insecure?: boolean | cdktf.IResolvable;
  /**
  * Tenant administrator password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra7/3.0.15/docs#password Vra7Provider#password}
  */
  readonly password: string;
  /**
  * Specifies the tenant URL token determined by the system administratorwhen creating the tenant, for example, support.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra7/3.0.15/docs#tenant Vra7Provider#tenant}
  */
  readonly tenant: string;
  /**
  * Tenant administrator username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra7/3.0.15/docs#username Vra7Provider#username}
  */
  readonly username: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra7/3.0.15/docs#alias Vra7Provider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vra7/3.0.15/docs vra7}
*/
export class Vra7Provider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vra7";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Vra7Provider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Vra7Provider to import
  * @param importFromId The id of the existing Vra7Provider that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vra7/3.0.15/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Vra7Provider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vra7", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vra7/3.0.15/docs vra7} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Vra7ProviderConfig
  */
  public constructor(scope: Construct, id: string, config: Vra7ProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'vra7',
      terraformGeneratorMetadata: {
        providerName: 'vra7',
        providerVersion: '3.0.15',
        providerVersionConstraint: '3.0.15'
      },
      terraformProviderSource: 'vmware/vra7'
    });
    this._host = config.host;
    this._insecure = config.insecure;
    this._password = config.password;
    this._tenant = config.tenant;
    this._username = config.username;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this._host;
  }
  public set host(value: string | undefined) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
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

  // tenant - computed: false, optional: false, required: true
  private _tenant?: string; 
  public get tenant() {
    return this._tenant;
  }
  public set tenant(value: string | undefined) {
    this._tenant = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
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
      host: cdktf.stringToTerraform(this._host),
      insecure: cdktf.booleanToTerraform(this._insecure),
      password: cdktf.stringToTerraform(this._password),
      tenant: cdktf.stringToTerraform(this._tenant),
      username: cdktf.stringToTerraform(this._username),
      alias: cdktf.stringToTerraform(this._alias),
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
      tenant: {
        value: cdktf.stringToHclTerraform(this._tenant),
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
