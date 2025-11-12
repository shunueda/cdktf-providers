// https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/product_discount
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProductDiscountConfig extends cdktf.TerraformMetaArguments {
  /**
  * [LocalizedString](https://docs.commercetools.com/api/types#localizedstring)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/product_discount#description ProductDiscount#description}
  */
  readonly description?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/product_discount#id ProductDiscount#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * When set the product discount is applied to products matching the predicate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/product_discount#is_active ProductDiscount#is_active}
  */
  readonly isActive?: boolean | cdktf.IResolvable;
  /**
  * User-defined unique identifier for the ProductDiscount. Must be unique across a project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/product_discount#key ProductDiscount#key}
  */
  readonly key?: string;
  /**
  * [LocalizedString](https://docs.commercetools.com/api/types#localizedstring)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/product_discount#name ProductDiscount#name}
  */
  readonly name: { [key: string]: string };
  /**
  * A valid [Product Predicate](https://docs.commercetools.com/api/projects/predicates#product-predicates)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/product_discount#predicate ProductDiscount#predicate}
  */
  readonly predicate: string;
  /**
  * The string must contain a number between 0 and 1. All matching product discounts are applied to a product in the order defined by this field. A discount with greater sort order is prioritized higher than a discount with lower sort order. The sort order is unambiguous among all product discounts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/product_discount#sort_order ProductDiscount#sort_order}
  */
  readonly sortOrder: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/product_discount#valid_from ProductDiscount#valid_from}
  */
  readonly validFrom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/product_discount#valid_until ProductDiscount#valid_until}
  */
  readonly validUntil?: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/product_discount#value ProductDiscount#value}
  */
  readonly value: ProductDiscountValue;
}
export interface ProductDiscountValueMoney {
  /**
  * The amount in cents (the smallest indivisible unit of the currency)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/product_discount#cent_amount ProductDiscount#cent_amount}
  */
  readonly centAmount: number;
  /**
  * The currency code compliant to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/product_discount#currency_code ProductDiscount#currency_code}
  */
  readonly currencyCode: string;
  /**
  * The number of default fraction digits for the given currency, like 2 for EUR or 0 for JPY
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/product_discount#fraction_digits ProductDiscount#fraction_digits}
  */
  readonly fractionDigits?: number;
}

export function productDiscountValueMoneyToTerraform(struct?: ProductDiscountValueMoney | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cent_amount: cdktf.numberToTerraform(struct!.centAmount),
    currency_code: cdktf.stringToTerraform(struct!.currencyCode),
    fraction_digits: cdktf.numberToTerraform(struct!.fractionDigits),
  }
}


