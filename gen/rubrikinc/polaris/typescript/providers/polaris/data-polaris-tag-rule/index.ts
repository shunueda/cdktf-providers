// https://registry.terraform.io/providers/rubrikinc/polaris/1.2.1/docs/data-sources/tag_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPolarisTagRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Tag rule ID (UUID).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.2.1/docs/data-sources/tag_rule#id DataPolarisTagRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Tag rule name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.2.1/docs/data-sources/tag_rule#name DataPolarisTagRule#name}
  */
  readonly name?: string;
  /**
  * If true, all tag values are matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.2.1/docs/data-sources/tag_rule#tag_all_values DataPolarisTagRule#tag_all_values}
  */
  readonly tagAllValues?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.2.1/docs/data-sources/tag_rule polaris_tag_rule}
*/
export class DataPolarisTagRule extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "polaris_tag_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPolarisTagRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPolarisTagRule to import
  * @param importFromId The id of the existing DataPolarisTagRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.2.1/docs/data-sources/tag_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPolarisTagRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "polaris_tag_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.2.1/docs/data-sources/tag_rule polaris_tag_rule} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPolarisTagRuleConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataPolarisTagRuleConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'polaris_tag_rule',
      terraformGeneratorMetadata: {
        providerName: 'polaris',
        providerVersion: '1.2.1'
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
    this._tagAllValues = config.tagAllValues;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cloud_account_ids - computed: true, optional: false, required: false
  public get cloudAccountIds() {
    return cdktf.Fn.tolist(this.getListAttribute('cloud_account_ids'));
  }

  // id - computed: false, optional: true, required: false
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

  // name - computed: false, optional: true, required: false
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

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // tag_all_values - computed: true, optional: true, required: false
  private _tagAllValues?: boolean | cdktf.IResolvable; 
  public get tagAllValues() {
    return this.getBooleanAttribute('tag_all_values');
  }
  public set tagAllValues(value: boolean | cdktf.IResolvable) {
    this._tagAllValues = value;
  }
  public resetTagAllValues() {
    this._tagAllValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagAllValuesInput() {
    return this._tagAllValues;
  }

  // tag_key - computed: true, optional: false, required: false
  public get tagKey() {
    return this.getStringAttribute('tag_key');
  }

  // tag_value - computed: true, optional: false, required: false
  public get tagValue() {
    return this.getStringAttribute('tag_value');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      tag_all_values: cdktf.booleanToTerraform(this._tagAllValues),
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
      tag_all_values: {
        value: cdktf.booleanToHclTerraform(this._tagAllValues),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
