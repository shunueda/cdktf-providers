// https://registry.terraform.io/providers/lukasaron/stripe/3.4.0/docs/resources/product
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProductConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether the product is currently available for purchase. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.0/docs/resources/product#active Product#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
  /**
  * The product’s description, meant to be displayable to the customer. Use this field to optionally store a long form explanation of the product being sold for your own rendering purposes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.0/docs/resources/product#description Product#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.0/docs/resources/product#id Product#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A list of up to 8 URLs of images for this product, meant to be displayable to the customer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.0/docs/resources/product#images Product#images}
  */
  readonly images?: string[];
  /**
  * A list of up to 15 marketing features for this product. These are displayed in pricing tables.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.0/docs/resources/product#marketing_features Product#marketing_features}
  */
  readonly marketingFeatures?: string[];
  /**
  * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.0/docs/resources/product#metadata Product#metadata}
  */
  readonly metadata?: { [key: string]: string };
  /**
  * The product’s name, meant to be displayable to the customer. Whenever this product is sold via a subscription, name will show up on associated invoice line item descriptions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.0/docs/resources/product#name Product#name}
  */
  readonly name: string;
  /**
  * The dimensions of this product for shipping purposes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.0/docs/resources/product#package_dimensions Product#package_dimensions}
  */
  readonly packageDimensions?: { [key: string]: number };
  /**
  * Unique identifier for the object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.0/docs/resources/product#product_id Product#product_id}
  */
  readonly productId?: string;
  /**
  * Whether this product is shipped (i.e., physical goods).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.0/docs/resources/product#shippable Product#shippable}
  */
  readonly shippable?: boolean | cdktf.IResolvable;
  /**
  * An arbitrary string to be displayed on your customer’s credit card or bank statement. While most banks display this information consistently, some may display it incorrectly or not at all. This may be up to 22 characters. The statement description may not include <, >, \, ", ’ characters, and will appear on your customer’s statement in capital letters. Non-ASCII characters are automatically stripped. It must contain at least one letter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.0/docs/resources/product#statement_descriptor Product#statement_descriptor}
  */
  readonly statementDescriptor?: string;
  /**
  * A tax code ID. Supported values are listed in the TaxCode resource and at https://stripe.com/docs/tax/tax-categories.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.0/docs/resources/product#tax_code Product#tax_code}
  */
  readonly taxCode?: string;
  /**
  * A label that represents units of this product in Stripe and on customers’ receipts and invoices. When set, this will be included in associated invoice line item descriptions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.0/docs/resources/product#unit_label Product#unit_label}
  */
  readonly unitLabel?: string;
  /**
  * A URL of a publicly-accessible webpage for this product.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.0/docs/resources/product#url Product#url}
  */
  readonly url?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.0/docs/resources/product stripe_product}
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
  * @param importFromId The id of the existing Product that should be imported. Refer to the {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.0/docs/resources/product#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Product to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "stripe_product", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.0/docs/resources/product stripe_product} Resource
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
        providerVersion: '3.4.0'
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
    this._description = config.description;
    this._id = config.id;
    this._images = config.images;
    this._marketingFeatures = config.marketingFeatures;
    this._metadata = config.metadata;
    this._name = config.name;
    this._packageDimensions = config.packageDimensions;
    this._productId = config.productId;
    this._shippable = config.shippable;
    this._statementDescriptor = config.statementDescriptor;
    this._taxCode = config.taxCode;
    this._unitLabel = config.unitLabel;
    this._url = config.url;
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

  // images - computed: false, optional: true, required: false
  private _images?: string[]; 
  public get images() {
    return this.getListAttribute('images');
  }
  public set images(value: string[]) {
    this._images = value;
  }
  public resetImages() {
    this._images = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagesInput() {
    return this._images;
  }

  // marketing_features - computed: false, optional: true, required: false
  private _marketingFeatures?: string[]; 
  public get marketingFeatures() {
    return this.getListAttribute('marketing_features');
  }
  public set marketingFeatures(value: string[]) {
    this._marketingFeatures = value;
  }
  public resetMarketingFeatures() {
    this._marketingFeatures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get marketingFeaturesInput() {
    return this._marketingFeatures;
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

  // package_dimensions - computed: false, optional: true, required: false
  private _packageDimensions?: { [key: string]: number }; 
  public get packageDimensions() {
    return this.getNumberMapAttribute('package_dimensions');
  }
  public set packageDimensions(value: { [key: string]: number }) {
    this._packageDimensions = value;
  }
  public resetPackageDimensions() {
    this._packageDimensions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packageDimensionsInput() {
    return this._packageDimensions;
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

  // shippable - computed: false, optional: true, required: false
  private _shippable?: boolean | cdktf.IResolvable; 
  public get shippable() {
    return this.getBooleanAttribute('shippable');
  }
  public set shippable(value: boolean | cdktf.IResolvable) {
    this._shippable = value;
  }
  public resetShippable() {
    this._shippable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shippableInput() {
    return this._shippable;
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

  // tax_code - computed: false, optional: true, required: false
  private _taxCode?: string; 
  public get taxCode() {
    return this.getStringAttribute('tax_code');
  }
  public set taxCode(value: string) {
    this._taxCode = value;
  }
  public resetTaxCode() {
    this._taxCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taxCodeInput() {
    return this._taxCode;
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

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      active: cdktf.booleanToTerraform(this._active),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      images: cdktf.listMapper(cdktf.stringToTerraform, false)(this._images),
      marketing_features: cdktf.listMapper(cdktf.stringToTerraform, false)(this._marketingFeatures),
      metadata: cdktf.hashMapper(cdktf.stringToTerraform)(this._metadata),
      name: cdktf.stringToTerraform(this._name),
      package_dimensions: cdktf.hashMapper(cdktf.numberToTerraform)(this._packageDimensions),
      product_id: cdktf.stringToTerraform(this._productId),
      shippable: cdktf.booleanToTerraform(this._shippable),
      statement_descriptor: cdktf.stringToTerraform(this._statementDescriptor),
      tax_code: cdktf.stringToTerraform(this._taxCode),
      unit_label: cdktf.stringToTerraform(this._unitLabel),
      url: cdktf.stringToTerraform(this._url),
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
      images: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._images),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      marketing_features: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._marketingFeatures),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
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
      package_dimensions: {
        value: cdktf.hashMapperHcl(cdktf.numberToHclTerraform)(this._packageDimensions),
        isBlock: false,
        type: "map",
        storageClassType: "numberMap",
      },
      product_id: {
        value: cdktf.stringToHclTerraform(this._productId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shippable: {
        value: cdktf.booleanToHclTerraform(this._shippable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      statement_descriptor: {
        value: cdktf.stringToHclTerraform(this._statementDescriptor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tax_code: {
        value: cdktf.stringToHclTerraform(this._taxCode),
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
      url: {
        value: cdktf.stringToHclTerraform(this._url),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
