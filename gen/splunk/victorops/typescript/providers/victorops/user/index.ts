// https://registry.terraform.io/providers/splunk/victorops/0.1.4/docs/resources/user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/victorops/0.1.4/docs/resources/user#email User#email}
  */
  readonly email: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/victorops/0.1.4/docs/resources/user#expiration_hours User#expiration_hours}
  */
  readonly expirationHours?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/victorops/0.1.4/docs/resources/user#first_name User#first_name}
  */
  readonly firstName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/victorops/0.1.4/docs/resources/user#id User#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/victorops/0.1.4/docs/resources/user#is_admin User#is_admin}
  */
  readonly isAdmin: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/victorops/0.1.4/docs/resources/user#last_name User#last_name}
  */
  readonly lastName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/victorops/0.1.4/docs/resources/user#replacement_user User#replacement_user}
  */
  readonly replacementUser?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/victorops/0.1.4/docs/resources/user#user_name User#user_name}
  */
  readonly userName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/splunk/victorops/0.1.4/docs/resources/user victorops_user}
*/
export class User extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "victorops_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a User resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the User to import
  * @param importFromId The id of the existing User that should be imported. Refer to the {@link https://registry.terraform.io/providers/splunk/victorops/0.1.4/docs/resources/user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the User to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "victorops_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/splunk/victorops/0.1.4/docs/resources/user victorops_user} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserConfig
  */
  public constructor(scope: Construct, id: string, config: UserConfig) {
    super(scope, id, {
      terraformResourceType: 'victorops_user',
      terraformGeneratorMetadata: {
        providerName: 'victorops',
        providerVersion: '0.1.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._email = config.email;
    this._expirationHours = config.expirationHours;
    this._firstName = config.firstName;
    this._id = config.id;
    this._isAdmin = config.isAdmin;
    this._lastName = config.lastName;
    this._replacementUser = config.replacementUser;
    this._userName = config.userName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_email_contact_id - computed: true, optional: false, required: false
  public get defaultEmailContactId() {
    return this.getNumberAttribute('default_email_contact_id');
  }

  // email - computed: false, optional: false, required: true
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // expiration_hours - computed: false, optional: true, required: false
  private _expirationHours?: number; 
  public get expirationHours() {
    return this.getNumberAttribute('expiration_hours');
  }
  public set expirationHours(value: number) {
    this._expirationHours = value;
  }
  public resetExpirationHours() {
    this._expirationHours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationHoursInput() {
    return this._expirationHours;
  }

  // first_name - computed: false, optional: false, required: true
  private _firstName?: string; 
  public get firstName() {
    return this.getStringAttribute('first_name');
  }
  public set firstName(value: string) {
    this._firstName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get firstNameInput() {
    return this._firstName;
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

  // is_admin - computed: false, optional: false, required: true
  private _isAdmin?: boolean | cdktf.IResolvable; 
  public get isAdmin() {
    return this.getBooleanAttribute('is_admin');
  }
  public set isAdmin(value: boolean | cdktf.IResolvable) {
    this._isAdmin = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isAdminInput() {
    return this._isAdmin;
  }

  // last_name - computed: false, optional: false, required: true
  private _lastName?: string; 
  public get lastName() {
    return this.getStringAttribute('last_name');
  }
  public set lastName(value: string) {
    this._lastName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lastNameInput() {
    return this._lastName;
  }

  // replacement_user - computed: false, optional: true, required: false
  private _replacementUser?: string; 
  public get replacementUser() {
    return this.getStringAttribute('replacement_user');
  }
  public set replacementUser(value: string) {
    this._replacementUser = value;
  }
  public resetReplacementUser() {
    this._replacementUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replacementUserInput() {
    return this._replacementUser;
  }

  // user_name - computed: false, optional: false, required: true
  private _userName?: string; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      email: cdktf.stringToTerraform(this._email),
      expiration_hours: cdktf.numberToTerraform(this._expirationHours),
      first_name: cdktf.stringToTerraform(this._firstName),
      id: cdktf.stringToTerraform(this._id),
      is_admin: cdktf.booleanToTerraform(this._isAdmin),
      last_name: cdktf.stringToTerraform(this._lastName),
      replacement_user: cdktf.stringToTerraform(this._replacementUser),
      user_name: cdktf.stringToTerraform(this._userName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      email: {
        value: cdktf.stringToHclTerraform(this._email),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      expiration_hours: {
        value: cdktf.numberToHclTerraform(this._expirationHours),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      first_name: {
        value: cdktf.stringToHclTerraform(this._firstName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_admin: {
        value: cdktf.booleanToHclTerraform(this._isAdmin),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      last_name: {
        value: cdktf.stringToHclTerraform(this._lastName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      replacement_user: {
        value: cdktf.stringToHclTerraform(this._replacementUser),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_name: {
        value: cdktf.stringToHclTerraform(this._userName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
