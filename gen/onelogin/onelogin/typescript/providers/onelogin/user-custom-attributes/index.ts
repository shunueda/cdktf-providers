// https://registry.terraform.io/providers/onelogin/onelogin/0.11.2/docs/resources/user_custom_attributes
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserCustomAttributesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/onelogin/onelogin/0.11.2/docs/resources/user_custom_attributes#id UserCustomAttributes#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the custom attribute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/onelogin/onelogin/0.11.2/docs/resources/user_custom_attributes#name UserCustomAttributes#name}
  */
  readonly name: string;
  /**
  * Short name identifier for the custom attribute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/onelogin/onelogin/0.11.2/docs/resources/user_custom_attributes#shortname UserCustomAttributes#shortname}
  */
  readonly shortname: string;
  /**
  * User ID to set this custom attribute for (for user-specific custom attributes)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/onelogin/onelogin/0.11.2/docs/resources/user_custom_attributes#user_id UserCustomAttributes#user_id}
  */
  readonly userId?: number;
  /**
  * Value of the custom attribute (for user-specific custom attributes)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/onelogin/onelogin/0.11.2/docs/resources/user_custom_attributes#value UserCustomAttributes#value}
  */
  readonly value?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/onelogin/onelogin/0.11.2/docs/resources/user_custom_attributes onelogin_user_custom_attributes}
*/
export class UserCustomAttributes extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "onelogin_user_custom_attributes";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a UserCustomAttributes resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the UserCustomAttributes to import
  * @param importFromId The id of the existing UserCustomAttributes that should be imported. Refer to the {@link https://registry.terraform.io/providers/onelogin/onelogin/0.11.2/docs/resources/user_custom_attributes#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the UserCustomAttributes to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "onelogin_user_custom_attributes", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/onelogin/onelogin/0.11.2/docs/resources/user_custom_attributes onelogin_user_custom_attributes} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserCustomAttributesConfig
  */
  public constructor(scope: Construct, id: string, config: UserCustomAttributesConfig) {
    super(scope, id, {
      terraformResourceType: 'onelogin_user_custom_attributes',
      terraformGeneratorMetadata: {
        providerName: 'onelogin',
        providerVersion: '0.11.2'
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
    this._name = config.name;
    this._shortname = config.shortname;
    this._userId = config.userId;
    this._value = config.value;
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

  // shortname - computed: false, optional: false, required: true
  private _shortname?: string; 
  public get shortname() {
    return this.getStringAttribute('shortname');
  }
  public set shortname(value: string) {
    this._shortname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shortnameInput() {
    return this._shortname;
  }

  // user_id - computed: false, optional: true, required: false
  private _userId?: number; 
  public get userId() {
    return this.getNumberAttribute('user_id');
  }
  public set userId(value: number) {
    this._userId = value;
  }
  public resetUserId() {
    this._userId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      shortname: cdktf.stringToTerraform(this._shortname),
      user_id: cdktf.numberToTerraform(this._userId),
      value: cdktf.stringToTerraform(this._value),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shortname: {
        value: cdktf.stringToHclTerraform(this._shortname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_id: {
        value: cdktf.numberToHclTerraform(this._userId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      value: {
        value: cdktf.stringToHclTerraform(this._value),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
