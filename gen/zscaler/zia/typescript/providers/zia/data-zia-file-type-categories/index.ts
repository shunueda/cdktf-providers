// https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/data-sources/file_type_categories
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataZiaFileTypeCategoriesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enum values to filter file types for specific policy categories. Valid values: ZSCALERDLP, EXTERNALDLP, FILETYPECATEGORYFORFILETYPECONTROL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/data-sources/file_type_categories#enums DataZiaFileTypeCategories#enums}
  */
  readonly enums?: string[];
  /**
  * A Boolean value specifying whether custom file types must be excluded from the list or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/data-sources/file_type_categories#exclude_custom_file_types DataZiaFileTypeCategories#exclude_custom_file_types}
  */
  readonly excludeCustomFileTypes?: boolean | cdktf.IResolvable;
  /**
  * File type ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/data-sources/file_type_categories#id DataZiaFileTypeCategories#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * File type description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/data-sources/file_type_categories#name DataZiaFileTypeCategories#name}
  */
  readonly name?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/data-sources/file_type_categories zia_file_type_categories}
*/
export class DataZiaFileTypeCategories extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zia_file_type_categories";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataZiaFileTypeCategories resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataZiaFileTypeCategories to import
  * @param importFromId The id of the existing DataZiaFileTypeCategories that should be imported. Refer to the {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/data-sources/file_type_categories#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataZiaFileTypeCategories to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zia_file_type_categories", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/data-sources/file_type_categories zia_file_type_categories} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataZiaFileTypeCategoriesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataZiaFileTypeCategoriesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'zia_file_type_categories',
      terraformGeneratorMetadata: {
        providerName: 'zia',
        providerVersion: '4.6.3',
        providerVersionConstraint: '4.6.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enums = config.enums;
    this._excludeCustomFileTypes = config.excludeCustomFileTypes;
    this._id = config.id;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enums - computed: false, optional: true, required: false
  private _enums?: string[]; 
  public get enums() {
    return this.getListAttribute('enums');
  }
  public set enums(value: string[]) {
    this._enums = value;
  }
  public resetEnums() {
    this._enums = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enumsInput() {
    return this._enums;
  }

  // exclude_custom_file_types - computed: false, optional: true, required: false
  private _excludeCustomFileTypes?: boolean | cdktf.IResolvable; 
  public get excludeCustomFileTypes() {
    return this.getBooleanAttribute('exclude_custom_file_types');
  }
  public set excludeCustomFileTypes(value: boolean | cdktf.IResolvable) {
    this._excludeCustomFileTypes = value;
  }
  public resetExcludeCustomFileTypes() {
    this._excludeCustomFileTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeCustomFileTypesInput() {
    return this._excludeCustomFileTypes;
  }

  // id - computed: true, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // parent - computed: true, optional: false, required: false
  public get parent() {
    return this.getStringAttribute('parent');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enums: cdktf.listMapper(cdktf.stringToTerraform, false)(this._enums),
      exclude_custom_file_types: cdktf.booleanToTerraform(this._excludeCustomFileTypes),
      id: cdktf.numberToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enums: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._enums),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      exclude_custom_file_types: {
        value: cdktf.booleanToHclTerraform(this._excludeCustomFileTypes),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.numberToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
