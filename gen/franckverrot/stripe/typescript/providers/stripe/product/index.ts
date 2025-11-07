// https://registry.terraform.io/providers/franckverrot/stripe/1.9.0/docs/resources/product
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProductConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/franckverrot/stripe/1.9.0/docs/resources/product#active Product#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/franckverrot/stripe/1.9.0/docs/resources/product#attributes Product#attributes}
  */
  readonly attributes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/franckverrot/stripe/1.9.0/docs/resources/product#id Product#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/franckverrot/stripe/1.9.0/docs/resources/product#metadata Product#metadata}
  */
  readonly metadata?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/franckverrot/stripe/1.9.0/docs/resources/product#name Product#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/franckverrot/stripe/1.9.0/docs/resources/product#product_id Product#product_id}
  */
  readonly productId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/franckverrot/stripe/1.9.0/docs/resources/product#statement_descriptor Product#statement_descriptor}
  */
  readonly statementDescriptor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/franckverrot/stripe/1.9.0/docs/resources/product#type Product#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/franckverrot/stripe/1.9.0/docs/resources/product#unit_label Product#unit_label}
  */
  readonly unitLabel?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/franckverrot/stripe/1.9.0/docs/resources/product stripe_product}
*/
export class Product extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "stripe_product";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Product resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Product to import
  * @param importFromId The id of the existing Product that should be imported. Refer to the {@link https://registry.terraform.io/providers/franckverrot/stripe/1.9.0/docs/resources/product#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Product to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "stripe_product", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/franckverrot/stripe/1.9.0/docs/resources/product stripe_product} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProductConfig
  */
  public constructor(scope: Construct, id: string, config: ProductConfig) {
    super(scope, id, {
      terraformResourceType: 'stripe_product',
      terraformGeneratorMetadata: {
        providerName: 'stripe',
        providerVersion: '1.9.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._active = config.active;
    this._attributes = config.attributes;
    this._id = config.id;
    this._metadata = config.metadata;
    this._name = config.name;
    this._productId = config.productId;
    this._statementDescriptor = config.statementDescriptor;
    this._type = config.type;
    this._unitLabel = config.unitLabel;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active - computed: false, optional: true, required: false
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  public resetActive() {
    this._active = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
  }

  // attributes - computed: false, optional: true, required: false
  private _attributes?: string[]; 
  public get attributes() {
    return this.getListAttribute('attributes');
  }
  public set attributes(value: string[]) {
    this._attributes = value;
  }
  public resetAttributes() {
    this._attributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes;
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

  // metadata - computed: false, optional: true, required: false
  private _metadata?: { [key: string]: string }; 
  public get metadata() {
    return this.getStringMapAttribute('metadata');
  }
  public set metadata(value: { [key: string]: string }) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
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

  // product_id - computed: true, optional: true, required: false
  private _productId?: string; 
  public get productId() {
    return this.getStringAttribute('product_id');
  }
  public set productId(value: string) {
    this._productId = value;
  }
  public resetProductId() {
    this._productId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productIdInput() {
    return this._productId;
  }

  // statement_descriptor - computed: false, optional: true, required: false
  private _statementDescriptor?: string; 
  public get statementDescriptor() {
    return this.getStringAttribute('statement_descriptor');
  }
  public set statementDescriptor(value: string) {
    this._statementDescriptor = value;
  }
  public resetStatementDescriptor() {
    this._statementDescriptor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statementDescriptorInput() {
    return this._statementDescriptor;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unit_label - computed: false, optional: true, required: false
  private _unitLabel?: string; 
  public get unitLabel() {
    return this.getStringAttribute('unit_label');
  }
  public set unitLabel(value: string) {
    this._unitLabel = value;
  }
  public resetUnitLabel() {
    this._unitLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitLabelInput() {
    return this._unitLabel;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      active: cdktf.booleanToTerraform(this._active),
      attributes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._attributes),
      id: cdktf.stringToTerraform(this._id),
      metadata: cdktf.hashMapper(cdktf.stringToTerraform)(this._metadata),
      name: cdktf.stringToTerraform(this._name),
      product_id: cdktf.stringToTerraform(this._productId),
      statement_descriptor: cdktf.stringToTerraform(this._statementDescriptor),
      type: cdktf.stringToTerraform(this._type),
      unit_label: cdktf.stringToTerraform(this._unitLabel),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      active: {
        value: cdktf.booleanToHclTerraform(this._active),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      attributes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._attributes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metadata: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._metadata),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
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
      statement_descriptor: {
        value: cdktf.stringToHclTerraform(this._statementDescriptor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unit_label: {
        value: cdktf.stringToHclTerraform(this._unitLabel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
