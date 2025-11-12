// https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/order_cart_product_options_plan
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOvhOrderCartProductOptionsPlanConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/order_cart_product_options_plan#cart_id DataOvhOrderCartProductOptionsPlan#cart_id}
  */
  readonly cartId: string;
  /**
  * Catalog name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/order_cart_product_options_plan#catalog_name DataOvhOrderCartProductOptionsPlan#catalog_name}
  */
  readonly catalogName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/order_cart_product_options_plan#id DataOvhOrderCartProductOptionsPlan#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/order_cart_product_options_plan#options_plan_code DataOvhOrderCartProductOptionsPlan#options_plan_code}
  */
  readonly optionsPlanCode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/order_cart_product_options_plan#plan_code DataOvhOrderCartProductOptionsPlan#plan_code}
  */
  readonly planCode: string;
  /**
  * Capacity of the pricing (type of pricing)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/order_cart_product_options_plan#price_capacity DataOvhOrderCartProductOptionsPlan#price_capacity}
  */
  readonly priceCapacity: string;
  /**
  * Product
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/order_cart_product_options_plan#product DataOvhOrderCartProductOptionsPlan#product}
  */
  readonly product: string;
}
export interface DataOvhOrderCartProductOptionsPlanPricesPrice {
}

export function dataOvhOrderCartProductOptionsPlanPricesPriceToTerraform(struct?: DataOvhOrderCartProductOptionsPlanPricesPrice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOvhOrderCartProductOptionsPlanPricesPriceToHclTerraform(struct?: DataOvhOrderCartProductOptionsPlanPricesPrice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOvhOrderCartProductOptionsPlanPricesPriceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOvhOrderCartProductOptionsPlanPricesPrice | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOvhOrderCartProductOptionsPlanPricesPrice | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // currency_code - computed: true, optional: false, required: false
  public get currencyCode() {
    return this.getStringAttribute('currency_code');
  }

  // text - computed: true, optional: false, required: false
  public get text() {
    return this.getStringAttribute('text');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}

export class DataOvhOrderCartProductOptionsPlanPricesPriceList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataOvhOrderCartProductOptionsPlanPricesPriceOutputReference {
    return new DataOvhOrderCartProductOptionsPlanPricesPriceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOvhOrderCartProductOptionsPlanPrices {
}

export function dataOvhOrderCartProductOptionsPlanPricesToTerraform(struct?: DataOvhOrderCartProductOptionsPlanPrices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOvhOrderCartProductOptionsPlanPricesToHclTerraform(struct?: DataOvhOrderCartProductOptionsPlanPrices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOvhOrderCartProductOptionsPlanPricesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOvhOrderCartProductOptionsPlanPrices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOvhOrderCartProductOptionsPlanPrices | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // capacities - computed: true, optional: false, required: false
  public get capacities() {
    return this.getListAttribute('capacities');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // duration - computed: true, optional: false, required: false
  public get duration() {
    return this.getStringAttribute('duration');
  }

  // interval - computed: true, optional: false, required: false
  public get interval() {
    return this.getNumberAttribute('interval');
  }

  // maximum_quantity - computed: true, optional: false, required: false
  public get maximumQuantity() {
    return this.getNumberAttribute('maximum_quantity');
  }

  // maximum_repeat - computed: true, optional: false, required: false
  public get maximumRepeat() {
    return this.getNumberAttribute('maximum_repeat');
  }

  // minimum_quantity - computed: true, optional: false, required: false
  public get minimumQuantity() {
    return this.getNumberAttribute('minimum_quantity');
  }

  // minimum_repeat - computed: true, optional: false, required: false
  public get minimumRepeat() {
    return this.getNumberAttribute('minimum_repeat');
  }

  // price - computed: true, optional: false, required: false
  private _price = new DataOvhOrderCartProductOptionsPlanPricesPriceList(this, "price", false);
  public get price() {
    return this._price;
  }

  // price_in_ucents - computed: true, optional: false, required: false
  public get priceInUcents() {
    return this.getNumberAttribute('price_in_ucents');
  }

  // pricing_mode - computed: true, optional: false, required: false
  public get pricingMode() {
    return this.getStringAttribute('pricing_mode');
  }

  // pricing_type - computed: true, optional: false, required: false
  public get pricingType() {
    return this.getStringAttribute('pricing_type');
  }
}

export class DataOvhOrderCartProductOptionsPlanPricesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataOvhOrderCartProductOptionsPlanPricesOutputReference {
    return new DataOvhOrderCartProductOptionsPlanPricesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOvhOrderCartProductOptionsPlanSelectedPricePrice {
}

export function dataOvhOrderCartProductOptionsPlanSelectedPricePriceToTerraform(struct?: DataOvhOrderCartProductOptionsPlanSelectedPricePrice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOvhOrderCartProductOptionsPlanSelectedPricePriceToHclTerraform(struct?: DataOvhOrderCartProductOptionsPlanSelectedPricePrice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOvhOrderCartProductOptionsPlanSelectedPricePriceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOvhOrderCartProductOptionsPlanSelectedPricePrice | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOvhOrderCartProductOptionsPlanSelectedPricePrice | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // currency_code - computed: true, optional: false, required: false
  public get currencyCode() {
    return this.getStringAttribute('currency_code');
  }

  // text - computed: true, optional: false, required: false
  public get text() {
    return this.getStringAttribute('text');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}

export class DataOvhOrderCartProductOptionsPlanSelectedPricePriceList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataOvhOrderCartProductOptionsPlanSelectedPricePriceOutputReference {
    return new DataOvhOrderCartProductOptionsPlanSelectedPricePriceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOvhOrderCartProductOptionsPlanSelectedPrice {
}

export function dataOvhOrderCartProductOptionsPlanSelectedPriceToTerraform(struct?: DataOvhOrderCartProductOptionsPlanSelectedPrice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOvhOrderCartProductOptionsPlanSelectedPriceToHclTerraform(struct?: DataOvhOrderCartProductOptionsPlanSelectedPrice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOvhOrderCartProductOptionsPlanSelectedPriceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOvhOrderCartProductOptionsPlanSelectedPrice | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOvhOrderCartProductOptionsPlanSelectedPrice | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // capacities - computed: true, optional: false, required: false
  public get capacities() {
    return this.getListAttribute('capacities');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // duration - computed: true, optional: false, required: false
  public get duration() {
    return this.getStringAttribute('duration');
  }

  // interval - computed: true, optional: false, required: false
  public get interval() {
    return this.getNumberAttribute('interval');
  }

  // maximum_quantity - computed: true, optional: false, required: false
  public get maximumQuantity() {
    return this.getNumberAttribute('maximum_quantity');
  }

  // maximum_repeat - computed: true, optional: false, required: false
  public get maximumRepeat() {
    return this.getNumberAttribute('maximum_repeat');
  }

  // minimum_quantity - computed: true, optional: false, required: false
  public get minimumQuantity() {
    return this.getNumberAttribute('minimum_quantity');
  }

  // minimum_repeat - computed: true, optional: false, required: false
  public get minimumRepeat() {
    return this.getNumberAttribute('minimum_repeat');
  }

  // price - computed: true, optional: false, required: false
  private _price = new DataOvhOrderCartProductOptionsPlanSelectedPricePriceList(this, "price", false);
  public get price() {
    return this._price;
  }

  // price_in_ucents - computed: true, optional: false, required: false
  public get priceInUcents() {
    return this.getNumberAttribute('price_in_ucents');
  }

  // pricing_mode - computed: true, optional: false, required: false
  public get pricingMode() {
    return this.getStringAttribute('pricing_mode');
  }

  // pricing_type - computed: true, optional: false, required: false
  public get pricingType() {
    return this.getStringAttribute('pricing_type');
  }
}

export class DataOvhOrderCartProductOptionsPlanSelectedPriceList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataOvhOrderCartProductOptionsPlanSelectedPriceOutputReference {
    return new DataOvhOrderCartProductOptionsPlanSelectedPriceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/order_cart_product_options_plan ovh_order_cart_product_options_plan}
*/
export class DataOvhOrderCartProductOptionsPlan extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ovh_order_cart_product_options_plan";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOvhOrderCartProductOptionsPlan resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOvhOrderCartProductOptionsPlan to import
  * @param importFromId The id of the existing DataOvhOrderCartProductOptionsPlan that should be imported. Refer to the {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/order_cart_product_options_plan#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOvhOrderCartProductOptionsPlan to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ovh_order_cart_product_options_plan", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/order_cart_product_options_plan ovh_order_cart_product_options_plan} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOvhOrderCartProductOptionsPlanConfig
  */
  public constructor(scope: Construct, id: string, config: DataOvhOrderCartProductOptionsPlanConfig) {
    super(scope, id, {
      terraformResourceType: 'ovh_order_cart_product_options_plan',
      terraformGeneratorMetadata: {
        providerName: 'ovh',
        providerVersion: '2.9.0',
        providerVersionConstraint: '2.9.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cartId = config.cartId;
    this._catalogName = config.catalogName;
    this._id = config.id;
    this._optionsPlanCode = config.optionsPlanCode;
    this._planCode = config.planCode;
    this._priceCapacity = config.priceCapacity;
    this._product = config.product;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cart_id - computed: false, optional: false, required: true
  private _cartId?: string; 
  public get cartId() {
    return this.getStringAttribute('cart_id');
  }
  public set cartId(value: string) {
    this._cartId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cartIdInput() {
    return this._cartId;
  }

  // catalog_name - computed: false, optional: true, required: false
  private _catalogName?: string; 
  public get catalogName() {
    return this.getStringAttribute('catalog_name');
  }
  public set catalogName(value: string) {
    this._catalogName = value;
  }
  public resetCatalogName() {
    this._catalogName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogNameInput() {
    return this._catalogName;
  }

  // exclusive - computed: true, optional: false, required: false
  public get exclusive() {
    return this.getBooleanAttribute('exclusive');
  }

  // family - computed: true, optional: false, required: false
  public get family() {
    return this.getStringAttribute('family');
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

  // mandatory - computed: true, optional: false, required: false
  public get mandatory() {
    return this.getBooleanAttribute('mandatory');
  }

  // options_plan_code - computed: false, optional: false, required: true
  private _optionsPlanCode?: string; 
  public get optionsPlanCode() {
    return this.getStringAttribute('options_plan_code');
  }
  public set optionsPlanCode(value: string) {
    this._optionsPlanCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsPlanCodeInput() {
    return this._optionsPlanCode;
  }

  // plan_code - computed: false, optional: false, required: true
  private _planCode?: string; 
  public get planCode() {
    return this.getStringAttribute('plan_code');
  }
  public set planCode(value: string) {
    this._planCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get planCodeInput() {
    return this._planCode;
  }

  // price_capacity - computed: false, optional: false, required: true
  private _priceCapacity?: string; 
  public get priceCapacity() {
    return this.getStringAttribute('price_capacity');
  }
  public set priceCapacity(value: string) {
    this._priceCapacity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priceCapacityInput() {
    return this._priceCapacity;
  }

  // prices - computed: true, optional: false, required: false
  private _prices = new DataOvhOrderCartProductOptionsPlanPricesList(this, "prices", false);
  public get prices() {
    return this._prices;
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

  // product_name - computed: true, optional: false, required: false
  public get productName() {
    return this.getStringAttribute('product_name');
  }

  // product_type - computed: true, optional: false, required: false
  public get productType() {
    return this.getStringAttribute('product_type');
  }

  // selected_price - computed: true, optional: false, required: false
  private _selectedPrice = new DataOvhOrderCartProductOptionsPlanSelectedPriceList(this, "selected_price", false);
  public get selectedPrice() {
    return this._selectedPrice;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cart_id: cdktf.stringToTerraform(this._cartId),
      catalog_name: cdktf.stringToTerraform(this._catalogName),
      id: cdktf.stringToTerraform(this._id),
      options_plan_code: cdktf.stringToTerraform(this._optionsPlanCode),
      plan_code: cdktf.stringToTerraform(this._planCode),
      price_capacity: cdktf.stringToTerraform(this._priceCapacity),
      product: cdktf.stringToTerraform(this._product),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cart_id: {
        value: cdktf.stringToHclTerraform(this._cartId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      catalog_name: {
        value: cdktf.stringToHclTerraform(this._catalogName),
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
      options_plan_code: {
        value: cdktf.stringToHclTerraform(this._optionsPlanCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      plan_code: {
        value: cdktf.stringToHclTerraform(this._planCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      price_capacity: {
        value: cdktf.stringToHclTerraform(this._priceCapacity),
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
