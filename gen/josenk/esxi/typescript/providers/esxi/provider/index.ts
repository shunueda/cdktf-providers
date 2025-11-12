// https://registry.terraform.io/providers/josenk/esxi/1.10.3/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EsxiProviderConfig {
  /**
  * The esxi hostname or IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josenk/esxi/1.10.3/docs#esxi_hostname EsxiProvider#esxi_hostname}
  */
  readonly esxiHostname?: string;
  /**
  * ssh port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josenk/esxi/1.10.3/docs#esxi_hostport EsxiProvider#esxi_hostport}
  */
  readonly esxiHostport?: string;
  /**
  * ssl port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josenk/esxi/1.10.3/docs#esxi_hostssl EsxiProvider#esxi_hostssl}
  */
  readonly esxiHostssl?: string;
  /**
  * esxi ssh password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josenk/esxi/1.10.3/docs#esxi_password EsxiProvider#esxi_password}
  */
  readonly esxiPassword?: string;
  /**
  * esxi ssh username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josenk/esxi/1.10.3/docs#esxi_username EsxiProvider#esxi_username}
  */
  readonly esxiUsername?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josenk/esxi/1.10.3/docs#alias EsxiProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/josenk/esxi/1.10.3/docs esxi}
*/
export class EsxiProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "esxi";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EsxiProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EsxiProvider to import
  * @param importFromId The id of the existing EsxiProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/josenk/esxi/1.10.3/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EsxiProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "esxi", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/josenk/esxi/1.10.3/docs esxi} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EsxiProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: EsxiProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'esxi',
      terraformGeneratorMetadata: {
        providerName: 'esxi',
        providerVersion: '1.10.3',
        providerVersionConstraint: '1.10.3'
      },
      terraformProviderSource: 'josenk/esxi'
    });
    this._esxiHostname = config.esxiHostname;
    this._esxiHostport = config.esxiHostport;
    this._esxiHostssl = config.esxiHostssl;
    this._esxiPassword = config.esxiPassword;
    this._esxiUsername = config.esxiUsername;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // esxi_hostname - computed: false, optional: true, required: false
  private _esxiHostname?: string; 
  public get esxiHostname() {
    return this._esxiHostname;
  }
  public set esxiHostname(value: string | undefined) {
    this._esxiHostname = value;
  }
  public resetEsxiHostname() {
    this._esxiHostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get esxiHostnameInput() {
    return this._esxiHostname;
  }

  // esxi_hostport - computed: false, optional: true, required: false
  private _esxiHostport?: string; 
  public get esxiHostport() {
    return this._esxiHostport;
  }
  public set esxiHostport(value: string | undefined) {
    this._esxiHostport = value;
  }
  public resetEsxiHostport() {
    this._esxiHostport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get esxiHostportInput() {
    return this._esxiHostport;
  }

  // esxi_hostssl - computed: false, optional: true, required: false
  private _esxiHostssl?: string; 
  public get esxiHostssl() {
    return this._esxiHostssl;
  }
  public set esxiHostssl(value: string | undefined) {
    this._esxiHostssl = value;
  }
  public resetEsxiHostssl() {
    this._esxiHostssl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get esxiHostsslInput() {
    return this._esxiHostssl;
  }

  // esxi_password - computed: false, optional: true, required: false
  private _esxiPassword?: string; 
  public get esxiPassword() {
    return this._esxiPassword;
  }
  public set esxiPassword(value: string | undefined) {
    this._esxiPassword = value;
  }
  public resetEsxiPassword() {
    this._esxiPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get esxiPasswordInput() {
    return this._esxiPassword;
  }

  // esxi_username - computed: false, optional: true, required: false
  private _esxiUsername?: string; 
  public get esxiUsername() {
    return this._esxiUsername;
  }
  public set esxiUsername(value: string | undefined) {
    this._esxiUsername = value;
  }
  public resetEsxiUsername() {
    this._esxiUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get esxiUsernameInput() {
    return this._esxiUsername;
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
      esxi_hostname: cdktf.stringToTerraform(this._esxiHostname),
      esxi_hostport: cdktf.stringToTerraform(this._esxiHostport),
      esxi_hostssl: cdktf.stringToTerraform(this._esxiHostssl),
      esxi_password: cdktf.stringToTerraform(this._esxiPassword),
      esxi_username: cdktf.stringToTerraform(this._esxiUsername),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      esxi_hostname: {
        value: cdktf.stringToHclTerraform(this._esxiHostname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      esxi_hostport: {
        value: cdktf.stringToHclTerraform(this._esxiHostport),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      esxi_hostssl: {
        value: cdktf.stringToHclTerraform(this._esxiHostssl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      esxi_password: {
        value: cdktf.stringToHclTerraform(this._esxiPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      esxi_username: {
        value: cdktf.stringToHclTerraform(this._esxiUsername),
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
