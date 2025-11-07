// https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/data-sources/synthetic_location
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataInstanaSyntheticLocationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The description of the Synthetic location
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/data-sources/synthetic_location#description DataInstanaSyntheticLocation#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/data-sources/synthetic_location#id DataInstanaSyntheticLocation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Friendly name of the Synthetic Location
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/data-sources/synthetic_location#label DataInstanaSyntheticLocation#label}
  */
  readonly label?: string;
  /**
  * Indicates if the location is public or private
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/data-sources/synthetic_location#location_type DataInstanaSyntheticLocation#location_type}
  */
  readonly locationType?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/data-sources/synthetic_location instana_synthetic_location}
*/
export class DataInstanaSyntheticLocation extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "instana_synthetic_location";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataInstanaSyntheticLocation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataInstanaSyntheticLocation to import
  * @param importFromId The id of the existing DataInstanaSyntheticLocation that should be imported. Refer to the {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/data-sources/synthetic_location#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataInstanaSyntheticLocation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "instana_synthetic_location", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/data-sources/synthetic_location instana_synthetic_location} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataInstanaSyntheticLocationConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataInstanaSyntheticLocationConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'instana_synthetic_location',
      terraformGeneratorMetadata: {
        providerName: 'instana',
        providerVersion: '3.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._id = config.id;
    this._label = config.label;
    this._locationType = config.locationType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // label - computed: false, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // location_type - computed: false, optional: true, required: false
  private _locationType?: string; 
  public get locationType() {
    return this.getStringAttribute('location_type');
  }
  public set locationType(value: string) {
    this._locationType = value;
  }
  public resetLocationType() {
    this._locationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationTypeInput() {
    return this._locationType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      label: cdktf.stringToTerraform(this._label),
      location_type: cdktf.stringToTerraform(this._locationType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      label: {
        value: cdktf.stringToHclTerraform(this._label),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      location_type: {
        value: cdktf.stringToHclTerraform(this._locationType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
