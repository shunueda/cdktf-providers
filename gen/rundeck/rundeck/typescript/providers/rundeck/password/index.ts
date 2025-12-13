// https://registry.terraform.io/providers/rundeck/rundeck/1.0.0/docs/resources/password
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PasswordConfig extends cdktf.TerraformMetaArguments {
  /**
  * The password to store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/1.0.0/docs/resources/password#password Password#password}
  */
  readonly password: string;
  /**
  * Path to the key within the key store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/1.0.0/docs/resources/password#path Password#path}
  */
  readonly path: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/rundeck/rundeck/1.0.0/docs/resources/password rundeck_password}
*/
export class Password extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rundeck_password";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Password resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Password to import
  * @param importFromId The id of the existing Password that should be imported. Refer to the {@link https://registry.terraform.io/providers/rundeck/rundeck/1.0.0/docs/resources/password#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Password to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rundeck_password", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rundeck/rundeck/1.0.0/docs/resources/password rundeck_password} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PasswordConfig
  */
  public constructor(scope: Construct, id: string, config: PasswordConfig) {
    super(scope, id, {
      terraformResourceType: 'rundeck_password',
      terraformGeneratorMetadata: {
        providerName: 'rundeck',
        providerVersion: '1.0.0',
        providerVersionConstraint: '1.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._password = config.password;
    this._path = config.path;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      password: cdktf.stringToTerraform(this._password),
      path: cdktf.stringToTerraform(this._path),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      path: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
