// https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/user_manager_attribute
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserManagerAttributeConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/user_manager_attribute#___path___ UserManagerAttribute#___path___}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/user_manager_attribute#id UserManagerAttribute#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The attribute's name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/user_manager_attribute#name UserManagerAttribute#name}
  */
  readonly name: string;
  /**
  * A set of `access-accept` and `access-challenge`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/user_manager_attribute#packet_types UserManagerAttribute#packet_types}
  */
  readonly packetTypes?: string[];
  /**
  * Attribute identification number from the specific vendor's attribute database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/user_manager_attribute#type_id UserManagerAttribute#type_id}
  */
  readonly typeId: number;
  /**
  * The attribute's value type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/user_manager_attribute#value_type UserManagerAttribute#value_type}
  */
  readonly valueType?: string;
  /**
  * IANA allocated a specific enterprise identification number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/user_manager_attribute#vendor_id UserManagerAttribute#vendor_id}
  */
  readonly vendorId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/user_manager_attribute routeros_user_manager_attribute}
*/
export class UserManagerAttribute extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_user_manager_attribute";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a UserManagerAttribute resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the UserManagerAttribute to import
  * @param importFromId The id of the existing UserManagerAttribute that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/user_manager_attribute#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the UserManagerAttribute to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_user_manager_attribute", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/user_manager_attribute routeros_user_manager_attribute} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserManagerAttributeConfig
  */
  public constructor(scope: Construct, id: string, config: UserManagerAttributeConfig) {
    super(scope, id, {
      terraformResourceType: 'routeros_user_manager_attribute',
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
    this._packetTypes = config.packetTypes;
    this._typeId = config.typeId;
    this._valueType = config.valueType;
    this._vendorId = config.vendorId;
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

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getBooleanAttribute('default');
  }

  // default_name - computed: true, optional: false, required: false
  public get defaultName() {
    return this.getStringAttribute('default_name');
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

  // packet_types - computed: false, optional: true, required: false
  private _packetTypes?: string[]; 
  public get packetTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('packet_types'));
  }
  public set packetTypes(value: string[]) {
    this._packetTypes = value;
  }
  public resetPacketTypes() {
    this._packetTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetTypesInput() {
    return this._packetTypes;
  }

  // standard_name - computed: true, optional: false, required: false
  public get standardName() {
    return this.getStringAttribute('standard_name');
  }

  // type_id - computed: false, optional: false, required: true
  private _typeId?: number; 
  public get typeId() {
    return this.getNumberAttribute('type_id');
  }
  public set typeId(value: number) {
    this._typeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeIdInput() {
    return this._typeId;
  }

  // value_type - computed: false, optional: true, required: false
  private _valueType?: string; 
  public get valueType() {
    return this.getStringAttribute('value_type');
  }
  public set valueType(value: string) {
    this._valueType = value;
  }
  public resetValueType() {
    this._valueType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueTypeInput() {
    return this._valueType;
  }

  // vendor_id - computed: false, optional: true, required: false
  private _vendorId?: string; 
  public get vendorId() {
    return this.getStringAttribute('vendor_id');
  }
  public set vendorId(value: string) {
    this._vendorId = value;
  }
  public resetVendorId() {
    this._vendorId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vendorIdInput() {
    return this._vendorId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ___path___: cdktf.stringToTerraform(this._path),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      packet_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._packetTypes),
      type_id: cdktf.numberToTerraform(this._typeId),
      value_type: cdktf.stringToTerraform(this._valueType),
      vendor_id: cdktf.stringToTerraform(this._vendorId),
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
      packet_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._packetTypes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      type_id: {
        value: cdktf.numberToHclTerraform(this._typeId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      value_type: {
        value: cdktf.stringToHclTerraform(this._valueType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vendor_id: {
        value: cdktf.stringToHclTerraform(this._vendorId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
