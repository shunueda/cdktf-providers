// https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/account
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AccountConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/account#name Account#name}
  */
  readonly name: string;
  /**
  * ID of the network for this account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/account#network_id Account#network_id}
  */
  readonly networkId?: string;
  /**
  * The password of the account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/account#password Account#password}
  */
  readonly password: string;
  /**
  * The name of the site to associate the account with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/account#site Account#site}
  */
  readonly site?: string;
  /**
  * See [RFC 2868](https://www.rfc-editor.org/rfc/rfc2868) section 3.2 Defaults to `6`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/account#tunnel_medium_type Account#tunnel_medium_type}
  */
  readonly tunnelMediumType?: number;
  /**
  * See [RFC 2868](https://www.rfc-editor.org/rfc/rfc2868) section 3.1 Defaults to `13`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/account#tunnel_type Account#tunnel_type}
  */
  readonly tunnelType?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/account unifi_account}
*/
export class Account extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "unifi_account";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Account resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Account to import
  * @param importFromId The id of the existing Account that should be imported. Refer to the {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/account#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Account to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "unifi_account", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/account unifi_account} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AccountConfig
  */
  public constructor(scope: Construct, id: string, config: AccountConfig) {
    super(scope, id, {
      terraformResourceType: 'unifi_account',
      terraformGeneratorMetadata: {
        providerName: 'unifi',
        providerVersion: '0.41.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
    this._networkId = config.networkId;
    this._password = config.password;
    this._site = config.site;
    this._tunnelMediumType = config.tunnelMediumType;
    this._tunnelType = config.tunnelType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // network_id - computed: false, optional: true, required: false
  private _networkId?: string; 
  public get networkId() {
    return this.getStringAttribute('network_id');
  }
  public set networkId(value: string) {
    this._networkId = value;
  }
  public resetNetworkId() {
    this._networkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIdInput() {
    return this._networkId;
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // site - computed: true, optional: true, required: false
  private _site?: string; 
  public get site() {
    return this.getStringAttribute('site');
  }
  public set site(value: string) {
    this._site = value;
  }
  public resetSite() {
    this._site = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteInput() {
    return this._site;
  }

  // tunnel_medium_type - computed: false, optional: true, required: false
  private _tunnelMediumType?: number; 
  public get tunnelMediumType() {
    return this.getNumberAttribute('tunnel_medium_type');
  }
  public set tunnelMediumType(value: number) {
    this._tunnelMediumType = value;
  }
  public resetTunnelMediumType() {
    this._tunnelMediumType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelMediumTypeInput() {
    return this._tunnelMediumType;
  }

  // tunnel_type - computed: false, optional: true, required: false
  private _tunnelType?: number; 
  public get tunnelType() {
    return this.getNumberAttribute('tunnel_type');
  }
  public set tunnelType(value: number) {
    this._tunnelType = value;
  }
  public resetTunnelType() {
    this._tunnelType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelTypeInput() {
    return this._tunnelType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      network_id: cdktf.stringToTerraform(this._networkId),
      password: cdktf.stringToTerraform(this._password),
      site: cdktf.stringToTerraform(this._site),
      tunnel_medium_type: cdktf.numberToTerraform(this._tunnelMediumType),
      tunnel_type: cdktf.numberToTerraform(this._tunnelType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_id: {
        value: cdktf.stringToHclTerraform(this._networkId),
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
      site: {
        value: cdktf.stringToHclTerraform(this._site),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel_medium_type: {
        value: cdktf.numberToHclTerraform(this._tunnelMediumType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tunnel_type: {
        value: cdktf.numberToHclTerraform(this._tunnelType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
