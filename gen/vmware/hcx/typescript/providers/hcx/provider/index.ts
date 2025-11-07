// https://registry.terraform.io/providers/vmware/hcx/0.5.1/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HcxProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/hcx/0.5.1/docs#admin_password HcxProvider#admin_password}
  */
  readonly adminPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/hcx/0.5.1/docs#admin_username HcxProvider#admin_username}
  */
  readonly adminUsername?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/hcx/0.5.1/docs#hcx HcxProvider#hcx}
  */
  readonly hcx?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/hcx/0.5.1/docs#password HcxProvider#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/hcx/0.5.1/docs#username HcxProvider#username}
  */
  readonly username?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/hcx/0.5.1/docs#vmc_token HcxProvider#vmc_token}
  */
  readonly vmcToken?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/hcx/0.5.1/docs#alias HcxProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/hcx/0.5.1/docs hcx}
*/
export class HcxProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hcx";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a HcxProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the HcxProvider to import
  * @param importFromId The id of the existing HcxProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/hcx/0.5.1/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the HcxProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "hcx", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/hcx/0.5.1/docs hcx} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HcxProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: HcxProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'hcx',
      terraformGeneratorMetadata: {
        providerName: 'hcx',
        providerVersion: '0.5.1'
      },
      terraformProviderSource: 'vmware/hcx'
    });
    this._adminPassword = config.adminPassword;
    this._adminUsername = config.adminUsername;
    this._hcx = config.hcx;
    this._password = config.password;
    this._username = config.username;
    this._vmcToken = config.vmcToken;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_password - computed: false, optional: true, required: false
  private _adminPassword?: string; 
  public get adminPassword() {
    return this._adminPassword;
  }
  public set adminPassword(value: string | undefined) {
    this._adminPassword = value;
  }
  public resetAdminPassword() {
    this._adminPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminPasswordInput() {
    return this._adminPassword;
  }

  // admin_username - computed: false, optional: true, required: false
  private _adminUsername?: string; 
  public get adminUsername() {
    return this._adminUsername;
  }
  public set adminUsername(value: string | undefined) {
    this._adminUsername = value;
  }
  public resetAdminUsername() {
    this._adminUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminUsernameInput() {
    return this._adminUsername;
  }

  // hcx - computed: false, optional: true, required: false
  private _hcx?: string; 
  public get hcx() {
    return this._hcx;
  }
  public set hcx(value: string | undefined) {
    this._hcx = value;
  }
  public resetHcx() {
    this._hcx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hcxInput() {
    return this._hcx;
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

  // vmc_token - computed: false, optional: true, required: false
  private _vmcToken?: string; 
  public get vmcToken() {
    return this._vmcToken;
  }
  public set vmcToken(value: string | undefined) {
    this._vmcToken = value;
  }
  public resetVmcToken() {
    this._vmcToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmcTokenInput() {
    return this._vmcToken;
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
      admin_password: cdktf.stringToTerraform(this._adminPassword),
      admin_username: cdktf.stringToTerraform(this._adminUsername),
      hcx: cdktf.stringToTerraform(this._hcx),
      password: cdktf.stringToTerraform(this._password),
      username: cdktf.stringToTerraform(this._username),
      vmc_token: cdktf.stringToTerraform(this._vmcToken),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      admin_password: {
        value: cdktf.stringToHclTerraform(this._adminPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      admin_username: {
        value: cdktf.stringToHclTerraform(this._adminUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hcx: {
        value: cdktf.stringToHclTerraform(this._hcx),
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
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vmc_token: {
        value: cdktf.stringToHclTerraform(this._vmcToken),
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
