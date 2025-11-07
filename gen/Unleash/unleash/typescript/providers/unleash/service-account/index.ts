// https://registry.terraform.io/providers/unleash/unleash/3.1.11/docs/resources/service_account
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServiceAccountConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the service account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/unleash/unleash/3.1.11/docs/resources/service_account#name ServiceAccount#name}
  */
  readonly name: string;
  /**
  * The root role ID for the service account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/unleash/unleash/3.1.11/docs/resources/service_account#root_role ServiceAccount#root_role}
  */
  readonly rootRole: number;
  /**
  * The username for the service account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/unleash/unleash/3.1.11/docs/resources/service_account#username ServiceAccount#username}
  */
  readonly username: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/unleash/unleash/3.1.11/docs/resources/service_account unleash_service_account}
*/
export class ServiceAccount extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "unleash_service_account";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ServiceAccount resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServiceAccount to import
  * @param importFromId The id of the existing ServiceAccount that should be imported. Refer to the {@link https://registry.terraform.io/providers/unleash/unleash/3.1.11/docs/resources/service_account#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServiceAccount to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "unleash_service_account", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/unleash/unleash/3.1.11/docs/resources/service_account unleash_service_account} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServiceAccountConfig
  */
  public constructor(scope: Construct, id: string, config: ServiceAccountConfig) {
    super(scope, id, {
      terraformResourceType: 'unleash_service_account',
      terraformGeneratorMetadata: {
        providerName: 'unleash',
        providerVersion: '3.1.11'
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
    this._rootRole = config.rootRole;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
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

  // root_role - computed: false, optional: false, required: true
  private _rootRole?: number; 
  public get rootRole() {
    return this.getNumberAttribute('root_role');
  }
  public set rootRole(value: number) {
    this._rootRole = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rootRoleInput() {
    return this._rootRole;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      root_role: cdktf.numberToTerraform(this._rootRole),
      username: cdktf.stringToTerraform(this._username),
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
      root_role: {
        value: cdktf.numberToHclTerraform(this._rootRole),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
