// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_admin_profile_datamaskcustomfields
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemAdminProfileDatamaskcustomfieldsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_admin_profile_datamaskcustomfields#field_category SystemAdminProfileDatamaskcustomfields#field_category}
  */
  readonly fieldCategory?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_admin_profile_datamaskcustomfields#field_name SystemAdminProfileDatamaskcustomfields#field_name}
  */
  readonly fieldName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_admin_profile_datamaskcustomfields#field_status SystemAdminProfileDatamaskcustomfields#field_status}
  */
  readonly fieldStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_admin_profile_datamaskcustomfields#field_type SystemAdminProfileDatamaskcustomfields#field_type}
  */
  readonly fieldType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_admin_profile_datamaskcustomfields#id SystemAdminProfileDatamaskcustomfields#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_admin_profile_datamaskcustomfields#profile SystemAdminProfileDatamaskcustomfields#profile}
  */
  readonly profile: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_admin_profile_datamaskcustomfields fortimanager_system_admin_profile_datamaskcustomfields}
*/
export class SystemAdminProfileDatamaskcustomfields extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_system_admin_profile_datamaskcustomfields";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemAdminProfileDatamaskcustomfields resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemAdminProfileDatamaskcustomfields to import
  * @param importFromId The id of the existing SystemAdminProfileDatamaskcustomfields that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_admin_profile_datamaskcustomfields#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemAdminProfileDatamaskcustomfields to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_system_admin_profile_datamaskcustomfields", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_admin_profile_datamaskcustomfields fortimanager_system_admin_profile_datamaskcustomfields} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemAdminProfileDatamaskcustomfieldsConfig
  */
  public constructor(scope: Construct, id: string, config: SystemAdminProfileDatamaskcustomfieldsConfig) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_system_admin_profile_datamaskcustomfields',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.15.0',
        providerVersionConstraint: '1.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._fieldCategory = config.fieldCategory;
    this._fieldName = config.fieldName;
    this._fieldStatus = config.fieldStatus;
    this._fieldType = config.fieldType;
    this._id = config.id;
    this._profile = config.profile;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // field_category - computed: true, optional: true, required: false
  private _fieldCategory?: string[]; 
  public get fieldCategory() {
    return cdktf.Fn.tolist(this.getListAttribute('field_category'));
  }
  public set fieldCategory(value: string[]) {
    this._fieldCategory = value;
  }
  public resetFieldCategory() {
    this._fieldCategory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldCategoryInput() {
    return this._fieldCategory;
  }

  // field_name - computed: false, optional: true, required: false
  private _fieldName?: string; 
  public get fieldName() {
    return this.getStringAttribute('field_name');
  }
  public set fieldName(value: string) {
    this._fieldName = value;
  }
  public resetFieldName() {
    this._fieldName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldNameInput() {
    return this._fieldName;
  }

  // field_status - computed: true, optional: true, required: false
  private _fieldStatus?: string; 
  public get fieldStatus() {
    return this.getStringAttribute('field_status');
  }
  public set fieldStatus(value: string) {
    this._fieldStatus = value;
  }
  public resetFieldStatus() {
    this._fieldStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldStatusInput() {
    return this._fieldStatus;
  }

  // field_type - computed: true, optional: true, required: false
  private _fieldType?: string; 
  public get fieldType() {
    return this.getStringAttribute('field_type');
  }
  public set fieldType(value: string) {
    this._fieldType = value;
  }
  public resetFieldType() {
    this._fieldType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldTypeInput() {
    return this._fieldType;
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

  // profile - computed: false, optional: false, required: true
  private _profile?: string; 
  public get profile() {
    return this.getStringAttribute('profile');
  }
  public set profile(value: string) {
    this._profile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      field_category: cdktf.listMapper(cdktf.stringToTerraform, false)(this._fieldCategory),
      field_name: cdktf.stringToTerraform(this._fieldName),
      field_status: cdktf.stringToTerraform(this._fieldStatus),
      field_type: cdktf.stringToTerraform(this._fieldType),
      id: cdktf.stringToTerraform(this._id),
      profile: cdktf.stringToTerraform(this._profile),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      field_category: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._fieldCategory),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      field_name: {
        value: cdktf.stringToHclTerraform(this._fieldName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      field_status: {
        value: cdktf.stringToHclTerraform(this._fieldStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      field_type: {
        value: cdktf.stringToHclTerraform(this._fieldType),
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
      profile: {
        value: cdktf.stringToHclTerraform(this._profile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
