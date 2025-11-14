// https://registry.terraform.io/providers/lukasaron/stripe/3.4.1/docs/resources/product_feature
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProductFeatureConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the Entitlements Feature the product will be attached to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.1/docs/resources/product_feature#entitlements_feature ProductFeature#entitlements_feature}
  */
  readonly entitlementsFeature: string;
  /**
  * The ID of the product that this Entitlements Feature will be attached to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.1/docs/resources/product_feature#product ProductFeature#product}
  */
  readonly product: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.1/docs/resources/product_feature stripe_product_feature}
*/
export class ProductFeature extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "stripe_product_feature";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProductFeature resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProductFeature to import
  * @param importFromId The id of the existing ProductFeature that should be imported. Refer to the {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.1/docs/resources/product_feature#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProductFeature to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "stripe_product_feature", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/lukasaron/stripe/3.4.1/docs/resources/product_feature stripe_product_feature} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProductFeatureConfig
  */
  public constructor(scope: Construct, id: string, config: ProductFeatureConfig) {
    super(scope, id, {
      terraformResourceType: 'stripe_product_feature',
      terraformGeneratorMetadata: {
        providerName: 'stripe',
        providerVersion: '3.4.1',
        providerVersionConstraint: '3.4.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._entitlementsFeature = config.entitlementsFeature;
    this._product = config.product;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // entitlements_feature - computed: false, optional: false, required: true
  private _entitlementsFeature?: string; 
  public get entitlementsFeature() {
    return this.getStringAttribute('entitlements_feature');
  }
  public set entitlementsFeature(value: string) {
    this._entitlementsFeature = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entitlementsFeatureInput() {
    return this._entitlementsFeature;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // livemode - computed: true, optional: false, required: false
  public get livemode() {
    return this.getBooleanAttribute('livemode');
  }

  // object - computed: true, optional: false, required: false
  public get object() {
    return this.getStringAttribute('object');
  }

  // product - computed: false, optional: false, required: true
  private _product?: string; 
  public get product() {
    return this.getStringAttribute('product');
  }
  public set product(value: string) {
    this._product = value;
  }
  // Temporarily expose input value. Use with caution.
  public get productInput() {
    return this._product;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      entitlements_feature: cdktf.stringToTerraform(this._entitlementsFeature),
      product: cdktf.stringToTerraform(this._product),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      entitlements_feature: {
        value: cdktf.stringToHclTerraform(this._entitlementsFeature),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      product: {
        value: cdktf.stringToHclTerraform(this._product),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
