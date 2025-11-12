// https://registry.terraform.io/providers/lord-kyron/phpipam/1.6.2/docs/data-sources/subnets
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPhpipamSubnetsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lord-kyron/phpipam/1.6.2/docs/data-sources/subnets#custom_field_filter DataPhpipamSubnets#custom_field_filter}
  */
  readonly customFieldFilter?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lord-kyron/phpipam/1.6.2/docs/data-sources/subnets#description DataPhpipamSubnets#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lord-kyron/phpipam/1.6.2/docs/data-sources/subnets#description_match DataPhpipamSubnets#description_match}
  */
  readonly descriptionMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lord-kyron/phpipam/1.6.2/docs/data-sources/subnets#id DataPhpipamSubnets#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lord-kyron/phpipam/1.6.2/docs/data-sources/subnets#section_id DataPhpipamSubnets#section_id}
  */
  readonly sectionId: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/lord-kyron/phpipam/1.6.2/docs/data-sources/subnets phpipam_subnets}
*/
export class DataPhpipamSubnets extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "phpipam_subnets";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPhpipamSubnets resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPhpipamSubnets to import
  * @param importFromId The id of the existing DataPhpipamSubnets that should be imported. Refer to the {@link https://registry.terraform.io/providers/lord-kyron/phpipam/1.6.2/docs/data-sources/subnets#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPhpipamSubnets to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "phpipam_subnets", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/lord-kyron/phpipam/1.6.2/docs/data-sources/subnets phpipam_subnets} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPhpipamSubnetsConfig
  */
  public constructor(scope: Construct, id: string, config: DataPhpipamSubnetsConfig) {
    super(scope, id, {
      terraformResourceType: 'phpipam_subnets',
      terraformGeneratorMetadata: {
        providerName: 'phpipam',
        providerVersion: '1.6.2',
        providerVersionConstraint: '1.6.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._customFieldFilter = config.customFieldFilter;
    this._description = config.description;
    this._descriptionMatch = config.descriptionMatch;
    this._id = config.id;
    this._sectionId = config.sectionId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // custom_field_filter - computed: false, optional: true, required: false
  private _customFieldFilter?: { [key: string]: string }; 
  public get customFieldFilter() {
    return this.getStringMapAttribute('custom_field_filter');
  }
  public set customFieldFilter(value: { [key: string]: string }) {
    this._customFieldFilter = value;
  }
  public resetCustomFieldFilter() {
    this._customFieldFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customFieldFilterInput() {
    return this._customFieldFilter;
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

  // description_match - computed: false, optional: true, required: false
  private _descriptionMatch?: string; 
  public get descriptionMatch() {
    return this.getStringAttribute('description_match');
  }
  public set descriptionMatch(value: string) {
    this._descriptionMatch = value;
  }
  public resetDescriptionMatch() {
    this._descriptionMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionMatchInput() {
    return this._descriptionMatch;
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

  // section_id - computed: false, optional: false, required: true
  private _sectionId?: number; 
  public get sectionId() {
    return this.getNumberAttribute('section_id');
  }
  public set sectionId(value: number) {
    this._sectionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sectionIdInput() {
    return this._sectionId;
  }

  // subnet_ids - computed: true, optional: false, required: false
  public get subnetIds() {
    return this.getNumberListAttribute('subnet_ids');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      custom_field_filter: cdktf.hashMapper(cdktf.stringToTerraform)(this._customFieldFilter),
      description: cdktf.stringToTerraform(this._description),
      description_match: cdktf.stringToTerraform(this._descriptionMatch),
      id: cdktf.stringToTerraform(this._id),
      section_id: cdktf.numberToTerraform(this._sectionId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      custom_field_filter: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._customFieldFilter),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description_match: {
        value: cdktf.stringToHclTerraform(this._descriptionMatch),
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
      section_id: {
        value: cdktf.numberToHclTerraform(this._sectionId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
