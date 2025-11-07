// https://registry.terraform.io/providers/loafoe/htpasswd/1.5.0/docs/resources/password
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PasswordConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/loafoe/htpasswd/1.5.0/docs/resources/password#id Password#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/loafoe/htpasswd/1.5.0/docs/resources/password#password Password#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/loafoe/htpasswd/1.5.0/docs/resources/password#salt Password#salt}
  */
  readonly salt?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/loafoe/htpasswd/1.5.0/docs/resources/password htpasswd_password}
*/
export class Password extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "htpasswd_password";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Password resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Password to import
  * @param importFromId The id of the existing Password that should be imported. Refer to the {@link https://registry.terraform.io/providers/loafoe/htpasswd/1.5.0/docs/resources/password#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Password to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "htpasswd_password", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/loafoe/htpasswd/1.5.0/docs/resources/password htpasswd_password} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PasswordConfig
  */
  public constructor(scope: Construct, id: string, config: PasswordConfig) {
    super(scope, id, {
      terraformResourceType: 'htpasswd_password',
      terraformGeneratorMetadata: {
        providerName: 'htpasswd',
        providerVersion: '1.5.0'
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
    this._password = config.password;
    this._salt = config.salt;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // apr1 - computed: true, optional: false, required: false
  public get apr1() {
    return this.getStringAttribute('apr1');
  }

  // bcrypt - computed: true, optional: false, required: false
  public get bcrypt() {
    return this.getStringAttribute('bcrypt');
  }

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

  // salt - computed: false, optional: true, required: false
  private _salt?: string; 
  public get salt() {
    return this.getStringAttribute('salt');
  }
  public set salt(value: string) {
    this._salt = value;
  }
  public resetSalt() {
    this._salt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saltInput() {
    return this._salt;
  }

  // sha256 - computed: true, optional: false, required: false
  public get sha256() {
    return this.getStringAttribute('sha256');
  }

  // sha512 - computed: true, optional: false, required: false
  public get sha512() {
    return this.getStringAttribute('sha512');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      password: cdktf.stringToTerraform(this._password),
      salt: cdktf.stringToTerraform(this._salt),
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
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      salt: {
        value: cdktf.stringToHclTerraform(this._salt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
