// https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/data-sources/tag
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSite24X7TagConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/data-sources/tag#id DataSite24X7Tag#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Tag color code.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/data-sources/tag#tag_color DataSite24X7Tag#tag_color}
  */
  readonly tagColor?: string;
  /**
  * Display Name for the Tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/data-sources/tag#tag_name DataSite24X7Tag#tag_name}
  */
  readonly tagName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/data-sources/tag#tag_name_regex DataSite24X7Tag#tag_name_regex}
  */
  readonly tagNameRegex: string;
  /**
  * Type of the Tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/data-sources/tag#tag_type DataSite24X7Tag#tag_type}
  */
  readonly tagType?: number;
  /**
  * Value for the Tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/data-sources/tag#tag_value DataSite24X7Tag#tag_value}
  */
  readonly tagValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/data-sources/tag#tag_value_regex DataSite24X7Tag#tag_value_regex}
  */
  readonly tagValueRegex?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/data-sources/tag site24x7_tag}
*/
export class DataSite24X7Tag extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "site24x7_tag";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSite24X7Tag resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSite24X7Tag to import
  * @param importFromId The id of the existing DataSite24X7Tag that should be imported. Refer to the {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/data-sources/tag#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSite24X7Tag to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "site24x7_tag", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/data-sources/tag site24x7_tag} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSite24X7TagConfig
  */
  public constructor(scope: Construct, id: string, config: DataSite24X7TagConfig) {
    super(scope, id, {
      terraformResourceType: 'site24x7_tag',
      terraformGeneratorMetadata: {
        providerName: 'site24x7',
        providerVersion: '2.0.3'
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
    this._tagColor = config.tagColor;
    this._tagName = config.tagName;
    this._tagNameRegex = config.tagNameRegex;
    this._tagType = config.tagType;
    this._tagValue = config.tagValue;
    this._tagValueRegex = config.tagValueRegex;
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

  // matching_ids - computed: true, optional: false, required: false
  public get matchingIds() {
    return this.getListAttribute('matching_ids');
  }

  // matching_ids_and_names - computed: true, optional: false, required: false
  public get matchingIdsAndNames() {
    return this.getListAttribute('matching_ids_and_names');
  }

  // tag_color - computed: true, optional: true, required: false
  private _tagColor?: string; 
  public get tagColor() {
    return this.getStringAttribute('tag_color');
  }
  public set tagColor(value: string) {
    this._tagColor = value;
  }
  public resetTagColor() {
    this._tagColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagColorInput() {
    return this._tagColor;
  }

  // tag_name - computed: true, optional: true, required: false
  private _tagName?: string; 
  public get tagName() {
    return this.getStringAttribute('tag_name');
  }
  public set tagName(value: string) {
    this._tagName = value;
  }
  public resetTagName() {
    this._tagName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagNameInput() {
    return this._tagName;
  }

  // tag_name_regex - computed: false, optional: false, required: true
  private _tagNameRegex?: string; 
  public get tagNameRegex() {
    return this.getStringAttribute('tag_name_regex');
  }
  public set tagNameRegex(value: string) {
    this._tagNameRegex = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagNameRegexInput() {
    return this._tagNameRegex;
  }

  // tag_type - computed: true, optional: true, required: false
  private _tagType?: number; 
  public get tagType() {
    return this.getNumberAttribute('tag_type');
  }
  public set tagType(value: number) {
    this._tagType = value;
  }
  public resetTagType() {
    this._tagType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagTypeInput() {
    return this._tagType;
  }

  // tag_value - computed: true, optional: true, required: false
  private _tagValue?: string; 
  public get tagValue() {
    return this.getStringAttribute('tag_value');
  }
  public set tagValue(value: string) {
    this._tagValue = value;
  }
  public resetTagValue() {
    this._tagValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagValueInput() {
    return this._tagValue;
  }

  // tag_value_regex - computed: false, optional: true, required: false
  private _tagValueRegex?: string; 
  public get tagValueRegex() {
    return this.getStringAttribute('tag_value_regex');
  }
  public set tagValueRegex(value: string) {
    this._tagValueRegex = value;
  }
  public resetTagValueRegex() {
    this._tagValueRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagValueRegexInput() {
    return this._tagValueRegex;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      tag_color: cdktf.stringToTerraform(this._tagColor),
      tag_name: cdktf.stringToTerraform(this._tagName),
      tag_name_regex: cdktf.stringToTerraform(this._tagNameRegex),
      tag_type: cdktf.numberToTerraform(this._tagType),
      tag_value: cdktf.stringToTerraform(this._tagValue),
      tag_value_regex: cdktf.stringToTerraform(this._tagValueRegex),
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
      tag_color: {
        value: cdktf.stringToHclTerraform(this._tagColor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tag_name: {
        value: cdktf.stringToHclTerraform(this._tagName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tag_name_regex: {
        value: cdktf.stringToHclTerraform(this._tagNameRegex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tag_type: {
        value: cdktf.numberToHclTerraform(this._tagType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tag_value: {
        value: cdktf.stringToHclTerraform(this._tagValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tag_value_regex: {
        value: cdktf.stringToHclTerraform(this._tagValueRegex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
