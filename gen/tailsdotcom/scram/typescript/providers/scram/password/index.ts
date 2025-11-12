// https://registry.terraform.io/providers/tailsdotcom/scram/0.2.0/docs/resources/password
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PasswordConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailsdotcom/scram/0.2.0/docs/resources/password#id Password#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailsdotcom/scram/0.2.0/docs/resources/password#iter_count Password#iter_count}
  */
  readonly iterCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailsdotcom/scram/0.2.0/docs/resources/password#password Password#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailsdotcom/scram/0.2.0/docs/resources/password#scram_mech Password#scram_mech}
  */
  readonly scramMech?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tailsdotcom/scram/0.2.0/docs/resources/password scram_password}
*/
export class Password extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "scram_password";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Password resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Password to import
  * @param importFromId The id of the existing Password that should be imported. Refer to the {@link https://registry.terraform.io/providers/tailsdotcom/scram/0.2.0/docs/resources/password#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Password to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "scram_password", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tailsdotcom/scram/0.2.0/docs/resources/password scram_password} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PasswordConfig
  */
  public constructor(scope: Construct, id: string, config: PasswordConfig) {
    super(scope, id, {
      terraformResourceType: 'scram_password',
      terraformGeneratorMetadata: {
        providerName: 'scram',
        providerVersion: '0.2.0',
        providerVersionConstraint: '0.2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._iterCount = config.iterCount;
    this._password = config.password;
    this._scramMech = config.scramMech;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // iter_count - computed: false, optional: true, required: false
  private _iterCount?: number; 
  public get iterCount() {
    return this.getNumberAttribute('iter_count');
  }
  public set iterCount(value: number) {
    this._iterCount = value;
  }
  public resetIterCount() {
    this._iterCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iterCountInput() {
    return this._iterCount;
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

  // salt - computed: true, optional: false, required: false
  public get salt() {
    return this.getStringAttribute('salt');
  }

  // scram_mech - computed: false, optional: true, required: false
  private _scramMech?: string; 
  public get scramMech() {
    return this.getStringAttribute('scram_mech');
  }
  public set scramMech(value: string) {
    this._scramMech = value;
  }
  public resetScramMech() {
    this._scramMech = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scramMechInput() {
    return this._scramMech;
  }

  // server_key - computed: true, optional: false, required: false
  public get serverKey() {
    return this.getStringAttribute('server_key');
  }

  // stored_key - computed: true, optional: false, required: false
  public get storedKey() {
    return this.getStringAttribute('stored_key');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      iter_count: cdktf.numberToTerraform(this._iterCount),
      password: cdktf.stringToTerraform(this._password),
      scram_mech: cdktf.stringToTerraform(this._scramMech),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      iter_count: {
        value: cdktf.numberToHclTerraform(this._iterCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scram_mech: {
        value: cdktf.stringToHclTerraform(this._scramMech),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
