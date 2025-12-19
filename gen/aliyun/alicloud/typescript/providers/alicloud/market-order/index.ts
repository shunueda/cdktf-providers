// https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/market_order
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MarketOrderConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/market_order#components MarketOrder#components}
  */
  readonly components?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/market_order#coupon_id MarketOrder#coupon_id}
  */
  readonly couponId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/market_order#duration MarketOrder#duration}
  */
  readonly duration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/market_order#id MarketOrder#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/market_order#package_version MarketOrder#package_version}
  */
  readonly packageVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/market_order#pay_type MarketOrder#pay_type}
  */
  readonly payType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/market_order#pricing_cycle MarketOrder#pricing_cycle}
  */
  readonly pricingCycle: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/market_order#product_code MarketOrder#product_code}
  */
  readonly productCode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/market_order#quantity MarketOrder#quantity}
  */
  readonly quantity?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/market_order alicloud_market_order}
*/
export class MarketOrder extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_market_order";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MarketOrder resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MarketOrder to import
  * @param importFromId The id of the existing MarketOrder that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/market_order#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MarketOrder to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_market_order", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/market_order alicloud_market_order} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MarketOrderConfig
  */
  public constructor(scope: Construct, id: string, config: MarketOrderConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_market_order',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.266.0',
        providerVersionConstraint: '1.266.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._components = config.components;
    this._couponId = config.couponId;
    this._duration = config.duration;
    this._id = config.id;
    this._packageVersion = config.packageVersion;
    this._payType = config.payType;
    this._pricingCycle = config.pricingCycle;
    this._productCode = config.productCode;
    this._quantity = config.quantity;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // components - computed: false, optional: true, required: false
  private _components?: { [key: string]: string }; 
  public get components() {
    return this.getStringMapAttribute('components');
  }
  public set components(value: { [key: string]: string }) {
    this._components = value;
  }
  public resetComponents() {
    this._components = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get componentsInput() {
    return this._components;
  }

  // coupon_id - computed: false, optional: true, required: false
  private _couponId?: string; 
  public get couponId() {
    return this.getStringAttribute('coupon_id');
  }
  public set couponId(value: string) {
    this._couponId = value;
  }
  public resetCouponId() {
    this._couponId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get couponIdInput() {
    return this._couponId;
  }

  // duration - computed: false, optional: true, required: false
  private _duration?: number; 
  public get duration() {
    return this.getNumberAttribute('duration');
  }
  public set duration(value: number) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
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

  // package_version - computed: false, optional: false, required: true
  private _packageVersion?: string; 
  public get packageVersion() {
    return this.getStringAttribute('package_version');
  }
  public set packageVersion(value: string) {
    this._packageVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get packageVersionInput() {
    return this._packageVersion;
  }

  // pay_type - computed: false, optional: true, required: false
  private _payType?: string; 
  public get payType() {
    return this.getStringAttribute('pay_type');
  }
  public set payType(value: string) {
    this._payType = value;
  }
  public resetPayType() {
    this._payType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payTypeInput() {
    return this._payType;
  }

  // pricing_cycle - computed: false, optional: false, required: true
  private _pricingCycle?: string; 
  public get pricingCycle() {
    return this.getStringAttribute('pricing_cycle');
  }
  public set pricingCycle(value: string) {
    this._pricingCycle = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pricingCycleInput() {
    return this._pricingCycle;
  }

  // product_code - computed: false, optional: false, required: true
  private _productCode?: string; 
  public get productCode() {
    return this.getStringAttribute('product_code');
  }
  public set productCode(value: string) {
    this._productCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get productCodeInput() {
    return this._productCode;
  }

  // quantity - computed: false, optional: true, required: false
  private _quantity?: number; 
  public get quantity() {
    return this.getNumberAttribute('quantity');
  }
  public set quantity(value: number) {
    this._quantity = value;
  }
  public resetQuantity() {
    this._quantity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quantityInput() {
    return this._quantity;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      components: cdktf.hashMapper(cdktf.stringToTerraform)(this._components),
      coupon_id: cdktf.stringToTerraform(this._couponId),
      duration: cdktf.numberToTerraform(this._duration),
      id: cdktf.stringToTerraform(this._id),
      package_version: cdktf.stringToTerraform(this._packageVersion),
      pay_type: cdktf.stringToTerraform(this._payType),
      pricing_cycle: cdktf.stringToTerraform(this._pricingCycle),
      product_code: cdktf.stringToTerraform(this._productCode),
      quantity: cdktf.numberToTerraform(this._quantity),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      components: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._components),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      coupon_id: {
        value: cdktf.stringToHclTerraform(this._couponId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      duration: {
        value: cdktf.numberToHclTerraform(this._duration),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      package_version: {
        value: cdktf.stringToHclTerraform(this._packageVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pay_type: {
        value: cdktf.stringToHclTerraform(this._payType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pricing_cycle: {
        value: cdktf.stringToHclTerraform(this._pricingCycle),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      product_code: {
        value: cdktf.stringToHclTerraform(this._productCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      quantity: {
        value: cdktf.numberToHclTerraform(this._quantity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
