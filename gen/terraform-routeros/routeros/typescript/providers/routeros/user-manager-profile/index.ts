// https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/user_manager_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserManagerProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/user_manager_profile#___path___ UserManagerProfile#___path___}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/user_manager_profile#id UserManagerProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Unique name of the profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/user_manager_profile#name UserManagerProfile#name}
  */
  readonly name: string;
  /**
  * The name that will be shown to users in the web interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/user_manager_profile#name_for_users UserManagerProfile#name_for_users}
  */
  readonly nameForUsers?: string;
  /**
  * An option whether to allow multiple sessions with the same user name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/user_manager_profile#override_shared_users UserManagerProfile#override_shared_users}
  */
  readonly overrideSharedUsers?: string;
  /**
  * The price of the profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/user_manager_profile#price UserManagerProfile#price}
  */
  readonly price?: number;
  /**
  * The time when the profile becomes active (`assigned` - immediately when the profile entry is created, `first-auth` - upon first authentication request).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/user_manager_profile#starts_when UserManagerProfile#starts_when}
  */
  readonly startsWhen?: string;
  /**
  * The total amount of time a user can use this profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/user_manager_profile#validity UserManagerProfile#validity}
  */
  readonly validity?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/user_manager_profile routeros_user_manager_profile}
*/
export class UserManagerProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_user_manager_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a UserManagerProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the UserManagerProfile to import
  * @param importFromId The id of the existing UserManagerProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/user_manager_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the UserManagerProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_user_manager_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/user_manager_profile routeros_user_manager_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserManagerProfileConfig
  */
  public constructor(scope: Construct, id: string, config: UserManagerProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'routeros_user_manager_profile',
      terraformGeneratorMetadata: {
        providerName: 'routeros',
        providerVersion: '1.91.0',
        providerVersionConstraint: '1.91.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._path = config.path;
    this._id = config.id;
    this._name = config.name;
    this._nameForUsers = config.nameForUsers;
    this._overrideSharedUsers = config.overrideSharedUsers;
    this._price = config.price;
    this._startsWhen = config.startsWhen;
    this._validity = config.validity;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ___path___ - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('___path___');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
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

  // name_for_users - computed: false, optional: true, required: false
  private _nameForUsers?: string; 
  public get nameForUsers() {
    return this.getStringAttribute('name_for_users');
  }
  public set nameForUsers(value: string) {
    this._nameForUsers = value;
  }
  public resetNameForUsers() {
    this._nameForUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameForUsersInput() {
    return this._nameForUsers;
  }

  // override_shared_users - computed: false, optional: true, required: false
  private _overrideSharedUsers?: string; 
  public get overrideSharedUsers() {
    return this.getStringAttribute('override_shared_users');
  }
  public set overrideSharedUsers(value: string) {
    this._overrideSharedUsers = value;
  }
  public resetOverrideSharedUsers() {
    this._overrideSharedUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideSharedUsersInput() {
    return this._overrideSharedUsers;
  }

  // price - computed: false, optional: true, required: false
  private _price?: number; 
  public get price() {
    return this.getNumberAttribute('price');
  }
  public set price(value: number) {
    this._price = value;
  }
  public resetPrice() {
    this._price = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priceInput() {
    return this._price;
  }

  // starts_when - computed: false, optional: true, required: false
  private _startsWhen?: string; 
  public get startsWhen() {
    return this.getStringAttribute('starts_when');
  }
  public set startsWhen(value: string) {
    this._startsWhen = value;
  }
  public resetStartsWhen() {
    this._startsWhen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startsWhenInput() {
    return this._startsWhen;
  }

  // validity - computed: false, optional: true, required: false
  private _validity?: string; 
  public get validity() {
    return this.getStringAttribute('validity');
  }
  public set validity(value: string) {
    this._validity = value;
  }
  public resetValidity() {
    this._validity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validityInput() {
    return this._validity;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ___path___: cdktf.stringToTerraform(this._path),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      name_for_users: cdktf.stringToTerraform(this._nameForUsers),
      override_shared_users: cdktf.stringToTerraform(this._overrideSharedUsers),
      price: cdktf.numberToTerraform(this._price),
      starts_when: cdktf.stringToTerraform(this._startsWhen),
      validity: cdktf.stringToTerraform(this._validity),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ___path___: {
        value: cdktf.stringToHclTerraform(this._path),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name_for_users: {
        value: cdktf.stringToHclTerraform(this._nameForUsers),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      override_shared_users: {
        value: cdktf.stringToHclTerraform(this._overrideSharedUsers),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      price: {
        value: cdktf.numberToHclTerraform(this._price),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      starts_when: {
        value: cdktf.stringToHclTerraform(this._startsWhen),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      validity: {
        value: cdktf.stringToHclTerraform(this._validity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
