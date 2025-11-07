// https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/data-sources/auto_tag_condition_year
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataRadarrAutoTagConditionYearConfig extends cdktf.TerraformMetaArguments {
  /**
  * Maximum Year.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/data-sources/auto_tag_condition_year#max DataRadarrAutoTagConditionYear#max}
  */
  readonly max: number;
  /**
  * Minimum Year.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/data-sources/auto_tag_condition_year#min DataRadarrAutoTagConditionYear#min}
  */
  readonly min: number;
  /**
  * Specification name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/data-sources/auto_tag_condition_year#name DataRadarrAutoTagConditionYear#name}
  */
  readonly name: string;
  /**
  * Negate flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/data-sources/auto_tag_condition_year#negate DataRadarrAutoTagConditionYear#negate}
  */
  readonly negate: boolean | cdktf.IResolvable;
  /**
  * Computed flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/data-sources/auto_tag_condition_year#required DataRadarrAutoTagConditionYear#required}
  */
  readonly required: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/data-sources/auto_tag_condition_year radarr_auto_tag_condition_year}
*/
export class DataRadarrAutoTagConditionYear extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "radarr_auto_tag_condition_year";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataRadarrAutoTagConditionYear resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataRadarrAutoTagConditionYear to import
  * @param importFromId The id of the existing DataRadarrAutoTagConditionYear that should be imported. Refer to the {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/data-sources/auto_tag_condition_year#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataRadarrAutoTagConditionYear to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "radarr_auto_tag_condition_year", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/data-sources/auto_tag_condition_year radarr_auto_tag_condition_year} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataRadarrAutoTagConditionYearConfig
  */
  public constructor(scope: Construct, id: string, config: DataRadarrAutoTagConditionYearConfig) {
    super(scope, id, {
      terraformResourceType: 'radarr_auto_tag_condition_year',
      terraformGeneratorMetadata: {
        providerName: 'radarr',
        providerVersion: '2.3.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._max = config.max;
    this._min = config.min;
    this._name = config.name;
    this._negate = config.negate;
    this._required = config.required;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // implementation - computed: true, optional: false, required: false
  public get implementation() {
    return this.getStringAttribute('implementation');
  }

  // max - computed: false, optional: false, required: true
  private _max?: number; 
  public get max() {
    return this.getNumberAttribute('max');
  }
  public set max(value: number) {
    this._max = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // min - computed: false, optional: false, required: true
  private _min?: number; 
  public get min() {
    return this.getNumberAttribute('min');
  }
  public set min(value: number) {
    this._min = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
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

  // negate - computed: false, optional: false, required: true
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // required - computed: false, optional: false, required: true
  private _required?: boolean | cdktf.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktf.IResolvable) {
    this._required = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      max: cdktf.numberToTerraform(this._max),
      min: cdktf.numberToTerraform(this._min),
      name: cdktf.stringToTerraform(this._name),
      negate: cdktf.booleanToTerraform(this._negate),
      required: cdktf.booleanToTerraform(this._required),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      max: {
        value: cdktf.numberToHclTerraform(this._max),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min: {
        value: cdktf.numberToHclTerraform(this._min),
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
      negate: {
        value: cdktf.booleanToHclTerraform(this._negate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      required: {
        value: cdktf.booleanToHclTerraform(this._required),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
