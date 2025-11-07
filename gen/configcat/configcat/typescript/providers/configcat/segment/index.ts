// https://registry.terraform.io/providers/configcat/configcat/5.6.0/docs/resources/segment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SegmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * The [comparator](https://configcat.com/docs/advanced/targeting/#comparator) of the Segment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/configcat/configcat/5.6.0/docs/resources/segment#comparator Segment#comparator}
  */
  readonly comparator: string;
  /**
  * The [comparison attribute](https://configcat.com/docs/advanced/targeting/#attribute) of the Segment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/configcat/configcat/5.6.0/docs/resources/segment#comparison_attribute Segment#comparison_attribute}
  */
  readonly comparisonAttribute: string;
  /**
  * The [comparison value](https://configcat.com/docs/advanced/targeting/#comparison-value) of the Segment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/configcat/configcat/5.6.0/docs/resources/segment#comparison_value Segment#comparison_value}
  */
  readonly comparisonValue: string;
  /**
  * The description of the Segment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/configcat/configcat/5.6.0/docs/resources/segment#description Segment#description}
  */
  readonly description?: string;
  /**
  * The name of the Segment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/configcat/configcat/5.6.0/docs/resources/segment#name Segment#name}
  */
  readonly name: string;
  /**
  * The ID of the Product.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/configcat/configcat/5.6.0/docs/resources/segment#product_id Segment#product_id}
  */
  readonly productId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/configcat/configcat/5.6.0/docs/resources/segment configcat_segment}
*/
export class Segment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "configcat_segment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Segment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Segment to import
  * @param importFromId The id of the existing Segment that should be imported. Refer to the {@link https://registry.terraform.io/providers/configcat/configcat/5.6.0/docs/resources/segment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Segment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "configcat_segment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/configcat/configcat/5.6.0/docs/resources/segment configcat_segment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SegmentConfig
  */
  public constructor(scope: Construct, id: string, config: SegmentConfig) {
    super(scope, id, {
      terraformResourceType: 'configcat_segment',
      terraformGeneratorMetadata: {
        providerName: 'configcat',
        providerVersion: '5.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._comparator = config.comparator;
    this._comparisonAttribute = config.comparisonAttribute;
    this._comparisonValue = config.comparisonValue;
    this._description = config.description;
    this._name = config.name;
    this._productId = config.productId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // comparator - computed: false, optional: false, required: true
  private _comparator?: string; 
  public get comparator() {
    return this.getStringAttribute('comparator');
  }
  public set comparator(value: string) {
    this._comparator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparatorInput() {
    return this._comparator;
  }

  // comparison_attribute - computed: false, optional: false, required: true
  private _comparisonAttribute?: string; 
  public get comparisonAttribute() {
    return this.getStringAttribute('comparison_attribute');
  }
  public set comparisonAttribute(value: string) {
    this._comparisonAttribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonAttributeInput() {
    return this._comparisonAttribute;
  }

  // comparison_value - computed: false, optional: false, required: true
  private _comparisonValue?: string; 
  public get comparisonValue() {
    return this.getStringAttribute('comparison_value');
  }
  public set comparisonValue(value: string) {
    this._comparisonValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonValueInput() {
    return this._comparisonValue;
  }

  // description - computed: true, optional: true, required: false
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // product_id - computed: false, optional: false, required: true
  private _productId?: string; 
  public get productId() {
    return this.getStringAttribute('product_id');
  }
  public set productId(value: string) {
    this._productId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get productIdInput() {
    return this._productId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comparator: cdktf.stringToTerraform(this._comparator),
      comparison_attribute: cdktf.stringToTerraform(this._comparisonAttribute),
      comparison_value: cdktf.stringToTerraform(this._comparisonValue),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      product_id: cdktf.stringToTerraform(this._productId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      comparator: {
        value: cdktf.stringToHclTerraform(this._comparator),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comparison_attribute: {
        value: cdktf.stringToHclTerraform(this._comparisonAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comparison_value: {
        value: cdktf.stringToHclTerraform(this._comparisonValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      product_id: {
        value: cdktf.stringToHclTerraform(this._productId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
