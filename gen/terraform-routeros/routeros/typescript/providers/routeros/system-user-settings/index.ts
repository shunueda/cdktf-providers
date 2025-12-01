// https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/system_user_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemUserSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/system_user_settings#___path___ SystemUserSettings#___path___}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/system_user_settings#id SystemUserSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * An option specifies the complexity requirements of the password, with categories being uppercase, lowercase, digit, and symbol.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/system_user_settings#minimum_categories SystemUserSettings#minimum_categories}
  */
  readonly minimumCategories?: number;
  /**
  * An option specifies the minimum length of the password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/system_user_settings#minimum_password_length SystemUserSettings#minimum_password_length}
  */
  readonly minimumPasswordLength?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/system_user_settings routeros_system_user_settings}
*/
export class SystemUserSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_system_user_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemUserSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemUserSettings to import
  * @param importFromId The id of the existing SystemUserSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/system_user_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemUserSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_system_user_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/system_user_settings routeros_system_user_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemUserSettingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemUserSettingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'routeros_system_user_settings',
      terraformGeneratorMetadata: {
        providerName: 'routeros',
        providerVersion: '1.95.0',
        providerVersionConstraint: '1.95.0'
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
    this._minimumCategories = config.minimumCategories;
    this._minimumPasswordLength = config.minimumPasswordLength;
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

  // minimum_categories - computed: false, optional: true, required: false
  private _minimumCategories?: number; 
  public get minimumCategories() {
    return this.getNumberAttribute('minimum_categories');
  }
  public set minimumCategories(value: number) {
    this._minimumCategories = value;
  }
  public resetMinimumCategories() {
    this._minimumCategories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumCategoriesInput() {
    return this._minimumCategories;
  }

  // minimum_password_length - computed: false, optional: true, required: false
  private _minimumPasswordLength?: number; 
  public get minimumPasswordLength() {
    return this.getNumberAttribute('minimum_password_length');
  }
  public set minimumPasswordLength(value: number) {
    this._minimumPasswordLength = value;
  }
  public resetMinimumPasswordLength() {
    this._minimumPasswordLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumPasswordLengthInput() {
    return this._minimumPasswordLength;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ___path___: cdktf.stringToTerraform(this._path),
      id: cdktf.stringToTerraform(this._id),
      minimum_categories: cdktf.numberToTerraform(this._minimumCategories),
      minimum_password_length: cdktf.numberToTerraform(this._minimumPasswordLength),
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
      minimum_categories: {
        value: cdktf.numberToHclTerraform(this._minimumCategories),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      minimum_password_length: {
        value: cdktf.numberToHclTerraform(this._minimumPasswordLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
