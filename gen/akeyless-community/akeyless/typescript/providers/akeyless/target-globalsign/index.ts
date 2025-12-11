// https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/target_globalsign
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TargetGlobalsignConfig extends cdktf.TerraformMetaArguments {
  /**
  * Email of the GlobalSign GCC account contact
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/target_globalsign#contact_email TargetGlobalsign#contact_email}
  */
  readonly contactEmail: string;
  /**
  * First name of the GlobalSign GCC account contact
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/target_globalsign#contact_first_name TargetGlobalsign#contact_first_name}
  */
  readonly contactFirstName: string;
  /**
  * Last name of the GlobalSign GCC account contact
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/target_globalsign#contact_last_name TargetGlobalsign#contact_last_name}
  */
  readonly contactLastName: string;
  /**
  * Telephone of the GlobalSign GCC account contact
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/target_globalsign#contact_phone TargetGlobalsign#contact_phone}
  */
  readonly contactPhone: string;
  /**
  * Description of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/target_globalsign#description TargetGlobalsign#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/target_globalsign#id TargetGlobalsign#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Key name. The key will be used to encrypt the target secret value. If key name is not specified, the account default protection key is used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/target_globalsign#key TargetGlobalsign#key}
  */
  readonly key?: string;
  /**
  * Target name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/target_globalsign#name TargetGlobalsign#name}
  */
  readonly name: string;
  /**
  * Password of the GlobalSign GCC account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/target_globalsign#password TargetGlobalsign#password}
  */
  readonly password: string;
  /**
  * Profile ID of the GlobalSign GCC account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/target_globalsign#profile_id TargetGlobalsign#profile_id}
  */
  readonly profileId: string;
  /**
  * Timeout waiting for certificate validation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/target_globalsign#timeout TargetGlobalsign#timeout}
  */
  readonly timeout?: string;
  /**
  * Username of the GlobalSign GCC account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/target_globalsign#username TargetGlobalsign#username}
  */
  readonly username: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/target_globalsign akeyless_target_globalsign}
*/
export class TargetGlobalsign extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akeyless_target_globalsign";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TargetGlobalsign resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TargetGlobalsign to import
  * @param importFromId The id of the existing TargetGlobalsign that should be imported. Refer to the {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/target_globalsign#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TargetGlobalsign to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akeyless_target_globalsign", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/target_globalsign akeyless_target_globalsign} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TargetGlobalsignConfig
  */
  public constructor(scope: Construct, id: string, config: TargetGlobalsignConfig) {
    super(scope, id, {
      terraformResourceType: 'akeyless_target_globalsign',
      terraformGeneratorMetadata: {
        providerName: 'akeyless',
        providerVersion: '1.11.2',
        providerVersionConstraint: '1.11.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._contactEmail = config.contactEmail;
    this._contactFirstName = config.contactFirstName;
    this._contactLastName = config.contactLastName;
    this._contactPhone = config.contactPhone;
    this._description = config.description;
    this._id = config.id;
    this._key = config.key;
    this._name = config.name;
    this._password = config.password;
    this._profileId = config.profileId;
    this._timeout = config.timeout;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // contact_email - computed: false, optional: false, required: true
  private _contactEmail?: string; 
  public get contactEmail() {
    return this.getStringAttribute('contact_email');
  }
  public set contactEmail(value: string) {
    this._contactEmail = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contactEmailInput() {
    return this._contactEmail;
  }

  // contact_first_name - computed: false, optional: false, required: true
  private _contactFirstName?: string; 
  public get contactFirstName() {
    return this.getStringAttribute('contact_first_name');
  }
  public set contactFirstName(value: string) {
    this._contactFirstName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contactFirstNameInput() {
    return this._contactFirstName;
  }

  // contact_last_name - computed: false, optional: false, required: true
  private _contactLastName?: string; 
  public get contactLastName() {
    return this.getStringAttribute('contact_last_name');
  }
  public set contactLastName(value: string) {
    this._contactLastName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contactLastNameInput() {
    return this._contactLastName;
  }

  // contact_phone - computed: false, optional: false, required: true
  private _contactPhone?: string; 
  public get contactPhone() {
    return this.getStringAttribute('contact_phone');
  }
  public set contactPhone(value: string) {
    this._contactPhone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contactPhoneInput() {
    return this._contactPhone;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // profile_id - computed: false, optional: false, required: true
  private _profileId?: string; 
  public get profileId() {
    return this.getStringAttribute('profile_id');
  }
  public set profileId(value: string) {
    this._profileId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get profileIdInput() {
    return this._profileId;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: string; 
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
  public set timeout(value: string) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
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
      contact_email: cdktf.stringToTerraform(this._contactEmail),
      contact_first_name: cdktf.stringToTerraform(this._contactFirstName),
      contact_last_name: cdktf.stringToTerraform(this._contactLastName),
      contact_phone: cdktf.stringToTerraform(this._contactPhone),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      key: cdktf.stringToTerraform(this._key),
      name: cdktf.stringToTerraform(this._name),
      password: cdktf.stringToTerraform(this._password),
      profile_id: cdktf.stringToTerraform(this._profileId),
      timeout: cdktf.stringToTerraform(this._timeout),
      username: cdktf.stringToTerraform(this._username),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      contact_email: {
        value: cdktf.stringToHclTerraform(this._contactEmail),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      contact_first_name: {
        value: cdktf.stringToHclTerraform(this._contactFirstName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      contact_last_name: {
        value: cdktf.stringToHclTerraform(this._contactLastName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      contact_phone: {
        value: cdktf.stringToHclTerraform(this._contactPhone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      key: {
        value: cdktf.stringToHclTerraform(this._key),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
      profile_id: {
        value: cdktf.stringToHclTerraform(this._profileId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeout: {
        value: cdktf.stringToHclTerraform(this._timeout),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