export function productDiscountValueMoneyToHclTerraform(struct?: ProductDiscountValueMoney | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cent_amount: {
      value: cdktf.numberToHclTerraform(struct!.centAmount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    currency_code: {
      value: cdktf.stringToHclTerraform(struct!.currencyCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fraction_digits: {
      value: cdktf.numberToHclTerraform(struct!.fractionDigits),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProductDiscountValueMoneyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProductDiscountValueMoney | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._centAmount !== undefined) {
      hasAnyValues = true;
      internalValueResult.centAmount = this._centAmount;
    }
    if (this._currencyCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.currencyCode = this._currencyCode;
    }
    if (this._fractionDigits !== undefined) {
      hasAnyValues = true;
      internalValueResult.fractionDigits = this._fractionDigits;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProductDiscountValueMoney | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._centAmount = undefined;
      this._currencyCode = undefined;
      this._fractionDigits = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._centAmount = value.centAmount;
      this._currencyCode = value.currencyCode;
      this._fractionDigits = value.fractionDigits;
    }
  }

  // cent_amount - computed: false, optional: false, required: true
  private _centAmount?: number; 
  public get centAmount() {
    return this.getNumberAttribute('cent_amount');
  }
  public set centAmount(value: number) {
    this._centAmount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get centAmountInput() {
    return this._centAmount;
  }

  // currency_code - computed: false, optional: false, required: true
  private _currencyCode?: string; 
  public get currencyCode() {
    return this.getStringAttribute('currency_code');
  }
  public set currencyCode(value: string) {
    this._currencyCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get currencyCodeInput() {
    return this._currencyCode;
  }

  // fraction_digits - computed: true, optional: true, required: false
  private _fractionDigits?: number; 
  public get fractionDigits() {
    return this.getNumberAttribute('fraction_digits');
  }
  public set fractionDigits(value: number) {
    this._fractionDigits = value;
  }
  public resetFractionDigits() {
    this._fractionDigits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fractionDigitsInput() {
    return this._fractionDigits;
  }
}

export class ProductDiscountValueMoneyList extends cdktf.ComplexList {
  public internalValue? : ProductDiscountValueMoney[] | cdktf.IResolvable

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
  public get(index: number): ProductDiscountValueMoneyOutputReference {
    return new ProductDiscountValueMoneyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProductDiscountValue {
  /**
  * Relative discount specific fields
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/product_discount#permyriad ProductDiscount#permyriad}
  */
  readonly permyriad?: number;
  /**
  * Currently supports absolute/relative/external
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/product_discount#type ProductDiscount#type}
  */
  readonly type: string;
  /**
  * money block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/product_discount#money ProductDiscount#money}
  */
  readonly money?: ProductDiscountValueMoney[] | cdktf.IResolvable;
}

export function productDiscountValueToTerraform(struct?: ProductDiscountValueOutputReference | ProductDiscountValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    permyriad: cdktf.numberToTerraform(struct!.permyriad),
    type: cdktf.stringToTerraform(struct!.type),
    money: cdktf.listMapper(productDiscountValueMoneyToTerraform, true)(struct!.money),
  }
}


export function productDiscountValueToHclTerraform(struct?: ProductDiscountValueOutputReference | ProductDiscountValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    permyriad: {
      value: cdktf.numberToHclTerraform(struct!.permyriad),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    money: {
      value: cdktf.listMapperHcl(productDiscountValueMoneyToHclTerraform, true)(struct!.money),
      isBlock: true,
      type: "list",
      storageClassType: "ProductDiscountValueMoneyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProductDiscountValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProductDiscountValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._permyriad !== undefined) {
      hasAnyValues = true;
      internalValueResult.permyriad = this._permyriad;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._money?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.money = this._money?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProductDiscountValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._permyriad = undefined;
      this._type = undefined;
      this._money.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._permyriad = value.permyriad;
      this._type = value.type;
      this._money.internalValue = value.money;
    }
  }

  // permyriad - computed: false, optional: true, required: false
  private _permyriad?: number; 
  public get permyriad() {
    return this.getNumberAttribute('permyriad');
  }
  public set permyriad(value: number) {
    this._permyriad = value;
  }
  public resetPermyriad() {
    this._permyriad = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permyriadInput() {
    return this._permyriad;
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

  // money - computed: false, optional: true, required: false
  private _money = new ProductDiscountValueMoneyList(this, "money", false);
  public get money() {
    return this._money;
  }
  public putMoney(value: ProductDiscountValueMoney[] | cdktf.IResolvable) {
    this._money.internalValue = value;
  }
  public resetMoney() {
    this._money.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moneyInput() {
    return this._money.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/product_discount commercetools_product_discount}
*/
export class ProductDiscount extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "commercetools_product_discount";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProductDiscount resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProductDiscount to import
  * @param importFromId The id of the existing ProductDiscount that should be imported. Refer to the {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/product_discount#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProductDiscount to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "commercetools_product_discount", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/product_discount commercetools_product_discount} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProductDiscountConfig
  */
  public constructor(scope: Construct, id: string, config: ProductDiscountConfig) {
    super(scope, id, {
      terraformResourceType: 'commercetools_product_discount',
      terraformGeneratorMetadata: {
        providerName: 'commercetools',
        providerVersion: '1.21.1',
        providerVersionConstraint: '1.21.1'
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
    this._isActive = config.isActive;
    this._key = config.key;
    this._name = config.name;
    this._predicate = config.predicate;
    this._sortOrder = config.sortOrder;
    this._validFrom = config.validFrom;
    this._validUntil = config.validUntil;
    this._value.internalValue = config.value;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: { [key: string]: string }; 
  public get description() {
    return this.getStringMapAttribute('description');
  }
  public set description(value: { [key: string]: string }) {
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

  // is_active - computed: false, optional: true, required: false
  private _isActive?: boolean | cdktf.IResolvable; 
  public get isActive() {
    return this.getBooleanAttribute('is_active');
  }
  public set isActive(value: boolean | cdktf.IResolvable) {
    this._isActive = value;
  }
  public resetIsActive() {
    this._isActive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isActiveInput() {
    return this._isActive;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // name - computed: false, optional: false, required: true
  private _name?: { [key: string]: string }; 
  public get name() {
    return this.getStringMapAttribute('name');
  }
  public set name(value: { [key: string]: string }) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // predicate - computed: false, optional: false, required: true
  private _predicate?: string; 
  public get predicate() {
    return this.getStringAttribute('predicate');
  }
  public set predicate(value: string) {
    this._predicate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get predicateInput() {
    return this._predicate;
  }

  // sort_order - computed: false, optional: false, required: true
  private _sortOrder?: string; 
  public get sortOrder() {
    return this.getStringAttribute('sort_order');
  }
  public set sortOrder(value: string) {
    this._sortOrder = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sortOrderInput() {
    return this._sortOrder;
  }

  // valid_from - computed: false, optional: true, required: false
  private _validFrom?: string; 
  public get validFrom() {
    return this.getStringAttribute('valid_from');
  }
  public set validFrom(value: string) {
    this._validFrom = value;
  }
  public resetValidFrom() {
    this._validFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validFromInput() {
    return this._validFrom;
  }

  // valid_until - computed: false, optional: true, required: false
  private _validUntil?: string; 
  public get validUntil() {
    return this.getStringAttribute('valid_until');
  }
  public set validUntil(value: string) {
    this._validUntil = value;
  }
  public resetValidUntil() {
    this._validUntil = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validUntilInput() {
    return this._validUntil;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // value - computed: false, optional: false, required: true
  private _value = new ProductDiscountValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: ProductDiscountValue) {
    this._value.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.hashMapper(cdktf.stringToTerraform)(this._description),
      id: cdktf.stringToTerraform(this._id),
      is_active: cdktf.booleanToTerraform(this._isActive),
      key: cdktf.stringToTerraform(this._key),
      name: cdktf.hashMapper(cdktf.stringToTerraform)(this._name),
      predicate: cdktf.stringToTerraform(this._predicate),
      sort_order: cdktf.stringToTerraform(this._sortOrder),
      valid_from: cdktf.stringToTerraform(this._validFrom),
      valid_until: cdktf.stringToTerraform(this._validUntil),
      value: productDiscountValueToTerraform(this._value.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._description),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_active: {
        value: cdktf.booleanToHclTerraform(this._isActive),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      key: {
        value: cdktf.stringToHclTerraform(this._key),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._name),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      predicate: {
        value: cdktf.stringToHclTerraform(this._predicate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sort_order: {
        value: cdktf.stringToHclTerraform(this._sortOrder),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      valid_from: {
        value: cdktf.stringToHclTerraform(this._validFrom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      valid_until: {
        value: cdktf.stringToHclTerraform(this._validUntil),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      value: {
        value: productDiscountValueToHclTerraform(this._value.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ProductDiscountValueList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
